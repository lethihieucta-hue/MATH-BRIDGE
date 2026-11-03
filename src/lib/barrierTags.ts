/**
 * Nhãn rào cản L/C/M cho từng câu hỏi (1–3 nhãn mỗi câu).
 *  - Nhãn tự động: src/data/barrierTags.json (sinh bởi scripts/build-barrier-tags.ts, quy tắc barrier-tags-1.0).
 *  - Giáo viên có thể sửa nhãn từng câu; bản sửa lưu trên trình duyệt (localStorage) và được ưu tiên.
 */
import type { BarrierType, Question } from '../types';
import tagFile from '../data/barrierTags.json';

export const BARRIER_TAGS_VERSION: string = (tagFile as any).version || 'barrier-tags';
const AUTO_TAGS: Record<string, string> = (tagFile as any).tags || {};
const OVERRIDE_KEY = 'amb_barrier_tag_overrides_v1';
export const BARRIER_ORDER: BarrierType[] = ['L', 'C', 'M'];

export const BARRIER_TAG_LABEL: Record<BarrierType, string> = {
  L: 'L – Ngôn ngữ (thuật ngữ, câu lệnh)',
  C: 'C – Đọc hiểu đề (dữ kiện, bối cảnh)',
  M: 'M – Suy luận Toán (chiến lược, các bước)',
};
export const BARRIER_TAG_SHORT: Record<BarrierType, string> = { L: 'Ngôn ngữ', C: 'Đọc hiểu', M: 'Suy luận' };

const storage = () => { try { return typeof window !== 'undefined' ? window.localStorage : null; } catch { return null; } };

const normalize = (value: unknown): BarrierType[] => {
  const raw = Array.isArray(value) ? value.join('') : String(value || '');
  const set = new Set(raw.toUpperCase().split('').filter((c): c is BarrierType => c === 'L' || c === 'C' || c === 'M'));
  return BARRIER_ORDER.filter((t) => set.has(t));
};

let overrideCache: Record<string, string> | null = null;
const readOverrides = (): Record<string, string> => {
  if (overrideCache) return overrideCache;
  try { overrideCache = JSON.parse(storage()?.getItem(OVERRIDE_KEY) || '{}') || {}; } catch { overrideCache = {}; }
  return overrideCache!;
};

export function getAutoBarrierTags(questionId: string): BarrierType[] {
  return normalize(AUTO_TAGS[questionId]);
}

/** Nhãn đang dùng: bản giáo viên sửa > nhãn lưu trong câu hỏi > nhãn tự động. */
export function getQuestionBarrierTags(q: Pick<Question, 'id'> & { barrier_tags?: BarrierType[] }): BarrierType[] {
  const o = readOverrides()[q.id];
  if (o) return normalize(o);
  if (q.barrier_tags?.length) return normalize(q.barrier_tags);
  return getAutoBarrierTags(q.id);
}

export function isBarrierTagEdited(questionId: string): boolean {
  return Boolean(readOverrides()[questionId]);
}

/** Lưu nhãn giáo viên chọn (1–3 nhãn). Trả về false nếu không hợp lệ. */
export function setQuestionBarrierTags(questionId: string, tags: BarrierType[]): boolean {
  const clean = normalize(tags);
  if (!clean.length) return false;
  const all = { ...readOverrides() };
  if (clean.join('') === getAutoBarrierTags(questionId).join('')) delete all[questionId];
  else all[questionId] = clean.join('');
  overrideCache = all;
  try { storage()?.setItem(OVERRIDE_KEY, JSON.stringify(all)); } catch { return false; }
  return true;
}

export function resetQuestionBarrierTags(questionId: string) {
  const all = { ...readOverrides() };
  delete all[questionId];
  overrideCache = all;
  try { storage()?.setItem(OVERRIDE_KEY, JSON.stringify(all)); } catch { /* ignore */ }
}

export function exportBarrierTagOverrides(): Record<string, string> {
  return { ...readOverrides() };
}

export function questionHasBarrier(q: Pick<Question, 'id'> & { barrier_tags?: BarrierType[] }, tag: BarrierType): boolean {
  return getQuestionBarrierTags(q).includes(tag);
}
