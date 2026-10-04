import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Download,
  Flame,
  Gamepad2,
  Languages,
  RefreshCw,
  RotateCw,
  Search,
  Sparkles,
  Trophy,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import { MATH_TERMS } from "../data/mathTerms";
import type { HighSchoolGrade, MatchingCard } from "../types";
import {
  getFirstLessonWithVocabulary,
  getLessonVocabularyContext,
  type LessonVocabularyTerm,
} from "../data/lessonVocabulary";
import { STANDARD_LESSONS } from "../data/standardQuestionBank";
import { MathRenderer, RichMathText } from "./MathRenderer";
import { exportVocabToPowerPoint } from "../utils/pptxExport";
import { SpeedMathTermGame } from "./SpeedMathTermGame";
import { VocabularyLessonTreeSelector } from "./VocabularyLessonTreeSelector";

interface Level1VocabularyStudioProps {
  selectedGrade: HighSchoolGrade;
  onGradeChange: (grade: HighSchoolGrade) => void;
  onAddXP: (amount: number) => void;
  initialMasteredTermIds?: string[];
  onTermMastered?: (termId: string) => void;
  selectedLessonId?: string;
  onLessonChange?: (lessonId: string) => void;
  onNavigateToLevel2?: () => void;
}

type Level1Tab = "postcard" | "matching_game" | "speed_quiz" | "speed_rush" | "lexicon";

const pickRandom = <T,>(items: T[], limit: number) =>
  [...items].sort(() => Math.random() - 0.5).slice(0, Math.min(limit, items.length));

export const Level1VocabularyStudio: React.FC<Level1VocabularyStudioProps> = ({
  selectedGrade,
  onGradeChange,
  onAddXP,
  initialMasteredTermIds = [],
  onTermMastered,
  selectedLessonId: controlledLessonId,
  onLessonChange,
  onNavigateToLevel2,
}) => {
  const initialLesson = getFirstLessonWithVocabulary(selectedGrade);
  const [internalLessonId, setInternalLessonId] = useState(initialLesson?.id || "");
  const selectedLessonId = controlledLessonId || internalLessonId;
  const [activeTab, setActiveTab] = useState<Level1Tab>("postcard");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<string[]>(initialMasteredTermIds);

  const changeLesson = (lessonId: string) => {
    setInternalLessonId(lessonId);
    onLessonChange?.(lessonId);
    setSearchQuery("");
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  useEffect(() => setMasteredIds(initialMasteredTermIds), [initialMasteredTermIds]);

  useEffect(() => {
    const lesson = STANDARD_LESSONS.find((item) => item.id === selectedLessonId);
    if (lesson?.grade === selectedGrade) return;
    const first = getFirstLessonWithVocabulary(selectedGrade);
    if (first) changeLesson(first.id);
  }, [selectedGrade, selectedLessonId]);

  const context = useMemo(() => getLessonVocabularyContext(selectedLessonId), [selectedLessonId]);
  const lessonTerms: LessonVocabularyTerm[] = context?.terms ?? [];

  const filteredTerms = useMemo<LessonVocabularyTerm[]>(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return lessonTerms;
    return lessonTerms.filter((term) =>
      [term.term, term.vietnamese, term.definitionEn, term.definitionVi, term.exampleSentenceEn]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [lessonTerms, searchQuery]);

  useEffect(() => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, [selectedLessonId, searchQuery]);

  const activeCard = filteredTerms[currentCardIndex];
  const selectedLesson = context?.lesson;
  const selectedChapter = context?.chapter;
  const masteredInLesson = lessonTerms.filter((term) => masteredIds.includes(`${term.gradeLevel}:${term.id}`)).length;
  const masteryPercent = lessonTerms.length ? Math.round((masteredInLesson / lessonTerms.length) * 100) : 0;

  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.replace(/\$[^$]+\$/g, " mathematical expression "));
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleNextCard = (mastered: boolean) => {
    if (!activeCard) return;
    const masteryKey = `${activeCard.gradeLevel}:${activeCard.id}`;
    if (mastered && !masteredIds.includes(masteryKey)) {
      setMasteredIds((prev) => [...prev, masteryKey]);
      onTermMastered?.(masteryKey);
      onAddXP(10);
    }
    setIsFlipped(false);
    setCurrentCardIndex((index) => (filteredTerms.length ? (index + 1) % filteredTerms.length : 0));
  };

  // Matching game
  const [matchingCards, setMatchingCards] = useState<MatchingCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<MatchingCard | null>(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameStreak, setGameStreak] = useState(0);
  const [gameTimeLeft, setGameTimeLeft] = useState(60);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  const startMatchingGame = () => {
    const pool = pickRandom<LessonVocabularyTerm>(filteredTerms.length >= 2 ? filteredTerms : lessonTerms, 5);
    const cards: MatchingCard[] = [];
    pool.forEach((term) => {
      const pairId = `${term.gradeLevel}:${term.id}`;
      cards.push({
        id: `en_${pairId}`,
        pairId,
        type: "english",
        text: term.term,
        phonetic: term.phonetic,
        symbol: term.mathSymbol,
        isMatched: false,
        isSelected: false,
      });
      cards.push({
        id: `vi_${pairId}`,
        pairId,
        type: "vietnamese",
        text: term.vietnamese,
        isMatched: false,
        isSelected: false,
      });
    });
    setMatchingCards(cards.sort(() => Math.random() - 0.5));
    setSelectedCard(null);
    setGameScore(0);
    setGameStreak(0);
    setGameTimeLeft(60);
    setIsGameActive(cards.length >= 4);
    setIsGameCompleted(false);
  };

  useEffect(() => {
    if (!isGameActive || gameTimeLeft <= 0 || isGameCompleted) return;
    const timer = window.setInterval(() => {
      setGameTimeLeft((previous) => {
        if (previous <= 1) {
          setIsGameActive(false);
          return 0;
        }
        return previous - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isGameActive, gameTimeLeft, isGameCompleted]);

  useEffect(() => {
    setIsGameActive(false);
    setIsGameCompleted(false);
    setMatchingCards([]);
    setGameTimeLeft(60);
  }, [selectedLessonId]);

  const handleCardClick = (card: MatchingCard) => {
    if (!isGameActive || card.isMatched) return;
    if (card.type === "english") speak(card.text);
    if (!selectedCard) {
      setSelectedCard(card);
      setMatchingCards((prev) => prev.map((item) => ({ ...item, isSelected: item.id === card.id, isWrong: false })));
      return;
    }
    if (selectedCard.id === card.id) {
      setSelectedCard(null);
      setMatchingCards((prev) => prev.map((item) => item.id === card.id ? { ...item, isSelected: false } : item));
      return;
    }
    if (selectedCard.pairId === card.pairId && selectedCard.type !== card.type) {
      const nextStreak = gameStreak + 1;
      const points = 20 + nextStreak * 5;
      setGameStreak(nextStreak);
      setGameScore((score) => score + points);
      onAddXP(points);
      const updated = matchingCards.map((item) =>
        item.id === selectedCard.id || item.id === card.id
          ? { ...item, isMatched: true, isSelected: false, isWrong: false }
          : item
      );
      setMatchingCards(updated);
      setSelectedCard(null);
      if (updated.length > 0 && updated.every((item) => item.isMatched)) {
        setIsGameCompleted(true);
        setIsGameActive(false);
        onAddXP(50);
      }
    } else {
      setGameStreak(0);
      const firstId = selectedCard.id;
      setSelectedCard(null);
      setMatchingCards((prev) => prev.map((item) =>
        item.id === firstId || item.id === card.id
          ? { ...item, isWrong: true, isSelected: false }
          : { ...item, isSelected: false }
      ));
      window.setTimeout(() => setMatchingCards((prev) => prev.map((item) => ({ ...item, isWrong: false }))), 600);
    }
  };

  // Speed quiz
  const [quizQuestions, setQuizQuestions] = useState<Array<{
    term: LessonVocabularyTerm;
    options: Array<{ text: string; isCorrect: boolean }>;
  }>>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState<string | null>(null);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const restartQuiz = () => {
    const selected = pickRandom<LessonVocabularyTerm>(filteredTerms.length ? filteredTerms : lessonTerms, 10);
    const questions = selected.map((term) => {
      const distractors = pickRandom<LessonVocabularyTerm | (typeof MATH_TERMS)[number]>(
        MATH_TERMS.filter((candidate) => candidate.id !== term.id && candidate.vietnamese !== term.vietnamese),
        3
      );
      return {
        term,
        options: [
          { text: term.vietnamese, isCorrect: true },
          ...distractors.map((item) => ({ text: item.vietnamese, isCorrect: false })),
        ].sort(() => Math.random() - 0.5),
      };
    });
    setQuizQuestions(questions);
    setQuizIndex(0);
    setQuizScore(0);
    setQuizSelectedOption(null);
    setIsQuizFinished(false);
  };

  useEffect(() => {
    setQuizQuestions([]);
    setIsQuizFinished(false);
  }, [selectedLessonId]);

  const handleQuizAnswer = (optionText: string, isCorrect: boolean) => {
    if (quizSelectedOption !== null) return;
    setQuizSelectedOption(optionText);
    if (isCorrect) {
      setQuizScore((score) => score + 1);
      onAddXP(15);
    }
    window.setTimeout(() => {
      if (quizIndex < quizQuestions.length - 1) {
        setQuizIndex((index) => index + 1);
        setQuizSelectedOption(null);
      } else {
        setIsQuizFinished(true);
      }
    }, 850);
  };

  const switchTab = (tab: Level1Tab) => {
    setActiveTab(tab);
    if (tab === "matching_game") startMatchingGame();
    if (tab === "speed_quiz") restartQuiz();
  };

  const tabButton = (tab: Level1Tab, label: string, icon: React.ReactNode, activeClass: string) => (
    <button
      type="button"
      onClick={() => switchTab(tab)}
      className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
        activeTab === tab ? activeClass : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
      }`}
    >
      {icon}{label}
    </button>
  );

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-slate-950 px-3 py-1 text-[11px] font-black">
              <Sparkles className="w-3.5 h-3.5" /> LEVEL 1 · TỪ VỰNG THEO ĐÚNG BÀI HỌC
            </div>
            <h2 className="mt-2 text-xl font-black text-slate-900">Học từ trước → gặp lại trong đề → giải bài dễ hơn</h2>
            <p className="mt-1 text-xs text-slate-600 max-w-3xl">
              Level 1 dùng cùng cây Khối → Chương → Bài với Level 2–3. Thuật ngữ được xếp theo độ liên quan với chính ngân hàng câu hỏi chuẩn của bài, không học một danh sách rời rạc theo khối.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 shrink-0">
            <div className="rounded-xl border border-amber-100 bg-white px-3 py-2 text-center">
              <div className="text-lg font-black text-amber-700">{lessonTerms.length}</div>
              <div className="text-[10px] font-bold text-slate-500">từ trọng tâm</div>
            </div>
            <div className="rounded-xl border border-blue-100 bg-white px-3 py-2 text-center">
              <div className="text-lg font-black text-blue-700">{context?.level2Count || 0}</div>
              <div className="text-[10px] font-bold text-slate-500">TN Level 2</div>
            </div>
            <div className="rounded-xl border border-rose-100 bg-white px-3 py-2 text-center">
              <div className="text-lg font-black text-rose-700">{context?.level3Count || 0}</div>
              <div className="text-[10px] font-bold text-slate-500">TLN/TL Level 3</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-6 items-start">
        <div className="lg:sticky lg:top-4">
          <VocabularyLessonTreeSelector
            selectedGrade={selectedGrade}
            onGradeChange={onGradeChange}
            selectedLessonId={selectedLessonId}
            onLessonChange={changeLesson}
            masteredIds={masteredIds}
          />
        </div>

        <div className="space-y-4 min-w-0">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[10px] font-black uppercase tracking-wider text-amber-600">Lộ trình hiện tại</div>
                <div className="text-xs font-bold text-slate-800 mt-1 leading-relaxed">
                  Lớp {selectedGrade} <span className="text-slate-300">›</span> {selectedChapter?.titleVi || "Chương"} <span className="text-slate-300">›</span> {selectedLesson?.titleVi || "Bài"}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-1.5 text-[10px] font-black text-emerald-700">
                  Đã thuộc {masteredInLesson}/{lessonTerms.length} · {masteryPercent}%
                </div>
                {onNavigateToLevel2 && (
                  <button
                    type="button"
                    onClick={onNavigateToLevel2}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-[11px] font-black shadow-sm"
                  >
                    Qua Level 2 cùng bài <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-emerald-500 transition-all" style={{ width: `${masteryPercent}%` }} />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div className="flex flex-wrap gap-2">
              {tabButton("postcard", `Postcard (${filteredTerms.length})`, <RotateCw className="w-4 h-4" />, "bg-amber-500 text-slate-950 border-amber-500")}
              {tabButton("matching_game", "Nối từ", <Gamepad2 className="w-4 h-4" />, "bg-emerald-600 text-white border-emerald-600")}
              {tabButton("speed_quiz", "Speed Recall", <Zap className="w-4 h-4" />, "bg-indigo-600 text-white border-indigo-600")}
              {tabButton("speed_rush", "Math Rush", <Flame className="w-4 h-4" />, "bg-orange-600 text-white border-orange-600")}
              {tabButton("lexicon", "Tra cứu", <BookOpen className="w-4 h-4" />, "bg-slate-800 text-white border-slate-800")}
            </div>
            <button
              type="button"
              onClick={() => selectedLesson && exportVocabToPowerPoint(lessonTerms, selectedGrade, selectedLesson.titleVi)}
              className="px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded-xl border border-indigo-200 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Xuất PPTX bài này
            </button>
          </div>

          {activeTab === "postcard" && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Tìm trong từ vựng của bài này..."
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400"
                />
              </div>

              <div className="flex justify-between items-center text-xs text-slate-500 px-1">
                <span>Thẻ <strong className="text-slate-900">{activeCard ? currentCardIndex + 1 : 0}</strong> / {filteredTerms.length}</span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold"><Award className="w-4 h-4" /> {masteryPercent}% bài đã thuộc</span>
              </div>

              {activeCard ? (
                <div
                  onClick={() => setIsFlipped((value) => !value)}
                  className="bg-white border-2 border-amber-200 rounded-3xl p-6 md:p-8 shadow-lg min-h-[410px] flex flex-col justify-between cursor-pointer transition-all hover:border-amber-400 relative overflow-hidden"
                >
                  <div className="flex flex-wrap justify-between items-center gap-2 text-xs">
                    <span className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full font-bold border border-amber-100">
                      {selectedLesson?.titleVi} · ưu tiên #{currentCardIndex + 1}
                    </span>
                    {activeCard.sourceQuestionId ? (
                      <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[10px] font-bold border border-blue-100 flex items-center gap-1">
                        <Languages className="w-3 h-3" /> Có trong câu chuẩn {activeCard.sourceQuestionFormat}
                      </span>
                    ) : (
                      <span className="bg-slate-50 text-slate-500 px-2.5 py-1 rounded-full text-[10px] font-bold border border-slate-200">Từ nền của chương</span>
                    )}
                  </div>

                  {!isFlipped ? (
                    <div className="text-center py-7 space-y-4">
                      <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{activeCard.term}</div>
                      <div className="flex items-center justify-center gap-2">
                        {activeCard.phonetic && <span className="text-sm font-mono text-slate-500">{activeCard.phonetic}</span>}
                        <button
                          type="button"
                          onClick={(event) => { event.stopPropagation(); speak(activeCard.term); }}
                          className="p-2 rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
                          title="Nghe phát âm"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      {activeCard.mathSymbol && (
                        <div className="inline-block bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-2xl text-slate-800 font-mono text-base">
                          <MathRenderer math={activeCard.mathSymbol} />
                        </div>
                      )}
                      <div className="max-w-xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-4 text-left">
                        <div className="text-[10px] uppercase tracking-wider font-black text-amber-700 mb-1">Math Phrase Challenge · câu em sẽ gặp khi làm bài</div>
                        <div className="text-xs text-amber-950 leading-6">
                          <RichMathText text={activeCard.exampleSentenceEn.replace(new RegExp(activeCard.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig"), "_____")} />
                        </div>
                        <div className="text-[10px] text-amber-700 mt-1">Đoán thuật ngữ còn thiếu rồi chạm thẻ để kiểm tra.</div>
                      </div>
                    </div>
                  ) : (
                    <div className="py-3 space-y-4 animate-in fade-in zoom-in-95 duration-150">
                      <div className="text-center">
                        <span className="text-lg font-bold text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-xl border border-emerald-200">🇻🇳 {activeCard.vietnamese}</span>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-xs leading-6 text-slate-700">
                        <div className="font-black text-slate-900 mb-1">Định nghĩa</div>
                        <div>{activeCard.definitionVi}</div>
                        <div className="mt-1 italic text-slate-500">EN: {activeCard.definitionEn}</div>
                      </div>
                      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 text-xs leading-6 text-indigo-950">
                        <div className="font-black text-indigo-900 mb-1">Ví dụ trong ngữ cảnh bài</div>
                        <RichMathText text={activeCard.exampleSentenceEn} />
                        {activeCard.exampleSentenceVi && <div className="mt-2 text-[11px] text-slate-600"><RichMathText text={activeCard.exampleSentenceVi} /></div>}
                      </div>
                      {activeCard.falseFriendPitfall && (
                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-[11px] leading-5 text-amber-950">
                          <strong>⚠️ Bẫy dễ nhầm:</strong> {activeCard.falseFriendPitfall}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex gap-3 pt-4 border-t border-slate-100" onClick={(event) => event.stopPropagation()}>
                    <button type="button" onClick={() => handleNextCard(false)} className="flex-1 py-3 rounded-xl border border-rose-200 text-rose-700 font-bold text-xs hover:bg-rose-50 flex items-center justify-center gap-1.5">
                      <X className="w-4 h-4" /> Chưa thuộc
                    </button>
                    <button type="button" onClick={() => handleNextCard(true)} className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm">
                      <Check className="w-4 h-4" /> Đã thuộc (+10 XP)
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center p-10 bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">Không có từ vựng khớp tìm kiếm.</div>
              )}
            </div>
          )}

          {activeTab === "matching_game" && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="font-black text-slate-900 text-sm">Nối từ · {selectedLesson?.titleVi}</div>
                  <div className="text-[11px] text-slate-500">5 cặp từ lấy trong đúng bài đang học.</div>
                </div>
                <div className="flex gap-2 text-[11px] font-bold">
                  <span className="bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-lg px-2.5 py-1.5"><Trophy className="w-3.5 h-3.5 inline mr-1" />{gameScore}</span>
                  <span className="bg-amber-50 text-amber-700 border border-amber-100 rounded-lg px-2.5 py-1.5"><Flame className="w-3.5 h-3.5 inline mr-1" />x{gameStreak}</span>
                  <span className="bg-rose-50 text-rose-700 border border-rose-100 rounded-lg px-2.5 py-1.5"><Clock className="w-3.5 h-3.5 inline mr-1" />{gameTimeLeft}s</span>
                </div>
              </div>

              {isGameActive && !isGameCompleted && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {matchingCards.map((card) => (
                    <button
                      key={card.id}
                      type="button"
                      disabled={card.isMatched}
                      onClick={() => handleCardClick(card)}
                      className={`p-4 rounded-2xl border-2 text-left min-h-[88px] transition-all ${
                        card.isMatched ? "bg-slate-100 border-slate-200 text-slate-400 opacity-40"
                          : card.isSelected ? "bg-indigo-50 border-indigo-500 ring-2 ring-indigo-300"
                          : card.isWrong ? "bg-rose-50 border-rose-500"
                          : card.type === "english" ? "bg-white border-slate-200 hover:border-indigo-300" : "bg-emerald-50/50 border-emerald-200 hover:border-emerald-400"
                      }`}
                    >
                      <div className="text-[9px] uppercase font-black text-slate-400">{card.type === "english" ? "English" : "Tiếng Việt"}</div>
                      <div className="font-extrabold text-sm text-slate-900 mt-1">{card.text}</div>
                      {card.symbol && <div className="mt-1 text-xs text-slate-500"><MathRenderer math={card.symbol} /></div>}
                    </button>
                  ))}
                </div>
              )}

              {isGameCompleted && (
                <div className="bg-white rounded-3xl p-8 border-2 border-emerald-300 text-center space-y-4 shadow-lg">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <div className="text-xl font-black text-slate-900">Hoàn thành màn từ vựng của bài!</div>
                  <div className="text-xs text-slate-600">Điểm {gameScore} · thưởng hoàn thành +50 XP.</div>
                  <button type="button" onClick={startMatchingGame} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold inline-flex items-center gap-2"><RefreshCw className="w-4 h-4" /> Chơi lượt mới</button>
                </div>
              )}

              {!isGameActive && !isGameCompleted && (
                <div className="bg-white rounded-2xl p-7 border border-slate-200 text-center space-y-3">
                  <div className="text-sm font-black text-slate-900">{gameTimeLeft === 0 ? "Hết giờ!" : "Sẵn sàng luyện phản xạ?"}</div>
                  <button type="button" onClick={startMatchingGame} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold inline-flex items-center gap-2"><Gamepad2 className="w-4 h-4" /> Bắt đầu</button>
                </div>
              )}
            </div>
          )}

          {activeTab === "speed_quiz" && (
            <div className="max-w-2xl mx-auto space-y-4">
              {!quizQuestions.length ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
                  <button type="button" onClick={restartQuiz} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold">Tạo 10 câu Speed Recall từ bài này</button>
                </div>
              ) : !isQuizFinished && quizQuestions[quizIndex] ? (
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-lg space-y-6">
                  <div className="flex justify-between text-xs text-slate-500"><span>Câu {quizIndex + 1}/{quizQuestions.length}</span><span className="font-bold text-indigo-700">Đúng {quizScore}</span></div>
                  <div className="text-center space-y-2">
                    <div className="text-[10px] uppercase tracking-wider font-black text-slate-400">Chọn nghĩa tiếng Việt</div>
                    <div className="text-3xl font-black text-slate-900">{quizQuestions[quizIndex].term.term}</div>
                    <button type="button" onClick={() => speak(quizQuestions[quizIndex].term.term)} className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600"><Volume2 className="w-4 h-4" /> Nghe</button>
                  </div>
                  <div className="space-y-2.5">
                    {quizQuestions[quizIndex].options.map((option, index) => {
                      const answered = quizSelectedOption !== null;
                      const selected = quizSelectedOption === option.text;
                      const style = answered
                        ? option.isCorrect ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                          : selected ? "bg-rose-50 border-rose-500 text-rose-900"
                          : "bg-slate-50 border-slate-200 text-slate-400"
                        : "bg-white border-slate-200 hover:border-indigo-300 text-slate-800";
                      return (
                        <button key={index} type="button" disabled={answered} onClick={() => handleQuizAnswer(option.text, option.isCorrect)} className={`w-full p-4 rounded-2xl border-2 text-left text-xs font-bold transition-all ${style}`}>
                          {option.text}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 border-2 border-indigo-200 text-center space-y-4 shadow-lg">
                  <Trophy className="w-12 h-12 text-indigo-600 mx-auto" />
                  <div className="text-xl font-black text-slate-900">{quizScore}/{quizQuestions.length} câu đúng</div>
                  <button type="button" onClick={restartQuiz} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold inline-flex items-center gap-2"><RefreshCw className="w-4 h-4" /> Làm bộ khác</button>
                </div>
              )}
            </div>
          )}

          {activeTab === "lexicon" && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Tìm từ/cụm từ trong bài..." className="w-full pl-9 pr-3 py-2.5 text-xs bg-white border border-slate-200 rounded-xl" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTerms.map((term) => (
                  <div key={`${term.gradeLevel}:${term.id}`} className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-black text-slate-900 text-base flex items-center gap-1.5">{term.term}<button type="button" onClick={() => speak(term.term)} className="text-indigo-600"><Volume2 className="w-3.5 h-3.5" /></button></div>
                        {term.phonetic && <div className="text-[11px] text-slate-400 font-mono">{term.phonetic}</div>}
                      </div>
                      {term.sourceQuestionId && <span className="text-[9px] font-black rounded-full bg-blue-50 border border-blue-100 text-blue-700 px-2 py-1">CÓ TRONG BANK</span>}
                    </div>
                    <div className="text-xs font-bold text-emerald-900 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100">🇻🇳 {term.vietnamese}</div>
                    {term.mathSymbol && <div className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-center"><MathRenderer math={term.mathSymbol} /></div>}
                    <p className="text-xs text-slate-600 leading-6">{term.definitionVi}</p>
                    <div className="pt-3 border-t border-slate-100 text-[11px] text-indigo-950 leading-5"><RichMathText text={term.exampleSentenceEn} /></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "speed_rush" && (
            <SpeedMathTermGame
              terms={lessonTerms}
              selectedGrade={selectedGrade}
              chapterTitle={selectedLesson?.titleVi || `Toán Lớp ${selectedGrade}`}
              onAddXP={onAddXP}
              onCloseGame={() => setActiveTab("postcard")}
            />
          )}
        </div>
      </div>
    </div>
  );
};
