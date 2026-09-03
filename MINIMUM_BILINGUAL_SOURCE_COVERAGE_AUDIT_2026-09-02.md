# MINIMUM BILINGUAL SOURCE COVERAGE AUDIT — 2026-09-02

## Mục tiêu
Bổ sung tối thiểu câu nguồn sạch để các bài lớp 10 đã được phản hồi thiếu (Bài 1, 2, 3, 5, 7, 9, 11, 13, 14) không còn cảnh báo thiếu câu ở cấu hình mặc định khi dùng chế độ song ngữ/English.

## Nguyên nhân cảnh báo
Trong chế độ song ngữ/English, `BilingualLessonModule` chỉ dùng các câu qua `isQuestionEnglishReady`. Một số câu cũ có `question_en` hoặc `options[].content_en` còn tiếng Việt nên bị loại khỏi pool dù vẫn tồn tại trong ngân hàng.

## Bổ sung mới
Module: `src/lib/minimumBilingualSourceQuestionBank.ts`

- Tổng câu bổ sung: **38**
- TN: **22**
- Đúng/Sai: **16**
- English-ready: **38/38**
- Auto-gradable: **38/38**
- ID duy nhất: **38/38**
- Dấu `},,`: **0**
- Phân số toán học viết kiểu `a/b`: **0** trong module mới

### Phân bố tối thiểu theo bài
- Bài 1. Mệnh đề: +11 (6 TN, 5 Đ/S)
- Bài 2. Tập hợp: +1 TN
- Bài 3. Bất phương trình bậc nhất hai ẩn: +6 (4 TN, 2 Đ/S)
- Bài 5. Giá trị lượng giác: +1 Đ/S
- Bài 7. Khái niệm vectơ: +4 (2 TN, 2 Đ/S)
- Bài 9. Tích của một số với một vectơ: +5 (3 TN, 2 Đ/S)
- Bài 11. Tích vô hướng: +3 (2 TN, 1 Đ/S)
- Bài 13. Xu thế trung tâm: +1 Đ/S
- Bài 14. Mức độ phân tán: +6 (4 TN, 2 Đ/S)

## Kiểm tra sau khi ghép FULL_QUESTION_BANK
Yêu cầu mặc định mỗi `type_id`: 4 TN + 2 Đ/S + 2 TLN + 1 TL.

Kết quả English-ready ở các bài mục tiêu:
- Bài 1: thiếu 0
- Bài 2: thiếu 0
- Bài 3: thiếu 0
- Bài 5: thiếu 0
- Bài 7: thiếu 0
- Bài 9: thiếu 0
- Bài 11: thiếu 0
- Bài 13: thiếu 0
- Bài 14: thiếu 0

Tổng thiếu ở nhóm bài mục tiêu: **0**.

## Nguồn
Ưu tiên câu/dữ kiện từ bộ kiểm tra theo bài Toán 10 và tài liệu PNL KNTT đã được người dùng cung cấp. Các câu mới có tiếng Anh được chuẩn hóa để không còn prose tiếng Việt trong `question_en` hoặc `options[].content_en`.

## Ghi chú
Cảnh báo không bị vô hiệu hóa. Nếu giáo viên chủ động nhập số lượng cao hơn số câu nguồn sạch thực tế, hệ thống vẫn cảnh báo đúng. Việc sửa này chỉ làm đủ mức mặc định cho các bài mục tiêu bằng câu nguồn sạch.
