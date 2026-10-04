# AI Math Bridge Student V2.0 — Ghi chú nâng cấp

## Mục tiêu V2.0
Biến phần Student từ một kho học liệu 3 Level thành một hệ thống có **hồ sơ học sinh + lưu tiến độ + đánh giá hai năng lực song song**:

- **Math Score**: năng lực giải Toán.
- **Math English Score**: năng lực hiểu và diễn đạt Toán bằng tiếng Anh.

## Các phần đã triển khai trong V2.0

### 1. Hồ sơ học sinh
- Màn hình vào app bằng **Mã học sinh**.
- Lần đầu nhập thêm Họ tên, Lớp, Khối.
- Lần sau dùng lại Mã học sinh để tiếp tục tiến độ cũ.
- Hỗ trợ nhiều hồ sơ trên cùng một trình duyệt và nút **Đổi học sinh / đăng xuất**.
- Dữ liệu V2.0 hiện được lưu bằng `localStorage`, tách riêng theo Mã học sinh.

> Lưu ý: đây là lớp hồ sơ cục bộ để kiểm thử V2.0, chưa phải hệ thống tài khoản cloud có mật khẩu. Khi triển khai toàn trường nên nối Firebase/Supabase/Google Sign-In để đồng bộ nhiều thiết bị.

### 2. AI Math Passport / Hành trình của em
Trang dashboard mới hiển thị:
- XP và streak.
- Math Score /100.
- Math English Score /100.
- Số từ đã thuộc.
- Độ chính xác Level 2.
- Số lần dùng gợi ý.
- Số lần dùng bản dịch tiếng Việt.
- Đề xuất bài học tiếp theo dựa trên khoảng cách giữa Math Score và Math English Score.

### 3. Level 1 — Vocabulary → Math Phrases
- Giữ nguyên Postcard, Matching Game, Speed Quiz, Speed Rush, Lexicon.
- Thêm **Math Phrase Challenge** ngay trên flashcard: học sinh đoán thuật ngữ bị khuyết trong câu Toán tiếng Anh trước khi lật thẻ.
- Từ đã thuộc được lưu vào hồ sơ học sinh.
- Dùng khóa `Khối:ID` để tránh trùng ID thuật ngữ giữa các khối.

### 4. Level 2 — Decode → Plan → Solve
- Thêm luồng nhiệm vụ 3 bước: **Decode – Plan – Solve**.
- Hệ thống ghi nhận đúng/sai thật vào hồ sơ.
- Ghi nhận số gợi ý Socratic đã mở.
- Ghi nhận học sinh có dùng bản dịch tiếng Việt hay không.
- Các tín hiệu trên được dùng để cập nhật Math Score và Math English Score.

### 5. Level 3 — Solve → Explain in English
- Thêm **AI Guided Writing** với tối đa 3 gợi ý từng bước.
- Thêm các sentence starters như `We know that...`, `Substituting into the formula...`, `Therefore...`.
- Sau khi AI chấm bài, điểm Toán và tiếng Anh được đưa về hồ sơ cá nhân.
- Ghi nhận mức sử dụng gợi ý để theo dõi độ tự lực.

### 6. Sửa lỗi nền cũ
- Bổ sung `vector` và `function` vào `visualType` để khớp dữ liệu thật.
- Sửa lời gọi `generatePracticeProblemAI` trong `TutorRoom` theo đúng API hiện tại.

## Audit ngân hàng nội dung hiện có
- **360 bài tập chuẩn hóa**:
  - Lớp 10: 90 Level 2 + 45 Level 3 = 135.
  - Lớp 11: 90 Level 2 + 45 Level 3 = 135.
  - Lớp 12: 60 Level 2 + 30 Level 3 = 90.
- Không phát hiện ID bài tập bị trùng.
- **160 thuật ngữ Toán tiếng Anh**:
  - Lớp 10: 68.
  - Lớp 11: 53.
  - Lớp 12: 39.
- Có 29 ID thuật ngữ thô bị lặp giữa dữ liệu; V2.0 đã tránh xung đột bằng khóa lưu tiến độ `Khối:ID` mà không phải sửa phá cấu trúc ngân hàng gốc.

## Kiểm thử đã chạy
- Transpile/syntax check toàn bộ `src`: 37 file TypeScript/TSX, không có lỗi cú pháp.
- Kiểm logic service hồ sơ: tạo hồ sơ, chuẩn hóa mã HS, lưu/đọc tiến độ, đăng nhập lại và đăng xuất: PASS.
- `tsc --noEmit` không còn báo lỗi nội bộ khi loại các lỗi do dependency chưa được cài trong gói RAR. Vì môi trường làm việc không có mạng và file nguồn không kèm `node_modules`, chưa thể chạy `npm install` + `npm run build` hoàn chỉnh tại đây.

## Hướng tiếp theo đề xuất cho V2.1
1. Cloud account thật: Google Sign-In hoặc Mã HS + mật khẩu/PIN trên Firebase/Supabase.
2. Đồng bộ tiến độ giữa điện thoại, máy tính ở nhà và máy trường.
3. Daily Mission + Boss Battle + badge.
4. Adaptive Question Engine chọn câu từ ngân hàng chung Teacher/Student theo điểm yếu cá nhân.
5. Spaced repetition cho Level 1.
6. Báo cáo lớp dành cho giáo viên (không chỉ dashboard cá nhân).
