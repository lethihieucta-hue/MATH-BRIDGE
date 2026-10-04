# AI Math Bridge Student V2.2.3 — Render + Deploy Root Fix

## Nguyên nhân xác định từ ảnh người dùng
Ảnh web đang chạy không khớp dữ liệu V2.2.2 trong source: source V2.2.2 đã có dấu `$...$` quanh công thức và option English đầy đủ, trong khi ảnh web vẫn hiển thị `\prime` thô và option tiếng Việt. Điều này cho thấy host đang build source cũ/nested folder.

## Sửa code
- RichMathText không còn nhánh suy đoán cả chuỗi là công thức.
- Chỉ token có `$...$`, `$$...$$`, `\(...\)`, `\[...\]` hoặc môi trường LaTeX đầy đủ mới đi vào KaTeX.
- Prose luôn render bằng DOM text, giữ khoảng trắng.
- `array` được parse thành HTML table bằng bộ tách hàng/cột riêng.
- Thêm nhãn `RenderFix 2.2.3` ở màn Level 2/3 để xác nhận deployment đúng build.

## Sửa đóng gói
ZIP V2.2.3 được đóng **flat/root-ready**: bên trong ZIP là `package.json`, `src/`, `public/`, `netlify.toml`... ngay ở cấp đầu.

Khi cập nhật GitHub: mở thư mục repo hiện tại (nơi có `package.json`), copy toàn bộ nội dung V2.2.3 vào đó và chọn Replace. Không copy nguyên một thư mục dự án vào bên trong repo.
