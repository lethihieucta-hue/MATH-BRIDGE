# POST-FEEDBACK AUDIT — 2026-08-29

## Mục tiêu vòng này
- Sửa lỗi công thức/LaTeX còn hiện đỏ hoặc lộ dấu `$`.
- Loại clone cùng cấu trúc chỉ đổi số.
- Không để kiến thức Oxyz lớp 12 lọt vào hình học không gian lớp 11.
- Bảng phương sai/độ lệch chuẩn lớp 12 phải dùng **Khoảng lớp – Tần số**, tối thiểu 3 lớp.
- Ưu tiên nguồn Phan Nhật Linh (PNL), nhất là câu có hình gốc.
- Ngân hàng mỗi `type_id` giữ trong giới hạn **12 TN – 4 Đ/S – 6 TLN – 2 TL**, tối thiểu **4–2–2–1**.
- Mỗi lần đổi bộ câu phải thay thứ tự/câu trong chính `type_id`, không lấy câu sai dạng để bù.

## Kết quả bank sau khi khóa trần 12–4–6–2
- Active bank: **2.887 câu**.
- Online-safe: **2.596 câu**.
- Dạng toán: **289/289**.
- Thiếu tối thiểu 4–2–2–1: **0 dạng**.
- Vượt trần 12–4–6–2: **0 dạng**.
- TN: min 4, max 12, tổng 1.322.
- Đ/S: min 2, max 4, tổng 636.
- TLN: min 2, max 6, tổng 638.
- TL: min 1, max 2, tổng 291.
- Online-safe: **0/289 dạng thiếu 4 TN + 2 Đ/S + 2 TLN**.

## Chất lượng và chống trùng
- ID trùng: **0**.
- Đề trùng nguyên văn trong cùng `type_id + format`: **0**.
- Clone cùng cấu trúc chỉ thay số trong cùng `type_id + format`: **0**.
- Câu Oxyz / tọa độ không gian lọt vào lớp 11: **0**.

## Phương sai – độ lệch chuẩn lớp 12
- Active questions thuộc 2 dạng: **22 câu**.
- Câu hiển thị bảng kiểu `Giá trị đại diện – Tần số`: **0**.
- Bảng LaTeX sai kiểu / dưới 3 khoảng lớp: **0**.
- Các bảng nền hiện dùng `Khoảng lớp – Tần số` với 4 khoảng lớp; câu PNL có hình/bảng gốc được ưu tiên trước.

## Công thức toán
- Math occurrences trong active bank: **21.246**.
- Công thức duy nhất: **3.717**.
- Lệch dấu `$`: **0**.
- Lệnh LaTeX quan trọng rơi ngoài vùng toán: **0**.
- Option nguồn còn dạng `$...$.`: **0**.
- XeLaTeX: **3.717/3.717 PASS**, log lỗi = 0.
- `MathRenderer` tách math token trước khi render, tránh gửi cả chuỗi như `$A$ và $B$` hoặc `$M(0,2,1)$.` vào KaTeX.

## Bảng và hình
- LaTeX `array` active: **212**, lỗi cấu trúc: **0**.
- Hình/bảng gốc active: **70**.
  - Lớp 10: 9.
  - Lớp 11: 9.
  - Lớp 12: 52.
- Asset thiếu: **0**.
- SHA-256 sai: **0**.
- Caption nguồn hiển thị: **0**.
- Placeholder `Hình minh họa dạng bài...`: **0**.

## Nguồn PNL và câu mới
- Active PNL sạch sau khi áp trần + grading gate: **222 câu**.
- PNL có hình được ưu tiên cao nhất trong pool.
- Các câu ứng dụng tích phân có hình vừa bổ sung gồm: viên gạch parabol, đường bê tông, chiếc chén khối tròn xoay; cùng các hình cầu bê tông, biển quảng cáo, bình chứa nước đã có trước.

## Random hóa bộ câu
- Có `questionShuffleSeed` và nút **Đổi bộ câu**.
- PNL / nguồn sạch được ưu tiên, nhưng thứ tự trong cùng tầng ưu tiên thay đổi theo seed.
- Test `type-kntt-12-13-04` với 3 seed khác nhau cho ra 3 nhóm TN đầu khác nhau.
- Nếu kho sạch chưa đủ mức người dùng chọn, hệ thống báo thiếu; không lấy câu sai `type_id` để bù.

## Audit cấu trúc
- Curriculum: **24 chương – 79 bài – 289 dạng – 1.734 blueprint: PASS**.
- Worksheet: **PASS**.
- TypeScript parser: **0 lỗi cú pháp TS1xxx**. Full Vite build chưa chạy trong môi trường audit vì project không kèm `node_modules` (các lỗi `TS2307` là thiếu package/type cài đặt, không phải lỗi cú pháp source).

## Trạng thái
Vòng sửa theo feedback đã hoàn tất và **chưa đóng ZIP mới** để chờ kiểm tra giao diện thực tế theo yêu cầu của người dùng.
