# FINAL ENGLISH QUALITY AUDIT — AI Math Bridge Teacher — 2026-09-03

## Phạm vi
Rà soát toàn bộ ngân hàng câu hỏi Toán 10–11–12 sau khi hoàn tất bổ sung nguồn tối thiểu. Mục tiêu của lượt này là bảo đảm phần English dùng trong chế độ song ngữ/English chính xác, tự nhiên, đúng thuật ngữ Toán và không làm sai công thức/dữ kiện.

## Kết quả ngân hàng
- Tổng câu trong `FULL_QUESTION_BANK`: **3.004**.
- Tổng `type_id`: **289**.
- Câu đạt chuẩn English gồm cả lời giải: **2.806**.
- Câu nguồn bị loại khỏi chế độ song ngữ/English vì chưa có lời giải English đủ tin cậy: **198**.
  - Các câu này vẫn được giữ trong kho nguồn để dùng ở chế độ Việt nếu phù hợp.
  - Hệ thống không đoán/OCR/dịch bừa lời giải để ép chúng vào chế độ English.
- Mức phủ mặc định **4 TN + 2 Đ/S + 2 TLN + 1 TL cho mỗi dạng**: **0 dạng thiếu**.
- ID trùng: **0**.
- Phần tử rỗng/`undefined` trong ngân hàng: **0**.

## Kiểm tra chất lượng English trên 2.806 câu được phép dùng
- Tiếng Việt lọt vào `question_en`: **0**.
- Tiếng Việt lọt vào `solution_en`: **0**.
- Tiếng Việt lọt vào phương án English: **0**.
- Lời giải English rỗng trong tập được phép dùng: **0**.
- Câu hỏi TN kết thúc bằng dấu `:` do văn phong máy móc: **0**.
- Cụm dịch máy đã audit (`A possible result is`, `Using the data...`, `Find the final answer:`, `same-direction`, câu lặp `are are`, ...): **0**.
- Lỗi dấu câu `?.`, `!.`, `..`: **0**.

## Công thức và ký hiệu
Đã sửa thêm lỗi escape JavaScript/TypeScript ở các lệnh LaTeX trong English, đặc biệt:
- `\\cap`, `\\cup`, `\\mid` trong xác suất;
- `\\dfrac`, `\\sin` trong công thức lượng giác;
- ví dụ hiển thị `\\sqrt` trong giao diện ngân hàng câu hỏi.

Audit runtime sau sửa:
- Ký tự điều khiển bất thường: **0**.
- Dạng lỗi `Acap B`, `Amid B`, `Acup B`: **0**.
- Dạng lỗi `x--1`, `-1x`, `+-`, `-+`: **0**.
- Dấu `$` lẻ: **0**.
- Dấu `/` nằm trong vùng toán: **1**, là đơn vị hợp lệ `m/s`, không phải phân số.
- Nhãn Việt trong LaTeX English như `Tần số`, `Khoảng lớp`, `Mẫu A/B`: **0**.

## Các nhóm English đã được viết lại tự nhiên hơn
- Xác suất hợp/giao, biến cố độc lập, xác suất có điều kiện, Bayes và cây xác suất.
- Quy tắc đếm, chỉnh hợp/tổ hợp, mật khẩu, thực đơn, mã sản phẩm.
- Các bài tung đồng xu, gieo xúc xắc, chọn thẻ/chọn người.
- Câu về đạo hàm, cực trị, tiếp tuyến, gia tốc, tiệm cận.
- Vectơ/Oxyz, trung điểm, trọng tâm, khoảng cách.
- Lượng giác, nguyên hàm–tích phân và thống kê.
- Các câu Đúng/Sai chuẩn hóa nhãn **T/F** trong English.

## Kiểm tra tính nhất quán chấm
- Câu TN có số đáp án đúng khác 1: **0**.
- `correct_answer` không khớp option được đánh dấu đúng: **0**.
- Phương án Việt có nội dung nhưng phương án English rỗng: **0**.

## Kiểm tra kỹ thuật
- Parse toàn bộ **55 file `.ts/.tsx`** của dự án: **0 lỗi cú pháp**.
- Khởi tạo runtime ngân hàng qua bản TypeScript compile audit: **PASS**, nạp đủ 3.004 câu.
- Không còn chuỗi `},,` từng gây trang trắng.
- Không còn nút/chuỗi `AI tạo thêm` trong luồng bài luyện nguồn sạch.
- Không còn trần cứng 12/4/6/2 ở Bilingual Lesson Module.

## Ghi chú an toàn chất lượng
198 câu nguồn có lời giải English trống/không đủ tin cậy được **fail-closed**: `TestBuilder` và `BilingualLessonModule` chỉ nhận câu khi `isQuestionEnglishReady(..., { includeSolution: true })` đạt. Nhờ ngân hàng fallback sạch, việc loại các câu này không làm xuất hiện cảnh báo thiếu ở mức mặc định.

Do môi trường đóng gói hiện không có `node_modules`, lượt này không chạy full `vite build` cục bộ. Thay vào đó đã chạy parse toàn bộ TS/TSX và compile + execute trực tiếp các module ngân hàng; đây là phép kiểm runtime đã từng bắt được lỗi `undefined` gây trắng trang. Khi đưa ZIP lên GitHub/Vercel, Vercel sẽ thực hiện full build với dependencies của dự án.
