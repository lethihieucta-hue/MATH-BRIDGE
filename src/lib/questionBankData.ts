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

  // -------------------------------------------------------------------------
  // LỚP 11: CHƯƠNG VII - ĐẠO HÀM VÀ ỨNG DỤNG (BÀI 12)
  // -------------------------------------------------------------------------
  'les-11-7-1': [
    {
      id: 'we-11-12-1',
      type_id: 'type-11-12-1',
      type_code: 'Dạng 1. Viết phương trình tiếp tuyến',
      title_vi: 'Ví dụ 1: Viết phương trình tiếp tuyến tại một điểm',
      title_en: 'Example 1: Tangent Line Equation at a Given Point',
      problem_vi: 'Cho hàm số $y = f(x) = x^3 - 3x + 2$. Viết phương trình tiếp tuyến của đồ thị hàm số tại điểm $M(2; 4)$.',
      problem_en: 'Given $y = f(x) = x^3 - 3x + 2$. Write the tangent line to the curve at $M(2, 4)$.',
      solution_vi: '• Đạo hàm: $f\'(x) = 3x^2 - 3$.\n• Hệ số góc tiếp tuyến tại $x_0 = 2$: $k = f\'(2) = 3(2^2) - 3 = 9$.\n• Phương trình tiếp tuyến: $y = 9(x - 2) + 4 = 9x - 14$.',
      solution_en: '• $f\'(x) = 3x^2 - 3 \\implies k = f\'(2) = 9$. Tangent is $y = 9x - 14$.',
    },
    {
      id: 'we-11-12-2',
      type_id: 'type-11-12-2',
      type_code: 'Dạng 2 (Ứng dụng thực tế). Vận tốc tức thời',
      title_vi: 'Ví dụ 2 (Ứng dụng thực tế): Vận tốc tức thời của vật chuyển động',
      title_en: 'Example 2 (Real-world): Instantaneous Velocity',
      problem_vi: 'Một vật chuyển động có phương trình $s(t) = 3t^2 + 2t$ ($s$ tính bằng mét, $t$ tính bằng giây). Hãy tính vận tốc tức thời tại $t = 5\\text{ s}$.',
      problem_en: 'Position is $s(t) = 3t^2 + 2t$. Find the instantaneous velocity at $t = 5\\text{ s}$.',
      solution_vi: '• Vận tốc: $v(t) = s\'(t) = 6t + 2$.\n• Tại $t = 5\\text{ s}$: $v(5) = 6(5) + 2 = 32\\text{ m/s}$.',
      solution_en: '$v(t) = 6t + 2 \\implies v(5) = 32\\text{ m/s}$.',
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
      solution_vi: '• $\\log_2 16 = 4, \\log_3(3^{3/2}) = 1.5, \\ln(e^4) = 4 \\implies P = 1.5$.',
      solution_en: '$\\log_2 16 = 4, \\log_3 \\sqrt{27} = 1.5, \\ln(e^4) = 4 \\implies P = 1.5$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 11: CHƯƠNG I - HÀM SỐ LƯỢNG GIÁC VÀ PHƯƠNG TRÌNH LƯỢNG GIÁC
  // -------------------------------------------------------------------------
  'les-11-1-1': [
    {
      id: 'we-11-1-1-1',
      type_id: 'type-11-1-1',
      type_code: 'Dạng 1. Tính giá trị lượng giác của một góc',
      title_vi: 'Ví dụ 1: Tính các giá trị lượng giác khi biết $\\sin\\alpha$',
      title_en: 'Example 1: Find Trigonometric Values Given $\\sin\\alpha$',
      problem_vi: 'Cho $\\sin\\alpha = \\frac{3}{5}$ với $\\frac{\\pi}{2} < \\alpha < \\pi$. Tính $\\cos\\alpha$ và $\\tan\\alpha$.',
      problem_en: 'Given $\\sin\\alpha = 3/5$ for $\\pi/2 < \\alpha < \\pi$. Find $\\cos\\alpha$ and $\\tan\\alpha$.',
      solution_vi: '• Vì $\\frac{\\pi}{2} < \\alpha < \\pi \\implies \\cos\\alpha < 0$.\n• $\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25} \\implies \\cos\\alpha = -\\frac{4}{5}$.\n• $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{3/5}{-4/5} = -\\frac{3}{4}$.',
      solution_en: '• Since $\\pi/2 < \\alpha < \\pi \\implies \\cos\\alpha < 0$.\n• $\\cos\\alpha = -4/5$ and $\\tan\\alpha = -3/4$.',
    },
  ],

  'les-11-1-2': [
    {
      id: 'we-11-1-2-1',
      type_id: 'type-11-2-1',
      type_code: 'Dạng 1. Rút gọn biểu thức lượng giác',
      title_vi: 'Ví dụ 1: Áp dụng công thức cộng và công thức nhân đôi',
      title_en: 'Example 1: Simplify Expression using Addition and Double-Angle Formulas',
      problem_vi: 'Rút gọn biểu thức $A = \\sin\\left(x + \\frac{\\pi}{6}\\right) - \\cos x \\cdot \\sin\\frac{\\pi}{6}$.',
      problem_en: 'Simplify $A = \\sin\\left(x + \\frac{\\pi}{6}\\right) - \\cos x \\cdot \\sin\\frac{\\pi}{6}$.',
      solution_vi: '• $\\sin\\left(x + \\frac{\\pi}{6}\\right) = \\sin x \\cos\\frac{\\pi}{6} + \\cos x \\sin\\frac{\\pi}{6}$.\n• $A = \\sin x \\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}\\sin x$.',
      solution_en: '• $A = \\sin x \\cos(\\pi/6) = \\frac{\\sqrt{3}}{2}\\sin x$.',
    },
  ],

  'les-11-1-3': [
    {
      id: 'we-11-1-3-1',
      type_id: 'type-11-3-1',
      type_code: 'Dạng 1. Tập xác định và chu kỳ hàm số lượng giác',
      title_vi: 'Ví dụ 1: Tìm tập xác định và chu kỳ $T$',
      title_en: 'Example 1: Domain and Period of Trigonometric Function',
      problem_vi: 'Tìm tập xác định và chu kỳ $T$ của hàm số $y = \\tan\\left(2x - \\frac{\\pi}{3}\\right) + 1$.',
      problem_en: 'Find the domain and period $T$ of function $y = \\tan\\left(2x - \\frac{\\pi}{3}\\right) + 1$.',
      solution_vi: '• ĐK xác định: $2x - \\frac{\\pi}{3} \\ne \\frac{\\pi}{2} + k\\pi \\iff x \\ne \\frac{5\\pi}{12} + k\\frac{\\pi}{2}\\, (k \\in \\mathbb{Z})$.\n• Chu kỳ: $T = \\frac{\\pi}{2}$.',
      solution_en: 'Domain $D = \\mathbb{R} \\setminus \\{5\\pi/12 + k\\pi/2\\}$, Period $T = \\pi/2$.',
    },
    {
      id: 'we-11-1-3-2',
      type_id: 'type-11-3-2',
      type_code: 'Dạng 2 (Ứng dụng thực tế). Thuỷ triều lên xuống',
      title_vi: 'Ví dụ 2 (Ứng dụng thực tế): Mô hình hoá độ cao mực nước thuỷ triều',
      title_en: 'Example 2 (Real-world): Tidal Water Level Modeling',
      problem_vi: 'Mực nước biển tại một cảng biển sau $t$ giờ là $h(t) = 3\\cos\\left(\\frac{\\pi t}{6}\\right) + 7$ (mét). Mực nước cao nhất là bao nhiêu?',
      problem_en: 'Water height after $t$ hours is $h(t) = 3\\cos\\left(\\frac{\\pi t}{6}\\right) + 7$ (meters). Find max height.',
      solution_vi: '• Mực nước cao nhất khi $\\cos\\left(\\frac{\\pi t}{6}\\right) = 1 \\implies h_{\\max} = 3(1) + 7 = 10\\text{ m}$.',
      solution_en: 'Max height $h_{\\max} = 3(1) + 7 = 10\\text{ m}$.',
    },
  ],

  'les-11-1-4': [
    {
      id: 'we-11-1-4-1',
      type_id: 'type-11-4-1',
      type_code: 'Dạng 1. Giải phương trình lượng giác cơ bản',
      title_vi: 'Ví dụ 1: Giải phương trình $\\sin\\left(2x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$',
      title_en: 'Example 1: Solve Basic Sine Equation',
      problem_vi: 'Giải phương trình $\\sin\\left(2x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$.',
      problem_en: 'Solve $\\sin\\left(2x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$.',
      solution_vi: '• $\\sin\\left(2x - \\frac{\\pi}{4}\\right) = \\sin\\frac{\\pi}{4} \\iff \\left[\\begin{array}{l} 2x - \\frac{\\pi}{4} = \\frac{\\pi}{4} + k2\\pi \\\\ 2x - \\frac{\\pi}{4} = \\frac{3\\pi}{4} + k2\\pi \\end{array}\\right. \\iff \\left[\\begin{array}{l} x = \\frac{\\pi}{4} + k\\pi \\\\ x = \\frac{\\pi}{2} + k\\pi \\end{array}\\right.\\, (k \\in \\mathbb{Z})$.',
      solution_en: '$x = \\pi/4 + k\\pi$ or $x = \\pi/2 + k\\pi$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 11: CHƯƠNG II - DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN
  // -------------------------------------------------------------------------
  'les-11-2-1': [
    {
      id: 'we-11-2-1-1',
      type_id: 'type-11-5-1',
      type_code: 'Dạng 1. Số hạng tổng quát dãy số',
      title_vi: 'Ví dụ 1: Tìm số hạng tổng quát và xét tính tăng giảm của dãy số',
      title_en: 'Example 1: N-th Term and Monotonicity of Sequence',
      problem_vi: 'Cho dãy số $(u_n)$ với $u_n = \\frac{2n - 1}{n + 1}$. Xét tính tăng, giảm của dãy số.',
      problem_en: 'Given $u_n = \\frac{2n - 1}{n + 1}$. Determine if the sequence is increasing or decreasing.',
      solution_vi: '• $u_{n+1} - u_n = \\frac{2(n+1)-1}{(n+1)+1} - \\frac{2n-1}{n+1} = \\frac{2n+1}{n+2} - \\frac{2n-1}{n+1} = \\frac{3}{(n+1)(n+2)} > 0, \\forall n \\ge 1$.\n• Vậy dãy số $(u_n)$ là dãy số tăng.',
      solution_en: '$u_{n+1} - u_n = \\frac{3}{(n+1)(n+2)} > 0 \\implies$ Sequence is strictly increasing.',
    },
  ],

  'les-11-2-2': [
    {
      id: 'we-11-2-2-1',
      type_id: 'type-11-6-1',
      type_code: 'Dạng 1. Cấp số cộng',
      title_vi: 'Ví dụ 1: Tìm số hạng đầu và công sai của cấp số cộng',
      title_en: 'Example 1: Find First Term and Common Difference of AP',
      problem_vi: 'Cho cấp số cộng $(u_n)$ thoả mãn $u_1 + u_5 = 18$ và $u_3 + u_6 = 24$. Tìm $u_1$ và công sai $d$.',
      problem_en: 'Given AP $(u_n)$ with $u_1 + u_5 = 18$ and $u_3 + u_6 = 24$. Find $u_1$ and $d$.',
      solution_vi: '• HĐR: $\\begin{cases} 2u_1 + 4d = 18 \\\\ 2u_1 + 7d = 24 \\end{cases} \\iff \\begin{cases} 3d = 6 \\\\ 2u_1 + 4d = 18 \\end{cases} \\iff \\begin{cases} d = 2 \\\\ u_1 = 5 \\end{cases}$.',
      solution_en: 'Solving system gives $u_1 = 5$ and $d = 2$.',
    },
  ],

  'les-11-2-3': [
    {
      id: 'we-11-2-3-1',
      type_id: 'type-11-7-1',
      type_code: 'Dạng 1. Cấp số nhân',
      title_vi: 'Ví dụ 1: Tìm công bội và tổng $n$ số hạng đầu của cấp số nhân',
      title_en: 'Example 1: Find Common Ratio and Sum of First n Terms of GP',
      problem_vi: 'Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Tính tổng 10 số hạng đầu tiên $S_{10}$.',
      problem_en: 'For GP $(u_n)$ with $u_1 = 3$ and $q = 2$. Calculate sum of first 10 terms $S_{10}$.',
      solution_vi: '• $S_{10} = u_1 \\frac{1 - q^{10}}{1 - q} = 3 \\frac{1 - 2^{10}}{1 - 2} = 3 (1023) = 3069$.',
      solution_en: '$S_{10} = 3 (2^{10} - 1) = 3069$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 10: CHƯƠNG I - MỆNH ĐỀ VÀ TẤP HỢP
  // -------------------------------------------------------------------------
  'les-10-1-1': [
    {
      id: 'we-10-1-1-1',
      type_id: 'type-10-1-1',
      type_code: 'Dạng 1. Các phép toán tập hợp',
      title_vi: 'Ví dụ 1: Tìm hợp, giao và hiệu của hai tập hợp',
      title_en: 'Example 1: Union, Intersection, and Difference of Sets',
      problem_vi: 'Cho hai tập hợp $A = [-2; 3]$ và $B = (1; 5)$. Tìm $A \\cup B, A \\cap B, A \\setminus B$.',
      problem_en: 'Given $A = [-2, 3]$ and $B = (1, 5)$. Find $A \\cup B, A \\cap B, A \\setminus B$.',
      solution_vi: '• $A \\cup B = [-2; 5)$.\n• $A \\cap B = (1; 3]$.\n• $A \\setminus B = [-2; 1]$.',
      solution_en: '$A \\cup B = [-2, 5), A \\cap B = (1, 3], A \\setminus B = [-2, 1]$.',
    },
  ],

  // -------------------------------------------------------------------------
  // LỚP 10: CHƯƠNG VI - HÀM SỐ BẬC HAI VÀ PARABOL
  // -------------------------------------------------------------------------
  'les-10-6-1': [
    {
      id: 'we-10-6-1-1',
      type_id: 'type-10-6-1',
      type_code: 'Dạng 1. Khảo sát hàm số bậc hai',
      title_vi: 'Ví dụ 1: Tìm toạ độ đỉnh và lập bảng biến thiên của Parabol',
      title_en: 'Example 1: Vertex Coordinates and Variation Table of Parabola',
      problem_vi: 'Xác định toạ độ đỉnh $I$ và khoảng đồng biến, nghịch biến của Parabol $y = x^2 - 4x + 3$.',
      problem_en: 'Determine the vertex $I$ and monotonicity intervals of $y = x^2 - 4x + 3$.',
      solution_vi: '• $x_I = -\\frac{-4}{2(1)} = 2 \\implies y_I = 2^2 - 4(2) + 3 = -1 \\implies I(2; -1)$.\n• Hàm số nghịch biến trên $(-\\infty; 2)$ và đồng biến trên $(2; +\\infty)$.',
      solution_en: 'Vertex $I(2, -1)$. Decreasing on $(-\\infty, 2)$, increasing on $(2, +\\infty)$.',
    },
  ],
};

// =========================================================================
// NGÂN HÀNG CÂU HỎI TOÀN DIỆN PHONG PHÚ 4 DẠNG THỨC GDPT 2018
// ĐẢM BẢO MỖI CHỦ ĐỀ CÓ ĐỦ 10 - 20 CÂU HỎI CHUẨN
// =========================================================================
export const FULL_QUESTION_BANK: Question[] = [
  // =========================================================================
  // 1. LỚP 12 - CHỦ ĐỀ GTLN VÀ GTNN & BÀI TOÁN TỐI ƯU (top-12-1-2)
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
    id: 'q-12-2-tn2',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Giá trị nhỏ nhất của hàm số $y = x^3 - 3x + 1$ trên đoạn $[0; 2]$ là:',
    question_en: 'The minimum value of $y = x^3 - 3x + 1$ on $[0, 2]$ is:',
    options: [
      { option_key: 'A', content_vi: '$-1$', content_en: '$-1$', is_correct: true },
      { option_key: 'B', content_vi: '$1$', content_en: '$1$', is_correct: false },
      { option_key: 'C', content_vi: '$3$', content_en: '$3$', is_correct: false },
      { option_key: 'D', content_vi: '$0$', content_en: '$0$', is_correct: false },
    ],
    solution_vi: '$y\' = 3x^2 - 3 = 0 \\implies x = 1 \\in [0; 2]$. $y(0) = 1, y(1) = -1, y(2) = 3 \\implies \\min = -1$.',
    solution_en: '$y(0) = 1, y(1) = -1, y(2) = 3 \\implies \\min = -1$.',
    correct_answer: 'A',
    math_skill: 'Tìm GTNN của hàm bậc ba',
    english_skill: 'Minimum of cubic polynomial',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tn3',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Tìm giá trị lớn nhất của hàm số $y = \\frac{2x - 1}{x + 1}$ trên đoạn $[0; 3]$.',
    question_en: 'Find the maximum value of $y = \\frac{2x - 1}{x + 1}$ on $[0, 3]$.',
    options: [
      { option_key: 'A', content_vi: '$5/4$', content_en: '$5/4$', is_correct: true },
      { option_key: 'B', content_vi: '$-1$', content_en: '$-1$', is_correct: false },
      { option_key: 'C', content_vi: '$2$', content_en: '$2$', is_correct: false },
      { option_key: 'D', content_vi: '$1$', content_en: '$1$', is_correct: false },
    ],
    solution_vi: 'Vì $y\' = \\frac{3}{(x+1)^2} > 0$ nên hàm số đồng biến trên $[0; 3] \\implies \\max = y(3) = \\frac{5}{4}$.',
    solution_en: 'Function is increasing on $[0, 3] \\implies \\max = y(3) = 5/4$.',
    correct_answer: 'A',
    math_skill: 'GTLN hàm phân thức',
    english_skill: 'Maximum of rational function',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tn4',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-2',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Giá trị nhỏ nhất của hàm số $y = x + \\frac{9}{x}$ với $x > 0$ bằng:',
    question_en: 'The minimum value of $y = x + \\frac{9}{x}$ for $x > 0$ is:',
    options: [
      { option_key: 'A', content_vi: '$6$', content_en: '$6$', is_correct: true },
      { option_key: 'B', content_vi: '$9$', content_en: '$9$', is_correct: false },
      { option_key: 'C', content_vi: '$3$', content_en: '$3$', is_correct: false },
      { option_key: 'D', content_vi: '$10$', content_en: '$10$', is_correct: false },
    ],
    solution_vi: 'Theo BĐT Cauchy: $x + \\frac{9}{x} \\ge 2\\sqrt{9} = 6$. Dấu bằng khi $x = 3$.',
    solution_en: 'By AM-GM inequality: $x + 9/x \\ge 2\\sqrt{9} = 6$.',
    correct_answer: 'A',
    math_skill: 'BĐT Cauchy tìm GTNN',
    english_skill: 'AM-GM inequality minimum',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tn5',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-3',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'HARD',
    language_level: 2,
    question_vi: 'Một người nông dân muốn rào một khu vườn hình chữ nhật có một cạnh giáp bờ sông (không cần rào cạnh này). Chiều dài hàng rào sẵn có là $120\\text{ m}$. Diện tích lớn nhất của khu vườn là:',
    question_en: 'A farmer fences a rectangular plot bordering a straight river (no fence needed along the river). Using $120\\text{ m}$ of fencing, the maximum area is:',
    options: [
      { option_key: 'A', content_vi: '$1800\\text{ m}^2$', content_en: '$1800\\text{ m}^2$', is_correct: true },
      { option_key: 'B', content_vi: '$3600\\text{ m}^2$', content_en: '$3600\\text{ m}^2$', is_correct: false },
      { option_key: 'C', content_vi: '$900\\text{ m}^2$', content_en: '$900\\text{ m}^2$', is_correct: false },
      { option_key: 'D', content_vi: '$2400\\text{ m}^2$', content_en: '$2400\\text{ m}^2$', is_correct: false },
    ],
    solution_vi: 'Gọi chiều rộng là $x$ ($0 < x < 60$), chiều dài là $120 - 2x$. Diện tích $S(x) = x(120 - 2x) = 120x - 2x^2$. Đạt cực đại tại $x = 30\\text{ m}$, diện tích cực đại $S(30) = 1800\\text{ m}^2$.',
    solution_en: 'Width $x$, length $120 - 2x$. Area $S(x) = x(120-2x)$ max at $x = 30$, max area $= 1800\\text{ m}^2$.',
    correct_answer: 'A',
    math_skill: 'Tối ưu hoá diện tích rào chắn',
    english_skill: 'Fenced area optimization',
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
      { option_key: 'b', content_vi: 'Hàm số đạt giá trị nhỏ nhất tại điểm $x = 2$.', content_en: 'The function attains its minimum at $x = 2$.', is_correct: true },
      { option_key: 'c', content_vi: 'Giá trị nhỏ nhất của hàm số trên $(0; +\\infty)$ bằng $4$.', content_en: 'The minimum value on $(0, +\\infty)$ is $4$.', is_correct: true },
      { option_key: 'd', content_vi: 'Hàm số có giá trị lớn nhất trên $(0; +\\infty)$ bằng $8$.', content_en: 'The maximum value on $(0, +\\infty)$ is $8$.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: 'Theo BĐT AM-GM: $x + 4/x \\ge 4$. Đạt GTNN khi $x = 2$. Không có GTLN.',
    solution_en: 'a-True, b-True, c-True, d-False.',
    math_skill: 'Đúng sai GTNN hàm phân thức',
    english_skill: 'True/False on minimum values',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-ds2',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho hàm số $f(x) = -x^3 + 3x + 2$ trên đoạn $[0; 2]$. Xét tính đúng/sai của các khẳng định sau:',
    question_en: 'Given $f(x) = -x^3 + 3x + 2$ on $[0, 2]$. Are the following statements True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Đạo hàm $f\'(x) = -3x^2 + 3$.', content_en: 'The derivative is $f\'(x) = -3x^2 + 3$.', is_correct: true },
      { option_key: 'b', content_vi: 'Phương trình $f\'(x) = 0$ có một nghiệm $x = 1$ thuộc khoảng $(0; 2)$.', content_en: 'Root $x = 1$ lies in $(0, 2)$.', is_correct: true },
      { option_key: 'c', content_vi: 'Giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ bằng $4$.', content_en: 'The maximum value on $[0, 2]$ is $4$.', is_correct: true },
      { option_key: 'd', content_vi: 'Giá trị nhỏ nhất của hàm số trên đoạn $[0; 2]$ bằng $2$.', content_en: 'The minimum value on $[0, 2]$ is $2$.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: '$f(0) = 2, f(1) = 4, f(2) = 0 \\implies \\max = 4$ và $\\min = 0$. Khẳng định d sai.',
    solution_en: '$f(0)=2, f(1)=4, f(2)=0 \\implies \\max = 4, \\min = 0$.',
    math_skill: 'Đúng sai GTLN-GTNN hàm bậc 3',
    english_skill: 'True/False on cubic extrema',
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
    solution_en: '$V\'(x) = 0 \\implies x = 10\\text{ cm}$.',
    math_skill: 'Tối ưu thể tích hộp mở',
    english_skill: 'Box volume optimization',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tln2',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-1',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Tìm giá trị lớn nhất của hàm số $y = \\sqrt{4 - x^2}$.',
    question_en: 'Find the maximum value of $y = \\sqrt{4 - x^2}$.',
    correct_answer: '2',
    solution_vi: 'Vì $x^2 \\ge 0 \\implies 4 - x^2 \\le 4 \\implies \\sqrt{4 - x^2} \\le 2$. GTLN là $2$ khi $x = 0$.',
    solution_en: 'Max value is $\\sqrt{4} = 2$ at $x = 0$.',
    math_skill: 'GTLN hàm chứa căn',
    english_skill: 'Maximum of radical function',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-12-2-tl1',
    topic_id: 'top-12-1-2',
    type_id: 'type-12-2-3',
    question_type: 'ESSAY',
    format_type: 'TL',
    difficulty: 'HARD',
    language_level: 2,
    question_vi: 'Một công ty sản xuất muốn thiết kế một thùng chứa hình trụ có thể tích $V = 54\\pi\\text{ m}^3$. Hãy tìm bán kính đáy $R$ (theo mét) sao cho diện tích toàn phần của thùng chứa là nhỏ nhất để tiết kiệm chi phí vật liệu.',
    question_en: 'A manufacturing company wants to design a cylindrical container with volume $V = 54\\pi\\text{ m}^3$. Find the base radius $R$ (in meters) to minimize the total surface area and save material cost.',
    correct_answer: '3',
    solution_vi: '• Thể tích: $V = \\pi R^2 h = 54\\pi \\implies h = \\frac{54}{R^2}$.\n• Diện tích toàn phần: $S_{tp} = 2\\pi R^2 + 2\\pi R h = 2\\pi R^2 + \\frac{108\\pi}{R} = 2\\pi \\left(R^2 + \\frac{54}{R} + \\frac{54}{R}\\right) \\ge 2\\pi \\cdot 3 \\sqrt[3]{R^2 \\cdot \\frac{54}{R} \\cdot \\frac{54}{R}} = 54\\pi$.\n• Đẳng thức xảy ra khi $R^2 = \\frac{54}{R} \\iff R^3 = 27 \\iff R = 3\\text{ m}$.',
    solution_en: '$V = \\pi R^2 h = 54\\pi \\implies h = 54/R^2$. $S_{tp} = 2\\pi R^2 + 108\\pi/R$. Minimized when $R^3 = 27 \\implies R = 3\\text{ m}$.',
    math_skill: 'Tối ưu diện tích toàn phần hình trụ',
    english_skill: 'Cylinder surface area minimization',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 2. LỚP 12 - CHỦ ĐỀ TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ (top-12-1-1)
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
    question_en: 'On which interval is $y = -x^3 + 3x^2 - 1$ strictly increasing?',
    options: [
      { option_key: 'A', content_vi: '$(0; 2)$', content_en: '$(0, 2)$', is_correct: true },
      { option_key: 'B', content_vi: '$(-\\infty; 0)$', content_en: '$(-\\infty, 0)$', is_correct: false },
      { option_key: 'C', content_vi: '$(2; +\\infty)$', content_en: '$(2, +\\infty)$', is_correct: false },
      { option_key: 'D', content_vi: '$(-\\infty; 2)$', content_en: '$(-\\infty, 2)$', is_correct: false },
    ],
    solution_vi: '$y\' = -3x(x - 2) > 0 \\iff 0 < x < 2$.',
    solution_en: '$y\' > 0 \\iff 0 < x < 2$.',
    correct_answer: 'A',
    math_skill: 'Tìm khoảng đồng biến',
    english_skill: 'Increasing interval',
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
    question_en: 'Given $y = \\frac{2x - 1}{x + 1}$. Determine whether each statement is True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$.', content_en: 'Domain is $D = \\mathbb{R} \\setminus \\{-1\\}$.', is_correct: true },
      { option_key: 'b', content_vi: 'Đạo hàm $y\' = \\frac{3}{(x + 1)^2} > 0, \\forall x \\ne -1$.', content_en: 'Derivative $y\' = \\frac{3}{(x + 1)^2} > 0, \\forall x \\ne -1$.', is_correct: true },
      { option_key: 'c', content_vi: 'Hàm số đồng biến trên toàn bộ $\\mathbb{R}$.', content_en: 'The function is increasing on all real numbers.', is_correct: false },
      { option_key: 'd', content_vi: 'Hàm số không có điểm cực trị.', content_en: 'The function has no local extrema.', is_correct: true },
    ],
    correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
    solution_vi: 'a-Đ, b-Đ, c-S, d-Đ.',
    solution_en: 'a-True, b-True, c-False, d-True.',
    math_skill: 'Khảo sát hàm phân thức',
    english_skill: 'Rational function analysis',
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
    question_en: 'For $y = x^3 - 3x^2 + 2$, what is the y-coordinate of the local maximum?',
    correct_answer: '2',
    solution_vi: '$y\' = 3x(x - 2) = 0 \\iff x = 0, x = 2$. Cực đại tại $x = 0$, $y(0) = 2$.',
    solution_en: 'Local max $y(0) = 2$.',
    math_skill: 'Tung độ cực đại',
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
    question_vi: 'Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m + 2)x - 5$ đồng biến trên $\\mathbb{R}$.',
    question_en: 'Find all real $m$ such that $y = \\frac{1}{3}x^3 - mx^2 + (m + 2)x - 5$ is strictly increasing on $\\mathbb{R}$.',
    correct_answer: '-1 <= m <= 2',
    solution_vi: '$\\Delta\' = m^2 - m - 2 \\le 0 \\iff -1 \\le m \\le 2$.',
    solution_en: 'Condition: $\\Delta\' \\le 0 \\iff -1 \\le m \\le 2$.',
    math_skill: 'Tham số m đồng biến trên R',
    english_skill: 'Monotonicity with parameter m',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 3. LỚP 12 - CHỦ ĐỀ ĐƯỜNG TIỆM CẬN (top-12-1-3)
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
    question_en: 'What is the horizontal asymptote of $y = \\frac{2x - 3}{x + 1}$?',
    options: [
      { option_key: 'A', content_vi: '$y = 2$', content_en: '$y = 2$', is_correct: true },
      { option_key: 'B', content_vi: '$x = -1$', content_en: '$x = -1$', is_correct: false },
      { option_key: 'C', content_vi: '$y = -3$', content_en: '$y = -3$', is_correct: false },
      { option_key: 'D', content_vi: '$x = 2$', content_en: '$x = 2$', is_correct: false },
    ],
    solution_vi: '$\\lim_{x \\to \\pm\\infty} y = 2 \\implies y = 2$.',
    solution_en: 'Horizontal asymptote $y = 2$.',
    correct_answer: 'A',
    math_skill: 'Tìm tiệm cận ngang',
    english_skill: 'Horizontal asymptote',
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
    question_vi: 'Đồ thị hàm số $y = \\frac{x^2 + 3x - 1}{x - 2}$ có tiệm cận xiên dạng $y = ax + b$. Tính $a + b$.',
    question_en: 'The curve $y = \\frac{x^2 + 3x - 1}{x - 2}$ has oblique asymptote $y = ax + b$. What is $a + b$?',
    correct_answer: '6',
    solution_vi: '$y = x + 5 + \\frac{9}{x - 2} \\implies a = 1, b = 5 \\implies a + b = 6$.',
    solution_en: '$a=1, b=5 \\implies a+b=6$.',
    math_skill: 'Hệ số tiệm cận xiên',
    english_skill: 'Oblique asymptote sum',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 4. LỚP 12 - CHỦ ĐỀ VECTƠ VÀ HỆ TOẠ ĐỘ TRONG KHÔNG GIAN OXYZ (top-12-2-1, top-12-2-2, top-12-2-3)
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
    solution_vi: 'Quy tắc hình hộp: $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
    solution_en: 'Parallelepiped rule: $\\vec{AC\'} = \\vec{AB} + \\vec{AD} + \\vec{AA\'}$.',
    correct_answer: 'A',
    math_skill: 'Quy tắc hình hộp',
    english_skill: 'Parallelepiped rule',
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
    question_vi: 'Trong không gian $Oxyz$, cho $A(1; 2; -3)$ và $B(3; 0; 1)$. Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là:',
    question_en: 'In $Oxyz$, given $A(1, 2, -3)$ and $B(3, 0, 1)$. The midpoint $M$ of $AB$ is:',
    options: [
      { option_key: 'A', content_vi: '$M(2; 1; -1)$', content_en: '$M(2, 1, -1)$', is_correct: true },
      { option_key: 'B', content_vi: '$M(4; 2; -2)$', content_en: '$M(4, 2, -2)$', is_correct: false },
      { option_key: 'C', content_vi: '$M(1; -1; 2)$', content_en: '$M(1, -1, 2)$', is_correct: false },
      { option_key: 'D', content_vi: '$M(2; -1; 1)$', content_en: '$M(2, -1, 1)$', is_correct: false },
    ],
    solution_vi: '$M = (2; 1; -1)$.',
    solution_en: '$M = (2, 1, -1)$.',
    correct_answer: 'A',
    math_skill: 'Trung điểm đoạn thẳng Oxyz',
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
      { option_key: 'a', content_vi: 'Độ dài $|\\vec{u}| = 3$.', content_en: 'Length $|\\vec{u}| = 3$.', is_correct: true },
      { option_key: 'b', content_vi: 'Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$.', content_en: 'Dot product $\\vec{u} \\cdot \\vec{v} = 0$.', is_correct: true },
      { option_key: 'c', content_vi: 'Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc nhau.', content_en: 'Vectors $\\vec{u}$ and $\\vec{v}$ are perpendicular.', is_correct: true },
      { option_key: 'd', content_vi: 'Độ dài $|\\vec{v}| = 5$.', content_en: 'Magnitude of $\\vec{v}$ is $5$.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: 'a-Đ, b-Đ, c-Đ, d-S ($|\\vec{v}| = \\sqrt{5}$).',
    solution_en: 'a-True, b-True, c-True, d-False.',
    math_skill: 'Tích vô hướng Oxyz',
    english_skill: 'Dot product in 3D',
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
    question_en: 'In $Oxyz$, given $\\vec{a} = (1, 0, 1)$ and $\\vec{b} = (0, 1, 1)$. What is the angle (in degrees) between $\\vec{a}$ and $\\vec{b}$?',
    correct_answer: '60',
    solution_vi: '$\\cos(\\vec{a}, \\vec{b}) = 1/2 \\implies 60^\\circ$.',
    solution_en: '$\\cos(\\vec{a}, \\vec{b}) = 1/2 \\implies 60^\\circ$.',
    math_skill: 'Góc giữa hai vectơ không gian',
    english_skill: 'Angle between 3D vectors',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 5. LỚP 11 - CHỦ ĐỀ ĐẠO HÀM VÀ ỨNG DỤNG (top-11-7-1)
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
    question_en: 'The derivative of $y = x^4 - 3x^2 + 5$ is:',
    options: [
      { option_key: 'A', content_vi: '$y\' = 4x^3 - 6x$', content_en: '$y\' = 4x^3 - 6x$', is_correct: true },
      { option_key: 'B', content_vi: '$y\' = 4x^3 - 6x + 5$', content_en: '$y\' = 4x^3 - 6x + 5$', is_correct: false },
      { option_key: 'C', content_vi: '$y\' = 4x^3 - 3x$', content_en: '$y\' = 4x^3 - 3x$', is_correct: false },
      { option_key: 'D', content_vi: '$y\' = x^3 - 6x$', content_en: '$y\' = x^3 - 6x$', is_correct: false },
    ],
    solution_vi: '$y\' = 4x^3 - 6x$.',
    solution_en: '$y\' = 4x^3 - 6x$.',
    correct_answer: 'A',
    math_skill: 'Đạo hàm đa thức',
    english_skill: 'Polynomial derivative',
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
    question_vi: 'Hệ số góc của tiếp tuyến của đồ thị hàm số $y = x^3 - 2x + 1$ tại điểm $x_0 = 2$ bằng:',
    question_en: 'The slope of the tangent to $y = x^3 - 2x + 1$ at $x_0 = 2$ is:',
    options: [
      { option_key: 'A', content_vi: '$10$', content_en: '$10$', is_correct: true },
      { option_key: 'B', content_vi: '$12$', content_en: '$12$', is_correct: false },
      { option_key: 'C', content_vi: '$8$', content_en: '$8$', is_correct: false },
      { option_key: 'D', content_vi: '$5$', content_en: '$5$', is_correct: false },
    ],
    solution_vi: '$y\' = 3x^2 - 2 \\implies k = y\'(2) = 10$.',
    solution_en: '$k = y\'(2) = 10$.',
    correct_answer: 'A',
    math_skill: 'Hệ số góc tiếp tuyến',
    english_skill: 'Slope of tangent line',
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
    question_en: 'Given $y = f(x) = \\frac{2x + 1}{x - 1}$. Determine True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$.', content_en: 'Domain $D = \\mathbb{R} \\setminus \\{1\\}$.', is_correct: true },
      { option_key: 'b', content_vi: 'Đạo hàm $f\'(x) = \\frac{-3}{(x - 1)^2}$.', content_en: 'Derivative $f\'(x) = \\frac{-3}{(x - 1)^2}$.', is_correct: true },
      { option_key: 'c', content_vi: 'Đạo hàm $f\'(x) > 0, \\forall x \\neq 1$.', content_en: 'Derivative $f\'(x) > 0, \\forall x \\neq 1$.', is_correct: false },
      { option_key: 'd', content_vi: 'Hệ số góc tiếp tuyến tại $x_0 = 2$ bằng $-3$.', content_en: 'Tangent slope at $x_0 = 2$ is $-3$.', is_correct: true },
    ],
    correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
    solution_vi: 'a-Đ, b-Đ, c-S, d-Đ.',
    solution_en: 'a-True, b-True, c-False, d-True.',
    math_skill: 'Đạo hàm hàm phân thức',
    english_skill: 'Rational function derivative',
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
    question_vi: 'Một chất điểm chuyển động theo quãng đường $s(t) = -t^3 + 6t^2 + 15t$ ($s$ tính bằng m, $t$ tính bằng s). Vận tốc tức thời cực đại của chất điểm bằng bao nhiêu m/s?',
    question_en: 'A particle moves with position $s(t) = -t^3 + 6t^2 + 15t$. What is the maximum instantaneous velocity in m/s?',
    correct_answer: '27',
    solution_vi: '$v(t) = -3t^2 + 12t + 15$ cực đại tại $t = 2$, $v(2) = 27\\text{ m/s}$.',
    solution_en: '$v(2) = 27\\text{ m/s}$.',
    math_skill: 'Vận tốc tức thời cực đại',
    english_skill: 'Maximum instantaneous velocity',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 6. LỚP 11 - CHỦ ĐỀ HÀM SỐ MŨ VÀ LOGARIT (top-11-6-1)
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
    question_en: 'The solution of $2^{2x - 1} = 32$ is:',
    options: [
      { option_key: 'A', content_vi: '$x = 3$', content_en: '$x = 3$', is_correct: true },
      { option_key: 'B', content_vi: '$x = 2$', content_en: '$x = 2$', is_correct: false },
      { option_key: 'C', content_vi: '$x = 5/2$', content_en: '$x = 5/2$', is_correct: false },
      { option_key: 'D', content_vi: '$x = 4$', content_en: '$x = 4$', is_correct: false },
    ],
    solution_vi: '$2^{2x - 1} = 2^5 \\implies x = 3$.',
    solution_en: '$2^{2x - 1} = 2^5 \\implies x = 3$.',
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
    question_en: 'Given $\\log_3(x - 2) + \\log_3(x + 6) = 2$. Determine True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Điều kiện xác định $x > 2$.', content_en: 'Domain condition $x > 2$.', is_correct: true },
      { option_key: 'b', content_vi: 'Phương trình biến đổi về $(x - 2)(x + 6) = 9$.', content_en: 'Simplifies to $(x - 2)(x + 6) = 9$.', is_correct: true },
      { option_key: 'c', content_vi: 'Phương trình có 2 nghiệm $x = 3$ và $x = -7$.', content_en: 'Has two solutions $x = 3$ and $x = -7$.', is_correct: false },
      { option_key: 'd', content_vi: 'Phương trình có đúng một nghiệm duy nhất $x = 3$.', content_en: 'Has one unique solution $x = 3$.', is_correct: true },
    ],
    correct_answer: 'a-Đ, b-Đ, c-S, d-Đ',
    solution_vi: 'a-Đ, b-Đ, c-S, d-Đ.',
    solution_en: 'a-True, b-True, c-False, d-True.',
    math_skill: 'Phương trình logarit',
    english_skill: 'Logarithmic equation',
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
    question_en: 'Bacteria culture starts with 1000 bacteria: $N(t) = 1000 \\cdot 2^t$. How many hours to reach 64000 bacteria?',
    correct_answer: '6',
    solution_vi: '$2^t = 64 \\implies t = 6\\text{ giờ}$.',
    solution_en: '$2^t = 64 \\implies t = 6\\text{ hours}$.',
    math_skill: 'Tăng trưởng hàm mũ',
    english_skill: 'Exponential growth',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 7. LỚP 11 - CHỦ ĐỀ DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN (top-11-2-1, top-11-2-2, top-11-2-3)
  // =========================================================================
  {
    id: 'q-11-2-1-tn1',
    topic_id: 'top-11-2-1',
    type_id: 'type-11-5-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\frac{2n - 1}{n + 1}$. Giá trị của $u_4$ bằng:',
    question_en: 'For $(u_n)$ with $u_n = \\frac{2n - 1}{n + 1}$, the 4th term $u_4$ is:',
    options: [
      { option_key: 'A', content_vi: '$7/5$', content_en: '$7/5$', is_correct: true },
      { option_key: 'B', content_vi: '$4/5$', content_en: '$4/5$', is_correct: false },
      { option_key: 'C', content_vi: '$3/5$', content_en: '$3/5$', is_correct: false },
      { option_key: 'D', content_vi: '$2$', content_en: '$2$', is_correct: false },
    ],
    solution_vi: '$u_4 = 7/5$.',
    solution_en: '$u_4 = 7/5$.',
    correct_answer: 'A',
    math_skill: 'Số hạng dãy số',
    english_skill: 'Sequence term',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-2-2-tn1',
    topic_id: 'top-11-2-2',
    type_id: 'type-11-6-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và công sai $d = 3$. Số hạng thứ 6 của cấp số cộng là:',
    question_en: 'For an AP $(u_n)$ with $u_1 = 4$ and $d = 3$, the 6th term is:',
    options: [
      { option_key: 'A', content_vi: '$19$', content_en: '$19$', is_correct: true },
      { option_key: 'B', content_vi: '$22$', content_en: '$22$', is_correct: false },
      { option_key: 'C', content_vi: '$16$', content_en: '$16$', is_correct: false },
      { option_key: 'D', content_vi: '$20$', content_en: '$20$', is_correct: false },
    ],
    solution_vi: '$u_6 = 4 + 15 = 19$.',
    solution_en: '$u_6 = 19$.',
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
    question_en: 'Given an AP $(u_n)$ with $u_1 = 2$ and $d = 5$. Determine True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Số hạng tổng quát $u_n = 5n - 3$.', content_en: 'General term $u_n = 5n - 3$.', is_correct: true },
      { option_key: 'b', content_vi: 'Số $102$ là một số hạng của cấp số cộng.', content_en: '102 is a term of the AP.', is_correct: true },
      { option_key: 'c', content_vi: 'Tổng 10 số hạng đầu $S_{10} = 245$.', content_en: 'Sum $S_{10} = 245$.', is_correct: true },
      { option_key: 'd', content_vi: 'Dãy số $(u_n)$ là một dãy số giảm.', content_en: 'Sequence is strictly decreasing.', is_correct: false },
    ],
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    solution_vi: 'a-Đ, b-Đ, c-Đ, d-S.',
    solution_en: 'a-True, b-True, c-True, d-False.',
    math_skill: 'Tính chất cấp số cộng',
    english_skill: 'AP properties',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-2-3-tn1',
    topic_id: 'top-11-2-3',
    type_id: 'type-11-7-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Giá trị của $u_5$ bằng:',
    question_en: 'For GP $(u_n)$ with $u_1 = 3$ and $q = 2$, $u_5$ is:',
    options: [
      { option_key: 'A', content_vi: '$48$', content_en: '$48$', is_correct: true },
      { option_key: 'B', content_vi: '$24$', content_en: '$24$', is_correct: false },
      { option_key: 'C', content_vi: '$96$', content_en: '$96$', is_correct: false },
      { option_key: 'D', content_vi: '$32$', content_en: '$32$', is_correct: false },
    ],
    solution_vi: '$u_5 = 3 \\cdot 16 = 48$.',
    solution_en: '$u_5 = 48$.',
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
    question_vi: 'Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Tính tổng $S_6$.',
    question_en: 'For a GP $(u_n)$ with $u_1 = 3$ and $q = 2$, compute sum $S_6$.',
    correct_answer: '189',
    solution_vi: '$S_6 = \\frac{3(1 - 64)}{1 - 2} = 189$.',
    solution_en: '$S_6 = 189$.',
    math_skill: 'Tổng cấp số nhân',
    english_skill: 'GP sum',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 8. LỚP 10 - MỆNH ĐỀ & HÀM BẬC HAI (top-10-1-1, top-10-6-1)
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
    question_en: 'Which proposition is TRUE?',
    options: [
      { option_key: 'A', content_vi: '$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$', content_en: '$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$', is_correct: true },
      { option_key: 'B', content_vi: '$\\exists x \\in \\mathbb{R}, x^2 < 0$', content_en: '$\\exists x \\in \\mathbb{R}, x^2 < 0$', is_correct: false },
      { option_key: 'C', content_vi: '$\\forall n \\in \\mathbb{N}, n^2 > n$', content_en: '$\\forall n \\in \\mathbb{N}, n^2 > n$', is_correct: false },
      { option_key: 'D', content_vi: '$\\pi > 4$', content_en: '$\\pi > 4$', is_correct: false },
    ],
    solution_vi: '$x^2 + 1 \\ge 1 > 0$ luôn đúng.',
    solution_en: '$x^2 + 1 > 0$ is always true.',
    correct_answer: 'A',
    math_skill: 'Tính đúng sai mệnh đề',
    english_skill: 'Proposition truth value',
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
    question_vi: 'Toạ độ đỉnh của Parabol $y = x^2 - 4x + 3$ là:',
    question_en: 'Vertex of parabola $y = x^2 - 4x + 3$ is:',
    options: [
      { option_key: 'A', content_vi: '$I(2; -1)$', content_en: '$I(2, -1)$', is_correct: true },
      { option_key: 'B', content_vi: '$I(-2; 15)$', content_en: '$I(-2, 15)$', is_correct: false },
      { option_key: 'C', content_vi: '$I(4; 3)$', content_en: '$I(4, 3)$', is_correct: false },
      { option_key: 'D', content_vi: '$I(2; 3)$', content_en: '$I(2, 3)$', is_correct: false },
    ],
    solution_vi: '$x_I = 2, y_I = -1 \\implies I(2; -1)$.',
    solution_en: 'Vertex $I(2, -1)$.',
    correct_answer: 'A',
    math_skill: 'Đỉnh Parabol',
    english_skill: 'Parabola vertex',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },

  // =========================================================================
  // 3. LỚP 11 - CHƯƠNG I: HÀM SỐ LƯỢNG GIÁC VÀ PHƯƠNG TRÌNH LƯỢNG GIÁC (top-11-1-3)
  // =========================================================================
  {
    id: 'q-11-1-3-tn1',
    topic_id: 'top-11-1-3',
    type_id: 'type-11-1-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Tập xác định của hàm số $y = \\tan\\left(x - \\frac{\\pi}{4}\\right)$ là:',
    question_en: 'The domain of function $y = \\tan\\left(x - \\frac{\\pi}{4}\\right)$ is:',
    options: [
      { option_key: 'A', content_vi: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{3\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', content_en: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{3\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', is_correct: true },
      { option_key: 'B', content_vi: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', content_en: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', is_correct: false },
      { option_key: 'C', content_vi: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', content_en: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', is_correct: false },
      { option_key: 'D', content_vi: '$D = \\mathbb{R}$', content_en: '$D = \\mathbb{R}$', is_correct: false },
    ],
    solution_vi: 'Điều kiện xác định: $x - \\frac{\\pi}{4} \\ne \\frac{\\pi}{2} + k\\pi \\iff x \\ne \\frac{3\\pi}{4} + k\\pi\\, (k \\in \\mathbb{Z})$.',
    solution_en: 'Domain condition: $x - \\frac{\\pi}{4} \\ne \\frac{\\pi}{2} + k\\pi \\iff x \\ne \\frac{3\\pi}{4} + k\\pi$.',
    correct_answer: 'A',
    math_skill: 'Tập xác định hàm tan',
    english_skill: 'Domain of tangent function',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-1-3-tn2',
    topic_id: 'top-11-1-3',
    type_id: 'type-11-1-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Chu kỳ tuần hoàn của hàm số $y = \\sin(2x)$ là:',
    question_en: 'What is the period of the function $y = \\sin(2x)$?',
    options: [
      { option_key: 'A', content_vi: '$\\pi$', content_en: '$\\pi$', is_correct: true },
      { option_key: 'B', content_vi: '$2\\pi$', content_en: '$2\\pi$', is_correct: false },
      { option_key: 'C', content_vi: '$\\frac{\\pi}{2}$', content_en: '$\\frac{\\pi}{2}$', is_correct: false },
      { option_key: 'D', content_vi: '$4\\pi$', content_en: '$4\\pi$', is_correct: false },
    ],
    solution_vi: 'Hàm số $y = \\sin(ax)$ có chu kỳ $T = \\frac{2\\pi}{|a|} = \\frac{2\\pi}{2} = \\pi$.',
    solution_en: 'Period $T = \\frac{2\\pi}{2} = \\pi$.',
    correct_answer: 'A',
    math_skill: 'Chu kỳ hàm số lượng giác',
    english_skill: 'Period of trig function',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-1-3-tn3',
    topic_id: 'top-11-1-3',
    type_id: 'type-11-1-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Giá trị lớn nhất của hàm số $y = 3\\cos\\left(x - \\frac{\\pi}{6}\\right) + 2$ bằng:',
    question_en: 'What is the maximum value of $y = 3\\cos\\left(x - \\frac{\\pi}{6}\\right) + 2$?',
    options: [
      { option_key: 'A', content_vi: '$5$', content_en: '$5$', is_correct: true },
      { option_key: 'B', content_vi: '$3$', content_en: '$3$', is_correct: false },
      { option_key: 'C', content_vi: '$1$', content_en: '$1$', is_correct: false },
      { option_key: 'D', content_vi: '$2$', content_en: '$2$', is_correct: false },
    ],
    solution_vi: 'Vì $-1 \\le \\cos(...) \\le 1 \\implies 3(-1)+2 \\le y \\le 3(1)+2 \\implies \\max y = 5$.',
    solution_en: 'Since $-1 \\le \\cos(...) \\le 1 \\implies \\max = 3(1) + 2 = 5$.',
    correct_answer: 'A',
    math_skill: 'GTLN của hàm lượng giác',
    english_skill: 'Maximum value of trig function',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-1-3-tn4',
    topic_id: 'top-11-1-3',
    type_id: 'type-11-1-2',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Mực nước biển tại một cảng biển được mô hình hoá bởi $h(t) = 4\\cos\\left(\\frac{\\pi t}{6}\\right) + 10$ (mét), với $t$ là số giờ tính từ lúc 0h. Mực nước biển cao nhất trong ngày bằng bao nhiêu?',
    question_en: 'The sea tide level is modeled by $h(t) = 4\\cos\\left(\\frac{\\pi t}{6}\\right) + 10$ (meters), where $t$ is hours from midnight. What is the maximum tide level?',
    options: [
      { option_key: 'A', content_vi: '$14\\text{ m}$', content_en: '$14\\text{ m}$', is_correct: true },
      { option_key: 'B', content_vi: '$10\\text{ m}$', content_en: '$10\\text{ m}$', is_correct: false },
      { option_key: 'C', content_vi: '$6\\text{ m}$', content_en: '$6\\text{ m}$', is_correct: false },
      { option_key: 'D', content_vi: '$8\\text{ m}$', content_en: '$8\\text{ m}$', is_correct: false },
    ],
    solution_vi: 'Mực nước cao nhất khi $\\cos\\left(\\frac{\\pi t}{6}\\right) = 1 \\implies h = 4(1) + 10 = 14\\text{ m}$.',
    solution_en: 'Max height occurs when $\\cos = 1 \\implies h = 4(1) + 10 = 14\\text{ m}$.',
    correct_answer: 'A',
    math_skill: 'Ứng dụng thực tế thuỷ triều',
    english_skill: 'Tide level optimization',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-1-3-ds1',
    topic_id: 'top-11-1-3',
    type_id: 'type-11-1-1',
    question_type: 'TRUE_FALSE',
    format_type: 'DS',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Cho hàm số $y = 2\\cos\\left(2x - \\frac{\\pi}{3}\\right) + 1$. Xét tính đúng/sai của các mệnh đề sau:',
    question_en: 'Given $y = 2\\cos\\left(2x - \\frac{\\pi}{3}\\right) + 1$. Determine whether each statement is True (Đ) or False (S):',
    options: [
      { option_key: 'a', content_vi: 'Tập xác định của hàm số là $D = \\mathbb{R}$.', content_en: 'The domain is $D = \\mathbb{R}$.', is_correct: true },
      { option_key: 'b', content_vi: 'Tập giá trị của hàm số là $[-1; 3]$.', content_en: 'The range of the function is $[-1, 3]$.', is_correct: true },
      { option_key: 'c', content_vi: 'Chu kỳ tuần hoàn của hàm số là $T = \\pi$.', content_en: 'The period of the function is $T = \\pi$.', is_correct: true },
      { option_key: 'd', content_vi: 'Hàm số đã cho là một hàm số chẵn.', content_en: 'The function is an even function.', is_correct: false },
    ],
    solution_vi: 'a-Đ; b-Đ ($-2+1 \\le y \\le 2+1$); c-Đ ($T = 2\\pi/2 = \\pi$); d-S (chứa pha ban đầu nên không chẵn).',
    solution_en: 'a-True, b-True, c-True, d-False.',
    correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
    math_skill: 'Khảo sát hàm lượng giác',
    english_skill: 'Trig function properties',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-1-3-tln1',
    topic_id: 'top-11-1-3',
    type_id: 'type-11-1-1',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Tìm giá trị lớn nhất của hàm số $y = 4\\sin x + 3$.',
    question_en: 'Find the maximum value of $y = 4\\sin x + 3$.',
    correct_answer: '7',
    solution_vi: 'Vì $-1 \\le \\sin x \\le 1 \\implies \\max y = 4(1) + 3 = 7$.',
    solution_en: '$\max y = 4(1) + 3 = 7$.',
    math_skill: 'GTLN hàm lượng giác',
    english_skill: 'Maximum of trig function',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
  {
    id: 'q-11-1-3-tln2',
    topic_id: 'top-11-1-3',
    type_id: 'type-11-1-2',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Biên độ dao động (tính theo cm) của con lắc $s(t) = 6\\sin\\left(2\\pi t - \\frac{\\pi}{4}\\right) + 2$ bằng bao nhiêu?',
    question_en: 'What is the amplitude (in cm) of oscillation $s(t) = 6\\sin\\left(2\\pi t - \\frac{\\pi}{4}\\right) + 2$?',
    correct_answer: '6',
    solution_vi: 'Biên độ dao động $A = 6\\text{ cm}$.',
    solution_en: 'Amplitude $A = 6\\text{ cm}$.',
    math_skill: 'Biên độ dao động',
    english_skill: 'Oscillation amplitude',
    status: 'PUBLISHED',
    created_by: 'usr-teacher-1',
  },
];

// =========================================================================
// DOMAIN-AWARE MATH QUESTION GENERATION ENGINE (GDPT 2018 KẾT NỐI TRI THỨC)
// =========================================================================

export type MathDomain =
  | 'TRIGONOMETRY_11'
  | 'SEQUENCES_11'
  | 'STATISTICS_GROUPED_11'
  | 'PARALLEL_SPATIAL_11'
  | 'LIMITS_CONTINUITY_11'
  | 'EXP_LOG_11'
  | 'DERIVATIVE_11'
  | 'ORTHOGONAL_SPATIAL_11'
  | 'MONOTONICITY_12'
  | 'MAX_MIN_12'
  | 'ASYMPTOTE_12'
  | 'VECTORS_OXYZ_12'
  | 'STATISTICS_GROUPED_12'
  | 'INTEGRALS_12'
  | 'PLANE_LINE_SPHERE_OXYZ_12'
  | 'PROBABILITY_CONDITIONAL_12'
  | 'SETS_PROPOSITIONS_10'
  | 'INEQUALITIES_2VAR_10'
  | 'TRIANGLE_TRIG_10'
  | 'VECTORS_OXY_10'
  | 'STATISTICS_10'
  | 'PARABOLA_10'
  | 'OXY_GEOMETRY_10'
  | 'GENERAL_MATH';

export function detectMathDomain(typeId?: string, topicId?: string, lessonId?: string): MathDomain {
  const top = (topicId || '').toLowerCase();
  const les = (lessonId || '').toLowerCase();
  const typ = (typeId || '').toLowerCase();
  const full = `${typ} ${top} ${les}`;

  // LỚP 12
  if (top.includes('12-6') || les.includes('12-6') || full.includes('xác suất') || full.includes('bayes') || full.includes('điều kiện')) return 'PROBABILITY_CONDITIONAL_12';
  if (top.includes('12-5') || les.includes('12-5') || full.includes('mặt phẳng') || full.includes('đường thẳng') || full.includes('mặt cầu')) return 'PLANE_LINE_SPHERE_OXYZ_12';
  if (top.includes('12-4') || les.includes('12-4') || full.includes('nguyên hàm') || full.includes('tích phân')) return 'INTEGRALS_12';
  if (top.includes('12-3') || les.includes('12-3') || (full.includes('phân tán') && full.includes('12'))) return 'STATISTICS_GROUPED_12';
  if (top.includes('12-2') || les.includes('12-2') || full.includes('oxyz') || full.includes('vectơ')) return 'VECTORS_OXYZ_12';
  if (top.includes('12-1-3') || les.includes('12-1-3') || full.includes('tiệm cận')) return 'ASYMPTOTE_12';
  if (top.includes('12-1-2') || les.includes('12-1-2') || full.includes('gtln') || full.includes('gtnn')) return 'MAX_MIN_12';
  if (top.includes('12-1-1') || top.includes('12-1') || les.includes('12-1') || full.includes('đồng biến') || full.includes('cực trị')) return 'MONOTONICITY_12';

  // LỚP 11
  if (top.includes('11-8') || les.includes('11-8') || full.includes('vuông góc')) return 'ORTHOGONAL_SPATIAL_11';
  if (top.includes('11-7') || les.includes('11-7') || full.includes('đạo hàm')) return 'DERIVATIVE_11';
  if (top.includes('11-6') || les.includes('11-6') || full.includes('mũ') || full.includes('log')) return 'EXP_LOG_11';
  if (top.includes('11-5') || les.includes('11-5') || full.includes('giới hạn') || full.includes('liên tục')) return 'LIMITS_CONTINUITY_11';
  if (top.includes('11-4') || les.includes('11-4') || full.includes('song song')) return 'PARALLEL_SPATIAL_11';
  if (top.includes('11-3') || les.includes('11-3') || (full.includes('trung tâm') && full.includes('11'))) return 'STATISTICS_GROUPED_11';
  if (top.includes('11-2') || les.includes('11-2') || full.includes('dãy số') || full.includes('cấp số')) return 'SEQUENCES_11';
  if (top.includes('11-1') || les.includes('11-1') || full.includes('lượng giác') || full.includes('sin') || full.includes('cos') || full.includes('tan')) return 'TRIGONOMETRY_11';

  // LỚP 10
  if (top.includes('10-7') || les.includes('10-7') || full.includes('conic') || full.includes('đường tròn')) return 'OXY_GEOMETRY_10';
  if (top.includes('10-6') || les.includes('10-6') || full.includes('parabol') || full.includes('bậc hai')) return 'PARABOLA_10';
  if (top.includes('10-5') || les.includes('10-5') || (full.includes('số liệu') && full.includes('10'))) return 'STATISTICS_10';
  if (top.includes('10-4') || les.includes('10-4') || (full.includes('vectơ') && full.includes('phẳng'))) return 'VECTORS_OXY_10';
  if (top.includes('10-3') || les.includes('10-3') || full.includes('tam giác') || full.includes('heron')) return 'TRIANGLE_TRIG_10';
  if (top.includes('10-2') || les.includes('10-2') || full.includes('bất phương trình') || full.includes('miền nghiệm')) return 'INEQUALITIES_2VAR_10';
  if (top.includes('10-1') || les.includes('10-1') || full.includes('mệnh đề') || full.includes('tập hợp')) return 'SETS_PROPOSITIONS_10';

  return 'GENERAL_MATH';
}

export function getQuestionsForLesson(lessonId: string, topicId?: string): Question[] {
  const structured = getQuestionsForMathTypeStructured(lessonId, topicId);
  return structured.all;
}

/**
 * ĐẢM BẢO TỐI THIỂU 10 CÂU TN - 4 CÂU Đ/S - 4 CÂU TLN DÚNG CHỦ ĐỀ & KHỐI LỚP (GDPT 2018)
 */
export function getQuestionsForMathTypeStructured(typeId: string, topicId?: string): {
  tn: Question[];
  ds: Question[];
  tln: Question[];
  all: Question[];
} {
  const existing = FULL_QUESTION_BANK.filter(
    (q) => (q.type_id && q.type_id === typeId) || (q.topic_id && topicId && q.topic_id === topicId)
  );

  let tnList = existing.filter((q) => q.format_type === 'TN' || q.question_type === 'MCQ');
  let dsList = existing.filter((q) => q.format_type === 'DS' || q.question_type === 'TRUE_FALSE');
  let tlnList = existing.filter((q) => q.format_type === 'TLN' || q.question_type === 'SHORT');

  const domain = detectMathDomain(typeId, topicId);
  const tId = topicId || typeId || 'top-11-1-3';

  // Thư viện câu hỏi tự sinh CHUẨN XÁC NỘI DUNG THEO TỪNG CHỦ ĐỀ MÔN TOÁN
  const domainQuestions = generateDomainSpecificQuestions(domain, typeId, tId);

  // Ghép câu hỏi có sẵn với câu hỏi tự sinh chuẩn chủ đề
  if (tnList.length < 10) {
    tnList = [...tnList, ...domainQuestions.tn.slice(0, 10 - tnList.length)];
  }
  if (dsList.length < 4) {
    dsList = [...dsList, ...domainQuestions.ds.slice(0, 4 - dsList.length)];
  }
  if (tlnList.length < 4) {
    tlnList = [...tlnList, ...domainQuestions.tln.slice(0, 4 - tlnList.length)];
  }

  const finalTn = tnList.slice(0, 10);
  const finalDs = dsList.slice(0, 4);
  const finalTln = tlnList.slice(0, 4);

  return {
    tn: finalTn,
    ds: finalDs,
    tln: finalTln,
    all: [...finalTn, ...finalDs, ...finalTln],
  };
}

/**
 * SINH CÂU HỎI CHÍNH XÁC NỘI DUNG THEO TỪNG CHỦ ĐỀ BÀI HỌC VÀ KHỐI LỚP (GDPT 2018 KNTT)
 */
function generateDomainSpecificQuestions(domain: MathDomain, typeId: string, topicId: string): {
  tn: Question[];
  ds: Question[];
  tln: Question[];
} {
  if (domain === 'TRIGONOMETRY_11') {
    return {
      tn: [
        {
          id: `trig-tn-1`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: 'Tập xác định của hàm số $y = \\tan\\left(x - \\frac{\\pi}{4}\\right)$ là:',
          question_en: 'The domain of function $y = \\tan\\left(x - \\frac{\\pi}{4}\\right)$ is:',
          options: [
            { option_key: 'A', content_vi: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{3\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', content_en: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{3\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', is_correct: true },
            { option_key: 'B', content_vi: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', content_en: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', is_correct: false },
            { option_key: 'C', content_vi: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', content_en: '$D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$', is_correct: false },
            { option_key: 'D', content_vi: '$D = \\mathbb{R}$', content_en: '$D = \\mathbb{R}$', is_correct: false },
          ],
          solution_vi: 'ĐK: $x - \\frac{\\pi}{4} \\ne \\frac{\\pi}{2} + k\\pi \\iff x \\ne \\frac{3\\pi}{4} + k\\pi$.',
          solution_en: '$x - \\frac{\\pi}{4} \\ne \\frac{\\pi}{2} + k\\pi \\iff x \\ne \\frac{3\\pi}{4} + k\\pi$.',
          correct_answer: 'A',
          math_skill: 'Tập xác định hàm số lượng giác',
          english_skill: 'Domain of trigonometric function',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tn-2`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: 'Chu kỳ tuần hoàn của hàm số $y = \\sin(2x)$ là bao nhiêu?',
          question_en: 'What is the period of the function $y = \\sin(2x)$?',
          options: [
            { option_key: 'A', content_vi: '$\\pi$', content_en: '$\\pi$', is_correct: true },
            { option_key: 'B', content_vi: '$2\\pi$', content_en: '$2\\pi$', is_correct: false },
            { option_key: 'C', content_vi: '$\\frac{\\pi}{2}$', content_en: '$\\frac{\\pi}{2}$', is_correct: false },
            { option_key: 'D', content_vi: '$4\\pi$', content_en: '$4\\pi$', is_correct: false },
          ],
          solution_vi: 'Chu kỳ $T = \\frac{2\\pi}{|a|} = \\frac{2\\pi}{2} = \\pi$.',
          solution_en: 'Period $T = \\frac{2\\pi}{2} = \\pi$.',
          correct_answer: 'A',
          math_skill: 'Chu kỳ hàm số lượng giác',
          english_skill: 'Period of trig function',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tn-3`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: 'Giá trị lớn nhất của hàm số $y = 3\\cos\\left(x - \\frac{\\pi}{6}\\right) + 2$ bằng bao nhiêu?',
          question_en: 'What is the maximum value of $y = 3\\cos\\left(x - \\frac{\\pi}{6}\\right) + 2$?',
          options: [
            { option_key: 'A', content_vi: '$5$', content_en: '$5$', is_correct: true },
            { option_key: 'B', content_vi: '$3$', content_en: '$3$', is_correct: false },
            { option_key: 'C', content_vi: '$1$', content_en: '$1$', is_correct: false },
            { option_key: 'D', content_vi: '$2$', content_en: '$2$', is_correct: false },
          ],
          solution_vi: 'Vì $-1 \\le \\cos\\left(x - \\frac{\\pi}{6}\\right) \\le 1 \\implies 3(-1)+2 \\le y \\le 3(1)+2 \\implies \\max y = 5$.',
          solution_en: 'Since $-1 \\le \\cos(...) \\le 1 \\implies \\max = 3(1) + 2 = 5$.',
          correct_answer: 'A',
          math_skill: 'GTLN của hàm số lượng giác',
          english_skill: 'Maximum of trig function',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tn-4`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: 'Mực nước biển tại một cảng biển được mô hình hoá bởi $h(t) = 4\\cos\\left(\\frac{\\pi t}{6}\\right) + 10$ (mét), với $t$ là số giờ tính từ lúc 0h. Mực nước biển cao nhất trong ngày bằng bao nhiêu?',
          question_en: 'The sea tide level is modeled by $h(t) = 4\\cos\\left(\\frac{\\pi t}{6}\\right) + 10$ (meters), where $t$ is hours from midnight. What is the maximum tide level?',
          options: [
            { option_key: 'A', content_vi: '$14\\text{ m}$', content_en: '$14\\text{ m}$', is_correct: true },
            { option_key: 'B', content_vi: '$10\\text{ m}$', content_en: '$10\\text{ m}$', is_correct: false },
            { option_key: 'C', content_vi: '$6\\text{ m}$', content_en: '$6\\text{ m}$', is_correct: false },
            { option_key: 'D', content_vi: '$8\\text{ m}$', content_en: '$8\\text{ m}$', is_correct: false },
          ],
          solution_vi: 'Mực nước cao nhất khi $\\cos\\left(\\frac{\\pi t}{6}\\right) = 1 \\implies h = 4(1) + 10 = 14\\text{ m}$.',
          solution_en: 'Max height occurs when $\\cos = 1 \\implies h = 4(1) + 10 = 14\\text{ m}$.',
          correct_answer: 'A',
          math_skill: 'Ứng dụng thực tế thuỷ triều',
          english_skill: 'Tide level optimization',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tn-5`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: 'Trong các hàm số sau đây, hàm số nào là hàm số lẻ?',
          question_en: 'Which of the following functions is an odd function?',
          options: [
            { option_key: 'A', content_vi: '$y = \\sin x$', content_en: '$y = \\sin x$', is_correct: true },
            { option_key: 'B', content_vi: '$y = \\cos x$', content_en: '$y = \\cos x$', is_correct: false },
            { option_key: 'C', content_vi: '$y = \\cos(2x)$', content_en: '$y = \\cos(2x)$', is_correct: false },
            { option_key: 'D', content_vi: '$y = \\sin^2 x$', content_en: '$y = \\sin^2 x$', is_correct: false },
          ],
          solution_vi: 'Hàm số $y = \\sin x$ thoả mãn $\\sin(-x) = -\\sin x$ nên là hàm số lẻ.',
          solution_en: '$y = \\sin x$ satisfies $\\sin(-x) = -\\sin x$, so it is an odd function.',
          correct_answer: 'A',
          math_skill: 'Tính chẵn lẻ hàm số lượng giác',
          english_skill: 'Even and odd trig functions',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tn-6`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: 'Dao động của một con lắc đơn được mô hình hoá bởi $s(t) = 5\\cos\\left(2\\pi t + \\frac{\\pi}{3}\\right)\\text{ (cm)}$. Li độ ban đầu $s(0)$ tại thời điểm $t = 0$ bằng:',
          question_en: 'A pendulum displacement is $s(t) = 5\\cos\\left(2\\pi t + \\frac{\\pi}{3}\\right)\\text{ (cm)}$. The initial position $s(0)$ is:',
          options: [
            { option_key: 'A', content_vi: '$2.5\\text{ cm}$', content_en: '$2.5\\text{ cm}$', is_correct: true },
            { option_key: 'B', content_vi: '$5\\text{ cm}$', content_en: '$5\\text{ cm}$', is_correct: false },
            { option_key: 'C', content_vi: '$0\\text{ cm}$', content_en: '$0\\text{ cm}$', is_correct: false },
            { option_key: 'D', content_vi: '$2.5\\sqrt{3}\\text{ cm}$', content_en: '$2.5\\sqrt{3}\\text{ cm}$', is_correct: false },
          ],
          solution_vi: '$s(0) = 5\\cos\\left(\\frac{\\pi}{3}\\right) = 5 \\cdot \\frac{1}{2} = 2.5\\text{ cm}$.',
          solution_en: '$s(0) = 5\\cos(\\pi/3) = 2.5\\text{ cm}$.',
          correct_answer: 'A',
          math_skill: 'Ứng dụng dao động điều hoà',
          english_skill: 'Harmonic oscillation initial state',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tn-7`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: 'Giá trị nhỏ nhất của hàm số $y = 2\\sin^2 x - 1$ là:',
          question_en: 'The minimum value of $y = 2\\sin^2 x - 1$ is:',
          options: [
            { option_key: 'A', content_vi: '$-1$', content_en: '$-1$', is_correct: true },
            { option_key: 'B', content_vi: '$1$', content_en: '$1$', is_correct: false },
            { option_key: 'C', content_vi: '$0$', content_en: '$0$', is_correct: false },
            { option_key: 'D', content_vi: '$-2$', content_en: '$-2$', is_correct: false },
          ],
          solution_vi: 'Vì $0 \\le \\sin^2 x \\le 1 \\implies 2(0)-1 \\le y \\le 2(1)-1 \\implies \\min y = -1$.',
          solution_en: 'Since $0 \\le \\sin^2 x \\le 1 \\implies \\min = -1$.',
          correct_answer: 'A',
          math_skill: 'GTNN của hàm lượng giác bậc hai',
          english_skill: 'Minimum of squared trig function',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tn-8`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'HARD',
          language_level: 2,
          question_vi: 'Tập giá trị của hàm số $y = 5\\sin x - 12\\cos x + 3$ là đoạn $[a; b]$. Tổng $a + b$ bằng bao nhiêu?',
          question_en: 'The range of $y = 5\\sin x - 12\\cos x + 3$ is $[a, b]$. What is $a + b$?',
          options: [
            { option_key: 'A', content_vi: '$6$', content_en: '$6$', is_correct: true },
            { option_key: 'B', content_vi: '$16$', content_en: '$16$', is_correct: false },
            { option_key: 'C', content_vi: '$-10$', content_en: '$-10$', is_correct: false },
            { option_key: 'D', content_vi: '$26$', content_en: '$26$', is_correct: false },
          ],
          solution_vi: 'Biến đổi: $-\\sqrt{5^2+12^2} \\le 5\\sin x - 12\\cos x \\le \\sqrt{5^2+12^2} \\implies -13 \\le 5\\sin x - 12\\cos x \\le 13$. Tập giá trị $[-10; 16] \\implies a+b = -10+16 = 6$.',
          solution_en: 'Range $[-10, 16] \\implies a + b = 6$.',
          correct_answer: 'A',
          math_skill: 'Tập giá trị dạng a sin x + b cos x',
          english_skill: 'Range of linear trig combination',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tn-9`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: 'Nghiệm của phương trình lượng giác cơ bản $\\sin x = \\frac{1}{2}$ là:',
          question_en: 'The solution to basic trigonometric equation $\\sin x = \\frac{1}{2}$ is:',
          options: [
            { option_key: 'A', content_vi: '$x = \\frac{\\pi}{6} + k2\\pi, x = \\frac{5\\pi}{6} + k2\\pi\\, (k \\in \\mathbb{Z})$', content_en: '$x = \\frac{\\pi}{6} + k2\\pi, x = \\frac{5\\pi}{6} + k2\\pi\\, (k \\in \\mathbb{Z})$', is_correct: true },
            { option_key: 'B', content_vi: '$x = \\pm \\frac{\\pi}{6} + k2\\pi\\, (k \\in \\mathbb{Z})$', content_en: '$x = \\pm \\frac{\\pi}{6} + k2\\pi\\, (k \\in \\mathbb{Z})$', is_correct: false },
            { option_key: 'C', content_vi: '$x = \\frac{\\pi}{3} + k2\\pi, x = \\frac{2\\pi}{3} + k2\\pi\\, (k \\in \\mathbb{Z})$', content_en: '$x = \\frac{\\pi}{3} + k2\\pi, x = \\frac{2\\pi}{3} + k2\\pi\\, (k \\in \\mathbb{Z})$', is_correct: false },
            { option_key: 'D', content_vi: '$x = \\frac{\\pi}{6} + k\\pi\\, (k \\in \\mathbb{Z})$', content_en: '$x = \\frac{\\pi}{6} + k\\pi\\, (k \\in \\mathbb{Z})$', is_correct: false },
          ],
          solution_vi: '$\\sin x = \\sin\\left(\\frac{\\pi}{6}\\right) \\iff x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\pi - \\frac{\\pi}{6} + k2\\pi = \\frac{5\\pi}{6} + k2\\pi$.',
          solution_en: '$\sin x = \sin(\pi/6) \implies x = \pi/6 + k2\pi, x = 5\pi/6 + k2\pi$.',
          correct_answer: 'A',
          math_skill: 'Giải phương trình sin x = a',
          english_skill: 'Solve sine equation',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tn-10`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: 'Chu kỳ tuần hoàn của hàm số $y = \\tan(3x)$ bằng bao nhiêu?',
          question_en: 'What is the period of function $y = \\tan(3x)$?',
          options: [
            { option_key: 'A', content_vi: '$\\frac{\\pi}{3}$', content_en: '$\\frac{\\pi}{3}$', is_correct: true },
            { option_key: 'B', content_vi: '$\\pi$', content_en: '$\\pi$', is_correct: false },
            { option_key: 'C', content_vi: '$\\frac{2\\pi}{3}$', content_en: '$\\frac{2\\pi}{3}$', is_correct: false },
            { option_key: 'D', content_vi: '$3\\pi$', content_en: '$3\\pi$', is_correct: false },
          ],
          solution_vi: 'Hàm số $y = \\tan(ax)$ có chu kỳ $T = \\frac{\\pi}{|a|} = \\frac{\\pi}{3}$.',
          solution_en: 'Period of $\\tan(ax)$ is $T = \\frac{\\pi}{|a|} = \\frac{\\pi}{3}$.',
          correct_answer: 'A',
          math_skill: 'Chu kỳ hàm tan',
          english_skill: 'Period of tangent function',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
      ],
      ds: [
        {
          id: `trig-ds-1`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'TRUE_FALSE',
          format_type: 'DS',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: 'Cho hàm số $y = 2\\cos\\left(2x - \\frac{\\pi}{3}\\right) + 1$. Xét tính đúng/sai của các mệnh đề sau:',
          question_en: 'Given $y = 2\\cos\\left(2x - \\frac{\\pi}{3}\\right) + 1$. Determine whether each statement is True (Đ) or False (S):',
          options: [
            { option_key: 'a', content_vi: 'Tập xác định của hàm số là $D = \\mathbb{R}$.', content_en: 'The domain is $D = \\mathbb{R}$.', is_correct: true },
            { option_key: 'b', content_vi: 'Tập giá trị của hàm số là $[-1; 3]$.', content_en: 'The range of the function is $[-1, 3]$.', is_correct: true },
            { option_key: 'c', content_vi: 'Chu kỳ tuần hoàn của hàm số là $T = \\pi$.', content_en: 'The period of the function is $T = \\pi$.', is_correct: true },
            { option_key: 'd', content_vi: 'Hàm số đã cho là một hàm số chẵn.', content_en: 'The function is an even function.', is_correct: false },
          ],
          solution_vi: 'a-Đ; b-Đ ($-2+1 \\le y \\le 2+1$); c-Đ ($T = 2\\pi/2 = \\pi$); d-S (chứa pha ban đầu nên không chẵn).',
          solution_en: 'a-True, b-True, c-True, d-False.',
          correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
          math_skill: 'Khảo sát hàm lượng giác',
          english_skill: 'Trig function properties',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-ds-2`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'TRUE_FALSE',
          format_type: 'DS',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: 'Cho hàm số $y = \\tan x$. Xét tính đúng/sai của các khẳng định sau:',
          question_en: 'Given function $y = \\tan x$. Evaluate the truth value of the statements:',
          options: [
            { option_key: 'a', content_vi: 'Tập xác định $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$.', content_en: 'Domain $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$.', is_correct: true },
            { option_key: 'b', content_vi: 'Hàm số $y = \\tan x$ là một hàm số lẻ.', content_en: '$y = \\tan x$ is an odd function.', is_correct: true },
            { option_key: 'c', content_vi: 'Hàm số đồng biến trên từng khoảng xác định của nó.', content_en: 'The function is increasing on each domain interval.', is_correct: true },
            { option_key: 'd', content_vi: 'Chu kỳ tuần hoàn của hàm số bằng $2\\pi$.', content_en: 'The period of the function is $2\\pi$.', is_correct: false },
          ],
          solution_vi: 'a-Đ, b-Đ, c-Đ, d-S (chu kỳ của tan x là $\\pi$).',
          solution_en: 'a-True, b-True, c-True, d-False (period is $\\pi$).',
          correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
          math_skill: 'Đặc tính hàm tan',
          english_skill: 'Tangent function properties',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-ds-3`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'TRUE_FALSE',
          format_type: 'DS',
          difficulty: 'HARD',
          language_level: 2,
          question_vi: 'Mực nước thuỷ triều tại một cảng biển được mô hình hoá bởi $h(t) = 3\\sin\\left(\\frac{\\pi t}{6}\\right) + 8$ (mét) ($0 \\le t \\le 24$). Xét tính đúng/sai của các nhận định:',
          question_en: 'Tide water height is $h(t) = 3\\sin\\left(\\frac{\\pi t}{6}\\right) + 8$ (m) ($0 \\le t \\le 24$). Evaluate the statements:',
          options: [
            { option_key: 'a', content_vi: 'Mực nước cao nhất đạt được là $11\\text{ m}$.', content_en: 'The maximum water height is $11\\text{ m}$.', is_correct: true },
            { option_key: 'b', content_vi: 'Mực nước thấp nhất là $5\\text{ m}$.', content_en: 'The minimum water height is $5\\text{ m}$.', is_correct: true },
            { option_key: 'c', content_vi: 'Tại $t = 3$ giờ, mực nước đạt giá trị lớn nhất trong ngày.', content_en: 'At $t = 3$ hours, tide reaches maximum.', is_correct: true },
            { option_key: 'd', content_vi: 'Tại $t = 6$ giờ, mực nước đạt giá trị thấp nhất.', content_en: 'At $t = 6$ hours, tide reaches minimum.', is_correct: false },
          ],
          solution_vi: 'a-Đ; b-Đ; c-Đ ($h(3)=11$); d-S (tại $t=6 \implies h(6)=8$, thấp nhất tại $t=9 \implies h(9)=5$).',
          solution_en: 'a-True, b-True, c-True, d-False (min tide occurs at $t = 9$).',
          correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
          math_skill: 'Ứng dụng thực tế thuỷ triều',
          english_skill: 'Tide model analysis',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-ds-4`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'TRUE_FALSE',
          format_type: 'DS',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: 'Cho hàm số $y = \\cos x$. Xét tính đúng/sai của các phát biểu sau:',
          question_en: 'Given function $y = \\cos x$. Evaluate the statements:',
          options: [
            { option_key: 'a', content_vi: 'Hàm số $y = \\cos x$ là hàm số chẵn.', content_en: '$y = \\cos x$ is an even function.', is_correct: true },
            { option_key: 'b', content_vi: 'Hàm số đồng biến trên khoảng $(0; \\pi)$.', content_en: 'The function is increasing on $(0, \\pi)$.', is_correct: false },
            { option_key: 'c', content_vi: 'Chu kỳ tuần hoàn của hàm số là $T = 2\\pi$.', content_en: 'The period of the function is $T = 2\\pi$.', is_correct: true },
            { option_key: 'd', content_vi: 'Tập giá trị của hàm số là $[-1; 1]$.', content_en: 'The range of the function is $[-1, 1]$.', is_correct: true },
          ],
          solution_vi: 'a-Đ; b-S (nghịch biến trên $(0; \\pi)$); c-Đ; d-Đ.',
          solution_en: 'a-True, b-False (decreasing on $(0, \\pi)$), c-True, d-True.',
          correct_answer: 'a-Đ, b-S, c-Đ, d-Đ',
          math_skill: 'Khảo sát hàm cosin',
          english_skill: 'Cosine function properties',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
      ],
      tln: [
        {
          id: `trig-tln-1`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'SHORT',
          format_type: 'TLN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: 'Tìm giá trị lớn nhất của hàm số $y = 4\\sin x + 3$.',
          question_en: 'Find the maximum value of $y = 4\\sin x + 3$.',
          correct_answer: '7',
          solution_vi: 'Vì $-1 \\le \\sin x \\le 1 \\implies \\max y = 4(1) + 3 = 7$.',
          solution_en: '$\max y = 4(1) + 3 = 7$.',
          math_skill: 'GTLN hàm lượng giác',
          english_skill: 'Maximum of trig function',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tln-2`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'SHORT',
          format_type: 'TLN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: 'Cho hàm số $y = \\cos(4\\pi x)$. Tính chu kỳ $T$ của hàm số (nhập giá trị dạng số thập phân).',
          question_en: 'For $y = \\cos(4\\pi x)$, calculate period $T$ (enter decimal value).',
          correct_answer: '0.5',
          solution_vi: 'Chu kỳ $T = \\frac{2\\pi}{4\\pi} = 0.5$.',
          solution_en: 'Period $T = \\frac{2\\pi}{4\\pi} = 0.5$.',
          math_skill: 'Tính chu kỳ hàm cosin',
          english_skill: 'Period of cosine function',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tln-3`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'SHORT',
          format_type: 'TLN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: 'Biên độ dao động (tính theo cm) của con lắc $s(t) = 6\\sin\\left(2\\pi t - \\frac{\\pi}{4}\\right) + 2$ bằng bao nhiêu?',
          question_en: 'What is the amplitude (in cm) of oscillation $s(t) = 6\\sin\\left(2\\pi t - \\frac{\\pi}{4}\\right) + 2$?',
          correct_answer: '6',
          solution_vi: 'Biên độ dao động $A = 6\\text{ cm}$.',
          solution_en: 'Amplitude $A = 6\\text{ cm}$.',
          math_skill: 'Biên độ dao động',
          english_skill: 'Oscillation amplitude',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
        {
          id: `trig-tln-4`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'SHORT',
          format_type: 'TLN',
          difficulty: 'HARD',
          language_level: 2,
          question_vi: 'Tìm giá trị nhỏ nhất của hàm số $y = 3\\sin^2 x + 4\\cos^2 x$.',
          question_en: 'Find the minimum value of $y = 3\\sin^2 x + 4\\cos^2 x$.',
          correct_answer: '3',
          solution_vi: '$y = 3(\\sin^2 x + \\cos^2 x) + \\cos^2 x = 3 + \\cos^2 x \\ge 3 \\implies \\min = 3$.',
          solution_en: '$y = 3 + \\cos^2 x \\ge 3 \\implies \\min = 3$.',
          math_skill: 'GTNN biến đổi lượng giác',
          english_skill: 'Minimum of trig identity',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        },
      ],
    };
  }

  if (domain === 'EXP_LOG_11') {
    return {
      tn: Array.from({ length: 10 }).map((_, i) => {
        const base = 2 + (i % 3);
        const exp = i + 2;
        const ans = Math.pow(base, exp);
        return {
          id: `exp-tn-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: `[Mũ - Logarit ${i + 1}] Nghiệm của phương trình $\\log_{${base}}(x - 1) = ${exp}$ là:`,
          question_en: `[Exp-Log ${i + 1}] Solution to $\\log_{${base}}(x - 1) = ${exp}$ is:`,
          options: [
            { option_key: 'A', content_vi: `$${ans + 1}$`, content_en: `$${ans + 1}$`, is_correct: true },
            { option_key: 'B', content_vi: `$${ans}$`, content_en: `$${ans}$`, is_correct: false },
            { option_key: 'C', content_vi: `$${ans - 1}$`, content_en: `$${ans - 1}$`, is_correct: false },
            { option_key: 'D', content_vi: `$${ans + 3}$`, content_en: `$${ans + 3}$`, is_correct: false },
          ],
          solution_vi: `$\\log_{${base}}(x-1) = ${exp} \\iff x - 1 = ${base}^{${exp}} = ${ans} \\iff x = ${ans + 1}$.`,
          solution_en: `$x - 1 = ${base}^{${exp}} = ${ans} \\implies x = ${ans + 1}$.`,
          correct_answer: 'A',
          math_skill: 'Giải phương trình logarit',
          english_skill: 'Solve log equation',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      ds: Array.from({ length: 4 }).map((_, i) => {
        const b = i + 2;
        return {
          id: `exp-ds-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'TRUE_FALSE',
          format_type: 'DS',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: `[Đúng/Sai Logarit ${i + 1}] Cho hàm số $y = \\log_{${b}}(x - ${i + 1})$. Xét các nhận định:`,
          question_en: `[T/F Logarithm ${i + 1}] For $y = \\log_{${b}}(x - ${i + 1})$. Evaluate:`,
          options: [
            { option_key: 'a', content_vi: `Tập xác định $D = (${i + 1}; +\\infty)$.`, content_en: `Domain $D = (${i + 1}, +\\infty)$.`, is_correct: true },
            { option_key: 'b', content_vi: `Hàm số đồng biến trên tập xác định.`, content_en: `Function is strictly increasing.`, is_correct: true },
            { option_key: 'c', content_vi: `Đồ thị cắt trục hoành tại điểm có hoành độ $x = ${i + 2}$.`, content_en: `Graph intersects x-axis at $x = ${i + 2}$.`, is_correct: true },
            { option_key: 'd', content_vi: `Tập xác định của hàm số là $D = \\mathbb{R}$.`, content_en: `Domain is $D = \\mathbb{R}$.`, is_correct: false },
          ],
          solution_vi: 'a-Đ; b-Đ (vì cơ số > 1); c-Đ ($y=0 \implies x = i+2$); d-S.',
          solution_en: 'a-True, b-True, c-True, d-False.',
          correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
          math_skill: 'Khảo sát hàm logarit',
          english_skill: 'Logarithm function properties',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      tln: Array.from({ length: 4 }).map((_, i) => {
        const val = i + 3;
        const ans = val + 2;
        return {
          id: `exp-tln-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'SHORT',
          format_type: 'TLN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: `[TLN Mũ ${i + 1}] Giải phương trình $2^{x - 2} = ${Math.pow(2, val)}$. Tìm $x$.`,
          question_en: `[Short Exp ${i + 1}] Solve $2^{x - 2} = ${Math.pow(2, val)}$. Find $x$.`,
          correct_answer: `${ans}`,
          solution_vi: `$x - 2 = ${val} \\iff x = ${ans}$.`,
          solution_en: `$x - 2 = ${val} \\implies x = ${ans}$.`,
          math_skill: 'Phương trình mũ cơ bản',
          english_skill: 'Basic exponential equation',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
    };
  }

  if (domain === 'DERIVATIVE_11') {
    return {
      tn: Array.from({ length: 10 }).map((_, i) => {
        const x0 = i + 1;
        const slope = 3 * x0 * x0 - 3;
        const y0 = x0 * x0 * x0 - 3 * x0 + 2;
        return {
          id: `der-tn-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: `[Đạo hàm ${i + 1}] Cho hàm số $y = x^3 - 3x + 2$. Hệ số góc của tiếp tuyến của đồ thị hàm số tại điểm có hoành độ $x_0 = ${x0}$ là:`,
          question_en: `[Derivative ${i + 1}] For $y = x^3 - 3x + 2$, the slope of the tangent line at $x_0 = ${x0}$ is:`,
          options: [
            { option_key: 'A', content_vi: `$${slope}$`, content_en: `$${slope}$`, is_correct: true },
            { option_key: 'B', content_vi: `$${slope + 3}$`, content_en: `$${slope + 3}$`, is_correct: false },
            { option_key: 'C', content_vi: `$${slope - 2}$`, content_en: `$${slope - 2}$`, is_correct: false },
            { option_key: 'D', content_vi: `$${slope + 6}$`, content_en: `$${slope + 6}$`, is_correct: false },
          ],
          solution_vi: `$y' = 3x^2 - 3 \\implies k = y'(${x0}) = 3(${x0})^2 - 3 = ${slope}$.`,
          solution_en: `$k = y'(${x0}) = ${slope}$.`,
          correct_answer: 'A',
          math_skill: 'Hệ số góc tiếp tuyến',
          english_skill: 'Tangent line slope',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      ds: Array.from({ length: 4 }).map((_, i) => {
        const t0 = i + 2;
        const v = 6 * t0 + 2;
        const a = 6;
        return {
          id: `der-ds-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'TRUE_FALSE',
          format_type: 'DS',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: `[Đúng/Sai Ý nghĩa Đạo hàm ${i + 1}] Một vật chuyển động thẳng có phương trình $s(t) = 3t^2 + 2t + 1$ ($s$ bằng m, $t$ bằng s). Xét các khẳng định:`,
          question_en: `[T/F Derivative Meaning ${i + 1}] Position equation is $s(t) = 3t^2 + 2t + 1$. Evaluate:`,
          options: [
            { option_key: 'a', content_vi: `Vận tốc tức thời là $v(t) = s'(t) = 6t + 2$.`, content_en: `Instantaneous velocity $v(t) = 6t + 2$.`, is_correct: true },
            { option_key: 'b', content_vi: `Vận tốc tức thời tại $t = ${t0}\\text{ s}$ bằng $v(${t0}) = ${v}\\text{ m/s}$.`, content_en: `Velocity at $t = ${t0}$ is $v(${t0}) = ${v}\\text{ m/s}$.`, is_correct: true },
            { option_key: 'c', content_vi: `Gia tốc tức thời của chuyển động bằng $a = ${a}\\text{ m/s}^2$.`, content_en: `Acceleration is $a = ${a}\\text{ m/s}^2$.`, is_correct: true },
            { option_key: 'd', content_vi: `Vật chuyển động chậm dần đều.`, content_en: `Movement is decelerating.`, is_correct: false },
          ],
          solution_vi: 'a-Đ; b-Đ; c-Đ ($a = v\'(t) = 6$); d-S (gia tốc dương nên tăng tốc).',
          solution_en: 'a-True, b-True, c-True, d-False.',
          correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
          math_skill: 'Ý nghĩa vật lý của đạo hàm',
          english_skill: 'Physical meaning of derivative',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      tln: Array.from({ length: 4 }).map((_, i) => {
        const t = i + 3;
        const v = 6 * t + 4;
        return {
          id: `der-tln-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'SHORT',
          format_type: 'TLN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: `[TLN Đạo hàm ${i + 1}] Một chất điểm chuyển động theo quy luật $s(t) = 3t^2 + 4t$. Tính vận tốc tức thời (m/s) của chất điểm tại thời điểm $t = ${t}\\text{ s}$.`,
          question_en: `[Short Derivative ${i + 1}] Position $s(t) = 3t^2 + 4t$. Find velocity (m/s) at $t = ${t}\\text{ s}$.`,
          correct_answer: `${v}`,
          solution_vi: `$v(t) = s'(t) = 6t + 4 \\implies v(${t}) = 6(${t}) + 4 = ${v}\\text{ m/s}$.`,
          solution_en: `$v(${t}) = 6(${t}) + 4 = ${v}\\text{ m/s}$.`,
          math_skill: 'Vận tốc tức thời',
          english_skill: 'Instantaneous velocity',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
    };
  }

  if (domain === 'VECTORS_OXYZ_12') {
    return {
      tn: Array.from({ length: 10 }).map((_, i) => {
        const x = i + 1;
        const y = i + 2;
        const z = i + 3;
        const lenSq = x * x + y * y + z * z;
        return {
          id: `vec-tn-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: `[Vectơ Oxyz ${i + 1}] Trong không gian $Oxyz$, độ dài của vectơ $\\vec{u} = (${x}; ${y}; ${z})$ bằng bao nhiêu?`,
          question_en: `[Vector 3D ${i + 1}] In space $Oxyz$, what is the magnitude of vector $\\vec{u} = (${x}, ${y}, ${z})$?`,
          options: [
            { option_key: 'A', content_vi: `$\\sqrt{${lenSq}}$`, content_en: `$\\sqrt{${lenSq}}$`, is_correct: true },
            { option_key: 'B', content_vi: `$${lenSq}$`, content_en: `$${lenSq}$`, is_correct: false },
            { option_key: 'C', content_vi: `$${x + y + z}$`, content_en: `$${x + y + z}$`, is_correct: false },
            { option_key: 'D', content_vi: `$\\sqrt{${lenSq + 5}}$`, content_en: `$\\sqrt{${lenSq + 5}}$`, is_correct: false },
          ],
          solution_vi: `$|\\vec{u}| = \\sqrt{${x}^2 + ${y}^2 + ${z}^2} = \\sqrt{${lenSq}}$.`,
          solution_en: `$|\\vec{u}| = \\sqrt{${lenSq}}$.`,
          correct_answer: 'A',
          math_skill: 'Độ dài vectơ Oxyz',
          english_skill: '3D vector magnitude',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      ds: Array.from({ length: 4 }).map((_, i) => {
        const xA = i + 1;
        const xB = i + 3;
        const xM = (xA + xB) / 2;
        return {
          id: `vec-ds-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'TRUE_FALSE',
          format_type: 'DS',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: `[Đúng/Sai Oxyz ${i + 1}] Trong không gian $Oxyz$, cho điểm $A(${xA}; 2; -1)$ và $B(${xB}; 4; 3)$. Xét các mệnh đề:`,
          question_en: `[T/F Oxyz ${i + 1}] In $Oxyz$, given $A(${xA}, 2, -1)$ and $B(${xB}, 4, 3)$. Evaluate:`,
          options: [
            { option_key: 'a', content_vi: `Vectơ $\\vec{AB} = (2; 2; 4)$.`, content_en: `Vector $\\vec{AB} = (2, 2, 4)$.`, is_correct: true },
            { option_key: 'b', content_vi: `Toạ độ trung điểm $M$ của $AB$ là $M(${xM}; 3; 1)$.`, content_en: `Midpoint $M$ of $AB$ is $M(${xM}, 3, 1)$.`, is_correct: true },
            { option_key: 'c', content_vi: `Độ dài đoạn thẳng $AB = \\sqrt{24} = 2\\sqrt{6}$.`, content_en: `Length $AB = \\sqrt{24} = 2\\sqrt{6}$.`, is_correct: true },
            { option_key: 'd', content_vi: `Điểm $A$ thuộc mặt phẳng toạ độ $(Oxy)$.`, content_en: `Point $A$ lies on $(Oxy)$ plane.`, is_correct: false },
          ],
          solution_vi: 'a-Đ; b-Đ; c-Đ ($AB = \\sqrt{2^2+2^2+4^2} = \\sqrt{24}$); d-S (vì $z_A = -1 \\ne 0$).',
          solution_en: 'a-True, b-True, c-True, d-False.',
          correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
          math_skill: 'Toạ độ điểm và vectơ Oxyz',
          english_skill: '3D point and vector properties',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      tln: Array.from({ length: 4 }).map((_, i) => {
        const x = i + 2;
        const dot = x * 1 + 2 * 3 + 3 * (-1);
        return {
          id: `vec-tln-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'SHORT',
          format_type: 'TLN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: `[TLN Vectơ Oxyz ${i + 1}] Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (${x}; 2; 3)$ và $\\vec{v} = (1; 3; -1)$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.`,
          question_en: `[Short Vector 3D ${i + 1}] Given $\\vec{u} = (${x}, 2, 3)$ and $\\vec{v} = (1, 3, -1)$. Calculate $\\vec{u} \\cdot \\vec{v}$.`,
          correct_answer: `${dot}`,
          solution_vi: `$\\vec{u} \\cdot \\vec{v} = (${x})(1) + 2(3) + 3(-1) = ${x} + 6 - 3 = ${dot}$.`,
          solution_en: `$\\vec{u} \\cdot \\vec{v} = ${dot}$.`,
          math_skill: 'Tích vô hướng hai vectơ Oxyz',
          english_skill: 'Dot product of 3D vectors',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
    };
  }

  if (domain === 'ASYMPTOTE_12') {
    return {
      tn: Array.from({ length: 10 }).map((_, i) => {
        const a = i + 1;
        const b = i + 2;
        return {
          id: `asymp-tn-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: `[Tiệm cận ${i + 1}] Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{${a}x - 3}{x - ${b}}$ là:`,
          question_en: `[Asymptote ${i + 1}] Vertical asymptote of $y = \\frac{${a}x - 3}{x - ${b}}$ is:`,
          options: [
            { option_key: 'A', content_vi: `$x = ${b}$`, content_en: `$x = ${b}$`, is_correct: true },
            { option_key: 'B', content_vi: `$y = ${a}$`, content_en: `$y = ${a}$`, is_correct: false },
            { option_key: 'C', content_vi: `$x = -${b}$`, content_en: `$x = -${b}$`, is_correct: false },
            { option_key: 'D', content_vi: `$y = 3$`, content_en: `$y = 3$`, is_correct: false },
          ],
          solution_vi: 'Mẫu số bằng 0 tại $x = ' + b + ' \\implies$ Tiệm cận đứng $x = ' + b + '$.',
          solution_en: 'Denominator is 0 at $x = ' + b + ' \\implies x = ' + b + '$.',
          correct_answer: 'A',
          math_skill: 'Tìm tiệm cận đứng',
          english_skill: 'Vertical asymptote calculation',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      ds: Array.from({ length: 4 }).map((_, i) => {
        const a = i + 2;
        return {
          id: `asymp-ds-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'TRUE_FALSE',
          format_type: 'DS',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: `[Đúng/Sai Tiệm cận ${i + 1}] Cho hàm số $y = \\frac{${a}x + 1}{x - 2}$. Xét các khẳng định sau:`,
          question_en: `[T/F Asymptote ${i + 1}] Given $y = \\frac{${a}x + 1}{x - 2}$. Evaluate:`,
          options: [
            { option_key: 'a', content_vi: 'Đồ thị có tiệm cận đứng $x = 2$.', content_en: 'Vertical asymptote is $x = 2$.', is_correct: true },
            { option_key: 'b', content_vi: `Đồ thị có tiệm cận ngang $y = ${a}$.`, content_en: `Horizontal asymptote is $y = ${a}$.`, is_correct: true },
            { option_key: 'c', content_vi: 'Giao điểm hai đường tiệm cận có toạ độ $I(2; ' + a + ')$.', content_en: 'Intersection of asymptotes is $I(2, ' + a + ')$.', is_correct: true },
            { option_key: 'd', content_vi: 'Đồ thị có tiệm cận đứng $x = -2$.', content_en: 'Vertical asymptote is $x = -2$.', is_correct: false },
          ],
          solution_vi: 'a-Đ; b-Đ; c-Đ; d-S.',
          solution_en: 'a-True, b-True, c-True, d-False.',
          correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
          math_skill: 'Khảo sát tiệm cận hàm phân thức',
          english_skill: 'Rational function asymptotes',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      tln: Array.from({ length: 4 }).map((_, i) => {
        const a = i + 3;
        return {
          id: `asymp-tln-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'SHORT',
          format_type: 'TLN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: `[TLN Tiệm cận ${i + 1}] Tìm tung độ giao điểm của đường tiệm cận ngang của $y = \\frac{${a}x - 5}{x + 1}$ với trục tung $Oy$.`,
          question_en: `[Short Asymptote ${i + 1}] Find the y-value of the horizontal asymptote of $y = \\frac{${a}x - 5}{x + 1}$.`,
          correct_answer: `${a}`,
          solution_vi: `Tiệm cận ngang $y = ${a}$.`,
          solution_en: `Horizontal asymptote $y = ${a}$.`,
          math_skill: 'Tiệm cận ngang',
          english_skill: 'Horizontal asymptote value',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
    };
  }

  if (domain === 'SETS_PROPOSITIONS_10') {
    return {
      tn: Array.from({ length: 10 }).map((_, i) => {
        const k = i + 1;
        return {
          id: `set-tn-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: `[Mệnh đề - Tập hợp ${i + 1}] Cho hai tập hợp $A = [1; ${k + 3}]$ và $B = (${k}; ${k + 5})$. Tập hợp $A \\cap B$ là:`,
          question_en: `[Set ${i + 1}] Given $A = [1, ${k + 3}]$ and $B = (${k}, ${k + 5})$. The intersection $A \\cap B$ is:`,
          options: [
            { option_key: 'A', content_vi: `$(${k}; ${k + 3}]$`, content_en: `$(${k}, ${k + 3}]$`, is_correct: true },
            { option_key: 'B', content_vi: `$[1; ${k + 5})$`, content_en: `$[1, ${k + 5})$`, is_correct: false },
            { option_key: 'C', content_vi: `$(${k}; ${k + 3})$`, content_en: `$(${k}, ${k + 3})$`, is_correct: false },
            { option_key: 'D', content_vi: `$[1; ${k}]$`, content_en: `$[1, ${k}]$`, is_correct: false },
          ],
          solution_vi: `$A \\cap B = (${k}; ${k + 3}]$.`,
          solution_en: `$A \\cap B = (${k}, ${k + 3}]$.`,
          correct_answer: 'A',
          math_skill: 'Giao của hai tập hợp',
          english_skill: 'Intersection of sets',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      ds: Array.from({ length: 4 }).map((_, i) => {
        return {
          id: `set-ds-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'TRUE_FALSE',
          format_type: 'DS',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: `[Đúng/Sai Tập hợp ${i + 1}] Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid x^2 - 5x + 6 = 0\\}$. Xét các khẳng định:`,
          question_en: `[T/F Set ${i + 1}] For $A = \\{x \\in \\mathbb{R} \\mid x^2 - 5x + 6 = 0\\}$. Evaluate:`,
          options: [
            { option_key: 'a', content_vi: 'Tập hợp $A$ liệt kê phần tử là $A = \\{2; 3\\}$.', content_en: 'Elements are $A = \\{2, 3\\}$.', is_correct: true },
            { option_key: 'b', content_vi: 'Số phần tử của tập hợp $A$ bằng $2$.', content_en: 'Number of elements is 2.', is_correct: true },
            { option_key: 'c', content_vi: 'Tập hợp $A$ có tổng cộng 4 tập hợp con.', content_en: 'Set $A$ has 4 subsets.', is_correct: true },
            { option_key: 'd', content_vi: 'Số $0 \\in A$.', content_en: 'Element $0 \\in A$.', is_correct: false },
          ],
          solution_vi: 'a-Đ; b-Đ; c-Đ ($2^2 = 4$ tập con); d-S.',
          solution_en: 'a-True, b-True, c-True, d-False.',
          correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
          math_skill: 'Phần tử và tập hợp con',
          english_skill: 'Set elements and subsets',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      tln: Array.from({ length: 4 }).map((_, i) => {
        const num = i + 2;
        const count = Math.pow(2, num);
        return {
          id: `set-tln-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'SHORT',
          format_type: 'TLN',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: `[TLN Tập hợp ${i + 1}] Cho tập hợp $X$ có $n = ${num}$ phần tử. Hỏi tập hợp $X$ có bao nhiêu tập hợp con?`,
          question_en: `[Short Set ${i + 1}] Set $X$ has $n = ${num}$ elements. How many subsets does $X$ have?`,
          correct_answer: `${count}`,
          solution_vi: `Số tập con $2^n = 2^{${num}} = ${count}$.`,
          solution_en: `Subsets $= 2^{${num}} = ${count}$.`,
          math_skill: 'Tính số tập hợp con',
          english_skill: 'Number of subsets',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
    };
  }

  if (domain === 'PARABOLA_10') {
    return {
      tn: Array.from({ length: 10 }).map((_, i) => {
        const b = 2 * (i + 1);
        const xI = b / 2;
        const yI = xI * xI - b * xI + 3;
        return {
          id: `par-tn-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'MCQ',
          format_type: 'TN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: `[Parabol ${i + 1}] Toạ độ đỉnh $I$ của Parabol $y = x^2 - ${b}x + 3$ là:`,
          question_en: `[Parabola ${i + 1}] Vertex $I$ of parabola $y = x^2 - ${b}x + 3$ is:`,
          options: [
            { option_key: 'A', content_vi: `$I(${xI}; ${yI})$`, content_en: `$I(${xI}, ${yI})$`, is_correct: true },
            { option_key: 'B', content_vi: `$I(-${xI}; ${yI + 5})$`, content_en: `$I(-${xI}, ${yI + 5})$`, is_correct: false },
            { option_key: 'C', content_vi: `$I(${b}; 3)$`, content_en: `$I(${b}, 3)$`, is_correct: false },
            { option_key: 'D', content_vi: `$I(0; 3)$`, content_en: `$I(0, 3)$`, is_correct: false },
          ],
          solution_vi: `$x_I = -\\frac{-${b}}{2(1)} = ${xI} \\implies y_I = (${xI})^2 - ${b}(${xI}) + 3 = ${yI}$.`,
          solution_en: `Vertex $I(${xI}, ${yI})$.`,
          correct_answer: 'A',
          math_skill: 'Toạ độ đỉnh Parabol',
          english_skill: 'Parabola vertex',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      ds: Array.from({ length: 4 }).map((_, i) => {
        const a = i + 1;
        return {
          id: `par-ds-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'TRUE_FALSE',
          format_type: 'DS',
          difficulty: 'MEDIUM',
          language_level: 2,
          question_vi: `[Đúng/Sai Parabol ${i + 1}] Cho hàm số $y = ${a}x^2 - 4x + 1$. Xét các mệnh đề:`,
          question_en: `[T/F Parabola ${i + 1}] Given $y = ${a}x^2 - 4x + 1$. Evaluate:`,
          options: [
            { option_key: 'a', content_vi: 'Đồ thị hàm số là một đường Parabol có bề lõm quay lên trên.', content_en: 'Graph is a parabola opening upwards.', is_correct: true },
            { option_key: 'b', content_vi: `Trục đối xứng là đường thẳng $x = \\frac{2}{${a}}$.`, content_en: `Axis of symmetry is $x = \\frac{2}{${a}}$.`, is_correct: true },
            { option_key: 'c', content_vi: 'Đồ thị cắt trục tung tại điểm $M(0; 1)$.', content_en: 'Graph cuts y-axis at $M(0, 1)$.', is_correct: true },
            { option_key: 'd', content_vi: 'Bề lõm Parabol quay xuống dưới.', content_en: 'Parabola opens downwards.', is_correct: false },
          ],
          solution_vi: 'a-Đ (vì $a > 0$); b-Đ; c-Đ; d-S.',
          solution_en: 'a-True, b-True, c-True, d-False.',
          correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
          math_skill: 'Khảo sát hàm bậc hai',
          english_skill: 'Quadratic function analysis',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
      tln: Array.from({ length: 4 }).map((_, i) => {
        const k = i + 2;
        const xI = k;
        return {
          id: `par-tln-${i + 1}`,
          topic_id: topicId,
          type_id: typeId,
          question_type: 'SHORT',
          format_type: 'TLN',
          difficulty: 'EASY',
          language_level: 2,
          question_vi: `[TLN Parabol ${i + 1}] Tìm hoành độ đỉnh $x_I$ của đồ thị hàm số $y = x^2 - ${2 * k}x + 5$.`,
          question_en: `[Short Parabola ${i + 1}] Find x-coordinate of vertex $x_I$ for $y = x^2 - ${2 * k}x + 5$.`,
          correct_answer: `${xI}`,
          solution_vi: `$x_I = -\\frac{b}{2a} = \\frac{${2 * k}}{2} = ${xI}$.`,
          solution_en: `$x_I = ${xI}$.`,
          math_skill: 'Hoành độ đỉnh Parabol',
          english_skill: 'Parabola vertex x-coordinate',
          status: 'PUBLISHED',
          created_by: 'usr-teacher-1',
        };
      }),
    };
  }

  // Mặc định fallback câu hỏi chuẩn hóa lớp 12 (Ứng dụng đạo hàm & Cực trị)
  return {
    tn: Array.from({ length: 10 }).map((_, i) => {
      const a = i + 1;
      return {
        id: `gen-tn-${typeId}-${i + 1}`,
        topic_id: topicId,
        type_id: typeId,
        question_type: 'MCQ',
        format_type: 'TN',
        difficulty: 'MEDIUM',
        language_level: 2,
        question_vi: `[Trắc nghiệm ${i + 1}] Cho hàm số $y = x^3 - ${3 * a}x + 2$. Điểm cực đại của đồ thị hàm số là:`,
        question_en: `[MCQ ${i + 1}] For $y = x^3 - ${3 * a}x + 2$, the local maximum point is:`,
        options: [
          { option_key: 'A', content_vi: `$A(-\\sqrt{${a}}; ${2 + 2 * a * Math.sqrt(a)})$`, content_en: `$A(-\\sqrt{${a}}, ${2 + 2 * a * Math.sqrt(a)})$`, is_correct: true },
          { option_key: 'B', content_vi: `$B(\\sqrt{${a}}; 0)$`, content_en: `$B(\\sqrt{${a}}, 0)$`, is_correct: false },
          { option_key: 'C', content_vi: `$C(0; 2)$`, content_en: `$C(0, 2)$`, is_correct: false },
          { option_key: 'D', content_vi: `$D(1; 0)$`, content_en: `$D(1, 0)$`, is_correct: false },
        ],
        solution_vi: `$y' = 3x^2 - ${3 * a} = 0 \\iff x = \\pm \\sqrt{${a}}$. Đổi dấu (+ sang -) tại $x = -\\sqrt{${a}}$.`,
        solution_en: `Local max at $x = -\\sqrt{${a}}$.`,
        correct_answer: 'A',
        math_skill: 'Tìm toạ độ điểm cực đại',
        english_skill: 'Local maximum coordinates',
        status: 'PUBLISHED',
        created_by: 'usr-teacher-1',
      };
    }),
    ds: Array.from({ length: 4 }).map((_, i) => {
      return {
        id: `gen-ds-${typeId}-${i + 1}`,
        topic_id: topicId,
        type_id: typeId,
        question_type: 'TRUE_FALSE',
        format_type: 'DS',
        difficulty: 'MEDIUM',
        language_level: 2,
        question_vi: `[Đúng/Sai ${i + 1}] Cho hàm số $f(x) = -x^3 + 3x + 1$. Xét tính đúng/sai của các khẳng định:`,
        question_en: `[T/F ${i + 1}] Given $f(x) = -x^3 + 3x + 1$. Evaluate statements:`,
        options: [
          { option_key: 'a', content_vi: 'Tập xác định $D = \\mathbb{R}$.', content_en: 'Domain $D = \\mathbb{R}$.', is_correct: true },
          { option_key: 'b', content_vi: 'Đạo hàm $f\'(x) = -3x^2 + 3$.', content_en: 'Derivative $f\'(x) = -3x^2 + 3$.', is_correct: true },
          { option_key: 'c', content_vi: 'Hàm số đồng biến trên khoảng $(-1; 1)$.', content_en: 'Increasing on $(-1, 1)$.', is_correct: true },
          { option_key: 'd', content_vi: 'Giá trị nhỏ nhất trên $\\mathbb{R}$ bằng $-1$.', content_en: 'Minimum on $\\mathbb{R}$ is $-1$.', is_correct: false },
        ],
        solution_vi: 'a-Đ; b-Đ; c-Đ; d-S (hàm đa thức bậc 3 không có GTLN-GTNN trên $\\mathbb{R}$).',
        solution_en: 'a-True, b-True, c-True, d-False.',
        correct_answer: 'a-Đ, b-Đ, c-Đ, d-S',
        math_skill: 'Khảo sát hàm bậc ba',
        english_skill: 'Cubic function properties',
        status: 'PUBLISHED',
        created_by: 'usr-teacher-1',
      };
    }),
    tln: Array.from({ length: 4 }).map((_, i) => {
      const ans = (i + 1) * 2;
      return {
        id: `gen-tln-${typeId}-${i + 1}`,
        topic_id: topicId,
        type_id: typeId,
        question_type: 'SHORT',
        format_type: 'TLN',
        difficulty: 'MEDIUM',
        language_level: 2,
        question_vi: `[TLN ${i + 1}] Tìm tung độ điểm cực đại của hàm số $y = -x^3 + 3x + ${ans + 1}$.`,
        question_en: `[Short ${i + 1}] Find y-coordinate of local max of $y = -x^3 + 3x + ${ans + 1}$.`,
        correct_answer: `${ans + 3}`,
        solution_vi: `$y' = -3x^2 + 3 = 0 \\iff x = 1 \\implies y(1) = -1 + 3 + ${ans + 1} = ${ans + 3}$.`,
        solution_en: `Local max y-coordinate $= ${ans + 3}$.`,
        math_skill: 'Tung độ cực đại',
        english_skill: 'Local max y-value',
        status: 'PUBLISHED',
        created_by: 'usr-teacher-1',
      };
    }),
  };
}

// =========================================================================
// HELPER: LẤY BÀI TẬP MẪU THEO BÀI HỌC
// =========================================================================
export function getWorkedExamplesForLesson(lessonId: string): WorkedExample[] {
  if (DEFAULT_WORKED_EXAMPLES[lessonId] && DEFAULT_WORKED_EXAMPLES[lessonId].length > 0) {
    return DEFAULT_WORKED_EXAMPLES[lessonId];
  }

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

