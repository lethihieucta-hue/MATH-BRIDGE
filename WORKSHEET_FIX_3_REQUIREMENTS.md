# Worksheet fix — 3 yêu cầu

## 1. Chọn dạng là có câu hỏi
- Mỗi `type_id` được kiểm tra độc lập.
- Nếu ngân hàng thiếu câu, hệ thống tự gọi Gemini sau 650 ms để sinh **chỉ phần còn thiếu**.
- Sinh từng `type_id` riêng để tránh output dài/truncated khi chọn nhiều dạng.
- Không dùng câu của dạng/chương khác làm fallback.
- Có nút **Sinh đủ câu** để thử lại thủ công nếu API bị gián đoạn.

## 2. Đúng số lượng TN / Đ-S / TLN / TL
- 4 ô bên phải là nguồn số lượng duy nhất.
- Mặc định theo curriculum: **4 TN + 2 Đ/S + 2 TLN + 1 TL** cho mỗi dạng.
- Khi giảm số lượng, phiếu cắt đúng số câu. Khi tăng, hệ thống tự sinh phần thiếu.
- Bộ lọc vẫn loại câu sai `type_id`, sai `variant_tag`, trùng cấu trúc chỉ đổi số.

## 3. Tóm tắt lý thuyết + công thức
- Đã thêm `src/lib/lessonTheoryData.ts` phủ đủ **79/79 bài KNTT 10–11–12**.
- Mỗi bài có tóm tắt ngắn và `formulas` riêng.
- Canonical theory được ưu tiên khi đồng bộ dữ liệu để dữ liệu cũ không ghi đè trở lại thành danh sách “Dạng 1, Dạng 2…”.

## Kiểm tra
```bash
npm run audit:curriculum
npm run audit:worksheet
```
