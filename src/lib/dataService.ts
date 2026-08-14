// Hybrid Data Service for MATH-BRIDGE
// Built according to the standard Vietnamese High School Curriculum:
// "Bộ Sách Kết Nối Tri Thức Với Cuộc Sống" (GDPT 2018) - Toán Lớp 10, 11, 12.

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

const DB_KEY = 'math_bridge_client_db_v4';

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
    { id: 10, name: 'Toán 10 - Kết Nối Tri Thức', order_index: 1 },
    { id: 11, name: 'Toán 11 - Kết Nối Tri Thức', order_index: 2 },
    { id: 12, name: 'Toán 12 - Kết Nối Tri Thức', order_index: 3 },
  ],

  // ==========================================
  // CHƯƠNG THEO SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ==========================================
  chapters: [
    // --- LỚP 10 (KNTT) ---
    {
      id: 'chap-10-1',
      grade_id: 10,
      name_vi: 'Chương I: Mệnh đề và tập hợp',
      name_en: 'Chapter I: Propositions and Sets',
      description: 'Mệnh đề, mệnh đề phủ định, kéo theo, tương đương và các phép toán tập hợp',
      order_index: 1,
    },
    {
      id: 'chap-10-2',
      grade_id: 10,
      name_vi: 'Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn',
      name_en: 'Chapter II: Linear Inequalities and Systems in Two Variables',
      description: 'Miền nghiệm của bất phương trình và hệ bất phương trình bậc nhất hai ẩn',
      order_index: 2,
    },
    {
      id: 'chap-10-3',
      grade_id: 10,
      name_vi: 'Chương III: Hệ thức lượng trong tam giác',
      name_en: 'Chapter III: Trigonometry and Relations in Triangles',
      description: 'Giá trị lượng giác từ 0° đến 180°, định lý Cosin, định lý Sin và công thức diện tích',
      order_index: 3,
    },
    {
      id: 'chap-10-4',
      grade_id: 10,
      name_vi: 'Chương IV: Vectơ và Tích vô hướng',
      name_en: 'Chapter IV: Vectors and Dot Product',
      description: 'Các phép toán vectơ (tổng, hiệu, tích với số) và tích vô hướng của hai vectơ',
      order_index: 4,
    },
    {
      id: 'chap-10-6',
      grade_id: 10,
      name_vi: 'Chương VI: Hàm số, đồ thị và ứng dụng',
      name_en: 'Chapter VI: Functions, Graphs and Applications',
      description: 'Tập xác định, tập giá trị, hàm số bậc hai, đỉnh parabol và tam thức bậc hai',
      order_index: 6,
    },
    {
      id: 'chap-10-7',
      grade_id: 10,
      name_vi: 'Chương VII: Phương pháp tọa độ trong mặt phẳng',
      name_en: 'Chapter VII: Coordinate Geometry in the Plane',
      description: 'Phương trình đường thẳng, góc, khoảng cách, đường tròn và ba đường conic',
      order_index: 7,
    },

    // --- LỚP 11 (KNTT) ---
    {
      id: 'chap-11-1',
      grade_id: 11,
      name_vi: 'Chương I: Hàm số lượng giác và phương trình lượng giác',
      name_en: 'Chapter I: Trigonometric Functions and Equations',
      description: 'Góc lượng giác, công thức lượng giác và các phương trình lượng giác cơ bản',
      order_index: 1,
    },
    {
      id: 'chap-11-2',
      grade_id: 11,
      name_vi: 'Chương II: Dãy số. Cấp số cộng và cấp số nhân',
      name_en: 'Chapter II: Sequences, Arithmetic and Geometric Progressions',
      description: 'Công sai, công bội, công thức số hạng tổng quát và tổng n số hạng đầu tiên',
      order_index: 2,
    },
    {
      id: 'chap-11-5',
      grade_id: 11,
      name_vi: 'Chương V: Giới hạn. Hàm số liên tục',
      name_en: 'Chapter V: Limits and Continuous Functions',
      description: 'Giới hạn của dãy số, giới hạn của hàm số và tính liên tục của hàm số',
      order_index: 5,
    },
    {
      id: 'chap-11-6',
      grade_id: 11,
      name_vi: 'Chương VI: Hàm số mũ và hàm số lôgarit',
      name_en: 'Chapter VI: Exponential and Logarithmic Functions',
      description: 'Lũy thừa, lôgarit, hàm số mũ, hàm số lôgarit và phương trình mũ, lôgarit',
      order_index: 6,
    },
    {
      id: 'chap-11-7',
      grade_id: 11,
      name_vi: 'Chương VII: Đạo hàm',
      name_en: 'Chapter VII: Derivatives',
      description: 'Định nghĩa đạo hàm, quy tắc tính đạo hàm, ý nghĩa hình học và phương trình tiếp tuyến',
      order_index: 7,
    },
    {
      id: 'chap-11-8',
      grade_id: 11,
      name_vi: 'Chương VIII: Quan hệ vuông góc trong không gian',
      name_en: 'Chapter VIII: Orthogonality in Spatial Geometry',
      description: 'Đường thẳng vuông góc mặt phẳng, hai mặt phẳng vuông góc, khoảng cách và thể tích',
      order_index: 8,
    },

    // --- LỚP 12 (KNTT) ---
    {
      id: 'chap-12-1',
      grade_id: 12,
      name_vi: 'Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số',
      name_en: 'Chapter I: Applications of Derivatives in Function Analysis',
      description: 'Tính đơn điệu, cực trị, giá trị lớn nhất - nhỏ nhất, tiệm cận và khảo sát hàm số',
      order_index: 1,
    },
    {
      id: 'chap-12-2',
      grade_id: 12,
      name_vi: 'Chương II: Vectơ và hệ tọa độ trong không gian Oxyz',
      name_en: 'Chapter II: Vectors and 3D Coordinate Systems',
      description: 'Vectơ trong không gian, hệ tọa độ Oxyz và biểu thức tọa độ của các phép toán',
      order_index: 2,
    },
    {
      id: 'chap-12-4',
      grade_id: 12,
      name_vi: 'Chương IV: Nguyên hàm và tích phân',
      name_en: 'Chapter IV: Antiderivatives and Integrals',
      description: 'Nguyên hàm, tích phân xác định và ứng dụng hình học tính diện tích, thể tích',
      order_index: 4,
    },
    {
      id: 'chap-12-5',
      grade_id: 12,
      name_vi: 'Chương V: Phương pháp tọa độ trong không gian',
      name_en: 'Chapter V: Coordinate Geometry in 3D Space',
      description: 'Phương trình mặt phẳng, phương trình đường thẳng và phương trình mặt cầu',
      order_index: 5,
    },
    {
      id: 'chap-12-6',
      grade_id: 12,
      name_vi: 'Chương VI: Xác suất có điều kiện',
      name_en: 'Chapter VI: Conditional Probability and Bayes Formula',
      description: 'Xác suất có điều kiện, công thức xác suất toàn phần và công thức Bayes',
      order_index: 6,
    },
  ],

  // ==========================================
  // CHỦ ĐỀ CHI TIẾT THEO TỪNG BÀI HỌC SGK KNTT
  // ==========================================
  topics: [
    // LỚP 10 TOPICS
    {
      id: 'top-10-1-1',
      chapter_id: 'chap-10-1',
      name_vi: 'Bài 1: Mệnh đề toán học & Mệnh đề phủ định',
      name_en: 'Lesson 1: Mathematical Propositions & Negation',
      description: 'Ký hiệu $\\forall, \\exists$, mệnh đề kéo theo $P \\implies Q$',
      order_index: 1,
    },
    {
      id: 'top-10-1-2',
      chapter_id: 'chap-10-1',
      name_vi: 'Bài 2: Tập hợp & Các phép toán trên tập hợp',
      name_en: 'Lesson 2: Sets and Set Operations',
      description: 'Tập con, giao $A \\cap B$, hợp $A \\cup B$, hiệu $A \\setminus B$',
      order_index: 2,
    },
    {
      id: 'top-10-2-1',
      chapter_id: 'chap-10-2',
      name_vi: 'Bài 3 & 4: Bất phương trình & Hệ BPT bậc nhất hai ẩn',
      name_en: 'Lessons 3 & 4: Linear Inequalities and Systems in Two Variables',
      description: 'Biểu diễn miền nghiệm trên mặt phẳng tọa độ $Oxy$',
      order_index: 3,
    },
    {
      id: 'top-10-3-1',
      chapter_id: 'chap-10-3',
      name_vi: 'Bài 5 & 6: Hệ thức lượng trong tam giác (Định lý Cosin & Sin)',
      name_en: 'Lessons 5 & 6: Laws of Cosines & Sines in Triangles',
      description: 'Công thức $a^2 = b^2 + c^2 - 2bc\\cos A$ và $\\frac{a}{\\sin A} = 2R$',
      order_index: 4,
    },
    {
      id: 'top-10-4-1',
      chapter_id: 'chap-10-4',
      name_vi: 'Bài 7-11: Vectơ & Tích vô hướng của hai vectơ',
      name_en: 'Lessons 7-11: Vectors and Vector Dot Product',
      description: 'Độ dài vectơ, quy tắc 3 điểm, hình bình hành và tích vô hướng $\\vec{a}\\cdot\\vec{b}$',
      order_index: 5,
    },
    {
      id: 'top-10-6-1',
      chapter_id: 'chap-10-6',
      name_vi: 'Bài 15: Hàm số và đồ thị (Tập xác định & Tập giá trị)',
      name_en: 'Lesson 15: Functions and Graphs (Domain & Range)',
      description: 'Tập xác định $D$, tập giá trị và sự biến thiên của hàm số',
      order_index: 6,
    },
    {
      id: 'top-10-6-2',
      chapter_id: 'chap-10-6',
      name_vi: 'Bài 16: Hàm số bậc hai & Đồ thị Parabol',
      name_en: 'Lesson 16: Quadratic Functions & Parabola Graph',
      description: 'Hàm số $y = ax^2 + bx + c$, đỉnh $I(-b/2a, -\\Delta/4a)$, trục đối xứng',
      order_index: 7,
    },
    {
      id: 'top-10-7-1',
      chapter_id: 'chap-10-7',
      name_vi: 'Bài 19-21: Phương trình đường thẳng & Đường tròn trong mặt phẳng',
      name_en: 'Lessons 19-21: Straight Lines & Circles in Coordinate Plane',
      description: 'Vectơ chỉ phương, vectơ pháp tuyến, khoảng cách từ điểm đến đường thẳng',
      order_index: 8,
    },

    // LỚP 11 TOPICS
    {
      id: 'top-11-1-1',
      chapter_id: 'chap-11-1',
      name_vi: 'Bài 1-4: Hàm số lượng giác & Phương trình lượng giác cơ bản',
      name_en: 'Lessons 1-4: Trigonometric Functions & Basic Equations',
      description: 'Hàm số $\\sin x, \\cos x, \\tan x$, nghiệm phương trình lượng giác cơ bản',
      order_index: 1,
    },
    {
      id: 'top-11-2-1',
      chapter_id: 'chap-11-2',
      name_vi: 'Bài 5-7: Cấp số cộng & Cấp số nhân',
      name_en: 'Lessons 5-7: Arithmetic & Geometric Progressions',
      description: 'Số hạng tổng quát $u_n$, công sai $d$, công bội $q$ và tổng $S_n$',
      order_index: 2,
    },
    {
      id: 'top-11-5-1',
      chapter_id: 'chap-11-5',
      name_vi: 'Bài 15-17: Giới hạn của dãy số, hàm số & Tính liên tục',
      name_en: 'Lessons 15-17: Limits of Sequences, Functions & Continuity',
      description: 'Giới hạn tại vô cực, giới hạn dạng vô định $\\frac{0}{0}$ và hàm số liên tục',
      order_index: 3,
    },
    {
      id: 'top-11-6-1',
      chapter_id: 'chap-11-6',
      name_vi: 'Bài 18-21: Lũy thừa, Lôgarit & Phương trình Mũ - Lôgarit',
      name_en: 'Lessons 18-21: Exponents, Logarithms & Exponential Equations',
      description: 'Công thức đổi cơ số lôgarit, lôgarit tự nhiên $\\ln x$ và giải phương trình mũ',
      order_index: 4,
    },
    {
      id: 'top-11-7-1',
      chapter_id: 'chap-11-7',
      name_vi: 'Bài 22-24: Đạo hàm & Phương trình tiếp tuyến với đồ thị',
      name_en: 'Lessons 22-24: Derivatives & Tangent Line Equations',
      description: 'Bảng đạo hàm cơ bản, đạo hàm hàm hợp và phương trình tiếp tuyến $y = f\'(x_0)(x - x_0) + y_0$',
      order_index: 5,
    },
    {
      id: 'top-11-8-1',
      chapter_id: 'chap-11-8',
      name_vi: 'Bài 25-28: Đường thẳng & Mặt phẳng vuông góc trong không gian',
      name_en: 'Lessons 25-28: Perpendicular Lines and Planes in Space',
      description: 'Chứng minh đường vuông góc mặt, góc giữa hai mặt phẳng và khoảng cách',
      order_index: 6,
    },

    // LỚP 12 TOPICS
    {
      id: 'top-12-1-1',
      chapter_id: 'chap-12-1',
      name_vi: 'Bài 1: Tính đơn điệu và Cực trị của hàm số',
      name_en: 'Lesson 1: Monotonicity and Extrema of Functions',
      description: 'Dấu đạo hàm $f\'(x)$, khoảng đồng biến, nghịch biến, điểm cực đại, cực tiểu',
      order_index: 1,
    },
    {
      id: 'top-12-1-2',
      chapter_id: 'chap-12-1',
      name_vi: 'Bài 2 & 3: Giá trị lớn nhất - nhỏ nhất & Đường tiệm cận',
      name_en: 'Lessons 2 & 3: Maximum - Minimum Values & Asymptotes',
      description: 'Tìm Max/Min trên đoạn $[a, b]$, tiệm cận đứng $x = x_0$ và tiệm cận ngang $y = y_0$',
      order_index: 2,
    },
    {
      id: 'top-12-1-3',
      chapter_id: 'chap-12-1',
      name_vi: 'Bài 4 & 5: Khảo sát sự biến thiên & Ứng dụng thực tế',
      name_en: 'Lessons 4 & 5: Curve Sketching & Practical Optimization',
      description: 'Khảo sát hàm bậc ba, hàm phân thức và bài toán tối ưu hóa thực tế',
      order_index: 3,
    },
    {
      id: 'top-12-2-1',
      chapter_id: 'chap-12-2',
      name_vi: 'Bài 6-8: Vectơ và Hệ tọa độ Oxyz trong không gian',
      name_en: 'Lessons 6-8: 3D Coordinate System Oxyz and Vectors',
      description: 'Tọa độ điểm, vectơ, tích có hướng $[\\vec{u}, \\vec{v}]$ và tích vô hướng',
      order_index: 4,
    },
    {
      id: 'top-12-4-1',
      chapter_id: 'chap-12-4',
      name_vi: 'Bài 11 & 12: Nguyên hàm & Tích phân xác định',
      name_en: 'Lessons 11 & 12: Antiderivatives and Definite Integrals',
      description: 'Bảng nguyên hàm, công thức Newton-Leibniz và phương pháp tích phân từng phần',
      order_index: 5,
    },
    {
      id: 'top-12-4-2',
      chapter_id: 'chap-12-4',
      name_vi: 'Bài 13: Ứng dụng hình học của tích phân (Diện tích & Thể tích)',
      name_en: 'Lesson 13: Geometric Applications of Integrals (Area & Volume)',
      description: 'Tính diện tích hình phẳng $S = \\int_a^b |f(x)|dx$ và thể tích khối tròn xoay',
      order_index: 6,
    },
    {
      id: 'top-12-5-1',
      chapter_id: 'chap-12-5',
      name_vi: 'Bài 14-16: Phương trình Mặt phẳng, Đường thẳng & Mặt cầu (Oxyz)',
      name_en: 'Lessons 14-16: Equations of Planes, Lines & Spheres in 3D',
      description: 'Vectơ pháp tuyến $\\vec{n}$, vectơ chỉ phương $\\vec{u}$, tâm và bán kính mặt cầu',
      order_index: 7,
    },
    {
      id: 'top-12-6-1',
      chapter_id: 'chap-12-6',
      name_vi: 'Bài 17 & 18: Xác suất có điều kiện & Công thức Bayes',
      name_en: 'Lessons 17 & 18: Conditional Probability & Bayes Formula',
      description: 'Xác suất điều kiện $P(A|B)$, công thức nhân xác suất và định lý Bayes',
      order_index: 8,
    },
  ],

  // ==========================================
  // NGÂN HÀNG THUẬT NGỮ TOÁN HỌC SONG NGỮ (60+ TỪ VỰNG)
  // ==========================================
  vocabulary: [
    // --- LỚP 10: MỆNH ĐỀ, TẬP HỢP, HÀM SỐ, VECTƠ ---
    {
      id: 'voc-10-1',
      topic_id: 'top-10-1-1',
      word: 'proposition',
      ipa: '/ˌprɒp.əˈzɪʃ.ən/',
      meaning_vi: 'mệnh đề toán học',
      definition_en: 'A declarative statement that is either strictly true or false, but not both.',
      example_en: 'A mathematical proposition must have a definitive truth value.',
      example_vi: 'Một mệnh đề toán học phải có giá trị chân lý đúng hoặc sai rõ ràng.',
      formula: 'P \\implies Q',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-10-2',
      topic_id: 'top-10-1-1',
      word: 'negation',
      ipa: '/nɪˈɡeɪ.ʃən/',
      meaning_vi: 'mệnh đề phủ định',
      definition_en: 'The proposition that is true when P is false, denoted by $\\overline{P}$.',
      example_en: 'The negation of "All triangles have three angles" is "There exists a triangle that does not have three angles".',
      example_vi: 'Mệnh đề phủ định của "Mọi tam giác đều có 3 góc" là "Tồn tại tam giác không có 3 góc".',
      formula: '\\overline{P} \\iff \\neg P',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-10-3',
      topic_id: 'top-10-1-2',
      word: 'subset',
      ipa: '/ˈsʌb.set/',
      meaning_vi: 'tập hợp con',
      definition_en: 'A set whose elements are all members of another set.',
      example_en: 'Set A is a subset of set B, written as $A \\subseteq B$.',
      example_vi: 'Tập hợp A là tập con của tập hợp B, ký hiệu là $A \\subseteq B$.',
      formula: 'A \\subseteq B \\iff (\\forall x \\in A \\implies x \\in B)',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-10-4',
      topic_id: 'top-10-1-2',
      word: 'intersection',
      ipa: '/ˌɪn.təˈsek.ʃən/',
      meaning_vi: 'phép giao của hai tập hợp',
      definition_en: 'The set containing all elements common to both given sets.',
      example_en: 'The intersection of sets A and B is denoted $A \\cap B$.',
      example_vi: 'Giao của hai tập hợp A và B được ký hiệu là $A \\cap B$.',
      formula: 'A \\cap B = \\{x \\mid x \\in A \\land x \\in B\\}',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-10-5',
      topic_id: 'top-10-1-2',
      word: 'union',
      ipa: '/ˈjuː.njən/',
      meaning_vi: 'phép hợp của hai tập hợp',
      definition_en: 'The set containing all elements that belong to either set or both.',
      example_en: 'The union of sets A and B is written as $A \\cup B$.',
      example_vi: 'Hợp của hai tập hợp A và B được viết là $A \\cup B$.',
      formula: 'A \\cup B = \\{x \\mid x \\in A \\lor x \\in B\\}',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-10-6',
      topic_id: 'top-10-6-1',
      word: 'domain',
      ipa: '/dəʊˈmeɪn/',
      meaning_vi: 'tập xác định của hàm số',
      definition_en: 'The set of all possible input real values (x) for which a function is mathematically defined.',
      example_en: 'Find the domain of the square root function $f(x) = \\sqrt{x - 2}$.',
      example_vi: 'Tìm tập xác định của hàm số căn bậc hai $f(x) = \\sqrt{x - 2}$.',
      formula: 'D = \\{x \\in \\mathbb{R} \\mid x \\ge 2\\}',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-10-7',
      topic_id: 'top-10-6-1',
      word: 'range',
      ipa: '/reɪndʒ/',
      meaning_vi: 'tập giá trị của hàm số',
      definition_en: 'The set of all possible output values (y) produced by a function.',
      example_en: 'The range of the function $f(x) = x^2$ is $[0, +\\infty)$.',
      example_vi: 'Tập giá trị của hàm số $f(x) = x^2$ là $[0, +\\infty)$.',
      formula: 'T = \\{f(x) \\mid x \\in D\\}',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-10-8',
      topic_id: 'top-10-6-2',
      word: 'quadratic function',
      ipa: '/kwɒdˈræt.ɪk ˈfʌŋk.ʃən/',
      meaning_vi: 'hàm số bậc hai',
      definition_en: 'A second-degree polynomial function of the general form $y = ax^2 + bx + c$ ($a \\neq 0$).',
      example_en: 'The standard form of a quadratic function is $f(x) = ax^2 + bx + c$.',
      example_vi: 'Dạng chuẩn của hàm số bậc hai là $f(x) = ax^2 + bx + c$.',
      formula: 'y = ax^2 + bx + c \\quad (a \\neq 0)',
      difficulty: 'EASY',
      language_level: 1,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-10-9',
      topic_id: 'top-10-6-2',
      word: 'parabola',
      ipa: '/pəˈræb.əl.ə/',
      meaning_vi: 'đồ thị parabol',
      definition_en: 'The symmetrical curved shape formed by graphing a quadratic function.',
      example_en: 'The parabola opens upwards when coefficient $a > 0$ and downwards when $a < 0$.',
      example_vi: 'Đồ thị parabol có bề lõm quay lên khi hệ số $a > 0$ và quay xuống khi $a < 0$.',
      formula: 'a > 0 \\implies \\cup, \\quad a < 0 \\implies \\cap',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-10-10',
      topic_id: 'top-10-6-2',
      word: 'vertex',
      ipa: '/ˈvɜː.teks/',
      meaning_vi: 'tọa độ đỉnh của parabol',
      definition_en: 'The highest or lowest turning point of a parabola, with coordinates $I(-b/2a, -\\Delta/4a)$.',
      example_en: 'Calculate the coordinates of the vertex for parabola $y = x^2 - 4x + 3$.',
      example_vi: 'Tính tọa độ đỉnh của đồ thị parabol $y = x^2 - 4x + 3$.',
      formula: 'I\\left(-\\frac{b}{2a}, -\\frac{\\Delta}{4a}\\right)',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-10-11',
      topic_id: 'top-10-6-2',
      word: 'axis of symmetry',
      ipa: '/ˈæk.sɪs əv ˈsɪm.ə.tri/',
      meaning_vi: 'trục đối xứng của parabol',
      definition_en: 'The vertical line passing through the vertex with equation $x = -b/(2a)$.',
      example_en: 'The axis of symmetry divides the parabola into two symmetrical halves.',
      example_vi: 'Trục đối xứng chia đồ thị parabol thành hai nửa đối xứng qua đường thẳng $x = -b/(2a)$.',
      formula: 'x = -\\frac{b}{2a}',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: false,
      is_learned: true,
    },
    {
      id: 'voc-10-12',
      topic_id: 'top-10-4-1',
      word: 'magnitude',
      ipa: '/ˈmæɡ.nɪ.tʃuːd/',
      meaning_vi: 'độ dài của vectơ',
      definition_en: 'The scalar distance between the initial and terminal points of a vector.',
      example_en: 'The magnitude of vector $\\vec{u} = (x, y)$ is calculated as $\\sqrt{x^2 + y^2}$.',
      example_vi: 'Độ dài của vectơ $\\vec{u} = (x, y)$ được tính bằng $\\sqrt{x^2 + y^2}$.',
      formula: '|\\vec{u}| = \\sqrt{x^2 + y^2}',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-10-13',
      topic_id: 'top-10-4-1',
      word: 'dot product',
      ipa: '/dɒt ˈprɒd.ʌkt/',
      meaning_vi: 'tích vô hướng của hai vectơ',
      definition_en: 'An algebraic operation that takes two equal-length sequences of numbers and returns a single number.',
      example_en: 'Two non-zero vectors are perpendicular if and only if their dot product equals zero.',
      example_vi: 'Hai vectơ khác không vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng 0.',
      formula: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\vec{a}, \\vec{b}) = x_1 x_2 + y_1 y_2',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: true,
      is_learned: true,
    },

    // --- LỚP 11: LƯỢNG GIÁC, CẤP SỐ, GIỚI HẠN, ĐẠO HÀM, HÌNH KHÔNG GIAN ---
    {
      id: 'voc-11-1',
      topic_id: 'top-11-1-1',
      word: 'trigonometric identity',
      ipa: '/ˌtrɪɡ.ə.nəˈmet.rɪk aɪˈden.tə.ti/',
      meaning_vi: 'hằng đẳng thức lượng giác',
      definition_en: 'An equation involving trigonometric functions that is true for every value of the variables.',
      example_en: 'The fundamental trigonometric identity states that $\\sin^2 x + \\cos^2 x = 1$.',
      example_vi: 'Hằng đẳng thức lượng giác cơ bản là $\\sin^2 x + \\cos^2 x = 1$.',
      formula: '\\sin^2 x + \\cos^2 x = 1',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-11-2',
      topic_id: 'top-11-2-1',
      word: 'arithmetic progression',
      ipa: '/əˈrɪθ.mə.tɪk prəˈɡreʃ.ən/',
      meaning_vi: 'cấp số cộng',
      definition_en: 'A sequence in which each term is obtained by adding a constant difference $d$ to the preceding term.',
      example_en: 'In an arithmetic progression, the n-th term is given by $u_n = u_1 + (n - 1)d$.',
      example_vi: 'Trong cấp số cộng, số hạng thứ n có công thức $u_n = u_1 + (n - 1)d$.',
      formula: 'u_n = u_1 + (n - 1)d, \\quad S_n = \\frac{n(u_1 + u_n)}{2}',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-11-3',
      topic_id: 'top-11-2-1',
      word: 'geometric progression',
      ipa: '/ˌdʒiː.əˈmet.rɪk prəˈɡreʃ.ən/',
      meaning_vi: 'cấp số nhân',
      definition_en: 'A sequence where each term after the first is found by multiplying the previous term by a common ratio $q$.',
      example_en: 'The sum of the first n terms of a geometric progression is $S_n = u_1 \\frac{1 - q^n}{1 - q}$.',
      example_vi: 'Tổng n số hạng đầu của cấp số nhân là $S_n = u_1 \\frac{1 - q^n}{1 - q}$.',
      formula: 'u_n = u_1 \\cdot q^{n-1}',
      difficulty: 'MEDIUM',
      language_level: 2,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-11-4',
      topic_id: 'top-11-5-1',
      word: 'limit',
      ipa: '/ˈlɪm.ɪt/',
      meaning_vi: 'giới hạn của hàm số / dãy số',
      definition_en: 'The value that a function or sequence approaches as the input or index approaches some value.',
      example_en: 'Evaluate the limit $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.',
      example_vi: 'Tính giới hạn $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.',
      formula: '\\lim_{x \\to x_0} f(x) = L',
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-11-5',
      topic_id: 'top-11-5-1',
      word: 'continuous function',
      ipa: '/kənˈtɪn.ju.əs ˈfʌŋk.ʃən/',
      meaning_vi: 'hàm số liên tục',
      definition_en: 'A function for which small changes in the input result in small changes in the output without any sudden jumps.',
      example_en: 'A function $f(x)$ is continuous at $x_0$ if $\\lim_{x \\to x_0} f(x) = f(x_0)$.',
      example_vi: 'Hàm số $f(x)$ liên tục tại $x_0$ nếu $\\lim_{x \\to x_0} f(x) = f(x_0)$.',
      formula: '\\lim_{x \\to x_0} f(x) = f(x_0)',
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: false,
      is_learned: false,
    },
    {
      id: 'voc-11-6',
      topic_id: 'top-11-7-1',
      word: 'derivative',
      ipa: '/dɪˈrɪv.ə.tɪv/',
      meaning_vi: 'đạo hàm của hàm số',
      definition_en: 'The instantaneous rate of change of a function with respect to its variable.',
      example_en: 'The derivative of $f(x) = x^3 - 3x$ is $f\'(x) = 3x^2 - 3$.',
      example_vi: 'Đạo hàm của $f(x) = x^3 - 3x$ là $f\'(x) = 3x^2 - 3$.',
      formula: "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}",
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-11-7',
      topic_id: 'top-11-7-1',
      word: 'tangent line',
      ipa: '/ˈtæn.dʒənt laɪn/',
      meaning_vi: 'đường tiếp tuyến của đồ thị',
      definition_en: 'A straight line that touches a curve at a single point, having slope equal to the derivative at that point.',
      example_en: 'The tangent line equation to curve $y = f(x)$ at $(x_0, y_0)$ is $y = f\'(x_0)(x - x_0) + y_0$.',
      example_vi: 'Phương trình tiếp tuyến với đồ thị $y = f(x)$ tại $(x_0, y_0)$ là $y = f\'(x_0)(x - x_0) + y_0$.',
      formula: "y = f'(x_0)(x - x_0) + f(x_0)",
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-11-8',
      topic_id: 'top-11-8-1',
      word: 'perpendicularity',
      ipa: '/ˌpɜː.pən.dɪk.jʊˈlær.ə.ti/',
      meaning_vi: 'quan hệ vuông góc trong không gian',
      definition_en: 'The geometric property of being at right angles ($90^\\circ$) to a line or plane.',
      example_en: 'If a line is perpendicular to two intersecting lines in a plane, it is perpendicular to the plane.',
      example_vi: 'Nếu đường thẳng vuông góc với hai đường thẳng cắt nhau trong mặt phẳng thì nó vuông góc với mặt phẳng đó.',
      formula: 'd \\perp a \\land d \\perp b \\implies d \\perp (P)',
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: false,
      is_learned: false,
    },

    // --- LỚP 12: KHẢO SÁT HÀM SỐ, TÍCH PHÂN, HÌNH OXYZ, XÁC SUẤT ---
    {
      id: 'voc-12-1',
      topic_id: 'top-12-1-1',
      word: 'monotonicity',
      ipa: '/ˌmɒn.ə.təˈnɪs.ə.ti/',
      meaning_vi: 'tính đơn điệu (đồng biến / nghịch biến)',
      definition_en: 'The property of a function of preserving or reversing the given order across an interval.',
      example_en: 'If $f\'(x) > 0$ for all $x \\in (a, b)$, then $f(x)$ is strictly increasing on $(a, b)$.',
      example_vi: 'Nếu $f\'(x) > 0$ với mọi $x \\in (a, b)$ thì hàm số đồng biến trên $(a, b)$.',
      formula: "f'(x) > 0 \\implies \\text{Increasing } \\nearrow, \\quad f'(x) < 0 \\implies \\text{Decreasing } \\searrow",
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-12-2',
      topic_id: 'top-12-1-1',
      word: 'local extremum',
      ipa: '/ˈləʊ.kəl ɪkˈstriː.məm/',
      meaning_vi: 'điểm cực trị của hàm số (cực đại / cực tiểu)',
      definition_en: 'A point where the derivative equals zero and changes sign, representing a local maximum or minimum.',
      example_en: 'A cubic polynomial can have at most two local extrema.',
      example_vi: 'Đa thức bậc ba có tối đa hai điểm cực trị.',
      formula: "f'(x_0) = 0 \\land f''(x_0) \\neq 0",
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-12-3',
      topic_id: 'top-12-1-2',
      word: 'asymptote',
      ipa: '/ˈæs.ɪm.təʊt/',
      meaning_vi: 'đường tiệm cận của đồ thị hàm số',
      definition_en: 'A straight line such that the distance between the curve and the line approaches zero as one or both of coordinates tend to infinity.',
      example_en: 'The rational function $y = \\frac{2x+1}{x-1}$ has vertical asymptote $x = 1$ and horizontal asymptote $y = 2$.',
      example_vi: 'Hàm phân thức $y = \\frac{2x+1}{x-1}$ có tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 2$.',
      formula: '\\lim_{x \\to \\pm\\infty} f(x) = y_0 \\implies y = y_0',
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-12-4',
      topic_id: 'top-12-4-1',
      word: 'antiderivative',
      ipa: '/ˌæn.ti.dɪˈrɪv.ə.tɪv/',
      meaning_vi: 'nguyên hàm của hàm số',
      definition_en: 'A differentiable function $F(x)$ whose derivative is equal to the original function $f(x)$.',
      example_en: 'The indefinite integral represents the family of all antiderivatives $\\int f(x)dx = F(x) + C$.',
      example_vi: 'Tích phân bất định biểu diễn họ tất cả các nguyên hàm $\\int f(x)dx = F(x) + C$.',
      formula: '\\int f(x)dx = F(x) + C \\iff F\'(x) = f(x)',
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-12-5',
      topic_id: 'top-12-4-1',
      word: 'definite integral',
      ipa: '/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/',
      meaning_vi: 'tích phân xác định',
      definition_en: 'The continuous sum of values over an interval, evaluated via Newton-Leibniz formula $F(b) - F(a)$.',
      example_en: 'Evaluate the definite integral $\\int_0^1 (3x^2 + 2x) dx = 2$.',
      example_vi: 'Tính tích phân xác định $\\int_0^1 (3x^2 + 2x) dx = 2$.',
      formula: '\\int_a^b f(x)dx = F(b) - F(a)',
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-12-6',
      topic_id: 'top-12-5-1',
      word: 'normal vector',
      ipa: '/ˈnɔː.məl ˈvek.tər/',
      meaning_vi: 'vectơ pháp tuyến của mặt phẳng',
      definition_en: 'A non-zero vector that is perpendicular to a plane in 3D Cartesian space.',
      example_en: 'The plane $2x - 3y + z - 5 = 0$ has normal vector $\\vec{n} = (2, -3, 1)$.',
      example_vi: 'Mặt phẳng $2x - 3y + z - 5 = 0$ có vectơ pháp tuyến $\\vec{n} = (2, -3, 1)$.',
      formula: '\\vec{n} = (A, B, C)',
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: true,
    },
    {
      id: 'voc-12-7',
      topic_id: 'top-12-6-1',
      word: 'conditional probability',
      ipa: '/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/',
      meaning_vi: 'xác suất có điều kiện',
      definition_en: 'The probability of event A occurring given that event B has already occurred.',
      example_en: 'The conditional probability of A given B is computed as $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.',
      example_vi: 'Xác suất của biến cố A khi biết biến cố B đã xảy ra là $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.',
      formula: 'P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0)',
      difficulty: 'HARD',
      language_level: 3,
      is_favorite: true,
      is_learned: false,
    },
  ],

  // ==========================================
  // MẪU CÂU TOÁN HỌC SONG NGỮ (16+ MẪU CÂU)
  // ==========================================
  sentence_patterns: [
    {
      id: 'sp-10-1',
      topic_id: 'top-10-1-1',
      pattern_en: 'Let P and Q be mathematical propositions. Determine whether ...',
      pattern_vi: 'Cho P và Q là các mệnh đề toán học. Hãy xác định xem ...',
      example_en: 'Let P be "x is an even number" and Q be "x is divisible by 2". State the equivalence.',
      example_vi: 'Cho P là "x là số chẵn" và Q là "x chia hết cho 2". Hãy phát biểu mệnh đề tương đương.',
      level: 1,
      usage_note: 'Mở đầu bài toán logic và mệnh đề.',
    },
    {
      id: 'sp-10-2',
      topic_id: 'top-10-6-1',
      pattern_en: 'Find the domain of the function f(x) = ...',
      pattern_vi: 'Tìm tập xác định của hàm số f(x) = ...',
      example_en: 'Find the domain of the function $f(x) = \\frac{\\sqrt{x + 1}}{x - 2}$.',
      example_vi: 'Tìm tập xác định của hàm số $f(x) = \\frac{\\sqrt{x + 1}}{x - 2}$.',
      level: 1,
      usage_note: 'Dùng cho câu hỏi tìm tập xác định $D$.',
    },
    {
      id: 'sp-10-3',
      topic_id: 'top-10-6-2',
      pattern_en: 'Determine the coordinates of the vertex of the parabola.',
      pattern_vi: 'Xác định tọa độ đỉnh của đồ thị parabol.',
      example_en: 'Determine the coordinates of the vertex of $y = 2x^2 - 8x + 5$.',
      example_vi: 'Xác định tọa độ đỉnh của parabol $y = 2x^2 - 8x + 5$.',
      level: 2,
      usage_note: 'Dùng cho bài toán tìm đỉnh I.',
    },
    {
      id: 'sp-10-4',
      topic_id: 'top-10-6-2',
      pattern_en: 'Calculate the maximum / minimum value of the quadratic function on interval [a, b].',
      pattern_vi: 'Tính giá trị lớn nhất / nhỏ nhất của hàm số bậc hai trên đoạn [a, b].',
      example_en: 'Calculate the minimum value of $f(x) = x^2 - 4x + 3$ on the interval $[0, 5]$.',
      example_vi: 'Tính giá trị nhỏ nhất của $f(x) = x^2 - 4x + 3$ trên đoạn $[0, 5]$.',
      level: 2,
      usage_note: 'Bài toán tìm Min/Max của hàm số bậc hai.',
    },
    {
      id: 'sp-11-1',
      topic_id: 'top-11-2-1',
      pattern_en: 'Find the general term u_n and the sum of the first n terms S_n of the sequence.',
      pattern_vi: 'Tìm số hạng tổng quát u_n và tổng n số hạng đầu tiên S_n của dãy số.',
      example_en: 'Find the general term $u_n$ of the arithmetic progression with $u_1 = 2$ and $d = 3$.',
      example_vi: 'Tìm số hạng tổng quát $u_n$ của cấp số cộng có $u_1 = 2$ và công sai $d = 3$.',
      level: 2,
      usage_note: 'Dùng cho bài toán cấp số cộng và cấp số nhân.',
    },
    {
      id: 'sp-11-2',
      topic_id: 'top-11-7-1',
      pattern_en: 'Find the derivative of the function f(x) with respect to x.',
      pattern_vi: 'Tính đạo hàm của hàm số f(x) theo biến số x.',
      example_en: 'Find the derivative of $f(x) = \\frac{2x - 1}{x + 3}$.',
      example_vi: 'Tính đạo hàm của hàm số $f(x) = \\frac{2x - 1}{x + 3}$.',
      level: 3,
      usage_note: 'Yêu cầu tính đạo hàm hàm số.',
    },
    {
      id: 'sp-11-3',
      topic_id: 'top-11-7-1',
      pattern_en: 'Write the equation of the tangent line to the curve at point M(x0, y0).',
      pattern_vi: 'Viết phương trình tiếp tuyến của đồ thị hàm số tại điểm M(x0, y0).',
      example_en: 'Write the equation of the tangent line to $y = x^3 - 3x$ at the point with abscissa $x_0 = 2$.',
      example_vi: 'Viết phương trình tiếp tuyến của đồ thị $y = x^3 - 3x$ tại điểm có hoành độ $x_0 = 2$.',
      level: 3,
      usage_note: 'Dùng cho bài toán phương trình tiếp tuyến.',
    },
    {
      id: 'sp-12-1',
      topic_id: 'top-12-1-1',
      pattern_en: 'Find the intervals of monotonicity and local extrema of the function.',
      pattern_vi: 'Tìm các khoảng đơn điệu và các điểm cực trị của hàm số.',
      example_en: 'Find the intervals on which $f(x) = x^3 - 3x^2 + 1$ is strictly increasing or decreasing.',
      example_vi: 'Tìm các khoảng mà trên đó $f(x) = x^3 - 3x^2 + 1$ đồng biến hoặc nghịch biến.',
      level: 3,
      usage_note: 'Khảo sát sự biến thiên của hàm số 12.',
    },
    {
      id: 'sp-12-2',
      topic_id: 'top-12-1-2',
      pattern_en: 'Find all horizontal and vertical asymptotes of the graph of the function.',
      pattern_vi: 'Tìm tất cả các đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số.',
      example_en: 'Find the asymptotes of the curve $y = \\frac{3x - 1}{x + 2}$.',
      example_vi: 'Tìm các đường tiệm cận của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$.',
      level: 3,
      usage_note: 'Dùng cho bài toán tiệm cận đồ thị hàm số.',
    },
    {
      id: 'sp-12-3',
      topic_id: 'top-12-4-2',
      pattern_en: 'Calculate the area of the plane region bounded by the curves ...',
      pattern_vi: 'Tính diện tích hình phẳng giới hạn bởi các đường ...',
      example_en: 'Calculate the area bounded by the parabola $y = x^2$ and the line $y = 2x$.',
      example_vi: 'Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x$.',
      level: 3,
      usage_note: 'Ứng dụng tích phân tính diện tích.',
    },
    {
      id: 'sp-12-4',
      topic_id: 'top-12-5-1',
      pattern_en: 'Write the general equation of the plane passing through point M and perpendicular to vector n.',
      pattern_vi: 'Viết phương trình tổng quát của mặt phẳng đi qua điểm M và vuông góc với vectơ n.',
      example_en: 'Write the equation of plane (P) passing through $M(1, -2, 3)$ with normal vector $\\vec{n} = (2, 1, -4)$.',
      example_vi: 'Viết phương trình mặt phẳng (P) đi qua $M(1, -2, 3)$ có vectơ pháp tuyến $\\vec{n} = (2, 1, -4)$.',
      level: 3,
      usage_note: 'Phương trình mặt phẳng không gian Oxyz.',
    },
  ],

  // ==========================================
  // BÀI HỌC SONG NGỮ CHUẨN SGK KẾT NỐI TRI THỨC
  // ==========================================
  lessons: [
    // --- BÀI 1: TOÁN 10 (KNTT) ---
    {
      id: 'les-10-1',
      topic_id: 'top-10-6-2',
      title_vi: 'Bài 16: Hàm số bậc hai & Đồ thị Parabol (Toán 10 KNTT)',
      title_en: 'Lesson 16: Quadratic Functions & Parabola (Grade 10 KNTT)',
      learning_objectives: [
        'Nắm vững dạng tổng quát của hàm số bậc hai $y = ax^2 + bx + c$ ($a \\neq 0$)',
        'Xác định tọa độ đỉnh $I(-b/2a, -\\Delta/4a)$ và trục đối xứng $x = -b/2a$',
        'Khảo sát sự biến thiên và vẽ đồ thị parabol trong mặt phẳng tọa độ $Oxy$',
      ],
      vocabulary_list: ['voc-10-8', 'voc-10-9', 'voc-10-10', 'voc-10-11'],
      key_concepts_vi: 'Hàm số bậc hai có dạng $y = ax^2 + bx + c$ ($a \\neq 0$). Đồ thị là một đường parabol có đỉnh $I(-b/2a, -\\Delta/4a)$ và trục đối xứng $x = -b/2a$. Khi $a > 0$, parabol quay bề lõm lên trên; khi $a < 0$, parabol quay bề lõm xuống dưới.',
      key_concepts_en: 'A quadratic function has the standard form $y = ax^2 + bx + c$ ($a \\neq 0$). Its graph is a parabola with vertex $I(-b/2a, -\\Delta/4a)$ and vertical axis of symmetry $x = -b/2a$. If $a > 0$, the parabola opens upwards; if $a < 0$, it opens downwards.',
      formulas: [
        'y = ax^2 + bx + c \\quad (a \\neq 0)',
        'I\\left(-\\frac{b}{2a}, -\\frac{\\Delta}{4a}\\right)',
        'x = -\\frac{b}{2a}',
        '\\Delta = b^2 - 4ac',
      ],
      worked_examples: [
        {
          id: 'we-10-1',
          title_vi: 'Ví dụ 1: Xác định tọa độ đỉnh và trục đối xứng của Parabol',
          title_en: 'Example 1: Find Vertex and Axis of Symmetry of a Parabola',
          problem_vi: 'Tìm tọa độ đỉnh $I$ và phương trình trục đối xứng của đồ thị hàm số bậc hai $y = x^2 - 4x + 3$.',
          problem_en: 'Find the coordinates of the vertex $I$ and the equation of the axis of symmetry for the parabola $y = x^2 - 4x + 3$.',
          solution_en: 'For the quadratic function $y = x^2 - 4x + 3$, the coefficients are $a = 1, b = -4, c = 3$. The x-coordinate of vertex $I$ is $x_I = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$. The y-coordinate is $y_I = f(2) = (2)^2 - 4(2) + 3 = 4 - 8 + 3 = -1$. The axis of symmetry is the line $x = 2$. Therefore, the vertex is $I(2, -1)$.',
          solution_vi: 'Ta có các hệ số $a = 1, b = -4, c = 3$. Hoành độ đỉnh là $x_I = -\\frac{-4}{2(1)} = 2$. Tung độ đỉnh là $y_I = f(2) = 2^2 - 4(2) + 3 = -1$. Trục đối xứng là đường thẳng $x = 2$. Vậy đỉnh là $I(2, -1)$.',
          solution_steps: [
            {
              step_number: 1,
              title_vi: 'Xác định các hệ số a, b, c',
              title_en: 'Identify coefficients a, b, c',
              content_vi: 'Ta có $a = 1, b = -4, c = 3$.',
              content_en: 'We have $a = 1, b = -4, c = 3$.',
              formula: 'a = 1, \\quad b = -4, \\quad c = 3',
            },
            {
              step_number: 2,
              title_vi: 'Tính hoành độ đỉnh x_I và trục đối xứng',
              title_en: 'Compute x-coordinate of vertex',
              content_vi: '$x_I = -b/(2a) = -(-4)/(2 \\cdot 1) = 2$.',
              content_en: '$x_I = -b/(2a) = -(-4)/(2 \\cdot 1) = 2$.',
              formula: 'x_I = -\\frac{-4}{2(1)} = 2',
            },
            {
              step_number: 3,
              title_vi: 'Tính tung độ đỉnh y_I = f(x_I)',
              title_en: 'Compute y-coordinate of vertex',
              content_vi: '$y_I = (2)^2 - 4(2) + 3 = -1$.',
              content_en: '$y_I = (2)^2 - 4(2) + 3 = -1$.',
              formula: 'y_I = f(2) = -1',
            },
          ],
          conclusion_vi: 'Vậy đỉnh parabol là $I(2, -1)$ và trục đối xứng là đường thẳng $x = 2$.',
          conclusion_en: 'Thus, the vertex is $I(2, -1)$ and the axis of symmetry is $x = 2$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // --- BÀI 2: TOÁN 10 (KNTT) ---
    {
      id: 'les-10-2',
      topic_id: 'top-10-4-1',
      title_vi: 'Bài 11: Tích vô hướng của hai vectơ (Toán 10 KNTT)',
      title_en: 'Lesson 11: Dot Product of Two Vectors (Grade 10 KNTT)',
      learning_objectives: [
        'Hiểu định nghĩa tích vô hướng $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\vec{a}, \\vec{b})$',
        'Biết cách tính tích vô hướng theo biểu thức tọa độ $\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2$',
        'Ứng dụng tích vô hướng để chứng minh hai vectơ vuông góc',
      ],
      vocabulary_list: ['voc-10-12', 'voc-10-13'],
      key_concepts_vi: 'Tích vô hướng của hai vectơ $\\vec{a}$ và $\\vec{b}$ là một số thực, ký hiệu là $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\vec{a}, \\vec{b})$. Trong mặt phẳng tọa độ, $\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2$. Hai vectơ khác $\\vec{0}$ vuông góc khi và chỉ khi $\\vec{a} \\cdot \\vec{b} = 0$.',
      key_concepts_en: 'The dot product of vectors $\\vec{a}$ and $\\vec{b}$ is a scalar quantity defined as $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\theta)$. In coordinate form, $\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2$. Two non-zero vectors are perpendicular if and only if $\\vec{a} \\cdot \\vec{b} = 0$.',
      formulas: [
        '\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\vec{a}, \\vec{b})',
        '\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2',
        '\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0',
      ],
      worked_examples: [
        {
          id: 'we-10-2',
          title_vi: 'Ví dụ: Tính góc và kiểm tra vuông góc',
          title_en: 'Example: Compute Dot Product and Angle',
          problem_vi: 'Cho $\\vec{u} = (2, 3)$ và $\\vec{v} = (-3, 2)$. Hãy tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$ và nhận xét về góc giữa hai vectơ.',
          problem_en: 'Given vectors $\\vec{u} = (2, 3)$ and $\\vec{v} = (-3, 2)$. Calculate the dot product $\\vec{u} \\cdot \\vec{v}$ and deduce the angle between them.',
          solution_en: 'Using the coordinate formula, $\\vec{u} \\cdot \\vec{v} = (2)(-3) + (3)(2) = -6 + 6 = 0$. Because the dot product is zero, the angle between $\\vec{u}$ and $\\vec{v}$ is $90^\\circ$, meaning $\\vec{u} \\perp \\vec{v}$.',
          solution_vi: 'Áp dụng công thức tọa độ: $\\vec{u} \\cdot \\vec{v} = (2)(-3) + (3)(2) = 0$. Vì tích vô hướng bằng 0, hai vectơ vuông góc nhau ($90^\\circ$).',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // --- BÀI 3: TOÁN 11 (KNTT) ---
    {
      id: 'les-11-1',
      topic_id: 'top-11-2-1',
      title_vi: 'Bài 6: Cấp số cộng (Toán 11 KNTT)',
      title_en: 'Lesson 6: Arithmetic Progressions (Grade 11 KNTT)',
      learning_objectives: [
        'Nắm vững định nghĩa cấp số cộng $u_{n+1} = u_n + d$',
        'Tính số hạng tổng quát $u_n = u_1 + (n - 1)d$',
        'Tính tổng $n$ số hạng đầu tiên $S_n = \\frac{n(u_1 + u_n)}{2}$',
      ],
      vocabulary_list: ['voc-11-2', 'voc-11-3'],
      key_concepts_vi: 'Cấp số cộng là một dãy số mà kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó cộng với một số không đổi $d$ (gọi là công sai).',
      key_concepts_en: 'An arithmetic progression is a sequence in which each term after the first is obtained by adding a fixed constant $d$ (called common difference) to the preceding term.',
      formulas: [
        'u_n = u_1 + (n - 1)d',
        'S_n = \\frac{n(u_1 + u_n)}{2}',
        'S_n = \\frac{n[2u_1 + (n - 1)d]}{2}',
      ],
      worked_examples: [
        {
          id: 'we-11-1',
          title_vi: 'Ví dụ: Tính số hạng thứ 10 và tổng 10 số hạng đầu',
          title_en: 'Example: Compute 10th Term and Sum of AP',
          problem_vi: 'Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 4$. Tính số hạng $u_{10}$ và tổng $S_{10}$.',
          problem_en: 'Given an arithmetic progression $(u_n)$ with first term $u_1 = 3$ and common difference $d = 4$. Calculate the 10th term $u_{10}$ and the sum $S_{10}$.',
          solution_en: 'The 10th term is $u_{10} = u_1 + (10 - 1)d = 3 + 9(4) = 39$. The sum is $S_{10} = \\frac{10(u_1 + u_{10})}{2} = \\frac{10(3 + 39)}{2} = 5 \\cdot 42 = 210$.',
          solution_vi: 'Số hạng thứ 10 là $u_{10} = 3 + 9(4) = 39$. Tổng 10 số hạng đầu là $S_{10} = \\frac{10(3 + 39)}{2} = 210$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 2,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // --- BÀI 4: TOÁN 11 (KNTT) ---
    {
      id: 'les-11-2',
      topic_id: 'top-11-7-1',
      title_vi: 'Bài 24: Ý nghĩa hình học của đạo hàm & Tiếp tuyến (Toán 11 KNTT)',
      title_en: 'Lesson 24: Geometric Meaning of Derivatives & Tangents (Grade 11 KNTT)',
      learning_objectives: [
        'Hiểu ý nghĩa hình học: $f\'(x_0)$ là hệ số góc của tiếp tuyến tại điểm $M(x_0, y_0)$',
        'Viết phương trình tiếp tuyến với đồ thị hàm số: $y = f\'(x_0)(x - x_0) + y_0$',
      ],
      vocabulary_list: ['voc-11-6', 'voc-11-7'],
      key_concepts_vi: 'Đạo hàm của hàm số $y = f(x)$ tại điểm $x_0$ là hệ số góc (slope) của tiếp tuyến với đồ thị $(C)$ tại điểm $M(x_0, f(x_0))$. Phương trình tiếp tuyến: $y = f\'(x_0)(x - x_0) + f(x_0)$.',
      key_concepts_en: 'The derivative $f\'(x_0)$ represents the slope of the tangent line to the curve $y = f(x)$ at point $M(x_0, f(x_0))$. The equation of the tangent line is $y = f\'(x_0)(x - x_0) + f(x_0)$.',
      formulas: [
        "k = f'(x_0)",
        "y = f'(x_0)(x - x_0) + f(x_0)",
        "(x^n)' = n x^{n-1}",
      ],
      worked_examples: [
        {
          id: 'we-11-2',
          title_vi: 'Ví dụ: Viết phương trình tiếp tuyến tại 1 điểm',
          title_en: 'Example: Write Equation of Tangent Line',
          problem_vi: 'Viết phương trình tiếp tuyến của đồ thị hàm số $y = x^3 - 3x + 2$ tại điểm có hoành độ $x_0 = 2$.',
          problem_en: 'Write the equation of the tangent line to the curve $y = x^3 - 3x + 2$ at the point with abscissa $x_0 = 2$.',
          solution_en: 'Step 1: Compute $y_0 = f(2) = 2^3 - 3(2) + 2 = 4$. Step 2: Calculate derivative $y\' = 3x^2 - 3 \\implies f\'(2) = 3(2^2) - 3 = 9$. Step 3: Write tangent equation $y = 9(x - 2) + 4 \\iff y = 9x - 14$.',
          solution_vi: 'Bước 1: Tính $y_0 = f(2) = 4$. Bước 2: Tính $y\' = 3x^2 - 3 \\implies f\'(2) = 9$. Bước 3: Phương trình tiếp tuyến là $y = 9(x - 2) + 4 \\iff y = 9x - 14$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 3,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // --- BÀI 5: TOÁN 12 (KNTT) ---
    {
      id: 'les-12-1',
      topic_id: 'top-12-1-1',
      title_vi: 'Bài 1: Tính đơn điệu và Cực trị của hàm số (Toán 12 KNTT)',
      title_en: 'Lesson 1: Monotonicity and Extrema of Functions (Grade 12 KNTT)',
      learning_objectives: [
        'Dùng dấu của đạo hàm $f\'(x)$ để xét tính đồng biến, nghịch biến của hàm số',
        'Tìm các điểm cực đại (Local Max) và cực tiểu (Local Min) của hàm số',
        'Lập bảng biến thiên hoàn chỉnh',
      ],
      vocabulary_list: ['voc-12-1', 'voc-12-2'],
      key_concepts_vi: 'Nếu $f\'(x) > 0$ trên $(a, b)$ thì hàm số đồng biến trên $(a, b)$. Nếu $f\'(x) < 0$ trên $(a, b)$ thì hàm số nghịch biến trên $(a, b)$. Điểm $x_0$ mà tại đó $f\'(x)$ đổi dấu là điểm cực trị của hàm số.',
      key_concepts_en: 'If $f\'(x) > 0$ on $(a, b)$, the function is strictly increasing. If $f\'(x) < 0$, it is strictly decreasing. A point $x_0$ where $f\'(x)$ changes sign is a local extremum.',
      formulas: [
        "f'(x) > 0 \\implies \\text{Increasing } \\nearrow",
        "f'(x) < 0 \\implies \\text{Decreasing } \\searrow",
        "f'(x_0) = 0 \\land f''(x_0) < 0 \\implies \\text{Local Maximum}",
        "f'(x_0) = 0 \\land f''(x_0) > 0 \\implies \\text{Local Minimum}",
      ],
      worked_examples: [
        {
          id: 'we-12-1',
          title_vi: 'Ví dụ: Khảo sát tính đơn điệu và tìm cực trị',
          title_en: 'Example: Monotonicity and Extrema of Cubic Function',
          problem_vi: 'Tìm các khoảng đồng biến, nghịch biến và các điểm cực trị của hàm số $y = x^3 - 3x^2 + 2$.',
          problem_en: 'Find the intervals of increase/decrease and local extrema for the function $y = x^3 - 3x^2 + 2$.',
          solution_en: 'Compute $y\' = 3x^2 - 6x = 3x(x - 2)$. Solve $y\' = 0 \\iff x = 0$ or $x = 2$. On $(-\\infty, 0) \\cup (2, +\\infty)$, $y\' > 0$ (increasing). On $(0, 2)$, $y\' < 0$ (decreasing). Local maximum at $(0, 2)$ and local minimum at $(2, -2)$.',
          solution_vi: 'Đạo hàm $y\' = 3x^2 - 6x = 3x(x - 2)$. Nghiệm $y\' = 0 \\iff x = 0$ hoặc $x = 2$. Hàm số đồng biến trên $(-\\infty, 0)$ và $(2, +\\infty)$; nghịch biến trên $(0, 2)$. Điểm cực đại là $(0, 2)$, điểm cực tiểu là $(2, -2)$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 3,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },

    // --- BÀI 6: TOÁN 12 (KNTT) ---
    {
      id: 'les-12-2',
      topic_id: 'top-12-4-2',
      title_vi: 'Bài 13: Ứng dụng hình học của tích phân (Toán 12 KNTT)',
      title_en: 'Lesson 13: Geometric Applications of Integrals (Grade 12 KNTT)',
      learning_objectives: [
        'Nắm vững công thức tính diện tích hình phẳng: $S = \\int_a^b |f(x) - g(x)| dx$',
        'Tính diện tích hình phẳng giới hạn bởi đường cong $y = f(x)$ và trục hoành',
      ],
      vocabulary_list: ['voc-12-4', 'voc-12-5'],
      key_concepts_vi: 'Diện tích hình phẳng giới hạn bởi đồ thị hàm số liên tục $y = f(x)$, trục hoành và hai đường thẳng $x = a, x = b$ ($a < b$) được tính theo công thức $S = \\int_a^b |f(x)| dx$.',
      key_concepts_en: 'The area of a plane region bounded by a continuous curve $y = f(x)$, x-axis, and lines $x = a, x = b$ is given by $S = \\int_a^b |f(x)| dx$.',
      formulas: [
        'S = \\int_a^b |f(x)| dx',
        'S = \\int_a^b |f(x) - g(x)| dx',
        'V = \\pi \\int_a^b f(x)^2 dx',
      ],
      worked_examples: [
        {
          id: 'we-12-2',
          title_vi: 'Ví dụ: Tính diện tích hình phẳng',
          title_en: 'Example: Area Bounded by Curves',
          problem_vi: 'Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2 - 2x$, trục hoành $Ox$ và các đường thẳng $x = 0, x = 2$.',
          problem_en: 'Calculate the area of the region bounded by $y = x^2 - 2x$, the x-axis, and vertical lines $x = 0, x = 2$.',
          solution_en: 'On $[0, 2]$, we observe $x^2 - 2x \\le 0$. Thus $S = \\int_0^2 |x^2 - 2x| dx = \\int_0^2 (2x - x^2) dx = \\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.',
          solution_vi: 'Trên đoạn $[0, 2]$, $x^2 - 2x \\le 0$. Diện tích $S = \\int_0^2 (2x - x^2)dx = \\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.',
        },
      ],
      status: 'PUBLISHED',
      language_level: 3,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
    },
  ],

  // ==========================================
  // NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM SONG NGỮ
  // ==========================================
  questions: [
    // LỚP 10
    {
      id: 'q-101',
      topic_id: 'top-10-6-2',
      question_type: 'MCQ',
      difficulty: 'EASY',
      language_level: 1,
      question_vi: 'Tọa độ đỉnh của parabol $y = x^2 - 4x + 3$ là:',
      question_en: 'What are the coordinates of the vertex of the parabola $y = x^2 - 4x + 3$?',
      options: [
        { option_key: 'A', content_vi: '$(2, -1)$', content_en: '$(2, -1)$', is_correct: true },
        { option_key: 'B', content_vi: '$(-2, 1)$', content_en: '$(-2, 1)$', is_correct: false },
        { option_key: 'C', content_vi: '$(4, 3)$', content_en: '$(4, 3)', is_correct: false },
        { option_key: 'D', content_vi: '$(2, 3)$', content_en: '$(2, 3)', is_correct: false },
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
      topic_id: 'top-10-6-2',
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
      topic_id: 'top-10-6-1',
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

    // LỚP 11
    {
      id: 'q-201',
      topic_id: 'top-11-7-1',
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
      id: 'q-202',
      topic_id: 'top-11-2-1',
      question_type: 'MCQ',
      difficulty: 'EASY',
      language_level: 2,
      question_vi: 'Cho cấp số cộng có $u_1 = 2$ và công sai $d = 5$. Số hạng thứ 4 là:',
      question_en: 'In an arithmetic progression with $u_1 = 2$ and common difference $d = 5$, the 4th term $u_4$ is:',
      options: [
        { option_key: 'A', content_vi: '17', content_en: '17', is_correct: true },
        { option_key: 'B', content_vi: '22', content_en: '22', is_correct: false },
        { option_key: 'C', content_vi: '12', content_en: '12', is_correct: false },
        { option_key: 'D', content_vi: '20', content_en: '20', is_correct: false },
      ],
      correct_answer: 'A',
      solution_vi: 'Ta có $u_4 = u_1 + 3d = 2 + 3(5) = 17$.',
      solution_en: 'We have $u_4 = u_1 + 3d = 2 + 3(5) = 17$.',
      vocabulary_support: [{ word: 'arithmetic progression', meaning: 'cấp số cộng' }],
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
    },

    // LỚP 12
    {
      id: 'q-301',
      topic_id: 'top-12-4-1',
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
    {
      id: 'q-302',
      topic_id: 'top-12-1-2',
      question_type: 'MCQ',
      difficulty: 'MEDIUM',
      language_level: 2,
      question_vi: 'Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ là:',
      question_en: 'The horizontal asymptote of the curve $y = \\frac{2x - 3}{x + 1}$ is:',
      options: [
        { option_key: 'A', content_vi: '$y = 2$', content_en: '$y = 2$', is_correct: true },
        { option_key: 'B', content_vi: '$x = -1$', content_en: '$x = -1$', is_correct: false },
        { option_key: 'C', content_vi: '$y = -3$', content_en: '$y = -3$', is_correct: false },
        { option_key: 'D', content_vi: '$x = 2$', content_en: '$x = 2$', is_correct: false },
      ],
      correct_answer: 'A',
      solution_vi: 'Ta có $\\lim_{x \\to \\pm\\infty} \\frac{2x - 3}{x + 1} = 2$, vậy tiệm cận ngang là $y = 2$.',
      solution_en: 'Since $\\lim_{x \\to \\pm\\infty} \\frac{2x - 3}{x + 1} = 2$, the horizontal asymptote is $y = 2$.',
      vocabulary_support: [{ word: 'horizontal asymptote', meaning: 'tiệm cận ngang' }],
      status: 'PUBLISHED',
      created_by: 'usr-teacher-1',
    },
  ],

  // ==========================================
  // ĐỀ KIỂM TRA ĐỊNH KỲ THEO TỶ LỆ % TIẾNG ANH
  // ==========================================
  tests: [
    {
      id: 'tst-101',
      topic_id: 'top-10-6-2',
      title: 'Kiểm tra 15 phút: Hàm số bậc hai & Parabol (Lớp 10 KNTT)',
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
      topic_id: 'top-11-7-1',
      title: 'Kiểm tra 15 phút: Cấp số cộng & Đạo hàm (Lớp 11 KNTT)',
      description: 'Đánh giá kỹ năng tính cấp số và đạo hàm tiếp tuyến với tỷ lệ 60% tiếng Anh',
      test_type: 'MINI_TEST',
      duration_minutes: 15,
      english_ratio: 60,
      target_language_level: 3,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
      question_ids: ['q-201', 'q-202', 'q-101'],
    },
    {
      id: 'tst-103',
      topic_id: 'top-12-4-1',
      title: 'Kiểm tra 15 phút: Tiệm cận & Tích phân (Lớp 12 KNTT)',
      description: 'Đánh giá kỹ năng giải tích phân và khảo sát hàm số với tỷ lệ 70% tiếng Anh',
      test_type: 'MINI_TEST',
      duration_minutes: 15,
      english_ratio: 70,
      target_language_level: 3,
      created_by: 'usr-teacher-1',
      created_at: new Date().toISOString(),
      question_ids: ['q-301', 'q-302', 'q-201'],
    },
  ],
  classes: [
    {
      id: 'cls-10a1',
      school_id: 'sch-1',
      teacher_id: 'usr-teacher-1',
      grade_id: 10,
      name: 'Lớp 10A1 (Toán KNTT Song Ngữ)',
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
      name: 'Lớp 11A2 (Chuyên Toán - Anh KNTT)',
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
      name: 'Lớp 12A1 (Luyện Thi THPT Quốc Tế KNTT)',
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
      vocabulary_score: 78.0,
      reading_score: 70.0,
      problem_solving_score: 75.0,
      expression_score: 60.0,
      mei_score: 71.3,
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
      average_mei: 71.3,
      diagnostic_errors: {
        language_errors: 40,
        math_errors: 35,
        math_and_language_errors: 25,
      },
      hint_usage: {
        vocabulary: 50,
        translation: 30,
        formula: 20,
      },
    } as any;
  }

  if (path === '/api/student/dashboard-summary') {
    return {
      student: db.profiles[0],
      mei: db.mei_scores[0],
      vocabulary: { learned: db.vocabulary.filter((v: any) => v.is_learned).length, total: db.vocabulary.length },
      lessons_completed: 6,
      practice_accuracy: 88,
      tests_completed: 3,
      streak_days: 5,
      recent_lesson: db.lessons[0],
      recommended_activities: [
        { id: 'act-1', type: 'VOCABULARY', title: 'Luyện 15 thuật ngữ Toán 10 KNTT', topic_id: 'top-10-6-2', level: 2 },
        { id: 'act-2', type: 'READING', title: 'Đọc hiểu & Phân tích Đề toán Parabol KNTT', topic_id: 'top-10-6-2', level: 2 },
        { id: 'act-3', type: 'MINI_TEST', title: 'Mini Test 15 phút - Tỷ lệ 40% Anh', test_id: 'tst-101', level: 2 },
      ],
    } as any;
  }

  return {} as any;
}
