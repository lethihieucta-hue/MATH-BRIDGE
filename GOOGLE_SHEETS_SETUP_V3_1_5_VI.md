# Cập nhật AI Math Bridge V3.1.5

## A. Cập nhật Student Web App
1. Giải nén ZIP V3.1.5.
2. Copy toàn bộ nội dung bên trong ZIP đè trực tiếp vào repository GitHub hiện tại (không tạo thư mục lồng).
3. Commit → Push origin.
4. Chờ Netlify/Vercel deploy xong, mở web và Ctrl+F5.
5. Kiểm tra build label có `V3.1.5 AI Resilience`.

## B. Cập nhật Google Apps Script
1. Google Sheet → Extensions → Apps Script.
2. Mở `Code.gs`.
3. Ctrl+A → Delete.
4. Mở file `AI_MATH_BRIDGE_V3_1_5_Code_AI_RESILIENCE.txt` trong ZIP, copy toàn bộ và dán vào Code.gs.
5. Save.
6. Không cần nhập lại Gemini API Key; Script Property cũ vẫn giữ nguyên.
7. Deploy → Manage deployments → Edit (bút chì) → Version: New version → Deploy.
8. Giữ Execute as: Me; Who has access: Anyone.
9. Mở URL `/exec` trực tiếp. Phải thấy `"version":"3.1.5"`.

## C. Test sau cập nhật
1. Student → Dashboard Giáo viên → Google Sheets Learning Database.
2. Nếu URL `/exec` cũ vẫn đúng deployment thì giữ; nếu bạn tạo deployment mới thì dán URL mới → Lưu URL.
3. Bấm `Test Sheet`.
4. Bấm `Test AI Level 3`.

Kết quả có thể là:
- `READY`: AI hoạt động bình thường.
- `ĐANG QUÁ TẢI`: API key/backend đúng nhưng Gemini đang trả lỗi tạm thời; chờ 5–15 giây rồi test lại.
- `CHƯA CẤU HÌNH`: chưa có `GEMINI_API_KEY` trong Script Properties.

## D. Test chấm thật
Vào Level 3 → chọn câu Tự luận → nhập lời giải → `AI chấm theo lời giải chuẩn`.
Nếu Gemini đang quá tải, bài làm không mất và không sinh điểm giả; chờ vài giây rồi bấm lại.
