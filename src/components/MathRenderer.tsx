import React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

type RichToken =
  | { type: "text"; value: string }
  | { type: "inline-math"; value: string }
  | { type: "block-math"; value: string };

const MATH_ENV = "array|cases|matrix|pmatrix|bmatrix|Bmatrix|vmatrix|Vmatrix|aligned|alignedat|gathered";

/**
 * IMPORTANT V2.2.3:
 * - No capturing group: String.split() with a capturing regex was one source of
 *   duplicated/misclassified content in older Student builds.
 * - Question prose is NEVER classified as math. Only explicit delimiters or a
 *   complete bare supported LaTeX environment become math tokens.
 */
export const MATH_BLOCK_REGEX = new RegExp(
  `\\$\\$[\\s\\S]*?\\$\\$|\\$[^$\\n]*?\\$|\\\\\\[[\\s\\S]*?\\\\\\]|\\\\\\([\\s\\S]*?\\\\\\)|\\\\begin\\{(?:${MATH_ENV})\\}[\\s\\S]*?\\\\end\\{(?:${MATH_ENV})\\}`,
  "g"
);

const ARRAY_ENV_REGEX = /\\begin\{array\}(?:\{[^}]*\})?[\s\S]*?\\end\{array\}/;

function cleanLatex(latex: string): string {
  return (latex || "")
    .trim()
    // Imported content may contain a duplicated slash before a command.
    .replace(/(?<!\\)\\\\([a-zA-Z]+)/g, "\\$1")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .normalize("NFC");
}

function renderLatexSafe(latex: string, isInline: boolean): string {
  try {
    return katex.renderToString(cleanLatex(latex), {
      displayMode: !isInline,
      throwOnError: false,
      strict: "ignore",
      output: "htmlAndMathml",
    });
  } catch (error) {
    console.warn("KaTeX render error:", error);
    return "";
  }
}

/** Normalize import artefacts but never delete ordinary prose spaces. */
export function normalizeMathText(text: string): string {
  return (text || "")
    .normalize("NFC")
    .replace(/\r\n?/g, "\n")
    .replace(/\\\$/g, "$")
    .replace(/`/g, "")
    .replace(/\\\\\[/g, "\\[")
    .replace(/\\\\\]/g, "\\]")
    .replace(/\\\\\(/g, "\\(")
    .replace(/\\\\\)/g, "\\)")
    .replace(/[ \t]+/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .trim();
}

function stripOuterMathDelimiters(text: string): string {
  const trimmed = text.trim();
  if (trimmed.startsWith("$$") && trimmed.endsWith("$$")) return trimmed.slice(2, -2).trim();
  if (trimmed.startsWith("$") && trimmed.endsWith("$") && !trimmed.startsWith("$$")) return trimmed.slice(1, -1).trim();
  if (trimmed.startsWith("\\[") && trimmed.endsWith("\\]")) return trimmed.slice(2, -2).trim();
  if (trimmed.startsWith("\\(") && trimmed.endsWith("\\)")) return trimmed.slice(2, -2).trim();
  return trimmed;
}

/**
 * Tokenize a complete sentence deterministically. There is deliberately no
 * "is the whole sentence math?" shortcut here. This guarantees that normal
 * English/Vietnamese words can never be passed to KaTeX and lose their spaces.
 */
export function tokenizeRichMathText(input: string): RichToken[] {
  const text = normalizeMathText(input);
  if (!text) return [];

  const regex = new RegExp(MATH_BLOCK_REGEX.source, "g");
  const tokens: RichToken[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > cursor) {
      tokens.push({ type: "text", value: text.slice(cursor, match.index) });
    }

    const value = match[0];
    const trimmed = value.trim();
    const isBlock =
      (trimmed.startsWith("$$") && trimmed.endsWith("$$")) ||
      (trimmed.startsWith("\\[") && trimmed.endsWith("\\]")) ||
      /^\\begin\{(?:array|cases|matrix|pmatrix|bmatrix|Bmatrix|vmatrix|Vmatrix|aligned|alignedat|gathered)\}/.test(trimmed);

    tokens.push({ type: isBlock ? "block-math" : "inline-math", value });
    cursor = match.index + value.length;
  }

  if (cursor < text.length) tokens.push({ type: "text", value: text.slice(cursor) });
  if (!tokens.length) tokens.push({ type: "text", value: text });
  return tokens;
}

function stripTextCommand(cell: string): string | null {
  const match = cell.trim().match(/^\\text\{([\s\S]*)\}$/);
  return match ? match[1] : null;
}

function splitLatexRows(body: string): string[] {
  const rows: string[] = [];
  let current = "";
  let i = 0;

  while (i < body.length) {
    // LaTeX row separator is two consecutive backslashes.
    if (body[i] === "\\" && body[i + 1] === "\\") {
      if (current.trim()) rows.push(current.trim());
      current = "";
      i += 2;
      // A row separator is often immediately followed by \hline.
      if (body.slice(i).startsWith("\\hline")) i += "\\hline".length;
      continue;
    }
    current += body[i];
    i += 1;
  }
  if (current.trim()) rows.push(current.trim());
  return rows;
}

function splitLatexCells(row: string): string[] {
  const cells: string[] = [];
  let current = "";
  let depth = 0;

  for (let i = 0; i < row.length; i += 1) {
    const ch = row[i];
    if (ch === "{") depth += 1;
    if (ch === "}") depth = Math.max(0, depth - 1);
    if (ch === "&" && depth === 0 && row[i - 1] !== "\\") {
      cells.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  cells.push(current.trim());
  return cells;
}

/** Render grouped-data arrays as real HTML tables. */
const LatexArrayTable: React.FC<{ latex: string }> = ({ latex }) => {
  const clean = stripOuterMathDelimiters(latex);
  const bodyMatch = clean.match(/\\begin\{array\}(?:\{[^}]*\})?([\s\S]*?)\\end\{array\}/);
  if (!bodyMatch) return null;

  const body = bodyMatch[1].replace(/\\hline/g, "").trim();
  const rows = splitLatexRows(body).map(splitLatexCells).filter((row) => row.length > 0);
  if (!rows.length) return null;

  return (
    <span className="block my-3 max-w-full overflow-x-auto font-sans not-italic tracking-normal">
      <table className="mx-auto border-collapse text-sm bg-white rounded-lg overflow-hidden">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const plainText = stripTextCommand(cell);
                const headerLike = rowIndex === 0 || cellIndex === 0;
                return (
                  <td
                    key={cellIndex}
                    className={`border border-slate-400 px-3 py-1.5 text-center align-middle whitespace-nowrap ${headerLike ? "font-semibold" : "font-normal"} text-slate-800 font-sans not-italic tracking-normal`}
                  >
                    {plainText !== null ? (
                      <span className="font-sans not-italic tracking-normal">{plainText}</span>
                    ) : (
                      <MathRenderer math={`$${cell}$`} />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </span>
  );
};

export const MathRenderer: React.FC<MathRendererProps> = ({ math, block = false, className = "" }) => {
  if (!math) return null;
  const normalized = normalizeMathText(math);
  const latex = stripOuterMathDelimiters(normalized);

  if (ARRAY_ENV_REGEX.test(latex)) return <LatexArrayTable latex={latex} />;

  const html = renderLatexSafe(latex, !block);
  if (!html) {
    return <span className={`font-sans not-italic tracking-normal ${className}`}>{latex}</span>;
  }

  return (
    <span
      className={`${block ? "block my-3 max-w-full overflow-x-auto text-center" : "inline-block align-middle px-0.5"} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

/**
 * Renderer for a complete question/solution. Plain words remain plain DOM text;
 * only explicit math tokens are sent to MathRenderer/KaTeX.
 */
export const RichMathText: React.FC<{ text: string; className?: string; block?: boolean }> = ({
  text,
  className = "",
  block = false,
}) => {
  if (!text) return null;
  const tokens = tokenizeRichMathText(text);

  return (
    <span className={`${block ? "block" : "inline"} font-sans not-italic tracking-normal leading-relaxed whitespace-pre-wrap ${className}`}>
      {tokens.map((token, index) => {
        if (token.type === "block-math") return <MathRenderer key={index} math={token.value} block />;
        if (token.type === "inline-math") return <MathRenderer key={index} math={token.value} />;
        return (
          <span key={index} className="font-sans not-italic tracking-normal whitespace-pre-wrap">
            {token.value}
          </span>
        );
      })}
    </span>
  );
};
