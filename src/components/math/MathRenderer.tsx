import React from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  inline?: boolean;
  className?: string;
}

type Token =
  | { type: 'text'; value: string }
  | { type: 'math'; value: string; display: boolean };

const stripOuterDelimiters = (input: string): string => {
  const s = input.trim();
  if (s.startsWith('$$') && s.endsWith('$$')) return s.slice(2, -2).trim();
  if (s.startsWith('$') && s.endsWith('$')) return s.slice(1, -1).trim();
  if (s.startsWith('\\[') && s.endsWith('\\]')) return s.slice(2, -2).trim();
  if (s.startsWith('\\(') && s.endsWith('\\)')) return s.slice(2, -2).trim();
  return s;
};

const normalizeLatex = (input: string): string => {
  let s = stripOuterDelimiters(input)
    .replace(/\r\n?/g, '\n')
    .replace(/\\\\([a-zA-Z]+)/g, '\\$1')
    .replace(/\\\\([{}\[\]])/g, '\\$1')
    .replace(/\u00a0/g, ' ')
    .trim();
  return s;
};

const renderKatex = (latex: string, displayMode: boolean) => {
  try {
    return katex.renderToString(normalizeLatex(latex), {
      displayMode,
      throwOnError: false,
      strict: 'ignore',
      output: 'htmlAndMathml',
      trust: false,
    });
  } catch {
    return null;
  }
};

const tokenizeMath = (text: string): Token[] => {
  const tokens: Token[] = [];
  let i = 0;
  let buffer = '';

  const pushText = () => {
    if (buffer) {
      tokens.push({ type: 'text', value: buffer });
      buffer = '';
    }
  };

  while (i < text.length) {
    if (text.startsWith('$$', i)) {
      const end = text.indexOf('$$', i + 2);
      if (end !== -1) {
        pushText();
        tokens.push({ type: 'math', value: text.slice(i + 2, end), display: true });
        i = end + 2;
        continue;
      }
    }
    if (text.startsWith('\\[', i)) {
      const end = text.indexOf('\\]', i + 2);
      if (end !== -1) {
        pushText();
        tokens.push({ type: 'math', value: text.slice(i + 2, end), display: true });
        i = end + 2;
        continue;
      }
    }
    if (text.startsWith('\\(', i)) {
      const end = text.indexOf('\\)', i + 2);
      if (end !== -1) {
        pushText();
        tokens.push({ type: 'math', value: text.slice(i + 2, end), display: false });
        i = end + 2;
        continue;
      }
    }
    if (text[i] === '$') {
      let end = i + 1;
      while (end < text.length) {
        if (text[end] === '$' && text[end - 1] !== '\\') break;
        end += 1;
      }
      if (end < text.length && text[end] === '$') {
        pushText();
        tokens.push({ type: 'math', value: text.slice(i + 1, end), display: false });
        i = end + 1;
        continue;
      }
    }
    buffer += text[i];
    i += 1;
  }
  pushText();
  return tokens;
};

const renderInlineLatex = (latex: string) => {
  const html = renderKatex(latex, false);
  return html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : <span>{latex}</span>;
};

const renderArrayAsTable = (latex: string, key: React.Key) => {
  const normalized = normalizeLatex(latex);
  const m = normalized.match(/^\\begin\{array\}\{[^}]*\}([\s\S]*)\\end\{array\}$/);
  if (!m) return null;
  const body = m[1].replace(/\\hline/g, '');
  const rows = body
    .split(/\\\\/)
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => row.split('&').map((cell) => cell.trim()));
  if (!rows.length) return null;
  return (
    <div key={key} className="my-3 overflow-x-auto">
      <table className="mx-auto border-collapse border border-slate-400 text-sm text-slate-800">
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="border border-slate-400 px-3 py-1 text-center align-middle">
                  {renderInlineLatex(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const renderCases = (latex: string, key: React.Key) => {
  const normalized = normalizeLatex(latex);
  const m = normalized.match(/^\\begin\{cases\}([\s\S]*)\\end\{cases\}$/);
  if (!m) return null;
  const rows = m[1]
    .split(/\\\\/)
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => row.split('&').map((cell) => cell.trim()));
  if (!rows.length) return null;
  return (
    <span key={key} className="inline-flex items-start align-middle px-1">
      <span className="text-3xl leading-none pr-1">&#123;</span>
      <span className="inline-flex flex-col gap-1">
        {rows.map((row, idx) => (
          <span key={idx} className="inline-flex gap-2 items-center">
            <span>{renderInlineLatex(row[0] || '')}</span>
            {row[1] ? <span>{renderInlineLatex(row[1])}</span> : null}
          </span>
        ))}
      </span>
    </span>
  );
};

const renderMathToken = (latex: string, display: boolean, key: React.Key) => {
  const normalized = normalizeLatex(latex);

  if (/^\\begin\{array\}/.test(normalized)) {
    return renderArrayAsTable(normalized, key) ?? (
      <div key={key} className="my-3 overflow-x-auto text-center" dangerouslySetInnerHTML={{ __html: renderKatex(normalized, true) || normalized }} />
    );
  }

  if (/^\\begin\{cases\}/.test(normalized)) {
    return renderCases(normalized, key) ?? (
      <span key={key} className="inline-block align-middle px-0.5" dangerouslySetInnerHTML={{ __html: renderKatex(normalized, false) || normalized }} />
    );
  }

  const html = renderKatex(normalized, display);
  if (!html) {
    return display ? <div key={key} className="my-2 overflow-x-auto text-slate-900">{normalized}</div> : <span key={key} className="text-slate-900">{normalized}</span>;
  }

  if (display) {
    return <div key={key} className="my-2 overflow-x-auto text-center" dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <span key={key} className="inline-block align-middle px-0.5" dangerouslySetInnerHTML={{ __html: html }} />;
};

const renderText = (text: string, key: React.Key) => {
  const lines = text.split('\n');
  return (
    <span key={key} className="whitespace-normal">
      {lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <br />}
          {line.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((chunk, cIdx) => {
            if (chunk.startsWith('**') && chunk.endsWith('**')) {
              return <strong key={cIdx}>{chunk.slice(2, -2)}</strong>;
            }
            if (chunk.startsWith('*') && chunk.endsWith('*')) {
              return <em key={cIdx}>{chunk.slice(1, -1)}</em>;
            }
            return <span key={cIdx}>{chunk}</span>;
          })}
        </React.Fragment>
      ))}
    </span>
  );
};

const looksLikePureMath = (content: string) => {
  const s = content.trim();
  return (
    /^(\$\$?[\s\S]+\$\$?|\\\([\s\S]+\\\)|\\\[[\s\S]+\\\])$/.test(s) ||
    /^\\begin\{(array|cases)\}/.test(s)
  );
};

export const MathRenderer: React.FC<MathRendererProps> = ({ content, inline = false, className = '' }) => {
  if (!content) return null;

  if (looksLikePureMath(content)) {
    return (
      <div className={`math-render ${inline ? 'inline' : 'block'} ${className}`}>
        {renderMathToken(content, !inline, 'pure')}
      </div>
    );
  }

  const tokens = tokenizeMath(content);
  return (
    <div className={`math-render leading-relaxed ${inline ? 'inline' : 'block'} ${className}`}>
      {tokens.map((token, idx) =>
        token.type === 'math'
          ? renderMathToken(token.value, token.display, idx)
          : renderText(token.value, idx)
      )}
    </div>
  );
};
