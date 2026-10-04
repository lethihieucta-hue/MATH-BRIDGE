# AI Math Bridge Student V2.2 — Liên thông Level 1 → 2 → 3 theo Bài học

## Mục tiêu
V2.2 sửa điểm yếu lớn nhất còn lại của Student V2.1: Level 1 trước đây học từ theo khối/chủ đề, trong khi Level 2 và Level 3 đã học theo **Khối → Chương → Bài**. V2.2 đưa cả ba Level về cùng một lộ trình để học sinh có cảm giác học liên tục thay vì vào ba khu vực rời nhau.

## 1. Cây chọn Level 1 mới
Level 1 dùng đúng curriculum của Teacher bank:
- Lớp 10 / 11 / 12
- Chương
- Bài
- Bộ từ/cụm từ trọng tâm của đúng Bài

Không có bước chọn “Dạng 1 / Dạng 2 / ...”.

## 2. Từ vựng không do AI tự sinh
Nguồn từ Level 1 vẫn là danh mục `MATH_TERMS` đã biên soạn. Hệ thống chỉ **xếp độ liên quan** của từ với từng Bài bằng cách đối chiếu:
- tên Bài;
- đề tiếng Anh / tiếng Việt trong Teacher bank;
- kỹ năng Toán;
- kỹ năng Math English;
- lời giải chuẩn.

Nếu một từ xuất hiện trực tiếp trong câu chuẩn của Bài, thẻ Postcard dùng chính câu hỏi đó làm ví dụ Math Phrase Challenge. Vì vậy học sinh có thể gặp lại đúng ngữ cảnh đã học khi sang Level 2/3.

Một số chương có ít thuật ngữ riêng trong bộ từ ban đầu. Với các trường hợp đó, V2.2 chỉ mượn **khái niệm liên quan mạnh** đã có định nghĩa chuẩn ở khối khác (ví dụ `event`, `interquartile range`, `class interval`) rồi gắn vào bài hiện tại; không tạo nghĩa mới bằng AI.

## 3. Hành trình học thống nhất
Luồng đề xuất:

**Level 1 — Learn the language**
→ học thuật ngữ, phát âm, Math Phrase Challenge, nối từ, Speed Recall.

**Level 2 — Read & choose**
→ luyện TN của đúng Bài bằng tiếng Anh, có bản dịch/gợi ý khi cần.

**Level 3 — Solve & explain**
→ luyện TLN/TL của đúng Bài và viết lời giải.

Khi học sinh chuyển Level, hệ thống giữ `selectedLessonId` chung. Nếu Level tiếp theo có câu đúng Bài đó, Bài được giữ nguyên; nếu định dạng đó không có câu, hệ thống chọn Bài hợp lệ gần nhất trong cùng khối thay vì hiển thị màn hình trống.

## 4. Level 1 V2.2
- Postcard theo Bài.
- Phát âm English term.
- Ký hiệu/công thức LaTeX nếu có.
- Math Phrase Challenge từ ngữ cảnh bài.
- Badge “Có trong câu chuẩn” nếu term được nối trực tiếp Teacher bank.
- Thanh tiến độ thuộc từ của Bài.
- Minigame nối từ chỉ lấy từ Bài đang học.
- Speed Recall chỉ lấy từ Bài đang học.
- Speed Math Rush dùng từ Bài đang học.
- Danh sách tra cứu chỉ hiển thị bộ từ của Bài.
- Xuất PPTX riêng cho bộ từ của Bài.
- Nút **Qua Level 2 cùng bài**.

## 5. Liên kết ngược giữa các Level
- Level 2 có nút **Ôn từ Level 1** của Bài hiện tại.
- Level 3 có nút **Ôn Level 1** và **Luyện Level 2**.
- Level 2 vẫn có CTA sang Level 3.

## 6. Audit dữ liệu Level 1
Kết quả audit V2.2:
- Curriculum: **24 chương / 79 bài**.
- Bài có bộ từ: **79/79**.
- Bài trống từ vựng: **0**.
- Tổng lượt term được phân bổ theo Bài: **630**.
- Số term/Bài: **tối thiểu 5, tối đa 12**, trung bình khoảng **8**.
- Lượt term được nối trực tiếp với một câu chuẩn trong chính Bài: **134**.
- Duplicate concept trong cùng Bài: **0**.
- Term bị gắn sai khối sau khi chuẩn hóa: **0**.
- Source question bị nối nhầm sang Bài khác: **0**.

## 7. Audit mã nguồn
- Core data TypeScript (`lessonVocabulary`, `standardQuestionBank`, `mathTerms`, `types`): **compile PASS**.
- 31 file `.ts/.tsx`: **syntax/transpile PASS, 0 file lỗi cú pháp**.
- Relative import bị thiếu: **0**.
- Full `tsc --noEmit`: phần source thay đổi không có lỗi TypeScript nội bộ; môi trường đóng gói không có `node_modules` nên vẫn báo thiếu React/Lucide/Vite/Node types như V2.1.

## Nguyên tắc tiếp tục
- Teacher bank vẫn là **nguồn câu hỏi Toán duy nhất** cho Level 2/3.
- Level 1 chỉ chuẩn bị ngôn ngữ cho nội dung Teacher bank, không tạo một “ngân hàng Toán” mới.
- AI không được dùng để tự sinh nghĩa thuật ngữ hoặc tự sinh câu Toán thay thế câu chuẩn.
