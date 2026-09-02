# AI Math Bridge Teacher — Fraction Standard Audit
Date: 2026-09-02

## Scope
Rà soát và chuẩn hóa phân số trong toàn bộ các nguồn ngân hàng câu hỏi chính:
- `src/lib/staticQuestionBank.ts`
- `src/lib/realSourceQuestionBank.ts`
- `src/lib/sourceSupplementQuestionBank.ts`
- `src/lib/originalSourceVisualQuestionBank.ts`
- `src/lib/questionBankData.ts`

## Result
- Số math span đã quét trong 5 nguồn ngân hàng: **13,034**.
- Số lần dùng `\\dfrac` trong 5 nguồn: từ **514** lên **1,160** (**+646** lần xuất hiện phân số chồng chuẩn).
- Số math span còn phép chia dạng slash có thể chuyển thành phân số: **0**.
- Các dạng như `1/2`, `3/5`, `\\sqrt3/2`, `(x+1)/(x-1)`, `SM/SA`, `BP/BA`, `a/b` đã được chuẩn hóa thành phân số tử trên – mẫu dưới khi chúng là biểu thức Toán.

## Intentionally preserved slash characters
Không đổi các dấu `/` không phải phân số Toán, ví dụ:
- Đơn vị: `m/s`, `km/h`, `L/min`, `mg/L`, `N/C`, `VND/kg`.
- Ngày tháng: `20/11`, `1/2/2024`, `1 / 1 / 2020`.
- Cụm ngôn ngữ: `đúng/sai`, `khoảng/đoạn`, `plus/minus`, `True/False`.
- Đường dẫn asset/file.

## Runtime safeguards added
- `src/lib/mathFormatting.ts`: chuẩn hóa fraction ở runtime, có bảo vệ đơn vị/ngày tháng.
- `src/components/math/MathRenderer.tsx`: chuẩn hóa trước khi KaTeX render.
- `src/lib/officeExport.ts`: chuẩn hóa trước khi chuyển sang Office Math/OMML cho Word.
- `src/components/student/BilingualLessonModule.tsx`: chuẩn hóa ở nhánh xuất Word riêng.
- `src/lib/geminiService.ts`: yêu cầu AI luôn sinh phân số bằng `\\dfrac{tử}{mẫu}` và không dùng slash cho phân số.

## Validation
- Parse toàn bộ `src`: **48 file TS/TSX, 0 lỗi cú pháp**.
- Compile độc lập `src/lib/mathFormatting.ts`: **PASS**.
- Test chuyển đổi: phân số số học, căn thức, tỷ số hình học, vectơ, xác suất: **PASS**.
- Test bảo toàn đơn vị và ngày tháng: **PASS**.
- Full Vite build không chạy được trong môi trường kiểm tra này vì cài dependency qua npm bị timeout; không có `node_modules` được đưa vào gói cuối.
