# V3.1.5 – AI Resilience trước V3.5

## Vì sao có bản này?
Ở V3.1.4.x, Google Apps Script đã kết nối được Gemini nhưng khi model gặp 503 (high demand), Student còn thử một nhánh Gemini cục bộ cũ. Nhánh cũ vẫn chứa `gemini-1.5-flash`/`gemini-2.0-flash`, nên thông báo lỗi bị trộn giữa “Google đang quá tải” và “model cũ đã ngừng”.

V3.1.5 dọn dứt điểm kiến trúc đó.

## Kiến trúc AI Level 3 từ V3.1.5
Student Web App → Google Apps Script → Gemini → chấm theo lời giải chuẩn Teacher Bank → trả JSON điểm → ghi tiến độ Google Sheets.

Không còn:
- API key Gemini trong Local Storage của học sinh.
- Gemini client-side fallback.
- `/api/tutor/grade-essay` fallback trong Level 3 static deploy.
- `gemini-1.5-flash` / `gemini-2.0-flash` trong đường chấm Level 3 production.

## Chống lỗi quá tải 503
Apps Script:
1. Chọn model hiện còn hỗ trợ `generateContent`.
2. Ưu tiên `gemini-3.7-flash`, `gemini-3.6-flash`, `gemini-3.1-flash-lite`.
3. Với lỗi tạm thời 408/429/500/502/503/504, tự thử lại cùng model theo backoff + jitter.
4. Nếu vẫn lỗi, tự chuyển model kế tiếp.
5. Nếu Google vẫn quá tải, Student hiện “ĐANG QUÁ TẢI” và giữ nguyên bài làm để học sinh bấm chấm lại sau 5–15 giây.

## Bảo mật
Gemini API Key chỉ nằm tại Apps Script → Project Settings → Script Properties → `GEMINI_API_KEY`.
Không đưa API key vào GitHub, `.env` của static deploy hay trình duyệt học sinh.
