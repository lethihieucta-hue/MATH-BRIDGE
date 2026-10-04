import React, { useMemo, useState } from "react";
import { BookOpen, ChevronDown, ChevronUp, Keyboard, Languages, Search } from "lucide-react";

type InputElement = HTMLInputElement | HTMLTextAreaElement;

type MathInputToolbarProps = {
  value: string;
  onChange: (value: string) => void;
  inputRef: React.RefObject<InputElement | null>;
  accent?: "emerald" | "rose" | "indigo";
  showEnglishTemplates?: boolean;
  defaultOpen?: boolean;
  compact?: boolean;
};

type InsertItem = {
  label: string;
  insert: string;
  title?: string;
  keywords?: string;
};

type MathGroup = { title: string; items: InsertItem[] };

const CURSOR = "¦";

const mathGroups: MathGroup[] = [
  {
    title: "Cơ bản & Quan hệ",
    items: [
      { label: "+", insert: "+" }, { label: "−", insert: "−" }, { label: "×", insert: "×" }, { label: "÷", insert: "÷" },
      { label: "=", insert: "=" }, { label: "≠", insert: "≠" }, { label: "≈", insert: "≈" }, { label: "≡", insert: "≡" },
      { label: "<", insert: "<" }, { label: ">", insert: ">" }, { label: "≤", insert: "≤" }, { label: "≥", insert: "≥" },
      { label: "±", insert: "±" }, { label: "∓", insert: "∓" }, { label: "∞", insert: "∞" }, { label: "→", insert: "→" },
      { label: "⇒", insert: "⇒" }, { label: "⇔", insert: "⇔" }, { label: "%", insert: "%" }, { label: "‰", insert: "‰" },
    ],
  },
  {
    title: "Đại số & Biểu thức",
    items: [
      { label: "x²", insert: "$x^2$" }, { label: "x³", insert: "$x^3$" }, { label: "xⁿ", insert: `$x^{${CURSOR}}$`, title: "Lũy thừa" },
      { label: "aⁿ", insert: `$a^{${CURSOR}}$` }, { label: "aₙ", insert: `$a_{${CURSOR}}$` }, { label: "x₁", insert: "$x_1$" }, { label: "x₂", insert: "$x_2$" },
      { label: "√", insert: `$\\sqrt{${CURSOR}}$`, title: "Căn bậc hai" }, { label: "ⁿ√", insert: `$\\sqrt[${CURSOR}]{}$`, title: "Căn bậc n" },
      { label: "a/b", insert: `$\\frac{${CURSOR}}{}$`, title: "Phân số" }, { label: "|x|", insert: `$|${CURSOR}|$`, title: "Giá trị tuyệt đối" },
      { label: "( )", insert: `(${CURSOR})` }, { label: "[ ]", insert: `[${CURSOR}]` }, { label: "{ }", insert: `{${CURSOR}}` },
      { label: "Δ", insert: "Δ" }, { label: "√Δ", insert: `$\\sqrt{\\Delta}$` },
    ],
  },
  {
    title: "Mũ, Logarit & Hàm số",
    items: [
      { label: "eˣ", insert: `$e^{${CURSOR}}$` }, { label: "aˣ", insert: `$a^{${CURSOR}}$` }, { label: "ln", insert: `$\\ln(${CURSOR})$` },
      { label: "log", insert: `$\\log(${CURSOR})$` }, { label: "logₐ", insert: `$\\log_{${CURSOR}}()$` }, { label: "f(x)", insert: `$f(${CURSOR})$` },
      { label: "f⁻¹", insert: `$f^{-1}(${CURSOR})$` }, { label: "max", insert: `$\\max ${CURSOR}$` }, { label: "min", insert: `$\\min ${CURSOR}$` },
      { label: "D", insert: `$D=${CURSOR}$` }, { label: "R", insert: `$R=${CURSOR}$` },
    ],
  },
  {
    title: "Giải tích",
    items: [
      { label: "f′(x)", insert: "$f'(x)$" }, { label: "f″(x)", insert: `$f''(x)$` }, { label: "dy/dx", insert: `$\\frac{dy}{dx}$` },
      { label: "lim", insert: `$\\lim_{x\\to ${CURSOR}}$` }, { label: "lim x→∞", insert: `$\\lim_{x\\to \\infty} ${CURSOR}$` },
      { label: "∫", insert: `$\\int ${CURSOR}\\,dx$` }, { label: "∫ₐᵇ", insert: `$\\int_{a}^{b} ${CURSOR}\\,dx$` },
      { label: "Σ", insert: `$\\sum_{i=1}^{n} ${CURSOR}$` }, { label: "Π", insert: `$\\prod_{i=1}^{n} ${CURSOR}$` },
      { label: "dx", insert: "dx" }, { label: "Δx", insert: "$\\Delta x$" }, { label: "Δy", insert: "$\\Delta y$" },
    ],
  },
  {
    title: "Lượng giác",
    items: [
      { label: "sin", insert: `$\\sin(${CURSOR})$` }, { label: "cos", insert: `$\\cos(${CURSOR})$` }, { label: "tan", insert: `$\\tan(${CURSOR})$` },
      { label: "cot", insert: `$\\cot(${CURSOR})$` }, { label: "sin²", insert: `$\\sin^2(${CURSOR})$` }, { label: "cos²", insert: `$\\cos^2(${CURSOR})$` },
      { label: "arcsin", insert: `$\\arcsin(${CURSOR})$` }, { label: "arccos", insert: `$\\arccos(${CURSOR})$` }, { label: "arctan", insert: `$\\arctan(${CURSOR})$` },
      { label: "π", insert: "π" }, { label: "π/2", insert: `$\\frac{\\pi}{2}$` }, { label: "2π", insert: "$2\\pi$" }, { label: "°", insert: "°" },
    ],
  },
  {
    title: "Tập hợp & Logic",
    items: [
      { label: "∈", insert: "∈" }, { label: "∉", insert: "∉" }, { label: "⊂", insert: "⊂" }, { label: "⊆", insert: "⊆" },
      { label: "⊃", insert: "⊃" }, { label: "⊇", insert: "⊇" }, { label: "∪", insert: "∪" }, { label: "∩", insert: "∩" }, { label: "∅", insert: "∅" },
      { label: "ℝ", insert: "ℝ" }, { label: "ℕ", insert: "ℕ" }, { label: "ℤ", insert: "ℤ" }, { label: "ℚ", insert: "ℚ" },
      { label: "∀", insert: "∀" }, { label: "∃", insert: "∃" }, { label: "¬", insert: "¬" }, { label: "∧", insert: "∧" }, { label: "∨", insert: "∨" },
    ],
  },
  {
    title: "Khoảng & Điều kiện",
    items: [
      { label: "(a;b)", insert: `(${CURSOR};)` }, { label: "[a;b]", insert: `[${CURSOR};]` }, { label: "[a;b)", insert: `[${CURSOR};)` }, { label: "(a;b]", insert: `(${CURSOR};]` },
      { label: "x∈", insert: `$x\\in ${CURSOR}$` }, { label: "x≠", insert: `$x\\ne ${CURSOR}$` }, { label: "x≥", insert: `$x\\ge ${CURSOR}$` }, { label: "x≤", insert: `$x\\le ${CURSOR}$` },
    ],
  },
  {
    title: "Xác suất & Thống kê",
    items: [
      { label: "P(A)", insert: `$P(${CURSOR})$` }, { label: "P(A∩B)", insert: `$P(A\\cap B)$` }, { label: "P(A∪B)", insert: `$P(A\\cup B)$` },
      { label: "P(A|B)", insert: `$P(A\\mid B)$` }, { label: "Ā", insert: `$\\overline{${CURSOR}}$` },
      { label: "Cₙᵏ", insert: `$C_{${CURSOR}}^{}$` }, { label: "Aₙᵏ", insert: `$A_{${CURSOR}}^{}$` }, { label: "n!", insert: `${CURSOR}!` },
      { label: "x̄", insert: `$\\bar{x}$` }, { label: "μ", insert: "μ" }, { label: "σ", insert: "σ" }, { label: "σ²", insert: "$\\sigma^2$" },
      { label: "E(X)", insert: `$E(${CURSOR})$` }, { label: "Var(X)", insert: `$Var(${CURSOR})$` },
    ],
  },
  {
    title: "Vector & Tọa độ",
    items: [
      { label: "⃗u", insert: `$\\vec{${CURSOR}}$`, title: "Vector" }, { label: "AB⃗", insert: `$\\overrightarrow{${CURSOR}}$` },
      { label: "|u⃗|", insert: `$|\\vec{${CURSOR}}|$` }, { label: "u⃗·v⃗", insert: `$\\vec{u}\\cdot\\vec{v}$` },
      { label: "(x;y)", insert: `(${CURSOR};)` }, { label: "(x;y;z)", insert: `(${CURSOR};;)` },
      { label: "x₀", insert: "$x_0$" }, { label: "y₀", insert: "$y_0$" }, { label: "z₀", insert: "$z_0$" },
      { label: "d(M,P)", insert: `$d(${CURSOR},(P))$` },
    ],
  },
  {
    title: "Hình học",
    items: [
      { label: "∠", insert: "∠" }, { label: "⊥", insert: "⊥" }, { label: "∥", insert: "∥" }, { label: "≅", insert: "≅" }, { label: "∼", insert: "∼" },
      { label: "AB", insert: "$AB$" }, { label: "|AB|", insert: `$|${CURSOR}|$` }, { label: "S△", insert: `$S_{\\triangle ${CURSOR}}$` },
      { label: "V", insert: `$V=${CURSOR}$` }, { label: "R", insert: `$R=${CURSOR}$` }, { label: "r", insert: `$r=${CURSOR}$` },
      { label: "(P)", insert: `$(${CURSOR})$` }, { label: "(α)", insert: `$(\\alpha)$` },
    ],
  },
  {
    title: "Ma trận & Hệ phương trình",
    items: [
      { label: "[a b]", insert: `$\\begin{bmatrix}${CURSOR} & \\\\ & \\end{bmatrix}$`, title: "Ma trận 2×2" },
      { label: "det", insert: `$\\det(${CURSOR})$` }, { label: "|A|", insert: `$|A|$` },
      { label: "Hệ 2", insert: `$\\begin{cases}${CURSOR}\\\\ \\end{cases}$`, title: "Hệ 2 phương trình" },
      { label: "Hệ 3", insert: `$\\begin{cases}${CURSOR}\\\\ \\\\ \\end{cases}$`, title: "Hệ 3 phương trình" },
    ],
  },
  {
    title: "Ký tự Hy Lạp",
    items: [
      { label: "α", insert: "α" }, { label: "β", insert: "β" }, { label: "γ", insert: "γ" }, { label: "δ", insert: "δ" },
      { label: "ε", insert: "ε" }, { label: "θ", insert: "θ" }, { label: "λ", insert: "λ" }, { label: "μ", insert: "μ" },
      { label: "ρ", insert: "ρ" }, { label: "σ", insert: "σ" }, { label: "φ", insert: "φ" }, { label: "ω", insert: "ω" },
      { label: "Δ", insert: "Δ" }, { label: "Σ", insert: "Σ" }, { label: "Ω", insert: "Ω" },
    ],
  },
];

const englishTemplates: InsertItem[] = [
  { label: "Given…", insert: `Given ${CURSOR}` }, { label: "To find…", insert: `To find ${CURSOR}` },
  { label: "We have…", insert: `We have ${CURSOR}` }, { label: "Using…", insert: `Using ${CURSOR}, we have ` },
  { label: "Since…", insert: `Since ${CURSOR}, ` }, { label: "First,…", insert: `First, ${CURSOR}` },
  { label: "Then,…", insert: `Then, ${CURSOR}` }, { label: "Substituting…", insert: `Substituting ${CURSOR}, we get ` },
  { label: "Simplifying…", insert: `Simplifying, ${CURSOR}` }, { label: "Therefore,…", insert: `Therefore, ${CURSOR}` },
  { label: "Hence,…", insert: `Hence, ${CURSOR}` }, { label: "Thus,…", insert: `Thus, ${CURSOR}` },
  { label: "So…", insert: `So, ${CURSOR}` }, { label: "This implies…", insert: `This implies that ${CURSOR}` },
];

const structureTemplates: InsertItem[] = [
  { label: "Khung 4 bước", insert: `Given: ${CURSOR}\nTo find: \nReasoning: \nCalculation: \nConclusion: Therefore, ` },
  { label: "Đạo hàm", insert: `First, we calculate the derivative:\n${CURSOR}\nThen, we analyze its sign.\nTherefore, ` },
  { label: "Cực trị", insert: `We solve $f'(x)=0$:\n${CURSOR}\nThen, we determine the sign change of $f'(x)$.\nHence, ` },
  { label: "Phương trình", insert: `We have:\n${CURSOR}\nSolving the equation, we obtain \nTherefore, ` },
  { label: "Bất phương trình", insert: `We consider the sign of ${CURSOR}.\nHence, the solution set is ` },
  { label: "Hình học", insert: `Using ${CURSOR}, we have \nHence, ` },
  { label: "Vector", insert: `We have the vectors:\n${CURSOR}\nUsing the dot product, ` },
  { label: "Xác suất", insert: `Let ${CURSOR} be the event.\nUsing the probability formula, we have \nTherefore, ` },
];

const accentClasses = {
  emerald: { border: "border-emerald-200", bg: "bg-emerald-50/70", button: "border-emerald-200 text-emerald-800 hover:bg-emerald-50", active: "bg-emerald-600 text-white border-emerald-600", icon: "text-emerald-600" },
  rose: { border: "border-rose-200", bg: "bg-rose-50/60", button: "border-rose-200 text-rose-800 hover:bg-rose-50", active: "bg-rose-600 text-white border-rose-600", icon: "text-rose-600" },
  indigo: { border: "border-indigo-200", bg: "bg-indigo-50/60", button: "border-indigo-200 text-indigo-800 hover:bg-indigo-50", active: "bg-indigo-600 text-white border-indigo-600", icon: "text-indigo-600" },
} as const;

export const MathInputToolbar: React.FC<MathInputToolbarProps> = ({ value, onChange, inputRef, accent = "indigo", showEnglishTemplates = true, defaultOpen = true, compact = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [tab, setTab] = useState<"math" | "english">("math");
  const [query, setQuery] = useState("");
  const classes = accentClasses[accent];

  const visibleGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return mathGroups;
    return mathGroups.map((group) => ({
      ...group,
      items: group.items.filter((item) => `${item.label} ${item.title || ""} ${item.keywords || ""}`.toLowerCase().includes(q)),
    })).filter((group) => group.items.length > 0);
  }, [query]);

  const insertSnippet = (rawSnippet: string) => {
    const target = inputRef.current;
    const start = target?.selectionStart ?? value.length;
    const end = target?.selectionEnd ?? start;
    const selection = value.slice(start, end);
    let snippet = rawSnippet.replace(/\{\{selection\}\}/g, selection);
    const markerIndex = snippet.indexOf(CURSOR);
    snippet = snippet.replace(CURSOR, "");
    const next = value.slice(0, start) + snippet + value.slice(end);
    onChange(next);
    const caret = start + (markerIndex >= 0 ? markerIndex : snippet.length);
    requestAnimationFrame(() => {
      const current = inputRef.current;
      if (!current) return;
      current.focus();
      current.setSelectionRange(caret, caret);
    });
  };

  return (
    <div className={`rounded-2xl border ${classes.border} ${classes.bg} overflow-hidden`}>
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => { setOpen(true); setTab("math"); }} className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[10px] font-black ${open && tab === "math" ? classes.active : `bg-white ${classes.button}`}`}>
            <Keyboard className="w-3.5 h-3.5" /> Bảng ký hiệu Toán đầy đủ
          </button>
          {showEnglishTemplates && (
            <button type="button" onClick={() => { setOpen(true); setTab("english"); }} className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[10px] font-black ${open && tab === "english" ? classes.active : `bg-white ${classes.button}`}`}>
              <Languages className="w-3.5 h-3.5" /> Mẫu câu Math English
            </button>
          )}
        </div>
        <button type="button" onClick={() => setOpen((v) => !v)} className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 hover:text-slate-800">
          {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}{open ? "Thu gọn" : "Mở bàn phím"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/80 bg-white/80 p-3">
          {tab === "math" ? (
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Tìm ký hiệu: log, vector, xác suất, tích phân..." className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-[11px] outline-none focus:border-slate-300" />
              </div>
              <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-3 max-h-[430px] overflow-y-auto pr-1`}>
                {visibleGroups.map((group) => (
                  <div key={group.title} className="rounded-xl border border-slate-100 bg-white/70 p-2.5">
                    <div className="mb-1.5 text-[9px] font-black uppercase tracking-wider text-slate-400">{group.title}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item, index) => (
                        <button key={`${group.title}_${item.label}_${index}`} type="button" title={item.title || item.label} onClick={() => insertSnippet(item.insert)} className="min-w-8 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-bold text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50">
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[9px] leading-4 text-slate-400">Bảng này ưu tiên các ký hiệu thường dùng trong Toán THPT lớp 10–12. Ký hiệu LaTeX được chèn tại vị trí con trỏ và vẫn tương thích với trình hiển thị công thức của AI Math Bridge.</div>
            </div>
          ) : (
            <div className="space-y-3">
              <div><div className="mb-1.5 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-slate-400"><Languages className={`w-3 h-3 ${classes.icon}`} /> Mẫu câu nhanh</div><div className="flex flex-wrap gap-1.5">{englishTemplates.map((item) => <button key={item.label} type="button" onClick={() => insertSnippet(item.insert)} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-slate-700 hover:bg-slate-50">{item.label}</button>)}</div></div>
              <div><div className="mb-1.5 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-slate-400"><BookOpen className={`w-3 h-3 ${classes.icon}`} /> Cấu trúc lời giải</div><div className="flex flex-wrap gap-1.5">{structureTemplates.map((item) => <button key={item.label} type="button" onClick={() => insertSnippet(item.insert)} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-black text-slate-700 hover:bg-slate-50">{item.label}</button>)}</div></div>
              <div className="text-[9px] leading-4 text-slate-400">Bấm mẫu để chèn tại vị trí con trỏ. Em có thể sửa tiếp nội dung sau khi chèn.</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
