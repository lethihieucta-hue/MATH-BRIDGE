/**
 * Gắn nhãn rào cản L/C/M cho toàn bộ ngân hàng câu hỏi của AI Math Bridge Teacher.
 * Chạy: npx tsx scripts/build-barrier-tags.ts  → ghi src/data/barrierTags.json
 *
 * Quy tắc (barrier-tags-1.0) – mỗi câu có 1–3 nhãn:
 *  L (Ngôn ngữ): đề tiếng Anh chứa ≥ 3 thuật ngữ Toán chuyên ngành, hoặc ≥ 2 thuật ngữ trong đề dài ≥ 12 từ.
 *  C (Đọc hiểu): đề dài (≥ 22 từ tiếng Anh), có bối cảnh thực tế, có hình/bảng, câu Đúng/Sai (4 mệnh đề),
 *     hoặc có ≥ 2 điều kiện/ràng buộc trong câu chữ.
 *  M (Suy luận Toán): câu mức độ Vận dụng (MEDIUM/HARD) có lời giải ≥ 2 bước, câu trả lời ngắn có lời giải ≥ 2 bước,
 *     hoặc câu chứa yêu cầu tìm tham số, GTLN/GTNN, chứng minh, tối ưu.
 *  Nếu chưa đạt nhãn nào: lấy nhãn có điểm cao nhất (mỗi câu luôn có ít nhất 1 nhãn).
 */
import fs from 'node:fs';
import { FULL_QUESTION_BANK } from '../src/lib/questionBankData';
import { MATH_TERMS } from '../src/data/mathTerms';

type Tag = 'L' | 'C' | 'M';
const keyTermCount = new Map<string, number>(); // keyTerms của bản Student (~3 từ/câu) không phân biệt được nên không dùng
if (false) {
  const ENRICH_DIR = '';
  for (const g of ['G10', 'G11', 'G12']) {
    const p = `${ENRICH_DIR}/${g}.json`;
    if (!fs.existsSync(p)) continue;
    const data = JSON.parse(fs.readFileSync(p, 'utf8')) as Record<string, any>;
    for (const [id, v] of Object.entries(data)) keyTermCount.set(id, (v?.keyTerms || []).length);
  }
}

const PREFIX = /^(for the following problem, determine whether each proposed answer is true or false:|give the final answer to the following problem:|complete the following statement with the correct result:|provide a complete solution to the following problem:|choose the correct answer:|select the correct answer:)\s*/i;
const stripMath = (s: string) => String(s || '').replace(PREFIX, '').replace(/\$[^$]*\$/g, ' ').replace(/\\[a-zA-Z]+/g, ' ');
const words = (s: string) => stripMath(s).toLowerCase().match(/[a-z][a-z'-]*/g) || [];

// Thuật ngữ Toán: từ điển MATH_TERMS (1–3 từ) + danh sách bổ sung thường gặp trong đề.
const EXTRA_TERMS = [
  'derivative', 'integral', 'antiderivative', 'asymptote', 'domain', 'range', 'interval', 'vertex', 'parabola',
  'coefficient', 'inequality', 'equation', 'function', 'probability', 'median', 'mode', 'variance', 'deviation',
  'quartile', 'vector', 'midpoint', 'centroid', 'perpendicular', 'parallel', 'tangent', 'radius', 'diameter',
  'circumference', 'hypotenuse', 'logarithm', 'exponential', 'sequence', 'arithmetic', 'geometric', 'ratio',
  'subset', 'union', 'intersection', 'complement', 'proposition', 'converse', 'negation', 'increasing',
  'decreasing', 'maximum', 'minimum', 'extremum', 'monotonic', 'coordinate', 'plane', 'sphere', 'cylinder',
  'cone', 'pyramid', 'prism', 'volume', 'area', 'angle', 'sine', 'cosine', 'tangent', 'cotangent', 'radian',
  'permutation', 'combination', 'binomial', 'limit', 'continuous', 'discontinuous', 'polynomial', 'quadratic',
  'linear', 'reciprocal', 'inverse', 'symmetric', 'axis', 'slope', 'intercept', 'frequency', 'mean', 'outcome',
  'event', 'sample', 'space', 'independent', 'conditional', 'rectangle', 'triangle', 'circle', 'ellipse',
  'hyperbola', 'focus', 'foci', 'directrix', 'eccentricity', 'distance', 'projection', 'dot', 'product',
  'magnitude', 'collinear', 'coplanar', 'periodic', 'period', 'amplitude', 'solution', 'root', 'roots',
  'graph', 'parameter', 'real', 'integer', 'natural', 'rational', 'irrational', 'prime', 'divisible',
];
const termSet = new Set<string>(EXTRA_TERMS);
const multiTerms: string[] = [];
for (const t of MATH_TERMS as any[]) {
  const term = String(t.term || '').toLowerCase().trim();
  if (!term) continue;
  if (term.includes(' ')) multiTerms.push(term);
  else termSet.add(term);
}
const GENERIC = new Set(['real', 'space', 'product', 'dot', 'event', 'sample', 'solution', 'graph', 'area', 'angle', 'mean', 'focus', 'natural', 'root', 'roots', 'range', 'mode', 'limit', 'plane', 'period']);

const CONTEXT = /\b(cost|price|profit|revenue|company|factory|shop|store|students?|class|teacher|school|km|meters?|metres?|cm|kg|litres?|liters?|hours?|minutes?|seconds?|days?|months?|years?|speed|velocity|car|train|tank|water|people|population|salary|money|dong|vnd|interest|bank|ticket|garden|farmer|machine|temperature|height|ball|rocket|bacteria|virus|survey|team|players?)\b/;
const CONDITION = /\b(given that|such that|if|where|respectively|at least|at most|provided|satisfying|so that|whose|which)\b/g;
const M_KEYWORDS = /\b(parameter|all values of m|values? of m\b|prove|show that|maximi[sz]e|minimi[sz]e|maximum|minimum|largest|smallest|optimal|greatest|least)\b/;

const steps = (s: string) => {
  const t = String(s || '');
  const bullets = (t.match(/•|\n|;|\. (?=[A-ZĐÂÊÔƠƯ])/g) || []).length;
  const arrows = (t.match(/\\Rightarrow|\\implies|\\iff|=>|⇒/g) || []).length;
  return 1 + bullets + arrows;
};

const out: Record<string, string> = {};
const counts = { L: 0, C: 0, M: 0 };
const nTags = [0, 0, 0, 0];
for (const q of FULL_QUESTION_BANK) {
  const en = String(q.question_en || '');
  const w = words(en);
  const text = w.join(' ');
  let terms = 0;
  const seen = new Set<string>();
  for (const x of w) if (termSet.has(x) && !GENERIC.has(x) && !seen.has(x)) { seen.add(x); terms++; }
  for (const mt of multiTerms) if (text.includes(mt)) terms++;
  const fmt = q.format_type || (q.question_type === 'MCQ' ? 'TN' : q.question_type === 'TRUE_FALSE' ? 'DS' : 'TLN');
  const hasAsset = (q.assets || []).length > 0;
  const conditions = (text.match(CONDITION) || []).length;
  const context = CONTEXT.test(text);
  const st = steps(q.solution_vi || q.solution_en);
  const advanced = q.difficulty === 'MEDIUM' || q.difficulty === 'HARD';

  const sL = (terms >= 3 ? 2 : terms >= 2 && w.length >= 12 ? 2 : terms >= 2 ? 1 : terms >= 1 ? 0.5 : 0);
  const sC = (w.length >= 22 ? 2 : w.length >= 15 ? 0.5 : 0) + (context ? 2 : 0) + (hasAsset ? 2 : 0) + (fmt === 'DS' ? 2 : 0) + (conditions >= 2 ? 2 : conditions === 1 ? 0.5 : 0);
  const sM = (advanced && st >= 2 ? 2 : 0) + ((fmt === 'TLN' || fmt === 'TL') && st >= 2 ? 2 : 0) + (M_KEYWORDS.test(text) ? 2 : 0) + (q.difficulty === 'HARD' ? 1 : 0) + (st >= 4 ? 0.5 : 0);

  const tags: Tag[] = [];
  if (sL >= 2) tags.push('L');
  if (sC >= 2) tags.push('C');
  if (sM >= 2) tags.push('M');
  if (!tags.length) {
    const best = ([['L', sL], ['C', sC], ['M', sM]] as [Tag, number][]).sort((a, b) => b[1] - a[1])[0];
    tags.push(best[1] > 0 ? best[0] : (advanced ? 'M' : 'L'));
  }
  out[q.id] = tags.join('');
  tags.forEach((t) => counts[t]++);
  nTags[tags.length]++;
}
const total = FULL_QUESTION_BANK.length;
fs.writeFileSync('src/data/barrierTags.json', JSON.stringify({ version: 'barrier-tags-1.0', generated: new Date().toISOString().slice(0, 10), tags: out }));
console.log('questions', total, 'enrich ids', keyTermCount.size);
console.log('L', counts.L, (100 * counts.L / total).toFixed(1) + '%', 'C', counts.C, (100 * counts.C / total).toFixed(1) + '%', 'M', counts.M, (100 * counts.M / total).toFixed(1) + '%');
console.log('1 nhãn', nTags[1], '2 nhãn', nTags[2], '3 nhãn', nTags[3]);
