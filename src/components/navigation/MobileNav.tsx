import React from 'react';
import { useAppStore } from '../../lib/store';
import {
  Home,
  BookMarked,
  Layers,
  BookOpen,
  FileQuestion,
  Sparkles,
  GraduationCap,
  BarChart3,
  User,
  Activity,
} from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { currentRole, activeTab, setActiveTab } = useAppStore();

  if (currentRole === 'TEACHER') {
    return (
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0F19]/95 backdrop-blur-xl border-t border-slate-800/80 px-2 py-2 flex justify-around items-center text-slate-400 shadow-2xl">
        <button
          onClick={() => setActiveTab('teacher-dashboard')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${
            activeTab === 'teacher-dashboard' ? 'text-teal-400 font-black' : 'hover:text-slate-200'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Lớp Học</span>
        </button>

        <button
          onClick={() => setActiveTab('question-bank')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${
            activeTab === 'question-bank' ? 'text-teal-400 font-black' : 'hover:text-slate-200'
          }`}
        >
          <FileQuestion className="w-5 h-5" />
          <span>Ngân Hàng</span>
        </button>

        <button
          onClick={() => setActiveTab('content-studio')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${
            activeTab === 'content-studio' ? 'text-teal-400 font-black' : 'hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span>Biên Soạn AI</span>
        </button>

        <button
          onClick={() => setActiveTab('test-builder')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${
            activeTab === 'test-builder' ? 'text-teal-400 font-black' : 'hover:text-slate-200'
          }`}
        >
          <GraduationCap className="w-5 h-5" />
          <span>Tạo Đề %</span>
        </button>

        <button
          onClick={() => setActiveTab('teacher-analytics')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${
            activeTab === 'teacher-analytics' ? 'text-teal-400 font-black' : 'hover:text-slate-200'
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          <span>Phân Tích</span>
        </button>
      </div>
    );
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0F19]/95 backdrop-blur-xl border-t border-slate-800/80 px-2 py-2 flex justify-around items-center text-slate-400 shadow-2xl">
      <button
        onClick={() => setActiveTab('dashboard')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${
          activeTab === 'dashboard' ? 'text-teal-400 font-black' : 'hover:text-slate-200'
        }`}
      >
        <Home className="w-5 h-5" />
        <span>Tổng Quan</span>
      </button>

      <button
        onClick={() => setActiveTab('vocabulary')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${
          activeTab === 'vocabulary' ? 'text-teal-400 font-black' : 'hover:text-slate-200'
        }`}
      >
        <BookMarked className="w-5 h-5" />
        <span>Từ Vựng</span>
      </button>

      <button
        onClick={() => setActiveTab('learn')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${
          activeTab === 'learn' ? 'text-teal-400 font-black' : 'hover:text-slate-200'
        }`}
      >
        <BookOpen className="w-5 h-5" />
        <span>Bài Học</span>
      </button>

      <button
        onClick={() => setActiveTab('grapher')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${
          activeTab === 'grapher' ? 'text-teal-400 font-black' : 'hover:text-slate-200'
        }`}
      >
        <span className="text-xs font-mono font-bold">f(x)</span>
        <span>Đồ Thị</span>
      </button>

      <button
        onClick={() => setActiveTab('practice')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${
          activeTab === 'practice' ? 'text-teal-400 font-black' : 'hover:text-slate-200'
        }`}
      >
        <Sparkles className="w-5 h-5" />
        <span>Luyện Tập</span>
      </button>

      <button
        onClick={() => setActiveTab('progress')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${
          activeTab === 'progress' ? 'text-teal-400 font-black' : 'hover:text-slate-200'
        }`}
      >
        <Activity className="w-5 h-5" />
        <span>MEI Index</span>
      </button>
    </div>
  );
};
