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
import { FULL_QUESTION_BANK, DEFAULT_WORKED_EXAMPLES } from './questionBankData';

const DB_KEY = 'math_bridge_client_db_v9';

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
      total_time_minutes: 320,
      created_at: new Date().toISOString(),
    },
    {
      id: 'usr-teacher-1',
      full_name: 'Lê Thị Hiếu',
      email: 'hieu.le@thptchauthanha.edu.vn',
      role: 'teacher',
      school_id: 'sch-1',
      school_name: 'THPT Châu Thành A',
      grade_id: 12,
      avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
      current_level: 3,
      class_code: 'MB12A1',
      xp: 1500,
      streak_days: 20,
      total_time_minutes: 900,
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
  lessons: FULL_LESSONS.map((l) => {
    const defaultWe = DEFAULT_WORKED_EXAMPLES[l.id] || [];
    return {
      ...l,
      worked_examples: (l.worked_examples && l.worked_examples.length > 0) ? l.worked_examples : defaultWe,
    };
  }),

  // =========================================================================
  // BỘ CÂU HỎI LUYỆN TẬP 4 DẠNG THỨC GDPT 2018 (TN, Đ/S, TLN, TL)
  // =========================================================================
  questions: FULL_QUESTION_BANK,

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
    if (!parsed.lessons || parsed.lessons.length < INITIAL_DATA.lessons.length) {
      parsed.lessons = INITIAL_DATA.lessons;
      changed = true;
    } else {
      INITIAL_DATA.lessons.forEach((initL) => {
        const idx = parsed.lessons.findIndex((l: any) => l.id === initL.id);
        if (idx === -1) {
          parsed.lessons.push(initL);
          changed = true;
        } else {
          // If worked_examples is empty in stored lesson, backfill from INITIAL_DATA
          if (!parsed.lessons[idx].worked_examples || parsed.lessons[idx].worked_examples.length === 0) {
            if (initL.worked_examples && initL.worked_examples.length > 0) {
              parsed.lessons[idx].worked_examples = initL.worked_examples;
              changed = true;
            }
          }
          if (!parsed.lessons[idx].types || parsed.lessons[idx].types.length < (initL.types?.length || 0)) {
            parsed.lessons[idx].types = initL.types;
            changed = true;
          }
        }
      });
    }

    // Ensure questions from INITIAL_DATA are present
    const existingQIds = new Set((parsed.questions || []).map((q: any) => q.id));
    INITIAL_DATA.questions.forEach((q) => {
      if (!existingQIds.has(q.id)) {
        if (!parsed.questions) parsed.questions = [];
        parsed.questions.push(q);
        changed = true;
      }
    });

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
