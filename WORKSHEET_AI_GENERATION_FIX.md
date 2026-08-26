# Worksheet AI generation fix

## Lỗi đã sửa
- Nút `Sinh đủ câu` trước đây có thể gọi Gemini thành công nhưng toàn bộ output bị loại nếu thiếu/sai `type_id`, `variant_tag` hoặc cách ghi `format_type`.
- Một request chứa nhiều hình thức câu hỏi làm JSON dài, dễ truncated hoặc sai schema.
- Khi thất bại, UI không hiển thị lý do cụ thể nên người dùng chỉ thấy ngân hàng vẫn thiếu câu.

## Luồng mới
1. Tính đúng số câu còn thiếu của từng `type_id` theo 4 ô TN / Đ-S / TLN / TL.
2. Sinh riêng từng `type_id` × từng hình thức câu hỏi.
3. Retry tối đa 3 lần cho mỗi nhóm còn thiếu.
4. Bắt Gemini trả JSON (`responseMimeType: application/json`).
5. Chuẩn hoá metadata do AI trả về:
   - ép đúng `type_id` khi request chỉ có một dạng toán;
   - chuẩn hoá `MCQ/TN`, `TRUE_FALSE/DS`, `SHORT/TLN`, `ESSAY/TL`;
   - tự gắn `variant_tag` hợp lệ nếu AI bỏ quên;
   - chuẩn hoá lựa chọn A/B/C/D và đáp án đúng.
6. Vẫn giữ guard không lấy câu của chương/dạng khác và chống câu chỉ thay số.
7. Lưu câu, refresh ngân hàng và cập nhật phiếu ngay.
8. UI hiển thị chẩn đoán: Gemini trả bao nhiêu câu, nhận bao nhiêu câu, hoặc lỗi API cụ thể.

## Kiểm tra
- `node scripts/audit-curriculum.mjs`: PASS
- `node scripts/audit-worksheet.mjs`: PASS
- TypeScript/TSX parse check cho `BilingualLessonModule.tsx` và `geminiService.ts`: không có lỗi cú pháp (các import package chưa được resolve vì môi trường không cài node_modules).
