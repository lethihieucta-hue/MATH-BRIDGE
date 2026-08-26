import { Question, QuestionOption, MathType, Lesson } from '../types';
import { FULL_LESSONS, TYPE_FAMILY_BY_ID, ExerciseFamily } from './curriculumData';

/**
 * NGÂN HÀNG TĨNH BẮT BUỘC CHO PHIẾU HỌC TẬP
 * ------------------------------------------------------------
 * Mỗi type_id luôn có sẵn 9 câu: 4 TN + 2 Đ/S + 2 TLN + 1 TL.
 * Module này KHÔNG gọi Gemini/API. Câu được dựng tất định ngay khi bundle được load.
 * Mục tiêu: chọn dạng -> có câu ngay; AI chỉ là tuỳ chọn tạo thêm biến thể.
 */

type StaticKind = 'TN' | 'DS' | 'TLN' | 'TL';
type Sample = {
  vi: string;
  en: string;
  answer: string;
  solutionVi: string;
  solutionEn: string;
  options?: Array<[string, string, boolean]>;
};

const opt = (items: Array<[string, string, boolean]>): QuestionOption[] =>
  items.map((item, i) => ({
    option_key: ['A', 'B', 'C', 'D'][i],
    content_vi: item[0],
    content_en: item[1],
    is_correct: item[2],
  }));

const normalize = (s: string) => s.toLowerCase().normalize('NFC');
const hasAny = (s: string, words: string[]) => words.some((w) => s.includes(w));

const METHOD_NAMES: Record<ExerciseFamily, [string, string]> = {
  logic: ['suy luận logic và biểu diễn tập hợp', 'logical reasoning and set representation'],
  algebra: ['biến đổi đại số và kiểm tra điều kiện', 'algebraic transformation with condition checking'],
  trig: ['hệ thức và công thức lượng giác', 'trigonometric identities and formulas'],
  geometry: ['định lí hình học kết hợp tính toán', 'geometric theorems combined with computation'],
  vector: ['quy tắc vectơ và tọa độ', 'vector rules and coordinates'],
  stats: ['công thức thống kê và diễn giải dữ liệu', 'statistical formulas and data interpretation'],
  probability: ['mô hình không gian mẫu và quy tắc xác suất', 'sample-space modelling and probability rules'],
  calculus: ['công cụ giải tích phù hợp với yêu cầu', 'the appropriate calculus technique'],
  function: ['phân tích công thức, bảng và đồ thị hàm số', 'analysis of formulas, tables and function graphs'],
  combinatorics: ['quy tắc đếm, hoán vị, chỉnh hợp hoặc tổ hợp', 'counting rules, permutations, arrangements or combinations'],
};
const methodName = (family: ExerciseFamily): [string, string] => METHOD_NAMES[family];

function directSample(type: MathType, family: ExerciseFamily, variant: number): Sample {
  const t = normalize(type.title_vi);

  // ---------------- CALCULUS: các dạng người dùng kiểm tra nhiều nhất ----------------
  if (family === 'calculus') {
    if (hasAny(t, ['đồng biến', 'nghịch biến'])) {
      const rows = [
        ['$f(x)=x^3-3x^2-9x+1$', '$(-\\infty,-1)$ và $(3,+\\infty)$', '$(-1,3)$', '3'],
        ['$f(x)=x^3-6x^2+9x+2$', '$(-\\infty,1)$ và $(3,+\\infty)$', '$(1,3)$', '1'],
        ['$f(x)=x^3-12x+5$', '$(-\\infty,-2)$ và $(2,+\\infty)$', '$(-2,2)$', '2'],
        ['$f(x)=x^3+3x^2-9x$', '$(-3,1)$', '$(-\\infty,-3)$ và $(1,+\\infty)$', '-3'],
      ][variant % 4];
      return {
        vi: `Cho ${rows[0]}. Khoảng đồng biến của hàm số là`,
        en: `Given ${rows[0]}. The function is increasing on`,
        answer: rows[1],
        solutionVi: `Tính $f'(x)$, giải $f'(x)>0$ và lập bảng dấu. Kết quả: ${rows[1]}.`,
        solutionEn: `Compute $f'(x)$ and solve $f'(x)>0$. The increasing interval(s): ${rows[1]}.`,
        options: [[rows[1], rows[1], true], [rows[2], rows[2], false], ['$(-\\infty,+\\infty)$', '$(-\\infty,+\\infty)$', false], ['$(-1,1)$', '$(-1,1)$', false]],
      };
    }
    if (hasAny(t, ['cực trị'])) {
      const rows = [
        ['$f(x)=x^3-3x^2+2$', '4', '$x=0$', '$x=2$'],
        ['$f(x)=x^3-6x^2+9x$', '4', '$x=1$', '$x=3$'],
        ['$f(x)=x^3-12x$', '16', '$x=-2$', '$x=2$'],
        ['$f(x)=-x^3+3x$', '2', '$x=1$', '$x=-1$'],
      ][variant % 4];
      return {
        vi: `Cho ${rows[0]}. Giá trị cực đại của hàm số bằng`,
        en: `Given ${rows[0]}. The local maximum value is`,
        answer: rows[1],
        solutionVi: `Giải $f'(x)=0$, xét dấu đạo hàm quanh các điểm tới hạn. Giá trị cực đại bằng ${rows[1]}.`,
        solutionEn: `Solve $f'(x)=0$ and inspect the derivative sign. The local maximum value is ${rows[1]}.`,
        options: [[rows[1], rows[1], true], ['0', '0', false], ['2', '2', false], ['-2', '-2', false]],
      };
    }
    if (hasAny(t, ['tiệm cận đứng'])) {
      const a = [2, -1, 3, -4][variant % 4];
      return {
        vi: `Đồ thị $y=\\dfrac{2x+1}{x-${a}}$ có tiệm cận đứng là`, en: `The vertical asymptote of $y=\\dfrac{2x+1}{x-${a}}$ is`,
        answer: `$x=${a}$`, solutionVi: `Mẫu số bằng $0$ tại $x=${a}$ và tử khác $0$, nên tiệm cận đứng là $x=${a}$.`, solutionEn: `The denominator is zero at $x=${a}$ while the numerator is nonzero.`,
        options: [[`$x=${a}$`,`$x=${a}$`,true],['$y=2$','$y=2$',false],['$x=0$','$x=0$',false],[`$y=${a}$`,`$y=${a}$`,false]],
      };
    }
    if (hasAny(t, ['tiệm cận ngang'])) {
      const a = [2, 3, -1, 4][variant % 4];
      return {
        vi: `Đồ thị $y=\\dfrac{${a}x+1}{x+2}$ có tiệm cận ngang là`, en: `The horizontal asymptote of $y=\\dfrac{${a}x+1}{x+2}$ is`,
        answer: `$y=${a}$`, solutionVi: `Tử và mẫu cùng bậc nên tiệm cận ngang bằng tỉ số hệ số bậc cao nhất: $y=${a}$.`, solutionEn: `Same degrees: horizontal asymptote equals the ratio of leading coefficients.`,
        options: [[`$y=${a}$`,`$y=${a}$`,true],['$x=-2$','$x=-2$',false],['$y=0$','$y=0$',false],[`$x=${a}$`,`$x=${a}$`,false]],
      };
    }
    if (hasAny(t, ['tiệm cận xiên'])) {
      return {
        vi: 'Đồ thị $y=\\dfrac{x^2+2x+3}{x+1}$ có tiệm cận xiên là', en: 'The oblique asymptote of $y=\\dfrac{x^2+2x+3}{x+1}$ is',
        answer: '$y=x+1$', solutionVi: '$y=x+1+\\dfrac{2}{x+1}$ nên khi $x\\to\\pm\\infty$, phần dư tiến về $0$.', solutionEn: '$y=x+1+2/(x+1)$, so the remainder tends to zero.',
        options: [['$y=x+1$','$y=x+1$',true],['$y=x-1$','$y=x-1$',false],['$x=-1$','$x=-1$',false],['$y=1$','$y=1$',false]],
      };
    }
    if (hasAny(t, ['giá trị lớn nhất', 'giá trị nhỏ nhất'])) {
      return {
        vi: 'Trên đoạn $[0,3]$, giá trị nhỏ nhất của $f(x)=x^2-2x+5$ bằng', en: 'On $[0,3]$, the minimum of $f(x)=x^2-2x+5$ is',
        answer: '4', solutionVi: '$f\'(x)=2x-2=0\\Leftrightarrow x=1$. So sánh $f(0)=5,f(1)=4,f(3)=8$, suy ra min bằng $4$.', solutionEn: `Critical point $x=1$; compare endpoint and critical values to get minimum $4$.`,
        options: [['4','4',true],['5','5',false],['8','8',false],['3','3',false]],
      };
    }
    if (hasAny(t, ['tiếp tuyến'])) {
      const x0 = [1,2,-1,0][variant%4];
      const m = 3*x0*x0-3;
      const y0 = x0*x0*x0-3*x0+2;
      return {
        vi: `Cho $f(x)=x^3-3x+2$. Hệ số góc tiếp tuyến tại $x_0=${x0}$ bằng`, en: `For $f(x)=x^3-3x+2$, the tangent slope at $x_0=${x0}$ equals`,
        answer: String(m), solutionVi: `$f'(x)=3x^2-3$, nên $f'(${x0})=${m}$.`, solutionEn: `$f'(x)=3x^2-3$, hence $f'(${x0})=${m}$.`,
        options: [[String(m),String(m),true],[String(m+1),String(m+1),false],[String(y0),String(y0),false],[String(x0),String(x0),false]],
      };
    }
    if (hasAny(t, ['đạo hàm cấp hai', 'gia tốc'])) {
      return {
        vi: 'Cho $s(t)=t^3-3t^2+2t$. Gia tốc tại $t=2$ bằng', en: 'Given $s(t)=t^3-3t^2+2t$, the acceleration at $t=2$ is',
        answer: '6', solutionVi: `$v(t)=s'(t)=3t^2-6t+2$, $a(t)=v'(t)=6t-6$, nên $a(2)=6$.`, solutionEn: `$a(t)=s''(t)=6t-6$, so $a(2)=6$.`,
        options: [['6','6',true],['2','2',false],['8','8',false],['0','0',false]],
      };
    }
    if (hasAny(t, ['đạo hàm'])) {
      const rows = [
        ['$f(x)=x^4-3x^2+5$','$4x^3-6x$'],
        ['$f(x)=2x^3+5x-1$','$6x^2+5$'],
        ['$f(x)=\\sqrt{x}$','$\\dfrac{1}{2\\sqrt{x}}$'],
        ['$f(x)=\\dfrac{1}{x}$','$-\\dfrac{1}{x^2}$'],
      ][variant % 4];
      return {
        vi: `Đạo hàm của ${rows[0]} là`, en: `The derivative of ${rows[0]} is`,
        answer: rows[1], solutionVi: `Áp dụng đúng quy tắc đạo hàm, thu được $f'(x)=${rows[1].replace(/^\$|\$$/g,'')}$.`, solutionEn: `Apply the appropriate differentiation rule to get ${rows[1]}.`,
        options: [[rows[1],rows[1],true],['$0$','$0$',false],['$f(x)$','$f(x)$',false],['$x$','$x$',false]],
      };
    }
    if (hasAny(t, ['nguyên hàm'])) {
      if (hasAny(t,['lượng giác'])) return {
        vi: 'Một nguyên hàm của $f(x)=\\cos x$ là', en: 'An antiderivative of $f(x)=\\cos x$ is', answer: '$\\sin x$',
        solutionVi: `Vì $(\\sin x)'=\\cos x$.`, solutionEn: `Because $(\\sin x)'=\\cos x$.`, options: [['$\\sin x$','$\\sin x$',true],['$-\\sin x$','$-\\sin x$',false],['$\\cos x$','$\\cos x$',false],['$-\\cos x$','$-\\cos x$',false]],
      };
      if (hasAny(t,['đổi biến'])) return {
        vi: 'Đặt $u=x^2+1$ trong $\\int 2x(x^2+1)^3dx$, tích phân trở thành', en: 'With $u=x^2+1$ in $\\int 2x(x^2+1)^3dx$, the integral becomes', answer: '$\\int u^3du$',
        solutionVi: '$du=2x\\,dx$, nên tích phân bằng $\\int u^3du$.', solutionEn: '$du=2x\\,dx$, so the integral becomes $\\int u^3du$.', options: [['$\\int u^3du$','$\\int u^3du$',true],['$\\int 2u^3du$','$\\int 2u^3du$',false],['$\\int u^2du$','$\\int u^2du$',false],['$\\int x^3du$','$\\int x^3du$',false]],
      };
      if (hasAny(t,['từng phần'])) return {
        vi: 'Khi tính $\\int xe^x dx$ bằng từng phần, lựa chọn thuận lợi là', en: 'For $\\int xe^x dx$ by integration by parts, a convenient choice is', answer: '$u=x,\\;dv=e^xdx$',
        solutionVi: 'Chọn $u=x$ để đạo hàm đơn giản và $dv=e^xdx$ dễ lấy nguyên hàm.', solutionEn: 'Choose $u=x$ and $dv=e^xdx$.', options: [['$u=x,\\;dv=e^xdx$','$u=x,\\;dv=e^xdx$',true],['$u=e^x,\\;dv=x dx$','$u=e^x,\\;dv=x dx$',false],['$u=1,\\;dv=xe^xdx$','$u=1,\\;dv=xe^xdx$',false],['$u=x^2,\\;dv=e^xdx$','$u=x^2,\\;dv=e^xdx$',false]],
      };
      const rows = [
        ['$f(x)=3x^2-4x+2$','$x^3-2x^2+2x$'],
        ['$f(x)=2x+3$','$x^2+3x$'],
        ['$f(x)=4x^3$','$x^4$'],
        ['$f(x)=6x^5-2$','$x^6-2x$'],
      ][variant % 4];
      return {
        vi: `Một nguyên hàm của ${rows[0]} là`, en: `An antiderivative of ${rows[0]} is`, answer: rows[1],
        solutionVi: `Lấy nguyên hàm từng hạng tử, được ${rows[1]}+C.`, solutionEn: `Integrate term by term to obtain ${rows[1]}+C.`,
        options: [[rows[1],rows[1],true],['$0$','$0$',false],['$f(x)$','$f(x)$',false],['$x+C$','$x+C$',false]],
      };
    }
    if (hasAny(t, ['tích phân', 'diện tích hình phẳng', 'khối tròn xoay'])) {
      if (hasAny(t,['diện tích'])) return {
        vi: 'Diện tích hình phẳng giới hạn bởi $y=x$, trục $Ox$, $x=0$ và $x=2$ bằng', en: 'The area bounded by $y=x$, the $x$-axis, $x=0$ and $x=2$ equals', answer: '2',
        solutionVi: '$S=\\int_0^2x\\,dx=2$.', solutionEn: '$S=\\int_0^2x\\,dx=2$.', options: [['2','2',true],['1','1',false],['4','4',false],['8/3','8/3',false]],
      };
      if (hasAny(t,['thể tích','tròn xoay'])) return {
        vi: 'Quay miền dưới $y=x$, $0\\le x\\le1$ quanh trục $Ox$, thể tích khối tròn xoay bằng', en: 'Rotating the region under $y=x$, $0\\le x\\le1$, about the $x$-axis gives volume', answer: '$\\pi/3$',
        solutionVi: '$V=\\pi\\int_0^1x^2dx=\\pi/3$.', solutionEn: '$V=\\pi\\int_0^1x^2dx=\\pi/3$.', options: [['$\\pi/3$','$\\pi/3$',true],['$\\pi/2$','$\\pi/2$',false],['$\\pi$','$\\pi$',false],['$2\\pi/3$','$2\\pi/3$',false]],
      };
      if (hasAny(t,['đổi biến'])) return {
        vi: 'Với $u=x^2$, tích phân $\\int_0^1 2xe^{x^2}dx$ bằng', en: 'Using $u=x^2$, $\\int_0^1 2xe^{x^2}dx$ equals', answer: '$e-1$',
        solutionVi: '$du=2x dx$, cận $0\\to1$, nên tích phân $=\\int_0^1e^udu=e-1$.', solutionEn: '$du=2x dx$, so the integral equals $e-1$.', options: [['$e-1$','$e-1$',true],['$e$','$e$',false],['1','1',false],['$2e-2$','$2e-2$',false]],
      };
      if (hasAny(t,['từng phần'])) return {
        vi: '$\\int_0^1 xe^x dx$ bằng', en: '$\\int_0^1 xe^x dx$ equals', answer: '1',
        solutionVi: `Từng phần: $\\int xe^xdx=xe^x-e^x$, thế cận được $1$.`, solutionEn: `By parts: $\\int xe^xdx=xe^x-e^x$; evaluating gives $1$.`, options: [['1','1',true],['$e$','$e$',false],['$e-1$','$e-1$',false],['0','0',false]],
      };
      const rows = [
        ['$\\int_0^2(3x^2+1)dx$','10','$[x^3+x]_0^2=10$'],
        ['$\\int_0^1(2x+1)dx$','2','$[x^2+x]_0^1=2$'],
        ['$\\int_1^2 3x^2dx$','7','$[x^3]_1^2=7$'],
        ['$\\int_0^3 2x\\,dx$','9','$[x^2]_0^3=9$'],
      ][variant % 4];
      return {
        vi: `${rows[0]} bằng`, en: `${rows[0]} equals`, answer: rows[1],
        solutionVi: `${rows[2]}.`, solutionEn: `${rows[2]}.`,
        options: [[rows[1],rows[1],true],['0','0',false],['1','1',false],['3','3',false]],
      };
    }
    if (hasAny(t,['giới hạn'])) {
      return {
        vi: 'Giá trị $\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$ bằng', en: 'The value of $\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$ is', answer: '4',
        solutionVi: 'Phân tích $x^2-4=(x-2)(x+2)$ rồi rút gọn, giới hạn bằng $4$.', solutionEn: 'Factor and cancel $x-2$, then let $x\\to2$.', options: [['4','4',true],['2','2',false],['0','0',false],['Không tồn tại','Does not exist',false]],
      };
    }
    if (hasAny(t,['liên tục'])) {
      return {
        vi: 'Hàm $f(x)=\\begin{cases}x+1,&x<1\\\\a,&x=1\\\\2x,&x>1\\end{cases}$ liên tục tại $x=1$ khi', en: 'The function is continuous at $x=1$ when', answer: '$a=2$',
        solutionVi: 'Giới hạn trái và phải đều bằng $2$, nên cần $f(1)=a=2$.', solutionEn: 'Both one-sided limits are $2$, so $a=2$.', options: [['$a=2$','$a=2$',true],['$a=1$','$a=1$',false],['$a=0$','$a=0$',false],['Mọi $a$','Any $a$',false]],
      };
    }
    // Generic calculus fallback
    return {
      vi: `Trong dạng “${type.title_vi}”, công cụ trọng tâm nào phù hợp nhất?`, en: `For “${type.title_en}”, which core tool is most appropriate?`, answer: 'Đạo hàm/giới hạn/tích phân phù hợp với yêu cầu',
      solutionVi: 'Chọn đúng công cụ giải tích theo dữ kiện và đại lượng cần tìm.', solutionEn: 'Choose the calculus tool matching the data and target quantity.',
      options: [['Công cụ giải tích phù hợp với yêu cầu','The appropriate calculus tool',true],['Chỉ dùng định lí Pythagore','Only Pythagorean theorem',false],['Chỉ dùng quy tắc cộng','Only counting addition rule',false],['Không cần điều kiện xác định','No domain conditions are needed',false]],
    };
  }

  // ---------------- COMBINATORICS ----------------
  if (family === 'combinatorics') {
    if (hasAny(t,['hoán vị'])) {
      const n = [5, 6, 4, 7][variant % 4];
      const ans = [120, 720, 24, 5040][variant % 4];
      return {
        vi: `Có bao nhiêu cách sắp xếp ${n} học sinh phân biệt thành một hàng?`, en: `How many ways can ${n} distinct students be arranged in a row?`, answer: String(ans),
        solutionVi: `Hoán vị toàn bộ ${n} phần tử: $P_${n}=${n}!=${ans}$.`, solutionEn: `A permutation of all ${n} elements gives ${n}!=${ans}.`,
        options: [[String(ans),String(ans),true],[String(n*n),String(n*n),false],[String(ans/2),String(ans/2),false],[String(n),String(n),false]],
      };
    }
    if (hasAny(t,['chỉnh hợp'])) return {
      vi: 'Từ 7 học sinh, chọn lớp trưởng và lớp phó. Có bao nhiêu cách?', en: 'From 7 students, choose a president and a vice-president. How many ways?', answer: '42',
      solutionVi: 'Hai chức vụ có thứ tự: $A_7^2=7\\cdot6=42$.', solutionEn: 'The roles are ordered: $A_7^2=42$.', options: [['42','42',true],['21','21',false],['49','49',false],['14','14',false]],
    };
    if (hasAny(t,['tổ hợp'])) {
      const rows = [[8,3,56],[7,2,21],[6,3,20],[9,2,36]][variant % 4] as [number,number,number];
      return {
        vi: `Từ ${rows[0]} học sinh, chọn ${rows[1]} bạn vào một nhóm. Có bao nhiêu cách?`, en: `From ${rows[0]} students, choose ${rows[1]} for a team. How many ways?`, answer: String(rows[2]),
        solutionVi: `Không xét thứ tự: $C_${rows[0]}^{${rows[1]}}=${rows[2]}$.`, solutionEn: `Order does not matter: $C_${rows[0]}^{${rows[1]}}=${rows[2]}.`,
        options: [[String(rows[2]),String(rows[2]),true],[String(rows[2]*rows[1]),String(rows[2]*rows[1]),false],[String(rows[0]*rows[1]),String(rows[0]*rows[1]),false],[String(rows[0]**2),String(rows[0]**2),false]],
      };
    }
    if (hasAny(t,['newton','nhị thức','hệ số','số hạng'])) return {
      vi: 'Hệ số của $x^2$ trong khai triển $(1+x)^5$ bằng', en: 'The coefficient of $x^2$ in $(1+x)^5$ is', answer: '10',
      solutionVi: 'Hệ số cần tìm là $C_5^2=10$.', solutionEn: 'The coefficient is $C_5^2=10$.', options: [['10','10',true],['5','5',false],['20','20',false],['25','25',false]],
    };
    return {
      vi: 'Một quán có 3 món chính và 4 loại đồ uống. Chọn 1 món chính và 1 đồ uống có bao nhiêu cách?', en: 'A shop has 3 main dishes and 4 drinks. How many meal choices are possible?', answer: '12',
      solutionVi: 'Quy tắc nhân: $3\\cdot4=12$.', solutionEn: 'Multiplication rule: $3\\cdot4=12$.', options: [['12','12',true],['7','7',false],['24','24',false],['1','1',false]],
    };
  }

  // ---------------- PROBABILITY ----------------
  if (family === 'probability') {
    if (hasAny(t,['bayes','hậu nghiệm'])) return {
      vi: 'Một bệnh có tỉ lệ 1%. Test dương tính với người bệnh 90% và dương giả 5%. Xác suất một người thực sự bệnh khi test dương tính gần nhất là', en: 'Disease prevalence is 1%, sensitivity 90%, false-positive rate 5%. The probability of disease given a positive test is closest to', answer: '15.4%',
      solutionVi: '$P(B|+)=\\frac{0.01\\cdot0.9}{0.01\\cdot0.9+0.99\\cdot0.05}\\approx0.154$.', solutionEn: 'Apply Bayes formula to obtain about 15.4%.', options: [['15.4%','15.4%',true],['90%','90%',false],['5%','5%',false],['1%','1%',false]],
    };
    if (hasAny(t,['có điều kiện'])) return {
      vi: 'Cho $P(A\\cap B)=0.2$ và $P(B)=0.5$. Khi đó $P(A|B)$ bằng', en: 'Given $P(A\\cap B)=0.2$ and $P(B)=0.5$, $P(A|B)$ equals', answer: '0.4',
      solutionVi: '$P(A|B)=P(A\\cap B)/P(B)=0.2/0.5=0.4$.', solutionEn: '$P(A|B)=0.4$.', options: [['0.4','0.4',true],['0.1','0.1',false],['0.7','0.7',false],['0.25','0.25',false]],
    };
    if (hasAny(t,['toàn phần'])) return {
      vi: 'Hai máy A, B sản xuất lần lượt 60% và 40% sản phẩm; tỉ lệ lỗi tương ứng 2% và 5%. Xác suất chọn ngẫu nhiên được sản phẩm lỗi là', en: 'Machines A and B make 60% and 40% of products; defect rates are 2% and 5%. The probability a random product is defective is', answer: '0.032',
      solutionVi: '$0.6\\cdot0.02+0.4\\cdot0.05=0.032$.', solutionEn: 'Total probability: $0.032$.', options: [['0.032','0.032',true],['0.07','0.07',false],['0.02','0.02',false],['0.05','0.05',false]],
    };
    if (hasAny(t,['công thức cộng','biến cố hợp','xung khắc'])) return {
      vi: 'Cho $P(A)=0.4$, $P(B)=0.5$, $P(A\\cap B)=0.2$. Khi đó $P(A\\cup B)$ bằng', en: 'Given $P(A)=0.4$, $P(B)=0.5$, $P(A\\cap B)=0.2$, find $P(A\\cup B)$.', answer: '0.7',
      solutionVi: '$P(A\\cup B)=0.4+0.5-0.2=0.7$.', solutionEn: '$P(A\\cup B)=0.7$.', options: [['0.7','0.7',true],['0.9','0.9',false],['0.2','0.2',false],['0.1','0.1',false]],
    };
    if (hasAny(t,['công thức nhân','độc lập','chuỗi phép thử'])) return {
      vi: 'Tung hai đồng xu cân đối độc lập. Xác suất cả hai cùng ngửa bằng', en: 'Two fair independent coins are tossed. The probability both are heads is', answer: '1/4',
      solutionVi: '$P=\\frac12\\cdot\\frac12=\\frac14$.', solutionEn: '$1/2\\times1/2=1/4$.', options: [['$1/4$','$1/4$',true],['$1/2$','$1/2$',false],['$3/4$','$3/4$',false],['1','1',false]],
    };
    return {
      vi: 'Gieo một xúc xắc cân đối. Xác suất xuất hiện số chẵn bằng', en: 'A fair die is rolled. The probability of an even number is', answer: '1/2',
      solutionVi: 'Có 3 kết quả thuận lợi $\{2,4,6\}$ trên 6 kết quả đồng khả năng, nên $P=3/6=1/2$.', solutionEn: 'There are 3 favorable outcomes among 6 equally likely outcomes.', options: [['$1/2$','$1/2$',true],['$1/3$','$1/3$',false],['$2/3$','$2/3$',false],['$1/6$','$1/6$',false]],
    };
  }

  // ---------------- STATISTICS ----------------
  if (family === 'stats') {
    if (hasAny(t,['trung bình'])) return {
      vi: 'Số trung bình của mẫu $2,4,5,7,7$ bằng', en: 'The mean of $2,4,5,7,7$ is', answer: '5',
      solutionVi: '$(2+4+5+7+7)/5=5$.', solutionEn: 'The mean is 5.', options: [['5','5',true],['4','4',false],['5.5','5.5',false],['7','7',false]],
    };
    if (hasAny(t,['trung vị','tứ phân vị'])) return {
      vi: 'Trung vị của mẫu đã sắp xếp $1,3,4,6,9$ bằng', en: 'The median of the ordered sample $1,3,4,6,9$ is', answer: '4',
      solutionVi: 'Có 5 số liệu nên trung vị là giá trị thứ 3, bằng 4.', solutionEn: 'The middle (third) value is 4.', options: [['4','4',true],['3','3',false],['6','6',false],['4.6','4.6',false]],
    };
    if (hasAny(t,['mốt'])) return {
      vi: 'Mốt của mẫu $2,3,3,4,5,5,5,6$ bằng', en: 'The mode of $2,3,3,4,5,5,5,6$ is', answer: '5',
      solutionVi: 'Giá trị 5 xuất hiện nhiều nhất (3 lần).', solutionEn: '5 occurs most frequently.', options: [['5','5',true],['3','3',false],['4','4',false],['6','6',false]],
    };
    if (hasAny(t,['phương sai','độ lệch chuẩn'])) return {
      vi: 'Mẫu $1,1,3,3$ có số trung bình bằng 2. Phương sai (chia cho $n$) bằng', en: 'For sample $1,1,3,3$ with mean 2, the population-style variance is', answer: '1',
      solutionVi: '$s^2=[1+1+1+1]/4=1$.', solutionEn: 'Average squared deviation is 1.', options: [['1','1',true],['2','2',false],['4','4',false],['0','0',false]],
    };
    if (hasAny(t,['khoảng biến thiên'])) return {
      vi: 'Khoảng biến thiên của mẫu $4,7,9,10,15$ bằng', en: 'The range of $4,7,9,10,15$ is', answer: '11',
      solutionVi: '$R=15-4=11$.', solutionEn: '$R=15-4=11$.', options: [['11','11',true],['15','15',false],['4','4',false],['19','19',false]],
    };
    if (hasAny(t,['ghép nhóm','giá trị đại diện'])) {
      const rows = [[20,30,25],[10,20,15],[30,50,40],[5,15,10]][variant % 4] as [number,number,number];
      return {
        vi: `Giá trị đại diện của nhóm $[${rows[0]};${rows[1]})$ bằng`, en: `The class midpoint of $[${rows[0]},${rows[1]})$ is`, answer: String(rows[2]),
        solutionVi: `Giá trị đại diện là trung điểm: $(${rows[0]}+${rows[1]})/2=${rows[2]}$.`, solutionEn: `The class midpoint is ${rows[2]}.`,
        options: [[String(rows[2]),String(rows[2]),true],[String(rows[0]),String(rows[0]),false],[String(rows[1]),String(rows[1]),false],[String(rows[1]-rows[0]),String(rows[1]-rows[0]),false]],
      };
    }
    if (hasAny(t,['sai số'])) return {
      vi: 'Giá trị đúng là 100, số gần đúng là 98. Sai số tuyệt đối bằng', en: 'True value is 100 and approximation is 98. The absolute error is', answer: '2',
      solutionVi: '$\\Delta=|100-98|=2$.', solutionEn: 'Absolute error is 2.', options: [['2','2',true],['98','98',false],['100','100',false],['0.02','0.02',false]],
    };
    return {
      vi: `Trong dạng “${type.title_vi}”, thao tác nào đúng?`, en: `For “${type.title_en}”, which procedure is correct?`, answer: 'Xác định đúng đại lượng, dùng công thức thống kê tương ứng và diễn giải kết quả',
      solutionVi: 'Cần xác định loại số đặc trưng/độ phân tán và áp dụng đúng công thức.', solutionEn: 'Identify the requested statistic and apply the matching formula.', options: [['Xác định đại lượng, tính đúng công thức và diễn giải','Identify, compute and interpret',true],['Luôn lấy giá trị lớn nhất','Always use the maximum',false],['Bỏ qua tần số','Ignore frequencies',false],['Không cần sắp xếp khi tìm trung vị','No ordering is needed for median',false]],
    };
  }

  // ---------------- TRIG ----------------
  if (family === 'trig') {
    if (hasAny(t,['phương trình sin'])) return {
      vi: 'Nghiệm của $\\sin x=0$ là', en: 'Solutions of $\\sin x=0$ are', answer: '$x=k\\pi$', solutionVi: '$\\sin x=0\\Leftrightarrow x=k\\pi, k\\in\\mathbb Z$.', solutionEn: '$x=k\\pi$.', options: [['$x=k\\pi$','$x=k\\pi$',true],['$x=\\pi/2+k\\pi$','$x=\\pi/2+k\\pi$',false],['$x=2k\\pi+\\pi/4$','$x=2k\\pi+\\pi/4$',false],['$x=k$','$x=k$',false]],
    };
    if (hasAny(t,['phương trình cos'])) return {
      vi: 'Nghiệm của $\\cos x=1$ là', en: 'Solutions of $\\cos x=1$ are', answer: '$x=2k\\pi$', solutionVi: '$\\cos x=1\\Leftrightarrow x=2k\\pi$.', solutionEn: '$x=2k\\pi$.', options: [['$x=2k\\pi$','$x=2k\\pi$',true],['$x=k\\pi$','$x=k\\pi$',false],['$x=\\pi/2+k\\pi$','$x=\\pi/2+k\\pi$',false],['$x=\\pi+2k\\pi$','$x=\\pi+2k\\pi$',false]],
    };
    if (hasAny(t,['tan','cot']) && hasAny(t,['phương trình'])) return {
      vi: 'Nghiệm của $\\tan x=1$ là', en: 'Solutions of $\\tan x=1$ are', answer: '$x=\\pi/4+k\\pi$', solutionVi: '$\\tan x=1\\Leftrightarrow x=\\pi/4+k\\pi$.', solutionEn: '$x=\\pi/4+k\\pi$.', options: [['$x=\\pi/4+k\\pi$','$x=\\pi/4+k\\pi$',true],['$x=\\pi/4+2k\\pi$','$x=\\pi/4+2k\\pi$',false],['$x=k\\pi$','$x=k\\pi$',false],['$x=\\pi/2+k\\pi$','$x=\\pi/2+k\\pi$',false]],
    };
    if (hasAny(t,['độ','radian'])) return {
      vi: '$60^\\circ$ bằng bao nhiêu radian?', en: 'How many radians is $60^\\circ$?', answer: '$\\pi/3$', solutionVi: '$60^\\circ=60\\pi/180=\\pi/3$.', solutionEn: '$60^\\circ=\\pi/3$.', options: [['$\\pi/3$','$\\pi/3$',true],['$\\pi/6$','$\\pi/6$',false],['$2\\pi/3$','$2\\pi/3$',false],['$\\pi/4$','$\\pi/4$',false]],
    };
    if (hasAny(t,['công thức cộng','công thức hiệu'])) return {
      vi: '$\\sin(30^\\circ+60^\\circ)$ bằng', en: '$\\sin(30^\\circ+60^\\circ)$ equals', answer: '1', solutionVi: '$\\sin90^\\circ=1$.', solutionEn: '$\\sin90^\\circ=1$.', options: [['1','1',true],['0','0',false],['$1/2$','$1/2$',false],['$\\sqrt3/2$','$\\sqrt3/2$',false]],
    };
    return {
      vi: '$\\sin^2 30^\\circ+\\cos^2 30^\\circ$ bằng', en: '$\\sin^2 30^\\circ+\\cos^2 30^\\circ$ equals', answer: '1', solutionVi: 'Dùng $\\sin^2\\alpha+\\cos^2\\alpha=1$.', solutionEn: 'Use the Pythagorean identity.', options: [['1','1',true],['0','0',false],['$1/2$','$1/2$',false],['2','2',false]],
    };
  }

  // ---------------- VECTOR ----------------
  if (family === 'vector') {
    if (hasAny(t,['tích vô hướng'])) return {
      vi: 'Cho $\\vec a=(1,2)$, $\\vec b=(3,-1)$. Khi đó $\\vec a\\cdot\\vec b$ bằng', en: 'For $\\vec a=(1,2)$ and $\\vec b=(3,-1)$, $\\vec a\\cdot\\vec b$ equals', answer: '1', solutionVi: '$1\\cdot3+2\\cdot(-1)=1$.', solutionEn: '$1\\cdot3+2(-1)=1$.', options: [['1','1',true],['5','5',false],['-1','-1',false],['3','3',false]],
    };
    if (hasAny(t,['tích có hướng'])) return {
      vi: 'Cho $\\vec a=(1,0,0)$, $\\vec b=(0,1,0)$. $\\vec a\\times\\vec b$ bằng', en: 'For $\\vec a=(1,0,0)$ and $\\vec b=(0,1,0)$, $\\vec a\\times\\vec b$ equals', answer: '$(0,0,1)$', solutionVi: 'Theo quy tắc tích có hướng, $\\vec i\\times\\vec j=\\vec k$.', solutionEn: '$\\mathbf i\\times\\mathbf j=\\mathbf k$.', options: [['$(0,0,1)$','$(0,0,1)$',true],['$(0,1,0)$','$(0,1,0)$',false],['$(1,0,0)$','$(1,0,0)$',false],['$(0,0,-1)$','$(0,0,-1)$',false]],
    };
    if (hasAny(t,['tọa độ','toạ độ'])) return {
      vi: 'Cho $A(1,2)$, $B(4,6)$. Tọa độ $\\overrightarrow{AB}$ là', en: 'Given $A(1,2)$ and $B(4,6)$, the coordinates of $\\overrightarrow{AB}$ are', answer: '$(3,4)$', solutionVi: '$\\overrightarrow{AB}=(4-1,6-2)=(3,4)$.', solutionEn: '$B-A=(3,4)$.', options: [['$(3,4)$','$(3,4)$',true],['$(5,8)$','$(5,8)$',false],['$(-3,-4)$','$(-3,-4)$',false],['$(4,6)$','$(4,6)$',false]],
    };
    return {
      vi: 'Trong hình bình hành $ABCD$, $\\overrightarrow{AB}+\\overrightarrow{AD}$ bằng', en: 'In parallelogram $ABCD$, $\\overrightarrow{AB}+\\overrightarrow{AD}$ equals', answer: '$\\overrightarrow{AC}$', solutionVi: 'Theo quy tắc hình bình hành, tổng hai vectơ cạnh xuất phát từ A bằng vectơ đường chéo AC.', solutionEn: 'By the parallelogram rule, the sum is the diagonal vector.', options: [['$\\overrightarrow{AC}$','$\\overrightarrow{AC}$',true],['$\\overrightarrow{BD}$','$\\overrightarrow{BD}$',false],['$\\overrightarrow{CD}$','$\\overrightarrow{CD}$',false],['$\\vec0$','$\\vec0$',false]],
    };
  }

  // ---------------- FUNCTION ----------------
  if (family === 'function') {
    if (hasAny(t,['tập xác định'])) return {
      vi: 'Tập xác định của $f(x)=\\dfrac{1}{x-2}$ là', en: 'The domain of $f(x)=1/(x-2)$ is', answer: '$\\mathbb R\\setminus\\{2\\}$', solutionVi: 'Mẫu số khác 0 nên $x\\ne2$.', solutionEn: 'The denominator must be nonzero.', options: [['$\\mathbb R\\setminus\\{2\\}$','$\\mathbb R\\setminus\\{2\\}$',true],['$\\mathbb R$','$\\mathbb R$',false],['$(2,+\\infty)$','$(2,+\\infty)$',false],['$[2,+\\infty)$','$[2,+\\infty)$',false]],
    };
    if (hasAny(t,['chẵn','lẻ'])) return {
      vi: 'Hàm số $f(x)=x^4+2x^2$ là', en: '$f(x)=x^4+2x^2$ is', answer: 'hàm chẵn', solutionVi: '$f(-x)=f(x)$ nên hàm số chẵn.', solutionEn: '$f(-x)=f(x)$, so it is even.', options: [['Hàm chẵn','Even',true],['Hàm lẻ','Odd',false],['Vừa chẵn vừa lẻ','Both',false],['Không xác định','Undefined',false]],
    };
    if (hasAny(t,['parabol','bậc hai','đỉnh'])) return {
      vi: 'Đỉnh của parabol $y=x^2-4x+3$ là', en: 'The vertex of $y=x^2-4x+3$ is', answer: '$(2,-1)$', solutionVi: '$x_I=-b/(2a)=2$, $y_I=-1$.', solutionEn: 'Vertex is $(2,-1)$.', options: [['$(2,-1)$','$(2,-1)$',true],['$(-2,-1)$','$(-2,-1)$',false],['$(2,1)$','$(2,1)$',false],['$(4,3)$','$(4,3)$',false]],
    };
    if (hasAny(t,['hàm số mũ'])) return {
      vi: 'Hàm số $y=2^x$ có tính chất nào?', en: 'Which property does $y=2^x$ have?', answer: 'Đồng biến trên R', solutionVi: 'Vì cơ số $2>1$, hàm số mũ đồng biến trên $\\mathbb R$.', solutionEn: 'Because base 2 is greater than 1, the function is increasing.', options: [['Đồng biến trên $\\mathbb R$','Increasing on $\\mathbb R$',true],['Nghịch biến trên $\\mathbb R$','Decreasing on $\\mathbb R$',false],['Tập giá trị là $\\mathbb R$','Range is $\\mathbb R$',false],['Không xác định tại 0','Undefined at 0',false]],
    };
    if (hasAny(t,['lôgarit'])) return {
      vi: 'Tập xác định của $y=\\log_2(x-1)$ là', en: 'The domain of $y=\\log_2(x-1)$ is', answer: '$(1,+\\infty)$', solutionVi: '$x-1>0\\Leftrightarrow x>1$.', solutionEn: '$x>1$.', options: [['$(1,+\\infty)$','$(1,+\\infty)$',true],['$[1,+\\infty)$','$[1,+\\infty)$',false],['$\\mathbb R$','$\\mathbb R$',false],['$(-\\infty,1)$','$(-\\infty,1)$',false]],
    };
    return {
      vi: `Với dạng “${type.title_vi}”, thông tin nào cần kiểm tra trước tiên?`, en: `For “${type.title_en}”, what should be checked first?`, answer: 'Tập xác định và dữ kiện của hàm số', solutionVi: 'Phân tích hàm số luôn bắt đầu từ tập xác định và dữ kiện đã cho.', solutionEn: 'Start with the domain and given function data.', options: [['Tập xác định và dữ kiện hàm số','Domain and function data',true],['Chỉ màu của đồ thị','Only graph color',false],['Bỏ qua điều kiện','Ignore conditions',false],['Luôn đặt x=0','Always set x=0',false]],
    };
  }

  // ---------------- ALGEBRA ----------------
  if (family === 'algebra') {
    if (hasAny(t,['cấp số cộng'])) return {
      vi: 'Cấp số cộng có $u_1=2$, công sai $d=3$. Khi đó $u_5$ bằng', en: 'An arithmetic progression has $u_1=2$, $d=3$. Find $u_5$.', answer: '14', solutionVi: '$u_5=u_1+4d=14$.', solutionEn: '$u_5=2+4\\cdot3=14$.', options: [['14','14',true],['11','11',false],['15','15',false],['17','17',false]],
    };
    if (hasAny(t,['cấp số nhân'])) return {
      vi: 'Cấp số nhân có $u_1=3$, công bội $q=2$. Khi đó $u_4$ bằng', en: 'A geometric progression has $u_1=3$, $q=2$. Find $u_4$.', answer: '24', solutionVi: '$u_4=3\\cdot2^3=24$.', solutionEn: '$u_4=24$.', options: [['24','24',true],['18','18',false],['12','12',false],['48','48',false]],
    };
    if (hasAny(t,['lôgarit'])) return {
      vi: '$\\log_2 32$ bằng', en: '$\\log_2 32$ equals', answer: '5', solutionVi: '$2^5=32$ nên $\\log_2 32=5$.', solutionEn: '$2^5=32$.', options: [['5','5',true],['4','4',false],['16','16',false],['32','32',false]],
    };
    if (hasAny(t,['phương trình mũ'])) return {
      vi: 'Nghiệm của $2^{x+1}=16$ là', en: 'Solve $2^{x+1}=16$.', answer: '$x=3$', solutionVi: '$16=2^4$ nên $x+1=4$, $x=3$.', solutionEn: '$x=3$.', options: [['$x=3$','$x=3$',true],['$x=4$','$x=4$',false],['$x=2$','$x=2$',false],['$x=8$','$x=8$',false]],
    };
    if (hasAny(t,['phương trình lôgarit'])) return {
      vi: 'Nghiệm của $\\log_2(x-1)=3$ là', en: 'Solve $\\log_2(x-1)=3$.', answer: '$x=9$', solutionVi: '$x-1=8$ nên $x=9$ (thỏa $x>1$).', solutionEn: '$x=9$.', options: [['$x=9$','$x=9$',true],['$x=8$','$x=8$',false],['$x=4$','$x=4$',false],['$x=7$','$x=7$',false]],
    };
    if (hasAny(t,['bất phương trình bậc hai','tam thức'])) return {
      vi: 'Nghiệm của $x^2-5x+6<0$ là', en: 'Solve $x^2-5x+6<0$.', answer: '$(2,3)$', solutionVi: 'Tam thức có hai nghiệm 2, 3 và hệ số $a>0$, nên âm giữa hai nghiệm.', solutionEn: 'The quadratic is negative between roots 2 and 3.', options: [['$(2,3)$','$(2,3)$',true],['$(-\\infty,2)\\cup(3,+\\infty)$','$(-\\infty,2)\\cup(3,+\\infty)$',false],['$[2,3]$','$[2,3]$',false],['$\\mathbb R$','$\\mathbb R$',false]],
    };
    if (hasAny(t,['chứa căn'])) return {
      vi: 'Nghiệm của $\\sqrt{x+1}=3$ là', en: 'Solve $\\sqrt{x+1}=3$.', answer: '$x=8$', solutionVi: '$x+1=9$ và $x\\ge-1$, nên $x=8$.', solutionEn: '$x=8$.', options: [['$x=8$','$x=8$',true],['$x=2$','$x=2$',false],['$x=10$','$x=10$',false],['$x=-8$','$x=-8$',false]],
    };
    if (hasAny(t,['dãy số'])) return {
      vi: 'Dãy $u_n=2n+1$ có $u_5$ bằng', en: 'For $u_n=2n+1$, $u_5$ equals', answer: '11', solutionVi: '$u_5=2\\cdot5+1=11$.', solutionEn: '$u_5=11$.', options: [['11','11',true],['10','10',false],['9','9',false],['12','12',false]],
    };
    if (hasAny(t,['lũy thừa'])) return {
      vi: '$2^3\\cdot2^4$ bằng', en: '$2^3\\cdot2^4$ equals', answer: '128', solutionVi: '$2^{3+4}=2^7=128$.', solutionEn: '$2^7=128$.', options: [['128','128',true],['64','64',false],['32','32',false],['256','256',false]],
    };
    return {
      vi: 'Cặp $(1,2)$ có là nghiệm của bất phương trình $2x+y\\le4$ không?', en: 'Does $(1,2)$ satisfy $2x+y\\le4$?', answer: 'Có', solutionVi: 'Thay vào được $2\\cdot1+2=4\\le4$.', solutionEn: 'Substitution gives 4, so it satisfies the inequality.', options: [['Có','Yes',true],['Không','No',false],['Chỉ khi x<0','Only if x<0',false],['Không đủ dữ kiện','Insufficient data',false]],
    };
  }

  // ---------------- LOGIC ----------------
  if (family === 'logic') {
    if (hasAny(t,['lượng từ'])) return {
      vi: 'Phủ định của mệnh đề “$\\forall x\\in\\mathbb R, x^2\\ge0$” là', en: 'The negation of “for all real $x$, $x^2\\ge0$” is', answer: '$\\exists x\\in\\mathbb R: x^2<0$', solutionVi: 'Phủ định $\\forall$ thành $\\exists$ và phủ định mệnh đề bên trong.', solutionEn: 'Negate the quantifier and predicate.', options: [['$\\exists x: x^2<0$','$\\exists x: x^2<0$',true],['$\\forall x: x^2<0$','$\\forall x: x^2<0$',false],['$\\exists x: x^2\\ge0$','$\\exists x: x^2\\ge0$',false],['$\\forall x: x^2>0$','$\\forall x: x^2>0$',false]],
    };
    if (hasAny(t,['giao','hợp','hiệu','phần bù'])) return {
      vi: 'Cho $A=\\{1,2,3\\}$, $B=\\{3,4\\}$. Khi đó $A\\cap B$ bằng', en: 'Given $A=\\{1,2,3\\}$ and $B=\\{3,4\\}$, $A\\cap B$ equals', answer: '$\\{3\\}$', solutionVi: 'Phần tử chung duy nhất là 3.', solutionEn: 'The only common element is 3.', options: [['$\\{3\\}$','$\\{3\\}$',true],['$\\{1,2,4\\}$','$\\{1,2,4\\}$',false],['$\\{1,2,3,4\\}$','$\\{1,2,3,4\\}$',false],['$\\varnothing$','$\\varnothing$',false]],
    };
    if (hasAny(t,['khoảng','đoạn'])) return {
      vi: 'Tập nghiệm của $1<x\\le3$ viết bằng khoảng/đoạn là', en: 'Write the set $1<x\\le3$ in interval notation.', answer: '$(1,3]$', solutionVi: '1 không lấy, 3 có lấy nên $(1,3]$.', solutionEn: 'Open at 1, closed at 3.', options: [['$(1,3]$','$(1,3]$',true],['$[1,3]$','$[1,3]$',false],['$(1,3)$','$(1,3)$',false],['$[1,3)$','$[1,3)$',false]],
    };
    return {
      vi: 'Mệnh đề “7 là số nguyên tố” có giá trị chân lí là', en: 'The proposition “7 is a prime number” is', answer: 'Đúng', solutionVi: '7 chỉ có hai ước dương là 1 và 7.', solutionEn: '7 has exactly two positive divisors.', options: [['Đúng','True',true],['Sai','False',false],['Không phải mệnh đề','Not a proposition',false],['Không xác định','Undetermined',false]],
    };
  }

  // ---------------- GEOMETRY ----------------
  if (family === 'geometry') {
    if (hasAny(t,['định lí côsin','côsin'])) return {
      vi: 'Tam giác có hai cạnh 3, 4 và góc xen giữa $90^\\circ$. Cạnh đối diện góc đó bằng', en: 'A triangle has sides 3 and 4 with included angle $90^\\circ$. The opposite side is', answer: '5', solutionVi: '$c^2=3^2+4^2-2\\cdot3\\cdot4\\cos90^\\circ=25$.', solutionEn: 'Cosine rule gives 5.', options: [['5','5',true],['7','7',false],['1','1',false],['$\\sqrt7$','$\\sqrt7$',false]],
    };
    if (hasAny(t,['định lí sin'])) return {
      vi: 'Trong tam giác, $a=6$, $A=30^\\circ$, $B=90^\\circ$. Cạnh $b$ bằng', en: 'In a triangle, $a=6$, $A=30^\\circ$, $B=90^\\circ$. Find $b$.', answer: '12', solutionVi: '$a/\\sin A=b/\\sin B$, nên $b=6/0.5=12$.', solutionEn: 'Sine rule gives 12.', options: [['12','12',true],['6','6',false],['3','3',false],['$6\\sqrt3$','$6\\sqrt3$',false]],
    };
    if (hasAny(t,['diện tích tam giác'])) return {
      vi: 'Tam giác có hai cạnh 4, 5 và góc xen giữa $30^\\circ$. Diện tích bằng', en: 'A triangle has sides 4 and 5 with included angle $30^\\circ$. Its area is', answer: '5', solutionVi: '$S=\\frac12\\cdot4\\cdot5\\sin30^\\circ=5$.', solutionEn: 'Area is 5.', options: [['5','5',true],['10','10',false],['20','20',false],['$5\\sqrt3$','$5\\sqrt3$',false]],
    };
    if (hasAny(t,['đường tròn'])) return {
      vi: 'Đường tròn $(x-2)^2+(y+1)^2=9$ có tâm và bán kính là', en: 'For $(x-2)^2+(y+1)^2=9$, the center and radius are', answer: '$I(2,-1),R=3$', solutionVi: 'So sánh với $(x-a)^2+(y-b)^2=R^2$.', solutionEn: 'Compare with standard circle form.', options: [['$I(2,-1),R=3$','$I(2,-1),R=3$',true],['$I(-2,1),R=9$','$I(-2,1),R=9$',false],['$I(2,1),R=3$','$I(2,1),R=3$',false],['$I(-2,-1),R=3$','$I(-2,-1),R=3$',false]],
    };
    if (hasAny(t,['mặt cầu'])) return {
      vi: 'Mặt cầu $(x-1)^2+(y+2)^2+(z-3)^2=16$ có bán kính bằng', en: 'The sphere $(x-1)^2+(y+2)^2+(z-3)^2=16$ has radius', answer: '4', solutionVi: '$R=\\sqrt{16}=4$.', solutionEn: '$R=4$.', options: [['4','4',true],['16','16',false],['2','2',false],['8','8',false]],
    };
    if (hasAny(t,['mặt phẳng']) && hasAny(t,['phương trình','vectơ pháp tuyến'])) return {
      vi: 'Mặt phẳng qua $A(1,0,0)$ và có vectơ pháp tuyến $\\vec n=(2,1,-1)$ có phương trình là', en: 'A plane through $A(1,0,0)$ with normal $\\vec n=(2,1,-1)$ has equation', answer: '$2(x-1)+y-z=0$', solutionVi: 'Dùng $\\vec n\\cdot\\overrightarrow{AM}=0$.', solutionEn: 'Use the point-normal form.', options: [['$2(x-1)+y-z=0$','$2(x-1)+y-z=0$',true],['$x+2y-z=0$','$x+2y-z=0$',false],['$2x+y-z=0$','$2x+y-z=0$',false],['$2(x+1)+y-z=0$','$2(x+1)+y-z=0$',false]],
    };
    if (hasAny(t,['đường thẳng']) && hasAny(t,['phương trình','tham số','chính tắc'])) return {
      vi: 'Đường thẳng qua $A(1,2,3)$ có vectơ chỉ phương $(2,-1,1)$ có dạng tham số', en: 'The line through $A(1,2,3)$ with direction $(2,-1,1)$ has parametric equations', answer: '$x=1+2t,y=2-t,z=3+t$', solutionVi: 'Lấy tọa độ điểm cộng tham số nhân vectơ chỉ phương.', solutionEn: 'Point plus parameter times direction vector.', options: [['$x=1+2t,y=2-t,z=3+t$','$x=1+2t,y=2-t,z=3+t$',true],['$x=2+t,y=-1+2t,z=1+3t$','$x=2+t,y=-1+2t,z=1+3t$',false],['$x=1+t,y=2+t,z=3+t$','$x=1+t,y=2+t,z=3+t$',false],['$x=2t,y=-t,z=t$','$x=2t,y=-t,z=t$',false]],
    };
    if (hasAny(t,['khoảng cách từ điểm đến mặt phẳng'])) return {
      vi: 'Khoảng cách từ $M(1,2,3)$ đến mặt phẳng $x+2y+2z-3=0$ bằng', en: 'Distance from $M(1,2,3)$ to $x+2y+2z-3=0$ is', answer: '$8/3$', solutionVi: '$d=|1+4+6-3|/\\sqrt{1+4+4}=8/3$.', solutionEn: 'Point-plane distance formula gives $8/3$.', options: [['$8/3$','$8/3$',true],['8','8',false],['$4/3$','$4/3$',false],['3','3',false]],
    };
    if (hasAny(t,['thể tích khối chóp'])) return {
      vi: 'Khối chóp có diện tích đáy 12 và chiều cao 6. Thể tích bằng', en: 'A pyramid has base area 12 and height 6. Its volume is', answer: '24', solutionVi: '$V=\\frac13Sh=24$.', solutionEn: '$V=Sh/3=24$.', options: [['24','24',true],['72','72',false],['36','36',false],['18','18',false]],
    };
    if (hasAny(t,['thể tích khối lăng trụ','khối hộp'])) return {
      vi: 'Khối lăng trụ có diện tích đáy 10 và chiều cao 7. Thể tích bằng', en: 'A prism has base area 10 and height 7. Its volume is', answer: '70', solutionVi: '$V=Sh=70$.', solutionEn: '$V=Sh=70$.', options: [['70','70',true],['35','35',false],['17','17',false],['$70/3$','$70/3$',false]],
    };
    if (hasAny(t,['góc giữa'])) return {
      vi: 'Hai vectơ $\\vec a=(1,0,0)$ và $\\vec b=(0,1,0)$ tạo với nhau góc bằng', en: 'The angle between $\\vec a=(1,0,0)$ and $\\vec b=(0,1,0)$ is', answer: '$90^\\circ$', solutionVi: '$\\vec a\\cdot\\vec b=0$ nên hai vectơ vuông góc.', solutionEn: 'Dot product is zero, so the angle is 90 degrees.', options: [['$90^\\circ$','$90^\\circ$',true],['$0^\\circ$','$0^\\circ$',false],['$45^\\circ$','$45^\\circ$',false],['$180^\\circ$','$180^\\circ$',false]],
    };
    return {
      vi: `Trong dạng “${type.title_vi}”, phương pháp phù hợp nhất là`, en: `For “${type.title_en}”, the most suitable method is`, answer: 'Dùng quan hệ hình học đúng với giả thiết, kết hợp tính toán khi cần',
      solutionVi: 'Xác định cấu hình, quan hệ hình học chủ chốt rồi áp dụng định lí/công thức phù hợp.', solutionEn: 'Identify the configuration and apply the relevant theorem/formula.', options: [['Xác định quan hệ hình học rồi áp dụng định lí phù hợp','Identify geometry and apply the relevant theorem',true],['Luôn dùng đạo hàm','Always use derivatives',false],['Luôn dùng tổ hợp','Always use combinations',false],['Bỏ qua hình vẽ và giả thiết','Ignore the diagram and assumptions',false]],
    };
  }

  const [mVi, mEn] = methodName(family);
  return {
    vi: `Với dạng “${type.title_vi}”, phương pháp nào phù hợp nhất?`, en: `For “${type.title_en}”, which method is most appropriate?`, answer: mVi,
    solutionVi: `Trọng tâm của dạng là ${mVi}.`, solutionEn: `The core method is ${mEn}.`,
    options: [[mVi,mEn,true],['Dùng một công thức không liên quan','Use an unrelated formula',false],['Bỏ qua điều kiện bài toán','Ignore conditions',false],['Chỉ đoán kết quả','Guess the result',false]],
  };
}


function verificationSample(type: MathType, family: ExerciseFamily, variant: number): Sample {
  const base = directSample(type, family, variant);
  return {
    vi: `Kiểm tra lời giải – dạng “${type.title_vi}”: Một học sinh xử lí bài “${base.vi}” và kết luận ${base.answer}. Nhận xét nào đúng?`,
    en: `Solution check – “${type.title_en}”: A student solves “${base.en}” and concludes ${base.answer}. Which assessment is correct?`,
    answer: 'Kết luận đúng',
    solutionVi: `Kết luận đúng. ${base.solutionVi}`,
    solutionEn: `The conclusion is correct. ${base.solutionEn}`,
    options: [
      ['Kết luận đúng; cách kiểm tra phù hợp với dữ kiện', 'The conclusion is correct and consistent with the data', true],
      ['Kết luận sai vì phải đổi sang một dạng toán khác', 'The conclusion is wrong because another exercise family must be used', false],
      ['Kết luận sai vì mọi điều kiện của bài đều phải bỏ qua', 'The conclusion is wrong because all conditions should be ignored', false],
      ['Không thể kiểm tra bằng kiến thức của bài này', 'It cannot be checked using this lesson', false],
    ],
  };
}

function conceptualSample(type: MathType, family: ExerciseFamily, variant: number): Sample {
  const [mVi, mEn] = methodName(family);
  const prompts = [
    [`Khi giải dạng “${type.title_vi}”, bước nào cần làm trước?`, `When solving “${type.title_en}”, what should be done first?`],
    [`Nhận định nào mô tả đúng nhất cách xử lí dạng “${type.title_vi}”?`, `Which statement best describes how to handle “${type.title_en}”?`],
    [`Một học sinh đang giải dạng “${type.title_vi}”. Cách làm nào hợp lí nhất?`, `A student is solving “${type.title_en}”. Which approach is most reasonable?`],
    [`Trong bài toán thuộc dạng “${type.title_vi}”, tiêu chí nào giúp kiểm tra kết quả?`, `In “${type.title_en}”, which criterion helps verify the result?`],
  ];
  const p = prompts[variant % prompts.length];
  return {
    vi: p[0], en: p[1], answer: mVi,
    solutionVi: `Cần bám đúng yêu cầu của dạng và sử dụng ${mVi}; đồng thời kiểm tra điều kiện/kết quả.`,
    solutionEn: `Use ${mEn} and verify the conditions/result.`,
    options: [[mVi,mEn,true],['Bỏ qua dữ kiện và chọn đáp án theo cảm tính','Ignore the data and guess',false],['Chuyển sang một dạng toán khác','Switch to a different exercise type',false],['Chỉ thay số vào công thức bất kỳ','Substitute into any formula',false]],
  };
}

function trueFalseSample(type: MathType, family: ExerciseFamily, index: number): Sample {
  const [mVi, mEn] = methodName(family);
  const base = directSample(type, family, index);
  const statements: Array<[string,string,boolean]> = [
    [`a) Dạng đang xét là “${type.title_vi}”, vì vậy phải bám đúng dữ kiện và yêu cầu của dạng.`, `a) The target type is “${type.title_en}”, so the solution must stay within that exercise family.`, true],
    [`b) Có thể bỏ qua mọi điều kiện xác định/điều kiện hình học mà vẫn luôn nhận được nghiệm đúng.`, `b) Domain/geometric conditions can always be ignored without affecting correctness.`, false],
    [`c) Một cách kiểm tra hợp lí là đối chiếu kết quả với ${mVi}.`, `c) A reasonable check is to compare the result with ${mEn}.`, true],
    [`d) Nếu hai bài chỉ khác các con số thì chắc chắn được xem là hai cấu trúc bài hoàn toàn khác nhau.`, `d) If two exercises differ only by numbers, they necessarily represent different structures.`, false],
  ];
  if (index % 2 === 1) {
    statements[2] = [`c) Với dữ kiện mẫu “${base.vi.replace(/\.$/,'')}”, đáp án tham khảo là ${base.answer}.`, `c) For the sample data, the reference answer is ${base.answer}.`, true];
  }
  return {
    vi: `Xét tính đúng/sai của các nhận định sau về dạng “${type.title_vi}”:`,
    en: `Determine whether the following statements about “${type.title_en}” are true or false:`,
    answer: statements.map((s, i) => `${String.fromCharCode(97+i)}-${s[2] ? 'Đ' : 'S'}`).join(', '),
    solutionVi: `Đáp án: ${statements.map((s, i) => `${String.fromCharCode(97+i)}) ${s[2] ? 'Đúng' : 'Sai'}`).join('; ')}.`,
    solutionEn: `Answers: ${statements.map((s, i) => `${String.fromCharCode(97+i)}) ${s[2] ? 'True' : 'False'}`).join('; ')}.`,
    options: statements,
  };
}

function shortSample(type: MathType, family: ExerciseFamily, index: number): Sample {
  const direct = directSample(type, family, index + 1);
  // Convert the direct exercise into a short-answer prompt without showing choices.
  return {
    vi: `Trả lời ngắn – ${index === 0 ? 'vận dụng trực tiếp' : 'kiểm tra kết quả'}: ${direct.vi.replace(/\s+là\s*$/,'')}`,
    en: `Short answer – ${index === 0 ? 'direct application' : 'result check'}: ${direct.en.replace(/\s+is\s*$/,'')}`,
    answer: direct.answer,
    solutionVi: direct.solutionVi,
    solutionEn: direct.solutionEn,
  };
}

function essaySample(type: MathType, family: ExerciseFamily): Sample {
  const direct = directSample(type, family, 2);
  return {
    vi: `Tự luận – dạng “${type.title_vi}”. Giải chi tiết bài toán sau và nêu rõ điều kiện/phương pháp sử dụng: ${direct.vi}`,
    en: `Essay – “${type.title_en}”. Solve the following problem in detail and state the conditions/method used: ${direct.en}`,
    answer: direct.answer,
    solutionVi: `Gợi ý lời giải: ${direct.solutionVi} Sau khi tính toán, cần kết luận đúng theo yêu cầu của dạng “${type.title_vi}”.`,
    solutionEn: `Suggested solution: ${direct.solutionEn} Conclude explicitly according to “${type.title_en}”.`,
  };
}

function makeQuestion(lesson: Lesson, type: MathType, family: ExerciseFamily, kind: StaticKind, index: number, sample: Sample): Question {
  const qType = kind === 'TN' ? 'MCQ' : kind === 'DS' ? 'TRUE_FALSE' : kind === 'TLN' ? 'SHORT' : 'ESSAY';
  const variantNames = kind === 'TN'
    ? ['direct', 'concept', 'reverse', 'error-analysis']
    : kind === 'DS' ? ['reasoning', 'validation']
      : kind === 'TLN' ? ['direct-short', 'reverse-short']
        : ['full-solution'];
  return {
    id: `q-static-${type.id}-${kind.toLowerCase()}-${index + 1}`,
    topic_id: lesson.topic_id,
    type_id: type.id,
    format_type: kind,
    question_type: qType,
    difficulty: index === 0 ? 'EASY' : index >= 2 ? 'MEDIUM' : 'MEDIUM',
    language_level: 2,
    question_vi: sample.vi,
    question_en: sample.en,
    options: sample.options ? opt(sample.options) : undefined,
    solution_vi: sample.solutionVi,
    solution_en: sample.solutionEn,
    correct_answer: sample.answer,
    vocabulary_support: [],
    formula_support: lesson.formulas?.slice(0, 3) || [],
    math_skill: type.title_vi,
    english_skill: type.title_en,
    status: 'PUBLISHED',
    created_by: 'system-static-bank',
    created_at: '2026-08-26T00:00:00.000Z',
    variant_tag: `${type.id}-static-${variantNames[index] || `${kind.toLowerCase()}-${index + 1}`}`,
  };
}

function buildStaticForType(lesson: Lesson, type: MathType): Question[] {
  const family = TYPE_FAMILY_BY_ID[type.id];
  const out: Question[] = [];
  // 4 TN: 2 bài toán trực tiếp với dữ kiện khác nhau + 2 câu cấu trúc phương pháp/kiểm tra.
  out.push(makeQuestion(lesson, type, family, 'TN', 0, directSample(type, family, 0)));
  out.push(makeQuestion(lesson, type, family, 'TN', 1, verificationSample(type, family, 1)));
  out.push(makeQuestion(lesson, type, family, 'TN', 2, conceptualSample(type, family, 1)));
  out.push(makeQuestion(lesson, type, family, 'TN', 3, conceptualSample(type, family, 3)));
  // 2 Đ/S
  out.push(makeQuestion(lesson, type, family, 'DS', 0, trueFalseSample(type, family, 0)));
  out.push(makeQuestion(lesson, type, family, 'DS', 1, trueFalseSample(type, family, 1)));
  // 2 TLN
  out.push(makeQuestion(lesson, type, family, 'TLN', 0, shortSample(type, family, 0)));
  out.push(makeQuestion(lesson, type, family, 'TLN', 1, shortSample(type, family, 1)));
  // 1 TL
  out.push(makeQuestion(lesson, type, family, 'TL', 0, essaySample(type, family)));
  return out;
}

export const STATIC_QUESTION_BANK: Question[] = FULL_LESSONS.flatMap((lesson) =>
  (lesson.types || []).flatMap((type) => buildStaticForType(lesson, type))
);

export function auditStaticQuestionBank() {
  const issues: string[] = [];
  const expected = { TN: 4, DS: 2, TLN: 2, TL: 1 } as const;
  const allTypes = FULL_LESSONS.flatMap((l) => l.types || []);
  for (const type of allTypes) {
    const items = STATIC_QUESTION_BANK.filter((q) => q.type_id === type.id);
    for (const [kind, count] of Object.entries(expected)) {
      const actual = items.filter((q) => q.format_type === kind).length;
      if (actual !== count) issues.push(`${type.id}: ${kind}=${actual}, expected ${count}`);
    }
    if (items.length !== 9) issues.push(`${type.id}: total=${items.length}, expected 9`);
  }
  return {
    typeCount: allTypes.length,
    questionCount: STATIC_QUESTION_BANK.length,
    expectedQuestionCount: allTypes.length * 9,
    issues,
  };
}
