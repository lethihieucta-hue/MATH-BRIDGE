# AI Math Bridge — FINAL AUDIT REPORT — 2026-08-29

## Kết luận

**PASS — đủ điều kiện đóng gói bản FINAL.** Toàn bộ question bank và cấu trúc KNTT đã được rà lại sau các sửa đổi cuối cùng về công thức, câu clone, hình/bảng và routing theo type_id.

## 1. Ngân hàng câu hỏi

- Active questions: **3,709**
- Online/grading-safe questions: **2,611**
- Static baseline: **2,601 = 289 × 9**
- Phân bố active: **TN 1722 | Đ/S 654 | TLN 851 | TL 482**
- Duplicate ID: **0**
- Trùng nguyên văn trong cùng type + format: **0**
- Clone cùng cấu trúc chỉ thay số trong cùng type + format: **0**
- Dạng thiếu baseline 4 TN + 2 Đ/S + 2 TLN + 1 TL: **0**

## 2. Công thức toán và bảng

- Math spans đã rà: **31,490**
- Công thức duy nhất: **5,192**
- Lệch dấu $: **0**
- Lệnh LaTeX rơi ngoài vùng toán: **0**
- Bảng array: **216**
- Bảng array lỗi cấu trúc: **0**
- XeLaTeX: **5,192/5,192 PASS** (13 batch, 0 batch lỗi)

Đã sửa bộ render để câu có nhiều đoạn toán xen văn bản, tích phân/nguyên hàm, lượng giác và bảng ghép nhóm 2 hàng không bị hiểu nhầm toàn câu là LaTeX.

## 3. Hình/bảng gốc PNL

- Câu active có image asset: **61**
- Theo khối: **Lớp 10 = 9 | Lớp 11 = 9 | Lớp 12 = 43**
- Asset thiếu: **0**
- SHA-256 asset sai: **0**
- Asset trùng hash: **0**
- Caption/trích dẫn nguồn còn hiển thị: **0**
- Diagram placeholder active: **0**
- Orphan image trong public/question-assets/source: **0** (đã loại 1 file không còn được dùng)

Metadata nguồn vẫn được giữ trong dữ liệu nội bộ nhưng không hiển thị dòng “Hình/bảng gốc…” dưới hình.

## 4. Cấu trúc chương trình và worksheet

- KNTT: **24 chương — 79 bài — 289 dạng**
- Blueprint: **1.734 cấu trúc = 289 × 6**
- Curriculum audit: **PASS**
- Worksheet audit: **PASS**
- Static bank audit: **289 type / 2.601 câu / 0 issue**
- Vocabulary coverage: **79/79 bài / 0 issue**
- Routing chính xác theo type_id; không lấy câu khác dạng để bù số lượng.

## 5. Kiểm tra source

- Các module lõi question bank/curriculum/static/source đã được transpile bằng TypeScript: **PASS**.
- Project-level syntax scan: **0 lỗi cú pháp TypeScript/TSX**.
- Full project type-check cần cài dependencies (React/Katex/Express/Vite) vì bản source không đóng kèm node_modules; các lỗi hiện ra khi chạy tsc không phải lỗi cú pháp mà là dependency/type declarations chưa cài.

## Trạng thái cuối

Không còn lỗi blocking trong 5 nhóm yêu cầu: **hiển thị công thức; câu clone; hình/bảng/caption; thiếu câu; cấu trúc hệ thống**. Bản này là mốc FINAL để đóng ZIP.
