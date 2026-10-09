import React, { useEffect, useState } from 'react';
import { fetchStudentResearchSnapshot, getTeacherCloudToken } from '../../lib/studentResearchCloudService';
import { setResearchClass } from '../../lib/teacherResearchPreferences';
import { BarChart3, Database, GraduationCap, Microscope, Users } from 'lucide-react';

interface TeacherDashboardProps { setActiveTab: (tab: string) => void; }

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ setActiveTab }) => {
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(Boolean(getTeacherCloudToken()));
  const [error, setError] = useState('');

  const fetchClasses = async () => {
    if (!getTeacherCloudToken()) { setConnected(false); setLoading(false); return; }
    setLoading(true); setError('');
    try {
      const data = await fetchStudentResearchSnapshot('');
      setClasses(data.classes || []);
      setConnected(true);
    } catch (e: any) { setError(e?.message || 'Không đọc được lớp từ Student Google Sheets.'); setConnected(false); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchClasses(); }, []);

  const openClassAnalysis = (className: string) => {
    setResearchClass(className);
    setActiveTab('teacher-research');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-24 md:pb-12">
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2"><span className="bg-teal-500/20 text-teal-200 text-xs px-3 py-1 rounded-full font-bold border border-teal-400/30">Teacher Control Studio</span><h1 className="text-2xl sm:text-3xl font-black">Lớp học từ AI Math Bridge Student</h1><p className="text-xs sm:text-sm text-teal-100/90 max-w-xl leading-relaxed">Danh sách lớp được lấy trực tiếp từ những học sinh đã có hoạt động trong Student Google Sheets; không tạo lớp thủ công riêng ở Teacher.</p></div>
          <div className="flex flex-wrap gap-2"><button onClick={() => setActiveTab('test-builder')} className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl"><GraduationCap className="w-4 h-4" /> Tạo bài Test</button><button onClick={() => setActiveTab('teacher-research')} className="inline-flex items-center gap-2 px-4 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-extrabold text-xs rounded-xl"><Microscope className="w-4 h-4" /> Phân tích rào cản</button></div>
        </div>
      </div>

      {!connected && !loading && <div className="p-5 rounded-3xl bg-amber-50 border border-amber-200 text-sm text-amber-900 flex flex-col md:flex-row md:items-center justify-between gap-3"><div className="flex gap-2"><Database className="w-5 h-5 shrink-0" /><span>{error || 'Teacher chưa kết nối Learning Database của Student.'}</span></div><button onClick={() => setActiveTab('teacher-research')} className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-black">Kết nối tại Nghiên cứu</button></div>}
      {loading && <div className="p-6 text-sm font-bold text-slate-500">Đang đọc lớp học từ Student Google Sheets...</div>}

      {connected && !loading && <div className="space-y-4"><div className="flex items-center justify-between"><h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2"><Users className="w-5 h-5 text-teal-600" /> Lớp có học sinh hoạt động ({classes.length})</h2><button onClick={fetchClasses} className="text-xs font-bold px-3 py-2 rounded-xl border bg-white">Làm mới</button></div>
        {classes.length === 0 ? <div className="p-5 rounded-2xl bg-white border text-sm text-slate-500">Chưa có lớp nào có dữ liệu học tập trong Student Google Sheets.</div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{classes.map((c) => <div key={c.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-4 hover:border-teal-300 transition"><div className="flex items-start justify-between"><div><span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">Khối {c.grade_id}</span><h3 className="text-base font-extrabold text-slate-900 mt-2">{c.name}</h3><p className="text-xs text-slate-500">Nguồn: Student Learning Database</p></div><div className="text-right"><span className="text-2xl font-black text-teal-700">{c.student_count || 0}</span><p className="text-[10px] text-slate-400 font-bold uppercase">HS có dữ liệu</p></div></div><div className="grid grid-cols-2 gap-2 text-xs"><div className="p-3 rounded-xl bg-slate-50 border"><b>{c.active_student_count || 0}</b><div className="text-slate-500">HS hoạt động</div></div><div className="p-3 rounded-xl bg-slate-50 border"><b>{c.research_attempt_count || 0}</b><div className="text-slate-500">Lượt phân tích</div></div></div><button onClick={() => openClassAnalysis(c.id)} className="w-full py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs rounded-xl border border-teal-200 flex items-center justify-center gap-2"><BarChart3 className="w-4 h-4" /> Xem phân tích rào cản</button></div>)}</div>}
      </div>}
    </div>
  );
};
