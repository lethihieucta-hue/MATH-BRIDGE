import { Question, WorkedExample } from '../types';

// =========================================================================
// BỘ BÀI TẬP MẪU CÓ LỜI GIẢI CHI TIẾT THEO TỪNG BÀI HỌC (WORKED EXAMPLES)
// =========================================================================
export const DEFAULT_WORKED_EXAMPLES: Record<string, WorkedExample[]> = {
  // -------------------------------------------------------------------------
  // LỚP 12: CHƯƠNG I - ỨNG DỤNG ĐẠO HÀM
  // -------------------------------------------------------------------------
  'les-12-1-1': [
    {
      id: 'we-12-1-1',
      type_id: 'type-12-1-1',
      type_code: 'Dạng 1. Xét tính đơn điệu của hàm số',
      title_vi: 'Ví dụ 1: Xét tính đơn điệu của hàm số bậc ba',
      title_en: 'Example 1: Monotonicity of a Cubic Polynomial',
      problem_vi: 'Cho hàm số $y = x^3 - 3x^2 - 9x + 5$. Tìm các khoảng đồng biến và nghịch biến của hàm số.',
      problem_en: 'Given $y = x^3 - 3x^2 - 9x + 5$. Find the intervals of increase and decrease.',
      solution_vi: '• Tập xác định: $D = \\mathbb{R}$.\n• Đạo hàm: $y\' = 3x^2 - 6x - 9 = 3(x + 1)(x - 3)$.\n• Cho $y\' = 0 \\iff x = -1$ hoặc $x = 3$.\n• Bảng xét dấu $y\'$:\n  - $y\' > 0$ trên $(-\\infty; -1)$ và $(3; +\\infty) \\implies$ hàm số đồng biến trên các khoảng đó.\n  - $y\' < 0$ trên $(-1; 3) \\implies$ hàm số nghịch biến trên khoảng $(-1; 3)$.',
      solution_en: '• Domain: $D = \\mathbb{R}$. Derivative: $y\' = 3(x + 1)(x - 3) = 0 \\iff x = -1, x = 3$.\n• The function is strictly increasing on $(-\\infty, -1)$ and $(3, +\\infty)$, and strictly decreasing on $(-1, 3)$.',
    },
    {
      id: 'we-12-1-2',
      type_id: 'type-12-1-2',
      type_code: 'Dạng 2. Tìm cực trị của hàm số',
      title_vi: 'Ví dụ 2: Tìm điểm cực đại và cực tiểu của hàm phân thức',
      title_en: 'Example 2: Local Extrema of Rational Function',
      problem_vi: 'Tìm toạ độ các điểm cực trị của đồ thị hàm số $y = \\frac{x^2 + 2x + 2}{x + 1}$.',
      problem_en: 'Find the coordinates of the local extrema of the curve $y = \\frac{x^2 + 2x + 2}{x + 1}$.',
      solution_vi: '• Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.\n• Viết lại: $y = x + 1 + \\frac{1}{x + 1} \\implies y\' = 1 - \\frac{1}{(x + 1)^2} = \\frac{(x+1)^2 - 1}{(x+1)^2} = \\frac{x(x + 2)}{(x + 1)^2}$.\n• $y\' = 0 \\iff x = 0$ hoặc $x = -2$.\n• Điểm cực đại $M(-2; -2)$ và điểm cực tiểu $N(0; 2)$.',
      solution_en: '• Domain: $D = \\mathbb{R} \\setminus \\{-1\\}$. Derivative: $y\' = \\frac{x(x+2)}{(x+1)^2} = 0 \\iff x = 0, x = -2$.\n• Local maximum at $M(-2, -2)$ and local minimum at $N(0, 2)$.',
    },
  ],

  'les-12-1-2': [
    {
      id: 'we-12-2-1',
      type_id: 'type-12-2-1',
      type_code: 'Dạng 1. Tìm GTLN - GTNN trên đoạn',
      title_vi: 'Ví dụ 1: Tìm GTLN và GTNN của hàm số trên đoạn',
      title_en: 'Example 1: Absolute Extrema on a Closed Interval',
      problem_vi: 'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$.',
      problem_en: 'Find the absolute maximum and minimum values of $f(x) = x^4 - 2x^2 + 3$ on $[0, 2]$.',
      solution_vi: '• Đạo hàm: $f\'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 4x(x - 1)(x + 1)$.\n• Trên khoảng $(0; 2)$, $f\'(x) = 0 \\iff x = 1$.\n• Tính các giá trị:\n  - $f(0) = 3$\n  - $f(1) = 1 - 2 + 3 = 2$\n  - $f(2) = 16 - 8 + 3 = 11$.\n• Vậy $\\max_{[0; 2]} f(x) = 11$ (tại $x = 2$) và $\\min_{[0; 2]} f(x) = 2$ (tại $x = 1$).',
      solution_en: '• Derivative: $f\'(x) = 4x(x-1)(x+1) = 0 \\implies x = 1 \\in (0, 2)$.\n• Evaluate: $f(0) = 3, f(1) = 2, f(2) = 11$.\n• Therefore, $\\max_{[0, 2]} f(x) = 11$ at $x = 2$, and $\\min_{[0, 2]} f(x) = 2$ at $x = 1$.',
    },
    {
      id: 'we-12-2-3',
      type_id: 'type-12-2-3',
      type_code: 'Dạng 3 (Ứng dụng thực tế). Tối ưu hoá thể tích hộp',
      title_vi: 'Ví dụ 2 (Ứng dụng thực tế): Cắt góc tôn làm hộp có thể tích lớn nhất',
      title_en: 'Example 2 (Real-world): Open Box Volume Optimization',
      problem_vi: 'Người ta muốn làm một chiếc hộp hình hộp chữ nhật không nắp từ tấm tôn hình vuông cạnh $60\\text{ cm}$ bằng cách cắt bỏ 4 hình vuông nhỏ cạnh $x\\text{ cm}$ ở 4 góc rồi gập mép lên. Tìm $x$ để thể tích khối hộp lớn nhất.',
      problem_en: 'An open-top rectangular box is formed from a square sheet of side $60\\text{ cm}$ by cutting equal squares of side $x\\text{ cm}$ from each corner and folding up the sides. Find $x$ to maximize volume.',
      solution_vi: '• Chiều cao hộp là $x$ ($0 < x < 30$), đáy là hình vuông cạnh $60 - 2x$.\n• Thể tích: $V(x) = x(60 - 2x)^2 = 4x(30 - x)^2 = 4(x^3 - 60x^2 + 900x)$.\n• Đạo hàm: $V\'(x) = 12(x^2 - 40x + 300) = 12(x - 10)(x - 30)$.\n• Cho $V\'(x) = 0$ với $0 < x < 30 \\implies x = 10\\text{ cm}$.\n• Thể tích cực đại: $V(10) = 10 \\cdot 40^2 = 16000\\text{ cm}^3 = 16\\text{ lít}$.',
      solution_en: '• Height is $x$ ($0 < x < 30$), base is $(60-2x)^2$. $V(x) = 4(x^3 - 60x^2 + 900x)$.\n• $V\'(x) = 12(x-10)(x-30) = 0 \\iff x = 10\\text{ cm}$. Maximum volume is $16000\\text{ cm}^3$.',
    },
  ],

  'les-12-1-3': [
    {
      id: 'we-12-3-1',
      type_id: 'type-12-3-1',
      type_code: 'Dạng 1. Tìm tiệm cận đứng và tiệm cận ngang',
      title_vi: 'Ví dụ 1: Tìm tiệm cận của hàm phân thức bậc nhất',
      title_en: 'Example 1: Asymptotes of Linear Rational Function',
      problem_vi: 'Tìm phương trình các đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$.',
      problem_en: 'Find the vertical and horizontal asymptotes of $y = \\frac{3x - 1}{x + 2}$.',
      solution_vi: '• Tiệm cận đứng: $x = -2$ (vì $\\lim_{x \\to -2^+} y = -\\infty$).\n• Tiệm cận ngang: $y = 3$ (vì $\\lim_{x \\to \\pm\\infty} y = 3$).',
      solution_en: '• Vertical asymptote: $x = -2$ (since $\\lim_{x \\to -2^+} y = -\\infty$).\n• Horizontal asymptote: $y = 3$ (since $\\lim_{x \\to \\pm\\infty} y = 3$).',
    },
    {
      id: 'we-12-3-2',
      type_id: 'type-12-3-2',
      type_code: 'Dạng 2. Tiệm cận xiên của hàm phân thức bậc 2 / bậc 1',
      title_vi: 'Ví dụ 2: Tìm tiệm cận xiên',
      title_en: 'Example 2: Oblique Asymptote',
      problem_vi: 'Tìm phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 3x - 2}{x - 1}$.',
      problem_en: 'Find the oblique asymptote of $y = \\frac{x^2 + 3x - 2}{x - 1}$.',
      solution_vi: '• Chia đa thức: $y = (x + 4) + \\frac{2}{x - 1}$.\n• Vì $\\lim_{x \\to \\pm\\infty} [y - (x + 4)] = \\lim_{x \\to \\pm\\infty} \\frac{2}{x - 1} = 0$, nên đường thẳng $y = x + 4$ là tiệm cận xiên của đồ thị.',
      solution_en: '• Polynomial division: $y = (x + 4) + \\frac{2}{x - 1}$.\n• Oblique asymptote is the line $y = x + 4$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 12: CHƯƠNG II & V - VECTƠ & HỆ TOẠ ĐỘ OXYZ
  // -------------------------------------------------------------------------
  'les-12-2-1': [
    {
      id: 'we-12-6-1',
      type_id: 'type-12-6-1',
      type_code: 'Dạng 1. Các phép toán vectơ trong không gian',
      title_vi: 'Ví dụ 1: Áp dụng quy tắc hình hộp',
      title_en: 'Example 1: Parallelepiped Vector Addition Rule',
      problem_vi: 'Cho hình hộp chữ nhật $ABCD.A\'B\'C\'D\'$. Chứng minh rằng $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
      problem_en: 'For a rectangular box $ABCD.A\'B\'C\'D\'$, prove that $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
      solution_vi: '• Xét đáy $ABCD$ là hình chữ nhật: $\\vec{AB} + \\vec{AD} = \\vec{AC}$ (theo quy tắc hình bình hành).\n• Xét mặt chéo $ACC\'A\'$ là hình bình hành: $\\vec{AC} + \\vec{AA\'} = \\vec{AC\'}$.\n• Do đó: $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$ (đpcm).',
      solution_en: '• In base $ABCD$: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.\n• In diagonal plane $ACC\'A\'$: $\\vec{AC} + \\vec{AA\'} = \\vec{AC\'}$. Thus $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
    },
  ],

  'les-12-2-2': [
    {
      id: 'we-12-7-1',
      type_id: 'type-12-7-1',
      type_code: 'Dạng 1. Toạ độ điểm và vectơ trong Oxyz',
      title_vi: 'Ví dụ 1: Tìm toạ độ trung điểm và trọng tâm trong không gian',
      title_en: 'Example 1: Midpoint and Centroid in 3D Space',
      problem_vi: 'Trong không gian $Oxyz$, cho $A(1; 2; -1)$, $B(3; 0; 5)$, $C(2; 4; 2)$. Tìm toạ độ trung điểm $M$ của $AB$ và trọng tâm $G$ của tam giác $ABC$.',
      problem_en: 'In space $Oxyz$, given $A(1, 2, -1)$, $B(3, 0, 5)$, $C(2, 4, 2)$. Find the midpoint $M$ of $AB$ and the centroid $G$ of $\\triangle ABC$.',
      solution_vi: '• Trung điểm $M$ của $AB$: $M\\left(\\frac{1+3}{2}; \\frac{2+0}{2}; \\frac{-1+5}{2}\\right) = M(2; 1; 2)$.\n• Trọng tâm $G$ của $\\triangle ABC$: $G\\left(\\frac{1+3+2}{3}; \\frac{2+0+4}{3}; \\frac{-1+5+2}{3}\\right) = G(2; 2; 2)$.',
      solution_en: '• Midpoint $M = (2, 1, 2)$.\n• Centroid $G = (2, 2, 2)$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 12: CHƯƠNG IV - NGUYÊN HÀM VÀ TÍCH PHÂN
  // -------------------------------------------------------------------------
  'les-12-4-1': [
    {
      id: 'we-12-4-1',
      type_id: 'type-12-4-1',
      type_code: 'Dạng 1. Tìm nguyên hàm cơ bản',
      title_vi: 'Ví dụ 1: Tìm họ nguyên hàm của hàm số lượng giác & đa thức',
      title_en: 'Example 1: Antiderivatives of Polynomial and Trig Functions',
      problem_vi: 'Tìm nguyên hàm $F(x) = \\int (3x^2 - 4x + \\cos x) \\, dx$ biết $F(0) = 5$.',
      problem_en: 'Find the antiderivative $F(x) = \\int (3x^2 - 4x + \\cos x) \\, dx$ given $F(0) = 5$.',
      solution_vi: '• $F(x) = x^3 - 2x^2 + \\sin x + C$.\n• Vì $F(0) = 5 \\implies 0 - 0 + \\sin 0 + C = 5 \\implies C = 5$.\n• Vậy $F(x) = x^3 - 2x^2 + \\sin x + 5$.',
      solution_en: '• $F(x) = x^3 - 2x^2 + \\sin x + C$. With $F(0) = 5 \\implies C = 5$.\n• Thus $F(x) = x^3 - 2x^2 + \\sin x + 5$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 11: CHƯƠNG VI - HÀM SỐ MŨ VÀ LOGARIT
  // -------------------------------------------------------------------------
  'les-11-6-1': [
    {
      id: 'we-11-6-1',
      type_id: 'type-11-6-1',
      type_code: 'Dạng 1. Rút gọn biểu thức luỹ thừa và logarit',
      title_vi: 'Ví dụ 1: Tính giá trị biểu thức logarit',
      title_en: 'Example 1: Evaluating Logarithmic Expressions',
      problem_vi: 'Tính giá trị biểu thức $P = \\log_2 16 + \\log_3 \\sqrt{27} - \\ln(e^4)$.',
      problem_en: 'Evaluate the expression $P = \\log_2 16 + \\log_3 \\sqrt{27} - \\ln(e^4)$.',
      solution_vi: '• $\\log_2 16 = \\log_2(2^4) = 4$.\n• $\\log_3 \\sqrt{27} = \\log_3(3^{3/2}) = \\frac{3}{2}$.\n• $\\ln(e^4) = 4$.\n• Suy ra $P = 4 + \\frac{3}{2} - 4 = \\frac{3}{2}$.',
      solution_en: '• $\\log_2 16 = 4, \\log_3 \\sqrt{27} = 1.5, \\ln(e^4) = 4 \\implies P = 1.5$.',
    },
  ],

  'les-11-6-2': [
    {
      id: 'we-11-6-2',
      type_id: 'type-11-6-2',
      type_code: 'Dạng 2. Giải phương trình mũ và logarit',
      title_vi: 'Ví dụ 2: Giải phương trình logarit cùng cơ số',
      title_en: 'Example 2: Solving Logarithmic Equations',
      problem_vi: 'Giải phương trình: $\\log_2(x - 1) + \\log_2(x + 1) = 3$.',
      problem_en: 'Solve the equation: $\\log_2(x - 1) + \\log_2(x + 1) = 3$.',
      solution_vi: '• Điều kiện: $\\begin{cases} x - 1 > 0 \\\\ x + 1 > 0 \\end{cases} \\iff x > 1$.\n• Phương trình tương đương: $\\log_2[(x - 1)(x + 1)] = 3 \\iff x^2 - 1 = 2^3 = 8 \\iff x^2 = 9 \\iff x = \\pm 3$.\n• Kết hợp điều kiện $x > 1 \\implies$ nghiệm duy nhất $x = 3$.',
      solution_en: '• Domain: $x > 1$. Equation becomes: $x^2 - 1 = 2^3 = 8 \\implies x^2 = 9 \\implies x = 3$.',
    },
    {
      id: 'we-11-6-3',
      type_id: 'type-11-6-3',
      type_code: 'Dạng 3 (Ứng dụng thực tế). Bài toán độ pH và cường độ động đất',
      title_vi: 'Ví dụ 3 (Ứng dụng thực tế): Tính nồng độ ion $H^+$ từ độ pH dung dịch',
      title_en: 'Example 3 (Real-world): pH Level and Hydrogen Ion Concentration',
      problem_vi: 'Độ pH của dung dịch được tính bởi công thức $\\text{pH} = -\\log[H^+]$, trong đó $[H^+]$ là nồng độ ion hydro tính bằng mol/L. Một mẫu nước chanh có độ $\\text{pH} = 2.4$. Hãy tính nồng độ ion $[H^+]$ trong mẫu nước chanh này.',
      problem_en: 'The pH level of a liquid is defined as $\\text{pH} = -\\log[H^+]$, where $[H^+]$ is hydrogen ion concentration in mol/L. A lemon juice sample has $\\text{pH} = 2.4$. Find its $[H^+]$ concentration.',
      solution_vi: '• Ta có: $-\\log[H^+] = 2.4 \\iff \\log[H^+] = -2.4$.\n• Suy ra: $[H^+] = 10^{-2.4} \\approx 3.98 \\times 10^{-3}\\text{ mol/L}$.',
      solution_en: '• $[H^+] = 10^{-2.4} \\approx 3.98 \\times 10^{-3}$ mol/L.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 11: CHƯƠNG II - DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN
  // -------------------------------------------------------------------------
  'les-11-2-1': [
    {
      id: 'we-11-5-1',
      type_id: 'type-11-5-1',
      type_code: 'Dạng 1. Xét tính tăng, giảm và bị chặn của dãy số',
      title_vi: 'Ví dụ 1: Xét tính tăng/giảm của dãy số phân thức',
      title_en: 'Example 1: Monotonicity of Rational Sequence',
      problem_vi: 'Cho dãy số $(u_n)$ với $u_n = \\frac{2n - 1}{n + 1}$. Chứng minh dãy số $(u_n)$ là dãy số tăng và bị chặn.',
      problem_en: 'Given the sequence $(u_n)$ with $u_n = \\frac{2n - 1}{n + 1}$. Prove that $(u_n)$ is strictly increasing and bounded.',
      solution_vi: '• Xét hiệu $u_{n+1} - u_n = \\frac{2n + 1}{n + 2} - \\frac{2n - 1}{n + 1} = \\frac{3}{(n+2)(n+1)} > 0, \\forall n \\ge 1 \\implies$ dãy số tăng.\n• Mặt khác $u_n = 2 - \\frac{3}{n+1}$. Với $n \\ge 1 \\implies \\frac{1}{2} \\le u_n < 2 \\implies$ dãy số $(u_n)$ bị chặn.',
      solution_en: '• Difference $u_{n+1} - u_n = \\frac{3}{(n+2)(n+1)} > 0 \\implies$ strictly increasing.\n• Range $\\frac{1}{2} \\le u_n < 2 \\implies$ bounded sequence.',
    },
  ],

  'les-11-2-2': [
    {
      id: 'we-11-6-1',
      type_id: 'type-11-6-1',
      type_code: 'Dạng 1. Xác định công sai và số hạng tổng quát của CSC',
      title_vi: 'Ví dụ 1: Tìm số hạng đầu và công sai của cấp số cộng',
      title_en: 'Example 1: Initial Term and Common Difference',
      problem_vi: 'Cho cấp số cộng $(u_n)$ thoả mãn $u_2 + u_5 = 14$ và $u_3 + u_7 = 22$. Tìm $u_1$, công sai $d$ và tính tổng $S_{20}$.',
      problem_en: 'Given an arithmetic progression $(u_n)$ with $u_2 + u_5 = 14$ and $u_3 + u_7 = 22$. Find $u_1$, $d$, and calculate $S_{20}$.',
      solution_vi: '• Hệ: $\\begin{cases} 2u_1 + 5d = 14 \\\\ 2u_1 + 8d = 22 \\end{cases} \\iff d = 2, u_1 = 2$.\n• Tổng: $S_{20} = \\frac{20 \\cdot [2(2) + 19(2)]}{2} = 420$.',
      solution_en: 'Solving yields $u_1 = 2, d = 2$. Sum $S_{20} = 420$.',
    },
  ],

  'les-11-2-3': [
    {
      id: 'we-11-7-1',
      type_id: 'type-11-7-1',
      type_code: 'Dạng 1. Xác định công bội và số hạng tổng quát của CSN',
      title_vi: 'Ví dụ 1: Tìm số hạng và công bội của cấp số nhân',
      title_en: 'Example 1: Common Ratio and General Term of GP',
      problem_vi: 'Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và $u_4 = 24$. Tìm công bội $q$ và tính tổng $S_8$.',
      problem_en: 'Given a geometric progression $(u_n)$ with $u_1 = 3$ and $u_4 = 24$. Find $q$ and calculate $S_8$.',
      solution_vi: '• $u_4 = u_1 \\cdot q^3 \\iff 24 = 3 \\cdot q^3 \\iff q = 2$.\n• $S_8 = \\frac{3(1 - 2^8)}{1 - 2} = 765$.',
      solution_en: '$u_4 = u_1 q^3 \\implies q = 2$. Sum $S_8 = 765$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 10: CHƯƠNG I, II, VI
  // -------------------------------------------------------------------------
  'les-10-1-1': [
    {
      id: 'we-10-1-1',
      type_id: 'type-10-1-1',
      type_code: 'Dạng 1. Xét tính đúng sai của mệnh đề',
      title_vi: 'Ví dụ 1: Phủ định mệnh đề chứa lượng từ',
      title_en: 'Example 1: Negation of Quantified Propositions',
      problem_vi: 'Lập mệnh đề phủ định của mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 - 2x + 3 > 0\"$ và xét tính đúng sai của $P$.',
      problem_en: 'Form the negation of proposition $P: \"\\forall x \\in \\mathbb{R}, x^2 - 2x + 3 > 0\"$ and determine the truth value of $P$.',
      solution_vi: '• Phủ định: $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 - 2x + 3 \\le 0\"$.\n• $x^2 - 2x + 3 = (x-1)^2 + 2 > 0, \\forall x \\implies P$ ĐÚNG, $\\bar{P}$ SAI.',
      solution_en: 'Negation: $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 - 2x + 3 \\le 0\"$. $P$ is TRUE.',
    },
  ],

  'les-10-6-1': [
    {
      id: 'we-10-6-1',
      type_id: 'type-10-6-1',
      type_code: 'Dạng 1. Khảo sát Parabol',
      title_vi: 'Ví dụ 1: Tìm toạ độ đỉnh của Parabol',
      title_en: 'Example 1: Parabola Vertex and Axis',
      problem_vi: 'Tìm toạ độ đỉnh và trục đối xứng của parabol $y = -x^2 + 4x - 3$.',
      problem_en: 'Find the vertex and axis of symmetry of $y = -x^2 + 4x - 3$.',
      solution_vi: '• Đỉnh $I(2; 1)$, trục đối xứng $x = 2$. Điểm cao nhất là $(2; 1)$.',
      solution_en: 'Vertex $I(2, 1)$, axis $x = 2$. Maximum is $1$ at $x = 2$.',
    },
  ],
};

// =========================================================================
// NGÂN HÀNG CÂU HỎI TOÀN DIỆN 4 DẠNG THỨC GDPT 2018 (FULL_QUESTION_BANK)
// =========================================================================
export const FULL_QUESTION_BANK: Question[] = [
  // =========================================================================
  // 1. LỚP 12: CHƯƠNG 1 - TÍNH ĐƠN ĐIỆU & CỰC TRỊ (top-12-1-1 / les-12-1-1)
  // =========================================================================
  {
    id: 'q-12-1-tn1',
    topic_id: 'top-12-1-1',
    type_id: 'type-12-1-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Hàm số $y = -x^3 + 3x^2 - 1$ đồng biến trên khoảng nào dưới đây?',
    question_en: 'On which of the following intervals is the function $y = -x^3 + 3x^2 - 1$ strictly increasing?',
    options: [
      { option_key: 'A', content_vi: '$(0; 2)$', content_en: '$(0, 2)$', is_correct: true },
      { option_key: 'B', content_vi: '$(-\\infty; 0)$', content_en: '$(-\\infty, 0)$', is_correct: false },
      { option_key: 'C', content_vi: '$(2; +\\infty)$', content_en: '$(2, +\\infty)$', is_correct: false },
      { option_key: 'D', content_vi: '$(-\\infty; 2)$', content_en: '$(-\\infty, 2)$', is_correct: false },
    ],
    solution_vi: 'Ta có $y\' = -3x^2 + 6x = -3x(x - 2) > 0 \\iff 0 < x < 2$.',
    solution_en: '$y\' = -3x^2 + 6x > 0 \\iff 0 < x < 2$. Strictly increasing on $(0, 2)$.',
    correct_answer: 'A',
    math_skill: 'Xét dấu đạo hàm tìm khoảng đồng biến',
    english_skill: 'Increasing interval of polynomial function',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-1-ds1',
    topic_id: 'top-12-1-1',
    type_id: 'type-12-1-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho hàm số $y = \\frac{2x - 1}{x + 1}$. Xét tính đúng/sai của các mệnh đề sau:',
    question_en: 'Given the rational function $y = \\frac{2x - 1}{x + 1}$. Determine whether each statement is True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.', content_en: 'The domain of the function is $D = \\mathbb{R} \\setminus \\{-1\\}$.', is_correct: true },
      { option_key: 'b', content_vi: 'Đạo hàm $y\' = \\frac{3}{(x + 1)^2} > 0, \\forall x \\ne -1$.', content_en: 'The derivative $y\' = \\frac{3}{(x+1)^2} > 0, \\forall x \\ne -1$.', is_correct: true },
      { option_key: 'c', content_vi: 'Hàm số đồng biến trên toàn bộ $\\mathbb{R}$.', content_en: 'The function is increasing on all real numbers.', is_correct: false },
      { option_key: 'd', content_vi: 'Hàm số không có điểm cực trị.', content_en: 'The function has no local extrema.', is_correct: true },
    ],
    correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
    solution_vi: 'a) Đúng. b) Đúng ($y\' = \\frac{3}{(x+1)^2}$). c) Sai (đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$). d) Đúng.',
    solution_en: 'a-True, b-True, c-False, d-True.',
    math_skill: 'Khảo sát tính đơn điệu hàm phân thức',
    english_skill: 'True/False on rational functions',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-1-tln1',
    topic_id: 'top-12-1-1',
    type_id: 'type-12-1-2',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho hàm số $y = x^3 - 3x^2 + 2$. Tung độ của điểm cực đại của đồ thị hàm số bằng bao nhiêu?',
    question_en: 'For the curve $y = x^3 - 3x^2 + 2$, what is the y-coordinate of the local maximum point?',
    correct_answer: '2',
    solution_vi: '$y\' = 3x^2 - 6x = 0 \\iff x = 0$ hoặc $x = 2$. Tại $x = 0$ hàm số đạt cực đại, tung độ cực đại $y(0) = 2$.',
    solution_en: '$y\' = 3x(x - 2) = 0$. Local max occurs at $x = 0$ with $y(0) = 2$.',
    math_skill: 'Tìm giá trị cực trị của hàm số',
    english_skill: 'Local maximum y-coordinate',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-1-tl1',
    topic_id: 'top-12-1-1',
    type_id: 'type-12-1-3',
    question_type: 'ESSAY',
    format_type: 'TL',
    difficulty: 'HARD',
    language_level: 2,
    question_vi: 'Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m + 2)x - 5$ đồng biến trên khoảng $(-\\infty; +\\infty)$.',
    question_en: 'Find all real values of the parameter $m$ such that $y = \\frac{1}{3}x^3 - mx^2 + (m + 2)x - 5$ is strictly increasing on $(-\\infty, +\\infty)$.',
    correct_answer: '-1 <= m <= 2',
    solution_vi: '• Đạo hàm: $y\' = x^2 - 2mx + (m + 2)$.\n• Hàm số đồng biến trên $\\mathbb{R} \\iff y\' \\ge 0, \\forall x \\in \\mathbb{R} \\iff \\Delta\' = m^2 - (m + 2) \\le 0 \\iff m^2 - m - 2 \\le 0 \\iff -1 \\le m \\le 2$.',
    solution_en: 'Condition: $\\Delta\' = m^2 - m - 2 \\le 0 \\iff -1 \\le m \\le 2$.',
    math_skill: 'Tìm điều kiện tham số m để hàm số đơn điệu trên R',
    english_skill: 'Monotonicity with parameter m',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 2. LỚP 12: CHƯƠNG 1 - GTLN VÀ GTNN (top-12-1-2 / les-12-1-2)
  // =========================================================================
  {
    id: 'q-12-2-tn1',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Giá trị lớn nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$ bằng bao nhiêu?',
    question_en: 'What is the maximum value of $f(x) = x^4 - 2x^2 + 3$ on the interval $[0, 2]$?',
    options: [
      { option_key: 'A', content_vi: '$11$', content_en: '$11$', is_correct: true },
      { option_key: 'B', content_vi: '$3$', content_en: '$3$', is_correct: false },
      { option_key: 'C', content_vi: '$2$', content_en: '$2$', is_correct: false },
      { option_key: 'D', content_vi: '$16$', content_en: '$16$', is_correct: false },
    ],
    solution_vi: '$f\'(x) = 4x(x^2 - 1) = 0 \\iff x = 0, x = 1$. $f(0) = 3, f(1) = 2, f(2) = 11 \\implies \\max = 11$.',
    solution_en: '$f(0) = 3, f(1) = 2, f(2) = 11 \\implies \\max = 11$.',
    correct_answer: 'A',
    math_skill: 'Tìm GTLN trên đoạn',
    english_skill: 'Maximum on closed interval',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-ds1',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho hàm số $y = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$. Xét tính đúng/sai của các mệnh đề sau:',
    question_en: 'Given $y = x + \\frac{4}{x}$ on $(0, +\\infty)$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Đạo hàm $y\' = 1 - \\frac{4}{x^2}$.', content_en: 'The derivative is $y\' = 1 - \\frac{4}{x^2}$.', is_correct: true },
      { option_key: 'b', content_vi: 'Hàm số đạt giá trị nhỏ nhất tại điểm $x = 2$.', content_en: 'The function attains its minimum value at $x = 2$.', is_correct: true },
      { option_key: 'c', content_vi: 'Giá trị nhỏ nhất của hàm số trên $(0; +\\infty)$ bằng $4$.', content_en: 'The minimum value of the function on $(0, +\\infty)$ is $4$.', is_correct: true },
      { option_key: 'd', content_vi: 'Hàm số có giá trị lớn nhất trên $(0; +\\infty)$ bằng $8$.', content_en: 'The maximum value of the function on $(0, +\\infty)$ is $8$.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: 'Theo BĐT Cauchy: $x + \\frac{4}{x} \\ge 2\\sqrt{4} = 4$. Đẳng thức xảy ra khi $x = 2$. Hàm số không có GTLN.',
    solution_en: 'By AM-GM inequality: $\\min = 4$ at $x = 2$. No maximum exists.',
    math_skill: 'Bất đẳng thức Cauchy và GTNN',
    english_skill: 'Minimum of rational function',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tln1',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-3',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'HARD',
    language_level: 2,
    question_vi: 'Từ một tấm tôn hình vuông cạnh $60\\text{ cm}$, người ta cắt 4 góc các hình vuông cạnh $x\\text{ cm}$ để gấp thành hộp không nắp. Giá trị của $x$ (theo cm) để thể tích hộp lớn nhất là bao nhiêu?',
    question_en: 'A square sheet of side $60\\text{ cm}$ has 4 corners of side $x\\text{ cm}$ cut off to fold an open box. What is $x$ (in cm) for maximum volume?',
    correct_answer: '10',
    solution_vi: '$V(x) = 4x(30 - x)^2 \\implies V\'(x) = 12(x - 10)(x - 30) = 0 \\implies x = 10\\text{ cm}$.',
    solution_en: '$V\'(x) = 12(x-10)(x-30) = 0 \\implies x = 10$ cm.',
    math_skill: 'Bài toán tối ưu thể tích thực tế',
    english_skill: 'Volume optimization',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 3. LỚP 12: CHƯƠNG 1 - TIỆM CẬN (top-12-1-3 / les-12-1-3)
  // =========================================================================
  {
    id: 'q-12-3-tn1',
    topic_id: 'top-12-1-3',
    type_id: 'type-12-3-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ có đường tiệm cận ngang là đường thẳng nào?',
    question_en: 'What is the horizontal asymptote of the curve $y = \\frac{2x - 3}{x + 1}$?',
    options: [
      { option_key: 'A', content_vi: '$y = 2$', content_en: '$y = 2$', is_correct: true },
      { option_key: 'B', content_vi: '$x = -1$', content_en: '$x = -1$', is_correct: false },
      { option_key: 'C', content_vi: '$y = -3$', content_en: '$y = -3$', is_correct: false },
      { option_key: 'D', content_vi: '$x = 2$', content_en: '$x = 2$', is_correct: false },
    ],
    solution_vi: '$\\lim_{x \\to \\pm\\infty} \\frac{2x - 3}{x + 1} = 2 \\implies$ Tiệm cận ngang $y = 2$.',
    solution_en: '$\\lim_{x \\to \\pm\\infty} y = 2 \\implies$ Horizontal asymptote $y = 2$.',
    correct_answer: 'A',
    math_skill: 'Tìm tiệm cận ngang',
    english_skill: 'Horizontal asymptote recognition',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-3-tln1',
    topic_id: 'top-12-1-3',
    type_id: 'type-12-3-2',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Đồ thị hàm số $y = \\frac{x^2 + 3x - 1}{x - 2}$ có tiệm cận xiên dạng $y = ax + b$. Tính giá trị của $a + b$.',
    question_en: 'The curve $y = \\frac{x^2 + 3x - 1}{x - 2}$ has an oblique asymptote $y = ax + b$. Calculate $a + b$.',
    correct_answer: '6',
    solution_vi: '$y = (x + 5) + \\frac{9}{x - 2} \\implies a = 1, b = 5 \\implies a + b = 6$.',
    solution_en: 'Division gives $y = x + 5 + \\frac{9}{x-2} \\implies a=1, b=5 \\implies a+b=6$.',
    math_skill: 'Xác định hệ số tiệm cận xiên',
    english_skill: 'Oblique asymptote coefficients',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 4. LỚP 11: CHƯƠNG VI - HÀM SỐ MŨ VÀ LOGARIT (top-11-6-1, top-11-6-2)
  // =========================================================================
  {
    id: 'q-11-6-tn1',
    topic_id: 'top-11-6-1',
    type_id: 'type-11-6-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Với $a$ là số thực dương tuỳ ý, giá trị của biểu thức $\\log_2(a^3)$ bằng bao nhiêu?',
    question_en: 'For any positive real number $a$, what is the value of $\\log_2(a^3)$?',
    options: [
      { option_key: 'A', content_vi: '$3\\log_2 a$', content_en: '$3\\log_2 a$', is_correct: true },
      { option_key: 'B', content_vi: '$\\frac{1}{3}\\log_2 a$', content_en: '$\\frac{1}{3}\\log_2 a$', is_correct: false },
      { option_key: 'C', content_vi: '$3 + \\log_2 a$', content_en: '$3 + \\log_2 a$', is_correct: false },
      { option_key: 'D', content_vi: '$a^3$', content_en: '$a^3$', is_correct: false },
    ],
    solution_vi: 'Áp dụng công thức luỹ thừa của logarit: $\\log_a(x^{\\alpha}) = \\alpha \\log_a x \\implies \\log_2(a^3) = 3\\log_2 a$.',
    solution_en: 'Power property of logarithms: $\\log_2(a^3) = 3\\log_2 a$.',
    correct_answer: 'A',
    math_skill: 'Công thức biến đổi logarit',
    english_skill: 'Logarithm power rule',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-6-tn2',
    topic_id: 'top-11-6-2',
    type_id: 'type-11-6-2',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Nghiệm của phương trình $2^{2x - 1} = 32$ là:',
    question_en: 'The solution of the exponential equation $2^{2x - 1} = 32$ is:',
    options: [
      { option_key: 'A', content_vi: '$x = 3$', content_en: '$x = 3$', is_correct: true },
      { option_key: 'B', content_vi: '$x = 2$', content_en: '$x = 2$', is_correct: false },
      { option_key: 'C', content_vi: '$x = \\frac{5}{2}$', content_en: '$x = 5/2$', is_correct: false },
      { option_key: 'D', content_vi: '$x = 4$', content_en: '$x = 4$', is_correct: false },
    ],
    solution_vi: '$2^{2x - 1} = 2^5 \\iff 2x - 1 = 5 \\iff 2x = 6 \\iff x = 3$.',
    solution_en: '$2^{2x - 1} = 2^5 \\implies 2x - 1 = 5 \\implies x = 3$.',
    correct_answer: 'A',
    math_skill: 'Giải phương trình mũ cơ bản',
    english_skill: 'Exponential equation solving',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-6-ds1',
    topic_id: 'top-11-6-2',
    type_id: 'type-11-6-2',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho phương trình $\\log_3(x - 2) + \\log_3(x + 6) = 2$. Xét tính đúng/sai của các khẳng định sau:',
    question_en: 'Given $\\log_3(x - 2) + \\log_3(x + 6) = 2$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Điều kiện xác định của phương trình là $x > 2$.', content_en: 'The domain condition of the equation is $x > 2$.', is_correct: true },
      { option_key: 'b', content_vi: 'Phương trình biến đổi về $(x - 2)(x + 6) = 9$.', content_en: 'The equation simplifies to $(x - 2)(x + 6) = 9$.', is_correct: true },
      { option_key: 'c', content_vi: 'Phương trình có hai nghiệm phân biệt là $x = 3$ và $x = -7$.', content_en: 'The equation has two solutions: $x = 3$ and $x = -7$.', is_correct: false },
      { option_key: 'd', content_vi: 'Phương trình có đúng một nghiệm duy nhất $x = 3$.', content_en: 'The equation has exactly one unique solution $x = 3$.', is_correct: true },
    ],
    correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
    solution_vi: 'ĐK: $x > 2$. $x^2 + 4x - 12 = 9 \\iff x^2 + 4x - 21 = 0 \\iff x = 3$ (nhận) hoặc $x = -7$ (loại vì $x > 2$).',
    solution_en: 'Condition $x > 2$. $x^2 + 4x - 21 = 0 \\implies x = 3$ (valid) or $x = -7$ (rejected).',
    math_skill: 'Giải phương trình logarit',
    english_skill: 'Logarithmic equation analysis',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-6-tln1',
    topic_id: 'top-11-6-3',
    type_id: 'type-11-6-3',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Số lượng vi khuẩn ban đầu là 1000 con, sau mỗi giờ số lượng tăng gấp đôi theo công thức $N(t) = 1000 \\cdot 2^t$. Sau bao nhiêu giờ thì số lượng vi khuẩn đạt 64000 con?',
    question_en: 'A bacterial culture starts with 1000 bacteria and doubles every hour: $N(t) = 1000 \\cdot 2^t$. How many hours will it take to reach 64000 bacteria?',
    correct_answer: '6',
    solution_vi: '$1000 \\cdot 2^t = 64000 \\iff 2^t = 64 = 2^6 \\iff t = 6\\text{ giờ}$.',
    solution_en: '$1000 \\cdot 2^t = 64000 \\implies 2^t = 64 \\implies t = 6$ hours.',
    math_skill: 'Bài toán tăng trưởng hàm số mũ',
    english_skill: 'Exponential growth model',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 5. LỚP 11: CHƯƠNG II - DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN
  // =========================================================================
  {
    id: 'q-11-2-tn1',
    topic_id: 'top-11-2-1',
    type_id: 'type-11-5-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\frac{2n - 1}{n + 1}$. Giá trị của $u_4$ bằng:',
    question_en: 'For the sequence $(u_n)$ with $u_n = \\frac{2n - 1}{n + 1}$, the 4th term $u_4$ is:',
    options: [
      { option_key: 'A', content_vi: '$\\frac{7}{5}$', content_en: '$7/5$', is_correct: true },
      { option_key: 'B', content_vi: '$\\frac{4}{5}$', content_en: '$4/5$', is_correct: false },
      { option_key: 'C', content_vi: '$\\frac{3}{5}$', content_en: '$3/5$', is_correct: false },
      { option_key: 'D', content_vi: '$2$', content_en: '$2$', is_correct: false },
    ],
    solution_vi: '$u_4 = \\frac{2(4) - 1}{4 + 1} = \\frac{7}{5}$.',
    solution_en: '$u_4 = \\frac{8 - 1}{5} = \\frac{7}{5}$.',
    correct_answer: 'A',
    math_skill: 'Tính số hạng dãy số',
    english_skill: 'Evaluating sequence terms',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-2-tn2',
    topic_id: 'top-11-2-2',
    type_id: 'type-11-6-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và công sai $d = 3$. Số hạng thứ 6 của cấp số cộng là:',
    question_en: 'For an arithmetic progression $(u_n)$ with first term $u_1 = 4$ and common difference $d = 3$, the 6th term is:',
    options: [
      { option_key: 'A', content_vi: '$19$', content_en: '$19$', is_correct: true },
      { option_key: 'B', content_vi: '$22$', content_en: '$22$', is_correct: false },
      { option_key: 'C', content_vi: '$16$', content_en: '$16$', is_correct: false },
      { option_key: 'D', content_vi: '$20$', content_en: '$20$', is_correct: false },
    ],
    solution_vi: '$u_6 = u_1 + 5d = 4 + 5(3) = 19$.',
    solution_en: '$u_6 = u_1 + 5d = 4 + 15 = 19$.',
    correct_answer: 'A',
    math_skill: 'Tìm số hạng cấp số cộng',
    english_skill: 'Arithmetic progression general term',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-2-ds1',
    topic_id: 'top-11-2-2',
    type_id: 'type-11-6-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = 5$. Xét tính đúng/sai của các mệnh đề sau:',
    question_en: 'Given an arithmetic progression $(u_n)$ with $u_1 = 2$ and $d = 5$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Số hạng tổng quát là $u_n = 5n - 3$.', content_en: 'General term is $u_n = 5n - 3$.', is_correct: true },
      { option_key: 'b', content_vi: 'Số $102$ là một số hạng của cấp số cộng.', content_en: 'The number 102 is a term of the sequence.', is_correct: true },
      { option_key: 'c', content_vi: 'Tổng của 10 số hạng đầu là $S_{10} = 245$.', content_en: 'The sum of the first 10 terms is $S_{10} = 245$.', is_correct: true },
      { option_key: 'd', content_vi: 'Dãy số $(u_n)$ là một dãy số giảm.', content_en: 'The sequence $(u_n)$ is strictly decreasing.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: 'a) $u_n = 2 + (n-1)5 = 5n - 3$. b) $5n - 3 = 102 \\iff 5n = 105 \\iff n = 21$. c) $S_{10} = \\frac{10(2(2) + 9(5))}{2} = 245$. d) Sai (dãy tăng vì $d = 5 > 0$).',
    solution_en: 'a-True, b-True, c-True, d-False (increasing since $d=5>0$).',
    math_skill: 'Khảo sát cấp số cộng',
    english_skill: 'True/False on arithmetic progressions',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-2-tln1',
    topic_id: 'top-11-2-3',
    type_id: 'type-11-7-1',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Tính tổng của 6 số hạng đầu tiên $S_6$.',
    question_en: 'For a geometric progression $(u_n)$ with $u_1 = 3$ and $q = 2$, compute the sum of the first 6 terms $S_6$.',
    correct_answer: '189',
    solution_vi: '$S_6 = \\frac{u_1(1 - q^6)}{1 - q} = \\frac{3(1 - 64)}{1 - 2} = 3 \\cdot 63 = 189$.',
    solution_en: '$S_6 = \\frac{3(1 - 64)}{-1} = 189$.',
    math_skill: 'Tổng cấp số nhân',
    english_skill: 'Geometric progression sum',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 6. LỚP 10: CHƯƠNG I, II, VI
  // =========================================================================
  {
    id: 'q-10-1-tn1',
    topic_id: 'top-10-1-1',
    type_id: 'type-10-1-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Mệnh đề nào sau đây là mệnh đề ĐÚNG?',
    question_en: 'Which of the following propositions is TRUE?',
    options: [
      { option_key: 'A', content_vi: '$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$', content_en: '$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$', is_correct: true },
      { option_key: 'B', content_vi: '$\\exists x \\in \\mathbb{R}, x^2 < 0$', content_en: '$\\exists x \\in \\mathbb{R}, x^2 < 0$', is_correct: false },
      { option_key: 'C', content_vi: '$\\forall n \\in \\mathbb{N}, n^2 > n$', content_en: '$\\forall n \\in \\mathbb{N}, n^2 > n$', is_correct: false },
      { option_key: 'D', content_vi: '$\\pi > 4$', content_en: '$\\pi > 4$', is_correct: false },
    ],
    solution_vi: 'Vì $x^2 \\ge 0, \\forall x \\implies x^2 + 1 \\ge 1 > 0$ luôn đúng.',
    solution_en: 'Since $x^2 \\ge 0$ for all real $x$, $x^2 + 1 \\ge 1 > 0$ is always true.',
    correct_answer: 'A',
    math_skill: 'Xét tính đúng sai của mệnh đề',
    english_skill: 'Truth value of propositions',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-10-6-tn1',
    topic_id: 'top-10-6-1',
    type_id: 'type-10-6-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Toạ độ đỉnh của Parabol $y = x^2 - 4x + 3$ là điểm nào?',
    question_en: 'What are the coordinates of the vertex of the parabola $y = x^2 - 4x + 3$?',
    options: [
      { option_key: 'A', content_vi: '$I(2; -1)$', content_en: '$I(2, -1)$', is_correct: true },
      { option_key: 'B', content_vi: '$I(-2; 15)$', content_en: '$I(-2, 15)$', is_correct: false },
      { option_key: 'C', content_vi: '$I(4; 3)$', content_en: '$I(4, 3)$', is_correct: false },
      { option_key: 'D', content_vi: '$I(2; 3)$', content_en: '$I(2, 3)$', is_correct: false },
    ],
    solution_vi: '$x_I = -\\frac{b}{2a} = 2, y_I = 2^2 - 4(2) + 3 = -1 \\implies I(2; -1)$.',
    solution_en: 'Vertex $x = 2, y = -1 \\implies I(2, -1)$.',
    correct_answer: 'A',
    math_skill: 'Tìm toạ độ đỉnh Parabol',
    english_skill: 'Parabola vertex',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
];

// =========================================================================
// HELPER: LẤY CÂU HỎI THEO BÀI HỌC VỚI FALLBACK THÔNG MINH
// =========================================================================
export function getQuestionsForLesson(lessonId: string, topicId?: string): Question[] {
  // 1. Exact match by topic_id or lessonId pattern
  let matches = FULL_QUESTION_BANK.filter((q) => {
    if (topicId && q.topic_id === topicId) return true;
    if (lessonId && q.id && q.id.includes(lessonId.replace('les-', 'q-'))) return true;
    return false;
  });

  if (matches.length > 0) return matches;

  // 2. Keyword / prefix match
  if (lessonId.includes('12-1') || (topicId && topicId.includes('12-1'))) {
    matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.startsWith('top-12-1'));
  } else if (lessonId.includes('12-2') || (topicId && topicId.includes('12-2'))) {
    matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.startsWith('top-12-2'));
  } else if (lessonId.includes('11-6') || (topicId && topicId.includes('11-6'))) {
    matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.startsWith('top-11-6'));
  } else if (lessonId.includes('11-2') || (topicId && topicId.includes('11-2'))) {
    matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.startsWith('top-11-2'));
  } else if (lessonId.includes('10-1') || (topicId && topicId.includes('10-1'))) {
    matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.startsWith('top-10-1'));
  } else if (lessonId.includes('10-6') || (topicId && topicId.includes('10-6'))) {
    matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.startsWith('top-10-6'));
  }

  if (matches.length > 0) return matches;

  // 3. Fallback to Grade questions
  if (lessonId.includes('-12-') || (topicId && topicId.includes('-12-'))) {
    return FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('-12-'));
  } else if (lessonId.includes('-11-') || (topicId && topicId.includes('-11-'))) {
    return FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('-11-'));
  } else if (lessonId.includes('-10-') || (topicId && topicId.includes('-10-'))) {
    return FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('-10-'));
  }

  return FULL_QUESTION_BANK.slice(0, 4);
}

// =========================================================================
// HELPER: LẤY BÀI TẬP MẪU THEO BÀI HỌC VỚI FALLBACK THÔNG MINH
// =========================================================================
export function getWorkedExamplesForLesson(lessonId: string): WorkedExample[] {
  if (DEFAULT_WORKED_EXAMPLES[lessonId] && DEFAULT_WORKED_EXAMPLES[lessonId].length > 0) {
    return DEFAULT_WORKED_EXAMPLES[lessonId];
  }

  // Fallback by lesson category
  if (lessonId.startsWith('les-12-1')) {
    return DEFAULT_WORKED_EXAMPLES['les-12-1-1'] || [];
  }
  if (lessonId.startsWith('les-12-2')) {
    return DEFAULT_WORKED_EXAMPLES['les-12-2-1'] || [];
  }
  if (lessonId.startsWith('les-11-6')) {
    return DEFAULT_WORKED_EXAMPLES['les-11-6-1'] || [];
  }
  if (lessonId.startsWith('les-11-2')) {
    return DEFAULT_WORKED_EXAMPLES['les-11-2-1'] || [];
  }
  if (lessonId.startsWith('les-10-1')) {
    return DEFAULT_WORKED_EXAMPLES['les-10-1-1'] || [];
  }
  if (lessonId.startsWith('les-10-6')) {
    return DEFAULT_WORKED_EXAMPLES['les-10-6-1'] || [];
  }

  return DEFAULT_WORKED_EXAMPLES['les-12-1-1'] || [];
}
