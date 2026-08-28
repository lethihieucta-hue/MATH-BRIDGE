export interface LessonTheoryEntry {
  summary_vi: string;
  formulas: string[];
}

const LESSON_THEORY: Record<string, LessonTheoryEntry> = {
  "10-1": {
    "summary_vi": "• Mệnh đề là câu khẳng định có giá trị đúng hoặc sai. Phủ định của $P$ là $\\neg P$ và có giá trị chân lí ngược với $P$.\n• Mệnh đề kéo theo $P\\Rightarrow Q$ chỉ sai khi $P$ đúng và $Q$ sai; mệnh đề tương đương $P\\Leftrightarrow Q$ đúng khi hai mệnh đề cùng giá trị chân lí.\n• Với lượng từ: phủ định của “$\\forall x,\\ P(x)$” là “$\\exists x,\\ \\neg P(x)$”; phủ định của “$\\exists x,\\ P(x)$” là “$\\forall x,\\ \\neg P(x)$”.",
    "formulas": [
      "\\neg(\\forall x\\,P(x))\\Leftrightarrow \\exists x\\,\\neg P(x)",
      "\\neg(\\exists x\\,P(x))\\Leftrightarrow \\forall x\\,\\neg P(x)"
    ]
  },
  "10-2": {
    "summary_vi": "• $A\\subset B$ khi mọi phần tử của $A$ đều thuộc $B$. Hai tập hợp bằng nhau khi chúng có đúng các phần tử như nhau.\n• Giao $A\\cap B$ gồm phần tử chung; hợp $A\\cup B$ gồm phần tử thuộc ít nhất một tập; hiệu $A\\setminus B$ gồm phần tử thuộc $A$ nhưng không thuộc $B$.\n• Khi làm việc trên trục số cần phân biệt khoảng, đoạn và nửa khoảng qua dấu ngoặc tròn/vuông.",
    "formulas": [
      "A\\cap B=\\{x\\mid x\\in A,\\ x\\in B\\}",
      "A\\cup B=\\{x\\mid x\\in A\\ \\text{hoặc}\\ x\\in B\\}",
      "A\\setminus B=\\{x\\mid x\\in A,\\ x\\notin B\\}"
    ]
  },
  "10-3": {
    "summary_vi": "• Bất phương trình bậc nhất hai ẩn có dạng $ax+by\\le c$ (hoặc $<,\\ge,>$), với $a,b$ không đồng thời bằng $0$.\n• Đường thẳng $ax+by=c$ chia mặt phẳng thành hai nửa mặt phẳng. Miền nghiệm là một trong hai nửa mặt phẳng, có hoặc không kể bờ tùy dấu $\\le,\\ge$ hay $<,>$.\n• Có thể dùng một điểm thử không nằm trên đường biên để xác định nửa mặt phẳng nghiệm.",
    "formulas": [
      "ax+by\\le c",
      "ax+by=c"
    ]
  },
  "10-4": {
    "summary_vi": "• Miền nghiệm của hệ bất phương trình là phần giao các miền nghiệm của từng bất phương trình.\n• Với bài toán tối ưu tuyến tính trên miền đa giác lồi, giá trị lớn nhất/nhỏ nhất của biểu thức tuyến tính đạt tại một đỉnh của miền nghiệm (nếu tồn tại).\n• Quy trình: lập hệ → vẽ miền nghiệm → xác định các đỉnh → tính hàm mục tiêu tại các đỉnh → chọn giá trị phù hợp.",
    "formulas": [
      "\\begin{cases}a_1x+b_1y\\le c_1\\\\ a_2x+b_2y\\le c_2\\end{cases}",
      "F(x,y)=px+qy"
    ]
  },
  "10-5": {
    "summary_vi": "• Với góc $\\alpha$ từ $0^\\circ$ đến $180^\\circ$, các giá trị $\\sin\\alpha,\\cos\\alpha,\\tan\\alpha,\\cot\\alpha$ được xác định theo điểm biểu diễn trên nửa đường tròn lượng giác.\n• Luôn có $\\sin^2\\alpha+\\cos^2\\alpha=1$. Dấu của các giá trị lượng giác phụ thuộc góc nhọn hay tù.\n• Các góc bù nhau có cùng sin và cos đối nhau.",
    "formulas": [
      "\\sin^2\\alpha+\\cos^2\\alpha=1",
      "\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}",
      "\\cot\\alpha=\\frac{\\cos\\alpha}{\\sin\\alpha}",
      "\\sin(180^\\circ-\\alpha)=\\sin\\alpha",
      "\\cos(180^\\circ-\\alpha)=-\\cos\\alpha"
    ]
  },
  "10-6": {
    "summary_vi": "• Định lí côsin liên hệ ba cạnh và một góc; định lí sin liên hệ cạnh với sin góc đối diện và bán kính đường tròn ngoại tiếp.\n• Diện tích tam giác có thể tính bằng hai cạnh và góc xen giữa, theo công thức Heron hoặc qua bán kính nội/ngoại tiếp.\n• Giải tam giác là xác định các cạnh, góc còn lại từ các dữ kiện đã biết.",
    "formulas": [
      "a^2=b^2+c^2-2bc\\cos A",
      "\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}=2R",
      "S=\\frac12bc\\sin A",
      "S=\\sqrt{p(p-a)(p-b)(p-c)}"
    ]
  },
  "10-7": {
    "summary_vi": "• Vectơ là đoạn thẳng có hướng; độ dài của $\\vec a$ kí hiệu $|\\vec a|$. Vectơ-không có điểm đầu trùng điểm cuối.\n• Hai vectơ cùng phương khi giá của chúng song song hoặc trùng nhau; cùng hướng khi cùng phương và cùng chiều; bằng nhau khi cùng hướng và cùng độ dài.\n• Vectơ đối của $\\vec a$ là $-\\vec a$, cùng độ dài nhưng ngược hướng.",
    "formulas": [
      "\\overrightarrow{AB}=-\\overrightarrow{BA}",
      "|\\overrightarrow{AB}|=AB"
    ]
  },
  "10-8": {
    "summary_vi": "• Tổng vectơ tuân theo quy tắc ba điểm và quy tắc hình bình hành. Hiệu $\\vec a-\\vec b$ được hiểu là $\\vec a+(-\\vec b)$.\n• Có thể chèn điểm trung gian để biến đổi tổng nhiều vectơ; các phép cộng vectơ có tính giao hoán và kết hợp.",
    "formulas": [
      "\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}",
      "\\vec a-\\vec b=\\vec a+(-\\vec b)",
      "\\vec a+\\vec b=\\vec b+\\vec a"
    ]
  },
  "10-9": {
    "summary_vi": "• Với số thực $k$, vectơ $k\\vec a$ cùng phương với $\\vec a$ và có độ dài $|k|\\,|\\vec a|$; hướng phụ thuộc dấu của $k$.\n• Hai vectơ khác $\\vec0$ cùng phương khi và chỉ khi vectơ này là một bội số của vectơ kia.\n• Nếu $\\vec a,\\vec b$ không cùng phương thì mọi vectơ trong mặt phẳng có thể biểu diễn duy nhất theo hai vectơ đó.",
    "formulas": [
      "|k\\vec a|=|k|\\,|\\vec a|",
      "\\vec a\\parallel\\vec b\\Leftrightarrow \\vec a=k\\vec b"
    ]
  },
  "10-10": {
    "summary_vi": "• Nếu $A(x_A,y_A),B(x_B,y_B)$ thì $\\overrightarrow{AB}=(x_B-x_A,\\ y_B-y_A)$.\n• Phép cộng, trừ và nhân vectơ với số được thực hiện theo từng tọa độ.\n• Tọa độ trung điểm là trung bình cộng tọa độ hai đầu mút; trọng tâm tam giác là trung bình cộng tọa độ ba đỉnh.",
    "formulas": [
      "\\overrightarrow{AB}=(x_B-x_A,\\ y_B-y_A)",
      "M\\left(\\frac{x_A+x_B}{2},\\frac{y_A+y_B}{2}\\right)",
      "G\\left(\\frac{x_A+x_B+x_C}{3},\\frac{y_A+y_B+y_C}{3}\\right)"
    ]
  },
  "10-11": {
    "summary_vi": "• Tích vô hướng của hai vectơ bằng tích độ dài và cosin góc giữa chúng.\n• Trong tọa độ, tích vô hướng được tính bằng tổng tích các tọa độ tương ứng.\n• Hai vectơ khác $\\vec0$ vuông góc khi tích vô hướng bằng $0$.",
    "formulas": [
      "\\vec a\\cdot\\vec b=|\\vec a|\\,|\\vec b|\\cos(\\vec a,\\vec b)",
      "\\vec a\\cdot\\vec b=x_ax_b+y_ay_b",
      "\\vec a\\perp\\vec b\\Leftrightarrow \\vec a\\cdot\\vec b=0"
    ]
  },
  "10-12": {
    "summary_vi": "• Sai số tuyệt đối đo độ lệch giữa số gần đúng và giá trị đúng; sai số tương đối cho biết mức sai lệch so với độ lớn của giá trị.\n• Khi biết độ chính xác $d$, giá trị đúng thường nằm trong khoảng từ số gần đúng trừ $d$ đến số gần đúng cộng $d$.\n• Làm tròn phải giữ đúng hàng theo yêu cầu độ chính xác.",
    "formulas": [
      "\\Delta_a=|a-\\bar a|",
      "\\delta_a=\\frac{\\Delta_a}{|a|}",
      "\\bar a-d\\le a\\le \\bar a+d"
    ]
  },
  "10-13": {
    "summary_vi": "• Số trung bình phản ánh mức trung tâm và sử dụng toàn bộ dữ liệu; trung vị là giá trị đứng giữa sau khi sắp xếp; mốt là giá trị xuất hiện nhiều nhất.\n• Tứ phân vị $Q_1,Q_2,Q_3$ chia mẫu số liệu đã sắp xếp thành bốn phần; $Q_2$ chính là trung vị.\n• Cần chọn số đặc trưng phù hợp với dữ liệu, đặc biệt khi có giá trị ngoại lệ.",
    "formulas": [
      "\\bar x=\\frac{x_1+x_2+\\cdots+x_n}{n}",
      "\\bar x=\\frac{\\sum n_i x_i}{\\sum n_i}"
    ]
  },
  "10-14": {
    "summary_vi": "• Khoảng biến thiên đo chênh lệch giữa giá trị lớn nhất và nhỏ nhất; khoảng tứ phân vị đo độ phân tán của 50% dữ liệu giữa.\n• Phương sai là trung bình bình phương độ lệch so với số trung bình; độ lệch chuẩn là căn bậc hai của phương sai.\n• Giá trị các số đo phân tán càng lớn thì dữ liệu càng phân tán.",
    "formulas": [
      "R=x_{\\max}-x_{\\min}",
      "\\Delta_Q=Q_3-Q_1",
      "s^2=\\frac1n\\sum_{i=1}^n(x_i-\\bar x)^2",
      "s=\\sqrt{s^2}"
    ]
  },
  "10-15": {
    "summary_vi": "• Hàm số gán cho mỗi giá trị $x$ thuộc tập xác định đúng một giá trị $y=f(x)$. Tập xác định phải thỏa mọi điều kiện của biểu thức.\n• Đồ thị cho phép đọc nghiệm, dấu, khoảng tăng giảm, tập giá trị và các đặc điểm đối xứng.\n• Hàm chẵn có đồ thị đối xứng qua trục $Oy$; hàm lẻ có đồ thị đối xứng qua gốc tọa độ.",
    "formulas": [
      "y=f(x)",
      "f(-x)=f(x)\\ \\text{(hàm chẵn)}",
      "f(-x)=-f(x)\\ \\text{(hàm lẻ)}"
    ]
  },
  "10-16": {
    "summary_vi": "• Hàm số bậc hai có dạng $y=ax^2+bx+c$ với $a\\ne0$; đồ thị là parabol có trục đối xứng đi qua đỉnh.\n• Dấu của $a$ quyết định hướng bề lõm. Tung độ đỉnh có thể tính từ $\\Delta=b^2-4ac$.\n• Có thể xác định hàm số từ các điều kiện về điểm đi qua, đỉnh, trục đối xứng hoặc nghiệm.",
    "formulas": [
      "y=ax^2+bx+c\\ (a\\ne0)",
      "x_I=-\\frac b{2a}",
      "y_I=-\\frac{\\Delta}{4a}",
      "\\Delta=b^2-4ac"
    ]
  },
  "10-17": {
    "summary_vi": "• Dấu của tam thức $f(x)=ax^2+bx+c$ phụ thuộc vào $a$ và số nghiệm của phương trình $f(x)=0$.\n• Nếu có hai nghiệm phân biệt $x_1<x_2$, tam thức cùng dấu với $a$ ngoài khoảng $(x_1,x_2)$ và trái dấu với $a$ trong khoảng đó.\n• Bất phương trình bậc hai được giải bằng bảng xét dấu của tam thức.",
    "formulas": [
      "f(x)=ax^2+bx+c",
      "\\Delta=b^2-4ac",
      "\\Delta>0:\\ x_{1,2}=\\frac{-b\\pm\\sqrt\\Delta}{2a}"
    ]
  },
  "10-18": {
    "summary_vi": "• Phương trình chứa căn phải đặt điều kiện để biểu thức dưới căn không âm và các vế phù hợp trước khi bình phương.\n• Sau khi biến đổi về phương trình bậc hai cần thử lại nghiệm vì phép bình phương có thể sinh nghiệm ngoại lai.\n• Với $\\sqrt{A}=B$ cần đồng thời có $A=B^2$ và $B\\ge0$.",
    "formulas": [
      "\\sqrt A=B\\Leftrightarrow \\begin{cases}B\\ge0\\\\A=B^2\\end{cases}",
      "\\sqrt A=\\sqrt B\\Leftrightarrow \\begin{cases}A=B\\\\A\\ge0\\end{cases}"
    ]
  },
  "10-19": {
    "summary_vi": "• Đường thẳng có thể được xác định bởi một điểm và vectơ chỉ phương, hoặc một điểm và vectơ pháp tuyến.\n• Phương trình tham số biểu diễn mọi điểm của đường thẳng theo tham số; phương trình tổng quát có vectơ pháp tuyến $(a,b)$.",
    "formulas": [
      "\\begin{cases}x=x_0+at\\\\y=y_0+bt\\end{cases}",
      "a(x-x_0)+b(y-y_0)=0",
      "ax+by+c=0"
    ]
  },
  "10-20": {
    "summary_vi": "• Hai đường thẳng có thể cắt nhau, song song hoặc trùng nhau; có thể xét qua vectơ pháp tuyến/chỉ phương hoặc nghiệm của hệ phương trình.\n• Góc giữa hai đường thẳng được suy từ góc giữa hai vectơ pháp tuyến (hoặc chỉ phương).\n• Khoảng cách từ điểm đến đường thẳng dùng công thức theo hệ số của phương trình tổng quát.",
    "formulas": [
      "\\cos\\varphi=\\frac{|a_1a_2+b_1b_2|}{\\sqrt{a_1^2+b_1^2}\\sqrt{a_2^2+b_2^2}}",
      "d(M,\\Delta)=\\frac{|ax_M+by_M+c|}{\\sqrt{a^2+b^2}}"
    ]
  },
  "10-21": {
    "summary_vi": "• Đường tròn tâm $I(a,b)$ bán kính $R$ gồm các điểm cách $I$ một khoảng bằng $R$.\n• Từ phương trình khai triển có thể hoàn thành bình phương để tìm tâm và bán kính.\n• Tiếp tuyến tại điểm thuộc đường tròn vuông góc với bán kính đi qua tiếp điểm.",
    "formulas": [
      "(x-a)^2+(y-b)^2=R^2",
      "x^2+y^2-2ax-2by+c=0,\\quad R^2=a^2+b^2-c"
    ]
  },
  "10-22": {
    "summary_vi": "• Elip, hypebol và parabol được mô tả bởi các phương trình chính tắc và các yếu tố như tiêu điểm, trục, đỉnh.\n• Elip có tổng khoảng cách đến hai tiêu điểm không đổi; hypebol có trị tuyệt đối hiệu khoảng cách không đổi; parabol cách đều tiêu điểm và đường chuẩn.",
    "formulas": [
      "\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1\\ (a>b>0)",
      "\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1",
      "y^2=2px",
      "c^2=a^2-b^2\\ \\text{(elip)}",
      "c^2=a^2+b^2\\ \\text{(hypebol)}"
    ]
  },
  "10-23": {
    "summary_vi": "• Quy tắc cộng dùng khi một công việc được thực hiện theo các phương án loại trừ nhau; tổng số cách bằng tổng số cách của từng phương án.\n• Quy tắc nhân dùng khi công việc gồm các công đoạn liên tiếp; tổng số cách bằng tích số cách ở từng công đoạn.\n• Bài nhiều điều kiện nên chia trường hợp để tránh đếm thiếu hoặc trùng.",
    "formulas": [
      "N=n_1+n_2+\\cdots+n_k",
      "N=n_1n_2\\cdots n_k"
    ]
  },
  "10-24": {
    "summary_vi": "• Hoán vị sắp xếp toàn bộ $n$ phần tử; chỉnh hợp chọn $k$ phần tử có xét thứ tự; tổ hợp chọn $k$ phần tử không xét thứ tự.\n• Chọn đúng công thức dựa trên hai câu hỏi: có lấy hết hay không, và thứ tự có quan trọng hay không.",
    "formulas": [
      "P_n=n!",
      "A_n^k=\\frac{n!}{(n-k)!}",
      "C_n^k=\\frac{n!}{k!(n-k)!}",
      "A_n^k=k!\\,C_n^k"
    ]
  },
  "10-25": {
    "summary_vi": "• Nhị thức Newton khai triển $(a+b)^n$ thành tổng các số hạng có hệ số tổ hợp.\n• Số hạng tổng quát giúp xác định hệ số hoặc số hạng chứa một lũy thừa cho trước.",
    "formulas": [
      "(a+b)^n=\\sum_{k=0}^n C_n^k a^{n-k}b^k",
      "T_{k+1}=C_n^k a^{n-k}b^k",
      "C_n^k=C_n^{n-k}"
    ]
  },
  "10-26": {
    "summary_vi": "• Phép thử ngẫu nhiên có tập các kết quả có thể xảy ra gọi là không gian mẫu $\\Omega$; biến cố là một tập con của $\\Omega$.\n• Khi các kết quả sơ cấp đồng khả năng, xác suất của biến cố bằng số kết quả thuận lợi chia số phần tử của không gian mẫu.\n• Biến cố đối của $A$ gồm các kết quả không thuộc $A$.",
    "formulas": [
      "P(A)=\\frac{n(A)}{n(\\Omega)}",
      "0\\le P(A)\\le1",
      "P(\\overline A)=1-P(A)"
    ]
  },
  "10-27": {
    "summary_vi": "• Muốn tính xác suất theo định nghĩa cổ điển cần xác định đúng không gian mẫu và biến cố thuận lợi, sau đó đếm số phần tử.\n• Có thể dùng quy tắc đếm, hoán vị, chỉnh hợp, tổ hợp để đếm; phải bảo đảm các kết quả sơ cấp là đồng khả năng.\n• Với bài sắp xếp/chọn ngẫu nhiên nên mô tả rõ “một kết quả” là gì trước khi đếm.",
    "formulas": [
      "P(A)=\\frac{n(A)}{n(\\Omega)}",
      "P(\\overline A)=1-P(A)"
    ]
  },
  "11-1": {
    "summary_vi": "• Góc lượng giác được đo bằng độ hoặc radian; các góc hơn kém nhau $2k\\pi$ có cùng điểm biểu diễn trên đường tròn lượng giác.\n• Giá trị sin, cos là tọa độ của điểm biểu diễn; tan và cot là các tỉ số tương ứng khi mẫu khác $0$.",
    "formulas": [
      "180^\\circ=\\pi\\ \\text{rad}",
      "\\sin^2\\alpha+\\cos^2\\alpha=1",
      "\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}",
      "\\cot\\alpha=\\frac{\\cos\\alpha}{\\sin\\alpha}"
    ]
  },
  "11-2": {
    "summary_vi": "• Công thức cộng cho phép tính lượng giác của tổng/hiệu hai góc; từ đó suy ra công thức nhân đôi, hạ bậc và biến đổi tổng–tích.\n• Khi biến đổi cần chú ý điều kiện của tan, cot và chọn công thức giúp biểu thức đơn giản nhất.",
    "formulas": [
      "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
      "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
      "\\sin2a=2\\sin a\\cos a",
      "\\cos2a=\\cos^2a-\\sin^2a=1-2\\sin^2a=2\\cos^2a-1"
    ]
  },
  "11-3": {
    "summary_vi": "• Các hàm $\\sin x,\\cos x,\\tan x$ là các hàm tuần hoàn; cần xác định tập xác định, tập giá trị, tính chẵn lẻ và chu kì.\n• Đồ thị lặp lại theo chu kì, giúp giải phương trình và mô hình hóa các hiện tượng dao động.",
    "formulas": [
      "\\sin(x+2\\pi)=\\sin x",
      "\\cos(x+2\\pi)=\\cos x",
      "\\tan(x+\\pi)=\\tan x",
      "-1\\le\\sin x,\\cos x\\le1"
    ]
  },
  "11-4": {
    "summary_vi": "• Phương trình lượng giác cơ bản được giải bằng cách biểu diễn toàn bộ các góc có cùng giá trị lượng giác.\n• Khi phương trình chưa ở dạng cơ bản, cần biến đổi tương đương rồi kiểm tra điều kiện xác định.",
    "formulas": [
      "\\sin x=\\sin\\alpha\\Leftrightarrow \\begin{cases}x=\\alpha+2k\\pi\\\\x=\\pi-\\alpha+2k\\pi\\end{cases}",
      "\\cos x=\\cos\\alpha\\Leftrightarrow x=\\pm\\alpha+2k\\pi",
      "\\tan x=\\tan\\alpha\\Leftrightarrow x=\\alpha+k\\pi"
    ]
  },
  "11-5": {
    "summary_vi": "• Dãy số là hàm số xác định trên tập số tự nhiên (hoặc một tập con); số hạng thứ $n$ kí hiệu $u_n$.\n• Dãy có thể cho bằng công thức tổng quát hoặc hệ thức truy hồi. Tính tăng/giảm được xét qua $u_{n+1}-u_n$ hoặc tỉ số khi phù hợp.",
    "formulas": [
      "u_n=f(n)",
      "u_{n+1}=F(u_n)",
      "u_{n+1}>u_n\\ \\Rightarrow\\ \\text{dãy tăng}"
    ]
  },
  "11-6": {
    "summary_vi": "• Cấp số cộng là dãy có hiệu hai số hạng liên tiếp không đổi bằng công sai $d$.\n• Từ số hạng đầu và công sai có thể tính số hạng tổng quát và tổng $n$ số hạng đầu.",
    "formulas": [
      "u_n=u_1+(n-1)d",
      "S_n=\\frac n2[2u_1+(n-1)d]=\\frac n2(u_1+u_n)"
    ]
  },
  "11-7": {
    "summary_vi": "• Cấp số nhân là dãy có tỉ số giữa hai số hạng liên tiếp không đổi bằng công bội $q$.\n• Từ $u_1,q$ xác định được số hạng tổng quát và tổng hữu hạn; khi $|q|<1$ còn có tổng cấp số nhân lùi vô hạn.",
    "formulas": [
      "u_n=u_1q^{n-1}",
      "S_n=u_1\\frac{1-q^n}{1-q}\\ (q\\ne1)",
      "S_\\infty=\\frac{u_1}{1-q}\\ (|q|<1)"
    ]
  },
  "11-8": {
    "summary_vi": "• Mẫu số liệu ghép nhóm được chia thành các khoảng/lớp; mỗi lớp có tần số là số quan sát thuộc lớp đó.\n• Giá trị đại diện của một lớp thường lấy là trung điểm của khoảng; dùng các giá trị đại diện để ước lượng các số đặc trưng.\n• Khi lập bảng phải thống nhất cách đóng/mở đầu mút để mỗi quan sát thuộc đúng một nhóm.",
    "formulas": [
      "x_i^*=\\frac{a_i+b_i}{2}",
      "n=\\sum_i n_i"
    ]
  },
  "11-9": {
    "summary_vi": "• Số trung bình của mẫu ghép nhóm được xấp xỉ bằng trung bình có trọng số của các giá trị đại diện.\n• Trung vị và tứ phân vị được ước lượng bằng nội suy trong lớp chứa vị trí cần tìm; mốt thuộc lớp có tần số lớn nhất và có thể nội suy.\n• Các giá trị là ước lượng do dữ liệu gốc đã được gom nhóm.",
    "formulas": [
      "\\bar x\\approx\\frac{\\sum n_i x_i^*}{n}",
      "Me\\approx L+\\frac{\\frac n2-F}{f}\\,h",
      "Q_p\\approx L+\\frac{pn-F}{f}\\,h"
    ]
  },
  "11-10": {
    "summary_vi": "• Trong không gian, đường thẳng và mặt phẳng là các đối tượng cơ bản; qua ba điểm không thẳng hàng xác định một mặt phẳng.\n• Muốn chứng minh điểm/đường thuộc mặt phẳng thường dùng các điểm chung hoặc các đường đã nằm trong mặt phẳng.\n• Giao tuyến của hai mặt phẳng là đường thẳng đi qua hai điểm chung phân biệt của chúng.",
    "formulas": [
      "A,B,C\\ \\text{không thẳng hàng}\\Rightarrow \\exists!\\,(ABC)",
      "(P)\\cap(Q)=d"
    ]
  },
  "11-11": {
    "summary_vi": "• Hai đường thẳng trong không gian có thể cắt nhau, song song, trùng nhau hoặc chéo nhau.\n• Hai đường thẳng song song khi chúng đồng phẳng và không có điểm chung; tính song song có thể được suy ra qua các đường trung gian.",
    "formulas": [
      "a\\parallel b,\\ b\\parallel c\\Rightarrow a\\parallel c"
    ]
  },
  "11-12": {
    "summary_vi": "• Đường thẳng $d$ song song với mặt phẳng $(P)$ nếu $d$ không nằm trong $(P)$ và song song với một đường thẳng nằm trong $(P)$.\n• Nếu một đường thẳng song song với một đường của mặt phẳng và không thuộc mặt phẳng thì có thể dùng định lí để kết luận song song.",
    "formulas": [
      "d\\parallel a,\\ a\\subset(P),\\ d\\not\\subset(P)\\Rightarrow d\\parallel(P)"
    ]
  },
  "11-13": {
    "summary_vi": "• Hai mặt phẳng phân biệt song song khi chúng không có điểm chung.\n• Nếu một mặt phẳng chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng kia thì hai mặt phẳng song song.\n• Các mặt phẳng song song cắt một đường thẳng theo các đoạn tỉ lệ trong các cấu hình phù hợp.",
    "formulas": [
      "(P)\\parallel(Q)"
    ]
  },
  "11-14": {
    "summary_vi": "• Phép chiếu song song biến điểm thành giao điểm của đường chiếu qua điểm với mặt phẳng chiếu.\n• Phép chiếu song song bảo toàn tính thẳng hàng, thứ tự điểm và tỉ số của các đoạn thẳng cùng nằm trên một đường hoặc trên các đường song song.\n• Hình chiếu song song của hình học không gian được dùng để biểu diễn hình trên mặt phẳng.",
    "formulas": [
      "A'=(AA'\\parallel l)\\cap(P')",
      "\\frac{A'B'}{C'D'}=\\frac{AB}{CD}\\ \\text{(trên các đường cùng phương thích hợp)}"
    ]
  },
  "11-15": {
    "summary_vi": "• Giới hạn của dãy số mô tả giá trị mà $u_n$ tiến gần khi $n$ tăng vô hạn.\n• Các quy tắc giới hạn cho tổng, hiệu, tích, thương được áp dụng khi các giới hạn thành phần tồn tại và mẫu khác $0$.\n• Cần nhớ các dãy cơ bản như $1/n^k\\to0$ và $q^n\\to0$ khi $|q|<1$.",
    "formulas": [
      "\\lim_{n\\to\\infty}\\frac1{n^k}=0\\ (k>0)",
      "\\lim_{n\\to\\infty}q^n=0\\ (|q|<1)",
      "\\lim(u_n+v_n)=\\lim u_n+\\lim v_n"
    ]
  },
  "11-16": {
    "summary_vi": "• Giới hạn của hàm số tại $x_0$ là giá trị mà $f(x)$ tiến tới khi $x$ tiến tới $x_0$, không nhất thiết phụ thuộc $f(x_0)$.\n• Giới hạn một phía dùng khi $x$ tiến tới từ bên trái hoặc bên phải; giới hạn hai phía tồn tại khi hai giới hạn một phía bằng nhau.\n• Có thể dùng biến đổi đại số để khử dạng vô định trước khi tính.",
    "formulas": [
      "\\lim_{x\\to x_0}f(x)=L",
      "\\lim_{x\\to x_0^-}f(x)=\\lim_{x\\to x_0^+}f(x)=L"
    ]
  },
  "11-17": {
    "summary_vi": "• Hàm số liên tục tại $x_0$ khi $f(x_0)$ xác định, giới hạn tại $x_0$ tồn tại và bằng $f(x_0)$.\n• Tổng, tích, thương (mẫu khác $0$) của các hàm liên tục vẫn liên tục; đa thức liên tục trên $\\mathbb R$.\n• Định lí giá trị trung gian giúp chứng minh phương trình có nghiệm trên một khoảng.",
    "formulas": [
      "\\lim_{x\\to x_0}f(x)=f(x_0)",
      "f(a)f(b)<0\\Rightarrow \\exists c\\in(a,b):f(c)=0\\ \\text{(khi }f\\text{ liên tục)}"
    ]
  },
  "11-18": {
    "summary_vi": "• Lũy thừa với số mũ thực mở rộng các quy tắc lũy thừa quen thuộc cho cơ số dương.\n• Khi biến đổi phải chú ý điều kiện cơ số; các quy tắc nhân, chia, lũy thừa của lũy thừa vẫn giữ dạng chuẩn.",
    "formulas": [
      "a^\\alpha a^\\beta=a^{\\alpha+\\beta}",
      "\\frac{a^\\alpha}{a^\\beta}=a^{\\alpha-\\beta}",
      "(a^\\alpha)^\\beta=a^{\\alpha\\beta}\\quad(a>0)"
    ]
  },
  "11-19": {
    "summary_vi": "• $\\log_a b$ là số mũ cần đặt cho $a$ để được $b$, với $a>0,a\\ne1,b>0$.\n• Logarit biến tích thành tổng, thương thành hiệu và lũy thừa thành tích với số mũ.",
    "formulas": [
      "\\log_a b=c\\Leftrightarrow a^c=b",
      "\\log_a(xy)=\\log_a x+\\log_a y",
      "\\log_a\\frac xy=\\log_a x-\\log_a y",
      "\\log_a x^\\alpha=\\alpha\\log_a x",
      "\\log_a b=\\frac{\\log_c b}{\\log_c a}"
    ]
  },
  "11-20": {
    "summary_vi": "• Hàm mũ $y=a^x$ và hàm lôgarit $y=\\log_a x$ ($a>0,a\\ne1$) là hai hàm ngược nhau.\n• Nếu $a>1$ hai hàm đồng biến; nếu $0<a<1$ hai hàm nghịch biến.\n• Đồ thị của hai hàm đối xứng nhau qua đường $y=x$.",
    "formulas": [
      "y=a^x",
      "y=\\log_a x",
      "a^{\\log_a x}=x",
      "\\log_a(a^x)=x"
    ]
  },
  "11-21": {
    "summary_vi": "• Phương trình mũ/lôgarit thường được đưa về cùng cơ số, đặt ẩn phụ hoặc dùng tính đơn điệu.\n• Bất phương trình cần chú ý chiều so sánh: giữ chiều khi cơ số $a>1$, đổi chiều khi $0<a<1$.\n• Với logarit luôn phải đặt điều kiện biểu thức trong log dương.",
    "formulas": [
      "a^{f(x)}=a^{g(x)}\\Leftrightarrow f(x)=g(x)",
      "\\log_a f(x)=\\log_a g(x)\\Leftrightarrow f(x)=g(x)>0"
    ]
  },
  "11-22": {
    "summary_vi": "• Hai đường thẳng vuông góc khi góc giữa chúng bằng $90^\\circ$.\n• Trong hình không gian, hai đường vuông góc có thể cắt nhau hoặc chéo nhau; thường chứng minh qua các đường song song hoặc tích vô hướng của vectơ chỉ phương.",
    "formulas": [
      "a\\perp b\\Leftrightarrow \\angle(a,b)=90^\\circ"
    ]
  },
  "11-23": {
    "summary_vi": "• Đường thẳng vuông góc với mặt phẳng nếu nó vuông góc với hai đường thẳng cắt nhau nằm trong mặt phẳng.\n• Nếu $d\\perp(P)$ thì $d$ vuông góc với mọi đường thẳng trong $(P)$ đi qua chân đường vuông góc.",
    "formulas": [
      "d\\perp a,\\ d\\perp b,\\ a,b\\subset(P),\\ a\\cap b\\ne\\varnothing\\Rightarrow d\\perp(P)"
    ]
  },
  "11-24": {
    "summary_vi": "• Hình chiếu vuông góc của một điểm lên mặt phẳng là chân đường vuông góc; hình chiếu của đường thẳng được xác định từ hình chiếu các điểm.\n• Góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng và hình chiếu vuông góc của nó trên mặt phẳng.",
    "formulas": [
      "0^\\circ\\le\\angle(d,(P))\\le90^\\circ"
    ]
  },
  "11-25": {
    "summary_vi": "• Hai mặt phẳng vuông góc khi góc giữa chúng bằng $90^\\circ$.\n• Nếu một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia thì hai mặt phẳng vuông góc.\n• Góc nhị diện được đo qua hai đường thẳng cùng vuông góc với giao tuyến trong hai mặt phẳng.",
    "formulas": [
      "(P)\\perp(Q)"
    ]
  },
  "11-26": {
    "summary_vi": "• Khoảng cách từ điểm đến mặt phẳng là độ dài đoạn vuông góc từ điểm tới mặt phẳng.\n• Khoảng cách giữa đường thẳng và mặt phẳng song song, hoặc giữa hai mặt phẳng song song, quy về khoảng cách từ một điểm thích hợp.\n• Khoảng cách giữa hai đường chéo nhau là độ dài đoạn vuông góc chung.",
    "formulas": [
      "d(M,(P))=MH\\quad(MH\\perp(P))"
    ]
  },
  "11-27": {
    "summary_vi": "• Thể tích khối chóp bằng một phần ba tích diện tích đáy và chiều cao; khối lăng trụ bằng diện tích đáy nhân chiều cao.\n• Với hình hộp chữ nhật, thể tích là tích ba kích thước vuông góc.",
    "formulas": [
      "V_{\\text{chóp}}=\\frac13S_{\\text{đáy}}h",
      "V_{\\text{lăng trụ}}=S_{\\text{đáy}}h"
    ]
  },
  "11-28": {
    "summary_vi": "• Biến cố hợp $A\\cup B$ xảy ra khi ít nhất một trong hai biến cố xảy ra; biến cố giao $A\\cap B$ xảy ra khi cả hai cùng xảy ra.\n• Hai biến cố xung khắc có giao rỗng. Hai biến cố độc lập khi việc xảy ra của biến cố này không làm thay đổi xác suất biến cố kia.",
    "formulas": [
      "A\\cup B",
      "A\\cap B",
      "A\\cap B=\\varnothing\\ \\text{(xung khắc)}",
      "P(A\\cap B)=P(A)P(B)\\ \\text{(độc lập)}"
    ]
  },
  "11-29": {
    "summary_vi": "• Công thức cộng tính xác suất “$A$ hoặc $B$” bằng tổng xác suất riêng rồi trừ phần giao bị đếm hai lần.\n• Nếu hai biến cố xung khắc thì phần giao bằng $0$ nên công thức rút gọn.",
    "formulas": [
      "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)",
      "A\\cap B=\\varnothing\\Rightarrow P(A\\cup B)=P(A)+P(B)"
    ]
  },
  "11-30": {
    "summary_vi": "• Với hai biến cố độc lập, xác suất để cả hai cùng xảy ra bằng tích xác suất của từng biến cố.\n• Có thể kết hợp công thức nhân với biến cố đối để xử lí các bài “ít nhất một”, “không xảy ra” hoặc nhiều phép thử độc lập.",
    "formulas": [
      "P(A\\cap B)=P(A)P(B)",
      "P(\\overline A)=1-P(A)"
    ]
  },
  "11-31": {
    "summary_vi": "• Đạo hàm tại một điểm là giới hạn của tỉ số giữa số gia hàm số và số gia biến số; về hình học là hệ số góc tiếp tuyến.\n• Về vật lí, đạo hàm của quãng đường theo thời gian là vận tốc tức thời.",
    "formulas": [
      "f'(x_0)=\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}",
      "y-f(x_0)=f'(x_0)(x-x_0)"
    ]
  },
  "11-32": {
    "summary_vi": "• Đạo hàm của tổng, hiệu, tích, thương được tính theo các quy tắc; hàm hợp dùng quy tắc dây chuyền.\n• Cần nhớ đạo hàm các hàm sơ cấp để phối hợp với quy tắc biến đổi.",
    "formulas": [
      "(u\\pm v)'=u'\\pm v'",
      "(uv)'=u'v+uv'",
      "\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}",
      "(f(g(x)))'=f'(g(x))g'(x)",
      "(x^n)'=nx^{n-1}",
      "(\\sin x)'=\\cos x,\\quad(\\cos x)'=-\\sin x"
    ]
  },
  "11-33": {
    "summary_vi": "• Đạo hàm cấp hai là đạo hàm của đạo hàm cấp một, kí hiệu $f''(x)$.\n• Trong chuyển động, nếu $s(t)$ là quãng đường thì $v(t)=s'(t)$ và gia tốc $a(t)=s''(t)$.",
    "formulas": [
      "f''(x)=(f'(x))'",
      "v(t)=s'(t)",
      "a(t)=v'(t)=s''(t)"
    ]
  },
  "12-1": {
    "summary_vi": "• Dấu của đạo hàm quyết định chiều biến thiên: $f'(x)>0$ thì hàm đồng biến, $f'(x)<0$ thì hàm nghịch biến trên khoảng xét.\n• Điểm cực trị thường xuất hiện tại điểm tới hạn; dấu của $f'$ đổi từ $+$ sang $-$ cho cực đại, từ $-$ sang $+$ cho cực tiểu.\n• Bảng biến thiên giúp tổng hợp miền xác định, dấu đạo hàm, cực trị và xu hướng của hàm.",
    "formulas": [
      "f'(x)>0\\Rightarrow f\\ \\text{đồng biến}",
      "f'(x)<0\\Rightarrow f\\ \\text{nghịch biến}",
      "f'(x_0)=0\\ \\text{(điểm tới hạn thường gặp)}"
    ]
  },
  "12-2": {
    "summary_vi": "• Trên đoạn đóng, hàm liên tục đạt giá trị lớn nhất và nhỏ nhất; cần kiểm tra các điểm tới hạn trong khoảng và hai đầu mút.\n• Trên miền không đóng hoặc vô hạn, phải kết hợp đạo hàm với giới hạn/đặc điểm miền xác định.",
    "formulas": [
      "\\max_{[a,b]}f=\\max\\{f(a),f(b),f(x_i)\\}",
      "\\min_{[a,b]}f=\\min\\{f(a),f(b),f(x_i)\\}"
    ]
  },
  "12-3": {
    "summary_vi": "• Tiệm cận đứng thường xuất hiện khi $f(x)$ tiến tới vô cực lúc $x$ tiến tới một giá trị hữu hạn.\n• Tiệm cận ngang là $y=L$ nếu $f(x)\\to L$ khi $x\\to\\pm\\infty$; tiệm cận xiên $y=ax+b$ khi hiệu $f(x)-(ax+b)\\to0$.",
    "formulas": [
      "x=x_0\\ \\text{nếu}\\ \\lim_{x\\to x_0^\\pm}f(x)=\\pm\\infty",
      "y=L\\ \\text{nếu}\\ \\lim_{x\\to\\pm\\infty}f(x)=L",
      "a=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}x,\\quad b=\\lim_{x\\to\\pm\\infty}[f(x)-ax]"
    ]
  },
  "12-4": {
    "summary_vi": "• Khảo sát hàm số gồm: tập xác định → giới hạn/tiệm cận → đạo hàm và điểm tới hạn → bảng biến thiên → các điểm đặc biệt → vẽ đồ thị.\n• Khi đọc đồ thị cần đối chiếu số nghiệm, cực trị, giao trục và tiệm cận với kết quả đại số.",
    "formulas": [
      "f'(x)=0\\ \\text{hoặc}\\ f'(x)\\ \\text{không xác định tại điểm thuộc miền xác định}"
    ]
  },
  "12-5": {
    "summary_vi": "• Bài toán thực tiễn dùng đạo hàm thường đưa đại lượng cần tối ưu về một hàm một biến trên miền xác định thực tế.\n• Quy trình: chọn biến → lập hàm mục tiêu → xác định miền → tìm cực trị/GTNN-GTLN → diễn giải kết quả theo đơn vị và điều kiện bài toán.",
    "formulas": [
      "f'(x)=0",
      "\\text{so sánh các giá trị ứng viên trong miền thực tế}"
    ]
  },
  "12-6": {
    "summary_vi": "• Vectơ trong không gian có các phép cộng, trừ, nhân với số và tích vô hướng tương tự trong mặt phẳng.\n• Ba vectơ đồng phẳng khi chúng cùng nằm trong hoặc song song với một mặt phẳng; có thể dùng biểu diễn tuyến tính để kiểm tra.",
    "formulas": [
      "\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos(\\vec a,\\vec b)",
      "\\vec a\\perp\\vec b\\Leftrightarrow \\vec a\\cdot\\vec b=0"
    ]
  },
  "12-7": {
    "summary_vi": "• Trong hệ trục $Oxyz$, điểm $M(x,y,z)$ và vectơ $\\vec a=(a_1,a_2,a_3)$ được biểu diễn bằng ba tọa độ.\n• Khoảng cách giữa hai điểm và độ dài vectơ được tính theo định lí Pythagore ba chiều.",
    "formulas": [
      "\\overrightarrow{AB}=(x_B-x_A,y_B-y_A,z_B-z_A)",
      "AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}"
    ]
  },
  "12-8": {
    "summary_vi": "• Các phép cộng, trừ, nhân vectơ với số thực hiện theo từng tọa độ; tích vô hướng là tổng tích các tọa độ tương ứng.\n• Tọa độ trung điểm và trọng tâm được tính bằng trung bình cộng các tọa độ tương ứng.",
    "formulas": [
      "\\vec a\\cdot\\vec b=a_1b_1+a_2b_2+a_3b_3",
      "|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}",
      "M\\left(\\frac{x_A+x_B}{2},\\frac{y_A+y_B}{2},\\frac{z_A+z_B}{2}\\right)"
    ]
  },
  "12-9": {
    "summary_vi": "• Với mẫu ghép nhóm, khoảng biến thiên có thể ước lượng từ cận của nhóm đầu và nhóm cuối; khoảng tứ phân vị bằng $Q_3-Q_1$.\n• $Q_1,Q_3$ được ước lượng bằng nội suy trong lớp chứa các vị trí $n/4$ và $3n/4$.\n• Khoảng tứ phân vị ít bị ảnh hưởng bởi ngoại lệ hơn khoảng biến thiên.",
    "formulas": [
      "R\\approx U_{\\text{cuối}}-L_{\\text{đầu}}",
      "\\Delta_Q=Q_3-Q_1",
      "Q_p\\approx L+\\frac{pn-F}{f}\\,h"
    ]
  },
  "12-10": {
    "summary_vi": "• Phương sai mẫu ghép nhóm được xấp xỉ bằng các giá trị đại diện của từng nhóm; độ lệch chuẩn là căn bậc hai của phương sai.\n• Có thể dùng công thức rút gọn dựa trên trung bình của bình phương để tính nhanh.\n• Độ lệch chuẩn có cùng đơn vị với dữ liệu ban đầu.",
    "formulas": [
      "\\bar x\\approx\\frac{\\sum n_i x_i^*}{n}",
      "s^2\\approx\\frac1n\\sum n_i(x_i^*-\\bar x)^2",
      "s^2\\approx\\frac1n\\sum n_i(x_i^*)^2-\\bar x^2",
      "s=\\sqrt{s^2}"
    ]
  },
  "12-11": {
    "summary_vi": "• Hàm $F$ là một nguyên hàm của $f$ trên khoảng nếu $F'(x)=f(x)$. Mọi nguyên hàm của cùng một hàm sai khác nhau một hằng số.\n• Nguyên hàm có tính tuyến tính; cần nhận dạng dạng cơ bản rồi biến đổi hoặc đổi biến phù hợp.",
    "formulas": [
      "\\int f(x)\\,dx=F(x)+C\\quad(F'=f)",
      "\\int [af(x)+bg(x)]\\,dx=a\\int f(x)\\,dx+b\\int g(x)\\,dx",
      "\\int x^n dx=\\frac{x^{n+1}}{n+1}+C\\ (n\\ne-1)",
      "\\int\\frac{dx}{x}=\\ln|x|+C",
      "\\int e^x dx=e^x+C"
    ]
  },
  "12-12": {
    "summary_vi": "• Tích phân xác định là hiệu giá trị của một nguyên hàm tại hai cận theo công thức Newton–Leibniz.\n• Tích phân có tính tuyến tính, cộng theo khoảng và đổi dấu khi đổi thứ tự cận.\n• Đổi biến và tích phân từng phần là hai phương pháp quan trọng khi tích phân không ở dạng cơ bản.",
    "formulas": [
      "\\int_a^b f(x)\\,dx=F(b)-F(a)",
      "\\int_a^b f=\\int_a^c f+\\int_c^b f",
      "\\int_a^b u\\,dv=[uv]_a^b-\\int_a^b v\\,du"
    ]
  },
  "12-13": {
    "summary_vi": "• Diện tích hình phẳng được tính bằng tích phân của độ chênh tuyệt đối giữa các đồ thị theo biến thích hợp.\n• Thể tích khối tròn xoay quanh trục có thể tính bằng phương pháp đĩa/vành khăn.\n• Cần xác định đúng giao điểm và chia khoảng khi hiệu hai hàm đổi dấu.",
    "formulas": [
      "S=\\int_a^b|f(x)-g(x)|\\,dx",
      "V=\\pi\\int_a^b[f(x)]^2\\,dx",
      "V=\\pi\\int_a^b\\big(R(x)^2-r(x)^2\\big)\\,dx"
    ]
  },
  "12-14": {
    "summary_vi": "• Mặt phẳng qua điểm $M_0(x_0,y_0,z_0)$ và có vectơ pháp tuyến $\\vec n=(a,b,c)$ có phương trình theo tích vô hướng.\n• Hai mặt phẳng song song khi các vectơ pháp tuyến cùng phương; vuông góc khi tích vô hướng hai pháp tuyến bằng $0$.\n• Khoảng cách từ điểm đến mặt phẳng có công thức trực tiếp.",
    "formulas": [
      "a(x-x_0)+b(y-y_0)+c(z-z_0)=0",
      "ax+by+cz+d=0",
      "d(M,(P))=\\frac{|ax_M+by_M+cz_M+d|}{\\sqrt{a^2+b^2+c^2}}"
    ]
  },
  "12-15": {
    "summary_vi": "• Đường thẳng trong không gian được xác định bởi một điểm và một vectơ chỉ phương.\n• Phương trình tham số biểu diễn tọa độ điểm trên đường theo một tham số; dạng chính tắc dùng khi các thành phần vectơ chỉ phương khác $0$.\n• Quan hệ giữa hai đường hoặc đường–mặt phẳng được xét qua vectơ chỉ phương, pháp tuyến và hệ phương trình giao điểm.",
    "formulas": [
      "\\begin{cases}x=x_0+at\\\\y=y_0+bt\\\\z=z_0+ct\\end{cases}",
      "\\frac{x-x_0}{a}=\\frac{y-y_0}{b}=\\frac{z-z_0}{c}"
    ]
  },
  "12-16": {
    "summary_vi": "• Góc giữa hai đường thẳng được tính từ góc giữa hai vectơ chỉ phương; góc giữa hai mặt phẳng từ hai vectơ pháp tuyến.\n• Góc giữa đường thẳng và mặt phẳng là góc phụ với góc giữa vectơ chỉ phương của đường và vectơ pháp tuyến của mặt phẳng.\n• Khi dùng công thức thường lấy giá trị tuyệt đối để lấy góc nhọn hoặc vuông theo quy ước.",
    "formulas": [
      "\\cos\\angle(d_1,d_2)=\\frac{|\\vec u_1\\cdot\\vec u_2|}{|\\vec u_1||\\vec u_2|}",
      "\\cos\\angle((P),(Q))=\\frac{|\\vec n_P\\cdot\\vec n_Q|}{|\\vec n_P||\\vec n_Q|}",
      "\\sin\\angle(d,(P))=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}"
    ]
  },
  "12-17": {
    "summary_vi": "• Mặt cầu tâm $I(a,b,c)$ bán kính $R$ gồm các điểm $M$ thỏa $IM=R$.\n• Từ phương trình khai triển có thể hoàn thành bình phương để tìm tâm và bán kính.\n• Giao của mặt cầu và mặt phẳng phụ thuộc khoảng cách từ tâm đến mặt phẳng.",
    "formulas": [
      "(x-a)^2+(y-b)^2+(z-c)^2=R^2",
      "x^2+y^2+z^2-2ax-2by-2cz+d=0",
      "R^2=a^2+b^2+c^2-d"
    ]
  },
  "12-18": {
    "summary_vi": "• Xác suất có điều kiện $P(A|B)$ là xác suất của $A$ khi biết $B$ đã xảy ra, với $P(B)>0$.\n• Công thức nhân liên hệ xác suất giao với xác suất có điều kiện; sơ đồ cây hoặc bảng hai chiều giúp tổ chức dữ kiện.\n• Hai biến cố độc lập khi $P(A|B)=P(A)$ (khi xác định), tương đương công thức nhân đơn giản.",
    "formulas": [
      "P(A|B)=\\frac{P(A\\cap B)}{P(B)}",
      "P(A\\cap B)=P(B)P(A|B)=P(A)P(B|A)",
      "A,B\\ \\text{độc lập}\\Leftrightarrow P(A\\cap B)=P(A)P(B)"
    ]
  },
  "12-19": {
    "summary_vi": "• Khi $B_1,\\ldots,B_n$ là một phân hoạch của không gian mẫu, xác suất của $A$ bằng tổng xác suất theo từng nhánh $B_i$.\n• Công thức Bayes đảo chiều điều kiện: từ $P(A|B_i)$ suy ra xác suất hậu nghiệm $P(B_i|A)$.\n• Sơ đồ cây giúp kiểm tra các nhánh có tổng xác suất bằng $1$ và tránh nhầm điều kiện.",
    "formulas": [
      "P(A)=\\sum_{i=1}^n P(B_i)P(A|B_i)",
      "P(B_k|A)=\\frac{P(B_k)P(A|B_k)}{\\sum_{i=1}^nP(B_i)P(A|B_i)}"
    ]
  }
};

export function getLessonTheory(grade: number, bookNo: number): LessonTheoryEntry {
  return LESSON_THEORY[`${grade}-${bookNo}`] || {
    summary_vi: '• Ôn lại định nghĩa, điều kiện áp dụng và các công thức trọng tâm của bài trước khi làm bài tập.\n• Khi giải cần nêu rõ dữ kiện, công thức sử dụng và kiểm tra điều kiện của kết quả.',
    formulas: [],
  };
}

export { LESSON_THEORY };
