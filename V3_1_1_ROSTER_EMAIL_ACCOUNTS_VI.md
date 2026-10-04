# AI Math Bridge Student V3.1.1 — Roster + Email Accounts

## Mục tiêu
Khóa hồ sơ học sinh theo danh sách nhà trường, không cho học sinh tự khai tên/lớp tùy ý.

## Luồng kích hoạt
1. Giáo viên nạp CSV toàn trường tại màn hình đăng nhập.
2. Tối thiểu CSV có: Mã HS, Họ tên, Lớp. Có thể thêm Khối và Ngày sinh.
3. Học sinh chọn “Kích hoạt lần đầu”, nhập Mã HS.
4. Hệ thống tự lấy Họ tên/Lớp/Khối từ roster.
5. Nếu roster có Ngày sinh, học sinh phải nhập đúng ngày sinh để xác minh.
6. Học sinh tự nhập email và đặt mật khẩu (>= 6 ký tự).
7. Từ lần sau đăng nhập bằng email hoặc Mã HS + mật khẩu.

## Quy tắc
- Mã HS không có trong roster: không được tạo tài khoản.
- Một Mã HS chỉ kích hoạt một tài khoản trên dữ liệu local hiện tại.
- Một email không được liên kết với hai Mã HS.
- Họ tên/Lớp/Khối không cho học sinh tự sửa khi kích hoạt.
- Ngày sinh chỉ dùng để xác minh lần đầu; không đưa vào StudentProfile hoặc dashboard học tập.

## CSV hỗ trợ
Tên cột linh hoạt, ví dụ:
- Mã HS / Ma HS / Student ID
- Họ tên / Full name
- Lớp / Class
- Khối / Grade
- Ngày sinh / DOB

Chấp nhận dấu phân cách comma, semicolon hoặc tab. Ngày sinh nhận DD/MM/YYYY hoặc YYYY-MM-DD.

## Giới hạn bản V3.1.1
Đây vẫn là local account test: roster, credential hash, email index và progress nằm trong localStorage của trình duyệt hiện tại.
Email chưa được xác minh bằng thư; chưa đồng bộ nhiều thiết bị.
Để triển khai thật toàn trường cần Firebase/Supabase (Auth + Database), sau đó có thể bật Google Sign-In.

## Các phần được giữ nguyên
- Adaptive AI V3.0.
- Math Score / Math English Score.
- Gamification V2.5.
- Renderer V2.2.3.
- Standard question bank 2.251 câu.
