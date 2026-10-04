export type TeacherBarrierFocus = 'NONE' | 'L' | 'C' | 'M';
const BARRIER_KEY = 'amb_teacher_barrier_focus';
const RECOMMENDED_KEY = 'amb_teacher_recommended_barrier';
const CLASS_KEY = 'amb_teacher_research_class';

function storage() { try { return typeof window !== 'undefined' ? window.localStorage : null; } catch { return null; } }
export function getBarrierFocus(): TeacherBarrierFocus { return (storage()?.getItem(BARRIER_KEY) as TeacherBarrierFocus) || 'NONE'; }
export function setBarrierFocus(value: TeacherBarrierFocus) { storage()?.setItem(BARRIER_KEY, value); }
export function getRecommendedBarrier(): TeacherBarrierFocus { return (storage()?.getItem(RECOMMENDED_KEY) as TeacherBarrierFocus) || 'NONE'; }
export function setRecommendedBarrier(value: TeacherBarrierFocus) { storage()?.setItem(RECOMMENDED_KEY, value); }
export function getResearchClass() { return storage()?.getItem(CLASS_KEY) || ''; }
export function setResearchClass(value: string) { if (value) storage()?.setItem(CLASS_KEY, value); else storage()?.removeItem(CLASS_KEY); }
export const barrierFocusLabel: Record<TeacherBarrierFocus, string> = {
  NONE: 'Không ưu tiên',
  L: 'L – Ngôn ngữ Toán học',
  C: 'C – Đọc hiểu & quan hệ',
  M: 'M – Suy luận/chiến lược Toán',
};
export function barrierFocusInstruction(value: TeacherBarrierFocus) {
  if (value === 'L') return 'Ưu tiên khắc phục rào cản L (Language): thuật ngữ, câu lệnh, cấu trúc logic và liên hệ từ/cụm từ với ký hiệu hoặc biểu diễn Toán. Không tăng độ khó Toán chỉ để tạo cảm giác khó.';
  if (value === 'C') return 'Ưu tiên khắc phục rào cản C (Comprehension): đọc dữ kiện, xác định yêu cầu, nhận diện quan hệ giữa các đại lượng và chuyển ngôn ngữ sang biểu thức/hình/mô hình Toán.';
  if (value === 'M') return 'Ưu tiên khắc phục rào cản M (Mathematical reasoning): lựa chọn chiến lược, xác định bước giải và lập luận Toán; giữ ngôn ngữ đủ rõ để không làm nhiễu bởi từ vựng ngoài mục tiêu.';
  return '';
}
