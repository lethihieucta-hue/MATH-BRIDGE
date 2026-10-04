import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Compass, Sparkles, Target, Zap, Award, Layers } from "lucide-react";
import { STAGE_DEFINITIONS } from "../data/stages";
import { LearningStage, UserProgress } from "../types";

interface StageRoadmapProps {
  currentStage: LearningStage;
  onSelectStage: (stage: LearningStage) => void;
  userProgress: UserProgress;
  onUpdateProgress: (progress: Partial<UserProgress>) => void;
}

const CALIBRATION_QUESTIONS = [
  {
    question: "1. Khi đọc câu hỏi: 'Evaluate the expression 4x - 7 when x = 5', bạn hiểu yêu cầu là gì?",
    options: [
      { text: "A. Tìm x để biểu thức bằng 0", score: 1 },
      { text: "B. Thay x = 5 vào và tính ra giá trị bằng 13", score: 3 },
      { text: "C. Rút gọn đa thức", score: 2 },
    ],
  },
  {
    question: "2. Cụm từ 'The number of books is AT LEAST 20' được viết thành bất phương trình nào?",
    options: [
      { text: "A. b < 20", score: 1 },
      { text: "B. b ≤ 20", score: 2 },
      { text: "C. b ≥ 20", score: 4 },
    ],
  },
  {
    question: "3. 'The rate of change of y with respect to x is constant' mô tả loại hàm số nào?",
    options: [
      { text: "A. Hàm số bậc nhất (Linear Function: y = mx + b)", score: 5 },
      { text: "B. Hàm số bậc hai (Quadratic)", score: 3 },
      { text: "C. Chưa rõ nghĩa của 'rate of change'", score: 2 },
    ],
  },
];

export const StageRoadmap: React.FC<StageRoadmapProps> = ({
  currentStage,
  onSelectStage,
  userProgress,
  onUpdateProgress,
}) => {
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [calibAnswers, setCalibAnswers] = useState<number[]>([0, 0, 0]);
  const [calibResult, setCalibResult] = useState<LearningStage | null>(null);

  const calculateCalibration = () => {
    const totalScore = calibAnswers.reduce((a, b) => a + b, 0);
    let recommended: LearningStage = 1;
    if (totalScore >= 11) recommended = 6;
    else if (totalScore >= 9) recommended = 5;
    else if (totalScore >= 7) recommended = 4;
    else if (totalScore >= 5) recommended = 3;
    else if (totalScore >= 3) recommended = 2;
    else recommended = 1;

    setCalibResult(recommended);
    onSelectStage(recommended);
    onUpdateProgress({
      currentStage: recommended,
      mathIQ: 100 + recommended * 8,
      englishFluency: recommended <= 2 ? "A2" : recommended <= 4 ? "B2" : "C1",
    });
  };

  return (
    <div className="space-y-6">
      {/* Overview & Radar/Stats Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 border border-indigo-100">
              <Compass className="w-3.5 h-3.5" />
              6-Stage Adaptive Framework
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Lộ trình Tự học Thích ứng 6 Giai đoạn (The 6-Stage Framework)
            </h2>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              Khung sư phạm độc quyền thiết kế cho học sinh chuyển tiếp từ chương trình Việt Nam sang các chứng chỉ quốc tế (SAT Math, AP Calculus, AP Statistics, A-Level).
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-center px-1">
              <span className="text-[10px] text-slate-500 font-bold uppercase block">Math-IQ Index</span>
              <span className="text-xl font-black text-indigo-600 font-mono">
                {userProgress.mathIQ}
              </span>
            </div>
            <div className="w-[1px] h-8 bg-slate-200" />
            <div className="text-center px-1">
              <span className="text-[10px] text-slate-500 font-bold uppercase block">English Fluency</span>
              <span className="text-xl font-black text-emerald-600 font-mono">
                {userProgress.englishFluency}
              </span>
            </div>
            <div className="w-[1px] h-8 bg-slate-200" />
            <div>
              <button
                type="button"
                id="btn-open-calibration"
                onClick={() => setIsCalibrating(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-indigo-200/80 transition-all cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5" />
                Kiểm tra Định vị Stage
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CALIBRATION MODAL */}
      {isCalibrating && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                Bài kiểm tra Định vị Trình độ (3 câu hỏi)
              </h3>
              <button
                type="button"
                onClick={() => setIsCalibrating(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {CALIBRATION_QUESTIONS.map((q, qIdx) => (
                <div key={qIdx} className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                  <span className="font-bold text-slate-900 block">{q.question}</span>
                  <div className="space-y-1.5">
                    {q.options.map((opt, optIdx) => (
                      <label
                        key={optIdx}
                        className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-all ${
                          calibAnswers[qIdx] === opt.score
                            ? "bg-indigo-50 border-indigo-400 text-indigo-900 font-bold shadow-xs"
                            : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`calib-q-${qIdx}`}
                          checked={calibAnswers[qIdx] === opt.score}
                          onChange={() => {
                            const newAns = [...calibAnswers];
                            newAns[qIdx] = opt.score;
                            setCalibAnswers(newAns);
                          }}
                          className="text-indigo-600"
                        />
                        <span>{opt.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {calibResult && (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-xs">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Kết quả: Bạn đã được xếp vào Stage {calibResult} (
                {STAGE_DEFINITIONS[calibResult - 1].name})!
              </div>
            )}

            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setIsCalibrating(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
              >
                Đóng
              </button>
              <button
                type="button"
                id="btn-submit-calibration"
                onClick={calculateCalibration}
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-lg shadow-indigo-200/80 cursor-pointer transition-all"
              >
                Xác nhận Lộ trình
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6-Stage Timeline Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {STAGE_DEFINITIONS.map((def) => {
          const isActive = currentStage === def.stage;
          const isPassed = currentStage > def.stage;

          return (
            <div
              key={def.stage}
              id={`stage-card-${def.stage}`}
              onClick={() => onSelectStage(def.stage)}
              className={`rounded-2xl p-5 border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden shadow-xs ${
                isActive
                  ? "bg-white border-2 border-indigo-600 shadow-lg shadow-indigo-100 ring-2 ring-indigo-600/10"
                  : isPassed
                  ? "bg-white border-emerald-300 hover:border-emerald-500 hover:shadow-md"
                  : "bg-white border-slate-200/80 hover:border-indigo-300 hover:shadow-md"
              }`}
            >
              {/* Stage Badge & English Ratio */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-xs"
                        : isPassed
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {isPassed ? <CheckCircle2 className="w-3.5 h-3.5" /> : null}
                    Stage {def.stage}
                  </span>

                  <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    <span>EN:</span>
                    <span className="text-indigo-600">{def.englishRatio}%</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">{def.name}</h3>
                  <p className="text-xs text-emerald-700 font-bold mt-0.5">{def.vietnameseName}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{def.description}</p>

                {/* Pedagogy Pillar */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-[11px] space-y-1 shadow-xs">
                  <span className="font-bold text-slate-800 block">Kỹ thuật Sư phạm:</span>
                  <p className="text-slate-600 leading-normal">{def.keyPedagogy}</p>
                </div>
              </div>

              {/* Sample Phrase */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-700 block mb-0.5">Ví dụ tương tác:</span>
                <span className="italic text-indigo-900 font-medium">"{def.samplePhrase}"</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
