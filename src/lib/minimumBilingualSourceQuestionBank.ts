import { Question, QuestionOption } from '../types';

type TruthKey = 'T' | 'F';

const optionKeys = ['A', 'B', 'C', 'D'];
const mcqOptions = (vi: string[], en: string[], correct: string): QuestionOption[] =>
  optionKeys.map((key, i) => ({
    option_key: key,
    content_vi: vi[i],
    content_en: en[i],
    is_correct: key === correct,
  }));

const dsOptions = (vi: string[], en: string[], truth: TruthKey[]): QuestionOption[] =>
  optionKeys.map((key, i) => ({
    option_key: key,
    content_vi: vi[i],
    content_en: en[i],
    is_correct: truth[i] === 'T',
  }));

const dsAnswer = (truth: TruthKey[]): string =>
  truth.map((v, i) => `${String.fromCharCode(97 + i)}-${v === 'T' ? 'Đ' : 'S'}`).join(', ');

const base = (
  id: string,
  topic_id: string,
  type_id: string,
  format_type: 'TN' | 'DS',
  question_type: 'MCQ' | 'TRUE_FALSE',
  question_vi: string,
  question_en: string,
  correct_answer: string,
  math_skill: string,
  source_name: string,
): Question => ({
  id,
  topic_id,
  type_id,
  format_type,
  question_type,
  difficulty: 'MEDIUM',
  language_level: 2,
  question_vi,
  question_en,
  correct_answer,
  solution_vi: 'Đáp án và dữ kiện đã được đối chiếu với tài liệu nguồn trước khi đưa vào ngân hàng.',
  solution_en: 'The data and answer key were checked against the source material before inclusion in the bank.',
  math_skill,
  english_skill: math_skill,
  status: 'PUBLISHED',
  created_by: 'curated-source-20260902',
  source_name,
  grading_safe: true,
  created_at: '2026-09-02T00:00:00.000Z',
  variant_tag: id,
});

const SRC10 = 'Kiểm tra theo bài Toán 10 - nguồn GV';
const PNL10 = 'Phan Nhật Linh - Toán 10 KNTT';

export const MINIMUM_BILINGUAL_SOURCE_QUESTION_BANK: Question[] = [
  // -----------------------------------------------------------------------
  // BÀI 1. MỆNH ĐỀ — bù đúng 11 câu English-ready còn thiếu ở cấu hình mặc định.
  // -----------------------------------------------------------------------
  {
    ...base('minbi10-b1-t0101-tn-01','top-10-1-1','type-kntt-10-01-01','TN','MCQ',
      'Câu nào sau đây không phải là mệnh đề?',
      'Which of the following is not a proposition?',
      'C','Nhận biết mệnh đề',SRC10),
    options: mcqOptions(
      ['$3$ là số nguyên tố.','Hai đường chéo của hình thoi vuông góc với nhau.','Đói bụng quá!','Bangkok là thủ đô của Thái Lan.'],
      ['$3$ is a prime number.','The diagonals of a rhombus are perpendicular.','I am so hungry!','Bangkok is the capital of Thailand.'],
      'C'),
    solution_vi: 'Câu cảm thán không có giá trị đúng hoặc sai xác định nên không phải là mệnh đề.',
    solution_en: 'An exclamation has no definite truth value, so it is not a proposition.',
  },
  {
    ...base('minbi10-b1-t0101-tn-02','top-10-1-1','type-kntt-10-01-01','TN','MCQ',
      'Trong các câu sau, câu nào là một mệnh đề?',
      'Which sentence is a proposition?',
      'B','Nhận biết mệnh đề',SRC10),
    options: mcqOptions(
      ['Không được làm việc riêng.','$7$ là số nguyên tố.','Hôm nay trời đẹp quá!','Bạn đã làm bài tập chưa?'],
      ['Do not do personal work.','$7$ is a prime number.','The weather is so nice today!','Have you done your homework?'],
      'B'),
    solution_vi: 'Câu “$7$ là số nguyên tố” có giá trị đúng xác định.',
    solution_en: 'The statement “$7$ is a prime number” has a definite truth value.',
  },
  {
    ...base('minbi10-b1-t0101-tn-03','top-10-1-1','type-kntt-10-01-01','TN','MCQ',
      'Câu nào sau đây là mệnh đề chứa biến?',
      'Which of the following is an open sentence containing a variable?',
      'D','Mệnh đề chứa biến',SRC10),
    options: mcqOptions(
      ['$1$ là số nguyên tố.','$0$ là số dương.','Một số chia hết cho $5$ thì có chữ số tận cùng là $0$ hoặc $5$.','$2n$ là số chẵn.'],
      ['$1$ is a prime number.','$0$ is positive.','A number divisible by $5$ ends in $0$ or $5$.','$2n$ is even.'],
      'D'),
    solution_vi: 'Câu “$2n$ là số chẵn” phụ thuộc vào biến $n$.',
    solution_en: 'The truth of “$2n$ is even” depends on the variable $n$.',
  },
  {
    ...base('minbi10-b1-t0101-ds-01','top-10-1-1','type-kntt-10-01-01','DS','TRUE_FALSE',
      'Xét tính đúng, sai của các mệnh đề sau.',
      'Determine whether each statement is true or false.',
      dsAnswer(['F','F','T','F']),'Nhận biết giá trị chân lý',SRC10),
    options: dsOptions(
      ['$24$ không chia hết cho $6$.','$14$ là số nguyên tố.','$\\dfrac{2}{3}<\\dfrac{3}{2}$.','$2+6=7$.'],
      ['$24$ is not divisible by $6$.','$14$ is a prime number.','$\\dfrac{2}{3}<\\dfrac{3}{2}$.','$2+6=7$.'],
      ['F','F','T','F']),
  },
  {
    ...base('minbi10-b1-t0101-ds-02','top-10-1-1','type-kntt-10-01-01','DS','TRUE_FALSE',
      'Xét tính đúng, sai của các phát biểu sau.',
      'Determine whether each statement is true or false.',
      dsAnswer(['F','T','T','F']),'Nhận biết giá trị chân lý',SRC10),
    options: dsOptions(
      ['$5$ là số chẵn.','Hai đường chéo của hình thoi vuông góc với nhau.','$x=-2$ là một nghiệm của $x^2-4=0$.','$3$ chia hết cho $15$.'],
      ['$5$ is even.','The diagonals of a rhombus are perpendicular.','$x=-2$ is a solution of $x^2-4=0$.','$3$ is divisible by $15$.'],
      ['F','T','T','F']),
  },
  {
    ...base('minbi10-b1-t0102-tn-01','top-10-1-1','type-kntt-10-01-02','TN','MCQ',
      'Gọi $P$: “Số tự nhiên $n$ có chữ số tận cùng là $5$” và $Q$: “$n$ chia hết cho $5$”. Cách phát biểu đúng của mệnh đề $P\\Rightarrow Q$ là',
      'Let $P$: “The natural number $n$ ends in $5$” and $Q$: “$n$ is divisible by $5$”. Which sentence correctly expresses $P\\Rightarrow Q$?',
      'A','Mệnh đề kéo theo',SRC10),
    options: mcqOptions(
      ['Nếu $n$ có chữ số tận cùng là $5$ thì $n$ chia hết cho $5$.','Nếu $n$ chia hết cho $5$ thì $n$ có chữ số tận cùng là $5$.','$n$ có chữ số tận cùng là $5$ khi và chỉ khi $n$ chia hết cho $5$.','$n$ không chia hết cho $5$ nếu $n$ có chữ số tận cùng là $5$.'],
      ['If $n$ ends in $5$, then $n$ is divisible by $5$.','If $n$ is divisible by $5$, then $n$ ends in $5$.','$n$ ends in $5$ if and only if $n$ is divisible by $5$.','$n$ is not divisible by $5$ if $n$ ends in $5$.'],
      'A'),
  },
  {
    ...base('minbi10-b1-t0102-tn-02','top-10-1-1','type-kntt-10-01-02','TN','MCQ',
      'Gọi $P$: “Tứ giác $ABCD$ là hình vuông” và $Q$: “Tứ giác $ABCD$ có bốn cạnh bằng nhau”. Mệnh đề nào đúng?',
      'Let $P$: “Quadrilateral $ABCD$ is a square” and $Q$: “Quadrilateral $ABCD$ has four equal sides”. Which statement is correct?',
      'B','Điều kiện cần và đủ',SRC10),
    options: mcqOptions(
      ['$Q\\Rightarrow P$ luôn đúng.','$P\\Rightarrow Q$ luôn đúng.','$P\\Leftrightarrow Q$ luôn đúng.','$P$ và $Q$ luôn đồng thời sai.'],
      ['$Q\\Rightarrow P$ is always true.','$P\\Rightarrow Q$ is always true.','$P\\Leftrightarrow Q$ is always true.','$P$ and $Q$ are always both false.'],
      'B'),
    solution_vi: 'Mọi hình vuông đều có bốn cạnh bằng nhau, nhưng tứ giác có bốn cạnh bằng nhau chưa chắc là hình vuông.',
    solution_en: 'Every square has four equal sides, but a quadrilateral with four equal sides need not be a square.',
  },
  {
    ...base('minbi10-b1-t0102-ds-01','top-10-1-1','type-kntt-10-01-02','DS','TRUE_FALSE',
      'Gọi $P$: “$n$ có chữ số tận cùng là $5$” và $Q$: “$n$ chia hết cho $5$”. Xét các phát biểu sau.',
      'Let $P$: “$n$ ends in $5$” and $Q$: “$n$ is divisible by $5$”. Determine whether each statement is true or false.',
      dsAnswer(['T','T','F','F']),'Điều kiện cần và đủ',SRC10),
    options: dsOptions(
      ['$P\\Rightarrow Q$ được phát biểu: “Nếu $n$ có chữ số tận cùng là $5$ thì $n$ chia hết cho $5$”.','$P$ là điều kiện đủ để có $Q$.','Mệnh đề $P\\Rightarrow Q$ là sai.','$Q$ là điều kiện cần và đủ để có $P$.'],
      ['$P\\Rightarrow Q$ can be stated as: “If $n$ ends in $5$, then $n$ is divisible by $5$.”','$P$ is a sufficient condition for $Q$.','The implication $P\\Rightarrow Q$ is false.','$Q$ is both necessary and sufficient for $P$.'],
      ['T','T','F','F']),
  },
  {
    ...base('minbi10-b1-t0102-ds-02','top-10-1-1','type-kntt-10-01-02','DS','TRUE_FALSE',
      'Gọi $P$: “$ABCD$ là hình vuông” và $Q$: “$ABCD$ có bốn cạnh bằng nhau”. Xét các phát biểu sau.',
      'Let $P$: “$ABCD$ is a square” and $Q$: “$ABCD$ has four equal sides”. Determine whether each statement is true or false.',
      dsAnswer(['F','T','T','F']),'Điều kiện cần và đủ',SRC10),
    options: dsOptions(
      ['$P$ là điều kiện cần để có $Q$.','$Q$ là điều kiện cần để có $P$.','Mệnh đề $P\\Rightarrow Q$ đúng.','Mệnh đề $Q\\Rightarrow P$ đúng.'],
      ['$P$ is a necessary condition for $Q$.','$Q$ is a necessary condition for $P$.','$P\\Rightarrow Q$ is true.','$Q\\Rightarrow P$ is true.'],
      ['F','T','T','F']),
  },
  {
    ...base('minbi10-b1-t0103-tn-01','top-10-1-1','type-kntt-10-01-03','TN','MCQ',
      'Phủ định của mệnh đề “$\\forall x\\in\\mathbb R,\\ x^2-2024x+2025>0$” là',
      'What is the negation of “$\\forall x\\in\\mathbb R,\\ x^2-2024x+2025>0$”?',
      'C','Phủ định mệnh đề chứa lượng từ',SRC10),
    options: mcqOptions(
      ['$\\forall x\\in\\mathbb R,\\ x^2-2024x+2025\\le0$','$\\exists x\\in\\mathbb R,\\ x^2-2024x+2025>0$','$\\exists x\\in\\mathbb R,\\ x^2-2024x+2025\\le0$','$\\forall x\\in\\mathbb R,\\ x^2-2024x+2025<0$'],
      ['$\\forall x\\in\\mathbb R,\\ x^2-2024x+2025\\le0$','$\\exists x\\in\\mathbb R,\\ x^2-2024x+2025>0$','$\\exists x\\in\\mathbb R,\\ x^2-2024x+2025\\le0$','$\\forall x\\in\\mathbb R,\\ x^2-2024x+2025<0$'],
      'C'),
  },
  {
    ...base('minbi10-b1-t0103-ds-01','top-10-1-1','type-kntt-10-01-03','DS','TRUE_FALSE',
      'Xét ba mệnh đề $P$: “$\\exists x\\in\\mathbb R: x^2=-4$”, $Q$: “$\\forall x\\in\\mathbb R: x^2+x+1\\ne0$”, $R$: “$\\forall x\\in\\mathbb R: x^2>0$”. Xét các phát biểu sau.',
      'Consider $P$: “$\\exists x\\in\\mathbb R: x^2=-4$”, $Q$: “$\\forall x\\in\\mathbb R: x^2+x+1\\ne0$”, and $R$: “$\\forall x\\in\\mathbb R: x^2>0$”. Determine whether each statement is true or false.',
      dsAnswer(['T','T','F','T']),'Lượng từ và giá trị chân lý',SRC10),
    options: dsOptions(
      ['$P$ là mệnh đề sai.','$Q$ là mệnh đề đúng.','$R$ là mệnh đề đúng.','$P$ và $R$ đều là mệnh đề sai.'],
      ['$P$ is false.','$Q$ is true.','$R$ is true.','Both $P$ and $R$ are false.'],
      ['T','T','F','T']),
    solution_vi: '$P$ sai vì không có số thực bình phương bằng $-4$; $Q$ đúng vì $\\Delta=-3<0$; $R$ sai tại $x=0$.',
    solution_en: '$P$ is false because no real square equals $-4$; $Q$ is true since $\\Delta=-3<0$; $R$ is false at $x=0$.',
  },

  // -----------------------------------------------------------------------
  // BÀI 2. TẬP HỢP — bù 1 TN.
  // -----------------------------------------------------------------------
  {
    ...base('minbi10-b2-t0201-tn-01','top-10-1-2','type-kntt-10-02-01','TN','MCQ',
      'Cho $A=\\{x\\in\\mathbb N\\mid x^2+2x-3=0\\}$. Tập hợp $A$ bằng',
      'Let $A=\\{x\\in\\mathbb N\\mid x^2+2x-3=0\\}$. Which set is $A$?',
      'C','Liệt kê phần tử của tập hợp',SRC10),
    options: mcqOptions(
      ['$\\{1,-3\\}$','$\\{0,1\\}$','$\\{1\\}$','$\\{-3\\}$'],
      ['$\\{1,-3\\}$','$\\{0,1\\}$','$\\{1\\}$','$\\{-3\\}$'],
      'C'),
    solution_vi: '$x^2+2x-3=(x-1)(x+3)=0$. Trong $\\mathbb N$ chỉ nhận $x=1$.',
    solution_en: '$x^2+2x-3=(x-1)(x+3)=0$. Only $x=1$ belongs to $\\mathbb N$.',
  },

  // -----------------------------------------------------------------------
  // BÀI 3. BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN — bù 4 TN + 2 Đ/S.
  // -----------------------------------------------------------------------
  {
    ...base('minbi10-b3-t0301-tn-01','top-10-2-1','type-kntt-10-03-01','TN','MCQ',
      'Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?',
      'Which of the following is a linear inequality in two variables?',
      'B','Nhận biết bất phương trình bậc nhất hai ẩn',SRC10),
    options: mcqOptions(
      ['$x-y+z+5<0$','$2x-y+7<0$','$x-y+z-5t>0$','$x^2-4x+2\\ge0$'],
      ['$x-y+z+5<0$','$2x-y+7<0$','$x-y+z-5t>0$','$x^2-4x+2\\ge0$'],
      'B'),
  },
  {
    ...base('minbi10-b3-t0301-tn-02','top-10-2-1','type-kntt-10-03-01','TN','MCQ',
      'Điểm $O(0,0)$ thuộc miền nghiệm của bất phương trình nào sau đây?',
      'For which inequality is $O(0,0)$ a solution?',
      'B','Kiểm tra một điểm thuộc miền nghiệm',SRC10),
    options: mcqOptions(
      ['$x-y+1<0$','$2x-y+1>0$','$-2x+y-2>0$','$x-2y>0$'],
      ['$x-y+1<0$','$2x-y+1>0$','$-2x+y-2>0$','$x-2y>0$'],
      'B'),
  },
  {
    ...base('minbi10-b3-t0301-tn-03','top-10-2-1','type-kntt-10-03-01','TN','MCQ',
      'Cặp số nào sau đây là một nghiệm của bất phương trình $2x+3y\\le5$?',
      'Which ordered pair satisfies $2x+3y\\le5$?',
      'A','Kiểm tra nghiệm của bất phương trình',SRC10),
    options: mcqOptions(
      ['$(-2,1)$','$(1,2)$','$(2,1)$','$(4,0)$'],
      ['$(-2,1)$','$(1,2)$','$(2,1)$','$(4,0)$'],
      'A'),
  },
  {
    ...base('minbi10-b3-t0301-tn-04','top-10-2-1','type-kntt-10-03-01','TN','MCQ',
      'Trong các bất phương trình sau, bất phương trình nào có dạng bậc nhất hai ẩn?',
      'Which inequality has the form of a first-degree inequality in two variables?',
      'D','Nhận biết bất phương trình bậc nhất hai ẩn',SRC10),
    options: mcqOptions(
      ['$x^2+y>1$','$x+y+z\\le2$','$xy<3$','$3x+2y>1$'],
      ['$x^2+y>1$','$x+y+z\\le2$','$xy<3$','$3x+2y>1$'],
      'D'),
  },
  {
    ...base('minbi10-b3-t0301-ds-01','top-10-2-1','type-kntt-10-03-01','DS','TRUE_FALSE',
      'Cho bất phương trình $2x-y+3>0$. Xét các phát biểu sau.',
      'Consider the inequality $2x-y+3>0$. Determine whether each statement is true or false.',
      dsAnswer(['F','T','F','T']),'Miền nghiệm bất phương trình',SRC10),
    options: dsOptions(
      ['Miền nghiệm chứa đường thẳng biên $2x-y+3=0$.','Đây là bất phương trình bậc nhất hai ẩn.','Điểm $(-1,1)$ thuộc miền nghiệm.','Điểm $(1,-1)$ thuộc miền nghiệm.'],
      ['The solution region contains the boundary line $2x-y+3=0$.','This is a linear inequality in two variables.','$(-1,1)$ belongs to the solution region.','$(1,-1)$ belongs to the solution region.'],
      ['F','T','F','T']),
  },
  {
    ...base('minbi10-b3-t0301-ds-02','top-10-2-1','type-kntt-10-03-01','DS','TRUE_FALSE',
      'Xét các phát biểu sau về bất phương trình bậc nhất hai ẩn.',
      'Determine whether each statement about linear inequalities in two variables is true or false.',
      dsAnswer(['T','T','T','F']),'Nhận biết và kiểm tra nghiệm',SRC10),
    options: dsOptions(
      ['$2x-y+7<0$ là bất phương trình bậc nhất hai ẩn.','Điểm $(0,0)$ thỏa mãn $2x-y+1>0$.','Điểm $(-2,1)$ thỏa mãn $2x+3y\\le5$.','$3x-y^2\\le0$ là bất phương trình bậc nhất hai ẩn.'],
      ['$2x-y+7<0$ is a linear inequality in two variables.','$(0,0)$ satisfies $2x-y+1>0$.','$(-2,1)$ satisfies $2x+3y\\le5$.','$3x-y^2\\le0$ is a linear inequality in two variables.'],
      ['T','T','T','F']),
  },

  // -----------------------------------------------------------------------
  // BÀI 5. GIÁ TRỊ LƯỢNG GIÁC — bù 1 Đ/S.
  // -----------------------------------------------------------------------
  {
    ...base('minbi10-b5-t0501-ds-01','top-10-3-1','type-kntt-10-05-01','DS','TRUE_FALSE',
      'Cho $\\sin\\alpha=\\dfrac{3}{5}$ và $90^\\circ<\\alpha<180^\\circ$. Xét các phát biểu sau.',
      'Given $\\sin\\alpha=\\dfrac{3}{5}$ and $90^\\circ<\\alpha<180^\\circ$, determine whether each statement is true or false.',
      dsAnswer(['F','T','F','F']),'Giá trị lượng giác góc từ 0 đến 180 độ',PNL10),
    options: dsOptions(
      ['$\\cos\\alpha>0$.','$\\cos^2\\alpha=\\dfrac{16}{25}$.','$\\cos\\alpha=\\dfrac{4}{5}$.','$\\tan\\alpha=\\dfrac{3}{4}$.'],
      ['$\\cos\\alpha>0$.','$\\cos^2\\alpha=\\dfrac{16}{25}$.','$\\cos\\alpha=\\dfrac{4}{5}$.','$\\tan\\alpha=\\dfrac{3}{4}$.'],
      ['F','T','F','F']),
    solution_vi: 'Vì $\\alpha$ thuộc góc phần tư II nên $\\cos\\alpha=-\\dfrac45$ và $\\tan\\alpha=-\\dfrac34$.',
    solution_en: 'Since $\\alpha$ lies in quadrant II, $\\cos\\alpha=-\\dfrac45$ and $\\tan\\alpha=-\\dfrac34$.',
  },

  // -----------------------------------------------------------------------
  // BÀI 7. KHÁI NIỆM VECTƠ — bù 2 TN + 2 Đ/S.
  // -----------------------------------------------------------------------
  {
    ...base('minbi10-b7-t0701-tn-01','top-10-4-1','type-kntt-10-07-01','TN','MCQ',
      'Trong hình vuông $ABCD$ có tâm $O$, vectơ nào sau đây là vectơ không?',
      'In square $ABCD$ with center $O$, which vector is the zero vector?',
      'D','Vectơ không',SRC10),
    options: mcqOptions(
      ['$\\overrightarrow{AB}$','$\\overrightarrow{OC}$','$\\overrightarrow{BD}$','$\\overrightarrow{BB}$'],
      ['$\\overrightarrow{AB}$','$\\overrightarrow{OC}$','$\\overrightarrow{BD}$','$\\overrightarrow{BB}$'],
      'D'),
  },
  {
    ...base('minbi10-b7-t0701-ds-01','top-10-4-1','type-kntt-10-07-01','DS','TRUE_FALSE',
      'Xét các phát biểu cơ bản về vectơ.',
      'Determine whether each basic statement about vectors is true or false.',
      dsAnswer(['T','T','F','T']),'Khái niệm vectơ',SRC10),
    options: dsOptions(
      ['$\\overrightarrow{BB}$ là vectơ không.','Hai vectơ bằng nhau thì cùng hướng và cùng độ dài.','Hai vectơ cùng phương luôn cùng hướng.','Vectơ không có độ dài bằng $0$.'],
      ['$\\overrightarrow{BB}$ is the zero vector.','Equal vectors have the same direction and the same magnitude.','Collinear vectors always have the same direction.','The zero vector has magnitude $0$.'],
      ['T','T','F','T']),
  },
  {
    ...base('minbi10-b7-t0702-tn-01','top-10-4-1','type-kntt-10-07-02','TN','MCQ',
      'Ba điểm $A,C,B$ thẳng hàng và $C$ nằm giữa $A$ và $B$. Khẳng định nào đúng?',
      'Points $A,C,B$ are collinear and $C$ lies between $A$ and $B$. Which statement is correct?',
      'D','Hai vectơ cùng phương và cùng hướng',SRC10),
    options: mcqOptions(
      ['$\\overrightarrow{CA}=\\overrightarrow{CB}$.','$\\overrightarrow{AB}=\\overrightarrow{BC}$.','$\\overrightarrow{AB}$ và $\\overrightarrow{CB}$ ngược hướng.','$\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng hướng.'],
      ['$\\overrightarrow{CA}=\\overrightarrow{CB}$.','$\\overrightarrow{AB}=\\overrightarrow{BC}$.','$\\overrightarrow{AB}$ and $\\overrightarrow{CB}$ have opposite directions.','$\\overrightarrow{AB}$ and $\\overrightarrow{AC}$ have the same direction.'],
      'D'),
  },
  {
    ...base('minbi10-b7-t0702-ds-01','top-10-4-1','type-kntt-10-07-02','DS','TRUE_FALSE',
      'Ba điểm $A,C,B$ thẳng hàng và $C$ nằm giữa $A$ và $B$. Xét các phát biểu sau.',
      'Points $A,C,B$ are collinear and $C$ lies between $A$ and $B$. Determine whether each statement is true or false.',
      dsAnswer(['T','T','T','F']),'Phương và hướng của vectơ',SRC10),
    options: dsOptions(
      ['$\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng hướng.','$\\overrightarrow{CA}$ và $\\overrightarrow{CB}$ ngược hướng.','$\\overrightarrow{AB}$ và $\\overrightarrow{CB}$ cùng hướng.','$\\overrightarrow{AC}$ và $\\overrightarrow{CB}$ ngược hướng.'],
      ['$\\overrightarrow{AB}$ and $\\overrightarrow{AC}$ have the same direction.','$\\overrightarrow{CA}$ and $\\overrightarrow{CB}$ have opposite directions.','$\\overrightarrow{AB}$ and $\\overrightarrow{CB}$ have the same direction.','$\\overrightarrow{AC}$ and $\\overrightarrow{CB}$ have opposite directions.'],
      ['T','T','T','F']),
  },

  // -----------------------------------------------------------------------
  // BÀI 9. TÍCH CỦA MỘT SỐ VỚI MỘT VECTƠ — bù 3 TN + 2 Đ/S.
  // -----------------------------------------------------------------------
  {
    ...base('minbi10-b9-t0902-tn-01','top-10-4-3','type-kntt-10-09-02','TN','MCQ',
      'Cho hình thang $MNPQ$ có $MN\\parallel PQ$ và $MN=2PQ$ về độ dài. Đẳng thức vectơ nào đúng?',
      'In trapezoid $MNPQ$, suppose $MN\\parallel PQ$ and the length of $MN$ is twice the length of $PQ$. Which vector identity is correct?',
      'C','Tích một số với vectơ',SRC10),
    options: mcqOptions(
      ['$\\overrightarrow{MN}=2\\overrightarrow{PQ}$','$2\\overrightarrow{MN}=-\\overrightarrow{PQ}$','$\\overrightarrow{MN}=-2\\overrightarrow{PQ}$','$\\overrightarrow{PQ}=-2\\overrightarrow{MN}$'],
      ['$\\overrightarrow{MN}=2\\overrightarrow{PQ}$','$2\\overrightarrow{MN}=-\\overrightarrow{PQ}$','$\\overrightarrow{MN}=-2\\overrightarrow{PQ}$','$\\overrightarrow{PQ}=-2\\overrightarrow{MN}$'],
      'C'),
  },
  {
    ...base('minbi10-b9-t0902-tn-02','top-10-4-3','type-kntt-10-09-02','TN','MCQ',
      'Cho $\\overrightarrow{JC}=-3\\overrightarrow{JS}$. Khẳng định nào sau đây sai?',
      'Given $\\overrightarrow{JC}=-3\\overrightarrow{JS}$. Which statement is false?',
      'C','Tích một số với vectơ',SRC10),
    options: mcqOptions(
      ['$J,C,S$ thẳng hàng.','$\\overrightarrow{JC}$ và $\\overrightarrow{JS}$ ngược hướng.','$\\overrightarrow{CS}=4\\overrightarrow{SJ}$.','$\\overrightarrow{CJ}+3\\overrightarrow{SJ}=\\vec0$.'],
      ['$J,C,S$ are collinear.','$\\overrightarrow{JC}$ and $\\overrightarrow{JS}$ have opposite directions.','$\\overrightarrow{CS}=4\\overrightarrow{SJ}$.','$\\overrightarrow{CJ}+3\\overrightarrow{SJ}=\\vec0$.'],
      'C'),
  },
  {
    ...base('minbi10-b9-t0902-tn-03','top-10-4-3','type-kntt-10-09-02','TN','MCQ',
      'Cho $\\overrightarrow{OM}=3\\vec a$ và $\\overrightarrow{ON}=-14\\vec a$. Khi đó $\\overrightarrow{MN}$ bằng',
      'Given $\\overrightarrow{OM}=3\\vec a$ and $\\overrightarrow{ON}=-14\\vec a$. Find $\\overrightarrow{MN}$.',
      'A','Hiệu hai vectơ cùng phương',SRC10),
    options: mcqOptions(
      ['$-17\\vec a$','$17\\vec a$','$-11\\vec a$','$11\\vec a$'],
      ['$-17\\vec a$','$17\\vec a$','$-11\\vec a$','$11\\vec a$'],
      'A'),
    solution_vi: '$\\overrightarrow{MN}=\\overrightarrow{ON}-\\overrightarrow{OM}=-14\\vec a-3\\vec a=-17\\vec a$.',
    solution_en: '$\\overrightarrow{MN}=\\overrightarrow{ON}-\\overrightarrow{OM}=-14\\vec a-3\\vec a=-17\\vec a$.',
  },
  {
    ...base('minbi10-b9-t0902-ds-01','top-10-4-3','type-kntt-10-09-02','DS','TRUE_FALSE',
      'Cho hình thang $MNPQ$ có $MN\\parallel PQ$ và $MN=2PQ$ về độ dài. Xét các phát biểu sau.',
      'In trapezoid $MNPQ$, suppose $MN\\parallel PQ$ and the length of $MN$ is twice the length of $PQ$. Determine whether each statement is true or false.',
      dsAnswer(['T','F','T','F']),'Tích một số với vectơ',SRC10),
    options: dsOptions(
      ['$\\overrightarrow{MN}=-2\\overrightarrow{PQ}$.','$\\overrightarrow{MN}$ và $\\overrightarrow{PQ}$ cùng hướng.','$|\\overrightarrow{MN}|=2|\\overrightarrow{PQ}|$.','$2\\overrightarrow{MN}+\\overrightarrow{PQ}=\\vec0$.'],
      ['$\\overrightarrow{MN}=-2\\overrightarrow{PQ}$.','$\\overrightarrow{MN}$ and $\\overrightarrow{PQ}$ have the same direction.','$|\\overrightarrow{MN}|=2|\\overrightarrow{PQ}|$.','$2\\overrightarrow{MN}+\\overrightarrow{PQ}=\\vec0$.'],
      ['T','F','T','F']),
  },
  {
    ...base('minbi10-b9-t0902-ds-02','top-10-4-3','type-kntt-10-09-02','DS','TRUE_FALSE',
      'Cho $\\overrightarrow{JC}=-3\\overrightarrow{JS}$. Xét các phát biểu sau.',
      'Given $\\overrightarrow{JC}=-3\\overrightarrow{JS}$. Determine whether each statement is true or false.',
      dsAnswer(['T','T','F','T']),'Tích một số với vectơ',SRC10),
    options: dsOptions(
      ['$J,C,S$ thẳng hàng.','$\\overrightarrow{JC}$ và $\\overrightarrow{JS}$ ngược hướng.','$C$ và $S$ nằm cùng phía đối với $J$.','$\\overrightarrow{CJ}=3\\overrightarrow{JS}$.'],
      ['$J,C,S$ are collinear.','$\\overrightarrow{JC}$ and $\\overrightarrow{JS}$ have opposite directions.','$C$ and $S$ lie on the same side of $J$.','$\\overrightarrow{CJ}=3\\overrightarrow{JS}$.'],
      ['T','T','F','T']),
  },

  // -----------------------------------------------------------------------
  // BÀI 11. TÍCH VÔ HƯỚNG — bù 2 TN + 1 Đ/S.
  // -----------------------------------------------------------------------
  {
    ...base('minbi10-b11-t1103-tn-01','top-10-4-5','type-kntt-10-11-03','TN','MCQ',
      'Cho $\\vec a=(1,2)$ và $\\vec b=(2,-1)$. Quan hệ giữa hai vectơ là',
      'Given $\\vec a=(1,2)$ and $\\vec b=(2,-1)$. What is the relation between the two vectors?',
      'A','Kiểm tra vuông góc bằng tọa độ',SRC10),
    options: mcqOptions(
      ['Vuông góc.','Cùng hướng.','Ngược hướng.','Không xác định được.'],
      ['Perpendicular.','Same direction.','Opposite directions.','Cannot be determined.'],
      'A'),
    solution_vi: '$\\vec a\\cdot\\vec b=1\\cdot2+2\\cdot(-1)=0$, nên hai vectơ vuông góc.',
    solution_en: '$\\vec a\\cdot\\vec b=1\\cdot2+2\\cdot(-1)=0$, so the vectors are perpendicular.',
  },
  {
    ...base('minbi10-b11-t1103-ds-01','top-10-4-5','type-kntt-10-11-03','DS','TRUE_FALSE',
      'Cho $\\vec a=(1,2)$ và $\\vec b=(2,-1)$. Xét các phát biểu sau.',
      'Given $\\vec a=(1,2)$ and $\\vec b=(2,-1)$. Determine whether each statement is true or false.',
      dsAnswer(['T','F','F','F']),'Kiểm tra vuông góc bằng tọa độ',SRC10),
    options: dsOptions(
      ['$\\vec a\\perp\\vec b$.','$\\vec a$ và $\\vec b$ cùng hướng.','$\\vec a$ và $\\vec b$ ngược hướng.','$\\vec a\\cdot\\vec b\\ne0$.'],
      ['$\\vec a\\perp\\vec b$.','$\\vec a$ and $\\vec b$ have the same direction.','$\\vec a$ and $\\vec b$ have opposite directions.','$\\vec a\\cdot\\vec b\\ne0$.'],
      ['T','F','F','F']),
  },
  {
    ...base('minbi10-b11-t1104-tn-01','top-10-4-5','type-kntt-10-11-04','TN','MCQ',
      'Một lực có độ lớn $70\\,\\mathrm N$ làm vật dịch chuyển $12\\,\\mathrm m$ theo hướng tạo với lực một góc $45^\\circ$. Công của lực bằng',
      'A force of magnitude $70\\,\\mathrm N$ moves an object $12\\,\\mathrm m$ in a direction making a $45^\\circ$ angle with the force. The work done is',
      'B','Ứng dụng tích vô hướng trong công cơ học',SRC10),
    options: mcqOptions(
      ['$420\\,\\mathrm J$','$420\\sqrt2\\,\\mathrm J$','$840\\,\\mathrm J$','$0\\,\\mathrm J$'],
      ['$420\\,\\mathrm J$','$420\\sqrt2\\,\\mathrm J$','$840\\,\\mathrm J$','$0\\,\\mathrm J$'],
      'B'),
    solution_vi: '$A=Fs\\cos45^\\circ=70\\cdot12\\cdot\\dfrac{\\sqrt2}{2}=420\\sqrt2\\,\\mathrm J\\approx594\\,\\mathrm J$.',
    solution_en: '$W=Fs\\cos45^\\circ=70\\cdot12\\cdot\\dfrac{\\sqrt2}{2}=420\\sqrt2\\,\\mathrm J\\approx594\\,\\mathrm J$.',
  },

  // -----------------------------------------------------------------------
  // BÀI 13. XU THẾ TRUNG TÂM — bù 1 Đ/S.
  // -----------------------------------------------------------------------
  {
    ...base('minbi10-b13-t1303-ds-01','top-10-5-2','type-kntt-10-13-03','DS','TRUE_FALSE',
      'Cân nặng (kg) của một nhóm học sinh là $37,37,40,42,45,40,42,42,55$. Xét các phát biểu sau.',
      'The weights (kg) of a group of students are $37,37,40,42,45,40,42,42,55$. Determine whether each statement is true or false.',
      dsAnswer(['T','F','F','T']),'Mốt và lựa chọn số đặc trưng',SRC10),
    options: dsOptions(
      ['Có hai học sinh nặng $37$ kg.','Trung vị của mẫu là $45$ kg.','Mốt của mẫu là $55$ kg.','Các giá trị tập trung nhiều hơn quanh vùng giữa mẫu so với phía giá trị lớn nhất.'],
      ['Two students weigh $37$ kg.','The median is $45$ kg.','The mode is $55$ kg.','The observations are more concentrated around the middle of the sample than near the largest value.'],
      ['T','F','F','T']),
    solution_vi: 'Mẫu đã sắp có trung vị $42$ và mốt $42$; chỉ có một giá trị lớn $55$ ở phía phải.',
    solution_en: 'The median is $42$ and the mode is $42$; only one large value, $55$, lies on the right.',
  },

  // -----------------------------------------------------------------------
  // BÀI 14. MỨC ĐỘ PHÂN TÁN — bù 4 TN + 2 Đ/S cho dạng so sánh/ngoại lệ.
  // -----------------------------------------------------------------------
  {
    ...base('minbi10-b14-t1403-tn-01','top-10-5-3','type-kntt-10-14-03','TN','MCQ',
      'Cho mẫu số liệu $26,12,3,9,10,9,12,3,10$. Giá trị ngoại lệ của mẫu là',
      'For the data $26,12,3,9,10,9,12,3,10$, which value is an outlier?',
      'D','Phân tích ngoại lệ bằng khoảng tứ phân vị',SRC10),
    options: mcqOptions(['$3$','$9$','$12$','$26$'],['$3$','$9$','$12$','$26$'],'D'),
    solution_vi: 'Sắp xếp được $3,3,9,9,10,10,12,12,26$. Khi đó $Q_1=6$, $Q_3=12$, $IQR=6$; ngưỡng trên là $21$, nên $26$ là ngoại lệ.',
    solution_en: 'Sorted data are $3,3,9,9,10,10,12,12,26$. Here $Q_1=6$, $Q_3=12$, $IQR=6$, and the upper fence is $21$, so $26$ is an outlier.',
  },
  {
    ...base('minbi10-b14-t1403-tn-02','top-10-5-3','type-kntt-10-14-03','TN','MCQ',
      'Một mẫu số liệu natri (mg) đã sắp là $0,50,70,100,130,140,140,150,160,180,180,180,190,200,200,210,210,220,290,340$. Mẫu có bao nhiêu giá trị ngoại lệ theo quy tắc $1.5IQR$?',
      'A sorted sodium data set (mg) is $0,50,70,100,130,140,140,150,160,180,180,180,190,200,200,210,210,220,290,340$. How many outliers are there by the $1.5IQR$ rule?',
      'C','Phân tích ngoại lệ',SRC10),
    options: mcqOptions(['$0$','$1$','$2$','$3$'],['$0$','$1$','$2$','$3$'],'C'),
    solution_vi: '$Q_1=135$, $Q_3=205$, $IQR=70$. Hai ngưỡng là $30$ và $310$, nên $0$ và $340$ là hai ngoại lệ.',
    solution_en: '$Q_1=135$, $Q_3=205$, and $IQR=70$. The fences are $30$ and $310$, so $0$ and $340$ are outliers.',
  },
  {
    ...base('minbi10-b14-t1403-tn-03','top-10-5-3','type-kntt-10-14-03','TN','MCQ',
      'Hai mẫu số liệu có cùng số trung bình. Mẫu $A$ có độ lệch chuẩn bằng $2$ và mẫu $B$ có độ lệch chuẩn bằng $5$. Mẫu nào phân tán hơn?',
      'Two data sets have the same mean. Sample $A$ has standard deviation $2$ and sample $B$ has standard deviation $5$. Which sample is more dispersed?',
      'B','So sánh mức độ phân tán',SRC10),
    options: mcqOptions(
      ['Mẫu $A$.','Mẫu $B$.','Hai mẫu phân tán như nhau.','Không thể so sánh.'],
      ['Sample $A$.','Sample $B$.','The two samples have the same dispersion.','The comparison cannot be made.'],
      'B'),
    solution_vi: 'Khi so sánh bằng độ lệch chuẩn, mẫu có độ lệch chuẩn lớn hơn phân tán hơn; vì $5>2$ nên mẫu $B$ phân tán hơn.',
    solution_en: 'When dispersion is compared by standard deviation, the larger standard deviation indicates greater spread; since $5>2$, sample $B$ is more dispersed.',
  },
  {
    ...base('minbi10-b14-t1403-tn-04','top-10-5-3','type-kntt-10-14-03','TN','MCQ',
      'Với mẫu $26,12,3,9,10,9,12,3,10$, sau khi loại giá trị ngoại lệ $26$, kết luận nào đúng khi so sánh mức độ phân tán theo khoảng biến thiên?',
      'For the data $26,12,3,9,10,9,12,3,10$, after removing the outlier $26$, which conclusion is correct when dispersion is compared by range?',
      'A','So sánh mức độ phân tán khi có ngoại lệ',SRC10),
    options: mcqOptions(
      ['Khoảng biến thiên giảm.','Khoảng biến thiên tăng.','Khoảng biến thiên không đổi.','Không thể so sánh.'],
      ['The range decreases.','The range increases.','The range is unchanged.','The comparison cannot be made.'],
      'A'),
    solution_vi: 'Ban đầu khoảng biến thiên là $26-3=23$; sau khi bỏ $26$, khoảng biến thiên là $12-3=9$.',
    solution_en: 'The original range is $26-3=23$; after removing $26$, the range is $12-3=9$.',
  },
  {
    ...base('minbi10-b14-t1403-ds-01','top-10-5-3','type-kntt-10-14-03','DS','TRUE_FALSE',
      'Cho mẫu $26,12,3,9,10,9,12,3,10$. Xét các phát biểu sau.',
      'For the data $26,12,3,9,10,9,12,3,10$, determine whether each statement is true or false.',
      dsAnswer(['T','T','T','F']),'Khoảng tứ phân vị và ngoại lệ',SRC10),
    options: dsOptions(
      ['$Q_1=6$.','$Q_3=12$.','$26$ là giá trị ngoại lệ theo quy tắc $1.5IQR$.','$3$ là giá trị ngoại lệ theo quy tắc $1.5IQR$.'],
      ['$Q_1=6$.','$Q_3=12$.','$26$ is an outlier by the $1.5IQR$ rule.','$3$ is an outlier by the $1.5IQR$ rule.'],
      ['T','T','T','F']),
  },
  {
    ...base('minbi10-b14-t1403-ds-02','top-10-5-3','type-kntt-10-14-03','DS','TRUE_FALSE',
      'Cho mẫu natri (mg) đã sắp $0,50,70,100,130,140,140,150,160,180,180,180,190,200,200,210,210,220,290,340$. Xét các phát biểu sau.',
      'For the sorted sodium data (mg) $0,50,70,100,130,140,140,150,160,180,180,180,190,200,200,210,210,220,290,340$, determine whether each statement is true or false.',
      dsAnswer(['T','T','T','F']),'Phân tích ngoại lệ bằng khoảng tứ phân vị',SRC10),
    options: dsOptions(
      ['$Q_1=135$.','$Q_3=205$.','Mẫu có đúng hai giá trị ngoại lệ là $0$ và $340$.','$290$ là một giá trị ngoại lệ.'],
      ['$Q_1=135$.','$Q_3=205$.','The data set has exactly two outliers, $0$ and $340$.','$290$ is an outlier.'],
      ['T','T','T','F']),
  },
];
