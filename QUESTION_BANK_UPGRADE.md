# AI Math Bridge — Full KNTT 10–11–12 Curriculum & Question Blueprint Upgrade

## Trạng thái bản nâng cấp

Bản này thay thế bộ dữ liệu cũ 21 chương / 38 bài / 94 dạng bằng cấu trúc chương trình Toán THPT Kết nối tri thức đầy đủ đang dùng trong ứng dụng:

- **24 chương**: lớp 10 có 9, lớp 11 có 9, lớp 12 có 6.
- **79 bài SGK**: lớp 10 có 27, lớp 11 có 33, lớp 12 có 19.
- **289 `type_id` mới** theo namespace ổn định `type-kntt-{grade}-{book_no}-{type_no}`.
- **6 blueprint / dạng toán**, tổng **1.734 cấu trúc sinh bài** (nằm trong yêu cầu 5–8 cấu trúc/dạng).
- **94/94 `type_id` cũ có migration** sang bộ ID mới để giữ tương thích với câu hỏi đã có.

## Các lỗi kiến trúc đã chặn

1. Không còn fallback mặc định lấy bài cực trị/đồng biến khi bài hiện tại thiếu câu.
2. Chọn một `type_id` chỉ lấy câu được gán chính xác cho `type_id` đó; không lấy cả `topic_id` để bù.
3. AI phải trả đúng `type_id` và đúng `variant_tag` thuộc blueprint của dạng.
4. Câu trùng cấu trúc chỉ thay số bị loại bằng structural signature.
5. Một `variant_tag` không được lạm dụng quá 2 câu trong một lần sinh; mỗi dạng được yêu cầu phủ tối thiểu 5 variant trước khi lặp.
6. Test Builder không còn cơ chế thiếu câu đúng chuyên đề thì lấy câu cùng khối/toàn ngân hàng để đủ số lượng.
7. Dữ liệu lesson cũ chỉ được tái sử dụng khi **tên bài thực sự trùng** với lesson canonical mới; tránh ID cũ trùng vị trí nhưng khác nội dung.
8. Worked examples cũ được migrate `type_id` rồi lọc theo đúng lesson mới.
9. Express server và client localStorage cùng dùng curriculum canonical, tránh server seed cũ ghi đè frontend.

## Cách kiểm tra

```bash
npm run audit:curriculum
```

Kết quả mong đợi:

```text
FULL KNTT AUDIT PASSED — 24 chương, 79 bài, 289 dạng, 1734 blueprint.
```

Audit còn kiểm tra trùng ID, mốc bài dễ lệch số, migration 94 dạng cũ, fallback sai bài, Test Builder routing và guard dữ liệu cũ.

## Nguyên tắc vận hành ngân hàng

- **Ưu tiên đúng bài/dạng hơn đủ số lượng.** Nếu ngân hàng tĩnh chưa đủ, app không được lấy câu ở bài khác để lấp chỗ trống.
- Khi có Gemini API, `questionBlueprintData.ts` cung cấp 6 cấu trúc khác nhau cho từng `type_id`; output sai blueprint bị loại.
- `FULL_QUESTION_BANK` cũ được canonicalize ngay tại module nguồn, nên mọi màn hình import trực tiếp đều nhận ID mới.
- Blueprint là **khung sinh bài**, không phải 1.734 câu cố định; nội dung cụ thể có thể được AI sinh đa dạng nhưng bị khóa bởi type + variant.

Xem `KNTT_TYPE_CATALOG.md` để kiểm tra toàn bộ 79 bài và 289 dạng toán.
