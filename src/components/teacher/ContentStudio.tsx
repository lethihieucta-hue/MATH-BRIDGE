import React, { useState } from 'react';
import { useAppStore } from '../../lib/store';
import { BookOpen, BookMarked, Layers, Plus, CheckCircle2 } from 'lucide-react';

export const ContentStudio: React.FC = () => {
  const { showNotification } = useAppStore();
  const [activeTab, setActiveTab] = useState<'VOCAB' | 'LESSON'>('VOCAB');

  // Vocab form state
  const [word, setWord] = useState('');
  const [ipa, setIpa] = useState('');
  const [meaningVi, setMeaningVi] = useState('');
  const [defEn, setDefEn] = useState('');
  const [exEn, setExEn] = useState('');
  const [exVi, setExVi] = useState('');
  const [formula, setFormula] = useState('');

  // Lesson form state
  const [titleVi, setTitleVi] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [keyConceptsVi, setKeyConceptsVi] = useState('');
  const [keyConceptsEn, setKeyConceptsEn] = useState('');

  const submitVocab = async () => {
    if (!word || !meaningVi) return;
    try {
      const res = await fetch('/api/vocabulary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic_id: 'top-10-2-2',
          word,
          ipa: ipa || '/.../',
          meaning_vi: meaningVi,
          definition_en: defEn,
          example_en: exEn,
          example_vi: exVi,
          formula,
          difficulty: 'MEDIUM',
          language_level: 2,
        }),
      });
      const data = await res.json();
      if (data.vocabulary) {
        showNotification(`Đã tạo từ vựng mới: ${word}`);
        setWord('');
        setIpa('');
        setMeaningVi('');
        setDefEn('');
        setExEn('');
        setExVi('');
        setFormula('');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const submitLesson = async () => {
    if (!titleVi || !titleEn) return;
    try {
      const res = await fetch('/api/lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic_id: 'top-10-2-2',
          title_vi: titleVi,
          title_en: titleEn,
          learning_objectives: ['Hiểu định nghĩa', 'Áp dụng công thức'],
          vocabulary_list: ['voc-4', 'voc-6'],
          key_concepts_vi: keyConceptsVi || 'Khái niệm toán học',
          key_concepts_en: keyConceptsEn || 'Math Concepts in English',
          formulas: ['y = ax^2 + bx + c'],
          worked_examples: [],
          status: 'PUBLISHED',
          language_level: 2,
          created_by: 'usr-teacher-1',
        }),
      });
      const data = await res.json();
      if (data.lesson) {
        showNotification(`Đã xuất bản bài học mới: ${titleVi}`);
        setTitleVi('');
        setTitleEn('');
        setKeyConceptsVi('');
        setKeyConceptsEn('');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-24 md:pb-12">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-teal-600" />
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Content Studio (Biên Soạn Học Liệu)
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Tạo Từ vựng, Mẫu câu và Bài học song ngữ chuẩn giáo trình
          </p>
        </div>

        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setActiveTab('VOCAB')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'VOCAB' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600'
            }`}
          >
            Tạo Từ Vựng
          </button>
          <button
            onClick={() => setActiveTab('LESSON')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'LESSON' ? 'bg-white text-teal-800 shadow-2xs' : 'text-slate-600'
            }`}
          >
            Tạo Bài Học Song Ngữ
          </button>
        </div>
      </div>

      {/* FORM 1: VOCABULARY */}
      {activeTab === 'VOCAB' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-5">
          <h2 className="text-base font-extrabold text-slate-900 border-b pb-3">Thêm Từ Vựng Toán Tiếng Anh Mới</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700">English Word (Từ tiếng Anh): *</label>
              <input
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Ví dụ: derivative"
                className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700">Phiên âm IPA:</label>
              <input
                type="text"
                value={ipa}
                onChange={(e) => setIpa(e.target.value)}
                placeholder="Ví dụ: /dɪˈrɪv.ə.tɪv/"
                className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white font-mono"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700">Nghĩa tiếng Việt: *</label>
              <input
                type="text"
                value={meaningVi}
                onChange={(e) => setMeaningVi(e.target.value)}
                placeholder="Ví dụ: đạo hàm"
                className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white font-bold text-teal-900"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700">Công thức liên quan (KaTeX):</label>
              <input
                type="text"
                value={formula}
                onChange={(e) => setFormula(e.target.value)}
                placeholder="Ví dụ: f'(x)"
                className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white font-mono"
              />
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="font-bold text-slate-700">Định nghĩa tiếng Anh (Math definition):</label>
              <textarea
                rows={2}
                value={defEn}
                onChange={(e) => setDefEn(e.target.value)}
                placeholder="Nhập định nghĩa tiếng Anh..."
                className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700">Ví dụ tiếng Anh (Example sentence):</label>
                <input
                  type="text"
                  value={exEn}
                  onChange={(e) => setExEn(e.target.value)}
                  placeholder="Ví dụ: Find the derivative of f(x)..."
                  className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700">Ví dụ tiếng Việt (Dịch nghĩa):</label>
                <input
                  type="text"
                  value={exVi}
                  onChange={(e) => setExVi(e.target.value)}
                  placeholder="Ví dụ: Tính đạo hàm của f(x)..."
                  className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
                />
              </div>
            </div>
          </div>

          <button
            onClick={submitVocab}
            disabled={!word || !meaningVi}
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-md transition"
          >
            Lưu Từ Vựng Mới
          </button>
        </div>
      )}

      {/* FORM 2: BILINGUAL LESSON */}
      {activeTab === 'LESSON' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-5">
          <h2 className="text-base font-extrabold text-slate-900 border-b pb-3">Tạo Bài Học Song Ngữ Mới</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700">Tên Bài Học Tiếng Việt: *</label>
              <input
                type="text"
                value={titleVi}
                onChange={(e) => setTitleVi(e.target.value)}
                placeholder="Ví dụ: Bài 2: Tập Xác Định Của Hàm Số"
                className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700">Tên Bài Học Tiếng Anh: *</label>
              <input
                type="text"
                value={titleEn}
                onChange={(e) => setTitleEn(e.target.value)}
                placeholder="Ví dụ: Lesson 2: Domain and Range of Functions"
                className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="font-bold text-slate-700">Khái niệm cốt lõi (Tiếng Việt):</label>
              <textarea
                rows={3}
                value={keyConceptsVi}
                onChange={(e) => setKeyConceptsVi(e.target.value)}
                placeholder="Nhập nội dung lý thuyết tiếng Việt..."
                className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700">Khái niệm cốt lõi (Tiếng Anh):</label>
              <textarea
                rows={3}
                value={keyConceptsEn}
                onChange={(e) => setKeyConceptsEn(e.target.value)}
                placeholder="Nhập nội dung lý thuyết tiếng Anh..."
                className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
              />
            </div>
          </div>

          <button
            onClick={submitLesson}
            disabled={!titleVi || !titleEn}
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-md transition"
          >
            Xuất Bản Bài Học
          </button>
        </div>
      )}
    </div>
  );
};
