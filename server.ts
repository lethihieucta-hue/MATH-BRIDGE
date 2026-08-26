import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { FULL_CHAPTERS, FULL_LESSONS, ALL_CURRENT_TYPE_IDS, LEGACY_TYPE_MIGRATION, migrateQuestionToCurrentCurriculum } from './src/lib/curriculumData';
import { FULL_QUESTION_BANK, DEFAULT_WORKED_EXAMPLES } from './src/lib/questionBankData';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// File path for JSON persistent database
const DB_FILE = path.join(process.cwd(), 'data', 'math_bridge_db.json');

// Helper to ensure data folder exists
if (!fs.existsSync(path.dirname(DB_FILE))) {
  fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
}

// Initial DB seed structure
const getInitialSeedData = () => ({
  schools: [
    { id: 'sch-1', name: 'THPT Ngô Quyền', province: 'Hưng Yên' },
    { id: 'sch-2', name: 'THPT Triệu Sơn', province: 'Thanh Hóa' },
    { id: 'sch-3', name: 'THPT Hải Hậu', province: 'Nam Định' },
  ],
  classes: [
    {
      id: 'class-10a1',
      name: 'Lớp 10A1 (Chuyên Toán-Anh)',
      school_id: 'sch-1',
      teacher_id: 'usr-teacher-1',
      grade_id: 10,
      school_year: '2025-2026',
      class_code: 'MB10A1',
      created_at: new Date().toISOString(),
      student_count: 32,
    },
    {
      id: 'class-11a2',
      name: 'Lớp 11A2',
      school_id: 'sch-1',
      teacher_id: 'usr-teacher-1',
      grade_id: 11,
      school_year: '2025-2026',
      class_code: 'MB11A2',
      created_at: new Date().toISOString(),
      student_count: 28,
    },
  ],
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
      meaning_vi: 'tính đơn điệu (đồng biến/nghịch biến)',
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
    {
      id: 'sp-5',
      topic_id: 'top-11-1-1',
      pattern_en: 'Calculate the derivative of f(x) with respect to x.',
      pattern_vi: 'Tính đạo hàm của f(x) theo biến x.',
      example_en: 'Calculate the derivative of f(x) = x^4 - 2x^2 + 1.',
      example_vi: 'Tính đạo hàm của f(x) = x^4 - 2x^2 + 1.',
      level: 3,
      usage_note: 'Câu lệnh quen thuộc trong chương Đạo hàm.',
    },
    {
      id: 'sp-6',
      topic_id: 'top-12-1-1',
      pattern_en: 'Prove that f(x) is strictly increasing on ...',
      pattern_vi: 'Chứng minh rằng f(x) đồng biến trên ...',
      example_en: 'Prove that f(x) = x^3 + x is strictly increasing on R.',
      example_vi: 'Chứng minh rằng f(x) = x^3 + x đồng biến trên R.',
      level: 3,
      usage_note: 'Câu hỏi chứng minh tính đơn điệu.',
    },
  ],
  lessons: [
    {
      id: 'les-10-2-2',
      topic_id: 'top-10-2-2',
      title_vi: 'Bài 1: Hàm số bậc hai & Đỉnh của Parabol',
      title_en: 'Lesson 1: Quadratic Functions & Parabola Vertex',
      learning_objectives: [
        'Hiểu và phát biểu được khái niệm Quadratic Function bằng tiếng Anh',
        'Xác định tọa độ đỉnh (Vertex) và Trục đối xứng (Axis of symmetry)',
        'Đọc và giải bài toán tìm Min/Max của hàm số bậc hai',
      ],
      vocabulary_list: ['voc-4', 'voc-5', 'voc-6', 'voc-7', 'voc-8', 'voc-9'],
      key_concepts_vi: 'Hàm số bậc hai có dạng y = ax^2 + bx + c (a khác 0). Đồ thị là một Parabol có đỉnh I(-b/2a; -Delta/4a). Nếu a > 0, bề lõm quay lên trên, hàm số đạt GTNN tại đỉnh. Nếu a < 0, bề lõm quay xuống dưới, hàm số đạt GTLN tại đỉnh.',
      key_concepts_en: 'A quadratic function has standard form y = ax^2 + bx + c (a != 0). Its graph is a Parabola with vertex I(-b/2a, -Delta/4a). If a > 0, the parabola opens upwards and attains a minimum value at the vertex. If a < 0, it opens downwards and attains a maximum value.',
      formulas: [
        'y = ax^2 + bx + c \\quad (a \\neq 0)',
        'x_I = -\\frac{b}{2a}, \\quad y_I = -\\frac{\\Delta}{4a}',
        '\\Delta = b^2 - 4ac',
      ],
      worked_examples: [
        {
          problem_en: 'Given the quadratic function f(x) = x^2 - 4x + 3. Determine the coordinates of its vertex and calculate its minimum value.',
          problem_vi: 'Cho hàm số bậc hai f(x) = x^2 - 4x + 3. Xác định tọa độ đỉnh và tính giá trị nhỏ nhất của hàm số.',
          solution_en: 'Identify coefficients: a = 1, b = -4, c = 3. Compute x-coordinate of vertex: x_I = -b/(2a) = -(-4)/(2*1) = 2. Substitute x = 2 into f(x): f(2) = 2^2 - 4(2) + 3 = -1. Thus, the vertex is I(2, -1). Since a = 1 > 0, the parabola opens upwards, so the minimum value is -1 at x = 2.',
          solution_vi: 'Xác định hệ số: a = 1, b = -4, c = 3. Tính hoành độ đỉnh: x_I = -b/(2a) = 2. Thay x = 2 vào f(x): f(2) = -1. Do đó đỉnh I(2, -1). Vì a = 1 > 0 nên parabol quay bề lõm lên trên, GTNN là -1 tại x = 2.',
          key_steps: [
            'Identify coefficients a, b, c',
            'Use formula x_I = -b / (2a)',
            'Calculate y_I = f(x_I)',
            'State the vertex coordinates and Min/Max conclusion',
          ],
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
      question_vi: 'Tọa độ đỉnh I của đồ thị hàm số y = x² - 4x + 3 là gì?',
      question_en: 'What are the coordinates of the vertex I of the parabola y = x² - 4x + 3?',
      question_bilingual: 'Cho hàm số y = x² - 4x + 3. Hãy tìm tọa độ đỉnh (vertex) I của đồ thị?',
      options: [
        { option_key: 'A', content_vi: 'I(2; -1)', content_en: 'I(2, -1)', is_correct: true },
        { option_key: 'B', content_vi: 'I(-2; 15)', content_en: 'I(-2, 15)', is_correct: false },
        { option_key: 'C', content_vi: 'I(4; 3)', content_en: 'I(4, 3)', is_correct: false },
        { option_key: 'D', content_vi: 'I(1; 0)', content_en: 'I(1, 0)', is_correct: false },
      ],
      solution_vi: 'Hoành độ x_I = -b/(2a) = -(-4)/(2*1) = 2. Tung độ y_I = 2² - 4(2) + 3 = -1. Tọa độ đỉnh I(2, -1).',
      solution_en: 'The x-coordinate is x_I = -b/(2a) = 2. The y-coordinate is y_I = 2² - 4(2) + 3 = -1. Hence, the vertex is I(2, -1).',
      correct_answer: 'A',
      vocabulary_support: [
        { word: 'vertex', meaning: 'đỉnh của parabol' },
        { word: 'coordinates', meaning: 'tọa độ (x, y)' },
      ],
      formula_support: ['x_I = -\\frac{b}{2a}'],
      math_skill: 'Quadratic function analysis',
      english_skill: 'Identifying math key terms in questions',
      given_info: 'Parabola function y = x² - 4x + 3',
      required_info: 'Coordinates of vertex I(x, y)',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-102',
      topic_id: 'top-10-2-2',
      question_type: 'MCQ',
      difficulty: 'MEDIUM',
      language_level: 2,
      question_vi: 'Giá trị nhỏ nhất (Minimum value) của hàm số f(x) = 2x² - 8x + 5 là bao nhiêu?',
      question_en: 'Determine the minimum value of the quadratic function f(x) = 2x² - 8x + 5.',
      options: [
        { option_key: 'A', content_vi: 'Min = -3', content_en: 'Min = -3', is_correct: true },
        { option_key: 'B', content_vi: 'Min = 2', content_en: 'Min = 2', is_correct: false },
        { option_key: 'C', content_vi: 'Min = -8', content_en: 'Min = -8', is_correct: false },
        { option_key: 'D', content_vi: 'Min = 5', content_en: 'Min = 5', is_correct: false },
      ],
      solution_vi: 'Hệ số a = 2 > 0 nên hàm số đạt GTNN tại đỉnh x = -b/(2a) = 8 / 4 = 2. f(2) = 2(4) - 8(2) + 5 = 8 - 16 + 5 = -3.',
      solution_en: 'Coeff a = 2 > 0 implies minimum at vertex x = 2. f(2) = 8 - 16 + 5 = -3.',
      correct_answer: 'A',
      vocabulary_support: [
        { word: 'minimum value', meaning: 'giá trị nhỏ nhất' },
        { word: 'determine', meaning: 'xác định / tìm' },
      ],
      formula_support: ['f(x) = ax^2 + bx + c', 'x = -\\frac{b}{2a}'],
      math_skill: 'Extreme value of quadratic polynomial',
      english_skill: 'Reading sentence commands in English',
      given_info: 'f(x) = 2x² - 8x + 5',
      required_info: 'Minimum value of f(x)',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-103',
      topic_id: 'top-10-2-1',
      question_type: 'MCQ',
      difficulty: 'EASY',
      language_level: 1,
      question_vi: 'Tập xác định D (Domain) của hàm số f(x) = \\sqrt{x - 3} là gì?',
      question_en: 'Find the domain of the function f(x) = \\sqrt{x - 3}.',
      options: [
        { option_key: 'A', content_vi: 'D = [3, +\\infty)', content_en: 'D = [3, +infinity)', is_correct: true },
        { option_key: 'B', content_vi: 'D = (3, +\\infty)', content_en: 'D = (3, +infinity)', is_correct: false },
        { option_key: 'C', content_vi: 'D = (-\\infty, 3]', content_en: 'D = (-infinity, 3]', is_correct: false },
        { option_key: 'D', content_vi: 'D = \\mathbb{R} \\setminus \\{3\\}', content_en: 'D = R \\ {3}', is_correct: false },
      ],
      solution_vi: 'Hàm số xác định khi x - 3 >= 0 <=> x >= 3. Vậy D = [3, +vô cực).',
      solution_en: 'Defined when x - 3 >= 0 => x >= 3. Domain is [3, +infinity).',
      correct_answer: 'A',
      vocabulary_support: [
        { word: 'domain', meaning: 'tập xác định' },
      ],
      formula_support: ['\\sqrt{A} \\text{ is defined when } A \\ge 0'],
      math_skill: 'Domain of square root function',
      english_skill: 'Basic math terminology',
      given_info: 'Function f(x) = \\sqrt{x - 3}',
      required_info: 'Domain of f(x)',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-104',
      topic_id: 'top-10-2-2',
      question_type: 'TRUE_FALSE',
      difficulty: 'EASY',
      language_level: 2,
      question_vi: 'Trục đối xứng (Axis of symmetry) của parabol y = x² - 6x + 5 là đường thẳng x = 3. Đúng hay Sai?',
      question_en: 'True or False: The axis of symmetry of y = x² - 6x + 5 is x = 3.',
      options: [
        { option_key: 'A', content_vi: 'Đúng (True)', content_en: 'True', is_correct: true },
        { option_key: 'B', content_vi: 'Sai (False)', content_en: 'False', is_correct: false },
      ],
      solution_vi: 'Phương trình trục đối xứng x = -b/(2a) = -(-6)/(2*1) = 3. Do đó khẳng định trên ĐÚNG.',
      solution_en: 'Axis of symmetry x = -b/(2a) = 3. Hence, the statement is TRUE.',
      correct_answer: 'A',
      vocabulary_support: [
        { word: 'axis of symmetry', meaning: 'trục đối xứng' },
      ],
      formula_support: ['x = -\\frac{b}{2a}'],
      math_skill: 'Axis of symmetry computation',
      english_skill: 'Evaluating mathematical statements',
      given_info: 'y = x² - 6x + 5',
      required_info: 'Check if axis of symmetry is x = 3',
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
    {
      id: 'q-105',
      topic_id: 'top-11-1-1',
      question_type: 'MCQ',
      difficulty: 'MEDIUM',
      language_level: 3,
      question_vi: 'Tính đạo hàm (derivative) của hàm số f(x) = x³ - 3x + 2.',
      question_en: 'Calculate the derivative of the polynomial function f(x) = x³ - 3x + 2.',
      options: [
        { option_key: 'A', content_vi: "f'(x) = 3x² - 3", content_en: "f'(x) = 3x² - 3", is_correct: true },
        { option_key: 'B', content_vi: "f'(x) = 3x²", content_en: "f'(x) = 3x²", is_correct: false },
        { option_key: 'C', content_vi: "f'(x) = 3x - 3", content_en: "f'(x) = 3x - 3", is_correct: false },
        { option_key: 'D', content_vi: "f'(x) = x² - 3", content_en: "f'(x) = x² - 3", is_correct: false },
      ],
      solution_vi: "Áp dụng quy tắc tính đạo hàm: (x^n)' = n*x^(n-1). Ta có f'(x) = 3x² - 3.",
      solution_en: "Applying power rule: (x^n)' = n*x^(n-1). We obtain f'(x) = 3x² - 3.",
      correct_answer: 'A',
      vocabulary_support: [
        { word: 'derivative', meaning: 'đạo hàm' },
        { word: 'polynomial', meaning: 'đa thức' },
      ],
      formula_support: ["(x^n)' = n x^{n-1}"],
      math_skill: 'Differentiation rules',
      english_skill: 'Understanding derivative problem prompts',
      given_info: 'f(x) = x³ - 3x + 2',
      required_info: "Derivative f'(x)",
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
  ],
  tests: [
    {
      id: 'tst-101',
      title: 'Bài Kiểm Tra Hàm Số Bậc Hai (Quadratic Functions Test)',
      description: 'Bài kiểm tra 15 phút với tỷ lệ tiếng Anh 40%. Đánh giá khả năng đọc đề và tìm đỉnh Parabol.',
      teacher_id: 'usr-teacher-1',
      teacher_name: 'Cô Lê Thị Mai',
      duration_minutes: 15,
      english_ratio: 40,
      max_attempts: 3,
      shuffle_questions: true,
      shuffle_options: true,
      show_result: true,
      show_solution: true,
      status: 'ACTIVE',
      question_ids: ['q-101', 'q-102', 'q-103', 'q-104', 'q-105'],
      class_id: 'class-10a1',
      created_at: new Date().toISOString(),
    },
  ],
  practice_attempts: [],
  test_attempts: [],
  hint_logs: [],
  mei_scores: [
    {
      id: 'mei-1',
      student_id: 'usr-student-1',
      vocabulary_score: 75,
      reading_score: 65,
      problem_solving_score: 60,
      expression_score: 50,
      mei_score: 63.8, // 0.25*75 + 0.25*65 + 0.30*60 + 0.20*50 = 18.75 + 16.25 + 18 + 10 = 63.0
      calculated_at: new Date().toISOString(),
    },
  ],
  student_levels: [
    {
      id: 'lvl-1',
      student_id: 'usr-student-1',
      current_level: 2,
      previous_level: 1,
      recommended_level: 3,
      teacher_approved: true,
      changed_at: new Date().toISOString(),
    },
  ],
});

// Keep the server database aligned with the canonical GDPT 2018 curriculum used by the client.
// Previously the Express seed contained only a tiny legacy curriculum, so a running server could
// silently override the complete Grade 10-12 data from src/lib/dataService.ts.
const isLegacyExtremaFallbackQuestion = (q: any) => {
  const text = `${q?.question_vi || ''} ${q?.solution_vi || ''}`.toLowerCase();
  return (
    (/\[trắc nghiệm\s*\d+\]/i.test(text) && text.includes('x^3') && text.includes('điểm cực đại')) ||
    (/\[đúng\/sai\s*\d+\]/i.test(text) && text.includes('-x^3 + 3x + 1')) ||
    (/\[tln\s*\d+\]/i.test(text) && text.includes('tung độ điểm cực đại'))
  );
};

const normalizeLessonIdentity = (title?: string): string => (title || '')
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/đ/g, 'd')
  .replace(/^bai\s+\d+\.\s*/i, '')
  .replace(/\s+/g, ' ')
  .trim();

const canReuseStoredLessonContent = (stored: any, canonical: any): boolean => {
  if (!stored?.updated_at) return false;
  return normalizeLessonIdentity(stored.title_vi) === normalizeLessonIdentity(canonical.title_vi);
};

const migrateStoredWorkedExamples = (examples: any[], canonical: any): any[] => {
  const allowedTypeIds = new Set((canonical.types || []).map((type: any) => type.id));
  return (examples || []).map((example: any) => {
    const oldTypeId = example?.type_id as string | undefined;
    const mappedTypeId = oldTypeId ? (LEGACY_TYPE_MIGRATION[oldTypeId] || oldTypeId) : undefined;
    return { ...example, type_id: mappedTypeId };
  }).filter((example: any) => !example.type_id || allowedTypeIds.has(example.type_id));
};

const syncCanonicalCurriculum = (db: any) => {
  const storedLessons = new Map((db.lessons || []).map((l: any) => [l.id, l]));

  db.chapters = FULL_CHAPTERS;
  db.lessons = FULL_LESSONS.map((canonical: any) => {
    const stored: any = storedLessons.get(canonical.id);
    const canonicalWorked = DEFAULT_WORKED_EXAMPLES[canonical.id] || canonical.worked_examples || [];
    const reuseStored = canReuseStoredLessonContent(stored, canonical);

    // Only preserve lesson content that was explicitly updated through the app. Curriculum identity
    // (chapter/topic/title/type IDs) always comes from the canonical source so routing cannot drift.
    const merged = reuseStored ? { ...canonical, ...stored } : { ...canonical };
    return {
      ...merged,
      id: canonical.id,
      chapter_id: canonical.chapter_id,
      topic_id: canonical.topic_id,
      title_vi: canonical.title_vi,
      title_en: canonical.title_en,
      types: canonical.types,
      worked_examples: (reuseStored && stored?.worked_examples?.length)
        ? migrateStoredWorkedExamples(stored.worked_examples, canonical)
        : canonicalWorked,
    };
  });

  const canonicalQuestions = FULL_QUESTION_BANK;
  const canonicalIds = new Set(canonicalQuestions.map((q: any) => q.id));
  const customQuestions = (db.questions || []).filter(
    (q: any) => !canonicalIds.has(q.id) && !isLegacyExtremaFallbackQuestion(q)
  ).map((q: any) => migrateQuestionToCurrentCurriculum(q)).filter((q: any) => !q.type_id || ALL_CURRENT_TYPE_IDS.has(q.type_id));
  db.questions = [...canonicalQuestions, ...customQuestions];
  return db;
};

// Helper to get db or create initial
const getDb = () => {
  if (!fs.existsSync(DB_FILE)) {
    const seed = syncCanonicalCurriculum(getInitialSeedData());
    fs.writeFileSync(DB_FILE, JSON.stringify(seed, null, 2), 'utf-8');
    return seed;
  }
  try {
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    const parsed = JSON.parse(content);
    const synced = syncCanonicalCurriculum(parsed);
    // Persist migrations so legacy chapter/question data cannot reappear on the next request.
    fs.writeFileSync(DB_FILE, JSON.stringify(synced, null, 2), 'utf-8');
    return synced;
  } catch (err) {
    const seed = syncCanonicalCurriculum(getInitialSeedData());
    fs.writeFileSync(DB_FILE, JSON.stringify(seed, null, 2), 'utf-8');
    return seed;
  }
};

// Helper to save db
const saveDb = (data: any) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
};

// REST API ROUTES
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'MATH-BRIDGE', version: '1.0.0' });
});

// Auth endpoints
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const db = getDb();
  const user = db.profiles.find((p: any) => p.email.toLowerCase() === (email || '').toLowerCase());

  if (user) {
    return res.json({ success: true, user, token: `token-${user.id}` });
  }

  // Fallback demo user creator if not found
  const newUser = {
    id: `usr-${Date.now()}`,
    full_name: email.split('@')[0],
    email: email,
    role: email.includes('teacher') ? 'teacher' : email.includes('admin') ? 'admin' : 'student',
    grade_id: 10,
    current_level: 2,
    created_at: new Date().toISOString(),
  };
  db.profiles.push(newUser);
  saveDb(db);
  res.json({ success: true, user: newUser, token: `token-${newUser.id}` });
});

app.get('/api/auth/me', (req, res) => {
  const userId = req.headers['x-user-id'] as string;
  const db = getDb();
  const user = db.profiles.find((p: any) => p.id === userId) || db.profiles[0];
  res.json({ user });
});

// Curriculum endpoints
app.get('/api/grades', (req, res) => {
  const db = getDb();
  res.json(db.grades);
});

app.get('/api/chapters', (req, res) => {
  const gradeId = parseInt(req.query.grade_id as string, 10);
  const db = getDb();
  let chapters = db.chapters;
  if (gradeId) {
    chapters = chapters.filter((c: any) => c.grade_id === gradeId);
  }
  res.json(chapters);
});

app.get('/api/topics', (req, res) => {
  const chapterId = req.query.chapter_id as string;
  const db = getDb();
  let topics = db.topics;
  if (chapterId) {
    topics = topics.filter((t: any) => t.chapter_id === chapterId);
  }
  res.json(topics);
});

// Vocabulary endpoints
app.get('/api/vocabulary', (req, res) => {
  const topicId = req.query.topic_id as string;
  const level = req.query.level ? parseInt(req.query.level as string, 10) : null;
  const db = getDb();
  let list = db.vocabulary;
  if (topicId) {
    list = list.filter((v: any) => v.topic_id === topicId);
  }
  if (level) {
    list = list.filter((v: any) => v.language_level === level);
  }
  res.json(list);
});

app.post('/api/vocabulary', (req, res) => {
  const db = getDb();
  const newItem = {
    id: `voc-${Date.now()}`,
    ...req.body,
    created_at: new Date().toISOString(),
  };
  db.vocabulary.push(newItem);
  saveDb(db);
  res.json({ success: true, vocabulary: newItem });
});

app.post('/api/vocabulary/:id/toggle-favorite', (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const item = db.vocabulary.find((v: any) => v.id === id);
  if (item) {
    item.is_favorite = !item.is_favorite;
    saveDb(db);
    return res.json({ success: true, is_favorite: item.is_favorite });
  }
  res.status(404).json({ error: 'Vocabulary not found' });
});

app.post('/api/vocabulary/:id/toggle-learned', (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const item = db.vocabulary.find((v: any) => v.id === id);
  if (item) {
    item.is_learned = !item.is_learned;
    saveDb(db);
    return res.json({ success: true, is_learned: item.is_learned });
  }
  res.status(404).json({ error: 'Vocabulary not found' });
});

// Sentence patterns
app.get('/api/sentence-patterns', (req, res) => {
  const topicId = req.query.topic_id as string;
  const db = getDb();
  let list = db.sentence_patterns;
  if (topicId) {
    list = list.filter((sp: any) => sp.topic_id === topicId);
  }
  res.json(list);
});

// Lessons
app.get('/api/lessons', (req, res) => {
  const topicId = req.query.topic_id as string;
  const db = getDb();
  let list = db.lessons;
  if (topicId) {
    list = list.filter((l: any) => l.topic_id === topicId);
  }
  res.json(list);
});

app.post('/api/lessons', (req, res) => {
  const db = getDb();
  const requestedId = req.body?.id as string | undefined;
  const existingIndex = requestedId ? db.lessons.findIndex((l: any) => l.id === requestedId) : -1;
  const lesson = {
    ...req.body,
    id: requestedId || `les-${Date.now()}`,
    created_at: req.body?.created_at || new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  if (existingIndex >= 0) db.lessons[existingIndex] = { ...db.lessons[existingIndex], ...lesson };
  else db.lessons.push(lesson);
  saveDb(db);
  res.json({ success: true, lesson });
});

// Questions Bank
app.post('/api/questions/replace-types', (req, res) => {
  const db = getDb();
  const typeIds = new Set<string>((req.body?.type_ids || []).filter(Boolean));
  const incoming = Array.isArray(req.body?.questions) ? req.body.questions : [];

  const canonicalIds = new Set(FULL_QUESTION_BANK.map((q: any) => q.id));
  db.questions = (db.questions || []).filter(
    (q: any) => canonicalIds.has(q.id) || !q.type_id || !typeIds.has(q.type_id)
  );
  const now = new Date().toISOString();
  const saved = incoming.map((q: any, idx: number) => ({
    ...q,
    id: q.id || `q-ai-${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 7)}`,
    created_at: q.created_at || now,
    updated_at: now,
  }));
  db.questions.push(...saved);
  saveDb(db);
  res.json({ success: true, count: saved.length, questions: saved });
});

app.get('/api/questions', (req, res) => {
  const topicId = req.query.topic_id as string;
  const difficulty = req.query.difficulty as string;
  const level = req.query.level ? parseInt(req.query.level as string, 10) : null;
  const db = getDb();
  let list = db.questions;
  if (topicId) {
    list = list.filter((q: any) => q.topic_id === topicId);
  }
  if (difficulty) {
    list = list.filter((q: any) => q.difficulty === difficulty);
  }
  if (level) {
    list = list.filter((q: any) => q.language_level === level);
  }
  res.json(list);
});

app.post('/api/questions', (req, res) => {
  const db = getDb();
  const requestedId = req.body?.id as string | undefined;
  const existingIndex = requestedId ? db.questions.findIndex((q: any) => q.id === requestedId) : -1;
  const question = {
    ...req.body,
    id: requestedId || `q-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    created_at: req.body?.created_at || new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  if (existingIndex >= 0) db.questions[existingIndex] = { ...db.questions[existingIndex], ...question };
  else db.questions.push(question);
  saveDb(db);
  res.json({ success: true, question });
});

// Practice submit with diagnostic error classification
app.post('/api/practice/submit', (req, res) => {
  const { student_id, question_id, student_answer, response_time, language_mode, hint_count, vocabulary_check } = req.body;
  const db = getDb();
  const question = db.questions.find((q: any) => q.id === question_id);

  if (!question) {
    return res.status(404).json({ error: 'Question not found' });
  }

  const is_correct = (student_answer || '').trim().toUpperCase() === (question.correct_answer || '').trim().toUpperCase();

  let error_type = 'CORRECT';
  if (!is_correct) {
    if (vocabulary_check === false) {
      error_type = 'LANGUAGE_ERROR';
    } else if (vocabulary_check === true) {
      error_type = 'MATH_ERROR';
    } else {
      error_type = hint_count > 1 ? 'MATH_AND_LANGUAGE_ERROR' : 'MATH_ERROR';
    }
  }

  const attempt = {
    id: `pa-${Date.now()}`,
    student_id: student_id || 'usr-student-1',
    question_id,
    student_answer,
    is_correct,
    response_time: response_time || 12,
    language_mode: language_mode || 'BILINGUAL',
    hint_count: hint_count || 0,
    error_type,
    created_at: new Date().toISOString(),
  };

  db.practice_attempts.push(attempt);

  // Update MEI score if needed
  const meiEntry = db.mei_scores.find((m: any) => m.student_id === attempt.student_id);
  if (meiEntry) {
    if (is_correct) {
      meiEntry.problem_solving_score = Math.min(100, meiEntry.problem_solving_score + 1.5);
    }
    meiEntry.mei_score = Math.round((0.25 * meiEntry.vocabulary_score + 0.25 * meiEntry.reading_score + 0.30 * meiEntry.problem_solving_score + 0.20 * meiEntry.expression_score) * 10) / 10;
  }

  saveDb(db);
  res.json({ success: true, attempt, is_correct, question_solution: question.solution_vi, error_type });
});

// Hint logs
app.post('/api/hint-log', (req, res) => {
  const db = getDb();
  const log = {
    id: `hl-${Date.now()}`,
    ...req.body,
    created_at: new Date().toISOString(),
  };
  db.hint_logs.push(log);
  saveDb(db);
  res.json({ success: true, log });
});

// Tests
app.get('/api/tests', (req, res) => {
  const db = getDb();
  res.json(db.tests);
});

app.post('/api/tests', (req, res) => {
  const db = getDb();
  const newTest = {
    id: `tst-${Date.now()}`,
    ...req.body,
    created_at: new Date().toISOString(),
  };
  db.tests.push(newTest);
  saveDb(db);
  res.json({ success: true, test: newTest });
});

// Start & submit test attempts
app.get('/api/tests/:id/take', (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const test = db.tests.find((t: any) => t.id === id);
  if (!test) return res.status(404).json({ error: 'Test not found' });

  // Get question items
  const questions = db.questions.filter((q: any) => test.question_ids.includes(q.id));
  
  res.json({ test, questions });
});

app.post('/api/tests/:id/submit', (req, res) => {
  const { id } = req.params;
  const { student_id, answers } = req.body; // answers: { question_id, student_answer, hint_count }[]
  const db = getDb();
  const test = db.tests.find((t: any) => t.id === id);

  if (!test) return res.status(404).json({ error: 'Test not found' });

  let correctCount = 0;
  const totalQuestions = answers.length || 1;
  const processedAnswers = answers.map((ans: any) => {
    const q = db.questions.find((item: any) => item.id === ans.question_id);
    const isCorrect = q && (q.correct_answer || '').toUpperCase() === (ans.student_answer || '').toUpperCase();
    if (isCorrect) correctCount++;
    return {
      question_id: ans.question_id,
      student_answer: ans.student_answer,
      is_correct: isCorrect,
      points: isCorrect ? 10 : 0,
      error_type: isCorrect ? 'CORRECT' : 'MATH_ERROR',
      hint_count: ans.hint_count || 0,
    };
  });

  const finalScore = Math.round((correctCount / totalQuestions) * 100);

  const attempt = {
    id: `ta-${Date.now()}`,
    test_id: id,
    student_id: student_id || 'usr-student-1',
    started_at: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    submitted_at: new Date().toISOString(),
    score: finalScore,
    math_score: finalScore,
    english_math_score: Math.round(finalScore * (test.english_ratio / 100)),
    status: 'COMPLETED',
    answers: processedAnswers,
  };

  db.test_attempts.push(attempt);
  saveDb(db);

  res.json({ success: true, attempt });
});

// Student Dashboard Summary
app.get('/api/student/dashboard-summary', (req, res) => {
  const studentId = (req.headers['x-user-id'] as string) || 'usr-student-1';
  const db = getDb();
  const student = db.profiles.find((p: any) => p.id === studentId) || db.profiles[0];
  const mei = db.mei_scores.find((m: any) => m.student_id === studentId) || db.mei_scores[0];
  const learnedVocab = db.vocabulary.filter((v: any) => v.is_learned).length;
  const totalVocab = db.vocabulary.length;
  const practiceAttempts = db.practice_attempts.filter((pa: any) => pa.student_id === studentId);
  const correctPractice = practiceAttempts.filter((pa: any) => pa.is_correct).length;
  const practiceAccuracy = practiceAttempts.length > 0 ? Math.round((correctPractice / practiceAttempts.length) * 100) : 85;

  res.json({
    student,
    mei,
    vocabulary: { learned: learnedVocab, total: totalVocab },
    lessons_completed: 4,
    practice_accuracy: practiceAccuracy,
    tests_completed: db.test_attempts.length,
    streak_days: student.streak_days || 5,
    recent_lesson: db.lessons[0],
    recommended_activities: [
      { id: 'act-1', type: 'VOCABULARY', title: 'Luyện 10 từ vựng Hàm số bậc hai', topic_id: 'top-10-2-2', level: 2 },
      { id: 'act-2', type: 'READING', title: 'Đọc & phân tích bài toán Parabol', topic_id: 'top-10-2-2', level: 2 },
      { id: 'act-3', type: 'MINI_TEST', title: 'Mini Test 15 phút - Tỷ lệ 40% Anh', test_id: 'tst-101', level: 2 },
    ],
  });
});

// Teacher Classes & Analytics
app.get('/api/teacher/classes', (req, res) => {
  const db = getDb();
  res.json(db.classes);
});

app.post('/api/teacher/classes', (req, res) => {
  const db = getDb();
  const newClass = {
    id: `class-${Date.now()}`,
    class_code: `MB${Math.floor(1000 + Math.random() * 9000)}`,
    student_count: 0,
    created_at: new Date().toISOString(),
    ...req.body,
  };
  db.classes.push(newClass);
  saveDb(db);
  res.json({ success: true, class: newClass });
});

app.get('/api/teacher/analytics', (req, res) => {
  const db = getDb();
  res.json({
    class_average_mei: 64.5,
    math_accuracy_avg: 78.2,
    english_math_accuracy_avg: 62.1,
    vocabulary_mastery_pct: 71.0,
    reading_comprehension_pct: 66.5,
    problem_solving_pct: 59.8,
    most_difficult_vocabulary: ['monotonicity', 'axis of symmetry', 'vertex', 'range'],
    most_difficult_questions: ['q-102', 'q-105'],
    students_needing_support: [
      { name: 'Trần Văn Bình', level: 1, mei: 38, issue: 'Cần hỗ trợ từ vựng Toán tiếng Anh' },
      { name: 'Lê Hoàng Nam', level: 2, mei: 45, issue: 'Gặp khó khăn khi đọc câu lệnh đố bằng tiếng Anh' },
    ],
    students_ready_next_level: [
      { name: 'Nguyễn Văn An', level: 2, recommended: 3, mei: 63.8 },
      { name: 'Phạm Thu Trang', level: 3, recommended: 4, mei: 76.2 },
    ],
  });
});

// Admin stats
app.get('/api/admin/stats', (req, res) => {
  const db = getDb();
  res.json({
    total_users: db.profiles.length + 120,
    total_students: 110,
    total_teachers: 12,
    total_schools: db.schools.length,
    total_questions: db.questions.length + 45,
    total_tests: db.tests.length + 15,
    total_lessons: db.lessons.length + 20,
    active_classes: db.classes.length,
  });
});

// Vite & Static file serving setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MATH-BRIDGE Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
