import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { Lesson, LanguageMode, VocabularyItem, SentencePattern, Question } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { speakEnglishWord } from '../../lib/audio';
import { apiFetch } from '../../lib/dataService';
import { generateBilingualVocabLessonAi, hasApiKey } from '../../lib/geminiService';
import { AiStepSolverModal } from '../math/AiStepSolverModal';
import { InteractiveFunctionGrapher } from '../math/InteractiveFunctionGrapher';
import {
  BookOpen,
  Globe2,
  CheckCircle2,
  Volume2,
  Sparkles,
  HelpCircle,
  Lightbulb,
  ArrowRight,
  RefreshCw,
  Plus,
  Search,
  BookMarked,
  MessageSquare,
  FileText,
  Activity,
  Zap,
  CheckSquare,
  ChevronRight,
  ChevronLeft,
  Filter,
  Layers,
  Award,
  Play,
  RotateCcw,
  Flame,
  Bookmark,
  Heart,
} from 'lucide-react';

export const BilingualLessonModule: React.FC = () => {
  const {
    selectedGrade,
    languageMode,
    setLanguageMode,
    showNotification,
    selectedLessonId,
    setSelectedLessonId,
    selectedLessonSubTab,
    setSelectedLessonSubTab,
  } = useAppStore();

  // Lessons and Chapters data
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [chapters, setChapters] = useState<any[]>([]);
  const [topics, setTopics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [searchLessonQuery, setSearchLessonQuery] = useState('');
  const [aiGenerating, setAiGenerating] = useState(false);

  // In-lesson subtab: 'theory' | 'vocab' | 'sentences' | 'reading' | 'grapher' | 'minigame' | 'practice'
  const activeSubTab = selectedLessonSubTab || 'theory';
  const setActiveSubTab = setSelectedLessonSubTab;

  // Lesson related sub-data
  const [lessonVocab, setLessonVocab] = useState<VocabularyItem[]>([]);
  const [lessonSentences, setLessonSentences] = useState<SentencePattern[]>([]);
  const [lessonQuestions, setLessonQuestions] = useState<Question[]>([]);

  // Flashcards state
  const [vocabViewMode, setVocabViewMode] = useState<'cards' | 'flashcards'>('cards');
  const [flashIndex, setFlashIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Sentence pattern active item & practice input
  const [activeSentence, setActiveSentence] = useState<SentencePattern | null>(null);
  const [sentenceInput, setSentenceInput] = useState('');
  const [sentenceFeedback, setSentenceFeedback] = useState<string | null>(null);

  // Math Reading State
  const [readingGiven, setReadingGiven] = useState<string | null>(null);
  const [readingRequired, setReadingRequired] = useState<string | null>(null);
  const [readingKeyword, setReadingKeyword] = useState<string | null>(null);
  const [readingFeedback, setReadingFeedback] = useState<string | null>(null);
  const [readingStep, setReadingStep] = useState<'ANALYZE' | 'SOLVE'>('ANALYZE');

  // Minigame State for this lesson
  const [gameCards, setGameCards] = useState<any[]>([]);
  const [selectedFirst, setSelectedFirst] = useState<any | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [gameScore, setGameScore] = useState(0);
  const [gameStreak, setGameStreak] = useState(0);
  const [gameTimeLeft, setGameTimeLeft] = useState(60);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  // Practice state for this lesson
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [selectedPracticeOption, setSelectedPracticeOption] = useState<string | null>(null);
  const [practiceResult, setPracticeResult] = useState<any | null>(null);
  const [practiceScore, setPracticeScore] = useState(0);
  const [activeHint, setActiveHint] = useState<'vocab' | 'formula' | 'translation' | null>(null);

  // AI Step Solver Modal
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  useEffect(() => {
    fetchInitialData();
  }, [selectedGrade]);

  // When activeLesson changes, load its contextual sub-data
  useEffect(() => {
    if (activeLesson) {
      loadSubDataForLesson(activeLesson);
    }
  }, [activeLesson]);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const [lessonsData, chaptersData, topicsData] = await Promise.all([
        apiFetch<Lesson[]>('/api/lessons'),
        apiFetch<any[]>('/api/chapters'),
        apiFetch<any[]>('/api/topics'),
      ]);

      const filteredChapters = (chaptersData || []).filter(
        (c) => c.grade_id === selectedGrade || c.id?.includes(`-${selectedGrade}-`)
      );
      setChapters(filteredChapters);
      setTopics(topicsData || []);

      const allLessons = lessonsData || [];
      const filteredLessons = allLessons.filter(
        (l) =>
          l.topic_id?.includes(`top-${selectedGrade}`) ||
          l.id?.includes(`-${selectedGrade}-`) ||
          l.id?.includes(`les-${selectedGrade}`)
      );
      const toShow = filteredLessons.length > 0 ? filteredLessons : allLessons;
      setLessons(toShow);

      // Select target lesson from store or first lesson
      let target = toShow[0];
      if (selectedLessonId) {
        const found = toShow.find((l) => l.id === selectedLessonId);
        if (found) target = found;
      }
      setActiveLesson(target);
      if (target) setSelectedLessonId(target.id);
    } catch (err) {
      console.error('Error fetching lessons data:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadSubDataForLesson = async (lesson: Lesson) => {
    try {
      const [allVocab, allSentences, allQuestions] = await Promise.all([
        apiFetch<VocabularyItem[]>('/api/vocabulary'),
        apiFetch<SentencePattern[]>('/api/sentence-patterns'),
        apiFetch<Question[]>('/api/questions'),
      ]);

      // 1. Filter Vocab for this lesson
      let matchedVocab = (allVocab || []).filter(
        (v) => v.topic_id === lesson.topic_id || v.id?.includes(`-${selectedGrade}-`)
      );
      if (matchedVocab.length === 0) {
        matchedVocab = (allVocab || []).filter((v) => v.id?.startsWith(`voc-${selectedGrade}`));
      }
      if (matchedVocab.length === 0) matchedVocab = (allVocab || []).slice(0, 8);
      setLessonVocab(matchedVocab);
      setFlashIndex(0);
      setIsFlipped(false);

      // 2. Filter Sentences for this lesson
      let matchedSentences = (allSentences || []).filter(
        (sp) => sp.topic_id === lesson.topic_id || sp.id?.includes(`-${selectedGrade}-`)
      );
      if (matchedSentences.length === 0) {
        matchedSentences = (allSentences || []).filter((sp) => sp.id?.startsWith(`sp-${selectedGrade}`));
      }
      if (matchedSentences.length === 0) matchedSentences = (allSentences || []).slice(0, 4);
      setLessonSentences(matchedSentences);
      if (matchedSentences.length > 0) setActiveSentence(matchedSentences[0]);
      setSentenceFeedback(null);
      setSentenceInput('');

      // 3. Filter Questions for this lesson
      let matchedQ = (allQuestions || []).filter(
        (q) => q.topic_id === lesson.topic_id || q.id?.includes(`-${selectedGrade}`)
      );
      if (matchedQ.length === 0) {
        matchedQ = (allQuestions || []).filter((q) => q.id?.startsWith(`q-${selectedGrade}`));
      }
      if (matchedQ.length === 0) matchedQ = (allQuestions || []).slice(0, 5);
      setLessonQuestions(matchedQ);
      setPracticeIndex(0);
      setSelectedPracticeOption(null);
      setPracticeResult(null);

      // Reset Reading State
      setReadingGiven(null);
      setReadingRequired(null);
      setReadingKeyword(null);
      setReadingFeedback(null);
      setReadingStep('ANALYZE');

      // Reset Minigame
      setupMinigameCards(matchedVocab);
    } catch (e) {
      console.error('Error loading sub-data:', e);
    }
  };

  // Minigame Helper
  const setupMinigameCards = (vocabList: VocabularyItem[]) => {
    const list = vocabList.slice(0, 6);
    const enCards = list.map((item) => ({
      id: `en-${item.id}`,
      pairId: item.id,
      text: item.word,
      type: 'EN',
      ipa: item.ipa,
    }));
    const viCards = list.map((item) => ({
      id: `vi-${item.id}`,
      pairId: item.id,
      text: item.meaning_vi,
      type: 'VI',
    }));
    const combined = [...enCards, ...viCards].sort(() => Math.random() - 0.5);
    setGameCards(combined);
    setMatchedIds([]);
    setSelectedFirst(null);
    setGameScore(0);
    setGameStreak(0);
    setGameTimeLeft(60);
    setIsGameRunning(false);
    setIsGameFinished(false);
  };

  const handleCardClick = (card: any) => {
    if (!isGameRunning || matchedIds.includes(card.pairId)) return;
    if (card.type === 'EN') speakEnglishWord(card.text);

    if (!selectedFirst) {
      setSelectedFirst(card);
      return;
    }

    if (selectedFirst.id === card.id) {
      setSelectedFirst(null);
      return;
    }

    if (selectedFirst.pairId === card.pairId && selectedFirst.type !== card.type) {
      // MATCH!
      const newMatched = [...matchedIds, card.pairId];
      setMatchedIds(newMatched);
      setSelectedFirst(null);
      const newStreak = gameStreak + 1;
      setGameStreak(newStreak);
      const addedPoints = 100 + newStreak * 20;
      setGameScore((prev) => prev + addedPoints);

      if (newMatched.length === gameCards.length / 2) {
        setIsGameFinished(true);
        setIsGameRunning(false);
        showNotification(`🎉 Xuất sắc! Hoàn thành bài ghép từ với ${gameScore + addedPoints} điểm!`);
      }
    } else {
      // MISMATCH
      setGameStreak(0);
      setSelectedFirst(null);
    }
  };

  useEffect(() => {
    let timer: any;
    if (isGameRunning && gameTimeLeft > 0) {
      timer = setInterval(() => setGameTimeLeft((prev) => prev - 1), 1000);
    } else if (gameTimeLeft === 0 && isGameRunning) {
      setIsGameRunning(false);
      setIsGameFinished(true);
    }
    return () => clearInterval(timer);
  }, [isGameRunning, gameTimeLeft]);

  // AI Generator Handler
  const handleAiGenerateLesson = async () => {
    if (!hasApiKey()) {
      showNotification('Vui lòng cài đặt Gemini API Key trên Header để sử dụng AI!');
      return;
    }
    setAiGenerating(true);
    showNotification('✨ AI Gemini đang soạn bài học song ngữ mới...');

    try {
      const topicTitle =
        selectedGrade === 10
          ? 'Hàm số bậc hai & Đồ thị Parabol'
          : selectedGrade === 11
          ? 'Đạo hàm và Ý nghĩa hình học của Tiếp tuyến'
          : 'Nguyên hàm, Tích phân & Diện tích hình phẳng';

      const result = await generateBilingualVocabLessonAi(topicTitle, selectedGrade, 'FULL_LESSON');

      if (result.success && result.data) {
        const newLesson: Partial<Lesson> = {
          title_vi: result.data.title_vi || `Bài Học AI: ${topicTitle} (Lớp ${selectedGrade})`,
          title_en: result.data.title_en || `AI Lesson: ${topicTitle} (Grade ${selectedGrade})`,
          topic_id: `top-${selectedGrade}-6-2`,
          learning_objectives: result.data.learning_objectives || [
            'Nắm vững định nghĩa và thuật ngữ toán học tiếng Anh',
            'Vận dụng công thức giải bài tập toán THPT',
          ],
          key_concepts_vi: result.data.key_concepts_vi || 'Khái niệm toán học được hệ thống hóa rõ ràng theo chuẩn GDPT 2018.',
          key_concepts_en: result.data.key_concepts_en || 'Mathematical concepts structured clearly for bilingual comprehension.',
          formulas: result.data.formulas || [
            'y = ax^2 + bx + c \\implies I\\left(-\\frac{b}{2a}, -\\frac{\\Delta}{4a}\\right)',
            'f\'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}',
            '\\int_a^b f(x)dx = F(b) - F(a)',
          ],
          worked_examples: result.data.worked_examples || [
            {
              id: `we-${Date.now()}`,
              title_vi: 'Ví dụ Minh Họa Giải Từng Bước',
              title_en: 'AI Worked Example Step-by-Step',
              problem_vi: 'Tìm tọa độ đỉnh của parabol $y = x^2 - 4x + 3$.',
              problem_en: 'Find the vertex of the parabola $y = x^2 - 4x + 3$.',
              solution_steps: [
                {
                  step_number: 1,
                  title_en: 'Identify Coefficients',
                  title_vi: 'Xác định các hệ số',
                  content_en: 'We have $a = 1$, $b = -4$, and $c = 3$.',
                  content_vi: 'Ta có $a = 1, b = -4, c = 3$.',
                },
                {
                  step_number: 2,
                  title_en: 'Calculate x-coordinate of the vertex',
                  title_vi: 'Tính hoành độ đỉnh',
                  content_en: '$x_I = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$.',
                  content_vi: '$x_I = 2$.',
                  formula: 'x_I = -\\frac{b}{2a}',
                },
                {
                  step_number: 3,
                  title_en: 'Calculate y-coordinate',
                  title_vi: 'Tính tung độ đỉnh',
                  content_en: '$y_I = (2)^2 - 4(2) + 3 = -1$.',
                  content_vi: '$y_I = -1$.',
                  formula: 'y_I = f(x_I)',
                },
              ],
              conclusion_en: 'The vertex of the parabola is $I(2, -1)$.',
              conclusion_vi: 'Tọa độ đỉnh của parabol là $I(2, -1)$.',
            },
          ],
          status: 'PUBLISHED',
          language_level: 2,
        };

        const res = await apiFetch('/api/lessons', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newLesson),
        });

        await fetchInitialData();
        if (res.lesson) {
          setActiveLesson(res.lesson);
          setSelectedLessonId(res.lesson.id);
        }
        showNotification('🎉 Đã soạn thành công bài học song ngữ mới bằng AI!');
      } else {
        showNotification('Không thể tạo bài học lúc này: ' + (result.error || 'Vui lòng thử lại'));
      }
    } catch (e) {
      console.error(e);
      showNotification('Lỗi khi soạn bài học AI');
    } finally {
      setAiGenerating(false);
    }
  };

  // Filter lessons in left sidebar
  const filteredSidebarLessons = lessons.filter((les) => {
    if (!searchLessonQuery.trim()) return true;
    const q = searchLessonQuery.toLowerCase();
    return les.title_vi.toLowerCase().includes(q) || les.title_en.toLowerCase().includes(q);
  });

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-4 animate-pulse">
        <div className="h-12 bg-slate-200 rounded-2xl w-64" />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="h-96 bg-slate-200 rounded-3xl" />
          <div className="lg:col-span-3 h-96 bg-slate-200 rounded-3xl" />
        </div>
      </div>
    );
  }

  const currentFlash = lessonVocab[flashIndex] || lessonVocab[0];
  const currentPracticeQ = lessonQuestions[practiceIndex] || lessonQuestions[0];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 space-y-6 pb-28 md:pb-12">
      {/* Top Banner & AI Generator */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-teal-600" />
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Trung Tâm Bài Học Song Ngữ (Unified Lesson Hub)
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Toán {selectedGrade} KNTT • Chọn bài học bên trái để học đầy đủ Lý thuyết, Từ vựng, Mẫu câu, Đọc đề, Đồ thị, Minigame & Luyện tập.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* AI Generator Button */}
          <button
            onClick={handleAiGenerateLesson}
            disabled={aiGenerating}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition transform hover:scale-105 disabled:opacity-50 cursor-pointer"
          >
            {aiGenerating ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Sparkles className="w-3.5 h-3.5" />
            )}
            <span>{aiGenerating ? 'AI Đang Soạn...' : '✨ AI Soạn Thêm Bài Mới'}</span>
          </button>

          {/* Language Mode Selector */}
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setLanguageMode('VIETNAMESE')}
              className={`px-3 py-1.5 rounded-xl transition ${
                languageMode === 'VIETNAMESE' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600'
              }`}
            >
              🇻🇳 Tiếng Việt
            </button>
            <button
              onClick={() => setLanguageMode('BILINGUAL')}
              className={`px-3 py-1.5 rounded-xl transition ${
                languageMode === 'BILINGUAL' ? 'bg-teal-600 text-white shadow-2xs' : 'text-slate-600'
              }`}
            >
              🌐 Song Ngữ
            </button>
            <button
              onClick={() => setLanguageMode('ENGLISH')}
              className={`px-3 py-1.5 rounded-xl transition ${
                languageMode === 'ENGLISH' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600'
              }`}
            >
              🇬🇧 English
            </button>
          </div>
        </div>
      </div>

      {/* Main Split Layout: Left Lesson Sidebar + Right Comprehensive Lesson Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ========================================================= */}
        {/* LEFT COLUMN: LESSONS ACCORDION / TREE (3 cols) */}
        {/* ========================================================= */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-4">
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-4 sticky top-20">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-teal-600" />
                <span>Mục Lục SGK Toán {selectedGrade}</span>
              </span>
              <span className="text-[10px] font-bold bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-mono">
                {lessons.length} Bài
              </span>
            </div>

            {/* Quick Search in Sidebar */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchLessonQuery}
                onChange={(e) => setSearchLessonQuery(e.target.value)}
                placeholder="Tìm bài học..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
              />
            </div>

            {/* Lessons List by Chapter */}
            <div className="space-y-2 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
              {filteredSidebarLessons.map((les, idx) => {
                const isActive = activeLesson?.id === les.id;
                return (
                  <div
                    key={les.id}
                    onClick={() => {
                      setActiveLesson(les);
                      setSelectedLessonId(les.id);
                    }}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left space-y-1 relative group ${
                      isActive
                        ? 'bg-gradient-to-r from-teal-50 via-emerald-50/70 to-teal-50/30 border-teal-500 shadow-sm ring-1 ring-teal-500/20'
                        : 'bg-white border-slate-200/80 hover:border-teal-300 hover:bg-slate-50/80'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          isActive ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        Bài {idx + 1} • Lvl {les.language_level}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
                      )}
                    </div>

                    <h3
                      className={`text-xs font-extrabold line-clamp-1 ${
                        isActive ? 'text-teal-950 font-black' : 'text-slate-800'
                      }`}
                    >
                      {les.title_vi}
                    </h3>
                    <p
                      className={`text-[11px] line-clamp-1 ${
                        isActive ? 'text-teal-700 font-bold' : 'text-slate-400'
                      }`}
                    >
                      {les.title_en}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: ACTIVE LESSON COMPREHENSIVE HUB (9 cols) */}
        {/* ========================================================= */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-6">
          {activeLesson ? (
            <div className="space-y-6">
              {/* Active Lesson Hero Card */}
              <div className="bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#132338] text-white p-6 sm:p-7 rounded-3xl border border-slate-800 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] font-bold bg-teal-950/90 text-teal-300 px-2.5 py-0.5 rounded-full border border-teal-700/60">
                      Toán {selectedGrade} KNTT
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full font-bold">
                      Level {activeLesson.language_level} Bilingual
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                        {languageMode === 'ENGLISH' ? activeLesson.title_en : activeLesson.title_vi}
                      </h1>
                      {languageMode === 'BILINGUAL' && (
                        <p className="text-sm font-bold text-teal-300 mt-1">
                          {activeLesson.title_en}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => speakEnglishWord(activeLesson.title_en)}
                      className="p-2.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-teal-300 border border-slate-700 transition shrink-0 cursor-pointer shadow-md"
                      title="Nghe phát âm chuẩn tiêu đề bài học"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* 7 IN-LESSON TABS */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-bold scrollbar-none">
                  {[
                    { key: 'theory', label: '1. Lý Thuyết & Ví Dụ', icon: BookOpen },
                    { key: 'vocab', label: `2. Từ Vựng (${lessonVocab.length})`, icon: BookMarked },
                    { key: 'sentences', label: `3. Mẫu Câu (${lessonSentences.length})`, icon: MessageSquare },
                    { key: 'reading', label: '4. Đọc Đề', icon: FileText },
                    { key: 'grapher', label: '5. Đồ Thị f(x)', icon: Activity },
                    { key: 'minigame', label: '6. Minigame 60s', icon: Zap },
                    { key: 'practice', label: `7. Luyện Tập (${lessonQuestions.length})`, icon: CheckSquare },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isTabActive = activeSubTab === tab.key;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => setActiveSubTab(tab.key)}
                        className={`px-3 py-2 rounded-xl transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                          isTabActive
                            ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black shadow-md shadow-teal-500/20'
                            : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ========================================================= */}
              {/* TAB 1: LÝ THUYẾT & VÍ DỤ GIẢI TỪNG BƯỚC */}
              {/* ========================================================= */}
              {activeSubTab === 'theory' && (
                <div className="sc-card rounded-3xl p-6 sm:p-8 space-y-7">
                  {/* Objectives */}
                  {activeLesson.learning_objectives && activeLesson.learning_objectives.length > 0 && (
                    <div className="bg-teal-50/70 p-5 rounded-2xl border border-teal-200/80 space-y-2">
                      <h3 className="text-xs font-extrabold text-teal-900 uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                        Mục tiêu bài học (Learning Objectives):
                      </h3>
                      <ul className="space-y-1.5 text-xs text-teal-950 font-medium pl-6 list-disc">
                        {activeLesson.learning_objectives.map((obj, i) => (
                          <li key={i}>
                            <MathRenderer content={obj} inline />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Concepts */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-500" />
                      Khái niệm cốt lõi (Key Concepts)
                    </h3>

                    {(languageMode === 'VIETNAMESE' || languageMode === 'BILINGUAL') && (
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium">
                        <p className="font-bold text-slate-900 mb-1">🇻🇳 Tiếng Việt:</p>
                        <MathRenderer content={activeLesson.key_concepts_vi} />
                      </div>
                    )}

                    {(languageMode === 'ENGLISH' || languageMode === 'BILINGUAL') && (
                      <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 text-xs text-teal-950 leading-relaxed font-medium">
                        <p className="font-bold text-teal-900 mb-1">🇬🇧 English Math Concept:</p>
                        <MathRenderer content={activeLesson.key_concepts_en} />
                      </div>
                    )}
                  </div>

                  {/* Mathematical Formulas */}
                  {activeLesson.formulas && activeLesson.formulas.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                        Công thức toán học (Mathematical Formulas)
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {activeLesson.formulas.map((form, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-900 text-white p-4 rounded-2xl text-center flex items-center justify-center shadow-inner"
                          >
                            <MathRenderer content={form} inline className="text-base text-teal-300 font-bold" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Worked Examples */}
                  {activeLesson.worked_examples && activeLesson.worked_examples.length > 0 && (
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-teal-600" />
                        Ví dụ minh họa có lời giải (Worked Examples)
                      </h3>

                      {activeLesson.worked_examples.map((ex, idx) => (
                        <div key={idx} className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 shadow-2xs">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] uppercase font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                                {ex.title_vi || `Đề bài Ví dụ ${idx + 1}`}
                              </span>
                              <button
                                onClick={() => speakEnglishWord(ex.problem_en)}
                                className="p-1.5 rounded-xl bg-white border border-slate-200 text-teal-700 hover:bg-teal-50 transition cursor-pointer"
                                title="Nghe phát âm đề bài tiếng Anh"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="text-sm font-extrabold text-slate-900 leading-relaxed font-serif">
                              <MathRenderer content={ex.problem_en} />
                            </div>
                            <div className="text-xs text-slate-500 italic">
                              → <MathRenderer content={ex.problem_vi} inline />
                            </div>
                          </div>

                          {/* Step-by-step Solution */}
                          {ex.solution_steps && ex.solution_steps.length > 0 && (
                            <div className="space-y-2.5 pt-2">
                              <p className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">
                                Các bước giải chi tiết (Step-by-step Solution):
                              </p>
                              <div className="space-y-2">
                                {ex.solution_steps.map((step, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs space-y-1.5"
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="w-5 h-5 rounded-lg bg-teal-600 text-white font-bold text-[10px] flex items-center justify-center">
                                        {step.step_number || sIdx + 1}
                                      </span>
                                      <span className="font-extrabold text-slate-900 text-xs">
                                        {step.title_en}
                                      </span>
                                      <span className="text-[10px] text-slate-400">({step.title_vi})</span>
                                    </div>
                                    <div className="text-slate-700 pl-7 text-xs">
                                      <MathRenderer content={step.content_en} />
                                    </div>
                                    {step.formula && (
                                      <div className="ml-7 p-2 rounded-xl bg-slate-900 text-teal-300 font-mono text-center text-xs">
                                        <MathRenderer content={step.formula} inline />
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Conclusion */}
                          {(ex.conclusion_en || ex.conclusion_vi) && (
                            <div className="p-3.5 rounded-2xl bg-teal-50/80 border border-teal-200 text-xs text-teal-950 font-bold flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                              <span>{ex.conclusion_en || ex.conclusion_vi}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 2: TỪ VỰNG CỦA BÀI & FLASHCARDS */}
              {/* ========================================================= */}
              {activeSubTab === 'vocab' && (
                <div className="sc-card rounded-3xl p-6 sm:p-7 space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h2 className="text-base font-extrabold text-slate-900">
                        Thuật Ngữ Tiếng Anh Cho Bài Học Này
                      </h2>
                      <p className="text-xs text-slate-500">
                        {lessonVocab.length} từ vựng then chốt kèm phiên âm IPA & công thức
                      </p>
                    </div>

                    <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold">
                      <button
                        onClick={() => setVocabViewMode('cards')}
                        className={`px-3 py-1 rounded-lg transition ${
                          vocabViewMode === 'cards' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600'
                        }`}
                      >
                        Danh sách
                      </button>
                      <button
                        onClick={() => setVocabViewMode('flashcards')}
                        className={`px-3 py-1 rounded-lg transition ${
                          vocabViewMode === 'flashcards' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600'
                        }`}
                      >
                        Thẻ 3D Flashcards
                      </button>
                    </div>
                  </div>

                  {vocabViewMode === 'cards' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {lessonVocab.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-base font-black text-slate-900">{item.word}</h3>
                                <button
                                  onClick={() => speakEnglishWord(item.word)}
                                  className="p-1 rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <p className="text-xs font-mono text-teal-700 mt-0.5">{item.ipa}</p>
                            </div>
                            <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-md">
                              {item.meaning_vi}
                            </span>
                          </div>

                          {item.definition_en && (
                            <div className="text-xs text-slate-600">
                              <span className="font-semibold text-slate-800">Định nghĩa: </span>
                              <MathRenderer content={item.definition_en} inline />
                            </div>
                          )}

                          {item.example_en && (
                            <div className="text-xs bg-slate-50 p-2 rounded-xl border border-slate-100 space-y-0.5">
                              <div className="text-slate-800 font-medium italic">
                                "<MathRenderer content={item.example_en} inline />"
                              </div>
                              <div className="text-slate-500 text-[11px]">
                                → <MathRenderer content={item.example_vi} inline />
                              </div>
                            </div>
                          )}

                          {item.formula && (
                            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                              <span className="text-[10px] text-slate-400 font-bold uppercase">Công thức:</span>
                              <MathRenderer content={item.formula} inline className="font-bold text-teal-800" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : currentFlash ? (
                    <div className="max-w-md mx-auto space-y-4">
                      <div
                        onClick={() => setIsFlipped(!isFlipped)}
                        className="bg-white rounded-3xl p-8 border-2 border-teal-200 shadow-md min-h-[260px] flex flex-col justify-center items-center text-center cursor-pointer transition-all hover:scale-101 relative group"
                      >
                        <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                          Thẻ {flashIndex + 1} / {lessonVocab.length} (Bấm để lật)
                        </span>

                        {!isFlipped ? (
                          <div className="space-y-3">
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{currentFlash.word}</h2>
                            <p className="text-sm font-mono text-teal-600">{currentFlash.ipa}</p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                speakEnglishWord(currentFlash.word);
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold hover:bg-teal-200"
                            >
                              <Volume2 className="w-4 h-4" /> Nghe phát âm
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <span className="text-xs uppercase font-extrabold text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
                              Nghĩa tiếng Việt
                            </span>
                            <h2 className="text-xl font-extrabold text-slate-900">{currentFlash.meaning_vi}</h2>
                            <p className="text-xs text-slate-600 max-w-sm">{currentFlash.definition_en}</p>
                            {currentFlash.formula && (
                              <div className="pt-2">
                                <MathRenderer content={currentFlash.formula} inline className="text-base font-bold text-teal-800" />
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            setIsFlipped(false);
                            setFlashIndex((prev) => (prev > 0 ? prev - 1 : lessonVocab.length - 1));
                          }}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" /> Thẻ trước
                        </button>
                        <button
                          onClick={() => {
                            setIsFlipped(false);
                            setFlashIndex((prev) => (prev + 1) % lessonVocab.length);
                          }}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 shadow-md cursor-pointer"
                        >
                          Thẻ tiếp theo <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 3: MẪU CÂU CỦA BÀI */}
              {/* ========================================================= */}
              {activeSubTab === 'sentences' && (
                <div className="sc-card rounded-3xl p-6 sm:p-7 space-y-6">
                  <div>
                    <h2 className="text-base font-extrabold text-slate-900">
                      Mẫu Câu Diễn Đạt Toán Học Cho Bài Này
                    </h2>
                    <p className="text-xs text-slate-500">
                      Cấu trúc câu lệnh tiếng Anh chuẩn mực để viết lời giải và đọc đề bài
                    </p>
                  </div>

                  <div className="space-y-4">
                    {lessonSentences.map((sp) => (
                      <div
                        key={sp.id}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-sm sm:text-base font-black text-slate-900">
                                <MathRenderer content={sp.pattern_en} inline />
                              </h3>
                              <button
                                onClick={() => speakEnglishWord(sp.pattern_en)}
                                className="p-1 rounded-full bg-teal-100 text-teal-800 hover:bg-teal-200"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <p className="text-xs font-bold text-teal-800 mt-1">
                              → <MathRenderer content={sp.pattern_vi} inline />
                            </p>
                          </div>
                        </div>

                        {sp.usage_note && (
                          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                            <span className="font-bold">📌 Hướng dẫn sử dụng: </span>
                            {sp.usage_note}
                          </div>
                        )}

                        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1">
                          <div className="text-xs font-bold text-slate-800">
                            <MathRenderer content={sp.example_en} inline />
                          </div>
                          <div className="text-xs text-slate-500">
                            → <MathRenderer content={sp.example_vi} inline />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 4: ĐỌC HIỂU ĐỀ TOÁN (MATH READING) */}
              {/* ========================================================= */}
              {activeSubTab === 'reading' && (
                <div className="sc-card rounded-3xl p-6 sm:p-7 space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h2 className="text-base font-extrabold text-slate-900">
                        Phân Tích Cấu Trúc Đề Toán Tiếng Anh
                      </h2>
                      <p className="text-xs text-slate-500">
                        Bóc tách 3 bước: Given (Cho trước) $\to$ Required (Cần tìm) $\to$ Keyword (Từ khóa)
                      </p>
                    </div>

                    <button
                      onClick={() => setIsAiModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Trợ Lý AI Phân Tích 3 Bước</span>
                    </button>
                  </div>

                  {/* Problem Card */}
                  <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-3">
                    <span className="text-[10px] font-bold text-teal-400 bg-teal-950 px-2.5 py-0.5 rounded-md border border-teal-800">
                      Problem Statement
                    </span>
                    <div className="text-base sm:text-lg font-bold leading-relaxed">
                      <MathRenderer
                        content={
                          selectedGrade === 10
                            ? 'Find the coordinates of the vertex of the parabola $y = x^2 - 4x + 3$.'
                            : selectedGrade === 11
                            ? 'Find the derivative of the function $f(x) = x^3 - 3x + 2$ at the point $x_0 = 2$.'
                            : 'Evaluate the definite integral $\\int_0^1 (3x^2 + 2x) dx$.'
                        }
                        inline
                      />
                    </div>
                  </div>

                  {/* 3 Step Interactive Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="font-bold text-slate-900 uppercase">1. What is Given?</span>
                      <p className="text-slate-600 font-medium">Hàm số bậc hai với hệ số $a=1, b=-4, c=3$</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="font-bold text-slate-900 uppercase">2. What is Required?</span>
                      <p className="text-slate-600 font-medium">Tìm tọa độ đỉnh $I(x_I, y_I)$ của parabol</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="font-bold text-slate-900 uppercase">3. Core Keywords</span>
                      <p className="text-teal-700 font-bold">Coordinates, Vertex, Parabola</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 5: STUDIO ĐỒ THỊ f(x) */}
              {/* ========================================================= */}
              {activeSubTab === 'grapher' && (
                <div className="space-y-4">
                  <InteractiveFunctionGrapher />
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 6: MINIGAME GHÉP TỪ 60S */}
              {/* ========================================================= */}
              {activeSubTab === 'minigame' && (
                <div className="sc-card rounded-3xl p-6 sm:p-7 space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h2 className="text-base font-extrabold text-slate-900">
                        Speed Vocab Arena 60s
                      </h2>
                      <p className="text-xs text-slate-500">
                        Ghép đúng cặp từ vựng tiếng Anh - Việt của bài học để giành điểm Combo Streak
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-center font-mono">
                        <span className="text-[10px] text-slate-400 font-bold block">ĐIỂM</span>
                        <span className="text-lg font-black text-amber-500">{gameScore}</span>
                      </div>
                      <div className="text-center font-mono">
                        <span className="text-[10px] text-slate-400 font-bold block">THỜI GIAN</span>
                        <span className="text-lg font-black text-teal-600">{gameTimeLeft}s</span>
                      </div>
                    </div>
                  </div>

                  {!isGameRunning && !isGameFinished ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 rounded-3xl bg-amber-50 text-amber-500 flex items-center justify-center mx-auto text-3xl shadow-sm">
                        ⚡
                      </div>
                      <h3 className="text-lg font-black text-slate-900">Sẵn Sàng Thử Thách 60 Giây?</h3>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto">
                        Bộ thẻ gồm {gameCards.length / 2} cặp thuật ngữ thuộc bài học này. Bấm Bắt đầu để tính giờ!
                      </p>
                      <button
                        onClick={() => {
                          setIsGameRunning(true);
                          setGameTimeLeft(60);
                          setGameScore(0);
                          setMatchedIds([]);
                          setSelectedFirst(null);
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-xs rounded-2xl shadow-lg transition transform hover:scale-105 cursor-pointer"
                      >
                        Bắt Đầu Ghép Từ
                      </button>
                    </div>
                  ) : isGameFinished ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-3xl shadow-sm">
                        🏆
                      </div>
                      <h3 className="text-lg font-black text-slate-900">Hoàn Thành Thử Thách!</h3>
                      <p className="text-sm font-extrabold text-teal-700">Điểm số đạt được: {gameScore} pts</p>
                      <button
                        onClick={() => setupMinigameCards(lessonVocab)}
                        className="px-5 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 cursor-pointer"
                      >
                        Chơi Lại (Play Again)
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {gameCards.map((card) => {
                        const isMatched = matchedIds.includes(card.pairId);
                        const isSelected = selectedFirst?.id === card.id;
                        return (
                          <button
                            key={card.id}
                            disabled={isMatched}
                            onClick={() => handleCardClick(card)}
                            className={`p-4 rounded-2xl border text-xs font-bold transition-all min-h-[90px] flex flex-col justify-center items-center text-center cursor-pointer ${
                              isMatched
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-40 scale-95'
                                : isSelected
                                ? 'bg-teal-500 text-slate-950 font-black ring-4 ring-teal-500/30 scale-105 shadow-md'
                                : 'bg-white border-slate-200 text-slate-800 hover:border-teal-400 hover:bg-teal-50/30'
                            }`}
                          >
                            <span>{card.text}</span>
                            {card.ipa && (
                              <span className="text-[10px] font-mono text-slate-400 mt-1">{card.ipa}</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 7: LUYỆN TẬP & KIỂM TRA NHANH CỦA BÀI */}
              {/* ========================================================= */}
              {activeSubTab === 'practice' && (
                <div className="sc-card rounded-3xl p-6 sm:p-7 space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h2 className="text-base font-extrabold text-slate-900">
                        Luyện Tập Trắc Nghiệm Bài Học
                      </h2>
                      <p className="text-xs text-slate-500">
                        Câu {practiceIndex + 1} / {lessonQuestions.length} • Lớp {selectedGrade} • Trợ giúp Scaffolding
                      </p>
                    </div>

                    <button
                      onClick={() => setIsAiModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-extrabold text-xs rounded-xl shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>AI Giải Chi Tiết</span>
                    </button>
                  </div>

                  {currentPracticeQ ? (
                    <div className="space-y-5">
                      {/* Question text */}
                      <div className="space-y-2">
                        <div className="text-base font-bold text-slate-900 leading-relaxed">
                          <MathRenderer content={currentPracticeQ.question_en} inline />
                        </div>
                        {currentPracticeQ.question_vi && (
                          <p className="text-xs text-slate-500 italic">
                            Gợi ý dịch: "{currentPracticeQ.question_vi}"
                          </p>
                        )}
                      </div>

                      {/* Scaffolding Hint Buttons */}
                      <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2">
                        <button
                          onClick={() =>
                            setActiveHint(activeHint === 'vocab' ? null : 'vocab')
                          }
                          className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 ${
                            activeHint === 'vocab'
                              ? 'bg-teal-600 text-white'
                              : 'bg-teal-50 text-teal-800 border-teal-200'
                          }`}
                        >
                          <Lightbulb className="w-3.5 h-3.5" /> Từ Vựng (Vocab)
                        </button>
                        <button
                          onClick={() =>
                            setActiveHint(activeHint === 'formula' ? null : 'formula')
                          }
                          className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 ${
                            activeHint === 'formula'
                              ? 'bg-teal-600 text-white'
                              : 'bg-sky-50 text-sky-800 border-sky-200'
                          }`}
                        >
                          <FileText className="w-3.5 h-3.5" /> Công Thức (Formula)
                        </button>
                      </div>

                      {/* Active Hint Content */}
                      {activeHint === 'vocab' && currentPracticeQ.vocabulary_support && (
                        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                          <span className="font-bold">Từ vựng gợi ý:</span>
                          <ul className="list-disc pl-4 space-y-0.5">
                            {currentPracticeQ.vocabulary_support.map((v, i) => (
                              <li key={i}>
                                <span className="font-bold text-amber-900">{v.word}</span>: {v.meaning}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {activeHint === 'formula' && currentPracticeQ.formula_support && (
                        <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1">
                          <span className="font-bold">Công thức gợi ý:</span>
                          <div className="mt-1 font-mono text-teal-900 bg-white p-2 rounded-lg border border-teal-200">
                            {currentPracticeQ.formula_support.map((f, i) => (
                              <MathRenderer key={i} content={f} inline />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Options */}
                      {currentPracticeQ.options && (
                        <div className="space-y-2">
                          {currentPracticeQ.options.map((opt) => {
                            const isSelected = selectedPracticeOption === opt.option_key;
                            return (
                              <button
                                key={opt.option_key}
                                onClick={() => setSelectedPracticeOption(opt.option_key)}
                                className={`w-full p-3.5 rounded-2xl border text-left flex items-center gap-3 transition cursor-pointer ${
                                  isSelected
                                    ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-500/20 text-teal-950 font-bold'
                                    : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 font-medium'
                                }`}
                              >
                                <span className="w-6 h-6 rounded-lg bg-white border font-bold text-xs flex items-center justify-center">
                                  {opt.option_key}
                                </span>
                                <span className="text-xs sm:text-sm">
                                  <MathRenderer content={opt.content_en || opt.content_vi} inline />
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Navigation buttons */}
                      <div className="flex items-center justify-between pt-3 border-t">
                        <button
                          onClick={() => {
                            setPracticeIndex((prev) => Math.max(0, prev - 1));
                            setSelectedPracticeOption(null);
                            setActiveHint(null);
                          }}
                          disabled={practiceIndex === 0}
                          className="px-4 py-2 bg-slate-100 disabled:opacity-40 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
                        >
                          ← Câu trước
                        </button>
                        <button
                          onClick={() => {
                            if (selectedPracticeOption) {
                              showNotification(
                                selectedPracticeOption === currentPracticeQ.correct_option
                                  ? '🎉 Đáp án chính xác!'
                                  : '⚠️ Chưa đúng, hãy quan sát lại gợi ý công thức nhé!'
                              );
                            }
                            setPracticeIndex((prev) => (prev + 1) % lessonQuestions.length);
                            setSelectedPracticeOption(null);
                            setActiveHint(null);
                          }}
                          className="px-5 py-2.5 bg-teal-600 text-white font-extrabold text-xs rounded-xl hover:bg-teal-700 shadow-md cursor-pointer"
                        >
                          Câu tiếp theo →
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500">Chưa có câu hỏi luyện tập cho bài học này.</p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="sc-card rounded-3xl p-12 text-center text-slate-500">
              Vui lòng chọn một bài học trong mục lục bên trái.
            </div>
          )}
        </div>
      </div>

      {/* AI Step Solver Modal */}
      <AiStepSolverModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        defaultQuestionText={activeLesson?.title_en || ''}
      />
    </div>
  );
};
