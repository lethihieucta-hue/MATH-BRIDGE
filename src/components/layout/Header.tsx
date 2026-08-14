import React, { useState } from 'react';
import { useAppStore } from '../../lib/store';
import { LevelBadge } from '../student/LevelBadge';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  UserCheck,
  Globe2,
  ShieldAlert,
  LogOut,
  BarChart3,
  BookMarked,
  Layers,
  FileQuestion,
  User,
  Menu,
  X,
  Compass,
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
    languageMode,
    setLanguageMode,
    currentLevel,
    loginAsRole,
    logout,
  } = useAppStore();

  const [isRoleMenuOpen, setIsRoleMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavTabs = () => {
    if (!user) return [];
    if (user.role === 'student') {
      return [
        { id: 'dashboard', label: 'Tổng quan', icon: Compass },
        { id: 'vocabulary', label: 'Từ vựng', icon: BookMarked },
        { id: 'sentences', label: 'Mẫu câu', icon: Layers },
        { id: 'learn', label: 'Bài học', icon: BookOpen },
        { id: 'reading', label: 'Đọc đề', icon: FileQuestion },
        { id: 'practice', label: 'Luyện tập', icon: Sparkles },
        { id: 'tests', label: 'Bài test', icon: GraduationCap },
        { id: 'progress', label: 'Tiến bộ (MEI)', icon: BarChart3 },
      ];
    }
    if (user.role === 'teacher') {
      return [
        { id: 'teacher-dashboard', label: 'Lớp học', icon: Compass },
        { id: 'question-bank', label: 'Ngân hàng câu hỏi', icon: FileQuestion },
        { id: 'content-studio', label: 'Tạo bài học', icon: BookOpen },
        { id: 'test-builder', label: 'Tạo bài test', icon: GraduationCap },
        { id: 'teacher-analytics', label: 'Phân tích lớp', icon: BarChart3 },
      ];
    }
    return [
      { id: 'admin-dashboard', label: 'Quản trị hệ thống', icon: ShieldAlert },
    ];
  };

  const tabs = getNavTabs();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab(user?.role === 'teacher' ? 'teacher-dashboard' : user?.role === 'admin' ? 'admin-dashboard' : 'dashboard')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white font-black text-xl shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform">
                M
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-slate-900 tracking-tight text-lg">MATH-BRIDGE</span>
                </div>
                <p className="text-[10px] font-medium text-teal-700 -mt-1 hidden sm:block">
                  Learn Mathematics Through English
                </p>
              </div>
            </button>

            {/* Level Badge for Student */}
            {user?.role === 'student' && (
              <div className="hidden lg:block ml-2">
                <LevelBadge level={currentLevel} />
              </div>
            )}
          </div>

          {/* Center Navigation for Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-teal-50 text-teal-800 border border-teal-200/80 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            {/* Grade Selector */}
            {user?.role === 'student' && (
              <div className="hidden sm:flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200 text-xs">
                {[10, 11, 12].map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGrade(g)}
                    className={`px-2.5 py-1 rounded-lg font-bold transition ${
                      selectedGrade === g
                        ? 'bg-white text-teal-800 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Lớp {g}
                  </button>
                ))}
              </div>
            )}

            {/* Role Switcher Demo Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsRoleMenuOpen(!isRoleMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 shadow-2xs transition"
              >
                <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">
                  {user?.full_name?.charAt(0) || 'U'}
                </div>
                <div className="text-left hidden sm:block">
                  <div className="font-bold text-slate-800 leading-tight">{user?.full_name}</div>
                  <div className="text-[10px] text-teal-600 font-semibold uppercase">{user?.role}</div>
                </div>
              </button>

              {isRoleMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 text-xs">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Chuyển vai trò Demo</p>
                  </div>
                  <button
                    onClick={() => {
                      loginAsRole('student');
                      setActiveTab('dashboard');
                      setIsRoleMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-teal-50/60 ${
                      user?.role === 'student' ? 'text-teal-700 font-bold bg-teal-50/40' : 'text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-teal-600" />
                      <span>Học sinh (Student)</span>
                    </div>
                    <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded">Lớp 10</span>
                  </button>
                  <button
                    onClick={() => {
                      loginAsRole('teacher');
                      setActiveTab('teacher-dashboard');
                      setIsRoleMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-teal-50/60 ${
                      user?.role === 'teacher' ? 'text-teal-700 font-bold bg-teal-50/40' : 'text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-teal-600" />
                      <span>Giáo viên (Teacher)</span>
                    </div>
                    <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">Quản lý</span>
                  </button>
                  <button
                    onClick={() => {
                      loginAsRole('admin');
                      setActiveTab('admin-dashboard');
                      setIsRoleMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-teal-50/60 ${
                      user?.role === 'admin' ? 'text-teal-700 font-bold bg-teal-50/40' : 'text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-600" />
                      <span>Quản trị (Admin)</span>
                    </div>
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">Toàn quyền</span>
                  </button>

                  <div className="border-t border-slate-100 mt-2 pt-2">
                    <button
                      onClick={() => {
                        setActiveTab('profile');
                        setIsRoleMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-50"
                    >
                      <User className="w-4 h-4" />
                      <span>Hồ sơ & Đổi mật khẩu</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
          {user?.role === 'student' && (
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-xs text-slate-500 font-semibold">Khối lớp:</span>
              <div className="flex items-center bg-slate-100 rounded-lg p-0.5 text-xs">
                {[10, 11, 12].map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGrade(g)}
                    className={`px-3 py-1 rounded-md font-bold ${
                      selectedGrade === g ? 'bg-teal-600 text-white' : 'text-slate-600'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 pt-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold border ${
                    isActive
                      ? 'bg-teal-50 border-teal-300 text-teal-800'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4 text-teal-600" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
