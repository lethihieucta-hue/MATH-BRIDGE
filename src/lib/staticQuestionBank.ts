import { Question, QuestionOption, MathType, Lesson, QuestionAsset } from '../types';
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
const bareMath = (s: string) => s.replace(/^\$+|\$+$/g, '');


/** Exact-type semantic repairs for curriculum types whose family fallback is too broad. */
function semanticExactTypeSample(type: MathType, variant: number): Sample | null {
  const tid = type.id;
  const v = variant % 4;
  const mk = (vi:string,en:string,answer:string,solutionVi:string,wrong:string[],solutionEn=solutionVi): Sample => ({
    vi,en,answer,solutionVi,solutionEn,
    options:[[answer,answer,true],[wrong[0],wrong[0],false],[wrong[1],wrong[1],false],[wrong[2],wrong[2],false]],
  });

  // ---- Grade 10: propositions / sets ----
  if (tid === 'type-kntt-10-01-01') {
    const r=[
      ['Mệnh đề “7 là số nguyên tố” có giá trị chân lí là','The proposition “7 is prime” is','Đúng',['Sai','Không phải mệnh đề','Không xác định']],
      ['Câu nào sau đây là một mệnh đề?','Which sentence is a proposition?','2 là số chẵn',['Bạn bao nhiêu tuổi?','Hãy mở cửa!','$x+1>0$']],
      ['Mệnh đề chứa biến $P(x):x^2>4$. Với $x=3$, $P(3)$ là','For $P(x):x^2>4$, $P(3)$ is','Đúng',['Sai','Không xác định','Không phải mệnh đề']],
      ['Mệnh đề “9 là số nguyên tố” có giá trị chân lí là','The proposition “9 is prime” is','Sai',['Đúng','Không phải mệnh đề','Không xác định']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Xét câu có phải khẳng định xác định đúng/sai và kiểm tra nội dung.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-01-02') {
    const r=[
      ['Phủ định của “$5>2$” là','The negation of “$5>2$” is','$5\\le2$',['$5<2$','$5\\ge2$','$5=2$']],
      ['Mệnh đề đảo của “Nếu $n$ chia hết cho 4 thì $n$ chẵn” là','The converse of “If $n$ is divisible by 4, then $n$ is even” is','Nếu $n$ chẵn thì $n$ chia hết cho 4',['Nếu $n$ không chẵn thì $n$ không chia hết cho 4','Nếu $n$ chia hết cho 4 thì $n$ chẵn','Nếu $n$ lẻ thì $n$ chia hết cho 4']],
      ['Mệnh đề nào tương đương với “$n$ là số chẵn”?','Which statement is equivalent to “$n$ is even”?','$n=2k$ với $k\\in\\mathbb Z$',['$n=2k+1$','$n=k^2$','$n>0$']],
      ['Mệnh đề kéo theo $P\\Rightarrow Q$ chỉ sai trong trường hợp','An implication $P\\Rightarrow Q$ is false only when','$P$ đúng, $Q$ sai',['$P$ sai, $Q$ đúng','$P,Q$ đều đúng','$P,Q$ đều sai']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng định nghĩa phủ định, kéo theo, đảo và tương đương.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-02-01') {
    const r=[
      ['Cho $A=\\{1,2,3\\}$. Khẳng định đúng là','Let $A=\\{1,2,3\\}$. Which is true?','$2\\in A$',['$4\\in A$','$A\\subset\\{1,2\\}$','$A=\\{1,2\\}$']],
      ['Cho $A=\\{1,2\\}$, $B=\\{1,2,3\\}$. Quan hệ đúng là','Let $A=\\{1,2\\}$, $B=\\{1,2,3\\}$. The correct relation is','$A\\subset B$',['$B\\subset A$','$A=B$','$A\\cap B=\\varnothing$']],
      ['Tập $A=\\{x\\in\\mathbb Z:1\\le x<4\\}$ bằng','The set $A=\\{x\\in\\mathbb Z:1\\le x<4\\}$ is','$\\{1,2,3\\}$',['$\\{1,2,3,4\\}$','$\\{2,3\\}$','$[1,4)$']],
      ['Hai tập $A=\\{1,2,3\\}$ và $B=\\{3,2,1\\}$','The sets $A=\\{1,2,3\\}$ and $B=\\{3,2,1\\}$ are','Bằng nhau',['Không giao nhau','$A\\subsetneq B$','$B\\subsetneq A$']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng định nghĩa phần tử, tập con và hai tập hợp bằng nhau.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-02-02') {
    const r=[
      ['Cho $A=\\{1,2,3\\}$, $B=\\{3,4\\}$. $A\\cap B$ bằng','Let $A=\\{1,2,3\\}$ and $B=\\{3,4\\}$. $A\\cap B$ is','$\\{3\\}$',['$\\{1,2,4\\}$','$\\{1,2,3,4\\}$','$\\varnothing$']],
      ['Cho $A=\\{1,2\\}$, $B=\\{2,3\\}$. $A\\cup B$ bằng','Let $A=\\{1,2\\}$ and $B=\\{2,3\\}$. $A\\cup B$ is','$\\{1,2,3\\}$',['$\\{2\\}$','$\\{1,3\\}$','$\\varnothing$']],
      ['Cho $A=\\{1,2,3,4\\}$, $B=\\{2,4\\}$. $A\\setminus B$ bằng','Let $A=\\{1,2,3,4\\}$ and $B=\\{2,4\\}$. $A\\setminus B$ is','$\\{1,3\\}$',['$\\{2,4\\}$','$\\{1,2,3,4\\}$','$\\varnothing$']],
      ['Trong $U=\\{1,2,3,4,5\\}$, với $A=\\{1,3,5\\}$, phần bù của $A$ là','In $U=\\{1,2,3,4,5\\}$, if $A=\\{1,3,5\\}$, the complement of $A$ is','$\\{2,4\\}$',['$\\{1,3,5\\}$','$\\{1,2,3,4,5\\}$','$\\varnothing$']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Thực hiện đúng phép giao, hợp, hiệu hoặc phần bù.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-02-03') {
    const r=[
      ['Tập nghiệm của $1<x\\le3$ viết bằng khoảng/đoạn là','Write $1<x\\le3$ in interval notation.','$(1,3]$',['$[1,3]$','$(1,3)$','$[1,3)$']],
      ['$[-2,3]\\cap(1,5)$ bằng','$[-2,3]\\cap(1,5)$ equals','$(1,3]$',['$[-2,5)$','$[1,3]$','$(1,5)$']],
      ['$(-\\infty,2)\\cup[2,5]$ bằng','$(-\\infty,2)\\cup[2,5]$ equals','$(-\\infty,5]$',['$(-\\infty,2)$','$[2,5]$','$(-\\infty,5)$']],
      ['$[0,4]\\setminus(1,3)$ bằng','$[0,4]\\setminus(1,3)$ equals','$[0,1]\\cup[3,4]$',['$(1,3)$','$[1,3]$','$[0,4]$']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Biểu diễn đúng khoảng/đoạn rồi thực hiện phép toán tập hợp.',r[3] as string[]);
  }

  // ---- Grade 10: trigonometric values ----
  if (tid === 'type-kntt-10-05-01') {
    const r=[
      ['$\\sin30^\\circ$ bằng','$\\sin30^\\circ$ equals','$1/2$',['$\\sqrt3/2$','1','0']],
      ['$\\cos120^\\circ$ bằng','$\\cos120^\\circ$ equals','$-1/2$',['$1/2$','$-\\sqrt3/2$','$\\sqrt3/2$']],
      ['Dấu của $\\sin150^\\circ$ là','The sign of $\\sin150^\\circ$ is','Dương',['Âm','Bằng 0','Không xác định']],
      ['$\\tan135^\\circ$ bằng','$\\tan135^\\circ$ equals','-1',['1','$\\sqrt3$','0']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng giá trị lượng giác của góc đặc biệt và dấu theo góc phần tư.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-05-02') {
    const r=[
      ['Nếu $\\sin\\alpha=3/5$ và $\\alpha$ nhọn thì $\\cos\\alpha$ bằng','If $\\sin\\alpha=3/5$ and $\\alpha$ is acute, $\\cos\\alpha$ is','$4/5$',['$3/5$','$-4/5$','$5/4$']],
      ['Biểu thức $\\sin^2\\alpha+\\cos^2\\alpha$ bằng','$\\sin^2\\alpha+\\cos^2\\alpha$ equals','1',['0','2','$\\sin\\alpha$']],
      ['Nếu $\\cos\\alpha\\ne0$ thì $\\tan\\alpha$ bằng','If $\\cos\\alpha\\ne0$, $\\tan\\alpha$ equals','$\\dfrac{\\sin\\alpha}{\\cos\\alpha}$',['$\\dfrac{\\cos\\alpha}{\\sin\\alpha}$','$\\sin\\alpha\\cos\\alpha$','$1/\\cos\\alpha$']],
      ['Với $\\sin\\alpha\\ne0$, $\\tan\\alpha\\cdot\\cot\\alpha$ bằng','If $\\sin\\alpha\\ne0$, $\\tan\\alpha\\cdot\\cot\\alpha$ equals','1',['0','$\\sin\\alpha$','$\\cos\\alpha$']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Vận dụng các hệ thức lượng giác cơ bản.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-05-03') {
    const r=[
      ['Cho $\\sin\\alpha=3/5$, $\\alpha$ nhọn. Giá trị $2\\sin\\alpha+\\cos\\alpha$ bằng','Given $\\sin\\alpha=3/5$ and acute $\\alpha$, find $2\\sin\\alpha+\\cos\\alpha$.','2',['$7/5$','$6/5$','$8/5$']],
      ['Cho $\\cos\\alpha=1/2$, $\\alpha$ nhọn. $1+\\tan^2\\alpha$ bằng','Given $\\cos\\alpha=1/2$ and acute $\\alpha$, find $1+\\tan^2\\alpha$.','4',['2','3','$1/4$']],
      ['Cho $\\tan\\alpha=1$. Giá trị $\\dfrac{1-\\tan^2\\alpha}{1+\\tan^2\\alpha}$ bằng','Given $\\tan\\alpha=1$, evaluate $\\dfrac{1-\\tan^2\\alpha}{1+\\tan^2\\alpha}$.','0',['1','-1','$1/2$']],
      ['Cho $\\sin\\alpha=4/5$, $\\alpha$ nhọn. $\\sin\\alpha\\cos\\alpha$ bằng','Given $\\sin\\alpha=4/5$ and acute $\\alpha$, find $\\sin\\alpha\\cos\\alpha$.','$12/25$',['$16/25$','$3/5$','$7/25$']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Suy ra các giá trị còn lại rồi thay vào biểu thức.',r[3] as string[]);
  }

  // ---- Grade 10: vectors in Oxy ----
  if (tid === 'type-kntt-10-10-01') {
    const r=[
      ['Trong mặt phẳng $Oxy$, cho $A(1,2)$, $B(4,6)$. $\\overrightarrow{AB}$ bằng','In $Oxy$, given $A(1,2)$ and $B(4,6)$, $\\overrightarrow{AB}$ is','$(3,4)$',['$(5,8)$','$(-3,-4)$','$(4,6)$']],
      ['Trong $Oxy$, vectơ $\\vec a=2\\vec i-3\\vec j$ có tọa độ','In $Oxy$, $\\vec a=2\\vec i-3\\vec j$ has coordinates','$(2,-3)$',['$(-3,2)$','$(2,3)$','$(-2,3)$']],
      ['Trong $Oxy$, điểm $M$ có $\\overrightarrow{OM}=(-2,5)$. Tọa độ $M$ là','In $Oxy$, if $\\overrightarrow{OM}=(-2,5)$, the coordinates of $M$ are','$(-2,5)$',['$(2,-5)$','$(5,-2)$','$(-5,2)$']],
      ['Trong $Oxy$, $A(-1,3)$, $B(2,-2)$. $\\overrightarrow{BA}$ bằng','In $Oxy$, $A(-1,3)$, $B(2,-2)$. $\\overrightarrow{BA}$ is','$(-3,5)$',['$(3,-5)$','$(1,1)$','$(-1,1)$']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Lấy tọa độ điểm cuối trừ tọa độ điểm đầu.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-10-02') {
    const r=[
      ['Trong $Oxy$, trung điểm của $A(1,2)$, $B(5,6)$ là','In $Oxy$, the midpoint of $A(1,2)$ and $B(5,6)$ is','$(3,4)$',['$(6,8)$','$(2,2)$','$(4,3)$']],
      ['Trọng tâm tam giác $A(0,0),B(3,0),C(0,6)$ là','The centroid of triangle $A(0,0),B(3,0),C(0,6)$ is','$(1,2)$',['$(3,6)$','$(1,3)$','$(2,1)$']],
      ['Điểm $M$ chia $AB$ theo tỉ số $AM:MB=1:1$ với $A(-2,1),B(4,5)$. $M$ là','Point $M$ divides $AB$ with $AM:MB=1:1$, $A(-2,1),B(4,5)$. $M$ is','$(1,3)$',['$(2,3)$','$(1,2)$','$(-1,3)$']],
      ['Trung điểm của $A(-3,4)$ và $B(1,-2)$ là','The midpoint of $A(-3,4)$ and $B(1,-2)$ is','$(-1,1)$',['$(2,2)$','$(-2,1)$','$(1,-1)$']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng công thức trung điểm/trọng tâm hoặc công thức chia đoạn.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-10-03') {
    const r=[
      ['Cho $\\vec a=(1,2)$, $\\vec b=(3,-1)$. $\\vec a+\\vec b$ bằng','Let $\\vec a=(1,2)$, $\\vec b=(3,-1)$. $\\vec a+\\vec b$ is','$(4,1)$',['$(2,3)$','$(-2,3)$','$(4,3)$']],
      ['Cho $\\vec a=(2,-1)$, $\\vec b=(-1,4)$. $\\vec a-\\vec b$ bằng','Let $\\vec a=(2,-1)$, $\\vec b=(-1,4)$. $\\vec a-\\vec b$ is','$(3,-5)$',['$(1,3)$','$(-3,5)$','$(3,3)$']],
      ['Cho $\\vec a=(-2,3)$. $2\\vec a$ bằng','Let $\\vec a=(-2,3)$. $2\\vec a$ is','$(-4,6)$',['$(-2,6)$','$(4,-6)$','$(-4,3)$']],
      ['Cho $\\vec a=(1,1)$, $\\vec b=(2,-3)$. $3\\vec a+\\vec b$ bằng','Let $\\vec a=(1,1)$, $\\vec b=(2,-3)$. $3\\vec a+\\vec b$ is','$(5,0)$',['$(3,-2)$','$(5,-6)$','$(1,0)$']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Thực hiện phép toán theo từng tọa độ $x,y$.',r[3] as string[]);
  }

  if (tid === 'type-kntt-10-11-01') {
    const r=[
      ['Cho $\\vec a=(1,2)$, $\\vec b=(3,-1)$. $\\vec a\\cdot\\vec b$ bằng','For $\\vec a=(1,2)$ and $\\vec b=(3,-1)$, find $\\vec a\\cdot\\vec b$.','1',['5','-1','3']],
      ['Cho $\\vec a=(2,1)$, $\\vec b=(-1,4)$. Tích vô hướng bằng','For $\\vec a=(2,1)$ and $\\vec b=(-1,4)$, the dot product is','2',['-6','6','3']],
      ['Cho $\\vec a=(3,0)$, $\\vec b=(2,5)$. Tích vô hướng bằng','For $\\vec a=(3,0)$ and $\\vec b=(2,5)$, the dot product is','6',['10','15','0']],
      ['Cho $\\vec a=(-1,2)$, $\\vec b=(4,3)$. Tích vô hướng bằng','For $\\vec a=(-1,2)$ and $\\vec b=(4,3)$, the dot product is','2',['-10','10','5']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng $\\vec a\\cdot\\vec b=x_ax_b+y_ay_b$.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-11-02') {
    const r=[
      ['Góc giữa $\\vec a=(1,0)$ và $\\vec b=(1,1)$ bằng','The angle between $\\vec a=(1,0)$ and $\\vec b=(1,1)$ is','$45^\\circ$',['$30^\\circ$','$60^\\circ$','$90^\\circ$']],
      ['Góc giữa $\\vec a=(1,0)$ và $\\vec b=(0,2)$ bằng','The angle between $\\vec a=(1,0)$ and $\\vec b=(0,2)$ is','$90^\\circ$',['$0^\\circ$','$45^\\circ$','$60^\\circ$']],
      ['Góc giữa $\\vec a=(1,0)$ và $\\vec b=(\\sqrt3,1)$ bằng','The angle between $\\vec a=(1,0)$ and $\\vec b=(\\sqrt3,1)$ is','$30^\\circ$',['$45^\\circ$','$60^\\circ$','$90^\\circ$']],
      ['Góc giữa $\\vec a=(1,0)$ và $\\vec b=(1,\\sqrt3)$ bằng','The angle between $\\vec a=(1,0)$ and $\\vec b=(1,\\sqrt3)$ is','$60^\\circ$',['$30^\\circ$','$45^\\circ$','$90^\\circ$']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng $\\cos\\theta=\\dfrac{\\vec a\\cdot\\vec b}{|\\vec a||\\vec b|}$.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-11-04') {
    const r=[
      ['Một lực $10$ N làm vật dịch chuyển $3$ m cùng hướng. Công của lực bằng','A 10 N force moves an object 3 m in the same direction. The work is','30 J',['13 J','3 J','300 J']],
      ['Lực $20$ N tạo góc $60^\\circ$ với độ dời $5$ m. Công bằng','A 20 N force makes a $60^\\circ$ angle with a 5 m displacement. Work is','50 J',['100 J','25 J','10 J']],
      ['Hai vectơ lực $\\vec F=(3,4)$ N và độ dời $\\vec s=(2,0)$ m. Công $\\vec F\\cdot\\vec s$ bằng','Force $\\vec F=(3,4)$ N and displacement $\\vec s=(2,0)$ m. The work is','6 J',['8 J','10 J','14 J']],
      ['Lực vuông góc với độ dời thì công bằng','If a force is perpendicular to displacement, the work is','0',['1','Bằng độ lớn lực','Âm']],
    ][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng công thức công $A=Fs\\cos\\theta=\\vec F\\cdot\\vec s$.',r[3] as string[]);
  }

  // ---- Grade 10 line relations in Oxy ----
  if (tid === 'type-kntt-10-20-01') {
    const r=[
      ['Hai đường thẳng $x+y-1=0$ và $2x+2y+3=0$','The lines $x+y-1=0$ and $2x+2y+3=0$ are','Song song',['Cắt nhau','Trùng nhau','Vuông góc']],
      ['Hai đường thẳng $x+y=0$ và $x-y=0$','The lines $x+y=0$ and $x-y=0$ are','Vuông góc',['Song song','Trùng nhau','Không cắt nhau']],
      ['Hai đường thẳng $x+2y-3=0$ và $2x+4y-6=0$','The lines $x+2y-3=0$ and $2x+4y-6=0$ are','Trùng nhau',['Song song phân biệt','Vuông góc','Cắt nhau tại một điểm']],
      ['Hai đường thẳng $x=0$ và $y=1$','The lines $x=0$ and $y=1$ are','Vuông góc',['Song song','Trùng nhau','Không xác định']],
    ][v]; return mk(`${r[0]}. Vị trí tương đối là`,`${r[1]}. Their relative position is`,r[2] as string,'So sánh vectơ pháp tuyến/hệ số của hai phương trình đường thẳng.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-20-03') {
    const r=[
      ['$M(0,0)$','$3x+4y-10=0$','2',['10','$5/2$','4']],
      ['$M(1,2)$','$x-2=0$','1',['2','3','0']],
      ['$M(2,0)$','$y-3=0$','3',['1','2','5']],
      ['$M(1,1)$','$x+y-4=0$','$\\sqrt2$',['2','$2\\sqrt2$','1']],
    ][v]; return mk(`Khoảng cách từ ${r[0]} đến đường thẳng ${r[1]} bằng`,`The distance from ${r[0]} to line ${r[1]} is`,r[2] as string,'Dùng $d=\\dfrac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$.',r[3] as string[]);
  }

  // ---- Grade 10 counting ----
  if (tid === 'type-kntt-10-23-01') {
    const r=[['Có 3 tuyến xe buýt hoặc 2 tuyến tàu từ A đến B. Chọn đúng một phương tiện có bao nhiêu cách?','There are 3 bus routes or 2 train routes from A to B. Choose one route.','5',['6','3','2']],['Một cửa hàng có 4 loại bút hoặc 5 loại vở. Chọn một món có bao nhiêu cách?','A store has 4 pen types or 5 notebook types. Choose one item.','9',['20','5','4']],['Có 6 đề tài Toán hoặc 3 đề tài Tin. Chọn một đề tài có','There are 6 math or 3 CS topics. Choose one.','9',['18','6','3']],['Có 2 cổng phía Đông hoặc 4 cổng phía Tây để vào sân. Chọn một cổng có','There are 2 east or 4 west gates. Choose one.','6',['8','4','2']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Hai lựa chọn loại trừ nhau nên áp dụng quy tắc cộng.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-23-02') {
    const r=[['Có 3 áo và 4 quần. Chọn 1 áo và 1 quần có','There are 3 shirts and 4 pants. Choose one of each.','12',['7','4','3']],['Mật khẩu gồm 1 chữ cái trong 5 chữ và 1 chữ số trong 10 số. Có','A password has one of 5 letters and one of 10 digits.','50',['15','10','5']],['Có 2 đường A–B và 3 đường B–C. Đi từ A qua B đến C có','There are 2 routes A–B and 3 routes B–C. Travel A via B to C.','6',['5','3','2']],['Một bữa gồm 4 món chính và 2 đồ uống. Chọn một mỗi loại có','A meal has 4 mains and 2 drinks. Choose one of each.','8',['6','4','2']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Các giai đoạn liên tiếp nên áp dụng quy tắc nhân.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-23-03') {
    const r=[['Chọn quà: hoặc 3 quyển sách, hoặc một bộ gồm 2 áo và 4 mũ. Có bao nhiêu cách?','Choose a gift: either one of 3 books, or a set with one of 2 shirts and one of 4 hats.','11',['9','24','8']],['Đi A–C: hoặc 2 đường trực tiếp, hoặc qua B với 3 đường A–B và 2 đường B–C. Có','Travel A–C: either 2 direct routes or via B with 3 A–B and 2 B–C routes.','8',['7','12','6']],['Chọn một môn: 4 môn tự nhiên; hoặc chọn một cặp gồm 2 môn xã hội và 3 CLB. Có','Choose: one of 4 science subjects, or a pair from 2 social subjects and 3 clubs.','10',['9','24','6']],['Mã loại A có 5 cách; loại B gồm 2 vị trí lần lượt có 3 và 4 cách. Tổng số mã là','Type A codes: 5 ways; type B has positions with 3 and 4 choices. Total codes:','17',['12','9','24']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Phân nhánh dùng quy tắc cộng; trong mỗi nhánh nhiều giai đoạn dùng quy tắc nhân.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-23-04') {
    const r=[['Một biển số mô hình gồm 2 chữ cái (5 lựa chọn mỗi vị trí) và 3 chữ số (10 lựa chọn mỗi vị trí), cho phép lặp. Số biển là','A model plate has 2 letters (5 choices each) and 3 digits (10 choices each), repetition allowed.','25000',['15000','5000','100000']],['Một thực đơn có 3 món khai vị, 4 món chính, 2 món tráng miệng. Chọn đủ 3 phần có','A menu has 3 starters, 4 mains, 2 desserts. Choose one of each.','24',['9','12','18']],['Một hành trình có 2 chuyến bay sáng và 3 khách sạn, sau đó chọn 2 tour. Số gói là','A trip has 2 morning flights, 3 hotels, then 2 tours. Number of packages:','12',['7','6','18']],['Một mã sản phẩm chọn 1 trong 4 màu và 1 trong 6 kích thước. Có','A product code chooses one of 4 colors and one of 6 sizes.','24',['10','20','12']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Mô hình hóa các bước lựa chọn độc lập bằng quy tắc nhân.',r[3] as string[]);
  }

  // ---- Grade 10 permutations / combinations / Newton ----
  if (tid === 'type-kntt-10-24-01') {
    const n=[5,6,4,7][v], ans=[120,720,24,5040][v]; return mk(`Có bao nhiêu cách sắp xếp ${n} người phân biệt thành một hàng?`,`How many ways can ${n} distinct people be arranged in a row?`,String(ans),'Dùng số hoán vị $P_n=n!$.',[String(ans/n),String(n),String(ans*2)]);
  }
  if (tid === 'type-kntt-10-24-04') {
    const r=[['Chọn và xếp 3 người từ 5 người vào 3 ghế đánh số. Số cách là','Choose and arrange 3 of 5 people into 3 numbered seats.','60',['10','20','120']],['Chọn 3 người từ 6 người vào một nhóm, không xét thứ tự. Số cách là','Choose 3 of 6 people as a group, order irrelevant.','20',['120','18','6']],['Xếp 4 người quanh một dãy ghế thẳng. Số cách là','Arrange 4 people in a row.','24',['4','12','16']],['Chọn đội trưởng và thư kí khác nhau từ 7 người. Số cách là','Choose distinct captain and secretary from 7 people.','42',['21','14','49']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Xác định bài toán xét hay không xét thứ tự rồi dùng hoán vị/chỉnh hợp/tổ hợp.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-24-05') {
    const r=[['Nghiệm nguyên dương của $n!=120$ là','The positive integer solution of $n!=120$ is','5',['4','6','10']],['Nghiệm nguyên $n\\ge2$ của $A_n^2=20$ là','Solve $A_n^2=20$ for integer $n\\ge2$.','5',['4','6','10']],['Nghiệm nguyên $n\\ge2$ của $C_n^2=10$ là','Solve $C_n^2=10$ for integer $n\\ge2$.','5',['4','6','10']],['Nghiệm nguyên $n\\ge1$ của $n!=24$ là','Solve $n!=24$.','4',['3','5','6']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Viết biểu thức hoán vị/chỉnh hợp/tổ hợp theo $n$ rồi giải.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-25-01') {
    const r=[['Khai triển $(x+1)^3$ là','Expand $(x+1)^3$.','$x^3+3x^2+3x+1$',['$x^3+x^2+x+1$','$x^3+3x+1$','$x^3+1$']],['Khai triển $(x-1)^3$ là','Expand $(x-1)^3$.','$x^3-3x^2+3x-1$',['$x^3-3x-1$','$x^3+3x^2+3x+1$','$x^3-1$']],['Khai triển $(2+x)^2$ là','Expand $(2+x)^2$.','$x^2+4x+4$',['$x^2+2x+4$','$x^2+4$','$4x^2+4x+1$']],['Khai triển $(1+2x)^2$ là','Expand $(1+2x)^2$.','$1+4x+4x^2$',['$1+2x+4x^2$','$1+4x^2$','$1+2x+x^2$']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Áp dụng công thức nhị thức Newton.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-25-02') {
    const r=[['Hệ số của $x^2$ trong $(1+x)^5$ bằng','Coefficient of $x^2$ in $(1+x)^5$ is','10',['5','20','25']],['Hệ số của $x^3$ trong $(1+x)^6$ bằng','Coefficient of $x^3$ in $(1+x)^6$ is','20',['15','6','30']],['Hệ số của $x$ trong $(2+x)^4$ bằng','Coefficient of $x$ in $(2+x)^4$ is','32',['8','16','24']],['Hệ số của $x^2$ trong $(1+2x)^4$ bằng','Coefficient of $x^2$ in $(1+2x)^4$ is','24',['6','12','16']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng số hạng tổng quát $C_n^k a^{n-k}b^k$.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-25-04') {
    const r=[['Tổng $C_5^0+C_5^1+\\cdots+C_5^5$ bằng','The sum $C_5^0+C_5^1+\\cdots+C_5^5$ is','32',['16','25','64']],['Tổng $C_4^0-C_4^1+C_4^2-C_4^3+C_4^4$ bằng','The alternating sum for row 4 equals','0',['1','4','16']],['$C_6^2$ bằng','$C_6^2$ equals','15',['12','20','30']],['Đẳng thức đúng là','Which identity is correct?','$C_n^k=C_n^{n-k}$',['$C_n^k=C_k^n$','$C_n^k=n^k$','$C_n^k=k!$']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng hệ số nhị thức và các đẳng thức tổ hợp.',r[3] as string[]);
  }

  // ---- Grade 10 probability foundations / practice ----
  if (tid === 'type-kntt-10-26-01') {
    const r=[['Gieo một xúc xắc. Không gian mẫu có bao nhiêu phần tử?','Roll one die. How many outcomes are in the sample space?','6',['2','3','12']],['Tung một đồng xu một lần. Không gian mẫu là','Flip a coin once. The sample space is','$\\{N,S\\}$',['$\\{N\\}$','$\\{1,2\\}$','$\\varnothing$']],['Rút một thẻ từ các thẻ 1,2,3,4. Biến cố “rút số chẵn” là','Draw one card from 1,2,3,4. The event “even” is','$\\{2,4\\}$',['$\\{1,3\\}$','$\\{2\\}$','$\\{1,2,3,4\\}$']],['Tung hai đồng xu. Số kết quả có thể là','Flip two coins. Number of possible outcomes is','4',['2','3','8']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Liệt kê kết quả của phép thử để xác định không gian mẫu/biến cố.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-26-02') {
    const r=[['Gieo xúc xắc, $A=$ “ra số chẵn”. Biến cố đối $\\overline A$ là','Roll a die, $A=$ “even”. The complement is','Ra số lẻ',['Ra số chẵn','Ra số lớn hơn 3','Ra số 6']],['Tung đồng xu, $A=$ “ngửa”. $\\overline A$ là','Flip a coin, $A=$ “heads”. The complement is','Sấp',['Ngửa','Không xảy ra','Cả ngửa và sấp']],['Rút thẻ 1–5, $A=\\{1,2\\}$. Biến cố đối là','Draw from cards 1–5, $A=\\{1,2\\}$. Complement is','$\\{3,4,5\\}$',['$\\{1,2\\}$','$\\{2,3\\}$','$\\{1,2,3,4,5\\}$']],['Gieo xúc xắc, biến cố “không ra 6” là đối của','On a die, “not 6” is the complement of','Ra 6',['Ra số chẵn','Ra số lẻ','Ra số nhỏ hơn 6']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Biến cố đối gồm tất cả kết quả trong $\\Omega$ không thuộc $A$.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-26-03') {
    const r=[['Gieo xúc xắc cân đối. Xác suất ra số chẵn là','Roll a fair die. Probability of an even number is','$1/2$',['$1/3$','$2/3$','$1/6$']],['Rút một thẻ từ 1 đến 5. Xác suất rút số lớn hơn 3 là','Draw one card from 1 to 5. Probability it is greater than 3:','$2/5$',['$1/5$','$3/5$','$1/2$']],['Tung đồng xu cân đối. Xác suất ngửa là','Flip a fair coin. Probability of heads:','$1/2$',['1','0','$1/4$']],['Chọn ngẫu nhiên một số từ 1,2,3,4. Xác suất chọn số nguyên tố là','Choose uniformly from 1,2,3,4. Probability of prime:','$1/2$',['$1/4$','$3/4$','1']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng $P(A)=n(A)/n(\\Omega)$ với các kết quả đồng khả năng.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-26-04') {
    const r=[['Một biến cố có xác suất $0.001$. Nhận định hợp lí nhất là','An event has probability 0.001. Best description:','Rất khó xảy ra',['Chắc chắn xảy ra','Rất dễ xảy ra','Xác suất bằng 1']],['Biến cố có xác suất $0.98$ được xem là','An event with probability 0.98 is','Rất có khả năng xảy ra',['Không thể','Rất khó xảy ra','Xác suất bằng 0']],['Hai biến cố có xác suất $0.02$ và $0.8$. Biến cố ít khả năng hơn là','Events have probabilities 0.02 and 0.8. Less likely is','Biến cố có xác suất 0.02',['Biến cố có xác suất 0.8','Như nhau','Không so sánh được']],['Một lỗi sản phẩm có xác suất $10^{-5}$. Theo nguyên lí xác suất bé, lỗi này','A defect has probability $10^{-5}$. By the small-probability principle it is','Hiếm gặp',['Chắc chắn','Phổ biến','Có xác suất 1/2']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'So sánh xác suất với 0 và 1 để đánh giá mức độ có khả năng xảy ra.',r[3] as string[]);
  }
  if (tid.startsWith('type-kntt-10-27-')) {
    const subtype=tid.slice(-2);
    if (subtype==='01') { const r=[['Chọn ngẫu nhiên 2 số từ $\\{1,2,3,4\\}$. Xác suất cả hai chẵn là','Choose 2 numbers from $\\{1,2,3,4\\}$. Probability both are even:','$1/6$',['$1/2$','$1/3$','$2/3$']],['Chọn 1 thẻ từ 1–6. Xác suất thẻ chia hết cho 3 là','Choose one card 1–6. Probability divisible by 3:','$1/3$',['$1/6$','$1/2$','$2/3$']],['Tung 2 đồng xu. Xác suất đúng 1 mặt ngửa là','Flip 2 coins. Probability of exactly one head:','$1/2$',['$1/4$','$3/4$','1']],['Gieo xúc xắc. Xác suất số chấm nhỏ hơn 5 là','Roll a die. Probability result is less than 5:','$2/3$',['$1/3$','$1/2$','$5/6$']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Đếm kết quả thuận lợi và toàn bộ kết quả.',r[3] as string[]); }
    if (subtype==='02') { const r=[['Chọn 2 học sinh từ 5. Xác suất một cặp cụ thể được chọn là','Choose 2 of 5 students. Probability a specified pair is chosen:','$1/10$',['$1/5$','$2/5$','$1/20$']],['Xếp ngẫu nhiên 4 người. Xác suất A đứng đầu là','Randomly order 4 people. Probability A is first:','$1/4$',['$1/2$','$1/3$','$1/6$']],['Chọn 3 người từ 6, có 2 nữ. Xác suất chọn cả 2 nữ là','Choose 3 of 6 people, including both of the 2 women. Probability:','$1/5$',['$2/5$','$1/2$','$3/5$']],['Xếp ngẫu nhiên 5 người. Xác suất A và B đứng cạnh nhau là','Randomly order 5 people. Probability A and B are adjacent:','$2/5$',['$1/5$','$1/2$','$4/5$']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng hoán vị/tổ hợp để đếm số trường hợp thuận lợi và tổng số trường hợp.',r[3] as string[]); }
    if (subtype==='03') { const r=[['Gieo hai xúc xắc. Xác suất tổng bằng 7 là','Roll two dice. Probability sum is 7:','$1/6$',['$1/12$','$5/36$','$1/3$']],['Tung 3 đồng xu. Xác suất cả 3 ngửa là','Flip 3 coins. Probability all heads:','$1/8$',['$1/4$','$3/8$','$1/2$']],['Rút một thẻ từ 1–10. Xác suất rút bội của 3 là','Draw one card 1–10. Probability of a multiple of 3:','$3/10$',['$1/10$','$1/3$','$2/5$']],['Gieo xúc xắc. Xác suất ra số nguyên tố là','Roll a die. Probability result is prime:','$1/2$',['$1/3$','$2/3$','$1/6$']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Liệt kê/đếm các kết quả trong mô hình đồng xu, xúc xắc hoặc thẻ.',r[3] as string[]); }
    if (subtype==='04') { const r=[['Xếp ngẫu nhiên 4 người A,B,C,D. Xác suất A và B đứng cạnh nhau là','Randomly order A,B,C,D. Probability A and B are adjacent:','$1/2$',['$1/4$','$1/3$','$2/3$']],['Chia ngẫu nhiên 4 người thành 2 cặp. Xác suất A ghép với B là','Randomly pair 4 people. Probability A is paired with B:','$1/3$',['$1/2$','$1/4$','$2/3$']],['Xếp 5 người quanh hàng ghế thẳng. Xác suất A ở một trong hai đầu là','Randomly seat 5 in a row. Probability A is at an end:','$2/5$',['$1/5$','$1/2$','$4/5$']],['Chọn ngẫu nhiên 2 người từ 6. Xác suất chọn đúng một cặp đã chỉ định là','Choose 2 of 6. Probability selecting one specified pair:','$1/15$',['$1/6$','$2/15$','$1/30$']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Đếm cấu hình sắp xếp/phân nhóm thuận lợi và toàn bộ.',r[3] as string[]); }
    if (subtype==='05') { const r=[['Một hộp có 3 bi đỏ, 2 bi xanh. Rút ngẫu nhiên 1 bi. Xác suất đỏ là','A box has 3 red and 2 blue balls. Draw one. Probability red:','$3/5$',['$2/5$','$1/2$','$1/5$']],['Một lớp có 12 nữ, 18 nam. Chọn ngẫu nhiên 1 học sinh. Xác suất chọn nữ là','A class has 12 girls and 18 boys. Choose one. Probability girl:','$2/5$',['$3/5$','$1/3$','$1/2$']],['Một lô có 2 sản phẩm lỗi trong 20. Chọn ngẫu nhiên 1 sản phẩm. Xác suất lỗi là','A lot has 2 defective out of 20. Choose one. Probability defective:','$1/10$',['$1/20$','$1/5$','$9/10$']],['Một vòng quay có 8 phần bằng nhau, 3 phần trúng thưởng. Xác suất trúng là','A spinner has 8 equal sectors, 3 winning. Probability win:','$3/8$',['$5/8$','$1/3$','$3/5$']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Mô hình hóa tình huống thực tế bằng các kết quả đồng khả năng.',r[3] as string[]); }
  }

  // ---- Grade 11 trigonometric transformations ----
  if (tid === 'type-kntt-11-02-02') {
    const r=[['$\\sin2x$ bằng','$\\sin2x$ equals','$2\\sin x\\cos x$',['$\\sin^2x-\\cos^2x$','$2\\sin x$','$2\\cos x$']],['$\\cos2x$ bằng','$\\cos2x$ equals','$\\cos^2x-\\sin^2x$',['$2\\sin x\\cos x$','$\\sin^2x+\\cos^2x$','$2\\cos x$']],['$\\sin^2x$ bằng','$\\sin^2x$ equals','$\\dfrac{1-\\cos2x}{2}$',['$\\dfrac{1+\\cos2x}{2}$','$1-\\cos2x$','$\\cos2x/2$']],['$\\cos^2x$ bằng','$\\cos^2x$ equals','$\\dfrac{1+\\cos2x}{2}$',['$\\dfrac{1-\\cos2x}{2}$','$1+\\sin2x$','$\\sin2x/2$']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng công thức nhân đôi và hạ bậc.',r[3] as string[]);
  }
  if (tid === 'type-kntt-11-02-03') {
    const r=[['$\\sin a+\\sin b$ bằng','$\\sin a+\\sin b$ equals','$2\\sin\\dfrac{a+b}{2}\\cos\\dfrac{a-b}{2}$',['$2\\cos\\dfrac{a+b}{2}\\sin\\dfrac{a-b}{2}$','$\\sin(a+b)$','$2\\sin a\\sin b$']],['$\\cos a+\\cos b$ bằng','$\\cos a+\\cos b$ equals','$2\\cos\\dfrac{a+b}{2}\\cos\\dfrac{a-b}{2}$',['$2\\sin\\dfrac{a+b}{2}\\sin\\dfrac{a-b}{2}$','$\\cos(a+b)$','$2\\cos a\\cos b$']],['$2\\sin a\\cos b$ bằng','$2\\sin a\\cos b$ equals','$\\sin(a+b)+\\sin(a-b)$',['$\\cos(a+b)+\\cos(a-b)$','$\\sin(a+b)-\\sin(a-b)$','$2\\sin(a+b)$']],['$2\\cos a\\cos b$ bằng','$2\\cos a\\cos b$ equals','$\\cos(a+b)+\\cos(a-b)$',['$\\sin(a+b)+\\sin(a-b)$','$\\cos(a+b)-\\cos(a-b)$','$2\\cos(a+b)$']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng công thức biến đổi tổng–tích và tích–tổng.',r[3] as string[]);
  }
  if (tid === 'type-kntt-11-02-04') {
    const r=[['Đẳng thức nào đúng với mọi $x$?','Which identity is true for all $x$?','$1-\\cos2x=2\\sin^2x$',['$1-\\cos2x=2\\cos^2x$','$\\sin2x=\\sin x+\\cos x$','$\\cos2x=1$']],['Đẳng thức nào đúng?','Which identity is correct?','$\\sin(x+y)=\\sin x\\cos y+\\cos x\\sin y$',['$\\sin(x+y)=\\sin x+\\sin y$','$\\sin(x+y)=\\cos x\\cos y$','$\\sin(x+y)=\\sin x\\cos y-\\cos x\\sin y$']],['Đẳng thức rút gọn đúng là','Which simplified identity is correct?','$\\sin^2x+\\cos^2x=1$',['$\\sin^2x-\\cos^2x=1$','$\\tan x+\\cot x=1$','$\\sin x+\\cos x=1$']],['Đẳng thức nào suy ra từ công thức nhân đôi?','Which identity follows from double-angle formulas?','$1+\\cos2x=2\\cos^2x$',['$1+\\cos2x=2\\sin^2x$','$\\cos2x=2\\sin x\\cos x$','$1-\\sin2x=2\\cos^2x$']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Biến đổi một vế bằng các công thức lượng giác chuẩn để đối chiếu vế kia.',r[3] as string[]);
  }

  // ---- Grade 11 grouped data ----
  if (tid === 'type-kntt-11-08-01') {
    const rows=[
      {data:'12,15,17,21,23,28',cls:['[10;20)','[20;30)'],ans:'3 và 3',w:['2 và 4','4 và 2','1 và 5']},
      {data:'5,8,12,14,18,22',cls:['[0;10)','[10;20)','[20;30)'],ans:'2, 3, 1',w:['3, 2, 1','2, 2, 2','1, 3, 2']},
      {data:'31,35,39,42,46',cls:['[30;40)','[40;50)'],ans:'3 và 2',w:['2 và 3','4 và 1','1 và 4']},
      {data:'2,4,7,11,13,19',cls:['[0;10)','[10;20)'],ans:'3 và 3',w:['4 và 2','2 và 4','1 và 5']},
    ][v];
    const table=`$$\\begin{array}{c|${'c'.repeat(rows.cls.length)}}\\text{Khoảng lớp}&${rows.cls.join('&')}\\\\\\hline\\text{Tần số}&${rows.cls.map(()=>'?').join('&')}\\end{array}$$`;
    return mk(`Cho mẫu ${rows.data}. Ghép mẫu theo bảng sau: ${table} Tần số các nhóm lần lượt là`,`Given sample ${rows.data}. Complete the grouped-frequency table: ${table} The class frequencies are`,rows.ans,'Đếm số quan sát thuộc từng khoảng lớp.',rows.w);
  }
  if (tid === 'type-kntt-11-08-02') {
    const rows=[
      {cls:['[10;20)','[20;30)','[30;40)'],f:[4,7,5],target:'[20;30)',ans:'25',w:['20','30','10']},
      {cls:['[0;10)','[10;20)','[20;30)'],f:[2,6,3],target:'[10;20)',ans:'15',w:['10','20','5']},
      {cls:['[5;15)','[15;25)','[25;35)'],f:[3,4,2],target:'[5;15)',ans:'10',w:['5','15','20']},
      {cls:['[20;30)','[30;50)','[50;70)'],f:[2,5,3],target:'[30;50)',ans:'40',w:['30','50','20']},
    ][v];
    const table=`$$\\begin{array}{c|ccc}\\text{Khoảng lớp}&${rows.cls.join('&')}\\\\\\hline\\text{Tần số}&${rows.f.join('&')}\\end{array}$$`;
    return mk(`Cho bảng tần số ghép nhóm ${table} Giá trị đại diện của nhóm $${rows.target}$ bằng`,`Given the grouped-frequency table ${table} The class midpoint of $${rows.target}$ is`,rows.ans,'Giá trị đại diện là trung điểm hai đầu mút của khoảng lớp.',rows.w);
  }
  if (tid === 'type-kntt-11-08-03') {
    const rows=[
      {table:'$$\\begin{array}{c|ccc}\\text{Khoảng lớp}&[0;10)&[10;20)&[20;30)\\\\\\hline\\text{Tần số}&2&5&3\\end{array}$$',vi:'Từ bảng ghép nhóm, thông tin nào không thể khôi phục chính xác?',en:'From the grouped table, which information cannot be reconstructed exactly?',ans:'Giá trị chính xác của từng quan sát',w:['Tổng tần số','Các khoảng lớp','Tần số mỗi nhóm']},
      {table:'$$\\begin{array}{c|ccc}\\text{Khoảng lớp}&[0;5)&[5;10)&[10;15)\\\\\\hline\\text{Tần số}&4&6&2\\end{array}$$',vi:'Nếu ghép lại cùng dữ liệu bằng lớp rộng 10 thay vì 5, nhận định hợp lí là',en:'If the same data are regrouped with class width 10 instead of 5, a reasonable statement is',ans:'Bảng mới thường mất nhiều chi tiết hơn',w:['Bảng mới luôn giữ nhiều chi tiết hơn','Hai bảng luôn giống nhau','Tần số tổng sẽ thay đổi']},
      {table:'$$\\begin{array}{c|ccc}\\text{Khoảng lớp}&[10;20)&[20;30)&[30;40)\\\\\\hline\\text{Tần số}&3&8&4\\end{array}$$',vi:'Khi so sánh bảng này với một bảng dùng ranh giới lớp khác, cần chú ý nhất',en:'When comparing this table with one using different class boundaries, pay special attention to',ans:'Ranh giới và độ rộng lớp',w:['Chỉ số hàng','Tên biến','Màu của bảng']},
      {table:'$$\\begin{array}{c|cc}\\text{Khoảng lớp}&[0;20)&[20;40)\\\\\\hline\\text{Tần số}&7&5\\end{array}$$',vi:'Ý nghĩa chính của việc ghép nhóm trong bảng là',en:'The main purpose of grouping in this table is',ans:'Tóm tắt phân bố nhưng chấp nhận mất một phần chi tiết',w:['Giữ nguyên mọi giá trị gốc','Làm tăng số quan sát','Loại bỏ hoàn toàn sai số']},
    ][v];
    return mk(`${rows.table} ${rows.vi}`,`${rows.table} ${rows.en}`,rows.ans,'Phân tích sự đánh đổi giữa khả năng tóm tắt và mức độ mất chi tiết khi ghép nhóm.',rows.w);
  }

  // ---- Grade 11 spatial geometry: synthetic geometry only, no Oxyz ----
  if (/^type-kntt-11-(10|11|12|13|14|22|23|25|26)-/.test(tid)) {
    const code=tid.slice(13); // e.g. 10-01
    const rows: Record<string, Array<[string,string,string,string[]]>> = {
      '10-01':[
        ['Trong hình chóp $S.ABCD$, điểm $S$ thuộc mặt phẳng nào sau đây?','In pyramid $S.ABCD$, point $S$ lies in which plane?','$(SAB)$',['$(ABCD)$','$(ABC)$','$(BCD)$']],
        ['Trong tứ diện $ABCD$, đường thẳng $AB$ nằm trong mặt phẳng','In tetrahedron $ABCD$, line $AB$ lies in plane','$(ABC)$',['$(BCD)$','$(ACD)$','Không có mặt phẳng nào']],
        ['Nếu $A,B,C$ không thẳng hàng thì có bao nhiêu mặt phẳng đi qua cả ba điểm?','If non-collinear $A,B,C$ are given, how many planes pass through them?','1',['0','2','Vô số']],
        ['Hai đường thẳng cắt nhau xác định','Two intersecting lines determine','Một mặt phẳng',['Không gian duy nhất','Hai mặt phẳng','Không xác định']]],
      '10-02':[
        ['Trong hình chóp $S.ABCD$, hai mặt phẳng $(SAB)$ và $(SBC)$ có giao tuyến','In pyramid $S.ABCD$, planes $(SAB)$ and $(SBC)$ intersect in','$SB$',['$SA$','$SC$','$AB$']],
        ['Trong tứ diện $ABCD$, $(ABC)\\cap(ABD)$ là','In tetrahedron $ABCD$, $(ABC)\\cap(ABD)$ is','$AB$',['$AC$','$CD$','$BD$']],
        ['Đường thẳng $d$ cắt mặt phẳng $(P)$ tại đúng một điểm $M$. Khi đó','Line $d$ intersects plane $(P)$ at exactly one point $M$. Then','$M=d\\cap(P)$',['$d\\subset(P)$','$d\\parallel(P)$','$d$ không có điểm chung với $(P)$']],
        ['Trong hình chóp $S.ABCD$, giao điểm của $AC$ và $BD$ (nếu có) thuộc','In pyramid $S.ABCD$, the intersection of $AC$ and $BD$ lies in','$(ABCD)$',['$(SAB)$ duy nhất','$(SCD)$ duy nhất','Không thuộc đáy']]],
      '10-03':[
        ['Mặt phẳng qua ba điểm trên các cạnh $SA,SB,SC$ của tứ diện $SABC$ cắt khối theo một','A plane through points on $SA,SB,SC$ cuts tetrahedron $SABC$ in a','Tam giác',['Hình tròn','Ngũ giác','Đường thẳng']],
        ['Thiết diện của hình chóp bởi một mặt phẳng là','A section of a pyramid by a plane is','Đa giác có các đỉnh trên các cạnh của hình chóp',['Luôn là tam giác','Luôn là hình vuông','Một đường tròn']],
        ['Mặt phẳng cắt bốn cạnh bên thích hợp của một hình chóp tứ giác có thể tạo','A plane cutting four suitable edges of a quadrilateral pyramid can form','Tứ giác',['Chỉ tam giác','Chỉ ngũ giác','Đường tròn']],
        ['Khi tìm thiết diện, bước quan trọng là xác định','When finding a cross-section, an important step is to determine','Các giao điểm của mặt phẳng cắt với các cạnh/mặt của khối',['Tọa độ Oxyz bắt buộc','Đạo hàm','Xác suất']]],
      '11-01':[
        ['Trong lăng trụ $ABC.A\\prime B\\prime C\\prime$, quan hệ $AB$ và $A\\prime B\\prime$ là','In prism $ABC.A\\prime B\\prime C\\prime$, $AB$ and $A\\prime B\\prime$ are','Song song',['Cắt nhau','Chéo nhau','Vuông góc']],
        ['Trong hình hộp $ABCD.A\\prime B\\prime C\\prime D\\prime$, $AD$ song song với','In a box, $AD$ is parallel to','$BC$',['$AB$','$AC$','$BD$']],
        ['Nếu hai đường thẳng cùng song song với một đường thẳng thứ ba thì chúng','If two lines are parallel to a third line, then they are','Song song hoặc trùng nhau',['Luôn vuông góc','Luôn chéo nhau','Luôn cắt nhau']],
        ['Để chứng minh hai đường thẳng trong không gian song song, có thể chứng minh chúng','To prove two spatial lines parallel, one can show they are','Đồng phẳng và không có điểm chung',['Không đồng phẳng','Cùng vuông góc một mặt phẳng là đủ trong mọi trường hợp','Có một điểm chung']]],
      '11-02':[
        ['Qua điểm $M$ không thuộc đường thẳng $d$, có bao nhiêu đường thẳng qua $M$ và song song với $d$?','Through $M$ not on line $d$, how many lines through $M$ parallel to $d$?','1',['0','2','Vô số']],
        ['Trong lăng trụ, qua $A\\prime$ đường thẳng song song với $AB$ là','In a prism, through $A\\prime$ the line parallel to $AB$ is','$A\\prime B\\prime$',['$AA\\prime$','$A\\prime C$','$AB$']],
        ['Nếu $d\\parallel d\\prime$ và $M\\in d\\prime$ thì đường qua $M$ song song $d$ có thể là','If $d\\parallel d\\prime$ and $M\\in d\\prime$, a line through $M$ parallel to $d$ can be','$d\\prime$',['Một đường cắt $d\\prime$','Mọi đường qua $M$','Không tồn tại']],
        ['Tiên đề song song trong không gian cho một điểm ngoài đường thẳng bảo đảm','The parallel axiom for a point outside a line guarantees','Duy nhất một đường thẳng song song',['Hai đường','Vô số đường','Không đường']]],
      '11-03':[
        ['Hai mặt phẳng cắt nhau theo $a$. Nếu $b$ nằm trong mặt phẳng thứ nhất và $b\\parallel a$, thì khi $b$ không thuộc mặt phẳng thứ hai, $b$','Two planes intersect in $a$. If $b$ lies in the first and $b\\parallel a$, then if $b$ is not in the second plane, $b$ is','Song song với mặt phẳng thứ hai',['Vuông góc mặt phẳng thứ hai','Cắt $a$','Trùng $a$']],
        ['Ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt. Nếu hai giao tuyến song song thì giao tuyến còn lại','Three planes pairwise intersect in distinct lines. If two intersection lines are parallel, the third is','Song song với chúng',['Vuông góc với chúng','Cắt cả hai','Không tồn tại']],
        ['Trong lăng trụ, các cạnh bên','In a prism, lateral edges are','Đôi một song song',['Đôi một vuông góc','Đồng quy','Không cùng phương']],
        ['Quan hệ song song trong không gian thường được suy ra bằng','Parallel relations in space are often deduced using','Các mặt phẳng chứa và giao tuyến',['Đạo hàm','Tọa độ bắt buộc','Xác suất']]],
      '12-01':[
        ['Nếu $d\\parallel a$, với $d$ không thuộc $(P)$ và $a\\subset(P)$ thì','If $d\\parallel a$, $d$ is not in $(P)$, and $a\\subset(P)$, then','$d\\parallel(P)$',['$d\\perp(P)$','$d\\subset(P)$','$d$ cắt $(P)$']],
        ['Trong lăng trụ, cạnh bên $AA\\prime$ song song với mặt phẳng','In a prism, lateral edge $AA\\prime$ is parallel to plane','$(BCC\\prime B\\prime)$',['$(ABB\\prime A\\prime)$ vì nằm trong đó','$(ABC)$','$AA\\prime B$']],
        ['Để chứng minh $d\\parallel(P)$, một dấu hiệu là $d$ song song với','To prove $d\\parallel(P)$, a criterion is that $d$ is parallel to','Một đường thẳng nằm trong $(P)$ và $d$ không thuộc $(P)$',['Mọi đường trong $(P)$','Pháp tuyến của $(P)$','Một điểm của $(P)$']],
        ['Nếu $d\\parallel(P)$ thì số điểm chung của $d$ và $(P)$ là','If $d\\parallel(P)$, number of common points is','0',['1','2','Vô số']]],
      '12-02':[
        ['Nếu $(P)$ chứa $d$ và $d\\parallel(Q)$, giao tuyến của $(P)$ và $(Q)$ (khi có) sẽ','If $(P)$ contains $d$ and $d\\parallel(Q)$, the intersection of $(P),(Q)$ (when it exists) will','Song song với $d$',['Vuông góc $d$','Trùng $d$ bắt buộc','Cắt $d$']],
        ['Hai mặt phẳng cắt nhau theo $a$. Một đường $d$ trong mặt phẳng thứ nhất và song song mặt phẳng thứ hai thì $d$','Two planes meet in $a$. A line $d$ in the first parallel to the second plane is','Song song với $a$',['Vuông góc $a$','Cắt $a$','Trùng mặt phẳng thứ hai']],
        ['Khi tìm giao tuyến dựa vào quan hệ song song, ta cần','When finding an intersection line via parallelism, we need','Một điểm chung và phương của giao tuyến',['Đạo hàm','Bán kính','Trung bình mẫu']],
        ['Trong hình chóp, nếu một đường trong mặt bên song song đáy thì nó thường giúp xác định','In a pyramid, a line in a lateral face parallel to the base helps determine','Phương của giao tuyến với mặt phẳng đáy song song',['Tâm mặt cầu','Đạo hàm','Xác suất']]],
      '12-03':[
        ['Trong tam giác $SAB$, nếu $M,N$ là trung điểm $SA,SB$ thì $MN$ song song với','In triangle $SAB$, if $M,N$ are midpoints of $SA,SB$, then $MN$ is parallel to','$AB$',['$SA$','$SB$','$MN$ không song song cạnh nào']],
        ['Trong hình chóp, mặt phẳng qua các trung điểm của ba cạnh bên gần đỉnh tạo thiết diện','In a pyramid, a plane through midpoints of three lateral edges creates a section','Đồng dạng với đáy theo tỉ số $1/2$',['Bằng đáy','Vuông góc mọi cạnh','Không xác định']],
        ['Nếu hai tam giác đồng dạng theo tỉ số $k$, tỉ số các cạnh tương ứng là','If two triangles are similar with scale factor $k$, corresponding side ratio is','$k$',['$k^2$','$k^3$','$1$']],
        ['Quan hệ song song trong hình chóp thường dùng định lí','Parallel relations in a pyramid often use','Đường trung bình của tam giác',['Pythagore bắt buộc','Bayes','Đạo hàm']]],
      '13-01':[
        ['Nếu mặt phẳng $(P)$ chứa hai đường thẳng cắt nhau cùng song song với hai đường thẳng cắt nhau của $(Q)$ thì','If $(P)$ contains two intersecting lines respectively parallel to two intersecting lines in $(Q)$, then','$(P)\\parallel(Q)$',['$(P)\\perp(Q)$','$(P)=(Q)$ bắt buộc','$(P)$ cắt $(Q)$']],
        ['Hai mặt đáy của một lăng trụ','The two base planes of a prism are','Song song',['Vuông góc','Cắt nhau','Trùng nhau']],
        ['Hai mặt đối diện của hình hộp','Opposite faces of a box are','Song song',['Luôn vuông góc','Cắt nhau','Không đồng phẳng']],
        ['Để chứng minh hai mặt phẳng song song, có thể chứng minh','To prove two planes parallel, one may prove','Hai cặp đường thẳng cắt nhau tương ứng song song',['Một điểm chung','Một đường chung','Hai pháp tuyến vuông góc']]],
      '13-02':[
        ['Hai mặt phẳng song song bị mặt phẳng thứ ba cắt thì hai giao tuyến','Two parallel planes cut by a third plane have intersection lines that are','Song song',['Vuông góc','Trùng nhau luôn','Chéo nhau']],
        ['$(P)\\parallel(Q)$, mặt phẳng $(R)$ cắt chúng theo $a,b$. Khi đó','$(P)\\parallel(Q)$ and $(R)$ cuts them along $a,b$. Then','$a\\parallel b$',['$a\\perp b$','$a=b$','$a,b$ chéo nhau']],
        ['Trong lăng trụ, các giao tuyến của một mặt phẳng bên với hai đáy','In a prism, intersections of a lateral plane with the two bases are','Song song',['Vuông góc','Trùng','Không có quan hệ']],
        ['Định lí giao tuyến của hai mặt phẳng song song được dùng để','The intersection theorem for parallel planes is used to','Suy ra các đường thẳng song song',['Tính đạo hàm','Tính xác suất','Tính trung vị']]],
      '13-03':[
        ['Trong lăng trụ, thiết diện bởi mặt phẳng song song với đáy là','In a prism, a section by a plane parallel to the base is','Đa giác bằng với đáy',['Luôn tam giác','Luôn nhỏ hơn một nửa','Đường tròn']],
        ['Trong hình hộp, hai mặt đối diện','In a box, opposite faces are','Song song và bằng nhau',['Vuông góc','Cắt nhau','Không đồng dạng']],
        ['Mặt phẳng cắt các cạnh bên của lăng trụ và song song đáy tạo','A plane cutting lateral edges of a prism parallel to the base creates','Thiết diện song song với hai đáy',['Thiết diện vuông góc mọi cạnh','Một điểm','Một đường']],
        ['Quan hệ hai mặt phẳng song song trong hình hộp giúp suy ra','Parallel opposite faces of a box imply','Các cạnh tương ứng song song',['Mọi đường vuông góc','Mọi đường đồng quy','Không có quan hệ']]],
      '14-01':[
        ['Qua phép chiếu song song, ảnh của một đường thẳng không song song phương chiếu là','Under parallel projection, the image of a line not parallel to projection direction is','Một đường thẳng',['Một đường tròn','Một mặt phẳng','Luôn một điểm']],
        ['Phép chiếu song song biến ba điểm thẳng hàng thành','Parallel projection sends three collinear points to','Ba điểm thẳng hàng (hoặc trùng nhau)',['Ba điểm tạo tam giác','Một đường tròn','Ba điểm bất kì']],
        ['Ảnh của đoạn thẳng qua phép chiếu song song nằm trên','The image of a segment under parallel projection lies on','Ảnh của đường thẳng chứa đoạn',['Một đường tròn','Mặt cầu','Đường vuông góc bắt buộc']],
        ['Phép chiếu song song bảo toàn','Parallel projection preserves','Tính thẳng hàng',['Độ dài mọi đoạn','Góc mọi cặp đường','Diện tích mọi hình']]],
      '14-03':[
        ['Khi biểu diễn hình hộp trên mặt phẳng bằng phép chiếu song song, các cạnh song song trong không gian thường được vẽ','When drawing a box by parallel projection, spatial parallel edges are usually drawn','Song song',['Vuông góc','Cắt nhau','Cong']],
        ['Phép chiếu song song dùng để','Parallel projection is used to','Biểu diễn hình không gian trên mặt phẳng',['Tính xác suất','Tìm đạo hàm','Giải phương trình mũ']],
        ['Một cặp đường song song không cùng phương chiếu sau phép chiếu song song thường','A pair of parallel lines not along projection direction usually','Vẫn song song',['Luôn vuông góc','Luôn cắt nhau','Thành đường tròn']],
        ['Hình biểu diễn qua chiếu song song không nhất thiết bảo toàn','A parallel-projection drawing need not preserve','Góc và độ dài',['Tính thẳng hàng','Tính song song phù hợp','Quan hệ liên thuộc']]],
      '22-02':[
        ['Trong hình chóp $S.ABC$ có $SA\\perp(ABC)$. Khi đó $SA$ vuông góc với','In pyramid $S.ABC$, $SA\\perp(ABC)$. Then $SA$ is perpendicular to','$AB$',['$SB$ luôn','$SC$ luôn','$BC$ không xác định']],
        ['Nếu hai đường có vectơ chỉ phương vuông góc và chúng cắt nhau thì','If two intersecting lines have perpendicular direction vectors, they are','Vuông góc',['Song song','Chéo nhau','Trùng']],
        ['Trong hình lập phương, hai cạnh kề nhau tại một đỉnh','In a cube, adjacent edges at a vertex are','Vuông góc',['Song song','Chéo nhau','Trùng nhau']],
        ['Để chứng minh $a\\perp b$, có thể chứng minh góc giữa chúng bằng','To prove $a\\perp b$, show their angle is','$90^\\circ$',['$0^\\circ$','$45^\\circ$','$180^\\circ$']]],
      '22-03':[
        ['Nếu $\\vec u\\cdot\\vec v=0$ và hai vectơ khác $0$, thì hai phương tương ứng','If nonzero $\\vec u\\cdot\\vec v=0$, their directions are','Vuông góc',['Song song','Trùng','Không xác định']],
        ['Trong hình hộp chữ nhật, đường chéo một mặt và cạnh còn lại vuông góc mặt đó có quan hệ','In a rectangular box, a face diagonal and an edge perpendicular to that face are','Vuông góc',['Song song','Trùng nhau','Không xác định']],
        ['Muốn dùng vectơ chứng minh hai đường vuông góc, ta tính','To prove perpendicularity using vectors, compute','Tích vô hướng',['Tổng tọa độ','Trung vị','Xác suất']],
        ['Nếu một đường vuông góc với mặt phẳng chứa đường kia thì hai đường','If a line is perpendicular to a plane containing the other line, the lines are','Vuông góc',['Song song','Trùng','Chéo bắt buộc']]],
      '23-01':[
        ['Để chứng minh $d\\perp(P)$, đủ chứng minh $d$ vuông góc với','To prove $d\\perp(P)$, it suffices to show $d$ is perpendicular to','Hai đường thẳng cắt nhau nằm trong $(P)$',['Một đường bất kì trong $(P)$','Một điểm trong $(P)$','Pháp tuyến khác']],
        ['Trong hình chóp $S.ABC$, nếu $SA\\perp AB$ và $SA\\perp AC$ với $AB,AC$ cắt nhau thì','$SA\\perp AB$ and $SA\\perp AC$ in plane $(ABC)$ imply','$SA\\perp(ABC)$',['$SA\\parallel(ABC)$','$SA\\subset(ABC)$','$AB\\perp AC$']],
        ['Một đường thẳng vuông góc với hai đường cắt nhau của mặt phẳng thì','A line perpendicular to two intersecting lines of a plane is','Vuông góc với mặt phẳng',['Song song mặt phẳng','Nằm trong mặt phẳng','Chéo với mặt phẳng']],
        ['Trong hình lập phương, cạnh $AA\\prime$ vuông góc với mặt phẳng','In a cube, edge $AA\\prime$ is perpendicular to plane','$(ABCD)$',['$(ABB\\prime A\\prime)$','$(ADD\\prime A\\prime)$','$(AA\\prime B)$']]],
      '23-02':[
        ['Nếu $d\\perp(P)$ thì $d$ vuông góc với mọi đường thẳng trong $(P)$','If $d\\perp(P)$, then $d$ is perpendicular to every line in $(P)$','đi qua chân đường vuông góc',['Không cần đi qua chân','Song song $d$','Bất kì trong không gian']],
        ['Nếu $d\\perp(P)$ và $a\\subset(P)$ đi qua $H=d\\cap(P)$ thì','If $d\\perp(P)$ and $a\\subset(P)$ through $H=d\\cap(P)$, then','$d\\perp a$',['$d\\parallel a$','$d=a$','$d$ chéo $a$']],
        ['Hai đường thẳng cùng vuông góc với một mặt phẳng thì','Two lines perpendicular to the same plane are','Song song',['Vuông góc','Chéo nhau','Cắt nhau bắt buộc']],
        ['Nếu một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng khác thì hai mặt phẳng','If a plane contains a line perpendicular to another plane, the two planes are','Vuông góc',['Song song','Trùng nhau','Không có quan hệ']]],
      '23-03':[
        ['Nếu $AH\\perp(P)$ tại $H$, thì hình chiếu vuông góc của $A$ lên $(P)$ là','If $AH\\perp(P)$ at $H$, the orthogonal projection of $A$ onto $(P)$ is','$H$',['$A$','Một đường qua $H$','Không xác định']],
        ['Trong hình chóp $S.ABC$ với $SA\\perp(ABC)$, hình chiếu của $S$ lên đáy là','In pyramid $S.ABC$ with $SA\\perp(ABC)$, projection of $S$ onto base is','$A$',['$B$','$C$','Trọng tâm']],
        ['Độ dài đoạn vuông góc từ điểm đến mặt phẳng chính là','The length of the perpendicular segment from a point to a plane is','Khoảng cách từ điểm đến mặt phẳng',['Khoảng cách giữa hai điểm bất kì','Chu vi','Diện tích']],
        ['Hình chiếu vuông góc của một điểm thuộc mặt phẳng lên chính mặt phẳng đó là','Orthogonal projection of a point already on a plane onto that plane is','Chính điểm đó',['Gốc tọa độ','Một đường','Không tồn tại']]],
      '25-01':[
        ['Nếu mặt phẳng $(P)$ chứa đường thẳng $d\\perp(Q)$ thì','If plane $(P)$ contains a line $d\\perp(Q)$, then','$(P)\\perp(Q)$',['$(P)\\parallel(Q)$','$(P)=(Q)$','Không kết luận']],
        ['Hai mặt phẳng có góc nhị diện $90^\\circ$ thì','Two planes with dihedral angle $90^\\circ$ are','Vuông góc',['Song song','Trùng nhau','Chéo nhau']],
        ['Trong hình lập phương, hai mặt kề nhau','Adjacent faces of a cube are','Vuông góc',['Song song','Trùng nhau','Không xác định']],
        ['Một dấu hiệu hai mặt phẳng vuông góc là một mặt phẳng chứa','A criterion for perpendicular planes is one plane contains','Một đường thẳng vuông góc mặt phẳng kia',['Một đường song song mặt kia','Một điểm của mặt kia','Hai đường song song']]],
      '25-03':[
        ['Trong hình chóp $S.ABC$ với $SA\\perp(ABC)$, mặt phẳng $(SAB)$ và $(ABC)$','In pyramid $S.ABC$ with $SA\\perp(ABC)$, planes $(SAB)$ and $(ABC)$ are','Vuông góc',['Song song','Trùng','Không xác định']],
        ['Trong lăng trụ đứng, mặt bên và mặt đáy','In a right prism, a lateral face and a base are','Vuông góc',['Song song','Trùng','Không có quan hệ']],
        ['Trong hình hộp chữ nhật, hai mặt kề nhau','In a rectangular box, adjacent faces are','Vuông góc',['Song song','Đồng phẳng','Chéo nhau']],
        ['Quan hệ mặt phẳng vuông góc trong hình chóp thường được chứng minh bằng','Perpendicular planes in pyramids are often proved using','Đường thẳng vuông góc mặt phẳng',['Xác suất','Đạo hàm','Trung vị']]],
      '26-02':[
        ['Nếu $d\\parallel(P)$ và $A\\in d$ thì $d(d,(P))$ bằng','If $d\\parallel(P)$ and $A\\in d$, then distance from $d$ to $(P)$ equals','$d(A,(P))$',['0','Độ dài $d$','Không xác định']],
        ['Hai mặt phẳng song song cách nhau 5 cm. Khoảng cách giữa chúng bằng','Two parallel planes are 5 cm apart. Their distance is','5 cm',['0','10 cm','25 cm']],
        ['Đường thẳng nằm trong mặt phẳng song song với $(Q)$ và cách $(Q)$ 3 m. Khoảng cách đường–mặt là','A line lies in a plane parallel to $(Q)$ and that plane is 3 m from $(Q)$. Distance line–plane is','3 m',['0','6 m','9 m']],
        ['Khoảng cách giữa hai mặt phẳng song song bằng độ dài','Distance between parallel planes equals length of','Một đoạn vuông góc chung',['Một đoạn bất kì','Giao tuyến','Đường chéo']]],
      '26-03':[
        ['Hai đường thẳng chéo nhau có một đoạn vuông góc chung dài 4 cm. Khoảng cách giữa chúng là','Two skew lines have a common perpendicular of length 4 cm. Their distance is','4 cm',['2 cm','8 cm','16 cm']],
        ['Khoảng cách giữa hai đường chéo nhau được xác định bởi','Distance between skew lines is determined by','Độ dài đoạn vuông góc chung',['Góc giữa chúng','Tổng độ dài','Một giao điểm']],
        ['Trong hình hộp chữ nhật, khoảng cách giữa hai cạnh chéo nhau có thể tính bằng','In a rectangular box, distance between suitable skew edges can be computed via','Một đoạn vuông góc chung',['Chu vi đáy','Đạo hàm','Xác suất']],
        ['Một đoạn $MN$ vuông góc với cả hai đường thẳng chéo nhau $a,b$, với $M\\in a,N\\in b$. Khi $MN$ là đoạn vuông góc chung, khoảng cách giữa $a,b$ bằng','A segment $MN$ is perpendicular to skew lines $a,b$, with $M\\in a,N\\in b$. If it is their common perpendicular, the distance equals','$MN$',['$2MN$','$MN/2$','0']]],
      '26-04':[
        ['Hai tầng sàn song song cách nhau 3.2 m. Khoảng cách giữa hai mặt phẳng sàn là','Two parallel floors are 3.2 m apart. Plane distance is','3.2 m',['1.6 m','6.4 m','10.24 m']],
        ['Một dây cáp vuông góc nối hai mặt phẳng song song dài 12 m. Khoảng cách hai mặt phẳng là','A perpendicular cable connecting parallel planes is 12 m. Their distance is','12 m',['6 m','24 m','144 m']],
        ['Khoảng cách ngắn nhất từ điểm camera đến tường phẳng được đo theo','Shortest distance from a camera point to a wall plane is along','Đường vuông góc với tường',['Mọi đường xiên','Đường song song tường','Chu vi tường']],
        ['Một cột thẳng đứng vuông góc mặt đất dài 8 m. Khoảng cách từ đỉnh cột đến mặt đất là','A vertical pole perpendicular to ground is 8 m long. Distance from top to ground is','8 m',['4 m','16 m','64 m']]],
    };
    const arr=rows[code]; if(arr){const r=arr[v]; return mk(r[0],r[1],r[2],'Áp dụng đúng định nghĩa và định lí hình học không gian của bài học.',r[3]);}
  }

  // ---- Grade 11 limits ----
  if (tid === 'type-kntt-11-16-01') {
    const r=[['$\\lim_{x\\to2}(x^2+1)$ bằng','$\\lim_{x\\to2}(x^2+1)$ equals','5',['3','4','6']],['$\\lim_{x\\to1}\\dfrac{x+1}{x+2}$ bằng','Find $\\lim_{x\\to1}\\dfrac{x+1}{x+2}$.','$2/3$',['$1/2$','1','$3/2$']],['$\\lim_{x\\to0}(3x+4)$ bằng','Find $\\lim_{x\\to0}(3x+4)$.','4',['0','3','7']],['$\\lim_{x\\to-1}(x^2-2x)$ bằng','Find $\\lim_{x\\to-1}(x^2-2x)$.','3',['-1','1','-3']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Hàm liên tục tại điểm xét nên thay trực tiếp.',r[3] as string[]);
  }
  if (tid === 'type-kntt-11-16-02') {
    const r=[['$\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$ bằng','Find $\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$.','4',['2','0','Không tồn tại']],['$\\lim_{x\\to1}\\dfrac{x^2-1}{x-1}$ bằng','Find $\\lim_{x\\to1}\\dfrac{x^2-1}{x-1}$.','2',['1','0','Không tồn tại']],['$\\lim_{x\\to0}\\dfrac{\\sqrt{1+x}-1}{x}$ bằng','Find $\\lim_{x\\to0}\\dfrac{\\sqrt{1+x}-1}{x}$.','$1/2$',['1','0','2']],['$\\lim_{x\\to3}\\dfrac{x^2-9}{x-3}$ bằng','Find $\\lim_{x\\to3}\\dfrac{x^2-9}{x-3}$.','6',['3','0','9']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Phân tích nhân tử hoặc nhân liên hợp để khử dạng $0/0$.',r[3] as string[]);
  }
  if (tid === 'type-kntt-11-16-03') {
    const r=[['$\\lim_{x\\to+\\infty}\\dfrac{2x+1}{x-3}$ bằng','Find $\\lim_{x\\to+\\infty}\\dfrac{2x+1}{x-3}$.','2',['1','0','$+\\infty$']],['$\\lim_{x\\to0^+}\\dfrac1x$ bằng','Find $\\lim_{x\\to0^+}1/x$.','$+\\infty$',['$-\\infty$','0','1']],['$\\lim_{x\\to0^-}\\dfrac1x$ bằng','Find $\\lim_{x\\to0^-}1/x$.','$-\\infty$',['$+\\infty$','0','-1']],['$\\lim_{x\\to-\\infty}\\dfrac{3x-2}{x+1}$ bằng','Find $\\lim_{x\\to-\\infty}\\dfrac{3x-2}{x+1}$.','3',['-3','0','$-\\infty$']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng giới hạn một phía hoặc chia cho lũy thừa bậc cao nhất.',r[3] as string[]);
  }

  // ---- Grade 11 probability addition / multiplication ----
  if (tid.startsWith('type-kntt-11-29-')) {
    const sub=tid.slice(-2);
    if(sub==='01'){const r=[['$P(A)=0.3,P(B)=0.4$, $A,B$ xung khắc. $P(A\\cup B)=$','If $P(A)=0.3,P(B)=0.4$ and $A,B$ are disjoint, $P(A\\cup B)=$','0.7',['0.12','0.1','1']],['$P(A)=0.2,P(B)=0.5$, xung khắc. $P(A\\cup B)=$','Disjoint events with probabilities 0.2,0.5. Union:','0.7',['0.1','0.3','1']],['Hai biến cố xung khắc có xác suất 0.1 và 0.6. Xác suất hợp là','Disjoint events have probabilities 0.1 and 0.6. Union:','0.7',['0.06','0.5','0.9']],['$P(A)=0.45,P(B)=0.25$, xung khắc. $P(A\\cup B)=$','Disjoint $A,B$ have 0.45 and 0.25. Union:','0.70',['0.20','0.1125','1']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Với biến cố xung khắc, $P(A\\cup B)=P(A)+P(B)$.',r[3] as string[]);}
    if(sub==='02'){const r=[['$P(A)=0.4,P(B)=0.5,P(A\\cap B)=0.2$. $P(A\\cup B)=$','Given probabilities 0.4,0.5, intersection 0.2. Union:','0.7',['0.9','0.2','0.5']],['$P(A)=0.3,P(B)=0.4,P(A\\cap B)=0.1$. Hợp bằng','Given 0.3,0.4 and intersection 0.1. Union:','0.6',['0.7','0.12','0.4']],['$P(A)=0.6,P(B)=0.5,P(A\\cap B)=0.3$. Hợp bằng','Given 0.6,0.5, intersection 0.3. Union:','0.8',['1.1','0.3','0.5']],['$P(A)=0.2,P(B)=0.7,P(A\\cap B)=0.1$. Hợp bằng','Given 0.2,0.7, intersection 0.1. Union:','0.8',['0.9','0.14','0.6']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng công thức cộng tổng quát, trừ phần giao.',r[3] as string[]);}
    if(sub==='03'){const r=[['$P(A)=0.3$. $P(\\overline A)$ bằng','If $P(A)=0.3$, $P(\\overline A)$ is','0.7',['0.3','1.3','0']],['$P(A\\cup B)=0.8$. Xác suất biến cố đối của $A\\cup B$ là','If $P(A\\cup B)=0.8$, complement probability is','0.2',['0.8','1.8','0']],['$P(A)=0.4,P(B)=0.3$, xung khắc. Xác suất không xảy ra $A$ lẫn $B$ là','Disjoint A,B with 0.4,0.3. Probability neither occurs:','0.3',['0.7','0.12','0.6']],['$P(A\\cup B)=0.65$. Xác suất “không A và không B” bằng','If union probability is 0.65, probability neither A nor B is','0.35',['0.65','0.5','0.15']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng biến cố đối $P(\\overline C)=1-P(C)$ kết hợp công thức cộng.',r[3] as string[]);}
    if(sub==='04'){const r=[['Khảo sát: 40% thích A, 35% thích B, 15% thích cả hai. Tỉ lệ thích ít nhất một là','Survey: 40% like A, 35% B, 15% both. At least one:','60%',['75%','50%','90%']],['Một CLB: 30% chơi bóng, 25% bơi, 10% cả hai. Tỉ lệ ít nhất một là','Club: 30% ball, 25% swim, 10% both. At least one:','45%',['55%','65%','15%']],['70% dùng X, 20% dùng Y, 10% dùng cả hai. Dùng ít nhất một là','70% use X, 20% Y, 10% both. At least one:','80%',['90%','70%','60%']],['20% lỗi A, 15% lỗi B, 5% cả hai. Có ít nhất một lỗi là','20% defect A, 15% B, 5% both. At least one defect:','30%',['35%','40%','10%']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Áp dụng $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.',r[3] as string[]);}
  }
  if (tid.startsWith('type-kntt-11-30-')) {
    const sub=tid.slice(-2);
    if(sub==='01'){const r=[['$P(A)=0.4,P(B)=0.5$, độc lập. $P(A\\cap B)=$','Independent A,B with 0.4,0.5. Intersection:','0.2',['0.9','0.1','0.45']],['Hai biến cố độc lập có xác suất 0.3 và 0.2. Xác suất cùng xảy ra là','Independent events probabilities 0.3 and 0.2. Both occur:','0.06',['0.5','0.1','0.25']],['$P(A)=0.8,P(B)=0.5$ độc lập. Giao bằng','Independent A,B probabilities 0.8,0.5. Intersection:','0.4',['0.3','1.3','0.8']],['$P(A)=0.25,P(B)=0.4$ độc lập. Giao bằng','Independent A,B probabilities 0.25,0.4. Intersection:','0.1',['0.65','0.15','0.25']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Độc lập: $P(A\\cap B)=P(A)P(B)$.',r[3] as string[]);}
    if(sub==='02'){const r=[['Tung 3 đồng xu độc lập. Xác suất cả 3 ngửa là','Flip 3 independent coins. Probability all heads:','$1/8$',['$1/4$','$3/8$','$1/2$']],['Một máy thành công mỗi lần với xác suất 0.9. Hai lần độc lập đều thành công có xác suất','Success probability 0.9 each. Two independent successes:','0.81',['0.9','0.18','0.99']],['Gieo 3 xúc xắc độc lập. Xác suất cả 3 đều ra 6 là','Roll 3 dice independently. Probability all are 6:','$1/216$',['$1/36$','$1/18$','$1/6$']],['Một biến cố xác suất 0.8 lặp độc lập 3 lần. Cả 3 xảy ra có xác suất','An event with probability 0.8 repeats independently 3 times. All occur:','0.512',['0.64','0.8','0.24']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Nhân các xác suất của chuỗi phép thử độc lập.',r[3] as string[]);}
    if(sub==='04'){const r=[['Hai thiết bị độc lập hoạt động tốt với xác suất 0.9 và 0.8. Xác suất cả hai tốt là','Independent devices work with probabilities 0.9 and 0.8. Both work:','0.72',['0.98','0.17','0.85']],['Hai chuyến bay độc lập đúng giờ với xác suất 0.8 và 0.7. Cả hai đúng giờ là','Independent flights on time 0.8,0.7. Both on time:','0.56',['0.75','0.15','0.94']],['Hai cảm biến độc lập phát hiện với xác suất 0.95 và 0.9. Cả hai phát hiện là','Independent sensors detect with 0.95 and 0.9. Both detect:','0.855',['0.95','0.05','0.995']],['Một khách mua hàng với xác suất 0.2; hai khách độc lập đều mua là','A customer buys with 0.2; two independent customers both buy:','0.04',['0.4','0.2','0.8']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Mô hình thực tế với biến cố độc lập dùng quy tắc nhân.',r[3] as string[]);}
  }

  // ---- Grade 11 derivative rules ----
  if (tid === 'type-kntt-11-32-01') {
    const r=[['Đạo hàm của $x^4-3x^2+5$ là','Derivative of $x^4-3x^2+5$ is','$4x^3-6x$',['$4x^3-3x$','$x^3-6x$','$4x^3+6x$']],['Đạo hàm của $\\dfrac1x$ là','Derivative of $1/x$ is','$-1/x^2$',['$1/x^2$','$-1/x$','$x^{-1}$']],['Đạo hàm của $\\sqrt x$ là','Derivative of $\\sqrt x$ is','$1/(2\\sqrt x)$',['$2\\sqrt x$','$1/\\sqrt x$','$\\sqrt x/2$']],['Đạo hàm của $\\dfrac{x+1}{x-1}$ là','Derivative of $(x+1)/(x-1)$ is','$-2/(x-1)^2$',['$2/(x-1)^2$','$1$','$2/(x+1)^2$']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Áp dụng quy tắc đạo hàm đa thức, thương hoặc căn.',r[3] as string[]);
  }
  if (tid === 'type-kntt-11-32-02') {
    const r=[['Đạo hàm của $\\sin x$ là','Derivative of $\\sin x$ is','$\\cos x$',['$-\\cos x$','$\\sin x$','$-\\sin x$']],['Đạo hàm của $\\cos x$ là','Derivative of $\\cos x$ is','$-\\sin x$',['$\\sin x$','$\\cos x$','$-\\cos x$']],['Đạo hàm của $\\tan x$ là','Derivative of $\\tan x$ is','$1/\\cos^2x$',['$1/\\sin^2x$','$\\cos^2x$','$-1/\\cos^2x$']],['Đạo hàm của $2\\sin x-3\\cos x$ là','Derivative of $2\\sin x-3\\cos x$ is','$2\\cos x+3\\sin x$',['$2\\cos x-3\\sin x$','$-2\\sin x+3\\cos x$','$2\\sin x+3\\cos x$']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng bảng đạo hàm các hàm lượng giác.',r[3] as string[]);
  }
  if (tid === 'type-kntt-11-32-03') {
    const r=[['Đạo hàm của $(2x+1)^3$ là','Derivative of $(2x+1)^3$ is','$6(2x+1)^2$',['$3(2x+1)^2$','$6(2x+1)$','$2(2x+1)^3$']],['Đạo hàm của $\\sin(3x)$ là','Derivative of $\\sin(3x)$ is','$3\\cos(3x)$',['$\\cos(3x)$','$-3\\sin(3x)$','$3\\sin(3x)$']],['Đạo hàm của $\\sqrt{x^2+1}$ là','Derivative of $\\sqrt{x^2+1}$ is','$x/\\sqrt{x^2+1}$',['$1/(2\\sqrt{x^2+1})$','$2x/\\sqrt{x^2+1}$','$\\sqrt{x^2+1}$']],['Đạo hàm của $\\cos(x^2)$ là','Derivative of $\\cos(x^2)$ is','$-2x\\sin(x^2)$',['$-\\sin(x^2)$','$2x\\cos(x^2)$','$2x\\sin(x^2)$']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng quy tắc dây chuyền $[f(u)]\\prime=f\\prime(u)u\\prime$.',r[3] as string[]);
  }

  // ---- Grade 12 function analysis ----
  if (tid === 'type-kntt-12-01-02') {
    const r=[['Cho $f\\prime(x)=(x-1)(x+2)$. Điểm cực đại của $f$ có hoành độ','If $f\\prime(x)=(x-1)(x+2)$, the local maximum occurs at','$x=-2$',['$x=1$','$x=0$','Không có']],['Cho $f(x)=x^3-3x$. Hàm số có cực đại tại','For $f(x)=x^3-3x$, local maximum occurs at','$x=-1$',['$x=1$','$x=0$','$x=3$']],['Nếu $f\\prime$ đổi dấu từ dương sang âm khi qua $x=2$, thì $x=2$ là','If $f\\prime$ changes from positive to negative at 2, then 2 is','Điểm cực đại',['Điểm cực tiểu','Không cực trị','Tiệm cận']],['Cho $f\\prime(x)=x^2-4$. Điểm cực tiểu có hoành độ','For $f\\prime(x)=x^2-4$, local minimum occurs at','$x=2$',['$x=-2$','$x=0$','Không có']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Lập bảng dấu đạo hàm và xét sự đổi dấu.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-01-03') {
    const r=[['Bảng dấu cho $f\\prime$: dương trên $(-\\infty,1)$, âm trên $(1,3)$, dương trên $(3,+\\infty)$. $f$ có','Sign chart: $f\\prime>0$ before 1, <0 on (1,3), >0 after 3. Then $f$ has','Cực đại tại 1, cực tiểu tại 3',['Hai cực đại','Hai cực tiểu','Không cực trị']],['Đồ thị $f\\prime$ cắt trục hoành tại $x=0$ từ âm sang dương. $f$ có','Graph of $f\\prime$ crosses at 0 from negative to positive. $f$ has','Cực tiểu tại 0',['Cực đại tại 0','Không cực trị','Tiệm cận tại 0']],['Nếu $f\\prime>0$ trên $(0,2)$ thì $f$','If $f\\prime>0$ on (0,2), $f$ is','Đồng biến trên $(0,2)$',['Nghịch biến','Hằng','Không xác định']],['Nếu $f\\prime<0$ trên $(-1,4)$ thì $f$','If $f\\prime<0$ on (-1,4), $f$ is','Nghịch biến trên $(-1,4)$',['Đồng biến','Hằng','Luôn dương']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Đọc dấu $f\\prime$ từ bảng/đồ thị để suy ra đơn điệu và cực trị.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-01-04') {
    const r=[['Để $f(x)=x^3-3mx$ có hai điểm cực trị phân biệt cần','For $f(x)=x^3-3mx$ to have two distinct critical points, require','$m>0$',['$m=0$','$m<0$','Mọi $m$']],['Hàm $f(x)=x^3+3mx$ đồng biến trên $\\mathbb R$ khi','For $f(x)=x^3+3mx$ to be increasing on $\\mathbb R$, one sufficient/necessary condition is','$m\\ge0$',['$m<0$','$m= -1$','$m>1$ only']],['Để $f(x)=x^3-3x^2+mx$ có đạo hàm không âm với mọi $x$, cần biệt thức của $f\\prime$','For $f$ to have $f\\prime\\ge0$ for all x, the discriminant of quadratic $f\\prime$ should satisfy','$\\Delta\\le0$',['$\\Delta>0$','$\\Delta=1$','$\\Delta<4$ only']],['Tham số trong bài toán đơn điệu được tìm chủ yếu bằng điều kiện','A parameter in monotonicity problems is mainly found via','$f\\prime(x)$ giữ dấu thích hợp',['$f(x)=0$ bắt buộc','Đồ thị đi qua gốc','$f$ chẵn']]][v]; return mk(r[0] as string,r[1] as string,r[2] as string,'Chuyển yêu cầu đơn điệu/cực trị thành điều kiện về dấu và nghiệm của $f\\prime$.',r[3] as string[]);
  }

  // ---- Grade 12 graph survey ----
  if (tid === 'type-kntt-12-04-01') {
    const r=[['Hàm $y=x^3-3x$ có bao nhiêu điểm cực trị?','How many local extrema does $y=x^3-3x$ have?','2',['0','1','3']],['Đồ thị $y=x^3$ có tâm đối xứng tại','Graph $y=x^3$ has center of symmetry at','O(0,0)',['(1,0)','(0,1)','Không có']],['Với $y=x^3-3x^2$, đạo hàm bằng','For $y=x^3-3x^2$, derivative is','$3x(x-2)$',['$3x(x-1)$','$x^2-6x$','$3x^2-3$']],['Đồ thị hàm bậc ba có hệ số bậc ba dương thì khi $x\\to+\\infty$, $y$','For a cubic with positive leading coefficient, as $x\\to+\\infty$, $y$ tends to','$+\\infty$',['$-\\infty$','0','Một hằng số']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Khảo sát đạo hàm, giới hạn và các điểm đặc trưng của hàm bậc ba.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-04-02') {
    const r=[['Hàm $y=\\dfrac{x+1}{x-2}$ có tiệm cận đứng','For $y=(x+1)/(x-2)$, vertical asymptote is','$x=2$',['$x=-1$','$y=1$','$y=2$']],['Hàm $y=\\dfrac{2x-1}{x+3}$ có tiệm cận ngang','For $y=(2x-1)/(x+3)$, horizontal asymptote is','$y=2$',['$x=-3$','$y=-1$','$y=3$']],['Tập xác định của $y=\\dfrac{x}{x-1}$ là','Domain of $y=x/(x-1)$ is','$\\mathbb R\\setminus\\{1\\}$',['$\\mathbb R$','$(1,+\\infty)$','$(-\\infty,1)$']],['Hàm $y=\\dfrac{x+2}{x-1}$ có giao điểm với trục $Ox$ tại','For $y=(x+2)/(x-1)$, x-intercept is','$x=-2$',['$x=1$','$x=2$','$x=0$']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Khảo sát miền xác định, đạo hàm, giao điểm và tiệm cận của phân thức bậc nhất/bậc nhất.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-04-03') {
    const r=[['Chia đa thức $\\dfrac{x^2+1}{x-1}$ cho biết tiệm cận xiên là','For $(x^2+1)/(x-1)$, polynomial division gives oblique asymptote','$y=x+1$',['$y=x-1$','$x=1$','$y=1$']],['Hàm $y=\\dfrac{x^2}{x+1}$ có tiệm cận đứng','For $y=x^2/(x+1)$, vertical asymptote is','$x=-1$',['$x=0$','$y=0$','$y=x-1$']],['Với $y=\\dfrac{x^2+2x+3}{x+1}$, tiệm cận xiên là','For $y=(x^2+2x+3)/(x+1)$, oblique asymptote is','$y=x+1$',['$y=x+2$','$x=-1$','$y=1$']],['Khảo sát phân thức bậc hai trên bậc nhất cần thực hiện phép','To survey quadratic-over-linear rational functions, one often uses','Chia đa thức để tìm tiệm cận xiên',['Khai căn','Tổ hợp','Bayes']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng chia đa thức, đạo hàm và giới hạn để khảo sát.',r[3] as string[]);
  }

  // ---- Grade 12 optimization ----
  if (tid === 'type-kntt-12-05-01') {
    const r=[['Hình chữ nhật có chu vi 20. Diện tích lớn nhất là','Rectangle perimeter 20. Maximum area is','25',['20','50','100']],['Một hộp không nắp từ tấm vuông cạnh 12 cắt góc $x$. Thể tích được mô hình bởi','Open box from a 12-square sheet cutting corners x has volume','$V=x(12-2x)^2$',['$V=12x^2$','$V=(12-x)^3$','$V=x(12-x)$']],['Trong các hình chữ nhật có diện tích cố định, hình có chu vi nhỏ nhất là','Among rectangles with fixed area, minimum perimeter occurs for','Hình vuông',['Hình rất dài','Mọi hình như nhau','Tam giác']],['Tối ưu hình học bằng đạo hàm cần trước hết','Geometric optimization with derivatives first requires','Lập hàm mục tiêu theo một biến',['Lấy đạo hàm khi chưa có hàm','Dùng Bayes','Dùng tổ hợp']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Lập hàm mục tiêu hình học rồi xét đạo hàm trên miền khả thi.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-05-02') {
    const r=[['Doanh thu $R(x)=100x-x^2$. Doanh thu lớn nhất đạt tại $x=$','Revenue $R(x)=100x-x^2$. Maximum occurs at x=','50',['25','100','0']],['Lợi nhuận $P(x)=-2x^2+80x-100$. Sản lượng tối ưu là','Profit $P(x)=-2x^2+80x-100$. Optimal output:','20',['40','10','80']],['Chi phí trung bình được mô hình bởi $C(x)=x+100/x$, $x>0$. Điểm cực tiểu thỏa','Average cost $C=x+100/x$. Minimum occurs at','$x=10$',['$x=100$','$x=1$','$x=20$']],['Tối ưu doanh thu/lợi nhuận thường tìm bằng','Revenue/profit optimization typically uses','Điểm tới hạn của hàm kinh tế trên miền cho phép',['Trung vị','Tổ hợp','Định lí sin']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Lấy đạo hàm hàm chi phí/doanh thu/lợi nhuận và so sánh các điểm cần xét.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-05-03') {
    const r=[['Quãng đường $s(t)=t^3-6t^2+9t$. Vận tốc là','Position $s(t)=t^3-6t^2+9t$. Velocity is','$v(t)=3t^2-12t+9$',['$v=t^2-6t+9$','$v=3t^2-6t+9$','$v=t^3-12t$']],['Thời gian tối ưu của một hàm $T(x)$ nội miền thường thỏa','An interior optimum of time function $T(x)$ usually satisfies','$T\\prime(x)=0$',['$T(x)=0$','$T\\prime(x)=1$','$T(x)=1$']],['Nếu vận tốc $v(t)$ đạt cực đại tại $t_0$ trong miền trong thì thường','If velocity $v(t)$ has an interior maximum at $t_0$, then typically','$v\\prime(t_0)=0$',['$v(t_0)=0$','$t_0=0$','$v\\prime(t_0)=1$']],['Bài toán đường đi nhanh nhất cần tối thiểu hóa','A fastest-route problem minimizes','Hàm thời gian tổng cộng',['Quãng đường bất kì','Xác suất','Số tổ hợp']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Mô hình chuyển động/thời gian theo một biến rồi dùng đạo hàm để tối ưu.',r[3] as string[]);
  }

  // ---- Grade 12 Oxyz ----
  if (tid === 'type-kntt-12-07-01') {
    const r=[['Trong $Oxyz$, $A(1,2,-1)$, $B(4,6,3)$. $\\overrightarrow{AB}$ bằng','In Oxyz, A(1,2,-1), B(4,6,3). AB vector is','$(3,4,4)$',['$(5,8,2)$','$(-3,-4,-4)$','$(3,4,0)$']],['Vectơ $2\\vec i-\\vec j+3\\vec k$ có tọa độ','Vector $2i-j+3k$ has coordinates','$(2,-1,3)$',['$(-1,2,3)$','$(2,1,3)$','$(3,-1,2)$']],['Nếu $M(2,-3,5)$ thì $\\overrightarrow{OM}$ bằng','If M(2,-3,5), vector OM is','$(2,-3,5)$',['$(-2,3,-5)$','$(2,3,5)$','$(5,-3,2)$']],['Trong $Oxyz$, $A(0,1,2),B(-2,4,5)$. $\\overrightarrow{BA}$ bằng','In Oxyz, A(0,1,2),B(-2,4,5). BA vector is','$(2,-3,-3)$',['$(-2,3,3)$','$(2,3,-3)$','$(0,-3,-3)$']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Lấy tọa độ điểm cuối trừ điểm đầu trong ba thành phần.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-07-02') {
    const r=[['Trung điểm của $A(1,2,3)$, $B(3,4,5)$ là','Midpoint of A(1,2,3), B(3,4,5) is','$(2,3,4)$',['$(4,6,8)$','$(1,1,1)$','$(2,4,3)$']],['Trọng tâm tam giác $A(0,0,0),B(3,0,0),C(0,6,0)$ là','Centroid of A(0,0,0),B(3,0,0),C(0,6,0):','$(1,2,0)$',['$(3,6,0)$','$(1,3,0)$','$(2,1,0)$']],['Trung điểm $M$ của $A(-2,1,4)$ và $B(4,3,0)$ là','Midpoint of A(-2,1,4),B(4,3,0):','$(1,2,2)$',['$(2,4,4)$','$(1,1,2)$','$(-1,2,2)$']],['Nếu $M$ là trung điểm $AB$, $A(1,1,1)$, $M(2,3,4)$ thì $B$ là','If M midpoint AB, A(1,1,1), M(2,3,4), B is','$(3,5,7)$',['$(1,2,3)$','$(4,6,8)$','$(3,4,5)$']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng công thức trung điểm, trọng tâm hoặc quan hệ điểm chia đoạn trong Oxyz.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-07-03') {
    const r=[['Khoảng cách giữa $A(0,0,0)$ và $B(1,2,2)$ bằng','Distance A(0,0,0) to B(1,2,2):','3',['2','$\\sqrt5$','5']],['Độ dài $\\vec a=(2,-1,2)$ bằng','Length of vector (2,-1,2):','3',['2','$\\sqrt7$','5']],['Khoảng cách $A(1,1,1)$, $B(4,5,1)$ bằng','Distance A(1,1,1), B(4,5,1):','5',['3','4','$\\sqrt{41}$']],['Độ dài $\\vec u=(1,2,3)$ bằng','Length of (1,2,3):','$\\sqrt{14}$',['6','$\\sqrt6$','14']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng căn tổng bình phương các hiệu tọa độ.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-07-04') {
    const r=[['Một drone ở $A(10,20,30)$ m và mục tiêu $B(13,24,30)$ m. Khoảng cách là','Drone at A(10,20,30) m and target B(13,24,30) m. Distance:','5 m',['7 m','3 m','4 m']],['GPS 3D ghi hai điểm $A(0,0,0)$ và $B(6,8,0)$ km. Khoảng cách là','3D GPS points A(0,0,0), B(6,8,0) km. Distance:','10 km',['14 km','7 km','100 km']],['Một robot dịch chuyển theo vectơ $(2,-1,3)$ m. Độ dài dịch chuyển là','Robot displacement vector (2,-1,3) m. Magnitude:','$\\sqrt{14}$ m',['6 m','$\\sqrt6$ m','14 m']],['Hai cảm biến có tọa độ $A(1,2,3)$, $B(1,2,8)$. Khoảng cách là','Sensors A(1,2,3), B(1,2,8). Distance:','5',['3','8','25']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Mô hình vị trí thực tế bằng tọa độ 3D rồi dùng công thức khoảng cách.',r[3] as string[]);
  }

  // ---- Grade 12 antiderivatives / integrals ----
  if (tid === 'type-kntt-12-11-01') {
    const r=[['Một nguyên hàm của $3x^2$ là','An antiderivative of $3x^2$ is','$x^3$',['$3x^3$','$x^2$','$6x$']],['Một nguyên hàm của $2x+1$ là','An antiderivative of $2x+1$ is','$x^2+x$',['$2x^2+x$','$x^2+1$','$2$']],['Một nguyên hàm của $\\cos x$ là','An antiderivative of $\\cos x$ is','$\\sin x$',['$-\\sin x$','$\\cos x$','$-\\cos x$']],['Một nguyên hàm của $1/x$ trên $(0,+\\infty)$ là','An antiderivative of $1/x$ on positive reals is','$\\ln x$',['$1/x^2$','$x^2/2$','$e^x$']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng bảng nguyên hàm cơ bản và tính tuyến tính.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-11-05') {
    const r=[['Biết $F\\prime(x)=2x$, $F(0)=3$. Khi đó $F(x)=$','Given $F\\prime(x)=2x$, $F(0)=3$. Then F=','$x^2+3$',['$x^2$','$2x+3$','$x^2-3$']],['$F\\prime(x)=3x^2$, $F(1)=2$. $F(x)=$','Given $F\\prime=3x^2$, $F(1)=2$.','$x^3+1$',['$x^3+2$','$3x^2+1$','$x^3-1$']],['$F\\prime(x)=\\cos x$, $F(0)=1$. $F(x)=$','Given $F\\prime=\\cos x$, F(0)=1.','$\\sin x+1$',['$\\cos x$','$\\sin x$','$-\\sin x+1$']],['$F\\prime(x)=1$, $F(2)=5$. $F(x)=$','Given F prime=1, F(2)=5.','$x+3$',['$x+5$','$x-3$','5']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Tìm họ nguyên hàm rồi dùng điều kiện ban đầu để xác định hằng số $C$.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-12-01') {
    const r=[['$\\int_0^1 2x\\,dx$ bằng','Evaluate $\\int_0^1 2x\\,dx$.','1',['2','$1/2$','0']],['$\\int_0^2 3\\,dx$ bằng','Evaluate $\\int_0^2 3\\,dx$.','6',['3','5','9']],['$\\int_0^1 x^2\\,dx$ bằng','Evaluate $\\int_0^1 x^2\\,dx$.','$1/3$',['$1/2$','1','$2/3$']],['$\\int_0^\\pi \\sin x\\,dx$ bằng','Evaluate $\\int_0^\\pi \\sin x\\,dx$.','2',['0','1','$\\pi$']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Tìm nguyên hàm rồi áp dụng định lí Newton–Leibniz.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-12-04') {
    const r=[['Nếu $f$ lẻ và khả tích trên $[-2,2]$ thì $\\int_{-2}^2f(x)dx$ bằng','If f is odd on [-2,2], its integral is','0',['2','4','Không xác định']],['Nếu $f$ chẵn thì $\\int_{-a}^a f(x)dx$ bằng','If f is even, integral from -a to a equals','$2\\int_0^a f(x)dx$',['0','$\\int_0^a f$','$-2\\int_0^a f$']],['$\\int_0^2 f=5$ và $\\int_2^3 f=4$. $\\int_0^3 f$ bằng','If integrals 0–2=5 and 2–3=4, integral 0–3 is','9',['1','20','5']],['Nếu $\\int_0^1 f(x)dx=m$ và biết giá trị tích phân bằng 3 thì','If integral 0–1 equals m and computed value is 3, then','$m=3$',['$m=0$','$m=1$','$m=-3$']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng tính đối xứng, tính cộng theo khoảng và điều kiện tham số.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-12-05') {
    const r=[['Lưu lượng $q(t)=2t$ L/min trong 0–3 phút. Thể tích tích lũy là','Flow $q(t)=2t$ L/min over 0–3 min. Accumulated volume:','9 L',['6 L','3 L','18 L']],['Vận tốc $v(t)=3t^2$ m/s trong 0–2 s. Quãng đường là','Velocity $v(t)=3t^2$ from 0–2 s. Distance:','8 m',['6 m','12 m','4 m']],['Công suất $P(t)=100$ W trong 10 s. Năng lượng là','Power 100 W for 10 s. Energy:','1000 J',['100 J','10 J','10000 J']],['Tốc độ tăng dân số $r(t)=4t$ (nghìn/năm) trong 0–2 năm. Mức tăng tích lũy là','Growth rate 4t over 0–2 years. Accumulated increase:','8 nghìn',['4 nghìn','16 nghìn','2 nghìn']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Đại lượng tích lũy bằng tích phân của tốc độ theo thời gian.',r[3] as string[]);
  }

  // ---- Grade 12 conditional probability / Bayes ----
  if (tid === 'type-kntt-12-18-01') {
    const r=[['$P(A\\cap B)=0.2,P(B)=0.5$. $P(A|B)=$','Given intersection 0.2 and P(B)=0.5. Conditional probability:','0.4',['0.1','0.7','2.5']],['$P(A\\cap B)=0.18,P(B)=0.6$. $P(A|B)=$','Given 0.18 intersection and P(B)=0.6.','0.3',['0.12','0.78','0.6']],['$P(A\\cap B)=0.1,P(B)=0.25$. $P(A|B)=$','Given 0.1 intersection and P(B)=0.25.','0.4',['0.025','0.35','2.5']],['$P(A\\cap B)=0.12,P(B)=0.4$. $P(A|B)=$','Given 0.12 intersection and P(B)=0.4.','0.3',['0.48','0.28','0.4']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng $P(A|B)=P(A\\cap B)/P(B)$.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-18-02') {
    const r=[['Trong 100 người có 40 nữ, 10 nữ thuận tay trái. Chọn một người biết rằng là nữ. Xác suất thuận tay trái là','Among 100 people, 40 are women and 10 of those are left-handed. Given woman, probability left-handed:','$1/4$',['$1/10$','$2/5$','$1/2$']],['Bảng có 60 nam, trong đó 12 thích A. Biết chọn nam, xác suất thích A là','There are 60 men, 12 like A. Given male, probability likes A:','$1/5$',['$1/12$','$12/100$','$3/5$']],['Trong 80 học sinh, 20 học lớp X và 8 trong số đó đạt giỏi. Biết thuộc lớp X, xác suất giỏi là','80 students, 20 in class X and 8 of those are excellent. Given class X:','$2/5$',['$1/10$','$1/4$','$3/5$']],['Có 50 sản phẩm loại B, 5 lỗi. Biết sản phẩm là loại B, xác suất lỗi là','50 type-B products, 5 defective. Given type B, probability defective:','$1/10$',['$1/5$','$5/100$','$9/10$']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Đọc hàng/cột điều kiện trong bảng: số trường hợp vừa thỏa chia tổng số trong nhóm điều kiện.',r[3] as string[]);
  }
  if (tid === 'type-kntt-12-18-04') {
    const r=[['Một lớp có 30 nữ, 20 nam; 12 nữ và 4 nam tham gia CLB. Biết người được chọn tham gia CLB, xác suất là nữ bằng','Class: 30 women,20 men; 12 women,4 men in club. Given club member, probability female:','$3/4$',['$2/5$','$12/50$','$1/2$']],['Một bệnh viện: 100 ca, 60 nội trú; 18 nội trú tái khám. Biết ca nội trú, xác suất tái khám là','100 cases, 60 inpatient, 18 revisit. Given inpatient, revisit probability:','0.3',['0.18','0.6','0.42']],['Một website: 200 khách mobile, 50 mua hàng. Biết khách mobile, xác suất mua là','Website: 200 mobile visitors,50 purchase. Given mobile, probability purchase:','0.25',['0.5','0.2','0.75']],['Một nhà máy: 80 sản phẩm ca đêm, 8 lỗi. Biết sản phẩm ca đêm, xác suất lỗi là','Factory:80 night-shift products,8 defective. Given night shift, probability defect:','0.1',['0.8','0.08','0.9']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Xác định đúng biến cố điều kiện trong tình huống thực tế.',r[3] as string[]);
  }
  if (tid.startsWith('type-kntt-12-19-')) {
    const sub=tid.slice(-2);
    if(sub==='02'){const r=[['Máy A làm 60% sản phẩm, lỗi 1%; B làm 40%, lỗi 4%. Biết sản phẩm lỗi, xác suất do B gần nhất là','Machine A 60% with 1% defect, B 40% with 4%. Given defective, probability from B:','$8/11$',['$4/11$','$6/11$','$3/4$']],['Bệnh có tỉ lệ 1%, test nhạy 90%, dương giả 5%. Xác suất bệnh khi dương gần','Disease prevalence 1%, sensitivity 90%, false positive 5%. Probability disease given positive approx','15.4%',['1%','90%','5%']],['Hộp A chọn với 0.7 có 2 đỏ/3; hộp B chọn 0.3 có 1 đỏ/4. Biết rút đỏ, xác suất từ A là','Choose box A with 0.7 (2/3 red), B 0.3 (1/4 red). Given red, probability A:','$56/65$',['$9/65$','$2/3$','0.7']],['Nguồn X 40% tin, chính xác 95%; Y 60%, chính xác 80%. Biết tin đúng, xác suất từ X là','Source X 40% accurate95%, Y60% accurate80%. Given correct, probability X:','$19/43$',['$24/43$','0.4','0.95']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Dùng công thức Bayes để đảo điều kiện.',r[3] as string[]);}
    if(sub==='03'){const r=[['Sơ đồ cây có nhánh $P(A)=0.6$, $P(B|A)=0.2$. Xác suất đường đi $A\\cap B$ là','Tree branch P(A)=0.6, P(B|A)=0.2. Path probability A∩B:','0.12',['0.8','0.4','0.2']],['Bảng: nhóm X có 30 người, 6 dương; Y có 70 người, 7 dương. Biết dương, xác suất thuộc X là','Table: X 30 with 6 positive; Y 70 with 7 positive. Given positive, probability X:','$6/13$',['$7/13$','$3/10$','$6/100$']],['Cây xác suất: $P(A)=0.4,P(B|A)=0.5,P(B|\\bar A)=0.2$. $P(B)=$','Tree: P(A)=0.4,P(B|A)=0.5,P(B|not A)=0.2. P(B)=','0.32',['0.2','0.5','0.7']],['Bảng chéo có 20 ca loại A (4 lỗi) và 30 loại B (3 lỗi). Biết lỗi, xác suất loại A là','Cross-table: 20 type A (4 defective),30 B (3 defective). Given defective, probability A:','$4/7$',['$3/7$','$1/5$','$2/5$']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Đọc sơ đồ cây/bảng, nhân theo nhánh và chuẩn hóa theo tổng xác suất điều kiện.',r[3] as string[]);}
    if(sub==='04'){const r=[['Một xét nghiệm sàng lọc dùng Bayes để tính xác suất bệnh sau khi dương tính. Đại lượng cần là','A screening test uses Bayes after a positive result. Needed quantity is','$P(\\text{bệnh}|\\text{dương})$',['$P(\\text{dương}|\\text{bệnh})$','$P(\\text{bệnh})$','$P(\\text{âm})$']],['Bộ lọc thư rác phân loại email. Biết email bị gắn spam, xác suất thực sự spam là một','Spam filter: given flagged spam, probability truly spam is a','Xác suất hậu nghiệm',['Xác suất tiên nghiệm','Trung bình','Phương sai']],['Trong kiểm định, Bayes kết hợp tỉ lệ nền và độ nhạy để','In testing, Bayes combines base rate and sensitivity to','Cập nhật xác suất sau bằng chứng',['Tính đạo hàm','Tính trung vị','Tính khoảng cách']],['Ứng dụng phân loại có nhiều nguồn/lớp dùng Bayes để so sánh','A classification application uses Bayes to compare','Xác suất hậu nghiệm của các lớp',['Chu vi các lớp','Đạo hàm lớp','Số phần tử']]][v];return mk(r[0] as string,r[1] as string,r[2] as string,'Xác định tiên nghiệm, khả năng có điều kiện và hậu nghiệm trong mô hình Bayes.',r[3] as string[]);}
  }

  return null;
}

function remainingDuplicateFixSample(tid: string, variant: number): Sample | null {
  const v = variant % 4;
  const mk = (vi:string,en:string,answer:string,solutionVi:string,wrong:string[],solutionEn=solutionVi): Sample => ({
    vi,en,answer,solutionVi,solutionEn,
    options:[[answer,answer,true],[wrong[0],wrong[0],false],[wrong[1],wrong[1],false],[wrong[2],wrong[2],false]],
  });

  if (tid === 'type-kntt-10-03-01') {
    const r=[
      ['$2x+y\\le5$','$(1,2)$','Có',['Không','Chỉ khi $x=0$','Không xác định']],
      ['$x-2y>0$','$(3,1)$','Có',['Không','Chỉ khi $y=0$','Không xác định']],
      ['$3x+y<4$','$(1,2)$','Không',['Có','Chỉ khi $x<0$','Không xác định']],
      ['$x+y\\ge6$','$(2,3)$','Không',['Có','Chỉ khi $x=y$','Không xác định']],
    ][v];
    return mk(`Cặp số ${r[1]} có là nghiệm của bất phương trình ${r[0]} không?`,`Does ${r[1]} satisfy the inequality ${r[0]}?`,r[2] as string,'Thay tọa độ vào vế trái và so sánh hai vế.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-03-02') {
    const r=[
      ['$x+y\\le4$','$(1,1)$',['$(4,2)$','$(3,3)$','$(5,0)$']],
      ['$2x+y>5$','$(3,1)$',['$(1,1)$','$(0,0)$','$(2,1)$']],
      ['$x-2y\\ge0$','$(4,1)$',['$(1,2)$','$(0,1)$','$(2,2)$']],
      ['$3x+y<6$','$(1,2)$',['$(2,2)$','$(3,0)$','$(2,1)$']],
    ][v];
    return mk(`Điểm nào sau đây thuộc miền nghiệm của bất phương trình ${r[0]}?`,`Which point belongs to the solution half-plane of ${r[0]}?`,r[1] as string,'Thay từng điểm vào bất phương trình; điểm thỏa là điểm thuộc miền nghiệm.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-03-03') {
    const r=[
      ['Một xưởng làm $x$ sản phẩm A và $y$ sản phẩm B. A dùng 3 giờ, B dùng 2 giờ, tổng thời gian không quá 60 giờ.','A workshop makes $x$ units of A and $y$ units of B. A needs 3 hours and B 2 hours, with at most 60 hours.','$3x+2y\\le60$',['$3x+2y\\ge60$','$2x+3y\\le60$','$x+y=60$']],
      ['Một vé người lớn giá 100 nghìn, vé trẻ em giá 60 nghìn. Mua $x$ vé người lớn, $y$ vé trẻ em với ngân sách không quá 1200 nghìn.','Adult tickets cost 100 thousand and child tickets 60 thousand. Buy $x,y$ tickets with budget at most 1200 thousand.','$100x+60y\\le1200$',['$100x+60y\\ge1200$','$60x+100y\\le1200$','$x+y\\le1200$']],
      ['Mỗi bàn loại A cần 4 m gỗ, loại B cần 3 m. Có tối đa 48 m gỗ để làm $x,y$ bàn.','Table A needs 4 m of wood and B needs 3 m. At most 48 m is available.','$4x+3y\\le48$',['$4x+3y\\ge48$','$3x+4y\\le48$','$x+y=48$']],
      ['Một khẩu phần A có 2 đơn vị chất P, B có 5 đơn vị. Cần ít nhất 30 đơn vị P từ $x,y$ khẩu phần.','Serving A has 2 units of nutrient P and B has 5. At least 30 units are required.','$2x+5y\\ge30$',['$2x+5y\\le30$','$5x+2y\\ge30$','$x+y\\ge30$']],
    ][v];
    return mk(`${r[0]} Bất phương trình mô hình đúng là`,`${r[1]} The correct inequality model is`,r[2] as string,'Chuyển từng đại lượng tiêu hao/chi phí thành hệ số của $x,y$ và dùng đúng dấu theo “không quá/ít nhất”.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-04-01') {
    const r=[
      ['$(1,1)$','$x\\ge0,\\ y\\ge0,\\ x+y\\le3$',['$(2,2)$','$(-1,1)$','$(1,-1)$']],
      ['$(2,1)$','$x\\ge1,\\ y\\ge0,\\ x+2y\\le5$',['$(0,1)$','$(3,2)$','$(1,-1)$']],
      ['$(1,2)$','$x\\ge0,\\ y\\ge1,\\ 2x+y\\le5$',['$(2,2)$','$(1,0)$','$(-1,2)$']],
      ['$(2,2)$','$x\\ge1,\\ y\\ge1,\\ x+y\\le5$',['$(0,2)$','$(3,3)$','$(2,0)$']],
    ][v];
    return mk(`Điểm nào thuộc miền nghiệm của hệ bất phương trình ${r[1]}?`,`Which point satisfies the system ${r[1]}?`,r[0] as string,'Kiểm tra đồng thời tất cả bất phương trình của hệ.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-04-02') {
    const k=[4,5,6,8][v];
    return mk(`Miền nghiệm $x\\ge0, y\\ge0, x+y\\le${k}$ là một tam giác. Một đỉnh của miền nghiệm là`,`The region $x\\ge0,y\\ge0,x+y\\le${k}$ is a triangle. One of its vertices is`,`$(${k},0)$`,'Các đường biên là hai trục tọa độ và $x+y='+k+'$. Giao điểm tạo các đỉnh.',[`$(${k},${k})$`,`$(1,${k})$`,`$(-${k},0)$`]);
  }
  if (tid === 'type-kntt-10-04-03') {
    const r=[
      [4,'$F=2x+y$','8',['4','6','12']],
      [5,'$F=x+3y$','15',['5','10','20']],
      [6,'$F=3x+2y$','18',['12','24','30']],
      [8,'$F=x+2y$','16',['8','12','24']],
    ][v];
    return mk(`Trên miền $x\\ge0,y\\ge0,x+y\\le${r[0]}$, giá trị lớn nhất của ${r[1]} là`,`On $x\\ge0,y\\ge0,x+y\\le${r[0]}$, the maximum of ${r[1]} is`,r[2] as string,'Tính hàm mục tiêu tại các đỉnh của miền đa giác và chọn giá trị lớn nhất.',r[3] as string[]);
  }

  if (tid === 'type-kntt-10-06-01') {
    const r=[
      ['3','4','$90^\\circ$','5',['7','1','$\\sqrt7$']],
      ['5','5','$60^\\circ$','5',['10','$5\\sqrt2$','$5\\sqrt3$']],
      ['4','6','$60^\\circ$','$2\\sqrt7$',['2','10','$2\\sqrt{13}$']],
      ['6','8','$60^\\circ$','$2\\sqrt{13}$',['10','14','$2\\sqrt7$']],
    ][v];
    return mk(`Tam giác có hai cạnh ${r[0]}, ${r[1]} và góc xen giữa ${r[2]}. Cạnh đối diện góc đó bằng`,`A triangle has sides ${r[0]}, ${r[1]} and included angle ${r[2]}. The opposite side equals`,r[3] as string,'Áp dụng định lí côsin $c^2=a^2+b^2-2ab\\cos C$.',r[4] as string[]);
  }
  if (tid === 'type-kntt-10-06-02') {
    const r=[
      ['6','$30^\\circ$','$90^\\circ$','12',['6','3','$6\\sqrt3$']],
      ['5','$30^\\circ$','$90^\\circ$','10',['5','$5\\sqrt3$','$10\\sqrt3$']],
      ['$4\\sqrt2$','$45^\\circ$','$90^\\circ$','8',['4','$4\\sqrt2$','$8\\sqrt2$']],
      ['7','$30^\\circ$','$150^\\circ$','7',['14','$7\\sqrt3$','$7/2$']],
    ][v];
    return mk(`Trong tam giác, $a=${bareMath(String(r[0]))}$, $A=${bareMath(String(r[1]))}$, $B=${bareMath(String(r[2]))}$. Cạnh $b$ bằng`,`In a triangle, $a=${bareMath(String(r[0]))}$, $A=${bareMath(String(r[1]))}$, $B=${bareMath(String(r[2]))}$. Find $b$.`,r[3] as string,'Dùng định lí sin $a/\\sin A=b/\\sin B$.',r[4] as string[]);
  }
  if (tid === 'type-kntt-10-06-04') {
    const r=[
      ['Một cột cờ được nhìn từ điểm cách chân cột 20 m với góc nâng $45^\\circ$. Bỏ qua chiều cao mắt. Chiều cao cột là','A flagpole is observed from 20 m away at an elevation angle of $45^\\circ$. Its height is','20',['10','$20\\sqrt2$','40']],
      ['Một tòa nhà được nhìn từ điểm cách chân 30 m với góc nâng $30^\\circ$. Chiều cao tòa nhà là','A building is observed from 30 m away at an elevation angle of $30^\\circ$. Its height is','$10\\sqrt3$',['10','15','$30\\sqrt3$']],
      ['Từ điểm cách chân cây 12 m, góc nâng lên ngọn cây là $60^\\circ$. Chiều cao cây là','From 12 m away, the elevation angle to the top of a tree is $60^\\circ$. Its height is','$12\\sqrt3$',['12','24','$6\\sqrt3$']],
      ['Một dây neo dài 10 m tạo với mặt đất góc $30^\\circ$. Độ cao điểm neo trên cột là','A 10 m guy wire makes a $30^\\circ$ angle with the ground. The attachment height is','5',['$5\\sqrt3$','10','$10\\sqrt3$']],
    ][v];
    return mk(r[0] as string,r[1] as string,r[2] as string,'Mô hình bằng tam giác vuông và dùng tỉ số lượng giác thích hợp.',r[3] as string[]);
  }

  if (tid === 'type-kntt-10-15-01') {
    const r=[
      ['$f(x)=\\dfrac1{x-2}$','$\\mathbb R\\setminus\\{2\\}$',['$\\mathbb R$','$(2,+\\infty)$','$[2,+\\infty)$']],
      ['$f(x)=\\sqrt{x-3}$','$[3,+\\infty)$',['$(3,+\\infty)$','$\\mathbb R$','$(-\\infty,3]$']],
      ['$f(x)=\\dfrac1{x+1}$','$\\mathbb R\\setminus\\{-1\\}$',['$\\mathbb R$','$( -1,+\\infty)$','$[-1,+\\infty)$']],
      ['$f(x)=\\sqrt{5-x}$','$(-\\infty,5]$',['$[5,+\\infty)$','$\\mathbb R$','$(-\\infty,5)$']],
    ][v];
    return mk(`Tập xác định của ${r[0]} là`,`The domain of ${r[0]} is`,r[1] as string,'Áp dụng điều kiện mẫu khác 0 hoặc biểu thức dưới căn không âm.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-15-02') {
    const r=[
      ['$y=(x-1)^2-4$','Hai giao điểm với $Ox$ có hoành độ $-1$ và $3$',['Chỉ $x=1$','Không cắt $Ox$','Hai giao điểm $x=0,2$']],
      ['$y=x^2-4$','Đồ thị cắt $Ox$ tại $x=-2$ và $x=2$',['Chỉ tại $x=0$','Không cắt $Ox$','Cắt tại $x=-4,4$']],
      ['$y=-(x-2)^2+9$','Giá trị lớn nhất của hàm số là $9$',['Giá trị nhỏ nhất là $9$','Giá trị lớn nhất là $2$','Không có cực trị']],
      ['$y=(x+3)^2+1$','Giá trị nhỏ nhất của hàm số là $1$',['Giá trị lớn nhất là $1$','Giá trị nhỏ nhất là $-3$','Hàm không bị chặn dưới']],
    ][v];
    return mk(`Từ đồ thị của hàm số ${r[0]}, kết luận đúng là`,`From the graph of ${r[0]}, the correct conclusion is`,r[1] as string,'Dùng dạng đỉnh và các giao điểm đặc trưng của đồ thị.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-15-03') {
    const r=[
      ['$f(x)=x^4+2x^2$','Hàm chẵn',['Hàm lẻ','Vừa chẵn vừa lẻ','Không chẵn không lẻ']],
      ['$f(x)=x^3-2x$','Hàm lẻ',['Hàm chẵn','Vừa chẵn vừa lẻ','Không chẵn không lẻ']],
      ['$f(x)=x^2+x$','Không chẵn không lẻ',['Hàm chẵn','Hàm lẻ','Vừa chẵn vừa lẻ']],
      ['$f(x)=\\cos x$','Hàm chẵn',['Hàm lẻ','Không chẵn không lẻ','Không xác định']],
    ][v];
    return mk(`${r[0]} là`,`${r[0]} is`,r[1] as string,'So sánh $f(-x)$ với $f(x)$ và $-f(x)$.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-15-04') {
    const r=[
      ['Một hãng taxi thu 15 nghìn đồng phí mở cửa và 12 nghìn đồng cho mỗi km. Chi phí $C(x)$ (nghìn đồng) cho $x$ km là','$C(x)=15+12x$',['$C(x)=27x$','$C(x)=12+15x$','$C(x)=15x+12$']],
      ['Một bể có sẵn 100 lít nước và được bơm thêm 8 lít mỗi phút. Lượng nước sau $t$ phút là','$V(t)=100+8t$',['$V(t)=108t$','$V(t)=100t+8$','$V(t)=100-8t$']],
      ['Nhiệt độ ban đầu 20°C tăng đều 2°C mỗi giờ. Sau $t$ giờ, mô hình là','$T(t)=20+2t$',['$T(t)=22t$','$T(t)=20t+2$','$T(t)=20-2t$']],
      ['Một tài khoản có 500 nghìn đồng và mỗi tuần thêm 50 nghìn. Sau $n$ tuần số tiền là','$M(n)=500+50n$',['$M(n)=550n$','$M(n)=500n+50$','$M(n)=500-50n$']],
    ][v];
    return mk(r[0] as string,r[0] as string,r[1] as string,'Xác định giá trị ban đầu và tốc độ thay đổi để lập hàm bậc nhất.',r[2] as string[]);
  }

  if (tid === 'type-kntt-10-16-01' || tid === 'type-kntt-10-16-02') {
    const r=[
      ['$y=x^2-4x+3$','$(2,-1)$',['$(-2,-1)$','$(2,1)$','$(4,3)$']],
      ['$y=x^2+6x+5$','$(-3,-4)$',['$(3,-4)$','$(-3,4)$','$(-6,5)$']],
      ['$y=-x^2+2x+3$','$(1,4)$',['$(-1,4)$','$(1,3)$','$(2,3)$']],
      ['$y=2x^2-8x+5$','$(2,-3)$',['$(-2,-3)$','$(2,3)$','$(4,5)$']],
    ][v];
    const wording=tid.endsWith('01')?'Đỉnh của parabol':'Từ đồ thị parabol, tọa độ đỉnh là';
    return mk(`${wording} ${r[0]} là`,`The vertex of the parabola ${r[0]} is`,r[1] as string,'Dùng $x_I=-b/(2a)$ rồi tính $y_I$.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-16-03') {
    const r=[
      ['có hai nghiệm $1,3$ và hệ số $a=1$','$y=x^2-4x+3$',['$y=x^2+4x+3$','$y=x^2-3x+1$','$y=2x^2-8x+6$']],
      ['có đỉnh $I(2,-1)$ và hệ số $a=1$','$y=(x-2)^2-1$',['$y=(x+2)^2-1$','$y=(x-2)^2+1$','$y=x^2-2x-1$']],
      ['có hai nghiệm $-1,2$ và hệ số $a=1$','$y=x^2-x-2$',['$y=x^2+x-2$','$y=x^2-2x-1$','$y=x^2-3x+2$']],
      ['có đỉnh $I(-1,2)$ và hệ số $a=-1$','$y=-(x+1)^2+2$',['$y=(x+1)^2+2$','$y=-(x-1)^2+2$','$y=-(x+1)^2-2$']],
    ][v];
    return mk(`Hàm số bậc hai ${r[0]} là`,`The quadratic function that ${r[0]} is`,r[1] as string,'Dùng dạng nhân tử khi biết nghiệm hoặc dạng đỉnh khi biết đỉnh.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-16-04') {
    const r=[
      ['Một hình chữ nhật có chu vi 20 m. Diện tích lớn nhất bằng','25',['20','50','100']],
      ['Một hình chữ nhật có chu vi 24 m. Diện tích lớn nhất bằng','36',['24','48','144']],
      ['Một mảnh vườn sát tường dùng 20 m hàng rào cho ba cạnh. Diện tích lớn nhất bằng','50',['25','100','40']],
      ['Một mảnh vườn sát tường dùng 24 m hàng rào cho ba cạnh. Diện tích lớn nhất bằng','72',['36','144','48']],
    ][v];
    return mk(r[0] as string,r[0] as string,r[1] as string,'Lập hàm diện tích bậc hai theo một cạnh và tìm giá trị tại đỉnh parabol.',r[2] as string[]);
  }

  if (tid === 'type-kntt-10-17-01' || tid === 'type-kntt-10-17-02') {
    const r=[
      ['$x^2-5x+6<0$','$(2,3)$',['$(-\\infty,2)\\cup(3,+\\infty)$','$[2,3]$','$\\mathbb R$']],
      ['$x^2-x-6>0$','$(-\\infty,-2)\\cup(3,+\\infty)$',['$(-2,3)$','$[-2,3]$','$\\mathbb R$']],
      ['$x^2-4\\le0$','$[-2,2]$',['$(-2,2)$','$(-\\infty,-2]\\cup[2,+\\infty)$','$\\mathbb R$']],
      ['$-x^2+4x-3>0$','$(1,3)$',['$(-\\infty,1)\\cup(3,+\\infty)$','$[1,3]$','$\\mathbb R$']],
    ][v];
    const q=tid.endsWith('01')?'Khoảng mà tam thức thỏa điều kiện đã cho là':'Tập nghiệm của bất phương trình là';
    return mk(`${q}: ${r[0]}`,`${q}: ${r[0]}`,r[1] as string,'Tìm nghiệm của tam thức và xét dấu theo hệ số bậc hai.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-17-03') {
    const r=[
      ['$x^2+2mx+4>0$ với mọi $x$','$|m|<2$',['$|m|>2$','$m=2$','$m>0$']],
      ['$x^2+2mx+9>0$ với mọi $x$','$|m|<3$',['$|m|>3$','$m=3$','$m>0$']],
      ['$x^2-4mx+9>0$ với mọi $x$','$|m|<\\dfrac32$',['$|m|>\\dfrac32$','$m=3/2$','$m<0$']],
      ['$2x^2+2mx+2>0$ với mọi $x$','$|m|<2$',['$|m|>2$','$m=2$','$m>1$']],
    ][v];
    return mk(`Điều kiện của $m$ để ${r[0]} là`,`The condition on $m$ so that ${r[0]} is`,r[1] as string,'Vì hệ số bậc hai dương, cần biệt thức $\\Delta<0$.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-17-04') {
    const r=[
      ['$P(x)=-x^2+10x-16$','$(2,8)$',['$(-\\infty,2)\\cup(8,+\\infty)$','$[2,8]$','$x>8$']],
      ['$P(x)=-x^2+8x-12$','$(2,6)$',['$(-\\infty,2)\\cup(6,+\\infty)$','$[2,6]$','$x>6$']],
      ['$P(x)=-2x^2+12x-16$','$(2,4)$',['$(-\\infty,2)\\cup(4,+\\infty)$','$[2,4]$','$x>4$']],
      ['$P(x)=-x^2+12x-27$','$(3,9)$',['$(-\\infty,3)\\cup(9,+\\infty)$','$[3,9]$','$x>9$']],
    ][v];
    return mk(`Lợi nhuận (triệu đồng) theo sản lượng $x$ là ${r[0]}. Doanh nghiệp có lãi khi $x$ thuộc`,`Profit (million VND) is ${r[0]}. The business is profitable for $x$ in`,r[1] as string,'Doanh nghiệp có lãi khi $P(x)>0$; giải bất phương trình bậc hai.',r[2] as string[]);
  }

  if (tid === 'type-kntt-10-18-01') {
    const r=[
      ['$\\sqrt{x+1}=\\sqrt{2x-3}$','$x=4$',['$x=2$','$x=3$','$x=5$']],
      ['$\\sqrt{2x+1}=\\sqrt{x+5}$','$x=4$',['$x=3$','$x=5$','$x=6$']],
      ['$\\sqrt{3x-2}=\\sqrt{x+6}$','$x=4$',['$x=2$','$x=3$','$x=6$']],
      ['$\\sqrt{x+7}=\\sqrt{3x-1}$','$x=4$',['$x=1$','$x=3$','$x=7$']],
    ][v];
    return mk(`Nghiệm của ${r[0]} là`,`Solve ${r[0]}.`,r[1] as string,'Hai vế là căn bậc hai nên đặt các biểu thức dưới căn bằng nhau rồi kiểm tra điều kiện.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-18-02') {
    const r=[
      ['$\\sqrt{x+1}=x-1$','$x=3$',['$x=0$','$x=1$','$x=2$']],
      ['$\\sqrt{2x+3}=x$','$x=3$',['$x=-1$','$x=1$','$x=2$']],
      ['$\\sqrt{x+6}=x$','$x=3$',['$x=-2$','$x=2$','$x=6$']],
      ['$\\sqrt{3x+4}=x+2$','$x=0$ hoặc $x=-1$',['Chỉ $x=0$','Chỉ $x=-1$','$x=1$']],
    ][v];
    return mk(`Giải phương trình ${r[0]}.`,`Solve ${r[0]}.`,r[1] as string,'Cô lập căn, đặt điều kiện cho vế không chứa căn, bình phương rồi thử lại nghiệm.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-18-03') {
    const r=[
      ['$\\sqrt{x+1}=x-1$','$x=0$',['$x=3$','$x=1$','Không có nghiệm ngoại lai']],
      ['$\\sqrt{2x+3}=x$','$x=-1$',['$x=3$','$x=0$','Không có nghiệm ngoại lai']],
      ['$\\sqrt{x+6}=x$','$x=-2$',['$x=3$','$x=0$','Không có nghiệm ngoại lai']],
      ['$\\sqrt{x+4}=x-2$','$x=0$',['$x=5$','$x=2$','Không có nghiệm ngoại lai']],
    ][v];
    return mk(`Sau khi bình phương phương trình ${r[0]}, nghiệm nào cần loại do không thỏa phương trình gốc?`,`After squaring ${r[0]}, which candidate is extraneous?`,r[1] as string,'Thử từng nghiệm thu được vào phương trình gốc và kiểm tra điều kiện dấu.',r[2] as string[]);
  }

  if (tid === 'type-kntt-10-19-01') {
    const r=[
      ['$(1,2)$','$(2,-1)$','$x=1+2t,\\ y=2-t$',['$x=2+t,\\ y=-1+2t$','$x=1+t,\\ y=2+t$','$2x-y=0$']],
      ['$(0,-1)$','$(1,3)$','$x=t,\\ y=-1+3t$',['$x=1+t,\\ y=3-t$','$x=3t,\\ y=-1+t$','$x+y=0$']],
      ['$(-2,1)$','$(3,2)$','$x=-2+3t,\\ y=1+2t$',['$x=3-2t,\\ y=2+t$','$x=-2+t,\\ y=1+t$','$3x+2y=0$']],
      ['$(2,0)$','$(1,-2)$','$x=2+t,\\ y=-2t$',['$x=1+2t,\\ y=-2$','$x=2-t,\\ y=2t$','$x-2y=0$']],
    ][v];
    return mk(`Trong mặt phẳng $Oxy$, đường thẳng qua ${r[0]} và có vectơ chỉ phương ${r[1]} có phương trình tham số`,`In $Oxy$, the line through ${r[0]} with direction vector ${r[1]} has parametric equations`,r[2] as string,'Dùng $(x,y)=(x_0,y_0)+t(a,b)$.',r[3] as string[]);
  }
  if (tid === 'type-kntt-10-19-03') {
    const r=[
      ['qua $A(0,0)$ và $B(1,2)$','$2x-y=0$',['$x+2y=0$','$x-y=0$','$2x+y=0$']],
      ['qua $A(1,1)$ và song song với $x-2y+3=0$','$x-2y+1=0$',['$2x-y-1=0$','$x+2y-3=0$','$x-2y+3=0$']],
      ['qua $A(2,-1)$ và vuông góc với $x+y=0$','$x-y-3=0$',['$x+y-1=0$','$x-y+3=0$','$2x-y=0$']],
      ['qua $A(1,0)$ và $B(1,3)$','$x=1$',['$y=1$','$x=3$','$y=3$']],
    ][v];
    return mk(`Phương trình đường thẳng ${r[0]} là`,`The equation of the line ${r[0]} is`,r[1] as string,'Xác định vectơ chỉ phương/pháp tuyến từ điều kiện rồi dùng phương trình điểm–pháp tuyến.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-20-02') {
    const r=[
      ['$d_1:x=0$ và $d_2:y=0$','$90^\\circ$',['$0^\\circ$','$45^\\circ$','$60^\\circ$']],
      ['$d_1:y=x$ và $d_2:y=0$','$45^\\circ$',['$30^\\circ$','$60^\\circ$','$90^\\circ$']],
      ['$d_1:y=\\sqrt3x$ và $d_2:y=0$','$60^\\circ$',['$30^\\circ$','$45^\\circ$','$90^\\circ$']],
      ['$d_1:y=\\dfrac{x}{\\sqrt3}$ và $d_2:y=0$','$30^\\circ$',['$45^\\circ$','$60^\\circ$','$90^\\circ$']],
    ][v];
    return mk(`Góc nhọn giữa hai đường thẳng ${r[0]} bằng`,`The acute angle between ${r[0]} is`,r[1] as string,'Dùng hệ số góc hoặc góc giữa hai vectơ chỉ phương.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-20-04') {
    const r=[
      ['$d_1:x+y=0$ và $d_2:mx+y-1=0$ song song','$m=1$',['$m=-1$','$m=0$','$m=2$']],
      ['$d_1:x+y=0$ và $d_2:mx+y-1=0$ vuông góc','$m=-1$',['$m=1$','$m=0$','$m=2$']],
      ['$d_1:2x-y=0$ và $d_2:mx+2y+1=0$ song song','$m=-4$',['$m=4$','$m=-2$','$m=2$']],
      ['$d_1:x-2y=0$ và $d_2:2x+my+3=0$ vuông góc','$m=1$',['$m=-1$','$m=2$','$m=-2$']],
    ][v];
    return mk(`Giá trị của $m$ để ${r[0]} là`,`Find $m$ so that ${r[0]}.`,r[1] as string,'So sánh vectơ pháp tuyến/chỉ phương để dùng điều kiện song song hoặc vuông góc.',r[2] as string[]);
  }

  if (tid === 'type-kntt-10-21-01') {
    const r=[
      ['$(x-2)^2+(y+1)^2=9$','$I(2,-1),R=3$',['$I(-2,1),R=3$','$I(2,1),R=9$','$I(-2,-1),R=3$']],
      ['$(x+3)^2+(y-4)^2=16$','$I(-3,4),R=4$',['$I(3,-4),R=4$','$I(-3,4),R=16$','$I(3,4),R=4$']],
      ['$x^2+(y-2)^2=25$','$I(0,2),R=5$',['$I(0,-2),R=5$','$I(2,0),R=5$','$I(0,2),R=25$']],
      ['$(x-1)^2+y^2=4$','$I(1,0),R=2$',['$I(-1,0),R=2$','$I(1,0),R=4$','$I(0,1),R=2$']],
    ][v];
    return mk(`Đường tròn ${r[0]} có tâm và bán kính là`,`The circle ${r[0]} has center and radius`,r[1] as string,'So sánh với $(x-a)^2+(y-b)^2=R^2$.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-21-02') {
    const r=[
      ['$I(1,-2)$, $R=3$','$(x-1)^2+(y+2)^2=9$',['$(x+1)^2+(y-2)^2=9$','$(x-1)^2+(y+2)^2=3$','$x^2+y^2=9$']],
      ['$I(-2,3)$, $R=4$','$(x+2)^2+(y-3)^2=16$',['$(x-2)^2+(y+3)^2=16$','$(x+2)^2+(y-3)^2=4$','$x^2+y^2=16$']],
      ['$I(0,1)$, $R=2$','$x^2+(y-1)^2=4$',['$x^2+(y+1)^2=4$','$x^2+(y-1)^2=2$','$x^2+y^2=4$']],
      ['$I(3,0)$, $R=5$','$(x-3)^2+y^2=25$',['$(x+3)^2+y^2=25$','$(x-3)^2+y^2=5$','$x^2+y^2=25$']],
    ][v];
    return mk(`Phương trình đường tròn tâm ${r[0]} là`,`The equation of the circle with ${r[0]} is`,r[1] as string,'Dùng $(x-a)^2+(y-b)^2=R^2$.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-21-03') {
    const r=[
      ['$(1,0),(-1,0),(0,1)$','$x^2+y^2=1$',['$(x-1)^2+y^2=1$','$x^2+(y-1)^2=1$','$x^2+y^2=2$']],
      ['$(2,1),(0,1),(1,2)$','$(x-1)^2+(y-1)^2=1$',['$(x+1)^2+(y+1)^2=1$','$(x-1)^2+(y-1)^2=2$','$x^2+y^2=1$']],
      ['$(3,0),(1,0),(2,1)$','$(x-2)^2+y^2=1$',['$(x+2)^2+y^2=1$','$(x-2)^2+y^2=2$','$x^2+(y-2)^2=1$']],
      ['$(0,3),(0,1),(1,2)$','$x^2+(y-2)^2=1$',['$x^2+(y+2)^2=1$','$x^2+(y-2)^2=2$','$(x-2)^2+y^2=1$']],
    ][v];
    return mk(`Đường tròn đi qua ba điểm ${r[0]} có phương trình`,`The circle through ${r[0]} has equation`,r[1] as string,'Tìm tâm là điểm cách đều ba điểm rồi tính bán kính.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-21-04') {
    const r=[
      ['$x^2+y^2=25$ tại $A(3,4)$','$3x+4y=25$',['$4x+3y=25$','$3x+4y=5$','$x+y=7$']],
      ['$x^2+y^2=4$ tại $A(0,2)$','$y=2$',['$x=2$','$y=-2$','$x+y=2$']],
      ['$x^2+y^2=9$ tại $A(3,0)$','$x=3$',['$y=3$','$x=-3$','$x+y=3$']],
      ['$(x-1)^2+(y-1)^2=4$ tại $A(3,1)$','$x=3$',['$y=1$','$x=1$','$x+y=4$']],
    ][v];
    return mk(`Tiếp tuyến của đường tròn ${r[0]} là`,`The tangent to the circle ${r[0]} is`,r[1] as string,'Bán kính tại tiếp điểm vuông góc với tiếp tuyến.',r[2] as string[]);
  }

  if (tid === 'type-kntt-10-22-01') {
    const r=[
      ['$\\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1$','4',['3','5','16']],
      ['$\\dfrac{x^2}{16}+\\dfrac{y^2}{7}=1$','3',['7','4','$\\sqrt7$']],
      ['$\\dfrac{x^2}{36}+\\dfrac{y^2}{20}=1$','4',['2','6','$2\\sqrt5$']],
      ['$\\dfrac{x^2}{49}+\\dfrac{y^2}{24}=1$','5',['7','$2\\sqrt6$','25']],
    ][v];
    return mk(`Elip ${r[0]} có tiêu cự nửa $c$ bằng`,`For ellipse ${r[0]}, the focal parameter $c$ equals`,r[1] as string,'Với elip $c^2=a^2-b^2$.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-22-02') {
    const r=[
      ['$\\dfrac{x^2}{9}-\\dfrac{y^2}{16}=1$','5',['3','4','7']],
      ['$\\dfrac{x^2}{16}-\\dfrac{y^2}{9}=1$','5',['4','3','7']],
      ['$\\dfrac{x^2}{25}-\\dfrac{y^2}{11}=1$','6',['5','$\\sqrt{14}$','4']],
      ['$\\dfrac{x^2}{36}-\\dfrac{y^2}{13}=1$','7',['6','$\\sqrt{23}$','5']],
    ][v];
    return mk(`Hypebol ${r[0]} có $c$ bằng`,`For hyperbola ${r[0]}, $c$ equals`,r[1] as string,'Với hypebol $c^2=a^2+b^2$.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-22-03') {
    const r=[
      ['$y^2=8x$','$(2,0)$',['$(4,0)$','$(0,2)$','$(-2,0)$']],
      ['$y^2=12x$','$(3,0)$',['$(6,0)$','$(0,3)$','$(-3,0)$']],
      ['$x^2=16y$','$(0,4)$',['$(4,0)$','$(0,8)$','$(0,-4)$']],
      ['$x^2=-20y$','$(0,-5)$',['$(5,0)$','$(0,5)$','$(0,-10)$']],
    ][v];
    return mk(`Parabol ${r[0]} có tiêu điểm là`,`The focus of parabola ${r[0]} is`,r[1] as string,'So sánh với $y^2=4px$ hoặc $x^2=4py$.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-22-04') {
    const r=[
      ['$\\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1$','Hai tiêu điểm cách tâm 4 đơn vị',['3','5','9']],
      ['$y^2=8x$','Tiêu điểm là $(2,0)$',['$(4,0)$','$(0,2)$','$(-2,0)$']],
      ['$\\dfrac{x^2}{9}-\\dfrac{y^2}{16}=1$','Hai tiêu điểm cách tâm 5 đơn vị',['3','4','7']],
      ['$x^2=12y$','Đường chuẩn là $y=-3$',['$y=3$','$x=-3$','$x=3$']],
    ][v];
    return mk(`Khẳng định đúng về conic ${r[0]} là`,`The correct statement about conic ${r[0]} is`,r[1] as string,'Dùng công thức tiêu điểm/đường chuẩn của dạng chính tắc.',r[2] as string[]);
  }
  if (tid === 'type-kntt-10-22-05') {
    const r=[
      ['Một mái vòm elip có nửa trục lớn 5 m và nửa trục nhỏ 3 m. Khoảng cách từ tâm đến mỗi tiêu điểm là','4',['3','5','8']],
      ['Một chảo parabol có mặt cắt $y^2=16x$ (cm). Tiêu điểm cách đỉnh một khoảng','4',['2','8','16']],
      ['Một quỹ đạo hypebol có $a=3,b=4$. Khoảng cách từ tâm đến mỗi tiêu điểm là','5',['3','4','7']],
      ['Một gương parabol có mặt cắt $x^2=20y$ (cm). Tiêu điểm cách đỉnh','5',['4','10','20']],
    ][v];
    return mk(r[0] as string,r[0] as string,r[1] as string,'Dùng tham số tiêu điểm của elip, hypebol hoặc parabol phù hợp mô hình.',r[2] as string[]);
  }

  if (tid === 'type-kntt-11-03-01') {
    const r=[
      ['$y=\\sin x$','Tập giá trị là $[-1,1]$',['Chu kì là $\\pi$','Hàm lẻ: sai','Tập xác định là $[-1,1]$']],
      ['$y=\\cos x$','Hàm số chẵn',['Hàm số lẻ','Tập giá trị là $\\mathbb R$','Chu kì là $\\pi$']],
      ['$y=\\tan x$','Chu kì là $\\pi$',['Chu kì là $2\\pi$','Tập xác định là $\\mathbb R$','Hàm chẵn']],
      ['$y=2\\sin x$','Tập giá trị là $[-2,2]$',['Tập giá trị $[-1,1]$','Chu kì $\\pi$','Hàm chẵn']],
    ][v];
    return mk(`Với hàm số ${r[0]}, khẳng định đúng là`,`For ${r[0]}, the correct statement is`,r[1] as string,'Dùng các tính chất cơ bản về miền xác định, tập giá trị, tính chẵn lẻ và chu kì.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-03-02') {
    const r=[
      ['$y=\\sin x$','Đồ thị đi qua $(0,0)$',['Đi qua $(0,1)$','Không có nghiệm','Có giá trị lớn nhất 2']],
      ['$y=\\cos x$','Đồ thị đi qua $(0,1)$',['Đi qua $(0,0)$','Không có cực đại','Chu kì $\\pi$']],
      ['$y=\\tan x$','Đồ thị đi qua $(0,0)$',['Đi qua $(0,1)$','Có tập giá trị $[-1,1]$','Có chu kì $2\\pi$']],
      ['$y=2\\cos x$','Giá trị lớn nhất trên đồ thị là 2',['Giá trị lớn nhất 1','Giá trị nhỏ nhất 0','Tập giá trị $[-1,1]$']],
    ][v];
    return mk(`Từ đồ thị ${r[0]}, kết luận đúng là`,`From the graph of ${r[0]}, the correct conclusion is`,r[1] as string,'Dựa vào các điểm đặc trưng, biên độ và chu kì của đồ thị lượng giác.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-03-03') {
    const r=[
      ['$y=3\\sin(2x)$','Biên độ 3, chu kì $\\pi$',['Biên độ 2, chu kì $3\\pi$','Biên độ 3, chu kì $2\\pi$','Biên độ 1, chu kì $\\pi$']],
      ['$y=2\\cos(4x)$','Biên độ 2, chu kì $\\dfrac\\pi2$',['Biên độ 4, chu kì $2\\pi$','Biên độ 2, chu kì $4\\pi$','Biên độ 1, chu kì $\\pi$']],
      ['$y=\\sin(x-\\pi/3)$','Đồ thị $y=\\sin x$ tịnh tiến sang phải $\\pi/3$',['Sang trái $\\pi/3$','Lên $\\pi/3$','Co ngang 3 lần']],
      ['$y=1+2\\sin x$','Đường trung bình là $y=1$',['Đường trung bình $y=2$','Biên độ 1','Chu kì $\\pi$']],
    ][v];
    return mk(`Với ${r[0]}, mô tả đúng là`,`For ${r[0]}, the correct description is`,r[1] as string,'Dùng dạng $y=A\\sin(\\omega x+\\varphi)+d$ hoặc tương tự.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-03-04') {
    const r=[
      ['$h(t)=2+\\sin(\\pi t/6)$','12 giờ',['6 giờ','24 giờ','3 giờ']],
      ['$T(t)=25+5\\cos(\\pi t/12)$','24 giờ',['12 giờ','6 giờ','48 giờ']],
      ['$y(t)=3\\sin(2\\pi t)$','1 giây',['2 giây','$2\\pi$ giây','0,5 giây']],
      ['$H(t)=10+2\\cos(\\pi t/4)$','8 giờ',['4 giờ','16 giờ','2 giờ']],
    ][v];
    return mk(`Một hiện tượng tuần hoàn được mô hình bởi ${r[0]}. Chu kì là`,`A periodic phenomenon is modeled by ${r[0]}. Its period is`,r[1] as string,'Với $\\sin(\\omega t)$ hoặc $\\cos(\\omega t)$, chu kì $T=2\\pi/|\\omega|$.',r[2] as string[]);
  }

  if (tid === 'type-kntt-11-07-01') {
    const r=[
      [2,3,4,'54',['18','27','81']],
      [5,2,5,'80',['40','160','20']],
      [81,'$1/3$',4,'3',['9','1','27']],
      [3,-2,4,'-24',['24','-12','-48']],
    ][v];
    return mk(`Cấp số nhân có $u_1=${bareMath(String(r[0]))}$, công bội $q=${bareMath(String(r[1]))}$. $u_${bareMath(String(r[2]))}$ bằng`,`A geometric progression has $u_1=${bareMath(String(r[0]))}$, ratio $q=${bareMath(String(r[1]))}$. Find $u_${bareMath(String(r[2]))}$.`,r[3] as string,'Dùng $u_n=u_1q^{n-1}$.',r[4] as string[]);
  }
  if (tid === 'type-kntt-11-07-02') {
    const r=[
      [1,2,5,'31',['16','32','63']],
      [3,2,4,'45',['24','48','21']],
      [2,3,4,'80',['54','81','40']],
      [5,'$1/2$',3,'$35/4$',['$15/2$','10','$35/2$']],
    ][v];
    return mk(`Cấp số nhân có $u_1=${bareMath(String(r[0]))}$, $q=${bareMath(String(r[1]))}$. Tổng $S_${bareMath(String(r[2]))}$ bằng`,`A geometric progression has $u_1=${bareMath(String(r[0]))}$, $q=${bareMath(String(r[1]))}$. Find $S_${bareMath(String(r[2]))}$.`,r[3] as string,'Dùng $S_n=u_1\\dfrac{q^n-1}{q-1}$ khi $q\\ne1$.',r[4] as string[]);
  }
  if (tid === 'type-kntt-11-07-03') {
    const r=[
      ['$u_2=6,\\ u_4=54$','$(u_1,q)=(2,3)$',['$(3,2)$','$(2,2)$','$(6,3)$']],
      ['$u_2=10,\\ u_5=80$','$(u_1,q)=(5,2)$',['$(2,5)$','$(5,3)$','$(10,2)$']],
      ['$u_1=81,\\ u_3=9$','$q=\\pm\\dfrac13$',['$q=3$','$q=\\pm3$','$q=1/9$']],
      ['$u_2=-6,\\ u_4=-24$','$(u_1,q)=(-3,2)$ hoặc $(3,-2)$',['Chỉ $(-3,2)$','Chỉ $(3,-2)$','$(6,-1)$']],
    ][v];
    return mk(`Cho cấp số nhân thỏa ${r[0]}. Kết luận đúng là`,`A geometric progression satisfies ${r[0]}. The correct conclusion is`,r[1] as string,'Dùng $u_n=u_1q^{n-1}$ và chia các điều kiện để tìm $q$.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-07-04') {
    const r=[
      ['Gửi 10 triệu đồng với lãi kép 10%/năm. Sau 2 năm số tiền (triệu đồng) là','12.1',['12','11','21']],
      ['Một quần thể 1000 cá thể tăng 20% mỗi năm. Sau 2 năm có','1440',['1200','1400','1240']],
      ['Một chất còn 80% sau mỗi giờ. Từ 100 g, sau 2 giờ còn (g)','64',['80','60','40']],
      ['Một thiết bị trị giá 200 triệu, giảm 10% mỗi năm. Sau 2 năm còn (triệu)','162',['160','180','144']],
    ][v];
    return mk(r[0] as string,r[0] as string,r[1] as string,'Mô hình bằng cấp số nhân: giá trị sau $n$ chu kì bằng giá trị đầu nhân $q^n$.',r[2] as string[]);
  }

  if (tid === 'type-kntt-11-14-02') {
    const r=[
      ['Trong phép chiếu song song không suy biến, ba điểm thẳng hàng','vẫn thẳng hàng',['luôn thành ba điểm không thẳng hàng','luôn cách đều nhau','luôn tạo tam giác vuông']],
      ['Trong phép chiếu song song không suy biến, hai đường thẳng song song','có ảnh song song hoặc trùng nhau',['luôn vuông góc','luôn cắt nhau','luôn biến thành đường tròn']],
      ['Trung điểm của một đoạn thẳng qua phép chiếu song song không suy biến','biến thành trung điểm của đoạn ảnh',['biến thành một đầu mút','không được bảo toàn','luôn là tâm đường tròn']],
      ['Tỉ số của hai đoạn thẳng cùng nằm trên một đường thẳng qua phép chiếu song song không suy biến','được bảo toàn',['luôn đổi dấu','luôn bằng 1','không xác định']],
    ][v];
    return mk(`${r[0]} thì`,`${r[0]} then`,r[1] as string,'Phép chiếu song song là một phép biến đổi afin nên bảo toàn tính thẳng hàng, song song và tỉ số trên cùng đường thẳng.',r[2] as string[]);
  }

  if (tid === 'type-kntt-11-19-01') {
    const r=[
      ['$\\log_2 32$','5',['4','16','32']],
      ['$\\log_3 81$','4',['3','9','27']],
      ['$\\log_{10}0.01$','-2',['2','-1','0.01']],
      ['$\\log_5 125$','3',['5','25','2']],
    ][v];
    return mk(`${r[0]} bằng`,`${r[0]} equals`,r[1] as string,'Dùng định nghĩa $\\log_a b=c\\Leftrightarrow a^c=b$.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-19-02') {
    const r=[
      ['$\\log_2 8+\\log_2 4$','5',['6','12','2']],
      ['$\\log_3 27-\\log_3 3$','2',['3','1','9']],
      ['$2\\log_2 4$','4',['2','8','16']],
      ['$\\log_5(25\\cdot5)$','3',['2','5','125']],
    ][v];
    return mk(`${r[0]} bằng`,`${r[0]} equals`,r[1] as string,'Áp dụng quy tắc tích, thương và lũy thừa của lôgarit.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-19-03') {
    const r=[
      ['$\\dfrac{\\log 8}{\\log2}$','3',['2','4','8']],
      ['$\\dfrac{\\ln25}{\\ln5}$','2',['5','25','1/2']],
      ['$\\log_2 3\\cdot\\log_3 4$','2',['1','4','6']],
      ['$\\log_5 2\\cdot\\log_2 25$','2',['5','10','1']],
    ][v];
    return mk(`${r[0]} bằng`,`${r[0]} equals`,r[1] as string,'Dùng công thức đổi cơ số và tính chất $\\log_a b\\log_b c=\\log_a c$.',r[2] as string[]);
  }

  if (tid === 'type-kntt-11-20-01') {
    const r=[
      ['$y=2^x$','Đồng biến trên $\\mathbb R$',['Nghịch biến','Tập giá trị $\\mathbb R$','Không xác định tại 0']],
      ['$y=(1/2)^x$','Nghịch biến trên $\\mathbb R$',['Đồng biến','Tập giá trị $(-\\infty,0)$','Không có tiệm cận']],
      ['$y=3^x$','Tập giá trị $(0,+\\infty)$',['Tập giá trị $\\mathbb R$','Tập xác định $(0,+\\infty)$','Nghịch biến']],
      ['$y=5^x$','Đi qua điểm $(0,1)$',['Đi qua $(0,0)$','Nghịch biến','Có nghiệm $x=0$']],
    ][v];
    return mk(`Với hàm số mũ ${r[0]}, khẳng định đúng là`,`For exponential function ${r[0]}, the correct statement is`,r[1] as string,'Dùng tính chất hàm mũ với cơ số lớn hơn hoặc nhỏ hơn 1.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-20-02') {
    const r=[
      ['$y=\\log_2x$','Đồng biến trên $(0,+\\infty)$',['Nghịch biến','Tập xác định $\\mathbb R$','Tập giá trị $(0,+\\infty)$']],
      ['$y=\\log_{1/2}x$','Nghịch biến trên $(0,+\\infty)$',['Đồng biến','Tập xác định $\\mathbb R$','Không có tiệm cận']],
      ['$y=\\log_3x$','Tập giá trị là $\\mathbb R$',['Tập giá trị $(0,+\\infty)$','Tập xác định $\\mathbb R$','Nghịch biến']],
      ['$y=\\log_5x$','Đi qua $(1,0)$',['Đi qua $(0,1)$','Không có nghiệm','Nghịch biến']],
    ][v];
    return mk(`Với hàm số ${r[0]}, khẳng định đúng là`,`For ${r[0]}, the correct statement is`,r[1] as string,'Dùng tính chất hàm lôgarit và điều kiện $x>0$.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-20-03') {
    const r=[
      ['$y=2^{x-1}$','Đồ thị $y=2^x$ tịnh tiến sang phải 1 đơn vị',['Sang trái 1','Lên 1','Co dọc 2 lần']],
      ['$y=2^x+3$','Đồ thị $y=2^x$ tịnh tiến lên 3 đơn vị',['Xuống 3','Sang phải 3','Sang trái 3']],
      ['$y=\\log_2(x-1)$','Đồ thị $y=\\log_2x$ tịnh tiến sang phải 1',['Sang trái 1','Lên 1','Xuống 1']],
      ['$y=\\log_2x+2$','Đồ thị $y=\\log_2x$ tịnh tiến lên 2',['Xuống 2','Sang phải 2','Sang trái 2']],
    ][v];
    return mk(`Mô tả đúng về đồ thị ${r[0]} là`,`The correct description of graph ${r[0]} is`,r[1] as string,'Dùng quy tắc biến đổi đồ thị theo $x-h$ và cộng hằng số bên ngoài.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-20-04') {
    const r=[
      ['Một quần thể 1000 cá thể tăng 5% mỗi năm. Mô hình sau $t$ năm là','$P(t)=1000(1.05)^t$',['$1000+1.05t$','$1000(0.95)^t$','$1050t$']],
      ['Một chất 200 g giảm 10% mỗi giờ. Khối lượng sau $t$ giờ là','$M(t)=200(0.9)^t$',['$200(1.1)^t$','$200-0.9t$','$180t$']],
      ['Cường độ âm tăng gấp 10 lần thì mức dB tăng','10 dB',['1 dB','20 dB','100 dB']],
      ['Một khoản 50 triệu tăng 8% mỗi năm theo lãi kép. Sau $t$ năm là','$A(t)=50(1.08)^t$',['$50+1.08t$','$50(0.92)^t$','$54t$']],
    ][v];
    return mk(r[0] as string,r[0] as string,r[1] as string,'Dùng mô hình tăng/giảm theo hàm mũ hoặc định nghĩa thang lôgarit.',r[2] as string[]);
  }

  if (tid === 'type-kntt-11-21-01') {
    const r=[
      ['$2^{x+1}=16$','$x=3$',['$x=4$','$x=2$','$x=8$']],
      ['$3^{x-1}=9$','$x=3$',['$x=2$','$x=1$','$x=4$']],
      ['$5^{2x}=125$','$x=3/2$',['$x=3$','$x=1$','$x=5/2$']],
      ['$4^x=8$','$x=3/2$',['$x=2$','$x=1/2$','$x=3$']],
    ][v];
    return mk(`Nghiệm của ${r[0]} là`,`Solve ${r[0]}.`,r[1] as string,'Quy về cùng cơ số rồi so sánh số mũ.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-21-02') {
    const r=[
      ['$\\log_2(x-1)=3$','$x=9$',['$x=8$','$x=4$','$x=7$']],
      ['$\\log_3(x+1)=2$','$x=8$',['$x=9$','$x=2$','$x=10$']],
      ['$\\log_5(2x-1)=1$','$x=3$',['$x=2$','$x=5$','$x=1$']],
      ['$\\ln x=0$','$x=1$',['$x=0$','$x=e$','$x=-1$']],
    ][v];
    return mk(`Nghiệm của ${r[0]} là`,`Solve ${r[0]}.`,r[1] as string,'Đặt điều kiện biểu thức trong lôgarit dương rồi chuyển về dạng mũ.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-21-03') {
    const r=[
      ['$2^x>8$','$x>3$',['$x<3$','$x>8$','$x<8$']],
      ['$3^{x-1}\\le9$','$x\\le3$',['$x\\ge3$','$x\\le2$','$x>3$']],
      ['$(1/2)^x>4$','$x<-2$',['$x>-2$','$x<2$','$x>2$']],
      ['$5^{2x}<25$','$x<1$',['$x>1$','$x<2$','$x>2$']],
    ][v];
    return mk(`Tập nghiệm của ${r[0]} là`,`Solve ${r[0]}.`,r[1] as string,'Quy về cùng cơ số; chú ý chiều bất phương trình khi cơ số nằm giữa 0 và 1.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-21-04') {
    const r=[
      ['$\\log_2x>3$','$x>8$',['$0<x<8$','$x>3$','$x<8$']],
      ['$\\log_3(x-1)\\le2$','$1<x\\le10$',['$x\\le10$','$x>10$','$0<x\\le9$']],
      ['$\\log_{1/2}x>1$','$0<x<1/2$',['$x>1/2$','$0<x<2$','$x<0$']],
      ['$\\ln x\\ge0$','$x\\ge1$',['$0<x\\le1$','$x>0$','$x\\le0$']],
    ][v];
    return mk(`Tập nghiệm của ${r[0]} là`,`Solve ${r[0]}.`,r[1] as string,'Kết hợp điều kiện xác định với tính đơn điệu của hàm lôgarit.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-21-05') {
    const r=[
      ['Một khoản tiền tăng gấp đôi sau mỗi 5 năm. Sau 15 năm tăng gấp','8 lần',['2 lần','4 lần','6 lần']],
      ['Một quần thể tăng 10% mỗi năm. Hệ số tăng sau 2 năm là','1.21',['1.2','1.1','2']],
      ['Một chất phóng xạ còn một nửa sau mỗi 3 giờ. Sau 6 giờ còn','25%',['50%','75%','12.5%']],
      ['Thang pH cho $pH=-\\log_{10}[H^+]$. Nếu $[H^+]=10^{-4}$ thì pH bằng','4',['-4','10','0.0001']],
    ][v];
    return mk(r[0] as string,r[0] as string,r[1] as string,'Lập phương trình mũ hoặc lôgarit từ mô hình thực tế rồi tính.',r[2] as string[]);
  }

  if (tid === 'type-kntt-11-24-03') {
    const r=[
      ['Một con dốc cao 3 m trên đoạn chiếu ngang 4 m. $\\tan\\alpha$ của góc dốc bằng','$3/4$',['$4/3$','$3/5$','$4/5$']],
      ['Một mái dốc cao 5 m, hình chiếu ngang 5 m. Góc dốc bằng','$45^\\circ$',['$30^\\circ$','$60^\\circ$','$90^\\circ$']],
      ['Một đường dốc có góc $30^\\circ$ và hình chiếu ngang $6\\sqrt3$ m. Độ cao bằng','6',['3','$6\\sqrt3$','12']],
      ['Một dây cáp dài 10 m tạo góc $60^\\circ$ với mặt đất. Hình chiếu ngang dài','5',['$5\\sqrt3$','10','$10\\sqrt3$']],
    ][v];
    return mk(r[0] as string,r[0] as string,r[1] as string,'Mô hình tam giác vuông bằng độ cao, hình chiếu và góc nghiêng.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-25-02') {
    const r=[
      ['Trong hình lập phương, góc nhị diện giữa hai mặt kề nhau bằng','$90^\\circ$',['$45^\\circ$','$60^\\circ$','$120^\\circ$']],
      ['Hai mặt phẳng vuông góc tạo góc nhị diện bằng','$90^\\circ$',['$0^\\circ$','$45^\\circ$','$180^\\circ$']],
      ['Hai mặt phẳng song song có góc giữa hai mặt phẳng bằng','$0^\\circ$',['$30^\\circ$','$60^\\circ$','$90^\\circ$']],
      ['Một lăng trụ đứng có mặt bên vuông góc với đáy. Góc nhị diện giữa mặt bên và đáy bằng','$90^\\circ$',['$30^\\circ$','$45^\\circ$','$60^\\circ$']],
    ][v];
    return mk(r[0] as string,r[0] as string,r[1] as string,'Dùng góc giữa hai mặt phẳng, đo bởi hai đường thẳng cùng vuông góc giao tuyến.',r[2] as string[]);
  }
  if (tid === 'type-kntt-11-26-01') {
    const r=[
      ['$M(1,2,3)$','$x+2y+2z-3=0$','$8/3$',['8','$4/3$','3']],
      ['$M(0,0,0)$','$2x-y+2z-6=0$','2',['6','3','$2/3$']],
      ['$M(1,0,0)$','$x+y+z-4=0$','$\\sqrt3$',['3','$1/\\sqrt3$','4']],
      ['$M(0,2,0)$','$2x+2y+z-1=0$','1',['3','$1/3$','2']],
    ][v];
    return mk(`Khoảng cách từ ${r[0]} đến mặt phẳng ${r[1]} bằng`,`The distance from ${r[0]} to plane ${r[1]} equals`,r[2] as string,'Dùng công thức khoảng cách từ điểm đến mặt phẳng.',r[3] as string[]);
  }
  if (tid === 'type-kntt-11-27-01') {
    const r=[
      [12,6,'24',['72','36','18']],
      [15,9,'45',['135','30','60']],
      [20,3,'20',['60','10','30']],
      [18,4,'24',['72','18','36']],
    ][v];
    return mk(`Khối chóp có diện tích đáy ${r[0]} và chiều cao ${r[1]}. Thể tích bằng`,`A pyramid has base area ${r[0]} and height ${r[1]}. Its volume is`,r[2] as string,'Dùng $V=\\dfrac13Sh$.',r[3] as string[]);
  }
  if (tid === 'type-kntt-11-27-02') {
    const r=[
      [10,7,'70',['35','17','$70/3$']],
      [12,5,'60',['30','17','20']],
      [8,9,'72',['36','17','24']],
      [15,4,'60',['30','19','20']],
    ][v];
    return mk(`Khối lăng trụ có diện tích đáy ${r[0]} và chiều cao ${r[1]}. Thể tích bằng`,`A prism has base area ${r[0]} and height ${r[1]}. Its volume is`,r[2] as string,'Dùng $V=Sh$.',r[3] as string[]);
  }
  if (tid === 'type-kntt-11-27-04') {
    const r=[
      ['Một bể dạng hộp chữ nhật kích thước $2\\times3\\times4$ m. Thể tích là','24',['9','12','18']],
      ['Một lều dạng lăng trụ tam giác có diện tích đáy 6 m² và dài 5 m. Thể tích là','30',['11','15','60']],
      ['Một mái chóp có diện tích đáy 30 m² và chiều cao 6 m. Thể tích là','60',['180','36','90']],
      ['Một thùng dạng lăng trụ có diện tích đáy 2.5 m² và cao 4 m. Thể tích là','10',['6.5','5','20']],
    ][v];
    return mk(r[0] as string,r[0] as string,r[1] as string,'Chọn công thức thể tích phù hợp với khối chóp, lăng trụ hoặc hộp.',r[2] as string[]);
  }

  if (tid === 'type-kntt-12-02-01') {
    const r=[
      ['$f(x)=x^2-2x+5$ trên $[0,3]$','4',['5','8','3']],
      ['$f(x)=x^2-4x+7$ trên $[0,5]$','3',['7','12','2']],
      ['$f(x)=-x^2+4x+1$ trên $[0,4]$','1',['5','4','9']],
      ['$f(x)=x^2+2x+2$ trên $[-2,1]$','1',['2','5','0']],
    ][v];
    return mk(`Giá trị nhỏ nhất/lớn nhất thích hợp của ${r[0]} theo yêu cầu: giá trị nhỏ nhất là`,`For ${r[0]}, the minimum value is`,r[1] as string,'Tính đạo hàm, xét điểm tới hạn và hai đầu mút đoạn.',r[2] as string[]);
  }
  if (tid === 'type-kntt-12-02-02') {
    const r=[
      ['$f(x)=x+\\dfrac1x$ trên $(0,+\\infty)$','2',['1','0','$+\\infty$']],
      ['$f(x)=x^2+\\dfrac4{x^2}$ với $x\\ne0$','4',['2','8','0']],
      ['$f(x)=e^x-x$ trên $\\mathbb R$','1',['0','e','$-1$']],
      ['$f(x)=x^2-6x+10$ trên $\\mathbb R$','1',['10','3','-1']],
    ][v];
    return mk(`Giá trị nhỏ nhất của ${r[0]} là`,`The minimum value of ${r[0]} is`,r[1] as string,'Tìm điểm tới hạn trên miền xác định và xét hành vi ở biên/vô cực nếu cần.',r[2] as string[]);
  }
  if (tid === 'type-kntt-12-02-03') {
    const r=[
      ['$f_m(x)=x^2-2mx+5$ có giá trị nhỏ nhất bằng 1','$m=\\pm2$',['$m=2$','$m=\\pm1$','$m=4$']],
      ['$f_m(x)=x^2-2mx+10$ có giá trị nhỏ nhất bằng 1','$m=\\pm3$',['$m=3$','$m=\\pm9$','$m=1$']],
      ['$f_m(x)=x^2-4mx+17$ có giá trị nhỏ nhất bằng 1','$m=\\pm2$',['$m=2$','$m=\\pm4$','$m=1$']],
      ['$f_m(x)=x^2-6mx+10$ có giá trị nhỏ nhất bằng 1','$m=\\pm1$',['$m=1$','$m=\\pm3$','$m=3$']],
    ][v];
    return mk(`Điều kiện ${r[0]}. Giá trị $m$ là`,`If ${r[0]}, then $m$ is`,r[1] as string,'Hoàn thành bình phương để biểu diễn giá trị nhỏ nhất theo $m$, rồi giải phương trình.',r[2] as string[]);
  }
  if (tid === 'type-kntt-12-02-04') {
    const r=[
      ['Một hình chữ nhật có chu vi 40 m. Diện tích lớn nhất là','100',['80','160','400']],
      ['Một hộp không nắp đáy vuông có tổng diện tích vật liệu cố định; bài toán tối ưu được giải bằng','tìm cực trị của hàm thể tích',['chỉ dùng định lí Pythagore','dùng xác suất','không cần hàm số']],
      ['Một cửa hàng bán $x$ sản phẩm với lợi nhuận $P(x)=-x^2+20x$. Lợi nhuận lớn nhất là','100',['20','200','400']],
      ['Một mảnh đất sát sông dùng 60 m hàng rào cho ba cạnh. Diện tích lớn nhất là','450',['900','225','600']],
    ][v];
    return mk(r[0] as string,r[0] as string,r[1] as string,'Lập hàm mục tiêu theo một biến và tìm giá trị lớn nhất/nhỏ nhất bằng đạo hàm.',r[2] as string[]);
  }
  if (tid === 'type-kntt-12-04-04') {
    const r=[
      ['$x^2=m$ với $m>0$','2',['0','1','3']],
      ['$x^2=m$ với $m=0$','1',['0','2','3']],
      ['$x^2=m$ với $m<0$','0',['1','2','Vô số']],
      ['$|x|=m$ với $m>0$','2',['0','1','3']],
    ][v];
    return mk(`Dựa vào giao điểm của các đồ thị, số nghiệm thực của ${r[0]} là`,`Using graph intersections, the number of real solutions of ${r[0]} is`,r[1] as string,'Số nghiệm là số giao điểm giữa đồ thị hai vế của phương trình.',r[2] as string[]);
  }

  if (tid === 'type-kntt-12-14-02') {
    const r=[
      ['qua $A(1,0,0)$, $B(0,1,0)$, $C(0,0,1)$','$x+y+z-1=0$',['$x+y+z=0$','$x-y+z-1=0$','$x+y-z+1=0$']],
      ['qua $A(1,2,3)$ và song song với $(Q):2x-y+z=0$','$2x-y+z-3=0$',['$2x-y+z=0$','$x-2y+z=0$','$2x+y+z-3=0$']],
      ['qua $A(0,0,2)$ và vuông góc với đường thẳng có vectơ chỉ phương $(1,2,2)$','$x+2y+2z-4=0$',['$x+2y+2z=0$','$2x+y+2z-4=0$','$x+y+z-2=0$']],
      ['qua $A(1,-1,0)$ và có vectơ pháp tuyến $(3,1,-2)$','$3x+y-2z-2=0$',['$3x+y-2z=0$','$x+3y-2z+2=0$','$3x-y+2z-4=0$']],
    ][v];
    return mk(`Trong $Oxyz$, mặt phẳng ${r[0]} có phương trình`,`In $Oxyz$, the plane ${r[0]} has equation`,r[1] as string,'Xác định vectơ pháp tuyến và thay tọa độ một điểm để tìm hằng số.',r[2] as string[]);
  }
  if (tid === 'type-kntt-12-14-03') {
    const r=[
      ['$M(1,2,3)$ và $(P):x+2y+2z-3=0$','Khoảng cách bằng $8/3$',['Điểm thuộc mặt phẳng','Khoảng cách bằng 8','Khoảng cách bằng 3']],
      ['$(P):x+y+z=0$ và $(Q):2x+2y+2z-3=0$','Hai mặt phẳng song song',['Hai mặt phẳng cắt nhau','Hai mặt phẳng trùng nhau','Hai mặt phẳng vuông góc']],
      ['$(P):x+y+z=0$ và $(Q):x-y=0$','Hai mặt phẳng cắt nhau',['Song song','Trùng nhau','Không xác định']],
      ['$M(0,0,0)$ và $(P):2x-y+2z-6=0$','Khoảng cách bằng 2',['Khoảng cách bằng 6','Điểm thuộc mặt phẳng','Khoảng cách bằng 3']],
    ][v];
    return mk(`Trong $Oxyz$, với ${r[0]}, kết luận đúng là`,`In $Oxyz$, for ${r[0]}, the correct conclusion is`,r[1] as string,'So sánh vectơ pháp tuyến để xét vị trí; dùng công thức khoảng cách nếu có điểm và mặt phẳng.',r[2] as string[]);
  }

  return null;
}


function directSample(type: MathType, family: ExerciseFamily, variant: number): Sample {
  const t = normalize(type.title_vi);

  const tid = type.id;
  const semanticFix = semanticExactTypeSample(type, variant);
  if (semanticFix) return semanticFix;
  const duplicateFix = remainingDuplicateFixSample(tid, variant);
  if (duplicateFix) return duplicateFix;

  // Exact curriculum-type templates for lessons that are especially sensitive to
  // formula/routing errors. These branches deliberately precede family fallbacks.
  // Additional exact-type repairs found by the full-bank duplicate/semantic audit.
  if (tid === 'type-kntt-10-12-01') {
    const rows=[
      {vi:'Làm tròn số $3.14159$ đến hàng phần trăm được',en:'Round $3.14159$ to the nearest hundredth.',ans:'3.14',w:['3.15','3.141','3.142']},
      {vi:'Làm tròn số $12.746$ đến hàng phần mười được',en:'Round $12.746$ to the nearest tenth.',ans:'12.7',w:['12.8','12.74','12.75']},
      {vi:'Làm tròn $2587$ đến hàng trăm được',en:'Round $2587$ to the nearest hundred.',ans:'2600',w:['2500','2590','2580']},
      {vi:'Làm tròn $0.07846$ đến hàng phần nghìn được',en:'Round $0.07846$ to the nearest thousandth.',ans:'0.078',w:['0.079','0.0785','0.08']},
    ][variant%4]; return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Xét chữ số ngay sau hàng cần làm tròn.',solutionEn:'Inspect the digit immediately after the requested place.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-10-12-02') {
    const rows=[
      {vi:'Giá trị đúng là 100, số gần đúng là 98. Sai số tuyệt đối bằng',en:'True value is 100 and approximation is 98. Find the absolute error.',ans:'2',w:['98','0.02','102']},
      {vi:'Giá trị đúng là 50, số gần đúng là 49.5. Sai số tuyệt đối bằng',en:'True value is 50 and approximation is 49.5. Find the absolute error.',ans:'0.5',w:['1','49.5','0.01']},
      {vi:'Giá trị đúng là 20, số gần đúng là 20.4. Sai số tuyệt đối bằng',en:'True value is 20 and approximation is 20.4. Find the absolute error.',ans:'0.4',w:['0.2','20.4','2%']},
      {vi:'Giá trị đúng là 80, số gần đúng là 78. Sai số tương đối bằng',en:'True value is 80 and approximation is 78. Find the relative error.',ans:'2.5%',w:['2%','2','5%']},
    ][variant%4]; return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng sai số tuyệt đối $|a-\\bar a|$; sai số tương đối bằng sai số tuyệt đối chia giá trị đúng.',solutionEn:'Use absolute error and divide by the true value for relative error.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-10-12-03') {
    const rows=[
      {a:'10',e:'0.2',ans:'$[9.8,10.2]$',w:['$[9.8,10]$','$[10,10.2]$','$[9.6,10.4]$']},
      {a:'25',e:'0.5',ans:'$[24.5,25.5]$',w:['$[24,26]$','$[25,25.5]$','$[24.5,25]$']},
      {a:'100',e:'2',ans:'$[98,102]$',w:['$[99,101]$','$[96,104]$','$[100,102]$']},
      {a:'3.5',e:'0.05',ans:'$[3.45,3.55]$',w:['$[3.4,3.6]$','$[3.45,3.5]$','$[3.5,3.55]$']},
    ][variant%4]; return {vi:`Một phép đo cho giá trị ${rows.a} với sai số tuyệt đối không quá ${rows.e}. Giá trị đúng thuộc khoảng`,en:`A measurement is ${rows.a} with absolute error at most ${rows.e}. The true value lies in`,answer:rows.ans,solutionVi:`Khoảng hợp lí là $[${rows.a}-${rows.e};${rows.a}+${rows.e}]$.`,solutionEn:'Use approximation plus/minus the error bound.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-10-13-01') {
    const rows=[
      {data:'$2,4,5,7,7$',ans:'5',w:['4','5.5','7']},{data:'$1,3,5,7$',ans:'4',w:['3','5','4.5']},{data:'$2,2,4,8$',ans:'4',w:['2','5','6']},{data:'$10,12,14$',ans:'12',w:['10','13','14']},
    ][variant%4]; return {vi:`Số trung bình của mẫu ${rows.data} bằng`,en:`The mean of ${rows.data} is`,answer:rows.ans,solutionVi:'Cộng các giá trị rồi chia cho số phần tử.',solutionEn:'Sum the observations and divide by the number of observations.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-10-13-03') {
    const rows=[
      {data:'$2,3,3,4,5,5,5,6$',ans:'5',w:['3','4','6']},{data:'$1,1,2,3,4$',ans:'1',w:['2','3','4']},{data:'$7,8,8,8,9,9$',ans:'8',w:['7','9','Không có']},{data:'$2,4,4,5,5,5,6$',ans:'5',w:['4','6','2']},
    ][variant%4]; return {vi:`Mốt của mẫu ${rows.data} bằng`,en:`The mode of ${rows.data} is`,answer:rows.ans,solutionVi:'Mốt là giá trị có tần số lớn nhất.',solutionEn:'The mode is the most frequent value.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-10-14-02') {
    const rows=[
      {vi:'Mẫu $1,1,3,3$ có trung bình 2. Phương sai (chia cho $n$) bằng',en:'Sample $1,1,3,3$ has mean 2. Its variance (dividing by $n$) is',ans:'1',w:['2','4','0']},
      {vi:'Mẫu $0,2$ có trung bình 1. Độ lệch chuẩn bằng',en:'Sample $0,2$ has mean 1. Its standard deviation is',ans:'1',w:['2','$\\sqrt2$','0.5']},
      {vi:'Mẫu $2,2,6,6$ có trung bình 4. Phương sai bằng',en:'Sample $2,2,6,6$ has mean 4. Its variance is',ans:'4',w:['2','8','16']},
      {vi:'Mẫu $1,3,5,7$ có trung bình 4. Phương sai bằng',en:'Sample $1,3,5,7$ has mean 4. Its variance is',ans:'5',w:['4','10','$\\sqrt5$']},
    ][variant%4]; return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Tính trung bình bình phương độ lệch; độ lệch chuẩn là căn bậc hai của phương sai.',solutionEn:'Compute the average squared deviation; standard deviation is the square root of variance.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-10-14-03') {
    const rows=[
      {A:'$0,10$',B:'$3,7$',ans:'Mẫu A',w:['Mẫu B','Như nhau','Không đủ dữ kiện']},
      {A:'$2,4,6$',B:'$0,4,8$',ans:'Mẫu B',w:['Mẫu A','Như nhau','Không đủ dữ kiện']},
      {A:'$1,2,3$',B:'$10,11,12$',ans:'Như nhau',w:['Mẫu A','Mẫu B','Không đủ dữ kiện']},
      {A:'$5,5,5$',B:'$4,5,6$',ans:'Mẫu B',w:['Mẫu A','Như nhau','Không đủ dữ kiện']},
    ][variant%4]; return {vi:`So sánh theo khoảng biến thiên: mẫu A ${rows.A}, mẫu B ${rows.B}. Mẫu phân tán hơn là`,en:`Compare by range: sample A ${rows.A}, sample B ${rows.B}. The more dispersed sample is`,answer:rows.ans,solutionVi:'Tính max trừ min của từng mẫu rồi so sánh.',solutionEn:'Compute max minus min for each sample and compare.',options:[[rows.ans,rows.ans==='Mẫu A'?'Sample A':rows.ans==='Mẫu B'?'Sample B':'Equal',true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-09-04') {
    const rows=[
      {vi:'Dữ liệu thu nhập $5,5,6,6,100$ có một ngoại lệ rất lớn. Số đặc trưng phù hợp hơn để mô tả xu thế trung tâm là',en:'Income data $5,5,6,6,100$ has a large outlier. The more robust center is',ans:'Trung vị',w:['Số trung bình','Khoảng biến thiên','Phương sai']},
      {vi:'Mẫu $1,2,2,2,9$ cần nêu giá trị xuất hiện nhiều nhất. Số đặc trưng cần dùng là',en:'For $1,2,2,2,9$, which statistic identifies the most frequent value?',ans:'Mốt',w:['Trung vị','Số trung bình','Độ lệch chuẩn']},
      {vi:'Mẫu đối xứng $1,2,3,4,5$ có số trung bình bằng',en:'The symmetric sample $1,2,3,4,5$ has mean',ans:'3',w:['2','4','5']},
      {vi:'Mẫu đã sắp xếp $2,4,6,8$ có trung vị bằng',en:'The ordered sample $2,4,6,8$ has median',ans:'5',w:['4','6','20']},
    ][variant%4]; return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Chọn hoặc tính đúng số đặc trưng xu thế trung tâm theo yêu cầu.',solutionEn:'Choose or compute the appropriate measure of central tendency.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-12-10-03') {
    const rows=[
      {a:'2',b:'5',ans:'Phương án A',w:['Phương án B','Rủi ro như nhau','Không so sánh được']},
      {a:'6',b:'3',ans:'Phương án B',w:['Phương án A','Rủi ro như nhau','Không so sánh được']},
      {a:'4',b:'4',ans:'Rủi ro như nhau',w:['Phương án A','Phương án B','Không so sánh được']},
      {a:'1.5',b:'2.5',ans:'Phương án A',w:['Phương án B','Rủi ro như nhau','Không so sánh được']},
    ][variant%4]; return {vi:`Hai phương án có cùng lợi nhuận trung bình; độ lệch chuẩn lần lượt là ${rows.a} và ${rows.b}. Phương án ít rủi ro hơn là`,en:`Two choices have the same mean return; their standard deviations are ${rows.a} and ${rows.b}. The less risky choice is`,answer:rows.ans,solutionVi:'Với cùng trung bình, độ lệch chuẩn nhỏ hơn biểu thị mức biến động/rủi ro thấp hơn.',solutionEn:'With equal means, the smaller standard deviation indicates lower variability/risk.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }

  if (tid === 'type-kntt-11-17-01') {
    const rows=[
      {f:'$f(x)=\\begin{cases}x+1,&x<1\\\\2x,&x\\ge1\\end{cases}$',x:'1',ans:'Có',w:['Không','Chỉ liên tục trái','Chỉ liên tục phải']},
      {f:'$f(x)=\\begin{cases}x^2,&x<2\\\\x+2,&x\\ge2\\end{cases}$',x:'2',ans:'Có',w:['Không','Chỉ liên tục trái','Chỉ liên tục phải']},
      {f:'$f(x)=\\begin{cases}x,&x<0\\\\x+1,&x\\ge0\\end{cases}$',x:'0',ans:'Không',w:['Có','Chỉ do không xác định','Luôn liên tục']},
      {f:'$f(x)=\\begin{cases}\\dfrac{\\sin x}{x},&x\\ne0\\\\1,&x=0\\end{cases}$',x:'0',ans:'Có',w:['Không','Chỉ liên tục trái','Chỉ liên tục phải']},
    ][variant%4]; return {vi:`Cho ${rows.f}. Hàm số có liên tục tại $x=${rows.x}$ không?`,en:`Given ${rows.f}, is the function continuous at $x=${rows.x}$?`,answer:rows.ans,solutionVi:'So sánh giới hạn hai phía với giá trị hàm tại điểm xét.',solutionEn:'Compare the two-sided limit with the function value.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-17-02') {
    const rows=[
      {f:'$f(x)=\\begin{cases}x+1,&x<1\\\\a,&x=1\\\\2x,&x>1\\end{cases}$',x:'1',ans:'2',w:['1','0','3']},
      {f:'$f(x)=\\begin{cases}2x,&x<2\\\\a,&x=2\\\\x+2,&x>2\\end{cases}$',x:'2',ans:'4',w:['2','3','6']},
      {f:'$f(x)=\\begin{cases}x^2,&x<3\\\\a,&x=3\\\\3x,&x>3\\end{cases}$',x:'3',ans:'9',w:['3','6','12']},
      {f:'$f(x)=\\begin{cases}\\dfrac{\\sin x}{x},&x\\ne0\\\\a,&x=0\\end{cases}$',x:'0',ans:'1',w:['0','-1','5']},
    ][variant%4]; return {vi:`Cho ${rows.f}. Giá trị $a$ để hàm liên tục tại $x=${rows.x}$ là`,en:`Given ${rows.f}, find $a$ so the function is continuous at $x=${rows.x}$.`,answer:rows.ans,solutionVi:'Đặt giá trị tại điểm bằng giới hạn hai phía.',solutionEn:'Set the point value equal to the two-sided limit.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-17-03') {
    const rows=[
      {vi:'Hàm $f(x)=x^2-2$ liên tục trên $[0,2]$, $f(0)<0<f(2)$. Kết luận đúng là',en:'$f(x)=x^2-2$ is continuous on $[0,2]$ and $f(0)<0<f(2)$. The correct conclusion is',ans:'Có ít nhất một nghiệm trong $(0,2)$',w:['Không có nghiệm','Có đúng hai nghiệm trong $(0,2)$','Hàm gián đoạn']},
      {vi:'Hàm $f(x)=x^3-x-1$ liên tục trên $[1,2]$ và $f(1)f(2)<0$. Theo định lí giá trị trung gian',en:'$f(x)=x^3-x-1$ is continuous on $[1,2]$ with $f(1)f(2)<0$. By the intermediate value theorem',ans:'Có ít nhất một nghiệm trong $(1,2)$',w:['Không có nghiệm','Hàm không liên tục','Mọi điểm đều là nghiệm']},
      {vi:'Nếu hàm $f$ liên tục trên $[a,b]$ và $f(a)f(b)<0$ thì',en:'If $f$ is continuous on $[a,b]$ and $f(a)f(b)<0$, then',ans:'Tồn tại $c\\in(a,b)$ sao cho $f(c)=0$',w:['$f$ không có nghiệm','$f$ luôn dương','$f$ luôn âm']},
      {vi:'Hàm đa thức $f(x)=x^4+1$ trên $[-1,1]$ có tính chất',en:'The polynomial $f(x)=x^4+1$ on $[-1,1]$ is',ans:'Liên tục',w:['Gián đoạn tại 0','Không xác định tại 0','Chỉ liên tục bên trái']},
    ][variant%4]; return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng tính liên tục và định lí giá trị trung gian khi có đổi dấu.',solutionEn:'Use continuity and the intermediate value theorem when endpoint signs differ.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-33-01') {
    const rows=[
      {f:'$f(x)=x^3-2x^2+x$',ans:'$6x-4$',w:['$3x^2-4x+1$','$6x-2$','$3x-4$']},
      {f:'$f(x)=x^4+3x^2$',ans:'$12x^2+6$',w:['$4x^3+6x$','$12x+6$','$12x^2$']},
      {f:'$f(x)=e^x+x^2$',ans:'$e^x+2$',w:['$e^x+2x$','$e^x$','$2$']},
      {f:'$f(x)=\\sin x$',ans:'$-\\sin x$',w:['$\\cos x$','$-\\cos x$','$\\sin x$']},
    ][variant%4]; return {vi:`Đạo hàm cấp hai của ${rows.f} là`,en:`The second derivative of ${rows.f} is`,answer:rows.ans,solutionVi:'Lấy đạo hàm hai lần.',solutionEn:'Differentiate twice.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-33-02') {
    const rows=[
      {s:'$s(t)=t^3-3t^2+2t$',time:'2',ans:'6',w:['2','8','0']},
      {s:'$s(t)=2t^3+t$',time:'1',ans:'12',w:['6','13','4']},
      {s:'$s(t)=t^4$',time:'1',ans:'12',w:['4','6','24']},
      {s:'$s(t)=3t^2+2t$',time:'5',ans:'6',w:['32','30','8']},
    ][variant%4]; return {vi:`Vật chuyển động theo ${rows.s}. Gia tốc tại $t=${rows.time}$ bằng`,en:`A particle has position ${rows.s}. Its acceleration at $t=${rows.time}$ is`,answer:rows.ans,solutionVi:'Gia tốc $a(t)=s\\prime\\prime(t)$ rồi thay thời điểm.',solutionEn:'Acceleration is $a(t)=s\\prime\\prime(t)$; substitute the given time.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-33-03') {
    const rows=[
      {f:'$f(x)=x^2$',at:'mọi $x$',ans:'$f\\prime\\prime(x)>0$',w:['$f\\prime\\prime(x)<0$','$f\\prime\\prime(x)=0$','Không xác định']},
      {f:'$f(x)=-x^2$',at:'mọi $x$',ans:'$f\\prime\\prime(x)<0$',w:['$f\\prime\\prime(x)>0$','$f\\prime\\prime(x)=0$','Không xác định']},
      {f:'$f(x)=x^3$',at:'$x=1$',ans:'$f\\prime\\prime(1)>0$',w:['$f\\prime\\prime(1)<0$','$f\\prime\\prime(1)=0$','Không tồn tại']},
      {f:'$f(x)=x^4$',at:'$x=0$',ans:'$f\\prime\\prime(0)=0$',w:['$f\\prime\\prime(0)>0$','$f\\prime\\prime(0)<0$','Không tồn tại']},
    ][variant%4]; return {vi:`Cho ${rows.f}. Tại ${rows.at}, mệnh đề đúng là`,en:`Given ${rows.f}. At ${rows.at}, the correct statement is`,answer:rows.ans,solutionVi:'Tính đạo hàm cấp hai và xét dấu tại điểm/miền được hỏi.',solutionEn:'Compute the second derivative and inspect its sign.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-12-03-03') {
    const rows=[
      {f:'$y=\\dfrac{x^2+2x+3}{x+1}$',ans:'$y=x+1$',w:['$y=x-1$','$y=2x+1$','$x=-1$']},
      {f:'$y=\\dfrac{x^2-x+2}{x-2}$',ans:'$y=x+1$',w:['$y=x-1$','$y=x+2$','$x=2$']},
      {f:'$y=\\dfrac{2x^2+3x+1}{x+1}$',ans:'$y=2x+1$',w:['$y=2x-1$','$y=x+1$','$x=-1$']},
      {f:'$y=\\dfrac{x^2+1}{x-1}$',ans:'$y=x+1$',w:['$y=x-1$','$y=1$','$x=1$']},
    ][variant%4]; return {vi:`Đồ thị ${rows.f} có tiệm cận xiên là`,en:`The graph ${rows.f} has oblique asymptote`,answer:rows.ans,solutionVi:'Chia đa thức tử cho mẫu; phần thương bậc nhất là tiệm cận xiên.',solutionEn:'Polynomial division gives a linear quotient; that line is the oblique asymptote.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }

  if (tid === 'type-kntt-11-01-03') {
    const rows = [
      {vi:'Cho $\\sin\\alpha=\\dfrac35$ và $\\dfrac\\pi2<\\alpha<\\pi$. Giá trị $\\cos\\alpha$ bằng',en:'Given $\\sin\\alpha=\\dfrac35$ and $\\dfrac\\pi2<\\alpha<\\pi$, find $\\cos\\alpha$.',ans:'$-\\dfrac45$',w:['$\\dfrac45$','$-\\dfrac35$','$\\dfrac34$'],sol:'Dùng $\\sin^2\\alpha+\\cos^2\\alpha=1$ và dấu của cosin ở góc phần tư II.'},
      {vi:'Biết $\\tan\\alpha=2$. Giá trị $\\dfrac{1}{\\cos^2\\alpha}$ bằng',en:'Given $\\tan\\alpha=2$, find $\\dfrac{1}{\\cos^2\\alpha}$.',ans:'5',w:['3','4','$\\dfrac15$'],sol:'Dùng $1+\\tan^2\\alpha=\\dfrac1{\\cos^2\\alpha}$.'},
      {vi:'Cho $\\sin\\alpha=\\dfrac{12}{13}$ và $0<\\alpha<\\dfrac\\pi2$. Giá trị $\\tan\\alpha$ bằng',en:'Given $\\sin\\alpha=\\dfrac{12}{13}$ and $0<\\alpha<\\dfrac\\pi2$, find $\\tan\\alpha$.',ans:'$\\dfrac{12}{5}$',w:['$\\dfrac5{12}$','$-\\dfrac{12}{5}$','$\\dfrac{13}{5}$'],sol:'Suy ra $\\cos\\alpha=5/13$, rồi $\\tan\\alpha=\\sin\\alpha/\\cos\\alpha$.'},
      {vi:'Cho $\\cos\\alpha=-\\dfrac5{13}$ và $\\pi<\\alpha<\\dfrac{3\\pi}{2}$. Giá trị $\\tan\\alpha$ bằng',en:'Given $\\cos\\alpha=-\\dfrac5{13}$ and $\\pi<\\alpha<\\dfrac{3\\pi}{2}$, find $\\tan\\alpha$.',ans:'$\\dfrac{12}{5}$',w:['$-\\dfrac{12}{5}$','$\\dfrac5{12}$','$-\\dfrac5{12}$'],sol:'Ở góc phần tư III, $\\sin\\alpha=-12/13$, nên $\\tan\\alpha=12/5$.'},
    ][variant%4];
    return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:rows.sol,solutionEn:rows.sol,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-05-02') {
    const rows = [
      {seq:'$u_n=2n+1$',ans:'Tăng',reason:'$u_{n+1}-u_n=2>0$'},
      {seq:'$u_n=5-n$',ans:'Giảm',reason:'$u_{n+1}-u_n=-1<0$'},
      {seq:'$u_n=\\dfrac1n$',ans:'Giảm',reason:'$u_{n+1}-u_n=-\\dfrac1{n(n+1)}<0$'},
      {seq:'$u_n=\\dfrac{n}{n+1}$',ans:'Tăng',reason:'$u_{n+1}-u_n=\\dfrac1{(n+1)(n+2)}>0$'},
    ][variant%4];
    const wrong=rows.ans==='Tăng'?['Giảm','Không đổi','Không đơn điệu']:['Tăng','Không đổi','Không đơn điệu'];
    return {vi:`Cho dãy $(u_n)$ với ${rows.seq}. Dãy số là`,en:`For the sequence $(u_n)$ with ${rows.seq}, the sequence is`,answer:rows.ans,solutionVi:`${rows.reason} với mọi $n\\ge1$, nên dãy ${rows.ans.toLowerCase()}.`,solutionEn:`${rows.reason} for every $n\\ge1$, so the sequence is ${rows.ans==='Tăng'?'increasing':'decreasing'}.`,options:[[rows.ans,rows.ans==='Tăng'?'Increasing':'Decreasing',true],[wrong[0],wrong[0],false],[wrong[1],wrong[1],false],[wrong[2],wrong[2],false]]};
  }
  if (tid === 'type-kntt-11-06-02') {
    const rows=[
      {u1:2,d:3,n:5,ans:'40',w:['35','45','70']},
      {u1:1,d:2,n:10,ans:'100',w:['90','110','81']},
      {u1:5,d:-1,n:6,ans:'15',w:['18','21','10']},
      {u1:-2,d:4,n:5,ans:'30',w:['20','25','40']},
    ][variant%4];
    return {vi:`Cấp số cộng có $u_1=${rows.u1}$, $d=${rows.d}$. Tổng $S_${rows.n}$ bằng`,en:`An arithmetic progression has $u_1=${rows.u1}$ and $d=${rows.d}$. Find $S_${rows.n}$.`,answer:rows.ans,solutionVi:`$S_n=\\dfrac n2[2u_1+(n-1)d]$, suy ra $S_${rows.n}=${rows.ans}$.`,solutionEn:`Use $S_n=\\dfrac n2[2u_1+(n-1)d]$ to get $S_${rows.n}=${rows.ans}$.`,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-06-03') {
    const rows=[
      {cond:'$u_2=5,\\ u_5=14$',ans:'$(u_1,d)=(2,3)$',w:['$(5,3)$','$(2,4)$','$(3,2)$']},
      {cond:'$u_3=7,\\ u_7=19$',ans:'$(u_1,d)=(1,3)$',w:['$(1,4)$','$(3,1)$','$(4,3)$']},
      {cond:'$u_2=7,\\ u_6=19$',ans:'$(u_1,d)=(4,3)$',w:['$(3,4)$','$(4,2)$','$(7,3)$']},
      {cond:'$u_4=11,\\ u_9=26$',ans:'$(u_1,d)=(2,3)$',w:['$(3,2)$','$(2,5)$','$(5,3)$']},
    ][variant%4];
    return {vi:`Cho cấp số cộng $(u_n)$ thỏa ${rows.cond}. Khi đó`,en:`An arithmetic progression $(u_n)$ satisfies ${rows.cond}. Then`,answer:rows.ans,solutionVi:'Dùng $u_n=u_1+(n-1)d$ để lập hệ hai phương trình và giải.',solutionEn:'Use $u_n=u_1+(n-1)d$ to form and solve two equations.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-06-04') {
    const rows=[
      {vi:'Một khán đài có hàng đầu 20 ghế, mỗi hàng sau nhiều hơn hàng trước 2 ghế. Hàng thứ 10 có bao nhiêu ghế?',en:'The first row of a stand has 20 seats and each next row has 2 more seats. How many seats are in row 10?',ans:'38',w:['36','40','42'],sol:'$u_{10}=20+9\\cdot2=38$.'},
      {vi:'Tháng đầu một bạn tiết kiệm 500 nghìn đồng, mỗi tháng sau tăng thêm 100 nghìn đồng. Tháng thứ 12 bạn tiết kiệm bao nhiêu nghìn đồng?',en:'A student saves 500 thousand VND in month 1 and increases the monthly amount by 100 thousand VND. How much is saved in month 12 (thousand VND)?',ans:'1600',w:['1500','1700','1200'],sol:'$u_{12}=500+11\\cdot100=1600$.'},
      {vi:'Một cách xếp vật có tầng đầu 15 vật, mỗi tầng sau thêm 3 vật. Tầng thứ 8 có bao nhiêu vật?',en:'A stack has 15 objects on the first level and 3 more on each next level. How many objects are on level 8?',ans:'36',w:['33','39','24'],sol:'$u_8=15+7\\cdot3=36$.'},
      {vi:'Một hội trường có 20 hàng ghế; hàng đầu 18 ghế, mỗi hàng sau thêm 2 ghế. Tổng số ghế là',en:'An auditorium has 20 rows; the first has 18 seats and each next row has 2 more. Find the total number of seats.',ans:'740',w:['720','760','380'],sol:'$S_{20}=\\dfrac{20}{2}[2\\cdot18+19\\cdot2]=740$.'},
    ][variant%4];
    return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:rows.sol,solutionEn:rows.sol,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-15-01') {
    const rows=[
      {expr:'$\\lim_{n\\to\\infty}\\dfrac{2n+1}{n+3}$',ans:'2',w:['0','1','$+\\infty$']},
      {expr:'$\\lim_{n\\to\\infty}\\dfrac1n$',ans:'0',w:['1','-1','$+\\infty$']},
      {expr:'$\\lim_{n\\to\\infty}\\dfrac{3n^2-1}{n^2+2}$',ans:'3',w:['0','1','2']},
      {expr:'$\\lim_{n\\to\\infty}\\dfrac{5n-4}{2n+1}$',ans:'$\\dfrac52$',w:['$\\dfrac25$','5','2']},
    ][variant%4];
    return {vi:`Giá trị ${rows.expr} bằng`,en:`The value of ${rows.expr} is`,answer:rows.ans,solutionVi:'Chia tử và mẫu cho lũy thừa bậc cao nhất của $n$ rồi lấy giới hạn.',solutionEn:'Divide by the highest power of $n$ and take the limit.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-15-02') {
    const rows=[
      {expr:'$\\lim_{n\\to\\infty}\\left(\\dfrac23\\right)^n$',ans:'0',w:['1','$\\dfrac23$','$+\\infty$']},
      {expr:'$\\lim_{n\\to\\infty}\\dfrac{2^n+3^n}{3^n}$',ans:'1',w:['0','2','3']},
      {expr:'$\\lim_{n\\to\\infty}(\\sqrt{n^2+n}-n)$',ans:'$\\dfrac12$',w:['0','1','$+\\infty$']},
      {expr:'$\\lim_{n\\to\\infty}\\dfrac{n^2}{\\sqrt{n^4+n^2}}$',ans:'1',w:['0','$\\dfrac12$','$+\\infty$']},
    ][variant%4];
    return {vi:`Giá trị ${rows.expr} bằng`,en:`The value of ${rows.expr} is`,answer:rows.ans,solutionVi:'Biến đổi theo dạng lũy thừa/căn/phân thức rồi dùng các giới hạn cơ bản.',solutionEn:'Simplify the powers, radicals, or rational expression and use basic limits.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-15-03') {
    const rows=[
      {vi:'Tổng của cấp số nhân lùi vô hạn $1+\\dfrac12+\\dfrac14+\\cdots$ bằng',en:'The infinite geometric sum $1+\\dfrac12+\\dfrac14+\\cdots$ equals',ans:'2',w:['1','$\\dfrac32$','4'],sol:'$S=\\dfrac{1}{1-1/2}=2$.'},
      {vi:'Tổng $3+1+\\dfrac13+\\dfrac19+\\cdots$ bằng',en:'The sum $3+1+\\dfrac13+\\dfrac19+\\cdots$ equals',ans:'$\\dfrac92$',w:['4','5','$\\dfrac32$'],sol:'$S=\\dfrac3{1-1/3}=\\dfrac92$.'},
      {vi:'Một quả bóng rơi từ độ cao 8 m; sau mỗi lần chạm đất nó nảy lên bằng một nửa độ cao trước. Tổng quãng đường đi được đến khi dừng là',en:'A ball is dropped from 8 m and rebounds to half the preceding height. Find the total distance traveled.',ans:'24',w:['16','20','32'],sol:'$8+2(4+2+1+\\cdots)=8+16=24$.'},
      {vi:'Chu vi một hình đầu tiên là 16; mỗi hình sau có chu vi bằng một nửa hình trước. Tổng chu vi của vô hạn hình bằng',en:'The first figure has perimeter 16 and each next perimeter is half the previous one. Find the infinite total.',ans:'32',w:['16','24','64'],sol:'$S=\\dfrac{16}{1-1/2}=32$.'},
    ][variant%4];
    return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:rows.sol,solutionEn:rows.sol,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-16-04') {
    const rows=[
      {f:'$f(x)=\\begin{cases}x+1,&x<1\\\\2x,&x\\ge1\\end{cases}$',at:'1',ans:'2',w:['1','3','Không tồn tại']},
      {f:'$f(x)=\\begin{cases}x^2,&x\\le2\\\\4,&x>2\\end{cases}$',at:'2',ans:'4',w:['2','0','Không tồn tại']},
      {f:'$f(x)=\\begin{cases}0,&x<0\\\\1,&x\\ge0\\end{cases}$',at:'0',ans:'Không tồn tại',w:['0','1','$\\dfrac12$']},
      {f:'$f(x)=\\begin{cases}\\dfrac{\\sin x}{x},&x\\ne0\\\\5,&x=0\\end{cases}$',at:'0',ans:'1',w:['0','5','Không tồn tại']},
    ][variant%4];
    return {vi:`Cho ${rows.f}. Giá trị $\\lim_{x\\to${rows.at}}f(x)$ bằng`,en:`Given ${rows.f}, find $\\lim_{x\\to${rows.at}}f(x)$.`,answer:rows.ans,solutionVi:'Tính giới hạn trái và giới hạn phải từ từng nhánh; giới hạn tồn tại khi hai giá trị bằng nhau.',solutionEn:'Compute the left- and right-hand limits from the relevant branches.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-18-01') {
    const rows=[
      {expr:'$27^{2/3}$',ans:'9',w:['6','18','3']},
      {expr:'$16^{-1/2}$',ans:'$\\dfrac14$',w:['4','$-\\dfrac14$','$\\dfrac18$']},
      {expr:'$81^{3/4}$',ans:'27',w:['9','12','243']},
      {expr:'$32^{2/5}$',ans:'4',w:['2','8','16']},
    ][variant%4];
    return {vi:`Giá trị ${rows.expr} bằng`,en:`The value of ${rows.expr} is`,answer:rows.ans,solutionVi:'Dùng $a^{m/n}=(\\sqrt[n]{a})^m$ và $a^{-r}=1/a^r$.',solutionEn:'Use $a^{m/n}=(\\sqrt[n]{a})^m$ and $a^{-r}=1/a^r$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-11-18-03') {
    const rows=[
      {expr:'$8^{2/3}$',ans:'4',w:['2','8','16']},
      {expr:'$27^{-1/3}$',ans:'$\\dfrac13$',w:['3','$-\\dfrac13$','$\\dfrac19$']},
      {expr:'$4^{3/2}$',ans:'8',w:['6','4','16']},
      {expr:'$16^{3/4}$',ans:'8',w:['4','12','64']},
    ][variant%4];
    return {vi:`Rút gọn ${rows.expr}, ta được`,en:`Simplify ${rows.expr}.`,answer:rows.ans,solutionVi:'Đổi số mũ hữu tỉ về căn và lũy thừa rồi rút gọn.',solutionEn:'Rewrite the rational exponent using radicals and simplify.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-12-09-03') {
    const rows=[
      {A:['[0;10)','[10;20)','[20;30)'],B:['[0;20)','[20;40)','[40;60)'],ans:'Mẫu B',w:['Mẫu A','Hai mẫu như nhau','Không đủ dữ kiện']},
      {A:['[10;20)','[20;30)','[30;40)'],B:['[15;20)','[20;25)','[25;30)'],ans:'Mẫu A',w:['Mẫu B','Hai mẫu như nhau','Không đủ dữ kiện']},
      {A:['[0;5)','[5;10)','[10;15)'],B:['[0;10)','[10;20)','[20;30)'],ans:'Mẫu B',w:['Mẫu A','Hai mẫu như nhau','Không đủ dữ kiện']},
      {A:['[20;30)','[30;40)','[40;50)'],B:['[0;30)','[30;60)','[60;90)'],ans:'Mẫu B',w:['Mẫu A','Hai mẫu như nhau','Không đủ dữ kiện']},
    ][variant%4];
    const ta=`$$\\begin{array}{c|ccc}\\text{Mẫu A}&${rows.A.join('&')}\\\\\\hline\\text{Tần số}&2&4&2\\end{array}$$`;
    const tb=`$$\\begin{array}{c|ccc}\\text{Mẫu B}&${rows.B.join('&')}\\\\\\hline\\text{Tần số}&2&4&2\\end{array}$$`;
    return {vi:`Cho hai mẫu ghép nhóm ${ta} ${tb} Xét theo khoảng biến thiên, mẫu nào phân tán hơn?`,en:`Given two grouped samples ${ta} ${tb} Which sample is more dispersed by range?`,answer:rows.ans,solutionVi:'So sánh cận trên lớp cuối trừ cận dưới lớp đầu của mỗi mẫu.',solutionEn:'Compare the upper bound of the last class minus the lower bound of the first class.',options:[[rows.ans,rows.ans==='Mẫu A'?'Sample A':'Sample B',true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-12-13-02') {
    const rows=[
      {vi:'Diện tích hình phẳng giới hạn bởi $y=x$ và $y=x^2$ trên $[0,1]$ bằng',en:'The area between $y=x$ and $y=x^2$ on $[0,1]$ is',ans:'$\\dfrac16$',w:['$\\dfrac12$','$\\dfrac13$','1'],sol:'$S=\\int_0^1(x-x^2)\\,dx=1/6$.'},
      {vi:'Diện tích hình phẳng giới hạn bởi $y=2x$ và $y=x^2$ trên $[0,2]$ bằng',en:'The area between $y=2x$ and $y=x^2$ on $[0,2]$ is',ans:'$\\dfrac43$',w:['2','$\\dfrac23$','$\\dfrac83$'],sol:'$S=\\int_0^2(2x-x^2)\\,dx=4/3$.'},
      {vi:'Diện tích hình phẳng giới hạn bởi $y=4$ và $y=x^2$ từ $x=-2$ đến $x=2$ bằng',en:'The area between $y=4$ and $y=x^2$ from $x=-2$ to $x=2$ is',ans:'$\\dfrac{32}{3}$',w:['8','$\\dfrac{16}{3}$','16'],sol:'$S=\\int_{-2}^2(4-x^2)\\,dx=32/3$.'},
      {vi:'Diện tích hình phẳng giới hạn bởi $y=x+2$ và $y=x^2$ giữa hai giao điểm bằng',en:'The area enclosed by $y=x+2$ and $y=x^2$ is',ans:'$\\dfrac92$',w:['3','6','$\\dfrac32$'],sol:'Hai giao điểm có hoành độ $-1,2$; $S=\\int_{-1}^2(-x^2+x+2)\\,dx=9/2$.'},
    ][variant%4];
    return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:rows.sol,solutionEn:rows.sol,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-12-13-04') {
    const rows=[
      {vi:'Mặt cắt một khu vườn được mô hình bởi miền dưới $y=4-x^2$ từ $x=-2$ đến $x=2$ (đơn vị mét). Diện tích khu vực bằng',en:'A garden cross-section is modeled by the region under $y=4-x^2$ for $-2\\le x\\le2$ meters. Find its area.',ans:'$\\dfrac{32}{3}$',w:['8','16','$\\dfrac{16}{3}$']},
      {vi:'Mặt cắt một máng có chiều cao $y=2x-x^2$ trên $0\\le x\\le2$ (m). Diện tích mặt cắt bằng',en:'A channel cross-section has height $y=2x-x^2$ for $0\\le x\\le2$ m. Find its cross-sectional area.',ans:'$\\dfrac43$',w:['2','$\\dfrac23$','$\\dfrac83$']},
      {vi:'Một mảng trang trí được giới hạn bởi $y=x$ và $y=x^2$ trên $0\\le x\\le1$ (m). Diện tích bằng',en:'A decorative region lies between $y=x$ and $y=x^2$ for $0\\le x\\le1$ m. Find its area.',ans:'$\\dfrac16$',w:['$\\dfrac12$','$\\dfrac13$','1']},
      {vi:'Tiết diện đất đắp có độ cao $y=3-x$ trên $0\\le x\\le3$ (m). Diện tích tiết diện bằng',en:'An embankment cross-section has height $y=3-x$ for $0\\le x\\le3$ m. Find its area.',ans:'$\\dfrac92$',w:['3','6','$\\dfrac32$']},
    ][variant%4];
    return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Lập tích phân diện tích theo mô hình đã cho và tính trên khoảng xác định.',solutionEn:'Set up and evaluate the area integral from the model.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-12-17-03') {
    const rows=[
      {vi:'Mặt cầu $x^2+y^2+z^2=25$ cắt mặt phẳng $z=3$ theo đường tròn có bán kính bằng',en:'The sphere $x^2+y^2+z^2=25$ meets the plane $z=3$ in a circle. Its radius is',ans:'4',w:['3','5','2'],sol:'Khoảng cách từ tâm đến mặt phẳng là 3, nên $r=\\sqrt{5^2-3^2}=4$.'},
      {vi:'Mặt cầu $(x-1)^2+y^2+z^2=9$ cắt mặt phẳng $x=1$ theo đường tròn có bán kính bằng',en:'The sphere $(x-1)^2+y^2+z^2=9$ meets plane $x=1$ in a circle. Its radius is',ans:'3',w:['1','2','9'],sol:'Mặt phẳng đi qua tâm, nên đường tròn giao tuyến có bán kính bằng bán kính mặt cầu: 3.'},
      {vi:'Đường thẳng $d:\ y=0,\\ z=0$ cắt mặt cầu $x^2+y^2+z^2=4$ tại bao nhiêu điểm?',en:'How many intersection points are there between line $d:\ y=0,\\ z=0$ and sphere $x^2+y^2+z^2=4$?',ans:'2',w:['0','1','4'],sol:'Thay $y=z=0$ được $x^2=4$, nên $x=\\pm2$: có 2 giao điểm.'},
      {vi:'Mặt phẳng $z=4$ và mặt cầu $x^2+y^2+z^2=9$ có bao nhiêu điểm chung?',en:'How many common points do plane $z=4$ and sphere $x^2+y^2+z^2=9$ have?',ans:'0',w:['1','2','Vô số'],sol:'Khoảng cách từ tâm đến mặt phẳng là 4 lớn hơn bán kính 3, nên không giao nhau.'},
    ][variant%4];
    return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:rows.sol,solutionEn:rows.sol,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }
  if (tid === 'type-kntt-12-17-04') {
    const rows=[
      {vi:'Mặt cầu tâm $O(0,0,0)$ đi qua $A(1,2,2)$. Bán kính bằng',en:'A sphere centered at $O(0,0,0)$ passes through $A(1,2,2)$. Its radius is',ans:'3',w:['2','$\\sqrt5$','9']},
      {vi:'Vùng phủ sóng radar là mặt cầu tâm $I(0,0,2)$ bán kính 5. Phương trình mặt cầu là',en:'A radar coverage region is a sphere centered at $I(0,0,2)$ with radius 5. Its equation is',ans:'$x^2+y^2+(z-2)^2=25$',w:['$x^2+y^2+(z+2)^2=25$','$x^2+y^2+(z-2)^2=5$','$x^2+y^2+z^2=25$']},
      {vi:'Mặt cầu $(x-1)^2+(y+2)^2+(z-m)^2=25$ đi qua $P(1,-2,8)$ và $m<8$. Giá trị $m$ bằng',en:'Sphere $(x-1)^2+(y+2)^2+(z-m)^2=25$ passes through $P(1,-2,8)$ and $m<8$. Find $m$.',ans:'3',w:['13','5','8']},
      {vi:'Một bong bóng hình cầu có đường kính với hai đầu $A(0,0,0)$ và $B(0,0,6)$. Bán kính bằng',en:'A spherical bubble has diameter endpoints $A(0,0,0)$ and $B(0,0,6)$. Its radius is',ans:'3',w:['6','2','9']},
    ][variant%4];
    return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng tọa độ tâm, khoảng cách và dạng chuẩn của phương trình mặt cầu.',solutionEn:'Use the center, distance formula, and standard sphere equation.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }

  // ---------------- CALCULUS: các dạng người dùng kiểm tra nhiều nhất ----------------
  if (family === 'calculus') {
    if (hasAny(t,['tích phân bằng đổi biến'])) {
      const rows=[
        {vi:'$\\int_0^1 2xe^{x^2}\\,dx$ bằng',en:'$\\int_0^1 2xe^{x^2}\\,dx$ equals',ans:'$e-1$',w:['$e$','1','$2e-2$']},
        {vi:'$\\int_0^1 2x(x^2+1)^2\\,dx$ bằng',en:'$\\int_0^1 2x(x^2+1)^2\\,dx$ equals',ans:'$7/3$',w:['$1/3$','$8/3$','3']},
        {vi:'$\\int_0^1(2x+1)^2\\,dx$ bằng',en:'$\\int_0^1(2x+1)^2\\,dx$ equals',ans:'$13/3$',w:['$7/3$','4','$9/2$']},
        {vi:'$\\int_0^1(x+1)^3\\,dx$ bằng',en:'$\\int_0^1(x+1)^3\\,dx$ equals',ans:'$15/4$',w:['$7/4$','4','$3/2$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Chọn phép đổi biến thích hợp, đổi cận rồi tính tích phân.',solutionEn:'Choose a suitable substitution, transform the bounds, then integrate.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tích phân bằng từng phần'])) {
      const rows=[
        {vi:'$\\int_0^1 xe^x\\,dx$ bằng',en:'$\\int_0^1 xe^x\\,dx$ equals',ans:'1',w:['$e-1$','$e$','0']},
        {vi:'$\\int_0^1 x\\cos x\\,dx$ bằng',en:'$\\int_0^1 x\\cos x\\,dx$ equals',ans:'$\\sin1+\\cos1-1$',w:['$\\sin1-\\cos1$','$1-\\cos1$','$\\sin1$']},
        {vi:'$\\int_0^1 xe^{2x}\\,dx$ bằng',en:'$\\int_0^1 xe^{2x}\\,dx$ equals',ans:'$\\dfrac{e^2+1}{4}$',w:['$\\dfrac{e^2-1}{2}$','$\\dfrac{e^2}{4}$','$e^2-1$']},
        {vi:'$\\int_0^1 x\\sin x\\,dx$ bằng',en:'$\\int_0^1 x\\sin x\\,dx$ equals',ans:'$\\sin1-\\cos1$',w:['$\\sin1+\\cos1$','$1-\\cos1$','$\\cos1-\\sin1$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Đặt $u$ và $dv$, rồi dùng công thức tích phân từng phần.',solutionEn:'Choose $u$ and $dv$ and apply integration by parts.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
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
      if (hasAny(t,['lượng giác'])) {
        const rows=[
          {f:'$\\cos x$',ans:'$\\sin x$',w:['$-\\sin x$','$\\cos x$','$-\\cos x$']},
          {f:'$\\sin x$',ans:'$-\\cos x$',w:['$\\cos x$','$\\sin x$','$-\\sin x$']},
          {f:'$2\\cos x$',ans:'$2\\sin x$',w:['$\\sin x$','$-2\\sin x$','$2\\cos x$']},
          {f:'$3\\sin x$',ans:'$-3\\cos x$',w:['$3\\cos x$','$-\\cos x$','$3\\sin x$']},
        ][variant%4];
        return {vi:`Một nguyên hàm của $f(x)=${rows.f.replace(/^\$|\$$/g,'')}$ là`,en:`An antiderivative of $f(x)=${rows.f.replace(/^\$|\$$/g,'')}$ is`,answer:rows.ans,solutionVi:'Kiểm tra bằng cách lấy đạo hàm phương án.',solutionEn:'Differentiate the candidate antiderivative.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
      }
      if (hasAny(t,['đổi biến'])) {
        const rows=[
          {vi:'Với $u=x^2$, $\\int_0^1 2xe^{x^2}dx$ bằng',en:'Using $u=x^2$, $\\int_0^1 2xe^{x^2}dx$ equals',ans:'$e-1$',w:['$e$','1','$2e-2$']},
          {vi:'Với $u=x^2+1$, $\\int_0^1 2x(x^2+1)^2dx$ bằng',en:'Using $u=x^2+1$, $\\int_0^1 2x(x^2+1)^2dx$ equals',ans:'$7/3$',w:['$1/3$','$8/3$','3']},
          {vi:'Với $u=2x+1$, $\\int_0^1(2x+1)^2dx$ bằng',en:'Using $u=2x+1$, $\\int_0^1(2x+1)^2dx$ equals',ans:'$13/3$',w:['$7/3$','4','$9/2$']},
          {vi:'Với $u=x+1$, $\\int_0^1(x+1)^3dx$ bằng',en:'Using $u=x+1$, $\\int_0^1(x+1)^3dx$ equals',ans:'$15/4$',w:['$7/4$','4','$3/2$']},
        ][variant%4];
        return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Đổi biến, đổi cận rồi tính tích phân theo biến mới.',solutionEn:'Substitute, transform the bounds, and integrate.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
      }
      if (hasAny(t,['từng phần'])) {
        const rows=[
          {vi:'$\\int_0^1xe^x\\,dx$ bằng',en:'$\\int_0^1xe^x\\,dx$ equals',ans:'1',w:['$e-1$','$e$','0']},
          {vi:'$\\int_0^1x\\,dx$ bằng',en:'$\\int_0^1x\\,dx$ equals',ans:'$1/2$',w:['1','0','2']},
          {vi:'$\\int_0^1(x+1)\\,dx$ bằng',en:'$\\int_0^1(x+1)\\,dx$ equals',ans:'$3/2$',w:['1','2','$1/2$']},
          {vi:'$\\int_0^1 2x\\,dx$ bằng',en:'$\\int_0^1 2x\\,dx$ equals',ans:'1',w:['2','$1/2$','0']},
        ][variant%4];
        return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Tính trực tiếp hoặc áp dụng tích phân từng phần khi thích hợp.',solutionEn:'Evaluate directly or use integration by parts as appropriate.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
      }
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
      if (hasAny(t,['diện tích'])) {
        const rows = [
          { vi: 'Diện tích hình phẳng giới hạn bởi $y=x$, trục $Ox$, $x=0$ và $x=2$ bằng', en: 'The area bounded by $y=x$, the $x$-axis, $x=0$ and $x=2$ equals', ans: '2', sol: '$S=\\int_0^2x\\,dx=2$.', wrong: ['1','4','$8/3$'] },
          { vi: 'Diện tích hình phẳng giới hạn bởi $y=2x$, trục $Ox$, $x=0$ và $x=1$ bằng', en: 'The area bounded by $y=2x$, the $x$-axis, $x=0$ and $x=1$ equals', ans: '1', sol: '$S=\\int_0^1 2x\\,dx=1$.', wrong: ['2','$1/2$','$4/3$'] },
          { vi: 'Diện tích hình phẳng giới hạn bởi $y=x^2$, trục $Ox$, $x=0$ và $x=1$ bằng', en: 'The area bounded by $y=x^2$, the $x$-axis, $x=0$ and $x=1$ equals', ans: '$1/3$', sol: '$S=\\int_0^1x^2\\,dx=\\dfrac13$.', wrong: ['1','$1/2$','$2/3$'] },
          { vi: 'Diện tích hình phẳng giới hạn bởi $y=3-x$, trục $Ox$, $x=0$ và $x=3$ bằng', en: 'The area bounded by $y=3-x$, the $x$-axis, $x=0$ and $x=3$ equals', ans: '$9/2$', sol: '$S=\\int_0^3(3-x)\\,dx=\\dfrac92$.', wrong: ['3','6','$3/2$'] },
        ][variant % 4];
        return {
          vi: rows.vi, en: rows.en, answer: rows.ans,
          solutionVi: rows.sol, solutionEn: rows.sol,
          options: [[rows.ans,rows.ans,true],[rows.wrong[0],rows.wrong[0],false],[rows.wrong[1],rows.wrong[1],false],[rows.wrong[2],rows.wrong[2],false]],
        };
      }
      if (hasAny(t,['thể tích','tròn xoay'])) {
        const rows=[
          {f:'$y=x$',a:'0',b:'1',ans:'$\\pi/3$',w:['$\\pi/2$','$\\pi$','$2\\pi/3$']},
          {f:'$y=2x$',a:'0',b:'1',ans:'$4\\pi/3$',w:['$2\\pi/3$','$2\\pi$','$4\\pi$']},
          {f:'$y=1$',a:'0',b:'2',ans:'$2\\pi$',w:['$\\pi$','$4\\pi$','$2\\pi/3$']},
          {f:'$y=\\sqrt{x}$',a:'0',b:'1',ans:'$\\pi/2$',w:['$\\pi/3$','$\\pi$','$2\\pi/3$']},
        ][variant%4];
        return {vi:`Quay miền dưới ${rows.f}, $${rows.a}\\le x\\le${rows.b}$ quanh trục $Ox$. Thể tích bằng`,en:`Rotate the region under ${rows.f}, $${rows.a}\\le x\\le${rows.b}$ about the $x$-axis. The volume is`,answer:rows.ans,solutionVi:'Dùng $V=\\pi\\int_a^b y^2\\,dx$.',solutionEn:'Use $V=\\pi\\int_a^b y^2\\,dx$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
      }
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
      const rows = [
        { vi: 'Giá trị $\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$ bằng', en: 'The value of $\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$ is', ans: '4', solVi: 'Phân tích $x^2-4=(x-2)(x+2)$, rút gọn rồi cho $x\\to2$, được $4$.', solEn: 'Factor and cancel $x-2$; the limit is $4$.', wrong: ['2','0','Không tồn tại'] },
        { vi: 'Giá trị $\\lim_{x\\to1}\\dfrac{x^2-1}{x-1}$ bằng', en: 'The value of $\\lim_{x\\to1}\\dfrac{x^2-1}{x-1}$ is', ans: '2', solVi: 'Phân tích $x^2-1=(x-1)(x+1)$, rút gọn rồi cho $x\\to1$, được $2$.', solEn: 'Factor and cancel $x-1$; the limit is $2$.', wrong: ['1','0','Không tồn tại'] },
        { vi: 'Giá trị $\\lim_{x\\to0}\\dfrac{\\sin x}{x}$ bằng', en: 'The value of $\\lim_{x\\to0}\\dfrac{\\sin x}{x}$ is', ans: '1', solVi: 'Dùng giới hạn cơ bản $\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1$.', solEn: 'Use the standard limit $\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1$.', wrong: ['0','-1','Không tồn tại'] },
        { vi: 'Giá trị $\\lim_{x\\to+\\infty}\\dfrac{2x+1}{x-3}$ bằng', en: 'The value of $\\lim_{x\\to+\\infty}\\dfrac{2x+1}{x-3}$ is', ans: '2', solVi: 'Chia tử và mẫu cho $x$; giới hạn bằng tỉ số hệ số bậc cao nhất là $2$.', solEn: 'Divide numerator and denominator by $x$; the limit is $2$.', wrong: ['1','0','$+\\infty$'] },
      ][variant % 4];
      return {
        vi: rows.vi, en: rows.en, answer: rows.ans,
        solutionVi: rows.solVi, solutionEn: rows.solEn,
        options: [[rows.ans,rows.ans,true],[rows.wrong[0],rows.wrong[0],false],[rows.wrong[1],rows.wrong[1],false],[rows.wrong[2],rows.wrong[2],false]],
      };
    }
    if (hasAny(t,['liên tục'])) {
      return {
        vi: 'Hàm $f(x)=\\begin{cases}x+1,&x<1\\\\a,&x=1\\\\2x,&x>1\\end{cases}$ liên tục tại $x=1$ khi', en: 'The function is continuous at $x=1$ when', answer: '$a=2$',
        solutionVi: 'Giới hạn trái và phải đều bằng $2$, nên cần $f(1)=a=2$.', solutionEn: 'Both one-sided limits are $2$, so $a=2$.', options: [['$a=2$','$a=2$',true],['$a=1$','$a=1$',false],['$a=0$','$a=0$',false],['Mọi $a$','Any $a$',false]],
      };
    }
    // Generic calculus fallback: vẫn là một bài tính, không hỏi thuộc phương pháp/định nghĩa.
    const a = [1,2,3,4][variant % 4];
    return {
      vi: `Cho $f(x)=x^3-${3*a}x$. Tính $f'(${a})$.`, en: `Given $f(x)=x^3-${3*a}x$, compute $f'(${a})$.`, answer: String(3*a*a-3*a),
      solutionVi: `$f'(x)=3x^2-${3*a}$, nên $f'(${a})=${3*a*a-3*a}$.`, solutionEn: `Differentiate and substitute $x=${a}$.`,
      options: [[String(3*a*a-3*a),String(3*a*a-3*a),true],[String(3*a*a),String(3*a*a),false],[String(a),String(a),false],[String(-3*a),String(-3*a),false]],
    };
  }

  // ---------------- COMBINATORICS ----------------
  if (family === 'combinatorics') {
    if (hasAny(t,['số hạng chứa lũy thừa','số hạng không chứa biến','newton','nhị thức','hệ số','số hạng'])) {
      const rows=[
        {vi:'Hệ số của $x^2$ trong $(1+x)^5$ bằng',en:'The coefficient of $x^2$ in $(1+x)^5$ is',ans:'10',w:['5','20','25']},
        {vi:'Hệ số của $x^3$ trong $(1+x)^6$ bằng',en:'The coefficient of $x^3$ in $(1+x)^6$ is',ans:'20',w:['15','6','30']},
        {vi:'Hệ số của $x^2$ trong $(2+x)^4$ bằng',en:'The coefficient of $x^2$ in $(2+x)^4$ is',ans:'24',w:['6','16','32']},
        {vi:'Số hạng không chứa $x$ trong $(x+\\dfrac1x)^4$ có hệ số bằng',en:'The constant term in $(x+\\dfrac1x)^4$ has coefficient',ans:'6',w:['4','8','12']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng số hạng tổng quát của khai triển nhị thức Newton.',solutionEn:'Use the general term of the binomial expansion.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['hoán vị'])) {
      const rows=[
        {n:5,ans:'120',w:['25','60','20']},{n:6,ans:'720',w:['36','360','120']},{n:4,ans:'24',w:['16','12','8']},{n:7,ans:'5040',w:['49','720','2520']},
      ][variant%4];
      return {vi:`Có bao nhiêu cách sắp xếp ${rows.n} học sinh phân biệt thành một hàng?`,en:`How many ways can ${rows.n} distinct students be arranged in a row?`,answer:rows.ans,solutionVi:`Có $${rows.n}!=${rows.ans}$ cách.`,solutionEn:`There are $${rows.n}!=${rows.ans}$ permutations.`,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['chỉnh hợp'])) {
      const rows=[
        {n:7,k:2,ctx:'chọn lớp trưởng và lớp phó',ans:'42',w:['21','49','14']},
        {n:6,k:3,ctx:'chọn ba chức vụ trưởng, phó và thư kí',ans:'120',w:['20','216','60']},
        {n:8,k:2,ctx:'chọn huy chương vàng và bạc',ans:'56',w:['28','64','16']},
        {n:5,k:3,ctx:'xếp ba vị trí thứ nhất, nhì, ba',ans:'60',w:['10','125','30']},
      ][variant%4];
      return {vi:`Từ ${rows.n} người phân biệt, ${rows.ctx}. Có bao nhiêu cách?`,en:`From ${rows.n} distinct people, ${rows.ctx}. How many ordered selections are possible?`,answer:rows.ans,solutionVi:`Vì có thứ tự, dùng chỉnh hợp $A_${rows.n}^{${rows.k}}=${rows.ans}$.`,solutionEn:`Order matters, so use $A_${rows.n}^{${rows.k}}=${rows.ans}$.`,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tổ hợp'])) {
      const rows=[[8,3,56],[7,2,21],[6,3,20],[9,2,36]][variant%4] as [number,number,number];
      return {vi:`Từ ${rows[0]} học sinh, chọn ${rows[1]} bạn vào một nhóm. Có bao nhiêu cách?`,en:`From ${rows[0]} students, choose ${rows[1]} for a team. How many ways?`,answer:String(rows[2]),solutionVi:`Không xét thứ tự: $C_${rows[0]}^{${rows[1]}}=${rows[2]}$.`,solutionEn:`Order does not matter: $C_${rows[0]}^{${rows[1]}}=${rows[2]}$.`,options:[[String(rows[2]),String(rows[2]),true],[String(rows[2]*2),String(rows[2]*2),false],[String(rows[0]*rows[1]),String(rows[0]*rows[1]),false],[String(rows[0]**2),String(rows[0]**2),false]]};
    }
    const rows=[
      {vi:'Một quán có 3 món chính và 4 loại đồ uống. Chọn 1 món chính và 1 đồ uống có bao nhiêu cách?',en:'A shop has 3 main dishes and 4 drinks. How many meal choices are possible?',ans:'12',w:['7','24','1'],sol:'Quy tắc nhân: $3\\cdot4=12$.'},
      {vi:'Có 4 tuyến xe buýt và 3 tuyến tàu để đi từ A đến B. Chọn đúng một phương tiện có bao nhiêu cách?',en:'There are 4 bus routes and 3 train routes from A to B. Choosing exactly one route gives how many choices?',ans:'7',w:['12','4','3'],sol:'Quy tắc cộng: $4+3=7$.'},
      {vi:'Một mật mã gồm 1 chữ cái trong 5 chữ và 1 chữ số trong 10 chữ số. Có bao nhiêu mật mã?',en:'A code contains one of 5 letters followed by one of 10 digits. How many codes?',ans:'50',w:['15','10','500'],sol:'Quy tắc nhân: $5\\cdot10=50$.'},
      {vi:'Có 3 kiểu áo, 2 kiểu quần và 2 đôi giày. Chọn một bộ gồm đủ ba món có bao nhiêu cách?',en:'There are 3 shirts, 2 trousers, and 2 pairs of shoes. How many complete outfits?',ans:'12',w:['7','8','24'],sol:'Quy tắc nhân: $3\\cdot2\\cdot2=12$.'},
    ][variant%4];
    return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:rows.sol,solutionEn:rows.sol,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }

  // ---------------- PROBABILITY ----------------
  if (family === 'probability') {
    if (hasAny(t,['bayes','hậu nghiệm'])) {
      const rows=[
        {vi:'Một bệnh có tỉ lệ 1%. Test dương tính với người bệnh 90% và dương giả 5%. Xác suất thực sự bệnh khi test dương gần nhất là',en:'Disease prevalence is 1%, sensitivity 90%, false-positive rate 5%. Find the probability of disease given a positive test.',ans:'15.4%',w:['90%','5%','1%'],sol:'$P(B|+)=\\dfrac{0.01\\cdot0.9}{0.01\\cdot0.9+0.99\\cdot0.05}\\approx15.4\\%$.'},
        {vi:'Máy A làm 60% sản phẩm, lỗi 1%; máy B làm 40%, lỗi 4%. Biết một sản phẩm bị lỗi, xác suất nó do máy B làm gần nhất là',en:'Machine A makes 60% with 1% defects; B makes 40% with 4% defects. Given a defective product, find the probability it came from B.',ans:'72.7%',w:['40%','80%','27.3%'],sol:'$P(B|D)=0.4\\cdot0.04/(0.6\\cdot0.01+0.4\\cdot0.04)\\approx72.7\\%$.'},
        {vi:'Xác suất mưa là 30%. Ứng dụng cảnh báo mưa đúng 80% khi có mưa và báo nhầm 10% khi không mưa. Khi có cảnh báo, xác suất thực sự mưa gần nhất là',en:'Rain probability is 30%; an app alerts with 80% sensitivity and 10% false-positive rate. Given an alert, find the probability of rain.',ans:'77.4%',w:['80%','30%','70%'],sol:'$0.3\\cdot0.8/(0.3\\cdot0.8+0.7\\cdot0.1)\\approx77.4\\%$.'},
        {vi:'20% email là spam. Bộ lọc bắt đúng 90% spam và gắn nhầm 5% email thường. Biết email bị gắn spam, xác suất nó thực sự là spam gần nhất là',en:'20% of emails are spam. A filter catches 90% of spam and falsely flags 5% of normal mail. Given a flag, find the spam probability.',ans:'81.8%',w:['90%','20%','75%'],sol:'$0.2\\cdot0.9/(0.2\\cdot0.9+0.8\\cdot0.05)\\approx81.8\\%$.'},
      ][variant%4]; return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:rows.sol,solutionEn:rows.sol,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['có điều kiện'])) {
      const rows=[
        {ab:'0.2',b:'0.5',ans:'0.4',w:['0.1','0.7','0.25']},{ab:'0.18',b:'0.6',ans:'0.3',w:['0.12','0.42','0.6']},{ab:'0.12',b:'0.4',ans:'0.3',w:['0.48','0.2','0.5']},{ab:'0.24',b:'0.8',ans:'0.3',w:['0.2','0.6','0.4']},
      ][variant%4]; return {vi:`Cho $P(A\\cap B)=${rows.ab}$ và $P(B)=${rows.b}$. Khi đó $P(A|B)$ bằng`,en:`Given $P(A\\cap B)=${rows.ab}$ and $P(B)=${rows.b}$, find $P(A|B)$.`,answer:rows.ans,solutionVi:`$P(A|B)=P(A\\cap B)/P(B)=${rows.ans}$.`,solutionEn:`$P(A|B)=${rows.ans}$.`,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['toàn phần'])) {
      const rows=[
        {p:'0.6',q:'0.4',a:'0.02',b:'0.05',ans:'0.032',w:['0.07','0.02','0.05']},
        {p:'0.7',q:'0.3',a:'0.01',b:'0.04',ans:'0.019',w:['0.05','0.028','0.012']},
        {p:'0.4',q:'0.6',a:'0.03',b:'0.02',ans:'0.024',w:['0.05','0.012','0.03']},
        {p:'0.8',q:'0.2',a:'0.02',b:'0.10',ans:'0.036',w:['0.12','0.02','0.04']},
      ][variant%4]; return {vi:`Hai nguồn A, B chiếm ${rows.p} và ${rows.q} tổng sản lượng; tỉ lệ lỗi lần lượt ${rows.a} và ${rows.b}. Xác suất lấy ngẫu nhiên được sản phẩm lỗi bằng`,en:`Sources A and B account for ${rows.p} and ${rows.q}, with defect rates ${rows.a} and ${rows.b}. Find the overall defect probability.`,answer:rows.ans,solutionVi:`$P(D)=${rows.p}\\cdot${rows.a}+${rows.q}\\cdot${rows.b}=${rows.ans}$.`,solutionEn:`Use the total probability formula to get ${rows.ans}.`,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['công thức cộng','biến cố hợp','xung khắc'])) {
      const rows=[
        {a:'0.4',b:'0.5',ab:'0.2',ans:'0.7',w:['0.9','0.2','0.1']},{a:'0.3',b:'0.4',ab:'0.1',ans:'0.6',w:['0.7','0.12','0.8']},{a:'0.6',b:'0.5',ab:'0.3',ans:'0.8',w:['1.1','0.3','0.5']},{a:'0.25',b:'0.35',ab:'0.05',ans:'0.55',w:['0.60','0.30','0.65']},
      ][variant%4]; return {vi:`Cho $P(A)=${rows.a}$, $P(B)=${rows.b}$, $P(A\\cap B)=${rows.ab}$. Khi đó $P(A\\cup B)$ bằng`,en:`Given $P(A)=${rows.a}$, $P(B)=${rows.b}$, and $P(A\\cap B)=${rows.ab}$, find $P(A\\cup B)$.`,answer:rows.ans,solutionVi:`$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=${rows.ans}$.`,solutionEn:`Use the addition formula to obtain ${rows.ans}.`,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['công thức nhân','độc lập','chuỗi phép thử'])) {
      const rows=[
        {vi:'Tung hai đồng xu cân đối độc lập. Xác suất cả hai cùng ngửa bằng',en:'Toss two fair independent coins. Probability both are heads is',ans:'$1/4$',w:['$1/2$','$3/4$','1'],sol:'$P=\\dfrac12\\cdot\\dfrac12=\\dfrac14$.'},
        {vi:'Gieo hai xúc xắc độc lập. Xác suất cả hai cùng ra số 6 bằng',en:'Roll two independent fair dice. Probability both show 6 is',ans:'$1/36$',w:['$1/6$','$1/12$','$1/18$'],sol:'$P=\\dfrac16\\cdot\\dfrac16=\\dfrac1{36}$.'},
        {vi:'Một biến cố có xác suất 0.8 ở mỗi phép thử độc lập. Xác suất nó xảy ra cả 3 lần bằng',en:'An event has probability 0.8 in each independent trial. Probability it occurs in all 3 trials is',ans:'0.512',w:['0.64','0.8','0.488'],sol:'$0.8^3=0.512$.'},
        {vi:'Bắn hai phát độc lập, xác suất trúng mỗi phát là 0.7. Xác suất cả hai phát đều trúng bằng',en:'Two independent shots each hit with probability 0.7. Probability both hit is',ans:'0.49',w:['0.7','0.3','0.21'],sol:'$0.7\\cdot0.7=0.49$.'},
      ][variant%4]; return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:rows.sol,solutionEn:rows.sol,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    const rows=[
      {vi:'Gieo một xúc xắc cân đối. Xác suất xuất hiện số chẵn bằng',en:'Roll a fair die. Probability of an even number is',ans:'$1/2$',w:['$1/3$','$2/3$','$1/6$'],sol:'Có 3 kết quả thuận lợi trên 6 kết quả.'},
      {vi:'Gieo một xúc xắc cân đối. Xác suất xuất hiện số lớn hơn 4 bằng',en:'Roll a fair die. Probability of a number greater than 4 is',ans:'$1/3$',w:['$1/2$','$2/3$','$1/6$'],sol:'Có 2 kết quả thuận lợi $\\{5,6\\}$ trên 6.'},
      {vi:'Rút ngẫu nhiên một thẻ từ các thẻ đánh số 1 đến 10. Xác suất rút số chia hết cho 5 bằng',en:'Draw one card numbered 1 to 10. Probability the number is divisible by 5 is',ans:'$1/5$',w:['$1/2$','$1/10$','$2/5$'],sol:'Có 2 số thuận lợi 5, 10 trên 10 thẻ.'},
      {vi:'Tung một đồng xu cân đối một lần. Xác suất xuất hiện mặt ngửa bằng',en:'Toss a fair coin once. Probability of heads is',ans:'$1/2$',w:['$1/4$','1','0'],sol:'Hai kết quả đồng khả năng và có một kết quả thuận lợi.'},
    ][variant%4];
    return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:rows.sol,solutionEn:rows.sol,options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }

  // ---------------- STATISTICS ----------------
  if (family === 'stats') {
    if (hasAny(t,['trung bình']) && hasAny(t,['ghép nhóm'])) {
      const rows=[
        {cls:['[0;10)','[10;20)','[20;30)'],f:[2,4,2],ans:'15',w:['12.5','17.5','20']},
        {cls:['[10;20)','[20;30)','[30;40)'],f:[1,2,1],ans:'25',w:['20','30','22.5']},
        {cls:['[0;20)','[20;40)','[40;60)'],f:[3,4,3],ans:'30',w:['24','36','40']},
        {cls:['[5;15)','[15;25)','[25;35)'],f:[1,3,1],ans:'20',w:['18','22','25']},
      ][variant%4];
      const table=`$$\\begin{array}{c|ccc}\\text{Khoảng lớp}&${rows.cls.join('&')}\\\\\\hline\\text{Tần số}&${rows.f.join('&')}\\end{array}$$`;
      return {vi:`Cho bảng số liệu ghép nhóm ${table} Số trung bình gần đúng bằng`,en:`Given the grouped table ${table} the approximate mean is`,answer:rows.ans,solutionVi:'Lấy trung điểm mỗi lớp làm giá trị đại diện rồi tính trung bình có trọng số.',solutionEn:'Use class midpoints and compute the weighted mean.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['mốt']) && hasAny(t,['ghép nhóm'])) {
      const rows=[
        {cls:['[0;10)','[10;20)','[20;30)'],f:[2,7,3],ans:'$[10;20)$',w:['$[0;10)$','$[20;30)$','Không có lớp mốt']},
        {cls:['[10;20)','[20;30)','[30;40)'],f:[5,2,1],ans:'$[10;20)$',w:['$[20;30)$','$[30;40)$','Không có lớp mốt']},
        {cls:['[0;5)','[5;10)','[10;15)'],f:[1,4,6],ans:'$[10;15)$',w:['$[0;5)$','$[5;10)$','Không có lớp mốt']},
        {cls:['[5;15)','[15;25)','[25;35)'],f:[3,8,4],ans:'$[15;25)$',w:['$[5;15)$','$[25;35)$','Không có lớp mốt']},
      ][variant%4];
      const table=`$$\\begin{array}{c|ccc}\\text{Khoảng lớp}&${rows.cls.join('&')}\\\\\\hline\\text{Tần số}&${rows.f.join('&')}\\end{array}$$`;
      return {vi:`Cho bảng số liệu ghép nhóm ${table} Lớp chứa mốt là`,en:`Given the grouped table ${table} the modal class is`,answer:rows.ans,solutionVi:'Lớp mốt là lớp có tần số lớn nhất.',solutionEn:'The modal class has the greatest frequency.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['phương sai']) && hasAny(t,['ghép nhóm'])) {
      const rows=[
        {x:[0,2],f:[1,1],ans:'1',w:['0','2','4']},
        {x:[1,3],f:[2,2],ans:'1',w:['2','0.5','4']},
        {x:[0,4],f:[1,1],ans:'4',w:['2','8','16']},
        {x:[2,6],f:[3,3],ans:'4',w:['2','6','8']},
      ][variant%4];
      const table=`$$\\begin{array}{c|cc}\\text{Giá trị đại diện}&${rows.x.join('&')}\\\\\\hline\\text{Tần số}&${rows.f.join('&')}\\end{array}$$`;
      return {vi:`Một mẫu ghép nhóm có bảng giá trị đại diện ${table} Phương sai (chia cho $n$) bằng`,en:`A grouped sample has representative values ${table} The variance (dividing by $n$) is`,answer:rows.ans,solutionVi:'Tính trung bình rồi lấy trung bình các bình phương độ lệch.',solutionEn:'Compute the mean and the average squared deviation.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['độ lệch chuẩn']) && hasAny(t,['ghép nhóm'])) {
      const rows=[
        {x:[0,2],f:[1,1],ans:'1',w:['2','0','$\\sqrt2$']},
        {x:[1,5],f:[1,1],ans:'2',w:['4','1','$\\sqrt2$']},
        {x:[0,6],f:[1,1],ans:'3',w:['9','6','$\\sqrt3$']},
        {x:[2,10],f:[1,1],ans:'4',w:['16','8','2']},
      ][variant%4];
      const table=`$$\\begin{array}{c|cc}\\text{Giá trị đại diện}&${rows.x.join('&')}\\\\\\hline\\text{Tần số}&${rows.f.join('&')}\\end{array}$$`;
      return {vi:`Một mẫu ghép nhóm có bảng ${table} Độ lệch chuẩn bằng`,en:`A grouped sample has table ${table} The standard deviation is`,answer:rows.ans,solutionVi:'Tính phương sai rồi lấy căn bậc hai.',solutionEn:'Compute the variance and take its square root.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tứ phân vị'])) {
      const rows=[
        {cls:['[0;10)','[10;20)','[20;30)','[30;40)'],f:[5,5,5,5],ans:'20',w:['10','15','30']},
        {cls:['[0;5)','[5;10)','[10;15)','[15;20)'],f:[4,4,4,4],ans:'10',w:['5','7.5','15']},
        {cls:['[10;20)','[20;30)','[30;40)','[40;50)'],f:[6,6,6,6],ans:'20',w:['10','25','30']},
        {cls:['[5;15)','[15;25)','[25;35)','[35;45)'],f:[8,8,8,8],ans:'20',w:['10','15','30']},
      ][variant%4];
      const table=`$$\\begin{array}{c|cccc}\\text{Khoảng lớp}&${rows.cls.join('&')}\\\\\\hline\\text{Tần số}&${rows.f.join('&')}\\end{array}$$`;
      return {vi:`Cho bảng tần số ghép nhóm ${table} Khoảng tứ phân vị $\\Delta_Q=Q_3-Q_1$ bằng`,en:`Given the grouped table ${table} the interquartile range $\\Delta_Q=Q_3-Q_1$ is`,answer:rows.ans,solutionVi:'Nội suy các vị trí $n/4$ và $3n/4$ trong các lớp rồi tính $Q_3-Q_1$.',solutionEn:'Interpolate the $n/4$ and $3n/4$ positions, then compute $Q_3-Q_1$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
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
    if (hasAny(t,['khoảng biến thiên'])) {
      const rows = [
        { cls: ['[10;20)','[20;30)','[30;40)','[40;50)'], f: [3,5,7,2], ans: '40', wrong: ['30','20','50'] },
        { cls: ['[5;15)','[15;25)','[25;35)','[35;45)'], f: [4,6,5,3], ans: '40', wrong: ['30','35','45'] },
        { cls: ['[20;30)','[30;40)','[40;50)','[50;60)'], f: [2,8,6,4], ans: '40', wrong: ['30','50','60'] },
        { cls: ['[0;10)','[10;20)','[20;30)','[30;40)'], f: [5,7,4,1], ans: '40', wrong: ['30','20','10'] },
      ][variant % 4];
      const table = `$$\\begin{array}{c|cccc}\\text{Khoảng lớp}&${rows.cls.join('&')}\\\\\\hline\\text{Tần số}&${rows.f.join('&')}\\end{array}$$`;
      return {
        vi: `Cho mẫu số liệu ghép nhóm sau: ${table} Khoảng biến thiên của mẫu số liệu bằng`,
        en: `Given the grouped data: ${table} The range of the grouped sample is`,
        answer: rows.ans,
        solutionVi: `Lấy cận trên lớp cuối trừ cận dưới lớp đầu, được $R=${rows.ans}$.`,
        solutionEn: `Subtract the lower bound of the first class from the upper bound of the last class: $R=${rows.ans}$.`,
        options: [[rows.ans,rows.ans,true],[rows.wrong[0],rows.wrong[0],false],[rows.wrong[1],rows.wrong[1],false],[rows.wrong[2],rows.wrong[2],false]],
      };
    }
    if (hasAny(t,['ghép nhóm','giá trị đại diện'])) {
      const rows = [
        { a: 20, b: 30, m: 25, f: [4,7,5] },
        { a: 10, b: 20, m: 15, f: [2,6,3] },
        { a: 30, b: 50, m: 40, f: [5,8,4] },
        { a: 5, b: 15, m: 10, f: [3,4,2] },
      ][variant % 4];
      const table = `$$\\begin{array}{c|ccc}\\text{Khoảng lớp}&[${rows.a-10};${rows.a})&[${rows.a};${rows.b})&[${rows.b};${rows.b+10})\\\\\\hline\\text{Tần số}&${rows.f[0]}&${rows.f[1]}&${rows.f[2]}\\end{array}$$`;
      return {
        vi: `Cho bảng tần số ghép nhóm: ${table} Giá trị đại diện của nhóm $[${rows.a};${rows.b})$ bằng`,
        en: `Given the grouped frequency table: ${table} The class midpoint of $[${rows.a},${rows.b})$ is`,
        answer: String(rows.m),
        solutionVi: `Giá trị đại diện là trung điểm: $\\dfrac{${rows.a}+${rows.b}}2=${rows.m}$.`,
        solutionEn: `The class midpoint is $\\dfrac{${rows.a}+${rows.b}}2=${rows.m}$.`,
        options: [[String(rows.m),String(rows.m),true],[String(rows.a),String(rows.a),false],[String(rows.b),String(rows.b),false],[String(rows.b-rows.a),String(rows.b-rows.a),false]],
      };
    }
    if (hasAny(t,['sai số'])) return {
      vi: 'Giá trị đúng là 100, số gần đúng là 98. Sai số tuyệt đối bằng', en: 'True value is 100 and approximation is 98. The absolute error is', answer: '2',
      solutionVi: '$\\Delta=|100-98|=2$.', solutionEn: 'Absolute error is 2.', options: [['2','2',true],['98','98',false],['100','100',false],['0.02','0.02',false]],
    };
    return {
      vi: 'Cho mẫu số liệu $2,3,5,6,9$. Khoảng biến thiên của mẫu bằng', en: 'For the sample $2,3,5,6,9$, find its range.', answer: '7',
      solutionVi: '$R=9-2=7$.', solutionEn: '$R=9-2=7$.', options: [['7','7',true],['9','9',false],['5','5',false],['4','4',false]],
    };
  }

  // ---------------- TRIG ----------------
  if (family === 'trig') {
    if (tid === 'type-kntt-11-04-01') {
      const rows=[
        {eq:'$\\sin x=0$',ans:'$x=k\\pi$',w:['$x=\\pi/2+k\\pi$','$x=2k\\pi+\\pi/4$','$x=k$']},
        {eq:'$\\sin x=1$',ans:'$x=\\pi/2+2k\\pi$',w:['$x=k\\pi$','$x=\\pi/2+k\\pi$','$x=2k\\pi$']},
        {eq:'$\\sin x=-1$',ans:'$x=-\\pi/2+2k\\pi$',w:['$x=\\pi/2+2k\\pi$','$x=k\\pi$','$x=\\pi+2k\\pi$']},
        {eq:'$\\sin x=\\dfrac12$',ans:'$x=\\pi/6+2k\\pi$ hoặc $x=5\\pi/6+2k\\pi$',w:['$x=\\pi/6+k\\pi$','$x=\\pi/3+2k\\pi$','$x=5\\pi/6+k\\pi$']},
      ][variant%4]; return {vi:`Nghiệm của ${rows.eq} là`,en:`Solutions of ${rows.eq} are`,answer:rows.ans,solutionVi:'Dùng nghiệm cơ bản của phương trình sin và chu kì $2\\pi$.',solutionEn:'Use the basic sine solutions and period $2\\pi$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (tid === 'type-kntt-11-04-02') {
      const rows=[
        {eq:'$\\cos x=1$',ans:'$x=2k\\pi$',w:['$x=k\\pi$','$x=\\pi/2+k\\pi$','$x=\\pi+2k\\pi$']},
        {eq:'$\\cos x=0$',ans:'$x=\\pi/2+k\\pi$',w:['$x=k\\pi$','$x=2k\\pi$','$x=\\pi/2+2k\\pi$']},
        {eq:'$\\cos x=-1$',ans:'$x=\\pi+2k\\pi$',w:['$x=2k\\pi$','$x=k\\pi$','$x=-\\pi/2+2k\\pi$']},
        {eq:'$\\cos x=\\dfrac12$',ans:'$x=\\pm\\pi/3+2k\\pi$',w:['$x=\\pi/3+k\\pi$','$x=\\pm\\pi/6+2k\\pi$','$x=2k\\pi$']},
      ][variant%4]; return {vi:`Nghiệm của ${rows.eq} là`,en:`Solutions of ${rows.eq} are`,answer:rows.ans,solutionVi:'Dùng nghiệm cơ bản của phương trình cos và chu kì $2\\pi$.',solutionEn:'Use the basic cosine solutions and period $2\\pi$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (tid === 'type-kntt-11-04-03') {
      const rows=[
        {eq:'$\\tan x=1$',ans:'$x=\\pi/4+k\\pi$',w:['$x=\\pi/4+2k\\pi$','$x=k\\pi$','$x=\\pi/2+k\\pi$']},
        {eq:'$\\tan x=0$',ans:'$x=k\\pi$',w:['$x=2k\\pi$','$x=\\pi/2+k\\pi$','$x=\\pi/4+k\\pi$']},
        {eq:'$\\cot x=1$',ans:'$x=\\pi/4+k\\pi$',w:['$x=k\\pi$','$x=\\pi/2+k\\pi$','$x=\\pi/4+2k\\pi$']},
        {eq:'$\\tan x=\\sqrt3$',ans:'$x=\\pi/3+k\\pi$',w:['$x=\\pi/6+k\\pi$','$x=\\pi/3+2k\\pi$','$x=2\\pi/3+k\\pi$']},
      ][variant%4]; return {vi:`Nghiệm của ${rows.eq} là`,en:`Solutions of ${rows.eq} are`,answer:rows.ans,solutionVi:'Dùng nghiệm cơ bản và chu kì $\\pi$ của tan/cot.',solutionEn:'Use the basic solution and period $\\pi$ of tangent/cotangent.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['phương trình sin'])) return {
      vi: 'Nghiệm của $\\sin x=0$ là', en: 'Solutions of $\\sin x=0$ are', answer: '$x=k\\pi$', solutionVi: '$\\sin x=0\\Leftrightarrow x=k\\pi, k\\in\\mathbb Z$.', solutionEn: '$x=k\\pi$.', options: [['$x=k\\pi$','$x=k\\pi$',true],['$x=\\pi/2+k\\pi$','$x=\\pi/2+k\\pi$',false],['$x=2k\\pi+\\pi/4$','$x=2k\\pi+\\pi/4$',false],['$x=k$','$x=k$',false]],
    };
    if (hasAny(t,['phương trình cos'])) return {
      vi: 'Nghiệm của $\\cos x=1$ là', en: 'Solutions of $\\cos x=1$ are', answer: '$x=2k\\pi$', solutionVi: '$\\cos x=1\\Leftrightarrow x=2k\\pi$.', solutionEn: '$x=2k\\pi$.', options: [['$x=2k\\pi$','$x=2k\\pi$',true],['$x=k\\pi$','$x=k\\pi$',false],['$x=\\pi/2+k\\pi$','$x=\\pi/2+k\\pi$',false],['$x=\\pi+2k\\pi$','$x=\\pi+2k\\pi$',false]],
    };
    if (hasAny(t,['tan','cot']) && hasAny(t,['phương trình'])) return {
      vi: 'Nghiệm của $\\tan x=1$ là', en: 'Solutions of $\\tan x=1$ are', answer: '$x=\\pi/4+k\\pi$', solutionVi: '$\\tan x=1\\Leftrightarrow x=\\pi/4+k\\pi$.', solutionEn: '$x=\\pi/4+k\\pi$.', options: [['$x=\\pi/4+k\\pi$','$x=\\pi/4+k\\pi$',true],['$x=\\pi/4+2k\\pi$','$x=\\pi/4+2k\\pi$',false],['$x=k\\pi$','$x=k\\pi$',false],['$x=\\pi/2+k\\pi$','$x=\\pi/2+k\\pi$',false]],
    };
    if (hasAny(t,['độ','radian'])) {
      const rows=[
        {vi:'$60^\\circ$ bằng bao nhiêu radian?',en:'How many radians is $60^\\circ$?',ans:'$\\pi/3$',w:['$\\pi/6$','$2\\pi/3$','$\\pi/4$']},
        {vi:'$45^\\circ$ bằng bao nhiêu radian?',en:'How many radians is $45^\\circ$?',ans:'$\\pi/4$',w:['$\\pi/2$','$\\pi/3$','$3\\pi/4$']},
        {vi:'$150^\\circ$ bằng bao nhiêu radian?',en:'How many radians is $150^\\circ$?',ans:'$5\\pi/6$',w:['$3\\pi/4$','$2\\pi/3$','$5\\pi/3$']},
        {vi:'$\\dfrac{2\\pi}{3}$ rad bằng bao nhiêu độ?',en:'How many degrees is $\\dfrac{2\\pi}{3}$ radians?',ans:'$120^\\circ$',w:['$60^\\circ$','$90^\\circ$','$240^\\circ$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng $180^\\circ=\\pi$ rad.',solutionEn:'Use $180^\\circ=\\pi$ radians.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['công thức cộng','công thức hiệu'])) {
      const rows=[
        {vi:'$\\sin(30^\\circ+60^\\circ)$ bằng',en:'$\\sin(30^\\circ+60^\\circ)$ equals',ans:'1',w:['0','$1/2$','$\\sqrt3/2$']},
        {vi:'$\\cos(60^\\circ-30^\\circ)$ bằng',en:'$\\cos(60^\\circ-30^\\circ)$ equals',ans:'$\\sqrt3/2$',w:['$1/2$','1','0']},
        {vi:'$\\sin(45^\\circ-30^\\circ)$ bằng',en:'$\\sin(45^\\circ-30^\\circ)$ equals',ans:'$\\dfrac{\\sqrt6-\\sqrt2}{4}$',w:['$1/2$','$\\sqrt2/2$','$\\dfrac{\\sqrt6+\\sqrt2}{4}$']},
        {vi:'$\\cos(45^\\circ+45^\\circ)$ bằng',en:'$\\cos(45^\\circ+45^\\circ)$ equals',ans:'0',w:['1','$1/2$','$\\sqrt2/2$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Áp dụng công thức cộng hoặc hiệu lượng giác.',solutionEn:'Apply the angle addition/subtraction formula.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    const rows = [
      { vi: '$\\sin^2 30^\\circ+\\cos^2 30^\\circ$ bằng', en: '$\\sin^2 30^\\circ+\\cos^2 30^\\circ$ equals', ans: '1', sol: 'Dùng $\\sin^2\\alpha+\\cos^2\\alpha=1$.', wrong: ['0','$1/2$','2'] },
      { vi: '$\\sin(30^\\circ+60^\\circ)$ bằng', en: '$\\sin(30^\\circ+60^\\circ)$ equals', ans: '1', sol: '$\\sin90^\\circ=1$.', wrong: ['0','$1/2$','$\\sqrt3/2$'] },
      { vi: '$\\cos60^\\circ$ bằng', en: '$\\cos60^\\circ$ equals', ans: '$1/2$', sol: '$\\cos60^\\circ=\\dfrac12$.', wrong: ['1','0','$\\sqrt3/2$'] },
      { vi: '$\\tan45^\\circ$ bằng', en: '$\\tan45^\\circ$ equals', ans: '1', sol: '$\\tan45^\\circ=1$.', wrong: ['0','$\\sqrt3$','$1/\\sqrt3$'] },
    ][variant % 4];
    return {
      vi: rows.vi, en: rows.en, answer: rows.ans,
      solutionVi: rows.sol, solutionEn: rows.sol,
      options: [[rows.ans,rows.ans,true],[rows.wrong[0],rows.wrong[0],false],[rows.wrong[1],rows.wrong[1],false],[rows.wrong[2],rows.wrong[2],false]],
    };
  }

  // ---------------- VECTOR ----------------
  if (family === 'vector') {
    if (hasAny(t,['nhận biết vectơ'])) {
      const rows=[
        {vi:'Vectơ nào sau đây là vectơ-không?',en:'Which vector is the zero vector?',ans:'$\\overrightarrow{AA}$',w:['$\\overrightarrow{AB}$','$\\overrightarrow{BA}$','$\\overrightarrow{AC}$']},
        {vi:'Trong hình bình hành $ABCD$, vectơ nào bằng $\\overrightarrow{AB}$?',en:'In parallelogram $ABCD$, which vector equals $\\overrightarrow{AB}$?',ans:'$\\overrightarrow{DC}$',w:['$\\overrightarrow{CD}$','$\\overrightarrow{AD}$','$\\overrightarrow{BC}$']},
        {vi:'Hai vectơ $\\vec a=(1,2)$ và $\\vec b=(2,4)$ có quan hệ',en:'The vectors $\\vec a=(1,2)$ and $\\vec b=(2,4)$ are',ans:'Cùng phương',w:['Vuông góc','Bằng nhau','Đối nhau']},
        {vi:'Hai vectơ $\\vec a=(1,0)$ và $\\vec b=(-1,0)$ có quan hệ',en:'The vectors $\\vec a=(1,0)$ and $\\vec b=(-1,0)$ are',ans:'Đối nhau',w:['Bằng nhau','Cùng hướng','Vuông góc']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng định nghĩa vectơ-không, cùng phương, cùng hướng và hai vectơ bằng nhau.',solutionEn:'Use the definitions of zero, parallel, same-direction, and equal vectors.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['vectơ đối'])) {
      const rows=[
        {vi:'Vectơ đối của $\\overrightarrow{AB}$ là',en:'The opposite of $\\overrightarrow{AB}$ is',ans:'$\\overrightarrow{BA}$',w:['$\\overrightarrow{AB}$','$\\vec0$','$\\overrightarrow{AC}$']},
        {vi:'Nếu $\\vec a=(2,-1)$ thì $-\\vec a$ bằng',en:'If $\\vec a=(2,-1)$, then $-\\vec a$ is',ans:'$(-2,1)$',w:['$(2,1)$','$(-2,-1)$','$(1,-2)$']},
        {vi:'Nếu $\\overrightarrow{MN}=-\\overrightarrow{PQ}$ thì hai vectơ $\\overrightarrow{MN}$ và $\\overrightarrow{PQ}$',en:'If $\\overrightarrow{MN}=-\\overrightarrow{PQ}$, the two vectors are',ans:'Đối nhau',w:['Bằng nhau','Vuông góc','Không cùng phương']},
        {vi:'Trong hình bình hành $ABCD$, vectơ đối của $\\overrightarrow{AD}$ là',en:'In parallelogram $ABCD$, the opposite of $\\overrightarrow{AD}$ is',ans:'$\\overrightarrow{DA}$',w:['$\\overrightarrow{BC}$','$\\overrightarrow{AD}$','$\\overrightarrow{CB}$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Đổi hướng vectơ và giữ nguyên độ dài.',solutionEn:'Reverse the direction while preserving magnitude.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tính tổng hai vectơ'])) {
      const rows=[
        {vi:'$\\overrightarrow{AB}+\\overrightarrow{BC}$ bằng',en:'$\\overrightarrow{AB}+\\overrightarrow{BC}$ equals',ans:'$\\overrightarrow{AC}$',w:['$\\overrightarrow{CA}$','$\\overrightarrow{BA}$','$\\vec0$']},
        {vi:'Trong hình bình hành $ABCD$, $\\overrightarrow{AB}+\\overrightarrow{AD}$ bằng',en:'In parallelogram $ABCD$, $\\overrightarrow{AB}+\\overrightarrow{AD}$ equals',ans:'$\\overrightarrow{AC}$',w:['$\\overrightarrow{BD}$','$\\overrightarrow{CD}$','$\\vec0$']},
        {vi:'$\\overrightarrow{MA}+\\overrightarrow{AM}$ bằng',en:'$\\overrightarrow{MA}+\\overrightarrow{AM}$ equals',ans:'$\\vec0$',w:['$2\\overrightarrow{MA}$','$\\overrightarrow{AA}$','$\\overrightarrow{MM}$']},
        {vi:'$\\overrightarrow{PQ}+\\overrightarrow{QR}$ bằng',en:'$\\overrightarrow{PQ}+\\overrightarrow{QR}$ equals',ans:'$\\overrightarrow{PR}$',w:['$\\overrightarrow{RP}$','$\\overrightarrow{QP}$','$\\vec0$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Áp dụng quy tắc ba điểm hoặc quy tắc hình bình hành.',solutionEn:'Apply the triangle or parallelogram rule.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tính hiệu hai vectơ'])) {
      const rows=[
        {vi:'$\\overrightarrow{AB}-\\overrightarrow{AC}$ bằng',en:'$\\overrightarrow{AB}-\\overrightarrow{AC}$ equals',ans:'$\\overrightarrow{CB}$',w:['$\\overrightarrow{BC}$','$\\overrightarrow{BA}$','$\\overrightarrow{CA}$']},
        {vi:'$\\overrightarrow{MN}-\\overrightarrow{PN}$ bằng',en:'$\\overrightarrow{MN}-\\overrightarrow{PN}$ equals',ans:'$\\overrightarrow{MP}$',w:['$\\overrightarrow{PM}$','$\\overrightarrow{NP}$','$\\overrightarrow{MN}$']},
        {vi:'$\\overrightarrow{OA}-\\overrightarrow{OB}$ bằng',en:'$\\overrightarrow{OA}-\\overrightarrow{OB}$ equals',ans:'$\\overrightarrow{BA}$',w:['$\\overrightarrow{AB}$','$\\overrightarrow{OA}$','$\\overrightarrow{BO}$']},
        {vi:'$\\overrightarrow{AB}-\\overrightarrow{DB}$ bằng',en:'$\\overrightarrow{AB}-\\overrightarrow{DB}$ equals',ans:'$\\overrightarrow{AD}$',w:['$\\overrightarrow{DA}$','$\\overrightarrow{BD}$','$\\overrightarrow{AB}$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Đổi phép trừ thành cộng với vectơ đối rồi dùng quy tắc ba điểm.',solutionEn:'Rewrite subtraction as addition of the opposite vector.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tích của vectơ với một số'])) {
      const rows=[
        {vi:'Nếu $\\vec a=(1,-2)$ thì $3\\vec a$ bằng',en:'If $\\vec a=(1,-2)$, then $3\\vec a$ is',ans:'$(3,-6)$',w:['$(3,-2)$','$(1,-6)$','$(-3,6)$']},
        {vi:'Nếu $\\vec a=(2,1)$ thì $-2\\vec a$ bằng',en:'If $\\vec a=(2,1)$, then $-2\\vec a$ is',ans:'$(-4,-2)$',w:['$(4,2)$','$(-2,-1)$','$(-4,2)$']},
        {vi:'Nếu $\\vec a=(-1,3)$ thì $\\dfrac12\\vec a$ bằng',en:'If $\\vec a=(-1,3)$, then $\\dfrac12\\vec a$ is',ans:'$(-1/2,3/2)$',w:['$(-2,6)$','$(1/2,3/2)$','$(-1,3/2)$']},
        {vi:'Nếu $\\vec a=(0,4)$ thì $-\\vec a$ bằng',en:'If $\\vec a=(0,4)$, then $-\\vec a$ is',ans:'$(0,-4)$',w:['$(0,4)$','$(-4,0)$','$(4,0)$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Nhân từng tọa độ với hệ số.',solutionEn:'Multiply each coordinate by the scalar.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['phân tích một vectơ theo hai vectơ'])) {
      const rows=[
        {vi:'Cho $\\vec a=(1,0)$, $\\vec b=(0,1)$. $\\vec v=(2,3)$ được phân tích thành',en:'Let $\\vec a=(1,0)$ and $\\vec b=(0,1)$. Decompose $\\vec v=(2,3)$.',ans:'$2\\vec a+3\\vec b$',w:['$3\\vec a+2\\vec b$','$2\\vec a-3\\vec b$','$\\vec a+\\vec b$']},
        {vi:'Cho $\\vec a=(1,1)$, $\\vec b=(1,-1)$. $\\vec v=(4,2)$ bằng',en:'Let $\\vec a=(1,1)$ and $\\vec b=(1,-1)$. Express $\\vec v=(4,2)$.',ans:'$3\\vec a+\\vec b$',w:['$\\vec a+3\\vec b$','$2\\vec a+2\\vec b$','$3\\vec a-\\vec b$']},
        {vi:'Cho $\\vec a=(2,0)$, $\\vec b=(0,3)$. $\\vec v=(4,6)$ bằng',en:'Let $\\vec a=(2,0)$ and $\\vec b=(0,3)$. Express $\\vec v=(4,6)$.',ans:'$2\\vec a+2\\vec b$',w:['$\\vec a+\\vec b$','$2\\vec a+\\vec b$','$\\vec a+2\\vec b$']},
        {vi:'Cho $\\vec a=(1,0)$, $\\vec b=(1,1)$. $\\vec v=(3,2)$ bằng',en:'Let $\\vec a=(1,0)$ and $\\vec b=(1,1)$. Express $\\vec v=(3,2)$.',ans:'$\\vec a+2\\vec b$',w:['$2\\vec a+\\vec b$','$3\\vec a+2\\vec b$','$\\vec a+\\vec b$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Giải hệ tọa độ theo hai vectơ cơ sở đã cho.',solutionEn:'Solve the coordinate system for the two coefficients.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['thực hiện các phép toán vectơ trong không gian'])) {
      const rows=[
        {vi:'Trong $Oxyz$, cho $\\vec a=(1,2,3)$, $\\vec b=(2,-1,1)$. $\\vec a+\\vec b$ bằng',en:'In $Oxyz$, let $\\vec a=(1,2,3)$ and $\\vec b=(2,-1,1)$. Find $\\vec a+\\vec b$.',ans:'$(3,1,4)$',w:['$(1,3,2)$','$(-1,3,2)$','$(3,-1,4)$']},
        {vi:'Trong $Oxyz$, cho $\\vec a=(2,0,-1)$, $\\vec b=(1,3,2)$. $\\vec a-\\vec b$ bằng',en:'In $Oxyz$, let $\\vec a=(2,0,-1)$ and $\\vec b=(1,3,2)$. Find $\\vec a-\\vec b$.',ans:'$(1,-3,-3)$',w:['$(3,3,1)$','$(-1,3,3)$','$(1,3,-3)$']},
        {vi:'Trong $Oxyz$, cho $\\vec a=(1,-2,1)$. $2\\vec a$ bằng',en:'In $Oxyz$, let $\\vec a=(1,-2,1)$. Find $2\\vec a$.',ans:'$(2,-4,2)$',w:['$(2,-2,1)$','$(-2,4,-2)$','$(1,-4,2)$']},
        {vi:'Trong $Oxyz$, cho $\\vec a=(2,1,2)$, $\\vec b=(1,-2,3)$. $2\\vec a-\\vec b$ bằng',en:'In $Oxyz$, let $\\vec a=(2,1,2)$ and $\\vec b=(1,-2,3)$. Find $2\\vec a-\\vec b$.',ans:'$(3,4,1)$',w:['$(5,0,7)$','$(1,4,-1)$','$(3,0,1)$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Thực hiện phép toán theo từng tọa độ $x,y,z$.',solutionEn:'Operate componentwise in the $x,y,z$ coordinates.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['phân tích một vectơ theo ba vectơ'])) {
      const rows=[
        {v:'$(2,3,4)$',ans:'$2\\vec i+3\\vec j+4\\vec k$',w:['$3\\vec i+2\\vec j+4\\vec k$','$2\\vec i+4\\vec j+3\\vec k$','$\\vec i+\\vec j+\\vec k$']},
        {v:'$(-1,2,5)$',ans:'$-\\vec i+2\\vec j+5\\vec k$',w:['$\\vec i-2\\vec j-5\\vec k$','$2\\vec i-\\vec j+5\\vec k$','$-\\vec i+5\\vec j+2\\vec k$']},
        {v:'$(3,0,-2)$',ans:'$3\\vec i-2\\vec k$',w:['$3\\vec i-2\\vec j$','$-2\\vec i+3\\vec k$','$3\\vec i+2\\vec k$']},
        {v:'$(0,-4,1)$',ans:'$-4\\vec j+\\vec k$',w:['$-4\\vec i+\\vec k$','$4\\vec j+\\vec k$','$-\\vec j+4\\vec k$']},
      ][variant%4];
      return {vi:`Trong cơ sở $\\vec i,\\vec j,\\vec k$, vectơ $\\vec v=${bareMath(rows.v)}$ bằng`,en:`In the basis $\\vec i,\\vec j,\\vec k$, the vector $\\vec v=${bareMath(rows.v)}$ equals`,answer:rows.ans,solutionVi:'Các hệ số chính là ba tọa độ của vectơ.',solutionEn:'The coefficients are the three coordinates of the vector.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['ứng dụng vectơ trong bài toán lực'])) {
      const rows=[
        {vi:'Hai lực $\\vec F_1=(3,0,0)$ N và $\\vec F_2=(0,4,0)$ N. Độ lớn hợp lực bằng',en:'Forces $\\vec F_1=(3,0,0)$ N and $\\vec F_2=(0,4,0)$ N act together. The resultant magnitude is',ans:'5',w:['7','1','12']},
        {vi:'Hai lực $\\vec F_1=(1,2,2)$ N và $\\vec F_2=(2,-2,1)$ N. Hợp lực bằng',en:'Forces $\\vec F_1=(1,2,2)$ N and $\\vec F_2=(2,-2,1)$ N act together. The resultant is',ans:'$(3,0,3)$',w:['$(1,4,1)$','$(-1,4,1)$','$(3,4,3)$']},
        {vi:'Vận tốc $\\vec v=(2,1,0)$ m/s trong 3 s tạo độ dời bằng',en:'A velocity $\\vec v=(2,1,0)$ m/s over 3 s gives displacement',ans:'$(6,3,0)$',w:['$(5,4,0)$','$(2,3,0)$','$(6,1,0)$']},
        {vi:'Hai lực đối nhau $\\vec F=(2,-1,3)$ N và $-\\vec F$. Hợp lực bằng',en:'Opposite forces $\\vec F=(2,-1,3)$ N and $-\\vec F$ have resultant',ans:'$\\vec0$',w:['$(4,-2,6)$','$(-2,1,-3)$','$(2,-1,3)$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Cộng vectơ lực hoặc nhân vectơ vận tốc với thời gian theo tọa độ.',solutionEn:'Add force vectors or multiply velocity by time componentwise.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['chứng minh đẳng thức vectơ','vận dụng tổng, hiệu vectơ','vận dụng khái niệm vectơ','thẳng hàng và cùng phương'])) {
      const rows=[
        {vi:'Nếu $M$ là trung điểm của $AB$ thì đẳng thức đúng là',en:'If $M$ is the midpoint of $AB$, which identity is correct?',ans:'$\\overrightarrow{MA}+\\overrightarrow{MB}=\\vec0$',w:['$\\overrightarrow{MA}=\\overrightarrow{MB}$','$\\overrightarrow{AB}=\\vec0$','$\\overrightarrow{AM}+\\overrightarrow{BM}=\\overrightarrow{AB}$']},
        {vi:'Nếu $\\overrightarrow{AB}=2\\overrightarrow{AC}$ thì ba điểm $A,B,C$',en:'If $\\overrightarrow{AB}=2\\overrightarrow{AC}$, then points $A,B,C$ are',ans:'Thẳng hàng',w:['Tạo tam giác vuông','Không đồng phẳng','Trùng nhau']},
        {vi:'Trong hình bình hành $ABCD$, đẳng thức nào đúng?',en:'In parallelogram $ABCD$, which identity is correct?',ans:'$\\overrightarrow{AB}=\\overrightarrow{DC}$',w:['$\\overrightarrow{AB}=\\overrightarrow{CD}$','$\\overrightarrow{AD}=\\overrightarrow{CB}$','$\\overrightarrow{AC}=\\overrightarrow{BD}$']},
        {vi:'Nếu $G$ là trọng tâm tam giác $ABC$ thì',en:'If $G$ is the centroid of triangle $ABC$, then',ans:'$\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec0$',w:['$\\overrightarrow{GA}=\\overrightarrow{GB}$','$\\overrightarrow{AB}+\\overrightarrow{BC}=\\vec0$','$\\overrightarrow{GA}+\\overrightarrow{GB}=\\overrightarrow{GC}$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Áp dụng các quy tắc và đẳng thức vectơ cơ bản.',solutionEn:'Apply standard vector identities and geometric relations.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tích vô hướng'])) {
      const rows=[
        {a:'$(1,2,3)$',b:'$(2,-1,1)$',ans:'3',w:['1','5','7']},
        {a:'$(2,0,-1)$',b:'$(1,3,2)$',ans:'0',w:['2','-2','5']},
        {a:'$(1,-2,1)$',b:'$(3,1,-1)$',ans:'0',w:['2','4','-4']},
        {a:'$(2,1,2)$',b:'$(1,-2,3)$',ans:'6',w:['4','8','10']},
      ][variant%4];
      return {vi:`Cho $\\vec a=${bareMath(rows.a)}$, $\\vec b=${bareMath(rows.b)}$. Khi đó $\\vec a\\cdot\\vec b$ bằng`,en:`For $\\vec a=${bareMath(rows.a)}$ and $\\vec b=${bareMath(rows.b)}$, $\\vec a\\cdot\\vec b$ equals`,answer:rows.ans,solutionVi:'Nhân các tọa độ tương ứng rồi cộng.',solutionEn:'Multiply corresponding coordinates and add.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tích có hướng'])) {
      const rows=[
        {a:'$(1,0,0)$',b:'$(0,1,0)$',ans:'$(0,0,1)$',w:['$(0,0,-1)$','$(1,1,0)$','$(1,0,1)$']},
        {a:'$(0,1,0)$',b:'$(0,0,1)$',ans:'$(1,0,0)$',w:['$(-1,0,0)$','$(0,1,1)$','$(0,0,1)$']},
        {a:'$(1,0,0)$',b:'$(0,0,1)$',ans:'$(0,-1,0)$',w:['$(0,1,0)$','$(1,0,1)$','$(-1,0,0)$']},
        {a:'$(1,1,0)$',b:'$(0,1,1)$',ans:'$(1,-1,1)$',w:['$(-1,1,-1)$','$(1,1,1)$','$(0,0,1)$']},
      ][variant%4];
      return {vi:`Cho $\\vec a=${bareMath(rows.a)}$, $\\vec b=${bareMath(rows.b)}$. Tích có hướng $\\vec a\\times\\vec b$ bằng`,en:`For $\\vec a=${bareMath(rows.a)}$ and $\\vec b=${bareMath(rows.b)}$, $\\vec a\\times\\vec b$ equals`,answer:rows.ans,solutionVi:'Tính định thức của tích có hướng theo ba tọa độ.',solutionEn:'Compute the coordinate determinant for the cross product.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tọa độ','toạ độ'])) {
      const rows = [
        { A: [1,2,-1], B: [4,6,3], ans: '$(3,4,4)$', wrong: ['$(4,4,3)$','$(-3,-4,-4)$','$(3,4,0)$'] },
        { A: [2,-1,0], B: [5,3,2], ans: '$(3,4,2)$', wrong: ['$(7,2,2)$','$(-3,-4,-2)$','$(3,2,4)$'] },
        { A: [-1,1,2], B: [2,5,7], ans: '$(3,4,5)$', wrong: ['$(1,6,9)$','$(-3,-4,-5)$','$(3,5,4)$'] },
        { A: [0,-2,1], B: [4,1,6], ans: '$(4,3,5)$', wrong: ['$(4,-1,7)$','$(-4,-3,-5)$','$(3,4,5)$'] },
      ][variant % 4];
      const dx=rows.B[0]-rows.A[0], dy=rows.B[1]-rows.A[1], dz=rows.B[2]-rows.A[2];
      return {
        vi: `Trong không gian $Oxyz$, cho $A(${rows.A.join(',')})$, $B(${rows.B.join(',')})$. Tọa độ $\\overrightarrow{AB}$ là`,
        en: `In $Oxyz$, given $A(${rows.A.join(',')})$ and $B(${rows.B.join(',')})$, the coordinates of $\\overrightarrow{AB}$ are`,
        answer: rows.ans,
        solutionVi: `$\\overrightarrow{AB}=(${dx},${dy},${dz})$.`,
        solutionEn: `$\\overrightarrow{AB}=(${dx},${dy},${dz})$.`,
        options: [[rows.ans,rows.ans,true],[rows.wrong[0],rows.wrong[0],false],[rows.wrong[1],rows.wrong[1],false],[rows.wrong[2],rows.wrong[2],false]],
      };
    }
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
      vi: 'Điểm nào sau đây thuộc đồ thị hàm số $y=2^x$?', en: 'Which point lies on the graph $y=2^x$?', answer: '$(3,8)$', solutionVi: 'Với $x=3$ ta có $y=2^3=8$.', solutionEn: 'At $x=3$, $y=2^3=8$.', options: [['$(3,8)$','$(3,8)$',true],['$(2,8)$','$(2,8)$',false],['$(3,6)$','$(3,6)$',false],['$(0,0)$','$(0,0)$',false]],
    };
    if (hasAny(t,['lôgarit'])) return {
      vi: 'Tập xác định của $y=\\log_2(x-1)$ là', en: 'The domain of $y=\\log_2(x-1)$ is', answer: '$(1,+\\infty)$', solutionVi: '$x-1>0\\Leftrightarrow x>1$.', solutionEn: '$x>1$.', options: [['$(1,+\\infty)$','$(1,+\\infty)$',true],['$[1,+\\infty)$','$[1,+\\infty)$',false],['$\\mathbb R$','$\\mathbb R$',false],['$(-\\infty,1)$','$(-\\infty,1)$',false]],
    };
    return {
      vi: 'Cho $f(x)=\\dfrac{x+1}{x-2}$. Giá trị $f(3)$ bằng', en: 'Given $f(x)=\\dfrac{x+1}{x-2}$, find $f(3)$.', answer: '4', solutionVi: '$f(3)=\\dfrac{3+1}{3-2}=4$.', solutionEn: '$f(3)=4$.', options: [['4','4',true],['2','2',false],['3','3',false],['1','1',false]],
    };
  }

  // ---------------- ALGEBRA ----------------
  if (family === 'algebra') {
    if (hasAny(t,['hệ thức truy hồi','bị chặn'])) {
      const rows=[
        {vi:'Cho $u_1=1$, $u_{n+1}=u_n+2$. Giá trị $u_4$ bằng',en:'Given $u_1=1$, $u_{n+1}=u_n+2$, find $u_4$.',ans:'7',w:['5','6','8']},
        {vi:'Cho $u_1=2$, $u_{n+1}=2u_n$. Giá trị $u_4$ bằng',en:'Given $u_1=2$, $u_{n+1}=2u_n$, find $u_4$.',ans:'16',w:['8','12','32']},
        {vi:'Cho $u_1=5$, $u_{n+1}=u_n-1$. Giá trị $u_5$ bằng',en:'Given $u_1=5$, $u_{n+1}=u_n-1$, find $u_5$.',ans:'1',w:['0','2','4']},
        {vi:'Cho $u_1=1$, $u_{n+1}=u_n+3$. Giá trị $u_6$ bằng',en:'Given $u_1=1$, $u_{n+1}=u_n+3$, find $u_6$.',ans:'16',w:['13','15','19']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng hệ thức truy hồi để tính lần lượt các số hạng.',solutionEn:'Use the recurrence to compute successive terms.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['cấp số cộng'])) {
      const rows = [
        { u1: 2, d: 3, n: 5, ans: '14', wrong: ['11','15','17'] },
        { u1: -1, d: 4, n: 6, ans: '19', wrong: ['15','20','23'] },
        { u1: 5, d: -2, n: 4, ans: '-1', wrong: ['1','-3','3'] },
        { u1: 3, d: 5, n: 7, ans: '33', wrong: ['28','35','30'] },
      ][variant % 4];
      return {
        vi: `Cấp số cộng có $u_1=${rows.u1}$, công sai $d=${rows.d}$. Khi đó $u_${rows.n}$ bằng`,
        en: `An arithmetic progression has $u_1=${rows.u1}$ and common difference $d=${rows.d}$. Find $u_${rows.n}$.`,
        answer: rows.ans,
        solutionVi: `$u_${rows.n}=u_1+(${rows.n-1})d=${rows.ans}$.`,
        solutionEn: `$u_${rows.n}=u_1+(${rows.n-1})d=${rows.ans}$.`,
        options: [[rows.ans,rows.ans,true],[rows.wrong[0],rows.wrong[0],false],[rows.wrong[1],rows.wrong[1],false],[rows.wrong[2],rows.wrong[2],false]],
      };
    }
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
    if (hasAny(t,['dãy số'])) {
      const rows = [
        { vi: 'Dãy $(u_n)$ xác định bởi $u_n=2n+1$. Giá trị $u_5$ bằng', en: 'For $(u_n)$ defined by $u_n=2n+1$, find $u_5$.', ans: '11', sol: '$u_5=2\\cdot5+1=11$.', wrong: ['10','9','12'] },
        { vi: 'Dãy $(u_n)$ xác định bởi $u_n=3n-2$. Giá trị $u_7$ bằng', en: 'For $(u_n)$ defined by $u_n=3n-2$, find $u_7$.', ans: '19', sol: '$u_7=3\\cdot7-2=19$.', wrong: ['17','18','21'] },
        { vi: 'Dãy $(a_n)$ xác định bởi $a_n=n^2+1$. Giá trị $a_4$ bằng', en: 'For $(a_n)$ defined by $a_n=n^2+1$, find $a_4$.', ans: '17', sol: '$a_4=4^2+1=17$.', wrong: ['16','15','9'] },
        { vi: 'Dãy $(b_n)$ xác định bởi $b_n=5-2n$. Giá trị $b_6$ bằng', en: 'For $(b_n)$ defined by $b_n=5-2n$, find $b_6$.', ans: '-7', sol: '$b_6=5-2\\cdot6=-7$.', wrong: ['7','-5','-12'] },
      ][variant % 4];
      return {
        vi: rows.vi, en: rows.en, answer: rows.ans,
        solutionVi: rows.sol, solutionEn: rows.sol,
        options: [[rows.ans,rows.ans,true],[rows.wrong[0],rows.wrong[0],false],[rows.wrong[1],rows.wrong[1],false],[rows.wrong[2],rows.wrong[2],false]],
      };
    }
    if (hasAny(t,['lũy thừa'])) {
      const rows = [
        { vi: '$2^3\\cdot2^4$ bằng', en: '$2^3\\cdot2^4$ equals', ans: '128', sol: '$2^3\\cdot2^4=2^7=128$.', wrong: ['64','32','256'] },
        { vi: '$3^2\\cdot3^3$ bằng', en: '$3^2\\cdot3^3$ equals', ans: '243', sol: '$3^2\\cdot3^3=3^5=243$.', wrong: ['81','729','27'] },
        { vi: '$5^4:5^2$ bằng', en: '$5^4:5^2$ equals', ans: '25', sol: '$5^4:5^2=5^2=25$.', wrong: ['10','125','625'] },
        { vi: '$(2^3)^2$ bằng', en: '$(2^3)^2$ equals', ans: '64', sol: '$(2^3)^2=2^6=64$.', wrong: ['32','16','128'] },
      ][variant % 4];
      return {
        vi: rows.vi, en: rows.en, answer: rows.ans,
        solutionVi: rows.sol, solutionEn: rows.sol,
        options: [[rows.ans,rows.ans,true],[rows.wrong[0],rows.wrong[0],false],[rows.wrong[1],rows.wrong[1],false],[rows.wrong[2],rows.wrong[2],false]],
      };
    }
    return {
      vi: 'Cặp $(1,2)$ có là nghiệm của bất phương trình $2x+y\\le4$ không?', en: 'Does $(1,2)$ satisfy $2x+y\\le4$?', answer: 'Có', solutionVi: 'Thay vào được $2\\cdot1+2=4\\le4$.', solutionEn: 'Substitution gives 4, so it satisfies the inequality.', options: [['Có','Yes',true],['Không','No',false],['Chỉ khi x<0','Only if x<0',false],['Không đủ dữ kiện','Insufficient data',false]],
    };
  }

  // ---------------- LOGIC ----------------
  if (family === 'logic') {
    if (hasAny(t,['lượng từ'])) {
      const rows=[
        {vi:'Phủ định của “$\\forall x\\in\\mathbb R,\\ x^2\\ge0$” là',en:'The negation of “$\\forall x\\in\\mathbb R,\\ x^2\\ge0$” is',ans:'$\\exists x\\in\\mathbb R:x^2<0$',w:['$\\forall x:x^2<0$','$\\exists x:x^2\\ge0$','$\\forall x:x^2>0$']},
        {vi:'Phủ định của “$\\exists x\\in\\mathbb R,\\ x^2=2$” là',en:'The negation of “$\\exists x\\in\\mathbb R,\\ x^2=2$” is',ans:'$\\forall x\\in\\mathbb R:x^2\\ne2$',w:['$\\exists x:x^2\\ne2$','$\\forall x:x^2=2$','$\\exists x:x^2=2$']},
        {vi:'Mệnh đề “$\\forall n\\in\\mathbb N,\\ n+1>n$” là',en:'The proposition “$\\forall n\\in\\mathbb N,\\ n+1>n$” is',ans:'Đúng',w:['Sai','Không phải mệnh đề','Không xác định']},
        {vi:'Mệnh đề “$\\exists x\\in\\mathbb R,\\ x^2<0$” là',en:'The proposition “$\\exists x\\in\\mathbb R,\\ x^2<0$” is',ans:'Sai',w:['Đúng','Không phải mệnh đề','Không xác định']},
      ][variant%4]; return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng quy tắc phủ định lượng từ hoặc xét trực tiếp tính đúng sai.',solutionEn:'Use quantifier negation rules or evaluate the proposition.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['giao','hợp','hiệu','phần bù','tập hợp','tập con'])) {
      const rows=[
        {vi:'Cho $A=\\{1,2,3\\}$, $B=\\{3,4\\}$. Khi đó $A\\cap B$ bằng',en:'Given $A=\\{1,2,3\\}$, $B=\\{3,4\\}$. Find $A\\cap B$.',ans:'$\\{3\\}$',w:['$\\{1,2,4\\}$','$\\{1,2,3,4\\}$','$\\varnothing$']},
        {vi:'Cho $A=\\{1,2\\}$, $B=\\{2,3\\}$. Khi đó $A\\cup B$ bằng',en:'Given $A=\\{1,2\\}$, $B=\\{2,3\\}$. Find $A\\cup B$.',ans:'$\\{1,2,3\\}$',w:['$\\{2\\}$','$\\{1,3\\}$','$\\varnothing$']},
        {vi:'Cho $A=\\{1,2,3,4\\}$, $B=\\{2,4\\}$. Khi đó $A\\setminus B$ bằng',en:'Given $A=\\{1,2,3,4\\}$, $B=\\{2,4\\}$. Find $A\\setminus B$.',ans:'$\\{1,3\\}$',w:['$\\{2,4\\}$','$\\{1,2\\}$','$\\{3,4\\}$']},
        {vi:'Tập nào là tập con của $A=\\{1,2,3\\}$?',en:'Which set is a subset of $A=\\{1,2,3\\}$?',ans:'$\\{1,3\\}$',w:['$\\{1,4\\}$','$\\{0,2\\}$','$\\{3,5\\}$']},
      ][variant%4]; return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Thực hiện đúng phép toán tập hợp hoặc kiểm tra từng phần tử.',solutionEn:'Apply the set operation or subset definition.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['khoảng','đoạn'])) {
      const rows=[
        {ineq:'$1<x\\le3$',ans:'$(1,3]$',w:['$[1,3]$','$(1,3)$','$[1,3)$']},
        {ineq:'$-2\\le x<4$',ans:'$[-2,4)$',w:['$(-2,4)$','$[-2,4]$','$(-2,4]$']},
        {ineq:'$x>5$',ans:'$(5,+\\infty)$',w:['$[5,+\\infty)$','$(-\\infty,5)$','$(-\\infty,5]$']},
        {ineq:'$x\\le0$',ans:'$(-\\infty,0]$',w:['$(-\\infty,0)$','$[0,+\\infty)$','$(0,+\\infty)$']},
      ][variant%4]; return {vi:`Tập nghiệm của ${rows.ineq} viết bằng khoảng/đoạn là`,en:`Write the solution set of ${rows.ineq} in interval notation.`,answer:rows.ans,solutionVi:'Đổi dấu bất đẳng thức ở biên thành ngoặc tròn hoặc vuông tương ứng.',solutionEn:'Use open or closed endpoints according to the inequality.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    const rows=[
      {vi:'Mệnh đề “7 là số nguyên tố” có giá trị chân lí là',en:'The proposition “7 is prime” is',ans:'Đúng',w:['Sai','Không phải mệnh đề','Không xác định']},
      {vi:'Mệnh đề “9 là số nguyên tố” có giá trị chân lí là',en:'The proposition “9 is prime” is',ans:'Sai',w:['Đúng','Không phải mệnh đề','Không xác định']},
      {vi:'Câu “$x+1=3$” khi chưa cho $x$ có phải là mệnh đề xác định đúng/sai không?',en:'Is “$x+1=3$” without specifying $x$ a proposition with a fixed truth value?',ans:'Không',w:['Có','Luôn đúng','Luôn sai']},
      {vi:'Mệnh đề “Nếu 4 chia hết cho 2 thì 4 là số chẵn” có giá trị chân lí là',en:'The proposition “If 4 is divisible by 2, then 4 is even” is',ans:'Đúng',w:['Sai','Không xác định','Không phải mệnh đề']},
    ][variant%4]; return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Xét trực tiếp định nghĩa mệnh đề và giá trị chân lí.',solutionEn:'Use the definition of a proposition and evaluate its truth value.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
  }

  // ---------------- GEOMETRY ----------------
  if (family === 'geometry') {
    if (hasAny(t,['diện tích tam giác bằng các công thức lượng giác và heron'])) {
      const rows=[
        {vi:'Tam giác có hai cạnh $3,4$ và góc xen giữa $90^\\circ$. Diện tích bằng',en:'A triangle has sides $3,4$ with included angle $90^\\circ$. Its area is',ans:'6',w:['12','5','7']},
        {vi:'Tam giác có hai cạnh $5,6$ và góc xen giữa $30^\\circ$. Diện tích bằng',en:'A triangle has sides $5,6$ with included angle $30^\\circ$. Its area is',ans:'$15/2$',w:['15','$15\\sqrt3/2$','30']},
        {vi:'Tam giác có ba cạnh $3,4,5$. Diện tích theo công thức Heron bằng',en:'A triangle has side lengths $3,4,5$. By Heron formula, its area is',ans:'6',w:['12','5','7']},
        {vi:'Tam giác có ba cạnh $5,5,6$. Diện tích bằng',en:'A triangle has side lengths $5,5,6$. Its area is',ans:'12',w:['10','15','18']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng $S=\\dfrac12ab\\sin C$ hoặc công thức Heron.',solutionEn:'Use $S=\\frac12ab\\sin C$ or Heron formula.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['viết phương trình đường thẳng qua điểm']) && !hasAny(t,['không gian'])) {
      const rows=[
        {vi:'Đường thẳng qua $A(1,2)$, có vectơ pháp tuyến $\\vec n=(2,-1)$ có phương trình',en:'The line through $A(1,2)$ with normal vector $\\vec n=(2,-1)$ has equation',ans:'$2x-y=0$',w:['$x+2y=5$','$2x+y=4$','$x-y=0$']},
        {vi:'Đường thẳng qua $A(0,3)$, có vectơ pháp tuyến $\\vec n=(1,2)$ có phương trình',en:'The line through $A(0,3)$ with normal vector $\\vec n=(1,2)$ has equation',ans:'$x+2y-6=0$',w:['$2x+y-3=0$','$x-2y+6=0$','$x+2y-3=0$']},
        {vi:'Đường thẳng qua $A(2,-1)$, có vectơ chỉ phương $\\vec u=(1,1)$ có phương trình',en:'The line through $A(2,-1)$ with direction vector $\\vec u=(1,1)$ has equation',ans:'$x-y-3=0$',w:['$x+y-1=0$','$x-y+3=0$','$2x-y=0$']},
        {vi:'Đường thẳng qua $A(-1,1)$, có vectơ chỉ phương $\\vec u=(2,-1)$ có phương trình',en:'The line through $A(-1,1)$ with direction vector $\\vec u=(2,-1)$ has equation',ans:'$x+2y-1=0$',w:['$2x-y+3=0$','$x-2y+3=0$','$x+2y+1=0$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng vectơ pháp tuyến vuông góc với vectơ chỉ phương và thay tọa độ điểm đi qua.',solutionEn:'Use a normal perpendicular to the direction vector and the given point.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tính góc giữa hai đường thẳng trong không gian'])) {
      const rows=[
        {u:'$(1,0,0)$',v:'$(1,1,0)$',ans:'$45^\\circ$',w:['$30^\\circ$','$60^\\circ$','$90^\\circ$']},
        {u:'$(1,1,0)$',v:'$(1,-1,0)$',ans:'$90^\\circ$',w:['$0^\\circ$','$30^\\circ$','$45^\\circ$']},
        {u:'$(1,0,0)$',v:'$(\\sqrt3,1,0)$',ans:'$30^\\circ$',w:['$45^\\circ$','$60^\\circ$','$90^\\circ$']},
        {u:'$(1,0,0)$',v:'$(1,\\sqrt3,0)$',ans:'$60^\\circ$',w:['$30^\\circ$','$45^\\circ$','$90^\\circ$']},
      ][variant%4];
      return {vi:`Hai đường thẳng trong $Oxyz$ có vectơ chỉ phương $\\vec u=${bareMath(rows.u)}$ và $\\vec v=${bareMath(rows.v)}$. Góc giữa chúng bằng`,en:`Two lines in $Oxyz$ have direction vectors $\\vec u=${bareMath(rows.u)}$ and $\\vec v=${bareMath(rows.v)}$. Their angle is`,answer:rows.ans,solutionVi:'Dùng công thức tích vô hướng của hai vectơ chỉ phương.',solutionEn:'Use the dot-product angle formula for direction vectors.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['viết phương trình mặt phẳng từ điểm'])) {
      const rows=[
        {A:'$(1,2,3)$',n:'$(2,-1,1)$',ans:'$2x-y+z-3=0$',w:['$2x-y+z+3=0$','$x+2y+3z=0$','$2x+y-z-1=0$']},
        {A:'$(0,1,-1)$',n:'$(1,2,3)$',ans:'$x+2y+3z+1=0$',w:['$x+2y+3z-1=0$','$2x+y+3z=0$','$x-2y+3z+1=0$']},
        {A:'$(2,0,1)$',n:'$(-1,1,2)$',ans:'$-x+y+2z=0$',w:['$x-y-2z=0$','$-x+y+2z-2=0$','$-x+2y+z=0$']},
        {A:'$(-1,2,0)$',n:'$(3,1,-2)$',ans:'$3x+y-2z+1=0$',w:['$3x+y-2z-1=0$','$x+3y-2z=0$','$3x-y+2z+1=0$']},
      ][variant%4];
      return {vi:`Mặt phẳng qua $A=${bareMath(rows.A)}$ và có vectơ pháp tuyến $\\vec n=${bareMath(rows.n)}$ có phương trình`,en:`The plane through $A=${bareMath(rows.A)}$ with normal vector $\\vec n=${bareMath(rows.n)}$ has equation`,answer:rows.ans,solutionVi:'Dùng $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$.',solutionEn:'Use $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['viết phương trình tham số và chính tắc của đường thẳng'])) {
      const rows=[
        {A:'$(1,2,3)$',u:'$(2,-1,1)$',ans:'$x=1+2t,\\;y=2-t,\\;z=3+t$',w:['$x=1+t,\\;y=2+t,\\;z=3+t$','$x=2+t,\\;y=-1+2t,\\;z=1+3t$','$x=2t,\\;y=-t,\\;z=t$']},
        {A:'$(0,1,-1)$',u:'$(1,2,3)$',ans:'$x=t,\\;y=1+2t,\\;z=-1+3t$',w:['$x=1+t,\\;y=2t,\\;z=3t$','$x=t,\\;y=1+t,\\;z=-1+t$','$x=2t,\\;y=1+t,\\;z=-1+3t$']},
        {A:'$(2,0,1)$',u:'$(-1,1,2)$',ans:'$x=2-t,\\;y=t,\\;z=1+2t$',w:['$x=2+t,\\;y=-t,\\;z=1-2t$','$x=-t,\\;y=t,\\;z=2t$','$x=2-t,\\;y=1+t,\\;z=2t$']},
        {A:'$(-1,2,0)$',u:'$(3,1,-2)$',ans:'$x=-1+3t,\\;y=2+t,\\;z=-2t$',w:['$x=3-t,\\;y=1+2t,\\;z=-2t$','$x=-1+t,\\;y=2+3t,\\;z=-2t$','$x=3t,\\;y=t,\\;z=-2t$']},
      ][variant%4];
      return {vi:`Đường thẳng qua $A=${bareMath(rows.A)}$ và có vectơ chỉ phương $\\vec u=${bareMath(rows.u)}$ có phương trình tham số là`,en:`The line through $A=${bareMath(rows.A)}$ with direction vector $\\vec u=${bareMath(rows.u)}$ has parametric equations`,answer:rows.ans,solutionVi:'Dùng $M=A+t\\vec u$.',solutionEn:'Use $M=A+t\\vec u$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['xét vị trí tương đối của đường thẳng và mặt phẳng'])) {
      const rows=[
        {u:'$(1,0,0)$',n:'$(0,0,1)$',ans:'Song song',w:['Vuông góc','Cắt nhưng không vuông góc','Nằm trong mặt phẳng']},
        {u:'$(0,0,1)$',n:'$(0,0,1)$',ans:'Vuông góc',w:['Song song','Chéo nhau','Nằm trong mặt phẳng']},
        {u:'$(1,1,0)$',n:'$(1,0,0)$',ans:'Cắt nhưng không vuông góc',w:['Song song','Vuông góc','Trùng nhau']},
        {u:'$(0,1,0)$',n:'$(1,0,0)$',ans:'Song song',w:['Vuông góc','Cắt nhưng không vuông góc','Chéo nhau']},
      ][variant%4];
      return {vi:`Đường thẳng có vectơ chỉ phương $\\vec u=${bareMath(rows.u)}$, mặt phẳng có vectơ pháp tuyến $\\vec n=${bareMath(rows.n)}$. Quan hệ phương hướng là`,en:`A line has direction vector $\\vec u=${bareMath(rows.u)}$ and a plane has normal vector $\\vec n=${bareMath(rows.n)}$. Their directional relation is`,answer:rows.ans,solutionVi:'Xét tích vô hướng $\\vec u\\cdot\\vec n$.',solutionEn:'Inspect $\\vec u\\cdot\\vec n$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tìm tham số để góc trong không gian'])) {
      const rows=[
        {ang:'$45^\\circ$',ans:'1',w:['0','$\\sqrt3$','2']},
        {ang:'$30^\\circ$',ans:'$\\sqrt3$',w:['1','$1/\\sqrt3$','3']},
        {ang:'$60^\\circ$',ans:'$1/\\sqrt3$',w:['1','$\\sqrt3$','0']},
        {ang:'$90^\\circ$',ans:'0',w:['1','-1','$\\sqrt3$']},
      ][variant%4];
      return {vi:`Cho $\\vec u=(1,0,0)$ và $\\vec v=(m,1,0)$ với $m\\ge0$. Góc giữa hai vectơ bằng ${rows.ang}. Giá trị $m$ bằng`,en:`Let $\\vec u=(1,0,0)$ and $\\vec v=(m,1,0)$ with $m\\ge0$. Their angle is ${rows.ang}. Find $m$.`,answer:rows.ans,solutionVi:'Dùng công thức cosin của góc giữa hai vectơ và giải phương trình theo $m$.',solutionEn:'Use the vector angle formula and solve for $m$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['lập phương trình mặt cầu'])) {
      const rows=[
        {I:'$(1,-2,3)$',r:'4',ans:'$(x-1)^2+(y+2)^2+(z-3)^2=16$',w:['$(x+1)^2+(y-2)^2+(z+3)^2=16$','$(x-1)^2+(y+2)^2+(z-3)^2=4$','$x^2+y^2+z^2=16$']},
        {I:'$(-2,1,0)$',r:'3',ans:'$(x+2)^2+(y-1)^2+z^2=9$',w:['$(x-2)^2+(y+1)^2+z^2=9$','$(x+2)^2+(y-1)^2+z^2=3$','$x^2+y^2+z^2=9$']},
        {I:'$(0,3,-1)$',r:'5',ans:'$x^2+(y-3)^2+(z+1)^2=25$',w:['$x^2+(y+3)^2+(z-1)^2=25$','$x^2+(y-3)^2+(z+1)^2=5$','$x^2+y^2+z^2=25$']},
        {I:'$(4,0,2)$',r:'2',ans:'$(x-4)^2+y^2+(z-2)^2=4$',w:['$(x+4)^2+y^2+(z+2)^2=4$','$(x-4)^2+y^2+(z-2)^2=2$','$x^2+y^2+z^2=4$']},
      ][variant%4];
      return {vi:`Mặt cầu tâm $I=${bareMath(rows.I)}$, bán kính $R=${rows.r}$ có phương trình là`,en:`The sphere centered at $I=${bareMath(rows.I)}$ with radius $R=${rows.r}$ has equation`,answer:rows.ans,solutionVi:'Dùng $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.',solutionEn:'Use $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['tích có hướng']) && hasAny(t,['diện tích tam giác','thể tích tứ diện'])) {
      const rows=[
        {vi:'Cho $\\overrightarrow{AB}=(1,0,0)$, $\\overrightarrow{AC}=(0,2,0)$. Diện tích tam giác $ABC$ bằng',en:'Given $\\overrightarrow{AB}=(1,0,0)$ and $\\overrightarrow{AC}=(0,2,0)$, the area of triangle $ABC$ is',ans:'1',w:['2','$1/2$','4']},
        {vi:'Cho $\\overrightarrow{AB}=(2,0,0)$, $\\overrightarrow{AC}=(0,3,0)$. Diện tích tam giác $ABC$ bằng',en:'Given $\\overrightarrow{AB}=(2,0,0)$ and $\\overrightarrow{AC}=(0,3,0)$, the area of triangle $ABC$ is',ans:'3',w:['6','$3/2$','5']},
        {vi:'Tứ diện $OABC$ có $\\overrightarrow{OA}=(1,0,0)$, $\\overrightarrow{OB}=(0,2,0)$, $\\overrightarrow{OC}=(0,0,3)$. Thể tích bằng',en:'For tetrahedron $OABC$ with the given three vectors, the volume is',ans:'1',w:['6','3','$1/2$']},
        {vi:'Cho $\\overrightarrow{AB}=(1,1,0)$, $\\overrightarrow{AC}=(1,-1,0)$. Diện tích tam giác $ABC$ bằng',en:'Given $\\overrightarrow{AB}=(1,1,0)$ and $\\overrightarrow{AC}=(1,-1,0)$, the area of triangle $ABC$ is',ans:'1',w:['2','$\\sqrt2$','$1/2$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng $S=\\dfrac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$ hoặc $V=\\dfrac16|[\\vec a,\\vec b,\\vec c]|$.',solutionEn:'Use the cross-product area formula or the scalar triple product volume formula.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    // 3D-specific templates. These must come before generic plane-geometry fallbacks.
    if (hasAny(t,['xét vị trí tương đối của hai đường thẳng trong không gian'])) {
      const rows = [
        { d1:'$d_1:\\;x=1+t,\\;y=2+t,\\;z=3-t$', d2:'$d_2:\\;x=2+2s,\\;y=3+2s,\\;z=2-2s$', ans:'Song song', w:['Chéo nhau','Cắt nhau','Trùng nhau'] },
        { d1:'$d_1:\\;x=t,\\;y=1+t,\\;z=2t$', d2:'$d_2:\\;x=1-s,\\;y=2-s,\\;z=3-2s$', ans:'Song song', w:['Chéo nhau','Cắt nhau','Vuông góc'] },
        { d1:'$d_1:\\;x=1+t,\\;y=t,\\;z=2$', d2:'$d_2:\\;x=1,\\;y=s,\\;z=2+s$', ans:'Cắt nhau', w:['Song song','Chéo nhau','Trùng nhau'] },
        { d1:'$d_1:\\;x=2+t,\\;y=1-t,\\;z=3+2t$', d2:'$d_2:\\;x=2+2s,\\;y=1-2s,\\;z=3+4s$', ans:'Trùng nhau', w:['Song song','Chéo nhau','Cắt nhau'] },
      ][variant % 4];
      return {
        vi:`Trong không gian $Oxyz$, cho ${rows.d1} và ${rows.d2}. Vị trí tương đối của hai đường thẳng là`,
        en:`In $Oxyz$, let ${rows.d1} and ${rows.d2}. Their relative position is`,
        answer:rows.ans,
        solutionVi:'So sánh vectơ chỉ phương rồi kiểm tra điểm chung của hai đường thẳng.',
        solutionEn:'Compare direction vectors and check whether the lines share a point.',
        options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]],
      };
    }
    if (hasAny(t,['góc giữa hai đường thẳng']) && hasAny(t,['vectơ chỉ phương'])) {
      const rows = [
        {u:'$(1,0,0)$',v:'$(1,1,0)$',ans:'$45^\\circ$',w:['$30^\\circ$','$60^\\circ$','$90^\\circ$']},
        {u:'$(1,1,0)$',v:'$(1,-1,0)$',ans:'$90^\\circ$',w:['$0^\\circ$','$30^\\circ$','$45^\\circ$']},
        {u:'$(1,0,0)$',v:'$(\\sqrt3,1,0)$',ans:'$30^\\circ$',w:['$45^\\circ$','$60^\\circ$','$90^\\circ$']},
        {u:'$(1,0,0)$',v:'$(1,\\sqrt3,0)$',ans:'$60^\\circ$',w:['$30^\\circ$','$45^\\circ$','$90^\\circ$']},
      ][variant%4];
      return {
        vi:`Hai đường thẳng trong $Oxyz$ có vectơ chỉ phương $\\vec u=${bareMath(rows.u)}$ và $\\vec v=${bareMath(rows.v)}$. Góc giữa hai đường thẳng bằng`,
        en:`Two lines in $Oxyz$ have direction vectors $\\vec u=${bareMath(rows.u)}$ and $\\vec v=${bareMath(rows.v)}$. Their angle is`,
        answer:rows.ans,
        solutionVi:'Dùng $\\cos\\varphi=\\dfrac{|\\vec u\\cdot\\vec v|}{|\\vec u|\\,|\\vec v|}$.',
        solutionEn:'Use the dot-product formula for direction vectors.',
        options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]],
      };
    }
    if (hasAny(t,['góc giữa đường thẳng và mặt phẳng'])) {
      const rows = [
        {u:'$(0,0,1)$',n:'$(0,0,1)$',ans:'$90^\\circ$',w:['$0^\\circ$','$30^\\circ$','$45^\\circ$']},
        {u:'$(1,0,0)$',n:'$(0,0,1)$',ans:'$0^\\circ$',w:['$30^\\circ$','$45^\\circ$','$90^\\circ$']},
        {u:'$(1,0,1)$',n:'$(0,0,1)$',ans:'$45^\\circ$',w:['$0^\\circ$','$30^\\circ$','$90^\\circ$']},
        {u:'$(\\sqrt3,0,1)$',n:'$(0,0,1)$',ans:'$30^\\circ$',w:['$0^\\circ$','$45^\\circ$','$60^\\circ$']},
      ][variant%4];
      return {
        vi:`Đường thẳng có vectơ chỉ phương $\\vec u=${bareMath(rows.u)}$, mặt phẳng có vectơ pháp tuyến $\\vec n=${bareMath(rows.n)}$. Góc giữa đường thẳng và mặt phẳng bằng`,
        en:`A line has direction vector $\\vec u=${bareMath(rows.u)}$ and a plane has normal vector $\\vec n=${bareMath(rows.n)}$. Their angle is`,
        answer:rows.ans,
        solutionVi:'Dùng $\\sin\\alpha=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}$.',
        solutionEn:'Use the line-plane angle formula.',
        options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]],
      };
    }
    if (hasAny(t,['góc giữa hai mặt phẳng'])) {
      const rows = [
        {n1:'$(1,0,0)$',n2:'$(1,1,0)$',ans:'$45^\\circ$',w:['$30^\\circ$','$60^\\circ$','$90^\\circ$']},
        {n1:'$(1,0,0)$',n2:'$(0,1,0)$',ans:'$90^\\circ$',w:['$0^\\circ$','$30^\\circ$','$45^\\circ$']},
        {n1:'$(1,0,0)$',n2:'$(\\sqrt3,1,0)$',ans:'$30^\\circ$',w:['$45^\\circ$','$60^\\circ$','$90^\\circ$']},
        {n1:'$(1,0,0)$',n2:'$(1,\\sqrt3,0)$',ans:'$60^\\circ$',w:['$30^\\circ$','$45^\\circ$','$90^\\circ$']},
      ][variant%4];
      return {
        vi:`Hai mặt phẳng có vectơ pháp tuyến $\\vec n_1=${bareMath(rows.n1)}$ và $\\vec n_2=${bareMath(rows.n2)}$. Góc giữa hai mặt phẳng bằng`,
        en:`Two planes have normal vectors $\\vec n_1=${bareMath(rows.n1)}$ and $\\vec n_2=${bareMath(rows.n2)}$. Their angle is`,
        answer:rows.ans,
        solutionVi:'Góc giữa hai mặt phẳng là góc nhọn giữa hai vectơ pháp tuyến.',
        solutionEn:'The angle between the planes is the acute angle between the normal vectors.',
        options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]],
      };
    }
    if (hasAny(t,['mặt cầu'])) {
      const rows = [
        {eq:'$(x-1)^2+(y+2)^2+(z-3)^2=16$',center:'$I(1,-2,3)$',r:'4',w:['16','2','8']},
        {eq:'$(x+2)^2+(y-1)^2+z^2=9$',center:'$I(-2,1,0)$',r:'3',w:['9','6','1']},
        {eq:'$x^2+(y-3)^2+(z+1)^2=25$',center:'$I(0,3,-1)$',r:'5',w:['25','10','4']},
        {eq:'$(x-4)^2+y^2+(z-2)^2=4$',center:'$I(4,0,2)$',r:'2',w:['4','1','8']},
      ][variant%4];
      return {
        vi:`Mặt cầu ${rows.eq} có tâm ${rows.center}. Bán kính bằng`,
        en:`The sphere ${rows.eq} has center ${rows.center}. Its radius is`,
        answer:rows.r,
        solutionVi:`So sánh với $(x-a)^2+(y-b)^2+(z-c)^2=R^2$, suy ra $R=${rows.r}$.`,
        solutionEn:`Compare with $(x-a)^2+(y-b)^2+(z-c)^2=R^2$ to obtain $R=${rows.r}$.`,
        options:[[rows.r,rows.r,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]],
      };
    }
    if (hasAny(t,['tìm giao điểm, hình chiếu và khoảng cách liên quan đường thẳng'])) {
      const rows=[
        {p:'$A(1,2,3)$',d:'$d:\\;x=1+t,\\;y=2,\\;z=3$',ans:'0',w:['1','2','3']},
        {p:'$A(0,1,0)$',d:'$d:\\;x=t,\\;y=0,\\;z=0$',ans:'1',w:['0','2','3']},
        {p:'$A(0,0,2)$',d:'$d:\\;x=t,\\;y=0,\\;z=0$',ans:'2',w:['0','1','3']},
        {p:'$A(0,3,4)$',d:'$d:\\;x=t,\\;y=0,\\;z=0$',ans:'5',w:['3','4','7']},
      ][variant%4];
      return {
        vi:`Trong $Oxyz$, cho điểm ${rows.p} và đường thẳng ${rows.d}. Khoảng cách từ điểm đến đường thẳng bằng`,
        en:`In $Oxyz$, given point ${rows.p} and line ${rows.d}, the point-line distance is`,
        answer:rows.ans,
        solutionVi:'Dùng hình chiếu vuông góc của điểm lên đường thẳng hoặc công thức khoảng cách.',
        solutionEn:'Use the orthogonal projection or the point-line distance formula.',
        options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]],
      };
    }
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
    if (hasAny(t,['không gian','mặt phẳng','đường thẳng','mặt cầu','oxyz','tọa độ','toạ độ','vectơ'])) {
      const rows=[
        {a:'$(1,2,2)$',ans:'3',w:['2','4','6']},
        {a:'$(2,-1,2)$',ans:'3',w:['1','5','7']},
        {a:'$(1,2,3)$',ans:'$\\sqrt{14}$',w:['$\\sqrt6$','$\\sqrt{12}$','14']},
        {a:'$(2,3,6)$',ans:'7',w:['6','9','$\\sqrt{13}$']},
      ][variant%4];
      return {
        vi:`Trong không gian $Oxyz$, cho vectơ $\\vec a=${bareMath(rows.a)}$. Độ dài $|\\vec a|$ bằng`,
        en:`In $Oxyz$, let $\\vec a=${bareMath(rows.a)}$. Its length $|\\vec a|$ is`,
        answer:rows.ans,
        solutionVi:'Dùng $|\\vec a|=\\sqrt{x^2+y^2+z^2}$.',
        solutionEn:'Use $|\\vec a|=\\sqrt{x^2+y^2+z^2}$.',
        options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]],
      };
    }
    return {
      vi: 'Tam giác vuông có hai cạnh góc vuông dài $6$ và $8$. Độ dài cạnh huyền bằng', en: 'A right triangle has legs 6 and 8. Find the hypotenuse.', answer: '10',
      solutionVi: '$c=\\sqrt{6^2+8^2}=10$.', solutionEn: 'By Pythagoras, $c=10$.', options: [['10','10',true],['14','14',false],['7','7',false],['$2\\sqrt7$','$2\\sqrt7$',false]],
    };
  }

  return {
    vi: 'Giải phương trình $2x+3=11$. Nghiệm là', en: 'Solve $2x+3=11$.', answer: '$x=4$',
    solutionVi: '$2x=8\\Rightarrow x=4$.', solutionEn: '$2x=8$, so $x=4$.', options: [['$x=4$','$x=4$',true],['$x=7$','$x=7$',false],['$x=3$','$x=3$',false],['$x=5$','$x=5$',false]],
  };
}


function trueFalseSample(type: MathType, family: ExerciseFamily, index: number): Sample {
  const base = directSample(type, family, index + 1);
  const choices = (base.options && base.options.length >= 4)
    ? base.options.slice(0, 4)
    : [
        [base.answer, base.answer, true] as [string,string,boolean],
        ['0','0',false] as [string,string,boolean],
        ['1','1',false] as [string,string,boolean],
        ['Không xác định','Undetermined',false] as [string,string,boolean],
      ];
  const statements: Array<[string,string,boolean]> = choices.map((choice, i) => [
    `${String.fromCharCode(97+i)}) Kết quả có thể là ${choice[0]}.`,
    `${String.fromCharCode(97+i)}) A possible result is ${choice[1]}.`,
    choice[2],
  ]);
  return {
    vi: `Cho bài toán: ${base.vi.replace(/\s+là\s*$/,'')}. Xét tính đúng/sai của các kết quả sau:`,
    en: `For the problem: ${base.en.replace(/\s+is\s*$/,'')}. Determine whether the following proposed results are true or false:`,
    answer: statements.map((st, i) => `${String.fromCharCode(97+i)}-${st[2] ? 'Đ' : 'S'}`).join(', '),
    solutionVi: `${base.solutionVi} Do đó đối chiếu từng kết quả với đáp án ${base.answer}.`,
    solutionEn: `${base.solutionEn} Compare each proposed result with ${base.answer}.`,
    options: statements,
  };
}

function shortSample(type: MathType, family: ExerciseFamily, index: number): Sample {
  const direct = directSample(type, family, index + 1);
  // Convert the direct exercise into a short-answer prompt without showing choices.
  return {
    vi: `${direct.vi.replace(/\s+là\s*$/,'')}. Hãy ghi kết quả cuối cùng.`,
    en: `${direct.en.replace(/\s+is\s*$/,'')}. Give the final answer.`,
    answer: direct.answer,
    solutionVi: direct.solutionVi,
    solutionEn: direct.solutionEn,
  };
}

function essaySample(type: MathType, family: ExerciseFamily): Sample {
  const direct = directSample(type, family, 2);
  return {
    vi: `Giải chi tiết bài toán sau: ${direct.vi}`,
    en: `Solve the following problem in detail: ${direct.en}`,
    answer: direct.answer,
    solutionVi: `Gợi ý lời giải: ${direct.solutionVi} Sau khi tính toán, cần kết luận đúng theo yêu cầu của dạng “${type.title_vi}”.`,
    solutionEn: `Suggested solution: ${direct.solutionEn} Conclude explicitly according to “${type.title_en}”.`,
  };
}


function visualAssetsForType(type: MathType, kind: StaticKind, index: number): QuestionAsset[] | undefined {
  // Disable synthetic placeholder diagrams. Only source-authentic figures should be shown.
  return undefined;
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
    correct_answer: kind === 'TN' && sample.options
      ? (['A','B','C','D'][Math.max(0, sample.options.findIndex((item) => item[2]))] || 'A')
      : sample.answer,
    vocabulary_support: [],
    assets: visualAssetsForType(type, kind, index),
    formula_support: (lesson.formulas?.slice(0, 3) || []).map((f) => {
      const x = (f || '').trim();
      if (!x) return x;
      if ((x.startsWith('$$') && x.endsWith('$$')) || (x.startsWith('$') && x.endsWith('$'))) return x;
      return `$${x}$`;
    }),
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
  // 4 TN đều là bài tính/áp dụng. Không dùng câu hỏi thuộc phương pháp hay định nghĩa.
  out.push(makeQuestion(lesson, type, family, 'TN', 0, directSample(type, family, 0)));
  out.push(makeQuestion(lesson, type, family, 'TN', 1, directSample(type, family, 1)));
  out.push(makeQuestion(lesson, type, family, 'TN', 2, directSample(type, family, 2)));
  out.push(makeQuestion(lesson, type, family, 'TN', 3, directSample(type, family, 3)));
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
