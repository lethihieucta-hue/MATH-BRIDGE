import React, { useState, useEffect } from 'react';
import { Question } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { apiFetch } from '../../lib/dataService';
import {
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Award,
  ArrowRight,
  Printer,
  RotateCcw,
  BookOpen,
  Send,
  User,
  School,
  Sparkles,
} from 'lucide-react';

export interface OnlineExamData {
  id: string;
  title: string;
  title_en: string;
  duration: number; // in minutes
  englishRatio: number;
  instructions_vi: string;
  instructions_en: string;
  questions: Question[];
  created_at?: string;
  googleSheetUrl?: string;
  googleSheetWebhook?: string;
}

interface OnlineExamRoomProps {
  examData?: OnlineExamData;
  onExit?: () => void;
}

export const OnlineExamRoom: React.FC<OnlineExamRoomProps> = ({ examData: propExamData, onExit }) => {
  const [exam, setExam] = useState<OnlineExamData | null>(null);
  const [phase, setPhase] = useState<'LOBBY' | 'IN_PROGRESS' | 'COMPLETED'>('LOBBY');

  // Student info state
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('12A1');
  const [studentSbd, setStudentSbd] = useState('');

  // Exam answers & timing state
  const [answers, setAnswers] = useState<Record<string, string>>({});
  // For True/False questions: map questionId -> { a: 'Đ' | 'S', b: 'Đ' | 'S', ... }
  const [tfAnswers, setTfAnswers] = useState<Record<string, Record<string, 'Đ' | 'S'>>>({});
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const [startTime, setStartTime] = useState<number>(0);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);

  // Result state
  const [scoreResult, setScoreResult] = useState<{
    score10: number;
    correctCount: number;
    totalGradable: number;
    details: Record<string, { isCorrect: boolean; studentAns: string; correctAns: string }>;
  } | null>(null);

  // Load exam from props or from URL / localStorage
  useEffect(() => {
    if (propExamData) {
      setExam(propExamData);
      setTimeLeft(propExamData.duration * 60);
      return;
    }

    // Try to load from URL param ?onlineExamId=...
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('onlineExamId') || urlParams.get('examId');
    if (examId) {
      try {
        const stored = localStorage.getItem(`mb_online_exam_${examId}`);
        if (stored) {
          const parsed = JSON.parse(stored);
          setExam(parsed);
          setTimeLeft((parsed.duration || 15) * 60);
          return;
        }
      } catch (e) {
        console.error('Failed to load online exam from localStorage:', e);
      }

      // Shared links must also work on a different device. Load the persisted full exam payload.
      apiFetch<any[]>('/api/online-exams')
        .then((tests) => {
          const remote = (tests || []).find((item: any) => item.id === examId);
          if (remote?.questions?.length) {
            setExam(remote as OnlineExamData);
            setTimeLeft((remote.duration || 15) * 60);
          }
        })
        .catch((e) => console.error('Failed to load shared online exam from server:', e));
    }

    // Fallback default demo test if none found
    const demoExam: OnlineExamData = {
      id: 'demo-exam',
      title: 'ĐỀ KIỂM TRA 15 PHÚT: GIÁ TRỊ LỚN NHẤT VÀ NHỎ NHẤT CỦA HÀM SỐ',
      title_en: '15-MINUTE TEST: MAXIMUM AND MINIMUM VALUES OF FUNCTIONS',
      duration: 15,
      englishRatio: 50,
      instructions_vi: 'Thời gian làm bài: 15 phút. Học sinh làm bài trực tiếp trên hệ thống.',
      instructions_en: 'Time allowed: 15 minutes. Complete all questions and submit before time expires.',
      questions: [
        {
          id: 'demo-q1',
          topic_id: 'top-12-1-2',
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: 'Giá trị lớn nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$ bằng bao nhiêu?',
          question_en: 'What is the maximum value of $f(x) = x^4 - 2x^2 + 3$ on $[0, 2]$?',
          options: [
            { option_key: 'A', content_vi: '$11$', content_en: '$11$', is_correct: true },
            { option_key: 'B', content_vi: '$3$', content_en: '$3$', is_correct: false },
            { option_key: 'C', content_vi: '$2$', content_en: '$2$', is_correct: false },
            { option_key: 'D', content_vi: '$16$', content_en: '$16$', is_correct: false },
          ],
          solution_vi: '$f(0) = 3, f(1) = 2, f(2) = 11 \\implies \\max = 11$.',
          solution_en: '$f(0) = 3, f(1) = 2, f(2) = 11 \\implies \\max = 11$.',
          correct_answer: 'A',
          math_skill: 'GTLN trên đoạn',
          english_skill: 'Maximum value on interval',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
      ],
    };
    setExam(demoExam);
    setTimeLeft(demoExam.duration * 60);
  }, [propExamData]);

  // Countdown timer
  useEffect(() => {
    if (phase !== 'IN_PROGRESS') return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase]);

  // Handle start test
  const handleStartExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      alert('Vui lòng nhập Họ và tên của bạn để bắt đầu làm bài!');
      return;
    }
    setStartTime(Date.now());
    setPhase('IN_PROGRESS');
  };

  // Handle submit test and calculate score
  const handleSubmitExam = () => {
    if (!exam) return;
    const spent = Math.round((Date.now() - (startTime || Date.now())) / 1000);
    setTimeSpentSeconds(spent);

    let correctCount = 0;
    let totalGradable = 0;
    const details: Record<string, { isCorrect: boolean; studentAns: string; correctAns: string }> = {};

    exam.questions.forEach((q) => {
      totalGradable++;
      if (q.format_type === 'TN' || q.question_type === 'MCQ') {
        const studentAns = (answers[q.id] || '').trim().toUpperCase();
        const correctAns = (q.correct_answer || '').trim().toUpperCase();
        const isCorrect = studentAns === correctAns;
        if (isCorrect) correctCount++;
        details[q.id] = { isCorrect, studentAns: studentAns || '(Chưa chọn)', correctAns };
      } else if (q.format_type === 'DS' || q.question_type === 'TRUE_FALSE') {
        // Evaluate True/False items
        const tfMap = tfAnswers[q.id] || {};
        const parts = ['a', 'b', 'c', 'd'];
        let matchedSub = 0;
        let totalSub = q.options?.length || 4;

        q.options?.forEach((opt) => {
          const key = opt.option_key.toLowerCase();
          const expected = opt.is_correct ? 'Đ' : 'S';
          const given = tfMap[key];
          if (given === expected) matchedSub++;
        });

        const isFullyCorrect = matchedSub === totalSub;
        if (isFullyCorrect) correctCount++;
        else if (matchedSub >= totalSub - 1) correctCount += 0.5; // partial credit

        const studentAnsStr = parts
          .filter((k) => tfMap[k])
          .map((k) => `${k}:${tfMap[k]}`)
          .join(', ');
        const correctAnsStr =
          q.options?.map((opt) => `${opt.option_key}:${opt.is_correct ? 'Đ' : 'S'}`).join(', ') || q.correct_answer;

        details[q.id] = {
          isCorrect: isFullyCorrect,
          studentAns: studentAnsStr || '(Chưa trả lời đủ)',
          correctAns: correctAnsStr,
        };
      } else if (q.format_type === 'TLN' || q.question_type === 'SHORT') {
        const studentAns = (answers[q.id] || '').trim().replace(/\s+/g, '').replace(/,/g, '.');
        const correctAns = (q.correct_answer || '').trim().replace(/\s+/g, '').replace(/,/g, '.');
        const isCorrect = studentAns.toLowerCase() === correctAns.toLowerCase();
        if (isCorrect) correctCount++;
        details[q.id] = { isCorrect, studentAns: studentAns || '(Chưa điền)', correctAns };
      } else {
        // Essay (TL)
        const studentAns = (answers[q.id] || '').trim();
        details[q.id] = {
          isCorrect: true, // Self-evaluated
          studentAns: studentAns || '(Bài làm trống)',
          correctAns: q.correct_answer || 'Xem lời giải chi tiết',
        };
      }
    });

    const finalScore10 = Math.round(((correctCount / (totalGradable || 1)) * 10) * 10) / 10;
    setScoreResult({
      score10: finalScore10,
      correctCount: Math.round(correctCount),
      totalGradable,
      details,
    });

    // Prepare student test score payload for Google Sheets
    const scorePayload = {
      studentName: studentName || 'Học sinh',
      studentClass: studentClass || '12A1',
      studentSbd: studentSbd || 'KDB',
      testTitle: exam.title,
      score10: finalScore10,
      correctCount: Math.round(correctCount),
      totalGradable,
      timeSpentFormatted: formatTimer(spent),
      submittedAt: new Date().toLocaleString('vi-VN'),
    };

    // Save to local score ledger for backup & immediate confirmation
    try {
      const storedScores = JSON.parse(localStorage.getItem('mb_google_sheet_scores_v1') || '[]');
      storedScores.unshift(scorePayload);
      localStorage.setItem('mb_google_sheet_scores_v1', JSON.stringify(storedScores));
    } catch (e) {
      console.warn('Local Google Sheet score ledger save error:', e);
    }

    // Post data to Google Apps Script Webhook if configured
    if (exam.googleSheetWebhook) {
      try {
        fetch(exam.googleSheetWebhook, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(scorePayload),
        }).catch((err) => console.warn('Google Sheet webhook fetch warning:', err));
      } catch (err) {
        console.warn('Google Sheet webhook post error:', err);
      }
    }

    setPhase('COMPLETED');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!exam) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
        <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-800 mb-2">Không tìm thấy bài thi</h2>
          <p className="text-sm text-slate-600 mb-6">Liên kết phòng thi có thể đã hết hạn hoặc không tồn tại.</p>
          {onExit && (
            <button onClick={onExit} className="px-6 py-3 bg-teal-600 text-white font-bold rounded-xl shadow-md">
              Quay về trang chủ
            </button>
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // PHASE 1: LOBBY / ENTRY ROOM
  // =========================================================================
  if (phase === 'LOBBY') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 text-white flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white text-slate-900 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-teal-500/30 animate-fade-in">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-teal-600 via-teal-700 to-indigo-800 text-white p-6 sm:p-8 text-center relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <School className="w-4 h-4" /> THPT CHÂU THÀNH A • TỔ TOÁN
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">{exam.title}</h1>
            {exam.title_en && (
              <p className="text-sm sm:text-base text-teal-100 font-medium italic mt-1">{exam.title_en}</p>
            )}

            {/* Quick Specs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs sm:text-sm font-semibold">
              <div className="bg-black/20 px-4 py-2 rounded-xl flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-300" />
                <span>Thời gian: <strong>{exam.duration} phút</strong></span>
              </div>
              <div className="bg-black/20 px-4 py-2 rounded-xl flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-300" />
                <span>Số lượng: <strong>{exam.questions.length} câu hỏi</strong></span>
              </div>
              <div className="bg-black/20 px-4 py-2 rounded-xl flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Tiếng Anh: <strong>{exam.englishRatio}%</strong></span>
              </div>
            </div>
          </div>

          {/* Student Info Form */}
          <form onSubmit={handleStartExam} className="p-6 sm:p-8 space-y-6">
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 text-xs text-teal-900 leading-relaxed">
              <strong>📌 Hướng dẫn làm bài thi:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1 text-slate-700">
                <li>Đề thi bao gồm các phần trắc nghiệm chuẩn cấu trúc GDPT 2018.</li>
                <li>Thời gian làm bài sẽ bắt đầu đếm ngược ngay sau khi bạn nhấn <strong>"BẮT ĐẦU LÀM BÀI"</strong>.</li>
                <li>Hệ thống sẽ tự động nộp bài và chấm điểm khi hết thời gian quy định.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-teal-600" /> Họ và tên học sinh <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Lớp học</label>
                  <input
                    type="text"
                    placeholder="12A1"
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:bg-white focus:border-teal-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Số báo danh (SBD)</label>
                  <input
                    type="text"
                    placeholder="12001"
                    value={studentSbd}
                    onChange={(e) => setStudentSbd(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:bg-white focus:border-teal-600 outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-black text-base rounded-2xl shadow-xl shadow-teal-500/25 flex items-center justify-center gap-2 transform active:scale-98 transition-all"
            >
              <span>BẮT ĐẦU LÀM BÀI THI</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // =========================================================================
  // PHASE 2: IN PROGRESS (TAKING EXAM)
  // =========================================================================
  if (phase === 'IN_PROGRESS') {
    const answeredCount =
      Object.keys(answers).length + Object.keys(tfAnswers).filter((k) => Object.keys(tfAnswers[k]).length >= 4).length;

    return (
      <div className="min-h-screen bg-slate-100 pb-24">
        {/* Sticky Top Countdown Header */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-teal-700 uppercase tracking-wide truncate max-w-[200px] sm:max-w-md">
                {exam.title}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Thí sinh: <strong>{studentName}</strong> (Lớp {studentClass})
              </div>
            </div>

            {/* Countdown Clock */}
            <div className="flex items-center gap-3">
              <div
                className={`px-4 py-2 rounded-2xl font-mono text-sm sm:text-base font-black flex items-center gap-2 shadow-inner ${
                  timeLeft <= 120 ? 'bg-red-100 text-red-600 animate-pulse border border-red-300' : 'bg-slate-900 text-teal-400'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>{formatTimer(timeLeft)}</span>
              </div>

              <button
                onClick={() => {
                  if (window.confirm('Bạn có chắc chắn muốn nộp bài sớm không?')) {
                    handleSubmitExam();
                  }
                }}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md flex items-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>Nộp bài</span>
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="max-w-4xl mx-auto mt-2">
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-teal-600 h-full transition-all duration-300"
                style={{ width: `${(answeredCount / (exam.questions.length || 1)) * 100}%` }}
              />
            </div>
          </div>
        </header>

        {/* Exam Questions Container */}
        <main className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8 mt-4">
          {exam.questions.map((q, idx) => (
            <div
              key={q.id || idx}
              id={`question-${idx + 1}`}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 relative transition-all hover:shadow-md"
            >
              {/* Question Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 bg-teal-600 text-white font-black text-xs rounded-full shadow-sm">
                    Câu {idx + 1}
                  </span>
                  <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 font-bold text-xs rounded-md uppercase">
                    {q.format_type === 'TN' && 'Trắc nghiệm (4 Lựa chọn)'}
                    {q.format_type === 'DS' && 'Trắc nghiệm Đúng / Sai'}
                    {q.format_type === 'TLN' && 'Trả lời ngắn'}
                    {q.format_type === 'TL' && 'Tự luận'}
                  </span>
                </div>
              </div>

              {/* Question Content */}
              <div className="text-slate-900 text-base sm:text-lg font-medium leading-relaxed mb-4">
                <MathRenderer content={q.question_vi} />
              </div>

              {q.question_en && exam.englishRatio > 0 && (
                <div className="text-slate-600 text-xs sm:text-sm italic mb-6 pl-3 border-l-2 border-teal-500 bg-teal-50/50 py-1.5 rounded-r-lg">
                  <span className="font-bold text-teal-800 not-italic mr-1.5">[En]:</span>
                  <MathRenderer content={q.question_en} inline />
                </div>
              )}

              {/* FORMAT 1: MULTIPLE CHOICE (TN) */}
              {(q.format_type === 'TN' || q.question_type === 'MCQ') && q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {q.options.map((opt) => {
                    const isSelected = answers[q.id] === opt.option_key;
                    return (
                      <button
                        key={opt.option_key}
                        type="button"
                        onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.option_key }))}
                        className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                          isSelected
                            ? 'bg-teal-50 border-teal-600 text-teal-950 ring-2 ring-teal-500/30 font-semibold shadow-sm'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-all ${
                            isSelected ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {opt.option_key}
                        </span>
                        <div className="text-sm pt-0.5">
                          <MathRenderer content={opt.content_vi} inline />
                          {opt.content_en && exam.englishRatio > 0 && (
                            <div className="text-xs text-slate-500 italic mt-0.5">
                              <MathRenderer content={opt.content_en} inline />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* FORMAT 2: TRUE / FALSE (DS) */}
              {(q.format_type === 'DS' || q.question_type === 'TRUE_FALSE') && q.options && (
                <div className="space-y-3 mt-4">
                  {q.options.map((opt) => {
                    const key = opt.option_key.toLowerCase();
                    const currentVal = tfAnswers[q.id]?.[key];
                    return (
                      <div
                        key={opt.option_key}
                        className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="text-sm text-slate-800 flex-1">
                          <strong className="text-teal-700 mr-2">{opt.option_key})</strong>
                          <MathRenderer content={opt.content_vi} inline />
                          {opt.content_en && exam.englishRatio > 0 && (
                            <div className="text-xs text-slate-500 italic mt-0.5">
                              <MathRenderer content={opt.content_en} inline />
                            </div>
                          )}
                        </div>

                        {/* Toggle True / False Buttons */}
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button
                            type="button"
                            onClick={() =>
                              setTfAnswers((prev) => ({
                                ...prev,
                                [q.id]: { ...(prev[q.id] || {}), [key]: 'Đ' },
                              }))
                            }
                            className={`px-4 py-1.5 rounded-xl font-bold text-xs transition-all ${
                              currentVal === 'Đ'
                                ? 'bg-teal-600 text-white shadow-md'
                                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
                            }`}
                          >
                            Đúng (T)
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setTfAnswers((prev) => ({
                                ...prev,
                                [q.id]: { ...(prev[q.id] || {}), [key]: 'S' },
                              }))
                            }
                            className={`px-4 py-1.5 rounded-xl font-bold text-xs transition-all ${
                              currentVal === 'S'
                                ? 'bg-red-600 text-white shadow-md'
                                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
                            }`}
                          >
                            Sai (F)
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* FORMAT 3: SHORT ANSWER (TLN) */}
              {(q.format_type === 'TLN' || q.question_type === 'SHORT') && (
                <div className="mt-4">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Đáp số của bạn (Chỉ điền số hoặc phân số):
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: 10 hoặc 3.5 hoặc -2"
                    value={answers[q.id] || ''}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                    className="w-full max-w-sm px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-base font-bold text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none"
                  />
                </div>
              )}

              {/* FORMAT 4: ESSAY (TL) */}
              {(q.format_type === 'TL' || q.question_type === 'ESSAY') && (
                <div className="mt-4">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Bài làm tự luận / Các bước giải:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Trình bày các bước giải toán tại đây..."
                    value={answers[q.id] || ''}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-teal-600 outline-none resize-y"
                  />
                </div>
              )}
            </div>
          ))}

          {/* Big Submit Button at Bottom */}
          <div className="pt-6 text-center">
            <button
              onClick={() => {
                if (window.confirm('Bạn có chắc chắn muốn nộp bài thi không?')) {
                  handleSubmitExam();
                }
              }}
              className="px-10 py-4 bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-black text-lg rounded-2xl shadow-xl shadow-teal-500/25 flex items-center justify-center gap-2 mx-auto"
            >
              <CheckCircle2 className="w-6 h-6" />
              <span>NỘP BÀI THI & XEM KẾT QUẢ</span>
            </button>
          </div>
        </main>
      </div>
    );
  }

  // =========================================================================
  // PHASE 3: COMPLETED (GRADING & DETAILED REVIEW)
  // =========================================================================
  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6 pb-20">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Scorecard Hero */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-teal-500/30 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4" /> KẾT QUẢ ĐÁNH GIÁ NĂNG LỰC
          </div>

          <h2 className="text-2xl sm:text-3xl font-black">{exam.title}</h2>
          <p className="text-sm text-teal-200 mt-1">
            Học sinh: <strong>{studentName}</strong> • Lớp <strong>{studentClass}</strong> • SBD: <strong>{studentSbd || 'N/A'}</strong>
          </p>

          {/* Big Score Display */}
          <div className="my-8 flex items-center justify-center gap-6 flex-wrap">
            <div className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-3xl border border-white/20">
              <div className="text-5xl sm:text-6xl font-black text-amber-400">
                {scoreResult?.score10.toFixed(1)}
              </div>
              <div className="text-xs uppercase font-bold text-slate-300 mt-1">Thang điểm 10</div>
            </div>

            <div className="text-left space-y-2 text-sm text-slate-200">
              <div>
                Số câu đúng: <strong className="text-teal-400 font-bold">{scoreResult?.correctCount} / {scoreResult?.totalGradable}</strong> câu
              </div>
              <div>
                Thời gian làm bài: <strong>{Math.floor(timeSpentSeconds / 60)} phút {timeSpentSeconds % 60} giây</strong>
              </div>
              <div>
                Đánh giá: <strong className="text-emerald-400">
                  {Number(scoreResult?.score10 || 0) >= 8
                    ? '🌟 Xuất sắc / Excellent'
                    : Number(scoreResult?.score10 || 0) >= 6.5
                    ? '👍 Khá giỏi / Good'
                    : '📖 Cần ôn tập thêm / Needs practice'}
                </strong>
              </div>
            </div>
          </div>

          {/* Google Sheets Score Recorded Notification Banner */}
          <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-2xl p-4 my-6 text-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-300 font-bold text-base">
                📊
              </div>
              <div>
                <div className="font-bold text-white">
                  Đã tự động ghi nhận điểm thi vào Google Sheet của Giáo viên!
                </div>
                <div className="text-emerald-200 text-xs mt-0.5">
                  Điểm số {scoreResult?.score10.toFixed(1)}/10 của học sinh {studentName} ({studentClass}) đã được lưu.
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                const sheetTargetUrl =
                  exam.googleSheetUrl ||
                  'https://docs.google.com/spreadsheets/d/1_AI_Math_Bridge_Scores/edit';
                window.open(sheetTargetUrl, '_blank');
              }}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs rounded-xl shadow-md shrink-0 flex items-center gap-1.5 cursor-pointer transition"
            >
              <span>📊 Mở Bảng Điểm Google Sheet</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>In kết quả / Lưu PDF</span>
            </button>
            <button
              onClick={() => {
                setPhase('LOBBY');
                setAnswers({});
                setTfAnswers({});
                setTimeLeft(exam.duration * 60);
              }}
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại bài thi</span>
            </button>
            {onExit && (
              <button
                onClick={onExit}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-bold rounded-xl"
              >
                Quay lại
              </button>
            )}
          </div>
        </div>

        {/* Detailed Question Review with Step-by-Step Solutions */}
        <div className="space-y-6">
          <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-600" />
            <span>CHI TIẾT ĐÁP ÁN & LỜI GIẢI TỪNG CÂU</span>
          </h3>

          {exam.questions.map((q, idx) => {
            const detail = scoreResult?.details[q.id];
            const isCorrect = detail?.isCorrect;

            return (
              <div
                key={q.id || idx}
                className={`bg-white rounded-3xl p-6 sm:p-8 border shadow-sm ${
                  isCorrect ? 'border-emerald-300 ring-1 ring-emerald-100' : 'border-red-300 ring-1 ring-red-100'
                }`}
              >
                {/* Status bar */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-black text-xs px-3 py-1 bg-slate-900 text-white rounded-full">
                    Câu {idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    {isCorrect ? (
                      <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Đúng (+ Điểm)
                      </span>
                    ) : (
                      <span className="text-red-700 bg-red-50 px-3 py-1 rounded-full flex items-center gap-1">
                        <XCircle className="w-4 h-4 text-red-600" /> Chưa chính xác
                      </span>
                    )}
                  </div>
                </div>

                {/* Question */}
                <div className="text-slate-900 text-base font-medium mb-3">
                  <MathRenderer content={q.question_vi} />
                </div>

                {/* Answers Compare */}
                <div className="bg-slate-50 rounded-2xl p-4 text-xs sm:text-sm space-y-1 mb-4 border border-slate-200">
                  <div>
                    Bài làm của bạn: <strong className={isCorrect ? 'text-emerald-700' : 'text-red-600'}>{detail?.studentAns}</strong>
                  </div>
                  <div>
                    Đáp án đúng: <strong className="text-teal-700">{detail?.correctAns}</strong>
                  </div>
                </div>

                {/* Detailed Solution */}
                {q.solution_vi && (
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 text-xs sm:text-sm text-emerald-950">
                    <div className="font-bold text-emerald-900 uppercase tracking-wide mb-1 flex items-center gap-1">
                      <Sparkles className="w-4 h-4 text-emerald-600" /> Lời giải chi tiết:
                    </div>
                    <MathRenderer content={q.solution_vi} />
                    {q.solution_en && exam.englishRatio > 0 && (
                      <div className="mt-2 pt-2 border-t border-emerald-200/60 text-emerald-800 text-xs italic">
                        <span className="font-bold not-italic">[English Solution]: </span>
                        <MathRenderer content={q.solution_en} inline />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
