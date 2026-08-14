import React, { useState } from 'react';
import {
  GeminiModelId,
  explainMathStep1_LanguageAndStructure,
  explainMathStep2_StrategyAndFormulas,
  explainMathStep3_SolutionAndPractice,
  hasApiKey,
} from '../../lib/geminiService';
import { MathRenderer } from './MathRenderer';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  X,
  RefreshCw,
  Layers,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Lightbulb,
  FileCheck,
  AlertTriangle,
  Key,
} from 'lucide-react';

interface AiStepSolverModalProps {
  isOpen: boolean;
  onClose: () => void;
  problemText: string;
  problemTitle?: string;
  onOpenSettings?: () => void;
}

type StepStatus = 'IDLE' | 'PROCESSING' | 'COMPLETED' | 'STOPPED_ERROR';

interface StepData {
  status: StepStatus;
  content: string;
  modelUsed?: GeminiModelId;
  fallbackCount: number;
  rawError?: string;
}

export const AiStepSolverModal: React.FC<AiStepSolverModalProps> = ({
  isOpen,
  onClose,
  problemText,
  problemTitle = 'Bài Toán Tiếng Anh',
  onOpenSettings,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [step1, setStep1] = useState<StepData>({ status: 'IDLE', content: '', fallbackCount: 0 });
  const [step2, setStep2] = useState<StepData>({ status: 'IDLE', content: '', fallbackCount: 0 });
  const [step3, setStep3] = useState<StepData>({ status: 'IDLE', content: '', fallbackCount: 0 });
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [currentAttemptModel, setCurrentAttemptModel] = useState<GeminiModelId | null>(null);

  if (!isOpen) return null;

  const resetAll = () => {
    setCurrentStepIndex(0);
    setStep1({ status: 'IDLE', content: '', fallbackCount: 0 });
    setStep2({ status: 'IDLE', content: '', fallbackCount: 0 });
    setStep3({ status: 'IDLE', content: '', fallbackCount: 0 });
    setGlobalError(null);
    setCurrentAttemptModel(null);
  };

  const handleStartSolving = async () => {
    if (!hasApiKey()) {
      setGlobalError('401 UNAUTHENTICATED: Bạn chưa nhập API Key. Vui lòng thiết lập API Key để tiếp tục.');
      setStep1({ status: 'STOPPED_ERROR', content: '', fallbackCount: 0, rawError: '401 UNAUTHENTICATED: Missing API Key' });
      setStep2({ status: 'STOPPED_ERROR', content: '', fallbackCount: 0, rawError: 'Đã dừng do lỗi ở bước trước' });
      setStep3({ status: 'STOPPED_ERROR', content: '', fallbackCount: 0, rawError: 'Đã dừng do lỗi ở bước trước' });
      return;
    }

    setGlobalError(null);

    // ================= STEP 1 =================
    setCurrentStepIndex(1);
    setStep1({ status: 'PROCESSING', content: '', fallbackCount: 0 });
    setStep2({ status: 'IDLE', content: '', fallbackCount: 0 });
    setStep3({ status: 'IDLE', content: '', fallbackCount: 0 });

    const res1 = await explainMathStep1_LanguageAndStructure(
      problemText,
      undefined,
      (m) => setCurrentAttemptModel(m)
    );

    if (!res1.success) {
      setGlobalError(res1.rawError || res1.error || 'Lỗi xử lý Bước 1');
      setStep1({
        status: 'STOPPED_ERROR',
        content: '',
        fallbackCount: res1.fallbackCount,
        rawError: res1.rawError,
      });
      setStep2({ status: 'STOPPED_ERROR', content: '', fallbackCount: 0, rawError: 'Đã dừng do lỗi ở Bước 1' });
      setStep3({ status: 'STOPPED_ERROR', content: '', fallbackCount: 0, rawError: 'Đã dừng do lỗi ở Bước 1' });
      return;
    }

    setStep1({
      status: 'COMPLETED',
      content: res1.content,
      modelUsed: res1.usedModel,
      fallbackCount: res1.fallbackCount,
    });

    // ================= STEP 2 =================
    setCurrentStepIndex(2);
    setStep2({ status: 'PROCESSING', content: '', fallbackCount: 0 });

    const res2 = await explainMathStep2_StrategyAndFormulas(
      problemText,
      res1.content,
      undefined,
      (m) => setCurrentAttemptModel(m)
    );

    if (!res2.success) {
      setGlobalError(res2.rawError || res2.error || 'Lỗi xử lý Bước 2');
      setStep2({
        status: 'STOPPED_ERROR',
        content: '',
        fallbackCount: res2.fallbackCount,
        rawError: res2.rawError,
      });
      setStep3({ status: 'STOPPED_ERROR', content: '', fallbackCount: 0, rawError: 'Đã dừng do lỗi ở Bước 2' });
      return;
    }

    setStep2({
      status: 'COMPLETED',
      content: res2.content,
      modelUsed: res2.usedModel,
      fallbackCount: res2.fallbackCount,
    });

    // ================= STEP 3 =================
    setCurrentStepIndex(3);
    setStep3({ status: 'PROCESSING', content: '', fallbackCount: 0 });

    const res3 = await explainMathStep3_SolutionAndPractice(
      problemText,
      res1.content,
      res2.content,
      undefined,
      (m) => setCurrentAttemptModel(m)
    );

    if (!res3.success) {
      setGlobalError(res3.rawError || res3.error || 'Lỗi xử lý Bước 3');
      setStep3({
        status: 'STOPPED_ERROR',
        content: '',
        fallbackCount: res3.fallbackCount,
        rawError: res3.rawError,
      });
      return;
    }

    setStep3({
      status: 'COMPLETED',
      content: res3.content,
      modelUsed: res3.usedModel,
      fallbackCount: res3.fallbackCount,
    });
    setCurrentStepIndex(4); // All done
  };

  const getStepProgressPercentage = () => {
    let completed = 0;
    if (step1.status === 'COMPLETED') completed++;
    if (step2.status === 'COMPLETED') completed++;
    if (step3.status === 'COMPLETED') completed++;
    return Math.round((completed / 3) * 100);
  };

  const stepsMeta = [
    {
      num: 1,
      title: 'Bước 1: Phân tích Cấu trúc & Thuật ngữ',
      subtitle: 'Language & Structure Breakdown',
      icon: BookOpen,
      data: step1,
    },
    {
      num: 2,
      title: 'Bước 2: Định hướng Chiến lược & Công thức',
      subtitle: 'Math Strategy & Formulas',
      icon: Lightbulb,
      data: step2,
    },
    {
      num: 3,
      title: 'Bước 3: Lời giải Chi tiết & Bài tập tương tự',
      subtitle: 'Bilingual Solution & Practice',
      icon: FileCheck,
      data: step3,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-500 text-slate-950 flex items-center justify-center font-black shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">
                  Trợ Lý AI Phân Tích & Giải Toán 3 Bước
                </h2>
                <p className="text-xs text-slate-300">
                  Phân tích ngôn ngữ $\to$ Chiến lược $\to$ Lời giải chi tiết song ngữ Anh - Việt
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {step1.status === 'IDLE' ? (
                <button
                  onClick={handleStartSolving}
                  className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Bắt Đầu Phân Tích AI</span>
                </button>
              ) : (
                <button
                  onClick={handleStartSolving}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Phân tích lại</span>
                </button>
              )}
            </div>
          </div>

          {/* Problem Banner */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs">
            <div className="font-extrabold text-teal-400 mb-1 flex items-center gap-1.5">
              <span>Đề bài đang xử lý:</span>
              <span className="text-slate-300 font-medium">({problemTitle})</span>
            </div>
            <div className="text-slate-100 text-sm font-semibold leading-relaxed">
              <MathRenderer content={problemText} inline />
            </div>
          </div>

          {/* Progress Bar & Status (Compliant with AI_INSTRUCTIONS.md) */}
          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-300">
                Tiến độ xử lý: <strong className="text-teal-400">{getStepProgressPercentage()}%</strong>
              </span>
              {currentAttemptModel && (
                <span className="text-[11px] text-teal-300 bg-teal-950/80 border border-teal-800 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                  <span>Đang xử lý qua: {currentAttemptModel}</span>
                </span>
              )}
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700">
              <div
                className={`h-full transition-all duration-500 ${
                  globalError
                    ? 'bg-rose-500'
                    : getStepProgressPercentage() === 100
                    ? 'bg-emerald-500'
                    : 'bg-teal-500'
                }`}
                style={{ width: `${getStepProgressPercentage()}%` }}
              />
            </div>
          </div>
        </div>

        {/* Global Verbatim Error Alert Banner */}
        {globalError && (
          <div className="bg-rose-50 border-b border-rose-200 p-4 px-6 flex items-start justify-between gap-3 text-rose-900 animate-in fade-in duration-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-xs text-rose-900 uppercase tracking-wide">
                  Lỗi API từ Google Gemini (Tất cả mô hình Fallback đều thất bại)
                </h4>
                <div className="mt-1 p-2 bg-rose-100/80 rounded-lg border border-rose-300 font-mono text-[11px] text-rose-950 break-all select-all">
                  {globalError}
                </div>
                <p className="text-[11px] text-rose-700 mt-1">
                  Trạng thái các bước tiếp theo đã chuyển sang <strong>"Đã dừng do lỗi"</strong> theo quy định hệ thống.
                </p>
              </div>
            </div>

            {onOpenSettings && (
              <button
                onClick={() => {
                  onClose();
                  onOpenSettings();
                }}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
              >
                <Key className="w-3.5 h-3.5" />
                <span>Đổi API Key</span>
              </button>
            )}
          </div>
        )}

        {/* Modal Body: 3-Step Display Columns/Cards */}
        <div className="p-6 overflow-y-auto space-y-6">
          {step1.status === 'IDLE' ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center mx-auto shadow-inner">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="max-w-md mx-auto space-y-1">
                <h3 className="font-extrabold text-base text-slate-900">
                  Sẵn Sàng Phân Tích Bài Toán Song Ngữ
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Nhấn nút <strong>"Bắt Đầu Phân Tích AI"</strong> ở góc trên để Trợ lý Gemini thực hiện quy trình phân tích 3 bước tự động kèm cơ chế Retry & Fallback.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {stepsMeta.map((s) => {
                const Icon = s.icon;
                const isCompleted = s.data.status === 'COMPLETED';
                const isProcessing = s.data.status === 'PROCESSING';
                const isError = s.data.status === 'STOPPED_ERROR';

                return (
                  <div
                    key={s.num}
                    className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                      isCompleted
                        ? 'border-emerald-200 bg-white shadow-xs'
                        : isProcessing
                        ? 'border-teal-400 bg-teal-50/20 shadow-md ring-2 ring-teal-400/20'
                        : isError
                        ? 'border-rose-300 bg-rose-50/20'
                        : 'border-slate-200 bg-slate-50/40 opacity-75'
                    }`}
                  >
                    {/* Step Card Header */}
                    <div
                      className={`p-4 px-6 flex items-center justify-between border-b ${
                        isCompleted
                          ? 'bg-emerald-50/60 border-emerald-100'
                          : isProcessing
                          ? 'bg-teal-50/80 border-teal-100'
                          : isError
                          ? 'bg-rose-100/60 border-rose-200 text-rose-900'
                          : 'bg-slate-100/80 border-slate-200 text-slate-500'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                            isCompleted
                              ? 'bg-emerald-600 text-white'
                              : isProcessing
                              ? 'bg-teal-600 text-white animate-pulse'
                              : isError
                              ? 'bg-rose-600 text-white'
                              : 'bg-slate-300 text-slate-700'
                          }`}
                        >
                          {isProcessing ? (
                            <RefreshCw className="w-4 h-4 animate-spin" />
                          ) : (
                            s.num
                          )}
                        </div>
                        <div>
                          <h3 className="font-extrabold text-xs text-slate-900">
                            {s.title}
                          </h3>
                          <p className="text-[10px] text-slate-500 font-semibold">
                            {s.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Status Badge (Strict adherence to AI_INSTRUCTIONS.md) */}
                      <div>
                        {isCompleted && (
                          <span className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Hoàn tất ({s.data.modelUsed})</span>
                          </span>
                        )}

                        {isProcessing && (
                          <span className="flex items-center gap-1.5 text-[11px] font-bold text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-300 animate-pulse">
                            <RefreshCw className="w-3.5 h-3.5 animate-spin text-teal-600" />
                            <span>Đang xử lý AI...</span>
                          </span>
                        )}

                        {isError && (
                          <span className="flex items-center gap-1 text-[11px] font-extrabold text-rose-800 bg-rose-100 px-3 py-1 rounded-full border border-rose-300">
                            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                            <span>Đã dừng do lỗi</span>
                          </span>
                        )}

                        {s.data.status === 'IDLE' && (
                          <span className="text-[11px] font-semibold text-slate-400 bg-slate-200/80 px-2.5 py-0.5 rounded-full">
                            Đang chờ
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Step Card Content */}
                    <div className="p-5 px-6">
                      {isCompleted && s.data.content && (
                        <div className="prose prose-sm max-w-none text-slate-800 leading-relaxed space-y-2 text-xs">
                          <MathRenderer content={s.data.content} />
                        </div>
                      )}

                      {isProcessing && (
                        <div className="py-6 flex flex-col items-center justify-center space-y-2 text-slate-500 text-xs">
                          <RefreshCw className="w-6 h-6 animate-spin text-teal-600" />
                          <p className="font-semibold text-slate-600">
                            Đang sinh nội dung bằng mô hình AI...
                          </p>
                        </div>
                      )}

                      {isError && (
                        <div className="p-4 bg-rose-50/80 rounded-2xl border border-rose-200 text-rose-800 text-xs space-y-1">
                          <div className="font-bold flex items-center gap-1 text-rose-900">
                            <AlertCircle className="w-4 h-4 text-rose-600" />
                            <span>Không thể hoàn tất bước này</span>
                          </div>
                          <p className="font-mono text-[11px] text-rose-900/90">
                            {s.data.rawError || 'Hệ thống đã dừng bước này do lỗi kết nối hoặc vượt hạn ngạch API.'}
                          </p>
                        </div>
                      )}

                      {s.data.status === 'IDLE' && (
                        <p className="text-xs text-slate-400 italic">
                          Bước này sẽ tự động chạy sau khi các bước trước hoàn tất.
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex items-center justify-between">
          <p className="text-[11px] text-slate-500">
            MATH-BRIDGE AI Solver • Chuẩn GDPT 2018 & Thuật ngữ Toán Quốc Tế
          </p>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition shadow-2xs"
          >
            Đóng Cửa Sổ
          </button>
        </div>
      </div>
    </div>
  );
};
