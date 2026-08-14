import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { Test, Question } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { TestResultView } from './TestResultView';
import { speakEnglishWord } from '../../lib/audio';
import { apiFetch } from '../../lib/dataService';
import { GraduationCap, Clock, AlertCircle, CheckCircle2, PlayCircle, Volume2, ArrowRight } from 'lucide-react';

export const TestModule: React.FC = () => {
  const { user, selectedGrade } = useAppStore();
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);

  // Active taking test state
  const [activeTest, setActiveTest] = useState<Test | null>(null);
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [studentAnswers, setStudentAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60); // 15 mins in seconds
  const [completedAttempt, setCompletedAttempt] = useState<any | null>(null);

  useEffect(() => {
    fetchTests();
  }, []);

  useEffect(() => {
    if (!activeTest || completedAttempt) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [activeTest, completedAttempt]);

  const fetchTests = async () => {
    setLoading(true);
    try {
      const data = await apiFetch<Test[]>('/api/tests');
      setTests(data || []);
    } catch (err) {
      console.error('Error fetching tests:', err);
    } finally {
      setLoading(false);
    }
  };

  const startTest = async (testId: string) => {
    try {
      const allQ = await apiFetch<Question[]>('/api/questions');
      const targetTest = tests.find((t) => t.id === testId) || tests[0];
      const matchedQ = (allQ || []).filter((q) => targetTest.question_ids.includes(q.id));
      const questionsToUse = matchedQ.length > 0 ? matchedQ : (allQ || []).slice(0, 3);

      setActiveTest(targetTest);
      setTestQuestions(questionsToUse);
      setCurrentQIndex(0);
      setStudentAnswers({});
      setTimeLeft((targetTest.duration_minutes || 15) * 60);
      setCompletedAttempt(null);
    } catch (e) {
      console.error('Start test error:', e);
    }
  };

  const submitTest = async () => {
    if (!activeTest) return;

    let correctCount = 0;
    const answersPayload = testQuestions.map((q) => {
      const isCorrect = (studentAnswers[q.id] || '').toUpperCase() === (q.correct_answer || '').toUpperCase();
      if (isCorrect) correctCount++;
      return {
        question_id: q.id,
        student_answer: studentAnswers[q.id] || '',
        is_correct: isCorrect,
        points: isCorrect ? 10 : 0,
        hint_count: 0,
      };
    });

    const finalScore = Math.round((correctCount / (testQuestions.length || 1)) * 100);

    const attempt = {
      id: `ta-${Date.now()}`,
      test_id: activeTest.id,
      student_id: user?.id || 'usr-student-1',
      score: finalScore,
      math_score: finalScore,
      english_math_score: Math.round(finalScore * (activeTest.english_ratio / 100)),
      status: 'COMPLETED',
      answers: answersPayload,
    };

    setCompletedAttempt(attempt);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-4 animate-pulse">
        <div className="h-12 bg-slate-200 rounded-2xl w-64" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-44 bg-slate-200 rounded-3xl" />
          ))}
        </div>
      </div>
    );
  }

  // Render Result View if finished
  if (completedAttempt && activeTest) {
    return (
      <TestResultView
        attempt={completedAttempt}
        test={activeTest}
        questions={testQuestions}
        onRetake={() => startTest(activeTest.id)}
        onGoBack={() => {
          setActiveTest(null);
          setCompletedAttempt(null);
          fetchTests();
        }}
      />
    );
  }

  // Render Active Test Taking View
  if (activeTest) {
    const currentQ = testQuestions[currentQIndex];
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-24 md:pb-12">
        {/* Test Header & Timer */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2.5 py-1 rounded-full uppercase">
              Đang làm bài kiểm tra
            </span>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">{activeTest.title}</h1>
            <p className="text-xs text-slate-500">Tỷ lệ tiếng Anh: {activeTest.english_ratio}%</p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-2xl font-mono text-sm font-bold shadow-md">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Question Item */}
        {currentQ && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-xs font-bold text-slate-500">
                Câu hỏi {currentQIndex + 1} / {testQuestions.length}
              </span>
              <button
                onClick={() => speakEnglishWord(currentQ.question_en)}
                className="p-1 text-slate-500 hover:text-teal-700"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              <MathRenderer content={currentQ.question_en} inline />
            </div>

            {/* Options */}
            {currentQ.options && (
              <div className="space-y-2.5">
                {currentQ.options.map((opt) => {
                  const isSelected = studentAnswers[currentQ.id] === opt.option_key;
                  return (
                    <button
                      key={opt.option_key}
                      onClick={() =>
                        setStudentAnswers((prev) => ({ ...prev, [currentQ.id]: opt.option_key }))
                      }
                      className={`w-full p-4 rounded-2xl border text-left flex items-center gap-3 transition ${
                        isSelected
                          ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-500/20 font-bold text-teal-950'
                          : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 font-medium'
                      }`}
                    >
                      <span className="w-7 h-7 rounded-xl bg-white border font-bold text-xs flex items-center justify-center text-slate-700">
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

            {/* Test Controls */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setCurrentQIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentQIndex === 0}
                className="px-4 py-2 bg-slate-100 disabled:opacity-40 text-slate-700 font-bold text-xs rounded-xl"
              >
                Câu trước
              </button>

              {currentQIndex + 1 < testQuestions.length ? (
                <button
                  onClick={() => setCurrentQIndex((prev) => prev + 1)}
                  className="px-5 py-2.5 bg-teal-600 text-white font-extrabold text-xs rounded-xl hover:bg-teal-700 shadow-md"
                >
                  Câu tiếp theo
                </button>
              ) : (
                <button
                  onClick={submitTest}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-extrabold text-xs rounded-xl hover:bg-emerald-700 shadow-md"
                >
                  Nộp bài (Submit Test)
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Render Available Test List
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-24 md:pb-12">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Bài Kiểm Tra Toán Tiếng Anh (English Math Tests)
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Mini Test • Topic Test • Tỷ lệ tiếng Anh linh hoạt 10% – 100%
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tests.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-4 hover:border-teal-300 transition group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                  Tỷ lệ {t.english_ratio}% Anh
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {t.duration_minutes} phút
                </span>
              </div>

              <h2 className="text-base font-extrabold text-slate-900 group-hover:text-teal-900">
                {t.title}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">{t.description}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">Giáo viên: {t.teacher_name || 'Cô Lê Thị Mai'}</span>
              <button
                onClick={() => startTest(t.id)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md shadow-teal-600/20 transition"
              >
                <span>Bắt đầu làm</span>
                <PlayCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
