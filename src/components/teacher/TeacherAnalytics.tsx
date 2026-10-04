import React, { useEffect, useMemo, useState } from 'react';
import { fetchStudentResearchSnapshot, getTeacherCloudToken } from '../../lib/studentResearchCloudService';
import { getResearchClass, setResearchClass } from '../../lib/teacherResearchPreferences';
import { AlertCircle, BarChart3, BrainCircuit, BookOpenCheck, ShieldCheck } from 'lucide-react';

export const TeacherAnalytics: React.FC = () => {
  const [classes, setClasses] = useState<any[]>([]);
  const [classId, setClassId] = useState(getResearchClass());
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async (id = classId) => {
    if (!getTeacherCloudToken()) { setError('Chưa kết nối Student Google Sheets ở mục Nghiên cứu.'); setLoading(false); return; }
    setLoading(true); setError('');
    try {
      const data = await fetchStudentResearchSnapshot(id);
      setClasses(data.classes || []); setAnalytics(data || {});
      const selected = data.selected_class || id || data.classes?.[0]?.id || '';
      if (selected && selected !== classId) setClassId(selected);
      setResearchClass(selected);
    } catch (e: any) { setError(e?.message || 'Không đọc được dữ liệu Student.'); }
    finally { setLoading(false); }
  };
  useEffect(() => { load(classId); }, [classId]);

  const selectedClass = useMemo(() => classes.find((c) => c.id === classId), [classes, classId]);
  const b = analytics?.barrier_summary || {}; const ind = analytics?.independence || {};
  const totalEvidence = Number(b.language || 0) + Number(b.comprehension || 0) + Number(b.math_reasoning || 0);
  const barrierRows = [{code:'L',label:'Language – thuật ngữ/câu lệnh',value:Number(b.language||0)},{code:'C',label:'Comprehension – đọc hiểu/quan hệ',value:Number(b.comprehension||0)},{code:'M',label:'Mathematical reasoning – chiến lược Toán',value:Number(b.math_reasoning||0)}];
  if (loading) return <div className="max-w-7xl mx-auto p-6 text-sm font-bold text-slate-500">Đang đọc phân tích từ Student Google Sheets...</div>;
  if (error) return <div className="max-w-7xl mx-auto p-6"><div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-sm text-amber-900">{error}</div></div>;

  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-24 md:pb-12">
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center"><BarChart3 className="w-5 h-5" /></div><div><h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Phân tích rào cản & mức độc lập</h1><p className="text-xs text-slate-500 mt-0.5">Nguồn: researchAttempts trong ProgressJSON của Student Google Sheets.</p></div></div><select value={classId} onChange={(e) => setClassId(e.target.value)} className="p-2.5 rounded-xl border border-slate-300 bg-white text-xs font-bold">{classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"><Metric label="HS có dữ liệu" value={selectedClass?.student_count != null ? String(selectedClass.student_count) : '—'} note={selectedClass?.name || 'Chưa chọn lớp'} /><Metric label="First Attempt Accuracy" value={analytics?.total_attempts ? `${ind.first_attempt_accuracy ?? 0}%` : 'Chưa có dữ liệu'} note="Hiệu suất trước hỗ trợ" /><Metric label="Independent Accuracy" value={analytics?.total_attempts ? `${ind.independent_accuracy ?? 0}%` : 'Chưa có dữ liệu'} note="Nhiệm vụ Independent Mode" /><Metric label="Hint Level 3 Rate" value={Number(b.total_hint_events || 0) ? `${b.high_support_rate ?? 0}%` : 'Chưa có dữ liệu'} note="Trong các lượt đã dùng hint" /></div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4"><h2 className="font-black text-slate-900 flex items-center gap-2"><BrainCircuit className="w-5 h-5 text-indigo-600" /> Barrier profile</h2>{totalEvidence===0?<div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex gap-2"><AlertCircle className="w-4 h-4 shrink-0" /> Chưa có L/C/M từ Student app. Hệ thống không tự suy đoán số liệu.</div>:<div className="space-y-3">{barrierRows.map((r)=>{const pct=totalEvidence?Math.round((r.value/totalEvidence)*1000)/10:0;return <div key={r.code} className="p-3 rounded-2xl bg-slate-50 border"><div className="flex justify-between text-xs font-bold"><span>{r.code} • {r.label}</span><span>{r.value} lượt • {pct}%</span></div><div className="mt-2 h-2.5 bg-slate-200 rounded-full overflow-hidden"><div className="h-full bg-indigo-600" style={{width:`${pct}%`}} /></div></div>})}</div>}<p className="text-[11px] text-slate-500">Giáo viên cần đối chiếu với bài làm, Pre/Post và bối cảnh trước khi kết luận nguyên nhân.</p></div><div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4"><h2 className="font-black text-slate-900 flex items-center gap-2"><BookOpenCheck className="w-5 h-5 text-teal-600" /> Independence evidence</h2><div className="grid grid-cols-2 gap-3"><Evidence label="Final Accuracy" value={analytics?.total_attempts?`${ind.final_accuracy??0}%`:'—'} /><Evidence label="Average Retry" value={analytics?.total_attempts?String(ind.avg_retry??0):'—'} /><Evidence label="First Attempt" value={analytics?.total_attempts?`${ind.first_attempt_accuracy??0}%`:'—'} /><Evidence label="Independent" value={analytics?.total_attempts?`${ind.independent_accuracy??0}%`:'—'} /></div><div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-950"><b>Nguyên tắc diễn giải:</b> Hint giảm chỉ có ý nghĩa tích cực khi First Attempt/Independent Accuracy được duy trì hoặc tăng.</div></div></div>
    <div className="bg-slate-950 text-slate-100 rounded-3xl p-6 flex gap-3"><ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /><div className="text-xs leading-relaxed"><b>Research safeguard:</b> không dùng XP/streak làm outcome chính; không tự động gắn nhãn “học sinh yếu”.</div></div>
  </div>;
};
const Metric=({label,value,note}:{label:string;value:string;note:string})=><div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs"><p className="text-[10px] font-black uppercase text-slate-400">{label}</p><p className="text-2xl font-black text-slate-900 mt-1">{value}</p><p className="text-xs text-slate-500 mt-1">{note}</p></div>;
const Evidence=({label,value}:{label:string;value:string})=><div className="p-4 rounded-2xl bg-slate-50 border"><p className="text-[10px] uppercase font-black text-slate-400">{label}</p><p className="text-xl font-black text-slate-900 mt-1">{value}</p></div>;
