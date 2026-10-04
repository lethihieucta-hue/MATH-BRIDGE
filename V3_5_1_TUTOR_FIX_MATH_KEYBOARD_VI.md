# V3.5.1 — Tutor Fix + Math Keyboard

## 1. AI Tutor
Tutor vẫn bám Teacher Bank và 4 tầng Socratic:
1. Ngôn ngữ
2. Khái niệm
3. Chiến lược
4. Bước đầu

V3.5.1 sửa lớp giao tiếp với Apps Script để tránh lỗi `Unsupported action: tutorAI` khi frontend và backend lệch version. Backend trả thêm `version`, `capabilities`, `supportedActions` để giáo viên biết đang deploy đúng hay chưa.

## 2. Bảng ký hiệu Toán
Component mới: `src/components/MathInputToolbar.tsx`.

Được gắn vào:
- `Level3EssayStudio.tsx`
- `AITutorStudio.tsx`

Khi bấm ký hiệu, hệ thống chèn đúng tại vị trí con trỏ. Các cấu trúc LaTeX như phân số/căn/vector được chèn có delimiter `$...$` để phần hiển thị MathRenderer nhận diện tốt hơn.

## 3. Math English
Tab `Mẫu câu Math English` có mẫu câu và khung lời giải để HS không phải nhớ toàn bộ cấu trúc tiếng Anh khi mới học.

## 4. Không thay ngân hàng câu hỏi
Không sinh đề mới; 2.251 câu chuẩn được giữ nguyên.
