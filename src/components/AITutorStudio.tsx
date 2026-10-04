import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Eye,
  EyeOff,
  Languages,
  Lightbulb,
  MessageCircleQuestion,
  RefreshCw,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TriangleAlert,
} from "lucide-react";
import type {
  AdaptiveSnapshot,
  HighSchoolGrade,
  TutorAIResponse,
  TutorConversationTurn,
  TutorIntent,
  ResearchAttemptRecord,
  ResearchBarrierType,
} from "../types";
import {
  getFirstLessonWithQuestions,
  getStandardQuestionsForLesson,
  STANDARD_LESSONS,
  type StandardStudentQuestion,
} from "../data/standardQuestionBank";
import {
  getGoogleSheetsApiUrl,
  tutorViaGoogleSheetsAI,
} from "../services/googleSheetsSyncService";
import { LessonTreeSelector } from "./LessonTreeSelector";
import { RichMathText } from "./MathRenderer";
import { StandardQuestionMedia } from "./StandardQuestionMedia";
import { MathInputToolbar } from "./MathInputToolbar";

const TUTOR_FORMATS = ["TN", "TLN", "TL"] as const;

type UiMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  data?: TutorAIResponse;
  provider?: string;
};

interface AITutorStudioProps {
  selectedGrade: HighSchoolGrade;
  onGradeChange: (grade: HighSchoolGrade) => void;
  initialLessonId?: string;
  onLessonChange?: (lessonId: string) => void;
  adaptiveSnapshot: AdaptiveSnapshot;
  mathScore: number;
  mathEnglishScore: number;
  onResearchAttempt?: (event: Omit<ResearchAttemptRecord, "id" | "studentId" | "classId" | "group" | "createdAt">) => void;
  onTutorActivity?: (event: {
    problemId: string;
    title: string;
    grade: HighSchoolGrade;
    lessonId: string;
    hintStage: number;
    intent: TutorIntent;
    sessionStarted: boolean;
  }) => void;
}

const modeLabels: Record<string, string> = {
  LANGUAGE: "Cầu nối ngôn ngữ",
  CONCEPT: "Gợi ý khái niệm",
  STRATEGY: "Gợi ý chiến lược",
  FIRST_STEP: "Bước đầu tiên",
  CHECK_STEP: "Kiểm tra bước làm",
  SOCRATIC: "Câu hỏi Socratic",
  ENCOURAGEMENT: "Khích lệ học tập",
};

const assessmentMeta: Record<string, { label: string; className: string }> = {
  CORRECT: { label: "Bước làm hợp lý", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  PARTIAL: { label: "Đúng một phần", className: "bg-amber-50 text-amber-700 border-amber-200" },
  INCORRECT: { label: "Cần kiểm tra lại", className: "bg-rose-50 text-rose-700 border-rose-200" },
  NOT_APPLICABLE: { label: "Đang gợi ý", className: "bg-slate-50 text-slate-600 border-slate-200" },
};

const formatLabel = (q: StandardStudentQuestion) =>
  q.format === "TN" ? "Trắc nghiệm" : q.format === "TLN" ? "Trả lời ngắn" : "Tự luận";

const pickTutorIndex = (questions: StandardStudentQuestion[], avoid = -1) => {
  if (!questions.length) return 0;
  const reasoning = questions
    .map((q, index) => ({ q, index }))
    .filter(({ q, index }) => q.format !== "TN" && index !== avoid);
  if (reasoning.length) return reasoning[Math.floor(Math.random() * reasoning.length)].index;
  if (questions.length === 1) return 0;
  let next = Math.floor(Math.random() * questions.length);
  if (next === avoid) next = (next + 1) % questions.length;
  return next;
};

export const AITutorStudio: React.FC<AITutorStudioProps> = ({
  selectedGrade,
  onGradeChange,
  initialLessonId,
  onLessonChange,
  adaptiveSnapshot,
  mathScore,
  mathEnglishScore,
  onTutorActivity,
  onResearchAttempt,
}) => {
  const requestedInitial = initialLessonId && getStandardQuestionsForLesson(initialLessonId, [...TUTOR_FORMATS]).length
    ? STANDARD_LESSONS.find((lesson) => lesson.id === initialLessonId && lesson.grade === selectedGrade)
    : undefined;
  const firstLesson = requestedInitial || getFirstLessonWithQuestions(selectedGrade, [...TUTOR_FORMATS]);
  const [selectedLessonId, setSelectedLessonId] = useState(firstLesson?.id || "");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showVietnamese, setShowVietnamese] = useState(false);
  const [showOfficialSolution, setShowOfficialSolution] = useState(false);
  const [highestHintStage, setHighestHintStage] = useState(0);
  const tutorInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const lesson = STANDARD_LESSONS.find((item) => item.id === selectedLessonId);
    if (!lesson || lesson.grade !== selectedGrade || !getStandardQuestionsForLesson(selectedLessonId, [...TUTOR_FORMATS]).length) {
      const next = getFirstLessonWithQuestions(selectedGrade, [...TUTOR_FORMATS]);
      setSelectedLessonId(next?.id || "");
      if (next) onLessonChange?.(next.id);
    }
  }, [selectedGrade, selectedLessonId, onLessonChange]);

  const questions = useMemo(
    () => getStandardQuestionsForLesson(selectedLessonId, [...TUTOR_FORMATS]),
    [selectedLessonId]
  );

  useEffect(() => {
    setQuestionIndex(pickTutorIndex(questions));
  }, [selectedLessonId, questions.length]);

  const question = questions[questionIndex];
  const selectedLesson = STANDARD_LESSONS.find((lesson) => lesson.id === selectedLessonId);

  const resetSession = (keepQuestion = true) => {
    setMessages([]);
    setInput("");
    setError("");
    setHighestHintStage(0);
    setShowOfficialSolution(false);
    if (!keepQuestion && questions.length) setQuestionIndex(pickTutorIndex(questions, questionIndex));
  };

  useEffect(() => {
    resetSession(true);
  }, [question?.id]);

  const historyForApi = (): TutorConversationTurn[] =>
    messages.slice(-8).map((message) => ({
      role: message.role,
      content: message.role === "assistant" && message.data?.nextQuestion
        ? `${message.content}\nNext question: ${message.data.nextQuestion}`
        : message.content,
    }));

  const barrierForIntent = (intent: TutorIntent): ResearchBarrierType => {
    if (intent === "LANGUAGE") return "L";
    if (intent === "SOCRATIC" || intent === "CHECK_STEP") return "C";
    if (["CONCEPT", "STRATEGY", "FIRST_STEP"].includes(intent)) return "M";
    return "NONE";
  };

  const sendTutorMessage = async (message: string, intent: TutorIntent, requestedHintStage = 0) => {
    const clean = message.trim();
    if (!question || !clean || loading) return;
    if (!getGoogleSheetsApiUrl()) {
      setError("Chưa cấu hình Google Sheets Learning Database. AI Tutor dùng cùng backend Gemini an toàn với Level 3.");
      return;
    }

    const sessionStarted = messages.length === 0;
    const userMessage: UiMessage = { id: `u_${Date.now()}`, role: "user", content: clean };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const result = await tutorViaGoogleSheetsAI({
        gradeLevel: selectedGrade,
        lessonId: selectedLessonId,
        problemId: question.id,
        problemFormat: question.format,
        problemDifficulty: question.difficulty,
        problemEnglish: question.questionEn,
        problemVietnamese: question.questionVi,
        officialSolution: question.solutionEn || question.solutionVi,
        correctAnswer: question.correctAnswer,
        userMessage: clean,
        intent,
        hintStage: requestedHintStage,
        history: [...historyForApi(), { role: "user", content: clean }],
        adaptive: adaptiveSnapshot,
        mathScore,
        mathEnglishScore,
      });

      const data = result.data;
      const assistantContent = data.tutorReply.trim();
      setMessages((prev) => [
        ...prev,
        {
          id: `a_${Date.now()}`,
          role: "assistant",
          content: assistantContent,
          data,
          provider: `${result.provider || "Google Apps Script + Gemini"}${result.model ? ` · ${result.model}` : ""}`,
        },
      ]);
      setHighestHintStage((prev) => Math.max(prev, Number(data.hintStage || requestedHintStage || 0)));
      onTutorActivity?.({
        problemId: question.id,
        title: selectedLesson?.titleVi || question.lessonTitleVi,
        grade: selectedGrade,
        lessonId: selectedLessonId,
        hintStage: Number(data.hintStage || requestedHintStage || 0),
        intent,
        sessionStarted,
      });
      const researchHintLevel = Math.max(0, Math.min(3, Number(data.hintStage || requestedHintStage || 0))) as 0 | 1 | 2 | 3;
      onResearchAttempt?.({
        grade: selectedGrade,
        chapterId: question.chapterId,
        lessonId: selectedLessonId,
        questionId: question.id,
        questionVersion: 1,
        activityType: "tutor",
        attemptNumber: 1,
        firstAttemptCorrect: data.stepAssessment === "CORRECT",
        finalCorrect: data.stepAssessment === "CORRECT",
        barrierType: barrierForIntent(intent),
        hintLevel: researchHintLevel,
        hintCount: researchHintLevel > 0 ? 1 : 0,
        retryCount: 0,
        independentMode: false,
        supportRequestedByStudent: true,
        supportTriggeredBySystem: false,
        translationUsed: intent === "LANGUAGE",
      });
    } catch (err) {
      const anyErr = err as Error & { temporary?: boolean; retryAfterSec?: number; code?: string };
      const msg = anyErr instanceof Error ? anyErr.message : "AI Tutor chưa phản hồi.";
      // Giữ nguyên nội dung HS để có thể gửi lại mà không tạo một turn mồ côi trong history.
      setMessages((prev) => prev.filter((item) => item.id !== userMessage.id));
      setInput(clean);
      setError(anyErr.temporary || /GEMINI_BUSY|quá tải|temporar|503|429/i.test(msg)
        ? "Gemini đang bận tạm thời. Nội dung em vừa nhập đã được giữ lại; hãy bấm gửi lại sau 5–15 giây."
        : msg);
    } finally {
      setLoading(false);
    }
  };

  const quickAsk = (intent: TutorIntent, stage: number, text: string) => sendTutorMessage(text, intent, stage);

  const checkStudentStep = () => {
    if (!input.trim()) {
      setError("Hãy nhập bước giải hoặc suy luận của em vào ô chat trước, rồi bấm “Kiểm tra bước em làm”.");
      return;
    }
    void sendTutorMessage(input, "CHECK_STEP", Math.max(1, highestHintStage));
  };

  const latestAssistant = [...messages].reverse().find((m) => m.role === "assistant" && m.data)?.data;
  const assessment = latestAssistant ? assessmentMeta[latestAssistant.stepAssessment] : null;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-cyan-50 p-5 shadow-xs">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-black text-white">
              <Bot className="w-3.5 h-3.5" /> AI TUTOR + MATH KEYBOARD
            </div>
            <h2 className="mt-2 text-xl font-black text-slate-900">Học cùng AI theo kiểu Socratic — gợi ý để em tự giải</h2>
            <p className="mt-1 text-xs leading-5 text-slate-600">
              Tutor bám đúng câu hỏi và lời giải chuẩn của Teacher Bank. AI không tự sinh đề mới, không đưa đáp án đầy đủ ngay; thay vào đó hỗ trợ theo 4 tầng: Ngôn ngữ → Khái niệm → Chiến lược → Bước đầu tiên.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center shrink-0">
            <div className="rounded-xl border border-emerald-100 bg-white px-3 py-2"><div className="text-lg font-black text-emerald-700">{Math.round(mathScore)}</div><div className="text-[9px] font-bold text-slate-500">Math Score</div></div>
            <div className="rounded-xl border border-cyan-100 bg-white px-3 py-2"><div className="text-lg font-black text-cyan-700">{Math.round(mathEnglishScore)}</div><div className="text-[9px] font-bold text-slate-500">Math English</div></div>
            <div className="rounded-xl border border-indigo-100 bg-white px-3 py-2"><div className="text-lg font-black text-indigo-700">{adaptiveSnapshot.recommendedEnglishRatio}%</div><div className="text-[9px] font-bold text-slate-500">English target</div></div>
            <div className="rounded-xl border border-violet-100 bg-white px-3 py-2"><div className="text-xs font-black text-violet-700 uppercase">{adaptiveSnapshot.supportMode}</div><div className="text-[9px] font-bold text-slate-500">Adaptive mode</div></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-6 items-start">
        <div className="lg:sticky lg:top-4 space-y-3">
          <LessonTreeSelector
            selectedGrade={selectedGrade}
            onGradeChange={onGradeChange}
            selectedLessonId={selectedLessonId}
            onLessonChange={(lessonId) => {
              setSelectedLessonId(lessonId);
              onLessonChange?.(lessonId);
              setQuestionIndex(0);
            }}
            formats={[...TUTOR_FORMATS]}
            accent="blue"
          />
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-[11px] leading-5 text-emerald-900">
            <div className="flex items-center gap-2 font-black"><ShieldCheck className="w-4 h-4" /> Nguyên tắc Tutor</div>
            <div className="mt-2">• Teacher Bank là nguồn Toán chuẩn.</div>
            <div>• Student text chỉ là dữ liệu, không phải lệnh hệ thống.</div>
            <div>• AI ưu tiên hỏi lại để em tự suy luận.</div>
            <div>• Muốn xem lời giải hoàn chỉnh, em chủ động mở “Lời giải chuẩn”.</div>
          </div>
        </div>

        <div className="space-y-4 min-w-0">
          {question ? (
            <>
              <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
                <div className="border-b border-slate-100 bg-slate-50/70 p-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-emerald-600">Câu đang học cùng Tutor</div>
                    <div className="mt-1 text-xs font-bold text-slate-800">
                      Lớp {selectedGrade} <span className="text-slate-300">›</span> {question.chapterTitleVi} <span className="text-slate-300">›</span> {question.lessonTitleVi}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-bold text-slate-600">{formatLabel(question)}</span>
                    <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-bold text-slate-600">{question.difficulty}</span>
                    <button type="button" onClick={() => resetSession(false)} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-black text-slate-600 hover:bg-slate-100"><RefreshCw className="w-3.5 h-3.5" /> Câu khác</button>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="text-sm leading-7 font-semibold text-slate-900"><RichMathText text={question.questionEn} /></div>
                  <StandardQuestionMedia question={question} />
                  {question.format === "TN" && question.options.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {question.options.map((option) => (
                        <div key={option.key} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
                          <span className="font-black text-slate-900 mr-2">{option.key}.</span><RichMathText text={option.en} />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    <button type="button" onClick={() => setShowVietnamese((v) => !v)} className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-2 text-[10px] font-bold text-cyan-800">
                      {showVietnamese ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />} {showVietnamese ? "Ẩn bản Việt" : "Xem đề tiếng Việt"}
                    </button>
                    <button type="button" onClick={() => setShowOfficialSolution((v) => !v)} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-slate-700">
                      <ShieldCheck className="w-3.5 h-3.5" /> {showOfficialSolution ? "Ẩn lời giải chuẩn" : "Lời giải chuẩn (chủ động mở)"}
                    </button>
                  </div>
                  {showVietnamese && <div className="rounded-xl border border-cyan-100 bg-cyan-50/60 p-3 text-xs leading-6 text-slate-700"><RichMathText text={question.questionVi} /></div>}
                  {showOfficialSolution && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-6 text-amber-950">
                      <div className="font-black mb-2">Lời giải đã kiểm duyệt từ Teacher Bank</div>
                      <RichMathText text={question.solutionEn || question.solutionVi} />
                      {question.solutionVi && question.solutionEn && <details className="mt-3"><summary className="cursor-pointer font-bold">Xem thêm bản tiếng Việt</summary><div className="mt-2"><RichMathText text={question.solutionVi} /></div></details>}
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-white shadow-xs overflow-hidden">
                <div className="border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-cyan-50 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-black text-emerald-950"><BrainCircuit className="w-4 h-4 text-emerald-600" /> Gợi ý theo tầng</div>
                      <div className="mt-1 text-[10px] text-emerald-700">Tutor chỉ mở đúng mức hỗ trợ em yêu cầu. Tầng cao hơn không tự động lộ lời giải hoàn chỉnh.</div>
                    </div>
                    <div className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-[10px] font-black text-emerald-700">Đã dùng tới tầng {highestHintStage}/4</div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 xl:grid-cols-4 gap-2">
                    <button type="button" disabled={loading} onClick={() => void quickAsk("LANGUAGE", 1, "Em chưa hiểu cách đọc đề. Hãy giúp em hiểu từ khóa và yêu cầu của bài nhưng chưa giải bài.")} className="rounded-xl border border-cyan-200 bg-white p-3 text-left hover:bg-cyan-50 disabled:opacity-50"><Languages className="w-4 h-4 text-cyan-600" /><div className="mt-1 text-[11px] font-black">1. Ngôn ngữ</div><div className="text-[9px] text-slate-500">Từ khóa & yêu cầu</div></button>
                    <button type="button" disabled={loading} onClick={() => void quickAsk("CONCEPT", 2, "Hãy gợi ý khái niệm hoặc định lý Toán em cần nhớ cho câu này, chưa thay số và chưa giải hoàn chỉnh.")} className="rounded-xl border border-indigo-200 bg-white p-3 text-left hover:bg-indigo-50 disabled:opacity-50"><Lightbulb className="w-4 h-4 text-indigo-600" /><div className="mt-1 text-[11px] font-black">2. Khái niệm</div><div className="text-[9px] text-slate-500">Công thức/định lý</div></button>
                    <button type="button" disabled={loading} onClick={() => void quickAsk("STRATEGY", 3, "Hãy gợi ý hướng giải và đặt một câu hỏi để em tự chọn bước tiếp theo. Không đưa đáp án cuối.")} className="rounded-xl border border-violet-200 bg-white p-3 text-left hover:bg-violet-50 disabled:opacity-50"><Target className="w-4 h-4 text-violet-600" /><div className="mt-1 text-[11px] font-black">3. Chiến lược</div><div className="text-[9px] text-slate-500">Chọn hướng giải</div></button>
                    <button type="button" disabled={loading} onClick={() => void quickAsk("FIRST_STEP", 4, "Em vẫn đang bí. Hãy chỉ cho em đúng bước đầu tiên cần làm, sau đó dừng lại và hỏi em kết quả của bước đó.")} className="rounded-xl border border-amber-200 bg-white p-3 text-left hover:bg-amber-50 disabled:opacity-50"><ChevronRight className="w-4 h-4 text-amber-600" /><div className="mt-1 text-[11px] font-black">4. Bước đầu</div><div className="text-[9px] text-slate-500">Chỉ một bước</div></button>
                  </div>
                </div>

                <div className="p-4 space-y-3 max-h-[520px] overflow-y-auto bg-slate-50/40">
                  {messages.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-emerald-200 bg-white p-5 text-center">
                      <MessageCircleQuestion className="w-8 h-8 mx-auto text-emerald-400" />
                      <div className="mt-2 text-sm font-black text-slate-800">Em muốn bắt đầu từ đâu?</div>
                      <div className="mt-1 text-xs text-slate-500">Chọn một tầng gợi ý phía trên hoặc nhập câu hỏi/bước làm của em bên dưới.</div>
                    </div>
                  )}
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[92%] rounded-2xl px-4 py-3 ${message.role === "user" ? "bg-emerald-600 text-white" : "border border-slate-200 bg-white text-slate-700"}`}>
                        {message.role === "assistant" && message.data && (
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-black text-emerald-700">{modeLabels[message.data.mode] || message.data.mode}</span>
                            {assessmentMeta[message.data.stepAssessment] && <span className={`rounded-full border px-2 py-1 text-[9px] font-black ${assessmentMeta[message.data.stepAssessment].className}`}>{assessmentMeta[message.data.stepAssessment].label}</span>}
                          </div>
                        )}
                        <div className="text-xs leading-6"><RichMathText text={message.content} /></div>
                        {message.role === "assistant" && message.data?.nextQuestion && (
                          <div className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50 p-2.5 text-[10px] leading-5 text-emerald-900"><span className="font-black">Tutor hỏi em:</span> <RichMathText text={message.data.nextQuestion} /></div>
                        )}
                        {message.role === "assistant" && message.data?.mathEnglishFocus && (
                          <div className="mt-3 rounded-xl border border-cyan-100 bg-cyan-50 p-2.5 text-[10px] text-cyan-900"><span className="font-black">Math English:</span> {message.data.mathEnglishFocus}</div>
                        )}
                        {message.role === "assistant" && message.data?.keyTerms?.length ? (
                          <div className="mt-2 flex flex-wrap gap-1.5">{message.data.keyTerms.slice(0, 5).map((term) => <span key={`${message.id}_${term.term}`} className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[9px] text-slate-600"><b>{term.term}</b> = {term.meaningVi}</span>)}</div>
                        ) : null}
                        {message.role === "assistant" && message.provider && <div className="mt-2 text-[8px] font-bold text-slate-400">{message.provider}</div>}
                      </div>
                    </div>
                  ))}
                  {loading && <div className="flex justify-start"><div className="rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-xs text-emerald-700"><Sparkles className="inline w-3.5 h-3.5 mr-1 animate-pulse" /> Tutor đang đọc bước làm và chọn mức gợi ý phù hợp...</div></div>}
                </div>

                <div className="border-t border-slate-100 bg-white p-4 space-y-2">
                  {error && <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-[11px] leading-5 text-amber-900"><TriangleAlert className="w-4 h-4 mt-0.5 shrink-0" /> {error}</div>}
                  {assessment && latestAssistant?.stepAssessment !== "NOT_APPLICABLE" && (
                    <div className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold ${assessment.className}`}><CheckCircle2 className="w-3.5 h-3.5" /> {assessment.label}</div>
                  )}
                  <textarea
                    ref={tutorInputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        void sendTutorMessage(input, "SOCRATIC", highestHintStage);
                      }
                    }}
                    placeholder="Ví dụ: Em nghĩ bước đầu là lấy đạo hàm f'(x)=... Bạn kiểm tra giúp em đúng chưa?"
                    className="min-h-24 w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-6 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                  />
                  <MathInputToolbar
                    value={input}
                    onChange={setInput}
                    inputRef={tutorInputRef}
                    accent="emerald"
                    showEnglishTemplates
                    defaultOpen
                  />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <button type="button" onClick={checkStudentStep} disabled={loading} className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-[11px] font-black text-indigo-700 hover:bg-indigo-100 disabled:opacity-50"><BrainCircuit className="w-3.5 h-3.5" /> Kiểm tra bước em làm</button>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => resetSession(true)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[11px] font-bold text-slate-600 hover:bg-slate-50">Cuộc trò chuyện mới</button>
                      <button type="button" onClick={() => void sendTutorMessage(input, "SOCRATIC", highestHintStage)} disabled={loading || !input.trim()} className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-[11px] font-black text-white shadow-sm hover:bg-emerald-700 disabled:opacity-50"><Send className="w-3.5 h-3.5" /> Gửi Tutor</button>
                    </div>
                  </div>
                </div>
              </div>

            </>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center"><Bot className="w-8 h-8 text-slate-300 mx-auto" /><div className="mt-2 text-sm font-bold text-slate-700">Bài này chưa có câu chuẩn để Tutor sử dụng.</div></div>
          )}
        </div>
      </div>
    </div>
  );
};
