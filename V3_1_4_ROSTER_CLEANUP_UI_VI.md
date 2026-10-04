# AI Math Bridge Student V3.1.4 — Roster Cleanup + UI Cleanup

## Mục tiêu
V3.1.4 là bản làm sạch trước khi nâng lên V3.5.

### 1. Loại tài khoản/hồ sơ cũ ngoài ROSTER
- Web App tự kiểm tra toàn bộ hồ sơ local khi khởi động.
- StudentID không tồn tại trong ROSTER hiện hành bị loại khỏi profile/progress/credential/recent list.
- Tài khoản cũ không thể đăng nhập lại bằng email hoặc Mã HS.
- Dashboard giáo viên chỉ liệt kê tài khoản có StudentID nằm trong ROSTER.
- Có nút **Dọn tài khoản cũ** để giáo viên chạy lại thủ công trên trình duyệt.

### 2. Làm sạch Google Sheet
Apps Script có menu **AI Math Bridge → Dọn dữ liệu cũ ngoài ROSTER**.
Các dòng có StudentID không thuộc roster được chuyển trước vào `LEGACY_ARCHIVE`, sau đó xóa khỏi:
- ACCOUNTS
- STUDENT_PROGRESS
- LESSON_PROGRESS
- ACTIVITY_LOG
- DAILY_MISSIONS
- ALERTS

`PRE_POST_EXPERIMENT` và `TEACHER_INTERVENTION` không bị xóa tự động để bảo vệ dữ liệu nghiên cứu.

### 3. Bỏ hai module cũ trước V3.5
Đã gỡ khỏi sidebar và bundle:
- AI Socratic Tutor (bản cũ)
- Chẩn Đoán Lỗi NLP (bản cũ)

V3.5 sẽ xây Tutor/Speaking mới trên nền Adaptive V3.0 + tài khoản/Google Sheets hiện tại, tránh giữ hai module prototype cũ gây trùng chức năng.

### 4. Không thay đổi phần ổn định
- MathRenderer / RenderFix 2.2.3 được giữ nguyên.
- 2.251 câu chuẩn giữ nguyên.
- Roster built-in giữ 1.210 HS khối 10–12.
- AI chấm Level 3 qua Google Apps Script + Gemini tiếp tục được giữ.
