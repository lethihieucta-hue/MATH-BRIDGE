import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MathRenderer } from '../math/MathRenderer';
import { Award, CheckCircle2, XCircle, RefreshCw, ArrowRight, BarChart3, AlertCircle } from 'lucide-react';

interface TestResultViewProps {
  attempt: any;
  test: any;
  questions: any[];
  onRetake: () => void;
  onGoBack: () => void;
}

export const TestResultView: React.FC<TestResultViewProps> = ({
  attempt,
  test,
  questions,
  onRetake,
  onGoBack,
}) => {
  const score = attempt?.score || 0;

  useEffect(() => {
    if (score >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (e) {
        console.warn('Confetti error:', e);
      }
    }
  }, [score]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-24 md:pb-12">
      {/* Result Overview Header */}
      <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 flex items-center justify-center mx-auto">
          <Award className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold text-teal-300 bg-teal-900/80 px-3 py-1 rounded-full border border-teal-700">
            Kết Quả Bài Kiểm Tra
          </span>
          <h1 className="text-2xl sm:text-3xl font-black mt-2 text-white">{test?.title}</h1>
          <p className="text-xs text-slate-300 mt-1">Tỷ lệ tiếng Anh trong đề: {test?.english_ratio || 40}%</p>
        </div>

        <div className="text-4xl sm:text-5xl font-black text-amber-300">
          {score} <span className="text-sm font-normal text-slate-300">/ 100 điểm</span>
        </div>

        <div className="pt-2 flex flex-wrap justify-center gap-2">
          <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
            Độ chính xác Toán: {attempt?.math_score || score}%
          </span>
          <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
            Độ chính xác Toán Tiếng Anh: {attempt?.english_math_score || Math.round(score * 0.8)}%
          </span>
        </div>
      </div>

      {/* Analysis Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Chủ đề cần ôn tập (Topics To Review)</p>
          <p className="text-xs font-bold text-slate-800">Quadratic Functions & Vertex Coordinates</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Từ vựng chưa thuộc (Vocabulary Errors)</p>
          <p className="text-xs font-bold text-amber-600">axis of symmetry, range</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Đề xuất tiếp theo (Recommended)</p>
          <p className="text-xs font-bold text-teal-700">Luyện 10 từ vựng Đỉnh Parabol</p>
        </div>
      </div>

      {/* Question Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
        <h2 className="text-base font-extrabold text-slate-900 border-b pb-3">
          Chi tiết từng câu hỏi (Detailed Answer Review)
        </h2>

        <div className="space-y-4">
          {(attempt?.answers || []).map((ans: any, idx: number) => {
            const q = questions.find((item) => item.id === ans.question_id);
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border text-xs space-y-2 ${
                  ans.is_correct ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-800">
                    Câu {idx + 1}: {ans.is_correct ? '✅ Đúng' : '❌ Sai'}
                  </span>
                  <span className="font-mono text-slate-500">
                    Đã chọn: {ans.student_answer || 'Bỏ trống'} (Đáp án đúng: {q?.correct_answer})
                  </span>
                </div>

                {q && (
                  <div className="text-slate-800 font-medium">
                    <MathRenderer content={q.question_en} inline />
                  </div>
                )}

                {q?.solution_vi && (
                  <p className="text-[11px] text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-700">Lời giải: </span>
                    <MathRenderer content={q.solution_vi} inline />
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-4 flex items-center justify-between">
          <button
            onClick={onRetake}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-800 font-bold text-xs rounded-xl hover:bg-slate-200"
          >
            <RefreshCw className="w-4 h-4" /> Làm lại bài kiểm tra
          </button>

          <button
            onClick={onGoBack}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white font-extrabold text-xs rounded-xl hover:bg-teal-700 shadow-md"
          >
            Trở về danh sách Test <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
