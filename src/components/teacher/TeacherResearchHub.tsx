import React, { useEffect, useMemo, useState } from 'react';
import { apiFetch } from '../../lib/dataService';
import { useAppStore } from '../../lib/store';
import {
  DEFAULT_STUDENT_SHEET_URL,
  clearTeacherCloudSession,
  fetchStudentResearchSnapshot,
  getStudentResearchApiUrl,
  getTeacherCloudToken,
  getTeacherCloudUsername,
  loginTeacherToStudentDatabase,
  saveStudentTeacherIntervention,
  setStudentResearchApiUrl,
  type StudentResearchSnapshot,
} from '../../lib/studentResearchCloudService';
import { setRecommendedBarrier, setResearchClass } from '../../lib/teacherResearchPreferences';
import {
  AlertTriangle,
  BarChart3,
  Beaker,
  CheckCircle2,
  Database,
  Download,
  ExternalLink,
  FileLock2,
  LogIn,
  LogOut,
  RefreshCw,
  Save,
  ShieldCheck,
  Users,
} from 'lucide-react';

type BarrierCode = 'L' | 'C' | 'M';

interface ResearchSnapshot extends StudentResearchSnapshot {
  research_mode?: {
    enabled: boolean;
    locked_at?: string | null;
    protocol_version?: string;
    note?: string;
  };
  question_version_count?: number;
}

const barrierLabel: Record<BarrierCode, string> = {
  L: 'Language – thuật ngữ/câu lệnh',
  C: 'Comprehension – đọc hiểu/quan hệ',
  M: 'Mathematical reasoning – chiến lược Toán',
};

export const TeacherResearchHub: React.FC = () => {
  const { showNotification } = useAppStore();
  const [data, setData] = useState<ResearchSnapshot | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [classId, setClassId] = useState('');
  const [username, setUsername] = useState(getTeacherCloudUsername());
  const [password, setPassword] = useState('');
  const [apiUrl, setApiUrl] = useState(getStudentResearchApiUrl());
  const [cloudError, setCloudError] = useState('');
  const [connected, setConnected] = useState(Boolean(getTeacherCloudToken()));
  const [intervention, setIntervention] = useState({
    barrier_type: 'C' as BarrierCode,
    intervention_type: 'READING_STRATEGY',
    target_type: 'CLASS',
    target_id: '',
    note: '',
  });

  const loadLocalResearchMode = async () => {
    try {
      const local = await apiFetch<any>('/api/teacher/research-snapshot');
      return { research_mode: local?.research_mode, question_version_count: local?.question_version_count || 0 };
    } catch {
      return { research_mode: { enabled: false, protocol_version: 'AMB-RP-1.0' }, question_version_count: 0 };
    }
  };

  const load = async (requestedClass = classId) => {
    if (!getTeacherCloudToken()) {
      setConnected(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    setCloudError('');
    try {
      const [cloud, local] = await Promise.all([
        fetchStudentResearchSnapshot(requestedClass),
        loadLocalResearchMode(),
      ]);
      const merged: ResearchSnapshot = { ...cloud, ...local };
      setData(merged);
      setConnected(true);
      const selected = cloud.selected_class || requestedClass || cloud.classes?.[0]?.id || '';
      if (selected && selected !== classId) setClassId(selected);
      setResearchClass(selected);
      setRecommendedBarrier((cloud.recommended_barrier || 'NONE') as any);
      if (cloud.recommended_barrier && cloud.recommended_barrier !== 'NONE') {
        setIntervention((prev) => ({ ...prev, barrier_type: cloud.recommended_barrier as BarrierCode }));
      }
    } catch (e: any) {
      console.error(e);
      setCloudError(e?.message || 'Không đọc được dữ liệu Student Google Sheets.');
      if (String(e?.code || '').startsWith('TEACHER_AUTH')) setConnected(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const connect = async () => {
    if (!username.trim() || !password) {
      setCloudError('Nhập tài khoản và mật khẩu giáo viên đã cấu hình trong Google Apps Script của Student.');
      return;
    }
    setSaving(true);
    setCloudError('');
    try {
      setStudentResearchApiUrl(apiUrl);
      await loginTeacherToStudentDatabase(username.trim(), password);
      setPassword('');
      setConnected(true);
      showNotification('Đã kết nối dữ liệu Student Google Sheets.');
      await load('');
    } catch (e: any) {
      setCloudError(e?.message || 'Không kết nối được Student Google Sheets.');
    } finally { setSaving(false); }
  };

  const disconnect = () => {
    clearTeacherCloudSession();
    setConnected(false);
    setData(null);
    showNotification('Đã ngắt phiên kết nối dữ liệu Student.');
  };

  const toggleResearchMode = async () => {
    const next = !data?.research_mode?.enabled;
    setSaving(true);
    try {
      const result = await apiFetch<any>('/api/teacher/research-mode', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: next, protocol_version: 'AMB-RP-1.0', note: 'Research Mode: khóa protocol phía Teacher; dữ liệu kết quả lấy từ Student Google Sheets.' }),
      });
      setData((prev) => ({ ...(prev || {}), research_mode: result.research_mode }));
      showNotification(next ? 'Đã bật Research Mode.' : 'Đã tắt Research Mode.');
    } finally { setSaving(false); }
  };

  const changeClass = async (next: string) => {
    setClassId(next);
    setResearchClass(next);
    await load(next);
  };

  const saveIntervention = async () => {
    if (!intervention.note.trim()) { showNotification('Hãy ghi ngắn gọn nội dung can thiệp.'); return; }
    if (!connected) { showNotification('Hãy kết nối Student Google Sheets trước.'); return; }
    setSaving(true);
    try {
      await saveStudentTeacherIntervention({
        ...intervention,
        class_id: classId,
        target_id: intervention.target_type === 'CLASS' ? '' : intervention.target_id,
      });
      setIntervention((prev) => ({ ...prev, note: '' }));
      showNotification('Đã lưu Teacher Intervention vào Google Sheet Student.');
      await load(classId);
    } catch (e: any) {
      showNotification(e?.message || 'Không lưu được Teacher Intervention.');
    } finally { setSaving(false); }
  };

  const cards = useMemo(() => {
    const b = data?.barrier_summary;
    const i = data?.independence;
    return [
      { label: 'Language (L)', value: `${b?.language ?? 0}`, note: 'Số lượt rào cản ngôn ngữ' },
      { label: 'Comprehension (C)', value: `${b?.comprehension ?? 0}`, note: 'Số lượt khó đọc hiểu/quan hệ' },
      { label: 'Math reasoning (M)', value: `${b?.math_reasoning ?? 0}`, note: 'Số lượt khó ở bước Toán' },
      { label: 'First Attempt Accuracy', value: `${i?.first_attempt_accuracy ?? 0}%`, note: 'Chỉ tính research-native có first attempt thật' },
      { label: 'High Support Rate', value: `${b?.high_support_rate ?? 0}%`, note: 'Hint Level 3 – chỉ tính dữ liệu research-native' },
      { label: 'Independent / No-support Accuracy', value: `${i?.independent_accuracy ?? 0}%`, note: 'Independent thật + legacy không hint/không dịch' },
    ];
  }, [data]);

  const downloadJson = () => {
    if (!data) return;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
    const href = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = href; a.download = `AI_Math_Bridge_${classId || 'all'}_research.json`; a.click(); URL.revokeObjectURL(href);
  };
  const downloadCsv = () => {
    const rows = data?.attempts || [];
    if (!rows.length) { showNotification('Chưa có research attempts để xuất CSV.'); return; }
    const headers = ['student_id','full_name','class_id','grade','group','chapter_id','lesson_id','question_id','question_version','activity_type','attempt_number','first_attempt_correct','first_attempt_observed','final_correct','barrier_type','barrier_confidence','barrier_evidence','hint_level','hint_count','retry_count','response_time_seconds','independent_mode','independence_source','support_requested_by_student','support_triggered_by_system','translation_used','self_diagnosis','data_source','data_quality','legacy_event_id','difficulty','created_at'];
    const esc = (v: any) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const csv = [headers.join(','), ...rows.map((r: any) => headers.map((h) => esc(r[h])).join(','))].join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
    const href = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = href; a.download = `AI_Math_Bridge_${classId || 'all'}_research.csv`; a.click(); URL.revokeObjectURL(href);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-24 md:pb-12">
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-black uppercase tracking-wide"><Beaker className="w-3.5 h-3.5" /> Research Mode & Barrier Analysis</div>
            <h1 className="text-2xl sm:text-3xl font-black mt-3">Trung tâm dữ liệu nghiên cứu AI Math Bridge</h1>
            <p className="text-sm text-slate-200 mt-2 max-w-3xl leading-relaxed">Teacher dùng dữ liệu research-native và tái dựng dữ liệu lịch sử từ Student Learning Database. L/C/M lịch sử luôn được gắn nguồn và mức tin cậy; các trường không có bằng chứng không được bịa.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => load(classId)} className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-black inline-flex items-center gap-2"><RefreshCw className="w-4 h-4" /> Làm mới</button>
            <button disabled={saving} onClick={toggleResearchMode} className={`px-4 py-2.5 rounded-xl text-xs font-black inline-flex items-center gap-2 ${data?.research_mode?.enabled ? 'bg-emerald-500 text-white' : 'bg-amber-400 text-slate-950'}`}><FileLock2 className="w-4 h-4" /> {data?.research_mode?.enabled ? 'Research Mode: ON' : 'Bật Research Mode'}</button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-3"><Database className="w-5 h-5 text-emerald-600 mt-0.5" /><div><h2 className="font-black text-slate-900">Nguồn dữ liệu Student Google Sheets</h2><p className="text-xs text-slate-500">Sheet này là nguồn sự thật cho lớp học và phân tích rào cản.</p></div></div>
          <a href={DEFAULT_STUDENT_SHEET_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black"><ExternalLink className="w-4 h-4" /> Mở Google Sheet Student</a>
        </div>
        {!connected ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
            <input value={apiUrl} onChange={(e) => setApiUrl(e.target.value)} className="md:col-span-2 p-2.5 border rounded-xl" placeholder="Google Apps Script /exec URL" />
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="p-2.5 border rounded-xl" placeholder="Tài khoản giáo viên" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="p-2.5 border rounded-xl" placeholder="Mật khẩu giáo viên" />
            <button disabled={saving} onClick={connect} className="md:col-span-4 py-2.5 rounded-xl bg-slate-900 text-white font-black inline-flex items-center justify-center gap-2"><LogIn className="w-4 h-4" /> Kết nối dữ liệu Student</button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs"><span className="font-bold text-emerald-700">Đã kết nối • {data?.spreadsheetName || 'AI Math Bridge Student'} • Teacher: {getTeacherCloudUsername()}</span><button onClick={disconnect} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-slate-600"><LogOut className="w-3.5 h-3.5" /> Ngắt kết nối</button></div>
        )}
        {cloudError && <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800">{cloudError}</div>}
      </div>

      {loading && <div className="p-6 text-sm font-bold text-slate-500">Đang đọc dữ liệu Student Google Sheets...</div>}

      {connected && !loading && <>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
          <div><p className="text-[10px] font-black uppercase text-slate-400">Lớp có học sinh đang học trên Student app</p><select value={classId} onChange={(e) => changeClass(e.target.value)} className="mt-1 p-2.5 rounded-xl border border-slate-300 text-sm font-bold bg-white">{(data?.classes || []).map((c: any) => <option key={c.id} value={c.id}>{c.name} • Khối {c.grade_id} • {c.student_count} HS • {c.research_attempt_count} lượt</option>)}</select></div>
          <div className="text-xs text-slate-500 sm:text-right"><p><b>{data?.total_attempts ?? 0}</b> lượt phân tích • <b>{data?.native_research_attempts ?? data?.coverage?.native_research_attempts ?? 0}</b> native • <b>{data?.historical_inferred_attempts ?? data?.coverage?.historical_inferred_attempts ?? 0}</b> lịch sử suy luận</p><p>Khuyến nghị ưu tiên: <b>{data?.recommended_barrier && data.recommended_barrier !== 'NONE' ? barrierLabel[data.recommended_barrier as BarrierCode] : 'Chưa đủ dữ liệu'}</b></p></div>
        </div>

        {data?.coverage && <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 px-4 py-3 text-xs text-indigo-950"><b>Coverage:</b> {data.coverage.native_research_attempts} lượt research-native + {data.coverage.historical_inferred_attempts} lượt lịch sử suy luận. First Attempt và Hint Level 3 vẫn chỉ tính dữ liệu native; legacy chỉ bổ sung nơi có bằng chứng.</div>}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">{cards.map((card) => <div key={card.label} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs"><p className="text-[10px] uppercase font-black text-slate-400">{card.label}</p><p className="text-3xl font-black text-slate-900 mt-1">{card.value}</p><p className="text-xs text-slate-500 mt-1">{card.note}</p></div>)}</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4"><div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-indigo-600" /><h2 className="font-black text-slate-900">Barrier Analysis</h2></div><p className="text-xs text-slate-500">Tần suất tổng hợp từ researchAttempts mới và ACTIVITY_LOG lịch sử. Dữ liệu lịch sử được suy luận theo quy tắc từ dịch, hint, đúng/sai, chênh Math–English và error label; đây là chỉ báo chẩn đoán, không phải nhãn năng lực.</p><div className="space-y-3">{(data?.common_barriers || []).map((b) => <div key={b.code} className="p-4 rounded-2xl bg-slate-50 border border-slate-200"><div className="flex items-center justify-between gap-3 text-xs font-bold"><span>{barrierLabel[b.code]}</span><span>{b.count} lượt • {b.percent}%</span></div><div className="mt-2 h-2.5 bg-slate-200 rounded-full overflow-hidden"><div className="h-full bg-indigo-600" style={{ width: `${Math.min(100, b.percent)}%` }} /></div></div>)}{!data?.total_attempts && <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex gap-2"><AlertTriangle className="w-4 h-4 shrink-0" /> Chưa có dữ liệu học tập đủ để phân tích.</div>}</div></div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-teal-600" /><h2 className="font-black text-slate-900">Ghi nhận Teacher Intervention</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"><label className="font-bold text-slate-700">Loại rào cản<select value={intervention.barrier_type} onChange={(e) => setIntervention({ ...intervention, barrier_type: e.target.value as BarrierCode })} className="w-full mt-1 p-2.5 border border-slate-300 rounded-xl bg-white"><option value="L">L – Language</option><option value="C">C – Comprehension</option><option value="M">M – Math reasoning</option></select></label><label className="font-bold text-slate-700">Loại can thiệp<select value={intervention.intervention_type} onChange={(e) => setIntervention({ ...intervention, intervention_type: e.target.value })} className="w-full mt-1 p-2.5 border border-slate-300 rounded-xl bg-white"><option value="VOCAB_REINFORCEMENT">Củng cố thuật ngữ</option><option value="LANGUAGE_STRUCTURE">Giải thích cấu trúc ngôn ngữ</option><option value="READING_STRATEGY">Chiến lược đọc hiểu</option><option value="MATH_CONCEPT_REVIEW">Ôn khái niệm Toán</option><option value="SIMILAR_PRACTICE">Giao bài tương tự</option><option value="SMALL_GROUP">Hỗ trợ nhóm nhỏ</option><option value="INDIVIDUAL_SUPPORT">Hỗ trợ cá nhân</option><option value="OTHER">Khác</option></select></label><label className="font-bold text-slate-700">Đối tượng<select value={intervention.target_type} onChange={(e) => setIntervention({ ...intervention, target_type: e.target.value, target_id: '' })} className="w-full mt-1 p-2.5 border border-slate-300 rounded-xl bg-white"><option value="CLASS">Cả lớp</option><option value="GROUP">Nhóm</option><option value="STUDENT">Cá nhân</option></select></label>{intervention.target_type === 'STUDENT' ? <label className="font-bold text-slate-700">Học sinh<select value={intervention.target_id} onChange={(e) => setIntervention({ ...intervention, target_id: e.target.value })} className="w-full mt-1 p-2.5 border border-slate-300 rounded-xl bg-white"><option value="">Chọn học sinh</option>{(data?.students || []).map((s: any) => <option key={s.student_id} value={s.student_id}>{s.full_name} • {s.student_id}</option>)}</select></label> : intervention.target_type === 'GROUP' ? <label className="font-bold text-slate-700">Tên/mã nhóm<input value={intervention.target_id} onChange={(e) => setIntervention({ ...intervention, target_id: e.target.value })} className="w-full mt-1 p-2.5 border border-slate-300 rounded-xl" placeholder="VD: Nhóm C1" /></label> : null}</div><label className="block text-xs font-bold text-slate-700">Ghi chú ngắn về bằng chứng và cách hỗ trợ<textarea value={intervention.note} onChange={(e) => setIntervention({ ...intervention, note: e.target.value })} rows={4} className="w-full mt-1 p-3 border border-slate-300 rounded-xl" placeholder="VD: 12 HS nhầm at least/at most; ôn bằng biểu diễn trục số rồi giao 3 câu tương tự." /></label><button disabled={saving} onClick={saveIntervention} className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-black text-xs rounded-xl inline-flex justify-center items-center gap-2"><Save className="w-4 h-4" /> Lưu can thiệp vào Google Sheet</button></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4"><h2 className="font-black text-slate-900 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-600" /> Research protocol</h2>{[['Question versioning', true],['First-attempt / final-attempt fields', true],['Hint type L/C/M + level 1–3', true],['Teacher Intervention log vào Google Sheet', true],['Research export từ dữ liệu Student', true]].map(([label, ok]) => <div key={String(label)} className="flex items-center gap-2 text-xs font-bold text-slate-700"><CheckCircle2 className={`w-4 h-4 ${ok ? 'text-emerald-600' : 'text-slate-300'}`} /> {label}</div>)}</div><div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4"><h2 className="font-black text-slate-900 flex items-center gap-2"><Download className="w-5 h-5 text-indigo-600" /> Xuất dữ liệu nghiên cứu</h2><p className="text-xs text-slate-500">Xuất trực tiếp dữ liệu Student đang phân tích; không lấy XP/streak làm outcome chính.</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><button onClick={downloadCsv} className="py-3 rounded-xl bg-indigo-600 text-white font-black text-xs inline-flex justify-center items-center gap-2"><Download className="w-4 h-4" /> Export CSV</button><button onClick={downloadJson} className="py-3 rounded-xl bg-slate-900 text-white font-black text-xs inline-flex justify-center items-center gap-2"><Download className="w-4 h-4" /> Export JSON</button></div></div></div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6"><h2 className="font-black text-slate-900 mb-3">Can thiệp gần đây</h2><div className="space-y-2">{(data?.recent_interventions || []).slice(0, 8).map((x: any) => <div key={x.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs"><div className="flex flex-wrap justify-between gap-2 font-bold"><span>{x.barrier_type} • {x.intervention_type} • {x.target_type}</span><span className="text-slate-400">{x.created_at ? new Date(x.created_at).toLocaleString('vi-VN') : ''}</span></div><p className="text-slate-600 mt-1">{x.note}</p></div>)}{!data?.recent_interventions?.length && <p className="text-xs text-slate-400">Chưa có Teacher Intervention nào được ghi nhận.</p>}</div></div>
      </>}
    </div>
  );
};
