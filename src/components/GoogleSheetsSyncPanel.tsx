import React, { useEffect, useState } from "react";
import { CheckCircle2, Cloud, RefreshCw, TriangleAlert } from "lucide-react";
import type { StudentProfile, UserProgress } from "../types";
import {
  getCloudSyncState,
  getGoogleSheetsApiUrl,
  subscribeCloudSync,
  syncStudentSnapshotNow,
  testGoogleSheetsConnection,
  testGoogleSheetsAIGrading,
  testGoogleSheetsTutor,
  testGoogleSheetsSpeaking,
  type CloudSyncState,
} from "../services/googleSheetsSyncService";

interface Props {
  activeProfile?: StudentProfile;
  activeProgress?: UserProgress;
}

export const GoogleSheetsSyncPanel: React.FC<Props> = ({ activeProfile, activeProgress }) => {
  const cloudConfigured = !!getGoogleSheetsApiUrl();
  const [status, setStatus] = useState<CloudSyncState>(() => getCloudSyncState());
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [aiStatus, setAiStatus] = useState<"unknown" | "missing" | "configured" | "ready" | "busy">("unknown");
  const [tutorStatus, setTutorStatus] = useState<"unknown" | "missing" | "configured" | "ready" | "busy">("unknown");
  const [speakingStatus, setSpeakingStatus] = useState<"unknown" | "missing" | "configured" | "ready" | "busy">("unknown");

  useEffect(() => subscribeCloudSync(setStatus), []);

  const test = async () => {
    setBusy(true); setNotice("");
    try {
      const result = await testGoogleSheetsConnection();
      setAiStatus(result?.aiGradingConfigured ? "configured" : "missing");
      const tutorSupported = Boolean(result?.capabilities?.tutorAI || result?.supportedActions?.includes?.("tutorAI"));
      const speakingSupported = Boolean(result?.capabilities?.speakingAI || result?.supportedActions?.includes?.("speakingAI"));
      setTutorStatus(tutorSupported ? ((result?.aiTutorConfigured ?? result?.aiGradingConfigured) ? "configured" : "missing") : "unknown");
      setSpeakingStatus(speakingSupported ? ((result?.aiSpeakingConfigured ?? result?.aiGradingConfigured) ? "configured" : "missing") : "unknown");
      setNotice(tutorSupported && speakingSupported
        ? `Kết nối thành công${result?.spreadsheetName ? `: ${result.spreadsheetName}` : ""}. Gemini: ${result?.aiGradingConfigured ? "đã có API Key — có thể Test AI Level 3, AI Tutor và Math Speaking" : "chưa có API Key"}.`
        : `Google Sheet đã kết nối, nhưng backend chưa hỗ trợ đầy đủ Tutor/Speaking. Hãy cập nhật Code.gs mới nhất và Deploy lại.`);
    } catch (err) {
      setNotice(err instanceof Error ? err.message : "Không kết nối được Google Sheets.");
    } finally { setBusy(false); }
  };

  const testAI = async () => {
    setBusy(true); setNotice("");
    try {
      const result = await testGoogleSheetsAIGrading();
      if (result?.temporary || result?.ready === false) {
        setAiStatus("busy");
        setNotice(result?.message || "Gemini đã cấu hình nhưng đang quá tải tạm thời. Hãy thử lại sau vài giây.");
      } else {
        setAiStatus("ready");
        setNotice(`AI chấm Level 3 hoạt động${result?.model ? ` · ${result.model}` : ""}.`);
      }
    } catch (err) {
      const anyErr = err as any;
      if (anyErr?.temporary || /503|UNAVAILABLE|high demand|quá tải/i.test(String(anyErr?.message || ""))) {
        setAiStatus("busy");
      } else {
        setAiStatus("configured");
      }
      setNotice(err instanceof Error ? err.message : "AI chấm Level 3 chưa kết nối.");
    } finally { setBusy(false); }
  };

  const testTutor = async () => {
    setBusy(true); setNotice("");
    try {
      const result = await testGoogleSheetsTutor();
      if (result?.temporary || result?.ready === false) {
        setTutorStatus("busy");
        setNotice(result?.message || "Gemini đã cấu hình nhưng AI Tutor đang quá tải tạm thời. Hãy thử lại sau vài giây.");
      } else {
        setTutorStatus("ready");
        setNotice(`AI Tutor hoạt động${result?.model ? ` · ${result.model}` : ""}.`);
      }
    } catch (err) {
      const anyErr = err as any;
      if (anyErr?.temporary || /503|UNAVAILABLE|high demand|quá tải/i.test(String(anyErr?.message || ""))) setTutorStatus("busy");
      else setTutorStatus("configured");
      setNotice(err instanceof Error ? err.message : "AI Tutor chưa kết nối.");
    } finally { setBusy(false); }
  };

  const testSpeaking = async () => {
    setBusy(true); setNotice("");
    try {
      const result = await testGoogleSheetsSpeaking();
      if (result?.temporary || result?.ready === false) {
        setSpeakingStatus("busy");
        setNotice(result?.message || "Gemini đã cấu hình nhưng Math Speaking đang quá tải tạm thời. Hãy thử lại sau vài giây.");
      } else {
        setSpeakingStatus("ready");
        setNotice(`Math Speaking AI hoạt động${result?.model ? ` · ${result.model}` : ""}.`);
      }
    } catch (err) {
      const anyErr = err as any;
      if (anyErr?.temporary || /503|UNAVAILABLE|high demand|quá tải/i.test(String(anyErr?.message || ""))) setSpeakingStatus("busy");
      else setSpeakingStatus("configured");
      setNotice(err instanceof Error ? err.message : "Math Speaking AI chưa kết nối.");
    } finally { setBusy(false); }
  };

  const syncNow = async () => {
    if (!activeProfile || !activeProgress) return;
    setBusy(true); setNotice("");
    try {
      await syncStudentSnapshotNow(activeProfile, activeProgress);
      setNotice(`Đã đồng bộ hồ sơ ${activeProfile.studentId} lên Google Sheets.`);
    } catch (err) {
      setNotice(err instanceof Error ? err.message : "Không đồng bộ được dữ liệu.");
    } finally { setBusy(false); }
  };

  const statusClass = status.status === "ok" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : status.status === "error" ? "bg-rose-50 border-rose-200 text-rose-700" : status.status === "syncing" ? "bg-amber-50 border-amber-200 text-amber-700" : "bg-slate-50 border-slate-200 text-slate-600";

  return (
    <section className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xs">
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 grid place-items-center shrink-0"><Cloud className="w-5 h-5" /></div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-black text-slate-900">Google Sheets Learning Database</h3>
            <span className={`rounded-full border px-2.5 py-1 text-[10px] font-black ${statusClass}`}>{status.status.toUpperCase()}</span>
          </div>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">Kết nối Cloud được cấu hình sẵn khi deploy. Học sinh không phải dán URL; hệ thống dùng Google Sheet trung tâm để xác thực tài khoản và đồng bộ tiến độ nhiều thiết bị.</p>
          <div className="mt-4 grid lg:grid-cols-[1fr_auto_auto_auto_auto_auto] gap-2">
            <div className={`rounded-xl border px-3 py-2.5 text-xs ${cloudConfigured ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-amber-50 border-amber-200 text-amber-800"}`}>
              <strong>{cloudConfigured ? "Cloud Account đã cấu hình" : "Cloud Account chưa cấu hình"}</strong>
              <div className="text-[10px] mt-0.5">{cloudConfigured ? "URL Apps Script được ẩn trong cấu hình deploy." : "Cần đặt VITE_GOOGLE_SHEETS_API_URL trong Vercel rồi redeploy."}</div>
            </div>
            <button disabled={busy || !cloudConfigured} onClick={test} className="px-3 py-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-black inline-flex items-center justify-center gap-1.5 disabled:opacity-50"><RefreshCw className={`w-3.5 h-3.5 ${busy ? "animate-spin" : ""}`} /> Test Sheet</button>
            <button disabled={busy || !cloudConfigured} onClick={testAI} className="px-3 py-2.5 rounded-xl border border-violet-200 bg-violet-50 text-violet-700 text-xs font-black disabled:opacity-50">Test AI Level 3</button>
            <button disabled={busy || !cloudConfigured} onClick={testTutor} className="px-3 py-2.5 rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-700 text-xs font-black disabled:opacity-50">Test AI Tutor</button>
            <button disabled={busy || !cloudConfigured} onClick={testSpeaking} className="px-3 py-2.5 rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-black disabled:opacity-50">Test Math Speaking</button>
            <button disabled={busy || !cloudConfigured || !activeProfile || !activeProgress} onClick={syncNow} className="px-3 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-black disabled:opacity-50">Đồng bộ HS hiện tại</button>
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-slate-500">
            <span>{status.status === "ok" ? <CheckCircle2 className="inline w-3.5 h-3.5 text-emerald-600 mr-1" /> : status.status === "error" ? <TriangleAlert className="inline w-3.5 h-3.5 text-rose-600 mr-1" /> : <Cloud className="inline w-3.5 h-3.5 mr-1" />}Trạng thái: <strong>{status.status}</strong></span>
            {aiStatus !== "unknown" && <span>AI Level 3: <strong className={aiStatus === "ready" ? "text-emerald-700" : aiStatus === "busy" ? "text-amber-700" : aiStatus === "missing" ? "text-rose-700" : "text-indigo-700"}>{aiStatus === "ready" ? "READY" : aiStatus === "busy" ? "ĐANG QUÁ TẢI" : aiStatus === "missing" ? "CHƯA CẤU HÌNH" : "ĐÃ CẤU HÌNH"}</strong></span>}
            {tutorStatus !== "unknown" && <span>AI Tutor: <strong className={tutorStatus === "ready" ? "text-emerald-700" : tutorStatus === "busy" ? "text-amber-700" : tutorStatus === "missing" ? "text-rose-700" : "text-cyan-700"}>{tutorStatus === "ready" ? "READY" : tutorStatus === "busy" ? "ĐANG QUÁ TẢI" : tutorStatus === "missing" ? "CHƯA CẤU HÌNH" : "ĐÃ CẤU HÌNH"}</strong></span>}
            {speakingStatus !== "unknown" && <span>Math Speaking: <strong className={speakingStatus === "ready" ? "text-emerald-700" : speakingStatus === "busy" ? "text-amber-700" : speakingStatus === "missing" ? "text-rose-700" : "text-indigo-700"}>{speakingStatus === "ready" ? "READY" : speakingStatus === "busy" ? "ĐANG QUÁ TẢI" : speakingStatus === "missing" ? "CHƯA CẤU HÌNH" : "ĐÃ CẤU HÌNH"}</strong></span>}
            {status.lastSyncedAt && <span>Lần đồng bộ: {new Date(status.lastSyncedAt).toLocaleString("vi-VN")}</span>}
            {status.lastError && <span className="text-rose-600">{status.lastError}</span>}
          </div>
          {notice && <div className="mt-3 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-[11px] text-slate-700">{notice}</div>}
        </div>
      </div>
    </section>
  );
};
