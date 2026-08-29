# FINAL RELEASE AUDIT — AI Math Bridge — 2026-08-29

## 1. Đối chiếu 3 bộ PNL người dùng gửi hôm nay
- **Bộ 1 lớp 10 PNL:** ĐÃ DÙNG. Original visual bank có **9 câu hình/bảng lớp 10** từ nguồn người dùng cung cấp.
- **Bộ 2 lớp 11 PNL:** ĐÃ DÙNG. Original visual bank có **9 câu hình/bảng lớp 11** từ nguồn người dùng cung cấp.
- **Bộ 8 lớp 12 PNL:** ĐÃ DÙNG. Có **25 câu gắn nhãn Bộ 8 + 2 câu nguồn Bộ 8**, đồng thời đã khai thác thêm **10 câu hình Chương 4 PNL**. Không nhập lại bản trùng.
- Tổng original visual bank: **72 câu**; sau quality gate/cap có **70 hình/bảng gốc active**.

## 2. Quy mô ngân hàng active
- Active: **2887 câu**
- Online-safe: **2596 câu**
- Dạng toán: **289/289**
- TN: **1322** — min 4, max 12
- Đ/S: **636** — min 2, max 4
- TLN: **638** — min 2, max 6
- TL: **291** — min 1, max 2
- Thiếu tối thiểu 4–2–2–1: **0**
- Vượt trần 12–4–6–2: **0**

## 3. Chống trùng
- ID trùng: **0**
- Câu trùng nguyên văn cùng type + format: **0**
- Clone cùng cấu trúc chỉ thay số cùng type + format: **0**

## 4. Kiến thức và routing
- Oxyz / tọa độ không gian lọt vào lớp 11: **0**
- Câu lớp 12 phương sai/độ lệch chuẩn dùng bảng “Giá trị đại diện – Tần số”: **0**
- Bảng lớp 12 phương sai/độ lệch chuẩn có <3 khoảng lớp hoặc sai nhãn: **0**
- Curriculum audit: **PASS — 24 chương, 79 bài, 289 dạng, 1.734 blueprint**
- Worksheet audit: **PASS**
- TypeScript syntax TS1xxx: **0** (full build chưa chạy vì package `node_modules` không được đóng trong source ZIP).

## 5. Công thức toán
- Lượt công thức active: **21,246**
- Công thức duy nhất: **3,717**
- Chuỗi lệch dấu `$`: **0**
- Lệnh LaTeX quan trọng nằm ngoài math delimiters: **0**
- `array` duy nhất: **52**, lỗi cấu trúc: **0**
- XeLaTeX: **3717/3717 PASS**

## 6. Hình/bảng
- Hình/bảng gốc active: **70**
  - Lớp 10: **9**
  - Lớp 11: **9**
  - Lớp 12: **52**
- Thiếu file: **0**
- Sai SHA-256: **0**
- Caption/trích dẫn nguồn hiển thị dưới hình: **0**
- Placeholder “Hình minh họa dạng bài…”: **0**

## 7. Nguồn PNL và random hóa
- Câu PNL active sạch: **222**
- PNL sạch được ưu tiên trước nguồn khác/static.
- Có `questionShuffleSeed` và nút **Đổi bộ câu**; thứ tự câu trong cùng tầng ưu tiên thay đổi theo seed, vẫn khóa đúng `type_id`.
- Nếu kho sạch không đủ mức người dùng chọn, hệ thống báo thiếu; không lấy câu sai dạng để bù.

## Kết luận
**PASS để đóng bản ZIP cuối.** Ba bộ PNL người dùng nhắc lại đều đã được sử dụng; vì vậy không nhập lại câu/hình trùng.
