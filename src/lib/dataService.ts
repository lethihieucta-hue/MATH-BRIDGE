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

const DB_KEY = 'math_bridge_client_db_v5';

export const INITIAL_DATA = {
  profiles: [
    {
      id: 'usr-student-1',
      full_name: 'Nguyễn Văn An',
      email: 'student@mathbridge.edu.vn',
      role: 'student',
      school_id: 'sch-1',
      school_name: 'THPT Ngô Quyền',
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
      school_name: 'THPT Ngô Quyền',
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

    // --- LỚP 11 (KNTT) ---
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
      id: 'chap-11-5',
      grade_id: 11,
      name_vi: 'Giới hạn. Hàm số liên tục',
      name_en: 'Limits and Continuous Functions',
      description: 'Giới hạn dãy số, giới hạn hàm số và tính liên tục của hàm số',
      order_index: 3,
    },
    {
      id: 'chap-11-6',
      grade_id: 11,
      name_vi: 'Hàm số mũ và hàm số lôgarit',
      name_en: 'Exponential and Logarithmic Functions',
      description: 'Lũy thừa, lôgarit và phương trình mũ, lôgarit',
      order_index: 4,
    },
    {
      id: 'chap-11-7',
      grade_id: 11,
      name_vi: 'Đạo hàm và tiếp tuyến',
      name_en: 'Derivatives and Tangent Lines',
      description: 'Định nghĩa đạo hàm, quy tắc tính và phương trình tiếp tuyến',
      order_index: 5,
    },
    {
      id: 'chap-11-8',
      grade_id: 11,
      name_vi: 'Quan hệ vuông góc trong không gian',
      name_en: 'Orthogonality in Spatial Geometry',
      description: 'Đường thẳng vuông góc mặt phẳng, hai mặt phẳng vuông góc',
      order_index: 6,
    },

    // --- LỚP 10 (KNTT) ---
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
      id: 'chap-10-6',
      grade_id: 10,
      name_vi: 'Hàm số, đồ thị và ứng dụng (Hàm số bậc hai)',
      name_en: 'Functions, Graphs and Applications (Quadratic Functions)',
      description: 'Tập xác định, hàm số bậc hai và parabol',
      order_index: 5,
    },
    {
      id: 'chap-10-7',
      grade_id: 10,
      name_vi: 'Phương pháp toạ độ trong mặt phẳng',
      name_en: 'Coordinate Geometry in the Plane',
      description: 'Phương trình đường thẳng, đường tròn và ba đường conic',
      order_index: 6,
    },
  ],

  // =========================================================================
  // DANH SÁCH BÀI HỌC VÀ DẠNG TOÁN CHI TIẾT
  // =========================================================================
  lessons: [
    // --- LỚP 12: CHƯƠNG I ---
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
      vocabulary_list: ['voc-12-1', 'voc-12-2', 'voc-12-3', 'voc-12-4'],
      key_concepts_vi: `• $f'(x) > 0$ trên khoảng $K$ thì $f$ đồng biến trên $K$; $f'(x) < 0$ thì $f$ nghịch biến trên $K$.\n• $x_0$ là điểm cực trị nếu $f'(x)$ đổi dấu khi $x$ đi qua $x_0$.\n• Quy tắc: Tìm tập xác định $\\to$ Tính đạo hàm $f'(x) \\to$ Tìm nghiệm $f'(x) = 0 \\to$ Lập bảng biến thiên $\\to$ Kết luận.`,
      key_concepts_en: `• If $f'(x) > 0$ on interval $K$, then $f$ is strictly increasing on $K$; if $f'(x) < 0$, $f$ is strictly decreasing.\n• $x_0$ is an extremum point if $f'(x)$ changes sign as $x$ passes through $x_0$.\n• Standard Method: Find Domain $\\to$ Compute $f'(x) \\to$ Solve $f'(x) = 0 \\to$ Construct variation table $\\to$ Conclude.`,
      formulas: [
        "f'(x) > 0 \\implies \\text{Hàm số đồng biến (Increasing)}",
        "f'(x) < 0 \\implies \\text{Hàm số nghịch biến (Decreasing)}",
        "f'(x_0) = 0 \\land f''(x_0) < 0 \\implies x_0 \\text{ là điểm cực đại}",
        "f'(x_0) = 0 \\land f''(x_0) > 0 \\implies x_0 \\text{ là điểm cực tiểu}",
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
        {
          id: 'we-12-1-2',
          type_id: 'type-12-1-2',
          type_code: 'Dạng 2. Tìm cực trị của hàm số',
          title_vi: 'Ví dụ 2: Tìm cực trị của hàm số đa thức',
          title_en: 'Example 2: Local Extrema of Polynomial Function',
          problem_vi: 'Cho hàm số $y = x^3 - 1,5x^2 - 36x - 3$.\na) Tìm các khoảng đơn điệu của hàm số.\nb) Tìm cực trị của hàm số và lập bảng biến thiên.',
          problem_en: 'Given the function $y = x^3 - 1.5x^2 - 36x - 3$.\na) Find the intervals of increase and decrease.\nb) Find local extrema and construct the table of signs.',
          solution_vi: 'TXĐ: $D = \\mathbb{R}$. Đạo hàm $y\' = 3x^2 - 3x - 36 = 3(x^2 - x - 12) = 3(x + 3)(x - 4)$. Cho $y\' = 0 \\iff x = -3$ hoặc $x = 4$.\na) Hàm số đồng biến trên $(-\\infty; -3)$ và $(4; +\\infty)$; nghịch biến trên $(-3; 4)$.\nb) $x_{CĐ} = -3, y_{CĐ} = 64,5$; $x_{CT} = 4, y_{CT} = -107$.',
          solution_en: 'Domain $D = \\mathbb{R}$. Derivative $y\' = 3x^2 - 3x - 36 = 3(x + 3)(x - 4)$. Roots $x = -3, x = 4$.\na) Increasing on $(-\\infty, -3)$ and $(4, +\\infty)$; decreasing on $(-3, 4)$.\nb) $x_{max} = -3, y_{max} = 64.5$; $x_{min} = 4, y_{min} = -107$.',
        },
        {
          id: 'we-12-1-3',
          type_id: 'type-12-1-3',
          type_code: 'Dạng 3. Đọc bảng biến thiên, tìm tham số m',
          title_vi: 'Ví dụ 3: Đọc bảng biến thiên và tìm tham số m',
          title_en: 'Example 3: Reading Variation Table and Parameter m',
          problem_vi: 'Cho hàm số $y = x^3 + 3x^2 - 24x + 5$.\na) Tìm các khoảng đơn điệu của hàm số.\nb) Tìm cực trị của hàm số và lập bảng biến thiên.',
          problem_en: 'Given the function $y = x^3 + 3x^2 - 24x + 5$.\na) Find the monotonicity intervals.\nb) Find the extrema and variation table.',
          solution_vi: 'TXĐ: $D = \\mathbb{R}$. Đạo hàm $y\' = 3x^2 + 6x - 24 = 3(x + 4)(x - 2)$. $y\' = 0 \\iff x = -4$ hoặc $x = 2$.\na) Đồng biến trên $(-\\infty; -4)$ và $(2; +\\infty)$; nghịch biến trên $(-4; 2)$.\nb) $x_{CĐ} = -4, y_{CĐ} = 85$; $x_{CT} = 2, y_{CT} = -23$.',
          solution_en: 'Domain $D = \\mathbb{R}$. Derivative $y\' = 3(x + 4)(x - 2)$. Roots $x = -4, x = 2$.\na) Increasing on $(-\\infty, -4) \\cup (2, +\\infty)$; decreasing on $(-4, 2)$.\nb) Local max at $x = -4$, local min at $x = 2$.',
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
      vocabulary_list: ['voc-12-5', 'voc-12-6'],
      key_concepts_vi: 'Để tìm GTLN, GTNN của hàm liên tục trên $[a, b]$: Tính $f(a), f(b)$ và các $f(x_i)$ với $x_i \\in (a, b)$ là nghiệm $f\'(x) = 0$. Số lớn nhất là GTLN, số bé nhất là GTNN.',
      key_concepts_en: 'To find max/min on $[a, b]$: Evaluate $f(a), f(b)$ and $f(x_i)$ where $f\'(x_i) = 0$. The greatest is the absolute maximum, the smallest is the absolute minimum.',
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
      worked_examples: [],
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
        'Nhận biết tiệm cận xiên (Oblique Asymptote) của hàm phân thức',
      ],
      vocabulary_list: ['voc-12-7'],
      key_concepts_vi: '• Tiệm cận đứng $x = x_0$ nếu $\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty$.\n• Tiệm cận ngang $y = y_0$ nếu $\\lim_{x \\to \\pm\\infty} f(x) = y_0$.',
      key_concepts_en: '• Vertical Asymptote $x = x_0$ if $\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty$.\n• Horizontal Asymptote $y = y_0$ if $\\lim_{x \\to \\pm\\infty} f(x) = y_0$.',
      formulas: [
        "\\lim_{x \\to x_0^+} f(x) = \\pm\\infty \\implies x = x_0 \\text{ (Tiệm cận đứng)}",
        "\\lim_{x \\to \\pm\\infty} f(x) = y_0 \\implies y = y_0 \\text{ (Tiệm cận ngang)}",
      ],
      types: [],
      worked_examples: [],
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
      vocabulary_list: [],
      key_concepts_vi: 'Sơ đồ khảo sát: TXĐ $\\to$ Chiều biến thiên, cực trị, tiệm cận $\\to$ Bảng biến thiên $\\to$ Vẽ đồ thị.',
      key_concepts_en: 'Graphing procedure: Domain $\\to$ Monotonicity, Extrema, Asymptotes $\\to$ Variation Table $\\to$ Sketch Curve.',
      formulas: [],
      types: [],
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
      vocabulary_list: [],
      key_concepts_vi: 'Mô hình hóa toán học bài toán tối ưu bằng cách lập hàm mục tiêu $f(x)$ và tìm GTLN/GTNN.',
      key_concepts_en: 'Mathematical modeling of real-world optimization problems by setting objective function $f(x)$.',
      formulas: [],
      types: [],
      worked_examples: [],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // --- LỚP 10 BÀI HỌC MẪU ---
    {
      id: 'les-10-6-2',
      chapter_id: 'chap-10-6',
      topic_id: 'top-10-6-2',
      title_vi: 'Bài 16. Hàm số bậc hai & Đồ thị Parabol',
      title_en: 'Lesson 16. Quadratic Functions & Parabola Graph',
      order_index: 1,
      learning_objectives: [
        'Nắm vững dạng $y = ax^2 + bx + c$ ($a \\neq 0$)',
        'Xác định toạ độ đỉnh $I(-b/2a, -\\Delta/4a)$ và trục đối xứng',
      ],
      vocabulary_list: ['voc-10-1', 'voc-10-2'],
      key_concepts_vi: 'Hàm số bậc hai có đồ thị là một parabol có đỉnh $I(-b/2a, -\\Delta/4a)$ và trục đối xứng $x = -b/2a$.',
      key_concepts_en: 'A quadratic function graph is a parabola with vertex $I(-b/2a, -\\Delta/4a)$ and axis of symmetry $x = -b/2a$.',
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
          title_vi: 'Xác định toạ độ đỉnh và trục đối xứng',
          title_en: 'Find Vertex and Axis of Symmetry',
          order_index: 1,
        },
        {
          id: 'type-10-1-2',
          lesson_id: 'les-10-6-2',
          code: 'Dạng 2',
          title_vi: 'Vẽ đồ thị parabol và tìm Min/Max',
          title_en: 'Sketch Parabola and Find Min/Max',
          order_index: 2,
        },
      ],
      worked_examples: [
        {
          id: 'we-10-1-1',
          type_id: 'type-10-1-1',
          type_code: 'Dạng 1',
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
    return JSON.parse(raw);
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
