/**
 * MATH-BRIDGE Types & Interfaces
 */

export type UserRole = 'student' | 'teacher' | 'admin';

export type MathEnglishLevel = 1 | 2 | 3 | 4 | 5;

export type LanguageMode = 'VIETNAMESE' | 'BILINGUAL' | 'ENGLISH';

export type QuestionType = 'MCQ' | 'TRUE_FALSE' | 'SHORT' | 'NUMERIC';

export type QuestionDifficulty = 'EASY' | 'MEDIUM' | 'HARD';

export type ContentStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

export type TestStatus = 'DRAFT' | 'SCHEDULED' | 'ACTIVE' | 'CLOSED' | 'ARCHIVED';

export type HintType = 'vocabulary' | 'translation' | 'formula' | 'example';

export type ErrorClassification = 'MATH_ERROR' | 'LANGUAGE_ERROR' | 'MATH_AND_LANGUAGE_ERROR' | 'CORRECT';

export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  role: UserRole;
  school_id?: string;
  school_name?: string;
  grade_id?: number; // 10, 11, 12
  avatar_url?: string;
  created_at: string;
  current_level?: MathEnglishLevel;
  class_code?: string;
  xp?: number;
  streak_days?: number;
}

export interface School {
  id: string;
  name: string;
  province: string;
}

export interface ClassGroup {
  id: string;
  name: string;
  school_id: string;
  teacher_id: string;
  grade_id: number;
  school_year: string;
  class_code: string;
  created_at: string;
  student_count?: number;
}

export interface Grade {
  id: number; // 10, 11, 12
  name: string;
  order_index: number;
}

export interface Chapter {
  id: string;
  grade_id: number;
  name_vi: string;
  name_en: string;
  description: string;
  order_index: number;
}

export interface Topic {
  id: string;
  chapter_id: string;
  name_vi: string;
  name_en: string;
  description: string;
  order_index: number;
}

export interface VocabularyItem {
  id: string;
  topic_id: string;
  word: string;
  ipa: string;
  meaning_vi: string;
  definition_en: string;
  example_en: string;
  example_vi: string;
  formula?: string;
  audio_url?: string;
  difficulty: QuestionDifficulty;
  language_level: MathEnglishLevel;
  created_at?: string;
  is_favorite?: boolean;
  is_learned?: boolean;
}

export interface SentencePattern {
  id: string;
  topic_id: string;
  pattern_en: string;
  pattern_vi: string;
  example_en: string;
  example_vi: string;
  level: MathEnglishLevel;
  usage_note?: string;
}

export interface Lesson {
  id: string;
  topic_id: string;
  title_vi: string;
  title_en: string;
  learning_objectives: string[];
  vocabulary_list: string[]; // word IDs or words
  key_concepts_vi: string;
  key_concepts_en: string;
  formulas: string[];
  worked_examples: {
    problem_en: string;
    problem_vi: string;
    solution_en: string;
    solution_vi: string;
    key_steps: string[];
  }[];
  quick_quiz_questions?: string[];
  status: ContentStatus;
  language_level: MathEnglishLevel;
  created_by: string;
  created_at: string;
}

export interface QuestionOption {
  option_key: string; // 'A', 'B', 'C', 'D'
  content_vi: string;
  content_en: string;
  is_correct: boolean;
}

export interface Question {
  id: string;
  topic_id: string;
  question_type: QuestionType;
  difficulty: QuestionDifficulty;
  language_level: MathEnglishLevel;
  question_vi: string;
  question_en: string;
  question_bilingual?: string;
  options?: QuestionOption[];
  solution_vi: string;
  solution_en: string;
  correct_answer: string;
  vocabulary_support?: { word: string; meaning: string }[];
  formula_support?: string[];
  math_skill: string;
  english_skill: string;
  status: ContentStatus;
  created_by: string;
  created_at: string;
  // Math Reading fields
  given_info?: string;
  required_info?: string;
}

export interface PracticeAttempt {
  id: string;
  student_id: string;
  question_id: string;
  student_answer: string;
  is_correct: boolean;
  response_time: number; // in seconds
  language_mode: LanguageMode;
  hint_count: number;
  error_type?: ErrorClassification;
  created_at: string;
}

export interface Test {
  id: string;
  title: string;
  description: string;
  teacher_id: string;
  teacher_name?: string;
  duration_minutes: number;
  english_ratio: number; // 10 to 100%
  start_at?: string;
  end_at?: string;
  max_attempts: number;
  shuffle_questions: boolean;
  shuffle_options: boolean;
  show_result: boolean;
  show_solution: boolean;
  status: TestStatus;
  question_ids: string[];
  class_id?: string;
  created_at: string;
}

export interface TestAttempt {
  id: string;
  test_id: string;
  student_id: string;
  started_at: string;
  submitted_at?: string;
  score?: number;
  math_score?: number;
  english_math_score?: number;
  status: 'IN_PROGRESS' | 'COMPLETED';
  answers: {
    question_id: string;
    student_answer: string;
    is_correct: boolean;
    points: number;
    error_type?: ErrorClassification;
    hint_count: number;
  }[];
}

export interface HintLog {
  id: string;
  student_id: string;
  question_id: string;
  attempt_id?: string;
  hint_type: HintType;
  created_at: string;
}

export interface StudentLevel {
  id: string;
  student_id: string;
  current_level: MathEnglishLevel;
  previous_level: MathEnglishLevel;
  recommended_level: MathEnglishLevel;
  teacher_approved: boolean;
  changed_at: string;
}

export interface MEIScore {
  id: string;
  student_id: string;
  vocabulary_score: number; // V (0-100)
  reading_score: number; // R (0-100)
  problem_solving_score: number; // P (0-100)
  expression_score: number; // E (0-100)
  mei_score: number; // 0.25V + 0.25R + 0.30P + 0.20E
  calculated_at: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned_at?: string;
}
