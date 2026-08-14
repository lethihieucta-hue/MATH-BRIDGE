import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { Question, HintType, ErrorClassification } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { speakEnglishWord } from '../../lib/audio';
import {
  Sparkles,
  HelpCircle,
  Volume2,
  CheckCircle2,
  XCircle,
  Lightbulb,
  FileText,
  Bookmark,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

export const PracticeModule: React.FC = () => {
  const { user, selectedGrade, currentLevel, showNotification } = useAppStore();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [activeHint, setActiveHint] = useState<HintType | null>(null);
  const [hintCount, setHintCount] = useState(0);
  const [result, setResult] = useState<any>(null);

  // Diagnostic feedback state
  const [showDiagnostic, setShowDiagnostic] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions();
  }, [selectedGrade]);

  const fetchQuestions = () => {
    setLoading(true);
    fetch('/api/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching questions:', err);
        setLoading(false);
      });
  };

  const handleHintClick = (type: HintType) => {
    setActiveHint(activeHint === type ? null : type);
    setHintCount((prev) => prev + 1);

    const q = questions[currentIndex];
    if (q) {
      fetch('/api/hint-log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_id: user?.id || 'usr-student-1',
          question_id: q.id,
          hint_type: type,
        }),
      }).catch(console.error);
    }
  };

  const submitAnswer = async () => {
    if (!selectedOption) return;
    const currentQ = questions[currentIndex];

    try {
      const res = await fetch('/api/practice/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_id: user?.id || 'usr-student-1',
          question_id: currentQ.id,
          student_answer: selectedOption,
          response_time: 15,
          language_mode: 'BILINGUAL',
          hint_count: hintCount,
        }),
      });

      const data = await res.json();
      setResult(data);

      if (!data.is_correct) {
        setShowDiagnostic(true);
      }
    } catch (e) {
      console.error('Submit practice error:', e);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setResult(null);
    setActiveHint(null);
    setHintCount(0);
    setShowDiagnostic(false);
    setDiagnosticResult(null);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-4 animate-pulse">
        <div className="h-12 bg-slate-200 rounded-2xl w-64" />
        <div className="h-80 bg-slate-200 rounded-3xl" />
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-24 md:pb-12">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-teal-600" />
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Luyện Tập Tự Do (English Math Practice)
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Câu {currentIndex + 1} / {questions.length} • Lớp {selectedGrade} • Level {currentQ?.language_level || 2}
          </p>
        </div>

        <span className="text-xs font-bold bg-teal-100 text-teal-800 px-3 py-1.5 rounded-full border border-teal-200">
          {currentQ?.question_type || 'MCQ'}
        </span>
      </div>

      {currentQ && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
          {/* Question Text */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                Toán {selectedGrade} • Level {currentQ.language_level}
              </span>
              <button
                onClick={() => speakEnglishWord(currentQ.question_en)}
                className="p-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
                title="Nghe phát âm đề bài tiếng Anh"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              <MathRenderer content={currentQ.question_en} inline />
            </div>

            {currentQ.question_vi && (
              <p className="text-xs text-slate-500 font-medium">
                Gợi ý dịch: "{currentQ.question_vi}"
              </p>
            )}
          </div>

          {/* Scaffolding Hint Buttons */}
          <div className="pt-2 border-t border-slate-100">
            <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Trợ giúp Scaffolding (Hints):</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleHintClick('vocabulary')}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 ${
                  activeHint === 'vocabulary'
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-teal-50 text-teal-800 border-teal-200 hover:bg-teal-100'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5" /> Từ Vựng (Vocab Hint)
              </button>
              <button
                onClick={() => handleHintClick('formula')}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 ${
                  activeHint === 'formula'
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100'
                }`}
              >
                <FileText className="w-3.5 h-3.5" /> Công Thức (Formula Hint)
              </button>
              <button
                onClick={() => handleHintClick('translation')}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 ${
                  activeHint === 'translation'
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" /> Dịch Đề (Translation)
              </button>
            </div>

            {/* Active Hint Content Card */}
            {activeHint && (
              <div className="mt-3 p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-xs text-amber-950 space-y-2">
                {activeHint === 'vocabulary' && currentQ.vocabulary_support && (
                  <div>
                    <span className="font-bold">Từ vựng then chốt trong đề:</span>
                    <ul className="mt-1 list-disc pl-4 space-y-0.5">
                      {currentQ.vocabulary_support.map((v, i) => (
                        <li key={i}>
                          <span className="font-bold text-amber-900">{v.word}</span>: {v.meaning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeHint === 'formula' && currentQ.formula_support && (
                  <div>
                    <span className="font-bold">Công thức gợi ý:</span>
                    <div className="mt-1 font-mono text-teal-900 bg-white p-2 rounded-lg border border-amber-200">
                      {currentQ.formula_support.map((f, i) => (
                        <MathRenderer key={i} content={f} inline />
                      ))}
                    </div>
                  </div>
                )}

                {activeHint === 'translation' && (
                  <div>
                    <span className="font-bold">Dịch nghĩa đề bài:</span>
                    <p className="mt-0.5">{currentQ.question_vi}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Options */}
          {currentQ.options && (
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOption === opt.option_key;
                return (
                  <button
                    key={opt.option_key}
                    onClick={() => setSelectedOption(opt.option_key)}
                    disabled={!!result}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition ${
                      isSelected
                        ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-500/20 text-teal-950 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-white border font-bold text-xs flex items-center justify-center text-slate-700">
                        {opt.option_key}
                      </span>
                      <span className="text-xs sm:text-sm">
                        <MathRenderer content={opt.content_en || opt.content_vi} inline />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            {!result ? (
              <button
                onClick={submitAnswer}
                disabled={!selectedOption}
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-md transition"
              >
                Gửi Đáp Án (Submit)
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs rounded-xl shadow-md transition"
              >
                Câu tiếp theo <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Result Card */}
          {result && (
            <div
              className={`p-5 rounded-2xl border text-xs space-y-3 ${
                result.is_correct ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex items-center gap-2 font-extrabold text-sm">
                {result.is_correct ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Chính xác! (Correct)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>Chưa chính xác (Incorrect)</span>
                  </>
                )}
              </div>

              <div>
                <p className="font-bold">Hướng dẫn lời giải:</p>
                <div className="mt-1 leading-relaxed bg-white/80 p-3 rounded-xl border border-slate-200">
                  <MathRenderer content={result.question_solution} inline />
                </div>
              </div>
            </div>
          )}

          {/* Diagnostic Error Follow-up Question (Pedagogical requirement) */}
          {showDiagnostic && (
            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-3 text-xs text-indigo-950">
              <p className="font-bold flex items-center gap-1.5 text-indigo-900">
                <HelpCircle className="w-4 h-4 text-indigo-600" /> Phân tích chẩn đoán lỗi (Diagnostic Analysis):
              </p>
              <p className="text-slate-700">
                Bạn không trả lời đúng câu trên. Hãy cho biết lý do chính khiến bạn gặp khó khăn?
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setDiagnosticResult('LANGUAGE_ERROR');
                    showNotification('Đã ghi nhận: Cần bổ sung thêm từ vựng Toán tiếng Anh');
                    setShowDiagnostic(false);
                  }}
                  className="px-3 py-1.5 bg-white border border-indigo-200 rounded-xl font-bold hover:bg-indigo-100"
                >
                  Không hiểu từ vựng tiếng Anh trong đề bài (Language Error)
                </button>
                <button
                  onClick={() => {
                    setDiagnosticResult('MATH_ERROR');
                    showNotification('Đã ghi nhận: Hiểu thuật ngữ nhưng tính toán / áp dụng công thức nhầm');
                    setShowDiagnostic(false);
                  }}
                  className="px-3 py-1.5 bg-white border border-indigo-200 rounded-xl font-bold hover:bg-indigo-100"
                >
                  Hiểu đề nhưng nhầm công thức / tính toán sai (Math Error)
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
