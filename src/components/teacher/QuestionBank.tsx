import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { Question } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { apiFetch } from '../../lib/dataService';
import { generateBilingualQuestionAi, hasApiKey } from '../../lib/geminiService';
import {
  FileQuestion,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Copy,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  AlertCircle,
  X,
} from 'lucide-react';

export const QuestionBank: React.FC = () => {
  const { showNotification, selectedGrade } = useAppStore();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [previewQuestion, setPreviewQuestion] = useState<Question | null>(null);

  // New question form modal
  const [isNewQModalOpen, setIsNewQModalOpen] = useState(false);
  const [qVi, setQVi] = useState('');
  const [qEn, setQEn] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctKey, setCorrectKey] = useState('A');
  const [solutionVi, setSolutionVi] = useState('');

  // AI Generator state
  const [isAiGenModalOpen, setIsAiGenModalOpen] = useState(false);
  const [aiTopic, setAiTopic] = useState('Hàm số bậc hai và cực trị');
  const [aiDifficulty, setAiDifficulty] = useState<'EASY' | 'MEDIUM' | 'HARD'>('MEDIUM');
  const [aiEnglishRatio, setAiEnglishRatio] = useState<number>(50);
  const [aiGenerating, setAiGenerating] = useState(false);
  const [aiGenError, setAiGenError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const data = await apiFetch<Question[]>('/api/questions');
      setQuestions(data || []);
    } catch (err) {
      console.error('Error fetching questions:', err);
    } finally {
      setLoading(false);
    }
  };

  const createQuestion = async () => {
    if (!qEn || !optA || !optB) return;

    const payload = {
      topic_id: 'top-10-2-2',
      question_type: 'MCQ',
      difficulty: 'MEDIUM',
      language_level: 2,
      question_vi: qVi || qEn,
      question_en: qEn,
      solution_vi: solutionVi || 'Lời giải chi tiết',
      solution_en: 'Detailed solution',
      correct_answer: correctKey,
      options: [
        { option_key: 'A', content_vi: optA, content_en: optA, is_correct: correctKey === 'A' },
        { option_key: 'B', content_vi: optB, content_en: optB, is_correct: correctKey === 'B' },
        { option_key: 'C', content_vi: optC || 'None', content_en: optC || 'None', is_correct: correctKey === 'C' },
        { option_key: 'D', content_vi: optD || 'None', content_en: optD || 'None', is_correct: correctKey === 'D' },
      ],
      vocabulary_support: [{ word: 'function', meaning: 'hàm số' }],
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
    };

    try {
      const data = await apiFetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (data.question) {
        showNotification('Đã tạo câu hỏi mới vào Ngân Hàng Đề!');
        setIsNewQModalOpen(false);
        setQVi('');
        setQEn('');
        setOptA('');
        setOptB('');
        setOptC('');
        setOptD('');
        fetchQuestions();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleGenerateAiQuestion = async () => {
    if (!aiTopic.trim()) return;
    setAiGenerating(true);
    setAiGenError(null);

    const result = await generateBilingualQuestionAi(
      aiTopic.trim(),
      selectedGrade,
      aiDifficulty,
      aiEnglishRatio
    );

    setAiGenerating(false);

    if (!result.success) {
      setAiGenError(result.rawError || result.error || 'Lỗi khi tạo câu hỏi');
      return;
    }

    try {
      const jsonMatch = result.content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        setAiGenError('Không tìm thấy định dạng JSON hợp lệ từ AI.');
        return;
      }
      const data = JSON.parse(jsonMatch[0]);

      setQEn(data.question_en || '');
      setQVi(data.question_vi || '');
      setSolutionVi(data.solution_vi || data.solution_en || '');
      setCorrectKey(data.correct_answer || 'A');

      if (data.options && Array.isArray(data.options)) {
        data.options.forEach((opt: any) => {
          if (opt.option_key === 'A') setOptA(opt.content_en || opt.content_vi || '');
          if (opt.option_key === 'B') setOptB(opt.content_en || opt.content_vi || '');
          if (opt.option_key === 'C') setOptC(opt.content_en || opt.content_vi || '');
          if (opt.option_key === 'D') setOptD(opt.content_en || opt.content_vi || '');
        });
      }

      setIsAiGenModalOpen(false);
      setIsNewQModalOpen(true);
      showNotification('✨ AI Gemini đã sinh câu hỏi trắc nghiệm thành công!');
    } catch (e: any) {
      setAiGenError(`Lỗi phân tích cú pháp: ${e.message}`);
    }
  };

  const filtered = questions.filter((q) =>
    (q.question_en || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (q.question_vi || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-24 md:pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <FileQuestion className="w-6 h-6 text-teal-600" />
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Ngân Hàng Câu Hỏi (Question Bank)
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Quản lý kho câu hỏi Toán Tiếng Anh hỗ trợ công thức KaTeX & tạo tự động bằng AI Gemini
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* AI Generator Button */}
          <button
            onClick={() => setIsAiGenModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md transition"
          >
            <Sparkles className="w-4 h-4 text-amber-300" /> AI Tạo Câu Hỏi Mới
          </button>

          <button
            onClick={() => setIsNewQModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl shadow-md transition"
          >
            <Plus className="w-4 h-4" /> Nhập Thủ Công
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm kiếm câu hỏi theo từ khóa tiếng Anh hoặc tiếng Việt..."
          className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Question Cards List */}
      <div className="space-y-4">
        {filtered.map((q, idx) => (
          <div
            key={q.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-4 hover:border-teal-300 transition"
          >
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                  Level {q.language_level}
                </span>
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  {q.difficulty}
                </span>
                <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                  {q.question_type}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPreviewQuestion(q)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
                  title="Xem chi tiết"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="text-sm font-bold text-slate-900 leading-relaxed">
              <MathRenderer content={q.question_en} inline />
            </div>

            {q.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {q.options.map((opt) => (
                  <div
                    key={opt.option_key}
                    className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                      opt.is_correct
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-md bg-white border font-bold text-[10px] flex items-center justify-center">
                      {opt.option_key}
                    </span>
                    <span>
                      <MathRenderer content={opt.content_en || opt.content_vi} inline />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* AI Generate Question Modal */}
      {isAiGenModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-600" />
                <h3 className="font-extrabold text-slate-900 text-sm">
                  AI Sinh Câu Hỏi Trắc Nghiệm Toán Tiếng Anh
                </h3>
              </div>
              <button
                onClick={() => setIsAiGenModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700">Chủ đề bài toán: *</label>
                <input
                  type="text"
                  value={aiTopic}
                  onChange={(e) => setAiTopic(e.target.value)}
                  placeholder="Ví dụ: Tập xác định hàm số, Tọa độ đỉnh Parabol, Đạo hàm..."
                  className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700">Độ khó:</label>
                  <select
                    value={aiDifficulty}
                    onChange={(e) => setAiDifficulty(e.target.value as any)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-300 bg-white font-bold"
                  >
                    <option value="EASY">Dễ (Level 1)</option>
                    <option value="MEDIUM">Trung Bình (Level 2)</option>
                    <option value="HARD">Nâng Cao (Level 3)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700">Tỷ lệ Tiếng Anh: {aiEnglishRatio}%</label>
                  <input
                    type="range"
                    min={20}
                    max={100}
                    step={10}
                    value={aiEnglishRatio}
                    onChange={(e) => setAiEnglishRatio(parseInt(e.target.value, 10))}
                    className="w-full mt-3 accent-teal-600 cursor-pointer"
                  />
                </div>
              </div>

              {aiGenError && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-[11px] font-mono">
                  {aiGenError}
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t">
              <button
                onClick={() => setIsAiGenModalOpen(false)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-xl"
              >
                Hủy
              </button>
              <button
                onClick={handleGenerateAiQuestion}
                disabled={aiGenerating || !aiTopic.trim()}
                className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-2"
              >
                {aiGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                <span>{aiGenerating ? 'AI Đang Tạo Câu Hỏi...' : 'Bắt Đầu Tạo'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manual Add Question Modal */}
      {isNewQModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-extrabold text-slate-900 text-sm">
                Thêm Câu Hỏi Trắc Nghiệm Mới
              </h3>
              <button
                onClick={() => setIsNewQModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700">Nội dung câu hỏi bằng Tiếng Anh (English Question): *</label>
                <textarea
                  rows={2}
                  value={qEn}
                  onChange={(e) => setQEn(e.target.value)}
                  placeholder="Ví dụ: Find the domain of the function f(x) = \sqrt{x - 3}..."
                  className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700">Dịch nghĩa câu hỏi tiếng Việt (Gợi ý):</label>
                <input
                  type="text"
                  value={qVi}
                  onChange={(e) => setQVi(e.target.value)}
                  placeholder="Ví dụ: Tìm tập xác định của hàm số..."
                  className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700">Lựa chọn A: *</label>
                  <input
                    type="text"
                    value={optA}
                    onChange={(e) => setOptA(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-300 bg-white font-mono"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700">Lựa chọn B: *</label>
                  <input
                    type="text"
                    value={optB}
                    onChange={(e) => setOptB(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-300 bg-white font-mono"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700">Lựa chọn C:</label>
                  <input
                    type="text"
                    value={optC}
                    onChange={(e) => setOptC(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-300 bg-white font-mono"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700">Lựa chọn D:</label>
                  <input
                    type="text"
                    value={optD}
                    onChange={(e) => setOptD(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-300 bg-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700">Đáp án đúng: *</label>
                  <select
                    value={correctKey}
                    onChange={(e) => setCorrectKey(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-300 bg-white font-bold text-teal-800"
                  >
                    <option value="A">Đáp án A</option>
                    <option value="B">Đáp án B</option>
                    <option value="C">Đáp án C</option>
                    <option value="D">Đáp án D</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700">Lời giải chi tiết:</label>
                  <input
                    type="text"
                    value={solutionVi}
                    onChange={(e) => setSolutionVi(e.target.value)}
                    placeholder="Giải thích từng bước..."
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t">
              <button
                onClick={() => setIsNewQModalOpen(false)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-xl"
              >
                Hủy
              </button>
              <button
                onClick={createQuestion}
                disabled={!qEn || !optA || !optB}
                className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-md transition"
              >
                Lưu Vào Ngân Hàng Đề
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
