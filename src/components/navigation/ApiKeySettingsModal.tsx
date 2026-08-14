import React, { useState, useEffect } from 'react';
import {
  GeminiModelId,
  SUPPORTED_MODELS,
  getStoredApiKey,
  setStoredApiKey,
  getStoredSelectedModel,
  setStoredSelectedModel,
  testGeminiApiKey,
} from '../../lib/geminiService';
import {
  Key,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  X,
  Eye,
  EyeOff,
  Zap,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Layers,
} from 'lucide-react';

interface ApiKeySettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaved?: () => void;
}

export const ApiKeySettingsModal: React.FC<ApiKeySettingsModalProps> = ({
  isOpen,
  onClose,
  onSaved,
}) => {
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [selectedModel, setSelectedModel] = useState<GeminiModelId>('gemini-3-flash-preview');
  const [testStatus, setTestStatus] = useState<{
    loading: boolean;
    success?: boolean;
    message?: string;
  }>({ loading: false });
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setApiKey(getStoredApiKey());
      setSelectedModel(getStoredSelectedModel());
      setTestStatus({ loading: false });
      setSaveSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTestConnection = async () => {
    if (!apiKey.trim()) {
      setTestStatus({
        loading: false,
        success: false,
        message: 'Vui lòng nhập API Key trước khi kiểm tra.',
      });
      return;
    }

    setTestStatus({ loading: true });
    const result = await testGeminiApiKey(apiKey.trim());
    setTestStatus({
      loading: false,
      success: result.success,
      message: result.message,
    });
  };

  const handleSave = () => {
    setStoredApiKey(apiKey.trim());
    setStoredSelectedModel(selectedModel);
    setSaveSuccess(true);
    setTimeout(() => {
      onSaved?.();
      onClose();
    }, 600);
  };

  const handleRemoveKey = () => {
    setApiKey('');
    setStoredApiKey('');
    setTestStatus({
      loading: false,
      success: false,
      message: 'Đã xóa API Key khỏi thiết bị.',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center shadow-inner">
              <Key className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
                Thiết Lập Google Gemini AI & API Key
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Cấu hình API Key cá nhân và mô hình AI để sử dụng toàn bộ tính năng Trợ lý Toán học Song ngữ
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          {/* Section 1: Guide Link */}
          <div className="bg-teal-50/80 border border-teal-200 rounded-2xl p-4 flex items-start justify-between gap-3">
            <div className="space-y-1 text-xs">
              <div className="font-extrabold text-teal-950 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Chưa có Gemini API Key? Lấy hoàn toàn miễn phí</span>
              </div>
              <p className="text-teal-800/90 leading-relaxed">
                Đăng nhập tài khoản Google của bạn tại <strong>Google AI Studio</strong> để tạo khóa API (mất 30 giây, miễn phí hàng nghìn lượt gọi mỗi ngày).
              </p>
            </div>
            <a
              href="https://aistudio.google.com/api-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
            >
              <span>Lấy API Key</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Section 2: Model Selection Cards */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-teal-600" />
                <span>Chọn Mô hình AI Ưu tiên (AI Model Selection)</span>
              </label>
              <span className="text-[11px] font-semibold text-slate-500">
                Tự động Fallback khi quá tải
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {SUPPORTED_MODELS.map((m) => {
                const isSelected = selectedModel === m.id;
                return (
                  <div
                    key={m.id}
                    onClick={() => setSelectedModel(m.id)}
                    className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'border-teal-500 bg-teal-50/40 shadow-md ring-2 ring-teal-500/20'
                        : 'border-slate-200 bg-slate-50/60 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                            m.isDefault
                              ? 'bg-teal-600 text-white'
                              : isSelected
                              ? 'bg-teal-100 text-teal-900 font-bold'
                              : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {m.badge}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        )}
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-xs tracking-tight">
                        {m.name}
                      </h3>
                      <p className="text-[11px] font-semibold text-teal-700 mt-0.5">
                        {m.tagline}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                        {m.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fallback Chain Indicator */}
            <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-3 flex items-center gap-2 text-[11px] text-slate-600">
              <Layers className="w-4 h-4 text-slate-500 shrink-0" />
              <span>
                <strong>Cơ chế Retry & Fallback:</strong> Nếu model đang gọi gặp lỗi quota (HTTP 429), hệ thống tự động chuyển sang model tiếp theo trong danh sách mà không làm mất dữ liệu bước trước.
              </span>
            </div>
          </div>

          {/* Section 3: API Key Input */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Key className="w-4 h-4 text-teal-600" />
                <span>Google Gemini API Key: *</span>
              </span>
              {apiKey && (
                <button
                  type="button"
                  onClick={handleRemoveKey}
                  className="text-[11px] font-semibold text-rose-600 hover:text-rose-700 underline"
                >
                  Xóa Key
                </button>
              )}
            </label>

            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                  setTestStatus({ loading: false });
                }}
                placeholder="Dán mã API Key của bạn (VD: AIzaSy...)"
                className="w-full pl-4 pr-24 py-3 rounded-2xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-xs text-slate-900 shadow-2xs"
              />
              <div className="absolute right-2 top-2 flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition"
                  title={showKey ? 'Ẩn key' : 'Hiện key'}
                >
                  {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={handleTestConnection}
                  disabled={testStatus.loading || !apiKey.trim()}
                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 font-bold text-[11px] rounded-lg transition flex items-center gap-1"
                >
                  {testStatus.loading ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-teal-600" />
                  ) : (
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                  )}
                  <span>Kiểm tra</span>
                </button>
              </div>
            </div>

            {/* Test Status Feedback */}
            {testStatus.message && (
              <div
                className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                  testStatus.success
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                    : 'bg-rose-50 border border-rose-200 text-rose-800'
                }`}
              >
                {testStatus.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
                <span>{testStatus.message}</span>
              </div>
            )}

            <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>
                Key được lưu cục bộ an toàn trong <strong>localStorage</strong> của trình duyệt và không gửi về máy chủ trung gian.
              </span>
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-200/60 transition"
          >
            Đóng
          </button>

          <button
            type="button"
            onClick={handleSave}
            className={`px-6 py-2.5 font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-2 text-white ${
              saveSuccess
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-teal-600 hover:bg-teal-700'
            }`}
          >
            {saveSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Đã Lưu Cài Đặt!</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Lưu Cài Đặt & Sử Dụng</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
