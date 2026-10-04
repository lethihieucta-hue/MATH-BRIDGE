import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AudioLines,
  BookOpenCheck,
  ChevronRight,
  CircleStop,
  Headphones,
  Info,
  Languages,
  Mic,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Volume2,
} from "lucide-react";
import type { AdaptiveSnapshot, HighSchoolGrade, SpeakingAIResponse, SpeakingPracticeMode } from "../types";
import { LessonTreeSelector } from "./LessonTreeSelector";
import { MathRenderer, RichMathText } from "./MathRenderer";
import { StandardQuestionMedia } from "./StandardQuestionMedia";
import { getLessonVocabularyTerms } from "../data/lessonVocabulary";
import {
  getFirstLessonWithQuestions,
  getStandardQuestionsForLesson,
  STANDARD_LESSONS,
  type StandardStudentQuestion,
} from "../data/standardQuestionBank";
import {
  isSpeechRecognitionSupported,
  isSpeechSynthesisSupported,
  mathToSpokenEnglish,
  scoreTranscriptMatch,
  speakEnglish,
  startSpeechRecognition,
  stopSpeaking,
  type SpeechRecognitionController,
  type TranscriptMatchScore,
} from "../services/speechPracticeService";
import { evaluateSpeakingViaGoogleSheetsAI, getGoogleSheetsApiUrl } from "../services/googleSheetsSyncService";

interface SpeakingLabProps {
  selectedGrade: HighSchoolGrade;
  onGradeChange: (grade: HighSchoolGrade) => void;
  initialLessonId?: string;
  onLessonChange?: (lessonId: string) => void;
  adaptiveSnapshot: AdaptiveSnapshot;
  mathScore: number;
  mathEnglishScore: number;
  onSpeakingActivity?: (event: {
    mode: SpeakingPracticeMode;
    title: string;
    grade: HighSchoolGrade;
    lessonId: string;
    score: number;
    sessionStarted: boolean;
  }) => void;
}

const modeCards: Array<{
  id: SpeakingPracticeMode;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { id: "REPEAT", title: "Nghe & nhắc lại", subtitle: "Từ/cụm từ Math English", icon: Headphones },
  { id: "READ_MATH", title: "Đọc biểu thức", subtitle: "Nói ký hiệu Toán bằng tiếng Anh", icon: AudioLines },
  { id: "EXPLAIN", title: "Nói bước giải", subtitle: "Giải thích ý Toán bằng tiếng Anh", icon: BookOpenCheck },
];

function repeatTargetText(term: { term: string }) {
  return String(term.term || "").replace(/\([^)]*[≠≤≥∈∉∪∩⇒⇔].*?\)/g, "").replace(/\s+/g, " ").trim();
}

function localFeedback(score: number) {
  if (score >= 90) return { label: "Rất tốt", note: "Nhận dạng gần như khớp hoàn toàn với mẫu.", cls: "text-emerald-700 bg-emerald-50 border-emerald-200" };
  if (score >= 75) return { label: "Tốt", note: "Ý đọc đã rõ. Thử nói chậm hơn một chút để tăng độ khớp.", cls: "text-cyan-700 bg-cyan-50 border-cyan-200" };
  if (score >= 55) return { label: "Gần đúng", note: "Một vài từ/ký hiệu chưa được nhận dạng đúng. Nghe mẫu rồi thử lại.", cls: "text-amber-700 bg-amber-50 border-amber-200" };
  return { label: "Cần luyện thêm", note: "Hãy nghe mẫu, chia nhỏ cụm từ rồi nói lại từng phần.", cls: "text-rose-700 bg-rose-50 border-rose-200" };
}

export const SpeakingLab: React.FC<SpeakingLabProps> = ({
  selectedGrade,
  onGradeChange,
  initialLessonId,
  onLessonChange,
  adaptiveSnapshot,
  mathScore,
  mathEnglishScore,
  onSpeakingActivity,
}) => {
  const initialLesson = useMemo(() => {
    const supplied = STANDARD_LESSONS.find((lesson) => lesson.id === initialLessonId && lesson.grade === selectedGrade);
    return supplied || getFirstLessonWithQuestions(selectedGrade, ["TN", "TLN", "TL"]);
  }, [initialLessonId, selectedGrade]);

  const [lessonId, setLessonId] = useState(initialLesson?.id || "");
  const [mode, setMode] = useState<SpeakingPracticeMode>("REPEAT");
  const [termIndex, setTermIndex] = useState(0);
  const [formulaIndex, setFormulaIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [interim, setInterim] = useState("");
  const [listening, setListening] = useState(false);
  const [confidence, setConfidence] = useState<number | undefined>();
  const [localResult, setLocalResult] = useState<TranscriptMatchScore | null>(null);
  const [aiResult, setAiResult] = useState<SpeakingAIResponse | null>(null);
  const [aiModel, setAiModel] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const controllerRef = useRef<SpeechRecognitionController | null>(null);
  const sessionStartedRef = useRef(false);

  const terms = useMemo(() => getLessonVocabularyTerms(lessonId, 12), [lessonId]);
  const questions = useMemo(() => getStandardQuestionsForLesson(lessonId, ["TN", "TLN", "TL"]), [lessonId]);
  const formulas = useMemo(() => {
    const rows: Array<{ display: string; spoken: string; source: string }> = [];
    const seen = new Set<string>();
    terms.forEach((term) => {
      const raw = String(term.mathSymbol || "").trim();
      if (!raw || seen.has(raw)) return;
      seen.add(raw);
      rows.push({ display: raw, spoken: mathToSpokenEnglish(raw), source: term.term });
    });
    questions.forEach((q) => {
      (q.formulaSupport || []).forEach((raw) => {
        const cleaned = String(raw || "").trim();
        if (!cleaned || seen.has(cleaned)) return;
        seen.add(cleaned);
        rows.push({ display: cleaned, spoken: mathToSpokenEnglish(cleaned), source: q.lessonTitleEn || q.lessonTitleVi });
      });
    });
    return rows.slice(0, 30);
  }, [questions, terms]);

  const term = terms[termIndex % Math.max(terms.length, 1)];
  const formula = formulas[formulaIndex % Math.max(formulas.length, 1)];
  const explainQuestions = useMemo(() => {
    const ranked = [...questions].sort((a, b) => {
      const weight = (q: StandardStudentQuestion) => q.format === "TL" ? 0 : q.format === "TLN" ? 1 : 2;
      return weight(a) - weight(b);
    });
    return ranked;
  }, [questions]);
  const question = explainQuestions[questionIndex % Math.max(explainQuestions.length, 1)];
  const lesson = STANDARD_LESSONS.find((item) => item.id === lessonId);

  useEffect(() => {
    const current = STANDARD_LESSONS.find((item) => item.id === lessonId);
    if (current?.grade === selectedGrade) return;
    const first = getFirstLessonWithQuestions(selectedGrade, ["TN", "TLN", "TL"]);
    if (first) setLessonId(first.id);
  }, [selectedGrade, lessonId]);

  useEffect(() => {
    onLessonChange?.(lessonId);
    setTermIndex(0);
    setFormulaIndex(0);
    setQuestionIndex(0);
    sessionStartedRef.current = false;
    clearAttempt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  useEffect(() => () => {
    controllerRef.current?.abort();
    stopSpeaking();
  }, []);

  const setLesson = (next: string) => {
    controllerRef.current?.abort();
    setListening(false);
    setLessonId(next);
  };

  function clearAttempt() {
    setTranscript("");
    setInterim("");
    setConfidence(undefined);
    setLocalResult(null);
    setAiResult(null);
    setAiModel("");
    setError("");
  }

  const switchMode = (next: SpeakingPracticeMode) => {
    controllerRef.current?.abort();
    setListening(false);
    setMode(next);
    clearAttempt();
  };

  const expectedText = mode === "REPEAT"
    ? repeatTargetText(term || { term: "" })
    : mode === "READ_MATH"
      ? formula?.spoken || ""
      : "";

  const targetTitle = mode === "REPEAT"
    ? term?.term || "Math English term"
    : mode === "READ_MATH"
      ? formula?.display || "Biểu thức Toán"
      : question?.questionEn || "Bài toán";

  const listenTarget = () => {
    setError("");
    const spoken = mode === "REPEAT"
      ? expectedText
      : mode === "READ_MATH"
        ? expectedText
        : mathToSpokenEnglish(question?.questionEn || "");
    if (!speakEnglish(spoken)) setError("Thiết bị này chưa hỗ trợ đọc mẫu bằng Speech Synthesis.");
  };

  const startMic = () => {
    if (listening) {
      controllerRef.current?.stop();
      return;
    }
    setError("");
    setInterim("");
    setLocalResult(null);
    setAiResult(null);
    controllerRef.current?.abort();
    controllerRef.current = startSpeechRecognition({
      lang: "en-US",
      onStart: () => setListening(true),
      onInterim: setInterim,
      onFinal: (outcome) => {
        setTranscript(outcome.transcript);
        setConfidence(outcome.confidence);
      },
      onError: (message) => {
        if (!/Đã dừng nghe/i.test(message)) setError(message);
      },
      onEnd: () => {
        setListening(false);
        setInterim("");
      },
    });
  };

  const emitActivity = (score: number) => {
    const started = !sessionStartedRef.current;
    sessionStartedRef.current = true;
    onSpeakingActivity?.({
      mode,
      title: mode === "REPEAT" ? `Repeat · ${term?.term || "term"}` : mode === "READ_MATH" ? `Read Math · ${formula?.source || "expression"}` : `Explain · ${question?.lessonTitleEn || question?.lessonTitleVi || "problem"}`,
      grade: selectedGrade,
      lessonId,
      score: Math.max(0, Math.min(100, Math.round(score))),
      sessionStarted: started,
    });
  };

  const evaluate = async () => {
    const answer = transcript.trim();
    if (!answer) {
      setError("Em hãy nói bằng microphone hoặc gõ transcript trước khi đánh giá.");
      return;
    }
    setError("");
    setLocalResult(null);
    setAiResult(null);

    if (mode !== "EXPLAIN") {
      const result = scoreTranscriptMatch(expectedText, answer);
      setLocalResult(result);
      emitActivity(result.score);
      return;
    }

    if (!question) {
      setError("Bài này chưa có câu chuẩn để luyện Speaking.");
      return;
    }
    if (!getGoogleSheetsApiUrl()) {
      setError("Chưa cấu hình Google Sheets Learning Database. Chế độ Nói bước giải cần backend Gemini giống AI Tutor.");
      return;
    }

    setBusy(true);
    try {
      const result = await evaluateSpeakingViaGoogleSheetsAI({
        mode,
        gradeLevel: selectedGrade,
        lessonId,
        targetText: question.questionEn,
        transcript: answer,
        problemId: question.id,
        problemEnglish: question.questionEn,
        officialSolution: question.solutionEn || question.solutionVi,
        correctAnswer: question.correctAnswer,
        mathScore,
        mathEnglishScore,
        adaptive: adaptiveSnapshot,
      });
      setAiResult(result.data);
      setAiModel(result.model || "");
      emitActivity(result.data.overallScore);
    } catch (err) {
      setError(err instanceof Error ? err.message : "AI chưa đánh giá được phần nói.");
    } finally {
      setBusy(false);
    }
  };

  const nextTarget = () => {
    if (mode === "REPEAT") setTermIndex((v) => (v + 1) % Math.max(terms.length, 1));
    if (mode === "READ_MATH") setFormulaIndex((v) => (v + 1) % Math.max(formulas.length, 1));
    if (mode === "EXPLAIN") setQuestionIndex((v) => (v + 1) % Math.max(explainQuestions.length, 1));
    clearAttempt();
  };

  const feedback = localResult ? localFeedback(localResult.score) : null;
  const micSupported = isSpeechRecognitionSupported();
  const ttsSupported = isSpeechSynthesisSupported();

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-indigo-600 text-white grid place-items-center shadow-md shadow-cyan-200"><Mic className="w-6 h-6" /></div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-700">Math Speaking</div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">Nghe · đọc biểu thức · nói bước giải</h2>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed max-w-3xl">Luyện tiếng Anh Toán học theo đúng bài đang học. Microphone dùng Speech Recognition của trình duyệt; hệ thống <strong>không lưu file âm thanh</strong>, chỉ lưu transcript và kết quả luyện.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] font-bold">
            <span className={`rounded-full border px-3 py-1.5 ${micSupported ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-amber-200 bg-amber-50 text-amber-700"}`}>{micSupported ? "Mic: sẵn sàng" : "Mic: dùng nhập tay dự phòng"}</span>
            <span className={`rounded-full border px-3 py-1.5 ${ttsSupported ? "border-cyan-200 bg-cyan-50 text-cyan-700" : "border-slate-200 bg-slate-50 text-slate-500"}`}>{ttsSupported ? "Nghe mẫu: sẵn sàng" : "Nghe mẫu: không hỗ trợ"}</span>
          </div>
        </div>
        <div className="mt-4 rounded-2xl border border-indigo-100 bg-white/80 px-4 py-3 flex gap-2 text-[11px] text-indigo-800 leading-relaxed"><Info className="w-4 h-4 shrink-0 mt-0.5" /><span><strong>Phạm vi đánh giá:</strong> Nghe & nhắc lại / Đọc biểu thức dùng độ khớp transcript. Nói bước giải dùng Gemini để đánh giá ý Toán + Math English. Bản này không chấm accent hay âm vị như một phòng lab phát âm chuyên dụng.</span></div>
      </section>

      <div className="grid xl:grid-cols-[310px_minmax(0,1fr)] gap-5 items-start">
        <LessonTreeSelector
          selectedGrade={selectedGrade}
          onGradeChange={onGradeChange}
          selectedLessonId={lessonId}
          onLessonChange={setLesson}
          formats={["TN", "TLN", "TL"]}
          accent="blue"
        />

        <div className="space-y-4 min-w-0">
          <section className="rounded-3xl bg-white border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50/70">
              <div className="text-[10px] uppercase tracking-wider font-black text-slate-400">{lesson?.titleVi || "Bài đang học"}</div>
              <div className="grid sm:grid-cols-3 gap-2 mt-3">
                {modeCards.map((card) => {
                  const Icon = card.icon;
                  const active = card.id === mode;
                  return <button key={card.id} type="button" onClick={() => switchMode(card.id)} className={`text-left rounded-2xl border p-3 transition-all ${active ? "border-cyan-400 bg-cyan-50 shadow-sm" : "border-slate-200 bg-white hover:bg-slate-50"}`}><Icon className={`w-5 h-5 ${active ? "text-cyan-700" : "text-slate-400"}`} /><div className="font-black text-sm text-slate-900 mt-2">{card.title}</div><div className="text-[10px] text-slate-500 mt-0.5">{card.subtitle}</div></button>;
                })}
              </div>
            </div>

            <div className="p-5 space-y-4">
              {mode === "REPEAT" && term && (
                <div className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50/70 to-white p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div><div className="text-[10px] uppercase tracking-wider font-black text-cyan-700">Từ/cụm từ mục tiêu</div><div className="text-2xl font-black text-slate-900 mt-1">{term.term}</div><div className="text-xs text-slate-500 mt-1">{term.phonetic || ""} · {term.vietnamese}</div></div>
                    <button type="button" onClick={listenTarget} className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 text-white px-4 py-2.5 text-xs font-black"><Volume2 className="w-4 h-4" /> Nghe mẫu</button>
                  </div>
                </div>
              )}

              {mode === "READ_MATH" && formula && (
                <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 to-white p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider font-black text-indigo-700">Biểu thức cần đọc</div><div className="mt-2 rounded-xl bg-white border border-indigo-100 p-3 overflow-x-auto"><MathRenderer math={formula.display} block /></div><div className="text-[10px] text-slate-400 mt-2">Nguồn: {formula.source}</div></div>
                    <button type="button" onClick={listenTarget} className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-2.5 text-xs font-black shrink-0"><Volume2 className="w-4 h-4" /> Nghe cách đọc</button>
                  </div>
                </div>
              )}

              {mode === "READ_MATH" && !formula && <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800">Bài này chưa có công thức/ký hiệu đủ rõ để tạo mục Đọc biểu thức. Hãy chọn bài khác.</div>}

              {mode === "EXPLAIN" && question && (
                <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/60 to-white p-5 space-y-3">
                  <div className="flex items-center justify-between gap-3"><div><div className="text-[10px] uppercase tracking-wider font-black text-violet-700">Nói bước giải bằng tiếng Anh</div><div className="text-[11px] text-slate-500 mt-1">Explain the first useful step or reasoning. Do not say only the final answer.</div></div><button type="button" onClick={listenTarget} className="inline-flex items-center gap-1.5 rounded-lg border border-violet-200 bg-white px-3 py-2 text-[10px] font-black text-violet-700"><Volume2 className="w-3.5 h-3.5" /> Nghe đề</button></div>
                  <div className="text-sm leading-7 font-semibold text-slate-900"><RichMathText text={question.questionEn} /></div>
                  <StandardQuestionMedia question={question} />
                </div>
              )}

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div><div className="text-xs font-black text-slate-900">Transcript của em</div><div className="text-[10px] text-slate-500">Có thể sửa transcript nếu trình duyệt nhận nhầm ký hiệu/từ Toán.</div></div>
                  <div className="flex gap-2">
                    <button type="button" onClick={startMic} className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black ${listening ? "bg-rose-600 text-white" : "bg-slate-900 text-white"}`}>{listening ? <CircleStop className="w-4 h-4" /> : <Mic className="w-4 h-4" />}{listening ? "Dừng nghe" : "Bật microphone"}</button>
                    <button type="button" onClick={() => { controllerRef.current?.abort(); setListening(false); clearAttempt(); }} className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-black text-slate-600"><RefreshCw className="w-3.5 h-3.5" /> Làm lại</button>
                  </div>
                </div>
                {listening && <div className="mb-2 flex items-center gap-2 text-[11px] font-bold text-rose-600"><span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" /> Đang nghe… {interim && <span className="font-medium text-slate-500">{interim}</span>}</div>}
                <textarea value={transcript} onChange={(e) => { setTranscript(e.target.value); setLocalResult(null); setAiResult(null); }} placeholder={mode === "EXPLAIN" ? "Ví dụ: First, we calculate the derivative..." : "Transcript tiếng Anh sẽ xuất hiện ở đây..."} className="w-full min-h-28 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-cyan-400 resize-y" />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-[10px] text-slate-400">{typeof confidence === "number" ? `Độ tin cậy nhận dạng: ${Math.round(confidence * 100)}%` : micSupported ? "Cho phép microphone khi trình duyệt hỏi quyền." : "Trình duyệt không hỗ trợ mic: em có thể gõ transcript để test luồng học."}</div>
                  <button type="button" disabled={busy || !transcript.trim()} onClick={evaluate} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 px-5 py-2.5 text-xs font-black text-white disabled:opacity-50"><Sparkles className="w-4 h-4" /> {busy ? "Đang đánh giá..." : mode === "EXPLAIN" ? "AI đánh giá phần nói" : "Đánh giá độ khớp"}</button>
                </div>
              </div>

              {error && <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-semibold text-rose-700">{error}</div>}

              {localResult && feedback && (
                <div className={`rounded-2xl border p-4 ${feedback.cls}`}>
                  <div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-[10px] uppercase tracking-wider font-black">Kết quả transcript</div><div className="text-lg font-black mt-1">{feedback.label}</div></div><div className="text-3xl font-black">{localResult.score}%</div></div>
                  <div className="mt-2 text-xs leading-relaxed">{feedback.note}</div>
                  {localResult.missingWords.length > 0 && <div className="mt-2 text-[11px]"><strong>Từ hệ thống chưa nghe rõ:</strong> {localResult.missingWords.join(", ")}</div>}
                  <div className="mt-3 rounded-xl bg-white/70 border border-current/10 px-3 py-2 text-[11px]"><strong>Cách đọc mục tiêu:</strong> {expectedText}</div>
                </div>
              )}

              {aiResult && (
                <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-5 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-[10px] uppercase tracking-wider font-black text-violet-700">AI phản hồi Math Speaking</div><div className="text-[10px] text-slate-400 mt-1">{aiModel ? `Gemini ${aiModel} · ` : ""}Đánh giá transcript, không chấm accent.</div></div><div className="text-3xl font-black text-violet-700">{Math.round(aiResult.overallScore)}%</div></div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {[["Ý Toán", aiResult.mathContentScore],["Math English", aiResult.mathEnglishScore],["Rõ ý", aiResult.clarityScore],["Từ khóa", aiResult.keyVocabularyScore]].map(([label, score]) => <div key={String(label)} className="rounded-xl bg-white border border-violet-100 p-3 text-center"><div className="text-xl font-black text-violet-700">{String(score)}/10</div><div className="text-[10px] text-slate-500">{String(label)}</div></div>)}
                  </div>
                  <div className="text-xs text-slate-700 leading-relaxed">{aiResult.feedbackVi}</div>
                  {aiResult.correctedEnglish && <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-xs text-emerald-900"><strong>Cách diễn đạt tốt hơn:</strong> {aiResult.correctedEnglish}</div>}
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-emerald-100 bg-white p-3"><div className="text-[10px] uppercase font-black text-emerald-700">Điểm tốt</div><ul className="mt-2 space-y-1 text-[11px] text-slate-600">{aiResult.strengths.map((item, i) => <li key={i}>• {item}</li>)}</ul></div>
                    <div className="rounded-xl border border-amber-100 bg-white p-3"><div className="text-[10px] uppercase font-black text-amber-700">Cần cải thiện</div><ul className="mt-2 space-y-1 text-[11px] text-slate-600">{aiResult.improvements.map((item, i) => <li key={i}>• {item}</li>)}</ul></div>
                  </div>
                  {aiResult.nextPrompt && <div className="rounded-xl bg-violet-600 text-white px-4 py-3 text-xs font-bold"><Languages className="inline w-4 h-4 mr-1.5" />Lượt nói tiếp theo: {aiResult.nextPrompt}</div>}
                </div>
              )}

              <div className="flex flex-wrap justify-between gap-3 pt-1">
                <div className="inline-flex items-center gap-2 text-[10px] text-slate-500"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Không lưu audio · chỉ lưu kết quả luyện và transcript trong request AI.</div>
                <button type="button" onClick={nextTarget} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-black text-slate-700 hover:bg-slate-50">Mục tiếp theo <ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
