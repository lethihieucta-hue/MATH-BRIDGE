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
      <header className="bg-slate-900 text-white sticky top-0 z-40 border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Logo & Title */}
            <div
              onClick={() => setActiveTab(currentRole === 'TEACHER' ? 'teacher-dashboard' : 'dashboard')}
              className="flex items-center gap-3 cursor-pointer group shrink-0"
            >
              <div className="w-10 h-10 rounded-2xl bg-teal-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                M
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-teal-400 transition-colors">
                    MATH-BRIDGE
                  </span>
                  <span className="text-[10px] font-extrabold bg-teal-950 text-teal-300 border border-teal-800 px-2 py-0.5 rounded-full">
                    THPT
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
                  Learn Mathematics Through English
                </p>
              </div>
            </div>

            {/* Student / Teacher Navigation Tabs for Desktop */}
            <nav className="hidden xl:flex items-center space-x-1 bg-slate-800/80 p-1 rounded-2xl border border-slate-700/60 text-xs font-bold">
              {currentRole === 'STUDENT' ? (
                <>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'dashboard' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Tổng Quan
                  </button>
                  <button
                    onClick={() => setActiveTab('vocabulary')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'vocabulary' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    1. Từ Vựng
                  </button>
                  <button
                    onClick={() => setActiveTab('sentences')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'sentences' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    2. Mẫu Câu
                  </button>
                  <button
                    onClick={() => setActiveTab('learn')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'learn' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    3. Bài Học
                  </button>
                  <button
                    onClick={() => setActiveTab('reading')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'reading' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    4. Đọc Đề
                  </button>
                  <button
                    onClick={() => setActiveTab('grapher')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'grapher' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    5. Đồ Thị
                  </button>
                  <button
                    onClick={() => setActiveTab('minigame')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'minigame' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    6. Minigame
                  </button>
                  <button
                    onClick={() => setActiveTab('practice')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'practice' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Luyện Tập
                  </button>
                  <button
                    onClick={() => setActiveTab('tests')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'tests' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Kiểm Tra
                  </button>
                  <button
                    onClick={() => setActiveTab('progress')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'progress' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Chỉ Số MEI
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setActiveTab('teacher-dashboard')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'teacher-dashboard' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Lớp Học
                  </button>
                  <button
                    onClick={() => setActiveTab('question-bank')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'question-bank' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Ngân Hàng Đề
                  </button>
                  <button
                    onClick={() => setActiveTab('content-studio')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'content-studio' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Biên Soạn AI
                  </button>
                  <button
                    onClick={() => setActiveTab('test-builder')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'test-builder' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Tạo Đề %
                  </button>
                  <button
                    onClick={() => setActiveTab('teacher-analytics')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      activeTab === 'teacher-analytics' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Phân Tích
                  </button>
                </>
              )}
            </nav>

            {/* Right Controls: API Key Settings Button & Grade & Role */}
            <div className="flex items-center gap-2.5">
              {/* Settings / API Key Button - STRICTLY COMPLIANT WITH AI_INSTRUCTIONS.md */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs ${
                  !apiKeyConfigured
                    ? 'bg-rose-950/80 border-2 border-rose-500 text-rose-300 hover:bg-rose-900/90 ring-2 ring-rose-500/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
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
                      Gemini AI: Sẵn sàng
                    </span>
                  )}
                </div>
              </button>

              {/* Grade Selector */}
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(parseInt(e.target.value, 10))}
                className="bg-slate-800 text-white text-xs font-bold px-2.5 py-1.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
              >
                <option value={10}>Lớp 10</option>
                <option value={11}>Lớp 11</option>
                <option value={12}>Lớp 12</option>
              </select>

              {/* Role Switcher */}
              <div className="flex items-center bg-slate-800 p-0.5 rounded-xl border border-slate-700 text-xs font-bold">
                <button
                  onClick={() => setRole('STUDENT')}
                  className={`px-2 py-1 rounded-lg transition ${
                    currentRole === 'STUDENT' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Học Sinh
                </button>
                <button
                  onClick={() => setRole('TEACHER')}
                  className={`px-2 py-1 rounded-lg transition ${
                    currentRole === 'TEACHER' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-400 hover:text-white'
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
