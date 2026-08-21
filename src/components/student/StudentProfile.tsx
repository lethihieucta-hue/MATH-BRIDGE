import React from 'react';
import { useAppStore } from '../../lib/store';
import { LevelBadge } from './LevelBadge';
import { User, School, GraduationCap, Download, Flame, Shield, Award } from 'lucide-react';

export const StudentProfile: React.FC = () => {
  const { user, selectedGrade, currentLevel, showNotification } = useAppStore();

  const exportCSV = () => {
    const csvData = [
      ['Họ tên', 'Email', 'Khối lớp', 'Level', 'Chuỗi ngày', 'XP'],
      [user?.full_name || '', user?.email || '', selectedGrade, currentLevel, user?.streak_days || 5, user?.xp || 450],
    ];
    const csvContent = 'data:text/csv;charset=utf-8,' + csvData.map((e) => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `math_bridge_student_progress_${user?.full_name || 'student'}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('Đã xuất báo cáo CSV tiến độ thành công!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-24 md:pb-12">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black text-2xl shadow-md">
              {user?.full_name?.charAt(0) || 'S'}
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">{user?.full_name}</h1>
              <p className="text-xs text-slate-500">{user?.email}</p>
              <div className="mt-2 flex items-center gap-2">
                <LevelBadge level={currentLevel} />
                <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  Mã lớp: {user?.class_code || 'MB10A1'}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition"
          >
            <Download className="w-4 h-4" /> Export Báo Cáo CSV
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Trường Học</p>
            <p className="text-sm font-extrabold text-slate-800 mt-1">{user?.school_name || 'THPT Châu Thành A'}</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Khối Lớp</p>
            <p className="text-sm font-extrabold text-slate-800 mt-1">Lớp {selectedGrade}</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Chuỗi Ngày Học</p>
            <p className="text-sm font-extrabold text-amber-600 mt-1 flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 fill-amber-500" /> {user?.streak_days || 5} ngày
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Điểm Kinh Nghiệm</p>
            <p className="text-sm font-extrabold text-teal-700 mt-1">{user?.xp || 450} XP</p>
          </div>
        </div>
      </div>
    </div>
  );
};
