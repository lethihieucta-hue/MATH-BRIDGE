# AI Math Bridge Student — Forgot Password Update Audit

- Overall: PASS

- [x] student_ui_has_forgot_password
- [x] activation_has_no_birthdate
- [x] registration_input_has_no_birthdate
- [x] cloud_reset_client
- [x] backend_reset_action
- [x] reset_identity_studentid_email
- [x] password_rehashed
- [x] reset_rate_limit
- [x] old_sessions_invalidated
- [x] roster_template_no_dob
- [x] current_endpoint_embedded
- [x] password_not_plaintext_columns

## Thiết kế xác minh

- Kích hoạt lần đầu: Mã HS + email + mật khẩu; không dùng ngày sinh.
- Quên mật khẩu: Mã HS + đúng email đã đăng ký + mật khẩu mới.
- Mật khẩu cũ không được đọc/khôi phục; backend tạo salt/hash mới.
- Token phiên cũ bị vô hiệu sau khi PasswordUpdatedAt thay đổi.
- Giới hạn 5 lần yêu cầu đặt lại / khoảng 15 phút cho mỗi Mã HS.

## Lưu ý bảo mật

- Xác minh bằng Mã HS + email đáp ứng đúng yêu cầu hiện tại nhưng không chứng minh người thao tác đang sở hữu hộp thư. OTP email sẽ là mức bảo mật cao hơn nếu triển khai sau.
