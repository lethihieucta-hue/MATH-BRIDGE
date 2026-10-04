# Cập nhật Google Sheets / Apps Script cho AI Math Bridge V3.1.4

## A. Thay code Apps Script
1. Mở file Google Sheet AI Math Bridge hiện tại.
2. Chọn **Extensions → Apps Script**.
3. Mở `Code.gs`, xóa code cũ.
4. Copy toàn bộ nội dung file `GOOGLE_APPS_SCRIPT_V3_1_4_ROSTER_CLEANUP_AI_GRADING.txt` hoặc `google-apps-script/Code.gs` trong ZIP và dán vào.
5. Save.
6. Chọn hàm `setupDatabase` → Run một lần. Cấp quyền nếu Google hỏi.
7. Reload Google Sheet.

## B. Dọn tài khoản/test profile cũ trên Google Sheet
1. Menu **AI Math Bridge → Dọn dữ liệu cũ ngoài ROSTER**.
2. Chọn **Yes**.
3. Script chỉ coi StudentID đang có trong `ROSTER` và không `INACTIVE` là hợp lệ.
4. Dữ liệu ngoài roster được chuyển vào `LEGACY_ARCHIVE` trước khi xóa khỏi các bảng hoạt động.
5. Không tự xóa `PRE_POST_EXPERIMENT` và `TEACHER_INTERVENTION`.

## C. Deploy lại mà giữ nguyên URL
1. Apps Script → **Deploy → Manage deployments**.
2. Chọn deployment Web app hiện tại → **Edit**.
3. Version → **New version**.
4. Execute as: **Me**.
5. Who has access: **Anyone**.
6. **Deploy**.
7. URL `/exec` giữ nguyên nếu bạn sửa deployment cũ. Không cần thay URL trong Web App.

## D. Kiểm tra
- Web App → Dashboard Giáo viên → Google Sheets Learning Database.
- Bấm **Test Sheet**.
- Nếu Gemini đã cấu hình, bấm **Test AI Level 3**.
- Sau khi V3.1.4 load lần đầu, tài khoản local/test có Mã HS không thuộc roster sẽ tự bị loại.
