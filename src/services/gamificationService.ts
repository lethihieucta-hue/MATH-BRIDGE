import type { DailyMissionSnapshot, UserProgress } from "../types";

export interface MissionTaskDefinition {
  id: "vocab" | "level2" | "level3" | "xp";
  title: string;
  description: string;
  target: number;
  rewardXp: number;
  destination: "level1" | "level2" | "level3";
}

export interface BadgeDefinition {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progressText: string;
}

export const DAILY_MISSION_TASKS: MissionTaskDefinition[] = [
  { id: "vocab", title: "Warm-up Vocabulary", description: "Thuộc thêm 3 thuật ngữ của bài đang học", target: 3, rewardXp: 20, destination: "level1" },
  { id: "level2", title: "Reading Sprint", description: "Hoàn thành 3 câu trắc nghiệm Level 2", target: 3, rewardXp: 30, destination: "level2" },
  { id: "level3", title: "Deep Practice", description: "Hoàn thành 1 câu trả lời ngắn hoặc tự luận Level 3", target: 1, rewardXp: 40, destination: "level3" },
  { id: "xp", title: "Daily Momentum", description: "Kiếm 80 XP từ hoạt động học trong ngày", target: 80, rewardXp: 25, destination: "level2" },
];

export function localDateKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function previousDateKey(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return localDateKey(d);
}

export function createDailyMissionSnapshot(progress: Pick<UserProgress, "level1MasteredCount" | "level2SolvedCount" | "level3GradedCount" | "xp">): DailyMissionSnapshot {
  return {
    date: localDateKey(),
    startTermsMastered: progress.level1MasteredCount,
    startLevel2Solved: progress.level2SolvedCount,
    startLevel3Graded: progress.level3GradedCount,
    startXp: progress.xp,
    claimedTaskIds: [],
  };
}

export function ensureDailyMission(progress: UserProgress): UserProgress {
  if (progress.dailyMission?.date === localDateKey()) return progress;
  return { ...progress, dailyMission: createDailyMissionSnapshot(progress) };
}

export function applyLearningXp(progress: UserProgress, amount: number): UserProgress {
  const today = localDateKey();
  const base = ensureDailyMission(progress);
  let streakDays = base.streakDays || 1;
  if (base.lastActiveDate !== today) {
    streakDays = base.lastActiveDate === previousDateKey() ? Math.max(1, base.streakDays) + 1 : 1;
  }
  return {
    ...base,
    xp: Math.max(0, base.xp + amount),
    streakDays,
    lastActiveDate: today,
  };
}

export function getMissionProgress(progress: UserProgress, taskId: MissionTaskDefinition["id"]): number {
  const mission = progress.dailyMission;
  if (!mission || mission.date !== localDateKey()) return 0;
  switch (taskId) {
    case "vocab": return Math.max(0, progress.level1MasteredCount - mission.startTermsMastered);
    case "level2": return Math.max(0, progress.level2SolvedCount - mission.startLevel2Solved);
    case "level3": return Math.max(0, progress.level3GradedCount - mission.startLevel3Graded);
    case "xp": return Math.max(0, progress.xp - mission.startXp);
  }
}

export function getPlayerLevel(xp: number) {
  const safeXp = Math.max(0, xp);
  const level = Math.floor(safeXp / 250) + 1;
  const currentFloor = (level - 1) * 250;
  const nextFloor = level * 250;
  return {
    level,
    title: level >= 12 ? "Math English Champion" : level >= 8 ? "Problem Solver" : level >= 5 ? "Math Explorer" : level >= 3 ? "Bridge Builder" : "Starter",
    currentXp: safeXp - currentFloor,
    neededXp: nextFloor - currentFloor,
    percent: Math.min(100, Math.round(((safeXp - currentFloor) / Math.max(1, nextFloor - currentFloor)) * 100)),
  };
}

export function getBadges(progress: UserProgress): BadgeDefinition[] {
  const accuracy = progress.attemptedAnswers ? Math.round((progress.correctAnswers / progress.attemptedAnswers) * 100) : 0;
  const data = [
    ["first-steps", "First Bridge", "Hoàn thành hoạt động học đầu tiên", "🌉", progress.solvedCount + progress.level1MasteredCount >= 1, `${Math.min(1, progress.solvedCount + progress.level1MasteredCount)}/1`],
    ["vocab-20", "Vocabulary Builder", "Thuộc 20 thuật ngữ", "🧠", progress.level1MasteredCount >= 20, `${Math.min(20, progress.level1MasteredCount)}/20`],
    ["reader-25", "English Problem Reader", "Luyện 25 câu Level 2", "📘", progress.level2SolvedCount >= 25, `${Math.min(25, progress.level2SolvedCount)}/25`],
    ["writer-10", "Math Writer", "Hoàn thành 10 bài Level 3", "✍️", progress.level3GradedCount >= 10, `${Math.min(10, progress.level3GradedCount)}/10`],
    ["streak-7", "7-Day Flame", "Duy trì chuỗi học 7 ngày", "🔥", progress.streakDays >= 7, `${Math.min(7, progress.streakDays)}/7 ngày`],
    ["accuracy-80", "Precision Solver", "Đạt ≥80% chính xác sau ít nhất 20 câu", "🎯", progress.attemptedAnswers >= 20 && accuracy >= 80, progress.attemptedAnswers < 20 ? `${progress.attemptedAnswers}/20 câu` : `${accuracy}%`],
    ["boss-1", "Boss Breaker", "Chiến thắng Boss Challenge đầu tiên", "⚔️", progress.bossProgress.wins >= 1, `${Math.min(1, progress.bossProgress.wins)}/1`],
    ["boss-5", "Boss Hunter", "Chiến thắng 5 Boss Challenge", "🏆", progress.bossProgress.wins >= 5, `${Math.min(5, progress.bossProgress.wins)}/5`],
  ] as const;
  return data.map(([id, name, description, icon, unlocked, progressText]) => ({ id, name, description, icon, unlocked, progressText }));
}
