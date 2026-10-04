import React, { useState } from "react";
import { Search, Volume2, BookOpen, Sparkles, Filter, RotateCw, Check, X, Award } from "lucide-react";
import { MATH_TERMS } from "../data/mathTerms";
import { MathTerm, LearningStage } from "../types";
import { MathRenderer, RichMathText } from "./MathRenderer";

export const VocabularyLexicon: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStage, setSelectedStage] = useState<string>("all");

  // Flashcard mode
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<string[]>([]);

  // Pronunciation
  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  };

  // Filtered terms
  const filteredTerms = MATH_TERMS.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.vietnamese.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definitionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definitionVi.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesStage = selectedStage === "all" || item.stageLevel.toString() === selectedStage;

    return matchesSearch && matchesCategory && matchesStage;
  });

  const activeCard: MathTerm | undefined = filteredTerms[currentCardIndex];

  const handleNextCard = (mastered: boolean) => {
    if (activeCard && mastered && !masteredIds.includes(activeCard.id)) {
      setMasteredIds([...masteredIds, activeCard.id]);
    }
    setIsFlipped(false);
    if (currentCardIndex < filteredTerms.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 border border-indigo-100 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Spaced Repetition & Dual-Coding Lexicon
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Từ điển Thuật ngữ Toán học Song ngữ Quốc tế
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Tổng hợp các thuật ngữ cốt lõi cho kỳ thi SAT, AP Calculus, AP Stats, A-Level và đại số nâng cao.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            id="toggle-flashcard-mode-btn"
            onClick={() => {
              setIsFlashcardMode(!isFlashcardMode);
              setIsFlipped(false);
              setCurrentCardIndex(0);
            }}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-lg ${
              isFlashcardMode
                ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200"
                : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200/80"
            }`}
          >
            <RotateCw className="w-4 h-4" />
            {isFlashcardMode ? "Xem danh sách từ" : "Chế độ Flashcard (Spaced Recall)"}
          </button>
        </div>
      </div>

      {/* FLASHCARD MODE */}
      {isFlashcardMode ? (
        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex justify-between items-center text-xs text-slate-500 px-2">
            <span>
              Thẻ: <strong className="text-slate-900 font-bold">{currentCardIndex + 1}</strong> / {filteredTerms.length}
            </span>
            <span className="flex items-center gap-1 text-emerald-600 font-bold">
              <Award className="w-4 h-4" /> Đã thuộc: {masteredIds.length} từ
            </span>
          </div>

          {activeCard ? (
            <div
              id="flashcard-box"
              onClick={() => setIsFlipped(!isFlipped)}
              className="bg-white border-2 border-indigo-200 rounded-3xl p-8 shadow-xl min-h-[320px] flex flex-col justify-between cursor-pointer transition-all hover:border-indigo-400 group relative overflow-hidden"
            >
              {/* Top info */}
              <div className="flex justify-between items-center text-xs">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-bold capitalize border border-indigo-100">
                  {activeCard.category}
                </span>
                <span className="text-slate-400 font-medium">
                  {isFlipped ? "Mặt sau (Định nghĩa & Bẫy)" : "Mặt trước (Chạm để lật 🔄)"}
                </span>
              </div>

              {/* Main Content */}
              {!isFlipped ? (
                <div className="text-center py-6 space-y-3">
                  <div className="text-3xl font-black text-slate-900 tracking-tight capitalize">
                    {activeCard.term}
                  </div>
                  {activeCard.phonetic && (
                    <div className="text-sm font-mono text-slate-500 flex items-center justify-center gap-1.5">
                      <span>{activeCard.phonetic}</span>
                      <button
                        type="button"
                        id="flashcard-speak-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          speak(activeCard.term);
                        }}
                        className="p-1 rounded-full text-indigo-600 hover:bg-indigo-50 cursor-pointer"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {activeCard.mathSymbol && (
                    <div className="inline-block bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-slate-800 font-mono text-sm shadow-xs">
                      <MathRenderer math={activeCard.mathSymbol} />
                    </div>
                  )}
                  <p className="text-xs text-indigo-600 font-bold">
                    Nhấp vào thẻ để xem nghĩa tiếng Việt và bẫy đề thi
                  </p>
                </div>
              ) : (
                <div className="py-2 space-y-3 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-center pb-2 border-b border-slate-100">
                    <span className="text-lg font-bold text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-xl border border-emerald-200 shadow-xs">
                      🇻🇳 {activeCard.vietnamese}
                    </span>
                  </div>

                  <div className="text-xs space-y-2 text-slate-700">
                    <div>
                      <span className="font-bold text-slate-900">Định nghĩa:</span>
                      <p className="text-slate-600 mt-0.5">{activeCard.definitionVi}</p>
                    </div>
                    {activeCard.falseFriendPitfall && (
                      <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-900 text-[11px] shadow-xs">
                        <strong className="block text-amber-800 font-bold mb-0.5">⚠️ Bẫy thường gặp:</strong>
                        {activeCard.falseFriendPitfall}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  id="btn-flashcard-again"
                  onClick={() => handleNextCard(false)}
                  className="flex-1 py-2.5 rounded-xl border border-rose-200 text-rose-700 font-bold text-xs hover:bg-rose-50 flex items-center justify-center gap-1 cursor-pointer transition-all"
                >
                  <X className="w-4 h-4" /> Chưa thuộc
                </button>
                <button
                  type="button"
                  id="btn-flashcard-mastered"
                  onClick={() => handleNextCard(true)}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md shadow-emerald-600/20 cursor-pointer transition-all"
                >
                  <Check className="w-4 h-4" /> Đã thuộc (+10 XP)
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center p-8 bg-white rounded-2xl border border-slate-200">
              Không có từ vựng nào khớp với bộ lọc.
            </div>
          )}
        </div>
      ) : (
        /* LIST / GRID VIEW */
        <div className="space-y-4">
          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="search-terms-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm từ vựng, thuật ngữ..."
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs"
              />
            </div>

            {/* Category & Stage Filters */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
              <select
                id="filter-category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs border border-slate-200 rounded-xl px-3 py-2 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-xs"
              >
                <option value="all">Tất cả chủ đề</option>
                <option value="instructional">Động từ chỉ lệnh (Instructional)</option>
                <option value="word_problems">Bẫy đề toán (Word Problems)</option>
                <option value="algebra">Đại số (Algebra)</option>
                <option value="geometry">Hình học (Geometry)</option>
                <option value="calculus">Giải tích (Calculus AP)</option>
                <option value="stats">Xác suất Thống kê (Stats)</option>
              </select>

              <select
                id="filter-stage-select"
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="text-xs border border-slate-200 rounded-xl px-3 py-2 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-xs"
              >
                <option value="all">Tất cả Stage (1 - 6)</option>
                <option value="1">Stage 1 - General Foundation</option>
                <option value="2">Stage 2 - Basic Academic</option>
                <option value="3">Stage 3 - Terminology</option>
                <option value="4">Stage 4 - Bilingual Math</option>
                <option value="5">Stage 5 - Scaffolded</option>
                <option value="6">Stage 6 - Immersion</option>
              </select>
            </div>
          </div>

          {/* Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTerms.map((t) => (
              <div
                key={t.id}
                id={`card-term-${t.id}`}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all space-y-3 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-900 text-base capitalize">
                          {t.term}
                        </span>
                        <button
                          type="button"
                          onClick={() => speak(t.term)}
                          className="p-1 rounded-md text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
                          title="Phát âm"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      {t.phonetic && (
                        <span className="text-[11px] text-slate-400 font-mono">
                          {t.phonetic}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full">
                      Stage {t.stageLevel}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 shadow-xs">
                    🇻🇳 {t.vietnamese}
                  </div>

                  {t.mathSymbol && (
                    <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-center font-mono text-xs text-slate-800 shadow-xs">
                      <MathRenderer math={t.mathSymbol} />
                    </div>
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.definitionVi}
                  </p>

                  {t.falseFriendPitfall && (
                    <div className="bg-amber-50/90 border-l-4 border-amber-500 border border-amber-200 rounded-xl p-2.5 text-[11px] text-amber-950 shadow-xs">
                      <strong className="block text-amber-800 font-bold mb-0.5">⚠️ Lưu ý bẫy đề thi:</strong>
                      {t.falseFriendPitfall}
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 text-[11px] text-indigo-950 bg-indigo-50/60 p-2.5 rounded-xl border border-indigo-100/60">
                  <span className="font-bold block text-indigo-900 mb-0.5">Ví dụ đề thi:</span>
                  <RichMathText text={t.exampleSentenceEn} />
                </div>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs">
              Không tìm thấy từ vựng nào khớp với từ khóa tìm kiếm.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
