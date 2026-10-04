import React from 'react';
import { useAppStore } from '../../lib/store';
import {
  Home,
  BookOpen,
  GraduationCap,
  Activity,
  FileQuestion,
  Layers,
  UsersRound,
  Microscope,
} from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { currentRole, activeTab, setActiveTab } = useAppStore();

  if (currentRole === 'TEACHER') {
    const teacherItems = [
      { id: 'learn', label: 'Học liệu', icon: BookOpen },
      { id: 'test-builder', label: 'Tạo Test', icon: GraduationCap },
      { id: 'teacher-dashboard', label: 'Lớp', icon: UsersRound },
      { id: 'teacher-research', label: 'Nghiên cứu', icon: Microscope },
    ];
    return (
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111322]/95 backdrop-blur-xl border-t border-slate-800 px-2 py-2 flex justify-around items-center text-slate-400 shadow-2xl">
        {teacherItems.map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.id || (item.id === 'teacher-dashboard' && activeTab === 'teacher-analytics');
          return (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition ${active ? 'text-violet-400 font-black' : 'hover:text-slate-200'}`}>
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
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
