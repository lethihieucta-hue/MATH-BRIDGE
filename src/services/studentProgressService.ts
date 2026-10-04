import type { HighSchoolGrade, StudentProfile, UserProgress } from "../types";
import { createDailyMissionSnapshot, ensureDailyMission } from "./gamificationService";
import { computeAdaptiveSnapshot } from "./adaptiveLearningService";
import { getRosterEntry, loadRoster, verifyRosterIdentity } from "./studentRosterService";
import {
  clearCloudAuthToken,
  getCloudAuthToken,
  getGoogleSheetsApiUrl,
  isGoogleSheetsCloudConfigured,
  loginStudentViaCloud,
  queueStudentCloudSync,
  registerStudentViaCloud,
  resetStudentPasswordViaCloud,
  resumeStudentCloudSession,
} from "./googleSheetsSyncService";

const ACTIVE_STUDENT_KEY = "ai_math_bridge_v2_active_student";
const PROFILE_PREFIX = "ai_math_bridge_v2_profile_";
const PROGRESS_PREFIX = "ai_math_bridge_v2_progress_";
const RECENT_STUDENTS_KEY = "ai_math_bridge_v2_recent_students";
const CREDENTIAL_PREFIX = "ai_math_bridge_v31_credential_";
const EMAIL_INDEX_PREFIX = "ai_math_bridge_v311_email_";
const SYNCED_EVENT_IDS_PREFIX = "ai_math_bridge_synced_event_ids_";

interface LocalCredential {
  version: 1 | 2;
  studentId: string;
  email?: string;
  salt: string;
  passwordHash: string;
  createdAt: string;
}

export interface StudentLoginInput {
  identifier: string; // Email hoặc Mã HS
  password: string;
}

export interface StudentRegistrationInput {
  studentId: string;
  email: string;
  password: string;
}

export interface StudentRecord {
  profile: StudentProfile;
  progress: UserProgress;
}

export interface StudentPasswordResetInput {
  studentId: string;
  email: string;
  newPassword: string;
}


export interface RosterCleanupResult {
  removedStudentIds: string[];
  removedCount: number;
  removedEmailIndexes: number;
  removedRecentEntries: number;
  activeStudentRemoved: boolean;
}

function collectStoredStudentIds(storage: Storage): string[] {
  const ids = new Set<string>();
  const prefixes = [PROFILE_PREFIX, PROGRESS_PREFIX, CREDENTIAL_PREFIX];
  for (let i = 0; i < storage.length; i += 1) {
    const key = storage.key(i) || "";
    const prefix = prefixes.find((candidate) => key.startsWith(candidate));
    if (!prefix) continue;
    const id = normalizeStudentId(key.slice(prefix.length));
    if (id) ids.add(id);
  }
  return [...ids];
}

function removeStudentLocalData(storage: Storage, studentId: string) {
  const id = normalizeStudentId(studentId);
  if (!id) return;
  const credential = readCredential(id);
  if (credential?.email) storage.removeItem(`${EMAIL_INDEX_PREFIX}${normalizeEmail(credential.email)}`);
  storage.removeItem(`${PROFILE_PREFIX}${id}`);
  storage.removeItem(`${PROGRESS_PREFIX}${id}`);
  storage.removeItem(`${CREDENTIAL_PREFIX}${id}`);
  storage.removeItem(`${SYNCED_EVENT_IDS_PREFIX}${id}`);
}

/**
 * V3.5.1: remove local/demo accounts that are no longer present in the school roster.
 * This prevents old test profiles from appearing in Teacher Analytics or being reopened.
 */
export function cleanupLocalAccountsOutsideRoster(): RosterCleanupResult {
  const storage = safeStorage();
  const empty: RosterCleanupResult = {
    removedStudentIds: [],
    removedCount: 0,
    removedEmailIndexes: 0,
    removedRecentEntries: 0,
    activeStudentRemoved: false,
  };
  // Cloud roster trong Google Sheet là nguồn chuẩn; không dùng roster local để xóa nhầm tài khoản cloud.
  if (isGoogleSheetsCloudConfigured()) return empty;
  if (!storage) return empty;

  const validIds = new Set(loadRoster().map((row) => normalizeStudentId(row.studentId)));
  const removedStudentIds = collectStoredStudentIds(storage).filter((id) => !validIds.has(id));
  removedStudentIds.forEach((id) => removeStudentLocalData(storage, id));

  let removedEmailIndexes = 0;
  const emailKeys: string[] = [];
  for (let i = 0; i < storage.length; i += 1) {
    const key = storage.key(i);
    if (key?.startsWith(EMAIL_INDEX_PREFIX)) emailKeys.push(key);
  }
  emailKeys.forEach((key) => {
    const linkedId = normalizeStudentId(storage.getItem(key) || "");
    if (!linkedId || !validIds.has(linkedId)) {
      storage.removeItem(key);
      removedEmailIndexes += 1;
    }
  });

  let removedRecentEntries = 0;
  try {
    const recent = JSON.parse(storage.getItem(RECENT_STUDENTS_KEY) || "[]") as string[];
    const kept = recent
      .map(normalizeStudentId)
      .filter((id, index, arr) => !!id && validIds.has(id) && arr.indexOf(id) === index);
    removedRecentEntries = recent.length - kept.length;
    storage.setItem(RECENT_STUDENTS_KEY, JSON.stringify(kept.slice(0, 8)));
  } catch {
    storage.setItem(RECENT_STUDENTS_KEY, "[]");
  }

  const activeId = normalizeStudentId(storage.getItem(ACTIVE_STUDENT_KEY) || "");
  const activeStudentRemoved = !!activeId && !validIds.has(activeId);
  if (activeStudentRemoved) storage.removeItem(ACTIVE_STUDENT_KEY);

  return {
    removedStudentIds,
    removedCount: removedStudentIds.length,
    removedEmailIndexes,
    removedRecentEntries,
    activeStudentRemoved,
  };
}

function safeStorage(): Storage | null {
  try {
    if (typeof window === "undefined" || !window.localStorage) return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

export function normalizeStudentId(value: string): string {
  return value.trim().toUpperCase().replace(/\s+/g, "-");
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(value));
}

function readStudentIdByEmail(email: string): string | null {
  const storage = safeStorage();
  if (!storage) return null;
  const normalized = normalizeEmail(email);
  if (!normalized) return null;
  return storage.getItem(`${EMAIL_INDEX_PREFIX}${normalized}`);
}

export function findStudentIdByEmail(email: string): string | null {
  return readStudentIdByEmail(email);
}

const bytesToHex = (bytes: Uint8Array) => Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");

async function sha256(value: string): Promise<string> {
  if (typeof crypto !== "undefined" && crypto.subtle) {
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
    return bytesToHex(new Uint8Array(digest));
  }
  // Extremely old browsers only: deterministic fallback for demo mode, not a server-auth substitute.
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return `fallback-${(hash >>> 0).toString(16)}`;
}

function createSalt(): string {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    return bytesToHex(bytes);
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

async function hashPassword(password: string, salt: string) {
  return sha256(`${salt}::${password}`);
}

export function createDefaultProgress(grade: HighSchoolGrade): UserProgress {
  const base = {
    xp: 0,
    streakDays: 0,
    currentStage: 1 as const,
    selectedGrade: grade,
    currentLevel: 1 as const,
    mathIQ: 100,
    englishFluency: "A1" as const,
    solvedCount: 0,
    level1MasteredCount: 0,
    level2SolvedCount: 0,
    level3GradedCount: 0,
    tutorSessions: 0,
    tutorTurns: 0,
    tutorHintCount: 0,
    speakingSessions: 0,
    speakingTurns: 0,
    speakingPracticeCount: 0,
    speakingBestScore: 0,
    termsMastered: [],
    recentErrors: [],
    mathScore: 50,
    mathEnglishScore: 50,
    mathAssessmentCount: 0,
    mathEnglishAssessmentCount: 0,
    attemptedAnswers: 0,
    correctAnswers: 0,
    hintUsageCount: 0,
    translationUsageCount: 0,
    lastActiveDate: "",
    lastLessonId: undefined,
    activityHistory: [],
    lessonSkillStats: {},
    adaptive: {
      generatedAt: new Date().toISOString(),
      assessmentCount: 0,
      mathConfidence: 0,
      mathEnglishConfidence: 0,
      recommendedLevel: 1 as const,
      recommendedEnglishRatio: 40,
      preferredDifficulty: "EASY" as const,
      supportMode: "foundation" as const,
      focus: "collect-data" as const,
      reason: "Chưa có dữ liệu học thật.",
      nextGoal: "Bắt đầu Level 1 và Level 2 để tạo đường cơ sở.",
    },
    dailyMission: {
      date: "",
      startTermsMastered: 0,
      startLevel2Solved: 0,
      startLevel3Graded: 0,
      startXp: 0,
      claimedTaskIds: [],
    },
    bossProgress: { attempts: 0, wins: 0, bestScore: 0, lastScore: 0 },
    researchAttempts: [],
    researchProtocolVersion: "AMB-RP-1.0",
  } satisfies UserProgress;
  return { ...base, adaptive: computeAdaptiveSnapshot(base, grade) };
}

export function findStudentProfile(studentId: string): StudentProfile | null {
  const storage = safeStorage();
  if (!storage) return null;
  const id = normalizeStudentId(studentId);
  if (!id) return null;
  try {
    const raw = storage.getItem(`${PROFILE_PREFIX}${id}`);
    return raw ? (JSON.parse(raw) as StudentProfile) : null;
  } catch {
    return null;
  }
}

function readCredential(studentId: string): LocalCredential | null {
  const storage = safeStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(`${CREDENTIAL_PREFIX}${normalizeStudentId(studentId)}`);
    return raw ? (JSON.parse(raw) as LocalCredential) : null;
  } catch {
    return null;
  }
}

export function hasAccount(studentId: string): boolean {
  return !!readCredential(studentId);
}

export function hasLegacyProfile(studentId: string): boolean {
  return !!findStudentProfile(studentId) && !readCredential(studentId);
}

export function normalizeStudentProgressSnapshot(saved: Partial<UserProgress> | null | undefined, grade: HighSchoolGrade): UserProgress {
  const defaults = createDefaultProgress(grade);
  const source = saved || {};
  const merged: UserProgress = {
    ...defaults,
    ...source,
    selectedGrade: source.selectedGrade ?? grade,
    termsMastered: Array.isArray(source.termsMastered) ? source.termsMastered : [],
    recentErrors: Array.isArray(source.recentErrors) ? source.recentErrors : [],
    activityHistory: Array.isArray(source.activityHistory) ? source.activityHistory : [],
    researchAttempts: Array.isArray(source.researchAttempts) ? source.researchAttempts : [],
    researchProtocolVersion: source.researchProtocolVersion || "AMB-RP-1.0",
    lessonSkillStats: source.lessonSkillStats && typeof source.lessonSkillStats === "object" ? source.lessonSkillStats : {},
    mathAssessmentCount: source.mathAssessmentCount ?? 0,
    mathEnglishAssessmentCount: source.mathEnglishAssessmentCount ?? 0,
    tutorSessions: source.tutorSessions ?? 0,
    tutorTurns: source.tutorTurns ?? 0,
    tutorHintCount: source.tutorHintCount ?? 0,
    speakingSessions: source.speakingSessions ?? 0,
    speakingTurns: source.speakingTurns ?? 0,
    speakingPracticeCount: source.speakingPracticeCount ?? 0,
    speakingBestScore: source.speakingBestScore ?? 0,
    bossProgress: {
      attempts: source.bossProgress?.attempts ?? 0,
      wins: source.bossProgress?.wins ?? 0,
      bestScore: source.bossProgress?.bestScore ?? 0,
      lastScore: source.bossProgress?.lastScore ?? 0,
      lastPlayedAt: source.bossProgress?.lastPlayedAt,
    },
    dailyMission: source.dailyMission && Array.isArray(source.dailyMission.claimedTaskIds)
      ? source.dailyMission
      : createDailyMissionSnapshot({
          level1MasteredCount: source.level1MasteredCount ?? 0,
          level2SolvedCount: source.level2SolvedCount ?? 0,
          level3GradedCount: source.level3GradedCount ?? 0,
          xp: source.xp ?? 0,
        } as UserProgress),
    adaptive: defaults.adaptive,
  };
  const missionReady = ensureDailyMission(merged);
  return { ...missionReady, adaptive: computeAdaptiveSnapshot(missionReady, missionReady.selectedGrade) };
}

export function loadStudentProgress(studentId: string, grade: HighSchoolGrade): UserProgress {
  const storage = safeStorage();
  const id = normalizeStudentId(studentId);
  if (!storage || !id) return createDefaultProgress(grade);
  try {
    const raw = storage.getItem(`${PROGRESS_PREFIX}${id}`);
    if (!raw) return createDefaultProgress(grade);
    return normalizeStudentProgressSnapshot(JSON.parse(raw) as Partial<UserProgress>, grade);
  } catch {
    return createDefaultProgress(grade);
  }
}

function rememberStudentId(storage: Storage, studentId: string) {
  try {
    const recent = JSON.parse(storage.getItem(RECENT_STUDENTS_KEY) || "[]") as string[];
    const next = [studentId, ...recent.filter((id) => id !== studentId)].slice(0, 8);
    storage.setItem(RECENT_STUDENTS_KEY, JSON.stringify(next));
  } catch {
    storage.setItem(RECENT_STUDENTS_KEY, JSON.stringify([studentId]));
  }
}

function persistCloudRecordLocally(profile: StudentProfile, progress: UserProgress) {
  const storage = safeStorage();
  if (!storage) return;
  try {
    storage.setItem(`${PROFILE_PREFIX}${profile.studentId}`, JSON.stringify(profile));
    storage.setItem(`${PROGRESS_PREFIX}${profile.studentId}`, JSON.stringify(progress));
    storage.setItem(ACTIVE_STUDENT_KEY, profile.studentId);
    if (profile.email) storage.setItem(`${EMAIL_INDEX_PREFIX}${normalizeEmail(profile.email)}`, profile.studentId);
    rememberStudentId(storage, profile.studentId);
  } catch {
    // Cloud vẫn hoạt động khi bộ nhớ local bị chặn/đầy.
  }
}

export async function restoreStudentFromCloudSession(): Promise<StudentRecord | null> {
  if (!isGoogleSheetsCloudConfigured() || !getCloudAuthToken()) return null;
  const result = await resumeStudentCloudSession();
  if (!result?.profile) return null;
  const progress = normalizeStudentProgressSnapshot(result.progress || undefined, result.profile.grade);
  persistCloudRecordLocally(result.profile, progress);
  return { profile: result.profile, progress };
}

export async function registerStudentAccount(input: StudentRegistrationInput): Promise<StudentRecord> {
  if (isGoogleSheetsCloudConfigured()) {
    const result = await registerStudentViaCloud({
      studentId: normalizeStudentId(input.studentId),
      email: normalizeEmail(input.email),
      password: input.password,
    });
    const profile = result.profile;
    const progress = normalizeStudentProgressSnapshot(result.progress || undefined, profile.grade);
    persistCloudRecordLocally(profile, progress);
    return { profile, progress };
  }
  const storage = safeStorage();
  if (!storage) throw new Error("Trình duyệt đang chặn bộ nhớ cục bộ nên chưa thể tạo tài khoản.");
  const studentId = normalizeStudentId(input.studentId);
  const email = normalizeEmail(input.email);
  if (!studentId) throw new Error("Mã học sinh không hợp lệ.");
  if (!isEmail(email)) throw new Error("Vui lòng nhập địa chỉ email hợp lệ.");
  if (input.password.length < 6) throw new Error("Mật khẩu cần ít nhất 6 ký tự.");
  if (readCredential(studentId)) throw new Error("Mã học sinh này đã được kích hoạt tài khoản. Hãy chuyển sang Đăng nhập.");
  if (readStudentIdByEmail(email)) throw new Error("Email này đã được liên kết với một tài khoản học sinh khác.");

  const roster = verifyRosterIdentity(studentId);
  const existing = findStudentProfile(studentId);
  const now = new Date().toISOString();
  const profile: StudentProfile = {
    studentId,
    fullName: roster.fullName,
    className: roster.className,
    grade: roster.grade,
    email,
    createdAt: existing?.createdAt || now,
    lastLoginAt: now,
    accountVersion: 311,
  };
  const salt = createSalt();
  const credential: LocalCredential = {
    version: 2,
    studentId,
    email,
    salt,
    passwordHash: await hashPassword(input.password, salt),
    createdAt: now,
  };
  let progress = ensureDailyMission(loadStudentProgress(studentId, roster.grade));
  progress = { ...progress, selectedGrade: roster.grade, adaptive: computeAdaptiveSnapshot(progress, roster.grade) };
  storage.setItem(`${CREDENTIAL_PREFIX}${studentId}`, JSON.stringify(credential));
  storage.setItem(`${EMAIL_INDEX_PREFIX}${email}`, studentId);
  storage.setItem(`${PROFILE_PREFIX}${studentId}`, JSON.stringify(profile));
  storage.setItem(`${PROGRESS_PREFIX}${studentId}`, JSON.stringify(progress));
  storage.setItem(ACTIVE_STUDENT_KEY, studentId);
  rememberStudentId(storage, studentId);
  return { profile, progress };
}

export async function resetStudentPasswordAccount(input: StudentPasswordResetInput): Promise<void> {
  if (!isGoogleSheetsCloudConfigured()) {
    throw new Error("Quên mật khẩu chỉ hoạt động khi Cloud Account đã được kết nối với Google Sheets.");
  }
  const studentId = normalizeStudentId(input.studentId);
  const email = normalizeEmail(input.email);
  if (!studentId) throw new Error("Mã học sinh không hợp lệ.");
  if (!isEmail(email)) throw new Error("Vui lòng nhập địa chỉ email đã đăng ký hợp lệ.");
  if (input.newPassword.length < 6) throw new Error("Mật khẩu mới cần ít nhất 6 ký tự.");
  await resetStudentPasswordViaCloud({ studentId, email, newPassword: input.newPassword });
  clearCloudAuthToken();
}

export async function loginStudentAccount(input: StudentLoginInput): Promise<StudentRecord> {
  if (isGoogleSheetsCloudConfigured()) {
    const result = await loginStudentViaCloud({ identifier: input.identifier.trim(), password: input.password });
    const profile = result.profile;
    const progress = normalizeStudentProgressSnapshot(result.progress || undefined, profile.grade);
    persistCloudRecordLocally(profile, progress);
    return { profile, progress };
  }
  const storage = safeStorage();
  if (!storage) throw new Error("Trình duyệt đang chặn bộ nhớ cục bộ nên chưa thể đăng nhập.");
  const rawIdentifier = input.identifier.trim();
  if (!rawIdentifier) throw new Error("Vui lòng nhập email hoặc mã học sinh.");
  const studentId = rawIdentifier.includes("@")
    ? readStudentIdByEmail(rawIdentifier)
    : normalizeStudentId(rawIdentifier);
  if (!studentId) throw new Error("Không tìm thấy tài khoản với email hoặc mã học sinh này.");
  if (!getRosterEntry(studentId)) {
    cleanupLocalAccountsOutsideRoster();
    throw new Error("Tài khoản cũ không còn nằm trong danh sách học sinh nhà trường và đã được loại khỏi hệ thống. Hãy kích hoạt lại bằng Mã HS đúng trong roster.");
  }
  const credential = readCredential(studentId);
  if (!credential) {
    if (getRosterEntry(studentId)) throw new Error("Học sinh này chưa kích hoạt tài khoản. Hãy chọn Tạo tài khoản.");
    if (findStudentProfile(studentId)) throw new Error("Hồ sơ cũ chưa được kích hoạt theo danh sách học sinh hiện tại. Hãy nhờ giáo viên kiểm tra roster và kích hoạt tài khoản.");
    throw new Error("Không tìm thấy tài khoản.");
  }
  const candidate = await hashPassword(input.password, credential.salt);
  if (candidate !== credential.passwordHash) throw new Error("Mật khẩu chưa đúng.");
  const existing = findStudentProfile(studentId);
  if (!existing) throw new Error("Tài khoản thiếu hồ sơ học sinh.");
  const profile: StudentProfile = { ...existing, email: credential.email || existing.email, lastLoginAt: new Date().toISOString(), accountVersion: 311 };
  const progress = loadStudentProgress(studentId, profile.grade);
  storage.setItem(`${PROFILE_PREFIX}${studentId}`, JSON.stringify(profile));
  if (credential.email) storage.setItem(`${EMAIL_INDEX_PREFIX}${normalizeEmail(credential.email)}`, studentId);
  storage.setItem(ACTIVE_STUDENT_KEY, studentId);
  rememberStudentId(storage, studentId);
  return { profile, progress };
}

export function saveStudentRecord(profile: StudentProfile, progress: UserProgress): void {
  const storage = safeStorage();
  const adaptive = computeAdaptiveSnapshot(progress, progress.selectedGrade);
  const normalizedProgress = { ...progress, adaptive };
  if (storage) {
    try {
      storage.setItem(`${PROFILE_PREFIX}${profile.studentId}`, JSON.stringify(profile));
      storage.setItem(`${PROGRESS_PREFIX}${profile.studentId}`, JSON.stringify(normalizedProgress));
      storage.setItem(ACTIVE_STUDENT_KEY, profile.studentId);
    } catch {
      // App continues in-memory when local storage is unavailable/full.
    }
  }
  queueStudentCloudSync(profile, normalizedProgress);
}

export function loadActiveStudent(): StudentRecord | null {
  const storage = safeStorage();
  if (!storage) return null;
  const id = storage.getItem(ACTIVE_STUDENT_KEY);
  if (!id) return null;
  const profile = findStudentProfile(id);
  if (!profile) return null;
  if (isGoogleSheetsCloudConfigured()) {
    if (!getCloudAuthToken()) return null;
    return { profile, progress: loadStudentProgress(id, profile.grade) };
  }
  if (!readCredential(id) || !getRosterEntry(id)) return null;
  return { profile, progress: loadStudentProgress(id, profile.grade) };
}

export function clearActiveStudent(): void {
  safeStorage()?.removeItem(ACTIVE_STUDENT_KEY);
  clearCloudAuthToken();
}

export function listRecentStudentProfiles(): StudentProfile[] {
  const storage = safeStorage();
  if (!storage) return [];
  try {
    const ids = JSON.parse(storage.getItem(RECENT_STUDENTS_KEY) || "[]") as string[];
    return ids.map(findStudentProfile).filter((p): p is StudentProfile => !!p && (isGoogleSheetsCloudConfigured() ? true : hasAccount(p.studentId) && !!getRosterEntry(p.studentId)));
  } catch {
    return [];
  }
}

export function listAllStudentRecords(): StudentRecord[] {
  const storage = safeStorage();
  if (!storage) return [];
  const profiles: StudentProfile[] = [];
  for (let i = 0; i < storage.length; i += 1) {
    const key = storage.key(i);
    if (!key?.startsWith(PROFILE_PREFIX)) continue;
    try {
      const profile = JSON.parse(storage.getItem(key) || "null") as StudentProfile | null;
      if (profile && hasAccount(profile.studentId) && getRosterEntry(profile.studentId)) profiles.push(profile);
    } catch {
      // Skip malformed legacy rows.
    }
  }
  return profiles
    .sort((a, b) => a.className.localeCompare(b.className, "vi") || a.fullName.localeCompare(b.fullName, "vi"))
    .map((profile) => ({ profile, progress: loadStudentProgress(profile.studentId, profile.grade) }));
}

export function getAccountStorageMode() {
  const cloud = !!getGoogleSheetsApiUrl();
  return {
    mode: cloud ? "cloud-account" as const : "local-demo" as const,
    label: cloud ? "Tài khoản Cloud · Đồng bộ nhiều thiết bị" : "Chưa nối Cloud · Chế độ cục bộ",
    description: cloud
      ? "Tài khoản được xác thực trên Google Sheets Learning Database. Học sinh có thể dùng cùng Mã HS/email và mật khẩu trên điện thoại hoặc máy tính khác; tiến độ được lấy lại từ cloud sau khi đăng nhập."
      : "Roster khối 11–12 vẫn dùng được, nhưng tài khoản và tiến độ chỉ lưu trên trình duyệt này cho đến khi cấu hình Google Apps Script.",
  };
}
