const MATH_TOKEN_REGEX = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g;

const BOUNDARY_COMMANDS = [
  '\\cdot', '\\times', '\\div', '\\pm', '\\mp', '\\implies', '\\iff',
  '\\Rightarrow', '\\Leftrightarrow', '\\le', '\\ge', '\\ne', '\\approx',
];
const BOUNDARY_CHARS = new Set('+=<>,;&:'.split(''));
const TEXT_COMMANDS = ['\\text', '\\mathrm', '\\textrm', '\\texttt', '\\textsf', '\\operatorname'];
const UNIT_SLASH_REGEX = /(?<![A-Za-z])(?:km|cm|mm|mg|kg|m|g|L|l|N|J|W)(?:\^\{?\d+\}?|\^\d+)?\/(?:h|min|s|L|l|m|cm|mm|C)(?![A-Za-z])/g;
const BARE_ATOM = String.raw`(?:-?\d+(?:[.,]\d+)?|[a-z]|[A-Z][A-Z']{0,5})`;
const BARE_FRACTION_REGEX = new RegExp(`(?<![\\p{L}\\p{N}_./^\\\\])(${BARE_ATOM})/(${BARE_ATOM})(?![\\p{L}\\p{N}_'/^\\\\])`, 'gu');
const UNIT_PAIRS = new Set(['m/s', 'm/h', 'cm/s', 'mm/s', 'L/s', 'N/C', 'g/L', 'J/s', 'W/m', 'VND/m', 'USD/m']);

function findMatchingBrace(value: string, openPos: number): number {
  let depth = 0;
  for (let i = openPos; i < value.length; i += 1) {
    if (value[i] === '{') depth += 1;
    else if (value[i] === '}') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function protectNonFractionSlashes(latex: string): { text: string; protectedValues: string[] } {
  const protectedValues: string[] = [];
  const stash = (value: string) => {
    const token = `§§MBF${protectedValues.length}§§`;
    protectedValues.push(value);
    return token;
  };

  let text = '';
  let i = 0;
  while (i < latex.length) {
    const command = TEXT_COMMANDS.find((cmd) => latex.startsWith(`${cmd}{`, i));
    if (command) {
      const openPos = i + command.length;
      const closePos = findMatchingBrace(latex, openPos);
      if (closePos >= 0) {
        text += stash(latex.slice(i, closePos + 1));
        i = closePos + 1;
        continue;
      }
    }
    text += latex[i];
    i += 1;
  }
  text = text.replace(UNIT_SLASH_REGEX, (unit) => stash(unit));
  return { text, protectedValues };
}

function restoreProtected(text: string, protectedValues: string[]): string {
  return protectedValues.reduce((result, value, index) => result.replaceAll(`§§MBF${index}§§`, value), text);
}

function boundaryCommandLengthAt(text: string, position: number): number {
  if (text[position] !== '\\') return 0;
  const command = BOUNDARY_COMMANDS.find((candidate) => text.startsWith(candidate, position));
  return command?.length || 0;
}

function leftOperandStart(text: string, slash: number): number {
  let i = slash - 1;
  while (i >= 0 && /\s/.test(text[i])) i -= 1;
  let paren = 0;
  let bracket = 0;
  let brace = 0;
  let inBars = false;

  while (i >= 0) {
    const ch = text[i];
    if (ch === '|' && paren === 0 && bracket === 0 && brace === 0) inBars = !inBars;
    if (ch === ')') paren += 1;
    else if (ch === ']') bracket += 1;
    else if (ch === '}') brace += 1;
    else if (ch === '(') {
      if (paren > 0) paren -= 1;
      else return i + 1;
    } else if (ch === '[') {
      if (bracket > 0) bracket -= 1;
      else return i + 1;
    } else if (ch === '{') {
      if (brace > 0) brace -= 1;
      else return i + 1;
    }

    if (paren === 0 && bracket === 0 && brace === 0 && !inBars) {
      if (BOUNDARY_CHARS.has(ch) || ch === '-') return i + 1;
      if (ch === '\\') {
        const commandLength = boundaryCommandLengthAt(text, i);
        if (commandLength) return i + commandLength;
      }
    }
    i -= 1;
  }
  return 0;
}

function rightOperandEnd(text: string, slash: number): number {
  let i = slash + 1;
  while (i < text.length && /\s/.test(text[i])) i += 1;
  let paren = 0;
  let bracket = 0;
  let brace = 0;
  let inBars = false;

  while (i < text.length) {
    const ch = text[i];
    if (ch === '|' && paren === 0 && bracket === 0 && brace === 0) inBars = !inBars;
    if (ch === '(') paren += 1;
    else if (ch === '[') bracket += 1;
    else if (ch === '{') brace += 1;
    else if (ch === ')') {
      if (paren > 0) paren -= 1;
      else return i;
    } else if (ch === ']') {
      if (bracket > 0) bracket -= 1;
      else return i;
    } else if (ch === '}') {
      if (brace > 0) brace -= 1;
      else return i;
    }

    if (paren === 0 && bracket === 0 && brace === 0 && !inBars) {
      if (BOUNDARY_CHARS.has(ch) || ch === '+' || ch === '-') return i;
      if (ch === '\\' && boundaryCommandLengthAt(text, i)) return i;
    }
    i += 1;
  }
  return text.length;
}

function stripBalancedOuterParens(value: string): string {
  const trimmed = value.trim();
  if (!(trimmed.startsWith('(') && trimmed.endsWith(')'))) return trimmed;
  let depth = 0;
  for (let i = 0; i < trimmed.length; i += 1) {
    if (trimmed[i] === '(') depth += 1;
    else if (trimmed[i] === ')') {
      depth -= 1;
      if (depth === 0 && i !== trimmed.length - 1) return trimmed;
    }
  }
  return depth === 0 ? trimmed.slice(1, -1).trim() : trimmed;
}

/** Convert slash-style mathematical division to a stacked display fraction. Units such as km/h and m/s are preserved. */
export function normalizeLatexFractions(latex: string): string {
  if (!latex || !latex.includes('/')) return latex || '';
  const protectedResult = protectNonFractionSlashes(latex);
  let text = protectedResult.text;
  let cursor = 0;

  for (let iteration = 0; iteration < 100; iteration += 1) {
    const slash = text.indexOf('/', cursor);
    if (slash < 0) break;
    if ((text[slash + 1] === '/') || (slash > 0 && (text[slash - 1] === '/' || text[slash - 1] === '\\'))) {
      cursor = slash + 1;
      continue;
    }

    const start = leftOperandStart(text, slash);
    const end = rightOperandEnd(text, slash);
    const numerator = stripBalancedOuterParens(text.slice(start, slash));
    const denominator = stripBalancedOuterParens(text.slice(slash + 1, end));
    if (!numerator || !denominator || numerator.includes('§§MBF') || denominator.includes('§§MBF')) {
      cursor = slash + 1;
      continue;
    }

    const replacement = `\\dfrac{${numerator}}{${denominator}}`;
    text = `${text.slice(0, start)}${replacement}${text.slice(end)}`;
    cursor = start + replacement.length;
  }

  return restoreProtected(text, protectedResult.protectedValues);
}

function looksLikeCalendarDate(text: string, offset: number, numerator: string, denominator: string): boolean {
  if (!/^\d+$/.test(numerator) || !/^\d+$/.test(denominator)) return false;
  const day = Number(numerator);
  const month = Number(denominator);
  if (!(day >= 1 && day <= 31 && month >= 1 && month <= 12)) return false;

  const slashStart = offset;
  const after = text.slice(slashStart + numerator.length + 1 + denominator.length);
  // dd/mm/yyyy or dd/mm/yy
  if (/^\/\d{2,4}(?!\d)/.test(after)) return true;

  const before = text.slice(Math.max(0, slashStart - 48), slashStart).toLowerCase();
  if (/(?:ngày|ngay|lễ|le|dịp|dip|date)\s+(?:[^.!?]{0,40})$/.test(before)) return true;
  return false;
}

function wrapBareSimpleFractions(text: string): string {
  return text.replace(BARE_FRACTION_REGEX, (match, numerator: string, denominator: string, offset: number) => {
    if (UNIT_PAIRS.has(`${numerator}/${denominator}`)) return match;
    if (looksLikeCalendarDate(text, offset, numerator, denominator)) return match;
    return `$\\dfrac{${numerator}}{${denominator}}$`;
  });
}


/** Normalize both existing LaTeX math spans and safe bare fractions embedded in prose. */
export function normalizeMathFractionsInText(value: string): string {
  const raw = value || '';
  if (!raw.includes('/')) return raw;
  const source = raw;

  return source.split(MATH_TOKEN_REGEX).map((part) => {
    if (!part) return '';
    const isDisplay = (part.startsWith('$$') && part.endsWith('$$')) || (part.startsWith('\\[') && part.endsWith('\\]'));
    const isInline = (part.startsWith('$') && part.endsWith('$')) || (part.startsWith('\\(') && part.endsWith('\\)'));
    if (isDisplay) {
      const inner = part.slice(2, -2);
      return `${part.slice(0, 2)}${normalizeLatexFractions(inner)}${part.slice(-2)}`;
    }
    if (isInline) {
      const delimiterLength = part.startsWith('$') ? 1 : 2;
      const inner = part.slice(delimiterLength, -delimiterLength);
      return `${part.slice(0, delimiterLength)}${normalizeLatexFractions(inner)}${part.slice(-delimiterLength)}`;
    }
    return wrapBareSimpleFractions(part);
  }).join('');
}
