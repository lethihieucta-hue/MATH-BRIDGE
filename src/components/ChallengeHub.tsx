import React, { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Crown, Flame, Gift, Lock, RotateCcw, ShieldCheck, Sparkles, Swords, Trophy, Zap } from "lucide-react";
import type { HighSchoolGrade, UserProgress } from "../types";
import {
  STANDARD_STUDENT_QUESTIONS,
  STANDARD_LESSONS,
  type StandardStudentQuestion,
} from "../data/standardQuestionBank";
import { RichMathText } from "./MathRenderer";
import { getLessonVocabularyTerms } from "../data/lessonVocabulary";
import { MATH_TERMS } from "../data/mathTerms";
import { StandardQuestionMedia } from "./StandardQuestionMedia";
import {
  DAILY_MISSION_TASKS,
  getBadges,
  getMissionProgress,
  getPlayerLevel,
} from "../services/gamificationService";

interface ChallengeHubProps {
  selectedGrade: HighSchoolGrade;
  selectedLessonId?: string;
  progress: UserProgress;
  onNavigate: (destination: "level1" | "level2" | "level3") => void;
  onClaimMission: (taskId: string, rewardXp: number) => void;
  onBossComplete: (score: number) => void;
}

type BossRound =
  | {
      kind: "mcq";
      title: string;
      subtitle: string;
      prompt: string;
      options: Array<{ key: string; text: string }>;
      correctKey: string;
      source?: StandardStudentQuestion;
    }
  | {
      kind: "short";
      title: string;
      subtitle: string;
      prompt: string;
      expected: string;
      source?: StandardStudentQuestion;
    };

const shuffle = <T,>(items: T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const normalizeAnswer = (value: string) =>
  value
    .toLowerCase()
    .replace(/\$|\\\(|\\\)|\\\[|\\\]/g, "")
    .replace(/\\text\{([^}]*)\}/g, "$1")
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .replace(/[;。]/g, "")
    .trim();

const isShortCorrect = (student: string, expected: string) => {
  const a = normalizeAnswer(student);
  const b = normalizeAnswer(expected);
  if (!a || !b) return false;
  if (a === b || a.includes(b) || b.includes(a)) return true;
  const numPattern = /-?\d+(?:\.\d+)?/g;
  const numsA = a.match(numPattern) || [];
  const numsB = b.match(numPattern) || [];
  return numsA.length === 1 && numsB.length === 1 && Math.abs(Number(numsA[0]) - Number(numsB[0])) < 1e-8;
};

const uniqueTexts = (values: string[]) => Array.from(new Set(values.map((v) => v.trim()).filter(Boolean)));

function pickQuestion(pool: StandardStudentQuestion[], predicate: (q: StandardStudentQuestion) => boolean, preferredLessonId?: string) {
  const preferred = pool.filter((q) => q.lessonId === preferredLessonId && predicate(q));
  const candidates = preferred.length ? preferred : pool.filter(predicate);
  return candidates[Math.floor(Math.random() * Math.max(1, candidates.length))];
}

function buildBossRounds(grade: HighSchoolGrade, preferredLessonId?: string): BossRound[] {
  const gradePool = STANDARD_STUDENT_QUESTIONS.filter((q) => q.grade === grade);
  const preferredVocabTerms = preferredLessonId ? getLessonVocabularyTerms(preferredLessonId, 12) : [];
  const fallbackLesson = STANDARD_LESSONS.find((lesson) => lesson.grade === grade && getLessonVocabularyTerms(lesson.id, 12).length > 0);
  const vocabTerms = preferredVocabTerms.length ? preferredVocabTerms : (fallbackLesson ? getLessonVocabularyTerms(fallbackLesson.id, 12) : []);
  const vocab = vocabTerms[Math.floor(Math.random() * Math.max(1, vocabTerms.length))];
  const allMeanings = uniqueTexts(MATH_TERMS.filter((term) => term.gradeLevel === grade).map((term) => term.vietnamese));
  const vocabOptions = vocab
    ? shuffle(uniqueTexts([vocab.vietnamese, ...shuffle(allMeanings.filter((x) => x !== vocab.vietnamese)).slice(0, 3)]))
    : ["đạo hàm", "vectơ", "xác suất", "tập hợp"];

  const readingSource = pickQuestion(gradePool, (q) => !!q.questionEn && !!q.questionVi, preferredLessonId) || gradePool[0];
  const readingDistractors = readingSource
    ? shuffle(uniqueTexts(gradePool.filter((q) => q.id !== readingSource.id).map((q) => q.questionVi))).slice(0, 3)
    : [];
  const readingOptions = readingSource
    ? shuffle(uniqueTexts([readingSource.questionVi, ...readingDistractors])).map((text, index) => ({ key: String.fromCharCode(65 + index), text }))
    : [];
  const readingCorrectKey = readingOptions.find((o) => o.text === readingSource?.questionVi)?.key || "A";

  const tn = pickQuestion(gradePool, (q) => q.format === "TN" && q.options.length >= 4, preferredLessonId) || gradePool.find((q) => q.format === "TN");
  const tln = pickQuestion(gradePool, (q) => q.format === "TLN" && !!q.correctAnswer, preferredLessonId) || gradePool.find((q) => q.format === "TLN");
  const hardTn = pickQuestion(gradePool, (q) => q.format === "TN" && q.difficulty === "HARD" && q.options.length >= 4, preferredLessonId)
    || pickQuestion(gradePool, (q) => q.format === "TN" && q.options.length >= 4, preferredLessonId);

  const rounds: BossRound[] = [];

  if (vocab) {
    const options = vocabOptions.map((text, index) => ({ key: String.fromCharCode(65 + index), text }));
    rounds.push({
      kind: "mcq",
      title: "Gate 1 · Vocabulary",
      subtitle: "Nhận diện thuật ngữ",
      prompt: `What is the Vietnamese meaning of “${vocab.term}”?`,
      options,
      correctKey: options.find((o) => o.text === vocab.vietnamese)?.key || "A",
    });
  }

  if (readingSource && readingOptions.length >= 2) {
    rounds.push({
      kind: "mcq",
      title: "Gate 2 · Decode",
      subtitle: "Đọc hiểu yêu cầu bằng tiếng Anh",
      prompt: `Which Vietnamese statement matches this problem?\n\n${readingSource.questionEn}`,
      options: readingOptions,
      correctKey: readingCorrectKey,
      source: readingSource,
    });
  }

  if (tn) {
    rounds.push({
      kind: "mcq",
      title: "Gate 3 · Math Solve",
      subtitle: "Giải câu trắc nghiệm chuẩn",
      prompt: tn.questionEn,
      options: tn.options.map((o) => ({ key: o.key, text: o.en || o.vi })),
      correctKey: tn.correctAnswer.trim().toUpperCase(),
      source: tn,
    });
  }

  if (tln) {
    rounds.push({
      kind: "short",
      title: "Gate 4 · Short Answer",
      subtitle: "Tự tính, không có phương án gợi ý",
      prompt: tln.questionEn,
      expected: tln.correctAnswer,
      source: tln,
    });
  }

  if (hardTn) {
    rounds.push({
      kind: "mcq",
      title: "Gate 5 · Final Boss",
      subtitle: "Câu cuối không bản dịch, không gợi ý",
      prompt: hardTn.questionEn,
      options: hardTn.options.map((o) => ({ key: o.key, text: o.en || o.vi })),
      correctKey: hardTn.correctAnswer.trim().toUpperCase(),
      source: hardTn,
    });
  }

  return rounds.slice(0, 5);
}

export const ChallengeHub: React.FC<ChallengeHubProps> = ({
  selectedGrade,
  selectedLessonId,
  progress,
  onNavigate,
  onClaimMission,
  onBossComplete,
}) => {
  const player = getPlayerLevel(progress.xp);
  const badges = getBadges(progress);
  const unlockedBadges = badges.filter((b) => b.unlocked);
  const [rounds, setRounds] = useState<BossRound[]>([]);
  const [roundIndex, setRoundIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentRound = rounds[roundIndex];
  const missionStats = useMemo(
    () => DAILY_MISSION_TASKS.map((task) => ({ ...task, value: getMissionProgress(progress, task.id) })),
    [progress]
  );

  const startBoss = () => {
    const next = buildBossRounds(selectedGrade, selectedLessonId);
    setRounds(next);
    setRoundIndex(0);
    setAnswer("");
    setSubmitted(false);
    setLastCorrect(false);
    setScore(0);
    setFinished(false);
  };

  const submitBossAnswer = () => {
    if (!currentRound || !answer.trim() || submitted) return;
    const correct = currentRound.kind === "mcq"
      ? answer.trim().toUpperCase() === currentRound.correctKey.toUpperCase()
      : isShortCorrect(answer, currentRound.expected);
    setSubmitted(true);
    setLastCorrect(correct);
    if (correct) setScore((s) => s + 20);
  };

  const nextRound = () => {
    if (!submitted) return;
    const finalScore = score;
    if (roundIndex >= rounds.length - 1) {
      setFinished(true);
      onBossComplete(finalScore);
      return;
    }
    setRoundIndex((i) => i + 1);
    setAnswer("");
    setSubmitted(false);
    setLastCorrect(false);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-r from-slate-950 via-indigo-950 to-violet-950 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-60 h-60 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.18em] text-violet-200">Gamified Learning</div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black">Daily Mission & Boss Challenge</h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">Mỗi ngày có mục tiêu ngắn, XP thật, huy hiệu và một Boss 5 cửa. Nội dung Boss chỉ lấy từ ngân hàng câu hỏi chuẩn đã có — không sinh đề Toán mới bằng AI.</p>
          </div>
          <div className="min-w-[280px] rounded-2xl bg-white/10 border border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase font-black tracking-wider text-violet-200">Player Level</div>
                <div className="text-xl font-black">Lv.{player.level} · {player.title}</div>
              </div>
              <Crown className="w-7 h-7 text-amber-300" />
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-black/20 overflow-hidden"><div className="h-full bg-gradient-to-r from-amber-300 to-pink-400" style={{ width: `${player.percent}%` }} /></div>
            <div className="mt-1 text-[10px] text-slate-300 flex justify-between"><span>{player.currentXp} XP</span><span>{player.neededXp} XP / level</span></div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2"><Flame className="w-5 h-5 text-orange-500" /><h3 className="font-black text-slate-900">Daily Mission hôm nay</h3></div>
          <div className="text-[11px] font-bold text-slate-500">🔥 {progress.streakDays} ngày · {progress.xp} XP</div>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {missionStats.map((task) => {
            const pct = Math.min(100, Math.round((task.value / task.target) * 100));
            const done = task.value >= task.target;
            const claimed = progress.dailyMission.claimedTaskIds.includes(task.id);
            return (
              <div key={task.id} className={`rounded-2xl border p-4 ${claimed ? "border-emerald-200 bg-emerald-50/60" : done ? "border-amber-300 bg-amber-50/60" : "border-slate-200 bg-white"}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-black text-sm text-slate-900">{task.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{task.description}</div>
                  </div>
                  <span className="text-[10px] font-black rounded-full bg-indigo-50 text-indigo-700 px-2 py-1">+{task.rewardXp} XP</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: `${pct}%` }} /></div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold text-slate-500">{Math.min(task.value, task.target)}/{task.target}</span>
                  {claimed ? (
                    <span className="text-[10px] font-black text-emerald-700 inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Đã nhận</span>
                  ) : done ? (
                    <button onClick={() => onClaimMission(task.id, task.rewardXp)} className="px-3 py-1.5 rounded-lg bg-amber-500 text-white text-[10px] font-black inline-flex items-center gap-1"><Gift className="w-3.5 h-3.5" /> Nhận thưởng</button>
                  ) : (
                    <button onClick={() => onNavigate(task.destination)} className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-black inline-flex items-center gap-1">Đi làm nhiệm vụ <ArrowRight className="w-3 h-3" /></button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2"><Trophy className="w-5 h-5 text-amber-500" /><h3 className="font-black text-slate-900">Math English Badges</h3></div>
          <div className="text-[11px] font-bold text-slate-500">{unlockedBadges.length}/{badges.length} đã mở khóa</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {badges.map((badge) => (
            <div key={badge.id} className={`rounded-2xl border p-4 ${badge.unlocked ? "border-amber-200 bg-gradient-to-br from-amber-50 to-white" : "border-slate-200 bg-slate-50/70 opacity-70"}`}>
              <div className="flex items-start justify-between"><div className="text-2xl">{badge.icon}</div>{badge.unlocked ? <ShieldCheck className="w-4 h-4 text-emerald-600" /> : <Lock className="w-4 h-4 text-slate-400" />}</div>
              <div className="mt-2 font-black text-sm text-slate-900">{badge.name}</div>
              <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">{badge.description}</div>
              <div className="mt-2 text-[10px] font-black text-indigo-600">{badge.progressText}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-rose-50 via-white to-violet-50 border border-rose-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-rose-600"><Swords className="w-4 h-4" /> Boss Challenge · 5 Gates</div>
            <h3 className="text-xl font-black text-slate-900 mt-1">Vượt Boss bằng kiến thức thật</h3>
            <p className="text-xs text-slate-600 mt-1">Ưu tiên câu của bài em đang học; nếu bài thiếu một định dạng, hệ thống lấy câu cùng khối. Thắng khi đạt từ 80/100.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 min-w-[280px]">
            <div className="rounded-xl bg-white border border-slate-200 p-2 text-center"><div className="font-black text-slate-900">{progress.bossProgress.attempts}</div><div className="text-[9px] text-slate-500">Lượt</div></div>
            <div className="rounded-xl bg-white border border-slate-200 p-2 text-center"><div className="font-black text-emerald-700">{progress.bossProgress.wins}</div><div className="text-[9px] text-slate-500">Thắng</div></div>
            <div className="rounded-xl bg-white border border-slate-200 p-2 text-center"><div className="font-black text-violet-700">{progress.bossProgress.bestScore}</div><div className="text-[9px] text-slate-500">Best</div></div>
          </div>
        </div>

        {!rounds.length ? (
          <div className="rounded-2xl border border-dashed border-rose-300 bg-white/70 p-7 text-center">
            <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 grid place-items-center mx-auto"><Swords className="w-7 h-7" /></div>
            <div className="font-black text-slate-900 mt-3">Sẵn sàng chưa?</div>
            <div className="text-xs text-slate-500 mt-1">5 cửa · 20 điểm/cửa · không cần API AI</div>
            <button onClick={startBoss} className="mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-violet-600 text-white text-xs font-black shadow-md">Bắt đầu Boss</button>
          </div>
        ) : finished ? (
          <div className="rounded-2xl bg-white border border-slate-200 p-7 text-center">
            <div className="text-4xl">{score >= 80 ? "🏆" : "🛡️"}</div>
            <div className="text-3xl font-black text-slate-900 mt-2">{score}/100</div>
            <div className={`font-black mt-1 ${score >= 80 ? "text-emerald-600" : "text-amber-600"}`}>{score >= 80 ? "Boss defeated!" : "Chưa hạ Boss — luyện thêm rồi quay lại."}</div>
            <button onClick={startBoss} className="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-black inline-flex items-center gap-2"><RotateCcw className="w-3.5 h-3.5" /> Thử Boss khác</button>
          </div>
        ) : currentRound ? (
          <div className="rounded-2xl bg-white border border-slate-200 p-5">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div><div className="text-[10px] font-black uppercase tracking-wider text-rose-600">{currentRound.title}</div><div className="font-black text-slate-900">{currentRound.subtitle}</div></div>
              <div className="text-[10px] font-black rounded-full bg-slate-100 px-2 py-1">{roundIndex + 1}/{rounds.length} · {score} pts</div>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-800 whitespace-pre-wrap"><RichMathText text={currentRound.prompt} /></div>
            {currentRound.source?.assets?.length ? <div className="mt-3"><StandardQuestionMedia assets={currentRound.source.assets} language="en" /></div> : null}

            {currentRound.kind === "mcq" ? (
              <div className="mt-4 grid gap-2">
                {currentRound.options.map((option) => (
                  <button key={option.key} disabled={submitted} onClick={() => setAnswer(option.key)} className={`text-left rounded-xl border px-4 py-3 text-xs ${answer === option.key ? "border-indigo-500 bg-indigo-50" : "border-slate-200 bg-white"}`}>
                    <span className="inline-grid place-items-center w-7 h-7 rounded-lg bg-slate-100 font-black mr-2">{option.key}</span><RichMathText text={option.text} />
                  </button>
                ))}
              </div>
            ) : (
              <input disabled={submitted} value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Nhập đáp án ngắn..." className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
            )}

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="text-xs font-bold">{submitted ? (lastCorrect ? <span className="text-emerald-600">✓ Chính xác · +20 điểm</span> : <span className="text-rose-600">✕ Chưa đúng · 0 điểm</span>) : <span className="text-slate-400">Không bản dịch · không gợi ý trong Boss</span>}</div>
              {!submitted ? (
                <button disabled={!answer.trim()} onClick={submitBossAnswer} className="px-4 py-2 rounded-xl bg-indigo-600 disabled:bg-slate-300 text-white text-xs font-black">Khóa đáp án</button>
              ) : (
                <button onClick={nextRound} className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-black inline-flex items-center gap-2">{roundIndex >= rounds.length - 1 ? "Xem kết quả" : "Cửa tiếp theo"}<ArrowRight className="w-3.5 h-3.5" /></button>
              )}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
};
