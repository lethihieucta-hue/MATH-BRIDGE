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
} from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { currentRole, activeTab, setActiveTab } = useAppStore();

  if (currentRole === 'TEACHER') {
    return (
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 px-2 py-2 flex justify-around items-center text-slate-400">
        <button
          onClick={() => setActiveTab('teacher-dashboard')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            activeTab === 'teacher-dashboard' ? 'text-teal-400' : ''
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Lớp Học</span>
        </button>

        <button
          onClick={() => setActiveTab('question-bank')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            activeTab === 'question-bank' ? 'text-teal-400' : ''
          }`}
        >
          <FileQuestion className="w-5 h-5" />
          <span>Ngân Hàng</span>
        </button>

        <button
          onClick={() => setActiveTab('content-studio')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            activeTab === 'content-studio' ? 'text-teal-400' : ''
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span>Biên Soạn</span>
        </button>

        <button
          onClick={() => setActiveTab('test-builder')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            activeTab === 'test-builder' ? 'text-teal-400' : ''
          }`}
        >
          <GraduationCap className="w-5 h-5" />
          <span>Tạo Đề</span>
        </button>

        <button
          onClick={() => setActiveTab('teacher-analytics')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            activeTab === 'teacher-analytics' ? 'text-teal-400' : ''
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          <span>Phân Tích</span>
        </button>
      </div>
    );
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 px-2 py-2 flex justify-around items-center text-slate-400">
      <button
        onClick={() => setActiveTab('dashboard')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
          activeTab === 'dashboard' ? 'text-teal-400' : ''
        }`}
      >
        <Home className="w-5 h-5" />
        <span>Trang Chủ</span>
      </button>

      <button
        onClick={() => setActiveTab('vocabulary')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
          activeTab === 'vocabulary' ? 'text-teal-400' : ''
        }`}
      >
        <BookMarked className="w-5 h-5" />
        <span>Từ Vựng</span>
      </button>

      <button
        onClick={() => setActiveTab('learn')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
          activeTab === 'learn' ? 'text-teal-400' : ''
        }`}
      >
        <BookOpen className="w-5 h-5" />
        <span>Bài Học</span>
      </button>

      <button
        onClick={() => setActiveTab('practice')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
          activeTab === 'practice' ? 'text-teal-400' : ''
        }`}
      >
        <Sparkles className="w-5 h-5" />
        <span>Luyện Tập</span>
      </button>

      <button
        onClick={() => setActiveTab('tests')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
          activeTab === 'tests' ? 'text-teal-400' : ''
        }`}
      >
        <GraduationCap className="w-5 h-5" />
        <span>Kiểm Tra</span>
      </button>

      <button
        onClick={() => setActiveTab('progress')}
        className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
          activeTab === 'progress' ? 'text-teal-400' : ''
        }`}
      >
        <BarChart3 className="w-5 h-5" />
        <span>Chỉ Số MEI</span>
      </button>
    </div>
  );
};
