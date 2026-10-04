import React, { useState, useEffect, useMemo } from "react";
import {
  Zap,
  Clock,
  Award,
  Flame,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Volume2,
  Sparkles,
  ArrowRight,
  BookMarked,
  Layers,
} from "lucide-react";
import confetti from "canvas-confetti";
import { MathTerm, HighSchoolGrade } from "../types";

interface SpeedMathTermGameProps {
  terms: MathTerm[];
  selectedGrade: HighSchoolGrade;
  chapterTitle: string;
  onAddXP: (amount: number) => void;
  onCloseGame?: () => void;
}

interface GameQuestion {
  targetTerm: MathTerm;
  promptType: "en_to_vi" | "vi_to_en" | "def_to_term";
  questionText: string;
  subText?: string;
  options: Array<{ label: string; text: string; isCorrect: boolean }>;
}

export const SpeedMathTermGame: React.FC<SpeedMathTermGameProps> = ({
  terms,
  selectedGrade,
  chapterTitle,
  onAddXP,
  onCloseGame,
}) => {
  const [gameState, setGameState] = useState<"ready" | "playing" | "gameover">("ready");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [gameHistory, setGameHistory] = useState<
    Array<{ term: MathTerm; isCorrect: boolean; userAns: string; correctAns: string }>
  >([]);

  // Generate 10 randomized speed questions from the terms
  const questions: GameQuestion[] = useMemo(() => {
    if (!terms || terms.length === 0) return [];

    const shuffled = [...terms].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(10, shuffled.length));

    return selected.map((term) => {
      const mode = Math.random() > 0.5 ? "en_to_vi" : "def_to_term";

      // Pick 3 distractors
      const otherTerms = terms.filter((t) => t.id !== term.id);
      const distractors = [...otherTerms]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      let questionText = "";
      let subText = "";
      let correctOptionText = "";
      const rawOptions: Array<{ text: string; isCorrect: boolean }> = [];

      if (mode === "en_to_vi") {
        questionText = term.term;
        subText = term.phoneticIpa || term.phonetic || "";
        correctOptionText = term.vietnameseMeaning || term.definitionVi || "";
        rawOptions.push({ text: correctOptionText, isCorrect: true });
        distractors.forEach((d) => {
          rawOptions.push({
            text: d.vietnameseMeaning || d.definitionVi || d.term,
            isCorrect: false,
          });
        });
      } else {
        questionText = term.definitionEn || `Khái niệm: ${term.vietnameseMeaning}`;
        subText = `Toán Lớp ${selectedGrade}`;
        correctOptionText = term.term;
        rawOptions.push({ text: correctOptionText, isCorrect: true });
        distractors.forEach((d) => {
          rawOptions.push({
            text: d.term,
            isCorrect: false,
          });
        });
      }

      // Shuffle options and assign A, B, C, D
      const shuffledOptions = rawOptions
        .sort(() => 0.5 - Math.random())
        .map((opt, i) => ({
          label: ["A", "B", "C", "D"][i],
          text: opt.text,
          isCorrect: opt.isCorrect,
        }));

      return {
        targetTerm: term,
        promptType: mode,
        questionText,
        subText,
        options: shuffledOptions,
      };
    });
  }, [terms, selectedGrade, gameState === "ready"]);

  const currentQ = questions[currentIndex];

  // Timer countdown
  useEffect(() => {
    if (gameState !== "playing" || isAnswerRevealed) return;

    if (timeLeft <= 0) {
      handleTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, timeLeft, isAnswerRevealed]);

  const handleStartGame = () => {
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCurrentIndex(0);
    setTimeLeft(10);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
    setGameHistory([]);
    setGameState("playing");
  };

  const handleTimeout = () => {
    if (!currentQ) return;
    setIsAnswerRevealed(true);
    setSelectedAnswer("TIMEOUT");
    setStreak(0);

    const correctOpt = currentQ.options.find((o) => o.isCorrect);
    setGameHistory((prev) => [
      ...prev,
      {
        term: currentQ.targetTerm,
        isCorrect: false,
        userAns: "Hết thời gian",
        correctAns: correctOpt?.text || "",
      },
    ]);

    setTimeout(() => {
      goToNextQuestion();
    }, 1200);
  };

  const handleSelectOption = (label: string, isCorrect: boolean) => {
    if (isAnswerRevealed || gameState !== "playing") return;

    setIsAnswerRevealed(true);
    setSelectedAnswer(label);

    const correctOpt = currentQ.options.find((o) => o.isCorrect);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      // Score bonus based on speed and streak
      const speedBonus = timeLeft * 10;
      const streakMultiplier = Math.min(3, 1 + Math.floor(newStreak / 2) * 0.5);
      const pointsEarned = Math.round((100 + speedBonus) * streakMultiplier);

      setScore((prev) => prev + pointsEarned);

      if (newStreak >= 3) {
        try {
          confetti({
            particleCount: 25,
            spread: 45,
            origin: { y: 0.7 },
          });
        } catch (e) {}
      }
    } else {
      setStreak(0);
    }

    setGameHistory((prev) => [
      ...prev,
      {
        term: currentQ.targetTerm,
        isCorrect,
        userAns: currentQ.options.find((o) => o.label === label)?.text || "",
        correctAns: correctOpt?.text || "",
      },
    ]);

    setTimeout(() => {
      goToNextQuestion();
    }, 1100);
  };

  const goToNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setTimeLeft(10);
      setSelectedAnswer(null);
      setIsAnswerRevealed(false);
    } else {
      // Game finished
      setGameState("gameover");
      const xpEarned = Math.round(score / 10);
      onAddXP(Math.max(20, xpEarned));
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {}
    }
  };

  const speakTerm = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Screen 1: READY / INTRO */}
      {gameState === "ready" && (
        <div className="text-center py-8 space-y-6 max-w-lg mx-auto relative z-10">
          <div className="w-20 h-20 bg-linear-to-tr from-amber-500 to-amber-400 rounded-3xl mx-auto flex items-center justify-center shadow-lg shadow-amber-500/30">
            <Zap className="w-10 h-10 text-slate-950 fill-slate-950" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60">
              Minigame Phản xạ Tốc độ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Speed Math Term Rush
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {chapterTitle} • Khối Lớp {selectedGrade}
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/80 text-xs text-slate-300 space-y-2 text-left">
            <div className="flex items-center gap-2 text-amber-300 font-bold">
              <Flame className="w-4 h-4" />
              <span>Quy tắc thử thách:</span>
            </div>
            <p>• <b>10 giây</b> cho mỗi câu hỏi thuật ngữ toán học song ngữ.</p>
            <p>• Trả lời càng nhanh, điểm thưởng tốc độ càng cao.</p>
            <p>• Chuỗi liên tiếp (Streak) tăng hệ số nhân điểm lên <b>x2, x3</b> và nhận hàng loạt điểm XP!</p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            {onCloseGame && (
              <button
                type="button"
                onClick={onCloseGame}
                className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer"
              >
                Quay lại
              </button>
            )}
            <button
              type="button"
              onClick={handleStartGame}
              className="px-8 py-3.5 rounded-2xl bg-linear-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-sm font-black shadow-lg shadow-amber-500/25 transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>BẮT ĐẦU THỬ THÁCH</span>
            </button>
          </div>
        </div>
      )}

      {/* Screen 2: PLAYING */}
      {gameState === "playing" && currentQ && (
        <div className="space-y-6 relative z-10">
          {/* Top Bar: Progress, Timer, Streak & Score */}
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-400">
                Câu <b className="text-white">{currentIndex + 1}</b>/{questions.length}
              </span>
              {streak > 1 && (
                <div className="flex items-center gap-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-2.5 py-1 rounded-full text-xs font-black animate-pulse">
                  <Flame className="w-3.5 h-3.5 fill-amber-400" />
                  <span>Streak {streak}x</span>
                </div>
              )}
            </div>

            {/* Timer circle/bar */}
            <div className="flex items-center gap-2">
              <Clock className={`w-4 h-4 ${timeLeft <= 3 ? "text-rose-400 animate-bounce" : "text-amber-400"}`} />
              <span className={`text-base font-black font-mono ${timeLeft <= 3 ? "text-rose-400" : "text-amber-300"}`}>
                {timeLeft}s
              </span>
            </div>

            {/* Score */}
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Điểm số</span>
              <span className="text-base font-black text-emerald-400 font-mono">
                {score}
              </span>
            </div>
          </div>

          {/* Time progress line */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                timeLeft <= 3 ? "bg-rose-500" : "bg-linear-to-r from-amber-500 to-emerald-400"
              }`}
              style={{ width: `${(timeLeft / 10) * 100}%` }}
            />
          </div>

          {/* Term Question Card */}
          <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 text-center border border-slate-700/80 shadow-inner relative">
            {currentQ.promptType === "en_to_vi" && (
              <button
                type="button"
                onClick={() => speakTerm(currentQ.questionText)}
                className="absolute top-4 right-4 p-2 bg-slate-700/60 hover:bg-slate-700 text-slate-300 rounded-full transition-colors"
                title="Phát âm tiếng Anh"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            )}

            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-2">
              {currentQ.promptType === "en_to_vi" ? "Chọn nghĩa tiếng Việt đúng:" : "Chọn thuật ngữ tiếng Anh tương ứng:"}
            </span>

            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {currentQ.questionText}
            </h3>

            {currentQ.subText && (
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
                {currentQ.subText}
              </p>
            )}
          </div>

          {/* 4 Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentQ.options.map((option) => {
              const isSelected = selectedAnswer === option.label;
              let btnClass = "bg-slate-800 hover:bg-slate-700/90 border-slate-700 text-slate-100";

              if (isAnswerRevealed) {
                if (option.isCorrect) {
                  btnClass = "bg-emerald-600/30 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500";
                } else if (isSelected && !option.isCorrect) {
                  btnClass = "bg-rose-600/30 border-rose-500 text-rose-200 ring-2 ring-rose-500";
                } else {
                  btnClass = "bg-slate-800/40 border-slate-800 text-slate-500 opacity-60";
                }
              }

              return (
                <button
                  key={option.label}
                  type="button"
                  disabled={isAnswerRevealed}
                  onClick={() => handleSelectOption(option.label, option.isCorrect)}
                  className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-left font-medium text-xs sm:text-sm cursor-pointer ${btnClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-slate-900/60 font-black text-xs flex items-center justify-center shrink-0 border border-white/10">
                      {option.label}
                    </span>
                    <span className="leading-snug">{option.text}</span>
                  </div>
                  {isAnswerRevealed && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                  )}
                  {isAnswerRevealed && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Screen 3: GAME OVER / REPORT */}
      {gameState === "gameover" && (
        <div className="space-y-6 max-w-xl mx-auto py-4 relative z-10">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-3xl mx-auto flex items-center justify-center">
              <Award className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-black text-white">HOÀN THÀNH THỬ THÁCH!</h2>
            <p className="text-xs text-slate-400">
              Bạn đã hoàn thành 10 câu hỏi phản xạ thuật ngữ toán học
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Tổng Điểm</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono">{score}</span>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Max Streak</span>
              <span className="text-xl sm:text-2xl font-black text-rose-400 font-mono">{maxStreak}x</span>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Thưởng XP</span>
              <span className="text-xl sm:text-2xl font-black text-indigo-400 font-mono">+{Math.max(20, Math.round(score / 10))} XP</span>
            </div>
          </div>

          {/* Answer Review List */}
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            <span className="text-xs font-bold text-slate-300 block">Chi tiết các từ vựng vừa đối đầu:</span>
            {gameHistory.map((item, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                  item.isCorrect
                    ? "bg-emerald-950/30 border-emerald-800/50 text-emerald-200"
                    : "bg-rose-950/30 border-rose-800/50 text-rose-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.isCorrect ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  )}
                  <span className="font-bold">{item.term.term}</span>
                  <span className="text-[11px] text-slate-400">({item.term.vietnameseMeaning})</span>
                </div>
                {!item.isCorrect && (
                  <span className="text-[10px] text-amber-300 font-medium">
                    Đáp án đúng: {item.correctAns}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleStartGame}
              className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Chơi lại ván mới</span>
            </button>
            {onCloseGame && (
              <button
                type="button"
                onClick={onCloseGame}
                className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-all cursor-pointer"
              >
                Quay lại học từ vựng
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
