/**
 * AI Math Bridge – kiểm tra câu trả lời ngắn (Level 3 · TLN).
 *
 * Nguyên tắc:
 *  - KHÔNG chấm đúng theo kiểu "chuỗi con" (đáp án 13 không được chấp nhận "1").
 *  - So sánh theo loại đáp án: số / biểu thức số, tập hợp, khoảng – cặp số,
 *    phương trình – bất phương trình (tương đương sai khác hằng số nhân), Đúng/Sai,
 *    còn lại so sánh chuỗi đã chuẩn hóa (bằng nhau hoàn toàn).
 *  - Chấp nhận cách viết khác nhau hợp lệ: dấu phẩy thập phân, phân số, căn,
 *    {1;3} và {1, 3}, "x = 4" và "4", đổi vế phương trình.
 *  - tln-check-1.2 (27/10/2026): vectơ \overrightarrow{AB} / \vec a được hiểu là một đại lượng
 *    (AB ≠ BA, chữ in hoa liền nhau là tên điểm, không phải phép nhân); "90" khớp "90^\circ";
 *    so sánh chữ không phân biệt dấu tiếng Việt ("cung phuong" = "Cùng phương");
 *    hợp các khoảng so sánh từng khoảng, không phụ thuộc thứ tự và dấu "," / ";";
 *    đáp án dạng đã giải (x = 4, x ≥ 3) chỉ chấp nhận bài làm cũng ở dạng đã giải.
 *    Lượng giác: "2kpi", "k2π", "sin^2x", "cos^2(x)" được hiểu đúng; bỏ chú thích ", k ∈ Z" khi so họ nghiệm.
 *  - tln-check-1.3 (27/10/2026): "sin3x", "cos 2x" (không ngoặc) hiểu là sin(3x), cos(2x);
 *    đáp án mẫu viết liền "\sin x\cos x" được tách đúng thành tích sin x · cos x.
 *    Hai khoảng nối bằng "và"/"and" được hiểu là hợp; chỉ số "t_0" = "t0"; "\\int" = "∫".
 *
 * Quy trình nghiên cứu: AMB-RP-1.1 (áp dụng từ bản này).
 */

export const SHORT_ANSWER_CHECKER_VERSION = "tln-check-1.3";

type Kind = "bool" | "number" | "set" | "bracket" | "union" | "relation" | "list" | "text";

const BOOL_TRUE = new Set(["đúng", "dung", "true", "t", "có", "co", "yes", "đ"]);
const BOOL_FALSE = new Set(["sai", "false", "f", "không", "khong", "no", "s"]);

/* ---------------- chuẩn hóa LaTeX → biểu thức thường ---------------- */

const readGroup = (s: string, i: number): [string, number] => {
  // đọc nhóm {...} bắt đầu tại s[i] === "{" ; trả về [nội dung, chỉ số sau "}"]
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === "{") depth++;
    else if (s[j] === "}") {
      depth--;
      if (depth === 0) return [s.slice(i + 1, j), j + 1];
    }
  }
  return [s.slice(i + 1), s.length];
};

const readArg = (s: string, i: number): [string, number] => {
  while (s[i] === " ") i++;
  if (s[i] === "{") return readGroup(s, i);
  if (s[i] === "\\") {
    const m = /^\\[a-zA-Z]+/.exec(s.slice(i));
    if (m) return [m[0], i + m[0].length];
  }
  return [s[i] ?? "", i + 1];
};

const latexToPlain = (input: string): string => {
  let s = String(input ?? "");
  s = s.replace(/\$\$?|\\\(|\\\)|\\\[|\\\]/g, " ");
  s = s.replace(/\\(left|right|big|Big|bigg|Bigg|displaystyle|quad|qquad)(?![a-zA-Z])/g, " ");
  s = s.replace(/\\[,;:! ]/g, " ");
  s = s.replace(/\\(text|mathrm|mathbf|textbf|operatorname)\s*\{([^{}]*)\}/g, "$2");
  // vectơ và đoạn thẳng: \overrightarrow{AB} → AB (tên điểm, xem tokenize), \vec{a} / \vec a → a, \vec0 → 0
  s = s.replace(/\\(?:overrightarrow|overline|vec)\s*\{\s*([^{}]*?)\s*\}/g, " $1 ");
  s = s.replace(/\\vec\s*([A-Za-z0-9])/g, " $1 ");
  s = s.replace(/\b(?:vect[oơ]|vector)\s+/gi, " ");
  // độ: 90^\circ, 90^{\circ}, 90^o → 90°
  s = s.replace(/\^\s*\{?\s*\\circ\s*\}?/g, "°").replace(/(\d)\s*\^\s*o\b/g, "$1°");
  // \frac, \dfrac, \tfrac và \sqrt (có thể lồng nhau)
  let guard = 0;
  while (/\\(d|t)?frac|\\sqrt/.test(s) && guard++ < 50) {
    const fm = /\\(?:d|t)?frac/.exec(s);
    const sm = /\\sqrt/.exec(s);
    const useFrac = fm && (!sm || fm.index < sm.index);
    if (useFrac && fm) {
      const [num, i1] = readArg(s, fm.index + fm[0].length);
      const [den, i2] = readArg(s, i1);
      s = s.slice(0, fm.index) + "((" + num + ")/(" + den + "))" + s.slice(i2);
    } else if (sm) {
      let i = sm.index + 5;
      let index = "";
      if (s[i] === "[") {
        const close = s.indexOf("]", i);
        index = s.slice(i + 1, close);
        i = close + 1;
      }
      const [arg, i2] = readArg(s, i);
      s = s.slice(0, sm.index) + (index ? "root(" + index + "," + arg + ")" : "sqrt(" + arg + ")") + s.slice(i2);
    }
  }
  const map: Array<[RegExp, string]> = [
    [/\\(sin|cos|tan|cot|ln|log|exp)(?![a-zA-Z])/g, " $1"],
    [/\\int(?![a-zA-Z])/g, "∫"],
    [/\\cdot|\\times/g, "*"],
    [/\\div/g, "/"],
    [/\\leqslant|\\leq?(?![a-zA-Z])/g, "≤"],
    [/\\geqslant|\\geq?(?![a-zA-Z])/g, "≥"],
    [/\\neq?(?![a-zA-Z])/g, "≠"],
    [/\\pm/g, "±"],
    [/\\infty/g, "∞"],
    [/\\pi(?![a-zA-Z])/g, "π"],
    [/\\alpha/g, "α"],
    [/\\beta/g, "β"],
    [/\\in(?![a-zA-Z])/g, "∈"],
    [/\\cup/g, "∪"],
    [/\\cap/g, "∩"],
    [/\\setminus/g, "\\"],
    [/\\varnothing|\\emptyset/g, "∅"],
    [/\\mathbb\s*\{?R\}?/g, "ℝ"],
    [/\\mathbb\s*\{?Z\}?/g, "ℤ"],
    [/\\mathbb\s*\{?N\}?/g, "ℕ"],
    [/\\mathbb\s*\{?Q\}?/g, "ℚ"],
    [/\\\{/g, "{"],
    [/\\\}/g, "}"],
    [/\\%/g, "%"],
    [/\\circ/g, "°"],
  ];
  for (const [re, rep] of map) s = s.replace(re, rep);
  s = s.replace(/\^\{([^{}]*)\}/g, "^($1)");
  s = s.replace(/_\{([^{}]*)\}/g, "_$1");
  // chỉ số dưới một chữ số: t_0 = t0, x_1 = x1
  s = s.replace(/([a-zA-Z])_(\d)(?!\d)/g, "$1$2");
  s = s.replace(/[{}]/g, (ch) => (ch === "{" ? "{" : "}"));
  s = s.replace(/<=|=</g, "≤").replace(/>=|=>/g, "≥").replace(/!=|<>/g, "≠");
  s = s.replace(/[−–—]/g, "-").replace(/[×·]/g, "*").replace(/÷/g, "/");
  s = s.replace(/√\s*\(/g, "sqrt(").replace(/√\s*([0-9a-z.]+)/gi, "sqrt($1)");
  s = s.replace(/\binfinity\b|\binf\b/gi, "∞");
  // học sinh hay gõ chữ U thay cho ∪ giữa hai khoảng: (-∞;-2) U (3;+∞)
  s = s.replace(/([)\]])\s*[uU]\s*([(\[])/g, "$1∪$2");
  // "(-∞;1) và (3;+∞)" / "and": hai khoảng nối bằng chữ cũng là hợp
  s = s.replace(/([)\]])\s*(?:và|va|and|hoặc|hoac|or)\s*([(\[])/gi, "$1∪$2");
  // "pi" gõ liền: 2kpi, kpi → 2kπ
  s = s.replace(/([0-9k\s(+\-*/]|^)pi(?![a-zA-Z])/g, "$1π");
  // sin^2x, cos^2(x) → (sin(x))^2
  s = s.replace(/(^|[^a-zA-Z])(sin|cos|tan|cot)\s*\^\s*\(?(\d)\)?\s*(\([^()]*\)|[a-zα-ω0-9°]+)/g, "$1($2($4))^$3");
  // sin3x, cos 2x (không ngoặc) → sin(3x): theo quy ước SGK, hệ số dính liền là một phần của đối số
  s = s.replace(/(^|[^a-zA-Z])(sin|cos|tan|cot)\s*(\d+(?:\.\d+)?\s*[a-zα-ω](?![a-zA-Z(]))/g, "$1$2($3)");
  // họ nghiệm lượng giác: bỏ phần ghi chú ", k ∈ ℤ" / "(k ∈ Z)"
  s = s.replace(/[,;]?\s*\(?\s*k\s*∈\s*(?:ℤ|Z)\s*\)?/g, " ").replace(/(\d)\s*k\s*π/g, "$1kπ");
  // ℝ bỏ đi một tập: \mathbb R\setminus\{-1\}, R\{-1}, R{-1} → ℝ∖{-1}
  s = s.replace(/(^|[^A-Za-z])R(?=\s*[\\∖]?\s*\{)/g, "$1ℝ").replace(/([ℝℤℕℚ])\s*[\\∖]?\s*\{/g, "$1∖{");
  return s.replace(/\s+/g, " ").trim();
};

const stripOuter = (s: string) => s.trim().replace(/[.。]+$/, "").trim();

/* ---------------- bộ đánh giá biểu thức nhỏ ---------------- */

type Env = Record<string, number>;
type Node =
  | { t: "num"; v: number }
  | { t: "var"; name: string }
  | { t: "bin"; op: string; a: Node; b: Node }
  | { t: "neg"; a: Node }
  | { t: "fn"; name: string; args: Node[] };

const FUNCS: Record<string, (...a: number[]) => number> = {
  sqrt: Math.sqrt,
  root: (n, x) => (x < 0 && n % 2 === 1 ? -Math.pow(-x, 1 / n) : Math.pow(x, 1 / n)),
  abs: Math.abs,
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  cot: (x) => 1 / Math.tan(x),
  ln: Math.log,
  log: Math.log10,
  exp: Math.exp,
};

const tokenize = (src: string): string[] | null => {
  const tokens: string[] = [];
  let i = 0;
  const s = src.replace(/π/g, " pi ").replace(/∞/g, " inf ");
  while (i < s.length) {
    const ch = s[i];
    if (ch === " ") { i++; continue; }
    const num = /^(\d+(?:\.\d+)?|\.\d+)/.exec(s.slice(i));
    if (num) { tokens.push(num[0]); i += num[0].length; continue; }
    // chữ in hoa liền nhau (AB, GA, ABC) là tên điểm/đoạn/vectơ: một ký hiệu, không phải tích A·B
    const pointName = /^[A-Z]{2,}[0-9']*(?![a-z])/.exec(s.slice(i));
    if (pointName) { tokens.push(pointName[0]); i += pointName[0].length; continue; }
    const id = /^[a-zA-Zα-ωΑ-Ω]+(?:_[a-zA-Z0-9]+)?/.exec(s.slice(i));
    if (id) {
      // tách chuỗi chữ dính liền thành nhiều biến (ví dụ "xy" = x*y), trừ tên hàm đã biết
      const word = id[0];
      if (FUNCS[word] || word === "pi" || word === "inf" || word.includes("_")) tokens.push(word);
      else {
        let rest = word;
        while (rest.length) {
          const fn = Object.keys(FUNCS).find((f) => rest.startsWith(f) && rest.length > f.length);
          if (fn) { tokens.push(fn); rest = rest.slice(fn.length); }
          else { tokens.push(rest[0]); rest = rest.slice(1); }
        }
      }
      i += word.length;
      continue;
    }
    if ("+-*/^(),|".includes(ch)) { tokens.push(ch); i++; continue; }
    return null; // ký tự lạ → không phải biểu thức
  }
  return tokens;
};

const parseExpr = (src: string): Node | null => {
  const toks = tokenize(src);
  if (!toks || !toks.length) return null;
  // chèn phép nhân ngầm: 2x, 2(x+1), (x)(y), x(…) khi x không phải hàm, 2sqrt(3)
  const t: string[] = [];
  const isOperand = (x: string) => /^[\d.]/.test(x) || /^[a-zA-Zα-ω]/.test(x);
  for (let k = 0; k < toks.length; k++) {
    const cur = toks[k];
    const prev = t[t.length - 1];
    if (prev !== undefined) {
      const prevEnds = isOperand(prev) && !FUNCS[prev] || prev === ")";
      const curStarts = isOperand(cur) || cur === "(";
      if (prevEnds && curStarts) t.push("*");
    }
    t.push(cur);
  }
  let p = 0;
  let absDepth = 0;
  const peek = () => t[p];
  const eat = (x?: string) => {
    const v = t[p];
    if (x !== undefined && v !== x) throw new Error("expected " + x);
    p++;
    return v;
  };
  const primary = (): Node => {
    const tok = peek();
    if (tok === undefined) throw new Error("eof");
    if (tok === "(") { eat("("); const e = expr(); eat(")"); return e; }
    if (tok === "|") { eat("|"); absDepth++; const e = expr(); absDepth--; eat("|"); return { t: "fn", name: "abs", args: [e] }; }
    if (tok === "-") { eat(); return { t: "neg", a: unary() }; }
    if (tok === "+") { eat(); return unary(); }
    if (/^[\d.]/.test(tok)) { eat(); return { t: "num", v: Number(tok) }; }
    if (tok === "pi") { eat(); return { t: "num", v: Math.PI }; }
    if (tok === "inf") { eat(); return { t: "num", v: Infinity }; }
    if (FUNCS[tok]) {
      eat();
      if (peek() === "(") {
        eat("(");
        const args = [expr()];
        while (peek() === ",") { eat(","); args.push(expr()); }
        eat(")");
        return { t: "fn", name: tok, args };
      }
      return { t: "fn", name: tok, args: [unary()] };
    }
    if (/^[a-zA-Zα-ω]/.test(tok)) { eat(); return { t: "var", name: tok }; }
    throw new Error("bad token " + tok);
  };
  const power = (): Node => {
    const base = primary();
    if (peek() === "^") { eat("^"); return { t: "bin", op: "^", a: base, b: unary() }; }
    return base;
  };
  const unary = (): Node => {
    if (peek() === "-") { eat(); return { t: "neg", a: unary() }; }
    if (peek() === "+") { eat(); return unary(); }
    return power();
  };
  const term = (): Node => {
    let a = unary();
    while (peek() === "*" || peek() === "/") { const op = eat()!; a = { t: "bin", op, a, b: unary() }; }
    return a;
  };
  const expr = (): Node => {
    let a = term();
    while (peek() === "+" || peek() === "-") {
      if (absDepth > 0 && peek() === "|") break;
      const op = eat()!;
      a = { t: "bin", op, a, b: term() };
    }
    return a;
  };
  try {
    const node = expr();
    if (p !== t.length) return null;
    return node;
  } catch {
    return null;
  }
};

const evalNode = (n: Node, env: Env): number => {
  switch (n.t) {
    case "num": return n.v;
    case "var": return n.name in env ? env[n.name] : NaN;
    case "neg": return -evalNode(n.a, env);
    case "fn": return FUNCS[n.name](...n.args.map((a) => evalNode(a, env)));
    case "bin": {
      const a = evalNode(n.a, env), b = evalNode(n.b, env);
      if (n.op === "+") return a + b;
      if (n.op === "-") return a - b;
      if (n.op === "*") return a * b;
      if (n.op === "/") return a / b;
      return Math.pow(a, b);
    }
  }
};

const varsOf = (n: Node, out = new Set<string>()): Set<string> => {
  if (n.t === "var") out.add(n.name);
  else if (n.t === "neg") varsOf(n.a, out);
  else if (n.t === "bin") { varsOf(n.a, out); varsOf(n.b, out); }
  else if (n.t === "fn") n.args.forEach((a) => varsOf(a, out));
  return out;
};

const close = (a: number, b: number) => {
  if (!isFinite(a) || !isFinite(b)) return a === b;
  return Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
};

/** Dấu phẩy thập phân kiểu Việt Nam: "12,7" → "12.7" (chỉ khi không phải danh sách). */
const fixDecimalComma = (s: string) => s.replace(/(\d),(\d)/g, "$1.$2");

const numericValue = (s: string): number | null => {
  let plain = fixDecimalComma(latexToPlain(s)).replace(/\s*[%°]$/, "");
  // đơn vị viết sau khoảng trắng: "50 J", "√14 m", "120 cm^2", "15 nghìn đồng"
  const unit = /^(.*\S)\s+([A-Za-zÀ-ỹ][A-Za-zÀ-ỹ0-9^]*(?:\s+[A-Za-zÀ-ỹ]+)?)$/.exec(plain);
  const tryEval = (txt: string) => {
    const node = parseExpr(txt);
    if (!node || varsOf(node).size) return null;
    const v = evalNode(node, {});
    return Number.isFinite(v) || v === Infinity || v === -Infinity ? v : null;
  };
  const direct = tryEval(plain);
  if (direct !== null) return direct;
  return unit ? tryEval(unit[1]) : null;
};

/* ---------------- tách thành phần ---------------- */

const splitTop = (s: string, seps: string[]): string[] => {
  const out: string[] = [];
  let depth = 0, cur = "";
  for (const ch of s) {
    if ("([{".includes(ch)) depth++;
    if (")]}".includes(ch)) depth--;
    if (depth === 0 && seps.includes(ch)) { out.push(cur); cur = ""; continue; }
    cur += ch;
  }
  out.push(cur);
  return out.map((x) => x.trim()).filter((x) => x.length);
};

const splitElements = (inner: string) =>
  inner.includes(";") ? splitTop(inner, [";"]) : splitTop(inner, [","]);

const sameElement = (a: string, b: string): boolean => {
  const na = numericValue(a), nb = numericValue(b);
  if (na !== null && nb !== null) return close(na, nb);
  return canonicalText(a) === canonicalText(b);
};

const canonicalText = (s: string) =>
  latexToPlain(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/ℝ/g, "r")
    .replace(/\s+/g, "")
    .replace(/[.。]+$/, "")
    .replace(/\*/g, "");

/* ---------------- phân loại ---------------- */

interface Parsed { kind: Kind; raw: string; plain: string }

const RELATIONS = ["≤", "≥", "≠", "<", ">", "="];

const classify = (input: string): Parsed => {
  const raw = stripOuter(input);
  const plain = stripOuter(latexToPlain(raw));
  const low = plain.toLowerCase();
  if (BOOL_TRUE.has(low) || BOOL_FALSE.has(low)) return { kind: "bool", raw, plain };
  if (/^\{.*\}$/.test(plain) && !/[∪∩\\]/.test(plain.replace(/^\{|\}$/g, ""))) return { kind: "set", raw, plain };
  if (/^[(\[].*[)\]]$/.test(plain) && splitElements(plain.slice(1, -1)).length >= 2 && !/[∪∩]/.test(plain))
    return { kind: "bracket", raw, plain };
  // hợp các khoảng: (-∞;-2) ∪ (3;+∞)
  if (plain.includes("∪")) {
    const parts = splitTop(plain, ["∪"]);
    if (parts.length >= 2 && parts.every((x) => classify(x).kind === "bracket")) return { kind: "union", raw, plain };
  }
  const topParts = splitTop(fixDecimalComma(plain), [",", ";"]);
  if (topParts.length >= 2 && topParts.every((p) => RELATIONS.some((r) => p.includes(r)))) return { kind: "list", raw, plain };
  if (RELATIONS.some((r) => plain.includes(r)) && /[a-zα-ω]/i.test(plain) && !/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(plain.replace(/\b(và|hoặc)\b/g, "")))
    return { kind: "relation", raw, plain };
  if (numericValue(raw) !== null) return { kind: "number", raw, plain };
  return { kind: "text", raw, plain };
};

/* ---------------- so sánh quan hệ (phương trình / bất phương trình) ---------------- */

const relationForm = (s: string): { g: Node; op: string } | null => {
  const plain = fixDecimalComma(s);
  const op = RELATIONS.find((r) => plain.includes(r));
  if (!op) return null;
  const parts = plain.split(op);
  if (parts.length !== 2) return null;
  // ký hiệu hàm kiểu V(t), f(x) ở vế trái → coi như một biến riêng
  const fnLeft = /^\s*([A-Za-z])\s*\(\s*([a-z])\s*\)\s*$/.exec(parts[0]);
  const left = fnLeft ? fnLeft[1] + "_fn" : parts[0];
  const L = parseExpr(left), R = parseExpr(parts[1]);
  if (!L || !R) return null;
  if (op === ">" || op === "≥") return { g: { t: "bin", op: "-", a: R, b: L }, op: op === ">" ? "<" : "≤" };
  return { g: { t: "bin", op: "-", a: L, b: R }, op };
};

/** Dạng "đã giải": một vế là một biến, vế kia là số (x = 4, x ≥ 3, 2 < x). */
const isSolvedForm = (s: string): boolean => {
  const plain = fixDecimalComma(s);
  const op = RELATIONS.find((r) => plain.includes(r));
  if (!op) return false;
  const parts = plain.split(op);
  if (parts.length !== 2) return false;
  const isVar = (x: string) => /^\s*[a-zA-Zα-ω](?:_\w+)?\s*$/.test(x);
  return (isVar(parts[0]) && numericValue(parts[1]) !== null) || (isVar(parts[1]) && numericValue(parts[0]) !== null);
};

const sameRelation = (student: string, expected: string): boolean => {
  // đáp án chuẩn ở dạng đã giải thì bài làm cũng phải ở dạng đã giải (không chấp nhận chép lại phương trình đề bài)
  if (isSolvedForm(expected) && !isSolvedForm(student)) return false;
  const a = relationForm(student), b = relationForm(expected);
  if (!a || !b || a.op !== b.op) return false;
  const vars = new Set([...varsOf(a.g), ...varsOf(b.g)]);
  if (!vars.size) return false;
  let ratio: number | null = null;
  let seed = 7;
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  let valid = 0;
  for (let k = 0; k < 12; k++) {
    const env: Env = {};
    vars.forEach((v) => (env[v] = 0.37 + rnd() * 3.1 * (rnd() > 0.5 ? 1 : -1)));
    const ga = evalNode(a.g, env), gb = evalNode(b.g, env);
    if (!isFinite(ga) || !isFinite(gb)) continue;
    if (Math.abs(gb) < 1e-9) { if (Math.abs(ga) > 1e-6) return false; continue; }
    const r = ga / gb;
    if (ratio === null) ratio = r;
    else if (!close(r, ratio)) return false;
    valid++;
  }
  if (ratio === null || valid < 4 || Math.abs(ratio) < 1e-9) return false;
  // phương trình: bất kỳ hệ số khác 0; bất phương trình: hệ số phải dương (giữ chiều)
  return a.op === "=" || a.op === "≠" ? true : ratio > 0;
};

/** Hai biểu thức chứa biến bằng nhau (thử tại nhiều điểm ngẫu nhiên), ví dụ sinα/cosα và \dfrac{\sin\alpha}{\cos\alpha}. */
const sameExpression = (a: string, b: string): boolean => {
  const A = parseExpr(fixDecimalComma(a)), B = parseExpr(fixDecimalComma(b));
  if (!A || !B) return false;
  const va = varsOf(A), vb = varsOf(B);
  if (!va.size || va.size !== vb.size || [...va].some((v) => !vb.has(v))) return false;
  let seed = 11, valid = 0;
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  for (let k = 0; k < 10; k++) {
    const env: Env = {};
    va.forEach((v) => (env[v] = 0.21 + rnd() * 1.3));
    const x = evalNode(A, env), y = evalNode(B, env);
    if (!isFinite(x) || !isFinite(y)) continue;
    if (!close(x, y)) return false;
    valid++;
  }
  return valid >= 5;
};

/* ---------------- hàm chính ---------------- */

export interface ShortAnswerCheck {
  correct: boolean;
  method: Kind | "assign-to-number" | "empty";
}

export const checkShortAnswer = (student: string, expected: string): ShortAnswerCheck => {
  const s = classify(student ?? "");
  const e = classify(expected ?? "");
  if (!s.plain || !e.plain) return { correct: false, method: "empty" };

  // "x = 4" so với "4" (và ngược lại): chỉ khi một bên là phép gán biến = số
  const assignNum = (p: Parsed) => {
    const m = /^([a-zA-Z](?:_\w+)?)\s*=\s*(.+)$/.exec(p.plain);
    if (!m) return null;
    const v = numericValue(m[2]);
    return v === null ? null : v;
  };
  if (e.kind === "number" || e.kind === "relation") {
    const ev = e.kind === "number" ? numericValue(e.raw) : assignNum(e);
    const sv = s.kind === "number" ? numericValue(s.raw) : assignNum(s);
    if (ev !== null && sv !== null && (e.kind === "number" || s.kind === "number"))
      return { correct: close(ev, sv), method: "assign-to-number" };
  }

  // "A = {1; 3}", "S = (1; 3]" so với đáp án là tập hợp / khoảng: chỉ so phần bên phải dấu "="
  if ((e.kind === "set" || e.kind === "bracket") && s.kind === "relation") {
    const rhs = /^[A-Za-z](?:_\w+)?\s*=\s*(.+)$/.exec(s.plain);
    if (rhs) return checkShortAnswer(rhs[1], expected);
  }

  switch (e.kind) {
    case "bool": {
      const lowS = s.plain.toLowerCase(), lowE = e.plain.toLowerCase();
      const truthE = BOOL_TRUE.has(lowE);
      return { correct: s.kind === "bool" && BOOL_TRUE.has(lowS) === truthE, method: "bool" };
    }
    case "number": {
      // đơn vị viết cách bằng khoảng trắng ("50 J") đã được numericValue xử lý
      const ev = numericValue(e.raw);
      const sv = numericValue(s.raw);
      return { correct: ev !== null && sv !== null && close(ev, sv), method: "number" };
    }
    case "set": {
      if (s.kind !== "set") return { correct: false, method: "set" };
      const A = splitElements(s.plain.slice(1, -1)), B = splitElements(e.plain.slice(1, -1));
      const uniq = (xs: string[]) => xs.filter((x, i) => xs.findIndex((y) => sameElement(x, y)) === i);
      const ua = uniq(A), ub = uniq(B);
      return {
        correct: ua.length === ub.length && ua.every((x) => ub.some((y) => sameElement(x, y))),
        method: "set",
      };
    }
    case "bracket": {
      if (s.kind !== "bracket") return { correct: false, method: "bracket" };
      if (s.plain[0] !== e.plain[0] || s.plain.slice(-1) !== e.plain.slice(-1)) {
        // chấp nhận "[" viết thành "⟦"? không. Ngoặc khác loại → khác nghĩa (khoảng mở/đóng)
        return { correct: false, method: "bracket" };
      }
      const A = splitElements(s.plain.slice(1, -1)), B = splitElements(e.plain.slice(1, -1));
      return { correct: A.length === B.length && A.every((x, i) => sameElement(x, B[i])), method: "bracket" };
    }
    case "union": {
      if (s.kind !== "union") return { correct: false, method: "union" };
      const A = splitTop(s.plain, ["∪"]), B = splitTop(e.plain, ["∪"]);
      return {
        correct: A.length === B.length && B.every((b) => A.some((a) => checkShortAnswer(a, b).correct)),
        method: "union",
      };
    }
    case "relation": {
      if (s.kind !== "relation") return { correct: false, method: "relation" };
      return { correct: sameRelation(s.plain, e.plain) || canonicalText(s.raw) === canonicalText(e.raw), method: "relation" };
    }
    case "list": {
      const A = splitTop(fixDecimalComma(s.plain), [",", ";"]), B = splitTop(fixDecimalComma(e.plain), [",", ";"]);
      return {
        correct: A.length === B.length && B.every((b) => A.some((a) => sameRelation(a, b) || canonicalText(a) === canonicalText(b))),
        method: "list",
      };
    }
    default: {
      if (canonicalText(s.raw) === canonicalText(e.raw)) return { correct: true, method: "text" };
      return { correct: sameExpression(s.plain, e.plain), method: "text" };
    }
  }
};

/**
 * Quy tắc chấm cho câu có nhiều đáp án đúng (do giáo viên khai báo trong tệp enrichment).
 *  - point-satisfies: học sinh ghi một điểm (x; y), đúng nếu điểm thỏa mọi điều kiện.
 */
export type AnswerRule = { kind: "point-satisfies"; conditions: string[] };

const parsePoint = (text: string): [number, number] | null => {
  const plain = stripOuter(latexToPlain(text)).replace(/^[A-Za-z]\s*/, "");
  if (!/^\(.*\)$/.test(plain)) return null;
  const parts = splitElements(plain.slice(1, -1));
  if (parts.length !== 2) return null;
  const a = numericValue(parts[0]), b = numericValue(parts[1]);
  return a === null || b === null ? null : [a, b];
};

const holds = (condition: string, env: Env): boolean => {
  const plain = fixDecimalComma(latexToPlain(condition));
  const op = ["≤", "≥", "≠", "<", ">", "="].find((r) => plain.includes(r));
  if (!op) return false;
  const [l, r] = plain.split(op);
  const L = parseExpr(l), R = parseExpr(r);
  if (!L || !R) return false;
  const a = evalNode(L, env), b = evalNode(R, env);
  const eps = 1e-9;
  switch (op) {
    case "≤": return a <= b + eps;
    case "≥": return a >= b - eps;
    case "<": return a < b - eps;
    case ">": return a > b + eps;
    case "≠": return Math.abs(a - b) > eps;
    default: return Math.abs(a - b) <= eps;
  }
};

export const checkByRule = (student: string, rule: AnswerRule): boolean => {
  if (rule.kind === "point-satisfies") {
    const p = parsePoint(student);
    return !!p && rule.conditions.every((c) => holds(c, { x: p[0], y: p[1] }));
  }
  return false;
};

/** Đúng nếu khớp đáp án chuẩn, một cách viết được chấp nhận, hoặc thỏa quy tắc chấm của câu. */
export const isShortAnswerCorrect = (student: string, expected: string, accepted: string[] = [], rule?: AnswerRule) =>
  (!!rule && checkByRule(student, rule)) ||
  [expected, ...accepted].some((answer) => !!answer && checkShortAnswer(student, answer).correct);
