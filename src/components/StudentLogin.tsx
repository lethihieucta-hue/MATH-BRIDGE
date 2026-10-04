import React, { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  Download,
  GraduationCap,
  KeyRound,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  Upload,
  UserCheck,
  UserPlus,
  UserRound,
  Users,
} from "lucide-react";
import type { StudentProfile, UserProgress } from "../types";
import {
  getAccountStorageMode,
  listRecentStudentProfiles,
  loginStudentAccount,
  normalizeEmail,
  normalizeStudentId,
  registerStudentAccount,
  resetStudentPasswordAccount,
} from "../services/studentProgressService";
import {
  getRosterEntry,
  getRosterStats,
  makeRosterTemplateCsv,
  parseRosterCsv,
  saveRoster,
} from "../services/studentRosterService";
import { isGoogleSheetsCloudConfigured, testGoogleSheetsConnection } from "../services/googleSheetsSyncService";

interface StudentLoginProps {
  onAuthenticated: (record: { profile: StudentProfile; progress: UserProgress }) => void;
  onTeacherMode?: () => void;
}

type Mode = "login" | "register" | "forgot";

export const StudentLogin: React.FC<StudentLoginProps> = ({ onAuthenticated, onTeacherMode }) => {
  const recentProfiles = useMemo(() => listRecentStudentProfiles(), []);
  const storageMode = getAccountStorageMode();
  const fileRef = useRef<HTMLInputElement>(null);
  const [mode, setMode] = useState<Mode>("login");
  const [identifier, setIdentifier] = useState("");
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [rosterRevision, setRosterRevision] = useState(0);
  const [showRosterAdmin, setShowRosterAdmin] = useState(false);
  const [cloudBusy, setCloudBusy] = useState(false);
  const cloudConfigured = isGoogleSheetsCloudConfigured();

  const rosterStats = useMemo(() => getRosterStats(), [rosterRevision]);
  const rosterEntry = useMemo(() => getRosterEntry(studentId), [studentId, rosterRevision]);

  const prefill = (profile: StudentProfile) => {
    setMode("login");
    setIdentifier(profile.email || profile.studentId);
    setPassword("");
    setError("");
  };

  const importRoster = async (file: File) => {
    try {
      const text = await file.text();
      const rows = parseRosterCsv(text);
      saveRoster(rows);
      setRosterRevision((v) => v + 1);
      setNotice(`Đã nạp ${rows.length} học sinh. Học sinh có thể kích hoạt tài khoản bằng Mã HS trong danh sách.`);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể đọc danh sách học sinh.");
    }
  };

  const downloadTemplate = () => {
    const blob = new Blob(["\uFEFF" + makeRosterTemplateCsv()], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AI_Math_Bridge_Danh_sach_HS_Mau.csv";
    a.click();
    URL.revokeObjectURL(url);
  };


  const testCloud = async () => {
    setCloudBusy(true);
    setError("");
    setNotice("");
    try {
      if (!cloudConfigured) throw new Error("Bản deploy này chưa được cấu hình Google Sheets Learning Database.");
      const result = await testGoogleSheetsConnection();
      setNotice(`Google Sheets kết nối thành công${result?.spreadsheetName ? `: ${result.spreadsheetName}` : ""}.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không kết nối được Google Sheets.");
    } finally {
      setCloudBusy(false);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      if (mode === "login") {
        if (!identifier.trim()) throw new Error("Vui lòng nhập email hoặc Mã học sinh.");
        if (password.length < 6) throw new Error("Mật khẩu cần ít nhất 6 ký tự.");
        const record = await loginStudentAccount({ identifier, password });
        onAuthenticated(record);
      } else if (mode === "register") {
        const id = normalizeStudentId(studentId);
        const mail = normalizeEmail(email);
        if (!id) throw new Error("Vui lòng nhập Mã học sinh.");
        if (!rosterEntry && !cloudConfigured) throw new Error("Mã học sinh chưa có trong danh sách nhà trường.");
        if (!mail) throw new Error("Vui lòng nhập email.");
        if (password.length < 6) throw new Error("Mật khẩu cần ít nhất 6 ký tự.");
        if (password !== confirmPassword) throw new Error("Hai lần nhập mật khẩu chưa khớp.");
        const record = await registerStudentAccount({ studentId: id, email: mail, password });
        onAuthenticated(record);
      } else {
        const id = normalizeStudentId(studentId);
        const mail = normalizeEmail(email);
        if (!cloudConfigured) throw new Error("Quên mật khẩu chỉ hoạt động khi Cloud Account đã được kết nối với Google Sheets.");
        if (!id) throw new Error("Vui lòng nhập Mã học sinh.");
        if (!mail) throw new Error("Vui lòng nhập email đã đăng ký.");
        if (password.length < 6) throw new Error("Mật khẩu mới cần ít nhất 6 ký tự.");
        if (password !== confirmPassword) throw new Error("Hai lần nhập mật khẩu mới chưa khớp.");
        await resetStudentPasswordAccount({ studentId: id, email: mail, newPassword: password });
        setMode("login");
        setIdentifier(id);
        setStudentId("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setNotice("Đã đặt mật khẩu mới. Em hãy đăng nhập lại bằng Mã HS/email và mật khẩu mới.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể xử lý tài khoản lúc này.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 text-white flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-6 items-stretch">
        <div className="rounded-3xl border border-white/10 bg-white/8 backdrop-blur-xl p-7 sm:p-9 shadow-2xl flex flex-col justify-between overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-indigo-400/10 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-xs font-bold text-indigo-100">
              <Sparkles className="w-4 h-4" /> AI Math Bridge Student
            </div>
            <h1 className="mt-5 text-3xl sm:text-4xl font-black leading-tight tracking-tight">
              Hồ sơ đúng học sinh, lộ trình đúng năng lực
            </h1>
            <p className="mt-4 text-sm text-indigo-100/85 leading-relaxed max-w-xl">
              Hệ thống giữ sẵn danh sách 1.210 học sinh khối 10–12 và tự loại hồ sơ cũ ngoài roster. Học sinh không tự khai tên/lớp; tiến độ có thể đồng bộ tập trung lên Google Sheets của nhà trường.
            </p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
            {[
              [UserCheck, "School Roster", "Mã HS → đúng tên, lớp, khối"],
              [BrainCircuit, "Adaptive AI", "Math Score + Math English Score"],
              [Mail, "Email Account", "Đăng nhập bằng email hoặc Mã HS"],
            ].map(([Icon, title, desc]) => {
              const I = Icon as React.ComponentType<{ className?: string }>;
              return <div key={String(title)} className="rounded-2xl bg-white/8 border border-white/10 p-4"><I className="w-5 h-5 text-indigo-200 mb-2" /><div className="font-black text-sm">{String(title)}</div><div className="text-[11px] text-indigo-100/70 mt-1 leading-relaxed">{String(desc)}</div></div>;
            })}
          </div>

          <div className="relative mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/8 p-4 flex gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-200 shrink-0" />
            <div><div className="text-xs font-black text-amber-100">{storageMode.label}</div><p className="text-[11px] text-amber-100/75 mt-1 leading-relaxed">{storageMode.description}</p></div>
          </div>
        </div>

        <div className="rounded-3xl bg-white text-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-200">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
              {mode === "login" ? <LockKeyhole className="w-5 h-5" /> : mode === "register" ? <UserPlus className="w-5 h-5" /> : <KeyRound className="w-5 h-5" />}
            </div>
            <div><h2 className="font-black text-xl">{mode === "login" ? "Đăng nhập học sinh" : mode === "register" ? "Kích hoạt tài khoản lần đầu" : "Quên mật khẩu"}</h2><p className="text-xs text-slate-500 mt-0.5">{mode === "forgot" ? "Xác minh bằng Mã HS và email đã đăng ký để đặt mật khẩu mới." : "Tên, lớp và khối lấy từ danh sách nhà trường."}</p></div>
          </div>

          {onTeacherMode && <button type="button" onClick={onTeacherMode} className="mb-4 w-full rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-700 py-2.5 text-xs font-black flex items-center justify-center gap-2"><GraduationCap className="w-4 h-4" /> Dành cho Giáo viên · Dashboard theo dõi HS</button>}

          <div className="grid grid-cols-3 bg-slate-100 rounded-xl p-1 mb-5 gap-1">
            <button type="button" onClick={() => { setMode("login"); setError(""); setNotice(""); }} className={`py-2 rounded-lg text-xs font-black ${mode === "login" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500"}`}>Đăng nhập</button>
            <button type="button" onClick={() => { setMode("register"); setError(""); setNotice(""); }} className={`py-2 rounded-lg text-xs font-black ${mode === "register" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500"}`}>Kích hoạt lần đầu</button>
            <button type="button" onClick={() => { setMode("forgot"); setError(""); setNotice(""); setPassword(""); setConfirmPassword(""); }} className={`py-2 rounded-lg text-xs font-black ${mode === "forgot" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500"}`}>Quên mật khẩu</button>
          </div>

          {recentProfiles.length > 0 && mode === "login" && (
            <div className="mb-5"><div className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2">Tài khoản đã dùng trên máy này</div><div className="flex flex-wrap gap-2">{recentProfiles.map((p) => <button key={p.studentId} type="button" onClick={() => prefill(p)} className="px-3 py-2 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-left"><div className="text-xs font-black text-indigo-800">{p.fullName}</div><div className="text-[10px] text-indigo-600">{p.studentId} • {p.className}</div></button>)}</div></div>
          )}

          <form onSubmit={submit} className="space-y-4">
            {mode === "login" ? (
              <label className="block"><span className="text-xs font-bold text-slate-700">Email hoặc Mã học sinh *</span><div className="relative mt-1.5"><UserRound className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" /><input value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder="email@... hoặc 12A1-023" className="w-full rounded-xl border border-slate-300 pl-10 pr-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" /></div></label>
            ) : (
              <>
                <label className="block"><span className="text-xs font-bold text-slate-700">Mã học sinh *</span><div className="relative mt-1.5"><UserRound className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" /><input value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Ví dụ: 12A1-023" className="w-full rounded-xl border border-slate-300 pl-10 pr-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" /></div></label>
                {mode === "register" && studentId.trim() && (
                  <div className={`rounded-2xl border p-3 ${rosterEntry ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"}`}>
                    {rosterEntry ? <><div className="flex items-center gap-2 text-emerald-800 font-black text-sm"><UserCheck className="w-4 h-4" /> Đã xác nhận trong danh sách trường</div><div className="mt-2 grid grid-cols-2 gap-2 text-xs"><div><span className="text-slate-500">Họ tên</span><div className="font-black text-slate-900">{rosterEntry.fullName}</div></div><div><span className="text-slate-500">Lớp</span><div className="font-black text-slate-900">{rosterEntry.className} · Khối {rosterEntry.grade}</div></div></div></> : cloudConfigured ? <div className="text-xs font-semibold text-indigo-700">Mã HS sẽ được xác minh trực tiếp với Google Sheets Learning Database khi bấm Kích hoạt.</div> : <div className="text-xs font-semibold text-rose-700">Không tìm thấy Mã HS trong danh sách nhà trường. Không thể tự tạo tên/lớp mới.</div>}
                  </div>
                )}
                <label className="block"><span className="text-xs font-bold text-slate-700">{mode === "forgot" ? "Email đã đăng ký *" : "Email học sinh *"}</span><div className="relative mt-1.5"><Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tenhocsinh@gmail.com" className="w-full rounded-xl border border-slate-300 pl-10 pr-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" /></div>{mode === "forgot" && <div className="mt-1 text-[10px] text-slate-400">Email phải trùng chính xác với email đã dùng khi kích hoạt tài khoản.</div>}</label>
              </>
            )}

            <label className="block"><span className="text-xs font-bold text-slate-700">{mode === "forgot" ? "Mật khẩu mới *" : "Mật khẩu *"}</span><div className="relative mt-1.5"><KeyRound className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" /><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Tối thiểu 6 ký tự" className="w-full rounded-xl border border-slate-300 pl-10 pr-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" /></div></label>
            {mode !== "login" && <label className="block"><span className="text-xs font-bold text-slate-700">{mode === "forgot" ? "Nhập lại mật khẩu mới *" : "Nhập lại mật khẩu *"}</span><input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder={mode === "forgot" ? "Nhập lại mật khẩu mới" : "Nhập lại mật khẩu"} className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" /></label>}

            {error && <div className="text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2">{error}</div>}
            {notice && <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2">{notice}</div>}
            <button disabled={busy} type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 disabled:opacity-60 text-white font-black text-sm shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 hover:brightness-105">{busy ? "Đang xử lý..." : mode === "login" ? "Đăng nhập & tiếp tục lộ trình" : mode === "register" ? "Kích hoạt tài khoản" : "Xác nhận & đặt mật khẩu mới"} <ArrowRight className="w-4 h-4" /></button>
          </form>

          <div className="mt-5 border-t border-slate-200 pt-4">
            <button type="button" onClick={() => setShowRosterAdmin((v) => !v)} className="w-full flex items-center justify-between text-left rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5"><span className="flex items-center gap-2 text-xs font-black text-slate-700"><Users className="w-4 h-4 text-indigo-600" /> Giáo viên: nạp danh sách học sinh</span><span className="text-[10px] font-bold text-indigo-600">{rosterStats.total} HS</span></button>
            {showRosterAdmin && <div className="mt-2 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-3"><div className="grid grid-cols-4 gap-2 mb-3 text-center">{[["Tổng", rosterStats.total], ["K10", rosterStats.grade10], ["K11", rosterStats.grade11], ["K12", rosterStats.grade12]].map(([l,v]) => <div key={String(l)} className="rounded-lg bg-white border border-indigo-100 py-2"><div className="text-[9px] text-slate-400 font-black">{l}</div><div className="text-sm font-black text-indigo-700">{v}</div></div>)}</div><div className="rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-2 mb-3 text-[10px] text-emerald-800"><strong>Đã nạp sẵn 1.210 HS khối 10–12.</strong> Chỉ cần nạp CSV lại khi danh sách nhà trường thay đổi.</div><input ref={fileRef} type="file" accept=".csv,text/csv" className="hidden" onChange={(e) => { const file = e.target.files?.[0]; if (file) importRoster(file); e.currentTarget.value = ""; }} /><div className="grid sm:grid-cols-2 gap-2"><button type="button" onClick={() => fileRef.current?.click()} className="rounded-xl bg-indigo-600 text-white px-3 py-2.5 text-xs font-black flex items-center justify-center gap-1.5"><Upload className="w-3.5 h-3.5" /> Nạp CSV cập nhật</button><button type="button" onClick={downloadTemplate} className="rounded-xl bg-white border border-indigo-200 text-indigo-700 px-3 py-2.5 text-xs font-black flex items-center justify-center gap-1.5"><Download className="w-3.5 h-3.5" /> Tải file mẫu</button></div><div className="mt-3 pt-3 border-t border-indigo-100"><div className="text-[10px] font-black uppercase tracking-wider text-emerald-700 mb-2">Google Sheets Learning Database</div><div className={`rounded-xl border px-3 py-2.5 text-xs ${cloudConfigured ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-amber-50 border-amber-200 text-amber-800"}`}><strong>{cloudConfigured ? "Cloud Account đã được cấu hình sẵn." : "Cloud Account chưa được cấu hình trong bản deploy."}</strong><div className="mt-1 text-[10px] leading-relaxed">{cloudConfigured ? "Học sinh đăng nhập trên thiết bị khác bằng cùng tài khoản và hệ thống lấy lại tiến độ từ Google Sheet." : "Quản trị viên cần cấu hình VITE_GOOGLE_SHEETS_API_URL khi deploy; học sinh không phải dán URL."}</div></div><button type="button" disabled={cloudBusy || !cloudConfigured} onClick={testCloud} className="mt-2 w-full rounded-xl bg-emerald-600 text-white px-3 py-2 text-xs font-black disabled:opacity-50">{cloudBusy ? "Đang kiểm tra..." : "Kiểm tra kết nối Cloud"}</button></div><p className="text-[10px] text-slate-500 mt-2 leading-relaxed">Roster khối 10–12 có sẵn trong Web App; Google Sheet là nguồn xác thực tài khoản cloud và lưu tập trung tiến độ học tập.</p></div>}
          </div>

          <p className="text-[10px] text-slate-400 leading-relaxed mt-4">Khi Cloud Account được bật, học sinh chỉ cần Mã HS/email và mật khẩu; không phải cấu hình kỹ thuật trên từng điện thoại. Tài khoản và tiến độ được dùng lại trên nhiều thiết bị.</p>
        </div>
      </div>
    </div>
  );
};
