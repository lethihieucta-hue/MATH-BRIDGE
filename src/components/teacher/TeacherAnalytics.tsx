import React, { useEffect, useState } from 'react';
import { apiFetch } from '../../lib/dataService';
import { BarChart3, Users, AlertCircle, HelpCircle, Lightbulb, Zap, TrendingUp } from 'lucide-react';

export const TeacherAnalytics: React.FC = () => {
  const [classAnalytics, setClassAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch<any>('/api/teacher/classes/cls-10a1/analytics')
      .then((data) => {
        setClassAnalytics(data || {});
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching analytics:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-4 animate-pulse">
        <div className="h-12 bg-slate-200 rounded-2xl w-64" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-44 bg-slate-200 rounded-3xl" />
          ))}
        </div>
      </div>
    );
  }

  const errorData = classAnalytics?.diagnostic_errors || {
    language_errors: 45,
    math_errors: 30,
    math_and_language_errors: 25,
  };

  const hintData = classAnalytics?.hint_usage || {
    vocabulary: 60,
    translation: 25,
    formula: 15,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-24 md:pb-12">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Phân Tích Chẩn Đoán Lớp 10A1 (Class Analytics & Diagnostics)
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Phân biệt nguyên nhân học sinh làm sai: Lỗi Ngôn Ngữ vs Lỗi Tư Duy Toán
            </p>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Sĩ số học sinh</p>
          <p className="text-3xl font-black text-slate-900">38 học sinh</p>
          <p className="text-xs text-teal-700 font-bold">Lớp 10A1 • THPT Châu Thành A</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Điểm MEI Trung Bình Lớp</p>
          <p className="text-3xl font-black text-teal-700">62.5 / 100</p>
          <p className="text-xs text-slate-500">Mức Level 2: Developing Math-English</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Loại Hint được sử dụng nhiều nhất</p>
          <p className="text-2xl font-black text-amber-600">Từ vựng (Vocab Hint)</p>
          <p className="text-xs text-slate-500">Chiếm 60% tổng lượt bấm trợ giúp</p>
        </div>
      </div>

      {/* Diagnostic Error Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Error Breakdown */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
          <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-rose-500" />
            Phân Tích Nguyên Nhân Lỗi Sai (Diagnostic Error)
          </h2>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-rose-700">Lỗi Ngôn Ngữ (Language Error - Không hiểu từ vựng)</span>
                <span>{errorData.language_errors}%</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full rounded-full" style={{ width: `${errorData.language_errors}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-amber-700">Lỗi Tư Duy Toán (Math Error - Hiểu đề nhưng tính sai)</span>
                <span>{errorData.math_errors}%</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${errorData.math_errors}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-purple-700">Kết hợp cả Toán & Ngôn Ngữ</span>
                <span>{errorData.math_and_language_errors}%</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full rounded-full" style={{ width: `${errorData.math_and_language_errors}%` }} />
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-950 font-medium">
            💡 <span className="font-bold">Đề xuất cho giáo viên:</span> 45% lỗi sai đến từ từ vựng. Bạn nên tăng thời lượng ôn tập Flashcard 10 từ vựng chủ đề "Parabola & Quadratic Functions" trước khi cho làm bài kiểm tra tiếp theo.
          </div>
        </div>

        {/* Level Distribution */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
          <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600" />
            Phân Bố Level Scaffolding Học Sinh
          </h2>

          <div className="space-y-3">
            {[
              { level: 'Level 1: Math Vocabulary Beginner', count: 8, percent: 21 },
              { level: 'Level 2: Math Sentences Developing', count: 18, percent: 47 },
              { level: 'Level 3: Math Problems Intermediate', count: 10, percent: 26 },
              { level: 'Level 4 & 5: Advanced Math Communicator', count: 2, percent: 6 },
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-800">{item.level}</span>
                  <span className="text-teal-700">{item.count} học sinh ({item.percent}%)</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-teal-600 h-full rounded-full" style={{ width: `${item.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
