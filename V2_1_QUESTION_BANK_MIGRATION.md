# AI Math Bridge Student V2.1 — Thay ngân hàng câu hỏi & cây chọn bài

## Mục tiêu vòng này
Loại bỏ ngân hàng bài tập Student cũ sau khi phát hiện nhiều câu sai/lỗi kiến thức ở Level 2 và Level 3. Student V2.1 dùng trực tiếp nội dung đã chuẩn hóa từ bản **AI Math Bridge Teacher final PNL enhanced 2026-08-29**.

## Thay đổi chính

### 1. Bỏ ngân hàng Student cũ
Đã xóa các file dữ liệu cũ:
- `practiceProblemsG10*.ts`
- `practiceProblemsG11*.ts`
- `practiceProblemsG12*.ts`

`practiceProblems.ts` hiện chỉ là lớp tương thích cho AI Tutor và được sinh từ ngân hàng Teacher chuẩn; không còn chứa câu cũ.

### 2. Ngân hàng Student mới
Chỉ đưa 3 định dạng cần cho Student:
- **Level 2:** TN (trắc nghiệm) = **1.322 câu**.
- **Level 3:** TLN (trả lời ngắn) = **638 câu**.
- **Level 3:** TL (tự luận) = **291 câu**.

Tổng câu Student sử dụng: **2.251 câu**.

Phân bố:
- Lớp 10: 409 TN + 199 TLN + 99 TL.
- Lớp 11: 525 TN + 245 TLN + 114 TL.
- Lớp 12: 388 TN + 194 TLN + 78 TL.

Không đưa câu Đúng/Sai vào Level 2 hoặc Level 3 theo yêu cầu.

### 3. Cây chọn mới: Khối → Chương → Bài
Student không còn bắt học sinh chọn từng “Dạng 1 / Dạng 2 / ...”.

Cấu trúc mới:
- Khối 10 / 11 / 12
- Chương
- Bài
- Hệ thống tự lấy câu đúng trong Bài đã chọn

Curriculum dùng cùng Teacher bank:
- **24 chương**
- **79 bài**

Mỗi Chương/Bài hiện badge số câu phù hợp với Level đang học.

### 4. Câu hỏi thay đổi theo lượt học
Khi chọn Bài, hệ thống chọn ngẫu nhiên một câu trong đúng Bài đó. Có thêm nút **Câu khác ngẫu nhiên** để học sinh luyện đa dạng mà không chuyển sai chương/bài.

### 5. Level 2
- Chỉ lấy TN chuẩn.
- Tiếng Anh là đề chính; tiếng Việt là hỗ trợ bật/tắt.
- Có nghe phát âm đề.
- Giữ Smart Hover cho thuật ngữ.
- Gợi ý từ vựng/công thức được kiểm soát.
- Chỉ hiện lời giải chuẩn sau khi nộp đáp án.
- Đã bỏ chức năng AI tự sinh câu trong Level 2 để tránh phát sinh câu ngoài ngân hàng chuẩn.

### 6. Level 3
- Trộn tự động TLN + TL trong đúng Bài học.
- TLN: tự chấm theo đáp án chuẩn của Teacher bank.
- TL: AI chỉ dùng để **chấm bài của học sinh dựa trên lời giải chuẩn đã có**; không dùng AI tự sinh đề.
- Khi AI chấm không kết nối được, hệ thống không bịa điểm; học sinh vẫn có thể đối chiếu lời giải chuẩn.
- Tiếng Việt/gợi ý vẫn được ghi nhận để phục vụ Math English Score.

### 7. Hình/bảng/đồ thị gốc
Đã chuyển toàn bộ `public/question-assets` từ Teacher final sang Student.
- 72 file asset nguồn trong gói Teacher.
- Các câu Student có asset đều tìm thấy file tương ứng.
- So sánh thư mục Teacher ↔ Student: không khác biệt.

## Audit V2.1
- 24 chương: PASS.
- 79 bài: PASS.
- 2.251 câu Student: PASS.
- TN = 1.322: PASS.
- TLN = 638: PASS.
- TL = 291: PASS.
- Duplicate question ID: 0.
- Câu không map được Chương/Bài: 0.
- TN sai cấu trúc 4 lựa chọn / key: 0.
- TLN thiếu đáp án: 0.
- TL thiếu lời giải chuẩn: 0.
- Thiếu câu tiếng Anh: 0.
- Thiếu câu tiếng Việt: 0.
- Lệch dấu `$` trong dữ liệu xuất sang Student: 0.
- Asset được câu hỏi tham chiếu nhưng thiếu file: 0.
- Legacy `practiceProblemsG*.ts` còn lại: 0.
- Core data TypeScript compile: PASS.
- Full `tsc` chỉ dừng ở dependency React/Vite/Node không có trong gói source; không phát hiện lỗi TypeScript nội bộ ngoài dependency.

## Nguyên tắc dữ liệu từ V2.1
**Teacher bank là nguồn nội dung Toán chuẩn duy nhất.** Student chỉ đọc và tổ chức lại câu hỏi theo mục tiêu học tập; không duy trì một ngân hàng Toán riêng để tránh hai bản lệch nhau về kiến thức.
