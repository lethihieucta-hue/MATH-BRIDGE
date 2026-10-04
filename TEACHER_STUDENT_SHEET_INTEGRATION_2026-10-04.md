# AI Math Bridge Teacher — Student Google Sheets Integration (2026-10-04)

## Các thay đổi chính

1. **Teacher lấy dữ liệu thật từ Student Learning Database**
   - Nguồn Google Sheet: `1D9oF9DZE4Jm7Wura24aqKRvbPuR9ruuRgmYZ2Spn3z0`.
   - Teacher không đọc CSV công khai. Dữ liệu đi qua Google Apps Script và yêu cầu **teacher authentication**.
   - Lớp học trên Teacher được sinh từ các lớp có học sinh đã có hoạt động trong `STUDENT_PROGRESS`.

2. **Barrier Analysis lấy trực tiếp từ `ProgressJSON.researchAttempts` của Student v3.8+**
   - L/C/M.
   - Hint level 1–3.
   - First Attempt Accuracy.
   - Retry.
   - Independent Mode accuracy.
   - Self-diagnosis và translation usage vẫn có trong export.

3. **Teacher Intervention ghi ngược vào Google Sheet Student**
   - Sheet `TEACHER_INTERVENTION`.
   - Có `BarrierType` L/C/M.
   - Có scope lớp / nhóm / cá nhân.

4. **Lớp & Phân tích**
   - Không tạo lớp thủ công tách rời Student nữa.
   - Chỉ hiển thị các lớp có dữ liệu học sinh từ Student database.

5. **Soạn Phiếu & Chuyên Đề**
   - Thêm nút ưu tiên: Không ưu tiên / L / C / M.
   - Hiện lớp nghiên cứu đang chọn và rào cản được dữ liệu gợi ý.
   - Khi Gemini sinh phiếu/câu bổ sung, prompt nhận thêm mục tiêu can thiệp theo rào cản đã chọn.

6. **Tạo Bài Test**
   - Thêm nút ưu tiên L/C/M.
   - Với ngân hàng câu hỏi chuẩn đã kiểm chứng, hệ thống **ưu tiên sắp xếp/chọn** các câu phù hợp rào cản nhưng không tự ý đổi phạm vi kiến thức.

7. **Header Teacher**
   - Đã xóa tên tác giả và số điện thoại/Zalo khỏi thanh trên cùng.

## Bước bắt buộc để kết nối dữ liệu thật

Teacher frontend mới cần 2 action mới ở Google Apps Script Student:
- `getTeacherResearchSnapshot`
- `saveTeacherIntervention`

File backend mới đi kèm:
`AI_Math_Bridge_Student_GoogleAppsScript_RESEARCH_TEACHER_v3.8.1.gs`

### Cách cập nhật
1. Mở Google Sheet Student.
2. Extensions → Apps Script.
3. Thay nội dung `Code.gs` bằng file v3.8.1 đi kèm.
4. Save.
5. Deploy → Manage deployments → Edit → **New version** → Deploy.
6. Giữ nguyên Web App URL `/exec` nếu cập nhật cùng deployment.
7. Trong Google Sheet, menu **AI Math Bridge → Cấu hình tài khoản Giáo viên** nếu chưa có tài khoản giáo viên.
8. Mở Teacher → Nghiên cứu → nhập tài khoản/mật khẩu GV → Kết nối dữ liệu Student.

## Bảo vệ dữ liệu
- Không nhúng mật khẩu giáo viên vào source Teacher.
- Teacher token lưu localStorage theo phiên trình duyệt.
- Dữ liệu Student chỉ được đọc qua action yêu cầu teacher token.
- Barrier profile là bằng chứng mô tả, không tự động gắn nhãn năng lực học sinh.
