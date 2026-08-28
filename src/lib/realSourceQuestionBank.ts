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
    "question_vi": "Bạn Lan mang 150000 đồng đi nhà sách để mua một số quyển tập và bút. Biết rằng giá một quyển\ntập là 8000 đồng và giá của một cây bút là 6000 đồng. Bạn Lan có thể mua được tối đa bao nhiêu\nquyển tập nếu bạn đã mua 10 cây bút.",
    "question_en": "Lan takes 150,000 VND to a bookstore to buy notebooks and pens. A notebook costs 8,000 VND and a pen costs 6,000 VND. If she has already bought 10 pens, what is the maximum number of notebooks she can buy?",
    "options": [],
    "solution_vi": "Bất phương trình biểu diễn số tập và bút có thể mua được phụ thuộc vào số tiền mang theo là\nBạn Lan có thể mua được tối đa số quyển tập nếu bạn đã mua 10 cây bút là\nVì nguyên dương nên số quyển tập tối đa bạn Lan mua được là 11 quyển.",
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
    "question_vi": "Anh An là nhân viên bán hàng tại siêu thị điện máy. Anh An kiếm được một khoản hoa hồng 600\nnghìn đồng cho mỗi máy giặt và 1, 3 triệu đồng cho mỗi tủ lạnh mà anh ấy bán được. Hỏi để nhận\nđược từ 10 triệu đồng trở lên tiền hoa hồng thì anh An cần bán bao nhiêu máy giặt và tủ lạnh?",
    "question_en": "An works as a salesperson at an electronics supermarket. He earns a commission of 600 thousand VND for each washing machine sold and 1.3 million VND for each refrigerator sold. What combinations of washing machines and refrigerators can he sell to earn at least 10 million VND in commission?",
    "options": [],
    "solution_vi": "Gọi và lần lượt là số máy giặt và số tủ lạnh anh An bán được. Khi đó số tiền hoa hổng mà anh\nAn nhận được là (triệu đồng).\nTheo để bài, ta có:\nTiếp theo ta xác định miền nghiệm của bất phương trình như sau:\nBước 1: Vẽ đường thẳng trên mặt phẳng toạ độ.\nBước 2: Lấy điềm không thuộc và thay vào biều thức ta được:\nDo đó, miền nghiệm của bất phương trình là nửa mặt phẳng bờ không chứa gốc tọa độ (miển\nkhông bị tô màu).\nVậy nếu anh An bán được số máy giặt là và số tủ lạnh là sao cho điểm\nnằm trong nửa mặt phẳng bờ không chứa gốc toạ độ thì anh An nhận được từ 10 triệu\nđồng trở lên tiền hoa hồng.\n-----------------HẾT-----------------",
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
    "solution_vi": "Gọi T, L lần lượt là tập hợp các học sinh giỏi Toán và các học sinh giỏi Lý.\nTa có:\n: là số học sinh giỏi Toán\n: là số học sinh giỏi Lý\n: là số học sinh giỏi cả hai môn Toán và Lý\nKhi đó số học sinh của lớp là:.\nMà.\nVậy số học sinh của lớp là.",
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
    "solution_vi": "Gọi A là tập hợp các học sinh chơi bóng đá\nB là tập hợp các học sinh chơi bóng bàn\nC là tập hợp các học sinh không chơi môn nào\nKhi đó số học sinh chỉ chơi bóng đá là:",
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
    "solution_vi": "a) Đúng: Số học sinh thích chơi cả hai môn câu lông và bóng đá: (học sinh).\nb) Đúng: Số học sinh thích bóng đá: (học sinh).\nc) Sai: Số học sinh thích câu lông: (học sinh).\nd) Sai: Số học sinh thích chơi cả hai môn câu lông và bóng đá: (học sinh).",
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
    "question_vi": "Một nhóm có 12 học sinh chuẩn bị cho hội diễn văn nghệ. Trong danh sách đăng kí tham gia tiết\nmục múa và tiết mục hát của nhóm đó, có 5 học sinh tham gia tiết mục múa, 3 học sinh tham gia cả\nhai tiết mục. Hỏi có bao nhiêu học sinh trong nhóm tham gia tiết mục hát? Biết có 4 học sinh của\nnhóm không tham gia tiết mục nào.",
    "question_en": "A group of 12 students is preparing for an arts festival. Five students take part in the dance performance and 3 take part in both the dance and singing performances. Four students take part in neither performance. How many students take part in the singing performance?",
    "options": [],
    "solution_vi": "Vì nhóm có 12 học sinh, trong đó có 4 học sinh không tham gia tiết mục nào nên tổng số học\nsinh tham gia hai tiết mục múa và hát là: (học sinh)\nLại có: Trong 5 học sinh tham gia tiết mục múa, có 3 học sinh tham gia cả hai tiết mục\nVậy số học sinh chỉ tham gia tiết mục múa là: (học sinh)\nDo đó số học sinh tham gia tiết mục hát là: (học sinh).\n-----------------HẾT-----------------",
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
    "solution_vi": "Số học sinh vừa giỏi Toán, vừa giỏi Lý chính là số phần tử của tập hợp.\nTừ biểu đồ Ven ta có:.",
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
    "solution_vi": "Đáp án A đúng vì: Gọi A là tập hợp các học sinh đăng ký chơi bóng đá, B là tập hợp các học sinh\nđăng ký chơi bóng chuyền.\nDựa vào biểu đồ Ven, ta có: số học sinh đăng ký cả 2 môn là:\n.",
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
    "solution_vi": "Gọi theo thứ tự là số học sinh chỉ thi môn điền kinh, nhảy xa, nhảy cao.\nlà số học sinh chỉ thi hai môn điền kinh và nhảy xa\nlà số học sinh chỉ thi hai môn nhảy xa và nhảy cao\nlà số học sinh chỉ thi hai môn điền kinh và nhảy cao\nSố em thi ít nhất một môn là:\nDựa vào biểu đồ ven ta có hệ phương trình sau:\nCộng vế với vế của ta có:\nTừ ta có:\nVậy có 21 học sinh chỉ thi một trong ba nội dung trên.",
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
    "solution_vi": "Số học sinh học giỏi ít nhất một trong hai môn Toán và Văn là:.\nSố học sinh chỉ giỏi Toán mà không giỏi Văn (Phần Toán sau khi bỏ đi phần giao)\nlà:.\nVậy số học sinh giỏi cả hai môn Toán và Văn (Phần giao nhau) là:\nCách khác:\nSố học sinh học giỏi ít nhất một trong hai môn Toán và Văn là:.\nSố học sinh giỏi cả hai môn Toán và Văn là:.",
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
    "solution_vi": "Dựa vào biểu đồ ven ta có:\nSố học sinh chỉ giỏi môn Toán là:.\nSố học sinh chỉ giỏi môn Hóa là:.\nDo đó số học sinh lớp là:\nCách 2: Sĩ số học sinh lớp là:.",
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
    "question_vi": "Lớp 10A có 45 học sinh trong đó có 25 em học giỏi môn Toán, 23 em học giỏi môn Lý, 20 em học\ngiỏi môn Hóa, 11 em học giỏi cả môn Toán và môn Lý, 8 em học giỏi cả môn Lý và môn Hóa, 9\nem học giỏi cả môn Toán và môn Hóa. Hỏi lớp 10 A có bao nhiêu bạn học giỏi cả ba môn Toán,\nLý, Hóa? (biết rằng mỗi học sinh trong lớp học giỏi ít nhất một trong ba môn Toán, Lý, Hóa).",
    "question_en": "Class 10A has 45 students. Of these, 25 are good at Mathematics, 23 at Physics, and 20 at Chemistry; 11 are good at both Mathematics and Physics, 8 at both Physics and Chemistry, and 9 at both Mathematics and Chemistry. If every student is good at at least one of the three subjects, how many students are good at all three?",
    "options": [],
    "solution_vi": "Gọi lần lượt là tập hợp các học sinh giỏi môn Toán, Lý, Hóa.\nTa có:\n.\nVậy có 5 học sinh giỏi cả 3 môn.",
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
    "question_vi": "Một lớp học có 25 học sinh chơi bóng đá, 23 học sinh chơi bóng bàn, 14 học sinh chơi cả bóng đá\nvà bóng bàn, 6 học sinh không chơi môn nào. Tìm số học sinh chỉ chơi một môn thể thao?",
    "question_en": "A class has 25 students who play football, 23 who play table tennis, 14 who play both sports, and 6 who play neither. How many students play exactly one sport?",
    "options": [],
    "solution_vi": "Gọi là tập hợp các học sinh chơi bóng đá, là tập hợp các học sinh chơi bóng bàn,\nC là tập hợp các học sinh không chơi môn thể thao nào.\nTa có:: là số học sinh chơi bóng đá;: là số học sinh chơi bóng bàn;: là số học sinh\nkhông chơi môn thể thao nào.\nKhi đó số học sinh chỉ chơi một môn thể thao là:",
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
    "question_vi": "Lớp 10C1 có 45 học sinh chuẩn bị cho hội diễn văn nghệ chào mừng ngày nhà giáo Việt Nam\n20/11. Trong danh sách đăng kí tham gia tiết mục nhảy Flashmob và tiết mục hát, có 35 học sinh\ntham gia tiết mục nhảy Flashmob, 10 học sinh tham gia cả hai tiết mục. Hỏi có bao nhiêu học sinh\ntrong lớp tham gia tiết mục hát? Biết rằng lớp có bạn Kiệt, Hạ, Toàn, Thiện bị khuyết tật\nhòa nhập nên không tham gia tiết mục nào.",
    "question_en": "Class 10C1 has 45 students preparing for a performance celebrating Vietnamese Teachers’ Day (20 November). Thirty-five students join the Flashmob dance, 10 join both the Flashmob and singing performances, and four students—Kiet, Ha, Toan, and Thien—do not join either performance. How many students join the singing performance?",
    "options": [],
    "solution_vi": "Kí hiệu là tập hợp học sinh tham gia tiết mục nhảy Flashmob, là tập hợp học sinh tham\ngia tiết mục hát, là tập hợp học sinh trong lớp. Ta có thể biểu diễn ba tập hợp đó bằng biểu\nđồ Ven như hình bên:\nKhi đó là tập hợp học sinh tham gia cả hai tiêt mục. Số phần tử của tập hợp là 35, số\nphần tử của tập hợp là 10, số phần tử của tập hợp là 45.\nSố học sinh tham gia ít nhất một trong hai tiết mục là (học sinh).\nSố học sinh tham gia tiết mục hát mà không tham gia tiết mục nhảy Flashmob là\n(học sinh).\nSố học sinh tham gia tiết mục hát là (học sinh).",
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
    "question_vi": "Trong đột khảo sát nghề, giáo viên chủ nhiệm lớp 10D đưa ra ba nhóm ngành cho học sinh lựa\nchọn, đó là: Giáo dục, Y tế, Công nghệ thông tin. Học sinh có thể chọn từ một đến ba nhóm ngành\nnêu trên hoặc không chọn nhóm ngành nào trong ba nhóm ngành trên. Giáo viên chủ nhiệm thống\nkê theo từng nhóm ngành và được kết quả: có 6 học sinh chọn nhóm ngành Giáo dục, 9 học sinh\nchọn nhóm ngành tế, 10 học sinh chọn nhóm ngành Công nghệ thông tin, 22 học sinh không\nchọn nhóm ngành nào trong ba nhóm trên. Nếu thống kê số lượng học sinh chọn theo từng hai\nnhóm ngành được kết quả: có 3 học sinh chọn hai nhóm ngành Giáo dục và tế, 2 học sinh chọn\nhai nhóm ngành tế và Công nghệ thông tin, 3 học sinh chọn hai nhóm ngành Giáo dục và Công\nnghệ thông tin. Hỏi có bao nhiêu học sinh chọn cả ba nhóm ngành nêu trên biết ló́p 10D có 40 học\nsinh?",
    "question_en": "In a career-interest survey, the homeroom teacher of class 10D offers three fields: Education, Healthcare, and Information Technology. Students may choose one, two, or all three fields, or none. The survey finds that 6 students choose Education, 9 choose Healthcare, 10 choose Information Technology, and 22 choose none. Also, 3 students choose both Education and Healthcare, 2 choose both Healthcare and Information Technology, and 3 choose both Education and Information Technology. If class 10D has 40 students, how many choose all three fields?",
    "options": [],
    "solution_vi": "Gọi lần lượt là tập hợp học sinh chọn nhóm ngành Giáo dục, Y tế, Công nghệ thông tin.\nKhi đó là tập hợp các học sinh chọn ít nhất một trong ba nhóm ngành trên.\nDo lớp 10D có 40 học sinh và 22 học sinh không chọn nhóm ngành trong ba nhóm ngành trên nên\nsố học sinh chọn ít nhất một trong ba nhóm ngành trên là\nTa có:,\n.\nÁp dụng công thức tính số phần tử của tập hợp:\nTa có số học sinh chọn cả ba nhóm ngành nêu trên là:\n-----------------HẾT-----------------",
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
    "question_vi": "Ba anh em An, Bình, Vinh ngồi làm bài xung quanh một cái bàn được trải khăn mới. Khi phát hiện\ncó vết mực, bà hỏi thì các cháu lần lượt trả lời:\nAn: “Em Vinh không làm đổ mực, đấy là do em Bình.”\nBình: “Em Vinh làm đổ mực, anh An không làm đổ mực”.\nVinh: “Theo cháu, Bình không làm đổ mực, còn cháu hôm nay không chuẩn bị bài”.\nBiết rằng trong 3 em thì có 2 em nói đúng, 1 em nói sai. Hỏi ai làm đổ mực?",
    "question_en": "Three brothers, An, Binh, and Vinh, are doing homework around a table covered with a new tablecloth. When an ink stain is discovered, their grandmother asks what happened. They reply as follows: An: “Vinh did not spill the ink; Binh did.” Binh: “Vinh spilled the ink; An did not.” Vinh: “I think Binh did not spill the ink, and I did not prepare my lesson today.” Given that exactly two of the three boys are telling the truth and one is lying, who spilled the ink?",
    "options": [],
    "solution_vi": "Nếu An nói đúng thì Bình là người làm đổ, suy ra Bình nói sai, theo đề bài ta có Vinh nói đúng.\nNếu Vinh nói đúng thì Bình không làm đổ mực. Suy ra mâu thuẫn.\nNếu Bình nói đúng, Vinh làm đổ mực thì An nói sai. Dẫn đến Vinh nói đúng. Suy ra thỏa mãn.\nVậy Vinh làm đổ mực.",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ có $u_1=-3$ và $q=-2$. Tính tổng 10 số hạng đầu tiên của cấp số nhân.",
    "question_en": "Let (u_n) be a geometric progression with u_1=-3 and q=-2. Find the sum of the first 10 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$S_{10}=-511$.",
        "content_en": "S_{10}=-511.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$S_{10}=1023$.",
        "content_en": "S_{10}=1023.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$S_{10}=1025$.",
        "content_en": "S_{10}=1025.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$S_{10}=-1025$.",
        "content_en": "S_{10}=-1025.",
        "is_correct": false
      }
    ],
    "solution_vi": "1 - ( -2 )\n10\n1 - qn\nTa có: $s_{10}$ = $u_{1}$. = -3. = 1023.\n1- q 1 - ( -2 )",
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
    "question_vi": "Cho một cấp số nhân có các số hạng đều không âm thỏa mãn $u_2=6$, $u_4=24$. Tính tổng của 12 số hạng đầu tiên của cấp số nhân đó.",
    "question_en": "A geometric progression has nonnegative terms and satisfies u_2=6 and u_4=24. Find the sum of its first 12 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3. 212 - 3.",
        "content_en": "$3\\cdot 2^{12}-3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "212 - 1.",
        "content_en": "2^{12}-1.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3. 212 - 1.",
        "content_en": "$3\\cdot 2^{12}-1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3. 212.",
        "content_en": "$3\\cdot 2^{12}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi công bội của CSN bằng q. Suy ra $u_{4}$ = $u_{2}$.q 2 ⇒ q = ±2. Do CSN có các số hạng không âm\nnên q = 2.\n1 - q12 1 - 212\nTa có $s_{12}$ = $u_{1}$. = 3. = 3 ( 212 - 1).\n1- q 1- 2\nn\n(1)",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ có $u_3=12$, $u_5=48$, có công bội âm. Tổng 7 số hạng đầu của cấn số nhân đã cho bằng",
    "question_en": "Let (u_n) be a geometric progression with u_3=12, u_5=48, and a negative common ratio. Find the sum of the first 7 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "129.",
        "content_en": "129.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-129.",
        "content_en": "-129.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "128.",
        "content_en": "128.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-128.",
        "content_en": "-128.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: $u_{42}$ = $u_{3}$.$u_{5}$ = 576. Vì $u_{3}$ > 0, $u_{5}$ > 0 và công bội âm nên: $u_{4}$ = -24 ⇒ q = -2.\n$u_{3}$ 12\nLại có: $u_{3}$ = $u_{1}$q 2 ⇒ $u_{1}$ = = = 3.\nq2 4\n1 - ( -2 )\n7\n1 - q7\nÁp dụng công thức ta có: $s_{7}$ = $u_{1}$ = 3. = 129.\n1- q 1 - ( -2 )",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ có $u_1=2$, công bội dương và biểu thức $u_4+\\frac{1024}{u_7}$ đạt giá trị nhỏ nhất. Tính $S=u_{11}+u_{12}+\\cdots+u_{20}$.",
    "question_en": "Let $(u_n)$ be a geometric progression with $u_1=2$ and positive common ratio. The expression $u_4+\\frac{1024}{u_7}$ attains its minimum value. Find $S=u_{11}+u_{12}+\\cdots+u_{20}$.",
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
    "solution_vi": "1024 512\nGọi q là công bội của cấp số nhân, q > 0. Ta có $u_{4}$ + = 2q 3 + 6.\n$u_{7}$ q\n512 512 512\nÁp dụng bất đẳng thức Cô-si, ta có: 2q3 + 6\n= q3 + q3 + 6 ≥ 3 3 q3.q3. 6 = 24.\nq q q\n1024 512\nSuy ra $u_{4}$ + đạt giá trị nhỏ nhất bằng 24 khi q 3 = 6 ⇔ q = 2.\n$u_{7}$ q\n$u_{1}$ (1 - q10 ) $u_{1}$ (1 - q 20 )\nTa có $s_{10}$ = = 2 - 2; $s_{10}$ =\n11\n= 221 - 2.\n1- q 1- q\nDo đó S = $s_{20}$ - $s_{10}$ = 2095104.\n{$u_{4}$ + $u_{6}$ = -540",
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
    "question_vi": "Cho cấp số nhân có các số hạng lần lượt là $\\frac14,\\frac12,1,\\ldots,2048$. Tính tổng $S$ của tất cả các số hạng của cấp số nhân đã cho.",
    "question_en": "A geometric progression has terms $\\frac14, \\frac12, 1, \\ldots, 2048$. Find the sum $S$ of all its terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "S = 2047, 75.",
        "content_en": "S=2047.75.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "S = 2049, 75.",
        "content_en": "S=2049.75.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "S = 4095, 75.",
        "content_en": "S=4095.75.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "S = 4096, 75.",
        "content_en": "S=4096.75.",
        "is_correct": false
      }
    ],
    "solution_vi": "Cấp số nhân đã cho có\n{ 1\n$u_{1}$ = 1\n→ 2048 = 211 = $u_{1}$q n -1 =.2n -1 = 2n - 2 ⇔ n = 13.\n4 ⎯⎯\nq = 2 2\n1 - q13 1 1 - 213\nVậy cấp số nhân đã cho có tất cả 13 số hạng. Vậy $s_{13}$ = $u_{1}$. =. = 2047,75\n1- q 4 1- 2",
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
        "content_vi": "215.",
        "content_en": "215.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "315.",
        "content_en": "315.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "415.",
        "content_en": "415.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "515.",
        "content_en": "515.",
        "is_correct": false
      }
    ],
    "solution_vi": "{u = 160 $u_{1}$\nTừ giả thiết ta có 1 ⇒q= 5 6 =.\n$u_{6}$ = 5 $u_{1}$ 2\n( ( 1 )6 )\n160 1 - \n$u_{1}$ (1 - q 6 ) 2 \n= 315.\nSuy ra tổng các số hạng của cấp số nhân đó là: S = =\n1- q 1\n2\n{$u_{1}$ + $u_{2}$ + $u_{3}$ = 13",
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
    "question_vi": "Một cấp số nhân $(u_n)$ có n số hạng, số hạng đầu $u_1=7$, công bội $q=2$. Số hạng thứ n bằng 1792. Tính tổng n số hạng đầu tiên của cấp số nhân $(u_n)$?",
    "question_en": "A geometric progression (u_n) has n terms, first term u_1=7, common ratio q=2, and u_n=1792. Find the sum of its first n terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "5377.",
        "content_en": "5,377.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5737.",
        "content_en": "5,737.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3577.",
        "content_en": "3,577.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "3775.",
        "content_en": "3,775.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_n$ = $u_{1}$.q n -1 ⇒ 7.2n -1 = 1792 ⇔ n = 9 ⇒ $s_{8}$ = 3577\n( -1)\n2\n1 1 1",
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
        "content_vi": "8 $m^2$.",
        "content_en": "8 m^2.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "6 $m^2$.",
        "content_en": "6 m^2.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "10 $m^2$.",
        "content_en": "10 m^2.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "12 $m^2$.",
        "content_en": "12 m^2.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi a0, a1,a^2,...,a11 lần lượt là diện tích mặt trên của đế tháp, tầng 1, tầng 2,., tầng 11.\nn\n1 (1)\nKhi đó ta có: a0 = 12288; an = an -1 = a 0, n = 1,2,...,11.\n2 2\n11 11\n(1) (1)\nDiện tích mặt trên tầng trên cùng là: a11 = a0 = 12288 = 6 ( m 2 )\n2 2",
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
        "content_vi": "22582927.",
        "content_en": "22,582,927.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "02348115.",
        "content_en": "2,348,115.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2134650.",
        "content_en": "2,134,650.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "11940591.",
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
    "question_vi": "Bạn A thả quả bóng cao su từ độ cao 10 m theo phương thẳng đứng. Mỗi khi chạm đất, bóng nảy lên đến độ cao bằng $\\frac34$ độ cao trước đó. Tính tổng quãng đường bóng đi được đến khi bóng dừng hẳn.",
    "question_en": "A rubber ball is dropped vertically from a height of $10$ m. After each impact with the ground, it rebounds to a height equal to $\\frac{3}{4}$ of the preceding height. Find the total distance traveled by the ball before it comes to rest.",
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
    "solution_vi": "12 \n3\nCác quãng đường khi bóng đi xuống tạo thành một cấp số nhân lùi vô hạn có $u_{1}$ = 10 và q =.\n4\n$u_{1}$ 10\nTổng các quãng đường khi bóng đi xuống là S = = = 40.\n1- q 1- 3\n4\nTổng quãng đường bóng đi được đến khi bóng dừng hẳn 2 S - 10 = 70.",
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
        "content_vi": "10.",
        "content_en": "10.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "11.",
        "content_en": "11.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "26.",
        "content_en": "26.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "50.",
        "content_en": "50.",
        "is_correct": false
      }
    ],
    "solution_vi": "Số lượng vi khuẩn tăng lên là cấp số nhân ( $u_n$ ) với công bội q = 2.\nTa có: $u_{6}$ = 64000 ⇒ $u_{1}$.q 5 = 64000 ⇒ $u_{1}$ = 2000.\nSau n phút thì số lượng vi khuẩn là $u_{n+1}$.\n$u_{n+1}$ = 2048000 ⇒ $u_{1}$.q n = 2048000 ⇒ 2000.2n = 2048000 ⇒ n = 10.\nVậy sau 10 phút thì có được 2048000 con.",
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
    "question_vi": "Cho cấp số nhân $(a_n)$ có $a_1=7$, $a_6=224$ và Sk = 3577. Tính giá trị của biểu thức T = ( k + 1) ak.",
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
    "solution_vi": "Ta có a6 = 224 ⇔ a1q 5 = 224 ⇒ q = 2.\na1 (1 - q k )\nDo Sk = = 7 ( 2k - 1) nên Sk = 3577 ⇔ 7 ( 2k - 1) = 3577 ⇔ 2k = 29 ⇔ k = 9.\n1- q\nSuy ra: T = 10a9 = 10a1q 8 = 17920.",
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
    "question_vi": "Cho cấp số nhân $(u_n)$, biết $u_1+u_5=51$; $u_2+u_6=102$. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "Let (u_n) be a geometric progression satisfying u_1+u_5=51 and u_2+u_6=102. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng $u_1=3$",
        "content_en": "u_1=3.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạng $u_4=48$",
        "content_en": "u_4=48.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số 12288 là số hạng thứ 12 của cấp số nhân $(u_n)$",
        "content_en": "12,288 is the 12th term of (u_n).",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng 8 số hạng đầu của cấp số nhân là: 765.",
        "content_en": "The sum of the first 8 terms is 765.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Gọi q là công bội của cấp số nhân đã cho.\n$u_{1}$ (1 + q ) = 51\n{ { { 4\n(1)\n$u_{1}$ + $u_{5}$ = 51 $u_{1}$ + $u_{1}$q = 51\n4\nTa có: ⇔ ⇔\n$u_{2}$ + $u_{6}$ = 102 $u_{1}$q + $u_{1}$q = 102 $u_{1}$q (1 + q ) = 102 ( 2)\n5 4\nNhận xét: Nếu $u_{1}$ = 0 hay q = 0 thì (1) và ( 2 ) đều không thoả mãn vì vậy ta có $u_{1}$q ≠ 0.\nChia theo vế ( 2 ) cho (1) ta được: q = 2.\n51\nThay q = 2 vào (1) suy ra $u_{1}$ = = 3.\n1 + 24\nCông thức số hạng tổng quát của cấp số nhân: $u_n$ = 3 2n -1.\n14 \nb) Sai: $u_{4}$ = 3.23 = 24\nc) Sai: Xét $u_n$ = 12288 ⇔ 3.2n -1 = 12288 ⇔ 2 n -1 = 212 ⇔ n = 13.\nVậy 12288 là số hạng thứ 13 của cấp số nhân đã cho.\n$u_{1}$ (1 - q8 ) 3.(1 - 28 )\nd) Đúng: Tổng 8 số hạng đầu của cấp số nhân là: $s_{8}$ = = = 765.\n1- q 1- 2\n{ 2\n$u_{4}$ =",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ biết rằng $u_1+u_2+u_3=168$ và $u_4+u_5+u_6=21$. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "Let (u_n) be a geometric progression such that u_1+u_2+u_3=168 and u_4+u_5+u_6=21. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng $u_1=90$",
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
        "content_en": "The sum of the first 10 terms is $\\frac{3069}{16}$.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Số hạng $u_{1}$ = 96\n1\nb) Sai: Công bội của cấp số nhân bằng q =\n2\n3 -1\n(1)\nc) Đúng: Ta có 24 = 96. \n2\n[ 1 10 ]\n$u_{1}$ (1 - q ) 96 1 - ( )\n2 3069\n10\nd) Đúng: Ta có $s_{10}$ = = =\n1- q 1-\n1 16\n2\n16 \n{u - $u_{2}$ = 54",
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
    "question_vi": "Cho dãy số $(u_n)$ là một cấp số nhân có $u_1=3$, $u_3=12$ và công bội của cấp số nhân đó là số âm. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "Let (u_n) be a geometric progression with u_1=3, u_3=12, and a negative common ratio. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Công bội của cấp số cộng đó là $q=-2$.",
        "content_en": "The common ratio is q=-2.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạng thứ 25 của cấp số nhân đó bằng -3. 2 24.",
        "content_en": "$u_{25}=-3\\cdot 2^{24}$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Tổng 101 số hạng đầu của cấp số nhân đó bằng 1 - 2101.",
        "content_en": "The sum of the first 101 terms is 1-2^{101}.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "$u_{55}$ = $u_{54}$. $u_{56}$",
        "content_en": "u_{55}=u_{54}u_{56}.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Vì dãy số ( $u_n$ ) là một cấp số nhân có $u_{1}$ = 3, $u_{3}$ = 12 và công bội q < 0\nSuy ra $u_{3}$ = $u_{1}$.q 2 ⇒ 3.q 2 = 12 ⇒ q = -2\nb) Sai: $u_{25}$ = $u_{1}$.q 24 = 3.( -2 ) = 3.224\n24\n$u_{1}$ (1 - q101 ) 3. [1 - ( -2 ) ]\n101\nc) Sai: Tổng số hạng đầu của cấp số nhân đó là $s_{101}$ = = = 1 + 2101\n1- q 1 - ( -2 )\n( $u_{55}$ ) = $u_{55}$ = $u_{55}$ ( $u_{55}$ = $u_{1}$.q54 > 0 )\n$u_{55}$\n$u_{54}$.$u_{56}$ =.$u_{55}$.q =\n2\nd) Sai:\nq",
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
        "content_vi": "Số hạt thóc ở 64 ô là một cấp số nhân có $u_1=1$; $q=2$.",
        "content_en": "The numbers of grains on the 64 squares form a geometric progression with u_1=1 and q=2.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạt thóc ở ô thứ tám là 2 8.",
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
    "solution_vi": "Số hạt thọc ở 64 ô là một cấp số nhân có $u_{1}$ = 1; q = 2, khi đó số hạt thóc ở ô thứ 8 là\n$u_{8}$ = $u_{1}$q 7 = 27.\nTổng số hạt thóc của 64 ô là: $s_{64}$ = 1 + 2 + 22 +... + 263 = 264 - 1 hạt thóc, do đó tổng khối lượng\n20\nthóc trên 64 ô trên bàn cờ là: (264 - 1). ≈ 3.69x108 ( g ) = 369 (tỉ tấn).\n100\nTương tự, ta có khối lượng thóc của 32 ô đầu tiên là ( 232 - 1).\n20\n= 858993459 ≈ 859 (tấn)\n100\na) Đúng: Số hạt thóc ở 64 ô là một cấp số nhân có $u_{1}$ = 1; q = 2.\nb) Sai: Số hạt thóc ở ô thứ tám là 2 7.\nc) Sai: Tổng khối lượng thóc của 64 ô trên bàn cờ là 369 tỉ tấn.\nd) Sai:",
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
    "question_vi": "Anh Bình là nhân viên của một công ty A. Từ ngày 1/2/2024 anh Bình được nâng lương lên bậc 4, mức lương anh hiện hưởng là 11. 718. 750 đồng mỗi tháng (chưa trừ thuế và bảo hiểm). Theo quy định của công ty, nếu không bị kỉ luật, không có khen thưởng đặc biệt thì cứ sau 3 năm anh Bình sẽ được nâng một bậc lương, tăng thêm 25% so với bậc lương trước, tối đa là bậc 7. Khi hết bậc 7 sẽ chuyển sang vượt khung. Lương vượt khung năm sau cao hơn năm trước 1% và vẫn 1 sẽ được tính sau khi hết đúng 1 năm tập sự. Anh Bình là người rất nghiêm túc, không vi phạm kỉ luật. Anh dự định sẽ làm việc 30 năm ở công ty này rồi nghỉ hưu. Xét tính đúng sai của các khẳng định sau? (làm tròn đến đồng)",
    "question_en": "Mr. Binh is an employee of Company A. On February 1, 2024, he is promoted to salary grade 4, earning 11,718,750 VND per month before tax and insurance. Under company rules, if he has neither disciplinary action nor a special award, he moves up one salary grade every 3 years, with a 25% increase over the preceding grade, up to grade 7. After grade 7, he moves to the over-scale salary scheme; each successive over-scale year is 1% higher than the previous year. He completed a one-year probationary period before the regular salary period. He plans to work for the company for 30 years in total. Determine whether each statement is true or false, rounding to the nearest VND where needed.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Lương bậc 5 của anh Bình sẽ là 14. 500. 000 đồng.",
        "content_en": "His grade-5 monthly salary is 14,500,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Lương bậc 1 của anh Bình là 6. 000. 000 đồng.",
        "content_en": "His grade-1 monthly salary is 6,000,000 VND.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Lương bậc 7 anh Bình là 23. 250. 000.",
        "content_en": "His grade-7 monthly salary is 23,250,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng tiền lương anh Bình nhận được kể từ khi hết tập sự đến khi nghỉ hưu là = 5. 554. 357. 709",
        "content_en": "The total salary he receives from the end of probation until retirement is 5,554,357,709 VND.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Gọi $u_n$ là lương bậc n của anh Bình hàng tháng.\nTa có $u_{n+1}$ = $u_n$ + 25%$u_n$ = $u_n$.1, 25 (n ≤ 7)\n$u_n$ là cấp số nhân có công bội q = 1, 25.\nTa có $u_{4}$ = 11.718.750 nên $u_{5}$ = $u_{4}$ × 1, 25 = 14.648.437,5 đồng\n$u_{4}$\nb) Đúng: $u_{4}$ = $u_{1}$ × q3 ⇔ $u_{1}$ = = 6.000.000\nq3\nc) Sai: $u_{7}$ = $u_{1}$ × q 6 = 6.000.000 × 1, 256 = 22.888.184 đồng\nd) Đúng: Khi vượt khung, lương mỗi khung %, là cấp số nhân $v_n$, (1 ≤ n ≤ 8 ) có số hạng đầu là\n$v_{1}$ = $u_{7}$ + 1%$u_{7}$ = 1,01u7, công bội là q′ = 1,01.\nAnh Bình làm việc 30 năm liên tục, trong đó 1 năm tập sự, 21 năm lương theo bậc, 8 năm vượt\nkhung. Mỗi bậc lương anh Bình nhận 36 tháng, lương vượt khung mỗi khung % anh nhận 12\ntháng. Tổng lương anh Bình nhận được kể từ khi hết tập sự đến khi nghỉ hưu là\nq7 - 1 q′8 - 1\nS = 36u1. + 12v1 = 5.554.357.709 đồng.\nq -1 q′ - 1",
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
    "question_vi": "Cho năm số a, b, c, d, e tạo thành một cấp số nhân theo thứ tự đó và các số đều khác 0, biết\n1 1 1 1 1\n+ + + + = 10 và tổng của chúng bằng 40. Tính giá trị S với S = abcde.\na b c d e",
    "question_en": "Five nonzero numbers a,b,c,d,e, in that order, form a geometric progression. Given that 1/a+1/b+1/c+1/d+1/e=10 and a+b+c+d+e=40, find S=abcde.",
    "options": [],
    "solution_vi": "1 1 1 1 1\nGọi q ( q ≠ 0 ) là công bội của cấp số nhân a, b, c, d, e. Khi đó,,,, là cấp số\na b c d e\n1\nnhân có công bội.\nq\nTheo đề bài ta có:\n20 \n{ 1 - q5\na. = 40\n1 - q { 1 - q5\n{a + b + c + d + e = 40 a. = 40\n5\n1 - q\n1 1 1 1 1 ⇔ 1- ( 1 ) ⇔ ⇔ a 2q 4 = 4.\n+ + + + = 10 5\n-\na b c d e 1 q = 10.\n1 q 1\n= 10\na. a q 4 ( q - 1)\n1-\n1 \nq\nTa có S = abcde = a.aq.aq 2.aq 3.aq 4 = a 5 q10 nên $s_{2}$ = ( a 5q10 ) = ( a^2 q 4 ) = 45.\n2 5\nSuy ra S = 45 = 32.\n{5u + 5u1 - $u_{2}$ = $u_{2}$ + 6",
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
    "question_vi": "Một loại vi khuẩn được nuôi cấy trong ống nghiệm, cứ 20 phút lại phân đôi một lần. Nếu ban\nđầu có 200 vi khuẩn, tính sô lượng vi khuẩn có trong ống nghiệm sau 2 giờ.",
    "question_en": "A bacterial culture doubles every 20 minutes. If there are initially 200 bacteria, how many bacteria will there be after 2 hours?",
    "options": [],
    "solution_vi": "Ta có: 2 giờ = 120 phút=6.20 phút. Do đó sau 2 giớ vi khuẩn phân đôi 6 lần.\nGọi $u_n$ là số lượng vi khuẩn có trong ống nghiệm sau lần phân đôi thứ n - 1.\nKhi đó, dãy số ( $u_n$ ) là một cấp số nhân với $u_{1}$ = 200 và q = 2.\nTa có $u_{7}$ = $u_{1}$.q 6 = 200.26 = 12800. Vậy sau 2 giờ, trong ống nghiệm có 12800 vi khuẩn.",
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
    "question_vi": "Một tháp 10 tầng có diện tích sàn của tầng dưới cùng là 6144 $m^2$. Tính diện tích mặt sàn tầng\ntrên cùng biết rằng diện tích mặt sàn mỗi tầng bằng nửa diện tích mặt sàn tầng ngay bên dưới.",
    "question_en": "A 10-floor tower has a floor area of 6,144 m^2 on its lowest floor. Each floor has half the area of the floor immediately below it. Find the floor area of the top floor.",
    "options": [],
    "solution_vi": "9\n(1)\nTa có: $u_{10}$ = $u_{1}$.q 9 = 6144. = 12 ( m 2 ).\n2",
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
    "question_vi": "Mặt sàn tầng một (tầng trệt) của một ngôi nhà cao hơn mặt sân 0, 5 m. Cầu thang đi từ tầng một\nlên tầng hai gồm 25 bậc, mổi bậc cao 16 cm. Viết công thức để tìm độ cao của bậc cầu thang thứ\nn so với mặt sân và tính độ cao của sàn tầng hai so với mặt sân.",
    "question_en": "The ground floor of a house is 0.5 m above the yard. The staircase from the ground floor to the second floor has 25 steps, each 16 cm high. Write a formula for the height of the nth step above the yard, and find the height of the second-floor level above the yard.",
    "options": [],
    "solution_vi": "Mỗi bậc thang cao 16 cm = 0,16 m ⇒ n bậc thang cao 0,16n ( m )\n22 \nVì mặt bằng sàn cao hơn mặt sân 0,5 m nên công thức tính độ cao của bậc n so với mặt sân sẽ\nlà: h n = ( 0,5 + 0,16n )( m ).\nKhi đó độ cao của sàn tầng hai so với mặt sân ứng với n = 25 là:\nh25 = 0,5 + 0,16.25 = 4,5 ( m )",
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
    "question_vi": "Một cây đàn organ có tần số âm thanh các phim liên tiếp tạo thành một cấp số nhân. Cho biết tần\nsố phim La Trung lả 400 Hz và tần số của phím LaCao cao hơn 12 phím là 800 Hz. Tìm công\nbội của cẩp số nhân nói trên (làm tròn kết quả đến hàng phần nghìn).",
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
    "question_vi": "Dân số Việt Nam năm 2020 là khoảng 97, 6 triệu người. Nếu trung bình mỗi năm tăng 1, 14% thì\nưởc tính dân số Việt Nam năm 2040 là khoảng bao nhiêu người (làm tròn kết quả đến hàng trăm\nnghìn)?",
    "question_en": "Vietnam had a population of about 97.6 million in 2020. If the population increases by an average of 1.14% per year, estimate the population in 2040, rounded to the nearest hundred thousand.",
    "options": [],
    "solution_vi": "Ước tính dân số Việt Nam năm 2040 là: 97,6.(1 + 0,0114 ) = 122, 4 (triệu người).\n20",
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
    "question_vi": "Để tích lũy tiền cho việc học đại học của con gái, cô Hoa quyết định hằng tháng bỏ ra 500 nghìn\nđồng vào tài khoản tiết kiệm, được trả lãi 0, 5% cộng dồn hằng tháng. Có bắt đầu chương trình\ntích luỹ này khi con gái cô tròn 3 tuổi. Cô ấy sẽ tích luỹ được bao nhiêu tiền vào thời điểm gửi\nkhoản tiên thứ 180? Lúc này con gái cô Hoa bao nhiêu tuổi?",
    "question_en": "To save for her daughter's university education, Ms. Hoa deposits 500,000 VND into a savings account every month. The account earns 0.5% interest per month, compounded monthly. She begins when her daughter turns 3. How much will have accumulated immediately after the 180th deposit, and how old will her daughter be then?",
    "options": [],
    "solution_vi": "Gọi $u_n$ là số triệu đồng mà cô Hoa có trong chương trình tích luỹ ở lần gửi thứ n (vào đầu\ntháng thứ n ).\nKí hiệu a = 0,5 triệu đồng, r = 0,5%.\nSố tiền của cô Hoa trong chương trình ở đầu tháng 1 là $u_{1}$ = a.\nSố tiền của cô Hoa trong chương trình ở đầu tháng 2 là $u_{2}$ = $u_{1}$ (1 + r ) + a.\nSố tiền của cô Hoa trong chương trình ở đầu tháng 3 là\n$u_{3}$ = $u_{2}$ (1 + r ) + a = a (1 + r ) 2 + a (1 + r ) + a.\nTương tự cho các tháng tiếp theo, suy ra số tiền của cô Hoa trong chương trình ở đầu tháng n\n(1 + r ) - 1 = a (1 + r ) - 1.\nn n\nlà: $u_n$ = a (1 + r ) + a (1 + r ) + …+ a (1 + r ) + a = a\nn -1 n-2\n(1 + r ) - 1 r\n(1 + r ) -1\n180\nVào thời điểm gửi khoản tiền thứ 180, cô ấy sẽ tích luỹ được $u_{180}$ =a = 145, 41\nr\n(triệu đồng). Khi đó, tuổi của con gái cô Hoa là 3 + 180:12 = 18 tuổi.",
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
    "question_vi": "Một loại thuốc được dùng mỗi ngày một lần. Lúc đầu nồng độ thuốc trong máu của bệnh nhân\ntăng nhanh, nhưng mỗi liều kế tiếp có tác dụng ít hơn liều trước đó. Lượng thuốc trong máu ở\nngày thứ nhất là 50mg, và mỗi ngày sau đó giảm chỉ còn một nửa so với ngày kề trước đó. Tính\ntổng lượng thuốc (tính bằng mg) trong máu của bệnh nhân sau khi dùng thuốc 10 ngày liên tiếp.",
    "question_en": "A medicine is taken once per day. The amount present in the patient's blood on the first day is 50 mg, and on each subsequent day it is half the amount on the preceding day. Find the total amount, in milligrams, over 10 consecutive days.",
    "options": [],
    "solution_vi": "Lượng thuốc trong máu mỗi ngày cảu bệnh nhân lập thành cấp số nhân với số hạng đầu là 50\nvà công bội q = 0.5\nTổng lượng thuốc trong má$u_{10}$ ngày liên tiếp chính là tổng 10 số hạng đầu cảu cấp số nhân\n50 [1 - (0.5)10 ]\nnày và bằng: $s_n$ = = 99.902 ( mg )\n1 - 0.5",
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
    "question_vi": "Ban đầu, một quả lắc đồng hồ dao động theo một cung tròn dài 46 cm (H. 2. 1). Sau mỗi lần đu\nliên tiếp, độ dài của cung tròn bằng 0, 98 độ dài cung tròn ở ngay lần trước đó. Sau 15 lần dao\nđộng, quả lắc sẽ đi được quãng đường tổng cộng là bao nhiêu? (Kết quả tính theo centimét và\nlàm tròn đến chữ số thập phân thứ hai).\n24",
    "question_en": "Initially, a clock pendulum sweeps an arc of length 46 cm. On each successive swing, the arc length is 0.98 times that of the preceding swing. Find the total distance traveled over 15 swings, in centimeters, rounded to two decimal places.",
    "options": [],
    "solution_vi": "Gọi $u_n$ là độ dài cung tròn ở lần thứ n khi con lắc dao động. Do lần một, quả lắc đồng hồ dao\nđộng theo một cung tròn dài 46 cm, sau mỗi lần dao động liên tiếp, độ dài của cung tròn bằng\n0,98 độ dài cung tròn ở ngay lần trước đó nên dãy số ( $u_n$ ) lập thành cấp số nhân có $u_{1}$ = 46 và\ncông bội q = 0,98.\nSau 15 lần dao động, quả lắc sẽ đi được quãng đường tổng cộng là\n1 - q15 1 - 0,9815\n$s_{15}$ = $u_{1}$ = 46 ≈ 601,29 ( cm ).\n1- q 1 - 0,98",
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
    "question_vi": "Cho cấp số nhân $(u_n)$, biết $u_1=1$, $u_4=64$. Tính công bội q của cấp số nhân đã cho",
    "question_en": "Let (u_n) be a geometric progression with u_1=1 and u_4=64. Find the common ratio q.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$q=4$.",
        "content_en": "q=4.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$q=-4$.",
        "content_en": "q=-4.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$q=21$.",
        "content_en": "q=21.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$q=22$.",
        "content_en": "q=22.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_{4}$ = 64 ⇔ $u_{1}$.q 3 = 64 ⇔ q 3 = 64 ⇔ q = 4.\n8",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ có $u_1=-2$ và $u_5=-162$. Công bội q bằng:",
    "question_en": "Let (u_n) be a geometric progression with u_1=-2 and u_5=-162. Find the common ratio q.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$q=-3$.",
        "content_en": "q=-3.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$q=3$.",
        "content_en": "q=3.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$q=3$; $q=-3$.",
        "content_en": "q=3 or q=-3.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$q=-2$.",
        "content_en": "q=-2.",
        "is_correct": false
      }
    ],
    "solution_vi": "-162 -162\nTa có $u_{5}$ = -162 ⇔ $u_{1}$.q 4 = -162 ⇔ q 4 = = = 81 ⇔ q = ±3.\n$u_{1}$ -2",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ có $u_1=2$ và $u_4=54$. Giá trị của công bội q bằng",
    "question_en": "Let (u_n) be a geometric progression with u_1=2 and u_4=54. Find the common ratio q.",
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
        "content_vi": "27.",
        "content_en": "27.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "-3.",
        "content_en": "-3.",
        "is_correct": false
      }
    ],
    "solution_vi": "$u_{4}$ 54\nTa có: = q3 ⇒ q3 = = 27 ⇒ q = 3 27 = 3\n$u_{1}$ 2",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ với $u_1=2$ và công bội $q=3$. Tìm số hạng thứ 4 của cấp số nhân?",
    "question_en": "Given a geometric progression $(u_n)$ with $u_1=2$ and common ratio $q=3$, find its fourth term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "24.",
        "content_en": "24.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "54.",
        "content_en": "54.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "162.",
        "content_en": "162.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "48.",
        "content_en": "48.",
        "is_correct": false
      }
    ],
    "solution_vi": "Có $u_{4}$ = $u_{1}$.q 3 = 2.33 = 54.",
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
    "question_vi": ": Cấp số nhân $(u_n)$ có $u_4=9$, $u_5=81$ có công bội là",
    "question_en": "A geometric progression (u_n) has u_4=9 and u_5=81. Find its common ratio.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "72.",
        "content_en": "72.",
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
        "content_vi": "9.",
        "content_en": "9.",
        "is_correct": true
      }
    ],
    "solution_vi": "$u_{5}$ 81\nTa có công bội q = = = 9.\n$u_{4}$ 9\n1",
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
    "question_vi": "Biết ba số $x^2, 8, x$ theo thứ tự lập thành cấp số nhân. Giá trị của x bằng",
    "question_en": "The three numbers $x^2,8,x$, in that order, form a geometric progression. Find $x$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$x=4$.",
        "content_en": "$x=4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$x=5$.",
        "content_en": "$x=5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$x=2$.",
        "content_en": "$x=2$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$x=1$.",
        "content_en": "$x=1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Do ba số x^2;8; x theo thứ tự lập thành cấp số nhân nên theo tính chất cấp số nhân ta được\nx^2.x = 8 ⇔ x^3 = 8 ⇔ x = 2.",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1=2$ và công bội $q=3$. Giá trị $u_{2019}$ bằng",
    "question_en": "Let (u_n) be a geometric progression with u_1=2 and q=3. Find u_{2019}.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2. 32018.",
        "content_en": "$2\\cdot3^{2018}$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "3. 2 2018.",
        "content_en": "$3\\cdot2^{2018}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2. 32019.",
        "content_en": "$2\\cdot3^{2019}$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3. 2 2019.",
        "content_en": "$3\\cdot2^{2019}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Áp dụng công thức của số hạng tổng quát $u_n$ = $u_{1}$.q n -1 = 2.32018.",
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
    "question_vi": "Cho cấp số nhân $(u_n)$; $u_1=1$, $q=2$. Hỏi số 1024 là số hạng thứ mấy?",
    "question_en": "Given a geometric progression $(u_n)$ with $u_1=1$ and common ratio $q=2$, which term is equal to 1024?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "11.",
        "content_en": "11.",
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
        "content_vi": "8.",
        "content_en": "8.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "10.",
        "content_en": "10.",
        "is_correct": false
      }
    ],
    "solution_vi": "n -1 n -1 n -1\nTa có $u_n$ = $u_{1}$.q ⇔ 1.2 = 1024 ⇔ 2 = 210 ⇔ n - 1 = 10 ⇔ n = 11.",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1=5$ và công bội $q=-2$. Số hạng thứ sáu của $(u_n)$ là",
    "question_en": "Given a geometric progression $(u_n)$ with first term $u_1=5$ and common ratio $q=-2$, find its sixth term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_6=320$.",
        "content_en": "$u_6=320$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_6=-160$.",
        "content_en": "$u_6=-160$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_6=-320$.",
        "content_en": "$u_6=-320$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_6=160$.",
        "content_en": "$u_6=160$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: $u_{6}$ = $u_{1}$.q 5 = 5.( -2 ) = -160.\n5",
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
    "question_vi": "Cho cấp số nhân $(u_n)$, $n\\ge1$ với công bội $q=2$ và có số hạng thứ hai $u_2=5$. Số hạng thứ 7 của cấp số nhân là",
    "question_en": "Given a geometric progression $(u_n)$, $n\\ge1$, with common ratio $q=2$ and second term $u_2=5$, find its seventh term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_7=320$.",
        "content_en": "$u_7=320$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_7=640$.",
        "content_en": "$u_7=640$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_7=160$.",
        "content_en": "$u_7=160$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_7=80$.",
        "content_en": "$u_7=80$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có ( $u_n$ ), n ≥ 1 là cấp số nhân có công bội q = 2 nên có số hạng tổng quát $u_n$ = q n -1.$u_{1}$.\n5 5\nVì $u_{2}$ = 5 = $u_{1}$.2 ⇒ $u_{1}$ = ⇒ $u_{7}$ =.26 = 160. Vậy số hạng thứ 7 của cấp số là 160.\n2 2",
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
        "content_vi": "1.",
        "content_en": "1.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "512.",
        "content_en": "512.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1024.",
        "content_en": "1024.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "32.",
        "content_en": "32.",
        "is_correct": false
      }
    ],
    "solution_vi": "{$u_{4}$ = 4096.$u_{1}$ {q3 = 4096 {q = 16 {q = 16\nTheo bài ra ta có: ⇔ ⇔ ⇔.\n1 2\nu + u = 34 1\nu.(1 + q ) = 34 17.$u_{1}$ = 34 $u_{1}$ = 2\nVậy $u_{3}$ = $u_{1}$.q 2 = 2.162 = 512.\n$u_{3}$",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ có tổng $n$ số hạng đầu là $S_n=5^n-1$ với $n=1,2,\\ldots$. Tìm số hạng đầu $u_1$ và công bội $q$ của cấp số nhân đó.",
    "question_en": "A geometric progression $(u_n)$ has sum of its first $n$ terms $S_n=5^n-1$ for $n=1,2,\\ldots$. Find the first term $u_1$ and the common ratio $q$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_1=5$, $q=4$.",
        "content_en": "u_1=5, q=4.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_1=5$, $q=6$.",
        "content_en": "u_1=5, q=6.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_1=4$, $q=5$.",
        "content_en": "u_1=4, q=5.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_1=6$, $q=5$.",
        "content_en": "u_1=6, q=5.",
        "is_correct": false
      }
    ],
    "solution_vi": "{$u_{1}$ = $s_{1}$ = 5 - 1 = 4 {$u_{1}$ = 4 u\nTa có: ⇒ ⇒ $u_{1}$ = 4, q = 2 = 5.\n$u_{1}$ + $u_{2}$ = $s_{2}$ = 5 - 1 = 24 $u_{2}$ = 24 - $u_{1}$ = 20\n2\n$u_{1}$\n{u - $u_{2}$ = 54",
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
    "question_vi": "Xen giữa số 3 và số 768 là 7 số để được một cấp số nhân có $u_1=3$. Khi đó $u_{5}$ là:",
    "question_en": "Insert 7 numbers between 3 and 768 so that the resulting sequence is a geometric progression with u_1=3. Find u_5.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "72.",
        "content_en": "72.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-48.",
        "content_en": "-48.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\pm48$.",
        "content_en": "$\\pm48$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "48.",
        "content_en": "48.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_{1}$ = 3 và $u_{9}$ = 768 nên 768 = 3.q ⇒ q8 = 256 ⇒ q = ±2.\n8\nDo đó $u_{5}$ = $u_{1}$.q 4 = 3.24 = 48.\n{$u_{20}$ = 8u17",
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
    "question_vi": "Cho dãy số $(u_n)$ được xác định bởi $u_1=2$; $u_n=2u_{n-1}+3n-1$. Tìm số hạng th $u_{2019}$ của dãy số.",
    "question_en": "The sequence $(u_n)$ is defined by $u_1=2$ and $u_n=2u_{n-1}+3n-1$ for $n\\ge2$. Find $u_{2019}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_{2019}=5\\cdot2^{2019}-6062$.",
        "content_en": "$u_{2019}=5\\cdot2^{2019}-6062$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_{2019}=5\\cdot2^{2019}+6062$.",
        "content_en": "$u_{2019}=5\\cdot2^{2019}+6062$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_{2019}=5\\cdot2^{2020}-6062$.",
        "content_en": "$u_{2019}=5\\cdot2^{2020}-6062$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_{2019}=5\\cdot2^{2020}+6062$.",
        "content_en": "$u_{2019}=5\\cdot2^{2020}+6062$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_n$ = 2un -1 + 3n - 1 ⇔ $u_n$ + 3n + 5 = 2 [$u_{n-1}$ + 3 ( n - 1) + 5], với n ≥ 2; n ∈ ℕ*\nĐặt $v_n$ = $u_n$ + 3n + 5, ta có $v_n$ = 2vn -1 với n ≥ 2; n ∈ ℕ*\nNhư vậy, ( $v_n$ ) là cấp số nhân với công bội q = 2 và $v_{1}$ = 10, do đó $v_n$ = 10.2n -1 = 5.2n.\nDo đó $u_n$ + 3n + 5 = 5.2n, hay $u_n$ = 5.2n - 3n - 5 với n ≥ 2; n ∈ ℕ*\nNên $u_{2019}$ = 5.22019 - 6062.\n3( n+4 )",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ với công bội q < 0 và $u_2=4$, $u_4=9$. Xét tính đúng sai của các khẳng định sau: 8",
    "question_en": "Let (u_n) be a geometric progression with q<0, u_2=4, and u_4=9. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng đầu $u_{1}$ = - 3 3",
        "content_en": "The first term is $u_1=-\\frac{8}{3}$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Cấp số nhân có công bội q = - 2 27",
        "content_en": "The common ratio is $q=-\\frac{3}{2}$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số hạng $u_{5}$ = 2 2187",
        "content_en": "$u_5=\\frac{27}{2}$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "- là số hạng thứ 8 32",
        "content_en": "$-\\frac{2187}{32}$ is the eighth term of the progression.",
        "is_correct": false
      }
    ],
    "solution_vi": "$u_{4}$ $u_{1}$q 3 9 3\na) Đúng: Ta có: $u_{2}$ = $u_{1}$q = 4, $u_{4}$ = $u_{1}$q 3 = 9 ⇒ = ⇒ = q 2 ⇒ q = - (q < 0).\n$u_{2}$ $u_{1}$q 4 2\n3 ( 3) 8\nThay q = - vào $u_{2}$, ta được: $u_{1}$ - = 4 ⇒ $u_{1}$ = -.\n2 2 3\n8 3\nb) Đúng: Vậy cấp số nhân đã cho có số hạng đầu $u_{1}$ = - và công bội q = -.\n3 2\nn -1\n8 ( 3)\nKhi đó $u_n$ = -. - \n3 2\n27\nc) Sai: Vậy $u_{5}$ = -\n2\n16 \n7\n2187 8 ( 3)\nd) Sai: - ≠ -. - nên không phải là số hạng thứ 8\n32 3 2",
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
        "content_vi": "Số lá sen lập thành cấp số nhân $(u_n)$ với $u_1=1$ và công bội $q=3$.",
        "content_en": "The daily leaf counts form a geometric progression (u_n) with u_1=1 and q=3.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số lá sen lập thành cấp số cộng $(u_n)$ với $u_1=1$ và công sai $d=3$.",
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
    "solution_vi": "Ngày đầu có có $u_{1}$ = 1 lá sen.\nDo số lá sen ngày hôm sau bằng 3 lần số lá sen ngày hôm trước nên ta có cấp số nhân ( $u_n$ ) với\n$u_{1}$ = 1 và công bội q = 3.\nVì ngày thứ 10 hồ sẽ đầy lá sen nên có $u_{10}$ = $u_{1}$.q 9 = 1.39 = 39 lá sen.\nNgày đầu có $v_{1}$ = 9 lá sen.\nDo số lá sen ngày hôm sau bằng 3 lần số lá sen ngày hôm trước nên ta có cấp số nhân ( vm ) với\n$v_{1}$ = 9 và công bội q = 3.\nKhi đó sau m ngày thì số lá sen là vm = $v_{1}$.q m -1 = 9.3m -1.\nTa có 9.3m -1 = 39 ⇔ 3m +1 = 39 ⇔ m + 1 = 9 ⇔ m = 8.\na) Đúng: Nếu ngày đầu có 9 lá sen thì tới ngày thứ 8 hồ sẽ đầy lá sen.\nb) Đúng: Số lá sen lập thành cấp số nhân ( $u_n$ ) với $u_{1}$ = 1 và công bội q = 3.\nc) Sai: Số lá sen lập thành cấp số nhân ( $u_n$ ) với $u_{1}$ = 1 và công bội q = 3.\nd) Sai: Nếu ngày đầu có 9 lá sen thì tới ngày thứ 8 hồ sẽ đầy lá sen.",
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
    "question_vi": "Để tích lũy cho việc học đại học của cậu con trai đầu lòng, cô Lan quyết định hằng tháng bỏ ra 600 nghìn đồng vào tài khoản tiết kiệm, được trả lãi 0, 5% cộng dồn hằng tháng. Cô bắt đầu chương trình tích lũy này khi cậu con trai tròn ba tuổi và gửi tiền vào đầu mỗi tháng. Xét tính đúng sai của các khẳng định sau:",
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
        "content_vi": "Số tiền của cô Lan có trong chương trình ở đầu tháng thứ 5 (làm tròn đến hàng nghìn) là 3. 030. 000 đồng.",
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
    "solution_vi": "a) Đúng: Gọi $u_n$ là số triệu đồng mà cô Lan có trong chương trình tích lũy ở lần gửi thứ n (vào\nđầu tháng thứ n ). Kí hiệu a = 0,6 triệu đồng, r = 0,5%.\nSố tiền của cô Lan có trong chương trình ở đầu tháng thứ nhất là: $u_{1}$ = a.\nb) Sai: Số tiền của cô Lan có trong chương trình ở đầu tháng thứ 2 là:\n$u_{2}$ = a (1 + r ) + a = 0,6 (1 + 0,5% ) + 0,6.\nSố tiền của cô Lan có trong chương trình ở đầu tháng thứ 3 là: $u_{3}$ = a (1 + r ) + a (1 + r ) + a.\n2\nTương tự cho các tháng tiếp theo, suy ra số tiền của cô Lan có trong chương trình ở đầu tháng\nthứ n là:\n(1 + r ) - 1 = a. (1 + r ) - 1.\nn n\n$u_n$ = a (1 + r ) + a (1 + r ) +... + a (1 + r ) + a = a.\nn -1 n-2\n(1 + r ) - 1 r\nc) Đúng: Số tiền của cô Lan có trong chương trình ở đầu tháng thứ 5 là:\n(1 + r ) - 1 = 0,6. (1 + 0,5% ) - 1\n5 5\nu = a.\n5 3,03 triệu đồng = 3.030.000 đồng.\nr 0,5%\nd) Sai: Vào thời điểm cậu con trai đầu lòng tròn 18 tuổi là thời điểm gửi khoản tiền thứ 180.\n(1 + r ) -1 (1 + 0,5% ) -1\n180 180\nLúc đó cô sẽ tích lũy được $u_{180}$ = a. = 0,6. 174,49 (triệu đồng).\nr 0,5%",
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
    "question_vi": "Vào năm con gái được 4 tuổi, một người chuẩn bị gửi tiết kiệm vào đầu mỗi năm một số tiền $x$ (triệu đồng) để đến năm 18 tuổi có 200 triệu đồng cho con đi học đại học. Lãi suất tiền gửi hằng năm là 4,8% và được giữ ổn định. Xét tính đúng sai của các khẳng định sau.",
    "question_en": "When his daughter is 4 years old, a parent plans to deposit x million VND at the beginning of each year so that she will have 200 million VND for university when she turns 18. The annual interest rate is 4.8% and is assumed constant. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tổng số tiền thu về sau 14 năm là một cấp số nhân có $q=1$+ 4, 8% ).",
        "content_en": "The accumulated amounts generated by the annual deposits form a geometric progression with common ratio q=1+4.8%.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Tổng số tiền thu về sau 14 năm là một cấp số nhân có u1 = x.",
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
        "content_vi": "Đến năm con gái được 10 tuổi, người này dự định khi con gái được 18 tuổi sẽ mua thêm cho con gái một chiếc xe máy trị giá 50 triệu đồng. Do đó, kể từ thời điểm đầu năm con gái được 10 tuổi người này cần gửi tiết kiệm y triệu đồng đến khi con gái 18 tuổi. Giá trị nhỏ nhất của y = 15.",
        "content_en": "When the daughter turns 10, the parent additionally plans to have 50 million VND available for a motorbike when she turns 18. From the beginning of the year in which she turns 10, suppose the required annual deposit is y million VND. The smallest possible value of y is 15.",
        "is_correct": true
      }
    ],
    "solution_vi": "Số tiền người đó nhận được sau năm thứ nhất là: A1 = x (1 + 4,8% ).\nSố tiền người đó nhận được sau năm thứ hai là: A2 = x (1 + 4,8% ) + x (1 + 4,8% ) 2.\nSố tiền người đó nhận được sau năm thứ 14 là:\nA14 = x (1 + 4,8% ) + x (1 + 4,8% ) 2 +... + x (1 + 4,8% ) 14.\n{$u_{1}$ = x (1 + 4,8% ) qn - 1 (1 + 4,8% ) - 1\n14\nKhi đó: A14 có nên A14 = $u_{1}$ = x (1 + 4,8% ).\nq = (1 + 4,8% ) q - 1 4,8%\n200.4,8%\nSuy ra: x = ≈ 9,873336 ≈ 10 (triệu đồng).\n(1 + 4,8% ) [(1 + 4,8% ) - 1]\n14\nKhi x = 10 (triệu đồng).\n18 \nGọi z = y - x là số tiền mà người đó phải gửi thêm mỗi năm kể từ năm con gái 10 tuổi (năm thứ\n6) và P8 = z (1 + 4,8% ) + z (1 + 4,8% ) 2 +... + z (1 + 4,8% ) 8 là số tiền nhận được sau 8 năm.\nKhi đó để nhận được số tiền 250 triệu đồng vào năm con gái 18 tuổi ( 8 năm kể từ con gái 10\ntuổi) thì:\n(1 + 4,8% ) - 1 ≈ 47,43 (triệu đồng).\n14\nP8 = 250 - 10 (1 + 4,8% )\n4,8%\n47, 43.4,8%\nSuy ra z = ≈ 4,77 ≈ 5 (triệu đồng).\n(1 + 4,8% ) [(1 + 4,8% ) - 1]\n8\nVậy y = 15 (triệu đồng).\na) Đúng: Tổng số tiền thu về sau 14 năm là một cấp số nhân có q = (1 + 4,8% ).\nb) Sai: Tổng số tiền thu về sau 14 năm là một cấp số nhân có $u_{1}$ = x (1 + 4,8% ).\nc) Đúng: x = 10 (triệu đồng)\nd) Đúng: Đến năm con gái được 10 tuổi, người này dự định khi con gái được 18 tuổi sẽ mua thêm\ncho con gái một chiếc xe máy trị giá 50 triệu đồng. Do đó, kể từ thời điểm đầ$u_n$ăm con gái được\n10 tuổi người này cần gửi tiết kiệm y triệu đồng đến khi con gái 18 tuổi ( y ∈ ). Giá trị nhỏ\nnhất của y = 15.",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ có $u_1=3$ và $q=-2$. Số 192 là số hạng thứ mấy của cấp số nhân đã cho?",
    "question_en": "Let (u_n) be a geometric progression with u_1=3 and q=-2. Which term of the progression is 192?",
    "options": [],
    "solution_vi": "192 = $u_n$ = $u_{1}$q n -1 = 3.( -2 ) ⇔ ( -1).2n -1 = 64 = ( -1).26 ⇔ n = 7.\nn -1 n -1 6\n1 1",
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
    "question_vi": "Một cấp số nhân có công bội bằng 3 và số hạng đầu bằng 5. Biết số hạng chính giữa là 32805.\nHỏi cấp số nhân đã cho có bao nhiêu số hạng?",
    "question_en": "A geometric progression has common ratio 3 and first term 5. Its middle term is 32,805. How many terms does the progression have?",
    "options": [],
    "solution_vi": "32805 = $u_n$ = $u_{1}$q n -1 = 5.3n -1 ⇔ 3n -1 = 6561 = 38 ⇔ n = 9. Vậy $u_{9}$ là số hạng chính giữa của cấp\nsố nhân, nên cấp số nhân đã cho có 17 số hạng.",
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
    "question_vi": "Một cấp số nhân có 6 số hạng với công bội bằng 2 và tổng số các số hạng bằng 189. Tìm số hạng\ncuối $u_{6}$ của cấp số nhân đã cho.",
    "question_en": "A geometric progression has 6 terms, common ratio 2, and sum 189. Find its last term u_6.",
    "options": [],
    "solution_vi": "{q = 2\n{q = 2\nTheo giả thiết: 1 - q6 1 - 26 ⇔ ⇒ $u_{6}$ = $u_{1}$q 5 = 3.25 = 96.\n$s_{6}$ = 189 = $u_{1}$ 1 - q = $u_{1}$. 1 - 2 $u_{1}$ = 3",
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
    "question_vi": "Các số x + 6 y, 5 x + 2 y, 8 x + y theo thứ tự đó lập thành một cấp số cộng; đồng thời các số\nx - 1, y + 2, x - 3 y theo thứ tự đó lập thành một cấp số nhân. Tính $x^2$ + $y^2$.",
    "question_en": "The numbers x+6y, 5x+2y, and 8x+y, in that order, form an arithmetic progression. At the same time, x-1, y+2, and x-3y, in that order, form a geometric progression. Find x^2+y^2.",
    "options": [],
    "solution_vi": "{( x + 6 y ) + ( 8 x + y ) = 2 ( 5 x + 2 y )\nTheo giả thiết ta có \n( x - 1)( x - 3 y ) = ( y + 2 )\n2\n{ x = 3 y { x = 3 y { x = -6\n⇔ ⇔ 2 ⇔.\n( 3 y - 1)( 3 y - 3 y ) = ( y + 2 ) 0 = ( y + 2 ) y = -2\n2\nSuy ra x^2 + y^2 = 40.",
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
    "question_vi": "Cho ba số tăng $a,b,c$ theo thứ tự lập thành một cấp số nhân; đồng thời $a,b+8,c$ theo thứ tự lập thành một cấp số cộng và $a,b+8,c+64$ theo thứ tự lập thành một cấp số nhân. Tính $P=a-b+2c$.",
    "question_en": "Let a, b, c be an increasing sequence that, in this order, forms a geometric progression. The numbers a, b+8, c form an arithmetic progression, and a, b+8, c+64 form a geometric progression. Find P=a-b+2c.",
    "options": [],
    "solution_vi": "{ac = b^2 {ac = b^2 (1)\n\nTa có a + c = 2 ( b + 8 ) ⇔ a - 2b = 16 - c ( 2).\n\na ( c + 64 ) = ( b + 8 ) ac + 64a = ( b + 8 ) ( 3)\n2 2\nThay (1) vào (3) ta được: b^2 + 64a = b^2 + 16b + 64 ⇔ 4a - b = 4 ( 4 ).\n{ c -8\na=\n{a - 2b = 16 - c \nKết hợp (2) với (4) ta được: ⇔\n7\n( 5)\n4a - b = 4 b = 4c - 60\n7\nThay (5) vào (1) ta được:\n[c = 36\n7 ( c - 8 ) c = ( 4c - 60 ) ⇔ 9c - 424c + 3600 = 0 ⇔ 100 ⇔ c = 36 ( c ∈ ).\n2 2\nc =\n9\nVới c = 36 ⇒ a = 4, b = 12 ⇒ P = 4 - 12 + 72 = 64.",
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
    "question_vi": "Số hạng thứ hai, số hạng đầu và số hạng thứ ba của một cấp số cộng với công sai khác 0 theo thứ\ntự đó lập thành một cấp số nhân với công bội q. Tìm q.",
    "question_en": "The second, first, and third terms of a nonconstant arithmetic progression, in that order, form a geometric progression with common ratio q. Find q.",
    "options": [],
    "solution_vi": "Giả sử ba số hạng a; b; c lập thành cấp số cộng thỏa yêu cầu, khi đó b; a; c theo thứ tự đó lập\nthành cấp số nhân công bội q. Ta có\n{a + c = 2b [b = 0\n⇒ bq + bq 2 = 2b ⇔ 2.\na = bq; c = bq 2\nq + q - 2 = 0\nNếu b = 0 ⇒ a = b = c = 0 nên a; b; c là cấp số cộng công sai d = 0 (vô lí).\nNếu q 2 + q - 2 = 0 ⇔ q = 1 hoặc q = -2. Nếu q = 1 ⇒ a = b = c (vô lí), do đó q = -2.",
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
    "question_vi": "Bốn góc của một tứ giác tạo thành cấp số nhân và góc lớn nhất gấp 27 lần góc nhỏ nhất. Tổng\ncủa góc lớn nhất và góc bé nhất bằng:",
    "question_en": "The four interior angles of a quadrilateral form a geometric progression, and the largest angle is 27 times the smallest angle. Find the sum of the largest and smallest angles.",
    "options": [],
    "solution_vi": "Giả sử 4 góc A, B, C, D (với A < B < C < D ) theo thứ tự đó lập thành cấp số nhân thỏa yêu cầu\nvới công bội q.\n{q = 3\n{ A + B + C + D = 360 { A (1 + q + q 2 + q 3 ) = 360 \nTa có: ⇔ ⇔ A = 9 ⇒ A + D = 252.\nD = 27 A Aq = 27 A\n3\nD = Aq 3 = 243",
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
    "question_vi": "Người ta thiết kế một cái tháp gồm 11 tầng. Diện tích bề mặt trên của mỗi tầng bằng nữa diện\ntích của mặt trên của tầng ngay bên dưới và diện tích mặt trên của tầng 1 bằng nửa diện tích của\nđế tháp (có diện tích là 12 288 $m^2$ ). Tính diện tích mặt trên cùng.",
    "question_en": "An 11-level tower is designed so that the top surface area of each level is half that of the level immediately below it. The top surface area of level 1 is half the area of the tower base, whose area is 12,288 m^2. Find the top surface area of level 11.",
    "options": [],
    "solution_vi": "1\nDiện tích bề mặt của mỗi tầng (kể từ 1) lập thành một cấp số nhân có công bội q = và\n2\n12288\n$u_{1}$ = = 6 144.\n2\n6144\nKhi đó diện tích mặt trên cùng là: $u_{11}$ = $u_{1}$q10 = =6\n210\n-----------------HẾT-----------------\n22",
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
        "content_vi": "$1,-1,1,-1$.",
        "content_en": "$1,-1,1,-1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$1,-3,9,10$.",
        "content_en": "$1,-3,9,10$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$1,0,0,0$.",
        "content_en": "$1,0,0,0$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$32,16,8,4$.",
        "content_en": "$32,16,8,4$.",
        "is_correct": false
      }
    ],
    "solution_vi": "$u_{n+1}$\nNếu ( $u_n$ ) là cấp số nhân với công bội q ta có: $u_{n+1}$ = $u_n$.q ⇒ q =.\n$u_n$\n1; -1;1; -1 là cấp số nhân với q = -1.\n-1;3;9;10 không là cấp số nhân.\n1;0;0;0 là cấp số nhân với q = 0.\n1\n32;16;8;4 là cấp số nhân với q =.\n2",
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
        "content_vi": "$2;4;8;16$.",
        "content_en": "$2;4;8;16$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$1;-1;1;-1$.",
        "content_en": "$1;-1;1;-1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$1^2;2^2;3^2;4^2$.",
        "content_en": "$1^2;2^2;3^2;4^2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$a; a^3; a^5; a^7$; ($a\\ne0$).",
        "content_en": "$a;a^3;a^5;a^7$, where $a\\ne0$.",
        "is_correct": false
      }
    ],
    "solution_vi": "$u_{9}$ u\nXét đáp án C: 12; 22; 32; 42; → 2 = 4 =/ = 3\n$u_{1}$ 4 $u_{2}$\nCác đáp án A, B, D đều là các cấp số nhân.\n.( a ).\n1 2 n\na; a^3; a 5; a 7; ( a ≠ 0 ) → là cấp số nhân và $u_n$ = a^2 n -1 =\na",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ với $u_1=-2$ và $q=-5$. Viết bốn số hạng đầu tiên của cấp số nhân.",
    "question_en": "Given a geometric progression $(u_n)$ with $u_1=-2$ and $q=-5$, write its first four terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$-2,10,50,-250$.",
        "content_en": "$-2,10,50,-250$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$-2,10,-50,250$.",
        "content_en": "$-2,10,-50,250$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$-2,-10,-50,-250$.",
        "content_en": "$-2,-10,-50,-250$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$-2,10,50,250$.",
        "content_en": "$-2,10,50,250$.",
        "is_correct": false
      }
    ],
    "solution_vi": ".\n{$u_{1}$ = -2\nu = u q = 10\n{$u_{1}$ = -2 2\n→\n1\n\nq = -5 $u_{3}$ = $u_{2}$ q = -50\n$u_{4}$ = $u_{3}$q = 250",
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
        "content_vi": "$1,2,3,4,5$.",
        "content_en": "$1,2,3,4,5$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$1,3,6,9,12$.",
        "content_en": "$1,3,6,9,12$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$2,4,6,8,10$.",
        "content_en": "$2,4,6,8,10$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$2,2,2,2,2$.",
        "content_en": "$2,2,2,2,2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta thấy ở đáp án D có $u_{1}$ = $u_{2}$ = $u_{3}$ = $u_{4}$ = $u_{5}$ = 2 nên đây là cấp số nhân với công bội q = 1.",
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
        "content_vi": "$1,2,3,4,5,6,\\ldots$",
        "content_en": "$1,2,3,4,5,6,\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$2,4,6,8,16,32,\\ldots$",
        "content_en": "$2,4,6,8,16,32,\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$-2,-3,-4,-5,-6,-7,\\ldots$",
        "content_en": "$-2,-3,-4,-5,-6,-7,\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$1,2,4,8,16,32,\\ldots$",
        "content_en": "$1,2,4,8,16,32,\\ldots$",
        "is_correct": true
      }
    ],
    "solution_vi": "$u_{2}$ $u_{3}$\nNhận thấy ≠ nên các dãy số ở đáp án A, B và C không phải là cấp số nhân.\n$u_{1}$ $u_{2}$\nRiêng đối với dãy 1, 2, 4,8,16,32,... ở đáp án D thỏa mãn: $u_{n+1}$ = 2.$u_n$ ∀n ∈ ℕ*\n.\nVậy dãy số 1, 2, 4,8,16,32,... là cấp số nhân với $u_{1}$ = 1 và công bội q = 2.",
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
        "content_vi": "$1;\\ 0.2;\\ 0.04;\\ 0.0008;\\ldots$",
        "content_en": "$1;\\ 0.2;\\ 0.04;\\ 0.0008;\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$2;\\ 22;\\ 222;\\ 2222;\\ldots$",
        "content_en": "$2;\\ 22;\\ 222;\\ 2222;\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$x;\\ 2x;\\ 3x;\\ 4x;\\ldots$",
        "content_en": "$x;\\ 2x;\\ 3x;\\ 4x;\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$1;\\ -x^2;\\ x^4;\\ -x^6;\\ldots$",
        "content_en": "$1;\\ -x^2;\\ x^4;\\ -x^6;\\ldots$",
        "is_correct": true
      }
    ],
    "solution_vi": "Dãy số: 1; - x^2; x^4; - x 6;... là cấp số nhân có số hạng đầu $u_{1}$ = 1; công bội q = - x^2.",
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
    "question_vi": "Xác định x để 3 số $x-2$; $x+1$; $3-x$ theo thứ tự lập thành một cấp số nhân:",
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
        "content_vi": "$x=\\pm1$.",
        "content_en": "$x=\\pm1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$x=2$.",
        "content_en": "$x=2$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$x=-3$.",
        "content_en": "$x=-3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ba số x - 2; x + 1; 3 - x theo thứ tự lập thành một cấp số nhân ⇔ ( x - 2 )( 3 - x ) = ( x + 1)\n2\n⇔ 2 x^2 - 3x + 7 = 0",
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
        "content_vi": "$1,2,3,4,\\ldots$",
        "content_en": "$1,2,3,4,\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$1,3,5,7,\\ldots$",
        "content_en": "$1,3,5,7,\\ldots$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$2,4,8,16,\\ldots$",
        "content_en": "$2,4,8,16,\\ldots$",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$2,4,6,8,\\ldots$",
        "content_en": "$2,4,6,8,\\ldots$",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: 2, 4,8,16,... là cấp số nhân có số hạng đầu $u_{1}$ = 2 và công bội q = 2.\n1 1 1 1",
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
    "question_vi": "Có bao nhiêu giá trị nguyên dương của x để ba số $1, x, x+2$ theo thứ tự đó lập thành một cấp số nhân?",
    "question_en": "How many positive integer values of $x$ make the three numbers $1,x,x+2$, in that order, a geometric progression?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2.",
        "content_en": "2.",
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
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "0.",
        "content_en": "0.",
        "is_correct": false
      }
    ],
    "solution_vi": "[ x = -1\nĐể 1; x; x + 2 theo thứ tự đó lập thành một cấp số nhân thì: x^2 = x + 2 ⇔.\nx = 2\nVậy có đúng 1 số nguyên dương x = 2.",
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
    "question_vi": "Cho cấp số nhân $(u_n)$ với $u_1=3$ và công bội $q=2$. Số hạng tổng quát $u_n$ ( $n\\ge 2$ ) bằng",
    "question_en": "Let (u_n) be a geometric progression with u_1=3 and common ratio q=2. Which formula gives the general term u_n for n\\ge 2?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3. 2n.",
        "content_en": "$u_n=3\\cdot 2^n$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "3. 2 n + 2.",
        "content_en": "$u_n=3\\cdot 2^{n+2}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "3. 2 n +1.",
        "content_en": "$u_n=3\\cdot 2^{n+1}$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "3. 2 n -1.",
        "content_en": "$u_n=3\\cdot 2^{n-1}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_n$ = $u_{1}$.q n -1 = 3.2n -1.\n{u = 3",
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
    "solution_vi": "a) Đúng: Ngày thứ nhất Aladin ước 3 điều.\nNgày thứ hai Aladin ước 2.3 điều.\nb) Đúng: Ngày thứ ba Aladin ước 2.2.3 = 22.3 điều.\nc) Sai: Ngày thứ tư Aladin ước 2 22 3 = 23 3 điều.\nNgày thứ 10 Aladin ước 29.3 điều.\n( 1 - 210 )\nd) Sai: Vậy sau 10 ngày Aladin đã ước: 3 (1 + 2 + 2 + 2 + …+ 2 ) = 3 \n2 3 9\n= 3069 điều.\n1- 2",
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
    "solution_vi": "Ta có cấp số nhân ( $u_n$ ) có:\n{uk = 16 $u_{9}$\n⇒ q = k +1 = → uk + 2 = uk +1q = 81\nuk +1 = 36 uk 4",
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
    "solution_vi": "Cấp số nhân 2; 8; x; 128 theo thứ tự đó sẽ là $u_{1}$; $u_{2}$; $u_{3}$; $u_{4}$, ta có\n{ $u_{2}$ $u_{3}$ {8 x\nu = u = { x = 32\n1 2 8 { x = 32 \n⇔ ⇔ 2 ⇔ [ x = 32 ⇔ x = 32\n2\n\n=u $u_{128}$ x x = 1024 x = -32\n3 4\n= \n$u_{2}$ $u_{3}$ x 8",
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
    "solution_vi": "→ (1 + x )( 33 + x ) = ( 9 + x ) ⇔ x = 3.\nCấp số nhân 1 + x; 9 + x; 33 + x ⎯⎯\n2",
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
    "question_vi": "Ba số hạng đầu của một cấp số nhân là x - 6; x và y. Tìm y, biết rằng công bội của cấp số nhân\nlà 6.",
    "question_en": "The first three terms of a geometric progression are x-6, x, and y. Find y, given that the common ratio is 6.",
    "options": [],
    "solution_vi": "Cấp số nhân x - 6; x và y có công bội q = 6 nên ta có\n{$u_{1}$ = x - 6, q = 6 { 36\nx = 5\nx = $u_{2}$ = $u_{1}$q = 6 ( x - 6 ) ⇒ \ny = 36. 36 = 1296 ≈ 259\ny = $u_{3}$ = $u_{2}$ q = 36 x^2\n5 5",
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
    "question_vi": "Một công ty xây dựng mua một chiếc máy ủi với giá 3 tỉ đồng. Cứ sau mỗi năm sử dụng, giá trị\ncủa chiếc máy ủi này lại giảm 20% so với giá trị của nó trong năm liền trước đó. Tìm giá trị còn\nlại của chiếc máy ủi đó sau 5 năm sử dụng.",
    "question_en": "A construction company buys a bulldozer for 3 billion VND. After each year of use, its value decreases by 20% from the value in the preceding year. Find the remaining value of the bulldozer after 5 years of use.",
    "options": [],
    "solution_vi": "Giá trị của chiếc máy ủi mỗi năm lập thành một cấp số nhân với số hạng đầu bằng 3 và công\nbội q = 0,8\nGiá trị của chiếc máy ủi sau 5 năm sử dụng là: $u_{5}$ = 3 × 0,85 -1 = 0,1875 (tỷ đồng)",
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
    "question_vi": "Tỷ lệ tăng dân số của tỉnh X là 1, 4 0 0. Biết rằng dân số tỉnh X hiện nay là 1, 8 triệu người. Hỏi\nvới mức tăng như vậy thì sau 10 năm nữa dân số tỉnh X là bao nhiêu?",
    "question_en": "The annual population growth rate of province X is 1.4%. Its current population is 1.8 million. If this rate remains unchanged, what will the population be after 10 years?",
    "options": [],
    "solution_vi": "Theo giải thiết, ta thấy tỷ lệ tăng dân số hàng năm của tỉnh X là một cấp số nhân ( $u_n$ ) với số\n1, 4\nhạng đầu $u_{1}$ = 1,8.106 và công bội q = 1 + = 1,014.\n100\nDo đó, dân số của tỉnh X sau 10 năm là: $u_{11}$ = $u_{1}$.q10 = 1,8.106 (1,014 ) ≈ 2068483 người.\n10\n-----------------HẾT-----------------",
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
    "question_vi": "Cho $(u_n)$ là cấp số cộng biết $u_3+u_{13}=80$. Tổng 15 số hạng đầu của cấp số cộng đó bằng",
    "question_en": "Let $(u_n)$ be an arithmetic progression satisfying $u_3+u_{13}=80$. Find the sum of its first 15 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "800.",
        "content_en": "800.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "600.",
        "content_en": "600.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "570.",
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
    "solution_vi": "$s_{15}$ = $u_{1}$ + $u_{2}$ + $u_{3}$ +... + $u_{15}$ = ( $u_{1}$ + $u_{15}$ ) + ( $u_{2}$ + $u_{14}$ ) + ( $u_{3}$ + $u_{13}$ ) +... + ( $u_{7}$ + $u_{9}$ ) + $u_{8}$\nVì $u_{1}$ + $u_{15}$ = $u_{2}$ + $u_{14}$ = $u_{3}$ + $u_{13}$ =... = $u_{7}$ + $u_{9}$ = 2u8 và $u_{3}$ + $u_{13}$ = 80 ⇒ S = 7.80 + 40 = 600.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ với số hạng đầu $u_1=-6$ và công sai $d=4$. Tính tổng S của 14 số hạng đầu tiên của cấp số cộng đó.",
    "question_en": "Given an arithmetic progression $(u_n)$ with first term $u_1=-6$ and common difference $d=4$, find the sum $S$ of its first 14 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$S=46$.",
        "content_en": "$S=46$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$S=308$.",
        "content_en": "$S=308$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$S=644$.",
        "content_en": "$S=644$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$S=280$.",
        "content_en": "$S=280$.",
        "is_correct": true
      }
    ],
    "solution_vi": "[ 2u1 + ( n - 1) d ] n\nTổng n số hạng đầu tiên của một cấp số cộng là $s_n$ =.\n2\n[ 2 ( -6 ) + (14 - 1) 4 ]14\nVậy S = = 280.\n2",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_2=8$, $u_5=17$. Công sai d bằng:",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_2=8$ and $u_5=17$, find the common difference $d$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$d=-3$.",
        "content_en": "$d=-3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$d=-5$.",
        "content_en": "$d=-5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$d=3$.",
        "content_en": "$d=3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$d=5$.",
        "content_en": "$d=5$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{$u_{1}$ + d = 8 {d = 3\nTheo giả thiết ta có: $u_{2}$ = 8, $u_{5}$ = 17 ⇒ ⇔.\n1\nu + 4 d = 17 1\nu = 5",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ và gọi $S_n$ là tổng n số hạng đầu tiên của nó. Biết $u_{21}=-19$ và $S_{22}=0$. Tìm số hạng tổng quát $u_n$ của cấp số cộng đó.",
    "question_en": "Let $(u_n)$ be an arithmetic progression and let $S_n$ denote the sum of its first $n$ terms. Given $u_{21}=-19$ and $S_{22}=0$, find the general term $u_n$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_n=21+2n$.",
        "content_en": "$u_n=21+2n$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_n=21-2n$.",
        "content_en": "$u_n=21-2n$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_n=23-2n$.",
        "content_en": "$u_n=23-2n$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_n=23+2n$.",
        "content_en": "$u_n=23+2n$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử cấp số cộng có số hạng đầu là $u_{1}$ và công sai d.\n{$u_{21}$ = $u_{1}$ + 20d\n{$u_{21}$ = -19 {$u_{1}$ + 20d = -19 {u = 21\nTa có: ⇔ 22.21d ⇔ ⇔ 1.\n22\nS = 0 22\nS = 22u1 + 1\n2u + 21d = 0 d = -2\n2\nKhi đó: $u_n$ = $u_{1}$ + ( n - 1) d = 21 - 2 ( n - 1) = 23 - 2n.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ với $u_1=10$, $u_2=13$. Giá trị của $u_{4}$ là",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=10$ and $u_2=13$, find $u_4$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_4=20$.",
        "content_en": "$u_4=20$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_4=19$.",
        "content_en": "$u_4=19$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_4=16$.",
        "content_en": "$u_4=16$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_4=18$.",
        "content_en": "$u_4=18$.",
        "is_correct": false
      }
    ],
    "solution_vi": "$u_{1}$ = 10, $u_{2}$ = 13 ⇒ d = 3 ⇒ $u_{4}$ = $u_{1}$ + 3d = 10 + 3.3 = 19.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ biết $u_2=-1$, $u_4=7$. Tìm $u_{3}$.",
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
        "content_vi": "10.",
        "content_en": "10.",
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
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      }
    ],
    "solution_vi": "$u_{2}$ + $u_{4}$ -1 + 7\nÁp dụng tính chất của các số hạng trong dãy cấp số cộng, ta có: $u_{3}$ = = = 3.\n2 2",
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
    "question_vi": "Cho cấp số cộng $(u_n)$, biết $u_1=2$ và $u_4=8$. Giá trị của $u_{5}$ bằng",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=2$ and $u_4=8$, find $u_5$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "12.",
        "content_en": "12.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "10.",
        "content_en": "10.",
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
        "content_vi": "11.",
        "content_en": "11.",
        "is_correct": false
      }
    ],
    "solution_vi": "Từ giả thiết $u_{1}$ = 2 và $u_{4}$ = $u_{1}$ + 3d = 8 ⇒ d = 2\nVậy $u_{5}$ = $u_{1}$ + 4d = 2 + 4.2 = 10.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_5=-15$; $u_{20}=60$. Tổng 20 số hạng đầu tiên của cấp số cộng là",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_5=-15$ and $u_{20}=60$, find the sum of its first 20 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$S_{20}=250$.",
        "content_en": "$S_{20}=250$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$S_{20}=200$.",
        "content_en": "$S_{20}=200$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$S_{20}=-200$.",
        "content_en": "$S_{20}=-200$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$S_{20}=-25$.",
        "content_en": "$S_{20}=-25$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{$u_{5}$ = -15\nTa có \n{$u_{1}$ + 4d = -15\n⇔\n{u = -35\n⇔ 1\n( u + u ) 20 = 250.\n⇒ $s_{20}$ = 1 20\n$u_{20}$ = 60 $u_{1}$ + 19d = 60 d = 5 2",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ biết $u_3=6$, $u_8=16$. Tính công sai d và tổng của 10 số hạng đầu tiên.",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_3=6$ and $u_8=16$, find its common difference $d$ and the sum $S_{10}$ of its first 10 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$d=2;\\ S_{10}=100$.",
        "content_en": "$d=2;\\ S_{10}=100$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$d=1;\\ S_{10}=80$.",
        "content_en": "$d=1;\\ S_{10}=80$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$d=2;\\ S_{10}=120$.",
        "content_en": "$d=2;\\ S_{10}=120$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$d=2;\\ S_{10}=110$.",
        "content_en": "$d=2;\\ S_{10}=110$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{$u_{3}$ = 6 {$u_{1}$ + 2d = 6 {u = 2\nTa có: ⇔ ⇔ 1.\n$u_{8}$ = 16 $u_{1}$ + 7d = 16 d = 2\n10 (10 - 1) 10 (10 - 1)\n$s_{10}$ = 10.$u_{1}$ +.d = 10.2 +.2 = 110.\n2 2",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ với $u_n=3-2n$ thì $S_{60}$ bằng",
    "question_en": "Given the arithmetic progression $(u_n)$ with $u_n=3-2n$, find $S_{60}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$-6960$.",
        "content_en": "$-6960$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$-117$.",
        "content_en": "$-117$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$-3840$.",
        "content_en": "$-3840$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$-116$.",
        "content_en": "$-116$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_{n+1}$ = 1 - 2n, Ta có $u_{n+1}$ - $u_n$ = -2, ∀n ∈ ℕ*\n, suy ra ( $u_n$ ) là cấp số cộng có $u_{1}$ = 1 và công\n60\nsai d = -2. Vậy $s_{60}$ = ( 2u1 + 59d ) = -3840.\n2",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_{2013}+u_6=1000$. Tổng 2018 số hạng đầu tiên của cấp số cộng đó là:",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_{2013}+u_6=1000$, find the sum of its first 2018 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1009000.",
        "content_en": "1009000.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "100800.",
        "content_en": "100800.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1008000.",
        "content_en": "1008000.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "100900.",
        "content_en": "100900.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi d là công sai của cấp số cộng. Khi đó:\n$u_{2013}$ + $u_{6}$ = 1000 ⇔ $u_{1}$ + 2012d + $u_{1}$ + 5d = 1000 ⇔ 2u1 + 2017d = 1000.\n2017.2018\nTa có: $s_{2018}$ = 2018u1 + d = 1009.( 2u1 + 2017 d ) = 1009000.\n2\n{u + u = 8",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_4=-12$; $u_{14}=18$. Tổng của 16 số hạng đầu tiên của cấp số cộng là:",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_4=-12$ and $u_{14}=18$, find the sum of its first 16 terms.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$S=24$.",
        "content_en": "$S=24$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$S=-25$.",
        "content_en": "$S=-25$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$S=-24$.",
        "content_en": "$S=-24$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$S=26$.",
        "content_en": "$S=26$.",
        "is_correct": false
      }
    ],
    "solution_vi": "6 \n{u = -12 {$u_{1}$ + 3d = -12 {u = -21\nTa có: 4 ⇔ ⇔ 1.\n$u_{14}$ = 18 $u_{1}$ + 13d = 18 d = 3\n16.15\nTổng của 16 số hạng đầu tiên của cấp số cộng là: $s_{16}$ = 16.( -21) +.3 = 24.\n2\n{$u_{2}$ - $u_{3}$ + $u_{5}$ = 10",
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
    "question_vi": "Cho một cấp số cộng $(u_n)$ có $u_1=5$ và tổng của 50 số hạng đầu bằng 5150. Tìm công thức của số hạng tổng quát $u_n$.",
    "question_en": "An arithmetic progression $(u_n)$ has $u_1=5$ and the sum of its first 50 terms is 5150. Find the formula for the general term $u_n$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_n=1+4n$.",
        "content_en": "$u_n=1+4n$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_n=5n$.",
        "content_en": "$u_n=5n$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_n=3+2n$.",
        "content_en": "$u_n=3+2n$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_n=2+3n$.",
        "content_en": "$u_n=2+3n$.",
        "is_correct": false
      }
    ],
    "solution_vi": "50\nTa có: $s_{50}$ = ( 2u1 + 49d ) = 5150 ⇒ d = 4.\n2\nSố hạng tổng quát của cấp số cộng bằng $u_n$ = $u_{1}$ + ( n - 1) d = 1 + 4n.",
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
    "question_vi": "Một cấp số cộng có tổng của n số hạng đầu $S_n$ tính theo công thức $S_n=5n^2+3n$, ( $n\\in\\mathbb N^*$ ). Tìm số hạng đầu $u_{1}$ và công sai d của cấp số cộng đó.",
    "question_en": "For an arithmetic progression, the sum of the first $n$ terms is $S_n=5n^2+3n$, $n\\in\\mathbb N^*$. Find the first term $u_1$ and common difference $d$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_1=-8;\\ d=10$.",
        "content_en": "$u_1=-8;\\ d=10$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_1=-8;\\ d=-10$.",
        "content_en": "$u_1=-8;\\ d=-10$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_1=8;\\ d=10$.",
        "content_en": "$u_1=8;\\ d=10$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_1=8;\\ d=-10$.",
        "content_en": "$u_1=8;\\ d=-10$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: $u_{1}$ = $s_{1}$ = 8; $u_{2}$ = $s_{2}$ - $s_{1}$ = 18 ⇒ d = $u_{2}$ - $u_{1}$ = 18 - 8 = 10.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ biết $u_5=18$ và $4S_n=S_{2n}$. Giá trị $u_{1}$ và d là",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_5=18$ and $4S_n=S_{2n}$, find $u_1$ and the common difference $d$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_1=2,\\ d=3$.",
        "content_en": "$u_1=2,\\ d=3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_1=3,\\ d=2$.",
        "content_en": "$u_1=3,\\ d=2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_1=2,\\ d=2$.",
        "content_en": "$u_1=2,\\ d=2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_1=2,\\ d=4$.",
        "content_en": "$u_1=2,\\ d=4$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_{5}$ = 18 ⇔ $u_{1}$ + 4d = 18.\n( 5.4 ) 10.9\nLại có 4S5 = $s_{10}$ ⇔ 4 5u1 + d = 10u1 + d ⇔ 2u1 - d = 0.\n2 2\n{u + 4d = 18 {u = 2\nKhi đó ta có hệ phương trình 1 ⇔ 1.\n2u1 - d = 0 d = 4\na3",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ và gọi $S_n$ là tổng n số hạng đầu tiên của nó. Biết $S_7=77$ và $S_{12}=192$. Tìm số hạng tổng quát $u_n$ của cấp số cộng đó",
    "question_en": "Let $(u_n)$ be an arithmetic progression and let $S_n$ be the sum of its first $n$ terms. Given $S_7=77$ and $S_{12}=192$, find the general term $u_n$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_n=5+4n$.",
        "content_en": "$u_n=5+4n$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_n=3+2n$.",
        "content_en": "$u_n=3+2n$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_n=2+3n$.",
        "content_en": "$u_n=2+3n$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_n=4+5n$.",
        "content_en": "$u_n=4+5n$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử cấp số cộng có số hạng đầu là $u_{1}$ và công sai d.\n{ 7.6.d\n7u1 + = 77\n{ 7\nS = 77 2 {7u1 + 21d = 77 {u = 5\nTa có: ⇔ ⇔ ⇔ 1.\n$s_{12}$ = 192 12u + 12.11.d = 192 12u1 + 66d = 192 d = 2\n1 2\nKhi đó: $u_n$ = $u_{1}$ + ( n - 1) d = 5 + 2 ( n - 1) = 3 + 2n.",
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
    "question_vi": "Cho tam giác đều $A_1B_1C_1$ có độ dài cạnh bằng 4. Trung điểm của các cạnh tam giác $A_{1}$ B1C1 tạo thành tam giác $A_2B_2C_2$, trung điểm của các cạnh tam giác $A_{2}$ B2C2 tạo thành tam giác $A_3B_3C_3$… Gọi $P_1, P_2, P_3,\\ldots$,... lần lượt là chu vi của tam giác $A_{1}$ B1C1, $A_{2}$ B2C2, $A_{3}$ B3C3,…Tính tổng chu vi $P=P_1+P_2+P_3+\\cdots$",
    "question_en": "An equilateral triangle $A_1B_1C_1$ has side length 4. The midpoints of its sides form triangle $A_2B_2C_2$; the midpoints of the sides of $A_2B_2C_2$ form triangle $A_3B_3C_3$; and so on. Let $P_1,P_2,P_3,\\ldots$ be the corresponding perimeters. Find $P=P_1+P_2+P_3+\\cdots$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$P=8$.",
        "content_en": "$P=8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$P=24$.",
        "content_en": "$P=24$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$P=6$.",
        "content_en": "$P=6$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$P=18$.",
        "content_en": "$P=18$.",
        "is_correct": false
      }
    ],
    "solution_vi": "1 1 1 1 1 1\nTa có: P2 = P1; P3 = P2 = P1; P4 = P3 = P1 …; Pn = n -1 P1\n2 2 4 2 8 2\n1 1 1 P\nVậy P = P1 + P2 + P3 +... = P1 + P1 + P1 + P1 +... = 1 = 2 P1 = 24.\n2 4 8 1\n1-\n2",
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
        "content_vi": "Dãy cấp số cộng có số hạng đầu $u_1=11$.",
        "content_en": "The first term is $u_1=11$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "$u_1+u_5=40$.",
        "content_en": "$u_1+u_5=40$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "$u_2=16$.",
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
    "solution_vi": "{$u_{1}$ + $u_{4}$ = 36 {$u_{1}$ + ( $u_{1}$ + 3d ) = 36 {2u1 + 3d = 36 {u = 12\nTa có ⇔ ⇔ ⇔ 1.\n$u_{2}$ + $u_{5}$ = 44 ( $u_{1}$ + d ) + ( $u_{1}$ + 4d ) = 44 2u1 + 5d = 44 d = 4\n{\nu = u + d = 16\n2 1\nSuy ra $u_{1}$ + $u_{5}$ = $u_{1}$ + $u_{1}$ + 4d = 40.\n\n$s_{3}$ = 3 ( $u_{1}$ + $u_{3}$ ) = 48\n2\na) Sai: Dãy cấp số cộng có số hạng đầu $u_{1}$ = 12\nb) Đúng: Dãy cấp số cộng có tổng $u_{1}$ + $u_{5}$ = 40.\nc) Đúng: Dãy cấp số cộng có $u_{2}$ = 16.\nd) Sai: Tổng của 3 số hạng đầu tiên trong dãy cấp số cộng bằng 48\nVậy mệnh đề 2,3 là mệnh đề đúng và mệnh đề 1, 4 là mệnh đề sai.",
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
    "question_vi": "Cho dãy cấp số cộng $(u_n)$ có $u_1=4$. Biết tổng 20 số hạng đầu tiên bằng $460$. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "An arithmetic progression $(u_n)$ has $u_1=4$ and the sum of its first 20 terms is $460$. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Dãy số ( un ) có $d=2$.",
        "content_en": "The common difference is $d=2$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "$u_4=8$.",
        "content_en": "$u_4=8$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "$S_{10}=120$.",
        "content_en": "$S_{10}=120$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "$S_8-S_4=60$.",
        "content_en": "$S_8-S_4=60$.",
        "is_correct": true
      }
    ],
    "solution_vi": "20 ( $u_{1}$ + $u_{20}$ )\nTa có: $s_{20}$ = = 10 ( 4 + 4 + 19d ) = 460 ⇔ d = 2.\n2\n{\n$u_{4}$ = $u_{1}$ + 3d = 4 + 3.2 = 10\n\n10 ( $u_{1}$ + $u_{9}$ )\nSuy ra $s_{10}$ = = 5 ( 4 + 4 + 8.2 ) = 120.\n2\n8 ( $u_{1}$ + $u_{8}$ ) 4 ( $u_{1}$ + $u_{4}$ )\n$s_{8}$ - $s_{4}$ = - = 4 ( 2u1 + 7 d ) - 2 ( 2u1 + 3d ) = 4u1 + 22d = 60\n2 2\n10 \na) Đúng: Dãy số ( $u_n$ ) có d = 2.\nb) Sai: Dãy số ( $u_n$ ) có $u_{4}$ = 8.\nc) Đúng: Dãy số ( $u_n$ ) có $s_{10}$ = 120.\nd) Đúng: Dãy số ( $u_n$ ) có hiệu $s_{8}$ - $s_{4}$ = 60.\nVậy mệnh đề 1,3, 4 là mệnh đề đúng và mệnh đề 2 là mệnh đề sai.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_1=123$, $u_3-u_{15}=84$. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=123$ and $u_3-u_{15}=84$, determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Số hạng thứ 17 của cấp số cộng là $u_{17}=11$.",
        "content_en": "The 17th term is $u_{17}=11$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Công sai của cấp số cộng là $d=-7$.",
        "content_en": "The common difference is $d=-7$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số hạng thứ 2 của cấp số cộng là $u_2=130$",
        "content_en": "The second term is $u_2=130$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng 17 số hạng đầu tiên của cấp số cộng là $S_{17}=1130$",
        "content_en": "The sum of the first 17 terms is $S_{17}=1130$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử cấp số cộng ( $u_n$ ) có công sai d.\nTheo giả thiết ta có: $u_{3}$ - $u_{15}$ = 84 ⇔ $u_{1}$ + 2d - $u_{1}$ - 14d = 84 ⇔ -12d = 84 ⇔ d = -7.\nVậy $u_{17}$ = $u_{1}$ + 16d = 123 + 16 ( -7 ) = 11; $u_{2}$ = $u_{1}$ + d = 123 + ( -7 ) = 116.\n$s_{17}$ =\n( $u_{1}$ + $u_{17}$ )17 = (123 + 11)17 = 1139.\n2 2\na) Đúng: Số hạng thứ 17 của cấp số cộng là $u_{17}$ = 11.\nb) Đúng: Công sai của cấp số cộng là d = -7.\nc) Sai: Số hạng thứ 2 của cấp số cộng là $u_{2}$ = 116\nd) Sai: Tổng 17 số hạng đầu tiên của cấp số cộng là $s_{17}$ = 1139",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_1=-5$, công sai $d=3$. Xét tính đúng sai của các khẳng định sau:",
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
        "content_vi": "Số hạng thứ 3 của cấp số cộng bằng 5.",
        "content_en": "The third term is 5.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Tổng 10 số hạng đầu tiên của cấp số cộng bằng 250.",
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
    "solution_vi": "Ta có: 100 = $u_{1}$ + ( n - 1) d = -5 + ( n - 1).3 ⇔ n = 36.\n$u_{3}$ = $u_{1}$ + 2d = -5 + 2.3 = 1.\n$s_{10}$ =\n( $u_{1}$ + $u_{10}$ )10 = ( $u_{1}$ + $u_{1}$ + 9d ).10 = 5(-10 + 9.3) = 85.\n2 2\n8\n$u_n$ = $u_{1}$ + ( n - 1) d = -5 + ( n - 1).3 = 3n - 8 > 0 ⇔ n >.\n3\na) Đúng: Số 100 là số hạng thứ 36 của cấp số cộng.\nb) Sai: Số hạng thứ 3 của cấp số cộng bằng 1.\nc) Sai: Tổng 10 số hạng đầu tiên của cấp số cộng bằng 85.\nd) Đúng: Kể từ số hạng thứ 3 thì các số hạng của cấp số cộng đều nhận giá trị dương.\nVậy mệnh đề 1 và 4 đúng, mệnh đề 2 và 3 sai.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_4=-12$, $u_{14}=18$. Xét tính đúng sai của các khẳng đính sau:",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_4=-12$ and $u_{14}=18$, determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Công sai của cấp số cộng là $d=3$",
        "content_en": "The common difference is $d=3$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số hạng đầu của cấp số cộng là $u_1=21$",
        "content_en": "The first term is $u_1=21$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số hạng thứ 9 của cấp số cộng là $u_9=3$",
        "content_en": "The ninth term is $u_9=3$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Tổng 5 số hạng đầu của cấp số cộng là $S_5=-60$",
        "content_en": "The sum of the first five terms is $S_5=-60$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi $u_{1}$ là số hạng đầu, d là công sai của cấp số cộng ( $u_n$ ).\n{u = $u_{1}$ + 3d {$u_{1}$ + 3d = -12 {d = 3\nTa có: 4 ⇔ ⇔.\n$u_{14}$ = $u_{1}$ + 13d $u_{1}$ + 13d = 18 $u_{1}$ = -21\nSố hạng thứ 9 là $u_{9}$ = $u_{1}$ + 8d = -21 + 8.3 = 3.\n5 ( 5 - 1)\nTổng 5 số hạng đầu là $s_{5}$ = 5u1 + d = -75.\n2\na) Đúng: Công sai của cấp số cộng là d = 3\nb) Sai: Số hạng đầu của cấp số cộng là $u_{1}$ = 21\nc) Đúng: Số hạng thứ 9 của cấp số cộng là $u_{9}$ = 3\nd) Sai: Tổng 5 số hạng đầu của cấp số cộng là $s_{5}$ = -60",
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
    "question_vi": "Một nhà hát có 25 hàng ghế với 16 ghế ở hàng thứ nhất, 18 ghế ở hàng thứ hai, 20 ghế ở hàng thứ ba và cứ tiếp tục theo quy luật đó, tức là hàng sau nhiều hơn hàng liền trước nó 2 ghế. Gọi $u_n$ (ghế) là tổng số ghế ở hàng thứ n. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "A theater has 25 rows of seats. The first row has 16 seats, the second 18, the third 20, and each subsequent row has 2 more seats than the preceding row. Let $u_n$ be the number of seats in the $n$th row. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$u_2=18$.",
        "content_en": "$u_2=18$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Dãy số $(u_n)$ là cấp số cộng có công sai $d=2$.",
        "content_en": "The sequence $(u_n)$ is an arithmetic progression with common difference $d=2$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Số ghế ở hàng thứ 20 nhỏ hơn 54.",
        "content_en": "The 20th row has fewer than 54 seats.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Tổng số ghế trong nhà hát nhiều hơn 1000.",
        "content_en": "The theater has more than 1000 seats in total.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Số ghế trong các dãy ghế liên tiếp lập thành một cấp số cộng với số hạng đầu $u_{1}$ = 16\nvà công sai d = 2.\nb) Đúng: $u_{2}$ = $u_{1}$ + d = 16 + 2 = 18.\nc) Ta có $u_{20}$ = $u_{1}$ + 19d = 16 + 19.2 = 54.\nSố ghế ở mỗi hàng của nhà hát lập thành một cấp số cộng, gồm 25 số hạng, với số hạng đầu\n$u_{1}$ = 16 và công sai d = 2. Tổng các số hạng này là\n25 25\nd) Sai: $s_{25}$ = $u_{1}$ + $u_{2}$ + …+ $u_{25}$ = [ 2u1 + ( 25 - 1) d ] = ( 2.16 + 24.2 ) = 1000.\n2 2",
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
    "question_vi": "Khi kí kết hợp đồng lao động với người lao động, một doanh nghiệp đề xuất hai phương án trả lương như sau: 12, tiền lương là 120 triệu. Kể từ năm thứ hai trở đi, mỗi năm tiền lương được tăng 18 triệu. Phương án 2: Quý thứ nhất, tiền lương là 24 triệu. Kể từ quý thứ hai trở đi, mỗi quý tiền lương được tăng 1, 8 triệu. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "When signing an employment contract, a company offers two salary plans. Plan 1: the salary in the first year is 120 million VND; from the second year onward, the annual salary increases by 18 million VND each year. Plan 2: the salary in the first quarter is 24 million VND; from the second quarter onward, the quarterly salary increases by 1.8 million VND each quarter. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Trong phương án 1: dãy số tiền lương là cấp số cộng có số hạng đầu tiên là $u_1=120$, công sai $d_1=18$.",
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
    "solution_vi": "a) Đúng: Trong phương án 1: dãy số tiền lương là cấp số cộng có số hạng đầu tiên là $u_{1}$ = 120,\ncông sai d1 = 18\nb) Sai: Trong phương án 1: $u_{3}$ = 120 + 2.18 = 156 triệu.\nc) Đúng: Trong phương án 1: tổng tiền lương người lao động nhận được trong ba năm là\n($u_{1}$ + $u_{3}$ ).3 (120 + 156).3\n$s_{3}$ = = = 414 triệu.\n2 2\nd) Đúng: Trong phương án 2: Dãy số tiền lương là cấp số cộng có số hạng đầu tiên là $v_{1}$ = 24,\ncông sai d 2 = 1,8, lương tăng theo quý. Ba năm tương ứng với 12 quý.\nTa có $v_{12}$ = 24 + 11.1,8 = 43,8 triệu.\nTổng số tiền lương nhận được sau 3 năm tương ứng với 12 quý là:\n($v_{1}$ + $v_{12}$ ).12\n$s_{12}$ = = (24 + 43,8).6 = 406,8 triệu.\n2\nTa nhận thấy 406,8 < 414.\nVậy nếu kí hợp đồng lao động trong ba năm, với mong muốn nhận được tổng số tiền lương cao\nnhất thì người lao động nên chọn phương án 1.",
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
        "content_vi": "Đợt thứ nhất anh Bình tích lũy tiền theo dãy số với cấp số cộng có công sai là $d=2$ triệu và $u_1=3$ triệu.",
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
        "content_vi": "Đợt thứ hai anh Bình tích lũy tiền theo dãy số với cấp số nhân có công bội là $q=2$ triệu và $u_1=5$ triệu.",
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
    "solution_vi": "a) Đúng: Đợt thứ nhất anh Bình tích lũy theo cấp số cộng Với công sai d = 2 triệu\nTheo đề bài ta có 21 = $u_{1}$ + 9.2 ⇒ $u_{1}$ = 3 triệu.\nb) Sai: Hết đợt thứ nhất anh Bình có tất cả 624 triệu đồng nên ta có\nn [ 2u1 + (n - 1).3]\n$s_n$ = 624 ⇒ 624 = ⇒ n = 24 tháng.\n2\nc) Đúng: Theo đề Số tiền còn lại anh Bình tích góp theo cấp số nhân có công bội là q = 2 triệu\nvà $u_{1}$ = 5 triệu.\nd) Đúng: Số tiền cần tích lũy ở đợt hai là 1259 - 624 = 635 triệu đồng\n1 - 2n\nTừ đó ta có 635 = 5. ⇒ n = 7 tháng.\n1- 2\nTổng cộng hai đợt cần có ít nhất 24 + 7 = 31 tháng.",
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
    "question_vi": "Một sinh viên sau khi ra trường và xin vào làm cho một trung tâm với mức lương khởi điểm là 100 triệu đồng một năm. Cứ sau mỗi năm, trung tâm trả thêm cho sinh viên 20 triệu đồng. Gọi $u_n$ (triệu đồng) là số tiền lương mà sinh viên đó nhận được ở năm thứ n. Xét tính đúng sai của các khẳng định sau:",
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
        "content_vi": "Dãy số $(u_n)$ là cấp số cộng có $u_1=120$ và công sai $d=20$",
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
    "solution_vi": "Ta thấy, số tiền lương năm sau hơn năm trước 20 triệu đồng nên ( $u_n$ ) là cấp số cộng có\n$u_{1}$ = 100 và công sai d = 20. Do đó: $u_n$ = $u_{1}$ + ( n - 1) d = 100 + ( n - 1).20 = 20n + 80\na) Đúng: Số tiền lương sinh viên nhận được ở năm thứ hai là $u_{2}$ = 120 (triệu đồng).\nb) Sai: Số tiền lương sinh viên nhận được ở năm thứ 10 là $u_{10}$ = 20.10 + 80 = 280 (triệu đồng).\nc) Sai: $u_{1}$ = 100.\nd) Sai: Tổng số tiền bạn sinh viên tiết kiệm được sau n năm là:\nn n\nS = [ 2u1 + ( n - 1) d ] - 70n = [ 2.100 + ( n - 1).20 ] - 70n = 10n 2 + 20n (triệu đồng).\n2 2\n[ n ≥ 13,1\nTa có: S ≥ 2000 ⇔ 10n 2 + 20n - 2000 ≥ 0 ⇔.\nn ≤ -15,1\nDo đó sau ít nhất sau 14 năm thì sinh viên đó có thể mua được chung cư 2 tỉ đồng.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_3+u_{28}=100$. Hãy tính tổng của 30 số hạng đầu tiên của cấp số cộng\nđó.",
    "question_en": "Given an arithmetic progression $(u_n)$ satisfying $u_3+u_{28}=100$, find the sum of its first 30 terms.",
    "options": [],
    "solution_vi": "Ta có: $u_{3}$ + $u_{28}$ = 100 ⇔ ( $u_{1}$ + 2d ) + ( $u_{1}$ + 27d ) = 100 ⇔ 2u1 + 29d = 100\n30\nMà $s_{30}$ = ( 2u1 + 29d ) nên $s_{30}$ = 15.100 = 1500.\n2\n{u = 2",
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
    "question_vi": "Một rạp hát có 30 dãy ghế, dãy đầu tiên có 25 ghế. Mỗi dãy sau có hơn dãy trước 3 ghế. Hỏi rạp\nhát có tất cả bao nhiêu ghế?",
    "question_en": "A theater has 30 rows of seats. The first row has 25 seats, and each subsequent row has 3 more seats than the preceding row. How many seats are there in the theater altogether?",
    "options": [],
    "solution_vi": "Số ghế của mỗi dãy (bắt đầu từ dãy đầu tiên) theo thứ tự đó lập thành một cấp số cộng có 30 số\nhạng có công sai d = 3 và $u_{1}$ = 25.\n30.29\nTổng số ghế là $s_{30}$ = $u_{1}$ + $u_{2}$ + + $u_{30}$ = 30u1 + d = 2055\n2",
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
    "question_vi": "Người ta trồng 3003 cây theo một hình tam giác như sau: hàng thứ nhất trồng 1 cây, hàng thứ hai\ntrồng 2 cây, hàng thứ ba trồng 3 cây,. Hỏi có tất cả bao nhiêu hàng cây?",
    "question_en": "A total of 3003 trees are planted in triangular rows: the first row has 1 tree, the second has 2 trees, the third has 3 trees, and so on. How many rows are there in total?",
    "options": [],
    "solution_vi": "Số cây mỗi hàng (bắt đầu từ hàng thứ nhất) lập thành một cấp số cộng ( $u_n$ ) có $u_{1}$ = 1, d = 1. Giả\nsử có n hàng cây thì $u_{1}$ + $u_{2}$ + + $u_n$ = 3003 = $s_n$.\nn ( n - 1)\nTa có 3003 = $s_n$ = nu1 + d ⇔ n 2 + n - 6006 = 0 ⇔ n = 77\n2",
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
    "question_vi": "Một chiếc đồng hồ báo thức, kể từ thời điểm 0 (giờ) thì sau mỗi giờ thì số tiếng chuông được\nđánh đúng bằng số giờ mà đồng hồ chỉ tại thời điểm đánh chuông. Hỏi một ngày đồng hồ đó\nđánh bao nhiêu tiếng chuông?",
    "question_en": "An alarm clock strikes once per hour. At each exact hour after time 0, the number of strikes equals the hour shown on the clock. How many strikes does the clock make in one day?",
    "options": [],
    "solution_vi": "16 \nKể từ lúc 1 (giờ) đến 24 (giời) số tiếng chuông được đánh lập thành cấp số cộng có 24 số hạng\nvới $u_{1}$ = 1, công sai d = 1.\n24\nVậy số tiếng chuông được đánh trong 1 ngày là: S = $s_{24}$ = ( $u_{1}$ + $u_{24}$ ) = 12 (1 + 24 ) = 300\n2",
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
    "question_vi": "Trong một khán phòng có tất cả 30 dãy ghế, dãy đầu tiên có 15 ghế, các dãy liền sau nhiều hơn\ndãy trước đó 4 ghế, hỏi khán phòng đó có tất cả bao nhiêu ghế?",
    "question_en": "An auditorium has 30 rows of seats. The first row has 15 seats, and each subsequent row has 4 more seats than the preceding row. How many seats are there in the auditorium altogether?",
    "options": [],
    "solution_vi": "Gọi $u_{1}$, $u_{2}$,…, $u_{30}$ lần lượt là số ghế của dãy ghế thứ nhất, dãy ghế thứ hai,., dãy ghế thứ ba mươi.\nKhi đó, ( $u_n$ ) là một cấp số cộng có số hạng đầu $u_{1}$ = 15, công sai d = 4 (trong đó 1 ≤ n ≤ 30 ).\nGọi $s_{30}$ là tổng số ghế trong khán phòng.\n30\nTa có: $s_{30}$ = $u_{1}$ + $u_{2}$ + …+ $u_{30}$ = [ 2u1 + (30 - 1)d ] = 15(2.15 + 29.4) = 2190.\n2",
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
    "question_vi": "Trên một bàn cờ có nhiều ô vuông, người ta đặt 7 hạt dẻ vào ô đầu tiên, sau đó đặt tiếp vào ô thứ\nhai số hạt nhiều hơn ô thứ nhất là 5, tiếp tục đặt vào ô thứ ba số hạt nhiều hơn ô thứ hai là 5,…\nvà cứ thế tiếp tục đến ô thứ n. Biết rằng đặt hết số ô trên bàn cờ người ta phải sử dụng 25450\nhạt. Hỏi bàn cờ đó có bao nhiêu ô vuông?",
    "question_en": "On a board with many square cells, 7 chestnuts are placed in the first cell. Each subsequent cell receives 5 more chestnuts than the preceding cell. If 25,450 chestnuts are used in total to fill all cells through the $n$th cell, how many square cells are there?",
    "options": [],
    "solution_vi": "Số hạt dẻ trên mỗi ô (bắt đầu từ ô thứ nhất) theo thứ tự đó lập thành cấp số cộng ( $u_n$ ) có\n$u_{1}$ = 7, d = 5. Gọi n là số ô trên bàn cờ thì $u_{1}$ + $u_{2}$ + + $u_n$ = 25450 = $s_n$.\nn ( n - 1) n2 - n\nTa có 25450 = $s_n$ = nu1 + d = 7n +.5 ⇔ 5n 2 + 9n - 50900 = 0 ⇔ n = 100\n2 2",
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
    "question_vi": "Một ruộng bậc thang có thửa thấp nhất (bậc thứ nhất) nằm ở độ cao 950 m so với mực nước biển,\nđộ chênh lệch giữa thửa trên và thửa dưới trung bình là 1, 5 m. Hỏi thửa ruộng ở bậc thứ 12 có\nđộ cao là bao nhiêu mét so với mực nước biển?",
    "question_en": "On a terraced field, the lowest terrace (the first level) is 950 m above sea level, and each successive terrace is on average 1.5 m higher than the one below it. What is the elevation of the 12th terrace above sea level?",
    "options": [],
    "solution_vi": "Kí hiệu $u_n$ là chiều cao so với mực nước biển của thửa ruộng ở bậc thứ n.\nKhi đó, dãy số ( $u_n$ ) là một cấp số cộng với $u_{1}$ = 950 và d = 1,5.\nTa có: $u_{12}$ = $u_{1}$ + 11d = 950 + 11.1,5 = 966,5\nVậy thửa ruộng ở bậc thứ 12 có độ cao 966,5 m so với mực nước biển.",
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
    "question_vi": "Chuông đồng hồ ở một toà tháp đánh số tiếng đúng bằng số giờ và cứ mỗi 30 phút không phải là\ngiờ đúng thì đánh 1 tiếng chuông. Hỏi bắt đầu từ lúc 1 giờ đêm đến 12 giờ trưa, chuông đồng hồ\nđó đã đánh tất cả bao nhiêu tiếng?",
    "question_en": "A tower clock strikes the hour number at each exact hour and strikes once at every half hour. From 1:00 a.m. through 12:00 noon, how many times does the clock strike in total?",
    "options": [],
    "solution_vi": "Lúc 1 giờ đêm, toà tháp đánh 1 tiếng chuông; lúc 2 giờ đêm, toà tháp đánh 2 tiếng chuông,.; lúc\n12 giờ trưa, toà tháp đánh 12 tiếng chuông. Ngoài ra, mỗi 30 phút không phải là giờ đúng thì\nđánh 1 tiếng chuông (có 11 lần như thế từ 1 giờ đến 12 giờ).\nVậy tổng số tiếng chuông là:\n(1 + 12) 12\nS = (1 + 2 + 3 + …+ 12) + 1 11 = + 11 = 89 ( tiếng chuông)\n2",
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
    "question_vi": "Một cơ sở khoan giếng đưa ra định mức giá như sau: Giá của mét khoan đầu tiên là 100 nghìn\nđồng và kể từ mét khoan thứ hai, giá của mỗi mét sau tăng thêm 30 nghìn đồng so với giá của\nmét khoan ngay trước đó. Một người cần khoan một giếng sâu 20 m để lấy nước dùng cho sinh\nhoạt của gia đình. Hỏi sau khi hoàn thành việc khoan giếng, gia đình đó phải thanh toán cho cơ\nsở khoan giếng số tiền bao nhiêu nghìn đồng?",
    "question_en": "A well-drilling service charges 100 thousand VND for the first meter drilled. Starting from the second meter, each additional meter costs 30 thousand VND more than the immediately preceding meter. A family needs a 20 m deep well. How many thousand VND must the family pay in total?",
    "options": [],
    "solution_vi": "Gọi $u_n$ là giá của mét khoan thứ n, trong đó 1 ≤ n ≤ 20.\nKhi đó, ( $u_n$ ) là cấp số cộng có số hạng đầu $u_{1}$ = 100 và công sai d = 30.\nSố tiền mà gia đình phải thanh toán cho cơ sở khoan giếng là:\n20 ( 2u1 + 19d ) 20(2.100 + 19.30)\n$s_{20}$ = $u_{1}$ + $u_{2}$ + …+ $u_{20}$ = = = 7700 (nghìn đồng).\n2 2",
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
    "question_vi": "Một ngôi nhà hình kim tự tháp (có gạch nâu ốp bên ngoài) được bao quanh bởi rất nhiều cây cối\nvà là nơi tuyệt vời để nghỉ mát mùa hè. Ngôi nhà có chiều dài và chiều rộng đều là 6, 8 m, chiều\ncao là 2, 72 m. Khi xây dựng ngôi nhà, người chủ đã tính toán số viên gạch nâu hình hộp chữ\nnhật cần ốp tường; biết hàng trên ít hơn hàng dưới 1 viên, hàng trên cùng là 1 viên, kích thước\nviên gạch nâu hình hộp chữ nhật là 0, 2 m - 0, 08 m - 1 m. Hãy dự tính số viên gạch nâu ốp tường\ncả bốn mặt của ngôi nhà.",
    "question_en": "A pyramid-shaped summer house has a square base 6.8 m by 6.8 m and height 2.72 m. Its four exterior walls are covered with rectangular brown bricks of dimensions $0.2\\text{ m}\\times0.08\\text{ m}\\times1\\text{ m}$. The top row contains 1 brick, and each row below contains one more brick than the row above. Estimate the total number of brown facing bricks needed for all four walls.",
    "options": [],
    "solution_vi": "Một bức tường có 2,72:0,08 = 34 hàng gạch.\nSố gạch ở mỗi hàng tạo thành một cấp số cộng với số hạng đầu $u_{1}$ = 1 và công sai d = 1.\n34.33\nSố viên gạch trên một bức tường là $s_{34}$ = 34.1 + 1 = 595 viên gạch.\n2\nVì 4 mặt đều bằng nhau nên có 4.595 = 2380 viên gạch người chủ dự tính đặt mua.\n-----------------HẾT-----------------\n20",
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
    "solution_vi": "Giữa 2 và 22 có thêm ba số hạng nữa lập thành cấp số cộng, xem như ta có một cấp số cộng có\n5 số hạng với $u_{1}$ = 2; $u_{5}$ = 22; ta cần tìm $u_{2}$, $u_{3}$, $u_{4}$.\n{$u_{2}$ = $u_{1}$ + d = 7\n$u_{5}$ - $u_{1}$ 22 - 2 \nTa có $u_{5}$ = $u_{1}$ + 4d ⇔ d = = = 5 → $u_{3}$ = $u_{1}$ + 2d = 12\n4 4 u = u + 3d = 17\n4 1",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có các số hạng đầu lần lượt là $5, 9, 13, 17,\\ldots$;. Tìm số hạng tổng quát $u_n$ của cấp số cộng.",
    "question_en": "An arithmetic progression $(u_n)$ begins $5,9,13,17,\\ldots$. Find its general term $u_n$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_n=5n+1$.",
        "content_en": "$u_n=5n+1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_n=5n-1$.",
        "content_en": "$u_n=5n-1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_n=4n+1$.",
        "content_en": "$u_n=4n+1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_n=4n-1$.",
        "content_en": "$u_n=4n-1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Các số 5; 9; 13; 17; theo thứ tự đó lập thành cấp số cộng ( $u_n$ ) nên\n{$u_{1}$ = 5\n⎯⎯⎯\nCTTQ\n→ $u_n$ = $u_{1}$ + ( n - 1) d = 5 + 4 ( n - 1) = 4n + 1\nd = $u_{2}$ - $u_{1}$ = 4\n1",
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
        "content_vi": "$u_n=-4n+9$.",
        "content_en": "$u_n=-4n+9$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_n=-2n+19$.",
        "content_en": "$u_n=-2n+19$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_n=-2n-21$.",
        "content_en": "$u_n=-2n-21$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_n=-2n+15$.",
        "content_en": "$u_n=-2n+15$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Dãy số $u_n$ = -2n + 15 không có dạng an + b nên có không phải là cấp số cộng.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ với $u_n=5-2n$. Tìm công sai của cấp số cộng",
    "question_en": "Given the arithmetic progression $(u_n)$ with $u_n=5-2n$, find its common difference.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$d=3$.",
        "content_en": "$d=3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$d=-2$.",
        "content_en": "$d=-2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$d=1$.",
        "content_en": "$d=1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$d=2$.",
        "content_en": "$d=2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_{n+1}$ - $u_n$ = ( 5 - 2 ( n + 1) ) - ( 5 - 2n ) = 5 - 2n - 2 - 5 + 2n = -2 ⇒ d = -2.",
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
    "question_vi": "Xác định a để 3 số $1+2a$; $2a^2-1$; $-2a$ theo thứ tự thành lập một cấp số cộng? 3",
    "question_en": "Find $a$ such that the three numbers $1+2a$, $2a^2-1$, and $-2a$, in that order, form an arithmetic progression.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Không có giá trị nào của a.",
        "content_en": "There is no such value of $a$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$a=\\pm\\dfrac{4}{3}$.",
        "content_en": "$a=\\pm\\dfrac{4}{3}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$a=\\pm3$.",
        "content_en": "$a=\\pm3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$a=\\pm\\dfrac{\\sqrt3}{2}$.",
        "content_en": "$a=\\pm\\dfrac{\\sqrt3}{2}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "3 3\nTheo công thức cấp số cộng ta có: 2(2a 2 - 1) = (1 + 2a) + (-2a) ⇔ a^2 = ⇔a=±.\n4 2",
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
        "content_vi": "Số cây mỗi hàng lập thành một cấp số cộng $(u_n)$ có số hạng đầu là $u_1=1$.",
        "content_en": "The numbers of trees in successive rows form an arithmetic progression $(u_n)$ with first term $u_1=1$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Số cây mỗi hàng lập thành một cấp số cộng $(u_n)$ có công sai là $d=2$.",
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
    "solution_vi": "8 \na) Đúng: Số cây mỗi hàng (bắt đầu từ hàng thứ nhất) lập thành một cấp số cộng ( $u_n$ ) có\n$u_{1}$ = 1, d = 1.\nb) Sai: d = 1\nc) Đúng: Giả sử có n hàng cây thì $u_{1}$ + $u_{2}$ + + $u_n$ = 3240 = $s_n$.\nn ( n - 1)\nTa có 3240 = $s_n$ = nu1 + d ⇔ n 2 + n - 6480 = 0 ⇔ n = 80.\n2\nc) Sai: Số cây hàng thứ 20 trồng được là $u_{20}$ = $u_{1}$ + 19d = 20.\nVậy mệnh đề 1,3 đúng. Mệnh đề 2, 4 sai.",
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
    "question_vi": "Giá của một chiếc xe ô tô lúc mới mua là 680 triệu đồng. Cứ sau mỗi năm sử dụng, giá của chiếc xe ô tô giảm 50 triệu đồng. Gọi $u_n$ (triệu đồng) là giá của chiếc ô tô trong năm thứ n sử dụng. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "A new car costs 680 million VND. After each year of use, its value decreases by 50 million VND. Let $u_n$ (million VND) be the car’s value in its $n$th year of use. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$u_2=630$.",
        "content_en": "$u_2=630$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Dãy số $(u_n)$ là cấp số cộng với công sai $d=50$.",
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
    "solution_vi": "a) Đúng: Giá của chiếc ô tô trong năm thứ 2 là: $u_{2}$ = 680 - 50 = 630 triệu đồng.\nb) Sai: Dãy số ( $u_n$ ) là cấp số cộng với công sai d = -50.\nc) Đúng: Giá của chiếc ô tô sau 3 năm sử dụng: $u_{4}$ = $u_{1}$ + 3d = 680 - 3.50 = 530 triệu đồng.\nd) Sai: Ta có: $u_n$ < 340 ⇔ $u_{1}$ + ( n - 1) d < 340\n⇔ 680 + ( n - 1).( -50 ) < 340 ⇔ -50n + 730 < 340 ⇔ n > 7,8\nSuy ra đến năm thứ 8 thì giá trị của chiếc xe nhỏ hơn một nửa giá trị ban đầu của nó.",
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
    "question_vi": "Chiều cao (đơn vị: centimét) của một đứa trẻ n tuổi phát triển bình thường được cho bởi công\nthức: $x_n=75+5(n-1)$.\nMột đứa trẻ phát triển bình thường có chiều cao năm 3 tuổi là bao nhiêu centimét?\nb) Dãy số $(x_n)$ có là một cấp số cộng không? Trung bình một năm, chiều cao mỗi đứa trẻ phát\ntriển bình thường tăng lên bao nhiêu centimét?",
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
    "question_vi": "Chiều cao (đơn vị: centimét) của một đứa trẻ n tuổi phát triển bình thường được cho bởi công\nthức: $x_n=75+5(n-1)$.\nDãy số $(x_n)$ có là một cấp số cộng không? Trung bình một năm, chiều cao mỗi đứa trẻ phát\ntriển bình thường tăng lên bao nhiêu centimét?",
    "question_en": "The height $x_n$ (in centimeters) of a normally developing $n$-year-old child is modeled by $x_n=75+5(n-1)$. Does the sequence $(x_n)$ form an arithmetic progression? On average, by how many centimeters does the child’s height increase each year?",
    "options": [],
    "solution_vi": "Ta có: xn +1 = 75 + 5 ( n + 1 - 1) = 75 + 5n\nXét hiệu xn +1 - xn = 75 + 5n - [75 + 5 ( n - 1) ] = 5\nDo đó ( xn ) là một cấp số cộng có số hạng đầu x1 = 75 và công sai d = 5.",
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
    "question_vi": "Giá của một chiếc xe ô tô lúc mới mua là 680 triệu đồng. Cứ sau mối năm sử dụng, giá của chiếc\nxe ô tô giảm 55 triệu đồng. Tính giá còn lại của chiếc xe sau 5 năm sử dụng.",
    "question_en": "A new car costs 680 million VND. After each year of use, its value decreases by 55 million VND. Find the car’s remaining value after 5 years.",
    "options": [],
    "solution_vi": "Giá của chiếc xe sau n năm là: $u_n$ = 680 - 55 ( n - 1)\nVậy sau 5 năm sử dụng giá của chiếc xe là: $u_{5}$ = 680 - 55 ( 5 - 1) = 460 (triệu đồng)\n-----------------HẾT-----------------",
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
    "question_vi": "Xác định số hàng đầu $u_{1}$ và công sai d của cấp số cộng $(u_n)$ có $u_9=5u_2$ và $u_{13}=2u_6+5$.",
    "question_en": "Find the first term $u_1$ and common difference $d$ of an arithmetic progression $(u_n)$ satisfying $u_9=5u_2$ and $u_{13}=2u_6+5$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_1=3,\\ d=4$.",
        "content_en": "$u_1=3,\\ d=4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_1=3,\\ d=5$.",
        "content_en": "$u_1=3,\\ d=5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_1=4,\\ d=5$.",
        "content_en": "$u_1=4,\\ d=5$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_1=4,\\ d=3$.",
        "content_en": "$u_1=4,\\ d=3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{$u_{1}$ + 8d = 5 ( $u_{1}$ + d )\nTa có: $u_n$ = $u_{1}$ + ( n - 1) d. Theo đầu bài ta có hệ phương trình: \n$u_{1}$ + 12d = 2 ( $u_{1}$ + 5d ) + 5\n{4u1 - 3d = 0 {u = 3\n⇔ ⇔ 1.\n$u_{1}$ - 2d = -5 d = 4",
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
    "question_vi": "Cho $(u_n)$ là một cấp số cộng thỏa mãn $u_1+u_3=8$ và $u_4=10$. Công sai của cấp số cộng đã cho bằng",
    "question_en": "Let $(u_n)$ be an arithmetic progression satisfying $u_1+u_3=8$ and $u_4=10$. Find its common difference.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3.",
        "content_en": "3.",
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
        "content_vi": "2.",
        "content_en": "2.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4.",
        "content_en": "4.",
        "is_correct": false
      }
    ],
    "solution_vi": "{$u_{1}$ + $u_{3}$ = 8 {$u_{1}$ + $u_{1}$ + 2d = 8 {2u1 + 2d = 8 {u = 1\nTa có ⇔ ⇔ ⇔ 1.\n$u_{4}$ = 10 $u_{1}$ + 3d = 10 $u_{1}$ + 3d = 10 d = 3\nVậy công sai của cấp số cộng là d = 3.\n2 \n{\nu - u + u = 7",
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
    "question_vi": "Cấp số cộng $(u_n)$ có số hạng đầu $u_1=3$, công sai $d=-2$ thì số hạng thứ 5 là",
    "question_en": "An arithmetic progression $(u_n)$ has first term $u_1=3$ and common difference $d=-2$. Find the fifth term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_5=8$.",
        "content_en": "$u_5=8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_5=1$.",
        "content_en": "$u_5=1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_5=-5$.",
        "content_en": "$u_5=-5$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_5=-7$.",
        "content_en": "$u_5=-7$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: $u_{5}$ = $u_{1}$ + 4d = 3 + 4.( -2 ) = -5.",
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
    "question_vi": "Cho cấp số cộng có $u_1=-3$, $d=4$. Chọn khẳng định đúng trong các khẳng định sau?",
    "question_en": "Given an arithmetic progression with $u_1=-3$ and $d=4$, choose the correct statement.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_5=15$.",
        "content_en": "$u_5=15$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_4=8$.",
        "content_en": "$u_4=8$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_3=5$.",
        "content_en": "$u_3=5$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_2=2$.",
        "content_en": "$u_2=2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_{3}$ = $u_{1}$ + 2d = -3 + 2.4 = 5.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_1=11$ và công sai $d=4$. Hãy tính $u_{99}$.",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=11$ and common difference $d=4$, find $u_{99}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "401.",
        "content_en": "401.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "403.",
        "content_en": "403.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "402.",
        "content_en": "402.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "404.",
        "content_en": "404.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: $u_{99}$ = $u_{1}$ + 98d = 11 + 98.4 = 403.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$, biết: $u_1=3$, $u_2=-1$. Chọn đáp án đúng.",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=3$ and $u_2=-1$, choose the correct answer.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_3=4$.",
        "content_en": "$u_3=4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_3=7$.",
        "content_en": "$u_3=7$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_3=2$.",
        "content_en": "$u_3=2$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$u_3=-5$.",
        "content_en": "$u_3=-5$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có ( $u_n$ ) là cấp số cộng nên 2u2 = $u_{1}$ + $u_{3}$ suy ra $u_{3}$ = 2u2 - $u_{1}$ = -5.",
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
    "question_vi": "Một cấp số cộng $(u_n)$ có $u_{13}=8$ và $d=-3$. Tìm số hạng thứ ba của cấp số cộng $(u_n)$.",
    "question_en": "An arithmetic progression $(u_n)$ has $u_{13}=8$ and common difference $d=-3$. Find its third term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "50.",
        "content_en": "50.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "28.",
        "content_en": "28.",
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
        "content_vi": "44",
        "content_en": "44.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: $u_{13}$ = $u_{1}$ + 12d ⇔ 8 = $u_{1}$ + 12.( -3) ⇒ $u_{1}$ = 44 ⇒ $u_{3}$ = $u_{1}$ + 2d = 44 - 6 = 38.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1=3$ và công sai $d=2$. Giá trị của $u_{7}$ bằng:",
    "question_en": "Given an arithmetic progression $(u_n)$ with first term $u_1=3$ and common difference $d=2$, find $u_7$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "15.",
        "content_en": "15.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "17.",
        "content_en": "17.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "19.",
        "content_en": "19.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "13.",
        "content_en": "13.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_{7}$ = $u_{1}$ + 6.d = 3 + 6.2 = 15.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1=2$ và công sai $d=4$. Giá trị $u_{2019}$ bằng",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=2$ and common difference $d=4$, find $u_{2019}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "8074.",
        "content_en": "8074.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "4074.",
        "content_en": "4074.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "8078.",
        "content_en": "8078.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4078.",
        "content_en": "4078.",
        "is_correct": false
      }
    ],
    "solution_vi": "Áp dụng công thức của số hạng tổng quát $u_n$ = $u_{1}$ + ( n - 1) d = 2 + 2018.4 = 8074.",
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
    "question_vi": "Tìm số hạng thứ 11 của cấp số cộng có số hạng đầu bằng 3 và công sai $d=-2$.",
    "question_en": "Find the 11th term of an arithmetic progression whose first term is 3 and whose common difference is $d=-2$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$-21$.",
        "content_en": "$-21$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$23$.",
        "content_en": "$23$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$-19$.",
        "content_en": "$-19$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$-17$.",
        "content_en": "$-17$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Áp dụng công thức số hạng tổng quát của cấp số cộng ta có $u_{11}$ = $u_{1}$ + 10d = 3 + 10.( -2 ) = -17.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1=-2$ và công sai $d=-7$. Giá trị $u_{6}$ bằng",
    "question_en": "Given an arithmetic progression $(u_n)$ with first term $u_1=-2$ and common difference $d=-7$, find $u_6$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "37.",
        "content_en": "37.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$-37$.",
        "content_en": "$-37$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$-33$.",
        "content_en": "$-33$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "33.",
        "content_en": "33.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_{6}$ = $u_{1}$ + 5d = -2 - 35 = -37.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ với số hạng đầu tiên $u_1=2$ và công sai $d=2$. Tìm $u_{2018}$?",
    "question_en": "Given an arithmetic progression $(u_n)$ with first term $u_1=2$ and common difference $d=2$, find $u_{2018}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$2^{2018}$.",
        "content_en": "$2^{2018}$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$2^{2017}$.",
        "content_en": "$2^{2017}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "u2018 = 4036.",
        "content_en": "4036.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "u2018 = 4038.",
        "content_en": "4038.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: $u_n$ = $u_{1}$ + ( n - 1) d ⇒ $u_{2018}$ = 2 + ( 2018 - 1).2 = 4036.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_1=3$ và công sai $d=7$. Hỏi kể từ số hạng thứ mấy trở đi thì các số hạng của $(u_n)$ đều lớn hơn 2018?",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=3$ and common difference $d=7$, from which term onward are all terms greater than 2018?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "287.",
        "content_en": "287.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "289.",
        "content_en": "289.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "288.",
        "content_en": "288.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "286.",
        "content_en": "286.",
        "is_correct": false
      }
    ],
    "solution_vi": "2022\nTa có: $u_n$ = $u_{1}$ + ( n - 1) d = 3 + 7 ( n - 1) = 7 n - 4; $u_n$ > 2018 ⇔ 7 n - 4 > 2018 ⇔ n >.\n7\nVậy n = 289.",
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
        "content_vi": "6, 12, 18.",
        "content_en": "6, 12, 18.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "8, 13, 18.",
        "content_en": "8, 13, 18.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "7, 12, 17.",
        "content_en": "7, 12, 17.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "6, 10, 14.",
        "content_en": "6, 10, 14.",
        "is_correct": false
      }
    ],
    "solution_vi": "{$u_{1}$ = 2 {$u_{1}$ = 2\nXem cấp số cộng cần tìm là ( $u_n$ ) có: suy ra:.\n$u_{5}$ = 22 d = 5\n4 \nVậy cấp số cộng cần tìm là ( $u_n$ ): 2, 7, 12, 17, 22.",
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
    "question_vi": "Cho cấp số cộng có $u_1=-2$ và $d=4$. Chọn khẳng định đúng trong các khẳng định sau?",
    "question_en": "Given an arithmetic progression with $u_1=-2$ and $d=4$, choose the correct statement.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_4=8$.",
        "content_en": "$u_4=8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_5=15$.",
        "content_en": "$u_5=15$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_2=3$.",
        "content_en": "$u_2=3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_3=6$.",
        "content_en": "$u_3=6$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: $u_{1}$ = -2 và d = 4 suy ra $u_{2}$ = $u_{1}$ + d = -2 + 4 = 2\n$u_{3}$ = $u_{1}$ + 2d = -2 + 2.4 = 6; $u_{4}$ = $u_{1}$ + 3d = -2 + 3.4 = 10; $u_{5}$ = $u_{1}$ + 4d = -2 + 4.4 = 14",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ với $u_1=2$; $d=9$. Khi đó số 2018 là số hạng thứ mấy trong dãy?",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=2$ and common difference $d=9$, which term of the progression is equal to 2018?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "226.",
        "content_en": "226.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "225.",
        "content_en": "225.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "223.",
        "content_en": "223.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "224.",
        "content_en": "224.",
        "is_correct": false
      }
    ],
    "solution_vi": "$u_n$ = $u_{1}$ + ( n - 1) d ⇔ 2018 = 2 + ( n - 1).9 ⇔ n = 225.",
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
    "question_vi": "Cho cấp số cộng $1, 4, 7,\\ldots$,.... Số hạng thứ 100 của cấp số cộng là",
    "question_en": "Given the arithmetic progression $1,4,7,\\ldots$, find its 100th term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "297.",
        "content_en": "297.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "301.",
        "content_en": "301.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "295.",
        "content_en": "295.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "298.",
        "content_en": "298.",
        "is_correct": true
      }
    ],
    "solution_vi": "Cấp số cộng 1, 4,7,.... có số hạng đầu $u_{1}$ = 1 và công sai d = 3.\nSố hạng thứ 100 của cấp số cộng là: $u_{100}$ = $u_{1}$ + 99.d = 1 + 99.3 = 298.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ biết $u_1=3$, $u_8=24$ thì $u_{11}$ bằng",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=3$ and $u_8=24$, find $u_{11}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "30.",
        "content_en": "30.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "33.",
        "content_en": "33.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "32.",
        "content_en": "32.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "28.",
        "content_en": "28.",
        "is_correct": false
      }
    ],
    "solution_vi": "$u_{8}$ - $u_{1}$ 24 - 3\nTa có: $u_{8}$ = $u_{1}$ + 7d ⇒ d = = = 3; $u_{11}$ = $u_{1}$ + 10d = 33.\n7 7",
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
        "content_vi": "$u_5=2$.",
        "content_en": "$u_5=2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_5=-2$.",
        "content_en": "$u_5=-2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_5=0$.",
        "content_en": "$u_5=0$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_5=4$.",
        "content_en": "$u_5=4$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{$u_{3}$ = 6 {$u_{1}$ + 2d = 6 {d = -2\n\nTheo giả thiết ta có u = -2 ⇔ ⇔. Vậy $u_{5}$ = 2.\n7 $u_{1}$ + 6d = -2 $u_{1}$ = 10",
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
    "question_vi": "Cho cấp số cộng $(u_n)$, biết $u_2=3$ và $u_4=7$. Giá trị của $u_{15}$ bằng",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_2=3$ and $u_4=7$, find $u_{15}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "27.",
        "content_en": "27.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "31.",
        "content_en": "31.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "35.",
        "content_en": "35.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "29.",
        "content_en": "29.",
        "is_correct": true
      }
    ],
    "solution_vi": "{$u_{1}$ + d = 3 {u = 1\nTừ giả thiết $u_{2}$ = 3 và $u_{4}$ = 7 suy ra ta có hệ phương trình: ⇒ 1.\n$u_{1}$ + 3d = 7 d = 2\nVậy $u_{15}$ = $u_{1}$ + 14d = 29.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_1=123$ và $u_3-u_{15}=84$. Số 11 là số hạng thứ bao nhiêu của cấp số cộng đã cho?",
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
    "solution_vi": "Ta có: $u_{3}$ - $u_{15}$ = 84 ⇔ $u_{1}$ + 2d - ( $u_{1}$ + 14d ) = 84 ⇔ d = -7.\nSố hạng tổng quát: $u_n$ = -7 n + 130.\nTa có: $u_n$ = 11 ⇔ n = 17.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ biết $u_1=-1$; $d=2$; $u_n=43$. Hỏi cấp số cộng đó có bao nhiêu số hạng?",
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
    "solution_vi": "$u_n$ = $u_{1}$ + (n - 1)d ⇔ 43 = -1 + ( n - 1).2 ⇔ n = 23.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có số hạng đầu là $u_2=1$, $u_5=19$. Số 103 là số hạng thứ mấy trong cấp số cộng đã cho?",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_2=1$ and $u_5=19$, which term is equal to 103?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "19.",
        "content_en": "19.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "18.",
        "content_en": "18.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "20.",
        "content_en": "20.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "17.",
        "content_en": "17.",
        "is_correct": false
      }
    ],
    "solution_vi": "{$u_{2}$ = 1 {$u_{1}$ + d = 1 {u = -5\nTa có ⇔ ⇔ 1.\n$u_{5}$ = 19 $u_{1}$ + 4d = 19 d = 6\nLại có $u_n$ = $u_{1}$ + ( n - 1) d ⇔ 103 = -5 + ( n - 1) 6 ⇔ n = 19.\nVậy số 103 là số hạng thứ 19 trong cấp số cộng đã cho.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_1=5$ và công sai $d=-3$. Biết rằng $-289$ là một số hạng của cấp số cộng trên. Hỏi đó là số hạng thứ bao nhiêu?",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=5$ and common difference $d=-3$, suppose $-289$ is one of its terms. Which term is it?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "98.",
        "content_en": "98.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "99.",
        "content_en": "99.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "101.",
        "content_en": "101.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "100.",
        "content_en": "100.",
        "is_correct": false
      }
    ],
    "solution_vi": "Số hạng tổng quát của cấp số cộng có $u_{1}$ = 5 và công sai d = -3 là $u_n$ = 5 - 3 ( n - 1), ∀n ∈ ℕ*\n.\nTa có -289 = 5 - 3 ( n - 1) ⇔ -294 = -3 ( n - 1) ⇔ 98 = n - 1 ⇔ n = 99.\nVậy -289 là số hạng thứ 99 của cấp số cộng trên.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_2=2001$ và $u_5=1995$. Khi đó $u_{1001}$ bằng",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_2=2001$ and $u_5=1995$, find $u_{1001}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4005.",
        "content_en": "4005.",
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
        "content_vi": "3.",
        "content_en": "3.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "4003.",
        "content_en": "4003.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi $u_{1}$ và d lần lượt là số hạng đầu tiên và công sai của cấp số công.\n{$u_{2}$ = 2001 {$u_{1}$ + d = 2001 {u = 2003\nTa có: ⇔ ⇔ 1. Vậy $u_{1001}$ = $u_{1}$ + 1000d = 3.\n5\nu = 1995 1\nu + 4 d = 1995 d = -2",
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
    "question_vi": "Một cấp số cộng có số hạng đầu $u_1=2018$ công sai $d=-5$. Hỏi bắt đầu từ số hạng nào của cấp số cộng đó thì nó nhận giá trị âm.",
    "question_en": "An arithmetic progression has first term $u_1=2018$ and common difference $d=-5$. Starting from which term does the progression become negative?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_{406}$.",
        "content_en": "$u_{406}$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_{403}$.",
        "content_en": "$u_{403}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_{405}$.",
        "content_en": "$u_{405}$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$u_{404}$.",
        "content_en": "$u_{404}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_n$ = $u_{1}$ + ( n - 1) d = 2018 - 5 ( n - 1)\n2023\nCó $u_n$ < 0 ⇔ 2018 - 5 ( n - 1) < 0 ⇔ 5n > 2023 ⇔ n >, n∈ ⇒ n ≥ 405.\n5\nVậy từ $u_{405}$ thì số hạng của cấp số cộng đó nhận giá trị âm.\n{$u_{1}$ - 2u5 + $u_{6}$ = -15",
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
    "question_vi": "Cho cấp số cộng $u_n$ có công sai $d=2$ và biểu thức $u_2^2+u_3^2+u_4^2$ đạt giá trị nhỏ nhất. Số 2018 là số hạng thứ bao nhiêu của cấp số cộng $u_n$?",
    "question_en": "An arithmetic progression $(u_n)$ has common difference $d=2$, and the expression $u_2^2+u_3^2+u_4^2$ is minimized. Which term of the progression is equal to 2018?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1011.",
        "content_en": "1011.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1014.",
        "content_en": "1014.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "1013.",
        "content_en": "1013.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "1012.",
        "content_en": "1012.",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có:\n{$u_{2}$ = $u_{1}$ + 2\n\n$u_{3}$ = $u_{1}$ + 4 ⇒ $u_{2}$ + $u_{3}$ + $u_{4}$ = ( $u_{1}$ + 2 ) + ( $u_{1}$ + 4 ) + ( $u_{1}$ + 6 ) = 3u1 + 24u1 + 56 = 3 ( $u_{1}$ + 4 ) + 8 ≥ 8\n2 2 2 2 2 2 2 2\nu = u + 6\n4 1\nVậy $u_{22}$ + $u_{32}$ + $u_{42}$ đạt giá trị nhỏ nhất khi $u_{1}$ = -4.\nTừ đó suy ra 2018 = $u_{1}$ + ( n - 1) d ⇔ 2018 = -4 + ( n - 1) 2 ⇔ n = 1012.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$, biết $u_1=-5$, $d=2$. Số 81 là số hạng thứ bao nhiêu?",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=-5$ and $d=2$, which term is equal to 81?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "100.",
        "content_en": "100.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "50.",
        "content_en": "50.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "75.",
        "content_en": "75.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "44.",
        "content_en": "44.",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có $u_n$ = $u_{1}$ + ( n - 1) d ⇔ 81 = -5 + ( n - 1) 2 ⇔ n = 44.\nVậy 81 là số hạng thứ 44.",
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
    "question_vi": "Một cấp số cộng $(u_n)$ có $u_9=47$, công sai $d=5$. Số 10092 là số hạng thứ mấy trong cấp số cộng đó?",
    "question_en": "An arithmetic progression $(u_n)$ has $u_9=47$ and common difference $d=5$. Which term of the progression is equal to 10092?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2018.",
        "content_en": "2018.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "2017.",
        "content_en": "2017.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2016.",
        "content_en": "2016.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2019.",
        "content_en": "2019.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_{9}$ = $u_{1}$ + 8d ⇒ $u_{1}$ = 7.\nGọi 10092 là số hạng thứ n trong khai triển, ta có:\n10092 - 7\n10092 = $u_{1}$ + ( n - 1) d ⇒ n = + 1 = 2018.\n5",
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
    "question_vi": "Cho hai cấp số cộng $(x_n): 4, 7, 10,\\ldots$,… và $(y_n): 1, 6, 11,\\ldots$,…. Hỏi trong 2018 số hạng đầu tiên của mỗi cấp số có bao nhiêu số hạng chung?",
    "question_en": "Consider the arithmetic progressions $(x_n):4,7,10,\\ldots$ and $(y_n):1,6,11,\\ldots$. Among the first 2018 terms of each progression, how many terms are common to both?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "404.",
        "content_en": "404.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "673.",
        "content_en": "673.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "403.",
        "content_en": "403.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "672.",
        "content_en": "672.",
        "is_correct": false
      }
    ],
    "solution_vi": "Số hạng tổng quát của cấp số cộng ( xn ) là: xn = 4 + ( n - 1).3 = 3n + 1.\nSố hạng tổng quát của cấp số cộng ( yn ) là: ym = 1 + ( m - 1).5 = 5m - 4.\nGiả sử k là 1 số hạng chung của hai cấp số cộng trong 2018 số hạng đầu tiên của mỗi cấp số.\nVì k là 1 số hạng của cấp số cộng ( xn ) nên k = 3i + 1 với 1 ≤ i ≤ 2018 và i ∈ *\n.\nVì k là 1 số hạng của cấp số cộng ( yn ) nên k = 5 j - 4 với 1 ≤ j ≤ 2018 và j ∈ *\n.\nDo đó 3i + 1 = 5 j - 4 ⇒ 3i = 5 j - 5 ⇒ i 5 ⇒ i ∈ {5;10;15;...;2015} ⇒ có 403 số hạng chung.",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_1=5$ và $d=-7$. Xét tính đúng sai của các khẳng định sau:",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_1=5$ and $d=-7$, determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$u_{11}=-65$.",
        "content_en": "$u_{11}=-65$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "$u_5+u_7=-50$.",
        "content_en": "$u_5+u_7=-50$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Số $-849$ là số hạng thứ 123 của cấp số cộng",
        "content_en": "The number $-849$ is the 123rd term of the progression.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Số $-114$ là số hạng thứ 18 của cấp số cộng",
        "content_en": "The number $-114$ is the 18th term of the progression.",
        "is_correct": true
      }
    ],
    "solution_vi": "Số hạng tổng quát của cấp số cộng là: $u_n$ = $u_{1}$ + ( n - 1) d = 5 + ( n - 1).( -7 ) = -7 n + 12\na) Đúng: Ta có: $u_{11}$ = -7.11 + 12 = -65.\nb) Sai: $u_{5}$ + $u_{7}$ = -60\nc) Đúng: Ta có: -849 = -7 n + 12 ⇒ n = 123.\nd) Đúng: Ta có -114 = -7 n + 12 ⇒ n = 18\n{u - u + u = 15",
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
    "question_vi": "Cho hai số -3 và 23. Xen kẽ giữa hai số đã cho n số hạng để tất cả các số đó tạo thành cấp số\ncộng có công sai $d=2$. Tìm n.",
    "question_en": "Between the numbers $-3$ and $23$, insert $n$ terms so that all the numbers form an arithmetic progression with common difference $d=2$. Find $n$.",
    "options": [],
    "solution_vi": "Theo giả thiết thì ta được một cấp số cộng có n + 2 số hạng với $u_{1}$ = -3, $u_n$ + 2 = 23.\n$u_n$ + 2 - $u_{1}$ 23 - ( -3)\nKhi đó $u_n$ + 2 = $u_{1}$ + ( n + 1) d ⇔ n + 1 = = = 13 ⇔ n = 12\nd 2",
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
    "question_vi": "Biết các số $\\binom{n}{1}$; $\\binom{n}{2}$; $\\binom{n}{3}$ theo thứ tự lập thành một cấp số cộng với $n>3$. Tìm n.",
    "question_en": "The numbers $\\binom{n}{1}$, $\\binom{n}{2}$, and $\\binom{n}{3}$, in that order, form an arithmetic progression, where $n>3$. Find $n$.",
    "options": [],
    "solution_vi": "Ba số Cn1; Cn2; Cn3 theo thứ tự $u_{1}$, $u_{2}$, $u_{3}$ lập thành cấp số cộng nên\n$u_{1}$ + $u_{3}$ = 2u2 ⇔ Cn1 + Cn3 = 2Cn2 ( n ≥ 3) ⇔ n +\n( n - 2 )( n - 1) n = 2. ( n - 1) n\n6 2\nn 2 - 3n + 2 [n = 2\n⇔ 1+ = n - 1 ⇔ n 2 - 9n + 14 ⇔ ⇔ n = 7 ( n ≥ 3).\n6 n = 7\nNhận xét: Nếu uk -1, uk, uk +1 là ba số hạng liên tiếp của một cấp số cộng thì ta có uk -1 + uk +1 = 2uk.\n10",
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
    "question_vi": "Cho cấp số cộng $(u_n)$ có $u_2=2001$ và $u_5=1995$. Khi đó $u_{1001}$ bằng:",
    "question_en": "Given an arithmetic progression $(u_n)$ with $u_2=2001$ and $u_5=1995$, find $u_{1001}$.",
    "options": [],
    "solution_vi": "{2001 = $u_{2}$ = $u_{1}$ + d {u = 2003\n⇔ 1 → $u_{1001}$ = $u_{1}$ + 1000d = 3\n1995 = $u_{5}$ = $u_{1}$ + 4d d = -2",
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
    "question_vi": "Ba góc A, B, C $A<B<C$ của tam giác tạo thành cấp số cộng, biết góc lớn nhất gấp đôi góc bé\nnhất. Hiệu số đo độ của góc lớn nhất với góc nhỏ nhất bằng:",
    "question_en": "The three angles $A,B,C$ of a triangle, with $A<B<C$, form an arithmetic progression. The largest angle is twice the smallest angle. Find the difference, in degrees, between the largest and smallest angles.",
    "options": [],
    "solution_vi": "Ba góc A, B, C của một tam giác theo thứ tự đó lập thành cấp số cộng thỏa yêu cầu, thì\nC = 2 A, C + A = 2 B. Ta có\n{ A + B + C = 1800 {3B = 1800 { B = 600 { A = 400\n\nA + C = 2B ⇔ A + C = 2 B ⇔ A + C = 1200 → B = 600 → C - A = 400.\nC = 2 A C = 2 A C = 2 A C = 800",
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
    "question_vi": "Cho biết bốn số $5, x, 15, y$ theo thứ tự lập thành một cấp số cộng. Tính giá trị của biểu thức $3x+2y$.",
    "question_en": "The four numbers $5,x,15,y$, in that order, form an arithmetic progression. Calculate $3x+2y$.",
    "options": [],
    "solution_vi": "{ 5 + 15\nx = 2 { x = 10\nTheo tính chất của cấp số cộng, ta có: ⇔.\nx + y = 15 y = 20\n2\nVậy 3 x + 2 y = 70.\n{u + $u_{4}$ + $u_{6}$ = 36",
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
    "question_vi": "Cho bốn số thực tạo thành một cấp số cộng có tổng bằng 28 và tổng các bình phương của chúng\nbằng 276. Tìm tích của bốn số đó.",
    "question_en": "Four real numbers form an arithmetic progression. Their sum is 28 and the sum of their squares is 276. Find the product of the four numbers.",
    "options": [],
    "solution_vi": "Gọi bốn số cần tìm theo thứ tự cấp số cộng là: a - 3r, a - r, a + r, a + 3r.\n{a - 3r + a - r + a + r + a + 3r = 28 {4a = 28\nTa có: ⇔ 2\n(a - 3r ) + (a - r ) + (a + r ) + (a + 3r ) = 276 4a + 20r = 276\n2 2 2 2 2\n{a = 7 {a = 7\n⇔ 2 ⇔.\nr = 4 r = ±2\nVậy bốn số cần tìm là 1,5,9,13; tích của chúng bằng 585",
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
    "question_vi": "Cho dãy số $(u_n)$ biết $u_n=5n+2$. Mệnh đề nào sau đây đúng?",
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
    "solution_vi": "Ta có $u_{n+1}$ - $u_n$ = 5 ( n + 1) + 2 - 5n + 2 = 5n + 7 - 5n + 2 > 0 ⇔ $u_{n+1}$ > $u_n$\n1",
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
    "question_vi": "Cho dãy số $(u_n)$ biết $u_n=2n^2+3n+1$. Mệnh đề nào sau đây đúng?",
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
    "solution_vi": "Ta có $u_{n+1}$ - $u_n$ = 2 ( n + 1) + 3 ( n + 1) + 1 - 2n 2 - 3n - 1 = 4n + 5 > 0, ∀n ∈ ℕ*\n2 *\nVậy $u_{n+1}$ - $u_n$ < 0 ⇔ $u_{n+1}$ < $u_n$, ∀n ∈ ℕ*\nCho dãy số ( $u_n$ ) biết $u_n$ = ( -1) ( n 2 + 1). Mệnh đề nào sau đây đúng?\nn",
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
    "question_vi": "Cho dãy số $(u_n)$ biết $u_n=2n-an$. Tìm tất cả các giá trị của a để dãy số tăng.",
    "question_en": "Given the sequence $(u_n)$ with $u_n=2n-an$, find all values of $a$ for which the sequence is increasing.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$a=2$.",
        "content_en": "$a=2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$a>2$.",
        "content_en": "$a>2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$a<2$.",
        "content_en": "$a<2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$a\\ge2$.",
        "content_en": "$a\\ge2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_{n+1}$ - $u_n$ = 2n +1 - an - a - 2n + an = 2n - a, ∀n ∈ ℕ*\nĐể dãy số tăng thì $u_{n+1}$ - $u_n$ = 2n - a > 0, ∀n ∈ ℕ*\n⇔ a < 2n, ∀n ∈ ℕ*\n⇔ a < 2, ∀n ∈ ℕ*\n3n",
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
        "content_vi": "$u_n=n^2$.",
        "content_en": "$u_n=n^2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_n=-3$.",
        "content_en": "$u_n=-3$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$u_n=3n$.",
        "content_en": "$u_n=3n$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_n=n^3-\\dfrac{2}{n}$.",
        "content_en": "$u_n=n^3-\\dfrac{2}{n}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Xét đáp án A, ta có $u_{n+1}$ - $u_n$ = ( n + 1) - n 2 = 2n + 1 > 0, ∀n ∈ ℕ*\n2 *\nnên dãy này là dãy tăng.\n1 1 -1\nXét đáp án B, ta có $u_{n+1}$ - $u_n$ = - = < 0, ∀n ∈ ℕ*\nnên dãy này là dãy giảm.\nn + 1 n n ( n + 1)\nXét đáp án C, ta có $u_{n+1}$ - $u_n$ = 3 ( n + 1) - 3n = 3 > 0, ∀n ∈ ℕ*\nnên dãy này là dãy tăng.\n10 \nXét đáp án D, ta có $u_{n+1}$ - $u_n$ = ( n + 1) - n3 > 0, ∀n ∈ ℕ*\n3 *\nnên dãy này là dãy tăng.",
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
    "question_vi": "Cho dãy số $(a_n)$ với $a_n=\\dfrac{7n+5}{kn+7}$. Tìm giá trị nguyên k lớn nhất để dãy đã cho là dãy số\ntăng?",
    "question_en": "Given the sequence $(a_n)$ defined by $a_n=\\dfrac{7n+5}{kn+7}$, where $k$ is an integer, find the greatest integer value of $k$ for which the sequence is increasing.",
    "options": [],
    "solution_vi": "7n + 5 7 ( n + 1) + 5 7n + 12\nTa có: an = và an +1 = =.\nkn + 7 k ( n + 1) + 7 kn + k + 7\n7n + 12 7n + 5 -5k + 49\nKhi đó ta có: an +1 - ak = - =\nkn + k + 7 kn + 7 ( kn + k + 7 )( kn + 7 )\n-5k + 49 49\nĐể dãy số tăng khi và chỉ khi an +1 - ak > 0, ∀k ∈ ⇔ >0⇔k <\n( kn + k + 7 )( kn + 7 ) 5\nVậy số nguyên là lớn nhất là k = 9\n{u = 1; $u_{2}$ = 2",
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
    "question_vi": "Vào đầu mỗi tháng, ông An đều gửi vào ngân hàng số tiền cố định 30 triệu đồng theo hình thức\nlãi kép với lãi suất 0, 6% /tháng. Tính số tiền ông An có được sau tháng sau tháng thứ hai",
    "question_en": "At the beginning of each month, Mr. An deposits a fixed amount of 30 million VND in a bank account earning compound interest at 0.6% per month. How much money does he have after the second month?",
    "options": [],
    "solution_vi": "Số tiền ông An có được:\n0,6 ( 0,6 )\nSau tháng thứ nhất là: T1 = 30 + 30 = 30 1 + = 30,18 (triệu đồng).\n100 100 \n( 0,6 ) [ ( 0,6 ) ] 0,6\nSau tháng thứ hai: T2 = 30 + 30 1 + + 30 + 30 1 + \n100 100 100\n[ ( 0,6 ) ] ( 0,6 )\n2\n( 0,6 ) ( 0,6 )\n= 30 + 30 1 + 1 + = 30 1 + + 30 1 + \n100 100 100 100 \n≈ 60,54 (triệu đồng)",
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
    "question_vi": "Giá của một chiếc máy photocopy lúc mới mua là 50 triệu đồng. Biết rằng giá trị của nó sau mỗi\nnăm sử dụng chỉ còn 75% giá trị trong năm liền trước đó. Tính giá trị còn lại của chiếc máy\nphotocopy đó sau mỗi năm, trong khoảng thời gian 5 năm kể từ khi mua.",
    "question_en": "A photocopier costs 50 million VND when new. After each year of use, its value is 75% of its value in the preceding year. Find its remaining value at the end of each of the first five years after purchase.",
    "options": [],
    "solution_vi": "Giá trị của máy photocopy sau 1 năm sử dụng là\nT1 = 50 75% = 37,5 ( triệu đồng )\nGiá trị của máy photocopy sau 2 năm sử dụng là\nT2 = T1 75% = 28,125 ( triệu đồng )\nGiá trị của máy photocopy sau 3 năm sử dụng là\nT3 = T2 75% = 21,0938 ( triệu đồng )\nGiá trị của máy photocopy sau 4 năm sử dụng là\nT4 = T3 75% = 15,8203 ( triệu đồng )\nGiá trị của máy photocopy sau 5 năm sử dụng là\nT5 = T4 75% = 11,8652 ( triệu đồng )\n18 \nChú ý. Tổng quát, giá trị của máy photocopy sau n năm sử dụng là\nTn = T1 (0,75) n -1 ( triệu đồng )",
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
    "question_vi": "Nếu tỉ lệ lạm phát là 3, 5% mỗi năm và giá trung bình của một căn hộ chung cư mới tại thời điểm\nhiện tại là 2, 5 tỉ đồng thì giá trung bình của một căn họ chung cư mới sau n năm nữa được cho\nbởi công thức $A_n=2. 5(1. 035)^n$( tỉ đồng)",
    "question_en": "If the annual inflation rate is 3.5% and the current average price of a new apartment is 2.5 billion VND, then after $n$ years its average price is $A_n=2.5(1.035)^n$ billion VND. Find the average price of a new apartment after 5 years.",
    "options": [],
    "solution_vi": "Giá trung bình của một căn hộ chung cư mới sau 5 năm là\nA5 = 2,5 (1,035)5 = 2,9692 ( tỉ đồng )\nTìm giá trung bình của một căn hộ chung cư mới sau 5 năm nữa.\n-----------------HẾT-----------------",
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
    "question_vi": "Xét tính bị chặn của các dãy số sau: $u_n=3n-1$",
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
    "solution_vi": "Ta có $u_n$ ≥ 2, ∀n ∈ ℕ*\n→ Dãy bị chặn dưới\nKhi n tiến tới dương vô cực thì $u_n$ cũng tiến tới dương vô cực nên dãy số không bị chặn trên\nVậy dãy đã cho bị chặn dưới",
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
    "question_vi": "Xét tính tăng, giảm và bị chặn của dãy số $(u_n)$, biết: $u_n=3n-2$",
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
    "solution_vi": "4 \n2n - 11 2n - 13 34\nTa có: $u_{n+1}$ - $u_n$ = - = > 0 với mọi n ≥ 1.\n3n + 1 3n - 2 ( 3n + 1)( 3n - 2 )\n9\nSuy ra $u_{n+1}$ > $u_n$ ∀n ≥ 1 ⇒ dãy ( $u_n$ ) là dãy tăng ⇒ dãy bị chặn dưới bởi $u_{1}$ = -.\n4\n2 35 9 2\nMặt khác: $u_n$ = - ⇒ - ≤ $u_n$ < ∀n ≥ 1\n3 3(3n - 2) 4 3\nVậy dãy ( $u_n$ ) là dãy bị chặn.\nn +1",
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
    "question_vi": "Xét tính bị chặn của các dãy số sau: $u_n=4-3n-n^2$",
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
    "solution_vi": "2\n25 ( 3 ) 25\nTa có: $u_n$ = -n + < ⇒ ( $u_n$ ) bị chặn trên; dãy ( $u_n$ ) không bị chặn dưới.\n4 2 4",
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
    "question_vi": "Xét tính tăng giảm và bị chặn của dãy số sau: $(u_n)$: $u_n=n+2$",
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
    "solution_vi": "n + 2 n + 1 ( n + 2 ) - ( n + 3)( n + 1)\n2\n1\nTa có $u_{n+1}$ - $u_n$ = - = = > 0, ∀n.\nn+3 n+2 ( n + 2 )( n + 3) ( n + 2 )( n + 3)\nn +1 n + 2\nVà 0 < $u_n$ = < = 1,∀n ∈ ℕ*\n. Vậy dãy ( $u_n$ ) là dãy tăng và bị chặn.\nn+2 n+2",
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
    "question_vi": "Xét tính tăng, giảm và bị chặn của dãy số $(u_n)$, biết: $(u_n)$: $u_n=n^3+2n+1$",
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
    "solution_vi": "Ta có: $u_{n+1}$ - $u_n$ = (n + 1)3 + 2(n + 1) - n3 - 2n = 3n 2 + 3n + 3 > 0, ∀n\nMặt khác: $u_n$ > 1, ∀n và khi n càng lớn thì $u_n$ càng lớn.\nVậy dãy ( $u_n$ ) là dãy tăng và bị chặn dưới.\n3n - 1",
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
    "question_vi": "Cho dãy số $(u_n)$, biết $u_n=\\cos n+\\sin n$. Dãy số $(u_n)$ bị chặn trên bởi số nào dưới đây?",
    "question_en": "Given the sequence $(u_n)$ with $u_n=\\cos n+\\sin n$, which of the following numbers is an upper bound for the sequence?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$0$.",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$1$.",
        "content_en": "$1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\sqrt2$.",
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
    "solution_vi": "Ta có $u_n$ ⎯⎯⎯\nMTCT\n→ $u_{1}$ = sin1 + cos1 > 1 > 0 nên loại các đáp án A và B\n( π)\nTa có $u_n$ = cos n + sin n = 2 sin n + < 2\n4",
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
    "question_vi": "Cho dãy số $(u_n)$, biết $u_n=\\cos n+\\sin n$. Dãy số $(u_n)$ bị chặn dưới bởi số nào dưới đây?",
    "question_en": "Given the sequence $(u_n)$ with $u_n=\\cos n+\\sin n$, which of the following numbers is a lower bound for the sequence?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$0$.",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$-1$.",
        "content_en": "$-1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$-\\sqrt2$.",
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
    "solution_vi": "$u_n$ ⎯⎯⎯\nMTCT\n→ $u_{5}$ = sin 5 - cos5 < -1 < 0 → loại A và B\n( π)\nTa có $u_n$ = 2 sin n - > - 2\n4\n6 \n1 1 1",
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
    "question_vi": "Cho dãy số $(u_n)$ với $u_n=2+5^{1-n}$. Kết luận nào sau đây là đúng?",
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
    "solution_vi": "8 \nXét $u_{n+1}$ - $u_n$ = ( 2 + 5- n ) - ( 2 + 51- n ) = 5- n - 51- n =\n1 1 1 5 4\nn\n- n-1 = n - n = - n < 0, ∀n ∈ ℕ*\n.\n5 5 5 5 5\n⇒ ( $u_n$ ) là dãy số giảm.\n5\nTa có: $u_n$ = 2 + 51- n > 2, ∀n ∈ ℕ*\n≤ 3, ∀n ∈ ℕ* ⇒ ( $u_n$ ) là dãy số bị chặn.\n; $u_n$ = 2 +\nn\n5",
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
    "question_vi": "Cho dãy số $(u_n)$ biết $u_n=\\dfrac12+\\dfrac1{2^2}+\\dfrac1{2^3}+\\cdots+\\dfrac1{2^n}$. Mệnh đề nào sau đây đúng?",
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
    "solution_vi": "1 1 1 1\nXét < = -, ∀k ≥ 2\nk 2\n( k - 1) k k - 1 k\n1 ( 1) (1 1) (1 1) (1 1) ( 1 1) 3 1 3\nSuy ra $u_n$ < + 1 - + - + - + - +... + - = - <\n2 2 2 3 3 4 5 6 n -1 n 2 n 2\n3\n⇒ 0 < $u_n$ <, ∀n ∈ ℕ*. Vậy ( $u_n$ ) bị chặn.\n2",
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
    "question_vi": "Cho dãy số $(u_n)$, biết $u_n=3\\cos n-\\sin n$. Dãy số $(u_n)$ bị chặn dưới và chặn trên lần lượt bởi\ncác số m và M. Tính $m+M$",
    "question_en": "Given the sequence $(u_n)$ with $u_n=3\\cos n-\\sin n$, suppose it is bounded below by $m$ and above by $M$. Calculate $m+M$.",
    "options": [],
    "solution_vi": "( 3 1 ) ( π)\nNhận xét: $u_n$ = 2 sin n - cos n = 2sin n - →-2 ≤ $u_n$ ≤ 2.\n2 2 6\n\nVậy m = -2; M = 2 nên m + M = 0",
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
    "question_vi": "Cho dãy số $(u_n)$, biết $u_n=\\sin n-\\cos n$. Dãy số $(u_n)$ bị chặn dưới bởi số nào?",
    "question_en": "Given the sequence $(u_n)$ with $u_n=\\sin n-\\cos n$, find a lower bound for the sequence.",
    "options": [],
    "solution_vi": "( π)\nTa có $u_n$ = 2 sin n - ≥ - 2\n4",
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
    "question_vi": "Vi khuẩn E. Coli sinh sản thông qua một quá trình gọi là quá trình phân đôi. Vi khuẩn E. Coli\nphân chia làm đôi cứ sau 20 phút. Giả sử tốc độ phân chia này được duy trì trong 12 giờ kể tử\nkhi vi khuẩn ban đầu xâm nhập vào cơ thể. Hỏi sau 12 giờ sẽ có bao nhiêu vi khuẩn E. Coli\ntrong cơ thể? Giả sử có một nguồn dinh dưỡng vô hạn để vi khuẩn E. Coli duy trì tốc độ phân\nchia như cũ trong 48 giờ kể từ khi vi khuẩn ban đầu xâm nhập vào cơ thẻ. Hỏi sau 48 giờ sẽ có\nbao nhiêu vi khuẩn E. Coli trong cơ thể?",
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
    "question_vi": "Cho dãy số có các số hạng đầu là: $-2, 0, 2, 4, 6,\\ldots$;.... Số hạng tổng quát của dãy số này có dạng?",
    "question_en": "A sequence begins $-2,0,2,4,6,\\ldots$. Which formula gives its general term?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_n=-2n$.",
        "content_en": "$u_n=-2n$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_n=-2+n$.",
        "content_en": "$u_n=-2+n$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$u_n=(-2)(n+1)$.",
        "content_en": "$u_n=(-2)(n+1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_n=-2+2(n-1)$.",
        "content_en": "$u_n=-2+2(n-1)$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Dãy số là dãy số cách đều có khoảng cách là 2 và số hạng đầu tiên là ( -2 ) nên\n$u_n$ = ( -2 ) + 2.( n - 1).\n1 1 1 1 1",
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
    "question_vi": "Cho dãy số $(u_n)$, biết $u_n=n^3-8n^2-5n+7$. Số $-33$ là số hạng thứ mấy của dãy số?",
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
    "solution_vi": "[n = 8 ( n )\nTa có $u_n$ = -33 ⇔ n3 - 8n 2 - 5n + 7 = -33 ( n ∈ ℕ*\n) ⇔ n - 8n - 5n + 40 = 0 ⇔ n = ± 5 l\n3 2\n()\nn 2 + 3n + 7",
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
    "question_vi": "Cho dãy số $(u_n)$ với $u_n=2n$. Tìm số hạng $u_{n+1}$.",
    "question_en": "Given the sequence $(u_n)$ with $u_n=2n$, find an expression for $u_{n+1}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$u_{n+1}=2n\\cdot2$.",
        "content_en": "$u_{n+1}=2n\\cdot2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$u_{n+1}=2n+1$.",
        "content_en": "$u_{n+1}=2n+1$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$u_{n+1}=2(n+1)$.",
        "content_en": "$u_{n+1}=2(n+1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$u_{n+1}=2n+2$.",
        "content_en": "$u_{n+1}=2n+2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có $u_{n+1}$ = 2n +1 = 2.2n\n{u = 2",
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
    "question_vi": "Cho hai cấp số cộng $(u_n): 1, 6, 11,\\ldots$;... và $(v_n): 4, 7, 10,\\ldots$;... Mỗi cấp số có 2018 số. Hỏi có bao nhiêu số có mặt trong cả hai dãy số trên.",
    "question_en": "Consider the two arithmetic progressions $(u_n): 1,6,11,\\ldots$ and $(v_n):4,7,10,\\ldots$, each consisting of 2018 terms. How many numbers occur in both progressions?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "403.",
        "content_en": "403.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "401.",
        "content_en": "401.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "402.",
        "content_en": "402.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "504.",
        "content_en": "504.",
        "is_correct": false
      }
    ],
    "solution_vi": "Dãy ( $u_n$ ) có số hạng tổng quát là $u_n$ = 1 + 5 ( n - 1) = 5n - 4, (1 ≤ n ≤ 2018 ).\nDãy ( vm ) có số hạng tổng quát là vm = 4 + 3 ( m - 1) = 3m + 1, (1 ≤ m ≤ 2018 ).\n{1 ≤ m, n ≤ 2018\nMột số có mặt trong cả hai dãy số trên nếu tồn ại m, n ∈ thỏa mãn điều kiện: \num = $u_n$ (*)\nTa có (*) ⇔ 5n - 4 = 3m + 1 ⇔ 5 ( n - 1) = 3m (**)\nTừ (**) suy ra m 5, mặt khác 1 ≤ m ≤ 2018 nên ta được tập các giá trị của m là {5;10;...;2015}\n3.2015\nXét với m = 2015 thì n = + 1 = 1210 < 2018, thỏa điều kiện 1 ≤ n ≤ 2018.\n5\nDo tập {5;10;...;2015} có 403 số nên có tất cả 403 số có mặt trong cả hai dãy đã cho.\n{$u_{1}$ = 3",
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
    "question_vi": "Cho dãy số $(u_n)$ với $u_n=2n+3$. Tìm số hạng thứ 6 của dãy số.",
    "question_en": "Given the sequence $(u_n)$ defined by $u_n=2n+3$, find its sixth term.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "17.",
        "content_en": "17.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "5.",
        "content_en": "5.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "15.",
        "content_en": "15.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "7.",
        "content_en": "7.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có số hạng thứ 6 của dãy là $u_{6}$ = 2.6 + 3 = 15.\nn -1",
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
    "question_vi": "Cho dãy số $(u_n)$ có $u_n=-n^2+n+1$. Số $-19$ là số hạng thứ mấy của dãy?",
    "question_en": "Given the sequence $(u_n)$ with $u_n=-n^2+n+1$, which term of the sequence is equal to $-19$?",
    "options": [],
    "solution_vi": "Giả sử $u_n$ = -19, ( n ∈ ℕ*\n).\n[n = 5\nSuy ra -n 2 + n + 1 = -19 ⇔ - n 2 + n + 20 = 0 ⇔.\nn = -4 ( l )\nVậy số -19 là số hạng thứ 5 của dãy.\nan + b",
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
    "question_vi": "Trong không gian Oxyz, cho hai véctơ $\\vec a=(1,-2, 1)$ và $\\vec b=(2,-4,-2)$. Khi đó $\\vec a\\cdot\\vec b$ bằng",
    "question_en": "In Oxyz space, let $\\vec a=(1,-2,1)$ and $\\vec b=(2,-4,-2)$. Find $\\vec a\\cdot\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$8$.",
        "content_en": "$8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$-8$.",
        "content_en": "$-8$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$12$.",
        "content_en": "$12$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$-12$.",
        "content_en": "$-12$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: a.b = 1.2 + ( -2 ).( -4 ) + 1.( -2 ) = 8.",
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
    "question_vi": "Trong không gian Oxyz, cho $\\vec u=(1, 2, 3)$, $\\vec v=(0,-1, 1)$. Tìm tọa độ của véctơ tích có hướng của hai véctơ $\\vec{u}$ và $\\vec{v}$.",
    "question_en": "In Oxyz space, let $\\vec u=(1,2,3)$ and $\\vec v=(0,-1,1)$. Find $\\vec u\\times\\vec v$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(5,1,-1)$.",
        "content_en": "$(5,1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(5,-1,-1)$.",
        "content_en": "$(5,-1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(-1,-1,-1)$.",
        "content_en": "$(-1,-1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(-1,-1,5)$.",
        "content_en": "$(-1,-1,5)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: [u, v ] = ( 5; -1; -1).",
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
    "question_vi": "Trong không gian Oxyz, cho $\\vec a=(-3,-1, 1)$, $\\vec b=(4, 1, 2)$, $\\vec c=(1, 0, m+2)$. Tìm m để ba véc tơ $\\vec{a}$, b, c đồng phẳng.",
    "question_en": "In Oxyz space, let $\\vec a=(-3,-1,1)$, $\\vec b=(4,1,2)$, and $\\vec c=(1,0,m+2)$. Find $m$ so that the three vectors are coplanar.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m=-5$.",
        "content_en": "$m=-5$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m=5$.",
        "content_en": "$m=5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m=-1$.",
        "content_en": "$m=-1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m=1$.",
        "content_en": "$m=1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "( -1 1 1 -3 -3 -1 )\nTa có: [ a, b ] =;; = ( -3;10;1).\n1 2 2 4 4 1 \nMà [ a, b ].c = ( -3).1 + 1.( m + 2 ) = m - 1.\nBa véc tơ a, b, c đồng phẳng ⇔ [ a, b ].c = 0 ⇔ m - 1 = 0 ⇔ m = 1.",
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
    "question_vi": "Trong không gian với hệ toạ độ Oxyz cho A (1; -2; 0 ); B (1; 0; -1); C ( 0; -1; 2 ) và D ( 0; 3; m ). Giá trị của m thuộc khoảng nào sau đây để bốn điểm trên đồng phẳng?",
    "question_en": "In Oxyz space, given A(1,-2,0), B(1,0,-1), C(0,-1,2), and D(0,3,m), which interval contains m if the four points are coplanar?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-2,-1)$.",
        "content_en": "$(-2,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-1,1)$.",
        "content_en": "$(-1,1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(1,2)$.",
        "content_en": "$(1,2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(5,7)$.",
        "content_en": "$(5,7)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = ( 0;2; -1); AC = ( -1;1;2 ); AD = ( -1;5; m )\n[ AB; AC ] = ( 5;1;2 )\n\nA, B, C, D đồng phẳng ⇔ [ AB; AC ]. AD = 0 ⇔ 2m = 0 ⇔ m = 0",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz, cho hai véc-tơ $\\vec a=(-1, 3, 2)$, $\\vec b=(-3,-1, 2)$. Tính $\\vec a\\cdot\\vec b$.",
    "question_en": "In Oxyz space, let $\\vec a=(-1,3,2)$ and $\\vec b=(-3,-1,2)$. Find $\\vec a\\cdot\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$10$.",
        "content_en": "$10$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$2$.",
        "content_en": "$2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$4$.",
        "content_en": "$4$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$3$.",
        "content_en": "$3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "a b = ( -1) ( -3) + 3 ( -1) + 2 2 = 4.",
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
    "question_vi": "Trong không gian Oxyz, cho hai vectơ $\\vec u=(-3, 1,-1)$ và $\\vec v=(1, 0, 5)$. Tích vô hướng của hai vectơ này bằng",
    "question_en": "In Oxyz space, let $\\vec u=(-3,1,-1)$ and $\\vec v=(1,0,5)$. Find $\\vec u\\cdot\\vec v$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$-8$.",
        "content_en": "$-8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$8$.",
        "content_en": "$8$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$3$.",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$-3$.",
        "content_en": "$-3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tích vô hướng của hai vectơ u = ( -3;1; - 1) và v = (1;0;5 ) xác định bởi công thức:\nu.v = ( -3).1 + 1.0 + ( -1).5 = -8.",
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
    "question_vi": "Trong không gian Oxyz, cho hai vectơ $\\vec u=(-1, 3, 2)$ và $\\vec v=(-3,-1, 2)$. Tích vô hướng của $\\vec u\\cdot\\vec v$ bằng",
    "question_en": "In Oxyz space, let $\\vec u=(-1,3,2)$ and $\\vec v=(-3,-1,2)$. Find $\\vec u\\cdot\\vec v$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$3$.",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$2$.",
        "content_en": "$2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$10$.",
        "content_en": "$10$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$4$.",
        "content_en": "$4$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có u.v = 3 - 3 + 4 = 4.",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz, Cho tam giác ABC với A (1; 2; 3), B ( 0; 1; 4 ) và C ( 2; 3; -2 ). Tính diện tích S của tam giác ABC.",
    "question_en": "In Oxyz space, let A(1,2,3), B(0,1,4), and C(2,3,-2). Find the area S of triangle ABC.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$S=2\\sqrt2$.",
        "content_en": "$S=2\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$S=6\\sqrt2$.",
        "content_en": "$S=6\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$S=4\\sqrt2$.",
        "content_en": "$S=4\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$S=3\\sqrt2$.",
        "content_en": "$S=3\\sqrt2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = ( -1; -1;1), AC = (1;1; -5 )\n1\n[ AB, AC ] = 2 2.\nVậy S∆ABC =\n2",
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
    "question_vi": "Trong không gian với hệ trục tọa độ O xyz, cho hai vectơ $\\vec a=(3,-2, m)$, $\\vec b=(2, m,-1)$ với m là tham số nhận giá trị thực. Tìm giá trị của m để hai vectơ $\\vec{a}$ và $\\vec{b}$ vuông góc với nhau.",
    "question_en": "In Oxyz space, let $\\vec a=(3,-2,m)$ and $\\vec b=(2,m,-1)$. Find $m$ so that the vectors are perpendicular.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m=1$.",
        "content_en": "$m=1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m=2$.",
        "content_en": "$m=2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m=-1$.",
        "content_en": "$m=-1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m=-2$.",
        "content_en": "$m=-2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Hai vectơ a và b vuông góc với nhau khi và chỉ khi a.b = 0 ⇔ 3.2 + ( -2 ).m + m. ( -1) = 0\n⇔ 6 - 3m = 0 ⇔ m = 2.",
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
    "question_vi": "Trong không gian với hệ trục tọa độ Oxyz, điểm thuộc Ox và cách đều hai điểm A ( 4; 2; -1) và B ( 2; 1; 0 ) là",
    "question_en": "In Oxyz space, which point on the x-axis is equidistant from A(4,2,-1) and B(2,1,0)?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$M(-4,0,0)$.",
        "content_en": "$M(-4,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$M(5,0,0)$.",
        "content_en": "$M(5,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$M(4,0,0)$.",
        "content_en": "$M(4,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$M(-5,0,0)$.",
        "content_en": "$M(-5,0,0)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi M ( x;0;0 ) là điểm thuộc Ox. (với x ∈ )\nĐiểm M cách đều hai điểm A ( 4;2; -1) và B ( 2;1;0 ) khi và chỉ khi\nMA = MB ⇔ ( 4 - x ) + 22 + ( -1) = ( 2 - x ) + 12 ⇔ 21 - 8 x + x^2 = 5 - 4 x + x^2 ⇔ x = 4.\n2 2 2\nVậy M ( 4;0;0 ).",
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
    "question_vi": "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ tạo với nhau một góc $60^\\circ$ và $|\\vec a|=2$; $|\\vec b|=4$. Khi đó $|\\vec a+\\vec b|$ bằng",
    "question_en": "Two vectors $\\vec a$ and $\\vec b$ form a $60^\\circ$ angle, with $|\\vec a|=2$ and $|\\vec b|=4$. Find $|\\vec a+\\vec b|$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$2\\sqrt5$.",
        "content_en": "$2\\sqrt5$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$2\\sqrt7$.",
        "content_en": "$2\\sqrt7$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$2$.",
        "content_en": "$2$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$\\sqrt{8\\sqrt3+20}$.",
        "content_en": "$\\sqrt{8\\sqrt3+20}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "( ) = ( a ) + 2ab + (b ) = a + 2 a b cos ( a, b ) + b^2 2 2 2 2 2\nTa có a + b = a + b\n1\n= 4 + 2.2.4. + 16 = 28 ⇒ a + b = 28 = 2 7.\n2",
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
    "question_vi": "Trong không gian Oxyz, cho tam giác ABC có $\\vec{AB}=(-3, 0, 4)$, $\\vec{AC}=(5,-2, 4)$. Độ dài đường trung tuyến AM là",
    "question_en": "In Oxyz space, triangle ABC has $\\vec{AB}=(-3,0,4)$ and $\\vec{AC}=(5,-2,4)$. Find the length of median AM.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$3\\sqrt2$.",
        "content_en": "$3\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$5\\sqrt2$.",
        "content_en": "$5\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$4\\sqrt2$.",
        "content_en": "$4\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$2\\sqrt3$.",
        "content_en": "$2\\sqrt3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB + AC = ( 2; - 2;8) ⇒ AM =\n1\n2\n( )\nAB + AC = (1; - 1;4 ).\nKhi đó AM = AM = 12 + ( -1) + 42 = 3 2.\n2",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz, cho hai điểm A (1; 2; -1), B ( 2; 1; 2 ). Điểm M trên trục Ox có hoành độ dương và thỏa mãn $MA^2+MB^2=23$. Khi đó tọa độ điểm M là",
    "question_en": "In Oxyz space, let A(1,2,-1) and B(2,1,2). Point M lies on the positive x-axis and satisfies $MA^2+MB^2=23$. Find M.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$M(4,0,0)$.",
        "content_en": "$M(4,0,0)$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$M(3,0,0)$.",
        "content_en": "$M(3,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$M(2,0,0)$.",
        "content_en": "$M(2,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$M(1,0,0)$.",
        "content_en": "$M(1,0,0)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Điểm M thuộc trục Ox có hoành độ dương suy ra M ( a;0;0 ), a > 0.\nTa có: MA = (1 - a;2; -1), MB = ( 2 - a;1;2 ).\n8 \nGiả thiết: MA2 + MB 2 = 23 ⇔ (1 - a ) + 4 + 1 + ( 2 - a ) + 1 + 4 = 23.\n2 2\n[ a = -1, ( l )\n⇔ a^2 - 3a - 4 = 0 ⇔. Vậy M ( 4;0;0 ).\na = 4, ( t / m )",
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
    "question_vi": "Trong không gian Oxyz, cho hai vec $\\vec u=(-2, 1, 5)$ và $\\vec v=(m-2, 3, m+1)$, m là tham số. Tìm m để u vuông góc với v.",
    "question_en": "In Oxyz space, let $\\vec u=(-2,1,5)$ and $\\vec v=(m-2,3,m+1)$. Find $m$ so that $\\vec u\\perp\\vec v$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m=-4$.",
        "content_en": "$m=-4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m=4$.",
        "content_en": "$m=4$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m=-3$.",
        "content_en": "$m=-3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m=3$.",
        "content_en": "$m=3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "u vuông góc với v ⇔ u.v = 0 ⇔ -2.( m - 2 ) + 3 + 5.( m + 1) = 0 ⇔ 3m + 12 = 0 ⇔ m = -4.\n( )",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz, cho bốn điểm A (1; 1; 4 ), B ( 5; -1; 3), C ( 3; 1; 5 ) và D ( 2; 2; m ) ( với m là tham số). Xác định m để bốn điểm A, B, C, D tạo thành bốn đỉnh của một tứ diện.",
    "question_en": "In Oxyz space, let A(1,1,4), B(5,-1,3), C(3,1,5), and D(2,2,m), where m is a real parameter. Determine the condition on m for A, B, C, and D to be the four vertices of a tetrahedron.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m\\ne6$.",
        "content_en": "$m\\ne6$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$m\\ne4$.",
        "content_en": "$m\\ne4$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m\\in\\mathbb R$.",
        "content_en": "$m\\in\\mathbb R$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m<0$.",
        "content_en": "$m<0$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = ( 4; -2; - 1), AC = ( 2;0;1), AD = (1;1; m - 4 ).\n[ AB, AC ] = ( -2; -6;4 ), [ AB, AC ]. AD = -2 - 6 + 4 ( m - 4 ) = 4m - 24.\n\nBốn điểm A, B, C, D tạo thành bốn đỉnh của một tứ diện khi và chỉ khi\n[ AB, AC ]. AD = 4m - 24 ≠ 0 ⇔ m ≠ 6.",
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
    "question_vi": "Trong hệ trục Oxyz, cho 3 điểm A (1; 0; 0 ), B ( 0; 0; 1), C ( 2; 1; 1). Xét tính đúng sai của các mệnh đề sau: 6",
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
        "content_vi": "Gọi D ( x; y; z ) sao cho tứ giác ABCD là một hình bình hành khi đó $x+y+z=3$ 30",
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
        "content_vi": "Thể tích của khối chóp SABCD với đỉnh S ( 0; 3; 4 ) bằng 2 (đvtt)",
        "content_en": "For S(0,3,4), the volume of pyramid SABCD is 2 cubic units.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Ta có AB = ( -1;0;1), AC = (1;1;1)\n( 0 1 1 1 -1 0 )\nTính [ AB, AC ] =;; = ( -1;2; -1) ≠ 0\n1 1 -1 1 1 1 \nDo đó 2 véc tơ AB và AC không cùng phương. Vậy A, B, C là 3 đỉnh của một tam giác\n1 1 6\nDiện tích tam giác ABC: S∆ABC = [ AB, AC ] = ( -1) + 22 + ( -1) =\n2 2\n(đvdt)\n2 2 2\nb) Sai: ABCD là hình bình hành khi và chỉ khi AD = BC.\nGọi D ( x; y; z ) ta có: AD = ( x - 1; y; z ); BC = ( 2;1;0 )\n{x -1 = 2 {x = 3\n\nVậy AD = BC ⇔ y = 1 ⇔ y =1\nz = 0 z = 0\n\n1 6 6\nc) Đúng: Diện tích ∆ABC = AH BC = ⇔ AH =.\n2 2 BC\n30\nTa có BC = 5 ⇔ AH = (đơn vị dài)\n5\nd) Sai: Thể tích của khối chóp SABCD = V\n1\nTa có V = 2VSABC = [ AB, AC ] AS\n3\nTính AS = (-1;3;4) do kết quả câu 1 nên [ AB, AC ]. AS = 1 + 6 - 4 = 3 > 0 do đó V = 1 (đvtt)",
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
    "question_vi": "Trong không gian $Oxyz$, cho hai vectơ $\\vec u=(1; 1; 0)$ và $\\vec v=(2; 0;-1)$. Tính độ dài $|\\vec u+2\\vec v|$, làm tròn đến hàng phần nghìn.",
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
    "question_vi": "Trong không gian $Oxyz$, cho tứ diện $ABCD$ có $A(2,-1,1)$, $B(3,0,-1)$, $C(2,-1,3)$ và $D\\in Oy$. Thể tích tứ diện $ABCD$ bằng 5. Tính tổng tung độ của các điểm $D$ thỏa mãn yêu cầu bài toán.",
    "question_en": "In Oxyz space, tetrahedron ABCD has A(2,-1,1), B(3,0,-1), C(2,-1,3), and D on the y-axis. Its volume is 5. Find the sum of the y-coordinates of all points D satisfying these conditions.",
    "options": [],
    "solution_vi": "Do D ∈ Oy ⇒ D ( 0; y;0 ).\nKhi đó DA = ( 2; -1 - y;1), DB = ( 3; - y; -1), DC = ( 2; -1 - y;3).\nTa có [ DA, DB ] = (1 + 2 y;5; y + 3).\n[ DA, DB ]. DC = 2 + 4 y - 5 - 5 y + 3 y + 9 = 2 y + 6.\n\n1 [ 2 y + 6 = 30 [ y = 12\nVà VABCD = [ DA, DB ].DC = 5 ⇔ ⇔.\n6 2 y + 6 = -30 y = -18\nVậy y1 + y2 = 12 - 18 = -6.",
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
    "question_vi": "Trong mặt phẳng tọa độ Oxy cho các điểm A ( 2; 0; 2 ), B ( 0; 2; 0 ), C (1; 0; 3). Gọi M là điểm\ntrong không gian thỏa mãn $MA^2+MC^2=MB^2$. Tính MP với P ( 3; - 2; 5 ).",
    "question_en": "In Oxyz space, let A(2,0,2), B(0,2,0), and C(1,0,3). Point M satisfies $MA^2+MC^2=MB^2$. Find $MP$, where P(3,-2,5).",
    "options": [],
    "solution_vi": "Gọi I ( x; y; z ) là điểm thỏa mãn IA + IC = IB (*).\nTa có IA = ( 2 - x; - y;2 - z ); IB = ( - x;2 - y; - z ); IC = (1 - x; - y;3 - z ).\n{2 - x + 1 - x = - x {x = 3\n\nKhi đó (*) ⇔ - y - y = 2 - y ⇔ y = -2 ⇒ I ( 3; - 2;5 ) ≡ P.\n2 - z + 3 - z = - z z = 5\n\nSuy ra IA = ( -1;2; - 3) ⇒ IA2 = 14; IB = ( -3;4; - 5 ) ⇒ IB 2 = 50; IC = ( -2;2; - 2 ) ⇒ IC 2 = 12.\nTa có MA2 + MC 2 = MB 2 ⇔ MA2 + MC 2 - MB 2 = 0.\n( ) ( ) - ( MI + IB )\n2 2 2\nKhi đó MA2 + MC 2 - MB 2 = MI + IA + MI + IC\n= MI 2 + IA2 + 2MI.IA + MI 2 + IC 2 + 2MI.IC - MI 2 - IB 2 - 2MI.IB\n16 \n( )\n= MI 2 + ( IA2 + IC 2 - IB 2 ) + 2MI IA + IC - IB = 0 hay\n⇔ MP 2 + (14 + 12 - 50 ) = 0 ⇔ MP 2 = 24 ⇒ MP = 2 6.",
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
    "question_vi": "Hai chiếc máy bay không người lái cùng bay lên tại một địa điểm. Sau một thời gian bay, chiếc\nmáy bay thứ nhất cách điểm xuất phát về phía Bắc 20 ( km ) và về phía Tây 10 ( km ), đồng thời\ncách mặt đất 0, 7 ( km ). Chiếc máy bay thứ hai cách điểm xuất phát về phía Đông 30 ( km ) và về\nphía Nam 25 ( km ), đồng thời cách mặt đất 1( km ). Xác định khoảng cách giữa hai chiếc máy\nbay.",
    "question_en": "Two drones take off from the same point. After some time, the first drone is 20 km north and 10 km west of the starting point at an altitude of 0.7 km. The second drone is 30 km east and 25 km south of the starting point at an altitude of 1 km. Find the distance between the two drones.",
    "options": [],
    "solution_vi": "Chọn hệ trục tọa độ Oxyz, với gốc đặt tại điểm xuất phát của hai chiếc máy bay, mặt phẳng\n( Oxy ) trùng với mặt đất, trục Ox hướng về phía Bắc, trục Oy hướng về phía Tây, trục Oz\nhướng thẳng đứng lên trời, đơn vị đo lấy theo kilômét (xem hình vẽ).\nChiếc máy bay thứ nhất có tọa độ ( 20;10;0,7 ).\nChiếc máy bay thứ hai có tọa độ ( -30; -25;1).\n( 20 + 30 ) + (10 + 25) + ( 0,7 - 1) ≈ 61( km )\n2 2 2\nDo đó khoảng cách giữa hai chiếc máy bay là:",
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
    "question_vi": "Hai chiếc khinh khí cầu cùng bay lên tại một địa điểm. Sau một thời gian bay, chiếc khinh khí\ncầu thứ nhất cách điểm xuất phát về phía Đông 100 ( km ) và về phía Nam 80 ( km ), đồng thời\ncách mặt đất 1( km ). Chiếc khinh khí cầu thứ hai cách điểm xuất phát về phía Bắc 70 ( km ) và về\nphía Tây 60 ( km ), đồng thời cách mặt đất 0, 8 ( km ).\nXác định khoảng cách giữa chiếc khinh khí cầu thứ nhất và chiếc khinh khí cầu thứ hai.",
    "question_en": "Two hot-air balloons take off from the same point. After some time, the first balloon is 100 km east and 80 km south of the starting point at an altitude of 1 km. The second balloon is 70 km north and 60 km west of the starting point at an altitude of 0.8 km. Find the distance between the two balloons.",
    "options": [],
    "solution_vi": "Chọn hệ trục tọa độ Oxyz, với gốc đặt tại điểm xuất phát của hai chiếc khinh khí cầu, mặt phẳng\n( Oxy ) trùng với mặt đất, trục Ox hướng về phía Bắc, trục Oy hướng về phía Tây, trục Oz\nhướng thẳng đứng lên trời, đơn vị đo lấy theo kilômét (xem hình vẽ).\nChiếc khinh khí cầu thứ nhất có tọa độ ( -100; -80;1).\nChiếc khinh khí cầu thứ hai có tọa độ ( 70;60;0,8 ).\nKhoảng cách của chiếc khinh khí cầu thứ nhất với vị trí tại điểm xuất phát của nó là:\n( -100 ) + ( -80 ) + 12 ≈ 128 ( km )\n2 2\nKhoảng cách giữa chiếc khinh khí cầu thứ nhất và chiếc khinh khí cầu thứ hai là:\n( -100 - 70 ) + ( -80 - 60 ) + (1 - 0,8) ≈ 220 ( km )\n2 2 2",
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
    "question_vi": "Ba chiếc máy bay không người lái cùng bay lên tại một địa điểm. Sau một thời gian bay, chiếc\nmáy bay thứ nhất cách điểm xuất phát về phía Đông 60 ( km ) và về phía Nam 40 ( km ), đồng thời\ncách mặt đất 2 ( km ). Chiếc máy bay thứ hai cách điểm xuất phát về phía Bắc 80 ( km ) và về phía\n18 \nTây 50 ( km ), đồng thời cách mặt đất 4 ( km ). Chiếc máy bay thứ ba nằm chính giữa của chiếc\nmáy bay thứ nhất và thứ hai, đồng thời ba chiếc máy bay này thẳng hàng.\nXác định khoảng cách của chiếc máy bay thứ ba với vị trí tại điểm xuất phát của nó.",
    "question_en": "Three drones take off from the same point. After some time, the first drone is 60 km east and 40 km south of the starting point at an altitude of 2 km. The second drone is 80 km north and 50 km west of the starting point at an altitude of 4 km. The third drone is midway between the first two drones, and the three drones are collinear. Find the distance from the third drone to the starting point.",
    "options": [],
    "solution_vi": "Chọn hệ trục tọa độ Oxyz, với gốc đặt tại điểm xuất phát của hai chiếc máy bay, mặt phẳng\n( Oxy ) trùng với mặt đất, trục Ox hướng về phía Bắc, trục Oy hướng về phía Tây, trục Oz\nhướng thẳng đứng lên trời, đơn vị đo lấy theo kilômét (xem hình vẽ).\nChiếc máy bay thứ nhất có tọa độ ( -60; -40;2 ).\nChiếc máy bay thứ hai có tọa độ ( 80;50;4 ).\nDo chiếc máy bay thứ ba nằm chính giữa của chiếc máy bay thứ nhất và thứ hai, đồng thời ba\nchiếc máy bay này thẳng hàng nên ở vị trí trung điểm, suy ra chiếc máy bay thứ ba có tọa độ\n( -60 + 80 -40 + 50 2 + 4 )\n;; = (10;5;3).\n2 2 2 \nKhoảng cách giữa chiếc máy bay thứ nhất và chiếc máy bay thứ hai:\n( -60 - 80 ) + ( -40 - 50 ) + ( 2 - 4 ) ≈ 166,4 ( km )\n2 2 2\nKhoảng cách của chiếc máy bay thứ ba với vị trí tại điểm xuất phát của nó là:\n102 + 52 + 32 ≈ 11,6 ( km )\n-----------------HẾT-----------------",
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
    "question_vi": "Trong không gian Oxyz, cho $\\vec a=2\\vec j-3\\vec k$, $\\vec b=4\\vec i+\\vec j+\\vec k$. Tính độ dài của $\\vec v=2\\vec a-\\vec b$",
    "question_en": "In Oxyz space, let $\\vec a=2\\vec j-3\\vec k$ and $\\vec b=4\\vec i+\\vec j+\\vec k$. Find the length of $\\vec v=2\\vec a-\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\sqrt{74}$.",
        "content_en": "$\\sqrt{74}$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$3\\sqrt6$.",
        "content_en": "$3\\sqrt6$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$5\\sqrt2$.",
        "content_en": "$5\\sqrt2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$\\sqrt{42}$.",
        "content_en": "$\\sqrt{42}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "( ) ( )\nTa có: v = 2a - b = 2 2 j - 3k - 4i + j + k = 4 j - 6k - 4i - j - k = -4i + 3 j - 7k\n⇒ v = ( -4;3; - 7 ) ⇒ v = ( -4 ) + 32 + ( -7 ) = 74.\n2 2",
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
    "question_vi": "Trong không gian Oxyz, cho ba điểm A ( 2; - 1; 5 ), B ( 5; - 5; 7 ); M ( x; y; 1). Khi A, B, M thẳng hàng thì giá trị của x; y là",
    "question_en": "In Oxyz space, given A(2,-1,5), B(5,-5,7), and M(x,y,1), if A, B, and M are collinear, find x and y.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$x=4,y=-7$.",
        "content_en": "$x=4,y=-7$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$x=-4,y=7$.",
        "content_en": "$x=-4,y=7$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$x=4,y=7$.",
        "content_en": "$x=4,y=7$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$x=-4,y=-7$.",
        "content_en": "$x=-4,y=-7$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = ( 3; - 4;2 ); AM = ( x - 2; y + 1; - 4 )\nx - 2 y + 1 -4 { x = -4\nĐể ba điểm A, B, M thẳng hàng thì = = ⇒.\n3 -4 2 y = 7",
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
    "question_vi": "Trong không gian Oxyz cho 3 diểm A (1, 2, -1), B ( 2, -1, 3), C ( -3, 5, 1). Tọa độ điểm D sao cho tứ giác ABCD là hình bình hành là",
    "question_en": "In Oxyz space, given A(1,2,-1), B(2,-1,3), and C(-3,5,1), find D so that ABCD is a parallelogram.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-2,2,5)$.",
        "content_en": "$(-2,2,5)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-4,8,-5)$.",
        "content_en": "$(-4,8,-5)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(-4,8,-3)$.",
        "content_en": "$(-4,8,-3)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$(-2,8,-3)$.",
        "content_en": "$(-2,8,-3)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = (1, -3, 4 ); AC = ( -4,3, 2 ) Suy ra AB, AC không cùng phương.\nGọi D ( x, y, z ); DC = ( -3 - x,5 - y,1 - z )\n{ -3 - x = 1\n\nTứ giác ABCD là hình bình hành ⇔ AB = DC ⇔ 5 - y = -3 ⇒ D ( -4,8, -3)\n1 - z = 4",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz, cho tứ diện ABCD với A (1; -4; 2 ), B ( 2; 1; -3), C ( 3; 0; -2 ) và D ( 2; -5; -1). Điểm G thỏa mãn $\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$ có tọa độ là:",
    "question_en": "In Oxyz space, let A(1,-4,2), B(2,1,-3), C(3,0,-2), and D(2,-5,-1). Point G satisfies $\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$. Find G.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$G(2,-1,-1)$.",
        "content_en": "$G(2,-1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$G(2,-2,-1)$.",
        "content_en": "$G(2,-2,-1)$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$G(0,-1,-1)$.",
        "content_en": "$G(0,-1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$G(6,-3,-3)$.",
        "content_en": "$G(6,-3,-3)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: GA + GB + GC + GD = 0 ⇔ GO + OA + GO + OB + GO + OC + GO + OD = 0\n⇔ 4OG = OA + OB + OC + OD ⇔ OG =\n1\n4\n(OA + OB + OC + OD )\n6 \n{ 1\nxG = 4 ( x A + xB + xC + xD ) = 2\n\n1\n⇒ yG = ( y A + yB + yC + yD ) = -2. Vậy G ( 2; -2; -1).\n4\n1\nzG = 4 ( z A + z B + zC + z D ) = - 1",
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
    "question_vi": "Trong không gian Oxyz, cho tam giác ABC có A (1; -1; -2 ) và trọng tâm G ( 2; 1; -3). Tọa độ của vectơ $\\vec u=\\vec{AB}+\\vec{AC}$ là",
    "question_en": "In Oxyz space, triangle ABC has A(1,-1,-2) and centroid G(2,1,-3). Find the coordinates of $\\vec u=\\vec{AB}+\\vec{AC}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(3,6,3)$.",
        "content_en": "$(3,6,3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(3,6,-3)$.",
        "content_en": "$(3,6,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(3,-3,6)$.",
        "content_en": "$(3,-3,6)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(3,2,1)$.",
        "content_en": "$(3,2,1)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "3\nGọi M là trung điểm cạnh BC. Ta có: u = AB + AC = 2. AM = 2.. AG = 3 AG = ( 3;6; -3)\n2",
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
    "question_vi": "Trong hệ trục tọa độ Oxyz, cho hai vectơ $\\vec{PQ}=(0, 1,-2)$, $\\vec{PR}=(-2,-1, 0)$ và điểm M (1; - 2; 2 ) trung điểm của đoạn QR. Tọa độ điểm Q là",
    "question_en": "In Oxyz space, $\\vec{PQ}=(0,1,-2)$, $\\vec{PR}=(-2,-1,0)$, and M(1,-2,2) is the midpoint of QR. Find Q.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-1,1,-2)$.",
        "content_en": "$(-1,1,-2)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-2,2,-3)$.",
        "content_en": "$(-2,2,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(0,1,3)$.",
        "content_en": "$(0,1,3)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(2,-1,1)$.",
        "content_en": "$(2,-1,1)$.",
        "is_correct": true
      }
    ],
    "solution_vi": "{ xQ - xR = 2\n\nTa có RQ = PQ - PR = ( 2;2; - 2 ) suy ra yQ - yR = 2 (1).\n\nzQ - z R = -2\n{ xQ + xR = 2\n\nVì điểm M (1; - 2;2 ) trung điểm của đoạn QR nên yQ + yR = -4 (2).\n\nzQ + z R = 4\nTừ (1) và ( 2 ) suy ra Q ( 2; - 1;1).",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz, cho ba điểm A (1; 2; -1), B ( 2; -1; 3), C ( -2; 3; 3). Điểm M ( a; b; c ) là đỉnh thứ tư của hình bình hành ABCM, khi đó $P=a^2+b^2-c^2$ có giá trị bằng",
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
    "solution_vi": "{a + 2 = 1 - 2 {a = -3\n\nTứ giác ABCM là hình bình hành khi và chỉ khi: CM = BA ⇔ b - 3 = 2 - ( -1) ⇔ b = 6.\nc - 3 = -1 - 3 c = -1\n\nSuy ra: P = a^2 + b^2 - c^2 = ( -3) + 62 - ( -1) = 44.\n2 2",
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
    "question_vi": "Trong không gian Oxyz, cho điểm A ( 2; 1; 3) và điểm B ( 4; -3; 1). Tọa độ trung điểm I của đoạn thẳng AB là 8",
    "question_en": "In Oxyz space, given A(2,1,3) and B(4,-3,1), find the midpoint I of AB.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(6,-2,4)$.",
        "content_en": "$(6,-2,4)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(3,-1,2)$.",
        "content_en": "$(3,-1,2)$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$(1,-2,-1)$.",
        "content_en": "$(1,-2,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(2,-4,-2)$.",
        "content_en": "$(2,-4,-2)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{ x A + xB 2 + 4\nxI = 2\n=\n2\n=3\n\ny + yB 1 + ( -3)\nTa có tọa độ trung điểm I ( xI; yI; z I ) là yI = A = = -1 ⇒ I ( 3; -1;2 ).\n2 2\nz A + zB 3 + 1\nzI = 2 = 2 = 2",
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
    "question_vi": "Trong không gian hệ toạ độ Oxyz, cho ba vectơ $\\vec a=(3, 4, 2)$; $\\vec b=(-5, 0, 3)$; $\\vec c=(1, 2,-4)$. Tìm toạ độ của vectơ $\\vec u=3\\vec a+2\\vec b-\\vec c$:",
    "question_en": "In Oxyz space, let $\\vec a=(3,4,2)$, $\\vec b=(-5,0,3)$, and $\\vec c=(1,2,-4)$. Find $\\vec u=3\\vec a+2\\vec b-\\vec c$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-2,10,16)$.",
        "content_en": "$(-2,10,16)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(2,10,-16)$.",
        "content_en": "$(2,10,-16)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(-1,5,8)$.",
        "content_en": "$(-1,5,8)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(-2,-10,16)$.",
        "content_en": "$(-2,-10,16)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: 3a = ( 9;12;6 ); 2b = ( -10;0;6 ); -c = ( -1; -2;4 )\nKhi đó u = 3a + 2b - c = ( -2;10;16 )",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz, cho $\\vec a=(-3, 5, 2)$, $\\vec b=(0,-1, 3)$, $\\vec c=(1,-1, 1)$ thì tọa độ $\\vec v=2\\vec a-3\\vec b+15\\vec c$ là",
    "question_en": "In Oxyz space, let $\\vec a=(-3,5,2)$, $\\vec b=(0,-1,3)$, and $\\vec c=(1,-1,1)$. Find $\\vec v=2\\vec a-3\\vec b+15\\vec c$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-9,2,10)$.",
        "content_en": "$(-9,2,10)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(9,-1,10)$.",
        "content_en": "$(9,-1,10)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(9,2,10)$.",
        "content_en": "$(9,2,10)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(9,-2,10)$.",
        "content_en": "$(9,-2,10)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có 2a = ( -6;10;4 ),3b = ( 0; - 3;9 ),15c = (15; - 15;15 ) suy ra v = ( 9; - 2;10 ).",
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
    "question_vi": "Trong không gian với hệ toạ độ Oxyz, cho hai điểm A (1; 2; 3), B ( -2; -4; 9 ). Điểm M thuộc đoạn AB sao cho MA = 2 MB. Độ dài đoạn thẳng OM là",
    "question_en": "In Oxyz space, given A(1,2,3) and B(-2,-4,9), point M lies on AB and satisfies MA=2MB. Find OM.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$5$.",
        "content_en": "$5$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$3$.",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\sqrt{54}$.",
        "content_en": "$\\sqrt{54}$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$\\sqrt{17}$.",
        "content_en": "$\\sqrt{17}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Đặt M ( x; y; z ), khi đó: MA = (1 - x;2 - y;3 - z ) và MB = ( -2 - x; -4 - y;9 - z )\n{1 - x = -2 ( -2 - x ) { x = -1\n\nTa có: MA = 2MB ⇒ MA = -2MB ⇔ 2 - y = -2 ( -4 - y ) ⇔ y = -2 ⇒ M ( -1; -2;7 ).\n\n3 - z = -2 ( 9 - z ) z = 7\nKhi đó: OM = ( -1; -2;7 ). Vậy OM = 54.",
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
    "question_vi": "Trong không gian Oxyz cho điểm G (1; -2; 3) và ba điểm A ( a; 0; 0 ); B ( 0; b; 0 ); C ( 0; 0; c ). Biết G là trọng tâm của tam giác ABC thì $a+b+c$ bằng",
    "question_en": "In Oxyz space, let G(1,-2,3), A(a,0,0), B(0,b,0), and C(0,0,c). If G is the centroid of triangle ABC, find $a+b+c$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$3$.",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$9$.",
        "content_en": "$9$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$6$.",
        "content_en": "$6$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$0$.",
        "content_en": "$0$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{ x A + xB + xC { a\nxG = 3 1 = 3\n{a = 3\ny A + yB + yC b \nTa có trọng tâm G của tam giác ABC: yG = ⇔ -2 = ⇔ b = -6.\n3 3 \nz A + z B + zC c c = 9\nzG = 3 = 3\n3 \nKhi đó: a + b + c = 3 + ( -6 ) + 9 = 6.",
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
    "question_vi": "Trong không gian với hệ toạ độ Oxyz, cho ba điểm A (1; 1; 1), B ( 2; 3; 2 ), C ( 3; -1; 3). Tìm toạ độ điểm D sao cho bốn điểm A, B, C, D lập thành một hình chữ nhật. 10",
    "question_en": "In Oxyz space, given A(1,1,1), B(2,3,2), and C(3,-1,3), find D so that A, B, C, D are the vertices of a rectangle.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$D(4,3,4)$.",
        "content_en": "$D(4,3,4)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$D(4,-1,4)$.",
        "content_en": "$D(4,-1,4)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$D(2,-3,2)$.",
        "content_en": "$D(2,-3,2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$D(4,1,4)$.",
        "content_en": "$D(4,1,4)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = (1;2;1); AC = (2; -2;2), AB. AC = 1.2 + 2.( -2 ) + 1.2 = 0 nên AB ⊥ AC\nĐiều này cho thấy A, B, C không thẳng hàng và hình chữ nhật tạo ra phải là ABDC.\nGọi D ( x; y; z ), ta có CD = ( x - 3; y + 1; z - 3).\n{x - 3 = 1 {x = 4\n\nTứ giác ABDC là hình chữ nhật khi và chỉ khi AB = CD ⇔ y + 1 = 2 ⇔ y = 1 ⇒ D ( 4;1;4 ).\nz - 3 = 1 z = 4\n\nVậy D ( 4;1;4 )",
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
    "question_vi": "Trong không gian Oxyz, cho hai điểm A ( -4; 1; 5 ); B (1; 5; -3 ). Gọi C là giao điểm của đường thẳng AB và mặt phẳng ( Oyz ). Trong các khẳng định sau, khẳng định nào đúng? 1",
    "question_en": "In Oxyz space, line AB passes through A(-4,1,5) and B(1,5,-3), and meets plane (Oyz) at C. Which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\vec{AC}=-\\dfrac14\\vec{AB}$.",
        "content_en": "$\\vec{AC}=-\\dfrac14\\vec{AB}$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$\\vec{AB}=5\\vec{BC}$.",
        "content_en": "$\\vec{AB}=5\\vec{BC}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\vec{AC}=4\\vec{BC}$.",
        "content_en": "$\\vec{AC}=4\\vec{BC}$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$\\vec{AC}=-4\\vec{BC}$.",
        "content_en": "$\\vec{AC}=-4\\vec{BC}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi C ( 0; a; b ) là giao điểm của đường thẳng AB và mặt phẳng ( Oyz ). Khi đó A; B; C thẳng\nhàng hay AC và AB cùng phương.\n{ 21\na=\n4 a -1 b - 5 \nLại có AB = ( 5;4; -8 ); AC = ( 4; a - 1; b - 5 ) nên =\n5\n= ⇔.\n5 4 -8 b = - 7\n5\n{\nAB = ( 5;4; -8 )\n\n( 16 32 )\nKhi đó AC = 4;; - nên AC = -4 BC.\n5 5 \n( 4 8)\nBC = -1; -; \n5 5",
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
    "question_vi": "Trong không gian Oxyz, cho vecto $\\vec a=(1, 1,-3)$; $\\vec b=(2, 2,-2)$; $\\vec c=2\\vec i+2\\vec j-6\\vec k$ và $\\vec d=(1, 1,-1)$. Cặp vecto nào sau đây cùng phương?",
    "question_en": "In Oxyz space, let $\\vec a=(1,1,-3)$, $\\vec b=(2,2,-2)$, $\\vec c=2\\vec i+2\\vec j-6\\vec k$, and $\\vec d=(1,1,-1)$. Which pair of vectors is parallel?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "a và b.",
        "content_en": "$\\vec a$ and $\\vec b$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "a và d.",
        "content_en": "$\\vec a$ and $\\vec d$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "a và c.",
        "content_en": "$\\vec a$ and $\\vec c$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "b và c.",
        "content_en": "$\\vec b$ and $\\vec c$.",
        "is_correct": false
      }
    ],
    "solution_vi": "1 1 -3\nVì = ≠ nên hai vecto a và b không cùng phương.\n2 2 -2\n1 1 -3\nVì = ≠ nên hai vecto a và d không cùng phương.\n1 1 -1\nTa có c = ( 2;2; -6 ) = 2 (1;1; -3) = 2a suy ra a và c cùng phương.\n2 2 -2\nVì = ≠ nên hai vecto b và c không cùng phương.\n2 2 -6",
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
    "question_vi": "Trong không gian Oxyz, cho ba điểm A ( 0; 1; -1), B (1; 2; 0 ); C ( m; n; 0 ). Tìm m, n sao cho ba điểm A, B, C thẳng hàng.",
    "question_en": "In Oxyz space, given A(0,1,-1), B(1,2,0), and C(m,n,0), find m,n so that A, B, and C are collinear.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m=1,n=1$.",
        "content_en": "$m=1,n=1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m=1,n=2$.",
        "content_en": "$m=1,n=2$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$m=2,n=1$.",
        "content_en": "$m=2,n=1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m=2,n=2$.",
        "content_en": "$m=2,n=2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có AB = (1;1;1); AC = ( m; n - 1;1).\n{m = k {m = 1\n{m = 1\nBa điểm A, B, C thẳng hàng AC = k AB ⇔ n - 1 = k ⇔ n = 2 ⇒.\n1 = k k = 1 n = 2",
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
    "question_vi": "Trong không gian Oxyz, cho 2 véc tơ $\\vec a=(-1, 2x-1, 1-3z)$ và $\\vec b=(2+3y,-1,-2)$. Khi $\\vec a=\\vec b$ thì tổng $T=x+2y^2+3z^3$ bằng",
    "question_en": "In Oxyz space, let $\\vec a=(-1,2x-1,1-3z)$ and $\\vec b=(2+3y,-1,-2)$. If $\\vec a=\\vec b$, find $T=x+2y^2+3z^3$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2.",
        "content_en": "2.",
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
        "content_vi": "4.",
        "content_en": "4.",
        "is_correct": false
      }
    ],
    "solution_vi": "{-1 = 2 + 3 y { y = -1\n\nTa có a = b ⇔ 2 x - 1 = -1 ⇔ x = 0 ⇒ T = 0 + 2.( -1) + 3.13 = 5.\n2\n1 - 3z = -2 z = 1\n\n12",
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
    "question_vi": "Trong không gian Oxyz, cho hai điểm A ( 6; -3; 4 ), B ( a; b; c ). Gọi M, N, P lần lượt là giao điểm của đường thẳng AB với các mặt phẳng tọa độ ( Oxy ), ( Oxz ) và ( Oyz ). Biết rằng M, N, P nằm trên đoạn AB sao cho AM = MN = NP = PB. Giá trị của tổng a + b + c là",
    "question_en": "In Oxyz space, let A(6,-3,4) and B(a,b,c). Line AB meets coordinate planes (Oxy), (Oxz), and (Oyz) at M, N, and P, respectively. Suppose M, N, P lie on segment AB and AM=MN=NP=PB. Find a+b+c.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "17.",
        "content_en": "17.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "-17.",
        "content_en": "-17.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "-11.",
        "content_en": "-11.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "11.",
        "content_en": "11.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = ( a - 6; b + 3; c - 4 ).\nVì M, N, P lần lượt là giao điểm của AB với các mặt phẳng ( Oxy ), ( Oxz ) và ( Oyz ) nên\nM ( xM; yM;0 ), N ( xN;0; z N ), P ( 0; yP; z P ).\nVì M, N, P nằm trên đoạn AB sao cho AM = MN = NP = PB nên ta có:\n{4 ( xM - 6 ) = a - 6 { 2 ( xN - 6 ) = a - 6\n\n4AM = AB ⇔ 4 ( yM + 3) = b + 3 ⇒ c = -12; 2AN = AB ⇔ 2 ( 0 + 3) = b + 3\n4 ( 0 - 4) = c - 4 2 ( z - 4) = c - 4\nN\n⇒ b=3\n{4\n3 ( 0 - 6) = a - 6\n\n4 4\nAP = AB ⇔ ( yP + 3) = b + 3 ⇒ a = -2. Vậy a + b + c = -11.\n3 3\n4\n3 ( zP - 4 ) = c - 4",
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
    "question_vi": "Trong không gian Oxyz, cho A ( -1; 4; 2 ), B ( 3; 2; 1), C ( -2; 0; 2 ). Tìm tất cả các điểm D sao cho ABCD là hình thang có đáy AD và diện tích hình thang ABCD gấp ba lần diện tích tam giác ABC.",
    "question_en": "In Oxyz space, let A(-1,4,2), B(3,2,1), and C(-2,0,2). Find all points D such that ABCD is a trapezoid with bases AD and BC, and the area of trapezoid ABCD is three times the area of triangle ABC.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$D(9,8,0)$.",
        "content_en": "$D(9,8,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$D(-11, 0, 4)$ và $D(9, 8, 0)$.",
        "content_en": "$D(-11,0,4)$ and $D(9,8,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$D(-11,0,4)$.",
        "content_en": "$D(-11,0,4)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$D(11, 0,-4)$ và $D(-9,-8, 0)$.",
        "content_en": "$D(11,0,-4)$ and $D(-9,-8,0)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử D ( xD; yD; z D ). Khi đó: AD = ( xD + 1; yD - 4; z D - 2 ); BC = ( -5; -2;1).\n{ xD = -1 - 5t\n\nDo AD / / BC nên AD = t BC ( t ≠ 0 ) ⇔ yD = 4 - 2t; t ≠ 0.\nz = 2 + t\nD\nVì diện tích hình thang ABCD gấp ba lần diện tích tam giác ABC\n1 1\nnên h.( BC + AD ) = 3. h.BC,với h là chiều cao của hình thang và cũng chính là chiều cao\n2 2\ntam giác ABC ứng với cạnh BC.\nSuy ra, AD = 2 BC ⇔ ( xD + 1) + ( yD - 4 ) + ( zD - 2 ) = 4 [( -5 ) + ( -2 ) + 12 ]\n2 2 2 2 2\n\n[t = 2 ⇒ D ( -11;0;4 )\n⇒ ( -5t ) + ( -2t ) + t 2 = 4.30 ⇔ t 2 = 4 ⇔ \n2 2\n.\nt = -2 ⇒ D ( 9;8;0 )",
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
    "question_vi": "Cho các điểm A (1; -2; 3), B ( -2; 1; 2 ), C ( 3; -1; 2 ).",
    "question_en": "Given A(1,-2,3), B(-2,1,2), and C(3,-1,2), determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$\\vec{AB}=(-3,3,-1)$.",
        "content_en": "$\\vec{AB}=(-3,3,-1)$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "$\\vec{AC}=(-2,-1,1)$.",
        "content_en": "$\\vec{AC}=(-2,-1,1)$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "$\\vec{AB}=3\\vec{AC}$.",
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
    "solution_vi": "a) Đúng: AB = ( xB - xA; yB - y A; zB - z A ) = ( -3;3; -1).\nb) Sai: AC = ( xC - xA; yC - y A; zC - z A ) = ( 2;1; -1)\nc) Sai: AB = ( -3;3; -1), AC = ( 2;1; -1). Hai vec tơ này không cùng phương nên không tồn tại\nsố thực k để AB = k AC.\nd) Đúng: Hai vec tơ AB và AC không cùng phương nên ba điểm A, B, C không thẳng hàng.",
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
    "question_vi": "Cho ba điểm A ( 3; 3; -6 ), B (1; 3; 2 ) và C ( -1; -3; 1). Gọi M, N, K lần lượt là trung điểm của AB, BC và CA.",
    "question_en": "Given A(3,3,-6), B(1,3,2), and C(-1,-3,1), let M, N, and K be the midpoints of AB, BC, and CA, respectively. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$M(2,3,2)$.",
        "content_en": "$M(2,3,2)$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Với G là trọng tâm tam giác ABC thì $GC=2\\sqrt5$.",
        "content_en": "If G is the centroid of triangle ABC, then $GC=2\\sqrt5$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Trọng tâm tam giác MNK là $E(1, 1,-1)$.",
        "content_en": "The centroid of triangle MNK is $E(1,1,-1)$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Với $D(-3,-3, 9)$ thì tứ giác ABDC là hình bình hành.",
        "content_en": "If $D(-3,-3,9)$, then ABDC is a parallelogram.",
        "is_correct": true
      }
    ],
    "solution_vi": "( x + xB y A + yB z A + zB )\na) Sai: M là trung điểm của AB, suy ra M A;; hay M ( 2;3; -2 ).\n2 2 2 \nb) Sai: Ta có G (1;1; -1). Suy ra GC = (-1 - 1) 2 + (-3 - 1) 2 + (1 + 1) 2 = 2 6.\nc) Đúng: Hai tam giác ABC và MNK có cùng trọng tâm. Suy ra E trùng với G (1;1; -1).\nd) Đúng: Ta có AC = ( -4; -6;7 ), BD = ( -4; -6;7 ) suy ra AC = BD.\nVậy ABDC là hình bình hành.",
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
    "question_vi": "Trong không gian Oxyz, cho hai điểm A (1; -2; 5 ) và B ( -2; -2; 1). Tính độ dài đoạn thẳng AB",
    "question_en": "In Oxyz space, given A(1,-2,5) and B(-2,-2,1), find the length AB.",
    "options": [],
    "solution_vi": "Ta có: AB = ( -2 - 1) + ( -2 + 2 ) + (1 - 5) = 5.\n2 2 2",
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
    "question_vi": "Trong không gian hệ toạ độ Oxyz cho tứ diện ABCD với A (1; -4; 2 ), B ( 2; 1; -3), C ( 3; 0; -2 ) và\nD ( 2; -5; -1). Hoành độ điểm G thỏa mãn $\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$ là bao nhiêu?",
    "question_en": "In Oxyz space, let A(1,-4,2), B(2,1,-3), C(3,0,-2), and D(2,-5,-1). Point G satisfies $\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$. Find the x-coordinate of G.",
    "options": [],
    "solution_vi": "Tọa độ điểm G thỏa mãn:\n{ x A + xB + xC + xD 1 + 2 + 3 + 2\nxG = 4\n=\n4\n=2\n\ny A + yB + yC + yD -4 + 1 + 0 + ( -5 )\nyG = = = -2 ⇒ G ( 2; -2; -1)\n4 4\nz A + z B + zC + z D 2 + ( -3) + ( -2 ) + ( -1)\nzG = = = -1\n4 4",
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
    "question_vi": "Trong không gian Oxyz, cho ba điểm A ( 3; 2; -1), B ( -1; - x; 1), C ( 7; -1; y ). Khi A, B, C thẳng\nhàng thì giá trị biểu thức x + y bằng bao nhiêu?",
    "question_en": "In Oxyz space, A(3,2,-1), B(-1,-x,1), and C(7,-1,y) are collinear. Find x+y.",
    "options": [],
    "solution_vi": "Ta có AB = ( -4; - x - 2;2 ); AC = ( 4; -3; y + 1).\n{-4 = k.4 {k = -1\n\nĐể A, B, C thẳng hàng thì AB = k AC ⇔ - x - 2 = k.( -3) ⇔ x = -5.\ny = -3\n2 = k.( y + 1) \nVậy x + y = -5 - 3 = -8.",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz, cho hai điểm A (1; 2; 3), B ( -2; -4; 9 ). Điểm M thuộc đoạn\nAB sao cho MA = 2 MB. Bình phương độ dài đoạn thẳng OM bằng bao nhiêu?",
    "question_en": "In Oxyz space, given A(1,2,3) and B(-2,-4,9), point M lies on AB and satisfies MA=2MB. Find $OM^2$.",
    "options": [],
    "solution_vi": "Gọi M ( x; y; z ).\nVì điểm M thuộc đoạn AB sao cho MA = 2 MB nên\n20 \n{3.( -2 - x ) = -3 { x = -1\n\nAB = 3MB ⇔ 3.( -4 - y ) = -6 ⇔ y = -2\nz = 7.\n3.( 9 - z ) = 6 \n⇒ M ( -1; -2;7 ) ⇒ OM = 1 + 4 + 49 = 54 ⇒ OM 2 = 54.",
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
    "question_vi": "Trong không gian Oxyz, cho ba điểm A ( -2; 3; 1), B ( 2; 1; 0 ), C ( -3; -1; 1). Gọi D ( a; b; c ) là điểm\nsao cho ABCD là hình thang có cạnh đáy AD và diệt tích hình thang ABCD bằng 4 lần diện\ntích tam giác ABC. Tính $a+b+c$.",
    "question_en": "In Oxyz space, let A(-2,3,1), B(2,1,0), and C(-3,-1,1). Let D(a,b,c) be such that ABCD is a trapezoid with bases AD and BC, and the area of the trapezoid is four times the area of triangle ABC. Find $a+b+c$.",
    "options": [],
    "solution_vi": "1 1\nTa có S ABCD = 4S ABC ⇔ d ( BC, AD )( BC + AD ) = 4. d ( BC, AD ) BC\n2 2\n⇔ BC + AD = 4 BC ⇔ AD = 3BC. Do ABCD là hình thang có đáy AD ⇒ AD = 3BC\n{a + 2 = -15 {a = -17\n\n⇔ b - 3 = -6 ⇔ b = -3 ⇒ a + b + c = -16.\nc -1 = 3 c=4\n\n-----------------HẾT-----------------\n22",
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
    "question_vi": "Cho tứ diện ABCD. Đặt $\\vec{AB}=\\vec a$, $\\vec{AC}=\\vec b$, $\\vec{AD}=\\vec c$. Gọi G là trọng tâm tam gi $\\vec{AC}=\\vec b$ CD. Đẳng thức nào sau đây đúng?",
    "question_en": "In tetrahedron ABCD, set $\\vec{AB}=\\vec a$, $\\vec{AC}=\\vec b$, and $\\vec{AD}=\\vec c$. Let G be the centroid of triangle BCD. Which identity is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\vec{AG}=\\vec a+\\vec b+\\vec c$.",
        "content_en": "$\\vec{AG}=\\vec a+\\vec b+\\vec c$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$\\vec{AG}=\\dfrac13(\\vec a+\\vec b+\\vec c)$.",
        "content_en": "$\\vec{AG}=\\dfrac13(\\vec a+\\vec b+\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\vec{AG}=\\dfrac12(\\vec a+\\vec b+\\vec c)$.",
        "content_en": "$\\vec{AG}=\\dfrac12(\\vec a+\\vec b+\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$\\vec{AG}=\\dfrac14(\\vec a+\\vec b+\\vec c)$.",
        "content_en": "$\\vec{AG}=\\dfrac14(\\vec a+\\vec b+\\vec c)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "2\nGọi M là trung điểm của CD ⇒ BG = BM.\n3\n2 2 1\nMặt khác AG = AB + BG = AB + BM = AB +. BC + BD\n3 3 2\n( )\n1\n( 1\n) ( 1\n) (\n= AB + AC - AB + AD - AB = AB + AC + AD = a + b + c.\n3 3 3\n)",
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
    "question_vi": "Cho tứ diện ABCD. Đặt $\\vec{AB}=\\vec a$, $\\vec{AC}=\\vec b$, $\\vec{AD}=\\vec c$. Gọi M là trung điểm của đoạn BC. Đẳng thức nào dưới đây đúng? 1 (",
    "question_en": "In tetrahedron ABCD, set $\\vec{AB}=\\vec a$, $\\vec{AC}=\\vec b$, and $\\vec{AD}=\\vec c$. Let M be the midpoint of BC. Which identity is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\vec{DM}=\\dfrac12(\\vec a+\\vec b-2\\vec c)$.",
        "content_en": "$\\vec{DM}=\\dfrac12(\\vec a+\\vec b-2\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$\\vec{DM}=\\dfrac12(\\vec a+2\\vec b-\\vec c)$.",
        "content_en": "$\\vec{DM}=\\dfrac12(\\vec a+2\\vec b-\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\vec{DM}=\\dfrac12(\\vec a-2\\vec b+\\vec c)$.",
        "content_en": "$\\vec{DM}=\\dfrac12(\\vec a-2\\vec b+\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$\\vec{DM}=\\dfrac12(\\vec a+2\\vec b-\\vec c)$.",
        "content_en": "$\\vec{DM}=\\dfrac12(\\vec a+2\\vec b-\\vec c)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "1\nVì M là trung điểm của BC ⇒ BM = BC.\n2\n10 \n1\nMặt khác DM = DA + AB + BM = AB - AD +\nBC\n2\n1\n2\n( 1\n2\n1\n2\n) 1\n2\n1 1\n= AB - AD + BA + AC = AB + AC - AD = a + b - c = a + b - 2c\n2 2\n( )",
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
    "question_vi": "Cho tứ diện ABCD. Gọi M và P lần lượt là trung điểm của c $\\vec{AC}=\\vec c$ ạnh AB và CD. Đặt $\\vec{AB}=\\vec b$, $\\vec{AC}=\\vec c$, $\\vec{AD}=\\vec d$. Khẳng định nào sau đây đúng? 1 (",
    "question_en": "In tetrahedron ABCD, let M and P be the midpoints of AB and CD. Set $\\vec{AB}=\\vec b$, $\\vec{AC}=\\vec c$, and $\\vec{AD}=\\vec d$. Which identity is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\vec{MP}=\\dfrac12(\\vec c+\\vec d+\\vec b)$.",
        "content_en": "$\\vec{MP}=\\dfrac12(\\vec c+\\vec d+\\vec b)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$\\vec{MP}=\\dfrac12(\\vec d+\\vec b-\\vec c)$.",
        "content_en": "$\\vec{MP}=\\dfrac12(\\vec d+\\vec b-\\vec c)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\vec{MP}=\\dfrac12(\\vec c+\\vec b-\\vec d)$.",
        "content_en": "$\\vec{MP}=\\dfrac12(\\vec c+\\vec b-\\vec d)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$\\vec{MP}=\\dfrac12(\\vec c+\\vec d-\\vec b)$.",
        "content_en": "$\\vec{MP}=\\dfrac12(\\vec c+\\vec d-\\vec b)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{ 2 AM = AB\nVì M, P lần lượt là trung điểm của AB, CD ⇒ \nAC + AD = 2 AP\n1\nMP = MA + AP = - AM + AP = - AB + AC + AD\n2\n1\n2\n( )\n1 1 1\n= - b+ c+ d = c+ d -b^2 2 2\n1\n2\n( )",
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
    "question_vi": "Cho tứ diện ABCD và điểm G thỏa mãn $\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$( G là trọng tâm của tứ diện). Gọi G0 là giao điểm của GA và mặt phẳng ( BCD ). Khẳng định nào dưới đây đúng?",
    "question_en": "In tetrahedron ABCD, point G satisfies $\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$, so G is the centroid. Let $G_0=GA\\cap(BCD)$. Which identity is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\vec{GA}=-2\\vec{G_0G}$.",
        "content_en": "$\\vec{GA}=-2\\vec{G_0G}$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$\\vec{GA}=4\\vec{G_0G}$.",
        "content_en": "$\\vec{GA}=4\\vec{G_0G}$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\vec{GA}=3\\vec{G_0G}$.",
        "content_en": "$\\vec{GA}=3\\vec{G_0G}$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$\\vec{GA}=2\\vec{G_0G}$.",
        "content_en": "$\\vec{GA}=2\\vec{G_0G}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Vì G0 là giao điểm của AG và mặt phẳng ( BCD ) ⇒ G0 là trọng tâm tam giác BCD.\n⇒ G0 B + G0C + G0 D = 0 mà GA + GB + GC + GD = GA + 3GG0 + G0 B + G0C + G0 D = 0\nSuy ra ⇒ GA + 3GG9 = 0 → GA = 3G0G.",
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
    "question_vi": "Cho ba véctơ $\\vec{a}$, b, c không đồng phẳng. Xét các véctơ $\\vec x=2\\vec a+\\vec b$ và $\\vec y=\\vec a-\\vec b-\\vec c$ và $\\vec z=-3\\vec b-2\\vec c$. Khẳng định nào dưới đây là đúng?",
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
    "solution_vi": "Giả sử ba vectơ x, y, z đồng phẳng khi đó → x = m y + nz.\n{m = 2\n{m = 2\n⇔ 2a + b = ma - ( m + 3n ) b - ( m + 2n ) c ↔ m + 3n = -1 ↔.\nm + 2n = 0 n = -1\n\nVậy x, y, z đồng phẳng.",
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
    "question_vi": "Một chiếc đèn tròn được treo song song với mặt phẳng nằm ngang bởi ba sợi dây không dãn xuất phát từ điểm O trên trần nhà và lần lượt buộc vào ba điểm A, B, C trên đèn tròn sao cho các lực 16 ên mối dây OA, OB, OC đôi một vuông góc với nhau và $F_1=F_2=F_3=15$(N). Tính trọng lượng của chiếc đèn tròn đó.",
    "question_en": "A circular lamp is suspended horizontally by three inextensible cords OA, OB, and OC from a ceiling point O. The three tension forces are pairwise perpendicular and have equal magnitudes $F_1=F_2=F_3=15$ N. Find the weight of the lamp.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$14\\sqrt3$ N.",
        "content_en": "$14\\sqrt3$ N.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$15\\sqrt3$ N.",
        "content_en": "$15\\sqrt3$ N.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$17\\sqrt3$ N.",
        "content_en": "$17\\sqrt3$ N.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$16\\sqrt3$ N.",
        "content_en": "$16\\sqrt3$ N.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi A1, B1, C1 lần lượt là các điểm sao cho OA1 = F1, OB1 = F2, OC1 = F3. Lấy các điểm\nD1, A1′, B1′, D1′ sao cho OA1D1B1 C1 A1′ D1′ B1′ là hình hộp (như hình bên). Khi đó, áp dụng quy tắc\nhình hộp ta có\nOA1 + OB1 + OC1 = OD1′.\nMăt khác, do các lực căng F1, F2, F3 đôi một vuông góc và F1 = F2 = F3 = 15( N) nên hình hộp\nOA1D1B1 C1 A1′ D1′ B1′ có ba cạnh OA1, OB1, OC1 đôi một vuông góc và bằng nhau. Vì thể hình hộp\nđó là hình lập phương có độ dài cạnh bằng 15. Suy ra độ dài đường chéo OD1′ của hình lập\nphương đó bằng 15 3.\nDo chiếc đèn ở vị trí cân bằng nên F1 + F2 + F3 = P, ơ đó P là trong lực tác dụng lên chiếc đèn.\nSuy ra trọng lượng của chiếc đèn là | P |= OD1′ = 15 3N",
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
    "question_vi": "Theo định luật II Newton (Vật lí 10 - Chân trời sáng tạo, Nhà xuất bản Giáo dục Việt Nam, 2023, trang 60) thì gia tốc của một vật có cùng hướng với lực tác dụng lên vật. Độ lớn của gia tốc tỉ lệ thuận với độ lớn của lực và tỉ lệ nghịch với khối lượng của vật: $\\vec F=m\\vec a$ trong đó a là vectơ gia tốc m/s $^2$, F là vectơ lực (N). Muốn truyền cho quả bóng có khối lượng 0, 5 kg một gia tốc $50\\,\\text{m/s}^2$ thì cần một lực đá có độ lớn là bao nhiêu?",
    "question_en": "By Newton’s second law, $\\vec F=m\\vec a$. What force magnitude is required to give a $0.5$ kg ball an acceleration of $50\\,\\text{m/s}^2$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "10 N.",
        "content_en": "10 N.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "15 N.",
        "content_en": "15 N.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "20 N.",
        "content_en": "20 N.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "25 N.",
        "content_en": "25 N.",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có F = ma suy ra F = m a = 0,5.50 = 25 ( N ).\nVậy muốn truyền cho quả bóng khối lượng 0,5 kg một gia tốc 50 m / s 2 thì cần một lực đá có\nđộ lớn là 25 N.",
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
    "question_vi": "Nếu một vật có khối lượng m ( kg ) thì lực hấp dẫn P của Trái Đất tác dụng lên vật được xác định theo công thức $P=mg$, trong đó g là gia tốc rơi tự do có độ lớn $g=9. 8\\,\\text{m/s}^2$. Tính độ lớn của lực hấp dẫn của Trái Đất tác dụng lên một quả táo có khối lượng 105 gam",
    "question_en": "For a mass $m$ kg, Earth’s gravitational force has magnitude $P=mg$, where $g=9.8\\,\\text{m/s}^2$. Find the gravitational force on an apple of mass 105 g.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "1, 029 N.",
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
        "content_vi": "2, 096 N.",
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
    "solution_vi": "Đối 105g = 0,105 kg.\nĐộ lớn của lực hấp dẫn của Trái Đất tác dụng lên một quả táo là:\nP = m g = 0,105.9,8 = 1,029 N",
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
    "question_vi": "Trong điện trường đều, lực tĩnh điện F (đơn vị: N) tác dụng lên điện tích điểm có điện tích q (đơn vị: C ) được tính theo công thức $\\vec F=q\\vec E$, trong đó E là cường độ điện trường (đơn vị: N/C). Tính độ lớn của lực tĩnh điện tác dụng lên điện tích điểm khi $q=10^{-9}$ C và độ lớn điện trường $|\\vec E|=10^5$(N/C)",
    "question_en": "In a uniform electric field, the electrostatic force on a point charge is $\\vec F=q\\vec E$. Find the force magnitude when $q=10^{-9}$ C and $|\\vec E|=10^5$ N/C.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$10^{-4}$ N.",
        "content_en": "$10^{-4}$ N.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$2\\times10^{-6}$ N.",
        "content_en": "$2\\times10^{-6}$ N.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$10^{-2}$ N.",
        "content_en": "$10^{-2}$ N.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$1.8\\times10^{-6}$ N.",
        "content_en": "$1.8\\times10^{-6}$ N.",
        "is_correct": false
      }
    ],
    "solution_vi": "Độ lớn của lực tĩnh điện là F = q. E = 10-9.105 = 10-4 N.",
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
    "question_vi": "Trong không gian, cho tứ diện ABCD có trọng tâm G.",
    "question_en": "In tetrahedron ABCD with centroid G, determine whether each vector statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$.",
        "content_en": "$\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "$\\vec{OG}=\\dfrac14(\\vec{OA}+\\vec{OB}+\\vec{OC}+\\vec{OD})$.",
        "content_en": "$\\vec{OG}=\\dfrac14(\\vec{OA}+\\vec{OB}+\\vec{OC}+\\vec{OD})$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "$\\vec{BG}=\\vec{GA}+\\vec{GC}+\\vec{GD}$.",
        "content_en": "$\\vec{BG}=\\vec{GA}+\\vec{GC}+\\vec{GD}$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "$\\vec{AG}=\\dfrac23(\\vec{AB}+\\vec{AC}+\\vec{AD})$.",
        "content_en": "$\\vec{AG}=\\dfrac23(\\vec{AB}+\\vec{AC}+\\vec{AD})$.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Theo công thức vì G là trọng tâm tứ diện ABCD ⇒ GA + GB + GC + GD = 0\nb) Đúng: Ta có:\n1\n( 1\n) (\nOG = OG + OG + OG + OG = OA + AG + OB + BG + OC + CG + OD + DG\n4 4\n)\n1\n(\n= OA + OB + OC + OD\n4\n)\nc) Đúng: GA + GB + GC + GD = 0 ⇔ GA + GC + GD = -GB = BG\n1\n( 1\n) (\nd) Sai: AG = AO + OG = AO + OA + OB + OC + OD = AO + 4OA + AB + AC + AD.\n4 4\n)\n1\n( 1\n) (\n= AO + OA + AB + AC + AD = AB + AC + AD\n4 4\n)",
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
    "question_vi": "Cho tứ diện ABCD. Gọi M và N lần lượt là trung điểm của AB, CD và G là trung điểm MN",
    "question_en": "In tetrahedron ABCD, let M and N be the midpoints of AB and CD, respectively, and let G be the midpoint of MN. Determine whether each vector statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$.",
        "content_en": "$\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec0$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "$\\vec{MA}+\\vec{MB}+\\vec{MC}+\\vec{MD}=4\\vec{MG}$.",
        "content_en": "$\\vec{MA}+\\vec{MB}+\\vec{MC}+\\vec{MD}=4\\vec{MG}$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "$\\vec{MN}=\\dfrac12(\\vec{AB}+\\vec{CD})$.",
        "content_en": "$\\vec{MN}=\\dfrac12(\\vec{AB}+\\vec{CD})$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "$2\\vec{MN}=\\vec{AC}+\\vec{BD}$.",
        "content_en": "$2\\vec{MN}=\\vec{AC}+\\vec{BD}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "20 \n{GA + GB = 2GM\na) Đúng: Vì M, N lần lượt là trung điểm AB, CD → \nGC + GD = 2GN\nMặt khác G là trung điểm MN → GM + GN = 0 ↔ GA + GB + GC + GD = 0.\n(\nb) Đúng: Khi đó MA + MB + MC + MD = 4MG + GA + GB + GC + GD = 4MG )\nc) Sai: Dễ chứng minh được MN =\n1\n2\n(\nAD + BC )\nTa có: MN = MA + AC + CN; MN = MB + BD + DN. Do đó: 2MN = AC + BD",
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
    "question_vi": "Trong không gian, cho tứ diện ABCD. Gọi M, N lần lượt là trung điểm AD, BC",
    "question_en": "In tetrahedron ABCD, let M and N be the midpoints of AD and BC, respectively. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$\\vec{AB},\\vec{DC},\\vec{MN}$ đồng phẳng.",
        "content_en": "The vectors $\\vec{AB},\\vec{DC},\\vec{MN}$ are coplanar.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "$\\vec{AB},\\vec{AC},\\vec{MN}$ không đồng phẳng.",
        "content_en": "The vectors $\\vec{AB},\\vec{AC},\\vec{MN}$ are not coplanar.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "$\\vec{AN},\\vec{CM},\\vec{MN}$ đồng phẳng.",
        "content_en": "The vectors $\\vec{AN},\\vec{CM},\\vec{MN}$ are coplanar.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "$\\vec{BD},\\vec{AC},\\vec{MN}$ đồng phẳng.",
        "content_en": "The vectors $\\vec{BD},\\vec{AC},\\vec{MN}$ are coplanar.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: MN =\n1\n2\n( )\nAB + DC ⇒ AB, DC, MN đồng phẳng\nb) Đúng: AB, AC, MN không đồng phẳng vì MN không nẳm trong ( ABC )\nc) Sai: AN, CM, MN đồng phẳng sai vì AN không nằm trong ( MNC )\nd) Đúng: MN =\n1\n2\n( )\nBD + AC ⇒ BD, AC, MN đồng phẳng",
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
    "question_vi": "Trong không gian, cho tứ diện ABCD. Trên cạnh AD và BC lần lượt lấy các điểm M, N sao cho AM = 3MD và BN = 3 NC. Gọi P, Q lần lượt là trung điểm AD và BC.",
    "question_en": "In tetrahedron ABCD, points M on AD and N on BC satisfy AM=3MD and BN=3NC. Let P and Q be the midpoints of AD and BC, respectively. Determine whether each vector statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$\\vec{PQ}=\\vec{AC}+\\vec{DB}$.",
        "content_en": "$\\vec{PQ}=\\vec{AC}+\\vec{DB}$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "$\\vec{MN}=\\vec{MA}+\\vec{AC}+\\vec{CN}$.",
        "content_en": "$\\vec{MN}=\\vec{MA}+\\vec{AC}+\\vec{CN}$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "$\\vec{MN}=\\vec{MD}+\\vec{DB}+\\vec{BN}$.",
        "content_en": "$\\vec{MN}=\\vec{MD}+\\vec{DB}+\\vec{BN}$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "$\\vec{BD},\\vec{AC},\\vec{MN}$ đồng phẳng.",
        "content_en": "The vectors $\\vec{BD},\\vec{AC},\\vec{MN}$ are coplanar.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Dễ chứng minh được 2PQ = AC + DB nên A sai\nb) Đúng: Theo giả thuyết ta có M, N là trung điểm của PD, QC\n{ MN = MA + AC + CN\nc) Đúng:.\nMN = MD + DB + BN\n{ MN = MA + AC + CN\nd) Đúng: Ta có \n3MN = 3MD + 3DB + 3BN\n1\n⇒ 4MN = AC - 3BD + BC ⇒ BD, AC, MN không đồng phẳng.\n2",
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
    "question_vi": "Trong không gian. cho tứ diện ABCD. Gọi M, N lần lượt là trung điểm của các cạnh AD và BC, I là trung điểm MN.",
    "question_en": "In tetrahedron ABCD, let M and N be the midpoints of AD and BC, respectively, and let I be the midpoint of MN. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$\\vec{AB}-\\vec{CD}=\\vec{AC}-\\vec{BD}$.",
        "content_en": "$\\vec{AB}-\\vec{CD}=\\vec{AC}-\\vec{BD}$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "$\\vec{AB}+\\vec{CD}=\\vec{AD}+\\vec{CB}$.",
        "content_en": "$\\vec{AB}+\\vec{CD}=\\vec{AD}+\\vec{CB}$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "$\\vec{AB}+\\vec{DC}=2\\vec{MN}$.",
        "content_en": "$\\vec{AB}+\\vec{DC}=2\\vec{MN}$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "$\\vec{IA}+\\vec{IB}+\\vec{IC}+\\vec{ID}=\\vec0$.",
        "content_en": "$\\vec{IA}+\\vec{IB}+\\vec{IC}+\\vec{ID}=\\vec0$.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Sử dụng quy tắc ba điểm và quy tắc hiệu, ta có\n( ) ( )\nAB - CD = AC + CB - CD = AC + CB - CD = AC + DB = AC - BD.\nb) Đúng: Theo quy tắc ba điểm, ta có AB = AD + DB.\n(\nDo đó AB + CD = AD + DB + CD = AD + CD + DB = AD + CB. )\nc) Đúng: AB + DC = 2MN\nd) Đúng: IA + IB + IC + ID = 0",
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
    "question_vi": "Trong không gian, cho tứ diện ABCD có các điểm M, N, P lần lượt thuộc các cạnh BC, BD và\nAC sao cho $BC=4BM$, $AC=3AP$, $BD=2BN$. Mặt phẳng ( MNP ) cắt đường thẳng AD tại\nđiểm Q. Tính tỉ số $\\dfrac{AQ}{AD}$.",
    "question_en": "In tetrahedron ABCD, points $M\\in BC$, $N\\in BD$, and $P\\in AC$ satisfy $BC=4BM$, $AC=3AP$, and $BD=2BN$. Plane (MNP) intersects AD at Q. Find $\\dfrac{AQ}{AD}$.",
    "options": [],
    "solution_vi": "A\nP Q\nR\nB N D\nM\nC\nĐặt AB = a, AC = b, AD = c, AQ = k AD = kc\n3 1 1\n( )\n1\nTheo đề bài, ta có: AM = a + b; AN = a + c; AP = b.\n4 4 2 3\n{ 1 1 1\nMN = AN - AM = - 4 a - 4 b + 2 c\n\n3 1\nTa có: MP = AP - AM = - a + b\n4 12\n3 1\nMQ = AQ - AM = - 4 a - 4 b + kc\n\n{ 6\nx=\n{0, 25 x + 0,75 y = 0,75 5\n\n1 3\nVì M, N, P, Q đồng phẳng nên xMN + yMP = MQ ⇔ 0, 25 x - y = 0, 25 ⇔ y =.\n12 5\n0,5 x = k 3\nk = 5\n\n3 AQ 3\nVậy AQ = AD ⇒ =.\n5 AD 5",
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
    "question_vi": "Trong không gian, cho tứ diện S. ABC có $SA=SB=SC=AB=AC=2$, $BC=2\\sqrt2$. Hãy tính $\\vec{SC}\\cdot\\vec{AB}$.",
    "question_en": "In tetrahedron SABC, $SA=SB=SC=AB=AC=2$ and $BC=2\\sqrt2$. Find $\\vec{SC}\\cdot\\vec{AB}$.",
    "options": [],
    "solution_vi": "S\nA C\nB\n28 \nTa có: BC 2 = SB 2 + SC 2 ( 2.22 = 22 + 22 ) ⇒ ∆SBC vuông cân tại S.\nMặt khác: SA = AC = SC = 2 ⇒ ∆SAC là tam giác đều.\n( )\nSC. AB = SC SB - SA = SC.SB - SC.SA = 0 - SC.SA.cos ASC = -2.2.cos60° = -\n22\n2\n= -2.\nVậy SC. AB = -2.",
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
    "question_vi": "Trong không gian, cho tứ diện ABCD. Gọi E, F lần lượt là trung điểm của AB, CD. Cho\n$AB=2a$, $CD=2b$, $EF=2c$. Với M là một điểm tùy ý, biết tổng $MA^2+MB^2=k\\, ME^2+l\\, a^2$.\nTính $k+l$.",
    "question_en": "In tetrahedron ABCD, let E and F be the midpoints of AB and CD. Given $AB=2a$, $CD=2b$, and $EF=2c$, for an arbitrary point M suppose $MA^2+MB^2=k\\,ME^2+l\\,a^2$. Find $k+l$.",
    "options": [],
    "solution_vi": "A\nE\nB D\nF\nC\nÁp dụng công thức độ dài đường trung tuyến, ta có:\nMA2 + MB 2 AB 2 AB 2\nME 2 = - ⇒ MA2 + MB 2 = 2ME 2 + = 2ME 2 + 2a 2. Vậy k + l = 2 + 2 = 4.\n2 4 2",
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
    "question_vi": "Cho hai vectơ $\\vec{a}$, b thỏa mãn: $|\\vec a|=26$; $|\\vec b|=28$; $|\\vec a+\\vec b|=48$. Độ dài vectơ $|\\vec a-\\vec b|$ bằng?",
    "question_en": "Let vectors $\\vec a,\\vec b$ satisfy $|\\vec a|=26$, $|\\vec b|=28$, and $|\\vec a+\\vec b|=48$. Find $|\\vec a-\\vec b|$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$25$.",
        "content_en": "$25$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$\\sqrt{616}$.",
        "content_en": "$\\sqrt{616}$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$9$.",
        "content_en": "$9$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$\\sqrt{618}$.",
        "content_en": "$\\sqrt{618}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "( ) = a + b - 2a.b = 2 ( a + b ) - ( a + b )\n2 2 2 2 2 2 2\nTa có: a - b = a - b\n(\n=2 a + b^2 2\n) - a + b = 2( 26 + 28 ) - 48 = 616 ⇒ a - b = 616.\n2\n2 2 2",
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
    "question_vi": "Cho tứ diện ABCD đều cạnh bằng a. Gọi O là tâm đường tròn ngoại tiếp tam giác BCD. Góc giữa AO và CD bằng bao nhiêu?",
    "question_en": "In a regular tetrahedron ABCD of edge length $a$, let O be the circumcenter of triangle BCD. What is the angle between AO and CD?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$0^\\circ$.",
        "content_en": "$0^\\circ$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$30^\\circ$.",
        "content_en": "$30^\\circ$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$90^\\circ$.",
        "content_en": "$90^\\circ$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$60^\\circ$.",
        "content_en": "$60^\\circ$.",
        "is_correct": false
      }
    ],
    "solution_vi": "A\nB\nD\nO\nC\n(\nTa có AO.CD = CO - CA CD )\na^3 3 1 a2 a2\n= CO.CD - CA.CD = CO.CD.cos30 - CA.CD.cos60 =\n0\n.a. - a.a. =\n0\n- = 0.\n3 2 2 2 2\nSuy ra AO ⊥ CD.",
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
    "solution_vi": "Chọn B\n8 \nĐặt AB = AD = AC = a\n( ) 1 1\nTa có CD. AB = AD - AC AB = AB AD cos 600 - AB AC cos 600 = a.a. - a.a. = 0\n2 2\nVậy AB ⊥ CD.",
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
    "question_vi": "Trong không gian Oxyz, hình chiếu vuông góc của điểm A (1; 2; 5 ) lên trục Ox có tọa độ là",
    "question_en": "In Oxyz space, find the orthogonal projection of A(1,2,5) onto the x-axis.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(0,2,0)$.",
        "content_en": "$(0,2,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(0,0,5)$.",
        "content_en": "$(0,0,5)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(1,0,0)$.",
        "content_en": "$(1,0,0)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$(0,2,5)$.",
        "content_en": "$(0,2,5)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Hình chiếu vuông góc của điểm A (1;2;5 ) lên trục Ox có tọa độ là (1;0;0 ).",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz, tọa độ hình chiếu của điểm A ( -2; -1; 3) trên mặt phẳng Oyz là",
    "question_en": "In Oxyz space, find the coordinates of the orthogonal projection of A(-2,-1,3) onto plane Oyz.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(0,-1,0)$.",
        "content_en": "$(0,-1,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-2,0,0)$.",
        "content_en": "$(-2,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(0,-1,3)$.",
        "content_en": "$(0,-1,3)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$(-2,-1,0)$.",
        "content_en": "$(-2,-1,0)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tọa độ hình chiếu của điểm A ( -2; -1;3) trên mặt phẳng Oyz là ( 0; -1;3 ).",
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
    "question_vi": "Trong không gian với hệ toạ độ Oxyz, cho điểm M (1; 2; 3). Gọi H là hình chiếu vuông góc của M lên mặt phẳng ( Oxy ). Toạ độ của H là",
    "question_en": "In Oxyz space, let M(1,2,3). If H is the orthogonal projection of M onto plane (Oxy), what are the coordinates of H?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$H(-1,-2,3)$.",
        "content_en": "$H(-1,-2,3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$H(0,0,3)$.",
        "content_en": "$H(0,0,3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$H(1,0,0)$.",
        "content_en": "$H(1,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$H(1,2,0)$.",
        "content_en": "$H(1,2,0)$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Toạ độ điểm H là H (1;2;0 ).",
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
    "question_vi": "Trong không gian Oxyz, cho $\\vec a=(2, 3, 2)$ và $\\vec b=(1, 1,-1)$. Vectơ $\\vec a-\\vec b$ có tọa độ là",
    "question_en": "In Oxyz space, let $\\vec a=(2,3,2)$ and $\\vec b=(1,1,-1)$. Find the coordinates of $\\vec a-\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(3,4,1)$.",
        "content_en": "$(3,4,1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-1,-2,3)$.",
        "content_en": "$(-1,-2,3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(3,5,1)$.",
        "content_en": "$(3,5,1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(1,2,3)$.",
        "content_en": "$(1,2,3)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Vectơ a - b có tọa độ (1;2;3).",
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
    "question_vi": "Trong không gian Oxyz, cho điểm A (1; 1; 1). Tìm tọa độ hình chiếu vuông góc của điểm A trên mặt phẳng ( Oxz ).",
    "question_en": "In Oxyz space, given A(1,1,1), find its orthogonal projection onto plane (Oxz).",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(1,0,1)$.",
        "content_en": "$(1,0,1)$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$(0,1,0)$.",
        "content_en": "$(0,1,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(1,1,0)$.",
        "content_en": "$(1,1,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(0,1,1)$.",
        "content_en": "$(0,1,1)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tọa độ hình chiếu vuông góc của điểm A trên mặt phẳng ( Oxz ) là H (1;0;1).",
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
    "question_vi": "Trong không gian với hệ trục tọa độ Oxyz, cho $\\vec a=-\\vec i+2\\vec j-3\\vec k$. Tọa độ của a là",
    "question_en": "In Oxyz space, let $\\vec a=-\\vec i+2\\vec j-3\\vec k$. Find the coordinates of $\\vec a$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-2,-1,-3)$.",
        "content_en": "$(-2,-1,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-3,2,-1)$.",
        "content_en": "$(-3,2,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(2,-3,-1)$.",
        "content_en": "$(2,-3,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(-1,2,-3)$.",
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
    "question_vi": "Trong không gian với hệ trục tọa độ Oxyz cho hai vector $\\vec a=(1, 1,-2)$, $\\vec b=(-2, 1, 4)$. Tìm tọa độ của vector $\\vec u=\\vec a-2\\vec b$.",
    "question_en": "In Oxyz space, let $\\vec a=(1,1,-2)$ and $\\vec b=(-2,1,4)$. Find $\\vec u=\\vec a-2\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(5,-1,-10)$.",
        "content_en": "$(5,-1,-10)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(0,3,0)$.",
        "content_en": "$(0,3,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(-3,3,6)$.",
        "content_en": "$(-3,3,6)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(5,-1,10)$.",
        "content_en": "$(5,-1,10)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{a (1;1; -2 )\nTa có ⇒ u = a - 2b = ( 5; -1; -10 ).\nb = ( -2;1;4 )",
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
    "question_vi": "Cho điểm A ( 3; -1; 1). Hình chiếu vuông góc của điểm A trên mặt phẳng ( Oyz ) là điểm",
    "question_en": "Given A(3,-1,1), find its orthogonal projection onto plane (Oyz).",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$M(3,0,0)$.",
        "content_en": "$M(3,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$N(0,-1,1)$.",
        "content_en": "$N(0,-1,1)$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$P(0,-1,0)$.",
        "content_en": "$P(0,-1,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$Q(0,0,1)$.",
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
    "question_vi": "Trong không gian Oxyz, hình chiếu vuông góc của điểm A (1; 2; 5 ) trên mặt Oxz có tọa độ là",
    "question_en": "In Oxyz space, find the orthogonal projection of A(1,2,5) onto plane Oxz.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(0,2,5)$.",
        "content_en": "$(0,2,5)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(0,2,0)$.",
        "content_en": "$(0,2,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(1,0,5)$.",
        "content_en": "$(1,0,5)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$(0,0,5)$.",
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
    "question_vi": "Trong không gian Oxyz, cho hai điểm A (1; - 1; 2 ) và B ( 2; 1; - 4 ). Véctơ $\\vec{AB}$ có tọa độ",
    "question_en": "In Oxyz space, given A(1,-1,2) and B(2,1,-4), find the coordinates of $\\vec{AB}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(3,0,-2)$.",
        "content_en": "$(3,0,-2)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-1,-2,6)$.",
        "content_en": "$(-1,-2,6)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(1,0,-6)$.",
        "content_en": "$(1,0,-6)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(1,2,-6)$.",
        "content_en": "$(1,2,-6)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: AB = ( 2 - 1;1 - ( -1); - 4 - 2 ) = (1;2; - 6 )",
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
    "question_vi": "Trong không gian Oxyz, cho điểm A (1; -2; 3). Hình chiếu vuông góc của điểm A lên mặt phẳng ( Oyz ) có tọa độ là",
    "question_en": "In Oxyz space, find the orthogonal projection of A(1,-2,3) onto plane (Oyz).",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(1,0,3)$.",
        "content_en": "$(1,0,3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(1,0,0)$.",
        "content_en": "$(1,0,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(1,-2,0)$.",
        "content_en": "$(1,-2,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(0,-2,3)$.",
        "content_en": "$(0,-2,3)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Để tìm tọa độ hình chiếu của điểm A (1; -2;3) lên mặt phẳng ( Oyz ) ta chỉ cần giữ nguyên tung\nđộ và cao độ, cho hoành độ bằng 0.",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz, cho điểm A ( 2; -1; 0 ) và điểm B ( 3; 1; 1). Tọa độ điểm đối xứng với A qua B là",
    "question_en": "In Oxyz space, given A(2,-1,0) and B(3,1,1), find the point symmetric to A with respect to B.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(1,-2,-4)$.",
        "content_en": "$(1,-2,-4)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(0,3,-1)$.",
        "content_en": "$(0,3,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(4,3,2)$.",
        "content_en": "$(4,3,2)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$(0,-1,3)$.",
        "content_en": "$(0,-1,3)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi A′ ( x; y; z ) là điểm đối xứng với A qua B ⇔ B là trung điểm đoạn thẳng AA′\n{ 2+ x\n3 =\n2\n{x = 4\n-1 + y \n⇔ 1 = ⇔ y = 3. Suy ra A′ ( 4;3;2 ).\n2 z = 2\n0+ z \n1 =\n2",
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
    "question_vi": "Trong không gian Oxyz, cho biểu diễn của vectơ $\\vec{a}$ qua các vectơ đơn vị là $\\vec a=2\\vec i+\\vec k-3\\vec j$. Tọa độ của vectơ $\\vec{a}$ là",
    "question_en": "In Oxyz space, $\\vec a=2\\vec i+\\vec k-3\\vec j$. Find the coordinates of $\\vec a$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(2,-3,1)$.",
        "content_en": "$(2,-3,1)$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$(1,-3,2)$.",
        "content_en": "$(1,-3,2)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(2,1,-3)$.",
        "content_en": "$(2,1,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(1,2,-3)$.",
        "content_en": "$(1,2,-3)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: a = 2i + k - 3 j = 2i - 3 j + 1.k ⇒ a = ( 2; -3;1).",
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
    "question_vi": "Trong không gian Oxyz, cho điểm M thỏa mãn hệ thức $\\vec{OM}=2\\vec i+\\vec j$. Tọa độ điểm M là",
    "question_en": "In Oxyz space, point M satisfies $\\vec{OM}=2\\vec i+\\vec j$. Find M.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$M(0,2,1)$.",
        "content_en": "$M(0,2,1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$M(1,2,0)$.",
        "content_en": "$M(1,2,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$M(2,1,0)$.",
        "content_en": "$M(2,1,0)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$M(2,0,1)$.",
        "content_en": "$M(2,0,1)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Vì điểm M thỏa mãn hệ thức OM = 2i + j nên tọa độ điểm M = ( 2;1;0 ).",
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
    "question_vi": "Trong không gian với hệ tọa độ O; i; j; k, cho hai vectơ $\\vec a=(1, 2, 3)$ và $\\vec b=2\\vec i-4\\vec k$. Tính tọa độ vectơ $\\vec u=\\vec a-\\vec b$",
    "question_en": "In the coordinate system $(O;\\vec i,\\vec j,\\vec k)$, let $\\vec a=(1,2,3)$ and $\\vec b=2\\vec i-4\\vec k$. Find the coordinates of $\\vec u=\\vec a-\\vec b$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-1,2,-1)$.",
        "content_en": "$(-1,2,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-1,-2,3)$.",
        "content_en": "$(-1,-2,3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(-1,6,3)$.",
        "content_en": "$(-1,6,3)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(-1,2,7)$.",
        "content_en": "$(-1,2,7)$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có: i = (1;0;0 ); j = ( 0;1;0 ); k = ( 0;0;1) nên b = 2i - 4k ⇒ b = ( 2;0; - 4 ).\nSuy ra u = a - b = ( -1;2;7 ).\n( )",
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
    "question_vi": "Trong không gian Oxyz cho ba điểm M ( 2; 0; 0 ); N ( 0; -3; 0 ); P ( 0; 0; 4 ). Nếu MNPQ là hình bình hành thì tọa độ điểm Q là",
    "question_en": "In Oxyz space, let M(2,0,0), N(0,-3,0), and P(0,0,4). If MNPQ is a parallelogram, find Q.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-2,-3,4)$.",
        "content_en": "$(-2,-3,4)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-2,-3,-4)$.",
        "content_en": "$(-2,-3,-4)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(2,3,4)$.",
        "content_en": "$(2,3,4)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(3,4,2)$.",
        "content_en": "$(3,4,2)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi Q ( x; y; z ) khi đó MN = ( -2; -3;0 ); QP = ( - x; - y;4 - z ).\n{- x = -2 {x = 2\n\nTứ giác MNPQ là hình bình hành ⇔ MN = QP ⇔ - y = -3 ⇔ y = 3. Vậy Q ( 2;3;4 ).\n4 - z = 0 z = 4",
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
    "question_vi": "Trong không gian Oxyz, cho ba điểm A ( - 4; 1; - 5 ), B ( 2; - 4; 7 ), C ( 3; - 2; 9 ). Tọa độ điểm D để ABCD là hình bình hành là",
    "question_en": "In Oxyz space, given A(-4,1,-5), B(2,-4,7), and C(3,-2,9), find D so that ABCD is a parallelogram.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$D(2,3,-3)$.",
        "content_en": "$D(2,3,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$D(-3,3,-3)$.",
        "content_en": "$D(-3,3,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$D(-3,-3,3)$.",
        "content_en": "$D(-3,-3,3)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$D(-6,5,-12)$.",
        "content_en": "$D(-6,5,-12)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{ xD + 4 = 1 { x D = -3\n\nTa có BC = ( 1;2;2 ); ABCD là hình bình hành ⇔ AD = BC ⇔ yD - 1 = 2 ⇔ yD = 3.\nz + 5 = 2 z = -3\nD D",
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
    "question_vi": "Trong không gia Oxyz, cho véctơ $\\vec a=(-3, 2, 1)$ và điểm A ( 4; 6; -3). Tọa độ điểm B thỏa mãn $\\vec{AB}=\\vec a$ là:",
    "question_en": "In Oxyz space, let $\\vec a=(-3,2,1)$ and A(4,6,-3). Find B such that $\\vec{AB}=\\vec a$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-1,-8,2)$.",
        "content_en": "$(-1,-8,2)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(7,4,-4)$.",
        "content_en": "$(7,4,-4)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(1,8,-2)$.",
        "content_en": "$(1,8,-2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(-7,-4,4)$.",
        "content_en": "$(-7,-4,4)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "{ x - 4 = -3 {x = 1\n\nGọi B ( x; y; z ). Khi đó AB = ( x - 4; y - 6; z + 3). Khi đó AB = a ⇔ y - 6 = 2 ⇔ y = 8.\nz + 3 = 1 z = -2",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz, cho ba điểm A ( 0; 1; -2 ), B (1; 2; 1), C ( 4; 3; m ). Tìm m phẳng.",
    "question_en": "In Oxyz space, given A(0,1,-2), B(1,2,1), and C(4,3,m), find m so that O, A, B, and C are coplanar.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m=-7$.",
        "content_en": "$m=-7$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m=-14$.",
        "content_en": "$m=-14$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m=7$.",
        "content_en": "$m=7$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m=14$.",
        "content_en": "$m=14$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Để 4 điểm O, A, B, C đồng phẳng ⇔ OC = aOA + bOB ⇔ ( 4;3; m ) = a ( 0;1; -2 ) + b (1;2;1)\n{4 = b {b = 4\n\n⇒ 3 = a + 2b ⇔ a = -5.\nm = -2a + b m = 14",
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
    "question_vi": "Trong không gian với hệ trục tọa độ Oxyz, cho ba điểm A (1; 2; -1), B ( 2; -1; 3) và C ( -3; 5; 1). Điểm D là đỉnh thứ tư của hình bình hành ABCD. Hãy chọn khẳng định đúng trong các khẳng định sau?",
    "question_en": "In Oxyz space, given A(1,2,-1), B(2,-1,3), and C(-3,5,1), let D be the fourth vertex of parallelogram ABCD. Which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$D(-4,8,-3)$.",
        "content_en": "$D(-4,8,-3)$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$D(-2,8,-3)$.",
        "content_en": "$D(-2,8,-3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$D(-4,8,-5)$.",
        "content_en": "$D(-4,8,-5)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$D(-2,2,5)$.",
        "content_en": "$D(-2,2,5)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử D ( x; y; z ).\n{-3 - x = 1 { x = -4\n\nTứ giác ABCD là hình bình hành ⇔ AB = DC ⇔ 5 - y = -3 ⇒ y = 8\n1 - z = 4 z = -3\n\nVậy D ( -4;8; -3).",
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
    "question_vi": "Trong mặt phẳng tọa độ Oxyz, cho A ( 0; 2; -1); B ( 2; 1; 5 ); C (1; 6; 2 ) và hai điểm M, N thỏa mãn $\\vec{MN}=\\vec{NA}+\\vec{NB}+\\vec{NC}$. Đường thẳng MN luôn đi qua điểm I có tọa độ",
    "question_en": "In Oxyz space, let A(0,2,-1), B(2,1,5), and C(1,6,2). Points M and N satisfy $\\vec{MN}=\\vec{NA}+\\vec{NB}+\\vec{NC}$. The line MN always passes through which point I?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(2,3,5)$.",
        "content_en": "$(2,3,5)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(2,0,3)$.",
        "content_en": "$(2,0,3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(2,-1,3)$.",
        "content_en": "$(2,-1,3)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(1,3,2)$.",
        "content_en": "$(1,3,2)$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có MN = NA + NB + NC ⇔ MN = MA + MB + MC - 3MN ⇔ 4MN = MA + MB + MC\n3\nGọi G là trọng tâm ∆ABC, khi đó 4MN = 3MG ⇔ MN = MG ⇒ MN, MG cùng phương\n4\n⇒ M, G, N thẳng hàng với G (1;3;2 ). Vậy điểm I (1;3;2 ) là điểm cần tìm.",
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
    "question_vi": "Trong không gian Oxyz, cho ba vectơ $\\vec a=(-1, 1, 0)$, $\\vec b=(1, 1, 0)$, $\\vec c=(1, 1, 1)$.",
    "question_en": "In Oxyz space, let $\\vec a=(-1,1,0)$, $\\vec b=(1,1,0)$, and $\\vec c=(1,1,1)$. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$|\\vec a|=2$.",
        "content_en": "$|\\vec a|=2$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "$\\vec b\\perp\\vec a$.",
        "content_en": "$\\vec b\\perp\\vec a$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "$\\vec b\\perp\\vec c$.",
        "content_en": "$\\vec b\\perp\\vec c$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "$3\\vec a+2\\vec b-\\vec c=(-2,4,-1)$.",
        "content_en": "$3\\vec a+2\\vec b-\\vec c=(-2,4,-1)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Vì a = (-1) 2 + 12 + 0 = 2.\nb) Đúng: Vì ab = ( -1).1 + 1.1 + 0 = 0\nc) Sai: Vì bc = 1.1 + 1.1 + 0.1 = 2.\nd) Sai: Vì 3a + 2b - c = ( -2;4; -1).",
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
    "question_vi": "Trong không gian Oxyz, cho $\\vec a=\\vec i+3\\vec k-4\\vec j$ và $\\vec b=(m-n, 4m-6n, n^2-3m+2)$, với m, n là tham số.",
    "question_en": "In Oxyz space, let $\\vec a=\\vec i+3\\vec k-4\\vec j$ and $\\vec b=(m-n,4m-6n,n^2-3m+2)$, where $m,n$ are parameters. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$\\vec a=(1,3,-4)$.",
        "content_en": "$\\vec a=(1,3,-4)$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Dựng điểm A thỏa $\\vec{OA}=\\vec a$ thì $A(1,-4, 3)$.",
        "content_en": "If $\\vec{OA}=\\vec a$, then $A(1,-4,3)$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Tồn tại giá trị của m và n để $\\vec b=\\vec0$",
        "content_en": "There exist values of $m,n$ for which $\\vec b=\\vec0$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Nếu $\\vec a=\\vec b$ thì $m+n=9$.",
        "content_en": "If $\\vec a=\\vec b$, then $m+n=9$.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Tọa độ a = (1; -4;3).\nb) Đúng: Khi OA = a thì tọa độ a cũng là tọa độ điểm A. Suy ra A (1; -4;3).\n{m - n = 0 {m = 0\n\nc) Sai: b = 0 ⇔ 4m - 6n = 0 ⇔ n = 0. (vô nghiệm).\nn 2 - 3m + 2 = 0 n 2 - 3m + 2 = 0\n\nVậy không tồn tại m, n để b = 0.\n{m - n = 1\n{m = 5\nd) Đúng: a = b ⇔ 4m - 6n = -4 ⇔. Suy ra m + n = 9.\nn 2 - 3m + 2 = 3 n = 4",
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
    "question_vi": "Trong không gian Oxyz, cho $\\vec a=(2, 2, 0)$, $\\vec b=2\\vec j+2\\vec k$. Dựng $\\vec{OA}=\\vec a$ và $\\vec{OB}=\\vec b$.",
    "question_en": "In Oxyz space, let $\\vec a=(2,2,0)$ and $\\vec b=2\\vec j+2\\vec k$. Construct $\\vec{OA}=\\vec a$ and $\\vec{OB}=\\vec b$. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$\\vec a=2\\vec i+2\\vec k$.",
        "content_en": "$\\vec a=2\\vec i+2\\vec k$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "$\\vec b=(0,2,2)$.",
        "content_en": "$\\vec b=(0,2,2)$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "$\\vec{AB}=(-2,2,0)$.",
        "content_en": "$\\vec{AB}=(-2,2,0)$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "$\\angle AOB=45^\\circ$.",
        "content_en": "$\\angle AOB=45^\\circ$.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Sai: Ta có a = (2;0;2) ⇒ a = 2i + 2k.\nb) Đúng: Ta có b = 2 j + 2k ⇒ b = (0;2;2).\nc) Đúng: Ta có OA = a thì toạ độ véc tơ a cũng chính là toạ độ A ⇒ A ( 2;0;2 ).\nTương tự B (0;2;2). Từ đây, ta tính được AB = (-2;2;0)\nd) Sai: Nhận xét OHMK.PANB là hình lập phương suy ra ∆OAB đều. Vậy AOB = 60°.",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz cho các véc tơ $\\vec u=2\\vec i-2\\vec j+\\vec k$, $\\vec v=(m, 2, m+1)$ với m là\ntham số thực. Có bao nhiêu giá trị của m để $\\vec u=\\vec v$.",
    "question_en": "In Oxyz space, let $\\vec u=2\\vec i-2\\vec j+\\vec k$ and $\\vec v=(m,2,m+1)$, where $m$ is real. How many values of $m$ satisfy $\\vec u=\\vec v$?",
    "options": [],
    "solution_vi": "Ta có u = ( 2; - 2;1)\nKhi đó u = 22 + ( -2 ) + 12 = 3 và v = m2 + 22 + ( m + 1) = 2m2 + 2m + 5\n2 2\n[m = 1\nDo đó u = v ⇔ 9 = 2m2 + 2m + 5 ⇔ m2 + m - 2 = 0 ⇔ nên có hai giá trị.\nm = -2",
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
    "question_vi": "Trong không gian Oxyz, cho hai điểm A ( 3; 1; - 2 ), B ( 2; - 3; 5 ). Điểm M thuộc đoạn AB sao\ncho MA = 2 MB, tọa độ điểm M là ( a; b; c ). Khi đó a + b + c bằng?",
    "question_en": "In Oxyz space, given A(3,1,-2) and B(2,-3,5), point M lies on segment AB and satisfies MA=2MB. If M=(a,b,c), find a+b+c.",
    "options": [],
    "solution_vi": "Gọi M ( x; y;z ).\n{ 7\nx = 3\n{3 - x = -2 ( 2 - x ) \n5\nVì M thuộc đoạn AB nên: MA = -2 MB ⇔ 1 - y = -2 ( -3 - y ) ⇔ y = - ⇒ a + 3b + c = 0\n3\n-2 - z = -2 ( 5 - z ) 8\nz = 3",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz cho hai điểm A ( 4; 2; 1), B ( -2; - 1; 4 ). Tìm được tọa độ\nđiểm M ( a; b; c ) thỏa mãn đẳng thức $\\vec{AM}=2\\vec{MB}$. Khi đó a + b + c =?",
    "question_en": "In Oxyz space, given A(4,2,1) and B(-2,-1,4), find M(a,b,c) satisfying $\\vec{AM}=2\\vec{MB}$. Find a+b+c.",
    "options": [],
    "solution_vi": "{ x - 4 = 2 ( -2 - x ) {x = 0\n\nGọi điểm M ( x; y; z ). Khi đó: AM = 2MB ⇔ y - 2 = 2 ( -1 - y ) ⇔ y = 0.\nz = 3\nz -1 = 2(4 - z ) \nVậy M ( 0;0;3) nê a + b + c = 3",
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
    "question_vi": "Trong không gian với hệ tọa độ Oxyz cho ba điểm M ( 2; 3; - 1), N ( -1; 1; 1) và P (1; m - 1; 2 ).\nTìm m để tam giác MNP vuông tại N.",
    "question_en": "In Oxyz space, given M(2,3,-1), N(-1,1,1), and P(1,m-1,2), find m so that triangle MNP is right-angled at N.",
    "options": [],
    "solution_vi": "MN ( -3; -2;2 ); NP ( 2; m - 2;1).\nTam giác MNP vuông tại N ⇔ MN.NP = 0 ⇔ -6 - 2 ( m - 2 ) + 2 = 0 ⇔ m - 2 = -2 ⇔ m = 0.",
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
    "question_vi": "Trong không gian với một hệ trục toạ độ cho trước (đơn vị đo lấy theo km), ra đa phát hiện một\nchiếc máy bay di chuyển với vận tốc và hướng không đổi từ điểm A ( 800; 500; 7 ) đến điểm\nB ( 940; 550; 8 ) trong 10 phút. Nếu máy bay tiếp tục giữ nguyên vận tốc và hướng bay thì toạ độ\ncủa máy bay sau 10 phút tiếp theo D ( x; y; z ). Khi đó x + y + z =?",
    "question_en": "In a coordinate system measured in kilometers, radar detects an aircraft moving at constant velocity and direction from A(800,500,7) to B(940,550,8) in 10 minutes. If it continues unchanged, its position after the next 10 minutes is D(x,y,z). Find x+y+z.",
    "options": [],
    "solution_vi": "Gọi D ( x; y; z ) là vị trí của máy bay sau 10 phút bay tiếp theo (tính từ thời điểm máy bay ở điểm\nB ). Vì hướng của máy bay không đổi nên AB và BD cùng hướng. Do vận tốc máy bay không\nđổi và thời gian bay từ A đến B bằng thời gian bay từ B đến D nên AB = BD.\nDo đó, BD = AB = (140;50;1).\n{ x - 940 = 140 { x = 1080\n\nMặt khác: BD = ( x - 940; y - 550; z - 8 ) nên y - 550 = 50 ⇔ y = 600\nz - 8 = 1 z = 9\n\nVậy D (1080;600;9 ). Vậy tọa độ của máy bay trong 10 phút tiếp theo là (1080;600;9 ).\nSuy ra x + y + z = 1689",
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
    "question_vi": "Cho biết máy bay A đang bay với vectơ vận tốc $\\vec a=(300, 200, 400)$(đơn vị: km/h). Máy bay B\nbay cùng hướng và có tốc độ gấp ba lần tốc độ của máy bay A.\nTính tốc độ của máy bay B.",
    "question_en": "Aircraft A has velocity vector $\\vec a=(300,200,400)$ km/h. Aircraft B flies in the same direction at three times the speed of A. Find the speed of aircraft B.",
    "options": [],
    "solution_vi": "{3.300 = x { x = 900\n\nTa có: 3a = b ⇔ 3.200 = y ⇔ y = 600 ⇒ b = ( 900;600;1200 )\n3.400 = z \nz = 1200\nTốc độ của máy bay B là: b = 9002 + 6002 + 12002 ≈ 1615,55 (km/h)\n-----------------HẾT-----------------",
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
    "question_vi": "Giá trị lớn nhất của hàm số $y=16-x^2$ là",
    "question_en": "Find the maximum value of $y=16-x^2$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$16$.",
        "content_en": "$16$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$4$.",
        "content_en": "$4$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$0$.",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$1$.",
        "content_en": "$1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y = 16 - x^2 ≤ 4, dấu “=” khi x = 0. Vậy max y = 4.\n[ -4;4]",
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
    "question_vi": "Gọi M, m lần lượt là giá trị lớn nhất, giá trị nhỏ nhất của hàm số $y=x\\sqrt{16-x^2}$. Tính $M+m$",
    "question_en": "Let $M$ and $m$ be the maximum and minimum values of $y=x\\sqrt{16-x^2}$. Find $M+m$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$8-8$.",
        "content_en": "$8-8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$8$.",
        "content_en": "$8$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$0$.",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$8$.",
        "content_en": "$8$.",
        "is_correct": false
      }
    ],
    "solution_vi": "x2 16 - 2 x^2\nĐiều kiện xác định -4 ≤ x ≤ x. Đạo hàm y′ = 16 - x^2 - =.\n16 - x^2 16 - x^2\nTa có y′ = 0 ⇔ 16 - 2 x^2 = 0 ⇔ x = ± 8\n(\nXét y ( -4 ) = y ( 4 ) = 0; y - 8 = -8; y ) ( 8 ) = 8 do đó M = 8, m = -8. Vậy M + m = 0.\n9",
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
    "question_vi": "Một loại vi khuẩn được tiêm một loại thuốc kích thích sự sinh sản. Sau t phút, số vi khuẩn được\nxác định theo công thức $N(t)=1000+30t^2-t^3$( $0\\le t\\le30$ ). Hỏi sau bao giây thì số vi khuẩn\nlớn nhất?",
    "question_en": "A type of bacteria is given a reproduction-stimulating drug. After $t$ minutes, the population is $N(t)=1000+30t^2-t^3$, where $0\\le t\\le30$. After how many seconds is the bacterial population largest?",
    "options": [],
    "solution_vi": "Xét hàm số N ( t ) = 1000 + 30t 2 - t 3 ( 0 ≤ t ≤ 30 ).\n[t = 0\nTa có: N ′ ( t ) = 60t - 3t 2 = 0 ⇔ \nt = 20\nVới t = 20 giây thì số vi khuẩn lớn nhất.\n-----------------HẾT-----------------\n26",
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
    "question_vi": "Một chất điểm chuyển động với quãng đường s ( t ) cho bởi công thức $s(t)=6t^2-t^3$, t (giây) là thời gian. Hỏi trong khoảng thời gian từ 0 đến 4 giây, vận tốc tức thời của chất điểm đạt giá trị lớn nhất tại thời điểm t (giây) bằng bao nhiêu?",
    "question_en": "A particle travels a distance $s(t)=6t^2-t^3$, where $t$ is in seconds. During the interval from 0 to 4 seconds, at what time is its instantaneous velocity greatest?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$t=3$ s.",
        "content_en": "$t=3$ s.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$t=4$ s.",
        "content_en": "$t=4$ s.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$t=2$ s.",
        "content_en": "$t=2$ s.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$t=6$ s.",
        "content_en": "$t=6$ s.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có v ( t ) = s′ ( t ) = 12t - 3t; v′ ( t ) = 12 - 6t = 0 ⇔ t = 2\n2\nLập bảng biến thiên ta thấy v ( t ) đạt giá trị lớn nhất tại t = 2 giây.",
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
    "question_vi": "Trong 3 giây đầu tiên, một chất điểm chuyển động theo phương trình $s(t)=-t^3+6t^2+t+5$, trong đó t tính bằng giây và s tính bằng mét. Chất điểm có vận tốc tức thời lớn nhất bằng bao nhiêu trong 3 giây đầu tiên đó?",
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
    "solution_vi": "Ta có v ( t ) = s′ ( t ) = -3t + 12t + 1. Xét hàm số v ( t ) = -3t 2 + 12t + 1 trên đoạn [ 0;5]\n2\nv′ ( t ) = -6t + 12 = 0 ⇔ t = 2\nTính các giá trị v ( 0 ) = 1; v ( 2 ) = 13; v ( 3) = 10\nSo sánh các giá trị ta suy ra max v ( t ) = 13.\n[0; 3]",
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
    "question_vi": "Độ giảm huyết áp của một bệnh nhân được cho bởi công thức $G(x)=0. 025x^2(30-x)$, trong đó x là liều lượng thuốc được tiêm cho bệnh nhân ( x được tính bằng miligam). Liều lượng thuốc cần tiêm cho bệnh nhân là bao nhiêu để huyết áp được giảm nhanh nhất?",
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
    "solution_vi": "Bài toán trở thành tìm x ∈ [ 0;30] để hàm số G ( x ) = 0,025 x^2 ( 30 - x ) đạt giá trị lớn nhất\n[x = 0\nTa có: G ( x ) = 0,025 x^2 ( 30 - x ) ⇒ G′ ( x ) = 0,025 ( 60 x - 3x 2 ) = 0 ⇔ \nx = 25\nBảng biến thiên\nTừ bảng biến thiên ta thấy max G ( x ) = G ( 20 ) = 100\n[0; 30]\nVậy liều lượng thuốc cần tiêm cho bệnh nhân để huyết áp giảm nhanh nhất là 20 mg.\n4",
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
    "question_vi": "Trong thí nghiệm y học, người ta cấy 1000 vi khuẩn vào môi trường dinh dưỡng. Bằng thực nghiệm, người ta xác định số lượng vi khuẩn thay đổi theo thời gian bởi công thức: $N(t)=1000+\\dfrac{100t}{100+t^2}$. Tính số lượng vi khuẩn lớn nhất kể từ khi thực hiện cấy vi khuẩn vào môi trường dinh dưỡng.",
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
    "solution_vi": "100 100.(100 + t 2 ) - 100t.2t 100 (100 - t 2 )\nXét hàm số N ( t ) = 1000 + có N ′ ( t ) = =\n100 + t 2 (100 + t 2 ) (100 + t 2 )\n2 2\nKhi đó với t > 0 N ′ ( t ) = 0 ⇔ 100 - t 2 = 0 ⇔ t = 10\nBảng biến thiên của hàm số N ( t ) như sau:\nCăn cứ vào bảng biến thiên ta thấy trên khoảng ( 0;+ ∞ ) hàm số N ( t ) đạt giá trị lớn nhất bằng\n1005 tại t = 10.\nVậy số lượng vi khuẩn lớn nhất kể từ khi thực hiện nuôi cấy vào môi trường dinh dưỡng là 1005\ncon.",
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
    "question_vi": "Cho một tấm tôn hình chữ nhật có kích thước 10cm x 16cm. Người ta cắt bỏ 4 góc của tấm tôn 4 miếng hình vuông bằng nhau rồi gò lại thành một hình hộp chữ nhật không có nắp. Để thể tích của hình hộp đó lớn nhất thì độ dài cạnh hình vuông của các miếng tôn bị cắt bỏ bằng",
    "question_en": "A 10 cm by 16 cm rectangular metal sheet has equal squares cut from its four corners and is folded into an open-top rectangular box. What should the side length of each cut-out square be to maximize the box volume?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3m.",
        "content_en": "3 cm.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "4 m.",
        "content_en": "4 cm.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "5m.",
        "content_en": "5 cm.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2 m.",
        "content_en": "2 cm.",
        "is_correct": false
      }
    ],
    "solution_vi": "Giả sử độ dài cạnh hình vuông của các miếng tôn bị cắt bỏ bằng x, ( 0 < 2 x < 10,0 < x < 5 ).\nKhi đó hình hộp chữ nhật có chiều cao bằng x, chiều rộng bằng 10 - 2x và chiều dài bằng\n16 - 2x\nSuy ra hình hộp chữ nhật có thể tích V = x (10 - 2 x )(16 - 2 x ) = 4 x^3 - 52 x^2 + 160 x\nXét hàm số f ( x ) = 4 x3 - 52 x^2 + 160 x trên ( 0;5 ) có tập xác định là D =\n[x = 2\nf ′ ( x ) = 12 x - 104 x + 160 = 0 ⇔ \n2\n. Bảng biến thiên hàm số f ( x ) trên ( 0;5 ) như sau:\nx = 20\n3\nDựa vào bảng biến thiên ta có hàm số đạt giá trị lớn nhất trên ( 0;5 ) tại x = 2 hay hình hộp chữ\nnhật có thể tích lớn nhất khi độ dài cạnh hình vuông của miếng tôn bị cắt bỏ bằng 2m.",
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
    "question_vi": "Ông Bình dự định sử dụng hết $5. 5\\,\\text{m}^2$ kính để làm một bể cá bằng kính có dạng hình hộp chữ nhật không nắp, chiều dài gấp đôi chiều rộng (các mối ghép có kích thước không đáng kể). Bể cá có dung tích lớn nhất bằng bao nhiêu (làm tròn đến hàng phần trăm)?",
    "question_en": "Mr. Binh uses exactly $5.5\\,\\text{m}^2$ of glass to make an open-top rectangular aquarium whose length is twice its width. Neglecting joint thickness, what is the maximum possible volume of the aquarium? Round to the nearest hundredth.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$1.01\\,\\text{m}^3$.",
        "content_en": "$1.01\\,\\text{m}^3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$1.17\\,\\text{m}^3$.",
        "content_en": "$1.17\\,\\text{m}^3$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$1.51\\,\\text{m}^3$.",
        "content_en": "$1.51\\,\\text{m}^3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$1.40\\,\\text{m}^3$.",
        "content_en": "$1.40\\,\\text{m}^3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x, 2 x, y với x, y > 0 lần lượt là chiều rộng, chiều dài, chiều cao của bể cá.\n5,5 - 2 x^2\nTheo giả thiết ta có: 2.2 xy + 2.xy + 2 x^2 = 5,5 ⇔ 6 xy + 2 x^2 = 5,5 ⇔ y =\n6x\n11\nDo y > 0 nên 5,5 - 2 x^2 > 0 ⇒ 0 < x <\n2\n5,5 - 2 x^2 2 11\nThể tích bể cá là: V ( x ) = 2 x^2 y = 2 x^2. = - x3 + x\n6x 3 6\n2 11 ( 11 ) 11 11\nXét hàm số V ( x ) = - x3 + x trên khoảng 0; có V ′ ( x ) = -2 x + = 0 ⇔ x =\n2\n3 6 2 6 12\nBảng biến thiên:\n( 11 )\n12 = 1,17m\nThể tích lớn nhất của bể cá là V 3",
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
    "question_vi": "Người ta muốn xây một bể nước dạng hình hộp chữ nhật không nắp có thể tích $\\dfrac{500}{3}\\,\\text{m}^3$. Đáy bể là hình chữ nhật có chiều dài gấp đôi chiều rộng và giá thuê thợ xây là 700.000 đồng/m$^2$. Tìm kích thước bể để chi phí thuê nhân công nhỏ nhất và xác định chi phí nhỏ nhất.",
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
    "solution_vi": "Gọi x, y lần lượt là chiều rộng và chiều cao của bể cá (điều kiện x, y > 0 ).\n500 250\nVới giả thiết của bài toán, thể tích bể cá là: V = 2 x^2 y = ⇒y= 2\n3 3x\nĐể chi phí thuê nhân công ít nhất thì tổng diện tích các mặt của bể cá phải nhỏ nhất.\n500\nTổng diện tích các mặt của bể cá S = 2 xy + 2.2 xy + 2 x^2 = 6 xy + 2 x^2 = + 2 x2\nx\n500 500\nXét hàm số S ( x ) = + 2 x^2 trên khoảng ( 0;+ ∞ ) có S ′ ( x ) = - 2 + 4 x = 0 ⇔ x = 5\nx x\nBảng biến thiên:\nDo đó min S = 150 tại x = 5.\nKhi đó chi phí thuê nhân công là: T = 150.700000 = 105 triệu đồng.",
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
        "content_vi": "30, 5 triệu đồng.",
        "content_en": "30.5 million VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "29, 5 triệu đồng.",
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
    "solution_vi": "Gọi giá bán mới là x (triệu đồng) với 27 ≤ x ≤ 31\nKhi đó số xe bán ra là 600 + ( 31 - x ).200\nLợi nhuận thu được là: f ( x ) = [600 + ( 31 - x ).200 ] ( x - 27 ) = ( -200 x + 6800 )( x - 27 )\n2\n( 61 )\n= -200 x + 12200 x - 183600 = -200 x - + 2450 ≤ 2450\n2\n2\n61\nDấu \" = \" xảy ta khi x - = 0 ⇔ x = 30,5\n2\nVậy giá bán mới là 30,5 triệu đồng thì lợi nhuận lớn nhất thu được là 2450 triệu đồng.",
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
    "question_vi": "Nhà máy A chuyên sản xuất một loại sản phẩm cung cấp cho nhà máy B. Hai nhà máy thoả thuận rằng, hằng tháng A cung cấp cho B số lượng sản phẩm theo đơn đặt hàng của B (tối đa 100 tấn sản phẩm). Nếu số lượng đặt hàng là x tấn sản phẩm thì giá bán cho mỗi tấn sản phẩm là $P(x)=45-0. 001x^2$(triệu đồng). Chi phí để A sản xuất x tấn sản phẩm trong một tháng là $C(x)=100+30x$(triệu đồng) (gồm 100 triệu đồng chi phí cố định và 30 triệu đồng cho mỗi tấn sản phẩm).",
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
        "content_vi": "Lợi nhuận mà A thu được khi bán x tấn sản phẩm ( $0\\le x\\le100$ ) cho B được biểu diễn bằng công thức $-0. 01x^3+15x-100$.",
        "content_en": "For $0\\le x\\le100$, the profit is $-0.01x^3+15x-100$ million VND.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "A bán cho B khoảng 70, 7 tấn sản phẩm mỗi tháng thì thu được lợi nhuận lớn nhất.",
        "content_en": "A maximizes monthly profit by selling approximately 70.7 tons to B.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Chi phí để A sản xuất 10 tấn sảm phẩm trong một tháng là C (10 ) = 10 + 30.10 = 400\ntriệu.\nb) Sai: Số tiền mà A thu được (gọi là doanh thu) từ việc bán x tấn sản phẩm ( 0 ≤ x ≤ 100 ) cho\n( )\nB là: R ( x ) = x.P ( x ) = x 45 - 0,001x 2 = 45 x - 0,001x 3 triệu đồng\nThay x = 10 ta được R (10 ) = 449 triệu đồng\nc) Đúng: Lợi nhuận (triệu đồng) mà A thu được là:\nP ( x ) = R ( x ) - C ( x ) = x ( 45 - 0,001x 2 ) - (100 + 30 x ) = -0,001x 3 + 15 x - 100\nd) Đúng: Xét hàm số P ( x ) = -0,001x 3 + 15 x - 100 với ( 0 ≤ x ≤ 100 ) ta có:\nP′ ( x ) = -0,003x 2 + 15 = 0 ⇔ x^2 = 5000 ⇔ x = 50 2 ∈ [ 0;100]\n( )\nTa có P ( 0 ) = -100; P 50 2 = 500 2 - 100 ≈ 607; P (100 ) = 400\nBảng biến thiên\n[0;100]\n( )\nTừ bảng biến thiên ta có max P = P 50 2 = 500 2 - 100 ≈ 667\nVậy A thu được lợi nhuận lớn nhất khi bán 50 2 ≈ 70,7 tấn sản phẩm cho B mỗi tháng và\nlợi nhuận lớn nhất thu được khoảng 607 triệu đồng.",
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
    "question_vi": "Khi nuôi tôm trong một hồ tự nhiên, một nhà khoa học đã thống kê được rằng: Nếu trên mỗi mét vuông mặt hồ thả x con tôm giống thì cuối vụ mỗi con tôm có cân nặng trung bình là $108-x^2$(gam).",
    "question_en": "When shrimp are raised in a natural pond, a scientist observes that if $x$ juvenile shrimp are stocked per square meter, the average final weight of each shrimp is $108-x^2$ grams. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Điều kiện xác định là $x\\ge0$",
        "content_en": "The stated domain condition is $x\\ge0$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Sau một vụ lượng tôm trung bình trên mỗi mét vuông mặt hồ tự nhiên nặng $x(108-x^2)$",
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
    "solution_vi": "a) Đúng: Điều kiện xác định là x ≥ 0\nb) Đúng: Sau một vụ lượng tôm trung bình trên mỗi mét vuông mặt hồ tự nhiên nặng x (108 - x^2 )\nc) Sai: Xét hàm số f ( x ) = 108 x - x3 trên khoảng ( 0;+∞ ) ta có\n[x = 6\nf ′ ( x ) = 108 - 3x 2 = 0 ⇔ 108 - 3x 2 = 0 ⇔ \nx = -6 < 0\nTrên khoảng ( 0;+∞ ) hàm số f ( x ) = 108 x - x3 đạt giá trị lớn nhất tại x = 6.\nVậy nên thả 6 con tôm giống trên mỗi mét vuông mặt hồ thì cuối vụ thu hoạch được nhiều tôm\nnhất.\nd) Đúng: Lượng tôm nhiều nhất cuối vụ có thể thu hoạch được trên mỗi mét vuông mặt hồ tự\nnhiên là f ( 6 ) = 108.6 - 63 = 432 (gam).\n12",
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
        "content_vi": "Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng. 12 a",
        "content_en": "The box volume is maximized when the side of each cut-out square is $a/12$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng. 6 3 2a",
        "content_en": "The box volume is maximized when the side of each cut-out square is $a/6$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Thể tích của khối hộp lớn nhất bằng. 27 a3",
        "content_en": "The maximum box volume is $2a^3/27$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Thể tích hộp lớn nhất bằng. 27",
        "content_en": "The maximum box volume is $a^3/27$.",
        "is_correct": false
      }
    ],
    "solution_vi": "( a)\nGọi x là độ dài cạnh của hình vuông bị cắt 0 < x <.\n2\n2 ( a)\nThể tích của khối hộp là: V ( x ) = x ( a - 2 x ) 0 < x <.\n2\na ( a)\nV ′ ( x ) = ( a - 2 x ) + x.2 ( a - 2 x ). ( -2 ) = ( a - 2 x )( a - 6 x ) = 0 ⇔ x = 0 < x <.\n2\n\n6 2\nBảng biến thiên:\n( a ) 2a\n3\nVậy max V ( x) = V =.\n( a)\n0; 6 27\n2\na\na) Sai: Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng.\n12\na\nb) Đúng: Thể tích của khối hộp là lớn nhất khi cạnh của hình vuông bị cắt bằng.\n6\n2a 3\nc) Đúng: Thể tích của khối hộp lớn nhất bằng.\n27\na3\nd) Sai: Thể tích hộp lớn nhất bằng.\n27\n14",
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
    "question_vi": "Một loại thuốc được dùng cho một bệnh nhân và nồng độ thuốc trong máu của bệnh nhân được\ngiám sát bởi bác sĩ. Biết rằng nồng độ thuốc trong máu của bệnh nhân sau khi tiêm vào cơ thể\ntrong t (giờ) được cho bởi công thức $c(t)=\\dfrac{t}{t^2+1}$ mg/L. Sau khi tiêm thuốc bao lâu (giờ) thì\nnồng độ thuốc trong máu của bệnh nhân cao nhất?",
    "question_en": "After a drug is injected, its concentration in a patient’s blood is $c(t)=\\dfrac{t}{t^2+1}$ mg/L, where $t$ is measured in hours. How many hours after injection is the concentration highest?",
    "options": [],
    "solution_vi": "-t + 1\n2\n[t = 1\nTa có c ' ( t ) =, ∀t ∈ ( 0; +∞ ). Cho c ' ( t ) = 0 ⇔.\n( t + 1) t = -1\n2 2\nBảng biến thiên:\nVậy sau khi tiêm 1 giờ, nồng độ thuốc trong máu bệnh nhân cao nhất.",
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
    "question_vi": "Sự ảnh hưởng khi sử dụng một loại độc tố với vi khuẩn X được một nhà sinh học mô tả bởi hàm\nsố $P(t)=\\dfrac{t+1}{t^2+t+4}$ trong đó P ( t ) là số lượng vi khuẩn sau t giờ sử dụng độc tố. Sau bao nhiêu\ngiờ thì số lượng vi khuẩn X bắt đầu giảm?",
    "question_en": "A biologist models the effect of a toxin on bacteria X by $P(t)=\\dfrac{t+1}{t^2+t+4}$, where $P(t)$ is the bacterial population after $t$ hours of toxin exposure. After how many hours does the population begin to decrease?",
    "options": [],
    "solution_vi": "Xét P′ ( t ) =\n-t - 2t + 3\n2\n=\n( t - 1)( -t - 3).\n(t + t + 4) (t + t + 4)\n2 2 2 2\n[t = -3\nP′ ( t ) = 0 ⇔.\nt = 1\nTa thấy hàm số đạt cực đại tại t = 1 và P ' ( t ) < 0, ∀t ∈ (1; +∞ ) nên sau 1 giờ thì vi khuẩn bắt đầu\ngiảm.\n1",
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
    "question_vi": "Một cửa hàng bán vải Thanh Hà với giá bán mỗi kg là 50. 000 đồng. Với giá bán này thì cửa hàng\nchỉ bán được khoảng 25kg. Cửa hàng này dự định giảm giá bán, ước tính nếu cửa hàng cứ giảm\n4000 đồng cho một kg thì số vải bán được tăng thêm là 50kg. Xác định giá bán để cửa hàng đó\nthu được lợi nhuận lớn nhất, biết rằng giá nhập về ban đầu mỗi kg là 30. 000 đồng.",
    "question_en": "Thanh Ha fabric store sells fabric at 50,000 VND/kg and at that price sells about 25 kg. The store estimates that each 4,000-VND reduction in price per kilogram increases sales by 50 kg. Find the selling price that maximizes profit, given a purchase cost of 30,000 VND/kg.",
    "options": [],
    "solution_vi": "20 \nGọi x đồng ( 30.000 < x < 50.000 ) là giá bán vải mới để cửa hàng thu được lợi nhuận lớn nhất.\nSuy ra giá bán ra đã giảm là ( 50.000 - x ) đồng.\n50 ( 50000 - x )\nSố lượng vải bán ra đã tăng thêm là = 625 - 0,0125.x.\n4000\nTổng số vải bán được là 25 + 625 - 0,0125.x = 650 - 0,0125.x.\nDoanh thu của cửa hàng là ( 650 - 0,0125.x ) x.\nSố tiền vốn ban đầu để mua vải là ( 650 - 0,0125.x ) 30000.\nVậy lợi nhuận của cửa hàng là\n( 650 - 0,0125.x ) x - ( 650 - 0,0125.x ) 30000 = -0,0125 x^2 + 1025 x - 19500000.\nTa có: f ( x ) = -0,0125 x^2 + 1025 x - 19500000 = -0,0125 ( x - 41000 ) + 1512500 ≤ 1512500.\n2\nSuy ra max f ( x ) = 1512500 khi x = 41.000 đồng.\nVậy giá bán mỗi cân vải là 41.000 đồng thì cửa hàng thu được lợi nhuận lớn nhất.",
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
    "question_vi": "Có bao nhiêu giá trị của tham số m để hàm số y =$f(x)=4x-m-x^2$ đạt giá trị lớn nhất bằng\n5?",
    "question_en": "How many values of $m$ make $f(x)=4x-m-x^2$ attain a maximum value of $5$?",
    "options": [],
    "solution_vi": "Hàm số y = f ( x ) đạt giá trị lớn nhất bằng 5 thì 4 x - m - x^2 ≤ 5 ⇔ 4 x - m ≤ x^2 + 5, ∀x ∈\n{\n4 x - m ≤ x + 5, ∀x ∈\n2\n{\nm ≥ - x + 4 x - 5, ∀x ∈\n2\n{m ≥ -1\n⇔ ⇔ ⇔.\n4 x - m ≥ - x - 5, ∀x ∈\nm ≤ x + 4 x + 5, ∀x ∈\nm ≤ 1\n2 2\n[ m = -1\nDo đó giá trị lớn nhất của hàm số y = f ( x ) bằng 5 ⇔ ⇔ m ∈ {-1;1}.\nm = 1\nVậy có 2 giá trị m cần tìm.\n2 x +1 + m",
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
    "question_vi": "Tìm m để đồ thị của hàm số $y=x^3+3mx^2-2x-4$ cắt trục hoành tại 3 điểm phân biệt có hoành độ là $x_1, x_2, x_3$ thỏa mãn $x_1+x_2=2x_3$.",
    "question_en": "Find $m$ so that the graph of $y=x^3+3mx^2-2x-4$ intersects the x-axis at three distinct points with abscissas $x_1,x_2,x_3$ satisfying $x_1+x_2=2x_3$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m=0$.",
        "content_en": "$m=0$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m=1$.",
        "content_en": "$m=1$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$m=2$.",
        "content_en": "$m=2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m=3$.",
        "content_en": "$m=3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Xét phương trình hoành độ giao điểm của y = x^3 + 3mx 2 - 2 x - 4 và trục hoành ta có\nx^3 + 3mx 2 - 2 x - 4 = 0 (1).\nÁp dụng định lý Vi-et ta có x1 + x2 + x3 = 3x3 = -3m ⇒ x3 = -m.\nThay x3 = - m vào (1) ta được 2m3 + 2m - 4 = 0 ⇔ m = 1.\n[ x = -1\nThử lại: Thay m = 1 vào (1) ta được x3 + 3x 2 - 2 x - 4 = 0 ⇔, thỏa mãn điều kiện.\nx = -1 ± 5\nVậy m = 1 thỏa mãn điều kiện bài toán.",
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
    "question_vi": "Tìm các giá trị thực của tham số m để đồ thị hàm số $y=x^3-3x^2+2$ cắt đường thẳng $y=m(x-1)$ tại ba điểm phân biệt có hoành độ $x_1, x_2, x_3$ thoả mãn $x_1^2+x_2^2+x_3^2>5$.",
    "question_en": "Find all real values of $m$ for which the graph of $y=x^3-3x^2+2$ intersects the line $y=m(x-1)$ at three distinct points with abscissas $x_1,x_2,x_3$ satisfying $x_1^2+x_2^2+x_3^2>5$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m\\ge-3$.",
        "content_en": "$m\\ge-3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m>-2$.",
        "content_en": "$m>-2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m>-3$.",
        "content_en": "$m>-3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m\\ge-2$.",
        "content_en": "$m\\ge-2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Phương trình hoành độ giao điểm\n[x = 1\nx3 - 3x 2 + 2 = m( x - 1) ⇔ ( x - 1) ( x^2 - 2 x - 2 - m ) = 0 ⇔ 2\nx - 2 x - 2 - m = 0 (*)\nĐồ thị hàm số y = x3 - 3x 2 + 2 cắt đường thẳng y = m( x - 1) tại ba điểm phân biệt khi và chỉ\n{1 + 2 + m > 0\nkhi phương trình ( ∗) có hai nghiệm phân biệt khác 1 ⇔ ⇔ m > -3.\n1 - 2 - 2 - m ≠ 0\nGọi x2, x3 là hai nghiệm của phương trình ( ∗).\nTa có: x12 + x22 + x32 > 5 ⇔ ( x2 + x3 ) - 2 x2 x3 > 4 ⇔ 4 - 2 ( -2 - m ) > 4 ⇔ m > -2. Vậy m > -2.\n2",
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
    "question_vi": "Cho hàm số $y=x^3-3x^2+mx+1$ có đồ thị ( C ) và đường thẳng $d: y=2x+1$. Có bao nhiêu giá\ntrị nguyên dương của tham số m để đồ thị ( C ) cắt đường thẳng d tại 3 điểm phân biệt?",
    "question_en": "Let $(C)$ be the graph of $y=x^3-3x^2+mx+1$ and let $d:y=2x+1$. How many positive integer values of $m$ make $(C)$ intersect $d$ at three distinct points?",
    "options": [],
    "solution_vi": "Phương trình hoành độ giao điểm x3 - 3x 2 + mx + 1 = 2 x + 1 ⇔ x3 - 3x 2 + ( m - 2 ) x = 0\n[x = 0\n⇔ x ( x^2 - 3x + m - 2 ) = 0 ⇔ 2. Đặt f ( x ) = x^2 - 3x + m - 2.\nx - 3x + m - 2 = 0\nĐể đồ thị ( C ) cắt đường thẳng d tại 3 điểm phân biệt thì phương trình\nx3 - 3x 2 + ( m - 2 ) x = 0 phải có 3 nghiệm phân biệt, khi đó f ( x ) = 0 phải có hai nghiệm phân\n{m ≠ 2\n{ f ( 0 ) ≠ 0 {m - 2 ≠ 0 {m ≠ 2 \nbiệt khác 0. Do đó ⇔ ⇔ ⇔ 17.\n∆ > 0 9 - 4 ( m - 2 ) > 0 -4m > -17 m <\n4\nDo m là số nguyên dương nên m ∈ {1,3, 4}.",
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
    "question_vi": "Với m là một tham số thực thì đồ thị hàm số $y=x^3-2x^2+x-1$ và đường thẳng $y=m$ có nhiều\nnhất bao nhiêu giao điểm?",
    "question_en": "For real parameter $m$, what is the maximum possible number of intersection points between the graph $y=x^3-2x^2+x-1$ and the line $y=m$?",
    "options": [],
    "solution_vi": "[ 1\nx=\nHàm số y = x - 2 x + x - 1 có tập xác định:\n3 2\n; y′ = 3 x - 4 x + 1; y ' = 0 ⇔\n2\n3.\n\nx = 1\n22 \nDựa vào bảng biến thiên đồ thi hàm số y = x^3 - 2 x^2 + x - 1 và đường thẳng y = m có nhiều\nnhất là ba giao điểm.",
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
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để phương trình $x^3-3x^2-m^2+5m=0$ có ba nghiệm\nthực phân biệt?",
    "question_en": "How many integer values of $m$ make the equation $x^3-3x^2-m^2+5m=0$ have three distinct real roots?",
    "options": [],
    "solution_vi": "Đặt f ( x ) = x3 - 3x 2 - m 2 + 5m.\nĐể x3 - 3x 2 - m 2 + 5m = 0 có ba nghiệm thực phân biệt thì f ′ ( x ) = 0 có hai nghiệm phân biệt\nx1, x2 thỏa mãn: f ( x1 ). f ( x2 ) < 0\n[x = 0\nTa có: f ′ ( x ) = 3x 2 - 6 x; f ′ ( x ) = 0 ⇔ 3x 2 - 6 x = 0 ⇔.\nx = 2\nf ( 0 ) = -m 2 + 5m; f ( 2 ) = -m 2 + 5m - 4.\n[0 < m < 1\nKhi đó: f ( 0 ). f ( 2 ) < 0 ⇔ ( -m2 + 5m )( -m2 + 5m - 4 ) < 0 ⇔ \n4 < m < 5\nVậy không có giá trị nguyên nào của m thỏa mãn.",
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
    "question_vi": "Cho hàm số $y=x^3-(m+2)x^2-(2m+13)x-m-2$ có đồ thị ( Cm ); đường thẳng $d: y=mx+m+8$ và điểm $I(1, 4)$. Tính tổng tất cả các giá trị của tham số m biết rằng đường\nthẳng d cắt đồ thị ( Cm ) tại ba điểm phân biệt A, B, C với A có hoành độ bằng -2 và tam giác\nIBC cân tại I.",
    "question_en": "Let $(C_m)$ be the graph of $y=x^3-(m+2)x^2-(2m+13)x-m-2$, let $d:y=mx+m+8$, and let $I(1,4)$. Find the sum of all values of $m$ such that $d$ intersects $(C_m)$ at three distinct points A, B, C, where A has abscissa $-2$ and triangle IBC is isosceles at I.",
    "options": [],
    "solution_vi": "[ x = -2\nPhương trình hoành độ giao điểm: x - ( m + 2 ) x - ( 3m + 13) x - 2m - 10 = 0 ⇔ x = -1\n3\nx = m + 5\n{m ≠ -7\nĐể đường thẳng d cắt đồ thị ( Cm ) tại ba điểm phân biệt A, B, C thì \nm ≠ -6\nGiả sử B ( -1;8 ), C ( m + 5; m2 + 6m + 8 ). Để tam giác IBC cân tại I\n[ m = -2\n\nthì IB 2 = IC 2 ⇔ 20 = ( m + 4 ) + ( m 2 + 6m + 4 ) ⇔ m = -6 ( loai )\n2 2\n\nm = -2 ± 3\nVậy có ba giá trị của m thỏa mãn nên tổng các giá trị của m bằng -6.",
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
    "question_vi": "Cho hàm số $y=x^3-2x^2-1$ có đồ thị ( C ), đường thẳng $d: y=mx-1$ và điểm $K(4, 11)$. Biết\nrằng ( C ) và ( d ) cắt nhau tại ba điểm phân biệt A, B, C trong đó $A(0,-1)$ còn trọng tâm tam giác\nKBC nằm trên đường thẳng $y=2x+1$. Tìm giá trị của tham số m",
    "question_en": "Let $(C)$ be the graph of $y=x^3-2x^2-1$, let $d:y=mx-1$, and let $K(4,11)$. Suppose $(C)$ and $d$ intersect at three distinct points A, B, C, with $A(0,-1)$, and the centroid of triangle KBC lies on $y=2x+1$. Find $m$.",
    "options": [],
    "solution_vi": "[x = 0\nXét phương trình hoành độ: x3 - 2 x^2 - 1 = mx - 1 ⇔ x3 - 2 x^2 - mx = 0 ⇔ 2\nx - 2 x - m = 0 (1)\nSuy ra A(0; -1) và hoành độ của điểm B và C là nghiệm của phương trình (1)\nĐể ( C ) và ( d ) cắt nhau tại ba điểm phân biệt A, B, C khi và chỉ khi phương trình (1) có hai\nnghiệm phân biệt khác 0\n{∆ '(1) > 0 {1 + m > 0 {m > -1\nKhi và chỉ khi: ⇔ ⇔ (*)\nm ≠ 0 m ≠ 0 m ≠ 0\nGiả sử: B ( x1;m x1 - 1), C ( x2;m x2 - 1). Theo Vi-ét ta có x1 + x2 = 2\nGọi G là trọng tâm của tam giác KBC:\n{ 4 + x1 + x2\nxG = { xG = 2\n3 ( 2m + 9 )\n⇔ 2m + 9 ⇒ G 2; \ny = 11 + mx1 - 1 + mx2 - 1 yG = 3 3 \nG 3\n2m + 9\nTrọng tâm G nằm trên đường thẳng y = 2 x + 1 suy ra = 2.2 + 1 ⇔ m = 3 thỏa mãn (*)\n3\n-----------------HẾT-----------------",
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
    "question_vi": "Tìm tất cả các giá trị thực của tham số $m$ để đường thẳng $d:y=x-2m$ cắt đồ thị $(C):y=\\dfrac{x-3}{x+1}$ tại hai điểm phân biệt có hoành độ dương. Tập các giá trị của $m$ là khoảng $(a,b)$. Tính $a+b$.",
    "question_en": "All real values of $m$ for which the line $d:y=x-2m$ intersects $(C):y=\\dfrac{x-3}{x+1}$ at two distinct points with positive abscissas form an interval $(a,b)$. Find $a+b$.",
    "options": [],
    "solution_vi": "x-3\nXét phương trình hoành độ giao điểm = x - 2m ⇒ x - 3 = ( x + 1)( x - 2m )\nx +1\n⇔ x - 3 = x^2 - 2mx + x - 2m ⇔ x^2 - 2mx + 3 - 2m = 0 (1)\nx-3\nĐường thẳng d: y = x - 2m cắt đồ thị hàm số y = ( C ) tại hai điểm phân biệt có hoành\nx +1\nđộ dương ⇔ (1) có hai nghiệm dương phân biệt\n{ { [ m < -3\n{∆′ = m - ( 3 - 2m ) > 0\n2\nm + 2m - 3 > 0 m > 1\n2\n3\n⇔ S = 2m > 0 ⇔ m>0 m > 0 ⇔1< m <.\nP = 3 - 2m > 0 2\n3 3\nm< m<\n2 2\n3 x-3\nVậy với 1 < m < thì đường thẳng d: y = x - 2m cắt đồ thị hàm số y = ( C ) tại hai điểm\n2 x +1\n5\nphân biệt có hoành độ dương nên a + b =.\n2\nx+m",
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
    "question_vi": "Tìm tất cả các giá trị thực của tham số $m$ để đường thẳng $d:y=x-2m$ cắt đồ thị $(C):y=\\dfrac{x-3}{x+1}$ tại hai điểm phân biệt có hoành độ dương. Tập các giá trị của $m$ là khoảng $(a,b)$. Tính $T=a+b$.",
    "question_en": "All real values of $m$ for which the line $d:y=x-2m$ intersects $(C):y=\\dfrac{x-3}{x+1}$ at two distinct points with positive abscissas form an interval $(a,b)$. Find $T=a+b$.",
    "options": [],
    "solution_vi": "x-3\nPhương trình hoành độ giao điểm x - 2m = ⇔ x^2 - 2mx - 2m + 3 = 0\nx +1\n{\n{ ∆ ' = m 2 + 2m - 3 > 0 m < 1, m > 3\n\nYêu cầu đề bài ⇔ S = 2m > 0 ⇔ m > 0 ⇔ 0 < m < 1 nên T = a + b = 1\nP = -2m + 3 > 0 3\nm <\n2\n2mx + 3m + 1",
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
    "question_vi": "Hàm số $y=2x^3-2x^2-2x+1$ đồng biến trên khoảng nào sau đây?",
    "question_en": "On which of the following intervals is $y=2x^3-2x^2-2x+1$ increasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-1,1)$.",
        "content_en": "$(-1,1)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-\\infty,1)$.",
        "content_en": "$(-\\infty,1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(0,2)$.",
        "content_en": "$(0,2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(1,2)$.",
        "content_en": "$(1,2)$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Chọn D\nTập xác định D =.\n[ 1\nx=-\nTa có y′ = 6 x - 4 x - 2; y′ = 0 ⇔\n2\n3.\n\nx = 1\nBảng biến thiên:\n( 1)\nHàm số đồng biến trên khoảng -∞; - và (1; +∞ ).\n3\nx+3",
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
    "question_vi": "Hàm số $y=-x^4+8x^2+6$",
    "question_en": "On which of the following intervals is $y=-x^4+8x^2+6$ increasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-2, 0)$ và $(2,+\\infty)$.",
        "content_en": "$(-2,0)$ and $(2,+\\infty)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-\\infty,-2)$ và ( 0; 2 ).",
        "content_en": "$(-\\infty,-2)$ and $(0,2)$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$(-\\infty,-2)$ và $(2,+\\infty)$.",
        "content_en": "$(-\\infty,-2)$ and $(2,+\\infty)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(-2,2)$.",
        "content_en": "$(-2,2)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D =.\n12 \n[x = 0 ⇒ y = 6\ny′ = -4 x3 + 16 x; y′ = 0 ⇔ -4 x^3 + 16 x = 0 ⇔ x = 2 ⇒ y = 22.\nx = -2 ⇒ y = 22\nBảng biến thiên\nVậy hàm số y = - x + 8 x + 6 đồng biến trên khoảng ( -∞; - 2 ) và ( 0; 2 ).\n4 2",
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
    "question_vi": "Hàm số $y=x^4+x^2-2$ nghịch biến trên khoảng nào trong các khoảng sau?",
    "question_en": "On which of the following intervals is the function $y=x^4+x^2-2$ decreasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-\\infty,0)$.",
        "content_en": "$(-\\infty,0)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-2,1)$.",
        "content_en": "$(-2,1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(0,+\\infty)$.",
        "content_en": "$(0,+\\infty)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(0,2)$.",
        "content_en": "$(0,2)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D =. Ta có y ' = 4 x3 + 2 x = 2 x ( 2 x^2 + 1).\nTa có y ' > 0, ∀x > 0 và y ' < 0, ∀x < 0. Suy ra hàm số nghịch biến trên khoảng ( -∞; 0 ).",
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
    "question_vi": "Cho hàm số $y=f(x)$ liên tục trên và có đạo hàm $f'(x)=(x+1)(x-1)(2-x)$. Mệnh đề nào 4 dưới đây đúng?",
    "question_en": "Let $y=f(x)$ be continuous on $\\mathbb R$ and satisfy $f'(x)=(x+1)(x-1)(2-x)$. Which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$f(5)>f(4)>f(3)$.",
        "content_en": "$f(5)>f(4)>f(3)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$f(-1)>f(0)>f(1)$.",
        "content_en": "$f(-1)>f(0)>f(1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$f(-3)<f(-2)<f(-1)$.",
        "content_en": "$f(-3)<f(-2)<f(-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$f(0)<f(1)<f(2)$.",
        "content_en": "$f(0)<f(1)<f(2)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có f ' ( x ) > 0 ⇔ x ∈ ( -1; 2 ), vậy hàm số đồng biến trên khoảng ( -1; 2 ).",
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
    "question_vi": "Hàm số $y=8+2x-x^2$ đồng biến trên khoảng nào sau đây?",
    "question_en": "On which of the following intervals is $y=8+2x-x^2$ increasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(1,+\\infty)$.",
        "content_en": "$(1,+\\infty)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-\\infty,1)$.",
        "content_en": "$(-\\infty,1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(-2,1)$.",
        "content_en": "$(-2,1)$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$(1,4)$.",
        "content_en": "$(1,4)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Điều kiện xác định: -2 ≤ x ≤ 4\n-x +1 -x + 1\nTa có: ∀x ∈ ( -2; 4 ), y ' = >0⇔ > 0 ⇔ -x + 1 > 0 ⇔ x < 1\n8 + 2x - x^2\n8 + 2x - x2\nKết hợp với điều kiện xác định ta được hàm số đồng biến trên ( -2;1).",
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
    "question_vi": "Tìm giá trị cực tiểu của hàm số $y=-x^3+3x+4$.",
    "question_en": "Find the local minimum value of $y=-x^3+3x+4$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$y_{\\min}=2$.",
        "content_en": "$y_{\\min}=2$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$y_{\\min}=1$.",
        "content_en": "$y_{\\min}=1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$y_{\\min}=6$.",
        "content_en": "$y_{\\min}=6$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$y_{\\min}=-1$.",
        "content_en": "$y_{\\min}=-1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định của hàm số: D =.\n[ x = -1 ⇒ y = 2\nTa có y′ = -3 x^2 + 3, y′ = 0 ⇒ -3x 2 + 3 = 0 ⇔.\nx = 1 ⇒ y = 6\nBảng biến thiên\nVậy giá trị cực tiểu của hàm số yCT = 2 tại x = -1.",
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
    "question_vi": "Hàm số $y=f(x)$ có đạo hàm là $f'(x)=x^2(x+1)(2x-1)$. Số điểm cực trị của hàm số 2 $y=f(x)$",
    "question_en": "The derivative of $y=f(x)$ is $f'(x)=x^2(x+1)(2x-1)$. How many local extrema does $f$ have?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$3$.",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$0$.",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$1$.",
        "content_en": "$1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$2$.",
        "content_en": "$2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "[\nx = 0\n\nTa có f ' ( x ) = 0 ⇔ x^2 ( x + 1) ( 2 x - 1) = 0 ⇔ x = -1\n2\n1\nx =\n2\nNhận thấy x^2 > 0 ∀x ≠ 0 ⇒ f ′ ( x ) không đổi dấu khi qua nghiệm x = 0 nên x = 0 không phải\nlà điểm cực trị hàm số.\nTương tự ( x + 1) > 0 ∀x ≠ -1 ⇒ f ′ ( x ) không đổi dấu khi qua nghiệm x = -1 nên x = -1 không\n2\nphải là điểm cực trị hàm số.\n1\nf ' ( x ) cùng dấu với nhị thức 2 x - 1 nên x = là điểm cực trị của hàm số.\n2",
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
    "question_vi": "Biết hàm số $y=ax^3+bx^2+cx+d$ có hai điểm cực trị là $(-1, 18)$ và $(3,-16)$. Tính giá trị biểu\nthức $P=a+b+c+d$.",
    "question_en": "The cubic function $y=ax^3+bx^2+cx+d$ has local extrema at $(-1,18)$ and $(3,-16)$. Find $P=a+b+c+d$.",
    "options": [],
    "solution_vi": "Ta có y′ = 3x 2 + 2bx + c\n{ y′ (1) = 3a - 2b + c = 0\n\ny ( -1) = - a + b - c + d = 18\nTheo giả thiết suy ra: \ny′ ( 3) = 27a + 6b + c = 0\ny^3 = 27a + 9b + 3 x + d = 16\n( )\n26 \n{3a - 2b + c = 0\n-a + b - c + d = 18\n17 51 153 101\nKhi đó ta có hệ ⇒a=;b=;c=-;d= ⇒ P = 1.\n27 a + 6b + c = 0 16 16 16 16\n27 a + 9b + 3 x + d = 16",
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
    "question_vi": "Đồ thị của hàm số $y=x^3-3x^2-9x+1$ có hai điểm cực trị là A và B. Tính khoảng cách từ gốc\ntoạ độ O đến đường thẳng AB.",
    "question_en": "The graph of $y=x^3-3x^2-9x+1$ has two local-extremum points A and B. Find the distance from the origin O to line AB.",
    "options": [],
    "solution_vi": "Hàm số y = x^3 - 3x 2 - 9 x + 1 có y′ = 3x 2 - 6 x - 9 nên có hai điểm cực trị A ( -1;6 ) và B ( 3; - 26 )\n2\nPhương trình đường thẳng qua AB là 8 x + y + 2 = 0. Khi đó d ( O; AB ) =.\n65\nx2 - 4x + 5",
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
    "question_vi": "Gọi A, B, C là ba điểm cực trị của đồ thị hàm số $y=x^4-2x^2+4$. Bán kính đường tròn nội tiếp\ntam giác ABC bằng bao nhiêu?",
    "question_en": "Let A, B, and C be the three local-extremum points of the graph $y=x^4-2x^2+4$. Find the inradius of triangle ABC.",
    "options": [],
    "solution_vi": "[x = 0\nTập xác định D = và có đạo hàm y′ = 4 x3 - 4 x = 0 ⇔ \nx = ±1\nGiả sử A ( 0;4 ), B ( -1;3), C (1;3). Khi đó AB = AC = 2 và BC = 2\nSuy ra tam giác ABC vuông cân tại A\n2S∆ABC AB. AC\nVậy bán kính đường tròn nội tiếp tam giác ABC bằng: r = = = 2 -1\nAB + BC + CA 2 2 + 2",
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
    "question_vi": "Cho hàm số $y=ax^3+bx^2+cx+d$ đạt cực trị tại các điểm $x_1, x_2$ thỏa mãn $x_1\\in(-1, 0)$, $x_2\\in(1, 2)$\nBiết hàm số đồng biến trên khoảng ( $x_{1}$; $x_{2}$ ). Đồ thị hàm số cắt trục tung tại điểm có tung độ âm.\nTrong các số a, b và c có bao nhiêu số âm?",
    "question_en": "The cubic function $y=ax^3+bx^2+cx+d$ has extrema at $x_1,x_2$ with $x_1\\in(-1,0)$ and $x_2\\in(1,2)$. The function is increasing on $(x_1,x_2)$, and its graph intersects the y-axis at a point with negative ordinate. Among $a,b,c$, how many are negative?",
    "options": [],
    "solution_vi": "Hàm số đa thức bậc 3: y = ax 3 + bx 2 + cx + d đạt cực trị tại các điểm x1, x2 nên a ≠ 0.\nSuy ra: x1, x2 là hai nghiệm của phương trình y ' = 3ax 2 + 2bx + c = 0.\n{ -2b\nx1 + x2 = 3a\nTheo định lý Vi-et ta có:.\nx.x = c\n1 2 3a\nÁp dụng định lý dấu tam thức bậc 2, ta có hàm số đồng biến trên khoảng ( x1; x2 ) ⇒ a < 0.\n{ -2b\n{ x1 + x2 > 0 3a > 0 {b > 0\nVì x1 ∈ ( -1;0 ), x2 ∈ (1;2 ) nên ⇔ do a < 0 ⇒ \nx1.x2 < 0 c <0 c > 0\n3a\nVậy trong các số a, b và c có 1 số âm là a.\n-----------------HẾT-----------------\n28",
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
    "question_vi": "Số giá trị nguyên của tham số m để hàm số $y=(m^2-1)x^3+(m-1)x^2-x$ nghịch biến trên là",
    "question_en": "How many integer values of $m$ make $y=(m^2-1)x^3+(m-1)x^2-x$ decreasing on $\\mathbb R$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$2$.",
        "content_en": "$2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$3$.",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$1$.",
        "content_en": "$1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$0$.",
        "content_en": "$0$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Yêu cầu đề bài tương đương với y′ = 3 ( m2 - 1) x^2 + 2 ( m - 1) x - 1 ≤ 0, ∀x ∈.\nKhi m 2 - 1 = 0 ⇔ m = ±1.\nVới m = 1 thì y′ = -1 < 0, ∀x ∈ do đó giá trị m = 1 thỏa mãn.\n1\nVới m = -1 thì y′ = -4 x - 1 ≤ 0 ⇔ x ≥ -, do đó giá trị m = -1 không thỏa mãn.\n4\nKhi m 2 - 1 ≠ 0 ⇔ m ≠ ±1, YCBT tương đương với\n{m 2 - 1 < 0 {-1 < m < 1\n1\n⇔ 1 ⇔ - ≤ m < 1.\n( m - 1) + 3 ( m - 1) ≤ 0 - 2 ≤ m ≤ 1\n2 2\n2\n1\nVậy - ≤ m ≤ 1 nên có 2 giá trị nguyên của tham số m là m = 0; m = 1 thoả mãn.\n2\nmx + 2",
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
    "question_vi": "Số giá trị nguyên của m để hàm số $y=(m-7)x^3+(m-7)x^2-2mx-1$ nghịch biến trên bằng",
    "question_en": "How many integer values of $m$ make $y=(m-7)x^3+(m-7)x^2-2mx-1$ decreasing on $\\mathbb R$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$7$.",
        "content_en": "$7$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$9$.",
        "content_en": "$9$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$4$.",
        "content_en": "$4$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$6$.",
        "content_en": "$6$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định: D =.\nTa có y′ = 3 ( m - 7 ) x^2 + 2 ( m - 7 ) x - 2m.\nTrường hợp 1: m = 7 ⇒ y′ = -14 < 0, ∀x ∈ ⇒ Hàm số nghịch biến trên ⇒ m = 7.\nTrường hợp 2: m ≠ 7\n{m - 7 < 0 {m < 7\nHàm số nghịch biến trên ⇔ y′ ≤ 0, ∀x ∈ ⇔ ⇔ 2\n∆′ ≤ 0 7m - 56m + 49 ≤ 0\n8 \n{m < 7\n⇔ ⇔1≤ m < 7.\n1 ≤ m ≤ 7\nVậy hàm số nghịch biến trên khi 1 ≤ m ≤ 7. Do m ∈ nên có 7 giá trị nguyên của m.\nx+m",
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
    "question_vi": "Tìm tất cả các giá trị của tham số m để hàm số $y=3\\sin x+\\cos x-mx+5$ nghịch biến trên tập xác định.",
    "question_en": "Find all values of $m$ for which $y=3\\sin x+\\cos x-mx+5$ is decreasing on its domain.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m\\ge2$.",
        "content_en": "$m\\ge2$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m\\le2$.",
        "content_en": "$m\\le2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m\\ge-2$.",
        "content_en": "$m\\ge-2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$-2\\le m\\le2$.",
        "content_en": "$-2\\le m\\le2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D = và có đạo hàm y′ = 3 cos x - sin x - m\nHàm số y = 3 sin x + cos x - mx + 5 nghịch biến trên\n⇔ y′ = 3 cos x - sin x - m ≤ 0, ∀x ∈\n3 1 m ( π) m\n⇔ cos x - sin x ≤, ∀x ∈ ⇔ sin x - ≤, ∀x ∈ (1)\n2 2 2 3 2\n( π) m\nVì -1 ≤ sin x - ≤ 1, ∀x ∈ nên (1) ⇔ ≥1⇔ m ≥ 2.\n3 2",
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
    "question_vi": "Có tất cả bao nhiêu giá trị nguyên của tham số thực m sao cho hàm số 1 $f(x)=\\dfrac{m}{3}x^3-2mx^2+(m-5)x+2021$( m - 5) x + 2021 nghịch biến trên? 3",
    "question_en": "How many integer values of the real parameter $m$ make $f(x)=\\dfrac{m}{3}x^3-2mx^2+(m-5)x+2021$ decreasing on $\\mathbb R$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$1$.",
        "content_en": "$1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$0$.",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$3$.",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$2$.",
        "content_en": "$2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: f ′ ( x ) = mx 2 - 4mx + m - 5\nYêu cầu bài toán ⇔ f ′ ( x ) ≤ 0, ∀x ∈\nTrường hợp 1: m = 0\nKhi đó: f ′ ( x ) = -5 < 0, ∀x ∈\nSuy ra: nhận m = 0.\nTrường hợp 2: m ≠ 0\n{m < 0 {m < 0\n{a < 0 5\nKhi đó: f ′ ( x ) ≤ 0, ∀x ∈ ⇔ ⇔ 2 ⇔ 5 ⇔- ≤ m<0\n∆′ ≤ 0 4m - m ( m - 5 ) ≤ 0 - 3 ≤ m ≤ 0 3\n5\nVậy - ≤ m ≤ 0 thoả mãn yêu cầu bài toán.\n3\nDo m ∈ nên m ∈ {-1;0}.\nx + m2",
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
    "question_vi": "Tìm giá trị lớn nhất của tham số m để hàm số $y=\\dfrac13x^3-mx^2+(8-2m)x+m+3$",
    "question_en": "Find the greatest value of $m$ for which $y=\\dfrac13x^3-mx^2+(8-2m)x+m+3$ is increasing on $\\mathbb R$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m=-4$.",
        "content_en": "$m=-4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m=-2$.",
        "content_en": "$m=-2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m=4$.",
        "content_en": "$m=4$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m=2$.",
        "content_en": "$m=2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Tập xác định D = và có đạo hàm y ' = x^2 - 2mx + 8 - 2m.\nHàm số đồng biến trên ⇔ y ' ≥ 0, ∀x ∈\n{a > 0 {1 > 0\n⇔ x^2 - 2mx + 8 - 2m ≥ 0, ∀x ∈ ⇔ ⇔ 2 ⇔ -4 ≤ m ≤ 2.\n∆ ' ≤ 0 m + 2m - 8 ≤ 0\n1\nGiá trị lớn nhất của tham số m để hàm số y = x3 - mx 2 + ( 8 - 2m ) x + m + 3 đồng biến trên\n3\nthì m = 2.\n1",
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
    "question_vi": "Cho hàm số $y=2x^3-3(m+1)x^2+6mx+1$ nghịch biến trên khoảng (1; 3) khi và chỉ khi",
    "question_en": "The function $y=2x^3-3(m+1)x^2+6mx+1$ is decreasing on $(1,3)$ if and only if:",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m\\ge1$.",
        "content_en": "$m\\ge1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$1<m<3$.",
        "content_en": "$1<m<3$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m>3$.",
        "content_en": "$m>3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m\\ge3$.",
        "content_en": "$m\\ge3$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Tập xác định D =.\ny = 2 x3 - 3 ( m + 1) x^2 + 6mx + 1 ⇒ y ' = 6 x^2 - 6 ( m + 1) x + 6m.\nHàm số nghịch biến trên khoảng (1;3).\n⇔ y′ ≤ 0, ∀x ∈ (1;3) ⇔ 6 x^2 - 6 ( m + 1) x + 6m ≤ 0, ∀x ∈ (1;3).\n⇔ x^2 - ( m + 1) x + m ≤ 0, ∀x ∈ (1;3) ⇔ m ≥ x, ∀x ∈ (1;3). Vậy m ≥ 3, ∀x ∈ (1;3).\n1",
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
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số $m\\in(-10, 10)$ sao cho ứng với mỗi m, hàm số ( m + 1) x + 18 nghịch biến trên khoảng 3; 7? $y=\\dfrac{(m+1)x+18}{3x+2m-1}$",
    "question_en": "How many integer values $m\\in(-10,10)$ make $y=\\dfrac{(m+1)x+18}{3x+2m-1}$ decreasing on $(3,7)$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$8$.",
        "content_en": "$8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$10$.",
        "content_en": "$10$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$11$.",
        "content_en": "$11$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$9$.",
        "content_en": "$9$.",
        "is_correct": false
      }
    ],
    "solution_vi": "-2m + 1\nĐiều kiện: 3x + 2m - 1 ≠ 0 ⇔ x ≠\n3\nĐạo hàm y′ =\n( m + 1)( 2m - 1) - 54 = 2m2 + m - 55\n( 3x + 2m - 1) ( 3x + 2m - 1)\n2 2\n( m + 1) x + 18 nghịch biến trên khoảng 3; 7\nHàm số y = ( )\n3 x + 2m - 1\n{ 11\n- 2 < m < 5 { 11\n{2m + m - 55 < 0 - < m < 5\n2\n[ -2m + 1 2\n⇔ -2m + 1 ⇔ ≤3⇔ ⇔ -4 ≤ m < 5\n∉ ( 3;7 ) m ≥ -4\n3 [\n3 -2m + 1 m ≤ -10\n3 ≥ 7\n\nMà m ∈ ( -10;10 ), m nguyên nên m ∈ {-4; -3; -2; -1;0;1;2;3;4}.\nVậy có 9 giá trị m thỏa mãn yêu cầu bài toán.\nln x - 6",
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
    "question_vi": "Có bao nhiêu giá trị nguyên dương $m\\le2024$ để hàm số $y=\\dfrac{x^2+2x-1+m}{5x+m}$ nghịch biến trên khoảng $(-3;1)$?",
    "question_en": "How many positive integer values $m\\le2024$ make $y=\\dfrac{x^2+2x-1+m}{5x+m}$ decreasing on $(-3,1)$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$2012$.",
        "content_en": "$2012$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$2009$.",
        "content_en": "$2009$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$2011$.",
        "content_en": "$2011$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$2010$.",
        "content_en": "$2010$.",
        "is_correct": true
      }
    ],
    "solution_vi": "{ m} 5 x^2 + 2mx - 3m + 1\nTập xác định D = \\ - và có đạo hàm y′ =.\n5 (5x + m )\n2\nHàm số nghịch biến trên khoảng ( -3;1)\n{5 x^2 + 2mx - 3m + 1 ≤ 0∀x ∈ ( -3;1)\n5 x + 2mx - 3m + 1\n2\n\n⇔ y′ = ≤ 0∀x ∈ ( -3;1) ⇔ m\n(5x + m ) - ∉ ( -3;1)\n2\n5\n{ { 46\nm ≥\n-9m + 46 ≤ 0 9\n\n⇔ -m + 6 ≤ 0 ⇔ m ≥ 6 ⇔ m ≥ 15\nm ≤ -5 m ≤ -5\n[ [\n\nm ≥ 15 m ≥ 15\nDo nguyên dương không lớn hơn 2024 nên 15 ≤ m ≤ 2024. Vậy có tất cả 2010 giá trị.\n2 x^2 + (1 - m ) x + 1 + m",
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
    "question_vi": "Có bao nhiêu giá trị nguyên dương bé hơn 2024 của tham số m sao cho hàm số 2 x^2 + 2 x - 1 - 5m $y=\\dfrac{2x^2+2x-1-5m}{x-m}$",
    "question_en": "How many positive integer values $m<2024$ make $y=\\dfrac{2x^2+2x-1-5m}{x-m}$ decreasing on $(1,5)$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$2017$.",
        "content_en": "$2017$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$2018$.",
        "content_en": "$2018$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$2020$.",
        "content_en": "$2020$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$2019$.",
        "content_en": "$2019$.",
        "is_correct": true
      }
    ],
    "solution_vi": "2 x^2 - 4mx + 3m + 1\nTập xác định D = \\ {m} và có y′ =.\n( x - m)\n2\nHàm số nghịch biến trên khoảng (1;5 )\n2 x^2 - 4mx + 3m + 1 {2 x^2 - 4mx + 3m + 1 ≤ 0∀x ∈ (1;5 )\n⇔ y′ = ≤ 0∀x ∈ (1;5 ) ⇔ \n( x - m) m ∉ (1;5 )\n2\n20 \n{ {\n\n-m + 3 ≤ 0 m ≥ 3\n\n⇔ -17m + 51 ≤ 0 ⇔ m ≥ 3 ⇔ m ≥ 5\nm ≤1 m ≤1\n[ [\n\nm ≥ 5 m ≥ 5\nDo nguyên dương bé hơn 2024 nên 5 ≤ m ≤ 2023. Vậy có tất cả 2019 giá trị.\nx +1",
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
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để hàm số $y=-x^3-mx^2+(4m+9)x+5$ nghịch\nbiến trên?",
    "question_en": "How many integer values of $m$ make $y=-x^3-mx^2+(4m+9)x+5$ decreasing on $\\mathbb R$?",
    "options": [],
    "solution_vi": "Ta có y′ = -3x - 2mx + 4m + 9\n2\nHàm số y = - x3 - mx 2 + ( 4m + 9 ) x + 5 nghịch biến trên\n{a < 0 -1 < 0\n{\n⇔ 2 ⇔ m2 + 12m + 27 ≤ 0 ⇔ m ∈ [ -9; -3].\n∆′ ≤ 0 m + 3 ( 4m + 9 ) ≤ 0\n\n1",
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
    "question_vi": "Tất cả các giá trị của tham số m sao cho đồ thị hàm số $y=x^3-3x^2+3m-1$ cắt trục hoành tại\nba điểm phân biệt trong đó có đúng hai điểm có hoành độ lớn hơn 1 là khoảng ( a; b ). Giá trị\ncủa $a+b$ bằng bao nhiêu?",
    "question_en": "All values of $m$ for which the graph of $y=x^3-3x^2+3m-1$ intersects the x-axis at three distinct points, exactly two of which have abscissas greater than $1$, form an interval $(a,b)$. Find $a+b$.",
    "options": [],
    "solution_vi": "[x = 0\nTa có: y′ = 3x 2 - 6 x; y′ = 0 ⇔ 3x 2 - 6 x = 0 ⇔.\nx = 2\nBảng biến thiên:\nTa lại có: y (1) = 3m - 3.\nTừ bảng bảng biến thiên ta thấy: Đồ thị hàm số cắt trục hoành tại ba điểm phân biệt trong đó có\ntrong đó có đúng hai điểm có hoành độ lớn hơn 1 khi và chỉ khi:\n5\n3m - 5 < 0 < 3m - 3 ⇔ ( 3m - 3)( 3m - 5 ) < 0 ⇔ 1 < m <.\n3\n5 8\nTừ đó suy ra a = 1, b = nên a + b =.\n3 3\nHàm số y = ( x + m ) + ( x + n ) - x^3 (tham số là m, n ) đồng biến trên ( -∞; +∞ ). Giá trị nhỏ\n3 3",
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
    "question_vi": "Gọi S là tập hợp các giá trị của tham số m để hàm số $y=\\dfrac{x^3}{3}-\\dfrac{mx^2}{2}+2mx-3m+4$",
    "question_en": "Let $S$ be the set of values of $m$ for which $y=\\dfrac{x^3}{3}-\\dfrac{mx^2}{2}+2mx-3m+4$ is decreasing on an interval of length $3$. Find the sum of the elements of $S$.",
    "options": [],
    "solution_vi": "Ta có: y′ = x^2 - mx + 2m = 0 có 2 nghiệm x1, x2 và x1 - x2 = 3.\n{∆ > 0 {m 2 - 8m > 0 [ m = -1\n⇔ 2 ⇔.\n( x1 + x2 ) - 4 x1 x2 = 9 m = 9\n2\nm - 8m = 9\nVậy S = 8.\nmx + 9",
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
    "question_vi": "Tìm tất cả các giá trị thực của tham số m để hàm số $y=x^3-3x^2+mx+1$ đạt cực tiểu tại $x=2$",
    "question_en": "Find all real values of $m$ for which $y=x^3-3x^2+mx+1$ has a local minimum at $x=2$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$0<m\\le4$.",
        "content_en": "$0<m\\le4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m>4$.",
        "content_en": "$m>4$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m=0$.",
        "content_en": "$m=0$.",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$0\\le m<4$.",
        "content_en": "$0\\le m<4$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: y = x^3 - 3x 2 + mx + 1\nKhi đó y′ = 3x 2 - 6 x + m; y′′ = 6 x - 6\n{ y′ ( 2 ) = 0 {m = 0\nHàm số đạt cực tiểu tại x = 2 ⇒ ⇒ ⇔ m=0.\ny′′ ( 2 ) > 0 6 > 0",
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
    "question_vi": "Cho hàm số $y=x^3+3(m^2-m+2)x^2+3(3m^2+1)x+2022m$, tìm các giá trị của tham số m để hàm số đạt cực tiểu tại $x=-2$.",
    "question_en": "Given $y=x^3+3(m^2-m+2)x^2+3(3m^2+1)x+2022m$, find $m$ so that the function has a local minimum at $x=-2$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m=1$.",
        "content_en": "$m=1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m=2$.",
        "content_en": "$m=2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m=3$.",
        "content_en": "$m=3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m=4$.",
        "content_en": "$m=4$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = 3x 2 + 6 ( m2 - m + 2 ) x + 3 ( 3m2 + 1) = 3 [ x^2 + 2 ( m 2 - m + 2 ) x + 3m 2 + 1];\ny′′ = 6 x + 6 ( m2 - m + 2 ).\n{[m = 1\n{ y′ ( 2 ) = 0 {m2 - 4m + 3 = 0 \nHàm số đã cho đạt cực tiểu tại x = -2 ⇔ ⇔ ⇔ m = 3\ny′′ ( 2 ) > 0 6m ( m - 1) > 0 m m - 1 > 0\n( )\n⇔ m =3.",
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
    "question_vi": "Tìm tất cả các giá trị của tham số m để hàm số $y=x^3-(2m+1)x^2-(5m+4)x+10$ đạt cực đại tại điểm $x=-1$.",
    "question_en": "Find all values of $m$ for which $y=x^3-(2m+1)x^2-(5m+4)x+10$ has a local maximum at $x=-1$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m=-1$.",
        "content_en": "$m=-1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m=3$.",
        "content_en": "$m=3$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m=1$.",
        "content_en": "$m=1$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m=-2$.",
        "content_en": "$m=-2$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = 3x - 2 ( 2m + 1) x - ( 5m + 4 ) có y′′ = 6 x - 2 ( 2m + 1)\n2\n{ y′ ( -1) = 0 {-m + 1 = 0 {m = 1\nHàm số đạt cực đại tại điểm x = -1 khi ⇔ ⇔ ⇒ m =1.\ny′′ ( -1) < 0 -4m - 8 < 0 m > -2",
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
    "question_vi": "Cho biết hàm số $y=x^3-3x^2+mx-1$ đạt cực trị tại $x_1, x_2$ thỏa mãn $x_1^2+x_2^2=3$. Khi đó",
    "question_en": "Given that $y=x^3-3x^2+mx-1$ has local extrema at $x_1,x_2$ satisfying $x_1^2+x_2^2=3$, which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m\\le-1$.",
        "content_en": "$m\\le-1$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m\\in(2,3)$.",
        "content_en": "$m\\in(2,3)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m\\in(1,2)$.",
        "content_en": "$m\\in(1,2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m\\in(0,1)$.",
        "content_en": "$m\\in(0,1)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = 3x - 6 x + m\n2\nHàm số y = x^3 - 3x 2 + mx - 1 đạt cực trị tại x1, x2 khi ∆′ = ( -3) - 3m > 0 ⇔ m < 3\n2\n{ x1 + x2 = 2\n\nTheo định lí Viet ta có m\nx1 x2 = 3\n2 3\nTheo đề bài ta có x12 + x22 = 3 ⇔ ( x1 + x2 ) - 2 x1 x2 = 3 ⇔ 22 - m = 3 ⇔ m =\n2\n3 2\n3\nVậy m = thỏa mãn đề bài.\n2",
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
    "question_vi": "Biết m0 là giá trị của tham số m để hàm số $y=x^3-3x^2+mx-1$ có hai điểm cực trị $x_1, x_2$ sao cho $x_1+x_2-3x_1x_2=1$. Khẳng định nào sau đây đúng?",
    "question_en": "Let $m_0$ be the value of $m$ for which $y=x^3-3x^2+mx-1$ has two local-extremum abscissas $x_1,x_2$ satisfying $x_1+x_2-3x_1x_2=1$. Which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m_0\\in(-4,-2)$.",
        "content_en": "$m_0\\in(-4,-2)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m_0\\in(2,4)$.",
        "content_en": "$m_0\\in(2,4)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$m_0\\in(0,2)$.",
        "content_en": "$m_0\\in(0,2)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m_0\\in(-2,0)$.",
        "content_en": "$m_0\\in(-2,0)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = 3x 2 - 6 x + m; y′ = 0 ⇔ 3x 2 - 6 x + m = 0 (*).\nHàm số có hai điểm cực trị x1, x2 ⇔ phương trình có hai nghiệm phân biệt ⇔ ∆′ = 9 - 3m > 0\n⇔ m<3.\n{ x1 + x2 = 2\n\nTheo định lý Vi-et ta có m ⇒ x1 + x2 - 3x1 x2 = 1 ⇔ 2 - m = 1 ⇔ m = 1\n1 2 3\nx. x =\nVậy m0 = 1 ∈ ( 0;2 ).\n10 \n( m -1) 3",
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
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để đồ thị hàm số 1 $y=\\dfrac13x^3-(m+3)x^2+(12-m)x+2020$( m + 3) $x^2$ + (12 - m ) x + 2020 có hai điểm cực trị nằm về bên phải trục tung? 3",
    "question_en": "How many integer values of $m$ make the graph of $y=\\dfrac13x^3-(m+3)x^2+(12-m)x+2020$ have two local-extremum points to the right of the y-axis?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$9$.",
        "content_en": "$9$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$10$.",
        "content_en": "$10$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$11$.",
        "content_en": "$11$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$12$.",
        "content_en": "$12$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = x^2 - 2 ( m + 3) x + 12 - m.\nĐể đồ thị hàm số có hai điểm cực trị nằm về bên phải trục tung ⇔ Phương trình y′ = 0 có hai\nnghiệm dương phân biệt x1, x2\n{[ -7 + 61\n{∆′ = [ - ( m + 3) ] 2 - (12 - m ) > 0 m >\n{ m 2\n+ 7 m - 3 > 0\n2\n⇔ S = x1 + x2 = 2 ( m + 3) > 0 ⇔ m + 3 > 0 ⇔ -7 - 61\nP = x x = 12 - m > 0 12 - m > 0 m <\n1 2 2\n-3 < m < 12\n-7 + 61\n⇔ < m < 12. Do m ∈ nên m ∈ {1;2;...;11}.\n2\nVậy có tất cả 11 giá trị nguyên thỏa mãn.",
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
    "question_vi": "Tìm giá trị của tham số m để điểm cực tiểu của đồ thị hàm số $y=x^3-3x^2-9x+m$ thuộc đường thẳng $d: y=x+1$.",
    "question_en": "Find $m$ so that the local-minimum point of $y=x^3-3x^2-9x+m$ lies on the line $d:y=x+1$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$m=-5$.",
        "content_en": "$m=-5$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$m=31$.",
        "content_en": "$m=31$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$m=23$.",
        "content_en": "$m=23$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$m=5$.",
        "content_en": "$m=5$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Chọn B\nTa có: y′ = 3x 2 - 6 x - 9.\n[ x = -1\nCho y ' = 0 ⇔ \nx=3\nVì a > 0 nên điểm cực tiểu có toạ độ I ( 3; m - 27 ) mà I ∈ d ⇔ 3 + 1 = -27 + m ⇔ m = 31.",
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
    "question_vi": "Cho đường cong $(C_m): y=x^3-3(m-1)x^2-3(m+1)x+3$. Gọi S là tập các giá trị của tham số m để đồ thị hàm số có hai điểm cực trị A, B sao cho O, A, B thẳng hàng. Tổng các phần tử của S bằng",
    "question_en": "Consider $(C_m):y=x^3-3(m-1)x^2-3(m+1)x+3$. Let $S$ be the set of values of $m$ for which the graph has two local-extremum points A and B such that O, A, and B are collinear. Find the sum of the elements of $S$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$0$.",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$1$.",
        "content_en": "$1$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$2$.",
        "content_en": "$2$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$3$.",
        "content_en": "$3$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có y′ = 3x 2 - 6 ( m - 1) x - 3 ( m + 1) = 3 [ x^2 - 2 ( m - 1) x - ( m + 1) ].\nĐồ thị ( Cm ) có hai điểm cực trị ⇔ y′ = 0 có hai nghiệm phân biệt\n⇔ x^2 - 2 ( m - 1) x - ( m + 1) = 0 (*) có hai nghiệm phân biệt\n⇔ ∆′ = ( m - 1) + m + 1 > 0 ⇔ m 2 - m + 2 > 0 ⇔ m ∈\n2\n.\n12 \n[1 m - 1]\nTa có y = y′. x - + [ -2m2 + 2m - 4 ] x + 4 - m 2.\n3 3 \nSuy ra phương trình đường thẳng d đi qua hai điểm cực trị là\ny = ( -2m2 + 2m - 4 ) x + 4 - m 2.\nDo O, A, B thẳng hàng nên 4 - m 2 = 0 ⇒⇒ m = ±2.\nSuy ra S = {2; -2}.\nVậy tổng các phần tử của S là 0.\nx - mx 2 - 2 ( 3m2 - 1) x +\n2 3 2",
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
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y=x^3+4(m-2)x^2-7x+1$ có hai điểm cực trị với hoành độ $x_1<x_2$ thỏa mãn $x_1-x_2=-4$?",
    "question_en": "How many integer values of $m$ make $y=x^3+4(m-2)x^2-7x+1$ have two local-extremum abscissas $x_1<x_2$ satisfying $x_1-x_2=-4$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$0$.",
        "content_en": "$0$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$2$.",
        "content_en": "$2$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$3$.",
        "content_en": "$3$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$1$.",
        "content_en": "$1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: y = x^3 + 4 ( m - 2 ) x^2 - 7 x + 1 (1) ⇒ y′ = 3x 2 + 8 ( m - 2 ) x - 7\nXét phương trình 3x 2 + 8 ( m - 2 ) x - 7 = 0 ( 2 )\nSuy ra hàm số (1) luôn có hai điểm cực trị x1, x2 với mọi m.\nTa thấy ac = -21 < 0 nên phương trình ( 2 ) có hai nghiệm trái dấu\nSuy ra hàm số (1) luôn có hai điểm cực trị x1, x2 với mọi m.\n⇒ x1 < 0; x2 > 0 ⇒ x1 = - x1; x2 = x2.\n8( m - 2) 1\nTa có: x1 - x2 = -4 ⇔ - x1 - x2 = -4 ⇔ - ( x1 + x2 ) = -4 ⇔ = -4 ⇔ m =\n3 2\nVậy không có giá trị nguyên nào của m thỏa bài toán.",
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
    "question_vi": "Có bao nhiêu giá trị nguyên của tham số m để đồ thị hàm số $y=x^3-8x^2+(m^2+11)x-2m^2+2$ có hai điểm cực trị nằm về hai phía của trục Ox?",
    "question_en": "How many integer values of $m$ make the graph of $y=x^3-8x^2+(m^2+11)x-2m^2+2$ have two local-extremum points on opposite sides of the x-axis?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$4$.",
        "content_en": "$4$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$5$.",
        "content_en": "$5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$6$.",
        "content_en": "$6$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$7$.",
        "content_en": "$7$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Đồ thị hàm số y = x3 - 8 x^2 + ( m 2 + 11) x - 2m 2 + 2 có hai điểm cực trị nằm về hai phía của Ox\n14 \n( )\n⇔ Đồ thị hàm số y = x3 - 8 x^2 + m 2 + 11 x - 2m 2 + 2 cắt Ox tại ba điểm phân biệt\n( )\n⇔ Phương trình x3 - 8 x^2 + m 2 + 11 x - 2m 2 + 2 = 0 có ba nghiệm phân biệt.\nMà x3 - 8 x^2 + ( m 2 + 11) x - 2m 2 + 2 = 0\n( )\n⇔ x^3 - 2 x^2 - 6 x^2 + 12 x + m 2 x - 2m 2 - x + 2 = 0 ⇔ ( x - 2 ) x^2 - 6 x + m 2 - 1 = 0.\nDo đó phương trình trên luôn có một nghiệm x = 2 nên phương trình f ( x) = x^2 - 6 x + m 2 - 1 = 0\n{ ∆′ > 0 {10 - m2 > 0 {- 10 < m < 10\nphải có hai nghiệm phân biệt khác 2 ⇔ ⇔ ⇔.\nf ( 2 ) ≠ 0 -9 + m ≠ 0\n2\nm ≠ ±3\nVới m ∈ ⇒ m ∈ {-2; -1;0;1;2}.\nVậy có 5 giá trị nguyên của tham số m.",
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
    "question_vi": "Cho hàm số $y=x^3-3mx^2+3(m^2-1)x-m^3$, với m là tham số",
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
        "content_vi": "Hàm số đạt cực tiểu tại $x=3$ khi $m=2$",
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
        "content_vi": "Diểm cực tiểu của đồ thị hàm số luôn thuọc đường thẳng cố định với hệ số góc $k=-3$",
        "content_en": "The local-minimum point of the graph always lies on a fixed line with slope $k=-3$.",
        "is_correct": true
      }
    ],
    "solution_vi": "[x = m -1\na) Đúng: Ta có y′ = 3x 2 - 6mx + 3 ( m2 - 1) = 0 ⇔ 1\nx2 = m + 1\nDo x1 ≠ x2 với mọi m nên hàm số luôn có hai điểm cực trị.\nb) Đúng: Dễ thấy x = m + 1 là điểm cực tiểu suy ra hàm số đạt cực tiểu tại x = 3 khi m = 2\nc) Đúng: Với mọi m, toạ độ hai điểm cực trị là A ( m + 1; - 3m - 2 ) và B ( m - 1; - 3m + 2 )\nKhoảng cách giữa hai điểm cực trị là: AB = ( xN - xM ) + ( yN - yM ) = 2 5\n2 2\n[x = m -1\nd) Đúng: Ta có y′ = 3x 2 - 6mx + 3 ( m2 - 1) = 0 ⇔ 1\nx2 = m + 1\nVì là hàm số bậc ba với hệ số a = 1 > 0 nên điểm cực tiểu của hàm số là A ( m + 1; - 3m - 2 )\nLại có -3m - 2 = -3 ( m + 1) + 1 nên điểm cực tiểu của hàm số luôn thuộc đường thẳng\nd: y = -3 x + 1 và có hệ số góc k = -3.\nx2 + 2 x + 3",
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
    "question_vi": "Biết đồ thị của hàm số $y=x^3+ax^2+bx+c$, với $a,b,c\\in\\mathbb R$, có một điểm cực trị là $A(-1,29)$ và đi qua $B(2,2)$. Tính $a+b+c$.",
    "question_en": "The graph of $y=x^3+ax^2+bx+c$, where $a,b,c\\in\\mathbb R$, has a local-extremum point $A(-1,29)$ and passes through $B(2,2)$. Find $a+b+c$.",
    "options": [],
    "solution_vi": "Ta có y′ = 3x 2 + 2ax + b.\nBiết đồ thị của hàm số y = x3 + ax 2 + bx + c ( a, b, c ∈ ) có một điểm cực trị là A ( -1;29 ) và đi\n{ y ( -1) = 29 {( -1)3 + a.( -1)2 + b. ( -1) + c = 29\n{ a = -3\n\nqua điểm B ( 2;2 ) nên ta có hệ: y′ ( -1) = 0 ⇔ 3. ( -1) + 2a. ( -1) + b = 0 ⇔ b = -9.\n2\n3 c = 24\ny ( 2) = 2 2 + a.2 + b.2 + c = 2 \n2\nKhi đó a + b + c = -3 - 9 + 24 = 12.\nx - mx 2 - 2 ( 3m2 - 1) x + có 2 điểm cực trị x1, x2 sao cho x1 x2 + 2 ( x1 + x2 ) = 1\n2 3 2",
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
    "question_vi": "Đồ thị hàm số $y=x^3-2mx^2+m^2x+n$ có điểm cực tiểu là $I(1, 3)$. Khi đó $m+n$ bằng",
    "question_en": "The graph of $y=x^3-2mx^2+m^2x+n$ has local-minimum point $I(1,3)$. Find $m+n$.",
    "options": [],
    "solution_vi": "Ta có y = x3 - 2mx 2 + m 2 x + n ⇒ y′ = 3x 2 - 4mx + m 2 ⇒ y′′ = 6 x - 4m\nDo I (1;3) là điểm cực tiểu của đồ thị hàm số y = x^3 - 2mx 2 + m 2 x + n\n{\n1 - 2m + m 2 + n = 3\n{ I (1;3) ∈ y {1 - 2m + m 2 + n = 3 \n2 [m = 1 {m = 1\n⇒ y′ (1) = 0 ⇔ m - 4m + 3 = 0 ⇔ ⇔\n′′ 6 - 4 m > 0 m = 3 n = 3\ny (1) > 0 3\nm <\n2\nVậy m + n = 4.",
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
    "question_vi": "Tìm $m$ để đồ thị hàm số $y=x^4-2mx^2+m-1$ có ba điểm cực trị tạo thành một tam giác có diện tích $4\\sqrt2$.",
    "question_en": "Find $m$ so that the graph of $y=x^4-2mx^2+m-1$ has three local-extremum points that form a triangle of area $4\\sqrt2$.",
    "options": [],
    "solution_vi": "Đạo hàm y ' = 4 x3 - 4mx = 4 x ( x^2 - m )\n[x = 0\nXét y ' = 0 ⇔ \nx = ± m,(m > 0)\n( ) ( m; -m + m - 1)\nTọa độ ba điểm cực trị là: A(0; m - 1), B - m; -m 2 + m - 1, C 2\n{ AH = m2\nGọi H là trung điểm của cạnh BC thì ta có \nBC = 2 m\n1\nS∆ABC = AH BC = m2 m = 4 2 ⇔ m = 2\n2",
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
    "question_vi": "Có bao nhiêu số nguyên m để hàm số $y=x^3-6x^2+(3m+6)x-m-6$ đạt cực đại cực tiểu đồng\nthời hai giá trị cực trị cùng dấu",
    "question_en": "How many integer values of $m$ make $y=x^3-6x^2+(3m+6)x-m-6$ have both a local maximum and a local minimum whose two extremum values have the same sign?",
    "options": [],
    "solution_vi": "Tập xác định: D = và có đạo hàm y′ = 3x 2 - 12 x + 3 ( m + 2 ).\nGiải phương trình y′ = 0 ⇔ 3x 2 - 12 x + 3 ( m + 2 ) = 0 ⇔ x^2 - 4 x + m + 2 = 0\nHàm số có hai cực trị ⇔ có hai nghiệm phân biệt x1, x2\n⇔ ∆′ > 0 ⇔ ( -2 ) - ( m + 2 ) > 0 ⇔ m < 2\n2\n1\ny= ( x - 2 ) y′ + 2 ( m - 2 ) x + m - 2\n3\nGọi A ( x1; y1 ), B ( x2; y2 ) là hai điểm cực trị của đồ thị. Khi đó: y′ ( x1 ) = 0, y′ ( x2 ) = 0\n⇒ Phương trình đường thẳng đi qua 2 điểm cực trị của đồ thị: y = 2 ( m - 2 ) x + m - 2\ny1 = 2 ( m - 2 ) x1 + m - 2, y2 = 2 ( m - 2 ) x2 + m - 2\n{x + x = 4\nÁp dụng định lí Vi - ét cho phương trình: 1 2\nx1.x2 = m + 2\nHai giá trị cực trị cùng dấu ⇔ y1. y2 > 0 ⇔ [ 2 ( m - 2 ) x1 + m - 2 ]. [ 2 ( m - 2 ) x2 + m - 2 ] > 0\n⇔ ( m - 2 ) [ 4 x1 x2 + 2 ( x1 + x2 ) + 1] > 0 ⇔ ( m - 2 ) [ 4.4 + 2 ( m + 2 ) + 1] > 0\n2 2\n{m ≠ 2\n-21\n⇔ ( m - 2 ) ( 2m + 21) > 0 ⇔ <m<2\n2\n-21. Kết hợp điều kiện ta có:\nm > 2 2\nVì m ∈ nên m ∈ {-10; -9;,..; -4; - 3; - 3; - 2; - 1;0;1}. Vậy có 12 số nguyên.",
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
    "question_vi": "Xác định toạ độ giao điểm của đường tiệm cận đứng và đường tiệm cận xiên của đồ thị hàm số 2 x^2 - 3x + 2 $y=\\dfrac{2x^2-3x+2}{x-1}$",
    "question_en": "Find the coordinates of the intersection of the vertical and oblique asymptotes of $y=\\dfrac{2x^2-3x+2}{x-1}$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(1,2)$.",
        "content_en": "$(1,2)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(1,1)$.",
        "content_en": "$(1,1)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(1,-1)$.",
        "content_en": "$(1,-1)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(1,0)$.",
        "content_en": "$(1,0)$.",
        "is_correct": false
      }
    ],
    "solution_vi": "2 x^2 - 3x + 2 1\nTa viết lại y = = 2x - 1 + nên đồ thị hàm số có tiệm cận đứng là đường thẳng\nx -1 x -1\nx = 1 và đường tiệm cận xiên là đường thẳng 2 x - 1\n{x = 1 {x = 1\nXét hệ phương trình ⇔ nên giao điểm của hai đường tiệm cận là I (1;1).\ny = 2 x - 1 y = 1",
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
    "question_vi": "Cho đồ thị hàm số $y=\\dfrac{(2m-n)x^2+mx+1}{x^2+mx+n-6}$. Giá $x^2$ + mx + n - 6 trị $m+n$ là",
    "question_en": "The graph of $y=\\dfrac{(2m-n)x^2+mx+1}{x^2+mx+n-6}$ has the x-axis and y-axis as its two asymptotes. Find $m+n$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$8$.",
        "content_en": "$8$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$9$.",
        "content_en": "$9$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$6$.",
        "content_en": "$6$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$-6$.",
        "content_en": "$-6$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Điều kiện: x^2 + mx + n - 6 ≠ 0.\nPhương trình đường tiệm cận ngang của đồ thị hàm số là y = 2m - n.\nVì đồ thị hàm số nhận trục hoành làm tiệm cận ngang nên 2m - n = 0.\nĐặt f ( x ) = ( 2m - n ) x^2 + mx + 1 và g ( x ) = x^2 + mx + n - 6.\nVì f ( 0 ) ≠ 0 với mọi m, n nên đồ thị nhận trục tung x = 0 là tiệm cận đứng khi g ( 0 ) = 0\nn\n⇔ n = 6. Suy ra m = = 3. Vậy m + n = 9.\n2\nx +1",
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
    "question_vi": "Gọi ( C ) là đồ thị của hàm số $y=\\dfrac{(m+1)x^2+(2m+1)x+m+2}{x+1}$( m + 1) $x^2$ + ( 2m + 1) x + m + 2. x +1",
    "question_en": "Let $(C)$ be the graph of $y=\\dfrac{(m+1)x^2+(2m+1)x+m+2}{x+1}$. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Tiệm cận đứng của đồ thị hàm số là $x=-1$",
        "content_en": "The vertical asymptote is $x=-1$.",
        "is_correct": false
      },
      {
        "option_key": "b",
        "content_vi": "Tiệm cận xiên của đồ thị hàm số đi qua điểm $M(1, 2)$ khi $m=2$",
        "content_en": "When $m=2$, the oblique asymptote passes through $M(1,2)$.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Tiệm cận xiên của đồ thị hàm số vuông góc với đường thẳng $d: 3x+4y-5=0$ khi $m=1$",
        "content_en": "When $m=1$, the oblique asymptote is perpendicular to $d:3x+4y-5=0$.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Giao điểm của hai đường tiệm cận của ( C ) luôn thuộc Parabol $(P): y=-x^2$",
        "content_en": "The intersection of the two asymptotes of $(C)$ always lies on the parabola $(P):y=-x^2$.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Sai: Tiệm cận đứng của đồ thị hàm số là x = -1\n( m + 1) x^2 + ( 2m + 1) x + m + 2 = m + 1 x + m + 2\nb) Đúng: y = ( )\nx +1 x +1\nĐồ thị hàm số có tiệm cận xiên là ∆: y = ( m + 1) x + m\n1\nVì tiệm cận xiên đi qua điểm M (1;2 ) nên 2 = ( m + 1).1 + m ⇔ 2m = 1 ⇔ m =.\n2\nc) Sai: Ta có ∆: y = ( m + 1) x + m ⇔ ( m + 1) x - y + m = 0.\nTiệm cận xiên vuông góc với đường thẳng d: 3 x + 4 y - 5 = 0\n4 1\nnên ( m + 1).3 + 4.( -1) = 0 ⇔ m + 1 = ⇔m=.\n3 3\nd) Đúng: Giao điểm của hai đường tiệm cận là I ( -1; -1) ∈ ( P ).\nmx 2 + 6 x - 2",
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
    "question_vi": "Biết đồ thị hàm số $y=\\dfrac{(2m-n)x^2+mx+1}{x^2+mx+n-6}$( m, n là tham số) nhận trục hoành và trục trung\nlàm hai đường tiệm cận. Tính $m+n$.",
    "question_en": "The graph of $y=\\dfrac{(2m-n)x^2+mx+1}{x^2+mx+n-6}$, where $m,n$ are parameters, has the x-axis and y-axis as its two asymptotes. Find $m+n$.",
    "options": [],
    "solution_vi": "{ 2m - n = 0 {m = 3\nTheo giả thiết ta có ⇔. Vậy m + n = 9.\nn - 6 = 0 n = 6\nx +1",
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
    "question_vi": "Một chất điểm chuyển động theo quy luật $s(t)=t^2-\\dfrac{t^3}{6}$( m ). Tìm thời điểm t (giây) mà tạo đó 6 vận tốc v ( m / s ) của chuyển động đạt giá trị lớn nhất.",
    "question_en": "A particle moves according to $s(t)=t^2-\\dfrac{t^3}{6}$ meters. At what time $t$ (seconds) is its velocity greatest?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$t=2$.",
        "content_en": "$t=2$.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$t=0.5$.",
        "content_en": "$t=0.5$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$t=2.5$.",
        "content_en": "$t=2.5$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$t=1$.",
        "content_en": "$t=1$.",
        "is_correct": false
      }
    ],
    "solution_vi": "1\nTa có v ( t ) = s ' ( t ) = 2t - t 2. Suy ra v ' ( t ) = 2 - t và v ' ( t ) = 0 ⇔ t = 2.\n2\nBảng biến thiên\nVậy chất điểm đạt vận tốc lớn nhất tại thời điểm t = 2 (giây).",
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
        "content_vi": "289 ( m / s ).",
        "content_en": "289 m/s.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "105 ( m / s ).",
        "content_en": "105 m/s.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "111 ( m / s ).",
        "content_en": "111 m/s.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "487 ( m / s ).",
        "content_en": "487 m/s.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có v ( t ) = s′ = -6t 2 + 48t + 9. Xét hàm số v ( t ) = -6t 2 + 48t + 9, t ∈ [ 0;10].\n{ v ( 0) = 9\n\nTa có v′ ( t ) = -12t + 48 = 0 ⇔ t = 4 (Nhận). Ta có v ( 4 ) = 105 ⇒ max v ( t ) = v ( 4 ) = 105.\nt ∈[0;10]\nv (10 ) = -111",
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
    "question_vi": "Độ giảm huyết áp của một bệnh nhân được đo bởi công thức $G(x)=0. 25x^2(30-x)$ trong đó x ( mg ) và $x>0$ là lượng thuốc cần tiêm cho bệnh nhân. Để huyết áp giảm nhiều nhất thì cần tiêm cho bệnh nhân một liều lượng bằng bao nhiêu:",
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
    "solution_vi": "3 1\nTa có: G ( x ) = 0,25 x^2 ( 30 - x ) = x^2 - x3\n4 40\n3 3 3 3 2 [ x = 0 ( loai )\nG′ ( x ) = x - x^2; G′ ( x ) = 0 ⇔ x - x ⇔\n2 40 2 40 x = 20 ( thoa man )\nBảng biến thiên:\nDựa vào bảng biến thiên thì bênh nhân cần tiêm một lượng thuốc 20mg",
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
    "question_vi": "Sau khi phát hiện một bệnh dịch, các chuyên gia y tế ước tính số người nhiễm bệnh kể từ ngày xuất hiện bệnh nhân đầu tiên đến ngày thứ t là $G(t)=45t^2-t^3$, (kết quả khảo sát được trong 10 6 ( t ) là tốc độ truyền bệnh (người / ngày) tại thời điểm t thì tốc độ truyền bệnh lớn nhất sẽ vào ngày thứ:",
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
    "solution_vi": "Ta có: G′ ( t ) = 90t - 3t; G′′ ( t ) = 90 - 6t = 0 ⇔ 90 - 6t = 0 ⇔ t = 15\n2\nBảng biến thiên:\nVậy tốc độ truyền bệnh lớn nhất sẽ vào ngày thứ 15.",
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
    "question_vi": "Khi nuối cá thí nghiệm trong hồ, một nhà khoa học đã nhận thấy rằng: nếu trên mỗi đơn vị diện tích của mặt hồ có n con cá thì trung bình mỗi con cá sau một vụ cân nặng là $P(n)=480-20n$( g ). Hỏi phải thả bao nhiêu con cá trên một đơn vị diện tích của mặt hồ để sau một vụ thu hoạch được nhiều cá nhất?",
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
    "solution_vi": "Gọi F ( n ) là hàm cân nặng của n con cá sau vụ thu hoạch trên một đơn vị diện tích\nTa có: F ( n ) = ( 480 - 20n ).n = 480n - 20n 2\nĐể sau một vụ thu hoạch được nhiều cá nhất thì cân nặng của n con cá trên một đơn vị diện tích\ncủa mặt hồ là lớn nhất.\nBài toán trở thành tìm n ∈ * sao cho F ( x ) đạt giá trị lớn nhất.\nF ′ ( n ) = 480 - 40n; F ′ ( n ) = 0 ⇔ 480 - 40n = 0 ⇔ n = 12\nHọc sinh tự lập bảng biến thiên.\nVậy phải thả 12 con cá trên một đơn vị diện tích của mặt hồ để sau một vụ thu hoạch được nhiều\ncá nhất.",
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
    "question_vi": "Để giảm nhiệt độ trong phòng từ 280 C, một hệ thống làm mát được phép hoạt động trong 10 phút. Gọi T (đơn vị 0 C ) là nhiệt độ phòng ở phút thứ t được cho bởi công thức T = -0, 008t - 0, 16t + 28 với $t\\in[1, 10]$]. Tìm nhiệt độ thấp nhất trong phòng đạt được trong thời 3 gian 10 phút kể từ khi hệ thống làm mát bắt đầu hoạt động.",
    "question_en": "To cool a room from $28^\\circ\\text{C}$, a cooling system operates for 10 minutes. The room temperature at minute $t$ is $T(t)=-0.008t^3-0.16t+28$, for $t\\in[1,10]$. What is the lowest temperature reached during the 10-minute period?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$27.832^\\circ\\text{C}$.",
        "content_en": "$27.832^\\circ\\text{C}$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$18.4^\\circ\\text{C}$.",
        "content_en": "$18.4^\\circ\\text{C}$.",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$26.2^\\circ\\text{C}$.",
        "content_en": "$26.2^\\circ\\text{C}$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$25.312^\\circ\\text{C}$.",
        "content_en": "$25.312^\\circ\\text{C}$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Xét hàm số T = -0,008t 3 - 0,16t + 28 với t ∈ [1;10].\nT ' = -0,024t 2 - 0,16 < 0, ∀t ∈ [1;10] suy ra hàm số T nghịch biến trên đoạn [1;10].\nNhiệt độ thấp nhất trong phong đạt được là Tmin = T (10 ) = 18, 40 C.",
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
    "question_vi": "Một công ty bất động sản có 50 căn hộ cho thuê. Biết rằng nếu cho thuê mỗi căn hộ với giá 2. 000. 000 đồng mỗi tháng thì mọi căn hộ đều có người thuê và cứ mỗi lần tăng giá cho thuê mỗi căn hộ 100. 000 đồng mỗi tháng thì có thêm 2 căn hộ bị bỏ trống. Muốn có thu nhập cao nhất, công ty đó phải cho thuê với giá mỗi căn hộ là bao nhiêu?",
    "question_en": "A real-estate company has 50 apartments. At 2,000,000 VND per apartment per month, all are occupied. Each 100,000-VND rent increase causes 2 additional apartments to become vacant. What monthly rent per apartment maximizes total revenue?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "2. 250. 000",
        "content_en": "2,250,000 VND.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "2. 350. 000",
        "content_en": "2,350,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2. 450. 000",
        "content_en": "2,450,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2. 550. 000",
        "content_en": "2,550,000 VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x là giá thuê thực tế của mỗi căn hộ, ( x: đồng; x ≥ 2000.000 đồng)\nTa có thể lập luận như sau:\nTăng giá 100.000 đồng thì có 2 căn hộ bị bỏ trống.\nTăng giá x - 2.000.000 đồng thì có bao nhiêu căn hộ bị bỏ trống.\n8 \n2 ( x - 2.000.000 ) x - 2.000.000\nTheo quy tắc tam xuất ta có số căn hộ bị bỏ trống là: =\n100.000 50.000\nDo đó khi cho thuê với giá x đồng thì số căn hộ cho thuê là:\nx - 2.000.000 x\n50 - =- + 90\n50.000 50.000\nGọi F ( x ) là hàm lợi nhuận thu được khi cho thuê các căn hộ, ( F ( x ): đồng).\n( x ) 1\nTa có: F ( x ) = - + 90 x = - x^2 + 90 x ( bằng số căn hộ cho thuê nhân với giá cho\n50.000 50.000\nthuê mỗi căn hộ).\n1\nCâu toán trở thành tìm giá trị lớn nhất của F ( x ) = - x^2 + 90 x, x ≥ 2.000.000\n50.000\n1 1\nF′( x) = - x + 90; F ′ ( x ) = 0 ⇔ - x + 90 = 0 ⇔ x = 2.250.000\n25.000 25.000\nBảng biến thiên:\nSuy ra F ( x ) đạt giá trị lớn nhất khi x = 2.250.000\nVậy công ty phải cho thuê với giá 2.250.000 đồng mỗi căn hộ thì được lãi lớn nhất.\nNhận xét:\n1\nSau khi tìm được hàm F ( x ) = - x^2 + 90 x. Ta không cần phải đi khảo sát và vẽ bảng biến\n50.000\nthiên như trên. Đề đã cho bốn đáp án x, ta dùng phím CALC của MTCT để thay lần lượt các giá\ntrị vào, cái nào làm cho F ( x ) lớn nhất chính là giá trị cần tìm.",
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
    "question_vi": "Một cửa hàng bán bưởi Đoan Hùng của Phú Thọ với giá bán mỗi quả là 50. 000 đồng. Với giá bán này thì cửa hàng chỉ bán được khoảng 40 quả bưởi. Cửa hàng này dự định giảm giá bán, ước tính nếu cửa hàng cứ giảm mỗi quả 5000 đồng thì số bưởi bán được tăng thêm là 50 quả. Xác định giá bán để cửa hàng đó thu được lợi nhuận lớn nhất, biết rằng giá nhập về ban đầu mỗi quả là 30. 000 đồng.",
    "question_en": "A store sells Doan Hung pomelos at 50,000 VND each and sells about 40 at that price. Each 5,000-VND price reduction is expected to increase sales by 50 pomelos. If the purchase cost is 30,000 VND per pomelo, what selling price maximizes profit?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "44. 000đ",
        "content_en": "44,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "43. 000đ",
        "content_en": "43,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "42. 000đ",
        "content_en": "42,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "41. 000đ",
        "content_en": "41,000 VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi x là giá bán thực tế của mỗi quả bưởi Đoan Hùng, (x: đồng; 30.000 ≤ x ≤ 50.000 đồng).\nTa có thể lập luận như sau:\nGiá 50.000 đồng thì bán được 40 quả bưởi\nGiảm giá 5.000 đồng thì bán được thêm 50 quả.\nGiảm giá 50.000 - x thì bán được thêm bao nhiêu quả?\n50 1\nTheo quy tắc tam xuất số quả bán thêm được là: ( 50000 - x ). = ( 50000 - x ).\n5000 100\n1 1\nDo đó Số quả bưởi bán được tương ứng với giá bán x: 40 + ( 50000 - x ) = - x + 540\n100 100\nGọi F ( x ) là hàm lợi nhuận thu được ( F ( x): đồng).\n( 1 ) 1 2\nTa có: F ( x ) = - x + 540.( x - 30.000 ) = - x + 840 x - 16.200.000\n100 100\nBài toán trở thành tìm giá trị lớn nhất của hàm số:\n1 2\nF ( x) = - x + 840 x - 16.200.000, điều kiện: 30.000 ≤ x ≤ 50.000.\n100\n1 1\nF ′ ( x ) = - x + 840; F ′ ( x ) = 0 ⇔ - x + 840 = 0 ⇔ x = 42.000\n50 50\nVì hàm F ( x ) liên tục trên 30.000 ≤ x ≤ 50.000 nên ta có:\nF ( 30.000 ) = 0; F ( 42.000 ) = 1.440.000; F ( 50.000 ) = 800.000\nVậy với x = 42.000 thì F ( x ) đạt giá trị lớn nhất.\nVậy để cửa hàng đó thu được lợi nhuận lớn nhất thì giá bán thực tế của mỗi quả bưởi Đoan Hùng\nlà 42.000 đồng.",
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
    "solution_vi": "Gọi x (ngàn đồng) là giá phòng khách sạn cần đặt ra, x > 400 (đơn vị: ngàn đồng).\nGiá chênh lệch sau khi tăng x - 400.\nSố phòng cho thuê giảm nếu giá là x:\n( x - 400 ) + 2 = x - 400.\n20 10\nx - 400 x\nSố phòng cho thuê với giá x là 50 - = 90 -.\n10 10\n( x) x2\nTổng doanh thu trong ngày là: f ( x ) = x 90 - = - + 90 x.\n10 10\nx\nf ′ ( x ) = - + 90 = 0 ⇔ x = 450.\n5\nBảng biến thiên:\nDựa vào bảng biến thiên ta thấy f ( x ) đạt giá trị lớn nhất khi x = 450.\nVậy nếu cho thuê với giá 450 ngàn đồng thì sẽ có doanh thu cao nhất trong ngày là 2.025.000\nđồng.",
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
    "solution_vi": "Gọi x (triệu VNĐ) là số tiền cần giảm cho mỗi chiếc xe ( 0 ≤ x ≤ 4 ).\nSố lượng xe bán ra được trong một năm sau khi giảm giá là: x.200 + 600 (chiếc)\nSố lợi nhuận thu được từ việc bán xe trong một năm sau khi giảm giá là: ( x.200 + 600 )( 4 - x )\nXét hàm số f ( x ) = ( x.200 + 600 )( 4 - x ) = 200 ( - x^2 + x + 12 ) ( 0 ≤ x ≤ 4 ) đạt giá trị lớn nhất là\n1\n2450 khi x =.\n2",
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
    "solution_vi": "Gọi x (triệu đồng) là giá tua.\nGiá đã giảm so với ban đầu là 2 - x.\nSố người tham gia tăng thêm nếu giá bán x là:\n( 2 - x ) 20 = 400 - 200 x.\n0,1\nSố người sẽ tham gia nếu bán giá x là: 150 + ( 400 - 200 x ) = 550 - 220 x.\nTổng doanh thu là: f ( x ) = x ( 550 - 200 x ) = -200 x^2 + 550 x;\n11\nf ′ ( x ) = -400 x + 550 = 0 ⇔ x =\n8\nBảng biến thiên\n11\nDựa vào bảng biến thiên ta thấy f ( x ) đạt giá trị lớn nhất khi x = = 1,375.\n8\nVậy công ty cần đặt giá tua 1375000 đồng thì tổng doanh thu sẽ cao nhất là 378125000 đồng.",
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
    "question_vi": "Bác Tôm có một cái ao có diện tích $50\\,\\text{m}^2$ để nuôi cá. Vụ vừa qua bác nuôi với mật độ 20con/m 2 và thu được tất cả 1, 5 tấn cá thành phẩm. Theo kinh nghiệm nuôi cá thu được bác ấy cứ giảm đi 8 con/m2 thì tương ứng sẽ có mỗi con cá thành phẩm thu được tăng thêm 0, 5kg. Hỏi vụ tới bác phải mua bao nhiêu con cá giống để đạt được tổng khối lượng cá thành phẩm cao nhất? (Giả sử không có hao hụt trong quá trình nuôi).",
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
    "solution_vi": "Số cá vụ vừa rồi Bác Tôm nuôi là 20.50 = 1000 con.\n12 \nVậy trọng lượng mỗi con là 1,5 kg.\nGọi số cá giảm là 8x con.\nTrọng lượng thu được của vụ tới là: (1000 - 400 x )(1,5 + 0,5 x ) = -200 x^2 - 100 x + 1500.\n1\nHàm số đạt cực đại tại x = -. Vậy số cá giống ban đầu là 1100 con.\n4",
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
    "question_vi": "Dân số của một quốc gia sau t (năm) kể từ năm 2023 được ước tính bởi công thức: $N(t)=100e^{0. 012t}$, N ( t ) được tính bằng triệu người và $0\\le t\\le50$",
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
        "content_vi": "Xem N ( t ) là hàm số của biến số t xác định trên đoạn [$[0, 50]$]. Khi đó hàm số N ( t ) đồng biến trên đoạn [0; 50].",
        "content_en": "As a function on $[0,50]$, $N(t)$ is increasing.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Đạo hàm của hàm số N ( t ) biểu thị tốc độ tăng dân số của quốc gia đó (tính bằng triệu người/năm). Vậy vào năm 2040 thì tốc độ tăng dân số của quốc gia đó là 1, 6 triệu người/ năm.",
        "content_en": "In 2040, the population growth rate is 1.6 million people per year.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Dân số của quốc gia vào năm 2030 là: N ( 7 ) = 100e0,012.7 = 100e0,084 = 108,763 (triệu\nngười)\nb) Sai: Dân số của quốc gia vào năm 2035 là: N (12 ) = 100e0,012.12 = 100e0,144 = 115, 488 (triệu\nngười)\nc) Đúng: Trên đoạn [0; 50] ta có: N ′ ( t ) = 0,012.100e0,012t = 1, 2e0,012t > 0, ∀t ∈ [0;50]\nDo đó hàm số N ( t ) đồng biến trên đoạn [0; 50].\nd) Ta có: N ′ ( t ) = 1, 2e0,012t\nVới tốc độ tăng dân số của quốc gia đó là 1,6 triệu người/ năm ta có:\n4\n250 ln\n4 3 ≈ 23,97\n1, 6 = 1, 2e0,012t ⇔ e0,012t = ⇔ t =\n3 3\nVậy vào năm 2046 thì tốc độ tăng dân số của quốc gia đó là 1,6 triệu người/ năm.",
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
    "question_vi": "Giả sử một hạt chuyển động trên một trục thẳng đứng chiều dương hướng lên trên sao cho toạ độ của hạt (đơn vị: mét) tại thời điểm t (giây) là $y=t^3-12t+3$, $t\\ge0$.",
    "question_en": "A particle moves on a vertical axis, positive upward, with position $y=t^3-12t+3$ meters at time $t\\ge0$ seconds. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Hàm vận tốc là: $v(t)=3t^2-12$, $t\\ge0$",
        "content_en": "The velocity is $v(t)=3t^2-12$ for $t\\ge0$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Hạt chuyển động xuống dưới khi $t>2$",
        "content_en": "The particle moves downward when $t>2$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Quãng đường hạt đi được trong khoảng thời gian $0\\le t\\le3$ là 9 m",
        "content_en": "The distance traveled during $0\\le t\\le3$ is 9 m.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Khi $t>0$ thì hạt tăng tốc",
        "content_en": "The particle is speeding up for every $t>0$.",
        "is_correct": true
      }
    ],
    "solution_vi": "a) Đúng: Hàm vận tốc là: v ( t ) = y′ = 3t 2 - 12, t ≥ 0\nHàm gia tốc là: a ( t ) = v′ ( t ) = y′′ = 6t, t ≥ 0\nb) Sai: Hạt chuyển động lên trên khi v ( t ) > 0 ⇔ 3t 2 - 12 > 0 ⇔ t > 2 (do t ≥ 0 )\nHạt chuyển động xuống dưới khi v ( t ) < 0 ⇔ 3t 2 - 12 < 0 ⇔ 0 ≤ t < 2 (do t ≥ 0 )\nc) Đúng: Ta có: y ( 3) - y ( 0 ) = 33 - 12.3 + 3 - 3 = -9\nVậy quãng đường vật đi được trong thời gian 0 ≤ t ≤ 3 là 9 m.\nd) Đúng: Hạt tăng tốc khi v ( t ) tăng hay v′ ( t ) > 0. Do đó, 6t > 0 ⇔ t > 0\nHạt giảm tốc khi v ( t ) giảm hay v′ ( t ) < 0 ⇔ 6t < 0 ⇔ t < 0 (không thỏa mãn do t ≥ 0 )",
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
        "content_vi": "Gọi p (triệu đồng) là giá của mỗi ti vi, x là số ti vi. Vậy hàm cầu là: $p(x)=-\\dfrac{x}{200}+19$",
        "content_en": "If $p$ (million VND) is the price per TV and $x$ is the number sold, the demand function is $p(x)=-\\dfrac{x}{200}+19$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Công ty giảm giá 4, 5 (triệu đồng)/1 tivi cho người mua thì doanh thu của công ty là lớn nhất",
        "content_en": "Reducing the price by 4.5 million VND per TV maximizes revenue.",
        "is_correct": true
      },
      {
        "option_key": "c",
        "content_vi": "Nếu hàm chi phí hằng tuần là $C(x)=12000-3x$(triệu đồng), trong đó x là số ti vi bán ra trong tuần, vậy có 2300 ti vi được bán ra thì lợi nhuận là cao nhất.",
        "content_en": "If weekly cost is $C(x)=12000-3x$ million VND, profit is maximized when 2300 TVs are sold.",
        "is_correct": false
      },
      {
        "option_key": "d",
        "content_vi": "Nếu hàm chi phí hằng tuần là $C(x)=12000-3x$(triệu đồng), trong đó x là số ti vi bán ra trong tuần, nhà sản xuất nên đặt giá bán 8, 5 triệu đồng/1 ti vi để lợi nhuận là lớn nhất",
        "content_en": "If weekly cost is $C(x)=12000-3x$ million VND, profit is maximized at a price of 8.5 million VND per TV.",
        "is_correct": false
      }
    ],
    "solution_vi": "a) Đúng: Gọi p (triệu đồng) là giá của mỗi ti vi, x là số ti vi. Khi đó hàm cầu là p = p ( x ).\nTheo giả thiết, tốc độ thay đổi của x tỉ lệ với tốc độ thay đổi của p nên hàm số p = p ( x ) là\nhàm số bậc nhất nên. Do đó, p ( x ) = ax + b (a khác 0 ).\nGiá tiền p1 = 14 ứng với x1 = 1000, giá tiền p2 = 13,5 ứng với x2 = 1000 + 100 = 1100\nDo đó, phương trình đường thẳng p ( x ) = ax + b đi qua hai điểm (1000;14 ) và (1100;13,5 ).\n{ { -1\n14 = 1000a + b a = 1\nTa có hệ phương trình: ⇔ 200 (thỏa mãn) ⇒ p ( x ) = - x + 19\n13,5 = 1100a + b b = 19 200\n\n-1\nb) Đúng: Vì p = x + 19 ⇒ x = -200 p + 3800\n200\nHàm doanh thu từ tiền bán ti vi là: R ( p ) = px = p ( -200 p + 3800 ) = -200 p 2 + 3800 p\nĐể doanh thu là lớn nhất thì ta cần tìm p sao cho R đạt giá trị lớn nhất.\n19\nTa có: R′ ( p ) = -400 p + 3800; R′ ( p ) = 0 ⇔ p =\n2\nBảng biến thiên:\n19\nVậy công ty nên giảm giá số tiền một chiếc ti vi là: 14 - = 4,5 (triệu đồng) thì doanh thu là\n2\nlớn nhất.\n( -1 ) -x^2\nc) Sai: Doanh thu bán hàng của x sản phẩm là: R ( x ) = x. p ( x ) = x. x + 19 = + 19 x\n200 200\n(triệu đồng). Do đó, hàm số thể hiện lợi nhuận thu được khi bán x sản phẩm là:\n- x2 - x2\nP ( x) = R ( x) - C ( x) = + 19 x - 12000 + 3x = + 22 x - 12000 (triệu đồng).\n200 200\n-x\nĐể lợi nhuận là lớn nhất thì P ( x ) là lớn nhất. Ta có: P′ ( x ) = + 22; P′ ( x ) = 0 ⇔ x = 2200\n100\nBảng biến thiên:\nVậy có 2200 ti vi được bán ra thì lợi nhuận là cao nhất.\nSố ti vi mua tăng lên là: 2200 - 1000 = 1200 (chiếc)\n1200\nd) Sai: Vậy cửa hàng nên đặt giá bán là: 14 - 0,5 = 8 (triệu đồng)\n100",
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
    "question_vi": "Một hộ làm nghề dệt vải lụa tơ tằm sản xuất mỗi ngày được x mét vải lụa ($1\\le x\\le18$ ). Tổng chi phí sản xuất x mét vải lụa, tính bằng nghìn đồng, cho bởi hàm chi phí: $C(x)=x^3-3x^2-20x+500$. Giả sử hộ làm nghề dệt này bán hết sản phẩm mỗi ngày với giá 220 nghìn đồng/mét. Gọi B ( x ) là số tiền bán được và L ( x ) là lợi nhuận thu được khi bán x mét vải lụa.",
    "question_en": "A silk-weaving household produces $x$ meters of silk per day, where $1\\le x\\le18$. The production cost, in thousand VND, is $C(x)=x^3-3x^2-20x+500$. All output is sold at 220 thousand VND per meter. Let $B(x)$ be revenue and $L(x)$ profit. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "Biểu thức tính B ( x ) theo x là $B(x)=220x$(nghìn đồng).",
        "content_en": "$B(x)=220x$ thousand VND.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Biểu thức tính L ( x ) theo x là $L(x)=-x^3+3x^2+220x-500$(nghìn đồng).",
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
    "solution_vi": "Khi bán x mét vải lụa:\na) Đúng: Số tiền thu được là: B ( x ) = 220 x (nghìn đồng).\nb) Sai: Lợi nhuận thu được là: L ( x ) = B ( x ) - C ( x ) = - x^3 + 3x 2 + 240 x - 500 (nghìn đồng).\n18 \nc) Đúng: Hàm số L ( x ) xác định trên [1;18].\nĐạo hàm L′ ( x ) = -3x 2 + 6 x + 240; L ( x ) = 0 ⇔ x = 10 hoặc x = -8 (loại).\nTrên khoảng (1;10 ), L′ ( x ) > 0 nên hàm số đồng biến trên khoảng này.\nTrên khoảng (10;18 ); L′ ( x ) < 0 nên hàm số nghịch biến trên khoảng này.\nCực trị: Hàm số L ( x ) đạt cực đại tại x = 10 và LCĐ = L (10 ) = 1200.\nBảng biến thiên:\nĐồ thị hàm số có điểm cực đại (10;1200 ) và đi qua các điểm (1; -258 ); (18; -1040 ) như hình.\nd) Sai: Quan sát đồ thị hàm số, ta nhận thấy khi x = 10 thì hàm số đạt giá trị lớn nhất là 1200.\nNhư vậy, hộ làm nghề dệt cần sản xuất và bán ra mỗi ngày 10 mét vải lụa để thu được lợi nhuận\ntối đa. Lợi nhuận tối đa này là 1200 nghìn đồng.",
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
    "question_vi": "Giả sử hàm cầu của một sản phẩm độc quyền được cho bởi $P=400-2Q$ và hàm chi phí trung bình $C=0.2Q+4+\\dfrac{400}{Q}$, trong đó $Q$ là số đơn vị sản phẩm ($P$ và $C$ được tính bằng USD trên mỗi đơn vị sản phẩm).",
    "question_en": "Suppose the demand function for a monopoly product is $P=400-2Q$ and the average-cost function is $C=0.2Q+4+\\dfrac{400}{Q}$, where $Q$ is quantity and $P,C$ are dollars per unit. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$Q=90$ là lượng sản phẩm bán ra để lợi nhuận thu được tối đa;",
        "content_en": "$Q=90$ is the quantity that maximizes profit.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "Giá bán để lợi nhuận thu được tối đa là 400 USD",
        "content_en": "The profit-maximizing selling price is 400 dollars.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "Lợi nhuận tối đa là 17.420 USD",
        "content_en": "The maximum profit is 17,420 dollars.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "Nếu chính phủ đánh thuế 22 USD/ một đơn vị sản phẩm thì giá bán 390 USD để lợi nhuận thu được tối đa",
        "content_en": "If the government imposes a tax of 22 dollars per unit, a selling price of 390 dollars maximizes profit.",
        "is_correct": false
      }
    ],
    "solution_vi": "Ta có: Lợi nhuận = Tổng doanh thu - Tổng chi phí.\nTổng doanh thu là R và tổng chi phí là C được cho bởi R = PQ = 400Q - 2Q 2\n(\nVà C = QC = 0, 2Q 2 + 4Q + 400 nên lợi nhuận P = R - C = 400Q - 2Q 2 - 0, 2Q 2 + 4Q + 400. )\nHay P ( Q ) = 396Q - 2, 2Q 2 - 400.\na) Đúng: Để tối đa hóa lợi nhuận, ta cho P′ ( Q ) = 0 ⇔ 396 - 4, 4Q = 0 ⇔ Q = 90.\nTa có P′′ ( Q ) = -4, 4 < 0. Vậy P đạt cực đại tại Q = 90.\nb) Sai: Thay Q = 90 vào hàm cầu ta được giá bán trên mỗi sản phẩm để lợi nhuận thu được tối\nđa: P = 400 - 2.90 = 220.\nc) Đúng: Lợi nhuận tối đa: P ( 90 ) = 396 ( 90 ) - 2, 2 ( 90 ) - 400 = 17420.\n2\nd) Sai: Khi chi phí đánh thuế 22 USD/một đơn vị sản phẩm, tổng chi phí tăng 22Q. Hàm chi phí mới\nlà C1 = 0, 2Q 2 + 4Q + 400 + 22Q và hàm lợi nhuận mới là\nP = 400Q - 2Q 2 - ( 0, 2Q 2 + 4Q + 400 + 22Q ) = 374Q - 2, 2Q 2 - 400\nTa có P1′( Q ) = 0 ⇔ 374 - 4, 4Q = 0 ⇔ Q = 85.\nVì P1′′ ( Q ) = -4, 4 < 0 nên để thu được lợi nhuận tối đa, nhà độc quyền phải sản xuất 85 đơn vị\nsản phẩm với mức giá P1 = 400 - 2.85 = 230 USD, do mức giá này chỉ hơn 10 USD so với trước đó nên\nchỉ một phần thuế được tính vào người tiêu dùng, phần thuế còn lại do nhà sản xuất gánh chịu.\nLợi nhuận bây giờ là 15495.",
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
    "question_vi": "Cho biết điện lượng truyền trong dây dẫn theo thời gian biểu thị bởi hàm số $Q(t)=2t^2+t$, trong\nđó t được tính bằng giây (s) và Q được tính theo Culong ( C ). Tính cường độ dòng điện tại thời\nđiểm $t=4$ s.",
    "question_en": "The electric charge transferred through a wire is $Q(t)=2t^2+t$ coulombs, where $t$ is in seconds. Find the electric current at $t=4$ s.",
    "options": [],
    "solution_vi": "Cường độ dòng điện tại thời điểm t = 4 s là Q′ ( t ) = I ( t ) = 4t + 1 ⇒ t ( 4 ) = 17.",
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
    "question_vi": "Trong 5 giây đầu tiên, một chất điểm chuyển động theo phương trình $s(t)=-t^3+6t^2+t+5$ trong\nđó t tính bằng giây và s tính bằng mét. Chất điểm có vận tốc tức thời lớn nhất bằng bao nhiêu\ntrong 5 giây đầu tiên đó?",
    "question_en": "During the first 5 seconds, a particle moves according to $s(t)=-t^3+6t^2+t+5$, where $t$ is in seconds and $s$ in meters. What is its greatest instantaneous velocity during those 5 seconds?",
    "options": [],
    "solution_vi": "Ta có: v ( t ) = s′ ( t ) = -3t 2 + 12t + 1.\nNhận xét: v ( t ) có đồ thị là một parabol nên trong 5s đầu tiên vận tốc tức thời cúa chất điểm đạt\ngiá trị lớn nhất bằng 13 tại t = 2 s.\n20",
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
    "question_vi": "Một vật được phóng thẳng đứng lên trên từ độ cao 2 m với vận tốc ban đầu là 24, 5 (m/s). Trong\nVật lý, ta biết rằng khi bỏ qua sức cản của không khí thì độ cao h (mét) của vật sau t (giây)\nđược cho bởi công thức $h(t)=2+24. 5t-4. 9t^2$. Hỏi sau bao nhiêu giây thì vật đạt độ cao lớn\nnhất?",
    "question_en": "An object is launched vertically upward from a height of 2 m with initial speed 24.5 m/s. Ignoring air resistance, its height after $t$ seconds is $h(t)=2+24.5t-4.9t^2$. After how many seconds does it reach maximum height?",
    "options": [],
    "solution_vi": "Xét hàm số: h ( t ) = 2 + 24,5t - 4,9t 2. Tập xác định của hàm số là.\n5\nTa có: h′ ( t ) = -9,8t + 24,5; h′ ( t ) = 0 ⇔ -9,8t + 24,5 = 0 ⇔ t =\n2\nBảng biến thiên:\n5\nTừ bảng biến thiên ta thấy hàm số đạt cực đại tại t =\n2\n5\nVậy thời điểm vật đạt độ cao lớn nhất là t = giây\n2",
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
    "question_vi": "Trong một thí nghiệm y học, người ta cấy 1000 vi khuẩn vào môi trường dinh dưỡng. Bằng thực\nnghiệm, người ta xác định được số lượng vi khuẩn thay đổi theo thời gian bởi công thức:\n$N(t)=1000+\\dfrac{100t}{100+t^2}$ trong đó t là thời gian tính bằng giây. Tính số lượng vi khuẩn lớn\nnhất kể từ khi thực hiện cấy vi khuẩn vào môi trường dinh dưỡng.",
    "question_en": "In a medical experiment, 1000 bacteria are cultured in a nutrient medium. The population after $t$ seconds is $N(t)=1000+\\dfrac{100t}{100+t^2}$. Find the largest bacterial population from the start of the experiment onward.",
    "options": [],
    "solution_vi": "100t\nXét hàm số N ( t ) = 1000 + (t > 0).\n100 + t 2\n100.(100 + t 2 ) - 100t.2t 100. (100 - t 2 )\nTa có: N ′ ( t ) = =.\n(100 + t )\n2 2\n(100 + t )\n2 2\nKhi đó, với t > 0, N ′ ( t ) = 0 ⇔ 100 - t 2 = 0 ⇔ t 2 = 100 ⇔ t = 10.\nBảng biến thiên của hàm số N ( t ) như sau:\n22 \nCăn cứ bảng biến thiên, ta thấy:\nTrên khoảng ( 0;+∞ ) hàm số N ( t ) đạt giá trị lớn nhất bằng 1005 tại t = 10.\nVậy số lượng vi khuẩn lớn nhất kể từ khi thực hiện cấy vi khuẩn vào môi trường dinh dưỡng là\n1005 con.",
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
    "question_vi": "Ho ép khí quản co lại, ảnh hưởng đến tốc độ của không khí đi vào khí quản. Tốc độ của không\nkhí đi vào khí quản khi ho được cho bởi công thức $V=k(R-r)r^2$; $0\\le r$ < R, trong đó k là hằng\nsố, R là bán kính bình thường của khí quản, r là bán kính khí quản khi ho. Hỏi bán kính của khí\nquản khi ho bằng bao nhiêu so với bán kính khí quản lúc bình thường thì tốc độ của không khí\nđi vào khí quản là lớn nhất?",
    "question_en": "During a cough, narrowing of the trachea affects airflow speed. The speed is modeled by $V=k(R-r)r^2$, where $0\\le r<R$, $k>0$, $R$ is the normal tracheal radius, and $r$ is the radius while coughing. What fraction of the normal radius should $r$ be for airflow speed to be greatest?",
    "options": [],
    "solution_vi": "[r = 0\nTa có: V ′ = 2kRr - 3kr. Nhận xét V ′ = 0 ⇔ \n2\n.\nr = 2R\n3\n( 2 R ) 4kR\n3\nTa có f ( 0 ) = 0; f =\n3 27\n2\nVậy bán kính của khí quản khi ho bằng bán kính khí quản lúc bình thường thì tốc độ không\n3\nkhí đi vào là lớn nhất.",
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
    "question_vi": "Người quản lí của một khu chung cư có 100 căn hộ cho thuê nhận thấy rằng tất cả các căn hộ sẽ\ncó người thuê nếu giá thuê một căn hộ là 8 triệu đồng một tháng. Một cuộc khảo sát thị trường\ncho thấy rằng, trung bình cứ mỗi lần tăng giá thuê căn hộ thêm 100 nghìn đồng thì sẽ có thêm\nmột căn hộ bị bỏ trống. Người quản lí nên đặt giá thuê mỗi căn hộ là bao nhiêu để doanh thu là\nlớn nhất?",
    "question_en": "A manager has 100 apartments. All are occupied at a monthly rent of 8 million VND per apartment. A market survey shows that each 100,000-VND rent increase results in one additional vacant apartment. What monthly rent per apartment maximizes revenue?",
    "options": [],
    "solution_vi": "Gọi x là số lần tăng giá 100 nghìn đồng ( x > 0 ). Khi đó, số căn được cho thuê là: 100 - x (căn)\nTổng số tiền thu được trong một tháng là:\n(100 - x )(8000000 + 100000 x ) = 100000 (100 - x )(80 + x ) = 100000 ( - x^2 + 20 x + 8000 )\n= 100000 [ - ( x - 10 ) + 8100 ] ≤ 810000000, ∀x > 0\n2\n\nDấu \"=\" xảy ra khi x = 10 (thỏa mãn)\nVậy để thu được doanh thu là lớn nhất thì người quản lí nên đặt giá thuê mỗi căn hộ là:\n8000000 + 100000.10 = 9000000 (đồng).",
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
    "question_vi": "Một công ty kinh doanh bất động sản có 20 căn hộ cho thuê. Biết rằng nếu cho thuê mỗi căn hộ\nvới giá 2 triệu đồng/1 tháng thì tất cả các căn hộ đều có người thuê. Nhưng cứ mỗi lần tăng giá\ncho thuê mỗi căn hộ thêm 200 nghìn đồng/1 tháng thì có thêm một căn hộ bị bỏ trống. Hỏi công\nty nên cho thuê mỗi căn hộ bao nhiêu tiền một tháng để tổng số tiền thu được là lớn nhất?",
    "question_en": "A real-estate company has 20 apartments. At a monthly rent of 2 million VND per apartment, all are occupied. Each 200,000-VND increase in rent causes one additional apartment to become vacant. What monthly rent per apartment maximizes total rental revenue?",
    "options": [],
    "solution_vi": "Giả sử giá thuê mỗi căn hộ là x triệu đồng/1 tháng và số căn hộ cho thuê là y.\nKhi đó tổng số tiền thu được sẽ là x. y.\nTheo đề bài, ta có: y = 20 - 5 ( x - 2 ) (vì cứ mỗi lần tăng giá thuê mỗi căn hộ thêm 200 nghìn\nđồng/1 tháng thì có thêm một căn hộ bị bỏ trống).\nDo đó ta cần tìm giá trị của x sao cho hàm số f ( x ) = x [ 20 - 5 ( x - 2 ) ] đạt giá trị lớn nhất.\nTa có: f ′ ( x ) = 30 - 10 x = 0 ⇒ 30 - 10 x = 0 ⇒ x = 3\nCuối cùng ta kiểm tra xem điểm cực này có phải là điểm cực đại hay không:\nXác định khoảng: [ -∞;3], [3; +∞ ]\nChọn x1 = 2 ⇒ f ( x ) = 10, chọn x2 = 4 ⇒ f ( x ) = -10\nVì đạo hàm dương với mọi x < 3 là âm với mọi x > 3 ⇒ hàm số cực đại tại x = 3\nVì vậy, công ty nên cho thuê mỗi căn hộ với giá 3 triệu đồng/1 tháng để tổng số tiền thu được là\nlớn nhất.",
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
    "question_vi": "Một con cá hồi bơi ngược dòng nước để vượt một khoảng cách là 300 km. Vận tốc dòng nước là\n6 (km/h). Nếu vận tốc bơi của cá khi nước đứng yên là v (km/h) thì năng lượng tiêu hao của cá\ntrong t giờ được cho bởi công thức E ( v ) = cv 3t (trong đó c là hằng số dương, E được tính\nbằng đơn vị Jun). Cá bơ ngược dòng quãng đường 300 km trên trong khoảng thời gian t với vận\ntốc bằng bao nhiêu để năng lượng tiêu hao là thấp nhất?",
    "question_en": "A salmon swims 300 km upstream in a current of 6 km/h. If its swimming speed in still water is $v$ km/h, then over $t$ hours its energy expenditure is $E=cv^3t$, where $c>0$. At what swimming speed $v$ is the energy required to travel the 300 km minimized?",
    "options": [],
    "solution_vi": "Vận tốc khi cá bơi ngược dòng sẽ là v - 6 (km/h).\n300\nThời gian để bơi quãng đường 300 km là t = ( h).\nv-6\nv3\nNăng lượng tiêu hao là E ( v ) = 300c (J ).\nv-6\nv3\nDo c > 0 ⇒ E ( v )min ⇔ = ( f ( v ) )min.\nv-6\n3v 2 ( v - 6 ) - v3 2v3 - 18v [v = 0\nVới v > 6 ta có f ′ ( v ) = = = 0 ⇔ v = 9.\n( v - 6) ( v - 6)\n2 2\n\nLập bảng biến thiên ta nhận v = 9 (do v > 6 ).\nVậy để năng lượng tiêu hao là thấp nhất thì vận tốc là 9 (km/h).",
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
    "question_vi": "Một công ty đánh giá rằng sẽ bán được N lô hàng nếu chi hết số tiền là x (triệu đồng) vào việc\nquảng cáo. Biết rằng N và x liên hệ với nhau bằng biểu thức $N(x)=-x^2+30x+6$, $0\\le x\\le30$\n. Hãy tìm số lô hàng lớn nhất mà công ti có thể bán sau đợt quảng cáo?",
    "question_en": "A company estimates that it will sell $N$ lots if it spends $x$ million VND on advertising, where $N(x)=-x^2+30x+6$ and $0\\le x\\le30$. What is the greatest number of lots it can sell after the campaign?",
    "options": [],
    "solution_vi": "Ta có N ( x ) = - x^2 + 30 x + 6 ⇒ N ′ ( x ) = -2 x + 30 ⇒ N ′ ( x ) = 0 ⇔ x = 15.\n26 \n{ N ( 0) = 6\n\nĐồng thời, ta cũng có N (15 ) = 231 ⇒ max x∈[0;30] N ( x ) = 231 ⇔ x = 15.\nN ( 30 ) = 6\n\nVậy nếu công ti dành 15 triệu cho việc quảng cáo thì công ti sẽ bán được nhiều nhất là 231 lô\nhàng.",
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
    "question_vi": "Công ti truyền hình cáp Vista hiện có 100000 thuê bao. Mỗi thuê bao đang trả cước 40 USD/tháng. Một cuộc khảo sát cho thấy cứ mỗi lần giảm 0, 25 USD cước thuê bao, công ti có thể có thêm 1000 thuê bao. Để doanh thu tối đa, mức cước thuê bao mỗi tháng là bao nhiêu USD?",
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
    "question_vi": "Một chất điểm chuyển động có phương trình chuyển động là s = -$t^3$ + 6t 2 + 17t, với t ( s ) là\nkhoảng thời gian tính từ lúc vật bắt đầu chuyển động và s ( m ) là quãng đường vật đi được trong\nkhoảng thời gian đó. Trong khoảng thời gian 8 giây đầu tiên, vận tốc v ( m / s ) của chất điểm đạt\ngiá trị lớn nhất bằng?",
    "question_en": "A particle moves according to $s(t)=-t^3+6t^2+17t$, where $t$ is in seconds and $s$ in meters. During the first 8 seconds, what is the maximum velocity?",
    "options": [],
    "solution_vi": "Ta có: v = s′ = -3t 2 + 12t + 17\nTa đi tìm giá trị lớn nhất của v = -3t 2 + 12t + 17 trên khoảng ( 0;8 )\nMặt khác: v ' = -6t 2 + 12 = 0 ⇒ t = 2\nBảng biến thiên:\nVậy vận tốc lớn nhất trong khoảng 8 giây đầu tiên là: 29 (m/s).",
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
    "question_vi": "Một công ty sản xuất dụng cụ thể thao nhận được một đơn đặt hàng sản xuất 8000 quả bóng\ntennis. Công ty này sở hữu một số máy móc, mỗi máy có thể sản xuất 30 quả bóng trong một\ngiờ. Chi phí thiết lập các máy này là 200 nghìn đồng cho mỗi máy. Khi được thiết lập, hoạt động\nsản xuất sẽ hoàn toàn diễn ra tự động dưới sự giám sát. Số tiền phải trả cho người giám sát là\n192 nghìn đồng một giờ. Số máy móc công ty nên sử dụng là bao nhiêu để chi phí hoạt động là\nthấp nhất?",
    "question_en": "A sporting-goods company receives an order for 8,000 tennis balls. Each machine can produce 30 balls per hour. Setting up each machine costs 200 thousand VND, and a supervisor is paid 192 thousand VND per hour while production runs. How many machines should be used to minimize operating cost?",
    "options": [],
    "solution_vi": "Gọi số máy móc công ty sử dụng để sản xuất là x ( x ∈ Ν, x > 0 ).\n8000\nThời gian cần để sản xuất hết 8000 quả bóng là:.\n30x\n8000 51200\nTổng chi phí để sản xuất là: P ( x ) = 200 x +.192 = 200 x +\n30 x x\n51200 [ x = 16\nTa có: P′ ( x ) = 200 - = 0 ⇔ x^2 = 256 ⇔.\nx = -16 ( loai )\n2\nx\nBảng biến thiên:\n28 \nVậy công ty nên sử dụng 16 máy để chi phí hoạt động là thấp nhất.\n-----------------HẾT-----------------",
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
    "question_vi": "Một màn ảnh hình chữ nhật cao 1, 4 mét và đặt ở độ cao 1, 8 mét so với tầm mắt (tính từ đầu mép dưới của màn hình). Để nhìn rõ nhất phải xác định vị trí đó? Biết rằng góc BOC là góc nhọn. C 1, 4 B 1, 8 A O",
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
        "content_vi": "AO = 2, 6 m",
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
    "solution_vi": "Đặt độ dài cạnh AO = x cm, ( x > 0 )\nSuy ra: BO = 3, 24 + x^2, CO = 10, 24 + x^2\nTa sử dụng định lí cosin trong tam giác OBC ta có:\nOB 2 + OC 2 - BC 2 ( 3, 24 + x ) + (10, 24 + x ) - 1,96\n2 2\n5,76 + x^2\ncos BOC = = =\n2.OB.OC 2 ( 3, 24 + x^2 )(10, 24 + x^2 ) ( 3, 24 + x )(10, 24 + x )\n2 2\n5,76 + x^2\nVì góc BOC là góc nhọn nên bài toán trở thành tìm x để F ( x ) = đạt\n( 3, 24 + x )(10, 24 + x )\n2 2\ngiá trị nhỏ nhất.\n63\nt+\nĐặt ( 3, 24 + x^2 ) = t, ( t > 3, 24 ) suy ra F ( t ) = 25 = 25t + 63\nt ( t + 7 ) 25 t ( t + 7 )\nTa tìm t để F (t ) nhận giá trị nhỏ nhất.\n( ( ))\n25 t ( t + 7 ) - ( 25t + 63) 2t + 7 \n( 25t + 63 )′ 1 2 t (t + 7) \nF '(t ) = = \n25 t ( t + 7 ) 25 t (t + 7) \n\n1 ( 50 ( t + 7t ) - ( 25t + 63)( 2t + 7 ) ) 1 ( )\n2\n49t - 441\n= = =0⇔t =9\n25 \n2t ( t + 7 ) t ( t + 7 ) 25 2t ( t + 7 ) t ( t + 7 ) \n\nBảng biến thiên:\nThay vào đặt ta có: ( 3,24 + x^2 ) = 9 ⇔ x^2 =\n144\n⇔ x = 2,4m\n25\nVậy để nhìn rõ nhất thì AO = 2, 4 m.",
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
    "question_vi": "Nhà Long muốn xây một hồ chứa nước có dạng một khối hộp chữ nhật có nắp đậy có thể tích bằng $576\\,\\text{m}^3$. Đáy hồ là hình chữ nhật có chiều dài gấp đôi chiều rộng. Giá tiền thuê nhân công để xây hồ tính theo m 2 là 500. 000 đồng/m2. Hãy xác định kích thước của hồ chứa nước sao cho chi phí thuê nhân công là ít nhất và chi phí đó là bao nhiêu?",
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
    "solution_vi": "Gọi x, y, h lần lượt là chiều dài, chiều rộng, chiều cao của hồ chứa nước, ( x > 0, y > 0, h > 0, m )\ny V 576 288\nTa có: = 2 ⇔ y = 2 x. Thể tích hồ chứa nước V = xyh ⇔ h = = = 2\nx xy x ( 2 x ) x\nDiện tích cần xây dựng hồ chứa nước:\n288 288 1728\nS ( x ) = 2 xy + 2 xh + 2 yh = 2 x ( 2 x ) + 2 x^2\n+ 2 ( 2x ) 2 = 4x2 +\nx x x\nĐể chi phí nhân công là ít nhất thì diện tích cần xây dựng là nhỏ nhất, mà vẫn đạt thể tích như\nmong muốn.\nBài toán trở thành tìm x để S ( x ) nhỏ nhất\n1728 1728\n⇔ S ( x ) = 4x2 + ⇒ S ′ ( x ) = 0 ⇔ 8x - 2 = 0 ⇔ x = 6\nx x\nBảng biến thiên:\n10 \nVậy kích thước của hồ là: rộng 6m, dài 12m, cao 8m.\nDiện tích cần xây: 432m 2 và chi phí ít nhất là: 432 x500.000 = 216.000.000",
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
    "question_vi": "Ông Nam cần xây dựng một bể nước mưa dạng hình hộp chữ nhật không nắp có thể tích $V=8\\,\\text{m}^3$, chiều dài bằng $\\frac43$ chiều rộng. Đáy và nắp đổ bê tông cốt thép, xung quanh xây bằng gạch và xi măng. Chi phí trung bình là 980.000 đồng/m$^2$ và trên nắp để hở một khoảng hình vuông có diện tích bằng $\\frac29$ diện tích nắp bể. Tính chi phí thấp nhất ông Nam phải chi trả, làm tròn đến hàng nghìn đồng.",
    "question_en": "Mr. Nam builds a rectangular rainwater tank of volume $8\\,\\text{m}^3$ whose length is $\\frac43$ of its width. The bottom and lid are reinforced concrete, the sides are brick and cement, and the average cost is 980,000 VND per square meter. A square opening in the lid has area equal to $\\frac29$ of the lid area. Find the minimum cost, rounded to the nearest thousand VND.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "22. 770. 000 đ.",
        "content_en": "22,770,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "27. 657. 000 đ.",
        "content_en": "27,657,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "20. 965. 000 đ.",
        "content_en": "20,965,000 VND.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "23. 235. 000 đ.",
        "content_en": "23,235,000 VND.",
        "is_correct": false
      }
    ],
    "solution_vi": "2\nGọi chiều rộng của bể là 3 x ( m ). Ta có chiều dài bể là 4 x ( m) và chiều cao của bể là ( m)\n3x 2\nKhi đó tổng diện tích bề mặt xây là:\n28 64 x^2 28 64 x^2 32 7\nT = ( 3x + 4 x ).2.\n2\n3x 2\n+ 2.3 x.4 x -\n2\n9\n.3 x.4 x =\n3x 2\n+\n3\n≥ 2.\n3x 2\n.\n3\n=\n3\n( m2 ).\n32 7\nChi phí C (tính theo đồng) xây dựng là: C = T.980000 ≥.980000 ≈ 27657000 (đồng).\n3",
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
    "question_vi": "Một cái hộp có dạng hình hộp chữ nhật có thể tích bằng 48 và chiều dài gấp đôi chiều rộng. Chất\nliệu làm đáy và 4 mặt bên của hộp có giá thành gấp ba lần giá thành của chất liệu làm nắp hộp.\nGọi h là chiều cao của hộp để giá thành của hộp là thấp nhất. Biết $h=\\dfrac{m}{n}$ với m, n là các số\nnguyên dương nguyên tố cùng nhau. Tổng $m+n$ bằng bao nhiêu?",
    "question_en": "A closed rectangular box has volume $48$, and its length is twice its width. The material used for the bottom and four side faces costs three times as much per unit area as the material used for the lid. Let $h=\\dfrac{m}{n}$ be the height that minimizes total cost, where $m,n$ are coprime positive integers. Find $m+n$.",
    "options": [],
    "solution_vi": "Gọi chiều dài, chiều rộng của hộp là 2x và x ( x > 0).\nKhi đó, ta có thể tích của cái hộp là: V = 2 x^2.h ⇒ 2 x^2.h = 48 ⇔ x^2.h = 24\nDo giá thành làm đáy và mặt bên hộp là 3, giá thành làm nắp hộp là 1 nên giá thành làm hộp là\nL = 3 ( 2 x^2 + 2 xh + 4 xh ) + 2 x^2\nÁp dụng bất đẳng thức Cauchy cho ba số không âm ta được:\nL = 8 x^2 + 9 xh + 9 xh ≥ 3 3 8 x^2.9 xh.9 xh = 3 3 648 ( x^2 h ) = 216\n2\n{ 9h\nx= {x = 3\n{8 x = 9 xh2\n8 \nDấu bằng xảy ra khi và chỉ khi: 2 ⇒ 2 ⇒ 8\nx h = 24 9.h3 = 24 h = 3\n82\nVậy m = 8, n = 3 và m + n = 11.",
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
