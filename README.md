# AI Math Bridge Student — AI Tutor + Full Math Keyboard + Math Speaking

Bản kỹ thuật này phát triển trên nền đã ổn định của AI Tutor và Full Math Keyboard, bổ sung **Math Speaking** nhưng không hiển thị số phiên bản trong giao diện người dùng.

## Math Speaking
Ba chế độ học:
1. **Nghe & nhắc lại**: thuật ngữ/cụm từ Math English của đúng bài đang học.
2. **Đọc biểu thức**: nghe mẫu và đọc công thức/ký hiệu Toán bằng tiếng Anh.
3. **Nói bước giải**: học sinh nói một bước/ý giải bằng tiếng Anh; Gemini đánh giá transcript theo ý Toán + Math English, bám Teacher Bank.

### Microphone & quyền riêng tư
- Dùng Web Speech API/Speech Recognition khi trình duyệt hỗ trợ.
- Có ô transcript nhập tay làm fallback khi trình duyệt/thiết bị không hỗ trợ mic.
- Dùng Speech Synthesis để nghe mẫu.
- **Không lưu file âm thanh**. Chỉ transcript và kết quả luyện được xử lý/ghi tiến độ.
- Phần đầu không tuyên bố chấm accent/âm vị; Repeat/Read Math đo độ khớp transcript, Explain Math dùng Gemini đánh giá nội dung transcript.

## Dữ liệu Speaking
`UserProgress` có thêm:
- `speakingSessions`
- `speakingTurns`
- `speakingPracticeCount`
- `speakingBestScore`

`STUDENT_PROGRESS` trên Google Sheet bổ sung các cột tương ứng. `ACTIVITY_LOG` nhận event loại `speaking`.

## Backend Google Apps Script
Backend hiện hỗ trợ:
- `gradeEssayAI` / `testAI`
- `tutorAI` / `testTutorAI`
- `speakingAI` / `testSpeakingAI`
- `health`, `syncSnapshot`, `getStudentSnapshot`

Gemini API Key vẫn chỉ lưu trong Script Properties.

## Phần ổn định được bảo toàn
- MathRenderer đã ổn định.
- Ngân hàng 2.251 câu chuẩn G10/G11/G12.
- Roster 1.210 HS khối 10–12.
- AI chấm Level 3, AI Tutor, Adaptive AI, Mission/Boss, Research Evidence, Google Sheets Sync.
- Full Math Keyboard + Math English Templates tiếp tục dùng ở Level 3 và Tutor.

Xem `MATH_SPEAKING_SETUP_VI.md` để cập nhật Apps Script và test microphone.


## Cloud Account học sinh

Kích hoạt lần đầu dùng Mã HS + email + mật khẩu, không dùng ngày sinh. Học sinh có thể dùng **Quên mật khẩu** bằng Mã HS + đúng email đã đăng ký để đặt mật khẩu mới.
