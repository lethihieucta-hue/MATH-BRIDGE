import type { PracticeProblem } from "../types";
import { STANDARD_STUDENT_QUESTIONS } from "./standardQuestionBank";

const difficultyMap = { EASY: "Easy", MEDIUM: "Medium", HARD: "Hard" } as const;

/**
 * Compatibility view for modules such as AI Tutor.
 * The legacy Student question files were removed in V2.1; this array is now derived
 * exclusively from the validated AI Math Teacher question bank.
 */
export const PRACTICE_PROBLEMS: PracticeProblem[] = STANDARD_STUDENT_QUESTIONS.map((q) => ({
  id: q.id,
  title: q.lessonTitleVi,
  topic: q.lessonTitleVi,
  gradeLevel: q.grade,
  chapterId: q.chapterId,
  level: q.format === "TN" ? 2 : 3,
  exam: "SGK Kết nối tri thức",
  stage: q.format === "TN" ? 3 : 5,
  difficulty: difficultyMap[q.difficulty],
  questionEnglish: q.questionEn,
  questionVietnamese: q.questionVi,
  options: q.options.map((option) => ({ label: option.key, text: option.en || option.vi, isCorrect: option.isCorrect })),
  correctAnswer: q.correctAnswer,
  acceptedAnswerFormats: q.format === "TLN" ? [q.correctAnswer] : undefined,
  solutionSteps: (q.solutionEn || q.solutionVi).split(/\n+/).filter(Boolean),
  keyVocabulary: q.vocabularySupport.map((item) => ({
    word: item.word,
    meaning: item.meaning,
    mathContext: q.lessonTitleVi,
  })),
  socraticSteps: [
    "Identify the given information and the exact quantity to find.",
    ...(q.formulaSupport.length ? q.formulaSupport : ["Recall the theorem or formula from the selected lesson."]),
    "Complete the calculation and state the conclusion clearly.",
  ],
  commonPitfall: "Đọc kỹ dữ kiện, điều kiện và yêu cầu của đúng bài học trước khi tính toán.",
  exemplaryEssay: q.solutionEn || q.solutionVi,
}));

export const PRACTICE_PROBLEMS_G10 = PRACTICE_PROBLEMS.filter((p) => p.gradeLevel === 10);
export const PRACTICE_PROBLEMS_G11 = PRACTICE_PROBLEMS.filter((p) => p.gradeLevel === 11);
export const PRACTICE_PROBLEMS_G12 = PRACTICE_PROBLEMS.filter((p) => p.gradeLevel === 12);
