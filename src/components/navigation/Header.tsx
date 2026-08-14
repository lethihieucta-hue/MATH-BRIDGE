import React from 'react';
import { useAppStore } from '../../lib/store';
import { LevelBadge } from '../student/LevelBadge';
import {
  GraduationCap,
  BookOpen,
  Layers,
  Sparkles,
  FileQuestion,
  UserCheck,
  Shield,
  BarChart3,
  Award,
  ChevronDown,
  Globe2,
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    user,
    currentRole,
    setRole,
    selectedGrade,
    setSelectedGrade,
    currentLevel,
    activeTab,
    setActiveTab,
  } = useAppStore();

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-40 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Title */}
          <div
            onClick={() => setActiveTab(currentRole === 'TEACHER' ? 'teacher-dashboard' : 'dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
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
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-800/80 p-1 rounded-2xl border border-slate-700/60 text-xs font-bold">
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
                  className={`px-3.5 py-1.5 rounded-xl transition ${
                    activeTab === 'teacher-dashboard' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Lớp Học
                </button>
                <button
                  onClick={() => setActiveTab('question-bank')}
                  className={`px-3.5 py-1.5 rounded-xl transition ${
                    activeTab === 'question-bank' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Ngân Hàng Đề
                </button>
                <button
                  onClick={() => setActiveTab('content-studio')}
                  className={`px-3.5 py-1.5 rounded-xl transition ${
                    activeTab === 'content-studio' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Biên Soạn
                </button>
                <button
                  onClick={() => setActiveTab('test-builder')}
                  className={`px-3.5 py-1.5 rounded-xl transition ${
                    activeTab === 'test-builder' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Tạo Đề %
                </button>
                <button
                  onClick={() => setActiveTab('teacher-analytics')}
                  className={`px-3.5 py-1.5 rounded-xl transition ${
                    activeTab === 'teacher-analytics' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Phân Tích
                </button>
              </>
            )}
          </nav>

          {/* Right Controls: Grade Select & Role Switcher */}
          <div className="flex items-center gap-3">
            {/* Grade Selector */}
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(parseInt(e.target.value, 10))}
              className="bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              <option value={10}>Lớp 10</option>
              <option value={11}>Lớp 11</option>
              <option value={12}>Lớp 12</option>
            </select>

            {/* Role Switcher */}
            <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs font-bold">
              <button
                onClick={() => setRole('STUDENT')}
                className={`px-2.5 py-1 rounded-lg transition ${
                  currentRole === 'STUDENT' ? 'bg-teal-500 text-slate-950 shadow-2xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                Học Sinh
              </button>
              <button
                onClick={() => setRole('TEACHER')}
                className={`px-2.5 py-1 rounded-lg transition ${
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
  );
};
