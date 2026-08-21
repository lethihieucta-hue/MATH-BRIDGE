// Comprehensive Bilingual Curriculum Data Service for MATH-BRIDGE
// Standard Curriculum: "Bộ Sách Kết Nối Tri Thức Với Cuộc Sống" (GDPT 2018) - Toán 10, 11, 12.

import {
  Grade,
  Chapter,
  Topic,
  VocabularyItem,
  SentencePattern,
  Lesson,
  Question,
  Test,
  UserProfile,
  MeiScore,
  PracticeAttempt,
  TestAttempt,
  MathType,
  WorkedExample,
} from '../types';

const DB_KEY = 'math_bridge_client_db_v6';

export const INITIAL_DATA = {
  profiles: [
    {
      id: 'usr-student-1',
      full_name: 'Nguyễn Văn An',
      email: 'student@mathbridge.edu.vn',
      role: 'student',
      school_id: 'sch-1',
      school_name: 'THPT Châu Thành A',
      grade_id: 12,
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      current_level: 2,
      class_code: 'MB12A1',
      xp: 680,
      streak_days: 7,
      created_at: new Date().toISOString(),
    },
    {
      id: 'usr-teacher-1',
      full_name: 'Cô Lê Thị Hiếu',
      email: 'teacher@mathbridge.edu.vn',
      role: 'teacher',
      school_id: 'sch-1',
      school_name: 'THPT Châu Thành A',
      avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
      created_at: new Date().toISOString(),
    },
  ],
  grades: [
    { id: 10, name: 'Toán 10 - Kết Nối Tri Thức', order_index: 1 },
    { id: 11, name: 'Toán 11 - Kết Nối Tri Thức', order_index: 2 },
    { id: 12, name: 'Toán 12 - Kết Nối Tri Thức', order_index: 3 },
  ],

  // =========================================================================
  // CHƯƠNG TRÌNH TOÁN THPT KẾT NỐI TRI THỨC (GDPT 2018)
  // =========================================================================
  chapters: [
    // --- LỚP 12 (6 Chương chuẩn KNTT) ---
    {
      id: 'chap-12-1',
      grade_id: 12,
      name_vi: 'Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số',
      name_en: 'Applications of Derivatives to Function Analysis and Curve Sketching',
      description: 'Tính đơn điệu, cực trị, GTLN-GTNN, tiệm cận và khảo sát sự biến thiên của hàm số',
      order_index: 1,
    },
    {
      id: 'chap-12-2',
      grade_id: 12,
      name_vi: 'Vectơ và hệ trục toạ độ trong không gian',
      name_en: 'Vectors and Coordinate Systems in 3D Space',
      description: 'Vectơ trong không gian, hệ toạ độ Oxyz và các phép toán toạ độ',
      order_index: 2,
    },
    {
      id: 'chap-12-3',
      grade_id: 12,
      name_vi: 'Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm',
      name_en: 'Measures of Dispersion for Grouped Data',
      description: 'Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn',
      order_index: 3,
    },
    {
      id: 'chap-12-4',
      grade_id: 12,
      name_vi: 'Nguyên hàm và tích phân',
      name_en: 'Antiderivatives and Definite Integrals',
      description: 'Nguyên hàm, tích phân xác định và ứng dụng hình học tính diện tích, thể tích',
      order_index: 4,
    },
    {
      id: 'chap-12-5',
      grade_id: 12,
      name_vi: 'Phương pháp toạ độ trong không gian',
      name_en: 'Coordinate Geometry Methods in Space',
      description: 'Phương trình mặt phẳng, phương trình đường thẳng và phương trình mặt cầu',
      order_index: 5,
    },
    {
      id: 'chap-12-6',
      grade_id: 12,
      name_vi: 'Xác suất có điều kiện',
      name_en: 'Conditional Probability and Bayes Formula',
      description: 'Xác suất có điều kiện, công thức xác suất toàn phần và công thức Bayes',
      order_index: 6,
    },

    // --- LỚP 11 (8 Chương chuẩn KNTT) ---
    {
      id: 'chap-11-1',
      grade_id: 11,
      name_vi: 'Hàm số lượng giác và phương trình lượng giác',
      name_en: 'Trigonometric Functions and Equations',
      description: 'Góc lượng giác, các hàm số lượng giác và phương trình lượng giác cơ bản',
      order_index: 1,
    },
    {
      id: 'chap-11-2',
      grade_id: 11,
      name_vi: 'Dãy số. Cấp số cộng và cấp số nhân',
      name_en: 'Sequences, Arithmetic and Geometric Progressions',
      description: 'Số hạng tổng quát, công sai, công bội và tổng n số hạng đầu',
      order_index: 2,
    },
    {
      id: 'chap-11-3',
      grade_id: 11,
      name_vi: 'Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm',
      name_en: 'Measures of Central Tendency for Grouped Data',
      description: 'Số trung bình, trung vị, tứ phân vị và mốt của mẫu ghép nhóm',
      order_index: 3,
    },
    {
      id: 'chap-11-4',
      grade_id: 11,
      name_vi: 'Quan hệ song song trong không gian',
      name_en: 'Parallel Relationships in 3D Space',
      description: 'Đường thẳng và mặt phẳng song song, hai mặt phẳng song song',
      order_index: 4,
    },
    {
      id: 'chap-11-5',
      grade_id: 11,
      name_vi: 'Giới hạn. Hàm số liên tục',
      name_en: 'Limits and Continuous Functions',
      description: 'Giới hạn dãy số, giới hạn hàm số và tính liên tục của hàm số',
      order_index: 5,
    },
    {
      id: 'chap-11-6',
      grade_id: 11,
      name_vi: 'Hàm số mũ và hàm số lôgarit',
      name_en: 'Exponential and Logarithmic Functions',
      description: 'Lũy thừa, lôgarit và phương trình mũ, lôgarit',
      order_index: 6,
    },
    {
      id: 'chap-11-7',
      grade_id: 11,
      name_vi: 'Đạo hàm và tiếp tuyến',
      name_en: 'Derivatives and Tangent Lines',
      description: 'Định nghĩa đạo hàm, quy tắc tính và phương trình tiếp tuyến',
      order_index: 7,
    },
    {
      id: 'chap-11-8',
      grade_id: 11,
      name_vi: 'Quan hệ vuông góc trong không gian',
      name_en: 'Orthogonality in Spatial Geometry',
      description: 'Đường thẳng vuông góc mặt phẳng, hai mặt phẳng vuông góc',
      order_index: 8,
    },

    // --- LỚP 10 (7 Chương chuẩn KNTT) ---
    {
      id: 'chap-10-1',
      grade_id: 10,
      name_vi: 'Mệnh đề và tập hợp',
      name_en: 'Propositions and Sets',
      description: 'Mệnh đề toán học, phủ định và các phép toán trên tập hợp',
      order_index: 1,
    },
    {
      id: 'chap-10-2',
      grade_id: 10,
      name_vi: 'Bất phương trình và hệ bất phương trình bậc nhất hai ẩn',
      name_en: 'Linear Inequalities and Systems in Two Variables',
      description: 'Miền nghiệm trên mặt phẳng toạ độ Oxy',
      order_index: 2,
    },
    {
      id: 'chap-10-3',
      grade_id: 10,
      name_vi: 'Hệ thức lượng trong tam giác',
      name_en: 'Trigonometric Relations in Triangles',
      description: 'Định lý Cosin, định lý Sin và công thức tính diện tích tam giác',
      order_index: 3,
    },
    {
      id: 'chap-10-4',
      grade_id: 10,
      name_vi: 'Vectơ và các phép toán',
      name_en: 'Vectors and Operations',
      description: 'Tổng, hiệu vectơ và tích vô hướng của hai vectơ',
      order_index: 4,
    },
    {
      id: 'chap-10-5',
      grade_id: 10,
      name_vi: 'Các số đặc trưng đo xu thế trung tâm và mức độ phân tán',
      name_en: 'Measures of Central Tendency and Dispersion for Ungrouped Data',
      description: 'Số gần đúng, sai số, số trung bình, phương sai và độ lệch chuẩn',
      order_index: 5,
    },
    {
      id: 'chap-10-6',
      grade_id: 10,
      name_vi: 'Hàm số, đồ thị và ứng dụng (Hàm số bậc hai)',
      name_en: 'Functions, Graphs and Applications (Quadratic Functions)',
      description: 'Tập xác định, hàm số bậc hai, dấu tam thức bậc hai và parabol',
      order_index: 6,
    },
    {
      id: 'chap-10-7',
      grade_id: 10,
      name_vi: 'Phương pháp toạ độ trong mặt phẳng',
      name_en: 'Coordinate Geometry in the Plane',
      description: 'Phương trình đường thẳng, đường tròn và ba đường conic',
      order_index: 7,
    },
  ],

  // =========================================================================
  // DANH SÁCH BÀI HỌC VÀ DẠNG TOÁN CHI TIẾT
  // =========================================================================
  lessons: [
    // -----------------------------------------------------------------------
    // LỚP 12: CHƯƠNG I - ỨNG DỤNG ĐẠO HÀM
    // -----------------------------------------------------------------------
    {
      id: 'les-12-1-1',
      chapter_id: 'chap-12-1',
      topic_id: 'top-12-1-1',
      title_vi: 'Bài 1. Tính đơn điệu và cực trị của hàm số',
      title_en: 'Lesson 1. Monotonicity and Extrema of Functions',
      order_index: 1,
      learning_objectives: [
        'Hiểu và vận dụng dấu của đạo hàm $f\'(x)$ để xét tính đồng biến, nghịch biến',
        'Xác định điểm cực đại (Local Maximum) và điểm cực tiểu (Local Minimum)',
        'Lập bảng biến thiên và giải bài toán chứa tham số $m$',
      ],
      vocabulary_list: ['Strictly Increasing', 'Strictly Decreasing', 'Local Extrema', 'Derivative', 'Variation Table'],
      key_concepts_vi: `• $f'(x) > 0$ trên khoảng $K$ thì $f$ đồng biến trên $K$; $f'(x) < 0$ thì $f$ nghịch biến trên $K$.\n• $x_0$ là điểm cực trị nếu $f'(x)$ đổi dấu khi $x$ đi qua $x_0$.\n• Quy tắc: Tìm tập xác định $\\to$ Tính đạo hàm $f'(x) \\to$ Tìm nghiệm $f'(x) = 0 \\to$ Lập bảng biến thiên $\\to$ Kết luận.`,
      key_concepts_en: `• If $f'(x) > 0$ on interval $K$, then $f$ is strictly increasing on $K$; if $f'(x) < 0$, $f$ is strictly decreasing.\n• $x_0$ is an extremum point if $f'(x)$ changes sign as $x$ passes through $x_0$.\n• Standard Method: Find Domain $\\to$ Compute $f'(x) \\to$ Solve $f'(x) = 0 \\to$ Construct variation table $\\to$ Conclude.`,
      formulas: [
        "f'(x) > 0 \\implies \\text{Hàm số đồng biến (Increasing)}",
        "f'(x) < 0 \\implies \\text{Hàm số nghịch biến (Decreasing)}",
        "f'(x_0) = 0 \\land f''(x_0) < 0 \\implies x_0 \\text{ là điểm cực đại (Local Max)}",
        "f'(x_0) = 0 \\land f''(x_0) > 0 \\implies x_0 \\text{ là điểm cực tiểu (Local Min)}",
      ],
      types: [
        {
          id: 'type-12-1-1',
          lesson_id: 'les-12-1-1',
          code: 'Dạng 1',
          title_vi: 'Tìm khoảng đơn điệu của hàm số',
          title_en: 'Determine Intervals of Increase and Decrease',
          order_index: 1,
          sample_count_tn: 2,
          sample_count_ds: 1,
          sample_count_tln: 1,
          sample_count_tl: 1,
        },
        {
          id: 'type-12-1-2',
          lesson_id: 'les-12-1-1',
          code: 'Dạng 2',
          title_vi: 'Tìm cực trị của hàm số',
          title_en: 'Find Local Extrema of Functions',
          order_index: 2,
          sample_count_tn: 2,
          sample_count_ds: 1,
          sample_count_tln: 1,
          sample_count_tl: 1,
        },
        {
          id: 'type-12-1-3',
          lesson_id: 'les-12-1-1',
          code: 'Dạng 3',
          title_vi: 'Đọc bảng biến thiên, tìm tham số m',
          title_en: 'Interpret Variation Tables and Find Parameter m',
          order_index: 3,
          sample_count_tn: 2,
          sample_count_ds: 1,
          sample_count_tln: 1,
          sample_count_tl: 1,
        },
      ],
      worked_examples: [
        {
          id: 'we-12-1-1',
          type_id: 'type-12-1-1',
          type_code: 'Dạng 1. Tìm khoảng đơn điệu của hàm số',
          title_vi: 'Ví dụ 1: Xét tính đơn điệu của hàm số bậc ba',
          title_en: 'Example 1: Monotonicity of a Cubic Polynomial',
          problem_vi: 'Cho hàm số $y = x^3 - 3x^2 - 45x - 3$.\na) Tìm các khoảng đơn điệu của hàm số.\nb) Tìm cực trị của hàm số và lập bảng biến thiên.',
          problem_en: 'Given the function $y = x^3 - 3x^2 - 45x - 3$.\na) Find the intervals of increase and decrease of the function.\nb) Find the local extrema and sketch the variation table.',
          solution_vi: 'a) TXĐ: $D = \\mathbb{R}$. Đạo hàm: $y\' = 3x^2 - 6x - 45 = 3(x^2 - 2x - 15) = 3(x + 3)(x - 5)$. Cho $y\' = 0 \\iff x = -3$ hoặc $x = 5$. Hàm số đồng biến trên $(-\\infty; -3)$ và $(5; +\\infty)$; nghịch biến trên $(-3; 5)$.\nb) Tại $x = -3 \\implies y_{CĐ} = 78$; tại $x = 5 \\implies y_{CT} = -178$.',
          solution_en: 'a) Domain $D = \\mathbb{R}$. Derivative: $y\' = 3x^2 - 6x - 45 = 3(x + 3)(x - 5)$. Set $y\' = 0 \\iff x = -3$ or $x = 5$. The function is strictly increasing on $(-\\infty, -3)$ and $(5, +\\infty)$, and decreasing on $(-3, 5)$.\nb) Local maximum at $x = -3, y = 78$; local minimum at $x = 5, y = -178$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'les-12-1-2',
      chapter_id: 'chap-12-1',
      topic_id: 'top-12-1-2',
      title_vi: 'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      title_en: 'Lesson 2. Maximum and Minimum Values of Functions',
      order_index: 2,
      learning_objectives: [
        'Tính GTLN (Global Max) và GTNN (Global Min) trên đoạn $[a, b]$',
        'Giải quyết bài toán thực tế tối ưu hóa hình học và kinh tế',
      ],
      vocabulary_list: ['Maximum Value', 'Minimum Value', 'Closed Interval', 'Optimization'],
      key_concepts_vi: '• Để tìm GTLN, GTNN của hàm liên tục trên $[a, b]$: Tính $f(a), f(b)$ và các $f(x_i)$ với $x_i \\in (a, b)$ là nghiệm $f\'(x) = 0$.\n• Số lớn nhất là GTLN ($\\max$), số bé nhất là GTNN ($\\min$).',
      key_concepts_en: '• To find max/min on $[a, b]$: Evaluate $f(a), f(b)$ and $f(x_i)$ where $f\'(x_i) = 0$.\n• The greatest is the absolute maximum, the smallest is the absolute minimum.',
      formulas: [
        "\\max_{[a, b]} f(x) = \\max\\{f(a), f(b), f(x_1), \\dots\\}",
        "\\min_{[a, b]} f(x) = \\min\\{f(a), f(b), f(x_1), \\dots\\}",
      ],
      types: [
        {
          id: 'type-12-2-1',
          lesson_id: 'les-12-1-2',
          code: 'Dạng 1',
          title_vi: 'Tìm GTLN - GTNN trên một đoạn [a, b]',
          title_en: 'Find Max and Min on a Closed Interval [a, b]',
          order_index: 1,
        },
        {
          id: 'type-12-2-2',
          lesson_id: 'les-12-1-2',
          code: 'Dạng 2',
          title_vi: 'Tìm GTLN - GTNN trên khoảng hoặc tập xác định',
          title_en: 'Find Max and Min on Open Intervals or Domain',
          order_index: 2,
        },
      ],
      worked_examples: [
        {
          id: 'we-12-2-1',
          type_id: 'type-12-2-1',
          type_code: 'Dạng 1. Tìm GTLN - GTNN trên đoạn [a, b]',
          title_vi: 'Ví dụ 1: Tìm GTLN và GTNN của hàm đa thức trên đoạn',
          title_en: 'Example 1: Find Max/Min on Interval',
          problem_vi: 'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x) = x^3 - 3x^2 - 9x + 35$ trên đoạn $[-4; 4]$.',
          problem_en: 'Find the absolute maximum and minimum values of $f(x) = x^3 - 3x^2 - 9x + 35$ on the interval $[-4, 4]$.',
          solution_vi: 'Ta có $f\'(x) = 3x^2 - 6x - 9 = 3(x + 1)(x - 3)$. Trên khoảng $(-4; 4)$, $f\'(x) = 0 \\iff x = -1$ hoặc $x = 3$.\nTính các giá trị: $f(-4) = -41$, $f(-1) = 40$, $f(3) = 8$, $f(4) = 15$.\nVậy $\\max_{[-4; 4]} f(x) = 40$ tại $x = -1$; $\\min_{[-4; 4]} f(x) = -41$ tại $x = -4$.',
          solution_en: '$f\'(x) = 3x^2 - 6x - 9 = 0 \\iff x = -1$ or $x = 3$. Values: $f(-4) = -41$, $f(-1) = 40$, $f(3) = 8$, $f(4) = 15$. Hence $\\max = 40$ at $x = -1$, $\\min = -41$ at $x = -4$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'les-12-1-3',
      chapter_id: 'chap-12-1',
      topic_id: 'top-12-1-3',
      title_vi: 'Bài 3. Đường tiệm cận của đồ thị hàm số',
      title_en: 'Lesson 3. Asymptotes of Function Graphs',
      order_index: 3,
      learning_objectives: [
        'Xác định tiệm cận đứng (Vertical Asymptote) và tiệm cận ngang (Horizontal Asymptote)',
        'Nhận biết tiệm cận xiên (Oblique Asymptote) của hàm phân thức bậc 2 trên bậc 1',
      ],
      vocabulary_list: ['Vertical Asymptote', 'Horizontal Asymptote', 'Oblique Asymptote', 'Rational Function', 'Limit at Infinity'],
      key_concepts_vi: `• Đường thẳng $x = x_0$ là tiệm cận đứng (TCĐ) nếu ít nhất một trong các giới hạn $\\lim_{x \\to x_0^+} f(x) = \\pm\\infty$ hoặc $\\lim_{x \\to x_0^-} f(x) = \\pm\\infty$.\n• Đường thẳng $y = y_0$ là tiệm cận ngang (TCN) nếu $\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$.\n• Đường thẳng $y = ax + b$ ($a \\neq 0$) là tiệm cận xiên (TCX) nếu $\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$.`,
      key_concepts_en: `• The vertical line $x = x_0$ is a Vertical Asymptote if $\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty$.\n• The horizontal line $y = y_0$ is a Horizontal Asymptote if $\\lim_{x \\to \\pm\\infty} f(x) = y_0$.\n• The line $y = ax + b$ ($a \\neq 0$) is an Oblique Asymptote if $\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$.`,
      formulas: [
        "\\lim_{x \\to x_0^+} f(x) = \\pm\\infty \\implies x = x_0 \\text{ (Tiệm cận đứng - Vertical Asymptote)}",
        "\\lim_{x \\to \\pm\\infty} f(x) = y_0 \\implies y = y_0 \\text{ (Tiệm cận ngang - Horizontal Asymptote)}",
        "y = \\frac{ax+b}{cx+d} \\implies \\text{TCĐ: } x = -\\frac{d}{c}; \\quad \\text{TCN: } y = \\frac{a}{c}",
        "y = \\frac{ax^2+bx+c}{px+q} = mx+n + \\frac{r}{px+q} \\implies \\text{TCX: } y = mx + n",
      ],
      types: [
        {
          id: 'type-12-3-1',
          lesson_id: 'les-12-1-3',
          code: 'Dạng 1',
          title_vi: 'Tìm tiệm cận đứng và tiệm cận ngang của hàm phân thức bậc 1 / bậc 1',
          title_en: 'Find Vertical and Horizontal Asymptotes of Linear Rational Functions',
          order_index: 1,
          sample_count_tn: 2,
          sample_count_ds: 1,
          sample_count_tln: 1,
          sample_count_tl: 1,
        },
        {
          id: 'type-12-3-2',
          lesson_id: 'les-12-1-3',
          code: 'Dạng 2',
          title_vi: 'Tìm tiệm cận xiên của hàm phân thức bậc 2 / bậc 1',
          title_en: 'Find Oblique Asymptotes of Quadratic-over-Linear Functions',
          order_index: 2,
          sample_count_tn: 2,
          sample_count_ds: 1,
          sample_count_tln: 1,
          sample_count_tl: 1,
        },
        {
          id: 'type-12-3-3',
          lesson_id: 'les-12-1-3',
          code: 'Dạng 3',
          title_vi: 'Tìm tham số m để đồ thị hàm số có số tiệm cận cho trước',
          title_en: 'Find Parameter m for Given Number of Asymptotes',
          order_index: 3,
          sample_count_tn: 2,
          sample_count_ds: 1,
          sample_count_tln: 1,
          sample_count_tl: 1,
        },
      ],
      worked_examples: [
        {
          id: 'we-12-3-1',
          type_id: 'type-12-3-1',
          type_code: 'Dạng 1. Tìm tiệm cận đứng và tiệm cận ngang',
          title_vi: 'Ví dụ 1: Tìm các đường tiệm cận của hàm số phân thức bậc nhất',
          title_en: 'Example 1: Asymptotes of Linear Rational Function',
          problem_vi: 'Tìm các đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$.',
          problem_en: 'Find the vertical and horizontal asymptotes of the curve $y = \\frac{3x - 1}{x + 2}$.',
          solution_vi: '1. Tiệm cận đứng: Ta có $\\lim_{x \\to -2^+} \\frac{3x - 1}{x + 2} = -\\infty$ (vì tử số $\\to -7 < 0$, mẫu số $\\to 0^+$). Do đó đường thẳng $x = -2$ là tiệm cận đứng.\n2. Tiệm cận ngang: Ta có $\\lim_{x \\to \\pm\\infty} \\frac{3x - 1}{x + 2} = \\lim_{x \\to \\pm\\infty} \\frac{3 - 1/x}{1 + 2/x} = 3$. Do đó đường thẳng $y = 3$ là tiệm cận ngang.',
          solution_en: '1. Vertical Asymptote: $\\lim_{x \\to -2^+} \\frac{3x - 1}{x + 2} = -\\infty \\implies x = -2$ is the vertical asymptote.\n2. Horizontal Asymptote: $\\lim_{x \\to \\pm\\infty} \\frac{3x - 1}{x + 2} = 3 \\implies y = 3$ is the horizontal asymptote.',
        },
        {
          id: 'we-12-3-2',
          type_id: 'type-12-3-2',
          type_code: 'Dạng 2. Tìm tiệm cận xiên',
          title_vi: 'Ví dụ 2: Tìm tiệm cận xiên của đồ thị hàm số phân thức bậc 2 / bậc 1',
          title_en: 'Example 2: Oblique Asymptote of Rational Function',
          problem_vi: 'Tìm tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 2x + 3}{x - 1}$.',
          problem_en: 'Find the oblique asymptote of the graph of $y = \\frac{x^2 - 2x + 3}{x - 1}$.',
          solution_vi: 'Chia đa thức: $y = \\frac{x^2 - 2x + 3}{x - 1} = x - 1 + \\frac{2}{x - 1}$.\nTa có $\\lim_{x \\to \\pm\\infty} [y - (x - 1)] = \\lim_{x \\to \\pm\\infty} \\frac{2}{x - 1} = 0$.\nVậy đường thẳng $y = x - 1$ là tiệm cận xiên của đồ thị hàm số.',
          solution_en: 'By polynomial division: $y = x - 1 + \\frac{2}{x - 1}$. Since $\\lim_{x \\to \\pm\\infty} [y - (x - 1)] = 0$, the line $y = x - 1$ is the oblique asymptote.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'les-12-1-4',
      chapter_id: 'chap-12-1',
      topic_id: 'top-12-1-4',
      title_vi: 'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      title_en: 'Lesson 4. Curve Sketching and Graphing Functions',
      order_index: 4,
      learning_objectives: [
        'Khảo sát hoàn chỉnh hàm bậc ba và hàm phân thức',
        'Biện luận số nghiệm của phương trình bằng đồ thị',
      ],
      vocabulary_list: ['Curve Sketching', 'Inflection Point', 'Symmetry Center', 'Number of Roots'],
      key_concepts_vi: 'Sơ đồ khảo sát: TXĐ $\\to$ Chiều biến thiên, cực trị, tiệm cận $\\to$ Bảng biến thiên $\\to$ Điểm đặc biệt $\\to$ Vẽ đồ thị.',
      key_concepts_en: 'Graphing procedure: Domain $\\to$ Monotonicity, Extrema, Asymptotes $\\to$ Variation Table $\\to$ Plot key points $\\to$ Sketch curve.',
      formulas: [],
      types: [
        {
          id: 'type-12-4-1',
          lesson_id: 'les-12-1-4',
          code: 'Dạng 1',
          title_vi: 'Khảo sát và vẽ đồ thị hàm số bậc ba',
          title_en: 'Graph Cubic Polynomial Functions',
          order_index: 1,
        },
      ],
      worked_examples: [],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'les-12-1-5',
      chapter_id: 'chap-12-1',
      topic_id: 'top-12-1-5',
      title_vi: 'Bài 5. Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn',
      title_en: 'Lesson 5. Practical Optimization with Derivatives',
      order_index: 5,
      learning_objectives: [
        'Mô hình hóa bài toán thực tế thành hàm số một biến',
        'Tìm điểm tối ưu hóa chi phí, dung tích và vận tốc',
      ],
      vocabulary_list: ['Optimization Problem', 'Cost Function', 'Maximum Volume'],
      key_concepts_vi: 'Mô hình hóa toán học bài toán tối ưu bằng cách lập hàm mục tiêu $f(x)$ và tìm GTLN/GTNN trên miền xác định thực tế.',
      key_concepts_en: 'Mathematical modeling of real-world optimization problems by setting objective function $f(x)$ and finding extrema.',
      formulas: [],
      types: [],
      worked_examples: [],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // -----------------------------------------------------------------------
    // LỚP 11: CHƯƠNG I - HÀM SỐ LƯỢNG GIÁC & PHƯƠNG TRÌNH LƯỢNG GIÁC
    // -----------------------------------------------------------------------
    {
      id: 'les-11-1-1',
      chapter_id: 'chap-11-1',
      topic_id: 'top-11-1-1',
      title_vi: 'Bài 1. Giá trị lượng giác của góc lượng giác',
      title_en: 'Lesson 1. Trigonometric Values of Angles',
      order_index: 1,
      learning_objectives: [
        'Hiểu khái niệm góc lượng giác, đơn vị radian và đường tròn lượng giác',
        'Xác định $\\sin \\alpha, \\cos \\alpha, \\tan \\alpha, \\cot \\alpha$ và các hệ thức cơ bản',
      ],
      vocabulary_list: ['Trigonometric Values', 'Radian', 'Unit Circle', 'Sine', 'Cosine', 'Tangent'],
      key_concepts_vi: `• Đường tròn lượng giác là đường tròn định hướng tâm $O$, bán kính $R = 1$.\n• $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$, $\\tan \\alpha \\cdot \\cot \\alpha = 1$.\n• $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$ (với $\\alpha \\neq \\frac{\\pi}{2} + k\\pi$), $1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$ (với $\\alpha \\neq k\\pi$).`,
      key_concepts_en: `• The trigonometric unit circle has center $O$ and radius $R = 1$.\n• Fundamental identity: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$, $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$.\n• $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$, $1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$.`,
      formulas: [
        "\\sin^2 \\alpha + \\cos^2 \\alpha = 1",
        "1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}",
        "1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}",
      ],
      types: [
        {
          id: 'type-11-1-1',
          lesson_id: 'les-11-1-1',
          code: 'Dạng 1',
          title_vi: 'Tính giá trị lượng giác của một góc khi biết một giá trị',
          title_en: 'Calculate Trigonometric Values Given One Value',
          order_index: 1,
          sample_count_tn: 2,
          sample_count_ds: 1,
          sample_count_tln: 1,
          sample_count_tl: 1,
        },
      ],
      worked_examples: [
        {
          id: 'we-11-1-1',
          type_id: 'type-11-1-1',
          type_code: 'Dạng 1. Tính giá trị lượng giác',
          title_vi: 'Ví dụ 1: Tính cosin và tang khi biết sin',
          title_en: 'Example 1: Find Cosine and Tangent Given Sine',
          problem_vi: 'Cho $\\sin \\alpha = \\frac{3}{5}$ với $\\frac{\\pi}{2} < \\alpha < \\pi$. Tính $\\cos \\alpha$ và $\\tan \\alpha$.',
          problem_en: 'Given $\\sin \\alpha = \\frac{3}{5}$ with $\\frac{\\pi}{2} < \\alpha < \\pi$. Find $\\cos \\alpha$ and $\\tan \\alpha$.',
          solution_vi: 'Vì $\\sin^2 \\alpha + \\cos^2 \\alpha = 1 \\implies \\cos^2 \\alpha = 1 - \\left(\\frac{3}{5}\\right)^2 = \\frac{16}{25}$.\nDo $\\frac{\\pi}{2} < \\alpha < \\pi$ (góc phần tư thứ II) nên $\\cos \\alpha < 0 \\implies \\cos \\alpha = -\\frac{4}{5}$.\nKhi đó $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{3/5}{-4/5} = -\\frac{3}{4}$.',
          solution_en: '$\\cos^2 \\alpha = 1 - (3/5)^2 = 16/25$. Since $\\alpha$ is in quadrant II, $\\cos \\alpha < 0 \\implies \\cos \\alpha = -4/5$, and $\\tan \\alpha = -3/4$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'les-11-1-2',
      chapter_id: 'chap-11-1',
      topic_id: 'top-11-1-2',
      title_vi: 'Bài 2. Công thức lượng giác',
      title_en: 'Lesson 2. Trigonometric Formulas and Identities',
      order_index: 2,
      learning_objectives: [
        'Thuộc và vận dụng công thức cộng, công thức nhân đôi, biến đổi tổng thành tích',
      ],
      vocabulary_list: ['Addition Formulas', 'Double-Angle Formulas', 'Sum-to-Product Identities'],
      key_concepts_vi: '• Công thức cộng: $\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$, $\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b$.\n• Nhân đôi: $\\sin 2a = 2\\sin a \\cos a$, $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$.',
      key_concepts_en: '• Addition: $\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$, $\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b$.\n• Double angle: $\\sin 2a = 2\\sin a \\cos a$, $\\cos 2a = \\cos^2 a - \\sin^2 a$.',
      formulas: [
        "\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b",
        "\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b",
        "\\sin 2a = 2\\sin a \\cos a",
        "\\cos 2a = 2\\cos^2 a - 1",
      ],
      types: [],
      worked_examples: [],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'les-11-2-1',
      chapter_id: 'chap-11-2',
      topic_id: 'top-11-2-1',
      title_vi: 'Bài 5. Dãy số',
      title_en: 'Lesson 5. Numerical Sequences',
      order_index: 1,
      learning_objectives: ['Nhận biết dãy số tăng, dãy số giảm, dãy số bị chặn'],
      vocabulary_list: ['Sequence', 'Increasing Sequence', 'Bounded Sequence', 'General Term'],
      key_concepts_vi: '• Dãy số $(u_n)$ là một hàm số xác định trên tập số nguyên dương $\\mathbb{N}^*$.\n• Dãy số tăng nếu $u_{n+1} > u_n$ với mọi $n \\in \\mathbb{N}^*$; dãy số giảm nếu $u_{n+1} < u_n$.',
      key_concepts_en: '• A sequence $(u_n)$ is a function defined on $\\mathbb{N}^*$.\n• Increasing if $u_{n+1} > u_n$; decreasing if $u_{n+1} < u_n$.',
      formulas: [],
      types: [],
      worked_examples: [],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'les-11-2-2',
      chapter_id: 'chap-11-2',
      topic_id: 'top-11-2-2',
      title_vi: 'Bài 6. Cấp số cộng',
      title_en: 'Lesson 6. Arithmetic Progressions',
      order_index: 2,
      learning_objectives: [
        'Nắm vững công sai $d$, số hạng tổng quát $u_n$ và tổng $n$ số hạng đầu $S_n$',
      ],
      vocabulary_list: ['Arithmetic Progression', 'Common Difference', 'Sum of First n Terms'],
      key_concepts_vi: `• Cấp số cộng: $u_{n+1} = u_n + d$ ($d$ là công sai).\n• Số hạng tổng quát: $u_n = u_1 + (n - 1)d$.\n• Tổng $n$ số hạng đầu: $S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}$.`,
      key_concepts_en: `• Arithmetic Progression: $u_{n+1} = u_n + d$ (common difference $d$).\n• General term: $u_n = u_1 + (n - 1)d$.\n• Sum of first $n$ terms: $S_n = \\frac{n(u_1 + u_n)}{2}$.`,
      formulas: [
        "u_n = u_1 + (n - 1)d",
        "S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}",
      ],
      types: [
        {
          id: 'type-11-2-1',
          lesson_id: 'les-11-2-2',
          code: 'Dạng 1',
          title_vi: 'Tìm số hạng đầu, công sai và số hạng thứ n của cấp số cộng',
          title_en: 'Find First Term, Common Difference, and nth Term',
          order_index: 1,
        },
      ],
      worked_examples: [
        {
          id: 'we-11-2-1',
          type_id: 'type-11-2-1',
          type_code: 'Dạng 1. Cấp số cộng',
          title_vi: 'Ví dụ 1: Tìm số hạng tổng quát và tổng 20 số hạng đầu',
          title_en: 'Example 1: Arithmetic Progression Terms and Sum',
          problem_vi: 'Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 4$.\na) Tìm số hạng thứ 10: $u_{10}$.\nb) Tính tổng của 20 số hạng đầu tiên: $S_{20}$.',
          problem_en: 'Given an arithmetic progression with $u_1 = 3$ and $d = 4$.\na) Find $u_{10}$.\nb) Compute $S_{20}$.',
          solution_vi: 'a) Ta có $u_{10} = u_1 + 9d = 3 + 9 \\cdot 4 = 39$.\nb) Tổng 20 số hạng: $S_{20} = \\frac{20 \\cdot [2 \\cdot 3 + (20 - 1) \\cdot 4]}{2} = 10 \\cdot [6 + 76] = 820$.',
          solution_en: 'a) $u_{10} = 3 + 9(4) = 39$.\nb) $S_{20} = \\frac{20[2(3) + 19(4)]}{2} = 820$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // -----------------------------------------------------------------------
    // LỚP 10: CHƯƠNG VI - HÀM SỐ BẬC HAI & ĐỒ THỊ PARABOL
    // -----------------------------------------------------------------------
    {
      id: 'les-10-6-2',
      chapter_id: 'chap-10-6',
      topic_id: 'top-10-6-2',
      title_vi: 'Bài 16. Hàm số bậc hai & Đồ thị Parabol',
      title_en: 'Lesson 16. Quadratic Functions & Parabola Graph',
      order_index: 2,
      learning_objectives: [
        'Nắm vững dạng $y = ax^2 + bx + c$ ($a \\neq 0$)',
        'Xác định toạ độ đỉnh $I(-b/2a, -\\Delta/4a)$ và trục đối xứng',
      ],
      vocabulary_list: ['Quadratic Function', 'Parabola', 'Vertex', 'Axis of Symmetry'],
      key_concepts_vi: '• Hàm số bậc hai $y = ax^2 + bx + c$ ($a \\neq 0$) có đồ thị là parabol có đỉnh $I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right)$ và trục đối xứng $x = -\\frac{b}{2a}$.\n• Bề lõm quay lên nếu $a > 0$, quay xuống nếu $a < 0$.',
      key_concepts_en: '• The quadratic function $y = ax^2 + bx + c$ ($a \\neq 0$) graph is a parabola with vertex $I(-b/2a, -\\Delta/4a)$ and axis of symmetry $x = -b/2a$.\n• Concave up if $a > 0$, concave down if $a < 0$.',
      formulas: [
        'y = ax^2 + bx + c \\quad (a \\neq 0)',
        'I\\left(-\\frac{b}{2a}, -\\frac{\\Delta}{4a}\\right)',
        'x = -\\frac{b}{2a}',
      ],
      types: [
        {
          id: 'type-10-1-1',
          lesson_id: 'les-10-6-2',
          code: 'Dạng 1',
          title_vi: 'Xác định toạ độ đỉnh và trục đối xứng của parabol',
          title_en: 'Find Vertex and Axis of Symmetry',
          order_index: 1,
          sample_count_tn: 2,
          sample_count_ds: 1,
          sample_count_tln: 1,
          sample_count_tl: 1,
        },
      ],
      worked_examples: [
        {
          id: 'we-10-1-1',
          type_id: 'type-10-1-1',
          type_code: 'Dạng 1. Toạ độ đỉnh Parabol',
          title_vi: 'Ví dụ 1: Tìm toạ độ đỉnh Parabol',
          title_en: 'Example 1: Find Vertex Coordinates',
          problem_vi: 'Tìm toạ độ đỉnh $I$ của parabol $y = x^2 - 4x + 3$.',
          problem_en: 'Find the coordinates of the vertex $I$ of $y = x^2 - 4x + 3$.',
          solution_vi: 'Hoành độ: $x_I = -(-4)/(2 \\cdot 1) = 2$. Tung độ: $y_I = 2^2 - 4(2) + 3 = -1$. Đỉnh $I(2, -1)$.',
          solution_en: '$x_I = -(-4)/(2 \\cdot 1) = 2$, $y_I = 2^2 - 4(2) + 3 = -1$. Vertex $I(2, -1)$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
  ],

  // =========================================================================
  // BỘ CÂU HỎI LUYỆN TẬP 4 DẠNG THỨC GDPT 2018 (TN, Đ/S, TLN, TL)
  // =========================================================================
  questions: [
    // --- LỚP 12 - BÀI 1: TÍNH ĐƠN ĐIỆU & CỰC TRỊ ---
    // Phần 1: Trắc nghiệm 4 lựa chọn (TN)
    {
      id: 'q-12-1-tn1',
      topic_id: 'top-12-1-1',
      type_id: 'type-12-1-1',
      question_type: 'MCQ',
      format_type: 'TN',
      difficulty: 'EASY',
      language_level: 2,
      question_vi: 'Hàm số $y = -x^3 + 3x^2 - 1$ đồng biến trên khoảng nào dưới đây?',
      question_en: 'On which of the following intervals is the function $y = -x^3 + 3x^2 - 1$ strictly increasing?',
      options: [
        { option_key: 'A', content_vi: '$(0; 2)$', content_en: '$(0, 2)$', is_correct: true },
        { option_key: 'B', content_vi: '$(-\\infty; 0)$', content_en: '$(-\\infty, 0)$', is_correct: false },
        { option_key: 'C', content_vi: '$(2; +\\infty)$', content_en: '$(2, +\\infty)$', is_correct: false },
        { option_key: 'D', content_vi: '$(-\\infty; 2)$', content_en: '$(-\\infty, 2)$', is_correct: false },
      ],
      solution_vi: 'Ta có $y\' = -3x^2 + 6x = -3x(x - 2)$. $y\' > 0 \\iff 0 < x < 2$. Vậy hàm số đồng biến trên khoảng $(0; 2)$.',
      solution_en: '$y\' = -3x^2 + 6x = -3x(x - 2) > 0 \\iff 0 < x < 2$. Thus the function is strictly increasing on $(0, 2)$.',
      correct_answer: 'A',
      math_skill: 'Xét dấu đạo hàm tìm khoảng đồng biến',
      english_skill: 'Strictly increasing interval recognition',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-12-1-tn2',
      topic_id: 'top-12-1-1',
      type_id: 'type-12-1-2',
      question_type: 'MCQ',
      format_type: 'TN',
      difficulty: 'MEDIUM',
      language_level: 2,
      question_vi: 'Điểm cực đại của đồ thị hàm số $y = x^3 - 3x + 2$ là điểm nào?',
      question_en: 'What are the coordinates of the local maximum point of the curve $y = x^3 - 3x + 2$?',
      options: [
        { option_key: 'A', content_vi: '$M(-1; 4)$', content_en: '$M(-1, 4)$', is_correct: true },
        { option_key: 'B', content_vi: '$N(1; 0)$', content_en: '$N(1, 0)$', is_correct: false },
        { option_key: 'C', content_vi: '$P(0; 2)$', content_en: '$P(0, 2)$', is_correct: false },
        { option_key: 'D', content_vi: '$Q(2; 4)$', content_en: '$Q(2, 4)$', is_correct: false },
      ],
      solution_vi: '$y\' = 3x^2 - 3 = 0 \\iff x = \\pm 1$. Tại $x = -1$, $y\'$ đổi dấu từ dương sang âm nên $x = -1$ là điểm cực đại, $y(-1) = 4$. Toạ độ cực đại là $(-1; 4)$.',
      solution_en: '$y\' = 3x^2 - 3 = 0 \\iff x = \\pm 1$. Local maximum occurs at $x = -1$, $y(-1) = 4$. Local maximum point is $(-1, 4)$.',
      correct_answer: 'A',
      math_skill: 'Tìm toạ độ điểm cực trị',
      english_skill: 'Local maximum coordinates',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // Phần 2: Trắc nghiệm Đúng / Sai (Đ/S)
    {
      id: 'q-12-1-ds1',
      topic_id: 'top-12-1-1',
      type_id: 'type-12-1-3',
      question_type: 'TRUE_FALSE',
      format_type: 'DS',
      difficulty: 'MEDIUM',
      language_level: 2,
      question_vi: 'Cho hàm số $y = \\frac{2x - 1}{x + 1}$. Xét tính đúng/sai của các mệnh đề sau:',
      question_en: 'Given the rational function $y = \\frac{2x - 1}{x + 1}$. Determine whether each of the following statements is True (Đ) or False (S):',
      options: [
        { option_key: 'a', content_vi: 'Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.', content_en: 'The domain of the function is $D = \\mathbb{R} \\setminus \\{-1\\}$.', is_correct: true },
        { option_key: 'b', content_vi: 'Đạo hàm của hàm số là $y\' = \\frac{3}{(x + 1)^2}$.', content_en: 'The derivative is $y\' = \\frac{3}{(x + 1)^2}$.', is_correct: true },
        { option_key: 'c', content_vi: 'Hàm số đồng biến trên $\\mathbb{R} \\setminus \\{-1\\}$.', content_en: 'The function is increasing on $\\mathbb{R} \\setminus \\{-1\\}$.', is_correct: false },
        { option_key: 'd', content_vi: 'Hàm số không có điểm cực trị.', content_en: 'The function has no local extrema.', is_correct: true },
      ],
      solution_vi: 'a) Đúng. b) Đúng ($y\' = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0$). c) Sai (phải nói đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$). d) Đúng (đạo hàm luôn dương, không đổi dấu).',
      solution_en: 'a) True. b) True. c) False (must be specified on each interval separately). d) True.',
      correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
      math_skill: 'Khảo sát hàm phân thức bậc nhất / bậc nhất',
      english_skill: 'True / False analysis on rational functions',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // Phần 3: Trắc nghiệm Trả lời ngắn (TLN)
    {
      id: 'q-12-1-tln1',
      topic_id: 'top-12-1-1',
      type_id: 'type-12-1-2',
      question_type: 'SHORT',
      format_type: 'TLN',
      difficulty: 'HARD',
      language_level: 2,
      question_vi: 'Cho hàm số $y = x^4 - 2x^2 + 3$. Hàm số đã cho có tất cả bao nhiêu điểm cực trị?',
      question_en: 'Given the function $y = x^4 - 2x^2 + 3$. How many local extrema does this function have?',
      solution_vi: '$y\' = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\iff x = 0, x = 1, x = -1$. Đạo hàm đổi dấu qua cả 3 nghiệm này, do đó hàm số có đúng 3 điểm cực trị.',
      solution_en: '$y\' = 4x(x^2 - 1) = 0 \\iff x = 0, \\pm 1$. Since $y\'$ changes signs at all 3 roots, there are 3 local extrema.',
      correct_answer: '3',
      math_skill: 'Đếm số điểm cực trị hàm trùng phương',
      english_skill: 'Count number of extrema',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // Phần 4: Tự luận (TL)
    {
      id: 'q-12-1-tl1',
      topic_id: 'top-12-1-1',
      type_id: 'type-12-1-1',
      question_type: 'ESSAY',
      format_type: 'TL',
      difficulty: 'HARD',
      language_level: 3,
      question_vi: 'Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m + 2)x - 5$ đồng biến trên toàn bộ $\\mathbb{R}$.',
      question_en: 'Find all real values of the parameter $m$ such that the function $y = \\frac{1}{3}x^3 - mx^2 + (m + 2)x - 5$ is strictly increasing on $\\mathbb{R}$.',
      solution_vi: 'TXĐ $D = \\mathbb{R}$. $y\' = x^2 - 2mx + (m + 2)$. Để hàm số đồng biến trên $\\mathbb{R}$ thì $y\' \\ge 0, \\forall x \\in \\mathbb{R} \\iff \\Delta\' = m^2 - (m + 2) \\le 0 \\iff m^2 - m - 2 \\le 0 \\iff -1 \\le m \\le 2$. Vậy $m \\in [-1; 2]$.',
      solution_en: 'Derivative $y\' = x^2 - 2mx + (m + 2)$. The function is strictly increasing on $\\mathbb{R} \\iff y\' \\ge 0, \\forall x \\iff \\Delta\' = m^2 - m - 2 \\le 0 \\iff -1 \\le m \\le 2$.',
      correct_answer: '[-1; 2]',
      math_skill: 'Tìm tham số m để hàm số đơn điệu trên R',
      english_skill: 'Parameter m monotonicity proof',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // --- LỚP 12 - BÀI 3: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ ---
    {
      id: 'q-12-3-tn1',
      topic_id: 'top-12-1-3',
      type_id: 'type-12-3-1',
      question_type: 'MCQ',
      format_type: 'TN',
      difficulty: 'EASY',
      language_level: 2,
      question_vi: 'Tiệm cận đứng của đồ thị hàm số $y = \\frac{2x + 1}{x - 3}$ là đường thẳng nào sau đây?',
      question_en: 'What is the vertical asymptote of the graph of $y = \\frac{2x + 1}{x - 3}$?',
      options: [
        { option_key: 'A', content_vi: '$x = 3$', content_en: '$x = 3$', is_correct: true },
        { option_key: 'B', content_vi: '$x = -3$', content_en: '$x = -3$', is_correct: false },
        { option_key: 'C', content_vi: '$y = 2$', content_en: '$y = 2$', is_correct: false },
        { option_key: 'D', content_vi: '$y = 3$', content_en: '$y = 3$', is_correct: false },
      ],
      solution_vi: 'Ta có $\\lim_{x \\to 3^+} \\frac{2x + 1}{x - 3} = +\\infty$ nên đường thẳng $x = 3$ là tiệm cận đứng.',
      solution_en: '$\\lim_{x \\to 3^+} \\frac{2x + 1}{x - 3} = +\\infty \\implies x = 3$ is the vertical asymptote.',
      correct_answer: 'A',
      math_skill: 'Xác định tiệm cận đứng hàm phân thức bậc 1/1',
      english_skill: 'Vertical asymptote identification',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-12-3-tn2',
      topic_id: 'top-12-1-3',
      type_id: 'type-12-3-1',
      question_type: 'MCQ',
      format_type: 'TN',
      difficulty: 'EASY',
      language_level: 2,
      question_vi: 'Tiệm cận ngang của đồ thị hàm số $y = \\frac{4x - 5}{2x + 1}$ là đường thẳng nào?',
      question_en: 'What is the horizontal asymptote of the graph of $y = \\frac{4x - 5}{2x + 1}$?',
      options: [
        { option_key: 'A', content_vi: '$y = 2$', content_en: '$y = 2$', is_correct: true },
        { option_key: 'B', content_vi: '$y = -5$', content_en: '$y = -5$', is_correct: false },
        { option_key: 'C', content_vi: '$x = -1/2$', content_en: '$x = -1/2$', is_correct: false },
        { option_key: 'D', content_vi: '$y = 4$', content_en: '$y = 4$', is_correct: false },
      ],
      solution_vi: 'Ta có $\\lim_{x \\to \\pm\\infty} \\frac{4x - 5}{2x + 1} = \\frac{4}{2} = 2$. Do đó tiệm cận ngang là $y = 2$.',
      solution_en: '$\\lim_{x \\to \\pm\\infty} \\frac{4x - 5}{2x + 1} = 2 \\implies y = 2$ is the horizontal asymptote.',
      correct_answer: 'A',
      math_skill: 'Xác định tiệm cận ngang',
      english_skill: 'Horizontal asymptote identification',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-12-3-ds1',
      topic_id: 'top-12-1-3',
      type_id: 'type-12-3-2',
      question_type: 'TRUE_FALSE',
      format_type: 'DS',
      difficulty: 'MEDIUM',
      language_level: 2,
      question_vi: 'Cho hàm số $y = \\frac{x^2 - 3x + 2}{x - 1}$. Xét tính đúng/sai của các mệnh đề sau:',
      question_en: 'Given the function $y = \\frac{x^2 - 3x + 2}{x - 1}$. Determine whether each statement is True (Đ) or False (S):',
      options: [
        { option_key: 'a', content_vi: 'Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.', content_en: 'The domain of the function is $D = \\mathbb{R} \\setminus \\{1\\}$.', is_correct: true },
        { option_key: 'b', content_vi: 'Đồ thị hàm số có đường tiệm cận đứng là $x = 1$.', content_en: 'The graph has vertical asymptote $x = 1$.', is_correct: false },
        { option_key: 'c', content_vi: 'Với mọi $x \\neq 1$, ta có $y = x - 2$.', content_en: 'For all $x \\neq 1$, $y = x - 2$.', is_correct: true },
        { option_key: 'd', content_vi: 'Đồ thị hàm số không có đường tiệm cận nào.', content_en: 'The graph has no asymptotes.', is_correct: true },
      ],
      solution_vi: 'a) Đúng ($x \\neq 1$). b) Sai (vì $x^2 - 3x + 2 = (x - 1)(x - 2)$, rút gọn được $y = x - 2$ khi $x \\neq 1$, $\\lim_{x \\to 1} y = -1 \\neq \\pm\\infty$, không có TCĐ). c) Đúng. d) Đúng.',
      solution_en: 'a) True. b) False (the factor $(x-1)$ cancels out). c) True. d) True.',
      correct_answer: 'a-Đ, b-S, c-Đ, d-Đ',
      math_skill: 'Khử nghiệm trùng khi tìm tiệm cận',
      english_skill: 'Removable discontinuity and asymptotes',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-12-3-tln1',
      topic_id: 'top-12-1-3',
      type_id: 'type-12-3-2',
      question_type: 'SHORT',
      format_type: 'TLN',
      difficulty: 'HARD',
      language_level: 2,
      question_vi: 'Cho hàm số $y = \\frac{2x^2 - 3x + 5}{x - 2}$. Tung độ giao điểm của tiệm cận xiên với trục tung $Oy$ bằng bao nhiêu?',
      question_en: 'Given $y = \\frac{2x^2 - 3x + 5}{x - 2}$. What is the y-intercept of its oblique asymptote?',
      solution_vi: 'Thực hiện phép chia đa thức: $y = 2x + 1 + \\frac{7}{x - 2}$. Tiệm cận xiên là đường thẳng $y = 2x + 1$. Giao điểm với $Oy$ tại $x = 0 \\implies y = 1$.',
      solution_en: '$y = 2x + 1 + \\frac{7}{x - 2} \\implies$ Oblique asymptote is $y = 2x + 1$. Its y-intercept is $1$.',
      correct_answer: '1',
      math_skill: 'Tìm tiệm cận xiên và giao điểm',
      english_skill: 'Oblique asymptote y-intercept',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-12-3-tl1',
      topic_id: 'top-12-1-3',
      type_id: 'type-12-3-3',
      question_type: 'ESSAY',
      format_type: 'TL',
      difficulty: 'HARD',
      language_level: 3,
      question_vi: 'Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = \\frac{x - 1}{x^2 - 2mx + m + 2}$ có đúng 2 đường tiệm cận đứng.',
      question_en: 'Find all values of $m$ such that $y = \\frac{x - 1}{x^2 - 2mx + m + 2}$ has exactly 2 vertical asymptotes.',
      solution_vi: 'Đồ thị có 2 TCĐ khi và chỉ khi mẫu số $g(x) = x^2 - 2mx + m + 2 = 0$ có 2 nghiệm phân biệt khác 1.\n1) $\\Delta\' = m^2 - (m + 2) > 0 \\iff m^2 - m - 2 > 0 \\iff m < -1$ hoặc $m > 2$.\n2) $g(1) = 1 - 2m + m + 2 \\neq 0 \\iff 3 - m \\neq 0 \\iff m \\neq 3$.\nKết luận: $m \\in (-\\infty; -1) \\cup (2; 3) \\cup (3; +\\infty)$.',
      solution_en: 'Denominator must have 2 distinct roots not equal to 1: $\\Delta\' = m^2 - m - 2 > 0 \\iff m \\in (-\\infty, -1) \\cup (2, +\\infty)$ and $g(1) \\neq 0 \\iff m \\neq 3$.',
      correct_answer: 'm < -1 hoặc m > 2, m khác 3',
      math_skill: 'Biện luận số tiệm cận đứng theo tham số m',
      english_skill: 'Parameter conditions for asymptotes',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // --- LỚP 11 - BÀI 1: GIÁ TRỊ LƯỢNG GIÁC CỦA GÓC LƯỢNG GIÁC ---
    {
      id: 'q-11-1-tn1',
      topic_id: 'top-11-1-1',
      type_id: 'type-11-1-1',
      question_type: 'MCQ',
      format_type: 'TN',
      difficulty: 'EASY',
      language_level: 2,
      question_vi: 'Cho góc $\\alpha$ thoả mãn $\\frac{\\pi}{2} < \\alpha < \\pi$. Mệnh đề nào sau đây đúng?',
      question_en: 'For an angle $\\alpha$ in interval $(\\pi/2, \\pi)$, which of the following is true?',
      options: [
        { option_key: 'A', content_vi: '$\\sin \\alpha > 0, \\cos \\alpha < 0$', content_en: '$\\sin \\alpha > 0, \\cos \\alpha < 0$', is_correct: true },
        { option_key: 'B', content_vi: '$\\sin \\alpha < 0, \\cos \\alpha < 0$', content_en: '$\\sin \\alpha < 0, \\cos \\alpha < 0$', is_correct: false },
        { option_key: 'C', content_vi: '$\\sin \\alpha > 0, \\cos \\alpha > 0$', content_en: '$\\sin \\alpha > 0, \\cos \\alpha > 0$', is_correct: false },
        { option_key: 'D', content_vi: '$\\sin \\alpha < 0, \\cos \\alpha > 0$', content_en: '$\\sin \\alpha < 0, \\cos \\alpha > 0$', is_correct: false },
      ],
      solution_vi: 'Góc $\\alpha \\in (\\pi/2; \\pi)$ thuộc góc phần tư thứ II nên $\\sin \\alpha > 0$ và $\\cos \\alpha < 0$.',
      solution_en: 'Angle in quadrant II has positive sine and negative cosine.',
      correct_answer: 'A',
      math_skill: 'Xác định dấu các giá trị lượng giác',
      english_skill: 'Quadrant signs of trigonometric functions',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-11-1-tn2',
      topic_id: 'top-11-1-1',
      type_id: 'type-11-1-1',
      question_type: 'MCQ',
      format_type: 'TN',
      difficulty: 'MEDIUM',
      language_level: 2,
      question_vi: 'Biết $\\tan \\alpha = 2$. Giá trị của biểu thức $P = \\frac{\\sin \\alpha + \\cos \\alpha}{\\sin \\alpha - \\cos \\alpha}$ bằng:',
      question_en: 'Given $\\tan \\alpha = 2$. The value of $P = \\frac{\\sin \\alpha + \\cos \\alpha}{\\sin \\alpha - \\cos \\alpha}$ is:',
      options: [
        { option_key: 'A', content_vi: '$3$', content_en: '$3$', is_correct: true },
        { option_key: 'B', content_vi: '$1/3$', content_en: '$1/3$', is_correct: false },
        { option_key: 'C', content_vi: '$-3$', content_en: '$-3$', is_correct: false },
        { option_key: 'D', content_vi: '$2$', content_en: '$2$', is_correct: false },
      ],
      solution_vi: 'Chia cả tử và mẫu cho $\\cos \\alpha \\neq 0$: $P = \\frac{\\tan \\alpha + 1}{\\tan \\alpha - 1} = \\frac{2 + 1}{2 - 1} = 3$.',
      solution_en: 'Divide numerator and denominator by $\\cos \\alpha$: $P = \\frac{\\tan \\alpha + 1}{\\tan \\alpha - 1} = 3$.',
      correct_answer: 'A',
      math_skill: 'Rút gọn biểu thức lượng giác theo tan',
      english_skill: 'Trigonometric expression evaluation',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-11-1-ds1',
      topic_id: 'top-11-1-1',
      type_id: 'type-11-1-1',
      question_type: 'TRUE_FALSE',
      format_type: 'DS',
      difficulty: 'MEDIUM',
      language_level: 2,
      question_vi: 'Xét tính đúng/sai của các đẳng thức lượng giác sau:',
      question_en: 'Determine whether each trigonometric identity is True (Đ) or False (S):',
      options: [
        { option_key: 'a', content_vi: '$\\sin^2 x + \\cos^2 x = 1$ với mọi $x \\in \\mathbb{R}$.', content_en: '$\\sin^2 x + \\cos^2 x = 1$ for all $x \\in \\mathbb{R}$.', is_correct: true },
        { option_key: 'b', content_vi: '$\\tan x = \\frac{\\cos x}{\\sin x}$ với mọi $x \\neq k\\pi$.', content_en: '$\\tan x = \\frac{\\cos x}{\\sin x}$ for all $x \\neq k\\pi$.', is_correct: false },
        { option_key: 'c', content_vi: '$1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$ với mọi $x \\neq \\frac{\\pi}{2} + k\\pi$.', content_en: '$1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$ for all $x \\neq \\frac{\\pi}{2} + k\\pi$.', is_correct: true },
        { option_key: 'd', content_vi: '$\\sin(-x) = \\sin x$ với mọi $x$.', content_en: '$\\sin(-x) = \\sin x$ for all $x$.', is_correct: false },
      ],
      solution_vi: 'a) Đúng. b) Sai (đây là $\\cot x$). c) Đúng. d) Sai ($\\sin(-x) = -\\sin x$).',
      solution_en: 'a) True. b) False. c) True. d) False ($\\sin(-x) = -\\sin x$).',
      correct_answer: 'a-Đ, b-S, c-Đ, d-S',
      math_skill: 'Công thức lượng giác cơ bản',
      english_skill: 'Trigonometric identities verification',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-11-1-tln1',
      topic_id: 'top-11-1-1',
      type_id: 'type-11-1-1',
      question_type: 'SHORT',
      format_type: 'TLN',
      difficulty: 'HARD',
      language_level: 2,
      question_vi: 'Cho $\\cos \\alpha = \\frac{3}{5}$ với $0 < \\alpha < \\frac{\\pi}{2}$. Tính giá trị của $5\\sin \\alpha + 10\\cos \\alpha$.',
      question_en: 'Given $\\cos \\alpha = \\frac{3}{5}$ with $0 < \\alpha < \\frac{\\pi}{2}$. Evaluate $5\\sin \\alpha + 10\\cos \\alpha$.',
      solution_vi: '$\\sin \\alpha = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$. Biểu thức $= 5(4/5) + 10(3/5) = 4 + 6 = 10$.',
      solution_en: '$\\sin \\alpha = 4/5 \\implies 5(4/5) + 10(3/5) = 10$.',
      correct_answer: '10',
      math_skill: 'Tính giá trị biểu thức lượng giác',
      english_skill: 'Numeric evaluation of trig expressions',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-11-1-tl1',
      topic_id: 'top-11-1-1',
      type_id: 'type-11-1-1',
      question_type: 'ESSAY',
      format_type: 'TL',
      difficulty: 'HARD',
      language_level: 3,
      question_vi: 'Chứng minh đẳng thức lượng giác: $\\frac{1 + \\sin 2x}{\\cos 2x} = \\frac{\\cos x + \\sin x}{\\cos x - \\sin x}$ với các giá trị $x$ làm cho các biểu thức có nghĩa.',
      question_en: 'Prove the identity: $\\frac{1 + \\sin 2x}{\\cos 2x} = \\frac{\\cos x + \\sin x}{\\cos x - \\sin x}$.',
      solution_vi: 'VT $= \\frac{\\sin^2 x + \\cos^2 x + 2\\sin x \\cos x}{\\cos^2 x - \\sin^2 x} = \\frac{(\\cos x + \\sin x)^2}{(\\cos x - \\sin x)(\\cos x + \\sin x)} = \\frac{\\cos x + \\sin x}{\\cos x - \\sin x} = $ VP (đpcm).',
      solution_en: 'LHS $= \\frac{(\\cos x + \\sin x)^2}{(\\cos x - \\sin x)(\\cos x + \\sin x)} = \\frac{\\cos x + \\sin x}{\\cos x - \\sin x} =$ RHS.',
      correct_answer: 'Đã chứng minh đẳng thức',
      math_skill: 'Chứng minh đẳng thức lượng giác',
      english_skill: 'Proving trigonometric identities',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
  ],

  // =========================================================================
  // BỘ TỪ VỰNG SONG NGỮ
  // =========================================================================
  vocabulary: [
    {
      id: 'voc-12-1',
      topic_id: 'top-12-1-1',
      word: 'monotonicity',
      ipa: '/ˌmɒn.ə.təˈnɪs.ə.ti/',
      meaning_vi: 'tính đơn điệu (đồng biến / nghịch biến)',
      definition_en: 'The property of a function of being entirely non-increasing or non-decreasing.',
      example_en: 'We analyze the monotonicity of the function using the sign of its first derivative.',
      example_vi: 'Chúng ta xét tính đơn điệu của hàm số bằng cách dựa vào dấu của đạo hàm cấp một.',
      formula: "f'(x) > 0 \\implies \\text{Increasing}",
      difficulty: 'MEDIUM',
      language_level: 2,
    },
    {
      id: 'voc-12-2',
      topic_id: 'top-12-1-1',
      word: 'local extremum',
      ipa: '/ˈləʊ.kəl ɪkˈstriː.məm/',
      meaning_vi: 'cực trị địa phương (cực đại / cực tiểu)',
      definition_en: 'A local maximum or local minimum point of a function.',
      example_en: 'A point where the derivative changes sign is a local extremum.',
      example_vi: 'Điểm mà tại đó đạo hàm đổi dấu là một điểm cực trị.',
      formula: "f'(x_0) = 0",
      difficulty: 'MEDIUM',
      language_level: 2,
    },
    {
      id: 'voc-12-3',
      topic_id: 'top-12-1-1',
      word: 'variation table',
      ipa: '/ˌveə.riˈeɪ.ʃən ˈteɪ.bəl/',
      meaning_vi: 'bảng biến thiên',
      definition_en: 'A table summarizing the intervals of increase, decrease, and extrema of a function.',
      example_en: 'Sketch the variation table to conclude the intervals of monotonicity.',
      example_vi: 'Lập bảng biến thiên để kết luận các khoảng đơn điệu.',
      difficulty: 'EASY',
      language_level: 1,
    },
    {
      id: 'voc-12-4',
      topic_id: 'top-12-1-1',
      word: 'derivative',
      ipa: '/dɪˈrɪv.ə.tɪv/',
      meaning_vi: 'đạo hàm',
      definition_en: 'The rate of change of a function with respect to a variable.',
      example_en: 'Calculate the derivative of f(x) to examine where the slope is zero.',
      example_vi: 'Tính đạo hàm của f(x) để kiểm tra những nơi hệ số góc bằng 0.',
      formula: "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}",
      difficulty: 'EASY',
      language_level: 1,
    },
  ],

  // Sentence patterns
  sentence_patterns: [
    {
      id: 'sp-12-1',
      topic_id: 'top-12-1-1',
      pattern_en: 'Find the intervals on which the function f(x) is strictly increasing.',
      pattern_vi: 'Tìm các khoảng mà trên đó hàm số f(x) đồng biến.',
      example_en: 'Find the intervals on which f(x) = x^3 - 3x is strictly increasing.',
      example_vi: 'Tìm các khoảng mà trên đó f(x) = x^3 - 3x đồng biến.',
      level: 2,
    },
  ],

  tests: [
    {
      id: 'tst-12-1',
      title: 'Đề kiểm tra 15 phút: Tính đơn điệu & Cực trị (Song ngữ)',
      description: 'Đề kiểm tra đánh giá định kỳ chuẩn GDPT 2018 kết hợp tiếng Anh',
      teacher_id: 'usr-teacher-1',
      teacher_name: 'Cô Lê Thị Hiếu',
      duration_minutes: 15,
      english_ratio: 50,
      max_attempts: 3,
      shuffle_questions: false,
      shuffle_options: false,
      show_result: true,
      show_solution: true,
      status: 'ACTIVE',
      question_ids: ['q-12-1-tn1', 'q-12-1-tn2', 'q-12-1-ds1', 'q-12-1-tln1'],
      created_at: new Date().toISOString(),
    },
  ],

  mei_scores: [
    {
      id: 'mei-1',
      student_id: 'usr-student-1',
      vocabulary_score: 85,
      reading_score: 78,
      problem_solving_score: 82,
      expression_score: 75,
      mei_score: 80.5,
      calculated_at: new Date().toISOString(),
    },
  ],
};

function getLocalDb() {
  if (typeof window === 'undefined') return INITIAL_DATA;
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (!raw) {
      localStorage.setItem(DB_KEY, JSON.stringify(INITIAL_DATA));
      return INITIAL_DATA;
    }
    const parsed = JSON.parse(raw);
    let changed = false;

    // Ensure all chapters from INITIAL_DATA are present
    if (!parsed.chapters || parsed.chapters.length < INITIAL_DATA.chapters.length) {
      parsed.chapters = INITIAL_DATA.chapters;
      changed = true;
    }

    // Ensure all lessons from INITIAL_DATA are present or updated
    if (!parsed.lessons || parsed.lessons.length < INITIAL_DATA.lessons.length) {
      parsed.lessons = INITIAL_DATA.lessons;
      changed = true;
    }

    // Ensure questions from INITIAL_DATA are present
    if (!parsed.questions || parsed.questions.length < INITIAL_DATA.questions.length) {
      parsed.questions = INITIAL_DATA.questions;
      changed = true;
    }

    // Update school name in profiles
    if (parsed.profiles) {
      parsed.profiles.forEach((p: any) => {
        if (p.school_name !== 'THPT Châu Thành A') {
          p.school_name = 'THPT Châu Thành A';
          changed = true;
        }
      });
    }

    if (changed) {
      localStorage.setItem(DB_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch {
    return INITIAL_DATA;
  }
}

export function saveLocalDb(db: any) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  } catch (e) {
    console.error('Save local DB error:', e);
  }
}

// Universal fetch wrapper with automatic fallback
export async function apiFetch<T = any>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(endpoint, options);
    if (response.ok) {
      return await response.json();
    }
  } catch {
    // Fallback to local storage
  }

  const db = getLocalDb();
  const path = endpoint.split('?')[0];

  if (path === '/api/chapters') {
    return db.chapters as any;
  }

  if (path === '/api/topics') {
    return db.topics as any;
  }

  if (path === '/api/lessons') {
    if (options?.method === 'POST') {
      const body = JSON.parse(options.body as string);
      const newL = { id: `les-${Date.now()}`, ...body };
      db.lessons.push(newL);
      saveLocalDb(db);
      return { success: true, lesson: newL } as any;
    }
    return db.lessons as any;
  }

  if (path === '/api/vocabulary') {
    if (options?.method === 'POST') {
      const body = JSON.parse(options.body as string);
      const newV = { id: `voc-${Date.now()}`, ...body, is_favorite: false, is_learned: false };
      db.vocabulary.push(newV);
      saveLocalDb(db);
      return { success: true, vocabulary: newV } as any;
    }
    return db.vocabulary as any;
  }

  if (path === '/api/sentence-patterns') {
    return db.sentence_patterns as any;
  }

  if (path === '/api/questions') {
    if (options?.method === 'POST') {
      const body = JSON.parse(options.body as string);
      const newQ = { id: `q-${Date.now()}`, ...body };
      db.questions.push(newQ);
      saveLocalDb(db);
      return { success: true, question: newQ } as any;
    }
    return db.questions as any;
  }

  if (path === '/api/tests') {
    if (options?.method === 'POST') {
      const body = JSON.parse(options.body as string);
      const newT = { id: `tst-${Date.now()}`, ...body };
      db.tests.push(newT);
      saveLocalDb(db);
      return { success: true, test: newT } as any;
    }
    return db.tests as any;
  }

  if (path === '/api/student/dashboard-summary') {
    return {
      student: db.profiles[0],
      mei: db.mei_scores[0],
      vocabulary: { learned: (db.vocabulary || []).length, total: 60 },
      lessons_completed: 6,
      practice_accuracy: 88,
      tests_completed: 3,
      streak_days: 7,
      recent_lesson: db.lessons[0],
      recommended_activities: [
        { id: 'act-1', type: 'VOCABULARY', title: 'Luyện 15 thuật ngữ Đơn điệu & Cực trị', topic_id: 'top-12-1-1', level: 2 },
        { id: 'act-2', type: 'READING', title: 'Đọc hiểu Đề toán Khảo sát hàm số GDPT 2018', topic_id: 'top-12-1-1', level: 2 },
        { id: 'act-3', type: 'MINI_TEST', title: 'Mini Test 15 phút - Tỷ lệ 50% Anh', test_id: 'tst-12-1', level: 2 },
      ],
    } as any;
  }

  return {} as any;
}
