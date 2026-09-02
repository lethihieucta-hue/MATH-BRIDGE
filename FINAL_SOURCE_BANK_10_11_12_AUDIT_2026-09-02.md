# FINAL SOURCE BANK AUDIT — AI Math Bridge Teacher — 2026-09-02

## Mục tiêu
Nâng cấp ngân hàng câu hỏi khối 10–11–12 bằng câu nguồn thật; không dùng AI tự sinh để bù thiếu câu; giữ công thức, phân số, bảng/hình và đáp án theo chuẩn của bản Fraction Standard.

## Nguồn đã dùng trực tiếp
- Khối 10: PNL KNTT; bộ kiểm tra theo bài/ôn chương; Toán thực tế 10.
- Khối 11: Đề Toán 11 theo bài — Trần Đình Cư; Thực tế 11.
- Khối 12: Đề Toán 12 theo bài — Trần Đình Cư.

## Ngân hàng bổ sung đã kiểm tay
Module: `src/lib/curated20260902QuestionBank.ts`
- Tổng: 53 câu nguồn sạch.
- Khối 10: 28 câu.
- Khối 11: 12 câu.
- Khối 12: 13 câu.
- ID câu: 53/53 duy nhất.
- `type_id`: tất cả khớp hệ type KNTT hiện có trong `curriculumData.ts`.
- Câu TN có đáp án được gắn trực tiếp từ nguồn/đối chiếu lời giải; câu TLN có đáp số và lời giải.

### Các bài khối 10 được bổ sung trực tiếp theo phản hồi thiếu câu
- Bài 1 Mệnh đề: +3 câu.
- Bài 2 Tập hợp: +2 câu nguồn PNL.
- Bài 3 Bất phương trình bậc nhất hai ẩn: +5 câu thực tế/PNL.
- Bài 5 Giá trị lượng giác 0°–180°: +3 câu.
- Bài 7 Khái niệm vectơ: +3 câu.
- Bài 9 Tích vectơ với số: +3 câu.
- Bài 11 Tích vô hướng: +3 câu.
- Bài 13 Xu thế trung tâm: +3 câu.
- Bài 14 Độ phân tán: +3 câu.

## Thay đổi cơ chế chọn câu
- Bỏ trần cứng 12 TN / 4 Đ-S / 6 TLN / 2 TL trong phần số lượng yêu cầu.
- Không hiển thị nút “AI tạo thêm” trong khu vực tạo bài luyện từ kho nguồn.
- Khi kho nguồn sạch không đủ, hệ thống thông báo thiếu nguồn thay vì tự sinh câu AI để bù.
- `curated-source-20260902` được whitelist qua bộ lọc source-clean để không bị loại nhầm vì là câu lý thuyết sạch.

## Chuẩn công thức
- Tiếp tục dùng cơ chế Fraction Standard của bản nền.
- Các phân số mới dùng `\dfrac{tử}{mẫu}` (không dùng dấu `/` cho phân số toán học).
- Các dấu `/` thuộc đơn vị như km/h, vòng/phút, đồng/kg vẫn giữ nguyên vì không phải phân số toán học.
- Vectơ, căn, mũ, tích phân và tọa độ được ghi ở dạng LaTeX/KaTeX tương thích với hệ thống hiện tại.

## Kiểm tra kỹ thuật
- Parse TypeScript: 0 lỗi cú pháp ở:
  - `src/lib/curated20260902QuestionBank.ts`
  - `src/lib/questionBankData.ts`
  - `src/components/student/BilingualLessonModule.tsx`
- 53 ID bổ sung đều duy nhất.
- Toàn bộ `type_id` bổ sung đều tồn tại trong cấu trúc chương trình KNTT.

## Ghi chú nguồn TOAN THUC TE 12.rar
Tệp RAR này đã được nhận diện và lập danh mục nội dung, nhưng môi trường đóng gói hiện tại không có backend giải nén RAR (unrar/7z), nên chưa thể trích trực tiếp các câu riêng từ tệp này mà không đoán/OCR. Để giữ nguyên nguyên tắc “không đoán dữ kiện/công thức”, bản final chỉ đưa các câu 12 đã kiểm chắc từ bộ Trần Đình Cư. Tệp nguồn của người dùng không bị thay đổi.
