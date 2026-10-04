# Hướng dẫn cập nhật Math Speaking

## 1. Cập nhật Student Web App
1. Giải nén ZIP deploy-root.
2. Copy toàn bộ nội dung bên trong vào root repository GitHub hiện tại.
3. Commit → Push → chờ Netlify/Vercel deploy.
4. Mở web và Ctrl+F5.
5. Menu phải có **Math Speaking**; giao diện không hiển thị số phiên bản.

## 2. Cập nhật Google Apps Script
1. Google Sheet → Extensions → Apps Script.
2. Mở Code.gs, xóa code cũ và dán file `AI_MATH_BRIDGE_Code_TUTOR_SPEAKING.txt`.
3. Save.
4. Chạy `setupDatabase` một lần để bổ sung cột Speaking vào STUDENT_PROGRESS.
5. Deploy → Manage deployments → Edit → New version → Deploy.
6. Giữ Execute as: Me; Who has access: Anyone.
7. Không cần nhập lại Gemini API Key.

## 3. Kiểm tra backend
Trong Google Sheet menu **AI Math Bridge**:
- Kiểm tra AI chấm Level 3
- Kiểm tra AI Tutor
- Kiểm tra Math Speaking

Trong Dashboard Giáo viên của Web App:
- Test Sheet
- Test AI Level 3
- Test AI Tutor
- Test Math Speaking

## 4. Test microphone
1. Mở **Math Speaking** bằng Chrome/Edge trên HTTPS.
2. Chọn bài → Nghe & nhắc lại.
3. Bấm **Bật microphone**.
4. Khi trình duyệt hỏi quyền, chọn **Allow/Cho phép**.
5. Nói bằng tiếng Anh, kiểm tra transcript rồi bấm Đánh giá.
6. Thử tiếp Đọc biểu thức và Nói bước giải.

Nếu mic không được hỗ trợ, học sinh vẫn có thể gõ transcript để sử dụng luồng luyện/AI đánh giá. Không có audio nào được lưu vào Google Sheet.
