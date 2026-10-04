import React, { useEffect, useMemo, useState } from 'react';
import { Activity, BarChart3, Clock3, GraduationCap, LogOut, RefreshCw, Search, ShieldCheck, UserCheck, Users } from 'lucide-react';
import { clearTeacherToken, getTeacherToken, loadTeacherAnalytics, loginTeacher, type TeacherAnalyticsStudent } from '../services/teacherAnalyticsService';

interface Props { onExit: () => void; }
type GradeFilter = 'all' | 10 | 11 | 12;
type NeedFilter = 'all' | 'math' | 'english' | 'both' | 'inactive' | 'nodata';

function fmtDuration(seconds: number) {
  const s = Math.max(0, Math.round(seconds || 0));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
  return h ? `${h}g ${m}p` : `${m}p`;
}
function fmtAgo(value: string) {
  if (!value) return 'Chưa ghi nhận';
  const t = new Date(value).getTime();
  if (!Number.isFinite(t)) return 'Chưa ghi nhận';
  const d = Math.max(0, Date.now() - t);
  const min = Math.floor(d / 60000);
  if (min < 1) return 'Vừa xong';
  if (min < 60) return `${min} phút trước`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} giờ trước`;
  return `${Math.floor(hr / 24)} ngày trước`;
}
function avgScore(s: TeacherAnalyticsStudent) {
  const vals = [s.mathScore, s.mathEnglishScore].filter((v): v is number => typeof v === 'number');
  return vals.length ? Math.round(vals.reduce((a,b)=>a+b,0)/vals.length) : null;
}
function needLabel(s: TeacherAnalyticsStudent) {
  if (!s.assessmentCount) return 'Chưa đủ dữ liệu';
  if (s.supportNeed === 'BOTH') return 'Yếu cả hai';
  if (s.supportNeed === 'MATH') return 'Cần củng cố Toán';
  if (s.supportNeed === 'MATH_ENGLISH') return 'Cần Math English';
  return 'Cân bằng';
}

const Stat = ({label,value,note}:{label:string;value:string|number;note?:string}) => <div className="rounded-2xl bg-white border border-slate-200 p-4"><div className="text-[10px] font-black uppercase text-slate-400">{label}</div><div className="text-2xl font-black text-indigo-700 mt-1">{value}</div>{note && <div className="text-[10px] text-slate-500 mt-0.5">{note}</div>}</div>;

export const TeacherPortal: React.FC<Props> = ({ onExit }) => {
  const [authed, setAuthed] = useState(() => !!getTeacherToken());
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [students, setStudents] = useState<TeacherAnalyticsStudent[]>([]);
  const [generatedAt, setGeneratedAt] = useState('');
  const [trackingStartedAt, setTrackingStartedAt] = useState('');
  const [grade, setGrade] = useState<GradeFilter>('all');
  const [need, setNeed] = useState<NeedFilter>('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'score'|'study'|'recent'>('score');
  const [selected, setSelected] = useState<TeacherAnalyticsStudent | null>(null);

  const refresh = async () => {
    setBusy(true); setError('');
    try {
      const data = await loadTeacherAnalytics();
      setStudents(data.students); setGeneratedAt(data.generatedAt); setTrackingStartedAt(data.trackingStartedAt || ''); setAuthed(true);
    } catch (e) { setError(e instanceof Error ? e.message : 'Không tải được dữ liệu.'); if (!getTeacherToken()) setAuthed(false); }
    finally { setBusy(false); }
  };
  useEffect(() => { if (authed) void refresh(); }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setError('');
    try { await loginTeacher(username.trim(), password); setPassword(''); setAuthed(true); setTimeout(()=>void refresh(), 0); }
    catch(e){ setError(e instanceof Error ? e.message : 'Không đăng nhập được.'); }
    finally{ setBusy(false); }
  };

  const stats = useMemo(() => {
    const assessed = students.filter(s=>s.assessmentCount>0);
    const active7 = students.filter(s=>s.lastSeenAt && Date.now()-new Date(s.lastSeenAt).getTime() <= 7*86400000).length;
    const active30 = students.filter(s=>s.lastSeenAt && Date.now()-new Date(s.lastSeenAt).getTime() <= 30*86400000).length;
    const online = students.filter(s=>s.online).length;
    const avgMath = assessed.length ? Math.round(assessed.reduce((a,s)=>a+(s.mathScore||0),0)/assessed.length) : 0;
    const avgEng = assessed.length ? Math.round(assessed.reduce((a,s)=>a+(s.mathEnglishScore||0),0)/assessed.length) : 0;
    const totalSecs = students.reduce((a,s)=>a+s.totalStudySeconds,0);
    return { assessed:assessed.length, active7, active30, online, avgMath, avgEng, totalSecs,
      math: students.filter(s=>s.supportNeed==='MATH').length,
      english: students.filter(s=>s.supportNeed==='MATH_ENGLISH').length,
      both: students.filter(s=>s.supportNeed==='BOTH').length,
      balanced: students.filter(s=>s.supportNeed==='BALANCED').length,
      nodata: students.filter(s=>!s.assessmentCount).length,
    };
  }, [students]);

  const classes = useMemo(() => {
    const map = new Map<string,{sumM:number;sumE:number;n:number}>();
    students.filter(s=>s.assessmentCount>0).forEach(s=>{ const v=map.get(s.className)||{sumM:0,sumE:0,n:0}; v.sumM+=s.mathScore||0;v.sumE+=s.mathEnglishScore||0;v.n++;map.set(s.className,v); });
    return [...map.entries()].map(([name,v])=>({name,math:Math.round(v.sumM/v.n),eng:Math.round(v.sumE/v.n)})).sort((a,b)=>a.name.localeCompare(b.name,'vi',{numeric:true}));
  }, [students]);

  const filtered = useMemo(() => students.filter(s => {
    if (grade !== 'all' && s.grade !== grade) return false;
    if (query && !`${s.fullName} ${s.studentId} ${s.className}`.toLocaleLowerCase('vi').includes(query.toLocaleLowerCase('vi'))) return false;
    if (need === 'math' && s.supportNeed !== 'MATH') return false;
    if (need === 'english' && s.supportNeed !== 'MATH_ENGLISH') return false;
    if (need === 'both' && s.supportNeed !== 'BOTH') return false;
    if (need === 'nodata' && s.assessmentCount > 0) return false;
    if (need === 'inactive' && (!s.lastSeenAt || Date.now()-new Date(s.lastSeenAt).getTime() <= 7*86400000)) return false;
    return true;
  }).sort((a,b)=> sort==='study' ? b.totalStudySeconds-a.totalStudySeconds : sort==='recent' ? new Date(b.lastSeenAt||0).getTime()-new Date(a.lastSeenAt||0).getTime() : (avgScore(b)??-1)-(avgScore(a)??-1)), [students,grade,need,query,sort]);

  if (!authed) return <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4"><form onSubmit={submit} className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl"><div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center"><GraduationCap /></div><h1 className="text-2xl font-black mt-4">Đăng nhập Giáo viên</h1><p className="text-xs text-slate-500 mt-1">Khu vực riêng để theo dõi toàn trường. Dữ liệu học sinh không bị thay đổi khi giáo viên xem Dashboard.</p><div className="space-y-3 mt-6"><input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Tài khoản giáo viên" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Mật khẩu" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"/>{error&&<div className="text-xs text-rose-600 font-bold">{error}</div>}<button disabled={busy} className="w-full rounded-xl bg-indigo-600 text-white py-3 font-black disabled:opacity-50">{busy?'Đang kiểm tra...':'Vào Dashboard giáo viên'}</button><button type="button" onClick={onExit} className="w-full text-xs font-bold text-slate-500 py-2">← Trở lại đăng nhập học sinh</button></div></form></div>;

  const maxClass = Math.max(100, ...classes.flatMap(c=>[c.math,c.eng]));
  return <div className="min-h-screen bg-slate-100 text-slate-900 p-3 sm:p-5 lg:p-7">
    <div className="max-w-[1600px] mx-auto space-y-5">
      <section className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm"><div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between"><div><div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1 text-[11px] font-black"><ShieldCheck className="w-3.5 h-3.5"/> TEACHER DASHBOARD · READ ONLY ANALYTICS</div><h1 className="text-2xl font-black mt-2">Theo dõi tiến độ học sinh</h1><p className="text-xs text-slate-500 mt-1">Xếp hạng, mức độ hoạt động, thời gian học và phân tích Toán / Math English toàn trường.</p></div><div className="flex flex-wrap gap-2"><button onClick={()=>void refresh()} disabled={busy} className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-black flex items-center gap-1"><RefreshCw className={`w-3.5 h-3.5 ${busy?'animate-spin':''}`}/> Làm mới</button><button onClick={()=>{clearTeacherToken();setAuthed(false);}} className="px-3 py-2 rounded-xl border border-rose-200 text-rose-700 text-xs font-black flex items-center gap-1"><LogOut className="w-3.5 h-3.5"/> Đăng xuất GV</button></div></div>{error&&<div className="mt-3 rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs font-bold text-rose-700">{error}</div>}</section>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3"><Stat label="Roster" value={students.length}/><Stat label="Đã có điểm" value={stats.assessed}/><Stat label="Đang online" value={stats.online}/><Stat label="Học 7 ngày" value={stats.active7}/><Stat label="Học 30 ngày" value={stats.active30}/><Stat label="Toán TB" value={stats.avgMath||'--'}/><Stat label="Math English TB" value={stats.avgEng||'--'}/><Stat label="Tổng giờ ghi nhận" value={fmtDuration(stats.totalSecs)} note="Từ bản theo dõi mới"/></div>

      <div className="grid lg:grid-cols-3 gap-4">
        <section className="rounded-3xl bg-white border border-slate-200 p-5"><div className="font-black flex items-center gap-2"><BarChart3 className="w-5 h-5 text-indigo-600"/> Thực trạng năng lực</div><div className="space-y-3 mt-4">{[['Cân bằng',stats.balanced],['Cần củng cố Toán',stats.math],['Cần Math English',stats.english],['Yếu cả hai',stats.both],['Chưa đủ dữ liệu',stats.nodata]].map(([label,val])=><div key={String(label)}><div className="flex justify-between text-xs font-bold"><span>{label}</span><span>{val}</span></div><div className="h-2 bg-slate-100 rounded-full mt-1 overflow-hidden"><div className="h-full bg-indigo-500 rounded-full" style={{width:`${students.length?Number(val)/students.length*100:0}%`}}/></div></div>)}</div></section>
        <section className="rounded-3xl bg-white border border-slate-200 p-5"><div className="font-black flex items-center gap-2"><Activity className="w-5 h-5 text-emerald-600"/> Mức độ hoạt động</div><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-emerald-50 p-4"><div className="text-3xl font-black text-emerald-700">{stats.online}</div><div className="text-xs font-bold">Đang online</div></div><div className="rounded-2xl bg-indigo-50 p-4"><div className="text-3xl font-black text-indigo-700">{stats.active7}</div><div className="text-xs font-bold">Có học ≤ 7 ngày</div></div><div className="rounded-2xl bg-violet-50 p-4"><div className="text-3xl font-black text-violet-700">{stats.active30}</div><div className="text-xs font-bold">Có học ≤ 30 ngày</div></div><div className="rounded-2xl bg-amber-50 p-4"><div className="text-3xl font-black text-amber-700">{students.length-stats.active7}</div><div className="text-xs font-bold">Chưa học &gt; 7 ngày</div></div></div><p className="text-[10px] text-slate-400 mt-3">Online = có heartbeat trong khoảng 2 phút gần nhất.</p></section>
        <section className="rounded-3xl bg-white border border-slate-200 p-5"><div className="font-black">Điểm trung bình theo lớp</div><div className="mt-4 max-h-64 overflow-y-auto space-y-3 pr-1">{classes.map(c=><div key={c.name}><div className="flex justify-between text-[11px] font-black"><span>{c.name}</span><span>Toán {c.math} · EN {c.eng}</span></div><div className="grid grid-cols-2 gap-1 mt-1"><div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-indigo-500" style={{width:`${c.math/maxClass*100}%`}}/></div><div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-violet-500" style={{width:`${c.eng/maxClass*100}%`}}/></div></div></div>)}</div></section>
      </div>

      <section className="rounded-3xl bg-white border border-slate-200 p-5"><div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3"><div className="font-black flex items-center gap-2"><Users className="w-5 h-5 text-indigo-600"/> Danh sách học sinh <span className="text-xs text-slate-400">({filtered.length})</span></div><div className="flex flex-wrap gap-2"><div className="relative"><Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Tên / mã HS / lớp" className="pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs w-48"/></div><select value={grade} onChange={e=>setGrade(e.target.value==='all'?'all':Number(e.target.value) as 10|11|12)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold"><option value="all">Tất cả khối</option><option value="10">Khối 10</option><option value="11">Khối 11</option><option value="12">Khối 12</option></select><select value={need} onChange={e=>setNeed(e.target.value as NeedFilter)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold"><option value="all">Tất cả tình trạng</option><option value="math">Yếu Toán</option><option value="english">Yếu Math English</option><option value="both">Yếu cả hai</option><option value="inactive">Chưa học &gt;7 ngày</option><option value="nodata">Chưa đủ dữ liệu</option></select><select value={sort} onChange={e=>setSort(e.target.value as typeof sort)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold"><option value="score">Điểm cao → thấp</option><option value="study">Giờ học cao → thấp</option><option value="recent">Online gần nhất</option></select></div></div>
        <div className="overflow-x-auto mt-4"><table className="w-full min-w-[1200px] text-xs"><thead><tr className="text-left text-[10px] uppercase text-slate-400 border-b"><th className="py-3">#</th><th>Học sinh</th><th>Lớp</th><th>Toán</th><th>Math English</th><th>TB</th><th>Trạng thái</th><th>Lần online gần nhất</th><th>Tổng giờ học</th><th>AI Tutor</th><th>Speaking</th><th>Phân tích</th></tr></thead><tbody>{filtered.map((s,i)=><tr onClick={()=>setSelected(s)} key={s.studentId} className="border-b border-slate-100 hover:bg-indigo-50/50 cursor-pointer"><td className="py-3 font-black text-slate-400">{i+1}</td><td><div className="font-black">{s.fullName}</div><div className="text-[10px] text-slate-400">{s.studentId}</div></td><td className="font-bold">{s.className}</td><td className="font-black">{s.mathScore??'--'}</td><td className="font-black">{s.mathEnglishScore??'--'}</td><td className="font-black text-indigo-700">{avgScore(s)??'--'}</td><td>{s.online?<span className="font-black text-emerald-600">● Đang online</span>:<span className="text-slate-500">Offline</span>}</td><td>{fmtAgo(s.lastSeenAt||s.lastLoginAt)}</td><td className="font-bold">{fmtDuration(s.totalStudySeconds)}</td><td>{s.tutorTurns}</td><td>{s.speakingTurns}</td><td><span className={`px-2 py-1 rounded-full text-[10px] font-black ${s.supportNeed==='BOTH'?'bg-rose-100 text-rose-700':s.supportNeed==='MATH'||s.supportNeed==='MATH_ENGLISH'?'bg-amber-100 text-amber-700':s.assessmentCount?'bg-emerald-100 text-emerald-700':'bg-slate-100 text-slate-500'}`}>{needLabel(s)}</span></td></tr>)}</tbody></table></div>
        {trackingStartedAt&&<p className="mt-3 text-[10px] text-slate-400">Theo dõi thời lượng bắt đầu từ: {new Date(trackingStartedAt).toLocaleString('vi-VN')}. Dữ liệu học tập cũ vẫn giữ nguyên; hệ thống không hồi tố giờ học trước thời điểm này.</p>}
      </section>
    </div>
    {selected&&<div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onClick={()=>setSelected(null)}><div onClick={e=>e.stopPropagation()} className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl"><div className="flex justify-between"><div><div className="text-xl font-black">{selected.fullName}</div><div className="text-xs text-slate-500">{selected.studentId} · {selected.className}</div></div><button onClick={()=>setSelected(null)} className="text-slate-400 font-black">✕</button></div><div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5"><Stat label="Toán" value={selected.mathScore??'--'}/><Stat label="Math English" value={selected.mathEnglishScore??'--'}/><Stat label="Tổng giờ" value={fmtDuration(selected.totalStudySeconds)}/><Stat label="AI Tutor" value={selected.tutorTurns}/></div><div className="mt-4 rounded-2xl bg-slate-50 p-4 text-xs space-y-2"><div><b>Trạng thái:</b> {selected.online?'Đang online':fmtAgo(selected.lastSeenAt||selected.lastLoginAt)}</div><div><b>Phân tích:</b> {needLabel(selected)}</div><div><b>Bài làm:</b> {selected.attemptedAnswers} lượt · đúng {selected.correctAnswers}</div><div><b>Math Speaking:</b> {selected.speakingTurns} lượt</div></div></div></div>}
  </div>;
};
