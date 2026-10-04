import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  CheckCircle2,
  Clock,
  AlertCircle,
  BookOpen,
  ArrowRight,
  Filter,
  Info,
  Compass,
} from "lucide-react";
import { HighSchoolGrade, UserProgress } from "../types";
import { KNTT_CURRICULUM } from "../data/curriculumKNTT";
import { MATH_TERMS } from "../data/mathTerms";

interface KnowledgeGraphViewProps {
  userProgress: UserProgress;
  onNavigateToTopic?: (grade: HighSchoolGrade, chapterId: string) => void;
}

interface TopicNode {
  id: string;
  grade: HighSchoolGrade;
  titleVi: string;
  titleEn: string;
  category: "Algebra" | "Geometry" | "Trigonometry" | "Calculus" | "Probability";
  masteryPercent: number;
  status: "mastered" | "in_progress" | "needs_review";
  connections: string[];
  termsCount: number;
  x: number;
  y: number;
}

const TOPIC_NODES: TopicNode[] = [
  // Grade 10
  {
    id: "g10_c1",
    grade: 10,
    titleVi: "Mệnh đề & Tập hợp",
    titleEn: "Propositions & Set Theory",
    category: "Algebra",
    masteryPercent: 90,
    status: "mastered",
    connections: ["g10_c2", "g10_c6"],
    termsCount: 8,
    x: 120,
    y: 80,
  },
  {
    id: "g10_c2",
    grade: 10,
    titleVi: "Bất PT bậc nhất 2 ẩn",
    titleEn: "Linear Inequalities in Two Variables",
    category: "Algebra",
    masteryPercent: 75,
    status: "in_progress",
    connections: ["g10_c6", "g11_c1"],
    termsCount: 7,
    x: 280,
    y: 130,
  },
  {
    id: "g10_c3",
    grade: 10,
    titleVi: "Hệ thức lượng trong tam giác",
    titleEn: "Trigonometry & Triangle Relations",
    category: "Trigonometry",
    masteryPercent: 85,
    status: "mastered",
    connections: ["g10_c4", "g11_c1"],
    termsCount: 9,
    x: 120,
    y: 240,
  },
  {
    id: "g10_c4",
    grade: 10,
    titleVi: "Vectơ & Tích vô hướng",
    titleEn: "Vectors & Dot Product",
    category: "Geometry",
    masteryPercent: 60,
    status: "in_progress",
    connections: ["g10_c7", "g12_c2"],
    termsCount: 10,
    x: 280,
    y: 280,
  },
  {
    id: "g10_c6",
    grade: 10,
    titleVi: "Hàm số & Parabol bậc hai",
    titleEn: "Quadratic Functions & Parabolas",
    category: "Algebra",
    masteryPercent: 92,
    status: "mastered",
    connections: ["g11_c1", "g12_c1"],
    termsCount: 12,
    x: 450,
    y: 110,
  },

  // Grade 11
  {
    id: "g11_c1",
    grade: 11,
    titleVi: "Hàm số Lượng giác",
    titleEn: "Trigonometric Functions & Equations",
    category: "Trigonometry",
    masteryPercent: 68,
    status: "in_progress",
    connections: ["g11_c3", "g12_c1"],
    termsCount: 11,
    x: 450,
    y: 240,
  },
  {
    id: "g11_c3",
    grade: 11,
    titleVi: "Giới hạn & Hàm liên tục",
    titleEn: "Limits & Continuous Functions",
    category: "Calculus",
    masteryPercent: 55,
    status: "in_progress",
    connections: ["g11_c9", "g12_c1"],
    termsCount: 8,
    x: 620,
    y: 160,
  },
  {
    id: "g11_c4",
    grade: 11,
    titleVi: "Hình học không gian",
    titleEn: "Solid Geometry & Spatial Relations",
    category: "Geometry",
    masteryPercent: 40,
    status: "needs_review",
    connections: ["g12_c2"],
    termsCount: 14,
    x: 450,
    y: 360,
  },
  {
    id: "g11_c9",
    grade: 11,
    titleVi: "Đạo hàm (Derivatives)",
    titleEn: "Derivatives & Applications",
    category: "Calculus",
    masteryPercent: 50,
    status: "needs_review",
    connections: ["g12_c1", "g12_c4"],
    termsCount: 15,
    x: 770,
    y: 160,
  },

  // Grade 12
  {
    id: "g12_c1",
    grade: 12,
    titleVi: "Ứng dụng Đạo hàm & Khảo sát hàm số",
    titleEn: "Curve Sketching & Extrema (AP Calc)",
    category: "Calculus",
    masteryPercent: 45,
    status: "needs_review",
    connections: ["g12_c4"],
    termsCount: 16,
    x: 920,
    y: 160,
  },
  {
    id: "g12_c2",
    grade: 12,
    titleVi: "Tọa độ Oxyz trong không gian",
    titleEn: "3D Coordinate Geometry & Vectors",
    category: "Geometry",
    masteryPercent: 35,
    status: "needs_review",
    connections: [],
    termsCount: 12,
    x: 680,
    y: 360,
  },
  {
    id: "g12_c4",
    grade: 12,
    titleVi: "Nguyên hàm & Tích phân",
    titleEn: "Antiderivatives & Integrals",
    category: "Calculus",
    masteryPercent: 25,
    status: "needs_review",
    connections: [],
    termsCount: 14,
    x: 920,
    y: 300,
  },
];

export const KnowledgeGraphView: React.FC<KnowledgeGraphViewProps> = ({
  userProgress,
  onNavigateToTopic,
}) => {
  const [selectedGradeFilter, setSelectedGradeFilter] = useState<string>("all");
  const [selectedNode, setSelectedNode] = useState<TopicNode | null>(TOPIC_NODES[4]);

  const filteredNodes = TOPIC_NODES.filter((n) => {
    if (selectedGradeFilter === "all") return true;
    return n.grade.toString() === selectedGradeFilter;
  });

  const getStatusBadge = (status: TopicNode["status"]) => {
    if (status === "mastered") {
      return (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Đã thuần thục
        </span>
      );
    }
    if (status === "in_progress") {
      return (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1">
          <Clock className="w-3 h-3 text-amber-600" /> Đang củng cố
        </span>
      );
    }
    return (
      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 flex items-center gap-1">
        <AlertCircle className="w-3 h-3 text-rose-600" /> Cần ôn tập
      </span>
    );
  };

  const getNodeColor = (node: TopicNode) => {
    if (node.status === "mastered") return "#10b981"; // Emerald
    if (node.status === "in_progress") return "#f59e0b"; // Amber
    return "#f43f5e"; // Rose
  };

  // Find related vocabulary terms for selected node
  const relatedTerms = MATH_TERMS.filter(
    (t) => t.gradeLevel === selectedNode?.grade
  ).slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-slate-900">
              Interactive Knowledge Dependency Graph
            </h4>
            <p className="text-[11px] text-slate-500">
              Mạng lưới quan hệ liên môn Toán học THPT và Thuật ngữ Tiếng Anh
            </p>
          </div>
        </div>

        {/* Grade Filter */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
          <button
            type="button"
            onClick={() => setSelectedGradeFilter("all")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              selectedGradeFilter === "all"
                ? "bg-white text-indigo-600 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Tất cả (Lớp 10-12)
          </button>
          <button
            type="button"
            onClick={() => setSelectedGradeFilter("10")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              selectedGradeFilter === "10"
                ? "bg-white text-indigo-600 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Lớp 10
          </button>
          <button
            type="button"
            onClick={() => setSelectedGradeFilter("11")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              selectedGradeFilter === "11"
                ? "bg-white text-indigo-600 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Lớp 11
          </button>
          <button
            type="button"
            onClick={() => setSelectedGradeFilter("12")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              selectedGradeFilter === "12"
                ? "bg-white text-indigo-600 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Lớp 12
          </button>
        </div>
      </div>

      {/* Main Grid: Visual Graph + Selected Node Inspection Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 8 Cols: Interactive SVG Graph Canvas */}
        <div className="lg:col-span-8 bg-slate-950 rounded-3xl p-4 sm:p-6 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#6366f1 1px, transparent 1px), radial-gradient(#6366f1 1px, #020617 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* SVG Graph Canvas */}
          <svg className="w-full h-[400px] relative z-10" viewBox="0 0 1050 450">
            <defs>
              <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Render connecting edges */}
            {TOPIC_NODES.map((node) =>
              node.connections.map((targetId) => {
                const targetNode = TOPIC_NODES.find((n) => n.id === targetId);
                if (!targetNode) return null;
                const isHighlighted =
                  selectedNode?.id === node.id || selectedNode?.id === targetNode.id;

                return (
                  <line
                    key={`${node.id}-${targetId}`}
                    x1={node.x}
                    y1={node.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke={isHighlighted ? "#818cf8" : "#334155"}
                    strokeWidth={isHighlighted ? 3 : 1.5}
                    strokeDasharray={isHighlighted ? "none" : "4,4"}
                    strokeOpacity={isHighlighted ? 0.9 : 0.4}
                  />
                );
              })
            )}

            {/* Render Nodes */}
            {filteredNodes.map((node) => {
              const isSelected = selectedNode?.id === node.id;
              const color = getNodeColor(node);

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => setSelectedNode(node)}
                  className="cursor-pointer group"
                >
                  {/* Outer pulse when selected */}
                  {isSelected && (
                    <circle
                      r="34"
                      fill={color}
                      opacity="0.25"
                      className="animate-ping"
                    />
                  )}

                  {/* Main Node Circle */}
                  <circle
                    r={isSelected ? "26" : "20"}
                    fill="#0f172a"
                    stroke={color}
                    strokeWidth={isSelected ? "4" : "2.5"}
                    className="transition-all duration-300"
                  />

                  {/* Inner text: Grade badge */}
                  <text
                    textAnchor="middle"
                    dy="4"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    L{node.grade}
                  </text>

                  {/* Label Text below node */}
                  <text
                    textAnchor="middle"
                    dy="40"
                    fill={isSelected ? "#f8fafc" : "#94a3b8"}
                    fontSize="11"
                    fontWeight={isSelected ? "bold" : "normal"}
                    fontFamily="sans-serif"
                    className="select-none"
                  >
                    {node.titleVi}
                  </text>

                  {/* Mastery % badge */}
                  <text
                    textAnchor="middle"
                    dy="54"
                    fill={color}
                    fontSize="9.5"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {node.masteryPercent}%
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Graph Legend */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400 relative z-10">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Đã thuần thục (≥80%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Đang học (50-79%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" /> Cần ôn lại (&lt;50%)
              </span>
            </div>
            <span className="text-slate-500 italic">Nhấp vào từng node để xem chi tiết</span>
          </div>
        </div>

        {/* Right 4 Cols: Selected Node Detail Panel */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-5">
          {selectedNode ? (
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 inline-block mb-1.5">
                    Toán Lớp {selectedNode.grade} • {selectedNode.category}
                  </span>
                  <h3 className="font-black text-base text-slate-900 leading-snug">
                    {selectedNode.titleVi}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium italic mt-0.5">
                    {selectedNode.titleEn}
                  </p>
                </div>
                {getStatusBadge(selectedNode.status)}
              </div>

              {/* Mastery Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600">Độ thuần thục</span>
                  <span className="text-indigo-600">{selectedNode.masteryPercent}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${selectedNode.masteryPercent}%`,
                      backgroundColor: getNodeColor(selectedNode),
                    }}
                  />
                </div>
              </div>

              {/* Related Key Terms */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Thuật ngữ Then chốt ({relatedTerms.length} từ tiêu biểu):</span>
                </span>
                <div className="space-y-1.5">
                  {relatedTerms.map((term) => (
                    <div
                      key={term.id}
                      className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60 text-xs flex items-center justify-between"
                    >
                      <span className="font-bold text-slate-900">{term.term}</span>
                      <span className="text-slate-600 text-[11px]">
                        {term.vietnameseMeaning}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Jump Button */}
              {onNavigateToTopic && (
                <button
                  type="button"
                  onClick={() =>
                    onNavigateToTopic(selectedNode.grade, selectedNode.id)
                  }
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Học chuyên đề này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Info className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-xs">Chọn một chuyên đề trên bản đồ để xem chi tiết</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
