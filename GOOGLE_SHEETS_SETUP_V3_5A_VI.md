# Kết nối Google Sheets + Gemini cho AI Math Bridge V3.5A

## 1. Cập nhật Code.gs
1. Mở Google Sheet database đang dùng.
2. Extensions → Apps Script.
3. Mở `Code.gs` → Ctrl+A → xóa code cũ.
4. Dán toàn bộ file `AI_MATH_BRIDGE_V3_5A_Code_TUTOR.txt` hoặc `.gs` trong ZIP.
5. Save.

**Không cần nhập lại Gemini API Key** nếu bạn đang nâng trực tiếp từ V3.1.5; Script Property `GEMINI_API_KEY` vẫn được giữ.

## 2. Chạy setupDatabase
Trong Apps Script chọn hàm `setupDatabase` → Run một lần.

Việc này sẽ giữ dữ liệu hiện tại và bổ sung 3 cột cuối của `STUDENT_PROGRESS`:
- TutorSessions
- TutorTurns
- TutorHints

## 3. Deploy phiên bản mới
1. Deploy → Manage deployments.
2. Bấm biểu tượng Edit ở Web App đang dùng.
3. Version → New version.
4. Execute as: **Me**.
5. Who has access: **Anyone**.
6. Deploy.

Nếu sửa deployment hiện tại thì URL `/exec` thường được giữ nguyên.

## 4. Kiểm tra backend
Mở trực tiếp URL `/exec` trên trình duyệt. Phải thấy JSON có:

`"version":"3.5A"`

và `aiGradingConfigured:true`, `aiTutorConfigured:true` nếu API key đã có.

## 5. Test trong Student Web App
Dashboard Giáo viên → Google Sheets Learning Database:
1. Test Sheet
2. Test AI Level 3
3. **Test AI Tutor**

Mục tiêu:
- Google Sheet: OK
- AI Level 3: READY
- AI Tutor: READY

## 6. Test Tutor thật
Vào sidebar **V3.5A: AI Tutor** → chọn một Bài → thử:
- Tầng 1 Ngôn ngữ
- Tầng 2 Khái niệm
- Nhập một bước giải → `Kiểm tra bước em làm`

Sau đó mở Google Sheet:
- `STUDENT_PROGRESS`: TutorSessions/TutorTurns/TutorHints tăng.
- `ACTIVITY_LOG`: có dòng Type = `tutor`.
