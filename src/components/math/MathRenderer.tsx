import React from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  inline?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  content,
  inline = false,
  className = '',
}) => {
  if (!content) return null;

  // Safe KaTeX renderer helper
  const renderLatexSafe = (latex: string, isInline: boolean) => {
    try {
      return katex.renderToString(latex.trim(), {
        displayMode: !isInline,
        throwOnError: false,
      });
    } catch (e) {
      console.warn('KaTeX render error:', e);
      return latex;
    }
  };

  // Helper to determine if a string is a PURE math formula (no English/Vietnamese prose)
  const isPureMathFormula = (text: string): boolean => {
    const trimmed = text.trim();

    // Already wrapped in delimiters?
    if (
      (trimmed.startsWith('$') && trimmed.endsWith('$')) ||
      (trimmed.startsWith('$$') && trimmed.endsWith('$$')) ||
      (trimmed.startsWith('\\[') && trimmed.endsWith('\\]')) ||
      (trimmed.startsWith('\\(') && trimmed.endsWith('\\)'))
    ) {
      return true;
    }

    // List of common English/Vietnamese sentence indicator words that signal prose, NOT a pure formula
    const proseWordsRegex = /\b(Find|Given|Determine|Calculate|What|How|If|Then|Because|Therefore|Thus|Let|Cho|Tìm|Tính|Xác định|Hãy|Khi|Vì|Vậy|hàm số|đồ thị|parabol|tọa độ|đỉnh|giá trị|lớn nhất|nhỏ nhất|tập xác định|tập giá trị|phương trình|nghiệm|đồng biến|nghịch biến|đạo hàm|bài toán|ví dụ|the|of|is|are|and|or|in|on|at|to|with|for|by)\b/i;

    if (proseWordsRegex.test(trimmed)) {
      return false; // Contains sentence words -> must be treated as mixed prose
    }

    // Contains LaTeX commands (e.g. \frac, \Delta, \left, \right, \neq, \sqrt, \alpha, etc.)
    if (/\\[a-zA-Z]+/.test(trimmed)) {
      return true;
    }

    // Mathematical equation or expression patterns without words
    // e.g. "y = ax^2 + bx + c", "x = -b / (2a)", "f(x) = x^2 - 4x + 3", "(2, -1)", "D = [0, +\\infty)"
    if (
      /^[a-zA-Z_0-9\s^+\-*/=><≤≥≠∈∉∪∩∅∞()[\],{}|:;.\\]+$/.test(trimmed) &&
      (/[=^_\\]|\/|\\le|\\ge|\\in|\([0-9\-+,\s]+\)/.test(trimmed) || /^[a-zA-Z]\([a-zA-Z0-9\s]+\)/.test(trimmed))
    ) {
      return true;
    }

    return false;
  };

  // If the entire content is a pure math formula
  if (isPureMathFormula(content)) {
    let cleanLatex = content.trim();
    if (cleanLatex.startsWith('$$') && cleanLatex.endsWith('$$')) {
      cleanLatex = cleanLatex.slice(2, -2).trim();
    } else if (cleanLatex.startsWith('$') && cleanLatex.endsWith('$')) {
      cleanLatex = cleanLatex.slice(1, -1).trim();
    } else if (cleanLatex.startsWith('\\[') && cleanLatex.endsWith('\\]')) {
      cleanLatex = cleanLatex.slice(2, -2).trim();
    } else if (cleanLatex.startsWith('\\(') && cleanLatex.endsWith('\\)')) {
      cleanLatex = cleanLatex.slice(2, -2).trim();
    }

    const html = renderLatexSafe(cleanLatex, inline);
    if (inline) {
      return (
        <span
          className={`math-render inline-block align-middle px-0.5 ${className}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }
    return (
      <div
        className={`math-render my-2 overflow-x-auto text-center ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  // Mixed text processor: splits into Markdown / Text tokens and Math tokens
  const renderMixedContent = (text: string) => {
    // 1. Normalize LaTeX delimiters: \[...\] to $$...$$ and \(...\) to $...$
    let normalized = text
      .replace(/\\\[([\s\S]*?)\\\]/g, '$$$$$1$$$$')
      .replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');

    // 2. Auto-wrap common inline math expressions that lack $ delimiters in English/Vietnamese sentences
    // e.g. "parabola y = x^2 - 4x + 3" or "function f(x) = 2x + 3" or "interval [0, 5]" or "point I(2, -1)"
    // Only if not already inside $...$
    if (!normalized.includes('$')) {
      normalized = normalized
        // Wrap equations like y = ax^2 + bx + c or f(x) = ...
        .replace(/\b([yxfg]\s*=\s*[-+0-9a-zA-Z_\\^/{}\s()*.]+)/g, (match) => {
          // If ends with a sentence period/comma, keep the punctuation outside $...$
          const trimmed = match.trim();
          if (trimmed.endsWith('.')) {
            return `$${trimmed.slice(0, -1).trim()}$.`;
          }
          if (trimmed.endsWith(',')) {
            return `$${trimmed.slice(0, -1).trim()}$,`;
          }
          return `$${trimmed}$`;
        })
        // Wrap coordinate points like I(-b/2a, -\Delta/4a) or (2, -1)
        .replace(/\b([IABCDEFMO]\s*\([-+0-9a-zA-Z_\\^/{}\s,*.]+\))/g, '$$$1$$')
        // Wrap isolated LaTeX commands like \sqrt{...} or \frac{...}{...}
        .replace(/(\\[a-zA-Z]+(?:\{[^}]*\})*)/g, '$$$1$$');
    }

    // 3. Tokenize by $$...$$ (block math) and $...$ (inline math) safely
    const regex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g;
    const parts = normalized.split(regex);

    return parts.map((part, idx) => {
      if (!part) return null;

      // Block Math $$...$$
      if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) {
        const latex = part.slice(2, -2).trim();
        const html = renderLatexSafe(latex, false);
        return (
          <div
            key={idx}
            className="my-3 overflow-x-auto text-center font-serif text-teal-800"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      }

      // Inline Math $...$
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
        const latex = part.slice(1, -1).trim();
        const html = renderLatexSafe(latex, true);
        return (
          <span
            key={idx}
            className="inline-block align-middle px-0.5 font-serif text-teal-900 font-medium"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      }

      // Plain Text & Markdown formatting (render linebreaks, bold **text**, italics, and normal spacing)
      // Process simple markdown inside text: **bold**, *italic*, \n
      const lines = part.split('\n');
      return (
        <span key={idx} className="whitespace-normal">
          {lines.map((line, lIdx) => (
            <React.Fragment key={lIdx}>
              {lIdx > 0 && <br />}
              {line.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((chunk, cIdx) => {
                if (chunk.startsWith('**') && chunk.endsWith('**')) {
                  return (
                    <strong key={cIdx} className="font-bold text-slate-900">
                      {chunk.slice(2, -2)}
                    </strong>
                  );
                }
                if (chunk.startsWith('*') && chunk.endsWith('*')) {
                  return (
                    <em key={cIdx} className="italic text-slate-700">
                      {chunk.slice(1, -1)}
                    </em>
                  );
                }
                return <span key={cIdx}>{chunk}</span>;
              })}
            </React.Fragment>
          ))}
        </span>
      );
    });
  };

  return (
    <div className={`math-render leading-relaxed ${inline ? 'inline' : 'block'} ${className}`}>
      {renderMixedContent(content)}
    </div>
  );
};
