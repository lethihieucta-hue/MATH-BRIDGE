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

const DB_KEY = 'math_bridge_client_db_v3';

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
    // LỚP 10
    {
      id: 'chap-10-1',
      grade_id: 10,
      name_vi: 'Chương 1: Mệnh đề & Tập hợp',
      name_en: 'Chapter 1: Propositions & Sets',
      description: 'Cơ sở logic toán học, mệnh đề phủ định, kéo theo và các phép toán tập hợp',
      order_index: 1,
    },
    {
      id: 'chap-10-2',
      grade_id: 10,
      name_vi: 'Chương 2: Hàm số & Hàm số bậc hai',
      name_en: 'Chapter 2: Functions & Quadratic Functions',
      description: 'Định nghĩa hàm số, tập xác định, đồ thị parabol, đỉnh và trục đối xứng',
      order_index: 2,
    },
    {
      id: 'chap-10-3',
      grade_id: 10,
      name_vi: 'Chương 3: Véctơ & Hệ thức lượng trong tam giác',
      name_en: 'Chapter 3: Vectors & Trigonometry in Triangles',
      description: 'Các phép toán véctơ, tích vô hướng, định lý Cosin và Sin',
      order_index: 3,
    },
    // LỚP 11
    {
      id: 'chap-11-1',
      grade_id: 11,
      name_vi: 'Chương 1: Dãy số, Cấp số cộng & Cấp số nhân',
      name_en: 'Chapter 1: Sequences, Arithmetic & Geometric Progressions',
      description: 'Công sai, công bội, số hạng tổng quát và tổng n số hạng đầu',
      order_index: 1,
    },
    {
      id: 'chap-11-2',
      grade_id: 11,
      name_vi: 'Chương 2: Giới hạn & Đạo hàm',
      name_en: 'Chapter 2: Limits & Derivatives',
      description: 'Quy tắc tính đạo hàm, ý nghĩa hình học và phương trình tiếp tuyến',
      order_index: 2,
    },
    {
      id: 'chap-11-3',
      grade_id: 11,
      name_vi: 'Chương 3: Quan hệ vuông góc trong không gian',
      name_en: 'Chapter 3: Orthogonality in Spatial Geometry',
      description: 'Đường thẳng vuông góc với mặt phẳng, góc giữa hai mặt phẳng, khoảng cách',
      order_index: 3,
    },
    // LỚP 12
    {
      id: 'chap-12-1',
      grade_id: 12,
      name_vi: 'Chương 1: Ứng dụng đạo hàm khảo sát hàm số',
      name_en: 'Chapter 1: Applications of Derivatives in Function Analysis',
      description: 'Tính đơn điệu, cực trị, giá trị lớn nhất, nhỏ nhất, tiệm cận',
      order_index: 1,
    },
    {
      id: 'chap-12-2',
      grade_id: 12,
      name_vi: 'Chương 2: Hàm số Mũ & Lôgarit',
      name_en: 'Chapter 2: Exponential & Logarithmic Functions',
      description: 'Lũy thừa, phương trình và bất phương trình mũ, lôgarit',
      order_index: 2,
    },
    {
      id: 'chap-12-3',
      grade_id: 12,
      name_vi: 'Chương 3: Nguyên hàm & Tích phân',
      name_en: 'Chapter 3: Antiderivatives & Integrals',
      description: 'Tích phân xác định, tích phân từng phần và ứng dụng tính diện tích, thể tích',
      order_index: 3,
    },
    {
      id: 'chap-12-4',
      grade_id: 12,
      name_vi: 'Chương 4: Phương pháp tọa độ trong không gian Oxyz',
      name_en: 'Chapter 4: 3D Coordinate Geometry (Oxyz)',
      description: 'Véctơ pháp tuyến, phương trình mặt phẳng, đường thẳng và mặt cầu',
      order_index: 4,
    },
  ],
  topics: [
    // Topics Lớp 10
    {
      id: 'top-10-1-1',
      chapter_id: 'chap-10-1',
      name_vi: 'Chủ đề 1: Mệnh đề & Phép toán Tập hợp',
      name_en: 'Topic 1: Propositions & Set Operations',
      description: 'Giao, hợp, hiệu, phần bù và ký hiệu $\\forall, \\exists$',
      order_index: 1,
    },
    {
      id: 'top-10-2-1',
      chapter_id: 'chap-10-2',
      name_vi: 'Chủ đề 2: Hàm số & Tập xác định',
      name_en: 'Topic 2: Functions, Domain & Range',
      description: 'Khái niệm hàm số, tập xác định (Domain) và tập giá trị (Range)',
      order_index: 2,
    },
    {
      id: 'top-10-2-2',
      chapter_id: 'chap-10-2',
      name_vi: 'Chủ đề 3: Hàm số bậc hai & Đỉnh Parabol',
      name_en: 'Topic 3: Quadratic Functions & Parabola Vertex',
      description: 'Hàm số $y = ax^2 + bx + c$, đỉnh parabol $I(-b/2a, -\\Delta/4a)$',
      order_index: 3,
    },
    {
      id: 'top-10-3-1',
      chapter_id: 'chap-10-3',
      name_vi: 'Chủ đề 4: Khái niệm véctơ & Phép toán véctơ',
      name_en: 'Topic 4: Vector Concepts & Operations',
      description: 'Độ dài véctơ, véctơ cùng phương, tích vô hướng',
      order_index: 4,
    },

    // Topics Lớp 11
    {
      id: 'top-11-1-1',
      chapter_id: 'chap-11-1',
      name_vi: 'Chủ đề 1: Cấp số cộng & Cấp số nhân',
      name_en: 'Topic 1: Arithmetic & Geometric Progressions',
      description: 'Công thức số hạng tổng quát $u_n$, công sai $d$, công bội $q$',
      order_index: 1,
    },
    {
      id: 'top-11-2-1',
      chapter_id: 'chap-11-2',
      name_vi: 'Chủ đề 2: Định nghĩa & Quy tắc tính đạo hàm',
      name_en: 'Topic 2: Definition & Differentiation Rules',
      description: 'Đạo hàm cơ bản, đạo hàm hàm hợp và phương trình tiếp tuyến',
      order_index: 2,
    },
    {
      id: 'top-11-3-1',
      chapter_id: 'chap-11-3',
      name_vi: 'Chủ đề 3: Đường thẳng vuông góc với mặt phẳng',
      name_en: 'Topic 3: Line Perpendicular to Plane',
      description: 'Chứng minh đường vuông góc với mặt và tính khoảng cách',
      order_index: 3,
    },

    // Topics Lớp 12
    {
      id: 'top-12-1-1',
      chapter_id: 'chap-12-1',
      name_vi: 'Chủ đề 1: Tính đơn điệu & Giá trị lớn nhất / nhỏ nhất',
      name_en: 'Topic 1: Monotonicity & Extreme Values',
      description: 'Đồng biến, nghịch biến, cực đại, cực tiểu, Max & Min',
      order_index: 1,
    },
    {
      id: 'top-12-1-2',
      chapter_id: 'chap-12-1',
      name_vi: 'Chủ đề 2: Đường tiệm cận của đồ thị hàm số',
      name_en: 'Topic 2: Asymptotes of Function Graphs',
      description: 'Tiệm cận đứng, tiệm cận ngang và tiệm cận xiên',
      order_index: 2,
    },
    {
      id: 'top-12-2-1',
      chapter_id: 'chap-12-2',
      name_vi: 'Chủ đề 3: Lũy thừa, Mũ & Lôgarit',
      name_en: 'Topic 3: Exponents & Logarithms',
      description: 'Đạo hàm và phương trình hàm số mũ, lôgarit tự nhiên $\\ln(x)$',
      order_index: 3,
    },
    {
      id: 'top-12-3-1',
      chapter_id: 'chap-12-3',
      name_vi: 'Chủ đề 4: Nguyên hàm & Tích phân xác định',
      name_en: 'Topic 4: Antiderivatives & Definite Integrals',
      description: 'Bảng nguyên hàm, công thức Newton-Leibniz và ứng dụng diện tích',
      order_index: 4,
    },
    {
      id: 'top-12-4-1',
      chapter_id: 'chap-12-4',
      name_vi: 'Chủ đề 5: Tọa độ không gian Oxyz & Phương trình mặt phẳng',
      name_en: 'Topic 5: 3D Coordinate Geometry & Planes',
      description: 'Véctơ pháp tuyến $\\vec{n}$, phương trình mặt phẳng $Ax + By + Cz + D = 0$',
      order_index: 5,
    },
  ],
  vocabulary: [
    // === LỚP 10 ===
    {
      id: 'voc-1',
      topic_id: 'top-10-2-1',
      word: 'function',
      ipa: '/ˈfʌŋk.ʃən/',
      meaning_vi: 'hàm số',
      definition_en: 'A relation that maps each input element to exactly one output element.',
      example_en: 'The equation $f(x) = 2x + 3$ is a linear function.',
      example_vi: 'Phương trình $f(x) = 2x + 3$ là một hàm số bậc nhất.',
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
      example_en: 'Find the domain of the function $f(x) = \\sqrt{x - 2}$.',
      example_vi: 'Tìm tập xác định của hàm số $f(x) = \\sqrt{x - 2}$.',
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
      example_en: 'The range of $f(x) = x^2$ is all non-negative real numbers.',
      example_vi: 'Tập giá trị của $f(x) = x^2$ là tất cả các số thực không âm.',
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
      example_en: 'A quadratic function can be expressed in standard form $f(x) = ax^2 + bx + c$.',
      example_vi: 'Hàm số bậc hai có thể biểu diễn dưới dạng chuẩn $f(x) = ax^2 + bx + c$.',
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
      example_en: 'The parabola opens upwards when $a > 0$.',
      example_vi: 'Đồ thị parabol bề lõm quay lên trên khi $a > 0$.',
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
      example_en: 'The coordinates of the vertex are $I(-b/2a, -\\Delta/4a)$.',
      example_vi: 'Tọa độ đỉnh có dạng $I(-b/2a, -\\Delta/4a)$.',
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
      example_en: 'The axis of symmetry has equation $x = -b / (2a)$.',
      example_vi: 'Trục đối xứng có phương trình $x = -b / (2a)$.',
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
      example_en: 'If $a < 0$, the function attains its maximum value at the vertex.',
      example_vi: 'Nếu $a < 0$, hàm số đạt giá trị lớn nhất tại đỉnh.',
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
      example_en: 'Determine the minimum value of $f(x) = x^2 - 4x + 3$.',
      example_vi: 'Xác định giá trị nhỏ nhất của $f(x) = x^2 - 4x + 3$.',
      formula: '\\min_{x \\in D} f(x) = f(x_0)',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-10',
      topic_id: 'top-10-1-1',
      word: 'subset',
      ipa: '/ˈsʌb.set/',
      meaning_vi: 'tập hợp con',
      definition_en: 'A set where every element is contained within another set.',
      example_en: 'Set A is a subset of set B, denoted $A \\subseteq B$.',
      example_vi: 'Tập A là tập con của tập B, ký hiệu $A \\subseteq B$.',
      formula: 'A \\subseteq B \\iff (\\forall x \\in A \\implies x \\in B)',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-11',
      topic_id: 'top-10-1-1',
      word: 'intersection',
      ipa: '/ˌɪn.təˈsek.ʃən/',
      meaning_vi: 'giao của hai tập hợp',
      definition_en: 'The set containing all elements that belong to both sets.',
      example_en: 'The intersection of sets A and B is denoted $A \\cap B$.',
      example_vi: 'Giao của hai tập hợp A và B được ký hiệu là $A \\cap B$.',
      formula: 'A \\cap B = \\{x \\mid x \\in A \\land x \\in B\\}',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-12',
      topic_id: 'top-10-3-1',
      word: 'magnitude',
      ipa: '/ˈmæɡ.nɪ.tʃuːd/',
      meaning_vi: 'độ dài véctơ',
      definition_en: 'The length or scalar size of a vector.',
      example_en: 'The magnitude of vector $\\vec{u} = (x, y)$ is $\\sqrt{x^2 + y^2}$.',
      example_vi: 'Độ dài của véctơ $\\vec{u} = (x, y)$ bằng $\\sqrt{x^2 + y^2}$.',
      formula: '|\\vec{u}| = \\sqrt{x^2 + y^2}',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-13',
      topic_id: 'top-10-3-1',
      word: 'dot product',
      ipa: '/dɒt ˈprɒd.ʌkt/',
      meaning_vi: 'tích vô hướng',
      definition_en: 'The algebraic operation taking two vectors and returning a scalar quantity.',
      example_en: 'The dot product of two perpendicular vectors is zero.',
      example_vi: 'Tích vô hướng của hai véctơ vuông góc bằng 0.',
      formula: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos(\\vec{a}, \\vec{b})',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: true,
      is_learned: false,
    },

    // === LỚP 11 ===
    {
      id: 'voc-14',
      topic_id: 'top-11-1-1',
      word: 'arithmetic progression',
      ipa: '/əˈrɪθ.mə.tɪk prəˈɡreʃ.ən/',
      meaning_vi: 'cấp số cộng',
      definition_en: 'A sequence of numbers such that the difference of any two successive members is a constant.',
      example_en: 'In an arithmetic progression, each term equals the previous term plus common difference d.',
      example_vi: 'Trong một cấp số cộng, mỗi số hạng bằng số hạng liền trước cộng với công sai d.',
      formula: 'u_{n+1} = u_n + d',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-15',
      topic_id: 'top-11-1-1',
      word: 'geometric progression',
      ipa: '/ˌdʒiː.əˈmet.rɪk prəˈɡreʃ.ən/',
      meaning_vi: 'cấp số nhân',
      definition_en: 'A sequence where each term after the first is found by multiplying the previous one by a fixed, non-zero ratio.',
      example_en: 'The general term of a geometric progression is $u_n = u_1 \\cdot q^{n-1}$.',
      example_vi: 'Số hạng tổng quát của cấp số nhân là $u_n = u_1 \\cdot q^{n-1}$.',
      formula: 'u_n = u_1 \\cdot q^{n-1}',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-16',
      topic_id: 'top-11-2-1',
      word: 'derivative',
      ipa: '/dɪˈrɪv.ə.tɪv/',
      meaning_vi: 'đạo hàm',
      definition_en: 'The instantaneous rate of change of a function with respect to a variable.',
      example_en: 'Find the derivative of $f(x) = x^3 - 3x$.',
      example_vi: 'Tính đạo hàm của hàm số $f(x) = x^3 - 3x$.',
      formula: "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}",
      difficulty: 'MEDIUM',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-17',
      topic_id: 'top-11-2-1',
      word: 'tangent line',
      ipa: '/ˈtæn.dʒənt laɪn/',
      meaning_vi: 'đường tiếp tuyến',
      definition_en: 'A straight line that touches a curve at a point without crossing it there.',
      example_en: 'The slope of the tangent line to curve $y = f(x)$ at $x_0$ is $f\'(x_0)$.',
      example_vi: 'Hệ số góc của tiếp tuyến với đồ thị $y = f(x)$ tại $x_0$ bằng $f\'(x_0)$.',
      formula: "y = f'(x_0)(x - x_0) + f(x_0)",
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: false,
    },
    {
      id: 'voc-18',
      topic_id: 'top-11-3-1',
      word: 'perpendicular line',
      ipa: '/ˌpɜː.pənˈdɪk.jə.lər laɪn/',
      meaning_vi: 'đường thẳng vuông góc',
      definition_en: 'A line that intersects a plane or another line at an angle of 90 degrees.',
      example_en: 'Line d is perpendicular to plane (P) if d is perpendicular to two intersecting lines in (P).',
      example_vi: 'Đường thẳng d vuông góc với mặt phẳng (P) nếu d vuông góc với hai đường thẳng cắt nhau trong (P).',
      formula: 'd \\perp (P)',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: false,
      is_learned: false,
    },

    // === LỚP 12 ===
    {
      id: 'voc-19',
      topic_id: 'top-12-1-1',
      word: 'monotonicity',
      ipa: '/ˌmɒn.ə.təˈnɪs.ə.ti/',
      meaning_vi: 'tính đơn điệu (đồng biến / nghịch biến)',
      definition_en: 'The behavior of a function being entirely non-increasing or non-decreasing.',
      example_en: 'Analyze the monotonicity of the function on the interval $(0, +\\infty)$.',
      example_vi: 'Xét tính đơn điệu của hàm số trên khoảng $(0, +\\infty)$.',
      formula: "f'(x) > 0 \\implies \\text{Increasing}, \\quad f'(x) < 0 \\implies \\text{Decreasing}",
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-20',
      topic_id: 'top-12-1-1',
      word: 'local maximum',
      ipa: '/ˈləʊ.kəl ˈmæk.sɪ.məm/',
      meaning_vi: 'điểm cực đại của hàm số',
      definition_en: 'A point where the function value is greater than or equal to values at nearby points.',
      example_en: 'The function has a local maximum at $x = 1$ where derivative changes sign from positive to negative.',
      example_vi: 'Hàm số đạt cực đại tại $x = 1$ nơi đạo hàm đổi dấu từ dương sang âm.',
      formula: "f'(x_0) = 0 \\land f''(x_0) < 0",
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-21',
      topic_id: 'top-12-1-2',
      word: 'asymptote',
      ipa: '/ˈæs.ɪm.təʊt/',
      meaning_vi: 'đường tiệm cận',
      definition_en: 'A line that a graph approaches arbitrarily closely as coordinates tend to infinity.',
      example_en: 'The curve $y = \\frac{2x+1}{x-1}$ has a horizontal asymptote $y = 2$ and a vertical asymptote $x = 1$.',
      example_vi: 'Đồ thị $y = \\frac{2x+1}{x-1}$ có tiệm cận ngang $y = 2$ và tiệm cận đứng $x = 1$.',
      formula: '\\lim_{x \\to \\pm\\infty} f(x) = L \\implies y = L',
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: false,
    },
    {
      id: 'voc-22',
      topic_id: 'top-12-2-1',
      word: 'natural logarithm',
      ipa: '/ˈnætʃ.ər.əl ˈlɒɡ.ə.rɪ.ðəm/',
      meaning_vi: 'lôgarit tự nhiên (cơ số e)',
      definition_en: 'A logarithm to the mathematical base e, written as ln(x).',
      example_en: 'The derivative of $\\ln(x)$ is $1/x$ for all $x > 0$.',
      example_vi: 'Đạo hàm của $\\ln(x)$ bằng $1/x$ với mọi $x > 0$.',
      formula: '(\\ln x)\' = \\frac{1}{x} \\quad (x > 0)',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-23',
      topic_id: 'top-12-3-1',
      word: 'definite integral',
      ipa: '/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/',
      meaning_vi: 'tích phân xác định',
      definition_en: 'The net signed area of the region bounded by the graph of a function between two limits.',
      example_en: 'Evaluate the definite integral $\\int_0^1 (2x + 1) dx$.',
      example_vi: 'Tính tích phân xác định $\\int_0^1 (2x + 1) dx$.',
      formula: '\\int_a^b f(x)dx = F(b) - F(a)',
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: false,
    },
    {
      id: 'voc-24',
      topic_id: 'top-12-4-1',
      word: 'normal vector',
      ipa: '/ˈnɔː.məl ˈvek.tər/',
      meaning_vi: 'véctơ pháp tuyến',
      definition_en: 'A vector perpendicular to a given surface or plane.',
      example_en: 'The normal vector of plane $2x - 3y + z - 5 = 0$ is $\\vec{n} = (2, -3, 1)$.',
      example_vi: 'Véctơ pháp tuyến của mặt phẳng $2x - 3y + z - 5 = 0$ là $\\vec{n} = (2, -3, 1)$.',
      formula: '\\vec{n} = (A, B, C)',
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: false,
    },
  ],
  sentence_patterns: [
    {
      id: 'sp-1',
      topic_id: 'top-10-2-1',
      pattern_en: 'Given the function f(x) = ...',
      pattern_vi: 'Cho hàm số f(x) = ...',
      example_en: 'Given the function $f(x) = x^2 - 4x + 3$, find its domain.',
      example_vi: 'Cho hàm số $f(x) = x^2 - 4x + 3$, hãy tìm tập xác định của nó.',
      level: 2,
      usage_note: 'Dùng để mở đầu bài toán giới thiệu hàm số.',
    },
    {
      id: 'sp-2',
      topic_id: 'top-10-2-1',
      pattern_en: 'Find the domain / range of ...',
      pattern_vi: 'Tìm tập xác định / tập giá trị của ...',
      example_en: 'Find the domain of the function $f(x) = \\sqrt{3 - x}$.',
      example_vi: 'Tìm tập xác định của hàm số $f(x) = \\sqrt{3 - x}$.',
      level: 2,
      usage_note: 'Câu lệnh yêu cầu tìm miền giá trị hoặc tập xác định.',
    },
    {
      id: 'sp-3',
      topic_id: 'top-10-2-2',
      pattern_en: 'Determine the coordinates of the vertex of the parabola.',
      pattern_vi: 'Xác định tọa độ đỉnh của đồ thị parabol.',
      example_en: 'Determine the coordinates of the vertex of $y = 2x^2 - 8x + 5$.',
      example_vi: 'Xác định tọa độ đỉnh của parabol $y = 2x^2 - 8x + 5$.',
      level: 2,
      usage_note: 'Dùng cho bài toán tìm tọa độ đỉnh I.',
    },
    {
      id: 'sp-4',
      topic_id: 'top-10-2-2',
      pattern_en: 'Calculate the minimum / maximum value of ...',
      pattern_vi: 'Tính giá trị nhỏ nhất / lớn nhất của ...',
      example_en: 'Calculate the minimum value of $f(x)$ on the interval $[0, 5]$.',
      example_vi: 'Tính giá trị nhỏ nhất của $f(x)$ trên đoạn $[0, 5]$.',
      level: 2,
      usage_note: 'Dùng cho bài toán tìm cực trị Min / Max.',
    },
    {
      id: 'sp-5',
      topic_id: 'top-11-2-1',
      pattern_en: 'Find the derivative of the function f(x) with respect to x.',
      pattern_vi: 'Tìm đạo hàm của hàm số f(x) theo biến số x.',
      example_en: 'Find the derivative of $f(x) = \\frac{2x + 1}{x - 3}$.',
      example_vi: 'Tính đạo hàm của hàm số $f(x) = \\frac{2x + 1}{x - 3}$.',
      level: 3,
      usage_note: 'Yêu cầu tính đạo hàm bậc 1 của hàm số.',
    },
    {
      id: 'sp-6',
      topic_id: 'top-11-2-1',
      pattern_en: 'Write the equation of the tangent line to the curve at point M(x0, y0).',
      pattern_vi: 'Viết phương trình tiếp tuyến của đồ thị hàm số tại điểm M(x0, y0).',
      example_en: 'Write the equation of the tangent line to $y = x^3 - 2x$ at $x_0 = 1$.',
      example_vi: 'Viết phương trình tiếp tuyến với đồ thị $y = x^3 - 2x$ tại điểm có hoành độ $x_0 = 1$.',
      level: 3,
      usage_note: 'Dùng cho bài toán tiếp tuyến của đồ thị hàm số.',
    },
    {
      id: 'sp-7',
      topic_id: 'top-12-1-1',
      pattern_en: 'Find the intervals on which the function is strictly increasing / decreasing.',
      pattern_vi: 'Tìm các khoảng mà trên đó hàm số đồng biến / nghịch biến.',
      example_en: 'Find the intervals of monotonicity for $y = -x^3 + 3x^2 - 1$.',
      example_vi: 'Tìm các khoảng đơn điệu của hàm số $y = -x^3 + 3x^2 - 1$.',
      level: 3,
      usage_note: 'Bài toán khảo sát tính đồng biến và nghịch biến.',
    },
    {
      id: 'sp-8',
      topic_id: 'top-12-3-1',
      pattern_en: 'Evaluate the definite integral from a to b.',
      pattern_vi: 'Tính giá trị của tích phân xác định từ a đến b.',
      example_en: 'Evaluate the definite integral $\\int_1^e \\frac{\\ln x}{x} dx$.',
      example_vi: 'Tính tích phân xác định $\\int_1^e \\frac{\\ln x}{x} dx$.',
      level: 3,
      usage_note: 'Yêu cầu tính tích phân giải tích 12.',
    },
  ],
  lessons: [
    // === BÀI HỌC 1: LỚP 10 ===
    {
      id: 'les-1',
      topic_id: 'top-10-2-2',
      title_vi: 'Bài 1: Hàm số bậc hai & Đồ thị Parabol (Lớp 10)',
      title_en: 'Lesson 1: Quadratic Functions & Parabola (Grade 10)',
      learning_objectives: [
        'Hiểu định nghĩa hàm số bậc hai $f(x) = ax^2 + bx + c$ ($a \\neq 0$)',
        'Nắm vững công thức tính tọa độ đỉnh $I(-b/2a, -\\Delta/4a)$ và trục đối xứng $x = -b/2a$',
        'Phân biệt hướng bề lõm khi $a > 0$ (quay lên) và $a < 0$ (quay xuống)',
      ],
      vocabulary_list: ['voc-4', 'voc-5', 'voc-6', 'voc-7', 'voc-8', 'voc-9'],
      key_concepts_vi: 'Hàm số bậc hai có dạng $y = ax^2 + bx + c$ ($a \\neq 0$). Đồ thị là một đường parabol có đỉnh $I(-b/2a, -\\Delta/4a)$ và trục đối xứng $x = -b/2a$. Khi $a > 0$ bề lõm quay lên, khi $a < 0$ bề lõm quay xuống.',
      key_concepts_en: 'A quadratic function is of the form $y = ax^2 + bx + c$ ($a \\neq 0$). Its graph is a parabola with vertex $I(-b/2a, -\\Delta/4a)$ and vertical axis of symmetry $x = -b/2a$. When $a > 0$ the parabola opens upwards; when $a < 0$ it opens downwards.',
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
          problem_vi: 'Tìm tọa độ đỉnh của đồ thị hàm số $y = x^2 - 4x + 3$.',
          problem_en: 'Find the coordinates of the vertex of the parabola $y = x^2 - 4x + 3$.',
          solution_en: 'The vertex of the parabola $y = ax^2 + bx + c$ has coordinates $I(-b/2a, -\\Delta/4a)$. For $y = x^2 - 4x + 3$, we have $a = 1, b = -4, c = 3$. The x-coordinate is $x_I = -(-4)/(2 \\cdot 1) = 2$. The y-coordinate is $y_I = f(2) = 2^2 - 4(2) + 3 = -1$. Thus, the vertex is $I(2, -1)$.',
          solution_vi: 'Đỉnh của parabol $y = ax^2 + bx + c$ có tọa độ $I(-b/2a, -\\Delta/4a)$. Với hàm số $y = x^2 - 4x + 3$, ta có $a = 1, b = -4, c = 3$. Hoành độ đỉnh là $x_I = -(-4)/(2) = 2$. Tung độ đỉnh là $y_I = f(2) = 2^2 - 4(2) + 3 = -1$. Vậy đỉnh parabol là $I(2, -1)$.',
          solution_steps: [
            {
              step_number: 1,
              title_vi: 'Xác định hệ số a, b, c',
              title_en: 'Identify coefficients a, b, c',
              content_vi: 'Ta có $a = 1, b = -4, c = 3$.',
              content_en: 'Here $a = 1, b = -4, c = 3$.',
              formula: 'a = 1, \\quad b = -4, \\quad c = 3',
            },
            {
              step_number: 2,
              title_vi: 'Tính hoành độ đỉnh x_I',
              title_en: 'Calculate x-coordinate of vertex',
              content_vi: '$x_I = -b / (2a) = -(-4) / (2 \\cdot 1) = 2$.',
              content_en: '$x_I = -b / (2a) = 4 / 2 = 2$.',
              formula: 'x_I = -\\frac{-4}{2(1)} = 2',
            },
            {
              step_number: 3,
              title_vi: 'Tính tung độ đỉnh y_I',
              title_en: 'Calculate y-coordinate of vertex',
              content_vi: '$y_I = f(2) = 2^2 - 4(2) + 3 = -1$.',
              content_en: '$y_I = f(2) = 4 - 8 + 3 = -1$.',
              formula: 'y_I = f(2) = -1',
            },
          ],
          conclusion_vi: 'Vậy đỉnh của parabol là $I(2, -1)$.',
          conclusion_en: 'Thus, the vertex of the parabola is $I(2, -1)$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // === BÀI HỌC 2: LỚP 10 ===
    {
      id: 'les-2',
      topic_id: 'top-10-3-1',
      title_vi: 'Bài 2: Véctơ & Tích vô hướng (Lớp 10)',
      title_en: 'Lesson 2: Vectors & Dot Product (Grade 10)',
      learning_objectives: [
        'Hiểu khái niệm độ dài véctơ (Magnitude) và hướng (Direction)',
        'Áp dụng quy tắc cộng véctơ (Triangle Rule & Parallelogram Rule)',
        'Tính tích vô hướng (Dot Product) và nhận diện hai véctơ vuông góc',
      ],
      vocabulary_list: ['voc-12', 'voc-13'],
      key_concepts_vi: 'Véctơ là đoạn thẳng có hướng. Tích vô hướng của $\\vec{a}$ và $\\vec{b}$ là số thực $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\vec{a}, \\vec{b})$. Hai véctơ khác $\\vec{0}$ vuông góc khi và chỉ khi tích vô hướng bằng 0.',
      key_concepts_en: 'A vector has both magnitude and direction. The dot product is given by $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\theta)$. Two non-zero vectors are perpendicular if and only if their dot product equals 0.',
      formulas: [
        '|\\vec{u}| = \\sqrt{x^2 + y^2}',
        '\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2',
        '\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0',
      ],
      worked_examples: [
        {
          id: 'we-2',
          title_vi: 'Ví dụ: Tính tích vô hướng của hai véctơ',
          title_en: 'Example: Compute Dot Product of Two Vectors',
          problem_vi: 'Cho $\\vec{u} = (2, 3)$ và $\\vec{v} = (-3, 2)$. Hãy tính $\\vec{u} \\cdot \\vec{v}$ và suy ra góc giữa hai véctơ.',
          problem_en: 'Given $\\vec{u} = (2, 3)$ and $\\vec{v} = (-3, 2)$. Calculate $\\vec{u} \\cdot \\vec{v}$ and deduce the angle between them.',
          solution_en: 'We compute $\\vec{u} \\cdot \\vec{v} = (2)(-3) + (3)(2) = -6 + 6 = 0$. Since the dot product is 0, the angle between $\\vec{u}$ and $\\vec{v}$ is $90^\\circ$ (they are perpendicular).',
          solution_vi: 'Ta có $\\vec{u} \\cdot \\vec{v} = (2)(-3) + (3)(2) = 0$. Vì tích vô hướng bằng 0, hai véctơ vuông góc với nhau ($90^\\circ$).',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // === BÀI HỌC 3: LỚP 11 ===
    {
      id: 'les-3',
      topic_id: 'top-11-2-1',
      title_vi: 'Bài 3: Đạo hàm & Phương trình Tiếp tuyến (Lớp 11)',
      title_en: 'Lesson 3: Derivatives & Tangent Line Equations (Grade 11)',
      learning_objectives: [
        'Nắm vững định nghĩa đạo hàm tại một điểm $x_0$',
        'Thuộc bảng đạo hàm các hàm số cơ bản: $(x^n)\', (\\sqrt{x})\', (\\sin x)\', (\\cos x)\'$',
        'Viết phương trình tiếp tuyến với đồ thị hàm số tại tiếp điểm $M(x_0, y_0)$',
      ],
      vocabulary_list: ['voc-16', 'voc-17'],
      key_concepts_vi: 'Đạo hàm $f\'(x_0)$ là hệ số góc (slope) của tiếp tuyến với đồ thị $y = f(x)$ tại điểm $M(x_0, f(x_0))$. Phương trình tiếp tuyến: $y = f\'(x_0)(x - x_0) + f(x_0)$.',
      key_concepts_en: 'The derivative $f\'(x_0)$ represents the slope of the tangent line to the curve $y = f(x)$ at $x_0$. The tangent line equation is $y = f\'(x_0)(x - x_0) + f(x_0)$.',
      formulas: [
        '(x^n)\' = n x^{n-1}',
        'y = f\'(x_0)(x - x_0) + f(x_0)',
        '\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}',
      ],
      worked_examples: [
        {
          id: 'we-3',
          title_vi: 'Ví dụ: Viết phương trình tiếp tuyến',
          title_en: 'Example: Write Equation of Tangent Line',
          problem_vi: 'Viết phương trình tiếp tuyến của đồ thị hàm số $y = x^3 - 3x + 2$ tại điểm có hoành độ $x_0 = 2$.',
          problem_en: 'Write the equation of the tangent line to the curve $y = x^3 - 3x + 2$ at $x_0 = 2$.',
          solution_en: 'First, find $y_0 = f(2) = 2^3 - 3(2) + 2 = 4$. Next, compute derivative $y\' = 3x^2 - 3$. The slope is $f\'(2) = 3(2^2) - 3 = 9$. The tangent line equation is $y = 9(x - 2) + 4 \\iff y = 9x - 14$.',
          solution_vi: 'Ta có $y_0 = f(2) = 4$. Đạo hàm $y\' = 3x^2 - 3 \\implies f\'(2) = 9$. Phương trình tiếp tuyến là $y = 9(x - 2) + 4 \\iff y = 9x - 14$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 3,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // === BÀI HỌC 4: LỚP 11 ===
    {
      id: 'les-4',
      topic_id: 'top-11-1-1',
      title_vi: 'Bài 4: Cấp số cộng & Cấp số nhân (Lớp 11)',
      title_en: 'Lesson 4: Arithmetic & Geometric Progressions (Grade 11)',
      learning_objectives: [
        'Phân biệt cấp số cộng (Arithmetic Progression) và cấp số nhân (Geometric Progression)',
        'Tính số hạng tổng quát $u_n$ và tổng $S_n$ của $n$ số hạng đầu tiên',
      ],
      vocabulary_list: ['voc-14', 'voc-15'],
      key_concepts_vi: 'Cấp số cộng có công sai $d$: $u_n = u_1 + (n-1)d$. Cấp số nhân có công bội $q$: $u_n = u_1 \\cdot q^{n-1}$.',
      key_concepts_en: 'An arithmetic progression has common difference $d$: $u_n = u_1 + (n-1)d$. A geometric progression has common ratio $q$: $u_n = u_1 \\cdot q^{n-1}$.',
      formulas: [
        'u_n = u_1 + (n - 1)d',
        'S_n = \\frac{n(u_1 + u_n)}{2}',
        'u_n = u_1 \\cdot q^{n-1}',
        'S_n = u_1 \\frac{1 - q^n}{1 - q} \\quad (q \\neq 1)',
      ],
      worked_examples: [
        {
          id: 'we-4',
          title_vi: 'Ví dụ: Tìm số hạng thứ 10 của Cấp số cộng',
          title_en: 'Example: Find the 10th Term of an AP',
          problem_vi: 'Cho cấp số cộng có $u_1 = 3$ và công sai $d = 4$. Tính số hạng $u_{10}$ và tổng $S_{10}$.',
          problem_en: 'Given an arithmetic progression with $u_1 = 3$ and common difference $d = 4$. Calculate the 10th term $u_{10}$ and sum $S_{10}$.',
          solution_en: 'We apply $u_{10} = u_1 + 9d = 3 + 9(4) = 39$. The sum is $S_{10} = \\frac{10(3 + 39)}{2} = 5 \\cdot 42 = 210$.',
          solution_vi: 'Áp dụng công thức: $u_{10} = 3 + 9(4) = 39$. Tổng 10 số hạng là $S_{10} = \\frac{10(3 + 39)}{2} = 210$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // === BÀI HỌC 5: LỚP 12 ===
    {
      id: 'les-5',
      topic_id: 'top-12-1-1',
      title_vi: 'Bài 5: Tính đơn điệu & Cực trị hàm số (Lớp 12)',
      title_en: 'Lesson 5: Monotonicity & Extrema of Functions (Grade 12)',
      learning_objectives: [
        'Sử dụng dấu của đạo hàm $f\'(x)$ để xét tính đồng biến (Increasing) và nghịch biến (Decreasing)',
        'Tìm điểm cực đại (Local Maximum) và cực tiểu (Local Minimum) của hàm số',
        'Lập bảng biến thiên (Variation Table) hoàn chỉnh',
      ],
      vocabulary_list: ['voc-19', 'voc-20'],
      key_concepts_vi: 'Nếu $f\'(x) > 0$ trên $(a, b)$ thì hàm số đồng biến trên $(a, b)$. Nếu $f\'(x) < 0$ thì hàm số nghịch biến. Điểm mà tại đó $f\'(x)$ đổi dấu là điểm cực trị.',
      key_concepts_en: 'If $f\'(x) > 0$ on $(a, b)$, the function is strictly increasing. If $f\'(x) < 0$, it is strictly decreasing. Points where $f\'(x)$ changes sign are local extrema.',
      formulas: [
        "f'(x) > 0 \\implies \\text{Increasing } \\nearrow",
        "f'(x) < 0 \\implies \\text{Decreasing } \\searrow",
        "f'(x_0) = 0 \\land f''(x_0) < 0 \\implies \\text{Local Max}",
      ],
      worked_examples: [
        {
          id: 'we-5',
          title_vi: 'Ví dụ: Khảo sát tính đơn điệu của hàm bậc ba',
          title_en: 'Example: Monotonicity Analysis of Cubic Function',
          problem_vi: 'Tìm các khoảng đồng biến và nghịch biến của hàm số $y = x^3 - 3x^2 + 2$.',
          problem_en: 'Find the intervals of increase and decrease for the function $y = x^3 - 3x^2 + 2$.',
          solution_en: 'Compute $y\' = 3x^2 - 6x = 3x(x - 2)$. Setting $y\' = 0 \\implies x = 0$ or $x = 2$. For $x \\in (-\\infty, 0) \\cup (2, +\\infty)$, $y\' > 0$ so function is increasing. For $x \\in (0, 2)$, $y\' < 0$ so function is decreasing.',
          solution_vi: 'Đạo hàm $y\' = 3x^2 - 6x = 3x(x - 2)$. Nghiệm $y\' = 0 \\iff x = 0$ hoặc $x = 2$. Hàm số đồng biến trên $(-\\infty, 0)$ và $(2, +\\infty)$; nghịch biến trên $(0, 2)$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 3,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // === BÀI HỌC 6: LỚP 12 ===
    {
      id: 'les-6',
      topic_id: 'top-12-3-1',
      title_vi: 'Bài 6: Tích phân & Ứng dụng tính Diện tích (Lớp 12)',
      title_en: 'Lesson 6: Definite Integrals & Area Applications (Grade 12)',
      learning_objectives: [
        'Nắm vững công thức Newton-Leibniz: $\\int_a^b f(x)dx = F(b) - F(a)$',
        'Tính diện tích hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành và hai đường thẳng $x=a, x=b$',
      ],
      vocabulary_list: ['voc-23'],
      key_concepts_vi: 'Diện tích hình phẳng giới hạn bởi đường cong $y = f(x)$, trục $Ox$ và hai đường $x=a, x=b$ ($a < b$) được tính bằng công thức: $S = \\int_a^b |f(x)| dx$.',
      key_concepts_en: 'The area of the region bounded by curve $y = f(x)$, x-axis, and vertical lines $x = a, x = b$ is given by $S = \\int_a^b |f(x)| dx$.',
      formulas: [
        '\\int_a^b f(x)dx = F(b) - F(a)',
        'S = \\int_a^b |f(x)| dx',
        'S = \\int_a^b |f(x) - g(x)| dx',
      ],
      worked_examples: [
        {
          id: 'we-6',
          title_vi: 'Ví dụ: Tính diện tích hình phẳng',
          title_en: 'Example: Compute Area of Bounded Region',
          problem_vi: 'Tính diện tích hình phẳng giới hạn bởi đồ thị $y = x^2 - 2x$, trục hoành $Ox$ và các đường thẳng $x = 0, x = 2$.',
          problem_en: 'Calculate the area of the region bounded by $y = x^2 - 2x$, the x-axis, and lines $x = 0, x = 2$.',
          solution_en: 'On $[0, 2]$, $x^2 - 2x \\le 0$. Thus $S = \\int_0^2 |x^2 - 2x| dx = \\int_0^2 (2x - x^2) dx = \\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.',
          solution_vi: 'Trên đoạn $[0, 2]$, $x^2 - 2x \\le 0$. Diện tích $S = \\int_0^2 (2x - x^2)dx = \\left(4 - \\frac{8}{3}\\right) = \\frac{4}{3}$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 3,
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
        { option_key: 'A', content_vi: '$(2, -1)$', content_en: '$(2, -1)$', is_correct: true },
        { option_key: 'B', content_vi: '$(-2, 1)$', content_en: '$(-2, 1)$', is_correct: false },
        { option_key: 'C', content_vi: '$(4, 3)$', content_en: '$(4, 3)$', is_correct: false },
        { option_key: 'D', content_vi: '$(2, 3)$', content_en: '$(2, 3)$', is_correct: false },
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
        { word: 'defined', meaning: 'xác định' },
      ],
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
    },
    {
      id: 'q-201',
      topic_id: 'top-11-2-1',
      question_type: 'MCQ',
      difficulty: 'MEDIUM',
      language_level: 3,
      question_vi: 'Đạo hàm của hàm số $f(x) = x^3 - 3x^2 + 2$ tại điểm $x = 2$ là:',
      question_en: 'The derivative of $f(x) = x^3 - 3x^2 + 2$ evaluated at $x = 2$ is:',
      options: [
        { option_key: 'A', content_vi: '0', content_en: '0', is_correct: true },
        { option_key: 'B', content_vi: '3', content_en: '3', is_correct: false },
        { option_key: 'C', content_vi: '-2', content_en: '-2', is_correct: false },
        { option_key: 'D', content_vi: '6', content_en: '6', is_correct: false },
      ],
      correct_answer: 'A',
      solution_vi: 'Ta có $f\'(x) = 3x^2 - 6x$. Tại $x = 2$, $f\'(2) = 3(4) - 6(2) = 0$.',
      solution_en: 'We have $f\'(x) = 3x^2 - 6x$. At $x = 2$, $f\'(2) = 3(4) - 6(2) = 0$.',
      vocabulary_support: [{ word: 'derivative', meaning: 'đạo hàm' }],
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
    },
    {
      id: 'q-301',
      topic_id: 'top-12-3-1',
      question_type: 'MCQ',
      difficulty: 'HARD',
      language_level: 3,
      question_vi: 'Giá trị của tích phân $\\int_0^1 (3x^2 + 2x) dx$ bằng:',
      question_en: 'The value of the definite integral $\\int_0^1 (3x^2 + 2x) dx$ is:',
      options: [
        { option_key: 'A', content_vi: '2', content_en: '2', is_correct: true },
        { option_key: 'B', content_vi: '1', content_en: '1', is_correct: false },
        { option_key: 'C', content_vi: '3', content_en: '3', is_correct: false },
        { option_key: 'D', content_vi: '5', content_en: '5', is_correct: false },
      ],
      correct_answer: 'A',
      solution_vi: 'Nguyên hàm của $3x^2 + 2x$ là $F(x) = x^3 + x^2$. Giá trị tích phân là $F(1) - F(0) = (1 + 1) - 0 = 2$.',
      solution_en: 'The antiderivative is $F(x) = x^3 + x^2$. So the integral is $F(1) - F(0) = (1 + 1) - 0 = 2$.',
      vocabulary_support: [{ word: 'definite integral', meaning: 'tích phân xác định' }],
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
    },
  ],
  tests: [
    {
      id: 'tst-101',
      topic_id: 'top-10-2-2',
      title: 'Kiểm tra 15 phút: Hàm số bậc hai & Parabol (Lớp 10)',
      description: 'Đánh giá kỹ năng đọc hiểu thuật ngữ và giải toán hàm số bậc hai với tỷ lệ 40% tiếng Anh',
      test_type: 'MINI_TEST',
      duration_minutes: 15,
      english_ratio: 40,
      target_language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
      question_ids: ['q-101', 'q-102', 'q-103'],
    },
    {
      id: 'tst-102',
      topic_id: 'top-11-2-1',
      title: 'Kiểm tra 15 phút: Đạo hàm & Tiếp tuyến (Lớp 11)',
      description: 'Đánh giá kỹ năng tính đạo hàm và phương trình tiếp tuyến với tỷ lệ 60% tiếng Anh',
      test_type: 'MINI_TEST',
      duration_minutes: 15,
      english_ratio: 60,
      target_language_level: 3,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
      question_ids: ['q-201', 'q-101', 'q-102'],
    },
    {
      id: 'tst-103',
      topic_id: 'top-12-3-1',
      title: 'Kiểm tra 15 phút: Tích phân & Ứng dụng (Lớp 12)',
      description: 'Đánh giá kỹ năng giải tích phân và diện tích hình phẳng với tỷ lệ 70% tiếng Anh',
      test_type: 'MINI_TEST',
      duration_minutes: 15,
      english_ratio: 70,
      target_language_level: 3,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
      question_ids: ['q-301', 'q-201', 'q-102'],
    },
  ],
  classes: [
    {
      id: 'cls-10a1',
      school_id: 'sch-1',
      teacher_id: 'usr-teacher-1',
      grade_id: 10,
      name: 'Lớp 10A1 (Toán Song Ngữ)',
      school_year: '2025-2026',
      class_code: 'MB10A1',
      student_count: 38,
      created_at: new Date().toISOString(),
    },
    {
      id: 'cls-11a2',
      school_id: 'sch-1',
      teacher_id: 'usr-teacher-1',
      grade_id: 11,
      name: 'Lớp 11A2 (Chuyên Toán - Anh)',
      school_year: '2025-2026',
      class_code: 'MB11A2',
      student_count: 35,
      created_at: new Date().toISOString(),
    },
    {
      id: 'cls-12a1',
      school_id: 'sch-1',
      teacher_id: 'usr-teacher-1',
      grade_id: 12,
      name: 'Lớp 12A1 (Luyện Thi Quốc Tế)',
      school_year: '2025-2026',
      class_code: 'MB12A1',
      student_count: 32,
      created_at: new Date().toISOString(),
    },
  ],
  mei_scores: [
    {
      id: 'mei-1',
      student_id: 'usr-student-1',
      vocabulary_score: 75.0,
      reading_score: 68.0,
      problem_solving_score: 72.0,
      expression_score: 55.0,
      mei_score: 68.6,
      current_level: 2,
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

  if (path === '/api/teacher/classes') {
    if (options?.method === 'POST') {
      const body = JSON.parse(options.body as string);
      const newClass = {
        id: `cls-${Date.now()}`,
        class_code: `MB${body.grade_id}A${Math.floor(Math.random() * 8 + 1)}`,
        student_count: 0,
        ...body,
      };
      db.classes.push(newClass);
      saveLocalDb(db);
      return { success: true, class: newClass } as any;
    }
    return db.classes as any;
  }

  if (path.startsWith('/api/teacher/classes/') && path.endsWith('/analytics')) {
    return {
      class_id: 'cls-10a1',
      total_students: 38,
      average_mei: 68.6,
      diagnostic_errors: {
        language_errors: 42,
        math_errors: 33,
        math_and_language_errors: 25,
      },
      hint_usage: {
        vocabulary: 55,
        translation: 30,
        formula: 15,
      },
    } as any;
  }

  if (path === '/api/student/dashboard-summary') {
    return {
      student: db.profiles[0],
      mei: db.mei_scores[0],
      vocabulary: { learned: db.vocabulary.filter((v: any) => v.is_learned).length, total: db.vocabulary.length },
      lessons_completed: 6,
      practice_accuracy: 85,
      tests_completed: 3,
      streak_days: 5,
      recent_lesson: db.lessons[0],
      recommended_activities: [
        { id: 'act-1', type: 'VOCABULARY', title: 'Luyện từ vựng Hàm số & Đạo hàm', topic_id: 'top-10-2-2', level: 2 },
        { id: 'act-2', type: 'READING', title: 'Đọc & phân tích bài toán Parabol', topic_id: 'top-10-2-2', level: 2 },
        { id: 'act-3', type: 'MINI_TEST', title: 'Mini Test 15 phút - Tỷ lệ 40% Anh', test_id: 'tst-101', level: 2 },
      ],
    } as any;
  }

  return {} as any;
}
