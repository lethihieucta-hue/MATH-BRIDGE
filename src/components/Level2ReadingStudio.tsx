import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Lightbulb,
  RefreshCw,
  Volume2,
  XCircle,
} from "lucide-react";
import type { AdaptiveSnapshot, HighSchoolGrade, ResearchAttemptRecord, ResearchBarrierType } from "../types";
import {
  getFirstLessonWithQuestions,
  getStandardQuestionsForLesson,
  STANDARD_BANK_SUMMARY,
  STANDARD_LESSONS,
  type StandardStudentQuestion,
} from "../data/standardQuestionBank";
import { LessonTreeSelector } from "./LessonTreeSelector";
import { RichMathText } from "./MathRenderer";
import { StandardQuestionMedia } from "./StandardQuestionMedia";

interface Level2ReadingStudioProps {
  selectedGrade: HighSchoolGrade;
  onGradeChange: (grade: HighSchoolGrade) => void;
  onAddXP: (amount: number) => void;
  onNavigateToLevel1?: () => void;
  onNavigateToLevel3?: () => void;
  initialLessonId?: string;
  onLessonChange?: (lessonId: string) => void;
  adaptiveSnapshot?: AdaptiveSnapshot;
  onResearchAttempt?: (event: Omit<ResearchAttemptRecord, "id" | "studentId" | "classId" | "group" | "createdAt">) => void;
  onProblemResult?: (result: {
    problemId: string;
    title: string;
    isCorrect: boolean;
    hintsUsed: number;
    translationUsed: boolean;
    difficulty: "Easy" | "Medium" | "Hard";
    grade: HighSchoolGrade;
    lessonId: string;
  }) => void;
}

const difficultyLabel = (difficulty: StandardStudentQuestion["difficulty"]) =>
  difficulty === "HARD" ? "Hard" : difficulty === "MEDIUM" ? "Medium" : "Easy";

const pickRandomIndex = (length: number, avoid = -1) => {
  if (length <= 1) return 0;
  let next = Math.floor(Math.random() * length);
  if (next === avoid) next = (next + 1) % length;
  return next;
};

const pickAdaptiveIndex = (questions: StandardStudentQuestion[], preferred?: AdaptiveSnapshot["preferredDifficulty"], avoid = -1) => {
  if (!questions.length) return 0;
  const eligible = questions.map((q, index) => ({ q, index })).filter(({ q, index }) => q.difficulty === preferred && index !== avoid);
  if (eligible.length) return eligible[Math.floor(Math.random() * eligible.length)].index;
  return pickRandomIndex(questions.length, avoid);
};

export const Level2ReadingStudio: React.FC<Level2ReadingStudioProps> = ({
  selectedGrade,
  onGradeChange,
  onAddXP,
  onNavigateToLevel1,
  onNavigateToLevel3,
  onProblemResult,
  initialLessonId,
  onLessonChange,
  adaptiveSnapshot,
  onResearchAttempt,
}) => {
  const requestedInitial = initialLessonId && getStandardQuestionsForLesson(initialLessonId, ["TN"]).length
    ? STANDARD_LESSONS.find((lesson) => lesson.id === initialLessonId && lesson.grade === selectedGrade)
    : undefined;
  const initialLesson = requestedInitial || getFirstLessonWithQuestions(selectedGrade, ["TN"]);
  const [selectedLessonId, setSelectedLessonId] = useState(initialLesson?.id || "");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [attemptNumber, setAttemptNumber] = useState(1);
  const [firstAttemptCorrect, setFirstAttemptCorrect] = useState<boolean | null>(null);
  const [barrierType, setBarrierType] = useState<ResearchBarrierType>("NONE");
  const [hintLevel, setHintLevel] = useState<0 | 1 | 2 | 3>(0);
  const [selfDiagnosis, setSelfDiagnosis] = useState<ResearchAttemptRecord["selfDiagnosis"]>();
  const [independentMode, setIndependentMode] = useState(false);
  const [questionStartedAt, setQuestionStartedAt] = useState(Date.now());
  const [showVietnamese, setShowVietnamese] = useState(false);
  const [translationUsed, setTranslationUsed] = useState(false);
  const [showVocabularyHint, setShowVocabularyHint] = useState(false);
  const [showFormulaHint, setShowFormulaHint] = useState(false);
  const [reported, setReported] = useState(false);

  useEffect(() => {
    const lesson = STANDARD_LESSONS.find((item) => item.id === selectedLessonId);
    if (!lesson || lesson.grade !== selectedGrade) {
      const first = getFirstLessonWithQuestions(selectedGrade, ["TN"]);
      setSelectedLessonId(first?.id || "");
      if (first) onLessonChange?.(first.id);
    }
  }, [selectedGrade, selectedLessonId]);

  const questions = useMemo(
    () => getStandardQuestionsForLesson(selectedLessonId, ["TN"]),
    [selectedLessonId]
  );

  useEffect(() => {
    setQuestionIndex(pickAdaptiveIndex(questions, adaptiveSnapshot?.preferredDifficulty));
  }, [selectedLessonId, questions.length]);

  const question = questions[questionIndex];
  const selectedLesson = STANDARD_LESSONS.find((lesson) => lesson.id === selectedLessonId);
  const adaptiveEnglishRatio = adaptiveSnapshot?.recommendedEnglishRatio ?? 70;
  const autoBilingual = adaptiveEnglishRatio <= 40;
  const autoKeywordBridge = adaptiveEnglishRatio > 40 && adaptiveEnglishRatio <= 65;

  const resetQuestionState = () => {
    setSelectedOption(null);
    setSubmitted(false);
    setAttemptNumber(1);
    setFirstAttemptCorrect(null);
    setBarrierType("NONE");
    setHintLevel(0);
    setSelfDiagnosis(undefined);
    setQuestionStartedAt(Date.now());
    setShowVietnamese(false);
    setTranslationUsed(false);
    setShowVocabularyHint(false);
    setShowFormulaHint(false);
    setReported(false);
  };

  useEffect(() => resetQuestionState(), [question?.id]);

  const goToIndex = (index: number) => {
    if (!questions.length) return;
    setQuestionIndex((index + questions.length) % questions.length);
  };

  const chooseAnother = () => {
    if (!questions.length) return;
    setQuestionIndex(pickAdaptiveIndex(questions, adaptiveSnapshot?.preferredDifficulty, questionIndex));
  };

  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.replace(/\$[^$]+\$/g, " mathematical expression "));
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const isCorrect = !!question && !!selectedOption && selectedOption.toUpperCase() === question.correctAnswer.trim().toUpperCase();
  const hintsUsed = hintLevel;

  const requestHint = (type: Exclude<ResearchBarrierType, "NONE">) => {
    if (independentMode || submitted) return;
    setBarrierType(type);
    setHintLevel((prev) => (Math.min(3, prev + 1) as 1 | 2 | 3));
    if (type === "L") setShowVocabularyHint(true);
    if (type === "M") setShowFormulaHint(true);
  };

  const submit = () => {
    if (!question || !selectedOption || submitted) return;
    const currentCorrect = selectedOption.toUpperCase() === question.correctAnswer.trim().toUpperCase();
    const first = firstAttemptCorrect === null ? currentCorrect : firstAttemptCorrect;
    if (firstAttemptCorrect === null) setFirstAttemptCorrect(currentCorrect);
    setSubmitted(true);

    onResearchAttempt?.({
      grade: selectedGrade,
      chapterId: question.chapterId,
      lessonId: selectedLessonId,
      questionId: question.id,
      questionVersion: 1,
      activityType: independentMode ? "independent" : "level2",
      attemptNumber,
      firstAttemptCorrect: first,
      finalCorrect: currentCorrect,
      barrierType,
      hintLevel,
      hintCount: hintLevel,
      retryCount: Math.max(0, attemptNumber - 1),
      responseTimeSeconds: Math.max(1, Math.round((Date.now() - questionStartedAt) / 1000)),
      independentMode,
      supportRequestedByStudent: hintLevel > 0 || translationUsed,
      supportTriggeredBySystem: false,
      translationUsed,
      selfDiagnosis,
    });

    if (currentCorrect) onAddXP(Math.max(12, 30 - hintsUsed * 5 - (translationUsed ? 4 : 0)));
    if (currentCorrect && !reported) {
      onProblemResult?.({
        problemId: question.id,
        title: selectedLesson?.titleVi || question.chapterTitleVi,
        isCorrect: currentCorrect,
        hintsUsed,
        translationUsed,
        difficulty: difficultyLabel(question.difficulty),
        grade: selectedGrade,
        lessonId: selectedLessonId,
      });
      setReported(true);
    }
  };

  const retry = () => {
    setAttemptNumber((n) => n + 1);
    setSelectedOption(null);
    setSubmitted(false);
  };


  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-3 py-1 text-[11px] font-black">
              <BookOpen className="w-3.5 h-3.5" /> LEVEL 2 · TRẮC NGHIỆM CHUẨN HÓA
            </div>
            <h2 className="mt-2 text-xl font-black text-slate-900">Đọc hiểu đề Toán tiếng Anh theo đúng Bài học</h2>
            <p className="mt-1 text-xs text-slate-600 max-w-3xl">
              Chỉ dùng câu TN từ ngân hàng AI Math Teacher đã chuẩn hóa. Học sinh chọn Khối → Chương → Bài; hệ thống tự lấy nhiều câu khác nhau trong bài, không cần chọn từng dạng nhỏ.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 shrink-0">
            <div className="rounded-xl border border-blue-100 bg-white px-3 py-2 text-center">
              <div className="text-lg font-black text-blue-700">{STANDARD_BANK_SUMMARY.level2TN}</div>
              <div className="text-[10px] font-bold text-slate-500">câu TN Level 2</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-center">
              <div className="text-lg font-black text-slate-800">79</div>
              <div className="text-[10px] font-bold text-slate-500">bài học 10–12</div>
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
            formats={["TN"]}
            accent="blue"
          />
        </div>

        <div className="space-y-4 min-w-0">
          {question ? (
            <>
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[10px] font-black uppercase tracking-wider text-blue-600">Lộ trình hiện tại</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">
                      Lớp {selectedGrade} <span className="text-slate-300">›</span> {question.chapterTitleVi} <span className="text-slate-300">›</span> {question.lessonTitleVi}
                    </div>
                    {adaptiveSnapshot && <div className="mt-2 text-[10px] font-bold text-indigo-700">AI Adaptive: English {adaptiveSnapshot.recommendedEnglishRatio}% · ưu tiên {adaptiveSnapshot.preferredDifficulty} · Level {adaptiveSnapshot.recommendedLevel}</div>}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap justify-end">
                    {onNavigateToLevel1 && (
                      <button type="button" onClick={onNavigateToLevel1} className="text-[10px] rounded-lg bg-amber-50 px-2 py-1 font-black text-amber-700 border border-amber-200 hover:bg-amber-100">Ôn từ Level 1</button>
                    )}
                    <span className="text-[10px] rounded-lg bg-slate-100 px-2 py-1 font-bold text-slate-600">
                      Câu {questionIndex + 1}/{questions.length}
                    </span>
                    <span className="text-[10px] rounded-lg bg-blue-50 px-2 py-1 font-bold text-blue-700 border border-blue-100">
                      {difficultyLabel(question.difficulty)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-5 md:p-6 space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex gap-2">
                      <span className="rounded-lg bg-blue-600 text-white px-2.5 py-1 text-[10px] font-black">TN</span>
                      <span className="rounded-lg bg-slate-100 text-slate-600 px-2.5 py-1 text-[10px] font-bold">Math English L{question.languageLevel}</span>
                    </div>
                    <button type="button" onClick={() => speak(question.questionEn)} className="p-2 rounded-xl text-blue-600 hover:bg-blue-50" title="Nghe đề tiếng Anh">
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-4 md:p-5 text-[15px] leading-7 text-slate-900 font-medium">
                    <RichMathText text={question.questionEn} block />
                  </div>
                  {autoBilingual && (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs leading-6 text-emerald-950">
                      <div className="text-[10px] font-black uppercase tracking-wider text-emerald-700 mb-1">AI scaffold tự động · không tính là dùng bản dịch</div>
                      <RichMathText text={question.questionVi} />
                    </div>
                  )}
                  {autoKeywordBridge && question.vocabularySupport.length > 0 && (
                    <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3 text-xs text-slate-700">
                      <span className="font-black text-indigo-700">AI Keyword Bridge:</span>{" "}
                      {question.vocabularySupport.slice(0, 4).map((item) => `${item.word} = ${item.meaning}`).join(" · ")}
                    </div>
                  )}

                  <StandardQuestionMedia assets={question.assets} language="en" />

                  {!autoBilingual && <div>
                    <button
                      type="button"
                      onClick={() => {
                        if (independentMode || firstAttemptCorrect === null) return;
                        if (!showVietnamese) setTranslationUsed(true);
                        setShowVietnamese((value) => !value);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900"
                    >
                      {showVietnamese ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      {independentMode ? "Independent Mode: không dùng bản dịch" : firstAttemptCorrect === null ? "Bản dịch mở sau lần thử đầu" : showVietnamese ? "Ẩn hỗ trợ tiếng Việt" : "Hỗ trợ tiếng Việt sau lần thử đầu"}
                    </button>
                    {showVietnamese && (
                      <div className="mt-2 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3 text-xs leading-6 text-emerald-950">
                        <RichMathText text={question.questionVi} />
                      </div>
                    )}
                  </div>}

                  <div className="grid gap-2.5">
                    {question.options.map((option) => {
                      const chosen = selectedOption === option.key;
                      const correctOption = submitted && option.key.toUpperCase() === question.correctAnswer.trim().toUpperCase();
                      const wrongChosen = submitted && chosen && !correctOption;
                      return (
                        <button
                          key={option.key}
                          type="button"
                          disabled={submitted && isCorrect}
                          onClick={() => setSelectedOption(option.key)}
                          className={`w-full text-left rounded-xl border p-3.5 transition-all ${
                            correctOption
                              ? "border-emerald-400 bg-emerald-50"
                              : wrongChosen
                                ? "border-rose-400 bg-rose-50"
                                : chosen
                                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
                                  : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30"
                          }`}
                        >
                          <div className="flex gap-3 items-start">
                            <span className={`w-7 h-7 rounded-lg grid place-items-center text-xs font-black shrink-0 ${chosen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                              {option.key}
                            </span>
                            <div className="text-sm text-slate-800 leading-6 pt-0.5"><RichMathText text={option.en || option.vi} /></div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-3 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-[11px] font-black text-amber-800 flex items-center gap-1.5"><Lightbulb className="w-3.5 h-3.5" /> HỖ TRỢ THEO MỨC · L/C/M</div>
                      <label className="text-[10px] font-black text-slate-600 inline-flex items-center gap-2"><input type="checkbox" checked={independentMode} onChange={(e) => { setIndependentMode(e.target.checked); setHintLevel(0); setBarrierType("NONE"); setShowVocabularyHint(false); setShowFormulaHint(false); setShowVietnamese(false); }} /> Independent Mode</label>
                    </div>
                    {!independentMode && (
                      <>
                        <div className="text-[11px] text-slate-600">Nếu em cần hỗ trợ, hãy chọn đúng chỗ mình đang vướng. Mỗi lần bấm sẽ tăng một mức hỗ trợ (1 → 2 → 3).</div>
                        <div className="flex flex-wrap gap-2">
                          <button type="button" onClick={() => requestHint("L")} className="px-3 py-1.5 rounded-lg border border-amber-200 bg-white text-[11px] font-bold text-amber-800">L · Ngôn ngữ</button>
                          <button type="button" onClick={() => requestHint("C")} className="px-3 py-1.5 rounded-lg border border-amber-200 bg-white text-[11px] font-bold text-amber-800">C · Hiểu đề</button>
                          <button type="button" onClick={() => requestHint("M")} className="px-3 py-1.5 rounded-lg border border-amber-200 bg-white text-[11px] font-bold text-amber-800">M · Cách giải</button>
                          <span className="px-2.5 py-1.5 rounded-lg bg-amber-100 text-[10px] font-black text-amber-900">Mức {hintLevel}/3</span>
                        </div>
                        {hintLevel > 0 && barrierType === "L" && <div className="text-xs text-slate-700 leading-5">{hintLevel === 1 ? "Hãy tìm động từ mệnh lệnh và từ Toán học quan trọng trong đề." : hintLevel === 2 ? (question.vocabularySupport.slice(0, 3).map((item) => `${item.word} = ${item.meaning}`).join(" · ") || "Hãy liên hệ từ khóa với ký hiệu hoặc hình vẽ trong bài.") : (question.questionVi ? "Đọc diễn giải ngắn tiếng Việt sau khi đã xác định từ khóa; chưa xem lời giải." : "Hãy diễn giải lại yêu cầu của đề bằng lời của em.")}</div>}
                        {hintLevel > 0 && barrierType === "C" && <div className="text-xs text-slate-700 leading-5">{hintLevel === 1 ? "Hãy chỉ ra: đề cho gì và hỏi gì?" : hintLevel === 2 ? "Hãy xác định quan hệ giữa các dữ kiện rồi chuyển chúng sang ký hiệu/biểu thức." : "Viết một câu ngắn mô tả mô hình Toán của bài trước khi chọn đáp án."}</div>}
                        {hintLevel > 0 && barrierType === "M" && <div className="text-xs text-slate-700 leading-5">{hintLevel === 1 ? "Hãy nhớ lại kiến thức của đúng bài đang học." : hintLevel === 2 ? (question.formulaSupport[0] ? <RichMathText text={question.formulaSupport[0]} /> : "Chọn một biểu diễn hoặc công thức có thể liên quan.") : (question.formulaSupport.length ? question.formulaSupport.map((formula, index) => <div key={index}><RichMathText text={formula} /></div>) : "Hãy thử nêu bước Toán đầu tiên, chưa cần hoàn thành lời giải.")}</div>}
                      </>
                    )}
                    {firstAttemptCorrect === false && !selfDiagnosis && (
                      <div className="pt-2 border-t border-amber-100">
                        <div className="text-[11px] font-black text-slate-700 mb-2">Em thấy khó nhất ở đâu?</div>
                        <div className="flex flex-wrap gap-1.5">{[["LANGUAGE","Từ/cụm từ"],["UNDERSTAND_QUESTION","Hiểu câu hỏi"],["REPRESENTATION","Đổi sang biểu thức/hình"],["METHOD","Chọn cách giải"],["CALCULATION","Tính toán"]].map(([v,l]) => <button key={v} type="button" onClick={() => setSelfDiagnosis(v as any)} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[10px] font-bold text-slate-700">{l}</button>)}</div>
                      </div>
                    )}
                  </div>

                  {!submitted ? (
                    <button
                      type="button"
                      onClick={submit}
                      disabled={!selectedOption}
                      className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white py-3 text-sm font-black transition-colors"
                    >
                      {attemptNumber === 1 ? "Nộp lần thử đầu" : `Nộp lần thử ${attemptNumber}`}
                    </button>
                  ) : !isCorrect ? (
                    <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
                      <div className="flex gap-2 items-start"><XCircle className="w-5 h-5 text-rose-600 shrink-0" /><div><div className="text-sm font-black text-rose-900">Chưa đúng. Hệ thống chưa mở đáp án để em còn cơ hội tự sửa.</div><div className="text-xs text-rose-800 mt-1">Hãy chọn đúng loại khó khăn L/C/M, xem gợi ý nếu cần rồi thử lại.</div><button type="button" onClick={retry} className="mt-3 px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-black">Thử lại</button></div></div>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                      <div className="flex gap-2 items-start">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <div className="min-w-0">
                          <div className="text-sm font-black text-emerald-900">
                            Chính xác!
                          </div>
                          <div className="mt-2 text-xs leading-6 text-slate-700">
                            <div className="font-black text-slate-800 mb-1">Lời giải chuẩn:</div>
                            <RichMathText text={question.solutionEn || question.solutionVi} />
                          </div>
                          {question.solutionEn && question.solutionVi && (
                            <details className="mt-2 text-xs text-slate-600">
                              <summary className="cursor-pointer font-bold">Xem lời giải tiếng Việt</summary>
                              <div className="mt-2 leading-6"><RichMathText text={question.solutionVi} /></div>
                            </details>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-100 bg-slate-50/70 p-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex gap-2">
                    <button type="button" onClick={() => goToIndex(questionIndex - 1)} className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] font-bold text-slate-600 hover:bg-slate-100">
                      <ChevronLeft className="w-3.5 h-3.5" /> Trước
                    </button>
                    <button type="button" onClick={() => goToIndex(questionIndex + 1)} className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] font-bold text-slate-600 hover:bg-slate-100">
                      Sau <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <button type="button" onClick={chooseAnother} className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 text-white px-3 py-2 text-[11px] font-black hover:bg-blue-700">
                    <RefreshCw className="w-3.5 h-3.5" /> Câu khác ngẫu nhiên
                  </button>
                </div>
              </div>

              {onNavigateToLevel3 && (
                <button type="button" onClick={onNavigateToLevel3} className="w-full rounded-2xl border border-rose-200 bg-rose-50 p-4 flex items-center justify-between gap-3 text-left hover:bg-rose-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-rose-600" />
                    <div><div className="text-sm font-black text-rose-900">Sẵn sàng viết lời giải?</div><div className="text-xs text-rose-700">Sang Level 3 với trả lời ngắn và tự luận đúng theo bài đang học.</div></div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-rose-600" />
                </button>
              )}
            </>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
              <div className="mt-2 text-sm font-bold text-slate-700">Chưa có câu TN trong bài này.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
