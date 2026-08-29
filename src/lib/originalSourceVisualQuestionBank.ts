import { Question } from '../types';

/** Câu có hình/bảng gốc: PDF GV giữ nguyên văn, DOCX GV cung cấp media nguyên bản. */
export const ORIGINAL_SOURCE_VISUAL_QUESTION_BANK: Question[] = [
  {
    "id": "src-pnl12ch1-visual-b1-c02",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "EASY",
    "language_level": 2,
    "question_vi": "Cho hàm số $f(x)$ có bảng xét dấu của đạo hàm như hình dưới đây. Hàm số đã cho nghịch biến trên khoảng nào?",
    "question_en": "The derivative sign chart of $f(x)$ is shown below. On which interval is the function decreasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$ (2;+\\infty) $",
        "content_en": "$ (2,+\\infty) $",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$ (-\\infty;-2) $",
        "content_en": "$ (-\\infty,-2) $",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$ (-2;+\\infty) $",
        "content_en": "$ (-2,+\\infty) $",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$ (-2;1) $",
        "content_en": "$ (-2,1) $",
        "is_correct": false
      }
    ],
    "solution_vi": "Từ bảng xét dấu, $f'(x)<0$ khi $x>2$. Do đó hàm số nghịch biến trên $(2;+\\infty)$.",
    "solution_en": "From the sign chart, $f'(x)<0$ for $x>2$, so $f$ is decreasing on $(2,+\\infty)$.",
    "correct_answer": "A",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-b1d1/image224.png",
        "alt_vi": "Bảng xét dấu của đạo hàm $f'(x)$.",
        "alt_en": "Sign chart of $f'(x)$.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "10e9d015acb38418db489ebb2cd29e9748d9c0e553698fd7aa2643d398cfd397"
      }
    ],
    "math_skill": "Đọc bảng xét dấu đạo hàm để xác định khoảng đơn điệu",
    "english_skill": "Read a derivative sign chart",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "variant_tag": "pnl12-ch1-b1-visual-signchart-c02",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "src-pnl12ch1-visual-b1-c03",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "EASY",
    "language_level": 2,
    "question_vi": "Cho hàm số $y=f(x)$ có đồ thị là đường cong trong hình dưới đây. Hàm số đã cho nghịch biến trên khoảng nào?",
    "question_en": "The graph of $y=f(x)$ is shown below. On which interval is the function decreasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-1;1)$",
        "content_en": "$(-1,1)$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(1;+\\infty)$",
        "content_en": "$(1,+\\infty)$",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$(0;1)$",
        "content_en": "$(0,1)$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(-1;+\\infty)$",
        "content_en": "$(-1,+\\infty)$",
        "is_correct": false
      }
    ],
    "solution_vi": "Quan sát đồ thị, hàm số nghịch biến trên $(-1;0)$ và $(1;+\\infty)$. Trong các phương án, chỉ có $(1;+\\infty)$ phù hợp.",
    "solution_en": "From the graph, $f$ decreases on $(-1,0)$ and $(1,+\\infty)$. Thus option B is correct.",
    "correct_answer": "B",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-b1d1/image231.png",
        "alt_vi": "Đồ thị gốc của hàm số $y=f(x)$.",
        "alt_en": "Original graph of $y=f(x)$.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "82aadd1c130ec888b213104ef599fdbb7791d1397a601929d73cd9d6f7686c19"
      }
    ],
    "math_skill": "Đọc đồ thị để xác định khoảng nghịch biến",
    "english_skill": "Read monotonicity from a graph",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "variant_tag": "pnl12-ch1-b1-visual-graph-c03",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "src-pnl12ch1-visual-b1-c05",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "EASY",
    "language_level": 2,
    "question_vi": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d$ có đồ thị như hình dưới đây. Hàm số $y=f(x)$ đồng biến trên khoảng nào?",
    "question_en": "The cubic function $y=f(x)=ax^3+bx^2+cx+d$ has the graph shown below. On which interval is $f$ increasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-1;1)$",
        "content_en": "$(-1,1)$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$(-\\infty;-1)$",
        "content_en": "$(-\\infty,-1)$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(2;+\\infty)$",
        "content_en": "$(2,+\\infty)$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$(0;1)$",
        "content_en": "$(0,1)$",
        "is_correct": true
      }
    ],
    "solution_vi": "Quan sát đồ thị, trên khoảng $(0;1)$ đường cong đi lên từ trái sang phải nên hàm số đồng biến.",
    "solution_en": "From the graph, the curve rises from left to right on $(0,1)$, so $f$ is increasing there.",
    "correct_answer": "D",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-b1d1/image246.png",
        "alt_vi": "Đồ thị gốc của hàm số bậc ba.",
        "alt_en": "Original cubic-function graph.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "76ae2b61566b566957df35260fbc2374ae175683b15afc107879ef6912a73c67"
      }
    ],
    "math_skill": "Đọc đồ thị hàm bậc ba để xác định khoảng đồng biến",
    "english_skill": "Identify an increasing interval from a graph",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "variant_tag": "pnl12-ch1-b1-visual-graph-c05",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "src-pnl12ch1-visual-b1-c12",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "EASY",
    "language_level": 2,
    "question_vi": "Cho hàm số $y=f(x)$ có bảng xét dấu đạo hàm như hình dưới đây. Mệnh đề nào đúng?",
    "question_en": "The derivative sign chart of $y=f(x)$ is shown below. Which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "Hàm số nghịch biến trên $(-\\infty;-2)$.",
        "content_en": "The function decreases on $(-\\infty,-2)$.",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "Hàm số đồng biến trên $(-2;0)$.",
        "content_en": "The function increases on $(-2,0)$.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Hàm số đồng biến trên $(-\\infty;0)$.",
        "content_en": "The function increases on $(-\\infty,0)$.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Hàm số nghịch biến trên $(0;2)$.",
        "content_en": "The function decreases on $(0,2)$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Bảng dấu cho $f'(x)<0$ trên $(0;2)$, vì vậy hàm số nghịch biến trên khoảng này.",
    "solution_en": "The chart shows $f'(x)<0$ on $(0,2)$, so the function decreases on that interval.",
    "correct_answer": "D",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-b1d1/image310.png",
        "alt_vi": "Bảng xét dấu gốc của đạo hàm.",
        "alt_en": "Original derivative sign chart.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "509b2f95098225f2b7aa5c1e1e52f09b465183ff0fc6fd6468365aad0cf97698"
      }
    ],
    "math_skill": "Đọc bảng dấu đạo hàm",
    "english_skill": "Interpret a derivative sign chart",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "variant_tag": "pnl12-ch1-b1-visual-signchart-c12",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "src-pnl12ch1-visual-b1-c14",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "EASY",
    "language_level": 2,
    "question_vi": "Cho hàm số $y=f(x)$ có bảng xét dấu của đạo hàm $f'(x)$ như hình dưới đây. Hàm số $y=f(x)$ đồng biến trên khoảng nào?",
    "question_en": "The sign chart of $f'(x)$ is shown below. On which interval is $y=f(x)$ increasing?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$(-\\infty;-1)$",
        "content_en": "$(-\\infty,-1)$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$\\mathbb{R}$",
        "content_en": "$\\mathbb{R}$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$(-1;+\\infty)$",
        "content_en": "$(-1,+\\infty)$",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$(-2;+\\infty)$",
        "content_en": "$(-2,+\\infty)$",
        "is_correct": false
      }
    ],
    "solution_vi": "Theo bảng dấu, $f'(x)>0$ khi $x>-1$. Vậy hàm số đồng biến trên $(-1;+\\infty)$.",
    "solution_en": "The sign chart gives $f'(x)>0$ for $x>-1$, so $f$ increases on $(-1,+\\infty)$.",
    "correct_answer": "C",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-b1d1/image329.png",
        "alt_vi": "Bảng xét dấu của $f'(x)$.",
        "alt_en": "Sign chart of $f'(x)$.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "ee255ed94452a67f53f78eaf5aaff0ab88503e45b53be5ef51139a41dc735436"
      }
    ],
    "math_skill": "Đọc bảng dấu để xác định khoảng đồng biến",
    "english_skill": "Identify an increasing interval from a sign chart",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "variant_tag": "pnl12-ch1-b1-visual-signchart-c14",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "src-pnl12ch1-visual-b1-c35",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "EASY",
    "language_level": 2,
    "question_vi": "Cho hàm số $y=f(x)$ có bảng xét dấu của đạo hàm như hình bên. Số điểm cực tiểu của hàm số $y=f(x)$ là bao nhiêu?",
    "question_en": "The derivative sign chart of $y=f(x)$ is shown. How many local-minimum points does $f$ have?",
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
        "content_vi": "2",
        "content_en": "2",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "1",
        "content_en": "1",
        "is_correct": false
      }
    ],
    "solution_vi": "Đạo hàm đổi dấu từ âm sang dương tại $x=-3$ và $x=3$, nên hàm số có 2 điểm cực tiểu.",
    "solution_en": "The derivative changes from negative to positive at $x=-3$ and $x=3$, so $f$ has 2 local minima.",
    "correct_answer": "C",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-b1d1/image533.png",
        "alt_vi": "Bảng xét dấu gốc dùng để đếm điểm cực tiểu.",
        "alt_en": "Original derivative sign chart for counting local minima.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "01357dfb70cfde57a2bb14ab0f3375da4a2a89a0eefdff143552c3004e85252a"
      }
    ],
    "math_skill": "Xác định cực trị từ dấu của đạo hàm",
    "english_skill": "Count local minima from a derivative sign chart",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "variant_tag": "pnl12-ch1-b1-visual-extrema-c35",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "src-pnl12ch1-visual-b1-c36",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho hàm số $f(x)=ax^4+bx^3+cx^2+dx+e$. Hàm số $y=f'(x)$ có đồ thị như hình dưới đây. Đồ thị hàm số $y=f(x)$ có tất cả bao nhiêu điểm cực trị?",
    "question_en": "Let $f(x)=ax^4+bx^3+cx^2+dx+e$. The graph of $y=f'(x)$ is shown below. How many local-extremum points does the graph of $y=f(x)$ have?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4",
        "content_en": "4",
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
        "content_vi": "1",
        "content_en": "1",
        "is_correct": true
      }
    ],
    "solution_vi": "Đồ thị $y=f'(x)$ cắt trục hoành tại đúng một điểm và đổi dấu tại đó. Vì vậy $f(x)$ có đúng 1 điểm cực trị.",
    "solution_en": "The graph of $f'$ crosses the x-axis once and changes sign there; hence $f$ has exactly one local extremum.",
    "correct_answer": "D",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-b1d1/image538.png",
        "alt_vi": "Đồ thị gốc của hàm số $y=f'(x)$.",
        "alt_en": "Original graph of $y=f'(x)$.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "80516feb9b8a14e88a5b818a9cec4b304db0824ec29381e10562799db4adb89d"
      }
    ],
    "math_skill": "Suy ra số cực trị của hàm số từ đồ thị đạo hàm",
    "english_skill": "Infer extrema from a derivative graph",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "variant_tag": "pnl12-ch1-b1-visual-derivativegraph-c36",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "src-pnl12ch1-visual-b1-short-c06",
    "topic_id": "top-12-1-1",
    "type_id": "type-kntt-12-01-03",
    "question_type": "SHORT",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "question_vi": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và có bảng xét dấu $f'(x)$ như hình dưới đây. Hàm số có bao nhiêu điểm cực trị?",
    "question_en": "The function $f$ is continuous on $\\mathbb{R}$ and the sign chart of $f'(x)$ is shown below. How many local extrema does $f$ have?",
    "options": [],
    "solution_vi": "Đạo hàm đổi dấu khi đi qua ba điểm $x=-2$, $x=1$, $x=2$. Do đó hàm số có 3 điểm cực trị.",
    "solution_en": "The derivative changes sign at $x=-2$, $x=1$, and $x=2$, so the function has 3 local extrema.",
    "correct_answer": "3",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-b1d1/image750.png",
        "alt_vi": "Bảng xét dấu gốc của $f'(x)$.",
        "alt_en": "Original sign chart of $f'(x)$.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "e311c8ebf4a6c0752c9095db30fcd3ee9950f9a94c83cdbead646e0647c3ac76"
      }
    ],
    "math_skill": "Đếm số điểm cực trị từ bảng dấu đạo hàm",
    "english_skill": "Count local extrema from a derivative sign chart",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "variant_tag": "pnl12-ch1-b1-visual-short-c06",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z"
  },
  {
    "topic_id": "top-12-1-4",
    "question_type": "MCQ",
    "format_type": "TN",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z",
    "id": "src-pnl12ch1-visual-b4-de04-c01",
    "type_id": "type-kntt-12-04-01",
    "difficulty": "MEDIUM",
    "question_vi": "Bảng biến thiên dưới đây là của hàm số nào?",
    "question_en": "Which function has the variation table shown below?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$y=-x^3+3x^2-3$",
        "content_en": "$y=-x^3+3x^2-3$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$y=x^3+3x^2-1$",
        "content_en": "$y=x^3+3x^2-1$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$y=x^3-3x+2$",
        "content_en": "$y=x^3-3x+2$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$y=x^3-3x^2+2$",
        "content_en": "$y=x^3-3x^2+2$",
        "is_correct": true
      }
    ],
    "solution_vi": "Với $y=x^3-3x^2+2$ ta có $y'=3x(x-2)$; các điểm tới hạn $0,2$ và các giá trị cực trị lần lượt là $2,-2$, đúng với bảng biến thiên.",
    "solution_en": "For $y=x^3-3x^2+2$, $y'=3x(x-2)$; the critical points are $0,2$ with values $2,-2$, matching the table.",
    "correct_answer": "D",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-de04-b4/image1.png",
        "alt_vi": "Bảng biến thiên gốc.",
        "alt_en": "Original variation table.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "7f7e387e0e499910b2897bd2d50d67817c49d23397b3aa634a5ffd17e45133b4"
      }
    ],
    "math_skill": "Nhận dạng hàm bậc ba từ bảng biến thiên",
    "english_skill": "Match a cubic function to its variation table",
    "variant_tag": "pnl12-ch1-b4-original-variation-c01"
  },
  {
    "topic_id": "top-12-1-4",
    "question_type": "MCQ",
    "format_type": "TN",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z",
    "id": "src-pnl12ch1-visual-b4-de04-c02",
    "type_id": "type-kntt-12-04-02",
    "difficulty": "MEDIUM",
    "question_vi": "Cho hàm số $y=\\dfrac{ax+b}{cx-1}$ có đồ thị như hình dưới đây. Tính $S=a+b+c$.",
    "question_en": "The graph of $y=\\dfrac{ax+b}{cx-1}$ is shown below. Find $S=a+b+c$.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$0$",
        "content_en": "$0$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$-2$",
        "content_en": "$-2$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$2$",
        "content_en": "$2$",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "$4$",
        "content_en": "$4$",
        "is_correct": false
      }
    ],
    "solution_vi": "Từ đồ thị: tiệm cận ngang $y=-1$ nên $a/c=-1$; tiệm cận đứng $x=1$ nên $c=1$, do đó $a=-1$. Đồ thị cắt $Ox$ tại $x=2$ nên $2a+b=0$, suy ra $b=2$. Vậy $S=2$.",
    "solution_en": "From the graph, the horizontal asymptote is $y=-1$ and the vertical asymptote is $x=1$, so $c=1,a=-1$. The x-intercept is $2$, hence $2a+b=0$ and $b=2$. Thus $S=2$.",
    "correct_answer": "C",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-de04-b4/image9.png",
        "alt_vi": "Đồ thị gốc của hàm phân thức bậc nhất trên bậc nhất.",
        "alt_en": "Original linear-over-linear rational graph.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "b37b1a5286d2e1e5aa43d0797876fefa5f18ec119acb623c5624cd1927cf2f15"
      }
    ],
    "math_skill": "Đọc tiệm cận và giao điểm từ đồ thị hàm phân thức",
    "english_skill": "Read asymptotes and intercepts from a rational graph",
    "variant_tag": "pnl12-ch1-b4-original-rational-c02"
  },
  {
    "topic_id": "top-12-1-4",
    "question_type": "MCQ",
    "format_type": "TN",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z",
    "id": "src-pnl12ch1-visual-b4-de04-c03",
    "type_id": "type-kntt-12-04-01",
    "difficulty": "MEDIUM",
    "question_vi": "Đường cong trong hình bên là đồ thị của một trong bốn hàm số sau. Hàm số nào đúng?",
    "question_en": "The curve shown is the graph of one of the following functions. Which one is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$y=x^3-3x-1$",
        "content_en": "$y=x^3-3x-1$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$y=x^3-3x^2+1$",
        "content_en": "$y=x^3-3x^2+1$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$y=-x^3+3x+1$",
        "content_en": "$y=-x^3+3x+1$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$y=x^3-3x+1$",
        "content_en": "$y=x^3-3x+1$",
        "is_correct": true
      }
    ],
    "solution_vi": "Đồ thị có hệ số bậc ba dương, cắt trục $Oy$ tại tung độ dương và hai điểm cực trị có hoành độ trái dấu. Chỉ $y=x^3-3x+1$ phù hợp.",
    "solution_en": "The leading coefficient is positive, the y-intercept is positive, and the two critical x-values have opposite signs. Only $y=x^3-3x+1$ fits.",
    "correct_answer": "D",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-de04-b4/image22.png",
        "alt_vi": "Đồ thị bậc ba gốc.",
        "alt_en": "Original cubic graph.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "eb3332c57653ff78dd6f98ab6980ba799a0c339306cc1c93bf1a32c7e484fad6"
      }
    ],
    "math_skill": "Nhận dạng công thức hàm bậc ba từ đồ thị",
    "english_skill": "Identify a cubic formula from its graph",
    "variant_tag": "pnl12-ch1-b4-original-cubic-c03"
  },
  {
    "topic_id": "top-12-1-4",
    "question_type": "MCQ",
    "format_type": "TN",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z",
    "id": "src-pnl12ch1-visual-b4-de04-c04",
    "type_id": "type-kntt-12-04-02",
    "difficulty": "HARD",
    "question_vi": "Cho hàm số $f(x)=\\dfrac{ax-6}{bx-c}$, với $a,b,c\\in\\mathbb{R}$, có bảng biến thiên như hình dưới đây. Trong các số $a,b,c$ có bao nhiêu số âm?",
    "question_en": "The function $f(x)=\\dfrac{ax-6}{bx-c}$ has the variation table shown below. How many of $a,b,c$ are negative?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3",
        "content_en": "3",
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
        "content_vi": "0",
        "content_en": "0",
        "is_correct": false
      }
    ],
    "solution_vi": "Bảng cho tiệm cận đứng $x=-2$, tiệm cận ngang $y=1$ và hàm nghịch biến trên mỗi khoảng xác định. Suy ra trường hợp phù hợp là $b<0,c>0,a<0$, nên có 2 số âm.",
    "solution_en": "The table gives vertical asymptote $x=-2$, horizontal asymptote $y=1$, and decreasing behavior on each domain interval. The consistent signs are $b<0,c>0,a<0$, so two numbers are negative.",
    "correct_answer": "C",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-de04-b4/image31.png",
        "alt_vi": "Bảng biến thiên gốc của hàm phân thức.",
        "alt_en": "Original rational-function variation table.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "dafc2956ebb1a0b5ae1077da5663490b6aaee12c0e864ac80343194d294a9f8d"
      }
    ],
    "math_skill": "Suy dấu hệ số từ bảng biến thiên và tiệm cận",
    "english_skill": "Infer coefficient signs from a variation table",
    "variant_tag": "pnl12-ch1-b4-original-variation-c04"
  },
  {
    "topic_id": "top-12-1-4",
    "question_type": "MCQ",
    "format_type": "TN",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z",
    "id": "src-pnl12ch1-visual-b4-de04-c05",
    "type_id": "type-kntt-12-04-03",
    "difficulty": "MEDIUM",
    "question_vi": "Đồ thị ở hình bên là của một trong bốn hàm số sau. Hàm số nào đúng?",
    "question_en": "The graph shown corresponds to one of the following functions. Which one is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$y=\\dfrac{x^2-x-1}{x-2}$",
        "content_en": "$y=\\dfrac{x^2-x-1}{x-2}$",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$y=\\dfrac{x^2+x-1}{x-2}$",
        "content_en": "$y=\\dfrac{x^2+x-1}{x-2}$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$y=\\dfrac{x^2-2x-1}{x-2}$",
        "content_en": "$y=\\dfrac{x^2-2x-1}{x-2}$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$y=\\dfrac{x^2-x+1}{x-2}$",
        "content_en": "$y=\\dfrac{x^2-x+1}{x-2}$",
        "is_correct": false
      }
    ],
    "solution_vi": "Đối chiếu tiệm cận đứng $x=2$, tiệm cận xiên và các giao điểm trên hình, hàm số phù hợp là $y=\\dfrac{x^2-x-1}{x-2}$.",
    "solution_en": "Matching the vertical asymptote $x=2$, the oblique asymptote, and the intercepts gives $y=\\dfrac{x^2-x-1}{x-2}$.",
    "correct_answer": "A",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-de04-b4/image51.png",
        "alt_vi": "Đồ thị gốc của hàm phân thức bậc hai trên bậc nhất.",
        "alt_en": "Original quadratic-over-linear rational graph.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "5b9e88538cabba8706e29ebaed424bdae9d2709f7345ae201ae458dadb5e9180"
      }
    ],
    "math_skill": "Nhận dạng hàm phân thức bậc hai trên bậc nhất từ đồ thị",
    "english_skill": "Identify a quadratic-over-linear rational function from its graph",
    "variant_tag": "pnl12-ch1-b4-original-rational-c05"
  },
  {
    "topic_id": "top-12-1-4",
    "question_type": "MCQ",
    "format_type": "TN",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z",
    "id": "src-pnl12ch1-visual-b4-de04-c06",
    "type_id": "type-kntt-12-04-01",
    "difficulty": "HARD",
    "question_vi": "Cho hàm số $y=ax^3+bx^2+cx+d$ có đồ thị như hình bên. Có bao nhiêu số dương trong các số $a,b,c,d$?",
    "question_en": "The cubic $y=ax^3+bx^2+cx+d$ has the graph shown. How many of $a,b,c,d$ are positive?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "4",
        "content_en": "4",
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
        "content_vi": "1",
        "content_en": "1",
        "is_correct": true
      },
      {
        "option_key": "D",
        "content_vi": "3",
        "content_en": "3",
        "is_correct": false
      }
    ],
    "solution_vi": "Từ dáng đồ thị suy ra $a<0$. Hai điểm cực trị đều có hoành độ âm dẫn đến $b<0,c<0$. Giao điểm với trục $Oy$ có tung độ dương nên $d>0$. Chỉ có 1 số dương.",
    "solution_en": "The graph gives $a<0$. Both critical x-values are negative, which yields $b<0,c<0$. The y-intercept is positive, so $d>0$. Exactly one coefficient is positive.",
    "correct_answer": "C",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-de04-b4/image59.png",
        "alt_vi": "Đồ thị bậc ba gốc dùng để suy dấu hệ số.",
        "alt_en": "Original cubic graph used to infer coefficient signs.",
        "title_vi": "Hình/bảng gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure/table from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "6231b68b7107c649da07278f317745087a136d2f1834adf172b80dd0ca4a9f93"
      }
    ],
    "math_skill": "Suy dấu hệ số đa thức bậc ba từ đồ thị",
    "english_skill": "Infer coefficient signs from a cubic graph",
    "variant_tag": "pnl12-ch1-b4-original-cubic-c06"
  },
  {
    "topic_id": "top-12-1-5",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z",
    "id": "src-pnl12ch1-visual-b5-c11",
    "type_id": "type-kntt-12-05-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "HARD",
    "question_vi": "Dùng một dây thép dài $60\\,m$ uốn thành một khung như hình dưới đây: phần dưới là hình chữ nhật, phần trên là tam giác đều. Diện tích lớn nhất của khung bằng bao nhiêu?",
    "question_en": "A $60$ m steel wire is bent into the frame shown below: a rectangle topped by an equilateral triangle. What is the maximum enclosed area?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\dfrac{900}{6-\\sqrt3}\\,m^2$",
        "content_en": "$\\dfrac{900}{6-\\sqrt3}\\,m^2$",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$\\dfrac{1200}{6-\\sqrt3}\\,m^2$",
        "content_en": "$\\dfrac{1200}{6-\\sqrt3}\\,m^2$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\dfrac{700}{3+\\sqrt3}\\,m^2$",
        "content_en": "$\\dfrac{700}{3+\\sqrt3}\\,m^2$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$\\dfrac{600}{3-\\sqrt3}\\,m^2$",
        "content_en": "$\\dfrac{600}{3-\\sqrt3}\\,m^2$",
        "is_correct": false
      }
    ],
    "solution_vi": "Gọi cạnh ngang là $x$, chiều cao hình chữ nhật là $y$. Điều kiện dây cho $y=30-\\frac32x$. Khi đó $S(x)=xy+\\frac{\\sqrt3}{4}x^2$. Khảo sát hàm số cho $S_{max}=\\dfrac{900}{6-\\sqrt3}$.",
    "solution_en": "Let the horizontal side be $x$ and the rectangle height be $y$. The wire-length constraint gives $y=30-\\frac32x$. Then $S(x)=xy+\\frac{\\sqrt3}{4}x^2$, whose maximum is $\\dfrac{900}{6-\\sqrt3}$.",
    "correct_answer": "A",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-b5d2/image279.png",
        "alt_vi": "Khung dây gồm hình chữ nhật và tam giác đều.",
        "alt_en": "Wire frame consisting of a rectangle and an equilateral triangle.",
        "title_vi": "Hình gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "602187f81260b930007e7eac5ef2df13f58cdf5de8e17e23bb050d0acbed8467"
      }
    ],
    "math_skill": "Tối ưu diện tích hình học bằng đạo hàm",
    "english_skill": "Optimize a geometric area",
    "variant_tag": "pnl12-ch1-b5-original-frame-c11",
    "grading_safe": true
  },
  {
    "topic_id": "top-12-1-5",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z",
    "id": "src-pnl12ch1-visual-b5-c12",
    "type_id": "type-kntt-12-05-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "HARD",
    "question_vi": "Hình dưới mô tả đoạn đường chữ L đi vào gara. Đường vào cổng gara rộng $2{,}6\\,m$; ô tô được mô hình hóa bằng hình chữ nhật kích thước $5\\,m\\times1{,}9\\,m$. Chiều rộng nhỏ nhất $x$ của đoạn đường đầu tiên gần nhất với giá trị nào để xe đi vào được?",
    "question_en": "The figure shows an L-shaped access road to a garage. The garage lane is $2.6$ m wide, and the car is modeled as a $5$ m by $1.9$ m rectangle. Which value is closest to the minimum width $x$ of the first road segment that allows the car to pass?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$3{,}7\\,m$",
        "content_en": "$3.7\\,m$",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$2{,}6\\,m$",
        "content_en": "$2.6\\,m$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$3{,}55\\,m$",
        "content_en": "$3.55\\,m$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$4{,}27\\,m$",
        "content_en": "$4.27\\,m$",
        "is_correct": false
      }
    ],
    "solution_vi": "Mô hình hóa theo hệ trục trong hình và tối ưu điều kiện khoảng cách giữa hai đường thẳng song song cho giá trị cực đại xấp xỉ $3{,}698$. Vì vậy chiều rộng nhỏ nhất gần nhất là $3{,}7\\,m$.",
    "solution_en": "Modeling the geometry with the coordinate system shown and optimizing the parallel-line clearance gives approximately $3.698$ m. Thus the closest minimum width is $3.7$ m.",
    "correct_answer": "A",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-b5d2/image292.png",
        "alt_vi": "Sơ đồ gốc bài toán ô tô rẽ vào gara.",
        "alt_en": "Original diagram for the car-turning-into-a-garage problem.",
        "title_vi": "Hình gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "e5c87fcc133a8fc07a5615df7b257fe58f38c1a371f437f6d4b5717eabf0675f"
      }
    ],
    "math_skill": "Mô hình hóa và tối ưu ràng buộc hình học thực tế",
    "english_skill": "Model and optimize a real-world geometric constraint",
    "variant_tag": "pnl12-ch1-b5-original-garage-c12",
    "grading_safe": true
  },
  {
    "topic_id": "top-12-1-5",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
    "created_at": "2026-08-29T00:00:00.000Z",
    "id": "src-pnl12ch1-visual-b5-ds-rowing",
    "type_id": "type-kntt-12-05-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "question_vi": "Một người chèo thuyền từ $A$ đến $B$ ở bờ đối diện như hình: sông rộng $3\\,km$, $BC=8\\,km$, tốc độ chèo $6\\,km/h$, tốc độ chạy $8\\,km/h$. Gọi $x$ (km) là độ dài $BD$. Xét đúng/sai các khẳng định sau.",
    "question_en": "A man travels from $A$ to $B$ as shown. The river is $3$ km wide, $BC=8$ km, rowing speed is $6$ km/h, and running speed is $8$ km/h. Let $x$ km be $BD$. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$CD=8-x$ (km).",
        "content_en": "$CD=8-x$ km.",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "Thời gian chèo trên $AD$ là $\\dfrac{\\sqrt{x^2+9}}{3}$ giờ.",
        "content_en": "The rowing time on $AD$ is $\\dfrac{\\sqrt{x^2+9}}{3}$ hours.",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "Tổng thời gian là $\\dfrac{\\sqrt{x^2+9}}{3}+\\dfrac{8-x}{8}$ giờ.",
        "content_en": "The total time is $\\dfrac{\\sqrt{x^2+9}}{3}+\\dfrac{8-x}{8}$ hours.",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "Khoảng $1$ giờ $20$ phút là thời gian ngắn nhất để đến $B$.",
        "content_en": "About 1 hour 20 minutes is the minimum travel time to $B$.",
        "is_correct": true
      }
    ],
    "solution_vi": "Ta có $CD=8-x$. Quãng đường chèo $AD=\\sqrt{x^2+9}$ nên thời gian chèo là $\\frac{\\sqrt{x^2+9}}6$; thời gian chạy là $\\frac{8-x}{8}$. Khảo sát tổng thời gian cho giá trị nhỏ nhất xấp xỉ $1$ giờ $20$ phút. Vì vậy A đúng, B sai, C sai, D đúng.",
    "solution_en": "$CD=8-x$. The rowing distance is $AD=\\sqrt{x^2+9}$, so rowing time is $\\frac{\\sqrt{x^2+9}}6$ and running time is $\\frac{8-x}{8}$. Optimizing the total gives about 1 h 20 min. Thus A true, B false, C false, D true.",
    "correct_answer": "A-Đ; B-S; C-S; D-Đ",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-ch1-b5d2/image406.png",
        "alt_vi": "Sơ đồ gốc bài toán chèo thuyền và chạy bộ.",
        "alt_en": "Original rowing-and-running route diagram.",
        "title_vi": "Hình gốc từ bản GV Phan Nhật Linh",
        "title_en": "Original figure from Phan Nhat Linh teacher source",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "89f9200fec0e805037bbd574ffa4c2b0ef584079ff1bd7369cf8b422bc67d5eb"
      }
    ],
    "math_skill": "Tối ưu thời gian chuyển động",
    "english_skill": "Optimize travel time",
    "variant_tag": "pnl12-ch1-b5-original-rowing-ds",
    "grading_safe": true
  }
];
