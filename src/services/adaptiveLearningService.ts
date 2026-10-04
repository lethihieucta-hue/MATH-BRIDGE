import type {
  AdaptiveSnapshot,
  HighSchoolGrade,
  LessonSkillStats,
  UserProgress,
} from "../types";
import { getStandardLessonsForGrade } from "../data/standardQuestionBank";

const clamp = (value: number, min = 0, max = 100) => Math.max(min, Math.min(max, value));

const blendWithEvidence = (
  currentScore: number,
  currentEvidence: number,
  sampleScore: number,
  sampleWeight: number,
) => {
  if (currentEvidence <= 0) return { score: Math.round(clamp(sampleScore)), evidence: sampleWeight };
  const retainedEvidence = Math.min(8, Math.max(1, currentEvidence));
  const score = (currentScore * retainedEvidence + clamp(sampleScore) * sampleWeight) / (retainedEvidence + sampleWeight);
  return { score: Math.round(clamp(score)), evidence: Math.min(20, currentEvidence + sampleWeight) };
};

const aggregateScore = (
  stats: Record<string, LessonSkillStats>,
  field: "mathScore" | "mathEnglishScore",
  evidenceField: "mathEvidence" | "englishEvidence",
  fallback: number,
) => {
  const rows = Object.values(stats).filter((row) => row[evidenceField] > 0);
  if (!rows.length) return fallback;
  let weighted = 0;
  let total = 0;
  for (const row of rows) {
    const w = Math.min(6, row[evidenceField]);
    weighted += row[field] * w;
    total += w;
  }
  return total ? Math.round(weighted / total) : fallback;
};

const pickFocusLessonId = (progress: UserProgress, grade: HighSchoolGrade): string | undefined => {
  const attempted = Object.values(progress.lessonSkillStats)
    .filter((row) => row.grade === grade && row.attempts > 0)
    .sort((a, b) => {
      const aCombined = (a.mathScore + a.mathEnglishScore) / 2 + Math.min(8, a.attempts) * 0.25;
      const bCombined = (b.mathScore + b.mathEnglishScore) / 2 + Math.min(8, b.attempts) * 0.25;
      return aCombined - bCombined;
    });
  if (attempted[0]) return attempted[0].lessonId;
  if (progress.lastLessonId && getStandardLessonsForGrade(grade).some((l) => l.id === progress.lastLessonId)) return progress.lastLessonId;
  return getStandardLessonsForGrade(grade)[0]?.id;
};

export function computeAdaptiveSnapshot(progress: UserProgress, grade: HighSchoolGrade = progress.selectedGrade): AdaptiveSnapshot {
  const assessmentCount = progress.mathAssessmentCount + progress.mathEnglishAssessmentCount;
  const mathConfidence = Math.min(100, Math.round((progress.mathAssessmentCount / 12) * 100));
  const englishConfidence = Math.min(100, Math.round((progress.mathEnglishAssessmentCount / 12) * 100));
  const math = progress.mathScore;
  const english = progress.mathEnglishScore;
  const gap = math - english;
  const focusLessonId = pickFocusLessonId(progress, grade);

  if (assessmentCount < 4) {
    return {
      generatedAt: new Date().toISOString(),
      assessmentCount,
      mathConfidence,
      mathEnglishConfidence: englishConfidence,
      recommendedLevel: progress.level1MasteredCount < 5 ? 1 : 2,
      recommendedEnglishRatio: 40,
      preferredDifficulty: "EASY",
      supportMode: "foundation",
      focus: "collect-data",
      focusLessonId,
      reason: "Chưa đủ dữ liệu học thật để kết luận em yếu Toán hay yếu Math English.",
      nextGoal: "Học vài thuật ngữ rồi hoàn thành ít nhất 3–4 câu Level 2 để AI tạo đường cơ sở.",
    };
  }

  if (math < 50 && english < 50) {
    return {
      generatedAt: new Date().toISOString(), assessmentCount, mathConfidence,
      mathEnglishConfidence: englishConfidence, recommendedLevel: 1, recommendedEnglishRatio: 35,
      preferredDifficulty: "EASY", supportMode: "foundation", focus: "balanced", focusLessonId,
      reason: "Cả kiến thức Toán và khả năng đọc Math English đều đang cần củng cố nền tảng.",
      nextGoal: "Ôn từ khóa của bài yếu nhất, sau đó làm câu TN mức Easy trước khi sang tự luận.",
    };
  }

  if (gap >= 12) {
    return {
      generatedAt: new Date().toISOString(), assessmentCount, mathConfidence,
      mathEnglishConfidence: englishConfidence, recommendedLevel: 2,
      recommendedEnglishRatio: english >= 65 ? 70 : 50,
      preferredDifficulty: math >= 75 ? "HARD" : math >= 60 ? "MEDIUM" : "EASY",
      supportMode: "language-bridge", focus: "math-english", focusLessonId,
      reason: `Math Score đang cao hơn Math English Score ${Math.round(gap)} điểm: em có thể biết cách giải nhưng còn phụ thuộc ngôn ngữ.`,
      nextGoal: "Giữ độ khó Toán phù hợp, giảm dần bản dịch và tập nhận diện command words/cụm từ Toán.",
    };
  }

  if (gap <= -12) {
    return {
      generatedAt: new Date().toISOString(), assessmentCount, mathConfidence,
      mathEnglishConfidence: englishConfidence, recommendedLevel: math < 55 ? 2 : 3,
      recommendedEnglishRatio: 65,
      preferredDifficulty: math < 50 ? "EASY" : math < 70 ? "MEDIUM" : "HARD",
      supportMode: "math-rebuild", focus: "math", focusLessonId,
      reason: `Math English Score đang cao hơn Math Score ${Math.round(Math.abs(gap))} điểm: em hiểu đề khá tốt nhưng phần giải Toán còn yếu hơn.`,
      nextGoal: "Ưu tiên câu đúng bài, dùng gợi ý công thức theo tầng và chỉ tăng độ khó khi làm đúng ổn định.",
    };
  }

  if (math >= 82 && english >= 82 && assessmentCount >= 16) {
    return {
      generatedAt: new Date().toISOString(), assessmentCount, mathConfidence,
      mathEnglishConfidence: englishConfidence, recommendedLevel: 3, recommendedEnglishRatio: 95,
      preferredDifficulty: "HARD", supportMode: "immersion", focus: "advanced", focusLessonId,
      reason: "Hai năng lực đều cao và đã có đủ dữ liệu: em có thể luyện gần như hoàn toàn bằng tiếng Anh.",
      nextGoal: "Ưu tiên tự luận Hard, hạn chế bản dịch và diễn đạt các bước giải bằng Math English.",
    };
  }

  if (math >= 68 && english >= 68) {
    return {
      generatedAt: new Date().toISOString(), assessmentCount, mathConfidence,
      mathEnglishConfidence: englishConfidence, recommendedLevel: 3, recommendedEnglishRatio: 80,
      preferredDifficulty: math >= 78 ? "HARD" : "MEDIUM", supportMode: "english-first",
      focus: "advanced", focusLessonId,
      reason: "Toán và Math English đang khá cân bằng; có thể tăng tỷ lệ tiếng Anh và chuyển sang diễn đạt lời giải.",
      nextGoal: "Làm Level 3 cùng bài với English-first; chỉ mở tiếng Việt khi thực sự cần.",
    };
  }

  return {
    generatedAt: new Date().toISOString(), assessmentCount, mathConfidence,
    mathEnglishConfidence: englishConfidence, recommendedLevel: 2, recommendedEnglishRatio: 60,
    preferredDifficulty: "MEDIUM", supportMode: "balanced", focus: "balanced", focusLessonId,
    reason: "Hai năng lực tương đối cân bằng; hệ thống tiếp tục thu thập dữ liệu và tăng độ khó vừa phải.",
    nextGoal: "Luân phiên Level 2 và Level 3, giữ bản dịch ở mức hỗ trợ thay vì dùng mặc định.",
  };
}

export interface Level2AdaptiveEvent {
  grade: HighSchoolGrade;
  lessonId: string;
  isCorrect: boolean;
  hintsUsed: number;
  translationUsed: boolean;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface Level3AdaptiveEvent {
  grade: HighSchoolGrade;
  lessonId: string;
  mathScore: number; // 0..10 from standardized checking / rubric
  englishScore: number; // 0..10
  hintsUsed: number;
  translationUsed: boolean;
}

function getOrCreateLessonStats(progress: UserProgress, lessonId: string, grade: HighSchoolGrade): LessonSkillStats {
  return progress.lessonSkillStats[lessonId] ?? {
    lessonId, grade, attempts: 0, correct: 0, level2Attempts: 0, level3Attempts: 0,
    mathScore: 50, mathEnglishScore: 50, mathEvidence: 0, englishEvidence: 0,
    hintsUsed: 0, translationUses: 0, lastPracticedAt: "",
  };
}

export function applyAdaptiveLevel2Evidence(progress: UserProgress, event: Level2AdaptiveEvent): UserProgress {
  const stats = getOrCreateLessonStats(progress, event.lessonId, event.grade);
  const difficultyBonus = event.difficulty === "Hard" ? 10 : event.difficulty === "Medium" ? 5 : 0;
  const mathSample = clamp((event.isCorrect ? 82 + difficultyBonus : 32 + difficultyBonus / 2) - event.hintsUsed * 4, 12, 98);
  const englishSample = clamp((event.isCorrect ? 86 + difficultyBonus / 2 : 44) - (event.translationUsed ? 22 : 0) - event.hintsUsed * 7, 8, 98);
  const mathWeight = event.difficulty === "Hard" ? 1.3 : event.difficulty === "Medium" ? 1.15 : 1;
  const math = blendWithEvidence(stats.mathScore, stats.mathEvidence, mathSample, mathWeight);
  const english = blendWithEvidence(stats.mathEnglishScore, stats.englishEvidence, englishSample, 1);
  const lessonSkillStats = {
    ...progress.lessonSkillStats,
    [event.lessonId]: {
      ...stats,
      attempts: stats.attempts + 1,
      correct: stats.correct + (event.isCorrect ? 1 : 0),
      level2Attempts: stats.level2Attempts + 1,
      mathScore: math.score,
      mathEnglishScore: english.score,
      mathEvidence: math.evidence,
      englishEvidence: english.evidence,
      hintsUsed: stats.hintsUsed + event.hintsUsed,
      translationUses: stats.translationUses + (event.translationUsed ? 1 : 0),
      lastPracticedAt: new Date().toISOString(),
    },
  };
  const next = {
    ...progress,
    lessonSkillStats,
    mathAssessmentCount: progress.mathAssessmentCount + 1,
    mathEnglishAssessmentCount: progress.mathEnglishAssessmentCount + 1,
    mathScore: aggregateScore(lessonSkillStats, "mathScore", "mathEvidence", math.score),
    mathEnglishScore: aggregateScore(lessonSkillStats, "mathEnglishScore", "englishEvidence", english.score),
    lastLessonId: event.lessonId,
  };
  return { ...next, adaptive: computeAdaptiveSnapshot(next, event.grade) };
}

export function applyAdaptiveLevel3Evidence(progress: UserProgress, event: Level3AdaptiveEvent): UserProgress {
  const stats = getOrCreateLessonStats(progress, event.lessonId, event.grade);
  const mathSample = clamp(event.mathScore * 10 - event.hintsUsed * 3, 10, 100);
  const englishSample = clamp(event.englishScore * 10 - event.hintsUsed * 4 - (event.translationUsed ? 10 : 0), 8, 100);
  const math = blendWithEvidence(stats.mathScore, stats.mathEvidence, mathSample, 1.5);
  const english = blendWithEvidence(stats.mathEnglishScore, stats.englishEvidence, englishSample, 1.5);
  const correctEnough = event.mathScore >= 7;
  const lessonSkillStats = {
    ...progress.lessonSkillStats,
    [event.lessonId]: {
      ...stats,
      attempts: stats.attempts + 1,
      correct: stats.correct + (correctEnough ? 1 : 0),
      level3Attempts: stats.level3Attempts + 1,
      mathScore: math.score,
      mathEnglishScore: english.score,
      mathEvidence: math.evidence,
      englishEvidence: english.evidence,
      hintsUsed: stats.hintsUsed + event.hintsUsed,
      translationUses: stats.translationUses + (event.translationUsed ? 1 : 0),
      lastPracticedAt: new Date().toISOString(),
    },
  };
  const next = {
    ...progress,
    lessonSkillStats,
    mathAssessmentCount: progress.mathAssessmentCount + 1,
    mathEnglishAssessmentCount: progress.mathEnglishAssessmentCount + 1,
    mathScore: aggregateScore(lessonSkillStats, "mathScore", "mathEvidence", math.score),
    mathEnglishScore: aggregateScore(lessonSkillStats, "mathEnglishScore", "englishEvidence", english.score),
    lastLessonId: event.lessonId,
  };
  return { ...next, adaptive: computeAdaptiveSnapshot(next, event.grade) };
}

export function getAdaptiveModeLabel(snapshot: AdaptiveSnapshot): string {
  const labels: Record<AdaptiveSnapshot["supportMode"], string> = {
    foundation: "Foundation Bridge",
    "language-bridge": "Math English Bridge",
    "math-rebuild": "Math Rebuild",
    balanced: "Balanced Practice",
    "english-first": "English First",
    immersion: "English Immersion",
  };
  return labels[snapshot.supportMode];
}
