import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ROOT = process.cwd();
const JSROOT = '/tmp/mbjs';
const banks = [
  {
    file: 'src/lib/realSourceQuestionBank.ts',
    varName: 'REAL_SOURCE_QUESTION_BANK',
    data: require(`${JSROOT}/lib/realSourceQuestionBank.js`).REAL_SOURCE_QUESTION_BANK,
  },
  {
    file: 'src/lib/sourceSupplementQuestionBank.ts',
    varName: 'SOURCE_SUPPLEMENT_QUESTION_BANK',
    data: require(`${JSROOT}/lib/sourceSupplementQuestionBank.js`).SOURCE_SUPPLEMENT_QUESTION_BANK,
  },
];

function mapOutsideMath(input, fn) {
  if (!input) return input || '';
  const parts = input.split(/(\$[^$]*\$)/g);
  for (let i = 0; i < parts.length; i += 2) parts[i] = fn(parts[i]);
  return parts.join('');
}

function normalizeSolution(input, typeId='') {
  let s = input || '';
  if (!s) return s;
  // Normalize reliable OCR / LaTeX relation tokens outside existing math delimiters.
  s = mapOutsideMath(s, (p) => p
    .replace(/\\Leftrightarrow/g, '⇔')
    .replace(/\\Rightarrow/g, '⇒')
    .replace(/\\Leftrightarrow([A-Za-z])/g, '⇔ $1')
    .replace(/\\Rightarrow([A-Za-z])/g, '⇒ $1')
    .replace(/\\le([a-z])/g, '≤ $1')
    .replace(/\\ge([a-z])/g, '≥ $1')
    .replace(/\\ne([a-z])/g, '≠ $1')
    .replace(/\\notin(?![A-Za-z])/g, '∉')
    .replace(/\\infty(?![A-Za-z])/g, '∞')
    .replace(/\\ge(?![A-Za-z])/g, '≥')
    .replace(/\\le(?![A-Za-z])/g, '≤')
    .replace(/\\ne(?![A-Za-z])/g, '≠')
    .replace(/\\pm(?![A-Za-z])/g, '±')
    .replace(/\\in(?![A-Za-z])/g, '∈')
    .replace(/⎯⎯\s*→/g, '→')
    .replace(/=/g, '=')
  );

  // Sequence notation cleanup only in the Grade 11 sequence/AP/GP lessons.
  // Do NOT apply to geometry: tokens such as a 4 can mean a/4 rather than a_4.
  if (/type-kntt-11-(05|06|07)-/.test(typeId)) {
    s = mapOutsideMath(s, (p) => {
      let out = p;
      out = out.replace(/(?<![A-Za-z0-9_$])([uUvVsS])\s*_?\s*n\s*\+\s*1(?![A-Za-z0-9_])/g, (_m,a) => `$${a.toLowerCase()}_{n+1}$`);
      out = out.replace(/(?<![A-Za-z0-9_$])([uUvVsS])\s*_?\s*n\s*-\s*1(?![A-Za-z0-9_])/g, (_m,a) => `$${a.toLowerCase()}_{n-1}$`);
      out = out.replace(/(?<![A-Za-z0-9_$])([uUvVsS])\s*_?\s*n(?![A-Za-z0-9_])/g, (_m,a) => `$${a.toLowerCase()}_n$`);
      out = out.replace(/(?<![A-Za-z0-9_$])([uUvVsS])\s*_?\s*(\d{1,4})(?!\d)/g, (_m,a,n) => `$${a.toLowerCase()}_{${n}}$`);
      return out;
    });

    // A dangling OCR membership "n ∈ *" is unambiguously N* in these lessons.
    s = mapOutsideMath(s, (p) => p
      .replace(/\bn\s*∈\s*[.*∗]/g, 'n ∈ ℕ*')
      .replace(/\bn\s*∈\s*(?=[,.;\n]|$)/g, 'n ∈ ℕ*')
      .replace(/∀\s*n\s*∈\s*[.*∗]/g, '∀n ∈ ℕ*')
    );
  }

  // General text hygiene. Keep line structure because many source explanations use steps.
  s = s
    .replace(/[\uE000-\uF8FF]/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]+([,.;:!?])/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return s;
}

function rewriteBank({file,varName,data}) {
  const full = path.join(ROOT,file);
  const text = fs.readFileSync(full,'utf8');
  const marker = `export const ${varName}: Question[] = `;
  const start = text.indexOf(marker);
  if (start < 0) throw new Error(`marker not found ${file}`);
  const arrStart = start + marker.length;
  const arrEnd = text.lastIndexOf('];');
  if (arrEnd < arrStart) throw new Error(`array end not found ${file}`);
  let changed = 0;
  const out = data.map((q) => {
    const before = q.solution_vi || '';
    const after = normalizeSolution(before, q.type_id || '');
    if (after !== before) changed++;
    return {...q, solution_vi: after};
  });
  const serialized = JSON.stringify(out,null,2);
  fs.writeFileSync(full, text.slice(0,arrStart) + serialized + text.slice(arrEnd+1), 'utf8');
  return {file, total:out.length, changed};
}

const results = banks.map(rewriteBank);
console.log(JSON.stringify(results,null,2));
