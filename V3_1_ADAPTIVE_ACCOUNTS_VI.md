# AI Math Bridge Student V3.1 — Adaptive AI + Account Test

## Mục tiêu bản này
Gộp hai mốc đã thống nhất thành một bản duy nhất:
- V3.0: Adaptive AI + Math Score + Math English Score.
- V3.1: tài khoản học sinh, tách tiến độ từng học sinh và dashboard giáo viên cơ bản.

## 1. Adaptive AI V3.0
Hệ thống không chỉ tính phần trăm đúng. Mỗi lần học Level 2–3 tạo bằng chứng cho hai năng lực:
- Math Score: khả năng giải Toán.
- Math English Score: khả năng hiểu và sử dụng ngôn ngữ Toán tiếng Anh.

Điểm được lưu theo từng Bài. Hệ thống theo dõi số lần làm, đúng/sai, độ khó, số Hint, số lần dùng bản dịch và kết quả Level 3. Từ đó tạo độ tin cậy dữ liệu và chọn một trong các chế độ:
- Foundation Bridge
- Math English Bridge
- Math Rebuild
- Balanced Practice
- English First
- English Immersion

AI đề xuất:
- Level tiếp theo;
- Bài cần ưu tiên;
- độ khó EASY/MEDIUM/HARD;
- tỷ lệ English đề xuất;
- mục tiêu học tiếp theo.

Tỷ lệ ngôn ngữ có tác động thật lên giao diện:
- English <= 40%: tự hiện đề song ngữ như scaffold hệ thống, không tính là học sinh dùng bản dịch.
- English 41–65%: English chính + AI Keyword Bridge tự động.
- English > 65%: English-first, học sinh chủ động mở bản dịch khi cần.

## 2. Account V3.1
Có hai tab Đăng nhập / Tạo tài khoản.
- Mã HS + mật khẩu.
- Mật khẩu được băm trước khi lưu trong local storage.
- Mỗi Mã HS có profile và progress riêng.
- Sai mật khẩu bị từ chối.
- Logout/Login lại giữ đúng tiến độ.
- Hồ sơ V2.5 cũ được nhận diện: chọn Tạo tài khoản với đúng Mã HS để đặt mật khẩu và giữ tiến độ cũ.

## 3. Teacher Dashboard V3.1
Dashboard giáo viên hiện dùng dữ liệu thật của các tài khoản được tạo trên cùng trình duyệt:
- số tài khoản;
- Math Score trung bình;
- Math English Score trung bình;
- số HS có khoảng cách Math > Math English;
- số HS có khoảng cách Math English > Math;
- Adaptive Mode từng HS;
- Bài AI ưu tiên;
- xuất CSV.

Không dùng số liệu mẫu/fake trong dashboard V3.1.

## 4. Giới hạn có chủ đích của bản test tài khoản
Bản này cho phép kiểm tra đầy đủ logic tài khoản và tách dữ liệu, nhưng dữ liệu hiện vẫn lưu trên trình duyệt của thiết bị đang dùng.

Điều đó có nghĩa:
- cùng máy/trình duyệt: đăng xuất, đổi tài khoản, tạo nhiều tài khoản và kiểm tra dashboard được;
- khác máy/điện thoại: chưa tự đồng bộ;
- xóa local storage của trình duyệt sẽ xóa tài khoản test.

Cloud đa thiết bị cần một backend thật (Firebase/Supabase hoặc hệ thống trường) và credentials/project do người triển khai sở hữu. Không giả lập cloud bằng dữ liệu giả trong source.

## 5. Cách test nhanh sau deploy
1. Tạo tài khoản `12A1-001`, đặt mật khẩu và vào hệ thống.
2. Làm ít nhất 4 câu Level 2; thử vài câu dùng bản dịch và vài câu không dùng.
3. Xem Math Passport: Math Score / Math English Score, độ tin cậy, Adaptive Mode, Level/English ratio đề xuất.
4. Logout, đăng nhập lại `12A1-001` để kiểm tra tiến độ còn nguyên.
5. Tạo `12A1-002`, xác nhận tài khoản mới không mang dữ liệu của `12A1-001`.
6. Mở `V3.1: Dashboard Giáo viên`, xác nhận thấy hai học sinh với dữ liệu riêng.
7. Nếu Math cao hơn Math English khoảng >=12 điểm, hệ thống phải chuyển sang Math English Bridge. Nếu chiều ngược lại, phải chuyển sang Math Rebuild.

## 6. Phần được bảo toàn
V3.1 không thay đổi:
- MathRenderer đã ổn định từ RenderFix 2.2.3;
- 2.251 câu hỏi chuẩn;
- 1.322 TN + 638 TLN + 291 TL;
- V2.5 XP/Streak/Daily Mission/Badge/Boss.
