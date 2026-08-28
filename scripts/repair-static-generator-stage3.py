from pathlib import Path
p=Path('src/lib/staticQuestionBank.ts')
text=p.read_text(encoding='utf-8')

def insert_after(marker, insert):
    global text
    pos=text.find(marker)
    if pos<0: raise RuntimeError('marker not found: '+marker)
    pos += len(marker)
    text=text[:pos]+insert+text[pos:]

# CALCULUS: exact integral techniques must precede generic integral fallback.
insert_after("  if (family === 'calculus') {\n", r'''    if (hasAny(t,['tích phân bằng đổi biến'])) {
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
''')

# COMBINATORICS: binomial term variants.
insert_after("  if (family === 'combinatorics') {\n", r'''    if (hasAny(t,['số hạng chứa lũy thừa','số hạng không chứa biến'])) {
      const rows=[
        {vi:'Hệ số của $x^2$ trong $(1+x)^5$ bằng',en:'The coefficient of $x^2$ in $(1+x)^5$ is',ans:'10',w:['5','20','25']},
        {vi:'Hệ số của $x^3$ trong $(1+x)^6$ bằng',en:'The coefficient of $x^3$ in $(1+x)^6$ is',ans:'20',w:['15','6','30']},
        {vi:'Hệ số của $x^2$ trong $(2+x)^4$ bằng',en:'The coefficient of $x^2$ in $(2+x)^4$ is',ans:'24',w:['6','16','32']},
        {vi:'Số hạng không chứa $x$ trong khai triển $(x+\\dfrac1x)^4$ có hệ số bằng',en:'The constant term in $(x+\\dfrac1x)^4$ has coefficient',ans:'6',w:['4','8','12']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng số hạng tổng quát của khai triển nhị thức Newton.',solutionEn:'Use the general term of the binomial expansion.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
''')

# STATISTICS: grouped mean/mode/variance/std variants with tables.
insert_after("  if (family === 'stats') {\n", r'''    if (hasAny(t,['trung bình']) && hasAny(t,['ghép nhóm'])) {
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
''')

# VECTOR: targeted plane and space types.
insert_after("  if (family === 'vector') {\n", r'''    if (hasAny(t,['nhận biết vectơ'])) {
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
      return {vi:`Trong cơ sở $\\vec i,\\vec j,\\vec k$, vectơ $\\vec v=${rows.v}$ bằng`,en:`In the basis $\\vec i,\\vec j,\\vec k$, the vector $\\vec v=${rows.v}$ equals`,answer:rows.ans,solutionVi:'Các hệ số chính là ba tọa độ của vectơ.',solutionEn:'The coefficients are the three coordinates of the vector.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
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
''')

# GEOMETRY: targeted duplicates.
insert_after("  if (family === 'geometry') {\n", r'''    if (hasAny(t,['diện tích tam giác bằng các công thức lượng giác và heron'])) {
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
      return {vi:`Hai đường thẳng trong $Oxyz$ có vectơ chỉ phương $\\vec u=${rows.u}$ và $\\vec v=${rows.v}$. Góc giữa chúng bằng`,en:`Two lines in $Oxyz$ have direction vectors $\\vec u=${rows.u}$ and $\\vec v=${rows.v}$. Their angle is`,answer:rows.ans,solutionVi:'Dùng công thức tích vô hướng của hai vectơ chỉ phương.',solutionEn:'Use the dot-product angle formula for direction vectors.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['viết phương trình mặt phẳng từ điểm'])) {
      const rows=[
        {A:'$(1,2,3)$',n:'$(2,-1,1)$',ans:'$2x-y+z-3=0$',w:['$2x-y+z+3=0$','$x+2y+3z=0$','$2x+y-z-1=0$']},
        {A:'$(0,1,-1)$',n:'$(1,2,3)$',ans:'$x+2y+3z+1=0$',w:['$x+2y+3z-1=0$','$2x+y+3z=0$','$x-2y+3z+1=0$']},
        {A:'$(2,0,1)$',n:'$(-1,1,2)$',ans:'$-x+y+2z=0$',w:['$x-y-2z=0$','$-x+y+2z-2=0$','$-x+2y+z=0$']},
        {A:'$(-1,2,0)$',n:'$(3,1,-2)$',ans:'$3x+y-2z+1=0$',w:['$3x+y-2z-1=0$','$x+3y-2z=0$','$3x-y+2z+1=0$']},
      ][variant%4];
      return {vi:`Mặt phẳng qua $A=${rows.A}$ và có vectơ pháp tuyến $\\vec n=${rows.n}$ có phương trình`,en:`The plane through $A=${rows.A}$ with normal vector $\\vec n=${rows.n}$ has equation`,answer:rows.ans,solutionVi:'Dùng $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$.',solutionEn:'Use $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
''')

p.write_text(text,encoding='utf-8')
print('stage3 inserted')
