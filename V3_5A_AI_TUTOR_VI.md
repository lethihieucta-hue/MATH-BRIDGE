# V3.5A — AI Tutor bằng text

## Mục tiêu
V3.5A biến AI Math Bridge từ hệ thống “chấm và gợi ý” thành một **gia sư AI có kiểm soát**, nhưng vẫn giữ Teacher Bank làm nguồn Toán chuẩn.

## Luồng học
1. Học sinh chọn Khối → Chương → Bài.
2. Tutor lấy một câu chuẩn trong bài (ưu tiên TL/TLN nếu có, fallback TN).
3. Học sinh có thể hỏi tự do hoặc dùng 4 tầng gợi ý.
4. Backend gửi câu hỏi, lời giải chuẩn, hồ sơ Adaptive và đoạn hội thoại gần nhất lên Gemini.
5. Gemini chỉ trả phản hồi Socratic theo JSON schema.
6. Mỗi lượt Tutor được ghi vào tiến độ và Google Sheets.

## 4 tầng scaffold
- **Tầng 1 – Language:** giải nghĩa từ khóa, command words, Given/To Find. Không giải Toán.
- **Tầng 2 – Concept:** nhắc công thức/định lý/khái niệm. Không thay số.
- **Tầng 3 – Strategy:** gợi ý kế hoạch giải. Không tính đến đáp án cuối.
- **Tầng 4 – First step:** chỉ đúng một bước đầu tiên, sau đó dừng và hỏi học sinh làm tiếp.

## Check Step
Học sinh nhập một bước làm. Tutor trả một trong bốn trạng thái:
- CORRECT
- PARTIAL
- INCORRECT
- NOT_APPLICABLE

Tutor chỉ nêu lỗi nhỏ nhất và đặt câu hỏi tiếp theo, không đưa cả lời giải.

## Adaptive bilingual support
Tutor nhận:
- Math Score
- Math English Score
- Adaptive support mode
- Recommended English Ratio

Quy tắc ngôn ngữ:
- English Ratio ≤ 40%: Việt trước + từ khóa Math English.
- 41–65%: song ngữ cân bằng.
- >65%: English-first + Vietnamese rescue khi cần.

## Anti-solution-leak
- Official solution chỉ là **hidden reference** ở backend.
- Student prompt không được phép override system rules.
- AI không tiết lộ final answer/full solution.
- `shouldRevealSolution` luôn bị normalize về `false` ở backend.
- Nếu HS muốn xem lời giải đầy đủ, phải chủ động mở nút **Lời giải chuẩn** trong giao diện; nội dung đó lấy trực tiếp từ Teacher Bank, không phải AI tự tạo.

## Dữ liệu phục vụ báo cáo mô hình
V3.5A ghi:
- tutorSessions
- tutorTurns
- tutorHintCount
- Activity Log type `tutor`
- lessonId, grade, hintStage

Dữ liệu này có thể dùng để nghiên cứu mối liên hệ giữa mức hỗ trợ Tutor và sự cải thiện Math / Math English trong PRE–POST.
