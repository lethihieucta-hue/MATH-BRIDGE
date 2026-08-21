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

import { FULL_CHAPTERS, FULL_LESSONS } from './curriculumData';

const DB_KEY = 'math_bridge_client_db_v7';

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
      email: 'lehieu@thptchauthanha.edu.vn',
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
  // TOÀN BỘ 21 CHƯƠNG TOÁN THPT (LỚP 10, 11, 12) - KẾT NỐI TRI THỨC
  // =========================================================================
  chapters: FULL_CHAPTERS,

  // =========================================================================
  // DANH SÁCH BÀI HỌC VÀ CÁC DẠNG TOÁN ỨNG DỤNG THỰC TẾ CHI TIẾT
  // =========================================================================
  lessons: FULL_LESSONS,

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

    // Ensure all 21 chapters from INITIAL_DATA are present
    if (!parsed.chapters || parsed.chapters.length < INITIAL_DATA.chapters.length) {
      parsed.chapters = INITIAL_DATA.chapters;
      changed = true;
    }

    // Ensure all lessons and math types from INITIAL_DATA are present or updated
    if (!parsed.lessons) {
      parsed.lessons = INITIAL_DATA.lessons;
      changed = true;
    } else {
      const existingIds = new Set(parsed.lessons.map((l: any) => l.id));
      INITIAL_DATA.lessons.forEach((initL) => {
        if (!existingIds.has(initL.id)) {
          parsed.lessons.push(initL);
          changed = true;
        } else {
          const idx = parsed.lessons.findIndex((l: any) => l.id === initL.id);
          if (idx !== -1 && (!parsed.lessons[idx].types || parsed.lessons[idx].types.length < (initL.types?.length || 0))) {
            parsed.lessons[idx] = initL;
            changed = true;
          }
        }
      });
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
