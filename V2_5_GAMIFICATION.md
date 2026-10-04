# AI Math Bridge Student V2.5 — Gamification

Base: V2.2.3 DEPLOY ROOT. Bộ parser/renderer đã sửa ở V2.2.3 được giữ nguyên.

## Chức năng mới
- XP thật + Player Level: mỗi 250 XP lên một cấp.
- Streak học thật: chỉ cập nhật khi có hoạt động nhận XP; đăng nhập đơn thuần không làm tăng streak.
- Daily Mission tự reset theo ngày, có 4 nhiệm vụ và chỉ nhận thưởng một lần/nhiệm vụ/ngày.
- 8 huy hiệu dựa trên dữ liệu học thật: vocabulary, Level 2, Level 3, streak, accuracy và Boss.
- Boss Challenge 5 cửa: Vocabulary → Decode → TN → TLN → Final Boss.
- Boss dùng ngân hàng chuẩn hiện có, không sinh câu Toán mới bằng AI.
- Boss ưu tiên bài học đang chọn; nếu bài thiếu định dạng cần thiết thì lấy câu cùng khối.
- Math Passport hiển thị Player Level, Daily Mission, huy hiệu và Boss best score.

## Lưu dữ liệu
V2.5 tiếp tục dùng localStorage theo Mã HS. Dữ liệu V2.2.x cũ được migrate mềm khi mở app; không cần xóa tiến độ cũ.

## Quy tắc Boss
- 5 cửa, 20 điểm/cửa.
- Từ 80/100: thắng Boss, thưởng 100 XP.
- Dưới 80: vẫn nhận XP khuyến khích theo điểm.
- Không dùng bản dịch/gợi ý trong Boss.

## Daily Mission
- Thuộc thêm 3 thuật ngữ: +20 XP.
- Hoàn thành 3 câu Level 2: +30 XP.
- Hoàn thành 1 bài Level 3: +40 XP.
- Kiếm 80 XP trong ngày: +25 XP.
