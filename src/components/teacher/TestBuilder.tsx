import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { Question } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { GraduationCap, Sliders, Clock, Plus, CheckCircle2, FileQuestion } from 'lucide-react';

export const TestBuilder: React.FC = () => {
  const { showNotification } = useAppStore();
  const [testTitle, setTestTitle] = useState('');
  const [duration, setDuration] = useState(15);
  const [englishRatio, setEnglishRatio] = useState(40);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [selectedQIds, setSelectedQIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/questions')
      .then((res) => res.json())
      .then((data) => {
        setAllQuestions(data || []);
        if (data && data.length > 0) {
          setSelectedQIds(data.map((q: any) => q.id));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching questions for test builder:', err);
        setLoading(false);
      });
  }, []);

  const toggleQuestionSelect = (id: string) => {
    setSelectedQIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const createTest = async () => {
    if (!testTitle) return;

    try {
      const res = await fetch('/api/tests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic_id: 'top-10-2-2',
          title: testTitle,
          description: `Bài kiểm tra với tỷ lệ ${englishRatio}% tiếng Anh`,
          test_type: 'MINI_TEST',
          duration_minutes: duration,
          english_ratio: englishRatio,
          target_language_level: 2,
          created_by: 'usr-teacher-1',
          question_ids: selectedQIds,
        }),
      });

      const data = await res.json();
      if (data.test) {
        showNotification(`Đã tạo bài kiểm tra "${testTitle}" (${englishRatio}% Tiếng Anh) thành công!`);
        setTestTitle('');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-24 md:pb-12">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Test Builder (Thiết Lập Đề Kiểm Tra % Tiếng Anh)
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Cấu hình tỷ lệ % Tiếng Anh linh hoạt trong đề bài phù hợp với trình độ lớp
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
        {/* Basic info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="font-bold text-slate-700">Tên bài kiểm tra: *</label>
            <input
              type="text"
              value={testTitle}
              onChange={(e) => setTestTitle(e.target.value)}
              placeholder="Ví dụ: Kiểm tra 15 phút: Hàm Số Bậc Hai"
              className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700">Thời lượng làm bài (Phút):</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value, 10) || 15)}
              className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white font-bold"
            />
          </div>
        </div>

        {/* Slider for English Ratio */}
        <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-extrabold text-indigo-950 uppercase flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-600" /> Tỷ lệ % Tiếng Anh trong đề (English Ratio):
            </label>
            <span className="text-lg font-black text-indigo-700 bg-white px-3 py-1 rounded-xl border border-indigo-200 shadow-2xs">
              {englishRatio}% Tiếng Anh
            </span>
          </div>

          <input
            type="range"
            min="10"
            max="100"
            step="10"
            value={englishRatio}
            onChange={(e) => setEnglishRatio(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />

          <div className="flex justify-between text-[10px] font-bold text-indigo-800">
            <span>10% (Chủ yếu Tiếng Việt)</span>
            <span>50% (Song ngữ cân bằng)</span>
            <span>100% (Thuần Tiếng Anh)</span>
          </div>
        </div>

        {/* Question Selector List */}
        <div className="space-y-3 pt-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Chọn câu hỏi vào đề ({selectedQIds.length} / {allQuestions.length} câu)
          </h2>

          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {allQuestions.map((q) => {
              const isSelected = selectedQIds.includes(q.id);
              return (
                <div
                  key={q.id}
                  onClick={() => toggleQuestionSelect(q.id)}
                  className={`p-3.5 rounded-2xl border text-xs cursor-pointer flex items-center justify-between transition ${
                    isSelected
                      ? 'bg-teal-50 border-teal-400 font-bold text-teal-950'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-md border flex items-center justify-center text-[10px] ${isSelected ? 'bg-teal-600 border-teal-600 text-white' : 'bg-white'}`}>
                      {isSelected ? '✓' : ''}
                    </span>
                    <MathRenderer content={q.question_en} inline />
                  </div>

                  <span className="text-[10px] text-slate-400">Level {q.language_level}</span>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={createTest}
          disabled={!testTitle || selectedQIds.length === 0}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-md transition"
        >
          Lưu & Gán Đề Kiểm Tra Cho Lớp
        </button>
      </div>
    </div>
  );
};
