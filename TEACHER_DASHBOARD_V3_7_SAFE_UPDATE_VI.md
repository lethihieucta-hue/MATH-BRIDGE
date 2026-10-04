# AI Math Bridge Student v3.7.0 — Teacher Dashboard (bổ sung an toàn)

Bản này được nâng từ bản **CLOUD ACCOUNT + FORGOT PASSWORD + roster đúng 1.210 HS**.

## Nguyên tắc bảo toàn dữ liệu
- Không xóa hay reset `ROSTER`, `ACCOUNTS`, `STUDENT_PROGRESS`, `ACTIVITY_LOG`, `LESSON_PROGRESS`, `DAILY_MISSIONS`, `ALERTS`.
- Giữ nguyên đăng nhập học sinh, Quên mật khẩu, AI Tutor, Math Speaking, Adaptive Learning và dữ liệu tiến độ đã có.
- Chỉ bổ sung sheet mới `STUDENT_PRESENCE` để ghi LastSeen + tổng thời lượng từ lúc nâng cấp.
- Dashboard Giáo viên là chế độ đọc/phân tích; không có nút dọn/xóa dữ liệu.

## Tính năng mới
- Khu đăng nhập Giáo viên riêng.
- Danh sách 1.210 HS, mặc định xếp điểm trung bình cao → thấp.
- Trạng thái online (heartbeat <= 2 phút), lần online gần nhất, tổng thời gian học ghi nhận.
- Bộ lọc khối, tình trạng học lực, tìm tên/mã/lớp.
- Phân loại: cân bằng / cần củng cố Toán / cần Math English / yếu cả hai / chưa đủ dữ liệu.
- Tổng quan hoạt động 7 ngày, 30 ngày và điểm trung bình theo lớp.
- Bấm vào HS để xem tóm tắt chi tiết.

## Cập nhật an toàn lên hệ thống đang chạy
1. GitHub/Vercel: deploy toàn bộ source bản này như bản hiện tại.
2. Google Apps Script: thay `Code.gs` bằng `google-apps-script/Code.gs` của bản này rồi Deploy **New version** cho deployment Web App hiện tại (không tạo database mới).
3. Mở Google Sheet hiện tại → menu **AI Math Bridge → Khởi tạo / sửa cấu trúc database**. Hàm này chỉ bổ sung sheet/cột còn thiếu, không xóa dữ liệu cũ.
4. Menu **AI Math Bridge → Cấu hình tài khoản Giáo viên** → nhập username + password GV.
5. Học sinh vẫn dùng link cũ. Ở màn hình đăng nhập có nút **Dành cho Giáo viên · Dashboard theo dõi HS**.

## Lưu ý về tổng giờ học
`TotalStudySeconds` chỉ bắt đầu được ghi từ khi backend v3.7 được deploy. Dữ liệu tiến độ cũ được giữ nguyên nhưng không thể suy ngược chính xác số giờ đã học trước ngày nâng cấp.
