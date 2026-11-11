/**
 * Tên trường hiển thị trong app (demo-mode-1.0, 05/11/2026).
 *
 * Chế độ demo dùng khi giới thiệu ứng dụng cho Ban giám hiệu / giám khảo cuộc thi KHKT:
 * tên trường được thay bằng "THPT A" để ẩn danh theo quy định của cuộc thi.
 * Bật:  mở app với ?demo=1   (ghi nhớ trên trình duyệt đó)
 * Tắt:  mở app với ?demo=0
 * Trong thời gian dự thi (HIDE_SCHOOL_FOR_CONTEST = true), bản chính thức cũng hiện "THPT A".
 */
const REAL_SCHOOL = 'THPT Châu Thành A';
const DEMO_SCHOOL = 'THPT A';
const DEMO_KEY = 'amb_demo_mode';

function readDemoFlag(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const p = new URLSearchParams(window.location.search).get('demo');
    if (p === '1') window.localStorage.setItem(DEMO_KEY, '1');
    else if (p === '0') window.localStorage.removeItem(DEMO_KEY);
    return window.localStorage.getItem(DEMO_KEY) === '1';
  } catch {
    return false;
  }
}

/** Đọc một lần khi tải trang; đổi chế độ thì tải lại trang với ?demo=1 hoặc ?demo=0. */
export const IS_DEMO_MODE: boolean = readDemoFlag();

/**
 * Ẩn tên trường trên bản chính thức trong thời gian dự thi KHKT 2026–2027 (cô Hiếu yêu cầu 11/11/2026).
 * Thi xong: đổi thành false để hiện lại "THPT Châu Thành A".
 */
export const HIDE_SCHOOL_FOR_CONTEST = true;

/** "THPT Châu Thành A" hoặc "THPT A" (đang dự thi hoặc chế độ demo). */
export const SCHOOL_NAME: string = IS_DEMO_MODE || HIDE_SCHOOL_FOR_CONTEST ? DEMO_SCHOOL : REAL_SCHOOL;

/** "TRƯỜNG THPT CHÂU THÀNH A" hoặc "TRƯỜNG THPT A" – dùng cho đầu đề in, Word. */
export const SCHOOL_HEADER: string = `TRƯỜNG ${SCHOOL_NAME}`.toUpperCase();

/** "THPT CHÂU THÀNH A" hoặc "THPT A" (chữ hoa, không có chữ "Trường"). */
export const SCHOOL_SHORT_UPPER: string = SCHOOL_NAME.toUpperCase();

/** Họ tên giáo viên hiển thị (chế độ demo ẩn tên thật). */
export const TEACHER_NAME: string = IS_DEMO_MODE ? 'Giáo viên demo' : 'Lê Thị Hiếu';
export const TEACHER_EMAIL: string = IS_DEMO_MODE ? 'giaovien.demo@example.com' : HIDE_SCHOOL_FOR_CONTEST ? 'giaovien@thpta.edu.vn' : 'lehieu@thptchauthanha.edu.vn';

/** Chế độ demo: thay họ tên học sinh bằng nhãn ẩn danh theo mã (không đổi mã, lớp). */
export function maskStudentName<T extends { studentId: string; fullName: string }>(entry: T): T {
  return IS_DEMO_MODE ? { ...entry, fullName: `Học sinh ${entry.studentId}` } : entry;
}
