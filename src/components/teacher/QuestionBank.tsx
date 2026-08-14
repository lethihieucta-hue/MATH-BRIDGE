import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { Question } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { FileQuestion, Plus, Search, Filter, Edit, Trash2, Eye, Copy, CheckCircle2 } from 'lucide-react';

export const QuestionBank: React.FC = () => {
  const { showNotification } = useAppStore();
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

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
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
      const res = await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.question) {
        showNotification('Đã tạo câu hỏi mới vào Ngân Hàng Đề!');
        setIsNewQModalOpen(false);
        setQVi('');
        setQEn('');
        setOptA('');
        setOptB('');
        fetchQuestions();
      }
    } catch (e) {
      console.error(e);
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
            Quản lý kho câu hỏi Toán Tiếng Anh hỗ trợ công thức KaTeX & gợi ý từ vựng
          </p>
        </div>

        <button
          onClick={() => setIsNewQModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs rounded-xl shadow-md transition"
        >
          <Plus className="w-4 h-4" /> Thêm Câu Hỏi Mới
        </button>
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
                  className="p-1.5 rounded-xl border text-slate-600 hover:bg-slate-100 transition"
                  title="Xem trước"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-sm font-bold text-slate-900 leading-relaxed">
                <MathRenderer content={q.question_en} inline />
              </div>
              {q.question_vi && <p className="text-xs text-slate-500">→ {q.question_vi}</p>}
            </div>

            {/* Options Preview */}
            {q.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {q.options.map((opt) => (
                  <div
                    key={opt.option_key}
                    className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 ${
                      opt.is_correct ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-md bg-white border font-bold text-[10px] flex items-center justify-center">
                      {opt.option_key}
                    </span>
                    <MathRenderer content={opt.content_en || opt.content_vi} inline />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* New Question Modal */}
      {isNewQModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-extrabold text-slate-900">Thêm Câu Hỏi Mới Vào Ngân Hàng</h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700">Đề bài tiếng Anh (Chấp nhận công thức $x^2$):</label>
                <textarea
                  rows={2}
                  value={qEn}
                  onChange={(e) => setQEn(e.target.value)}
                  placeholder="Ví dụ: Find the vertex of the parabola y = x^2 - 4x + 3."
                  className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700">Dịch đề tiếng Việt (Gợi ý):</label>
                <input
                  type="text"
                  value={qVi}
                  onChange={(e) => setQVi(e.target.value)}
                  placeholder="Ví dụ: Tìm tọa độ đỉnh của parabol y = x^2 - 4x + 3."
                  className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-700">Đáp án A:</label>
                  <input
                    type="text"
                    value={optA}
                    onChange={(e) => setOptA(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700">Đáp án B:</label>
                  <input
                    type="text"
                    value={optB}
                    onChange={(e) => setOptB(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700">Đáp án C:</label>
                  <input
                    type="text"
                    value={optC}
                    onChange={(e) => setOptC(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700">Đáp án D:</label>
                  <input
                    type="text"
                    value={optD}
                    onChange={(e) => setOptD(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700">Đáp án Đúng:</label>
                <select
                  value={correctKey}
                  onChange={(e) => setCorrectKey(e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-300 font-bold"
                >
                  <option value="A">Khóa A</option>
                  <option value="B">Khóa B</option>
                  <option value="C">Khóa C</option>
                  <option value="D">Khóa D</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700">Hướng dẫn lời giải:</label>
                <textarea
                  rows={2}
                  value={solutionVi}
                  onChange={(e) => setSolutionVi(e.target.value)}
                  placeholder="Nhập lời giải vắn tắt..."
                  className="w-full mt-1 p-3 rounded-xl border border-slate-300"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => setIsNewQModalOpen(false)}
                className="flex-1 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl"
              >
                Hủy
              </button>
              <button
                onClick={createQuestion}
                className="flex-1 py-2.5 bg-teal-600 text-white font-bold text-xs rounded-xl hover:bg-teal-700"
              >
                Lưu Vào Ngân Hàng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
