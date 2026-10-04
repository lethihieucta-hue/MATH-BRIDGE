# AI Math Bridge Student V2.2.2 — Parser / Renderer Fix

## Vì sao V2.2.1 vẫn có thể hiện chữ dính?
Ảnh kiểm tra thực tế cho thấy có trường hợp cả câu tiếng Anh bị trình duyệt hiển thị theo kiểu math font: khoảng trắng biến mất, chữ nghiêng serif, còn các lệnh như `\\vec`, `\\dfrac` có thể lộ ra. Đây là lỗi tầng parser/render, không phải dữ liệu gốc bị mất khoảng trắng.

## Sửa trong V2.2.2
1. Level 2 và Level 3 không dùng `SmartHoverText` ở vùng đề bài nữa.
2. `RichMathText` mới áp dụng quy tắc fail-closed:
   - prose = React text bình thường, font sans, không italic;
   - chỉ token `$...$`, `$$...$$`, `\\(...\\)`, `\\[...\\]` hoặc environment LaTeX hợp lệ mới vào math renderer;
   - một câu văn có `\\vec`, `\\frac`, dấu `=`... không bao giờ được render toàn câu bằng KaTeX.
3. `\\begin{array}...\\end{array}` được parse thành bảng HTML thật, không còn phụ thuộc KaTeX array. Điều này áp dụng cho cả đề tiếng Anh và bản dịch tiếng Việt.
4. Nếu KaTeX gặp lỗi, giao diện fallback về text dễ đọc thay vì raw error màu đỏ.
5. Giữ nguyên ngân hàng chuẩn 2.251 câu và cây Khối → Chương → Bài.

## Audit dữ liệu sau sửa
- 2.251 câu: 1.322 TN + 638 TLN + 291 TL.
- 14.166 math token được parser nhận dạng trong các trường đề/lời giải/lựa chọn.
- 164 bảng `array` được nhận dạng; toàn bộ bảng có số cột đồng nhất giữa các hàng.
- 0 trường có dấu `$` lẻ.
- 0 lệnh LaTeX trọng yếu nằm ngoài math token trong dữ liệu nguồn.
- 0 lựa chọn tiếng Anh rỗng.
- 0 lựa chọn tiếng Anh chứa ký tự tiếng Việt có dấu.
- 0 từ tiếng Anh dài bất thường >= 28 ký tự trong prose (kiểm tra nguồn không bị dính chữ).
- TSX syntax/transpile: PASS cho MathRenderer, Level2ReadingStudio, Level3EssayStudio.

## Lưu ý deploy
Sau khi thay source trên GitHub/Netlify/Vercel, nên xác nhận deployment mới đã hoàn thành rồi hard refresh trình duyệt (Ctrl+F5) để tránh bundle cũ trong cache.
