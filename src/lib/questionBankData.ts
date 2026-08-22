import { Question, WorkedExample } from '../types';

// =========================================================================
// BỘ BÀI TẬP MẪU CÓ LỜI GIẢI CHI TIẾT THEO TỪNG BÀI HỌC (WORKED EXAMPLES)
// =========================================================================
export const DEFAULT_WORKED_EXAMPLES: Record<string, WorkedExample[]> = {
  // -------------------------------------------------------------------------
  // LỚP 12: CHƯƠNG I - ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT HÀM SỐ
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
      solution_vi: '• TXĐ: $D = \\mathbb{R}$. Đạo hàm: $y\' = 3x^2 - 6x - 9 = 3(x + 1)(x - 3)$.\n• $y\' = 0 \\iff x = -1$ hoặc $x = 3$.\n• Hàm số đồng biến trên $(-\\infty; -1)$ và $(3; +\\infty)$; nghịch biến trên $(-1; 3)$.',
      solution_en: '• Domain: $D = \\mathbb{R}$. Derivative: $y\' = 3(x + 1)(x - 3) = 0 \\iff x = -1, x = 3$.\n• Strictly increasing on $(-\\infty, -1)$ and $(3, +\\infty)$; strictly decreasing on $(-1, 3)$.',
    },
    {
      id: 'we-12-1-2',
      type_id: 'type-12-1-2',
      type_code: 'Dạng 2. Tìm cực trị của hàm số',
      title_vi: 'Ví dụ 2: Tìm toạ độ điểm cực trị',
      title_en: 'Example 2: Local Extrema of Rational Function',
      problem_vi: 'Tìm toạ độ các điểm cực trị của đồ thị hàm số $y = \\frac{x^2 + 2x + 2}{x + 1}$.',
      problem_en: 'Find the coordinates of the local extrema of $y = \\frac{x^2 + 2x + 2}{x + 1}$.',
      solution_vi: '• $y = x + 1 + \\frac{1}{x + 1} \\implies y\' = 1 - \\frac{1}{(x + 1)^2} = \\frac{x(x + 2)}{(x + 1)^2} = 0 \\iff x = 0, x = -2$.\n• Điểm cực đại $M(-2; -2)$ và điểm cực tiểu $N(0; 2)$.',
      solution_en: '• $y\' = \\frac{x(x+2)}{(x+1)^2} = 0 \\iff x = 0, x = -2$. Local max $M(-2, -2)$, local min $N(0, 2)$.',
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
      problem_en: 'Find the absolute maximum and minimum of $f(x) = x^4 - 2x^2 + 3$ on $[0, 2]$.',
      solution_vi: '• $f\'(x) = 4x(x^2 - 1) = 0 \\implies x = 1 \\in (0; 2)$.\n• $f(0) = 3, f(1) = 2, f(2) = 11$.\n• Vậy $\\max_{[0; 2]} f(x) = 11$ tại $x = 2$, và $\\min_{[0; 2]} f(x) = 2$ tại $x = 1$.',
      solution_en: '• $f(0) = 3, f(1) = 2, f(2) = 11 \\implies \\max = 11$ at $x = 2$, $\\min = 2$ at $x = 1$.',
    },
    {
      id: 'we-12-2-3',
      type_id: 'type-12-2-3',
      type_code: 'Dạng 3 (Ứng dụng thực tế). Tối ưu hoá thể tích hộp',
      title_vi: 'Ví dụ 2 (Ứng dụng thực tế): Cắt góc tôn làm hộp có thể tích lớn nhất',
      title_en: 'Example 2 (Real-world): Box Volume Optimization',
      problem_vi: 'Người ta muốn làm một chiếc hộp hình hộp chữ nhật không nắp từ tấm tôn vuông cạnh $60\\text{ cm}$ bằng cách cắt 4 góc các hình vuông cạnh $x\\text{ cm}$ rồi gập mép. Tìm $x$ để thể tích khối hộp lớn nhất.',
      problem_en: 'A square metal sheet of side $60\\text{ cm}$ has 4 congruent squares of side $x$ cut from corners to form an open box. Find $x$ to maximize volume.',
      solution_vi: '• Thể tích: $V(x) = x(60 - 2x)^2 = 4x(30 - x)^2$.\n• $V\'(x) = 12(x - 10)(x - 30) = 0 \\implies x = 10\\text{ cm}$ ($0 < x < 30$).\n• Thể tích cực đại: $V(10) = 16000\\text{ cm}^3 = 16\\text{ lít}$.',
      solution_en: '$V(x) = 4x(30-x)^2 \\implies V\'(x) = 0 \\iff x = 10\\text{ cm}$. Maximum volume is $16000\\text{ cm}^3$.',
    },
  ],

  'les-12-1-3': [
    {
      id: 'we-12-3-1',
      type_id: 'type-12-3-1',
      type_code: 'Dạng 1. Tìm tiệm cận đứng và tiệm cận ngang',
      title_vi: 'Ví dụ 1: Tìm tiệm cận của hàm phân thức bậc nhất',
      title_en: 'Example 1: Rational Function Asymptotes',
      problem_vi: 'Tìm phương trình các đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$.',
      problem_en: 'Find the vertical and horizontal asymptotes of $y = \\frac{3x - 1}{x + 2}$.',
      solution_vi: '• Tiệm cận đứng: $x = -2$ (vì $\\lim_{x \\to -2^+} y = -\\infty$).\n• Tiệm cận ngang: $y = 3$ (vì $\\lim_{x \\to \\pm\\infty} y = 3$).',
      solution_en: 'Vertical asymptote $x = -2$; horizontal asymptote $y = 3$.',
    },
    {
      id: 'we-12-3-2',
      type_id: 'type-12-3-2',
      type_code: 'Dạng 2. Tiệm cận xiên',
      title_vi: 'Ví dụ 2: Tìm tiệm cận xiên',
      title_en: 'Example 2: Oblique Asymptote',
      problem_vi: 'Tìm tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 3x - 2}{x - 1}$.',
      problem_en: 'Find the oblique asymptote of $y = \\frac{x^2 + 3x - 2}{x - 1}$.',
      solution_vi: '• Chia đa thức: $y = x + 4 + \\frac{2}{x - 1}$.\n• Tiệm cận xiên là đường thẳng $y = x + 4$.',
      solution_en: 'Division gives $y = x + 4 + \\frac{2}{x - 1} \\implies$ oblique asymptote is $y = x + 4$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 12: CHƯƠNG II - VECTƠ VÀ HỆ TOẠ ĐỘ TRONG KHÔNG GIAN OXYZ
  // -------------------------------------------------------------------------
  'les-12-2-1': [
    {
      id: 'we-12-6-1',
      type_id: 'type-12-6-1',
      type_code: 'Dạng 1. Quy tắc hình hộp & Vectơ không gian',
      title_vi: 'Ví dụ 1: Áp dụng quy tắc hình hộp',
      title_en: 'Example 1: Parallelepiped Rule',
      problem_vi: 'Cho hình hộp chữ nhật $ABCD.A\'B\'C\'D\'$. Chứng minh rằng $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
      problem_en: 'For rectangular box $ABCD.A\'B\'C\'D\'$, prove that $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
      solution_vi: '• Trong đáy $ABCD$: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.\n• Trong mặt phẳng chéo $ACC\'A\'$: $\\vec{AC} + \\vec{AA\'} = \\vec{AC\'}$.\n• Vậy $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$ (đpcm).',
      solution_en: '$\\vec{AB} + \\vec{AD} = \\vec{AC}$, and $\\vec{AC} + \\vec{AA\'} = \\vec{AC\'}$. Thus $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
    },
  ],

  'les-12-2-2': [
    {
      id: 'we-12-7-1',
      type_id: 'type-12-7-1',
      type_code: 'Dạng 1. Toạ độ điểm và vectơ trong Oxyz',
      title_vi: 'Ví dụ 1: Toạ độ trung điểm và trọng tâm trong Oxyz',
      title_en: 'Example 1: Midpoint and Centroid in 3D Space',
      problem_vi: 'Trong không gian $Oxyz$, cho $A(1; 2; -1)$, $B(3; 0; 5)$, $C(2; 4; 2)$. Tìm toạ độ trung điểm $M$ của $AB$ và trọng tâm $G$ của $\\triangle ABC$.',
      problem_en: 'In $Oxyz$, given $A(1, 2, -1)$, $B(3, 0, 5)$, $C(2, 4, 2)$. Find midpoint $M$ of $AB$ and centroid $G$ of $\\triangle ABC$.',
      solution_vi: '• Trung điểm $M = \\left(\\frac{1+3}{2}; \\frac{2+0}{2}; \\frac{-1+5}{2}\\right) = (2; 1; 2)$.\n• Trọng tâm $G = \\left(\\frac{1+3+2}{3}; \\frac{2+0+4}{3}; \\frac{-1+5+2}{3}\\right) = (2; 2; 2)$.',
      solution_en: 'Midpoint $M(2, 1, 2)$; Centroid $G(2, 2, 2)$.',
    },
  ],

  'les-12-2-3': [
    {
      id: 'we-12-8-1',
      type_id: 'type-12-8-1',
      type_code: 'Dạng 1. Tích vô hướng và tích có hướng',
      title_vi: 'Ví dụ 1: Tính góc giữa hai vectơ trong không gian',
      title_en: 'Example 1: Angle Between Two 3D Vectors',
      problem_vi: 'Trong không gian $Oxyz$, cho $\\vec{u} = (1; 0; 1)$ và $\\vec{v} = (0; 1; 1)$. Tính góc giữa $\\vec{u}$ và $\\vec{v}$.',
      problem_en: 'In space $Oxyz$, given $\\vec{u} = (1, 0, 1)$ and $\\vec{v} = (0, 1, 1)$. Find the angle between $\\vec{u}$ and $\\vec{v}$.',
      solution_vi: '• $\\vec{u} \\cdot \\vec{v} = 1(0) + 0(1) + 1(1) = 1$.\n• $|\\vec{u}| = \\sqrt{1^2+0^2+1^2} = \\sqrt{2}$, $|\\vec{v}| = \\sqrt{0^2+1^2+1^2} = \\sqrt{2}$.\n• $\\cos(\\vec{u}, \\vec{v}) = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies (\\vec{u}, \\vec{v}) = 60^\\circ$.',
      solution_en: '$\\cos(\\vec{u}, \\vec{v}) = \\frac{1}{2} \\implies$ angle is $60^\\circ$.',
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
      title_vi: 'Ví dụ 1: Tìm họ nguyên hàm',
      title_en: 'Example 1: Antiderivatives of Polynomial and Trig Functions',
      problem_vi: 'Tìm nguyên hàm $F(x) = \\int (3x^2 - 4x + \\cos x) \\, dx$ biết $F(0) = 5$.',
      problem_en: 'Find the antiderivative $F(x) = \\int (3x^2 - 4x + \\cos x) \\, dx$ given $F(0) = 5$.',
      solution_vi: '• $F(x) = x^3 - 2x^2 + \\sin x + C$.\n• $F(0) = 5 \\implies C = 5 \\implies F(x) = x^3 - 2x^2 + \\sin x + 5$.',
      solution_en: '$F(x) = x^3 - 2x^2 + \\sin x + 5$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 11: CHƯƠNG VII - ĐẠO HÀM VÀ ỨNG DỤNG (BÀI 12)
  // -------------------------------------------------------------------------
  'les-11-7-1': [
    {
      id: 'we-11-12-1',
      type_id: 'type-11-12-1',
      type_code: 'Dạng 1. Viết phương trình tiếp tuyến của đồ thị hàm số',
      title_vi: 'Ví dụ 1: Viết phương trình tiếp tuyến tại một điểm',
      title_en: 'Example 1: Tangent Line Equation at a Given Point',
      problem_vi: 'Cho hàm số $y = f(x) = x^3 - 3x + 2$. Viết phương trình tiếp tuyến của đồ thị hàm số tại điểm $M(2; 4)$.',
      problem_en: 'Given $y = f(x) = x^3 - 3x + 2$. Write the equation of the tangent line to the curve at $M(2, 4)$.',
      solution_vi: '• Đạo hàm: $f\'(x) = 3x^2 - 3$.\n• Hệ số góc tiếp tuyến tại $x_0 = 2$ là $k = f\'(2) = 3(2^2) - 3 = 9$.\n• Phương trình tiếp tuyến tại $M(2; 4)$:\n  $y = k(x - x_0) + y_0 = 9(x - 2) + 4 = 9x - 14$.\n• Kết luận: Tiếp tuyến là $y = 9x - 14$.',
      solution_en: '• Derivative: $f\'(x) = 3x^2 - 3 \\implies k = f\'(2) = 9$.\n• Tangent equation: $y - 4 = 9(x - 2) \\iff y = 9x - 14$.',
    },
    {
      id: 'we-11-12-2',
      type_id: 'type-11-12-2',
      type_code: 'Dạng 2 (Ứng dụng thực tế). Vận tốc tức thời và gia tốc',
      title_vi: 'Ví dụ 2 (Ứng dụng thực tế): Vận tốc tức thời của vật rơi tự do',
      title_en: 'Example 2 (Real-world): Instantaneous Velocity of Falling Object',
      problem_vi: 'Một vật chuyển động thẳng có phương trình quãng đường $s(t) = 3t^2 + 2t$ (trong đó $s$ tính bằng mét, $t$ tính bằng giây). Hãy tính vận tốc tức thời của vật tại thời điểm $t = 5\\text{ s}$.',
      problem_en: 'An object moves along a line with position function $s(t) = 3t^2 + 2t$ ($s$ in meters, $t$ in seconds). Find the instantaneous velocity at $t = 5\\text{ s}$.',
      solution_vi: '• Vận tốc tức thời $v(t) = s\'(t) = 6t + 2$.\n• Tại thời điểm $t = 5\\text{ s}$: $v(5) = 6(5) + 2 = 32\\text{ m/s}$.',
      solution_en: '• Velocity $v(t) = s\'(t) = 6t + 2$.\n• At $t = 5\\text{ s}$: $v(5) = 32\\text{ m/s}$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 11: CHƯƠNG VI - HÀM SỐ MŨ VÀ LOGARIT (BÀI 11)
  // -------------------------------------------------------------------------
  'les-11-6-1': [
    {
      id: 'we-11-11-1',
      type_id: 'type-11-11-1',
      type_code: 'Dạng 1. Rút gọn luỹ thừa và logarit',
      title_vi: 'Ví dụ 1: Tính giá trị biểu thức logarit',
      title_en: 'Example 1: Evaluating Logarithmic Expressions',
      problem_vi: 'Tính giá trị biểu thức $P = \\log_2 16 + \\log_3 \\sqrt{27} - \\ln(e^4)$.',
      problem_en: 'Evaluate $P = \\log_2 16 + \\log_3 \\sqrt{27} - \\ln(e^4)$.',
      solution_vi: '• $\\log_2 16 = 4, \\log_3(3^{3/2}) = \\frac{3}{2}, \\ln(e^4) = 4 \\implies P = 4 + 1.5 - 4 = 1.5$.',
      solution_en: '$\\log_2 16 = 4, \\log_3 \\sqrt{27} = 1.5, \\ln(e^4) = 4 \\implies P = 1.5$.',
    },
    {
      id: 'we-11-11-2',
      type_id: 'type-11-11-2',
      type_code: 'Dạng 2 (Ứng dụng thực tế). Nồng độ pH',
      title_vi: 'Ví dụ 2 (Ứng dụng thực tế): Độ pH dung dịch',
      title_en: 'Example 2 (Real-world): pH Level and Hydrogen Ion Concentration',
      problem_vi: 'Độ pH của dung dịch được tính bằng $\\text{pH} = -\\log[H^+]$. Mẫu nước chanh có $\\text{pH} = 2.4$. Tính nồng độ ion $[H^+]$.',
      problem_en: 'pH is $\\text{pH} = -\\log[H^+]$. A lemon juice sample has $\\text{pH} = 2.4$. Find $[H^+]$.',
      solution_vi: '• $[H^+] = 10^{-2.4} \\approx 3.98 \\times 10^{-3}\\text{ mol/L}$.',
      solution_en: '$[H^+] = 10^{-2.4} \\approx 3.98 \\times 10^{-3}\\text{ mol/L}$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 11: CHƯƠNG II - DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN
  // -------------------------------------------------------------------------
  'les-11-2-1': [
    {
      id: 'we-11-5-1',
      type_id: 'type-11-5-1',
      type_code: 'Dạng 1. Xét tính tăng giảm dãy số',
      title_vi: 'Ví dụ 1: Tính tăng/giảm của dãy số',
      title_en: 'Example 1: Monotonicity of Sequence',
      problem_vi: 'Cho dãy số $(u_n)$ với $u_n = \\frac{2n - 1}{n + 1}$. Chứng minh $(u_n)$ tăng và bị chặn.',
      problem_en: 'Given $u_n = \\frac{2n - 1}{n + 1}$. Prove $(u_n)$ is increasing and bounded.',
      solution_vi: '• $u_{n+1} - u_n = \\frac{3}{(n+2)(n+1)} > 0 \\implies$ dãy số tăng.\n• $0.5 \\le u_n < 2 \\implies$ bị chặn.',
      solution_en: '$u_{n+1} - u_n > 0 \\implies$ increasing; $0.5 \\le u_n < 2 \\implies$ bounded.',
    },
  ],

  'les-11-2-2': [
    {
      id: 'we-11-6-1',
      type_id: 'type-11-6-1',
      type_code: 'Dạng 1. Xác định số hạng và công sai CSC',
      title_vi: 'Ví dụ 1: Tìm số hạng đầu và công sai',
      title_en: 'Example 1: Initial Term and Common Difference of AP',
      problem_vi: 'Cho cấp số cộng $(u_n)$ có $u_2 + u_5 = 14$ và $u_3 + u_7 = 22$. Tìm $u_1$, công sai $d$ và $S_{20}$.',
      problem_en: 'For an AP $(u_n)$ with $u_2 + u_5 = 14, u_3 + u_7 = 22$. Find $u_1, d, S_{20}$.',
      solution_vi: '• $d = 2, u_1 = 2$. Tổng $S_{20} = \\frac{20(4 + 19 \\cdot 2)}{2} = 420$.',
      solution_en: '$u_1 = 2, d = 2, S_{20} = 420$.',
    },
  ],

  'les-11-2-3': [
    {
      id: 'we-11-7-1',
      type_id: 'type-11-7-1',
      type_code: 'Dạng 1. Công bội và tổng CSN',
      title_vi: 'Ví dụ 1: Tìm công bội và tổng CSN',
      title_en: 'Example 1: Common Ratio and Sum of GP',
      problem_vi: 'Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và $u_4 = 24$. Tìm công bội $q$ và $S_8$.',
      problem_en: 'For GP $(u_n)$ with $u_1 = 3, u_4 = 24$. Find $q, S_8$.',
      solution_vi: '• $u_4 = u_1 q^3 \\iff 24 = 3q^3 \\implies q = 2$. $S_8 = \\frac{3(1 - 2^8)}{1 - 2} = 765$.',
      solution_en: '$q = 2, S_8 = 765$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 10: CHƯƠNG I, II, VI
  // -------------------------------------------------------------------------
  'les-10-1-1': [
    {
      id: 'we-10-1-1',
      type_id: 'type-10-1-1',
      type_code: 'Dạng 1. Mệnh đề và phủ định',
      title_vi: 'Ví dụ 1: Phủ định mệnh đề có lượng từ',
      title_en: 'Example 1: Negation of Quantified Proposition',
      problem_vi: 'Lập mệnh đề phủ định của $P: \"\\forall x \\in \\mathbb{R}, x^2 - 2x + 3 > 0\"$.',
      problem_en: 'Find the negation of $P: \"\\forall x \\in \\mathbb{R}, x^2 - 2x + 3 > 0\"$.',
      solution_vi: '• Phủ định: $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 - 2x + 3 \\le 0\"$. $P$ ĐÚNG, $\\bar{P}$ SAI.',
      solution_en: 'Negation: $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 - 2x + 3 \\le 0\"$.',
    },
  ],

  'les-10-6-1': [
    {
      id: 'we-10-6-1',
      type_id: 'type-10-6-1',
      type_code: 'Dạng 1. Đỉnh Parabol',
      title_vi: 'Ví dụ 1: Tìm toạ độ đỉnh Parabol',
      title_en: 'Example 1: Parabola Vertex',
      problem_vi: 'Tìm toạ độ đỉnh và trục đối xứng của parabol $y = -x^2 + 4x - 3$.',
      problem_en: 'Find vertex and axis of $y = -x^2 + 4x - 3$.',
      solution_vi: '• Đỉnh $I(2; 1)$, trục đối xứng $x = 2$. GTLN là $1$ tại $x = 2$.',
      solution_en: 'Vertex $I(2, 1)$, axis $x = 2$. Maximum is $1$.',
    },
  ],
};

// =========================================================================
// NGÂN HÀNG CÂU HỎI TOÀN DIỆN 4 DẠNG THỨC GDPT 2018 (FULL_QUESTION_BANK)
// SẮP XẾP CHUẨN XÁC 100% THEO TỪNG BÀI HỌC VÀ CHUYÊN ĐỀ
// =========================================================================
export const FULL_QUESTION_BANK: Question[] = [
  // =========================================================================
  // 1. LỚP 12 - BÀI 1: TÍNH ĐƠN ĐIỆU & CỰC TRỊ CỦA HÀM SỐ (top-12-1-1 / les-12-1-1)
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
    solution_en: '$y\' = -3x^2 + 6x > 0 \\iff 0 < x < 2$. Increasing on $(0, 2)$.',
    correct_answer: 'A',
    math_skill: 'Tìm khoảng đồng biến hàm bậc 3',
    english_skill: 'Increasing interval of cubic function',
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
    question_en: 'Given $y = \\frac{2x - 1}{x + 1}$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.', content_en: 'The domain is $D = \\mathbb{R} \\setminus \\{-1\\}$.', is_correct: true },
      { option_key: 'b', content_vi: 'Đạo hàm $y\' = \\frac{3}{(x + 1)^2} > 0, \\forall x \\ne -1$.', content_en: 'The derivative $y\' = \\frac{3}{(x + 1)^2} > 0, \\forall x \\ne -1$.', is_correct: true },
      { option_key: 'c', content_vi: 'Hàm số đồng biến trên toàn bộ $\\mathbb{R}$.', content_en: 'The function is increasing on all real numbers.', is_correct: false },
      { option_key: 'd', content_vi: 'Hàm số không có điểm cực trị.', content_en: 'The function has no local extrema.', is_correct: true },
    ],
    correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
    solution_vi: 'a) Đúng. b) Đúng. c) Sai (đồng biến trên từng khoảng). d) Đúng.',
    solution_en: 'a-True, b-True, c-False, d-True.',
    math_skill: 'Khảo sát hàm phân thức',
    english_skill: 'True/False on rational function',
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
    solution_vi: '$y\' = 3x(x - 2) = 0 \\iff x = 0, x = 2$. Cực đại tại $x = 0$, tung độ cực đại $y(0) = 2$.',
    solution_en: 'Local max at $x = 0$ with $y(0) = 2$.',
    math_skill: 'Tung độ điểm cực đại',
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
    question_vi: 'Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m + 2)x - 5$ đồng biến trên toàn bộ $\\mathbb{R}$.',
    question_en: 'Find all real $m$ such that $y = \\frac{1}{3}x^3 - mx^2 + (m + 2)x - 5$ is strictly increasing on $\\mathbb{R}$.',
    correct_answer: '-1 <= m <= 2',
    solution_vi: '$y\' = x^2 - 2mx + (m+2) \\ge 0, \\forall x \\iff \\Delta\' = m^2 - m - 2 \\le 0 \\iff -1 \\le m \\le 2$.',
    solution_en: 'Condition: $\\Delta\' = m^2 - m - 2 \\le 0 \\iff -1 \\le m \\le 2$.',
    math_skill: 'Tham số m đơn điệu trên R',
    english_skill: 'Monotonicity with parameter m',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 2. LỚP 12 - BÀI 2: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT (top-12-1-2 / les-12-1-2)
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
    question_en: 'What is the maximum value of $f(x) = x^4 - 2x^2 + 3$ on $[0, 2]$?',
    options: [
      { option_key: 'A', content_vi: '$11$', content_en: '$11$', is_correct: true },
      { option_key: 'B', content_vi: '$3$', content_en: '$3$', is_correct: false },
      { option_key: 'C', content_vi: '$2$', content_en: '$2$', is_correct: false },
      { option_key: 'D', content_vi: '$16$', content_en: '$16$', is_correct: false },
    ],
    solution_vi: '$f(0) = 3, f(1) = 2, f(2) = 11 \\implies \\max = 11$.',
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
    solution_vi: 'Áp dụng BĐT AM-GM: $x + \\frac{4}{x} \\ge 2\\sqrt{4} = 4$. Đẳng thức xảy ra khi $x = 2$.',
    solution_en: 'AM-GM: $x + 4/x \\ge 4$, minimum is $4$ at $x = 2$. No maximum.',
    math_skill: 'GTNN hàm phân thức',
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
    question_en: 'A square sheet of side $60\\text{ cm}$ has 4 square corners of side $x\\text{ cm}$ cut to form an open box. What is $x$ (in cm) for maximum volume?',
    correct_answer: '10',
    solution_vi: '$V(x) = 4x(30 - x)^2 \\implies V\'(x) = 12(x - 10)(x - 30) = 0 \\implies x = 10\\text{ cm}$.',
    solution_en: '$V\'(x) = 0 \\implies x = 10\\text{ cm}$.',
    math_skill: 'Bài toán tối ưu thể tích',
    english_skill: 'Volume optimization',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 3. LỚP 12 - BÀI 3: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ (top-12-1-3 / les-12-1-3)
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
    solution_vi: '$\\lim_{x \\to \\pm\\infty} \\frac{2x - 3}{x + 1} = 2 \\implies y = 2$ là tiệm cận ngang.',
    solution_en: '$\\lim_{x \\to \\pm\\infty} y = 2 \\implies$ horizontal asymptote is $y = 2$.',
    correct_answer: 'A',
    math_skill: 'Xác định tiệm cận ngang',
    english_skill: 'Horizontal asymptote identification',
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
    question_en: 'The curve $y = \\frac{x^2 + 3x - 1}{x - 2}$ has an oblique asymptote $y = ax + b$. What is $a + b$?',
    correct_answer: '6',
    solution_vi: '$y = x + 5 + \\frac{9}{x - 2} \\implies a = 1, b = 5 \\implies a + b = 6$.',
    solution_en: 'Division gives $y = x + 5 + \\frac{9}{x-2} \\implies a=1, b=5 \\implies a+b=6$.',
    math_skill: 'Hệ số tiệm cận xiên',
    english_skill: 'Oblique asymptote coefficients',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 4. LỚP 12 - BÀI 6, 7, 8: VECTƠ VÀ HỆ TOẠ ĐỘ TRONG KHÔNG GIAN OXYZ (top-12-2-1, top-12-2-2, top-12-2-3)
  // =========================================================================
  {
    id: 'q-12-2-tn1',
    topic_id: 'top-12-2-1',
    type_id: 'type-12-6-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho hình hộp chữ nhật $ABCD.A\'B\'C\'D\'$. Khẳng định nào sau đây là ĐÚNG?',
    question_en: 'For a rectangular box $ABCD.A\'B\'C\'D\', which vector identity is TRUE?',
    options: [
      { option_key: 'A', content_vi: '$\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$', content_en: '$\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$', is_correct: true },
      { option_key: 'B', content_vi: '$\\vec{AC\'} = \\vec{AB} + \\vec{AD} - \\vec{AA\'}$', content_en: '$\\vec{AC\'} = \\vec{AB} + \\vec{AD} - \\vec{AA\'}$', is_correct: false },
      { option_key: 'C', content_vi: '$\\vec{BD\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$', content_en: '$\\vec{BD\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$', is_correct: false },
      { option_key: 'D', content_vi: '$\\vec{AC\'} = \\vec{AC} + \\vec{BD}$', content_en: '$\\vec{AC\'} = \\vec{AC} + \\vec{BD}$', is_correct: false },
    ],
    solution_vi: 'Theo quy tắc hình hộp: $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
    solution_en: 'By the parallelepiped rule: $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
    correct_answer: 'A',
    math_skill: 'Quy tắc hình hộp trong không gian',
    english_skill: 'Parallelepiped vector addition rule',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tn2',
    topic_id: 'top-12-2-2',
    type_id: 'type-12-7-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -3)$ và $B(3; 0; 1)$. Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là:',
    question_en: 'In 3D space $Oxyz$, given $A(1, 2, -3)$ and $B(3, 0, 1)$. The midpoint $M$ of $AB$ is:',
    options: [
      { option_key: 'A', content_vi: '$M(2; 1; -1)$', content_en: '$M(2, 1, -1)$', is_correct: true },
      { option_key: 'B', content_vi: '$M(4; 2; -2)$', content_en: '$M(4, 2, -2)$', is_correct: false },
      { option_key: 'C', content_vi: '$M(1; -1; 2)$', content_en: '$M(1, -1, 2)$', is_correct: false },
      { option_key: 'D', content_vi: '$M(2; -1; 1)$', content_en: '$M(2, -1, 1)$', is_correct: false },
    ],
    solution_vi: '$M = \\left(\\frac{1+3}{2}; \\frac{2+0}{2}; \\frac{-3+1}{2}\\right) = (2; 1; -1)$.',
    solution_en: '$M = \\left(\\frac{1+3}{2}, \\frac{2+0}{2}, \\frac{-3+1}{2}\\right) = (2, 1, -1)$.',
    correct_answer: 'A',
    math_skill: 'Toạ độ trung điểm trong Oxyz',
    english_skill: 'Midpoint coordinates in 3D',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-ds2',
    topic_id: 'top-12-2-3',
    type_id: 'type-12-8-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Trong không gian $Oxyz$, cho $\\vec{u} = (1; 2; -2)$ và $\\vec{v} = (2; -1; 0)$. Xét tính đúng/sai của các mệnh đề sau:',
    question_en: 'In $Oxyz$, given $\\vec{u} = (1, 2, -2)$ and $\\vec{v} = (2, -1, 0)$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Độ dài của vectơ $\\vec{u}$ bằng $|\\vec{u}| = 3$.', content_en: 'The length of vector $\\vec{u}$ is $|\\vec{u}| = 3$.', is_correct: true },
      { option_key: 'b', content_vi: 'Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$.', content_en: 'The dot product $\\vec{u} \\cdot \\vec{v} = 0$.', is_correct: true },
      { option_key: 'c', content_vi: 'Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.', content_en: 'Vectors $\\vec{u}$ and $\\vec{v}$ are perpendicular.', is_correct: true },
      { option_key: 'd', content_vi: 'Độ dài vectơ $\\vec{v}$ bằng $5$.', content_en: 'The magnitude of $\\vec{v}$ is $5$.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: 'a) $|\\vec{u}| = \\sqrt{1+4+4} = 3$. b) $\\vec{u} \\cdot \\vec{v} = 1(2) + 2(-1) - 2(0) = 0$. c) $\\vec{u} \\perp \\vec{v}$. d) $|\\vec{v}| = \\sqrt{4+1} = \\sqrt{5} \\neq 5$.',
    solution_en: 'a-True, b-True, c-True, d-False ($|\\vec{v}| = \\sqrt{5}$).',
    math_skill: 'Tích vô hướng và độ dài vectơ Oxyz',
    english_skill: 'Dot product and vector length in 3D',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tln2',
    topic_id: 'top-12-2-3',
    type_id: 'type-12-8-1',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 0; 1)$ và $\\vec{b} = (0; 1; 1)$. Góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng bao nhiêu độ?',
    question_en: 'In space $Oxyz$, given $\\vec{a} = (1, 0, 1)$ and $\\vec{b} = (0, 1, 1)$. What is the angle (in degrees) between $\\vec{a}$ and $\\vec{b}$?',
    correct_answer: '60',
    solution_vi: '$\\cos(\\vec{a}, \\vec{b}) = \\frac{1(0) + 0(1) + 1(1)}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies (\\vec{a}, \\vec{b}) = 60^\\circ$.',
    solution_en: '$\\cos(\\vec{a}, \\vec{b}) = 1/2 \\implies 60^\\circ$.',
    math_skill: 'Góc giữa hai vectơ trong không gian',
    english_skill: 'Angle between 3D vectors',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 5. LỚP 11 - BÀI 12: ĐẠO HÀM VÀ ỨNG DỤNG (top-11-7-1 / les-11-7-1)
  // =========================================================================
  {
    id: 'q-11-7-tn1',
    topic_id: 'top-11-7-1',
    type_id: 'type-11-12-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Đạo hàm của hàm số $y = x^4 - 3x^2 + 5$ là:',
    question_en: 'The derivative of the function $y = x^4 - 3x^2 + 5$ is:',
    options: [
      { option_key: 'A', content_vi: '$y\' = 4x^3 - 6x$', content_en: '$y\' = 4x^3 - 6x$', is_correct: true },
      { option_key: 'B', content_vi: '$y\' = 4x^3 - 6x + 5$', content_en: '$y\' = 4x^3 - 6x + 5$', is_correct: false },
      { option_key: 'C', content_vi: '$y\' = 4x^3 - 3x$', content_en: '$y\' = 4x^3 - 3x$', is_correct: false },
      { option_key: 'D', content_vi: '$y\' = x^3 - 6x$', content_en: '$y\' = x^3 - 6x$', is_correct: false },
    ],
    solution_vi: 'Áp dụng quy tắc đạo hàm: $(x^n)\' = n x^{n-1} \\implies y\' = 4x^3 - 6x$.',
    solution_en: 'Power rule gives $y\' = 4x^3 - 6x$.',
    correct_answer: 'A',
    math_skill: 'Quy tắc tính đạo hàm đa thức',
    english_skill: 'Polynomial derivative rule',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-7-tn2',
    topic_id: 'top-11-7-1',
    type_id: 'type-11-12-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Hệ số góc của tiếp tuyến của đồ thị hàm số $y = x^3 - 2x + 1$ tại điểm có hoành độ $x_0 = 2$ bằng:',
    question_en: 'The slope of the tangent line to the curve $y = x^3 - 2x + 1$ at $x_0 = 2$ is:',
    options: [
      { option_key: 'A', content_vi: '$10$', content_en: '$10$', is_correct: true },
      { option_key: 'B', content_vi: '$12$', content_en: '$12$', is_correct: false },
      { option_key: 'C', content_vi: '$8$', content_en: '$8$', is_correct: false },
      { option_key: 'D', content_vi: '$5$', content_en: '$5$', is_correct: false },
    ],
    solution_vi: '$y\' = 3x^2 - 2 \\implies k = y\'(2) = 3(2^2) - 2 = 10$.',
    solution_en: '$y\' = 3x^2 - 2 \\implies k = y\'(2) = 10$.',
    correct_answer: 'A',
    math_skill: 'Hệ số góc của tiếp tuyến',
    english_skill: 'Slope of the tangent line',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-7-ds1',
    topic_id: 'top-11-7-1',
    type_id: 'type-11-12-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho hàm số $y = f(x) = \\frac{2x + 1}{x - 1}$. Xét tính đúng/sai của các khẳng định sau:',
    question_en: 'Given $y = f(x) = \\frac{2x + 1}{x - 1}$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.', content_en: 'The domain is $D = \\mathbb{R} \\setminus \\{1\\}$.', is_correct: true },
      { option_key: 'b', content_vi: 'Đạo hàm của hàm số là $f\'(x) = \\frac{-3}{(x - 1)^2}$.', content_en: 'The derivative is $f\'(x) = \\frac{-3}{(x - 1)^2}$.', is_correct: true },
      { option_key: 'c', content_vi: 'Đạo hàm $f\'(x) > 0$ với mọi $x \\neq 1$.', content_en: 'The derivative $f\'(x) > 0$ for all $x \\neq 1$.', is_correct: false },
      { option_key: 'd', content_vi: 'Hệ số góc của tiếp tuyến tại điểm $x_0 = 2$ bằng $-3$.', content_en: 'The slope of tangent at $x_0 = 2$ is $-3$.', is_correct: true },
    ],
    correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
    solution_vi: 'a) Đúng. b) $f\'(x) = \\frac{2(-1) - 1(1)}{(x-1)^2} = \\frac{-3}{(x-1)^2}$. c) Sai ($f\' < 0$). d) $f\'(2) = \\frac{-3}{1} = -3$ (Đúng).',
    solution_en: 'a-True, b-True, c-False, d-True.',
    math_skill: 'Đạo hàm hàm phân thức',
    english_skill: 'Derivative of rational function',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-7-tln1',
    topic_id: 'top-11-7-1',
    type_id: 'type-11-12-2',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Một chất điểm chuyển động theo quy luật quãng đường $s(t) = -t^3 + 6t^2 + 15t$ ($s$ tính bằng mét, $t$ tính bằng giây). Vận tốc tức thời cực đại của chất điểm bằng bao nhiêu m/s?',
    question_en: 'A particle moves with position $s(t) = -t^3 + 6t^2 + 15t$ ($s$ in meters, $t$ in seconds). What is the maximum instantaneous velocity in m/s?',
    correct_answer: '27',
    solution_vi: '• Vận tốc: $v(t) = s\'(t) = -3t^2 + 12t + 15$.\n• $v\'(t) = -6t + 12 = 0 \\iff t = 2$.\n• $v(2) = -3(4) + 12(2) + 15 = 27\\text{ m/s}$.',
    solution_en: '$v(t) = s\'(t) = -3t^2 + 12t + 15$. Maximum at $t = 2$ with $v(2) = 27\\text{ m/s}$.',
    math_skill: 'Bài toán vận tốc tức thời cực đại',
    english_skill: 'Maximum instantaneous velocity',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 6. LỚP 11 - BÀI 11: HÀM SỐ MŨ VÀ LOGARIT (top-11-6-1 / les-11-6-1)
  // =========================================================================
  {
    id: 'q-11-6-tn1',
    topic_id: 'top-11-6-1',
    type_id: 'type-11-11-1',
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
    solution_vi: '$\\log_2(a^3) = 3\\log_2 a$.',
    solution_en: '$\\log_2(a^3) = 3\\log_2 a$.',
    correct_answer: 'A',
    math_skill: 'Quy tắc luỹ thừa của logarit',
    english_skill: 'Logarithm power rule',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-6-tn2',
    topic_id: 'top-11-6-1',
    type_id: 'type-11-11-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Nghiệm của phương trình $2^{2x - 1} = 32$ là:',
    question_en: 'The solution of the exponential equation $2^{2x - 1} = 32$ is:',
    options: [
      { option_key: 'A', content_vi: '$x = 3$', content_en: '$x = 3$', is_correct: true },
      { option_key: 'B', content_vi: '$x = 2$', content_en: '$x = 2$', is_correct: false },
      { option_key: 'C', content_vi: '$x = 5/2$', content_en: '$x = 5/2$', is_correct: false },
      { option_key: 'D', content_vi: '$x = 4$', content_en: '$x = 4$', is_correct: false },
    ],
    solution_vi: '$2^{2x - 1} = 2^5 \\implies 2x - 1 = 5 \\implies x = 3$.',
    solution_en: '$2^{2x - 1} = 2^5 \\implies 2x - 1 = 5 \\implies x = 3$.',
    correct_answer: 'A',
    math_skill: 'Giải phương trình mũ',
    english_skill: 'Solving exponential equations',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-6-ds1',
    topic_id: 'top-11-6-1',
    type_id: 'type-11-11-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho phương trình $\\log_3(x - 2) + \\log_3(x + 6) = 2$. Xét tính đúng/sai của các khẳng định sau:',
    question_en: 'Given $\\log_3(x - 2) + \\log_3(x + 6) = 2$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Điều kiện xác định của phương trình là $x > 2$.', content_en: 'The domain condition is $x > 2$.', is_correct: true },
      { option_key: 'b', content_vi: 'Phương trình biến đổi về $(x - 2)(x + 6) = 9$.', content_en: 'The equation simplifies to $(x - 2)(x + 6) = 9$.', is_correct: true },
      { option_key: 'c', content_vi: 'Phương trình có hai nghiệm phân biệt $x = 3$ và $x = -7$.', content_en: 'The equation has two solutions $x = 3$ and $x = -7$.', is_correct: false },
      { option_key: 'd', content_vi: 'Phương trình có đúng một nghiệm duy nhất $x = 3$.', content_en: 'The equation has exactly one unique solution $x = 3$.', is_correct: true },
    ],
    correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
    solution_vi: 'ĐK: $x > 2$. $x^2 + 4x - 21 = 0 \\iff x = 3$ (nhận) hoặc $x = -7$ (loại).',
    solution_en: 'Domain $x > 2$. Root $x = 3$ (valid), $x = -7$ (rejected).',
    math_skill: 'Giải phương trình logarit',
    english_skill: 'Logarithmic equation solving',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-6-tln1',
    topic_id: 'top-11-6-1',
    type_id: 'type-11-11-2',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Số lượng vi khuẩn ban đầu là 1000 con, sau mỗi giờ số lượng tăng gấp đôi theo $N(t) = 1000 \\cdot 2^t$. Sau bao nhiêu giờ thì số lượng vi khuẩn đạt 64000 con?',
    question_en: 'A bacterial culture starts with 1000 bacteria: $N(t) = 1000 \\cdot 2^t$. How many hours will it take to reach 64000 bacteria?',
    correct_answer: '6',
    solution_vi: '$1000 \\cdot 2^t = 64000 \\iff 2^t = 64 = 2^6 \\implies t = 6\\text{ giờ}$.',
    solution_en: '$1000 \\cdot 2^t = 64000 \\implies t = 6\\text{ hours}$.',
    math_skill: 'Mô hình tăng trưởng hàm mũ',
    english_skill: 'Exponential growth model',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 7. LỚP 11 - BÀI 5: DÃY SỐ (top-11-2-1 / les-11-2-1)
  // =========================================================================
  {
    id: 'q-11-2-1-tn1',
    topic_id: 'top-11-2-1',
    type_id: 'type-11-5-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\frac{2n - 1}{n + 1}$. Giá trị của số hạng thứ tư $u_4$ bằng:',
    question_en: 'For the sequence $(u_n)$ with $u_n = \\frac{2n - 1}{n + 1}$, the 4th term $u_4$ is:',
    options: [
      { option_key: 'A', content_vi: '$7/5$', content_en: '$7/5$', is_correct: true },
      { option_key: 'B', content_vi: '$4/5$', content_en: '$4/5$', is_correct: false },
      { option_key: 'C', content_vi: '$3/5$', content_en: '$3/5$', is_correct: false },
      { option_key: 'D', content_vi: '$2$', content_en: '$2$', is_correct: false },
    ],
    solution_vi: '$u_4 = \\frac{2(4) - 1}{4 + 1} = \\frac{7}{5}$.',
    solution_en: '$u_4 = 7/5$.',
    correct_answer: 'A',
    math_skill: 'Số hạng dãy số',
    english_skill: 'Evaluating sequence terms',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 8. LỚP 11 - BÀI 6: CẤP SỐ CỘNG (top-11-2-2 / les-11-2-2)
  // =========================================================================
  {
    id: 'q-11-2-2-tn1',
    topic_id: 'top-11-2-2',
    type_id: 'type-11-6-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và công sai $d = 3$. Số hạng thứ 6 của cấp số cộng là:',
    question_en: 'For an arithmetic progression $(u_n)$ with $u_1 = 4$ and $d = 3$, the 6th term is:',
    options: [
      { option_key: 'A', content_vi: '$19$', content_en: '$19$', is_correct: true },
      { option_key: 'B', content_vi: '$22$', content_en: '$22$', is_correct: false },
      { option_key: 'C', content_vi: '$16$', content_en: '$16$', is_correct: false },
      { option_key: 'D', content_vi: '$20$', content_en: '$20$', is_correct: false },
    ],
    solution_vi: '$u_6 = u_1 + 5d = 4 + 15 = 19$.',
    solution_en: '$u_6 = 4 + 15 = 19$.',
    correct_answer: 'A',
    math_skill: 'Số hạng cấp số cộng',
    english_skill: 'Arithmetic progression term',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-2-2-ds1',
    topic_id: 'top-11-2-2',
    type_id: 'type-11-6-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = 5$. Xét tính đúng/sai của các mệnh đề sau:',
    question_en: 'Given an AP $(u_n)$ with $u_1 = 2$ and $d = 5$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Số hạng tổng quát là $u_n = 5n - 3$.', content_en: 'General term is $u_n = 5n - 3$.', is_correct: true },
      { option_key: 'b', content_vi: 'Số $102$ là một số hạng của cấp số cộng.', content_en: 'The number 102 is a term of the AP.', is_correct: true },
      { option_key: 'c', content_vi: 'Tổng của 10 số hạng đầu là $S_{10} = 245$.', content_en: 'The sum of the first 10 terms is $S_{10} = 245$.', is_correct: true },
      { option_key: 'd', content_vi: 'Dãy số $(u_n)$ là một dãy số giảm.', content_en: 'The sequence $(u_n)$ is strictly decreasing.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: 'a) $u_n = 2 + (n-1)5 = 5n - 3$. b) $5n - 3 = 102 \\implies n = 21$. c) $S_{10} = 245$. d) Dãy tăng vì $d = 5 > 0$.',
    solution_en: 'a-True, b-True, c-True, d-False.',
    math_skill: 'Tính chất cấp số cộng',
    english_skill: 'Arithmetic progression properties',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 9. LỚP 11 - BÀI 7: CẤP SỐ NHÂN (top-11-2-3 / les-11-2-3)
  // =========================================================================
  {
    id: 'q-11-2-3-tn1',
    topic_id: 'top-11-2-3',
    type_id: 'type-11-7-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Giá trị của $u_5$ bằng:',
    question_en: 'For a GP $(u_n)$ with $u_1 = 3$ and $q = 2$, the 5th term $u_5$ is:',
    options: [
      { option_key: 'A', content_vi: '$48$', content_en: '$48$', is_correct: true },
      { option_key: 'B', content_vi: '$24$', content_en: '$24$', is_correct: false },
      { option_key: 'C', content_vi: '$96$', content_en: '$96$', is_correct: false },
      { option_key: 'D', content_vi: '$32$', content_en: '$32$', is_correct: false },
    ],
    solution_vi: '$u_5 = u_1 \\cdot q^4 = 3 \\cdot 16 = 48$.',
    solution_en: '$u_5 = 3 \\cdot 16 = 48$.',
    correct_answer: 'A',
    math_skill: 'Số hạng cấp số nhân',
    english_skill: 'Geometric progression term',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-2-3-tln1',
    topic_id: 'top-11-2-3',
    type_id: 'type-11-7-1',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Tính tổng của 6 số hạng đầu tiên $S_6$.',
    question_en: 'For a geometric progression $(u_n)$ with $u_1 = 3$ and $q = 2$, calculate the sum of the first 6 terms $S_6$.',
    correct_answer: '189',
    solution_vi: '$S_6 = \\frac{3(1 - 64)}{1 - 2} = 189$.',
    solution_en: '$S_6 = 189$.',
    math_skill: 'Tổng cấp số nhân',
    english_skill: 'Geometric progression sum',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 10. LỚP 10 - BÀI 1: MỆNH ĐỀ VÀ TẬP HỢP (top-10-1-1 / les-10-1-1)
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
    solution_vi: '$x^2 \\ge 0 \\implies x^2 + 1 \\ge 1 > 0, \\forall x \\in \\mathbb{R}$.',
    solution_en: '$x^2 + 1 > 0$ for all real $x$ is always true.',
    correct_answer: 'A',
    math_skill: 'Tính đúng sai của mệnh đề',
    english_skill: 'Truth value of propositions',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 11. LỚP 10 - BÀI 6: HÀM SỐ BẬC HAI VÀ PARABOL (top-10-6-1 / les-10-6-1)
  // =========================================================================
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
    solution_vi: '$x_I = -\\frac{b}{2a} = 2, y_I = 4 - 8 + 3 = -1 \\implies I(2; -1)$.',
    solution_en: 'Vertex $I(2, -1)$.',
    correct_answer: 'A',
    math_skill: 'Tìm toạ độ đỉnh Parabol',
    english_skill: 'Parabola vertex',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
];

// =========================================================================
// HELPER: LẤY CÂU HỎI THEO BÀI HỌC VỚI ĐỘ CHÍNH XÁC CAO NHẤT
// =========================================================================
export function getQuestionsForLesson(lessonId: string, topicId?: string): Question[] {
  // 1. Exact match by topic_id
  if (topicId) {
    const topicMatches = FULL_QUESTION_BANK.filter((q) => q.topic_id === topicId);
    if (topicMatches.length > 0) return topicMatches;
  }

  // 2. Exact match by lesson ID pattern in question ID
  if (lessonId) {
    const lessonMatches = FULL_QUESTION_BANK.filter((q) => q.id && q.id.includes(lessonId.replace('les-', 'q-')));
    if (lessonMatches.length > 0) return lessonMatches;
  }

  // 3. Topic prefix match (e.g. les-11-7-1 -> top-11-7-1 -> '11-7')
  const key = topicId || lessonId;
  if (key.includes('11-7') || key.includes('11-12')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('11-7'));
    if (matches.length > 0) return matches;
  }
  if (key.includes('11-6') || key.includes('11-11')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('11-6'));
    if (matches.length > 0) return matches;
  }
  if (key.includes('11-2-2') || key.includes('11-6')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('11-2-2'));
    if (matches.length > 0) return matches;
  }
  if (key.includes('11-2-3') || key.includes('11-7')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('11-2-3'));
    if (matches.length > 0) return matches;
  }
  if (key.includes('11-2-1') || key.includes('11-5')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('11-2-1'));
    if (matches.length > 0) return matches;
  }
  if (key.includes('12-2') || key.includes('12-6') || key.includes('12-7') || key.includes('12-8')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.startsWith('top-12-2'));
    if (matches.length > 0) return matches;
  }
  if (key.includes('12-1-3')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-12-1-3');
    if (matches.length > 0) return matches;
  }
  if (key.includes('12-1-2')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-12-1-2');
    if (matches.length > 0) return matches;
  }
  if (key.includes('12-1-1')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-12-1-1');
    if (matches.length > 0) return matches;
  }
  if (key.includes('10-1')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('10-1'));
    if (matches.length > 0) return matches;
  }
  if (key.includes('10-6')) {
    const matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('10-6'));
    if (matches.length > 0) return matches;
  }

  // 4. Default: return top 4 questions
  return FULL_QUESTION_BANK.slice(0, 4);
}

// =========================================================================
// HELPER: LẤY BÀI TẬP MẪU THEO BÀI HỌC VỚI ĐỘ CHÍNH XÁC CAO NHẤT
// =========================================================================
export function getWorkedExamplesForLesson(lessonId: string): WorkedExample[] {
  if (DEFAULT_WORKED_EXAMPLES[lessonId] && DEFAULT_WORKED_EXAMPLES[lessonId].length > 0) {
    return DEFAULT_WORKED_EXAMPLES[lessonId];
  }

  // Topic specific fallbacks
  if (lessonId.includes('11-7')) return DEFAULT_WORKED_EXAMPLES['les-11-7-1'] || [];
  if (lessonId.includes('11-6')) return DEFAULT_WORKED_EXAMPLES['les-11-6-1'] || [];
  if (lessonId.includes('11-2-1')) return DEFAULT_WORKED_EXAMPLES['les-11-2-1'] || [];
  if (lessonId.includes('11-2-2')) return DEFAULT_WORKED_EXAMPLES['les-11-2-2'] || [];
  if (lessonId.includes('11-2-3')) return DEFAULT_WORKED_EXAMPLES['les-11-2-3'] || [];
  if (lessonId.includes('12-2-1')) return DEFAULT_WORKED_EXAMPLES['les-12-2-1'] || [];
  if (lessonId.includes('12-2-2')) return DEFAULT_WORKED_EXAMPLES['les-12-2-2'] || [];
  if (lessonId.includes('12-2-3')) return DEFAULT_WORKED_EXAMPLES['les-12-2-3'] || [];
  if (lessonId.includes('12-1-1')) return DEFAULT_WORKED_EXAMPLES['les-12-1-1'] || [];
  if (lessonId.includes('12-1-2')) return DEFAULT_WORKED_EXAMPLES['les-12-1-2'] || [];
  if (lessonId.includes('12-1-3')) return DEFAULT_WORKED_EXAMPLES['les-12-1-3'] || [];
  if (lessonId.includes('10-1')) return DEFAULT_WORKED_EXAMPLES['les-10-1-1'] || [];
  if (lessonId.includes('10-6')) return DEFAULT_WORKED_EXAMPLES['les-10-6-1'] || [];

  return DEFAULT_WORKED_EXAMPLES['les-12-1-1'] || [];
}
