export type ResearchBarrierCode = 'L' | 'C' | 'M' | 'NONE';

const DEFAULT_API_URL = 'https://script.google.com/macros/s/AKfycbzHbdvBeFKrOci2Ap1Wa9nevpQb6W0HtSg6HvdNLbbGAL697vEhXa2JggJXfZS4qmWy7A/exec';
export const DEFAULT_STUDENT_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1D9oF9DZE4Jm7Wura24aqKRvbPuR9ruuRgmYZ2Spn3z0/edit?gid=1650852493#gid=1650852493';
const API_URL_KEY = 'amb_teacher_student_api_url';
const TOKEN_KEY = 'amb_teacher_student_teacher_token';
const USERNAME_KEY = 'amb_teacher_student_teacher_username';

const safeStorage = () => {
  try { return typeof window !== 'undefined' ? window.localStorage : null; } catch { return null; }
};

export function getStudentResearchApiUrl() {
  return safeStorage()?.getItem(API_URL_KEY)?.trim() || DEFAULT_API_URL;
}
export function setStudentResearchApiUrl(url: string) {
  const v = url.trim();
  if (v) safeStorage()?.setItem(API_URL_KEY, v); else safeStorage()?.removeItem(API_URL_KEY);
}
export function getTeacherCloudToken() { return safeStorage()?.getItem(TOKEN_KEY)?.trim() || ''; }
export function getTeacherCloudUsername() { return safeStorage()?.getItem(USERNAME_KEY)?.trim() || ''; }
export function clearTeacherCloudSession() {
  safeStorage()?.removeItem(TOKEN_KEY); safeStorage()?.removeItem(USERNAME_KEY);
}

async function post(action: string, payload: Record<string, unknown> = {}, requireAuth = true) {
  const teacherToken = requireAuth ? getTeacherCloudToken() : '';
  const response = await fetch(getStudentResearchApiUrl(), {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action, ...payload, ...(teacherToken ? { teacherToken } : {}) }),
  });
  if (!response.ok) throw new Error(`Student Google Sheets API HTTP ${response.status}`);
  const json = await response.json();
  if (!json?.ok) {
    const code = String(json?.code || '');
    if (code.startsWith('TEACHER_AUTH')) clearTeacherCloudSession();
    const err = new Error(String(json?.error || 'Không đọc được dữ liệu Student Google Sheets.')) as Error & { code?: string };
    err.code = code;
    throw err;
  }
  return json;
}

export async function loginTeacherToStudentDatabase(username: string, password: string) {
  const result = await post('teacherLogin', { login: { username, password } }, false);
  if (!result?.token) throw new Error('Google Apps Script không trả về teacher token.');
  safeStorage()?.setItem(TOKEN_KEY, String(result.token));
  safeStorage()?.setItem(USERNAME_KEY, String(result.username || username));
  return result;
}

export async function healthStudentDatabase() {
  return post('health', {}, false);
}

export interface StudentResearchClassSummary {
  id: string;
  name: string;
  grade_id: number;
  student_count: number;
  active_student_count: number;
  research_attempt_count: number;
}

export interface StudentResearchSnapshot {
  source?: string;
  spreadsheetName?: string;
  spreadsheetId?: string;
  generatedAt?: string;
  selected_class?: string;
  classes?: StudentResearchClassSummary[];
  students?: any[];
  attempts?: any[];
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
    independent_accuracy?: number;
  };
  common_barriers?: { code: 'L' | 'C' | 'M'; label: string; count: number; percent: number }[];
  recommended_barrier?: ResearchBarrierCode;
  recent_interventions?: any[];
  total_attempts?: number;
  teacher?: string;
  version?: string;
}

export async function fetchStudentResearchSnapshot(className = ''): Promise<StudentResearchSnapshot> {
  return post('getTeacherResearchSnapshot', { className }, true) as Promise<StudentResearchSnapshot>;
}

export async function fetchStudentTeacherAnalytics() {
  return post('getTeacherAnalytics', {}, true);
}

export async function saveStudentTeacherIntervention(intervention: Record<string, unknown>) {
  return post('saveTeacherIntervention', { intervention }, true);
}
