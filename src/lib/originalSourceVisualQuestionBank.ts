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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
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
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Chương 1 lớp 12 (bản GV)",
        "source_sha256": "89f9200fec0e805037bbd574ffa4c2b0ef584079ff1bd7369cf8b422bc67d5eb"
      }
    ],
    "math_skill": "Tối ưu thời gian chuyển động",
    "english_skill": "Optimize travel time",
    "variant_tag": "pnl12-ch1-b5-original-rowing-ds",
    "grading_safe": true
  },
  {
    "id": "src-pnl12b8-c1-asym-159",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Quan sát bảng biến thiên trong hình. Đồ thị hàm số có bao nhiêu đường tiệm cận đứng?",
    "question_en": "From the variation table, how many vertical asymptotes does the graph have?",
    "solution_vi": "Từ bảng biến thiên, khi $x\\to0^-$ thì $f(x)\\to-\\infty$ và khi $x\\to0^+$ thì $f(x)\\to+\\infty$. Vì vậy $x=0$ là một tiệm cận đứng; không có tiệm cận đứng nào khác.",
    "solution_en": "The table shows $f(x)\\to-\\infty$ as $x\\to0^-$ and $f(x)\\to+\\infty$ as $x\\to0^+$, so $x=0$ is the only vertical asymptote.",
    "correct_answer": "1",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c1-asymptote/image159.png",
        "alt_vi": "Bảng biến thiên gốc của hàm số.",
        "alt_en": "Original variation table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "1984a2e513ad2dcdc46cfd72e2f3ce068dd6e6051e655d60803808ad3e932175"
      }
    ],
    "math_skill": "Đọc đường tiệm cận từ bảng biến thiên",
    "english_skill": "Read asymptotes from a variation table",
    "variant_tag": "src-pnl12b8-c1-asym-159"
  },
  {
    "id": "src-pnl12b8-c1-asym-166",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Từ bảng biến thiên trong hình, hãy tính tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị.",
    "question_en": "From the variation table, find the total number of vertical and horizontal asymptotes.",
    "solution_vi": "Bảng cho $x=0$ là tiệm cận đứng và $y=2$ là tiệm cận ngang khi $x\\to-\\infty$. Tổng cộng có $2$ đường tiệm cận.",
    "solution_en": "The table gives the vertical asymptote $x=0$ and the horizontal asymptote $y=2$, so there are $2$ asymptotes in total.",
    "correct_answer": "2",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c1-asymptote/image166.png",
        "alt_vi": "Bảng biến thiên gốc của hàm số.",
        "alt_en": "Original variation table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "c18e1013d4f480662d08b82c6343e7df4980f66603205445e709d33f092074df"
      }
    ],
    "math_skill": "Đọc đường tiệm cận từ bảng biến thiên",
    "english_skill": "Read asymptotes from a variation table",
    "variant_tag": "src-pnl12b8-c1-asym-166"
  },
  {
    "id": "src-pnl12b8-c1-asym-175",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Bảng biến thiên sau cho thấy đồ thị hàm số có tất cả bao nhiêu đường tiệm cận đứng hoặc ngang?",
    "question_en": "According to the table, how many vertical or horizontal asymptotes does the graph have in total?",
    "solution_vi": "Không có điểm hữu hạn nào mà hàm số tiến tới $\\pm\\infty$, nên không có tiệm cận đứng. Khi $x\\to\\pm\\infty$, giá trị hàm số không tiến tới một số hữu hạn, nên không có tiệm cận ngang.",
    "solution_en": "There is no finite $x$ where the function tends to $\\pm\\infty$, and no finite limiting value as $x\\to\\pm\\infty$. Hence there are no vertical or horizontal asymptotes.",
    "correct_answer": "0",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c1-asymptote/image175.png",
        "alt_vi": "Bảng biến thiên gốc của hàm số.",
        "alt_en": "Original variation table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "940d15557fdf3f263e979e73ff012d37f101af796438d5bc73d51dee9546333e"
      }
    ],
    "math_skill": "Đọc đường tiệm cận từ bảng biến thiên",
    "english_skill": "Read asymptotes from a variation table",
    "variant_tag": "src-pnl12b8-c1-asym-175"
  },
  {
    "id": "src-pnl12b8-c1-asym-184",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Đọc bảng biến thiên trong hình. Đồ thị hàm số có tất cả bao nhiêu đường tiệm cận đứng và tiệm cận ngang?",
    "question_en": "Read the variation table. How many vertical and horizontal asymptotes does the graph have altogether?",
    "solution_vi": "Từ bảng: $x=-1$ là tiệm cận đứng; khi $x\\to-\\infty$, $f(x)\\to2$ nên $y=2$ là tiệm cận ngang; khi $x\\to+\\infty$, $f(x)\\to-1$ nên $y=-1$ là tiệm cận ngang. Tổng cộng $3$.",
    "solution_en": "The table gives the vertical asymptote $x=-1$ and the horizontal asymptotes $y=2$ and $y=-1$. Total: $3$.",
    "correct_answer": "3",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c1-asymptote/image184.png",
        "alt_vi": "Bảng biến thiên gốc của hàm số.",
        "alt_en": "Original variation table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "68737b4c140902ee046d619f00cbb25d15f97b033c0831e6dfc857a554675135"
      }
    ],
    "math_skill": "Đọc đường tiệm cận từ bảng biến thiên",
    "english_skill": "Read asymptotes from a variation table",
    "variant_tag": "src-pnl12b8-c1-asym-184"
  },
  {
    "id": "src-pnl12b8-c1-asym-194",
    "topic_id": "top-12-1-3",
    "type_id": "type-kntt-12-03-02",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Số đường tiệm cận phân biệt đọc được từ bảng biến thiên dưới đây là bao nhiêu?",
    "question_en": "How many distinct asymptotes can be read from the variation table below?",
    "solution_vi": "Bảng cho $x=-1$ là tiệm cận đứng. Khi $x\\to\\pm\\infty$, $f(x)\\to-2$, nên $y=-2$ là một tiệm cận ngang. Có $2$ đường tiệm cận phân biệt.",
    "solution_en": "The table gives the vertical asymptote $x=-1$. Since $f(x)\\to-2$ as $x\\to\\pm\\infty$, $y=-2$ is one horizontal asymptote. Thus there are $2$ distinct asymptotes.",
    "correct_answer": "2",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c1-asymptote/image194.png",
        "alt_vi": "Bảng biến thiên gốc của hàm số.",
        "alt_en": "Original variation table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "ef99b05eedc007ac16dac244a974a5cc7a4d977ecef6cfe12686ff953a83922a"
      }
    ],
    "math_skill": "Đọc đường tiệm cận từ bảng biến thiên",
    "english_skill": "Read asymptotes from a variation table",
    "variant_tag": "src-pnl12b8-c1-asym-194"
  },
  {
    "id": "src-pnl12b8-c3-range-92",
    "topic_id": "top-12-3-1",
    "type_id": "type-kntt-12-09-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Bảng biểu diễn số tiền (nghìn đồng) mà 60 khách hàng mua sách ở một cửa hàng trong một ngày. Tính khoảng biến thiên của mẫu số liệu ghép nhóm.",
    "question_en": "The table shows the amount of money (thousand VND) spent by 60 bookstore customers in one day. Find the range of the grouped data.",
    "solution_vi": "Khoảng biến thiên bằng cận trên của lớp cuối trừ cận dưới của lớp đầu. Kết quả: $50$ nghìn đồng.",
    "solution_en": "The classes run from $[40;50)$ to $[80;90)$, so the range is $90-40=50$ thousand VND.",
    "correct_answer": "50",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-range/image92.png",
        "alt_vi": "Bảng số liệu ghép nhóm gốc.",
        "alt_en": "Original grouped-data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "4b388c0d7c0cd4547b6a6f5ff6df45ad7e02da48ec6688d1f885fc565efee289"
      }
    ],
    "math_skill": "Tính khoảng biến thiên của mẫu số liệu ghép nhóm",
    "english_skill": "Find the range from a grouped-data table",
    "variant_tag": "src-pnl12b8-c3-range-92"
  },
  {
    "id": "src-pnl12b8-c3-range-94",
    "topic_id": "top-12-3-1",
    "type_id": "type-kntt-12-09-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Quãng đường đi bộ mỗi ngày (km) của bác Hương trong 20 ngày được cho trong bảng. Tính khoảng biến thiên của mẫu số liệu ghép nhóm.",
    "question_en": "The table gives Ms. Huong’s daily walking distance (km) over 20 days. Find the range of the grouped data.",
    "solution_vi": "Khoảng biến thiên bằng cận trên của lớp cuối trừ cận dưới của lớp đầu. Kết quả: $1.5$ km.",
    "solution_en": "The classes run from $[2.7;3.0)$ to $[3.9;4.2)$, so the range is $4.2-2.7=1.5$ km.",
    "correct_answer": "1.5",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-range/image94.png",
        "alt_vi": "Bảng số liệu ghép nhóm gốc.",
        "alt_en": "Original grouped-data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "35668953df3727dfd8be82a265805e7e25195728ae439bd623896ff47dfb4f49"
      }
    ],
    "math_skill": "Tính khoảng biến thiên của mẫu số liệu ghép nhóm",
    "english_skill": "Find the range from a grouped-data table",
    "variant_tag": "src-pnl12b8-c3-range-94"
  },
  {
    "id": "src-pnl12b8-c3-range-96",
    "topic_id": "top-12-3-1",
    "type_id": "type-kntt-12-09-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Thời gian tập nhảy mỗi ngày của bạn Chi được thống kê trong bảng. Tính khoảng biến thiên của mẫu số liệu ghép nhóm.",
    "question_en": "Chi’s daily dance-practice time is summarized in the table. Find the range of the grouped data.",
    "solution_vi": "Khoảng biến thiên bằng cận trên của lớp cuối trừ cận dưới của lớp đầu. Kết quả: $25$ phút.",
    "solution_en": "The classes run from $[20;25)$ to $[40;45)$, so the range is $45-20=25$ minutes.",
    "correct_answer": "25",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-range/image96.png",
        "alt_vi": "Bảng số liệu ghép nhóm gốc.",
        "alt_en": "Original grouped-data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "8d58af12ca208782b8f03f9ce5ee9077ea52b8adf2f4c58f71ee3ef66a596713"
      }
    ],
    "math_skill": "Tính khoảng biến thiên của mẫu số liệu ghép nhóm",
    "english_skill": "Find the range from a grouped-data table",
    "variant_tag": "src-pnl12b8-c3-range-96"
  },
  {
    "id": "src-pnl12b8-c3-range-99",
    "topic_id": "top-12-3-1",
    "type_id": "type-kntt-12-09-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Thời gian giải Rubik trong 25 lần liên tiếp của bạn Dũng được thống kê trong bảng. Tính khoảng biến thiên của mẫu số liệu ghép nhóm.",
    "question_en": "Dung’s Rubik-solving times for 25 consecutive attempts are grouped in the table. Find the range.",
    "solution_vi": "Khoảng biến thiên bằng cận trên của lớp cuối trừ cận dưới của lớp đầu. Kết quả: $10$ giây.",
    "solution_en": "The first lower endpoint is $8$ and the last upper endpoint is $18$, hence the range is $18-8=10$ seconds.",
    "correct_answer": "10",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-range/image99.png",
        "alt_vi": "Bảng số liệu ghép nhóm gốc.",
        "alt_en": "Original grouped-data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "da27af4e0de6b27f8aa8d421b35eb8ccc57c3ae433af218daf25ac0261320276"
      }
    ],
    "math_skill": "Tính khoảng biến thiên của mẫu số liệu ghép nhóm",
    "english_skill": "Find the range from a grouped-data table",
    "variant_tag": "src-pnl12b8-c3-range-99"
  },
  {
    "id": "src-pnl12b8-c3-range-101",
    "topic_id": "top-12-3-1",
    "type_id": "type-kntt-12-09-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Tuổi thọ (năm) của 20 con hổ được thống kê theo bảng ghép nhóm. Tính khoảng biến thiên của mẫu số liệu.",
    "question_en": "The lifespans (years) of 20 tigers are grouped in the table. Find the range.",
    "solution_vi": "Khoảng biến thiên bằng cận trên của lớp cuối trừ cận dưới của lớp đầu. Kết quả: $5$ năm.",
    "solution_en": "The classes extend from $[14;15)$ to $[18;19)$, so the range is $19-14=5$ years.",
    "correct_answer": "5",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-range/image101.png",
        "alt_vi": "Bảng số liệu ghép nhóm gốc.",
        "alt_en": "Original grouped-data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "4bee8cd967e9b77598b7d78bb786343b88da4f907839576fce674ed9fef20ffd"
      }
    ],
    "math_skill": "Tính khoảng biến thiên của mẫu số liệu ghép nhóm",
    "english_skill": "Find the range from a grouped-data table",
    "variant_tag": "src-pnl12b8-c3-range-101"
  },
  {
    "id": "src-pnl12b8-c3-range-109",
    "topic_id": "top-12-3-1",
    "type_id": "type-kntt-12-09-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Mức thưởng Tết (triệu đồng) của nhân viên một công ty được thống kê trong bảng. Tính khoảng biến thiên của mẫu số liệu ghép nhóm.",
    "question_en": "Employees’ Tet bonuses (million VND) are grouped in the table. Find the range.",
    "solution_vi": "Khoảng biến thiên bằng cận trên của lớp cuối trừ cận dưới của lớp đầu. Kết quả: $25$ triệu đồng.",
    "solution_en": "The classes extend from $[5;10)$ to $[25;30)$, giving range $30-5=25$ million VND.",
    "correct_answer": "25",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-range/image109.png",
        "alt_vi": "Bảng số liệu ghép nhóm gốc.",
        "alt_en": "Original grouped-data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "77fcebc7bbc0d1c071d2ceaee2393f5629c8dae81a4598136c8d83a03ba8a588"
      }
    ],
    "math_skill": "Tính khoảng biến thiên của mẫu số liệu ghép nhóm",
    "english_skill": "Find the range from a grouped-data table",
    "variant_tag": "src-pnl12b8-c3-range-109"
  },
  {
    "id": "src-pnl12b8-c3-range-111",
    "topic_id": "top-12-3-1",
    "type_id": "type-kntt-12-09-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Chiều cao của 40 học sinh nam ở một trường THPT được cho bởi bảng phân bố tần số ghép lớp. Tính khoảng biến thiên.",
    "question_en": "The heights of 40 male high-school students are given in a grouped frequency table. Find the range.",
    "solution_vi": "Khoảng biến thiên bằng cận trên của lớp cuối trừ cận dưới của lớp đầu. Kết quả: $15.5$ cm.",
    "solution_en": "The first lower endpoint is $160$ and the last upper endpoint is $175.5$, so the range is $175.5-160=15.5$ cm.",
    "correct_answer": "15.5",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-range/image111.png",
        "alt_vi": "Bảng số liệu ghép nhóm gốc.",
        "alt_en": "Original grouped-data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "17aa5fbefd43ab70cac65c372285d972c653b060179d681e46851b0f548cc78f"
      }
    ],
    "math_skill": "Tính khoảng biến thiên của mẫu số liệu ghép nhóm",
    "english_skill": "Find the range from a grouped-data table",
    "variant_tag": "src-pnl12b8-c3-range-111"
  },
  {
    "id": "src-pnl12b8-c3-range-113",
    "topic_id": "top-12-3-1",
    "type_id": "type-kntt-12-09-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "EASY",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Thời gian truy cập Internet mỗi buổi tối của một số học sinh được cho trong bảng. Tính khoảng biến thiên của mẫu số liệu ghép nhóm.",
    "question_en": "Students’ evening Internet-use times are shown in the grouped table. Find the range.",
    "solution_vi": "Khoảng biến thiên bằng cận trên của lớp cuối trừ cận dưới của lớp đầu. Kết quả: $15$ phút.",
    "solution_en": "The classes run from $[9.5;12.5)$ to $[21.5;24.5)$, so the range is $24.5-9.5=15$ minutes.",
    "correct_answer": "15",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-range/image113.png",
        "alt_vi": "Bảng số liệu ghép nhóm gốc.",
        "alt_en": "Original grouped-data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "015137fd3e82e6d7fdef0bef3f753cc760d5480e15015a35087428fbec43c2f8"
      }
    ],
    "math_skill": "Tính khoảng biến thiên của mẫu số liệu ghép nhóm",
    "english_skill": "Find the range from a grouped-data table",
    "variant_tag": "src-pnl12b8-c3-range-113"
  },
  {
    "id": "src-pnl12b8-c3-stat-411",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-02",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Kết quả khảo sát thời gian sử dụng liên tục của pin một số máy vi tính được mô tả bằng biểu đồ. Hãy xác định độ lệch chuẩn của thời gian sử dụng pin, làm tròn đến hàng phần trăm.",
    "question_en": "A histogram shows continuous battery-use time for several computers. Find the standard deviation, rounded to the nearest hundredth.",
    "solution_vi": "Từ biểu đồ lấy các giá trị đại diện $7.3,7.5,7.7,7.9$ với tần số tương ứng $2,4,7,5$. Ta có $\\bar x\\approx7.6667$, $s^2\\approx0.03667$, nên $s\\approx0.1915\\approx0.19$.",
    "solution_en": "Use midpoints $7.3,7.5,7.7,7.9$ with frequencies $2,4,7,5$. Then $\\bar x\\approx7.6667$, $s^2\\approx0.03667$, so $s\\approx0.1915\\approx0.19$.",
    "correct_answer": "0.19",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-variance/image411.png",
        "alt_vi": "Biểu đồ/bảng số liệu gốc.",
        "alt_en": "Original chart/data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "28043dad0482c7871c03703cd1e00a45e3e712f87fb33688fe932bc778d14dce"
      }
    ],
    "math_skill": "Tính phương sai hoặc độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "Compute variance or standard deviation from grouped data",
    "variant_tag": "src-pnl12b8-c3-stat-411"
  },
  {
    "id": "src-pnl12b8-c3-stat-433",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-02",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Kết quả khảo sát năng suất (tấn/ha) của một số thửa ruộng được minh hoạ ở biểu đồ. Hãy xác định độ lệch chuẩn, làm tròn đến hàng phần nghìn.",
    "question_en": "A histogram shows crop yields (tons/ha). Find the standard deviation, rounded to the nearest thousandth.",
    "solution_vi": "Các giá trị đại diện là $5.6,5.8,6.0,6.2,6.4,6.6$ với tần số $3,4,6,5,5,2$. Tính được $\\bar x=6.088$, $s^2=0.086656$, do đó $s\\approx0.294374\\approx0.294$.",
    "solution_en": "Using midpoints $5.6,5.8,6.0,6.2,6.4,6.6$ and frequencies $3,4,6,5,5,2$ gives $\\bar x=6.088$, $s^2=0.086656$, hence $s\\approx0.294$.",
    "correct_answer": "0.294",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-variance/image433.png",
        "alt_vi": "Biểu đồ/bảng số liệu gốc.",
        "alt_en": "Original chart/data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "9a41f3f171aef2de924e6be886930f4a507d8695529af70a0736f26bf04f623c"
      }
    ],
    "math_skill": "Tính phương sai hoặc độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "Compute variance or standard deviation from grouped data",
    "variant_tag": "src-pnl12b8-c3-stat-433"
  },
  {
    "id": "src-pnl12b8-c3-stat-438",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Một vận động viên luyện tập chạy 100 m có kết quả như bảng. Hãy xác định phương sai của mẫu số liệu ghép nhóm.",
    "question_en": "A 100-m runner records the grouped results shown in the table. Find the variance of the grouped data.",
    "solution_vi": "Dùng các giá trị đại diện $10.3,10.5,10.7,10.9$ với tần số $3,7,8,2$. Ta có $\\bar x=10.59$ và $s^2=\\frac{1}{20}\\sum n_i(x_i-\\bar x)^2=0.0299$.",
    "solution_en": "Using midpoints $10.3,10.5,10.7,10.9$ with frequencies $3,7,8,2$ gives $\\bar x=10.59$ and $s^2=0.0299$.",
    "correct_answer": "0.0299",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-variance/image438.png",
        "alt_vi": "Biểu đồ/bảng số liệu gốc.",
        "alt_en": "Original chart/data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "4aac24712a2ef4c005d0e4a6f17f4a09211067613b30790d4ce39555e2771d57"
      }
    ],
    "math_skill": "Tính phương sai hoặc độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "Compute variance or standard deviation from grouped data",
    "variant_tag": "src-pnl12b8-c3-stat-438"
  },
  {
    "id": "src-pnl12b8-c3-stat-443",
    "topic_id": "top-12-3-2",
    "type_id": "type-kntt-12-10-01",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Cân nặng của một số quả mít trong một khu vườn được thống kê như bảng. Tính phương sai của mẫu số liệu ghép nhóm, làm tròn đến hàng phần trăm.",
    "question_en": "Jackfruit weights in a garden are grouped in the table. Find the variance, rounded to the nearest hundredth.",
    "solution_vi": "Với các giá trị đại diện $5,7,9,11,13$ và tần số $6,12,19,9,4$, ta có $\\bar x=8.72$ và $s^2=4.8016\\approx4.80$.",
    "solution_en": "With representative values $5,7,9,11,13$ and frequencies $6,12,19,9,4$, $\\bar x=8.72$ and $s^2=4.8016\\approx4.80$.",
    "correct_answer": "4.8",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c3-variance/image443.png",
        "alt_vi": "Biểu đồ/bảng số liệu gốc.",
        "alt_en": "Original chart/data table.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "15c16cca32eb71974b8dbb37bfbc6b9fe8cc9ffec7805331ec71812c0297376a"
      }
    ],
    "math_skill": "Tính phương sai hoặc độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "english_skill": "Compute variance or standard deviation from grouped data",
    "variant_tag": "src-pnl12b8-c3-stat-443"
  },
  {
    "id": "src-pnl12b8-c4-area-q17",
    "topic_id": "top-12-4-3",
    "type_id": "type-kntt-12-13-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Diện tích hình phẳng phần gạch chéo trong hình được tính theo công thức nào sau đây?",
    "question_en": "Which integral gives the area of the shaded region in the figure?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\int_{-1}^{2}(x^3+2x^2-5x-6)\\,dx$",
        "content_en": "$\\int_{-1}^{2}(x^3+2x^2-5x-6)\\,dx$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$\\int_{-1}^{2}(x^3+2x^2-x-10)\\,dx$",
        "content_en": "$\\int_{-1}^{2}(x^3+2x^2-x-10)\\,dx$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\int_{-1}^{2}(x^3-2x^2-x+10)\\,dx$",
        "content_en": "$\\int_{-1}^{2}(x^3-2x^2-x+10)\\,dx$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$\\int_{-1}^{2}(-x^3-2x^2+5x+6)\\,dx$",
        "content_en": "$\\int_{-1}^{2}(-x^3-2x^2+5x+6)\\,dx$",
        "is_correct": true
      }
    ],
    "solution_vi": "Trên $[-1;2]$, đồ thị phía trên trừ đồ thị phía dưới cho biểu thức $-x^3-2x^2+5x+6$. Vì vậy $S=\\int_{-1}^{2}(-x^3-2x^2+5x+6)\\,dx$.",
    "solution_en": "On $[-1,2]$, upper curve minus lower curve is $-x^3-2x^2+5x+6$, so the area is the integral in option D.",
    "correct_answer": "D",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c4-area/image359.png",
        "alt_vi": "Hình gốc của bài toán tích phân.",
        "alt_en": "Original integral-problem figure.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "645d27364b3143e975cad9f96019144f3192225cab005ebcd155f8aec2d21388"
      }
    ],
    "math_skill": "Lập tích phân tính diện tích giữa hai đồ thị",
    "english_skill": "Interpret an integral from a figure",
    "variant_tag": "src-pnl12b8-c4-area-q17"
  },
  {
    "id": "src-pnl12b8-c4-area-q18",
    "topic_id": "top-12-4-3",
    "type_id": "type-kntt-12-13-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Diện tích hình phẳng gạch sọc trong hình được biểu diễn bởi tích phân nào?",
    "question_en": "Which integral represents the striped area in the figure?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\int_{1}^{3}(2x-2)\\,dx$",
        "content_en": "$\\int_{1}^{3}(2x-2)\\,dx$",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$\\int_{1}^{3}(2x+2)\\,dx$",
        "content_en": "$\\int_{1}^{3}(2x+2)\\,dx$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\int_{1}^{3}(2-2x)\\,dx$",
        "content_en": "$\\int_{1}^{3}(2-2x)\\,dx$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$\\int_{1}^{3}2x\\,dx$",
        "content_en": "$\\int_{1}^{3}2x\\,dx$",
        "is_correct": false
      }
    ],
    "solution_vi": "Hình phẳng được giới hạn bởi $y=2x$, $y=2$, $x=1$ và $x=3$. Trên đoạn này $2x\\ge2$, nên $S=\\int_1^3(2x-2)\\,dx$.",
    "solution_en": "The region is bounded by $y=2x$, $y=2$, $x=1$, and $x=3$. Since $2x\\ge2$ there, $S=\\int_1^3(2x-2)\\,dx$.",
    "correct_answer": "A",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c4-area/image370.png",
        "alt_vi": "Hình gốc của bài toán tích phân.",
        "alt_en": "Original integral-problem figure.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "43e67eac782132fc741f92c7487a9e9c20d4c0c8dc28316e5b6d2112fcf302de"
      }
    ],
    "math_skill": "Lập tích phân diện tích giữa hai đường",
    "english_skill": "Interpret an integral from a figure",
    "variant_tag": "src-pnl12b8-c4-area-q18"
  },
  {
    "id": "src-pnl12b8-c4-area-q19",
    "topic_id": "top-12-4-3",
    "type_id": "type-kntt-12-13-01",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Gọi $S$ là diện tích hình phẳng giới hạn bởi $y=f(x)$, trục hoành và hai đường thẳng $x=-3$, $x=2$ như hình. Đặt $a=\\int_{-3}^{1}f(x)\\,dx$, $b=\\int_{1}^{2}f(x)\\,dx$. Mệnh đề nào đúng?",
    "question_en": "Let $S$ be the area bounded by $y=f(x)$, the x-axis, $x=-3$, and $x=2$. Put $a=\\int_{-3}^{1}f(x)\\,dx$ and $b=\\int_{1}^{2}f(x)\\,dx$. Which statement is correct?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$S=-a-b$",
        "content_en": "$S=-a-b$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$S=a+b$",
        "content_en": "$S=a+b$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$S=a-b$",
        "content_en": "$S=a-b$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$S=b-a$",
        "content_en": "$S=b-a$",
        "is_correct": true
      }
    ],
    "solution_vi": "Trên $[-3;1]$ đồ thị nằm dưới trục hoành nên phần diện tích bằng $-a$; trên $[1;2]$ đồ thị nằm trên trục hoành nên phần diện tích bằng $b$. Do đó $S=b-a$.",
    "solution_en": "On $[-3,1]$ the graph is below the x-axis, giving area $-a$; on $[1,2]$ it is above, giving area $b$. Hence $S=b-a$.",
    "correct_answer": "D",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c4-area/image379.png",
        "alt_vi": "Hình gốc của bài toán tích phân.",
        "alt_en": "Original integral-problem figure.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "1042d909386aaa2437a391d597bfbc09ffb96f8d2995f741697fbdde48b95111"
      }
    ],
    "math_skill": "Đổi tích phân có dấu thành diện tích hình phẳng",
    "english_skill": "Interpret an integral from a figure",
    "variant_tag": "src-pnl12b8-c4-area-q19"
  },
  {
    "id": "src-pnl12b8-c4-area-q24",
    "topic_id": "top-12-4-3",
    "type_id": "type-kntt-12-13-02",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "HARD",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Diện tích của phần hình phẳng gạch chéo trong hình bằng bao nhiêu?",
    "question_en": "What is the area of the shaded region in the figure?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\frac{55}{12}$",
        "content_en": "$\\frac{55}{12}$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$\\frac{37}{12}$",
        "content_en": "$\\frac{37}{12}$",
        "is_correct": true
      },
      {
        "option_key": "C",
        "content_vi": "$\\frac94$",
        "content_en": "$\\frac94$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$\\frac{15}{4}$",
        "content_en": "$\\frac{15}{4}$",
        "is_correct": false
      }
    ],
    "solution_vi": "Hai đồ thị cắt nhau tại $x=-2,0,1$. Theo hình, phần gạch chéo cho tích phân diện tích tương ứng và tính được $S=\\frac{37}{12}$.",
    "solution_en": "The curves intersect at $x=-2,0,1$. Setting up the shaded-area integral gives $S=\\frac{37}{12}$.",
    "correct_answer": "B",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c4-area/image412.png",
        "alt_vi": "Hình gốc của bài toán tích phân.",
        "alt_en": "Original integral-problem figure.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "a1f49085e9b24feb490b7baea7c523dee9e7a1fc487f937ac6b653124a20f6b8"
      }
    ],
    "math_skill": "Tính diện tích hình phẳng giữa hai đồ thị",
    "english_skill": "Interpret an integral from a figure",
    "variant_tag": "src-pnl12b8-c4-area-q24"
  },
  {
    "id": "src-pnl12b8-c4-area-q40",
    "topic_id": "top-12-4-3",
    "type_id": "type-kntt-12-13-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "HARD",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Hình là mặt cắt dọc của một chiếc cầu bê tông (đơn vị mét). Biết chiều rộng của cầu bằng $9$ m. Thể tích bê tông ít nhất cần để đúc cầu là bao nhiêu?",
    "question_en": "The figure is a longitudinal cross-section of a concrete bridge (meters). The bridge is $9$ m wide. What minimum volume of concrete is required?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$760\\,m^3$",
        "content_en": "$760\\,m^3$",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "$780\\,m^3$",
        "content_en": "$780\\,m^3$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$960\\,m^3$",
        "content_en": "$960\\,m^3$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$840\\,m^3$",
        "content_en": "$840\\,m^3$",
        "is_correct": true
      }
    ],
    "solution_vi": "Phần rỗng dưới parabol $y=4-\\frac{x^2}{100}$ trên $[-20;20]$ có diện tích $\\frac{320}{3}$ m². Hình chữ nhật ngoài có diện tích $40\\cdot5=200$ m², nên phần bê tông có diện tích $200-\\frac{320}{3}=\\frac{280}{3}$ m². Nhân chiều rộng $9$ m được $840$ m³.",
    "solution_en": "The opening under $y=4-\\frac{x^2}{100}$ on $[-20,20]$ has area $\\frac{320}{3}$ m². The outer rectangle has area $200$ m², so the concrete cross-section is $\\frac{280}{3}$ m². Multiplying by width $9$ m gives $840$ m³.",
    "correct_answer": "D",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c4-area/image623.png",
        "alt_vi": "Hình gốc của bài toán tích phân.",
        "alt_en": "Original integral-problem figure.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "d786e822b9e5c4273b7bb75c79cda0413cc28a05bc1c60f85539dfbf36ee37f8"
      }
    ],
    "math_skill": "Ứng dụng tích phân trong bài toán thể tích thực tế",
    "english_skill": "Interpret an integral from a figure",
    "variant_tag": "src-pnl12b8-c4-area-q40"
  },
  {
    "id": "src-pnl12b8-c4-area-q44",
    "topic_id": "top-12-4-3",
    "type_id": "type-kntt-12-13-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "HARD",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Một biển quảng cáo hình vuông cạnh $4$ m có hai cung tròn bán kính $4$ m như hình. Chi phí sơn phần gạch chéo là 150.000 đồng/m², phần màu đen là 100.000 đồng/m² và phần còn lại là 250.000 đồng/m². Tổng chi phí gần nhất với giá trị nào?",
    "question_en": "A square billboard of side $4$ m contains two radius-$4$ m arcs as shown. Painting costs are 150,000 VND/m² for the hatched part, 100,000 VND/m² for the dark part, and 250,000 VND/m² for the rest. Which total cost is closest?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "3,017 triệu đồng",
        "content_en": "3.017 million VND",
        "is_correct": false
      },
      {
        "option_key": "B",
        "content_vi": "1,213 triệu đồng",
        "content_en": "1.213 million VND",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "2,06 triệu đồng",
        "content_en": "2.06 million VND",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "2,195 triệu đồng",
        "content_en": "2.195 million VND",
        "is_correct": true
      }
    ],
    "solution_vi": "Tính các diện tích bằng tích phân/cung tròn rồi nhân đơn giá từng vùng. Tổng chi phí bằng xấp xỉ $2{,}195$ triệu đồng.",
    "solution_en": "Compute the three region areas using circle geometry/integration and multiply by their unit costs. The total is approximately 2.195 million VND.",
    "correct_answer": "D",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c4-area/image729.png",
        "alt_vi": "Hình gốc của bài toán tích phân.",
        "alt_en": "Original integral-problem figure.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "ca546bb6f3d9be5a2a00e04650af77c409b5b6c31727b7cb51bfc35c61115260"
      }
    ],
    "math_skill": "Ứng dụng tích phân tính diện tích và chi phí thực tế",
    "english_skill": "Interpret an integral from a figure",
    "variant_tag": "src-pnl12b8-c4-area-q44"
  },
  {
    "id": "src-pnl12b8-c4-volume-tank",
    "topic_id": "top-12-4-3",
    "type_id": "type-kntt-12-13-04",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Một bình chứa nước có hình dạng như hình. Khi nước ở độ cao $x$ dm ($0\\le x\\le4$), mặt nước là hình vuông có cạnh $\\sqrt{2+\\frac{x^2}{4}}$ dm. Dung tích của bình bằng bao nhiêu?",
    "question_en": "A water tank has the shape shown. At height $x$ dm ($0\\le x\\le4$), the horizontal cross-section is a square of side $\\sqrt{2+\\frac{x^2}{4}}$ dm. What is the tank capacity?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\frac{40}{3}\\,dm^3$",
        "content_en": "$\\frac{40}{3}\\,dm^3$",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$\\frac{20}{3}\\,dm^3$",
        "content_en": "$\\frac{20}{3}\\,dm^3$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$40\\,dm^3$",
        "content_en": "$40\\,dm^3$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$\\frac{80}{3}\\,dm^3$",
        "content_en": "$\\frac{80}{3}\\,dm^3$",
        "is_correct": false
      }
    ],
    "solution_vi": "Diện tích mặt cắt ở độ cao $x$ là $A(x)=2+\\frac{x^2}{4}$. Do đó $V=\\int_0^4\\left(2+\\frac{x^2}{4}\\right)dx=\\frac{40}{3}$ dm³.",
    "solution_en": "The cross-sectional area is $A(x)=2+\\frac{x^2}{4}$. Thus $V=\\int_0^4(2+\\frac{x^2}{4})dx=\\frac{40}{3}$ dm³.",
    "correct_answer": "A",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c4-volume/image54.png",
        "alt_vi": "Hình gốc của bài toán tích phân.",
        "alt_en": "Original integral-problem figure.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "cd2ba854caaa99ff477cbb43894088950695954a79e68fd1f10890d3f9c9005a"
      }
    ],
    "math_skill": "Tính thể tích vật thể bằng tích phân mặt cắt",
    "english_skill": "Interpret an integral from a figure",
    "variant_tag": "src-pnl12b8-c4-volume-tank"
  },
  {
    "id": "src-pnl12b8-c4-volume-sphere",
    "topic_id": "top-12-4-3",
    "type_id": "type-kntt-12-13-03",
    "question_type": "MCQ",
    "format_type": "TN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "grading_safe": true,
    "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
    "created_at": "2026-08-29T02:00:00.000Z",
    "question_vi": "Dùng tích phân theo các mặt cắt vuông góc với trục $Ox$, thể tích khối cầu bán kính $R$ trong hình bằng công thức nào?",
    "question_en": "Using cross-sections perpendicular to the $x$-axis, which formula gives the volume of the sphere of radius $R$?",
    "options": [
      {
        "option_key": "A",
        "content_vi": "$\\frac{4}{3}\\pi R^3$",
        "content_en": "$\\frac{4}{3}\\pi R^3$",
        "is_correct": true
      },
      {
        "option_key": "B",
        "content_vi": "$\\pi R^3$",
        "content_en": "$\\pi R^3$",
        "is_correct": false
      },
      {
        "option_key": "C",
        "content_vi": "$\\frac{2}{3}\\pi R^3$",
        "content_en": "$\\frac{2}{3}\\pi R^3$",
        "is_correct": false
      },
      {
        "option_key": "D",
        "content_vi": "$4\\pi R^2$",
        "content_en": "$4\\pi R^2$",
        "is_correct": false
      }
    ],
    "solution_vi": "Mặt cắt tại hoành độ $x$ là hình tròn có diện tích $\\pi(R^2-x^2)$. Vì vậy $V=\\int_{-R}^{R}\\pi(R^2-x^2)dx=\\frac{4}{3}\\pi R^3$.",
    "solution_en": "At coordinate $x$, the cross-section is a disk of area $\\pi(R^2-x^2)$. Hence $V=\\int_{-R}^{R}\\pi(R^2-x^2)dx=\\frac{4}{3}\\pi R^3$.",
    "correct_answer": "A",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c4-volume/image58.png",
        "alt_vi": "Hình gốc của bài toán tích phân.",
        "alt_en": "Original integral-problem figure.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Phan Nhật Linh - Bộ 8 lớp 12 KNTT (2024-2025)",
        "source_sha256": "e49af093206aff7c723cc5d2550751585777856af0332e0e94c366de1715f961"
      }
    ],
    "math_skill": "Tính thể tích khối tròn xoay bằng tích phân",
    "english_skill": "Interpret an integral from a figure",
    "variant_tag": "src-pnl12b8-c4-volume-sphere"
  },
  {
    "id": "src-pnl12b8-c2-rubik-centroid",
    "topic_id": "top-12-2-1",
    "type_id": "type-kntt-12-06-02",
    "question_type": "NUMERIC",
    "format_type": "TLN",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Một khối Rubik đồng chất có dạng tứ diện đều như hình. Biết chiều cao của khối Rubik là $8$ cm. Tính khoảng cách từ trọng tâm $I$ của khối đến một mặt của tứ diện (đơn vị cm).",
    "question_en": "A homogeneous Rubik puzzle has the shape of a regular tetrahedron as shown. Its height is $8$ cm. Find the distance from its centroid $I$ to a face of the tetrahedron (in cm).",
    "options": [],
    "solution_vi": "Gọi $G$ là trọng tâm của mặt đối diện đỉnh $A$. Với tứ diện đều, $AG\\perp(BCD)$ và $AG=8$. Trọng tâm tứ diện $I$ chia trung tuyến không gian theo $AI:IG=3:1$, nên $IG=\\dfrac14AG=2$ cm.",
    "solution_en": "Let $G$ be the centroid of the face opposite $A$. For a regular tetrahedron, $AG\\perp(BCD)$ and $AG=8$. The tetrahedron centroid divides this segment in the ratio $AI:IG=3:1$, hence $IG=\\dfrac14AG=2$ cm.",
    "correct_answer": "2",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c2-vector/image278.png",
        "alt_vi": "Hình tứ diện đều với trọng tâm I và trọng tâm mặt G.",
        "alt_en": "Regular tetrahedron with centroid I and face centroid G.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Bộ 8 lớp 12 KNTT – nguồn người dùng cung cấp",
        "source_sha256": "1a939039fe3e6e021a579a78719b1afed104f12077dc271abff43fdfd15c3bbf"
      }
    ],
    "math_skill": "Quan hệ hình học và trọng tâm trong tứ diện bằng vectơ",
    "english_skill": "Interpret a 3D geometry figure",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "variant_tag": "src-pnl12b8-c2-rubik-centroid",
    "grading_safe": true,
    "source_name": "Bộ 8 lớp 12 KNTT – nguồn người dùng cung cấp",
    "created_at": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "src-pnl12b8-c6-totalprob-tree-ds",
    "topic_id": "top-12-6-2",
    "type_id": "type-kntt-12-19-03",
    "question_type": "TRUE_FALSE",
    "format_type": "DS",
    "difficulty": "MEDIUM",
    "language_level": 2,
    "question_vi": "Cho sơ đồ hình cây như hình bên. Xét tính đúng/sai của các khẳng định sau.",
    "question_en": "Consider the probability tree shown. Determine whether each statement is true or false.",
    "options": [
      {
        "option_key": "a",
        "content_vi": "$P(B)=P(A)P(B|A)+P(\\overline A)P(B|\\overline A)$.",
        "content_en": "$P(B)=P(A)P(B|A)+P(\\overline A)P(B|\\overline A)$.",
        "is_correct": true
      },
      {
        "option_key": "b",
        "content_vi": "$P(B|A)=0{,}6$.",
        "content_en": "$P(B|A)=0.6$.",
        "is_correct": false
      },
      {
        "option_key": "c",
        "content_vi": "$P(B)=0{,}62$.",
        "content_en": "$P(B)=0.62$.",
        "is_correct": true
      },
      {
        "option_key": "d",
        "content_vi": "$P(\\overline B)=0{,}4$.",
        "content_en": "$P(\\overline B)=0.4$.",
        "is_correct": false
      }
    ],
    "solution_vi": "Từ cây: $P(A)=0{,}2$, $P(\\overline A)=0{,}8$, $P(B|A)=0{,}7$, $P(B|\\overline A)=0{,}6$. Do đó $P(B)=0{,}2\\cdot0{,}7+0{,}8\\cdot0{,}6=0{,}62$ và $P(\\overline B)=0{,}38$. Kết quả: a đúng, b sai, c đúng, d sai.",
    "solution_en": "From the tree, $P(A)=0.2$, $P(\\overline A)=0.8$, $P(B|A)=0.7$, and $P(B|\\overline A)=0.6$. Thus $P(B)=0.2(0.7)+0.8(0.6)=0.62$ and $P(\\overline B)=0.38$. Hence: a true, b false, c true, d false.",
    "correct_answer": "Đ,S,Đ,S",
    "assets": [
      {
        "kind": "image",
        "src": "/question-assets/source/pnl-12-b8-c6-probability/image292.png",
        "alt_vi": "Sơ đồ cây xác suất với hai nhánh A và A-bar.",
        "alt_en": "Probability tree with branches A and not A.",
        "title_vi": "",
        "title_en": "",
        "source_name": "Bộ 8 lớp 12 KNTT – nguồn người dùng cung cấp",
        "source_sha256": "5137ee98f928eceb38f0e2fb7dd09c84fe1dfed23a6ddcc6175b5878896eb687"
      }
    ],
    "math_skill": "Đọc sơ đồ cây và áp dụng công thức xác suất toàn phần",
    "english_skill": "Read a probability tree",
    "status": "PUBLISHED",
    "created_by": "source-pnl-gv-original-media",
    "variant_tag": "src-pnl12b8-c6-totalprob-tree-ds",
    "grading_safe": true,
    "source_name": "Bộ 8 lớp 12 KNTT – nguồn người dùng cung cấp",
    "created_at": "2026-08-29T00:00:00.000Z"
  },
  {
  "id": "src-pnl10-final-venn",
  "topic_id": "top-10-1-2",
  "type_id": "type-kntt-10-02-02",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Phần gạch chéo trong biểu đồ Venn biểu diễn tập hợp nào?",
  "question_en": "Which set is represented by the shaded region in the Venn diagram?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$ (A\\cap B)\\setminus C $",
      "content_en": "$ (A\\cap B)\\setminus C $",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$A\\cap B\\cap C$",
      "content_en": "$A\\cap B\\cap C$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$A\\cup B$",
      "content_en": "$A\\cup B$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$(A\\cup B)\\setminus C$",
      "content_en": "$(A\\cup B)\\setminus C$",
      "is_correct": false
    }
  ],
  "solution_vi": "Vùng gạch chéo nằm đồng thời trong $A$ và $B$ nhưng nằm ngoài $C$, nên là $(A\\cap B)\\setminus C$.",
  "solution_en": "The shaded region is inside both $A$ and $B$ but outside $C$, so it is $(A\\cap B)\\setminus C$.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-10-final/venn-abc.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "128807930e54207ec36a8c8c9cbfa9da8ab8694868c70eb2eda29971039c1274"
    }
  ],
  "math_skill": "Đọc biểu đồ Venn và phép toán tập hợp",
  "english_skill": "Interpret Venn diagrams",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl10-final-venn",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl10-final-ineq-region",
  "topic_id": "top-10-2-1",
  "type_id": "type-kntt-10-03-02",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Đường biên nét đứt đi qua $(0;3)$ và $(2;0)$. Miền gạch chéo trong hình là miền nghiệm của bất phương trình nào?",
  "question_en": "The dashed boundary passes through $(0,3)$ and $(2,0)$. Which inequality represents the shaded half-plane?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$3x+2y>6$",
      "content_en": "$3x+2y>6$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$3x+2y<6$",
      "content_en": "$3x+2y<6$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$2x+3y>6$",
      "content_en": "$2x+3y>6$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$3x+2y\\le6$",
      "content_en": "$3x+2y\\le6$",
      "is_correct": false
    }
  ],
  "solution_vi": "Đường biên có phương trình $3x+2y=6$. Điểm $O(0;0)$ không thuộc miền gạch chéo và $0<6$, nên miền gạch chéo là $3x+2y>6$.",
  "solution_en": "The boundary is $3x+2y=6$. Since the origin is unshaded and gives $0<6$, the shaded side satisfies $3x+2y>6$.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-10-final/linear-inequality-region.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "baab36692be6b8d17b1469c972762893fcafc55ef0758c40d4b6c211baa1d13f"
    }
  ],
  "math_skill": "Đọc miền nghiệm bất phương trình hai ẩn",
  "english_skill": "Read a half-plane solution set",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl10-final-ineq-region",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl10-final-system-region",
  "topic_id": "top-10-2-2",
  "type_id": "type-kntt-10-04-01",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Trong hình biểu diễn một hệ bất phương trình bậc nhất hai ẩn, phần nào là miền nghiệm chung của hệ?",
  "question_en": "In the diagram of a system of linear inequalities, which part represents the common solution region?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "Phần không gạch chéo",
      "content_en": "The unshaded region",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "Toàn bộ phần gạch chéo",
      "content_en": "All shaded regions",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "Chỉ trục $Oy$",
      "content_en": "Only the $y$-axis",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "Chỉ các đường biên nét đứt",
      "content_en": "Only the dashed boundary lines",
      "is_correct": false
    }
  ],
  "solution_vi": "Mỗi miền gạch chéo biểu diễn phần bị loại bởi một bất phương trình; giao các điều kiện còn lại là vùng không gạch chéo.",
  "solution_en": "Each shaded part is excluded by one inequality; the intersection that remains is the unshaded region.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-10-final/system-region.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "1adcc0be5fa8f4897881c8c6ba824d0a84173a1e181af7bac021d18c766e9315"
    }
  ],
  "math_skill": "Đọc miền nghiệm của hệ bất phương trình",
  "english_skill": "Interpret a system solution region",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl10-final-system-region",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl10-final-function-table",
  "topic_id": "top-10-6-1",
  "type_id": "type-kntt-10-15-02",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Dựa vào bảng biến thiên trong hình, giá trị lớn nhất của hàm số là bao nhiêu?",
  "question_en": "From the variation table, what is the maximum value of the function?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$1$",
      "content_en": "$1$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$0$",
      "content_en": "$0$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$+\\infty$",
      "content_en": "$+\\infty$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$-1$",
      "content_en": "$-1$",
      "is_correct": false
    }
  ],
  "solution_vi": "Hàm số tăng đến giá trị $1$ tại $x=0$ rồi giảm, nên giá trị lớn nhất là $1$.",
  "solution_en": "The function increases to $1$ at $x=0$ and then decreases, so its maximum value is $1$.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-10-final/function-variation-table.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "3faa0ce37c249381b6dffedb1388345aeddd8c511acbd84446f8d91d28dc5a8b"
    }
  ],
  "math_skill": "Đọc bảng biến thiên của hàm số",
  "english_skill": "Read a variation table",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl10-final-function-table",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl10-final-function-graph-extrema-count",
  "topic_id": "top-10-6-1",
  "type_id": "type-kntt-10-15-02",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Quan sát đồ thị trong hình. Có bao nhiêu điểm cực trị được thể hiện trên đồ thị?",
  "question_en": "Inspect the graph. How many local extrema are shown?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$3$",
      "content_en": "$3$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$1$",
      "content_en": "$1$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$2$",
      "content_en": "$2$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$4$",
      "content_en": "$4$",
      "is_correct": false
    }
  ],
  "solution_vi": "Đồ thị có hai điểm cực đại tại $x=-1,1$ và một điểm cực tiểu tại $x=0$, tổng cộng $3$ điểm cực trị.",
  "solution_en": "There are two local maxima at $x=-1,1$ and one local minimum at $x=0$, for a total of $3$ extrema.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-10-final/function-graph-symmetric.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "890a159c02df723dbf1e966f7a49f59776b572159c0195c5f4808dae9a02667c"
    }
  ],
  "math_skill": "Đọc cực trị từ đồ thị",
  "english_skill": "Read extrema from a graph",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl10-final-function-graph-extrema-count",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl10-final-function-cubic-min",
  "topic_id": "top-10-6-1",
  "type_id": "type-kntt-10-15-02",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Từ đồ thị trong hình, điểm cực tiểu của đường cong có tọa độ nào?",
  "question_en": "From the graph, what are the coordinates of the local minimum point?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$(2;-3)$",
      "content_en": "$(2,-3)$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$(0;1)$",
      "content_en": "$(0,1)$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$(2;1)$",
      "content_en": "$(2,1)$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$(0;-3)$",
      "content_en": "$(0,-3)$",
      "is_correct": false
    }
  ],
  "solution_vi": "Các đường gióng cho thấy cực tiểu xảy ra tại $x=2$ với $y=-3$.",
  "solution_en": "The guide lines show the local minimum at $x=2$ with $y=-3$.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-10-final/function-cubic-extrema.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "39fe9681fafe515bc88d1ef3724afb3de2fb80fc6b9c6c8dcb9c8c4168a81580"
    }
  ],
  "math_skill": "Đọc tọa độ cực trị trên đồ thị",
  "english_skill": "Read extrema coordinates",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl10-final-function-cubic-min",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl10-final-parabola-opening",
  "topic_id": "top-10-6-2",
  "type_id": "type-kntt-10-16-02",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Đồ thị parabol trong hình mở lên. Với hàm số $y=ax^2+bx+c$, điều nào chắc chắn đúng?",
  "question_en": "The parabola opens upward. For $y=ax^2+bx+c$, which statement must be true?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$a>0$",
      "content_en": "$a>0$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$a<0$",
      "content_en": "$a<0$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$a=0$",
      "content_en": "$a=0$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$b=0$",
      "content_en": "$b=0$",
      "is_correct": false
    }
  ],
  "solution_vi": "Parabol mở lên khi và chỉ khi hệ số bậc hai $a>0$.",
  "solution_en": "A parabola opens upward if and only if the quadratic coefficient satisfies $a>0$.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-10-final/quadratic-parabola.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "30766f26b9b33a7402252fbd2e8d1bdc22f283447734b5827232a6b70d0e4dd0"
    }
  ],
  "math_skill": "Đọc chiều mở của parabol",
  "english_skill": "Read the opening direction of a parabola",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl10-final-parabola-opening",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl10-final-quadratic-variation",
  "topic_id": "top-10-6-2",
  "type_id": "type-kntt-10-16-01",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Dựa vào bảng biến thiên trong hình, trên khoảng nào hàm bậc hai đang đồng biến?",
  "question_en": "From the variation table, on which interval is the quadratic function increasing?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$\\left(0;-\\dfrac{b}{2a}\\right)$",
      "content_en": "$\\left(0,-\\dfrac{b}{2a}\\right)$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$\\left(-\\dfrac{b}{2a};+\\infty\\right)$",
      "content_en": "$\\left(-\\dfrac{b}{2a},+\\infty\\right)$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$(0;+\\infty)$",
      "content_en": "$(0,+\\infty)$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$(-\\infty;0)$",
      "content_en": "$(-\\infty,0)$",
      "is_correct": false
    }
  ],
  "solution_vi": "Mũi tên đi lên từ $x=0$ đến $x=-\\dfrac{b}{2a}$, sau đó đi xuống, nên hàm đồng biến trên khoảng thứ nhất.",
  "solution_en": "The arrow rises from $x=0$ to $x=-\\dfrac{b}{2a}$ and then falls, so the function is increasing on the first interval.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-10-final/quadratic-variation-table.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "e3dd8b2a8660068fb4a43f60597898053eb0e051c6ae9766131ae0cf3ec83703"
    }
  ],
  "math_skill": "Đọc chiều biến thiên của hàm bậc hai",
  "english_skill": "Read quadratic monotonicity",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl10-final-quadratic-variation",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl10-final-linear-model",
  "topic_id": "top-10-6-1",
  "type_id": "type-kntt-10-15-04",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Đường thẳng $\\Delta$ đi qua hai điểm $(0;1{,}5)$ và $(7;5)$. Hàm số bậc nhất có đồ thị là $\\Delta$ là",
  "question_en": "The line $\\Delta$ passes through $(0,1.5)$ and $(7,5)$. Which linear function has this graph?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$y=0{,}5x+1{,}5$",
      "content_en": "$y=0.5x+1.5$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$y=2x+1{,}5$",
      "content_en": "$y=2x+1.5$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$y=0{,}5x+5$",
      "content_en": "$y=0.5x+5$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$y=x+1{,}5$",
      "content_en": "$y=x+1.5$",
      "is_correct": false
    }
  ],
  "solution_vi": "Hệ số góc là $a=\\dfrac{5-1{,}5}{7}=0{,}5$ và tung độ gốc là $1{,}5$, nên $y=0{,}5x+1{,}5$.",
  "solution_en": "The slope is $a=(5-1.5)/7=0.5$ and the intercept is $1.5$, hence $y=0.5x+1.5$.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-10-final/linear-model-graph.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "275844c272128d944b3481995213e02e7f35b8c02c7c728d80d07d9cd6bf6c27"
    }
  ],
  "math_skill": "Xác định mô hình hàm bậc nhất từ đồ thị",
  "english_skill": "Determine a linear model from a graph",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl10-final-linear-model",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 10 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl11-final-sine",
  "topic_id": "top-11-1-3",
  "type_id": "type-kntt-11-03-02",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Đồ thị trong hình đi qua $O$, đạt cực đại tại $x=\\dfrac{\\pi}{2}$ và cực tiểu tại $x=-\\dfrac{\\pi}{2}$. Đó là đồ thị của hàm số nào?",
  "question_en": "The graph passes through the origin, has a maximum at $x=\\pi/2$ and a minimum at $x=-\\pi/2$. Which function is it?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$y=\\sin x$",
      "content_en": "$y=\\sin x$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$y=\\cos x$",
      "content_en": "$y=\\cos x$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$y=\\tan x$",
      "content_en": "$y=\\tan x$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$y=\\cot x$",
      "content_en": "$y=\\cot x$",
      "is_correct": false
    }
  ],
  "solution_vi": "Các điểm đặc trưng $\\sin0=0$, $\\sin(\\pi/2)=1$, $\\sin(-\\pi/2)=-1$ khớp với hình.",
  "solution_en": "The key values $\\sin0=0$, $\\sin(\\pi/2)=1$, and $\\sin(-\\pi/2)=-1$ match the graph.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-11-final/sine-graph.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "590b8123c4df299292d3d01d9789a524ed88994aa19df1d0d2aaae2b7693c0de"
    }
  ],
  "math_skill": "Nhận dạng đồ thị hàm sin",
  "english_skill": "Recognize the sine graph",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl11-final-sine",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl11-final-cos-value",
  "topic_id": "top-11-1-3",
  "type_id": "type-kntt-11-03-02",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Cho hàm số có đồ thị như hình. Giá trị của hàm số tại $x=0$ bằng bao nhiêu?",
  "question_en": "For the function shown in the graph, what is its value at $x=0$?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$1$",
      "content_en": "$1$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$0$",
      "content_en": "$0$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$-1$",
      "content_en": "$-1$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$\\dfrac12$",
      "content_en": "$\\dfrac12$",
      "is_correct": false
    }
  ],
  "solution_vi": "Tại $x=0$, đồ thị đạt đỉnh trên đường $y=1$, nên $f(0)=1$.",
  "solution_en": "At $x=0$ the graph reaches the level $y=1$, so $f(0)=1$.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-11-final/cosine-graph.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "69f6078409e010edf821f063d7e440e621e5543f18e3b94a25fc2713c64b8660"
    }
  ],
  "math_skill": "Đọc giá trị hàm lượng giác từ đồ thị",
  "english_skill": "Read a trigonometric value from a graph",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl11-final-cos-value",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl11-final-tan-period",
  "topic_id": "top-11-1-3",
  "type_id": "type-kntt-11-03-02",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Đồ thị trong hình có các tiệm cận đứng cách nhau $\\pi$ và lặp lại sau mỗi $\\pi$. Chu kì cơ bản của hàm số là",
  "question_en": "The vertical asymptotes are spaced by $\\pi$ and the graph repeats every $\\pi$. What is the fundamental period?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$\\pi$",
      "content_en": "$\\pi$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$2\\pi$",
      "content_en": "$2\\pi$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$\\dfrac{\\pi}{2}$",
      "content_en": "$\\dfrac{\\pi}{2}$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$4\\pi$",
      "content_en": "$4\\pi$",
      "is_correct": false
    }
  ],
  "solution_vi": "Đây là dạng đồ thị của hàm tang; mỗi nhánh lặp lại sau một khoảng dài $\\pi$.",
  "solution_en": "This is the tangent-type graph; the branch pattern repeats after an interval of length $\\pi$.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-11-final/tangent-graph.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "2a4f76c43161b0a8481c577a97137d30bdfe3b79be6a3c31ed101b39c676a003"
    }
  ],
  "math_skill": "Đọc chu kì từ đồ thị hàm tang",
  "english_skill": "Read tangent period from a graph",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl11-final-tan-period",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl11-final-cot-monotone",
  "topic_id": "top-11-1-3",
  "type_id": "type-kntt-11-03-02",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Quan sát một nhánh của đồ thị trong hình. Trên khoảng $(0;\\pi)$, hàm số có tính đơn điệu nào?",
  "question_en": "Inspect one branch of the graph. On $(0,\\pi)$, how does the function vary?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "Nghịch biến",
      "content_en": "Decreasing",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "Đồng biến",
      "content_en": "Increasing",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "Không đổi",
      "content_en": "Constant",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "Vừa đồng biến vừa nghịch biến",
      "content_en": "Both increasing and decreasing",
      "is_correct": false
    }
  ],
  "solution_vi": "Trên $(0;\\pi)$, nhánh đồ thị đi xuống liên tục từ $+\\infty$ đến $-\\infty$, nên hàm nghịch biến.",
  "solution_en": "On $(0,\\pi)$ the branch falls continuously from $+\\infty$ to $-\\infty$, so the function is decreasing.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-11-final/cotangent-graph.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "9e5aa8aad49bc4a00aa0def5f67c87856023b25cc25e3b6fc9ddb5a4380fd7de"
    }
  ],
  "math_skill": "Đọc tính đơn điệu của hàm cot từ đồ thị",
  "english_skill": "Read cotangent monotonicity",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl11-final-cot-monotone",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl11-final-limit-infinity",
  "topic_id": "top-11-5-2",
  "type_id": "type-kntt-11-16-04",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Dựa vào đồ thị, khi $x\\to+\\infty$ thì $f(x)$ tiến tới giá trị nào?",
  "question_en": "From the graph, what value does $f(x)$ approach as $x\\to+\\infty$?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$2$",
      "content_en": "$2$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$0$",
      "content_en": "$0$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$1$",
      "content_en": "$1$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$+\\infty$",
      "content_en": "$+\\infty$",
      "is_correct": false
    }
  ],
  "solution_vi": "Nhánh bên phải tiến sát đường ngang nét đứt $y=2$, nên $\\lim_{x\\to+\\infty}f(x)=2$.",
  "solution_en": "The right-hand branch approaches the dashed horizontal line $y=2$, so $\\lim_{x\\to+\\infty}f(x)=2$.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-11-final/limit-graph.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "ea2828861e8c9c08161a2403ff625ea0e1faa556e035515f4d5c614ff5a5aa4f"
    }
  ],
  "math_skill": "Đọc giới hạn ở vô cực từ đồ thị",
  "english_skill": "Read an infinite limit from a graph",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl11-final-limit-infinity",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl11-final-continuity-jump",
  "topic_id": "top-11-5-3",
  "type_id": "type-kntt-11-17-01",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Đồ thị có một bước nhảy tại $x=1$: nhánh bên trái tiến tới $1$ còn nhánh bên phải tiến tới một giá trị khác. Kết luận nào đúng?",
  "question_en": "The graph has a jump at $x=1$: the left branch approaches $1$ while the right branch approaches a different value. Which conclusion is correct?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "Hàm số không liên tục tại $x=1$",
      "content_en": "The function is not continuous at $x=1$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "Hàm số liên tục tại $x=1$",
      "content_en": "The function is continuous at $x=1$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$\\lim_{x\\to1}f(x)=1$",
      "content_en": "$\\lim_{x\\to1}f(x)=1$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "Hai giới hạn một phía tại $x=1$ bằng nhau",
      "content_en": "The one-sided limits at $x=1$ are equal",
      "is_correct": false
    }
  ],
  "solution_vi": "Hai giới hạn một phía tại $x=1$ khác nhau nên giới hạn hai phía không tồn tại; vì vậy hàm không liên tục tại $x=1$.",
  "solution_en": "The one-sided limits at $x=1$ are different, so the two-sided limit does not exist and the function is not continuous there.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-11-final/continuity-jump-graph.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "231cb89dd36a6383a42235f2adf9fc91001d4907cbd208634e54b425ae791511"
    }
  ],
  "math_skill": "Xét liên tục từ đồ thị",
  "english_skill": "Determine continuity from a graph",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl11-final-continuity-jump",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl11-final-pyramid-base",
  "topic_id": "top-11-4-1",
  "type_id": "type-kntt-11-10-01",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Trong hình chóp $S.ABC$, mặt phẳng đáy là mặt phẳng nào?",
  "question_en": "In pyramid $S.ABC$, which plane is the base plane?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$(ABC)$",
      "content_en": "$(ABC)$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$(SAB)$",
      "content_en": "$(SAB)$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$(SAC)$",
      "content_en": "$(SAC)$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$(SBC)$",
      "content_en": "$(SBC)$",
      "is_correct": false
    }
  ],
  "solution_vi": "Ba điểm $A,B,C$ tạo thành đa giác đáy, nên mặt phẳng đáy là $(ABC)$.",
  "solution_en": "The points $A,B,C$ form the base polygon, so the base plane is $(ABC)$.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-11-final/pyramid-sabc.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "4b3b7375e68531ea92a68b6e271b9d2b9ab54f869204fc889ea8b36453b73936"
    }
  ],
  "math_skill": "Nhận biết đường thẳng và mặt phẳng trong hình chóp",
  "english_skill": "Identify lines and planes in a pyramid",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl11-final-pyramid-base",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl11-final-pyramid-hidden-edge",
  "topic_id": "top-11-4-1",
  "type_id": "type-kntt-11-10-01",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Trong hình chóp $S.ABCD$, cạnh nào của đáy được vẽ bằng nét đứt?",
  "question_en": "In pyramid $S.ABCD$, which base edge is drawn with a dashed line?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$AD$",
      "content_en": "$AD$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$AB$",
      "content_en": "$AB$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$BC$",
      "content_en": "$BC$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$CD$",
      "content_en": "$CD$",
      "is_correct": false
    }
  ],
  "solution_vi": "Quan sát hình, đoạn nối $A$ với $D$ là cạnh khuất và được biểu diễn bằng nét đứt.",
  "solution_en": "In the figure, the hidden base edge joining $A$ and $D$ is drawn dashed.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-11-final/pyramid-sabcd.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "dbe4e356bda54369e2a1da58f3ba56dd47b28180cea579cf9e2c37b29030fe84"
    }
  ],
  "math_skill": "Đọc hình biểu diễn không gian",
  "english_skill": "Read a spatial-geometry diagram",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl11-final-pyramid-hidden-edge",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
},
  {
  "id": "src-pnl11-final-prism-point",
  "topic_id": "top-11-4-1",
  "type_id": "type-kntt-11-10-01",
  "question_type": "MCQ",
  "format_type": "TN",
  "difficulty": "MEDIUM",
  "language_level": 2,
  "question_vi": "Trong hình lăng trụ $ABCD.A\\prime B\\prime C\\prime D\\prime$, điểm $N$ nằm trên cạnh nào?",
  "question_en": "In prism $ABCD.A\\prime B\\prime C\\prime D\\prime$, on which edge does point $N$ lie?",
  "options": [
    {
      "option_key": "A",
      "content_vi": "$B\\prime C\\prime$",
      "content_en": "$B\\prime C\\prime$",
      "is_correct": true
    },
    {
      "option_key": "B",
      "content_vi": "$AB$",
      "content_en": "$AB$",
      "is_correct": false
    },
    {
      "option_key": "C",
      "content_vi": "$CC\\prime$",
      "content_en": "$CC\\prime$",
      "is_correct": false
    },
    {
      "option_key": "D",
      "content_vi": "$AD$",
      "content_en": "$AD$",
      "is_correct": false
    }
  ],
  "solution_vi": "Từ hình vẽ, $N$ nằm trực tiếp trên cạnh nối $B\\prime$ và $C\\prime$.",
  "solution_en": "From the diagram, $N$ lies directly on the edge joining $B\\prime$ and $C\\prime$.",
  "correct_answer": "A",
  "assets": [
    {
      "kind": "image",
      "src": "/question-assets/source/pnl-11-final/prism-points.png",
      "alt_vi": "Hình/bảng gốc đi kèm câu hỏi.",
      "alt_en": "Original figure/table attached to the question.",
      "title_vi": "",
      "title_en": "",
      "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
      "source_sha256": "d42153bec6075626b2f440b6e8c0ef709853454a21f8e27049abe6cb924a7905"
    }
  ],
  "math_skill": "Xác định quan hệ thuộc trong lăng trụ",
  "english_skill": "Identify incidence in a prism",
  "status": "PUBLISHED",
  "created_by": "source-pnl-gv-original-media",
  "variant_tag": "src-pnl11-final-prism-point",
  "grading_safe": true,
  "source_name": "Phan Nhật Linh - Toán 11 KNTT (nguồn người dùng cung cấp)",
  "created_at": "2026-08-29T07:00:00.000Z"
}
];
