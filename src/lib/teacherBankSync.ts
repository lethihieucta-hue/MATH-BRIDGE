/**
 * Đồng bộ dữ liệu riêng của giáo viên lên Google Sheet (Apps Script teacher-cloud-1.0):
 *  - nhãn L/C/M giáo viên đã sửa (barrierTags)
 *  - câu hỏi tự tạo / câu chuẩn đã sửa (customQuestions)
 * Chưa đăng nhập tài khoản giáo viên thì dữ liệu vẫn lưu trên máy như trước; đăng nhập xong sẽ tự đồng bộ.
 */
import { exportBarrierTagOverrides, onBarrierTagsChange, replaceBarrierTagOverrides } from './barrierTags';
import { getTeacherOwnedQuestions, mergeTeacherOwnedQuestions } from './dataService';
import { fetchTeacherBankStore, getTeacherCloudToken, saveTeacherBankStore, type TeacherBankStoreKey } from './studentResearchCloudService';

const META_KEY = 'amb_teacher_bank_sync_meta_v1';
type SyncState = 'offline' | 'idle' | 'syncing' | 'ok' | 'error';
export interface SyncStatus { state: SyncState; message: string; lastSyncAt: string; dirty: TeacherBankStoreKey[] }

const storage = () => { try { return typeof window !== 'undefined' ? window.localStorage : null; } catch { return null; } };
const readMeta = (): { lastSyncAt: string; dirty: TeacherBankStoreKey[] } => {
  try { return { lastSyncAt: '', dirty: [], ...JSON.parse(storage()?.getItem(META_KEY) || '{}') }; } catch { return { lastSyncAt: '', dirty: [] }; }
};
const writeMeta = (m: { lastSyncAt: string; dirty: TeacherBankStoreKey[] }) => { try { storage()?.setItem(META_KEY, JSON.stringify(m)); } catch { /* ignore */ } };

let status: SyncStatus = { state: 'idle', message: '', ...readMeta() };
const listeners = new Set<(s: SyncStatus) => void>();
const setStatus = (patch: Partial<SyncStatus>) => {
  status = { ...status, ...patch };
  listeners.forEach((fn) => { try { fn(status); } catch { /* ignore */ } });
};
export const getSyncStatus = () => status;
export function onSyncStatus(fn: (s: SyncStatus) => void) { listeners.add(fn); return () => listeners.delete(fn); }

const markDirty = (key: TeacherBankStoreKey) => {
  const m = readMeta();
  if (!m.dirty.includes(key)) m.dirty.push(key);
  writeMeta(m);
  setStatus({ dirty: m.dirty });
};

const timers: Partial<Record<TeacherBankStoreKey, ReturnType<typeof setTimeout>>> = {};
/** Ghi nhận thay đổi và gửi lên Google Sheet sau 2,5 giây (gộp nhiều lần sửa liên tiếp). */
export function scheduleBankPush(key: TeacherBankStoreKey) {
  markDirty(key);
  if (!getTeacherCloudToken()) { setStatus({ state: 'offline', message: 'Chưa đăng nhập giáo viên – thay đổi đang lưu trên máy này.' }); return; }
  if (timers[key]) clearTimeout(timers[key]);
  timers[key] = setTimeout(() => { void pushBank([key]); }, 2500);
}

const payloadFor = (key: TeacherBankStoreKey) =>
  key === 'barrierTags' ? JSON.stringify(exportBarrierTagOverrides()) : JSON.stringify(getTeacherOwnedQuestions());

export async function pushBank(keys: TeacherBankStoreKey[] = ['barrierTags', 'customQuestions']): Promise<boolean> {
  if (!getTeacherCloudToken()) { setStatus({ state: 'offline', message: 'Chưa đăng nhập giáo viên.' }); return false; }
  setStatus({ state: 'syncing', message: 'Đang lưu lên Google Sheet…' });
  try {
    for (const key of keys) await saveTeacherBankStore(key, payloadFor(key));
    const m = readMeta();
    m.dirty = m.dirty.filter((k) => !keys.includes(k));
    m.lastSyncAt = new Date().toISOString();
    writeMeta(m);
    setStatus({ state: 'ok', message: 'Đã lưu lên Google Sheet.', lastSyncAt: m.lastSyncAt, dirty: m.dirty });
    return true;
  } catch (e: any) {
    setStatus({ state: 'error', message: `Chưa lưu được lên Google Sheet: ${e?.message || e}. Dữ liệu vẫn còn trên máy này.` });
    return false;
  }
}

/**
 * Lấy dữ liệu từ Google Sheet về máy và gộp:
 *  - nhãn: thay bằng bản trên Sheet, riêng các câu vừa sửa trên máy mà chưa gửi được thì giữ bản trên máy;
 *  - câu hỏi: thêm câu chưa có, câu trùng mã thì giữ bản sửa mới hơn.
 * Sau đó gửi lại phần máy này còn thiếu lên Sheet.
 */
export async function pullAndMergeBank(): Promise<{ tags: number; questions: number } | null> {
  if (!getTeacherCloudToken()) { setStatus({ state: 'offline', message: 'Chưa đăng nhập giáo viên – nhãn và câu tự tạo chỉ lưu trên máy này.' }); return null; }
  setStatus({ state: 'syncing', message: 'Đang tải dữ liệu từ Google Sheet…' });
  try {
    const store = await fetchTeacherBankStore();
    const meta = readMeta();
    let tagCount = 0;
    let qCount = 0;
    const cloudTags = (() => { try { return JSON.parse(store.barrierTags?.data || '{}') || {}; } catch { return {}; } })();
    const localTags = exportBarrierTagOverrides();
    const merged = meta.dirty.includes('barrierTags') ? { ...cloudTags, ...localTags } : (store.barrierTags?.data ? cloudTags : localTags);
    replaceBarrierTagOverrides(merged);
    tagCount = Object.keys(merged).length;
    const cloudQuestions = (() => { try { return JSON.parse(store.customQuestions?.data || '[]') || []; } catch { return []; } })();
    qCount = mergeTeacherOwnedQuestions(cloudQuestions);
    // Gửi lại để Sheet có đủ phần của máy này (câu tự tạo trên máy, nhãn sửa khi chưa đăng nhập).
    const localOwned = getTeacherOwnedQuestions();
    const needQuestions = meta.dirty.includes('customQuestions') || localOwned.length > cloudQuestions.length || !store.customQuestions?.data;
    const needTags = meta.dirty.includes('barrierTags') || (!store.barrierTags?.data && Object.keys(localTags).length > 0);
    const toPush: TeacherBankStoreKey[] = [...(needTags ? ['barrierTags' as const] : []), ...(needQuestions ? ['customQuestions' as const] : [])];
    if (toPush.length) await pushBank(toPush);
    else {
      const m = readMeta(); m.lastSyncAt = new Date().toISOString(); writeMeta(m);
      setStatus({ state: 'ok', message: 'Đã đồng bộ với Google Sheet.', lastSyncAt: m.lastSyncAt, dirty: m.dirty });
    }
    return { tags: tagCount, questions: qCount };
  } catch (e: any) {
    setStatus({ state: 'error', message: `Chưa tải được từ Google Sheet: ${e?.message || e}` });
    return null;
  }
}

let started = false;
/** Gọi một lần khi mở app: tự đồng bộ nếu giáo viên đã đăng nhập, và tự gửi khi sửa nhãn. */
export function initTeacherBankSync() {
  if (started || typeof window === 'undefined') return;
  started = true;
  onBarrierTagsChange(() => scheduleBankPush('barrierTags'));
  if (getTeacherCloudToken()) void pullAndMergeBank();
  else setStatus({ state: 'offline', message: 'Chưa đăng nhập giáo viên – nhãn và câu tự tạo chỉ lưu trên máy này.' });
}
