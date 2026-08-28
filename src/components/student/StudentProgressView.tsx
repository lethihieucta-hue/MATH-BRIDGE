import React, { useEffect, useState } from 'react';
import { useAppStore } from '../../lib/store';
import { calculateMEI, getMEILevelTitle } from '../../lib/mei';
import { LevelBadge } from './LevelBadge';
import { apiFetch } from '../../lib/dataService';
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
  PieChart,
  Bot,
  ArrowRight,
} from 'lucide-react';

export const StudentProgressView: React.FC = () => {
  const { user, currentLevel, setActiveTab } = useAppStore();
  const [meiData, setMeiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch('/api/student/dashboard-summary')
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

  const v = meiData?.vocabulary_score || 72.5;
  const r = meiData?.reading_score || 68.0;
  const p = meiData?.problem_solving_score || 75.0;
  const e = meiData?.expression_score || 60.0;
  const meiScore = meiData?.mei_score || calculateMEI(v, r, p, e);

  // Radar Chart Calculations
  // Center (150, 150), radius = 100
  // Angles: V (top: 90 deg / -pi/2), R (right: 0 deg), P (bottom: -90 deg / pi/2), E (left: 180 deg / pi)
  const cx = 150;
  const cy = 150;
  const maxR = 100;

  const getCoordinates = (val: number, angleRad: number) => {
    const dist = (val / 100) * maxR;
    const x = cx + dist * Math.cos(angleRad);
    const y = cy - dist * Math.sin(angleRad);
    return { x, y };
  };

  const pV = getCoordinates(v, Math.PI / 2); // Top
  const pR = getCoordinates(r, 0);           // Right
  const pP = getCoordinates(p, -Math.PI / 2); // Bottom
  const pE = getCoordinates(e, Math.PI);      // Left

  const radarPolygonPath = `${pV.x},${pV.y} ${pR.x},${pR.y} ${pP.x},${pP.y} ${pE.x},${pE.y}`;

  // Class Benchmark polygon (avg: 65, 60, 62, 55)
  const bV = getCoordinates(65, Math.PI / 2);
  const bR = getCoordinates(60, 0);
  const bP = getCoordinates(62, -Math.PI / 2);
  const bE = getCoordinates(55, Math.PI);
  const benchmarkPolygon = `${bV.x},${bV.y} ${bR.x},${bR.y} ${bP.x},${bP.y} ${bE.x},${bE.y}`;

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
              {'Mô hình đánh giá 4 năng lực toán tiếng Anh cốt lõi: $\\text{MEI} = 0.25V + 0.25R + 0.30P + 0.20E$.'}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-center min-w-[200px]">
            <p className="text-[10px] font-bold text-teal-200 uppercase tracking-wider">Điểm Tổng MEI</p>
            <div className="text-4xl font-black text-amber-300 my-1">{meiScore} <span className="text-xs font-normal text-white">/ 100</span></div>
            <p className="text-[11px] font-bold text-teal-100">{getMEILevelTitle(meiScore)}</p>
          </div>
        </div>
      </div>

      {/* Visual Radar Chart & Analysis Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive SVG Radar Chart */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs flex flex-col items-center justify-between">
          <div className="w-full flex items-center justify-between border-b pb-3 text-xs">
            <h3 className="font-extrabold text-slate-900 flex items-center gap-1.5">
              <PieChart className="w-4 h-4 text-teal-600" />
              <span>Biểu Đồ Radar 4 Trục Năng Lực MEI</span>
            </h3>
            <span className="text-[10px] text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
              Level {currentLevel}
            </span>
          </div>

          <div className="my-4 select-none flex justify-center">
            <svg width={300} height={300} className="overflow-visible">
              {/* Radar Background Grids */}
              {[25, 50, 75, 100].map((ring) => {
                const r = (ring / 100) * maxR;
                return (
                  <polygon
                    key={ring}
                    points={`${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`}
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                );
              })}

              {/* Axes Lines */}
              <line x1={cx} y1={cy - maxR} x2={cx} y2={cy + maxR} stroke="#cbd5e1" strokeWidth="1" />
              <line x1={cx - maxR} y1={cy} x2={cx + maxR} y2={cy} stroke="#cbd5e1" strokeWidth="1" />

              {/* Class Benchmark Area */}
              <polygon
                points={benchmarkPolygon}
                fill="#94a3b8"
                fillOpacity="0.15"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="3,3"
              />

              {/* Student MEI Polygon */}
              <polygon
                points={radarPolygonPath}
                fill="#0d9488"
                fillOpacity="0.35"
                stroke="#0d9488"
                strokeWidth="2.5"
              />

              {/* Point Markers */}
              <circle cx={pV.x} cy={pV.y} r="4" fill="#0d9488" />
              <circle cx={pR.x} cy={pR.y} r="4" fill="#0284c7" />
              <circle cx={pP.x} cy={pP.y} r="4" fill="#f59e0b" />
              <circle cx={pE.x} cy={pE.y} r="4" fill="#6366f1" />

              {/* Axis Labels */}
              <text x={cx} y={cy - maxR - 12} textAnchor="middle" fill="#0d9488" fontSize="11" fontWeight="bold">
                V (Vocab: {v})
              </text>
              <text x={cx + maxR + 10} y={cy + 4} textAnchor="start" fill="#0284c7" fontSize="11" fontWeight="bold">
                R (Reading: {r})
              </text>
              <text x={cx} y={cy + maxR + 18} textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">
                P (Problem Solving: {p})
              </text>
              <text x={cx - maxR - 10} y={cy + 4} textAnchor="end" fill="#6366f1" fontSize="11" fontWeight="bold">
                E (Expression: {e})
              </text>
            </svg>
          </div>

          <div className="w-full flex items-center justify-center gap-4 text-[11px] font-bold text-slate-500 pt-2 border-t">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-teal-600" /> Điểm Của Bạn
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-slate-400" /> Trung Bình Lớp
            </span>
          </div>
        </div>

        {/* Right: AI Learning Recommendations */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 border-b pb-3">
              <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Bot className="w-4 h-4 text-teal-700" />
              </div>
              <div>
                <h3 className="font-extrabold text-xs text-slate-900">
                  Phân Tích & Lộ Trình Đề Xuất Tự Động (AI Diagnosis)
                </h3>
                <p className="text-[11px] text-slate-500">
                  Dựa trên năng lực 4 thành phần MEI của bạn
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Điểm mạnh nổi bật (P - Problem Solving: {p}/100):</strong>
                  <p className="text-slate-600 mt-0.5">
                    Bạn giải quyết các phép toán số học và đồ thị hàm số rất tốt khi đã nắm rõ công thức.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Cần cải thiện (E - Expression: {e}/100):</strong>
                  <p className="text-slate-600 mt-0.5">
                    Cần luyện tập thêm kỹ năng giải thích từng bước giải bài toán bằng tiếng Anh với các mẫu câu chuẩn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t flex flex-col sm:flex-row items-center gap-2">
            <button
              onClick={() => setActiveTab('sentences')}
              className="w-full sm:w-auto flex-1 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-1.5"
            >
              <span>Học Mẫu Câu Diễn Đạt (E)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className="w-full sm:w-auto flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
            >
              <span>Luyện Tập Thêm (P)</span>
            </button>
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
