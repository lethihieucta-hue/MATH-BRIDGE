import React, { useMemo, useState } from "react";
import { BarChart3, Download, RefreshCw, ShieldCheck, Trash2, Users } from "lucide-react";
import type { HighSchoolGrade, StudentProfile, UserProgress } from "../types";
import { cleanupLocalAccountsOutsideRoster, listAllStudentRecords } from "../services/studentProgressService";
import { STANDARD_LESSONS } from "../data/standardQuestionBank";
import { getAdaptiveModeLabel } from "../services/adaptiveLearningService";
import { getRosterStats } from "../services/studentRosterService";
import { GoogleSheetsSyncPanel } from "./GoogleSheetsSyncPanel";

interface TeacherAnalyticsProps {
  userProgress: UserProgress;
  activeProfile?: StudentProfile;
  onNavigateToTopic?: (grade: HighSchoolGrade, chapterId: string) => void;
}

export const TeacherAnalytics: React.FC<TeacherAnalyticsProps> = ({ userProgress, activeProfile }) => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [gradeFilter, setGradeFilter] = useState<"all" | HighSchoolGrade>("all");
  const [cleanupNotice, setCleanupNotice] = useState("");
  const rosterStats = useMemo(() => getRosterStats(), [refreshKey]);
  const records = useMemo(() => {
    const rows = listAllStudentRecords();
    if (activeProfile) {
      const index = rows.findIndex((row) => row.profile.studentId === activeProfile.studentId);
      const current = { profile: activeProfile, progress: userProgress };
      if (index >= 0) rows[index] = current;
      else rows.push(current);
    }
    return rows;
  }, [activeProfile, userProgress, refreshKey]);
  const filtered = records.filter((row) => gradeFilter === "all" || row.profile.grade === gradeFilter);
  const assessed = filtered.filter((row) => row.progress.adaptive.assessmentCount > 0);
  const avgMath = assessed.length ? Math.round(assessed.reduce((sum, row) => sum + row.progress.mathScore, 0) / assessed.length) : null;
  const avgEnglish = assessed.length ? Math.round(assessed.reduce((sum, row) => sum + row.progress.mathEnglishScore, 0) / assessed.length) : null;
  const languageGap = assessed.filter((row) => row.progress.mathScore - row.progress.mathEnglishScore >= 12).length;
  const mathGap = assessed.filter((row) => row.progress.mathEnglishScore - row.progress.mathScore >= 12).length;
  const totalTutorTurns = filtered.reduce((sum, row) => sum + Number(row.progress.tutorTurns || 0), 0);
  const tutorUsers = filtered.filter((row) => Number(row.progress.tutorSessions || 0) > 0).length;
  const totalSpeakingTurns = filtered.reduce((sum, row) => sum + Number(row.progress.speakingTurns || 0), 0);
  const speakingUsers = filtered.filter((row) => Number(row.progress.speakingSessions || 0) > 0).length;

  const cleanupLegacy = () => {
    if (typeof window !== "undefined" && !window.confirm("Dọn các tài khoản/hồ sơ cũ không còn trong ROSTER trên trình duyệt này? Dữ liệu hợp lệ trong roster không bị ảnh hưởng.")) return;
    const result = cleanupLocalAccountsOutsideRoster();
    setRefreshKey((v) => v + 1);
    setCleanupNotice(
      result.removedCount
        ? `Đã loại ${result.removedCount} hồ sơ cũ ngoài roster: ${result.removedStudentIds.join(", ")}.`
        : "Không còn hồ sơ cũ ngoài roster trên trình duyệt này."
    );
  };

  const exportCsv = () => {
    const header = ["Mã HS", "Họ tên", "Email", "Lớp", "Khối", "Math Score", "Math English", "Bằng chứng", "Adaptive Mode", "Bài ưu tiên", "Tutor Sessions", "Tutor Turns", "Tutor Hints", "Speaking Sessions", "Speaking Turns", "Speaking Best"];
    const body = filtered.map(({ profile, progress }) => {
      const lesson = STANDARD_LESSONS.find((item) => item.id === progress.adaptive.focusLessonId);
      return [
        profile.studentId,
        profile.fullName,
        profile.email || "",
        profile.className,
        profile.grade,
        progress.adaptive.assessmentCount ? progress.mathScore : "",
        progress.adaptive.assessmentCount ? progress.mathEnglishScore : "",
        progress.adaptive.assessmentCount,
        getAdaptiveModeLabel(progress.adaptive),
        lesson?.titleVi || "",
        progress.tutorSessions || 0,
        progress.tutorTurns || 0,
        progress.tutorHintCount || 0,
        progress.speakingSessions || 0,
        progress.speakingTurns || 0,
        progress.speakingBestScore || 0,
      ];
    });
    const csv = [header, ...body].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AI_Math_Bridge_Student_Analytics_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 text-[11px] font-black"><BarChart3 className="w-3.5 h-3.5" /> TEACHER DASHBOARD · LEARNING ANALYTICS</div>
            <h2 className="text-xl font-black text-slate-900 mt-2">Theo dõi tài khoản & năng lực học sinh</h2>
            <p className="text-xs text-slate-500 mt-1">Roster khối 11–12 đã nạp sẵn: <strong>{rosterStats.total} HS</strong>. Khi cấu hình Google Apps Script, tiến độ học tập sẽ tự đồng bộ vào Google Sheet trung tâm.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setRefreshKey((v) => v + 1)} className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-black text-slate-700 flex items-center gap-1.5"><RefreshCw className="w-3.5 h-3.5" /> Làm mới</button>
            <button type="button" onClick={cleanupLegacy} className="px-3 py-2 rounded-xl border border-rose-200 bg-rose-50 text-xs font-black text-rose-700 flex items-center gap-1.5"><Trash2 className="w-3.5 h-3.5" /> Dọn tài khoản cũ</button>
            <button type="button" onClick={exportCsv} className="px-3 py-2 rounded-xl bg-indigo-600 text-white text-xs font-black flex items-center gap-1.5"><Download className="w-3.5 h-3.5" /> Xuất CSV</button>
          </div>
        </div>
        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 flex gap-2"><ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" /><p className="text-[11px] text-amber-800 leading-relaxed">Web App giữ cơ chế Roster Clean và ghi hoạt động AI Tutor + Math Speaking vào tiến độ/Google Sheet để theo dõi mức hỗ trợ và thực hành tiếng Anh Toán học.</p></div>
        {cleanupNotice && <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-[11px] font-semibold text-emerald-800">{cleanupNotice}</div>}
      </section>

      <GoogleSheetsSyncPanel activeProfile={activeProfile} activeProgress={userProgress} />

      <div className="grid grid-cols-2 lg:grid-cols-8 gap-3">
        {[
          ["Roster", rosterStats.total, "HS nhà trường"],
          ["Tài khoản", filtered.length, "đã kích hoạt"],
          ["Math TB", avgMath ?? "--", assessed.length ? "/100" : "chưa đủ dữ liệu"],
          ["Math English TB", avgEnglish ?? "--", assessed.length ? "/100" : "chưa đủ dữ liệu"],
          ["Cần Math English", languageGap, "HS"],
          ["Cần củng cố Toán", mathGap, "HS"],
          ["AI Tutor", totalTutorTurns, `${tutorUsers} HS đã dùng`],
          ["Math Speaking", totalSpeakingTurns, `${speakingUsers} HS đã dùng`],
        ].map(([label, value, note]) => <div key={String(label)} className="rounded-2xl bg-white border border-slate-200 p-4"><div className="text-[10px] font-black uppercase text-slate-400">{String(label)}</div><div className="text-2xl font-black text-indigo-700 mt-1">{String(value)}</div><div className="text-[10px] text-slate-500">{String(note)}</div></div>)}
      </div>

      <section className="rounded-3xl bg-white border border-slate-200 p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2"><Users className="w-5 h-5 text-indigo-600" /><h3 className="font-black text-slate-900">Danh sách học sinh</h3></div>
          <div className="flex gap-2">{(["all", 10, 11, 12] as const).map((g) => <button key={String(g)} onClick={() => setGradeFilter(g)} className={`px-3 py-1.5 rounded-lg text-[11px] font-black border ${gradeFilter === g ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-600 border-slate-200"}`}>{g === "all" ? "Tất cả" : `Khối ${g}`}</button>)}</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-xs">
            <thead><tr className="text-left text-[10px] uppercase tracking-wider text-slate-400 border-b border-slate-200"><th className="py-3 pr-3">Học sinh</th><th className="py-3 pr-3">Lớp</th><th className="py-3 pr-3">Math</th><th className="py-3 pr-3">Math English</th><th className="py-3 pr-3">Dữ liệu</th><th className="py-3 pr-3">Adaptive Mode</th><th className="py-3 pr-3">AI Tutor</th><th className="py-3 pr-3">Math Speaking</th><th className="py-3">Bài AI ưu tiên</th></tr></thead>
            <tbody>
              {filtered.map(({ profile, progress }) => {
                const lesson = STANDARD_LESSONS.find((item) => item.id === progress.adaptive.focusLessonId);
                const measured = progress.adaptive.assessmentCount > 0;
                return <tr key={profile.studentId} className="border-b border-slate-100 last:border-0"><td className="py-3 pr-3"><div className="font-black text-slate-900">{profile.fullName}</div><div className="text-[10px] text-slate-400">{profile.studentId}</div></td><td className="py-3 pr-3 font-bold text-slate-700">{profile.className || profile.grade}</td><td className="py-3 pr-3 font-black text-blue-700">{measured ? Math.round(progress.mathScore) : "--"}</td><td className="py-3 pr-3 font-black text-violet-700">{measured ? Math.round(progress.mathEnglishScore) : "--"}</td><td className="py-3 pr-3">{progress.adaptive.assessmentCount} evidence</td><td className="py-3 pr-3"><span className="rounded-full bg-indigo-50 border border-indigo-100 px-2 py-1 text-[10px] font-bold text-indigo-700">{getAdaptiveModeLabel(progress.adaptive)}</span></td><td className="py-3 pr-3 text-slate-600"><b>{progress.tutorTurns || 0}</b> lượt · {progress.tutorSessions || 0} phiên</td><td className="py-3 pr-3 text-slate-600"><b>{progress.speakingPracticeCount || 0}</b> lượt · best {progress.speakingBestScore || 0}</td><td className="py-3 text-slate-600">{lesson?.titleVi || "Chưa xác định"}</td></tr>;
              })}
              {!filtered.length && <tr><td colSpan={9} className="py-10 text-center text-slate-400">Chưa có tài khoản học sinh phù hợp bộ lọc.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
