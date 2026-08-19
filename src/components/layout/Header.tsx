import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { hasApiKey } from '../../lib/geminiService';
import { ApiKeySettingsModal } from '../navigation/ApiKeySettingsModal';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  UserCheck,
  Globe2,
  ShieldAlert,
  BarChart3,
  BookMarked,
  Layers,
  FileQuestion,
  User,
  Menu,
  X,
  Compass,
  Key,
  TrendingUp,
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const {
    user,
    selectedGrade,
    setSelectedGrade,
    currentLevel,
    loginAsRole,
    setSelectedLessonSubTab,
  } = useAppStore();

  const [isRoleMenuOpen, setIsRoleMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [apiKeyConfigured, setApiKeyConfigured] = useState(false);

  useEffect(() => {
    setApiKeyConfigured(hasApiKey());
  }, []);

  const getNavTabs = () => {
    if (!user) return [];
    if (user.role === 'student') {
      return [
        { id: 'learn', label: 'Chuyên đề bài học', icon: BookOpen },
        { id: 'dashboard', label: 'Tổng quan', icon: Compass },
        { id: 'tests', label: 'Bài kiểm tra', icon: GraduationCap },
        { id: 'progress', label: 'Tiến bộ (MEI)', icon: BarChart3 },
      ];
    }
    return [
      { id: 'teacher-dashboard', label: 'Lớp học', icon: Compass },
      { id: 'question-bank', label: 'Ngân hàng câu hỏi', icon: FileQuestion },
      { id: 'content-studio', label: 'Biên soạn AI', icon: BookOpen },
      { id: 'test-builder', label: 'Tạo bài test', icon: GraduationCap },
    ];
  };

  const tabs = getNavTabs();

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#111322] border-b border-slate-800 text-white shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('learn')}
                className="flex items-center gap-2.5 text-left group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white font-black text-xl shadow-md">
                  M
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-white tracking-tight text-lg">Chuyên đề Toán THPT</span>
                  </div>
                  <p className="text-[10px] font-medium text-teal-400 -mt-1 hidden sm:block">
                    KẾT NỐI TRI THỨC · GDPT 2018
                  </p>
                </div>
              </button>
            </div>

            {/* Center Grade Pills */}
            <div className="flex items-center bg-[#1E2238] rounded-2xl p-1 border border-slate-700 text-xs">
              {[10, 11, 12].map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    setSelectedGrade(g);
                    setActiveTab('learn');
                  }}
                  className={`px-3 py-1 rounded-xl font-bold transition cursor-pointer ${
                    selectedGrade === g
                      ? 'bg-violet-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Lớp {g}
                </button>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2.5">
              <div className="hidden lg:block text-right pr-2 text-xs">
                <span className="text-slate-400">Tác giả: </span>
                <span className="text-violet-300 font-bold">Lê Thị Hiếu (0939069119)</span>
              </div>

              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-teal-400 hover:bg-slate-800"
              >
                <Key className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

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
