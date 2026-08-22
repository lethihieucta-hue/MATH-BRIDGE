import { Question, WorkedExample } from '../types';

// =========================================================================
// BỘ BÀI TẬP MẪU CÓ LỜI GIẢI CHI TIẾT THEO TỪNG BÀI HỌC (WORKED EXAMPLES)
// =========================================================================
export const DEFAULT_WORKED_EXAMPLES: Record<string, WorkedExample[]> = {
  // -------------------------------------------------------------------------
  // LỚP 12: CHƯƠNG I - ỨNG DỤNG ĐẠO HÀM
  // -------------------------------------------------------------------------
  'les-12-1-1': [
    {
      id: 'we-12-1-1',
      type_id: 'type-12-1-1',
      type_code: 'Dạng 1. Xét tính đơn điệu của hàm số',
      title_vi: 'Ví dụ 1: Xét tính đơn điệu của hàm số bậc ba',
      title_en: 'Example 1: Monotonicity of a Cubic Polynomial',
      problem_vi: 'Cho hàm số $y = x^3 - 3x^2 - 9x + 5$. Tìm các khoảng đồng biến và nghịch biến của hàm số.',
      problem_en: 'Given $y = x^3 - 3x^2 - 9x + 5$. Find the intervals of increase and decrease.',
      solution_vi: '• TXĐ: $D = \\mathbb{R}$. Đạo hàm: $y\' = 3x^2 - 6x - 9 = 3(x + 1)(x - 3)$.\n• $y\' = 0 \\iff x = -1$ hoặc $x = 3$.\n• Hàm số đồng biến trên $(-\\infty; -1)$ và $(3; +\\infty)$; nghịch biến trên $(-1; 3)$.',
      solution_en: '• Domain: $D = \\mathbb{R}$. Derivative: $y\' = 3(x + 1)(x - 3) = 0 \\iff x = -1, x = 3$.\n• Strictly increasing on $(-\\infty, -1)$ and $(3, +\\infty)$; strictly decreasing on $(-1, 3)$.',
    },
    {
      id: 'we-12-1-2',
      type_id: 'type-12-1-2',
      type_code: 'Dạng 2. Tìm cực trị của hàm số',
      title_vi: 'Ví dụ 2: Tìm toạ độ điểm cực trị',
      title_en: 'Example 2: Local Extrema of Rational Function',
      problem_vi: 'Tìm toạ độ các điểm cực trị của đồ thị hàm số $y = \\frac{x^2 + 2x + 2}{x + 1}$.',
      problem_en: 'Find the coordinates of the local extrema of $y = \\frac{x^2 + 2x + 2}{x + 1}$.',
      solution_vi: '• $y = x + 1 + \\frac{1}{x + 1} \\implies y\' = 1 - \\frac{1}{(x + 1)^2} = \\frac{x(x + 2)}{(x + 1)^2} = 0 \\iff x = 0, x = -2$.\n• Điểm cực đại $M(-2; -2)$ và điểm cực tiểu $N(0; 2)$.',
      solution_en: '• $y\' = \\frac{x(x+2)}{(x+1)^2} = 0 \\iff x = 0, x = -2$. Local max $M(-2, -2)$, local min $N(0, 2)$.',
    },
  ],

  'les-12-1-2': [
    {
      id: 'we-12-2-1',
      type_id: 'type-12-2-1',
      type_code: 'Dạng 1. Tìm GTLN - GTNN trên đoạn',
      title_vi: 'Ví dụ 1: Tìm GTLN và GTNN của hàm số trên đoạn',
      title_en: 'Example 1: Absolute Extrema on a Closed Interval',
      problem_vi: 'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$.',
      problem_en: 'Find the absolute maximum and minimum of $f(x) = x^4 - 2x^2 + 3$ on $[0, 2]$.',
      solution_vi: '• $f\'(x) = 4x(x^2 - 1) = 0 \\implies x = 1 \\in (0; 2)$.\n• $f(0) = 3, f(1) = 2, f(2) = 11$.\n• Vậy $\\max_{[0; 2]} f(x) = 11$ tại $x = 2$, và $\\min_{[0; 2]} f(x) = 2$ tại $x = 1$.',
      solution_en: '• $f(0) = 3, f(1) = 2, f(2) = 11 \\implies \\max = 11$ at $x = 2$, $\\min = 2$ at $x = 1$.',
    },
    {
      id: 'we-12-2-3',
      type_id: 'type-12-2-3',
      type_code: 'Dạng 3 (Ứng dụng thực tế). Tối ưu hoá thể tích hộp',
      title_vi: 'Ví dụ 2 (Ứng dụng thực tế): Cắt góc tôn làm hộp có thể tích lớn nhất',
      title_en: 'Example 2 (Real-world): Box Volume Optimization',
      problem_vi: 'Người ta muốn làm một chiếc hộp hình hộp chữ nhật không nắp từ tấm tôn vuông cạnh $60\\text{ cm}$ bằng cách cắt 4 góc các hình vuông cạnh $x\\text{ cm}$ rồi gập mép. Tìm $x$ để thể tích khối hộp lớn nhất.',
      problem_en: 'A square metal sheet of side $60\\text{ cm}$ has 4 congruent squares of side $x$ cut from corners to form an open box. Find $x$ to maximize volume.',
      solution_vi: '• Thể tích: $V(x) = x(60 - 2x)^2 = 4x(30 - x)^2$.\n• $V\'(x) = 12(x - 10)(x - 30) = 0 \\implies x = 10\\text{ cm}$ ($0 < x < 30$).\n• Thể tích cực đại: $V(10) = 16000\\text{ cm}^3 = 16\\text{ lít}$.',
      solution_en: '$V(x) = 4x(30-x)^2 \\implies V\'(x) = 0 \\iff x = 10\\text{ cm}$. Maximum volume is $16000\\text{ cm}^3$.',
    },
  ],

  'les-12-1-3': [
    {
      id: 'we-12-3-1',
      type_id: 'type-12-3-1',
      type_code: 'Dạng 1. Tìm tiệm cận đứng và tiệm cận ngang',
      title_vi: 'Ví dụ 1: Tìm tiệm cận của hàm phân thức bậc nhất',
      title_en: 'Example 1: Rational Function Asymptotes',
      problem_vi: 'Tìm phương trình các đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$.',
      problem_en: 'Find the vertical and horizontal asymptotes of $y = \\frac{3x - 1}{x + 2}$.',
      solution_vi: '• Tiệm cận đứng: $x = -2$ (vì $\\lim_{x \\to -2^+} y = -\\infty$).\n• Tiệm cận ngang: $y = 3$ (vì $\\lim_{x \\to \\pm\\infty} y = 3$).',
      solution_en: 'Vertical asymptote $x = -2$; horizontal asymptote $y = 3$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 12: CHƯƠNG II - VECTƠ VÀ HỆ TOẠ ĐỘ TRONG KHÔNG GIAN OXYZ
  // -------------------------------------------------------------------------
  'les-12-2-1': [
    {
      id: 'we-12-6-1',
      type_id: 'type-12-6-1',
      type_code: 'Dạng 1. Quy tắc hình hộp & Vectơ không gian',
      title_vi: 'Ví dụ 1: Áp dụng quy tắc hình hộp',
      title_en: 'Example 1: Parallelepiped Rule',
      problem_vi: 'Cho hình hộp chữ nhật $ABCD.A\'B\'C\'D\'$. Chứng minh rằng $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
      problem_en: 'For rectangular box $ABCD.A\'B\'C\'D\'$, prove that $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
      solution_vi: '• Trong đáy $ABCD$: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.\n• Trong mặt phẳng chéo $ACC\'A\'$: $\\vec{AC} + \\vec{AA\'} = \\vec{AC\'}$.\n• Vậy $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$ (đpcm).',
      solution_en: '$\\vec{AB} + \\vec{AD} = \\vec{AC}$, and $\\vec{AC} + \\vec{AA\'} = \\vec{AC\'}$. Thus $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
    },
  ],

  'les-12-2-2': [
    {
      id: 'we-12-7-1',
      type_id: 'type-12-7-1',
      type_code: 'Dạng 1. Toạ độ điểm và vectơ trong Oxyz',
      title_vi: 'Ví dụ 1: Toạ độ trung điểm và trọng tâm trong Oxyz',
      title_en: 'Example 1: Midpoint and Centroid in 3D Space',
      problem_vi: 'Trong không gian $Oxyz$, cho $A(1; 2; -1)$, $B(3; 0; 5)$, $C(2; 4; 2)$. Tìm toạ độ trung điểm $M$ của $AB$ và trọng tâm $G$ của $\\triangle ABC$.',
      problem_en: 'In $Oxyz$, given $A(1, 2, -1)$, $B(3, 0, 5)$, $C(2, 4, 2)$. Find midpoint $M$ of $AB$ and centroid $G$ of $\\triangle ABC$.',
      solution_vi: '• Trung điểm $M = \\left(\\frac{1+3}{2}; \\frac{2+0}{2}; \\frac{-1+5}{2}\\right) = (2; 1; 2)$.\n• Trọng tâm $G = \\left(\\frac{1+3+2}{3}; \\frac{2+0+4}{3}; \\frac{-1+5+2}{3}\\right) = (2; 2; 2)$.',
      solution_en: 'Midpoint $M(2, 1, 2)$; Centroid $G(2, 2, 2)$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 11: CHƯƠNG VII - ĐẠO HÀM VÀ ỨNG DỤNG (BÀI 12)
  // -------------------------------------------------------------------------
  'les-11-7-1': [
    {
      id: 'we-11-12-1',
      type_id: 'type-11-12-1',
      type_code: 'Dạng 1. Viết phương trình tiếp tuyến',
      title_vi: 'Ví dụ 1: Viết phương trình tiếp tuyến tại một điểm',
      title_en: 'Example 1: Tangent Line Equation at a Given Point',
      problem_vi: 'Cho hàm số $y = f(x) = x^3 - 3x + 2$. Viết phương trình tiếp tuyến của đồ thị hàm số tại điểm $M(2; 4)$.',
      problem_en: 'Given $y = f(x) = x^3 - 3x + 2$. Write the tangent line to the curve at $M(2, 4)$.',
      solution_vi: '• Đạo hàm: $f\'(x) = 3x^2 - 3$.\n• Hệ số góc tiếp tuyến tại $x_0 = 2$: $k = f\'(2) = 3(2^2) - 3 = 9$.\n• Phương trình tiếp tuyến: $y = 9(x - 2) + 4 = 9x - 14$.',
      solution_en: '• $f\'(x) = 3x^2 - 3 \\implies k = f\'(2) = 9$. Tangent is $y = 9x - 14$.',
    },
    {
      id: 'we-11-12-2',
      type_id: 'type-11-12-2',
      type_code: 'Dạng 2 (Ứng dụng thực tế). Vận tốc tức thời',
      title_vi: 'Ví dụ 2 (Ứng dụng thực tế): Vận tốc tức thời của vật chuyển động',
      title_en: 'Example 2 (Real-world): Instantaneous Velocity',
      problem_vi: 'Một vật chuyển động có phương trình $s(t) = 3t^2 + 2t$ ($s$ tính bằng mét, $t$ tính bằng giây). Hãy tính vận tốc tức thời tại $t = 5\\text{ s}$.',
      problem_en: 'Position is $s(t) = 3t^2 + 2t$. Find the instantaneous velocity at $t = 5\\text{ s}$.',
      solution_vi: '• Vận tốc: $v(t) = s\'(t) = 6t + 2$.\n• Tại $t = 5\\text{ s}$: $v(5) = 6(5) + 2 = 32\\text{ m/s}$.',
      solution_en: '$v(t) = 6t + 2 \\implies v(5) = 32\\text{ m/s}$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 11: CHƯƠNG VI - HÀM SỐ MŨ VÀ LOGARIT (BÀI 11)
  // -------------------------------------------------------------------------
  'les-11-6-1': [
    {
      id: 'we-11-11-1',
      type_id: 'type-11-11-1',
      type_code: 'Dạng 1. Rút gọn luỹ thừa và logarit',
      title_vi: 'Ví dụ 1: Tính giá trị biểu thức logarit',
      title_en: 'Example 1: Evaluating Logarithmic Expressions',
      problem_vi: 'Tính giá trị biểu thức $P = \\log_2 16 + \\log_3 \\sqrt{27} - \\ln(e^4)$.',
      problem_en: 'Evaluate $P = \\log_2 16 + \\log_3 \\sqrt{27} - \\ln(e^4)$.',
      solution_vi: '• $\\log_2 16 = 4, \\log_3(3^{3/2}) = 1.5, \\ln(e^4) = 4 \\implies P = 1.5$.',
      solution_en: '$\\log_2 16 = 4, \\log_3 \\sqrt{27} = 1.5, \\ln(e^4) = 4 \\implies P = 1.5$.',
    },
  ],
};

// =========================================================================
// NGÂN HÀNG CÂU HỎI TOÀN DIỆN PHONG PHÚ 4 DẠNG THỨC GDPT 2018
// ĐẢM BẢO MỖI CHỦ ĐỀ CÓ ĐỦ 10 - 20 CÂU HỎI CHUẨN
// =========================================================================
export const FULL_QUESTION_BANK: Question[] = [
  // =========================================================================
  // 1. LỚP 12 - CHỦ ĐỀ GTLN VÀ GTNN & BÀI TOÁN TỐI ƯU (top-12-1-2)
  // =========================================================================
  {
    id: 'q-12-2-tn1',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Giá trị lớn nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$ bằng bao nhiêu?',
    question_en: 'What is the maximum value of $f(x) = x^4 - 2x^2 + 3$ on $[0, 2]$?',
    options: [
      { option_key: 'A', content_vi: '$11$', content_en: '$11$', is_correct: true },
      { option_key: 'B', content_vi: '$3$', content_en: '$3$', is_correct: false },
      { option_key: 'C', content_vi: '$2$', content_en: '$2$', is_correct: false },
      { option_key: 'D', content_vi: '$16$', content_en: '$16$', is_correct: false },
    ],
    solution_vi: '$f(0) = 3, f(1) = 2, f(2) = 11 \\implies \\max = 11$.',
    solution_en: '$f(0) = 3, f(1) = 2, f(2) = 11 \\implies \\max = 11$.',
    correct_answer: 'A',
    math_skill: 'Tìm GTLN trên đoạn',
    english_skill: 'Maximum on closed interval',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tn2',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Giá trị nhỏ nhất của hàm số $y = x^3 - 3x + 1$ trên đoạn $[0; 2]$ là:',
    question_en: 'The minimum value of $y = x^3 - 3x + 1$ on $[0, 2]$ is:',
    options: [
      { option_key: 'A', content_vi: '$-1$', content_en: '$-1$', is_correct: true },
      { option_key: 'B', content_vi: '$1$', content_en: '$1$', is_correct: false },
      { option_key: 'C', content_vi: '$3$', content_en: '$3$', is_correct: false },
      { option_key: 'D', content_vi: '$0$', content_en: '$0$', is_correct: false },
    ],
    solution_vi: '$y\' = 3x^2 - 3 = 0 \\implies x = 1 \\in [0; 2]$. $y(0) = 1, y(1) = -1, y(2) = 3 \\implies \\min = -1$.',
    solution_en: '$y(0) = 1, y(1) = -1, y(2) = 3 \\implies \\min = -1$.',
    correct_answer: 'A',
    math_skill: 'Tìm GTNN của hàm bậc ba',
    english_skill: 'Minimum of cubic polynomial',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tn3',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Tìm giá trị lớn nhất của hàm số $y = \\frac{2x - 1}{x + 1}$ trên đoạn $[0; 3]$.',
    question_en: 'Find the maximum value of $y = \\frac{2x - 1}{x + 1}$ on $[0, 3]$.',
    options: [
      { option_key: 'A', content_vi: '$5/4$', content_en: '$5/4$', is_correct: true },
      { option_key: 'B', content_vi: '$-1$', content_en: '$-1$', is_correct: false },
      { option_key: 'C', content_vi: '$2$', content_en: '$2$', is_correct: false },
      { option_key: 'D', content_vi: '$1$', content_en: '$1$', is_correct: false },
    ],
    solution_vi: 'Vì $y\' = \\frac{3}{(x+1)^2} > 0$ nên hàm số đồng biến trên $[0; 3] \\implies \\max = y(3) = \\frac{5}{4}$.',
    solution_en: 'Function is increasing on $[0, 3] \\implies \\max = y(3) = 5/4$.',
    correct_answer: 'A',
    math_skill: 'GTLN hàm phân thức',
    english_skill: 'Maximum of rational function',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tn4',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-2',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Giá trị nhỏ nhất của hàm số $y = x + \\frac{9}{x}$ với $x > 0$ bằng:',
    question_en: 'The minimum value of $y = x + \\frac{9}{x}$ for $x > 0$ is:',
    options: [
      { option_key: 'A', content_vi: '$6$', content_en: '$6$', is_correct: true },
      { option_key: 'B', content_vi: '$9$', content_en: '$9$', is_correct: false },
      { option_key: 'C', content_vi: '$3$', content_en: '$3$', is_correct: false },
      { option_key: 'D', content_vi: '$10$', content_en: '$10$', is_correct: false },
    ],
    solution_vi: 'Theo BĐT Cauchy: $x + \\frac{9}{x} \\ge 2\\sqrt{9} = 6$. Dấu bằng khi $x = 3$.',
    solution_en: 'By AM-GM inequality: $x + 9/x \\ge 2\\sqrt{9} = 6$.',
    correct_answer: 'A',
    math_skill: 'BĐT Cauchy tìm GTNN',
    english_skill: 'AM-GM inequality minimum',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tn5',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-3',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'HARD',
    language_level: 2,
    question_vi: 'Một người nông dân muốn rào một khu vườn hình chữ nhật có một cạnh giáp bờ sông (không cần rào cạnh này). Chiều dài hàng rào sẵn có là $120\\text{ m}$. Diện tích lớn nhất của khu vườn là:',
    question_en: 'A farmer fences a rectangular plot bordering a straight river (no fence needed along the river). Using $120\\text{ m}$ of fencing, the maximum area is:',
    options: [
      { option_key: 'A', content_vi: '$1800\\text{ m}^2$', content_en: '$1800\\text{ m}^2$', is_correct: true },
      { option_key: 'B', content_vi: '$3600\\text{ m}^2$', content_en: '$3600\\text{ m}^2$', is_correct: false },
      { option_key: 'C', content_vi: '$900\\text{ m}^2$', content_en: '$900\\text{ m}^2$', is_correct: false },
      { option_key: 'D', content_vi: '$2400\\text{ m}^2$', content_en: '$2400\\text{ m}^2$', is_correct: false },
    ],
    solution_vi: 'Gọi chiều rộng là $x$ ($0 < x < 60$), chiều dài là $120 - 2x$. Diện tích $S(x) = x(120 - 2x) = 120x - 2x^2$. Đạt cực đại tại $x = 30\\text{ m}$, diện tích cực đại $S(30) = 1800\\text{ m}^2$.',
    solution_en: 'Width $x$, length $120 - 2x$. Area $S(x) = x(120-2x)$ max at $x = 30$, max area $= 1800\\text{ m}^2$.',
    correct_answer: 'A',
    math_skill: 'Tối ưu hoá diện tích rào chắn',
    english_skill: 'Fenced area optimization',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-ds1',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho hàm số $y = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$. Xét tính đúng/sai của các mệnh đề sau:',
    question_en: 'Given $y = x + \\frac{4}{x}$ on $(0, +\\infty)$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Đạo hàm $y\' = 1 - \\frac{4}{x^2}$.', content_en: 'The derivative is $y\' = 1 - \\frac{4}{x^2}$.', is_correct: true },
      { option_key: 'b', content_vi: 'Hàm số đạt giá trị nhỏ nhất tại điểm $x = 2$.', content_en: 'The function attains its minimum at $x = 2$.', is_correct: true },
      { option_key: 'c', content_vi: 'Giá trị nhỏ nhất của hàm số trên $(0; +\\infty)$ bằng $4$.', content_en: 'The minimum value on $(0, +\\infty)$ is $4$.', is_correct: true },
      { option_key: 'd', content_vi: 'Hàm số có giá trị lớn nhất trên $(0; +\\infty)$ bằng $8$.', content_en: 'The maximum value on $(0, +\\infty)$ is $8$.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: 'Theo BĐT AM-GM: $x + 4/x \\ge 4$. Đạt GTNN khi $x = 2$. Không có GTLN.',
    solution_en: 'a-True, b-True, c-True, d-False.',
    math_skill: 'Đúng sai GTNN hàm phân thức',
    english_skill: 'True/False on minimum values',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-ds2',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho hàm số $f(x) = -x^3 + 3x + 2$ trên đoạn $[0; 2]$. Xét tính đúng/sai của các khẳng định sau:',
    question_en: 'Given $f(x) = -x^3 + 3x + 2$ on $[0, 2]$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Đạo hàm $f\'(x) = -3x^2 + 3$.', content_en: 'The derivative is $f\'(x) = -3x^2 + 3$.', is_correct: true },
      { option_key: 'b', content_vi: 'Phương trình $f\'(x) = 0$ có một nghiệm $x = 1$ thuộc khoảng $(0; 2)$.', content_en: 'Root $x = 1$ lies in $(0, 2)$.', is_correct: true },
      { option_key: 'c', content_vi: 'Giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ bằng $4$.', content_en: 'The maximum value on $[0, 2]$ is $4$.', is_correct: true },
      { option_key: 'd', content_vi: 'Giá trị nhỏ nhất của hàm số trên đoạn $[0; 2]$ bằng $2$.', content_en: 'The minimum value on $[0, 2]$ is $2$.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: '$f(0) = 2, f(1) = 4, f(2) = 0 \\implies \\max = 4$ và $\\min = 0$. Khẳng định d sai.',
    solution_en: '$f(0)=2, f(1)=4, f(2)=0 \\implies \\max = 4, \\min = 0$.',
    math_skill: 'Đúng sai GTLN-GTNN hàm bậc 3',
    english_skill: 'True/False on cubic extrema',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tln1',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-3',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'HARD',
    language_level: 2,
    question_vi: 'Từ một tấm tôn hình vuông cạnh $60\\text{ cm}$, người ta cắt 4 góc các hình vuông cạnh $x\\text{ cm}$ để gấp thành hộp không nắp. Giá trị của $x$ (theo cm) để thể tích hộp lớn nhất là bao nhiêu?',
    question_en: 'A square sheet of side $60\\text{ cm}$ has 4 corners of side $x\\text{ cm}$ cut off to fold an open box. What is $x$ (in cm) for maximum volume?',
    correct_answer: '10',
    solution_vi: '$V(x) = 4x(30 - x)^2 \\implies V\'(x) = 12(x - 10)(x - 30) = 0 \\implies x = 10\\text{ cm}$.',
    solution_en: '$V\'(x) = 0 \\implies x = 10\\text{ cm}$.',
    math_skill: 'Tối ưu thể tích hộp mở',
    english_skill: 'Box volume optimization',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tln2',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Tìm giá trị lớn nhất của hàm số $y = \\sqrt{4 - x^2}$.',
    question_en: 'Find the maximum value of $y = \\sqrt{4 - x^2}$.',
    correct_answer: '2',
    solution_vi: 'Vì $x^2 \\ge 0 \\implies 4 - x^2 \\le 4 \\implies \\sqrt{4 - x^2} \\le 2$. GTLN là $2$ khi $x = 0$.',
    solution_en: 'Max value is $\\sqrt{4} = 2$ at $x = 0$.',
    math_skill: 'GTLN hàm chứa căn',
    english_skill: 'Maximum of radical function',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tl1',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-3',
    question_type: 'ESSAY',
    format_type: 'TL',
    difficulty: 'HARD',
    language_level: 2,
    question_vi: 'Một công ty sản xuất muốn thiết kế một thùng chứa hình trụ có thể tích $V = 54\\pi\\text{ m}^3$. Hãy tìm bán kính đáy $R$ (theo mét) sao cho diện tích toàn phần của thùng chứa là nhỏ nhất để tiết kiệm chi phí vật liệu.',
    question_en: 'A manufacturing company wants to design a cylindrical container with volume $V = 54\\pi\\text{ m}^3$. Find the base radius $R$ (in meters) to minimize the total surface area and save material cost.',
    correct_answer: '3',
    solution_vi: '• Thể tích: $V = \\pi R^2 h = 54\\pi \\implies h = \\frac{54}{R^2}$.\n• Diện tích toàn phần: $S_{tp} = 2\\pi R^2 + 2\\pi R h = 2\\pi R^2 + \\frac{108\\pi}{R} = 2\\pi \\left(R^2 + \\frac{54}{R} + \\frac{54}{R}\\right) \\ge 2\\pi \\cdot 3 \\sqrt[3]{R^2 \\cdot \\frac{54}{R} \\cdot \\frac{54}{R}} = 54\\pi$.\n• Đẳng thức xảy ra khi $R^2 = \\frac{54}{R} \\iff R^3 = 27 \\iff R = 3\\text{ m}$.',
    solution_en: '$V = \\pi R^2 h = 54\\pi \\implies h = 54/R^2$. $S_{tp} = 2\\pi R^2 + 108\\pi/R$. Minimized when $R^3 = 27 \\implies R = 3\\text{ m}$.',
    math_skill: 'Tối ưu diện tích toàn phần hình trụ',
    english_skill: 'Cylinder surface area minimization',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 2. LỚP 12 - CHỦ ĐỀ TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ (top-12-1-1)
  // =========================================================================
  {
    id: 'q-12-1-tn1',
    topic_id: 'top-12-1-1',
    type_id: 'type-12-1-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Hàm số $y = -x^3 + 3x^2 - 1$ đồng biến trên khoảng nào dưới đây?',
    question_en: 'On which interval is $y = -x^3 + 3x^2 - 1$ strictly increasing?',
    options: [
      { option_key: 'A', content_vi: '$(0; 2)$', content_en: '$(0, 2)$', is_correct: true },
      { option_key: 'B', content_vi: '$(-\\infty; 0)$', content_en: '$(-\\infty, 0)$', is_correct: false },
      { option_key: 'C', content_vi: '$(2; +\\infty)$', content_en: '$(2, +\\infty)$', is_correct: false },
      { option_key: 'D', content_vi: '$(-\\infty; 2)$', content_en: '$(-\\infty, 2)$', is_correct: false },
    ],
    solution_vi: '$y\' = -3x(x - 2) > 0 \\iff 0 < x < 2$.',
    solution_en: '$y\' > 0 \\iff 0 < x < 2$.',
    correct_answer: 'A',
    math_skill: 'Tìm khoảng đồng biến',
    english_skill: 'Increasing interval',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-1-ds1',
    topic_id: 'top-12-1-1',
    type_id: 'type-12-1-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho hàm số $y = \\frac{2x - 1}{x + 1}$. Xét tính đúng/sai của các mệnh đề sau:',
    question_en: 'Given $y = \\frac{2x - 1}{x + 1}$. Determine whether each statement is True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$.', content_en: 'Domain is $D = \\mathbb{R} \\setminus \\{-1\\}$.', is_correct: true },
      { option_key: 'b', content_vi: 'Đạo hàm $y\' = \\frac{3}{(x + 1)^2} > 0, \\forall x \\ne -1$.', content_en: 'Derivative $y\' = \\frac{3}{(x + 1)^2} > 0, \\forall x \\ne -1$.', is_correct: true },
      { option_key: 'c', content_vi: 'Hàm số đồng biến trên toàn bộ $\\mathbb{R}$.', content_en: 'The function is increasing on all real numbers.', is_correct: false },
      { option_key: 'd', content_vi: 'Hàm số không có điểm cực trị.', content_en: 'The function has no local extrema.', is_correct: true },
    ],
    correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
    solution_vi: 'a-Đ, b-Đ, c-S, d-Đ.',
    solution_en: 'a-True, b-True, c-False, d-True.',
    math_skill: 'Khảo sát hàm phân thức',
    english_skill: 'Rational function analysis',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-1-tln1',
    topic_id: 'top-12-1-1',
    type_id: 'type-12-1-2',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho hàm số $y = x^3 - 3x^2 + 2$. Tung độ của điểm cực đại của đồ thị hàm số bằng bao nhiêu?',
    question_en: 'For $y = x^3 - 3x^2 + 2$, what is the y-coordinate of the local maximum?',
    correct_answer: '2',
    solution_vi: '$y\' = 3x(x - 2) = 0 \\iff x = 0, x = 2$. Cực đại tại $x = 0$, $y(0) = 2$.',
    solution_en: 'Local max $y(0) = 2$.',
    math_skill: 'Tung độ cực đại',
    english_skill: 'Local maximum y-coordinate',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-1-tl1',
    topic_id: 'top-12-1-1',
    type_id: 'type-12-1-3',
    question_type: 'ESSAY',
    format_type: 'TL',
    difficulty: 'HARD',
    language_level: 2,
    question_vi: 'Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m + 2)x - 5$ đồng biến trên $\\mathbb{R}$.',
    question_en: 'Find all real $m$ such that $y = \\frac{1}{3}x^3 - mx^2 + (m + 2)x - 5$ is strictly increasing on $\\mathbb{R}$.',
    correct_answer: '-1 <= m <= 2',
    solution_vi: '$\\Delta\' = m^2 - m - 2 \\le 0 \\iff -1 \\le m \\le 2$.',
    solution_en: 'Condition: $\\Delta\' \\le 0 \\iff -1 \\le m \\le 2$.',
    math_skill: 'Tham số m đồng biến trên R',
    english_skill: 'Monotonicity with parameter m',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 3. LỚP 12 - CHỦ ĐỀ ĐƯỜNG TIỆM CẬN (top-12-1-3)
  // =========================================================================
  {
    id: 'q-12-3-tn1',
    topic_id: 'top-12-1-3',
    type_id: 'type-12-3-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ có đường tiệm cận ngang là đường thẳng nào?',
    question_en: 'What is the horizontal asymptote of $y = \\frac{2x - 3}{x + 1}$?',
    options: [
      { option_key: 'A', content_vi: '$y = 2$', content_en: '$y = 2$', is_correct: true },
      { option_key: 'B', content_vi: '$x = -1$', content_en: '$x = -1$', is_correct: false },
      { option_key: 'C', content_vi: '$y = -3$', content_en: '$y = -3$', is_correct: false },
      { option_key: 'D', content_vi: '$x = 2$', content_en: '$x = 2$', is_correct: false },
    ],
    solution_vi: '$\\lim_{x \\to \\pm\\infty} y = 2 \\implies y = 2$.',
    solution_en: 'Horizontal asymptote $y = 2$.',
    correct_answer: 'A',
    math_skill: 'Tìm tiệm cận ngang',
    english_skill: 'Horizontal asymptote',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-3-tln1',
    topic_id: 'top-12-1-3',
    type_id: 'type-12-3-2',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Đồ thị hàm số $y = \\frac{x^2 + 3x - 1}{x - 2}$ có tiệm cận xiên dạng $y = ax + b$. Tính $a + b$.',
    question_en: 'The curve $y = \\frac{x^2 + 3x - 1}{x - 2}$ has oblique asymptote $y = ax + b$. What is $a + b$?',
    correct_answer: '6',
    solution_vi: '$y = x + 5 + \\frac{9}{x - 2} \\implies a = 1, b = 5 \\implies a + b = 6$.',
    solution_en: '$a=1, b=5 \\implies a+b=6$.',
    math_skill: 'Hệ số tiệm cận xiên',
    english_skill: 'Oblique asymptote sum',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 4. LỚP 12 - CHỦ ĐỀ VECTƠ VÀ HỆ TOẠ ĐỘ TRONG KHÔNG GIAN OXYZ (top-12-2-1, top-12-2-2, top-12-2-3)
  // =========================================================================
  {
    id: 'q-12-2-tn1',
    topic_id: 'top-12-2-1',
    type_id: 'type-12-6-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho hình hộp chữ nhật $ABCD.A\'B\'C\'D\'$. Khẳng định nào sau đây là ĐÚNG?',
    question_en: 'For a rectangular box $ABCD.A\'B\'C\'D\', which vector identity is TRUE?',
    options: [
      { option_key: 'A', content_vi: '$\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$', content_en: '$\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$', is_correct: true },
      { option_key: 'B', content_vi: '$\\vec{AC\'} = \\vec{AB} + \\vec{AD} - \\vec{AA\'}$', content_en: '$\\vec{AC\'} = \\vec{AB} + \\vec{AD} - \\vec{AA\'}$', is_correct: false },
      { option_key: 'C', content_vi: '$\\vec{BD\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$', content_en: '$\\vec{BD\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$', is_correct: false },
      { option_key: 'D', content_vi: '$\\vec{AC\'} = \\vec{AC} + \\vec{BD}$', content_en: '$\\vec{AC\'} = \\vec{AC} + \\vec{BD}$', is_correct: false },
    ],
    solution_vi: 'Quy tắc hình hộp: $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
    solution_en: 'Parallelepiped rule: $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
    correct_answer: 'A',
    math_skill: 'Quy tắc hình hộp',
    english_skill: 'Parallelepiped rule',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tn2',
    topic_id: 'top-12-2-2',
    type_id: 'type-12-7-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Trong không gian $Oxyz$, cho $A(1; 2; -3)$ và $B(3; 0; 1)$. Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là:',
    question_en: 'In $Oxyz$, given $A(1, 2, -3)$ and $B(3, 0, 1)$. The midpoint $M$ of $AB$ is:',
    options: [
      { option_key: 'A', content_vi: '$M(2; 1; -1)$', content_en: '$M(2, 1, -1)$', is_correct: true },
      { option_key: 'B', content_vi: '$M(4; 2; -2)$', content_en: '$M(4, 2, -2)$', is_correct: false },
      { option_key: 'C', content_vi: '$M(1; -1; 2)$', content_en: '$M(1, -1, 2)$', is_correct: false },
      { option_key: 'D', content_vi: '$M(2; -1; 1)$', content_en: '$M(2, -1, 1)$', is_correct: false },
    ],
    solution_vi: '$M = (2; 1; -1)$.',
    solution_en: '$M = (2, 1, -1)$.',
    correct_answer: 'A',
    math_skill: 'Trung điểm đoạn thẳng Oxyz',
    english_skill: 'Midpoint coordinates in 3D',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-ds2',
    topic_id: 'top-12-2-3',
    type_id: 'type-12-8-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Trong không gian $Oxyz$, cho $\\vec{u} = (1; 2; -2)$ và $\\vec{v} = (2; -1; 0)$. Xét tính đúng/sai của các mệnh đề sau:',
    question_en: 'In $Oxyz$, given $\\vec{u} = (1, 2, -2)$ and $\\vec{v} = (2, -1, 0)$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Độ dài $|\\vec{u}| = 3$.', content_en: 'Length $|\\vec{u}| = 3$.', is_correct: true },
      { option_key: 'b', content_vi: 'Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$.', content_en: 'Dot product $\\vec{u} \\cdot \\vec{v} = 0$.', is_correct: true },
      { option_key: 'c', content_vi: 'Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc nhau.', content_en: 'Vectors $\\vec{u}$ and $\\vec{v}$ are perpendicular.', is_correct: true },
      { option_key: 'd', content_vi: 'Độ dài $|\\vec{v}| = 5$.', content_en: 'Magnitude of $\\vec{v}$ is $5$.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: 'a-Đ, b-Đ, c-Đ, d-S ($|\\vec{v}| = \\sqrt{5}$).',
    solution_en: 'a-True, b-True, c-True, d-False.',
    math_skill: 'Tích vô hướng Oxyz',
    english_skill: 'Dot product in 3D',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tln2',
    topic_id: 'top-12-2-3',
    type_id: 'type-12-8-1',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 0; 1)$ và $\\vec{b} = (0; 1; 1)$. Góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng bao nhiêu độ?',
    question_en: 'In $Oxyz$, given $\\vec{a} = (1, 0, 1)$ and $\\vec{b} = (0, 1, 1)$. What is the angle (in degrees) between $\\vec{a}$ and $\\vec{b}$?',
    correct_answer: '60',
    solution_vi: '$\\cos(\\vec{a}, \\vec{b}) = 1/2 \\implies 60^\\circ$.',
    solution_en: '$\\cos(\\vec{a}, \\vec{b}) = 1/2 \\implies 60^\\circ$.',
    math_skill: 'Góc giữa hai vectơ không gian',
    english_skill: 'Angle between 3D vectors',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 5. LỚP 11 - CHỦ ĐỀ ĐẠO HÀM VÀ ỨNG DỤNG (top-11-7-1)
  // =========================================================================
  {
    id: 'q-11-7-tn1',
    topic_id: 'top-11-7-1',
    type_id: 'type-11-12-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Đạo hàm của hàm số $y = x^4 - 3x^2 + 5$ là:',
    question_en: 'The derivative of $y = x^4 - 3x^2 + 5$ is:',
    options: [
      { option_key: 'A', content_vi: '$y\' = 4x^3 - 6x$', content_en: '$y\' = 4x^3 - 6x$', is_correct: true },
      { option_key: 'B', content_vi: '$y\' = 4x^3 - 6x + 5$', content_en: '$y\' = 4x^3 - 6x + 5$', is_correct: false },
      { option_key: 'C', content_vi: '$y\' = 4x^3 - 3x$', content_en: '$y\' = 4x^3 - 3x$', is_correct: false },
      { option_key: 'D', content_vi: '$y\' = x^3 - 6x$', content_en: '$y\' = x^3 - 6x$', is_correct: false },
    ],
    solution_vi: '$y\' = 4x^3 - 6x$.',
    solution_en: '$y\' = 4x^3 - 6x$.',
    correct_answer: 'A',
    math_skill: 'Đạo hàm đa thức',
    english_skill: 'Polynomial derivative',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-7-tn2',
    topic_id: 'top-11-7-1',
    type_id: 'type-11-12-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Hệ số góc của tiếp tuyến của đồ thị hàm số $y = x^3 - 2x + 1$ tại điểm $x_0 = 2$ bằng:',
    question_en: 'The slope of the tangent to $y = x^3 - 2x + 1$ at $x_0 = 2$ is:',
    options: [
      { option_key: 'A', content_vi: '$10$', content_en: '$10$', is_correct: true },
      { option_key: 'B', content_vi: '$12$', content_en: '$12$', is_correct: false },
      { option_key: 'C', content_vi: '$8$', content_en: '$8$', is_correct: false },
      { option_key: 'D', content_vi: '$5$', content_en: '$5$', is_correct: false },
    ],
    solution_vi: '$y\' = 3x^2 - 2 \\implies k = y\'(2) = 10$.',
    solution_en: '$k = y\'(2) = 10$.',
    correct_answer: 'A',
    math_skill: 'Hệ số góc tiếp tuyến',
    english_skill: 'Slope of tangent line',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-7-ds1',
    topic_id: 'top-11-7-1',
    type_id: 'type-11-12-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho hàm số $y = f(x) = \\frac{2x + 1}{x - 1}$. Xét tính đúng/sai của các khẳng định sau:',
    question_en: 'Given $y = f(x) = \\frac{2x + 1}{x - 1}$. Determine True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$.', content_en: 'Domain $D = \\mathbb{R} \\setminus \\{1\\}$.', is_correct: true },
      { option_key: 'b', content_vi: 'Đạo hàm $f\'(x) = \\frac{-3}{(x - 1)^2}$.', content_en: 'Derivative $f\'(x) = \\frac{-3}{(x - 1)^2}$.', is_correct: true },
      { option_key: 'c', content_vi: 'Đạo hàm $f\'(x) > 0, \\forall x \\neq 1$.', content_en: 'Derivative $f\'(x) > 0, \\forall x \\neq 1$.', is_correct: false },
      { option_key: 'd', content_vi: 'Hệ số góc tiếp tuyến tại $x_0 = 2$ bằng $-3$.', content_en: 'Tangent slope at $x_0 = 2$ is $-3$.', is_correct: true },
    ],
    correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
    solution_vi: 'a-Đ, b-Đ, c-S, d-Đ.',
    solution_en: 'a-True, b-True, c-False, d-True.',
    math_skill: 'Đạo hàm hàm phân thức',
    english_skill: 'Rational function derivative',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-7-tln1',
    topic_id: 'top-11-7-1',
    type_id: 'type-11-12-2',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Một chất điểm chuyển động theo quãng đường $s(t) = -t^3 + 6t^2 + 15t$ ($s$ tính bằng m, $t$ tính bằng s). Vận tốc tức thời cực đại của chất điểm bằng bao nhiêu m/s?',
    question_en: 'A particle moves with position $s(t) = -t^3 + 6t^2 + 15t$. What is the maximum instantaneous velocity in m/s?',
    correct_answer: '27',
    solution_vi: '$v(t) = -3t^2 + 12t + 15$ cực đại tại $t = 2$, $v(2) = 27\\text{ m/s}$.',
    solution_en: '$v(2) = 27\\text{ m/s}$.',
    math_skill: 'Vận tốc tức thời cực đại',
    english_skill: 'Maximum instantaneous velocity',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 6. LỚP 11 - CHỦ ĐỀ HÀM SỐ MŨ VÀ LOGARIT (top-11-6-1)
  // =========================================================================
  {
    id: 'q-11-6-tn1',
    topic_id: 'top-11-6-1',
    type_id: 'type-11-11-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Với $a$ là số thực dương tuỳ ý, giá trị của biểu thức $\\log_2(a^3)$ bằng bao nhiêu?',
    question_en: 'For any positive real number $a$, what is the value of $\\log_2(a^3)$?',
    options: [
      { option_key: 'A', content_vi: '$3\\log_2 a$', content_en: '$3\\log_2 a$', is_correct: true },
      { option_key: 'B', content_vi: '$\\frac{1}{3}\\log_2 a$', content_en: '$\\frac{1}{3}\\log_2 a$', is_correct: false },
      { option_key: 'C', content_vi: '$3 + \\log_2 a$', content_en: '$3 + \\log_2 a$', is_correct: false },
      { option_key: 'D', content_vi: '$a^3$', content_en: '$a^3$', is_correct: false },
    ],
    solution_vi: '$\\log_2(a^3) = 3\\log_2 a$.',
    solution_en: '$\\log_2(a^3) = 3\\log_2 a$.',
    correct_answer: 'A',
    math_skill: 'Quy tắc luỹ thừa của logarit',
    english_skill: 'Logarithm power rule',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-6-tn2',
    topic_id: 'top-11-6-1',
    type_id: 'type-11-11-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Nghiệm của phương trình $2^{2x - 1} = 32$ là:',
    question_en: 'The solution of $2^{2x - 1} = 32$ is:',
    options: [
      { option_key: 'A', content_vi: '$x = 3$', content_en: '$x = 3$', is_correct: true },
      { option_key: 'B', content_vi: '$x = 2$', content_en: '$x = 2$', is_correct: false },
      { option_key: 'C', content_vi: '$x = 5/2$', content_en: '$x = 5/2$', is_correct: false },
      { option_key: 'D', content_vi: '$x = 4$', content_en: '$x = 4$', is_correct: false },
    ],
    solution_vi: '$2^{2x - 1} = 2^5 \\implies x = 3$.',
    solution_en: '$2^{2x - 1} = 2^5 \\implies x = 3$.',
    correct_answer: 'A',
    math_skill: 'Giải phương trình mũ',
    english_skill: 'Solving exponential equations',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-6-ds1',
    topic_id: 'top-11-6-1',
    type_id: 'type-11-11-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho phương trình $\\log_3(x - 2) + \\log_3(x + 6) = 2$. Xét tính đúng/sai của các khẳng định sau:',
    question_en: 'Given $\\log_3(x - 2) + \\log_3(x + 6) = 2$. Determine True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Điều kiện xác định $x > 2$.', content_en: 'Domain condition $x > 2$.', is_correct: true },
      { option_key: 'b', content_vi: 'Phương trình biến đổi về $(x - 2)(x + 6) = 9$.', content_en: 'Simplifies to $(x - 2)(x + 6) = 9$.', is_correct: true },
      { option_key: 'c', content_vi: 'Phương trình có 2 nghiệm $x = 3$ và $x = -7$.', content_en: 'Has two solutions $x = 3$ and $x = -7$.', is_correct: false },
      { option_key: 'd', content_vi: 'Phương trình có đúng một nghiệm duy nhất $x = 3$.', content_en: 'Has one unique solution $x = 3$.', is_correct: true },
    ],
    correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
    solution_vi: 'a-Đ, b-Đ, c-S, d-Đ.',
    solution_en: 'a-True, b-True, c-False, d-True.',
    math_skill: 'Phương trình logarit',
    english_skill: 'Logarithmic equation',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-6-tln1',
    topic_id: 'top-11-6-1',
    type_id: 'type-11-11-2',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Số lượng vi khuẩn ban đầu là 1000 con, sau mỗi giờ số lượng tăng gấp đôi theo $N(t) = 1000 \\cdot 2^t$. Sau bao nhiêu giờ thì số lượng vi khuẩn đạt 64000 con?',
    question_en: 'Bacteria culture starts with 1000 bacteria: $N(t) = 1000 \\cdot 2^t$. How many hours to reach 64000 bacteria?',
    correct_answer: '6',
    solution_vi: '$2^t = 64 \\implies t = 6\\text{ giờ}$.',
    solution_en: '$2^t = 64 \\implies t = 6\\text{ hours}$.',
    math_skill: 'Tăng trưởng hàm mũ',
    english_skill: 'Exponential growth',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 7. LỚP 11 - CHỦ ĐỀ DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN (top-11-2-1, top-11-2-2, top-11-2-3)
  // =========================================================================
  {
    id: 'q-11-2-1-tn1',
    topic_id: 'top-11-2-1',
    type_id: 'type-11-5-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\frac{2n - 1}{n + 1}$. Giá trị của $u_4$ bằng:',
    question_en: 'For $(u_n)$ with $u_n = \\frac{2n - 1}{n + 1}$, the 4th term $u_4$ is:',
    options: [
      { option_key: 'A', content_vi: '$7/5$', content_en: '$7/5$', is_correct: true },
      { option_key: 'B', content_vi: '$4/5$', content_en: '$4/5$', is_correct: false },
      { option_key: 'C', content_vi: '$3/5$', content_en: '$3/5$', is_correct: false },
      { option_key: 'D', content_vi: '$2$', content_en: '$2$', is_correct: false },
    ],
    solution_vi: '$u_4 = 7/5$.',
    solution_en: '$u_4 = 7/5$.',
    correct_answer: 'A',
    math_skill: 'Số hạng dãy số',
    english_skill: 'Sequence term',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-2-2-tn1',
    topic_id: 'top-11-2-2',
    type_id: 'type-11-6-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và công sai $d = 3$. Số hạng thứ 6 của cấp số cộng là:',
    question_en: 'For an AP $(u_n)$ with $u_1 = 4$ and $d = 3$, the 6th term is:',
    options: [
      { option_key: 'A', content_vi: '$19$', content_en: '$19$', is_correct: true },
      { option_key: 'B', content_vi: '$22$', content_en: '$22$', is_correct: false },
      { option_key: 'C', content_vi: '$16$', content_en: '$16$', is_correct: false },
      { option_key: 'D', content_vi: '$20$', content_en: '$20$', is_correct: false },
    ],
    solution_vi: '$u_6 = 4 + 15 = 19$.',
    solution_en: '$u_6 = 19$.',
    correct_answer: 'A',
    math_skill: 'Số hạng cấp số cộng',
    english_skill: 'Arithmetic progression term',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-2-2-ds1',
    topic_id: 'top-11-2-2',
    type_id: 'type-11-6-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = 5$. Xét tính đúng/sai của các mệnh đề sau:',
    question_en: 'Given an AP $(u_n)$ with $u_1 = 2$ and $d = 5$. Determine True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Số hạng tổng quát $u_n = 5n - 3$.', content_en: 'General term $u_n = 5n - 3$.', is_correct: true },
      { option_key: 'b', content_vi: 'Số $102$ là một số hạng của cấp số cộng.', content_en: '102 is a term of the AP.', is_correct: true },
      { option_key: 'c', content_vi: 'Tổng 10 số hạng đầu $S_{10} = 245$.', content_en: 'Sum $S_{10} = 245$.', is_correct: true },
      { option_key: 'd', content_vi: 'Dãy số $(u_n)$ là một dãy số giảm.', content_en: 'Sequence is strictly decreasing.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: 'a-Đ, b-Đ, c-Đ, d-S.',
    solution_en: 'a-True, b-True, c-True, d-False.',
    math_skill: 'Tính chất cấp số cộng',
    english_skill: 'AP properties',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-2-3-tn1',
    topic_id: 'top-11-2-3',
    type_id: 'type-11-7-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Giá trị của $u_5$ bằng:',
    question_en: 'For GP $(u_n)$ with $u_1 = 3$ and $q = 2$, $u_5$ is:',
    options: [
      { option_key: 'A', content_vi: '$48$', content_en: '$48$', is_correct: true },
      { option_key: 'B', content_vi: '$24$', content_en: '$24$', is_correct: false },
      { option_key: 'C', content_vi: '$96$', content_en: '$96$', is_correct: false },
      { option_key: 'D', content_vi: '$32$', content_en: '$32$', is_correct: false },
    ],
    solution_vi: '$u_5 = 3 \\cdot 16 = 48$.',
    solution_en: '$u_5 = 48$.',
    correct_answer: 'A',
    math_skill: 'Số hạng cấp số nhân',
    english_skill: 'Geometric progression term',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-2-3-tln1',
    topic_id: 'top-11-2-3',
    type_id: 'type-11-7-1',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Tính tổng $S_6$.',
    question_en: 'For a GP $(u_n)$ with $u_1 = 3$ and $q = 2$, compute sum $S_6$.',
    correct_answer: '189',
    solution_vi: '$S_6 = \\frac{3(1 - 64)}{1 - 2} = 189$.',
    solution_en: '$S_6 = 189$.',
    math_skill: 'Tổng cấp số nhân',
    english_skill: 'GP sum',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 8. LỚP 10 - MỆNH ĐỀ & HÀM BẬC HAI (top-10-1-1, top-10-6-1)
  // =========================================================================
  {
    id: 'q-10-1-tn1',
    topic_id: 'top-10-1-1',
    type_id: 'type-10-1-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Mệnh đề nào sau đây là mệnh đề ĐÚNG?',
    question_en: 'Which proposition is TRUE?',
    options: [
      { option_key: 'A', content_vi: '$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$', content_en: '$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$', is_correct: true },
      { option_key: 'B', content_vi: '$\\exists x \\in \\mathbb{R}, x^2 < 0$', content_en: '$\\exists x \\in \\mathbb{R}, x^2 < 0$', is_correct: false },
      { option_key: 'C', content_vi: '$\\forall n \\in \\mathbb{N}, n^2 > n$', content_en: '$\\forall n \\in \\mathbb{N}, n^2 > n$', is_correct: false },
      { option_key: 'D', content_vi: '$\\pi > 4$', content_en: '$\\pi > 4$', is_correct: false },
    ],
    solution_vi: '$x^2 + 1 \\ge 1 > 0$ luôn đúng.',
    solution_en: '$x^2 + 1 > 0$ is always true.',
    correct_answer: 'A',
    math_skill: 'Tính đúng sai mệnh đề',
    english_skill: 'Proposition truth value',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-10-6-tn1',
    topic_id: 'top-10-6-1',
    type_id: 'type-10-6-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Toạ độ đỉnh của Parabol $y = x^2 - 4x + 3$ là:',
    question_en: 'Vertex of parabola $y = x^2 - 4x + 3$ is:',
    options: [
      { option_key: 'A', content_vi: '$I(2; -1)$', content_en: '$I(2, -1)$', is_correct: true },
      { option_key: 'B', content_vi: '$I(-2; 15)$', content_en: '$I(-2, 15)$', is_correct: false },
      { option_key: 'C', content_vi: '$I(4; 3)$', content_en: '$I(4, 3)$', is_correct: false },
      { option_key: 'D', content_vi: '$I(2; 3)$', content_en: '$I(2, 3)$', is_correct: false },
    ],
    solution_vi: '$x_I = 2, y_I = -1 \\implies I(2; -1)$.',
    solution_en: 'Vertex $I(2, -1)$.',
    correct_answer: 'A',
    math_skill: 'Đỉnh Parabol',
    english_skill: 'Parabola vertex',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
];

// =========================================================================
// HELPER: LẤY CÂU HỎI THEO BÀI HỌC VỚI ĐỘ CHÍNH XÁC CAO NHẤT
// =========================================================================
export function getQuestionsForLesson(lessonId: string, topicId?: string): Question[] {
  if (topicId) {
    const topicMatches = FULL_QUESTION_BANK.filter((q) => q.topic_id === topicId);
    if (topicMatches.length > 0) return topicMatches;
  }

  if (lessonId) {
    const lessonMatches = FULL_QUESTION_BANK.filter((q) => q.id && q.id.includes(lessonId.replace('les-', 'q-')));
    if (lessonMatches.length > 0) return lessonMatches;
  }

  const key = topicId || lessonId;
  if (key.includes('11-7') || key.includes('11-12')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-11-7-1');
    if (matches.length > 0) return matches;
  }
  if (key.includes('11-6') || key.includes('11-11')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-11-6-1');
    if (matches.length > 0) return matches;
  }
  if (key.includes('11-2-2') || key.includes('11-6')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-11-2-2');
    if (matches.length > 0) return matches;
  }
  if (key.includes('11-2-3') || key.includes('11-7')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-11-2-3');
    if (matches.length > 0) return matches;
  }
  if (key.includes('11-2-1') || key.includes('11-5')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-11-2-1');
    if (matches.length > 0) return matches;
  }
  if (key.includes('12-2') || key.includes('12-6') || key.includes('12-7') || key.includes('12-8')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.startsWith('top-12-2'));
    if (matches.length > 0) return matches;
  }
  if (key.includes('12-1-3')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-12-1-3');
    if (matches.length > 0) return matches;
  }
  if (key.includes('12-1-2')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-12-1-2');
    if (matches.length > 0) return matches;
  }
  if (key.includes('12-1-1')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-12-1-1');
    if (matches.length > 0) return matches;
  }
  if (key.includes('10-1')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-10-1-1');
    if (matches.length > 0) return matches;
  }
  if (key.includes('10-6')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-10-6-1');
    if (matches.length > 0) return matches;
  }

  return FULL_QUESTION_BANK.slice(0, 10);
}

// =========================================================================
// HELPER: LẤY BÀI TẬP MẪU THEO BÀI HỌC
// =========================================================================
export function getWorkedExamplesForLesson(lessonId: string): WorkedExample[] {
  if (DEFAULT_WORKED_EXAMPLES[lessonId] && DEFAULT_WORKED_EXAMPLES[lessonId].length > 0) {
    return DEFAULT_WORKED_EXAMPLES[lessonId];
  }

  if (lessonId.includes('11-7')) return DEFAULT_WORKED_EXAMPLES['les-11-7-1'] || [];
  if (lessonId.includes('11-6')) return DEFAULT_WORKED_EXAMPLES['les-11-6-1'] || [];
  if (lessonId.includes('11-2-1')) return DEFAULT_WORKED_EXAMPLES['les-11-2-1'] || [];
  if (lessonId.includes('11-2-2')) return DEFAULT_WORKED_EXAMPLES['les-11-2-2'] || [];
  if (lessonId.includes('11-2-3')) return DEFAULT_WORKED_EXAMPLES['les-11-2-3'] || [];
  if (lessonId.includes('12-2-1')) return DEFAULT_WORKED_EXAMPLES['les-12-2-1'] || [];
  if (lessonId.includes('12-2-2')) return DEFAULT_WORKED_EXAMPLES['les-12-2-2'] || [];
  if (lessonId.includes('12-2-3')) return DEFAULT_WORKED_EXAMPLES['les-12-2-3'] || [];
  if (lessonId.includes('12-1-1')) return DEFAULT_WORKED_EXAMPLES['les-12-1-1'] || [];
  if (lessonId.includes('12-1-2')) return DEFAULT_WORKED_EXAMPLES['les-12-1-2'] || [];
  if (lessonId.includes('12-1-3')) return DEFAULT_WORKED_EXAMPLES['les-12-1-3'] || [];
  if (lessonId.includes('10-1')) return DEFAULT_WORKED_EXAMPLES['les-10-1-1'] || [];
  if (lessonId.includes('10-6')) return DEFAULT_WORKED_EXAMPLES['les-10-6-1'] || [];

  return DEFAULT_WORKED_EXAMPLES['les-12-1-1'] || [];
}
