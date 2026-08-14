import React, { useState } from 'react';
import { MathRenderer } from '../math/MathRenderer';
import { speakEnglishWord } from '../../lib/audio';
import { AiStepSolverModal } from '../math/AiStepSolverModal';
import {
  FileQuestion,
  CheckCircle2,
  Sparkles,
  Volume2,
  ArrowRight,
  HelpCircle,
  Edit3,
} from 'lucide-react';

export const MathReadingModule: React.FC = () => {
  const [step, setStep] = useState<'ANALYZE' | 'SOLVE'>('ANALYZE');
  const [selectedGiven, setSelectedGiven] = useState<string | null>(null);
  const [selectedRequired, setSelectedRequired] = useState<string | null>(null);
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [customProblem, setCustomProblem] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);

  const sampleProblem = {
    english_text: 'Given the function f(x) = x^2 - 4x + 3, determine its minimum value on the interval [0, 5].',
    vietnamese_translation: 'Cho hàm số f(x) = x^2 - 4x + 3, hãy xác định giá trị nhỏ nhất của nó trên đoạn [0, 5].',
    given_options: [
      { id: 'g1', text: 'Function f(x) = x^2 - 4x + 3 on [0, 5]', correct: true },
      { id: 'g2', text: 'A straight line linear equation', correct: false },
      { id: 'g3', text: 'A derivative formula f\'(x) = 0', correct: false },
    ],
    required_options: [
      { id: 'r1', text: 'Minimum value (Giá trị nhỏ nhất)', correct: true },
      { id: 'r2', text: 'Domain of definition (Tập xác định)', correct: false },
      { id: 'r3', text: 'Roots of equation f(x) = 0', correct: false },
    ],
    keyword_options: [
      { id: 'k1', text: 'minimum value (GTNN)', correct: true },
      { id: 'k2', text: 'maximum value (GTLN)', correct: false },
      { id: 'k3', text: 'strictly decreasing (nghịch biến)', correct: false },
    ],
    solution: 'The vertex x_I = -b/(2a) = 2 in [0, 5]. f(2) = 2^2 - 4(2) + 3 = -1. f(0) = 3, f(5) = 8. Thus, minimum value is -1 at x = 2.',
  };

  const currentProblemText = isCustomMode && customProblem.trim() ? customProblem : sampleProblem.english_text;

  const checkAnalysis = () => {
    if (selectedGiven === 'g1' && selectedRequired === 'r1' && selectedKeyword === 'k1') {
      setFeedback('🎉 Tuyệt vời! Bạn đã phân tích đúng 100% cấu trúc đề toán tiếng Anh.');
    } else {
      setFeedback('💡 Gợi ý: Hãy quan sát từ khóa "determine its minimum value" để chọn câu trả lời chính xác.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-24 md:pb-12">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
            <FileQuestion className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Math Reading Comprehension (Đọc & Phân Tích Đề Bài)
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Thấu hiểu cấu trúc, từ khóa và ý đồ toán học trong đề bài tiếng Anh
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCustomMode(!isCustomMode)}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition flex items-center gap-1.5"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isCustomMode ? 'Xem Đề Mẫu' : 'Nhập Đề Của Bạn'}</span>
          </button>

          <button
            onClick={() => setIsAiModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs rounded-xl shadow-md transition"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>AI Giải Mã Đề 3 Bước</span>
          </button>
        </div>
      </div>

      {/* Custom Problem Input */}
      {isCustomMode && (
        <div className="bg-white p-6 rounded-3xl border border-teal-200 shadow-2xs space-y-3">
          <label className="font-extrabold text-xs text-slate-900 flex items-center gap-1.5">
            <Edit3 className="w-4 h-4 text-teal-600" />
            <span>Nhập đề toán tiếng Anh bất kỳ để AI phân tích:</span>
          </label>
          <textarea
            rows={3}
            value={customProblem}
            onChange={(e) => setCustomProblem(e.target.value)}
            placeholder="Ví dụ: Find the domain of the function f(x) = sqrt(4 - x^2)..."
            className="w-full p-4 rounded-2xl border border-slate-300 bg-slate-50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
          />
          <button
            onClick={() => setIsAiModalOpen(true)}
            disabled={!customProblem.trim()}
            className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Phân Tích Đề Này Bằng AI (3 Bước)</span>
          </button>
        </div>
      )}

      {/* Main Problem Display Card */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs font-bold text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
            English Math Problem
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => speakEnglishWord(currentProblemText)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-xs text-teal-300 font-bold transition"
            >
              <Volume2 className="w-4 h-4" /> Nghe đọc
            </button>
            <button
              onClick={() => setIsAiModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-600 hover:bg-teal-500 text-xs text-white font-bold transition"
            >
              <Sparkles className="w-3.5 h-3.5" /> AI 3 Bước
            </button>
          </div>
        </div>

        <div className="text-lg sm:text-xl font-bold leading-relaxed text-slate-100">
          <MathRenderer content={currentProblemText} inline />
        </div>

        {!isCustomMode && (
          <p className="text-xs text-slate-400 italic">
            Gợi ý tiếng Việt: "{sampleProblem.vietnamese_translation}"
          </p>
        )}
      </div>

      {/* STEP 1: ANALYZE QUESTION STRUCTURE */}
      {!isCustomMode && step === 'ANALYZE' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-base font-extrabold text-slate-900 border-b pb-3">
            Bước 1: Xác định cấu trúc đề bài (Problem Structure Analysis)
          </h2>

          {/* Q1: Given */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 uppercase flex items-center gap-1.5">
              1. What is given? (Đề bài cho yếu tố gì?)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {sampleProblem.given_options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedGiven(opt.id)}
                  className={`p-3 rounded-2xl border text-xs font-bold text-left transition ${
                    selectedGiven === opt.id
                      ? 'bg-teal-50 border-teal-500 text-teal-900 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>

          {/* Q2: Required */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 uppercase flex items-center gap-1.5">
              2. What is required? (Đề bài yêu cầu tìm gì?)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {sampleProblem.required_options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedRequired(opt.id)}
                  className={`p-3 rounded-2xl border text-xs font-bold text-left transition ${
                    selectedRequired === opt.id
                      ? 'bg-teal-50 border-teal-500 text-teal-900 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>

          {/* Q3: Keyword */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 uppercase flex items-center gap-1.5">
              3. Important Math Keyword? (Từ khóa toán học trọng tâm?)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {sampleProblem.keyword_options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedKeyword(opt.id)}
                  className={`p-3 rounded-2xl border text-xs font-bold text-left transition ${
                    selectedKeyword === opt.id
                      ? 'bg-teal-50 border-teal-500 text-teal-900 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-100">
            <button
              onClick={checkAnalysis}
              className="px-5 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition"
            >
              Kiểm tra phân tích
            </button>

            <button
              onClick={() => setStep('SOLVE')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white font-extrabold text-xs rounded-xl hover:bg-teal-700 shadow-md transition"
            >
              Chuyển sang Giải Bài <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {feedback && (
            <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 text-xs font-bold text-teal-900">
              {feedback}
            </div>
          )}
        </div>
      )}

      {/* STEP 2: SOLVE PROBLEM */}
      {!isCustomMode && step === 'SOLVE' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-base font-extrabold text-slate-900 border-b pb-3">
            Bước 2: Lời giải toán bằng tiếng Anh (Mathematical Solution)
          </h2>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <p className="text-xs font-bold uppercase text-teal-800">Full English Solution:</p>
            <div className="text-xs text-slate-800 leading-relaxed font-medium">
              <MathRenderer content={sampleProblem.solution} inline />
            </div>
          </div>

          <button
            onClick={() => setStep('ANALYZE')}
            className="px-5 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition"
          >
            ← Quay lại Phân tích đề
          </button>
        </div>
      )}

      {/* AI 3-Step Solver Modal */}
      <AiStepSolverModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        problemText={currentProblemText}
        problemTitle="Đọc hiểu & Phân tích Đề Toán"
      />
    </div>
  );
};
