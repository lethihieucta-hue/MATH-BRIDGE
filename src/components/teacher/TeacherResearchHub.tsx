import React, { useEffect, useMemo, useState } from 'react';
import { apiFetch } from '../../lib/dataService';
import { useAppStore } from '../../lib/store';
import {
  AlertTriangle,
  BarChart3,
  Beaker,
  CheckCircle2,
  Download,
  FileLock2,
  RefreshCw,
  Save,
  ShieldCheck,
  Users,
} from 'lucide-react';

type BarrierCode = 'L' | 'C' | 'M';

interface ResearchSnapshot {
  research_mode?: {
    enabled: boolean;
    locked_at?: string | null;
    protocol_version?: string;
    note?: string;
  };
  classes?: any[];
  barrier_summary?: {
    language: number;
    comprehension: number;
    math_reasoning: number;
    total_hint_events: number;
    high_support_rate: number;
  };
  independence?: {
    first_attempt_accuracy: number;
    final_accuracy: number;
    avg_retry: number;
    no_hint_accuracy: number;
  };
  common_barriers?: { code: BarrierCode; label: string; count: number; percent: number }[];
  recent_interventions?: any[];
  question_version_count?: number;
  total_attempts?: number;
}

const barrierLabel: Record<BarrierCode, string> = {
  L: 'Language – thuật ngữ/câu lệnh',
  C: 'Comprehension – đọc hiểu/quan hệ',
  M: 'Mathematical reasoning – chiến lược Toán',
};

export const TeacherResearchHub: React.FC = () => {
  const { showNotification } = useAppStore();
  const [data, setData] = useState<ResearchSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [classId, setClassId] = useState('class-10a1');
  const [intervention, setIntervention] = useState({
    barrier_type: 'C' as BarrierCode,
    intervention_type: 'READING_STRATEGY',
    target_type: 'CLASS',
    target_id: 'class-10a1',
    note: '',
  });

  const load = async () => {
    setLoading(true);
    try {
      const snapshot = await apiFetch<ResearchSnapshot>(`/api/teacher/research-snapshot?class_id=${encodeURIComponent(classId)}`);
      setData(snapshot || {});
      if (snapshot?.classes?.length && !snapshot.classes.some((c: any) => c.id === classId)) {
        setClassId(snapshot.classes[0].id);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [classId]);

  const toggleResearchMode = async () => {
    const next = !data?.research_mode?.enabled;
    setSaving(true);
    try {
      const result = await apiFetch<any>('/api/teacher/research-mode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enabled: next,
          protocol_version: 'AMB-RP-1.0',
          note: 'Research Mode: lưu phiên bản câu hỏi, first attempt, hint, retry và teacher intervention.',
        }),
      });
      setData((prev) => ({ ...(prev || {}), research_mode: result.research_mode }));
      showNotification(next ? 'Đã bật Research Mode.' : 'Đã tắt Research Mode.');
    } finally {
      setSaving(false);
    }
  };

  const saveIntervention = async () => {
    if (!intervention.note.trim()) {
      showNotification('Hãy ghi ngắn gọn nội dung can thiệp.');
      return;
    }
    setSaving(true);
    try {
      await apiFetch('/api/teacher/interventions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...intervention,
          class_id: classId,
          teacher_id: 'usr-teacher-1',
          target_id: intervention.target_type === 'CLASS' ? classId : intervention.target_id,
        }),
      });
      setIntervention((prev) => ({ ...prev, note: '' }));
      showNotification('Đã lưu Teacher Intervention.');
      await load();
    } finally {
      setSaving(false);
    }
  };

  const downloadBlob = async (url: string, filename: string) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Export failed');
    const blob = await response.blob();
    const href = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = href;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(href);
  };

  const cards = useMemo(() => {
    const b = data?.barrier_summary;
    const i = data?.independence;
    return [
      { label: 'Language (L)', value: `${b?.language ?? 0}`, note: 'Số lượt rào cản ngôn ngữ' },
      { label: 'Comprehension (C)', value: `${b?.comprehension ?? 0}`, note: 'Số lượt khó đọc hiểu/quan hệ' },
      { label: 'Math reasoning (M)', value: `${b?.math_reasoning ?? 0}`, note: 'Số lượt khó ở bước Toán' },
      { label: 'First Attempt Accuracy', value: `${i?.first_attempt_accuracy ?? 0}%`, note: 'Độ chính xác trước hỗ trợ' },
      { label: 'High Support Rate', value: `${b?.high_support_rate ?? 0}%`, note: 'Tỷ lệ Hint Level 3' },
      { label: 'No-hint Accuracy', value: `${i?.no_hint_accuracy ?? 0}%`, note: 'Độ chính xác ở nhiệm vụ độc lập' },
    ];
  }, [data]);

  if (loading) {
    return <div className="max-w-7xl mx-auto p-6 text-sm font-bold text-slate-500">Đang tải dữ liệu nghiên cứu...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-24 md:pb-12">
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-black uppercase tracking-wide">
              <Beaker className="w-3.5 h-3.5" /> Research Mode & Barrier Analysis
            </div>
            <h1 className="text-2xl sm:text-3xl font-black mt-3">Trung tâm dữ liệu nghiên cứu AI Math Bridge</h1>
            <p className="text-sm text-slate-200 mt-2 max-w-3xl leading-relaxed">
              Theo dõi rào cản L/C/M, mức hỗ trợ, First Attempt, retry và Teacher Intervention. Các chỉ báo là bằng chứng quan sát được, không tự động gắn nhãn năng lực học sinh.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={load} className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-black inline-flex items-center gap-2">
              <RefreshCw className="w-4 h-4" /> Làm mới
            </button>
            <button
              disabled={saving}
              onClick={toggleResearchMode}
              className={`px-4 py-2.5 rounded-xl text-xs font-black inline-flex items-center gap-2 ${data?.research_mode?.enabled ? 'bg-emerald-500 text-white' : 'bg-amber-400 text-slate-950'}`}
            >
              <FileLock2 className="w-4 h-4" /> {data?.research_mode?.enabled ? 'Research Mode: ON' : 'Bật Research Mode'}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div>
          <p className="text-[10px] font-black uppercase text-slate-400">Lớp đang phân tích</p>
          <select value={classId} onChange={(e) => setClassId(e.target.value)} className="mt-1 p-2.5 rounded-xl border border-slate-300 text-sm font-bold bg-white">
            {(data?.classes || []).map((c: any) => <option key={c.id} value={c.id}>{c.name} • Khối {c.grade_id}</option>)}
          </select>
        </div>
        <div className="text-xs text-slate-500 sm:text-right">
          <p><b>{data?.total_attempts ?? 0}</b> practice attempts • <b>{data?.question_version_count ?? 0}</b> phiên bản câu hỏi được lưu</p>
          <p>Protocol: <b>{data?.research_mode?.protocol_version || 'AMB-RP-1.0'}</b></p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card.label} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs">
            <p className="text-[10px] uppercase font-black text-slate-400">{card.label}</p>
            <p className="text-3xl font-black text-slate-900 mt-1">{card.value}</p>
            <p className="text-xs text-slate-500 mt-1">{card.note}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <h2 className="font-black text-slate-900">Barrier Analysis</h2>
          </div>
          <p className="text-xs text-slate-500">Tần suất được tổng hợp từ barrier_type trong attempts và hint logs. Đây là chỉ báo chẩn đoán, không phải kết luận nguyên nhân duy nhất.</p>
          <div className="space-y-3">
            {(data?.common_barriers || []).map((b) => (
              <div key={b.code} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between gap-3 text-xs font-bold">
                  <span>{barrierLabel[b.code]}</span><span>{b.count} lượt • {b.percent}%</span>
                </div>
                <div className="mt-2 h-2.5 bg-slate-200 rounded-full overflow-hidden"><div className="h-full bg-indigo-600" style={{ width: `${Math.min(100, b.percent)}%` }} /></div>
              </div>
            ))}
            {!data?.common_barriers?.length && (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" /> Chưa có dữ liệu L/C/M. Khi Student app ghi barrier_type và hint_level, bảng này sẽ tự động có số liệu.
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600" />
            <h2 className="font-black text-slate-900">Ghi nhận Teacher Intervention</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <label className="font-bold text-slate-700">Loại rào cản
              <select value={intervention.barrier_type} onChange={(e) => setIntervention({ ...intervention, barrier_type: e.target.value as BarrierCode })} className="w-full mt-1 p-2.5 border border-slate-300 rounded-xl bg-white">
                <option value="L">L – Language</option><option value="C">C – Comprehension</option><option value="M">M – Math reasoning</option>
              </select>
            </label>
            <label className="font-bold text-slate-700">Loại can thiệp
              <select value={intervention.intervention_type} onChange={(e) => setIntervention({ ...intervention, intervention_type: e.target.value })} className="w-full mt-1 p-2.5 border border-slate-300 rounded-xl bg-white">
                <option value="VOCAB_REINFORCEMENT">Củng cố thuật ngữ</option>
                <option value="LANGUAGE_STRUCTURE">Giải thích cấu trúc ngôn ngữ</option>
                <option value="READING_STRATEGY">Chiến lược đọc hiểu</option>
                <option value="MATH_CONCEPT_REVIEW">Ôn khái niệm Toán</option>
                <option value="SIMILAR_PRACTICE">Giao bài tương tự</option>
                <option value="SMALL_GROUP">Hỗ trợ nhóm nhỏ</option>
                <option value="INDIVIDUAL_SUPPORT">Hỗ trợ cá nhân</option>
                <option value="OTHER">Khác</option>
              </select>
            </label>
            <label className="font-bold text-slate-700">Đối tượng
              <select value={intervention.target_type} onChange={(e) => setIntervention({ ...intervention, target_type: e.target.value })} className="w-full mt-1 p-2.5 border border-slate-300 rounded-xl bg-white">
                <option value="CLASS">Cả lớp</option><option value="GROUP">Nhóm</option><option value="STUDENT">Cá nhân</option>
              </select>
            </label>
            {intervention.target_type !== 'CLASS' && (
              <label className="font-bold text-slate-700">Mã nhóm / học sinh
                <input value={intervention.target_id} onChange={(e) => setIntervention({ ...intervention, target_id: e.target.value })} className="w-full mt-1 p-2.5 border border-slate-300 rounded-xl" placeholder="VD: usr-student-12" />
              </label>
            )}
          </div>
          <label className="block text-xs font-bold text-slate-700">Ghi chú ngắn về bằng chứng và cách hỗ trợ
            <textarea value={intervention.note} onChange={(e) => setIntervention({ ...intervention, note: e.target.value })} rows={4} className="w-full mt-1 p-3 border border-slate-300 rounded-xl" placeholder="VD: 12 HS nhầm at least/at most; ôn 5 phút bằng biểu diễn trục số rồi giao 3 câu tương tự." />
          </label>
          <button disabled={saving} onClick={saveIntervention} className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-black text-xs rounded-xl inline-flex justify-center items-center gap-2">
            <Save className="w-4 h-4" /> Lưu can thiệp
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4">
          <h2 className="font-black text-slate-900 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-600" /> Research protocol</h2>
          {[
            ['Question versioning', true],
            ['First-attempt / final-attempt fields', true],
            ['Hint type L/C/M + level 1–3', true],
            ['Teacher Intervention log', true],
            ['Research export CSV/JSON', true],
          ].map(([label, ok]) => (
            <div key={String(label)} className="flex items-center gap-2 text-xs font-bold text-slate-700"><CheckCircle2 className={`w-4 h-4 ${ok ? 'text-emerald-600' : 'text-slate-300'}`} /> {label}</div>
          ))}
          <p className="text-[11px] text-slate-500">Research Mode lưu lịch sử phiên bản khi câu hỏi được chỉnh sửa. Không nên sửa core pathway trong thời gian thực nghiệm nếu chưa ghi protocol deviation.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4">
          <h2 className="font-black text-slate-900 flex items-center gap-2"><Download className="w-5 h-5 text-indigo-600" /> Xuất dữ liệu nghiên cứu</h2>
          <p className="text-xs text-slate-500">CSV dùng cho Excel/SPSS/R; JSON giữ đầy đủ cấu trúc để đối soát. Product metrics như XP/streak không được đưa vào outcome chính.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button onClick={() => downloadBlob(`/api/teacher/research-export.csv?class_id=${encodeURIComponent(classId)}`, `AI_Math_Bridge_${classId}_research.csv`).catch(console.error)} className="py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs inline-flex justify-center items-center gap-2"><Download className="w-4 h-4" /> Export CSV</button>
            <button onClick={() => downloadBlob(`/api/teacher/research-export.json?class_id=${encodeURIComponent(classId)}`, `AI_Math_Bridge_${classId}_research.json`).catch(console.error)} className="py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs inline-flex justify-center items-center gap-2"><Download className="w-4 h-4" /> Export JSON</button>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border text-[11px] text-slate-600">Dataset tối thiểu: student_id, class_id, group, question_id/version, attempt_number, first_attempt_correct, final_correct, barrier_type, hint_level, retry_count, response_time, independent_mode, teacher_intervention.</div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6">
        <h2 className="font-black text-slate-900 mb-3">Can thiệp gần đây</h2>
        <div className="space-y-2">
          {(data?.recent_interventions || []).slice(0, 8).map((x: any) => (
            <div key={x.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex flex-wrap justify-between gap-2 font-bold"><span>{x.barrier_type} • {x.intervention_type} • {x.target_type}</span><span className="text-slate-400">{new Date(x.created_at).toLocaleString('vi-VN')}</span></div>
              <p className="text-slate-600 mt-1">{x.note}</p>
            </div>
          ))}
          {!data?.recent_interventions?.length && <p className="text-xs text-slate-400">Chưa có Teacher Intervention nào được ghi nhận.</p>}
        </div>
      </div>
    </div>
  );
};
