import React, { useState, useEffect, useMemo } from 'react';
import { useAppStore } from '../../lib/store';
import { BarrierType, Question } from '../../types';
import { getSyncStatus, onSyncStatus, pullAndMergeBank, scheduleBankPush, type SyncStatus } from '../../lib/teacherBankSync';
import { TeacherCloudLogin } from './OnlineExamResults';
import { BARRIER_ORDER, BARRIER_TAG_LABEL, BARRIER_TAG_SHORT, getQuestionBarrierTags, isBarrierTagEdited, resetQuestionBarrierTags, setQuestionBarrierTags } from '../../lib/barrierTags';
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
  const [gradeFilter, setGradeFilter] = useState<number | 'ALL'>(selectedGrade || 'ALL');
  const [barrierFilter, setBarrierFilter] = useState<BarrierType | 'ALL'>('ALL');
  const [page, setPage] = useState(0);
  const [tagVersion, setTagVersion] = useState(0);
  const [newTags, setNewTags] = useState<BarrierType[]>(['L']);
  const PAGE_SIZE = 30;
  const [sync, setSync] = useState<SyncStatus>(() => getSyncStatus());
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => onSyncStatus((st) => {
    setSync(st);
    if (st.state === 'ok') { setTagVersion((v) => v + 1); void fetchQuestions(); }
  }), []);

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
        ...(optC.trim() ? [{ option_key: 'C', content_vi: optC, content_en: optC, is_correct: correctKey === 'C' }] : []),
        ...(optD.trim() ? [{ option_key: 'D', content_vi: optD, content_en: optD, is_correct: correctKey === 'D' }] : []),
      ],
      vocabulary_support: [],
      barrier_tags: newTags.length ? newTags : ['L'],
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
        scheduleBankPush('customQuestions');
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

  const gradeOf = (q: Question) => Number(String(q.topic_id || '').split('-')[1]) || 0;
  const scoped = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return questions.filter((q) =>
      (gradeFilter === 'ALL' || gradeOf(q) === gradeFilter) &&
      (!term || (q.question_en || '').toLowerCase().includes(term) || (q.question_vi || '').toLowerCase().includes(term))
    );
  }, [questions, gradeFilter, searchTerm]);
  const barrierCounts = useMemo(() => {
    const c: Record<BarrierType, number> = { L: 0, C: 0, M: 0 };
    scoped.forEach((q) => getQuestionBarrierTags(q).forEach((t) => { c[t] += 1; }));
    return c;
  }, [scoped, tagVersion]);
  const filtered = useMemo(
    () => (barrierFilter === 'ALL' ? scoped : scoped.filter((q) => getQuestionBarrierTags(q).includes(barrierFilter))),
    [scoped, barrierFilter, tagVersion]
  );
  useEffect(() => { setPage(0); }, [gradeFilter, barrierFilter, searchTerm]);
  useEffect(() => { if (selectedGrade) setGradeFilter(selectedGrade); }, [selectedGrade]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const toggleTag = (q: Question, tag: BarrierType) => {
    const current = getQuestionBarrierTags(q);
    const next = current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag];
    if (!next.length) { showNotification('⚠️ Mỗi câu cần ít nhất 1 nhãn L, C hoặc M.'); return; }
    if (setQuestionBarrierTags(q.id, next)) setTagVersion((v) => v + 1);
  };
  const tagStyle: Record<BarrierType, string> = {
    L: 'bg-sky-100 text-sky-800 border-sky-300',
    C: 'bg-amber-100 text-amber-800 border-amber-300',
    M: 'bg-rose-100 text-rose-800 border-rose-300',
  };
  const TagEditor: React.FC<{ q: Question }> = ({ q }) => {
    const tags = getQuestionBarrierTags(q);
    return (
      <div className="flex items-center gap-1" title="Bấm để bật/tắt nhãn rào cản (1–3 nhãn)">
        {BARRIER_ORDER.map((t) => (
          <button key={t} type="button" onClick={() => toggleTag(q, t)} title={BARRIER_TAG_LABEL[t]}
            className={`text-[10px] font-black px-2 py-0.5 rounded-full border transition ${tags.includes(t) ? tagStyle[t] : 'bg-white text-slate-300 border-slate-200 hover:text-slate-500'}`}>
            {t}
          </button>
        ))}
        {isBarrierTagEdited(q.id) && (
          <button type="button" onClick={() => { resetQuestionBarrierTags(q.id); setTagVersion((v) => v + 1); }} className="text-[9px] font-bold text-slate-400 hover:text-slate-700 underline" title="Trả về nhãn tự động">đã sửa · hoàn tác</button>
        )}
      </div>
    );
  };

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

      {/* Trạng thái lưu nhãn và câu tự tạo lên Google Sheet */}
      <div className={`flex flex-wrap items-center justify-between gap-2 px-4 py-3 rounded-2xl border text-xs ${sync.state === 'error' ? 'bg-rose-50 border-rose-200 text-rose-800' : sync.state === 'offline' ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-emerald-50 border-emerald-200 text-emerald-900'}`}>
        <span>
          {sync.state === 'syncing' ? '⏳ ' : sync.state === 'ok' ? '☁️ ' : sync.state === 'error' ? '⚠️ ' : '💾 '}
          {sync.message || 'Nhãn L/C/M đã sửa và câu tự tạo được lưu lên Google Sheet khi đăng nhập tài khoản giáo viên.'}
          {sync.lastSyncAt && sync.state !== 'offline' ? ` (lần cuối ${new Date(sync.lastSyncAt).toLocaleString('vi-VN')})` : ''}
          {sync.dirty.length > 0 && sync.state !== 'syncing' ? ' · Còn thay đổi chưa lưu lên Sheet.' : ''}
        </span>
        {sync.state === 'offline'
          ? <button type="button" onClick={() => setShowLogin((v) => !v)} className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-black">Đăng nhập để đồng bộ</button>
          : <button type="button" onClick={() => void pullAndMergeBank()} disabled={sync.state === 'syncing'} className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 font-black disabled:opacity-50">Đồng bộ ngay</button>}
      </div>
      {showLogin && <TeacherCloudLogin onDone={() => setShowLogin(false)} />}

      {/* Bộ lọc khối lớp + nhãn rào cản L/C/M */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200/80 shadow-2xs space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-black text-slate-700">Khối:</span>
          {(['ALL', 10, 11, 12] as const).map((g) => (
            <button key={String(g)} type="button" onClick={() => setGradeFilter(g)}
              className={`px-3 py-1.5 rounded-xl font-bold border ${gradeFilter === g ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200'}`}>
              {g === 'ALL' ? 'Tất cả' : `Lớp ${g}`}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-black text-slate-700">Rào cản học sinh còn yếu:</span>
          <button type="button" onClick={() => setBarrierFilter('ALL')}
            className={`px-3 py-1.5 rounded-xl font-bold border ${barrierFilter === 'ALL' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200'}`}>
            Tất cả ({scoped.length})
          </button>
          {BARRIER_ORDER.map((t) => (
            <button key={t} type="button" onClick={() => setBarrierFilter(t)} title={BARRIER_TAG_LABEL[t]}
              className={`px-3 py-1.5 rounded-xl font-bold border ${barrierFilter === t ? tagStyle[t] + ' ring-2 ring-offset-1 ring-slate-300' : 'bg-white text-slate-700 border-slate-200'}`}>
              {t} – {BARRIER_TAG_SHORT[t]} ({barrierCounts[t]})
            </button>
          ))}
        </div>
        <p className="text-[10px] text-slate-500">Mỗi câu có 1–3 nhãn: <b>L</b> ngôn ngữ (thuật ngữ, câu lệnh), <b>C</b> đọc hiểu đề (dữ kiện, bối cảnh, hình/bảng), <b>M</b> suy luận Toán (chiến lược, nhiều bước). Nhãn tự động được gắn theo quy tắc; bấm vào chữ L/C/M trên từng câu để sửa.</p>
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
        {pageItems.map((q, idx) => (
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
                  {q.format_type || q.question_type}
                </span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">Lớp {gradeOf(q) || '?'}</span>
              </div>
              <TagEditor q={q} />

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

      {filtered.length === 0 && !loading && (
        <div className="text-center text-xs text-slate-500 bg-white rounded-3xl border border-dashed border-slate-300 p-8">Không có câu hỏi phù hợp bộ lọc.</div>
      )}
      {pageCount > 1 && (
        <div className="flex items-center justify-center gap-3 text-xs font-bold">
          <button type="button" disabled={page === 0} onClick={() => { setPage((p) => Math.max(0, p - 1)); window.scrollTo({ top: 0 }); }} className="px-3 py-2 rounded-xl border border-slate-200 bg-white disabled:opacity-40">‹ Trước</button>
          <span className="text-slate-600">Trang {page + 1}/{pageCount} · {filtered.length} câu</span>
          <button type="button" disabled={page >= pageCount - 1} onClick={() => { setPage((p) => Math.min(pageCount - 1, p + 1)); window.scrollTo({ top: 0 }); }} className="px-3 py-2 rounded-xl border border-slate-200 bg-white disabled:opacity-40">Sau ›</button>
        </div>
      )}

      {/* Xem chi tiết câu hỏi */}
      {previewQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs" onClick={() => setPreviewQuestion(null)}>
          <div className="bg-white w-full max-w-2xl rounded-3xl p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">Chi tiết câu hỏi</h3>
                <p className="text-[10px] text-slate-400 font-mono">{previewQuestion.id}</p>
              </div>
              <button onClick={() => setPreviewQuestion(null)} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[10px]">
              <span className="font-black text-slate-700">Nhãn rào cản:</span>
              <TagEditor q={previewQuestion} />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-black text-slate-500 uppercase">English</div>
              <div className="text-sm font-bold text-slate-900"><MathRenderer content={previewQuestion.question_en} /></div>
            </div>
            {previewQuestion.question_vi && (
              <div className="space-y-1">
                <div className="text-[10px] font-black text-slate-500 uppercase">Tiếng Việt</div>
                <div className="text-sm text-slate-700"><MathRenderer content={previewQuestion.question_vi} /></div>
              </div>
            )}
            {previewQuestion.options && previewQuestion.options.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {previewQuestion.options.map((opt) => (
                  <div key={opt.option_key} className={`p-2.5 rounded-xl border ${opt.is_correct ? 'bg-emerald-50 border-emerald-300 font-bold' : 'bg-slate-50 border-slate-200'}`}>
                    <b>{opt.option_key}.</b> <MathRenderer content={opt.content_en || opt.content_vi} inline />
                  </div>
                ))}
              </div>
            )}
            <div className="text-xs"><b>Đáp án:</b> <MathRenderer content={previewQuestion.correct_answer} inline /></div>
            {(previewQuestion.solution_vi || previewQuestion.solution_en) && (
              <div className="space-y-1 bg-slate-50 rounded-2xl p-3">
                <div className="text-[10px] font-black text-slate-500 uppercase">Lời giải</div>
                <div className="text-xs text-slate-800"><MathRenderer content={previewQuestion.solution_vi || previewQuestion.solution_en} /></div>
              </div>
            )}
          </div>
        </div>
      )}

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
                  placeholder="Ví dụ: Find the domain of the function f(x) = \\sqrt{x - 3}..."
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

              <div>
                <label className="font-bold text-slate-700">Nhãn rào cản (chọn 1–3): *</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {BARRIER_ORDER.map((t) => (
                    <label key={t} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border cursor-pointer ${newTags.includes(t) ? tagStyle[t] : 'bg-white border-slate-200 text-slate-500'}`}>
                      <input type="checkbox" className="accent-teal-600" checked={newTags.includes(t)}
                        onChange={() => setNewTags((prev) => (prev.includes(t) ? (prev.length > 1 ? prev.filter((x) => x !== t) : prev) : BARRIER_ORDER.filter((x) => x === t || prev.includes(x))))} />
                      <span className="font-bold">{BARRIER_TAG_LABEL[t]}</span>
                    </label>
                  ))}
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
