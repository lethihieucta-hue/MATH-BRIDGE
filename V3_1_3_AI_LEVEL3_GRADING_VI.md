# AI Math Bridge Student V3.1.3 — AI chấm Level 3 qua Google Apps Script + Gemini

## Vì sao V3.1.2 báo “Chưa kết nối được AI chấm bài”?

V3.1.2 thử 2 đường cũ:
1. Gemini API key lưu trực tiếp trên trình duyệt giáo viên/học sinh; hoặc
2. `/api/tutor/grade-essay` của Node/Vercel.

Khi web được deploy tĩnh bằng Netlify, route Node `/api/tutor/grade-essay` không tồn tại. Vì vậy Google Sheets vẫn đồng bộ được nhưng Level 3 không có backend AI để chấm.

## V3.1.3 sửa như thế nào?

V3.1.3 dùng chính Google Apps Script Web App đã kết nối Google Sheet làm backend AI:

Student Web App → Google Apps Script `/exec` → Gemini API → trả rubric chấm → Student Web App → đồng bộ tiến độ lên Google Sheet.

Gemini API Key được giữ trong **Script Properties**. Key không được gửi xuống trình duyệt học sinh và không ghi vào Google Sheet.

## Cài đặt

1. Trong Google Sheet đang dùng, vào **Extensions → Apps Script**.
2. Thay toàn bộ Code.gs bằng `google-apps-script/Code.gs` của V3.1.3.
3. Save rồi quay lại Google Sheet, reload trang.
4. Menu **AI Math Bridge → Cấu hình Gemini API Key** → dán API key từ Google AI Studio.
5. Menu **AI Math Bridge → Kiểm tra AI chấm Level 3**. Phải hiện “đã kết nối”.
6. Apps Script → **Deploy → Manage deployments → Edit → New version → Deploy**.
7. Deploy Student V3.1.3 lên GitHub/Netlify như các bản trước.
8. Trong Student Web App → Google Sheets Learning Database → giữ/dán URL `/exec` → **Test Sheet** → **Test AI Level 3**.
9. Vào Level 3, chọn câu **TỰ LUẬN**, viết bài và bấm **AI chấm theo lời giải chuẩn**.

## Quy tắc chấm

AI được gửi:
- đề tiếng Anh của câu hỏi;
- lời giải chuẩn/đáp án từ Teacher Bank;
- bài làm học sinh.

AI chấm 4 tiêu chí, mỗi tiêu chí 0–10:
- Math Accuracy & Logical Steps;
- Mathematical English & Terminology;
- Structure & Cohesion;
- Grammar & Academic Transitions.

Điểm tổng được chuẩn hóa lại ở Apps Script để tránh model trả số ngoài khoảng. Nếu Gemini không phản hồi, hệ thống **không tạo điểm giả**.

## Model fallback

Backend thử lần lượt:
- `gemini-3.7-flash`
- `gemini-2.5-flash`
- `gemini-2.0-flash`

Nếu model đầu không khả dụng với project/API key, hệ thống tự thử model tiếp theo.

## Lưu ý bảo mật

- Không gửi Gemini API Key cho học sinh.
- Không đưa key vào GitHub.
- Không ghi key vào ô Google Sheet.
- Chỉ nhập key qua menu **AI Math Bridge → Cấu hình Gemini API Key**; key nằm trong Script Properties.
