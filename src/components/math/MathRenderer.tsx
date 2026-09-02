import React from 'react';
import katex from 'katex';
import { normalizeLatexFractions, normalizeMathFractionsInText } from '../../lib/mathFormatting';

interface MathRendererProps {
  content: string;
  inline?: boolean;
  className?: string;
}

const MATH_BLOCK_REGEX = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g;
const UNICODE_LETTER_REGEX = /[A-Za-zÀ-ỹ]/u;

function renderLatexSafe(latex: string, isInline: boolean): string {
  try {
    const clean = normalizeLatexFractions(latex)
      .trim()
      .replace(/(?<!\\)\\\\([a-zA-Z]+)/g, '\\$1')
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .normalize('NFC');
    return katex.renderToString(clean, {
      displayMode: !isInline,
      throwOnError: false,
      strict: 'ignore',
    });
  } catch (e) {
    console.warn('KaTeX render error:', e);
    return latex;
  }
}

function normalizeMathText(text: string): string {
  return (text || '')
    .normalize('NFC')
    .replace(/\\\$/g, '$')
    .replace(/`/g, '')
    .replace(/\\\\\[([\s\S]*?)\\\\\]/g, (_, inner) => `$$${inner}$$`)
    .replace(/\\\\\(([\s\S]*?)\\\\\)/g, (_, inner) => `$${inner}$`)
    // Wrap bare array/cases/matrix environments so grouped tables render as block math.
    .replace(/(^|[^$])(\\begin\{(?:array|cases|matrix|pmatrix|bmatrix|Bmatrix|vmatrix|Vmatrix)\}[\s\S]*?\\end\{(?:array|cases|matrix|pmatrix|bmatrix|Bmatrix|vmatrix|Vmatrix)\})([^$]|$)/g,
      (_, before, body, after) => `${before}$$${body}$$${after}`)
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .trim();
}

function stripOuterMathDelimiters(text: string): string {
  const trimmed = text.trim();
  if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) return trimmed.slice(2, -2).trim();
  if (trimmed.startsWith('$') && trimmed.endsWith('$')) return trimmed.slice(1, -1).trim();
  if (trimmed.startsWith('\\[') && trimmed.endsWith('\\]')) return trimmed.slice(2, -2).trim();
  if (trimmed.startsWith('\\(') && trimmed.endsWith('\\)')) return trimmed.slice(2, -2).trim();
  return trimmed;
}

function isPureMathFormula(text: string): boolean {
  const trimmed = normalizeMathText(text);
  if (!trimmed) return false;

  // Pure math is allowed only when the WHOLE string is exactly one math token.
  // This prevents strings such as `$A$ và $B$` from being sent to KaTeX as one formula.
  const tokens = [...trimmed.matchAll(new RegExp(MATH_BLOCK_REGEX.source, 'g'))];
  if (tokens.length === 1 && tokens[0][0] === trimmed) return true;

  // Any extra character outside the math token (including punctuation such as the final dot
  // in `$M(0,2,1)$.`) means this is mixed content. Rendering the whole string with KaTeX
  // would pass the dollar signs/punctuation into the parser and produce the red KaTeX error text.
  if (tokens.length > 0) return false;

  // Bare math without delimiters: allow only compact symbolic expressions, not prose like “bằng”, “equals”, “using”.
  const looksLikeMath = /[=^_<>≤≥≠∈∉∞]|\\[a-zA-Z]+/.test(trimmed);
  if (!looksLikeMath) return false;
  const proseCheck = trimmed
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[-+]?\d+(?:[.,]\d+)?/g, ' ')
    .replace(/[\^_{}()[\]\\/+*=<>≤≥≠∈∉∞|,:;.'"`~!-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return proseCheck.length === 0 || !/[A-Za-zÀ-ỹ]{2,}/u.test(proseCheck);
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  content,
  inline = false,
  className = '',
}) => {
  if (!content) return null;

  const normalizedContent = normalizeMathFractionsInText(normalizeMathText(content));

  // IMPORTANT: tokenize delimited math FIRST. Never pass a mixed string such as
  // `$M(0,2,1)$.`, `$A$ và $B$`, or `${\\alpha}:...$` to KaTeX as one formula.
  // That was the source of the red literal-LaTeX text seen in worksheets.
  const hasDelimitedMath = MATH_BLOCK_REGEX.test(normalizedContent);
  MATH_BLOCK_REGEX.lastIndex = 0;

  if (!hasDelimitedMath && isPureMathFormula(normalizedContent)) {
    const html = renderLatexSafe(stripOuterMathDelimiters(normalizedContent), inline);
    const Tag = inline ? 'span' : 'div';
    return (
      <Tag
        className={`math-render ${inline ? 'inline-block align-middle px-0.5' : 'my-2 overflow-x-auto text-center'} ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  const parts = normalizedContent.split(MATH_BLOCK_REGEX);

  return (
    <span className={`math-render leading-relaxed ${inline ? 'inline' : 'block'} ${className}`}>
      {parts.map((part, idx) => {
        if (!part) return null;

        const isBlock = (part.startsWith('$$') && part.endsWith('$$')) || (part.startsWith('\\[') && part.endsWith('\\]'));
        const isInlineMath = (part.startsWith('$') && part.endsWith('$')) || (part.startsWith('\\(') && part.endsWith('\\)'));

        if (isBlock) {
          const latex = part.slice(2, -2).trim();
          const html = renderLatexSafe(latex, false);
          return (
            <span
              key={idx}
              className="block my-3 overflow-x-auto text-center font-serif text-teal-800"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        if (isInlineMath) {
          const latex = part.startsWith('$') ? part.slice(1, -1).trim() : part.slice(2, -2).trim();
          const html = renderLatexSafe(latex, true);
          return (
            <span
              key={idx}
              className="inline-block align-middle px-0.5 font-serif text-teal-900 font-medium"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        const lines = part.split('\n');
        return (
          <React.Fragment key={idx}>
            {lines.map((line, lIdx) => (
              <React.Fragment key={lIdx}>
                {lIdx > 0 && <br />}
                {line.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((chunk, cIdx) => {
                  if (chunk.startsWith('**') && chunk.endsWith('**')) {
                    return <strong key={cIdx} className="font-bold text-slate-900">{chunk.slice(2, -2)}</strong>;
                  }
                  if (chunk.startsWith('*') && chunk.endsWith('*')) {
                    return <em key={cIdx} className="italic text-slate-700">{chunk.slice(1, -1)}</em>;
                  }
                  return <span key={cIdx}>{chunk}</span>;
                })}
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      })}
    </span>
  );
};
