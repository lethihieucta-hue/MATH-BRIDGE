# AI Math Bridge Student V2.2.1 — Rendering Hotfix

Ngày hoàn thiện: 29/08/2026

## Mục tiêu sửa lỗi

Bản này xử lý toàn cục các lỗi quan sát được ở Level 2 và Level 3:

- chữ tiếng Anh bị dính khi câu có LaTeX;
- lệnh `\\tan`, `\\dfrac`, `\\cos`, ... hiện dạng chữ thô;
- bảng `\\begin{array}...\\end{array}` hiện đỏ/raw LaTeX;
- công thức và văn xuôi bị đưa chung vào KaTeX;
- mục “Đề bài bằng tiếng Anh” còn chứa phần lõi tiếng Việt;
- phương án trả lời tiếng Anh còn lẫn tiếng Việt.

## Nguồn câu hỏi

Student vẫn dùng đúng ngân hàng từ bản Teacher cuối đã audit:
`AI_Math_Bridge_FINAL_PNL_ENHANCED_2026-08-29.zip`.

Không quay lại ngân hàng Student cũ. Vấn đề của V2.2 chủ yếu nằm ở renderer Student cũ và một số trường English fallback của static bank.

## Thay đổi renderer

- Đồng bộ nguyên tắc render với renderer Teacher đã audit.
- Tách **văn xuôi** và **math block** trước khi gọi KaTeX.
- Chỉ nội dung nằm trong `$...$`, `$$...$$`, `\\(...\\)`, `\\[...\\]` hoặc công thức thuần mới được đưa vào KaTeX.
- `array`, `cases`, `matrix`, ... được tự chuẩn hóa thành block math nếu nguồn thiếu delimiter.
- Bảo toàn khoảng trắng văn bản bằng `whitespace-pre-wrap`.
- `SmartHoverText` dùng cùng tokenizer với `MathRenderer`, không còn tự bọc cả câu văn thành công thức chỉ vì trong câu có `\\tan`, `\\frac`, ...
- Block math dùng phần tử `span` dạng block để không tạo HTML không hợp lệ khi bảng nằm trong văn bản hỗn hợp.

## Chuẩn hóa dữ liệu tiếng Anh

- `questionEn`: quét toàn bộ 2.251 câu, không còn câu tiếng Anh pha tiếng Việt.
- `options[].en`: không còn phương án tiếng Anh pha tiếng Việt.
- Các bảng tiếng Anh dùng nhãn `Class interval`, `Frequency`, `Sample A/B` thay cho nhãn tiếng Việt.
- Những `solutionEn` cũ thực chất là tiếng Việt/mixed được bỏ nhãn English; giao diện fallback về lời giải tiếng Việt đã kiểm duyệt thay vì giả là lời giải tiếng Anh.

## Audit cuối

- Tổng câu: **2.251**
  - TN: **1.322**
  - TLN: **638**
  - TL: **291**
- Curriculum: **24 chương / 79 bài**
- Bài không có câu: **0**
- ID trùng: **0**
- Lỗi cấu trúc đáp án: **0**
- Asset hình/bảng thiếu: **0**
- `questionEn` còn tiếng Việt: **0**
- `optionEn` còn tiếng Việt: **0**
- Chuỗi lệch dấu `$`: **0**
- Công thức duy nhất được audit XeLaTeX: **3.615 / 3.615 PASS**
- TypeScript: không phát hiện lỗi nội bộ ngoài các module/type package chưa được cài trong source ZIP (`react`, `vite`, `katex`, ...).

Chi tiết máy đọc: `V2_2_1_RENDERING_AUDIT.json`.
