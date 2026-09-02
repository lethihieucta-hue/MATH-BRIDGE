import { Question, WorkedExample } from '../types';
import { ALL_CURRENT_TYPE_IDS, LEGACY_TYPE_MIGRATION, TYPE_LESSON_BY_ID, migrateQuestionToCurrentCurriculum } from './curriculumData';
import { STATIC_QUESTION_BANK } from './staticQuestionBank';
import { REAL_SOURCE_QUESTION_BANK } from './realSourceQuestionBank';
import { SOURCE_SUPPLEMENT_QUESTION_BANK } from './sourceSupplementQuestionBank';
import { ORIGINAL_SOURCE_VISUAL_QUESTION_BANK } from './originalSourceVisualQuestionBank';

// =========================================================================
// BỘ BÀI TẬP MẪU CÓ LỜI GIẢI CHI TIẾT THEO TỪNG BÀI HỌC (WORKED EXAMPLES)
// =========================================================================
const LEGACY_DEFAULT_WORKED_EXAMPLES: Record<string, WorkedExample[]> = {
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
      solution_vi: '• $\\log_2 16 = 4, \\log_3(3^{\\dfrac{3}{2}}) = 1.5, \\ln(e^4) = 4 \\implies P = 1.5$.',
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
      problem_en: 'Given $\\sin\\alpha =\\dfrac{3}{5}$ for $\\dfrac{\\pi}{2}< \\alpha < \\pi$. Find $\\cos\\alpha$ and $\\tan\\alpha$.',
      solution_vi: '• Vì $\\frac{\\pi}{2} < \\alpha < \\pi \\implies \\cos\\alpha < 0$.\n• $\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25} \\implies \\cos\\alpha = -\\frac{4}{5}$.\n• $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{\\dfrac{3}{5}}{-\\dfrac{4}{5}} = -\\frac{3}{4}$.',
      solution_en: '• Since $\\dfrac{\\pi}{2}< \\alpha < \\pi \\implies \\cos\\alpha < 0$.\n• $\\cos\\alpha = -\\dfrac{4}{5}$ and $\\tan\\alpha = -\\dfrac{3}{4}$.',
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
      solution_en: '• $A = \\sin x \\cos(\\dfrac{\\pi}{6}) = \\frac{\\sqrt{3}}{2}\\sin x$.',
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
      solution_en: 'Domain $D = \\mathbb{R} \\setminus \\{\\dfrac{5\\pi}{12}+\\dfrac{k\\pi}{2\\}}$, Period $T =\\dfrac{\\pi}{2}$.',
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
      solution_en: '$x =\\dfrac{\\pi}{4}+ k\\pi$ or $x =\\dfrac{\\pi}{2}+ k\\pi$.',
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

// Migrate legacy worked examples by their semantic type_id, then regroup under the canonical lesson.
// This prevents an old lesson_id from injecting an example into a different textbook lesson after the KNTT migration.
export const DEFAULT_WORKED_EXAMPLES: Record<string, WorkedExample[]> = Object.values(LEGACY_DEFAULT_WORKED_EXAMPLES)
  .flat()
  .map((example) => {
    const oldTypeId = example.type_id;
    const typeId = oldTypeId ? (LEGACY_TYPE_MIGRATION[oldTypeId] || oldTypeId) : undefined;
    return { ...example, type_id: typeId };
  })
  .filter((example) => !example.type_id || ALL_CURRENT_TYPE_IDS.has(example.type_id))
  .reduce<Record<string, WorkedExample[]>>((acc, example) => {
    const lessonId = example.type_id ? TYPE_LESSON_BY_ID[example.type_id] : undefined;
    if (!lessonId) return acc;
    (acc[lessonId] ||= []).push(example);
    return acc;
  }, {});

// =========================================================================
// NGÂN HÀNG CÂU HỎI TOÀN DIỆN PHONG PHÚ 4 DẠNG THỨC GDPT 2018
// ĐẢM BẢO MỖI CHỦ ĐỀ CÓ ĐỦ 10 - 20 CÂU HỎI CHUẨN
// =========================================================================
const LEGACY_QUESTION_BANK: Question[] = [
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
      { option_key: 'A', content_vi: '$\\dfrac{5}{4}$', content_en: '$\\dfrac{5}{4}$', is_correct: true },
      { option_key: 'B', content_vi: '$-1$', content_en: '$-1$', is_correct: false },
      { option_key: 'C', content_vi: '$2$', content_en: '$2$', is_correct: false },
      { option_key: 'D', content_vi: '$1$', content_en: '$1$', is_correct: false },
    ],
    solution_vi: 'Vì $y\' = \\frac{3}{(x+1)^2} > 0$ nên hàm số đồng biến trên $[0; 3] \\implies \\max = y(3) = \\frac{5}{4}$.',
    solution_en: 'Function is increasing on $[0, 3] \\implies \\max = y(3) =\\dfrac{5}{4}$.',
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
    solution_en: 'By AM-GM inequality: $x +\\dfrac{9}{x}\\ge 2\\sqrt{9} = 6$.',
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
    solution_vi: 'Theo BĐT AM-GM: $x +\\dfrac{4}{x}\\ge 4$. Đạt GTNN khi $x = 2$. Không có GTLN.',
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
    solution_en: '$V = \\pi R^2 h = 54\\pi \\implies h =\\dfrac{54}{R^2}$. $S_{tp} = 2\\pi R^2 +\\dfrac{108\\pi}{R}$. Minimized when $R^3 = 27 \\implies R = 3\\text{ m}$.',
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
    id: 'q-12-6-tn1-legacy',
    topic_id: 'top-12-2-1',
    type_id: 'type-12-6-1',
    question_type: 'MCQ',
    format_type: 'TN',
    difficulty: 'EASY',
    language_level: 2,
    question_vi: 'Cho hình hộp chữ nhật $ABCD.A\'B\'C\'D\'$. Khẳng định nào sau đây là ĐÚNG?',
    question_en: 'For a rectangular box $ABCD.A\'B\'C\'D\'$, which vector identity is TRUE?',
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
    id: 'q-12-7-tn2-legacy',
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
    id: 'q-12-8-ds2-legacy',
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
    id: 'q-12-8-tln2-legacy',
    topic_id: 'top-12-2-3',
    type_id: 'type-12-8-1',
    question_type: 'SHORT',
    format_type: 'TLN',
    difficulty: 'MEDIUM',
    language_level: 2,
    question_vi: 'Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 0; 1)$ và $\\vec{b} = (0; 1; 1)$. Góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng bao nhiêu độ?',
    question_en: 'In $Oxyz$, given $\\vec{a} = (1, 0, 1)$ and $\\vec{b} = (0, 1, 1)$. What is the angle (in degrees) between $\\vec{a}$ and $\\vec{b}$?',
    correct_answer: '60',
    solution_vi: '$\\cos(\\vec{a}, \\vec{b}) =\\dfrac{1}{2}\\implies 60^\\circ$.',
    solution_en: '$\\cos(\\vec{a}, \\vec{b}) =\\dfrac{1}{2}\\implies 60^\\circ$.',
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
      { option_key: 'C', content_vi: '$x =\\dfrac{5}{2}$', content_en: '$x =\\dfrac{5}{2}$', is_correct: false },
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
      { option_key: 'A', content_vi: '$\\dfrac{7}{5}$', content_en: '$\\dfrac{7}{5}$', is_correct: true },
      { option_key: 'B', content_vi: '$\\dfrac{4}{5}$', content_en: '$\\dfrac{4}{5}$', is_correct: false },
      { option_key: 'C', content_vi: '$\\dfrac{3}{5}$', content_en: '$\\dfrac{3}{5}$', is_correct: false },
      { option_key: 'D', content_vi: '$2$', content_en: '$2$', is_correct: false },
    ],
    solution_vi: '$u_4 =\\dfrac{7}{5}$.',
    solution_en: '$u_4 =\\dfrac{7}{5}$.',
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
    type_id: 'type-11-3-1',
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
    type_id: 'type-11-3-1',
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
    type_id: 'type-11-3-1',
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
    type_id: 'type-11-3-2',
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
    type_id: 'type-11-3-1',
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
    solution_vi: 'a-Đ; b-Đ ($-2+1 \\le y \\le 2+1$); c-Đ ($T =\\dfrac{2\\pi}{2}= \\pi$); d-S (chứa pha ban đầu nên không chẵn).',
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
    type_id: 'type-11-3-1',
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
    type_id: 'type-11-3-2',
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

// Canonicalized bank exposed to every UI consumer (worksheet, test builder, practice module, server).
// Legacy IDs are migrated once here so direct imports can no longer bypass curriculum migration.
const MIGRATED_LEGACY_QUESTION_BANK: Question[] = LEGACY_QUESTION_BANK
  .map((q) => migrateQuestionToCurrentCurriculum(q))
  .filter((q) => !q.type_id || ALL_CURRENT_TYPE_IDS.has(q.type_id));

// Loại các câu thuần ghi nhớ định nghĩa/phương pháp. Người dùng muốn ngân hàng thiên về
// tính toán, suy luận, vận dụng và tình huống thực tế theo định hướng đánh giá hiện hành.
export function isPureTheoryRecallQuestion(q: Question): boolean {
  const text = (q.question_vi || q.question_en || '')
    .toLowerCase()
    .normalize('NFC')
    .replace(/\s+/g, ' ')
    .trim();
  if (!text) return true;
  const patterns = [
    /theo\s+định\s+nghĩa/i,
    /định\s+nghĩa(?:\s+.*?)?\s+là/i,
    /khái\s+niệm(?:\s+.*?)?\s+là/i,
    /được\s+gọi\s+là.*khi/i,
    /phát\s+biểu\s+nào.*(?:đúng|sai|định\s+nghĩa)/i,
    /công\s+thức\s+nào\s+sau\s+đây/i,
    /tính\s+chất\s+nào\s+sau\s+đây/i,
    /phương\s+pháp\s+nào\s+(?:phù\s+hợp|đúng|nên\s+dùng)/i,
    /bước\s+nào\s+(?:cần|nên).*trước/i,
    /lựa\s+chọn\s+(?:nào\s+)?thuận\s+lợi/i,
    /nhận\s+định\s+nào\s+mô\s+tả\s+đúng\s+cách/i,
    /một\s+mặt\s+phẳng\s+hoàn\s+toàn\s+được\s+xác\s+định\s+nếu\s+biết/i,
    /(?:lăng\s+trụ|hình\s+chóp|tứ\s+diện)[^.]{0,50}có\s+bao\s+nhiêu\s+(?:mặt|đỉnh|cạnh)/i,
    /qua\s+phép\s+chiếu\s+song\s+song[^.]{0,60}tính\s+chất\s+nào/i,
    /^trong\s+các\s+(?:mệnh\s+đề|khẳng\s+định|tính\s+chất)\s+sau[^?]{0,80}(?:đúng|sai)\??$/i,
  ];
  return patterns.some((re) => re.test(text));
}

/**
 * Câu nhập từ PDF/DOCX chỉ được ưu tiên khi phần đề còn đủ dữ kiện sau trích xuất.
 * Một số tài liệu dùng MathType/WMF hoặc bảng/hình; khi chuyển text công thức có thể biến mất.
 * Các dấu hiệu dưới đây là fail-closed: thà dùng câu nền đúng type_id còn hơn đưa ra câu nguồn bị khuyết.
 */
export function isSourceQuestionStructurallyComplete(q: Question): boolean {
  const isImported = q.created_by?.startsWith('source-') || !!q.source_name;
  if (!isImported) return true;

  const stem = (q.question_vi || '').replace(/\s+/g, ' ').trim();
  const optionText = (q.options || []).map((o) => o.content_vi || '').join(' ');
  const combined = `${stem} ${optionText}`.replace(/\s+/g, ' ').trim();
  if (!stem || stem.length < 12) return false;

  // Công thức/đối tượng toán đã rơi khỏi câu khi trích PDF.
  const missingMathPatterns = [
    /(?:phương trình|bất phương trình|hàm số|biểu thức)[^.]{0,70}[:：]\s*[.](?:\s|$)/i,
    /cho\s+(?:các?\s+|hai\s+)?tập\s+hợp[^.]{0,90}\s[.,](?:\s|$)/i,
    /sao\s+cho\s+(?:là|không\s+là)\s+nghiệm/i,
    /(?:cặp\s+số|điểm|vectơ)\s+(?:không\s+)?(?:là|thuộc)\s+(?:nghiệm|miền)/i,
    /hai\s+tập\s+hợp[^.]{0,80}\bvà\s*,/i,
    /(?:có|thỏa\s+mãn|thoả\s+mãn)\s*[.](?:\s|$)/i,
    /:\s*=\s*=/i,
    /(?:đường\s+thẳng|duong\s+thang|\bd\b|Δ)[^:]{0,30}:\s*=\s*=/i,
  ];
  if (missingMathPatterns.some((re) => re.test(stem))) return false;

  // Question model hiện chưa lưu ảnh/bảng nguồn; câu phụ thuộc hình/bảng bị mất phải loại.
  const visualPatterns = [
    /(?:hình|đồ\s*thị|bảng\s*biến\s*thiên|bảng\s*số\s*liệu)\s+(?:bên|dưới|sau|trên)/i,
    /(?:quan\s*sát|dựa\s+vào)\s+(?:hình|đồ\s*thị|bảng)/i,
    /kết\s+quả\s+(?:thu\s+được\s+)?như\s+sau\s*[:：]?/i,
  ];
  const numericTokens = combined.match(/[-+]?\d+(?:[.,]\d+)?/g) || [];
  const hasOriginalVisualAsset = !!q.assets?.some((asset) => asset.kind === 'image');
  // Trả lời ngắn trong bộ nguồn phải còn ít nhất một dữ kiện số/biểu thức, trừ khi đã gắn lại hình/bảng gốc.
  // nếu không, MathType/bảng nguồn rất có thể đã rơi khỏi câu khi trích PDF.
  if ((q.format_type === 'TLN' || q.question_type === 'SHORT' || q.question_type === 'NUMERIC')
      && numericTokens.length < 1 && !/[=<>≤≥]/.test(stem) && !hasOriginalVisualAsset) return false;
  if (visualPatterns.some((re) => re.test(stem)) && numericTokens.length < 4 && !hasOriginalVisualAsset) return false;
  if (/(?:mẫu|dãy)\s+số\s+liệu[^.]{0,80}(?:trên|sau)/i.test(stem) && numericTokens.length < 4) return false;

  // Các mảnh câu kiểu “là nghiệm ...” nhưng đối tượng đứng trước đã mất hoàn toàn.
  if (/^\s*(?:là|không\s+là)\s+nghiệm/i.test(optionText) && numericTokens.length < 2) return false;

  return true;
}

function normalizeImportedGlyphs(value?: string): string {
  if (!value) return '';
  const replacements: Array<[string, string]> = [
    ['', '′'], ['', '∈'], ['', '∉'], ['', '<'], ['', '>'], ['', '≤'], ['', '≥'],
    ['', '≠'], ['', '⇒'], ['', '⇔'], ['', '∩'], ['', '∪'], ['', '⊂'],
    ['', 'α'], ['', 'β'], ['', 'Δ'], ['', 'π'], ['', '∞'], ['', '±'],
    ['', ''], ['', ''], ['', ''], ['', ''], ['', '{'], ['', '}'],
  ];
  let out = value;
  for (const [from, to] of replacements) out = out.split(from).join(to);
  // Simple MathType/LaTeX commands sometimes survive in prose outside $...$.
  // Convert only those text-safe commands outside math delimiters; keep real LaTeX inside math untouched.
  const parts = out.split(/(\$\$[\s\S]*?\$\$|\$[^$]*\$)/g);
  out = parts.map((part, i) => {
    if (i % 2 === 1) return part;
    return part
      .replace(/\\notin\b/g, '∉')
      .replace(/\\infty\b/g, '∞')
      .replace(/\\parallel\b/g, '∥')
      .replace(/\\perp\b/g, '⊥')
      .replace(/\\alpha\b/g, 'α')
      .replace(/\\beta\b/g, 'β')
      .replace(/\\gamma\b/g, 'γ')
      .replace(/\\cap\b/g, '∩')
      .replace(/\\cup\b/g, '∪')
      .replace(/\\notin\b/g, '∉')
      .replace(/\\in\b/g, '∈')
      .replace(/\\geq?\b/g, '≥')
      .replace(/\\leq?\b/g, '≤')
      .replace(/\\neq\b/g, '≠')
      .replace(/\\Leftrightarrow\b/g, '⇔')
      .replace(/\\Rightarrow\b/g, '⇒');
  }).join('');
  return out.replace(/[ \t]+/g, ' ').replace(/\n[ \t]+/g, '\n').trim();
}

function isQuestionGradeCurriculumClean(q: Question): boolean {
  const typeId = (q.type_id || '').toLowerCase();
  const optionText = (q.options || []).map((o) => `${o.content_vi || ''} ${o.content_en || ''}`).join(' ');
  const text = `${q.question_vi || ''} ${q.question_en || ''} ${q.solution_vi || ''} ${q.solution_en || ''} ${optionText}`.normalize('NFC');
  // KNTT lớp 11 học hình học không gian tổng hợp, chưa dùng hệ tọa độ Oxyz.
  // Mọi câu Oxyz gán vào type lớp 11 là nhiễm kiến thức lớp 12 và phải loại khỏi bank.
  if (typeId.startsWith('type-kntt-11-') && /\bOxyz\b/i.test(text)) return false;
  // Spatial-geometry lessons of grade 11 must stay synthetic. Reject hidden grade-12 coordinate
  // contamination even when the source omitted the literal word Oxyz.
  if (/^type-kntt-11-(10|11|12|13|14|22|23|24|25|26|27)-/.test(typeId)) {
    if (/\b[A-Z]\s*\(\s*-?\d+(?:[.,]\d+)?\s*[;,]\s*-?\d+(?:[.,]\d+)?\s*[;,]\s*-?\d+(?:[.,]\d+)?\s*\)/.test(text)) return false;
    if (/(?:mặt phẳng|plane)[^\n]{0,120}\b[xyz]\b[^\n]{0,80}=\s*0/i.test(text)) return false;
  }
  return true;
}

function normalizeFormulaOnlyPunctuation(value?: string): string {
  const normalized = normalizeImportedGlyphs(value);
  // Source banks often store a period after a formula, e.g. `$M(0,2,1)$.`.
  // Options should contain only the mathematical choice; stripping this punctuation also
  // prevents old renderers from passing the trailing dot together with `$...$` to KaTeX.
  return normalized.replace(/^(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)[.。]$/, '$1');
}

function sanitizeImportedQuestion(q: Question): Question {
  const imported = q.created_by?.startsWith('source-') || !!q.source_name;
  if (!imported) return q;
  return {
    ...q,
    question_vi: normalizeImportedGlyphs(q.question_vi),
    question_en: normalizeImportedGlyphs(q.question_en),
    solution_vi: normalizeImportedGlyphs(q.solution_vi),
    solution_en: normalizeImportedGlyphs(q.solution_en),
    correct_answer: normalizeImportedGlyphs(q.correct_answer),
    options: q.options?.map((o) => ({
      ...o,
      content_vi: normalizeFormulaOnlyPunctuation(o.content_vi),
      content_en: normalizeFormulaOnlyPunctuation(o.content_en),
    })),
  };
}

// Static bank is the baseline for every worksheet: 4 TN + 2 Đ/S + 2 TLN + 1 TL per type_id.
// Nguồn GV sạch được xếp trước; nếu câu nguồn hỏng dữ kiện hoặc nặng lý thuyết thì tự loại.
const RAW_FULL_QUESTION_BANK: Question[] = [
  ...ORIGINAL_SOURCE_VISUAL_QUESTION_BANK, // PNL có hình/bảng gốc: ưu tiên cao nhất
  ...REAL_SOURCE_QUESTION_BANK,            // nguồn PNL/GV đã lọc
  ...SOURCE_SUPPLEMENT_QUESTION_BANK,      // nguồn bổ sung khác
  ...STATIC_QUESTION_BANK,                 // fallback tối thiểu 4-2-2-1
  ...MIGRATED_LEGACY_QUESTION_BANK,
].map(sanitizeImportedQuestion);
const CLEAN_UNCAPPED_QUESTION_BANK: Question[] = RAW_FULL_QUESTION_BANK.filter(
  (q) => isQuestionGradeCurriculumClean(q)
    && isSourceQuestionStructurallyComplete(q)
    && (!isPureTheoryRecallQuestion(q) || !!q.assets?.some((asset) => asset.kind === 'image'))
);

/** Return true only when a question can be graded safely by OnlineExamRoom. */
export function isQuestionAutoGradable(q: Question): boolean {
  if (q.grading_safe === false) return false;
  if (q.format_type === 'TN' || q.question_type === 'MCQ') {
    const answer = (q.correct_answer || '').trim().toUpperCase();
    if (!['A','B','C','D'].includes(answer) || !q.options || q.options.length !== 4) return false;
    const correct = q.options.filter((o) => o.is_correct);
    return correct.length === 1 && correct[0].option_key.toUpperCase() === answer;
  }
  if (q.format_type === 'DS' || q.question_type === 'TRUE_FALSE') {
    if (!q.options || q.options.length !== 4) return false;
    // Imported questions marked unsafe are rejected above. Static/authored DS items carry
    // a boolean key on each statement and are safe even if correct_answer is formatted differently.
    return q.options.every((o) => typeof o.is_correct === 'boolean');
  }
  if (q.format_type === 'TLN' || q.question_type === 'SHORT' || q.question_type === 'NUMERIC') {
    const ans=(q.correct_answer || '').trim();
    if (!ans || /xem\s+lời\s+giải|xem\s+loi\s+giai/i.test(ans)) return false;
    return ans.length <= 80;
  }
  return false;
}

// User-facing bank size policy: every exact math type keeps a professional, diverse pool
// between the guaranteed baseline 4-2-2-1 and the hard ceiling 12-4-6-2.
// PNL questions with original figures are kept first, then other clean PNL/source questions,
// while static questions remain the safety net so no type loses its minimum coverage.
const QUESTION_BANK_FORMAT_CAP: Record<string, number> = { TN: 12, DS: 4, TLN: 6, TL: 2 };

function isPnlSourceQuestion(q: Question): boolean {
  const source = `${q.source_name || ''} ${q.created_by || ''}`.toLowerCase();
  return /phan nhật linh|phan nhat linh|source-pnl|pnl-/.test(source);
}

function hasOriginalImage(q: Question): boolean {
  return !!q.assets?.some((asset) => asset.kind === 'image');
}

function cappedBankPriority(q: Question): number {
  if (isPnlSourceQuestion(q) && hasOriginalImage(q)) return 0;
  if (isPnlSourceQuestion(q)) return 1;
  if (hasOriginalImage(q)) return 2;
  if (q.source_name || q.created_by?.startsWith('source-')) return 3;
  if (q.id?.startsWith('q-static-')) return 4;
  return 5;
}

function isEligibleForProfessionalBank(q: Question): boolean {
  if (q.grading_safe === false) return false;
  // Essay items are teacher-reviewed via their worked solution rather than auto-graded.
  if (q.format_type === 'TL' || q.question_type === 'ESSAY') return !!(q.solution_vi || q.solution_en);
  // TN / Đ-S / TLN must carry a complete grading key before they can displace the static baseline.
  return isQuestionAutoGradable(q);
}

function capQuestionBankPerType(items: Question[]): Question[] {
  const groups = new Map<string, Array<{ q: Question; order: number }>>();
  items.forEach((q, order) => {
    if (!isEligibleForProfessionalBank(q)) return;
    const format = q.format_type || (q.question_type === 'MCQ' ? 'TN' : q.question_type === 'TRUE_FALSE' ? 'DS' : q.question_type === 'ESSAY' ? 'TL' : 'TLN');
    const key = `${q.type_id}|${format}`;
    const group = groups.get(key) || [];
    group.push({ q, order });
    groups.set(key, group);
  });

  const selected: Question[] = [];
  groups.forEach((group, key) => {
    const format = key.split('|').pop() || '';
    const cap = QUESTION_BANK_FORMAT_CAP[format] || group.length;
    const seen = new Set<string>();
    const ordered = [...group].sort((a, b) => {
      const priority = cappedBankPriority(a.q) - cappedBankPriority(b.q);
      return priority !== 0 ? priority : a.order - b.order;
    });
    for (const item of ordered) {
      const signature = getQuestionDedupSignature(item.q);
      if (seen.has(signature)) continue;
      seen.add(signature);
      selected.push(item.q);
      if (seen.size >= cap) break;
    }
  });
  return selected;
}

export const FULL_QUESTION_BANK: Question[] = capQuestionBankPerType(CLEAN_UNCAPPED_QUESTION_BANK);
export const ONLINE_SAFE_QUESTION_BANK: Question[] = FULL_QUESTION_BANK.filter(isQuestionAutoGradable);

// =========================================================================
// EXACT-TYPE QUESTION ROUTING & QUALITY GUARDRAILS (GDPT 2018)
// =========================================================================

/**
 * Structural signature used to reject the classic "same exercise, only numbers changed"
 * pattern. Numeric constants, item numbering and whitespace are removed while preserving
 * the mathematical wording/structure.
 */
export function getQuestionStructureSignature(questionText?: string): string {
  return (questionText || '')
    .toLowerCase()
    .normalize('NFC')
    .replace(/\[(?:trắc nghiệm|đúng\/sai|tln|mcq|t\/f|short)\s*\d+\]/gi, ' ')
    .replace(/-?\d+(?:[.,]\d+)?/g, '#')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getQuestionDedupSignature(q: Question): string {
  const format = q.format_type || q.question_type || 'UNKNOWN';
  const combined = [
    q.question_vi || q.question_en || '',
    ...(q.options || []).map((o) => o.content_vi || o.content_en || ''),
  ].join(' | ');
  return `${format}|${getQuestionStructureSignature(combined)}`;
}

/**
 * Guardrail against obvious cross-chapter contamination. It is intentionally conservative:
 * it only blocks strong signatures from unrelated chapters, not generic terms such as
 * "đạo hàm" which may legitimately occur when explaining an antiderivative.
 */
export function isQuestionCompatibleWithTopic(topicId?: string, questionText?: string): boolean {
  const topic = (topicId || '').toLowerCase();
  const text = (questionText || '').toLowerCase().normalize('NFC');
  if (!topic || !text) return true;

  // Lớp 11 không dùng hệ tọa độ Oxyz; chặn cả câu DB/API cũ bị gán nhầm từ lớp 12.
  if (topic.startsWith('top-11-') && /\boxyz\b/i.test(text)) return false;

  const has = (patterns: RegExp[]) => patterns.some((re) => re.test(text));
  const derivativeSurvey = [ /cực trị/i, /đồng biến/i, /nghịch biến/i, /tiệm cận/i, /bảng biến thiên/i ];
  const integration = [ /nguyên hàm/i, /tích phân/i, /diện tích hình phẳng/i, /khối tròn xoay/i ];
  const groupedStats = [ /mẫu số liệu ghép nhóm/i, /khoảng tứ phân vị/i, /phương sai/i, /độ lệch chuẩn/i ];
  const probability = [ /xác suất có điều kiện/i, /bayes/i, /xác suất toàn phần/i ];
  const spatialOxyz = [ /mặt phẳng/i, /mặt cầu/i, /đường thẳng.*oxyz/i, /tọa độ.*oxyz/i, /toạ độ.*oxyz/i ];

  if (topic.startsWith('top-12-4')) return !has([...derivativeSurvey, ...groupedStats, ...probability, ...spatialOxyz]);
  if (topic.startsWith('top-12-3')) return !has([...derivativeSurvey, ...integration, ...probability, ...spatialOxyz]);
  if (topic.startsWith('top-12-6')) return !has([...derivativeSurvey, ...integration, ...groupedStats, ...spatialOxyz]);
  if (topic.startsWith('top-12-2') || topic.startsWith('top-12-5')) return !has([...derivativeSurvey, ...integration, ...groupedStats, ...probability]);
  if (topic.startsWith('top-11-3')) return !has([...derivativeSurvey, ...integration, ...probability, ...spatialOxyz]);
  if (topic.startsWith('top-11-4') || topic.startsWith('top-11-8')) return !has([...derivativeSurvey, ...integration, ...groupedStats, ...probability]);
  if (topic.startsWith('top-10-5')) return !has([...derivativeSurvey, ...integration, ...probability, ...spatialOxyz]);

  return true;
}

export function getQuestionsForLesson(lessonId: string, topicId?: string): Question[] {
  const structured = getQuestionsForMathTypeStructured(lessonId, topicId);
  return structured.all;
}

/**
 * Lấy câu hỏi đã được gán CHÍNH XÁC cho một dạng toán.
 * Nếu ngân hàng chưa có đủ câu, trả về đúng số câu hiện có thay vì bịa câu từ dạng khác.
 */
export function getQuestionsForMathTypeStructured(typeId: string, topicId?: string): {
  tn: Question[];
  ds: Question[];
  tln: Question[];
  tl: Question[];
  all: Question[];
} {
  // A math type is an isolated exercise family. Only questions explicitly authored for the
  // selected type are eligible. Topic-level fallbacks are forbidden because one lesson often
  // contains several different exercise types.
  const exact = FULL_QUESTION_BANK.filter((q) => {
    if (q.type_id !== typeId) return false;
    return isQuestionCompatibleWithTopic(topicId || q.topic_id, `${q.question_vi} ${q.solution_vi || ''}`);
  });

  const dedupe = (items: Question[]) => {
    const seen = new Set<string>();
    return items.filter((q) => {
      const signature = getQuestionDedupSignature(q);
      if (seen.has(signature)) return false;
      seen.add(signature);
      return true;
    });
  };

  const tn = dedupe(exact.filter((q) => q.format_type === 'TN' || q.question_type === 'MCQ'));
  const ds = dedupe(exact.filter((q) => q.format_type === 'DS' || q.question_type === 'TRUE_FALSE'));
  const tln = dedupe(exact.filter((q) => q.format_type === 'TLN' || q.question_type === 'SHORT' || q.question_type === 'NUMERIC'));
  const tl = dedupe(exact.filter((q) => q.format_type === 'TL' || q.question_type === 'ESSAY'));

  return {
    tn,
    ds,
    tln,
    tl,
    all: [...tn, ...ds, ...tln, ...tl],
  };
}

// =========================================================================
// HELPER: LẤY BÀI TẬP MẪU THEO BÀI HỌC
// =========================================================================
export function getWorkedExamplesForLesson(lessonId: string): WorkedExample[] {
  // Worked examples must also be lesson-exact. Returning examples from a different lesson
  // recreates the same contamination problem as a question fallback.
  return DEFAULT_WORKED_EXAMPLES[lessonId] || [];
}
