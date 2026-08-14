import React from 'react';
import { useAppStore } from '../../lib/store';
import { Home, BookOpen, Sparkles, GraduationCap, User } from 'lucide-react';

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
  const { user } = useAppStore();

  if (user?.role !== 'student') return null;

  const items = [
    { id: 'dashboard', label: 'Trang chủ', icon: Home },
    { id: 'learn', label: 'Bài học', icon: BookOpen },
    { id: 'practice', label: 'Luyện tập', icon: Sparkles },
    { id: 'tests', label: 'Bài test', icon: GraduationCap },
    { id: 'profile', label: 'Cá nhân', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 shadow-lg">
      <div className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition ${
                isActive ? 'text-teal-700 font-bold bg-teal-50/80' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-teal-600 scale-105' : ''}`} />
              <span className="text-[10px] mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
