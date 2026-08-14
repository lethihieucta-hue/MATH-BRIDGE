import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { VocabularyItem } from '../../types';
import { speakEnglishWord } from '../../lib/audio';
import { MathRenderer } from '../math/MathRenderer';
import { apiFetch } from '../../lib/dataService';
import {
  Volume2,
  Heart,
  CheckCircle2,
  Filter,
  Layers,
  Sparkles,
  BookMarked,
  RotateCcw,
  Check,
  X,
  Shuffle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const VocabularyModule: React.FC = () => {
  const { selectedGrade, currentLevel, showNotification } = useAppStore();
  const [vocabList, setVocabList] = useState<VocabularyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'cards' | 'flashcards' | 'quiz'>('cards');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [filterLevel, setFilterLevel] = useState<number>(0);

  // Flashcards state
  const [flashIndex, setFlashIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Quiz mode state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    fetchVocab();
  }, [selectedTopic, filterLevel]);

  const fetchVocab = async () => {
    setLoading(true);
    let url = '/api/vocabulary';
    const params = new URLSearchParams();
    if (selectedTopic) params.append('topic_id', selectedTopic);
    if (filterLevel > 0) params.append('level', filterLevel.toString());
    if (params.toString()) url += `?${params.toString()}`;

    try {
      const data = await apiFetch<VocabularyItem[]>(url);
      setVocabList(data || []);
    } catch (err) {
      console.error('Error fetching vocabulary:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (id: string) => {
    try {
      const data = await apiFetch(`/api/vocabulary/${id}/toggle-favorite`, { method: 'POST' });
      setVocabList((prev) =>
        prev.map((v) => (v.id === id ? { ...v, is_favorite: data.is_favorite } : v))
      );
      showNotification(data.is_favorite ? 'Đã thêm vào từ vựng yêu thích' : 'Đã bỏ yêu thích');
    } catch (e) {
      console.error(e);
    }
  };

  const toggleLearned = async (id: string) => {
    try {
      const data = await apiFetch(`/api/vocabulary/${id}/toggle-learned`, { method: 'POST' });
      setVocabList((prev) =>
        prev.map((v) => (v.id === id ? { ...v, is_learned: data.is_learned } : v))
      );
      showNotification(data.is_learned ? 'Đã đánh dấu đã thuộc!' : 'Đã bỏ đánh dấu');
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-6 animate-pulse">
        <div className="h-10 bg-slate-200 rounded-2xl w-48" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-48 bg-slate-200 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  const currentFlash = vocabList[flashIndex] || vocabList[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-24 md:pb-12">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <BookMarked className="w-6 h-6 text-teal-600" />
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Math Vocabulary (Thuật Ngữ Toán Học)
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Chủ đề Toán lớp {selectedGrade} • Học phát âm IPA, nghĩa tiếng Việt & công thức liên quan
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200/80 text-xs font-bold">
          <button
            onClick={() => setActiveTab('cards')}
            className={`px-3.5 py-1.5 rounded-xl transition ${
              activeTab === 'cards' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Danh sách ({vocabList.length})
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-3.5 py-1.5 rounded-xl transition ${
              activeTab === 'flashcards' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Flashcards
          </button>
          <button
            onClick={() => {
              setActiveTab('quiz');
              setQuizIndex(0);
              setQuizScore(0);
              setQuizFinished(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl transition ${
              activeTab === 'quiz' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Luyện Quiz
          </button>
        </div>
      </div>

      {/* Level & Topic Filters */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200/80 text-xs">
        <span className="font-bold text-slate-700 flex items-center gap-1 mr-2">
          <Filter className="w-3.5 h-3.5 text-teal-600" /> Bộ Lọc Level:
        </span>
        <button
          onClick={() => setFilterLevel(0)}
          className={`px-2.5 py-1 rounded-lg font-semibold transition ${
            filterLevel === 0 ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border'
          }`}
        >
          Tất cả
        </button>
        {[1, 2, 3, 4, 5].map((lvl) => (
          <button
            key={lvl}
            onClick={() => setFilterLevel(lvl)}
            className={`px-2.5 py-1 rounded-lg font-semibold transition ${
              filterLevel === lvl ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border'
            }`}
          >
            Level {lvl}
          </button>
        ))}
      </div>

      {/* TAB 1: CARD LIST VIEW */}
      {activeTab === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {vocabList.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-5 border shadow-2xs transition-all relative flex flex-col justify-between ${
                item.is_learned ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200/80 hover:border-teal-300'
              }`}
            >
              <div>
                {/* Top Row: Word & Actions */}
                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-black text-slate-900 tracking-tight">{item.word}</h3>
                      <button
                        onClick={() => speakEnglishWord(item.word)}
                        className="p-1.5 rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100 transition"
                        title="Nghe phát âm chuẩn en-US"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs font-mono text-teal-700 mt-0.5">{item.ipa}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className={`p-1.5 rounded-xl border transition ${
                        item.is_favorite ? 'bg-rose-50 text-rose-500 border-rose-200' : 'text-slate-400 hover:bg-slate-100'
                      }`}
                      title="Lưu từ vựng yêu thích"
                    >
                      <Heart className={`w-4 h-4 ${item.is_favorite ? 'fill-rose-500' : ''}`} />
                    </button>
                    <button
                      onClick={() => toggleLearned(item.id)}
                      className={`p-1.5 rounded-xl border transition ${
                        item.is_learned ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'text-slate-400 hover:bg-slate-100'
                      }`}
                      title="Đánh dấu thuộc từ vựng"
                    >
                      <CheckCircle2 className={`w-4 h-4 ${item.is_learned ? 'fill-emerald-500 text-white' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Vietnamese Meaning & Definition */}
                <div className="space-y-2">
                  <div className="bg-teal-50/70 p-2.5 rounded-xl border border-teal-100">
                    <p className="text-[10px] uppercase font-bold text-teal-800">Nghĩa tiếng Việt:</p>
                    <p className="text-sm font-extrabold text-teal-950">{item.meaning_vi}</p>
                  </div>

                  {item.definition_en && (
                    <div className="text-xs text-slate-600 leading-relaxed">
                      <span className="font-semibold text-slate-800">Định nghĩa Math: </span>
                      {item.definition_en}
                    </div>
                  )}

                  {item.example_en && (
                    <div className="text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1">
                      <p className="text-slate-800 font-medium italic">"{item.example_en}"</p>
                      <p className="text-slate-500 text-[11px]">→ {item.example_vi}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Related Formula */}
              {item.formula && (
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-500 text-[10px] uppercase">Công thức liên quan:</span>
                  <MathRenderer content={item.formula} inline className="font-bold text-teal-800" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: FLASHCARDS VIEW */}
      {activeTab === 'flashcards' && currentFlash && (
        <div className="max-w-xl mx-auto space-y-6">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="bg-white rounded-3xl p-8 border-2 border-teal-200 shadow-lg min-h-[300px] flex flex-col justify-center items-center text-center cursor-pointer transition-all hover:scale-101 relative group"
          >
            <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
              Thẻ {flashIndex + 1} / {vocabList.length} (Nhấn để lật)
            </span>

            {!isFlipped ? (
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-slate-900">{currentFlash.word}</h2>
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
              <div className="space-y-4">
                <span className="text-xs uppercase font-extrabold text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
                  Nghĩa tiếng Việt
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">{currentFlash.meaning_vi}</h2>
                <p className="text-xs text-slate-600 max-w-md">{currentFlash.definition_en}</p>
                {currentFlash.formula && (
                  <div className="pt-2">
                    <MathRenderer content={currentFlash.formula} inline className="text-lg font-bold text-teal-800" />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setIsFlipped(false);
                setFlashIndex((prev) => (prev > 0 ? prev - 1 : vocabList.length - 1));
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              <ChevronLeft className="w-4 h-4" /> Thẻ trước
            </button>
            <button
              onClick={() => {
                setIsFlipped(false);
                setFlashIndex((prev) => (prev + 1) % vocabList.length);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 shadow-md"
            >
              Thẻ tiếp theo <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: QUIZ MODE */}
      {activeTab === 'quiz' && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
          {!quizFinished ? (
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Câu hỏi {quizIndex + 1} / {vocabList.length}
                </span>
                <span className="text-xs font-extrabold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                  Điểm: {quizScore}
                </span>
              </div>

              {vocabList[quizIndex] && (
                <div className="space-y-6">
                  <div className="text-center bg-teal-50/60 p-6 rounded-2xl border border-teal-100">
                    <p className="text-xs font-bold text-teal-800 uppercase">Từ vựng tiếng Anh là gì?</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{vocabList[quizIndex].word}</h3>
                    <p className="text-xs text-teal-600 font-mono mt-1">{vocabList[quizIndex].ipa}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-700">Chọn nghĩa tiếng Việt đúng:</p>
                    {vocabList.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          const isCorrect = item.meaning_vi === vocabList[quizIndex].meaning_vi;
                          if (isCorrect) setQuizScore((prev) => prev + 10);
                          if (quizIndex + 1 < vocabList.length) {
                            setQuizIndex((prev) => prev + 1);
                          } else {
                            setQuizFinished(true);
                          }
                        }}
                        className="w-full text-left p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-teal-50 hover:border-teal-300 font-bold text-xs text-slate-800 transition"
                      >
                        {item.meaning_vi}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-black">
                🎉
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">Hoàn Thành Quiz Từ Vựng!</h2>
              <p className="text-sm text-slate-600">
                Bạn đã đạt <span className="font-extrabold text-teal-600">{quizScore} điểm</span>. Hãy duy trì chuỗi học tập hàng ngày nhé!
              </p>
              <button
                onClick={() => {
                  setQuizIndex(0);
                  setQuizScore(0);
                  setQuizFinished(false);
                }}
                className="px-6 py-2.5 bg-teal-600 text-white font-bold text-xs rounded-xl hover:bg-teal-700"
              >
                Làm lại Quiz
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
