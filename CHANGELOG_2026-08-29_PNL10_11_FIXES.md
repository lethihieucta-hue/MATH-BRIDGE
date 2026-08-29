# Cập nhật 2026-08-29 – PNL lớp 10, 11, 12

## Đã xử lý
1. Ẩn toàn bộ dòng chú thích kiểu các caption nguồn PNL không cần thiết ở ảnh nguồn.
2. Bỏ toàn bộ hình placeholder kiểu các hình minh họa placeholder và bỏ luôn tiêu đề/caption liên quan.
3. Sửa bộ render công thức để không còn nhận nhầm câu có chữ như `bằng`, `equals`, `Với`, ... là công thức thuần.
4. Tăng khả năng render bảng ghép nhóm LaTeX 2 hàng (`array`) và các cụm công thức tích phân/lượng giác.
5. Giảm trùng lặp câu hỏi cùng cấu trúc, chỉ khác số liệu, bằng cách dedupe theo chữ ký cấu trúc câu hỏi thay vì chỉ dựa vào `variant_tag`.

## Tệp đã sửa
- `src/components/math/MathRenderer.tsx`
- `src/components/math/QuestionAssetRenderer.tsx`
- `src/lib/staticQuestionBank.ts`
- `src/lib/questionBankData.ts`
- `src/components/student/BilingualLessonModule.tsx`
- `src/lib/originalSourceVisualQuestionBank.ts`
