import React, { useEffect, useState } from 'react';
import { useAppStore } from '../../lib/store';
import { calculateMEI, getMEILevelTitle } from '../../lib/mei';
import { LevelBadge } from './LevelBadge';
import {
  TrendingUp,
  BarChart3,
  Award,
  BookMarked,
  FileQuestion,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const StudentProgressView: React.FC = () => {
  const { user, currentLevel } = useAppStore();
  const [meiData, setMeiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/student/dashboard-summary', {
      headers: { 'x-user-id': user?.id || '' },
    })
      .then((res) => res.json())
      .then((data) => {
        setMeiData(data?.mei || {});
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching MEI progress:', err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-4 animate-pulse">
        <div className="h-28 bg-slate-200 rounded-3xl" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-slate-200 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  const v = meiData?.vocabulary_score || 75;
  const r = meiData?.reading_score || 65;
  const p = meiData?.problem_solving_score || 60;
  const e = meiData?.expression_score || 50;
  const meiScore = meiData?.mei_score || calculateMEI(v, r, p, e);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-24 md:pb-12">
      {/* MEI Main Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-teal-500/20 text-teal-200 text-xs px-3 py-1 rounded-full font-bold border border-teal-400/30">
                Chỉ Số Năng Lực MEI
              </span>
              <LevelBadge level={currentLevel} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Math-English Index (MEI)
            </h1>
            <p className="text-xs sm:text-sm text-teal-100/90 max-w-xl leading-relaxed">
              Công thức đánh giá 4 thành phần: MEI = 0.25V + 0.25R + 0.30P + 0.20E (Vocabulary, Reading, Problem Solving, Expression).
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-center min-w-[200px]">
            <p className="text-[10px] font-bold text-teal-200 uppercase tracking-wider">Điểm Tổng MEI</p>
            <div className="text-4xl font-black text-amber-300 my-1">{meiScore} <span className="text-xs font-normal text-white">/ 100</span></div>
            <p className="text-[11px] font-bold text-teal-100">{getMEILevelTitle(meiScore)}</p>
          </div>
        </div>
      </div>

      {/* 4 MEI Component Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* V - Vocabulary */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <BookMarked className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
              Trọng số 25% (0.25)
            </span>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">V - Math Vocabulary</p>
            <div className="text-2xl font-black text-slate-900 mt-1">{v} <span className="text-xs text-slate-400 font-normal">/100</span></div>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-teal-600 h-full rounded-full" style={{ width: `${v}%` }} />
          </div>
          <p className="text-[11px] text-slate-500">Hiểu & thuộc thuật ngữ toán tiếng Anh</p>
        </div>

        {/* R - Reading */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
              <FileQuestion className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
              Trọng số 25% (0.25)
            </span>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">R - Math Reading</p>
            <div className="text-2xl font-black text-slate-900 mt-1">{r} <span className="text-xs text-slate-400 font-normal">/100</span></div>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-sky-600 h-full rounded-full" style={{ width: `${r}%` }} />
          </div>
          <p className="text-[11px] text-slate-500">Khả năng đọc hiểu cấu trúc đề toán</p>
        </div>

        {/* P - Problem Solving */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
              Trọng số 30% (0.30)
            </span>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">P - Problem Solving</p>
            <div className="text-2xl font-black text-slate-900 mt-1">{p} <span className="text-xs text-slate-400 font-normal">/100</span></div>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full rounded-full" style={{ width: `${p}%` }} />
          </div>
          <p className="text-[11px] text-slate-500">Giải toán bài tập & bài kiểm tra tiếng Anh</p>
        </div>

        {/* E - Expression */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
              Trọng số 20% (0.20)
            </span>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">E - Expression</p>
            <div className="text-2xl font-black text-slate-900 mt-1">{e} <span className="text-xs text-slate-400 font-normal">/100</span></div>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${e}%` }} />
          </div>
          <p className="text-[11px] text-slate-500">Diễn đạt ý tưởng toán học bằng tiếng Anh</p>
        </div>
      </div>

      {/* Gamification Badges */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
        <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          Huy Hiệu Đạt Được (Badges & Achievements)
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { title: 'First 10 Words', desc: 'Đã thuộc 10 từ vựng Toán đầu tiên', unlocked: true, icon: '📚' },
            { title: 'Math Reader', desc: 'Đã phân tích 5 bài toán tiếng Anh', unlocked: true, icon: '📖' },
            { title: 'English Math Challenger', desc: 'Đã hoàn thành bài test tỷ lệ 40% Anh', unlocked: true, icon: '🏆' },
            { title: 'Level 3 Ready', desc: 'Đã sẵn sàng nâng cấp lên Level 3', unlocked: false, icon: '🚀' },
          ].map((b, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border text-center space-y-1.5 transition ${
                b.unlocked
                  ? 'bg-teal-50/60 border-teal-200 text-teal-950'
                  : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
              }`}
            >
              <div className="text-2xl">{b.icon}</div>
              <h3 className="text-xs font-extrabold">{b.title}</h3>
              <p className="text-[10px] leading-tight">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
