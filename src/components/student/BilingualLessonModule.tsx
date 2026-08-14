import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { Lesson, LanguageMode } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { speakEnglishWord } from '../../lib/audio';
import {
  BookOpen,
  Globe2,
  CheckCircle2,
  Volume2,
  Sparkles,
  HelpCircle,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

export const BilingualLessonModule: React.FC = () => {
  const { selectedGrade, languageMode, setLanguageMode } = useAppStore();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    fetch('/api/lessons')
      .then((res) => res.json())
      .then((data) => {
        setLessons(data || []);
        if (data && data.length > 0) setActiveLesson(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching lessons:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-4 animate-pulse">
        <div className="h-12 bg-slate-200 rounded-2xl w-64" />
        <div className="h-96 bg-slate-200 rounded-3xl" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-24 md:pb-12">
      {/* Header & Language Mode Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-teal-600" />
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Bài Học Song Ngữ (Bilingual Lessons)
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Toán {selectedGrade} • Chuyển đổi linh hoạt chế độ ngôn ngữ (Vietnamese / Bilingual / English)
          </p>
        </div>

        {/* Language Mode Toggle */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setLanguageMode('VIETNAMESE')}
            className={`px-3 py-1.5 rounded-xl transition ${
              languageMode === 'VIETNAMESE' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600'
            }`}
          >
            Tiếng Việt
          </button>
          <button
            onClick={() => setLanguageMode('BILINGUAL')}
            className={`px-3 py-1.5 rounded-xl transition ${
              languageMode === 'BILINGUAL' ? 'bg-teal-600 text-white shadow-2xs' : 'text-slate-600'
            }`}
          >
            🇻🇳 🇬🇧 Song Ngữ
          </button>
          <button
            onClick={() => setLanguageMode('ENGLISH')}
            className={`px-3 py-1.5 rounded-xl transition ${
              languageMode === 'ENGLISH' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600'
            }`}
          >
            English
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Lesson Navigation List */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            Danh Sách Bài Học ({lessons.length})
          </h2>
          <div className="space-y-2">
            {lessons.map((les) => {
              const isActive = activeLesson?.id === les.id;
              return (
                <div
                  key={les.id}
                  onClick={() => setActiveLesson(les)}
                  className={`p-4 rounded-2xl border transition cursor-pointer ${
                    isActive
                      ? 'bg-teal-50 border-teal-300 shadow-2xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-md">
                    Level {les.language_level}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 mt-2">
                    {languageMode === 'ENGLISH' ? les.title_en : les.title_vi}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {languageMode === 'ENGLISH' ? les.title_vi : les.title_en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Active Lesson Body */}
        {activeLesson && (
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-8">
              {/* Lesson Title Header */}
              <div className="border-b border-slate-100 pb-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-teal-800 bg-teal-100 px-3 py-1 rounded-full">
                    Toán {selectedGrade} • Level {activeLesson.language_level}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    Chế độ: {languageMode}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {languageMode === 'ENGLISH'
                    ? activeLesson.title_en
                    : activeLesson.title_vi}
                </h1>
                {languageMode === 'BILINGUAL' && (
                  <p className="text-sm font-bold text-teal-700">{activeLesson.title_en}</p>
                )}
              </div>

              {/* Objectives */}
              {activeLesson.learning_objectives && activeLesson.learning_objectives.length > 0 && (
                <div className="bg-teal-50/70 p-5 rounded-2xl border border-teal-200/80 space-y-2">
                  <h3 className="text-xs font-extrabold text-teal-900 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    Mục tiêu bài học (Learning Objectives):
                  </h3>
                  <ul className="space-y-1 text-xs text-teal-950 font-medium pl-6 list-disc">
                    {activeLesson.learning_objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
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
                    {activeLesson.key_concepts_vi}
                  </div>
                )}

                {(languageMode === 'ENGLISH' || languageMode === 'BILINGUAL') && (
                  <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 text-xs text-teal-950 leading-relaxed font-medium">
                    <p className="font-bold text-teal-900 mb-1">🇬🇧 English Math Concept:</p>
                    {activeLesson.key_concepts_en}
                  </div>
                )}
              </div>

              {/* Formulas */}
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
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                      {/* Problem Statement */}
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                          Đề bài Ví dụ {idx + 1}
                        </span>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed mt-2">
                          <MathRenderer content={ex.problem_en} inline />
                        </div>
                        <p className="text-xs text-slate-500">→ {ex.problem_vi}</p>
                      </div>

                      {/* Key steps */}
                      {ex.key_steps && (
                        <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Các bước giải chính (Key Steps):</p>
                          <div className="flex flex-wrap gap-2">
                            {ex.key_steps.map((step, sIdx) => (
                              <span key={sIdx} className="text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200 px-2.5 py-1 rounded-lg">
                                {sIdx + 1}. {step}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Solution */}
                      <div className="space-y-2 pt-2 border-t border-slate-200/80">
                        <p className="text-xs font-bold text-teal-800 uppercase">Lời giải mẫu (Sample Solution):</p>
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 leading-relaxed">
                          <MathRenderer content={ex.solution_en} inline />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
