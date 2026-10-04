import { getGoogleSheetsApiUrl } from './googleSheetsSyncService';

const TEACHER_TOKEN_KEY = 'ai_math_bridge_teacher_auth_token_v1';

export interface TeacherAnalyticsStudent {
  studentId: string;
  fullName: string;
  className: string;
  grade: number;
  accountActive: boolean;
  mathScore: number | null;
  mathEnglishScore: number | null;
  assessmentCount: number;
  attemptedAnswers: number;
  correctAnswers: number;
  tutorTurns: number;
  speakingTurns: number;
  supportNeed: string;
  alertPriority: string;
  lastSeenAt: string;
  lastLoginAt: string;
  totalStudySeconds: number;
  online: boolean;
  activityCount: number;
}

export interface TeacherAnalyticsResponse {
  students: TeacherAnalyticsStudent[];
  generatedAt: string;
  rosterTotal: number;
  trackingStartedAt?: string;
}

function storage(): Storage | null {
  try { return typeof window !== 'undefined' ? window.localStorage : null; } catch { return null; }
}

export function getTeacherToken() { return storage()?.getItem(TEACHER_TOKEN_KEY) || ''; }
export function clearTeacherToken() { storage()?.removeItem(TEACHER_TOKEN_KEY); }

async function teacherPost(action: string, payload: Record<string, unknown> = {}) {
  const url = getGoogleSheetsApiUrl();
  if (!url) throw new Error('Web App chưa được nối với Google Sheets Learning Database.');
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action, ...payload, teacherToken: getTeacherToken(), clientVersion: 'teacher-dashboard-1' }),
  });
  if (!response.ok) throw new Error(`Google Sheets API HTTP ${response.status}`);
  const json = await response.json();
  if (!json?.ok) {
    if (['TEACHER_AUTH_REQUIRED','TEACHER_AUTH_INVALID','TEACHER_AUTH_EXPIRED'].includes(String(json?.code || ''))) clearTeacherToken();
    throw new Error(String(json?.error || 'Không thể tải Dashboard giáo viên.'));
  }
  return json;
}

export async function loginTeacher(username: string, password: string) {
  const url = getGoogleSheetsApiUrl();
  if (!url) throw new Error('Web App chưa được nối với Google Sheets Learning Database.');
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action: 'teacherLogin', login: { username, password }, clientVersion: 'teacher-dashboard-1' }),
  });
  if (!response.ok) throw new Error(`Google Sheets API HTTP ${response.status}`);
  const json = await response.json();
  if (!json?.ok || !json?.token) throw new Error(String(json?.error || 'Sai tài khoản hoặc mật khẩu giáo viên.'));
  storage()?.setItem(TEACHER_TOKEN_KEY, String(json.token));
  return json;
}

export async function loadTeacherAnalytics(): Promise<TeacherAnalyticsResponse> {
  const json = await teacherPost('getTeacherAnalytics');
  return {
    students: Array.isArray(json.students) ? json.students : [],
    generatedAt: String(json.generatedAt || new Date().toISOString()),
    rosterTotal: Number(json.rosterTotal || 0),
    trackingStartedAt: json.trackingStartedAt ? String(json.trackingStartedAt) : undefined,
  };
}
