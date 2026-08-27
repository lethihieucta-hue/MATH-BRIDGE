import { Question } from '../types';

/** Câu hỏi nguồn GV đã qua quality gate; ưu tiên trước ngân hàng nền. */
export const REAL_SOURCE_QUESTION_BANK: Question[] = [
  {
    "id": "src-pnl-6db2a8e99d5b52",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho bất phương trình bậc nhất hai ẩn: . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Miền nghiệm của bất phương trình là nửa mặt phẳng kể cả bờ , không chứa gốc tọa độ .",
        "content_en": "Miền nghiệm của bất phương trình là nửa mặt phẳng kể cả bờ , không chứa gốc tọa độ .",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "là nghiệm của bất phương trình .",
        "content_en": "là nghiệm của bất phương trình .",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "không là nghiệm của bất phương trình .",
        "content_en": "không là nghiệm của bất phương trình .",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "không là nghiệm của bất phương trình .",
        "content_en": "không là nghiệm của bất phương trình .",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Vẽ đường thẳng đi qua hai điểm và .\n Xét gốc tọa độ ta thấy và .\n Do đó, miền nghiệm của bất phương trình là nửa mặt phẳng kể cả bờ không chứa\n gốc tọa độ (miền không bị tô đậm trong hình).\n b) Đúng: Ta có nên là nghiệm của bất phương trình .\n c) Sai: Ta có nên là nghiệm của bất phương trình .\n d) Sai: Ta có nên là nghiệm của bất phương trình .",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:S",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-3-bieu dien men nghiem cua bat phuong-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1ef39bc5248499",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một công ty viễn thông tính phí 1 nghìn đồng mỗi phút gọi nội mạng và 2 nghìn đồng mỗi phút gọi ngoại mạng. Gọi và lần lượt là số phút gọi nội mạng, ngoại mạng của Bình trong một tháng. Bình muốn số tiền phải trả cho tồng đài luôn thấp hơn 100 nghìn đồng. Khi đó:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số tiền phải trả cho cuộc gọi nội mạng mỗi tháng là (nghìn đồng), số tiền phải trả cho cuộc gọi ngoại mạng mỗi tháng là (nghìn đồng) với điều kiện: .",
        "content_en": "Số tiền phải trả cho cuộc gọi nội mạng mỗi tháng là (nghìn đồng), số tiền phải trả cho cuộc gọi ngoại mạng mỗi tháng là (nghìn đồng) với điều kiện: .",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Bất phương trình bậc nhất gồm hai ẩn số đã cho là .",
        "content_en": "Bất phương trình bậc nhất gồm hai ẩn số đã cho là .",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "nghiệm của bất phương trình bậc nhất gồm hai ẩn số đã cho.",
        "content_en": "nghiệm của bất phương trình bậc nhất gồm hai ẩn số đã cho.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Miền nghiệm của bất phương trình bậc nhất gồm hai ẩn số đã cho là một hình vuông",
        "content_en": "Miền nghiệm của bất phương trình bậc nhất gồm hai ẩn số đã cho là một hình vuông",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Số tiền phải trả cho cuộc gọi nội mạng mỗi tháng là (nghìn đồng), số tiền phải trả cho\n cuộc gọi ngoại mạng mỗi tháng là (nghìn đồng) với điều kiện: .\n b) Đúng: Ta có bất phương trình: .\n c) Đúng: Xét thay vào (đúng) suy ra là một nghiệm\n của .\n d) Sai: Biểu diễn miền nghiệm của trên mặt phẳng tọa độ: Vẽ đường thẳng\n Ta thấy điểm thuộc miền nghiệm của do thay tọa độ vào : (đúng).\n Vậy miền nghiệm của bất phương trình là nửa mặt phẳng (không kể d) có chứa\n điểm (phần không gạch chéo trên hình).\n Trong thực tế, vì nên ta chỉ xét miền nghiệm bất phương trình ứng với miền tam giác\n mà thôi.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:Đ, d:S",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-3-bieu dien men nghiem cua bat phuong-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-30126cde068e57",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm các giá trị nhỏ nhất của tham số sao cho là nghiệm của bất phương trình",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có là nghiệm của bất phương trình khi và chỉ khi",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-3-bieu dien men nghiem cua bat phuong-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e876229a6ad18e",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tam giác có . Tìm điều kiện của tham số để điểm\n nằm bên trong tam giác ?",
    "question_en": "",
    "options": [],
    "solution_vi": "Đường thẳng .\n Đường thẳng .\n Đường thẳng .\n Điều kiện cần và đủ để điểm nằm bên trong tam giác là điểm cùng với mỗi đỉnh\n lần lượt cùng phía với nhau đối với cạnh",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-3-bieu dien men nghiem cua bat phuong-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6df40f55df228c",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Bạn Lan mang 150000 đồng đi nhà sách để mua một số quyển tập và bút. Biết rằng giá một quyển\n tập là 8000 đồng và giá của một cây bút là 6000 đồng. Bạn Lan có thể mua được tối đa bao nhiêu\n quyển tập nếu bạn đã mua 10 cây bút.",
    "question_en": "",
    "options": [],
    "solution_vi": "Bất phương trình biểu diễn số tập và bút có thể mua được phụ thuộc vào số tiền mang theo là\n Bạn Lan có thể mua được tối đa số quyển tập nếu bạn đã mua 10 cây bút là\n Vì nguyên dương nên số quyển tập tối đa bạn Lan mua được là 11 quyển.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-3-bieu dien men nghiem cua bat phuong-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-423525e8507b32",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Anh An là nhân viên bán hàng tại siêu thị điện máy. Anh An kiếm được một khoản hoa hồng 600\n nghìn đồng cho mỗi máy giặt và 1,3 triệu đồng cho mỗi tủ lạnh mà anh ấy bán được. Hỏi để nhận\n được từ 10 triệu đồng trở lên tiền hoa hồng thì anh An cần bán bao nhiêu máy giặt và tủ lạnh?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi và lần lượt là số máy giặt và số tủ lạnh anh An bán được. Khi đó số tiền hoa hổng mà anh\n An nhận được là (triệu đồng).\n Theo để bài, ta có:\n Tiếp theo ta xác định miền nghiệm của bất phương trình như sau:\n Bước 1: Vẽ đường thẳng trên mặt phẳng toạ độ .\n Bước 2: Lấy điềm không thuộc và thay vào biều thức ta được:\n Do đó, miền nghiệm của bất phương trình là nửa mặt phẳng bờ không chứa gốc tọa độ (miển\n không bị tô màu).\n Vậy nếu anh An bán được số máy giặt là và số tủ lạnh là sao cho điểm\n nằm trong nửa mặt phẳng bờ không chứa gốc toạ độ thì anh An nhận được từ 10 triệu\n đồng trở lên tiền hoa hồng.\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-3-bieu dien men nghiem cua bat phuong-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0d1c1c042e694d",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một công ty dự kiến chi triệu đồng cho một đợt quảng cáo sản phẩm của mình. Biết rằng chi phí cho phút quảng cáo trên đài phát thanh là đồng và chi phí cho phút quảng cáo trên truyền hình là triệu đồng. Đài phát thanh chỉ nhận các chương trình quảng cáo dài ít nhất phút, đài truyền hình chỉ nhận các chương trình quảng cáo dài tối đa phút. Theo các phân tích, cùng thời lượng phút quảng cáo, trên đài truyền hình sẽ có hiệu quả gấp lần trên đài phát thanh. Để đạt hiệu quả tối đa thì công ty đó cần quảng cáo bao nhiêu thời gian trên đài phát thanh và bao nhiêu phút trên truyền hình?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "phút trên phát thanh và phút trên truyền hình.",
        "content_en": "phút trên phát thanh và phút trên truyền hình.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "phút trên phát thanh và phút trên truyền hình.",
        "content_en": "phút trên phát thanh và phút trên truyền hình.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "phút trên phát thanh và phút trên truyền hình.",
        "content_en": "phút trên phát thanh và phút trên truyền hình.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "phút trên phát thanh và phút trên truyền hình.",
        "content_en": "phút trên phát thanh và phút trên truyền hình.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi (phút), (phút) tương ứng là thời gian công ty đó quảng cáo trên đài phát thanh và trên đài\n truyền hình. Chi phí công ty cần bỏ ra là (đồng).\n Mức chi này không vượt quá chi phí công ty đặt ra nên\n .\n Do các điều kiện đài phát thanh và đài truyền hình đưa ra nên ta có , .\n Hiệu quả của quảng cáo là .\n Đối chiếu các đáp án và điều kiện ta chọn C: Để đạt hiệu quả cao nhất thì công ty đó cần quảng cáo\n phút trên đài phát thanh và phút trên đài truyền hình.",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-3-nhan dien va tim nghiem cua bat phuong t-16",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-49037d92c36b46",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "An thích ăn hai loại trái cây là cam và xoài, mỗi tuần mẹ cho An 200000 đồng để mua trái cây. Biết rằng giá cam là 15000 đồng/ 1 kg, giá xoài là 30000 đồng/1 kg. Gọi lần lượt là số kilogam cam và xoài mà An có thể mua về sử dụng trong một tuần. Khi đó:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Trong tuần, số tiền An có thể mua cam là đồng, số tiền An có thể mua xoài là đồng với .",
        "content_en": "Trong tuần, số tiền An có thể mua cam là đồng, số tiền An có thể mua xoài là đồng với .",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Bất phương trình bậc nhất cho hai ẩn là",
        "content_en": "Bất phương trình bậc nhất cho hai ẩn là",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Cặp số thỏa mãn bất phương trình bậc nhất cho hai ẩn",
        "content_en": "Cặp số thỏa mãn bất phương trình bậc nhất cho hai ẩn",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "An có thể mua kg cam, kg xoài trong tuần.",
        "content_en": "An có thể mua kg cam, kg xoài trong tuần.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Sai: Trong tuần, số tiền An có thể mua cam là , số tiền An có thể mua xoài là\n với .\n b) Sai: Ta có bất phương trình: .\n c) Đúng: Xét thay vào bất phương trình: (đúng) nên là một\n nghiệm của .\n d) Sai: Xét thay vào bất phương trình: (sai) nên An không có thể mua\n kg cam, kg xoài trong tuần.",
    "solution_en": "",
    "correct_answer": "a:S, b:S, c:Đ, d:S",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-3-nhan dien va tim nghiem cua bat phu-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0df0c9078ceeb4",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một đội sản xuất cần 3 giờ để làm xong sản phẩm loại và 2 giờ để làm xong sản phẩm loại II. Biết thời gian tối đa cho việc sản xuất hai sản phẩm trên là 18 giờ. Gọi lần lượt là số sản phẩm loại , loại mà đội làm được trong thời gian cho phép. Khi đó:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tổng thời gian làm xong sản phẩm loại là , tổng thời gian làm xong sản phẩm loại II là .",
        "content_en": "Tổng thời gian làm xong sản phẩm loại là , tổng thời gian làm xong sản phẩm loại II là .",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Bất phương trình bậc nhất hai ẩn theo với điều kiện là",
        "content_en": "Bất phương trình bậc nhất hai ẩn theo với điều kiện là",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "là một nghiệm của bất phương trình bậc nhất hai ẩn theo với điều kiện",
        "content_en": "là một nghiệm của bất phương trình bậc nhất hai ẩn theo với điều kiện",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "là một nghiệm của bất phương trình bậc nhất hai ẩn theo với điều kiện",
        "content_en": "là một nghiệm của bất phương trình bậc nhất hai ẩn theo với điều kiện",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Tổng thời gian làm xong sản phẩm loại là , tổng thời gian làm xong sản phẩm loại II\n là .\n b) Sai: Ta có bất phương trình: với điều kiện .\n c) Đúng: Thay cặp số vào bất phương trình (đúng) suy ra là một\n nghiệm của .\n d) Đúng: Thay cặp số vào bất phương trình (đúng) suy ra là một\n nghiệm của .",
    "solution_en": "",
    "correct_answer": "a:S, b:S, c:Đ, d:Đ",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-3-nhan dien va tim nghiem cua bat phu-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2b4d29a0c26dda",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một trò chơi chọn ô chữ đơn giản mà kết quả gồm một trong hai khả năng: Nếu người chơi chọn được chữ thì người ấy được cộng 3 điểm, nếu người chơi chọn được chữ thì người ấy bị trừ 1 điểm. Người chơi chỉ chiến thắng khi đạt được số điểm tối thiểu là 20. Gọi theo thứ tự là số lần người chơi chọn được chữ và chữ . Khi đó:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tổng số điểm người chơi đạt được khi chọn chữ là , tổng số điểm người chơi bị trừ khi chọn chữ là .",
        "content_en": "Tổng số điểm người chơi đạt được khi chọn chữ là , tổng số điểm người chơi bị trừ khi chọn chữ là .",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Bất phương trình bậc nhất hai ẩn trong tình huống người chơi chiến thắng là",
        "content_en": "Bất phương trình bậc nhất hai ẩn trong tình huống người chơi chiến thắng là",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Người chơi chọn được chữ 7 lần và chọn được chữ 1 lần thì người đó vừa đủ điểm dành chiến thắng trò chơi.",
        "content_en": "Người chơi chọn được chữ 7 lần và chọn được chữ 1 lần thì người đó vừa đủ điểm dành chiến thắng trò chơi.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Người chơi chọn được chữ 8 lần và chọn được chữ 3 lần thì người đó vừa đủ điểm dành chiến thắng trò chơi.",
        "content_en": "Người chơi chọn được chữ 8 lần và chọn được chữ 3 lần thì người đó vừa đủ điểm dành chiến thắng trò chơi.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Tổng số điểm người chơi đạt được khi chọn chữ là , tổng số điểm người chơi bị trừ\n khi chọn chữ . . là .\n b) Sai: Với , ta có bất phương trình: .\n c) Đúng: Thay cặp số vào bất phương trình (đúng) suy ra là một\n nghiệm của . Điều này cho thấy nếu người chơi chọn được chữ 7 lần và chọn được chữ\n 1 lần thì người đó vừa đủ điểm dành chiến thắng trò chơi.\n d) Sai: Thay cặp số vào bất phương trình (đúng) suy ra là một\n nghiệm của . Điều này cho thấy nếu người chơi chọn được chữ 8 lần và chọn được chữ\n 4 lần thì người đó vừa đủ điểm dành chiến thắng trò chơi.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:S",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-3-nhan dien va tim nghiem cua bat phu-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3c293a5fb00471",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho bất phương trình . Hỏi có bao nhiêu cặp số nguyên thoả mãn\n là nghiệm của bất phương trình đã cho?",
    "question_en": "",
    "options": [],
    "solution_vi": "Vì là nghiệm của bất phương trình nên ta có:\n do .\n Thử lại ta loại các bộ\n Vậy có 11 cặp số sao cho là nghiệm của bất phương trình đã cho.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-3-nhan dien va tim nghiem cua bat phu-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e4d83a47a480d0",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho bất phương trình . Có bao nhiêu giá trị nguyên của tham số để cặp số\n không phải là nghiệm của bất phương trình đã cho.",
    "question_en": "",
    "options": [],
    "solution_vi": "Do cặp không là nghiệm của bất phương trình nên ta có:\n .\n Vậy có tất cả giá trị nguyên của tham số thoả mãn.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-3-nhan dien va tim nghiem cua bat phu-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-783d2de2ca2550",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một cửa hàng có kế hoạch nhập về chiếc xe mô tô gồm hai loại và để bán. Mỗi chiếc xe\n loại có giá triệu đồng và mỗi chiếc xe loại có giá triệu đồng. Để số tiền dùng để nhập\n xe không quá 4 tỉ đồng thì của hàng cần nhập chiếc xe loại và chiếc xe loại . Khi đó\n bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi , lần lượt là số xe loại và loại cần nhập ( ).\n Tổng số tiền nhập xe là: đồng.\n Số tiền dùng để nhập xe không quá 4 tỉ đồng, tức là:\n .\n Thay vào bất phương trình ta có: (vô lý).\n Thay vào bất phương trình ta có: (vô lý).\n Thay vào bất phương trình ta có: (đúng).\n Thay vào bất phương trình ta có: (vô lý).\n Vậy trong trường hợp cửa hàng nhập xe loại và xe loại thì số tiền dùng để nhập xe\n không quá 4 tỉ đồng.\n Vậy .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-3-nhan dien va tim nghiem cua bat phu-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a309f3a394e78c",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Bạn Hương mang 600 000 đồng đi siêu thị mua thực phẩm (gồm thịt và rau) cho gia đình gồm 4\n người dùng trong 4 ngày. Biết rằng mỗi kg thịt có giá 120 000 đồng, mỗi kg rau có giá 30 000\n đồng và siêu thị chỉ bán hàng theo kg chứ không bán lẻ. Nếu gọi là số kg thịt và là số kg rau\n mà Hương mua thì điều kiện của thoả mãn bất phương trình với . Tính\n giá trị biểu thức",
    "question_en": "",
    "options": [],
    "solution_vi": "Vì cửa hàng không bán lẻ nên .\n Số tiền mà Hương mua thịt là đồng và số tiền mà Hương mua rau là đồng.\n Vì Hương chỉ có 600 000 đồng nên ta có bất phương trình:\n .\n Vậy .\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Bất phương trình bậc nhất hai ẩn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-3-nhan dien va tim nghiem cua bat phu-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-56308a00fbfa62",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tập hợp . Hỏi tập M có bao nhiêu phần tử?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0",
        "content_en": "0",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1",
        "content_en": "1",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2",
        "content_en": "2",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "3",
        "content_en": "3",
        "is_correct": false
      }
    ],
    "solution_vi": "Vì nên x, y thuộc vào tập\n Vậy cặp là thỏa mãn Có 2 cặp hay M có 2 phần tử.",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-tap hop va cac phan tu cua tap hop-8",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2118bd4b20e528",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tập hợp . Khi đó tập hợp M có bao nhiêu phần tử?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0",
        "content_en": "0",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1",
        "content_en": "1",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "2",
        "content_en": "2",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Vô số",
        "content_en": "Vô số",
        "is_correct": false
      }
    ],
    "solution_vi": "Vì nên . Khi đó tập hợp M có 1 phần tử duy nhất là .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-tap hop va cac phan tu cua tap hop-11",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b6801b90e5b61c",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tập hợp có 8 phần tử",
        "content_en": "Tập hợp có 8 phần tử",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Tập hợp có 2 phần tử",
        "content_en": "Tập hợp có 2 phần tử",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Tập hợp có 2 phần tử",
        "content_en": "Tập hợp có 2 phần tử",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tập hợp có 3 phần tử",
        "content_en": "Tập hợp có 3 phần tử",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: .\n b) Đúng: .\n c) Sai: .\n d) Đúng: .",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:Đ",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-2-tap hop va cac phan tu cua tap hop-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-31c23a81f51467",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho các tập hợp sau: A các số nguyên tố nhỏ hơn 11; ; ; . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tập hợp A có 4 phần tử",
        "content_en": "Tập hợp A có 4 phần tử",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Tập hợp B có 3 phần tử",
        "content_en": "Tập hợp B có 3 phần tử",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Tập hợp C có 3 phần tử",
        "content_en": "Tập hợp C có 3 phần tử",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tập hợp D có 3 phần tử",
        "content_en": "Tập hợp D có 3 phần tử",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Ta có: Các số nguyên tố nhỏ hơn 11 là: . Vậy .\n b) Sai: Ta có: . Vậy .\n c) Sai: . Vậy\n d) Đúng: Ta có: . Vậy .",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:S, d:Đ",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-2-tap hop va cac phan tu cua tap hop-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-39fbf0bb9e4117",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho các tập hợp sau ; . ; . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tập hợp A có 2 phần tử",
        "content_en": "Tập hợp A có 2 phần tử",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Tập hợp B có 3 phần tử",
        "content_en": "Tập hợp B có 3 phần tử",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Tập hợp C có 2 phần tử",
        "content_en": "Tập hợp C có 2 phần tử",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tập hợp D có 4 phần tử",
        "content_en": "Tập hợp D có 4 phần tử",
        "is_correct": true
      }
    ],
    "solution_vi": "Viết tập hợp dưới dạng liệt kê các phân tử\n a) Đúng: . Vậy\n b) Sai: . Vậy\n c) Sai: . Vậy\n d) Đúng: . Mà .",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:S, d:Đ",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-2-tap hop va cac phan tu cua tap hop-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-32e4abc2a20f41",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho các tập hợp Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tập hợp A có 2 phần tử",
        "content_en": "Tập hợp A có 2 phần tử",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Tập hợp B có 1 phần tử",
        "content_en": "Tập hợp B có 1 phần tử",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Tập hợp C có 3 phần tử",
        "content_en": "Tập hợp C có 3 phần tử",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tập hợp D có 2 phần tử",
        "content_en": "Tập hợp D có 2 phần tử",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai:\n b) Đúng: Ta có:\n c) Sai:\n Ta có:\n d) Đúng:",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:S, d:Đ",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-2-tap hop va cac phan tu cua tap hop-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-863005430e9420",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tập hợp . Số tập con của X là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4",
        "content_en": "4",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6",
        "content_en": "6",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8",
        "content_en": "8",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "12",
        "content_en": "12",
        "is_correct": false
      }
    ],
    "solution_vi": "Số tập con không có phần tử nào là 1 (tập )\n Số tập con có 1 phần tử là 3: .\n Số tập con có 2 phần tử là 3: .\n Số tập con có 3 phần tử là 1: . Vậy có tập con.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-tap hop con va hai tap hop bang nhau-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-038c49c8432d1d",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tập hợp và . Có tất cả bao nhiêu tập X thỏa mãn: ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5",
        "content_en": "5",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6",
        "content_en": "6",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "7",
        "content_en": "7",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "8",
        "content_en": "8",
        "is_correct": true
      }
    ],
    "solution_vi": "X là tập hợp phải luôn có mặt 1 và 2.\n Vì vậy ta đi tìm số tập con của tập , sau đó cho hai phần tử 1 và 2 vào các tập con nói\n trên ta được tập X.\n Vì số tập con của tập là nên có 8 tập X.",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-tap hop con va hai tap hop bang nhau-16",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-37994362c0000a",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tập hợp A có 4 phần tử. Hỏi tập A có bao nhiêu tập con khác rỗng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "16",
        "content_en": "16",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "15",
        "content_en": "15",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "12",
        "content_en": "12",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "7",
        "content_en": "7",
        "is_correct": false
      }
    ],
    "solution_vi": "Vì số tập con của tập 4 phần tử là Số tập con khác rỗng là .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-tap hop con va hai tap hop bang nhau-20",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2178dbe4cb3b88",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Số các tập hợp con có 3 phần tử có chứa a, b của tập hợp là:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5",
        "content_en": "5",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "6",
        "content_en": "6",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "7",
        "content_en": "7",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "8",
        "content_en": "8",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập con có 3 phần tử trong đó a, b luôn có mặt.\n Vậy phần tử thứ 3 sẽ thuộc một trong các phần tử c, d, e, f, g (5 phần tử) nên có 5 tập con.",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-tap hop con va hai tap hop bang nhau-22",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-45094bdbd272c9",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho các tập hợp . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tập hợp có 2 phần tử",
        "content_en": "Tập hợp có 2 phần tử",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Tập hợp có 3 phần tử",
        "content_en": "Tập hợp có 3 phần tử",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Tập hợp là tập con của tập hợp .",
        "content_en": "Tập hợp là tập con của tập hợp .",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Tập hợp là tập con của tập hợp .",
        "content_en": "Tập hợp là tập con của tập hợp .",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Ta có: .\n b) Sai:\n c) Đúng: Vậy tập hợp là tập con của tập hợp .\n d) Sai: Tập hợp không là tập con của tập hợp .",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:S",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-2-tap hop con va hai tap hop bang nha-6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-516aba528ebf71",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Lớp 10A có học sinh giỏi Toán, học sinh giỏi Lý, học sinh giỏi hóa, học sinh giỏi cả\n Toán và Lý, học sinh giỏi cả Hóa và Lý, học sinh giỏi cả Toán và Hóa, học sinh giỏi cả ba\n môn Toán, Lý, Hóa. Tính học sinh giỏi ít nhất một trong ba môn (Toán, Lý, Hóa) của lớp 10A?",
    "question_en": "",
    "options": [],
    "solution_vi": "Theo giả thiết đề bài cho, ta có biểu đồ Ven:\n Dựa vào biểu đồ Ven, ta có học sinh giỏi ít nhất một trong ba môn (Toán, Lý, Hóa) của lớp 10A là:\n Số học sinh giỏi Toán: .\n Số học sinh giỏi Lý: .\n Số học sinh giỏi Hóa: .\n Ta lại có:\n Số học sinh giỏi cả Toán và Lý: .\n Số học sinh giỏi cả Toán và Hóa: .\n Số học sinh giỏi cả Hóa và Lý: .\n Và số học sinh giỏi cả Toán, Lý và Hóa là .\n Số học sinh giỏi hơn một môn là .\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-2-tap hop con va hai tap hop bang nha-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4c49d86ada6370",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hai tập hợp và . Số tập hợp X thỏa mãn là:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2",
        "content_en": "2",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "3",
        "content_en": "3",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "4",
        "content_en": "4",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "5",
        "content_en": "5",
        "is_correct": false
      }
    ],
    "solution_vi": "Vì nên bắt buộc X phải chứa các phần tử và .\n Vậy X có 3 tập hợp đó là: .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-xac dinh giao hop cua hai tap hop-9",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-43145d9b5be9b3",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tập hợp . Tìm số tập hợp X sao cho và .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1",
        "content_en": "1",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2",
        "content_en": "2",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3",
        "content_en": "3",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4",
        "content_en": "4",
        "is_correct": false
      }
    ],
    "solution_vi": "Vì nên X phải chứa hai phần tử 2; 4 và X không chứa các phần tử 1; 3; 5. Mặt khác\n vậy X phải chứa 6; 7 và các phần tử khác nếu có phải thuộc .\n Vậy .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-xac dinh giao hop cua hai tap hop-11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e6dc8e5151fde8",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một lớp học có 25 học sinh giỏi môn Toán, 23 học sinh giỏi môn Lý, 14 học sinh giỏi cả môn Toán và Lý và có 6 học sinh không giỏi môn nào cả. Hỏi lớp đó có bao nhiêu học sinh?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "54",
        "content_en": "54",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "40",
        "content_en": "40",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "26",
        "content_en": "26",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "68",
        "content_en": "68",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi T, L lần lượt là tập hợp các học sinh giỏi Toán và các học sinh giỏi Lý.\n Ta có:\n : là số học sinh giỏi Toán\n : là số học sinh giỏi Lý\n : là số học sinh giỏi cả hai môn Toán và Lý\n Khi đó số học sinh của lớp là: .\n Mà .\n Vậy số học sinh của lớp là .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-xac dinh giao hop cua hai tap hop-13",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-93b2e6a2bac879",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Lớp 10A có 45 học sinh trong đó có 25 em học giỏi môn Toán, 23 em học giỏi môn Lý, 20 em học giỏi môn Hóa, 11 em học giỏi cả môn Toán và môn Lý, 8 em học giỏi cả môn Lý và môn Hóa, 9 em học giỏi cả môn Toán và môn Hóa. Hỏi lớp 10A có bao nhiêu bạn học giỏi cả ba môn Toán, Lý, Hóa, biết rằng mỗi học sinh trong lớp học giỏi ít nhất một trong 3 môn Toán, Lý, Hóa?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3",
        "content_en": "3",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "4",
        "content_en": "4",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "5",
        "content_en": "5",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "6",
        "content_en": "6",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi T, L, H lần lượt là tập hợp các học sinh giỏi môn Toán, Lý, Hóa.\n Khi đó tương tự Ví dụ 13 ta có công thức:\n Vậy có 5 học sinh giỏi cả 3 môn.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-xac dinh giao hop cua hai tap hop-14",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e40a85879d39bd",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tập hợp và . Có tất cả bao nhiêu tập hợp X thỏa mãn ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5",
        "content_en": "5",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6",
        "content_en": "6",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "4",
        "content_en": "4",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "8",
        "content_en": "8",
        "is_correct": false
      }
    ],
    "solution_vi": "Vì nên X phải chứa 3 phần tử của . Mặt khác nên chỉ có thể lấy các\n phần tử a, b, c, d, e. Vậy X là một trong các tập hợp sau:\n , , .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-xac dinh giao hop cua hai tap hop-18",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0edcb43adfa7b5",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một lớp học có 25 học sinh chơi bóng đá, 23 học sinh chơi bóng bàn, 14 học sinh chơi cả bóng đá và bóng bàn và 6 học sinh không chơi môn nào. Số học sinh chỉ chơi 1 môn thể thao là?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "48",
        "content_en": "48",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "20",
        "content_en": "20",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "34",
        "content_en": "34",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "28",
        "content_en": "28",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi A là tập hợp các học sinh chơi bóng đá\n B là tập hợp các học sinh chơi bóng bàn\n C là tập hợp các học sinh không chơi môn nào\n Khi đó số học sinh chỉ chơi bóng đá là:",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-xac dinh giao hop cua hai tap hop-22",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1ead855c961c8e",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho là tập hợp các học sinh lớp 10 đang học ở trường em và là tập hợp các học sinh đang học môn Tiếng Anh của trường em. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "là tập hợp các học sinh lớp 10 học môn Tiếng Anh ở trường em.",
        "content_en": "là tập hợp các học sinh lớp 10 học môn Tiếng Anh ở trường em.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "là tập hợp những học sinh lớp 10 nhưng không học Tiếng Anh ở trường em.",
        "content_en": "là tập hợp những học sinh lớp 10 nhưng không học Tiếng Anh ở trường em.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "là tập hợp các học sinh lớp 10 hoặc học sinh học môn Tiếng Anh ở trường em.",
        "content_en": "là tập hợp các học sinh lớp 10 hoặc học sinh học môn Tiếng Anh ở trường em.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "là tập hợp các học sinh học môn Tiếng Anh nhưng không học lớp 10 ở trường em.",
        "content_en": "là tập hợp các học sinh học môn Tiếng Anh nhưng không học lớp 10 ở trường em.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: là tập hợp các học sinh lớp 10 học môn Tiếng Anh ở trường em.\n b) Đúng: là tập hợp những học sinh lớp 10 nhưng không học Tiếng Anh ở trường em.\n c) Đúng: là tập hợp các học sinh lớp 10 hoặc học sinh học môn Tiếng Anh ở trường em.\n d) Đúng: là tập hợp các học sinh học môn Tiếng Anh nhưng không học lớp 10 ở trường\n em.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:Đ, d:Đ",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-2-xac dinh giao hop cua hai tap hop-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-aa64ea636b86a6",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Lớp có tất cả 40 học sinh trong đó có 13 học sinh chỉ thích đá bóng, 18 học sinh chỉ thích chơi cầu lông và số học sinh còn lại thích chơi cả hai môn thể thao nói trên. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Có 9 học sinh thích chơi cả hai môn cầu lông và bóng đá",
        "content_en": "Có 9 học sinh thích chơi cả hai môn cầu lông và bóng đá",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Có 22 học sinh thích bóng đá?",
        "content_en": "Có 22 học sinh thích bóng đá?",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Có 26 học sinh thích cầu lông?",
        "content_en": "Có 26 học sinh thích cầu lông?",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Có 27 học sinh thích chơi cả hai môn cầu lông và bóng đá",
        "content_en": "Có 27 học sinh thích chơi cả hai môn cầu lông và bóng đá",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Số học sinh thích chơi cả hai môn câu lông và bóng đá: (học sinh).\n b) Đúng: Số học sinh thích bóng đá: (học sinh).\n c) Sai: Số học sinh thích câu lông: (học sinh).\n d) Sai: Số học sinh thích chơi cả hai môn câu lông và bóng đá: (học sinh).",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:S",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-2-xac dinh giao hop cua hai tap hop-6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-20d6913dd2793e",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho các tập hợp sau và . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tập hợp A có 3 phần tử",
        "content_en": "Tập hợp A có 3 phần tử",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Tập hợp B có 4 phần tử.",
        "content_en": "Tập hợp B có 4 phần tử.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Tập hợp có 1 phần tử",
        "content_en": "Tập hợp có 1 phần tử",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Tập hợp có 5 phần tử",
        "content_en": "Tập hợp có 5 phần tử",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: vì .\n b) Đúng: .\n c) Đúng:\n d) Sai:",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:Đ, d:S",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-2-xac dinh giao hop cua hai tap hop-7",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-640d1bcd82655b",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hai tập hợp khác rỗng và , . Có bao nhiêu giá trị\n nguyên dương của tham số để .",
    "question_en": "",
    "options": [],
    "solution_vi": "Điều kiện để hai tập và khác tập rỗng là:\n .\n Khi đó . Vậy có giá trị nguyên dương thoả mãn.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-2-xac dinh giao hop cua hai tap hop-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-00793a8f6f193e",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một nhóm có 12 học sinh chuẩn bị cho hội diễn văn nghệ. Trong danh sách đăng kí tham gia tiết\n mục múa và tiết mục hát của nhóm đó, có 5 học sinh tham gia tiết mục múa, 3 học sinh tham gia cả\n hai tiết mục. Hỏi có bao nhiêu học sinh trong nhóm tham gia tiết mục hát? Biết có 4 học sinh của\n nhóm không tham gia tiết mục nào.",
    "question_en": "",
    "options": [],
    "solution_vi": "Vì nhóm có 12 học sinh, trong đó có 4 học sinh không tham gia tiết mục nào nên tổng số học\n sinh tham gia hai tiết mục múa và hát là: (học sinh)\n Lại có: Trong 5 học sinh tham gia tiết mục múa, có 3 học sinh tham gia cả hai tiết mục\n Vậy số học sinh chỉ tham gia tiết mục múa là: (học sinh)\n Do đó số học sinh tham gia tiết mục hát là: (học sinh).\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-2-xac dinh giao hop cua hai tap hop-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-88ef643dfe556d",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Lớp 10A có 40 học sinh trong đó có 10 bạn học sinh giỏi Toán, 15 bạn học sinh giỏi Lý, và 22 bạn không giỏi môn học nào trong hai môn Toán, Lý. Hỏi lớp 10A có bao nhiêu bạn học sinh vừa giỏi Toán vừa giỏi Lý?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "7.",
        "content_en": "7.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "25.",
        "content_en": "25.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "10.",
        "content_en": "10.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "18.",
        "content_en": "18.",
        "is_correct": false
      }
    ],
    "solution_vi": "Số học sinh vừa giỏi Toán, vừa giỏi Lý chính là số phần tử của tập hợp .\n Từ biểu đồ Ven ta có: .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-dung bieu do ven va cong thuc tinh so ph-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-529f3ff230df04",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một lớp có 45 học sinh. Mỗi em đều đăng ký chơi ít nhất một trong hai môn: bóng đá và bóng chuyền. Có 35 em đăng ký môn bóng đá, 15 em đăng ký môn bóng chuyền. Hỏi có bao nhiêu em đăng ký chơi cả 2 môn?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5.",
        "content_en": "5.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "10.",
        "content_en": "10.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "30.",
        "content_en": "30.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "25.",
        "content_en": "25.",
        "is_correct": false
      }
    ],
    "solution_vi": "Đáp án A đúng vì: Gọi A là tập hợp các học sinh đăng ký chơi bóng đá, B là tập hợp các học sinh\n đăng ký chơi bóng chuyền.\n Dựa vào biểu đồ Ven, ta có: số học sinh đăng ký cả 2 môn là:\n .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-dung bieu do ven va cong thuc tinh so ph-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-8bbd4997c0fb9f",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hội khỏe Phù Đổng của trường Trần Phú, lớp có 45 học sinh, trong đó có 25 học sinh thi điền kinh, 20 học sinh thi nhảy xa, 15 học sinh thi nhảy cao, 7 em không tham gia môn nào, 5 em tham gia cả 3 môn. Hỏi số em tham gia chỉ một môn trong ba môn trên là bao nhiêu?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "20.",
        "content_en": "20.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "45.",
        "content_en": "45.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "38.",
        "content_en": "38.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "21.",
        "content_en": "21.",
        "is_correct": true
      }
    ],
    "solution_vi": "Gọi theo thứ tự là số học sinh chỉ thi môn điền kinh, nhảy xa, nhảy cao.\n là số học sinh chỉ thi hai môn điền kinh và nhảy xa\n là số học sinh chỉ thi hai môn nhảy xa và nhảy cao\n là số học sinh chỉ thi hai môn điền kinh và nhảy cao\n Số em thi ít nhất một môn là:\n Dựa vào biểu đồ ven ta có hệ phương trình sau:\n Cộng vế với vế của ta có:\n Từ ta có:\n Vậy có 21 học sinh chỉ thi một trong ba nội dung trên.",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-dung bieu do ven va cong thuc tinh so ph-11",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-bee38ecd423638",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong kì thi học sinh giỏi cấp trường lớp 11B1 có 15 học sinh giỏi Văn, 22 học sinh giỏi Toán. Tìm số học sinh giỏi cả Văn và Toán biết lớp 11B1 có 40 học sinh, và có 14 học sinh không đạt học sinh giỏi.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4.",
        "content_en": "4.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "7.",
        "content_en": "7.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "11.",
        "content_en": "11.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "20.",
        "content_en": "20.",
        "is_correct": false
      }
    ],
    "solution_vi": "Số học sinh học giỏi ít nhất một trong hai môn Toán và Văn là: .\n Số học sinh chỉ giỏi Toán mà không giỏi Văn (Phần Toán sau khi bỏ đi phần giao)\n là: .\n Vậy số học sinh giỏi cả hai môn Toán và Văn (Phần giao nhau) là:\n Cách khác:\n Số học sinh học giỏi ít nhất một trong hai môn Toán và Văn là: .\n Số học sinh giỏi cả hai môn Toán và Văn là: .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-dung bieu do ven va cong thuc tinh so ph-12",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-38ec5e90139115",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Mỗi học sinh của lớp 10A1 đều học giỏi môn Toán hoặc môn Hóa, biết rằng có 30 học sinh giỏi Toán, 35 học sinh giỏi Hóa, và 20 em học giỏi cả hai môn. Hỏi lớp 10A1 có bao nhiêu học sinh?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "40.",
        "content_en": "40.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "45.",
        "content_en": "45.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "50.",
        "content_en": "50.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "55.",
        "content_en": "55.",
        "is_correct": false
      }
    ],
    "solution_vi": "Dựa vào biểu đồ ven ta có:\n Số học sinh chỉ giỏi môn Toán là: .\n Số học sinh chỉ giỏi môn Hóa là: .\n Do đó số học sinh lớp là:\n Cách 2: Sĩ số học sinh lớp là: .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-dung bieu do ven va cong thuc tinh so ph-13",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ab196224fab109",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Lớp có học sinh thi học sinh giỏi. Mỗi học sinh thi ít nhất một môn trong ba môn Toán, Lý và Hóa. Biết có học sinh chỉ thi môn Toán, có học sinh thi môn Lý, có học sinh thi môn Hóa và có thí sinh chỉ thi môn Lý và môn Hóa. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Có học sinh chỉ thi môn Lý mà không thi môn Hóa",
        "content_en": "Có học sinh chỉ thi môn Lý mà không thi môn Hóa",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Có học sinh chỉ thi môn Hóa mà không thi môn Lý",
        "content_en": "Có học sinh chỉ thi môn Hóa mà không thi môn Lý",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số học sinh chỉ thi môn Lý hoặc thi môn Hóa là 8 học sinh",
        "content_en": "Số học sinh chỉ thi môn Lý hoặc thi môn Hóa là 8 học sinh",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Có học sinh đi thi cả ba môn Toán, Lý và Hoá",
        "content_en": "Có học sinh đi thi cả ba môn Toán, Lý và Hoá",
        "is_correct": true
      }
    ],
    "solution_vi": "Dùng phương pháp sơ đồ Ven:\n Số học sinh chỉ thi môn Lý hoặc thi môn Hóa là: học sinh.\n Số học sinh chỉ thi môn Lý mà không thi môn Hóa là: học sinh.\n Số học sinh chỉ thi môn Hóa mà không thi môn Lý là: học sinh.\n Số học sinh thi môn Lý và môn Hóa là: học sinh.\n Số học sinh thi cả ba môn là: học sinh.\n a) Sai: Có học sinh chỉ thi môn Lý mà không thi môn Hóa\n b) Sai: Có học sinh chỉ thi môn Hóa mà không thi môn Lý\n c) Sai: Số học sinh chỉ thi môn Lý hoặc thi môn Hóa là học sinh\n d) Đúng: Có học sinh đi thi cả ba môn Toán, Lý và Hoá",
    "solution_en": "",
    "correct_answer": "a:S, b:S, c:S, d:Đ",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-2-dung bieu do ven va cong thuc tinh -2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b7bff8ca7268a5",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Các em học sinh lớp làm bài thi khảo sát học sinh giỏi môn Toán. Đề thi có câu. Sau khi chấm bài giáo viên tổng kết được như sau: Có 6 học sinh làm được câu , có 5 học sinh làm được câu , có 4 học sinh làm được câu . Có học sinh làm được câu và câu , có học sinh làm được câu và câu , có 1 học sinh làm được câu 2 và câu 3 và chỉ có học sinh làm được cả câu. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Có duy nhất một học sinh chỉ làm được câu 1",
        "content_en": "Có duy nhất một học sinh chỉ làm được câu 1",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Không có học sinh nào chỉ làm được câu 2 và câu 3",
        "content_en": "Không có học sinh nào chỉ làm được câu 2 và câu 3",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Có học sinh chỉ làm được câu 3",
        "content_en": "Có học sinh chỉ làm được câu 3",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Có tất cả học sinh chỉ làm được đúng một câu",
        "content_en": "Có tất cả học sinh chỉ làm được đúng một câu",
        "is_correct": true
      }
    ],
    "solution_vi": "Số học sinh chỉ làm được câu 1 và câu 2 là: học sinh.\n Số học sinh chỉ làm được câu 1 và câu 3 là: học sinh.\n Số học sinh chỉ làm được câu 2 và câu 3 là: học sinh.\n Số học sinh chỉ làm được câu 1 là: học sinh.\n Số học sinh chỉ làm được câu 2 là: học sinh.\n Số học sinh chỉ làm được câu 3 là: học sinh.\n Vậy số học sinh chỉ làm được 1 câu là: học sinh.\n a) Sai: Có học sinh chỉ làm được câu 1\n b) Đúng: Không có học sinh nào chỉ làm được câu 2 và câu 3\n c) Đúng: Có học sinh chỉ làm được câu 3\n d) Đúng: Có tất cả học sinh chỉ làm được đúng một câu.",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:Đ, d:Đ",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-2-dung bieu do ven va cong thuc tinh -3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6fd7c3ad908eb8",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Bạn A.Súa thống kê số ngày có mưa, có sương mù ở bản mình trong tháng 3 vào một thời điểm\n nhất định và được kết quả như sau: 14 ngày có mưa, 15 ngày có sương mù, trong đó 10 ngày có cả\n mưa và sương mù. Hỏi trong tháng 3 đó có bao nhiêu ngày không có mưa và không có sương mù?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi lần lượt là tập hợp các ngày có mưa, có sương mù.\n Khi đó, là tập hợp các ngày có cả mưa và sương mù, là tập hợp các ngày hoặc có\n mưa hoặc có sương mù.\n Ta có: .\n Số ngày hoặc có mưa hoặc có sương mù là:\n (ngày).\n Tháng 3 có 31 ngày nên số ngày không có mưa và không có sương mù trong tháng 3 đó là:\n (ngày).",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-2-dung bieu do ven va cong thuc tinh -2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-67dfca4ca1cfa6",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Lớp 10A có 45 học sinh trong đó có 25 em học giỏi môn Toán, 23 em học giỏi môn Lý, 20 em học\n giỏi môn Hóa, 11 em học giỏi cả môn Toán và môn Lý, 8 em học giỏi cả môn Lý và môn Hóa, 9\n em học giỏi cả môn Toán và môn Hóa. Hỏi lớp 10 A có bao nhiêu bạn học giỏi cả ba môn Toán,\n Lý, Hóa? (biết rằng mỗi học sinh trong lớp học giỏi ít nhất một trong ba môn Toán, Lý, Hóa).",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi lần lượt là tập hợp các học sinh giỏi môn Toán, Lý, Hóa.\n Ta có:\n .\n Vậy có 5 học sinh giỏi cả 3 môn.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-2-dung bieu do ven va cong thuc tinh -3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c5fe97a24dcd04",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một lớp học có 25 học sinh chơi bóng đá, 23 học sinh chơi bóng bàn, 14 học sinh chơi cả bóng đá\n và bóng bàn, 6 học sinh không chơi môn nào. Tìm số học sinh chỉ chơi một môn thể thao?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi là tập hợp các học sinh chơi bóng đá, là tập hợp các học sinh chơi bóng bàn,\n C là tập hợp các học sinh không chơi môn thể thao nào.\n Ta có: : là số học sinh chơi bóng đá; : là số học sinh chơi bóng bàn; : là số học sinh\n không chơi môn thể thao nào.\n Khi đó số học sinh chỉ chơi một môn thể thao là:",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-2-dung bieu do ven va cong thuc tinh -4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-62e62f8b98bc98",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Lớp 10C1 có 45 học sinh chuẩn bị cho hội diễn văn nghệ chào mừng ngày nhà giáo Việt Nam\n 20/11. Trong danh sách đăng kí tham gia tiết mục nhảy Flashmob và tiết mục hát, có 35 học sinh\n tham gia tiết mục nhảy Flashmob, 10 học sinh tham gia cả hai tiết mục. Hỏi có bao nhiêu học sinh\n trong lớp tham gia tiết mục hát? Biết rằng lớp có bạn Kiệt, Hạ, Toàn, Thiện bị khuyết tật\n hòa nhập nên không tham gia tiết mục nào.",
    "question_en": "",
    "options": [],
    "solution_vi": "Kí hiệu là tập hợp học sinh tham gia tiết mục nhảy Flashmob, là tập hợp học sinh tham\n gia tiết mục hát, là tập hợp học sinh trong lớp. Ta có thể biểu diễn ba tập hợp đó bằng biểu\n đồ Ven như hình bên:\n Khi đó là tập hợp học sinh tham gia cả hai tiêt mục. Số phần tử của tập hợp là 35, số\n phần tử của tập hợp là 10, số phần tử của tập hợp là 45.\n Số học sinh tham gia ít nhất một trong hai tiết mục là (học sinh).\n Số học sinh tham gia tiết mục hát mà không tham gia tiết mục nhảy Flashmob là\n (học sinh).\n Số học sinh tham gia tiết mục hát là (học sinh).",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-2-dung bieu do ven va cong thuc tinh -5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-dc9e6bb39ba90e",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Trong đột khảo sát nghề, giáo viên chủ nhiệm lớp 10D đưa ra ba nhóm ngành cho học sinh lựa\n chọn, đó là: Giáo dục, Y tế, Công nghệ thông tin. Học sinh có thể chọn từ một đến ba nhóm ngành\n nêu trên hoặc không chọn nhóm ngành nào trong ba nhóm ngành trên. Giáo viên chủ nhiệm thống\n kê theo từng nhóm ngành và được kết quả: có 6 học sinh chọn nhóm ngành Giáo dục, 9 học sinh\n chọn nhóm ngành tế, 10 học sinh chọn nhóm ngành Công nghệ thông tin, 22 học sinh không\n chọn nhóm ngành nào trong ba nhóm trên. Nếu thống kê số lượng học sinh chọn theo từng hai\n nhóm ngành được kết quả: có 3 học sinh chọn hai nhóm ngành Giáo dục và tế, 2 học sinh chọn\n hai nhóm ngành tế và Công nghệ thông tin, 3 học sinh chọn hai nhóm ngành Giáo dục và Công\n nghệ thông tin. Hỏi có bao nhiêu học sinh chọn cả ba nhóm ngành nêu trên biết ló́p 10D có 40 học\n sinh?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi lần lượt là tập hợp học sinh chọn nhóm ngành Giáo dục, Y tế, Công nghệ thông tin.\n Khi đó là tập hợp các học sinh chọn ít nhất một trong ba nhóm ngành trên.\n Do lớp 10D có 40 học sinh và 22 học sinh không chọn nhóm ngành trong ba nhóm ngành trên nên\n số học sinh chọn ít nhất một trong ba nhóm ngành trên là\n Ta có: ,\n .\n Áp dụng công thức tính số phần tử của tập hợp:\n Ta có số học sinh chọn cả ba nhóm ngành nêu trên là:\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-2-dung bieu do ven va cong thuc tinh -6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d43dec3d9a88da",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hai tập hợp , và khác rỗng. Có bao nhiêu giá trị nguyên của m để ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "399.",
        "content_en": "399.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "398.",
        "content_en": "398.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2.",
        "content_en": "2.",
        "is_correct": true
      }
    ],
    "solution_vi": "Vì là hai tập hợp khác rỗng, nên ta có điều kiện:\n .\n Để thì ta có điều kiện: .\n Kết hợp điều kiện Vậy có 2 giá trị nguyên của m thỏa mãn.",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Tập hợp và các phép toán trên tập hợp",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-2-xac dinh hieu va phan bu cua hai tap hop-22",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c5741869a9673c",
    "topic_id": "top-10-1-1",
    "type_id": "type-kntt-10-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho mệnh đề “Có một học sinh trong lớp C4 không chấp hành luật giao thông”. Mệnh đề phủ định của mệnh đề này là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Không có học sinh nào trong lớp C4 chấp hành luật giao thông.",
        "content_en": "Không có học sinh nào trong lớp C4 chấp hành luật giao thông.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Mọi học sinh trong lớp C4 đều chấp hành luật giao thông.",
        "content_en": "Mọi học sinh trong lớp C4 đều chấp hành luật giao thông.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "Có một học sinh trong lớp C4 chấp hành luật giao thông.",
        "content_en": "Có một học sinh trong lớp C4 chấp hành luật giao thông.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Mọi học sinh trong lớp C4 không chấp hành luật giao thông.",
        "content_en": "Mọi học sinh trong lớp C4 không chấp hành luật giao thông.",
        "is_correct": false
      }
    ],
    "solution_vi": "Mệnh đề phủ định là “ Mọi học sinh trong lớp C4 đều chấp hành luật giao thông”.\n2",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Mệnh đề",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-1-phu dinh cua mot menh de-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7389a3e3c5cd18",
    "topic_id": "top-10-1-1",
    "type_id": "type-kntt-10-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho mệnh đề: “ Có một học sinh trong lớp 10A không thích học môn Toán”. Mệnh đề phủ định của mệnh đề này là:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "“Mọi học sinh trong lớp 10A đều thích học môn Toán”.",
        "content_en": "“Mọi học sinh trong lớp 10A đều thích học môn Toán”.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "“Mọi học sinh trong lớp 10A đều không thích học môn Toán”.",
        "content_en": "“Mọi học sinh trong lớp 10A đều không thích học môn Toán”.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "“Mọi học sinh trong lớp 10A đều thích học môn Văn”.",
        "content_en": "“Mọi học sinh trong lớp 10A đều thích học môn Văn”.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "“Có một học sinh trong lớp 10A thích học môn Toán”.",
        "content_en": "“Có một học sinh trong lớp 10A thích học môn Toán”.",
        "is_correct": false
      }
    ],
    "solution_vi": "Mệnh đề phủ định là “Mọi học sinh trong lớp 10A đều thích học môn Toán”.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Mệnh đề",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-1-phu dinh cua mot menh de-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0e0ef403185b31",
    "topic_id": "top-10-1-1",
    "type_id": "type-kntt-10-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Phủ định của mệnh đề: “ không chia hết cho 3” là:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "“ chia hết cho 3”.",
        "content_en": "“ chia hết cho 3”.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "“ không chia hết cho 3”.",
        "content_en": "“ không chia hết cho 3”.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "“ chia hết cho 3”.",
        "content_en": "“ chia hết cho 3”.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "“ không chia hết cho 3”.",
        "content_en": "“ không chia hết cho 3”.",
        "is_correct": false
      }
    ],
    "solution_vi": "Phủ định của là\n Phủ định của “không chia hết” là “chia hết”",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Mệnh đề",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-10-1-menh de voi ki hieu moi ton tai-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5d899870b5d52a",
    "topic_id": "top-10-1-1",
    "type_id": "type-kntt-10-01-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xét tính đúng, sai của mỗi mệnh đề sau.",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": ".",
        "content_en": ".",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": ".",
        "content_en": ".",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "chia hết cho 2.",
        "content_en": "chia hết cho 2.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "không chia hết cho 3.",
        "content_en": "không chia hết cho 3.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Mệnh đề sai. Ta chọn thì là sai.\n b) Mệnh đề đúng. Ta chọn thì nên (đúng).\n6 \n c) Mệnh đề đúng. Thật vậy: , trong đó là tích\n của hai số nguyên liên tiếp nên chia hết cho 2, vì vậy cũng chia hết cho\n 2.\n d) Mệnh đề sai. Ta cho thì chia hết cho 3.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Mệnh đề",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-1-menh de voi ki hieu moi ton tai-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-bba09f35344e91",
    "topic_id": "top-10-1-1",
    "type_id": "type-kntt-10-01-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xét tính đúng (sai) của các mệnh đề sau",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": ".",
        "content_en": ".",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "chia hết cho 4.",
        "content_en": "chia hết cho 4.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": ".",
        "content_en": ".",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": ".",
        "content_en": ".",
        "is_correct": false
      }
    ],
    "solution_vi": "a) \" \" là mệnh đề sai\n b) \" chia hết cho là mệnh đề đúng\n c) \"là mệnh đề sai\n Vì với \" là mệnh đề sai.\n d) \" là mệnh đề đúng\n Vì \"là mệnh đề đúng.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Mệnh đề",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-10-1-menh de voi ki hieu moi ton tai-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a93d1439b178c2",
    "topic_id": "top-10-1-1",
    "type_id": "type-kntt-10-01-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho các mệnh đề:\n A: “Nếu đều có cạnh bằng a, đường cao là h thì ”;\n B: “Tứ giác có bốn cạnh bằng nhau là hình vuông”;\n C:”15 là số nguyên tố”;\n D:” là một số nguyên”.\n Hãy cho biết trong các mệnh đề sau có bao nhiêu mệnh đề sai:",
    "question_en": "",
    "options": [],
    "solution_vi": "là mệnh đề sai do A đúng, B sai.\n là mệnh đề đúng do B,C đều sai.\n là mệnh đề sai do A đúng, D sai.\n Vậy có hai mệnh đề sai",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Mệnh đề",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-1-menh de keo theo menh de dao menh d-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f174b47d3ddd9e",
    "topic_id": "top-10-1-1",
    "type_id": "type-kntt-10-01-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Ba anh em An, Bình, Vinh ngồi làm bài xung quanh một cái bàn được trải khăn mới. Khi phát hiện\n có vết mực, bà hỏi thì các cháu lần lượt trả lời:\n An: “Em Vinh không làm đổ mực, đấy là do em Bình.”\n Bình: “Em Vinh làm đổ mực, anh An không làm đổ mực”.\n Vinh: “Theo cháu, Bình không làm đổ mực, còn cháu hôm nay không chuẩn bị bài”.\n Biết rằng trong 3 em thì có 2 em nói đúng, 1 em nói sai. Hỏi ai làm đổ mực?",
    "question_en": "",
    "options": [],
    "solution_vi": "Nếu An nói đúng thì Bình là người làm đổ, suy ra Bình nói sai, theo đề bài ta có Vinh nói đúng.\n Nếu Vinh nói đúng thì Bình không làm đổ mực. Suy ra mâu thuẫn.\n Nếu Bình nói đúng, Vinh làm đổ mực thì An nói sai. Dẫn đến Vinh nói đúng. Suy ra thỏa mãn.\n Vậy Vinh làm đổ mực.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Mệnh đề",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-10-1-menh de keo theo menh de dao menh d-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a1186714e8dee3",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) có u1 = -3 và q = -2 . Tính tổng 10 số hạng đầu tiên của cấp số nhân.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S10 = -511 .",
        "content_en": "S10 = -511 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S10 = 1023 .",
        "content_en": "S10 = 1023 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S10 = 1025 .",
        "content_en": "S10 = 1025 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S10 = -1025 .",
        "content_en": "S10 = -1025 .",
        "is_correct": false
      }
    ],
    "solution_vi": "1 - ( -2 )\n 10\n 1 - qn\n Ta có: S10 = u1. = -3. = 1023 .\n 1- q 1 - ( -2 )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e6936003959037",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho một cấp số nhân có các số hạng đều không âm thỏa mãn u2 = 6 , u4 = 24 . Tính tổng của 12 số hạng đầu tiên của cấp số nhân đó.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3.212 - 3 .",
        "content_en": "3.212 - 3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "212 - 1 .",
        "content_en": "212 - 1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3.212 - 1 .",
        "content_en": "3.212 - 1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3.212 .",
        "content_en": "3.212 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi công bội của CSN bằng q . Suy ra u4 = u2 .q 2 \\Rightarrow q = \\pm2 . Do CSN có các số hạng không âm\n nên q = 2 .\n 1 - q12 1 - 212\n Ta có S12 = u1. = 3. = 3 ( 212 - 1) .\n 1- q 1- 2\n n\n 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a7bf37b896cd76",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) có u3 = 12 , u5 = 48 , có công bội âm. Tổng 7 số hạng đầu của cấn số nhân đã cho bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "129 .",
        "content_en": "129 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-129 .",
        "content_en": "-129 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "128 .",
        "content_en": "128 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-128 .",
        "content_en": "-128 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: u42 = u3 .u5 = 576 . Vì u3 > 0, u5 > 0 và công bội âm nên: u4 = -24 \\Rightarrow q = -2 .\n u3 12\n Lại có: u3 = u1q 2 \\Rightarrow u1 = = = 3.\n q2 4\n 1 - ( -2 )\n 7\n 1 - q7\n Áp dụng công thức ta có: S7 = u1 = 3. = 129 .\n 1- q 1 - ( -2 )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-291a8da85c06f8",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) có u1 = 2, công bội dương và biểu thức u4 + đạt giá trị nhỏ nhất. u7 Tính S = u11 + u12 + ... + u20 .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S = 2046.",
        "content_en": "S = 2046.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S = 2097150.",
        "content_en": "S = 2097150.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S = 2095104.",
        "content_en": "S = 2095104.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S = 1047552.",
        "content_en": "S = 1047552.",
        "is_correct": false
      }
    ],
    "solution_vi": "1024 512\n Gọi q là công bội của cấp số nhân, q > 0. Ta có u4 + = 2q 3 + 6 .\n u7 q\n 512 512 512\n Áp dụng bất đẳng thức Cô-si, ta có: 2q3 + 6\n = q3 + q3 + 6 \\ge 3 3 q3 .q3 . 6 = 24.\n q q q\n 1024 512\n Suy ra u4 + đạt giá trị nhỏ nhất bằng 24 khi q 3 = 6 \\Leftrightarrow q = 2.\n u7 q\n u1 (1 - q10 ) u1 (1 - q 20 )\n Ta có S10 = = 2 - 2; S10 =\n 11\n = 221 - 2.\n 1- q 1- q\n Do đó S = S 20 - S10 = 2095104.\n u4 + u6 = -540",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a1676d40736431",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân có các số hạng lần lượt là ; ; 1; ; 2048. Tính tổng S của tất cả các số 4 2 hạng của cấp số nhân đã cho.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S = 2047,75.",
        "content_en": "S = 2047,75.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S = 2049,75.",
        "content_en": "S = 2049,75.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S = 4095,75.",
        "content_en": "S = 4095,75.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S = 4096,75.",
        "content_en": "S = 4096,75.",
        "is_correct": false
      }
    ],
    "solution_vi": "Cấp số nhân đã cho có\n  1\n u1 = 1\n  → 2048 = 211 = u1q n -1 = .2n -1 = 2n - 2 \\Leftrightarrow n = 13.\n 4 ⎯⎯\n q = 2 2\n 1 - q13 1 1 - 213\n Vậy cấp số nhân đã cho có tất cả 13 số hạng. Vậy S13 = u1. = . = 2047,75\n 1- q 4 1- 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-13",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f01823ce6b58fa",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Viết thêm bốn số vào giữa hai số 160 và 5 để được một cấp số nhân. Tổng các số hạng của cấp số nhân đó là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "215 .",
        "content_en": "215 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "315 .",
        "content_en": "315 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "415 .",
        "content_en": "415 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "515 .",
        "content_en": "515 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u = 160 u 1\n Từ giả thiết ta có  1 \\Rightarrowq= 5 6 = .\n u6 = 5 u1 2\n   1 6 \n 160 1 -   \n u1 (1 - q 6 )  2 \n   = 315 .\n Suy ra tổng các số hạng của cấp số nhân đó là: S = =\n 1- q 1\n 2\n u1 + u2 + u3 = 13",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-17",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a58446013ab0b0",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một cấp số nhân ( un ) có n số hạng, số hạng đầu u1 = 7 , công bội q = 2 . Số hạng thứ n bằng 1792 . Tính tổng n số hạng đầu tiên của cấp số nhân ( un ) ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5377 .",
        "content_en": "5377 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5737 .",
        "content_en": "5737 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3577 .",
        "content_en": "3577 .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "3775 .",
        "content_en": "3775 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un = u1.q n -1 \\Rightarrow 7.2n -1 = 1792 \\Leftrightarrow n = 9 \\Rightarrow S8 = 3577\n ( -1)\n 2\n 1 1 1",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-22",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-906b0e927a938f",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Người ta thiết kế một cái tháp 11 tầng. Diện tích bề mặt trên của mỗi tầng bằng nửa diện tích của mặt trên của tầng ngay bên dưới và diện tích mặt trên của tầng 1 bằng nửa diện tích của đế tháp. Tính diện tích mặt trên cùng.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8 m 2 .",
        "content_en": "8 m 2 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6 m 2 .",
        "content_en": "6 m 2 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "10 m 2 .",
        "content_en": "10 m 2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "12 m 2 .",
        "content_en": "12 m 2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi a0 , a1 ,a^2 ,...,a11 lần lượt là diện tích mặt trên của đế tháp, tầng 1, tầng 2,., tầng 11.\n n\n 1 1\n Khi đó ta có: a0 = 12288; an = an -1 = a 0   , n = 1,2,...,11 .\n 2 2\n 11 11\n 1 1\n Diện tích mặt trên tầng trên cùng là: a11 = a0   = 12288   = 6 ( m 2 )\n 2 2",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-29",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0291d8cd16443f",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Dân số tỉnh Bình Phước theo điều tra vào ngày 1 / 1 / 2011 là 905300 người. Nếu duy trì tốc độ tăng trưởng dân số không đổi là 10% một năm thì đến 1 / 1 / 2020 dân số của tỉnh Bình Phước là bao nhiêu?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "22582927 .",
        "content_en": "22582927 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "02348115 .",
        "content_en": "02348115 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2134650 .",
        "content_en": "2134650 .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "11940591 .",
        "content_en": "11940591 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Sau 9 năm thì số dân của tỉnh Bình Phước là: 905300.1,19  2134650 người.",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-30",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4737392c9682a5",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Bạn A thả quả bóng cao su từ độ cao 10 m theo phương thẳng đứng. Mỗi khi chạm đất nó lại nảy 3 lên theo phương thẳng đứng có độ cao bằng độ cao trước đó. Tính tổng quãng đường bóng đi 4 được đến khi bóng dừng hẳn.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "40 m.",
        "content_en": "40 m.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "70 m.",
        "content_en": "70 m.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "50 m.",
        "content_en": "50 m.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "80 m.",
        "content_en": "80 m.",
        "is_correct": false
      }
    ],
    "solution_vi": "12 \n 3\n Các quãng đường khi bóng đi xuống tạo thành một cấp số nhân lùi vô hạn có u1 = 10 và q = .\n 4\n u1 10\n Tổng các quãng đường khi bóng đi xuống là S = = = 40 .\n 1- q 1- 3\n 4\n Tổng quãng đường bóng đi được đến khi bóng dừng hẳn 2 S - 10 = 70 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-31",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6cff2428107c48",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một loại vi khuẩn sau mỗi phút số lượng tăng gấp đôi biết rằng sau 5 phút người ta đếm được có 64000 con hỏi sau bao nhiêu phút thì có được 2048000 con.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "10 .",
        "content_en": "10 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "11 .",
        "content_en": "11 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "26 .",
        "content_en": "26 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "50 .",
        "content_en": "50 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Số lượng vi khuẩn tăng lên là cấp số nhân ( un ) với công bội q = 2 .\n Ta có: u6 = 64000 \\Rightarrow u1.q 5 = 64000 \\Rightarrow u1 = 2000 .\n Sau n phút thì số lượng vi khuẩn là un +1 .\n un +1 = 2048000 \\Rightarrow u1.q n = 2048000 \\Rightarrow 2000.2n = 2048000 \\Rightarrow n = 10 .\n Vậy sau 10 phút thì có được 2048000 con.",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-32",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0d009e83d5915c",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( an ) có a1 = 7, a6 = 224 và Sk = 3577. Tính giá trị của biểu thức T = ( k + 1) ak .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "T = 17920.",
        "content_en": "T = 17920.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "T = 8064.",
        "content_en": "T = 8064.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "T = 39424.",
        "content_en": "T = 39424.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "T = 86016.",
        "content_en": "T = 86016.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có a6 = 224 \\Leftrightarrow a1q 5 = 224 \\Rightarrow q = 2 .\n a1 (1 - q k )\n Do Sk = = 7 ( 2k - 1) nên Sk = 3577 \\Leftrightarrow 7 ( 2k - 1) = 3577 \\Leftrightarrow 2k = 29 \\Leftrightarrow k = 9.\n 1- q\n Suy ra: T = 10a9 = 10a1q 8 = 17920.",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-tinh tong cac so hang trong mot cap so c-35",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-181ab4469c9c06",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) , biết u1 + u5 = 51; u2 + u6 = 102 . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng u1 = 3",
        "content_en": "Số hạng u1 = 3",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạng u4 = 48",
        "content_en": "Số hạng u4 = 48",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số 12288 là số hạng thứ 12 của cấp số nhân ( un )",
        "content_en": "Số 12288 là số hạng thứ 12 của cấp số nhân ( un )",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng 8 số hạng đầu của cấp số nhân là: 765 .",
        "content_en": "Tổng 8 số hạng đầu của cấp số nhân là: 765 .",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Gọi q là công bội của cấp số nhân đã cho.\n u1 (1 + q ) = 51\n    4\n (1)\n u1 + u5 = 51 u1 + u1q = 51\n 4\n Ta có:  \\Leftrightarrow \\Leftrightarrow\n u2 + u6 = 102 u1q + u1q = 102 u1q (1 + q ) = 102 ( 2)\n 5 4\n Nhận xét: Nếu u1 = 0 hay q = 0 thì (1) và ( 2 ) đều không thoả mãn vì vậy ta có u1q \\ne 0 .\n Chia theo vế ( 2 ) cho (1) ta được: q = 2 .\n 51\n Thay q = 2 vào (1) suy ra u1 = = 3.\n 1 + 24\n Công thức số hạng tổng quát của cấp số nhân: un = 3 2n -1 .\n14 \n b) Sai: u4 = 3.23 = 24\n c) Sai: Xét un = 12288 \\Leftrightarrow 3.2n -1 = 12288 \\Leftrightarrow 2 n -1 = 212 \\Leftrightarrow n = 13 .\n Vậy 12288 là số hạng thứ 13 của cấp số nhân đã cho.\n u1 (1 - q8 ) 3.(1 - 28 )\n d) Đúng: Tổng 8 số hạng đầu của cấp số nhân là: S8 = = = 765 .\n 1- q 1- 2\n  2\n u4 =",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:S, d:Đ",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-7-tinh tong cac so hang trong mot cap-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2d013215eb8208",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) biết rằng u1 + u2 + u3 = 168 và u4 + u5 + u6 = 21 . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng u1 = 90",
        "content_en": "Số hạng u1 = 90",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Công bội của cấp số nhân bằng 2",
        "content_en": "Công bội của cấp số nhân bằng 2",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số 24 là số hạng thứ 3 của cấp số nhân 3069",
        "content_en": "Số 24 là số hạng thứ 3 của cấp số nhân 3069",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Tổng của 10 số hạng đầu cấp số nhân đã cho bằng 16",
        "content_en": "Tổng của 10 số hạng đầu cấp số nhân đã cho bằng 16",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Số hạng u1 = 96\n 1\n b) Sai: Công bội của cấp số nhân bằng q =\n 2\n 3 -1\n 1\n c) Đúng: Ta có 24 = 96. \n 2\n  1 10 \n u1 (1 - q ) 96 1 - ( )\n 2  3069\n 10\n d) Đúng: Ta có S10 = =  =\n 1- q 1-\n 1 16\n 2\n16 \n u - u2 = 54",
    "solution_en": "",
    "correct_answer": "a:S, b:S, c:Đ, d:Đ",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-7-tinh tong cac so hang trong mot cap-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-00c9962eaf649c",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) là một cấp số nhân có u1 = 3 , u3 = 12 và công bội của cấp số nhân đó là số âm. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Công bội của cấp số cộng đó là q = -2 .",
        "content_en": "Công bội của cấp số cộng đó là q = -2 .",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạng thứ 25 của cấp số nhân đó bằng -3.2 24 .",
        "content_en": "Số hạng thứ 25 của cấp số nhân đó bằng -3.2 24 .",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Tổng 101 số hạng đầu của cấp số nhân đó bằng 1 - 2101 .",
        "content_en": "Tổng 101 số hạng đầu của cấp số nhân đó bằng 1 - 2101 .",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "u55 = u54 .u56",
        "content_en": "u55 = u54 .u56",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Vì dãy số ( un ) là một cấp số nhân có u1 = 3 , u3 = 12 và công bội q < 0\n Suy ra u3 = u1.q 2 \\Rightarrow 3.q 2 = 12 \\Rightarrow q = -2\n b) Sai: u25 = u1.q 24 = 3.( -2 ) = 3.224\n 24\n u1 (1 - q101 ) 3. 1 - ( -2 ) \n 101\n c) Sai: Tổng số hạng đầu của cấp số nhân đó là S101 = =   = 1 + 2101\n 1- q 1 - ( -2 )\n ( u55 ) = u55 = u55 ( u55 = u1.q54 > 0 )\n u55\n u54 .u56 = .u55 .q =\n 2\n d) Sai:\n q",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:S, d:S",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-7-tinh tong cac so hang trong mot cap-6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ce94cfd8b9dfb5",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tương truyền rằng nhà vua Ấn Độ cho phép người phát minh ra bàn cờ vua được lựa chọn phần thưởng tùy theo sở thích. Người đó xin nhà vua: “Bàn cờ có 64 ô, với ô thứ nhất thần xin nhận 1 hạt thóc, ô thứ hai thì gấp đôi ô đầu, ô thứ ba thì lại gấp đôi ô thứ hai, … cứ như vậy ô sau nhận số hạt thóc gấp đôi phần thưởng dành cho ô liền trước và thần xin nhận tổng số các hạt thóc ở 64 ô”. Biết rằng khối lượng của 100 hạt thóc là 20 gam. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạt thóc ở 64 ô là một cấp số nhân có u 1 = 1; q = 2 .",
        "content_en": "Số hạt thóc ở 64 ô là một cấp số nhân có u 1 = 1; q = 2 .",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạt thóc ở ô thứ tám là 2 8 .",
        "content_en": "Số hạt thóc ở ô thứ tám là 2 8 .",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Tổng khối lượng thóc của 64 ô trên bàn cờ là 364 tỉ tấn.",
        "content_en": "Tổng khối lượng thóc của 64 ô trên bàn cờ là 364 tỉ tấn.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Giả sử người đó muốn chở số thóc ở trên 32 ô đầu tiên về bằng tàu thủy, biết rằng mỗi chuyến tàu chở tối đa 10 tấn hàng hóa. Khi đó, người đó cần tối thiểu 85 chuyến tàu để chở hết số thóc đó.",
        "content_en": "Giả sử người đó muốn chở số thóc ở trên 32 ô đầu tiên về bằng tàu thủy, biết rằng mỗi chuyến tàu chở tối đa 10 tấn hàng hóa. Khi đó, người đó cần tối thiểu 85 chuyến tàu để chở hết số thóc đó.",
        "is_correct": false
      }
    ],
    "solution_vi": "Số hạt thọc ở 64 ô là một cấp số nhân có u 1 = 1; q = 2 , khi đó số hạt thóc ở ô thứ 8 là\n u 8 = u1q 7 = 27 .\n Tổng số hạt thóc của 64 ô là: S64 = 1 + 2 + 22 + ... + 263 = 264 - 1 hạt thóc, do đó tổng khối lượng\n 20\n thóc trên 64 ô trên bàn cờ là: (264 - 1).  3.69x108 ( g ) = 369 (tỉ tấn).\n 100\n Tương tự, ta có khối lượng thóc của 32 ô đầu tiên là ( 232 - 1) .\n 20\n = 858993459  859 (tấn)\n 100\n a) Đúng: Số hạt thóc ở 64 ô là một cấp số nhân có u 1 = 1; q = 2 .\n b) Sai: Số hạt thóc ở ô thứ tám là 2 7 .\n c) Sai: Tổng khối lượng thóc của 64 ô trên bàn cờ là 369 tỉ tấn.\n d) Sai:",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:S, d:S",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-7-tinh tong cac so hang trong mot cap-9",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c62cda8de9ef46",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Anh Bình là nhân viên của một công ty A. Từ ngày 1/2/2024 anh Bình được nâng lương lên bậc 4, mức lương anh hiện hưởng là 11.718.750 đồng mỗi tháng (chưa trừ thuế và bảo hiểm). Theo quy định của công ty, nếu không bị kỉ luật, không có khen thưởng đặc biệt thì cứ sau 3 năm anh Bình sẽ được nâng một bậc lương, tăng thêm 25% so với bậc lương trước, tối đa là bậc 7. Khi hết bậc 7 sẽ chuyển sang vượt khung. Lương vượt khung năm sau cao hơn năm trước 1% và vẫn 1 sẽ được tính sau khi hết đúng 1 năm tập sự. Anh Bình là người rất nghiêm túc, không vi phạm kỉ luật. Anh dự định sẽ làm việc 30 năm ở công ty này rồi nghỉ hưu. Xét tính đúng sai của các khẳng định sau? (làm tròn đến đồng)",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Lương bậc 5 của anh Bình sẽ là 14.500.000 đồng.",
        "content_en": "Lương bậc 5 của anh Bình sẽ là 14.500.000 đồng.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Lương bậc 1 của anh Bình là 6.000.000 đồng.",
        "content_en": "Lương bậc 1 của anh Bình là 6.000.000 đồng.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Lương bậc 7 anh Bình là 23.250.000.",
        "content_en": "Lương bậc 7 anh Bình là 23.250.000.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng tiền lương anh Bình nhận được kể từ khi hết tập sự đến khi nghỉ hưu là = 5.554.357.709",
        "content_en": "Tổng tiền lương anh Bình nhận được kể từ khi hết tập sự đến khi nghỉ hưu là = 5.554.357.709",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Gọi u n là lương bậc n của anh Bình hàng tháng.\n Ta có un +1 = un + 25%un = un .1, 25 (n \\le 7)\n u n là cấp số nhân có công bội q = 1, 25 .\n Ta có u4 = 11.718.750 nên u5 = u4  1, 25 = 14.648.437,5 đồng\n u4\n b) Đúng: u4 = u1  q3 \\Leftrightarrow u1 = = 6.000.000\n q3\n c) Sai: u7 = u1  q 6 = 6.000.000  1, 256 = 22.888.184 đồng\n d) Đúng: Khi vượt khung, lương mỗi khung %, là cấp số nhân vn , (1 \\le n \\le 8 ) có số hạng đầu là\n v1 = u7 + 1%u7 = 1,01u7 , công bội là q = 1,01 .\n Anh Bình làm việc 30 năm liên tục, trong đó 1 năm tập sự, 21 năm lương theo bậc, 8 năm vượt\n khung. Mỗi bậc lương anh Bình nhận 36 tháng, lương vượt khung mỗi khung % anh nhận 12\n tháng. Tổng lương anh Bình nhận được kể từ khi hết tập sự đến khi nghỉ hưu là\n q7 - 1 q8 - 1\n S = 36u1. + 12v1 = 5.554.357.709 đồng.\n q -1 q - 1",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:S, d:Đ",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-7-tinh tong cac so hang trong mot cap-10",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a83148eb230d2d",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho năm số a , b , c , d , e tạo thành một cấp số nhân theo thứ tự đó và các số đều khác 0 , biết\n 1 1 1 1 1\n + + + + = 10 và tổng của chúng bằng 40 . Tính giá trị S với S = abcde .\n a b c d e",
    "question_en": "",
    "options": [],
    "solution_vi": "1 1 1 1 1\n Gọi q ( q \\ne 0 ) là công bội của cấp số nhân a , b , c , d , e . Khi đó , , , , là cấp số\n a b c d e\n 1\n nhân có công bội .\n q\n Theo đề bài ta có:\n20 \n  1 - q5\n a. = 40\n 1 - q  1 - q5\n a + b + c + d + e = 40   a. = 40\n   5\n  1 - q\n 1 1 1 1 1 \\Leftrightarrow  1-  1  \\Leftrightarrow \\Leftrightarrow a 2q 4 = 4 .\n + + + + = 10   5\n -\n  a b c d e 1  q  = 10  .\n 1 q 1\n = 10\n a .  a q 4 ( q - 1)\n  1-\n 1 \n  q\n Ta có S = abcde = a.aq.aq 2 .aq 3 .aq 4 = a 5 q10 nên S 2 = ( a 5q10 ) = ( a^2 q 4 ) = 45 .\n 2 5\n Suy ra S = 45 = 32 .\n 5u + 5u1 - u2 = u2 + 6",
    "solution_en": "",
    "correct_answer": "32",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-tinh tong cac so hang trong mot cap-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5d2ad8c6c41a1e",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một loại vi khuẩn được nuôi cấy trong ống nghiệm, cứ 20 phút lại phân đôi một lần. Nếu ban\n đầu có 200 vi khuẩn, tính sô lượng vi khuẩn có trong ống nghiệm sau 2 giờ.",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có: 2 giờ = 120 phút=6.20 phút. Do đó sau 2 giớ vi khuẩn phân đôi 6 lần.\n Gọi u n là số lượng vi khuẩn có trong ống nghiệm sau lần phân đôi thứ n - 1 .\n Khi đó, dãy số ( un ) là một cấp số nhân với u1 = 200 và q = 2 .\n Ta có u7 = u1.q 6 = 200.26 = 12800 . Vậy sau 2 giờ, trong ống nghiệm có 12800 vi khuẩn.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-tinh tong cac so hang trong mot cap-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-51e1fb0143d7e0",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một tháp 10 tầng có diện tích sàn của tầng dưới cùng là 6144m 2 . Tính diện tích mặt sàn tầng\n trên cùng biết rằng diện tích mặt sàn mỗi tầng bằng nửa diện tích mặt sàn tầng ngay bên dưới.",
    "question_en": "",
    "options": [],
    "solution_vi": "9\n 1\n Ta có: u10 = u1.q 9 = 6144.  = 12 ( m 2 ) .\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-tinh tong cac so hang trong mot cap-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9a6139bb1c83e5",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Mặt sàn tầng một (tầng trệt) của một ngôi nhà cao hơn mặt sân 0,5 m . Cầu thang đi từ tầng một\n lên tầng hai gồm 25 bậc, mổi bậc cao 16 cm . Viết công thức để tìm độ cao của bậc cầu thang thứ\n n so với mặt sân và tính độ cao của sàn tầng hai so với mặt sân.",
    "question_en": "",
    "options": [],
    "solution_vi": "Mỗi bậc thang cao 16 cm = 0,16 m \\Rightarrow n bậc thang cao 0,16n ( m )\n22 \n Vì mặt bằng sàn cao hơn mặt sân 0,5 m nên công thức tính độ cao của bậc n so với mặt sân sẽ\n là: h n = ( 0,5 + 0,16n )( m ) .\n Khi đó độ cao của sàn tầng hai so với mặt sân ứng với n = 25 là:\n h25 = 0,5 + 0,16.25 = 4,5 ( m )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-tinh tong cac so hang trong mot cap-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0832799303dc37",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một cây đàn organ có tần số âm thanh các phim liên tiếp tạo thành một cấp số nhân. Cho biết tần\n số phim La Trung lả 400 Hz và tần số của phím LaCao cao hơn 12 phím là 800 Hz . Tìm công\n bội của cẩp số nhân nói trên (làm tròn kết quả đến hàng phần nghìn).",
    "question_en": "",
    "options": [],
    "solution_vi": "800\n Ta có: q12 = = 2 suy ra: q = 1,06 .\n 400",
    "solution_en": "",
    "correct_answer": "1,06",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-tinh tong cac so hang trong mot cap-9",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0b2b3fe83275f3",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Dân số Việt Nam năm 2020 là khoảng 97,6 triệu người. Nếu trung bình mỗi năm tăng 1,14% thì\n ưởc tính dân số Việt Nam năm 2040 là khoảng bao nhiêu người (làm tròn kết quả đến hàng trăm\n nghìn)?",
    "question_en": "",
    "options": [],
    "solution_vi": "Ước tính dân số Việt Nam năm 2040 là: 97,6.(1 + 0,0114 ) = 122, 4 (triệu người).\n 20",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-tinh tong cac so hang trong mot cap-10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-85b6edbc2203b9",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Để tích lũy tiền cho việc học đại học của con gái, cô Hoa quyết định hằng tháng bỏ ra 500 nghìn\n đồng vào tài khoản tiết kiệm, được trả lãi 0,5% cộng dồn hằng tháng. Có bắt đầu chương trình\n tích luỹ này khi con gái cô tròn 3 tuổi. Cô ấy sẽ tích luỹ được bao nhiêu tiền vào thời điểm gửi\n khoản tiên thứ 180? Lúc này con gái cô Hoa bao nhiêu tuổi?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi u n là số triệu đồng mà cô Hoa có trong chương trình tích luỹ ở lần gửi thứ n (vào đầu\n tháng thứ n ).\n Kí hiệu a = 0,5 triệu đồng, r = 0,5% .\n Số tiền của cô Hoa trong chương trình ở đầu tháng 1 là u1 = a .\n Số tiền của cô Hoa trong chương trình ở đầu tháng 2 là u2 = u1 (1 + r ) + a .\n Số tiền của cô Hoa trong chương trình ở đầu tháng 3 là\n u3 = u2 (1 + r ) + a = a (1 + r ) 2 + a (1 + r ) + a.\n Tương tự cho các tháng tiếp theo, suy ra số tiền của cô Hoa trong chương trình ở đầu tháng n\n (1 + r ) - 1 = a (1 + r ) - 1.\n n n\n là: un = a (1 + r ) + a (1 + r ) + + a (1 + r ) + a = a\n n -1 n-2\n (1 + r ) - 1 r\n (1 + r ) -1\n 180\n Vào thời điểm gửi khoản tiền thứ 180, cô ấy sẽ tích luỹ được u180 =a = 145, 41\n r\n (triệu đồng). Khi đó, tuổi của con gái cô Hoa là 3 + 180 :12 = 18 tuổi.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-tinh tong cac so hang trong mot cap-11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-37b91184de3e10",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một loại thuốc được dùng mỗi ngày một lần. Lúc đầu nồng độ thuốc trong máu của bệnh nhân\n tăng nhanh, nhưng mỗi liều kế tiếp có tác dụng ít hơn liều trước đó. Lượng thuốc trong máu ở\n ngày thứ nhất là 50mg , và mỗi ngày sau đó giảm chỉ còn một nửa so với ngày kề trước đó. Tính\n tổng lượng thuốc (tính bằng mg) trong máu của bệnh nhân sau khi dùng thuốc 10 ngày liên tiếp.",
    "question_en": "",
    "options": [],
    "solution_vi": "Lượng thuốc trong máu mỗi ngày cảu bệnh nhân lập thành cấp số nhân với số hạng đầu là 50\n và công bội q = 0.5\n Tổng lượng thuốc trong máu 10 ngày liên tiếp chính là tổng 10 số hạng đầu cảu cấp số nhân\n 50 1 - (0.5)10 \n này và bằng: Sn = = 99.902 ( mg )\n 1 - 0.5",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-tinh tong cac so hang trong mot cap-12",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e34874368e93ac",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Ban đầu, một quả lắc đồng hồ dao động theo một cung tròn dài 46 cm (H. 2.1). Sau mỗi lần đu\n liên tiếp, độ dài của cung tròn bằng 0,98 độ dài cung tròn ở ngay lần trước đó. Sau 15 lần dao\n động, quả lắc sẽ đi được quãng đường tổng cộng là bao nhiêu? (Kết quả tính theo centimét và\n làm tròn đến chữ số thập phân thứ hai).\n24",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi u n là độ dài cung tròn ở lần thứ n khi con lắc dao động. Do lần một, quả lắc đồng hồ dao\n động theo một cung tròn dài 46 cm , sau mỗi lần dao động liên tiếp, độ dài của cung tròn bằng\n 0,98 độ dài cung tròn ở ngay lần trước đó nên dãy số ( un ) lập thành cấp số nhân có u1 = 46 và\n công bội q = 0,98 .\n Sau 15 lần dao động, quả lắc sẽ đi được quãng đường tổng cộng là\n 1 - q15 1 - 0,9815\n S15 = u1 = 46  601,29 ( cm ) .\n 1- q 1 - 0,98",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-tinh tong cac so hang trong mot cap-13",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0f543ebc38d384",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Từ độ cao 55,8m của tháp nghiêng Pisa nước Italia người ta thả một quả bóng cao su chạm xuống\n 1\n đất. Giả sử mỗi lần chạm đất quả bóng lại nảy lên độ cao bằng độ cao mà quả bóng đạt trước\n 10\n đó. Tổng độ dài hành trình của quả bóng được thả từ lúc ban đầu cho đến khi nó nằm yên trên\n mặt đất thuộc khoảng nào trong các khoảng sau đây?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi hn là độ dài đường đi của quả bóng ở lần rơi xuống thứ n ( n \\in *\n ).\n Gọi ln là độ dài đường đi của quả bóng ở lần nảy lên thứ n ( n \\in *\n ).\n 1\n Theo bài ra ta có h1 = 55,8 , l1 = .55,8 = 5,58 và các dãy số ( hn ) , ( ln ) là các cấp số nhân lùi\n 10\n 1\n vô hạn với công bội q = .\n 10\n Từ đó ta suy ra tổng độ dài đường đi của quả bóng là:\n h1 l1 10\n S=\n 1\n +\n 1\n = ( h1 + l1 ) = 68, 2 ( m ) .\n 1- 1- 9\n 10 10",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-tinh tong cac so hang trong mot cap-14",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c82262e1799e4e",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Để trang trí cho quán trà sữa sắp mở cửa của mình, bạn Việt quyết định tô màu một mảng tường\n hình vuông cạnh bằng 1m . Phần tô màu dự kiến là các hình vuông nhỏ được đánh số lần lượt là\n 1, 2,3...n,.. , trong đó cạnh của hình vuông kế tiếp bằng một nửa cạnh hình vuông trước đó. Giả\n sử quá trình tô màu của Việt có thể diễn ra nhiều giờ. Hỏi bạn Việt tô màu đến hình vuông thứ\n mấy thì diện tích của hình vuông được tô bắt đầu nhỏ hơn\n 1\n 1000\n ( m2 ) ?",
    "question_en": "",
    "options": [],
    "solution_vi": "1 1\n Diện tích của hình vuông lập thành cấp số nhân với số hạng đầu tiên là u1 = , q = .\n 4 4\n n -1\n 1 1 1\n Do đó số hạng tổng quát là un = .  = n ( n \\ge 1) . Để diện tích của hình vuông tô màu nhỏ\n 4 4 4\n 1 1 1\n hơn \\Leftrightarrow n< \\Leftrightarrow 4n > 1000 \\Rightarrow n \\ge 5 .\n 1000 4 1000\n Vậy tô màu từ hình vuông thứ 5 thỏa mãn yêu cầu bài toán.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-tinh tong cac so hang trong mot cap-15",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1a4e9ff546e69d",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) , biết u1 = 1 , u4 = 64 . Tính công bội q của cấp số nhân đã cho",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "q = 4 .",
        "content_en": "q = 4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "q = -4 .",
        "content_en": "q = -4 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "q = 21 .",
        "content_en": "q = 21 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "q = 2 2 .",
        "content_en": "q = 2 2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u4 = 64 \\Leftrightarrow u1.q 3 = 64 \\Leftrightarrow q 3 = 64 \\Leftrightarrow q = 4 .\n8",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-bd0b2dcc36ecd9",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) có u1 = -2 và u5 = -162 .Công bội q bằng:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "q = -3 .",
        "content_en": "q = -3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "q = 3 .",
        "content_en": "q = 3 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "q = 3; q = -3 .",
        "content_en": "q = 3; q = -3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "q = -2 .",
        "content_en": "q = -2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "-162 -162\n Ta có u5 = -162 \\Leftrightarrow u1.q 4 = -162 \\Leftrightarrow q 4 = = = 81 \\Leftrightarrow q = \\pm3 .\n u1 -2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7dd09b208bc978",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) có u1 = 2 và u4 = 54 . Giá trị của công bội q bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "9 .",
        "content_en": "9 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "27 .",
        "content_en": "27 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-3 .",
        "content_en": "-3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u4 54\n Ta có: = q3 \\Rightarrow q3 = = 27 \\Rightarrow q = 3 27 = 3\n u1 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9ded6aba6c4d39",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) với u1 = 2 và công bội q = 3 . Tìm số hạng thứ 4 của cấp số nhân?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "24 .",
        "content_en": "24 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "54 .",
        "content_en": "54 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "162 .",
        "content_en": "162 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "48 .",
        "content_en": "48 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Có u4 = u1.q 3 = 2.33 = 54.",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1e0abd7384f8f5",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": ": Cấp số nhân ( un ) có u4 = 9, u5 = 81 có công bội là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "72 .",
        "content_en": "72 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "18 .",
        "content_en": "18 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "9 .",
        "content_en": "9 .",
        "is_correct": true
      }
    ],
    "solution_vi": "u5 81\n Ta có công bội q = = = 9.\n u4 9\n 1",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-09711d9a5b6300",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Biết ba số x^2 ;8; x theo thứ tự lập thành cấp số nhân. Giá trị của x bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x = 4",
        "content_en": "x = 4",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "x = 5",
        "content_en": "x = 5",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = 2",
        "content_en": "x = 2",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "x = 1",
        "content_en": "x = 1",
        "is_correct": false
      }
    ],
    "solution_vi": "Do ba số x^2 ;8; x theo thứ tự lập thành cấp số nhân nên theo tính chất cấp số nhân ta được\n x^2 .x = 8 \\Leftrightarrow x^3 = 8 \\Leftrightarrow x = 2 .",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -9",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-15646970e31ef7",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) có số hạng đầu u1 = 2 và công bội q = 3 . Giá trị u2019 bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2.32018 .",
        "content_en": "2.32018 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "3.2 2018 .",
        "content_en": "3.2 2018 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2.32019 .",
        "content_en": "2.32019 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3.2 2019 .",
        "content_en": "3.2 2019 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Áp dụng công thức của số hạng tổng quát un = u1.q n -1 = 2.32018 .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -18",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a62958934972e9",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) ; u1 = 1, q = 2 . Hỏi số 1024 là số hạng thứ mấy?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "11 .",
        "content_en": "11 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "9 .",
        "content_en": "9 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8 .",
        "content_en": "8 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "10 .",
        "content_en": "10 .",
        "is_correct": false
      }
    ],
    "solution_vi": "n -1 n -1 n -1\n Ta có un = u1.q \\Leftrightarrow 1.2 = 1024 \\Leftrightarrow 2 = 210 \\Leftrightarrow n - 1 = 10 \\Leftrightarrow n = 11 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -19",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-76a055a820e786",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) có số hạng đầu u1 = 5 và công bội q = -2 . Số hạng thứ sáu của ( un ) là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u6 = 320 .",
        "content_en": "u6 = 320 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u6 = -160 .",
        "content_en": "u6 = -160 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u6 = -320 .",
        "content_en": "u6 = -320 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u6 = 160 .",
        "content_en": "u6 = 160 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: u6 = u1.q 5 = 5.( -2 ) = -160 .\n 5",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -20",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e16aa2c0c3a45e",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) , n \\ge 1 với công bội q = 2 và có số hạng thứ hai u2 = 5. Số hạng thứ 7 của cấp số nhân là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u7 = 320 .",
        "content_en": "u7 = 320 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u7 = 640 .",
        "content_en": "u7 = 640 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u7 = 160 .",
        "content_en": "u7 = 160 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u7 = 80 .",
        "content_en": "u7 = 80 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có ( un ) , n \\ge 1 là cấp số nhân có công bội q = 2 nên có số hạng tổng quát un = q n -1.u1 .\n 5 5\n Vì u2 = 5 = u1.2 \\Rightarrow u1 = \\Rightarrow u7 = .26 = 160. Vậy số hạng thứ 7 của cấp số là 160.\n 2 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -24",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e2db155d30a721",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho một cấp số nhân có số hạng thứ 4 gấp 4096 lần số hạng đầu tiên. Tổng hai số hạng đầu tiên là 34. Số hạng thứ 3 của dãy số có giá trị bằng:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "512 .",
        "content_en": "512 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1024 .",
        "content_en": "1024 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "32 .",
        "content_en": "32 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u4 = 4096.u1 q3 = 4096 q = 16 q = 16\n Theo bài ra ta có:  \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow .\n  1 2\n u + u = 34  1\n u .(1 + q ) = 34 17.u1 = 34 u1 = 2\n Vậy u3 = u1.q 2 = 2.162 = 512 .\n u3",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -25",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0226ee2eacfcd8",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) có tổng n số hạng đầu tiên là Sn = 5n - 1 với n = 1, 2,... . Tìm số hạng đầu u1 và công bội q của cấp số nhân đó?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u1 = 5 , q = 4 .",
        "content_en": "u1 = 5 , q = 4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u1 = 5 , q = 6 .",
        "content_en": "u1 = 5 , q = 6 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u1 = 4 , q = 5 .",
        "content_en": "u1 = 4 , q = 5 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u1 = 6 , q = 5 .",
        "content_en": "u1 = 6 , q = 5 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u1 = S1 = 5 - 1 = 4 u1 = 4 u\n Ta có:  \\Rightarrow \\Rightarrow u1 = 4 , q = 2 = 5 .\n u1 + u2 = S2 = 5 - 1 = 24 u2 = 24 - u1 = 20\n 2\n u1\n u - u2 = 54",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -27",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1447b83676407f",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xen giữa số 3 và số 768 là 7 số để được một cấp số nhân có u1 = 3 . Khi đó u5 là:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "72 .",
        "content_en": "72 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-48 .",
        "content_en": "-48 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "\\pm48 .",
        "content_en": "\\pm48 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "48 .",
        "content_en": "48 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u1 = 3 và u9 = 768 nên 768 = 3.q \\Rightarrow q8 = 256 \\Rightarrow q = \\pm2 .\n 8\n Do đó u5 = u1.q 4 = 3.24 = 48 .\n u20 = 8u17",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -29",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-44a2814db01a2f",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) được xác định bởi u1 = 2 ; un = 2un -1 + 3n - 1 . Tìm số hạng thứ 2019 của dãy số.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u2019 = 5.22019 - 6062.",
        "content_en": "u2019 = 5.22019 - 6062.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u2019 = 5.22019 + 6062.",
        "content_en": "u2019 = 5.22019 + 6062.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u2019 = 5.22020 - 6062.",
        "content_en": "u2019 = 5.22020 - 6062.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u2019 = 5.22020 + 6062.",
        "content_en": "u2019 = 5.22020 + 6062.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un = 2un -1 + 3n - 1 \\Leftrightarrow un + 3n + 5 = 2 un -1 + 3 ( n - 1) + 5 , với n \\ge 2 ; n \\in .\n Đặt vn = un + 3n + 5 , ta có vn = 2vn -1 với n \\ge 2 ; n \\in .\n Như vậy, ( vn ) là cấp số nhân với công bội q = 2 và v1 = 10 , do đó vn = 10.2n -1 = 5.2n .\n Do đó un + 3n + 5 = 5.2n , hay un = 5.2n - 3n - 5 với n \\ge 2 ; n \\in .\n Nên u2019 = 5.22019 - 6062.\n 3 n+4 ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-xac dinh so hang va cong boi cua cap so -34",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-980865be91abe1",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) với công bội q < 0 và u2 = 4, u4 = 9 . Xét tính đúng sai của các khẳng định sau: 8",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng đầu u1 = - 3 3",
        "content_en": "Số hạng đầu u1 = - 3 3",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Cấp số nhân có công bội q = - 2 27",
        "content_en": "Cấp số nhân có công bội q = - 2 27",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số hạng u5 = 2 2187",
        "content_en": "Số hạng u5 = 2 2187",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "- là số hạng thứ 8 32",
        "content_en": "- là số hạng thứ 8 32",
        "is_correct": false
      }
    ],
    "solution_vi": "u4 u1q 3 9 3\n a) Đúng: Ta có: u2 = u1q = 4, u4 = u1q 3 = 9 \\Rightarrow = \\Rightarrow = q 2 \\Rightarrow q = - (q < 0) .\n u2 u1q 4 2\n 3  3 8\n Thay q = - vào u 2 , ta được: u1  -  = 4 \\Rightarrow u1 = - .\n 2  2 3\n 8 3\n b) Đúng: Vậy cấp số nhân đã cho có số hạng đầu u1 = - và công bội q = - .\n 3 2\n n -1\n 8  3\n Khi đó un = - . - \n 3  2\n 27\n c) Sai: Vậy u5 = -\n 2\n16 \n 7\n 2187 8  3\n d) Sai: - \\ne - . -  nên không phải là số hạng thứ 8\n 32 3  2",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:S",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-7-xac dinh so hang va cong boi cua ca-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4e73dfdfdf6a65",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong một hồ sen, số lá sen ngày hôm sau bằng 3 lần số lá sen ngày hôm trước. Biết rằng ngày đầu có 1 lá sen thì tới ngày thứ 10 hồ sẽ đầy lá sen. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Nếu ngày đầu có 9 lá sen thì tới ngày thứ 8 hồ sẽ đầy lá sen.",
        "content_en": "Nếu ngày đầu có 9 lá sen thì tới ngày thứ 8 hồ sẽ đầy lá sen.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số lá sen lập thành cấp số nhân ( un ) với u1 = 1 và công bội q = 3 .",
        "content_en": "Số lá sen lập thành cấp số nhân ( un ) với u1 = 1 và công bội q = 3 .",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số lá sen lập thành cấp số cộng ( un ) với u1 = 1 và công sai d = 3 .",
        "content_en": "Số lá sen lập thành cấp số cộng ( un ) với u1 = 1 và công sai d = 3 .",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Nếu ngày đầu có 9 lá sen thì tới ngày thứ 9 hồ sẽ đầy lá sen.",
        "content_en": "Nếu ngày đầu có 9 lá sen thì tới ngày thứ 9 hồ sẽ đầy lá sen.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ngày đầu có có u1 = 1 lá sen.\n Do số lá sen ngày hôm sau bằng 3 lần số lá sen ngày hôm trước nên ta có cấp số nhân ( un ) với\n u1 = 1 và công bội q = 3 .\n Vì ngày thứ 10 hồ sẽ đầy lá sen nên có u10 = u1.q 9 = 1.39 = 39 lá sen.\n Ngày đầu có v1 = 9 lá sen.\n Do số lá sen ngày hôm sau bằng 3 lần số lá sen ngày hôm trước nên ta có cấp số nhân ( vm ) với\n v1 = 9 và công bội q = 3 .\n Khi đó sau m ngày thì số lá sen là vm = v1.q m -1 = 9.3m -1 .\n Ta có 9.3m -1 = 39 \\Leftrightarrow 3m +1 = 39 \\Leftrightarrow m + 1 = 9 \\Leftrightarrow m = 8 .\n a) Đúng: Nếu ngày đầu có 9 lá sen thì tới ngày thứ 8 hồ sẽ đầy lá sen.\n b) Đúng: Số lá sen lập thành cấp số nhân ( un ) với u1 = 1 và công bội q = 3 .\n c) Sai: Số lá sen lập thành cấp số nhân ( un ) với u1 = 1 và công bội q = 3 .\n d) Sai: Nếu ngày đầu có 9 lá sen thì tới ngày thứ 8 hồ sẽ đầy lá sen.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:S",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-7-xac dinh so hang va cong boi cua ca-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e7b224c5faa65b",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Để tích lũy cho việc học đại học của cậu con trai đầu lòng, cô Lan quyết định hằng tháng bỏ ra 600 nghìn đồng vào tài khoản tiết kiệm, được trả lãi 0,5% cộng dồn hằng tháng. Cô bắt đầu chương trình tích lũy này khi cậu con trai tròn ba tuổi và gửi tiền vào đầu mỗi tháng. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Đến lần gửi khoản tiền thứ 180 thì cậu con trai tròn 18 tuổi.",
        "content_en": "Đến lần gửi khoản tiền thứ 180 thì cậu con trai tròn 18 tuổi.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Đến lần gửi khoản tiền thứ 180 thì cậu con trai tròn 18 tuổi.",
        "content_en": "Đến lần gửi khoản tiền thứ 180 thì cậu con trai tròn 18 tuổi.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số tiền của cô Lan có trong chương trình ở đầu tháng thứ 5 (làm tròn đến hàng nghìn) là 3.030.000 đồng.",
        "content_en": "Số tiền của cô Lan có trong chương trình ở đầu tháng thứ 5 (làm tròn đến hàng nghìn) là 3.030.000 đồng.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Số tiền của cô Lan có trong chương trình vào thời điểm cậu con trai đầu lòng tròn 18 tuổi nhỏ hơn 160 triệu đồng.",
        "content_en": "Số tiền của cô Lan có trong chương trình vào thời điểm cậu con trai đầu lòng tròn 18 tuổi nhỏ hơn 160 triệu đồng.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Gọi u n là số triệu đồng mà cô Lan có trong chương trình tích lũy ở lần gửi thứ n (vào\n đầu tháng thứ n ). Kí hiệu a = 0,6 triệu đồng, r = 0,5% .\n Số tiền của cô Lan có trong chương trình ở đầu tháng thứ nhất là: u1 = a .\n b) Sai: Số tiền của cô Lan có trong chương trình ở đầu tháng thứ 2 là:\n u2 = a (1 + r ) + a = 0,6 (1 + 0,5% ) + 0,6 .\n Số tiền của cô Lan có trong chương trình ở đầu tháng thứ 3 là: u3 = a (1 + r ) + a (1 + r ) + a .\n 2\n Tương tự cho các tháng tiếp theo, suy ra số tiền của cô Lan có trong chương trình ở đầu tháng\n thứ n là:\n (1 + r ) - 1 = a. (1 + r ) - 1 .\n n n\n un = a (1 + r ) + a (1 + r ) + ... + a (1 + r ) + a = a.\n n -1 n-2\n (1 + r ) - 1 r\n c) Đúng: Số tiền của cô Lan có trong chương trình ở đầu tháng thứ 5 là:\n (1 + r ) - 1 = 0,6. (1 + 0,5% ) - 1\n 5 5\n u = a.\n 5 3,03 triệu đồng = 3.030.000 đồng.\n r 0,5%\n d) Sai: Vào thời điểm cậu con trai đầu lòng tròn 18 tuổi là thời điểm gửi khoản tiền thứ 180 .\n (1 + r ) -1 (1 + 0,5% ) -1\n 180 180\n Lúc đó cô sẽ tích lũy được u180 = a. = 0,6. 174,49 (triệu đồng).\n r 0,5%",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:S",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-7-xac dinh so hang va cong boi cua ca-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5128e4836aa788",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Vào năm con gái được 4 tuổi, một người chuẩn bị gửi tiết kiệm đầu mỗi năm một số tiền x (triệu đồng) ( x \\in ) để đến năm 18 tuổi sẽ có được 200 triệu cho con gái đi học đại học. Hiện tại lãi suất tiền gửi hàng năm là 4,8% /năm. Giả sử lãi suất này được giữ ổn định. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tổng số tiền thu về sau 14 năm là một cấp số nhân có q = (1 + 4,8% ) .",
        "content_en": "Tổng số tiền thu về sau 14 năm là một cấp số nhân có q = (1 + 4,8% ) .",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Tổng số tiền thu về sau 14 năm là một cấp số nhân có u1 = x .",
        "content_en": "Tổng số tiền thu về sau 14 năm là một cấp số nhân có u1 = x .",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "x = 10 (triệu đồng)",
        "content_en": "x = 10 (triệu đồng)",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Đến năm con gái được 10 tuổi, người này dự định khi con gái được 18 tuổi sẽ mua thêm cho con gái một chiếc xe máy trị giá 50 triệu đồng. Do đó, kể từ thời điểm đầu năm con gái được 10 tuổi người này cần gửi tiết kiệm y triệu đồng đến khi con gái 18 tuổi ( y \\in ) . Giá trị nhỏ nhất của y = 15 .",
        "content_en": "Đến năm con gái được 10 tuổi, người này dự định khi con gái được 18 tuổi sẽ mua thêm cho con gái một chiếc xe máy trị giá 50 triệu đồng. Do đó, kể từ thời điểm đầu năm con gái được 10 tuổi người này cần gửi tiết kiệm y triệu đồng đến khi con gái 18 tuổi ( y \\in ) . Giá trị nhỏ nhất của y = 15 .",
        "is_correct": true
      }
    ],
    "solution_vi": "Số tiền người đó nhận được sau năm thứ nhất là: A1 = x (1 + 4,8% ) .\n Số tiền người đó nhận được sau năm thứ hai là: A2 = x (1 + 4,8% ) + x (1 + 4,8% ) 2 .\n Số tiền người đó nhận được sau năm thứ 14 là:\n A14 = x (1 + 4,8% ) + x (1 + 4,8% ) 2 + ... + x (1 + 4,8% ) 14 .\n u1 = x (1 + 4,8% ) qn - 1 (1 + 4,8% ) - 1\n 14\n Khi đó: A14 có  nên A14 = u1 = x (1 + 4,8% ) .\n  q = (1 + 4,8% ) q - 1 4,8%\n 200.4,8%\n Suy ra: x =  9,873336  10 (triệu đồng).\n (1 + 4,8% ) (1 + 4,8% ) - 1\n 14\n Khi x = 10 (triệu đồng).\n18 \n Gọi z = y - x là số tiền mà người đó phải gửi thêm mỗi năm kể từ năm con gái 10 tuổi (năm thứ\n 6) và P8 = z (1 + 4,8% ) + z (1 + 4,8% ) 2 + ... + z (1 + 4,8% ) 8 là số tiền nhận được sau 8 năm.\n Khi đó để nhận được số tiền 250 triệu đồng vào năm con gái 18 tuổi ( 8 năm kể từ con gái 10\n tuổi) thì:\n (1 + 4,8% ) - 1  47,43 (triệu đồng).\n 14\n P8 = 250 - 10 (1 + 4,8% )\n 4,8%\n 47, 43.4,8%\n Suy ra z =  4,77  5 (triệu đồng).\n (1 + 4,8% ) (1 + 4,8% ) - 1\n 8\n Vậy y = 15 (triệu đồng).\n a) Đúng: Tổng số tiền thu về sau 14 năm là một cấp số nhân có q = (1 + 4,8% ) .\n b) Sai: Tổng số tiền thu về sau 14 năm là một cấp số nhân có u1 = x (1 + 4,8% ) .\n c) Đúng: x = 10 (triệu đồng)\n d) Đúng: Đến năm con gái được 10 tuổi, người này dự định khi con gái được 18 tuổi sẽ mua thêm\n cho con gái một chiếc xe máy trị giá 50 triệu đồng. Do đó, kể từ thời điểm đầu năm con gái được\n 10 tuổi người này cần gửi tiết kiệm y triệu đồng đến khi con gái 18 tuổi ( y \\in ) . Giá trị nhỏ\n nhất của y = 15 .",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:Đ",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-7-xac dinh so hang va cong boi cua ca-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-cb8d945746d470",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) có u1 = 3 và q = -2 . Số 192 là số hạng thứ mấy của cấp số nhân đã cho?",
    "question_en": "",
    "options": [],
    "solution_vi": "192 = un = u1q n -1 = 3.( -2 ) \\Leftrightarrow ( -1) .2n -1 = 64 = ( -1) .26 \\Leftrightarrow n = 7.\n n -1 n -1 6\n 1 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-xac dinh so hang va cong boi cua ca-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9b7d04cd633c94",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một cấp số nhân có công bội bằng 3 và số hạng đầu bằng 5. Biết số hạng chính giữa là 32805.\n Hỏi cấp số nhân đã cho có bao nhiêu số hạng?",
    "question_en": "",
    "options": [],
    "solution_vi": "32805 = un = u1q n -1 = 5.3n -1 \\Leftrightarrow 3n -1 = 6561 = 38 \\Leftrightarrow n = 9. Vậy u9 là số hạng chính giữa của cấp\n số nhân, nên cấp số nhân đã cho có 17 số hạng.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-xac dinh so hang va cong boi cua ca-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-bd6cfc988c0e63",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một cấp số nhân có 6 số hạng với công bội bằng 2 và tổng số các số hạng bằng 189. Tìm số hạng\n cuối u 6 của cấp số nhân đã cho.",
    "question_en": "",
    "options": [],
    "solution_vi": "q = 2\n  q = 2\n Theo giả thiết:  1 - q6 1 - 26 \\Leftrightarrow  \\Rightarrow u6 = u1q 5 = 3.25 = 96.\n  S6 = 189 = u1 1 - q = u1. 1 - 2 u1 = 3\n ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-xac dinh so hang va cong boi cua ca-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-cd0a62c0f3cb4c",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Các số x + 6 y, 5 x + 2 y, 8 x + y theo thứ tự đó lập thành một cấp số cộng; đồng thời các số\n x - 1, y + 2, x - 3 y theo thứ tự đó lập thành một cấp số nhân. Tính x^2 + y^2 .",
    "question_en": "",
    "options": [],
    "solution_vi": "( x + 6 y ) + ( 8 x + y ) = 2 ( 5 x + 2 y )\n Theo giả thiết ta có \n ( x - 1)( x - 3 y ) = ( y + 2 )\n 2\n  x = 3 y  x = 3 y  x = -6\n \\Leftrightarrow \\Leftrightarrow  2 \\Leftrightarrow  .\n ( 3 y - 1)( 3 y - 3 y ) = ( y + 2 ) 0 = ( y + 2 )  y = -2\n 2\n Suy ra x^2 + y^2 = 40.",
    "solution_en": "",
    "correct_answer": "40",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-xac dinh so hang va cong boi cua ca-7",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f62b649539cac7",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số tăng a, b, c ( c \\in ) theo thứ tự lập thành cấp số nhân; đồng thời a, b + 8, c theo\n thứ tự lập thành cấp số cộng và a, b + 8, c + 64 theo thứ tự lập thành cấp số nhân. Tính giá trị\n biểu thức P = a - b + 2c.",
    "question_en": "",
    "options": [],
    "solution_vi": "ac = b^2 ac = b^2 (1)\n  \n Ta có a + c = 2 ( b + 8 ) \\Leftrightarrow a - 2b = 16 - c ( 2) .\n  \n a ( c + 64 ) = ( b + 8 ) ac + 64a = ( b + 8 ) ( 3)\n 2 2\n Thay (1) vào (3) ta được: b^2 + 64a = b^2 + 16b + 64 \\Leftrightarrow 4a - b = 4 ( 4 ) .\n  c -8\n  a=\n a - 2b = 16 - c \n Kết hợp (2) với (4) ta được:  \\Leftrightarrow\n 7\n ( 5)\n  4a - b = 4 b = 4c - 60\n  7\n Thay (5) vào (1) ta được:\n c = 36\n 7 ( c - 8 ) c = ( 4c - 60 ) \\Leftrightarrow 9c - 424c + 3600 = 0 \\Leftrightarrow  100 \\Leftrightarrow c = 36 ( c \\in ).\n 2 2\n c =\n  9\n Với c = 36 \\Rightarrow a = 4, b = 12 \\Rightarrow P = 4 - 12 + 72 = 64.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-xac dinh so hang va cong boi cua ca-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-68a6bd097f6a10",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Số hạng thứ hai, số hạng đầu và số hạng thứ ba của một cấp số cộng với công sai khác 0 theo thứ\n tự đó lập thành một cấp số nhân với công bội q . Tìm q.",
    "question_en": "",
    "options": [],
    "solution_vi": "Giả sử ba số hạng a; b; c lập thành cấp số cộng thỏa yêu cầu, khi đó b; a; c theo thứ tự đó lập\n thành cấp số nhân công bội q. Ta có\n a + c = 2b b = 0\n  \\Rightarrow bq + bq 2 = 2b \\Leftrightarrow  2 .\n  a = bq; c = bq 2\n  q + q - 2 = 0\n Nếu b = 0 \\Rightarrow a = b = c = 0 nên a; b; c là cấp số cộng công sai d = 0 (vô lí).\n Nếu q 2 + q - 2 = 0 \\Leftrightarrow q = 1 hoặc q = -2. Nếu q = 1 \\Rightarrow a = b = c (vô lí), do đó q = -2.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-xac dinh so hang va cong boi cua ca-9",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e4cdd2312abcc1",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Bốn góc của một tứ giác tạo thành cấp số nhân và góc lớn nhất gấp 27 lần góc nhỏ nhất. Tổng\n của góc lớn nhất và góc bé nhất bằng:",
    "question_en": "",
    "options": [],
    "solution_vi": "Giả sử 4 góc A, B, C, D (với A < B < C < D ) theo thứ tự đó lập thành cấp số nhân thỏa yêu cầu\n với công bội q.\n q = 3\n  A + B + C + D = 360  A (1 + q + q 2 + q 3 ) = 360 \n Ta có :  \\Leftrightarrow \\Leftrightarrow A = 9 \\Rightarrow A + D = 252.\n  D = 27 A  Aq = 27 A\n 3\n  D = Aq 3 = 243\n ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-xac dinh so hang va cong boi cua ca-10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-24c63749e1cf27",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Người ta thiết kế một cái tháp gồm 11 tầng. Diện tích bề mặt trên của mỗi tầng bằng nữa diện\n tích của mặt trên của tầng ngay bên dưới và diện tích mặt trên của tầng 1 bằng nửa diện tích của\n đế tháp (có diện tích là 12 288 m 2 ). Tính diện tích mặt trên cùng.",
    "question_en": "",
    "options": [],
    "solution_vi": "1\n Diện tích bề mặt của mỗi tầng (kể từ 1) lập thành một cấp số nhân có công bội q = và\n 2\n 12288\n u1 = = 6 144.\n 2\n 6144\n Khi đó diện tích mặt trên cùng là: u11 = u1q10 = =6\n 210\n -----------------HẾT-----------------\n22",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-xac dinh so hang va cong boi cua ca-11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b07898a395957c",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Dãy số nào sau đây không phải là cấp số nhân?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1; - 1; 1; - 1 .",
        "content_en": "1; - 1; 1; - 1 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1; - 3; 9;10 .",
        "content_en": "1; - 3; 9;10 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1; 0; 0;0 .",
        "content_en": "1; 0; 0;0 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "32; 16; 8;4 .",
        "content_en": "32; 16; 8;4 .",
        "is_correct": false
      }
    ],
    "solution_vi": "un +1\n Nếu ( un ) là cấp số nhân với công bội q ta có: un +1 = un .q \\Rightarrow q = .\n un\n 1; -1;1; -1 là cấp số nhân với q = -1 .\n -1;3;9;10 không là cấp số nhân.\n 1;0;0;0 là cấp số nhân với q = 0 .\n 1\n 32;16;8;4 là cấp số nhân với q = .\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1e00d208da006a",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong các dãy số sau, dãy số nào không phải là một cấp số nhân?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2; 4; 8; 16;",
        "content_en": "2; 4; 8; 16;",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1; - 1; 1; - 1;",
        "content_en": "1; - 1; 1; - 1;",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "12 ; 22 ; 32 ; 42 ;",
        "content_en": "12 ; 22 ; 32 ; 42 ;",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "a; a^3 ; a 5 ; a 7 ; ( a \\ne 0 ).",
        "content_en": "a; a^3 ; a 5 ; a 7 ; ( a \\ne 0 ).",
        "is_correct": false
      }
    ],
    "solution_vi": "u 9 u\n Xét đáp án C: 12 ; 22 ; 32 ; 42 ; ⎯⎯\n → 2 = 4 = = 3\n u1 4 u2\n Các đáp án A, B, D đều là các cấp số nhân.\n .( a ) .\n 1 2 n\n a; a^3 ; a 5 ; a 7 ; ( a \\ne 0 ) ⎯⎯\n → là cấp số nhân và un = a^2 n -1 =\n a",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-8ad62ac2a8052c",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Dãy số un = 3 + 3n. là một cấp số nhân với:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Công bội là 3 và số hạng đầu tiên là 1.",
        "content_en": "Công bội là 3 và số hạng đầu tiên là 1.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Công bội là 2 và số hạng đầu tiên là 1.",
        "content_en": "Công bội là 2 và số hạng đầu tiên là 1.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Công bội là 4 và số hạng đầu tiên là 2.",
        "content_en": "Công bội là 4 và số hạng đầu tiên là 2.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Công bội là 2 và số hạng đầu tiên là 2.",
        "content_en": "Công bội là 2 và số hạng đầu tiên là 2.",
        "is_correct": false
      }
    ],
    "solution_vi": "u1 = 1\n \n Cấp số nhân: 1; 2; 4; 8; 16; 32;⎯⎯\n → u2\n q = u = 2\n  1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d279e0000664ef",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) với u1 = -2 và q = -5. Viết bốn số hạng đầu tiên của cấp số nhân.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "-2; 10; 50; - 250.",
        "content_en": "-2; 10; 50; - 250.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-2; 10; - 50; 250.",
        "content_en": "-2; 10; - 50; 250.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-2; - 10; - 50; - 250.",
        "content_en": "-2; - 10; - 50; - 250.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-2; 10; 50; 250.",
        "content_en": "-2; 10; 50; 250.",
        "is_correct": false
      }
    ],
    "solution_vi": ".\n u1 = -2\n u = u q = 10\n u1 = -2  2\n ⎯⎯\n →\n 1\n \n q = -5 u3 = u2 q = -50\n u4 = u3q = 250",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ca9945008d6560",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm tất cả giá trị của x để ba số 2 x - 1; x; 2 x + 1 theo thứ tự đó lập thành một cấp số nhân. 1 1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x = \\pm .",
        "content_en": "x = \\pm .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "x = \\pm .",
        "content_en": "x = \\pm .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = \\pm 3.",
        "content_en": "x = \\pm 3.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "x = \\pm3. 3 3",
        "content_en": "x = \\pm3. 3 3",
        "is_correct": false
      }
    ],
    "solution_vi": "1\n → ( 2 x - 1)( 2 x + 1) = x^2 \\Leftrightarrow 3x 2 = 1 \\Leftrightarrow x = \\pm\n Cấp số nhân 2 x - 1; x; 2 x + 1 ⎯⎯ .\n 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5a0d29f9ec9e6f",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong các dãy số cho dưới đây, dãy số nào là cấp số nhân?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1;2;3;4;5 .",
        "content_en": "1;2;3;4;5 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1;3;6;9;12 .",
        "content_en": "1;3;6;9;12 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2;4;6;8;10 .",
        "content_en": "2;4;6;8;10 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2;2;2;2;2 .",
        "content_en": "2;2;2;2;2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta thấy ở đáp án D có u1 = u2 = u3 = u4 = u5 = 2 nên đây là cấp số nhân với công bội q = 1 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a1813060960c90",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong các dãy số sau, dãy số nào là một cấp số nhân?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1;2;3;4;5;6;... .",
        "content_en": "1;2;3;4;5;6;... .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2;4;6;8;16;32;... .",
        "content_en": "2;4;6;8;16;32;... .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-2; - 3; -4; - 5; -6; - 7;... .",
        "content_en": "-2; - 3; -4; - 5; -6; - 7;... .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1;2;4;8;16;32;... .",
        "content_en": "1;2;4;8;16;32;... .",
        "is_correct": true
      }
    ],
    "solution_vi": "u2 u3\n Nhận thấy \\ne nên các dãy số ở đáp án A, B và C không phải là cấp số nhân.\n u1 u2\n Riêng đối với dãy 1, 2, 4,8,16,32,... ở đáp án D thỏa mãn: un +1 = 2.un n \\in *\n .\n Vậy dãy số 1, 2, 4,8,16,32,... là cấp số nhân với u1 = 1 và công bội q = 2 .",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-9",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-05145bd21a8bcf",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Chọn cấp số nhân trong các dãy số sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1; 0, 2; 0,04; 0,0008; ...",
        "content_en": "1; 0, 2; 0,04; 0,0008; ...",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2; 22; 222;2222; ...",
        "content_en": "2; 22; 222;2222; ...",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x; 2 x; 3 x; 4 x; ...",
        "content_en": "x; 2 x; 3 x; 4 x; ...",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1; - x^2 ; x^4 ; - x 6 ; ...",
        "content_en": "1; - x^2 ; x^4 ; - x 6 ; ...",
        "is_correct": true
      }
    ],
    "solution_vi": "Dãy số : 1; - x^2 ; x^4 ; - x 6 ; ... là cấp số nhân có số hạng đầu u1 = 1; công bội q = - x^2 .",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-10",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4c59fe24fdf640",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong các số sau, dãy số nào là một cấp số nhân:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1, -3,9, -27,81.",
        "content_en": "1, -3,9, -27,81.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1, -3, -6, -9, -12.",
        "content_en": "1, -3, -6, -9, -12.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1, -2, -4, -8, -16.",
        "content_en": "1, -2, -4, -8, -16.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "0,3,9, 27,81.",
        "content_en": "0,3,9, 27,81.",
        "is_correct": false
      }
    ],
    "solution_vi": "Xem lời giải nguồn giáo viên.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a1da5fd95d0591",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xác định x để 3 số x - 2; x + 1; 3 - x theo thứ tự lập thành một cấp số nhân:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Không có giá trị nào của x.",
        "content_en": "Không có giá trị nào của x.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "x = \\pm1.",
        "content_en": "x = \\pm1.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = 2.",
        "content_en": "x = 2.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "x = -3.",
        "content_en": "x = -3.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ba số x - 2; x + 1; 3 - x theo thứ tự lập thành một cấp số nhân \\Leftrightarrow ( x - 2 )( 3 - x ) = ( x + 1)\n 2\n \\Leftrightarrow 2 x^2 - 3x + 7 = 0",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-12",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1d9dac51dfbace",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong các dãy số sau, dãy nào là cấp số nhân? n",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = ( -1) n .",
        "content_en": "un = ( -1) n .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "un = n 2 .",
        "content_en": "un = n 2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = 2n .",
        "content_en": "un = 2n .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = n . 3n",
        "content_en": "un = n . 3n",
        "is_correct": false
      }
    ],
    "solution_vi": "un +1\n Lập tỉ số\n un\n ( -1) .( n + 1) = - n + 1 \\Rightarrow u không phải cấp số nhân.\n n +1\n u\n A: n +1 = ( n)\n ( -1) .n\n n\n un n\n ( n + 1) \\Rightarrow u không phải là cấp số nhân.\n 2\n u\n B: n +1 = ( n)\n un n2\n un +1 2n +1\n C: = n = 2 \\Rightarrow un +1 = 2un \\Rightarrow ( un ) là cấp số nhân có công bội bằng 2 .\n un 2\n un +1 n + 1\n D: = \\Rightarrow ( un ) không phải là cấp số nhân.\n un 3n",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-22",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-804887ac649982",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Dãy nào sau đây là một cấp số nhân?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1, 2,3, 4,... .",
        "content_en": "1, 2,3, 4,... .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1,3,5,7,... .",
        "content_en": "1,3,5,7,... .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2, 4,8,16,... .",
        "content_en": "2, 4,8,16,... .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "2, 4,6,8,...",
        "content_en": "2, 4,6,8,...",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: 2, 4,8,16,... là cấp số nhân có số hạng đầu u1 = 2 và công bội q = 2 .\n 1 1 1 1",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-24",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-cb88487ab2447f",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên dương của x để ba số 1; x; x + 2 theo thứ tự đó lập thành một cấp số nhân?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      }
    ],
    "solution_vi": " x = -1\n Để 1; x; x + 2 theo thứ tự đó lập thành một cấp số nhân thì: x^2 = x + 2 \\Leftrightarrow  .\n x = 2\n Vậy có đúng 1 số nguyên dương x = 2 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-27",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4a40957cbf1a93",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm tất cả các giá trị của x để ba số 2 x - 1, x, 2 x + 1 theo thứ tự đó lập thành một cấp số nhân. 1 1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x = \\pm",
        "content_en": "x = \\pm",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "x = \\pm",
        "content_en": "x = \\pm",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = \\pm 3",
        "content_en": "x = \\pm 3",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "x = \\pm3 3 3",
        "content_en": "x = \\pm3 3 3",
        "is_correct": false
      }
    ],
    "solution_vi": "Để ba số đó lập thành một cấp số nhân thì:\n 1 1\n x^2 = ( 2 x - 1)( 2 x + 1) \\Leftrightarrow x^2 = 4 x^2 - 1 \\Leftrightarrow x^2 = \\Leftrightarrowx=\\pm\n 3 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-28",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-98317cf1884d93",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xác định x dương để 2 x - 3 ; x ; 2 x + 3 lập thành cấp số nhân.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x = 3 .",
        "content_en": "x = 3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "x = 3 .",
        "content_en": "x = 3 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = \\pm 3 .",
        "content_en": "x = \\pm 3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "không có giá trị nào của x .",
        "content_en": "không có giá trị nào của x .",
        "is_correct": false
      }
    ],
    "solution_vi": "2 x - 3 ; x ; 2 x + 3 lập thành cấp số nhân \\Leftrightarrow x^2 = ( 2 x - 3)( 2 x + 3) \\Leftrightarrow x^2 = 4 x^2 - 9 \\Leftrightarrow x^2 = 3\n \\Leftrightarrow x = \\pm 3 . Vì x dương nên x = 3 .\n sin ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-30",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5382937396b623",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) với u1 = 3 và công bội q = 2 . Số hạng tổng quát u n ( n \\ge 2 ) bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3.2n .",
        "content_en": "3.2n .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "3.2 n + 2 .",
        "content_en": "3.2 n + 2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3.2 n +1 .",
        "content_en": "3.2 n +1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3.2 n -1 .",
        "content_en": "3.2 n -1 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un = u1.q n -1 = 3.2n -1 .\n u = 3",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-7-ly thuyet va tim cong thuc cua mot cap s-33",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-32d72ded72058c",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Aladin nhặt được cây đèn thần, chàng miết tay vào cây đèn và gọi Thần đèn ra. Thần đèn cho chàng 3 điều ước. Aladin ước 2 điều đầu tiên tùy thích, nhưng điều ước thứ 3 của chàng là: \"Ước gì ngày mai tôi lại nhặt được cây đèn và Thần cho tôi số điều ước gấp đôi số điều ước ngày hôm nay\". Thần đèn chấp thuận và mỗi ngày Aladin đều thực hiện theo quy tắc như trên: ước hết các điều đầu tiên và luôn chừa lại điều ước cuối cùng để kéo dài thỏa thuận với thần đèn cho ngày hôm sau. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Ngày thứ hai Aladin ước 6 điều.",
        "content_en": "Ngày thứ hai Aladin ước 6 điều.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Ngày thứ ba Aladin ước 12 điều.",
        "content_en": "Ngày thứ ba Aladin ước 12 điều.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Ngày thứ tư Aladin ước 48 điều.",
        "content_en": "Ngày thứ tư Aladin ước 48 điều.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Sau 10 ngày gặp Thần đèn, Aladin ước tất cả 3269 điều ước",
        "content_en": "Sau 10 ngày gặp Thần đèn, Aladin ước tất cả 3269 điều ước",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Ngày thứ nhất Aladin ước 3 điều.\n Ngày thứ hai Aladin ước 2.3 điều.\n b) Đúng: Ngày thứ ba Aladin ước 2.2.3 = 22.3 điều.\n c) Sai: Ngày thứ tư Aladin ước 2 22 3 = 23 3 điều.\n Ngày thứ 10 Aladin ước 29.3 điều.\n  1 - 210 \n d) Sai: Vậy sau 10 ngày Aladin đã ước: 3 (1 + 2 + 2 + 2 + + 2 ) = 3 \n 2 3 9\n  = 3069 điều.\n  1- 2 ",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:S",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-7-ly thuyet va tim cong thuc cua mot -5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c89751745aeb59",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một cấp số nhân có hai số hạng liên tiếp là 16 và 36. Số hạng tiếp theo là:",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có cấp số nhân ( un ) có:\n uk = 16 u 9\n  \\Rightarrow q = k +1 = ⎯⎯\n → uk + 2 = uk +1q = 81\n uk +1 = 36 uk 4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-ly thuyet va tim cong thuc cua mot -1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-46c280299d0dbf",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm x để các số 2; 8; x; 128 theo thứ tự đó lập thành một cấp số nhân.",
    "question_en": "",
    "options": [],
    "solution_vi": "Cấp số nhân 2; 8; x; 128 theo thứ tự đó sẽ là u1; u2 ; u3 ; u4 , ta có\n  u2 u3 8 x\n u = u =  x = 32\n  1  2 8  x = 32 \n \\Leftrightarrow \\Leftrightarrow 2 \\Leftrightarrow   x = 32 \\Leftrightarrow x = 32\n 2\n \n  =u u  128 x  x = 1024   x = -32\n 3 4\n = \n  u2 u3  x 8",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-ly thuyet va tim cong thuc cua mot -2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-77f8e5cba1084c",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm x để ba số 1 + x; 9 + x; 33 + x theo thứ tự đó lập thành một cấp số nhân.",
    "question_en": "",
    "options": [],
    "solution_vi": "→ (1 + x )( 33 + x ) = ( 9 + x ) \\Leftrightarrow x = 3.\n Cấp số nhân 1 + x; 9 + x; 33 + x ⎯⎯\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-ly thuyet va tim cong thuc cua mot -3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4942af120bfd5f",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Ba số hạng đầu của một cấp số nhân là x - 6; x và y. Tìm y , biết rằng công bội của cấp số nhân\n là 6.",
    "question_en": "",
    "options": [],
    "solution_vi": "Cấp số nhân x - 6; x và y có công bội q = 6 nên ta có\n u1 = x - 6, q = 6  36\n   x = 5\n  x = u2 = u1q = 6 ( x - 6 ) \\Rightarrow \n   y = 36. 36 = 1296  259\n  y = u3 = u2 q = 36 x^2\n  5 5",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-ly thuyet va tim cong thuc cua mot -4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-40be99f712486d",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một cấp số nhân có 6 số hạng, số hạng đầu bằng 2 và số hạng thứ sáu bằng 486. Tìm công bội q\n của cấp số nhân đã cho.\n16",
    "question_en": "",
    "options": [],
    "solution_vi": "u = 2\n Theo giải thiết ta có:  1 ⎯⎯\n → 486 = u6 = u1q5 = 2q5 \\Leftrightarrow q 5 = 243 \\Leftrightarrow q = 3.\n u6 = 486",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-ly thuyet va tim cong thuc cua mot -5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-181f914db6413d",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một công ty xây dựng mua một chiếc máy ủi với giá 3 tỉ đồng. Cứ sau mỗi năm sử dụng, giá trị\n của chiếc máy ủi này lại giảm 20% so với giá trị của nó trong năm liền trước đó. Tìm giá trị còn\n lại của chiếc máy ủi đó sau 5 năm sử dụng.",
    "question_en": "",
    "options": [],
    "solution_vi": "Giá trị của chiếc máy ủi mỗi năm lập thành một cấp số nhân với số hạng đầu bằng 3 và công\n bội q = 0,8\n Giá trị của chiếc máy ủi sau 5 năm sử dụng là: u5 = 3  0,85 -1 = 0,1875 (tỷ đồng)",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-ly thuyet va tim cong thuc cua mot -6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-853ff6cfe6bdb7",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tỷ lệ tăng dân số của tỉnh X là 1, 4 0 0 . Biết rằng dân số tỉnh X hiện nay là 1,8 triệu người. Hỏi\n với mức tăng như vậy thì sau 10 năm nữa dân số tỉnh X là bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Theo giải thiết, ta thấy tỷ lệ tăng dân số hàng năm của tỉnh X là một cấp số nhân ( un ) với số\n 1, 4\n hạng đầu u1 = 1,8.106 và công bội q = 1 + = 1,014 .\n 100\n Do đó, dân số của tỉnh X sau 10 năm là: u11 = u1.q10 = 1,8.106 (1,014 )  2068483 người.\n 10\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số nhân",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-7-ly thuyet va tim cong thuc cua mot -7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5620825b1cad92",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho ( un ) là cấp số cộng biết u3 + u13 = 80 . Tổng 15 số hạng đầu của cấp số cộng đó bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "800 .",
        "content_en": "800 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "600 .",
        "content_en": "600 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "570 .",
        "content_en": "570 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "630",
        "content_en": "630",
        "is_correct": false
      }
    ],
    "solution_vi": "S15 = u1 + u2 + u3 + ... + u15 = ( u1 + u15 ) + ( u2 + u14 ) + ( u3 + u13 ) + ... + ( u7 + u9 ) + u8\n Vì u1 + u15 = u2 + u14 = u3 + u13 = ... = u7 + u9 = 2u8 và u3 + u13 = 80 \\Rightarrow S = 7.80 + 40 = 600 .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-da7bd9ccbb7bed",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) với số hạng đầu u1 = -6 và công sai d = 4. Tính tổng S của 14 số hạng đầu tiên của cấp số cộng đó.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S = 46 .",
        "content_en": "S = 46 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S = 308 .",
        "content_en": "S = 308 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S = 644 .",
        "content_en": "S = 644 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S = 280 .",
        "content_en": "S = 280 .",
        "is_correct": true
      }
    ],
    "solution_vi": " 2u1 + ( n - 1) d  n\n Tổng n số hạng đầu tiên của một cấp số cộng là Sn =  .\n 2\n  2 ( -6 ) + (14 - 1) 4 14\n Vậy S =  = 280 .\n 2",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7d58022462ccdc",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u2 = 8, u5 = 17 . Công sai d bằng:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "d = -3 .",
        "content_en": "d = -3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "d = -5 .",
        "content_en": "d = -5 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "d = 3 .",
        "content_en": "d = 3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "d = 5 .",
        "content_en": "d = 5 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u1 + d = 8 d = 3\n Theo giả thiết ta có: u2 = 8, u5 = 17 \\Rightarrow  \\Leftrightarrow .\n  1\n u + 4 d = 17  1\n u = 5",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-16c501fa40cbfc",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) và gọi S n là tổng n số hạng đầu tiên của nó. Biết u21 = -19 và S 22 = 0 . Tìm số hạng tổng quát u n của cấp số cộng đó.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = 21 + 2n .",
        "content_en": "un = 21 + 2n .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = 21 - 2n .",
        "content_en": "un = 21 - 2n .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = 23 - 2n .",
        "content_en": "un = 23 - 2n .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = 23 + 2n .",
        "content_en": "un = 23 + 2n .",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử cấp số cộng có số hạng đầu là u1 và công sai d .\n u21 = u1 + 20d\n u21 = -19  u1 + 20d = -19 u = 21\n Ta có:  \\Leftrightarrow 22.21d \\Leftrightarrow  \\Leftrightarrow 1 .\n  22\n S = 0  22\n S = 22u1 +  1\n 2u + 21d = 0  d = -2\n 2\n Khi đó: un = u1 + ( n - 1) d = 21 - 2 ( n - 1) = 23 - 2n .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d62d26e007b6f0",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u1 = -5; u8 = 30 . Công sai của cấp số cộng bằng:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5 .",
        "content_en": "5 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "6 .",
        "content_en": "6 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3",
        "content_en": "3",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi công sai của cấp số cộng là d khi đó ta có u8 = u1 + 7d \\Leftrightarrow 30 = -5 + 7 d \\Leftrightarrow d = 5 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-947de4b015bc4e",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) với u1 = 10 , u2 = 13 . Giá trị của u 4 là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u4 = 20 .",
        "content_en": "u4 = 20 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u4 = 19 .",
        "content_en": "u4 = 19 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u4 = 16 .",
        "content_en": "u4 = 16 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u4 = 18 .",
        "content_en": "u4 = 18 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u1 = 10, u2 = 13 \\Rightarrow d = 3 \\Rightarrow u4 = u1 + 3d = 10 + 3.3 = 19 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-211620d9a660e7",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) biết u2 = -1, u4 = 7 . Tìm u3 .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4.",
        "content_en": "4.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "10 .",
        "content_en": "10 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8 .",
        "content_en": "8 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u2 + u4 -1 + 7\n Áp dụng tính chất của các số hạng trong dãy cấp số cộng, ta có: u3 = = = 3.\n 2 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-9",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0092f2be2f5def",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) , biết u1 = 2 và u4 = 8 . Giá trị của u5 bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "12 .",
        "content_en": "12 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "10 .",
        "content_en": "10 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "9 .",
        "content_en": "9 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "11 .",
        "content_en": "11 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Từ giả thiết u1 = 2 và u4 = u1 + 3d = 8 \\Rightarrow d = 2\n Vậy u5 = u1 + 4d = 2 + 4.2 = 10 .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-10",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e9bc1f06df9090",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u5 = -15 ; u20 = 60 . Tổng 20 số hạng đầu tiên của cấp số cộng là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S20 = 250 .",
        "content_en": "S20 = 250 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S20 = 200 .",
        "content_en": "S20 = 200 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S 20 = -200 .",
        "content_en": "S 20 = -200 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S20 = -25 .",
        "content_en": "S20 = -25 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u5 = -15\n Ta có \n u1 + 4d = -15\n \\Leftrightarrow\n u = -35\n \\Leftrightarrow 1\n ( u + u ) 20 = 250 .\n \\Rightarrow S20 = 1 20\n u20 = 60 u1 + 19d = 60 d = 5 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5823c0cb57cba2",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) biết u3 = 6, u8 = 16. Tính công sai d và tổng của 10 số hạng đầu tiên.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "d = 2; S10 = 100 .",
        "content_en": "d = 2; S10 = 100 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "d = 1; S10 = 80 .",
        "content_en": "d = 1; S10 = 80 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "d = 2; S10 = 120 .",
        "content_en": "d = 2; S10 = 120 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "d = 2; S10 = 110 .",
        "content_en": "d = 2; S10 = 110 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u3 = 6 u1 + 2d = 6 u = 2\n Ta có:  \\Leftrightarrow \\Leftrightarrow 1 .\n u8 = 16 u1 + 7d = 16 d = 2\n 10 (10 - 1) 10 (10 - 1)\n S10 = 10.u1 + .d = 10.2 + .2 = 110 .\n 2 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-12",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-77818ff3ad2c4e",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) với un = 3 - 2n thì S60 bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "-6960 .",
        "content_en": "-6960 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-117 .",
        "content_en": "-117 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-3840 .",
        "content_en": "-3840 .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "-116 .",
        "content_en": "-116 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un +1 = 1 - 2n , Ta có un +1 - un = -2, n \\in *\n , suy ra ( un ) là cấp số cộng có u1 = 1 và công\n 60\n sai d = -2 . Vậy S60 = ( 2u1 + 59d ) = -3840 .\n 2",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-13",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-985cc1f2d6ba29",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u2013 + u6 = 1000 . Tổng 2018 số hạng đầu tiên của cấp số cộng đó là:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1009000 .",
        "content_en": "1009000 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "100800 .",
        "content_en": "100800 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1008000 .",
        "content_en": "1008000 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "100900 .",
        "content_en": "100900 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi d là công sai của cấp số cộng. Khi đó:\n u2013 + u6 = 1000 \\Leftrightarrow u1 + 2012d + u1 + 5d = 1000 \\Leftrightarrow 2u1 + 2017d = 1000 .\n 2017.2018\n Ta có: S2018 = 2018u1 + d = 1009.( 2u1 + 2017 d ) = 1009000 .\n 2\n u + u = 8",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-14",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-fa67be5656b261",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng {un } có u4 = -12 ; u14 = 18 . Tổng của 16 số hạng đầu tiên của cấp số cộng là:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S = 24 .",
        "content_en": "S = 24 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S = -25 .",
        "content_en": "S = -25 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S = -24 .",
        "content_en": "S = -24 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S = 26 .",
        "content_en": "S = 26 .",
        "is_correct": false
      }
    ],
    "solution_vi": "6 \n u = -12 u1 + 3d = -12 u = -21\n Ta có:  4 \\Leftrightarrow \\Leftrightarrow 1 .\n u14 = 18 u1 + 13d = 18 d = 3\n 16.15\n Tổng của 16 số hạng đầu tiên của cấp số cộng là: S16 = 16.( -21) + .3 = 24 .\n 2\n u2 - u3 + u5 = 10",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-16",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-fe0ce85ed24828",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho một cấp số cộng ( un ) có u1 = 5 và tổng của 50 số hạng đầu bằng 5150 . Tìm công thức của số hạng tổng quát u n .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = 1 + 4n .",
        "content_en": "un = 1 + 4n .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = 5n .",
        "content_en": "un = 5n .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = 3 + 2n .",
        "content_en": "un = 3 + 2n .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = 2 + 3n .",
        "content_en": "un = 2 + 3n .",
        "is_correct": false
      }
    ],
    "solution_vi": "50\n Ta có: S50 = ( 2u1 + 49d ) = 5150 \\Rightarrow d = 4 .\n 2\n Số hạng tổng quát của cấp số cộng bằng un = u1 + ( n - 1) d = 1 + 4n .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-18",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5cbecf896800f6",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một cấp số cộng có tổng của n số hạng đầu S n tính theo công thức S n = 5n 2 + 3n, ( n \\in * ) . Tìm số hạng đầu u1 và công sai d của cấp số cộng đó.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u1 = -8; d = 10 .",
        "content_en": "u1 = -8; d = 10 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u1 = -8; d = -10 .",
        "content_en": "u1 = -8; d = -10 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u1 = 8; d = 10 .",
        "content_en": "u1 = 8; d = 10 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u1 = 8; d = -10 .",
        "content_en": "u1 = 8; d = -10 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: u1 = S1 = 8 ; u2 = S2 - S1 = 18 \\Rightarrow d = u2 - u1 = 18 - 8 = 10 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-19",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-36b5e1f55a9a62",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) biết u5 = 18 và 4Sn = S2 n . Giá trị u1 và d là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u1 = 2 , d = 3 .",
        "content_en": "u1 = 2 , d = 3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u1 = 3 , d = 2 .",
        "content_en": "u1 = 3 , d = 2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u1 = 2 , d = 2 .",
        "content_en": "u1 = 2 , d = 2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u1 = 2 , d = 4 .",
        "content_en": "u1 = 2 , d = 4 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u5 = 18 \\Leftrightarrow u1 + 4d = 18 .\n  5.4  10.9\n Lại có 4S5 = S10 \\Leftrightarrow 4  5u1 + d  = 10u1 + d \\Leftrightarrow 2u1 - d = 0 .\n  2  2\n u + 4d = 18 u = 2\n Khi đó ta có hệ phương trình  1 \\Leftrightarrow  1 .\n 2u1 - d = 0 d = 4\n a3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-20",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-23535f8f68e667",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) và gọi S n là tổng n số hạng đầu tiên của nó. Biết S7 = 77 và S12 = 192 . Tìm số hạng tổng quát u n của cấp số cộng đó",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = 5 + 4n .",
        "content_en": "un = 5 + 4n .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = 3 + 2n .",
        "content_en": "un = 3 + 2n .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = 2 + 3n .",
        "content_en": "un = 2 + 3n .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = 4 + 5n .",
        "content_en": "un = 4 + 5n .",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử cấp số cộng có số hạng đầu là u1 và công sai d .\n  7.6.d\n  7u1 + = 77\n  7\n S = 77  2 7u1 + 21d = 77 u = 5\n Ta có:  \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow 1 .\n  S12 = 192 12u + 12.11.d = 192 12u1 + 66d = 192 d = 2\n  1 2\n Khi đó: un = u1 + ( n - 1) d = 5 + 2 ( n - 1) = 3 + 2n .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-22",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-811c1553795198",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tam giác đều A1B1C1 có độ dài cạnh bằng 4 . Trung điểm của các cạnh tam giác A1B1C1 tạo thành tam giác A2 B2C2 , trung điểm của các cạnh tam giác A2 B2C2 tạo thành tam giác A3 B3C3 … Gọi P1 , P2 , P3 ,... lần lượt là chu vi của tam giác A1B1C1 , A2 B2C2 , A3 B3C3 ,…Tính tổng chu vi P = P1 + P2 + P3 + ...",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "P = 8 .",
        "content_en": "P = 8 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "P = 24 .",
        "content_en": "P = 24 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "P = 6 .",
        "content_en": "P = 6 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "P = 18 .",
        "content_en": "P = 18 .",
        "is_correct": false
      }
    ],
    "solution_vi": "1 1 1 1 1 1\n Ta có: P2 = P1 ; P3 = P2 = P1 ; P4 = P3 = P1 …; Pn = n -1 P1\n 2 2 4 2 8 2\n 1 1 1 P\n Vậy P = P1 + P2 + P3 + ... = P1 + P1 + P1 + P1 + ... = 1 = 2 P1 = 24.\n 2 4 8 1\n 1-\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-tinh tong cac so hang trong mot cap so c-25",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-49143c022ed8b3",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một cấp số cộng có năm số hạng mà tổng số hạng đầu và số hạng thứ tư bằng 36, tổng của số hạng thứ hai và số hạng cuối bằng 44. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Dãy cấp số cộng có số hạng đầu u1 = 11.",
        "content_en": "Dãy cấp số cộng có số hạng đầu u1 = 11.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Dãy cấp số cộng có tổng u1 + u5 = 40.",
        "content_en": "Dãy cấp số cộng có tổng u1 + u5 = 40.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Dãy cấp số cộng có u2 = 16.",
        "content_en": "Dãy cấp số cộng có u2 = 16.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Tổng của 3 số hạng đầu tiên trong dãy cấp số cộng bằng 45.",
        "content_en": "Tổng của 3 số hạng đầu tiên trong dãy cấp số cộng bằng 45.",
        "is_correct": false
      }
    ],
    "solution_vi": "u1 + u4 = 36 u1 + ( u1 + 3d ) = 36 2u1 + 3d = 36 u = 12\n Ta có  \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow 1 .\n u2 + u5 = 44 ( u1 + d ) + ( u1 + 4d ) = 44 2u1 + 5d = 44 d = 4\n \n u = u + d = 16\n  2 1\n Suy ra u1 + u5 = u1 + u1 + 4d = 40.\n \n  S3 = 3 ( u1 + u3 ) = 48\n  2\n a) Sai: Dãy cấp số cộng có số hạng đầu u1 = 12\n b) Đúng: Dãy cấp số cộng có tổng u1 + u5 = 40.\n c) Đúng: Dãy cấp số cộng có u2 = 16.\n d) Sai: Tổng của 3 số hạng đầu tiên trong dãy cấp số cộng bằng 48\n Vậy mệnh đề 2,3 là mệnh đề đúng và mệnh đề 1, 4 là mệnh đề sai.",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:Đ, d:S",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-tinh tong cac so hang trong mot cap-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-12bfd94dd69ecf",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy cấp số cộng ( un ) có u1 = 4. Biết tổng 20 số hạng đầu tiên bằng 460. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Dãy số ( un ) có d = 2.",
        "content_en": "Dãy số ( un ) có d = 2.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Dãy số ( un ) có u4 = 8.",
        "content_en": "Dãy số ( un ) có u4 = 8.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Dãy số ( un ) có S10 = 120.",
        "content_en": "Dãy số ( un ) có S10 = 120.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Dãy số ( un ) có hiệu S8 - S 4 = 60.",
        "content_en": "Dãy số ( un ) có hiệu S8 - S 4 = 60.",
        "is_correct": true
      }
    ],
    "solution_vi": "20 ( u1 + u20 )\n Ta có: S20 = = 10 ( 4 + 4 + 19d ) = 460 \\Leftrightarrow d = 2.\n 2\n \n u4 = u1 + 3d = 4 + 3.2 = 10\n \n  10 ( u1 + u9 )\n Suy ra  S10 = = 5 ( 4 + 4 + 8.2 ) = 120 .\n  2\n  8 ( u1 + u8 ) 4 ( u1 + u4 )\n  S8 - S 4 = - = 4 ( 2u1 + 7 d ) - 2 ( 2u1 + 3d ) = 4u1 + 22d = 60\n  2 2\n10 \n a) Đúng: Dãy số ( un ) có d = 2.\n b) Sai: Dãy số ( un ) có u4 = 8.\n c) Đúng: Dãy số ( un ) có S10 = 120.\n d) Đúng: Dãy số ( un ) có hiệu S8 - S 4 = 60.\n Vậy mệnh đề 1,3, 4 là mệnh đề đúng và mệnh đề 2 là mệnh đề sai.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:Đ",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-tinh tong cac so hang trong mot cap-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-045c7353871210",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u1 = 123 , u3 - u15 = 84 . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng thứ 17 của cấp số cộng là u17 = 11.",
        "content_en": "Số hạng thứ 17 của cấp số cộng là u17 = 11.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Công sai của cấp số cộng là d = -7.",
        "content_en": "Công sai của cấp số cộng là d = -7.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số hạng thứ 2 của cấp số cộng là u2 = 130",
        "content_en": "Số hạng thứ 2 của cấp số cộng là u2 = 130",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng 17 số hạng đầu tiên của cấp số cộng là S17 = 1130",
        "content_en": "Tổng 17 số hạng đầu tiên của cấp số cộng là S17 = 1130",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử cấp số cộng ( un ) có công sai d .\n Theo giả thiết ta có: u3 - u15 = 84 \\Leftrightarrow u1 + 2d - u1 - 14d = 84 \\Leftrightarrow -12d = 84 \\Leftrightarrow d = -7.\n Vậy u17 = u1 + 16d = 123 + 16 ( -7 ) = 11; u2 = u1 + d = 123 + ( -7 ) = 116.\n S17 =\n ( u1 + u17 )17 = (123 + 11)17 = 1139.\n 2 2\n a) Đúng: Số hạng thứ 17 của cấp số cộng là u17 = 11.\n b) Đúng: Công sai của cấp số cộng là d = -7.\n c) Sai: Số hạng thứ 2 của cấp số cộng là u2 = 116\n d) Sai: Tổng 17 số hạng đầu tiên của cấp số cộng là S17 = 1139",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:S",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-tinh tong cac so hang trong mot cap-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ef134b503f9471",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u1 = -5 , công sai d = 3 . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số 100 là số hạng thứ 36 của cấp số cộng.",
        "content_en": "Số 100 là số hạng thứ 36 của cấp số cộng.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạng thứ 3 của cấp số cộng bằng 5 .",
        "content_en": "Số hạng thứ 3 của cấp số cộng bằng 5 .",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Tổng 10 số hạng đầu tiên của cấp số cộng bằng 250 .",
        "content_en": "Tổng 10 số hạng đầu tiên của cấp số cộng bằng 250 .",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Kể từ số hạng thứ 3 thì các số hạng của cấp số cộng đều nhận giá trị dương.",
        "content_en": "Kể từ số hạng thứ 3 thì các số hạng của cấp số cộng đều nhận giá trị dương.",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có: 100 = u1 + ( n - 1) d = -5 + ( n - 1) .3 \\Leftrightarrow n = 36.\n u3 = u1 + 2d = -5 + 2.3 = 1.\n S10 =\n ( u1 + u10 )10 = ( u1 + u1 + 9d ).10 = 5(-10 + 9.3) = 85.\n 2 2\n 8\n un = u1 + ( n - 1) d = -5 + ( n - 1) .3 = 3n - 8 > 0 \\Leftrightarrow n > .\n 3\n a) Đúng: Số 100 là số hạng thứ 36 của cấp số cộng.\n b) Sai: Số hạng thứ 3 của cấp số cộng bằng 1 .\n c) Sai: Tổng 10 số hạng đầu tiên của cấp số cộng bằng 85 .\n d) Đúng: Kể từ số hạng thứ 3 thì các số hạng của cấp số cộng đều nhận giá trị dương.\n Vậy mệnh đề 1 và 4 đúng, mệnh đề 2 và 3 sai.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:S, d:Đ",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-tinh tong cac so hang trong mot cap-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d329351c7b579f",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u4 = -12, u14 = 18 . Xét tính đúng sai của các khẳng đính sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Công sai của cấp số cộng là d = 3",
        "content_en": "Công sai của cấp số cộng là d = 3",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạng đầu của cấp số cộng là u1 = 21",
        "content_en": "Số hạng đầu của cấp số cộng là u1 = 21",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số hạng thứ 9 của cấp số cộng là u9 = 3",
        "content_en": "Số hạng thứ 9 của cấp số cộng là u9 = 3",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Tổng 5 số hạng đầu của cấp số cộng là S5 = -60",
        "content_en": "Tổng 5 số hạng đầu của cấp số cộng là S5 = -60",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi u1 là số hạng đầu, d là công sai của cấp số cộng ( un ) .\n u = u1 + 3d u1 + 3d = -12 d = 3\n Ta có:  4 \\Leftrightarrow \\Leftrightarrow .\n u14 = u1 + 13d u1 + 13d = 18 u1 = -21\n Số hạng thứ 9 là u9 = u1 + 8d = -21 + 8.3 = 3 .\n 5 ( 5 - 1)\n Tổng 5 số hạng đầu là S5 = 5u1 + d = -75 .\n 2\n a) Đúng: Công sai của cấp số cộng là d = 3\n b) Sai: Số hạng đầu của cấp số cộng là u1 = 21\n c) Đúng: Số hạng thứ 9 của cấp số cộng là u9 = 3\n d) Sai: Tổng 5 số hạng đầu của cấp số cộng là S5 = -60",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:S",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-tinh tong cac so hang trong mot cap-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-bb9e3242914e62",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một nhà hát có 25 hàng ghế với 16 ghế ở hàng thứ nhất, 18 ghế ở hàng thứ hai, 20 ghế ở hàng thứ ba và cứ tiếp tục theo quy luật đó, tức là hàng sau nhiều hơn hàng liền trước nó 2 ghế. Gọi u n (ghế) là tổng số ghế ở hàng thứ n . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "u2 = 18",
        "content_en": "u2 = 18",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Dãy số ( un ) là cấp số cộng có công sai d = 2 .",
        "content_en": "Dãy số ( un ) là cấp số cộng có công sai d = 2 .",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số ghế ở hàng thứ 20 nhỏ hơn 54 .",
        "content_en": "Số ghế ở hàng thứ 20 nhỏ hơn 54 .",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng số ghế trong nhà hát nhiều hơn 1000 .",
        "content_en": "Tổng số ghế trong nhà hát nhiều hơn 1000 .",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Số ghế trong các dãy ghế liên tiếp lập thành một cấp số cộng với số hạng đầu u1 = 16\n và công sai d = 2 .\n b) Đúng: u2 = u1 + d = 16 + 2 = 18 .\n c) Ta có u20 = u1 + 19d = 16 + 19.2 = 54 .\n Số ghế ở mỗi hàng của nhà hát lập thành một cấp số cộng, gồm 25 số hạng, với số hạng đầu\n u1 = 16 và công sai d = 2 . Tổng các số hạng này là\n 25 25\n d) Sai: S25 = u1 + u2 + + u25 =  2u1 + ( 25 - 1) d  = ( 2.16 + 24.2 ) = 1000.\n 2 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-tinh tong cac so hang trong mot cap-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f2cbac739b29f7",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Khi kí kết hợp đồng lao động với người lao động, một doanh nghiệp đề xuất hai phương án trả lương như sau: 12 , tiền lương là 120 triệu. Kể từ năm thứ hai trở đi, mỗi năm tiền lương được tăng 18 triệu. Phương án 2: Quý thứ nhất, tiền lương là 24 triệu. Kể từ quý thứ hai trở đi, mỗi quý tiền lương được tăng 1,8 triệu. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Trong phương án 1: dãy số tiền lương là cấp số cộng có số hạng đầu tiên là u1 = 120 , công sai d1 = 18 .",
        "content_en": "Trong phương án 1: dãy số tiền lương là cấp số cộng có số hạng đầu tiên là u1 = 120 , công sai d1 = 18 .",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Trong phương án 1: tiền lương người lao động nhận được trong năm thứ ba là 174 triệu.",
        "content_en": "Trong phương án 1: tiền lương người lao động nhận được trong năm thứ ba là 174 triệu.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Trong phương án 1: tổng tiền lương người lao động nhận được trong ba năm là 414 triệu.",
        "content_en": "Trong phương án 1: tổng tiền lương người lao động nhận được trong ba năm là 414 triệu.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Nếu kí hợp đồng lao động trong ba năm, với mong muốn nhận được tổng số tiền lương cao nhất thì người lao động nên chọn phương án 1.",
        "content_en": "Nếu kí hợp đồng lao động trong ba năm, với mong muốn nhận được tổng số tiền lương cao nhất thì người lao động nên chọn phương án 1.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Trong phương án 1: dãy số tiền lương là cấp số cộng có số hạng đầu tiên là u1 = 120 ,\n công sai d1 = 18\n b) Sai: Trong phương án 1: u3 = 120 + 2.18 = 156 triệu.\n c) Đúng: Trong phương án 1: tổng tiền lương người lao động nhận được trong ba năm là\n (u1 + u3 ).3 (120 + 156).3\n S3 = = = 414 triệu.\n 2 2\n d) Đúng: Trong phương án 2: Dãy số tiền lương là cấp số cộng có số hạng đầu tiên là v1 = 24 ,\n công sai d 2 = 1,8 , lương tăng theo quý. Ba năm tương ứng với 12 quý.\n Ta có v12 = 24 + 11.1,8 = 43,8 triệu.\n Tổng số tiền lương nhận được sau 3 năm tương ứng với 12 quý là:\n (v1 + v12 ).12\n S12 = = (24 + 43,8).6 = 406,8 triệu.\n 2\n Ta nhận thấy 406,8 < 414 .\n Vậy nếu kí hợp đồng lao động trong ba năm, với mong muốn nhận được tổng số tiền lương cao\n nhất thì người lao động nên chọn phương án 1.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:Đ",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-tinh tong cac so hang trong mot cap-7",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-85d283c5e84f1e",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Do nhu cầu đi lại của gia đình, anh Bình quyết định thực hiện tích góp tiền để mua một chiếc ôtô HONDA CRV trị giá 1, 259 tỉ đồng. Đợt thứ nhất: anh Bình đã tích góp theo nguyên tắc tháng sau tích góp nhiều hơn tháng ngay trước đó số tiền là 2 triệu đồng và cứ như thế đến tháng thứ 10 anh phải góp 21 triệu đồng. Đến hết đợt thứ nhất anh Bình có tất cả 624 triệu đồng. Đợt thứ hai kế tiếp: do muốn rút ngắn thời gian mua xe thì số tiền còn lại anh tiếp tục tích góp với tháng đầu là 5 triệu đồng và mỗi tháng tiếp theo số tiền gấp đôi tháng kề trước nó. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Đợt thứ nhất anh Bình tích lũy tiền theo dãy số với cấp số cộng có công sai là d = 2 triệu và u1 = 3 triệu.",
        "content_en": "Đợt thứ nhất anh Bình tích lũy tiền theo dãy số với cấp số cộng có công sai là d = 2 triệu và u1 = 3 triệu.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Anh Bình tích lũy tiền hết đợt thứ nhất trong 25 tháng.",
        "content_en": "Anh Bình tích lũy tiền hết đợt thứ nhất trong 25 tháng.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Đợt thứ hai anh Bình tích lũy tiền theo dãy số với cấp số nhân có công bội là q = 2 triệu và u1 = 5 triệu.",
        "content_en": "Đợt thứ hai anh Bình tích lũy tiền theo dãy số với cấp số nhân có công bội là q = 2 triệu và u1 = 5 triệu.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Để đủ tiền mua ôtô thì anh Bình thì anh Bình tích góp ít nhất 31 tháng 14",
        "content_en": "Để đủ tiền mua ôtô thì anh Bình thì anh Bình tích góp ít nhất 31 tháng 14",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Đợt thứ nhất anh Bình tích lũy theo cấp số cộng Với công sai d = 2 triệu\n Theo đề bài ta có 21 = u1 + 9.2 \\Rightarrow u1 = 3 triệu.\n b) Sai: Hết đợt thứ nhất anh Bình có tất cả 624 triệu đồng nên ta có\n n  2u1 + (n - 1).3\n Sn = 624 \\Rightarrow 624 = \\Rightarrow n = 24 tháng.\n 2\n c) Đúng: Theo đề Số tiền còn lại anh Bình tích góp theo cấp số nhân có công bội là q = 2 triệu\n và u1 = 5 triệu.\n d) Đúng: Số tiền cần tích lũy ở đợt hai là 1259 - 624 = 635 triệu đồng\n 1 - 2n\n Từ đó ta có 635 = 5. \\Rightarrow n = 7 tháng.\n 1- 2\n Tổng cộng hai đợt cần có ít nhất 24 + 7 = 31 tháng.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:Đ",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-tinh tong cac so hang trong mot cap-9",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9ac0c73f5b6caa",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một sinh viên sau khi ra trường và xin vào làm cho một trung tâm với mức lương khởi điểm là 100 triệu đồng một năm. Cứ sau mỗi năm, trung tâm trả thêm cho sinh viên 20 triệu đồng. Gọi u n (triệu đồng) là số tiền lương mà sinh viên đó nhận được ở năm thứ n . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số tiền lương sinh viên nhận được ở năm thứ hai là 120 triệu đồng.",
        "content_en": "Số tiền lương sinh viên nhận được ở năm thứ hai là 120 triệu đồng.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số tiền lương sinh viên nhận được ở năm thứ 10 là 300 triệu đồng.",
        "content_en": "Số tiền lương sinh viên nhận được ở năm thứ 10 là 300 triệu đồng.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Dãy số ( un ) là cấp số cộng có u1 = 120 và công sai d = 20",
        "content_en": "Dãy số ( un ) là cấp số cộng có u1 = 120 và công sai d = 20",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Giả sử, mỗi năm bạn sinh viên chi tiêu tiết kiệm hết 70 triệu đồng. Vậy sau ít nhất 12 năm thì sinh viên đó mua được căn chung cư 2 tỉ đồng.",
        "content_en": "Giả sử, mỗi năm bạn sinh viên chi tiêu tiết kiệm hết 70 triệu đồng. Vậy sau ít nhất 12 năm thì sinh viên đó mua được căn chung cư 2 tỉ đồng.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta thấy, số tiền lương năm sau hơn năm trước 20 triệu đồng nên ( un ) là cấp số cộng có\n u1 = 100 và công sai d = 20 . Do đó: un = u1 + ( n - 1) d = 100 + ( n - 1) .20 = 20n + 80\n a) Đúng: Số tiền lương sinh viên nhận được ở năm thứ hai là u2 = 120 (triệu đồng).\n b) Sai: Số tiền lương sinh viên nhận được ở năm thứ 10 là u10 = 20.10 + 80 = 280 (triệu đồng).\n c) Sai: u1 = 100 .\n d) Sai: Tổng số tiền bạn sinh viên tiết kiệm được sau n năm là:\n n n\n S =  2u1 + ( n - 1) d  - 70n =  2.100 + ( n - 1).20  - 70n = 10n 2 + 20n (triệu đồng).\n 2 2\n  n \\ge 13,1\n Ta có: S \\ge 2000 \\Leftrightarrow 10n 2 + 20n - 2000 \\ge 0 \\Leftrightarrow  .\n  n \\le -15,1\n Do đó sau ít nhất sau 14 năm thì sinh viên đó có thể mua được chung cư 2 tỉ đồng.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:S, d:S",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-tinh tong cac so hang trong mot cap-10",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-51cee05e651440",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u3 + u28 = 100 . Hãy tính tổng của 30 số hạng đầu tiên của cấp số cộng\n đó.",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có: u3 + u28 = 100 \\Leftrightarrow ( u1 + 2d ) + ( u1 + 27d ) = 100 \\Leftrightarrow 2u1 + 29d = 100\n 30\n Mà S30 = ( 2u1 + 29d ) nên S30 = 15.100 = 1500 .\n 2\n u = 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-tinh tong cac so hang trong mot cap-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6af0dfbaa764bb",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một rạp hát có 30 dãy ghế, dãy đầu tiên có 25 ghế. Mỗi dãy sau có hơn dãy trước 3 ghế. Hỏi rạp\n hát có tất cả bao nhiêu ghế?",
    "question_en": "",
    "options": [],
    "solution_vi": "Số ghế của mỗi dãy (bắt đầu từ dãy đầu tiên) theo thứ tự đó lập thành một cấp số cộng có 30 số\n hạng có công sai d = 3 và u1 = 25.\n 30.29\n Tổng số ghế là S30 = u1 + u2 + + u30 = 30u1 + d = 2055\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-tinh tong cac so hang trong mot cap-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-27a97cfe6732fe",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Người ta trồng 3003 cây theo một hình tam giác như sau: hàng thứ nhất trồng 1 cây, hàng thứ hai\n trồng 2 cây, hàng thứ ba trồng 3 cây,.Hỏi có tất cả bao nhiêu hàng cây?",
    "question_en": "",
    "options": [],
    "solution_vi": "Số cây mỗi hàng (bắt đầu từ hàng thứ nhất) lập thành một cấp số cộng ( un ) có u1 = 1, d = 1. Giả\n sử có n hàng cây thì u1 + u2 + + un = 3003 = S n .\n n ( n - 1)\n Ta có 3003 = Sn = nu1 + d \\Leftrightarrow n 2 + n - 6006 = 0 \\Leftrightarrow n = 77\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-tinh tong cac so hang trong mot cap-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c274f422247b75",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một chiếc đồng hồ báo thức, kể từ thời điểm 0 (giờ) thì sau mỗi giờ thì số tiếng chuông được\n đánh đúng bằng số giờ mà đồng hồ chỉ tại thời điểm đánh chuông. Hỏi một ngày đồng hồ đó\n đánh bao nhiêu tiếng chuông?",
    "question_en": "",
    "options": [],
    "solution_vi": "16 \n Kể từ lúc 1 (giờ) đến 24 (giời) số tiếng chuông được đánh lập thành cấp số cộng có 24 số hạng\n với u1 = 1, công sai d = 1.\n 24\n Vậy số tiếng chuông được đánh trong 1 ngày là: S = S24 = ( u1 + u24 ) = 12 (1 + 24 ) = 300\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-tinh tong cac so hang trong mot cap-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b866cbadb25657",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong một khán phòng có tất cả 30 dãy ghế, dãy đầu tiên có 15 ghế, các dãy liền sau nhiều hơn\n dãy trước đó 4 ghế, hỏi khán phòng đó có tất cả bao nhiêu ghế?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi u1 , u2 ,, u30 lần lượt là số ghế của dãy ghế thứ nhất, dãy ghế thứ hai,., dãy ghế thứ ba mươi.\n Khi đó, ( un ) là một cấp số cộng có số hạng đầu u1 = 15 , công sai d = 4 (trong đó 1 \\le n \\le 30 ).\n Gọi S30 là tổng số ghế trong khán phòng.\n 30\n Ta có: S30 = u1 + u2 + + u30 =  2u1 + (30 - 1)d  = 15(2.15 + 29.4) = 2190 .\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-tinh tong cac so hang trong mot cap-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c46c5f5875332a",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Trên một bàn cờ có nhiều ô vuông, người ta đặt 7 hạt dẻ vào ô đầu tiên, sau đó đặt tiếp vào ô thứ\n hai số hạt nhiều hơn ô thứ nhất là 5, tiếp tục đặt vào ô thứ ba số hạt nhiều hơn ô thứ hai là 5,…\n và cứ thế tiếp tục đến ô thứ n . Biết rằng đặt hết số ô trên bàn cờ người ta phải sử dụng 25450\n hạt. Hỏi bàn cờ đó có bao nhiêu ô vuông?",
    "question_en": "",
    "options": [],
    "solution_vi": "Số hạt dẻ trên mỗi ô (bắt đầu từ ô thứ nhất) theo thứ tự đó lập thành cấp số cộng ( un ) có\n u1 = 7, d = 5. Gọi n là số ô trên bàn cờ thì u1 + u2 + + un = 25450 = Sn .\n n ( n - 1) n2 - n\n Ta có 25450 = Sn = nu1 + d = 7n + .5 \\Leftrightarrow 5n 2 + 9n - 50900 = 0 \\Leftrightarrow n = 100\n 2 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-tinh tong cac so hang trong mot cap-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-31d249b1817884",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một ruộng bậc thang có thửa thấp nhất (bậc thứ nhất) nằm ở độ cao 950 m so với mực nước biển,\n độ chênh lệch giữa thửa trên và thửa dưới trung bình là 1,5 m. Hỏi thửa ruộng ở bậc thứ 12 có\n độ cao là bao nhiêu mét so với mực nước biển?",
    "question_en": "",
    "options": [],
    "solution_vi": "Kí hiệu u n là chiều cao so với mực nước biển của thửa ruộng ở bậc thứ n .\n Khi đó, dãy số ( un ) là một cấp số cộng với u1 = 950 và d = 1,5 .\n Ta có: u12 = u1 + 11d = 950 + 11.1,5 = 966,5\n Vậy thửa ruộng ở bậc thứ 12 có độ cao 966,5 m so với mực nước biển.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-tinh tong cac so hang trong mot cap-9",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-99d387822b26e5",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Chuông đồng hồ ở một toà tháp đánh số tiếng đúng bằng số giờ và cứ mỗi 30 phút không phải là\n giờ đúng thì đánh 1 tiếng chuông. Hỏi bắt đầu từ lúc 1 giờ đêm đến 12 giờ trưa, chuông đồng hồ\n đó đã đánh tất cả bao nhiêu tiếng?",
    "question_en": "",
    "options": [],
    "solution_vi": "Lúc 1 giờ đêm, toà tháp đánh 1 tiếng chuông; lúc 2 giờ đêm, toà tháp đánh 2 tiếng chuông,.; lúc\n 12 giờ trưa, toà tháp đánh 12 tiếng chuông. Ngoài ra, mỗi 30 phút không phải là giờ đúng thì\n đánh 1 tiếng chuông (có 11 lần như thế từ 1 giờ đến 12 giờ).\n Vậy tổng số tiếng chuông là:\n (1 + 12) 12\n S = (1 + 2 + 3 + + 12) + 1 11 = + 11 = 89 ( tiếng chuông)\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-tinh tong cac so hang trong mot cap-10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7323b6dff61668",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một cơ sở khoan giếng đưa ra định mức giá như sau: Giá của mét khoan đầu tiên là 100 nghìn\n đồng và kể từ mét khoan thứ hai, giá của mỗi mét sau tăng thêm 30 nghìn đồng so với giá của\n mét khoan ngay trước đó. Một người cần khoan một giếng sâu 20 m để lấy nước dùng cho sinh\n hoạt của gia đình. Hỏi sau khi hoàn thành việc khoan giếng, gia đình đó phải thanh toán cho cơ\n sở khoan giếng số tiền bao nhiêu nghìn đồng?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi u n là giá của mét khoan thứ n , trong đó 1 \\le n \\le 20 .\n Khi đó, ( un ) là cấp số cộng có số hạng đầu u1 = 100 và công sai d = 30 .\n Số tiền mà gia đình phải thanh toán cho cơ sở khoan giếng là:\n 20 ( 2u1 + 19d ) 20(2.100 + 19.30)\n S20 = u1 + u2 + + u20 = = = 7700 (nghìn đồng).\n 2 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-tinh tong cac so hang trong mot cap-13",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c74f896b7d36db",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một ngôi nhà hình kim tự tháp (có gạch nâu ốp bên ngoài) được bao quanh bởi rất nhiều cây cối\n và là nơi tuyệt vời để nghỉ mát mùa hè. Ngôi nhà có chiều dài và chiều rộng đều là 6,8 m, chiều\n cao là 2,72 m. Khi xây dựng ngôi nhà, người chủ đã tính toán số viên gạch nâu hình hộp chữ\n nhật cần ốp tường; biết hàng trên ít hơn hàng dưới 1 viên, hàng trên cùng là 1 viên, kích thước\n viên gạch nâu hình hộp chữ nhật là 0, 2 m - 0,08 m - 1 m . Hãy dự tính số viên gạch nâu ốp tường\n cả bốn mặt của ngôi nhà.",
    "question_en": "",
    "options": [],
    "solution_vi": "Một bức tường có 2,72:0,08 = 34 hàng gạch.\n Số gạch ở mỗi hàng tạo thành một cấp số cộng với số hạng đầu u1 = 1 và công sai d = 1 .\n 34.33\n Số viên gạch trên một bức tường là S34 = 34.1 + 1 = 595 viên gạch.\n 2\n Vì 4 mặt đều bằng nhau nên có 4.595 = 2380 viên gạch người chủ dự tính đặt mua.\n -----------------HẾT-----------------\n20",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-tinh tong cac so hang trong mot cap-14",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-da08b6839da220",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong các dãy số sau, dãy số nào là một cấp số cộng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1; -2; -4; -6; -8 .",
        "content_en": "1; -2; -4; -6; -8 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1; -3; -6; -9; -12.",
        "content_en": "1; -3; -6; -9; -12.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1; -3; -7; -11; -15.",
        "content_en": "1; -3; -7; -11; -15.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "1; -3; -5; -7; -9 .",
        "content_en": "1; -3; -5; -7; -9 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Dãy số ( un ) có tính chất un +1 = un + d thì được gọi là một cấp số cộng.\n Ta thấy dãy số: 1; -3; -7; -11; -15 là một cấp số cộng có số hạng đầu là 1 và công sai bằng -4.",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-ly thuyet va tim cong thuc cua mot cap s-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6b172bee450500",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Viết ba số hạng xen giữa các số 2 và 22 để được một cấp số cộng có năm số hạng.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "7; 12; 17,",
        "content_en": "7; 12; 17,",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6; 10; 14.",
        "content_en": "6; 10; 14.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8; 13; 18.",
        "content_en": "8; 13; 18.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "6; 12; 18.",
        "content_en": "6; 12; 18.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giữa 2 và 22 có thêm ba số hạng nữa lập thành cấp số cộng, xem như ta có một cấp số cộng có\n 5 số hạng với u1 = 2; u5 = 22; ta cần tìm u2 , u3 , u4 .\n u2 = u1 + d = 7\n u5 - u1 22 - 2 \n Ta có u5 = u1 + 4d \\Leftrightarrow d = = = 5 ⎯⎯\n → u3 = u1 + 2d = 12\n 4 4 u = u + 3d = 17\n  4 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-ly thuyet va tim cong thuc cua mot cap s-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6b15fe288b19e2",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có các số hạng đầu lần lượt là 5; 9; 13; 17; . Tìm số hạng tổng quát u n của cấp số cộng.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = 5n + 1.",
        "content_en": "un = 5n + 1.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = 5n - 1.",
        "content_en": "un = 5n - 1.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = 4n + 1.",
        "content_en": "un = 4n + 1.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = 4n - 1.",
        "content_en": "un = 4n - 1.",
        "is_correct": false
      }
    ],
    "solution_vi": "Các số 5; 9; 13; 17; theo thứ tự đó lập thành cấp số cộng ( un ) nên\n u1 = 5\n  ⎯⎯⎯\n CTTQ\n → un = u1 + ( n - 1) d = 5 + 4 ( n - 1) = 4n + 1\n d = u2 - u1 = 4\n 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-ly thuyet va tim cong thuc cua mot cap s-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-13ce724be41a1c",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong các dãy số được cho dưới đây, dãy số nào không phải là cấp số cộng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = -4n + 9.",
        "content_en": "un = -4n + 9.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = -2n + 19.",
        "content_en": "un = -2n + 19.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = -2n - 21.",
        "content_en": "un = -2n - 21.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = -2n + 15. 4",
        "content_en": "un = -2n + 15. 4",
        "is_correct": false
      }
    ],
    "solution_vi": "Dãy số un = -2n + 15 không có dạng an + b nên có không phải là cấp số cộng.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-ly thuyet va tim cong thuc cua mot cap s-9",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3d6e2ab2437922",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) với un = 5 - 2n . Tìm công sai của cấp số cộng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "d = 3 .",
        "content_en": "d = 3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "d = -2 .",
        "content_en": "d = -2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "d = 1 .",
        "content_en": "d = 1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "d = 2 .",
        "content_en": "d = 2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un +1 - un = ( 5 - 2 ( n + 1) ) - ( 5 - 2n ) = 5 - 2n - 2 - 5 + 2n = -2 \\Rightarrow d = -2.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-ly thuyet va tim cong thuc cua mot cap s-10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-80e2b9eda87285",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong các dãy số sau, dãy nào là một cấp số cộng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1; -3; -6; -9; -12 .",
        "content_en": "1; -3; -6; -9; -12 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1; -3; -7; -11; -15 .",
        "content_en": "1; -3; -7; -11; -15 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "1; -3; -5; -7; -9 .",
        "content_en": "1; -3; -5; -7; -9 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1; -2; -4; -6; -8 .",
        "content_en": "1; -2; -4; -6; -8 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có dãy số 1; -3; -7; -11; -15 là một cấp số cộng có công sai d = -4 .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-ly thuyet va tim cong thuc cua mot cap s-12",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9e50a8534296d1",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Dãy số nào sau đây là cấp số cộng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4;8;16;32 .",
        "content_en": "4;8;16;32 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "4;6;8;10 .",
        "content_en": "4;6;8;10 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "-1;1; -1;1 .",
        "content_en": "-1;1; -1;1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3;5;7;10 .",
        "content_en": "3;5;7;10 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: 6 = 4 + 2;8 = 6 + 2;10 = 8 + 2\n Nên dãy số 4;6;8;10 là một cấp số cộng.",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-ly thuyet va tim cong thuc cua mot cap s-15",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-929305eb4cd284",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xác định a để 3 số 1 + 2a;2a 2 - 1; -2a theo thứ tự thành lập một cấp số cộng? 3",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Không có giá trị nào của a .",
        "content_en": "Không có giá trị nào của a .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "a = \\pm . 4 3",
        "content_en": "a = \\pm . 4 3",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "a = \\pm3 .",
        "content_en": "a = \\pm3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "a = \\pm . 2",
        "content_en": "a = \\pm . 2",
        "is_correct": false
      }
    ],
    "solution_vi": "3 3\n Theo công thức cấp số cộng ta có: 2(2a 2 - 1) = (1 + 2a) + (-2a) \\Leftrightarrow a^2 = \\Leftrightarrowa=\\pm .\n 4 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-ly thuyet va tim cong thuc cua mot cap s-16",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ac3ff2c1bdc957",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong các dãy số sau đây, dãy số nào là một cấp số cộng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = n 2 + 1, n \\ge 1 .",
        "content_en": "un = n 2 + 1, n \\ge 1 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = 2n , n \\ge 1 .",
        "content_en": "un = 2n , n \\ge 1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = n + 1, n \\ge 1 .",
        "content_en": "un = n + 1, n \\ge 1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = 2n - 3, n \\ge 1",
        "content_en": "un = 2n - 3, n \\ge 1",
        "is_correct": true
      }
    ],
    "solution_vi": "Theo định nghĩa cấp số cộng ta có: un +1 = un + d \\Leftrightarrow un +1 - un = d , n \\ge 1, d = const\n Thử các đáp án ta thấy với dãy số: un = 2n - 3, n \\ge 1 thì:\n un = 2n - 3\n \n  \\Rightarrow un +1 - un = 2 = const\n u\n  n +1 = 2 ( n + 1) - 3 = 2 n - 1",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-ly thuyet va tim cong thuc cua mot cap s-19",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4e56c81fd84859",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Người ta trồng 3240 cây theo một hình tam giác như sau: hàng thứ nhất trồng 1 cây, hàng thứ hai trồng 2 cây, hàng thứ ba trồng 3 cây, …Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số cây mỗi hàng lập thành một cấp số cộng ( un ) có số hạng đầu là u1 = 1 .",
        "content_en": "Số cây mỗi hàng lập thành một cấp số cộng ( un ) có số hạng đầu là u1 = 1 .",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số cây mỗi hàng lập thành một cấp số cộng ( un ) có công sai là d = 2 .",
        "content_en": "Số cây mỗi hàng lập thành một cấp số cộng ( un ) có công sai là d = 2 .",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Có tất cả 80 hàng cây.",
        "content_en": "Có tất cả 80 hàng cây.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Hàng thứ 20 trồng được 40 cây.",
        "content_en": "Hàng thứ 20 trồng được 40 cây.",
        "is_correct": false
      }
    ],
    "solution_vi": "8 \n a) Đúng: Số cây mỗi hàng (bắt đầu từ hàng thứ nhất) lập thành một cấp số cộng ( un ) có\n u1 = 1, d = 1 .\n b) Sai: d = 1\n c) Đúng: Giả sử có n hàng cây thì u1 + u2 + + un = 3240 = S n .\n n ( n - 1)\n Ta có 3240 = Sn = nu1 + d \\Leftrightarrow n 2 + n - 6480 = 0 \\Leftrightarrow n = 80 .\n 2\n c) Sai: Số cây hàng thứ 20 trồng được là u20 = u1 + 19d = 20 .\n Vậy mệnh đề 1,3 đúng. Mệnh đề 2, 4 sai.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-ly thuyet va tim cong thuc cua mot -3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d0a464a0fb3f28",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Giá của một chiếc xe ô tô lúc mới mua là 680 triệu đồng. Cứ sau mỗi năm sử dụng, giá của chiếc xe ô tô giảm 50 triệu đồng. Gọi u n (triệu đồng) là giá của chiếc ô tô trong năm thứ n sử dụng. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "u2 = 630 .",
        "content_en": "u2 = 630 .",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Dãy số ( un ) là cấp số cộng với công sai d = 50 .",
        "content_en": "Dãy số ( un ) là cấp số cộng với công sai d = 50 .",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Giá của chiếc ô tô sau 3 năm sử dụng lớn hơn 500 triệu đồng.",
        "content_en": "Giá của chiếc ô tô sau 3 năm sử dụng lớn hơn 500 triệu đồng.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Sau ít nhất 8 năm sử dụng thì giá của chiếc ô tô nhỏ hơn một nửa giá trị ban đầu của nó.",
        "content_en": "Sau ít nhất 8 năm sử dụng thì giá của chiếc ô tô nhỏ hơn một nửa giá trị ban đầu của nó.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Giá của chiếc ô tô trong năm thứ 2 là: u2 = 680 - 50 = 630 triệu đồng.\n b) Sai: Dãy số ( un ) là cấp số cộng với công sai d = -50 .\n c) Đúng: Giá của chiếc ô tô sau 3 năm sử dụng: u4 = u1 + 3d = 680 - 3.50 = 530 triệu đồng.\n d) Sai: Ta có: un < 340 \\Leftrightarrow u1 + ( n - 1) d < 340\n \\Leftrightarrow 680 + ( n - 1) .( -50 ) < 340 \\Leftrightarrow -50n + 730 < 340 \\Leftrightarrow n > 7,8\n Suy ra đến năm thứ 8 thì giá trị của chiếc xe nhỏ hơn một nửa giá trị ban đầu của nó.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:S",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-ly thuyet va tim cong thuc cua mot -4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-619d0751155cca",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Chiều cao (đơn vị: centimét) của một đứa trẻ n tuổi phát triển bình thường được cho bởi công\n thức: xn = 75 + 5 ( n - 1) .\n Một đứa trẻ phát triển bình thường có chiều cao năm 3 tuổi là bao nhiêu centimét?\n b) Dãy số ( xn ) có là một cấp số cộng không? Trung bình một năm, chiều cao mỗi đứa trẻ phát\n triển bình thường tăng lên bao nhiêu centimét?",
    "question_en": "",
    "options": [],
    "solution_vi": "Chiều cao 3 năm tuổi của một đứa bé phát triển bình thường là: x3 = 75 + 5 ( 3 - 1) = 85 ( cm )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-ly thuyet va tim cong thuc cua mot -1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-842216412f5a45",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Chiều cao (đơn vị: centimét) của một đứa trẻ n tuổi phát triển bình thường được cho bởi công\n thức: xn = 75 + 5 ( n - 1) .\n Dãy số ( xn ) có là một cấp số cộng không? Trung bình một năm, chiều cao mỗi đứa trẻ phát\n triển bình thường tăng lên bao nhiêu centimét?",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có: xn +1 = 75 + 5 ( n + 1 - 1) = 75 + 5n\n Xét hiệu xn +1 - xn = 75 + 5n - 75 + 5 ( n - 1)  = 5\n Do đó ( xn ) là một cấp số cộng có số hạng đầu x1 = 75 và công sai d = 5 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-ly thuyet va tim cong thuc cua mot -2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b99ea0faffd5e5",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Giá của một chiếc xe ô tô lúc mới mua là 680 triệu đồng. Cứ sau mối năm sử dụng, giá của chiếc\n xe ô tô giảm 55 triệu đồng. Tính giá còn lại của chiếc xe sau 5 năm sử dụng.",
    "question_en": "",
    "options": [],
    "solution_vi": "Giá của chiếc xe sau n năm là: un = 680 - 55 ( n - 1)\n Vậy sau 5 năm sử dụng giá của chiếc xe là: u5 = 680 - 55 ( 5 - 1) = 460 (triệu đồng)\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-ly thuyet va tim cong thuc cua mot -5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-38580860a468a1",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xác định số hàng đầu u1 và công sai d của cấp số cộng ( un ) có u9 = 5u2 và u13 = 2u6 + 5 .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u1 = 3 và d = 4 .",
        "content_en": "u1 = 3 và d = 4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u1 = 3 và d = 5 .",
        "content_en": "u1 = 3 và d = 5 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u1 = 4 và d = 5 .",
        "content_en": "u1 = 4 và d = 5 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u1 = 4 và d = 3 .",
        "content_en": "u1 = 4 và d = 3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u1 + 8d = 5 ( u1 + d )\n Ta có: un = u1 + ( n - 1) d . Theo đầu bài ta có hệ phương trình: \n u1 + 12d = 2 ( u1 + 5d ) + 5\n 4u1 - 3d = 0 u = 3\n \\Leftrightarrow \\Leftrightarrow 1 .\n u1 - 2d = -5 d = 4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0544e744ac9039",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho ( un ) là một cấp số cộng thỏa mãn u1 + u3 = 8 và u4 = 10 . Công sai của cấp số cộng đã cho bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6 .",
        "content_en": "6 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u1 + u3 = 8 u1 + u1 + 2d = 8 2u1 + 2d = 8 u = 1\n Ta có  \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow 1 .\n u4 = 10 u1 + 3d = 10 u1 + 3d = 10 d = 3\n Vậy công sai của cấp số cộng là d = 3 .\n2 \n \n u - u + u = 7",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ed2f4f7eae9d8c",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cấp số cộng ( un ) có số hạng đầu u1 = 3 , công sai d = -2 thì số hạng thứ 5 là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u5 = 8 .",
        "content_en": "u5 = 8 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u5 = 1 .",
        "content_en": "u5 = 1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u5 = -5 .",
        "content_en": "u5 = -5 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u5 = -7 .",
        "content_en": "u5 = -7 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: u5 = u1 + 4d = 3 + 4.( -2 ) = -5 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-bdfdbd8775c39c",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng có u1 = -3 , d = 4 . Chọn khẳng định đúng trong các khẳng định sau?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u5 = 15 .",
        "content_en": "u5 = 15 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u4 = 8 .",
        "content_en": "u4 = 8 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u3 = 5 .",
        "content_en": "u3 = 5 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u2 = 2 .",
        "content_en": "u2 = 2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u3 = u1 + 2d = -3 + 2.4 = 5 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-dfc0ecd55a2658",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u1 = 11 và công sai d = 4 . Hãy tính u99 .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "401 .",
        "content_en": "401 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "403 .",
        "content_en": "403 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "402 .",
        "content_en": "402 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "404 .",
        "content_en": "404 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có : u99 = u1 + 98d = 11 + 98.4 = 403 .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3cc3dd280ae707",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) , biết: u1 = 3 , u2 = -1 . Chọn đáp án đúng.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u3 = 4 .",
        "content_en": "u3 = 4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u3 = 7 .",
        "content_en": "u3 = 7 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u3 = 2 .",
        "content_en": "u3 = 2 .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "u3 = -5 .",
        "content_en": "u3 = -5 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có ( un ) là cấp số cộng nên 2u2 = u1 + u3 suy ra u3 = 2u2 - u1 = -5 .",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -7",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d1781ec5badcad",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một cấp số cộng ( un ) có u13 = 8 và d = -3 . Tìm số hạng thứ ba của cấp số cộng ( un ) .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "50 .",
        "content_en": "50 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "28 .",
        "content_en": "28 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "38 .",
        "content_en": "38 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "44",
        "content_en": "44",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: u13 = u1 + 12d \\Leftrightarrow 8 = u1 + 12.( -3) \\Rightarrow u1 = 44 \\Rightarrow u3 = u1 + 2d = 44 - 6 = 38 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-551b09e4c03018",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có số hạng đầu u1 = 3 và công sai d = 2 . Giá trị của u 7 bằng:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "15 .",
        "content_en": "15 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "17 .",
        "content_en": "17 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "19 .",
        "content_en": "19 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "13 .",
        "content_en": "13 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u7 = u1 + 6.d = 3 + 6.2 = 15 .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -9",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c44d360b46eaef",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có số hạng đầu u1 = 2 và công sai d = 4 . Giá trị u2019 bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8074 .",
        "content_en": "8074 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "4074 .",
        "content_en": "4074 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8078 .",
        "content_en": "8078 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4078 .",
        "content_en": "4078 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Áp dụng công thức của số hạng tổng quát un = u1 + ( n - 1) d = 2 + 2018.4 = 8074 .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -10",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0e228afa5b9a68",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm số hạng thứ 11 của cấp số cộng có số hạng đầu bằng 3 và công sai d = -2 .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "-21 .",
        "content_en": "-21 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "23 .",
        "content_en": "23 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-19 .",
        "content_en": "-19 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-17 .",
        "content_en": "-17 .",
        "is_correct": true
      }
    ],
    "solution_vi": "Áp dụng công thức số hạng tổng quát của cấp số cộng ta có u11 = u1 + 10d = 3 + 10.( -2 ) = -17 .",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -11",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2f49b348cdac68",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có số hạng đầu u1 = -2 và công sai d = -7. Giá trị u 6 bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "37 .",
        "content_en": "37 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-37 .",
        "content_en": "-37 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-33 .",
        "content_en": "-33 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "33 .",
        "content_en": "33 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u6 = u1 + 5d = -2 - 35 = -37 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -12",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0aa31e7a6e2e47",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) với số hạng đầu tiên u1 = 2 và công sai d = 2 . Tìm u2018 ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u2018 = 22018 .",
        "content_en": "u2018 = 22018 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u2018 = 22017 .",
        "content_en": "u2018 = 22017 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u2018 = 4036 .",
        "content_en": "u2018 = 4036 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u2018 = 4038 .",
        "content_en": "u2018 = 4038 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: un = u1 + ( n - 1) d \\Rightarrow u2018 = 2 + ( 2018 - 1) .2 = 4036 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -14",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-75df1160f3a892",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u1 = 3 và công sai d = 7 . Hỏi kể từ số hạng thứ mấy trở đi thì các số hạng của ( un ) đều lớn hơn 2018 ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "287 .",
        "content_en": "287 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "289 .",
        "content_en": "289 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "288 .",
        "content_en": "288 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "286 .",
        "content_en": "286 .",
        "is_correct": false
      }
    ],
    "solution_vi": "2022\n Ta có: un = u1 + ( n - 1) d = 3 + 7 ( n - 1) = 7 n - 4 ; un > 2018 \\Leftrightarrow 7 n - 4 > 2018 \\Leftrightarrow n > .\n 7\n Vậy n = 289 .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -15",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-506ed7bfa48c7f",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Viết ba số xen giữa 2 và 22 để ta được một cấp số cộng có 5 số hạng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "6 , 12 , 18 .",
        "content_en": "6 , 12 , 18 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "8 , 13 , 18 .",
        "content_en": "8 , 13 , 18 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "7 , 12 , 17 .",
        "content_en": "7 , 12 , 17 .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "6 , 10 , 14 .",
        "content_en": "6 , 10 , 14 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u1 = 2 u1 = 2\n Xem cấp số cộng cần tìm là ( un ) có:  suy ra:  .\n u5 = 22 d = 5\n4 \n Vậy cấp số cộng cần tìm là ( un ) : 2 , 7 , 12 , 17 , 22 .",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -16",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c2851336c43b83",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng có u1 = -2 và d = 4 . Chọn khẳng định đúng trong các khẳng định sau ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u4 = 8 .",
        "content_en": "u4 = 8 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u5 = 15 .",
        "content_en": "u5 = 15 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u2 = 3 .",
        "content_en": "u2 = 3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u3 = 6 .",
        "content_en": "u3 = 6 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: u1 = -2 và d = 4 suy ra u2 = u1 + d = -2 + 4 = 2\n u3 = u1 + 2d = -2 + 2.4 = 6 ; u4 = u1 + 3d = -2 + 3.4 = 10 ; u5 = u1 + 4d = -2 + 4.4 = 14",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -17",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-053dd68836cb50",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) với u1 = 2 ; d = 9 . Khi đó số 2018 là số hạng thứ mấy trong dãy?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "226 .",
        "content_en": "226 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "225 .",
        "content_en": "225 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "223 .",
        "content_en": "223 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "224 .",
        "content_en": "224 .",
        "is_correct": false
      }
    ],
    "solution_vi": "un = u1 + ( n - 1) d \\Leftrightarrow 2018 = 2 + ( n - 1) .9 \\Leftrightarrow n = 225 .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -18",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2a61464943416b",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng 1, 4,7,... . Số hạng thứ 100 của cấp số cộng là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "297 .",
        "content_en": "297 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "301 .",
        "content_en": "301 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "295 .",
        "content_en": "295 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "298 .",
        "content_en": "298 .",
        "is_correct": true
      }
    ],
    "solution_vi": "Cấp số cộng 1, 4,7,... . có số hạng đầu u1 = 1 và công sai d = 3 .\n Số hạng thứ 100 của cấp số cộng là: u100 = u1 + 99.d = 1 + 99.3 = 298 .",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -19",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-344525da8937e8",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) biết u1 = 3 , u8 = 24 thì u11 bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "30 .",
        "content_en": "30 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "33 .",
        "content_en": "33 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "32 .",
        "content_en": "32 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "28 .",
        "content_en": "28 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u8 - u1 24 - 3\n Ta có: u8 = u1 + 7d \\Rightarrow d = = = 3 ; u11 = u1 + 10d = 33 .\n 7 7",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -20",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-276ac59062a39e",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng có số hạng thứ 3 và số hạng thứ 7 lần lượt là 6 và -2. Tìm số hạng thứ 5.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u5 = 2.",
        "content_en": "u5 = 2.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u5 = -2.",
        "content_en": "u5 = -2.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u5 = 0.",
        "content_en": "u5 = 0.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u5 = 4.",
        "content_en": "u5 = 4.",
        "is_correct": false
      }
    ],
    "solution_vi": "u3 = 6 u1 + 2d = 6 d = -2\n \n Theo giả thiết ta có u = -2 \\Leftrightarrow  \\Leftrightarrow  . Vậy u5 = 2 .\n  7 u1 + 6d = -2 u1 = 10",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -21",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4fc0373ed75e96",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) , biết u2 = 3 và u4 = 7 . Giá trị của u15 bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "27 .",
        "content_en": "27 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "31 .",
        "content_en": "31 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "35 .",
        "content_en": "35 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "29 .",
        "content_en": "29 .",
        "is_correct": true
      }
    ],
    "solution_vi": "u1 + d = 3 u = 1\n Từ giả thiết u2 = 3 và u4 = 7 suy ra ta có hệ phương trình:  \\Rightarrow 1 .\n u1 + 3d = 7 d = 2\n Vậy u15 = u1 + 14d = 29 .",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -22",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-457218c88eafc7",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u1 = 123 và u3 - u15 = 84 . Số 11 là số hạng thứ bao nhiêu của cấp số cộng đã cho?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "17.",
        "content_en": "17.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "16.",
        "content_en": "16.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "18.",
        "content_en": "18.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "19.",
        "content_en": "19.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: u3 - u15 = 84 \\Leftrightarrow u1 + 2d - ( u1 + 14d ) = 84 \\Leftrightarrow d = -7 .\n Số hạng tổng quát: un = -7 n + 130 .\n Ta có: un = 11 \\Leftrightarrow n = 17 .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -23",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5928ec5346b2c7",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng (un ) biết u1 = -1; d = 2; un = 43 . Hỏi cấp số cộng đó có bao nhiêu số hạng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "20.",
        "content_en": "20.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "23.",
        "content_en": "23.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "22.",
        "content_en": "22.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "21.",
        "content_en": "21.",
        "is_correct": false
      }
    ],
    "solution_vi": "un = u1 + (n - 1)d \\Leftrightarrow 43 = -1 + ( n - 1).2 \\Leftrightarrow n = 23 .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -24",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6f6f9641cdc389",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có số hạng đầu là u2 = 1 , u5 = 19 . Số 103 là số hạng thứ mấy trong cấp số cộng đã cho?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "19 .",
        "content_en": "19 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "18 .",
        "content_en": "18 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "20 .",
        "content_en": "20 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "17 .",
        "content_en": "17 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u2 = 1 u1 + d = 1 u = -5\n Ta có  \\Leftrightarrow \\Leftrightarrow 1 .\n u5 = 19 u1 + 4d = 19 d = 6\n Lại có un = u1 + ( n - 1) d \\Leftrightarrow 103 = -5 + ( n - 1) 6 \\Leftrightarrow n = 19 .\n Vậy số 103 là số hạng thứ 19 trong cấp số cộng đã cho.",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -25",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a728df64a80553",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u1 = 5 và công sai d = -3 . Biết rằng -289 là một số hạng của cấp số cộng trên. Hỏi đó là số hạng thứ bao nhiêu?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "98 .",
        "content_en": "98 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "99 .",
        "content_en": "99 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "101 .",
        "content_en": "101 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "100 .",
        "content_en": "100 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Số hạng tổng quát của cấp số cộng có u1 = 5 và công sai d = -3 là un = 5 - 3 ( n - 1) , n \\in \n .\n Ta có -289 = 5 - 3 ( n - 1) \\Leftrightarrow -294 = -3 ( n - 1) \\Leftrightarrow 98 = n - 1 \\Leftrightarrow n = 99 .\n Vậy -289 là số hạng thứ 99 của cấp số cộng trên.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -26",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6068694652c347",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u2 = 2001 và u5 = 1995 . Khi đó u1001 bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4005 .",
        "content_en": "4005 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4003 .",
        "content_en": "4003 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi u1 và d lần lượt là số hạng đầu tiên và công sai của cấp số công.\n u2 = 2001 u1 + d = 2001 u = 2003\n Ta có:  \\Leftrightarrow \\Leftrightarrow 1 . Vậy u1001 = u1 + 1000d = 3 .\n  5\n u = 1995  1\n u + 4 d = 1995  d = -2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -27",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-44b65fa75503a3",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một cấp số cộng có số hạng đầu u1 = 2018 công sai d = -5 . Hỏi bắt đầu từ số hạng nào của cấp số cộng đó thì nó nhận giá trị âm.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u406 .",
        "content_en": "u406 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u403 .",
        "content_en": "u403 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u405 .",
        "content_en": "u405 .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "u404 . 6",
        "content_en": "u404 . 6",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un = u1 + ( n - 1) d = 2018 - 5 ( n - 1)\n 2023\n Có un < 0 \\Leftrightarrow 2018 - 5 ( n - 1) < 0 \\Leftrightarrow 5n > 2023 \\Leftrightarrow n > , n\\in \\Rightarrow n \\ge 405 .\n 5\n Vậy từ u405 thì số hạng của cấp số cộng đó nhận giá trị âm.\n u1 - 2u5 + u6 = -15",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -28",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a6f208da9fa009",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng u n có công sai d = 2 và biểu thức u22 + u32 + u42 đạt giá trị nhỏ nhất. Số 2018 là số hạng thứ bao nhiêu của cấp số cộng u n ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1011 .",
        "content_en": "1011 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1014 .",
        "content_en": "1014 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1013 .",
        "content_en": "1013 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1012 .",
        "content_en": "1012 .",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có:\n u2 = u1 + 2\n \n u3 = u1 + 4 \\Rightarrow u2 + u3 + u4 = ( u1 + 2 ) + ( u1 + 4 ) + ( u1 + 6 ) = 3u1 + 24u1 + 56 = 3 ( u1 + 4 ) + 8 \\ge 8\n 2 2 2 2 2 2 2 2\n u = u + 6\n  4 1\n Vậy u22 + u32 + u42 đạt giá trị nhỏ nhất khi u1 = -4 .\n Từ đó suy ra 2018 = u1 + ( n - 1) d \\Leftrightarrow 2018 = -4 + ( n - 1) 2 \\Leftrightarrow n = 1012.",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -32",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7396668a91fca9",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) , biết u1 = -5 , d = 2 . Số 81 là số hạng thứ bao nhiêu?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "100 .",
        "content_en": "100 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "50 .",
        "content_en": "50 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "75 .",
        "content_en": "75 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "44 .",
        "content_en": "44 .",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có un = u1 + ( n - 1) d \\Leftrightarrow 81 = -5 + ( n - 1) 2 \\Leftrightarrow n = 44 .\n Vậy 81 là số hạng thứ 44 .",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -33",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-05dc5f5933778d",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một cấp số cộng ( un ) có u9 = 47 , công sai d = 5 . Số 10092 là số hạng thứ mấy trong cấp số cộng đó?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2018 .",
        "content_en": "2018 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "2017 .",
        "content_en": "2017 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2016 .",
        "content_en": "2016 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2019 .",
        "content_en": "2019 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u9 = u1 + 8d \\Rightarrow u1 = 7 .\n Gọi 10092 là số hạng thứ n trong khai triển, ta có:\n 10092 - 7\n 10092 = u1 + ( n - 1) d \\Rightarrow n = + 1 = 2018 .\n 5",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -34",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-742eaf7c4e64da",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hai cấp số cộng ( xn ) : 4 , 7 , 10 ,… và ( yn ) : 1 , 6 , 11 ,…. Hỏi trong 2018 số hạng đầu tiên của mỗi cấp số có bao nhiêu số hạng chung?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "404 .",
        "content_en": "404 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "673 .",
        "content_en": "673 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "403 .",
        "content_en": "403 .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "672 .",
        "content_en": "672 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Số hạng tổng quát của cấp số cộng ( xn ) là: xn = 4 + ( n - 1) .3 = 3n + 1 .\n Số hạng tổng quát của cấp số cộng ( yn ) là: ym = 1 + ( m - 1) .5 = 5m - 4 .\n Giả sử k là 1 số hạng chung của hai cấp số cộng trong 2018 số hạng đầu tiên của mỗi cấp số.\n Vì k là 1 số hạng của cấp số cộng ( xn ) nên k = 3i + 1 với 1 \\le i \\le 2018 và i \\in *\n .\n Vì k là 1 số hạng của cấp số cộng ( yn ) nên k = 5 j - 4 với 1 \\le j \\le 2018 và j \\in *\n .\n Do đó 3i + 1 = 5 j - 4 \\Rightarrow 3i = 5 j - 5 \\Rightarrow i 5 \\Rightarrow i \\in {5;10;15;...;2015} \\Rightarrow có 403 số hạng chung.",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-6-xac dinh so hang va cong sai cua cap so -35",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-69e9f29b3bf84d",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u1 = 5 và d = -7 . Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "u11 = -65",
        "content_en": "u11 = -65",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "u5 + u7 = -50",
        "content_en": "u5 + u7 = -50",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số -849 là số hạng thứ 123 của cấp số cộng",
        "content_en": "Số -849 là số hạng thứ 123 của cấp số cộng",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Số -114 là số hạng thứ 18 của cấp số cộng",
        "content_en": "Số -114 là số hạng thứ 18 của cấp số cộng",
        "is_correct": true
      }
    ],
    "solution_vi": "Số hạng tổng quát của cấp số cộng là: un = u1 + ( n - 1) d = 5 + ( n - 1) .( -7 ) = -7 n + 12\n a) Đúng: Ta có: u11 = -7.11 + 12 = -65 .\n b) Sai: u5 + u7 = -60\n c) Đúng: Ta có: -849 = -7 n + 12 \\Rightarrow n = 123 .\n d) Đúng: Ta có -114 = -7 n + 12 \\Rightarrow n = 18\n u - u + u = 15",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:Đ",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-6-xac dinh so hang va cong sai cua ca-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-57ff7f187bb184",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hai số -3 và 23. Xen kẽ giữa hai số đã cho n số hạng để tất cả các số đó tạo thành cấp số\n cộng có công sai d = 2. Tìm n .",
    "question_en": "",
    "options": [],
    "solution_vi": "Theo giả thiết thì ta được một cấp số cộng có n + 2 số hạng với u1 = -3, un + 2 = 23.\n un + 2 - u1 23 - ( -3)\n Khi đó un + 2 = u1 + ( n + 1) d \\Leftrightarrow n + 1 = = = 13 \\Leftrightarrow n = 12\n d 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-xac dinh so hang va cong sai cua ca-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c8a72cca891cfc",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Biết các số Cn1 ; Cn2 ; Cn3 theo thứ tự lập thành một cấp số cộng với n > 3. Tìm n.",
    "question_en": "",
    "options": [],
    "solution_vi": "Ba số Cn1 ; Cn2 ; Cn3 theo thứ tự u1 , u2 , u3 lập thành cấp số cộng nên\n u1 + u3 = 2u2 \\Leftrightarrow Cn1 + Cn3 = 2Cn2 ( n \\ge 3) \\Leftrightarrow n +\n ( n - 2 )( n - 1) n = 2. ( n - 1) n\n 6 2\n n 2 - 3n + 2 n = 2\n \\Leftrightarrow 1+ = n - 1 \\Leftrightarrow n 2 - 9n + 14 \\Leftrightarrow  \\Leftrightarrow n = 7 ( n \\ge 3) .\n 6 n = 7\n Nhận xét: Nếu uk -1 , uk , uk +1 là ba số hạng liên tiếp của một cấp số cộng thì ta có uk -1 + uk +1 = 2uk .\n10",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-xac dinh so hang va cong sai cua ca-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1423798a5e343e",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) có u2 = 2001 và u5 = 1995 . Khi đó u1001 bằng:",
    "question_en": "",
    "options": [],
    "solution_vi": "2001 = u2 = u1 + d u = 2003\n  \\Leftrightarrow 1 ⎯⎯\n → u1001 = u1 + 1000d = 3\n 1995 = u5 = u1 + 4d d = -2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-xac dinh so hang va cong sai cua ca-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-72ece2900e94f0",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Ba góc A, B, C ( A < B < C ) của tam giác tạo thành cấp số cộng, biết góc lớn nhất gấp đôi góc bé\n nhất. Hiệu số đo độ của góc lớn nhất với góc nhỏ nhất bằng:",
    "question_en": "",
    "options": [],
    "solution_vi": "Ba góc A, B, C của một tam giác theo thứ tự đó lập thành cấp số cộng thỏa yêu cầu, thì\n C = 2 A, C + A = 2 B . Ta có\n  A + B + C = 1800 3B = 1800  B = 600  A = 400\n    \n  A + C = 2B \\Leftrightarrow  A + C = 2 B \\Leftrightarrow  A + C = 1200 ⎯⎯\n →  B = 600 ⎯⎯\n → C - A = 400 .\n C = 2 A C = 2 A C = 2 A C = 800\n    ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-xac dinh so hang va cong sai cua ca-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-10efb9cca3ad2b",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho biết bốn số 5; x;15; y theo thứ tự lập thành một cấp số cộng. Tính giá trị của biểu thức\n 3x + 2 y .",
    "question_en": "",
    "options": [],
    "solution_vi": " 5 + 15\n  x = 2  x = 10\n Theo tính chất của cấp số cộng, ta có:  \\Leftrightarrow .\n  x + y = 15  y = 20\n  2\n Vậy 3 x + 2 y = 70 .\n u + u4 + u6 = 36",
    "solution_en": "",
    "correct_answer": "70",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-xac dinh so hang va cong sai cua ca-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e6f2e8b140ed9a",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho bốn số thực tạo thành một cấp số cộng có tổng bằng 28 và tổng các bình phương của chúng\n bằng 276. Tìm tích của bốn số đó.",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi bốn số cần tìm theo thứ tự cấp số cộng là: a - 3r , a - r , a + r , a + 3r .\n a - 3r + a - r + a + r + a + 3r = 28 4a = 28\n Ta có:  \\Leftrightarrow 2\n (a - 3r ) + (a - r ) + (a + r ) + (a + 3r ) = 276 4a + 20r = 276\n 2 2 2 2 2\n a = 7 a = 7\n \\Leftrightarrow 2 \\Leftrightarrow .\n r = 4 r = \\pm2\n Vậy bốn số cần tìm là 1,5,9,13 ; tích của chúng bằng 585",
    "solution_en": "",
    "correct_answer": "585",
    "math_skill": "Cấp số cộng",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-6-xac dinh so hang va cong sai cua ca-7",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9de360d914ec55",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho các dãy số sau. Dãy số nào không là dãy số tăng? 1 3",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1;1;1;1;... .",
        "content_en": "1;1;1;1;... .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "1;3;5;7;... .",
        "content_en": "1;3;5;7;... .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2;4;6;8;... .",
        "content_en": "2;4;6;8;... .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": ";1; ;2;... 2 2",
        "content_en": ";1; ;2;... 2 2",
        "is_correct": false
      }
    ],
    "solution_vi": "Xét đáp án A ta có dãy 1;1;1;1;... là dãy hằng nên không tăng không giảm.",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-xet tinh tang giam cua day so-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c67316ef1ba259",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) biết un = 5n + 2 . Mệnh đề nào sau đây đúng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Dãy số tăng",
        "content_en": "Dãy số tăng",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Dãy số giảm",
        "content_en": "Dãy số giảm",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Dãy số không tăng, không giảm",
        "content_en": "Dãy số không tăng, không giảm",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Dãy số vừa tăng vừa giảm",
        "content_en": "Dãy số vừa tăng vừa giảm",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un +1 - un = 5 ( n + 1) + 2 - 5n + 2 = 5n + 7 - 5n + 2 > 0 \\Leftrightarrow un +1 > un\n 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-xet tinh tang giam cua day so-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3425ed4303a341",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) biết un = 2n 2 + 3n + 1 . Mệnh đề nào sau đây đúng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Dãy số tăng",
        "content_en": "Dãy số tăng",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Dãy số giảm",
        "content_en": "Dãy số giảm",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Dãy số không tăng, không giảm",
        "content_en": "Dãy số không tăng, không giảm",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Dãy số vừa tăng vừa giảm",
        "content_en": "Dãy số vừa tăng vừa giảm",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un +1 - un = 2 ( n + 1) + 3 ( n + 1) + 1 - 2n 2 - 3n - 1 = 4n + 5 > 0, n \\in\n 2 *\n Vậy un +1 - un < 0 \\Leftrightarrow un +1 < un , n \\in *\n Cho dãy số ( un ) biết un = ( -1) ( n 2 + 1) . Mệnh đề nào sau đây đúng?\n n",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-xet tinh tang giam cua day so-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-491c4645a7bde9",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) biết un = 2n - an . Tìm tất cả các giá trị của a để dãy số tăng.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "a = 2",
        "content_en": "a = 2",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "a > 2",
        "content_en": "a > 2",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "a < 2",
        "content_en": "a < 2",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "a \\ge 2",
        "content_en": "a \\ge 2",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un +1 - un = 2n +1 - an - a - 2n + an = 2n - a, n \\in *\n Để dãy số tăng thì un +1 - un = 2n - a > 0, n \\in *\n \\Leftrightarrow a < 2n , n \\in *\n \\Leftrightarrow a < 2, n \\in *\n 3n",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-xet tinh tang giam cua day so-13",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6e6be75ee31ab9",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong các dãy số dưới đây, dãy số nào là dãy giảm? 1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = n 2 .",
        "content_en": "un = n 2 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = - 3 .",
        "content_en": "un = - 3 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "un = 3n .",
        "content_en": "un = 3n .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = n3 - 2 . n",
        "content_en": "un = n3 - 2 . n",
        "is_correct": false
      }
    ],
    "solution_vi": "Xét đáp án A, ta có un +1 - un = ( n + 1) - n 2 = 2n + 1 > 0, n \\in\n 2 *\n nên dãy này là dãy tăng.\n 1 1 -1\n Xét đáp án B, ta có un +1 - un = - = < 0, n \\in *\n nên dãy này là dãy giảm.\n n + 1 n n ( n + 1)\n Xét đáp án C, ta có un +1 - un = 3 ( n + 1) - 3n = 3 > 0, n \\in *\n nên dãy này là dãy tăng.\n10 \n Xét đáp án D, ta có un +1 - un = ( n + 1) - n3 > 0, n \\in\n 3 *\n nên dãy này là dãy tăng.",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-xet tinh tang giam cua day so-24",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a124c9be9cec1f",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( an ) với an = (k \\in ) . Tìm giá trị nguyên k lớn nhất để dãy đã cho là dãy số\n kn + 7\n tăng?",
    "question_en": "",
    "options": [],
    "solution_vi": "7n + 5 7 ( n + 1) + 5 7n + 12\n Ta có: an = và an +1 = = .\n kn + 7 k ( n + 1) + 7 kn + k + 7\n 7n + 12 7n + 5 -5k + 49\n Khi đó ta có: an +1 - ak = - =\n kn + k + 7 kn + 7 ( kn + k + 7 )( kn + 7 )\n -5k + 49 49\n Để dãy số tăng khi và chỉ khi an +1 - ak > 0, k \\in \\Leftrightarrow >0\\Leftrightarrowk <\n ( kn + k + 7 )( kn + 7 ) 5\n Vậy số nguyên là lớn nhất là k = 9\n u = 1; u2 = 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-5-xet tinh tang giam cua day so-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-027fa3a4346560",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Vào đầu mỗi tháng, ông An đều gửi vào ngân hàng số tiền cố định 30 triệu đồng theo hình thức\n lãi kép với lãi suất 0,6% /tháng. Tính số tiền ông An có được sau tháng sau tháng thứ hai",
    "question_en": "",
    "options": [],
    "solution_vi": "Số tiền ông An có được:\n 0,6  0,6 \n Sau tháng thứ nhất là: T1 = 30 + 30 = 30 1 +  = 30,18 (triệu đồng).\n 100  100 \n  0,6    0,6   0,6\n Sau tháng thứ hai: T2 = 30 + 30 1 +  + 30 + 30 1 + \n  100    100   100\n   0,6    0,6 \n 2\n  0,6   0,6 \n = 30 + 30 1 +   1 +  = 30 1 +  + 30 1 + \n   100    100   100   100 \n  60,54 (triệu đồng)",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-5-xet tinh tang giam cua day so-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-860a816362c5c8",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Giá của một chiếc máy photocopy lúc mới mua là 50 triệu đồng. Biết rằng giá trị của nó sau mỗi\n năm sử dụng chỉ còn 75% giá trị trong năm liền trước đó. Tính giá trị còn lại của chiếc máy\n photocopy đó sau mỗi năm, trong khoảng thời gian 5 năm kể từ khi mua.",
    "question_en": "",
    "options": [],
    "solution_vi": "Giá trị của máy photocopy sau 1 năm sử dụng là\n T1 = 50 75% = 37,5 ( triệu đồng )\n Giá trị của máy photocopy sau 2 năm sử dụng là\n T2 = T1 75% = 28,125 ( triệu đồng )\n Giá trị của máy photocopy sau 3 năm sử dụng là\n T3 = T2 75% = 21,0938 ( triệu đồng )\n Giá trị của máy photocopy sau 4 năm sử dụng là\n T4 = T3 75% = 15,8203 ( triệu đồng )\n Giá trị của máy photocopy sau 5 năm sử dụng là\n T5 = T4 75% = 11,8652 ( triệu đồng )\n18 \n Chú ý. Tổng quát, giá trị của máy photocopy sau n năm sử dụng là\n Tn = T1 (0,75) n -1 ( triệu đồng )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-5-xet tinh tang giam cua day so-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7a78d59961429c",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Nếu tỉ lệ lạm phát là 3,5% mỗi năm và giá trung bình của một căn hộ chung cư mới tại thời điểm\n hiện tại là 2,5 tỉ đồng thì giá trung bình của một căn họ chung cư mới sau n năm nữa được cho\n bởi công thức An = 2,5 (1,035) n ( tỉ đồng)",
    "question_en": "",
    "options": [],
    "solution_vi": "Giá trung bình của một căn hộ chung cư mới sau 5 năm là\n A5 = 2,5 (1,035)5 = 2,9692 ( tỉ đồng )\n Tìm giá trung bình của một căn hộ chung cư mới sau 5 năm nữa.\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-5-xet tinh tang giam cua day so-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f1921f0bb3d21e",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xét tính bị chặn của các dãy số sau: un = 3n - 1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Bị chặn.",
        "content_en": "Bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Bị chặn trên.",
        "content_en": "Bị chặn trên.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Bị chặn dưới.",
        "content_en": "Bị chặn dưới.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Không bị chặn dưới.",
        "content_en": "Không bị chặn dưới.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un \\ge 2, n \\in *\n → Dãy bị chặn dưới\n Khi n tiến tới dương vô cực thì u n cũng tiến tới dương vô cực nên dãy số không bị chặn trên\n Vậy dãy đã cho bị chặn dưới",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-day so bi chan-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9e92a76f676112",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xét tính tăng, giảm và bị chặn của dãy số ( un ) , biết: un = 3n - 2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Dãy số tăng, bị chặn.",
        "content_en": "Dãy số tăng, bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Dãy số giảm, bị chặn.",
        "content_en": "Dãy số giảm, bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Dãy số không tăng không giảm, không bị chặn.",
        "content_en": "Dãy số không tăng không giảm, không bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Cả A, B, C đều sai.",
        "content_en": "Cả A, B, C đều sai.",
        "is_correct": false
      }
    ],
    "solution_vi": "4 \n 2n - 11 2n - 13 34\n Ta có: un +1 - un = - = > 0 với mọi n \\ge 1 .\n 3n + 1 3n - 2 ( 3n + 1)( 3n - 2 )\n 9\n Suy ra un +1 > un n \\ge 1 \\Rightarrow dãy ( un ) là dãy tăng \\Rightarrow dãy bị chặn dưới bởi u1 = - .\n 4\n 2 35 9 2\n Mặt khác: un = - \\Rightarrow - \\le un < n \\ge 1\n 3 3(3n - 2) 4 3\n Vậy dãy ( un ) là dãy bị chặn.\n n +1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-day so bi chan-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3787b596c9720e",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xét tính bị chặn của các dãy số sau: un = 4 - 3n - n 2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Bị chặn.",
        "content_en": "Bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Không bị chặn.",
        "content_en": "Không bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Bị chặn trên.",
        "content_en": "Bị chặn trên.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Bị chặn dưới.",
        "content_en": "Bị chặn dưới.",
        "is_correct": false
      }
    ],
    "solution_vi": "2\n 25  3  25\n Ta có: un = -n +  < \\Rightarrow ( un ) bị chặn trên; dãy ( un ) không bị chặn dưới.\n 4  2 4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-day so bi chan-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1120aaf5cc9ce4",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xét tính tăng giảm và bị chặn của dãy số sau: ( un ) : un = n+2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Tăng, bị chặn.",
        "content_en": "Tăng, bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Giảm, bị chặn.",
        "content_en": "Giảm, bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Tăng, chặn dưới.",
        "content_en": "Tăng, chặn dưới.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Giảm, chặn trên.",
        "content_en": "Giảm, chặn trên.",
        "is_correct": false
      }
    ],
    "solution_vi": "n + 2 n + 1 ( n + 2 ) - ( n + 3)( n + 1)\n 2\n 1\n Ta có un +1 - un = - = = > 0, n .\n n+3 n+2 ( n + 2 )( n + 3) ( n + 2 )( n + 3)\n n +1 n + 2\n Và 0 < un = < = 1,n \\in *\n . Vậy dãy ( un ) là dãy tăng và bị chặn.\n n+2 n+2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-day so bi chan-11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-95e890a9803f0d",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xét tính tăng, giảm và bị chặn của dãy số ( un ) , biết: ( un ) : un = n3 + 2n + 1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Tăng, bị chặn.",
        "content_en": "Tăng, bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Giảm, bị chặn.",
        "content_en": "Giảm, bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Tăng, chặn dưới.",
        "content_en": "Tăng, chặn dưới.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Giảm, chặn trên.",
        "content_en": "Giảm, chặn trên.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: un +1 - un = (n + 1)3 + 2(n + 1) - n3 - 2n = 3n 2 + 3n + 3 > 0, n\n Mặt khác: un > 1, n và khi n càng lớn thì u n càng lớn.\n Vậy dãy ( un ) là dãy tăng và bị chặn dưới.\n 3n - 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-day so bi chan-12",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-90e0c7535de5bc",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) , biết un = cos n + sin n. Dãy số ( un ) bị chặn trên bởi số nào dưới đây?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0.",
        "content_en": "0.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1.",
        "content_en": "1.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Không bị chặn trên.",
        "content_en": "Không bị chặn trên.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un ⎯⎯⎯\n MTCT\n → u1 = sin1 + cos1 > 1 > 0 nên loại các đáp án A và B\n  \n Ta có un = cos n + sin n = 2 sin  n +  < 2\n  4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-day so bi chan-14",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2339e3805a1e9a",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) , biết un = cos n + sin n. Dãy số ( un ) bị chặn dưới bởi số nào dưới đây?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0.",
        "content_en": "0.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-1 .",
        "content_en": "-1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "- 2 .",
        "content_en": "- 2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Không bị chặn dưới.",
        "content_en": "Không bị chặn dưới.",
        "is_correct": false
      }
    ],
    "solution_vi": "un ⎯⎯⎯\n MTCT\n → u5 = sin 5 - cos5 < -1 < 0 ⎯⎯\n → loại A và B\n  \n Ta có un = 2 sin  n -  > - 2\n  4\n6 \n 1 1 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-day so bi chan-15",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-cd63c3ac4e6d3d",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) với un = 2 + 51- n . Kết luận nào sau đây là đúng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Dãy số không đơn điệu.",
        "content_en": "Dãy số không đơn điệu.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Dãy số giảm và không bị chặn.",
        "content_en": "Dãy số giảm và không bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Dãy số tăng.",
        "content_en": "Dãy số tăng.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Dãy số giảm và bị chặn.",
        "content_en": "Dãy số giảm và bị chặn.",
        "is_correct": false
      }
    ],
    "solution_vi": "8 \n Xét un +1 - un = ( 2 + 5- n ) - ( 2 + 51- n ) = 5- n - 51- n =\n 1 1 1 5 4\n n\n - n-1 = n - n = - n < 0, n \\in *\n .\n 5 5 5 5 5\n \\Rightarrow ( un ) là dãy số giảm.\n 5\n Ta có: un = 2 + 51- n > 2, n \\in *\n \\le 3, n \\in * \\Rightarrow ( un ) là dãy số bị chặn.\n ; un = 2 +\n n\n 5",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-day so bi chan-23",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5337e02ed49e26",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) biết un = + 2 + 2 + ... + 2 . Mệnh đề nào sau đây đúng ? 2 2 3 n",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Dãy số bị chặn dưới.",
        "content_en": "Dãy số bị chặn dưới.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Dãy số bị chặn trên.",
        "content_en": "Dãy số bị chặn trên.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Dãy số bị chặn.",
        "content_en": "Dãy số bị chặn.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Không bị chặn.",
        "content_en": "Không bị chặn.",
        "is_correct": false
      }
    ],
    "solution_vi": "1 1 1 1\n Xét < = - , k \\ge 2\n k 2\n ( k - 1) k k - 1 k\n 1  1 1 1 1 1 1 1  1 1 3 1 3\n Suy ra un < + 1 -  +  -  +  -  +  -  + ... +  - = - <\n 2  2  2 3  3 4  5 6  n -1 n  2 n 2\n 3\n \\Rightarrow 0 < un < , n \\in * . Vậy ( un ) bị chặn.\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-day so bi chan-26",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-70f0fddc7f6841",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xét tính đúng sai của các khẳng định sau đây:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Dãy số ( un ) với un = 1 + 31- n là dãy số bị chặn. ( -1) là dãy số tăng. n",
        "content_en": "Dãy số ( un ) với un = 1 + 31- n là dãy số bị chặn. ( -1) là dãy số tăng. n",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Dãy số ( un ) với un = 3n",
        "content_en": "Dãy số ( un ) với un = 3n",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Dãy số ( un ) với un = ( -1) 2n ( 2 + 1) là dãy số giảm. n",
        "content_en": "Dãy số ( un ) với un = ( -1) 2n ( 2 + 1) là dãy số giảm. n",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Dãy số ( un ) với un = 2n - 1 là dãy số không tăng không giảm.",
        "content_en": "Dãy số ( un ) với un = 2n - 1 là dãy số không tăng không giảm.",
        "is_correct": false
      }
    ],
    "solution_vi": "3 3\n a) Đúng: Ta có: un = 1 + 31- n = 1 +\n n\n > 1 n \\in * và un = 1 + 31- n = 1 + n \\le 2 n \\in *\n .\n 3 3\n Suy ra 1 < un \\le 2 n \\in *\n nên dãy số ( un ) bị chặn\n ( -1) \\Rightarrow u = - 1 ; u = 1 ; u = - 1 nên dãy số không phải là dãy số tăng,\n n\n b) Sai: u =n 1 2 3\n 3n 3 9 27\n c) Sai: un = ( -1)\n 2n\n ( 2 + 1) = 2 + 1 \\Rightarrow u = 3; u = 5; u = 9 nên dãy số không phải là dãy số giảm\n n n\n 1 2 3\n d) Sai: un = 2n - 1 \\Rightarrow un +1 = 2 ( n + 1) - 1 = 2n + 1\n Xét un +1 - un = 2n + 1 - ( 2n - 1) = 2 > 0 n \\in *\n \\Rightarrow ( un ) là dãy số tăng\n 2n - 1",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:S, d:S",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-11-5-day so bi chan-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ccc2653fc49bd7",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) , biết un = 3 cos n - sin n. Dãy số ( un ) bị chặn dưới và chặn trên lần lượt bởi\n các số m và M . Tính m + M",
    "question_en": "",
    "options": [],
    "solution_vi": " 3 1   \n Nhận xét: un = 2  sin n - cos n  = 2sin  n -  ⎯⎯\n →-2 \\le un \\le 2.\n  2 2  6\n  \n Vậy m = -2 ; M = 2 nên m + M = 0",
    "solution_en": "",
    "correct_answer": "0",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-5-day so bi chan-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d6e9eb25301c58",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) , biết un = sin n - cos n. Dãy số ( un ) bị chặn dưới bởi số nào?",
    "question_en": "",
    "options": [],
    "solution_vi": " \n Ta có un = 2 sin  n -  \\ge - 2\n  4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-5-day so bi chan-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-688d847afa8886",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Vi khuẩn E . Coli sinh sản thông qua một quá trình gọi là quá trình phân đôi. Vi khuẩn E . Coli\n phân chia làm đôi cứ sau 20 phút. Giả sử tốc độ phân chia này được duy trì trong 12 giờ kể tử\n khi vi khuẩn ban đầu xâm nhập vào cơ thể. Hỏi sau 12 giờ sẽ có bao nhiêu vi khuẩn E . Coli\n trong cơ thể? Giả sử có một nguồn dinh dưỡng vô hạn để vi khuẩn E . Coli duy trì tốc độ phân\n chia như cũ trong 48 giờ kể từ khi vi khuẩn ban đầu xâm nhập vào cơ thẻ. Hỏi sau 48 giờ sẽ có\n bao nhiêu vi khuẩn E . Coli trong cơ thể?",
    "question_en": "",
    "options": [],
    "solution_vi": "Giả sử ban đầu có 1 vi khuấn E . Coli.\n Sau 20 phút lần một, số vi khuẩn là 1.2 = 2 .\n Sau 20 phút lần hai, số vi khuẩn là 2.2 = 2 2 .\n Sau 20 phút lần ba, số vi khuẫn là 2 2.2 = 23 .\n Sau 20 phút lần bốn, số vi khuần là 23.2 = 2 4 .\n Tương tự như vậy sau 12 giờ (bằng 3.12 lần 20 phút) thì số vi khuẩn là\n 2312 = 236  6,87 1010 (con)\n Sau 48 giờ (bằng 3 48 = 144 lần 20 phút) thì số vi khuẩn là:\n 2144  2, 23 1043 (con).",
    "solution_en": "",
    "correct_answer": "3",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-5-day so bi chan-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-aa98d7fd094791",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số có các số hạng đầu là: -2;0;2;4;6;... .Số hạng tổng quát của dãy số này có dạng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = -2n .",
        "content_en": "un = -2n .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = ( -2 ) + n .",
        "content_en": "un = ( -2 ) + n .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = ( -2 ) (n + 1) .",
        "content_en": "un = ( -2 ) (n + 1) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = ( -2 ) + 2 ( n - 1) .",
        "content_en": "un = ( -2 ) + 2 ( n - 1) .",
        "is_correct": true
      }
    ],
    "solution_vi": "Dãy số là dãy số cách đều có khoảng cách là 2 và số hạng đầu tiên là ( -2 ) nên\n un = ( -2 ) + 2.( n - 1) .\n 1 1 1 1 1",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-ly thuyet va xac dinh so hang cua day so-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f479ae7395bca4",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) , biết un = n3 - 8n 2 - 5n + 7. Số -33 là số hạng thứ mấy của dãy số?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5.",
        "content_en": "5.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6.",
        "content_en": "6.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8.",
        "content_en": "8.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "9.",
        "content_en": "9.",
        "is_correct": false
      }
    ],
    "solution_vi": "n = 8 ( n )\n Ta có un = -33 \\Leftrightarrow n3 - 8n 2 - 5n + 7 = -33 ( n \\in *\n ) \\Leftrightarrow n - 8n - 5n + 40 = 0 \\Leftrightarrow n = \\pm 5 l\n 3 2\n  ()\n n 2 + 3n + 7",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-ly thuyet va xac dinh so hang cua day so-17",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-471c19e5ba6f08",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) với un = 2n. Tìm số hạng un +1.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un +1 = 2n.2.",
        "content_en": "un +1 = 2n.2.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un +1 = 2n + 1.",
        "content_en": "un +1 = 2n + 1.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "un +1 = 2 ( n + 1) .",
        "content_en": "un +1 = 2 ( n + 1) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un +1 = 2n + 2.",
        "content_en": "un +1 = 2n + 2.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un +1 = 2n +1 = 2.2n\n u = 2",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-ly thuyet va xac dinh so hang cua day so-19",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-979472e57b79a7",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hai cấp số cộng ( un ) :1;6;11;... và ( vn ) : 4;7;10;... Mỗi cấp số có 2018 số. Hỏi có bao nhiêu số có mặt trong cả hai dãy số trên.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "403 .",
        "content_en": "403 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "401 .",
        "content_en": "401 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "402 .",
        "content_en": "402 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "504 .",
        "content_en": "504 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Dãy ( un ) có số hạng tổng quát là un = 1 + 5 ( n - 1) = 5n - 4, (1 \\le n \\le 2018 ) .\n Dãy ( vm ) có số hạng tổng quát là vm = 4 + 3 ( m - 1) = 3m + 1, (1 \\le m \\le 2018 ) .\n 1 \\le m, n \\le 2018\n Một số có mặt trong cả hai dãy số trên nếu tồn ại m, n \\in thỏa mãn điều kiện: \n um = un (*)\n Ta có (*) \\Leftrightarrow 5n - 4 = 3m + 1 \\Leftrightarrow 5 ( n - 1) = 3m (**)\n Từ (**) suy ra m 5 , mặt khác 1 \\le m \\le 2018 nên ta được tập các giá trị của m là {5;10;...;2015}\n 3.2015\n Xét với m = 2015 thì n = + 1 = 1210 < 2018 , thỏa điều kiện 1 \\le n \\le 2018 .\n 5\n Do tập {5;10;...;2015} có 403 số nên có tất cả 403 số có mặt trong cả hai dãy đã cho.\n u1 = 3",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-ly thuyet va xac dinh so hang cua day so-24",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0d21d92b8d0d19",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) với un = 2n + 3 . Tìm số hạng thứ 6 của dãy số.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "17 .",
        "content_en": "17 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5 .",
        "content_en": "5 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "15 .",
        "content_en": "15 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "7 .",
        "content_en": "7 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có số hạng thứ 6 của dãy là u6 = 2.6 + 3 = 15 .\n n -1",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-11-5-ly thuyet va xac dinh so hang cua day so-34",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e2c2364f9fba23",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) có un = - n 2 + n + 1. Số -19 là số hạng thứ mấy của dãy?",
    "question_en": "",
    "options": [],
    "solution_vi": "Giả sử un = -19 , ( n \\in *\n ).\n n = 5\n Suy ra -n 2 + n + 1 = -19 \\Leftrightarrow - n 2 + n + 20 = 0 \\Leftrightarrow  .\n  n = -4 ( l )\n Vậy số -19 là số hạng thứ 5 của dãy.\n an + b",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-5-ly thuyet va xac dinh so hang cua d-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f0ccb05165e058",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một đôi thỏ cứ mỗi tháng đẻ được một đôi thỏ con; mỗi đôi thỏ con, khi tròn hai tháng tuổi, lại\n mỗi tháng đẻ ra một đôi thỏ con, và quá trình sinh nở cứ thế tiếp diễn. Hỏi sau một năm sẽ có tất\n cả bao nhiêu đôi thỏ, nếu đầu năm có một đôi thỏ sơ sinh? Giả sử thời gian trong năm này không\n có con thỏ nào chết.\n20",
    "question_en": "",
    "options": [],
    "solution_vi": "Số đôi thỏ tạo thành dãy Fibonacci, gọi u n là số đôi thỏ tại tháng thứ n ta có dãy số cho bởi\n u = u2 = 1\n công thức truy hồi sau  1\n un = un -1 + un - 2 , n \\ge 3\n Số lượng đôi thỏ là\n Vậy sau một năm có 144 đôi thỏ.\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-5-ly thuyet va xac dinh so hang cua d-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3213345202d2fa",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho hai véctơ a = (1; -2;1) và b = ( 2; -4; -2 ) . Khi đó a.b bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8.",
        "content_en": "8.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-8 .",
        "content_en": "-8 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "12.",
        "content_en": "12.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-12 .",
        "content_en": "-12 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: a.b = 1.2 + ( -2 ) .( -4 ) + 1.( -2 ) = 8 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-46244d92bf9821",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho u = (1;2;3) , v = ( 0; -1;1) . Tìm tọa độ của véctơ tích có hướng của hai véctơ u và v .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 5;1; -1) .",
        "content_en": "( 5;1; -1) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 5; -1; -1) .",
        "content_en": "( 5; -1; -1) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -1; -1; -1) .",
        "content_en": "( -1; -1; -1) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( -1; -1;5 ) .",
        "content_en": "( -1; -1;5 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: u, v  = ( 5; -1; -1) .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b16a195bb25711",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho a = ( -3; - 1;1) , b = ( 4;1;2 ) , c = (1;0; m + 2 ) . Tìm m để ba véc tơ a , b , c đồng phẳng.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -5 .",
        "content_en": "m = -5 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 5 .",
        "content_en": "m = 5 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = -1 .",
        "content_en": "m = -1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 1 .",
        "content_en": "m = 1 .",
        "is_correct": false
      }
    ],
    "solution_vi": " -1 1 1 -3 -3 -1 \n Ta có :  a, b  =  ; ;  = ( -3;10;1) .\n  1 2 2 4 4 1 \n Mà  a, b  .c = ( -3) .1 + 1.( m + 2 ) = m - 1 .\n Ba véc tơ a , b , c đồng phẳng \\Leftrightarrow  a, b  .c = 0 \\Leftrightarrow m - 1 = 0 \\Leftrightarrow m = 1 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-643ea811b11135",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ toạ độ Oxyz cho A (1; -2;0 ) ; B (1;0; -1) ; C ( 0; -1;2 ) và D ( 0;3; m ) . Giá trị của m thuộc khoảng nào sau đây để bốn điểm trên đồng phẳng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -2; -1)",
        "content_en": "( -2; -1)",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -1;1) .",
        "content_en": "( -1;1) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;2 ) .",
        "content_en": "(1;2 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 5;7 ) .",
        "content_en": "( 5;7 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = ( 0;2; -1) ; AC = ( -1;1;2 ) ; AD = ( -1;5; m )\n  AB; AC  = ( 5;1;2 )\n  \n A, B, C , D đồng phẳng \\Leftrightarrow  AB; AC  . AD = 0 \\Leftrightarrow 2m = 0 \\Leftrightarrow m = 0",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e98afe8837ce55",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho hai véc-tơ a = ( -1;3;2 ) , b = ( -3; -1;2 ) . Tính a b .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "10 .",
        "content_en": "10 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "a b = ( -1) ( -3) + 3 ( -1) + 2 2 = 4 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2010cd28906d19",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho hai vectơ u = ( -3;1; - 1) và v = (1;0;5 ) . Tích vô hướng của hai vectơ này bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "-8 .",
        "content_en": "-8 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "8 .",
        "content_en": "8 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-3 .",
        "content_en": "-3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tích vô hướng của hai vectơ u = ( -3;1; - 1) và v = (1;0;5 ) xác định bởi công thức:\n u.v = ( -3) .1 + 1.0 + ( -1) .5 = -8 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-9",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-dbf02cddd1aba4",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho hai vectơ u ( -1;3;2 ) và v ( -3; - 1;2 ) . Tích vô hướng của u.v bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "10 .",
        "content_en": "10 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u.v = 3 - 3 + 4 = 4 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-32d46c5c192ad1",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , Cho tam giác ABC với A (1;2;3) , B ( 0;1;4 ) và C ( 2;3; -2 ) . Tính diện tích S của tam giác ABC .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S = 2 2 .",
        "content_en": "S = 2 2 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S = 6 2 .",
        "content_en": "S = 6 2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S = 4 2 .",
        "content_en": "S = 4 2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S = 3 2 .",
        "content_en": "S = 3 2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = ( -1; -1;1) , AC = (1;1; -5 )\n 1\n  AB, AC  = 2 2 .\n Vậy SABC =\n 2 ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-12",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-995e4f2771ec24",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ trục tọa độ O xyz , cho hai vectơ a = ( 3; - 2; m ) , b = ( 2; m ; - 1) với m là tham số nhận giá trị thực. Tìm giá trị của m để hai vectơ a và b vuông góc với nhau.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = 1 .",
        "content_en": "m = 1 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 2 .",
        "content_en": "m = 2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = -1 .",
        "content_en": "m = -1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = -2 .",
        "content_en": "m = -2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Hai vectơ a và b vuông góc với nhau khi và chỉ khi a .b = 0 \\Leftrightarrow 3.2 + ( -2 ) .m + m. ( -1) = 0\n \\Leftrightarrow 6 - 3m = 0 \\Leftrightarrow m = 2 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-14",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b7cc8c0410db3c",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong mặt phẳng Oxyz , cho a = ( 3; -1;2 ) , b = ( 4;2; -6 ) . Giá trị của a + b bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "66.",
        "content_en": "66.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "66 .",
        "content_en": "66 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3 14 .",
        "content_en": "3 14 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2.",
        "content_en": "2.",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có: a + b = ( 7;1; -4 ) nên a + b = 7 2 + 12 + ( -4 ) = 66 .\n 2",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-16",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e9460dc855386a",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ trục tọa độ Oxyz , điểm thuộc Ox và cách đều hai điểm A ( 4;2; -1) và B ( 2;1;0 ) là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "M ( -4;0;0 ) .",
        "content_en": "M ( -4;0;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "M ( 5;0;0 ) .",
        "content_en": "M ( 5;0;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "M ( 4;0;0 ) .",
        "content_en": "M ( 4;0;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "M ( -5;0;0 ) .",
        "content_en": "M ( -5;0;0 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi M ( x ;0;0 ) là điểm thuộc Ox . (với x \\in )\n Điểm M cách đều hai điểm A ( 4;2; -1) và B ( 2;1;0 ) khi và chỉ khi\n MA = MB \\Leftrightarrow ( 4 - x ) + 22 + ( -1) = ( 2 - x ) + 12 \\Leftrightarrow 21 - 8 x + x^2 = 5 - 4 x + x^2 \\Leftrightarrow x = 4 .\n 2 2 2\n Vậy M ( 4;0;0 ) .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-17",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-97bfcc81786928",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hai vectơ a và b tạo với nhau một góc 600 và a = 2; b = 4 .Khi đó a + b bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2 5 .",
        "content_en": "2 5 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2 7 .",
        "content_en": "2 7 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "8 3 + 20 .",
        "content_en": "8 3 + 20 .",
        "is_correct": false
      }
    ],
    "solution_vi": "( ) = ( a ) + 2ab + (b ) = a + 2 a b cos ( a, b ) + b^2 2 2 2 2 2\n Ta có a + b = a + b\n 1\n = 4 + 2.2.4. + 16 = 28 \\Rightarrow a + b = 28 = 2 7 .\n 2",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-21",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-30c4aee67c0441",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho tam giác ABC có AB = ( -3;0;4 ) , AC = ( 5; - 2;4 ) . Độ dài đường trung tuyến AM là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 2 .",
        "content_en": "3 2 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5 2 .",
        "content_en": "5 2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "4 2 .",
        "content_en": "4 2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2 3 .",
        "content_en": "2 3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB + AC = ( 2; - 2;8) \\Rightarrow AM =\n 1\n 2\n ( )\n AB + AC = (1; - 1;4 ) .\n Khi đó AM = AM = 12 + ( -1) + 42 = 3 2 .\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-22",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f080dd7c03daec",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho hai điểm A (1;2; -1) , B ( 2;1;2 ) . Điểm M trên trục Ox có hoành độ dương và thỏa mãn MA2 + MB 2 = 23 . Khi đó tọa độ điểm M là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "M ( 4;0;0 ) .",
        "content_en": "M ( 4;0;0 ) .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "M ( 3;0;0 ) .",
        "content_en": "M ( 3;0;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "M ( 2;0;0 ) .",
        "content_en": "M ( 2;0;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "M (1;0;0 ) .",
        "content_en": "M (1;0;0 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Điểm M thuộc trục Ox có hoành độ dương suy ra M ( a;0;0 ) , a > 0 .\n Ta có: MA = (1 - a;2; -1) , MB = ( 2 - a;1;2 ) .\n8 \n Giả thiết: MA2 + MB 2 = 23 \\Leftrightarrow (1 - a ) + 4 + 1 + ( 2 - a ) + 1 + 4 = 23 .\n 2 2\n  a = -1, ( l )\n \\Leftrightarrow a^2 - 3a - 4 = 0 \\Leftrightarrow  . Vậy M ( 4;0;0 ) .\n  a = 4, ( t / m )",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-23",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6283115584468a",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz ,cho hai vec u ( -2;1;5 ) và v ( m - 2;3; m + 1) , m là tham số. Tìm m để u vuông góc với v .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -4 .",
        "content_en": "m = -4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 4 .",
        "content_en": "m = 4 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = -3 .",
        "content_en": "m = -3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 3 .",
        "content_en": "m = 3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "u vuông góc với v \\Leftrightarrow u .v = 0 \\Leftrightarrow -2.( m - 2 ) + 3 + 5.( m + 1) = 0 \\Leftrightarrow 3m + 12 = 0 \\Leftrightarrow m = -4 .\n ( )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-24",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-79b05858bbbe23",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho bốn điểm A (1;1;4 ) , B ( 5; -1;3) , C ( 3;1;5 ) và D ( 2;2; m ) ( với m là tham số). Xác định m để bốn điểm A , B , C , D tạo thành bốn đỉnh của một tứ diện.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m \\ne 6 .",
        "content_en": "m \\ne 6 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "m \\ne 4 .",
        "content_en": "m \\ne 4 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m \\in .",
        "content_en": "m \\in .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m < 0 .",
        "content_en": "m < 0 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = ( 4; -2; - 1) , AC = ( 2;0;1) , AD = (1;1; m - 4 ) .\n  AB, AC  = ( -2; -6;4 ) ,  AB, AC  . AD = -2 - 6 + 4 ( m - 4 ) = 4m - 24 .\n    \n Bốn điểm A , B , C , D tạo thành bốn đỉnh của một tứ diện khi và chỉ khi\n  AB, AC  . AD = 4m - 24 \\ne 0 \\Leftrightarrow m \\ne 6 .\n  ",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-tich vo huong tich co huong cua hai vect-27",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ebaf36a4b3b010",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong hệ trục Oxyz , cho 3 điểm A (1;0;0 ) , B ( 0;0;1) , C ( 2;1;1) . Xét tính đúng sai của các mệnh đề sau: 6",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Diện tích của tam giác ABC bằng (đvdt) 2",
        "content_en": "Diện tích của tam giác ABC bằng (đvdt) 2",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Gọi D ( x; y; z ) sao cho tứ giác ABCD là một hình bình hành khi đó x + y + z = 3 30",
        "content_en": "Gọi D ( x; y; z ) sao cho tứ giác ABCD là một hình bình hành khi đó x + y + z = 3 30",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Độ dài đường cao của tam giác ABC hạ từ A bằng AH = (đơn vị dài) 5",
        "content_en": "Độ dài đường cao của tam giác ABC hạ từ A bằng AH = (đơn vị dài) 5",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Thể tích của khối chóp SABCD với đỉnh S ( 0;3;4 ) bằng 2 (đvtt)",
        "content_en": "Thể tích của khối chóp SABCD với đỉnh S ( 0;3;4 ) bằng 2 (đvtt)",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Ta có AB = ( -1;0;1) , AC = (1;1;1)\n  0 1 1 1 -1 0 \n Tính [ AB, AC ] =  ; ;  = ( -1;2; -1) \\ne 0\n  1 1 -1 1 1 1 \n Do đó 2 véc tơ AB và AC không cùng phương. Vậy A, B, C là 3 đỉnh của một tam giác\n 1 1 6\n Diện tích tam giác ABC : SABC = [ AB, AC ] = ( -1) + 22 + ( -1) =\n 2 2\n (đvdt)\n 2 2 2\n b) Sai: ABCD là hình bình hành khi và chỉ khi AD = BC .\n Gọi D ( x; y; z ) ta có: AD = ( x - 1; y; z ) ; BC = ( 2;1;0 )\n x -1 = 2 x = 3\n  \n Vậy AD = BC \\Leftrightarrow  y = 1 \\Leftrightarrow y =1\n z = 0 z = 0\n  \n 1 6 6\n c) Đúng: Diện tích ABC = AH BC = \\Leftrightarrow AH = .\n 2 2 BC\n 30\n Ta có BC = 5 \\Leftrightarrow AH = (đơn vị dài)\n 5\n d) Sai: Thể tích của khối chóp SABCD = V\n 1\n Ta có V = 2VSABC = [ AB, AC ] AS\n 3\n Tính AS = (-1;3;4) do kết quả câu 1 nên  AB, AC  . AS = 1 + 6 - 4 = 3 > 0 do đó V = 1 (đvtt)",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:S",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-8-tich vo huong tich co huong cua hai-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7772438cf36c78",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hình minh họa sơ đồ một ngôi nhà trong hệ trục tọa độ Oxyz , trong đó nền nhà, bốn bức tường và hai mái nhà đều là hình chữ nhật.",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tọa độ của các điểm A ( 5;0;0 ) .",
        "content_en": "Tọa độ của các điểm A ( 5;0;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Tọa độ của các điểm H ( 0;5;3) . 14",
        "content_en": "Tọa độ của các điểm H ( 0;5;3) . 14",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Góc nhị diện có cạnh là đường thẳng FG , hai mặt lần lượt là ( FGQP ) và ( FGHE ) gọi là góc dốc của mái nhà. Số đo của góc dốc của mái nhà bằng 26,6 (làm tròn kết quả đến hàng phần mười của độ).",
        "content_en": "Góc nhị diện có cạnh là đường thẳng FG , hai mặt lần lượt là ( FGQP ) và ( FGHE ) gọi là góc dốc của mái nhà. Số đo của góc dốc của mái nhà bằng 26,6 (làm tròn kết quả đến hàng phần mười của độ).",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Chiều cao của ngôi nhà là 4.",
        "content_en": "Chiều cao của ngôi nhà là 4.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Sai: Vì nền nhà là hình chữ nhật nên tứ giác OABC là hình chữ nhật, suy ra\n x A = xB = 4, yC = yB = 5. Do A nằm trên trục Ox nên tọa độ điểm A là ( 4;0;0 ) .\n b) Sai: Tường nhà là hình chữ nhật, suy ra yH = yC = 5, z H = z E = 3 . Do H nằm trên mặt phẳng\n ( Oyz ) nên tọa độ điểm H là ( 0;5;3) .\n c) Sai: Để tính góc dốc của mái nhà, ta đi tính số đo góc nhị diện có cạnh là đường thẳng FG ,\n hai mặt phẳng lần lượt là ( FGQP ) và ( FGHE ) . Do mặt phẳng ( Ozx ) vuông góc với hai mặt\n phẳng ( FGQP ) và ( FGHE ) nên góc PFE là góc phẳng nhị diện ứng với góc nhị diện đó.\n Ta có FP = ( -2;0;1) , FE = ( -4;0;0 ) .\n FP FE ( -2 ) ( -4 ) + 0 0 + 1 0\n (\n Suy ra cos PFE = cos FP, FE = ) FP FE\n =\n (-2) + 0 + 1 (-4) + 0 + 0\n 2 2 2 2 2 2\n =\n 2 5\n 5\n Do đó, PFE  26 ,. Vậy góc dốc của mái nhà khoảng 26,6 .\n d) Sai: Chiều cao bằng cao độ của điểm P suy ra h = 4 .",
    "solution_en": "",
    "correct_answer": "a:S, b:S, c:S, d:S",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-8-tich vo huong tich co huong cua hai-6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-bef27462346642",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho a = ( 3;1; -2 ) và b = ( -2;0; -3) . Tích vô hướng a. 2a + b bằng ( )",
    "question_en": "",
    "options": [],
    "solution_vi": "a = ( 3;1; -2 ) \\Rightarrow 2a = ( 6;2; -4 ) \\Rightarrow 2a + b = ( 4;2; -7 )\n ( )\n Do đó a. 2a + b = 12 + 2 + 14 = 28",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-tich vo huong tich co huong cua hai-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f1f8da535a89ea",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho hai vec tơ u = (1;1;0 ) và v = ( 2;0; -1) . Tính độ dài u + 2v .",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có u = 2; v = 5 ; uv = 1.2 + 1.0 + 0.( -1) = 2 .\n Suy ra u + 2v = u + 4uv + 4 v = 2 + 4.2 + 4.5 = 30 .\n 2 2 2\n Vậy u + 2v = 30 .",
    "solution_en": "",
    "correct_answer": "30",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-tich vo huong tich co huong cua hai-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9badf39257dc33",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho hai điểm C ( 4;0;0 ) và B ( 2;0;0 ) . Tìm tọa độ điểm\n M thuộc trục tung sao cho diện tích tam giác MBC bằng 3 .",
    "question_en": "",
    "options": [],
    "solution_vi": "Vì M thuộc trục tung nên: M ( 0; yM ;0 ) . Ta có: BM = ( -2; yM ;0 ) ; BC = ( 2;0;0 ) .\n Khi đó:  BM , BC  = ( 0;0; -2 yM ) .\n Diện tích hình bình hành ABCD là:\n 1 1\n S MBC =  BM , BC  \\Leftrightarrow 4 yM 2 = 3 \\Leftrightarrow yM = 3 \\Leftrightarrow yM = \\pm3 .\n 2 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-tich vo huong tich co huong cua hai-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d33d62d1de0a8e",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ trục tọa độ Oxyz , cho tứ diện ABCD có A ( 2; -1;1) , B ( 3;0; -1) ,\n C ( 2; -1;3) , D \\in Oy và thể tích tứ diện ABCD bằng 5 . Tổng tung độ của các điểm D thỏa mãn\n yêu cầu bài toán bằng",
    "question_en": "",
    "options": [],
    "solution_vi": "Do D \\in Oy \\Rightarrow D ( 0; y;0 ) .\n Khi đó DA = ( 2; -1 - y;1) , DB = ( 3; - y; -1) , DC = ( 2; -1 - y;3) .\n Ta có  DA, DB  = (1 + 2 y;5; y + 3) .\n  DA, DB  . DC = 2 + 4 y - 5 - 5 y + 3 y + 9 = 2 y + 6 .\n  \n 1  2 y + 6 = 30  y = 12\n Và VABCD =  DA, DB  .DC = 5 \\Leftrightarrow  \\Leftrightarrow .\n 6  2 y + 6 = -30  y = -18\n Vậy y1 + y2 = 12 - 18 = -6 .",
    "solution_en": "",
    "correct_answer": "-6",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-tich vo huong tich co huong cua hai-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-be299da215ae21",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong mặt phẳng tọa độ Oxy cho các điểm A ( 2;0;2 ) , B ( 0;2;0 ) , C (1;0;3) . Gọi M là điểm\n trong không gian thỏa mãn MA2 + MC 2 = MB 2 . Tính MP với P ( 3; - 2;5 ) .",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi I ( x; y; z ) là điểm thỏa mãn IA + IC = IB (*) .\n Ta có IA = ( 2 - x; - y;2 - z ) ; IB = ( - x;2 - y; - z ) ; IC = (1 - x; - y;3 - z ) .\n 2 - x + 1 - x = - x x = 3\n  \n Khi đó (*) \\Leftrightarrow - y - y = 2 - y \\Leftrightarrow  y = -2 \\Rightarrow I ( 3; - 2;5 )  P .\n 2 - z + 3 - z = - z z = 5\n  \n Suy ra IA = ( -1;2; - 3) \\Rightarrow IA2 = 14 ; IB = ( -3;4; - 5 ) \\Rightarrow IB 2 = 50 ; IC = ( -2;2; - 2 ) \\Rightarrow IC 2 = 12 .\n Ta có MA2 + MC 2 = MB 2 \\Leftrightarrow MA2 + MC 2 - MB 2 = 0 .\n ( ) ( ) - ( MI + IB )\n 2 2 2\n Khi đó MA2 + MC 2 - MB 2 = MI + IA + MI + IC\n = MI 2 + IA2 + 2MI .IA + MI 2 + IC 2 + 2MI .IC - MI 2 - IB 2 - 2MI .IB\n16 \n ( )\n = MI 2 + ( IA2 + IC 2 - IB 2 ) + 2MI IA + IC - IB = 0 hay\n \\Leftrightarrow MP 2 + (14 + 12 - 50 ) = 0 \\Leftrightarrow MP 2 = 24 \\Rightarrow MP = 2 6 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-tich vo huong tich co huong cua hai-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d6afd5998b6e89",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Hai chiếc máy bay không người lái cùng bay lên tại một địa điểm. Sau một thời gian bay, chiếc\n máy bay thứ nhất cách điểm xuất phát về phía Bắc 20 ( km ) và về phía Tây 10 ( km ) , đồng thời\n cách mặt đất 0,7 ( km ) . Chiếc máy bay thứ hai cách điểm xuất phát về phía Đông 30 ( km ) và về\n phía Nam 25 ( km ) , đồng thời cách mặt đất 1( km ) . Xác định khoảng cách giữa hai chiếc máy\n bay.",
    "question_en": "",
    "options": [],
    "solution_vi": "Chọn hệ trục tọa độ Oxyz , với gốc đặt tại điểm xuất phát của hai chiếc máy bay, mặt phẳng\n ( Oxy ) trùng với mặt đất, trục Ox hướng về phía Bắc, trục Oy hướng về phía Tây, trục Oz\n hướng thẳng đứng lên trời, đơn vị đo lấy theo kilômét (xem hình vẽ).\n Chiếc máy bay thứ nhất có tọa độ ( 20;10;0,7 ) .\n Chiếc máy bay thứ hai có tọa độ ( -30; -25;1) .\n ( 20 + 30 ) + (10 + 25) + ( 0,7 - 1)  61( km )\n 2 2 2\n Do đó khoảng cách giữa hai chiếc máy bay là:",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-tich vo huong tich co huong cua hai-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ea0e609c5b1b62",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Hai chiếc khinh khí cầu cùng bay lên tại một địa điểm. Sau một thời gian bay, chiếc khinh khí\n cầu thứ nhất cách điểm xuất phát về phía Đông 100 ( km ) và về phía Nam 80 ( km ) , đồng thời\n cách mặt đất 1( km ) . Chiếc khinh khí cầu thứ hai cách điểm xuất phát về phía Bắc 70 ( km ) và về\n phía Tây 60 ( km ) , đồng thời cách mặt đất 0,8 ( km ) .\n Xác định khoảng cách giữa chiếc khinh khí cầu thứ nhất và chiếc khinh khí cầu thứ hai.",
    "question_en": "",
    "options": [],
    "solution_vi": "Chọn hệ trục tọa độ Oxyz , với gốc đặt tại điểm xuất phát của hai chiếc khinh khí cầu, mặt phẳng\n ( Oxy ) trùng với mặt đất, trục Ox hướng về phía Bắc, trục Oy hướng về phía Tây, trục Oz\n hướng thẳng đứng lên trời, đơn vị đo lấy theo kilômét (xem hình vẽ).\n Chiếc khinh khí cầu thứ nhất có tọa độ ( -100; -80;1) .\n Chiếc khinh khí cầu thứ hai có tọa độ ( 70;60;0,8 ) .\n Khoảng cách của chiếc khinh khí cầu thứ nhất với vị trí tại điểm xuất phát của nó là:\n ( -100 ) + ( -80 ) + 12  128 ( km )\n 2 2\n Khoảng cách giữa chiếc khinh khí cầu thứ nhất và chiếc khinh khí cầu thứ hai là:\n ( -100 - 70 ) + ( -80 - 60 ) + (1 - 0,8)  220 ( km )\n 2 2 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-tich vo huong tich co huong cua hai-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-33be89b4b98df4",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Ba chiếc máy bay không người lái cùng bay lên tại một địa điểm. Sau một thời gian bay, chiếc\n máy bay thứ nhất cách điểm xuất phát về phía Đông 60 ( km ) và về phía Nam 40 ( km ) , đồng thời\n cách mặt đất 2 ( km ) . Chiếc máy bay thứ hai cách điểm xuất phát về phía Bắc 80 ( km ) và về phía\n18 \n Tây 50 ( km ) , đồng thời cách mặt đất 4 ( km ) . Chiếc máy bay thứ ba nằm chính giữa của chiếc\n máy bay thứ nhất và thứ hai, đồng thời ba chiếc máy bay này thẳng hàng.\n Xác định khoảng cách của chiếc máy bay thứ ba với vị trí tại điểm xuất phát của nó.",
    "question_en": "",
    "options": [],
    "solution_vi": "Chọn hệ trục tọa độ Oxyz , với gốc đặt tại điểm xuất phát của hai chiếc máy bay, mặt phẳng\n ( Oxy ) trùng với mặt đất, trục Ox hướng về phía Bắc, trục Oy hướng về phía Tây, trục Oz\n hướng thẳng đứng lên trời, đơn vị đo lấy theo kilômét (xem hình vẽ).\n Chiếc máy bay thứ nhất có tọa độ ( -60; -40;2 ) .\n Chiếc máy bay thứ hai có tọa độ ( 80;50;4 ) .\n Do chiếc máy bay thứ ba nằm chính giữa của chiếc máy bay thứ nhất và thứ hai, đồng thời ba\n chiếc máy bay này thẳng hàng nên ở vị trí trung điểm, suy ra chiếc máy bay thứ ba có tọa độ\n  -60 + 80 -40 + 50 2 + 4 \n  ; ;  = (10;5;3) .\n  2 2 2 \n Khoảng cách giữa chiếc máy bay thứ nhất và chiếc máy bay thứ hai:\n ( -60 - 80 ) + ( -40 - 50 ) + ( 2 - 4 )  166,4 ( km )\n 2 2 2\n Khoảng cách của chiếc máy bay thứ ba với vị trí tại điểm xuất phát của nó là:\n 102 + 52 + 32  11,6 ( km )\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-tich vo huong tich co huong cua hai-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b1c994a850b152",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho a = 2 j - 3k , b = 4i + j + k . Tính độ dài của v = 2a - b",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "74 .",
        "content_en": "74 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "3 6 .",
        "content_en": "3 6 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "5 2 .",
        "content_en": "5 2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "42 .",
        "content_en": "42 .",
        "is_correct": false
      }
    ],
    "solution_vi": "( ) ( )\n Ta có: v = 2a - b = 2 2 j - 3k - 4i + j + k = 4 j - 6k - 4i - j - k = -4i + 3 j - 7k\n \\Rightarrow v = ( -4;3; - 7 ) \\Rightarrow v = ( -4 ) + 32 + ( -7 ) = 74 .\n 2 2",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-82f0357f80fa47",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho ba điểm A ( 2; - 1;5 ) , B ( 5; - 5;7 ) ; M ( x ; y;1) . Khi A, B, M thẳng hàng thì giá trị của x; y là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x = 4; y = -7 .",
        "content_en": "x = 4; y = -7 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "x = -4; y = 7 .",
        "content_en": "x = -4; y = 7 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = 4; y = 7 .",
        "content_en": "x = 4; y = 7 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "x = -4; y = -7 .",
        "content_en": "x = -4; y = -7 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = ( 3; - 4;2 ) ; AM = ( x - 2; y + 1; - 4 )\n x - 2 y + 1 -4  x = -4\n Để ba điểm A, B, M thẳng hàng thì = = \\Rightarrow .\n 3 -4 2 y = 7",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c6dab352a848ce",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz cho 3 diểm A (1, 2, -1) , B ( 2, -1,3) , C ( -3,5,1) . Tọa độ điểm D sao cho tứ giác ABCD là hình bình hành là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -2, 2,5 ) .",
        "content_en": "( -2, 2,5 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -4,8, -5 ) .",
        "content_en": "( -4,8, -5 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -4,8, -3) .",
        "content_en": "( -4,8, -3) .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( -2,8, -3) .",
        "content_en": "( -2,8, -3) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = (1, -3, 4 ) ; AC = ( -4,3, 2 ) Suy ra AB, AC không cùng phương.\n Gọi D ( x, y, z ) ; DC = ( -3 - x,5 - y,1 - z )\n  -3 - x = 1\n \n Tứ giác ABCD là hình bình hành \\Leftrightarrow AB = DC \\Leftrightarrow 5 - y = -3 \\Rightarrow D ( -4,8, -3)\n 1 - z = 4\n ",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-47964ddb8905d5",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho tứ diện ABCD với A (1; -4;2 ) , B ( 2;1; -3) , C ( 3;0; -2 ) và D ( 2; -5; -1) . Điểm G thỏa mãn GA + GB + GC + GD = 0 có tọa độ là:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "G ( 2; -1; -1) .",
        "content_en": "G ( 2; -1; -1) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "G ( 2; -2; -1) .",
        "content_en": "G ( 2; -2; -1) .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "G ( 0; -1; -1) .",
        "content_en": "G ( 0; -1; -1) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "G ( 6; -3; -3) .",
        "content_en": "G ( 6; -3; -3) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: GA + GB + GC + GD = 0 \\Leftrightarrow GO + OA + GO + OB + GO + OC + GO + OD = 0\n \\Leftrightarrow 4OG = OA + OB + OC + OD \\Leftrightarrow OG =\n 1\n 4\n (OA + OB + OC + OD )\n6 \n  1\n  xG = 4 ( x A + xB + xC + xD ) = 2\n \n  1\n \\Rightarrow  yG = ( y A + yB + yC + yD ) = -2 . Vậy G ( 2; -2; -1) .\n  4\n  1\n  zG = 4 ( z A + z B + zC + z D ) = - 1\n ",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9e14176a630fcf",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho tam giác ABC có A (1; -1; -2 ) và trọng tâm G ( 2;1; -3) . Tọa độ của vectơ u = AB + AC là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 3;6;3) .",
        "content_en": "( 3;6;3) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 3;6; -3) .",
        "content_en": "( 3;6; -3) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 3; -3;6 ) .",
        "content_en": "( 3; -3;6 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 3;2;1) .",
        "content_en": "( 3;2;1) .",
        "is_correct": false
      }
    ],
    "solution_vi": "3\n Gọi M là trung điểm cạnh BC . Ta có: u = AB + AC = 2. AM = 2. . AG = 3 AG = ( 3;6; -3)\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7a4243789ebc99",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong hệ trục tọa độ Oxyz , cho hai vectơ PQ = ( 0;1; - 2 ) , PR = ( -2; - 1;0 ) và điểm M (1; - 2;2 ) trung điểm của đoạn QR. Tọa độ điểm Q là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -1;1; - 2 ) .",
        "content_en": "( -1;1; - 2 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -2;2; - 3) .",
        "content_en": "( -2;2; - 3) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 0;1;3) .",
        "content_en": "( 0;1;3) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 2; - 1;1) .",
        "content_en": "( 2; - 1;1) .",
        "is_correct": true
      }
    ],
    "solution_vi": " xQ - xR = 2\n \n Ta có RQ = PQ - PR = ( 2;2; - 2 ) suy ra  yQ - yR = 2 (1) .\n \n  zQ - z R = -2\n  xQ + xR = 2\n \n Vì điểm M (1; - 2;2 ) trung điểm của đoạn QR nên  yQ + yR = -4 (2).\n \n  zQ + z R = 4\n Từ (1) và ( 2 ) suy ra Q ( 2; - 1;1) .",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-8",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-8076f2c8ea0acf",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho ba điểm A (1;2; -1) , B ( 2; -1;3) , C ( -2;3;3) . Điểm M ( a; b; c ) là đỉnh thứ tư của hình bình hành ABCM , khi đó P = a^2 + b^2 - c^2 có giá trị bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "42.",
        "content_en": "42.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-50.",
        "content_en": "-50.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-48.",
        "content_en": "-48.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "44.",
        "content_en": "44.",
        "is_correct": true
      }
    ],
    "solution_vi": "a + 2 = 1 - 2 a = -3\n  \n Tứ giác ABCM là hình bình hành khi và chỉ khi: CM = BA \\Leftrightarrow b - 3 = 2 - ( -1) \\Leftrightarrow b = 6.\n c - 3 = -1 - 3 c = -1\n  \n Suy ra: P = a^2 + b^2 - c^2 = ( -3) + 62 - ( -1) = 44.\n 2 2",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-10",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-cd79345460fc09",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho điểm A ( 2;1;3) và điểm B ( 4; -3;1) . Tọa độ trung điểm I của đoạn thẳng AB là 8",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 6; -2;4 ) .",
        "content_en": "( 6; -2;4 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 3; -1;2 ) .",
        "content_en": "( 3; -1;2 ) .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "(1; -2; -1) .",
        "content_en": "(1; -2; -1) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 2; -4; -2 ) .",
        "content_en": "( 2; -4; -2 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": " x A + xB 2 + 4\n  xI = 2\n =\n 2\n =3\n \n  y + yB 1 + ( -3)\n Ta có tọa độ trung điểm I ( xI ; yI ; z I ) là  yI = A = = -1 \\Rightarrow I ( 3; -1;2 ) .\n  2 2\n  z A + zB 3 + 1\n  zI = 2 = 2 = 2\n ",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-11",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-45ee4ca89699ab",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian hệ toạ độ Oxyz , cho ba vectơ a = ( 3;4;2 ) ; b = ( -5;0;3) ; c = (1;2; -4 ) . Tìm toạ độ của vectơ u = 3a + 2b - c :",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u = ( -2;10;16 ) .",
        "content_en": "u = ( -2;10;16 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u = ( 2;10; -16 ) .",
        "content_en": "u = ( 2;10; -16 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u = ( -1;5;8 ) .",
        "content_en": "u = ( -1;5;8 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u = ( -2; -10;16 ) .",
        "content_en": "u = ( -2; -10;16 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: 3a = ( 9;12;6 ) ; 2b = ( -10;0;6 ) ; -c = ( -1; -2;4 )\n Khi đó u = 3a + 2b - c = ( -2;10;16 )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-12",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4c83311b38c81d",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho a = ( -3;5;2 ) , b = ( 0; - 1;3) , c = (1; - 1;1) thì tọa độ v = 2a - 3b + 15c là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "v = ( -9;2;10 ) .",
        "content_en": "v = ( -9;2;10 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "v = ( 9; -1;10 ) .",
        "content_en": "v = ( 9; -1;10 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "v = ( 9;2;10 ) .",
        "content_en": "v = ( 9;2;10 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "v = ( 9; -2;10 ) .",
        "content_en": "v = ( 9; -2;10 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có 2a = ( -6;10;4 ) ,3b = ( 0; - 3;9 ) ,15c = (15; - 15;15 ) suy ra v = ( 9; - 2;10 ) .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-13",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-816d37c205b775",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho hai điểm A (1;3;4 ) và B (1;0;1) . Điểm M nằm trên trục Oz và cách đều hai điểm A, B có tọa độ là.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 0;0;4 ) .",
        "content_en": "( 0;0;4 ) .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "( 2;0;0 ) .",
        "content_en": "( 2;0;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 0;0;2 ) .",
        "content_en": "( 0;0;2 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 0;4;0 ) .",
        "content_en": "( 0;4;0 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Do điểm M nằm trên trục Oz nên M ( 0;0; z ) .\n Mặt khác điểm M cách đều hai điểm A, B \\Rightarrow MA = MB\n \\Leftrightarrow ( 0 - 1) + ( 0 - 3) + ( z - 4 ) = ( 0 - 1) + ( 0 - 0 ) + ( z - 1)\n 2 2 2 2 2 2\n \\Leftrightarrow 10 + ( z - 4 ) = 1 + ( z - 1) \\Leftrightarrow z = 4\n 2 2\n Vậy M ( 0;0;4 ) .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-15",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-bc6b12e0637791",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ toạ độ Oxyz , cho hai điểm A (1;2;3) , B ( -2; -4;9 ) . Điểm M thuộc đoạn AB sao cho MA = 2 MB . Độ dài đoạn thẳng OM là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5 .",
        "content_en": "5 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "54 .",
        "content_en": "54 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "17 .",
        "content_en": "17 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Đặt M ( x ; y ; z ) , khi đó: MA = (1 - x ;2 - y ;3 - z ) và MB = ( -2 - x ; -4 - y ;9 - z )\n 1 - x = -2 ( -2 - x )  x = -1\n  \n Ta có: MA = 2MB \\Rightarrow MA = -2MB \\Leftrightarrow 2 - y = -2 ( -4 - y ) \\Leftrightarrow  y = -2 \\Rightarrow M ( -1; -2;7 ) .\n  \n 3 - z = -2 ( 9 - z ) z = 7\n Khi đó: OM = ( -1; -2;7 ) . Vậy OM = 54 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-17",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-dd7cd17209b775",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz cho điểm G (1; -2;3) và ba điểm A ( a;0;0 ) ; B ( 0; b;0 ) ; C ( 0;0; c ) . Biết G là trọng tâm của tam giác ABC thì a + b + c bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "9.",
        "content_en": "9.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "6.",
        "content_en": "6.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "0.",
        "content_en": "0.",
        "is_correct": false
      }
    ],
    "solution_vi": " x A + xB + xC  a\n  xG = 3 1 = 3\n   a = 3\n  y A + yB + yC  b \n Ta có trọng tâm G của tam giác ABC :  yG = \\Leftrightarrow -2 = \\Leftrightarrow b = -6 .\n  3  3 \n  z A + z B + zC  c c = 9\n  zG = 3 = 3\n  3 \n Khi đó: a + b + c = 3 + ( -6 ) + 9 = 6 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-18",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-85452ab48008ed",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ toạ độ Oxyz , cho ba điểm A (1;1;1) , B ( 2;3;2 ) , C ( 3; -1;3) . Tìm toạ độ điểm D sao cho bốn điểm A , B , C , D lập thành một hình chữ nhật. 10",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "D ( 4;3;4 ) .",
        "content_en": "D ( 4;3;4 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "D ( 4; -1;4 ) .",
        "content_en": "D ( 4; -1;4 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "D ( 2; -3;2 ) .",
        "content_en": "D ( 2; -3;2 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "D ( 4;1;4 ) .",
        "content_en": "D ( 4;1;4 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = (1;2;1) ; AC = (2; -2;2) , AB. AC = 1.2 + 2.( -2 ) + 1.2 = 0 nên AB ⊥ AC\n Điều này cho thấy A, B, C không thẳng hàng và hình chữ nhật tạo ra phải là ABDC .\n Gọi D ( x; y; z ) , ta có CD = ( x - 3; y + 1; z - 3) .\n x - 3 = 1 x = 4\n  \n Tứ giác ABDC là hình chữ nhật khi và chỉ khi AB = CD \\Leftrightarrow  y + 1 = 2 \\Leftrightarrow  y = 1 \\Rightarrow D ( 4;1;4 ) .\n z - 3 = 1 z = 4\n  \n Vậy D ( 4;1;4 )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-19",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6f7ab5b1326d32",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho hai điểm A ( -4;1;5 ) ; B (1;5; -3 ) . Gọi C là giao điểm của đường thẳng AB và mặt phẳng ( Oyz ) . Trong các khẳng định sau, khẳng định nào đúng? 1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "AC = - AB .",
        "content_en": "AC = - AB .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "AB = 5 BC .",
        "content_en": "AB = 5 BC .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "AC = 4 BC .",
        "content_en": "AC = 4 BC .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "AC = -4 BC 4",
        "content_en": "AC = -4 BC 4",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi C ( 0; a; b ) là giao điểm của đường thẳng AB và mặt phẳng ( Oyz ) . Khi đó A; B; C thẳng\n hàng hay AC và AB cùng phương.\n  21\n  a=\n 4 a -1 b - 5 \n Lại có AB = ( 5;4; -8 ) ; AC = ( 4; a - 1; b - 5 ) nên =\n 5\n = \\Leftrightarrow .\n 5 4 -8 b = - 7\n  5\n \n  AB = ( 5;4; -8 )\n \n   16 32 \n Khi đó  AC =  4; ; -  nên AC = -4 BC .\n   5 5 \n   4 8\n  BC =  -1; - ; \n   5 5",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-21",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-92bf69c852de85",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho vecto a = (1;1; -3) ; b = ( 2;2; -2 ) ; c = 2i + 2 j - 6k và d = (1;1; -1) . Cặp vecto nào sau đây cùng phương?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "a và b .",
        "content_en": "a và b .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "a và d .",
        "content_en": "a và d .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "a và c .",
        "content_en": "a và c .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "b và c .",
        "content_en": "b và c .",
        "is_correct": false
      }
    ],
    "solution_vi": "1 1 -3\n Vì = \\ne nên hai vecto a và b không cùng phương.\n 2 2 -2\n 1 1 -3\n Vì = \\ne nên hai vecto a và d không cùng phương.\n 1 1 -1\n Ta có c = ( 2;2; -6 ) = 2 (1;1; -3) = 2a suy ra a và c cùng phương.\n 2 2 -2\n Vì = \\ne nên hai vecto b và c không cùng phương.\n 2 2 -6",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-22",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3e4bf373f30d31",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho ba điểm A ( 0;1; -1) , B (1;2;0 ) ; C ( m; n;0 ) . Tìm m, n sao cho ba điểm A, B, C thẳng hàng.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = 1; n = 1 .",
        "content_en": "m = 1; n = 1 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 1; n = 2 .",
        "content_en": "m = 1; n = 2 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "m = 2; n = 1 .",
        "content_en": "m = 2; n = 1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 2; n = 2 .",
        "content_en": "m = 2; n = 2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = (1;1;1) ; AC = ( m; n - 1;1) .\n m = k m = 1\n   m = 1\n Ba điểm A, B, C thẳng hàng AC = k AB \\Leftrightarrow n - 1 = k \\Leftrightarrow n = 2 \\Rightarrow  .\n 1 = k k = 1  n = 2\n  ",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-23",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2b3047a87fb796",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho 2 véc tơ a = ( -1;2 x - 1;1 - 3 z ) và b = ( 2 + 3 y; -1; -2 ) . Khi a = b thì tổng T = x + 2 y^2 + 3z 3 bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5 .",
        "content_en": "5 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      }
    ],
    "solution_vi": "-1 = 2 + 3 y  y = -1\n  \n Ta có a = b \\Leftrightarrow 2 x - 1 = -1 \\Leftrightarrow  x = 0 \\Rightarrow T = 0 + 2.( -1) + 3.13 = 5 .\n 2\n 1 - 3z = -2 z = 1\n  \n12",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-24",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-19bdc0a913f7a2",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho hai điểm A ( 6; -3;4 ) , B ( a; b; c ) . Gọi M , N , P lần lượt là giao điểm của đường thẳng AB với các mặt phẳng tọa độ ( Oxy ) , ( Oxz ) và ( Oyz ) . Biết rằng M , N , P nằm trên đoạn AB sao cho AM = MN = NP = PB . Giá trị của tổng a + b + c là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "17 .",
        "content_en": "17 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-17 .",
        "content_en": "-17 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-11 .",
        "content_en": "-11 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "11 .",
        "content_en": "11 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = ( a - 6; b + 3; c - 4 ) .\n Vì M , N , P lần lượt là giao điểm của AB với các mặt phẳng ( Oxy ) , ( Oxz ) và ( Oyz ) nên\n M ( xM ; yM ;0 ) , N ( xN ;0; z N ) , P ( 0; yP ; z P ) .\n Vì M , N , P nằm trên đoạn AB sao cho AM = MN = NP = PB nên ta có:\n 4 ( xM - 6 ) = a - 6  2 ( xN - 6 ) = a - 6\n  \n 4AM = AB \\Leftrightarrow  4 ( yM + 3) = b + 3 \\Rightarrow c = -12 ; 2AN = AB \\Leftrightarrow  2 ( 0 + 3) = b + 3\n  4 ( 0 - 4) = c - 4 2 ( z - 4) = c - 4\n   N\n \\Rightarrow b=3\n 4\n  3 ( 0 - 6) = a - 6\n \n 4 4\n AP = AB \\Leftrightarrow  ( yP + 3) = b + 3 \\Rightarrow a = -2 . Vậy a + b + c = -11 .\n 3 3\n 4\n  3 ( zP - 4 ) = c - 4\n ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-26",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0184c17ec515b2",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho A ( -1;4;2 ) , B ( 3;2;1) , C ( -2;0;2 ). Tìm tất cả các điểm D sao cho ABCD là hình thang có đáy AD và diện tích hình thang ABCD gấp ba lần diện tích tam giác ABC .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "D ( 9;8;0 ) .",
        "content_en": "D ( 9;8;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "D ( -11;0;4 ) và D ( 9;8;0 ) .",
        "content_en": "D ( -11;0;4 ) và D ( 9;8;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "D ( -11;0;4 ) .",
        "content_en": "D ( -11;0;4 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "D (11;0; -4 ) và D ( -9; -8;0 ) .",
        "content_en": "D (11;0; -4 ) và D ( -9; -8;0 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử D ( xD ; yD ; z D ) . Khi đó: AD = ( xD + 1; yD - 4; z D - 2 ) ; BC = ( -5; -2;1) .\n  xD = -1 - 5t\n \n Do AD / / BC nên AD = t BC ( t \\ne 0 ) \\Leftrightarrow  yD = 4 - 2t ; t \\ne 0.\n z = 2 + t\n  D\n Vì diện tích hình thang ABCD gấp ba lần diện tích tam giác ABC\n 1 1\n nên h.( BC + AD ) = 3. h.BC ,với h là chiều cao của hình thang và cũng chính là chiều cao\n 2 2\n tam giác ABC ứng với cạnh BC .\n Suy ra, AD = 2 BC \\Leftrightarrow ( xD + 1) + ( yD - 4 ) + ( zD - 2 ) = 4 ( -5 ) + ( -2 ) + 12 \n 2 2 2 2 2\n  \n t = 2 \\Rightarrow D ( -11;0;4 )\n \\Rightarrow ( -5t ) + ( -2t ) + t 2 = 4.30 \\Leftrightarrow t 2 = 4 \\Leftrightarrow \n 2 2\n .\n t = -2 \\Rightarrow D ( 9;8;0 )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-8-ly thuyet va toa do cua cac phep toan ve-27",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6629278e95a268",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho các điểm A (1; -2;3) , B ( -2;1;2 ) , C ( 3; -1;2 ) .",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "AB = ( -3;3; -1) .",
        "content_en": "AB = ( -3;3; -1) .",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "AC = ( -2; -1;1) .",
        "content_en": "AC = ( -2; -1;1) .",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "AB = 3 AC .",
        "content_en": "AB = 3 AC .",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Ba điểm A, B, C không thẳng hàng.",
        "content_en": "Ba điểm A, B, C không thẳng hàng.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: AB = ( xB - xA ; yB - y A ; zB - z A ) = ( -3;3; -1) .\n b) Sai: AC = ( xC - xA ; yC - y A ; zC - z A ) = ( 2;1; -1)\n c) Sai: AB = ( -3;3; -1) , AC = ( 2;1; -1) . Hai vec tơ này không cùng phương nên không tồn tại\n số thực k để AB = k AC .\n d) Đúng: Hai vec tơ AB và AC không cùng phương nên ba điểm A, B, C không thẳng hàng.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:S, d:Đ",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-8-ly thuyet va toa do cua cac phep to-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f546e8312c6564",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho ba điểm A ( 3;3; -6 ) , B (1;3;2 ) và C ( -1; -3;1) . Gọi M , N , K lần lượt là trung điểm của AB, BC và CA.",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tọa độ M ( 2;3;2 ) .",
        "content_en": "Tọa độ M ( 2;3;2 ) .",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Với G là trọng tâm tam giác ABC thì GC = 2 5 .",
        "content_en": "Với G là trọng tâm tam giác ABC thì GC = 2 5 .",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Trọng tâm tam giác MNK là E (1;1; -1) .",
        "content_en": "Trọng tâm tam giác MNK là E (1;1; -1) .",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Với D ( -3; -3;9 ) thì tứ giác ABDC là hình bình hành.",
        "content_en": "Với D ( -3; -3;9 ) thì tứ giác ABDC là hình bình hành.",
        "is_correct": true
      }
    ],
    "solution_vi": " x + xB y A + yB z A + zB \n a) Sai: M là trung điểm của AB , suy ra M  A ; ;  hay M ( 2;3; -2 ) .\n  2 2 2 \n b) Sai: Ta có G (1;1; -1) . Suy ra GC = (-1 - 1) 2 + (-3 - 1) 2 + (1 + 1) 2 = 2 6 .\n c) Đúng: Hai tam giác ABC và MNK có cùng trọng tâm. Suy ra E trùng với G (1;1; -1) .\n d) Đúng: Ta có AC = ( -4; -6;7 ) , BD = ( -4; -6;7 ) suy ra AC = BD .\n Vậy ABDC là hình bình hành.",
    "solution_en": "",
    "correct_answer": "a:S, b:S, c:Đ, d:Đ",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-8-ly thuyet va toa do cua cac phep to-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-887354fda3923f",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho hai điểm A (1; -2;5 ) và B ( -2; -2;1) . Tính độ dài đoạn thẳng AB",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có: AB = ( -2 - 1) + ( -2 + 2 ) + (1 - 5) = 5 .\n 2 2 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-ly thuyet va toa do cua cac phep to-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7ed026b33a86ad",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian hệ toạ độ Oxyz cho tứ diện ABCD với A (1; -4;2 ) , B ( 2;1; -3) , C ( 3;0; -2 ) và\n D ( 2; -5; -1) . Hoành độ điểm G thỏa mãn GA + GB + GC + GD = 0 là bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Tọa độ điểm G thỏa mãn:\n  x A + xB + xC + xD 1 + 2 + 3 + 2\n  xG = 4\n =\n 4\n =2\n \n  y A + yB + yC + yD -4 + 1 + 0 + ( -5 )\n  yG = = = -2 \\Rightarrow G ( 2; -2; -1)\n  4 4\n  z A + z B + zC + z D 2 + ( -3) + ( -2 ) + ( -1)\n  zG = = = -1\n  4 4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-ly thuyet va toa do cua cac phep to-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-cce27f1bdd7a55",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho ba điểm A ( 3;2; -1) , B ( -1; - x;1) , C ( 7; -1; y ) . Khi A, B, C thẳng\n hàng thì giá trị biểu thức x + y bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có AB = ( -4; - x - 2;2 ) ; AC = ( 4; -3; y + 1) .\n -4 = k .4 k = -1\n  \n Để A, B, C thẳng hàng thì AB = k AC \\Leftrightarrow - x - 2 = k .( -3) \\Leftrightarrow  x = -5 .\n   y = -3\n 2 = k .( y + 1) \n Vậy x + y = -5 - 3 = -8 .",
    "solution_en": "",
    "correct_answer": "-8",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-ly thuyet va toa do cua cac phep to-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e5209a973c2435",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian tọa độ Oxyz cho hai điểm A (1; -2;3) , B ( 4;1; -1) . Điểm M ( a; b; c ) thỏa mãn\n MA.MA = 4 MB.MB . Giá trị biểu thức a + b + c bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Do MAMA = 4 MBMB nên MA cùng hướng MB .\n MAMA = 4MBMB \\Rightarrow MA2 = 4MB 2 \\Leftrightarrow MA = 2MB \\Rightarrow B là trung điểm AM \\Rightarrow M ( 7;4; -5 ) .\n Khi đó a + b + c = 7 + 4 + ( -5 ) = 6",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-ly thuyet va toa do cua cac phep to-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-218a6df8025cc2",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho hai điểm A (1;2;3) , B ( -2; -4;9 ) . Điểm M thuộc đoạn\n AB sao cho MA = 2 MB . Bình phương độ dài đoạn thẳng OM bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi M ( x; y; z ) .\n Vì điểm M thuộc đoạn AB sao cho MA = 2 MB nên\n20 \n 3.( -2 - x ) = -3  x = -1\n  \n AB = 3MB \\Leftrightarrow 3.( -4 - y ) = -6 \\Leftrightarrow  y = -2\n   z = 7.\n 3.( 9 - z ) = 6 \n \\Rightarrow M ( -1; -2;7 ) \\Rightarrow OM = 1 + 4 + 49 = 54 \\Rightarrow OM 2 = 54 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-ly thuyet va toa do cua cac phep to-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1f41bafe019133",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Trong hệ trục tọa độ Oxyz cho 3 điểm A ( 5; - 2;0 ) , B ( 4;5; -2 ) và C ( 0;3;2 ) . Điểm M di chuyển\n trên trục Ox . Đặt Q = 2 MA + MB + MC + 3 MB + MC . Biết giá trị nhỏ nhất của Q có dạng\n a b trong đó a, b \\in và b là số nguyên tố. Tính a + b .",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có Q = 2 MA + MB + MC + 3 MB + MC = 2 3MG + GA + GB + GC + 3 2MI + IB + IC\n Với G ( 3;2;0 ) là trọng tâm của tam giác ABC và I ( 2;4;0 ) là trung điểm BC , ta có:\n Q = 2 3MG + 3 2MI = 6 ( MG + MI ) ,\n Do G và I nằm cùng phía so với Ox nên gọi G ' ( 3; -2;0 ) là điểm đối xứng của G qua Ox .\n Khi đó Q = 2 3MG + 3 2MI = 6 ( MG + MI ) = 6 ( MG '+ MI ) \\ge 6G ' I = 6 37 .\n Đẳng thức xảy ra khi M là giao điểm của G ' I và Ox .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-ly thuyet va toa do cua cac phep to-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ed20a467331f0f",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho ba điểm A ( -2;3;1) , B ( 2;1;0 ) , C ( -3; -1;1) . Gọi D ( a; b; c ) là điểm\n sao cho ABCD là hình thang có cạnh đáy AD và diệt tích hình thang ABCD bằng 4 lần diện\n tích tam giác ABC . Tính a + b + c .",
    "question_en": "",
    "options": [],
    "solution_vi": "1 1\n Ta có S ABCD = 4S ABC \\Leftrightarrow d ( BC , AD )( BC + AD ) = 4. d ( BC , AD ) BC\n 2 2\n \\Leftrightarrow BC + AD = 4 BC \\Leftrightarrow AD = 3BC . Do ABCD là hình thang có đáy AD \\Rightarrow AD = 3BC\n a + 2 = -15 a = -17\n  \n \\Leftrightarrow  b - 3 = -6 \\Leftrightarrow  b = -3 \\Rightarrow a + b + c = -16 .\n  c -1 = 3  c=4\n  \n -----------------HẾT-----------------\n22",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Biểu thức tọa độ của các phép toán vectơ",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-8-ly thuyet va toa do cua cac phep to-9",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ddbba13d5b3d28",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện ABCD . Đặt AB = a , AC = b , AD = c . Gọi G là trọng tâm tam giác BCD . Đẳng thức nào sau đây đúng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "AG = a + b + c . 1 (",
        "content_en": "AG = a + b + c . 1 (",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "AG = a + b + c . 3 ) 1 (",
        "content_en": "AG = a + b + c . 3 ) 1 (",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "AG = a + b + c . 2 ) 1 (",
        "content_en": "AG = a + b + c . 2 ) 1 (",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "AG = a + b + c . 4 )",
        "content_en": "AG = a + b + c . 4 )",
        "is_correct": false
      }
    ],
    "solution_vi": "2\n Gọi M là trung điểm của CD \\Rightarrow BG = BM .\n 3\n 2 2 1\n Mặt khác AG = AB + BG = AB + BM = AB + . BC + BD\n 3 3 2\n ( )\n 1\n ( 1\n ) ( 1\n ) (\n = AB + AC - AB + AD - AB = AB + AC + AD = a + b + c .\n 3 3 3\n )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-ly thuyet va xac dinh chung minh dang th-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-80a063deacd823",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện ABCD . Đặt AB = a , AC = b , AD = c . Gọi M là trung điểm của đoạn BC . Đẳng thức nào dưới đây đúng? 1 (",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "DM = a + b - 2c . 2 ) 1 (",
        "content_en": "DM = a + b - 2c . 2 ) 1 (",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "DM = a + 2b - c . 2 ) 1 (",
        "content_en": "DM = a + 2b - c . 2 ) 1 (",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "DM = a - 2b + c . 2 ) 1 (",
        "content_en": "DM = a - 2b + c . 2 ) 1 (",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "DM = a + 2b - c . 2 )",
        "content_en": "DM = a + 2b - c . 2 )",
        "is_correct": false
      }
    ],
    "solution_vi": "1\n Vì M là trung điểm của BC \\Rightarrow BM = BC .\n 2\n10 \n 1\n Mặt khác DM = DA + AB + BM = AB - AD +\n BC\n 2\n 1\n 2\n ( 1\n 2\n 1\n 2\n ) 1\n 2\n 1 1\n = AB - AD + BA + AC = AB + AC - AD = a + b - c = a + b - 2c\n 2 2\n ( )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-ly thuyet va xac dinh chung minh dang th-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-79aff166ebd593",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện ABCD . Gọi M và P lần lượt là trung điểm của các cạnh AB và CD . Đặt AB = b , AC = c , AD = d . Khẳng định nào sau đây đúng? 1 (",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "MP = c + d + b . 2 ) 1 (",
        "content_en": "MP = c + d + b . 2 ) 1 (",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "MP = d + b - c . 2 ) 1 (",
        "content_en": "MP = d + b - c . 2 ) 1 (",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "MP = c + b - d . 2 ) 1 (",
        "content_en": "MP = c + b - d . 2 ) 1 (",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "MP = c + d - b . 2 )",
        "content_en": "MP = c + d - b . 2 )",
        "is_correct": false
      }
    ],
    "solution_vi": " 2 AM = AB\n Vì M , P lần lượt là trung điểm của AB, CD \\Rightarrow \n  AC + AD = 2 AP\n 1\n MP = MA + AP = - AM + AP = - AB + AC + AD\n 2\n 1\n 2\n ( )\n 1 1 1\n = - b+ c+ d = c+ d -b^2 2 2\n 1\n 2\n ( )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-ly thuyet va xac dinh chung minh dang th-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-938589d58b0ef4",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện ABCD và điểm G thỏa mãn GA + GB + GC + GD = 0 ( G là trọng tâm của tứ diện). Gọi G0 là giao điểm của GA và mặt phẳng ( BCD ) . Khẳng định nào dưới đây đúng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "GA = -2G0G .",
        "content_en": "GA = -2G0G .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "GA = 4G0G .",
        "content_en": "GA = 4G0G .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "GA = 3G0G .",
        "content_en": "GA = 3G0G .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "GA = 2G0G .",
        "content_en": "GA = 2G0G .",
        "is_correct": false
      }
    ],
    "solution_vi": "Vì G0 là giao điểm của AG và mặt phẳng ( BCD ) \\Rightarrow G0 là trọng tâm tam giác BCD .\n \\Rightarrow G0 B + G0C + G0 D = 0 mà GA + GB + GC + GD = GA + 3GG0 + G0 B + G0C + G0 D = 0\n Suy ra \\Rightarrow GA + 3GG9 = 0 → GA = 3G0G .",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-ly thuyet va xac dinh chung minh dang th-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7183a90d97624c",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho ba véctơ a, b, c không đồng phẳng. Xét các véctơ x = 2a + b và y = a - b - c và z = -3b - 2c . Khẳng định nào dưới đây là đúng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x, y, z đồng phẳng.",
        "content_en": "x, y, z đồng phẳng.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "x, a cùng phương.",
        "content_en": "x, a cùng phương.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x, b cùng phương.",
        "content_en": "x, b cùng phương.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "x, y, z đôi một cùng phương.",
        "content_en": "x, y, z đôi một cùng phương.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử ba vectơ x, y, z đồng phẳng khi đó → x = m y + nz .\n m = 2\n  m = 2\n \\Leftrightarrow 2a + b = ma - ( m + 3n ) b - ( m + 2n ) c  m + 3n = -1   .\n  m + 2n = 0  n = -1\n \n Vậy x, y, z đồng phẳng.",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-ly thuyet va xac dinh chung minh dang th-17",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2b2a03472dc919",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một chiếc đèn tròn được treo song song với mặt phẳng nằm ngang bởi ba sợi dây không dãn xuất phát từ điểm O trên trần nhà và lần lượt buộc vào ba điểm A, B, C trên đèn tròn sao cho các lực 16 ên mối dây OA, OB, OC đôi một vuông góc với nhau và F1 = F2 = F3 = 15 (N). Tính trọng lượng của chiếc đèn tròn đó.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "14 3 N .",
        "content_en": "14 3 N .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "15 3 N .",
        "content_en": "15 3 N .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "17 3 N .",
        "content_en": "17 3 N .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "16 3 N .",
        "content_en": "16 3 N .",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi A1 , B1 , C1 lần lượt là các điểm sao cho OA1 = F1 , OB1 = F2 , OC1 = F3 . Lấy các điểm\n D1 , A1 , B1 , D1 sao cho OA1D1B1 C1 A1 D1 B1 là hình hộp (như hình bên). Khi đó, áp dụng quy tắc\n hình hộp ta có\n OA1 + OB1 + OC1 = OD1 .\n Măt khác, do các lực căng F1 , F2 , F3 đôi một vuông góc và F1 = F2 = F3 = 15( N) nên hình hộp\n OA1D1B1 C1 A1 D1 B1 có ba cạnh OA1 , OB1 , OC1 đôi một vuông góc và bằng nhau. Vì thể hình hộp\n đó là hình lập phương có độ dài cạnh bằng 15. Suy ra độ dài đường chéo OD1 của hình lập\n phương đó bằng 15 3 .\n Do chiếc đèn ở vị trí cân bằng nên F1 + F2 + F3 = P , ơ đó P là trong lực tác dụng lên chiếc đèn.\n Suy ra trọng lượng của chiếc đèn là | P |= OD1 = 15 3N",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-ly thuyet va xac dinh chung minh dang th-20",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e21267845bd9fc",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Theo định luật II Newton (Vật lí 10 - Chân trời sáng tạo, Nhà xuất bản Giáo dục Việt Nam, 2023, trang 60) thì gia tốc của một vật có cùng hướng với lực tác dụng lên vật. Độ lớn của gia tốc tỉ lệ thuận với độ lớn của lực và tỉ lệ nghịch với khối lượng của vật: F = ma trong đó a là vectơ gia tốc ( m / s 2 ) , F là vectơ lực (N). Muốn truyền cho quả bóng có khối lượng 0,5 kg một gia tốc 50 m / s 2 thì cần một lực đá có độ lớn là bao nhiêu?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "10 N .",
        "content_en": "10 N .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "15 N .",
        "content_en": "15 N .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "20 N .",
        "content_en": "20 N .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "25 N .",
        "content_en": "25 N .",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có F = ma suy ra F = m a = 0,5.50 = 25 ( N ) .\n Vậy muốn truyền cho quả bóng khối lượng 0,5 kg một gia tốc 50 m / s 2 thì cần một lực đá có\n độ lớn là 25 N .",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-ly thuyet va xac dinh chung minh dang th-22",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4bf025cceb3635",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Nếu một vật có khối lượng m ( kg ) thì lực hấp dẫn P của Trái Đất tác dụng lên vật được xác định theo công thức P = mg , trong đó g là gia tốc rơi tự do có độ lớn g = 9,8 m / s 2 . Tính độ lớn của lực hấp dẫn của Trái Đất tác dụng lên một quả táo có khối lượng 105 gam",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1,029 N.",
        "content_en": "1,029 N.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "1, 433 N.",
        "content_en": "1, 433 N.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2,096 N.",
        "content_en": "2,096 N.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1, 477 N.",
        "content_en": "1, 477 N.",
        "is_correct": false
      }
    ],
    "solution_vi": "Đối 105g = 0,105 kg.\n Độ lớn của lực hấp dẫn của Trái Đất tác dụng lên một quả táo là:\n P = m g = 0,105.9,8 = 1,029 N",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-ly thuyet va xac dinh chung minh dang th-23",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c5c10d43d6d9d9",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong điện trường đều, lực tĩnh điện F (đơn vị: N) tác dụng lên điện tích điểm có điện tích q (đơn vị: C ) được tính theo công thức F = q.E , trong đó E là cường độ điện trường (đơn vị: N/C). Tính độ lớn của lực tĩnh điện tác dụng lên điện tích điểm khi q = 10-9 C và độ lớn điện trường E = 105 (N/C)",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "10-4 N.",
        "content_en": "10-4 N.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "2.10 -6 N.",
        "content_en": "2.10 -6 N.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "10-2 N.",
        "content_en": "10-2 N.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1,8.10 -6 N.",
        "content_en": "1,8.10 -6 N.",
        "is_correct": false
      }
    ],
    "solution_vi": "Độ lớn của lực tĩnh điện là F = q. E = 10-9.105 = 10-4 N .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-ly thuyet va xac dinh chung minh dang th-24",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a34777b9f8146f",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian, cho tứ diện ABCD có trọng tâm G .",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "GA + GB + GC + GD = 0",
        "content_en": "GA + GB + GC + GD = 0",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "OG = 1 4 (OA + OB + OC + OD )",
        "content_en": "OG = 1 4 (OA + OB + OC + OD )",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "BG = GA + GC + GD",
        "content_en": "BG = GA + GC + GD",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "AG = 2 3 (AB + AC + AD )",
        "content_en": "AG = 2 3 (AB + AC + AD )",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Theo công thức vì G là trọng tâm tứ diện ABCD \\Rightarrow GA + GB + GC + GD = 0\n b) Đúng: Ta có:\n 1\n ( 1\n ) (\n OG = OG + OG + OG + OG = OA + AG + OB + BG + OC + CG + OD + DG\n 4 4\n )\n 1\n (\n = OA + OB + OC + OD\n 4\n )\n c) Đúng: GA + GB + GC + GD = 0 \\Leftrightarrow GA + GC + GD = -GB = BG\n 1\n ( 1\n ) (\n d) Sai: AG = AO + OG = AO + OA + OB + OC + OD = AO + 4OA + AB + AC + AD .\n 4 4\n )\n 1\n ( 1\n ) (\n = AO + OA + AB + AC + AD = AB + AC + AD\n 4 4\n )",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:Đ, d:S",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-6-ly thuyet va xac dinh chung minh da-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a12f5f5b55a3f7",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện ABCD . Gọi M và N lần lượt là trung điểm của AB, CD và G là trung điểm MN",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "GA + GB + GC + GD = 0",
        "content_en": "GA + GB + GC + GD = 0",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "MA + MB + MC + MD = 4MG 1 (",
        "content_en": "MA + MB + MC + MD = 4MG 1 (",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "MN = AB + CD 2 )",
        "content_en": "MN = AB + CD 2 )",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "2MN = AC + BD",
        "content_en": "2MN = AC + BD",
        "is_correct": false
      }
    ],
    "solution_vi": "20 \n GA + GB = 2GM\n a) Đúng: Vì M , N lần lượt là trung điểm AB, CD → \n GC + GD = 2GN\n Mặt khác G là trung điểm MN → GM + GN = 0  GA + GB + GC + GD = 0 .\n (\n b) Đúng: Khi đó MA + MB + MC + MD = 4MG + GA + GB + GC + GD = 4MG )\n c) Sai: Dễ chứng minh được MN =\n 1\n 2\n (\n AD + BC )\n Ta có: MN = MA + AC + CN ; MN = MB + BD + DN . Do đó: 2MN = AC + BD",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-6-ly thuyet va xac dinh chung minh da-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b0351a970510ce",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian, cho tứ diện ABCD . Gọi M , N lần lượt là trung điểm AD, BC",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "AB, DC , MN đồng phẳng.",
        "content_en": "AB, DC , MN đồng phẳng.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "AB, AC , MN không đồng phẳng.",
        "content_en": "AB, AC , MN không đồng phẳng.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "AN , CM , MN đồng phẳng.",
        "content_en": "AN , CM , MN đồng phẳng.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "BD, AC , MN đồng phẳng.",
        "content_en": "BD, AC , MN đồng phẳng.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: MN =\n 1\n 2\n ( )\n AB + DC \\Rightarrow AB, DC , MN đồng phẳng\n b) Đúng: AB, AC , MN không đồng phẳng vì MN không nẳm trong ( ABC )\n c) Sai: AN , CM , MN đồng phẳng sai vì AN không nằm trong ( MNC )\n d) Đúng: MN =\n 1\n 2\n ( )\n BD + AC \\Rightarrow BD, AC , MN đồng phẳng",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:Đ",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-6-ly thuyet va xac dinh chung minh da-7",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-98697044ef036c",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian, cho tứ diện ABCD . Trên cạnh AD và BC lần lượt lấy các điểm M , N sao cho AM = 3MD và BN = 3 NC . Gọi P, Q lần lượt là trung điểm AD và BC .",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "PQ = AC + DB",
        "content_en": "PQ = AC + DB",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "MN = MA + AC + CN",
        "content_en": "MN = MA + AC + CN",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "MN = MD + DB + BN",
        "content_en": "MN = MD + DB + BN",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "BD, AC , MN đồng phẳng.",
        "content_en": "BD, AC , MN đồng phẳng.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Dễ chứng minh được 2PQ = AC + DB nên A sai\n b) Đúng: Theo giả thuyết ta có M , N là trung điểm của PD, QC\n  MN = MA + AC + CN\n c) Đúng:  .\n  MN = MD + DB + BN\n  MN = MA + AC + CN\n d) Đúng: Ta có \n 3MN = 3MD + 3DB + 3BN\n 1\n \\Rightarrow 4MN = AC - 3BD + BC \\Rightarrow BD, AC , MN không đồng phẳng.\n 2",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:Đ, d:Đ",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-6-ly thuyet va xac dinh chung minh da-8",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6088ab493fbc2b",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian. cho tứ diện ABCD. Gọi M , N lần lượt là trung điểm của các cạnh AD và BC , I là trung điểm MN .",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "AB - CD = AC - BD",
        "content_en": "AB - CD = AC - BD",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "AB + CD = AD + CB",
        "content_en": "AB + CD = AD + CB",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "AB + DC = 2MN",
        "content_en": "AB + DC = 2MN",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "IA + IB + IC + ID = 0",
        "content_en": "IA + IB + IC + ID = 0",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Sử dụng quy tắc ba điểm và quy tắc hiệu, ta có\n ( ) ( )\n AB - CD = AC + CB - CD = AC + CB - CD = AC + DB = AC - BD.\n b) Đúng: Theo quy tắc ba điểm, ta có AB = AD + DB .\n (\n Do đó AB + CD = AD + DB + CD = AD + CD + DB = AD + CB. )\n c) Đúng: AB + DC = 2MN\n d) Đúng: IA + IB + IC + ID = 0",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:Đ, d:Đ",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-6-ly thuyet va xac dinh chung minh da-11",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ca19d965f61d42",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian, cho tứ diện ABCD có các điểm M , N , P lần lượt thuộc các cạnh BC , BD và\n AC sao cho BC = 4 BM , AC = 3 AP, BD = 2 BN . Mặt phẳng ( MNP ) cắt đường thẳng AD tại\n AQ\n điểm Q . Tính tỉ số .\n AD",
    "question_en": "",
    "options": [],
    "solution_vi": "A\n P Q\n R\n B N D\n M\n C\n Đặt AB = a, AC = b, AD = c, AQ = k AD = kc\n 3 1 1\n ( )\n 1\n Theo đề bài, ta có: AM = a + b; AN = a + c ; AP = b .\n 4 4 2 3\n  1 1 1\n  MN = AN - AM = - 4 a - 4 b + 2 c\n \n  3 1\n Ta có:  MP = AP - AM = - a + b\n  4 12\n  3 1\n  MQ = AQ - AM = - 4 a - 4 b + kc\n \n  6\n  x=\n 0, 25 x + 0,75 y = 0,75 5\n  \n  1  3\n Vì M , N , P, Q đồng phẳng nên xMN + yMP = MQ \\Leftrightarrow 0, 25 x - y = 0, 25 \\Leftrightarrow  y = .\n  12  5\n 0,5 x = k  3\n k = 5\n \n 3 AQ 3\n Vậy AQ = AD \\Rightarrow = .\n 5 AD 5",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-6-ly thuyet va xac dinh chung minh da-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c2bab10d80b39b",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian, cho tứ diện S . ABC có SA = SB = SC = AB = AC = 2, BC = 2 2 . Hãy tính\n SC . AB .",
    "question_en": "",
    "options": [],
    "solution_vi": "S\n A C\n B\n28 \n Ta có: BC 2 = SB 2 + SC 2 ( 2.22 = 22 + 22 ) \\Rightarrow SBC vuông cân tại S .\n Mặt khác: SA = AC = SC = 2 \\Rightarrow SAC là tam giác đều.\n ( )\n SC. AB = SC SB - SA = SC.SB - SC.SA = 0 - SC.SA.cos ASC = -2.2.cos60 = -\n 22\n 2\n = -2 .\n Vậy SC. AB = -2 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-6-ly thuyet va xac dinh chung minh da-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-12f01fe6e9a6f4",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian, cho tứ diện ABCD . Gọi E , F lần lượt là trung điểm của AB, CD . Cho\n AB = 2a, CD = 2b, EF = 2c . Với M là một điểm tùy ý, biết tổng MA2 + MB 2 = k .ME 2 + l.a^2 .\n Tính k + l .",
    "question_en": "",
    "options": [],
    "solution_vi": "A\n E\n B D\n F\n C\n Áp dụng công thức độ dài đường trung tuyến, ta có:\n MA2 + MB 2 AB 2 AB 2\n ME 2 = - \\Rightarrow MA2 + MB 2 = 2ME 2 + = 2ME 2 + 2a 2 . Vậy k + l = 2 + 2 = 4 .\n 2 4 2",
    "solution_en": "",
    "correct_answer": "4",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-6-ly thuyet va xac dinh chung minh da-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b893d536643ea5",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho a và b là hai vectơ cùng hướng và đều khác vectơ 0 . Mệnh đề nào sau đây đúng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "a.b = a . b .",
        "content_en": "a.b = a . b .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "a.b = 0 .",
        "content_en": "a.b = 0 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "a.b = -1 .",
        "content_en": "a.b = -1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "a.b = - a . b .",
        "content_en": "a.b = - a . b .",
        "is_correct": false
      }
    ],
    "solution_vi": "( ) ( )\n Do a và b là hai vectơ cùng hướng nên a, b = 00 \\Rightarrow cos a, b = 1 . Vậy a.b = a . b .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-xac dinh goc va tinh tich vo huong cua h-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1c7065f93e513f",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hai vectơ a và b thỏa mãn điều kiện a = b = 1 và a.b = 3. Độ dài vectơ 3a + 5b :",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5 5.",
        "content_en": "5 5.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "24.",
        "content_en": "24.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8.",
        "content_en": "8.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "124.",
        "content_en": "124.",
        "is_correct": false
      }
    ],
    "solution_vi": "(3a + 5b ) = 9a + 30ab + 25b = 9 + 90 + 25 = 124 \\Rightarrow 3a + 5b = 124\n 2 2 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-xac dinh goc va tinh tich vo huong cua h-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c457bc51942bf6",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hai vectơ a, b thỏa mãn: a = 26; b = 28; a + b = 48 . Độ dài vectơ a - b bằng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "25.",
        "content_en": "25.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "616 .",
        "content_en": "616 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "9.",
        "content_en": "9.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "618 .",
        "content_en": "618 .",
        "is_correct": false
      }
    ],
    "solution_vi": "( ) = a + b - 2a.b = 2 ( a + b ) - ( a + b )\n 2 2 2 2 2 2 2\n Ta có: a - b = a - b\n (\n =2 a + b^2 2\n ) - a + b = 2( 26 + 28 ) - 48 = 616 \\Rightarrow a - b = 616.\n 2\n 2 2 2",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-xac dinh goc va tinh tich vo huong cua h-8",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7850b84e4d0cfb",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện ABCD có AB = AC = AD và BAC = BAD = 600 . Hãy xác định góc giữa cặp vectơ AB và CD ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "600 .",
        "content_en": "600 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "450 .",
        "content_en": "450 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1200 .",
        "content_en": "1200 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "900 .",
        "content_en": "900 .",
        "is_correct": false
      }
    ],
    "solution_vi": "A\n B D\n C\n6 \n ( )\n Ta có: AB.CD = AB. AD - AC = AB. AD - AB. AC = AB.AD.cos 600 - AB.AC.cos 600 = 0\n ( )\n \\Rightarrow AB, CD = 900",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-xac dinh goc va tinh tich vo huong cua h-9",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9a4d32b45faf9f",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện ABCD đều cạnh bằng a . Gọi O là tâm đường tròn ngoại tiếp tam giác BCD . Góc giữa AO và CD bằng bao nhiêu?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 0 .",
        "content_en": "0 0 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "300 .",
        "content_en": "300 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "900 .",
        "content_en": "900 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "600 .",
        "content_en": "600 .",
        "is_correct": false
      }
    ],
    "solution_vi": "A\n B\n D\n O\n C\n (\n Ta có AO.CD = CO - CA CD )\n a^3 3 1 a2 a2\n = CO.CD - CA.CD = CO.CD.cos30 - CA.CD.cos60 =\n 0\n .a. - a.a. =\n 0\n - = 0.\n 3 2 2 2 2\n Suy ra AO ⊥ CD .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-xac dinh goc va tinh tich vo huong cua h-12",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-63e39ac9dbaae2",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện ABCD có hai mặt ABC và ABD là các tam giác đều. Khẳng định nào sau đây đúng nhất.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "AB và CD chéo nhau",
        "content_en": "AB và CD chéo nhau",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "AB và CD vuông góc với nhau",
        "content_en": "AB và CD vuông góc với nhau",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "AB và CD đồng phẳng",
        "content_en": "AB và CD đồng phẳng",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "AB và CD cắt nhau",
        "content_en": "AB và CD cắt nhau",
        "is_correct": false
      }
    ],
    "solution_vi": "Chọn B\n8 \n Đặt AB = AD = AC = a\n ( ) 1 1\n Ta có CD. AB = AD - AC AB = AB AD cos 600 - AB AC cos 600 = a.a. - a.a. = 0\n 2 2\n Vậy AB ⊥ CD .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-6-xac dinh goc va tinh tich vo huong cua h-15",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2b71f975b63130",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện đều ABCD cạnh a. Gọi M là trung điểm của BC. Tính cos AB, DM ( )",
    "question_en": "",
    "options": [],
    "solution_vi": "a^3 a^3\n Xét tứ diện ABCD cạnh a ta có: DM = ; AM = .\n 2 2\n (\n Ta có cos AB, DM = ) AB.DM\n AB . DM\n =\n AM .DM\n a^3\n =\n 2 AM .DM\n 3\n .\n a2\n .\n a.\n 2\n (\n Tính AB.DM : ta có AB.DM = AB AM - AD = AB. AM - AB. AD )\n ( )\n = AB . AM .cos AB, AM - AB . AD .cos AB, AD = a.\n a^3 3\n .\n 2 2\n ( 1 a2\n - a.a. = .\n 2 4\n )\n (\n Vậy cos AB, DM = ) 6\n 3\n .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-6-xac dinh goc va tinh tich vo huong -1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-936f7ddad2f868",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một lực tĩnh điện F tác động lên điện tích điểm M trong điện trường đều làm cho M dịch\n chuyển theo đường gấp khúc MNP . Biết q = 2.10-12 (C) và vectơ cường độ điện trường có độ\n lớn E = 1,8.105 (N/C) và d = MH = 5 (mm). Tính công A sinh bởi lực tĩnh điện F .",
    "question_en": "",
    "options": [],
    "solution_vi": "Đổi 5 mm = 0,005 m\n Gọi K là điểm thuộc MH sao cho PK ⊥ MH , L là điểm thuộc HN sao cho PL ⊥ HN\n Ta có: AMNP = AMP + APN = Fd .MP cos 1 + Fd .PN cos  2\n MK PL\n \\Leftrightarrow AMNP = qE. .cos 1 + qE. .cos  2\n cos 1 cos  2\n \\Leftrightarrow AMNP = qE ( MK + PL ) = qE ( MK + KH ) = qE.MH = 2.10-12.1,8.105.0,005 = 1,8.10-9 (J)",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Vectơ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-6-xac dinh goc va tinh tich vo huong -5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c70c5a0463687e",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện OABC có OA , OB , OC đôi một vuông góc và OA = OB = 2a , OC = a^2 . Khi\n đó vectơ BC ( m ; n ; p ) . Khi a = 1 hãy tính giá trị biểu thức T = a + b + c .\n6",
    "question_en": "",
    "options": [],
    "solution_vi": "Xét hệ trục tọa độ Oxyz như sau điểm O là gốc tọa độ OA  Oz ; OB  Ox và OC  Oy .\n ( )\n Khi đó ta có O ( 0;0;0 ) ; A ( 0;0;2a ) ; B ( 2a;0;0 ) và C 0; a^2;0 .\n  m = 2a\n \n Vậy ta có vectơ khi đó là AB = ( 2a ;0; - 2a ) nên n = 0 \\Rightarrow T = 2a + 0 + ( -2a ) = 0\n  p = -2a\n ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-7-toa do hoa mot so hinh hoc khong gi-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f98a0374a5997e",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện SABC có SC = CA = AB = 3 2 , SC vuông góc ( ABC ) , tam giác ABC vuông tại\n A , các điểm M và N lần lượt thuộc SA và BC sao cho AM = CN = 2 . Tung độ của NB khi\n đó bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Chọn hệ trục tọa độ Oxyz thỏa C ( 0;0;0 )  O như hình vẽ.\n ( )\n Điểm B ( 0;6;0 ) \\in Oy , S 0;0;3 2 \\in Oz , A ( 3;3;0 ) .\n (\n Khi đó tọa độ N ( 0;2;0 ) ; M 2;2; 2 . )\n ( ) ( )\n NM = 2;0; 2 ; SB = 0;6; -3 2 và NB = ( 0;4;0 ) .\n -----------------HẾT-----------------\n12",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-7-toa do hoa mot so hinh hoc khong gi-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e32798221d993c",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , hình chiếu vuông góc của điểm A (1;2;5 ) lên trục Ox có tọa độ là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 0;2;0 ) .",
        "content_en": "( 0;2;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 0;0;5 ) .",
        "content_en": "( 0;0;5 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;0;0 ) .",
        "content_en": "(1;0;0 ) .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( 0;2;5 ) .",
        "content_en": "( 0;2;5 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Hình chiếu vuông góc của điểm A (1;2;5 ) lên trục Ox có tọa độ là (1;0;0 ) .",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-dcfc5882fe07b4",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , tọa độ hình chiếu của điểm A ( -2; -1;3) trên mặt phẳng Oyz là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 0; -1;0 )",
        "content_en": "( 0; -1;0 )",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -2;0;0 )",
        "content_en": "( -2;0;0 )",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 0; -1;3 )",
        "content_en": "( 0; -1;3 )",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( -2; -1;0 )",
        "content_en": "( -2; -1;0 )",
        "is_correct": false
      }
    ],
    "solution_vi": "Tọa độ hình chiếu của điểm A ( -2; -1;3) trên mặt phẳng Oyz là ( 0; -1;3 ) .",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3077c3f3dc6388",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ toạ độ Oxyz , cho điểm M (1;2;3) . Gọi H là hình chiếu vuông góc của M lên mặt phẳng ( Oxy ) . Toạ độ của H là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "H ( -1; -2;3) .",
        "content_en": "H ( -1; -2;3) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "H ( 0;0;3) .",
        "content_en": "H ( 0;0;3) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "H (1;0;0 ) .",
        "content_en": "H (1;0;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "H (1;2;0 ) .",
        "content_en": "H (1;2;0 ) .",
        "is_correct": true
      }
    ],
    "solution_vi": "Toạ độ điểm H là H (1;2;0 ) .",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-238742ad0be969",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho a = ( 2;3;2 ) và b = (1;1 - 1) . Vectơ a - b có tọa độ là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 3;4;1) .",
        "content_en": "( 3;4;1) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -1; -2;3) .",
        "content_en": "( -1; -2;3) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 3;5;1) .",
        "content_en": "( 3;5;1) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1;2;3) .",
        "content_en": "(1;2;3) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Vectơ a - b có tọa độ (1;2;3) .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f5ee0387dbd70c",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho điểm A (1;1;1) . Tìm tọa độ hình chiếu vuông góc của điểm A trên mặt phẳng ( Oxz ) .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "(1;0;1) .",
        "content_en": "(1;0;1) .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "( 0;1;0 ) .",
        "content_en": "( 0;1;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;1;0 ) .",
        "content_en": "(1;1;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 0;1;1) .",
        "content_en": "( 0;1;1) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tọa độ hình chiếu vuông góc của điểm A trên mặt phẳng ( Oxz ) là H (1;0;1) .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-aa63e5b28b6eaf",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ trục tọa độ Oxyz , cho a = -i + 2 j - 3k . Tọa độ của a là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -2; - 1; - 3) .",
        "content_en": "( -2; - 1; - 3) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -3;2; - 1) .",
        "content_en": "( -3;2; - 1) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 2; - 3; - 1) .",
        "content_en": "( 2; - 3; - 1) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( -1;2; - 3) .",
        "content_en": "( -1;2; - 3) .",
        "is_correct": true
      }
    ],
    "solution_vi": "Do đó, a = -i + 2 j - 3k = ( -1;2; - 3)",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-cabd1f16a7cf96",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ trục tọa độ Oxyz cho hai vector a (1;1; -2 ) , b = ( -2;1;4 ) . Tìm tọa độ của vector u = a - 2b.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 5; -1; -10 ) .",
        "content_en": "( 5; -1; -10 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 0;3;0 ) .",
        "content_en": "( 0;3;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -3;3;6 ) .",
        "content_en": "( -3;3;6 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 5; -1;10 ) .",
        "content_en": "( 5; -1;10 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "a (1;1; -2 )\n Ta có  \\Rightarrow u = a - 2b = ( 5; -1; -10 ) .\n b = ( -2;1;4 )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-8886c5496262c5",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho điểm A ( 3; -1;1) . Hình chiếu vuông góc của điểm A trên mặt phẳng ( Oyz ) là điểm",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "M ( 3;0;0 ) .",
        "content_en": "M ( 3;0;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "N ( 0; -1;1) .",
        "content_en": "N ( 0; -1;1) .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "P ( 0; -1;0 ) .",
        "content_en": "P ( 0; -1;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Q ( 0;0;1) .",
        "content_en": "Q ( 0;0;1) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có hình chiếu vuông góc của điểm A trên mặt phẳng ( Oyz ) là điểm N ( 0; -1;1)",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-8",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-efc9ca93215c5e",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , hình chiếu vuông góc của điểm A (1;2;5 ) trên mặt Oxz có tọa độ là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 0;2;5 ) .",
        "content_en": "( 0;2;5 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 0;2;0 ) .",
        "content_en": "( 0;2;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;0;5 ) .",
        "content_en": "(1;0;5 ) .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( 0;0;5 ) .",
        "content_en": "( 0;0;5 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Hình chiếu vuông góc của điểm A (1;2;5 ) trên mặt Oxz có tọa độ là (1;0;5 )",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-9",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-29da5cc1ace4bd",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho hai điểm A (1; - 1;2 ) và B ( 2;1; - 4 ) . Véctơ AB có tọa độ",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 3;0; - 2 ) .",
        "content_en": "( 3;0; - 2 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -1; - 2;6 ) .",
        "content_en": "( -1; - 2;6 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;0; - 6 ) .",
        "content_en": "(1;0; - 6 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1;2; - 6 ) .",
        "content_en": "(1;2; - 6 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = ( 2 - 1;1 - ( -1) ; - 4 - 2 ) = (1;2; - 6 )",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-48f8bfa17304e7",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho điểm A (1; -2;3) . Hình chiếu vuông góc của điểm A lên mặt phẳng ( Oyz ) có tọa độ là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "(1;0;3) .",
        "content_en": "(1;0;3) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "(1;0;0 ) .",
        "content_en": "(1;0;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1; -2;0 ) .",
        "content_en": "(1; -2;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 0; -2;3) .",
        "content_en": "( 0; -2;3) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Để tìm tọa độ hình chiếu của điểm A (1; -2;3) lên mặt phẳng ( Oyz ) ta chỉ cần giữ nguyên tung\n độ và cao độ, cho hoành độ bằng 0 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-12",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7be37f2a4b3c74",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho hai véctơ là u = ( 2;1; - 1) và v = (1;3;1) . Tọa độ của ( ) véctơ u + 2v tương ứng là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 3;4;0 ) .",
        "content_en": "( 3;4;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "(1; - 2; - 2 ) .",
        "content_en": "(1; - 2; - 2 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 4;7;1) .",
        "content_en": "( 4;7;1) .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( 5;5; - 1) . 6",
        "content_en": "( 5;5; - 1) . 6",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u + 2v = ( 4;7;1) .",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-13",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b827a72ae193bb",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho điểm A ( 2; -1;0 ) và điểm B ( 3;1;1) . Tọa độ điểm đối xứng với A qua B là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "(1; -2; -4 ) .",
        "content_en": "(1; -2; -4 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 0;3; -1) .",
        "content_en": "( 0;3; -1) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 4;3;2 ) .",
        "content_en": "( 4;3;2 ) .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( 0; -1;3 ) .",
        "content_en": "( 0; -1;3 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi A ( x; y; z ) là điểm đối xứng với A qua B \\Leftrightarrow B là trung điểm đoạn thẳng AA\n  2+ x\n  3 =\n 2\n  x = 4\n  -1 + y \n \\Leftrightarrow 1 = \\Leftrightarrow  y = 3 . Suy ra A ( 4;3;2 ) .\n  2 z = 2\n  0+ z \n 1 =\n  2",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-14",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-477a2373a85fd2",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho biểu diễn của vectơ a qua các vectơ đơn vị là a = 2i + k - 3 j . Tọa độ của vectơ a là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 2; - 3;1) .",
        "content_en": "( 2; - 3;1) .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "(1; - 3;2 ) .",
        "content_en": "(1; - 3;2 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 2;1; - 3) .",
        "content_en": "( 2;1; - 3) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1;2; - 3) .",
        "content_en": "(1;2; - 3) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: a = 2i + k - 3 j = 2i - 3 j + 1.k \\Rightarrow a = ( 2; -3;1) .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-15",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5bdadd9340e9ba",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho điểm M thỏa mãn hệ thức OM = 2i + j . Tọa độ điểm M là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "M = ( 0;2;1) .",
        "content_en": "M = ( 0;2;1) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "M = (1;2;0 ) .",
        "content_en": "M = (1;2;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "M = ( 2;1;0 ) .",
        "content_en": "M = ( 2;1;0 ) .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "M = ( 2;0;1) .",
        "content_en": "M = ( 2;0;1) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Vì điểm M thỏa mãn hệ thức OM = 2i + j nên tọa độ điểm M = ( 2;1;0 ) .",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-16",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b5670d007cff66",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ O ; i ; j ; k , cho hai vectơ a = (1;2;3) và b = 2i - 4k . Tính tọa độ vectơ u = a - b",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u = ( -1;2; - 1) .",
        "content_en": "u = ( -1;2; - 1) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u = ( -1; - 2;3) .",
        "content_en": "u = ( -1; - 2;3) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u = ( -1;6;3) .",
        "content_en": "u = ( -1;6;3) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u = ( -1;2;7 ) .",
        "content_en": "u = ( -1;2;7 ) .",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có: i = (1;0;0 ) ; j = ( 0;1;0 ) ; k = ( 0;0;1) nên b = 2i - 4k \\Rightarrow b = ( 2;0; - 4 ) .\n Suy ra u = a - b = ( -1;2;7 ) .\n ( )",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-18",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-db8757c2fbdd35",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz cho ba điểm M ( 2;0;0 ) ; N ( 0; -3;0 ) ; P ( 0;0;4 ) . Nếu MNPQ là hình bình hành thì tọa độ điểm Q là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -2; -3;4 ) .",
        "content_en": "( -2; -3;4 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -2; -3; -4 ) .",
        "content_en": "( -2; -3; -4 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 2;3;4 ) .",
        "content_en": "( 2;3;4 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 3;4;2 ) .",
        "content_en": "( 3;4;2 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi Q ( x; y; z ) khi đó MN = ( -2; -3;0 ) ; QP = ( - x; - y;4 - z ) .\n - x = -2 x = 2\n  \n Tứ giác MNPQ là hình bình hành \\Leftrightarrow MN = QP \\Leftrightarrow - y = -3 \\Leftrightarrow  y = 3 . Vậy Q ( 2;3;4 ) .\n 4 - z = 0 z = 4\n  ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-20",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3b8975bea2272d",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho ba điểm A ( - 4;1; - 5 ) , B ( 2; - 4;7 ) , C ( 3; - 2;9 ) . Tọa độ điểm D để ABCD là hình bình hành là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "D ( 2;3; - 3) .",
        "content_en": "D ( 2;3; - 3) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "D ( - 3;3; - 3) .",
        "content_en": "D ( - 3;3; - 3) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "D ( - 3; - 3;3) .",
        "content_en": "D ( - 3; - 3;3) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "D ( - 6;5; - 12 ) .",
        "content_en": "D ( - 6;5; - 12 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": " xD + 4 = 1  x D = -3\n  \n Ta có BC = ( 1;2;2 ) ; ABCD là hình bình hành \\Leftrightarrow AD = BC \\Leftrightarrow  yD - 1 = 2 \\Leftrightarrow  yD = 3 .\n z + 5 = 2  z = -3\n  D  D",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-22",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-eea89d14de069f",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gia Oxyz , cho véctơ a = ( -3;2;1) và điểm A ( 4;6; -3) . Tọa độ điểm B thỏa mãn AB = a là:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -1; -8;2 ) .",
        "content_en": "( -1; -8;2 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 7;4; -4 ) .",
        "content_en": "( 7;4; -4 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;8; -2 ) .",
        "content_en": "(1;8; -2 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( -7; -4;4 ) . 8",
        "content_en": "( -7; -4;4 ) . 8",
        "is_correct": false
      }
    ],
    "solution_vi": " x - 4 = -3 x = 1\n  \n Gọi B ( x; y; z ) . Khi đó AB = ( x - 4; y - 6; z + 3) . Khi đó AB = a \\Leftrightarrow  y - 6 = 2 \\Leftrightarrow  y = 8 .\n z + 3 = 1  z = -2\n  ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-23",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-55c2f507b2e4d2",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho ba điểm A ( 0;1; -2 ) , B (1;2;1) , C ( 4;3; m ) . Tìm m phẳng.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -7 .",
        "content_en": "m = -7 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = -14 .",
        "content_en": "m = -14 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 7 .",
        "content_en": "m = 7 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 14 .",
        "content_en": "m = 14 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Để 4 điểm O, A, B, C đồng phẳng \\Leftrightarrow OC = aOA + bOB \\Leftrightarrow ( 4;3; m ) = a ( 0;1; -2 ) + b (1;2;1)\n 4 = b b = 4\n  \n \\Rightarrow 3 = a + 2b \\Leftrightarrow a = -5 .\n m = -2a + b m = 14\n  ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-27",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e92d86fe0aabaf",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ trục tọa độ Oxyz , cho ba điểm A (1;2; -1) , B ( 2; -1;3) và C ( -3;5;1) . Điểm D là đỉnh thứ tư của hình bình hành ABCD . Hãy chọn khẳng định đúng trong các khẳng định sau?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "D ( -4;8; -3) .",
        "content_en": "D ( -4;8; -3) .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "D ( -2;8; -3) .",
        "content_en": "D ( -2;8; -3) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "D ( -4;8; -5 ) .",
        "content_en": "D ( -4;8; -5 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "D ( -2;2;5 ) .",
        "content_en": "D ( -2;2;5 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử D ( x; y; z ) .\n -3 - x = 1  x = -4\n  \n Tứ giác ABCD là hình bình hành \\Leftrightarrow AB = DC \\Leftrightarrow 5 - y = -3 \\Rightarrow  y = 8\n 1 - z = 4  z = -3\n  \n Vậy D ( -4;8; -3) .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-28",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3bd42226ba9090",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong mặt phẳng tọa độ Oxyz , cho A ( 0;2; -1) ; B ( 2;1;5 ) ; C (1;6;2 ) và hai điểm M , N thỏa mãn MN = NA + NB + NC . Đường thẳng MN luôn đi qua điểm I có tọa độ",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 2;3;5 ) .",
        "content_en": "( 2;3;5 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 2;0;3) .",
        "content_en": "( 2;0;3) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 2; -1;3 ) .",
        "content_en": "( 2; -1;3 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1;3;2 ) .",
        "content_en": "(1;3;2 ) .",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có MN = NA + NB + NC \\Leftrightarrow MN = MA + MB + MC - 3MN \\Leftrightarrow 4MN = MA + MB + MC\n 3\n Gọi G là trọng tâm ABC , khi đó 4MN = 3MG \\Leftrightarrow MN = MG \\Rightarrow MN , MG cùng phương\n 4\n \\Rightarrow M , G , N thẳng hàng với G (1;3;2 ) . Vậy điểm I (1;3;2 ) là điểm cần tìm.",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-7-ly thuyet va toa do diem toa do vecto tr-29",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d2bae5284a915e",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho ba vectơ a = ( -1;1;0 ) , b = (1;1;0 ) , c = (1;1;1) .",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Độ dài vectơ a bằng 2.",
        "content_en": "Độ dài vectơ a bằng 2.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Vectơ b vuông góc với a .",
        "content_en": "Vectơ b vuông góc với a .",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Vectơ b vuông góc với c .",
        "content_en": "Vectơ b vuông góc với c .",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tọa độ vectơ 3a + 2b - c bằng ( -2;4; -1) .",
        "content_en": "Tọa độ vectơ 3a + 2b - c bằng ( -2;4; -1) .",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Vì a = (-1) 2 + 12 + 0 = 2.\n b) Đúng: Vì ab = ( -1) .1 + 1.1 + 0 = 0\n c) Sai: Vì bc = 1.1 + 1.1 + 0.1 = 2.\n d) Sai: Vì 3a + 2b - c = ( -2;4; -1) .",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:S",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-7-ly thuyet va toa do diem toa do vec-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-db221d741576a2",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho a = i + 3k - 4 j và b = ( m - n;4m - 6n; n 2 - 3m + 2 ) , với m, n là tham số.",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tọa độ a = (1;3; -4 ) .",
        "content_en": "Tọa độ a = (1;3; -4 ) .",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Dựng điểm A thỏa OA = a thì A (1; -4;3) .",
        "content_en": "Dựng điểm A thỏa OA = a thì A (1; -4;3) .",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Tồn tại giá trị của m và n để b = 0 .",
        "content_en": "Tồn tại giá trị của m và n để b = 0 .",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Nếu a = b thì m + n = 9 .",
        "content_en": "Nếu a = b thì m + n = 9 .",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Tọa độ a = (1; -4;3) .\n b) Đúng: Khi OA = a thì tọa độ a cũng là tọa độ điểm A . Suy ra A (1; -4;3) .\n m - n = 0 m = 0\n  \n c) Sai: b = 0 \\Leftrightarrow 4m - 6n = 0 \\Leftrightarrow n = 0 . (vô nghiệm).\n n 2 - 3m + 2 = 0 n 2 - 3m + 2 = 0\n  \n Vậy không tồn tại m, n để b = 0 .\n m - n = 1\n  m = 5\n d) Đúng: a = b \\Leftrightarrow 4m - 6n = -4 \\Leftrightarrow  . Suy ra m + n = 9 .\n n 2 - 3m + 2 = 3 n = 4\n ",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:S, d:Đ",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-7-ly thuyet va toa do diem toa do vec-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b26a12ecfa3ef5",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho a = ( 2;2;0 ) , b = 2 j + 2k . Dựng OA = a và OB = b .",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "a = 2i + 2k .",
        "content_en": "a = 2i + 2k .",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Toạ độ b = ( 0;2;2 ) .",
        "content_en": "Toạ độ b = ( 0;2;2 ) .",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Toạ độ AB = ( -2;2;0 )",
        "content_en": "Toạ độ AB = ( -2;2;0 )",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Góc AOB = 45 .",
        "content_en": "Góc AOB = 45 .",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Sai: Ta có a = (2;0;2) \\Rightarrow a = 2i + 2k .\n b) Đúng: Ta có b = 2 j + 2k \\Rightarrow b = (0;2;2) .\n c) Đúng: Ta có OA = a thì toạ độ véc tơ a cũng chính là toạ độ A \\Rightarrow A ( 2;0;2 ) .\n Tương tự B (0;2;2) . Từ đây, ta tính được AB = (-2;2;0)\n d) Sai: Nhận xét OHMK .PANB là hình lập phương suy ra OAB đều. Vậy AOB = 60 .",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:Đ, d:S",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-7-ly thuyet va toa do diem toa do vec-6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-cd48a3fa6c2694",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz cho các véc tơ u = 2i - 2 j + k , v = ( m;2; m + 1) với m là\n tham số thực. Có bao nhiêu giá trị của m để u = v .",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có u = ( 2; - 2;1)\n Khi đó u = 22 + ( -2 ) + 12 = 3 và v = m2 + 22 + ( m + 1) = 2m2 + 2m + 5\n 2 2\n m = 1\n Do đó u = v \\Leftrightarrow 9 = 2m2 + 2m + 5 \\Leftrightarrow m2 + m - 2 = 0 \\Leftrightarrow  nên có hai giá trị.\n  m = -2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-7-ly thuyet va toa do diem toa do vec-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b5cb981491d365",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho hai điểm A ( 3;1; - 2 ) , B ( 2; - 3;5 ) . Điểm M thuộc đoạn AB sao\n cho MA = 2 MB , tọa độ điểm M là ( a ; b ; c ) . Khi đó a + b + c bằng?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi M ( x; y;z ) .\n  7\n x = 3\n 3 - x = -2 ( 2 - x ) \n   5\n Vì M thuộc đoạn AB nên: MA = -2 MB \\Leftrightarrow 1 - y = -2 ( -3 - y ) \\Leftrightarrow  y = - \\Rightarrow a + 3b + c = 0\n   3\n  -2 - z = -2 ( 5 - z )  8\n z = 3\n ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-7-ly thuyet va toa do diem toa do vec-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3d6faf8b78768b",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz cho hai điểm A ( 4; 2; 1) , B ( -2; - 1;4 ) . Tìm được tọa độ\n điểm M ( a; b; c ) thỏa mãn đẳng thức AM = 2MB . Khi đó a + b + c = ?",
    "question_en": "",
    "options": [],
    "solution_vi": " x - 4 = 2 ( -2 - x ) x = 0\n  \n Gọi điểm M ( x; y; z ) . Khi đó: AM = 2MB \\Leftrightarrow  y - 2 = 2 ( -1 - y ) \\Leftrightarrow  y = 0 .\n  z = 3\n z -1 = 2(4 - z ) \n Vậy M ( 0;0;3) nê a + b + c = 3",
    "solution_en": "",
    "correct_answer": "3",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-7-ly thuyet va toa do diem toa do vec-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-48c3a4306f1fc7",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz cho ba điểm M ( 2;3; - 1) , N ( -1;1;1) và P (1; m - 1;2 ) .\n Tìm m để tam giác MNP vuông tại N .",
    "question_en": "",
    "options": [],
    "solution_vi": "MN ( -3; -2;2 ) ; NP ( 2; m - 2;1) .\n Tam giác MNP vuông tại N \\Leftrightarrow MN .NP = 0 \\Leftrightarrow -6 - 2 ( m - 2 ) + 2 = 0 \\Leftrightarrow m - 2 = -2 \\Leftrightarrow m = 0 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-7-ly thuyet va toa do diem toa do vec-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7d0a7632d7a370",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Trong không gian với một hệ trục toạ độ cho trước (đơn vị đo lấy theo km), ra đa phát hiện một\n chiếc máy bay di chuyển với vận tốc và hướng không đổi từ điểm A ( 800;500;7 ) đến điểm\n B ( 940;550;8 ) trong 10 phút. Nếu máy bay tiếp tục giữ nguyên vận tốc và hướng bay thì toạ độ\n của máy bay sau 10 phút tiếp theo D ( x; y; z ) . Khi đó x + y + z = ?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi D ( x; y; z ) là vị trí của máy bay sau 10 phút bay tiếp theo (tính từ thời điểm máy bay ở điểm\n B ). Vì hướng của máy bay không đổi nên AB và BD cùng hướng. Do vận tốc máy bay không\n đổi và thời gian bay từ A đến B bằng thời gian bay từ B đến D nên AB = BD .\n Do đó, BD = AB = (140;50;1) .\n  x - 940 = 140  x = 1080\n  \n Mặt khác: BD = ( x - 940; y - 550; z - 8 ) nên  y - 550 = 50 \\Leftrightarrow  y = 600\n z - 8 = 1 z = 9\n  \n Vậy D (1080;600;9 ) . Vậy tọa độ của máy bay trong 10 phút tiếp theo là (1080;600;9 ) .\n Suy ra x + y + z = 1689",
    "solution_en": "",
    "correct_answer": "1689",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-7-ly thuyet va toa do diem toa do vec-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-850cdd9ba5f5d9",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho biết máy bay A đang bay với vectơ vận tốc a = ( 300;200;400 ) (đơn vị: km/h). Máy bay B\n bay cùng hướng và có tốc độ gấp ba lần tốc độ của máy bay A .\n Tính tốc độ của máy bay B .",
    "question_en": "",
    "options": [],
    "solution_vi": "3.300 = x  x = 900\n  \n Ta có: 3a = b \\Leftrightarrow 3.200 = y \\Leftrightarrow  y = 600 \\Rightarrow b = ( 900;600;1200 )\n 3.400 = z \n   z = 1200\n Tốc độ của máy bay B là: b = 9002 + 6002 + 12002  1615,55 (km/h)\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Hệ tọa độ trong không gian",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-7-ly thuyet va toa do diem toa do vec-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-61a575da12efe4",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Giá trị lớn nhất của hàm số y = 16 - x^2 là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "16 .",
        "content_en": "16 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y = 16 - x^2 \\le 4 , dấu “=” khi x = 0 . Vậy max y = 4 .\n  -4;4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-ly thuyet va bai toan tim max min cua ha-17",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ba03358aa05ca1",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Gọi M , m lần lượt là giá trị lớn nhất, giá trị nhỏ nhất của hàm số y = x 16 - x^2 . Tính M + m",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8 - 8 .",
        "content_en": "8 - 8 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "8.",
        "content_en": "8.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "8 .",
        "content_en": "8 .",
        "is_correct": false
      }
    ],
    "solution_vi": "x2 16 - 2 x^2\n Điều kiện xác định -4 \\le x \\le x . Đạo hàm y = 16 - x^2 - = .\n 16 - x^2 16 - x^2\n Ta có y = 0 \\Leftrightarrow 16 - 2 x^2 = 0 \\Leftrightarrow x = \\pm 8\n (\n Xét y ( -4 ) = y ( 4 ) = 0 ; y - 8 = -8 ; y ) ( 8 ) = 8 do đó M = 8, m = -8 . Vậy M + m = 0 .\n 9",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-ly thuyet va bai toan tim max min cua ha-18",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-8a1f1b387234ff",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số f ( x ) = 2 x + 14 + 5 - x . Mệnh đề nào sau đây đúng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Hàm số đạt giá trị lớn nhất tại x = -7 .",
        "content_en": "Hàm số đạt giá trị lớn nhất tại x = -7 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Hàm số đạt giá trị lớn nhất bằng 2 6 .",
        "content_en": "Hàm số đạt giá trị lớn nhất bằng 2 6 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Hàm số đạt giá trị nhỏ nhất tại x = 1 .",
        "content_en": "Hàm số đạt giá trị nhỏ nhất tại x = 1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Hàm số đạt giá trị nhỏ nhất bằng 2 3 .",
        "content_en": "Hàm số đạt giá trị nhỏ nhất bằng 2 3 .",
        "is_correct": true
      }
    ],
    "solution_vi": "Tập xác định D =  -7;5 .\n 1 1\n Ta có f  ( x ) = - ; f  ( x ) = 0 \\Leftrightarrow 2 x + 14 = 2 5 - x \\Leftrightarrow x = 1( n ) .\n 2 x + 14 2 5- x\n f (1) = 16 ; f ( -7 ) = 2 3 ; f ( 5 ) = 2 6 \\Rightarrow max f ( x ) = 16 x = 1 và min f ( x ) = 2 3\n -7 ; 5  -7 ; 5\n Vậy hàm số đạt giá trị nhỏ nhất bằng 2 3 là mệnh đề đúng.\n 4",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-ly thuyet va bai toan tim max min cua ha-22",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a566b1426eb18a",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Giá trị lớn nhất của hàm số y = x - 3 + 5 - x là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2.",
        "content_en": "2.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2.",
        "content_en": "2.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D = 3;5\n  x-3 = 5- x x - 3 = 5 - x\n 1 1 \n Ta có y ' = - = 0 \\Leftrightarrow x - 3 > 0 \\Leftrightarrow x > 3 \\Leftrightarrow x = 4.\n 2 x-3 2 5- x 5 - x > 0 x < 5\n  \n Ta có: f ( 3) = f ( 5 ) = 2 ; f ( 4 ) = 2 . Vậy giá trị lớn nhất của hàm số là 2.\n x2 + x + 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-ly thuyet va bai toan tim max min cua ha-24",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-23bfcdf7b71fbc",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Giá trị lớn nhất của hàm số f ( x ) = bằng 2 + sin x",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4 2 - 4 .",
        "content_en": "4 2 - 4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "8 - 4 3 .",
        "content_en": "8 - 4 3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "1 + cos2x 2 - 2sin 2 x\n Ta có: f ( x ) = =\n 2 + sin x^2 + sin x\n ( 2 - 2sin x ) .( 2 + sin x ) - ( 2 + sin x ) ( 2 - 2sin x )\n 2 2\n \\Rightarrow f x =( )\n ( 2 + sinx )\n 2\n -4sin x.cosx. ( 2 + sin x ) - cosx ( 2 - 2sin 2 x ) -2cosx. ( sin 2 x + 4sin x + 1)\n = =\n ( 2 + sinx ) ( 2 + sinx )\n 2 2\n -2cosx. ( sin 2 x + 4sin x + 1) cos x = 0\n \\Rightarrow f ( x) = 0 \\Leftrightarrow =0\\Leftrightarrow \n ( 2 + sinx ) sin x = -2 + 3\n 2\n  \n  x = 2 + k\n \n \n (\n \\Leftrightarrow  x = arcsin -2 + 3 + k 2 )\n (k \\in ).\n  (\n  x =  - arcsin -2 + 3 + k 2 )\n Do hàm số y = f ( x ) tuần hoàn với chu kì 2 nên chỉ xét trên đoạn  - ;   ta có:\n     \n \n ( ) ( )\n x \\in arcsin -2 + 3 ; - arcsin -2 + 3 ; \\pm  .Tính được: f  -  = 0; f   = 1.\n  2  2 2\n ( (\n f arcsin -2 + 3 )) = f ( - arcsin ( -2 + 3 )) = 8 - 4 3 = max f ( x ).",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-ly thuyet va bai toan tim max min cua ha-34",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-84f5f5f9cfc163",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số f ( x ) = 4 x3 - 9 x^2 - 30 x . Với các số nguyên a , b mà a < b thì giá trị nhỏ nhất của\n f ( b ) - f ( a ) bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": " x = -1\n Ta có f ( x ) = 12 x - 18 x - 30 = 0 \\Leftrightarrow \n  2\n . Bảng biến thiên\n x = 5\n  2\n  f ( b ) < 0\n Với các số nguyên a , b mà a < b , để f ( b ) - f ( a ) đạt giá trị nhỏ nhất thì \n  f ( a ) > 0\n \\Rightarrow f ( b ) = f ( 2 ) = -64; f ( a ) = f ( -1) = 17 . Vậy giá trị nhỏ nhất của f ( b ) - f ( a ) bằng -81 .",
    "solution_en": "",
    "correct_answer": "-81",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-ly thuyet va bai toan tim max min c-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e5798b6f8be540",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm giá trị nhỏ nhất của hàm số y = x^2 +\n x",
    "question_en": "",
    "options": [],
    "solution_vi": "16 16 16\n Ta có: y = x^2 + \\Rightarrow y = 2 x - 2 = 0 \\Rightarrow 2 x - 2 = 0 \\Rightarrow 2 x3 - 16 = 0 \\Rightarrow x = 2 \\in 1;4\n x x x\n Khi đó: y (1) = 17; y ( 2 ) = 12; y ( 4 ) = 20.\n trên đoạn 1; 4 bằng 12.\n 16\n Vậy giá trị nhỏ nhất của hàm số y = x^2 +\n x\n . Tìm giá trị nhỏ nhất của hàm số trên  -1; 2\n 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-ly thuyet va bai toan tim max min c-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-8fe41541aeb870",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một loại vi khuẩn được tiêm một loại thuốc kích thích sự sinh sản. Sau t phút, số vi khuẩn được\n xác định theo công thức N ( t ) = 1000 + 30t 2 - t 3 ( 0 \\le t \\le 30 ) . Hỏi sau bao giây thì số vi khuẩn\n lớn nhất?",
    "question_en": "",
    "options": [],
    "solution_vi": "Xét hàm số N ( t ) = 1000 + 30t 2 - t 3 ( 0 \\le t \\le 30 ) .\n t = 0\n Ta có: N  ( t ) = 60t - 3t 2 = 0 \\Leftrightarrow \n t = 20\n Với t = 20 giây thì số vi khuẩn lớn nhất.\n -----------------HẾT-----------------\n26",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-ly thuyet va bai toan tim max min c-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a26571b6025c79",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một chất điểm chuyển động với quãng đường s ( t ) cho bởi công thức s ( t ) = 6t 2 - t 3 , t (giây) là thời gian. Hỏi trong khoảng thời gian từ 0 đến 4 giây, vận tốc tức thời của chất điểm đạt giá trị lớn nhất tại thời điểm t (giây) bằng bao nhiêu?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "t = 3 s.",
        "content_en": "t = 3 s.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "t = 4 s.",
        "content_en": "t = 4 s.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "t = 2 s.",
        "content_en": "t = 2 s.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "t = 6 s.",
        "content_en": "t = 6 s.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có v ( t ) = s ( t ) = 12t - 3t ; v ( t ) = 12 - 6t = 0 \\Leftrightarrow t = 2\n 2\n Lập bảng biến thiên ta thấy v ( t ) đạt giá trị lớn nhất tại t = 2 giây.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-bai toan toi uu thuc te lien quan den ma-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b84caa35660385",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong 3 giây đầu tiên, một chất điểm chuyển động theo phương trình s ( t ) = -t 3 + 6t 2 + t + 5 , trong đó t tính bằng giây và s tính bằng mét. Chất điểm có vận tốc tức thời lớn nhất bằng bao nhiêu trong 3 giây đầu tiên đó?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "13 m/s.",
        "content_en": "13 m/s.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "10 m/s.",
        "content_en": "10 m/s.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "9 m/s.",
        "content_en": "9 m/s.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "12 m/s.",
        "content_en": "12 m/s.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có v ( t ) = s ( t ) = -3t + 12t + 1 . Xét hàm số v ( t ) = -3t 2 + 12t + 1 trên đoạn  0;5\n 2\n v ( t ) = -6t + 12 = 0 \\Leftrightarrow t = 2\n Tính các giá trị v ( 0 ) = 1; v ( 2 ) = 13; v ( 3) = 10\n So sánh các giá trị ta suy ra max v ( t ) = 13 .\n 0 ; 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-bai toan toi uu thuc te lien quan den ma-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f756cc4900ae49",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Độ giảm huyết áp của một bệnh nhân được cho bởi công thức G ( x ) = 0,025 x^2 ( 30 - x ) , trong đó x là liều lượng thuốc được tiêm cho bệnh nhân ( x được tính bằng miligam). Liều lượng thuốc cần tiêm cho bệnh nhân là bao nhiêu để huyết áp được giảm nhanh nhất?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "24 mg.",
        "content_en": "24 mg.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "20 mg.",
        "content_en": "20 mg.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "15 mg.",
        "content_en": "15 mg.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "10 mg.",
        "content_en": "10 mg.",
        "is_correct": false
      }
    ],
    "solution_vi": "Bài toán trở thành tìm x \\in  0;30 để hàm số G ( x ) = 0,025 x^2 ( 30 - x ) đạt giá trị lớn nhất\n x = 0\n Ta có: G ( x ) = 0,025 x^2 ( 30 - x ) \\Rightarrow G ( x ) = 0,025 ( 60 x - 3x 2 ) = 0 \\Leftrightarrow \n  x = 25\n Bảng biến thiên\n Từ bảng biến thiên ta thấy max G ( x ) = G ( 20 ) = 100\n 0; 30\n Vậy liều lượng thuốc cần tiêm cho bệnh nhân để huyết áp giảm nhanh nhất là 20 mg.\n4",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-bai toan toi uu thuc te lien quan den ma-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3df1a6c8130cb2",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong thí nghiệm y học, người ta cấy 1000 vi khuẩn vào môi trường dinh dưỡng. Bằng thực nghiệm, người ta xác định số lượng vi khuẩn thay đổi theo thời gian bởi công thức: 100 N ( t ) = 1000 + (con) 100 + t 2 Trong đó t là thời gian tính bằng giây. Tính số lượng vi khuẩn lớn nhất kể từ khi thực hiện cấy vi khuẩn vào môi trường dinh dưỡng.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1008 con.",
        "content_en": "1008 con.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1012 con.",
        "content_en": "1012 con.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1005 con.",
        "content_en": "1005 con.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "1020 con.",
        "content_en": "1020 con.",
        "is_correct": false
      }
    ],
    "solution_vi": "100 100.(100 + t 2 ) - 100t.2t 100 (100 - t 2 )\n Xét hàm số N ( t ) = 1000 + có N  ( t ) = =\n 100 + t 2 (100 + t 2 ) (100 + t 2 )\n 2 2\n Khi đó với t > 0 N  ( t ) = 0 \\Leftrightarrow 100 - t 2 = 0 \\Leftrightarrow t = 10\n Bảng biến thiên của hàm số N ( t ) như sau:\n Căn cứ vào bảng biến thiên ta thấy trên khoảng ( 0;+ \\infty ) hàm số N ( t ) đạt giá trị lớn nhất bằng\n 1005 tại t = 10 .\n Vậy số lượng vi khuẩn lớn nhất kể từ khi thực hiện nuôi cấy vào môi trường dinh dưỡng là 1005\n con.",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-bai toan toi uu thuc te lien quan den ma-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-84212b5720d0ff",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tam giác vuông có cạnh huyền bằng 5 cm có thể có diện tích lớn nhất bằng bao nhiêu? 125 625",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "25 cm 2 .",
        "content_en": "25 cm 2 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "cm 2 .",
        "content_en": "cm 2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "cm 2 .",
        "content_en": "cm 2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "125cm 2 . 4 4",
        "content_en": "125cm 2 . 4 4",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi một cạnh góc vuông là x ( 0 < x < 5 ) thì cạnh góc vuông còn lại là 25 - x^2\n x 25 - x^2\n Như vậy, diện tích S = . Đặt f ( x ) = 25 x^2 - x^4\n 2\n 5 2\n Ta có f  ( x ) = 50 x - 4 x^3 . Khi đó f  ( x ) = 0 \\Leftrightarrow x =\n 2\n  5 2  625\n Vì vậy max f ( x ) = f \n ( 0; 5)  2  = 4\n  \n 625\n Vậy tam giác vuông có cạnh huyền bằng 5 cm có thể có diện tích lớn nhất bằng cm 2 .\n 4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-bai toan toi uu thuc te lien quan den ma-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9870df3379e2d9",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho một tấm tôn hình chữ nhật có kích thước 10cm x 16cm . Người ta cắt bỏ 4 góc của tấm tôn 4 miếng hình vuông bằng nhau rồi gò lại thành một hình hộp chữ nhật không có nắp. Để thể tích của hình hộp đó lớn nhất thì độ dài cạnh hình vuông của các miếng tôn bị cắt bỏ bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3m .",
        "content_en": "3m .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "4 m .",
        "content_en": "4 m .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "5m .",
        "content_en": "5m .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2 m .",
        "content_en": "2 m .",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử độ dài cạnh hình vuông của các miếng tôn bị cắt bỏ bằng x, ( 0 < 2 x < 10,0 < x < 5 ) .\n Khi đó hình hộp chữ nhật có chiều cao bằng x , chiều rộng bằng 10 - 2x và chiều dài bằng\n 16 - 2x\n Suy ra hình hộp chữ nhật có thể tích V = x (10 - 2 x )(16 - 2 x ) = 4 x^3 - 52 x^2 + 160 x\n Xét hàm số f ( x ) = 4 x3 - 52 x^2 + 160 x trên ( 0;5 ) có tập xác định là D =\n x = 2\n f  ( x ) = 12 x - 104 x + 160 = 0 \\Leftrightarrow \n 2\n . Bảng biến thiên hàm số f ( x ) trên ( 0;5 ) như sau:\n  x = 20\n  3\n Dựa vào bảng biến thiên ta có hàm số đạt giá trị lớn nhất trên ( 0;5 ) tại x = 2 hay hình hộp chữ\n nhật có thể tích lớn nhất khi độ dài cạnh hình vuông của miếng tôn bị cắt bỏ bằng 2m.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-bai toan toi uu thuc te lien quan den ma-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b40e4cdd585cbc",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Ông Bình dự định sử dụng hết 5,5m 2 kính để làm một bể cá bằng kính có dạng hình hộp chữ nhật không nắp, chiều dài gấp đôi chiều rộng (các mối ghép có kích thước không đáng kể). Bể cá có dung tích lớn nhất bằng bao nhiêu (làm tròn đến hàng phần trăm)?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1,01m 3 .",
        "content_en": "1,01m 3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1,17m 3 .",
        "content_en": "1,17m 3 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1,51m 3 .",
        "content_en": "1,51m 3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1, 40 m 3 . 6",
        "content_en": "1, 40 m 3 . 6",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x, 2 x, y với x, y > 0 lần lượt là chiều rộng, chiều dài, chiều cao của bể cá.\n 5,5 - 2 x^2\n Theo giả thiết ta có: 2.2 xy + 2.xy + 2 x^2 = 5,5 \\Leftrightarrow 6 xy + 2 x^2 = 5,5 \\Leftrightarrow y =\n 6x\n 11\n Do y > 0 nên 5,5 - 2 x^2 > 0 \\Rightarrow 0 < x <\n 2\n 5,5 - 2 x^2 2 11\n Thể tích bể cá là: V ( x ) = 2 x^2 y = 2 x^2 . = - x3 + x\n 6x 3 6\n 2 11  11  11 11\n Xét hàm số V ( x ) = - x3 + x trên khoảng  0;  có V  ( x ) = -2 x + = 0 \\Leftrightarrow x =\n 2\n 3 6  2  6 12\n Bảng biến thiên:\n  11 \n  12  = 1,17m\n Thể tích lớn nhất của bể cá là V  3\n  ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-bai toan toi uu thuc te lien quan den ma-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1879ff686a3b07",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Người ta muốn xây một chiếc bể nước có hình dạng là một khối hộp chữ nhật không nắp có thể 500 3 tích bằng m . Biết đáy bể là một hình chữ nhật có chiều dài gấp đôi chiều rộng và giá thuê 3 thợ xây là 700000 đồng/ m 2 . Tìm kích thước của bể để chi phí thuê nhân công ít nhất. Khi đó chi phí thuê nhân công là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "120 triệu đồng.",
        "content_en": "120 triệu đồng.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "105 triệu đồng.",
        "content_en": "105 triệu đồng.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "115 triệu đồng.",
        "content_en": "115 triệu đồng.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "110 triệu đồng.",
        "content_en": "110 triệu đồng.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x, y lần lượt là chiều rộng và chiều cao của bể cá (điều kiện x, y > 0 ).\n 500 250\n Với giả thiết của bài toán, thể tích bể cá là: V = 2 x^2 y = \\Rightarrowy= 2\n 3 3x\n Để chi phí thuê nhân công ít nhất thì tổng diện tích các mặt của bể cá phải nhỏ nhất.\n 500\n Tổng diện tích các mặt của bể cá S = 2 xy + 2.2 xy + 2 x^2 = 6 xy + 2 x^2 = + 2 x2\n x\n 500 500\n Xét hàm số S ( x ) = + 2 x^2 trên khoảng ( 0;+ \\infty ) có S  ( x ) = - 2 + 4 x = 0 \\Leftrightarrow x = 5\n x x\n Bảng biến thiên:\n Do đó min S = 150 tại x = 5 .\n Khi đó chi phí thuê nhân công là: T = 150.700000 = 105 triệu đồng.",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-bai toan toi uu thuc te lien quan den ma-9",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-20a73c9121a9eb",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một doanh nghiệp tư nhân A chuyên kinh doanh xe gắn máy các loại. Hiện nay doanh nghiệp đang tập trung vào chiến lược kinh doanh xe X với chi phí mua vào một chiếc là 27 triệu đồng và bán ra với giá 31 triệu đồng. Với giá bán này, số lượng xe mà khách hàng đã mua trong một năm là 600 chiếc. Nhằm mục tiêu đẩy mạnh hơn nữa lượng tiêu thụ dòng xe đang bán chạy này, doanh nghiệp dự định giảm giá bán. Bộ phận nghiên cứu thị trường ước tính rằng nếu giảm 1 triệu đồng mỗi chiếc xe thì số lượng xe bán ra trong một năm sẽ tăng thêm 200 chiếc. Hỏi theo đó, giá bán mới là bao nhiêu thì lợi nhuận thu được cao nhất?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "30 triệu đồng.",
        "content_en": "30 triệu đồng.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "30,5 triệu đồng.",
        "content_en": "30,5 triệu đồng.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "29,5 triệu đồng.",
        "content_en": "29,5 triệu đồng.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "32 triệu đồng.",
        "content_en": "32 triệu đồng.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi giá bán mới là x (triệu đồng) với 27 \\le x \\le 31\n Khi đó số xe bán ra là 600 + ( 31 - x ) .200\n Lợi nhuận thu được là: f ( x ) = 600 + ( 31 - x ) .200  ( x - 27 ) = ( -200 x + 6800 )( x - 27 )\n 2\n  61 \n = -200 x + 12200 x - 183600 = -200  x -  + 2450 \\le 2450\n 2\n  2\n 61\n Dấu \" = \" xảy ta khi x - = 0 \\Leftrightarrow x = 30,5\n 2\n Vậy giá bán mới là 30,5 triệu đồng thì lợi nhuận lớn nhất thu được là 2450 triệu đồng.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-bai toan toi uu thuc te lien quan den ma-12",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-04e17d90c37744",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tại một xí nghiệp chuyên sản xuất vật liệu xây dựng, nếu trong một ngày xí nghiệp sản xuất x ( m3 ) sản phẩm thì phải bỏ ra các khoản chi phí bao gồm: 4 triệu đồng chi phí cố định; 0, 2 triệu đồng chi phí cho mỗi mét khối sản phẩm và 0,001x 2 triệu đồng chi phí bảo dưỡng máy móc. Biết rằng, mỗi ngày xí nghiệp sản xuất được tối đa 100m 3 sản phẩm. Gọi C ( x ) là tổng chi phí để xí nghiệp sản xuất x ( m3 ) sản phẩm trong một ngày và C là chi phí trung bình trên mỗi mét khối sản phẩm.",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "C = 0, 2 x + 0,001x 2 với 0 \\le x \\le 100",
        "content_en": "C = 0, 2 x + 0,001x 2 với 0 \\le x \\le 100",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Tổng chi phí sản xuất 100m 3 sản phẩm là 34 triệu đồng 4",
        "content_en": "Tổng chi phí sản xuất 100m 3 sản phẩm là 34 triệu đồng 4",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "C = 0,001x + + 0, 2 với 0 \\le x \\le 100 x",
        "content_en": "C = 0,001x + + 0, 2 với 0 \\le x \\le 100 x",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "C có giá trị thấp nhất bằng 0,326 triệu đồng (kết quả làm tròn ba chữ số thập phân)",
        "content_en": "C có giá trị thấp nhất bằng 0,326 triệu đồng (kết quả làm tròn ba chữ số thập phân)",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Tổng chi phí (triệu đồng) để xí nghiệp sản xuất x ( m3 ) sản phẩm trong một ngày là :\n C = C ( x ) = 4 + 0, 2 x + 0,001x 2 với 0 \\le x \\le 100\n b) Đúng: Thay x = 100 vào hàm C ( x ) ta thu được kết quả là 34 triệu đồng\n c) Đúng: Chi phí trung bình (triệu đồng) trên mỗi mét khối sản phẩm là\n10 \n C ( x) 4 + 0,2 x + 0,001x 2 4\n C = C ( x) = = = 0,001x + + 0,2 với 0 \\le x \\le 100\n x x x^4 4\n d) Đúng: Ta có C  ( x ) = 0,001 - 2 = 0 \\Leftrightarrow 0,001 - 2 = 0 \\Leftrightarrow x^2 = 4000 \\Leftrightarrow x = 20 10 \\in ( 0;100\n x x\n (\n C 20 10 = ) 10 1\n +  0,326\n 25 5\n Bảng biến thiên\n ( )\n Từ bảng biến thiên, ta thấy chi phí trung bình thấp nhất là C 20 10  0,326 (triệu đồng/ m3\n sản phẩm), đạt được khi x = 20 10  63 m3 .",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:Đ, d:Đ",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-2-bai toan toi uu thuc te lien quan d-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-54c8b5ca4fcf3e",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Nhà máy A chuyên sản xuất một loại sản phẩm cung cấp cho nhà máy B . Hai nhà máy thoả thuận rằng, hằng tháng A cung cấp cho B số lượng sản phẩm theo đơn đặt hàng của B (tối đa 100 tấn sản phẩm). Nếu số lượng đặt hàng là x tấn sản phẩm thì giá bán cho mỗi tấn sản phẩm là P ( x ) = 45 - 0,001x 2 (triệu đồng). Chi phí để A sản xuất x tấn sản phẩm trong một tháng là C ( x ) = 100 + 30 x (triệu đồng) (gồm 100 triệu đồng chi phí cố định và 30 triệu đồng cho mỗi tấn sản phẩm).",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Chi phí để A sản xuất 10 tấn sảm phẩm trong một tháng là 400 triệu đồng.",
        "content_en": "Chi phí để A sản xuất 10 tấn sảm phẩm trong một tháng là 400 triệu đồng.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số tiền A thu được khi bán 10 tấn sản phẩm cho B là 600 triệu đồng.",
        "content_en": "Số tiền A thu được khi bán 10 tấn sản phẩm cho B là 600 triệu đồng.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Lợi nhuận mà A thu được khi bán x tấn sản phẩm ( 0 \\le x \\le 100 ) cho B được biểu diễn bằng công thức -0,01x 3 + 15 x - 100 .",
        "content_en": "Lợi nhuận mà A thu được khi bán x tấn sản phẩm ( 0 \\le x \\le 100 ) cho B được biểu diễn bằng công thức -0,01x 3 + 15 x - 100 .",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "A bán cho B khoảng 70,7 tấn sản phẩm mỗi tháng thì thu được lợi nhuận lớn nhất.",
        "content_en": "A bán cho B khoảng 70,7 tấn sản phẩm mỗi tháng thì thu được lợi nhuận lớn nhất.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Chi phí để A sản xuất 10 tấn sảm phẩm trong một tháng là C (10 ) = 10 + 30.10 = 400\n triệu.\n b) Sai: Số tiền mà A thu được (gọi là doanh thu) từ việc bán x tấn sản phẩm ( 0 \\le x \\le 100 ) cho\n ( )\n B là: R ( x ) = x.P ( x ) = x 45 - 0,001x 2 = 45 x - 0,001x 3 triệu đồng\n Thay x = 10 ta được R (10 ) = 449 triệu đồng\n c) Đúng: Lợi nhuận (triệu đồng) mà A thu được là:\n P ( x ) = R ( x ) - C ( x ) = x ( 45 - 0,001x 2 ) - (100 + 30 x ) = -0,001x 3 + 15 x - 100\n d) Đúng: Xét hàm số P ( x ) = -0,001x 3 + 15 x - 100 với ( 0 \\le x \\le 100 ) ta có:\n P ( x ) = -0,003x 2 + 15 = 0 \\Leftrightarrow x^2 = 5000 \\Leftrightarrow x = 50 2 \\in  0;100\n ( )\n Ta có P ( 0 ) = -100; P 50 2 = 500 2 - 100  607; P (100 ) = 400\n Bảng biến thiên\n 0;100\n ( )\n Từ bảng biến thiên ta có max P = P 50 2 = 500 2 - 100  667\n Vậy A thu được lợi nhuận lớn nhất khi bán 50 2  70,7 tấn sản phẩm cho B mỗi tháng và\n lợi nhuận lớn nhất thu được khoảng 607 triệu đồng.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:Đ",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-2-bai toan toi uu thuc te lien quan d-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-11b3bab2f08623",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Khi nuôi tôm trong một hồ tự nhiên, một nhà khoa học đã thống kê được rằng: Nếu trên mỗi mét vuông mặt hồ thả x con tôm giống thì cuối vụ mỗi con tôm có cân nặng trung bình là 108 - x^2 (gam).",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Điều kiện xác định là x \\ge 0",
        "content_en": "Điều kiện xác định là x \\ge 0",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Sau một vụ lượng tôm trung bình trên mỗi mét vuông mặt hồ tự nhiên nặng x (108 - x^2 )",
        "content_en": "Sau một vụ lượng tôm trung bình trên mỗi mét vuông mặt hồ tự nhiên nặng x (108 - x^2 )",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Để cuối vụ thu hoạch được nhiều tôm nhất trên mỗi mét vuông mặt hồ tự nhiên thì cần thả 16 con tôm giống",
        "content_en": "Để cuối vụ thu hoạch được nhiều tôm nhất trên mỗi mét vuông mặt hồ tự nhiên thì cần thả 16 con tôm giống",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Lượng tôm nhiều nhất cuối vụ có thể thu hoạch được trên mỗi mét vuông mặt hồ tự nhiên là 432 (gam).",
        "content_en": "Lượng tôm nhiều nhất cuối vụ có thể thu hoạch được trên mỗi mét vuông mặt hồ tự nhiên là 432 (gam).",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Điều kiện xác định là x \\ge 0\n b) Đúng: Sau một vụ lượng tôm trung bình trên mỗi mét vuông mặt hồ tự nhiên nặng x (108 - x^2 )\n c) Sai: Xét hàm số f ( x ) = 108 x - x3 trên khoảng ( 0;+\\infty ) ta có\n x = 6\n f  ( x ) = 108 - 3x 2 = 0 \\Leftrightarrow 108 - 3x 2 = 0 \\Leftrightarrow \n  x = -6 < 0\n Trên khoảng ( 0;+\\infty ) hàm số f ( x ) = 108 x - x3 đạt giá trị lớn nhất tại x = 6 .\n Vậy nên thả 6 con tôm giống trên mỗi mét vuông mặt hồ thì cuối vụ thu hoạch được nhiều tôm\n nhất.\n d) Đúng: Lượng tôm nhiều nhất cuối vụ có thể thu hoạch được trên mỗi mét vuông mặt hồ tự\n nhiên là f ( 6 ) = 108.6 - 63 = 432 (gam).\n12",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:Đ",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-2-bai toan toi uu thuc te lien quan d-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5db2804479fd22",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Ông Thanh nuôi cá chim ở một cái ao có diện tích là 50m 2 .Vụ trước ông nuôi với mật độ là 20 con/m2 và thu được 1,5 tấn cá. Theo kinh nghiệm nuôi cá của mình thì cứ thả giảm đi 8 con/m2 thì mỗi con cá khi thu hoạch tăng lên 0,5 kg? Giả sử không có hao hụt khi nuôi.",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số cá giống mà ông thanh đã thả trong vụ vừa qua là 1500 con.",
        "content_en": "Số cá giống mà ông thanh đã thả trong vụ vừa qua là 1500 con.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Khối lượng trung bình mỗi con cá thành phần trong vụ vừa qua là 1,5 (kg).",
        "content_en": "Khối lượng trung bình mỗi con cá thành phần trong vụ vừa qua là 1,5 (kg).",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Tổng trọng lượng cá thu được ở vụ này là F ( x ) = -0,0652 x^2 + 16 x + 1500 (kg)",
        "content_en": "Tổng trọng lượng cá thu được ở vụ này là F ( x ) = -0,0652 x^2 + 16 x + 1500 (kg)",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Vụ tới ông Thanh phải thả 488 con cá giống để được tổng năng suất khi thu hoạch là cao nhất.",
        "content_en": "Vụ tới ông Thanh phải thả 488 con cá giống để được tổng năng suất khi thu hoạch là cao nhất.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Sai: Số cá giống mà ông thanh đã thả trong vụ vừa qua là 50.20 = 1000 con.\n 1500\n b) Đúng: Khối lượng trung bình mỗi con cá thành phần trong vụ vừa qua là: = 1,5 (kg).\n 1000\n c) Sai: Gọi số cá giống cần thả ít đi trong vụ này là: x (com) , ( x > 0 )\n Theo đề bài cứ giảm 8 con thì mỗi con tăng thêm 0,5 (kg/con)\n Vậy giảm x con thì mỗi con tăng thêm 0,0625x (kg/con).\n Tổng số lượng cá thu được ở vụ này được tính bằng công thức:\n F ( x ) = (1000 - x )(1,5 + 0,0625 x ) = -0,0625 x^2 + 61x + 1500 .\n Bài toán trờ thành tìm x để F ( x ) đạt giá trị lớn nhất.\n Ta có: F ' ( x ) = -0,125 x + 61 = 0 \\Leftrightarrow -0,125 x + 61 = 0 \\Leftrightarrow x = 488\n Bảng biến thiên như sau:\n Vậy ông thanh phải thả số cá giống trong vụ tới là: 1000 - 488 = 512 con.\n d) Sai: Vụ tới ông Thanh phải thả 512 con cá giống để được tổng năng suất khi thu hoạch là cao\n nhất.",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:S, d:S",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-2-bai toan toi uu thuc te lien quan d-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2587cedff8d8b3",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho một tấm nhôm hình vuông cạnh a. Người ta cắt ở 4 góc 4 hình vuông bằng nhau, rồi gập tấm nhôm lại để được một cái hộp không nắp.",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng . 12 a",
        "content_en": "Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng . 12 a",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng . 6 3 2a",
        "content_en": "Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng . 6 3 2a",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Thể tích của khối hộp lớn nhất bằng . 27 a3",
        "content_en": "Thể tích của khối hộp lớn nhất bằng . 27 a3",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Thể tích hộp lớn nhất bằng . 27",
        "content_en": "Thể tích hộp lớn nhất bằng . 27",
        "is_correct": false
      }
    ],
    "solution_vi": " a\n Gọi x là độ dài cạnh của hình vuông bị cắt  0 < x <  .\n  2\n 2  a\n Thể tích của khối hộp là: V ( x ) = x ( a - 2 x )  0 < x <  .\n  2\n a  a\n V  ( x ) = ( a - 2 x ) + x.2 ( a - 2 x ) . ( -2 ) = ( a - 2 x )( a - 6 x ) = 0 \\Leftrightarrow x = 0 < x < .\n 2\n \n 6  2\n Bảng biến thiên:\n  a  2a\n 3\n Vậy max V ( x) = V   = .\n  a\n  0;   6  27\n  2\n a\n a) Sai: Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng .\n 12\n a\n b) Đúng: Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng .\n 6\n 2a 3\n c) Đúng: Thể tích của khối hộp lớn nhất bằng .\n 27\n a3\n d) Sai: Thể tích hộp lớn nhất bằng .\n 27\n14",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:Đ, d:S",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-2-bai toan toi uu thuc te lien quan d-6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3c1dcd3ffdd0d5",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Bác Nam muốn xây dựng một hố ga không nắp hình trụ với dung tích 3m3 . Hãy tính chi phí ít\n nhất mà bác Nam phải bỏ ra xây dựng hố ga, biết tiền công và vật liệu cho 1m3 thành bê tông\n của hố ga (thành bê tông đáy và thành bê tông xung quang) là 685000 đồng.",
    "question_en": "",
    "options": [],
    "solution_vi": "V 3\n Ta có: V =  R 2 h \\Rightarrow h = = .\n  R  R2\n 2\n Mặt khác: S xd = 2 Rh +  R 2 = +  R 2 = + +  R 2 \\ge 3 3 9 ( m2 ) (Áp dụng BĐT Cauchy).\n 6 3 3\n R R R\n Để chi phí bác Nam bỏ ra nhỏ nhất khi và chỉ khi diện tích xây dựng hố ga hình trụ nhỏ nhất,\n và khi đó S xd = 3 3 9 ( m2 ) .\n Vậy số tiền bác Nam phải bỏ ra là: 685000.3 3 9  6260000 đồng.",
    "solution_en": "",
    "correct_answer": "685000",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-bai toan toi uu thuc te lien quan d-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-8279834a543033",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Lưu lượng xe ô tô vào đường hầm được cho bởi công thức f ( v ) = (xe/giây), trong\n v + 2v + 5 2\n đó v (km/h) là vận tốc trung bình của các xe khi vào đường hầm. Tính vận tốc trung bình của\n các xe khi vào đường hầm sao cho lưu lượng xe là lớn nhất",
    "question_en": "",
    "options": [],
    "solution_vi": "5\n Vì v là vận tốc trung bình của các xe khi vào đường hầm \\Rightarrow v > 0 và >0\n v\n 5 5\n Theo bất đẳng thức Cauchy, ta có: v +\\ge2 5 \\Rightarrowv+ +2\\ge2 5+2\n v v\n 386 386 386v 386\n \\Rightarrow \\le \\Rightarrow f (v) = 2 \\le\n v+ +2 2 5+2\n 5 v + 2v + 5 2 5 + 2\n v\n 5\n Dấu \" = \" xảy ra \\Leftrightarrow v = \\Leftrightarrow v 2 = 5 \\Leftrightarrow v = 5 (vì v > 0 )\n v\n Vậy vận tốc trung bình của các xe khi vào đường hầm là 5 km/h thì lưu lượng xe là lớn nhất.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-bai toan toi uu thuc te lien quan d-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ebfa4174493744",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Ông Nam cần xây dựng một bể nước mưa có thể tích V = 8 ( m3 ) dạng hình hộp chữ nhật với\n 4\n chiều dài gấp lần chiều rộng, đáy và nắp đổ bê tông, cốt thép; xung quanh xây bằng gạch và\n 3\n xi măng. Biết rằng chi phí trung bình là 980.000đ /m 2 và ở nắp để hở một khoảng hình vuông có\n 2\n diện tích bằng diện tích nắp bể. Tính chi phí thấp nhất mà ông Nam phải chi trả (làm tròn đến\n 9\n hàng nghìn đồng).",
    "question_en": "",
    "options": [],
    "solution_vi": "2\n Gọi chiều rộng của bể là 3 x ( m ) , chiều dài bể là 4 x ( m ) và chiều cao của bể là ( m) .\n 3x 2\n Khi đó tổng diện tích bề mặt xây là:\n 28 64 x^2 28 64 x^2 32 7\n T = ( 3x + 4 x ) .2.\n 2\n 3x 2\n + 2.3 x.4 x -\n 2\n 9\n .3 x.4 x =\n 3x 2\n +\n 3\n \\ge 2.\n 3x 2\n .\n 3\n =\n 3\n ( m2 ) .\n 32 7\n Chi phí C (tính theo đồng) xây dựng là: C = T .980000 \\ge .980000  27657000 (đồng).\n 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-bai toan toi uu thuc te lien quan d-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-cb5889fc7dea81",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một loại thuốc được dùng cho một bệnh nhân và nồng độ thuốc trong máu của bệnh nhân được\n giám sát bởi bác sĩ. Biết rằng nồng độ thuốc trong máu của bệnh nhân sau khi tiêm vào cơ thể\n t\n trong t (giờ) được cho bởi công thức c ( t ) = 2 ( mg /L ) . Sau khi tiêm thuốc bao lâu (giờ) thì\n t +1\n nồng độ thuốc trong máu của bệnh nhân cao nhất?",
    "question_en": "",
    "options": [],
    "solution_vi": "-t + 1\n 2\n t = 1\n Ta có c ' ( t ) = , t \\in ( 0; +\\infty ) . Cho c ' ( t ) = 0 \\Leftrightarrow  .\n ( t + 1) t = -1\n 2 2\n Bảng biến thiên:\n Vậy sau khi tiêm 1 giờ, nồng độ thuốc trong máu bệnh nhân cao nhất.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-bai toan toi uu thuc te lien quan d-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-54de3f161bfdb3",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Sự ảnh hưởng khi sử dụng một loại độc tố với vi khuẩn X được một nhà sinh học mô tả bởi hàm\n t +1\n số P ( t ) = 2 , trong đó P ( t ) là số lượng vi khuẩn sau t giờ sử dụng độc tố. Sau bao nhiêu\n t +t +4\n giờ thì số lượng vi khuẩn X bắt đầu giảm?",
    "question_en": "",
    "options": [],
    "solution_vi": "Xét P ( t ) =\n -t - 2t + 3\n 2\n =\n ( t - 1)( -t - 3) .\n (t + t + 4) (t + t + 4)\n 2 2 2 2\n t = -3\n P ( t ) = 0 \\Leftrightarrow  .\n t = 1\n Ta thấy hàm số đạt cực đại tại t = 1 và P ' ( t ) < 0, t \\in (1; +\\infty ) nên sau 1 giờ thì vi khuẩn bắt đầu\n giảm.\n 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-bai toan toi uu thuc te lien quan d-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-da3431fbc8cddc",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một vật chuyển động theo quy luật s = - t 3 + 6t 2 với t là khoảng thời gian tính từ khi vật bắt\n 2\n đầu chuyển động và s là quãng đường vật di chuyển được trong khoảng thời gian đó. Hỏi trong\n trong khoảng thời gian 6 giây, kể từ khi bắt đầu chuyển động, vận tốc lớn nhất của vật đạt được\n bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "3\n Ta có v ( t ) = s = - t 2 +12t ; v ( t ) = -3t + 12 = 0 \\Leftrightarrow t = 4 và có bảng biến thiên\n 2\n Vậy max v ( t ) = 24 ( m / s ) khi t = 4.",
    "solution_en": "",
    "correct_answer": "4",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-bai toan toi uu thuc te lien quan d-9",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e6888a58d71ced",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một cửa hàng bán vải Thanh Hà với giá bán mỗi kg là 50.000 đồng. Với giá bán này thì cửa hàng\n chỉ bán được khoảng 25kg. Cửa hàng này dự định giảm giá bán, ước tính nếu cửa hàng cứ giảm\n 4000 đồng cho một kg thì số vải bán được tăng thêm là 50kg. Xác định giá bán để cửa hàng đó\n thu được lợi nhuận lớn nhất, biết rằng giá nhập về ban đầu mỗi kg là 30.000 đồng.",
    "question_en": "",
    "options": [],
    "solution_vi": "20 \n Gọi x đồng ( 30.000 < x < 50.000 ) là giá bán vải mới để cửa hàng thu được lợi nhuận lớn nhất.\n Suy ra giá bán ra đã giảm là ( 50.000 - x ) đồng.\n 50 ( 50000 - x )\n Số lượng vải bán ra đã tăng thêm là = 625 - 0,0125.x .\n 4000\n Tổng số vải bán được là 25 + 625 - 0,0125.x = 650 - 0,0125.x .\n Doanh thu của cửa hàng là ( 650 - 0,0125.x ) x .\n Số tiền vốn ban đầu để mua vải là ( 650 - 0,0125.x ) 30000 .\n Vậy lợi nhuận của cửa hàng là\n ( 650 - 0,0125.x ) x - ( 650 - 0,0125.x ) 30000 = -0,0125 x^2 + 1025 x - 19500000 .\n Ta có: f ( x ) = -0,0125 x^2 + 1025 x - 19500000 = -0,0125 ( x - 41000 ) + 1512500 \\le 1512500 .\n 2\n Suy ra max f ( x ) = 1512500 khi x = 41.000 đồng.\n Vậy giá bán mỗi cân vải là 41.000 đồng thì cửa hàng thu được lợi nhuận lớn nhất.",
    "solution_en": "",
    "correct_answer": "41",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-bai toan toi uu thuc te lien quan d-10",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0484ad817a5202",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Trên mảnh đất hình chữ nhật ABCD có diện tích 25m 2 , người chủ lấy một phần đất để trồng\n cỏ. Biết phần đất trồng cỏ này có dạng hình chữ nhật với hai đỉnh đối diện là A và H , với H\n thuộc cạnh BD. Hỏi số tiền lớn nhất người chủ cần chuẩn bị để trồng cỏ (miền tô đậm) là bao\n nhiêu với chi phí trồng cỏ là 70.000 đồng/ m 2 ?",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có AB. AD = 25 ( m 2 ) ;\n NH DN NH DN\n = . Đặt = = x \\Rightarrow NH = x. AB; AN = (1 - x ) AD\n AB DA AB DA\n Diện tích đất trồng cỏ là: S = AN .NH = x.(1 - x ) . AB. AD = 25.x. (1 - x )\n ( x + 1 - x) = 1\n 2\n Diện tích lớn nhất khi x.(1 - x ) lớn nhất mà x.(1 - x ) \\le\n 4 4\n 1 25\n Diện tích đất trồng cỏ lớn nhất S = .25 =\n 4 4\n 25\n Số tiền lớn nhất để trồng cỏ: T = .70000 = 437500 đồng.\n 4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-bai toan toi uu thuc te lien quan d-11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ef17b183b798a6",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số f ( x ) = x3 - 3x + m . Biết max f ( x ) = 5 . Giá trị nhỏ nhất của hàm số y = f ( x ) trên ( -\\infty ;0 ) ( 0;+\\infty ) là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "min f ( x ) = 1 .",
        "content_en": "min f ( x ) = 1 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "min f ( x ) = 2 .",
        "content_en": "min f ( x ) = 2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "min f ( x ) = 3 .",
        "content_en": "min f ( x ) = 3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "min f ( x ) = -1 . ( 0; +\\infty ) ( 0; +\\infty ) ( 0; +\\infty ) ( 0; +\\infty )",
        "content_en": "min f ( x ) = -1 . ( 0; +\\infty ) ( 0; +\\infty ) ( 0; +\\infty ) ( 0; +\\infty )",
        "is_correct": false
      }
    ],
    "solution_vi": "Xét trên khoảng ( -\\infty;0 ) có f  ( x ) = 3x - 3 \\Rightarrow f  ( x ) = 0 \\Leftrightarrow x = 1 hoặc x = -1 .\n 2\n Bảng biến thiên :\n Khi đó ta có max f ( x ) = 5 \\Leftrightarrow m + 2 = 5 \\Leftrightarrow m = 3 \\Rightarrow f ( x ) = x3 - 3x + 3 .\n ( -\\infty ;0 )\n Xét trên khoảng ( 0;+\\infty ) . Bảng biến thiên\n Vậy min f ( x ) = 1 .\n ( 0; +\\infty )\n Cho hàm số y = ( x + m ) - 3 ( x + m ) + 1 + n . Biết hàm số nghịch biến trên khoảng ( 0;2 ) và giá\n 3",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-bai toan tim max min cua ham so co chua -3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2aeba0625d0d34",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số f ( x ) = x3 - 3x + m ( với m là tham số thực). Biết max f ( x ) = 5 . Giá trị nhỏ nhất ( -\\infty ;0) của hàm số y = f ( x ) trên ( 0;+\\infty ) là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "min f ( x ) = 1.",
        "content_en": "min f ( x ) = 1.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "min f ( x ) = 2.",
        "content_en": "min f ( x ) = 2.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "min f ( x ) = 3.",
        "content_en": "min f ( x ) = 3.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "min f ( x ) = -1. (0; +\\infty ) (0; +\\infty ) (0; +\\infty ) (0; +\\infty )",
        "content_en": "min f ( x ) = -1. (0; +\\infty ) (0; +\\infty ) (0; +\\infty ) (0; +\\infty )",
        "is_correct": false
      }
    ],
    "solution_vi": "x = 1\n Ta có f  ( x ) = 3x 2 - 3 = 0 \\Rightarrow \n  x = -1\n Bảng biến thiên\n Vậy max f ( x ) = f ( -1) \\Rightarrow f (-1) = 5 \\Leftrightarrow m + 2 = 5 \\Leftrightarrow m = 3.\n ( -\\infty ;0)\n min f ( x ) = f (1) = m - 2 = 3 - 2 = 1.\n ( 0; +\\infty )\n x+m",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-2-bai toan tim max min cua ham so co chua -6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d53123c396f1cb",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị của tham số m để hàm số y = f ( x ) = 4 x - m - x^2 đạt giá trị lớn nhất bằng\n 5?",
    "question_en": "",
    "options": [],
    "solution_vi": "Hàm số y = f ( x ) đạt giá trị lớn nhất bằng 5 thì 4 x - m - x^2 \\le 5 \\Leftrightarrow 4 x - m \\le x^2 + 5 , x \\in\n \n 4 x - m \\le x + 5, x \\in\n 2\n \n m \\ge - x + 4 x - 5, x \\in\n 2\n m \\ge -1\n \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow .\n 4 x - m \\ge - x - 5, x \\in\n  m \\le x + 4 x + 5, x \\in\n  m \\le 1\n 2 2\n  m = -1\n Do đó giá trị lớn nhất của hàm số y = f ( x ) bằng 5 \\Leftrightarrow  \\Leftrightarrow m \\in {-1;1} .\n m = 1\n Vậy có 2 giá trị m cần tìm.\n 2 x +1 + m",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-2-bai toan tim max min cua ham so co -3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-552573e143fefa",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = (1) với m là số thực x + 3m",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Khi m = 1 đồ thị hàm số có 2 điểm cực trị",
        "content_en": "Khi m = 1 đồ thị hàm số có 2 điểm cực trị",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Khi m = 1 đồ thị hàm số có đường tiệm cận xiên là y = x - 2",
        "content_en": "Khi m = 1 đồ thị hàm số có đường tiệm cận xiên là y = x - 2",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Khi m = 1 giao điểm của đường tiệm cận xiên và tiệm cận đứng của đồ thị hàm số là I ( 3; -5 )",
        "content_en": "Khi m = 1 giao điểm của đường tiệm cận xiên và tiệm cận đứng của đồ thị hàm số là I ( 3; -5 )",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Có 2 giá trị m để góc giữa hai tiệm cận của đồ thị hàm số (1) bằng 450",
        "content_en": "Có 2 giá trị m để góc giữa hai tiệm cận của đồ thị hàm số (1) bằng 450",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Khi m = 1 đồ thị hàm số có 2 điểm cực trị\n b) Đúng: Khi m = 1 đồ thị hàm số có đường tiệm cận xiên là y = x - 2\n 4\n c) Sai : Khi m = 1 \\Leftrightarrow y = x - 2 +\n x+3\n mx 2 + ( 3m2 - 2 ) x - 2 6m - 2\n d) Đúng: Ta có: y = = mx - 2 +\n x + 3m x + 3m\n 1\n Nếu m = đồ thị hàm số không tồn tại hai tiệm cận\n 3\n 1\n Nếu m \\ne , đồ thị hàm số có hai tiệm cận\n 3\n14 \n d1 : x = -3m \\Leftrightarrow x + 3m = 0 và d 2 : y = mx - 2 \\Leftrightarrow mx - y - 2 = 0\n \\Rightarrow n1 (1;0 ) ; n2 ( m; -1) lần lượt là véc tơ pháp của d1 và d 2 .\n n1.n2 m 2\n Góc giữa d1 và d 2 bằng 450 \\Leftrightarrow cos 450 = \\Leftrightarrow = \\Leftrightarrow m = \\pm1 .\n n1 . n2 m2 + 1 2\n 1",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:Đ",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-4-khao sat va ve do thi ham so phan t-6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ae30696b44ed16",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x - x +1",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Đồ thị của hàm số có tiệm cận đứng là x = 1",
        "content_en": "Đồ thị của hàm số có tiệm cận đứng là x = 1",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Đồ thị hàm số cắt trục Oy tại M . Phương trình tiếp tuyến của (",
        "content_en": "Đồ thị hàm số cắt trục Oy tại M . Phương trình tiếp tuyến của (",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "tại M là y = 2 x - 1 c) Tồn tại hai tiếp tuyến của đồ thị vuông góc với nhau",
        "content_en": "tại M là y = 2 x - 1 c) Tồn tại hai tiếp tuyến của đồ thị vuông góc với nhau",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Để đường thẳng y = k cắt (C ) tại hai điểm phân biệt A và B sao cho OA ⊥ OB khi đó k là nghiệm của phương trình k 2 - k - 1 = 0",
        "content_en": "Để đường thẳng y = k cắt (C ) tại hai điểm phân biệt A và B sao cho OA ⊥ OB khi đó k là nghiệm của phương trình k 2 - k - 1 = 0",
        "is_correct": true
      }
    ],
    "solution_vi": "1\n a) Sai: y = x - . Tập xác định D = \\ {-1}\n x +1\n 1\n Đạo hàm y = 1 + > 0, x \\in D : hàm số luôn luôn đồng biến, không có cực đại, cực tiểu.\n ( x + 1) 2\n lim y = \\pm\\infty : x = -1 là tiệm cận đứng\n x →-1\n lim y = x : y = x là tiệm cận xiên\n x →\\pm\\infty\n b) Đúng: M ( 0; - 1) , y ( 0 ) = 2\n Phương trình tiếp tuyến (T ) tại M : y = 2 ( x - 0 ) - 1 \\Leftrightarrow y = 2 x - 1\n 1\n c) Sai: Tiếp tuyến (T1 ) của (C ) tại P ( x1 , y1 ) có hệ số góc k1 = yx1 = 1 + >0\n ( x1 + 1)\n 2\n 1\n Tiếp tuyến (T2 ) của (C ) tại Q ( x2 , y2 ) có hệ số góc k2 = yx2 = 1 + >0\n ( x2 + 1)\n 2\n Do yx1 > 0, yx2 > 0 nên không thể có 2 tiếp tuyến của ( C ) vuông góc nhau\n 1 x2 + x -1\n d) Đúng: y = x - =\n x +1 x +1\n Phương trình hoành độ giao điểm của ( C ) và đường thẳng y = k :\n x2 + x - 1  x \\ne -1\n =k \\Leftrightarrow 2\n x +1  x - ( k - 1) x - ( k + 1) = 0 ( *)\n Do vị trí của ( C ) trên hệ tọa độ Oxy có thể kết luận (*) luôn có 2 nghiệm phân biệt x A , xB \\ne -1\n  xA + xB = k - 1\n và  ; A ( x A ; k ) , B ( xB ; k )\n  xA .xB = - ( k + 1)\n OA = ( x A , k ) , OB = ( xB , k )\n  1- 5\n k =\n 2\n OA ⊥ OB \\Leftrightarrow OA OB = 0 \\Leftrightarrow x A xB + k 2 = 0 \\Leftrightarrow -k - 1 + k 2 = 0 \\Leftrightarrow \n  1+ 5\n k =\n  2\n - x^2 + 2 ( m + 1) x - 5",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:S, d:Đ",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-4-khao sat va ve do thi ham so phan t-7",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4917150e20bdda",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm được trên đồ thị ( C ) : y = hai điểm M ( a; b ) và N ( c; d ) có khoảng cách đến\n x+2\n đường thẳng 3 x + y + 6 = 0 nhỏ nhất. Khi đó tính giá trị biểu thức T = a + b + c + d",
    "question_en": "",
    "options": [],
    "solution_vi": " x^2 + 4 x0 + 5 \n Gọi M ( x0 ; y0 ) \\in ( C ) \\Rightarrow M  x0 ; 0 ) .\n  x0 + 2 \n Gọi ( d ) là khoảng cách từ M đến đường thẳng 3 x + y + 6 = 0\n 4 x02 + 16 x0 + 17\n 1 1 1 4\n d= = 4 ( x0 + 2 ) + \\ge\n 10 x0 + 2 10 x0 + 2 10\n  -3 5\n  x0 = \\Rightarrow y0 =\n 1 2 2\n Đẳng thức xảy ra \\Leftrightarrow 4 x0 + 2 = \\Leftrightarrow\n x0 + 2  x = -5 \\Rightarrow y = - 5\n  0 2 0\n 2\n  -3 5   -5 -5 \n Vậy có hai điểm thoả yêu cầu bài toán là M 1  ;  và M 2  ; \n  2 2  2 2 \n x2 + 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-khao sat va ve do thi ham so phan t-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-434f4511d538a3",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Số điểm có tọa độ nguyên thuộc đồ thị hàm số y = là bao nhiêu?\n x+2",
    "question_en": "",
    "options": [],
    "solution_vi": "2 x^2 + 3x + 10 12\n Ta có: y = = 2x - 1 +\n x+2 x+2\n x \\in  x \\in\n Điểm M ( x; y ) \\in ( C ) có toạ độ nguyên thì  \\Leftrightarrow\n y \\in 12 ( x + 2 )\n 12 có 12 ước số nên có 12 điểm có toạ độ nguyên.\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-khao sat va ve do thi ham so phan t-10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-fbad06026f8fa5",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Đồ thị sau đây là của hàm số nào? 6",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "y = x^3 - 3 x + 1 .",
        "content_en": "y = x^3 - 3 x + 1 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "y = x^3 - 3 x - 1 .",
        "content_en": "y = x^3 - 3 x - 1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "y = - x^3 - 3 x - 1 .",
        "content_en": "y = - x^3 - 3 x - 1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "y = - x3 + 3x + 1 .",
        "content_en": "y = - x3 + 3x + 1 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Đồ thị hàm số trên là đồ thị hàm số bậc ba y = ax 3 + bx 2 + cx + d ( a \\ne 0 ) .\n Nhìn vào nhánh phải của đồ thị ta thấy đồ thị có hướng đi lên suy ra a > 0 .\n Đồ thị hàm số cắt trục tung tại điểm có tung độ y = 1 . Vậy hàm số thỏa đề là y = x^3 - 3 x + 1 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-4-ly thuyet va toan khao sat su bien thien-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4654b3ebd0bea7",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm m để đồ thị của hàm số y = x^3 + 3mx 2 - 2 x - 4 cắt trục hoành tại 3 điểm phân biệt có hoành độ là x1 , x2 , x3 thỏa mãn x1 + x2 = 2 x3 .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = 0 .",
        "content_en": "m = 0 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 1 .",
        "content_en": "m = 1 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "m = 2 .",
        "content_en": "m = 2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 3 .",
        "content_en": "m = 3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Xét phương trình hoành độ giao điểm của y = x^3 + 3mx 2 - 2 x - 4 và trục hoành ta có\n x^3 + 3mx 2 - 2 x - 4 = 0 (1) .\n Áp dụng định lý Vi-et ta có x1 + x2 + x3 = 3x3 = -3m \\Rightarrow x3 = -m .\n Thay x3 = - m vào (1) ta được 2m3 + 2m - 4 = 0 \\Leftrightarrow m = 1 .\n  x = -1\n Thử lại : Thay m = 1 vào (1) ta được x3 + 3x 2 - 2 x - 4 = 0 \\Leftrightarrow  , thỏa mãn điều kiện.\n  x = -1 \\pm 5\n Vậy m = 1 thỏa mãn điều kiện bài toán.",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-4-ly thuyet va toan khao sat su bien thien-19",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a041d5c5e8045c",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm các giá trị thực của tham số m để đồ thị hàm số y = x^3 - 3 x^2 + 2 cắt đường thẳng y = m ( x - 1) tại ba điểm phân biệt có hoành độ x1 , x2 , x3 thoả mãn x12 + x22 + x32 > 5 .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m \\ge -3 .",
        "content_en": "m \\ge -3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m > -2 .",
        "content_en": "m > -2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m > -3 .",
        "content_en": "m > -3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m \\ge -2 .",
        "content_en": "m \\ge -2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Phương trình hoành độ giao điểm\n x = 1\n x3 - 3x 2 + 2 = m( x - 1) \\Leftrightarrow ( x - 1) ( x^2 - 2 x - 2 - m ) = 0 \\Leftrightarrow  2\n  x - 2 x - 2 - m = 0 (*)\n Đồ thị hàm số y = x3 - 3x 2 + 2 cắt đường thẳng y = m( x - 1) tại ba điểm phân biệt khi và chỉ\n 1 + 2 + m > 0\n khi phương trình ( ) có hai nghiệm phân biệt khác 1 \\Leftrightarrow  \\Leftrightarrow m > -3 .\n 1 - 2 - 2 - m \\ne 0\n Gọi x2 , x3 là hai nghiệm của phương trình ( ) .\n Ta có: x12 + x22 + x32 > 5 \\Leftrightarrow ( x2 + x3 ) - 2 x2 x3 > 4 \\Leftrightarrow 4 - 2 ( -2 - m ) > 4 \\Leftrightarrow m > -2 . Vậy m > -2 .\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-4-ly thuyet va toan khao sat su bien thien-20",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-66113e0ec87daf",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = f ( x ) = x^3 - 3m 2 x + 2024 có đồ thị ( C ) .",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "( C ) luôn có hai điểm cực trị.",
        "content_en": "( C ) luôn có hai điểm cực trị.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Khi m thay đổi thì đồ thị ( C ) luôn có tâm đối xứng cố định.",
        "content_en": "Khi m thay đổi thì đồ thị ( C ) luôn có tâm đối xứng cố định.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Khi m thay đổ thì đồ thị ( C ) luôn cắt trục hoành tại ít nhất 1 điểm.",
        "content_en": "Khi m thay đổ thì đồ thị ( C ) luôn cắt trục hoành tại ít nhất 1 điểm.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Khi ( C ) có 2 cực trị thì đường thẳng đi qua 2 điểm cực trị của ( C ) có dạng y = ax + b . Đặt S = a + b thì S \\le 2024 .",
        "content_en": "Khi ( C ) có 2 cực trị thì đường thẳng đi qua 2 điểm cực trị của ( C ) có dạng y = ax + b . Đặt S = a + b thì S \\le 2024 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D =\n Ta có: y = 3x 2 - 3m2 ; y = 6 x = 0 \\Leftrightarrow x = 0 \\Rightarrow y = 2024; y = x. y + ( -2m2 + 2024 )\n 1\n 3\n Tại các điểm cực trị, y = 0 nên đường thẳng đi qua các điểm cực trị của hàm số có phương trình\n y = -2m 2 x + 2024 .\n \\Rightarrow a = -2m 2 ; b = 2024 \\Rightarrow S = a + b = -2m 2 + 2024 < 2024\n Lưu ý khi m = 0 thì hàm số không có cực trị.\n a) Sai: ( C ) không có điểm cực trị khi m = 0\n b) Đúng: Khi m thay đổi, ( C ) luôn có tâm đối xứng cố định.\n c) Đúng: Khi m thay đổi, ( C ) luôn cắt trục hoành tại ít nhất 1 điểm. (Hàm số bậc ba luôn cắt\n trục hoành tại ít nhất 1 điểm)\n d) Sai: Khi ( C ) có 2 cực trị, đường thẳng đi qua 2 điểm cực trị của ( C ) có dạng y = ax + b . Đặt\n S = a + b thì S \\le 2024 (dấu \" = \" không xảy ra)",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:Đ, d:S",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-4-ly thuyet va toan khao sat su bien -5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-85a1c6d61b22f4",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số thực m để đường thẳng y = 3 x + m - 2 cắt đồ thị\n y = ( x - 1) tại ba điểm phân biệt là\n 3",
    "question_en": "",
    "options": [],
    "solution_vi": "Phương trình hoành độ giao điểm của hai đồ thị: 3x + m - 2 = ( x - 1) \\Leftrightarrow m = x^3 - 3x 2 + 1 (1)\n 3\n Nhận xét: (1) là phương trình hoành độ giao điểm của hai đồ thị ( d ) : y = m và đồ thị\n ( C ) : y = x3 - 3x 2 + 1 .\n x = 0\n Xét hàm số y = x^3 - 3 x^2 + 1 ; y = 3x 2 - 6 x , y = 0 \\Leftrightarrow  .\n  x = 2\n Bảng biến thiên\n Vậy yêu cầu bài toán \\Leftrightarrow -3 < m < 1 nên có ba giá trị nguyên của tham số m .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-ly thuyet va toan khao sat su bien -1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d35130176defb7",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x^3 - 3x 2 + mx + 1 có đồ thị ( C ) và đường thẳng d : y = 2 x + 1 . Có bao nhiêu giá\n trị nguyên dương của tham số m để đồ thị ( C ) cắt đường thẳng d tại 3 điểm phân biệt?",
    "question_en": "",
    "options": [],
    "solution_vi": "Phương trình hoành độ giao điểm x3 - 3x 2 + mx + 1 = 2 x + 1 \\Leftrightarrow x3 - 3x 2 + ( m - 2 ) x = 0\n x = 0\n \\Leftrightarrow x ( x^2 - 3x + m - 2 ) = 0 \\Leftrightarrow  2 . Đặt f ( x ) = x^2 - 3x + m - 2 .\n  x - 3x + m - 2 = 0\n Để đồ thị ( C ) cắt đường thẳng d tại 3 điểm phân biệt thì phương trình\n x3 - 3x 2 + ( m - 2 ) x = 0 phải có 3 nghiệm phân biệt, khi đó f ( x ) = 0 phải có hai nghiệm phân\n m \\ne 2\n  f ( 0 ) \\ne 0 m - 2 \\ne 0 m \\ne 2 \n biệt khác 0 . Do đó  \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow 17 .\n  > 0 9 - 4 ( m - 2 ) > 0 -4m > -17  m <\n 4\n Do m là số nguyên dương nên m \\in {1,3, 4} .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-ly thuyet va toan khao sat su bien -2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0e507c1d5ad450",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Với m là một tham số thực thì đồ thị hàm số y = x^3 - 2 x^2 + x - 1 và đường thẳng y = m có nhiều\n nhất bao nhiêu giao điểm?",
    "question_en": "",
    "options": [],
    "solution_vi": " 1\n  x=\n Hàm số y = x - 2 x + x - 1 có tập xác định:\n 3 2\n ; y = 3 x - 4 x + 1 ; y ' = 0 \\Leftrightarrow\n 2\n 3.\n \n x = 1\n22 \n Dựa vào bảng biến thiên đồ thi hàm số y = x^3 - 2 x^2 + x - 1 và đường thẳng y = m có nhiều\n nhất là ba giao điểm.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-ly thuyet va toan khao sat su bien -3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f866fe48f58968",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để phương trình x3 - 3x 2 - m 2 + 5m = 0 có ba nghiệm\n thực phân biệt?",
    "question_en": "",
    "options": [],
    "solution_vi": "Đặt f ( x ) = x3 - 3x 2 - m 2 + 5m .\n Để x3 - 3x 2 - m 2 + 5m = 0 có ba nghiệm thực phân biệt thì f  ( x ) = 0 có hai nghiệm phân biệt\n x1 , x2 thỏa mãn: f ( x1 ) . f ( x2 ) < 0\n x = 0\n Ta có: f  ( x ) = 3x 2 - 6 x ; f  ( x ) = 0 \\Leftrightarrow 3x 2 - 6 x = 0 \\Leftrightarrow  .\n x = 2\n f ( 0 ) = -m 2 + 5m ; f ( 2 ) = -m 2 + 5m - 4 .\n 0 < m < 1\n Khi đó: f ( 0 ) . f ( 2 ) < 0 \\Leftrightarrow ( -m2 + 5m )( -m2 + 5m - 4 ) < 0 \\Leftrightarrow \n 4 < m < 5\n Vậy không có giá trị nguyên nào của m thỏa mãn.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-ly thuyet va toan khao sat su bien -4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-8f29349c65ec7a",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x3 - ( m + 2 ) x^2 - ( 2m + 13) x - m - 2 có đồ thị ( Cm ) ; đường thẳng\n d : y = mx + m + 8 và điểm I (1;4 ) . Tính tổng tất cả các giá trị của tham số m biết rằng đường\n thẳng d cắt đồ thị ( Cm ) tại ba điểm phân biệt A, B, C với A có hoành độ bằng -2 và tam giác\n IBC cân tại I .",
    "question_en": "",
    "options": [],
    "solution_vi": " x = -2\n Phương trình hoành độ giao điểm: x - ( m + 2 ) x - ( 3m + 13) x - 2m - 10 = 0 \\Leftrightarrow  x = -1\n 3\n  x = m + 5\n m \\ne -7\n Để đường thẳng d cắt đồ thị ( Cm ) tại ba điểm phân biệt A, B, C thì \n m \\ne -6\n Giả sử B ( -1;8 ) , C ( m + 5; m2 + 6m + 8 ) . Để tam giác IBC cân tại I\n  m = -2\n \n thì IB 2 = IC 2 \\Leftrightarrow 20 = ( m + 4 ) + ( m 2 + 6m + 4 ) \\Leftrightarrow  m = -6 ( loai )\n 2 2\n \n  m = -2 \\pm 3\n Vậy có ba giá trị của m thỏa mãn nên tổng các giá trị của m bằng -6 .",
    "solution_en": "",
    "correct_answer": "-6",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-ly thuyet va toan khao sat su bien -5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a30d82147f89b7",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x^3 - 2 x^2 - 1 có đồ thị ( C ) , đường thẳng ( d ) : y = mx - 1 và điểm K (4;11) . Biết\n rằng ( C ) và ( d ) cắt nhau tại ba điểm phân biệt A, B, C trong đó A(0; -1) còn trọng tâm tam giác\n KBC nằm trên đường thẳng y = 2 x + 1 . Tìm giá trị của tham số m",
    "question_en": "",
    "options": [],
    "solution_vi": "x = 0\n Xét phương trình hoành độ: x3 - 2 x^2 - 1 = mx - 1 \\Leftrightarrow x3 - 2 x^2 - mx = 0 \\Leftrightarrow  2\n  x - 2 x - m = 0 (1)\n Suy ra A(0; -1) và hoành độ của điểm B và C là nghiệm của phương trình (1)\n Để ( C ) và ( d ) cắt nhau tại ba điểm phân biệt A, B, C khi và chỉ khi phương trình (1) có hai\n nghiệm phân biệt khác 0\n  '(1) > 0 1 + m > 0 m > -1\n Khi và chỉ khi:  \\Leftrightarrow \\Leftrightarrow (*)\n m \\ne 0 m \\ne 0 m \\ne 0\n Giả sử: B ( x1;m x1 - 1) , C ( x2 ;m x2 - 1) . Theo Vi-ét ta có x1 + x2 = 2\n Gọi G là trọng tâm của tam giác KBC :\n  4 + x1 + x2\n  xG =  xG = 2\n 3   2m + 9 \n  \\Leftrightarrow 2m + 9 \\Rightarrow G  2; \n  y = 11 + mx1 - 1 + mx2 - 1  yG = 3  3 \n  G 3\n 2m + 9\n Trọng tâm G nằm trên đường thẳng y = 2 x + 1 suy ra = 2.2 + 1 \\Leftrightarrow m = 3 thỏa mãn (*)\n 3\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "2",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-ly thuyet va toan khao sat su bien -8",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1f237a13762a08",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = ( a < 0 ) có đồ thị như sau: cx + d Mệnh đề nào sau đây là đúng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "ab < 0, bc < 0, cd > 0 .",
        "content_en": "ab < 0, bc < 0, cd > 0 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "ab > 0, bc < 0, cd > 0 .",
        "content_en": "ab > 0, bc < 0, cd > 0 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "ab > 0, bc > 0, cd > 0 .",
        "content_en": "ab > 0, bc > 0, cd > 0 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "ab < 0, bc > 0, cd > 0 .",
        "content_en": "ab < 0, bc > 0, cd > 0 .",
        "is_correct": false
      }
    ],
    "solution_vi": "d a\n Dựa vào đồ thị ta thấy đồ thị hàm số có tiệm cận đứng x = - < 0 , tiệm cận ngang y = < 0\n c c\n Mà theo giả thiết a < 0 nên c > 0 suy ra d > 0\n  b b\n Đồ thị hàm số cắt trục tung tại điểm  0;  và > 0 nên b > 0\n  d d\n Do đó: ab < 0, bc > 0, cd > 0\n ax - 4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-4-khao sat va ve do thi ham so phan thuc h-22",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-40f968a4cf225f",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = ( ) ( m)\n x+m\n thẳng ( d ) có phương trình y = ax + b sao cho ( Cm ) luôn tiếp xúc với ( d ) . Tính giá trị của a + b",
    "question_en": "",
    "options": [],
    "solution_vi": "Cách 1: Phương trình hoành độ giao điểm của ( C ) và ( d ) như sau:\n ( 2m - 1) x - m = ax + b \\Leftrightarrow ax 2 + am + b - 2m + 1 x + bm + m = 0\n ( )\n x+m\n Do ( d ) luôn tiếp xúc với ( C ) nên phải luôn có nghiệm kép với m \\ne 0\n Suy ra a \\ne 0 và  = ( am + b - 2m + 1) - 4am ( b + 1) = 0, m \\ne 0\n 2\n \\Leftrightarrow ( a - 2 ) m2 +  2 ( a - 2 )( b + 1) - 4a ( b + 1)  x + ( b + 1) = 0, m \\ne 0\n 2 2\n ( a - 2 )2 = 0\n  a = 2\n \\Leftrightarrow 2 ( a - 2 )( b + 1) - 4a ( b + 1) = 0 \\Leftrightarrow  . Vậy a + b = 1\n  b = -1\n ( b + 1) = 0\n 2\n ( 2 x - 1) m - x \\Rightarrow y m = 2 x2\n Cách 2: Ta có y = ( ) \\Rightarrow y ( m ) = 0 \\Leftrightarrow x = 0 .\n m+ x (m + x)\n 2\n Dự đoán A ( 0; -1) là tiếp điểm, nên ta có phân tích như sau\n y=\n ( 2m - 1) x - m = -2 x^2 + 2 x^2 + ( 2m - 1) x - m = -2 x^2 + ( 2 x - 1)( x + m ) = -2 x^2 + 2 x - 1 .\n x+m x+m x+m x+m\n22 \n Do đó phương trình\n ( 2 x - 1) m - x = 2 x - 1 luôn có nghiệm kép x = 0 nên y = 2 x - 1 là đường\n m+ x\n thẳng luôn tiếp xúc với ( C ) , suy ra a = 2, b = -1 \\Rightarrow a + b = 1 .",
    "solution_en": "",
    "correct_answer": "1",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-khao sat va ve do thi ham so phan t-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d3b55cc4a29a00",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tập tất cả các giá trị thực của tham số m để đường thẳng d : y = x - 2m cắt đồ thị hàm số\n x-3\n y= ( C ) tại hai điểm phân biệt có hoành độ dương là ( a; b ) . Tính giá trị biểu thức a + b\n x +1",
    "question_en": "",
    "options": [],
    "solution_vi": "x-3\n Xét phương trình hoành độ giao điểm = x - 2m \\Rightarrow x - 3 = ( x + 1)( x - 2m )\n x +1\n \\Leftrightarrow x - 3 = x^2 - 2mx + x - 2m \\Leftrightarrow x^2 - 2mx + 3 - 2m = 0 (1)\n x-3\n Đường thẳng d : y = x - 2m cắt đồ thị hàm số y = ( C ) tại hai điểm phân biệt có hoành\n x +1\n độ dương \\Leftrightarrow (1) có hai nghiệm dương phân biệt\n    m < -3\n  = m - ( 3 - 2m ) > 0\n 2\n m + 2m - 3 > 0   m > 1\n 2\n    3\n \\Leftrightarrow  S = 2m > 0 \\Leftrightarrow m>0  m > 0 \\Leftrightarrow1< m < .\n  P = 3 - 2m > 0   2\n  3 3\n  m<  m<\n  2  2\n 3 x-3\n Vậy với 1 < m < thì đường thẳng d : y = x - 2m cắt đồ thị hàm số y = ( C ) tại hai điểm\n 2 x +1\n 5\n phân biệt có hoành độ dương nên a + b = .\n 2\n x+m",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-khao sat va ve do thi ham so phan t-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1866cf6c9dad48",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = ( C ) và đường thẳng ( d ) : y = x + m . Có bao nhiêu giá trị nguyên m thuộc\n x +1\n khoảng ( -10;10 ) để đường thẳng ( d ) cắt đồ thị ( C ) tại hai điểm về hai phía của trục hoành?",
    "question_en": "",
    "options": [],
    "solution_vi": "x+2\n Phương trình hoành độ giao điểm của ( C ) và ( d ) là: = x + m (1) .\n x +1\n  x \\ne -1\n (1) \\Leftrightarrow  .\n  f ( x ) = x + mx + m - 2 = 0 ( 2 )\n 2\n \n ( d ) cắt ( C ) tại hai điểm phân biệt \\Leftrightarrow Phương trình ( 2 ) có hai nghiệm phân biệt khác -1\n \n   = m - 4m + 8 > 0\n 2\n \\Leftrightarrow \\Leftrightarrow m \\in .\n \n  f ( -1) = 1 - m + m - 2 \\ne 0\n24 \n  x + x = -m\n Gọi x1; x2 là hai nghiệm phương trình ( 2 ) . Theo viet ta có:  1 2 .\n  x1.x2 = m - 2\n Đường thẳng ( d ) cắt đồ thị ( C ) tại hai điểm về hai phía của trục hoành \\Leftrightarrow y1. y2 < 0\n \\Leftrightarrow ( x1 + m )( x2 + m ) < 0 \\Leftrightarrow x1.x2 + m ( x1 + x2 ) + m 2 < 0 \\Leftrightarrow m - 2 - m 2 + m 2 < 0 \\Leftrightarrow m < 2 .\n Do m \\in và m \\in ( -10;10 ) \\Rightarrow m \\in {-9; -8;...; -1;0;1} . Vậy có 11 giá trị m .\n x^2 + mx - 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-khao sat va ve do thi ham so phan t-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-06b912684a40ee",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tập hợp tất cả các giá trị thực của tham số m để đường thẳng d : y = x - 2m cắt đồ thị hàm số\n x-3\n y= ( C ) tại hai điểm phân biệt có hoành độ dương là ( a ; b ) . Tính T = a + b\n x +1",
    "question_en": "",
    "options": [],
    "solution_vi": "x-3\n Phương trình hoành độ giao điểm x - 2m = \\Leftrightarrow x^2 - 2mx - 2m + 3 = 0\n x +1\n \n   ' = m 2 + 2m - 3 > 0 m < 1, m > 3\n  \n Yêu cầu đề bài \\Leftrightarrow  S = 2m > 0 \\Leftrightarrow m > 0 \\Leftrightarrow 0 < m < 1 nên T = a + b = 1\n  P = -2m + 3 > 0  3\n  m <\n  2\n 2mx + 3m + 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-khao sat va ve do thi ham so phan t-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-657c2763d64933",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm giá trị nguyên dương của m để đồ thị hàm số y = cắt trục Oy tại điểm có\n 2 x - m2\n tung độ bằng -4 .",
    "question_en": "",
    "options": [],
    "solution_vi": "Vì đồ thị hàm số cắt trục Oy tại điểm có tung độ bằng -4 nên ta có:\n m \\ne 0\n  m = 1\n 3m + 1 m \\ne 0 m = 1\n = -4 \\Leftrightarrow  \\Leftrightarrow  \\Leftrightarrow 1 vì m nguyên dương nên m = 1\n -m 2\n 3m + 1 = 4m\n 2\n m = - 1  m = -\n    4\n 4\n 2x + m",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-khao sat va ve do thi ham so phan t-9",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-20f8eac342c749",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên dương của tham số m để đồ thị hàm số y = cắt đường thẳng\n x +1\n y = 1 - x tại hai điểm phân biệt.",
    "question_en": "",
    "options": [],
    "solution_vi": "Điều kiện x \\ne -1 .\n 2x + m\n Phương trình hoành độ giao điểm = 1 - x \\Leftrightarrow x^2 + 2 x + m - 1 = 0 ( *) .\n x +1\n Yêu cầu bài toán \\Leftrightarrow (*) có hai nghiệm phân biệt khác -1\n 1 - ( m - 1) > 0\n  m < 2\n \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow m < 2 vì m nguyên dương nên có hai giá trị của m thoả\n 1 - 2 + m - 1 \\ne 0 m \\ne 2\n \n mãn\n26 \n 2x - 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-4-khao sat va ve do thi ham so phan t-10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-cd0da1f1172730",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hàm số y = 2 x^3 - 2 x^2 - 2 x + 1 đồng biến trên khoảng nào sau đây?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -1;1)",
        "content_en": "( -1;1)",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -\\infty;1)",
        "content_en": "( -\\infty;1)",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 0; 2 )",
        "content_en": "( 0; 2 )",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1; 2 )",
        "content_en": "(1; 2 )",
        "is_correct": true
      }
    ],
    "solution_vi": "Chọn D\n Tập xác định D = .\n  1\n  x=-\n Ta có y = 6 x - 4 x - 2 ; y = 0 \\Leftrightarrow\n 2\n 3.\n \n x = 1\n Bảng biến thiên:\n  1\n Hàm số đồng biến trên khoảng  -\\infty; -  và (1; +\\infty ) .\n  3\n x+3",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-bd609ad31087dc",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hàm số y = nghịch biến trên khoảng nào sau đây? x-2 10",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -2;3) .",
        "content_en": "( -2;3) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -\\infty;3) .",
        "content_en": "( -\\infty;3) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -\\infty; +\\infty ) .",
        "content_en": "( -\\infty; +\\infty ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 3; +\\infty ) .",
        "content_en": "( 3; +\\infty ) .",
        "is_correct": true
      }
    ],
    "solution_vi": "-5\n Ta có: y = < 0, x \\ne 2.\n ( x - 2)\n 2\n \\Rightarrow Hàm số nghịch biến trên khoảng ( -\\infty; 2 ) và ( 2; +\\infty ) .",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-7",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0dfd6d068f00ad",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = f ( x ) có đạo hàm f ' ( x ) = ( x + 1)( 2 x - 5 ) với mọi x \\in 2 . Hàm số đã cho nghịch biến trên khoảng nào?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -\\infty; -1) .",
        "content_en": "( -\\infty; -1) .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "( -1;3) .",
        "content_en": "( -1;3) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -1; +\\infty ) .",
        "content_en": "( -1; +\\infty ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( -3;1) .",
        "content_en": "( -3;1) .",
        "is_correct": false
      }
    ],
    "solution_vi": " x = -1\n Ta có f ' ( x ) = 0 \\Leftrightarrow  .\n x = 5\n  2\n Bảng xét dấu f ' ( x ) :\n Vậy hàm số nghịch biến trên khoảng ( -\\infty; -1) .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-11",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5b4bee97cccfbe",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hàm số y = - x + 8 x + 6 đồng biến trên khoảng nào dưới đây? 4 2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -2; 0 ) và ( 2; + \\infty ) .",
        "content_en": "( -2; 0 ) và ( 2; + \\infty ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -\\infty ; - 2 ) và ( 0; 2 ) .",
        "content_en": "( -\\infty ; - 2 ) và ( 0; 2 ) .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "( -\\infty ; - 2 ) và ( 2; + \\infty ) .",
        "content_en": "( -\\infty ; - 2 ) và ( 2; + \\infty ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( -2; 2 ) .",
        "content_en": "( -2; 2 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D = .\n12 \n x = 0 \\Rightarrow y = 6\n y = -4 x3 + 16 x ; y = 0 \\Leftrightarrow -4 x^3 + 16 x = 0 \\Leftrightarrow  x = 2 \\Rightarrow y = 22 .\n  x = -2 \\Rightarrow y = 22\n Bảng biến thiên\n Vậy hàm số y = - x + 8 x + 6 đồng biến trên khoảng ( -\\infty ; - 2 ) và ( 0; 2 ) .\n 4 2",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-13",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1f6c3988757d46",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hàm số y = x^4 + x^2 - 2 nghịch biến trên khoảng nào trong các khoảng sau?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -\\infty; 0 ) .",
        "content_en": "( -\\infty; 0 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -2;1) .",
        "content_en": "( -2;1) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 0; +\\infty ) .",
        "content_en": "( 0; +\\infty ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 0; 2 ) .",
        "content_en": "( 0; 2 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D = . Ta có y ' = 4 x3 + 2 x = 2 x ( 2 x^2 + 1) .\n Ta có y ' > 0, x > 0 và y ' < 0, x < 0. Suy ra hàm số nghịch biến trên khoảng ( -\\infty; 0 ) .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-15",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6a975bfe7334fe",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = f ( x ) có đạo hàm f ' ( x ) = - x + 2 với mọi x \\in . Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -\\infty; +\\infty ) .",
        "content_en": "( -\\infty; +\\infty ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 2; +\\infty ) .",
        "content_en": "( 2; +\\infty ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -\\infty; 2 ) .",
        "content_en": "( -\\infty; 2 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 0; +\\infty ) .",
        "content_en": "( 0; +\\infty ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: f  ( x ) = - x + 2 = 0 \\Leftrightarrow x = 2 .\n Bảng xét dấu\n Vậy hàm số nghịch biến trên khoảng ( 2; +\\infty ) .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-16",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-44d85ac9ab320b",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = f ( x ) liên tục trên và có đạo hàm f ' ( x ) = ( x + 1)( x - 1) ( 2 - x ) . Mệnh đề nào 4 dưới đây đúng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "f ( 5 ) > f ( 4 ) > f ( 3) .",
        "content_en": "f ( 5 ) > f ( 4 ) > f ( 3) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "f ( -1) > f ( 0 ) > f (1) .",
        "content_en": "f ( -1) > f ( 0 ) > f (1) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "f ( -3) < f ( -2 ) < f ( -1) .",
        "content_en": "f ( -3) < f ( -2 ) < f ( -1) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "f ( 0 ) < f (1) < f ( 2 ) .",
        "content_en": "f ( 0 ) < f (1) < f ( 2 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có f ' ( x ) > 0 \\Leftrightarrow x \\in ( -1; 2 ) , vậy hàm số đồng biến trên khoảng ( -1; 2 ) .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-18",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-532b6f98930a1e",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hàm số y = 8 + 2 x - x^2 đồng biến trên khoảng nào sau đây?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "(1; +\\infty ) .",
        "content_en": "(1; +\\infty ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -\\infty;1) .",
        "content_en": "( -\\infty;1) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -2;1) .",
        "content_en": "( -2;1) .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "(1; 4 ) .",
        "content_en": "(1; 4 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Điều kiện xác định: -2 \\le x \\le 4\n -x +1 -x + 1\n Ta có: x \\in ( -2; 4 ) , y ' = >0\\Leftrightarrow > 0 \\Leftrightarrow -x + 1 > 0 \\Leftrightarrow x < 1\n 8 + 2x - x^2\n 8 + 2x - x2\n Kết hợp với điều kiện xác định ta được hàm số đồng biến trên ( -2;1) .",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-23",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a6f195d797e673",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hàm số y = đồng biến trên khoảng x+4",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -\\infty; +\\infty ) .",
        "content_en": "( -\\infty; +\\infty ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -6;0 ) .",
        "content_en": "( -6;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1; 4 ) .",
        "content_en": "(1; 4 ) .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( -5;1) .",
        "content_en": "( -5;1) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D = \\ {-4} .\n 11\n Ta có y = > 0 , x \\in D .\n ( x + 4)\n 2\n Vậy hàm số đồng biến trên các khoảng ( -\\infty; -4 ) và ( -4; +\\infty ) và đồng biến trên (1; 4 ) .\n x2 - 2x + 5",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-25",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b687d4a26a1321",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm giá trị cực tiểu của hàm số y = - x^3 + 3x + 4 .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "yCT = 2 .",
        "content_en": "yCT = 2 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "yCT = 1 .",
        "content_en": "yCT = 1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "yCT = 6 .",
        "content_en": "yCT = 6 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "yCT = -1 .",
        "content_en": "yCT = -1 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định của hàm số: D = .\n  x = -1 \\Rightarrow y = 2\n Ta có y = -3 x^2 + 3 , y = 0 \\Rightarrow -3x 2 + 3 = 0 \\Leftrightarrow  .\n x = 1 \\Rightarrow y = 6\n Bảng biến thiên\n Vậy giá trị cực tiểu của hàm số yCT = 2 tại x = -1 .",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-29",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-89a368dcfe37cf",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x3 - 3x 2 + 2 . Điểm cực tiểu của đồ thị hàm số có tọa độ là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 2;2 ) .",
        "content_en": "( 2;2 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 2; -2 ) .",
        "content_en": "( 2; -2 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 0; -2 ) .",
        "content_en": "( 0; -2 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 0;2 ) .",
        "content_en": "( 0;2 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "x = 0\n Ta có: y ' = 3 x^2 - 6 x ; y '' = 6 x - 6 . Xét: y ' = 0 \\Leftrightarrow  .\n x = 2\n Ta thấy: y '' ( 0 ) = -6 < 0 \\Rightarrow Hàm số có điểm cực tiểu x = 0 .\n Vậy tọa độ điểm cực tiểu của đồ thị hàm số là ( 0;2 ) .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-32",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-49df2aa9b13cde",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hàm số y = f ( x ) có đạo hàm là f ' ( x ) = x^2 ( x + 1) ( 2 x - 1) . Số điểm cực trị của hàm số 2 y = f ( x ) là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2 . 18",
        "content_en": "2 . 18",
        "is_correct": false
      }
    ],
    "solution_vi": "\n x = 0\n \n Ta có f ' ( x ) = 0 \\Leftrightarrow x^2 ( x + 1) ( 2 x - 1) = 0 \\Leftrightarrow  x = -1\n 2\n  1\n x =\n  2\n Nhận thấy x^2 > 0 x \\ne 0 \\Rightarrow f  ( x ) không đổi dấu khi qua nghiệm x = 0 nên x = 0 không phải\n là điểm cực trị hàm số.\n Tương tự ( x + 1) > 0 x \\ne -1 \\Rightarrow f  ( x ) không đổi dấu khi qua nghiệm x = -1 nên x = -1 không\n 2\n phải là điểm cực trị hàm số.\n 1\n f ' ( x ) cùng dấu với nhị thức 2 x - 1 nên x = là điểm cực trị của hàm số.\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-ly thuyet ve tinh don dieu cuc tri cua h-34",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-00e65a0e4d02b5",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x -1",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tập xác định của hàm số là D = \\ {1}",
        "content_en": "Tập xác định của hàm số là D = \\ {1}",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Hàm số đã cho đồng biến trên \\ {1} .",
        "content_en": "Hàm số đã cho đồng biến trên \\ {1} .",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Đạo hàm của hàm số luôn nhỏ hơn 0 với mọi x \\ne 1 .",
        "content_en": "Đạo hàm của hàm số luôn nhỏ hơn 0 với mọi x \\ne 1 .",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Hàm số đã cho không có cực trị.",
        "content_en": "Hàm số đã cho không có cực trị.",
        "is_correct": true
      }
    ],
    "solution_vi": "-4\n Tập xác định: D = \\ {1} và có đạo hàm y = < 0 x \\ne 1.\n ( x - 1)\n 2\n Do đó hàm số đã cho không có cực trị.\n a) Đúng: Tập xác định của hàm số là D = \\ {1}\n b) Sai: Hàm số đã cho đồng biến trên \\ {1} .\n c) Đúng: Đạo hàm của hàm số luôn nhỏ hơn 0 với mọi x \\ne 1 .\n d) Đúng: Hàm số đã cho không có cực trị.\n Cho hàm số y = x + 1\n 2",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:Đ",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-1-ly thuyet ve tinh don dieu cuc tri -5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7244a8fb44deec",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x^3 - 3 x^2 + 5 có đồ thị ( C ) . Tính độ dài đoạn thẳng nối hai điểm cực trị của đồ\n thị ( C ) .",
    "question_en": "",
    "options": [],
    "solution_vi": " x = 0 \\Rightarrow y (0) = 5\n Ta có: y = 3x 2 - 6 x . Cho y = 0 \\Leftrightarrow \n  x = 2 \\Rightarrow y ( 2 ) = 1\n Đồ thị hàm số có hai điểm cực trị là A ( 0;5 ) , B ( 2;1)\n Độ dài đoạn thẳng nối hai điểm cực trị bằng AB = ( 2 - 0 ) + (1 - 5) = 2 5 .\n 2 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-ly thuyet ve tinh don dieu cuc tri -1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c18b247a5f05f0",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Biết hàm số y = ax 3 + bx 2 + cx + d có hai điểm cực trị là ( -1;18 ) và ( 3; - 16 ) . Tính giá trị biểu\n thức P = a + b + c + d .",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có y = 3x 2 + 2bx + c\n  y (1) = 3a - 2b + c = 0\n \n  y ( -1) = - a + b - c + d = 18\n Theo giả thiết suy ra: \n  y ( 3) = 27a + 6b + c = 0\n  y^3 = 27a + 9b + 3 x + d = 16\n  ( )\n26 \n 3a - 2b + c = 0\n -a + b - c + d = 18\n  17 51 153 101\n Khi đó ta có hệ  \\Rightarrowa= ;b= ;c=- ;d= \\Rightarrow P = 1.\n  27 a + 6b + c = 0 16 16 16 16\n 27 a + 9b + 3 x + d = 16",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-ly thuyet ve tinh don dieu cuc tri -2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ec0b897ee25eec",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Đồ thị của hàm số y = x^3 - 3x 2 - 9 x + 1 có hai điểm cực trị là A và B . Tính khoảng cách từ gốc\n toạ độ O đến đường thẳng AB .",
    "question_en": "",
    "options": [],
    "solution_vi": "Hàm số y = x^3 - 3x 2 - 9 x + 1 có y = 3x 2 - 6 x - 9 nên có hai điểm cực trị A ( -1;6 ) và B ( 3; - 26 )\n 2\n Phương trình đường thẳng qua AB là 8 x + y + 2 = 0 . Khi đó d ( O; AB ) = .\n 65\n x2 - 4x + 5",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-ly thuyet ve tinh don dieu cuc tri -3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-319131a0062628",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Gọi A, B, C là ba điểm cực trị của đồ thị hàm số y = x^4 - 2 x^2 + 4 . Bán kính đường tròn nội tiếp\n tam giác ABC bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "x = 0\n Tập xác định D = và có đạo hàm y = 4 x3 - 4 x = 0 \\Leftrightarrow \n  x = \\pm1\n Giả sử A ( 0;4 ) , B ( -1;3) , C (1;3) . Khi đó AB = AC = 2 và BC = 2\n Suy ra tam giác ABC vuông cân tại A\n 2SABC AB. AC\n Vậy bán kính đường tròn nội tiếp tam giác ABC bằng: r = = = 2 -1\n AB + BC + CA 2 2 + 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-ly thuyet ve tinh don dieu cuc tri -5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-323d66f7f78a96",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Cho hàm số y = ax 3 + bx 2 + cx + d đạt cực trị tại các điểm x1 , x2 thỏa mãn x1 \\in ( -1;0 ) , x2 \\in (1;2 )\n Biết hàm số đồng biến trên khoảng ( x1; x2 ) . Đồ thị hàm số cắt trục tung tại điểm có tung độ âm.\n Trong các số a, b và c có bao nhiêu số âm?",
    "question_en": "",
    "options": [],
    "solution_vi": "Hàm số đa thức bậc 3: y = ax 3 + bx 2 + cx + d đạt cực trị tại các điểm x1 , x2 nên a \\ne 0.\n Suy ra: x1 , x2 là hai nghiệm của phương trình y ' = 3ax 2 + 2bx + c = 0.\n  -2b\n  x1 + x2 = 3a\n Theo định lý Vi-et ta có:  .\n  x .x = c\n  1 2 3a\n Áp dụng định lý dấu tam thức bậc 2, ta có hàm số đồng biến trên khoảng ( x1; x2 ) \\Rightarrow a < 0.\n  -2b\n  x1 + x2 > 0  3a > 0 b > 0\n Vì x1 \\in ( -1;0 ) , x2 \\in (1;2 ) nên  \\Leftrightarrow do a < 0 \\Rightarrow \n  x1.x2 < 0  c <0 c > 0\n  3a\n Vậy trong các số a, b và c có 1 số âm là a.\n -----------------HẾT-----------------\n28",
    "solution_en": "",
    "correct_answer": "0",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-ly thuyet ve tinh don dieu cuc tri -7",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-de2787021634e4",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = mx3 + mx 2 - ( m + 1) x + 1 . Tìm tất cả các giá trị của m để hàm số nghịch biến trên . -3 -3 -3",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "<m<0.",
        "content_en": "<m<0.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "\\lem\\le0.",
        "content_en": "\\lem\\le0.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m \\le 0 .",
        "content_en": "m \\le 0 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m \\le . 4 4 4",
        "content_en": "m \\le . 4 4 4",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: y = mx3 + mx 2 - ( m + 1) x + 1 \\Rightarrow y = 3mx 2 + 2mx - m - 1\n Trường hợp 1: m = 0 \\Rightarrow y ' = -1 < 0 . Hàm số nghịch biến trên (1)\n Trường hợp 2: m \\ne 0 . Hàm số nghịch biến trên khi:\n m < 0 m < 0\n a < 0 m < 0  -3\n  \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow  -3 \\Leftrightarrow \\le m < 0 ( 2)\n  \\le 0 ( 2m ) - 4.3m.( -m - 1) \\le 0 + \\le \\le \\le\n 2 2\n 16 m 12 m 0  4 m 0 4\n -3\n Từ (1) và ( 2 ) \\Rightarrow \\le m \\le 0.\n 4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4632828db2139a",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Số giá trị nguyên của tham số m để hàm số y = ( m2 - 1) x3 + ( m - 1) x^2 - x nghịch biến trên là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2.",
        "content_en": "2.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1.",
        "content_en": "1.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "0.",
        "content_en": "0.",
        "is_correct": false
      }
    ],
    "solution_vi": "Yêu cầu đề bài tương đương với y = 3 ( m2 - 1) x^2 + 2 ( m - 1) x - 1 \\le 0, x \\in .\n Khi m 2 - 1 = 0 \\Leftrightarrow m = \\pm1 .\n Với m = 1 thì y = -1 < 0, x \\in do đó giá trị m = 1 thỏa mãn.\n 1\n Với m = -1 thì y = -4 x - 1 \\le 0 \\Leftrightarrow x \\ge - , do đó giá trị m = -1 không thỏa mãn.\n 4\n Khi m 2 - 1 \\ne 0 \\Leftrightarrow m \\ne \\pm1 , YCBT tương đương với\n m 2 - 1 < 0 -1 < m < 1\n  1\n  \\Leftrightarrow 1 \\Leftrightarrow - \\le m < 1.\n ( m - 1) + 3 ( m - 1) \\le 0 - 2 \\le m \\le 1\n 2 2\n 2\n 1\n Vậy - \\le m \\le 1 nên có 2 giá trị nguyên của tham số m là m = 0; m = 1 thoả mãn.\n 2\n mx + 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f0196d52bcb2cb",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Số giá trị nguyên của m để hàm số y = ( m - 7 ) x3 + ( m - 7 ) x^2 - 2mx - 1 nghịch biến trên bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "7 .",
        "content_en": "7 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "9.",
        "content_en": "9.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "6 .",
        "content_en": "6 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D = .\n Ta có y = 3 ( m - 7 ) x^2 + 2 ( m - 7 ) x - 2m .\n Trường hợp 1: m = 7 \\Rightarrow y = -14 < 0, x \\in \\Rightarrow Hàm số nghịch biến trên \\Rightarrow m = 7.\n Trường hợp 2: m \\ne 7\n m - 7 < 0 m < 7\n Hàm số nghịch biến trên \\Leftrightarrow y \\le 0, x \\in \\Leftrightarrow \\Leftrightarrow 2\n  \\le 0 7m - 56m + 49 \\le 0\n8 \n m < 7\n \\Leftrightarrow \\Leftrightarrow1\\le m < 7.\n 1 \\le m \\le 7\n Vậy hàm số nghịch biến trên khi 1 \\le m \\le 7 . Do m \\in nên có 7 giá trị nguyên của m .\n x+m",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-330cf60431edf1",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm tất cả giá trị của m sao cho hàm số y = đồng biến trên các khoảng xác định? x+2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m \\ge 2 .",
        "content_en": "m \\ge 2 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m < 2 .",
        "content_en": "m < 2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m \\le 2 .",
        "content_en": "m \\le 2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m > 2 .",
        "content_en": "m > 2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "x+m\n Hàm số y = đồng biến trên các khoảng xác định\n x+2\n 2-m\n \\Leftrightarrow y = > 0, x \\ne -2 \\Leftrightarrow 2 - m > 0 \\Leftrightarrow m < 2 .\n ( x + 2)\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4dbb2aa23d5d7d",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm tất cả các giá trị của tham số m để hàm số y = 3 sin x + cos x - mx + 5 nghịch biến trên tập xác định.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m \\ge 2.",
        "content_en": "m \\ge 2.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m \\le 2.",
        "content_en": "m \\le 2.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m \\ge -2.",
        "content_en": "m \\ge -2.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-2 \\le m \\le 2.",
        "content_en": "-2 \\le m \\le 2.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D = và có đạo hàm y = 3 cos x - sin x - m\n Hàm số y = 3 sin x + cos x - mx + 5 nghịch biến trên\n \\Leftrightarrow y = 3 cos x - sin x - m \\le 0, x \\in\n 3 1 m   m\n \\Leftrightarrow cos x - sin x \\le , x \\in \\Leftrightarrow sin  x -  \\le , x \\in (1)\n 2 2 2  3 2\n   m\n Vì -1 \\le sin  x -  \\le 1, x \\in nên (1) \\Leftrightarrow \\ge1\\Leftrightarrow m \\ge 2.\n  3 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1d349491e8ed9d",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có tất cả bao nhiêu giá trị nguyên của tham số thực m sao cho hàm số 1 f ( x ) = mx3 - 2mx 2 + ( m - 5) x + 2021 nghịch biến trên ? 3",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1.",
        "content_en": "1.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "0.",
        "content_en": "0.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2.",
        "content_en": "2.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: f  ( x ) = mx 2 - 4mx + m - 5\n Yêu cầu bài toán \\Leftrightarrow f  ( x ) \\le 0 , x \\in\n Trường hợp 1: m = 0\n Khi đó: f  ( x ) = -5 < 0 , x \\in\n Suy ra: nhận m = 0 .\n Trường hợp 2: m \\ne 0\n m < 0 m < 0\n a < 0  5\n Khi đó: f  ( x ) \\le 0 , x \\in \\Leftrightarrow \\Leftrightarrow 2 \\Leftrightarrow 5 \\Leftrightarrow- \\lem<0\n  \\le 0 4m - m ( m - 5 ) \\le 0 - 3 \\le m \\le 0 3\n 5\n Vậy - \\le m \\le 0 thoả mãn yêu cầu bài toán.\n 3\n Do m \\in nên m \\in {-1;0} .\n x + m2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-9",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-23682e2a5b3c24",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để hàm số y = đồng biến trên từng khoảng x+4 xác định của nó?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5 .",
        "content_en": "5 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "x + m2 4 - m2\n Tập xác định: D = \\ {-4} . Khi đó ta có: y = \\Rightarrow y = .\n x+4 ( x + 4)\n 2\n x + m2\n Hàm số y = đồng biến trên từng khoảng xác định của nó khi và chỉ khi\n x+4\n y > 0, x \\ne -4 \\Leftrightarrow 4 - m 2 > 0 \\Leftrightarrow -2 < m < 2 . Do m \\in nên m \\in {-1;0;1} .\n ( m - m ) x + m - m x + mx + 2. Có bao nhiêu giá trị nguyên của m để\n 2 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-05149a36af7697",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = 3 ( ) 2 2 hàm số đồng biến trên ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5.",
        "content_en": "5.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1.",
        "content_en": "1.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2.",
        "content_en": "2.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y ' = ( m 2 - m ) x^2 + 2 ( m 2 - m ) x + m .\n m = 0\n Trường hợp 1: m2 - m = 0 \\Leftrightarrow  .\n m = 1\n Với m = 0 thì y ' = 0. Suy ra hàm số đã cho là hàm số hằng.\n Do đó m = 0 không thỏa mãn yêu cầu bài toán.\n Với m = 1 thì y ' = 1 > 0, x \\in . Suy ra hàm số đã cho đồng biến trên .\n Do đó m = 1 thỏa mãn yêu cầu bài toán.\n m \\ne 0\n Trường hợp 2: m2 - m \\ne 0 \\Leftrightarrow  .\n m \\ne 1\n ( m - m ) x + m - m x + mx + 2 đồng biến trên\n 2 3\n Khi đó: Hàm số y =\n 3\n ( ) 2 2\n khi và chỉ khi\n y ' \\ge 0, x \\in \\Leftrightarrow ( m - m ) x + 2 ( m - m ) x + m \\ge 0, x \\in .\n 2 2 2\n m 2 - m > 0 m 2 - m > 0\n Tức là  2 \\Leftrightarrow  2 \\Leftrightarrow 1 < m \\le 2. Mà m \\in nên m = 2.\n ( ) ( )\n 2\n  m - m - m 2\n - m m \\le 0 \n  m - 2 m \\le 0\n Vậy có 2 giá trị nguyên của m thỏa mãn.\n10 \n m",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-44edd805a1447a",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm giá trị lớn nhất của tham số m để hàm số y = x3 - mx 2 + ( 8 - 2m ) x + m + 3 đồng biến 3 trên .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -4.",
        "content_en": "m = -4.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = -2 .",
        "content_en": "m = -2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 4 .",
        "content_en": "m = 4 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 2 .",
        "content_en": "m = 2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D = và có đạo hàm y ' = x^2 - 2mx + 8 - 2m .\n Hàm số đồng biến trên \\Leftrightarrow y ' \\ge 0, x \\in\n a > 0 1 > 0\n \\Leftrightarrow x^2 - 2mx + 8 - 2m \\ge 0, x \\in \\Leftrightarrow \\Leftrightarrow 2 \\Leftrightarrow -4 \\le m \\le 2 .\n  ' \\le 0  m + 2m - 8 \\le 0\n 1\n Giá trị lớn nhất của tham số m để hàm số y = x3 - mx 2 + ( 8 - 2m ) x + m + 3 đồng biến trên\n 3\n thì m = 2 .\n 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-14",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5aa0aa4f29a750",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tổng các giá trị nguyên âm của m để hàm số y = x3 + mx - đồng biến trên khoảng 5 x5 ( 0;+\\infty ) là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "-10 .",
        "content_en": "-10 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-3 .",
        "content_en": "-3 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-6 .",
        "content_en": "-6 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-7 .",
        "content_en": "-7 .",
        "is_correct": false
      }
    ],
    "solution_vi": "1\n Hàm số đồng biến trên khoảng (0; +\\infty ) \\Leftrightarrow y ' = 3x 2 + m + \\ge 0 với x \\in ( 0; +\\infty ) (*) .\n x6\n Theo bất đẳng thức Cauchy ta có\n 1  1 1\n y ' = 3x 2 + + m =  x^2 + x^2 + x^2 + 6  + m \\ge 4 4 x^2 .x^2 .x^2 . 6 + m = 4 + m , x \\in ( 0; +\\infty ) .\n  x \n 6\n x x\n (*) \\Leftrightarrow m + 4 \\ge 0 \\Leftrightarrow m \\ge -4\n Vì m nguyên âm nên m \\in {-4; -3; -2; -1} . Vậy tổng các giá trị của m là -10 .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-25",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f3a9790a57a309",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = 2 x3 - 3 ( m + 1) x^2 + 6mx + 1 nghịch biến trên khoảng (1;3) khi và chỉ khi",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m \\ge 1 .",
        "content_en": "m \\ge 1 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 < m < 3 .",
        "content_en": "1 < m < 3 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m > 3 .",
        "content_en": "m > 3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m \\ge 3 .",
        "content_en": "m \\ge 3 .",
        "is_correct": true
      }
    ],
    "solution_vi": "Tập xác định D = .\n y = 2 x3 - 3 ( m + 1) x^2 + 6mx + 1 \\Rightarrow y ' = 6 x^2 - 6 ( m + 1) x + 6m .\n Hàm số nghịch biến trên khoảng (1;3) .\n \\Leftrightarrow y \\le 0, x \\in (1;3) \\Leftrightarrow 6 x^2 - 6 ( m + 1) x + 6m \\le 0, x \\in (1;3) .\n \\Leftrightarrow x^2 - ( m + 1) x + m \\le 0, x \\in (1;3) \\Leftrightarrow m \\ge x, x \\in (1;3) . Vậy m \\ge 3, x \\in (1;3) .\n 1",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-26",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a60821f3d61a91",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x3 - mx 2 + ( 4m - 3) x + 2017 . Tìm giá trị lớn nhất của tham số thực m để 3 hàm số đã cho đồng biến trên",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = 4 .",
        "content_en": "m = 4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 3 .",
        "content_en": "m = 3 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 1 .",
        "content_en": "m = 1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 2 .",
        "content_en": "m = 2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D = và có đạo hàm y = x^2 - 2mx + ( 4m - 3) .\n a > 0\n Hàm số đồng biến trên khi chỉ khi y \\ge 0, x \\in \\Leftrightarrow \\Leftrightarrow m 2 - 4m + 3 \\le 0 \\Leftrightarrow 1 \\le m \\le 3 .\n  \\le 0\n Giá trị m lớn nhất là 3.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-27",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4d894ba7f9d9d2",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m \\in ( -10;10 ) sao cho ứng với mỗi m , hàm số ( m + 1) x + 18 nghịch biến trên khoảng 3; 7 ? y= ( ) 3 x + 2m - 1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8 .",
        "content_en": "8 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "10 .",
        "content_en": "10 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "11 .",
        "content_en": "11 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "9 .",
        "content_en": "9 .",
        "is_correct": false
      }
    ],
    "solution_vi": "-2m + 1\n Điều kiện: 3x + 2m - 1 \\ne 0 \\Leftrightarrow x \\ne\n 3\n Đạo hàm y =\n ( m + 1)( 2m - 1) - 54 = 2m2 + m - 55\n ( 3x + 2m - 1) ( 3x + 2m - 1)\n 2 2\n ( m + 1) x + 18 nghịch biến trên khoảng 3; 7\n Hàm số y = ( )\n 3 x + 2m - 1\n  11\n - 2 < m < 5  11\n 2m + m - 55 < 0  - < m < 5\n 2\n    -2m + 1  2\n \\Leftrightarrow  -2m + 1 \\Leftrightarrow  \\le3\\Leftrightarrow \\Leftrightarrow -4 \\le m < 5\n \\notin ( 3;7 ) m \\ge -4\n   3 \n  3   -2m + 1   m \\le -10\n  3 \\ge 7\n \n Mà m \\in ( -10;10 ) , m nguyên nên m \\in {-4; -3; -2; -1;0;1;2;3;4} .\n Vậy có 9 giá trị m thỏa mãn yêu cầu bài toán.\n ln x - 6",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-30",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-36671b64ce0859",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên dương không lớn hơn 2024 của tham số m sao cho hàm số x2 + 2 x - 1 + m y= nghịch biến trên khoảng ( -3;1) ? 5x + m",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2012 .",
        "content_en": "2012 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2009 .",
        "content_en": "2009 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2011 .",
        "content_en": "2011 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2010 .",
        "content_en": "2010 .",
        "is_correct": true
      }
    ],
    "solution_vi": " m 5 x^2 + 2mx - 3m + 1\n Tập xác định D = \\ -  và có đạo hàm y = .\n  5 (5x + m )\n 2\n Hàm số nghịch biến trên khoảng ( -3;1)\n 5 x^2 + 2mx - 3m + 1 \\le 0x \\in ( -3;1)\n 5 x + 2mx - 3m + 1\n 2\n \n \\Leftrightarrow y = \\le 0x \\in ( -3;1) \\Leftrightarrow  m\n (5x + m ) - \\notin ( -3;1)\n 2\n  5\n   46\n  m \\ge\n -9m + 46 \\le 0  9\n  \n \\Leftrightarrow -m + 6 \\le 0 \\Leftrightarrow m \\ge 6 \\Leftrightarrow m \\ge 15\n  m \\le -5  m \\le -5\n  \n \n   m \\ge 15   m \\ge 15\n Do nguyên dương không lớn hơn 2024 nên 15 \\le m \\le 2024 . Vậy có tất cả 2010 giá trị.\n 2 x^2 + (1 - m ) x + 1 + m",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-34",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d180235b07a684",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên dương của tham số m sao cho hàm số y = x-m đồng biến trên khoảng (1;+\\infty ) ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      }
    ],
    "solution_vi": "2 x^2 - 4mx + m2 - 2m - 1 g ( x)\n Tập xác định D = \\ {m} . Ta có y = = .\n ( x - m) ( x - m)\n 2 2\n Hàm số đồng biến trên (1;+\\infty ) khi và chỉ khi g ( x ) \\ge 0, x > 1 và m \\le 1\n Vì  g  = 2 ( m + 1) \\ge 0, m nên \\Leftrightarrow g ( x ) = 0 có hai nghiệm thỏa x1 \\le x2 \\le 1\n 2\n 2 g (1) = 2 ( m 2 - 6m + 1) \\ge 0\n \n Điều kiện tương đương là  S \\Leftrightarrow m \\le 3 - 2 2  0, 2 .\n  = m \\le1\n 2\n Do đó không có giá trị nguyên dương của m thỏa yêu cầu bài toán.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-35",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a2f67152e7435d",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên dương bé hơn 2024 của tham số m sao cho hàm số 2 x^2 + 2 x - 1 - 5m y= nghịch biến trên khoảng (1;5 ) ? x-m",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2017 .",
        "content_en": "2017 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2018 .",
        "content_en": "2018 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2020 .",
        "content_en": "2020 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2019 .",
        "content_en": "2019 .",
        "is_correct": true
      }
    ],
    "solution_vi": "2 x^2 - 4mx + 3m + 1\n Tập xác định D = \\ {m} và có y = .\n ( x - m)\n 2\n Hàm số nghịch biến trên khoảng (1;5 )\n 2 x^2 - 4mx + 3m + 1 2 x^2 - 4mx + 3m + 1 \\le 0x \\in (1;5 )\n \\Leftrightarrow y = \\le 0x \\in (1;5 ) \\Leftrightarrow \n ( x - m) m \\notin (1;5 )\n 2\n20 \n  \n  \n -m + 3 \\le 0 m \\ge 3\n  \n \\Leftrightarrow -17m + 51 \\le 0 \\Leftrightarrow m \\ge 3 \\Leftrightarrow m \\ge 5\n  m \\le1  m \\le1\n  \n \n   m \\ge 5   m \\ge 5\n Do nguyên dương bé hơn 2024 nên 5 \\le m \\le 2023 . Vậy có tất cả 2019 giá trị.\n x +1",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-36",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-8335ec68a44342",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để hàm số y = nghịch biến trên x -1 khoảng (1;3) và đồng biến trên khoảng ( 4;6 ) .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "6 .",
        "content_en": "6 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "7 .",
        "content_en": "7 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "5 .",
        "content_en": "5 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      }
    ],
    "solution_vi": "x2 - 2 x - 2 - m\n Ta có y = .\n ( x - 1)\n 2\n Hàm số nghịch biến trên khoảng (1;3) và đồng biến trên khoảng ( 4;6 ) khi và chỉ khi\n  y \\le 0, x \\in (1;3)  x^2 - 2 x - 2 - m \\le 0, x \\in (1;3) m \\ge x^2 - 2 x - 2, x \\in (1;3 )\n  \\Leftrightarrow 2 \\Leftrightarrow\n  y \\ge 0, x \\in ( 4;6 ) - - - \\ge  \\in ( ) m \\le x - 2 x - 2, x \\in ( 4;6 )\n 2\n  x^2 x^2 m 0, x^4;6\n Xét hàm số g ( x ) = x^2 - 2 x - 2, g  ( x ) = 2 x - 2 ta có bảng biến thiên của g ( x ) như sau\n Từ bảng biến thiên của g ( x ) ta có (*) \\Leftrightarrow 3 \\le m \\le 6\n Vì m là số nguyên nên chọn m \\in {3;4;5;6} . Vậy có 4 giá trị nguyên của m thỏa mãn bài toán.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so don dieu tren mo-38",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-548f26c01890cd",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = mx3 + mx 2 - ( m + 1) x + 1, với m là tham số",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Hàm số là hàm số bậc ba khi m \\ne 0",
        "content_en": "Hàm số là hàm số bậc ba khi m \\ne 0",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Tập xác định của hàm số là 3",
        "content_en": "Tập xác định của hàm số là 3",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Hàm số đồng biến trên khi và chỉ khi m < - hoặc m \\ge 0 . 4 3",
        "content_en": "Hàm số đồng biến trên khi và chỉ khi m < - hoặc m \\ge 0 . 4 3",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Hàm số nghịch biến trên khi và chỉ khi - \\le m < 0 . 4",
        "content_en": "Hàm số nghịch biến trên khi và chỉ khi - \\le m < 0 . 4",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Hàm số là hàm số bậc ba khi m \\ne 0\n b) Đúng: Hàm số là hàm đa thức nên tập xác định của hàm số là .\n c) Sai: Ta có y = 3mx 2 + 2mx - ( m + 1)\n Với m = 0 thì y = -1 < 0 (không thoả mãn)\n m > 0 m > 0\n Với m \\ne 0 thì yêu cầu bài toán tương đương với  \\Leftrightarrow 2 (không tồn tại)\n  \\le 0 4m + 3m \\le 0\n22 \n d) Sai: Với m = 0 thì y = -1 < 0 (thoả mãn)\n m < 0 m < 0 3\n Với m \\ne 0 thì yêu cầu bài toán tương đương với  \\Leftrightarrow 2 \\Leftrightarrow- \\lem<0\n  \\le 0 4m + 3m \\le 0 4\n 3\n Suy ra - \\le m \\le 0\n 4\n Cho hàm số y = x3 + ( m + 1) x^2 + ( m2 + 2m ) x - 3 , với m là tham số\n 1",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:S",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-1-tim tham so m de ham so don dieu tr-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9784246434b18d",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để hàm số y = - x3 - mx 2 + ( 4m + 9 ) x + 5 nghịch\n biến trên ?",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có y = -3x - 2mx + 4m + 9\n 2\n Hàm số y = - x3 - mx 2 + ( 4m + 9 ) x + 5 nghịch biến trên\n a < 0 -1 < 0\n \n  \\Leftrightarrow 2 \\Leftrightarrow m2 + 12m + 27 \\le 0 \\Leftrightarrow m \\in  -9; -3 .\n  \\le 0  m + 3 ( 4m + 9 ) \\le 0\n \n 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so don dieu tr-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7df20c5fc24345",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tất cả các giá trị của tham số m sao cho đồ thị hàm số y = x^3 - 3x 2 + 3m - 1 cắt trục hoành tại\n ba điểm phân biệt trong đó có đúng hai điểm có hoành độ lớn hơn 1 là khoảng ( a; b ) . Giá trị\n của a + b bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "x = 0\n Ta có: y = 3x 2 - 6 x ; y = 0 \\Leftrightarrow 3x 2 - 6 x = 0 \\Leftrightarrow  .\n x = 2\n Bảng biến thiên:\n Ta lại có: y (1) = 3m - 3 .\n Từ bảng bảng biến thiên ta thấy: Đồ thị hàm số cắt trục hoành tại ba điểm phân biệt trong đó có\n trong đó có đúng hai điểm có hoành độ lớn hơn 1 khi và chỉ khi:\n 5\n 3m - 5 < 0 < 3m - 3 \\Leftrightarrow ( 3m - 3)( 3m - 5 ) < 0 \\Leftrightarrow 1 < m < .\n 3\n 5 8\n Từ đó suy ra a = 1 , b = nên a + b = .\n 3 3\n Hàm số y = ( x + m ) + ( x + n ) - x^3 (tham số là m, n ) đồng biến trên ( -\\infty; +\\infty ) . Giá trị nhỏ\n 3 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so don dieu tr-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9badd89b405c4c",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "nhất của biểu thức P = 4 ( m 2 + n 2 ) - 2m - 2n bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có y ' = 3 ( x + m ) + 3 ( x + n ) - 3x 2 = 3  x^2 + 2 ( m + n ) x + n 2 + m 2 \n 2 2\n Để hàm số đồng biến trên ( -\\infty; +\\infty ) thì\n y ' \\ge 0, x \\in \\Leftrightarrow  ' = ( m + n ) - ( m 2 + n 2 ) \\le 0 \\Leftrightarrow n.m \\le 0\n 2\n Mặt khác: P = 4 ( m2 + n 2 ) - 2m - 2n = 4 ( m + n ) - 2 ( m + n ) - 8m.n\n 2\n 2\n  1 1 1\n =  2 ( m + n ) -  + ( -8mn ) - \\ge -\n  2 4 4\n  1\n  n = 0, m =\n 1 4.\n Vậy MinP = - \\Leftrightarrow \n 4  m = 0, n = 1\n  4\n 1 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so don dieu tr-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-45b22da2866a78",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Gọi S là tập hợp các giá trị của tham số m để hàm số y = x3 - mx 2 + 2mx - 3m + 4 . nghịch\n 3 2\n biến trên khoảng có độ dài bằng 3 .Tính tổng các phần tử của S .",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có: y = x^2 - mx + 2m = 0 có 2 nghiệm x1 , x2 và x1 - x2 = 3 .\n  > 0 m 2 - 8m > 0  m = -1\n  \\Leftrightarrow  2 \\Leftrightarrow .\n ( x1 + x2 ) - 4 x1 x2 = 9 m = 9\n 2\n m - 8m = 9\n Vậy S = 8 .\n mx + 9",
    "solution_en": "",
    "correct_answer": "8",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so don dieu tr-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b22280d1cdddf3",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để hàm số y = nghịch biến trên khoảng\n 4x + m\n ( 0;4 ) ?",
    "question_en": "",
    "options": [],
    "solution_vi": " m m2 - 36\n Tập xác định: D = \\ -  và có đạo hàm y = .\n  4 ( 4x + m)\n 2\n m 2 - 36 < 0 -6 < m < 6\n  \n Hàm số nghịch biến trên ( 0;4 ) khi và chỉ khi  m \\Leftrightarrow m \\ge 0 \\Leftrightarrow 0 \\le m < 6.\n  - \\notin ( 0;4 ) \n  m \\le -16\n  4 \n Vậy có 6 giá trị nguyên của m là {0;1;2;3;4;5} .\n -mx - 2025",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so don dieu tr-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ef6ccced177a94",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Số các giá trị nguyên của tham số thực m sao cho hàm số y = đồng biến trên\n x+m\n khoảng ( -2;2 ) là bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Điều kiện xác định: x \\ne -m .\n -mx - 2025 -m2 + 2025\n Ta có: y = \\Rightarrow y =\n x+m ( x + m)\n 2\n -m2 + 2025\n Hàm số đồng biến trên khoảng ( -2;2 ) khi và chỉ khi y = > 0, x \\in ( -2;2 )\n ( x + m)\n 2\n -m 2 + 2025 > 0\n  m \\in ( -45;45 )\n \\Leftrightarrow   -m \\le -2 \\Leftrightarrow \\Leftrightarrow m \\in ( -45; -2 \\cup  2;45 )\n   -m \\ge 2 m \\in ( -\\infty; -2 \\cup  2; +\\infty )\n \n28 \n Vì m \\in và m \\in ( -45; -2 \\cup  2;45 ) suy ra m = {-44; -43;...; -2;2;3;...;44}\n Vậy có tất cả 86 giá trị nguyên của m thỏa mãn.\n x2 + 5x + m + 6",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so don dieu tr-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7a7023faa13152",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu số nguyên không âm m để hàm số f ( x ) = đồng biến trên\n x+2\n khoảng (1;+ \\infty ) ?",
    "question_en": "",
    "options": [],
    "solution_vi": "Tập xác định: D = \\ {-2} .\n x2 + 4x - m + 4\n Ta có f  ( x ) = .\n ( x + 2)\n 2\n Để hàm số đồng biến trên khoảng (1;+ \\infty ) thì f  ( x ) \\ge 0, x \\in (1; + \\infty )\n x2 + 4x - m + 4\n \\Leftrightarrow \\ge 0, x \\in (1; + \\infty ) \\Leftrightarrow x^2 + 4 x + 4 \\ge m, x \\in (1; + \\infty ) \\Rightarrow m \\le min ( x^2 + 4 x + 4 )\n ( x + 2)\n 2\n (1; +\\infty )\n Xét hàm số g ( x ) = x^2 + 4 x + 4, g  ( x ) = 2 x + 4, g ( x ) = 0 \\Leftrightarrow x = -2 \\notin (1; +\\infty ) .\n Bảng biến thiên\n Dựa vào bảng biến thiên suy ra m \\le 9 . Vì m \\ge 0 nên m \\in {0;1;2;3;4;5;6;7;8;9} .\n x2 + 5x + m + 6\n Vậy có 10 giá trị của m để hàm số f ( x ) = đồng biến trên khoảng (1;+ \\infty ) .\n x+2\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "9",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so don dieu tr-8",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c11a4ae8cd9b68",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm tất cả các giá trị thực của tham số m để hàm số y = x^3 - 3x 2 + mx + 1 đạt cực tiểu tại x = 2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 < m \\le 4 .",
        "content_en": "0 < m \\le 4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m > 4 .",
        "content_en": "m > 4 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 0 .",
        "content_en": "m = 0 .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "0 \\le m < 4 .",
        "content_en": "0 \\le m < 4 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: y = x^3 - 3x 2 + mx + 1\n Khi đó y = 3x 2 - 6 x + m; y = 6 x - 6\n  y ( 2 ) = 0 m = 0\n Hàm số đạt cực tiểu tại x = 2 \\Rightarrow  \\Rightarrow \\Leftrightarrow m=0.\n  y ( 2 ) > 0 6 > 0",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2c4cfb898250dc",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x3 + 3 ( m 2 - m + 2 ) x^2 + 3 ( 3m 2 + 1) x + 2022m , tìm các giá trị của tham số m để hàm số đạt cực tiểu tại x = -2 .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = 1 .",
        "content_en": "m = 1 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 2 .",
        "content_en": "m = 2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 3 .",
        "content_en": "m = 3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 4 .",
        "content_en": "m = 4 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y = 3x 2 + 6 ( m2 - m + 2 ) x + 3 ( 3m2 + 1) = 3  x^2 + 2 ( m 2 - m + 2 ) x + 3m 2 + 1 ;\n y = 6 x + 6 ( m2 - m + 2 ) .\n m = 1\n  y ( 2 ) = 0 m2 - 4m + 3 = 0 \n Hàm số đã cho đạt cực tiểu tại x = -2 \\Leftrightarrow  \\Leftrightarrow \\Leftrightarrow m = 3\n  y ( 2 ) > 0 6m ( m - 1) > 0 m m - 1 > 0\n  ( )\n \\Leftrightarrow m =3.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-53d9b5984cd800",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số f ( x ) = - x3 + 2 ( 2m - 1) x^2 - ( m 2 - 8 ) x + 2 . Tìm tất cả các giá trị của tham số m để hàm số đạt giá trị cực đại tại điểm x = -1 .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = 3 .",
        "content_en": "m = 3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = -9 .",
        "content_en": "m = -9 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 1 .",
        "content_en": "m = 1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = -2 .",
        "content_en": "m = -2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có f  ( x ) = -3x 2 + 4 ( 2m - 1) x - ( m 2 - 8 )\n m = 1\n Hàm số đạt giá trị cực đại tại điểm x = -1 \\Rightarrow f  ( -1) = 0 \\Rightarrow -m2 - 8m + 9 = 0 \\Leftrightarrow \n  m = -9\n Với m = 1 \\Rightarrow f ( x ) = - x^3 + 2 x^2 + 7 x + 2\n Có f  ( x ) = -3x 2 + 4 x + 7; f  ( x ) = -6 x + 4\n  f  ( -1) = 0\n Mà  \\Rightarrow Hàm số đạt cực tiểu tại x = -1 \\Rightarrow m = 1 không thoả mãn yêu cầu bài\n  f  ( -1) = 10 > 0\n ra.\n Với m = -9 \\Rightarrow f ( x ) = - x^3 - 38 x^2 - 73x + 2\n Ta có f  ( x ) = -3x 2 - 76 x - 73; f  ( x ) = -6 x - 76\n  f  ( -1) = 0\n Mà  \\Rightarrow Hàm số đạt cực đại tại x = -1 \\Rightarrow m = -9 thoả mãn yêu cầu bài ra.\n  f  ( -1) = -70 < 0\n Vậy m = -9 thỏa mãn đề bài.\n Khi hàm số y = - x3 - mx 2 + ( m2 - 2 ) x + 2021 đạt cực đại tại x = 1 thì giá trị của tham số m\n 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7961487c45afd9",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "3 thuộc khoảng nào sau đây?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "(1;4 ) .",
        "content_en": "(1;4 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -3;0 ) .",
        "content_en": "( -3;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 0;3) .",
        "content_en": "( 0;3) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( -2;0 ) .",
        "content_en": "( -2;0 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y = - x^2 - 2mx + m 2 - 2 và y = -2 x - 2m .\n Hàm số đạt cực đại tại x = 1 thì y (1) = 0\n  m=3\n \\Leftrightarrow -12 - 2m.1 + m 2 - 2 = 0 \\Leftrightarrow m 2 - 2m - 3 = 0 \\Leftrightarrow  .\n  m = -1\n Với m = 3 ta có y (1) = -2 1 - 2 3 = -8 < 0 nên x = 1 là điểm cực đại.\n Suy ra m = 3 thỏa mãn.\n Với m = -1 ta có y = - x^2 + 2 x - 1 = - ( x - 1) \\le 0 \\Rightarrow hàm số luôn nghịch biến, nên hàm số không\n 2\n có cực trị.\n Suy ra m = -1 không thỏa mãn.\n Vậy m = 3 thì hàm số y = - x3 - mx 2 + ( m2 - 2 ) x + 2021 đạt cực đại tại x = 1 .\n 1\n 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-57bac1a0faec2a",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm tất cả các giá trị của tham số m để hàm số y = x3 - ( 2m + 1) x^2 - ( 5m + 4 ) x + 10 đạt cực đại tại điểm x = -1 .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -1 .",
        "content_en": "m = -1 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 3 .",
        "content_en": "m = 3 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 1 .",
        "content_en": "m = 1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = -2 .",
        "content_en": "m = -2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y = 3x - 2 ( 2m + 1) x - ( 5m + 4 ) có y = 6 x - 2 ( 2m + 1)\n 2\n  y ( -1) = 0 -m + 1 = 0 m = 1\n Hàm số đạt cực đại tại điểm x = -1 khi  \\Leftrightarrow \\Leftrightarrow \\Rightarrow m =1.\n  y ( -1) < 0 -4m - 8 < 0 m > -2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-9c02bbddda9960",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x3 + ( m2 - m + 1) x^2 + ( 3m 2 - 4 ) x + m + 2 . Có bao nhiêu giá trị của m để hàm số đạt cực tiểu tại x = -1 ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: y = 3x 2 + 2 ( m2 - m + 1) x + 3m 2 - 4; y = 6 x + 2 ( m 2 - m + 1)\n Hàm số đạt cực tiểu tại x = -1 thì y ( -1) = 0 \\Leftrightarrow m 2 + 2m - 3 = 0 \\Leftrightarrow m = 1; m = -3\n Thử lại:\n Khi m = 1 , y ( -1) < 0 : Hàm số đạt cực đại tại x = -1 (Không thỏa yêu cầu bài toán)\n Khi m = -3 , y ( -1) > 0 : Hàm số đạt cực tiểu tại x = -1 (Thỏa yêu cầu bài toán)\n Vậy có 1 giá trị của m thỏa mãn.\n8 \n Tìm tất cả các giá trị của tham số m để hàm số y = x3 + mx 2 + ( m2 - 2m - 3) x + 4 đạt cực tiểu\n 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0d25ad703efe00",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Giá trị nguyên lớn nhất của tham số m để hàm số y = đạt cực tiểu tại x+m x = -1 thuộc khoảng nào sau đây? (",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0; 5 . )",
        "content_en": "0; 5 . )",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "( -2;0 ) .",
        "content_en": "( -2;0 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -1;2 ) .",
        "content_en": "( -1;2 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 5;5) .",
        "content_en": "( 5;5) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Điều kiện xác định x \\ne -m .\n m-3 -2 ( m - 3)\n Đạo hàm cấp một và cấp hai của hàm số lần lượt là: y ' = 1 + , y '' = .\n ( x + m) ( x + m)\n 2 3\n  m-3\n 1 + =0\n ( - + )\n 2\n  1 m\n  y ' ( -1) = 0\n   -2 ( m - 3) m = 2\n Để hàm số đạt cực tiểu tại x = -1 khi và chỉ khi:  y '' ( -1) > 0 \\Leftrightarrow  > 0 \\Leftrightarrow  m = -1\n  ( -1 + m )\n 3\n m \\ne 1 \n  m \\ne 1\n \n \n Nghiệm nguyên lớn nhất của m là m = 2 nên chọn khoảng 0; 5 . ( )",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -10",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7e3b9ae6199043",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho biết hàm số y = x^3 - 3x 2 + mx - 1 đạt cực trị tại x1 , x2 thỏa mãn x12 + x22 = 3. Khi đó",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m \\le -1.",
        "content_en": "m \\le -1.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m \\in ( 2;3) .",
        "content_en": "m \\in ( 2;3) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m \\in (1;2 ) .",
        "content_en": "m \\in (1;2 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m \\in ( 0;1) .",
        "content_en": "m \\in ( 0;1) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y = 3x - 6 x + m\n 2\n Hàm số y = x^3 - 3x 2 + mx - 1 đạt cực trị tại x1 , x2 khi  = ( -3) - 3m > 0 \\Leftrightarrow m < 3\n 2\n  x1 + x2 = 2\n \n Theo định lí Viet ta có  m\n  x1 x2 = 3\n 2 3\n Theo đề bài ta có x12 + x22 = 3 \\Leftrightarrow ( x1 + x2 ) - 2 x1 x2 = 3 \\Leftrightarrow 22 - m = 3 \\Leftrightarrow m =\n 2\n 3 2\n 3\n Vậy m = thỏa mãn đề bài.\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -12",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-473f3764e6e12a",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Biết m0 là giá trị của tham số m để hàm số y = x^3 - 3x 2 + mx - 1 có hai điểm cực trị x1 , x2 sao cho x1 + x2 - 3x1 x2 = 1 . Khẳng định nào sau đây đúng?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m0 \\in ( -4; -2 ) .",
        "content_en": "m0 \\in ( -4; -2 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m0 \\in ( 2;4 ) .",
        "content_en": "m0 \\in ( 2;4 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m0 \\in ( 0;2 ) .",
        "content_en": "m0 \\in ( 0;2 ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m0 \\in ( -2;0 ) .",
        "content_en": "m0 \\in ( -2;0 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y = 3x 2 - 6 x + m ; y = 0 \\Leftrightarrow 3x 2 - 6 x + m = 0 (*) .\n Hàm số có hai điểm cực trị x1 , x2 \\Leftrightarrow phương trình có hai nghiệm phân biệt \\Leftrightarrow  = 9 - 3m > 0\n \\Leftrightarrow m<3.\n  x1 + x2 = 2\n \n Theo định lý Vi-et ta có  m \\Rightarrow x1 + x2 - 3x1 x2 = 1 \\Leftrightarrow 2 - m = 1 \\Leftrightarrow m = 1\n  1 2 3\n x . x =\n Vậy m0 = 1 \\in ( 0;2 ) .\n10 \n  m -1 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -13",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-bcaf401c185fd5",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để đồ thị hàm số 1 y = x3 - ( m + 3) x^2 + (12 - m ) x + 2020 có hai điểm cực trị nằm về bên phải trục tung? 3",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "9 .",
        "content_en": "9 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "10 .",
        "content_en": "10 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "11 .",
        "content_en": "11 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "12 .",
        "content_en": "12 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y = x^2 - 2 ( m + 3) x + 12 - m .\n Để đồ thị hàm số có hai điểm cực trị nằm về bên phải trục tung \\Leftrightarrow Phương trình y = 0 có hai\n nghiệm dương phân biệt x1 , x2\n  -7 + 61\n  =  - ( m + 3)  2 - (12 - m ) > 0 m >\n     m 2\n + 7 m - 3 > 0\n     2\n \\Leftrightarrow  S = x1 + x2 = 2 ( m + 3) > 0 \\Leftrightarrow m + 3 > 0 \\Leftrightarrow  -7 - 61\n  P = x x = 12 - m > 0 12 - m > 0 m <\n  1 2   2\n -3 < m < 12\n -7 + 61\n \\Leftrightarrow < m < 12 . Do m \\in nên m \\in {1;2;...;11} .\n 2\n Vậy có tất cả 11 giá trị nguyên thỏa mãn.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -15",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-54604f768dab6f",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có tất cả bao nhiêu giá trị nguyên của tham số m để hàm số f ( x ) = x3 - mx 2 + ( m 2 + 5m + 4 ) x - 1 có hai điểm cực trị trái dấu? 1 3",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2.",
        "content_en": "2.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "4.",
        "content_en": "4.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1",
        "content_en": "1",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: f  ( x ) = x^2 - 2mx + m 2 + 5m + 4 .\n Để hàm số có hai điểm cực trị trái dấu thì f  ( x ) = 0 có hai nghiệm trái dấu.\n Suy ra ac < 0 \\Leftrightarrow m 2 + 5m + 4 < 0 \\Leftrightarrow -4 < m < -1 .\n Vì m \\in nên m \\in {-3; -2}\n Vậy có 2 giá trị m thoả yêu cầu bài toán.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -17",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2c43efde2eac82",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm giá trị của tham số m để điểm cực tiểu của đồ thị hàm số y = x^3 - 3 x^2 - 9 x + m thuộc đường thẳng d : y = x + 1.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -5 .",
        "content_en": "m = -5 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 31 .",
        "content_en": "m = 31 .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "m = 23 .",
        "content_en": "m = 23 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 5 .",
        "content_en": "m = 5 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Chọn B\n Ta có: y = 3x 2 - 6 x - 9 .\n  x = -1\n Cho y ' = 0 \\Leftrightarrow \n  x=3\n Vì a > 0 nên điểm cực tiểu có toạ độ I ( 3; m - 27 ) mà I \\in d \\Leftrightarrow 3 + 1 = -27 + m \\Leftrightarrow m = 31 .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -18",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4e0c56c0f6d8ef",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho đường cong ( Cm ) : y = x^3 - 3 ( m - 1) x^2 - 3 ( m + 1) x + 3 . Gọi S là tập các giá trị của tham số m để đồ thị hàm số có hai điểm cực trị A, B sao cho O, A, B thẳng hàng. Tổng các phần tử của S bằng",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y = 3x 2 - 6 ( m - 1) x - 3 ( m + 1) = 3  x^2 - 2 ( m - 1) x - ( m + 1)  .\n Đồ thị ( Cm ) có hai điểm cực trị \\Leftrightarrow y = 0 có hai nghiệm phân biệt\n \\Leftrightarrow x^2 - 2 ( m - 1) x - ( m + 1) = 0 (*) có hai nghiệm phân biệt\n \\Leftrightarrow  = ( m - 1) + m + 1 > 0 \\Leftrightarrow m 2 - m + 2 > 0 \\Leftrightarrow m \\in\n 2\n .\n12 \n 1 m - 1\n Ta có y = y.  x -  +  -2m2 + 2m - 4  x + 4 - m 2 .\n 3 3 \n Suy ra phương trình đường thẳng d đi qua hai điểm cực trị là\n y = ( -2m2 + 2m - 4 ) x + 4 - m 2 .\n Do O, A, B thẳng hàng nên 4 - m 2 = 0 \\Rightarrow\\Rightarrow m = \\pm2 .\n Suy ra S = {2; -2} .\n Vậy tổng các phần tử của S là 0 .\n x - mx 2 - 2 ( 3m2 - 1) x +\n 2 3 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -19",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a08ae68f34a678",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có tất cả bao nhiêu giá trị thực của tham số m để đồ thị hàm số y = 3 3 có hai điểm cực trị có hoành độ x1 , x2 sao cho x1 x2 + 2 ( x1 + x2 ) = 1 ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: y = 2 x^2 - 2mx - 2 ( 3m 2 - 1) = 2  x^2 - mx - ( 3m 2 - 1)  .\n Đồ thị hàm số đã cho có hai điểm cực trị \\Leftrightarrow x^2 - mx - ( 3m2 - 1) = 0 (*) có hai nghiệm phân biệt\n  2   2 \n \\Leftrightarrow  = m2 + 4 ( 3m2 - 1) > 0 \\Leftrightarrow 13m2 - 4 > 0 \\Leftrightarrow m2 >\n 4\n \\Leftrightarrow m \\in  -\\infty; -  \\cup ;+ \\infty  .\n 13  13   13 \n  x1 + x2 = m\n Theo Viét ta có  .\n  x1 x2 = - ( 3m - 1)\n 2\n  m = 0 ( ko tm )\n Theo bài x1 x2 + 2 ( x1 + x2 ) = 1 \\Leftrightarrow -3m + 1 + 2m = 1 \\Leftrightarrow 3m - 2m = 0 \\Leftrightarrow \n 2 2\n .\n  m = 2 (tm)\n  3\n Kết luận: Có 1 giá trị tham số m thỏa mãn yêu cầu bài toán.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -20",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-179b79b90861ab",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để hàm số y = x^3 + 4 ( m - 2 ) x^2 - 7 x + 1 có hai điểm cực trị x1 , x2 ( x1 < x2 ) thỏa mãn x1 - x2 = -4 ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: y = x^3 + 4 ( m - 2 ) x^2 - 7 x + 1 (1) \\Rightarrow y = 3x 2 + 8 ( m - 2 ) x - 7\n Xét phương trình 3x 2 + 8 ( m - 2 ) x - 7 = 0 ( 2 )\n Suy ra hàm số (1) luôn có hai điểm cực trị x1 , x2 với mọi m .\n Ta thấy ac = -21 < 0 nên phương trình ( 2 ) có hai nghiệm trái dấu\n Suy ra hàm số (1) luôn có hai điểm cực trị x1 , x2 với mọi m .\n \\Rightarrow x1 < 0; x2 > 0 \\Rightarrow x1 = - x1; x2 = x2 .\n 8( m - 2) 1\n Ta có: x1 - x2 = -4 \\Leftrightarrow - x1 - x2 = -4 \\Leftrightarrow - ( x1 + x2 ) = -4 \\Leftrightarrow = -4 \\Leftrightarrow m =\n 3 2\n Vậy không có giá trị nguyên nào của m thỏa bài toán.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -21",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-afa61541be3526",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để đồ thị hàm số y = x3 - 8 x^2 + ( m 2 + 11) x - 2m 2 + 2 có hai điểm cực trị nằm về hai phía của trục Ox ?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5 .",
        "content_en": "5 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "6 .",
        "content_en": "6 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "7 .",
        "content_en": "7 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Đồ thị hàm số y = x3 - 8 x^2 + ( m 2 + 11) x - 2m 2 + 2 có hai điểm cực trị nằm về hai phía của Ox\n14 \n ( )\n \\Leftrightarrow Đồ thị hàm số y = x3 - 8 x^2 + m 2 + 11 x - 2m 2 + 2 cắt Ox tại ba điểm phân biệt\n ( )\n \\Leftrightarrow Phương trình x3 - 8 x^2 + m 2 + 11 x - 2m 2 + 2 = 0 có ba nghiệm phân biệt.\n Mà x3 - 8 x^2 + ( m 2 + 11) x - 2m 2 + 2 = 0\n ( )\n \\Leftrightarrow x^3 - 2 x^2 - 6 x^2 + 12 x + m 2 x - 2m 2 - x + 2 = 0 \\Leftrightarrow ( x - 2 ) x^2 - 6 x + m 2 - 1 = 0 .\n Do đó phương trình trên luôn có một nghiệm x = 2 nên phương trình f ( x) = x^2 - 6 x + m 2 - 1 = 0\n   > 0 10 - m2 > 0 - 10 < m < 10\n phải có hai nghiệm phân biệt khác 2 \\Leftrightarrow  \\Leftrightarrow  \\Leftrightarrow  .\n  f ( 2 ) \\ne 0 -9 + m \\ne 0\n 2\n m \\ne \\pm3\n Với m \\in \\Rightarrow m \\in {-2; -1;0;1;2} .\n Vậy có 5 giá trị nguyên của tham số m .",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -24",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e83fa6ef07feee",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x3 - ( 2m +1) x^2 + ( m +1) x + m - 1 . Có bao nhiêu giá trị của số tự nhiên m < 20 để hàm số có hai giá trị cực trị trái dấu?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "19 .",
        "content_en": "19 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "20 .",
        "content_en": "20 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "21 .",
        "content_en": "21 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "22 .",
        "content_en": "22 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: y = x^3 - ( 2m +1) x^2 + ( m +1) x + m - 1 .\n Hàm số có hai giá trị cực trị trái dấu khi và chỉ khi đồ thị cắt trục hoành tại ba điểm phân biệt\n \\Leftrightarrow x3 - ( 2m +1) x^2 + ( m +1) x + m - 1= 0 có ba nghiệm phân biệt\n \\Leftrightarrow ( x -1) ( x^2 - 2mx +1- m ) = 0 có ba nghiệm phân biệt\n \\Leftrightarrow x^2 - 2mx +1- m = 0 có hai nghiệm phân biệt khác 1.\n  -1 - 5\n m <\n  2\n m 2 + m - 1> 0  \n \\Leftrightarrow \\Leftrightarrow   m > -1 + 5\n 2 - 3m \\ne 0  2\n  2\n m \\ne\n  3\n Kết hợp điều kiện m\\in , m < 20 ta được 1\\le m < 20 , m\\in . Vậy có 19 số tự nhiên thỏa mãn bài\n toán.\n 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -25",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1f641217190ff0",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x3 - ( m - 2 ) x^2 - 3( m -1) x +1, m là tham số. Số giá trị m > 0 để hàm số có giá 2 trị cực đại, giá trị cực tiểu lần lượt là yCÐ , yCT thỏa mãn 2 yCÐ + yCT = 4 là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "x = -1\n Ta có: y = 3x 2 - 3 ( m - 2 ) x - 3 ( m -1) ; y = 0 \\Leftrightarrow x^2 - ( m - 2 ) x - m +1= 0 \\Leftrightarrow  .\n  x = m -1\n Với m > 0 thì -1< m - 1 . Khi đó hàm số đạt cực đại tại x = - 1 và đạt cực tiểu tại x = m - 1 .\n 3m 1\n Do đó: yCÐ = y ( -1) = , yCT = y ( m -1) = - ( m + 2 )( m -1) +1.\n 2\n 2 2\n 3m 1\n Từ giả thiết: 2 yCÐ + yCT = 4 \\Leftrightarrow 2. - ( m + 2 )( m -1) +1= 4\n 2\n 2 2\n  m =1\n \\Leftrightarrow 6m - 6 - ( m + 2 )( m -1) = 0 \\Leftrightarrow ( m - 1) ( m + m - 8 ) = 0 \\Leftrightarrow \n 2 2\n .\n  m = -1\\pm 33\n  2\n  m =1\n Do m > 0 \\Rightarrow  .\n  m = -1+ 33\n  2\n Vậy có 2 giá trị m thỏa mãn bài toán.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -26",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4142c98446b78a",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Gọi S là tập hợp tất cả các giá trị thực của tham số m để đồ thị của hàm số y = x3 - mx 2 + ( m2 - 1) x có hai điểm cực trị A và B sao cho A, B nằm khác phía và cách đều 1 3 đường thẳng d : y = 5 x - 9 . Tính tổng tất cả các phần tử của S .",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6",
        "content_en": "6",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-6 .",
        "content_en": "-6 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y ' = x^2 - 2mx + ( m2 - 1)\n x = m -1  m3 - 3m + 2   m3 - 3m - 2 \n \\Rightarrow y' = 0 \\Leftrightarrow  \\Rightarrow A  m - 1;  và B  m + 1; \n x = m +1  3   3 \n16 \n 2 m ( m - 1)2\n Dễ thấy phương trình đường thẳng AB : y = - x + nên AB không thể song song\n 3 3\n hoặc trùng với d \\Rightarrow A, B cách đều đường thẳng d : y = 5 x - 9 nếu trung điểm I của AB nằm\n trên d\n m = 3\n  m3 - 3m  m3 - 3m\n I  m; \\ind \\Rightarrow = 5m - 9 \\Leftrightarrow m - 18m + 27 = 0 \\Leftrightarrow \n 3\n  3  3  m = -3 \\pm 3 5\n  2\n Với m = 3 \\Rightarrow A, B thỏa điều kiện nằm khác phía so với d .\n -3 \\pm 3 5\n Với m = \\Rightarrow A, B thỏa điều kiện nằm khác phía so với d .\n 2\n Tổng các phần tử của S bằng 0.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-1-tim tham so m de ham so co cuc tri hoac -28",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b4816d27ef0518",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x + 2 x^2 + mx + 1 , với m là tham số 3",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Hàm số có hai điểm cực trị khi và chỉ khi -2 < m < 2",
        "content_en": "Hàm số có hai điểm cực trị khi và chỉ khi -2 < m < 2",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Hàm số có đúng một điểm cực trị khi và chỉ khi m = 0 hoặc m = 2",
        "content_en": "Hàm số có đúng một điểm cực trị khi và chỉ khi m = 0 hoặc m = 2",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Hàm số không có cực trị khi và chỉ khi m \\le -2 hoặc m \\ge 2",
        "content_en": "Hàm số không có cực trị khi và chỉ khi m \\le -2 hoặc m \\ge 2",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Hàm số có hai điểm cực trị thoả mãn xCD < xCT và và chỉ khi 0 < m < 2",
        "content_en": "Hàm số có hai điểm cực trị thoả mãn xCD < xCT và và chỉ khi 0 < m < 2",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Ta có y = mx 2 + 4 x + m . Hàm số có hai điểm cực trị khi y = 0 có hai nghiệm phâ\n m \\ne 0 m \\ne 0\n \\Leftrightarrow \\Leftrightarrow\\Leftrightarrow  (1)\n 4 - m > 0 -2 < m < 2\n 2\n b) Sai: Hàm số có đúng một điểm cực trị khi hàm số này suy biến về hàm bậc hai nghĩa là\n m\n =0\\Leftrightarrow m=0.\n 3\n c) Đúng: Với m = 0 thì hàm số trở thành y = 2 x^2 + 1 . Hàm số này có một điểm cực tiểu. Điều\n này không thoả mãn yêu cầu bài toán\n m \\ne 0\n Với m \\ne 0 . Hàm số không có cực trị \\Leftrightarrow y = 0 vô nghiệm hoặc có nghiệm kép \\Leftrightarrow \n 4 - m \\le 0\n 2\n m \\ne 0\n \n \\Leftrightarrow   m \\le -2\n m \\ge 2\n \n d) Đúng: Dựa vào đạng dồ thị hàm số bậc ba, hàm số có hai điểm cực trị thoả mãn xCD < xCT\n khi m > 2 ( 2 )\n Từ (1) và ( 2 ) suy ra giá trị m cần tìm là 0 < m < 2 .",
    "solution_en": "",
    "correct_answer": "a:S, b:S, c:Đ, d:Đ",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-1-tim tham so m de ham so co cuc tri -1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-191f2d16cc07cb",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x3 - 3mx 2 + 3 ( m 2 - 1) x - m3 , với m là tham số",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Hàm số luôn có hai điểm cực trị với mọi m",
        "content_en": "Hàm số luôn có hai điểm cực trị với mọi m",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Hàm số đạt cực tiểu tại x = 3 khi m = 2",
        "content_en": "Hàm số đạt cực tiểu tại x = 3 khi m = 2",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Khi đồ thị hàm số có hai điểm cực trị thì khoảng cách giữa hai điểm cực trị bằng 2 5",
        "content_en": "Khi đồ thị hàm số có hai điểm cực trị thì khoảng cách giữa hai điểm cực trị bằng 2 5",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Diểm cực tiểu của đồ thị hàm số luôn thuọc đường thẳng cố định với hệ số góc k = -3",
        "content_en": "Diểm cực tiểu của đồ thị hàm số luôn thuọc đường thẳng cố định với hệ số góc k = -3",
        "is_correct": true
      }
    ],
    "solution_vi": "x = m -1\n a) Đúng: Ta có y = 3x 2 - 6mx + 3 ( m2 - 1) = 0 \\Leftrightarrow  1\n  x2 = m + 1\n Do x1 \\ne x2 với mọi m nên hàm số luôn có hai điểm cực trị.\n b) Đúng: Dễ thấy x = m + 1 là điểm cực tiểu suy ra hàm số đạt cực tiểu tại x = 3 khi m = 2\n c) Đúng: Với mọi m , toạ độ hai điểm cực trị là A ( m + 1; - 3m - 2 ) và B ( m - 1; - 3m + 2 )\n Khoảng cách giữa hai điểm cực trị là: AB = ( xN - xM ) + ( yN - yM ) = 2 5\n 2 2\n x = m -1\n d) Đúng: Ta có y = 3x 2 - 6mx + 3 ( m2 - 1) = 0 \\Leftrightarrow  1\n  x2 = m + 1\n Vì là hàm số bậc ba với hệ số a = 1 > 0 nên điểm cực tiểu của hàm số là A ( m + 1; - 3m - 2 )\n Lại có -3m - 2 = -3 ( m + 1) + 1 nên điểm cực tiểu của hàm số luôn thuộc đường thẳng\n d : y = -3 x + 1 và có hệ số góc k = -3 .\n x2 + 2 x + 3",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:Đ, d:Đ",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-1-tim tham so m de ham so co cuc tri -2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-09043f544086ec",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Biết đồ thị của hàm số y = x3 + ax 2 + bx + c ( a, b, c \\in ) có một điểm cực trị là A ( -1;29 ) và đi\n qua điểm B ( 2;2 ) . Tính a + b + c .",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có y = 3x 2 + 2ax + b .\n Biết đồ thị của hàm số y = x3 + ax 2 + bx + c ( a, b, c \\in ) có một điểm cực trị là A ( -1;29 ) và đi\n  y ( -1) = 29 ( -1)3 + a.( -1)2 + b. ( -1) + c = 29\n   a = -3\n   \n qua điểm B ( 2;2 ) nên ta có hệ:  y ( -1) = 0 \\Leftrightarrow 3. ( -1) + 2a. ( -1) + b = 0 \\Leftrightarrow b = -9 .\n 2\n   3 c = 24\n  y ( 2) = 2 2 + a.2 + b.2 + c = 2 \n 2\n Khi đó a + b + c = -3 - 9 + 24 = 12 .\n x - mx 2 - 2 ( 3m2 - 1) x + có 2 điểm cực trị x1 , x2 sao cho x1 x2 + 2 ( x1 + x2 ) = 1\n 2 3 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so co cuc tri -1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-40609662f6a51c",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Đồ thị hàm số y = x^3 - 2mx 2 + m 2 x + n có điểm cực tiểu là I (1;3) . Khi đó m + n bằng",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có y = x3 - 2mx 2 + m 2 x + n \\Rightarrow y = 3x 2 - 4mx + m 2 \\Rightarrow y = 6 x - 4m\n Do I (1;3) là điểm cực tiểu của đồ thị hàm số y = x^3 - 2mx 2 + m 2 x + n\n \n 1 - 2m + m 2 + n = 3\n  I (1;3) \\in y 1 - 2m + m 2 + n = 3 \n   2 m = 1 m = 1\n \\Rightarrow  y (1) = 0 \\Leftrightarrow m - 4m + 3 = 0 \\Leftrightarrow  \\Leftrightarrow\n   6 - 4 m > 0 m = 3 n = 3\n  y (1) > 0   3\n m <\n  2\n Vậy m + n = 4 .",
    "solution_en": "",
    "correct_answer": "4",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so co cuc tri -3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-86390114960871",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Để đồ thị hàm số y = x^4 - 2mx 2 + m - 1 có ba điểm cực trị tạo thành một tam giác có diện tích\n bằng 4 2 thì giá trị của tham số m bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Đạo hàm y ' = 4 x3 - 4mx = 4 x ( x^2 - m )\n x = 0\n Xét y ' = 0 \\Leftrightarrow \n  x = \\pm m ,(m > 0)\n ( ) ( m; -m + m - 1)\n Tọa độ ba điểm cực trị là: A(0; m - 1), B - m ; -m 2 + m - 1 , C 2\n  AH = m2\n Gọi H là trung điểm của cạnh BC thì ta có \n  BC = 2 m\n 1\n SABC = AH BC = m2 m = 4 2 \\Leftrightarrow m = 2\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so co cuc tri -4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d84dce821be5d5",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu số nguyên m để hàm số y = x3 - 6 x^2 + ( 3m + 6 ) x - m - 6 đạt cực đại cực tiểu đồng\n thời hai giá trị cực trị cùng dấu",
    "question_en": "",
    "options": [],
    "solution_vi": "Tập xác định: D = và có đạo hàm y = 3x 2 - 12 x + 3 ( m + 2 ) .\n Giải phương trình y = 0 \\Leftrightarrow 3x 2 - 12 x + 3 ( m + 2 ) = 0 \\Leftrightarrow x^2 - 4 x + m + 2 = 0\n Hàm số có hai cực trị \\Leftrightarrow có hai nghiệm phân biệt x1 , x2\n \\Leftrightarrow  > 0 \\Leftrightarrow ( -2 ) - ( m + 2 ) > 0 \\Leftrightarrow m < 2\n 2\n 1\n y= ( x - 2 ) y + 2 ( m - 2 ) x + m - 2\n 3\n Gọi A ( x1; y1 ) , B ( x2 ; y2 ) là hai điểm cực trị của đồ thị. Khi đó: y ( x1 ) = 0, y ( x2 ) = 0\n \\Rightarrow Phương trình đường thẳng đi qua 2 điểm cực trị của đồ thị: y = 2 ( m - 2 ) x + m - 2\n y1 = 2 ( m - 2 ) x1 + m - 2 , y2 = 2 ( m - 2 ) x2 + m - 2\n x + x = 4\n Áp dụng định lí Vi - ét cho phương trình:  1 2\n  x1.x2 = m + 2\n Hai giá trị cực trị cùng dấu \\Leftrightarrow y1. y2 > 0 \\Leftrightarrow  2 ( m - 2 ) x1 + m - 2  .  2 ( m - 2 ) x2 + m - 2  > 0\n \\Leftrightarrow ( m - 2 )  4 x1 x2 + 2 ( x1 + x2 ) + 1 > 0 \\Leftrightarrow ( m - 2 )  4.4 + 2 ( m + 2 ) + 1 > 0\n 2 2\n m \\ne 2\n  -21\n \\Leftrightarrow ( m - 2 ) ( 2m + 21) > 0 \\Leftrightarrow  <m<2\n 2\n -21 . Kết hợp điều kiện ta có:\n m > 2 2\n Vì m \\in nên m \\in {-10; -9;,..; -4; - 3; - 3; - 2; - 1;0;1} . Vậy có 12 số nguyên.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so co cuc tri -5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-8905f3d8846de6",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x^3 + 3mx 2 + 4m 2 - 2 có đồ thị ( C ) và điểm C ( 2;4 ) . Tính tổng bình phương các\n giá trị của m để ( C ) có hai điểm cực trị A, B sao cho tam giác ABC có diện tích bằng 6 .",
    "question_en": "",
    "options": [],
    "solution_vi": "x = 0\n Ta có y ' = 3x 2 + 6mx = 0 \\Leftrightarrow  .\n  x = -2m\n Đồ thị ( C ) có hai điểm cực trị \\Leftrightarrow -2m \\ne 0 \\Leftrightarrow m \\ne 0 .\n Khi đó A ( 0;4m 2 - 2 ) , B ( -2m;4m3 + 4m 2 - 2 ) \\Rightarrow AB = 4m2 + 16m6 = 2 m 4m 4 + 1 .\n x-0 y - ( 4m - 2 ) 2\n Phương trình đường thẳng AB là: = \\Leftrightarrow 2m 2 x + y - 4m 2 + 2 = 0 .\n -2m - 0 4m 3\n 4m 2 + 4 - 4 m 2 + 2 6\n d ( C , AB ) = = .\n 4m + 1\n 4\n 4m 4 + 1\n22 \n Diện tích tam giác ABC là\n 1 1 6 m = 1\n S = . AB.d ( C , AB ) = 6 \\Leftrightarrow .2 m . 4m4 + 1. = 6 \\Leftrightarrow m =1\\Leftrightarrow  .\n 2 2 4m 4 + 1  m = -1\n Vậy tổng bình phương các giá trị của m là 2.",
    "solution_en": "",
    "correct_answer": "2",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so co cuc tri -6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b996cdb7d3c971",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tồn tại bao nhiêu số dương m để đường thẳng đi qua 2 điểm cực trị của đồ thị hàm số\n y = ( m + 1) x^3 - ( m + 2 ) x^2 + 3m - 2 cắt và tạo với hai tia Ox, Oy một tam giác có diện tích bằng\n 9\n ?\n 4",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có: y ' = 3 ( m + 1) x^2 - 2 ( m + 2 ) x\n  m + 1 \\ne 0  m \\ne -1\n Hàm số có 2 cực trị \\Leftrightarrow  \\Leftrightarrow\n ( m + 2 ) > 0  m \\ne -2\n 2\n 1 m + 2  2 ( m + 2)\n 2\n Lấy y chia y ' ta được: y = 3 ( m + 1) x^2 - 2 ( m + 2 ) x   x - - x + 3m - 2\n 3 9 ( m + 1)  9 ( m + 1)\n Do đó đường thẳng qua 2 điểm cực trị của đồ thị hàm số có phương trình\n 2 ( m + 2)\n 2\n d: y=- x + 3m - 2\n 9 ( m + 1)\n  9 ( 3m - 2 )( m + 1)   2\n d \\cap Ox = A  ;0  , d \\cap Oy = B ( 0;3m - 2 )  m >  .\n  2 ( m + 2)\n 2\n   3\n  \n 9 1 9 ( 3m - 2 )( m + 1) 9\n S OAB = \\Rightarrow . 3m - 2 =\n 2 ( m + 2)\n 2\n 4 2 4\n ( 3m - 2 ) ( m + 1) = 1 \\Leftrightarrow 9m3 - 4m2 - 12m = 0\n 2\n 2 4 7\n \\Leftrightarrow \\Leftrightarrowm= + .\n ( m + 2)\n 2\n 9 9\n Vậy tồn tại 1 số dương m thỏa bài toán.\n a a",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so co cuc tri -7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-786a5862fec3e8",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Biết (trong đó là phân số tối giản và b \\in * ) là giá trị của tham số m để hàm số\n b b\n y = x3 - mx 2 - 2 ( 3m2 - 1) x + có 2 điểm cực trị x1 , x2 sao cho x1 x2 + 2 ( x1 + x2 ) = 1 . Giá trị\n 2 2\n 3 3\n biểu thức T = a + 2b là",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có: y = 2 x^2 - 2mx - 2 ( 3m 2 - 1) .\n Hàm số có hai điểm cực trị \\Leftrightarrow y = 0 có hai nghiệm phân biệt\n 2\n \\Leftrightarrow m2 + 12m2 - 4 > 0 \\Leftrightarrow m > .\n 13\n Khi đó, ta có x1 + x2 = m , x1 x2 = 1 - 3m 2 .\n m = 0 ( l )\n x1 x2 + 2 ( x1 + x2 ) = 1 \\Rightarrow 1 - 3m + 2m = 1 \\Leftrightarrow \n 2\n \\Rightarrow a + 2b = 8 .\n m = 2 (t / m )\n  3\n -----------------HẾT-----------------\n24",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Tính đơn điệu và cực trị của hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-1-tim tham so m de ham so co cuc tri -8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-83df911eaabe9d",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Đường tiệm cận đứng của đồ thị hàm số y = là: x-2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x = 2 .",
        "content_en": "x = 2 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "x = -2 .",
        "content_en": "x = -2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "y = -2 .",
        "content_en": "y = -2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "y = 2 .",
        "content_en": "y = 2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "x + x-2 2\n Tập xác định: D = \\ {2} và lim+ = +\\infty \\Rightarrow TCĐ: x = 2 .\n x→2 x-2\n 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c57572ca8883a0",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Phương trình đường tiệm cận đứng của đồ thị hàm số y = là x+2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x = -2 .",
        "content_en": "x = -2 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "x = 0 .",
        "content_en": "x = 0 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = 3 .",
        "content_en": "x = 3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "y = 0 .",
        "content_en": "y = 0 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác đinh D = \\ {-2} .\n 3 3\n lim+ y = lim+ = +\\infty ; lim- y = lim- = -\\infty suy ra x = -2 là tiệm cận đứng của đồ\n x →-2 x →-2 x + 2 x →-2 x →-2 x + 2\n thị hàm số.\n 3x + 6",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0d4532353e71ed",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tiệm cận đứng của đồ thị hàm số y = là đường thẳng x-2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x = 3 .",
        "content_en": "x = 3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "x = -2 .",
        "content_en": "x = -2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = -3 .",
        "content_en": "x = -3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "x = 2 .",
        "content_en": "x = 2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "3x + 6 3x + 6\n Ta có lim+ = +\\infty , lim- = -\\infty nên đường thẳng x = 2 là tiệm cận đứng.\n x→2 x - 2 x→2 x - 2\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-620d69fa24c3f9",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tiệm cận ngang của đồ thị hàm số y = là đường thẳng : x -1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x = 1",
        "content_en": "x = 1",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "y = 2",
        "content_en": "y = 2",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = 0",
        "content_en": "x = 0",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "y = 0",
        "content_en": "y = 0",
        "is_correct": false
      }
    ],
    "solution_vi": "2 2\n Ta có: lim = 0; lim = 0 . Vậy đường thẳng y = 0 là tiệm cận ngang của đồ thị hàm\n x →+\\infty x - 1 x →-\\infty x - 1\n số.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-429409284bad5f",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tổng số tiệm cận đứng và tiệm cận ngang của đồ thị hàm số y = là x2 - 1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: \\ { \\pm1 } .\n  3 1 \n  2 x - 3x + 1 \n 2\n  2 - + 2\n Ta có lim y = lim  x x = 2 \\Rightarrow đồ thị hàm số có một đường tiệm\n  = xlim  \n  x -1 \n 2\n  1 - 12 \n x →\\pm\\infty x →\\pm\\infty →\\pm\\infty\n  x \n cận ngang là y = 2 .\n  2 x^2 - 3x + 1 \n lim - y = lim -   = +\\infty suy ra đồ thị có đường tiệm cận đứng là x = -1 .\n x → ( -1) x →( -1)\n  x^2\n - 1 \n  2 x^2 - 3x + 1  1  2 x^2 - 3x + 1  1\n lim+ y = lim+   = ; lim- y = xlim - =\n  x - 1  2 x →(1)  x -1  2\n 2 2\n x → (1) x → (1) → (1)\n Suy ra x = 1 không phải là đường tiệm cận đứng của đồ thị.\n Vậy đồ thị hàm số đã cho có 2 đường tiệm cận.\n x^2 - 3x + 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -14",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3f13555cbc06d0",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số y = là x2 - 1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2 . 8",
        "content_en": "2 . 8",
        "is_correct": false
      }
    ],
    "solution_vi": "3 2\n 1- + 2\n x^2 - 3x + 2 x x = 1 nên đồ thị hàm số có tiệm cận ngang y = 1\n Ta có: lim y = lim = lim\n x →\\pm\\infty x →\\pm\\infty x2 - 1 x →\\pm\\infty 1\n 1- 2\n x\n x^2 - 3x + 2 x-2 1\n lim+ y = lim+ = lim+ =-\n x →1 x →1 x -1\n 2\n x →1 x +1 2\n x^2 - 3x + 2 x-2 1\n lim- y = lim- = lim+ =-\n x →1 x →1 x -1\n 2\n x →1 x + 1 2\n x^2 - 3x + 2 x-2\n lim+ y = lim+ = lim+ = -\\infty\n x →-1 x →-1 x -1\n 2\n x →-1 x + 1\n x^2 - 3x + 2 x-2\n lim- y = lim- = lim- = +\\infty\n x →-1 x →-1 x -1\n 2\n x →-1 x + 1\n Suy ra đồ thị hàm số có tiệm cận tiệm cận đứng x = -1 nên đồ thị hàm số có 2 tiệm cận\n 2x2 + x - 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -15",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e259c49f11c8f7",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số y = ( x - 2 ) x - 1 bằng x2 - 1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D = (1; + \\infty ) .\n Ta có: lim y = lim+\n ( x - 2 ) x - 1 = lim ( x - 2 ) = -\\infty .\n x -1 x →1 ( x + 1) x - 1\n 2 +\n x →1+ x →1\n lim y = lim\n ( x - 2) x - 1 = 0\n x →+\\infty x →+\\infty x2 - 1\n Vậy đồ thị hàm số y =\n ( x - 2 ) x - 1 có một tiệm cận đứng là đường thẳng x = 1 và một tiệm\n x2 - 1\n cận ngang là đường thẳng y = 0 .\n x^2 - 3x + 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -17",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-fb189ef04d85c4",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Số đường tiệm cận đứng của đồ thị hàm số y = là x2 - 2x - 8",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      }
    ],
    "solution_vi": " x2 - x - 2  ( x - 2 )( x + 1)\n khi x \\ge 0  khi x \\ge 0\n x2 - x - 2  2\n x - 2x - 8  ( x + 2 )( x - 4 )\n Ta có: y = 2 \\Leftrightarrow y= 2 \\Leftrightarrow y=\n x - 2x - 8  x + x - 2\n khi x < 0  ( x + 2 )( x - 1) khi x < 0\n  x - 2 x - 8\n 2  ( x + 2 )( x - 4 )\n \n Tập xác định: D = \\ {-2;4} .\n lim+ y = lim+\n x2 - x - 2\n = lim+\n ( x - 2 )( x + 1) = +\\infty\n x - 2x - 8 x → 4 ( x + 2 )( x - 4 )\n 2\n x →4 x →4\n10 \n lim- y = lim-\n x2 - x - 2\n = lim-\n ( x - 2 )( x + 1) = -\\infty \\Rightarrow x = 4 là tiệm cận đứng của đồ thị hàm số.\n x - 2x - 8 x → 4 ( x + 2 )( x - 4 )\n 2\n x →4 x →4\n lim y = lim\n x2 - x - 2\n = lim\n ( x + 2 )( x - 1) = 1 \\Rightarrow x = -2 không là tiệm cận đứng của đồ thị\n x →-2 x →-2 x - 2x - 8\n 2 x →-2 ( x + 2 )( x - 4 ) 2\n hàm số.\n Vậy đồ thị hàm số có 1 tiệm cận đứng.\n x-2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -20",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3614a206b60b63",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Số tiệm cận đứng của đồ thị hàm số y = là x2 + x",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D =  -9; + \\infty ) \\ {0; - 1}\n x 1 1\n lim y = lim = lim = \\Rightarrow x = 0 không là tiệm cận đứng\n x →0 x →0\n x ( x + 1) ( x + 9 + 3) x →0\n ( x + 1) ( x + 9 + 3) 6\n của đồ thị hàm số.\n  x+9 -3\n  lim + = +\\infty\n  x →( -1) x2 + x\n  \\Rightarrow x = -1 là tiệm cận đứng của đồ thị hàm số.\n  lim x+9 -3\n  x →( -1)- = -\\infty\n x2 + x\n x^2 - 3x + 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -24",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-43c51b9faa2d6e",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số y = 4 - x2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2.",
        "content_en": "2.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1.",
        "content_en": "1.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D = \\ {\\pm2}\n x^2 - 3x + 2 ( x - 2 )( x - 1) - ( x - 1) 1 - x\n Ta có = = =\n 4 - x2 ( 2 - x )( 2 + x ) 2 + x x + 2\n lim +\n x^2 - 3x + 2\n = lim +\n ( x - 2 )( x - 1) = lim 1 - x = +\\infty suy ra đường thẳng x = -2 là\n 4- x x → ( -2 ) ( 2 - x )( 2 + x ) x → ( -2 ) 2 + x^2 +\n x → ( -2 )\n tiệm cận đứng.\n12 \n x^2 - 3x + 2 - ( x - 1)\n lim = lim = -1 suy ra đường thẳng y = -1 là tiệm cận ngang.\n x →\\pm\\infty 4- x^2 x →-2 2 + x\n Vậy tổng số tiệm cận đứng và tiệm cận ngang là 2 .\n 2x - 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -25",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3a91b9d9c3527f",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tổng số đường tiện cận đứng và tiệm cận ngang của đồ thị hàm số y = là x2 - x",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D = \\ {0;1} .\n Ta có lim y = 0 nên y = 0 là tiệm cận ngang\n x →\\pm\\infty\n lim y = \\infty nên x = 1 là tiệm cận đứng.\n x →1\n lim y = \\infty nên x = 0 là tiệm cận đứng.\n x →0\n Vậy có ba đường tiệm cận của đồ thị hàm số đã cho.\n x +1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -26",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d004acdbfcb387",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm số đường tiệm cận đứng của đồ thị hàm số y = x^2 - 16",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 .",
        "content_en": "0 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1 .",
        "content_en": "1 .",
        "is_correct": false
      }
    ],
    "solution_vi": "lim + y = lim +\n x - 3x - 4\n 2\n = lim +\n ( x - 4 )( x + 1) = lim x + 1 = -\\infty\n x - 16 x → ( -4 ) ( x - 4 )( x + 4 ) x → ( -4 ) x + 4\n 2 +\n x → ( -4 ) x → ( -4 )\n (vì lim + ( x + 1) = -3 và lim + ( x + 4 ) = 0 )\n x → ( -4 ) x → ( -4 )\n lim - y = lim -\n x^2 - 3x - 4\n = lim -\n ( x - 4 )( x + 1) = lim x + 1 = +\\infty\n x - 16 x → ( -4 ) ( x - 4 )( x + 4 ) x → ( -4 ) x + 4\n 2 -\n x → ( -4 ) x → ( -4 )\n (vì lim - ( x + 1) = -3 và lim - ( x + 4 ) = 0 )\n x → ( -4 ) x → ( -4 )\n Đồ thị hàm số có tiệm cận đứng x = -4\n lim+ y = lim+\n x^2 - 3x - 4\n = lim+\n ( x - 4 )( x + 1) = lim x + 1 = 5\n x - 16 x → 4 ( x - 4 )( x + 4 ) x → 4+ x + 4\n 2\n x →4 x →4 8\n lim- y = lim-\n x^2 - 3x - 4\n = lim-\n ( x - 4 )( x + 1) = lim x + 1 = 5\n x - 16 x → 4 ( x - 4 )( x + 4 ) x → 4- x + 4\n 2\n x →4 x →4 8\n Vậy đồ thị hàm số đã cho có 1 tiệm cận đứng x = -4 .\n 4 x^2 - 1 + 3x 2 + 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-ly thuyet va bai toan tim tiem can dung -29",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-66c3867c396dc1",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = 3 có đồ thị là ( C ) . Tổng số đường tiệm cận đứng và tiệm cận\n x - x2 - 5x - 3\n ngang của đồ thị ( C ) là bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Tập xác định: D = \\ {-1;3} và có lim y = 1 nên đường thẳng y = 1 là tiệm cận ngang\n x →\\pm\\infty\n x ( x - 3)( x + 3)\n lim y = lim = -\\infty nên đường thẳng x = -1 là tiệm cận đứng\n ( x - 3)( x + 1)\n x →-1 x →-1 2\n x ( x - 3)( x + 3) x ( x + 3) 18 9\n lim y = lim = lim = = nên đường thẳng x = 3 không là tiệm cận\n ( x - 3)( x + 1) ( x + 1)\n x →3 x →3 2 x →3 2\n 16 8\n đứng.\n Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị ( C ) là 2 .\n 2x + 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-3-ly thuyet va bai toan tim tiem can -3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b0a9480bd0edcb",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Diện tích hình chữ nhật tạo bởi hai đường tiệm cận của đồ thị hàm số y = và các trục tọa\n x+3\n độ bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Đường tiệm cận đứng của đồ thị hàm số x = -3 ;\n Đường tiệm cận ngang của đồ thị hàm số y = 2 .\n Hai đường tiệm cận tạo với các trục tọa độ một hình chữ nhât có chiều dài bằng 3 , chiều rộng\n bằng 2 .\n Diện tích hình chữ nhật: S = 2.3 = 6 .\n ax - 5",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-3-ly thuyet va bai toan tim tiem can -4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-8a20b12e4f1df4",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Biết tiện cận xiên của đồ thị hàm số y = cắt trục tọa độ tại hai điểm A và B . Khi đó x2 - 2 x diện tích tam giác OAB là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2 .",
        "content_en": "2 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "4 .",
        "content_en": "4 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8 .",
        "content_en": "8 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "3 .",
        "is_correct": false
      }
    ],
    "solution_vi": " 4x + 2\n  y = x + 2 + x^2 - 2 x\n Chia tử thức cho mẫu thức ta được  \\Rightarrow TCX d : y = x - 2.\n  lim 4 x + 2 = 0\n  x →\\pm\\infty x^2 - 2 x\n Ta có d \\cap Ox tại điểm ( 0; -2 ) và d \\cap Oy tại điểm ( 2;0 )\n 1 1\n Suy ra SOAB = OA OB = 2 2 = 2(dvdt ) .\n 2 2\n x3 + x + 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-bai toan tim tiem can dung va tiem xien -3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-471c440bb5f5e6",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Đường tiệm cận xiên của đồ thị hàm số f ( x ) = 2 x - 1 - có phương trình là x +1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "y = x + 1 .",
        "content_en": "y = x + 1 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "y = 2 x - 1 .",
        "content_en": "y = 2 x - 1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "y = x - 1 .",
        "content_en": "y = x - 1 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "y = 2 x + 1 .",
        "content_en": "y = 2 x + 1 .",
        "is_correct": false
      }
    ],
    "solution_vi": "-1\n Do lim  f ( x ) - ( 2 x - 1)  = lim = 0 nên đường thẳng y = 2 x - 1 là đường tiệm cận xiên\n x →+\\infty x →\\pm\\infty x + 1\n của đồ thị hàm số đã cho.\n 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-bai toan tim tiem can dung va tiem xien -6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1e614ae438f2fa",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm đường tiệm cận xiên của đồ thị hàm số f ( x ) = x-2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "y = 2 x - 5 .",
        "content_en": "y = 2 x - 5 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "y = x - 2 .",
        "content_en": "y = x - 2 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "y = x + 5 .",
        "content_en": "y = x + 5 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "y = x - 5 .",
        "content_en": "y = x - 5 .",
        "is_correct": false
      }
    ],
    "solution_vi": "f ( x) x^2 + 3x 5x\n Ta có: a = lim = lim = 1 ; b = lim  f ( x ) - x  = lim =5\n x →+\\infty x x →+\\infty x ( x - 2 ) x →+\\infty x →+\\infty x - 2\n Vậy đường thẳng y = x + 5 là đường tiệm cận xiên của đồ thị hàm số đã cho khi x → +\\infty\n f ( x)\n Tương tự do a = lim = 1 và lim  f ( x ) - x  = 5 nên đường thẳng y = x + 5 là đường\n x →-\\infty\n x x →-\\infty\n tiệm cận xiên của đồ thị hàm số đã cho khi x → -\\infty .\n4 \n x^2 - 3x + 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-bai toan tim tiem can dung va tiem xien -8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2ef8a9e5339143",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Đường tiệm cận xiên của đồ thị hàm số f ( x ) = đi qua điểm nào sau đây? x+5",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 5;3) .",
        "content_en": "( 5;3) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -4; - 5 ) .",
        "content_en": "( -4; - 5 ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 6; - 1) .",
        "content_en": "( 6; - 1) .",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( 2; - 10 ) .",
        "content_en": "( 2; - 10 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D = \\ {-5}\n f ( x) 2 x^2 - 3x\n a = lim = lim =2\n x →+\\infty x x →+\\infty x^2 + 5 x\n  2 x^2 - 3x  -13x\n b = lim  - 2 x  = lim = -13\n x →+\\infty\n  x+5  x →+\\infty x+5\n f ( x)\n Tương tự do a = lim = 2 và lim  f ( x ) - 2 x  = -13\n x →-\\infty x x →-\\infty\n Vậy đường thẳng y = 2 x - 13 là đường tiệm cận xiên của đồ thị hàm số đã cho và đường thẳng\n này đi qua điểm ( 6; - 1) .",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-bai toan tim tiem can dung va tiem xien -10",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3ebba3cf864fc6",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xác định toạ độ giao điểm của đường tiệm cận đứng và đường tiệm cận xiên của đồ thị hàm số 2 x^2 - 3x + 2 y= x -1",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "(1;2 ) .",
        "content_en": "(1;2 ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "(1;1) .",
        "content_en": "(1;1) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1; - 1) .",
        "content_en": "(1; - 1) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1;0 ) .",
        "content_en": "(1;0 ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "2 x^2 - 3x + 2 1\n Ta viết lại y = = 2x - 1 + nên đồ thị hàm số có tiệm cận đứng là đường thẳng\n x -1 x -1\n x = 1 và đường tiệm cận xiên là đường thẳng 2 x - 1\n x = 1 x = 1\n Xét hệ phương trình  \\Leftrightarrow nên giao điểm của hai đường tiệm cận là I (1;1) .\n  y = 2 x - 1  y = 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-bai toan tim tiem can dung va tiem xien -11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1811cc572da3a2",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tính tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số y =\n x2 - 4",
    "question_en": "",
    "options": [],
    "solution_vi": "Tập xác định: D = \\ {-2;2} .\n Ta có: lim + f ( x) = +\\infty; lim - f ( x) = -\\infty \\Rightarrow x = -2 là tiệm cận đứng của đồ thị hàm số.\n x → ( -2 ) x → ( -2 )\n Tương tự hàm số có thêm một tiệm cận đứng khác là x = 2\n lim f ( x ) = 1; lim f ( x ) = 1 \\Rightarrow y = 1 là tiệm cận ngang của đồ thị hàm số.\n x →-\\infty x →+\\infty\n Vậy tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số là 3\n 2 x3 + 5 x^2 - 1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-3-bai toan tim tiem can dung va tiem -1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-6111adca8a089b",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm hệ số góc k của đường tiệm cận xiên của đồ thị hàm số y =\n x2 - x + 1",
    "question_en": "",
    "options": [],
    "solution_vi": "Tập xác định: D = . nên hàm không có tiệm cận đứng\n 5 1\n 2+ - 3\n f ( x) 2x + 5x - 1\n 3 2\n x x = 2.\n Ta có: a = lim = lim = lim\n x →\\pm\\infty x x →\\pm\\infty x ( x - x + 1)\n 2 x →\\pm\\infty 1 1\n 1- + 2\n x x\n  2 x3 + 5 x^2 - 1  7 x2 - 2x - 1\n b = lim ( y - 2 x ) = lim  2 - 2 x  = lim 2 = 7.\n x →\\pm\\infty x →\\pm\\infty\n  x - x +1  x →\\pm\\infty x - x + 1\n \\Rightarrow y = 2 x + 7 là tiệm cận xiên của đồ thị hàm số và có hệ số góc k = 2 .\n 2 x^2 + 3mx - m + 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-3-bai toan tim tiem can dung va tiem -2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f1506bd432a4e3",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Gọi ( Cm ) là đồ thị của hàm số y = mx + (*) , m là tham số. Tìm m để hàm số (*) có cực trị\n x\n 1\n và khoảng cách từ điểm cực tiểu của ( Cm ) đến đường tiệm cận xiên bằng .\n 2",
    "question_en": "",
    "options": [],
    "solution_vi": "1 mx 2 - 1\n Tập xác định: D = . Ta có y = m - = .\n x2 x2\n 1\n Hàm số (*) có cực trị khi y = 0 có hai nghiệm phân biệt khác 0 \\Leftrightarrow > 0 \\Leftrightarrow m > 0.\n m\n 1 1\n Lúc đó y = 0 \\Leftrightarrow x1 = - , x2 = . Lập bảng biến thiên để suy ra:\n m m\n  1 \n Điểm cực tiểu của ( Cm ) là M  ;2 m  .\n  m \n Tiệm cận xiên  : y = mx \\Leftrightarrow mx - y = 0 .\n 1 m -2 m 1 m 1\n Theo đề d ( M ,  ) = \\Leftrightarrow = \\Leftrightarrow = \\Leftrightarrow 2m = m 2 + 1 \\Leftrightarrow m = 1 .\n 2 m2 + 1 2 m2 + 1 2\n Vậy giá trị m cần tìm là m = 1 .\n mx 2 + ( 3m2 - 2 ) x - 2",
    "solution_en": "",
    "correct_answer": "1",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-3-bai toan tim tiem can dung va tiem -4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4dde1a30ea5af3",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = (1) với m là tham số thực. Tìm tất cả các giá trị của m\n x + 3m\n để góc giữa hai đường tiệm cận của đồ thị hàm số (1) bằng 450 .",
    "question_en": "",
    "options": [],
    "solution_vi": "mx + ( 3m - 2 ) x - 2\n 2 2\n 6m - 2\n Ta có y = = mx - 2 + .\n x + 3m x + 3m\n 1\n Khi m = đồ thị hàm số không tồn tại hai tiệm cận.\n 3\n 1\n Khi m \\ne đồ thị hàm số có tiệm cận xiên là 1 : y = mx - 2 \\Leftrightarrow mx - y - 2 = 0\n 3\n Tiệm cận đứng là  2 : x = -3m \\Leftrightarrow x + 3m = 0 .\n Góc giữa hai đường tiệm cận của đồ thị hàm số (1) bằng 450 nên\n n1.n2 m 2\n cos 450 = = = \\Leftrightarrow m = \\pm1 .\n n1.n2 m +12 2\n Vậy giá trị m cần tìm là m = \\pm1 .\n -----------------HẾT-----------------\n10",
    "solution_en": "",
    "correct_answer": "1",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-3-bai toan tim tiem can dung va tiem -5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-19a6a3abb593c8",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Giá trị m để tiệm cận đứng của đồ thị hàm số y = đi qua điểm M ( 3;1) là x+m",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -3 .",
        "content_en": "m = -3 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = -1 .",
        "content_en": "m = -1 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 2 .",
        "content_en": "m = 2 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 3 .",
        "content_en": "m = 3 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Tiệm cận đứng của đồ thị hàm số đi qua điểm M ( 3;1) nên đồ thị hàm có tiệm cận đứng là x = 3\n Suy ra x + m = 0 có nghiệm là 3 do vậy 3 + m = 0 \\Leftrightarrow m = -3 .\n 2x - 7 2x - 7 2x - 7\n Thử lại, với m = -3 \\Rightarrow y = có lim+ y = lim+ = -\\infty và lim- y = lim- = +\\infty .\n x-3 x →3 x →3 x - 3 x →3 x →3 x - 3\n Vậy m = -3 .\n 2x + 4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-bai toan ve duong tiem can cua dths co c-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-316f8ee68a1683",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho đồ thị hàm số y = ( 2m - n ) x^2 + mx + 1 nhận trục hoành và trục tung làm hai tiệm cận. Giá x^2 + mx + n - 6 trị m + n là",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8 .",
        "content_en": "8 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "9 .",
        "content_en": "9 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "6 .",
        "content_en": "6 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-6 .",
        "content_en": "-6 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Điều kiện: x^2 + mx + n - 6 \\ne 0 .\n Phương trình đường tiệm cận ngang của đồ thị hàm số là y = 2m - n .\n Vì đồ thị hàm số nhận trục hoành làm tiệm cận ngang nên 2m - n = 0 .\n Đặt f ( x ) = ( 2m - n ) x^2 + mx + 1 và g ( x ) = x^2 + mx + n - 6 .\n Vì f ( 0 ) \\ne 0 với mọi m , n nên đồ thị nhận trục tung x = 0 là tiệm cận đứng khi g ( 0 ) = 0\n n\n \\Leftrightarrow n = 6 . Suy ra m = = 3 . Vậy m + n = 9 .\n 2\n x +1",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-bai toan ve duong tiem can cua dths co c-5",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-de2008aae95477",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = (1), m là tham số thực. Tìm giá trị của m để đường 1- x 1 tiệm cận xiên của đồ thị hàm số (1) tạo với hai trục tọa độ một tam giác có diện tích bằng . 2",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = \\pm2 .",
        "content_en": "m = \\pm2 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = \\pm3 .",
        "content_en": "m = \\pm3 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = \\pm4 .",
        "content_en": "m = \\pm4 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = \\pm1 .",
        "content_en": "m = \\pm1 .",
        "is_correct": true
      }
    ],
    "solution_vi": "x^2 + ( m - 1) x + m2 - 2m + 1 m2 - m + 1\n Tập xác định: D = \\ {1}. Ta có y = = -x - m +\n 1- x 1- x\n Đồ thị hàm số có tiệm cận xiên là  : y = - x - m .\n Tiệm cận xiên cắt hai trục tọa độ tại hai điểm A ( 0; -m ) và B ( -m;0 ) .\n 1 1 1\n Diện tích tam giác OAB là S = OA.OB = y A . yB = m 2 .\n 2 2 2\n 1\n Theo giả thiết S = \\Leftrightarrow m2 = 1 \\Leftrightarrow m = \\pm1 .\n 2\n Vậy giá trị m cần tìm là m = \\pm1 .\n x -1",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-3-bai toan ve duong tiem can cua dths co c-12",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-efef6c9ccae7cd",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Gọi ( C ) là đồ thị của hàm số y = ( m + 1) x^2 + ( 2m + 1) x + m + 2 . x +1",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tiệm cận đứng của đồ thị hàm số là x = 1 1",
        "content_en": "Tiệm cận đứng của đồ thị hàm số là x = 1 1",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Tiệm cận xiên của đồ thị hàm số đi qua điểm M (1;2 ) khi m = 2",
        "content_en": "Tiệm cận xiên của đồ thị hàm số đi qua điểm M (1;2 ) khi m = 2",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Tiệm cận xiên của đồ thị hàm số vuông góc với đường thẳng d : 3 x + 4 y - 5 = 0 khi m = 1",
        "content_en": "Tiệm cận xiên của đồ thị hàm số vuông góc với đường thẳng d : 3 x + 4 y - 5 = 0 khi m = 1",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Giao điểm của hai đường tiệm cận của ( C ) luôn thuộc Parabol ( P ) : y = - x^2",
        "content_en": "Giao điểm của hai đường tiệm cận của ( C ) luôn thuộc Parabol ( P ) : y = - x^2",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Tiệm cận đứng của đồ thị hàm số là x = -1\n ( m + 1) x^2 + ( 2m + 1) x + m + 2 = m + 1 x + m + 2\n b) Đúng: y = ( )\n x +1 x +1\n Đồ thị hàm số có tiệm cận xiên là  : y = ( m + 1) x + m\n 1\n Vì tiệm cận xiên đi qua điểm M (1;2 ) nên 2 = ( m + 1) .1 + m \\Leftrightarrow 2m = 1 \\Leftrightarrow m = .\n 2\n c) Sai: Ta có  : y = ( m + 1) x + m \\Leftrightarrow ( m + 1) x - y + m = 0 .\n Tiệm cận xiên vuông góc với đường thẳng d : 3 x + 4 y - 5 = 0\n 4 1\n nên ( m + 1) .3 + 4.( -1) = 0 \\Leftrightarrow m + 1 = \\Leftrightarrowm= .\n 3 3\n d) Đúng: Giao điểm của hai đường tiệm cận là I ( -1; -1) \\in ( P ) .\n mx 2 + 6 x - 2",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:S, d:Đ",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-3-bai toan ve duong tiem can cua dths-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-54f04bbd25084b",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y =\n ( 2m + 1) x^2 + 3 , m là tham số. Tìm giá trị của m để đường tiệm cận ngang của\n x4 + 1\n đồ thị hàm số đi qua điểm A (1; -3) .",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có: lim y = lim y = 2m + 1 \\Rightarrow d : y = 2m + 1 là tiệm cận ngang của đồ thị hàm số đã cho.\n x →+\\infty x →-\\infty\n Do A (1; -3) \\in d \\Leftrightarrow 2m + 1 = -3 \\Leftrightarrow m = -2.\n 2mx + m",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-3-bai toan ve duong tiem can cua dths-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2b0e163acec1c3",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Biết đồ thị hàm số y =\n ( 2m - n ) x^2 + mx + 1\n ( m, n là tham số) nhận trục hoành và trục trung\n x^2 + mx + n - 6\n làm hai đường tiệm cận. Tính m + n .",
    "question_en": "",
    "options": [],
    "solution_vi": " 2m - n = 0 m = 3\n Theo giả thiết ta có  \\Leftrightarrow . Vậy m + n = 9 .\n  n - 6 = 0  n = 6\n x +1",
    "solution_en": "",
    "correct_answer": "9",
    "math_skill": "Đường tiệm cận của đồ thị hàm số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-3-bai toan ve duong tiem can cua dths-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2b1c00af771965",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một chất điểm chuyển động theo quy luật s ( t ) = t 2 - t 3 ( m ) . Tìm thời điểm t (giây) mà tạo đó 6 vận tốc v ( m / s ) của chuyển động đạt giá trị lớn nhất.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "t = 2 .",
        "content_en": "t = 2 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "t = 0,5 .",
        "content_en": "t = 0,5 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "t = 2,5 .",
        "content_en": "t = 2,5 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "t = 1 .",
        "content_en": "t = 1 .",
        "is_correct": false
      }
    ],
    "solution_vi": "1\n Ta có v ( t ) = s ' ( t ) = 2t - t 2 . Suy ra v ' ( t ) = 2 - t và v ' ( t ) = 0 \\Leftrightarrow t = 2.\n 2\n Bảng biến thiên\n Vậy chất điểm đạt vận tốc lớn nhất tại thời điểm t = 2 (giây).",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-a34adc00452117",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một vật chuyển động theo quy luật s = -2t 3 + 24t 2 + 9t - 3 với t là khoảng thời gian tính từ lúc bắt đầu chuyển động và s là quãng đường vật đi được trong khoảng thời gian đó. Hỏi trong khoảng thời gian 10 giây, kể từ lúc bắt đầu chuyển động, vận tốc lớn nhất của vật đạt được bằng bao nhiêu?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "289 ( m / s ) .",
        "content_en": "289 ( m / s ) .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "105 ( m / s ) .",
        "content_en": "105 ( m / s ) .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "111 ( m / s ) .",
        "content_en": "111 ( m / s ) .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "487 ( m / s ) .",
        "content_en": "487 ( m / s ) .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có v ( t ) = s = -6t 2 + 48t + 9 . Xét hàm số v ( t ) = -6t 2 + 48t + 9 , t \\in  0;10 .\n  v ( 0) = 9\n \n Ta có v ( t ) = -12t + 48 = 0 \\Leftrightarrow t = 4 (Nhận). Ta có  v ( 4 ) = 105 \\Rightarrow max v ( t ) = v ( 4 ) = 105 .\n t \\in0;10\n v (10 ) = -111\n ",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3ae97e6fe11aa2",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Độ giảm huyết áp của một bệnh nhân được đo bởi công thức G ( x ) = 0, 25 x^2 ( 30 - x ) trong đó x ( mg ) và x > 0 là lượng thuốc cần tiêm cho bệnh nhân. Để huyết áp giảm nhiều nhất thì cần tiêm cho bệnh nhân một liều lượng bằng bao nhiêu:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "15mg",
        "content_en": "15mg",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "30mg",
        "content_en": "30mg",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "40mg",
        "content_en": "40mg",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "20mg",
        "content_en": "20mg",
        "is_correct": true
      }
    ],
    "solution_vi": "3 1\n Ta có: G ( x ) = 0,25 x^2 ( 30 - x ) = x^2 - x3\n 4 40\n 3 3 3 3 2  x = 0 ( loai )\n G ( x ) = x - x^2 ; G ( x ) = 0 \\Leftrightarrow x - x \\Leftrightarrow\n 2 40 2 40  x = 20 ( thoa man )\n Bảng biến thiên:\n Dựa vào bảng biến thiên thì bênh nhân cần tiêm một lượng thuốc 20mg",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-4",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-ea02d3b3705df8",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Sau khi phát hiện một bệnh dịch, các chuyên gia y tế ước tính số người nhiễm bệnh kể từ ngày xuất hiện bệnh nhân đầu tiên đến ngày thứ t là G ( t ) = 45t 2 - t 3 , (kết quả khảo sát được trong 10 6 ( t ) là tốc độ truyền bệnh (người / ngày) tại thời điểm t thì tốc độ truyền bệnh lớn nhất sẽ vào ngày thứ:",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "25",
        "content_en": "25",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "30",
        "content_en": "30",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "20",
        "content_en": "20",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "15",
        "content_en": "15",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có: G ( t ) = 90t - 3t ; G ( t ) = 90 - 6t = 0 \\Leftrightarrow 90 - 6t = 0 \\Leftrightarrow t = 15\n 2\n Bảng biến thiên:\n Vậy tốc độ truyền bệnh lớn nhất sẽ vào ngày thứ 15.",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-175d73927b5ce8",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Khi nuối cá thí nghiệm trong hồ, một nhà khoa học đã nhận thấy rằng: nếu trên mỗi đơn vị diện tích của mặt hồ có n con cá thì trung bình mỗi con cá sau một vụ cân nặng là P ( n ) = 480 - 20n ( g ) . Hỏi phải thả bao nhiêu con cá trên một đơn vị diện tích của mặt hồ để sau một vụ thu hoạch được nhiều cá nhất?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "14",
        "content_en": "14",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "13",
        "content_en": "13",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "12",
        "content_en": "12",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "11",
        "content_en": "11",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi F ( n ) là hàm cân nặng của n con cá sau vụ thu hoạch trên một đơn vị diện tích\n Ta có: F ( n ) = ( 480 - 20n ) .n = 480n - 20n 2\n Để sau một vụ thu hoạch được nhiều cá nhất thì cân nặng của n con cá trên một đơn vị diện tích\n của mặt hồ là lớn nhất.\n Bài toán trở thành tìm n \\in * sao cho F ( x ) đạt giá trị lớn nhất.\n F  ( n ) = 480 - 40n; F  ( n ) = 0 \\Leftrightarrow 480 - 40n = 0 \\Leftrightarrow n = 12\n Học sinh tự lập bảng biến thiên.\n Vậy phải thả 12 con cá trên một đơn vị diện tích của mặt hồ để sau một vụ thu hoạch được nhiều\n cá nhất.",
    "solution_en": "",
    "correct_answer": "C",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-8",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-47740b15d933b6",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Để giảm nhiệt độ trong phòng từ 280 C , một hệ thống làm mát được phép hoạt động trong 10 phút. Gọi T (đơn vị 0 C ) là nhiệt độ phòng ở phút thứ t được cho bởi công thức T = -0,008t - 0,16t + 28 với t \\in [1;10] . Tìm nhiệt độ thấp nhất trong phòng đạt được trong thời 3 gian 10 phút kể từ khi hệ thống làm mát bắt đầu hoạt động.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "27,8320 C .",
        "content_en": "27,8320 C .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "18, 40 C .",
        "content_en": "18, 40 C .",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "26, 20 C .",
        "content_en": "26, 20 C .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "25,3120 C .",
        "content_en": "25,3120 C .",
        "is_correct": false
      }
    ],
    "solution_vi": "Xét hàm số T = -0,008t 3 - 0,16t + 28 với t \\in [1;10] .\n T ' = -0,024t 2 - 0,16 < 0, t \\in [1;10] suy ra hàm số T nghịch biến trên đoạn [1;10] .\n Nhiệt độ thấp nhất trong phong đạt được là Tmin = T (10 ) = 18, 40 C .",
    "solution_en": "",
    "correct_answer": "B",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-9",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5cd509513b6f8b",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một công ty bất động sản có 50 căn hộ cho thuê. Biết rằng nếu cho thuê mỗi căn hộ với giá 2.000.000 đồng mỗi tháng thì mọi căn hộ đều có người thuê và cứ mỗi lần tăng giá cho thuê mỗi căn hộ 100.000 đồng mỗi tháng thì có thêm 2 căn hộ bị bỏ trống. Muốn có thu nhập cao nhất, công ty đó phải cho thuê với giá mỗi căn hộ là bao nhiêu?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2.250.000",
        "content_en": "2.250.000",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "2.350.000",
        "content_en": "2.350.000",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2.450.000",
        "content_en": "2.450.000",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2.550.000",
        "content_en": "2.550.000",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x là giá thuê thực tế của mỗi căn hộ, ( x : đồng; x \\ge 2000.000 đồng)\n Ta có thể lập luận như sau:\n Tăng giá 100.000 đồng thì có 2 căn hộ bị bỏ trống.\n Tăng giá x - 2.000.000 đồng thì có bao nhiêu căn hộ bị bỏ trống.\n8 \n 2 ( x - 2.000.000 ) x - 2.000.000\n Theo quy tắc tam xuất ta có số căn hộ bị bỏ trống là: =\n 100.000 50.000\n Do đó khi cho thuê với giá x đồng thì số căn hộ cho thuê là:\n x - 2.000.000 x\n 50 - =- + 90\n 50.000 50.000\n Gọi F ( x ) là hàm lợi nhuận thu được khi cho thuê các căn hộ, ( F ( x ) : đồng).\n  x  1\n Ta có: F ( x ) =  - + 90  x = - x^2 + 90 x ( bằng số căn hộ cho thuê nhân với giá cho\n  50.000  50.000\n thuê mỗi căn hộ).\n 1\n Câu toán trở thành tìm giá trị lớn nhất của F ( x ) = - x^2 + 90 x , x \\ge 2.000.000\n 50.000\n 1 1\n F( x) = - x + 90 ; F  ( x ) = 0 \\Leftrightarrow - x + 90 = 0 \\Leftrightarrow x = 2.250.000\n 25.000 25.000\n Bảng biến thiên:\n Suy ra F ( x ) đạt giá trị lớn nhất khi x = 2.250.000\n Vậy công ty phải cho thuê với giá 2.250.000 đồng mỗi căn hộ thì được lãi lớn nhất.\n Nhận xét:\n 1\n Sau khi tìm được hàm F ( x ) = - x^2 + 90 x . Ta không cần phải đi khảo sát và vẽ bảng biến\n 50.000\n thiên như trên. Đề đã cho bốn đáp án x, ta dùng phím CALC của MTCT để thay lần lượt các giá\n trị vào, cái nào làm cho F ( x ) lớn nhất chính là giá trị cần tìm.",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-10",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e45ec89295fc69",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một cửa hàng bán bưởi Đoan Hùng của Phú Thọ với giá bán mỗi quả là 50.000 đồng. Với giá bán này thì cửa hàng chỉ bán được khoảng 40 quả bưởi. Cửa hàng này dự định giảm giá bán, ước tính nếu cửa hàng cứ giảm mỗi quả 5000 đồng thì số bưởi bán được tăng thêm là 50 quả. Xác định giá bán để cửa hàng đó thu được lợi nhuận lớn nhất, biết rằng giá nhập về ban đầu mỗi quả là 30.000 đồng.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "44.000đ",
        "content_en": "44.000đ",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "43.000đ",
        "content_en": "43.000đ",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "42.000đ",
        "content_en": "42.000đ",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "41.000đ",
        "content_en": "41.000đ",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x là giá bán thực tế của mỗi quả bưởi Đoan Hùng, (x: đồng; 30.000 \\le x \\le 50.000 đồng).\n Ta có thể lập luận như sau:\n Giá 50.000 đồng thì bán được 40 quả bưởi\n Giảm giá 5.000 đồng thì bán được thêm 50 quả.\n Giảm giá 50.000 - x thì bán được thêm bao nhiêu quả?\n 50 1\n Theo quy tắc tam xuất số quả bán thêm được là: ( 50000 - x ) . = ( 50000 - x ) .\n 5000 100\n 1 1\n Do đó Số quả bưởi bán được tương ứng với giá bán x : 40 + ( 50000 - x ) = - x + 540\n 100 100\n Gọi F ( x ) là hàm lợi nhuận thu được ( F ( x) : đồng).\n  1  1 2\n Ta có: F ( x ) =  - x + 540  .( x - 30.000 ) = - x + 840 x - 16.200.000\n  100  100\n Bài toán trở thành tìm giá trị lớn nhất của hàm số:\n 1 2\n F ( x) = - x + 840 x - 16.200.000 , điều kiện: 30.000 \\le x \\le 50.000 .\n 100\n 1 1\n F  ( x ) = - x + 840; F  ( x ) = 0 \\Leftrightarrow - x + 840 = 0 \\Leftrightarrow x = 42.000\n 50 50\n Vì hàm F ( x ) liên tục trên 30.000 \\le x \\le 50.000 nên ta có:\n F ( 30.000 ) = 0; F ( 42.000 ) = 1.440.000; F ( 50.000 ) = 800.000\n Vậy với x = 42.000 thì F ( x ) đạt giá trị lớn nhất.\n Vậy để cửa hàng đó thu được lợi nhuận lớn nhất thì giá bán thực tế của mỗi quả bưởi Đoan Hùng\n là 42.000 đồng.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-279324ab622423",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một khách sạn có 50 phòng. Hiện tại mỗi phòng cho thuê với giá 400 ngàn đồng một ngày thì toàn bộ phòng được thuê hết. Biết rằng cứ mỗi lần tăng giá thêm 20 ngàn đồng thì có thêm 2 phòng trống. Giám đốc phải chọn giá phòng mới là bao nhiêu để thu nhập của khách sạn trong ngày là lớn nhất.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "480 ngàn.",
        "content_en": "480 ngàn.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "50 ngàn.",
        "content_en": "50 ngàn.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "450 ngàn.",
        "content_en": "450 ngàn.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "80 ngàn.",
        "content_en": "80 ngàn.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x (ngàn đồng) là giá phòng khách sạn cần đặt ra, x > 400 (đơn vị: ngàn đồng).\n Giá chênh lệch sau khi tăng x - 400 .\n Số phòng cho thuê giảm nếu giá là x :\n ( x - 400 ) + 2 = x - 400 .\n 20 10\n x - 400 x\n Số phòng cho thuê với giá x là 50 - = 90 - .\n 10 10\n  x x2\n Tổng doanh thu trong ngày là: f ( x ) = x  90 -  = - + 90 x .\n  10  10\n x\n f  ( x ) = - + 90 = 0 \\Leftrightarrow x = 450 .\n 5\n Bảng biến thiên:\n Dựa vào bảng biến thiên ta thấy f ( x ) đạt giá trị lớn nhất khi x = 450 .\n Vậy nếu cho thuê với giá 450 ngàn đồng thì sẽ có doanh thu cao nhất trong ngày là 2.025.000\n đồng.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-13",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5d34b746424842",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một doanh nghiệp bán xe gắn máy trong đó có loại xe A bán ế nhất với giá mua vào mỗi chiếc xe là 26 triệu VNĐ và bán ra 30 triệu VNĐ, với giá bán này thì số lượng bán một năm là 600 chiếc. Cửa hàng cần đẩy mạnh việc bán được loại xe này nên đã đưa ra chiến lược kinh doanh giảm giá bán và theo tính toán của CEO nếu giảm 1 triệu VNĐ mỗi chiếc thì số lượng xe bán ra trong một năm sẽ tăng thêm 200 chiếc. Hỏi cửa hàng định giá bán loại xe đó bao nhiêu thì doanh thu loại xe đó của cửa hàng đạt lớn nhất.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "29 triệu VNĐ",
        "content_en": "29 triệu VNĐ",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "27, 5 triệu VNĐ",
        "content_en": "27, 5 triệu VNĐ",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "29, 5 triệu VNĐ",
        "content_en": "29, 5 triệu VNĐ",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "27 triệu VNĐ",
        "content_en": "27 triệu VNĐ",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x (triệu VNĐ) là số tiền cần giảm cho mỗi chiếc xe ( 0 \\le x \\le 4 ) .\n Số lượng xe bán ra được trong một năm sau khi giảm giá là: x.200 + 600 (chiếc)\n Số lợi nhuận thu được từ việc bán xe trong một năm sau khi giảm giá là: ( x.200 + 600 )( 4 - x )\n Xét hàm số f ( x ) = ( x.200 + 600 )( 4 - x ) = 200 ( - x^2 + x + 12 ) ( 0 \\le x \\le 4 ) đạt giá trị lớn nhất là\n 1\n 2450 khi x = .\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-14",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-300ebba745530c",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Công ty dụ lịch Ban Mê dự định tổ chức một tua xuyên Việt. Công ty dự định nếu giá tua là 2 triệu đồng thì sẽ có khoảng 150 người tham gia. Để kích thích mọi người tham gia, công ty quyết định giảm giá và cứ mỗi lần giảm giá tua 100 ngàn đồng thì sẽ có thêm 20 người tham gia. Hỏi công ty phải bán giá tua là bao nhiêu để doanh thu từ tua xuyên Việt là lớn nhất.",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1375000.",
        "content_en": "1375000.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "3781250.",
        "content_en": "3781250.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2500000.",
        "content_en": "2500000.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3000000.",
        "content_en": "3000000.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x (triệu đồng) là giá tua.\n Giá đã giảm so với ban đầu là 2 - x .\n Số người tham gia tăng thêm nếu giá bán x là:\n ( 2 - x ) 20 = 400 - 200 x .\n 0,1\n Số người sẽ tham gia nếu bán giá x là: 150 + ( 400 - 200 x ) = 550 - 220 x .\n Tổng doanh thu là: f ( x ) = x ( 550 - 200 x ) = -200 x^2 + 550 x ;\n 11\n f  ( x ) = -400 x + 550 = 0 \\Leftrightarrow x =\n 8\n Bảng biến thiên\n 11\n Dựa vào bảng biến thiên ta thấy f ( x ) đạt giá trị lớn nhất khi x = = 1,375 .\n 8\n Vậy công ty cần đặt giá tua 1375000 đồng thì tổng doanh thu sẽ cao nhất là 378125000 đồng.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-15",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-572413eed114c2",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Bác Tôm có một cái ao có diện tích 50m 2 để nuôi cá. Vụ vừa qua bác nuôi với mật độ 20con/m 2 và thu được tất cả 1,5 tấn cá thành phẩm. Theo kinh nghiệm nuôi cá thu được bác ấy cứ giảm đi 8 con/m2 thì tương ứng sẽ có mỗi con cá thành phẩm thu được tăng thêm 0,5kg. Hỏi vụ tới bác phải mua bao nhiêu con cá giống để đạt được tổng khối lượng cá thành phẩm cao nhất? (Giả sử không có hao hụt trong quá trình nuôi).",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1100 con.",
        "content_en": "1100 con.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1000 con.",
        "content_en": "1000 con.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "500 con.",
        "content_en": "500 con.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "502 con.",
        "content_en": "502 con.",
        "is_correct": false
      }
    ],
    "solution_vi": "Số cá vụ vừa rồi Bác Tôm nuôi là 20.50 = 1000 con.\n12 \n Vậy trọng lượng mỗi con là 1,5 kg.\n Gọi số cá giảm là 8x con.\n Trọng lượng thu được của vụ tới là: (1000 - 400 x )(1,5 + 0,5 x ) = -200 x^2 - 100 x + 1500 .\n 1\n Hàm số đạt cực đại tại x = - . Vậy số cá giống ban đầu là 1100 con.\n 4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-ly thuyet va ung dung dao ham de giai ba-16",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-883f3e2a2f016e",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Số dân của một thị trấn sau t năm kề từ năm 1970 được ước tính bởi công thức f ( t ) = t +5 ( f ( t ) được tính bằng nghìn người).",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số dân của thị trấn vào đầu năm 1980 là 18 nghìn người.",
        "content_en": "Số dân của thị trấn vào đầu năm 1980 là 18 nghìn người.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số dân của thị trấn vào đầu năm 1995 là 23 nghìn người.",
        "content_en": "Số dân của thị trấn vào đầu năm 1995 là 23 nghìn người.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Xem f là một hàm số xác định trên nửa khoảng [0; +\\infty ) vậy hàm số đồng biến trên [0; +\\infty )",
        "content_en": "Xem f là một hàm số xác định trên nửa khoảng [0; +\\infty ) vậy hàm số đồng biến trên [0; +\\infty )",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Đạo hàm của hàm số f biểu thị tốc độ tăng dân số của thị trấn (tính bằng nghìn nguời/năm). Vào năm 1998 thì tốc độ tăng dân số là 0,125 nghìn người/năm.",
        "content_en": "Đạo hàm của hàm số f biểu thị tốc độ tăng dân số của thị trấn (tính bằng nghìn nguời/năm). Vào năm 1998 thì tốc độ tăng dân số là 0,125 nghìn người/năm.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Vào đầu năm 1980, ta có t = 10; f (10 ) = 18 . Vậy số dân của thị trấn vào đầu năm 1980\n là 18 nghìn người.\n Vào đầu năm 1995 ta có t = 25; f ( 25 ) = 22 .\n Số dân của thị trấn vào đầu năm 1995 là 22 nghìn người.\n 120\n b) Sai: f  ( t ) = với mọi t > 0; f ( t ) liên tục trên [0; +\\infty ) vì liên tục trên khoảng ( -5; +\\infty )\n ( t + 5)\n 2\n Vậy hàm số đồng biến trên [0; +\\infty ) .\n c) Đúng: Tốc độ tăng dân số vào đầu năm 1990 là:\n 120\n f  ( 20 ) = = 0,192 do t = 1990 - 1970 = 20\n 252\n Tốc độ tăng dân số được dự kiến vào năm 2008 của thị trấn là:\n 120\n f  ( 38) =  0,065 do t = 2008 - 1970 = 38\n 432\n 120 120\n Ta có: f  ( t ) = 0,125 \\Leftrightarrow = 0,125 \\Leftrightarrow t + 5 =  31 \\Rightarrow t  26.\n ( t + 5)\n 2\n 0,125\n d) Sai: Vậy vào năm 1996, tốc độ tăng dân số của thị trấn là 0,125.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:S",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-5-ly thuyet va ung dung dao ham de gi-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-f54fc8268d517d",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Dân số của một quốc gia sau t (năm) kể từ năm 2023 được ước tính bởi công thức: N ( t ) = 100e0,012t , N ( t ) được tính bằng triệu người và 0 \\le t \\le 50",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Dân số của quốc gia vào năm 2030 là: 108, 763 (triệu người)",
        "content_en": "Dân số của quốc gia vào năm 2030 là: 108, 763 (triệu người)",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Dân số của quốc gia vào năm 2035 là: 125, 488 (triệu người)",
        "content_en": "Dân số của quốc gia vào năm 2035 là: 125, 488 (triệu người)",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Xem N ( t ) là hàm số của biến số t xác định trên đoạn [0;50] . Khi đó hàm số N ( t ) đồng biến trên đoạn [0; 50].",
        "content_en": "Xem N ( t ) là hàm số của biến số t xác định trên đoạn [0;50] . Khi đó hàm số N ( t ) đồng biến trên đoạn [0; 50].",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Đạo hàm của hàm số N ( t ) biểu thị tốc độ tăng dân số của quốc gia đó (tính bằng triệu người/năm). Vậy vào năm 2040 thì tốc độ tăng dân số của quốc gia đó là 1,6 triệu người/ năm.",
        "content_en": "Đạo hàm của hàm số N ( t ) biểu thị tốc độ tăng dân số của quốc gia đó (tính bằng triệu người/năm). Vậy vào năm 2040 thì tốc độ tăng dân số của quốc gia đó là 1,6 triệu người/ năm.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Dân số của quốc gia vào năm 2030 là: N ( 7 ) = 100e0,012.7 = 100e0,084 = 108,763 (triệu\n người)\n b) Sai: Dân số của quốc gia vào năm 2035 là: N (12 ) = 100e0,012.12 = 100e0,144 = 115, 488 (triệu\n người)\n c) Đúng: Trên đoạn [0; 50] ta có: N  ( t ) = 0,012.100e0,012t = 1, 2e0,012t > 0, t \\in [0;50]\n Do đó hàm số N ( t ) đồng biến trên đoạn [0; 50].\n d) Ta có: N  ( t ) = 1, 2e0,012t\n Với tốc độ tăng dân số của quốc gia đó là 1,6 triệu người/ năm ta có:\n 4\n 250 ln\n 4 3  23,97\n 1, 6 = 1, 2e0,012t \\Leftrightarrow e0,012t = \\Leftrightarrow t =\n 3 3\n Vậy vào năm 2046 thì tốc độ tăng dân số của quốc gia đó là 1,6 triệu người/ năm.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-5-ly thuyet va ung dung dao ham de gi-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4023e842839afd",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Giả sử một hạt chuyển động trên một trục thẳng đứng chiều dương hướng lên trên sao cho toạ độ của hạt (đơn vị: mét) tại thời điểm t (giây) là y = t 3 - 12t + 3, t \\ge 0 .",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Hàm vận tốc là: v ( t ) = 3t 2 - 12, t \\ge 0",
        "content_en": "Hàm vận tốc là: v ( t ) = 3t 2 - 12, t \\ge 0",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Hạt chuyển động xuống dưới khi t > 2",
        "content_en": "Hạt chuyển động xuống dưới khi t > 2",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Quãng đường hạt đi được trong khoảng thời gian 0 \\le t \\le 3 là 9 m",
        "content_en": "Quãng đường hạt đi được trong khoảng thời gian 0 \\le t \\le 3 là 9 m",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Khi t > 0 thì hạt tăng tốc",
        "content_en": "Khi t > 0 thì hạt tăng tốc",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Hàm vận tốc là: v ( t ) = y = 3t 2 - 12, t \\ge 0\n Hàm gia tốc là: a ( t ) = v ( t ) = y = 6t , t \\ge 0\n b) Sai: Hạt chuyển động lên trên khi v ( t ) > 0 \\Leftrightarrow 3t 2 - 12 > 0 \\Leftrightarrow t > 2 (do t \\ge 0 )\n Hạt chuyển động xuống dưới khi v ( t ) < 0 \\Leftrightarrow 3t 2 - 12 < 0 \\Leftrightarrow 0 \\le t < 2 (do t \\ge 0 )\n c) Đúng: Ta có: y ( 3) - y ( 0 ) = 33 - 12.3 + 3 - 3 = -9\n Vậy quãng đường vật đi được trong thời gian 0 \\le t \\le 3 là 9 m .\n d) Đúng: Hạt tăng tốc khi v ( t ) tăng hay v ( t ) > 0 . Do đó, 6t > 0 \\Leftrightarrow t > 0\n Hạt giảm tốc khi v ( t ) giảm hay v ( t ) < 0 \\Leftrightarrow 6t < 0 \\Leftrightarrow t < 0 (không thỏa mãn do t \\ge 0 )",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:Đ",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-5-ly thuyet va ung dung dao ham de gi-5",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-4902947ac2c603",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một nhà sản xuất trung bình bán được 1000 ti vi màn hình phẳng mỗi tuần với giá 14 triệu đồng một chiếc. Một cuộc khảo sát thị trường chỉ ra rằng nếu cứ giảm giá bán 500 nghìn đồng, số lượng ti vi bán ra sẽ tăng thêm khoảng 100 ti vi mỗi tuần. 16",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Gọi p (triệu đồng) là giá của mỗi ti vi, x là số ti vi. Vậy hàm cầu là: p ( x ) = - x + 19 200",
        "content_en": "Gọi p (triệu đồng) là giá của mỗi ti vi, x là số ti vi. Vậy hàm cầu là: p ( x ) = - x + 19 200",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Công ty giảm giá 4,5 (triệu đồng)/1 tivi cho người mua thì doanh thu của công ty là lớn nhất",
        "content_en": "Công ty giảm giá 4,5 (triệu đồng)/1 tivi cho người mua thì doanh thu của công ty là lớn nhất",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Nếu hàm chi phí hằng tuần là C ( x ) = 12000 - 3 x (triệu đồng), trong đó x là số ti vi bán ra trong tuần, vậy có 2300 ti vi được bán ra thì lợi nhuận là cao nhất.",
        "content_en": "Nếu hàm chi phí hằng tuần là C ( x ) = 12000 - 3 x (triệu đồng), trong đó x là số ti vi bán ra trong tuần, vậy có 2300 ti vi được bán ra thì lợi nhuận là cao nhất.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Nếu hàm chi phí hằng tuần là C ( x ) = 12000 - 3 x (triệu đồng), trong đó x là số ti vi bán ra trong tuần, nhà sản xuất nên đặt giá bán 8,5 triệu đồng/1 ti vi để lợi nhuận là lớn nhất",
        "content_en": "Nếu hàm chi phí hằng tuần là C ( x ) = 12000 - 3 x (triệu đồng), trong đó x là số ti vi bán ra trong tuần, nhà sản xuất nên đặt giá bán 8,5 triệu đồng/1 ti vi để lợi nhuận là lớn nhất",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Gọi p (triệu đồng) là giá của mỗi ti vi, x là số ti vi. Khi đó hàm cầu là p = p ( x ) .\n Theo giả thiết, tốc độ thay đổi của x tỉ lệ với tốc độ thay đổi của p nên hàm số p = p ( x ) là\n hàm số bậc nhất nên. Do đó, p ( x ) = ax + b (a khác 0 ) .\n Giá tiền p1 = 14 ứng với x1 = 1000 , giá tiền p2 = 13,5 ứng với x2 = 1000 + 100 = 1100\n Do đó, phương trình đường thẳng p ( x ) = ax + b đi qua hai điểm (1000;14 ) và (1100;13,5 ) .\n   -1\n 14 = 1000a + b a = 1\n Ta có hệ phương trình:  \\Leftrightarrow 200 (thỏa mãn) \\Rightarrow p ( x ) = - x + 19\n 13,5 = 1100a + b b = 19 200\n \n -1\n b) Đúng: Vì p = x + 19 \\Rightarrow x = -200 p + 3800\n 200\n Hàm doanh thu từ tiền bán ti vi là: R ( p ) = px = p ( -200 p + 3800 ) = -200 p 2 + 3800 p\n Để doanh thu là lớn nhất thì ta cần tìm p sao cho R đạt giá trị lớn nhất.\n 19\n Ta có: R ( p ) = -400 p + 3800; R ( p ) = 0 \\Leftrightarrow p =\n 2\n Bảng biến thiên:\n 19\n Vậy công ty nên giảm giá số tiền một chiếc ti vi là: 14 - = 4,5 (triệu đồng) thì doanh thu là\n 2\n lớn nhất.\n  -1  -x^2\n c) Sai: Doanh thu bán hàng của x sản phẩm là: R ( x ) = x. p ( x ) = x. x + 19  = + 19 x\n  200  200\n (triệu đồng). Do đó, hàm số thể hiện lợi nhuận thu được khi bán x sản phẩm là:\n - x2 - x2\n P ( x) = R ( x) - C ( x) = + 19 x - 12000 + 3x = + 22 x - 12000 (triệu đồng).\n 200 200\n -x\n Để lợi nhuận là lớn nhất thì P ( x ) là lớn nhất. Ta có: P ( x ) = + 22; P ( x ) = 0 \\Leftrightarrow x = 2200\n 100\n Bảng biến thiên:\n Vậy có 2200 ti vi được bán ra thì lợi nhuận là cao nhất.\n Số ti vi mua tăng lên là: 2200 - 1000 = 1200 (chiếc)\n 1200\n d) Sai: Vậy cửa hàng nên đặt giá bán là: 14 - 0,5 = 8 (triệu đồng)\n 100",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:S",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-5-ly thuyet va ung dung dao ham de gi-6",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2b3f93dc228051",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một hộ làm nghề dệt vải lụa tơ tằm sản xuất mỗi ngày được x mét vải lụa (1 \\le x \\le 18 ) . Tổng chi phí sản xuất x mét vải lụa, tính bằng nghìn đồng, cho bởi hàm chi phí: C ( x ) = x^3 - 3x 2 - 20 x + 500. Giả sử hộ làm nghề dệt này bán hết sản phẩm mỗi ngày với giá 220 nghìn đồng/mét. Gọi B ( x ) là số tiền bán được và L ( x ) là lợi nhuận thu được khi bán x mét vải lụa.",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Biểu thức tính B ( x ) theo x là B ( x ) = 220 x (nghìn đồng).",
        "content_en": "Biểu thức tính B ( x ) theo x là B ( x ) = 220 x (nghìn đồng).",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Biểu thức tính L ( x ) theo x là L ( x ) = - x3 + 3x 2 + 220 x - 500 (nghìn đồng).",
        "content_en": "Biểu thức tính L ( x ) theo x là L ( x ) = - x3 + 3x 2 + 220 x - 500 (nghìn đồng).",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Hộ làm nghề dệt này cần sản xuất và bán ra mỗi ngày 10 mét vải lụa để thu được lợi nhuận tối đa",
        "content_en": "Hộ làm nghề dệt này cần sản xuất và bán ra mỗi ngày 10 mét vải lụa để thu được lợi nhuận tối đa",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Lợi nhuận tối đa của hộ làm nghề dệt vải lụa tơ tằm có thể đạt được là 1000 nghìn đồng.",
        "content_en": "Lợi nhuận tối đa của hộ làm nghề dệt vải lụa tơ tằm có thể đạt được là 1000 nghìn đồng.",
        "is_correct": false
      }
    ],
    "solution_vi": "Khi bán x mét vải lụa:\n a) Đúng: Số tiền thu được là: B ( x ) = 220 x (nghìn đồng).\n b) Sai: Lợi nhuận thu được là: L ( x ) = B ( x ) - C ( x ) = - x^3 + 3x 2 + 240 x - 500 (nghìn đồng).\n18 \n c) Đúng: Hàm số L ( x ) xác định trên [1;18] .\n Đạo hàm L ( x ) = -3x 2 + 6 x + 240; L ( x ) = 0 \\Leftrightarrow x = 10 hoặc x = -8 (loại).\n Trên khoảng (1;10 ) , L ( x ) > 0 nên hàm số đồng biến trên khoảng này.\n Trên khoảng (10;18 ) ; L ( x ) < 0 nên hàm số nghịch biến trên khoảng này.\n Cực trị: Hàm số L ( x ) đạt cực đại tại x = 10 và LCĐ = L (10 ) = 1200 .\n Bảng biến thiên:\n Đồ thị hàm số có điểm cực đại (10;1200 ) và đi qua các điểm (1; -258 ) ; (18; -1040 ) như hình.\n d) Sai: Quan sát đồ thị hàm số, ta nhận thấy khi x = 10 thì hàm số đạt giá trị lớn nhất là 1200.\n Như vậy, hộ làm nghề dệt cần sản xuất và bán ra mỗi ngày 10 mét vải lụa để thu được lợi nhuận\n tối đa. Lợi nhuận tối đa này là 1200 nghìn đồng.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:S",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-5-ly thuyet va ung dung dao ham de gi-7",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5f75dcb0fd2780",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Giả sử hàm cầu của một sản phẩm độc quyền được cho bởi P = 400 - 2Q và hàm chi phí trung 400 bình C = 0, 2Q + 4 + trong đó Q là số đơn vị sản phẩm ( P và C được tính bằng $ đối với Q mỗi đơn vị sản phẩm).",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Q = 90 là lượng sản phẩm bán ra để lợi nhuận thu được tối đa;",
        "content_en": "Q = 90 là lượng sản phẩm bán ra để lợi nhuận thu được tối đa;",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Giá bán để lợi nhuận thu được tối đa là 400$",
        "content_en": "Giá bán để lợi nhuận thu được tối đa là 400$",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Lợi nhuận tối đa là 17420$",
        "content_en": "Lợi nhuận tối đa là 17420$",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Nếu chính phủ đánh thuế 22$ / một đơn vị sản phẩm thì giá bán 390$ để lợi nhuận thu được tối đa",
        "content_en": "Nếu chính phủ đánh thuế 22$ / một đơn vị sản phẩm thì giá bán 390$ để lợi nhuận thu được tối đa",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: Lợi nhuận = Tổng doanh thu - Tổng chi phí.\n Tổng doanh thu là R và tổng chi phí là C được cho bởi R = PQ = 400Q - 2Q 2\n (\n Và C = QC = 0, 2Q 2 + 4Q + 400 nên lợi nhuận P = R - C = 400Q - 2Q 2 - 0, 2Q 2 + 4Q + 400 . )\n Hay P ( Q ) = 396Q - 2, 2Q 2 - 400.\n a) Đúng: Để tối đa hóa lợi nhuận, ta cho P ( Q ) = 0 \\Leftrightarrow 396 - 4, 4Q = 0 \\Leftrightarrow Q = 90.\n Ta có P ( Q ) = -4, 4 < 0 . Vậy P đạt cực đại tại Q = 90 .\n b) Sai: Thay Q = 90 vào hàm cầu ta được giá bán trên mỗi sản phẩm để lợi nhuận thu được tối\n đa: P = 400 - 2.90 = 220.\n c) Đúng: Lợi nhuận tối đa: P ( 90 ) = 396 ( 90 ) - 2, 2 ( 90 ) - 400 = 17420.\n 2\n d) Sai: Khi chi phí đánh thuế 22$/một đơn vị sản phẩm, tổng chi phí tăng 22Q . Hàm chi phí mới\n là C1 = 0, 2Q 2 + 4Q + 400 + 22Q và hàm lợi nhuận mới là\n P = 400Q - 2Q 2 - ( 0, 2Q 2 + 4Q + 400 + 22Q ) = 374Q - 2, 2Q 2 - 400\n Ta có P1( Q ) = 0 \\Leftrightarrow 374 - 4, 4Q = 0 \\Leftrightarrow Q = 85.\n Vì P1 ( Q ) = -4, 4 < 0 nên để thu được lợi nhuận tối đa, nhà độc quyền phải sản xuất 85 đơn vị\n sản phẩm với mức giá P1 = 400 - 2.85 = 230$ , do mức giá này chỉ hơn 10$ so với trước đó nên\n chỉ một phần thuế được tính vào người tiêu dùng, phần thuế còn lại do nhà sản xuất gánh chịu.\n Lợi nhuận bây giờ là 15495 .",
    "solution_en": "",
    "correct_answer": "a:Đ, b:S, c:Đ, d:S",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-5-ly thuyet va ung dung dao ham de gi-8",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-7e770b754caf90",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho biết điện lượng truyền trong dây dẫn theo thời gian biểu thị bởi hàm số Q ( t ) = 2t 2 + t , trong\n đó t được tính bằng giây (s) và Q được tính theo Culong ( C ) . Tính cường độ dòng điện tại thời\n điểm t = 4 s.",
    "question_en": "",
    "options": [],
    "solution_vi": "Cường độ dòng điện tại thời điểm t = 4 s là Q ( t ) = I ( t ) = 4t + 1 \\Rightarrow t ( 4 ) = 17.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3d6977e662ff25",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong 5 giây đầu tiên, một chất điểm chuyển động theo phương trình s ( t ) = -t 3 + 6t 2 + t + 5 trong\n đó t tính bằng giây và s tính bằng mét. Chất điểm có vận tốc tức thời lớn nhất bằng bao nhiêu\n trong 5 giây đầu tiên đó?",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có: v ( t ) = s ( t ) = -3t 2 + 12t + 1 .\n Nhận xét: v ( t ) có đồ thị là một parabol nên trong 5s đầu tiên vận tốc tức thời cúa chất điểm đạt\n giá trị lớn nhất bằng 13 tại t = 2 s .\n20",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-83d6a3c0c0dd88",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một tên lửa bay vào không trung với quãng đường đi được là s ( t ) (km) là hàm phụ thuộc theo\n biến t (giây) tuân theo biểu thức sau: s ( t ) = et + 3 + 2te3t +1 (km). Vận tốc của tên lửa sau 1 giây\n 2\n là m.e n (km/s). Tính T = m + n (Biết hàm biểu thị vận tốc là đạo hàm cấp một của hàm biểu thị\n quãng đường theo thời gian)?",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có: v ( t ) = s ( t ) = 2tet + 3 + 2e3t +1 + 6te3t +1 \\Rightarrow v (1) = 2e 4 + 2e 4 + 6e 4 = 10e 4 (km/s)\n 2\n m = 10\n Vậy  \\Rightarrow T = m + n = 10 + 4 = 14\n n = 4",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-3",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d9343619e854b4",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một vật được phóng thẳng đứng lên trên từ độ cao 2 m với vận tốc ban đầu là 24,5 (m/s). Trong\n Vật lý, ta biết rằng khi bỏ qua sức cản của không khí thì độ cao h (mét) của vật sau t (giây)\n được cho bởi công thức h ( t ) = 2 + 24,5t - 4,9t 2 . Hỏi sau bao nhiêu giây thì vật đạt độ cao lớn\n nhất?",
    "question_en": "",
    "options": [],
    "solution_vi": "Xét hàm số: h ( t ) = 2 + 24,5t - 4,9t 2 . Tập xác định của hàm số là .\n 5\n Ta có: h ( t ) = -9,8t + 24,5; h ( t ) = 0 \\Leftrightarrow -9,8t + 24,5 = 0 \\Leftrightarrow t =\n 2\n Bảng biến thiên:\n 5\n Từ bảng biến thiên ta thấy hàm số đạt cực đại tại t =\n 2\n 5\n Vậy thời điểm vật đạt độ cao lớn nhất là t = giây\n 2",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-4",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-22397cda4a80cb",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Trong một thí nghiệm y học, người ta cấy 1000 vi khuẩn vào môi trường dinh dưỡng. Bằng thực\n nghiệm, người ta xác định được số lượng vi khuẩn thay đổi theo thời gian bởi công thức:\n 100t\n N ( t ) = 1000 + (con), trong đó t là thời gian tính bằng giây. Tính số lượng vi khuẩn lớn\n 100 + t 2\n nhất kể từ khi thực hiện cấy vi khuẩn vào môi trường dinh dưỡng.",
    "question_en": "",
    "options": [],
    "solution_vi": "100t\n Xét hàm số N ( t ) = 1000 + (t > 0) .\n 100 + t 2\n 100.(100 + t 2 ) - 100t.2t 100. (100 - t 2 )\n Ta có: N  ( t ) = = .\n (100 + t )\n 2 2\n (100 + t )\n 2 2\n Khi đó, với t > 0, N  ( t ) = 0 \\Leftrightarrow 100 - t 2 = 0 \\Leftrightarrow t 2 = 100 \\Leftrightarrow t = 10 .\n Bảng biến thiên của hàm số N ( t ) như sau:\n22 \n Căn cứ bảng biến thiên, ta thấy:\n Trên khoảng ( 0;+\\infty ) hàm số N ( t ) đạt giá trị lớn nhất bằng 1005 tại t = 10 .\n Vậy số lượng vi khuẩn lớn nhất kể từ khi thực hiện cấy vi khuẩn vào môi trường dinh dưỡng là\n 1005 con.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-6",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-aecaf241882e6f",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Ho ép khí quản co lại, ảnh hưởng đến tốc độ của không khí đi vào khí quản. Tốc độ của không\n khí đi vào khí quản khi ho được cho bởi công thức V = k ( R - r ) r 2 ; 0 \\le r < R, trong đó k là hằng\n số, R là bán kính bình thường của khí quản, r là bán kính khí quản khi ho. Hỏi bán kính của khí\n quản khi ho bằng bao nhiêu so với bán kính khí quản lúc bình thường thì tốc độ của không khí\n đi vào khí quản là lớn nhất?",
    "question_en": "",
    "options": [],
    "solution_vi": "r = 0\n Ta có: V  = 2kRr - 3kr . Nhận xét V  = 0 \\Leftrightarrow \n 2\n .\n r = 2R\n  3\n  2 R  4kR\n 3\n Ta có f ( 0 ) = 0; f  =\n  3  27\n 2\n Vậy bán kính của khí quản khi ho bằng bán kính khí quản lúc bình thường thì tốc độ không\n 3\n khí đi vào là lớn nhất.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-fe2152ca4d5cbe",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Người quản lí của một khu chung cư có 100 căn hộ cho thuê nhận thấy rằng tất cả các căn hộ sẽ\n có người thuê nếu giá thuê một căn hộ là 8 triệu đồng một tháng. Một cuộc khảo sát thị trường\n cho thấy rằng, trung bình cứ mỗi lần tăng giá thuê căn hộ thêm 100 nghìn đồng thì sẽ có thêm\n một căn hộ bị bỏ trống. Người quản lí nên đặt giá thuê mỗi căn hộ là bao nhiêu để doanh thu là\n lớn nhất?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi x là số lần tăng giá 100 nghìn đồng ( x > 0 ) . Khi đó, số căn được cho thuê là: 100 - x (căn)\n Tổng số tiền thu được trong một tháng là:\n (100 - x )(8000000 + 100000 x ) = 100000 (100 - x )(80 + x ) = 100000 ( - x^2 + 20 x + 8000 )\n = 100000  - ( x - 10 ) + 8100  \\le 810000000, x > 0\n 2\n  \n Dấu \"=\" xảy ra khi x = 10 (thỏa mãn)\n Vậy để thu được doanh thu là lớn nhất thì người quản lí nên đặt giá thuê mỗi căn hộ là:\n 8000000 + 100000.10 = 9000000 (đồng).",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-8",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-544d33058a3cd9",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một công ty kinh doanh bất động sản có 20 căn hộ cho thuê. Biết rằng nếu cho thuê mỗi căn hộ\n với giá 2 triệu đồng/1 tháng thì tất cả các căn hộ đều có người thuê. Nhưng cứ mỗi lần tăng giá\n cho thuê mỗi căn hộ thêm 200 nghìn đồng/1 tháng thì có thêm một căn hộ bị bỏ trống. Hỏi công\n ty nên cho thuê mỗi căn hộ bao nhiêu tiền một tháng để tổng số tiền thu được là lớn nhất?",
    "question_en": "",
    "options": [],
    "solution_vi": "Giả sử giá thuê mỗi căn hộ là x triệu đồng/1 tháng và số căn hộ cho thuê là y .\n Khi đó tổng số tiền thu được sẽ là x. y .\n Theo đề bài, ta có: y = 20 - 5 ( x - 2 ) (vì cứ mỗi lần tăng giá thuê mỗi căn hộ thêm 200 nghìn\n đồng/1 tháng thì có thêm một căn hộ bị bỏ trống).\n Do đó ta cần tìm giá trị của x sao cho hàm số f ( x ) = x  20 - 5 ( x - 2 )  đạt giá trị lớn nhất.\n Ta có: f  ( x ) = 30 - 10 x = 0 \\Rightarrow 30 - 10 x = 0 \\Rightarrow x = 3\n Cuối cùng ta kiểm tra xem điểm cực này có phải là điểm cực đại hay không:\n Xác định khoảng:  -\\infty;3 , 3; +\\infty \n Chọn x1 = 2 \\Rightarrow f ( x ) = 10 , chọn x2 = 4 \\Rightarrow f ( x ) = -10\n Vì đạo hàm dương với mọi x < 3 là âm với mọi x > 3 \\Rightarrow hàm số cực đại tại x = 3\n Vì vậy, công ty nên cho thuê mỗi căn hộ với giá 3 triệu đồng/1 tháng để tổng số tiền thu được là\n lớn nhất.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-e5ddc352635155",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một con cá hồi bơi ngược dòng nước để vượt một khoảng cách là 300 km. Vận tốc dòng nước là\n 6 (km/h). Nếu vận tốc bơi của cá khi nước đứng yên là v (km/h) thì năng lượng tiêu hao của cá\n trong t giờ được cho bởi công thức E ( v ) = cv 3t (trong đó c là hằng số dương, E được tính\n bằng đơn vị Jun). Cá bơ ngược dòng quãng đường 300 km trên trong khoảng thời gian t với vận\n tốc bằng bao nhiêu để năng lượng tiêu hao là thấp nhất?",
    "question_en": "",
    "options": [],
    "solution_vi": "Vận tốc khi cá bơi ngược dòng sẽ là v - 6 (km/h).\n 300\n Thời gian để bơi quãng đường 300 km là t = ( h) .\n v-6\n v3\n Năng lượng tiêu hao là E ( v ) = 300c (J ).\n v-6\n v3\n Do c > 0 \\Rightarrow E ( v )min \\Leftrightarrow = ( f ( v ) )min .\n v-6\n 3v 2 ( v - 6 ) - v3 2v3 - 18v v = 0\n Với v > 6 ta có f  ( v ) = = = 0 \\Leftrightarrow v = 9.\n ( v - 6) ( v - 6)\n 2 2\n \n Lập bảng biến thiên ta nhận v = 9 (do v > 6 ).\n Vậy để năng lượng tiêu hao là thấp nhất thì vận tốc là 9 (km/h).",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-11",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1ccee3c4fef7ac",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một công ty đánh giá rằng sẽ bán được N lô hàng nếu chi hết số tiền là x (triệu đồng) vào việc\n quảng cáo. Biết rằng N và x liên hệ với nhau bằng biểu thức N ( x ) = - x^2 + 30 x + 6,0 \\le x \\le 30\n . Hãy tìm số lô hàng lớn nhất mà công ti có thể bán sau đợt quảng cáo?",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có N ( x ) = - x^2 + 30 x + 6 \\Rightarrow N  ( x ) = -2 x + 30 \\Rightarrow N  ( x ) = 0 \\Leftrightarrow x = 15.\n26 \n  N ( 0) = 6\n \n Đồng thời, ta cũng có  N (15 ) = 231 \\Rightarrow max x\\in[0;30] N ( x ) = 231 \\Leftrightarrow x = 15.\n  N ( 30 ) = 6\n \n Vậy nếu công ti dành 15 triệu cho việc quảng cáo thì công ti sẽ bán được nhiều nhất là 231 lô\n hàng.",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-13",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d84af39658b22e",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Công ti truyền hình cáp Vista hiện có 100000 thuê bao. Mỗi thuê bao đang trả cước thuê bao 40$/\n tháng. Một cuộc khảo sát cho thấy cứ mỗi lần giảm 0, 25$ cước thuê bao, công ti có thể có thêm\n 1000 thuê bao. Để doanh thu thu được là tối đa, công ti cần xác định mức cước thuê bao mỗi\n tháng là bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi x là số lần giảm 0, 25$ . Cước thuê bao hàng tháng lúc này là 40 - 0, 25x với 0 \\le x \\le 160\n (do mức cước không thể âm), và số thuê bao mới là 1000x .\n Do đó, tổng số thuê bao là 100000 + 1000x .\n Hàm doanh thu được cho bởi R = (số thuê bao) x (cước mỗi thuê bao trả)\n R = (100000 + 1000 x )( 40 - 0, 25 x ) = 1000 (100 + x )( 40 - 0, 25 x ) = 1000 ( 4000 + 15 x - 0, 25 x^2 )\n Đạo hàm R = 0 , ta được R = 1000 (15 - 0,5 x ) = 0 \\Leftrightarrow x = 30.\n Vì tập xác định của R là khoảng đóng [0; 160] nên R đạt cực đại tại x = 30 hoặc tại các điểm\n đầu mút của đoạn [0; 160].\n Ta có: R ( 0 ) = 4000000; R ( 30 ) = 4225000; R (160 ) = 0\n Vậy doanh thu tối đa khi x = 30 . Điều này tương ứng với 30 lần giảm 0, 25$ , tức là cước thuê\n bao hàng tháng là 40$ - 7,5$ = 32,5$ .\n Số thuê bao tại mức cước này là 100000 + 30.(1000 ) = 130000 .",
    "solution_en": "",
    "correct_answer": "30",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-14",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-b717f7cf9d222a",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một bài báo trong tạp chí xã hội học phát biểu rằng nếu một chương trình chăm sóc sức khỏe đặc\n biệt cho người già được khởi xướng, thì t năm sau khi nó được khởi động, n ngàn người già có\n t3\n thể trực tiếp nhận được các phúc lợi, trong đó n = - 6t 2 + 32t ( 0 \\le t \\le 12 ) . Với giá trị nào của\n 3\n t thì số người nhận phúc lợi tối đa là bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "t = 4\n Đạo hàm n ( t ) = 0 ta có n ( t ) = t 2 - 12t + 32 = 0 \\Leftrightarrow ( t - 4 )( t - 8 ) = 0 \\Leftrightarrow \n t = 8.\n Vì tập xác định của n là một khoảng đóng  0;12 nên n đạt cực đại tuyệt đối tại t = 0, t = 4, t = 8\n hoặc t = 12 :\n 03 43\n - 6 ( 02 ) + 32.0 = 0; n ( 4 ) = - 6 ( 42 ) + 32.4 =\n 160\n n ( 0) =\n 3 3 3\n 83 123\n - 6 ( 82 ) + 32.8 = - 6 (122 ) + 32.12 =\n 128 288\n n ( 8) = ; n (12 ) = = 96\n 3 3 3 3\n Do đó n đạt cực đại khi t = 12 (năm).",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-15",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-d7d70a5201d601",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một chất điểm chuyển động có phương trình chuyển động là s = -t 3 + 6t 2 + 17t , với t ( s ) là\n khoảng thời gian tính từ lúc vật bắt đầu chuyển động và s ( m ) là quãng đường vật đi được trong\n khoảng thời gian đó. Trong khoảng thời gian 8 giây đầu tiên, vận tốc v ( m / s ) của chất điểm đạt\n giá trị lớn nhất bằng?",
    "question_en": "",
    "options": [],
    "solution_vi": "Ta có : v = s = -3t 2 + 12t + 17\n Ta đi tìm giá trị lớn nhất của v = -3t 2 + 12t + 17 trên khoảng ( 0;8 )\n Mặt khác: v ' = -6t 2 + 12 = 0 \\Rightarrow t = 2\n Bảng biến thiên:\n Vậy vận tốc lớn nhất trong khoảng 8 giây đầu tiên là: 29 (m/s).",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-16",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-37a19417de51a9",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một công ty sản xuất dụng cụ thể thao nhận được một đơn đặt hàng sản xuất 8000 quả bóng\n tennis. Công ty này sở hữu một số máy móc, mỗi máy có thể sản xuất 30 quả bóng trong một\n giờ. Chi phí thiết lập các máy này là 200 nghìn đồng cho mỗi máy. Khi được thiết lập, hoạt động\n sản xuất sẽ hoàn toàn diễn ra tự động dưới sự giám sát. Số tiền phải trả cho người giám sát là\n 192 nghìn đồng một giờ. Số máy móc công ty nên sử dụng là bao nhiêu để chi phí hoạt động là\n thấp nhất?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi số máy móc công ty sử dụng để sản xuất là x ( x \\in , x > 0 ) .\n 8000\n Thời gian cần để sản xuất hết 8000 quả bóng là: .\n 30x\n 8000 51200\n Tổng chi phí để sản xuất là: P ( x ) = 200 x + .192 = 200 x +\n 30 x x\n 51200  x = 16\n Ta có: P ( x ) = 200 - = 0 \\Leftrightarrow x^2 = 256 \\Leftrightarrow  .\n  x = -16 ( loai )\n 2\n x\n Bảng biến thiên:\n28 \n Vậy công ty nên sử dụng 16 máy để chi phí hoạt động là thấp nhất.\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-ly thuyet va ung dung dao ham de gi-17",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-0ee8f0a44ff642",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một màn ảnh hình chữ nhật cao 1,4 mét và đặt ở độ cao 1,8 mét so với tầm mắt (tính từ đầu mép dưới của màn hình). Để nhìn rõ nhất phải xác định vị trí đó? Biết rằng góc BOC là góc nhọn. C 1,4 B 1,8 A O",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "AO = 2, 4 m",
        "content_en": "AO = 2, 4 m",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "AO = 2 m",
        "content_en": "AO = 2 m",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "AO = 2,6 m",
        "content_en": "AO = 2,6 m",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "AO = 3 m",
        "content_en": "AO = 3 m",
        "is_correct": false
      }
    ],
    "solution_vi": "Đặt độ dài cạnh AO = x cm, ( x > 0 )\n Suy ra: BO = 3, 24 + x^2 , CO = 10, 24 + x^2\n Ta sử dụng định lí cosin trong tam giác OBC ta có:\n OB 2 + OC 2 - BC 2 ( 3, 24 + x ) + (10, 24 + x ) - 1,96\n 2 2\n 5,76 + x^2\n cos BOC = = =\n 2.OB.OC 2 ( 3, 24 + x^2 )(10, 24 + x^2 ) ( 3, 24 + x )(10, 24 + x )\n 2 2\n 5,76 + x^2\n Vì góc BOC là góc nhọn nên bài toán trở thành tìm x để F ( x ) = đạt\n ( 3, 24 + x )(10, 24 + x )\n 2 2\n giá trị nhỏ nhất.\n 63\n t+\n Đặt ( 3, 24 + x^2 ) = t , ( t > 3, 24 ) suy ra F ( t ) = 25 = 25t + 63\n t ( t + 7 ) 25 t ( t + 7 )\n Ta tìm t để F (t ) nhận giá trị nhỏ nhất.\n   \n  25 t ( t + 7 ) - ( 25t + 63)  2t + 7  \n  25t + 63  1   2 t (t + 7)  \n F '(t ) =   =   \n  25 t ( t + 7 )  25  t (t + 7) \n  \n  \n  \n  \n 1  50 ( t + 7t ) - ( 25t + 63)( 2t + 7 )  1  \n 2\n 49t - 441\n =  =  =0\\Leftrightarrowt =9\n 25 \n  2t ( t + 7 ) t ( t + 7 )  25  2t ( t + 7 ) t ( t + 7 ) \n   \n Bảng biến thiên:\n Thay vào đặt ta có: ( 3,24 + x^2 ) = 9 \\Leftrightarrow x^2 =\n 144\n \\Leftrightarrow x = 2,4m\n 25\n Vậy để nhìn rõ nhất thì AO = 2, 4 m.",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-mot so bai toan toi uu don gian-1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-13e94948f738d4",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Nhà Long muốn xây một hồ chứa nước có dạng một khối hộp chữ nhật có nắp đậy có thể tích bằng 576m3 . Đáy hồ là hình chữ nhật có chiều dài gấp đôi chiều rộng. Giá tiền thuê nhân công để xây hồ tính theo m 2 là 500.000 đồng/m2. Hãy xác định kích thước của hồ chứa nước sao cho chi phí thuê nhân công là ít nhất và chi phí đó là bao nhiêu?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Rộng 6m, dài 12m, cao 8m. Tiền: 216 triệu",
        "content_en": "Rộng 6m, dài 12m, cao 8m. Tiền: 216 triệu",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Rộng 6m, dài 12m, cao 8m. Tiền: 215 triệu",
        "content_en": "Rộng 6m, dài 12m, cao 8m. Tiền: 215 triệu",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Rộng 6m, dài 12m, cao 8m. Tiền: 214 triệu",
        "content_en": "Rộng 6m, dài 12m, cao 8m. Tiền: 214 triệu",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Rộng 6m, dài 12m, cao 8m. Tiền: 213 triệu.",
        "content_en": "Rộng 6m, dài 12m, cao 8m. Tiền: 213 triệu.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x, y, h lần lượt là chiều dài, chiều rộng, chiều cao của hồ chứa nước, ( x > 0, y > 0, h > 0, m )\n y V 576 288\n Ta có: = 2 \\Leftrightarrow y = 2 x . Thể tích hồ chứa nước V = xyh \\Leftrightarrow h = = = 2\n x xy x ( 2 x ) x\n Diện tích cần xây dựng hồ chứa nước:\n 288 288 1728\n S ( x ) = 2 xy + 2 xh + 2 yh = 2 x ( 2 x ) + 2 x^2\n + 2 ( 2x ) 2 = 4x2 +\n x x x\n Để chi phí nhân công là ít nhất thì diện tích cần xây dựng là nhỏ nhất, mà vẫn đạt thể tích như\n mong muốn.\n Bài toán trở thành tìm x để S ( x ) nhỏ nhất\n 1728 1728\n \\Leftrightarrow S ( x ) = 4x2 + \\Rightarrow S  ( x ) = 0 \\Leftrightarrow 8x - 2 = 0 \\Leftrightarrow x = 6\n x x\n Bảng biến thiên:\n10 \n Vậy kích thước của hồ là: rộng 6m, dài 12m, cao 8m.\n Diện tích cần xây: 432m 2 và chi phí ít nhất là: 432 x500.000 = 216.000.000",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-mot so bai toan toi uu don gian-7",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1731fab1511f7e",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Ông Nam cần xây dựng một bể nước mưa có thể tích V = 8 ( m3 ) dạng hình hộp chữ nhật với 4 chiều dài gấp lần chiều rộng, đáy và nắp đổ bê tông, cốt thép; xung quanh xây bằng gạch và 3 xi măng. Biết rằng chi phí trung bình là 980.000đ /m 2 và ở nắp để hở một khoảng hình vuông có 2 diện tích bằng diện tích nắp bể. Tính chi phí thấp nhất mà ông Nam phải chi trả (làm tròn đến 9 hàng nghìn đồng).",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "22.770.000 đ.",
        "content_en": "22.770.000 đ.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "27.657.000 đ.",
        "content_en": "27.657.000 đ.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "20.965.000 đ.",
        "content_en": "20.965.000 đ.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "23.235.000 đ.",
        "content_en": "23.235.000 đ.",
        "is_correct": false
      }
    ],
    "solution_vi": "2\n Gọi chiều rộng của bể là 3 x ( m ) . Ta có chiều dài bể là 4 x ( m) và chiều cao của bể là ( m)\n 3x 2\n Khi đó tổng diện tích bề mặt xây là:\n 28 64 x^2 28 64 x^2 32 7\n T = ( 3x + 4 x ) .2.\n 2\n 3x 2\n + 2.3 x.4 x -\n 2\n 9\n .3 x.4 x =\n 3x 2\n +\n 3\n \\ge 2.\n 3x 2\n .\n 3\n =\n 3\n ( m2 ) .\n 32 7\n Chi phí C (tính theo đồng) xây dựng là: C = T .980000 \\ge .980000  27657000 (đồng).\n 3",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-5-mot so bai toan toi uu don gian-10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c0a54fb0dc8a60",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một cái hộp có dạng hình hộp chữ nhật có thể tích bằng 48 và chiều dài gấp đôi chiều rộng. Chất\n liệu làm đáy và 4 mặt bên của hộp có giá thành gấp ba lần giá thành của chất liệu làm nắp hộp.\n m\n Gọi h là chiều cao của hộp để giá thành của hộp là thấp nhất. Biết h = với m , n là các số\n n\n nguyên dương nguyên tố cùng nhau. Tổng m + n bằng bao nhiêu?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi chiều dài, chiều rộng của hộp là 2x và x ( x > 0) .\n Khi đó, ta có thể tích của cái hộp là: V = 2 x^2 .h \\Rightarrow 2 x^2 .h = 48 \\Leftrightarrow x^2 .h = 24\n Do giá thành làm đáy và mặt bên hộp là 3 , giá thành làm nắp hộp là 1 nên giá thành làm hộp là\n L = 3 ( 2 x^2 + 2 xh + 4 xh ) + 2 x^2\n Áp dụng bất đẳng thức Cauchy cho ba số không âm ta được:\n L = 8 x^2 + 9 xh + 9 xh \\ge 3 3 8 x^2 .9 xh.9 xh = 3 3 648 ( x^2 h ) = 216\n 2\n  9h\n  x= x = 3\n 8 x = 9 xh2\n  8 \n Dấu bằng xảy ra khi và chỉ khi:  2 \\Rightarrow 2 \\Rightarrow 8\n  x h = 24  9 .h3 = 24 h = 3\n  82\n Vậy m = 8 , n = 3 và m + n = 11 .",
    "solution_en": "",
    "correct_answer": "11",
    "math_skill": "Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-5-mot so bai toan toi uu don gian-3",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-2dd965efc6ba1d",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Nếu thay tất cả các tần số trong mẫu số liệu ghép nhóm trên bằng 4 thì số đặc trưng nào sau đây không thay đổi?",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Khoảng biến thiên.",
        "content_en": "Khoảng biến thiên.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "Khoảng tứ phân vị.",
        "content_en": "Khoảng tứ phân vị.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Phương sai.",
        "content_en": "Phương sai.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Độ lệch chuẩn.",
        "content_en": "Độ lệch chuẩn.",
        "is_correct": false
      }
    ],
    "solution_vi": "Nếu thay tất cả các tần số trong mẫu số liệu ghép nhóm trên bằng 4 thì số đặc trưng không đổi là\n khoảng biến thiên.",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-10-ly thuyet va phuong sai va do lech chuan-2",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-083723561c92a9",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Để đánh giá chất lượng của một loại pin điện thoại mới, người ta ghi lại thời gian nghe nhạc liên tục của điện thoại được sạc đầy pin cho đến khi hết pin cho kết quả sau: mẫu số liệu ghép nhóm trên (làm tròn đến 4 chữ số thập phân)",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0, 4252 .",
        "content_en": "0, 4252 .",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "0,5314 .",
        "content_en": "0,5314 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "0,6214 .",
        "content_en": "0,6214 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "0,5268 .",
        "content_en": "0,5268 .",
        "is_correct": true
      }
    ],
    "solution_vi": "Số trung bình của mẫu số liệu:\n m1.x1 + ... + mk .xk 2.5,25 + 8.5,75 + 15.6,25 + +10.6,75 + 5.7,25\n x= = = 6,35\n n 40\n Phương sai của mẫu số liệu ghép nhóm:\n s2 =\n 1\n 40\n ( 2.5,252 + 8.5,752 + 15.6,252 + 10.6,752 + 5.7,252 ) - 6,352 = 0,2775\n Độ lệch chuẩn của mẫu số liệu ghép nhóm là: s = s 2 = 0, 2775  0,5268",
    "solution_en": "",
    "correct_answer": "D",
    "math_skill": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-10-ly thuyet va phuong sai va do lech chuan-11",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-5e7b1bd2d3a15a",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Người ta ghi lại tiền lãi (đơn vị: triệu đồng) của một số nhà đầu tư (với số tiền đầu tư như nhau), khi đầu tư vào hai lĩnh vực A, B cho kết quả như sau: Tính độ lệch chuẩn cho các mẫu số liệu về tiền lãi của các nhà đầu tư ở lĩnh vực B",
    "question_en": "",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8,039 .",
        "content_en": "8,039 .",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "8,5314 .",
        "content_en": "8,5314 .",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8,6214 .",
        "content_en": "8,6214 .",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "8,5268 .",
        "content_en": "8,5268 .",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có mẫu số liệu ghép nhóm với giá tri đại diện là:\n Phương sai của mẫu số liệu về tiền lãi khi đầu tư vào lĩnh vực B:\n sB2 =\n 1\n 25\n ( 7,52.8 + 12,52.4 + 17,52.2 + 22,52.5 + 27,52.6 ) - 16,92 = 64,64\n Độ lệch chuẩn của mẫu số liệu về tiền lãi khi đầu tư vào lĩnh vực B: sB = 64,64  8,039 (triệu\n đồng)\n12",
    "solution_en": "",
    "correct_answer": "A",
    "math_skill": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-12-10-ly thuyet va phuong sai va do lech chuan-12",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-30bcf8a8b32748",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Kết quả 40 lần nhảy xa của hai vận động viên Dũng và Huy được lần lượt thống kê trong bảng bên dưới (đơn vị: mét) Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số trung bình cộng của mẫu số liệu ghép nhóm biểu diễn kết quả 40 lần nhảy xa của vận động viên Dũng cho bởi Bảng 15 (làm tròn kết quả đến hàng phần trăm) là 6,92 m.",
        "content_en": "Số trung bình cộng của mẫu số liệu ghép nhóm biểu diễn kết quả 40 lần nhảy xa của vận động viên Dũng cho bởi Bảng 15 (làm tròn kết quả đến hàng phần trăm) là 6,92 m.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Độ lệch chuẩn của mẫu số liệu ghép nhóm biểu diễn kết quả 40 lần nhảy xa của vận động viên Dũng cho bởi Bảng 15 (làm tròn kết quả đến hàng phần trăm) là 0, 26 m.",
        "content_en": "Độ lệch chuẩn của mẫu số liệu ghép nhóm biểu diễn kết quả 40 lần nhảy xa của vận động viên Dũng cho bởi Bảng 15 (làm tròn kết quả đến hàng phần trăm) là 0, 26 m.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Phương sai của mẫu số liệu ghép nhóm biểu diễn kết quả 40 lần nhảy xa của vận động viên Huy cho bởi Bảng 16 (làm tròn kết quả đến hàng phần trăm) là 0,16.",
        "content_en": "Phương sai của mẫu số liệu ghép nhóm biểu diễn kết quả 40 lần nhảy xa của vận động viên Huy cho bởi Bảng 16 (làm tròn kết quả đến hàng phần trăm) là 0,16.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Kết quả nhảy xa của vận động viên Dũng đồng đều hơn kết quả nhảy xa của vận động viên Huy.",
        "content_en": "Kết quả nhảy xa của vận động viên Dũng đồng đều hơn kết quả nhảy xa của vận động viên Huy.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Số trung bình cộng của mẫu số liệu ghép nhóm biểu diễn kết quả 40 lần nhảy xa của\n vận động viên Dũng là:\n 3.6,34 + 7.6,58 + 5.6,82 + 20.7,06 + 5.7,30 276,88\n xD = =  6,92 (m)\n 40 40\n b) Đúng: Phương sai của mẫu số liệu ghép nhóm biểu diễn kết quả 40 lần nhảy xa của vận động\n viên Dũng (làm tròn kết quả đến hàng phần trăm) là:\n 1 \n sD2 = 3.( 6,34 - 6,92 ) + 7.( 6,58 - 6,92 ) + 5.( 6,82 - 6,92 )\n 2 2 2\n 40 \n 2,9824\n + 20.( 7,06 - 6,92 ) + 5.( 7,30 - 6,92 )  =  0,07.\n 2 2\n  40\n Độ lệch chuẩn của mẫu số liệu ghép nhóm trên là: sD  0,07  0, 26 (m)\n c) Sai: Số trung bình cộng của mẫu số liệu ghép nhóm biểu diễn kết quả 40 lần nhảy xa của vận\n động viên Huy là:\n 2.6,34 + 5.6,58 + 8.6,82 + 19.7,06 + 6.7,30 278,08\n xH = =  6,95 (m)\n 40 40\n Vậy phương sai của mẫu số liệu ghép nhóm biểu diễn kết quả 40 lần nhảy xa của vận động viên\n Huy (làm tròn kết quả đến hàng phần trăm) là:\n 1 \n sH2 = 2.( 6,34 - 6,95) + 5.( 6,58 - 6,95 ) + 8.( 6,82 - 6,95 ) + 19.( 7,06 - 6,95)\n 2 2 2 2\n 40 \n 2,5288\n + 6.( 7,30 - 6,95)  =  0,06\n 2\n  40\n Độ lệch chuẩn của mẫu số liệu ghép nhóm trên là: sH  0,06  0, 24 (m)\n d) Sai: Do sH  0, 24 < sD  0, 26 nên kết quả nhảy xa của vận động viên Huy đồng đều hơn kết\n quả nhảy xa của vận động viên Dũng.",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:S, d:S",
    "math_skill": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-10-ly thuyet va phuong sai va do lech -1",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-c71727cbea7b32",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Thống kê tổng số giờ nắng trong tháng 9 tại một trạm quan trắc đặt ở Cà Mau trong các năm từ 2002 đến 2021 được thống kê như sau: Người ta lập được bảng tần số ghép nhóm như sau: Xét tính đúng sai của các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số trung bình của mẫu số liệu ghép nhóm là 124,1.",
        "content_en": "Số trung bình của mẫu số liệu ghép nhóm là 124,1.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Phương sai của mẫu số liệu ghép nhóm là 566,19.",
        "content_en": "Phương sai của mẫu số liệu ghép nhóm là 566,19.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Độ lệch chuẩn của mẫu số liệu ghép nhóm (kết quả các phép tính làm tròn đến hàng phần nghìn) là 23,795.",
        "content_en": "Độ lệch chuẩn của mẫu số liệu ghép nhóm (kết quả các phép tính làm tròn đến hàng phần nghìn) là 23,795.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Sai số tương đối của độ lệch chuẩn của mẫu số liệu ghép nhóm so với độ lệch chuẩn của mẫu số liệu gốc (kết quả các phép tính làm tròn đến hàng phần nghìn) là 4,805%.",
        "content_en": "Sai số tương đối của độ lệch chuẩn của mẫu số liệu ghép nhóm so với độ lệch chuẩn của mẫu số liệu gốc (kết quả các phép tính làm tròn đến hàng phần nghìn) là 4,805%.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Xét theo mẫu số liệu gốc. Cỡ mẫu là n = 20 .\n 111,6 + 134,9 + + 114\n Số trung bình của mẫu số liệu trên là: x1 = = 122,755.\n 20\n Phương sai của mẫu số liệu trên là: S12 =\n 1\n 20\n (111,62 + 134,92 + + 1142 ) - 122,7552  515,453.\n Độ lệch chuẩn của mẫu số liệu trên là: S1  515, 453  22,704.\n Xét theo mẫu số liệu ghép nhóm\n 3.89 + 6.107 + 3.125 + 5.143 + 3.161\n Số trung bình của mẫu số liệu ghép nhóm là x2 = = 124,1.\n 20\n b) Đúng: Phương sai của mẫu số liệu ghép nhóm là\n S22 =\n 1\n 20\n ( 3.892 + 6.107 2 + 3.1252 + 5.1432 + 3.1612 ) - 124,12 = 566,19.\n c) Đúng: Độ lệch chuẩn của mẫu số liệu ghép nhóm là: S2 = 566,19  23,795. 77\n d) Đúng: Sai số tương đối của độ lệch chuẩn của mẫu số liệu ghép nhóm so với độ lệch chuẩn\n S - S1 | 23,795 - 22,704 |\n của mẫu số liệu gốc là: 2 = 100%  4,805%.\n S1 22,704",
    "solution_en": "",
    "correct_answer": "a:Đ, b:Đ, c:Đ, d:Đ",
    "math_skill": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-10-ly thuyet va phuong sai va do lech -7",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-3b21f8ece91fd9",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một công ty giống cây trồng đã thử nghiệm hai phương pháp chăm sóc khác nhau cho cây hướng dương. Sau hai tuần, người ta thấy cây được chăm sóc theo cả hai phương pháp đều thấp hơn 50 cm. 26",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Khoảng biến thiên của chiều cao các cây được chăm sóc theo mỗi phương pháp A và B bằng nhau.",
        "content_en": "Khoảng biến thiên của chiều cao các cây được chăm sóc theo mỗi phương pháp A và B bằng nhau.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Trung bình của chiều cao các cây được chăm sóc theo mỗi phương pháp A và B bằng nhau.",
        "content_en": "Trung bình của chiều cao các cây được chăm sóc theo mỗi phương pháp A và B bằng nhau.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Độ lệch chuẩn của chiều cao các cây được chăm sóc theo phương án A là 12,65 (cm).",
        "content_en": "Độ lệch chuẩn của chiều cao các cây được chăm sóc theo phương án A là 12,65 (cm).",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Dựa vào độ lệch chuẩn thì chiều cao của các loại cây được chăm sóc theo phương án B ít bị chênh lệch hơn so với phương án A .",
        "content_en": "Dựa vào độ lệch chuẩn thì chiều cao của các loại cây được chăm sóc theo phương án B ít bị chênh lệch hơn so với phương án A .",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Khoảng biến thiên của chiều cao các cây được chăm sóc theo mỗi phương pháp A và\n B bằng nhau và cùng bằng 50.\n b) Đúng: Ước tính số trung bình và độ lệch chuẩn của chiều cao các cây được chăm sóc theo mỗi\n phương pháp. Cỡ mẫu của hai mẫu số liệu thống kê là N = 40 . Ta có bảng tần số ghép nhóm về\n chiều cao của cây được chăm sóc theo phương pháp A như sau:\n Chiều cao trung bình của các cây được chăm sóc theo phương án A là:\n 5.6 + 18.5 + 25.12 + 35.8 + 45.6\n xA = = 25\n 40\n Ta có bảng tần số ghép nhóm về chiều cao của cây được chăm sóc theo phương pháp B như sau:\n Chiều cao trung bình của các cây được chăm sóc theo phương án B là:\n 5.13 + 15.6 + 25.2 + 35.6 + 45.13\n xB = = 25 cm.\n 40\n c) Độ lệch chuẩn của chiều cao các cây được chăm sóc theo phương án A là:\n 52.6 + 152.8 + 252.12 + 352.8 + 452.6\n sA = - 252  12,65\n 40\n d) Độ lệch chuẩn của chiều cao các cây được chăm sóc theo phương án B là:\n 52.13 + 152.6 + 252.2 + 352.6 + 452.13\n sB = - 252  17,03cm2\n 40",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-ds-12-10-ly thuyet va phuong sai va do lech -10",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-1790fd4739dfb7",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hãy tính độ lệch chuẩn của mẫu số liệu ghép nhóm (kết quả được làm tròn đến hàng phần trăm)",
    "question_en": "",
    "options": [],
    "solution_vi": "Cỡ mẫu: n = 21 . Giá trị trung bình của mẫu số liệu mới:\n 1 1 3550\n x= ( n1c1 + n2c2 + + nk ck ) = ( 3.162 + 5.166 + 8.170 + 4.174 + 1.178) =\n n 21 21\n 1\n n1 ( c1 - x ) + n2 ( c2 - x ) + + nk ( ck - x ) \n 2 2 2\n Phương sai của mẫu số liệu mới: S 2 =\n n  \n 1   3550   8000\n 2 2 2\n 3550   3550  \n = 3 162 -  + 5 166 -  +  + 1178 -  =\n 21   21   21   21   441\n 8000 40 5\n Độ lệch chuẩn của mẫu số liệu mới:  = S 2 = =  4, 26\n 441 21",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-10-ly thuyet va phuong sai va do lech -1",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-28af3653d9e8db",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Để đánh giá chất lượng một loại pin điện thoại mới, người ta ghi lại thời gian nghe nhạc liên tục\n của điện thoại được sạc đầy pin cho đến khi hết pin cho kết quả như sau:\n Tính độ lệch chuẩn của mẫu số liệu ghép nhóm trên (kết quả được làm tròn đến hàng phần trăm)",
    "question_en": "",
    "options": [],
    "solution_vi": "Chọn giá trị đại diện cho các nhóm số liệu, ta có:\n Thời gian trung bình nghe nhạc liên tục của điện thoại là:\n 1\n x= ( 5, 25.2 + 5, 75.8 + 6, 25.15 + 6, 75.10 + 7, 25.5) = 6,35\n 40\n Phương sai của mẫu số liệu là:\n s2 =\n 1\n 40\n ( )\n 5, 252.2 + 5, 752.8 + 6, 252.15 + 6, 752.10 + 7, 252.5 - 6,352 = 0, 2775\n 111\n Độ lệch chuẩn của mẫu số liệu là: 0, 2775 =  0,53\n 20\n28",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-10-ly thuyet va phuong sai va do lech -2",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-pnl-51c5f33a9b6328",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một vận động viên luyện tập chạy cự li 100 m đã ghi lại kết quả luyện tập như sau:\n Hãy xác định phương sai của mẫu số liệu trên?",
    "question_en": "",
    "options": [],
    "solution_vi": "Chọn giá trị đại diện cho các nhóm số liệu, ta có:\n Tổng số vận động viên là: 3 + 7 + 8 + 2 = 20\n Thời gian chạy trung bình của các vận động viên là:\n 1\n x= (10,3.3 + 10,5.7 + 10, 7.8 + 10,9.2) = 10,59 (giây)\n 20\n Phương sai của mẫu số liệu là:\n s2 =\n 1\n 20\n ( )\n 10,32.3 + 10,52 7 + 10, 7 2 8 + 10,92.2 - 10,59 2 = 0, 0299",
    "solution_en": "",
    "correct_answer": "Xem lời giải",
    "math_skill": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-12-10-ly thuyet va phuong sai va do lech -9",
    "grading_safe": false,
    "source_name": "Phan Nhật Linh - bản GV",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-tdc-10-sets-weather-001",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong một khoảng thời gian, tại một địa phương có 10 ngày mưa, 8 ngày có gió, 6 ngày lạnh; có 5 ngày vừa mưa vừa có gió, 4 ngày vừa mưa vừa lạnh, 3 ngày vừa lạnh vừa có gió và 1 ngày đồng thời mưa, lạnh, có gió. Hỏi có bao nhiêu ngày thời tiết xấu (có ít nhất một trong ba hiện tượng trên)?",
    "question_en": "",
    "options": [],
    "solution_vi": "Áp dụng công thức bao hàm–loại trừ: 10+8+6-5-4-3+1=13. Vậy có 13 ngày thời tiết xấu.",
    "solution_en": "",
    "correct_answer": "13",
    "math_skill": "Giao, hợp và bài toán tập hợp thực tế",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-tdc",
    "variant_tag": "tdc-10-sets-inclusion-exclusion-weather",
    "grading_safe": true,
    "source_name": "Thầy TĐC - đề theo chương",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-tdc-10-sets-clubs-ds-001",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Lớp 10A4 có 20 học sinh tham gia câu lạc bộ bóng đá, 16 học sinh tham gia câu lạc bộ bóng rổ và 10 học sinh tham gia cả hai câu lạc bộ. Xét các khẳng định sau:",
    "question_en": "",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Có 6 học sinh tham gia bóng đá nhưng không tham gia bóng rổ.",
        "content_en": "",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Có 26 học sinh tham gia ít nhất một trong hai câu lạc bộ.",
        "content_en": "",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Nếu lớp có 50 học sinh thì có 25 học sinh không tham gia câu lạc bộ bóng đá.",
        "content_en": "",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Nếu lớp có 50 học sinh, trong 24 học sinh không tham gia bóng đá hoặc bóng rổ có 15 bạn không tham gia câu lạc bộ thể thao nào, thì số bạn còn lại tham gia câu lạc bộ cầu lông là 9.",
        "content_en": "",
        "is_correct": true
      }
    ],
    "solution_vi": "Số học sinh chỉ đá bóng là 20-10=10 nên a sai. Số học sinh tham gia ít nhất một câu lạc bộ là 20+16-10=26 nên b đúng. Số học sinh không tham gia bóng đá là 50-20=30 nên c sai. Có 50-26=24 học sinh không tham gia bóng đá hoặc bóng rổ; nếu 15 bạn không chơi môn nào thì còn 9 bạn chơi cầu lông, nên d đúng.",
    "solution_en": "",
    "correct_answer": "a:S, b:Đ, c:S, d:Đ",
    "math_skill": "Giao, hợp và bài toán tập hợp thực tế",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-tdc",
    "variant_tag": "tdc-10-sets-clubs-true-false",
    "grading_safe": true,
    "source_name": "Thầy TĐC - đề theo chương",
    "created_at": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "src-tdc-12-optimization-hotel-001",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một khách sạn có 50 phòng. Nếu giá thuê mỗi phòng là 400 nghìn đồng/ngày thì tất cả các phòng đều được thuê. Cứ tăng giá thêm 20 nghìn đồng/phòng thì có thêm 2 phòng trống. Hỏi nên đặt giá thuê mỗi phòng là bao nhiêu nghìn đồng/ngày để doanh thu trong ngày lớn nhất?",
    "question_en": "",
    "options": [],
    "solution_vi": "Gọi x (nghìn đồng) là giá thuê phòng. Số lần tăng 20 nghìn là (x-400)/20 nên số phòng được thuê là 50-2(x-400)/20=90-x/10. Doanh thu R(x)=x(90-x/10)=-x^2/10+90x, là parabol quay xuống và đạt cực đại tại x=450.",
    "solution_en": "",
    "correct_answer": "450",
    "math_skill": "Tối ưu doanh thu bằng đạo hàm",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-tdc",
    "variant_tag": "tdc-12-hotel-revenue-optimization",
    "grading_safe": true,
    "source_name": "Thầy TĐC - đề theo chương",
    "created_at": "2026-08-27T00:00:00.000Z"
  }
];
