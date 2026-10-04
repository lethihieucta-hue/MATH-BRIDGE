import curriculumRaw from "./standardBank/curriculum.json";
import questionsG10Raw from "./standardBank/questionsG10.json";
import questionsG11Raw from "./standardBank/questionsG11.json";
import questionsG12Raw from "./standardBank/questionsG12.json";
import type { HighSchoolGrade } from "../types";

export type StandardQuestionFormat = "TN" | "TLN" | "TL";

export interface StandardQuestionOption {
  key: string;
  vi: string;
  en: string;
  isCorrect: boolean;
}

export type StandardQuestionAsset =
  | { kind: "image"; src: string; altVi?: string; altEn?: string; titleVi?: string; titleEn?: string }
  | { kind: "diagram"; diagram: string; titleVi?: string; titleEn?: string };

export interface StandardStudentQuestion {
  id: string;
  grade: HighSchoolGrade;
  chapterId: string;
  chapterTitleVi: string;
  chapterTitleEn: string;
  lessonId: string;
  lessonTitleVi: string;
  lessonTitleEn: string;
  format: StandardQuestionFormat;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  languageLevel: number;
  questionVi: string;
  questionEn: string;
  options: StandardQuestionOption[];
  correctAnswer: string;
  solutionVi: string;
  solutionEn: string;
  vocabularySupport: Array<{ word: string; meaning: string }>;
  formulaSupport: string[];
  assets: StandardQuestionAsset[];
  mathSkill: string;
  englishSkill: string;
}

export interface StandardChapter {
  id: string;
  grade: HighSchoolGrade;
  titleVi: string;
  titleEn: string;
  order: number;
}

export interface StandardLesson {
  id: string;
  chapterId: string;
  grade: HighSchoolGrade;
  titleVi: string;
  titleEn: string;
  order: number;
}

const curriculum = curriculumRaw as { chapters: StandardChapter[]; lessons: StandardLesson[] };
const q10 = questionsG10Raw as StandardStudentQuestion[];
const q11 = questionsG11Raw as StandardStudentQuestion[];
const q12 = questionsG12Raw as StandardStudentQuestion[];

export const STANDARD_CHAPTERS = curriculum.chapters;
export const STANDARD_LESSONS = curriculum.lessons;
export const STANDARD_STUDENT_QUESTIONS: StandardStudentQuestion[] = [...q10, ...q11, ...q12];

export const getStandardChaptersForGrade = (grade: HighSchoolGrade) =>
  STANDARD_CHAPTERS.filter((chapter) => chapter.grade === grade).sort((a, b) => a.order - b.order);

export const getStandardLessonsForChapter = (chapterId: string) =>
  STANDARD_LESSONS.filter((lesson) => lesson.chapterId === chapterId).sort((a, b) => a.order - b.order);

export const getStandardLessonsForGrade = (grade: HighSchoolGrade) =>
  STANDARD_LESSONS.filter((lesson) => lesson.grade === grade).sort((a, b) => {
    if (a.chapterId !== b.chapterId) return a.chapterId.localeCompare(b.chapterId, undefined, { numeric: true });
    return a.order - b.order;
  });

export const getStandardQuestionsForLesson = (
  lessonId: string,
  formats: StandardQuestionFormat[]
) => STANDARD_STUDENT_QUESTIONS.filter((q) => q.lessonId === lessonId && formats.includes(q.format));

export const countQuestionsForLesson = (lessonId: string) => {
  const counts = { TN: 0, TLN: 0, TL: 0 };
  STANDARD_STUDENT_QUESTIONS.forEach((q) => {
    if (q.lessonId === lessonId) counts[q.format] += 1;
  });
  return counts;
};

export const countQuestionsForChapter = (chapterId: string) => {
  const counts = { TN: 0, TLN: 0, TL: 0 };
  STANDARD_STUDENT_QUESTIONS.forEach((q) => {
    if (q.chapterId === chapterId) counts[q.format] += 1;
  });
  return counts;
};

export const getFirstLessonWithQuestions = (
  grade: HighSchoolGrade,
  formats: StandardQuestionFormat[]
): StandardLesson | undefined => {
  const eligibleIds = new Set(
    STANDARD_STUDENT_QUESTIONS
      .filter((q) => q.grade === grade && formats.includes(q.format))
      .map((q) => q.lessonId)
  );
  return getStandardLessonsForGrade(grade).find((lesson) => eligibleIds.has(lesson.id));
};

export const STANDARD_BANK_SUMMARY = {
  totalStudentQuestions: STANDARD_STUDENT_QUESTIONS.length,
  level2TN: STANDARD_STUDENT_QUESTIONS.filter((q) => q.format === "TN").length,
  level3TLN: STANDARD_STUDENT_QUESTIONS.filter((q) => q.format === "TLN").length,
  level3TL: STANDARD_STUDENT_QUESTIONS.filter((q) => q.format === "TL").length,
};
