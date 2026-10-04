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
  MEIScore,
  PracticeAttempt,
  TestAttempt,
  MathType,
  WorkedExample,
} from '../types';

import { FULL_CHAPTERS, FULL_LESSONS, ALL_CURRENT_TYPE_IDS, LEGACY_TYPE_MIGRATION, migrateQuestionToCurrentCurriculum } from './curriculumData';
import { FULL_QUESTION_BANK, DEFAULT_WORKED_EXAMPLES } from './questionBankData';

const DB_KEY = 'math_bridge_client_db_v13';

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
  classes: [
    { id: 'class-10a1', name: 'Lớp 10A1', school_id: 'sch-1', teacher_id: 'usr-teacher-1', grade_id: 10, school_year: '2026-2027', class_code: 'MB10A1', student_count: 0, created_at: new Date().toISOString() },
    { id: 'class-10a2', name: 'Lớp 10A2', school_id: 'sch-1', teacher_id: 'usr-teacher-1', grade_id: 10, school_year: '2026-2027', class_code: 'MB10A2', student_count: 0, created_at: new Date().toISOString() },
  ],
  grades: [
    { id: 10, name: 'Toán 10 - Kết Nối Tri Thức', order_index: 1 },
    { id: 11, name: 'Toán 11 - Kết Nối Tri Thức', order_index: 2 },
    { id: 12, name: 'Toán 12 - Kết Nối Tri Thức', order_index: 3 },
  ],

  // =========================================================================
  // TOÀN BỘ 24 CHƯƠNG / 79 BÀI TOÁN THPT (LỚP 10, 11, 12) - KẾT NỐI TRI THỨC
  // =========================================================================
  chapters: FULL_CHAPTERS,

  // =========================================================================
  // DANH SÁCH BÀI HỌC VÀ CÁC DẠNG TOÁN ỨNG DỤNG THỰC TẾ CHI TIẾT
  // =========================================================================
  lessons: FULL_LESSONS.map((l) => ({ ...l, worked_examples: DEFAULT_WORKED_EXAMPLES[l.id] || [] })),

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
  ],  practice_attempts: [],
  test_attempts: [],
  hint_logs: [],
  teacher_interventions: [],
  question_versions: [],
  research_mode: {
    enabled: false,
    locked_at: null,
    protocol_version: 'AMB-RP-1.0',
    note: '',
  },
};

function isLegacyExtremaFallbackQuestion(q: any): boolean {
  const text = `${q?.question_vi || ''} ${q?.solution_vi || ''}`.toLowerCase();
  return (
    (/\[trắc nghiệm\s*\d+\]/i.test(text) && text.includes('x^3') && text.includes('điểm cực đại')) ||
    (/\[đúng\/sai\s*\d+\]/i.test(text) && text.includes('-x^3 + 3x + 1')) ||
    (/\[tln\s*\d+\]/i.test(text) && text.includes('tung độ điểm cực đại'))
  );
}

function normalizeLessonIdentity(title?: string): string {
  return (title || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/^bai\s+\d+\.\s*/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function canReuseStoredLessonContent(stored: any, canonical: any): boolean {
  if (!stored?.updated_at) return false;
  // IDs from the old 21-chapter/38-lesson dataset overlap with some new canonical IDs.
  // Reuse generated theory/examples only when the semantic lesson title is still the same.
  return normalizeLessonIdentity(stored.title_vi) === normalizeLessonIdentity(canonical.title_vi);
}

function migrateStoredWorkedExamples(examples: any[], canonical: any): any[] {
  const allowedTypeIds = new Set((canonical.types || []).map((type: any) => type.id));
  return (examples || []).map((example: any) => {
    const oldTypeId = example?.type_id as string | undefined;
    const mappedTypeId = oldTypeId ? (LEGACY_TYPE_MIGRATION[oldTypeId] || oldTypeId) : undefined;
    return { ...example, type_id: mappedTypeId };
  }).filter((example: any) => !example.type_id || allowedTypeIds.has(example.type_id));
}

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

    // Curriculum identity is canonical: chapter, lesson, topic and math-type IDs must not drift.
    // Preserve only lesson content that was explicitly updated by the app (AI/theory/examples).
    parsed.chapters = INITIAL_DATA.chapters;

    const storedLessons = new Map((parsed.lessons || []).map((l: any) => [l.id, l]));
    parsed.lessons = INITIAL_DATA.lessons.map((canonical: any) => {
      const stored: any = storedLessons.get(canonical.id);
      const reuseStored = canReuseStoredLessonContent(stored, canonical);
      const merged = reuseStored ? { ...canonical, ...stored } : { ...canonical };
      return {
        ...merged,
        id: canonical.id,
        chapter_id: canonical.chapter_id,
        topic_id: canonical.topic_id,
        title_vi: canonical.title_vi,
        title_en: canonical.title_en,
        key_concepts_vi: canonical.key_concepts_vi,
        key_concepts_en: canonical.key_concepts_en,
        formulas: canonical.formulas,
        vocabulary_list: canonical.vocabulary_list,
        types: canonical.types,
        worked_examples: (reuseStored && stored?.worked_examples?.length)
          ? migrateStoredWorkedExamples(stored.worked_examples, canonical)
          : canonical.worked_examples,
      };
    });
    changed = true;

    // Remove the old generic derivative/extrema fallback questions. These were the source of
    // "Cực trị / đồng biến" leaking into Integrals, Grouped Statistics and other chapters.
    const cleanedStoredQuestions = (parsed.questions || []).filter((q: any) => !isLegacyExtremaFallbackQuestion(q));
    const canonicalQuestionIds = new Set(INITIAL_DATA.questions.map((q: any) => q.id));
    const customQuestions = cleanedStoredQuestions.filter((q: any) => !canonicalQuestionIds.has(q.id)).map((q: any) => migrateQuestionToCurrentCurriculum(q)).filter((q: any) => !q.type_id || ALL_CURRENT_TYPE_IDS.has(q.type_id));
    parsed.questions = [...INITIAL_DATA.questions, ...customQuestions];
    changed = true;

    // Update school name in profiles
    if (parsed.profiles) {
      parsed.profiles.forEach((p: any) => {
        if (p.school_name !== 'THPT Châu Thành A') {
          p.school_name = 'THPT Châu Thành A';
          changed = true;
        }
      });
    }

    parsed.practice_attempts = parsed.practice_attempts || [];
    parsed.test_attempts = parsed.test_attempts || [];
    parsed.hint_logs = parsed.hint_logs || [];
    parsed.teacher_interventions = parsed.teacher_interventions || [];
    parsed.question_versions = parsed.question_versions || [];
    parsed.research_mode = parsed.research_mode || { enabled: false, locked_at: null, protocol_version: 'AMB-RP-1.0', note: '' };

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
      const requestedId = body.id as string | undefined;
      const idx = requestedId ? db.lessons.findIndex((l: any) => l.id === requestedId) : -1;
      const lesson = { ...body, id: requestedId || `les-${Date.now()}`, updated_at: new Date().toISOString() };
      if (idx >= 0) db.lessons[idx] = { ...db.lessons[idx], ...lesson };
      else db.lessons.push(lesson);
      saveLocalDb(db);
      return { success: true, lesson } as any;
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

  if (path === '/api/questions/replace-types' && options?.method === 'POST') {
    const body = JSON.parse(options.body as string);
    const typeIds = new Set<string>((body.type_ids || []).filter(Boolean));
    const incoming = Array.isArray(body.questions) ? body.questions : [];
    const canonicalIds = new Set(INITIAL_DATA.questions.map((q: any) => q.id));
    const replaced = (db.questions || []).filter((q: any) => !canonicalIds.has(q.id) && q.type_id && typeIds.has(q.type_id));
    if (db.research_mode?.enabled && replaced.length) {
      db.question_versions = db.question_versions || [];
      db.question_versions.push(...replaced.map((q: any) => ({ ...q, archived_at: new Date().toISOString(), archived_reason: 'Research Mode bulk replace' })));
    }
    db.questions = (db.questions || []).filter(
      (q: any) => canonicalIds.has(q.id) || !q.type_id || !typeIds.has(q.type_id)
    );
    const previousVersions = new Map(replaced.map((q: any) => [q.id, Number(q.question_version || 1)]));
    const now = new Date().toISOString();
    const saved = incoming.map((q: any, idx: number) => ({
      ...q,
      id: q.id || `q-ai-${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 7)}`,
      question_version: previousVersions.has(q.id) ? Number(previousVersions.get(q.id)) + 1 : Number(q.question_version || 1),
      created_at: q.created_at || now,
      updated_at: now,
    }));
    db.questions.push(...saved);
    saveLocalDb(db);
    return { success: true, count: saved.length, questions: saved } as any;
  }

  if (path === '/api/questions') {
    if (options?.method === 'POST') {
      const body = JSON.parse(options.body as string);
      const requestedId = body.id as string | undefined;
      const idx = requestedId ? db.questions.findIndex((q: any) => q.id === requestedId) : -1;
      const previous = idx >= 0 ? db.questions[idx] : null;
      if (previous && db.research_mode?.enabled) {
        db.question_versions = db.question_versions || [];
        db.question_versions.push({ ...previous, archived_at: new Date().toISOString(), archived_reason: 'Research Mode edit' });
      }
      const question = {
        ...body,
        id: requestedId || `q-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        question_version: previous ? Number(previous.question_version || 1) + 1 : Number(body.question_version || 1),
        updated_at: new Date().toISOString(),
      };
      if (idx >= 0) db.questions[idx] = { ...db.questions[idx], ...question };
      else db.questions.push(question);
      saveLocalDb(db);
      return { success: true, question } as any;
    }
    return db.questions as any;
  }

  if (path === '/api/online-exams') {
    const localDb = db as any;
    localDb.online_exams = localDb.online_exams || [];
    if (options?.method === 'POST') {
      const body = JSON.parse(options.body as string);
      const id = body.id || `exam-${Date.now()}`;
      const exam = { ...body, id, created_at: body.created_at || new Date().toISOString() };
      const idx = localDb.online_exams.findIndex((item: any) => item.id === id);
      if (idx >= 0) localDb.online_exams[idx] = exam;
      else localDb.online_exams.push(exam);
      saveLocalDb(db);
      return { success: true, exam } as any;
    }
    return localDb.online_exams as any;
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


  if (path === '/api/teacher/classes') {
    if (options?.method === 'POST') {
      const body = JSON.parse(options.body as string);
      const cls = { id: `class-${Date.now()}`, class_code: `MB${Math.floor(1000 + Math.random() * 9000)}`, student_count: 0, created_at: new Date().toISOString(), ...body };
      db.classes = db.classes || [];
      db.classes.push(cls);
      saveLocalDb(db);
      return { success: true, class: cls } as any;
    }
    return (db.classes || []) as any;
  }

  if (path === '/api/teacher/research-mode' && options?.method === 'POST') {
    const body = JSON.parse(options.body as string);
    db.research_mode = {
      ...(db.research_mode || {}),
      ...body,
      locked_at: body.enabled ? new Date().toISOString() : null,
    };
    saveLocalDb(db);
    return { success: true, research_mode: db.research_mode } as any;
  }

  if (path === '/api/teacher/interventions') {
    if (options?.method === 'POST') {
      const body = JSON.parse(options.body as string);
      const item = { id: `ti-${Date.now()}`, ...body, created_at: new Date().toISOString() };
      db.teacher_interventions = db.teacher_interventions || [];
      db.teacher_interventions.push(item);
      saveLocalDb(db);
      return { success: true, intervention: item } as any;
    }
    return (db.teacher_interventions || []) as any;
  }

  if (path === '/api/teacher/research-snapshot') {
    const classId = new URL(endpoint, 'http://localhost').searchParams.get('class_id') || 'class-10a1';
    const attempts = (db.practice_attempts || []).filter((x: any) => !x.class_id || x.class_id === classId);
    const hints = (db.hint_logs || []).filter((x: any) => !x.class_id || x.class_id === classId);
    const counts: any = { L: 0, C: 0, M: 0 };
    [...attempts, ...hints].forEach((x: any) => { if (x.barrier_type && counts[x.barrier_type] !== undefined) counts[x.barrier_type] += 1; });
    const totalBarrier = counts.L + counts.C + counts.M;
    const first = attempts.filter((x: any) => Number(x.attempt_number || 1) === 1);
    const high = hints.filter((x: any) => Number(x.hint_level || 0) === 3).length;
    const noHint = attempts.filter((x: any) => x.independent_mode || Number(x.hint_count || 0) === 0);
    const pct = (a: number, b: number) => b ? Math.round((a / b) * 1000) / 10 : 0;
    return {
      research_mode: db.research_mode,
      classes: db.classes || [],
      barrier_summary: { language: counts.L, comprehension: counts.C, math_reasoning: counts.M, total_hint_events: hints.length, high_support_rate: pct(high, hints.length) },
      independence: {
        first_attempt_accuracy: pct(first.filter((x: any) => x.is_correct || x.first_attempt_correct).length, first.length),
        final_accuracy: pct(attempts.filter((x: any) => x.final_correct ?? x.is_correct).length, attempts.length),
        avg_retry: attempts.length ? Math.round((attempts.reduce((s: number, x: any) => s + Number(x.retry_count || Math.max(0, Number(x.attempt_number || 1) - 1)), 0) / attempts.length) * 10) / 10 : 0,
        no_hint_accuracy: pct(noHint.filter((x: any) => x.is_correct).length, noHint.length),
      },
      common_barriers: (['L','C','M'] as const).map((code) => ({ code, label: code, count: counts[code], percent: pct(counts[code], totalBarrier) })),
      recent_interventions: (db.teacher_interventions || []).filter((x: any) => !x.class_id || x.class_id === classId).slice(-20).reverse(),
      question_version_count: (db.question_versions || []).length,
      total_attempts: attempts.length,
    } as any;
  }

  return {} as any;
}
