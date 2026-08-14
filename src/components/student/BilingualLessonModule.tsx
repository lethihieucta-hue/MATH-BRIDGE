import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { Lesson, LanguageMode } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { speakEnglishWord } from '../../lib/audio';
import { apiFetch } from '../../lib/dataService';
import { generateBilingualVocabLessonAi, hasApiKey } from '../../lib/geminiService';
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
} from 'lucide-react';

export const BilingualLessonModule: React.FC = () => {
  const { selectedGrade, languageMode, setLanguageMode, showNotification } = useAppStore();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [aiGenerating, setAiGenerating] = useState(false);

  useEffect(() => {
    fetchLessons();
  }, [selectedGrade]);

  const fetchLessons = async () => {
    setLoading(true);
    try {
      const data = await apiFetch<Lesson[]>('/api/lessons');
      const all = data || [];
      const filtered = all.filter(
        (l) =>
          l.topic_id?.includes(`top-${selectedGrade}`) ||
          l.id?.includes(`-${selectedGrade}-`) ||
          l.id?.includes(`les-${selectedGrade}`)
      );
      const toShow = filtered.length > 0 ? filtered : all;
      setLessons(toShow);
      if (toShow.length > 0) setActiveLesson(toShow[0]);
    } catch (err) {
      console.error('Error fetching lessons:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAiGenerateLesson = async () => {
    if (!hasApiKey()) {
      showNotification('Vui lòng thiết lập Gemini API Key trên Header để sinh bài học AI!');
      return;
    }

    setAiGenerating(true);
    showNotification('✨ AI Gemini đang soạn bài học song ngữ mới...');

    try {
      const topicTitle = selectedGrade === 10 ? 'Bất phương trình & Hệ thức lượng' : selectedGrade === 11 ? 'Hàm số lượng giác & Giới hạn' : 'Hàm số mũ & Số phức';
      const result = await generateBilingualVocabLessonAi(topicTitle, selectedGrade, 'FULL_LESSON');

      if (result.success && result.data) {
        const newLesson: Partial<Lesson> = {
          title_vi: result.data.title_vi || `Bài Học AI: ${topicTitle} (Lớp ${selectedGrade})`,
          title_en: result.data.title_en || `AI Lesson: ${topicTitle} (Grade ${selectedGrade})`,
          topic_id: `top-${selectedGrade}-1-1`,
          learning_objectives: result.data.learning_objectives || [
            'Nắm vững định nghĩa và thuật ngữ toán học tiếng Anh',
            'Vận dụng công thức giải bài tập toán THPT',
          ],
          key_concepts_vi: result.data.key_concepts_vi || 'Khái niệm toán học được hệ thống hóa rõ ràng theo chuẩn GDPT 2018.',
          key_concepts_en: result.data.key_concepts_en || 'Mathematical concepts structured clearly for bilingual comprehension.',
          formulas: result.data.formulas || [
            '\\sin^2 x + \\cos^2 x = 1',
            'e^{\\ln x} = x \\quad (x > 0)',
            'a^2 = b^2 + c^2 - 2bc \\cos A',
          ],
          worked_examples: result.data.worked_examples || [
            {
              id: `we-${Date.now()}`,
              title_vi: 'Ví dụ Minh Họa Tự Động',
              title_en: 'AI Worked Example',
              problem_vi: 'Giải phương trình $\\sin x = \\frac{1}{2}$ trên đoạn $[0, 2\\pi]$.',
              problem_en: 'Solve the equation $\\sin x = \\frac{1}{2}$ on the interval $[0, 2\\pi]$.',
              solution_en: 'The solutions are $x = \\frac{\\pi}{6}$ and $x = \\frac{5\\pi}{6}$.',
              solution_vi: 'Nghiệm của phương trình là $x = \\frac{\\pi}{6}$ và $x = \\frac{5\\pi}{6}$.',
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

        await fetchLessons();
        if (res.lesson) setActiveLesson(res.lesson);
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
            Toán {selectedGrade} • Chuyển đổi linh hoạt chế độ ngôn ngữ (Vietnamese / Bilingual / English) • {lessons.length} bài học
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* AI Generator Button */}
          <button
            onClick={handleAiGenerateLesson}
            disabled={aiGenerating}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition transform hover:scale-105 disabled:opacity-50"
          >
            {aiGenerating ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Sparkles className="w-3.5 h-3.5" />
            )}
            <span>{aiGenerating ? 'AI Đang Soạn...' : '✨ AI Soạn Bài Học Mới'}</span>
          </button>

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
                    <div key={idx} className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 shadow-2xs">
                      {/* Problem Statement */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                            {ex.title_vi || `Đề bài Ví dụ ${idx + 1}`}
                          </span>
                          <button
                            onClick={() => speakEnglishWord(ex.problem_en)}
                            className="p-1.5 rounded-xl bg-white border border-slate-200 text-teal-700 hover:bg-teal-50 transition"
                            title="Nghe phát âm đề bài tiếng Anh"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-sm font-extrabold text-slate-900 leading-relaxed font-serif">
                          <MathRenderer content={ex.problem_en} />
                        </div>
                        <p className="text-xs text-slate-500 italic">→ {ex.problem_vi}</p>
                      </div>

                      {/* Step-by-step Solution Cards if available */}
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

                      {/* Full Solution Fallback */}
                      {ex.solution_en && (!ex.solution_steps || ex.solution_steps.length === 0) && (
                        <div className="space-y-2 pt-2 border-t border-slate-200/80">
                          <p className="text-xs font-bold text-teal-800 uppercase">Lời giải mẫu (Sample Solution):</p>
                          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-800 leading-relaxed font-serif">
                            <MathRenderer content={ex.solution_en} />
                          </div>
                        </div>
                      )}

                      {/* Conclusion Banner */}
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
          </div>
        )}
      </div>
    </div>
  );
};
