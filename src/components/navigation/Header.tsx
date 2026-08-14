import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { hasApiKey, getStoredSelectedModel } from '../../lib/geminiService';
import { ApiKeySettingsModal } from './ApiKeySettingsModal';
import {
  Key,
  Sparkles,
  Settings,
  AlertTriangle,
  CheckCircle2,
  Cpu,
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentRole,
    setRole,
    selectedGrade,
    setSelectedGrade,
    activeTab,
    setActiveTab,
  } = useAppStore();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [apiKeyConfigured, setApiKeyConfigured] = useState(false);

  useEffect(() => {
    const keyExists = hasApiKey();
    setApiKeyConfigured(keyExists);
    // If no key is set yet, open settings modal to assist user
    if (!keyExists) {
      const timer = setTimeout(() => setIsSettingsOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <header className="bg-[#0B0F19]/95 backdrop-blur-md text-white sticky top-0 z-40 border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Logo & Scientific Title */}
            <div
              onClick={() => setActiveTab(currentRole === 'TEACHER' ? 'teacher-dashboard' : 'dashboard')}
              className="flex items-center gap-3 cursor-pointer group shrink-0"
            >
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-600 via-emerald-500 to-teal-300 p-0.5 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-mono font-black text-teal-300 text-lg">
                  ∫x
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:text-teal-300 transition-colors">
                    MATH-BRIDGE
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-teal-950/90 text-teal-300 border border-teal-700/60 px-2 py-0.5 rounded-full shadow-2xs">
                    KNTT 2018
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
                  Scientific Bilingual Mathematics Hub
                </p>
              </div>
            </div>

            {/* Student / Teacher Navigation Tabs for Desktop */}
            <nav className="hidden xl:flex items-center space-x-1 bg-slate-900/90 p-1 rounded-2xl border border-slate-800/90 text-xs font-bold shadow-inner">
              {currentRole === 'STUDENT' ? (
                <>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                      activeTab === 'dashboard'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <span>Tổng Quan</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('vocabulary')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'vocabulary'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    1. Từ Vựng
                  </button>
                  <button
                    onClick={() => setActiveTab('sentences')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'sentences'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    2. Mẫu Câu
                  </button>
                  <button
                    onClick={() => setActiveTab('learn')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'learn'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    3. Bài Học
                  </button>
                  <button
                    onClick={() => setActiveTab('reading')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'reading'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    4. Đọc Đề
                  </button>
                  <button
                    onClick={() => setActiveTab('grapher')}
                    className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1 ${
                      activeTab === 'grapher'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <span className="text-[11px] font-mono">f(x)</span> Đồ Thị
                  </button>
                  <button
                    onClick={() => setActiveTab('minigame')}
                    className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1 ${
                      activeTab === 'minigame'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    ⚡ Minigame
                  </button>
                  <button
                    onClick={() => setActiveTab('practice')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'practice'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    Luyện Tập
                  </button>
                  <button
                    onClick={() => setActiveTab('tests')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'tests'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    Kiểm Tra
                  </button>
                  <button
                    onClick={() => setActiveTab('progress')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'progress'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    Radar MEI
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setActiveTab('teacher-dashboard')}
                    className={`px-3.5 py-1.5 rounded-xl transition ${
                      activeTab === 'teacher-dashboard'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    Lớp Học
                  </button>
                  <button
                    onClick={() => setActiveTab('question-bank')}
                    className={`px-3.5 py-1.5 rounded-xl transition ${
                      activeTab === 'question-bank'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    Ngân Hàng Đề
                  </button>
                  <button
                    onClick={() => setActiveTab('content-studio')}
                    className={`px-3.5 py-1.5 rounded-xl transition ${
                      activeTab === 'content-studio'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    Biên Soạn AI
                  </button>
                  <button
                    onClick={() => setActiveTab('test-builder')}
                    className={`px-3.5 py-1.5 rounded-xl transition ${
                      activeTab === 'test-builder'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    Tạo Đề %
                  </button>
                  <button
                    onClick={() => setActiveTab('teacher-analytics')}
                    className={`px-3.5 py-1.5 rounded-xl transition ${
                      activeTab === 'teacher-analytics'
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    Phân Tích MEI
                  </button>
                </>
              )}
            </nav>

            {/* Right Controls: API Key Settings Button & Grade & Role */}
            <div className="flex items-center gap-2">
              {/* Settings / API Key Button - STRICTLY COMPLIANT WITH AI_INSTRUCTIONS.md */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs ${
                  !apiKeyConfigured
                    ? 'bg-rose-950/80 border-2 border-rose-500 text-rose-300 hover:bg-rose-900/90 ring-2 ring-rose-500/30'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80'
                }`}
                title="Cài đặt Google Gemini AI & Quản lý API Key"
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      apiKeyConfigured
                        ? 'bg-emerald-400 shadow-xs shadow-emerald-400/80'
                        : 'bg-rose-500 animate-ping'
                    }`}
                  />
                  <Key
                    className={`w-3.5 h-3.5 ${
                      apiKeyConfigured ? 'text-teal-400' : 'text-rose-400'
                    }`}
                  />
                </div>

                <div className="text-left">
                  {!apiKeyConfigured ? (
                    <span className="text-rose-400 font-black tracking-tight flex items-center gap-1">
                      Lấy API key để sử dụng app
                    </span>
                  ) : (
                    <span className="text-teal-300 font-bold hidden sm:inline">
                      Gemini Ready
                    </span>
                  )}
                </div>
              </button>

              {/* Grade Selector */}
              <div className="relative">
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(parseInt(e.target.value, 10))}
                  className="bg-slate-900 text-teal-300 text-xs font-mono font-bold px-3 py-1.5 rounded-xl border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer appearance-none pr-7 shadow-xs"
                >
                  <option value={10}>10 KNTT</option>
                  <option value={11}>11 KNTT</option>
                  <option value={12}>12 KNTT</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">
                  ▼
                </span>
              </div>

              {/* Role Switcher */}
              <div className="flex items-center bg-slate-900 p-0.5 rounded-xl border border-slate-800 text-xs font-bold">
                <button
                  onClick={() => setRole('STUDENT')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    currentRole === 'STUDENT'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Học Sinh
                </button>
                <button
                  onClick={() => setRole('TEACHER')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    currentRole === 'TEACHER'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-extrabold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Giáo Viên
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* API Key Settings Modal */}
      <ApiKeySettingsModal
        isOpen={isSettingsOpen}
        onClose={() => {
          setIsSettingsOpen(false);
          setApiKeyConfigured(hasApiKey());
        }}
        onSaved={() => setApiKeyConfigured(hasApiKey())}
      />
    </>
  );
};
