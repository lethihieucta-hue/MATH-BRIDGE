import React, { useState, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import { Sliders, Eye, TrendingUp, Sparkles, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';

export const InteractiveFunctionGrapher: React.FC = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(-4);
  const [c, setC] = useState<number>(3);

  // SVG dimensions
  const width = 500;
  const height = 350;
  const originX = width / 2;
  const originY = height / 2;
  const scale = 25; // pixels per unit

  // Math properties
  const vertexX = useMemo(() => {
    if (a === 0) return 0;
    return -b / (2 * a);
  }, [a, b]);

  const vertexY = useMemo(() => {
    if (a === 0) return c;
    const delta = b * b - 4 * a * c;
    return -delta / (4 * a);
  }, [a, b, c]);

  const delta = useMemo(() => b * b - 4 * a * c, [a, b, c]);

  const roots = useMemo(() => {
    if (a === 0) {
      if (b === 0) return [];
      return [-c / b];
    }
    if (delta < 0) return [];
    if (delta === 0) return [-b / (2 * a)];
    return [
      (-b - Math.sqrt(delta)) / (2 * a),
      (-b + Math.sqrt(delta)) / (2 * a),
    ];
  }, [a, b, c, delta]);

  // Generate curve path
  const curvePath = useMemo(() => {
    const points: string[] = [];
    const minX = -10;
    const maxX = 10;
    const step = 0.2;

    for (let x = minX; x <= maxX; x += step) {
      const y = a * x * x + b * x + c;
      const screenX = originX + x * scale;
      const screenY = originY - y * scale;

      // Keep within bounds
      if (screenY >= -100 && screenY <= height + 100) {
        if (points.length === 0) {
          points.push(`M ${screenX} ${screenY}`);
        } else {
          points.push(`L ${screenX} ${screenY}`);
        }
      }
    }
    return points.join(' ');
  }, [a, b, c, originX, originY, scale]);

  const screenVertexX = originX + vertexX * scale;
  const screenVertexY = originY - vertexY * scale;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-24 md:pb-12">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Interactive Parabola Studio (Mô Phỏng Đồ Thị Parabol)
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Thay đổi hệ số a, b, c để quan sát tọa độ Đỉnh (Vertex), Trục đối xứng (Axis of Symmetry) theo thời gian thực
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Controls & Sliders */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-5">
          <div className="flex items-center justify-between border-b pb-3">
            <span className="font-extrabold text-xs text-slate-900 uppercase">Hàm Số Bậc Hai:</span>
            <div className="font-mono text-sm font-black text-teal-800 bg-teal-50 px-3 py-1 rounded-xl border border-teal-200">
              <MathRenderer content={`y = ${a}x^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}`} inline />
            </div>
          </div>

          {/* Slider a */}
          <div className="space-y-1 text-xs">
            <div className="flex justify-between font-bold text-slate-700">
              <span>Hệ số a (Leading coefficient):</span>
              <span className="text-teal-700 font-mono text-sm font-black">{a}</span>
            </div>
            <input
              type="range"
              min={-5}
              max={5}
              step={0.5}
              value={a}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setA(val === 0 ? 0.5 : val); // prevent division by zero
              }}
              className="w-full h-2 bg-slate-200 rounded-lg accent-teal-600 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">
              {a > 0 ? '• a > 0: Parabola opens upwards (Bề lõm quay lên)' : '• a < 0: Parabola opens downwards (Bề lõm quay xuống)'}
            </p>
          </div>

          {/* Slider b */}
          <div className="space-y-1 text-xs">
            <div className="flex justify-between font-bold text-slate-700">
              <span>Hệ số b (Linear coefficient):</span>
              <span className="text-teal-700 font-mono text-sm font-black">{b}</span>
            </div>
            <input
              type="range"
              min={-10}
              max={10}
              step={1}
              value={b}
              onChange={(e) => setB(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg accent-teal-600 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">
              • Vị trí trục đối xứng $x = -b / (2a) = {vertexX.toFixed(2)}$
            </p>
          </div>

          {/* Slider c */}
          <div className="space-y-1 text-xs">
            <div className="flex justify-between font-bold text-slate-700">
              <span>Hệ số c (Constant term / Y-intercept):</span>
              <span className="text-teal-700 font-mono text-sm font-black">{c}</span>
            </div>
            <input
              type="range"
              min={-10}
              max={10}
              step={1}
              value={c}
              onChange={(e) => setC(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg accent-teal-600 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">
              • Giao điểm với trục tung $Oy: (0, {c})$
            </p>
          </div>

          {/* Key English Terminology Table */}
          <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
            <p className="font-extrabold text-slate-800 text-[11px] uppercase">Thuật Ngữ Toán Học Tương Ứng:</p>
            <div className="space-y-1.5 text-[11px]">
              <div className="p-2 rounded-xl bg-teal-50/70 border border-teal-200 flex justify-between">
                <span className="font-bold text-teal-950">Vertex (Tọa độ đỉnh I):</span>
                <span className="font-mono font-bold text-teal-800">({vertexX.toFixed(2)}, {vertexY.toFixed(2)})</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex justify-between">
                <span className="font-bold text-slate-700">Axis of Symmetry (Trục ĐX):</span>
                <span className="font-mono font-bold text-slate-900">x = {vertexX.toFixed(2)}</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex justify-between">
                <span className="font-bold text-slate-700">Discriminant $\Delta$:</span>
                <span className="font-mono font-bold text-slate-900">{delta.toFixed(2)} ({delta > 0 ? '2 roots' : delta === 0 ? '1 double root' : 'No real roots'})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: SVG Graph Plotter */}
        <div className="lg:col-span-7 bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col items-center justify-between">
          <div className="w-full flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
            <span className="font-bold text-teal-400 flex items-center gap-1.5">
              <Eye className="w-4 h-4" /> Cartesian Coordinate System ($Oxy$)
            </span>
            <span className="text-[10px] text-slate-400 font-mono">1 grid unit = 1.0</span>
          </div>

          <div className="my-4 overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 w-full flex justify-center">
            <svg width={width} height={height} className="overflow-visible select-none">
              {/* Grid Lines */}
              {[-8, -6, -4, -2, 2, 4, 6, 8].map((v) => (
                <g key={`grid-${v}`}>
                  {/* Vertical */}
                  <line
                    x1={originX + v * scale}
                    y1={0}
                    x2={originX + v * scale}
                    y2={height}
                    stroke="#334155"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                  />
                  {/* Horizontal */}
                  <line
                    x1={0}
                    y1={originY - v * scale}
                    x2={width}
                    y2={originY - v * scale}
                    stroke="#334155"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                  />
                </g>
              ))}

              {/* Axes Ox & Oy */}
              <line x1={0} y1={originY} x2={width} y2={originY} stroke="#94a3b8" strokeWidth="1.5" />
              <line x1={originX} y1={0} x2={originX} y2={height} stroke="#94a3b8" strokeWidth="1.5" />

              {/* Axis Labels */}
              <text x={width - 15} y={originY - 8} fill="#94a3b8" fontSize="12" fontWeight="bold">x</text>
              <text x={originX + 8} y={15} fill="#94a3b8" fontSize="12" fontWeight="bold">y</text>
              <text x={originX - 12} y={originY + 14} fill="#64748b" fontSize="10">O</text>

              {/* Axis of Symmetry (Dotted Line) */}
              <line
                x1={screenVertexX}
                y1={0}
                x2={screenVertexX}
                y2={height}
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />

              {/* Parabola Curve */}
              <path d={curvePath} fill="none" stroke="#14b8a6" strokeWidth="3" />

              {/* Vertex Point I */}
              {screenVertexX >= 0 && screenVertexX <= width && screenVertexY >= 0 && screenVertexY <= height && (
                <g>
                  <circle cx={screenVertexX} cy={screenVertexY} r="5" fill="#f43f5e" />
                  <text
                    x={screenVertexX + 8}
                    y={screenVertexY - 8}
                    fill="#f43f5e"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    I({vertexX.toFixed(1)}, {vertexY.toFixed(1)})
                  </text>
                </g>
              )}

              {/* Y-intercept Point */}
              <circle cx={originX} cy={originY - c * scale} r="4" fill="#a855f7" />

              {/* Roots X-intercepts */}
              {roots.map((r, idx) => (
                <circle
                  key={idx}
                  cx={originX + r * scale}
                  cy={originY}
                  r="4"
                  fill="#38bdf8"
                />
              ))}
            </svg>
          </div>

          {/* Graph Legend */}
          <div className="w-full flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold text-slate-300 pt-2 border-t border-slate-800">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-teal-500" /> Parabola Curve
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500" /> Vertex Point I
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500" /> Axis of Symmetry
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-sky-400" /> X-intercepts (Roots)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
