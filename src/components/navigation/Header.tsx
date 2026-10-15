import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { hasApiKey } from '../../lib/geminiService';
import { ApiKeySettingsModal } from './ApiKeySettingsModal';
import {
  Key,
  Sparkles,
  Layers,
  GraduationCap,
  Activity,
  BookOpen,
  Compass,
  FileQuestion,
  UserCheck,
  UsersRound,
  Microscope,
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
      <header className="bg-amb-navy-800 text-white sticky top-0 z-40 border-b border-amb-navy-700 shadow-[0_4px_20px_rgba(30,42,74,0.25)]">
        <div className="max-w-[1700px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
            {/* Left: Scientific Branding Title */}
            <div
              onClick={() => setActiveTab('learn')}
              className="flex items-center gap-3 cursor-pointer group shrink-0"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 64 64"
                aria-hidden="true"
                className="shrink-0 group-hover:scale-105 transition-transform"
              >
                <rect width="64" height="64" rx="16" fill="#3b5bdb" />
                <path d="M10 44 Q32 14 54 44" fill="none" stroke="#fcc419" strokeWidth="6" strokeLinecap="round" />
                <path d="M8 44h48" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
                <path d="M21 44v-9M32 44v-14M43 44v-9" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-lg lg:text-xl leading-none text-white">
                    AI Math Bridge
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wide bg-white text-amb-navy-800 px-2 py-0.5 rounded-md">
                    Giáo viên
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 font-medium">
                  Kết nối tri thức · GDPT 2018
                </p>
              </div>
            </div>

            {/* Center: Prominent Grade Pills [ Lớp 10 ] [ Lớp 11 ] [ Lớp 12 ] */}
            <div className="flex items-center bg-amb-navy-700 p-1 rounded-xl border border-white/10">
              {[10, 11, 12].map((grade) => {
                const isSelected = selectedGrade === grade;
                return (
                  <button
                    key={grade}
                    onClick={() => {
                      setSelectedGrade(grade);
                      if (['learn', 'content-studio', 'question-bank'].includes(activeTab)) {
                        setActiveTab('learn');
                      }
                    }}
                    className={`px-3.5 sm:px-5 py-1.5 rounded-xl font-black text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-amb-blue-600 text-white shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Lớp {grade}
                  </button>
                );
              })}
            </div>

            {/* Center-Right: Navigation Tabs specifically for Teachers (Soạn Phiếu & Tạo Bài Test) */}
            <nav className="hidden lg:flex items-center space-x-1 bg-amb-navy-700 p-1 rounded-xl border border-white/10 text-xs font-bold">
              <button
                onClick={() => {
                  setSelectedLessonSubTab('theory');
                  setActiveTab('learn');
                }}
                className={`px-4 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'learn'
                    ? 'bg-amb-blue-600 text-white font-extrabold shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Soạn Phiếu & Chuyên Đề</span>
              </button>
              <button
                onClick={() => setActiveTab('test-builder')}
                className={`px-4 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'test-builder'
                    ? 'bg-amb-blue-600 text-white font-extrabold shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Tạo Bài Test</span>
              </button>
              <button
                onClick={() => setActiveTab('teacher-dashboard')}
                className={`px-4 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'teacher-dashboard' || activeTab === 'teacher-analytics'
                    ? 'bg-amb-blue-600 text-white font-extrabold shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <UsersRound className="w-4 h-4" />
                <span>Lớp & Phân tích</span>
              </button>
              <button
                onClick={() => setActiveTab('teacher-research')}
                className={`px-4 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'teacher-research'
                    ? 'bg-amb-yellow-400 text-amb-ink font-extrabold shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Microscope className="w-4 h-4" />
                <span>Nghiên cứu</span>
              </button>
            </nav>

            {/* Right: Author Info & Gemini Controls */}
            <div className="flex items-center gap-2.5">
              {/* Gemini AI Settings Button */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer ${
                  !apiKeyConfigured
                    ? 'bg-amber-500/20 border border-amber-400 text-amber-300 hover:bg-amber-500/30'
                    : 'bg-amb-navy-700 hover:bg-white/10 text-slate-200 border border-white/10'
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
