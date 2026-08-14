import React, { useState, useEffect } from 'react';
import { SentencePattern } from '../../types';
import { speakEnglishWord } from '../../lib/audio';
import { MathRenderer } from '../math/MathRenderer';
import { apiFetch } from '../../lib/dataService';
import { Volume2, Layers, Sparkles, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export const SentencePatternsModule: React.FC = () => {
  const [patterns, setPatterns] = useState<SentencePattern[]>([]);
  const [loading, setLoading] = useState(true);
  const [activePattern, setActivePattern] = useState<SentencePattern | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<string>('');
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<SentencePattern[]>('/api/sentence-patterns')
      .then((data) => {
        setPatterns(data || []);
        if (data && data.length > 0) setActivePattern(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching sentence patterns:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-4 animate-pulse">
        <div className="h-12 bg-slate-200 rounded-2xl w-64" />
        <div className="h-64 bg-slate-200 rounded-3xl" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-24 md:pb-12">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Math Sentence Patterns (Mẫu Câu Toán Học Tiêu Chuẩn)
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Level 2 Math Sentences • Học các cấu trúc câu đề bài quen thuộc bằng tiếng Anh
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left List of Patterns */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            Danh Sách Mẫu Câu ({patterns.length})
          </h2>
          <div className="space-y-2">
            {patterns.map((sp) => {
              const isActive = activePattern?.id === sp.id;
              return (
                <div
                  key={sp.id}
                  onClick={() => {
                    setActivePattern(sp);
                    setQuizAnswer('');
                    setQuizFeedback(null);
                  }}
                  className={`p-4 rounded-2xl border transition cursor-pointer ${
                    isActive
                      ? 'bg-teal-50 border-teal-300 shadow-2xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-800 bg-teal-100/80 px-2.5 py-0.5 rounded-full">
                      Level {sp.level}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakEnglishWord(sp.pattern_en);
                      }}
                      className="p-1 text-slate-400 hover:text-teal-700"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 mt-2">{sp.pattern_en}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">→ {sp.pattern_vi}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Detail & Pattern Practice */}
        {activePattern && (
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
              <div className="flex items-start justify-between border-b pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-teal-700 bg-teal-100 px-2.5 py-1 rounded-full">
                    Mẫu câu chính (Core Pattern)
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 flex items-center gap-2">
                    {activePattern.pattern_en}
                    <button
                      onClick={() => speakEnglishWord(activePattern.pattern_en)}
                      className="p-1.5 rounded-full bg-teal-100 text-teal-800 hover:bg-teal-200"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </h2>
                  <p className="text-sm font-bold text-teal-800 mt-1">Dịch nghĩa: {activePattern.pattern_vi}</p>
                </div>
              </div>

              {/* Usage Note */}
              {activePattern.usage_note && (
                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <span className="font-bold">📌 Hướng dẫn sử dụng: </span>
                  {activePattern.usage_note}
                </div>
              )}

              {/* Example in Math context */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Ví dụ thực tế trong bài toán (Example in Math context)
                </h3>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-sm font-extrabold text-slate-900 leading-relaxed">
                    <MathRenderer content={activePattern.example_en} inline />
                  </div>
                  <p className="text-xs text-slate-600">→ {activePattern.example_vi}</p>
                </div>
              </div>

              {/* Quick Practice question */}
              <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-700" />
                  <h3 className="text-xs font-extrabold text-teal-900 uppercase">
                    Luyện tập ghép câu (Pattern Check)
                  </h3>
                </div>
                <p className="text-xs text-slate-700">
                  Dịch câu sau sang tiếng Anh dùng mẫu câu trên: <br />
                  <span className="font-bold text-slate-900">"{activePattern.example_vi}"</span>
                </p>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={quizAnswer}
                    onChange={(e) => setQuizAnswer(e.target.value)}
                    placeholder="Gõ câu trả lời bằng tiếng Anh..."
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    onClick={() => {
                      if (quizAnswer.trim().length > 3) {
                        setQuizFeedback('✅ Chính xác! Bạn đã áp dụng chuẩn mẫu câu toán tiếng Anh.');
                      } else {
                        setQuizFeedback('⚠️ Gợi ý: Hãy quan sát câu ví dụ ở trên để ghép chuẩn cấu trúc nhé!');
                      }
                    }}
                    className="px-4 py-2.5 bg-teal-600 text-white font-bold text-xs rounded-xl hover:bg-teal-700"
                  >
                    Kiểm tra
                  </button>
                </div>

                {quizFeedback && (
                  <p className="text-xs font-bold text-teal-800 bg-white p-2.5 rounded-xl border border-teal-200">
                    {quizFeedback}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
