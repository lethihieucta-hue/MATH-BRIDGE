import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { hasApiKey } from '../../lib/geminiService';
import { ApiKeySettingsModal } from './ApiKeySettingsModal';
import {
  Key,
  Sparkles,
  Phone,
  Layers,
  GraduationCap,
  Activity,
  BookOpen,
  Compass,
  FileQuestion,
  UserCheck,
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentRole,
    setRole,
    selectedGrade,
    setSelectedGrade,
    activeTab,
    setActiveTab,
    selectedLessonSubTab,
    setSelectedLessonSubTab,
  } = useAppStore();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [apiKeyConfigured, setApiKeyConfigured] = useState(false);

  useEffect(() => {
    setApiKeyConfigured(hasApiKey());
  }, []);

  return (
    <>
      <header className="bg-[#111322] text-white sticky top-0 z-40 border-b border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
        <div className="max-w-[1700px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
            {/* Left: Scientific Branding Title */}
            <div
              onClick={() => setActiveTab(currentRole === 'TEACHER' ? 'teacher-dashboard' : 'learn')}
              className="flex items-center gap-3 cursor-pointer group shrink-0"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-teal-400 p-0.5 shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
                <div className="w-full h-full bg-[#111322] rounded-[14px] flex items-center justify-center font-mono font-black text-teal-300 text-lg">
                  ∫x
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="font-black text-base lg:text-lg tracking-tight text-white group-hover:text-teal-300 transition-colors">
                    Chuyên đề Toán THPT
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-violet-950/80 text-violet-300 border border-violet-700/60 px-2 py-0.5 rounded-full shadow-2xs">
                    KẾT NỐI TRI THỨC · GDPT 2018
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">
                  Scientific Bilingual Mathematics Hub
                </p>
              </div>
            </div>

            {/* Center: Prominent Grade Pills [ Lớp 10 ] [ Lớp 11 ] [ Lớp 12 ] */}
            <div className="flex items-center bg-[#1E2238] p-1 rounded-2xl border border-slate-700/60 shadow-inner">
              {[10, 11, 12].map((grade) => {
                const isSelected = selectedGrade === grade;
                return (
                  <button
                    key={grade}
                    onClick={() => {
                      setSelectedGrade(grade);
                      // If user is on learning hub, make sure they stay in learn mode
                      if (activeTab !== 'teacher-dashboard' && activeTab !== 'teacher-analytics') {
                        setActiveTab('learn');
                      }
                    }}
                    className={`px-3.5 sm:px-5 py-1.5 rounded-xl font-black text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/30 scale-102 ring-1 ring-violet-400/40'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/40'
                    }`}
                  >
                    Lớp {grade}
                  </button>
                );
              })}
            </div>

            {/* Center-Right: Navigation Tabs specifically for Teachers */}
            <nav className="hidden lg:flex items-center space-x-1 bg-[#1E2238]/90 p-1 rounded-2xl border border-slate-700/60 text-xs font-bold shadow-inner">
              <button
                onClick={() => {
                  setSelectedLessonSubTab('theory');
                  setActiveTab('learn');
                }}
                className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'learn'
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Soạn Phiếu & Chuyên Đề</span>
              </button>
              <button
                onClick={() => setActiveTab('question-bank')}
                className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'question-bank'
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <FileQuestion className="w-3.5 h-3.5" />
                <span>Ngân Hàng Đề</span>
              </button>
              <button
                onClick={() => setActiveTab('content-studio')}
                className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'content-studio'
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Biên Soạn AI</span>
              </button>
              <button
                onClick={() => setActiveTab('test-builder')}
                className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'test-builder'
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Tạo Bài Test</span>
              </button>
              <button
                onClick={() => setActiveTab('teacher-dashboard')}
                className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'teacher-dashboard'
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Quản Lý Lớp</span>
              </button>
            </nav>

            {/* Right: Author Info & Gemini Controls */}
            <div className="flex items-center gap-2.5">
              {/* Author & Contact Info */}
              <div className="hidden xl:flex flex-col items-end text-right pr-2 border-r border-slate-800">
                <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="text-slate-400">Tác giả:</span>
                  <span className="text-violet-300 font-extrabold">Lê Thị Hiếu</span>
                </div>
                <div className="text-[11px] text-teal-400 font-mono font-bold flex items-center gap-1">
                  <Phone className="w-3 h-3 text-teal-400" />
                  <span>ĐT / Zalo: 0939069119</span>
                </div>
              </div>

              {/* Gemini AI Settings Button */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer ${
                  !apiKeyConfigured
                    ? 'bg-amber-500/20 border border-amber-400 text-amber-300 hover:bg-amber-500/30'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80'
                }`}
                title="Cài đặt Google Gemini AI & Quản lý API Key"
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      apiKeyConfigured
                        ? 'bg-emerald-400 shadow-xs shadow-emerald-400/80'
                        : 'bg-amber-400 animate-pulse'
                    }`}
                  />
                  <Key
                    className={`w-3.5 h-3.5 ${
                      apiKeyConfigured ? 'text-teal-400' : 'text-amber-400'
                    }`}
                  />
                </div>
                <span className="hidden sm:inline text-[11px] font-bold">
                  {apiKeyConfigured ? 'Gemini Ready' : 'Cài API Key'}
                </span>
              </button>
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
