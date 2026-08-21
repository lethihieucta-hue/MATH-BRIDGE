import React from 'react';
import { useAppStore } from '../../lib/store';
import {
  Home,
  BookOpen,
  GraduationCap,
  Activity,
  FileQuestion,
  Layers,
} from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { currentRole, activeTab, setActiveTab } = useAppStore();

  if (currentRole === 'TEACHER') {
    return (
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111322]/95 backdrop-blur-xl border-t border-slate-800 px-2 py-2 flex justify-around items-center text-slate-400 shadow-2xl">
        <button
          onClick={() => setActiveTab('learn')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition cursor-pointer ${
            activeTab === 'learn' ? 'text-violet-400 font-black' : 'hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span>Soạn Phiếu</span>
        </button>

        <button
          onClick={() => setActiveTab('question-bank')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition cursor-pointer ${
            activeTab === 'question-bank' ? 'text-violet-400 font-black' : 'hover:text-slate-200'
          }`}
        >
          <FileQuestion className="w-5 h-5" />
          <span>Ngân Hàng</span>
        </button>

        <button
          onClick={() => setActiveTab('content-studio')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition cursor-pointer ${
            activeTab === 'content-studio' ? 'text-violet-400 font-black' : 'hover:text-slate-200'
          }`}
        >
          <Layers className="w-5 h-5" />
          <span>Biên Soạn AI</span>
        </button>

        <button
          onClick={() => setActiveTab('test-builder')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition cursor-pointer ${
            activeTab === 'test-builder' ? 'text-violet-400 font-black' : 'hover:text-slate-200'
          }`}
        >
          <GraduationCap className="w-5 h-5" />
          <span>Tạo Đề</span>
        </button>

        <button
          onClick={() => setActiveTab('teacher-dashboard')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition cursor-pointer ${
            activeTab === 'teacher-dashboard' ? 'text-violet-400 font-black' : 'hover:text-slate-200'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Lớp Học</span>
        </button>
      </div>
    );
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111322]/95 backdrop-blur-xl border-t border-slate-800 px-2 py-2 flex justify-around items-center text-slate-400 shadow-2xl">
      <button
        onClick={() => setActiveTab('learn')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition cursor-pointer ${
          activeTab === 'learn' ? 'text-violet-400 font-black' : 'hover:text-slate-200'
        }`}
      >
        <BookOpen className="w-5 h-5" />
        <span>Chuyên Đề</span>
      </button>

      <button
        onClick={() => setActiveTab('dashboard')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition cursor-pointer ${
          activeTab === 'dashboard' ? 'text-violet-400 font-black' : 'hover:text-slate-200'
        }`}
      >
        <Home className="w-5 h-5" />
        <span>Tổng Quan</span>
      </button>

      <button
        onClick={() => setActiveTab('tests')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition cursor-pointer ${
          activeTab === 'tests' ? 'text-violet-400 font-black' : 'hover:text-slate-200'
        }`}
      >
        <GraduationCap className="w-5 h-5" />
        <span>Kiểm Tra</span>
      </button>

      <button
        onClick={() => setActiveTab('progress')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition cursor-pointer ${
          activeTab === 'progress' ? 'text-violet-400 font-black' : 'hover:text-slate-200'
        }`}
      >
        <Activity className="w-5 h-5" />
        <span>MEI Index</span>
      </button>
    </div>
  );
};
