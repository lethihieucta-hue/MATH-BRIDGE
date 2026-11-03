import React, { useEffect, useMemo, useState } from 'react';
import { useAppStore } from '../../lib/store';
import type { BarrierType } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { BARRIER_ORDER, BARRIER_TAG_LABEL, getQuestionBarrierTags } from '../../lib/barrierTags';
import { setBarrierFocus } from '../../lib/teacherResearchPreferences';
import { findQuestionById } from '../../lib/dataService';
import { pullAndMergeBank } from '../../lib/teacherBankSync';
import {
  fetchOnlineExamScores,
  getTeacherCloudToken,
  getTeacherCloudUsername,
  loginTeacherToStudentDatabase,
  type OnlineExamScoreRecord,
} from '../../lib/studentResearchCloudService';
import { Award, Download, LogIn, RefreshCw, Users } from 'lucide-react';

/** Đăng nhập tài khoản giáo viên (dùng chung token với mục Nghiên cứu). */
export const TeacherCloudLogin: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true); setError('');
    try {
      await loginTeacherToStudentDatabase(username.trim(), password);
      setPassword('');
      void pullAndMergeBank();
      onDone();
    } catch (err: any) {
      setError(err?.message || 'Không đăng nhập được.');
    } finally { setBusy(false); }
  };
  return (
    <form onSubmit={submit} className="bg-white rounded-3xl border border-slate-200 p-5 space-y-3 max-w-md">
      <div className="flex items-center gap-2 font-black text-slate-900 text-sm"><LogIn className="w-4 h-4" /> Đăng nhập tài khoản giáo viên</div>
      <p className="text-[11px] text-slate-500">Dùng tài khoản giáo viên đã cấu hình trong Google Sheet (menu AI Math Bridge → Cấu hình tài khoản Giáo viên).</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Tên đăng nhập" autoComplete="username" className="w-full p-2.5 rounded-xl border border-slate-300 text-sm" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" type="password" autoComplete="current-password" className="w-full p-2.5 rounded-xl border border-slate-300 text-sm" />
      {error && <div className="text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-xl p-2">{error}</div>}
      <button disabled={busy || !username || !password} className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-black disabled:opacity-50">{busy ? 'Đang đăng nhập…' : 'Đăng nhập'}</button>
    </form>
  );
};

const csvCell = (v: unknown) => {
  const s = String(v ?? '');
  const safe = /^[=+\-@]/.test(s) ? `'${s}` : s;
  return /[",\n]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
};

export const OnlineExamResults: React.FC = () => {
  const { setActiveTab, showNotification } = useAppStore();
  const [logged, setLogged] = useState(Boolean(getTeacherCloudToken()));
  const [scores, setScores] = useState<OnlineExamScoreRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [examId, setExamId] = useState('');

  const load = async () => {
    setLoading(true); setError('');
    try {
      const list = await fetchOnlineExamScores();
      setScores(list);
      if (!examId && list.length) setExamId(list[list.length - 1].examId);
    } catch (e: any) {
      setError(e?.message || 'Không tải được điểm.');
      if (String(e?.code || '').startsWith('TEACHER_AUTH')) setLogged(false);
    } finally { setLoading(false); }
  };
  useEffect(() => { if (logged) void load(); }, [logged]);

  const exams = useMemo(() => {
    const m = new Map<string, { id: string; title: string; count: number; avg: number; last: string }>();
    scores.forEach((s) => {
      const cur = m.get(s.examId) || { id: s.examId, title: s.examTitle, count: 0, avg: 0, last: '' };
      cur.avg = (cur.avg * cur.count + Number(s.score10 || 0)) / (cur.count + 1);
      cur.count += 1;
      cur.last = String(s.receivedAt || s.submittedAt || '') > cur.last ? String(s.receivedAt || s.submittedAt || '') : cur.last;
      m.set(s.examId, cur);
    });
    return Array.from(m.values()).sort((a, b) => b.last.localeCompare(a.last));
  }, [scores]);

  const rows = useMemo(() => scores.filter((s) => s.examId === examId).sort((a, b) => a.studentClass.localeCompare(b.studentClass) || a.studentName.localeCompare(b.studentName)), [scores, examId]);

  // Tỷ lệ đúng theo câu và theo nhãn rào cản L/C/M
  const analysis = useMemo(() => {
    const perQ = new Map<string, { right: number; total: number }>();
    rows.forEach((r) => (r.details || []).forEach((d) => {
      const cur = perQ.get(d.id) || { right: 0, total: 0 };
      cur.total += 1; cur.right += Number(d.ok) ? 1 : 0;
      perQ.set(d.id, cur);
    }));
    const byTag: Record<BarrierType, { right: number; total: number }> = { L: { right: 0, total: 0 }, C: { right: 0, total: 0 }, M: { right: 0, total: 0 } };
    const questions = Array.from(perQ.entries()).map(([id, v]) => {
      const q = findQuestionById(id);
      const tags = getQuestionBarrierTags({ id, barrier_tags: q?.barrier_tags });
      tags.forEach((t) => { byTag[t].right += v.right; byTag[t].total += v.total; });
      return { id, q, tags, pct: v.total ? Math.round((v.right / v.total) * 100) : 0, ...v };
    });
    const weakest = BARRIER_ORDER.filter((t) => byTag[t].total > 0).sort((a, b) => byTag[a].right / byTag[a].total - byTag[b].right / byTag[b].total)[0];
    return { questions, byTag, weakest };
  }, [rows]);

  const exportCsv = () => {
    const header = ['STT', 'Họ tên', 'Lớp', 'SBD', 'Điểm (10)', 'Số câu đúng', 'Số câu chấm', 'Thời gian', 'Nộp lúc'];
    const lines = [header, ...rows.map((r, i) => [i + 1, r.studentName, r.studentClass, r.studentSbd, r.score10, r.correctCount, r.totalGradable, r.timeSpent || '', r.submittedAt])];
    const blob = new Blob(['﻿' + lines.map((l) => l.map(csvCell).join(',')).join('\n')], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `diem_${examId}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const practiceWeakest = () => {
    if (!analysis.weakest) return;
    setBarrierFocus(analysis.weakest);
    showNotification(`Đã chọn rào cản ${analysis.weakest} – tạo đề luyện tập theo nhãn này.`);
    setActiveTab('test-builder');
  };

  if (!logged) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        <h1 className="text-xl font-extrabold text-slate-900">Điểm thi online</h1>
        <p className="text-xs text-slate-600">Điểm học sinh nộp qua link phòng thi được lưu trong Google Sheet của cô (trang ONLINE_EXAM_SCORES). Đăng nhập để xem.</p>
        <TeacherCloudLogin onDone={() => setLogged(true)} />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-5 pb-24">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-5 rounded-3xl border border-slate-200">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 flex items-center gap-2"><Award className="w-5 h-5 text-amber-500" /> Điểm thi online</h1>
          <p className="text-[11px] text-slate-500">Tài khoản: {getTeacherCloudUsername() || 'giáo viên'} · Dữ liệu từ Google Sheet, trang ONLINE_EXAM_SCORES</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => void load()} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold"><RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} /> Tải lại</button>
          {rows.length > 0 && <button onClick={exportCsv} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"><Download className="w-3.5 h-3.5" /> Tải CSV</button>}
        </div>
      </div>

      {error && <div className="text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-2xl p-3">{error}</div>}
      {!loading && !error && exams.length === 0 && (
        <div className="text-center text-xs text-slate-500 bg-white rounded-3xl border border-dashed border-slate-300 p-8">Chưa có bài nộp nào. Tạo link phòng thi ở mục Tạo Bài Test và gửi cho học sinh.</div>
      )}

      {exams.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {exams.map((e) => (
            <button key={e.id} onClick={() => setExamId(e.id)} className={`text-left px-3 py-2 rounded-2xl border text-xs ${e.id === examId ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-700'}`}>
              <div className="font-black truncate max-w-[260px]">{e.title || e.id}</div>
              <div className="opacity-80">{e.count} bài · TB {e.avg.toFixed(2).replace('.', ',')}</div>
            </button>
          ))}
        </div>
      )}

      {rows.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-4"><div className="text-[10px] font-black text-slate-500 uppercase flex items-center gap-1"><Users className="w-3 h-3" /> Số bài</div><div className="text-2xl font-black">{rows.length}</div></div>
            {BARRIER_ORDER.map((t) => {
              const v = analysis.byTag[t];
              const pct = v.total ? Math.round((v.right / v.total) * 100) : null;
              return (
                <div key={t} className={`rounded-2xl border p-4 ${analysis.weakest === t ? 'bg-rose-50 border-rose-300' : 'bg-white border-slate-200'}`}>
                  <div className="text-[10px] font-black text-slate-500 uppercase">{BARRIER_TAG_LABEL[t]}</div>
                  <div className="text-2xl font-black">{pct === null ? '—' : `${pct}%`}</div>
                  <div className="text-[10px] text-slate-500">tỷ lệ đúng ở câu có nhãn {t}</div>
                </div>
              );
            })}
          </div>
          {analysis.weakest && (
            <div className="flex flex-wrap items-center justify-between gap-2 bg-amber-50 border border-amber-200 rounded-2xl p-3 text-xs">
              <span>Rào cản học sinh làm kém nhất trong đề này: <b>{BARRIER_TAG_LABEL[analysis.weakest]}</b>. (Một câu có thể mang nhiều nhãn nên đây là gợi ý, cô xem thêm bảng từng câu.)</span>
              <button onClick={practiceWeakest} className="px-3 py-1.5 rounded-xl bg-amber-500 text-white font-black">Tạo đề luyện rào cản {analysis.weakest}</button>
            </div>
          )}

          <div className="bg-white rounded-3xl border border-slate-200 overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-slate-50 text-slate-600"><tr>{['STT', 'Họ tên', 'Lớp', 'SBD', 'Điểm', 'Đúng', 'Thời gian', 'Nộp lúc'].map((h) => <th key={h} className="text-left px-3 py-2 font-black">{h}</th>)}</tr></thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.submissionId} className="border-t border-slate-100">
                    <td className="px-3 py-2">{i + 1}</td><td className="px-3 py-2 font-bold">{r.studentName}</td><td className="px-3 py-2">{r.studentClass}</td><td className="px-3 py-2">{r.studentSbd}</td>
                    <td className="px-3 py-2 font-black">{Number(r.score10).toFixed(1).replace('.', ',')}</td><td className="px-3 py-2">{r.correctCount}/{r.totalGradable}</td><td className="px-3 py-2">{r.timeSpent}</td><td className="px-3 py-2 text-slate-500">{r.submittedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-4 space-y-2">
            <div className="font-black text-sm text-slate-900">Tỷ lệ đúng từng câu</div>
            {analysis.questions.map((x, i) => (
              <div key={x.id} className="flex items-start gap-3 border-t border-slate-100 pt-2 text-xs">
                <span className="font-black w-6">{i + 1}</span>
                <span className={`font-black w-12 ${x.pct < 50 ? 'text-rose-600' : 'text-emerald-700'}`}>{x.pct}%</span>
                <span className="flex gap-1">{x.tags.map((t) => <span key={t} className="px-1.5 rounded-full border border-slate-300 font-black">{t}</span>)}</span>
                <span className="flex-1 text-slate-700 line-clamp-2">{x.q ? <MathRenderer content={x.q.question_en || x.q.question_vi} inline /> : x.id}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
