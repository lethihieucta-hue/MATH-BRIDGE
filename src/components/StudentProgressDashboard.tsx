import React from "react";
import {
  ArrowRight,
  AudioLines,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Flame,
  Gauge,
  Languages,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import type { LessonSkillStats, StudentProfile, UserProgress } from "../types";
import { DAILY_MISSION_TASKS, getBadges, getMissionProgress, getPlayerLevel } from "../services/gamificationService";
import { getAdaptiveModeLabel } from "../services/adaptiveLearningService";
import { STANDARD_LESSONS } from "../data/standardQuestionBank";

type StudentDestination = "level1" | "level2" | "level3" | "tutor" | "speaking" | "challenge";

interface StudentProgressDashboardProps {
  profile: StudentProfile;
  progress: UserProgress;
  onNavigate: (destination: StudentDestination) => void;
  onNavigateToLesson?: (destination: "level1" | "level2" | "level3", lessonId: string) => void;
}

const ScoreRing: React.FC<{ value: number | null; confidence: number; label: string; caption: string }> = ({ value, confidence, label, caption }) => (
  <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
    <div className="flex items-center gap-4">
      <div className="w-20 h-20 rounded-full grid place-items-center bg-gradient-to-br from-indigo-50 to-violet-50 border-[7px] border-indigo-100">
        <div className="text-center">
          <div className="text-xl font-black text-indigo-700">{value === null ? "--" : Math.round(value)}</div>
          <div className="text-[9px] font-black text-indigo-400">{value === null ? "CHƯA ĐO" : "/100"}</div>
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-black text-slate-900">{label}</div>
        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{caption}</p>
        <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full bg-indigo-500" style={{ width: `${confidence}%` }} /></div>
        <div className="text-[9px] text-slate-400 mt-1">Độ tin cậy dữ liệu: {confidence}%</div>
      </div>
    </div>
  </div>
);

export const StudentProgressDashboard: React.FC<StudentProgressDashboardProps> = ({ profile, progress, onNavigate, onNavigateToLesson }) => {
  const accuracy = progress.attemptedAnswers > 0 ? Math.round((progress.correctAnswers / progress.attemptedAnswers) * 100) : 0;
  const hasAssessmentData = progress.mathAssessmentCount + progress.mathEnglishAssessmentCount > 0;
  const player = getPlayerLevel(progress.xp);
  const badges = getBadges(progress);
  const unlockedBadgeCount = badges.filter((badge) => badge.unlocked).length;
  const dailyCompleted = DAILY_MISSION_TASKS.filter((task) => getMissionProgress(progress, task.id) >= task.target).length;
  const adaptive = progress.adaptive;
  const focusLesson = STANDARD_LESSONS.find((lesson) => lesson.id === adaptive.focusLessonId);
  const recommendedDestination = `level${adaptive.recommendedLevel}` as "level1" | "level2" | "level3";
  const lessonRows = (Object.values(progress.lessonSkillStats) as LessonSkillStats[])
    .filter((row) => row.grade === profile.grade && row.attempts > 0)
    .sort((a, b) => (a.mathScore + a.mathEnglishScore) - (b.mathScore + b.mathEnglishScore))
    .slice(0, 3);
  const researchRows = (progress.researchAttempts || []).filter((row) => row.grade === profile.grade);
  const firstAttempts = researchRows.filter((row) => row.attemptNumber === 1 && row.activityType !== "tutor");
  const firstAttemptAccuracy = firstAttempts.length ? Math.round((firstAttempts.filter((row) => row.firstAttemptCorrect).length / firstAttempts.length) * 100) : 0;
  const highSupportRate = researchRows.length ? Math.round((researchRows.filter((row) => row.hintLevel === 3).length / researchRows.length) * 100) : 0;
  const independentRows = researchRows.filter((row) => row.independentMode);
  const independentAccuracy = independentRows.length ? Math.round((independentRows.filter((row) => row.finalCorrect).length / independentRows.length) * 100) : 0;

  const startAdaptive = () => {
    if (adaptive.focusLessonId && onNavigateToLesson) onNavigateToLesson(recommendedDestination, adaptive.focusLessonId);
    else onNavigate(recommendedDestination);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 text-white p-6 sm:p-8 shadow-xl overflow-hidden relative">
        <div className="absolute -right-12 -top-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.18em] text-indigo-200">AI Math Passport · Tutor + Adaptive</div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black">Xin chào, {profile.fullName} 👋</h2>
            <p className="mt-2 text-sm text-indigo-100/85">{profile.studentId} • {profile.className || `Lớp ${profile.grade}`} • dữ liệu riêng theo tài khoản</p>
          </div>
          <div className="grid grid-cols-3 gap-2 min-w-[280px]">
            <div className="rounded-2xl bg-white/10 border border-white/10 p-3 text-center"><Zap className="w-4 h-4 mx-auto text-amber-300" /><div className="font-black mt-1">{progress.xp}</div><div className="text-[10px] text-indigo-100">XP</div></div>
            <div className="rounded-2xl bg-white/10 border border-white/10 p-3 text-center"><Flame className="w-4 h-4 mx-auto text-orange-300" /><div className="font-black mt-1">{progress.streakDays}</div><div className="text-[10px] text-indigo-100">Streak</div></div>
            <div className="rounded-2xl bg-white/10 border border-white/10 p-3 text-center"><Trophy className="w-4 h-4 mx-auto text-yellow-300" /><div className="font-black mt-1">{progress.solvedCount}</div><div className="text-[10px] text-indigo-100">Bài học</div></div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-violet-100 text-violet-700 grid place-items-center"><Trophy className="w-5 h-5" /></div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-violet-600">Gamification · XP · Streak · Mission</div>
              <div className="font-black text-slate-900">Lv.{player.level} · {player.title}</div>
              <div className="text-[11px] text-slate-500">Daily Mission {dailyCompleted}/{DAILY_MISSION_TASKS.length} · {unlockedBadgeCount}/{badges.length} huy hiệu · Boss best {progress.bossProgress.bestScore}/100</div>
            </div>
          </div>
          <button onClick={() => onNavigate("challenge")} className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-slate-900 to-violet-700 text-white text-xs font-black inline-flex items-center justify-center gap-2">Mission & Boss <ArrowRight className="w-3.5 h-3.5" /></button>
        </div>
        <div className="mt-4 h-2.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full bg-gradient-to-r from-amber-400 via-pink-500 to-violet-600" style={{ width: `${player.percent}%` }} /></div>
        <div className="mt-1 text-[10px] text-slate-400 flex justify-between"><span>{player.currentXp} XP trong level</span><span>{player.neededXp} XP để lên level</span></div>
      </section>

      <section className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-cyan-50 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white grid place-items-center"><MessageCircle className="w-5 h-5" /></div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-emerald-600">AI Tutor Socratic</div>
              <div className="font-black text-slate-900">Gợi ý để em tự giải, không giải thay</div>
              <div className="text-[11px] text-slate-500">{progress.tutorSessions} phiên · {progress.tutorTurns} lượt trao đổi · {progress.tutorHintCount} lượt gợi ý theo tầng</div>
            </div>
          </div>
          <button onClick={() => onNavigate("tutor")} className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-xs font-black inline-flex items-center justify-center gap-2">Mở AI Tutor <ArrowRight className="w-3.5 h-3.5" /></button>
        </div>
      </section>

      <section className="rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-50 via-white to-indigo-50 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-600 to-indigo-600 text-white grid place-items-center"><AudioLines className="w-5 h-5" /></div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-cyan-700">Math Speaking</div>
              <div className="font-black text-slate-900">Nghe · đọc biểu thức · nói bước giải</div>
              <div className="text-[11px] text-slate-500">{progress.speakingSessions} phiên · {progress.speakingPracticeCount} lượt luyện · điểm tốt nhất {progress.speakingBestScore}/100</div>
            </div>
          </div>
          <button onClick={() => onNavigate("speaking")} className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-black inline-flex items-center justify-center gap-2">Mở Math Speaking <ArrowRight className="w-3.5 h-3.5" /></button>
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-4">
        <ScoreRing value={hasAssessmentData ? progress.mathScore : null} confidence={adaptive.mathConfidence} label="Math Score" caption="Đo năng lực giải Toán từ câu chuẩn Level 2–3, có tính độ khó và mức dùng gợi ý." />
        <ScoreRing value={hasAssessmentData ? progress.mathEnglishScore : null} confidence={adaptive.mathEnglishConfidence} label="Math English Score" caption="Đo khả năng hiểu đề và diễn đạt Math English; việc dùng bản dịch/gợi ý được ghi nhận riêng." />
      </div>

      <section className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white grid place-items-center shrink-0"><BrainCircuit className="w-6 h-6" /></div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-indigo-600">Adaptive AI Engine</div>
              <span className="rounded-full bg-white border border-indigo-200 px-2.5 py-1 text-[10px] font-black text-indigo-700">{getAdaptiveModeLabel(adaptive)}</span>
            </div>
            <h3 className="font-black text-slate-900 text-lg mt-1">AI đề xuất: Level {adaptive.recommendedLevel} · English {adaptive.recommendedEnglishRatio}% · {adaptive.preferredDifficulty}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mt-2">{adaptive.reason}</p>
            <div className="mt-3 rounded-xl border border-indigo-100 bg-white/80 px-3 py-2 text-xs text-slate-700"><strong>Mục tiêu tiếp theo:</strong> {adaptive.nextGoal}</div>
            {focusLesson && <div className="mt-2 text-[11px] text-slate-500"><strong>Bài AI ưu tiên:</strong> {focusLesson.titleVi}</div>}
            <button onClick={startAdaptive} className="mt-4 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black inline-flex items-center gap-2">Học theo lộ trình AI <ArrowRight className="w-3.5 h-3.5" /></button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 min-w-[190px]">
            <div className="rounded-2xl bg-white border border-indigo-100 p-3"><Languages className="w-4 h-4 text-indigo-600" /><div className="text-lg font-black mt-1">{adaptive.recommendedEnglishRatio}%</div><div className="text-[10px] text-slate-500">English đề xuất</div></div>
            <div className="rounded-2xl bg-white border border-indigo-100 p-3"><Gauge className="w-4 h-4 text-violet-600" /><div className="text-lg font-black mt-1">{adaptive.assessmentCount}</div><div className="text-[10px] text-slate-500">lượt bằng chứng</div></div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4"><ShieldCheck className="w-5 h-5 text-emerald-600" /><h3 className="font-black text-slate-900">Tiến bộ độc lập · dữ liệu nghiên cứu</h3></div>
        <p className="text-xs text-slate-600 mb-4">Phần này ưu tiên lần làm đầu, mức hỗ trợ và bài Independent Mode; XP/streak không được xem là kết quả học tập.</p>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="rounded-2xl bg-white border border-emerald-100 p-4"><div className="text-2xl font-black text-emerald-700">{firstAttempts.length ? `${firstAttemptAccuracy}%` : "--"}</div><div className="text-xs font-bold text-slate-700">First Attempt Accuracy</div><div className="text-[10px] text-slate-400">{firstAttempts.length} lần làm đầu</div></div>
          <div className="rounded-2xl bg-white border border-amber-100 p-4"><div className="text-2xl font-black text-amber-700">{researchRows.length ? `${highSupportRate}%` : "--"}</div><div className="text-xs font-bold text-slate-700">Hint Level 3</div><div className="text-[10px] text-slate-400">Mục tiêu: giảm dần khi năng lực tăng</div></div>
          <div className="rounded-2xl bg-white border border-blue-100 p-4"><div className="text-2xl font-black text-blue-700">{independentRows.length ? `${independentAccuracy}%` : "--"}</div><div className="text-xs font-bold text-slate-700">Independent Accuracy</div><div className="text-[10px] text-slate-400">{independentRows.length} nhiệm vụ không hỗ trợ</div></div>
        </div>
      </section>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          [BookOpen, "Từ đã thuộc", progress.level1MasteredCount, "Level 1"],
          [CheckCircle2, "Độ chính xác", `${accuracy}%`, `${progress.correctAnswers}/${progress.attemptedAnswers || 0} câu TN`],
          [Lightbulb, "Đã dùng gợi ý", progress.hintUsageCount, "Theo dõi mức tự lực"],
          [Target, "Dùng bản dịch", progress.translationUsageCount, "Theo dõi phụ thuộc tiếng Việt"],
        ].map(([Icon, label, value, note]) => {
          const I = Icon as React.ComponentType<{ className?: string }>;
          return <div key={String(label)} className="rounded-2xl bg-white border border-slate-200 p-4 shadow-xs"><I className="w-4 h-4 text-indigo-600" /><div className="text-xl font-black text-slate-900 mt-2">{String(value)}</div><div className="text-xs font-bold text-slate-700">{String(label)}</div><div className="text-[10px] text-slate-400 mt-0.5">{String(note)}</div></div>;
        })}
      </div>

      {lessonRows.length > 0 && (
        <section className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4"><Sparkles className="w-5 h-5 text-indigo-600" /><h3 className="font-black text-slate-900">3 bài cần ưu tiên theo dữ liệu thật</h3></div>
          <div className="grid md:grid-cols-3 gap-3">
            {lessonRows.map((row) => {
              const lesson = STANDARD_LESSONS.find((item) => item.id === row.lessonId);
              return <div key={row.lessonId} className="rounded-2xl border border-slate-200 p-4"><div className="text-[10px] font-black text-slate-400 uppercase">{row.attempts} lượt luyện</div><div className="font-black text-sm text-slate-900 mt-1">{lesson?.titleVi || row.lessonId}</div><div className="grid grid-cols-2 gap-2 mt-3"><div className="rounded-xl bg-blue-50 p-2"><div className="text-lg font-black text-blue-700">{Math.round(row.mathScore)}</div><div className="text-[9px] text-blue-600">Math</div></div><div className="rounded-xl bg-violet-50 p-2"><div className="text-lg font-black text-violet-700">{Math.round(row.mathEnglishScore)}</div><div className="text-[9px] text-violet-600">Math English</div></div></div></div>;
            })}
          </div>
        </section>
      )}

      <section className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4"><BrainCircuit className="w-5 h-5 text-indigo-600" /><h3 className="font-black text-slate-900">Lộ trình 3 Level của em</h3></div>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            ["1", "Vocabulary → Math Phrases", `${progress.level1MasteredCount} từ đã thuộc`, "level1"],
            ["2", "Decode → Solve", `${progress.level2SolvedCount} bài đã luyện`, "level2"],
            ["3", "Solve → Explain in English", `${progress.level3GradedCount} bài đã chấm`, "level3"],
          ].map(([n, title, note, dest]) => (
            <button key={String(n)} onClick={() => onNavigate(dest as StudentDestination)} className="text-left rounded-2xl border border-slate-200 p-4 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all"><div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black grid place-items-center">{String(n)}</div><div className="font-black text-slate-900 text-sm mt-3">{String(title)}</div><div className="text-[11px] text-slate-500 mt-1">{String(note)}</div></button>
          ))}
        </div>
      </section>
    </div>
  );
};
