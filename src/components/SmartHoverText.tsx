import React, { useState } from "react";
import { Volume2, Sparkles, BookOpen, AlertCircle, X } from "lucide-react";
import { MATH_TERMS } from "../data/mathTerms";
import { MathTerm } from "../types";
import { MathRenderer, RichMathText, MATH_BLOCK_REGEX, normalizeMathText } from "./MathRenderer";

interface SmartHoverTextProps {
  text: string;
  className?: string;
  onTermSelect?: (term: MathTerm) => void;
}

export const SmartHoverText: React.FC<SmartHoverTextProps> = ({
  text,
  className = "",
  onTermSelect,
}) => {
  const [activeTerm, setActiveTerm] = useState<MathTerm | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  // Helper to pronounce English word
  const speakWord = (word: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Find math terms matching in text
  // Sort terms by length descending to match compound terms first (e.g., "rate of change", "at least", "perpendicular bisector")
  const sortedTerms = [...MATH_TERMS].sort((a, b) => b.term.length - a.term.length);

  // Parse text into tokens
  const renderTokens = () => {
    // Use the same audited tokenizer as the Teacher app. Do not auto-wrap mixed prose.
    const processed = normalizeMathText(text);
    const mathSplit = processed.split(new RegExp(MATH_BLOCK_REGEX.source, "g"));

    return mathSplit.map((segment, segIdx) => {
      if (!segment) return null;

      if ((segment.startsWith("$$") && segment.endsWith("$$")) || (segment.startsWith("\\[") && segment.endsWith("\\]"))) {
        return <MathRenderer key={segIdx} math={segment} block={true} />;
      }
      if ((segment.startsWith("$") && segment.endsWith("$") && segment.length > 2) ||
          (segment.startsWith("\\(") && segment.endsWith("\\)"))) {
        return <MathRenderer key={segIdx} math={segment} block={false} />;
      }

      // For non-math text, tokenize and look for matching math terms
      const regexPattern = new RegExp(
        `\\b(${sortedTerms.map((t) => t.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`,
        "gi"
      );

      const parts = segment.split(regexPattern);

      return (
        <span key={segIdx}>
          {parts.map((part, pIdx) => {
            const matched = sortedTerms.find(
              (t) => t.term.toLowerCase() === part.toLowerCase()
            );

            if (matched) {
              return (
                <button
                  key={pIdx}
                  type="button"
                  id={`smart-term-${matched.id}-${segIdx}-${pIdx}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    setTooltipPos({
                      x: Math.min(window.innerWidth - 320, Math.max(16, rect.left)),
                      y: rect.bottom + window.scrollY + 8,
                    });
                    setActiveTerm(matched);
                    if (onTermSelect) onTermSelect(matched);
                  }}
                  className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded text-indigo-700 bg-indigo-50 border border-indigo-200/80 font-medium hover:bg-indigo-100 hover:border-indigo-300 transition-colors cursor-pointer text-inherit underline decoration-indigo-300 decoration-wavy underline-offset-4"
                  title={`Click to view Dual-Coding: ${matched.vietnamese}`}
                >
                  {part}
                  <span className="ml-1 text-[10px] bg-indigo-200/70 text-indigo-800 px-1 rounded-full font-mono">
                    EN-VI
                  </span>
                </button>
              );
            }
            return <span key={pIdx}>{part}</span>;
          })}
        </span>
      );
    });
  };

  return (
    <div className={`relative inline whitespace-pre-wrap ${className}`}>
      {renderTokens()}

      {/* Floating Smart Hover Dual-Coding Card */}
      {activeTerm && tooltipPos && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px]"
            onClick={() => setActiveTerm(null)}
          />
          <div
            id="dual-coding-tooltip"
            style={{
              top: `${tooltipPos.y}px`,
              left: `${tooltipPos.x}px`,
            }}
            className="fixed z-50 w-80 max-w-[92vw] bg-white rounded-xl shadow-2xl border border-indigo-100 p-4 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-gray-100 pb-2.5 mb-2.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-base capitalize">
                    {activeTerm.term}
                  </span>
                  <button
                    type="button"
                    id="speak-term-btn"
                    onClick={() => speakWord(activeTerm.term)}
                    className="p-1 rounded-md text-indigo-600 hover:bg-indigo-50 transition-colors"
                    title="Phát âm tiếng Anh"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  {activeTerm.phonetic && (
                    <span className="text-xs text-gray-500 font-mono">
                      {activeTerm.phonetic}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                    🇻🇳 {activeTerm.vietnamese}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                    Stage {activeTerm.stageLevel}
                  </span>
                </div>
              </div>
              <button
                type="button"
                id="close-term-card-btn"
                onClick={() => setActiveTerm(null)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Formula notation if available */}
            {activeTerm.mathSymbol && (
              <div className="mb-2.5 px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800">
                <MathRenderer math={activeTerm.mathSymbol} />
              </div>
            )}

            {/* Definitions */}
            <div className="space-y-2 text-xs text-gray-700">
              <div>
                <span className="font-semibold text-gray-900 block mb-0.5">
                  Định nghĩa Toán học:
                </span>
                <p className="text-gray-600 leading-relaxed">
                  {activeTerm.definitionVi}
                </p>
                <p className="text-gray-500 italic mt-0.5 text-[11px]">
                  EN: {activeTerm.definitionEn}
                </p>
              </div>

              {/* False friend / Common pitfall */}
              {activeTerm.falseFriendPitfall && (
                <div className="bg-amber-50 border border-amber-200/80 rounded-lg p-2 text-amber-900">
                  <div className="flex items-center gap-1 font-semibold text-[11px] text-amber-800 mb-0.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    Lưu ý bẫy ngôn ngữ / False Friends:
                  </div>
                  <p className="text-[11px] leading-normal">
                    {activeTerm.falseFriendPitfall}
                  </p>
                </div>
              )}

              {/* Example */}
              <div className="bg-indigo-50/60 rounded-lg p-2 border border-indigo-100">
                <span className="font-semibold text-indigo-950 text-[11px] block mb-0.5">
                  Ví dụ trong đề thi:
                </span>
                <p className="text-indigo-900 font-medium text-[11px]">
                  <RichMathText text={activeTerm.exampleSentenceEn} />
                </p>
                <p className="text-indigo-700 text-[10px] mt-0.5">
                  <RichMathText text={activeTerm.exampleSentenceVi} />
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
