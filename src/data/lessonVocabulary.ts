import { MATH_TERMS } from "./mathTerms";
import type { HighSchoolGrade, MathTerm } from "../types";
import {
  STANDARD_CHAPTERS,
  STANDARD_LESSONS,
  STANDARD_STUDENT_QUESTIONS,
  type StandardStudentQuestion,
} from "./standardQuestionBank";

export interface LessonVocabularyTerm extends MathTerm {
  sourceQuestionId?: string;
  sourceQuestionFormat?: StandardStudentQuestion["format"];
  sourceLessonId: string;
  relevanceScore: number;
}

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\\[a-zA-Z]+/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const meaningfulTokens = (value: string) =>
  normalize(value)
    .split(" ")
    .filter((token) => token.length >= 3 && !["the", "and", "for", "with", "from", "into", "given", "find"].includes(token));

const legacyChapterId = (chapterId: string, grade: HighSchoolGrade) => {
  const match = chapterId.match(/chap-(10|11|12)-(\d+)/);
  return match ? `g${grade}_c${Number(match[2])}` : chapterId;
};

const lessonQuestions = (lessonId: string) =>
  STANDARD_STUDENT_QUESTIONS.filter((question) => question.lessonId === lessonId);

const lessonCorpus = (lessonId: string) => {
  const lesson = STANDARD_LESSONS.find((item) => item.id === lessonId);
  const questions = lessonQuestions(lessonId);
  return normalize([
    lesson?.titleVi || "",
    lesson?.titleEn || "",
    ...questions.flatMap((question) => [
      question.questionEn,
      question.questionVi,
      question.mathSkill,
      question.englishSkill,
      question.solutionEn,
      question.solutionVi,
    ]),
  ].join(" "));
};

const scoreTerm = (term: MathTerm, corpus: string, lessonTitle: string) => {
  const termText = normalize(term.term.replace(/\([^)]*\)/g, " "));
  const viText = normalize(term.vietnamese);
  const title = normalize(lessonTitle);
  let score = 0;

  if (termText && corpus.includes(termText)) score += 120;
  if (viText && corpus.includes(viText)) score += 90;

  const termTokens = meaningfulTokens(term.term);
  const viTokens = meaningfulTokens(term.vietnamese);
  termTokens.forEach((token) => {
    if (corpus.includes(token)) score += 12;
    if (title.includes(token)) score += 18;
  });
  viTokens.forEach((token) => {
    if (corpus.includes(token)) score += 7;
    if (title.includes(token)) score += 12;
  });

  if (term.stageLevel === 1) score += 4;
  if (term.stageLevel === 2) score += 2;
  return score;
};

const findSourceQuestion = (term: MathTerm, questions: StandardStudentQuestion[]) => {
  const termText = normalize(term.term.replace(/\([^)]*\)/g, " "));
  const viText = normalize(term.vietnamese);
  const tokens = meaningfulTokens(term.term);

  return questions.find((question) => {
    const corpus = normalize(`${question.questionEn} ${question.questionVi} ${question.mathSkill} ${question.englishSkill}`);
    if (termText && corpus.includes(termText)) return true;
    if (viText && corpus.includes(viText)) return true;
    return tokens.length > 0 && tokens.every((token) => corpus.includes(token));
  });
};

const CACHE = new Map<string, LessonVocabularyTerm[]>();

export const getLessonVocabularyTerms = (lessonId: string, limit = 12): LessonVocabularyTerm[] => {
  const cacheKey = `${lessonId}:${limit}`;
  const cached = CACHE.get(cacheKey);
  if (cached) return cached;

  const lesson = STANDARD_LESSONS.find((item) => item.id === lessonId);
  if (!lesson) return [];
  const chapterTermId = legacyChapterId(lesson.chapterId, lesson.grade);
  const questions = lessonQuestions(lessonId);
  const corpus = lessonCorpus(lessonId);
  const lessonTitle = `${lesson.titleVi} ${lesson.titleEn}`;
  const chapterTerms = MATH_TERMS.filter(
    (term) => term.gradeLevel === lesson.grade && term.chapterId === chapterTermId
  );
  const fallbackGradeTerms = MATH_TERMS.filter((term) => term.gradeLevel === lesson.grade);
  const baseCandidates = chapterTerms.length ? chapterTerms : fallbackGradeTerms;

  // Some KNTT chapters intentionally have only a few entries in the hand-curated lexicon.
  // When that happens, borrow only strongly related concepts from another grade so the game still has
  // enough cards. The cloned term keeps the original expert definition but is tracked under the
  // learner's current grade and lesson.
  const relatedCrossGrade = baseCandidates.length < 6
    ? MATH_TERMS
        .filter((term) => term.gradeLevel !== lesson.grade)
        .map((term) => ({ term, score: scoreTerm(term, corpus, lessonTitle) }))
        .filter((item) => item.score >= 24)
        .sort((a, b) => b.score - a.score)
        .map((item) => item.term)
        .slice(0, 8)
    : [];

  const rawCandidates = [...baseCandidates, ...relatedCrossGrade];
  const seenConcepts = new Set<string>();
  const candidates = rawCandidates.filter((term) => {
    const conceptKey = normalize(term.term.replace(/\([^)]*\)/g, " ")) || normalize(term.vietnamese);
    if (!conceptKey || seenConcepts.has(conceptKey)) return false;
    seenConcepts.add(conceptKey);
    return true;
  });

  const ranked = candidates
    .map((term, originalIndex) => ({
      term,
      originalIndex,
      score: scoreTerm(term, corpus, lessonTitle),
      sourceQuestion: findSourceQuestion(term, questions),
    }))
    .sort((a, b) => b.score - a.score || a.term.stageLevel - b.term.stageLevel || a.originalIndex - b.originalIndex)
    .slice(0, Math.max(1, Math.min(limit, candidates.length)))
    .map(({ term, score, sourceQuestion }) => ({
      ...term,
      gradeLevel: lesson.grade,
      chapterId: chapterTermId,
      topicVi: lesson.titleVi,
      exampleSentenceEn: sourceQuestion?.questionEn || term.exampleSentenceEn,
      exampleSentenceVi: sourceQuestion?.questionVi || term.exampleSentenceVi,
      sourceQuestionId: sourceQuestion?.id,
      sourceQuestionFormat: sourceQuestion?.format,
      sourceLessonId: lesson.id,
      relevanceScore: score,
    }));

  CACHE.set(cacheKey, ranked);
  return ranked;
};

export const countVocabularyForLesson = (lessonId: string) => getLessonVocabularyTerms(lessonId).length;

export const countVocabularyForChapter = (chapterId: string) => {
  const unique = new Set<string>();
  STANDARD_LESSONS.filter((lesson) => lesson.chapterId === chapterId).forEach((lesson) => {
    getLessonVocabularyTerms(lesson.id).forEach((term) => unique.add(`${term.gradeLevel}:${term.id}`));
  });
  return unique.size;
};

export const getFirstLessonWithVocabulary = (grade: HighSchoolGrade) =>
  STANDARD_LESSONS.filter((lesson) => lesson.grade === grade)
    .sort((a, b) => {
      if (a.chapterId !== b.chapterId) return a.chapterId.localeCompare(b.chapterId, undefined, { numeric: true });
      return a.order - b.order;
    })
    .find((lesson) => getLessonVocabularyTerms(lesson.id).length > 0);

export const getVocabularyCoverageForGrade = (grade: HighSchoolGrade) => {
  const lessonIds = STANDARD_LESSONS.filter((lesson) => lesson.grade === grade).map((lesson) => lesson.id);
  const unique = new Set<string>();
  lessonIds.forEach((lessonId) => getLessonVocabularyTerms(lessonId).forEach((term) => unique.add(`${grade}:${term.id}`)));
  return { lessons: lessonIds.length, uniqueTerms: unique.size };
};

export const getLessonVocabularyContext = (lessonId: string) => {
  const lesson = STANDARD_LESSONS.find((item) => item.id === lessonId);
  if (!lesson) return null;
  const chapter = STANDARD_CHAPTERS.find((item) => item.id === lesson.chapterId);
  const questions = lessonQuestions(lessonId);
  return {
    lesson,
    chapter,
    terms: getLessonVocabularyTerms(lessonId),
    level2Count: questions.filter((q) => q.format === "TN").length,
    level3Count: questions.filter((q) => q.format === "TLN" || q.format === "TL").length,
  };
};
