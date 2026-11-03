/**
 * Liên kết phòng thi dùng được trên mọi máy: thông tin đề (tiêu đề, thời gian, mã câu hỏi) được mã hóa
 * ngay trong đường link, học sinh mở link sẽ dựng lại đề từ ngân hàng câu hỏi có sẵn trong app.
 * Trước đây đề chỉ lưu trong trình duyệt của giáo viên nên máy học sinh không mở được (hiện đề mẫu).
 */
import type { Question } from '../types';
import { FULL_QUESTION_BANK } from './questionBankData';
import { fetchSharedExamQuestions, getStudentResearchApiUrl } from './studentResearchCloudService';

export interface SharedExamMeta {
  v: 1;
  id: string;
  t: string;
  te: string;
  d: number;
  r: number;
  iv: string;
  ie: string;
  q: string[];
  w?: string;
  /** Địa chỉ Apps Script nhận điểm và cấp câu hỏi tự tạo. */
  a?: string;
}

const toBase64Url = (text: string) => {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  bytes.forEach((b) => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
const fromBase64Url = (code: string) => {
  const b64 = code.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((code.length + 3) % 4);
  const bin = atob(b64);
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
};

let bankIndex: Map<string, Question> | null = null;
const bank = () => (bankIndex ||= new Map(FULL_QUESTION_BANK.map((q) => [q.id, q])));

/** Câu không có trong ngân hàng chung (câu giáo viên tự tạo) thì không đưa vào link được. */
export function questionsNotShareable(questions: Question[]): Question[] {
  return questions.filter((q) => !bank().has(q.id));
}

export function encodeExamForLink(exam: {
  id: string; title: string; title_en: string; duration: number; englishRatio: number;
  instructions_vi: string; instructions_en: string; questions: Question[]; googleSheetWebhook?: string;
}): string {
  const meta: SharedExamMeta = {
    v: 1, id: exam.id, t: exam.title, te: exam.title_en, d: exam.duration, r: exam.englishRatio,
    iv: exam.instructions_vi, ie: exam.instructions_en, q: exam.questions.map((q) => q.id),
    ...(exam.googleSheetWebhook ? { w: exam.googleSheetWebhook } : {}),
    a: getStudentResearchApiUrl(),
  };
  return toBase64Url(JSON.stringify(meta));
}

export function decodeExamFromLink(code: string) {
  const meta = JSON.parse(fromBase64Url(code)) as SharedExamMeta;
  if (meta?.v !== 1 || !Array.isArray(meta.q)) throw new Error('Mã đề không hợp lệ');
  const missing: string[] = [];
  const questions: Question[] = [];
  meta.q.forEach((id) => { const q = bank().get(id); if (q) questions.push(q); else missing.push(id); });
  return {
    exam: {
      id: meta.id, title: meta.t, title_en: meta.te, duration: meta.d, englishRatio: meta.r,
      instructions_vi: meta.iv, instructions_en: meta.ie, questions, googleSheetWebhook: meta.w || '',
      cloudApiUrl: meta.a || '',
    },
    order: meta.q,
    missing,
  };
}

/**
 * Dựng đề từ link; câu giáo viên tự tạo (không có trong ngân hàng chung) được tải từ Google Sheet của giáo viên.
 * Trả về danh sách mã câu vẫn không tìm được.
 */
export async function loadExamFromLink(code: string) {
  const decoded = decodeExamFromLink(code);
  if (!decoded.missing.length) return decoded;
  const extra = decoded.exam.cloudApiUrl ? await fetchSharedExamQuestions(decoded.missing, decoded.exam.cloudApiUrl).catch(() => []) : [];
  const byId = new Map<string, Question>([...decoded.exam.questions, ...extra].map((q: Question) => [q.id, q]));
  const questions = decoded.order.map((id) => byId.get(id)).filter(Boolean) as Question[];
  return { ...decoded, exam: { ...decoded.exam, questions }, missing: decoded.order.filter((id) => !byId.has(id)) };
}
