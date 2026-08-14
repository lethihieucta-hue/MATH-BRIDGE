import React, { useEffect, useState } from 'react';
import { useAppStore } from '../../lib/store';
import { LevelBadge } from './LevelBadge';
import {
  BookMarked,
  CheckCircle2,
  Flame,
  Award,
  ArrowRight,
  Sparkles,
  TrendingUp,
  FileQuestion,
  PlayCircle,
  GraduationCap,
  ShieldCheck,
  ChevronRight,
  Clock,
  Zap,
} from 'lucide-react';

interface StudentDashboardProps {
  setActiveTab: (tab: string) => void;
  setSelectedTopicId?: (topicId: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  setActiveTab,
  setSelectedTopicId,
}) => {
  const { user, selectedGrade, currentLevel } = useAppStore();
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/student/dashboard-summary', {
      headers: { 'x-user-id': user?.id || '' },
    })
      .then((res) => res.json())
      .then((data) => {
        setSummary(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching dashboard summary:', err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-6 animate-pulse">
        <div className="h-28 bg-slate-200 rounded-3xl" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-24 bg-slate-200 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  const meiScore = summary?.mei?.mei_score || 63.8;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-24 md:pb-12">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-teal-700/80 text-teal-100 text-xs px-3 py-1 rounded-full font-bold border border-teal-500/30">
                Lớp {selectedGrade}
              </span>
              <LevelBadge level={currentLevel} />
              <span className="flex items-center gap-1 bg-amber-500/20 text-amber-200 text-xs px-2.5 py-1 rounded-full font-bold border border-amber-400/30">
                <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{summary?.streak_days || 5} Ngày liên tục</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Chào mừng, {user?.full_name || 'Học sinh'}! 👋
            </h1>
            <p className="text-teal-100/90 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Từng bước làm quen thuật ngữ toán tiếng Anh với cơ chế Scaffolding. Bạn đang ở Level 2: Đọc và hiểu các câu lệnh Toán tiếng Anh tiêu chuẩn.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center min-w-[180px]">
            <p className="text-[11px] uppercase tracking-wider text-teal-200 font-bold">Chỉ số MEI (Math-English Index)</p>
            <div className="text-3xl font-black text-amber-300 my-1">{meiScore} <span className="text-xs font-normal text-white">/100</span></div>
            <p className="text-[10px] text-teal-100 font-medium">Xếp loại: Level {currentLevel} Bilingual</p>
          </div>
        </div>
      </div>

      {/* 6 Core Progress Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {/* Vocab */}
        <div
          onClick={() => setActiveTab('vocabulary')}
          className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-teal-300 hover:shadow-md transition cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <BookMarked className="w-5 h-5" />
          </div>
          <p className="text-[11px] text-slate-500 font-bold uppercase">Từ Vựng Đã Học</p>
          <div className="text-xl font-extrabold text-slate-900 mt-1">
            {summary?.vocabulary?.learned || 3} <span className="text-xs text-slate-400 font-normal">/ {summary?.vocabulary?.total || 12}</span>
          </div>
        </div>

        {/* Lessons */}
        <div
          onClick={() => setActiveTab('learn')}
          className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-teal-300 hover:shadow-md transition cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <p className="text-[11px] text-slate-500 font-bold uppercase">Bài Học Hoàn Thành</p>
          <div className="text-xl font-extrabold text-slate-900 mt-1">
            {summary?.lessons_completed || 4} <span className="text-xs text-slate-400 font-normal">bài</span>
          </div>
        </div>

        {/* Accuracy */}
        <div
          onClick={() => setActiveTab('practice')}
          className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-teal-300 hover:shadow-md transition cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="text-[11px] text-slate-500 font-bold uppercase">Độ Chính Xác</p>
          <div className="text-xl font-extrabold text-emerald-600 mt-1">
            {summary?.practice_accuracy || 85}%
          </div>
        </div>

        {/* Tests */}
        <div
          onClick={() => setActiveTab('tests')}
          className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-teal-300 hover:shadow-md transition cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <p className="text-[11px] text-slate-500 font-bold uppercase">Bài Kiểm Tra</p>
          <div className="text-xl font-extrabold text-slate-900 mt-1">
            {summary?.tests_completed || 1} <span className="text-xs text-slate-400 font-normal">đã làm</span>
          </div>
        </div>

        {/* Streak */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
            <Flame className="w-5 h-5 fill-amber-500" />
          </div>
          <p className="text-[11px] text-slate-500 font-bold uppercase">Chuỗi Học Tập</p>
          <div className="text-xl font-extrabold text-amber-600 mt-1">
            {summary?.streak_days || 5} <span className="text-xs text-slate-400 font-normal">ngày</span>
          </div>
        </div>

        {/* MEI Card */}
        <div
          onClick={() => setActiveTab('progress')}
          className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-teal-300 hover:shadow-md transition cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-5 h-5" />
          </div>
          <p className="text-[11px] text-slate-500 font-bold uppercase">Math-English Index</p>
          <div className="text-xl font-extrabold text-teal-700 mt-1">
            {meiScore} <span className="text-xs text-slate-400 font-normal">pts</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Continue Learning & Recommended */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Continue Learning */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-teal-600" />
                <h2 className="text-base font-extrabold text-slate-900">Bài Học Gần Đây (Continue Learning)</h2>
              </div>
              <button
                onClick={() => setActiveTab('learn')}
                className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
              >
                Tất cả bài học <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-md">
                    Toán {selectedGrade} - Chương 2
                  </span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 font-medium px-2 py-0.5 rounded-md">
                    Song ngữ Level 2
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-800">
                  {summary?.recent_lesson?.title_vi || 'Bài 1: Hàm số bậc hai & Đỉnh Parabol'}
                </h3>
                <p className="text-xs text-slate-500">
                  {summary?.recent_lesson?.title_en || 'Quadratic Functions & Parabola Vertex'}
                </p>
              </div>

              <button
                onClick={() => setActiveTab('learn')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md shadow-teal-600/20 transition group whitespace-nowrap"
              >
                <span>Học Tiếp (Continue)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Learning Path Steps */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-700 mb-3 uppercase tracking-wider">
                Lộ Trình Học Tập Chuẩn (Student Learning Path):
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { title: '1. Vocabulary', action: () => setActiveTab('vocabulary'), color: 'bg-teal-50 text-teal-700 border-teal-200' },
                  { title: '2. Sentence Patterns', action: () => setActiveTab('sentences'), color: 'bg-sky-50 text-sky-700 border-sky-200' },
                  { title: '3. Math Reading', action: () => setActiveTab('reading'), color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
                  { title: '4. Practice & Test', action: () => setActiveTab('practice'), color: 'bg-amber-50 text-amber-700 border-amber-200' },
                ].map((step, idx) => (
                  <button
                    key={idx}
                    onClick={step.action}
                    className={`p-2.5 rounded-xl border text-xs font-bold text-left transition hover:scale-102 ${step.color}`}
                  >
                    {step.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Recommended For You */}
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
              <h2 className="text-base font-extrabold text-slate-900">Đề Xuất Cho Bạn (Recommended)</h2>
            </div>

            <div className="space-y-3">
              {(summary?.recommended_activities || []).map((act: any) => (
                <div
                  key={act.id}
                  onClick={() => {
                    if (act.type === 'VOCABULARY') setActiveTab('vocabulary');
                    else if (act.type === 'READING') setActiveTab('reading');
                    else if (act.type === 'MINI_TEST') setActiveTab('tests');
                  }}
                  className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-teal-50/50 hover:border-teal-300 transition cursor-pointer group flex items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                      {act.type}
                    </span>
                    <h3 className="text-xs font-bold text-slate-800 group-hover:text-teal-900">
                      {act.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
