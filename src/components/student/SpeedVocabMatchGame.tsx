import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { useAppStore } from '../../lib/store';
import { MathRenderer } from '../math/MathRenderer';
import { speakEnglishWord } from '../../lib/audio';
import {
  Sparkles,
  Timer,
  Award,
  Zap,
  RotateCcw,
  CheckCircle2,
  Trophy,
  Flame,
  Volume2,
  ArrowRight,
} from 'lucide-react';

interface VocabPair {
  id: string;
  en: string;
  vi: string;
  formula?: string;
}

const SAMPLE_PAIRS: VocabPair[] = [
  { id: '1', en: 'quadratic function', vi: 'hàm số bậc hai', formula: 'y = ax^2 + bx + c' },
  { id: '2', en: 'vertex', vi: 'tọa độ đỉnh parabol', formula: 'I(-b/2a, -\\Delta/4a)' },
  { id: '3', en: 'axis of symmetry', vi: 'trục đối xứng', formula: 'x = -b/(2a)' },
  { id: '4', en: 'domain', vi: 'tập xác định', formula: 'D \\subseteq \\mathbb{R}' },
  { id: '5', en: 'range', vi: 'tập giá trị', formula: 'y \\in [y_{min}, +\\infty)' },
  { id: '6', en: 'derivative', vi: 'đạo hàm', formula: "f'(x)" },
  { id: '7', en: 'monotonicity', vi: 'tính đơn điệu', formula: "f'(x) \\ge 0" },
  { id: '8', en: 'maximum value', vi: 'giá trị lớn nhất', formula: '\\max f(x)' },
];

interface CardItem {
  cardId: string;
  pairId: string;
  text: string;
  type: 'EN' | 'VI';
  formula?: string;
  isMatched: boolean;
}

export const SpeedVocabMatchGame: React.FC = () => {
  const { showNotification, user } = useAppStore();
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [cards, setCards] = useState<CardItem[]>([]);
  const [selectedCards, setSelectedCards] = useState<CardItem[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  // Initialize and shuffle cards
  const initGame = useCallback(() => {
    const activePairs = SAMPLE_PAIRS.slice(0, 6);
    const cardList: CardItem[] = [];

    activePairs.forEach((p) => {
      cardList.push({
        cardId: `en-${p.id}`,
        pairId: p.id,
        text: p.en,
        type: 'EN',
        formula: p.formula,
        isMatched: false,
      });
      cardList.push({
        cardId: `vi-${p.id}`,
        pairId: p.id,
        text: p.vi,
        type: 'VI',
        isMatched: false,
      });
    });

    // Shuffle
    setCards(cardList.sort(() => Math.random() - 0.5));
    setTimeLeft(60);
    setScore(0);
    setStreak(0);
    setSelectedCards([]);
    setIsGameOver(false);
    setIsPlaying(true);
  }, []);

  // Timer loop
  useEffect(() => {
    if (!isPlaying || isGameOver) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, isGameOver]);

  const endGame = () => {
    setIsPlaying(false);
    setIsGameOver(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleCardClick = (card: CardItem) => {
    if (!isPlaying || card.isMatched || selectedCards.some((c) => c.cardId === card.cardId)) {
      return;
    }

    if (card.type === 'EN') {
      speakEnglishWord(card.text);
    }

    const newSelected = [...selectedCards, card];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      if (first.pairId === second.pairId && first.type !== second.type) {
        // MATCH!
        const bonus = (streak + 1) * 100;
        setScore((prev) => prev + bonus);
        setStreak((prev) => prev + 1);

        setCards((prev) =>
          prev.map((c) =>
            c.pairId === first.pairId ? { ...c, isMatched: true } : c
          )
        );

        setSelectedCards([]);

        // Check if all matched
        setTimeout(() => {
          setCards((curr) => {
            const allMatched = curr.every((c) => c.isMatched);
            if (allMatched) {
              endGame();
              showNotification('🎉 Tuyệt đỉnh! Bạn đã ghép đúng toàn bộ từ vựng!');
            }
            return curr;
          });
        }, 300);
      } else {
        // NO MATCH
        setStreak(0);
        setTimeout(() => {
          setSelectedCards([]);
        }, 600);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-24 md:pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="bg-teal-500/20 text-teal-300 text-xs px-3 py-1 rounded-full font-bold border border-teal-400/30">
              Minigame Ôn Tập
            </span>
            <span className="bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full font-bold border border-amber-400/30 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" /> Combo {streak}x
            </span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Speed Math Vocab Match (Thử Thách Nối Từ 60s)
          </h1>
          <p className="text-xs text-teal-200">
            Nhanh tay ghép cặp Thuật ngữ Toán tiếng Anh với Nghĩa tiếng Việt & Công thức tương ứng
          </p>
        </div>

        {/* Live Score & Time */}
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-3 px-5 rounded-2xl border border-white/15">
          <div className="text-center">
            <p className="text-[10px] uppercase font-bold text-teal-200">Thời gian</p>
            <p className={`text-2xl font-black ${timeLeft <= 10 ? 'text-rose-400 animate-ping' : 'text-white'}`}>
              {timeLeft}s
            </p>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <p className="text-[10px] uppercase font-bold text-teal-200">Điểm XP</p>
            <p className="text-2xl font-black text-amber-300">{score}</p>
          </div>
        </div>
      </div>

      {/* Game State Control */}
      {!isPlaying && !isGameOver && (
        <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-2xs space-y-5">
          <div className="w-16 h-16 rounded-3xl bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center mx-auto shadow-inner">
            <Trophy className="w-8 h-8 text-amber-500" />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="font-extrabold text-xl text-slate-900">
              Sẵn Sàng Thử Thách Trí Nhớ Toán Học?
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Bạn có 60 giây để nối chính xác tất cả các thuật ngữ toán học song ngữ. Mỗi chuỗi trả lời đúng liên tiếp (Streak) sẽ nhân đôi điểm thưởng XP!
            </p>
          </div>
          <button
            onClick={initGame}
            className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-black text-sm rounded-2xl shadow-lg shadow-teal-600/30 transition transform hover:scale-105"
          >
            Bắt Đầu Chơi Ngay (Start Game)
          </button>
        </div>
      )}

      {/* Playing Board Grid */}
      {isPlaying && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {cards.map((card) => {
            const isSelected = selectedCards.some((c) => c.cardId === card.cardId);
            return (
              <button
                key={card.cardId}
                onClick={() => handleCardClick(card)}
                disabled={card.isMatched}
                className={`p-4 min-h-[90px] rounded-2xl border text-center flex flex-col items-center justify-center gap-1.5 transition-all duration-150 ${
                  card.isMatched
                    ? 'bg-emerald-50 border-emerald-300 opacity-40 cursor-default'
                    : isSelected
                    ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-500 text-teal-950 font-bold scale-95 shadow-inner'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-teal-400 hover:bg-slate-50 shadow-2xs'
                }`}
              >
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    card.type === 'EN'
                      ? 'bg-teal-100 text-teal-900'
                      : 'bg-purple-100 text-purple-900'
                  }`}
                >
                  {card.type === 'EN' ? 'English Term' : 'Tiếng Việt'}
                </span>

                <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                  {card.text}
                </span>

                {card.formula && (
                  <span className="text-[11px] font-mono text-teal-700">
                    <MathRenderer content={card.formula} inline />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Game Over Modal */}
      {isGameOver && (
        <div className="bg-white rounded-3xl p-8 text-center border border-slate-200 shadow-2xs space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-3xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto shadow-inner">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-extrabold text-2xl text-slate-900">
              Hoàn Thành Lượt Chơi!
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Bạn đã thể hiện xuất sắc khả năng nhận diện thuật ngữ Toán tiếng Anh
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200">
              <p className="text-[10px] font-bold uppercase text-teal-800">Tổng Điểm</p>
              <p className="text-2xl font-black text-teal-950">{score} XP</p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <p className="text-[10px] font-bold uppercase text-amber-800">MEI Boost</p>
              <p className="text-2xl font-black text-amber-950">+2.5% V</p>
            </div>
          </div>

          <button
            onClick={initGame}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-black text-sm rounded-2xl shadow-lg transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Chơi Lại Lượt Mới</span>
          </button>
        </div>
      )}
    </div>
  );
};
