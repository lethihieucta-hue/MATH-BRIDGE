import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  FileText,
  Lightbulb,
  PenTool,
  RefreshCw,
  Send,
  Volume2,
  XCircle,
} from "lucide-react";
import type { AdaptiveSnapshot, EssayGradingResult, HighSchoolGrade, ResearchAttemptRecord, ResearchBarrierType } from "../types";
import {
  getFirstLessonWithQuestions,
  getStandardQuestionsForLesson,
  STANDARD_BANK_SUMMARY,
  STANDARD_LESSONS,
  type StandardStudentQuestion,
} from "../data/standardQuestionBank";
import { getGoogleSheetsApiUrl, gradeEssayViaGoogleSheetsAI } from "../services/googleSheetsSyncService";
import { LessonTreeSelector } from "./LessonTreeSelector";
import { RichMathText } from "./MathRenderer";
import { StandardQuestionMedia } from "./StandardQuestionMedia";
import { MathInputToolbar } from "./MathInputToolbar";

interface Level3EssayStudioProps {
  selectedGrade: HighSchoolGrade;
  onGradeChange: (grade: HighSchoolGrade) => void;
  onAddXP: (amount: number) => void;
  onNavigateToLevel1?: () => void;
  onNavigateToLevel2?: () => void;
  initialLessonId?: string;
  onLessonChange?: (lessonId: string) => void;
  adaptiveSnapshot?: AdaptiveSnapshot;
  onResearchAttempt?: (event: Omit<ResearchAttemptRecord, "id" | "studentId" | "classId" | "group" | "createdAt">) => void;
  onEssayGraded?: (result: {
    problemId: string;
    title: string;
    mathScore: number;
    englishScore: number;
    percentage: number;
    hintsUsed: number;
    translationUsed: boolean;
    grade: HighSchoolGrade;
    lessonId: string;
  }) => void;
}

const pickRandomIndex = (length: number, avoid = -1) => {
  if (length <= 1) return 0;
  let next = Math.floor(Math.random() * length);
  if (next === avoid) next = (next + 1) % length;
  return next;
};

const pickAdaptiveIndex = (questions: StandardStudentQuestion[], adaptive?: AdaptiveSnapshot, avoid = -1) => {
  if (!questions.length) return 0;
  let eligible = questions.map((q, index) => ({ q, index })).filter(({ index }) => index !== avoid);
  if (adaptive?.recommendedLevel && adaptive.recommendedLevel < 3) {
    const short = eligible.filter(({ q }) => q.format === "TLN");
    if (short.length) eligible = short;
  } else if (adaptive?.recommendedLevel === 3) {
    const essays = eligible.filter(({ q }) => q.format === "TL");
    if (essays.length) eligible = essays;
  }
  const byDifficulty = eligible.filter(({ q }) => q.difficulty === adaptive?.preferredDifficulty);
  if (byDifficulty.length) eligible = byDifficulty;
  if (!eligible.length) return pickRandomIndex(questions.length, avoid);
  return eligible[Math.floor(Math.random() * eligible.length)].index;
};

const normalizeAnswer = (value: string) =>
  value
    .toLowerCase()
    .replace(/\$|\\\(|\\\)|\\\[|\\\]/g, "")
    .replace(/\\text\{([^}]*)\}/g, "$1")
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .replace(/[;。]/g, "")
    .trim();

const isShortAnswerCorrect = (student: string, expected: string) => {
  const a = normalizeAnswer(student);
  const b = normalizeAnswer(expected);
  if (!a || !b) return false;
  if (a === b || a.includes(b) || b.includes(a)) return true;
  const numPattern = /-?\d+(?:\.\d+)?/g;
  const numsA = a.match(numPattern) || [];
  const numsB = b.match(numPattern) || [];
  if (numsA.length === 1 && numsB.length === 1) {
    return Math.abs(Number(numsA[0]) - Number(numsB[0])) < 1e-8;
  }
  return false;
};

export const Level3EssayStudio: React.FC<Level3EssayStudioProps> = ({
  selectedGrade,
  onGradeChange,
  onAddXP,
  onEssayGraded,
  onNavigateToLevel1,
  onNavigateToLevel2,
  initialLessonId,
  onLessonChange,
  adaptiveSnapshot,
  onResearchAttempt,
}) => {
  const requestedInitial = initialLessonId && getStandardQuestionsForLesson(initialLessonId, ["TLN", "TL"]).length
    ? STANDARD_LESSONS.find((lesson) => lesson.id === initialLessonId && lesson.grade === selectedGrade)
    : undefined;
  const initialLesson = requestedInitial || getFirstLessonWithQuestions(selectedGrade, ["TLN", "TL"]);
  const [selectedLessonId, setSelectedLessonId] = useState(initialLesson?.id || "");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showVietnamese, setShowVietnamese] = useState(false);
  const [translationUsed, setTranslationUsed] = useState(false);
  const [showVocabHint, setShowVocabHint] = useState(false);
  const [showMethodHint, setShowMethodHint] = useState(false);
  const [shortAnswer, setShortAnswer] = useState("");
  const [shortSubmitted, setShortSubmitted] = useState(false);
  const [essay, setEssay] = useState("");
  const essayInputRef = useRef<HTMLTextAreaElement>(null);
  const [isGrading, setIsGrading] = useState(false);
  const [gradingResult, setGradingResult] = useState<EssayGradingResult | null>(null);
  const [gradingError, setGradingError] = useState("");
  const [gradingProvider, setGradingProvider] = useState("");
  const [showOfficialSolution, setShowOfficialSolution] = useState(false);
  const [reported, setReported] = useState(false);
  const [independentMode, setIndependentMode] = useState(false);
  const [barrierType, setBarrierType] = useState<ResearchBarrierType>("NONE");
  const [questionStartedAt, setQuestionStartedAt] = useState(Date.now());

  useEffect(() => {
    const lesson = STANDARD_LESSONS.find((item) => item.id === selectedLessonId);
    if (!lesson || lesson.grade !== selectedGrade) {
      const first = getFirstLessonWithQuestions(selectedGrade, ["TLN", "TL"]);
      setSelectedLessonId(first?.id || "");
      if (first) onLessonChange?.(first.id);
    }
  }, [selectedGrade, selectedLessonId]);

  const questions = useMemo(
    () => getStandardQuestionsForLesson(selectedLessonId, ["TLN", "TL"]),
    [selectedLessonId]
  );

  useEffect(() => {
    setQuestionIndex(pickAdaptiveIndex(questions, adaptiveSnapshot));
  }, [selectedLessonId, questions.length]);

  const question = questions[questionIndex];
  const selectedLesson = STANDARD_LESSONS.find((lesson) => lesson.id === selectedLessonId);
  const adaptiveEnglishRatio = adaptiveSnapshot?.recommendedEnglishRatio ?? 70;
  const autoBilingual = adaptiveEnglishRatio <= 40;
  const autoKeywordBridge = adaptiveEnglishRatio > 40 && adaptiveEnglishRatio <= 65;
  const hintsUsed = independentMode ? 0 : Number(showVocabHint) + Number(showMethodHint);
  const researchHintLevel = (Math.min(3, hintsUsed) as 0 | 1 | 2 | 3);

  const logResearchAttempt = (finalCorrect: boolean, activityType: "level3" | "independent" = independentMode ? "independent" : "level3") => {
    if (!question) return;
    onResearchAttempt?.({
      grade: selectedGrade,
      chapterId: question.chapterId,
      lessonId: selectedLessonId,
      questionId: question.id,
      questionVersion: 1,
      activityType,
      attemptNumber: 1,
      firstAttemptCorrect: finalCorrect,
      finalCorrect,
      barrierType,
      hintLevel: researchHintLevel,
      hintCount: researchHintLevel,
      retryCount: 0,
      responseTimeSeconds: Math.max(1, Math.round((Date.now() - questionStartedAt) / 1000)),
      independentMode,
      supportRequestedByStudent: researchHintLevel > 0 || translationUsed,
      supportTriggeredBySystem: false,
      translationUsed,
    });
  };
  const shortCorrect = question?.format === "TLN" && shortSubmitted
    ? isShortAnswerCorrect(shortAnswer, question.correctAnswer)
    : false;

  const resetQuestionState = () => {
    setShowVietnamese(false);
    setTranslationUsed(false);
    setShowVocabHint(false);
    setShowMethodHint(false);
    setShortAnswer("");
    setShortSubmitted(false);
    setEssay("");
    setGradingResult(null);
    setGradingError("");
    setGradingProvider("");
    setShowOfficialSolution(false);
    setReported(false);
    setBarrierType("NONE");
    setQuestionStartedAt(Date.now());
  };

  useEffect(() => resetQuestionState(), [question?.id]);

  const goToIndex = (index: number) => {
    if (!questions.length) return;
    setQuestionIndex((index + questions.length) % questions.length);
  };

  const chooseAnother = () => {
    if (!questions.length) return;
    setQuestionIndex(pickAdaptiveIndex(questions, adaptiveSnapshot, questionIndex));
  };

  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.replace(/\$[^$]+\$/g, " mathematical expression "));
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const submitShortAnswer = () => {
    if (!question || question.format !== "TLN" || !shortAnswer.trim() || shortSubmitted) return;
    const correct = isShortAnswerCorrect(shortAnswer, question.correctAnswer);
    setShortSubmitted(true);
    if (correct) onAddXP(Math.max(18, 35 - hintsUsed * 5 - (translationUsed ? 4 : 0)));
    logResearchAttempt(correct);
    if (!reported) {
      const englishScore = Math.max(5, 9 - hintsUsed - (translationUsed ? 1 : 0));
      onEssayGraded?.({
        problemId: question.id,
        title: selectedLesson?.titleVi || question.chapterTitleVi,
        mathScore: correct ? 10 : 4,
        englishScore,
        percentage: correct ? 92 : 48,
        hintsUsed,
        translationUsed,
        grade: selectedGrade,
        lessonId: selectedLessonId,
      });
      setReported(true);
    }
  };

  const gradeEssay = async () => {
    if (!question || question.format !== "TL" || !essay.trim()) return;
    setIsGrading(true);
    setGradingError("");
    setGradingProvider("");
    try {
      const expected = `${question.solutionEn || question.solutionVi}
Correct answer / conclusion: ${question.correctAnswer}`;

      if (!getGoogleSheetsApiUrl()) {
        setGradingError(
          "Chưa cấu hình Google Sheets Learning Database. Giáo viên cần dán URL Google Apps Script /exec và cấu hình Gemini API Key trong Script Properties trước khi dùng AI chấm Level 3."
        );
        return;
      }

      try {
        const cloud = await gradeEssayViaGoogleSheetsAI({
          gradeLevel: selectedGrade,
          problemTitle: question.lessonTitleEn,
          problemEnglish: question.questionEn,
          studentEssay: essay,
          expectedAnswer: expected,
        });
        const result = cloud.data;
        const provider = cloud.model ? `Gemini ${cloud.model} · Google Apps Script` : "Gemini · Google Apps Script";
        setGradingResult(result);
        setGradingProvider(provider);
        logResearchAttempt(result.percentage >= 70);
        onAddXP(Math.max(20, 50 - hintsUsed * 5 - (translationUsed ? 4 : 0)));
        if (!reported) {
          onEssayGraded?.({
            problemId: question.id,
            title: selectedLesson?.titleVi || question.chapterTitleVi,
            mathScore: result.mathScore,
            englishScore: result.englishScore,
            percentage: result.percentage,
            hintsUsed,
            translationUsed,
            grade: selectedGrade,
            lessonId: selectedLessonId,
          });
          setReported(true);
        }
      } catch (error: any) {
        const message = error instanceof Error ? error.message : String(error);
        const code = String(error?.code || "");
        const temporary = Boolean(error?.temporary) || /503|UNAVAILABLE|high demand|quá tải|GEMINI_BUSY|TEMPORARY/i.test(message + " " + code);
        if (temporary) {
          setGradingError(
            "Gemini đang quá tải tạm thời. Bài làm của em vẫn được giữ nguyên; hãy chờ khoảng 5–15 giây rồi bấm “AI chấm theo lời giải chuẩn” lại. Hệ thống đã tự thử lại và chuyển model dự phòng trước khi báo lỗi."
          );
        } else {
          setGradingError(
            "AI chấm Level 3 chưa sẵn sàng. Hãy kiểm tra Google Sheets → AI Math Bridge → Kiểm tra AI chấm Level 3.\nChi tiết: " + message
          );
        }
      }
    } finally {
      setIsGrading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-50 via-white to-pink-50 p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-3 py-1 text-[11px] font-black">
              <PenTool className="w-3.5 h-3.5" /> LEVEL 3 · TRẢ LỜI NGẮN + TỰ LUẬN
            </div>
            <h2 className="mt-2 text-xl font-black text-slate-900">Tự giải và diễn đạt Toán bằng tiếng Anh</h2>
            <p className="mt-1 text-xs text-slate-600 max-w-3xl">
              Câu hỏi lấy trực tiếp từ ngân hàng AI Math Teacher. Cây chọn chỉ còn Khối → Chương → Bài; trong mỗi bài hệ thống tự luân phiên câu trả lời ngắn và tự luận.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 shrink-0">
            <div className="rounded-xl border border-rose-100 bg-white px-3 py-2 text-center">
              <div className="text-lg font-black text-rose-700">{STANDARD_BANK_SUMMARY.level3TLN}</div>
              <div className="text-[10px] font-bold text-slate-500">câu trả lời ngắn</div>
            </div>
            <div className="rounded-xl border border-rose-100 bg-white px-3 py-2 text-center">
              <div className="text-lg font-black text-rose-700">{STANDARD_BANK_SUMMARY.level3TL}</div>
              <div className="text-[10px] font-bold text-slate-500">câu tự luận</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-6 items-start">
        <div className="lg:sticky lg:top-4">
          <LessonTreeSelector
            selectedGrade={selectedGrade}
            onGradeChange={onGradeChange}
            selectedLessonId={selectedLessonId}
            onLessonChange={(lessonId) => {
              setSelectedLessonId(lessonId);
              onLessonChange?.(lessonId);
              setQuestionIndex(0);
            }}
            formats={["TLN", "TL"]}
            accent="rose"
          />
        </div>

        <div className="space-y-4 min-w-0">
          {question ? (
            <>
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-rose-600">Lộ trình hiện tại</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">
                      Lớp {selectedGrade} <span className="text-slate-300">›</span> {question.chapterTitleVi} <span className="text-slate-300">›</span> {question.lessonTitleVi}
                    </div>
                    {adaptiveSnapshot && <div className="mt-2 text-[10px] font-bold text-violet-700">AI Adaptive: English {adaptiveSnapshot.recommendedEnglishRatio}% · ưu tiên {adaptiveSnapshot.preferredDifficulty} · {adaptiveSnapshot.supportMode}</div>}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap justify-end">
                    <label className="text-[10px] rounded-lg border border-violet-200 bg-violet-50 px-2 py-1 font-black text-violet-700 inline-flex items-center gap-1.5"><input type="checkbox" checked={independentMode} onChange={(e) => { setIndependentMode(e.target.checked); setShowVocabHint(false); setShowMethodHint(false); setShowVietnamese(false); setTranslationUsed(false); setBarrierType("NONE"); }} /> Independent Mode</label>
                    {onNavigateToLevel1 && <button type="button" onClick={onNavigateToLevel1} className="text-[10px] rounded-lg bg-amber-50 px-2 py-1 font-black text-amber-700 border border-amber-200 hover:bg-amber-100">Ôn Level 1</button>}
                    {onNavigateToLevel2 && <button type="button" onClick={onNavigateToLevel2} className="text-[10px] rounded-lg bg-blue-50 px-2 py-1 font-black text-blue-700 border border-blue-200 hover:bg-blue-100">Luyện Level 2</button>}
                    <span className={`text-[10px] rounded-lg px-2 py-1 font-black border ${question.format === "TLN" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-rose-50 text-rose-700 border-rose-200"}`}>
                      {question.format === "TLN" ? "TRẢ LỜI NGẮN" : "TỰ LUẬN"}
                    </span>
                    <span className="text-[10px] rounded-lg bg-slate-100 px-2 py-1 font-bold text-slate-600">Câu {questionIndex + 1}/{questions.length}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-5 md:p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-black text-slate-500 uppercase tracking-wide">Đề bài bằng tiếng Anh</div>
                    <div className="flex items-center gap-1"><button type="button" onClick={() => speak(question.questionEn)} className="p-2 rounded-xl text-rose-600 hover:bg-rose-50" title="Nghe đề tiếng Anh"><Volume2 className="w-4 h-4" /></button></div>
                  </div>

                  <div className="rounded-2xl border border-rose-100 bg-rose-50/35 p-4 md:p-5 text-[15px] leading-7 text-slate-900 font-medium">
                    <RichMathText text={question.questionEn} block />
                  </div>
                  {autoBilingual && (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs leading-6 text-emerald-950">
                      <div className="text-[10px] font-black uppercase tracking-wider text-emerald-700 mb-1">AI scaffold tự động · không tính là dùng bản dịch</div>
                      <RichMathText text={question.questionVi} />
                    </div>
                  )}
                  {autoKeywordBridge && question.vocabularySupport.length > 0 && (
                    <div className="rounded-xl border border-violet-100 bg-violet-50/60 p-3 text-xs text-slate-700">
                      <span className="font-black text-violet-700">AI Keyword Bridge:</span>{" "}
                      {question.vocabularySupport.slice(0, 4).map((item) => `${item.word} = ${item.meaning}`).join(" · ")}
                    </div>
                  )}

                  <StandardQuestionMedia assets={question.assets} language="en" />

                  {!autoBilingual && <div>
                    <button
                      type="button"
                      onClick={() => {
                        if (independentMode) return;
                        if (!showVietnamese) setTranslationUsed(true);
                        setShowVietnamese((value) => !value);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:text-rose-900"
                    >
                      {showVietnamese ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      {showVietnamese ? "Ẩn bản dịch tiếng Việt" : "Cần hỗ trợ? Xem bản dịch tiếng Việt"}
                    </button>
                    {showVietnamese && (
                      <div className="mt-2 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3 text-xs leading-6 text-emerald-950"><RichMathText text={question.questionVi} /></div>
                    )}
                  </div>}

                  <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-3 space-y-2">
                    <div className="text-[11px] font-black text-amber-800 flex items-center gap-1.5"><Lightbulb className="w-3.5 h-3.5" /> AI GUIDED WRITING · GỢI Ý TỪNG BƯỚC</div>
                    <div className="flex flex-wrap gap-2">
                      <button type="button" onClick={() => { if (!independentMode) { setBarrierType("L"); setShowVocabHint(true); } }} className="px-3 py-1.5 rounded-lg border border-amber-200 bg-white text-[11px] font-bold text-amber-800">1. Từ khóa</button>
                      <button type="button" onClick={() => { if (!independentMode) { setBarrierType("M"); setShowMethodHint(true); } }} className="px-3 py-1.5 rounded-lg border border-amber-200 bg-white text-[11px] font-bold text-amber-800">2. Hướng giải</button>
                    </div>
                    {showVocabHint && (
                      <div className="text-xs text-slate-700 leading-5">
                        {question.vocabularySupport.length
                          ? question.vocabularySupport.map((item) => `${item.word} = ${item.meaning}`).join(" · ")
                          : "Identify: Given → To find → command word. Sau đó viết lại yêu cầu bài toán bằng một câu tiếng Anh ngắn."}
                      </div>
                    )}
                    {showMethodHint && (
                      <div className="text-xs text-slate-700 leading-6 space-y-1">
                        {question.formulaSupport.length ? question.formulaSupport.map((formula, index) => <div key={index}><RichMathText text={formula} /></div>) : (
                          <>
                            <div><b>Start:</b> “We need to determine …”</div>
                            <div><b>Reason:</b> “Using the relevant formula/theorem, we have …”</div>
                            <div><b>Conclude:</b> “Therefore / Hence, …”</div>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {question.format === "TLN" ? (
                    <div className="space-y-3">
                      <label className="block text-xs font-black text-slate-700">Nhập đáp án ngắn</label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          value={shortAnswer}
                          onChange={(event) => setShortAnswer(event.target.value)}
                          disabled={shortSubmitted}
                          placeholder="Ví dụ: 2,5 hoặc x = 3"
                          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
                        />
                        <button type="button" onClick={submitShortAnswer} disabled={!shortAnswer.trim() || shortSubmitted} className="rounded-xl bg-rose-600 hover:bg-rose-700 disabled:bg-slate-300 text-white px-5 py-3 text-sm font-black">Kiểm tra</button>
                      </div>

                      {shortSubmitted && (
                        <div className={`rounded-2xl border p-4 ${shortCorrect ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"}`}>
                          <div className="flex items-start gap-2">
                            {shortCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> : <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                            <div className="min-w-0">
                              <div className={`text-sm font-black ${shortCorrect ? "text-emerald-900" : "text-rose-900"}`}>
                                {shortCorrect ? "Đúng." : "Chưa đúng."} Đáp án chuẩn: <RichMathText text={question.correctAnswer} />
                              </div>
                              <div className="mt-2 text-xs leading-6 text-slate-700"><RichMathText text={question.solutionEn || question.solutionVi} /></div>
                              {question.solutionVi && question.solutionEn && (
                                <details className="mt-2 text-xs text-slate-600"><summary className="cursor-pointer font-bold">Xem lời giải tiếng Việt</summary><div className="mt-2 leading-6"><RichMathText text={question.solutionVi} /></div></details>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <label className="text-xs font-black text-slate-700">Viết lời giải bằng tiếng Anh</label>
                        <span className="text-[10px] text-slate-400">Given → Reasoning → Calculation → Conclusion</span>
                      </div>
                      <textarea
                        ref={essayInputRef}
                        value={essay}
                        onChange={(event) => setEssay(event.target.value)}
                        rows={10}
                        placeholder={"We need to determine ...\nUsing ... we have ...\nTherefore, ..."}
                        className="w-full rounded-2xl border border-slate-300 p-4 text-sm leading-7 font-medium focus:outline-none focus:ring-2 focus:ring-rose-300 resize-y"
                      />
                      <MathInputToolbar
                        value={essay}
                        onChange={setEssay}
                        inputRef={essayInputRef}
                        accent="rose"
                        showEnglishTemplates
                        defaultOpen
                      />
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button type="button" onClick={gradeEssay} disabled={!essay.trim() || isGrading} className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:bg-slate-300 text-white px-5 py-3 text-sm font-black">
                          {isGrading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />} {isGrading ? "Đang chấm theo đáp án chuẩn..." : "AI chấm theo lời giải chuẩn"}
                        </button>
                        <button type="button" onClick={() => setShowOfficialSolution((value) => !value)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50">
                          <FileText className="w-4 h-4" /> {showOfficialSolution ? "Ẩn lời giải chuẩn" : "Đối chiếu lời giải chuẩn"}
                        </button>
                      </div>

                      {gradingError && <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">{gradingError}</div>}

                      {showOfficialSolution && (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-700">
                          <div className="font-black text-slate-900 mb-2">Lời giải đã kiểm duyệt từ ngân hàng Teacher</div>
                          <RichMathText text={question.solutionEn || question.solutionVi} />
                          {question.solutionVi && question.solutionEn && (
                            <details className="mt-3"><summary className="cursor-pointer font-bold">Bản tiếng Việt</summary><div className="mt-2"><RichMathText text={question.solutionVi} /></div></details>
                          )}
                        </div>
                      )}

                      {gradingResult && (
                        <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-4 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2"><Award className="w-5 h-5 text-rose-600" /><div className="text-sm font-black text-rose-950">Kết quả chấm AI</div></div>
                              {gradingProvider && <div className="mt-1 text-[9px] font-bold text-rose-500">{gradingProvider}</div>}
                            </div>
                            <div className="text-xl font-black text-rose-700">{gradingResult.percentage}%</div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                            {[
                              ["Toán", gradingResult.mathScore],
                              ["Math English", gradingResult.englishScore],
                              ["Bố cục", gradingResult.structureScore],
                              ["Ngữ pháp", gradingResult.grammarScore],
                            ].map(([label, score]) => (
                              <div key={String(label)} className="rounded-xl border border-rose-100 bg-white p-2"><div className="text-base font-black text-slate-900">{score}/10</div><div className="text-[10px] font-bold text-slate-500">{label}</div></div>
                            ))}
                          </div>
                          <div className="text-xs leading-6 text-slate-700">{gradingResult.summaryFeedback}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-100 bg-slate-50/70 p-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex gap-2">
                    <button type="button" onClick={() => goToIndex(questionIndex - 1)} className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] font-bold text-slate-600 hover:bg-slate-100"><ChevronLeft className="w-3.5 h-3.5" /> Trước</button>
                    <button type="button" onClick={() => goToIndex(questionIndex + 1)} className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] font-bold text-slate-600 hover:bg-slate-100">Sau <ChevronRight className="w-3.5 h-3.5" /></button>
                  </div>
                  <button type="button" onClick={chooseAnother} className="inline-flex items-center gap-1.5 rounded-lg bg-rose-600 text-white px-3 py-2 text-[11px] font-black hover:bg-rose-700"><RefreshCw className="w-3.5 h-3.5" /> Câu khác ngẫu nhiên</button>
                </div>
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center"><PenTool className="w-8 h-8 text-slate-300 mx-auto" /><div className="mt-2 text-sm font-bold text-slate-700">Chưa có câu Level 3 trong bài này.</div></div>
          )}
        </div>
      </div>
    </div>
  );
};
