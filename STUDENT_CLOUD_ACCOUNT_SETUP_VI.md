# AI Math Bridge Student — Cloud Account nhiều thiết bị

Bản này sửa riêng **AI Math Bridge Student**. Không liên quan Web App Teacher xuất phiếu học tập.

## Mục tiêu đã sửa

- Học sinh kích hoạt tài khoản một lần theo **Mã HS trong ROSTER + email học sinh + mật khẩu**. Không dùng ngày sinh.
- Tài khoản được lưu trên **Google Sheets Learning Database**, không còn phụ thuộc duy nhất vào `localStorage` của một điện thoại.
- Học sinh có thể dùng **Mã HS hoặc email + mật khẩu** để đăng nhập trên điện thoại/máy tính khác.
- Có **Quên mật khẩu**: xác minh bằng **Mã HS + đúng email đã đăng ký**, sau đó đặt mật khẩu mới.
- Sau đăng nhập, Web App lấy lại `ProgressJSON` từ Google Sheet và tiếp tục đúng lộ trình.
- `localStorage` chỉ còn vai trò cache/ghi nhớ phiên trên thiết bị; nếu trình duyệt chặn localStorage, học sinh vẫn có thể đăng nhập Cloud trong phiên hiện tại.
- URL Apps Script không còn bắt học sinh/giáo viên dán vào màn hình. URL Apps Script hiện tại đã được gắn sẵn trong bản source này; học sinh không phải cấu hình gì trên thiết bị.

## Bước 1 — Cập nhật Apps Script backend

1. Mở Google Sheet Learning Database của AI Math Bridge Student.
2. Extensions → Apps Script.
3. Thay nội dung `Code.gs` bằng file `google-apps-script/Code.gs` trong gói này.
4. Save.
5. Chạy hàm `setupDatabase` **một lần** từ Apps Script hoặc menu AI Math Bridge trong Google Sheet.
   - Sheet `ACCOUNTS` sẽ được bổ sung các cột mật khẩu hash: `PasswordSalt`, `PasswordHash`, `PasswordRounds`, `PasswordUpdatedAt`.
   - Không lưu mật khẩu thô.
6. Vì bạn đang có deployment hiện tại, nên vào **Deploy → Manage deployments → Edit** deployment đó và chọn phiên bản code mới.
   - Execute as: **Me**.
   - Who has access: **Anyone**.
7. Giữ nguyên deployment hiện tại để URL `/exec` không đổi. URL đang dùng trong bản Student này là:

   `https://script.google.com/macros/s/AKfycbzHbdvBeFKrOci2Ap1Wa9nevpQb6W0HtSg6HvdNLbbGAL697vEhXa2JggJXfZS4qmWy7A/exec`

> Nếu đã có các dòng ACCOUNTS cũ do cơ chế sync trước đây tạo ra nhưng chưa có `PasswordHash`, học sinh vẫn có thể dùng **Kích hoạt lần đầu** để tạo tài khoản Cloud cho đúng Mã HS đó.

## Bước 2 — URL Apps Script hiện tại đã gắn sẵn

Bản ZIP này đã gắn sẵn URL Apps Script hiện tại:

`https://script.google.com/macros/s/AKfycbzHbdvBeFKrOci2Ap1Wa9nevpQb6W0HtSg6HvdNLbbGAL697vEhXa2JggJXfZS4qmWy7A/exec`

Vì vậy khi đưa source này lên GitHub/Vercel, **không cần tạo biến môi trường mới** để học sinh đăng nhập. Học sinh không phải nhập/dán URL trên điện thoại.

Nếu sau này bạn tạo một Apps Script deployment URL khác, có hai cách đổi:

1. Sửa `window.__AI_MATH_BRIDGE_CONFIG__.googleSheetsApiUrl` trong `index.html`; hoặc
2. Đặt `VITE_GOOGLE_SHEETS_API_URL` trên Vercel để ghi đè URL mặc định.

## Bước 3 — Test đúng lỗi nhiều thiết bị

### Điện thoại A
1. Mở AI Math Bridge Student.
2. Chọn **Kích hoạt lần đầu**.
3. Nhập Mã HS, email và mật khẩu. **Không cần ngày sinh.**
4. Học vài hoạt động để có XP/tiến độ.
5. Chờ vài giây để hệ thống đồng bộ.

### Điện thoại B / máy tính khác
1. Mở cùng link Student.
2. Chọn **Đăng nhập**.
3. Nhập cùng Mã HS hoặc email + mật khẩu.
4. Kiểm tra tên/lớp đúng và XP/tiến độ được lấy lại.

## Bảo mật tài khoản

- Mật khẩu được băm phía Apps Script bằng salt riêng và secret/pepper nằm trong Script Properties.
- Sheet không chứa mật khẩu thô.
- Sau đăng nhập, client nhận session token có chữ ký HMAC, hạn 30 ngày. Khi đổi mật khẩu, các token cũ bị vô hiệu và phải đăng nhập lại.
- Các thao tác `syncSnapshot`/`getStudentSnapshot` yêu cầu token đúng Mã HS, tránh việc client tự đổi StudentID để ghi vào hồ sơ người khác.
- Họ tên, lớp, khối luôn lấy lại từ ROSTER phía server khi sync.

## Lưu ý triển khai

- ROSTER tích hợp trong Web App hiện có 1.210 HS khối 10–12 (346 HS khối 11, 422 HS khối 12).
- Google Sheet ROSTER vẫn là nguồn chuẩn phía server và có thể bổ sung khối 10 sau này.
- Nếu trình duyệt chặn localStorage, roster tích hợp vẫn hiển thị thay vì bị về 0 HS như bản cũ.
- AI Tutor, Math Speaking, Level 1–3, Mission & Boss và Dashboard Giáo viên được giữ nguyên.


## Quên mật khẩu

1. Học sinh chọn **Quên mật khẩu**.
2. Nhập **Mã HS**, **email đã đăng ký**, mật khẩu mới và nhập lại mật khẩu mới.
3. Backend chỉ cho đổi nếu Mã HS đang hoạt động trong `ROSTER` và email trùng chính xác với email trong `ACCOUNTS`.
4. Mật khẩu cũ không thể xem lại; hệ thống tạo salt/hash mới và cập nhật `PasswordUpdatedAt`.
5. Giới hạn tối đa 5 lần yêu cầu/15 phút cho mỗi Mã HS để giảm thử dò.

> Lưu ý: cơ chế Mã HS + email phù hợp yêu cầu triển khai hiện tại nhưng không mạnh bằng OTP qua email. Nếu sau này cần bảo mật cao hơn, có thể nâng cấp bước xác minh email bằng mã OTP.
