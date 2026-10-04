# Cập nhật Google Apps Script cho AI Math Bridge V3.5.1

## Bước 1 — Thay Code.gs
Google Sheet → Extensions → Apps Script → mở `Code.gs` → Ctrl+A → xóa code cũ → dán toàn bộ file:

`AI_MATH_BRIDGE_V3_5_1_Code_TUTOR_FIX_MATH_KEYBOARD.txt`

Save.

> Không cần nhập lại Gemini API Key. Script Properties cũ vẫn được giữ.

## Bước 2 — Chạy setupDatabase
Chọn hàm `setupDatabase` → Run một lần. Hàm chỉ bổ sung/sửa cấu trúc cần thiết và không xóa roster/tiến độ hợp lệ.

## Bước 3 — Deploy New version
Deploy → Manage deployments → Edit (biểu tượng bút) → Version: **New version** → Deploy.

Giữ:
- Execute as: **Me**
- Who has access: **Anyone**

## Bước 4 — Kiểm tra URL /exec
Mở URL `/exec` trên tab mới. Phải thấy:

`"version":"3.5.1"`

và trong `capabilities` có:

`"tutorAI":true`

## Bước 5 — Test trên Student Web App
Dashboard Giáo viên → Google Sheets Learning Database:
1. Lưu URL `/exec`
2. Test Sheet
3. Test AI Level 3
4. Test AI Tutor

Mục tiêu:
- Google Sheet: OK
- AI Level 3: READY
- AI Tutor: READY

Nếu Web App báo backend cũ/chưa hỗ trợ Tutor, kiểm tra lại URL `/exec` có đúng version 3.5.1 hay chưa.
