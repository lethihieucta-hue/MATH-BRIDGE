import { Question } from '../types';

/** Câu hỏi nguồn GV đã qua quality gate; ưu tiên trước ngân hàng nền. */
export const REAL_SOURCE_QUESTION_BANK: Question[] = [
  {
    "id": "src-pnl-6df40f55df228c",
    "topic_id": "top-10-2-1",
    "type_id": "type-kntt-10-03-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Bạn Lan mang 150000 đồng đi nhà sách để mua một số quyển tập và bút. Biết rằng giá một quyển\n tập là 8000 đồng và giá của một cây bút là 6000 đồng. Bạn Lan có thể mua được tối đa bao nhiêu\n quyển tập nếu bạn đã mua 10 cây bút.",
    "question_en": "Lan takes 150,000 VND to a bookstore to buy notebooks and pens. A notebook costs 8,000 VND and a pen costs 6,000 VND. If she has already bought 10 pens, what is the maximum number of notebooks she can buy?",
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
    "question_en": "An works as a salesperson at an electronics supermarket. He earns a commission of 600 thousand VND for each washing machine sold and 1.3 million VND for each refrigerator sold. What combinations of washing machines and refrigerators can he sell to earn at least 10 million VND in commission?",
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
    "id": "src-pnl-e6dc8e5151fde8",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một lớp học có 25 học sinh giỏi môn Toán, 23 học sinh giỏi môn Lý, 14 học sinh giỏi cả môn Toán và Lý và có 6 học sinh không giỏi môn nào cả. Hỏi lớp đó có bao nhiêu học sinh?",
    "question_en": "A class has 25 students who are good at Mathematics, 23 who are good at Physics, 14 who are good at both Mathematics and Physics, and 6 who are good at neither subject. How many students are in the class?",
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
    "id": "src-pnl-0edcb43adfa7b5",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một lớp học có 25 học sinh chơi bóng đá, 23 học sinh chơi bóng bàn, 14 học sinh chơi cả bóng đá và bóng bàn và 6 học sinh không chơi môn nào. Số học sinh chỉ chơi 1 môn thể thao là?",
    "question_en": "A class has 25 students who play football, 23 who play table tennis, 14 who play both football and table tennis, and 6 who play neither sport. How many students play exactly one of the two sports?",
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
    "id": "src-pnl-aa64ea636b86a6",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Lớp có tất cả 40 học sinh trong đó có 13 học sinh chỉ thích đá bóng, 18 học sinh chỉ thích chơi cầu lông và số học sinh còn lại thích chơi cả hai môn thể thao nói trên. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "A class has 40 students. Thirteen students like only football, 18 like only badminton, and the remaining students like both sports. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Có 9 học sinh thích chơi cả hai môn cầu lông và bóng đá",
        "content_en": "There are 9 students who like both badminton and football.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Có 22 học sinh thích bóng đá?",
        "content_en": "There are 22 students who like football.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Có 26 học sinh thích cầu lông?",
        "content_en": "There are 26 students who like badminton.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Có 27 học sinh thích chơi cả hai môn cầu lông và bóng đá",
        "content_en": "There are 27 students who like both badminton and football.",
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
    "id": "src-pnl-00793a8f6f193e",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một nhóm có 12 học sinh chuẩn bị cho hội diễn văn nghệ. Trong danh sách đăng kí tham gia tiết\n mục múa và tiết mục hát của nhóm đó, có 5 học sinh tham gia tiết mục múa, 3 học sinh tham gia cả\n hai tiết mục. Hỏi có bao nhiêu học sinh trong nhóm tham gia tiết mục hát? Biết có 4 học sinh của\n nhóm không tham gia tiết mục nào.",
    "question_en": "A group of 12 students is preparing for an arts festival. Five students take part in the dance performance and 3 take part in both the dance and singing performances. Four students take part in neither performance. How many students take part in the singing performance?",
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
    "question_en": "Class 10A has 40 students, including 10 who are good at Mathematics, 15 who are good at Physics, and 22 who are good at neither subject. How many students are good at both Mathematics and Physics?",
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
    "question_en": "A class has 45 students. Each student registers for at least one of two sports: football and volleyball. Thirty-five students register for football and 15 for volleyball. How many students register for both sports?",
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
    "question_en": "At Tran Phu School’s Phu Dong Sports Festival, a class has 45 students: 25 compete in athletics, 20 in the long jump, and 15 in the high jump. Seven students participate in none of these events, and 5 participate in all three. How many students participate in exactly one of the three events?",
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
    "question_en": "In a school-level excellent-student competition, class 11B1 has 15 students who are strong in Literature and 22 who are strong in Mathematics. The class has 40 students, of whom 14 are not classified as excellent students. How many students are strong in both Literature and Mathematics?",
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
    "question_en": "Every student in class 10A1 is good at Mathematics or Chemistry. There are 30 students who are good at Mathematics, 35 who are good at Chemistry, and 20 who are good at both subjects. How many students are in class 10A1?",
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
    "id": "src-pnl-67dfca4ca1cfa6",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Lớp 10A có 45 học sinh trong đó có 25 em học giỏi môn Toán, 23 em học giỏi môn Lý, 20 em học\n giỏi môn Hóa, 11 em học giỏi cả môn Toán và môn Lý, 8 em học giỏi cả môn Lý và môn Hóa, 9\n em học giỏi cả môn Toán và môn Hóa. Hỏi lớp 10 A có bao nhiêu bạn học giỏi cả ba môn Toán,\n Lý, Hóa? (biết rằng mỗi học sinh trong lớp học giỏi ít nhất một trong ba môn Toán, Lý, Hóa).",
    "question_en": "Class 10A has 45 students. Of these, 25 are good at Mathematics, 23 at Physics, and 20 at Chemistry; 11 are good at both Mathematics and Physics, 8 at both Physics and Chemistry, and 9 at both Mathematics and Chemistry. If every student is good at at least one of the three subjects, how many students are good at all three?",
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
    "question_en": "A class has 25 students who play football, 23 who play table tennis, 14 who play both sports, and 6 who play neither. How many students play exactly one sport?",
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
    "question_en": "Class 10C1 has 45 students preparing for a performance celebrating Vietnamese Teachers’ Day (20 November). Thirty-five students join the Flashmob dance, 10 join both the Flashmob and singing performances, and four students—Kiet, Ha, Toan, and Thien—do not join either performance. How many students join the singing performance?",
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
    "question_en": "In a career-interest survey, the homeroom teacher of class 10D offers three fields: Education, Healthcare, and Information Technology. Students may choose one, two, or all three fields, or none. The survey finds that 6 students choose Education, 9 choose Healthcare, 10 choose Information Technology, and 22 choose none. Also, 3 students choose both Education and Healthcare, 2 choose both Healthcare and Information Technology, and 3 choose both Education and Information Technology. If class 10D has 40 students, how many choose all three fields?",
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
    "id": "src-pnl-c5741869a9673c",
    "topic_id": "top-10-1-1",
    "type_id": "type-kntt-10-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho mệnh đề “Có một học sinh trong lớp C4 không chấp hành luật giao thông”. Mệnh đề phủ định của mệnh đề này là",
    "question_en": "Consider the statement: “There is a student in class C4 who does not obey traffic laws.” Which statement is its negation?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Không có học sinh nào trong lớp C4 chấp hành luật giao thông.",
        "content_en": "No student in class C4 obeys traffic laws.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Mọi học sinh trong lớp C4 đều chấp hành luật giao thông.",
        "content_en": "Every student in class C4 obeys traffic laws.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "Có một học sinh trong lớp C4 chấp hành luật giao thông.",
        "content_en": "There is a student in class C4 who obeys traffic laws.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Mọi học sinh trong lớp C4 không chấp hành luật giao thông.",
        "content_en": "Every student in class C4 disobeys traffic laws.",
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
    "question_en": "Consider the statement: “There is a student in class 10A who does not like Mathematics.” Which statement is its negation?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "“Mọi học sinh trong lớp 10A đều thích học môn Toán”.",
        "content_en": "Every student in class 10A likes Mathematics.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "“Mọi học sinh trong lớp 10A đều không thích học môn Toán”.",
        "content_en": "Every student in class 10A dislikes Mathematics.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "“Mọi học sinh trong lớp 10A đều thích học môn Văn”.",
        "content_en": "Every student in class 10A likes Literature.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "“Có một học sinh trong lớp 10A thích học môn Toán”.",
        "content_en": "There is a student in class 10A who likes Mathematics.",
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
    "id": "src-pnl-f174b47d3ddd9e",
    "topic_id": "top-10-1-1",
    "type_id": "type-kntt-10-01-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Ba anh em An, Bình, Vinh ngồi làm bài xung quanh một cái bàn được trải khăn mới. Khi phát hiện\n có vết mực, bà hỏi thì các cháu lần lượt trả lời:\n An: “Em Vinh không làm đổ mực, đấy là do em Bình.”\n Bình: “Em Vinh làm đổ mực, anh An không làm đổ mực”.\n Vinh: “Theo cháu, Bình không làm đổ mực, còn cháu hôm nay không chuẩn bị bài”.\n Biết rằng trong 3 em thì có 2 em nói đúng, 1 em nói sai. Hỏi ai làm đổ mực?",
    "question_en": "Three brothers, An, Binh, and Vinh, are doing homework around a table covered with a new tablecloth. When an ink stain is discovered, their grandmother asks what happened. They reply as follows: An: “Vinh did not spill the ink; Binh did.” Binh: “Vinh spilled the ink; An did not.” Vinh: “I think Binh did not spill the ink, and I did not prepare my lesson today.” Given that exactly two of the three boys are telling the truth and one is lying, who spilled the ink?",
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
    "question_en": "Let (u_n) be a geometric progression with u_1=-3 and q=-2. Find the sum of the first 10 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S10 = -511 .",
        "content_en": "S_{10}=-511.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S10 = 1023 .",
        "content_en": "S_{10}=1023.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S10 = 1025 .",
        "content_en": "S_{10}=1025.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S10 = -1025 .",
        "content_en": "S_{10}=-1025.",
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
    "question_en": "A geometric progression has nonnegative terms and satisfies u_2=6 and u_4=24. Find the sum of its first 12 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3.212 - 3 .",
        "content_en": "3\\cdot 2^{12}-3.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "212 - 1 .",
        "content_en": "2^{12}-1.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3.212 - 1 .",
        "content_en": "3\\cdot 2^{12}-1.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3.212 .",
        "content_en": "3\\cdot 2^{12}.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi công bội của CSN bằng q . Suy ra u4 = u2 .q 2 \\Rightarrow q = \\pm2 . Do CSN có các số hạng không âm\n nên q = 2 .\n 1 - q12 1 - 212\n Ta có S12 = u1. = 3. = 3 ( 212 - 1) .\n 1- q 1- 2\n n\n (1)",
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
    "question_en": "Let (u_n) be a geometric progression with u_3=12, u_5=48, and a negative common ratio. Find the sum of the first 7 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "129 .",
        "content_en": "129.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-129 .",
        "content_en": "-129.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "128 .",
        "content_en": "128.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-128 .",
        "content_en": "-128.",
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
    "question_en": "Let (u_n) be a geometric progression with u_1=2 and positive common ratio. The expression u_4+\\frac{1024}{u_7} attains its minimum value. Find S=u_{11}+u_{12}+\\cdots+u_{20}.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S = 2046.",
        "content_en": "S=2,046.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S = 2097150.",
        "content_en": "S=2,097,150.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S = 2095104.",
        "content_en": "S=2,095,104.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S = 1047552.",
        "content_en": "S=1,047,552.",
        "is_correct": false
      }
    ],
    "solution_vi": "1024 512\n Gọi q là công bội của cấp số nhân, q > 0. Ta có u4 + = 2q 3 + 6 .\n u7 q\n 512 512 512\n Áp dụng bất đẳng thức Cô-si, ta có: 2q3 + 6\n = q3 + q3 + 6 \\ge 3 3 q3 .q3 . 6 = 24.\n q q q\n 1024 512\n Suy ra u4 + đạt giá trị nhỏ nhất bằng 24 khi q 3 = 6 \\Leftrightarrow q = 2.\n u7 q\n u1 (1 - q10 ) u1 (1 - q 20 )\n Ta có S10 = = 2 - 2; S10 =\n 11\n = 221 - 2.\n 1- q 1- q\n Do đó S = S 20 - S10 = 2095104.\n {u4 + u6 = -540",
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
    "question_en": "A geometric progression has terms \\frac14, \\frac12, 1, \\ldots, 2048. Find the sum S of all its terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S = 2047,75.",
        "content_en": "S=2047.75.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S = 2049,75.",
        "content_en": "S=2049.75.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S = 4095,75.",
        "content_en": "S=4095.75.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S = 4096,75.",
        "content_en": "S=4096.75.",
        "is_correct": false
      }
    ],
    "solution_vi": "Cấp số nhân đã cho có\n { 1\n u1 = 1\n  → 2048 = 211 = u1q n -1 = .2n -1 = 2n - 2 \\Leftrightarrow n = 13.\n 4 ⎯⎯\n q = 2 2\n 1 - q13 1 1 - 213\n Vậy cấp số nhân đã cho có tất cả 13 số hạng. Vậy S13 = u1. = . = 2047,75\n 1- q 4 1- 2",
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
    "question_en": "Insert four numbers between 160 and 5 so that the resulting six numbers form a geometric progression. Find the sum of all terms of the progression.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "215 .",
        "content_en": "215.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "315 .",
        "content_en": "315.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "415 .",
        "content_en": "415.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "515 .",
        "content_en": "515.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u = 160 u 1\n Từ giả thiết ta có  1 \\Rightarrowq= 5 6 = .\n u6 = 5 u1 2\n ( ( 1 )6 )\n 160 1 -   \n u1 (1 - q 6 )  2 \n   = 315 .\n Suy ra tổng các số hạng của cấp số nhân đó là: S = =\n 1- q 1\n 2\n {u1 + u2 + u3 = 13",
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
    "question_en": "A geometric progression (u_n) has n terms, first term u_1=7, common ratio q=2, and u_n=1792. Find the sum of its first n terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5377 .",
        "content_en": "5,377.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5737 .",
        "content_en": "5,737.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3577 .",
        "content_en": "3,577.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "3775 .",
        "content_en": "3,775.",
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
    "question_en": "An 11-level tower is designed so that the top surface area of each level is half that of the level immediately below it. The top surface area of level 1 is half the area of the tower base, whose area is 12,288 m^2. Find the top surface area of level 11.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8 m 2 .",
        "content_en": "8 m^2.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6 m 2 .",
        "content_en": "6 m^2.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "10 m 2 .",
        "content_en": "10 m^2.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "12 m 2 .",
        "content_en": "12 m^2.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi a0 , a1 ,a^2 ,...,a11 lần lượt là diện tích mặt trên của đế tháp, tầng 1, tầng 2,., tầng 11.\n n\n 1 (1)\n Khi đó ta có: a0 = 12288; an = an -1 = a 0   , n = 1,2,...,11 .\n 2 2\n 11 11\n (1) (1)\n Diện tích mặt trên tầng trên cùng là: a11 = a0   = 12288   = 6 ( m 2 )\n 2 2",
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
    "question_en": "The population of Binh Phuoc Province on January 1, 2011 was 905,300. If the annual population growth rate remains constant at 10%, what will the population be on January 1, 2020?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "22582927 .",
        "content_en": "22,582,927.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "02348115 .",
        "content_en": "2,348,115.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2134650 .",
        "content_en": "2,134,650.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "11940591 .",
        "content_en": "11,940,591.",
        "is_correct": false
      }
    ],
    "solution_vi": "Sau 9 năm thì số dân của tỉnh Bình Phước là: 905300.1,19 ≈ 2134650 người.",
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
    "question_en": "A rubber ball is dropped vertically from a height of 10 m. After each impact with the ground, it rebounds to a height equal to \\frac{3}{4} of the preceding height. Find the total distance traveled by the ball before it comes to rest.",
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
    "question_en": "A bacterial population doubles every minute. After 5 minutes, 64,000 bacteria are counted. After how many minutes will there be 2,048,000 bacteria?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "10 .",
        "content_en": "10.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "11 .",
        "content_en": "11.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "26 .",
        "content_en": "26.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "50 .",
        "content_en": "50.",
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
    "question_en": "Let (a_n) be a geometric progression with a_1=7, a_6=224, and S_k=3577. Find T=(k+1)a_k.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "T = 17920.",
        "content_en": "T=17,920.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "T = 8064.",
        "content_en": "T=8,064.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "T = 39424.",
        "content_en": "T=39,424.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "T = 86016.",
        "content_en": "T=86,016.",
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
    "question_en": "Let (u_n) be a geometric progression satisfying u_1+u_5=51 and u_2+u_6=102. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng u1 = 3",
        "content_en": "u_1=3.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạng u4 = 48",
        "content_en": "u_4=48.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số 12288 là số hạng thứ 12 của cấp số nhân ( un )",
        "content_en": "12,288 is the 12th term of (u_n).",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng 8 số hạng đầu của cấp số nhân là: 765 .",
        "content_en": "The sum of the first 8 terms is 765.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Gọi q là công bội của cấp số nhân đã cho.\n u1 (1 + q ) = 51\n { { { 4\n (1)\n u1 + u5 = 51 u1 + u1q = 51\n 4\n Ta có:  \\Leftrightarrow \\Leftrightarrow\n u2 + u6 = 102 u1q + u1q = 102 u1q (1 + q ) = 102 ( 2)\n 5 4\n Nhận xét: Nếu u1 = 0 hay q = 0 thì (1) và ( 2 ) đều không thoả mãn vì vậy ta có u1q \\ne 0 .\n Chia theo vế ( 2 ) cho (1) ta được: q = 2 .\n 51\n Thay q = 2 vào (1) suy ra u1 = = 3.\n 1 + 24\n Công thức số hạng tổng quát của cấp số nhân: un = 3 2n -1 .\n14 \n b) Sai: u4 = 3.23 = 24\n c) Sai: Xét un = 12288 \\Leftrightarrow 3.2n -1 = 12288 \\Leftrightarrow 2 n -1 = 212 \\Leftrightarrow n = 13 .\n Vậy 12288 là số hạng thứ 13 của cấp số nhân đã cho.\n u1 (1 - q8 ) 3.(1 - 28 )\n d) Đúng: Tổng 8 số hạng đầu của cấp số nhân là: S8 = = = 765 .\n 1- q 1- 2\n { 2\n u4 =",
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
    "question_en": "Let (u_n) be a geometric progression such that u_1+u_2+u_3=168 and u_4+u_5+u_6=21. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng u1 = 90",
        "content_en": "u_1=90.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Công bội của cấp số nhân bằng 2",
        "content_en": "The common ratio is 2.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số 24 là số hạng thứ 3 của cấp số nhân 3069",
        "content_en": "24 is the third term of the geometric progression.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Tổng của 10 số hạng đầu cấp số nhân đã cho bằng 16",
        "content_en": "The sum of the first 10 terms is \\frac{3069}{16}.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Số hạng u1 = 96\n 1\n b) Sai: Công bội của cấp số nhân bằng q =\n 2\n 3 -1\n (1)\n c) Đúng: Ta có 24 = 96. \n 2\n [ 1 10 ]\n u1 (1 - q ) 96 1 - ( )\n 2  3069\n 10\n d) Đúng: Ta có S10 = =  =\n 1- q 1-\n 1 16\n 2\n16 \n {u - u2 = 54",
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
    "question_en": "Let (u_n) be a geometric progression with u_1=3, u_3=12, and a negative common ratio. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Công bội của cấp số cộng đó là q = -2 .",
        "content_en": "The common ratio is q=-2.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạng thứ 25 của cấp số nhân đó bằng -3.2 24 .",
        "content_en": "u_{25}=-3\\cdot 2^{24}.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Tổng 101 số hạng đầu của cấp số nhân đó bằng 1 - 2101 .",
        "content_en": "The sum of the first 101 terms is 1-2^{101}.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "u55 = u54 .u56",
        "content_en": "u_{55}=u_{54}u_{56}.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Vì dãy số ( un ) là một cấp số nhân có u1 = 3 , u3 = 12 và công bội q < 0\n Suy ra u3 = u1.q 2 \\Rightarrow 3.q 2 = 12 \\Rightarrow q = -2\n b) Sai: u25 = u1.q 24 = 3.( -2 ) = 3.224\n 24\n u1 (1 - q101 ) 3. [1 - ( -2 ) ]\n 101\n c) Sai: Tổng số hạng đầu của cấp số nhân đó là S101 = =   = 1 + 2101\n 1- q 1 - ( -2 )\n ( u55 ) = u55 = u55 ( u55 = u1.q54 > 0 )\n u55\n u54 .u56 = .u55 .q =\n 2\n d) Sai:\n q",
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
    "question_en": "According to the well-known chessboard legend, the inventor asks for 1 grain of rice on the first square, twice as many on each successive square, and the total over all 64 squares. Assume 100 grains have a mass of 20 g. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạt thóc ở 64 ô là một cấp số nhân có u 1 = 1; q = 2 .",
        "content_en": "The numbers of grains on the 64 squares form a geometric progression with u_1=1 and q=2.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạt thóc ở ô thứ tám là 2 8 .",
        "content_en": "The number of grains on the eighth square is 2^8.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Tổng khối lượng thóc của 64 ô trên bàn cờ là 364 tỉ tấn.",
        "content_en": "The total mass of rice on all 64 squares is about 364 billion metric tons.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Giả sử người đó muốn chở số thóc ở trên 32 ô đầu tiên về bằng tàu thủy, biết rằng mỗi chuyến tàu chở tối đa 10 tấn hàng hóa. Khi đó, người đó cần tối thiểu 85 chuyến tàu để chở hết số thóc đó.",
        "content_en": "If the rice from the first 32 squares is transported by ships carrying at most 10 metric tons per trip, at least 85 trips are required.",
        "is_correct": false
      }
    ],
    "solution_vi": "Số hạt thọc ở 64 ô là một cấp số nhân có u 1 = 1; q = 2 , khi đó số hạt thóc ở ô thứ 8 là\n u 8 = u1q 7 = 27 .\n Tổng số hạt thóc của 64 ô là: S64 = 1 + 2 + 22 + ... + 263 = 264 - 1 hạt thóc, do đó tổng khối lượng\n 20\n thóc trên 64 ô trên bàn cờ là: (264 - 1). ≈ 3.69x108 ( g ) = 369 (tỉ tấn).\n 100\n Tương tự, ta có khối lượng thóc của 32 ô đầu tiên là ( 232 - 1) .\n 20\n = 858993459 ≈ 859 (tấn)\n 100\n a) Đúng: Số hạt thóc ở 64 ô là một cấp số nhân có u 1 = 1; q = 2 .\n b) Sai: Số hạt thóc ở ô thứ tám là 2 7 .\n c) Sai: Tổng khối lượng thóc của 64 ô trên bàn cờ là 369 tỉ tấn.\n d) Sai:",
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
    "question_en": "Mr. Binh is an employee of Company A. On February 1, 2024, he is promoted to salary grade 4, earning 11,718,750 VND per month before tax and insurance. Under company rules, if he has neither disciplinary action nor a special award, he moves up one salary grade every 3 years, with a 25% increase over the preceding grade, up to grade 7. After grade 7, he moves to the over-scale salary scheme; each successive over-scale year is 1% higher than the previous year. He completed a one-year probationary period before the regular salary period. He plans to work for the company for 30 years in total. Determine whether each statement is true or false, rounding to the nearest VND where needed.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Lương bậc 5 của anh Bình sẽ là 14.500.000 đồng.",
        "content_en": "His grade-5 monthly salary is 14,500,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Lương bậc 1 của anh Bình là 6.000.000 đồng.",
        "content_en": "His grade-1 monthly salary is 6,000,000 VND.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Lương bậc 7 anh Bình là 23.250.000.",
        "content_en": "His grade-7 monthly salary is 23,250,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng tiền lương anh Bình nhận được kể từ khi hết tập sự đến khi nghỉ hưu là = 5.554.357.709",
        "content_en": "The total salary he receives from the end of probation until retirement is 5,554,357,709 VND.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Gọi u n là lương bậc n của anh Bình hàng tháng.\n Ta có un +1 = un + 25%un = un .1, 25 (n \\le 7)\n u n là cấp số nhân có công bội q = 1, 25 .\n Ta có u4 = 11.718.750 nên u5 = u4 × 1, 25 = 14.648.437,5 đồng\n u4\n b) Đúng: u4 = u1 × q3 \\Leftrightarrow u1 = = 6.000.000\n q3\n c) Sai: u7 = u1 × q 6 = 6.000.000 × 1, 256 = 22.888.184 đồng\n d) Đúng: Khi vượt khung, lương mỗi khung %, là cấp số nhân vn , (1 \\le n \\le 8 ) có số hạng đầu là\n v1 = u7 + 1%u7 = 1,01u7 , công bội là q′ = 1,01 .\n Anh Bình làm việc 30 năm liên tục, trong đó 1 năm tập sự, 21 năm lương theo bậc, 8 năm vượt\n khung. Mỗi bậc lương anh Bình nhận 36 tháng, lương vượt khung mỗi khung % anh nhận 12\n tháng. Tổng lương anh Bình nhận được kể từ khi hết tập sự đến khi nghỉ hưu là\n q7 - 1 q′8 - 1\n S = 36u1. + 12v1 = 5.554.357.709 đồng.\n q -1 q′ - 1",
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
    "question_en": "Five nonzero numbers a,b,c,d,e, in that order, form a geometric progression. Given that 1/a+1/b+1/c+1/d+1/e=10 and a+b+c+d+e=40, find S=abcde.",
    "options": [],
    "solution_vi": "1 1 1 1 1\n Gọi q ( q \\ne 0 ) là công bội của cấp số nhân a , b , c , d , e . Khi đó , , , , là cấp số\n a b c d e\n 1\n nhân có công bội .\n q\n Theo đề bài ta có:\n20 \n { 1 - q5\n a. = 40\n 1 - q { 1 - q5\n {a + b + c + d + e = 40   a. = 40\n   5\n  1 - q\n 1 1 1 1 1 \\Leftrightarrow  1- ( 1 ) \\Leftrightarrow \\Leftrightarrow a 2q 4 = 4 .\n + + + + = 10   5\n -\n  a b c d e 1  q  = 10  .\n 1 q 1\n = 10\n a .  a q 4 ( q - 1)\n  1-\n 1 \n  q\n Ta có S = abcde = a.aq.aq 2 .aq 3 .aq 4 = a 5 q10 nên S 2 = ( a 5q10 ) = ( a^2 q 4 ) = 45 .\n 2 5\n Suy ra S = 45 = 32 .\n {5u + 5u1 - u2 = u2 + 6",
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
    "question_en": "A bacterial culture doubles every 20 minutes. If there are initially 200 bacteria, how many bacteria will there be after 2 hours?",
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
    "question_en": "A 10-floor tower has a floor area of 6,144 m^2 on its lowest floor. Each floor has half the area of the floor immediately below it. Find the floor area of the top floor.",
    "options": [],
    "solution_vi": "9\n (1)\n Ta có: u10 = u1.q 9 = 6144.  = 12 ( m 2 ) .\n 2",
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
    "question_en": "The ground floor of a house is 0.5 m above the yard. The staircase from the ground floor to the second floor has 25 steps, each 16 cm high. Write a formula for the height of the nth step above the yard, and find the height of the second-floor level above the yard.",
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
    "question_en": "The frequencies produced by consecutive keys on an organ form a geometric progression. The middle A key has frequency 400 Hz, and the higher A key 12 keys above it has frequency 800 Hz. Find the common ratio, rounded to the nearest thousandth.",
    "options": [],
    "solution_vi": "Ta có $q^{12}=800/400=2$, nên $q=\\sqrt[12]{2}\\approx1{,}059463$. Làm tròn đến hàng phần nghìn được $q\\approx1{,}059$.",
    "solution_en": "",
    "correct_answer": "1.059",
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
    "question_en": "Vietnam had a population of about 97.6 million in 2020. If the population increases by an average of 1.14% per year, estimate the population in 2040, rounded to the nearest hundred thousand.",
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
    "question_en": "To save for her daughter's university education, Ms. Hoa deposits 500,000 VND into a savings account every month. The account earns 0.5% interest per month, compounded monthly. She begins when her daughter turns 3. How much will have accumulated immediately after the 180th deposit, and how old will her daughter be then?",
    "options": [],
    "solution_vi": "Gọi u n là số triệu đồng mà cô Hoa có trong chương trình tích luỹ ở lần gửi thứ n (vào đầu\n tháng thứ n ).\n Kí hiệu a = 0,5 triệu đồng, r = 0,5% .\n Số tiền của cô Hoa trong chương trình ở đầu tháng 1 là u1 = a .\n Số tiền của cô Hoa trong chương trình ở đầu tháng 2 là u2 = u1 (1 + r ) + a .\n Số tiền của cô Hoa trong chương trình ở đầu tháng 3 là\n u3 = u2 (1 + r ) + a = a (1 + r ) 2 + a (1 + r ) + a.\n Tương tự cho các tháng tiếp theo, suy ra số tiền của cô Hoa trong chương trình ở đầu tháng n\n (1 + r ) - 1 = a (1 + r ) - 1.\n n n\n là: un = a (1 + r ) + a (1 + r ) + …+ a (1 + r ) + a = a\n n -1 n-2\n (1 + r ) - 1 r\n (1 + r ) -1\n 180\n Vào thời điểm gửi khoản tiền thứ 180, cô ấy sẽ tích luỹ được u180 =a = 145, 41\n r\n (triệu đồng). Khi đó, tuổi của con gái cô Hoa là 3 + 180 :12 = 18 tuổi.",
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
    "question_en": "A medicine is taken once per day. The amount present in the patient's blood on the first day is 50 mg, and on each subsequent day it is half the amount on the preceding day. Find the total amount, in milligrams, over 10 consecutive days.",
    "options": [],
    "solution_vi": "Lượng thuốc trong máu mỗi ngày cảu bệnh nhân lập thành cấp số nhân với số hạng đầu là 50\n và công bội q = 0.5\n Tổng lượng thuốc trong máu 10 ngày liên tiếp chính là tổng 10 số hạng đầu cảu cấp số nhân\n 50 [1 - (0.5)10 ]\n này và bằng: Sn = = 99.902 ( mg )\n 1 - 0.5",
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
    "question_en": "Initially, a clock pendulum sweeps an arc of length 46 cm. On each successive swing, the arc length is 0.98 times that of the preceding swing. Find the total distance traveled over 15 swings, in centimeters, rounded to two decimal places.",
    "options": [],
    "solution_vi": "Gọi u n là độ dài cung tròn ở lần thứ n khi con lắc dao động. Do lần một, quả lắc đồng hồ dao\n động theo một cung tròn dài 46 cm , sau mỗi lần dao động liên tiếp, độ dài của cung tròn bằng\n 0,98 độ dài cung tròn ở ngay lần trước đó nên dãy số ( un ) lập thành cấp số nhân có u1 = 46 và\n công bội q = 0,98 .\n Sau 15 lần dao động, quả lắc sẽ đi được quãng đường tổng cộng là\n 1 - q15 1 - 0,9815\n S15 = u1 = 46 ≈ 601,29 ( cm ) .\n 1- q 1 - 0,98",
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
    "id": "src-pnl-1a4e9ff546e69d",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) , biết u1 = 1 , u4 = 64 . Tính công bội q của cấp số nhân đã cho",
    "question_en": "Let (u_n) be a geometric progression with u_1=1 and u_4=64. Find the common ratio q.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "q = 4 .",
        "content_en": "q=4.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "q = -4 .",
        "content_en": "q=-4.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "q = 21 .",
        "content_en": "q=21.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "q = 2 2 .",
        "content_en": "q=22.",
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
    "question_en": "Let (u_n) be a geometric progression with u_1=-2 and u_5=-162. Find the common ratio q.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "q = -3 .",
        "content_en": "q=-3.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "q = 3 .",
        "content_en": "q=3.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "q = 3; q = -3 .",
        "content_en": "q=3 or q=-3.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "q = -2 .",
        "content_en": "q=-2.",
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
    "question_en": "Let (u_n) be a geometric progression with u_1=2 and u_4=54. Find the common ratio q.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "9 .",
        "content_en": "9.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "27 .",
        "content_en": "27.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-3 .",
        "content_en": "-3.",
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
    "question_en": "Given a geometric progression $(u_n)$ with $u_1=2$ and common ratio $q=3$, find its fourth term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "24 .",
        "content_en": "24.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "54 .",
        "content_en": "54.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "162 .",
        "content_en": "162.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "48 .",
        "content_en": "48.",
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
    "question_en": "A geometric progression (u_n) has u_4=9 and u_5=81. Find its common ratio.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "72 .",
        "content_en": "72.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "18 .",
        "content_en": "18.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "9 .",
        "content_en": "9.",
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
    "question_en": "The three numbers $x^2,8,x$, in that order, form a geometric progression. Find $x$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x = 4",
        "content_en": "$x=4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "x = 5",
        "content_en": "$x=5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = 2",
        "content_en": "$x=2$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "x = 1",
        "content_en": "$x=1$.",
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
    "question_en": "Let (u_n) be a geometric progression with u_1=2 and q=3. Find u_{2019}.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2.32018 .",
        "content_en": "2\\cdot3^{2018}.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "3.2 2018 .",
        "content_en": "3\\cdot2^{2018}.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2.32019 .",
        "content_en": "2\\cdot3^{2019}.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3.2 2019 .",
        "content_en": "3\\cdot2^{2019}.",
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
    "question_en": "Given a geometric progression $(u_n)$ with $u_1=1$ and common ratio $q=2$, which term is equal to 1024?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "11 .",
        "content_en": "11.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "9 .",
        "content_en": "9.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8 .",
        "content_en": "8.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "10 .",
        "content_en": "10.",
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
    "question_en": "Given a geometric progression $(u_n)$ with first term $u_1=5$ and common ratio $q=-2$, find its sixth term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u6 = 320 .",
        "content_en": "$u_6=320$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u6 = -160 .",
        "content_en": "$u_6=-160$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u6 = -320 .",
        "content_en": "$u_6=-320$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u6 = 160 .",
        "content_en": "$u_6=160$.",
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
    "question_en": "Given a geometric progression $(u_n)$, $n\\ge1$, with common ratio $q=2$ and second term $u_2=5$, find its seventh term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u7 = 320 .",
        "content_en": "$u_7=320$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u7 = 640 .",
        "content_en": "$u_7=640$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u7 = 160 .",
        "content_en": "$u_7=160$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u7 = 80 .",
        "content_en": "$u_7=80$.",
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
    "question_en": "In a geometric progression, the fourth term is 4096 times the first term, and the sum of the first two terms is 34. Find the third term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1 .",
        "content_en": "1.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "512 .",
        "content_en": "512.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1024 .",
        "content_en": "1024.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "32 .",
        "content_en": "32.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u4 = 4096.u1 {q3 = 4096 {q = 16 {q = 16\n Theo bài ra ta có:  \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow .\n  1 2\n u + u = 34  1\n u .(1 + q ) = 34 17.u1 = 34 u1 = 2\n Vậy u3 = u1.q 2 = 2.162 = 512 .\n u3",
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
    "question_en": "A geometric progression (u_n) has sum of its first n terms S_n=5^n-1 for n=1,2,\\ldots. Find the first term u_1 and the common ratio q.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u1 = 5 , q = 4 .",
        "content_en": "u_1=5, q=4.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u1 = 5 , q = 6 .",
        "content_en": "u_1=5, q=6.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u1 = 4 , q = 5 .",
        "content_en": "u_1=4, q=5.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u1 = 6 , q = 5 .",
        "content_en": "u_1=6, q=5.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u1 = S1 = 5 - 1 = 4 {u1 = 4 u\n Ta có:  \\Rightarrow \\Rightarrow u1 = 4 , q = 2 = 5 .\n u1 + u2 = S2 = 5 - 1 = 24 u2 = 24 - u1 = 20\n 2\n u1\n {u - u2 = 54",
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
    "question_en": "Insert 7 numbers between 3 and 768 so that the resulting sequence is a geometric progression with u_1=3. Find u_5.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "72 .",
        "content_en": "72.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-48 .",
        "content_en": "-48.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "\\pm48 .",
        "content_en": "\\pm48.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "48 .",
        "content_en": "48.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u1 = 3 và u9 = 768 nên 768 = 3.q \\Rightarrow q8 = 256 \\Rightarrow q = \\pm2 .\n 8\n Do đó u5 = u1.q 4 = 3.24 = 48 .\n {u20 = 8u17",
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
    "question_en": "The sequence $(u_n)$ is defined by $u_1=2$ and $u_n=2u_{n-1}+3n-1$ for $n\\ge2$. Find $u_{2019}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u2019 = 5.22019 - 6062.",
        "content_en": "$u_{2019}=5\\cdot2^{2019}-6062$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u2019 = 5.22019 + 6062.",
        "content_en": "$u_{2019}=5\\cdot2^{2019}+6062$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u2019 = 5.22020 - 6062.",
        "content_en": "$u_{2019}=5\\cdot2^{2020}-6062$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u2019 = 5.22020 + 6062.",
        "content_en": "$u_{2019}=5\\cdot2^{2020}+6062$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un = 2un -1 + 3n - 1 \\Leftrightarrow un + 3n + 5 = 2 [un -1 + 3 ( n - 1) + 5] , với n \\ge 2 ; n \\in .\n Đặt vn = un + 3n + 5 , ta có vn = 2vn -1 với n \\ge 2 ; n \\in .\n Như vậy, ( vn ) là cấp số nhân với công bội q = 2 và v1 = 10 , do đó vn = 10.2n -1 = 5.2n .\n Do đó un + 3n + 5 = 5.2n , hay un = 5.2n - 3n - 5 với n \\ge 2 ; n \\in .\n Nên u2019 = 5.22019 - 6062.\n 3( n+4 )",
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
    "question_en": "Let (u_n) be a geometric progression with q<0, u_2=4, and u_4=9. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng đầu u1 = - 3 3",
        "content_en": "The first term is u_1=-\\frac{8}{3}.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Cấp số nhân có công bội q = - 2 27",
        "content_en": "The common ratio is q=-\\frac{3}{2}.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số hạng u5 = 2 2187",
        "content_en": "u_5=\\frac{27}{2}.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "- là số hạng thứ 8 32",
        "content_en": "-\\frac{2187}{32} is the eighth term of the progression.",
        "is_correct": false
      }
    ],
    "solution_vi": "u4 u1q 3 9 3\n a) Đúng: Ta có: u2 = u1q = 4, u4 = u1q 3 = 9 \\Rightarrow = \\Rightarrow = q 2 \\Rightarrow q = - (q < 0) .\n u2 u1q 4 2\n 3 ( 3) 8\n Thay q = - vào u 2 , ta được: u1  -  = 4 \\Rightarrow u1 = - .\n 2  2 3\n 8 3\n b) Đúng: Vậy cấp số nhân đã cho có số hạng đầu u1 = - và công bội q = - .\n 3 2\n n -1\n 8 ( 3)\n Khi đó un = - . - \n 3  2\n 27\n c) Sai: Vậy u5 = -\n 2\n16 \n 7\n 2187 8 ( 3)\n d) Sai: - \\ne - . -  nên không phải là số hạng thứ 8\n 32 3  2",
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
    "question_en": "In a lotus pond, the number of leaves each day is three times the number on the preceding day. If there is 1 leaf on day 1 and the pond is completely covered on day 10, determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Nếu ngày đầu có 9 lá sen thì tới ngày thứ 8 hồ sẽ đầy lá sen.",
        "content_en": "If there are 9 leaves on day 1, the pond will be completely covered on day 8.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số lá sen lập thành cấp số nhân ( un ) với u1 = 1 và công bội q = 3 .",
        "content_en": "The daily leaf counts form a geometric progression (u_n) with u_1=1 and q=3.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số lá sen lập thành cấp số cộng ( un ) với u1 = 1 và công sai d = 3 .",
        "content_en": "The daily leaf counts form an arithmetic progression (u_n) with u_1=1 and common difference d=3.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Nếu ngày đầu có 9 lá sen thì tới ngày thứ 9 hồ sẽ đầy lá sen.",
        "content_en": "If there are 9 leaves on day 1, the pond will be completely covered on day 9.",
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
    "question_en": "To save for her eldest son’s university education, Ms. Lan deposits 600 thousand VND at the beginning of every month into a savings account earning 0.5% compound interest per month. She begins when her son turns three years old. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Đến lần gửi khoản tiền thứ 180 thì cậu con trai tròn 18 tuổi.",
        "content_en": "At the 180th deposit, her son turns 18 years old.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Đến lần gửi khoản tiền thứ 180 thì cậu con trai tròn 18 tuổi.",
        "content_en": "At the 180th deposit, her son turns 18 years old.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số tiền của cô Lan có trong chương trình ở đầu tháng thứ 5 (làm tròn đến hàng nghìn) là 3.030.000 đồng.",
        "content_en": "At the beginning of the fifth month, the account balance, rounded to the nearest thousand VND, is 3,030,000 VND.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Số tiền của cô Lan có trong chương trình vào thời điểm cậu con trai đầu lòng tròn 18 tuổi nhỏ hơn 160 triệu đồng.",
        "content_en": "When her eldest son turns 18, the account balance is less than 160 million VND.",
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
    "question_en": "When his daughter is 4 years old, a parent plans to deposit x million VND at the beginning of each year so that she will have 200 million VND for university when she turns 18. The annual interest rate is 4.8% and is assumed constant. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tổng số tiền thu về sau 14 năm là một cấp số nhân có q = (1 + 4,8% ) .",
        "content_en": "The accumulated amounts generated by the annual deposits form a geometric progression with common ratio q=1+4.8%.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Tổng số tiền thu về sau 14 năm là một cấp số nhân có u1 = x .",
        "content_en": "The first term of that geometric progression is x.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "x = 10 (triệu đồng)",
        "content_en": "x=10 million VND.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Đến năm con gái được 10 tuổi, người này dự định khi con gái được 18 tuổi sẽ mua thêm cho con gái một chiếc xe máy trị giá 50 triệu đồng. Do đó, kể từ thời điểm đầu năm con gái được 10 tuổi người này cần gửi tiết kiệm y triệu đồng đến khi con gái 18 tuổi ( y \\in ) . Giá trị nhỏ nhất của y = 15 .",
        "content_en": "When the daughter turns 10, the parent additionally plans to have 50 million VND available for a motorbike when she turns 18. From the beginning of the year in which she turns 10, suppose the required annual deposit is y million VND. The smallest possible value of y is 15.",
        "is_correct": true
      }
    ],
    "solution_vi": "Số tiền người đó nhận được sau năm thứ nhất là: A1 = x (1 + 4,8% ) .\n Số tiền người đó nhận được sau năm thứ hai là: A2 = x (1 + 4,8% ) + x (1 + 4,8% ) 2 .\n Số tiền người đó nhận được sau năm thứ 14 là:\n A14 = x (1 + 4,8% ) + x (1 + 4,8% ) 2 + ... + x (1 + 4,8% ) 14 .\n {u1 = x (1 + 4,8% ) qn - 1 (1 + 4,8% ) - 1\n 14\n Khi đó: A14 có  nên A14 = u1 = x (1 + 4,8% ) .\n  q = (1 + 4,8% ) q - 1 4,8%\n 200.4,8%\n Suy ra: x = ≈ 9,873336 ≈ 10 (triệu đồng).\n (1 + 4,8% ) [(1 + 4,8% ) - 1]\n 14\n Khi x = 10 (triệu đồng).\n18 \n Gọi z = y - x là số tiền mà người đó phải gửi thêm mỗi năm kể từ năm con gái 10 tuổi (năm thứ\n 6) và P8 = z (1 + 4,8% ) + z (1 + 4,8% ) 2 + ... + z (1 + 4,8% ) 8 là số tiền nhận được sau 8 năm.\n Khi đó để nhận được số tiền 250 triệu đồng vào năm con gái 18 tuổi ( 8 năm kể từ con gái 10\n tuổi) thì:\n (1 + 4,8% ) - 1 ≈ 47,43 (triệu đồng).\n 14\n P8 = 250 - 10 (1 + 4,8% )\n 4,8%\n 47, 43.4,8%\n Suy ra z = ≈ 4,77 ≈ 5 (triệu đồng).\n (1 + 4,8% ) [(1 + 4,8% ) - 1]\n 8\n Vậy y = 15 (triệu đồng).\n a) Đúng: Tổng số tiền thu về sau 14 năm là một cấp số nhân có q = (1 + 4,8% ) .\n b) Sai: Tổng số tiền thu về sau 14 năm là một cấp số nhân có u1 = x (1 + 4,8% ) .\n c) Đúng: x = 10 (triệu đồng)\n d) Đúng: Đến năm con gái được 10 tuổi, người này dự định khi con gái được 18 tuổi sẽ mua thêm\n cho con gái một chiếc xe máy trị giá 50 triệu đồng. Do đó, kể từ thời điểm đầu năm con gái được\n 10 tuổi người này cần gửi tiết kiệm y triệu đồng đến khi con gái 18 tuổi ( y \\in ) . Giá trị nhỏ\n nhất của y = 15 .",
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
    "question_en": "Let (u_n) be a geometric progression with u_1=3 and q=-2. Which term of the progression is 192?",
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
    "question_en": "A geometric progression has common ratio 3 and first term 5. Its middle term is 32,805. How many terms does the progression have?",
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
    "question_en": "A geometric progression has 6 terms, common ratio 2, and sum 189. Find its last term u_6.",
    "options": [],
    "solution_vi": "{q = 2\n  {q = 2\n Theo giả thiết:  1 - q6 1 - 26 \\Leftrightarrow  \\Rightarrow u6 = u1q 5 = 3.25 = 96.\n  S6 = 189 = u1 1 - q = u1. 1 - 2 u1 = 3\n ",
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
    "question_en": "The numbers x+6y, 5x+2y, and 8x+y, in that order, form an arithmetic progression. At the same time, x-1, y+2, and x-3y, in that order, form a geometric progression. Find x^2+y^2.",
    "options": [],
    "solution_vi": "{( x + 6 y ) + ( 8 x + y ) = 2 ( 5 x + 2 y )\n Theo giả thiết ta có \n ( x - 1)( x - 3 y ) = ( y + 2 )\n 2\n { x = 3 y { x = 3 y { x = -6\n \\Leftrightarrow \\Leftrightarrow  2 \\Leftrightarrow  .\n ( 3 y - 1)( 3 y - 3 y ) = ( y + 2 ) 0 = ( y + 2 )  y = -2\n 2\n Suy ra x^2 + y^2 = 40.",
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
    "question_en": "Let a, b, c be an increasing sequence that, in this order, forms a geometric progression. The numbers a, b+8, c form an arithmetic progression, and a, b+8, c+64 form a geometric progression. Find P=a-b+2c.",
    "options": [],
    "solution_vi": "{ac = b^2 {ac = b^2 (1)\n  \n Ta có a + c = 2 ( b + 8 ) \\Leftrightarrow a - 2b = 16 - c ( 2) .\n  \n a ( c + 64 ) = ( b + 8 ) ac + 64a = ( b + 8 ) ( 3)\n 2 2\n Thay (1) vào (3) ta được: b^2 + 64a = b^2 + 16b + 64 \\Leftrightarrow 4a - b = 4 ( 4 ) .\n { c -8\n  a=\n {a - 2b = 16 - c \n Kết hợp (2) với (4) ta được:  \\Leftrightarrow\n 7\n ( 5)\n  4a - b = 4 b = 4c - 60\n  7\n Thay (5) vào (1) ta được:\n [c = 36\n 7 ( c - 8 ) c = ( 4c - 60 ) \\Leftrightarrow 9c - 424c + 3600 = 0 \\Leftrightarrow  100 \\Leftrightarrow c = 36 ( c \\in ).\n 2 2\n c =\n  9\n Với c = 36 \\Rightarrow a = 4, b = 12 \\Rightarrow P = 4 - 12 + 72 = 64.",
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
    "question_en": "The second, first, and third terms of a nonconstant arithmetic progression, in that order, form a geometric progression with common ratio q. Find q.",
    "options": [],
    "solution_vi": "Giả sử ba số hạng a; b; c lập thành cấp số cộng thỏa yêu cầu, khi đó b; a; c theo thứ tự đó lập\n thành cấp số nhân công bội q. Ta có\n {a + c = 2b [b = 0\n  \\Rightarrow bq + bq 2 = 2b \\Leftrightarrow  2 .\n  a = bq; c = bq 2\n  q + q - 2 = 0\n Nếu b = 0 \\Rightarrow a = b = c = 0 nên a; b; c là cấp số cộng công sai d = 0 (vô lí).\n Nếu q 2 + q - 2 = 0 \\Leftrightarrow q = 1 hoặc q = -2. Nếu q = 1 \\Rightarrow a = b = c (vô lí), do đó q = -2.",
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
    "question_en": "The four interior angles of a quadrilateral form a geometric progression, and the largest angle is 27 times the smallest angle. Find the sum of the largest and smallest angles.",
    "options": [],
    "solution_vi": "Giả sử 4 góc A, B, C, D (với A < B < C < D ) theo thứ tự đó lập thành cấp số nhân thỏa yêu cầu\n với công bội q.\n {q = 3\n { A + B + C + D = 360 { A (1 + q + q 2 + q 3 ) = 360 \n Ta có :  \\Leftrightarrow \\Leftrightarrow A = 9 \\Rightarrow A + D = 252.\n  D = 27 A  Aq = 27 A\n 3\n  D = Aq 3 = 243\n ",
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
    "question_en": "An 11-level tower is designed so that the top surface area of each level is half that of the level immediately below it. The top surface area of level 1 is half the area of the tower base, whose area is 12,288 m^2. Find the top surface area of level 11.",
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
    "question_en": "Which of the following sequences is not a geometric progression?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1; - 1; 1; - 1 .",
        "content_en": "$1,-1,1,-1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1; - 3; 9;10 .",
        "content_en": "$1,-3,9,10$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1; 0; 0;0 .",
        "content_en": "$1,0,0,0$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "32; 16; 8;4 .",
        "content_en": "$32,16,8,4$.",
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
    "question_en": "Which of the following sequences is not a geometric progression?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2; 4; 8; 16;",
        "content_en": "$2;4;8;16$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1; - 1; 1; - 1;",
        "content_en": "$1;-1;1;-1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "12 ; 22 ; 32 ; 42 ;",
        "content_en": "$1^2;2^2;3^2;4^2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "a; a^3 ; a 5 ; a 7 ; ( a \\ne 0 ).",
        "content_en": "$a;a^3;a^5;a^7$, where $a\\ne0$.",
        "is_correct": false
      }
    ],
    "solution_vi": "u 9 u\n Xét đáp án C: 12 ; 22 ; 32 ; 42 ; ⎯⎯\n → 2 = 4 =/ = 3\n u1 4 u2\n Các đáp án A, B, D đều là các cấp số nhân.\n .( a ) .\n 1 2 n\n a; a^3 ; a 5 ; a 7 ; ( a \\ne 0 ) ⎯⎯\n → là cấp số nhân và un = a^2 n -1 =\n a",
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
    "id": "src-pnl-d279e0000664ef",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) với u1 = -2 và q = -5. Viết bốn số hạng đầu tiên của cấp số nhân.",
    "question_en": "Given a geometric progression $(u_n)$ with $u_1=-2$ and $q=-5$, write its first four terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "-2; 10; 50; - 250.",
        "content_en": "$-2,10,50,-250$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-2; 10; - 50; 250.",
        "content_en": "$-2,10,-50,250$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-2; - 10; - 50; - 250.",
        "content_en": "$-2,-10,-50,-250$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-2; 10; 50; 250.",
        "content_en": "$-2,10,50,250$.",
        "is_correct": false
      }
    ],
    "solution_vi": ".\n {u1 = -2\n u = u q = 10\n {u1 = -2  2\n ⎯⎯\n →\n 1\n \n q = -5 u3 = u2 q = -50\n u4 = u3q = 250",
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
    "id": "src-pnl-5a0d29f9ec9e6f",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong các dãy số cho dưới đây, dãy số nào là cấp số nhân?",
    "question_en": "Which of the following sequences is a geometric progression?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1;2;3;4;5 .",
        "content_en": "$1,2,3,4,5$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1;3;6;9;12 .",
        "content_en": "$1,3,6,9,12$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2;4;6;8;10 .",
        "content_en": "$2,4,6,8,10$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2;2;2;2;2 .",
        "content_en": "$2,2,2,2,2$.",
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
    "question_en": "Which of the following sequences is a geometric progression?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1;2;3;4;5;6;... .",
        "content_en": "$1,2,3,4,5,6,\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2;4;6;8;16;32;... .",
        "content_en": "$2,4,6,8,16,32,\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-2; - 3; -4; - 5; -6; - 7;... .",
        "content_en": "$-2,-3,-4,-5,-6,-7,\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1;2;4;8;16;32;... .",
        "content_en": "$1,2,4,8,16,32,\\ldots$",
        "is_correct": true
      }
    ],
    "solution_vi": "u2 u3\n Nhận thấy \\ne nên các dãy số ở đáp án A, B và C không phải là cấp số nhân.\n u1 u2\n Riêng đối với dãy 1, 2, 4,8,16,32,... ở đáp án D thỏa mãn: un +1 = 2.un ∀n \\in *\n .\n Vậy dãy số 1, 2, 4,8,16,32,... là cấp số nhân với u1 = 1 và công bội q = 2 .",
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
    "question_en": "Which of the following sequences is a geometric progression?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1; 0, 2; 0,04; 0,0008; ...",
        "content_en": "$1;\\ 0.2;\\ 0.04;\\ 0.0008;\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2; 22; 222;2222; ...",
        "content_en": "$2;\\ 22;\\ 222;\\ 2222;\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x; 2 x; 3 x; 4 x; ...",
        "content_en": "$x;\\ 2x;\\ 3x;\\ 4x;\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1; - x^2 ; x^4 ; - x 6 ; ...",
        "content_en": "$1;\\ -x^2;\\ x^4;\\ -x^6;\\ldots$",
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
    "id": "src-pnl-a1da5fd95d0591",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xác định x để 3 số x - 2; x + 1; 3 - x theo thứ tự lập thành một cấp số nhân:",
    "question_en": "Find $x$ such that the three numbers $x-2$, $x+1$, and $3-x$, in that order, form a geometric progression.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Không có giá trị nào của x.",
        "content_en": "There is no such value of $x$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "x = \\pm1.",
        "content_en": "$x=\\pm1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = 2.",
        "content_en": "$x=2$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "x = -3.",
        "content_en": "$x=-3$.",
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
    "id": "src-pnl-804887ac649982",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Dãy nào sau đây là một cấp số nhân?",
    "question_en": "Which of the following sequences is a geometric progression?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1, 2,3, 4,... .",
        "content_en": "$1,2,3,4,\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1,3,5,7,... .",
        "content_en": "$1,3,5,7,\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2, 4,8,16,... .",
        "content_en": "$2,4,8,16,\\ldots$",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "2, 4,6,8,...",
        "content_en": "$2,4,6,8,\\ldots$",
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
    "question_en": "How many positive integer values of $x$ make the three numbers $1,x,x+2$, in that order, a geometric progression?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2 .",
        "content_en": "2.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3 .",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "0 .",
        "content_en": "0.",
        "is_correct": false
      }
    ],
    "solution_vi": "[ x = -1\n Để 1; x; x + 2 theo thứ tự đó lập thành một cấp số nhân thì: x^2 = x + 2 \\Leftrightarrow  .\n x = 2\n Vậy có đúng 1 số nguyên dương x = 2 .",
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
    "id": "src-pnl-5382937396b623",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số nhân ( un ) với u1 = 3 và công bội q = 2 . Số hạng tổng quát u n ( n \\ge 2 ) bằng",
    "question_en": "Let (u_n) be a geometric progression with u_1=3 and common ratio q=2. Which formula gives the general term u_n for n\\ge 2?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3.2n .",
        "content_en": "u_n=3\\cdot 2^n.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "3.2 n + 2 .",
        "content_en": "u_n=3\\cdot 2^{n+2}.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3.2 n +1 .",
        "content_en": "u_n=3\\cdot 2^{n+1}.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3.2 n -1 .",
        "content_en": "u_n=3\\cdot 2^{n-1}.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un = u1.q n -1 = 3.2n -1 .\n {u = 3",
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
    "question_en": "Aladdin finds a magic lamp. The genie grants him 3 wishes. He uses his first two wishes freely, but uses his last wish to ask that the next day he find the lamp again and receive twice as many wishes as on the current day. The genie agrees, and Aladdin follows this rule every day, always reserving his final wish to continue the arrangement. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Ngày thứ hai Aladin ước 6 điều.",
        "content_en": "On the second day, Aladdin has 6 wishes.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Ngày thứ ba Aladin ước 12 điều.",
        "content_en": "On the third day, Aladdin has 12 wishes.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Ngày thứ tư Aladin ước 48 điều.",
        "content_en": "On the fourth day, Aladdin has 48 wishes.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Sau 10 ngày gặp Thần đèn, Aladin ước tất cả 3269 điều ước",
        "content_en": "Over 10 days of meeting the genie, Aladdin has 3269 wishes in total.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Ngày thứ nhất Aladin ước 3 điều.\n Ngày thứ hai Aladin ước 2.3 điều.\n b) Đúng: Ngày thứ ba Aladin ước 2.2.3 = 22.3 điều.\n c) Sai: Ngày thứ tư Aladin ước 2 22 3 = 23 3 điều.\n Ngày thứ 10 Aladin ước 29.3 điều.\n ( 1 - 210 )\n d) Sai: Vậy sau 10 ngày Aladin đã ước: 3 (1 + 2 + 2 + 2 + …+ 2 ) = 3 \n 2 3 9\n  = 3069 điều.\n  1- 2 ",
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
    "question_en": "Two consecutive terms of a geometric progression are 16 and 36. Find the next term.",
    "options": [],
    "solution_vi": "Ta có cấp số nhân ( un ) có:\n {uk = 16 u 9\n  \\Rightarrow q = k +1 = ⎯⎯\n → uk + 2 = uk +1q = 81\n uk +1 = 36 uk 4",
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
    "question_en": "Find x so that 2, 8, x, and 128, in that order, form a geometric progression.",
    "options": [],
    "solution_vi": "Cấp số nhân 2; 8; x; 128 theo thứ tự đó sẽ là u1; u2 ; u3 ; u4 , ta có\n { u2 u3 {8 x\n u = u = { x = 32\n  1  2 8 { x = 32 \n \\Leftrightarrow \\Leftrightarrow 2 \\Leftrightarrow  [ x = 32 \\Leftrightarrow x = 32\n 2\n \n  =u u  128 x  x = 1024   x = -32\n 3 4\n = \n  u2 u3  x 8",
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
    "question_en": "Find x so that 1+x, 9+x, and 33+x, in that order, form a geometric progression.",
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
    "question_en": "The first three terms of a geometric progression are x-6, x, and y. Find y, given that the common ratio is 6.",
    "options": [],
    "solution_vi": "Cấp số nhân x - 6; x và y có công bội q = 6 nên ta có\n {u1 = x - 6, q = 6 { 36\n   x = 5\n  x = u2 = u1q = 6 ( x - 6 ) \\Rightarrow \n   y = 36. 36 = 1296 ≈ 259\n  y = u3 = u2 q = 36 x^2\n  5 5",
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
    "id": "src-pnl-181f914db6413d",
    "topic_id": "top-11-2-3",
    "type_id": "type-kntt-11-07-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một công ty xây dựng mua một chiếc máy ủi với giá 3 tỉ đồng. Cứ sau mỗi năm sử dụng, giá trị\n của chiếc máy ủi này lại giảm 20% so với giá trị của nó trong năm liền trước đó. Tìm giá trị còn\n lại của chiếc máy ủi đó sau 5 năm sử dụng.",
    "question_en": "A construction company buys a bulldozer for 3 billion VND. After each year of use, its value decreases by 20% from the value in the preceding year. Find the remaining value of the bulldozer after 5 years of use.",
    "options": [],
    "solution_vi": "Giá trị của chiếc máy ủi mỗi năm lập thành một cấp số nhân với số hạng đầu bằng 3 và công\n bội q = 0,8\n Giá trị của chiếc máy ủi sau 5 năm sử dụng là: u5 = 3 × 0,85 -1 = 0,1875 (tỷ đồng)",
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
    "question_en": "The annual population growth rate of province X is 1.4%. Its current population is 1.8 million. If this rate remains unchanged, what will the population be after 10 years?",
    "options": [],
    "solution_vi": "Theo giải thiết, ta thấy tỷ lệ tăng dân số hàng năm của tỉnh X là một cấp số nhân ( un ) với số\n 1, 4\n hạng đầu u1 = 1,8.106 và công bội q = 1 + = 1,014 .\n 100\n Do đó, dân số của tỉnh X sau 10 năm là: u11 = u1.q10 = 1,8.106 (1,014 ) ≈ 2068483 người.\n 10\n -----------------HẾT-----------------",
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
    "question_en": "Let $(u_n)$ be an arithmetic progression satisfying $u_3+u_{13}=80$. Find the sum of its first 15 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "800 .",
        "content_en": "800.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "600 .",
        "content_en": "600.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "570 .",
        "content_en": "570.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "630",
        "content_en": "630.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with first term $u_1=-6$ and common difference $d=4$, find the sum $S$ of its first 14 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S = 46 .",
        "content_en": "$S=46$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S = 308 .",
        "content_en": "$S=308$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S = 644 .",
        "content_en": "$S=644$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S = 280 .",
        "content_en": "$S=280$.",
        "is_correct": true
      }
    ],
    "solution_vi": "[ 2u1 + ( n - 1) d ] n\n Tổng n số hạng đầu tiên của một cấp số cộng là Sn =  .\n 2\n [ 2 ( -6 ) + (14 - 1) 4 ]14\n Vậy S =  = 280 .\n 2",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_2=8$ and $u_5=17$, find the common difference $d$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "d = -3 .",
        "content_en": "$d=-3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "d = -5 .",
        "content_en": "$d=-5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "d = 3 .",
        "content_en": "$d=3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "d = 5 .",
        "content_en": "$d=5$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u1 + d = 8 {d = 3\n Theo giả thiết ta có: u2 = 8, u5 = 17 \\Rightarrow  \\Leftrightarrow .\n  1\n u + 4 d = 17  1\n u = 5",
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
    "question_en": "Let $(u_n)$ be an arithmetic progression and let $S_n$ denote the sum of its first $n$ terms. Given $u_{21}=-19$ and $S_{22}=0$, find the general term $u_n$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = 21 + 2n .",
        "content_en": "$u_n=21+2n$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = 21 - 2n .",
        "content_en": "$u_n=21-2n$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = 23 - 2n .",
        "content_en": "$u_n=23-2n$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = 23 + 2n .",
        "content_en": "$u_n=23+2n$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử cấp số cộng có số hạng đầu là u1 và công sai d .\n {u21 = u1 + 20d\n {u21 = -19  {u1 + 20d = -19 {u = 21\n Ta có:  \\Leftrightarrow 22.21d \\Leftrightarrow  \\Leftrightarrow 1 .\n  22\n S = 0  22\n S = 22u1 +  1\n 2u + 21d = 0  d = -2\n 2\n Khi đó: un = u1 + ( n - 1) d = 21 - 2 ( n - 1) = 23 - 2n .",
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
    "id": "src-pnl-947de4b015bc4e",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho cấp số cộng ( un ) với u1 = 10 , u2 = 13 . Giá trị của u 4 là",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=10$ and $u_2=13$, find $u_4$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u4 = 20 .",
        "content_en": "$u_4=20$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u4 = 19 .",
        "content_en": "$u_4=19$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u4 = 16 .",
        "content_en": "$u_4=16$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u4 = 18 .",
        "content_en": "$u_4=18$.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_2=-1$ and $u_4=7$, find $u_3$.",
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
        "content_en": "10.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8 .",
        "content_en": "8.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "3.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=2$ and $u_4=8$, find $u_5$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "12 .",
        "content_en": "12.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "10 .",
        "content_en": "10.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "9 .",
        "content_en": "9.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "11 .",
        "content_en": "11.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_5=-15$ and $u_{20}=60$, find the sum of its first 20 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S20 = 250 .",
        "content_en": "$S_{20}=250$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S20 = 200 .",
        "content_en": "$S_{20}=200$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S 20 = -200 .",
        "content_en": "$S_{20}=-200$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S20 = -25 .",
        "content_en": "$S_{20}=-25$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u5 = -15\n Ta có \n {u1 + 4d = -15\n \\Leftrightarrow\n {u = -35\n \\Leftrightarrow 1\n ( u + u ) 20 = 250 .\n \\Rightarrow S20 = 1 20\n u20 = 60 u1 + 19d = 60 d = 5 2",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_3=6$ and $u_8=16$, find its common difference $d$ and the sum $S_{10}$ of its first 10 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "d = 2; S10 = 100 .",
        "content_en": "$d=2;\\ S_{10}=100$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "d = 1; S10 = 80 .",
        "content_en": "$d=1;\\ S_{10}=80$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "d = 2; S10 = 120 .",
        "content_en": "$d=2;\\ S_{10}=120$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "d = 2; S10 = 110 .",
        "content_en": "$d=2;\\ S_{10}=110$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u3 = 6 {u1 + 2d = 6 {u = 2\n Ta có:  \\Leftrightarrow \\Leftrightarrow 1 .\n u8 = 16 u1 + 7d = 16 d = 2\n 10 (10 - 1) 10 (10 - 1)\n S10 = 10.u1 + .d = 10.2 + .2 = 110 .\n 2 2",
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
    "question_en": "Given the arithmetic progression $(u_n)$ with $u_n=3-2n$, find $S_{60}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "-6960 .",
        "content_en": "$-6960$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-117 .",
        "content_en": "$-117$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-3840 .",
        "content_en": "$-3840$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "-116 .",
        "content_en": "$-116$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un +1 = 1 - 2n , Ta có un +1 - un = -2, ∀n \\in *\n , suy ra ( un ) là cấp số cộng có u1 = 1 và công\n 60\n sai d = -2 . Vậy S60 = ( 2u1 + 59d ) = -3840 .\n 2",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_{2013}+u_6=1000$, find the sum of its first 2018 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1009000 .",
        "content_en": "1009000.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "100800 .",
        "content_en": "100800.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1008000 .",
        "content_en": "1008000.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "100900 .",
        "content_en": "100900.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi d là công sai của cấp số cộng. Khi đó:\n u2013 + u6 = 1000 \\Leftrightarrow u1 + 2012d + u1 + 5d = 1000 \\Leftrightarrow 2u1 + 2017d = 1000 .\n 2017.2018\n Ta có: S2018 = 2018u1 + d = 1009.( 2u1 + 2017 d ) = 1009000 .\n 2\n {u + u = 8",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_4=-12$ and $u_{14}=18$, find the sum of its first 16 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S = 24 .",
        "content_en": "$S=24$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S = -25 .",
        "content_en": "$S=-25$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S = -24 .",
        "content_en": "$S=-24$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S = 26 .",
        "content_en": "$S=26$.",
        "is_correct": false
      }
    ],
    "solution_vi": "6 \n {u = -12 {u1 + 3d = -12 {u = -21\n Ta có:  4 \\Leftrightarrow \\Leftrightarrow 1 .\n u14 = 18 u1 + 13d = 18 d = 3\n 16.15\n Tổng của 16 số hạng đầu tiên của cấp số cộng là: S16 = 16.( -21) + .3 = 24 .\n 2\n {u2 - u3 + u5 = 10",
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
    "question_en": "An arithmetic progression $(u_n)$ has $u_1=5$ and the sum of its first 50 terms is 5150. Find the formula for the general term $u_n$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = 1 + 4n .",
        "content_en": "$u_n=1+4n$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = 5n .",
        "content_en": "$u_n=5n$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = 3 + 2n .",
        "content_en": "$u_n=3+2n$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = 2 + 3n .",
        "content_en": "$u_n=2+3n$.",
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
    "question_en": "For an arithmetic progression, the sum of the first $n$ terms is $S_n=5n^2+3n$, $n\\in\\mathbb N^*$. Find the first term $u_1$ and common difference $d$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u1 = -8; d = 10 .",
        "content_en": "$u_1=-8;\\ d=10$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u1 = -8; d = -10 .",
        "content_en": "$u_1=-8;\\ d=-10$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u1 = 8; d = 10 .",
        "content_en": "$u_1=8;\\ d=10$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u1 = 8; d = -10 .",
        "content_en": "$u_1=8;\\ d=-10$.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_5=18$ and $4S_n=S_{2n}$, find $u_1$ and the common difference $d$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u1 = 2 , d = 3 .",
        "content_en": "$u_1=2,\\ d=3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u1 = 3 , d = 2 .",
        "content_en": "$u_1=3,\\ d=2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u1 = 2 , d = 2 .",
        "content_en": "$u_1=2,\\ d=2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u1 = 2 , d = 4 .",
        "content_en": "$u_1=2,\\ d=4$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u5 = 18 \\Leftrightarrow u1 + 4d = 18 .\n ( 5.4 ) 10.9\n Lại có 4S5 = S10 \\Leftrightarrow 4  5u1 + d  = 10u1 + d \\Leftrightarrow 2u1 - d = 0 .\n  2  2\n {u + 4d = 18 {u = 2\n Khi đó ta có hệ phương trình  1 \\Leftrightarrow  1 .\n 2u1 - d = 0 d = 4\n a3",
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
    "question_en": "Let $(u_n)$ be an arithmetic progression and let $S_n$ be the sum of its first $n$ terms. Given $S_7=77$ and $S_{12}=192$, find the general term $u_n$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = 5 + 4n .",
        "content_en": "$u_n=5+4n$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = 3 + 2n .",
        "content_en": "$u_n=3+2n$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = 2 + 3n .",
        "content_en": "$u_n=2+3n$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = 4 + 5n .",
        "content_en": "$u_n=4+5n$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử cấp số cộng có số hạng đầu là u1 và công sai d .\n { 7.6.d\n  7u1 + = 77\n { 7\n S = 77  2 {7u1 + 21d = 77 {u = 5\n Ta có:  \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow 1 .\n  S12 = 192 12u + 12.11.d = 192 12u1 + 66d = 192 d = 2\n  1 2\n Khi đó: un = u1 + ( n - 1) d = 5 + 2 ( n - 1) = 3 + 2n .",
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
    "question_en": "An equilateral triangle $A_1B_1C_1$ has side length 4. The midpoints of its sides form triangle $A_2B_2C_2$; the midpoints of the sides of $A_2B_2C_2$ form triangle $A_3B_3C_3$; and so on. Let $P_1,P_2,P_3,\\ldots$ be the corresponding perimeters. Find $P=P_1+P_2+P_3+\\cdots$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "P = 8 .",
        "content_en": "$P=8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "P = 24 .",
        "content_en": "$P=24$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "P = 6 .",
        "content_en": "$P=6$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "P = 18 .",
        "content_en": "$P=18$.",
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
    "question_en": "An arithmetic progression has five terms. The sum of the first and fourth terms is 36, and the sum of the second and fifth terms is 44. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Dãy cấp số cộng có số hạng đầu u1 = 11.",
        "content_en": "The first term is $u_1=11$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Dãy cấp số cộng có tổng u1 + u5 = 40.",
        "content_en": "$u_1+u_5=40$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Dãy cấp số cộng có u2 = 16.",
        "content_en": "$u_2=16$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Tổng của 3 số hạng đầu tiên trong dãy cấp số cộng bằng 45.",
        "content_en": "The sum of the first three terms is 45.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u1 + u4 = 36 {u1 + ( u1 + 3d ) = 36 {2u1 + 3d = 36 {u = 12\n Ta có  \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow 1 .\n u2 + u5 = 44 ( u1 + d ) + ( u1 + 4d ) = 44 2u1 + 5d = 44 d = 4\n {\n u = u + d = 16\n  2 1\n Suy ra u1 + u5 = u1 + u1 + 4d = 40.\n \n  S3 = 3 ( u1 + u3 ) = 48\n  2\n a) Sai: Dãy cấp số cộng có số hạng đầu u1 = 12\n b) Đúng: Dãy cấp số cộng có tổng u1 + u5 = 40.\n c) Đúng: Dãy cấp số cộng có u2 = 16.\n d) Sai: Tổng của 3 số hạng đầu tiên trong dãy cấp số cộng bằng 48\n Vậy mệnh đề 2,3 là mệnh đề đúng và mệnh đề 1, 4 là mệnh đề sai.",
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
    "question_en": "An arithmetic progression $(u_n)$ has $u_1=4$ and the sum of its first 20 terms is $460$. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Dãy số ( un ) có d = 2.",
        "content_en": "The common difference is $d=2$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Dãy số ( un ) có u4 = 8.",
        "content_en": "$u_4=8$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Dãy số ( un ) có S10 = 120.",
        "content_en": "$S_{10}=120$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Dãy số ( un ) có hiệu S8 - S 4 = 60.",
        "content_en": "$S_8-S_4=60$.",
        "is_correct": true
      }
    ],
    "solution_vi": "20 ( u1 + u20 )\n Ta có: S20 = = 10 ( 4 + 4 + 19d ) = 460 \\Leftrightarrow d = 2.\n 2\n {\n u4 = u1 + 3d = 4 + 3.2 = 10\n \n  10 ( u1 + u9 )\n Suy ra  S10 = = 5 ( 4 + 4 + 8.2 ) = 120 .\n  2\n  8 ( u1 + u8 ) 4 ( u1 + u4 )\n  S8 - S 4 = - = 4 ( 2u1 + 7 d ) - 2 ( 2u1 + 3d ) = 4u1 + 22d = 60\n  2 2\n10 \n a) Đúng: Dãy số ( un ) có d = 2.\n b) Sai: Dãy số ( un ) có u4 = 8.\n c) Đúng: Dãy số ( un ) có S10 = 120.\n d) Đúng: Dãy số ( un ) có hiệu S8 - S 4 = 60.\n Vậy mệnh đề 1,3, 4 là mệnh đề đúng và mệnh đề 2 là mệnh đề sai.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=123$ and $u_3-u_{15}=84$, determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng thứ 17 của cấp số cộng là u17 = 11.",
        "content_en": "The 17th term is $u_{17}=11$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Công sai của cấp số cộng là d = -7.",
        "content_en": "The common difference is $d=-7$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số hạng thứ 2 của cấp số cộng là u2 = 130",
        "content_en": "The second term is $u_2=130$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng 17 số hạng đầu tiên của cấp số cộng là S17 = 1130",
        "content_en": "The sum of the first 17 terms is $S_{17}=1130$.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=-5$ and common difference $d=3$, determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số 100 là số hạng thứ 36 của cấp số cộng.",
        "content_en": "The number 100 is the 36th term of the progression.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạng thứ 3 của cấp số cộng bằng 5 .",
        "content_en": "The third term is 5.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Tổng 10 số hạng đầu tiên của cấp số cộng bằng 250 .",
        "content_en": "The sum of the first 10 terms is 250.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Kể từ số hạng thứ 3 thì các số hạng của cấp số cộng đều nhận giá trị dương.",
        "content_en": "Starting from the third term, all terms of the progression are positive.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_4=-12$ and $u_{14}=18$, determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Công sai của cấp số cộng là d = 3",
        "content_en": "The common difference is $d=3$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạng đầu của cấp số cộng là u1 = 21",
        "content_en": "The first term is $u_1=21$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số hạng thứ 9 của cấp số cộng là u9 = 3",
        "content_en": "The ninth term is $u_9=3$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Tổng 5 số hạng đầu của cấp số cộng là S5 = -60",
        "content_en": "The sum of the first five terms is $S_5=-60$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi u1 là số hạng đầu, d là công sai của cấp số cộng ( un ) .\n {u = u1 + 3d {u1 + 3d = -12 {d = 3\n Ta có:  4 \\Leftrightarrow \\Leftrightarrow .\n u14 = u1 + 13d u1 + 13d = 18 u1 = -21\n Số hạng thứ 9 là u9 = u1 + 8d = -21 + 8.3 = 3 .\n 5 ( 5 - 1)\n Tổng 5 số hạng đầu là S5 = 5u1 + d = -75 .\n 2\n a) Đúng: Công sai của cấp số cộng là d = 3\n b) Sai: Số hạng đầu của cấp số cộng là u1 = 21\n c) Đúng: Số hạng thứ 9 của cấp số cộng là u9 = 3\n d) Sai: Tổng 5 số hạng đầu của cấp số cộng là S5 = -60",
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
    "question_en": "A theater has 25 rows of seats. The first row has 16 seats, the second 18, the third 20, and each subsequent row has 2 more seats than the preceding row. Let $u_n$ be the number of seats in the $n$th row. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "u2 = 18",
        "content_en": "$u_2=18$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Dãy số ( un ) là cấp số cộng có công sai d = 2 .",
        "content_en": "The sequence $(u_n)$ is an arithmetic progression with common difference $d=2$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số ghế ở hàng thứ 20 nhỏ hơn 54 .",
        "content_en": "The 20th row has fewer than 54 seats.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng số ghế trong nhà hát nhiều hơn 1000 .",
        "content_en": "The theater has more than 1000 seats in total.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Số ghế trong các dãy ghế liên tiếp lập thành một cấp số cộng với số hạng đầu u1 = 16\n và công sai d = 2 .\n b) Đúng: u2 = u1 + d = 16 + 2 = 18 .\n c) Ta có u20 = u1 + 19d = 16 + 19.2 = 54 .\n Số ghế ở mỗi hàng của nhà hát lập thành một cấp số cộng, gồm 25 số hạng, với số hạng đầu\n u1 = 16 và công sai d = 2 . Tổng các số hạng này là\n 25 25\n d) Sai: S25 = u1 + u2 + …+ u25 = [ 2u1 + ( 25 - 1) d ] = ( 2.16 + 24.2 ) = 1000.\n 2 2",
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
    "question_en": "When signing an employment contract, a company offers two salary plans. Plan 1: the salary in the first year is 120 million VND; from the second year onward, the annual salary increases by 18 million VND each year. Plan 2: the salary in the first quarter is 24 million VND; from the second quarter onward, the quarterly salary increases by 1.8 million VND each quarter. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Trong phương án 1: dãy số tiền lương là cấp số cộng có số hạng đầu tiên là u1 = 120 , công sai d1 = 18 .",
        "content_en": "Under Plan 1, the annual salaries form an arithmetic progression with first term $u_1=120$ and common difference $d_1=18$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Trong phương án 1: tiền lương người lao động nhận được trong năm thứ ba là 174 triệu.",
        "content_en": "Under Plan 1, the salary in the third year is 174 million VND.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Trong phương án 1: tổng tiền lương người lao động nhận được trong ba năm là 414 triệu.",
        "content_en": "Under Plan 1, the total salary received over the first three years is 414 million VND.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Nếu kí hợp đồng lao động trong ba năm, với mong muốn nhận được tổng số tiền lương cao nhất thì người lao động nên chọn phương án 1.",
        "content_en": "For a three-year employment contract, the worker should choose Plan 1 to maximize total salary.",
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
    "question_en": "Binh wants to save enough money to buy a Honda CR-V costing 1.259 billion VND. In the first saving phase, each month he saves 2 million VND more than in the preceding month; in the 10th month he saves 21 million VND. By the end of this phase he has saved 624 million VND. In the second phase, to shorten the saving time, he starts with 5 million VND and doubles the amount saved each subsequent month. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Đợt thứ nhất anh Bình tích lũy tiền theo dãy số với cấp số cộng có công sai là d = 2 triệu và u1 = 3 triệu.",
        "content_en": "In the first phase, the monthly savings form an arithmetic progression with $u_1=3$ million VND and common difference $d=2$ million VND.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Anh Bình tích lũy tiền hết đợt thứ nhất trong 25 tháng.",
        "content_en": "The first saving phase lasts 25 months.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Đợt thứ hai anh Bình tích lũy tiền theo dãy số với cấp số nhân có công bội là q = 2 triệu và u1 = 5 triệu.",
        "content_en": "In the second phase, the monthly savings form a geometric progression with first term $u_1=5$ million VND and common ratio $q=2$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Để đủ tiền mua ôtô thì anh Bình thì anh Bình tích góp ít nhất 31 tháng 14",
        "content_en": "Binh must save for at least 31 months in total to have enough money to buy the car.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Đợt thứ nhất anh Bình tích lũy theo cấp số cộng Với công sai d = 2 triệu\n Theo đề bài ta có 21 = u1 + 9.2 \\Rightarrow u1 = 3 triệu.\n b) Sai: Hết đợt thứ nhất anh Bình có tất cả 624 triệu đồng nên ta có\n n [ 2u1 + (n - 1).3]\n Sn = 624 \\Rightarrow 624 = \\Rightarrow n = 24 tháng.\n 2\n c) Đúng: Theo đề Số tiền còn lại anh Bình tích góp theo cấp số nhân có công bội là q = 2 triệu\n và u1 = 5 triệu.\n d) Đúng: Số tiền cần tích lũy ở đợt hai là 1259 - 624 = 635 triệu đồng\n 1 - 2n\n Từ đó ta có 635 = 5. \\Rightarrow n = 7 tháng.\n 1- 2\n Tổng cộng hai đợt cần có ít nhất 24 + 7 = 31 tháng.",
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
    "question_en": "After graduating, a student starts working at a center with an annual salary of 100 million VND. Each year thereafter, the salary increases by 20 million VND. Let $u_n$ (million VND) be the salary in the $n$th year. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số tiền lương sinh viên nhận được ở năm thứ hai là 120 triệu đồng.",
        "content_en": "The salary in the second year is 120 million VND.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số tiền lương sinh viên nhận được ở năm thứ 10 là 300 triệu đồng.",
        "content_en": "The salary in the 10th year is 300 million VND.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Dãy số ( un ) là cấp số cộng có u1 = 120 và công sai d = 20",
        "content_en": "The sequence $(u_n)$ is an arithmetic progression with $u_1=120$ and common difference $d=20$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Giả sử, mỗi năm bạn sinh viên chi tiêu tiết kiệm hết 70 triệu đồng. Vậy sau ít nhất 12 năm thì sinh viên đó mua được căn chung cư 2 tỉ đồng.",
        "content_en": "If the student saves all salary above annual living expenses of 70 million VND, then after at least 12 years the student can afford a 2-billion-VND apartment.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta thấy, số tiền lương năm sau hơn năm trước 20 triệu đồng nên ( un ) là cấp số cộng có\n u1 = 100 và công sai d = 20 . Do đó: un = u1 + ( n - 1) d = 100 + ( n - 1) .20 = 20n + 80\n a) Đúng: Số tiền lương sinh viên nhận được ở năm thứ hai là u2 = 120 (triệu đồng).\n b) Sai: Số tiền lương sinh viên nhận được ở năm thứ 10 là u10 = 20.10 + 80 = 280 (triệu đồng).\n c) Sai: u1 = 100 .\n d) Sai: Tổng số tiền bạn sinh viên tiết kiệm được sau n năm là:\n n n\n S = [ 2u1 + ( n - 1) d ] - 70n = [ 2.100 + ( n - 1).20 ] - 70n = 10n 2 + 20n (triệu đồng).\n 2 2\n [ n \\ge 13,1\n Ta có: S \\ge 2000 \\Leftrightarrow 10n 2 + 20n - 2000 \\ge 0 \\Leftrightarrow  .\n  n \\le -15,1\n Do đó sau ít nhất sau 14 năm thì sinh viên đó có thể mua được chung cư 2 tỉ đồng.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ satisfying $u_3+u_{28}=100$, find the sum of its first 30 terms.",
    "options": [],
    "solution_vi": "Ta có: u3 + u28 = 100 \\Leftrightarrow ( u1 + 2d ) + ( u1 + 27d ) = 100 \\Leftrightarrow 2u1 + 29d = 100\n 30\n Mà S30 = ( 2u1 + 29d ) nên S30 = 15.100 = 1500 .\n 2\n {u = 2",
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
    "question_en": "A theater has 30 rows of seats. The first row has 25 seats, and each subsequent row has 3 more seats than the preceding row. How many seats are there in the theater altogether?",
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
    "question_en": "A total of 3003 trees are planted in triangular rows: the first row has 1 tree, the second has 2 trees, the third has 3 trees, and so on. How many rows are there in total?",
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
    "question_en": "An alarm clock strikes once per hour. At each exact hour after time 0, the number of strikes equals the hour shown on the clock. How many strikes does the clock make in one day?",
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
    "question_en": "An auditorium has 30 rows of seats. The first row has 15 seats, and each subsequent row has 4 more seats than the preceding row. How many seats are there in the auditorium altogether?",
    "options": [],
    "solution_vi": "Gọi u1 , u2 ,…, u30 lần lượt là số ghế của dãy ghế thứ nhất, dãy ghế thứ hai,., dãy ghế thứ ba mươi.\n Khi đó, ( un ) là một cấp số cộng có số hạng đầu u1 = 15 , công sai d = 4 (trong đó 1 \\le n \\le 30 ).\n Gọi S30 là tổng số ghế trong khán phòng.\n 30\n Ta có: S30 = u1 + u2 + …+ u30 = [ 2u1 + (30 - 1)d ] = 15(2.15 + 29.4) = 2190 .\n 2",
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
    "question_en": "On a board with many square cells, 7 chestnuts are placed in the first cell. Each subsequent cell receives 5 more chestnuts than the preceding cell. If 25,450 chestnuts are used in total to fill all cells through the $n$th cell, how many square cells are there?",
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
    "question_en": "On a terraced field, the lowest terrace (the first level) is 950 m above sea level, and each successive terrace is on average 1.5 m higher than the one below it. What is the elevation of the 12th terrace above sea level?",
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
    "question_en": "A tower clock strikes the hour number at each exact hour and strikes once at every half hour. From 1:00 a.m. through 12:00 noon, how many times does the clock strike in total?",
    "options": [],
    "solution_vi": "Lúc 1 giờ đêm, toà tháp đánh 1 tiếng chuông; lúc 2 giờ đêm, toà tháp đánh 2 tiếng chuông,.; lúc\n 12 giờ trưa, toà tháp đánh 12 tiếng chuông. Ngoài ra, mỗi 30 phút không phải là giờ đúng thì\n đánh 1 tiếng chuông (có 11 lần như thế từ 1 giờ đến 12 giờ).\n Vậy tổng số tiếng chuông là:\n (1 + 12) 12\n S = (1 + 2 + 3 + …+ 12) + 1 11 = + 11 = 89 ( tiếng chuông)\n 2",
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
    "question_en": "A well-drilling service charges 100 thousand VND for the first meter drilled. Starting from the second meter, each additional meter costs 30 thousand VND more than the immediately preceding meter. A family needs a 20 m deep well. How many thousand VND must the family pay in total?",
    "options": [],
    "solution_vi": "Gọi u n là giá của mét khoan thứ n , trong đó 1 \\le n \\le 20 .\n Khi đó, ( un ) là cấp số cộng có số hạng đầu u1 = 100 và công sai d = 30 .\n Số tiền mà gia đình phải thanh toán cho cơ sở khoan giếng là:\n 20 ( 2u1 + 19d ) 20(2.100 + 19.30)\n S20 = u1 + u2 + …+ u20 = = = 7700 (nghìn đồng).\n 2 2",
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
    "question_en": "A pyramid-shaped summer house has a square base 6.8 m by 6.8 m and height 2.72 m. Its four exterior walls are covered with rectangular brown bricks of dimensions $0.2\\text{ m}\\times0.08\\text{ m}\\times1\\text{ m}$. The top row contains 1 brick, and each row below contains one more brick than the row above. Estimate the total number of brown facing bricks needed for all four walls.",
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
    "id": "src-pnl-6b172bee450500",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Viết ba số hạng xen giữa các số 2 và 22 để được một cấp số cộng có năm số hạng.",
    "question_en": "Insert three terms between 2 and 22 so that the resulting five terms form an arithmetic progression.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "7; 12; 17,",
        "content_en": "7, 12, 17.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6; 10; 14.",
        "content_en": "6, 10, 14.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8; 13; 18.",
        "content_en": "8, 13, 18.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "6; 12; 18.",
        "content_en": "6, 12, 18.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giữa 2 và 22 có thêm ba số hạng nữa lập thành cấp số cộng, xem như ta có một cấp số cộng có\n 5 số hạng với u1 = 2; u5 = 22; ta cần tìm u2 , u3 , u4 .\n {u2 = u1 + d = 7\n u5 - u1 22 - 2 \n Ta có u5 = u1 + 4d \\Leftrightarrow d = = = 5 ⎯⎯\n → u3 = u1 + 2d = 12\n 4 4 u = u + 3d = 17\n  4 1",
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
    "question_en": "An arithmetic progression $(u_n)$ begins $5,9,13,17,\\ldots$. Find its general term $u_n$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = 5n + 1.",
        "content_en": "$u_n=5n+1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = 5n - 1.",
        "content_en": "$u_n=5n-1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = 4n + 1.",
        "content_en": "$u_n=4n+1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = 4n - 1.",
        "content_en": "$u_n=4n-1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Các số 5; 9; 13; 17; theo thứ tự đó lập thành cấp số cộng ( un ) nên\n {u1 = 5\n  ⎯⎯⎯\n CTTQ\n → un = u1 + ( n - 1) d = 5 + 4 ( n - 1) = 4n + 1\n d = u2 - u1 = 4\n 1",
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
    "question_en": "Which of the following sequences is not an arithmetic progression?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = -4n + 9.",
        "content_en": "$u_n=-4n+9$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = -2n + 19.",
        "content_en": "$u_n=-2n+19$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = -2n - 21.",
        "content_en": "$u_n=-2n-21$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = -2n + 15. 4",
        "content_en": "$u_n=-2n+15$.",
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
    "question_en": "Given the arithmetic progression $(u_n)$ with $u_n=5-2n$, find its common difference.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "d = 3 .",
        "content_en": "$d=3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "d = -2 .",
        "content_en": "$d=-2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "d = 1 .",
        "content_en": "$d=1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "d = 2 .",
        "content_en": "$d=2$.",
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
    "id": "src-pnl-929305eb4cd284",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xác định a để 3 số 1 + 2a;2a 2 - 1; -2a theo thứ tự thành lập một cấp số cộng? 3",
    "question_en": "Find $a$ such that the three numbers $1+2a$, $2a^2-1$, and $-2a$, in that order, form an arithmetic progression.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Không có giá trị nào của a .",
        "content_en": "There is no such value of $a$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "a = \\pm . 4 3",
        "content_en": "$a=\\pm\\dfrac{4}{3}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "a = \\pm3 .",
        "content_en": "$a=\\pm3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "a = \\pm . 2",
        "content_en": "$a=\\pm\\dfrac{\\sqrt3}{2}$.",
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
    "id": "src-pnl-4e56c81fd84859",
    "topic_id": "top-11-2-2",
    "type_id": "type-kntt-11-06-01",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Người ta trồng 3240 cây theo một hình tam giác như sau: hàng thứ nhất trồng 1 cây, hàng thứ hai trồng 2 cây, hàng thứ ba trồng 3 cây, …Xét tính đúng sai của các khẳng định sau:",
    "question_en": "A total of 3240 trees are planted in triangular rows: the first row has 1 tree, the second has 2 trees, the third has 3 trees, and so on. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số cây mỗi hàng lập thành một cấp số cộng ( un ) có số hạng đầu là u1 = 1 .",
        "content_en": "The numbers of trees in successive rows form an arithmetic progression $(u_n)$ with first term $u_1=1$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số cây mỗi hàng lập thành một cấp số cộng ( un ) có công sai là d = 2 .",
        "content_en": "The numbers of trees in successive rows form an arithmetic progression $(u_n)$ with common difference $d=2$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Có tất cả 80 hàng cây.",
        "content_en": "There are 80 rows in total.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Hàng thứ 20 trồng được 40 cây.",
        "content_en": "The 20th row contains 40 trees.",
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
    "question_en": "A new car costs 680 million VND. After each year of use, its value decreases by 50 million VND. Let $u_n$ (million VND) be the car’s value in its $n$th year of use. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "u2 = 630 .",
        "content_en": "$u_2=630$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Dãy số ( un ) là cấp số cộng với công sai d = 50 .",
        "content_en": "The sequence $(u_n)$ is an arithmetic progression with common difference $d=50$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Giá của chiếc ô tô sau 3 năm sử dụng lớn hơn 500 triệu đồng.",
        "content_en": "After 3 years of use, the car is worth more than 500 million VND.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Sau ít nhất 8 năm sử dụng thì giá của chiếc ô tô nhỏ hơn một nửa giá trị ban đầu của nó.",
        "content_en": "After at least 8 years of use, the car is worth less than half of its original value.",
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
    "question_en": "The height $x_n$ (in centimeters) of a normally developing $n$-year-old child is modeled by $x_n=75+5(n-1)$. a) What is the child’s height at age 3? b) Does the sequence $(x_n)$ form an arithmetic progression? On average, by how many centimeters does the child’s height increase each year?",
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
    "question_en": "The height $x_n$ (in centimeters) of a normally developing $n$-year-old child is modeled by $x_n=75+5(n-1)$. Does the sequence $(x_n)$ form an arithmetic progression? On average, by how many centimeters does the child’s height increase each year?",
    "options": [],
    "solution_vi": "Ta có: xn +1 = 75 + 5 ( n + 1 - 1) = 75 + 5n\n Xét hiệu xn +1 - xn = 75 + 5n - [75 + 5 ( n - 1) ] = 5\n Do đó ( xn ) là một cấp số cộng có số hạng đầu x1 = 75 và công sai d = 5 .",
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
    "question_en": "A new car costs 680 million VND. After each year of use, its value decreases by 55 million VND. Find the car’s remaining value after 5 years.",
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
    "question_en": "Find the first term $u_1$ and common difference $d$ of an arithmetic progression $(u_n)$ satisfying $u_9=5u_2$ and $u_{13}=2u_6+5$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u1 = 3 và d = 4 .",
        "content_en": "$u_1=3,\\ d=4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u1 = 3 và d = 5 .",
        "content_en": "$u_1=3,\\ d=5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u1 = 4 và d = 5 .",
        "content_en": "$u_1=4,\\ d=5$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u1 = 4 và d = 3 .",
        "content_en": "$u_1=4,\\ d=3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u1 + 8d = 5 ( u1 + d )\n Ta có: un = u1 + ( n - 1) d . Theo đầu bài ta có hệ phương trình: \n u1 + 12d = 2 ( u1 + 5d ) + 5\n {4u1 - 3d = 0 {u = 3\n \\Leftrightarrow \\Leftrightarrow 1 .\n u1 - 2d = -5 d = 4",
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
    "question_en": "Let $(u_n)$ be an arithmetic progression satisfying $u_1+u_3=8$ and $u_4=10$. Find its common difference.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6 .",
        "content_en": "6.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "2.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4 .",
        "content_en": "4.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u1 + u3 = 8 {u1 + u1 + 2d = 8 {2u1 + 2d = 8 {u = 1\n Ta có  \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow 1 .\n u4 = 10 u1 + 3d = 10 u1 + 3d = 10 d = 3\n Vậy công sai của cấp số cộng là d = 3 .\n2 \n {\n u - u + u = 7",
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
    "question_en": "An arithmetic progression $(u_n)$ has first term $u_1=3$ and common difference $d=-2$. Find the fifth term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u5 = 8 .",
        "content_en": "$u_5=8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u5 = 1 .",
        "content_en": "$u_5=1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u5 = -5 .",
        "content_en": "$u_5=-5$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u5 = -7 .",
        "content_en": "$u_5=-7$.",
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
    "question_en": "Given an arithmetic progression with $u_1=-3$ and $d=4$, choose the correct statement.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u5 = 15 .",
        "content_en": "$u_5=15$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u4 = 8 .",
        "content_en": "$u_4=8$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u3 = 5 .",
        "content_en": "$u_3=5$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u2 = 2 .",
        "content_en": "$u_2=2$.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=11$ and common difference $d=4$, find $u_{99}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "401 .",
        "content_en": "401.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "403 .",
        "content_en": "403.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "402 .",
        "content_en": "402.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "404 .",
        "content_en": "404.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=3$ and $u_2=-1$, choose the correct answer.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u3 = 4 .",
        "content_en": "$u_3=4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u3 = 7 .",
        "content_en": "$u_3=7$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u3 = 2 .",
        "content_en": "$u_3=2$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "u3 = -5 .",
        "content_en": "$u_3=-5$.",
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
    "question_en": "An arithmetic progression $(u_n)$ has $u_{13}=8$ and common difference $d=-3$. Find its third term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "50 .",
        "content_en": "50.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "28 .",
        "content_en": "28.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "38 .",
        "content_en": "38.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "44",
        "content_en": "44.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with first term $u_1=3$ and common difference $d=2$, find $u_7$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "15 .",
        "content_en": "15.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "17 .",
        "content_en": "17.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "19 .",
        "content_en": "19.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "13 .",
        "content_en": "13.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=2$ and common difference $d=4$, find $u_{2019}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8074 .",
        "content_en": "8074.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "4074 .",
        "content_en": "4074.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8078 .",
        "content_en": "8078.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4078 .",
        "content_en": "4078.",
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
    "question_en": "Find the 11th term of an arithmetic progression whose first term is 3 and whose common difference is $d=-2$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "-21 .",
        "content_en": "$-21$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "23 .",
        "content_en": "$23$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-19 .",
        "content_en": "$-19$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-17 .",
        "content_en": "$-17$.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with first term $u_1=-2$ and common difference $d=-7$, find $u_6$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "37 .",
        "content_en": "37.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-37 .",
        "content_en": "$-37$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-33 .",
        "content_en": "$-33$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "33 .",
        "content_en": "33.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with first term $u_1=2$ and common difference $d=2$, find $u_{2018}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u2018 = 22018 .",
        "content_en": "$2^{2018}$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u2018 = 22017 .",
        "content_en": "$2^{2017}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u2018 = 4036 .",
        "content_en": "4036.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u2018 = 4038 .",
        "content_en": "4038.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=3$ and common difference $d=7$, from which term onward are all terms greater than 2018?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "287 .",
        "content_en": "287.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "289 .",
        "content_en": "289.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "288 .",
        "content_en": "288.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "286 .",
        "content_en": "286.",
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
    "question_en": "Insert three numbers between 2 and 22 so that the five numbers form an arithmetic progression.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "6 , 12 , 18 .",
        "content_en": "6, 12, 18.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "8 , 13 , 18 .",
        "content_en": "8, 13, 18.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "7 , 12 , 17 .",
        "content_en": "7, 12, 17.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "6 , 10 , 14 .",
        "content_en": "6, 10, 14.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u1 = 2 {u1 = 2\n Xem cấp số cộng cần tìm là ( un ) có:  suy ra:  .\n u5 = 22 d = 5\n4 \n Vậy cấp số cộng cần tìm là ( un ) : 2 , 7 , 12 , 17 , 22 .",
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
    "question_en": "Given an arithmetic progression with $u_1=-2$ and $d=4$, choose the correct statement.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u4 = 8 .",
        "content_en": "$u_4=8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u5 = 15 .",
        "content_en": "$u_5=15$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u2 = 3 .",
        "content_en": "$u_2=3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u3 = 6 .",
        "content_en": "$u_3=6$.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=2$ and common difference $d=9$, which term of the progression is equal to 2018?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "226 .",
        "content_en": "226.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "225 .",
        "content_en": "225.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "223 .",
        "content_en": "223.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "224 .",
        "content_en": "224.",
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
    "question_en": "Given the arithmetic progression $1,4,7,\\ldots$, find its 100th term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "297 .",
        "content_en": "297.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "301 .",
        "content_en": "301.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "295 .",
        "content_en": "295.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "298 .",
        "content_en": "298.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=3$ and $u_8=24$, find $u_{11}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "30 .",
        "content_en": "30.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "33 .",
        "content_en": "33.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "32 .",
        "content_en": "32.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "28 .",
        "content_en": "28.",
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
    "question_en": "In an arithmetic progression, the third and seventh terms are 6 and $-2$, respectively. Find the fifth term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u5 = 2.",
        "content_en": "$u_5=2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u5 = -2.",
        "content_en": "$u_5=-2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u5 = 0.",
        "content_en": "$u_5=0$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u5 = 4.",
        "content_en": "$u_5=4$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u3 = 6 {u1 + 2d = 6 {d = -2\n \n Theo giả thiết ta có u = -2 \\Leftrightarrow  \\Leftrightarrow  . Vậy u5 = 2 .\n  7 u1 + 6d = -2 u1 = 10",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_2=3$ and $u_4=7$, find $u_{15}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "27 .",
        "content_en": "27.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "31 .",
        "content_en": "31.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "35 .",
        "content_en": "35.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "29 .",
        "content_en": "29.",
        "is_correct": true
      }
    ],
    "solution_vi": "{u1 + d = 3 {u = 1\n Từ giả thiết u2 = 3 và u4 = 7 suy ra ta có hệ phương trình:  \\Rightarrow 1 .\n u1 + 3d = 7 d = 2\n Vậy u15 = u1 + 14d = 29 .",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=123$ and $u_3-u_{15}=84$, which term of the progression is equal to 11?",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=-1$, $d=2$, and $u_n=43$, how many terms does the progression have?",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_2=1$ and $u_5=19$, which term is equal to 103?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "19 .",
        "content_en": "19.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "18 .",
        "content_en": "18.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "20 .",
        "content_en": "20.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "17 .",
        "content_en": "17.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u2 = 1 {u1 + d = 1 {u = -5\n Ta có  \\Leftrightarrow \\Leftrightarrow 1 .\n u5 = 19 u1 + 4d = 19 d = 6\n Lại có un = u1 + ( n - 1) d \\Leftrightarrow 103 = -5 + ( n - 1) 6 \\Leftrightarrow n = 19 .\n Vậy số 103 là số hạng thứ 19 trong cấp số cộng đã cho.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=5$ and common difference $d=-3$, suppose $-289$ is one of its terms. Which term is it?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "98 .",
        "content_en": "98.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "99 .",
        "content_en": "99.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "101 .",
        "content_en": "101.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "100 .",
        "content_en": "100.",
        "is_correct": false
      }
    ],
    "solution_vi": "Số hạng tổng quát của cấp số cộng có u1 = 5 và công sai d = -3 là un = 5 - 3 ( n - 1) , ∀n \\in ∗\n .\n Ta có -289 = 5 - 3 ( n - 1) \\Leftrightarrow -294 = -3 ( n - 1) \\Leftrightarrow 98 = n - 1 \\Leftrightarrow n = 99 .\n Vậy -289 là số hạng thứ 99 của cấp số cộng trên.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_2=2001$ and $u_5=1995$, find $u_{1001}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4005 .",
        "content_en": "4005.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "1.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3 .",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4003 .",
        "content_en": "4003.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi u1 và d lần lượt là số hạng đầu tiên và công sai của cấp số công.\n {u2 = 2001 {u1 + d = 2001 {u = 2003\n Ta có:  \\Leftrightarrow \\Leftrightarrow 1 . Vậy u1001 = u1 + 1000d = 3 .\n  5\n u = 1995  1\n u + 4 d = 1995  d = -2",
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
    "question_en": "An arithmetic progression has first term $u_1=2018$ and common difference $d=-5$. Starting from which term does the progression become negative?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u406 .",
        "content_en": "$u_{406}$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u403 .",
        "content_en": "$u_{403}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u405 .",
        "content_en": "$u_{405}$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "u404 . 6",
        "content_en": "$u_{404}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un = u1 + ( n - 1) d = 2018 - 5 ( n - 1)\n 2023\n Có un < 0 \\Leftrightarrow 2018 - 5 ( n - 1) < 0 \\Leftrightarrow 5n > 2023 \\Leftrightarrow n > , n\\in \\Rightarrow n \\ge 405 .\n 5\n Vậy từ u405 thì số hạng của cấp số cộng đó nhận giá trị âm.\n {u1 - 2u5 + u6 = -15",
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
    "question_en": "An arithmetic progression $(u_n)$ has common difference $d=2$, and the expression $u_2^2+u_3^2+u_4^2$ is minimized. Which term of the progression is equal to 2018?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1011 .",
        "content_en": "1011.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1014 .",
        "content_en": "1014.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1013 .",
        "content_en": "1013.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1012 .",
        "content_en": "1012.",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có:\n {u2 = u1 + 2\n \n u3 = u1 + 4 \\Rightarrow u2 + u3 + u4 = ( u1 + 2 ) + ( u1 + 4 ) + ( u1 + 6 ) = 3u1 + 24u1 + 56 = 3 ( u1 + 4 ) + 8 \\ge 8\n 2 2 2 2 2 2 2 2\n u = u + 6\n  4 1\n Vậy u22 + u32 + u42 đạt giá trị nhỏ nhất khi u1 = -4 .\n Từ đó suy ra 2018 = u1 + ( n - 1) d \\Leftrightarrow 2018 = -4 + ( n - 1) 2 \\Leftrightarrow n = 1012.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=-5$ and $d=2$, which term is equal to 81?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "100 .",
        "content_en": "100.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "50 .",
        "content_en": "50.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "75 .",
        "content_en": "75.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "44 .",
        "content_en": "44.",
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
    "question_en": "An arithmetic progression $(u_n)$ has $u_9=47$ and common difference $d=5$. Which term of the progression is equal to 10092?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2018 .",
        "content_en": "2018.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "2017 .",
        "content_en": "2017.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2016 .",
        "content_en": "2016.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2019 .",
        "content_en": "2019.",
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
    "question_en": "Consider the arithmetic progressions $(x_n):4,7,10,\\ldots$ and $(y_n):1,6,11,\\ldots$. Among the first 2018 terms of each progression, how many terms are common to both?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "404 .",
        "content_en": "404.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "673 .",
        "content_en": "673.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "403 .",
        "content_en": "403.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "672 .",
        "content_en": "672.",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=5$ and $d=-7$, determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "u11 = -65",
        "content_en": "$u_{11}=-65$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "u5 + u7 = -50",
        "content_en": "$u_5+u_7=-50$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số -849 là số hạng thứ 123 của cấp số cộng",
        "content_en": "The number $-849$ is the 123rd term of the progression.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Số -114 là số hạng thứ 18 của cấp số cộng",
        "content_en": "The number $-114$ is the 18th term of the progression.",
        "is_correct": true
      }
    ],
    "solution_vi": "Số hạng tổng quát của cấp số cộng là: un = u1 + ( n - 1) d = 5 + ( n - 1) .( -7 ) = -7 n + 12\n a) Đúng: Ta có: u11 = -7.11 + 12 = -65 .\n b) Sai: u5 + u7 = -60\n c) Đúng: Ta có: -849 = -7 n + 12 \\Rightarrow n = 123 .\n d) Đúng: Ta có -114 = -7 n + 12 \\Rightarrow n = 18\n {u - u + u = 15",
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
    "question_en": "Between the numbers $-3$ and $23$, insert $n$ terms so that all the numbers form an arithmetic progression with common difference $d=2$. Find $n$.",
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
    "question_en": "The numbers $\\binom{n}{1}$, $\\binom{n}{2}$, and $\\binom{n}{3}$, in that order, form an arithmetic progression, where $n>3$. Find $n$.",
    "options": [],
    "solution_vi": "Ba số Cn1 ; Cn2 ; Cn3 theo thứ tự u1 , u2 , u3 lập thành cấp số cộng nên\n u1 + u3 = 2u2 \\Leftrightarrow Cn1 + Cn3 = 2Cn2 ( n \\ge 3) \\Leftrightarrow n +\n ( n - 2 )( n - 1) n = 2. ( n - 1) n\n 6 2\n n 2 - 3n + 2 [n = 2\n \\Leftrightarrow 1+ = n - 1 \\Leftrightarrow n 2 - 9n + 14 \\Leftrightarrow  \\Leftrightarrow n = 7 ( n \\ge 3) .\n 6 n = 7\n Nhận xét: Nếu uk -1 , uk , uk +1 là ba số hạng liên tiếp của một cấp số cộng thì ta có uk -1 + uk +1 = 2uk .\n10",
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
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_2=2001$ and $u_5=1995$, find $u_{1001}$.",
    "options": [],
    "solution_vi": "{2001 = u2 = u1 + d {u = 2003\n  \\Leftrightarrow 1 ⎯⎯\n → u1001 = u1 + 1000d = 3\n 1995 = u5 = u1 + 4d d = -2",
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
    "question_en": "The three angles $A,B,C$ of a triangle, with $A<B<C$, form an arithmetic progression. The largest angle is twice the smallest angle. Find the difference, in degrees, between the largest and smallest angles.",
    "options": [],
    "solution_vi": "Ba góc A, B, C của một tam giác theo thứ tự đó lập thành cấp số cộng thỏa yêu cầu, thì\n C = 2 A, C + A = 2 B . Ta có\n { A + B + C = 1800 {3B = 1800 { B = 600 { A = 400\n    \n  A + C = 2B \\Leftrightarrow  A + C = 2 B \\Leftrightarrow  A + C = 1200 ⎯⎯\n →  B = 600 ⎯⎯\n → C - A = 400 .\n C = 2 A C = 2 A C = 2 A C = 800\n    ",
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
    "question_en": "The four numbers $5,x,15,y$, in that order, form an arithmetic progression. Calculate $3x+2y$.",
    "options": [],
    "solution_vi": "{ 5 + 15\n  x = 2 { x = 10\n Theo tính chất của cấp số cộng, ta có:  \\Leftrightarrow .\n  x + y = 15  y = 20\n  2\n Vậy 3 x + 2 y = 70 .\n {u + u4 + u6 = 36",
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
    "question_en": "Four real numbers form an arithmetic progression. Their sum is 28 and the sum of their squares is 276. Find the product of the four numbers.",
    "options": [],
    "solution_vi": "Gọi bốn số cần tìm theo thứ tự cấp số cộng là: a - 3r , a - r , a + r , a + 3r .\n {a - 3r + a - r + a + r + a + 3r = 28 {4a = 28\n Ta có:  \\Leftrightarrow 2\n (a - 3r ) + (a - r ) + (a + r ) + (a + 3r ) = 276 4a + 20r = 276\n 2 2 2 2 2\n {a = 7 {a = 7\n \\Leftrightarrow 2 \\Leftrightarrow .\n r = 4 r = \\pm2\n Vậy bốn số cần tìm là 1,5,9,13 ; tích của chúng bằng 585",
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
    "id": "src-pnl-c67316ef1ba259",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) biết un = 5n + 2 . Mệnh đề nào sau đây đúng?",
    "question_en": "Given the sequence $(u_n)$ with $u_n=5n+2$, which of the following statements is true?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Dãy số tăng",
        "content_en": "The sequence is increasing.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Dãy số giảm",
        "content_en": "The sequence is decreasing.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Dãy số không tăng, không giảm",
        "content_en": "The sequence is neither increasing nor decreasing.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Dãy số vừa tăng vừa giảm",
        "content_en": "The sequence is both increasing and decreasing.",
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
    "question_en": "Given the sequence $(u_n)$ with $u_n=2n^2+3n+1$, which of the following statements is true?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Dãy số tăng",
        "content_en": "The sequence is increasing.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Dãy số giảm",
        "content_en": "The sequence is decreasing.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Dãy số không tăng, không giảm",
        "content_en": "The sequence is neither increasing nor decreasing.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Dãy số vừa tăng vừa giảm",
        "content_en": "The sequence is both increasing and decreasing.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un +1 - un = 2 ( n + 1) + 3 ( n + 1) + 1 - 2n 2 - 3n - 1 = 4n + 5 > 0, ∀n \\in\n 2 *\n Vậy un +1 - un < 0 \\Leftrightarrow un +1 < un , ∀n \\in *\n Cho dãy số ( un ) biết un = ( -1) ( n 2 + 1) . Mệnh đề nào sau đây đúng?\n n",
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
    "question_en": "Given the sequence $(u_n)$ with $u_n=2n-an$, find all values of $a$ for which the sequence is increasing.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "a = 2",
        "content_en": "$a=2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "a > 2",
        "content_en": "$a>2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "a < 2",
        "content_en": "$a<2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "a \\ge 2",
        "content_en": "$a\\ge2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un +1 - un = 2n +1 - an - a - 2n + an = 2n - a, ∀n \\in *\n Để dãy số tăng thì un +1 - un = 2n - a > 0, ∀n \\in *\n \\Leftrightarrow a < 2n , ∀n \\in *\n \\Leftrightarrow a < 2, ∀n \\in *\n 3n",
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
    "question_en": "Which of the following sequences is decreasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = n 2 .",
        "content_en": "$u_n=n^2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = - 3 .",
        "content_en": "$u_n=-3$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "un = 3n .",
        "content_en": "$u_n=3n$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = n3 - 2 . n",
        "content_en": "$u_n=n^3-\\dfrac{2}{n}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Xét đáp án A, ta có un +1 - un = ( n + 1) - n 2 = 2n + 1 > 0, ∀n \\in\n 2 *\n nên dãy này là dãy tăng.\n 1 1 -1\n Xét đáp án B, ta có un +1 - un = - = < 0, ∀n \\in *\n nên dãy này là dãy giảm.\n n + 1 n n ( n + 1)\n Xét đáp án C, ta có un +1 - un = 3 ( n + 1) - 3n = 3 > 0, ∀n \\in *\n nên dãy này là dãy tăng.\n10 \n Xét đáp án D, ta có un +1 - un = ( n + 1) - n3 > 0, ∀n \\in\n 3 *\n nên dãy này là dãy tăng.",
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
    "question_en": "Given the sequence $(a_n)$ defined by $a_n=\\dfrac{7n+5}{kn+7}$, where $k$ is an integer, find the greatest integer value of $k$ for which the sequence is increasing.",
    "options": [],
    "solution_vi": "7n + 5 7 ( n + 1) + 5 7n + 12\n Ta có: an = và an +1 = = .\n kn + 7 k ( n + 1) + 7 kn + k + 7\n 7n + 12 7n + 5 -5k + 49\n Khi đó ta có: an +1 - ak = - =\n kn + k + 7 kn + 7 ( kn + k + 7 )( kn + 7 )\n -5k + 49 49\n Để dãy số tăng khi và chỉ khi an +1 - ak > 0, ∀k \\in \\Leftrightarrow >0\\Leftrightarrowk <\n ( kn + k + 7 )( kn + 7 ) 5\n Vậy số nguyên là lớn nhất là k = 9\n {u = 1; u2 = 2",
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
    "question_en": "At the beginning of each month, Mr. An deposits a fixed amount of 30 million VND in a bank account earning compound interest at 0.6% per month. How much money does he have after the second month?",
    "options": [],
    "solution_vi": "Số tiền ông An có được:\n 0,6 ( 0,6 )\n Sau tháng thứ nhất là: T1 = 30 + 30 = 30 1 +  = 30,18 (triệu đồng).\n 100  100 \n ( 0,6 ) [ ( 0,6 ) ] 0,6\n Sau tháng thứ hai: T2 = 30 + 30 1 +  + 30 + 30 1 + \n  100    100   100\n [ ( 0,6 ) ] ( 0,6 )\n 2\n ( 0,6 ) ( 0,6 )\n = 30 + 30 1 +   1 +  = 30 1 +  + 30 1 + \n   100    100   100   100 \n ≈ 60,54 (triệu đồng)",
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
    "question_en": "A photocopier costs 50 million VND when new. After each year of use, its value is 75% of its value in the preceding year. Find its remaining value at the end of each of the first five years after purchase.",
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
    "question_en": "If the annual inflation rate is 3.5% and the current average price of a new apartment is 2.5 billion VND, then after $n$ years its average price is $A_n=2.5(1.035)^n$ billion VND. Find the average price of a new apartment after 5 years.",
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
    "question_en": "Determine the boundedness of the sequence defined by $u_n=3n-1$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Bị chặn.",
        "content_en": "Bounded.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Bị chặn trên.",
        "content_en": "Bounded above.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Bị chặn dưới.",
        "content_en": "Bounded below.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Không bị chặn dưới.",
        "content_en": "Not bounded below.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un \\ge 2, ∀n \\in *\n → Dãy bị chặn dưới\n Khi n tiến tới dương vô cực thì u n cũng tiến tới dương vô cực nên dãy số không bị chặn trên\n Vậy dãy đã cho bị chặn dưới",
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
    "question_en": "Determine the monotonicity and boundedness of the sequence $(u_n)$ defined by $u_n=3n-2$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Dãy số tăng, bị chặn.",
        "content_en": "The sequence is increasing and bounded.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Dãy số giảm, bị chặn.",
        "content_en": "The sequence is decreasing and bounded.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Dãy số không tăng không giảm, không bị chặn.",
        "content_en": "The sequence is neither increasing nor decreasing, and it is unbounded.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Cả A, B, C đều sai.",
        "content_en": "All of A, B, and C are false.",
        "is_correct": false
      }
    ],
    "solution_vi": "4 \n 2n - 11 2n - 13 34\n Ta có: un +1 - un = - = > 0 với mọi n \\ge 1 .\n 3n + 1 3n - 2 ( 3n + 1)( 3n - 2 )\n 9\n Suy ra un +1 > un ∀n \\ge 1 \\Rightarrow dãy ( un ) là dãy tăng \\Rightarrow dãy bị chặn dưới bởi u1 = - .\n 4\n 2 35 9 2\n Mặt khác: un = - \\Rightarrow - \\le un < ∀n \\ge 1\n 3 3(3n - 2) 4 3\n Vậy dãy ( un ) là dãy bị chặn.\n n +1",
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
    "question_en": "Determine the boundedness of the sequence defined by $u_n=4-3n-n^2$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Bị chặn.",
        "content_en": "Bounded.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Không bị chặn.",
        "content_en": "Unbounded.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Bị chặn trên.",
        "content_en": "Bounded above.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Bị chặn dưới.",
        "content_en": "Bounded below.",
        "is_correct": false
      }
    ],
    "solution_vi": "2\n 25 ( 3 ) 25\n Ta có: un = -n +  < \\Rightarrow ( un ) bị chặn trên; dãy ( un ) không bị chặn dưới.\n 4  2 4",
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
    "question_en": "Determine the monotonicity and boundedness of the sequence $(u_n)$ defined by $u_n=n+2$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Tăng, bị chặn.",
        "content_en": "Increasing and bounded.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Giảm, bị chặn.",
        "content_en": "Decreasing and bounded.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Tăng, chặn dưới.",
        "content_en": "Increasing and bounded below.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Giảm, chặn trên.",
        "content_en": "Decreasing and bounded above.",
        "is_correct": false
      }
    ],
    "solution_vi": "n + 2 n + 1 ( n + 2 ) - ( n + 3)( n + 1)\n 2\n 1\n Ta có un +1 - un = - = = > 0, ∀n .\n n+3 n+2 ( n + 2 )( n + 3) ( n + 2 )( n + 3)\n n +1 n + 2\n Và 0 < un = < = 1,∀n \\in *\n . Vậy dãy ( un ) là dãy tăng và bị chặn.\n n+2 n+2",
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
    "question_en": "Determine the monotonicity and boundedness of the sequence $(u_n)$ defined by $u_n=n^3+2n+1$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Tăng, bị chặn.",
        "content_en": "Increasing and bounded.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Giảm, bị chặn.",
        "content_en": "Decreasing and bounded.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Tăng, chặn dưới.",
        "content_en": "Increasing and bounded below.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Giảm, chặn trên.",
        "content_en": "Decreasing and bounded above.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: un +1 - un = (n + 1)3 + 2(n + 1) - n3 - 2n = 3n 2 + 3n + 3 > 0, ∀n\n Mặt khác: un > 1, ∀n và khi n càng lớn thì u n càng lớn.\n Vậy dãy ( un ) là dãy tăng và bị chặn dưới.\n 3n - 1",
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
    "question_en": "Given the sequence $(u_n)$ with $u_n=\\cos n+\\sin n$, which of the following numbers is an upper bound for the sequence?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0.",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1.",
        "content_en": "$1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "$\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Không bị chặn trên.",
        "content_en": "The sequence is not bounded above.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un ⎯⎯⎯\n MTCT\n → u1 = sin1 + cos1 > 1 > 0 nên loại các đáp án A và B\n ( π)\n Ta có un = cos n + sin n = 2 sin  n +  < 2\n  4",
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
    "question_en": "Given the sequence $(u_n)$ with $u_n=\\cos n+\\sin n$, which of the following numbers is a lower bound for the sequence?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0.",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-1 .",
        "content_en": "$-1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "- 2 .",
        "content_en": "$-\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Không bị chặn dưới.",
        "content_en": "The sequence is not bounded below.",
        "is_correct": false
      }
    ],
    "solution_vi": "un ⎯⎯⎯\n MTCT\n → u5 = sin 5 - cos5 < -1 < 0 ⎯⎯\n → loại A và B\n ( π)\n Ta có un = 2 sin  n -  > - 2\n  4\n6 \n 1 1 1",
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
    "question_en": "Given the sequence $(u_n)$ defined by $u_n=2+5^{1-n}$, which of the following conclusions is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Dãy số không đơn điệu.",
        "content_en": "The sequence is not monotonic.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Dãy số giảm và không bị chặn.",
        "content_en": "The sequence is decreasing and unbounded.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Dãy số tăng.",
        "content_en": "The sequence is increasing.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Dãy số giảm và bị chặn.",
        "content_en": "The sequence is decreasing and bounded.",
        "is_correct": false
      }
    ],
    "solution_vi": "8 \n Xét un +1 - un = ( 2 + 5- n ) - ( 2 + 51- n ) = 5- n - 51- n =\n 1 1 1 5 4\n n\n - n-1 = n - n = - n < 0, ∀n \\in *\n .\n 5 5 5 5 5\n \\Rightarrow ( un ) là dãy số giảm.\n 5\n Ta có: un = 2 + 51- n > 2, ∀n \\in *\n \\le 3, ∀n \\in * \\Rightarrow ( un ) là dãy số bị chặn.\n ; un = 2 +\n n\n 5",
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
    "question_en": "Given the sequence $(u_n)$ defined by $u_n=\\dfrac12+\\dfrac1{2^2}+\\dfrac1{2^3}+\\cdots+\\dfrac1{2^n}$, which of the following statements is true?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Dãy số bị chặn dưới.",
        "content_en": "The sequence is bounded below.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Dãy số bị chặn trên.",
        "content_en": "The sequence is bounded above.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Dãy số bị chặn.",
        "content_en": "The sequence is bounded.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Không bị chặn.",
        "content_en": "The sequence is unbounded.",
        "is_correct": false
      }
    ],
    "solution_vi": "1 1 1 1\n Xét < = - , ∀k \\ge 2\n k 2\n ( k - 1) k k - 1 k\n 1 ( 1) (1 1) (1 1) (1 1) ( 1 1) 3 1 3\n Suy ra un < + 1 -  +  -  +  -  +  -  + ... +  - = - <\n 2  2  2 3  3 4  5 6  n -1 n  2 n 2\n 3\n \\Rightarrow 0 < un < , ∀n \\in * . Vậy ( un ) bị chặn.\n 2",
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
    "id": "src-pnl-ccc2653fc49bd7",
    "topic_id": "top-11-2-1",
    "type_id": "type-kntt-11-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho dãy số ( un ) , biết un = 3 cos n - sin n. Dãy số ( un ) bị chặn dưới và chặn trên lần lượt bởi\n các số m và M . Tính m + M",
    "question_en": "Given the sequence $(u_n)$ with $u_n=3\\cos n-\\sin n$, suppose it is bounded below by $m$ and above by $M$. Calculate $m+M$.",
    "options": [],
    "solution_vi": "( 3 1 ) ( π)\n Nhận xét: un = 2  sin n - cos n  = 2sin  n -  ⎯⎯\n →-2 \\le un \\le 2.\n  2 2  6\n  \n Vậy m = -2 ; M = 2 nên m + M = 0",
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
    "question_en": "Given the sequence $(u_n)$ with $u_n=\\sin n-\\cos n$, find a lower bound for the sequence.",
    "options": [],
    "solution_vi": "( π)\n Ta có un = 2 sin  n -  \\ge - 2\n  4",
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
    "question_en": "E. coli bacteria reproduce by binary fission, dividing into two every 20 minutes. Assume this rate is maintained from the time a single bacterium enters the body. How many E. coli bacteria are present after 12 hours? If an unlimited nutrient supply allows the same division rate to continue for 48 hours, how many bacteria are present after 48 hours?",
    "options": [],
    "solution_vi": "Cứ 20 phút số vi khuẩn tăng gấp đôi. Trong 12 giờ có $36$ chu kỳ 20 phút nên số vi khuẩn là $2^{36}$. Trong 48 giờ có $144$ chu kỳ nên số vi khuẩn là $2^{144}$. Câu hỏi có hai đáp số nên không dùng chấm tự động một ô.",
    "solution_en": "",
    "correct_answer": "2^36; 2^144",
    "math_skill": "Dãy số",
    "english_skill": "",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv",
    "variant_tag": "pnl-tln-11-5-day so bi chan-5",
    "grading_safe": false,
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
    "question_en": "A sequence begins $-2,0,2,4,6,\\ldots$. Which formula gives its general term?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un = -2n .",
        "content_en": "$u_n=-2n$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un = ( -2 ) + n .",
        "content_en": "$u_n=-2+n$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "un = ( -2 ) (n + 1) .",
        "content_en": "$u_n=(-2)(n+1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un = ( -2 ) + 2 ( n - 1) .",
        "content_en": "$u_n=-2+2(n-1)$.",
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
    "question_en": "Given the sequence $(u_n)$ with $u_n=n^3-8n^2-5n+7$, which term of the sequence is equal to $-33$?",
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
    "solution_vi": "[n = 8 ( n )\n Ta có un = -33 \\Leftrightarrow n3 - 8n 2 - 5n + 7 = -33 ( n \\in *\n ) \\Leftrightarrow n - 8n - 5n + 40 = 0 \\Leftrightarrow n = \\pm 5 l\n 3 2\n  ()\n n 2 + 3n + 7",
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
    "question_en": "Given the sequence $(u_n)$ with $u_n=2n$, find an expression for $u_{n+1}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "un +1 = 2n.2.",
        "content_en": "$u_{n+1}=2n\\cdot2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "un +1 = 2n + 1.",
        "content_en": "$u_{n+1}=2n+1$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "un +1 = 2 ( n + 1) .",
        "content_en": "$u_{n+1}=2(n+1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "un +1 = 2n + 2.",
        "content_en": "$u_{n+1}=2n+2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có un +1 = 2n +1 = 2.2n\n {u = 2",
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
    "question_en": "Consider the two arithmetic progressions $(u_n): 1,6,11,\\ldots$ and $(v_n):4,7,10,\\ldots$, each consisting of 2018 terms. How many numbers occur in both progressions?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "403 .",
        "content_en": "403.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "401 .",
        "content_en": "401.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "402 .",
        "content_en": "402.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "504 .",
        "content_en": "504.",
        "is_correct": false
      }
    ],
    "solution_vi": "Dãy ( un ) có số hạng tổng quát là un = 1 + 5 ( n - 1) = 5n - 4, (1 \\le n \\le 2018 ) .\n Dãy ( vm ) có số hạng tổng quát là vm = 4 + 3 ( m - 1) = 3m + 1, (1 \\le m \\le 2018 ) .\n {1 \\le m, n \\le 2018\n Một số có mặt trong cả hai dãy số trên nếu tồn ại m, n \\in thỏa mãn điều kiện: \n um = un (*)\n Ta có (*) \\Leftrightarrow 5n - 4 = 3m + 1 \\Leftrightarrow 5 ( n - 1) = 3m (**)\n Từ (**) suy ra m 5 , mặt khác 1 \\le m \\le 2018 nên ta được tập các giá trị của m là {5;10;...;2015}\n 3.2015\n Xét với m = 2015 thì n = + 1 = 1210 < 2018 , thỏa điều kiện 1 \\le n \\le 2018 .\n 5\n Do tập {5;10;...;2015} có 403 số nên có tất cả 403 số có mặt trong cả hai dãy đã cho.\n {u1 = 3",
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
    "question_en": "Given the sequence $(u_n)$ defined by $u_n=2n+3$, find its sixth term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "17 .",
        "content_en": "17.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5 .",
        "content_en": "5.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "15 .",
        "content_en": "15.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "7 .",
        "content_en": "7.",
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
    "question_en": "Given the sequence $(u_n)$ with $u_n=-n^2+n+1$, which term of the sequence is equal to $-19$?",
    "options": [],
    "solution_vi": "Giả sử un = -19 , ( n \\in *\n ).\n [n = 5\n Suy ra -n 2 + n + 1 = -19 \\Leftrightarrow - n 2 + n + 20 = 0 \\Leftrightarrow  .\n  n = -4 ( l )\n Vậy số -19 là số hạng thứ 5 của dãy.\n an + b",
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
    "id": "src-pnl-3213345202d2fa",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho hai véctơ a = (1; -2;1) và b = ( 2; -4; -2 ) . Khi đó a.b bằng",
    "question_en": "In Oxyz space, let $\\vec a=(1,-2,1)$ and $\\vec b=(2,-4,-2)$. Find $\\vec a\\cdot\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8.",
        "content_en": "$8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-8 .",
        "content_en": "$-8$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "12.",
        "content_en": "$12$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-12 .",
        "content_en": "$-12$.",
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
    "question_en": "In Oxyz space, let $\\vec u=(1,2,3)$ and $\\vec v=(0,-1,1)$. Find $\\vec u\\times\\vec v$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 5;1; -1) .",
        "content_en": "$(5,1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 5; -1; -1) .",
        "content_en": "$(5,-1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -1; -1; -1) .",
        "content_en": "$(-1,-1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( -1; -1;5 ) .",
        "content_en": "$(-1,-1,5)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: [u, v ] = ( 5; -1; -1) .",
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
    "question_en": "In Oxyz space, let $\\vec a=(-3,-1,1)$, $\\vec b=(4,1,2)$, and $\\vec c=(1,0,m+2)$. Find $m$ so that the three vectors are coplanar.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -5 .",
        "content_en": "$m=-5$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 5 .",
        "content_en": "$m=5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = -1 .",
        "content_en": "$m=-1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 1 .",
        "content_en": "$m=1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "( -1 1 1 -3 -3 -1 )\n Ta có : [ a, b ] =  ; ;  = ( -3;10;1) .\n  1 2 2 4 4 1 \n Mà [ a, b ] .c = ( -3) .1 + 1.( m + 2 ) = m - 1 .\n Ba véc tơ a , b , c đồng phẳng \\Leftrightarrow [ a, b ] .c = 0 \\Leftrightarrow m - 1 = 0 \\Leftrightarrow m = 1 .",
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
    "question_en": "In Oxyz space, given A(1,-2,0), B(1,0,-1), C(0,-1,2), and D(0,3,m), which interval contains m if the four points are coplanar?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -2; -1)",
        "content_en": "$(-2,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -1;1) .",
        "content_en": "$(-1,1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;2 ) .",
        "content_en": "$(1,2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 5;7 ) .",
        "content_en": "$(5,7)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = ( 0;2; -1) ; AC = ( -1;1;2 ) ; AD = ( -1;5; m )\n [ AB; AC ] = ( 5;1;2 )\n  \n A, B, C , D đồng phẳng \\Leftrightarrow [ AB; AC ] . AD = 0 \\Leftrightarrow 2m = 0 \\Leftrightarrow m = 0",
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
    "question_en": "In Oxyz space, let $\\vec a=(-1,3,2)$ and $\\vec b=(-3,-1,2)$. Find $\\vec a\\cdot\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "10 .",
        "content_en": "$10$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2 .",
        "content_en": "$2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "4 .",
        "content_en": "$4$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "$3$.",
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
    "question_en": "In Oxyz space, let $\\vec u=(-3,1,-1)$ and $\\vec v=(1,0,5)$. Find $\\vec u\\cdot\\vec v$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "-8 .",
        "content_en": "$-8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "8 .",
        "content_en": "$8$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3 .",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-3 .",
        "content_en": "$-3$.",
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
    "question_en": "In Oxyz space, let $\\vec u=(-1,3,2)$ and $\\vec v=(-3,-1,2)$. Find $\\vec u\\cdot\\vec v$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2 .",
        "content_en": "$2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "10 .",
        "content_en": "$10$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4 .",
        "content_en": "$4$.",
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
    "question_en": "In Oxyz space, let A(1,2,3), B(0,1,4), and C(2,3,-2). Find the area S of triangle ABC.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S = 2 2 .",
        "content_en": "$S=2\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S = 6 2 .",
        "content_en": "$S=6\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S = 4 2 .",
        "content_en": "$S=4\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S = 3 2 .",
        "content_en": "$S=3\\sqrt2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = ( -1; -1;1) , AC = (1;1; -5 )\n 1\n [ AB, AC ] = 2 2 .\n Vậy S∆ABC =\n 2 ",
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
    "question_en": "In Oxyz space, let $\\vec a=(3,-2,m)$ and $\\vec b=(2,m,-1)$. Find $m$ so that the vectors are perpendicular.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = 1 .",
        "content_en": "$m=1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 2 .",
        "content_en": "$m=2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = -1 .",
        "content_en": "$m=-1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = -2 .",
        "content_en": "$m=-2$.",
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
    "id": "src-pnl-e9460dc855386a",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ trục tọa độ Oxyz , điểm thuộc Ox và cách đều hai điểm A ( 4;2; -1) và B ( 2;1;0 ) là",
    "question_en": "In Oxyz space, which point on the x-axis is equidistant from A(4,2,-1) and B(2,1,0)?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "M ( -4;0;0 ) .",
        "content_en": "$M(-4,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "M ( 5;0;0 ) .",
        "content_en": "$M(5,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "M ( 4;0;0 ) .",
        "content_en": "$M(4,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "M ( -5;0;0 ) .",
        "content_en": "$M(-5,0,0)$.",
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
    "question_en": "Two vectors $\\vec a$ and $\\vec b$ form a $60^\\circ$ angle, with $|\\vec a|=2$ and $|\\vec b|=4$. Find $|\\vec a+\\vec b|$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2 5 .",
        "content_en": "$2\\sqrt5$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2 7 .",
        "content_en": "$2\\sqrt7$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "$2$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "8 3 + 20 .",
        "content_en": "$\\sqrt{8\\sqrt3+20}$.",
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
    "question_en": "In Oxyz space, triangle ABC has $\\vec{AB}=(-3,0,4)$ and $\\vec{AC}=(5,-2,4)$. Find the length of median AM.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 2 .",
        "content_en": "$3\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5 2 .",
        "content_en": "$5\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "4 2 .",
        "content_en": "$4\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2 3 .",
        "content_en": "$2\\sqrt3$.",
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
    "question_en": "In Oxyz space, let A(1,2,-1) and B(2,1,2). Point M lies on the positive x-axis and satisfies $MA^2+MB^2=23$. Find M.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "M ( 4;0;0 ) .",
        "content_en": "$M(4,0,0)$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "M ( 3;0;0 ) .",
        "content_en": "$M(3,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "M ( 2;0;0 ) .",
        "content_en": "$M(2,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "M (1;0;0 ) .",
        "content_en": "$M(1,0,0)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Điểm M thuộc trục Ox có hoành độ dương suy ra M ( a;0;0 ) , a > 0 .\n Ta có: MA = (1 - a;2; -1) , MB = ( 2 - a;1;2 ) .\n8 \n Giả thiết: MA2 + MB 2 = 23 \\Leftrightarrow (1 - a ) + 4 + 1 + ( 2 - a ) + 1 + 4 = 23 .\n 2 2\n [ a = -1, ( l )\n \\Leftrightarrow a^2 - 3a - 4 = 0 \\Leftrightarrow  . Vậy M ( 4;0;0 ) .\n  a = 4, ( t / m )",
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
    "question_en": "In Oxyz space, let $\\vec u=(-2,1,5)$ and $\\vec v=(m-2,3,m+1)$. Find $m$ so that $\\vec u\\perp\\vec v$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -4 .",
        "content_en": "$m=-4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 4 .",
        "content_en": "$m=4$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = -3 .",
        "content_en": "$m=-3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 3 .",
        "content_en": "$m=3$.",
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
    "question_en": "In Oxyz space, let A(1,1,4), B(5,-1,3), C(3,1,5), and D(2,2,m), where m is a real parameter. Determine the condition on m for A, B, C, and D to be the four vertices of a tetrahedron.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m \\ne 6 .",
        "content_en": "$m\\ne6$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "m \\ne 4 .",
        "content_en": "$m\\ne4$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m \\in .",
        "content_en": "$m\\in\\mathbb R$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m < 0 .",
        "content_en": "$m<0$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = ( 4; -2; - 1) , AC = ( 2;0;1) , AD = (1;1; m - 4 ) .\n [ AB, AC ] = ( -2; -6;4 ) , [ AB, AC ] . AD = -2 - 6 + 4 ( m - 4 ) = 4m - 24 .\n    \n Bốn điểm A , B , C , D tạo thành bốn đỉnh của một tứ diện khi và chỉ khi\n [ AB, AC ] . AD = 4m - 24 \\ne 0 \\Leftrightarrow m \\ne 6 .\n  ",
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
    "question_en": "In Oxyz space, let A(1,0,0), B(0,0,1), and C(2,1,1). Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Diện tích của tam giác ABC bằng (đvdt) 2",
        "content_en": "The area of triangle ABC is $\\dfrac{\\sqrt6}{2}$ square units.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Gọi D ( x; y; z ) sao cho tứ giác ABCD là một hình bình hành khi đó x + y + z = 3 30",
        "content_en": "Let D(x,y,z) be such that ABCD is a parallelogram. Then $x+y+z=3$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Độ dài đường cao của tam giác ABC hạ từ A bằng AH = (đơn vị dài) 5",
        "content_en": "The altitude from A in triangle ABC has length $AH=\\dfrac{\\sqrt{30}}5$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Thể tích của khối chóp SABCD với đỉnh S ( 0;3;4 ) bằng 2 (đvtt)",
        "content_en": "For S(0,3,4), the volume of pyramid SABCD is 2 cubic units.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Ta có AB = ( -1;0;1) , AC = (1;1;1)\n ( 0 1 1 1 -1 0 )\n Tính [ AB, AC ] =  ; ;  = ( -1;2; -1) \\ne 0\n  1 1 -1 1 1 1 \n Do đó 2 véc tơ AB và AC không cùng phương. Vậy A, B, C là 3 đỉnh của một tam giác\n 1 1 6\n Diện tích tam giác ABC : S∆ABC = [ AB, AC ] = ( -1) + 22 + ( -1) =\n 2 2\n (đvdt)\n 2 2 2\n b) Sai: ABCD là hình bình hành khi và chỉ khi AD = BC .\n Gọi D ( x; y; z ) ta có: AD = ( x - 1; y; z ) ; BC = ( 2;1;0 )\n {x -1 = 2 {x = 3\n  \n Vậy AD = BC \\Leftrightarrow  y = 1 \\Leftrightarrow y =1\n z = 0 z = 0\n  \n 1 6 6\n c) Đúng: Diện tích ∆ABC = AH BC = \\Leftrightarrow AH = .\n 2 2 BC\n 30\n Ta có BC = 5 \\Leftrightarrow AH = (đơn vị dài)\n 5\n d) Sai: Thể tích của khối chóp SABCD = V\n 1\n Ta có V = 2VSABC = [ AB, AC ] AS\n 3\n Tính AS = (-1;3;4) do kết quả câu 1 nên [ AB, AC ] . AS = 1 + 6 - 4 = 3 > 0 do đó V = 1 (đvtt)",
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
    "id": "src-pnl-f1f8da535a89ea",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian $Oxyz$, cho hai vectơ $\\vec u=(1;1;0)$ và $\\vec v=(2;0;-1)$. Tính độ dài $|\\vec u+2\\vec v|$, làm tròn đến hàng phần nghìn.",
    "question_en": "In $Oxyz$ space, let $\\vec u=(1,1,0)$ and $\\vec v=(2,0,-1)$. Find $|\\vec u+2\\vec v|$, rounded to three decimal places.",
    "options": [],
    "solution_vi": "Ta có $\\vec u+2\\vec v=(5;1;-2)$. Do đó $|\\vec u+2\\vec v|=\\sqrt{5^2+1^2+(-2)^2}=\\sqrt{30}\\approx5{,}477$.",
    "solution_en": "",
    "correct_answer": "5.477",
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
    "id": "src-pnl-d33d62d1de0a8e",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ trục tọa độ Oxyz , cho tứ diện ABCD có A ( 2; -1;1) , B ( 3;0; -1) ,\n C ( 2; -1;3) , D \\in Oy và thể tích tứ diện ABCD bằng 5 . Tổng tung độ của các điểm D thỏa mãn\n yêu cầu bài toán bằng",
    "question_en": "In Oxyz space, tetrahedron ABCD has A(2,-1,1), B(3,0,-1), C(2,-1,3), and D on the y-axis. Its volume is 5. Find the sum of the y-coordinates of all points D satisfying these conditions.",
    "options": [],
    "solution_vi": "Do D \\in Oy \\Rightarrow D ( 0; y;0 ) .\n Khi đó DA = ( 2; -1 - y;1) , DB = ( 3; - y; -1) , DC = ( 2; -1 - y;3) .\n Ta có [ DA, DB ] = (1 + 2 y;5; y + 3) .\n [ DA, DB ] . DC = 2 + 4 y - 5 - 5 y + 3 y + 9 = 2 y + 6 .\n  \n 1 [ 2 y + 6 = 30 [ y = 12\n Và VABCD = [ DA, DB ] .DC = 5 \\Leftrightarrow  \\Leftrightarrow .\n 6  2 y + 6 = -30  y = -18\n Vậy y1 + y2 = 12 - 18 = -6 .",
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
    "question_en": "In Oxyz space, let A(2,0,2), B(0,2,0), and C(1,0,3). Point M satisfies $MA^2+MC^2=MB^2$. Find $MP$, where P(3,-2,5).",
    "options": [],
    "solution_vi": "Gọi I ( x; y; z ) là điểm thỏa mãn IA + IC = IB (*) .\n Ta có IA = ( 2 - x; - y;2 - z ) ; IB = ( - x;2 - y; - z ) ; IC = (1 - x; - y;3 - z ) .\n {2 - x + 1 - x = - x {x = 3\n  \n Khi đó (*) \\Leftrightarrow - y - y = 2 - y \\Leftrightarrow  y = -2 \\Rightarrow I ( 3; - 2;5 ) ≡ P .\n 2 - z + 3 - z = - z z = 5\n  \n Suy ra IA = ( -1;2; - 3) \\Rightarrow IA2 = 14 ; IB = ( -3;4; - 5 ) \\Rightarrow IB 2 = 50 ; IC = ( -2;2; - 2 ) \\Rightarrow IC 2 = 12 .\n Ta có MA2 + MC 2 = MB 2 \\Leftrightarrow MA2 + MC 2 - MB 2 = 0 .\n ( ) ( ) - ( MI + IB )\n 2 2 2\n Khi đó MA2 + MC 2 - MB 2 = MI + IA + MI + IC\n = MI 2 + IA2 + 2MI .IA + MI 2 + IC 2 + 2MI .IC - MI 2 - IB 2 - 2MI .IB\n16 \n ( )\n = MI 2 + ( IA2 + IC 2 - IB 2 ) + 2MI IA + IC - IB = 0 hay\n \\Leftrightarrow MP 2 + (14 + 12 - 50 ) = 0 \\Leftrightarrow MP 2 = 24 \\Rightarrow MP = 2 6 .",
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
    "question_en": "Two drones take off from the same point. After some time, the first drone is 20 km north and 10 km west of the starting point at an altitude of 0.7 km. The second drone is 30 km east and 25 km south of the starting point at an altitude of 1 km. Find the distance between the two drones.",
    "options": [],
    "solution_vi": "Chọn hệ trục tọa độ Oxyz , với gốc đặt tại điểm xuất phát của hai chiếc máy bay, mặt phẳng\n ( Oxy ) trùng với mặt đất, trục Ox hướng về phía Bắc, trục Oy hướng về phía Tây, trục Oz\n hướng thẳng đứng lên trời, đơn vị đo lấy theo kilômét (xem hình vẽ).\n Chiếc máy bay thứ nhất có tọa độ ( 20;10;0,7 ) .\n Chiếc máy bay thứ hai có tọa độ ( -30; -25;1) .\n ( 20 + 30 ) + (10 + 25) + ( 0,7 - 1) ≈ 61( km )\n 2 2 2\n Do đó khoảng cách giữa hai chiếc máy bay là:",
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
    "question_en": "Two hot-air balloons take off from the same point. After some time, the first balloon is 100 km east and 80 km south of the starting point at an altitude of 1 km. The second balloon is 70 km north and 60 km west of the starting point at an altitude of 0.8 km. Find the distance between the two balloons.",
    "options": [],
    "solution_vi": "Chọn hệ trục tọa độ Oxyz , với gốc đặt tại điểm xuất phát của hai chiếc khinh khí cầu, mặt phẳng\n ( Oxy ) trùng với mặt đất, trục Ox hướng về phía Bắc, trục Oy hướng về phía Tây, trục Oz\n hướng thẳng đứng lên trời, đơn vị đo lấy theo kilômét (xem hình vẽ).\n Chiếc khinh khí cầu thứ nhất có tọa độ ( -100; -80;1) .\n Chiếc khinh khí cầu thứ hai có tọa độ ( 70;60;0,8 ) .\n Khoảng cách của chiếc khinh khí cầu thứ nhất với vị trí tại điểm xuất phát của nó là:\n ( -100 ) + ( -80 ) + 12 ≈ 128 ( km )\n 2 2\n Khoảng cách giữa chiếc khinh khí cầu thứ nhất và chiếc khinh khí cầu thứ hai là:\n ( -100 - 70 ) + ( -80 - 60 ) + (1 - 0,8) ≈ 220 ( km )\n 2 2 2",
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
    "question_en": "Three drones take off from the same point. After some time, the first drone is 60 km east and 40 km south of the starting point at an altitude of 2 km. The second drone is 80 km north and 50 km west of the starting point at an altitude of 4 km. The third drone is midway between the first two drones, and the three drones are collinear. Find the distance from the third drone to the starting point.",
    "options": [],
    "solution_vi": "Chọn hệ trục tọa độ Oxyz , với gốc đặt tại điểm xuất phát của hai chiếc máy bay, mặt phẳng\n ( Oxy ) trùng với mặt đất, trục Ox hướng về phía Bắc, trục Oy hướng về phía Tây, trục Oz\n hướng thẳng đứng lên trời, đơn vị đo lấy theo kilômét (xem hình vẽ).\n Chiếc máy bay thứ nhất có tọa độ ( -60; -40;2 ) .\n Chiếc máy bay thứ hai có tọa độ ( 80;50;4 ) .\n Do chiếc máy bay thứ ba nằm chính giữa của chiếc máy bay thứ nhất và thứ hai, đồng thời ba\n chiếc máy bay này thẳng hàng nên ở vị trí trung điểm, suy ra chiếc máy bay thứ ba có tọa độ\n ( -60 + 80 -40 + 50 2 + 4 )\n  ; ;  = (10;5;3) .\n  2 2 2 \n Khoảng cách giữa chiếc máy bay thứ nhất và chiếc máy bay thứ hai:\n ( -60 - 80 ) + ( -40 - 50 ) + ( 2 - 4 ) ≈ 166,4 ( km )\n 2 2 2\n Khoảng cách của chiếc máy bay thứ ba với vị trí tại điểm xuất phát của nó là:\n 102 + 52 + 32 ≈ 11,6 ( km )\n -----------------HẾT-----------------",
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
    "question_en": "In Oxyz space, let $\\vec a=2\\vec j-3\\vec k$ and $\\vec b=4\\vec i+\\vec j+\\vec k$. Find the length of $\\vec v=2\\vec a-\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "74 .",
        "content_en": "$\\sqrt{74}$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "3 6 .",
        "content_en": "$3\\sqrt6$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "5 2 .",
        "content_en": "$5\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "42 .",
        "content_en": "$\\sqrt{42}$.",
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
    "question_en": "In Oxyz space, given A(2,-1,5), B(5,-5,7), and M(x,y,1), if A, B, and M are collinear, find x and y.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x = 4; y = -7 .",
        "content_en": "$x=4,y=-7$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "x = -4; y = 7 .",
        "content_en": "$x=-4,y=7$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x = 4; y = 7 .",
        "content_en": "$x=4,y=7$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "x = -4; y = -7 .",
        "content_en": "$x=-4,y=-7$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = ( 3; - 4;2 ) ; AM = ( x - 2; y + 1; - 4 )\n x - 2 y + 1 -4 { x = -4\n Để ba điểm A, B, M thẳng hàng thì = = \\Rightarrow .\n 3 -4 2 y = 7",
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
    "question_en": "In Oxyz space, given A(1,2,-1), B(2,-1,3), and C(-3,5,1), find D so that ABCD is a parallelogram.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -2, 2,5 ) .",
        "content_en": "$(-2,2,5)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -4,8, -5 ) .",
        "content_en": "$(-4,8,-5)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -4,8, -3) .",
        "content_en": "$(-4,8,-3)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( -2,8, -3) .",
        "content_en": "$(-2,8,-3)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = (1, -3, 4 ) ; AC = ( -4,3, 2 ) Suy ra AB, AC không cùng phương.\n Gọi D ( x, y, z ) ; DC = ( -3 - x,5 - y,1 - z )\n { -3 - x = 1\n \n Tứ giác ABCD là hình bình hành \\Leftrightarrow AB = DC \\Leftrightarrow 5 - y = -3 \\Rightarrow D ( -4,8, -3)\n 1 - z = 4\n ",
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
    "question_en": "In Oxyz space, let A(1,-4,2), B(2,1,-3), C(3,0,-2), and D(2,-5,-1). Point G satisfies $\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$. Find G.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "G ( 2; -1; -1) .",
        "content_en": "$G(2,-1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "G ( 2; -2; -1) .",
        "content_en": "$G(2,-2,-1)$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "G ( 0; -1; -1) .",
        "content_en": "$G(0,-1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "G ( 6; -3; -3) .",
        "content_en": "$G(6,-3,-3)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: GA + GB + GC + GD = 0 \\Leftrightarrow GO + OA + GO + OB + GO + OC + GO + OD = 0\n \\Leftrightarrow 4OG = OA + OB + OC + OD \\Leftrightarrow OG =\n 1\n 4\n (OA + OB + OC + OD )\n6 \n { 1\n  xG = 4 ( x A + xB + xC + xD ) = 2\n \n  1\n \\Rightarrow  yG = ( y A + yB + yC + yD ) = -2 . Vậy G ( 2; -2; -1) .\n  4\n  1\n  zG = 4 ( z A + z B + zC + z D ) = - 1\n ",
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
    "question_en": "In Oxyz space, triangle ABC has A(1,-1,-2) and centroid G(2,1,-3). Find the coordinates of $\\vec u=\\vec{AB}+\\vec{AC}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 3;6;3) .",
        "content_en": "$(3,6,3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 3;6; -3) .",
        "content_en": "$(3,6,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 3; -3;6 ) .",
        "content_en": "$(3,-3,6)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 3;2;1) .",
        "content_en": "$(3,2,1)$.",
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
    "question_en": "In Oxyz space, $\\vec{PQ}=(0,1,-2)$, $\\vec{PR}=(-2,-1,0)$, and M(1,-2,2) is the midpoint of QR. Find Q.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -1;1; - 2 ) .",
        "content_en": "$(-1,1,-2)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -2;2; - 3) .",
        "content_en": "$(-2,2,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 0;1;3) .",
        "content_en": "$(0,1,3)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 2; - 1;1) .",
        "content_en": "$(2,-1,1)$.",
        "is_correct": true
      }
    ],
    "solution_vi": "{ xQ - xR = 2\n \n Ta có RQ = PQ - PR = ( 2;2; - 2 ) suy ra  yQ - yR = 2 (1) .\n \n  zQ - z R = -2\n { xQ + xR = 2\n \n Vì điểm M (1; - 2;2 ) trung điểm của đoạn QR nên  yQ + yR = -4 (2).\n \n  zQ + z R = 4\n Từ (1) và ( 2 ) suy ra Q ( 2; - 1;1) .",
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
    "question_en": "In Oxyz space, given A(1,2,-1), B(2,-1,3), and C(-2,3,3), point M(a,b,c) is the fourth vertex of parallelogram ABCM. Find $P=a^2+b^2-c^2$.",
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
    "solution_vi": "{a + 2 = 1 - 2 {a = -3\n  \n Tứ giác ABCM là hình bình hành khi và chỉ khi: CM = BA \\Leftrightarrow b - 3 = 2 - ( -1) \\Leftrightarrow b = 6.\n c - 3 = -1 - 3 c = -1\n  \n Suy ra: P = a^2 + b^2 - c^2 = ( -3) + 62 - ( -1) = 44.\n 2 2",
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
    "question_en": "In Oxyz space, given A(2,1,3) and B(4,-3,1), find the midpoint I of AB.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 6; -2;4 ) .",
        "content_en": "$(6,-2,4)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 3; -1;2 ) .",
        "content_en": "$(3,-1,2)$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "(1; -2; -1) .",
        "content_en": "$(1,-2,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 2; -4; -2 ) .",
        "content_en": "$(2,-4,-2)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{ x A + xB 2 + 4\n  xI = 2\n =\n 2\n =3\n \n  y + yB 1 + ( -3)\n Ta có tọa độ trung điểm I ( xI ; yI ; z I ) là  yI = A = = -1 \\Rightarrow I ( 3; -1;2 ) .\n  2 2\n  z A + zB 3 + 1\n  zI = 2 = 2 = 2\n ",
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
    "question_en": "In Oxyz space, let $\\vec a=(3,4,2)$, $\\vec b=(-5,0,3)$, and $\\vec c=(1,2,-4)$. Find $\\vec u=3\\vec a+2\\vec b-\\vec c$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u = ( -2;10;16 ) .",
        "content_en": "$(-2,10,16)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u = ( 2;10; -16 ) .",
        "content_en": "$(2,10,-16)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u = ( -1;5;8 ) .",
        "content_en": "$(-1,5,8)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u = ( -2; -10;16 ) .",
        "content_en": "$(-2,-10,16)$.",
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
    "question_en": "In Oxyz space, let $\\vec a=(-3,5,2)$, $\\vec b=(0,-1,3)$, and $\\vec c=(1,-1,1)$. Find $\\vec v=2\\vec a-3\\vec b+15\\vec c$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "v = ( -9;2;10 ) .",
        "content_en": "$(-9,2,10)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "v = ( 9; -1;10 ) .",
        "content_en": "$(9,-1,10)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "v = ( 9;2;10 ) .",
        "content_en": "$(9,2,10)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "v = ( 9; -2;10 ) .",
        "content_en": "$(9,-2,10)$.",
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
    "id": "src-pnl-bc6b12e0637791",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ toạ độ Oxyz , cho hai điểm A (1;2;3) , B ( -2; -4;9 ) . Điểm M thuộc đoạn AB sao cho MA = 2 MB . Độ dài đoạn thẳng OM là",
    "question_en": "In Oxyz space, given A(1,2,3) and B(-2,-4,9), point M lies on AB and satisfies MA=2MB. Find OM.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5 .",
        "content_en": "$5$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "3 .",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "54 .",
        "content_en": "$\\sqrt{54}$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "17 .",
        "content_en": "$\\sqrt{17}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Đặt M ( x ; y ; z ) , khi đó: MA = (1 - x ;2 - y ;3 - z ) và MB = ( -2 - x ; -4 - y ;9 - z )\n {1 - x = -2 ( -2 - x ) { x = -1\n  \n Ta có: MA = 2MB \\Rightarrow MA = -2MB \\Leftrightarrow 2 - y = -2 ( -4 - y ) \\Leftrightarrow  y = -2 \\Rightarrow M ( -1; -2;7 ) .\n  \n 3 - z = -2 ( 9 - z ) z = 7\n Khi đó: OM = ( -1; -2;7 ) . Vậy OM = 54 .",
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
    "question_en": "In Oxyz space, let G(1,-2,3), A(a,0,0), B(0,b,0), and C(0,0,c). If G is the centroid of triangle ABC, find $a+b+c$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3.",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "9.",
        "content_en": "$9$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "6.",
        "content_en": "$6$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "0.",
        "content_en": "$0$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{ x A + xB + xC { a\n  xG = 3 1 = 3\n   {a = 3\n  y A + yB + yC  b \n Ta có trọng tâm G của tam giác ABC :  yG = \\Leftrightarrow -2 = \\Leftrightarrow b = -6 .\n  3  3 \n  z A + z B + zC  c c = 9\n  zG = 3 = 3\n  3 \n Khi đó: a + b + c = 3 + ( -6 ) + 9 = 6 .",
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
    "question_en": "In Oxyz space, given A(1,1,1), B(2,3,2), and C(3,-1,3), find D so that A, B, C, D are the vertices of a rectangle.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "D ( 4;3;4 ) .",
        "content_en": "$D(4,3,4)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "D ( 4; -1;4 ) .",
        "content_en": "$D(4,-1,4)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "D ( 2; -3;2 ) .",
        "content_en": "$D(2,-3,2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "D ( 4;1;4 ) .",
        "content_en": "$D(4,1,4)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = (1;2;1) ; AC = (2; -2;2) , AB. AC = 1.2 + 2.( -2 ) + 1.2 = 0 nên AB ⊥ AC\n Điều này cho thấy A, B, C không thẳng hàng và hình chữ nhật tạo ra phải là ABDC .\n Gọi D ( x; y; z ) , ta có CD = ( x - 3; y + 1; z - 3) .\n {x - 3 = 1 {x = 4\n  \n Tứ giác ABDC là hình chữ nhật khi và chỉ khi AB = CD \\Leftrightarrow  y + 1 = 2 \\Leftrightarrow  y = 1 \\Rightarrow D ( 4;1;4 ) .\n z - 3 = 1 z = 4\n  \n Vậy D ( 4;1;4 )",
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
    "question_en": "In Oxyz space, line AB passes through A(-4,1,5) and B(1,5,-3), and meets plane (Oyz) at C. Which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "AC = - AB .",
        "content_en": "$\\vec{AC}=-\\dfrac14\\vec{AB}$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "AB = 5 BC .",
        "content_en": "$\\vec{AB}=5\\vec{BC}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "AC = 4 BC .",
        "content_en": "$\\vec{AC}=4\\vec{BC}$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "AC = -4 BC 4",
        "content_en": "$\\vec{AC}=-4\\vec{BC}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi C ( 0; a; b ) là giao điểm của đường thẳng AB và mặt phẳng ( Oyz ) . Khi đó A; B; C thẳng\n hàng hay AC và AB cùng phương.\n { 21\n  a=\n 4 a -1 b - 5 \n Lại có AB = ( 5;4; -8 ) ; AC = ( 4; a - 1; b - 5 ) nên =\n 5\n = \\Leftrightarrow .\n 5 4 -8 b = - 7\n  5\n {\n  AB = ( 5;4; -8 )\n \n  ( 16 32 )\n Khi đó  AC =  4; ; -  nên AC = -4 BC .\n   5 5 \n  ( 4 8)\n  BC =  -1; - ; \n   5 5",
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
    "question_en": "In Oxyz space, let $\\vec a=(1,1,-3)$, $\\vec b=(2,2,-2)$, $\\vec c=2\\vec i+2\\vec j-6\\vec k$, and $\\vec d=(1,1,-1)$. Which pair of vectors is parallel?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "a và b .",
        "content_en": "$\\vec a$ and $\\vec b$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "a và d .",
        "content_en": "$\\vec a$ and $\\vec d$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "a và c .",
        "content_en": "$\\vec a$ and $\\vec c$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "b và c .",
        "content_en": "$\\vec b$ and $\\vec c$.",
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
    "question_en": "In Oxyz space, given A(0,1,-1), B(1,2,0), and C(m,n,0), find m,n so that A, B, and C are collinear.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = 1; n = 1 .",
        "content_en": "$m=1,n=1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 1; n = 2 .",
        "content_en": "$m=1,n=2$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "m = 2; n = 1 .",
        "content_en": "$m=2,n=1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 2; n = 2 .",
        "content_en": "$m=2,n=2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = (1;1;1) ; AC = ( m; n - 1;1) .\n {m = k {m = 1\n   {m = 1\n Ba điểm A, B, C thẳng hàng AC = k AB \\Leftrightarrow n - 1 = k \\Leftrightarrow n = 2 \\Rightarrow  .\n 1 = k k = 1  n = 2\n  ",
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
    "question_en": "In Oxyz space, let $\\vec a=(-1,2x-1,1-3z)$ and $\\vec b=(2+3y,-1,-2)$. If $\\vec a=\\vec b$, find $T=x+2y^2+3z^3$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2 .",
        "content_en": "2.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5 .",
        "content_en": "5.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1 .",
        "content_en": "1.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4 .",
        "content_en": "4.",
        "is_correct": false
      }
    ],
    "solution_vi": "{-1 = 2 + 3 y { y = -1\n  \n Ta có a = b \\Leftrightarrow 2 x - 1 = -1 \\Leftrightarrow  x = 0 \\Rightarrow T = 0 + 2.( -1) + 3.13 = 5 .\n 2\n 1 - 3z = -2 z = 1\n  \n12",
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
    "question_en": "In Oxyz space, let A(6,-3,4) and B(a,b,c). Line AB meets coordinate planes (Oxy), (Oxz), and (Oyz) at M, N, and P, respectively. Suppose M, N, P lie on segment AB and AM=MN=NP=PB. Find a+b+c.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "17 .",
        "content_en": "17.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-17 .",
        "content_en": "-17.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-11 .",
        "content_en": "-11.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "11 .",
        "content_en": "11.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = ( a - 6; b + 3; c - 4 ) .\n Vì M , N , P lần lượt là giao điểm của AB với các mặt phẳng ( Oxy ) , ( Oxz ) và ( Oyz ) nên\n M ( xM ; yM ;0 ) , N ( xN ;0; z N ) , P ( 0; yP ; z P ) .\n Vì M , N , P nằm trên đoạn AB sao cho AM = MN = NP = PB nên ta có:\n {4 ( xM - 6 ) = a - 6 { 2 ( xN - 6 ) = a - 6\n  \n 4AM = AB \\Leftrightarrow  4 ( yM + 3) = b + 3 \\Rightarrow c = -12 ; 2AN = AB \\Leftrightarrow  2 ( 0 + 3) = b + 3\n  4 ( 0 - 4) = c - 4 2 ( z - 4) = c - 4\n   N\n \\Rightarrow b=3\n {4\n  3 ( 0 - 6) = a - 6\n \n 4 4\n AP = AB \\Leftrightarrow  ( yP + 3) = b + 3 \\Rightarrow a = -2 . Vậy a + b + c = -11 .\n 3 3\n 4\n  3 ( zP - 4 ) = c - 4\n ",
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
    "question_en": "In Oxyz space, let A(-1,4,2), B(3,2,1), and C(-2,0,2). Find all points D such that ABCD is a trapezoid with bases AD and BC, and the area of trapezoid ABCD is three times the area of triangle ABC.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "D ( 9;8;0 ) .",
        "content_en": "$D(9,8,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "D ( -11;0;4 ) và D ( 9;8;0 ) .",
        "content_en": "$D(-11,0,4)$ and $D(9,8,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "D ( -11;0;4 ) .",
        "content_en": "$D(-11,0,4)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "D (11;0; -4 ) và D ( -9; -8;0 ) .",
        "content_en": "$D(11,0,-4)$ and $D(-9,-8,0)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử D ( xD ; yD ; z D ) . Khi đó: AD = ( xD + 1; yD - 4; z D - 2 ) ; BC = ( -5; -2;1) .\n { xD = -1 - 5t\n \n Do AD / / BC nên AD = t BC ( t \\ne 0 ) \\Leftrightarrow  yD = 4 - 2t ; t \\ne 0.\n z = 2 + t\n  D\n Vì diện tích hình thang ABCD gấp ba lần diện tích tam giác ABC\n 1 1\n nên h.( BC + AD ) = 3. h.BC ,với h là chiều cao của hình thang và cũng chính là chiều cao\n 2 2\n tam giác ABC ứng với cạnh BC .\n Suy ra, AD = 2 BC \\Leftrightarrow ( xD + 1) + ( yD - 4 ) + ( zD - 2 ) = 4 [( -5 ) + ( -2 ) + 12 ]\n 2 2 2 2 2\n  \n [t = 2 \\Rightarrow D ( -11;0;4 )\n \\Rightarrow ( -5t ) + ( -2t ) + t 2 = 4.30 \\Leftrightarrow t 2 = 4 \\Leftrightarrow \n 2 2\n .\n t = -2 \\Rightarrow D ( 9;8;0 )",
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
    "question_en": "Given A(1,-2,3), B(-2,1,2), and C(3,-1,2), determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "AB = ( -3;3; -1) .",
        "content_en": "$\\vec{AB}=(-3,3,-1)$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "AC = ( -2; -1;1) .",
        "content_en": "$\\vec{AC}=(-2,-1,1)$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "AB = 3 AC .",
        "content_en": "$\\vec{AB}=3\\vec{AC}$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Ba điểm A, B, C không thẳng hàng.",
        "content_en": "A, B, and C are not collinear.",
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
    "question_en": "Given A(3,3,-6), B(1,3,2), and C(-1,-3,1), let M, N, and K be the midpoints of AB, BC, and CA, respectively. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tọa độ M ( 2;3;2 ) .",
        "content_en": "$M(2,3,2)$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Với G là trọng tâm tam giác ABC thì GC = 2 5 .",
        "content_en": "If G is the centroid of triangle ABC, then $GC=2\\sqrt5$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Trọng tâm tam giác MNK là E (1;1; -1) .",
        "content_en": "The centroid of triangle MNK is $E(1,1,-1)$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Với D ( -3; -3;9 ) thì tứ giác ABDC là hình bình hành.",
        "content_en": "If $D(-3,-3,9)$, then ABDC is a parallelogram.",
        "is_correct": true
      }
    ],
    "solution_vi": "( x + xB y A + yB z A + zB )\n a) Sai: M là trung điểm của AB , suy ra M  A ; ;  hay M ( 2;3; -2 ) .\n  2 2 2 \n b) Sai: Ta có G (1;1; -1) . Suy ra GC = (-1 - 1) 2 + (-3 - 1) 2 + (1 + 1) 2 = 2 6 .\n c) Đúng: Hai tam giác ABC và MNK có cùng trọng tâm. Suy ra E trùng với G (1;1; -1) .\n d) Đúng: Ta có AC = ( -4; -6;7 ) , BD = ( -4; -6;7 ) suy ra AC = BD .\n Vậy ABDC là hình bình hành.",
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
    "question_en": "In Oxyz space, given A(1,-2,5) and B(-2,-2,1), find the length AB.",
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
    "question_en": "In Oxyz space, let A(1,-4,2), B(2,1,-3), C(3,0,-2), and D(2,-5,-1). Point G satisfies $\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$. Find the x-coordinate of G.",
    "options": [],
    "solution_vi": "Tọa độ điểm G thỏa mãn:\n { x A + xB + xC + xD 1 + 2 + 3 + 2\n  xG = 4\n =\n 4\n =2\n \n  y A + yB + yC + yD -4 + 1 + 0 + ( -5 )\n  yG = = = -2 \\Rightarrow G ( 2; -2; -1)\n  4 4\n  z A + z B + zC + z D 2 + ( -3) + ( -2 ) + ( -1)\n  zG = = = -1\n  4 4",
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
    "question_en": "In Oxyz space, A(3,2,-1), B(-1,-x,1), and C(7,-1,y) are collinear. Find x+y.",
    "options": [],
    "solution_vi": "Ta có AB = ( -4; - x - 2;2 ) ; AC = ( 4; -3; y + 1) .\n {-4 = k .4 {k = -1\n  \n Để A, B, C thẳng hàng thì AB = k AC \\Leftrightarrow - x - 2 = k .( -3) \\Leftrightarrow  x = -5 .\n   y = -3\n 2 = k .( y + 1) \n Vậy x + y = -5 - 3 = -8 .",
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
    "id": "src-pnl-218a6df8025cc2",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho hai điểm A (1;2;3) , B ( -2; -4;9 ) . Điểm M thuộc đoạn\n AB sao cho MA = 2 MB . Bình phương độ dài đoạn thẳng OM bằng bao nhiêu?",
    "question_en": "In Oxyz space, given A(1,2,3) and B(-2,-4,9), point M lies on AB and satisfies MA=2MB. Find $OM^2$.",
    "options": [],
    "solution_vi": "Gọi M ( x; y; z ) .\n Vì điểm M thuộc đoạn AB sao cho MA = 2 MB nên\n20 \n {3.( -2 - x ) = -3 { x = -1\n  \n AB = 3MB \\Leftrightarrow 3.( -4 - y ) = -6 \\Leftrightarrow  y = -2\n   z = 7.\n 3.( 9 - z ) = 6 \n \\Rightarrow M ( -1; -2;7 ) \\Rightarrow OM = 1 + 4 + 49 = 54 \\Rightarrow OM 2 = 54 .",
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
    "id": "src-pnl-ed20a467331f0f",
    "topic_id": "top-12-2-3",
    "type_id": "type-kntt-12-08-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , cho ba điểm A ( -2;3;1) , B ( 2;1;0 ) , C ( -3; -1;1) . Gọi D ( a; b; c ) là điểm\n sao cho ABCD là hình thang có cạnh đáy AD và diệt tích hình thang ABCD bằng 4 lần diện\n tích tam giác ABC . Tính a + b + c .",
    "question_en": "In Oxyz space, let A(-2,3,1), B(2,1,0), and C(-3,-1,1). Let D(a,b,c) be such that ABCD is a trapezoid with bases AD and BC, and the area of the trapezoid is four times the area of triangle ABC. Find $a+b+c$.",
    "options": [],
    "solution_vi": "1 1\n Ta có S ABCD = 4S ABC \\Leftrightarrow d ( BC , AD )( BC + AD ) = 4. d ( BC , AD ) BC\n 2 2\n \\Leftrightarrow BC + AD = 4 BC \\Leftrightarrow AD = 3BC . Do ABCD là hình thang có đáy AD \\Rightarrow AD = 3BC\n {a + 2 = -15 {a = -17\n  \n \\Leftrightarrow  b - 3 = -6 \\Leftrightarrow  b = -3 \\Rightarrow a + b + c = -16 .\n  c -1 = 3  c=4\n  \n -----------------HẾT-----------------\n22",
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
    "question_en": "In tetrahedron ABCD, set $\\vec{AB}=\\vec a$, $\\vec{AC}=\\vec b$, and $\\vec{AD}=\\vec c$. Let G be the centroid of triangle BCD. Which identity is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "AG = a + b + c . 1 (",
        "content_en": "$\\vec{AG}=\\vec a+\\vec b+\\vec c$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "AG = a + b + c . 3 ) 1 (",
        "content_en": "$\\vec{AG}=\\dfrac13(\\vec a+\\vec b+\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "AG = a + b + c . 2 ) 1 (",
        "content_en": "$\\vec{AG}=\\dfrac12(\\vec a+\\vec b+\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "AG = a + b + c . 4 )",
        "content_en": "$\\vec{AG}=\\dfrac14(\\vec a+\\vec b+\\vec c)$.",
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
    "question_en": "In tetrahedron ABCD, set $\\vec{AB}=\\vec a$, $\\vec{AC}=\\vec b$, and $\\vec{AD}=\\vec c$. Let M be the midpoint of BC. Which identity is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "DM = a + b - 2c . 2 ) 1 (",
        "content_en": "$\\vec{DM}=\\dfrac12(\\vec a+\\vec b-2\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "DM = a + 2b - c . 2 ) 1 (",
        "content_en": "$\\vec{DM}=\\dfrac12(\\vec a+2\\vec b-\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "DM = a - 2b + c . 2 ) 1 (",
        "content_en": "$\\vec{DM}=\\dfrac12(\\vec a-2\\vec b+\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "DM = a + 2b - c . 2 )",
        "content_en": "$\\vec{DM}=\\dfrac12(\\vec a+2\\vec b-\\vec c)$.",
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
    "question_en": "In tetrahedron ABCD, let M and P be the midpoints of AB and CD. Set $\\vec{AB}=\\vec b$, $\\vec{AC}=\\vec c$, and $\\vec{AD}=\\vec d$. Which identity is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "MP = c + d + b . 2 ) 1 (",
        "content_en": "$\\vec{MP}=\\dfrac12(\\vec c+\\vec d+\\vec b)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "MP = d + b - c . 2 ) 1 (",
        "content_en": "$\\vec{MP}=\\dfrac12(\\vec d+\\vec b-\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "MP = c + b - d . 2 ) 1 (",
        "content_en": "$\\vec{MP}=\\dfrac12(\\vec c+\\vec b-\\vec d)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "MP = c + d - b . 2 )",
        "content_en": "$\\vec{MP}=\\dfrac12(\\vec c+\\vec d-\\vec b)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{ 2 AM = AB\n Vì M , P lần lượt là trung điểm của AB, CD \\Rightarrow \n  AC + AD = 2 AP\n 1\n MP = MA + AP = - AM + AP = - AB + AC + AD\n 2\n 1\n 2\n ( )\n 1 1 1\n = - b+ c+ d = c+ d -b^2 2 2\n 1\n 2\n ( )",
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
    "question_en": "In tetrahedron ABCD, point G satisfies $\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$, so G is the centroid. Let $G_0=GA\\cap(BCD)$. Which identity is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "GA = -2G0G .",
        "content_en": "$\\vec{GA}=-2\\vec{G_0G}$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "GA = 4G0G .",
        "content_en": "$\\vec{GA}=4\\vec{G_0G}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "GA = 3G0G .",
        "content_en": "$\\vec{GA}=3\\vec{G_0G}$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "GA = 2G0G .",
        "content_en": "$\\vec{GA}=2\\vec{G_0G}$.",
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
    "question_en": "Let $\\vec a,\\vec b,\\vec c$ be non-coplanar vectors. Define $\\vec x=2\\vec a+\\vec b$, $\\vec y=\\vec a-\\vec b-\\vec c$, and $\\vec z=-3\\vec b-2\\vec c$. Which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "x, y, z đồng phẳng.",
        "content_en": "$\\vec x,\\vec y,\\vec z$ are coplanar.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "x, a cùng phương.",
        "content_en": "$\\vec x$ and $\\vec a$ are parallel.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "x, b cùng phương.",
        "content_en": "$\\vec x$ and $\\vec b$ are parallel.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "x, y, z đôi một cùng phương.",
        "content_en": "$\\vec x,\\vec y,\\vec z$ are pairwise parallel.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử ba vectơ x, y, z đồng phẳng khi đó → x = m y + nz .\n {m = 2\n  {m = 2\n \\Leftrightarrow 2a + b = ma - ( m + 3n ) b - ( m + 2n ) c ↔ m + 3n = -1 ↔  .\n  m + 2n = 0  n = -1\n \n Vậy x, y, z đồng phẳng.",
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
    "question_en": "A circular lamp is suspended horizontally by three inextensible cords OA, OB, and OC from a ceiling point O. The three tension forces are pairwise perpendicular and have equal magnitudes $F_1=F_2=F_3=15$ N. Find the weight of the lamp.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "14 3 N .",
        "content_en": "$14\\sqrt3$ N.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "15 3 N .",
        "content_en": "$15\\sqrt3$ N.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "17 3 N .",
        "content_en": "$17\\sqrt3$ N.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "16 3 N .",
        "content_en": "$16\\sqrt3$ N.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi A1 , B1 , C1 lần lượt là các điểm sao cho OA1 = F1 , OB1 = F2 , OC1 = F3 . Lấy các điểm\n D1 , A1′ , B1′ , D1′ sao cho OA1D1B1 C1 A1′ D1′ B1′ là hình hộp (như hình bên). Khi đó, áp dụng quy tắc\n hình hộp ta có\n OA1 + OB1 + OC1 = OD1′ .\n Măt khác, do các lực căng F1 , F2 , F3 đôi một vuông góc và F1 = F2 = F3 = 15( N) nên hình hộp\n OA1D1B1 C1 A1′ D1′ B1′ có ba cạnh OA1 , OB1 , OC1 đôi một vuông góc và bằng nhau. Vì thể hình hộp\n đó là hình lập phương có độ dài cạnh bằng 15. Suy ra độ dài đường chéo OD1′ của hình lập\n phương đó bằng 15 3 .\n Do chiếc đèn ở vị trí cân bằng nên F1 + F2 + F3 = P , ơ đó P là trong lực tác dụng lên chiếc đèn.\n Suy ra trọng lượng của chiếc đèn là | P |= OD1′ = 15 3N",
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
    "question_en": "By Newton’s second law, $\\vec F=m\\vec a$. What force magnitude is required to give a $0.5$ kg ball an acceleration of $50\\,\\text{m/s}^2$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "10 N .",
        "content_en": "10 N.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "15 N .",
        "content_en": "15 N.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "20 N .",
        "content_en": "20 N.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "25 N .",
        "content_en": "25 N.",
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
    "question_en": "For a mass $m$ kg, Earth’s gravitational force has magnitude $P=mg$, where $g=9.8\\,\\text{m/s}^2$. Find the gravitational force on an apple of mass 105 g.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1,029 N.",
        "content_en": "1.029 N.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "1, 433 N.",
        "content_en": "1.433 N.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2,096 N.",
        "content_en": "2.096 N.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1, 477 N.",
        "content_en": "1.477 N.",
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
    "question_en": "In a uniform electric field, the electrostatic force on a point charge is $\\vec F=q\\vec E$. Find the force magnitude when $q=10^{-9}$ C and $|\\vec E|=10^5$ N/C.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "10-4 N.",
        "content_en": "$10^{-4}$ N.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "2.10 -6 N.",
        "content_en": "$2\\times10^{-6}$ N.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "10-2 N.",
        "content_en": "$10^{-2}$ N.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1,8.10 -6 N.",
        "content_en": "$1.8\\times10^{-6}$ N.",
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
    "question_en": "In tetrahedron ABCD with centroid G, determine whether each vector statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "GA + GB + GC + GD = 0",
        "content_en": "$\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "OG = 1 4 (OA + OB + OC + OD )",
        "content_en": "$\\vec{OG}=\\dfrac14(\\vec{OA}+\\vec{OB}+\\vec{OC}+\\vec{OD})$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "BG = GA + GC + GD",
        "content_en": "$\\vec{BG}=\\vec{GA}+\\vec{GC}+\\vec{GD}$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "AG = 2 3 (AB + AC + AD )",
        "content_en": "$\\vec{AG}=\\dfrac23(\\vec{AB}+\\vec{AC}+\\vec{AD})$.",
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
    "question_en": "In tetrahedron ABCD, let M and N be the midpoints of AB and CD, respectively, and let G be the midpoint of MN. Determine whether each vector statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "GA + GB + GC + GD = 0",
        "content_en": "$\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "MA + MB + MC + MD = 4MG 1 (",
        "content_en": "$\\vec{MA}+\\vec{MB}+\\vec{MC}+\\vec{MD}=4\\vec{MG}$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "MN = AB + CD 2 )",
        "content_en": "$\\vec{MN}=\\dfrac12(\\vec{AB}+\\vec{CD})$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "2MN = AC + BD",
        "content_en": "$2\\vec{MN}=\\vec{AC}+\\vec{BD}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "20 \n {GA + GB = 2GM\n a) Đúng: Vì M , N lần lượt là trung điểm AB, CD → \n GC + GD = 2GN\n Mặt khác G là trung điểm MN → GM + GN = 0 ↔ GA + GB + GC + GD = 0 .\n (\n b) Đúng: Khi đó MA + MB + MC + MD = 4MG + GA + GB + GC + GD = 4MG )\n c) Sai: Dễ chứng minh được MN =\n 1\n 2\n (\n AD + BC )\n Ta có: MN = MA + AC + CN ; MN = MB + BD + DN . Do đó: 2MN = AC + BD",
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
    "question_en": "In tetrahedron ABCD, let M and N be the midpoints of AD and BC, respectively. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "AB, DC , MN đồng phẳng.",
        "content_en": "The vectors $\\vec{AB},\\vec{DC},\\vec{MN}$ are coplanar.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "AB, AC , MN không đồng phẳng.",
        "content_en": "The vectors $\\vec{AB},\\vec{AC},\\vec{MN}$ are not coplanar.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "AN , CM , MN đồng phẳng.",
        "content_en": "The vectors $\\vec{AN},\\vec{CM},\\vec{MN}$ are coplanar.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "BD, AC , MN đồng phẳng.",
        "content_en": "The vectors $\\vec{BD},\\vec{AC},\\vec{MN}$ are coplanar.",
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
    "question_en": "In tetrahedron ABCD, points M on AD and N on BC satisfy AM=3MD and BN=3NC. Let P and Q be the midpoints of AD and BC, respectively. Determine whether each vector statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "PQ = AC + DB",
        "content_en": "$\\vec{PQ}=\\vec{AC}+\\vec{DB}$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "MN = MA + AC + CN",
        "content_en": "$\\vec{MN}=\\vec{MA}+\\vec{AC}+\\vec{CN}$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "MN = MD + DB + BN",
        "content_en": "$\\vec{MN}=\\vec{MD}+\\vec{DB}+\\vec{BN}$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "BD, AC , MN đồng phẳng.",
        "content_en": "The vectors $\\vec{BD},\\vec{AC},\\vec{MN}$ are coplanar.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Dễ chứng minh được 2PQ = AC + DB nên A sai\n b) Đúng: Theo giả thuyết ta có M , N là trung điểm của PD, QC\n { MN = MA + AC + CN\n c) Đúng:  .\n  MN = MD + DB + BN\n { MN = MA + AC + CN\n d) Đúng: Ta có \n 3MN = 3MD + 3DB + 3BN\n 1\n \\Rightarrow 4MN = AC - 3BD + BC \\Rightarrow BD, AC , MN không đồng phẳng.\n 2",
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
    "question_en": "In tetrahedron ABCD, let M and N be the midpoints of AD and BC, respectively, and let I be the midpoint of MN. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "AB - CD = AC - BD",
        "content_en": "$\\vec{AB}-\\vec{CD}=\\vec{AC}-\\vec{BD}$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "AB + CD = AD + CB",
        "content_en": "$\\vec{AB}+\\vec{CD}=\\vec{AD}+\\vec{CB}$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "AB + DC = 2MN",
        "content_en": "$\\vec{AB}+\\vec{DC}=2\\vec{MN}$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "IA + IB + IC + ID = 0",
        "content_en": "$\\vec{IA}+\\vec{IB}+\\vec{IC}+\\vec{ID}=\\vec0$.",
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
    "question_en": "In tetrahedron ABCD, points $M\\in BC$, $N\\in BD$, and $P\\in AC$ satisfy $BC=4BM$, $AC=3AP$, and $BD=2BN$. Plane (MNP) intersects AD at Q. Find $\\dfrac{AQ}{AD}$.",
    "options": [],
    "solution_vi": "A\n P Q\n R\n B N D\n M\n C\n Đặt AB = a, AC = b, AD = c, AQ = k AD = kc\n 3 1 1\n ( )\n 1\n Theo đề bài, ta có: AM = a + b; AN = a + c ; AP = b .\n 4 4 2 3\n { 1 1 1\n  MN = AN - AM = - 4 a - 4 b + 2 c\n \n  3 1\n Ta có:  MP = AP - AM = - a + b\n  4 12\n  3 1\n  MQ = AQ - AM = - 4 a - 4 b + kc\n \n { 6\n  x=\n {0, 25 x + 0,75 y = 0,75 5\n  \n  1  3\n Vì M , N , P, Q đồng phẳng nên xMN + yMP = MQ \\Leftrightarrow 0, 25 x - y = 0, 25 \\Leftrightarrow  y = .\n  12  5\n 0,5 x = k  3\n k = 5\n \n 3 AQ 3\n Vậy AQ = AD \\Rightarrow = .\n 5 AD 5",
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
    "question_en": "In tetrahedron SABC, $SA=SB=SC=AB=AC=2$ and $BC=2\\sqrt2$. Find $\\vec{SC}\\cdot\\vec{AB}$.",
    "options": [],
    "solution_vi": "S\n A C\n B\n28 \n Ta có: BC 2 = SB 2 + SC 2 ( 2.22 = 22 + 22 ) \\Rightarrow ∆SBC vuông cân tại S .\n Mặt khác: SA = AC = SC = 2 \\Rightarrow ∆SAC là tam giác đều.\n ( )\n SC. AB = SC SB - SA = SC.SB - SC.SA = 0 - SC.SA.cos ASC = -2.2.cos60° = -\n 22\n 2\n = -2 .\n Vậy SC. AB = -2 .",
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
    "question_en": "In tetrahedron ABCD, let E and F be the midpoints of AB and CD. Given $AB=2a$, $CD=2b$, and $EF=2c$, for an arbitrary point M suppose $MA^2+MB^2=k\\,ME^2+l\\,a^2$. Find $k+l$.",
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
    "id": "src-pnl-c457bc51942bf6",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hai vectơ a, b thỏa mãn: a = 26; b = 28; a + b = 48 . Độ dài vectơ a - b bằng?",
    "question_en": "Let vectors $\\vec a,\\vec b$ satisfy $|\\vec a|=26$, $|\\vec b|=28$, and $|\\vec a+\\vec b|=48$. Find $|\\vec a-\\vec b|$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "25.",
        "content_en": "$25$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "616 .",
        "content_en": "$\\sqrt{616}$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "9.",
        "content_en": "$9$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "618 .",
        "content_en": "$\\sqrt{618}$.",
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
    "id": "src-pnl-9a4d32b45faf9f",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho tứ diện ABCD đều cạnh bằng a . Gọi O là tâm đường tròn ngoại tiếp tam giác BCD . Góc giữa AO và CD bằng bao nhiêu?",
    "question_en": "In a regular tetrahedron ABCD of edge length $a$, let O be the circumcenter of triangle BCD. What is the angle between AO and CD?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 0 .",
        "content_en": "$0^\\circ$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "300 .",
        "content_en": "$30^\\circ$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "900 .",
        "content_en": "$90^\\circ$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "600 .",
        "content_en": "$60^\\circ$.",
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
    "question_en": "In tetrahedron ABCD, faces ABC and ABD are equilateral triangles. Which statement is most accurate?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "AB và CD chéo nhau",
        "content_en": "AB and CD are skew.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "AB và CD vuông góc với nhau",
        "content_en": "AB and CD are perpendicular.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "AB và CD đồng phẳng",
        "content_en": "AB and CD are coplanar.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "AB và CD cắt nhau",
        "content_en": "AB and CD intersect.",
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
    "id": "src-pnl-e32798221d993c",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian Oxyz , hình chiếu vuông góc của điểm A (1;2;5 ) lên trục Ox có tọa độ là",
    "question_en": "In Oxyz space, find the orthogonal projection of A(1,2,5) onto the x-axis.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 0;2;0 ) .",
        "content_en": "$(0,2,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 0;0;5 ) .",
        "content_en": "$(0,0,5)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;0;0 ) .",
        "content_en": "$(1,0,0)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( 0;2;5 ) .",
        "content_en": "$(0,2,5)$.",
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
    "question_en": "In Oxyz space, find the coordinates of the orthogonal projection of A(-2,-1,3) onto plane Oyz.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 0; -1;0 )",
        "content_en": "$(0,-1,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -2;0;0 )",
        "content_en": "$(-2,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 0; -1;3 )",
        "content_en": "$(0,-1,3)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( -2; -1;0 )",
        "content_en": "$(-2,-1,0)$.",
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
    "question_en": "In Oxyz space, let M(1,2,3). If H is the orthogonal projection of M onto plane (Oxy), what are the coordinates of H?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "H ( -1; -2;3) .",
        "content_en": "$H(-1,-2,3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "H ( 0;0;3) .",
        "content_en": "$H(0,0,3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "H (1;0;0 ) .",
        "content_en": "$H(1,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "H (1;2;0 ) .",
        "content_en": "$H(1,2,0)$.",
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
    "question_en": "In Oxyz space, let $\\vec a=(2,3,2)$ and $\\vec b=(1,1,-1)$. Find the coordinates of $\\vec a-\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 3;4;1) .",
        "content_en": "$(3,4,1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -1; -2;3) .",
        "content_en": "$(-1,-2,3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 3;5;1) .",
        "content_en": "$(3,5,1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1;2;3) .",
        "content_en": "$(1,2,3)$.",
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
    "question_en": "In Oxyz space, given A(1,1,1), find its orthogonal projection onto plane (Oxz).",
    "options": [
      {
        "option_key": "A",
        "content_vi": "(1;0;1) .",
        "content_en": "$(1,0,1)$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "( 0;1;0 ) .",
        "content_en": "$(0,1,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;1;0 ) .",
        "content_en": "$(1,1,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 0;1;1) .",
        "content_en": "$(0,1,1)$.",
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
    "question_en": "In Oxyz space, let $\\vec a=-\\vec i+2\\vec j-3\\vec k$. Find the coordinates of $\\vec a$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -2; - 1; - 3) .",
        "content_en": "$(-2,-1,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -3;2; - 1) .",
        "content_en": "$(-3,2,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 2; - 3; - 1) .",
        "content_en": "$(2,-3,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( -1;2; - 3) .",
        "content_en": "$(-1,2,-3)$.",
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
    "question_en": "In Oxyz space, let $\\vec a=(1,1,-2)$ and $\\vec b=(-2,1,4)$. Find $\\vec u=\\vec a-2\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 5; -1; -10 ) .",
        "content_en": "$(5,-1,-10)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 0;3;0 ) .",
        "content_en": "$(0,3,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -3;3;6 ) .",
        "content_en": "$(-3,3,6)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 5; -1;10 ) .",
        "content_en": "$(5,-1,10)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{a (1;1; -2 )\n Ta có  \\Rightarrow u = a - 2b = ( 5; -1; -10 ) .\n b = ( -2;1;4 )",
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
    "question_en": "Given A(3,-1,1), find its orthogonal projection onto plane (Oyz).",
    "options": [
      {
        "option_key": "A",
        "content_vi": "M ( 3;0;0 ) .",
        "content_en": "$M(3,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "N ( 0; -1;1) .",
        "content_en": "$N(0,-1,1)$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "P ( 0; -1;0 ) .",
        "content_en": "$P(0,-1,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Q ( 0;0;1) .",
        "content_en": "$Q(0,0,1)$.",
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
    "question_en": "In Oxyz space, find the orthogonal projection of A(1,2,5) onto plane Oxz.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 0;2;5 ) .",
        "content_en": "$(0,2,5)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 0;2;0 ) .",
        "content_en": "$(0,2,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;0;5 ) .",
        "content_en": "$(1,0,5)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( 0;0;5 ) .",
        "content_en": "$(0,0,5)$.",
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
    "question_en": "In Oxyz space, given A(1,-1,2) and B(2,1,-4), find the coordinates of $\\vec{AB}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 3;0; - 2 ) .",
        "content_en": "$(3,0,-2)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -1; - 2;6 ) .",
        "content_en": "$(-1,-2,6)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;0; - 6 ) .",
        "content_en": "$(1,0,-6)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1;2; - 6 ) .",
        "content_en": "$(1,2,-6)$.",
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
    "question_en": "In Oxyz space, find the orthogonal projection of A(1,-2,3) onto plane (Oyz).",
    "options": [
      {
        "option_key": "A",
        "content_vi": "(1;0;3) .",
        "content_en": "$(1,0,3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "(1;0;0 ) .",
        "content_en": "$(1,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1; -2;0 ) .",
        "content_en": "$(1,-2,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 0; -2;3) .",
        "content_en": "$(0,-2,3)$.",
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
    "id": "src-pnl-b827a72ae193bb",
    "topic_id": "top-12-2-2",
    "type_id": "type-kntt-12-07-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong không gian với hệ tọa độ Oxyz , cho điểm A ( 2; -1;0 ) và điểm B ( 3;1;1) . Tọa độ điểm đối xứng với A qua B là",
    "question_en": "In Oxyz space, given A(2,-1,0) and B(3,1,1), find the point symmetric to A with respect to B.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "(1; -2; -4 ) .",
        "content_en": "$(1,-2,-4)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 0;3; -1) .",
        "content_en": "$(0,3,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 4;3;2 ) .",
        "content_en": "$(4,3,2)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "( 0; -1;3 ) .",
        "content_en": "$(0,-1,3)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi A′ ( x; y; z ) là điểm đối xứng với A qua B \\Leftrightarrow B là trung điểm đoạn thẳng AA′\n { 2+ x\n  3 =\n 2\n  {x = 4\n  -1 + y \n \\Leftrightarrow 1 = \\Leftrightarrow  y = 3 . Suy ra A′ ( 4;3;2 ) .\n  2 z = 2\n  0+ z \n 1 =\n  2",
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
    "question_en": "In Oxyz space, $\\vec a=2\\vec i+\\vec k-3\\vec j$. Find the coordinates of $\\vec a$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 2; - 3;1) .",
        "content_en": "$(2,-3,1)$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "(1; - 3;2 ) .",
        "content_en": "$(1,-3,2)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 2;1; - 3) .",
        "content_en": "$(2,1,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1;2; - 3) .",
        "content_en": "$(1,2,-3)$.",
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
    "question_en": "In Oxyz space, point M satisfies $\\vec{OM}=2\\vec i+\\vec j$. Find M.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "M = ( 0;2;1) .",
        "content_en": "$M(0,2,1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "M = (1;2;0 ) .",
        "content_en": "$M(1,2,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "M = ( 2;1;0 ) .",
        "content_en": "$M(2,1,0)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "M = ( 2;0;1) .",
        "content_en": "$M(2,0,1)$.",
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
    "question_en": "In the coordinate system $(O;\\vec i,\\vec j,\\vec k)$, let $\\vec a=(1,2,3)$ and $\\vec b=2\\vec i-4\\vec k$. Find the coordinates of $\\vec u=\\vec a-\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "u = ( -1;2; - 1) .",
        "content_en": "$(-1,2,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "u = ( -1; - 2;3) .",
        "content_en": "$(-1,-2,3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u = ( -1;6;3) .",
        "content_en": "$(-1,6,3)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u = ( -1;2;7 ) .",
        "content_en": "$(-1,2,7)$.",
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
    "question_en": "In Oxyz space, let M(2,0,0), N(0,-3,0), and P(0,0,4). If MNPQ is a parallelogram, find Q.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -2; -3;4 ) .",
        "content_en": "$(-2,-3,4)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -2; -3; -4 ) .",
        "content_en": "$(-2,-3,-4)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 2;3;4 ) .",
        "content_en": "$(2,3,4)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 3;4;2 ) .",
        "content_en": "$(3,4,2)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi Q ( x; y; z ) khi đó MN = ( -2; -3;0 ) ; QP = ( - x; - y;4 - z ) .\n {- x = -2 {x = 2\n  \n Tứ giác MNPQ là hình bình hành \\Leftrightarrow MN = QP \\Leftrightarrow - y = -3 \\Leftrightarrow  y = 3 . Vậy Q ( 2;3;4 ) .\n 4 - z = 0 z = 4\n  ",
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
    "question_en": "In Oxyz space, given A(-4,1,-5), B(2,-4,7), and C(3,-2,9), find D so that ABCD is a parallelogram.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "D ( 2;3; - 3) .",
        "content_en": "$D(2,3,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "D ( - 3;3; - 3) .",
        "content_en": "$D(-3,3,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "D ( - 3; - 3;3) .",
        "content_en": "$D(-3,-3,3)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "D ( - 6;5; - 12 ) .",
        "content_en": "$D(-6,5,-12)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{ xD + 4 = 1 { x D = -3\n  \n Ta có BC = ( 1;2;2 ) ; ABCD là hình bình hành \\Leftrightarrow AD = BC \\Leftrightarrow  yD - 1 = 2 \\Leftrightarrow  yD = 3 .\n z + 5 = 2  z = -3\n  D  D",
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
    "question_en": "In Oxyz space, let $\\vec a=(-3,2,1)$ and A(4,6,-3). Find B such that $\\vec{AB}=\\vec a$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -1; -8;2 ) .",
        "content_en": "$(-1,-8,2)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 7;4; -4 ) .",
        "content_en": "$(7,4,-4)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1;8; -2 ) .",
        "content_en": "$(1,8,-2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( -7; -4;4 ) . 8",
        "content_en": "$(-7,-4,4)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{ x - 4 = -3 {x = 1\n  \n Gọi B ( x; y; z ) . Khi đó AB = ( x - 4; y - 6; z + 3) . Khi đó AB = a \\Leftrightarrow  y - 6 = 2 \\Leftrightarrow  y = 8 .\n z + 3 = 1  z = -2\n  ",
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
    "question_en": "In Oxyz space, given A(0,1,-2), B(1,2,1), and C(4,3,m), find m so that O, A, B, and C are coplanar.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -7 .",
        "content_en": "$m=-7$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = -14 .",
        "content_en": "$m=-14$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 7 .",
        "content_en": "$m=7$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 14 .",
        "content_en": "$m=14$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Để 4 điểm O, A, B, C đồng phẳng \\Leftrightarrow OC = aOA + bOB \\Leftrightarrow ( 4;3; m ) = a ( 0;1; -2 ) + b (1;2;1)\n {4 = b {b = 4\n  \n \\Rightarrow 3 = a + 2b \\Leftrightarrow a = -5 .\n m = -2a + b m = 14\n  ",
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
    "question_en": "In Oxyz space, given A(1,2,-1), B(2,-1,3), and C(-3,5,1), let D be the fourth vertex of parallelogram ABCD. Which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "D ( -4;8; -3) .",
        "content_en": "$D(-4,8,-3)$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "D ( -2;8; -3) .",
        "content_en": "$D(-2,8,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "D ( -4;8; -5 ) .",
        "content_en": "$D(-4,8,-5)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "D ( -2;2;5 ) .",
        "content_en": "$D(-2,2,5)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử D ( x; y; z ) .\n {-3 - x = 1 { x = -4\n  \n Tứ giác ABCD là hình bình hành \\Leftrightarrow AB = DC \\Leftrightarrow 5 - y = -3 \\Rightarrow  y = 8\n 1 - z = 4  z = -3\n  \n Vậy D ( -4;8; -3) .",
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
    "question_en": "In Oxyz space, let A(0,2,-1), B(2,1,5), and C(1,6,2). Points M and N satisfy $\\vec{MN}=\\vec{NA}+\\vec{NB}+\\vec{NC}$. The line MN always passes through which point I?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( 2;3;5 ) .",
        "content_en": "$(2,3,5)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( 2;0;3) .",
        "content_en": "$(2,0,3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 2; -1;3 ) .",
        "content_en": "$(2,-1,3)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1;3;2 ) .",
        "content_en": "$(1,3,2)$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có MN = NA + NB + NC \\Leftrightarrow MN = MA + MB + MC - 3MN \\Leftrightarrow 4MN = MA + MB + MC\n 3\n Gọi G là trọng tâm ∆ABC , khi đó 4MN = 3MG \\Leftrightarrow MN = MG \\Rightarrow MN , MG cùng phương\n 4\n \\Rightarrow M , G , N thẳng hàng với G (1;3;2 ) . Vậy điểm I (1;3;2 ) là điểm cần tìm.",
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
    "question_en": "In Oxyz space, let $\\vec a=(-1,1,0)$, $\\vec b=(1,1,0)$, and $\\vec c=(1,1,1)$. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Độ dài vectơ a bằng 2.",
        "content_en": "$|\\vec a|=2$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Vectơ b vuông góc với a .",
        "content_en": "$\\vec b\\perp\\vec a$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Vectơ b vuông góc với c .",
        "content_en": "$\\vec b\\perp\\vec c$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tọa độ vectơ 3a + 2b - c bằng ( -2;4; -1) .",
        "content_en": "$3\\vec a+2\\vec b-\\vec c=(-2,4,-1)$.",
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
    "question_en": "In Oxyz space, let $\\vec a=\\vec i+3\\vec k-4\\vec j$ and $\\vec b=(m-n,4m-6n,n^2-3m+2)$, where $m,n$ are parameters. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tọa độ a = (1;3; -4 ) .",
        "content_en": "$\\vec a=(1,3,-4)$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Dựng điểm A thỏa OA = a thì A (1; -4;3) .",
        "content_en": "If $\\vec{OA}=\\vec a$, then $A(1,-4,3)$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Tồn tại giá trị của m và n để b = 0 .",
        "content_en": "There exist values of $m,n$ for which $\\vec b=\\vec0$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Nếu a = b thì m + n = 9 .",
        "content_en": "If $\\vec a=\\vec b$, then $m+n=9$.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Tọa độ a = (1; -4;3) .\n b) Đúng: Khi OA = a thì tọa độ a cũng là tọa độ điểm A . Suy ra A (1; -4;3) .\n {m - n = 0 {m = 0\n  \n c) Sai: b = 0 \\Leftrightarrow 4m - 6n = 0 \\Leftrightarrow n = 0 . (vô nghiệm).\n n 2 - 3m + 2 = 0 n 2 - 3m + 2 = 0\n  \n Vậy không tồn tại m, n để b = 0 .\n {m - n = 1\n  {m = 5\n d) Đúng: a = b \\Leftrightarrow 4m - 6n = -4 \\Leftrightarrow  . Suy ra m + n = 9 .\n n 2 - 3m + 2 = 3 n = 4\n ",
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
    "question_en": "In Oxyz space, let $\\vec a=(2,2,0)$ and $\\vec b=2\\vec j+2\\vec k$. Construct $\\vec{OA}=\\vec a$ and $\\vec{OB}=\\vec b$. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "a = 2i + 2k .",
        "content_en": "$\\vec a=2\\vec i+2\\vec k$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Toạ độ b = ( 0;2;2 ) .",
        "content_en": "$\\vec b=(0,2,2)$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Toạ độ AB = ( -2;2;0 )",
        "content_en": "$\\vec{AB}=(-2,2,0)$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Góc AOB = 45 .",
        "content_en": "$\\angle AOB=45^\\circ$.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Sai: Ta có a = (2;0;2) \\Rightarrow a = 2i + 2k .\n b) Đúng: Ta có b = 2 j + 2k \\Rightarrow b = (0;2;2) .\n c) Đúng: Ta có OA = a thì toạ độ véc tơ a cũng chính là toạ độ A \\Rightarrow A ( 2;0;2 ) .\n Tương tự B (0;2;2) . Từ đây, ta tính được AB = (-2;2;0)\n d) Sai: Nhận xét OHMK .PANB là hình lập phương suy ra ∆OAB đều. Vậy AOB = 60° .",
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
    "question_en": "In Oxyz space, let $\\vec u=2\\vec i-2\\vec j+\\vec k$ and $\\vec v=(m,2,m+1)$, where $m$ is real. How many values of $m$ satisfy $\\vec u=\\vec v$?",
    "options": [],
    "solution_vi": "Ta có u = ( 2; - 2;1)\n Khi đó u = 22 + ( -2 ) + 12 = 3 và v = m2 + 22 + ( m + 1) = 2m2 + 2m + 5\n 2 2\n [m = 1\n Do đó u = v \\Leftrightarrow 9 = 2m2 + 2m + 5 \\Leftrightarrow m2 + m - 2 = 0 \\Leftrightarrow  nên có hai giá trị.\n  m = -2",
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
    "question_en": "In Oxyz space, given A(3,1,-2) and B(2,-3,5), point M lies on segment AB and satisfies MA=2MB. If M=(a,b,c), find a+b+c.",
    "options": [],
    "solution_vi": "Gọi M ( x; y;z ) .\n { 7\n x = 3\n {3 - x = -2 ( 2 - x ) \n   5\n Vì M thuộc đoạn AB nên: MA = -2 MB \\Leftrightarrow 1 - y = -2 ( -3 - y ) \\Leftrightarrow  y = - \\Rightarrow a + 3b + c = 0\n   3\n  -2 - z = -2 ( 5 - z )  8\n z = 3\n ",
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
    "question_en": "In Oxyz space, given A(4,2,1) and B(-2,-1,4), find M(a,b,c) satisfying $\\vec{AM}=2\\vec{MB}$. Find a+b+c.",
    "options": [],
    "solution_vi": "{ x - 4 = 2 ( -2 - x ) {x = 0\n  \n Gọi điểm M ( x; y; z ) . Khi đó: AM = 2MB \\Leftrightarrow  y - 2 = 2 ( -1 - y ) \\Leftrightarrow  y = 0 .\n  z = 3\n z -1 = 2(4 - z ) \n Vậy M ( 0;0;3) nê a + b + c = 3",
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
    "question_en": "In Oxyz space, given M(2,3,-1), N(-1,1,1), and P(1,m-1,2), find m so that triangle MNP is right-angled at N.",
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
    "question_en": "In a coordinate system measured in kilometers, radar detects an aircraft moving at constant velocity and direction from A(800,500,7) to B(940,550,8) in 10 minutes. If it continues unchanged, its position after the next 10 minutes is D(x,y,z). Find x+y+z.",
    "options": [],
    "solution_vi": "Gọi D ( x; y; z ) là vị trí của máy bay sau 10 phút bay tiếp theo (tính từ thời điểm máy bay ở điểm\n B ). Vì hướng của máy bay không đổi nên AB và BD cùng hướng. Do vận tốc máy bay không\n đổi và thời gian bay từ A đến B bằng thời gian bay từ B đến D nên AB = BD .\n Do đó, BD = AB = (140;50;1) .\n { x - 940 = 140 { x = 1080\n  \n Mặt khác: BD = ( x - 940; y - 550; z - 8 ) nên  y - 550 = 50 \\Leftrightarrow  y = 600\n z - 8 = 1 z = 9\n  \n Vậy D (1080;600;9 ) . Vậy tọa độ của máy bay trong 10 phút tiếp theo là (1080;600;9 ) .\n Suy ra x + y + z = 1689",
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
    "question_en": "Aircraft A has velocity vector $\\vec a=(300,200,400)$ km/h. Aircraft B flies in the same direction at three times the speed of A. Find the speed of aircraft B.",
    "options": [],
    "solution_vi": "{3.300 = x { x = 900\n  \n Ta có: 3a = b \\Leftrightarrow 3.200 = y \\Leftrightarrow  y = 600 \\Rightarrow b = ( 900;600;1200 )\n 3.400 = z \n   z = 1200\n Tốc độ của máy bay B là: b = 9002 + 6002 + 12002 ≈ 1615,55 (km/h)\n -----------------HẾT-----------------",
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
    "question_en": "Find the maximum value of $y=16-x^2$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "16 .",
        "content_en": "$16$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "4 .",
        "content_en": "$4$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "0 .",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1 .",
        "content_en": "$1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y = 16 - x^2 \\le 4 , dấu “=” khi x = 0 . Vậy max y = 4 .\n [ -4;4]",
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
    "question_en": "Let $M$ and $m$ be the maximum and minimum values of $y=x\\sqrt{16-x^2}$. Find $M+m$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8 - 8 .",
        "content_en": "$8-8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "8.",
        "content_en": "$8$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "0 .",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "8 .",
        "content_en": "$8$.",
        "is_correct": false
      }
    ],
    "solution_vi": "x2 16 - 2 x^2\n Điều kiện xác định -4 \\le x \\le x . Đạo hàm y′ = 16 - x^2 - = .\n 16 - x^2 16 - x^2\n Ta có y′ = 0 \\Leftrightarrow 16 - 2 x^2 = 0 \\Leftrightarrow x = \\pm 8\n (\n Xét y ( -4 ) = y ( 4 ) = 0 ; y - 8 = -8 ; y ) ( 8 ) = 8 do đó M = 8, m = -8 . Vậy M + m = 0 .\n 9",
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
    "id": "src-pnl-8fe41541aeb870",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một loại vi khuẩn được tiêm một loại thuốc kích thích sự sinh sản. Sau t phút, số vi khuẩn được\n xác định theo công thức N ( t ) = 1000 + 30t 2 - t 3 ( 0 \\le t \\le 30 ) . Hỏi sau bao giây thì số vi khuẩn\n lớn nhất?",
    "question_en": "A type of bacteria is given a reproduction-stimulating drug. After $t$ minutes, the population is $N(t)=1000+30t^2-t^3$, where $0\\le t\\le30$. After how many seconds is the bacterial population largest?",
    "options": [],
    "solution_vi": "Xét hàm số N ( t ) = 1000 + 30t 2 - t 3 ( 0 \\le t \\le 30 ) .\n [t = 0\n Ta có: N ′ ( t ) = 60t - 3t 2 = 0 \\Leftrightarrow \n t = 20\n Với t = 20 giây thì số vi khuẩn lớn nhất.\n -----------------HẾT-----------------\n26",
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
    "question_en": "A particle travels a distance $s(t)=6t^2-t^3$, where $t$ is in seconds. During the interval from 0 to 4 seconds, at what time is its instantaneous velocity greatest?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "t = 3 s.",
        "content_en": "$t=3$ s.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "t = 4 s.",
        "content_en": "$t=4$ s.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "t = 2 s.",
        "content_en": "$t=2$ s.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "t = 6 s.",
        "content_en": "$t=6$ s.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có v ( t ) = s′ ( t ) = 12t - 3t ; v′ ( t ) = 12 - 6t = 0 \\Leftrightarrow t = 2\n 2\n Lập bảng biến thiên ta thấy v ( t ) đạt giá trị lớn nhất tại t = 2 giây.",
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
    "question_en": "During the first 3 seconds, a particle moves according to $s(t)=-t^3+6t^2+t+5$, where $t$ is in seconds and $s$ in meters. What is its greatest instantaneous velocity during those 3 seconds?",
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
    "solution_vi": "Ta có v ( t ) = s′ ( t ) = -3t + 12t + 1 . Xét hàm số v ( t ) = -3t 2 + 12t + 1 trên đoạn [ 0;5]\n 2\n v′ ( t ) = -6t + 12 = 0 \\Leftrightarrow t = 2\n Tính các giá trị v ( 0 ) = 1; v ( 2 ) = 13; v ( 3) = 10\n So sánh các giá trị ta suy ra max v ( t ) = 13 .\n [0 ; 3]",
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
    "question_en": "The reduction in a patient’s blood pressure is modeled by $G(x)=0.025x^2(30-x)$, where $x$ is the drug dose in milligrams. What dose produces the greatest blood-pressure reduction?",
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
    "solution_vi": "Bài toán trở thành tìm x \\in [ 0;30] để hàm số G ( x ) = 0,025 x^2 ( 30 - x ) đạt giá trị lớn nhất\n [x = 0\n Ta có: G ( x ) = 0,025 x^2 ( 30 - x ) \\Rightarrow G′ ( x ) = 0,025 ( 60 x - 3x 2 ) = 0 \\Leftrightarrow \n  x = 25\n Bảng biến thiên\n Từ bảng biến thiên ta thấy max G ( x ) = G ( 20 ) = 100\n [0; 30]\n Vậy liều lượng thuốc cần tiêm cho bệnh nhân để huyết áp giảm nhanh nhất là 20 mg.\n4",
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
    "question_en": "In a medical experiment, 1000 bacteria are cultured in a nutrient medium. The population after $t$ seconds is $N(t)=1000+\\dfrac{100t}{100+t^2}$. Find the largest bacterial population from the start of the experiment onward.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1008 con.",
        "content_en": "1008 bacteria.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1012 con.",
        "content_en": "1012 bacteria.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1005 con.",
        "content_en": "1005 bacteria.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "1020 con.",
        "content_en": "1020 bacteria.",
        "is_correct": false
      }
    ],
    "solution_vi": "100 100.(100 + t 2 ) - 100t.2t 100 (100 - t 2 )\n Xét hàm số N ( t ) = 1000 + có N ′ ( t ) = =\n 100 + t 2 (100 + t 2 ) (100 + t 2 )\n 2 2\n Khi đó với t > 0 N ′ ( t ) = 0 \\Leftrightarrow 100 - t 2 = 0 \\Leftrightarrow t = 10\n Bảng biến thiên của hàm số N ( t ) như sau:\n Căn cứ vào bảng biến thiên ta thấy trên khoảng ( 0;+ \\infty ) hàm số N ( t ) đạt giá trị lớn nhất bằng\n 1005 tại t = 10 .\n Vậy số lượng vi khuẩn lớn nhất kể từ khi thực hiện nuôi cấy vào môi trường dinh dưỡng là 1005\n con.",
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
    "id": "src-pnl-9870df3379e2d9",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho một tấm tôn hình chữ nhật có kích thước 10cm x 16cm . Người ta cắt bỏ 4 góc của tấm tôn 4 miếng hình vuông bằng nhau rồi gò lại thành một hình hộp chữ nhật không có nắp. Để thể tích của hình hộp đó lớn nhất thì độ dài cạnh hình vuông của các miếng tôn bị cắt bỏ bằng",
    "question_en": "A 10 cm by 16 cm rectangular metal sheet has equal squares cut from its four corners and is folded into an open-top rectangular box. What should the side length of each cut-out square be to maximize the box volume?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3m .",
        "content_en": "3 cm.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "4 m .",
        "content_en": "4 cm.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "5m .",
        "content_en": "5 cm.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2 m .",
        "content_en": "2 cm.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử độ dài cạnh hình vuông của các miếng tôn bị cắt bỏ bằng x, ( 0 < 2 x < 10,0 < x < 5 ) .\n Khi đó hình hộp chữ nhật có chiều cao bằng x , chiều rộng bằng 10 - 2x và chiều dài bằng\n 16 - 2x\n Suy ra hình hộp chữ nhật có thể tích V = x (10 - 2 x )(16 - 2 x ) = 4 x^3 - 52 x^2 + 160 x\n Xét hàm số f ( x ) = 4 x3 - 52 x^2 + 160 x trên ( 0;5 ) có tập xác định là D =\n [x = 2\n f ′ ( x ) = 12 x - 104 x + 160 = 0 \\Leftrightarrow \n 2\n . Bảng biến thiên hàm số f ( x ) trên ( 0;5 ) như sau:\n  x = 20\n  3\n Dựa vào bảng biến thiên ta có hàm số đạt giá trị lớn nhất trên ( 0;5 ) tại x = 2 hay hình hộp chữ\n nhật có thể tích lớn nhất khi độ dài cạnh hình vuông của miếng tôn bị cắt bỏ bằng 2m.",
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
    "question_en": "Mr. Binh uses exactly $5.5\\,\\text{m}^2$ of glass to make an open-top rectangular aquarium whose length is twice its width. Neglecting joint thickness, what is the maximum possible volume of the aquarium? Round to the nearest hundredth.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1,01m 3 .",
        "content_en": "$1.01\\,\\text{m}^3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1,17m 3 .",
        "content_en": "$1.17\\,\\text{m}^3$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1,51m 3 .",
        "content_en": "$1.51\\,\\text{m}^3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1, 40 m 3 . 6",
        "content_en": "$1.40\\,\\text{m}^3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x, 2 x, y với x, y > 0 lần lượt là chiều rộng, chiều dài, chiều cao của bể cá.\n 5,5 - 2 x^2\n Theo giả thiết ta có: 2.2 xy + 2.xy + 2 x^2 = 5,5 \\Leftrightarrow 6 xy + 2 x^2 = 5,5 \\Leftrightarrow y =\n 6x\n 11\n Do y > 0 nên 5,5 - 2 x^2 > 0 \\Rightarrow 0 < x <\n 2\n 5,5 - 2 x^2 2 11\n Thể tích bể cá là: V ( x ) = 2 x^2 y = 2 x^2 . = - x3 + x\n 6x 3 6\n 2 11 ( 11 ) 11 11\n Xét hàm số V ( x ) = - x3 + x trên khoảng  0;  có V ′ ( x ) = -2 x + = 0 \\Leftrightarrow x =\n 2\n 3 6  2  6 12\n Bảng biến thiên:\n ( 11 )\n  12  = 1,17m\n Thể tích lớn nhất của bể cá là V  3\n  ",
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
    "question_en": "An open-top rectangular water tank has volume $\\dfrac{500}{3}\\,\\text{m}^3$. Its rectangular base has length twice its width, and construction labor costs 700,000 VND per square meter of tank surface. Find the tank dimensions that minimize labor cost. What is the minimum labor cost?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "120 triệu đồng.",
        "content_en": "120 million VND.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "105 triệu đồng.",
        "content_en": "105 million VND.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "115 triệu đồng.",
        "content_en": "115 million VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "110 triệu đồng.",
        "content_en": "110 million VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x, y lần lượt là chiều rộng và chiều cao của bể cá (điều kiện x, y > 0 ).\n 500 250\n Với giả thiết của bài toán, thể tích bể cá là: V = 2 x^2 y = \\Rightarrowy= 2\n 3 3x\n Để chi phí thuê nhân công ít nhất thì tổng diện tích các mặt của bể cá phải nhỏ nhất.\n 500\n Tổng diện tích các mặt của bể cá S = 2 xy + 2.2 xy + 2 x^2 = 6 xy + 2 x^2 = + 2 x2\n x\n 500 500\n Xét hàm số S ( x ) = + 2 x^2 trên khoảng ( 0;+ \\infty ) có S ′ ( x ) = - 2 + 4 x = 0 \\Leftrightarrow x = 5\n x x\n Bảng biến thiên:\n Do đó min S = 150 tại x = 5 .\n Khi đó chi phí thuê nhân công là: T = 150.700000 = 105 triệu đồng.",
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
    "question_en": "A motorcycle dealer buys model X for 27 million VND and currently sells it for 31 million VND, selling 600 units per year. Market research estimates that each 1-million-VND price reduction would increase annual sales by 200 units. What new selling price maximizes annual profit?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "30 triệu đồng.",
        "content_en": "30 million VND.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "30,5 triệu đồng.",
        "content_en": "30.5 million VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "29,5 triệu đồng.",
        "content_en": "29.5 million VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "32 triệu đồng.",
        "content_en": "32 million VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi giá bán mới là x (triệu đồng) với 27 \\le x \\le 31\n Khi đó số xe bán ra là 600 + ( 31 - x ) .200\n Lợi nhuận thu được là: f ( x ) = [600 + ( 31 - x ) .200 ] ( x - 27 ) = ( -200 x + 6800 )( x - 27 )\n 2\n ( 61 )\n = -200 x + 12200 x - 183600 = -200  x -  + 2450 \\le 2450\n 2\n  2\n 61\n Dấu \" = \" xảy ta khi x - = 0 \\Leftrightarrow x = 30,5\n 2\n Vậy giá bán mới là 30,5 triệu đồng thì lợi nhuận lớn nhất thu được là 2450 triệu đồng.",
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
    "id": "src-pnl-54c8b5ca4fcf3e",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Nhà máy A chuyên sản xuất một loại sản phẩm cung cấp cho nhà máy B . Hai nhà máy thoả thuận rằng, hằng tháng A cung cấp cho B số lượng sản phẩm theo đơn đặt hàng của B (tối đa 100 tấn sản phẩm). Nếu số lượng đặt hàng là x tấn sản phẩm thì giá bán cho mỗi tấn sản phẩm là P ( x ) = 45 - 0,001x 2 (triệu đồng). Chi phí để A sản xuất x tấn sản phẩm trong một tháng là C ( x ) = 100 + 30 x (triệu đồng) (gồm 100 triệu đồng chi phí cố định và 30 triệu đồng cho mỗi tấn sản phẩm).",
    "question_en": "Factory A supplies a product to Factory B, at most 100 tons per month. For an order of $x$ tons, the selling price per ton is $P(x)=45-0.001x^2$ million VND. The monthly production cost is $C(x)=100+30x$ million VND. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Chi phí để A sản xuất 10 tấn sảm phẩm trong một tháng là 400 triệu đồng.",
        "content_en": "Producing 10 tons in one month costs 400 million VND.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số tiền A thu được khi bán 10 tấn sản phẩm cho B là 600 triệu đồng.",
        "content_en": "Selling 10 tons to B yields revenue of 600 million VND.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Lợi nhuận mà A thu được khi bán x tấn sản phẩm ( 0 \\le x \\le 100 ) cho B được biểu diễn bằng công thức -0,01x 3 + 15 x - 100 .",
        "content_en": "For $0\\le x\\le100$, the profit is $-0.01x^3+15x-100$ million VND.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "A bán cho B khoảng 70,7 tấn sản phẩm mỗi tháng thì thu được lợi nhuận lớn nhất.",
        "content_en": "A maximizes monthly profit by selling approximately 70.7 tons to B.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Chi phí để A sản xuất 10 tấn sảm phẩm trong một tháng là C (10 ) = 10 + 30.10 = 400\n triệu.\n b) Sai: Số tiền mà A thu được (gọi là doanh thu) từ việc bán x tấn sản phẩm ( 0 \\le x \\le 100 ) cho\n ( )\n B là: R ( x ) = x.P ( x ) = x 45 - 0,001x 2 = 45 x - 0,001x 3 triệu đồng\n Thay x = 10 ta được R (10 ) = 449 triệu đồng\n c) Đúng: Lợi nhuận (triệu đồng) mà A thu được là:\n P ( x ) = R ( x ) - C ( x ) = x ( 45 - 0,001x 2 ) - (100 + 30 x ) = -0,001x 3 + 15 x - 100\n d) Đúng: Xét hàm số P ( x ) = -0,001x 3 + 15 x - 100 với ( 0 \\le x \\le 100 ) ta có:\n P′ ( x ) = -0,003x 2 + 15 = 0 \\Leftrightarrow x^2 = 5000 \\Leftrightarrow x = 50 2 \\in [ 0;100]\n ( )\n Ta có P ( 0 ) = -100; P 50 2 = 500 2 - 100 ≈ 607; P (100 ) = 400\n Bảng biến thiên\n [0;100]\n ( )\n Từ bảng biến thiên ta có max P = P 50 2 = 500 2 - 100 ≈ 667\n Vậy A thu được lợi nhuận lớn nhất khi bán 50 2 ≈ 70,7 tấn sản phẩm cho B mỗi tháng và\n lợi nhuận lớn nhất thu được khoảng 607 triệu đồng.",
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
    "question_en": "When shrimp are raised in a natural pond, a scientist observes that if $x$ juvenile shrimp are stocked per square meter, the average final weight of each shrimp is $108-x^2$ grams. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Điều kiện xác định là x \\ge 0",
        "content_en": "The stated domain condition is $x\\ge0$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Sau một vụ lượng tôm trung bình trên mỗi mét vuông mặt hồ tự nhiên nặng x (108 - x^2 )",
        "content_en": "At harvest, the average total shrimp mass per square meter is $x(108-x^2)$ grams.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Để cuối vụ thu hoạch được nhiều tôm nhất trên mỗi mét vuông mặt hồ tự nhiên thì cần thả 16 con tôm giống",
        "content_en": "To maximize the harvested shrimp mass per square meter, 16 juvenile shrimp should be stocked.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Lượng tôm nhiều nhất cuối vụ có thể thu hoạch được trên mỗi mét vuông mặt hồ tự nhiên là 432 (gam).",
        "content_en": "The maximum harvested shrimp mass per square meter is 432 grams.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Điều kiện xác định là x \\ge 0\n b) Đúng: Sau một vụ lượng tôm trung bình trên mỗi mét vuông mặt hồ tự nhiên nặng x (108 - x^2 )\n c) Sai: Xét hàm số f ( x ) = 108 x - x3 trên khoảng ( 0;+\\infty ) ta có\n [x = 6\n f ′ ( x ) = 108 - 3x 2 = 0 \\Leftrightarrow 108 - 3x 2 = 0 \\Leftrightarrow \n  x = -6 < 0\n Trên khoảng ( 0;+\\infty ) hàm số f ( x ) = 108 x - x3 đạt giá trị lớn nhất tại x = 6 .\n Vậy nên thả 6 con tôm giống trên mỗi mét vuông mặt hồ thì cuối vụ thu hoạch được nhiều tôm\n nhất.\n d) Đúng: Lượng tôm nhiều nhất cuối vụ có thể thu hoạch được trên mỗi mét vuông mặt hồ tự\n nhiên là f ( 6 ) = 108.6 - 63 = 432 (gam).\n12",
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
    "id": "src-pnl-2587cedff8d8b3",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho một tấm nhôm hình vuông cạnh a. Người ta cắt ở 4 góc 4 hình vuông bằng nhau, rồi gập tấm nhôm lại để được một cái hộp không nắp.",
    "question_en": "A square aluminum sheet has side length $a$. Equal squares are cut from its four corners, and the sheet is folded to make an open-top box. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng . 12 a",
        "content_en": "The box volume is maximized when the side of each cut-out square is $a/12$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng . 6 3 2a",
        "content_en": "The box volume is maximized when the side of each cut-out square is $a/6$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Thể tích của khối hộp lớn nhất bằng . 27 a3",
        "content_en": "The maximum box volume is $2a^3/27$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Thể tích hộp lớn nhất bằng . 27",
        "content_en": "The maximum box volume is $a^3/27$.",
        "is_correct": false
      }
    ],
    "solution_vi": "( a)\n Gọi x là độ dài cạnh của hình vuông bị cắt  0 < x <  .\n  2\n 2 ( a)\n Thể tích của khối hộp là: V ( x ) = x ( a - 2 x )  0 < x <  .\n  2\n a ( a)\n V ′ ( x ) = ( a - 2 x ) + x.2 ( a - 2 x ) . ( -2 ) = ( a - 2 x )( a - 6 x ) = 0 \\Leftrightarrow x = 0 < x < .\n 2\n \n 6  2\n Bảng biến thiên:\n ( a ) 2a\n 3\n Vậy max V ( x) = V   = .\n ( a)\n  0;   6  27\n  2\n a\n a) Sai: Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng .\n 12\n a\n b) Đúng: Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng .\n 6\n 2a 3\n c) Đúng: Thể tích của khối hộp lớn nhất bằng .\n 27\n a3\n d) Sai: Thể tích hộp lớn nhất bằng .\n 27\n14",
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
    "id": "src-pnl-cb5889fc7dea81",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một loại thuốc được dùng cho một bệnh nhân và nồng độ thuốc trong máu của bệnh nhân được\n giám sát bởi bác sĩ. Biết rằng nồng độ thuốc trong máu của bệnh nhân sau khi tiêm vào cơ thể\n t\n trong t (giờ) được cho bởi công thức c ( t ) = 2 ( mg /L ) . Sau khi tiêm thuốc bao lâu (giờ) thì\n t +1\n nồng độ thuốc trong máu của bệnh nhân cao nhất?",
    "question_en": "After a drug is injected, its concentration in a patient’s blood is $c(t)=\\dfrac{t}{t^2+1}$ mg/L, where $t$ is measured in hours. How many hours after injection is the concentration highest?",
    "options": [],
    "solution_vi": "-t + 1\n 2\n [t = 1\n Ta có c ' ( t ) = , ∀t \\in ( 0; +\\infty ) . Cho c ' ( t ) = 0 \\Leftrightarrow  .\n ( t + 1) t = -1\n 2 2\n Bảng biến thiên:\n Vậy sau khi tiêm 1 giờ, nồng độ thuốc trong máu bệnh nhân cao nhất.",
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
    "question_en": "A biologist models the effect of a toxin on bacteria X by $P(t)=\\dfrac{t+1}{t^2+t+4}$, where $P(t)$ is the bacterial population after $t$ hours of toxin exposure. After how many hours does the population begin to decrease?",
    "options": [],
    "solution_vi": "Xét P′ ( t ) =\n -t - 2t + 3\n 2\n =\n ( t - 1)( -t - 3) .\n (t + t + 4) (t + t + 4)\n 2 2 2 2\n [t = -3\n P′ ( t ) = 0 \\Leftrightarrow  .\n t = 1\n Ta thấy hàm số đạt cực đại tại t = 1 và P ' ( t ) < 0, ∀t \\in (1; +\\infty ) nên sau 1 giờ thì vi khuẩn bắt đầu\n giảm.\n 1",
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
    "id": "src-pnl-e6888a58d71ced",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một cửa hàng bán vải Thanh Hà với giá bán mỗi kg là 50.000 đồng. Với giá bán này thì cửa hàng\n chỉ bán được khoảng 25kg. Cửa hàng này dự định giảm giá bán, ước tính nếu cửa hàng cứ giảm\n 4000 đồng cho một kg thì số vải bán được tăng thêm là 50kg. Xác định giá bán để cửa hàng đó\n thu được lợi nhuận lớn nhất, biết rằng giá nhập về ban đầu mỗi kg là 30.000 đồng.",
    "question_en": "Thanh Ha fabric store sells fabric at 50,000 VND/kg and at that price sells about 25 kg. The store estimates that each 4,000-VND reduction in price per kilogram increases sales by 50 kg. Find the selling price that maximizes profit, given a purchase cost of 30,000 VND/kg.",
    "options": [],
    "solution_vi": "20 \n Gọi x đồng ( 30.000 < x < 50.000 ) là giá bán vải mới để cửa hàng thu được lợi nhuận lớn nhất.\n Suy ra giá bán ra đã giảm là ( 50.000 - x ) đồng.\n 50 ( 50000 - x )\n Số lượng vải bán ra đã tăng thêm là = 625 - 0,0125.x .\n 4000\n Tổng số vải bán được là 25 + 625 - 0,0125.x = 650 - 0,0125.x .\n Doanh thu của cửa hàng là ( 650 - 0,0125.x ) x .\n Số tiền vốn ban đầu để mua vải là ( 650 - 0,0125.x ) 30000 .\n Vậy lợi nhuận của cửa hàng là\n ( 650 - 0,0125.x ) x - ( 650 - 0,0125.x ) 30000 = -0,0125 x^2 + 1025 x - 19500000 .\n Ta có: f ( x ) = -0,0125 x^2 + 1025 x - 19500000 = -0,0125 ( x - 41000 ) + 1512500 \\le 1512500 .\n 2\n Suy ra max f ( x ) = 1512500 khi x = 41.000 đồng.\n Vậy giá bán mỗi cân vải là 41.000 đồng thì cửa hàng thu được lợi nhuận lớn nhất.",
    "solution_en": "",
    "correct_answer": "41000",
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
    "id": "src-pnl-d53123c396f1cb",
    "topic_id": "top-12-1-2",
    "type_id": "type-kntt-12-02-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị của tham số m để hàm số y = f ( x ) = 4 x - m - x^2 đạt giá trị lớn nhất bằng\n 5?",
    "question_en": "How many values of $m$ make $f(x)=4x-m-x^2$ attain a maximum value of $5$?",
    "options": [],
    "solution_vi": "Hàm số y = f ( x ) đạt giá trị lớn nhất bằng 5 thì 4 x - m - x^2 \\le 5 \\Leftrightarrow 4 x - m \\le x^2 + 5 , ∀x \\in\n {\n 4 x - m \\le x + 5, ∀x \\in\n 2\n {\n m \\ge - x + 4 x - 5, ∀x \\in\n 2\n {m \\ge -1\n \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow .\n 4 x - m \\ge - x - 5, ∀x \\in\n  m \\le x + 4 x + 5, ∀x \\in\n  m \\le 1\n 2 2\n [ m = -1\n Do đó giá trị lớn nhất của hàm số y = f ( x ) bằng 5 \\Leftrightarrow  \\Leftrightarrow m \\in {-1;1} .\n m = 1\n Vậy có 2 giá trị m cần tìm.\n 2 x +1 + m",
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
    "id": "src-pnl-4654b3ebd0bea7",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm m để đồ thị của hàm số y = x^3 + 3mx 2 - 2 x - 4 cắt trục hoành tại 3 điểm phân biệt có hoành độ là x1 , x2 , x3 thỏa mãn x1 + x2 = 2 x3 .",
    "question_en": "Find $m$ so that the graph of $y=x^3+3mx^2-2x-4$ intersects the x-axis at three distinct points with abscissas $x_1,x_2,x_3$ satisfying $x_1+x_2=2x_3$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = 0 .",
        "content_en": "$m=0$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 1 .",
        "content_en": "$m=1$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "m = 2 .",
        "content_en": "$m=2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 3 .",
        "content_en": "$m=3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Xét phương trình hoành độ giao điểm của y = x^3 + 3mx 2 - 2 x - 4 và trục hoành ta có\n x^3 + 3mx 2 - 2 x - 4 = 0 (1) .\n Áp dụng định lý Vi-et ta có x1 + x2 + x3 = 3x3 = -3m \\Rightarrow x3 = -m .\n Thay x3 = - m vào (1) ta được 2m3 + 2m - 4 = 0 \\Leftrightarrow m = 1 .\n [ x = -1\n Thử lại : Thay m = 1 vào (1) ta được x3 + 3x 2 - 2 x - 4 = 0 \\Leftrightarrow  , thỏa mãn điều kiện.\n  x = -1 \\pm 5\n Vậy m = 1 thỏa mãn điều kiện bài toán.",
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
    "question_en": "Find all real values of $m$ for which the graph of $y=x^3-3x^2+2$ intersects the line $y=m(x-1)$ at three distinct points with abscissas $x_1,x_2,x_3$ satisfying $x_1^2+x_2^2+x_3^2>5$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m \\ge -3 .",
        "content_en": "$m\\ge-3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m > -2 .",
        "content_en": "$m>-2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m > -3 .",
        "content_en": "$m>-3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m \\ge -2 .",
        "content_en": "$m\\ge-2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Phương trình hoành độ giao điểm\n [x = 1\n x3 - 3x 2 + 2 = m( x - 1) \\Leftrightarrow ( x - 1) ( x^2 - 2 x - 2 - m ) = 0 \\Leftrightarrow  2\n  x - 2 x - 2 - m = 0 (*)\n Đồ thị hàm số y = x3 - 3x 2 + 2 cắt đường thẳng y = m( x - 1) tại ba điểm phân biệt khi và chỉ\n {1 + 2 + m > 0\n khi phương trình ( ∗) có hai nghiệm phân biệt khác 1 \\Leftrightarrow  \\Leftrightarrow m > -3 .\n 1 - 2 - 2 - m \\ne 0\n Gọi x2 , x3 là hai nghiệm của phương trình ( ∗) .\n Ta có: x12 + x22 + x32 > 5 \\Leftrightarrow ( x2 + x3 ) - 2 x2 x3 > 4 \\Leftrightarrow 4 - 2 ( -2 - m ) > 4 \\Leftrightarrow m > -2 . Vậy m > -2 .\n 2",
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
    "id": "src-pnl-d35130176defb7",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-01",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x^3 - 3x 2 + mx + 1 có đồ thị ( C ) và đường thẳng d : y = 2 x + 1 . Có bao nhiêu giá\n trị nguyên dương của tham số m để đồ thị ( C ) cắt đường thẳng d tại 3 điểm phân biệt?",
    "question_en": "Let $(C)$ be the graph of $y=x^3-3x^2+mx+1$ and let $d:y=2x+1$. How many positive integer values of $m$ make $(C)$ intersect $d$ at three distinct points?",
    "options": [],
    "solution_vi": "Phương trình hoành độ giao điểm x3 - 3x 2 + mx + 1 = 2 x + 1 \\Leftrightarrow x3 - 3x 2 + ( m - 2 ) x = 0\n [x = 0\n \\Leftrightarrow x ( x^2 - 3x + m - 2 ) = 0 \\Leftrightarrow  2 . Đặt f ( x ) = x^2 - 3x + m - 2 .\n  x - 3x + m - 2 = 0\n Để đồ thị ( C ) cắt đường thẳng d tại 3 điểm phân biệt thì phương trình\n x3 - 3x 2 + ( m - 2 ) x = 0 phải có 3 nghiệm phân biệt, khi đó f ( x ) = 0 phải có hai nghiệm phân\n {m \\ne 2\n { f ( 0 ) \\ne 0 {m - 2 \\ne 0 {m \\ne 2 \n biệt khác 0 . Do đó  \\Leftrightarrow \\Leftrightarrow \\Leftrightarrow 17 .\n ∆ > 0 9 - 4 ( m - 2 ) > 0 -4m > -17  m <\n 4\n Do m là số nguyên dương nên m \\in {1,3, 4} .",
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
    "question_en": "For real parameter $m$, what is the maximum possible number of intersection points between the graph $y=x^3-2x^2+x-1$ and the line $y=m$?",
    "options": [],
    "solution_vi": "[ 1\n  x=\n Hàm số y = x - 2 x + x - 1 có tập xác định:\n 3 2\n ; y′ = 3 x - 4 x + 1 ; y ' = 0 \\Leftrightarrow\n 2\n 3.\n \n x = 1\n22 \n Dựa vào bảng biến thiên đồ thi hàm số y = x^3 - 2 x^2 + x - 1 và đường thẳng y = m có nhiều\n nhất là ba giao điểm.",
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
    "question_en": "How many integer values of $m$ make the equation $x^3-3x^2-m^2+5m=0$ have three distinct real roots?",
    "options": [],
    "solution_vi": "Đặt f ( x ) = x3 - 3x 2 - m 2 + 5m .\n Để x3 - 3x 2 - m 2 + 5m = 0 có ba nghiệm thực phân biệt thì f ′ ( x ) = 0 có hai nghiệm phân biệt\n x1 , x2 thỏa mãn: f ( x1 ) . f ( x2 ) < 0\n [x = 0\n Ta có: f ′ ( x ) = 3x 2 - 6 x ; f ′ ( x ) = 0 \\Leftrightarrow 3x 2 - 6 x = 0 \\Leftrightarrow  .\n x = 2\n f ( 0 ) = -m 2 + 5m ; f ( 2 ) = -m 2 + 5m - 4 .\n [0 < m < 1\n Khi đó: f ( 0 ) . f ( 2 ) < 0 \\Leftrightarrow ( -m2 + 5m )( -m2 + 5m - 4 ) < 0 \\Leftrightarrow \n 4 < m < 5\n Vậy không có giá trị nguyên nào của m thỏa mãn.",
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
    "question_en": "Let $(C_m)$ be the graph of $y=x^3-(m+2)x^2-(2m+13)x-m-2$, let $d:y=mx+m+8$, and let $I(1,4)$. Find the sum of all values of $m$ such that $d$ intersects $(C_m)$ at three distinct points A, B, C, where A has abscissa $-2$ and triangle IBC is isosceles at I.",
    "options": [],
    "solution_vi": "[ x = -2\n Phương trình hoành độ giao điểm: x - ( m + 2 ) x - ( 3m + 13) x - 2m - 10 = 0 \\Leftrightarrow  x = -1\n 3\n  x = m + 5\n {m \\ne -7\n Để đường thẳng d cắt đồ thị ( Cm ) tại ba điểm phân biệt A, B, C thì \n m \\ne -6\n Giả sử B ( -1;8 ) , C ( m + 5; m2 + 6m + 8 ) . Để tam giác IBC cân tại I\n [ m = -2\n \n thì IB 2 = IC 2 \\Leftrightarrow 20 = ( m + 4 ) + ( m 2 + 6m + 4 ) \\Leftrightarrow  m = -6 ( loai )\n 2 2\n \n  m = -2 \\pm 3\n Vậy có ba giá trị của m thỏa mãn nên tổng các giá trị của m bằng -6 .",
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
    "question_en": "Let $(C)$ be the graph of $y=x^3-2x^2-1$, let $d:y=mx-1$, and let $K(4,11)$. Suppose $(C)$ and $d$ intersect at three distinct points A, B, C, with $A(0,-1)$, and the centroid of triangle KBC lies on $y=2x+1$. Find $m$.",
    "options": [],
    "solution_vi": "[x = 0\n Xét phương trình hoành độ: x3 - 2 x^2 - 1 = mx - 1 \\Leftrightarrow x3 - 2 x^2 - mx = 0 \\Leftrightarrow  2\n  x - 2 x - m = 0 (1)\n Suy ra A(0; -1) và hoành độ của điểm B và C là nghiệm của phương trình (1)\n Để ( C ) và ( d ) cắt nhau tại ba điểm phân biệt A, B, C khi và chỉ khi phương trình (1) có hai\n nghiệm phân biệt khác 0\n {∆ '(1) > 0 {1 + m > 0 {m > -1\n Khi và chỉ khi:  \\Leftrightarrow \\Leftrightarrow (*)\n m \\ne 0 m \\ne 0 m \\ne 0\n Giả sử: B ( x1;m x1 - 1) , C ( x2 ;m x2 - 1) . Theo Vi-ét ta có x1 + x2 = 2\n Gọi G là trọng tâm của tam giác KBC :\n { 4 + x1 + x2\n  xG = { xG = 2\n 3  ( 2m + 9 )\n  \\Leftrightarrow 2m + 9 \\Rightarrow G  2; \n  y = 11 + mx1 - 1 + mx2 - 1  yG = 3  3 \n  G 3\n 2m + 9\n Trọng tâm G nằm trên đường thẳng y = 2 x + 1 suy ra = 2.2 + 1 \\Leftrightarrow m = 3 thỏa mãn (*)\n 3\n -----------------HẾT-----------------",
    "solution_en": "",
    "correct_answer": "3",
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
    "id": "src-pnl-d3b55cc4a29a00",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tập tất cả các giá trị thực của tham số m để đường thẳng d : y = x - 2m cắt đồ thị hàm số\n x-3\n y= ( C ) tại hai điểm phân biệt có hoành độ dương là ( a; b ) . Tính giá trị biểu thức a + b\n x +1",
    "question_en": "All real values of $m$ for which the line $d:y=x-2m$ intersects $(C):y=\\dfrac{x-3}{x+1}$ at two distinct points with positive abscissas form an interval $(a,b)$. Find $a+b$.",
    "options": [],
    "solution_vi": "x-3\n Xét phương trình hoành độ giao điểm = x - 2m \\Rightarrow x - 3 = ( x + 1)( x - 2m )\n x +1\n \\Leftrightarrow x - 3 = x^2 - 2mx + x - 2m \\Leftrightarrow x^2 - 2mx + 3 - 2m = 0 (1)\n x-3\n Đường thẳng d : y = x - 2m cắt đồ thị hàm số y = ( C ) tại hai điểm phân biệt có hoành\n x +1\n độ dương \\Leftrightarrow (1) có hai nghiệm dương phân biệt\n { { [ m < -3\n {∆′ = m - ( 3 - 2m ) > 0\n 2\n m + 2m - 3 > 0   m > 1\n 2\n    3\n \\Leftrightarrow  S = 2m > 0 \\Leftrightarrow m>0  m > 0 \\Leftrightarrow1< m < .\n  P = 3 - 2m > 0   2\n  3 3\n  m<  m<\n  2  2\n 3 x-3\n Vậy với 1 < m < thì đường thẳng d : y = x - 2m cắt đồ thị hàm số y = ( C ) tại hai điểm\n 2 x +1\n 5\n phân biệt có hoành độ dương nên a + b = .\n 2\n x+m",
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
    "id": "src-pnl-06b912684a40ee",
    "topic_id": "top-12-1-4",
    "type_id": "type-kntt-12-04-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tập hợp tất cả các giá trị thực của tham số m để đường thẳng d : y = x - 2m cắt đồ thị hàm số\n x-3\n y= ( C ) tại hai điểm phân biệt có hoành độ dương là ( a ; b ) . Tính T = a + b\n x +1",
    "question_en": "All real values of $m$ for which the line $d:y=x-2m$ intersects $(C):y=\\dfrac{x-3}{x+1}$ at two distinct points with positive abscissas form an interval $(a,b)$. Find $T=a+b$.",
    "options": [],
    "solution_vi": "x-3\n Phương trình hoành độ giao điểm x - 2m = \\Leftrightarrow x^2 - 2mx - 2m + 3 = 0\n x +1\n {\n { ∆ ' = m 2 + 2m - 3 > 0 m < 1, m > 3\n  \n Yêu cầu đề bài \\Leftrightarrow  S = 2m > 0 \\Leftrightarrow m > 0 \\Leftrightarrow 0 < m < 1 nên T = a + b = 1\n  P = -2m + 3 > 0  3\n  m <\n  2\n 2mx + 3m + 1",
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
    "id": "src-pnl-cd0da1f1172730",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hàm số y = 2 x^3 - 2 x^2 - 2 x + 1 đồng biến trên khoảng nào sau đây?",
    "question_en": "On which of the following intervals is $y=2x^3-2x^2-2x+1$ increasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -1;1)",
        "content_en": "$(-1,1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -\\infty;1)",
        "content_en": "$(-\\infty,1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 0; 2 )",
        "content_en": "$(0,2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1; 2 )",
        "content_en": "$(1,2)$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Chọn D\n Tập xác định D = .\n [ 1\n  x=-\n Ta có y′ = 6 x - 4 x - 2 ; y′ = 0 \\Leftrightarrow\n 2\n 3.\n \n x = 1\n Bảng biến thiên:\n ( 1)\n Hàm số đồng biến trên khoảng  -\\infty; -  và (1; +\\infty ) .\n  3\n x+3",
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
    "id": "src-pnl-5b4bee97cccfbe",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hàm số y = - x + 8 x + 6 đồng biến trên khoảng nào dưới đây? 4 2",
    "question_en": "On which of the following intervals is $y=-x^4+8x^2+6$ increasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -2; 0 ) và ( 2; + \\infty ) .",
        "content_en": "$(-2,0)$ and $(2,+\\infty)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -\\infty ; - 2 ) và ( 0; 2 ) .",
        "content_en": "$(-\\infty,-2)$ and $(0,2)$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "( -\\infty ; - 2 ) và ( 2; + \\infty ) .",
        "content_en": "$(-\\infty,-2)$ and $(2,+\\infty)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( -2; 2 ) .",
        "content_en": "$(-2,2)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D = .\n12 \n [x = 0 \\Rightarrow y = 6\n y′ = -4 x3 + 16 x ; y′ = 0 \\Leftrightarrow -4 x^3 + 16 x = 0 \\Leftrightarrow  x = 2 \\Rightarrow y = 22 .\n  x = -2 \\Rightarrow y = 22\n Bảng biến thiên\n Vậy hàm số y = - x + 8 x + 6 đồng biến trên khoảng ( -\\infty ; - 2 ) và ( 0; 2 ) .\n 4 2",
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
    "question_en": "On which of the following intervals is the function $y=x^4+x^2-2$ decreasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "( -\\infty; 0 ) .",
        "content_en": "$(-\\infty,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -2;1) .",
        "content_en": "$(-2,1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( 0; +\\infty ) .",
        "content_en": "$(0,+\\infty)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "( 0; 2 ) .",
        "content_en": "$(0,2)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D = . Ta có y ' = 4 x3 + 2 x = 2 x ( 2 x^2 + 1) .\n Ta có y ' > 0, ∀x > 0 và y ' < 0, ∀x < 0. Suy ra hàm số nghịch biến trên khoảng ( -\\infty; 0 ) .",
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
    "id": "src-pnl-44d85ac9ab320b",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = f ( x ) liên tục trên và có đạo hàm f ' ( x ) = ( x + 1)( x - 1) ( 2 - x ) . Mệnh đề nào 4 dưới đây đúng?",
    "question_en": "Let $y=f(x)$ be continuous on $\\mathbb R$ and satisfy $f'(x)=(x+1)(x-1)(2-x)$. Which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "f ( 5 ) > f ( 4 ) > f ( 3) .",
        "content_en": "$f(5)>f(4)>f(3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "f ( -1) > f ( 0 ) > f (1) .",
        "content_en": "$f(-1)>f(0)>f(1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "f ( -3) < f ( -2 ) < f ( -1) .",
        "content_en": "$f(-3)<f(-2)<f(-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "f ( 0 ) < f (1) < f ( 2 ) .",
        "content_en": "$f(0)<f(1)<f(2)$.",
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
    "question_en": "On which of the following intervals is $y=8+2x-x^2$ increasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "(1; +\\infty ) .",
        "content_en": "$(1,+\\infty)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "( -\\infty;1) .",
        "content_en": "$(-\\infty,1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "( -2;1) .",
        "content_en": "$(-2,1)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "(1; 4 ) .",
        "content_en": "$(1,4)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Điều kiện xác định: -2 \\le x \\le 4\n -x +1 -x + 1\n Ta có: ∀x \\in ( -2; 4 ) , y ' = >0\\Leftrightarrow > 0 \\Leftrightarrow -x + 1 > 0 \\Leftrightarrow x < 1\n 8 + 2x - x^2\n 8 + 2x - x2\n Kết hợp với điều kiện xác định ta được hàm số đồng biến trên ( -2;1) .",
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
    "id": "src-pnl-b687d4a26a1321",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm giá trị cực tiểu của hàm số y = - x^3 + 3x + 4 .",
    "question_en": "Find the local minimum value of $y=-x^3+3x+4$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "yCT = 2 .",
        "content_en": "$y_{\\min}=2$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "yCT = 1 .",
        "content_en": "$y_{\\min}=1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "yCT = 6 .",
        "content_en": "$y_{\\min}=6$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "yCT = -1 .",
        "content_en": "$y_{\\min}=-1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định của hàm số: D = .\n [ x = -1 \\Rightarrow y = 2\n Ta có y′ = -3 x^2 + 3 , y′ = 0 \\Rightarrow -3x 2 + 3 = 0 \\Leftrightarrow  .\n x = 1 \\Rightarrow y = 6\n Bảng biến thiên\n Vậy giá trị cực tiểu của hàm số yCT = 2 tại x = -1 .",
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
    "id": "src-pnl-49df2aa9b13cde",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Hàm số y = f ( x ) có đạo hàm là f ' ( x ) = x^2 ( x + 1) ( 2 x - 1) . Số điểm cực trị của hàm số 2 y = f ( x ) là",
    "question_en": "The derivative of $y=f(x)$ is $f'(x)=x^2(x+1)(2x-1)$. How many local extrema does $f$ have?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3 .",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "0 .",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1 .",
        "content_en": "$1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2 . 18",
        "content_en": "$2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "[\n x = 0\n \n Ta có f ' ( x ) = 0 \\Leftrightarrow x^2 ( x + 1) ( 2 x - 1) = 0 \\Leftrightarrow  x = -1\n 2\n  1\n x =\n  2\n Nhận thấy x^2 > 0 ∀x \\ne 0 \\Rightarrow f ′ ( x ) không đổi dấu khi qua nghiệm x = 0 nên x = 0 không phải\n là điểm cực trị hàm số.\n Tương tự ( x + 1) > 0 ∀x \\ne -1 \\Rightarrow f ′ ( x ) không đổi dấu khi qua nghiệm x = -1 nên x = -1 không\n 2\n phải là điểm cực trị hàm số.\n 1\n f ' ( x ) cùng dấu với nhị thức 2 x - 1 nên x = là điểm cực trị của hàm số.\n 2",
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
    "id": "src-pnl-c18b247a5f05f0",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Biết hàm số y = ax 3 + bx 2 + cx + d có hai điểm cực trị là ( -1;18 ) và ( 3; - 16 ) . Tính giá trị biểu\n thức P = a + b + c + d .",
    "question_en": "The cubic function $y=ax^3+bx^2+cx+d$ has local extrema at $(-1,18)$ and $(3,-16)$. Find $P=a+b+c+d$.",
    "options": [],
    "solution_vi": "Ta có y′ = 3x 2 + 2bx + c\n { y′ (1) = 3a - 2b + c = 0\n \n  y ( -1) = - a + b - c + d = 18\n Theo giả thiết suy ra: \n  y′ ( 3) = 27a + 6b + c = 0\n  y^3 = 27a + 9b + 3 x + d = 16\n  ( )\n26 \n {3a - 2b + c = 0\n -a + b - c + d = 18\n  17 51 153 101\n Khi đó ta có hệ  \\Rightarrowa= ;b= ;c=- ;d= \\Rightarrow P = 1.\n  27 a + 6b + c = 0 16 16 16 16\n 27 a + 9b + 3 x + d = 16",
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
    "question_en": "The graph of $y=x^3-3x^2-9x+1$ has two local-extremum points A and B. Find the distance from the origin O to line AB.",
    "options": [],
    "solution_vi": "Hàm số y = x^3 - 3x 2 - 9 x + 1 có y′ = 3x 2 - 6 x - 9 nên có hai điểm cực trị A ( -1;6 ) và B ( 3; - 26 )\n 2\n Phương trình đường thẳng qua AB là 8 x + y + 2 = 0 . Khi đó d ( O; AB ) = .\n 65\n x2 - 4x + 5",
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
    "question_en": "Let A, B, and C be the three local-extremum points of the graph $y=x^4-2x^2+4$. Find the inradius of triangle ABC.",
    "options": [],
    "solution_vi": "[x = 0\n Tập xác định D = và có đạo hàm y′ = 4 x3 - 4 x = 0 \\Leftrightarrow \n  x = \\pm1\n Giả sử A ( 0;4 ) , B ( -1;3) , C (1;3) . Khi đó AB = AC = 2 và BC = 2\n Suy ra tam giác ABC vuông cân tại A\n 2S∆ABC AB. AC\n Vậy bán kính đường tròn nội tiếp tam giác ABC bằng: r = = = 2 -1\n AB + BC + CA 2 2 + 2",
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
    "question_en": "The cubic function $y=ax^3+bx^2+cx+d$ has extrema at $x_1,x_2$ with $x_1\\in(-1,0)$ and $x_2\\in(1,2)$. The function is increasing on $(x_1,x_2)$, and its graph intersects the y-axis at a point with negative ordinate. Among $a,b,c$, how many are negative?",
    "options": [],
    "solution_vi": "Hàm số đa thức bậc 3: y = ax 3 + bx 2 + cx + d đạt cực trị tại các điểm x1 , x2 nên a \\ne 0.\n Suy ra: x1 , x2 là hai nghiệm của phương trình y ' = 3ax 2 + 2bx + c = 0.\n { -2b\n  x1 + x2 = 3a\n Theo định lý Vi-et ta có:  .\n  x .x = c\n  1 2 3a\n Áp dụng định lý dấu tam thức bậc 2, ta có hàm số đồng biến trên khoảng ( x1; x2 ) \\Rightarrow a < 0.\n { -2b\n { x1 + x2 > 0  3a > 0 {b > 0\n Vì x1 \\in ( -1;0 ) , x2 \\in (1;2 ) nên  \\Leftrightarrow do a < 0 \\Rightarrow \n  x1.x2 < 0  c <0 c > 0\n  3a\n Vậy trong các số a, b và c có 1 số âm là a.\n -----------------HẾT-----------------\n28",
    "solution_en": "",
    "correct_answer": "1",
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
    "id": "src-pnl-4632828db2139a",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Số giá trị nguyên của tham số m để hàm số y = ( m2 - 1) x3 + ( m - 1) x^2 - x nghịch biến trên là",
    "question_en": "How many integer values of $m$ make $y=(m^2-1)x^3+(m-1)x^2-x$ decreasing on $\\mathbb R$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2.",
        "content_en": "$2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "3.",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1.",
        "content_en": "$1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "0.",
        "content_en": "$0$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Yêu cầu đề bài tương đương với y′ = 3 ( m2 - 1) x^2 + 2 ( m - 1) x - 1 \\le 0, ∀x \\in .\n Khi m 2 - 1 = 0 \\Leftrightarrow m = \\pm1 .\n Với m = 1 thì y′ = -1 < 0, ∀x \\in do đó giá trị m = 1 thỏa mãn.\n 1\n Với m = -1 thì y′ = -4 x - 1 \\le 0 \\Leftrightarrow x \\ge - , do đó giá trị m = -1 không thỏa mãn.\n 4\n Khi m 2 - 1 \\ne 0 \\Leftrightarrow m \\ne \\pm1 , YCBT tương đương với\n {m 2 - 1 < 0 {-1 < m < 1\n  1\n  \\Leftrightarrow 1 \\Leftrightarrow - \\le m < 1.\n ( m - 1) + 3 ( m - 1) \\le 0 - 2 \\le m \\le 1\n 2 2\n 2\n 1\n Vậy - \\le m \\le 1 nên có 2 giá trị nguyên của tham số m là m = 0; m = 1 thoả mãn.\n 2\n mx + 2",
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
    "question_en": "How many integer values of $m$ make $y=(m-7)x^3+(m-7)x^2-2mx-1$ decreasing on $\\mathbb R$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "7 .",
        "content_en": "$7$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "9.",
        "content_en": "$9$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "4 .",
        "content_en": "$4$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "6 .",
        "content_en": "$6$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D = .\n Ta có y′ = 3 ( m - 7 ) x^2 + 2 ( m - 7 ) x - 2m .\n Trường hợp 1: m = 7 \\Rightarrow y′ = -14 < 0, ∀x \\in \\Rightarrow Hàm số nghịch biến trên \\Rightarrow m = 7.\n Trường hợp 2: m \\ne 7\n {m - 7 < 0 {m < 7\n Hàm số nghịch biến trên \\Leftrightarrow y′ \\le 0, ∀x \\in \\Leftrightarrow \\Leftrightarrow 2\n ∆′ \\le 0 7m - 56m + 49 \\le 0\n8 \n {m < 7\n \\Leftrightarrow \\Leftrightarrow1\\le m < 7.\n 1 \\le m \\le 7\n Vậy hàm số nghịch biến trên khi 1 \\le m \\le 7 . Do m \\in nên có 7 giá trị nguyên của m .\n x+m",
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
    "id": "src-pnl-4dbb2aa23d5d7d",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm tất cả các giá trị của tham số m để hàm số y = 3 sin x + cos x - mx + 5 nghịch biến trên tập xác định.",
    "question_en": "Find all values of $m$ for which $y=3\\sin x+\\cos x-mx+5$ is decreasing on its domain.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m \\ge 2.",
        "content_en": "$m\\ge2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m \\le 2.",
        "content_en": "$m\\le2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m \\ge -2.",
        "content_en": "$m\\ge-2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-2 \\le m \\le 2.",
        "content_en": "$-2\\le m\\le2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D = và có đạo hàm y′ = 3 cos x - sin x - m\n Hàm số y = 3 sin x + cos x - mx + 5 nghịch biến trên\n \\Leftrightarrow y′ = 3 cos x - sin x - m \\le 0, ∀x \\in\n 3 1 m ( π) m\n \\Leftrightarrow cos x - sin x \\le , ∀x \\in \\Leftrightarrow sin  x -  \\le , ∀x \\in (1)\n 2 2 2  3 2\n ( π) m\n Vì -1 \\le sin  x -  \\le 1, ∀x \\in nên (1) \\Leftrightarrow \\ge1\\Leftrightarrow m \\ge 2.\n  3 2",
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
    "question_en": "How many integer values of the real parameter $m$ make $f(x)=\\dfrac{m}{3}x^3-2mx^2+(m-5)x+2021$ decreasing on $\\mathbb R$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1.",
        "content_en": "$1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "0.",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3.",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2.",
        "content_en": "$2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: f ′ ( x ) = mx 2 - 4mx + m - 5\n Yêu cầu bài toán \\Leftrightarrow f ′ ( x ) \\le 0 , ∀x \\in\n Trường hợp 1: m = 0\n Khi đó: f ′ ( x ) = -5 < 0 , ∀x \\in\n Suy ra: nhận m = 0 .\n Trường hợp 2: m \\ne 0\n {m < 0 {m < 0\n {a < 0  5\n Khi đó: f ′ ( x ) \\le 0 , ∀x \\in \\Leftrightarrow \\Leftrightarrow 2 \\Leftrightarrow 5 \\Leftrightarrow- \\lem<0\n ∆′ \\le 0 4m - m ( m - 5 ) \\le 0 - 3 \\le m \\le 0 3\n 5\n Vậy - \\le m \\le 0 thoả mãn yêu cầu bài toán.\n 3\n Do m \\in nên m \\in {-1;0} .\n x + m2",
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
    "id": "src-pnl-44edd805a1447a",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm giá trị lớn nhất của tham số m để hàm số y = x3 - mx 2 + ( 8 - 2m ) x + m + 3 đồng biến 3 trên .",
    "question_en": "Find the greatest value of $m$ for which $y=\\dfrac13x^3-mx^2+(8-2m)x+m+3$ is increasing on $\\mathbb R$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -4.",
        "content_en": "$m=-4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = -2 .",
        "content_en": "$m=-2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 4 .",
        "content_en": "$m=4$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 2 .",
        "content_en": "$m=2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D = và có đạo hàm y ' = x^2 - 2mx + 8 - 2m .\n Hàm số đồng biến trên \\Leftrightarrow y ' \\ge 0, ∀x \\in\n {a > 0 {1 > 0\n \\Leftrightarrow x^2 - 2mx + 8 - 2m \\ge 0, ∀x \\in \\Leftrightarrow \\Leftrightarrow 2 \\Leftrightarrow -4 \\le m \\le 2 .\n ∆ ' \\le 0  m + 2m - 8 \\le 0\n 1\n Giá trị lớn nhất của tham số m để hàm số y = x3 - mx 2 + ( 8 - 2m ) x + m + 3 đồng biến trên\n 3\n thì m = 2 .\n 1",
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
    "id": "src-pnl-f3a9790a57a309",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = 2 x3 - 3 ( m + 1) x^2 + 6mx + 1 nghịch biến trên khoảng (1;3) khi và chỉ khi",
    "question_en": "The function $y=2x^3-3(m+1)x^2+6mx+1$ is decreasing on $(1,3)$ if and only if:",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m \\ge 1 .",
        "content_en": "$m\\ge1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 < m < 3 .",
        "content_en": "$1<m<3$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m > 3 .",
        "content_en": "$m>3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m \\ge 3 .",
        "content_en": "$m\\ge3$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Tập xác định D = .\n y = 2 x3 - 3 ( m + 1) x^2 + 6mx + 1 \\Rightarrow y ' = 6 x^2 - 6 ( m + 1) x + 6m .\n Hàm số nghịch biến trên khoảng (1;3) .\n \\Leftrightarrow y′ \\le 0, ∀x \\in (1;3) \\Leftrightarrow 6 x^2 - 6 ( m + 1) x + 6m \\le 0, ∀x \\in (1;3) .\n \\Leftrightarrow x^2 - ( m + 1) x + m \\le 0, ∀x \\in (1;3) \\Leftrightarrow m \\ge x, ∀x \\in (1;3) . Vậy m \\ge 3, ∀x \\in (1;3) .\n 1",
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
    "id": "src-pnl-4d894ba7f9d9d2",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m \\in ( -10;10 ) sao cho ứng với mỗi m , hàm số ( m + 1) x + 18 nghịch biến trên khoảng 3; 7 ? y= ( ) 3 x + 2m - 1",
    "question_en": "How many integer values $m\\in(-10,10)$ make $y=\\dfrac{(m+1)x+18}{3x+2m-1}$ decreasing on $(3,7)$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8 .",
        "content_en": "$8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "10 .",
        "content_en": "$10$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "11 .",
        "content_en": "$11$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "9 .",
        "content_en": "$9$.",
        "is_correct": false
      }
    ],
    "solution_vi": "-2m + 1\n Điều kiện: 3x + 2m - 1 \\ne 0 \\Leftrightarrow x \\ne\n 3\n Đạo hàm y′ =\n ( m + 1)( 2m - 1) - 54 = 2m2 + m - 55\n ( 3x + 2m - 1) ( 3x + 2m - 1)\n 2 2\n ( m + 1) x + 18 nghịch biến trên khoảng 3; 7\n Hàm số y = ( )\n 3 x + 2m - 1\n { 11\n - 2 < m < 5 { 11\n {2m + m - 55 < 0  - < m < 5\n 2\n   [ -2m + 1  2\n \\Leftrightarrow  -2m + 1 \\Leftrightarrow  \\le3\\Leftrightarrow \\Leftrightarrow -4 \\le m < 5\n \\notin ( 3;7 ) m \\ge -4\n   3 [\n  3   -2m + 1   m \\le -10\n  3 \\ge 7\n \n Mà m \\in ( -10;10 ) , m nguyên nên m \\in {-4; -3; -2; -1;0;1;2;3;4} .\n Vậy có 9 giá trị m thỏa mãn yêu cầu bài toán.\n ln x - 6",
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
    "question_en": "How many positive integer values $m\\le2024$ make $y=\\dfrac{x^2+2x-1+m}{5x+m}$ decreasing on $(-3,1)$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2012 .",
        "content_en": "$2012$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2009 .",
        "content_en": "$2009$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2011 .",
        "content_en": "$2011$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2010 .",
        "content_en": "$2010$.",
        "is_correct": true
      }
    ],
    "solution_vi": "{ m} 5 x^2 + 2mx - 3m + 1\n Tập xác định D = \\ -  và có đạo hàm y′ = .\n  5 (5x + m )\n 2\n Hàm số nghịch biến trên khoảng ( -3;1)\n {5 x^2 + 2mx - 3m + 1 \\le 0∀x \\in ( -3;1)\n 5 x + 2mx - 3m + 1\n 2\n \n \\Leftrightarrow y′ = \\le 0∀x \\in ( -3;1) \\Leftrightarrow  m\n (5x + m ) - \\notin ( -3;1)\n 2\n  5\n { { 46\n  m \\ge\n -9m + 46 \\le 0  9\n  \n \\Leftrightarrow -m + 6 \\le 0 \\Leftrightarrow m \\ge 6 \\Leftrightarrow m \\ge 15\n  m \\le -5  m \\le -5\n [ [\n \n   m \\ge 15   m \\ge 15\n Do nguyên dương không lớn hơn 2024 nên 15 \\le m \\le 2024 . Vậy có tất cả 2010 giá trị.\n 2 x^2 + (1 - m ) x + 1 + m",
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
    "id": "src-pnl-a2f67152e7435d",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên dương bé hơn 2024 của tham số m sao cho hàm số 2 x^2 + 2 x - 1 - 5m y= nghịch biến trên khoảng (1;5 ) ? x-m",
    "question_en": "How many positive integer values $m<2024$ make $y=\\dfrac{2x^2+2x-1-5m}{x-m}$ decreasing on $(1,5)$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2017 .",
        "content_en": "$2017$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2018 .",
        "content_en": "$2018$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2020 .",
        "content_en": "$2020$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2019 .",
        "content_en": "$2019$.",
        "is_correct": true
      }
    ],
    "solution_vi": "2 x^2 - 4mx + 3m + 1\n Tập xác định D = \\ {m} và có y′ = .\n ( x - m)\n 2\n Hàm số nghịch biến trên khoảng (1;5 )\n 2 x^2 - 4mx + 3m + 1 {2 x^2 - 4mx + 3m + 1 \\le 0∀x \\in (1;5 )\n \\Leftrightarrow y′ = \\le 0∀x \\in (1;5 ) \\Leftrightarrow \n ( x - m) m \\notin (1;5 )\n 2\n20 \n { {\n  \n -m + 3 \\le 0 m \\ge 3\n  \n \\Leftrightarrow -17m + 51 \\le 0 \\Leftrightarrow m \\ge 3 \\Leftrightarrow m \\ge 5\n  m \\le1  m \\le1\n [ [\n \n   m \\ge 5   m \\ge 5\n Do nguyên dương bé hơn 2024 nên 5 \\le m \\le 2023 . Vậy có tất cả 2019 giá trị.\n x +1",
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
    "id": "src-pnl-9784246434b18d",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để hàm số y = - x3 - mx 2 + ( 4m + 9 ) x + 5 nghịch\n biến trên ?",
    "question_en": "How many integer values of $m$ make $y=-x^3-mx^2+(4m+9)x+5$ decreasing on $\\mathbb R$?",
    "options": [],
    "solution_vi": "Ta có y′ = -3x - 2mx + 4m + 9\n 2\n Hàm số y = - x3 - mx 2 + ( 4m + 9 ) x + 5 nghịch biến trên\n {a < 0 -1 < 0\n {\n  \\Leftrightarrow 2 \\Leftrightarrow m2 + 12m + 27 \\le 0 \\Leftrightarrow m \\in [ -9; -3] .\n ∆′ \\le 0  m + 3 ( 4m + 9 ) \\le 0\n \n 1",
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
    "question_en": "All values of $m$ for which the graph of $y=x^3-3x^2+3m-1$ intersects the x-axis at three distinct points, exactly two of which have abscissas greater than $1$, form an interval $(a,b)$. Find $a+b$.",
    "options": [],
    "solution_vi": "[x = 0\n Ta có: y′ = 3x 2 - 6 x ; y′ = 0 \\Leftrightarrow 3x 2 - 6 x = 0 \\Leftrightarrow  .\n x = 2\n Bảng biến thiên:\n Ta lại có: y (1) = 3m - 3 .\n Từ bảng bảng biến thiên ta thấy: Đồ thị hàm số cắt trục hoành tại ba điểm phân biệt trong đó có\n trong đó có đúng hai điểm có hoành độ lớn hơn 1 khi và chỉ khi:\n 5\n 3m - 5 < 0 < 3m - 3 \\Leftrightarrow ( 3m - 3)( 3m - 5 ) < 0 \\Leftrightarrow 1 < m < .\n 3\n 5 8\n Từ đó suy ra a = 1 , b = nên a + b = .\n 3 3\n Hàm số y = ( x + m ) + ( x + n ) - x^3 (tham số là m, n ) đồng biến trên ( -\\infty; +\\infty ) . Giá trị nhỏ\n 3 3",
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
    "id": "src-pnl-45b22da2866a78",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Gọi S là tập hợp các giá trị của tham số m để hàm số y = x3 - mx 2 + 2mx - 3m + 4 . nghịch\n 3 2\n biến trên khoảng có độ dài bằng 3 .Tính tổng các phần tử của S .",
    "question_en": "Let $S$ be the set of values of $m$ for which $y=\\dfrac{x^3}{3}-\\dfrac{mx^2}{2}+2mx-3m+4$ is decreasing on an interval of length $3$. Find the sum of the elements of $S$.",
    "options": [],
    "solution_vi": "Ta có: y′ = x^2 - mx + 2m = 0 có 2 nghiệm x1 , x2 và x1 - x2 = 3 .\n {∆ > 0 {m 2 - 8m > 0 [ m = -1\n  \\Leftrightarrow  2 \\Leftrightarrow .\n ( x1 + x2 ) - 4 x1 x2 = 9 m = 9\n 2\n m - 8m = 9\n Vậy S = 8 .\n mx + 9",
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
    "id": "src-pnl-c11a4ae8cd9b68",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm tất cả các giá trị thực của tham số m để hàm số y = x^3 - 3x 2 + mx + 1 đạt cực tiểu tại x = 2",
    "question_en": "Find all real values of $m$ for which $y=x^3-3x^2+mx+1$ has a local minimum at $x=2$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 < m \\le 4 .",
        "content_en": "$0<m\\le4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m > 4 .",
        "content_en": "$m>4$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 0 .",
        "content_en": "$m=0$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "0 \\le m < 4 .",
        "content_en": "$0\\le m<4$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: y = x^3 - 3x 2 + mx + 1\n Khi đó y′ = 3x 2 - 6 x + m; y′′ = 6 x - 6\n { y′ ( 2 ) = 0 {m = 0\n Hàm số đạt cực tiểu tại x = 2 \\Rightarrow  \\Rightarrow \\Leftrightarrow m=0.\n  y′′ ( 2 ) > 0 6 > 0",
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
    "question_en": "Given $y=x^3+3(m^2-m+2)x^2+3(3m^2+1)x+2022m$, find $m$ so that the function has a local minimum at $x=-2$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = 1 .",
        "content_en": "$m=1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 2 .",
        "content_en": "$m=2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 3 .",
        "content_en": "$m=3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 4 .",
        "content_en": "$m=4$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = 3x 2 + 6 ( m2 - m + 2 ) x + 3 ( 3m2 + 1) = 3 [ x^2 + 2 ( m 2 - m + 2 ) x + 3m 2 + 1] ;\n y′′ = 6 x + 6 ( m2 - m + 2 ) .\n {[m = 1\n { y′ ( 2 ) = 0 {m2 - 4m + 3 = 0 \n Hàm số đã cho đạt cực tiểu tại x = -2 \\Leftrightarrow  \\Leftrightarrow \\Leftrightarrow m = 3\n  y′′ ( 2 ) > 0 6m ( m - 1) > 0 m m - 1 > 0\n  ( )\n \\Leftrightarrow m =3.",
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
    "id": "src-pnl-57bac1a0faec2a",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm tất cả các giá trị của tham số m để hàm số y = x3 - ( 2m + 1) x^2 - ( 5m + 4 ) x + 10 đạt cực đại tại điểm x = -1 .",
    "question_en": "Find all values of $m$ for which $y=x^3-(2m+1)x^2-(5m+4)x+10$ has a local maximum at $x=-1$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -1 .",
        "content_en": "$m=-1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 3 .",
        "content_en": "$m=3$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m = 1 .",
        "content_en": "$m=1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = -2 .",
        "content_en": "$m=-2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = 3x - 2 ( 2m + 1) x - ( 5m + 4 ) có y′′ = 6 x - 2 ( 2m + 1)\n 2\n { y′ ( -1) = 0 {-m + 1 = 0 {m = 1\n Hàm số đạt cực đại tại điểm x = -1 khi  \\Leftrightarrow \\Leftrightarrow \\Rightarrow m =1.\n  y′′ ( -1) < 0 -4m - 8 < 0 m > -2",
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
    "id": "src-pnl-7e3b9ae6199043",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho biết hàm số y = x^3 - 3x 2 + mx - 1 đạt cực trị tại x1 , x2 thỏa mãn x12 + x22 = 3. Khi đó",
    "question_en": "Given that $y=x^3-3x^2+mx-1$ has local extrema at $x_1,x_2$ satisfying $x_1^2+x_2^2=3$, which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m \\le -1.",
        "content_en": "$m\\le-1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m \\in ( 2;3) .",
        "content_en": "$m\\in(2,3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m \\in (1;2 ) .",
        "content_en": "$m\\in(1,2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m \\in ( 0;1) .",
        "content_en": "$m\\in(0,1)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = 3x - 6 x + m\n 2\n Hàm số y = x^3 - 3x 2 + mx - 1 đạt cực trị tại x1 , x2 khi ∆′ = ( -3) - 3m > 0 \\Leftrightarrow m < 3\n 2\n { x1 + x2 = 2\n \n Theo định lí Viet ta có  m\n  x1 x2 = 3\n 2 3\n Theo đề bài ta có x12 + x22 = 3 \\Leftrightarrow ( x1 + x2 ) - 2 x1 x2 = 3 \\Leftrightarrow 22 - m = 3 \\Leftrightarrow m =\n 2\n 3 2\n 3\n Vậy m = thỏa mãn đề bài.\n 2",
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
    "question_en": "Let $m_0$ be the value of $m$ for which $y=x^3-3x^2+mx-1$ has two local-extremum abscissas $x_1,x_2$ satisfying $x_1+x_2-3x_1x_2=1$. Which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m0 \\in ( -4; -2 ) .",
        "content_en": "$m_0\\in(-4,-2)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m0 \\in ( 2;4 ) .",
        "content_en": "$m_0\\in(2,4)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "m0 \\in ( 0;2 ) .",
        "content_en": "$m_0\\in(0,2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m0 \\in ( -2;0 ) .",
        "content_en": "$m_0\\in(-2,0)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = 3x 2 - 6 x + m ; y′ = 0 \\Leftrightarrow 3x 2 - 6 x + m = 0 (*) .\n Hàm số có hai điểm cực trị x1 , x2 \\Leftrightarrow phương trình có hai nghiệm phân biệt \\Leftrightarrow ∆′ = 9 - 3m > 0\n \\Leftrightarrow m<3.\n { x1 + x2 = 2\n \n Theo định lý Vi-et ta có  m \\Rightarrow x1 + x2 - 3x1 x2 = 1 \\Leftrightarrow 2 - m = 1 \\Leftrightarrow m = 1\n  1 2 3\n x . x =\n Vậy m0 = 1 \\in ( 0;2 ) .\n10 \n ( m -1) 3",
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
    "question_en": "How many integer values of $m$ make the graph of $y=\\dfrac13x^3-(m+3)x^2+(12-m)x+2020$ have two local-extremum points to the right of the y-axis?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "9 .",
        "content_en": "$9$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "10 .",
        "content_en": "$10$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "11 .",
        "content_en": "$11$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "12 .",
        "content_en": "$12$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = x^2 - 2 ( m + 3) x + 12 - m .\n Để đồ thị hàm số có hai điểm cực trị nằm về bên phải trục tung \\Leftrightarrow Phương trình y′ = 0 có hai\n nghiệm dương phân biệt x1 , x2\n {[ -7 + 61\n {∆′ = [ - ( m + 3) ] 2 - (12 - m ) > 0 m >\n    { m 2\n + 7 m - 3 > 0\n     2\n \\Leftrightarrow  S = x1 + x2 = 2 ( m + 3) > 0 \\Leftrightarrow m + 3 > 0 \\Leftrightarrow  -7 - 61\n  P = x x = 12 - m > 0 12 - m > 0 m <\n  1 2   2\n -3 < m < 12\n -7 + 61\n \\Leftrightarrow < m < 12 . Do m \\in nên m \\in {1;2;...;11} .\n 2\n Vậy có tất cả 11 giá trị nguyên thỏa mãn.",
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
    "id": "src-pnl-2c43efde2eac82",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Tìm giá trị của tham số m để điểm cực tiểu của đồ thị hàm số y = x^3 - 3 x^2 - 9 x + m thuộc đường thẳng d : y = x + 1.",
    "question_en": "Find $m$ so that the local-minimum point of $y=x^3-3x^2-9x+m$ lies on the line $d:y=x+1$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "m = -5 .",
        "content_en": "$m=-5$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "m = 31 .",
        "content_en": "$m=31$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "m = 23 .",
        "content_en": "$m=23$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "m = 5 .",
        "content_en": "$m=5$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Chọn B\n Ta có: y′ = 3x 2 - 6 x - 9 .\n [ x = -1\n Cho y ' = 0 \\Leftrightarrow \n  x=3\n Vì a > 0 nên điểm cực tiểu có toạ độ I ( 3; m - 27 ) mà I \\in d \\Leftrightarrow 3 + 1 = -27 + m \\Leftrightarrow m = 31 .",
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
    "question_en": "Consider $(C_m):y=x^3-3(m-1)x^2-3(m+1)x+3$. Let $S$ be the set of values of $m$ for which the graph has two local-extremum points A and B such that O, A, and B are collinear. Find the sum of the elements of $S$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 .",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1 .",
        "content_en": "$1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2 .",
        "content_en": "$2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3 .",
        "content_en": "$3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = 3x 2 - 6 ( m - 1) x - 3 ( m + 1) = 3 [ x^2 - 2 ( m - 1) x - ( m + 1) ] .\n Đồ thị ( Cm ) có hai điểm cực trị \\Leftrightarrow y′ = 0 có hai nghiệm phân biệt\n \\Leftrightarrow x^2 - 2 ( m - 1) x - ( m + 1) = 0 (*) có hai nghiệm phân biệt\n \\Leftrightarrow ∆′ = ( m - 1) + m + 1 > 0 \\Leftrightarrow m 2 - m + 2 > 0 \\Leftrightarrow m \\in\n 2\n .\n12 \n [1 m - 1]\n Ta có y = y′.  x -  + [ -2m2 + 2m - 4 ] x + 4 - m 2 .\n 3 3 \n Suy ra phương trình đường thẳng d đi qua hai điểm cực trị là\n y = ( -2m2 + 2m - 4 ) x + 4 - m 2 .\n Do O, A, B thẳng hàng nên 4 - m 2 = 0 \\Rightarrow\\Rightarrow m = \\pm2 .\n Suy ra S = {2; -2} .\n Vậy tổng các phần tử của S là 0 .\n x - mx 2 - 2 ( 3m2 - 1) x +\n 2 3 2",
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
    "id": "src-pnl-179b79b90861ab",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để hàm số y = x^3 + 4 ( m - 2 ) x^2 - 7 x + 1 có hai điểm cực trị x1 , x2 ( x1 < x2 ) thỏa mãn x1 - x2 = -4 ?",
    "question_en": "How many integer values of $m$ make $y=x^3+4(m-2)x^2-7x+1$ have two local-extremum abscissas $x_1<x_2$ satisfying $x_1-x_2=-4$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "0 .",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "2 .",
        "content_en": "$2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3 .",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1 .",
        "content_en": "$1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: y = x^3 + 4 ( m - 2 ) x^2 - 7 x + 1 (1) \\Rightarrow y′ = 3x 2 + 8 ( m - 2 ) x - 7\n Xét phương trình 3x 2 + 8 ( m - 2 ) x - 7 = 0 ( 2 )\n Suy ra hàm số (1) luôn có hai điểm cực trị x1 , x2 với mọi m .\n Ta thấy ac = -21 < 0 nên phương trình ( 2 ) có hai nghiệm trái dấu\n Suy ra hàm số (1) luôn có hai điểm cực trị x1 , x2 với mọi m .\n \\Rightarrow x1 < 0; x2 > 0 \\Rightarrow x1 = - x1; x2 = x2 .\n 8( m - 2) 1\n Ta có: x1 - x2 = -4 \\Leftrightarrow - x1 - x2 = -4 \\Leftrightarrow - ( x1 + x2 ) = -4 \\Leftrightarrow = -4 \\Leftrightarrow m =\n 3 2\n Vậy không có giá trị nguyên nào của m thỏa bài toán.",
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
    "question_en": "How many integer values of $m$ make the graph of $y=x^3-8x^2+(m^2+11)x-2m^2+2$ have two local-extremum points on opposite sides of the x-axis?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4 .",
        "content_en": "$4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5 .",
        "content_en": "$5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "6 .",
        "content_en": "$6$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "7 .",
        "content_en": "$7$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Đồ thị hàm số y = x3 - 8 x^2 + ( m 2 + 11) x - 2m 2 + 2 có hai điểm cực trị nằm về hai phía của Ox\n14 \n ( )\n \\Leftrightarrow Đồ thị hàm số y = x3 - 8 x^2 + m 2 + 11 x - 2m 2 + 2 cắt Ox tại ba điểm phân biệt\n ( )\n \\Leftrightarrow Phương trình x3 - 8 x^2 + m 2 + 11 x - 2m 2 + 2 = 0 có ba nghiệm phân biệt.\n Mà x3 - 8 x^2 + ( m 2 + 11) x - 2m 2 + 2 = 0\n ( )\n \\Leftrightarrow x^3 - 2 x^2 - 6 x^2 + 12 x + m 2 x - 2m 2 - x + 2 = 0 \\Leftrightarrow ( x - 2 ) x^2 - 6 x + m 2 - 1 = 0 .\n Do đó phương trình trên luôn có một nghiệm x = 2 nên phương trình f ( x) = x^2 - 6 x + m 2 - 1 = 0\n { ∆′ > 0 {10 - m2 > 0 {- 10 < m < 10\n phải có hai nghiệm phân biệt khác 2 \\Leftrightarrow  \\Leftrightarrow  \\Leftrightarrow  .\n  f ( 2 ) \\ne 0 -9 + m \\ne 0\n 2\n m \\ne \\pm3\n Với m \\in \\Rightarrow m \\in {-2; -1;0;1;2} .\n Vậy có 5 giá trị nguyên của tham số m .",
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
    "id": "src-pnl-191f2d16cc07cb",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số y = x3 - 3mx 2 + 3 ( m 2 - 1) x - m3 , với m là tham số",
    "question_en": "Given $y=x^3-3mx^2+3(m^2-1)x-m^3$, where $m$ is a parameter. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Hàm số luôn có hai điểm cực trị với mọi m",
        "content_en": "The function always has two local extrema for every real $m$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Hàm số đạt cực tiểu tại x = 3 khi m = 2",
        "content_en": "When $m=2$, the function has a local minimum at $x=3$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Khi đồ thị hàm số có hai điểm cực trị thì khoảng cách giữa hai điểm cực trị bằng 2 5",
        "content_en": "When the graph has two local extrema, the distance between the two extremum points is $2\\sqrt5$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Diểm cực tiểu của đồ thị hàm số luôn thuọc đường thẳng cố định với hệ số góc k = -3",
        "content_en": "The local-minimum point of the graph always lies on a fixed line with slope $k=-3$.",
        "is_correct": true
      }
    ],
    "solution_vi": "[x = m -1\n a) Đúng: Ta có y′ = 3x 2 - 6mx + 3 ( m2 - 1) = 0 \\Leftrightarrow  1\n  x2 = m + 1\n Do x1 \\ne x2 với mọi m nên hàm số luôn có hai điểm cực trị.\n b) Đúng: Dễ thấy x = m + 1 là điểm cực tiểu suy ra hàm số đạt cực tiểu tại x = 3 khi m = 2\n c) Đúng: Với mọi m , toạ độ hai điểm cực trị là A ( m + 1; - 3m - 2 ) và B ( m - 1; - 3m + 2 )\n Khoảng cách giữa hai điểm cực trị là: AB = ( xN - xM ) + ( yN - yM ) = 2 5\n 2 2\n [x = m -1\n d) Đúng: Ta có y′ = 3x 2 - 6mx + 3 ( m2 - 1) = 0 \\Leftrightarrow  1\n  x2 = m + 1\n Vì là hàm số bậc ba với hệ số a = 1 > 0 nên điểm cực tiểu của hàm số là A ( m + 1; - 3m - 2 )\n Lại có -3m - 2 = -3 ( m + 1) + 1 nên điểm cực tiểu của hàm số luôn thuộc đường thẳng\n d : y = -3 x + 1 và có hệ số góc k = -3 .\n x2 + 2 x + 3",
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
    "question_en": "The graph of $y=x^3+ax^2+bx+c$, where $a,b,c\\in\\mathbb R$, has a local-extremum point $A(-1,29)$ and passes through $B(2,2)$. Find $a+b+c$.",
    "options": [],
    "solution_vi": "Ta có y′ = 3x 2 + 2ax + b .\n Biết đồ thị của hàm số y = x3 + ax 2 + bx + c ( a, b, c \\in ) có một điểm cực trị là A ( -1;29 ) và đi\n { y ( -1) = 29 {( -1)3 + a.( -1)2 + b. ( -1) + c = 29\n  { a = -3\n   \n qua điểm B ( 2;2 ) nên ta có hệ:  y′ ( -1) = 0 \\Leftrightarrow 3. ( -1) + 2a. ( -1) + b = 0 \\Leftrightarrow b = -9 .\n 2\n   3 c = 24\n  y ( 2) = 2 2 + a.2 + b.2 + c = 2 \n 2\n Khi đó a + b + c = -3 - 9 + 24 = 12 .\n x - mx 2 - 2 ( 3m2 - 1) x + có 2 điểm cực trị x1 , x2 sao cho x1 x2 + 2 ( x1 + x2 ) = 1\n 2 3 2",
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
    "question_en": "The graph of $y=x^3-2mx^2+m^2x+n$ has local-minimum point $I(1,3)$. Find $m+n$.",
    "options": [],
    "solution_vi": "Ta có y = x3 - 2mx 2 + m 2 x + n \\Rightarrow y′ = 3x 2 - 4mx + m 2 \\Rightarrow y′′ = 6 x - 4m\n Do I (1;3) là điểm cực tiểu của đồ thị hàm số y = x^3 - 2mx 2 + m 2 x + n\n {\n 1 - 2m + m 2 + n = 3\n { I (1;3) \\in y {1 - 2m + m 2 + n = 3 \n   2 [m = 1 {m = 1\n \\Rightarrow  y′ (1) = 0 \\Leftrightarrow m - 4m + 3 = 0 \\Leftrightarrow  \\Leftrightarrow\n  ′′ 6 - 4 m > 0 m = 3 n = 3\n  y (1) > 0   3\n m <\n  2\n Vậy m + n = 4 .",
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
    "question_en": "Find $m$ so that the graph of $y=x^4-2mx^2+m-1$ has three local-extremum points that form a triangle of area $4\\sqrt2$.",
    "options": [],
    "solution_vi": "Đạo hàm y ' = 4 x3 - 4mx = 4 x ( x^2 - m )\n [x = 0\n Xét y ' = 0 \\Leftrightarrow \n  x = \\pm m ,(m > 0)\n ( ) ( m; -m + m - 1)\n Tọa độ ba điểm cực trị là: A(0; m - 1), B - m ; -m 2 + m - 1 , C 2\n { AH = m2\n Gọi H là trung điểm của cạnh BC thì ta có \n  BC = 2 m\n 1\n S∆ABC = AH BC = m2 m = 4 2 \\Leftrightarrow m = 2\n 2",
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
    "question_en": "How many integer values of $m$ make $y=x^3-6x^2+(3m+6)x-m-6$ have both a local maximum and a local minimum whose two extremum values have the same sign?",
    "options": [],
    "solution_vi": "Tập xác định: D = và có đạo hàm y′ = 3x 2 - 12 x + 3 ( m + 2 ) .\n Giải phương trình y′ = 0 \\Leftrightarrow 3x 2 - 12 x + 3 ( m + 2 ) = 0 \\Leftrightarrow x^2 - 4 x + m + 2 = 0\n Hàm số có hai cực trị \\Leftrightarrow có hai nghiệm phân biệt x1 , x2\n \\Leftrightarrow ∆′ > 0 \\Leftrightarrow ( -2 ) - ( m + 2 ) > 0 \\Leftrightarrow m < 2\n 2\n 1\n y= ( x - 2 ) y′ + 2 ( m - 2 ) x + m - 2\n 3\n Gọi A ( x1; y1 ) , B ( x2 ; y2 ) là hai điểm cực trị của đồ thị. Khi đó: y′ ( x1 ) = 0, y′ ( x2 ) = 0\n \\Rightarrow Phương trình đường thẳng đi qua 2 điểm cực trị của đồ thị: y = 2 ( m - 2 ) x + m - 2\n y1 = 2 ( m - 2 ) x1 + m - 2 , y2 = 2 ( m - 2 ) x2 + m - 2\n {x + x = 4\n Áp dụng định lí Vi - ét cho phương trình:  1 2\n  x1.x2 = m + 2\n Hai giá trị cực trị cùng dấu \\Leftrightarrow y1. y2 > 0 \\Leftrightarrow [ 2 ( m - 2 ) x1 + m - 2 ] . [ 2 ( m - 2 ) x2 + m - 2 ] > 0\n \\Leftrightarrow ( m - 2 ) [ 4 x1 x2 + 2 ( x1 + x2 ) + 1] > 0 \\Leftrightarrow ( m - 2 ) [ 4.4 + 2 ( m + 2 ) + 1] > 0\n 2 2\n {m \\ne 2\n  -21\n \\Leftrightarrow ( m - 2 ) ( 2m + 21) > 0 \\Leftrightarrow  <m<2\n 2\n -21 . Kết hợp điều kiện ta có:\n m > 2 2\n Vì m \\in nên m \\in {-10; -9;,..; -4; - 3; - 3; - 2; - 1;0;1} . Vậy có 12 số nguyên.",
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
    "id": "src-pnl-3ebba3cf864fc6",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Xác định toạ độ giao điểm của đường tiệm cận đứng và đường tiệm cận xiên của đồ thị hàm số 2 x^2 - 3x + 2 y= x -1",
    "question_en": "Find the coordinates of the intersection of the vertical and oblique asymptotes of $y=\\dfrac{2x^2-3x+2}{x-1}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "(1;2 ) .",
        "content_en": "$(1,2)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "(1;1) .",
        "content_en": "$(1,1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "(1; - 1) .",
        "content_en": "$(1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "(1;0 ) .",
        "content_en": "$(1,0)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "2 x^2 - 3x + 2 1\n Ta viết lại y = = 2x - 1 + nên đồ thị hàm số có tiệm cận đứng là đường thẳng\n x -1 x -1\n x = 1 và đường tiệm cận xiên là đường thẳng 2 x - 1\n {x = 1 {x = 1\n Xét hệ phương trình  \\Leftrightarrow nên giao điểm của hai đường tiệm cận là I (1;1) .\n  y = 2 x - 1  y = 1",
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
    "id": "src-pnl-316f8ee68a1683",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho đồ thị hàm số y = ( 2m - n ) x^2 + mx + 1 nhận trục hoành và trục tung làm hai tiệm cận. Giá x^2 + mx + n - 6 trị m + n là",
    "question_en": "The graph of $y=\\dfrac{(2m-n)x^2+mx+1}{x^2+mx+n-6}$ has the x-axis and y-axis as its two asymptotes. Find $m+n$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8 .",
        "content_en": "$8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "9 .",
        "content_en": "$9$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "6 .",
        "content_en": "$6$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-6 .",
        "content_en": "$-6$.",
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
    "id": "src-pnl-efef6c9ccae7cd",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-04",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Gọi ( C ) là đồ thị của hàm số y = ( m + 1) x^2 + ( 2m + 1) x + m + 2 . x +1",
    "question_en": "Let $(C)$ be the graph of $y=\\dfrac{(m+1)x^2+(2m+1)x+m+2}{x+1}$. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tiệm cận đứng của đồ thị hàm số là x = 1 1",
        "content_en": "The vertical asymptote is $x=-1$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Tiệm cận xiên của đồ thị hàm số đi qua điểm M (1;2 ) khi m = 2",
        "content_en": "When $m=2$, the oblique asymptote passes through $M(1,2)$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Tiệm cận xiên của đồ thị hàm số vuông góc với đường thẳng d : 3 x + 4 y - 5 = 0 khi m = 1",
        "content_en": "When $m=1$, the oblique asymptote is perpendicular to $d:3x+4y-5=0$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Giao điểm của hai đường tiệm cận của ( C ) luôn thuộc Parabol ( P ) : y = - x^2",
        "content_en": "The intersection of the two asymptotes of $(C)$ always lies on the parabola $(P):y=-x^2$.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Tiệm cận đứng của đồ thị hàm số là x = -1\n ( m + 1) x^2 + ( 2m + 1) x + m + 2 = m + 1 x + m + 2\n b) Đúng: y = ( )\n x +1 x +1\n Đồ thị hàm số có tiệm cận xiên là ∆ : y = ( m + 1) x + m\n 1\n Vì tiệm cận xiên đi qua điểm M (1;2 ) nên 2 = ( m + 1) .1 + m \\Leftrightarrow 2m = 1 \\Leftrightarrow m = .\n 2\n c) Sai: Ta có ∆ : y = ( m + 1) x + m \\Leftrightarrow ( m + 1) x - y + m = 0 .\n Tiệm cận xiên vuông góc với đường thẳng d : 3 x + 4 y - 5 = 0\n 4 1\n nên ( m + 1) .3 + 4.( -1) = 0 \\Leftrightarrow m + 1 = \\Leftrightarrowm= .\n 3 3\n d) Đúng: Giao điểm của hai đường tiệm cận là I ( -1; -1) \\in ( P ) .\n mx 2 + 6 x - 2",
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
    "id": "src-pnl-2b0e163acec1c3",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-04",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Biết đồ thị hàm số y =\n ( 2m - n ) x^2 + mx + 1\n ( m, n là tham số) nhận trục hoành và trục trung\n x^2 + mx + n - 6\n làm hai đường tiệm cận. Tính m + n .",
    "question_en": "The graph of $y=\\dfrac{(2m-n)x^2+mx+1}{x^2+mx+n-6}$, where $m,n$ are parameters, has the x-axis and y-axis as its two asymptotes. Find $m+n$.",
    "options": [],
    "solution_vi": "{ 2m - n = 0 {m = 3\n Theo giả thiết ta có  \\Leftrightarrow . Vậy m + n = 9 .\n  n - 6 = 0  n = 6\n x +1",
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
    "question_en": "A particle moves according to $s(t)=t^2-\\dfrac{t^3}{6}$ meters. At what time $t$ (seconds) is its velocity greatest?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "t = 2 .",
        "content_en": "$t=2$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "t = 0,5 .",
        "content_en": "$t=0.5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "t = 2,5 .",
        "content_en": "$t=2.5$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "t = 1 .",
        "content_en": "$t=1$.",
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
    "question_en": "An object moves according to $s(t)=-2t^3+24t^2+9t-3$, where $t$ is seconds from the start. During the first 10 seconds, what is the maximum velocity?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "289 ( m / s ) .",
        "content_en": "289 m/s.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "105 ( m / s ) .",
        "content_en": "105 m/s.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "111 ( m / s ) .",
        "content_en": "111 m/s.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "487 ( m / s ) .",
        "content_en": "487 m/s.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có v ( t ) = s′ = -6t 2 + 48t + 9 . Xét hàm số v ( t ) = -6t 2 + 48t + 9 , t \\in [ 0;10] .\n { v ( 0) = 9\n \n Ta có v′ ( t ) = -12t + 48 = 0 \\Leftrightarrow t = 4 (Nhận). Ta có  v ( 4 ) = 105 \\Rightarrow max v ( t ) = v ( 4 ) = 105 .\n t \\in[0;10]\n v (10 ) = -111\n ",
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
    "question_en": "A patient’s blood-pressure reduction is modeled by $G(x)=0.25x^2(30-x)$, where $x>0$ is the drug dose in milligrams. What dose gives the greatest reduction?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "15mg",
        "content_en": "15 mg.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "30mg",
        "content_en": "30 mg.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "40mg",
        "content_en": "40 mg.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "20mg",
        "content_en": "20 mg.",
        "is_correct": true
      }
    ],
    "solution_vi": "3 1\n Ta có: G ( x ) = 0,25 x^2 ( 30 - x ) = x^2 - x3\n 4 40\n 3 3 3 3 2 [ x = 0 ( loai )\n G′ ( x ) = x - x^2 ; G′ ( x ) = 0 \\Leftrightarrow x - x \\Leftrightarrow\n 2 40 2 40  x = 20 ( thoa man )\n Bảng biến thiên:\n Dựa vào bảng biến thiên thì bênh nhân cần tiêm một lượng thuốc 20mg",
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
    "question_en": "After an epidemic is detected, the cumulative number of infected people by day $t$ is estimated by $G(t)=45t^2-t^3$. If $G'(t)$ is the transmission rate in people per day, on which day is the transmission rate greatest?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "25",
        "content_en": "Day 25.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "30",
        "content_en": "Day 30.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "20",
        "content_en": "Day 20.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "15",
        "content_en": "Day 15.",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có: G′ ( t ) = 90t - 3t ; G′′ ( t ) = 90 - 6t = 0 \\Leftrightarrow 90 - 6t = 0 \\Leftrightarrow t = 15\n 2\n Bảng biến thiên:\n Vậy tốc độ truyền bệnh lớn nhất sẽ vào ngày thứ 15.",
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
    "question_en": "In a fish-farming experiment, if $n$ fish are stocked per unit area, the average final weight of each fish is $P(n)=480-20n$ grams. How many fish per unit area should be stocked to maximize total harvested mass?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "14",
        "content_en": "14.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "13",
        "content_en": "13.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "12",
        "content_en": "12.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "11",
        "content_en": "11.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi F ( n ) là hàm cân nặng của n con cá sau vụ thu hoạch trên một đơn vị diện tích\n Ta có: F ( n ) = ( 480 - 20n ) .n = 480n - 20n 2\n Để sau một vụ thu hoạch được nhiều cá nhất thì cân nặng của n con cá trên một đơn vị diện tích\n của mặt hồ là lớn nhất.\n Bài toán trở thành tìm n \\in * sao cho F ( x ) đạt giá trị lớn nhất.\n F ′ ( n ) = 480 - 40n; F ′ ( n ) = 0 \\Leftrightarrow 480 - 40n = 0 \\Leftrightarrow n = 12\n Học sinh tự lập bảng biến thiên.\n Vậy phải thả 12 con cá trên một đơn vị diện tích của mặt hồ để sau một vụ thu hoạch được nhiều\n cá nhất.",
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
    "question_en": "To cool a room from $28^\\circ\\text{C}$, a cooling system operates for 10 minutes. The room temperature at minute $t$ is $T(t)=-0.008t^3-0.16t+28$, for $t\\in[1,10]$. What is the lowest temperature reached during the 10-minute period?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "27,8320 C .",
        "content_en": "$27.832^\\circ\\text{C}$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "18, 40 C .",
        "content_en": "$18.4^\\circ\\text{C}$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "26, 20 C .",
        "content_en": "$26.2^\\circ\\text{C}$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "25,3120 C .",
        "content_en": "$25.312^\\circ\\text{C}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Xét hàm số T = -0,008t 3 - 0,16t + 28 với t \\in [1;10] .\n T ' = -0,024t 2 - 0,16 < 0, ∀t \\in [1;10] suy ra hàm số T nghịch biến trên đoạn [1;10] .\n Nhiệt độ thấp nhất trong phong đạt được là Tmin = T (10 ) = 18, 40 C .",
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
    "question_en": "A real-estate company has 50 apartments. At 2,000,000 VND per apartment per month, all are occupied. Each 100,000-VND rent increase causes 2 additional apartments to become vacant. What monthly rent per apartment maximizes total revenue?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2.250.000",
        "content_en": "2,250,000 VND.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "2.350.000",
        "content_en": "2,350,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2.450.000",
        "content_en": "2,450,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2.550.000",
        "content_en": "2,550,000 VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x là giá thuê thực tế của mỗi căn hộ, ( x : đồng; x \\ge 2000.000 đồng)\n Ta có thể lập luận như sau:\n Tăng giá 100.000 đồng thì có 2 căn hộ bị bỏ trống.\n Tăng giá x - 2.000.000 đồng thì có bao nhiêu căn hộ bị bỏ trống.\n8 \n 2 ( x - 2.000.000 ) x - 2.000.000\n Theo quy tắc tam xuất ta có số căn hộ bị bỏ trống là: =\n 100.000 50.000\n Do đó khi cho thuê với giá x đồng thì số căn hộ cho thuê là:\n x - 2.000.000 x\n 50 - =- + 90\n 50.000 50.000\n Gọi F ( x ) là hàm lợi nhuận thu được khi cho thuê các căn hộ, ( F ( x ) : đồng).\n ( x ) 1\n Ta có: F ( x ) =  - + 90  x = - x^2 + 90 x ( bằng số căn hộ cho thuê nhân với giá cho\n  50.000  50.000\n thuê mỗi căn hộ).\n 1\n Câu toán trở thành tìm giá trị lớn nhất của F ( x ) = - x^2 + 90 x , x \\ge 2.000.000\n 50.000\n 1 1\n F′( x) = - x + 90 ; F ′ ( x ) = 0 \\Leftrightarrow - x + 90 = 0 \\Leftrightarrow x = 2.250.000\n 25.000 25.000\n Bảng biến thiên:\n Suy ra F ( x ) đạt giá trị lớn nhất khi x = 2.250.000\n Vậy công ty phải cho thuê với giá 2.250.000 đồng mỗi căn hộ thì được lãi lớn nhất.\n Nhận xét:\n 1\n Sau khi tìm được hàm F ( x ) = - x^2 + 90 x . Ta không cần phải đi khảo sát và vẽ bảng biến\n 50.000\n thiên như trên. Đề đã cho bốn đáp án x, ta dùng phím CALC của MTCT để thay lần lượt các giá\n trị vào, cái nào làm cho F ( x ) lớn nhất chính là giá trị cần tìm.",
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
    "question_en": "A store sells Doan Hung pomelos at 50,000 VND each and sells about 40 at that price. Each 5,000-VND price reduction is expected to increase sales by 50 pomelos. If the purchase cost is 30,000 VND per pomelo, what selling price maximizes profit?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "44.000đ",
        "content_en": "44,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "43.000đ",
        "content_en": "43,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "42.000đ",
        "content_en": "42,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "41.000đ",
        "content_en": "41,000 VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x là giá bán thực tế của mỗi quả bưởi Đoan Hùng, (x: đồng; 30.000 \\le x \\le 50.000 đồng).\n Ta có thể lập luận như sau:\n Giá 50.000 đồng thì bán được 40 quả bưởi\n Giảm giá 5.000 đồng thì bán được thêm 50 quả.\n Giảm giá 50.000 - x thì bán được thêm bao nhiêu quả?\n 50 1\n Theo quy tắc tam xuất số quả bán thêm được là: ( 50000 - x ) . = ( 50000 - x ) .\n 5000 100\n 1 1\n Do đó Số quả bưởi bán được tương ứng với giá bán x : 40 + ( 50000 - x ) = - x + 540\n 100 100\n Gọi F ( x ) là hàm lợi nhuận thu được ( F ( x) : đồng).\n ( 1 ) 1 2\n Ta có: F ( x ) =  - x + 540  .( x - 30.000 ) = - x + 840 x - 16.200.000\n  100  100\n Bài toán trở thành tìm giá trị lớn nhất của hàm số:\n 1 2\n F ( x) = - x + 840 x - 16.200.000 , điều kiện: 30.000 \\le x \\le 50.000 .\n 100\n 1 1\n F ′ ( x ) = - x + 840; F ′ ( x ) = 0 \\Leftrightarrow - x + 840 = 0 \\Leftrightarrow x = 42.000\n 50 50\n Vì hàm F ( x ) liên tục trên 30.000 \\le x \\le 50.000 nên ta có:\n F ( 30.000 ) = 0; F ( 42.000 ) = 1.440.000; F ( 50.000 ) = 800.000\n Vậy với x = 42.000 thì F ( x ) đạt giá trị lớn nhất.\n Vậy để cửa hàng đó thu được lợi nhuận lớn nhất thì giá bán thực tế của mỗi quả bưởi Đoan Hùng\n là 42.000 đồng.",
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
    "question_en": "A hotel has 50 rooms. At 400 thousand VND per room per day, all rooms are occupied. Each 20-thousand-VND price increase creates 2 additional vacant rooms. What new room rate maximizes daily revenue?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "480 ngàn.",
        "content_en": "480 thousand VND.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "50 ngàn.",
        "content_en": "50 thousand VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "450 ngàn.",
        "content_en": "450 thousand VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "80 ngàn.",
        "content_en": "80 thousand VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x (ngàn đồng) là giá phòng khách sạn cần đặt ra, x > 400 (đơn vị: ngàn đồng).\n Giá chênh lệch sau khi tăng x - 400 .\n Số phòng cho thuê giảm nếu giá là x :\n ( x - 400 ) + 2 = x - 400 .\n 20 10\n x - 400 x\n Số phòng cho thuê với giá x là 50 - = 90 - .\n 10 10\n ( x) x2\n Tổng doanh thu trong ngày là: f ( x ) = x  90 -  = - + 90 x .\n  10  10\n x\n f ′ ( x ) = - + 90 = 0 \\Leftrightarrow x = 450 .\n 5\n Bảng biến thiên:\n Dựa vào bảng biến thiên ta thấy f ( x ) đạt giá trị lớn nhất khi x = 450 .\n Vậy nếu cho thuê với giá 450 ngàn đồng thì sẽ có doanh thu cao nhất trong ngày là 2.025.000\n đồng.",
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
    "question_en": "A motorcycle dealer buys model A for 26 million VND and sells it for 30 million VND, at which price 600 units are sold per year. The CEO estimates that each 1-million-VND price reduction increases annual sales by 200 units. What selling price maximizes annual profit?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "29 triệu VNĐ",
        "content_en": "29 million VND.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "27, 5 triệu VNĐ",
        "content_en": "27.5 million VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "29, 5 triệu VNĐ",
        "content_en": "29.5 million VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "27 triệu VNĐ",
        "content_en": "27 million VND.",
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
    "question_en": "Ban Me Travel plans a trans-Vietnam tour. At a price of 2 million VND, about 150 people would join. For every 100,000-VND reduction in price, 20 more people are expected to join. What tour price maximizes revenue?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1375000.",
        "content_en": "1,375,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "3781250.",
        "content_en": "3,781,250 VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2500000.",
        "content_en": "2,500,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3000000.",
        "content_en": "3,000,000 VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x (triệu đồng) là giá tua.\n Giá đã giảm so với ban đầu là 2 - x .\n Số người tham gia tăng thêm nếu giá bán x là:\n ( 2 - x ) 20 = 400 - 200 x .\n 0,1\n Số người sẽ tham gia nếu bán giá x là: 150 + ( 400 - 200 x ) = 550 - 220 x .\n Tổng doanh thu là: f ( x ) = x ( 550 - 200 x ) = -200 x^2 + 550 x ;\n 11\n f ′ ( x ) = -400 x + 550 = 0 \\Leftrightarrow x =\n 8\n Bảng biến thiên\n 11\n Dựa vào bảng biến thiên ta thấy f ( x ) đạt giá trị lớn nhất khi x = = 1,375 .\n 8\n Vậy công ty cần đặt giá tua 1375000 đồng thì tổng doanh thu sẽ cao nhất là 378125000 đồng.",
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
    "question_en": "Mr. Tom has a $50\\,\\text{m}^2$ fish pond. Last season he stocked 20 fish per square meter and harvested 1.5 tons. From experience, reducing the stocking density by 8 fish per square meter increases the final weight of each fish by 0.5 kg. Assuming no losses, how many juvenile fish should he buy next season to maximize total harvested mass?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1100 con.",
        "content_en": "1100 fish.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1000 con.",
        "content_en": "1000 fish.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "500 con.",
        "content_en": "500 fish.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "502 con.",
        "content_en": "502 fish.",
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
    "id": "src-pnl-f54fc8268d517d",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Dân số của một quốc gia sau t (năm) kể từ năm 2023 được ước tính bởi công thức: N ( t ) = 100e0,012t , N ( t ) được tính bằng triệu người và 0 \\le t \\le 50",
    "question_en": "The population of a country $t$ years after 2023 is estimated by $N(t)=100e^{0.012t}$ million people, where $0\\le t\\le50$. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Dân số của quốc gia vào năm 2030 là: 108, 763 (triệu người)",
        "content_en": "The population in 2030 is approximately 108.763 million.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Dân số của quốc gia vào năm 2035 là: 125, 488 (triệu người)",
        "content_en": "The population in 2035 is approximately 125.488 million.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Xem N ( t ) là hàm số của biến số t xác định trên đoạn [0;50] . Khi đó hàm số N ( t ) đồng biến trên đoạn [0; 50].",
        "content_en": "As a function on $[0,50]$, $N(t)$ is increasing.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Đạo hàm của hàm số N ( t ) biểu thị tốc độ tăng dân số của quốc gia đó (tính bằng triệu người/năm). Vậy vào năm 2040 thì tốc độ tăng dân số của quốc gia đó là 1,6 triệu người/ năm.",
        "content_en": "In 2040, the population growth rate is 1.6 million people per year.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Dân số của quốc gia vào năm 2030 là: N ( 7 ) = 100e0,012.7 = 100e0,084 = 108,763 (triệu\n người)\n b) Sai: Dân số của quốc gia vào năm 2035 là: N (12 ) = 100e0,012.12 = 100e0,144 = 115, 488 (triệu\n người)\n c) Đúng: Trên đoạn [0; 50] ta có: N ′ ( t ) = 0,012.100e0,012t = 1, 2e0,012t > 0, ∀t \\in [0;50]\n Do đó hàm số N ( t ) đồng biến trên đoạn [0; 50].\n d) Ta có: N ′ ( t ) = 1, 2e0,012t\n Với tốc độ tăng dân số của quốc gia đó là 1,6 triệu người/ năm ta có:\n 4\n 250 ln\n 4 3 ≈ 23,97\n 1, 6 = 1, 2e0,012t \\Leftrightarrow e0,012t = \\Leftrightarrow t =\n 3 3\n Vậy vào năm 2046 thì tốc độ tăng dân số của quốc gia đó là 1,6 triệu người/ năm.",
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
    "question_en": "A particle moves on a vertical axis, positive upward, with position $y=t^3-12t+3$ meters at time $t\\ge0$ seconds. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Hàm vận tốc là: v ( t ) = 3t 2 - 12, t \\ge 0",
        "content_en": "The velocity is $v(t)=3t^2-12$ for $t\\ge0$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Hạt chuyển động xuống dưới khi t > 2",
        "content_en": "The particle moves downward when $t>2$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Quãng đường hạt đi được trong khoảng thời gian 0 \\le t \\le 3 là 9 m",
        "content_en": "The distance traveled during $0\\le t\\le3$ is 9 m.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Khi t > 0 thì hạt tăng tốc",
        "content_en": "The particle is speeding up for every $t>0$.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Hàm vận tốc là: v ( t ) = y′ = 3t 2 - 12, t \\ge 0\n Hàm gia tốc là: a ( t ) = v′ ( t ) = y′′ = 6t , t \\ge 0\n b) Sai: Hạt chuyển động lên trên khi v ( t ) > 0 \\Leftrightarrow 3t 2 - 12 > 0 \\Leftrightarrow t > 2 (do t \\ge 0 )\n Hạt chuyển động xuống dưới khi v ( t ) < 0 \\Leftrightarrow 3t 2 - 12 < 0 \\Leftrightarrow 0 \\le t < 2 (do t \\ge 0 )\n c) Đúng: Ta có: y ( 3) - y ( 0 ) = 33 - 12.3 + 3 - 3 = -9\n Vậy quãng đường vật đi được trong thời gian 0 \\le t \\le 3 là 9 m .\n d) Đúng: Hạt tăng tốc khi v ( t ) tăng hay v′ ( t ) > 0 . Do đó, 6t > 0 \\Leftrightarrow t > 0\n Hạt giảm tốc khi v ( t ) giảm hay v′ ( t ) < 0 \\Leftrightarrow 6t < 0 \\Leftrightarrow t < 0 (không thỏa mãn do t \\ge 0 )",
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
    "question_en": "A manufacturer sells an average of 1000 flat-screen TVs per week at 14 million VND each. Market research indicates that every 0.5-million-VND price reduction increases weekly sales by about 100 TVs. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Gọi p (triệu đồng) là giá của mỗi ti vi, x là số ti vi. Vậy hàm cầu là: p ( x ) = - x + 19 200",
        "content_en": "If $p$ (million VND) is the price per TV and $x$ is the number sold, the demand function is $p(x)=-\\dfrac{x}{200}+19$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Công ty giảm giá 4,5 (triệu đồng)/1 tivi cho người mua thì doanh thu của công ty là lớn nhất",
        "content_en": "Reducing the price by 4.5 million VND per TV maximizes revenue.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Nếu hàm chi phí hằng tuần là C ( x ) = 12000 - 3 x (triệu đồng), trong đó x là số ti vi bán ra trong tuần, vậy có 2300 ti vi được bán ra thì lợi nhuận là cao nhất.",
        "content_en": "If weekly cost is $C(x)=12000-3x$ million VND, profit is maximized when 2300 TVs are sold.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Nếu hàm chi phí hằng tuần là C ( x ) = 12000 - 3 x (triệu đồng), trong đó x là số ti vi bán ra trong tuần, nhà sản xuất nên đặt giá bán 8,5 triệu đồng/1 ti vi để lợi nhuận là lớn nhất",
        "content_en": "If weekly cost is $C(x)=12000-3x$ million VND, profit is maximized at a price of 8.5 million VND per TV.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Gọi p (triệu đồng) là giá của mỗi ti vi, x là số ti vi. Khi đó hàm cầu là p = p ( x ) .\n Theo giả thiết, tốc độ thay đổi của x tỉ lệ với tốc độ thay đổi của p nên hàm số p = p ( x ) là\n hàm số bậc nhất nên. Do đó, p ( x ) = ax + b (a khác 0 ) .\n Giá tiền p1 = 14 ứng với x1 = 1000 , giá tiền p2 = 13,5 ứng với x2 = 1000 + 100 = 1100\n Do đó, phương trình đường thẳng p ( x ) = ax + b đi qua hai điểm (1000;14 ) và (1100;13,5 ) .\n { { -1\n 14 = 1000a + b a = 1\n Ta có hệ phương trình:  \\Leftrightarrow 200 (thỏa mãn) \\Rightarrow p ( x ) = - x + 19\n 13,5 = 1100a + b b = 19 200\n \n -1\n b) Đúng: Vì p = x + 19 \\Rightarrow x = -200 p + 3800\n 200\n Hàm doanh thu từ tiền bán ti vi là: R ( p ) = px = p ( -200 p + 3800 ) = -200 p 2 + 3800 p\n Để doanh thu là lớn nhất thì ta cần tìm p sao cho R đạt giá trị lớn nhất.\n 19\n Ta có: R′ ( p ) = -400 p + 3800; R′ ( p ) = 0 \\Leftrightarrow p =\n 2\n Bảng biến thiên:\n 19\n Vậy công ty nên giảm giá số tiền một chiếc ti vi là: 14 - = 4,5 (triệu đồng) thì doanh thu là\n 2\n lớn nhất.\n ( -1 ) -x^2\n c) Sai: Doanh thu bán hàng của x sản phẩm là: R ( x ) = x. p ( x ) = x. x + 19  = + 19 x\n  200  200\n (triệu đồng). Do đó, hàm số thể hiện lợi nhuận thu được khi bán x sản phẩm là:\n - x2 - x2\n P ( x) = R ( x) - C ( x) = + 19 x - 12000 + 3x = + 22 x - 12000 (triệu đồng).\n 200 200\n -x\n Để lợi nhuận là lớn nhất thì P ( x ) là lớn nhất. Ta có: P′ ( x ) = + 22; P′ ( x ) = 0 \\Leftrightarrow x = 2200\n 100\n Bảng biến thiên:\n Vậy có 2200 ti vi được bán ra thì lợi nhuận là cao nhất.\n Số ti vi mua tăng lên là: 2200 - 1000 = 1200 (chiếc)\n 1200\n d) Sai: Vậy cửa hàng nên đặt giá bán là: 14 - 0,5 = 8 (triệu đồng)\n 100",
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
    "question_en": "A silk-weaving household produces $x$ meters of silk per day, where $1\\le x\\le18$. The production cost, in thousand VND, is $C(x)=x^3-3x^2-20x+500$. All output is sold at 220 thousand VND per meter. Let $B(x)$ be revenue and $L(x)$ profit. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Biểu thức tính B ( x ) theo x là B ( x ) = 220 x (nghìn đồng).",
        "content_en": "$B(x)=220x$ thousand VND.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Biểu thức tính L ( x ) theo x là L ( x ) = - x3 + 3x 2 + 220 x - 500 (nghìn đồng).",
        "content_en": "$L(x)=-x^3+3x^2+220x-500$ thousand VND.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Hộ làm nghề dệt này cần sản xuất và bán ra mỗi ngày 10 mét vải lụa để thu được lợi nhuận tối đa",
        "content_en": "The household should produce and sell 10 meters per day to maximize profit.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Lợi nhuận tối đa của hộ làm nghề dệt vải lụa tơ tằm có thể đạt được là 1000 nghìn đồng.",
        "content_en": "The maximum possible profit is 1000 thousand VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "Khi bán x mét vải lụa:\n a) Đúng: Số tiền thu được là: B ( x ) = 220 x (nghìn đồng).\n b) Sai: Lợi nhuận thu được là: L ( x ) = B ( x ) - C ( x ) = - x^3 + 3x 2 + 240 x - 500 (nghìn đồng).\n18 \n c) Đúng: Hàm số L ( x ) xác định trên [1;18] .\n Đạo hàm L′ ( x ) = -3x 2 + 6 x + 240; L ( x ) = 0 \\Leftrightarrow x = 10 hoặc x = -8 (loại).\n Trên khoảng (1;10 ) , L′ ( x ) > 0 nên hàm số đồng biến trên khoảng này.\n Trên khoảng (10;18 ) ; L′ ( x ) < 0 nên hàm số nghịch biến trên khoảng này.\n Cực trị: Hàm số L ( x ) đạt cực đại tại x = 10 và LCĐ = L (10 ) = 1200 .\n Bảng biến thiên:\n Đồ thị hàm số có điểm cực đại (10;1200 ) và đi qua các điểm (1; -258 ) ; (18; -1040 ) như hình.\n d) Sai: Quan sát đồ thị hàm số, ta nhận thấy khi x = 10 thì hàm số đạt giá trị lớn nhất là 1200.\n Như vậy, hộ làm nghề dệt cần sản xuất và bán ra mỗi ngày 10 mét vải lụa để thu được lợi nhuận\n tối đa. Lợi nhuận tối đa này là 1200 nghìn đồng.",
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
    "question_en": "Suppose the demand function for a monopoly product is $P=400-2Q$ and the average-cost function is $C=0.2Q+4+\\dfrac{400}{Q}$, where $Q$ is quantity and $P,C$ are dollars per unit. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Q = 90 là lượng sản phẩm bán ra để lợi nhuận thu được tối đa;",
        "content_en": "$Q=90$ is the quantity that maximizes profit.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Giá bán để lợi nhuận thu được tối đa là 400$",
        "content_en": "The profit-maximizing selling price is 400 dollars.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Lợi nhuận tối đa là 17420$",
        "content_en": "The maximum profit is 17,420 dollars.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Nếu chính phủ đánh thuế 22$ / một đơn vị sản phẩm thì giá bán 390$ để lợi nhuận thu được tối đa",
        "content_en": "If the government imposes a tax of 22 dollars per unit, a selling price of 390 dollars maximizes profit.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: Lợi nhuận = Tổng doanh thu - Tổng chi phí.\n Tổng doanh thu là R và tổng chi phí là C được cho bởi R = PQ = 400Q - 2Q 2\n (\n Và C = QC = 0, 2Q 2 + 4Q + 400 nên lợi nhuận P = R - C = 400Q - 2Q 2 - 0, 2Q 2 + 4Q + 400 . )\n Hay P ( Q ) = 396Q - 2, 2Q 2 - 400.\n a) Đúng: Để tối đa hóa lợi nhuận, ta cho P′ ( Q ) = 0 \\Leftrightarrow 396 - 4, 4Q = 0 \\Leftrightarrow Q = 90.\n Ta có P′′ ( Q ) = -4, 4 < 0 . Vậy P đạt cực đại tại Q = 90 .\n b) Sai: Thay Q = 90 vào hàm cầu ta được giá bán trên mỗi sản phẩm để lợi nhuận thu được tối\n đa: P = 400 - 2.90 = 220.\n c) Đúng: Lợi nhuận tối đa: P ( 90 ) = 396 ( 90 ) - 2, 2 ( 90 ) - 400 = 17420.\n 2\n d) Sai: Khi chi phí đánh thuế 22$/một đơn vị sản phẩm, tổng chi phí tăng 22Q . Hàm chi phí mới\n là C1 = 0, 2Q 2 + 4Q + 400 + 22Q và hàm lợi nhuận mới là\n P = 400Q - 2Q 2 - ( 0, 2Q 2 + 4Q + 400 + 22Q ) = 374Q - 2, 2Q 2 - 400\n Ta có P1′( Q ) = 0 \\Leftrightarrow 374 - 4, 4Q = 0 \\Leftrightarrow Q = 85.\n Vì P1′′ ( Q ) = -4, 4 < 0 nên để thu được lợi nhuận tối đa, nhà độc quyền phải sản xuất 85 đơn vị\n sản phẩm với mức giá P1 = 400 - 2.85 = 230$ , do mức giá này chỉ hơn 10$ so với trước đó nên\n chỉ một phần thuế được tính vào người tiêu dùng, phần thuế còn lại do nhà sản xuất gánh chịu.\n Lợi nhuận bây giờ là 15495 .",
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
    "question_en": "The electric charge transferred through a wire is $Q(t)=2t^2+t$ coulombs, where $t$ is in seconds. Find the electric current at $t=4$ s.",
    "options": [],
    "solution_vi": "Cường độ dòng điện tại thời điểm t = 4 s là Q′ ( t ) = I ( t ) = 4t + 1 \\Rightarrow t ( 4 ) = 17.",
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
    "question_en": "During the first 5 seconds, a particle moves according to $s(t)=-t^3+6t^2+t+5$, where $t$ is in seconds and $s$ in meters. What is its greatest instantaneous velocity during those 5 seconds?",
    "options": [],
    "solution_vi": "Ta có: v ( t ) = s′ ( t ) = -3t 2 + 12t + 1 .\n Nhận xét: v ( t ) có đồ thị là một parabol nên trong 5s đầu tiên vận tốc tức thời cúa chất điểm đạt\n giá trị lớn nhất bằng 13 tại t = 2 s .\n20",
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
    "id": "src-pnl-d9343619e854b4",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một vật được phóng thẳng đứng lên trên từ độ cao 2 m với vận tốc ban đầu là 24,5 (m/s). Trong\n Vật lý, ta biết rằng khi bỏ qua sức cản của không khí thì độ cao h (mét) của vật sau t (giây)\n được cho bởi công thức h ( t ) = 2 + 24,5t - 4,9t 2 . Hỏi sau bao nhiêu giây thì vật đạt độ cao lớn\n nhất?",
    "question_en": "An object is launched vertically upward from a height of 2 m with initial speed 24.5 m/s. Ignoring air resistance, its height after $t$ seconds is $h(t)=2+24.5t-4.9t^2$. After how many seconds does it reach maximum height?",
    "options": [],
    "solution_vi": "Xét hàm số: h ( t ) = 2 + 24,5t - 4,9t 2 . Tập xác định của hàm số là .\n 5\n Ta có: h′ ( t ) = -9,8t + 24,5; h′ ( t ) = 0 \\Leftrightarrow -9,8t + 24,5 = 0 \\Leftrightarrow t =\n 2\n Bảng biến thiên:\n 5\n Từ bảng biến thiên ta thấy hàm số đạt cực đại tại t =\n 2\n 5\n Vậy thời điểm vật đạt độ cao lớn nhất là t = giây\n 2",
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
    "question_en": "In a medical experiment, 1000 bacteria are cultured in a nutrient medium. The population after $t$ seconds is $N(t)=1000+\\dfrac{100t}{100+t^2}$. Find the largest bacterial population from the start of the experiment onward.",
    "options": [],
    "solution_vi": "100t\n Xét hàm số N ( t ) = 1000 + (t > 0) .\n 100 + t 2\n 100.(100 + t 2 ) - 100t.2t 100. (100 - t 2 )\n Ta có: N ′ ( t ) = = .\n (100 + t )\n 2 2\n (100 + t )\n 2 2\n Khi đó, với t > 0, N ′ ( t ) = 0 \\Leftrightarrow 100 - t 2 = 0 \\Leftrightarrow t 2 = 100 \\Leftrightarrow t = 10 .\n Bảng biến thiên của hàm số N ( t ) như sau:\n22 \n Căn cứ bảng biến thiên, ta thấy:\n Trên khoảng ( 0;+\\infty ) hàm số N ( t ) đạt giá trị lớn nhất bằng 1005 tại t = 10 .\n Vậy số lượng vi khuẩn lớn nhất kể từ khi thực hiện cấy vi khuẩn vào môi trường dinh dưỡng là\n 1005 con.",
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
    "question_en": "During a cough, narrowing of the trachea affects airflow speed. The speed is modeled by $V=k(R-r)r^2$, where $0\\le r<R$, $k>0$, $R$ is the normal tracheal radius, and $r$ is the radius while coughing. What fraction of the normal radius should $r$ be for airflow speed to be greatest?",
    "options": [],
    "solution_vi": "[r = 0\n Ta có: V ′ = 2kRr - 3kr . Nhận xét V ′ = 0 \\Leftrightarrow \n 2\n .\n r = 2R\n  3\n ( 2 R ) 4kR\n 3\n Ta có f ( 0 ) = 0; f  =\n  3  27\n 2\n Vậy bán kính của khí quản khi ho bằng bán kính khí quản lúc bình thường thì tốc độ không\n 3\n khí đi vào là lớn nhất.",
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
    "question_en": "A manager has 100 apartments. All are occupied at a monthly rent of 8 million VND per apartment. A market survey shows that each 100,000-VND rent increase results in one additional vacant apartment. What monthly rent per apartment maximizes revenue?",
    "options": [],
    "solution_vi": "Gọi x là số lần tăng giá 100 nghìn đồng ( x > 0 ) . Khi đó, số căn được cho thuê là: 100 - x (căn)\n Tổng số tiền thu được trong một tháng là:\n (100 - x )(8000000 + 100000 x ) = 100000 (100 - x )(80 + x ) = 100000 ( - x^2 + 20 x + 8000 )\n = 100000 [ - ( x - 10 ) + 8100 ] \\le 810000000, ∀x > 0\n 2\n  \n Dấu \"=\" xảy ra khi x = 10 (thỏa mãn)\n Vậy để thu được doanh thu là lớn nhất thì người quản lí nên đặt giá thuê mỗi căn hộ là:\n 8000000 + 100000.10 = 9000000 (đồng).",
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
    "question_en": "A real-estate company has 20 apartments. At a monthly rent of 2 million VND per apartment, all are occupied. Each 200,000-VND increase in rent causes one additional apartment to become vacant. What monthly rent per apartment maximizes total rental revenue?",
    "options": [],
    "solution_vi": "Giả sử giá thuê mỗi căn hộ là x triệu đồng/1 tháng và số căn hộ cho thuê là y .\n Khi đó tổng số tiền thu được sẽ là x. y .\n Theo đề bài, ta có: y = 20 - 5 ( x - 2 ) (vì cứ mỗi lần tăng giá thuê mỗi căn hộ thêm 200 nghìn\n đồng/1 tháng thì có thêm một căn hộ bị bỏ trống).\n Do đó ta cần tìm giá trị của x sao cho hàm số f ( x ) = x [ 20 - 5 ( x - 2 ) ] đạt giá trị lớn nhất.\n Ta có: f ′ ( x ) = 30 - 10 x = 0 \\Rightarrow 30 - 10 x = 0 \\Rightarrow x = 3\n Cuối cùng ta kiểm tra xem điểm cực này có phải là điểm cực đại hay không:\n Xác định khoảng: [ -\\infty;3] , [3; +\\infty ]\n Chọn x1 = 2 \\Rightarrow f ( x ) = 10 , chọn x2 = 4 \\Rightarrow f ( x ) = -10\n Vì đạo hàm dương với mọi x < 3 là âm với mọi x > 3 \\Rightarrow hàm số cực đại tại x = 3\n Vì vậy, công ty nên cho thuê mỗi căn hộ với giá 3 triệu đồng/1 tháng để tổng số tiền thu được là\n lớn nhất.",
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
    "question_en": "A salmon swims 300 km upstream in a current of 6 km/h. If its swimming speed in still water is $v$ km/h, then over $t$ hours its energy expenditure is $E=cv^3t$, where $c>0$. At what swimming speed $v$ is the energy required to travel the 300 km minimized?",
    "options": [],
    "solution_vi": "Vận tốc khi cá bơi ngược dòng sẽ là v - 6 (km/h).\n 300\n Thời gian để bơi quãng đường 300 km là t = ( h) .\n v-6\n v3\n Năng lượng tiêu hao là E ( v ) = 300c (J ).\n v-6\n v3\n Do c > 0 \\Rightarrow E ( v )min \\Leftrightarrow = ( f ( v ) )min .\n v-6\n 3v 2 ( v - 6 ) - v3 2v3 - 18v [v = 0\n Với v > 6 ta có f ′ ( v ) = = = 0 \\Leftrightarrow v = 9.\n ( v - 6) ( v - 6)\n 2 2\n \n Lập bảng biến thiên ta nhận v = 9 (do v > 6 ).\n Vậy để năng lượng tiêu hao là thấp nhất thì vận tốc là 9 (km/h).",
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
    "question_en": "A company estimates that it will sell $N$ lots if it spends $x$ million VND on advertising, where $N(x)=-x^2+30x+6$ and $0\\le x\\le30$. What is the greatest number of lots it can sell after the campaign?",
    "options": [],
    "solution_vi": "Ta có N ( x ) = - x^2 + 30 x + 6 \\Rightarrow N ′ ( x ) = -2 x + 30 \\Rightarrow N ′ ( x ) = 0 \\Leftrightarrow x = 15.\n26 \n { N ( 0) = 6\n \n Đồng thời, ta cũng có  N (15 ) = 231 \\Rightarrow max x\\in[0;30] N ( x ) = 231 \\Leftrightarrow x = 15.\n  N ( 30 ) = 6\n \n Vậy nếu công ti dành 15 triệu cho việc quảng cáo thì công ti sẽ bán được nhiều nhất là 231 lô\n hàng.",
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
    "question_vi": "Công ti truyền hình cáp Vista hiện có 100000 thuê bao. Mỗi thuê bao đang trả cước 40 USD/tháng. Một cuộc khảo sát cho thấy cứ mỗi lần giảm 0,25 USD cước thuê bao, công ti có thể có thêm 1000 thuê bao. Để doanh thu tối đa, mức cước thuê bao mỗi tháng là bao nhiêu USD?",
    "question_en": "Vista Cable currently has 100,000 subscribers, each paying USD 40 per month. A survey shows that every USD 0.25 reduction in the monthly fee would attract 1,000 additional subscribers. What monthly subscription fee, in USD, maximizes revenue?",
    "options": [],
    "solution_vi": "Gọi $x$ là số lần giảm 0,25 USD. Khi đó mức cước là $40-0,25x$ (USD) và số thuê bao là $100000+1000x$. Doanh thu $R(x)=(100000+1000x)(40-0,25x)$. Ta có $R'(x)=1000(15-0,5x)$, nên $R'(x)=0\\Leftrightarrow x=30$. Vì vậy mức cước tối ưu là $40-0,25\\cdot30=32,5$ USD.",
    "solution_en": "",
    "correct_answer": "32.5",
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
    "id": "src-pnl-d7d70a5201d601",
    "topic_id": "top-12-1-5",
    "type_id": "type-kntt-12-05-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "HARD",
    "language_level": 2,
    "question_vi": "Một chất điểm chuyển động có phương trình chuyển động là s = -t 3 + 6t 2 + 17t , với t ( s ) là\n khoảng thời gian tính từ lúc vật bắt đầu chuyển động và s ( m ) là quãng đường vật đi được trong\n khoảng thời gian đó. Trong khoảng thời gian 8 giây đầu tiên, vận tốc v ( m / s ) của chất điểm đạt\n giá trị lớn nhất bằng?",
    "question_en": "A particle moves according to $s(t)=-t^3+6t^2+17t$, where $t$ is in seconds and $s$ in meters. During the first 8 seconds, what is the maximum velocity?",
    "options": [],
    "solution_vi": "Ta có : v = s′ = -3t 2 + 12t + 17\n Ta đi tìm giá trị lớn nhất của v = -3t 2 + 12t + 17 trên khoảng ( 0;8 )\n Mặt khác: v ' = -6t 2 + 12 = 0 \\Rightarrow t = 2\n Bảng biến thiên:\n Vậy vận tốc lớn nhất trong khoảng 8 giây đầu tiên là: 29 (m/s).",
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
    "question_en": "A sporting-goods company receives an order for 8,000 tennis balls. Each machine can produce 30 balls per hour. Setting up each machine costs 200 thousand VND, and a supervisor is paid 192 thousand VND per hour while production runs. How many machines should be used to minimize operating cost?",
    "options": [],
    "solution_vi": "Gọi số máy móc công ty sử dụng để sản xuất là x ( x \\in Ν, x > 0 ) .\n 8000\n Thời gian cần để sản xuất hết 8000 quả bóng là: .\n 30x\n 8000 51200\n Tổng chi phí để sản xuất là: P ( x ) = 200 x + .192 = 200 x +\n 30 x x\n 51200 [ x = 16\n Ta có: P′ ( x ) = 200 - = 0 \\Leftrightarrow x^2 = 256 \\Leftrightarrow  .\n  x = -16 ( loai )\n 2\n x\n Bảng biến thiên:\n28 \n Vậy công ty nên sử dụng 16 máy để chi phí hoạt động là thấp nhất.\n -----------------HẾT-----------------",
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
    "question_en": "A rectangular screen is 1.4 m high, and its lower edge is 1.8 m above eye level. At what horizontal distance AO from the screen is the viewing angle BOC maximized, assuming BOC is acute?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "AO = 2, 4 m",
        "content_en": "AO = 2.4 m.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "AO = 2 m",
        "content_en": "AO = 2 m.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "AO = 2,6 m",
        "content_en": "AO = 2.6 m.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "AO = 3 m",
        "content_en": "AO = 3 m.",
        "is_correct": false
      }
    ],
    "solution_vi": "Đặt độ dài cạnh AO = x cm, ( x > 0 )\n Suy ra: BO = 3, 24 + x^2 , CO = 10, 24 + x^2\n Ta sử dụng định lí cosin trong tam giác OBC ta có:\n OB 2 + OC 2 - BC 2 ( 3, 24 + x ) + (10, 24 + x ) - 1,96\n 2 2\n 5,76 + x^2\n cos BOC = = =\n 2.OB.OC 2 ( 3, 24 + x^2 )(10, 24 + x^2 ) ( 3, 24 + x )(10, 24 + x )\n 2 2\n 5,76 + x^2\n Vì góc BOC là góc nhọn nên bài toán trở thành tìm x để F ( x ) = đạt\n ( 3, 24 + x )(10, 24 + x )\n 2 2\n giá trị nhỏ nhất.\n 63\n t+\n Đặt ( 3, 24 + x^2 ) = t , ( t > 3, 24 ) suy ra F ( t ) = 25 = 25t + 63\n t ( t + 7 ) 25 t ( t + 7 )\n Ta tìm t để F (t ) nhận giá trị nhỏ nhất.\n ( ( ))\n  25 t ( t + 7 ) - ( 25t + 63)  2t + 7  \n ( 25t + 63 )′ 1   2 t (t + 7)  \n F '(t ) =   =   \n  25 t ( t + 7 )  25  t (t + 7) \n  \n  \n  \n  \n 1 ( 50 ( t + 7t ) - ( 25t + 63)( 2t + 7 ) ) 1 ( )\n 2\n 49t - 441\n =  =  =0\\Leftrightarrowt =9\n 25 \n  2t ( t + 7 ) t ( t + 7 )  25  2t ( t + 7 ) t ( t + 7 ) \n   \n Bảng biến thiên:\n Thay vào đặt ta có: ( 3,24 + x^2 ) = 9 \\Leftrightarrow x^2 =\n 144\n \\Leftrightarrow x = 2,4m\n 25\n Vậy để nhìn rõ nhất thì AO = 2, 4 m.",
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
    "question_en": "Long wants to build a closed rectangular water tank of volume $576\\,\\text{m}^3$. The base length is twice its width. Construction labor costs 500,000 VND per square meter of surface. Which dimensions minimize labor cost, and what is that minimum cost?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Rộng 6m, dài 12m, cao 8m. Tiền: 216 triệu",
        "content_en": "Width 6 m, length 12 m, height 8 m; 216 million VND.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Rộng 6m, dài 12m, cao 8m. Tiền: 215 triệu",
        "content_en": "Width 6 m, length 12 m, height 8 m; 215 million VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Rộng 6m, dài 12m, cao 8m. Tiền: 214 triệu",
        "content_en": "Width 6 m, length 12 m, height 8 m; 214 million VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Rộng 6m, dài 12m, cao 8m. Tiền: 213 triệu.",
        "content_en": "Width 6 m, length 12 m, height 8 m; 213 million VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x, y, h lần lượt là chiều dài, chiều rộng, chiều cao của hồ chứa nước, ( x > 0, y > 0, h > 0, m )\n y V 576 288\n Ta có: = 2 \\Leftrightarrow y = 2 x . Thể tích hồ chứa nước V = xyh \\Leftrightarrow h = = = 2\n x xy x ( 2 x ) x\n Diện tích cần xây dựng hồ chứa nước:\n 288 288 1728\n S ( x ) = 2 xy + 2 xh + 2 yh = 2 x ( 2 x ) + 2 x^2\n + 2 ( 2x ) 2 = 4x2 +\n x x x\n Để chi phí nhân công là ít nhất thì diện tích cần xây dựng là nhỏ nhất, mà vẫn đạt thể tích như\n mong muốn.\n Bài toán trở thành tìm x để S ( x ) nhỏ nhất\n 1728 1728\n \\Leftrightarrow S ( x ) = 4x2 + \\Rightarrow S ′ ( x ) = 0 \\Leftrightarrow 8x - 2 = 0 \\Leftrightarrow x = 6\n x x\n Bảng biến thiên:\n10 \n Vậy kích thước của hồ là: rộng 6m, dài 12m, cao 8m.\n Diện tích cần xây: 432m 2 và chi phí ít nhất là: 432 x500.000 = 216.000.000",
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
    "question_en": "Mr. Nam builds a rectangular rainwater tank of volume $8\\,\\text{m}^3$ whose length is $\\frac43$ of its width. The bottom and lid are reinforced concrete, the sides are brick and cement, and the average cost is 980,000 VND per square meter. A square opening in the lid has area equal to $\\frac29$ of the lid area. Find the minimum cost, rounded to the nearest thousand VND.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "22.770.000 đ.",
        "content_en": "22,770,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "27.657.000 đ.",
        "content_en": "27,657,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "20.965.000 đ.",
        "content_en": "20,965,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "23.235.000 đ.",
        "content_en": "23,235,000 VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "2\n Gọi chiều rộng của bể là 3 x ( m ) . Ta có chiều dài bể là 4 x ( m) và chiều cao của bể là ( m)\n 3x 2\n Khi đó tổng diện tích bề mặt xây là:\n 28 64 x^2 28 64 x^2 32 7\n T = ( 3x + 4 x ) .2.\n 2\n 3x 2\n + 2.3 x.4 x -\n 2\n 9\n .3 x.4 x =\n 3x 2\n +\n 3\n \\ge 2.\n 3x 2\n .\n 3\n =\n 3\n ( m2 ) .\n 32 7\n Chi phí C (tính theo đồng) xây dựng là: C = T .980000 \\ge .980000 ≈ 27657000 (đồng).\n 3",
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
    "question_en": "A closed rectangular box has volume $48$, and its length is twice its width. The material used for the bottom and four side faces costs three times as much per unit area as the material used for the lid. Let $h=\\dfrac{m}{n}$ be the height that minimizes total cost, where $m,n$ are coprime positive integers. Find $m+n$.",
    "options": [],
    "solution_vi": "Gọi chiều dài, chiều rộng của hộp là 2x và x ( x > 0) .\n Khi đó, ta có thể tích của cái hộp là: V = 2 x^2 .h \\Rightarrow 2 x^2 .h = 48 \\Leftrightarrow x^2 .h = 24\n Do giá thành làm đáy và mặt bên hộp là 3 , giá thành làm nắp hộp là 1 nên giá thành làm hộp là\n L = 3 ( 2 x^2 + 2 xh + 4 xh ) + 2 x^2\n Áp dụng bất đẳng thức Cauchy cho ba số không âm ta được:\n L = 8 x^2 + 9 xh + 9 xh \\ge 3 3 8 x^2 .9 xh.9 xh = 3 3 648 ( x^2 h ) = 216\n 2\n { 9h\n  x= {x = 3\n {8 x = 9 xh2\n  8 \n Dấu bằng xảy ra khi và chỉ khi:  2 \\Rightarrow 2 \\Rightarrow 8\n  x h = 24  9 .h3 = 24 h = 3\n  82\n Vậy m = 8 , n = 3 và m + n = 11 .",
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
    "id": "src-tdc-10-sets-weather-001",
    "topic_id": "top-10-1-2",
    "type_id": "type-kntt-10-02-02",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Trong một khoảng thời gian, tại một địa phương có 10 ngày mưa, 8 ngày có gió, 6 ngày lạnh; có 5 ngày vừa mưa vừa có gió, 4 ngày vừa mưa vừa lạnh, 3 ngày vừa lạnh vừa có gió và 1 ngày đồng thời mưa, lạnh, có gió. Hỏi có bao nhiêu ngày thời tiết xấu (có ít nhất một trong ba hiện tượng trên)?",
    "question_en": "Over a certain period in one locality, there are 10 rainy days, 8 windy days, and 6 cold days. There are 5 days that are both rainy and windy, 4 that are both rainy and cold, 3 that are both cold and windy, and 1 day that is rainy, cold, and windy. How many days have bad weather, meaning at least one of these three conditions occurs?",
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
    "question_en": "Class 10A4 has 20 students in the football club, 16 students in the basketball club, and 10 students in both clubs. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Có 6 học sinh tham gia bóng đá nhưng không tham gia bóng rổ.",
        "content_en": "There are 6 students who participate in football but not basketball.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Có 26 học sinh tham gia ít nhất một trong hai câu lạc bộ.",
        "content_en": "There are 26 students who participate in at least one of the two clubs.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Nếu lớp có 50 học sinh thì có 25 học sinh không tham gia câu lạc bộ bóng đá.",
        "content_en": "If the class has 50 students, then 25 students do not participate in the football club.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Nếu lớp có 50 học sinh, trong 24 học sinh không tham gia bóng đá hoặc bóng rổ có 15 bạn không tham gia câu lạc bộ thể thao nào, thì số bạn còn lại tham gia câu lạc bộ cầu lông là 9.",
        "content_en": "If the class has 50 students, and among the 24 students who are in neither football nor basketball there are 15 who do not join any sports club, then the remaining 9 students participate in the badminton club.",
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
    "question_en": "A hotel has 50 rooms. At 400 thousand VND per room per day, all rooms are occupied. Each 20-thousand-VND price increase results in 2 additional vacant rooms. What daily room rate, in thousand VND, maximizes revenue?",
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
