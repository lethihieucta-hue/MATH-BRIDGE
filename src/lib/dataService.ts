// Hybrid Data Service for MATH-BRIDGE
// Ensures 100% Standalone functionality on Vercel static deployments
// Automatically syncs with LocalStorage when server APIs are not present.

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
} from '../types';

const DB_KEY = 'math_bridge_client_db_v1';

// Comprehensive Seed Data for High School Math in English (Grades 10, 11, 12)
export const INITIAL_DATA = {
  profiles: [
    {
      id: 'usr-student-1',
      full_name: 'Nguyễn Văn An',
      email: 'student@mathbridge.edu.vn',
      role: 'student',
      school_id: 'sch-1',
      school_name: 'THPT Ngô Quyền',
      grade_id: 10,
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      current_level: 2,
      class_code: 'MB10A1',
      xp: 450,
      streak_days: 5,
      created_at: new Date().toISOString(),
    },
    {
      id: 'usr-teacher-1',
      full_name: 'Cô Lê Thị Mai',
      email: 'teacher@mathbridge.edu.vn',
      role: 'teacher',
      school_id: 'sch-1',
      school_name: 'THPT Ngô Quyền',
      avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
      created_at: new Date().toISOString(),
    },
    {
      id: 'usr-admin-1',
      full_name: 'Quản Trị Viên Hệ Thống',
      email: 'admin@mathbridge.edu.vn',
      role: 'admin',
      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      created_at: new Date().toISOString(),
    },
  ],
  grades: [
    { id: 10, name: 'Toán 10', order_index: 1 },
    { id: 11, name: 'Toán 11', order_index: 2 },
    { id: 12, name: 'Toán 12', order_index: 3 },
  ],
  chapters: [
    {
      id: 'chap-10-1',
      grade_id: 10,
      name_vi: 'Chương 1: Mệnh đề & Tập hợp',
      name_en: 'Chapter 1: Propositions & Sets',
      description: 'Cơ sở logic toán học và các phép toán tập hợp bằng tiếng Anh',
      order_index: 1,
    },
    {
      id: 'chap-10-2',
      grade_id: 10,
      name_vi: 'Chương 2: Hàm số & Hàm số bậc hai',
      name_en: 'Chapter 2: Functions & Quadratic Functions',
      description: 'Định nghĩa hàm số, tập xác định, hàm số bậc hai và parabol',
      order_index: 2,
    },
    {
      id: 'chap-10-3',
      grade_id: 10,
      name_vi: 'Chương 3: Véctơ & Hệ thức lượng trong tam giác',
      name_en: 'Chapter 3: Vectors & Trigonometry in Triangles',
      description: 'Các phép toán véctơ và định lý cosin, sin trong tam giác',
      order_index: 3,
    },
    {
      id: 'chap-11-1',
      grade_id: 11,
      name_vi: 'Chương 1: Đạo hàm & Tiếp tuyến',
      name_en: 'Chapter 1: Derivatives & Tangent Lines',
      description: 'Quy tắc tính đạo hàm và ý nghĩa hình học',
      order_index: 1,
    },
    {
      id: 'chap-12-1',
      grade_id: 12,
      name_vi: 'Chương 1: Ứng dụng đạo hàm khảo sát hàm số',
      name_en: 'Chapter 1: Applications of Derivatives in Function Analysis',
      description: 'Tính đơn điệu, cực trị, giá trị lớn nhất, nhỏ nhất, tiệm cận',
      order_index: 1,
    },
  ],
  topics: [
    {
      id: 'top-10-2-1',
      chapter_id: 'chap-10-2',
      name_vi: 'Chủ đề 1: Hàm số & Tập xác định',
      name_en: 'Topic 1: Functions, Domain & Range',
      description: 'Khái niệm hàm số, tập xác định (Domain) và tập giá trị (Range)',
      order_index: 1,
    },
    {
      id: 'top-10-2-2',
      chapter_id: 'chap-10-2',
      name_vi: 'Chủ đề 2: Hàm số bậc hai & Đỉnh Parabol',
      name_en: 'Topic 2: Quadratic Functions & Parabola Vertex',
      description: 'Hàm số $y = ax^2 + bx + c$, đỉnh parabol $I(-b/2a, -\\Delta/4a)$',
      order_index: 2,
    },
    {
      id: 'top-10-3-1',
      chapter_id: 'chap-10-3',
      name_vi: 'Chủ đề 1: Khái niệm véctơ & Phép cộng véctơ',
      name_en: 'Topic 1: Vector Concepts & Vector Addition',
      description: 'Độ dài véctơ, véctơ cùng phương, quy tắc ba điểm',
      order_index: 1,
    },
    {
      id: 'top-11-1-1',
      chapter_id: 'chap-11-1',
      name_vi: 'Chủ đề 1: Định nghĩa & Quy tắc tính đạo hàm',
      name_en: 'Topic 1: Definition & Differentiation Rules',
      description: 'Đạo hàm của các hàm số cơ bản, tổng, tích, thương',
      order_index: 1,
    },
    {
      id: 'top-12-1-1',
      chapter_id: 'chap-12-1',
      name_vi: 'Chủ đề 1: Tính đơn điệu & Giá trị lớn nhất / nhỏ nhất',
      name_en: 'Topic 1: Monotonicity & Extreme Values',
      description: 'Đồng biến, nghịch biến, Max & Min của hàm số',
      order_index: 1,
    },
  ],
  vocabulary: [
    {
      id: 'voc-1',
      topic_id: 'top-10-2-1',
      word: 'function',
      ipa: '/ˈfʌŋk.ʃən/',
      meaning_vi: 'hàm số',
      definition_en: 'A relation that maps each input element to exactly one output element.',
      example_en: 'The equation f(x) = 2x + 3 is a linear function.',
      example_vi: 'Phương trình f(x) = 2x + 3 là một hàm số bậc nhất.',
      formula: 'f: X \\to Y',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-2',
      topic_id: 'top-10-2-1',
      word: 'domain',
      ipa: '/dəʊˈmeɪn/',
      meaning_vi: 'tập xác định',
      definition_en: 'The set of all possible input values (x) for which a function is defined.',
      example_en: 'Find the domain of the function f(x) = \\sqrt{x - 2}.',
      example_vi: 'Tìm tập xác định của hàm số f(x) = \\sqrt{x - 2}.',
      formula: 'D = \\{x \\in \\mathbb{R} \\mid x \\ge 2\\}',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-3',
      topic_id: 'top-10-2-1',
      word: 'range',
      ipa: '/reɪndʒ/',
      meaning_vi: 'tập giá trị',
      definition_en: 'The set of all possible output values (y) produced by a function.',
      example_en: 'The range of f(x) = x^2 is all non-negative real numbers.',
      example_vi: 'Tập giá trị của f(x) = x^2 là tất cả các số thực không âm.',
      formula: 'y \\in [0, +\\infty)',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-4',
      topic_id: 'top-10-2-2',
      word: 'quadratic function',
      ipa: '/kwɒdˈræt.ɪk ˈfʌŋk.ʃən/',
      meaning_vi: 'hàm số bậc hai',
      definition_en: 'A polynomial function of degree 2.',
      example_en: 'A quadratic function can be expressed in standard form f(x) = ax^2 + bx + c.',
      example_vi: 'Hàm số bậc hai có thể biểu diễn dưới dạng chuẩn f(x) = ax^2 + bx + c.',
      formula: 'y = ax^2 + bx + c \\quad (a \\neq 0)',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-5',
      topic_id: 'top-10-2-2',
      word: 'parabola',
      ipa: '/pəˈræb.əl.ə/',
      meaning_vi: 'đồ thị parabol',
      definition_en: 'The U-shaped curve that represents a quadratic function.',
      example_en: 'The parabola opens upwards when a > 0.',
      example_vi: 'Đồ thị parabol bề lõm quay lên trên khi a > 0.',
      formula: 'a > 0 \\implies \\cup',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: false,
      is_learned: false,
    },
    {
      id: 'voc-6',
      topic_id: 'top-10-2-2',
      word: 'vertex',
      ipa: '/ˈvɜː.teks/',
      meaning_vi: 'đỉnh của parabol',
      definition_en: 'The maximum or minimum turning point of a parabola.',
      example_en: 'The coordinates of the vertex are (-b/2a, -\\Delta/4a).',
      example_vi: 'Tọa độ đỉnh có dạng (-b/2a, -\\Delta/4a).',
      formula: 'I\\left(-\\frac{b}{2a}, -\\frac{\\Delta}{4a}\\right)',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-7',
      topic_id: 'top-10-2-2',
      word: 'axis of symmetry',
      ipa: '/ˈæk.sɪs əv ˈsɪm.ə.tri/',
      meaning_vi: 'trục đối xứng',
      definition_en: 'The vertical line passing through the vertex that divides the parabola into two symmetric halves.',
      example_en: 'The axis of symmetry has equation x = -b / (2a).',
      example_vi: 'Trục đối xứng có phương trình x = -b / (2a).',
      formula: 'x = -\\frac{b}{2a}',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: false,
      is_learned: false,
    },
    {
      id: 'voc-8',
      topic_id: 'top-10-2-2',
      word: 'maximum value',
      ipa: '/ˈmæk.sɪ.məm ˈvæl.juː/',
      meaning_vi: 'giá trị lớn nhất (GTLN)',
      definition_en: 'The highest y-value attainable by a function on an interval.',
      example_en: 'If a < 0, the function attains its maximum value at the vertex.',
      example_vi: 'Nếu a < 0, hàm số đạt giá trị lớn nhất tại đỉnh.',
      formula: '\\max_{x \\in D} f(x) = f(x_0)',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-9',
      topic_id: 'top-10-2-2',
      word: 'minimum value',
      ipa: '/ˈmɪn.ɪ.məm ˈvæl.juː/',
      meaning_vi: 'giá trị nhỏ nhất (GTNN)',
      definition_en: 'The lowest y-value attainable by a function on an interval.',
      example_en: 'Determine the minimum value of f(x) = x^2 - 4x + 3.',
      example_vi: 'Xác định giá trị nhỏ nhất của f(x) = x^2 - 4x + 3.',
      formula: '\\min_{x \\in D} f(x) = f(x_0)',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-10',
      topic_id: 'top-10-2-1',
      word: 'increasing function',
      ipa: '/ɪnˈkriː.sɪŋ ˈfʌŋk.ʃən/',
      meaning_vi: 'hàm số đồng biến',
      definition_en: 'A function where output y increases as input x increases.',
      example_en: 'The function f(x) = 2x + 1 is strictly increasing on R.',
      example_vi: 'Hàm số f(x) = 2x + 1 đồng biến trên R.',
      formula: 'x_1 < x_2 \\implies f(x_1) < f(x_2)',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: false,
      is_learned: false,
    },
    {
      id: 'voc-11',
      topic_id: 'top-11-1-1',
      word: 'derivative',
      ipa: '/dɪˈrɪv.ə.tɪv/',
      meaning_vi: 'đạo hàm',
      definition_en: 'The instantaneous rate of change of a function with respect to a variable.',
      example_en: 'Find the derivative of f(x) = x^3 - 3x.',
      example_vi: 'Tính đạo hàm của hàm số f(x) = x^3 - 3x.',
      formula: "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}",
      difficulty: 'MEDIUM',
      language_level: 3,
      is_favorite: true,
      is_learned: false,
    },
    {
      id: 'voc-12',
      topic_id: 'top-12-1-1',
      word: 'monotonicity',
      ipa: '/ˌmɒn.ə.təˈnɪs.ə.ti/',
      meaning_vi: 'tính đơn điệu',
      definition_en: 'The behavior of a function being entirely non-increasing or non-decreasing.',
      example_en: 'Analyze the monotonicity of the function on the interval (0, +infinity).',
      example_vi: 'Xét tính đơn điệu của hàm số trên khoảng (0, +vô cực).',
      formula: "f'(x) > 0 \\implies \\text{Increasing}",
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: false,
      is_learned: false,
    },
  ],
  sentence_patterns: [
    {
      id: 'sp-1',
      topic_id: 'top-10-2-1',
      pattern_en: 'Given the function f(x) = ...',
      pattern_vi: 'Cho hàm số f(x) = ...',
      example_en: 'Given the function f(x) = x^2 - 4x + 3, find its domain.',
      example_vi: 'Cho hàm số f(x) = x^2 - 4x + 3, hãy tìm tập xác định của nó.',
      level: 2,
      usage_note: 'Dùng để mở đầu bài toán giới thiệu hàm số.',
    },
    {
      id: 'sp-2',
      topic_id: 'top-10-2-1',
      pattern_en: 'Find the domain / range of ...',
      pattern_vi: 'Tìm tập xác định / tập giá trị của ...',
      example_en: 'Find the domain of the function f(x) = \\sqrt{3 - x}.',
      example_vi: 'Tìm tập xác định của hàm số f(x) = \\sqrt{3 - x}.',
      level: 2,
      usage_note: 'Câu lệnh yêu cầu tìm miền giá trị hoặc tập xác định.',
    },
    {
      id: 'sp-3',
      topic_id: 'top-10-2-2',
      pattern_en: 'Determine the coordinates of the vertex of the parabola.',
      pattern_vi: 'Xác định tọa độ đỉnh của đồ thị parabol.',
      example_en: 'Determine the coordinates of the vertex of y = 2x^2 - 8x + 5.',
      example_vi: 'Xác định tọa độ đỉnh của parabol y = 2x^2 - 8x + 5.',
      level: 2,
      usage_note: 'Dùng cho bài toán tìm tọa độ đỉnh I.',
    },
    {
      id: 'sp-4',
      topic_id: 'top-10-2-2',
      pattern_en: 'Calculate the minimum / maximum value of ...',
      pattern_vi: 'Tính giá trị nhỏ nhất / lớn nhất của ...',
      example_en: 'Calculate the minimum value of f(x) on the interval [0, 5].',
      example_vi: 'Tính giá trị nhỏ nhất của f(x) trên đoạn [0, 5].',
      level: 2,
      usage_note: 'Dùng cho bài toán tìm cực trị Min / Max.',
    },
  ],
  lessons: [
    {
      id: 'les-1',
      topic_id: 'top-10-2-2',
      title_vi: 'Bài 1: Hàm số bậc hai & Đồ thị Parabol',
      title_en: 'Lesson 1: Quadratic Functions & Parabola',
      learning_objectives: [
        'Hiểu định nghĩa hàm số bậc hai f(x) = ax^2 + bx + c',
        'Nắm vững công thức tính tọa độ đỉnh I và trục đối xứng',
        'Phân biệt hướng bề lõm khi a > 0 và a < 0',
      ],
      vocabulary_list: ['voc-4', 'voc-5', 'voc-6', 'voc-7', 'voc-8', 'voc-9'],
      key_concepts_vi: 'Hàm số bậc hai có dạng y = ax^2 + bx + c (a khác 0). Đồ thị là một đường parabol có đỉnh I(-b/2a; -Delta/4a). Khi a > 0 bề lõm quay lên, khi a < 0 bề lõm quay xuống.',
      key_concepts_en: 'A quadratic function is of the form y = ax^2 + bx + c (a not equal 0). Its graph is a parabola with vertex I(-b/2a, -Delta/4a) and vertical axis of symmetry x = -b/2a.',
      formulas: [
        'y = ax^2 + bx + c \\quad (a \\neq 0)',
        'I\\left(-\\frac{b}{2a}, -\\frac{\\Delta}{4a}\\right)',
        'x = -\\frac{b}{2a}',
        '\\Delta = b^2 - 4ac',
      ],
      worked_examples: [
        {
          id: 'we-1',
          title_vi: 'Ví dụ 1: Tìm tọa độ đỉnh của Parabol',
          title_en: 'Example 1: Find the Coordinates of the Vertex',
          problem_vi: 'Tìm tọa độ đỉnh của đồ thị hàm số y = x^2 - 4x + 3.',
          problem_en: 'Find the coordinates of the vertex of the parabola y = x^2 - 4x + 3.',
          solution_steps: [
            {
              step_number: 1,
              title_vi: 'Xác định hệ số a, b, c',
              title_en: 'Identify coefficients a, b, c',
              content_vi: 'Ta có a = 1, b = -4, c = 3.',
              content_en: 'Here a = 1, b = -4, c = 3.',
              formula: 'a = 1, \\, b = -4, \\, c = 3',
            },
            {
              step_number: 2,
              title_vi: 'Tính hoành độ đỉnh x_I',
              title_en: 'Calculate x-coordinate of vertex',
              content_vi: 'x_I = -b / (2a) = -(-4) / (2 * 1) = 2.',
              content_en: 'x_I = -b / (2a) = 4 / 2 = 2.',
              formula: 'x_I = -\\frac{-4}{2(1)} = 2',
            },
            {
              step_number: 3,
              title_vi: 'Tính tung độ đỉnh y_I',
              title_en: 'Calculate y-coordinate of vertex',
              content_vi: 'y_I = f(2) = 2^2 - 4(2) + 3 = -1.',
              content_en: 'y_I = f(2) = 4 - 8 + 3 = -1.',
              formula: 'y_I = f(2) = -1',
            },
          ],
          conclusion_vi: 'Vậy đỉnh của parabol là I(2, -1).',
          conclusion_en: 'Thus, the vertex of the parabola is I(2, -1).',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
  ],
  questions: [
    {
      id: 'q-101',
      topic_id: 'top-10-2-2',
      question_type: 'MCQ',
      difficulty: 'EASY',
      language_level: 1,
      question_vi: 'Tọa độ đỉnh của parabol $y = x^2 - 4x + 3$ là:',
      question_en: 'What are the coordinates of the vertex of the parabola $y = x^2 - 4x + 3$?',
      options: [
        { option_key: 'A', content_vi: '(2, -1)', content_en: '(2, -1)', is_correct: true },
        { option_key: 'B', content_vi: '(-2, 1)', content_en: '(-2, 1)', is_correct: false },
        { option_key: 'C', content_vi: '(4, 3)', content_en: '(4, 3)', is_correct: false },
        { option_key: 'D', content_vi: '(2, 3)', content_en: '(2, 3)', is_correct: false },
      ],
      correct_answer: 'A',
      solution_vi: 'Ta có hoành độ đỉnh $x_I = -b/(2a) = -(-4)/(2) = 2$. Tung độ đỉnh $y_I = 2^2 - 4(2) + 3 = -1$. Vậy đỉnh là $I(2, -1)$.',
      solution_en: 'The x-coordinate of vertex is $x_I = -b/(2a) = 4/2 = 2$. Then $y_I = 2^2 - 4(2) + 3 = -1$. Therefore, the vertex is $(2, -1)$.',
      vocabulary_support: [
        { word: 'vertex', meaning: 'đỉnh của parabol' },
        { word: 'coordinates', meaning: 'tọa độ' },
      ],
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
    },
    {
      id: 'q-102',
      topic_id: 'top-10-2-2',
      question_type: 'MCQ',
      difficulty: 'MEDIUM',
      language_level: 2,
      question_vi: 'Cho hàm số $f(x) = -x^2 + 6x - 5$. Giá trị lớn nhất của hàm số trên tập số thực $\\mathbb{R}$ là:',
      question_en: 'Given the function $f(x) = -x^2 + 6x - 5$. The maximum value of $f(x)$ on $\\mathbb{R}$ is:',
      options: [
        { option_key: 'A', content_vi: '4', content_en: '4', is_correct: true },
        { option_key: 'B', content_vi: '3', content_en: '3', is_correct: false },
        { option_key: 'C', content_vi: '-5', content_en: '-5', is_correct: false },
        { option_key: 'D', content_vi: '9', content_en: '9', is_correct: false },
      ],
      correct_answer: 'A',
      solution_vi: 'Vì $a = -1 < 0$, hàm số đạt giá trị lớn nhất tại đỉnh $x = -b/(2a) = -6/(-2) = 3$. Giá trị lớn nhất là $f(3) = -(3)^2 + 6(3) - 5 = 4$.',
      solution_en: 'Since $a = -1 < 0$, the function attains maximum value at $x = -b/(2a) = 3$. The maximum value is $f(3) = -9 + 18 - 5 = 4$.',
      vocabulary_support: [
        { word: 'maximum value', meaning: 'giá trị lớn nhất' },
        { word: 'attains', meaning: 'đạt được' },
      ],
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
    },
    {
      id: 'q-103',
      topic_id: 'top-10-2-1',
      question_type: 'MCQ',
      difficulty: 'EASY',
      language_level: 1,
      question_vi: 'Tập xác định của hàm số $f(x) = \\sqrt{x - 3}$ là:',
      question_en: 'Find the domain of the function $f(x) = \\sqrt{x - 3}$:',
      options: [
        { option_key: 'A', content_vi: '$[3, +\\infty)$', content_en: '$[3, +\\infty)$', is_correct: true },
        { option_key: 'B', content_vi: '$(3, +\\infty)$', content_en: '$(3, +\\infty)$', is_correct: false },
        { option_key: 'C', content_vi: '$(-\\infty, 3]$', content_en: '$(-\\infty, 3]$', is_correct: false },
        { option_key: 'D', content_vi: '$\\mathbb{R} \\setminus \\{3\\}$', content_en: '$\\mathbb{R} \\setminus \\{3\\}$', is_correct: false },
      ],
      correct_answer: 'A',
      solution_vi: 'Biểu thức dưới căn xác định khi $x - 3 \\ge 0 \\iff x \\ge 3$. Vậy tập xác định là $D = [3, +\\infty)$.',
      solution_en: 'The square root is defined when $x - 3 \\ge 0 \\iff x \\ge 3$. So the domain is $D = [3, +\\infty)$.',
      vocabulary_support: [
        { word: 'domain', meaning: 'tập xác định' },
      ],
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
    },
  ],
  tests: [
    {
      id: 'tst-101',
      topic_id: 'top-10-2-2',
      title: 'Mini Test 15 phút: Hàm Số Bậc Hai (40% Tiếng Anh)',
      description: 'Kiểm tra kỹ năng giải toán kết hợp đọc hiểu thuật ngữ Tiếng Anh',
      test_type: 'MINI_TEST',
      duration_minutes: 15,
      english_ratio: 40,
      target_language_level: 2,
      question_ids: ['q-101', 'q-102', 'q-103'],
      created_by: 'usr-teacher-1',
    },
  ],
  test_attempts: [],
  practice_attempts: [],
  mei_scores: [
    {
      id: 'mei-1',
      student_id: 'usr-student-1',
      vocabulary_score: 72.5,
      reading_score: 68.0,
      problem_solving_score: 75.0,
      expression_score: 60.0,
      mei_score: 69.9,
      current_level: 2,
      calculated_at: new Date().toISOString(),
    },
  ],
};

// Initialize DB in localStorage
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

function saveLocalDb(db: any) {
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
    // If 404 or other server error, fallback to local DB
  } catch {
    // Network or server unreachable -> Fallback
  }

  // Local DB Fallback router
  const db = getLocalDb();
  const path = endpoint.split('?')[0];

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

  if (path.startsWith('/api/vocabulary/') && path.endsWith('/toggle-favorite')) {
    const id = path.split('/')[3];
    const item = db.vocabulary.find((v: any) => v.id === id);
    if (item) {
      item.is_favorite = !item.is_favorite;
      saveLocalDb(db);
      return { success: true, is_favorite: item.is_favorite } as any;
    }
    return { success: false } as any;
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

  if (path === '/api/sentence-patterns') {
    return db.sentence_patterns as any;
  }

  if (path === '/api/student/dashboard-summary') {
    return {
      student: db.profiles[0],
      mei: db.mei_scores[0],
      vocabulary: { learned: db.vocabulary.filter((v: any) => v.is_learned).length, total: db.vocabulary.length },
      lessons_completed: 4,
      practice_accuracy: 85,
      tests_completed: 2,
      streak_days: 5,
      recent_lesson: db.lessons[0],
      recommended_activities: [
        { id: 'act-1', type: 'VOCABULARY', title: 'Luyện 10 từ vựng Hàm số bậc hai', topic_id: 'top-10-2-2', level: 2 },
        { id: 'act-2', type: 'READING', title: 'Đọc & phân tích bài toán Parabol', topic_id: 'top-10-2-2', level: 2 },
        { id: 'act-3', type: 'MINI_TEST', title: 'Mini Test 15 phút - Tỷ lệ 40% Anh', test_id: 'tst-101', level: 2 },
      ],
    } as any;
  }

  return {} as any;
}
