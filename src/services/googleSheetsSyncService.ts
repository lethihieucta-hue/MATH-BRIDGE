import type { AdaptiveSnapshot, EssayGradingResult, HighSchoolGrade, SpeakingAIResponse, SpeakingPracticeMode, StudentProfile, TutorAIResponse, TutorConversationTurn, TutorIntent, UserProgress } from "../types";

const API_URL_KEY = "ai_math_bridge_google_sheets_api_url";
const AUTH_TOKEN_KEY = "ai_math_bridge_cloud_auth_token";
const SYNCED_EVENT_IDS_PREFIX = "ai_math_bridge_synced_event_ids_";
const CLIENT_VERSION = "student-cloud-auth-1";

let memoryApiUrl = "";
let memoryAuthToken = "";

function configuredApiUrl(): string {
  try {
    const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
    const fromEnv = String(env?.VITE_GOOGLE_SHEETS_API_URL || "").trim();
    if (fromEnv) return fromEnv;
  } catch {
    // Build/runtime without Vite env: continue to runtime/local fallback.
  }
  try {
    const runtime = (globalThis as typeof globalThis & { __AI_MATH_BRIDGE_CONFIG__?: { googleSheetsApiUrl?: string } }).__AI_MATH_BRIDGE_CONFIG__;
    const fromRuntime = String(runtime?.googleSheetsApiUrl || "").trim();
    if (fromRuntime) return fromRuntime;
  } catch {
    // Ignore runtime config access failures.
  }
  return "";
}

export type CloudSyncStatus = "disabled" | "idle" | "syncing" | "ok" | "error";

export interface CloudSyncState {
  status: CloudSyncStatus;
  lastSyncedAt?: string;
  lastError?: string;
}

let state: CloudSyncState = { status: "disabled" };
let timer: ReturnType<typeof setTimeout> | null = null;
let pending: { profile: StudentProfile; progress: UserProgress } | null = null;
const listeners = new Set<(s: CloudSyncState) => void>();

function safeStorage(): Storage | null {
  try {
    if (typeof window === "undefined" || !window.localStorage) return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

function emit(next: CloudSyncState) {
  state = next;
  listeners.forEach((listener) => listener(state));
}

export function subscribeCloudSync(listener: (s: CloudSyncState) => void) {
  listeners.add(listener);
  listener(state);
  return () => listeners.delete(listener);
}

export function getCloudSyncState() {
  return state;
}

export function getGoogleSheetsApiUrl(): string {
  const fixed = configuredApiUrl();
  if (fixed) return fixed;
  const local = safeStorage()?.getItem(API_URL_KEY)?.trim() || "";
  return local || memoryApiUrl;
}

export function isGoogleSheetsCloudConfigured(): boolean {
  return !!getGoogleSheetsApiUrl();
}

export function setGoogleSheetsApiUrl(url: string) {
  const normalized = url.trim();
  memoryApiUrl = normalized;
  const storage = safeStorage();
  if (storage) {
    if (normalized) storage.setItem(API_URL_KEY, normalized);
    else storage.removeItem(API_URL_KEY);
  }
  emit({ status: normalized ? "idle" : "disabled" });
}

export function getCloudAuthToken(): string {
  const storageToken = safeStorage()?.getItem(AUTH_TOKEN_KEY)?.trim() || "";
  return storageToken || memoryAuthToken;
}

export function setCloudAuthToken(token: string) {
  const normalized = token.trim();
  memoryAuthToken = normalized;
  const storage = safeStorage();
  if (storage) {
    if (normalized) storage.setItem(AUTH_TOKEN_KEY, normalized);
    else storage.removeItem(AUTH_TOKEN_KEY);
  }
}

export function clearCloudAuthToken() {
  memoryAuthToken = "";
  safeStorage()?.removeItem(AUTH_TOKEN_KEY);
}

async function post(action: string, payload: Record<string, unknown> = {}, includeAuth = false) {
  const url = getGoogleSheetsApiUrl();
  if (!url) throw new Error("Hệ thống học sinh chưa được nối với Google Sheets Learning Database.");
  const authToken = includeAuth ? getCloudAuthToken() : "";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, ...payload, ...(authToken ? { authToken } : {}) }),
  });
  if (!response.ok) throw new Error(`Google Sheets API HTTP ${response.status}`);
  const json = await response.json();
  if (!json?.ok) {
    if (includeAuth && ["AUTH_REQUIRED", "AUTH_INVALID", "AUTH_EXPIRED", "AUTH_PASSWORD_CHANGED"].includes(String(json?.code || ""))) {
      clearCloudAuthToken();
    }
    const rawMessage = String(json?.error || "Google Sheets API trả về lỗi.");
    const friendlyMessage = /Unsupported action:\s*(speakingAI|testSpeakingAI)/i.test(rawMessage)
      ? "Backend Google Apps Script đang là bản cũ và chưa hỗ trợ Math Speaking. Hãy cập nhật Code.gs mới nhất rồi Deploy lại."
      : /Unsupported action:\s*tutorAI/i.test(rawMessage)
        ? "Backend Google Apps Script đang là bản cũ và chưa hỗ trợ AI Tutor. Hãy cập nhật Code.gs mới nhất rồi Deploy lại."
        : /Unsupported action:\s*testTutorAI/i.test(rawMessage)
          ? "Backend Google Apps Script chưa hỗ trợ đầy đủ AI Tutor. Hãy cập nhật Code.gs mới nhất và Deploy lại."
          : rawMessage;
    const error = new Error(friendlyMessage) as Error & { code?: string; temporary?: boolean; retryAfterSec?: number; serverVersion?: string };
    error.code = json?.code;
    error.temporary = Boolean(json?.temporary);
    error.retryAfterSec = Number(json?.retryAfterSec || 0) || undefined;
    error.serverVersion = json?.version || json?.serverVersion;
    throw error;
  }
  return json;
}


export interface CloudStudentAuthResult {
  profile: StudentProfile;
  progress?: UserProgress | null;
  token: string;
  serverVersion?: string;
  spreadsheetName?: string;
}

export async function registerStudentViaCloud(input: { studentId: string; email: string; password: string }): Promise<CloudStudentAuthResult> {
  const result = await post("registerStudent", { registration: input, clientVersion: CLIENT_VERSION });
  if (!result?.profile || !result?.token) throw new Error(result?.error || "Không tạo được tài khoản học sinh trên hệ thống nhà trường.");
  setCloudAuthToken(String(result.token));
  return {
    profile: result.profile as StudentProfile,
    progress: (result.progress || null) as UserProgress | null,
    token: String(result.token),
    serverVersion: result.version,
    spreadsheetName: result.spreadsheetName,
  };
}

export async function resetStudentPasswordViaCloud(input: { studentId: string; email: string; newPassword: string }): Promise<void> {
  const result = await post("resetStudentPassword", { reset: input, clientVersion: CLIENT_VERSION });
  if (!result?.ok) throw new Error(result?.error || "Không đặt lại được mật khẩu học sinh.");
  clearCloudAuthToken();
}

export async function loginStudentViaCloud(input: { identifier: string; password: string }): Promise<CloudStudentAuthResult> {
  const result = await post("loginStudent", { login: input, clientVersion: CLIENT_VERSION });
  if (!result?.profile || !result?.token) throw new Error(result?.error || "Không đăng nhập được tài khoản học sinh.");
  setCloudAuthToken(String(result.token));
  return {
    profile: result.profile as StudentProfile,
    progress: (result.progress || null) as UserProgress | null,
    token: String(result.token),
    serverVersion: result.version,
    spreadsheetName: result.spreadsheetName,
  };
}

export async function resumeStudentCloudSession(): Promise<{ profile: StudentProfile; progress?: UserProgress | null } | null> {
  if (!getCloudAuthToken() || !getGoogleSheetsApiUrl()) return null;
  try {
    const result = await post("resumeStudentSession", { clientVersion: CLIENT_VERSION }, true);
    if (!result?.profile) return null;
    return { profile: result.profile as StudentProfile, progress: (result.progress || null) as UserProgress | null };
  } catch (err) {
    const code = (err as Error & { code?: string })?.code;
    if (code === "AUTH_REQUIRED" || code === "AUTH_INVALID" || code === "AUTH_EXPIRED" || code === "AUTH_PASSWORD_CHANGED") clearCloudAuthToken();
    throw err;
  }
}

export async function getStudentSnapshotViaCloud(): Promise<{ profile?: StudentProfile; progress?: UserProgress | null; found: boolean }> {
  const result = await post("getStudentSnapshot", { clientVersion: CLIENT_VERSION }, true);
  return {
    found: Boolean(result?.found),
    profile: result?.profile as StudentProfile | undefined,
    progress: (result?.progress || null) as UserProgress | null,
  };
}

export interface GoogleSheetsEssayGradeRequest {
  gradeLevel: HighSchoolGrade;
  problemTitle: string;
  problemEnglish: string;
  studentEssay: string;
  expectedAnswer: string;
}

export async function gradeEssayViaGoogleSheetsAI(request: GoogleSheetsEssayGradeRequest): Promise<{ data: EssayGradingResult; model?: string; provider?: string }> {
  const result = await post("gradeEssayAI", {
    grading: request,
    clientVersion: CLIENT_VERSION,
  });
  if (!result?.data) throw new Error(result?.error || "Google Apps Script không trả về kết quả chấm AI.");
  return { data: result.data as EssayGradingResult, model: result.model, provider: result.provider };
}


export interface GoogleSheetsTutorRequest {
  gradeLevel: HighSchoolGrade;
  lessonId: string;
  problemId: string;
  problemFormat: string;
  problemDifficulty: string;
  problemEnglish: string;
  problemVietnamese: string;
  officialSolution: string;
  correctAnswer: string;
  userMessage: string;
  intent: TutorIntent;
  hintStage: number;
  history: TutorConversationTurn[];
  adaptive: AdaptiveSnapshot;
  mathScore: number;
  mathEnglishScore: number;
}

export async function tutorViaGoogleSheetsAI(request: GoogleSheetsTutorRequest): Promise<{ data: TutorAIResponse; model?: string; provider?: string }> {
  const result = await post("tutorAI", {
    tutor: request,
    clientVersion: CLIENT_VERSION,
  });
  if (!result?.data) throw new Error(result?.error || "Google Apps Script không trả về phản hồi AI Tutor.");
  return { data: result.data as TutorAIResponse, model: result.model, provider: result.provider };
}

export async function testGoogleSheetsTutor() {
  return post("testTutorAI", { clientVersion: CLIENT_VERSION });
}

export async function testGoogleSheetsAIGrading() {
  return post("testAI", { clientVersion: CLIENT_VERSION });
}

export interface GoogleSheetsSpeakingRequest {
  mode: SpeakingPracticeMode;
  gradeLevel: HighSchoolGrade;
  lessonId: string;
  targetText: string;
  expectedSpoken?: string;
  transcript: string;
  problemId?: string;
  problemEnglish?: string;
  officialSolution?: string;
  correctAnswer?: string;
  mathScore: number;
  mathEnglishScore: number;
  adaptive: AdaptiveSnapshot;
}

export async function evaluateSpeakingViaGoogleSheetsAI(request: GoogleSheetsSpeakingRequest): Promise<{ data: SpeakingAIResponse; model?: string; provider?: string }> {
  const result = await post("speakingAI", {
    speaking: request,
    clientVersion: CLIENT_VERSION,
  });
  if (!result?.data) throw new Error(result?.error || "Google Apps Script không trả về phản hồi Math Speaking.");
  return { data: result.data as SpeakingAIResponse, model: result.model, provider: result.provider };
}

export async function testGoogleSheetsSpeaking() {
  return post("testSpeakingAI", { clientVersion: CLIENT_VERSION });
}

export async function sendStudentPresenceHeartbeat(input: { sessionId: string; deltaSeconds: number; page?: string }) {
  return post("studentHeartbeat", { presence: input, clientVersion: CLIENT_VERSION }, true);
}

export async function testGoogleSheetsConnection() {
  const result = await post("health", { clientVersion: CLIENT_VERSION });
  emit({ status: "ok", lastSyncedAt: new Date().toISOString() });
  return result;
}

function getUnsyncedActivity(profile: StudentProfile, progress: UserProgress) {
  const storage = safeStorage();
  if (!storage) return progress.activityHistory.slice(0, 50);
  const key = `${SYNCED_EVENT_IDS_PREFIX}${profile.studentId}`;
  let synced = new Set<string>();
  try {
    synced = new Set(JSON.parse(storage.getItem(key) || "[]") as string[]);
  } catch {
    synced = new Set();
  }
  return progress.activityHistory.filter((event) => !synced.has(event.id)).slice(0, 50);
}

function markEventsSynced(profile: StudentProfile, eventIds: string[]) {
  const storage = safeStorage();
  if (!storage || !eventIds.length) return;
  const key = `${SYNCED_EVENT_IDS_PREFIX}${profile.studentId}`;
  let ids: string[] = [];
  try { ids = JSON.parse(storage.getItem(key) || "[]") as string[]; } catch { ids = []; }
  const next = [...new Set([...eventIds, ...ids])].slice(0, 500);
  storage.setItem(key, JSON.stringify(next));
}

export async function syncStudentSnapshotNow(profile: StudentProfile, progress: UserProgress) {
  if (!getGoogleSheetsApiUrl()) {
    emit({ status: "disabled" });
    return { skipped: true };
  }
  emit({ status: "syncing" });
  const newEvents = getUnsyncedActivity(profile, progress);
  try {
    const result = await post("syncSnapshot", {
      profile,
      progress,
      activityEvents: newEvents,
      clientVersion: CLIENT_VERSION,
    }, true);
    markEventsSynced(profile, newEvents.map((event) => event.id));
    emit({ status: "ok", lastSyncedAt: new Date().toISOString() });
    return result;
  } catch (err) {
    emit({ status: "error", lastError: err instanceof Error ? err.message : "Không đồng bộ được Google Sheets." });
    throw err;
  }
}

export function queueStudentCloudSync(profile: StudentProfile, progress: UserProgress, delayMs = 1800) {
  if (!getGoogleSheetsApiUrl()) return;
  pending = { profile, progress };
  if (timer) clearTimeout(timer);
  timer = setTimeout(async () => {
    const job = pending;
    pending = null;
    timer = null;
    if (!job) return;
    try { await syncStudentSnapshotNow(job.profile, job.progress); } catch { /* status already captured */ }
  }, delayMs);
}
