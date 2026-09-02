# HOTFIX trang trắng sau deploy Vercel — 2026-09-02

## Nguyên nhân
Trong `src/lib/curated20260902QuestionBank.ts`, câu `cur12-tdc-geo-13` kết thúc bằng `},,` thay vì `},`.
Dấu phẩy kép tạo một phần tử rỗng (`undefined`) trong `CURATED_20260902_QUESTION_BANK`.
Khi `questionBankData.ts` spread mảng này vào `RAW_FULL_QUESTION_BANK` và chạy `.map(sanitizeImportedQuestion)`, hàm đọc `q.created_by` trên phần tử `undefined`, gây lỗi runtime trước khi React render. Kết quả là trang Vercel trắng dù build báo READY.

## Sửa lỗi
- Bỏ dấu phẩy thừa: `},,` → `},`.
- Kiểm thử lại module `questionBankData.ts` sau transpile: tải thành công.
- `FULL_QUESTION_BANK`: 2939 câu sau bộ lọc hiện tại.
- Quét `src/lib/*.ts` không còn mẫu dấu phẩy kép tạo array hole tương tự.

## Trạng thái Vercel trước hotfix
Deployment production `dpl_J8cnh3fg7xZnb8ucsGnMXzbAvTvP` build thành công; lỗi là client/runtime, không phải build failure.
