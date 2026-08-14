import React, { useEffect, useState } from 'react';
import { useAppStore } from '../../lib/store';
import { LevelBadge } from './LevelBadge';
import { apiFetch } from '../../lib/dataService';
import { MathRenderer } from '../math/MathRenderer';
import { AiStepSolverModal } from '../math/AiStepSolverModal';
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
  Activity,
  Compass,
  Cpu,
  Layers,
  FileDown,
} from 'lucide-react';

interface StudentDashboardProps {
  setActiveTab?: (tab: string) => void;
  setSelectedTopicId?: (topicId: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  setActiveTab: propSetActiveTab,
  setSelectedTopicId,
}) => {
  const { user, selectedGrade, currentLevel, setActiveTab: storeSetActiveTab } = useAppStore();
  const setActiveTab = propSetActiveTab || storeSetActiveTab;
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAiSolverOpen, setIsAiSolverOpen] = useState(false);

  useEffect(() => {
    apiFetch('/api/student/dashboard-summary')
      .then((data) => {
        setSummary(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching dashboard summary:', err);
        setLoading(false);
      });
  }, [user, selectedGrade]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-6 animate-pulse">
        <div className="h-40 bg-slate-200 rounded-3xl" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-24 bg-slate-200 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  const meiScore = summary?.mei?.mei_score || 71.3;

  // Formula badge of the day based on Grade
  const mathFormulaBadge =
    selectedGrade === 10
      ? 'y = ax^2 + bx + c \\implies I\\left(-\\frac{b}{2a}, -\\frac{\\Delta}{4a}\\right)'
      : selectedGrade === 11
      ? "f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}"
      : '\\int_a^b f(x)dx = F(b) - F(a)';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-24 md:pb-12">
      {/* Scientific Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#132338] text-white p-6 sm:p-8 border border-slate-800 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
        {/* Subtle geometric light orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] font-bold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-700/60 shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Toán {selectedGrade} KNTT (Bộ GD&ĐT)
              </span>
              <LevelBadge level={currentLevel} />
              <span className="flex items-center gap-1 bg-amber-500/20 text-amber-200 text-xs px-3 py-1 rounded-full font-bold border border-amber-400/30">
                <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{summary?.streak_days || 5} Ngày liên tục</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Xin chào, {user?.full_name || 'Học sinh'}! 👋
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Không gian học Toán THPT bằng Tiếng Anh chuẩn mực. Rèn luyện 4 năng lực MEI: Từ vựng, Đọc hiểu đề thi, Tư duy thuật toán và Diễn đạt toán học song ngữ.
            </p>

            {/* Formula of the day snippet */}
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <span className="text-[10px] font-mono uppercase font-bold text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded-md border border-teal-800">
                Key Formula
              </span>
              <div className="text-xs sm:text-sm text-teal-200 font-mono overflow-x-auto py-0.5">
                <MathRenderer content={mathFormulaBadge} inline />
              </div>
            </div>
          </div>

          {/* MEI Score Widget */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3">
            <div className="w-full sm:w-auto bg-slate-900/90 backdrop-blur-xl rounded-3xl p-5 border border-slate-700/70 text-center min-w-[210px] shadow-lg shadow-black/20">
              <div className="flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-wider text-teal-300 font-bold mb-1">
                <Activity className="w-3.5 h-3.5 text-teal-400" />
                <span>Chỉ số MEI Score</span>
              </div>
              <div className="text-4xl font-black text-amber-300 my-1 font-mono tracking-tight">
                {meiScore} <span className="text-sm font-normal text-slate-400">/100</span>
              </div>
              <p className="text-[10px] text-slate-300 font-medium">
                Năng lực: Level {currentLevel} Bilingual
              </p>
            </div>

            <button
              onClick={() => setIsAiSolverOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-xs rounded-2xl shadow-lg shadow-teal-500/25 transition transform hover:scale-102 cursor-pointer"
            >
              <Cpu className="w-4 h-4" />
              <span>Trợ Lý AI Giải Toán 3 Bước</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 High-Tech Scientific Interactive Labs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <Compass className="w-4 h-4 text-teal-600" />
            <span>Phòng Thí Nghiệm Toán Học Tương Tác (Interactive Math Labs)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Lab 1: Function Grapher */}
          <div
            onClick={() => setActiveTab('grapher')}
            className="sc-card p-5 rounded-3xl cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-mono font-black text-sm group-hover:scale-110 transition-transform">
              f(x)
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                Studio Vẽ Đồ Thị Parabol
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Tương tác thanh trượt hệ số $a, b, c$, tự động tính tọa độ đỉnh và trục đối xứng thời gian thực.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-teal-600 gap-1 pt-1">
              <span>Mở Studio</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Lab 2: Speed Match Minigame */}
          <div
            onClick={() => setActiveTab('minigame')}
            className="sc-card p-5 rounded-3xl cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-base group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors">
                Speed Vocab Arena 60s
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Thử thách phản xạ ghép nối thuật ngữ Toán - Anh với combo streak và âm thanh phát âm.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-amber-600 gap-1 pt-1">
              <span>Vào Đấu Trường</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Lab 3: Math Reading Lab */}
          <div
            onClick={() => setActiveTab('reading')}
            className="sc-card p-5 rounded-3xl cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
              📖
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-700 transition-colors">
                Phòng Đọc Hiểu Đề Toán
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Bóc tách từ khóa (Keywords), nhận diện cấu trúc câu đề bài và phân tích dữ kiện song ngữ.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-indigo-600 gap-1 pt-1">
              <span>Luyện Đọc Đề</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Lab 4: MEI Radar */}
          <div
            onClick={() => setActiveTab('progress')}
            className="sc-card p-5 rounded-3xl cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
              🎯
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Ma Trận Năng Lực MEI
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Biểu đồ mạng nhện 4 trục Năng lực (V, R, P, E), so sánh chuẩn lớp và lộ trình cải thiện AI.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-emerald-600 gap-1 pt-1">
              <span>Xem Radar</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* 6 Core Progress Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {/* Vocab */}
        <div
          onClick={() => setActiveTab('vocabulary')}
          className="sc-card p-4 rounded-2xl cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <BookMarked className="w-4 h-4" />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Từ Vựng Đã Học</p>
          <div className="text-lg font-black text-slate-900 mt-1 font-mono">
            {summary?.vocabulary?.learned || 6} <span className="text-xs text-slate-400 font-normal">/ {summary?.vocabulary?.total || 60}</span>
          </div>
        </div>

        {/* Lessons */}
        <div
          onClick={() => setActiveTab('learn')}
          className="sc-card p-4 rounded-2xl cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Bài Học SGK KNTT</p>
          <div className="text-lg font-black text-slate-900 mt-1 font-mono">
            {summary?.lessons_completed || 6} <span className="text-xs text-slate-400 font-normal">bài</span>
          </div>
        </div>

        {/* Accuracy */}
        <div
          onClick={() => setActiveTab('practice')}
          className="sc-card p-4 rounded-2xl cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Độ Chính Xác</p>
          <div className="text-lg font-black text-emerald-600 mt-1 font-mono">
            {summary?.practice_accuracy || 88}%
          </div>
        </div>

        {/* Tests */}
        <div
          onClick={() => setActiveTab('tests')}
          className="sc-card p-4 rounded-2xl cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <GraduationCap className="w-4 h-4" />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Bài Kiểm Tra</p>
          <div className="text-lg font-black text-slate-900 mt-1 font-mono">
            {summary?.tests_completed || 3} <span className="text-xs text-slate-400 font-normal">đã làm</span>
          </div>
        </div>

        {/* Streak */}
        <div className="sc-card p-4 rounded-2xl">
          <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
            <Flame className="w-4 h-4 fill-amber-500" />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Chuỗi Học Tập</p>
          <div className="text-lg font-black text-amber-600 mt-1 font-mono">
            {summary?.streak_days || 5} <span className="text-xs text-slate-400 font-normal">ngày</span>
          </div>
        </div>

        {/* MEI Card */}
        <div
          onClick={() => setActiveTab('progress')}
          className="sc-card p-4 rounded-2xl cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-4 h-4" />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">MEI Index</p>
          <div className="text-lg font-black text-teal-700 mt-1 font-mono">
            {meiScore} <span className="text-xs text-slate-400 font-normal">pts</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Continue Learning & Recommended */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Continue Learning */}
        <div className="lg:col-span-2 space-y-6">
          <div className="sc-card rounded-3xl p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-teal-600" />
                <h2 className="text-base font-extrabold text-slate-900">
                  Bài Học Gần Đây (Continue Learning)
                </h2>
              </div>
              <button
                onClick={() => setActiveTab('learn')}
                className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
              >
                Tất cả bài học <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-md">
                    Toán {selectedGrade} KNTT
                  </span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 font-medium px-2 py-0.5 rounded-md">
                    Song ngữ Level 2
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {summary?.recent_lesson?.title_vi || 'Bài 16: Hàm số bậc hai & Đồ thị Parabol'}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {summary?.recent_lesson?.title_en || 'Quadratic Functions & Parabola Graph'}
                </p>
              </div>

              <button
                onClick={() => setActiveTab('learn')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md shadow-teal-600/20 transition group whitespace-nowrap cursor-pointer"
              >
                <span>Học Tiếp (Continue)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Learning Path Steps */}
            <div className="pt-2">
              <p className="text-xs font-mono font-bold text-slate-400 mb-3 uppercase tracking-wider">
                Lộ Trình Học Tập Chuẩn Bộ Giáo Dục:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { title: '1. Thuật Ngữ (Vocab)', action: () => setActiveTab('vocabulary'), color: 'bg-teal-50/80 text-teal-800 border-teal-200' },
                  { title: '2. Mẫu Câu (Patterns)', action: () => setActiveTab('sentences'), color: 'bg-sky-50/80 text-sky-800 border-sky-200' },
                  { title: '3. Bài Học (Lessons)', action: () => setActiveTab('learn'), color: 'bg-indigo-50/80 text-indigo-800 border-indigo-200' },
                  { title: '4. Luyện Tập (Practice)', action: () => setActiveTab('practice'), color: 'bg-amber-50/80 text-amber-800 border-amber-200' },
                ].map((step, idx) => (
                  <button
                    key={idx}
                    onClick={step.action}
                    className={`p-3 rounded-xl border text-xs font-bold text-left transition hover:scale-102 cursor-pointer shadow-2xs ${step.color}`}
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
          <div className="sc-card rounded-3xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
              <h2 className="text-base font-extrabold text-slate-900">
                Đề Xuất Cho Bạn (Recommended)
              </h2>
            </div>

            <div className="space-y-2.5">
              {(summary?.recommended_activities || []).map((act: any) => (
                <div
                  key={act.id}
                  onClick={() => {
                    if (act.type === 'VOCABULARY') setActiveTab('vocabulary');
                    else if (act.type === 'READING') setActiveTab('reading');
                    else if (act.type === 'MINI_TEST') setActiveTab('tests');
                  }}
                  className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-teal-50/60 hover:border-teal-300 transition cursor-pointer group flex items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full">
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

      {/* AI Step Solver Modal */}
      <AiStepSolverModal
        isOpen={isAiSolverOpen}
        onClose={() => setIsAiSolverOpen(false)}
        defaultQuestionText={
          selectedGrade === 10
            ? 'Find the coordinates of the vertex of the parabola y = x^2 - 4x + 3.'
            : selectedGrade === 11
            ? 'Find the derivative of f(x) = x^3 - 3x + 2 at x0 = 2.'
            : 'Evaluate the definite integral from 0 to 1 of (3x^2 + 2x) dx.'
        }
      />
    </div>
  );
};

