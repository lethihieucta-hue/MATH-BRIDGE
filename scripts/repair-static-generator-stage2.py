from pathlib import Path
p=Path('src/lib/staticQuestionBank.ts')
text=p.read_text(encoding='utf-8')

def match_brace(s,o):
    depth=0;i=o;state='code';q=''
    while i<len(s):
        c=s[i]
        if state=='code':
            if c in "'\"`":state='str';q=c
            elif c=='/' and i+1<len(s) and s[i+1]=='/':state='line';i+=1
            elif c=='/' and i+1<len(s) and s[i+1]=='*':state='block';i+=1
            elif c=='{':depth+=1
            elif c=='}':
                depth-=1
                if depth==0:return i
        elif state=='str':
            if c=='\\':i+=1
            elif c==q:state='code'
        elif state=='line':
            if c=='\n':state='code'
        elif state=='block':
            if c=='*' and i+1<len(s) and s[i+1]=='/':state='code';i+=1
        i+=1
    raise RuntimeError('unmatched')

def replace_return(marker,new):
    global text
    st=text.find(marker)
    if st<0:raise RuntimeError('not found '+marker)
    op=text.find('{',st); ed=match_brace(text,op)+1
    if ed<len(text) and text[ed]==';':ed+=1
    text=text[:st]+new+text[ed:]

def insert_after(marker,insert):
    global text
    pos=text.find(marker)
    if pos<0:raise RuntimeError('insert marker not found '+marker)
    pos+=len(marker)
    text=text[:pos]+insert+text[pos:]

# Odd dollar in combination solution_en
text=text.replace("solutionEn: `Order does not matter: $C_${rows[0]}^{${rows[1]}}=${rows[2]}.`,",
                  "solutionEn: `Order does not matter: $C_${rows[0]}^{${rows[1]}}=${rows[2]}$.`,")

# Trig degree/radian variants
replace_return("    if (hasAny(t,['độ','radian'])) return {", r'''    if (hasAny(t,['độ','radian'])) {
      const rows=[
        {vi:'$60^\\circ$ bằng bao nhiêu radian?',en:'How many radians is $60^\\circ$?',ans:'$\\pi/3$',w:['$\\pi/6$','$2\\pi/3$','$\\pi/4$']},
        {vi:'$45^\\circ$ bằng bao nhiêu radian?',en:'How many radians is $45^\\circ$?',ans:'$\\pi/4$',w:['$\\pi/2$','$\\pi/3$','$3\\pi/4$']},
        {vi:'$150^\\circ$ bằng bao nhiêu radian?',en:'How many radians is $150^\\circ$?',ans:'$5\\pi/6$',w:['$3\\pi/4$','$2\\pi/3$','$5\\pi/3$']},
        {vi:'$\\dfrac{2\\pi}{3}$ rad bằng bao nhiêu độ?',en:'How many degrees is $\\dfrac{2\\pi}{3}$ radians?',ans:'$120^\\circ$',w:['$60^\\circ$','$90^\\circ$','$240^\\circ$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng $180^\\circ=\\pi$ rad.',solutionEn:'Use $180^\\circ=\\pi$ radians.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }''')

# Trig addition formulas variants
replace_return("    if (hasAny(t,['công thức cộng','công thức hiệu'])) return {", r'''    if (hasAny(t,['công thức cộng','công thức hiệu'])) {
      const rows=[
        {vi:'$\\sin(30^\\circ+60^\\circ)$ bằng',en:'$\\sin(30^\\circ+60^\\circ)$ equals',ans:'1',w:['0','$1/2$','$\\sqrt3/2$']},
        {vi:'$\\cos(60^\\circ-30^\\circ)$ bằng',en:'$\\cos(60^\\circ-30^\\circ)$ equals',ans:'$\\sqrt3/2$',w:['$1/2$','1','0']},
        {vi:'$\\sin(45^\\circ-30^\\circ)$ bằng',en:'$\\sin(45^\\circ-30^\\circ)$ equals',ans:'$\\dfrac{\\sqrt6-\\sqrt2}{4}$',w:['$1/2$','$\\sqrt2/2$','$\\dfrac{\\sqrt6+\\sqrt2}{4}$']},
        {vi:'$\\cos(45^\\circ+45^\\circ)$ bằng',en:'$\\cos(45^\\circ+45^\\circ)$ equals',ans:'0',w:['1','$1/2$','$\\sqrt2/2$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Áp dụng công thức cộng hoặc hiệu lượng giác.',solutionEn:'Apply the angle addition/subtraction formula.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }''')

# Vector dot product variants
replace_return("    if (hasAny(t,['tích vô hướng'])) return {", r'''    if (hasAny(t,['tích vô hướng'])) {
      const rows=[
        {a:'$(1,2,3)$',b:'$(2,-1,1)$',ans:'3',w:['1','5','7']},
        {a:'$(2,0,-1)$',b:'$(1,3,2)$',ans:'0',w:['2','-2','5']},
        {a:'$(1,-2,1)$',b:'$(3,1,-1)$',ans:'0',w:['2','4','-4']},
        {a:'$(2,1,2)$',b:'$(1,-2,3)$',ans:'6',w:['4','8','10']},
      ][variant%4];
      return {vi:`Cho $\\vec a=${rows.a}$, $\\vec b=${rows.b}$. Khi đó $\\vec a\\cdot\\vec b$ bằng`,en:`For $\\vec a=${rows.a}$ and $\\vec b=${rows.b}$, $\\vec a\\cdot\\vec b$ equals`,answer:rows.ans,solutionVi:'Nhân các tọa độ tương ứng rồi cộng.',solutionEn:'Multiply corresponding coordinates and add.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }''')
# Cross product variants
replace_return("    if (hasAny(t,['tích có hướng'])) return {", r'''    if (hasAny(t,['tích có hướng'])) {
      const rows=[
        {a:'$(1,0,0)$',b:'$(0,1,0)$',ans:'$(0,0,1)$',w:['$(0,0,-1)$','$(1,1,0)$','$(1,0,1)$']},
        {a:'$(0,1,0)$',b:'$(0,0,1)$',ans:'$(1,0,0)$',w:['$(-1,0,0)$','$(0,1,1)$','$(0,0,1)$']},
        {a:'$(1,0,0)$',b:'$(0,0,1)$',ans:'$(0,-1,0)$',w:['$(0,1,0)$','$(1,0,1)$','$(-1,0,0)$']},
        {a:'$(1,1,0)$',b:'$(0,1,1)$',ans:'$(1,-1,1)$',w:['$(-1,1,-1)$','$(1,1,1)$','$(0,0,1)$']},
      ][variant%4];
      return {vi:`Cho $\\vec a=${rows.a}$, $\\vec b=${rows.b}$. Tích có hướng $\\vec a\\times\\vec b$ bằng`,en:`For $\\vec a=${rows.a}$ and $\\vec b=${rows.b}$, $\\vec a\\times\\vec b$ equals`,answer:rows.ans,solutionVi:'Tính định thức của tích có hướng theo ba tọa độ.',solutionEn:'Compute the coordinate determinant for the cross product.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }''')

# Algebra recurrence/bounded sequence, before generic dãy số branch
insert_after("  if (family === 'algebra') {\n", r'''    if (hasAny(t,['hệ thức truy hồi','bị chặn'])) {
      const rows=[
        {vi:'Cho $u_1=1$, $u_{n+1}=u_n+2$. Giá trị $u_4$ bằng',en:'Given $u_1=1$, $u_{n+1}=u_n+2$, find $u_4$.',ans:'7',w:['5','6','8']},
        {vi:'Cho $u_1=2$, $u_{n+1}=2u_n$. Giá trị $u_4$ bằng',en:'Given $u_1=2$, $u_{n+1}=2u_n$, find $u_4$.',ans:'16',w:['8','12','32']},
        {vi:'Cho $u_1=5$, $u_{n+1}=u_n-1$. Giá trị $u_5$ bằng',en:'Given $u_1=5$, $u_{n+1}=u_n-1$, find $u_5$.',ans:'1',w:['0','2','4']},
        {vi:'Cho $u_1=1$, $u_{n+1}=u_n+3$. Giá trị $u_6$ bằng',en:'Given $u_1=1$, $u_{n+1}=u_n+3$, find $u_6$.',ans:'16',w:['13','15','19']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng hệ thức truy hồi để tính lần lượt các số hạng.',solutionEn:'Use the recurrence to compute successive terms.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
''')

# Grouped quartile branch before generic median/quartile branch in stats.
insert_after("  if (family === 'stats') {\n", r'''    if (hasAny(t,['tứ phân vị'])) {
      const rows=[
        {cls:['[0;10)','[10;20)','[20;30)','[30;40)'],f:[5,5,5,5],ans:'20',w:['10','15','30']},
        {cls:['[0;5)','[5;10)','[10;15)','[15;20)'],f:[4,4,4,4],ans:'10',w:['5','7.5','15']},
        {cls:['[10;20)','[20;30)','[30;40)','[40;50)'],f:[6,6,6,6],ans:'20',w:['10','25','30']},
        {cls:['[5;15)','[15;25)','[25;35)','[35;45)'],f:[8,8,8,8],ans:'20',w:['10','15','30']},
      ][variant%4];
      const table=`$$\\begin{array}{c|cccc}\\text{Khoảng lớp}&${rows.cls.join('&')}\\\\\\hline\\text{Tần số}&${rows.f.join('&')}\\end{array}$$`;
      return {vi:`Cho bảng tần số ghép nhóm ${table} Khoảng tứ phân vị $\\Delta_Q=Q_3-Q_1$ bằng`,en:`Given the grouped table ${table} the interquartile range $\\Delta_Q=Q_3-Q_1$ is`,answer:rows.ans,solutionVi:'Nội suy các vị trí $n/4$ và $3n/4$ trong các lớp rồi tính $Q_3-Q_1$.',solutionEn:'Interpolate the $n/4$ and $3n/4$ positions, then compute $Q_3-Q_1$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
''')

# Integral / antiderivative fixed branches -> variants.
replace_return("      if (hasAny(t,['lượng giác'])) return {", r'''      if (hasAny(t,['lượng giác'])) {
        const rows=[
          {f:'$\\cos x$',ans:'$\\sin x$',w:['$-\\sin x$','$\\cos x$','$-\\cos x$']},
          {f:'$\\sin x$',ans:'$-\\cos x$',w:['$\\cos x$','$\\sin x$','$-\\sin x$']},
          {f:'$2\\cos x$',ans:'$2\\sin x$',w:['$\\sin x$','$-2\\sin x$','$2\\cos x$']},
          {f:'$3\\sin x$',ans:'$-3\\cos x$',w:['$3\\cos x$','$-\\cos x$','$3\\sin x$']},
        ][variant%4];
        return {vi:`Một nguyên hàm của $f(x)=${fStrip(rows.f)}$ là`,en:`An antiderivative of $f(x)=${fStrip(rows.f)}$ is`,answer:rows.ans,solutionVi:'Kiểm tra bằng cách lấy đạo hàm phương án.',solutionEn:'Differentiate the candidate antiderivative.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
      }'''.replace('${fStrip(rows.f)}','${rows.f.replace(/^\\$|\\$$/g,\'\')}'))

# This generated code above is intentionally template interpolation in TS; Python replacement done.
replace_return("      if (hasAny(t,['đổi biến'])) return {", r'''      if (hasAny(t,['đổi biến'])) {
        const rows=[
          {vi:'Với $u=x^2$, $\\int_0^1 2xe^{x^2}dx$ bằng',en:'Using $u=x^2$, $\\int_0^1 2xe^{x^2}dx$ equals',ans:'$e-1$',w:['$e$','1','$2e-2$']},
          {vi:'Với $u=x^2+1$, $\\int_0^1 2x(x^2+1)^2dx$ bằng',en:'Using $u=x^2+1$, $\\int_0^1 2x(x^2+1)^2dx$ equals',ans:'$7/3$',w:['$1/3$','$8/3$','3']},
          {vi:'Với $u=2x+1$, $\\int_0^1(2x+1)^2dx$ bằng',en:'Using $u=2x+1$, $\\int_0^1(2x+1)^2dx$ equals',ans:'$13/3$',w:['$7/3$','4','$9/2$']},
          {vi:'Với $u=x+1$, $\\int_0^1(x+1)^3dx$ bằng',en:'Using $u=x+1$, $\\int_0^1(x+1)^3dx$ equals',ans:'$15/4$',w:['$7/4$','4','$3/2$']},
        ][variant%4];
        return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Đổi biến, đổi cận rồi tính tích phân theo biến mới.',solutionEn:'Substitute, transform the bounds, and integrate.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
      }''')
replace_return("      if (hasAny(t,['từng phần'])) return {", r'''      if (hasAny(t,['từng phần'])) {
        const rows=[
          {vi:'$\\int_0^1xe^x\\,dx$ bằng',en:'$\\int_0^1xe^x\\,dx$ equals',ans:'1',w:['$e-1$','$e$','0']},
          {vi:'$\\int_0^1x\\,dx$ bằng',en:'$\\int_0^1x\\,dx$ equals',ans:'$1/2$',w:['1','0','2']},
          {vi:'$\\int_0^1(x+1)\\,dx$ bằng',en:'$\\int_0^1(x+1)\\,dx$ equals',ans:'$3/2$',w:['1','2','$1/2$']},
          {vi:'$\\int_0^1 2x\\,dx$ bằng',en:'$\\int_0^1 2x\\,dx$ equals',ans:'1',w:['2','$1/2$','0']},
        ][variant%4];
        return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Tính trực tiếp hoặc áp dụng tích phân từng phần khi thích hợp.',solutionEn:'Evaluate directly or use integration by parts as appropriate.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
      }''')
replace_return("      if (hasAny(t,['thể tích','tròn xoay'])) return {", r'''      if (hasAny(t,['thể tích','tròn xoay'])) {
        const rows=[
          {f:'$y=x$',a:'0',b:'1',ans:'$\\pi/3$',w:['$\\pi/2$','$\\pi$','$2\\pi/3$']},
          {f:'$y=2x$',a:'0',b:'1',ans:'$4\\pi/3$',w:['$2\\pi/3$','$2\\pi$','$4\\pi$']},
          {f:'$y=1$',a:'0',b:'2',ans:'$2\\pi$',w:['$\\pi$','$4\\pi$','$2\\pi/3$']},
          {f:'$y=\\sqrt{x}$',a:'0',b:'1',ans:'$\\pi/2$',w:['$\\pi/3$','$\\pi$','$2\\pi/3$']},
        ][variant%4];
        return {vi:`Quay miền dưới ${rows.f}, $${rows.a}\\le x\\le${rows.b}$ quanh trục $Ox$. Thể tích bằng`,en:`Rotate the region under ${rows.f}, $${rows.a}\\le x\\le${rows.b}$ about the $x$-axis. The volume is`,answer:rows.ans,solutionVi:'Dùng $V=\\pi\\int_a^b y^2\\,dx$.',solutionEn:'Use $V=\\pi\\int_a^b y^2\\,dx$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
      }''')

# Geometry cross-product area/volume before generic triangle area
insert_after("  if (family === 'geometry') {\n", r'''    if (hasAny(t,['tích có hướng']) && hasAny(t,['diện tích tam giác','thể tích tứ diện'])) {
      const rows=[
        {vi:'Cho $\\overrightarrow{AB}=(1,0,0)$, $\\overrightarrow{AC}=(0,2,0)$. Diện tích tam giác $ABC$ bằng',en:'Given $\\overrightarrow{AB}=(1,0,0)$ and $\\overrightarrow{AC}=(0,2,0)$, the area of triangle $ABC$ is',ans:'1',w:['2','$1/2$','4']},
        {vi:'Cho $\\overrightarrow{AB}=(2,0,0)$, $\\overrightarrow{AC}=(0,3,0)$. Diện tích tam giác $ABC$ bằng',en:'Given $\\overrightarrow{AB}=(2,0,0)$ and $\\overrightarrow{AC}=(0,3,0)$, the area of triangle $ABC$ is',ans:'3',w:['6','$3/2$','5']},
        {vi:'Tứ diện $OABC$ có $\\overrightarrow{OA}=(1,0,0)$, $\\overrightarrow{OB}=(0,2,0)$, $\\overrightarrow{OC}=(0,0,3)$. Thể tích bằng',en:'For tetrahedron $OABC$ with the given three vectors, the volume is',ans:'1',w:['6','3','$1/2$']},
        {vi:'Cho $\\overrightarrow{AB}=(1,1,0)$, $\\overrightarrow{AC}=(1,-1,0)$. Diện tích tam giác $ABC$ bằng',en:'Given $\\overrightarrow{AB}=(1,1,0)$ and $\\overrightarrow{AC}=(1,-1,0)$, the area of triangle $ABC$ is',ans:'1',w:['2','$\\sqrt2$','$1/2$']},
      ][variant%4];
      return {vi:rows.vi,en:rows.en,answer:rows.ans,solutionVi:'Dùng $S=\\dfrac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$ hoặc $V=\\dfrac16|[\\vec a,\\vec b,\\vec c]|$.',solutionEn:'Use the cross-product area formula or the scalar triple product volume formula.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
''')

# 3D line equation variants before old generic line equation branch.
insert_after("  if (family === 'geometry') {\n", r'''    if (hasAny(t,['viết phương trình tham số và chính tắc của đường thẳng'])) {
      const rows=[
        {A:'$(1,2,3)$',u:'$(2,-1,1)$',ans:'$x=1+2t,\\;y=2-t,\\;z=3+t$',w:['$x=1+t,\\;y=2+t,\\;z=3+t$','$x=2+t,\\;y=-1+2t,\\;z=1+3t$','$x=2t,\\;y=-t,\\;z=t$']},
        {A:'$(0,1,-1)$',u:'$(1,2,3)$',ans:'$x=t,\\;y=1+2t,\\;z=-1+3t$',w:['$x=1+t,\\;y=2t,\\;z=3t$','$x=t,\\;y=1+t,\\;z=-1+t$','$x=2t,\\;y=1+t,\\;z=-1+3t$']},
        {A:'$(2,0,1)$',u:'$(-1,1,2)$',ans:'$x=2-t,\\;y=t,\\;z=1+2t$',w:['$x=2+t,\\;y=-t,\\;z=1-2t$','$x=-t,\\;y=t,\\;z=2t$','$x=2-t,\\;y=1+t,\\;z=2t$']},
        {A:'$(-1,2,0)$',u:'$(3,1,-2)$',ans:'$x=-1+3t,\\;y=2+t,\\;z=-2t$',w:['$x=3-t,\\;y=1+2t,\\;z=-2t$','$x=-1+t,\\;y=2+3t,\\;z=-2t$','$x=3t,\\;y=t,\\;z=-2t$']},
      ][variant%4];
      return {vi:`Đường thẳng qua $A=${rows.A}$ và có vectơ chỉ phương $\\vec u=${rows.u}$ có phương trình tham số là`,en:`The line through $A=${rows.A}$ with direction vector $\\vec u=${rows.u}$ has parametric equations`,answer:rows.ans,solutionVi:'Dùng $M=A+t\\vec u$.',solutionEn:'Use $M=A+t\\vec u$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
    if (hasAny(t,['xét vị trí tương đối của đường thẳng và mặt phẳng'])) {
      const rows=[
        {u:'$(1,0,0)$',n:'$(0,0,1)$',ans:'Song song',w:['Vuông góc','Cắt nhưng không vuông góc','Nằm trong mặt phẳng']},
        {u:'$(0,0,1)$',n:'$(0,0,1)$',ans:'Vuông góc',w:['Song song','Chéo nhau','Nằm trong mặt phẳng']},
        {u:'$(1,1,0)$',n:'$(1,0,0)$',ans:'Cắt nhưng không vuông góc',w:['Song song','Vuông góc','Trùng nhau']},
        {u:'$(0,1,0)$',n:'$(1,0,0)$',ans:'Song song',w:['Vuông góc','Cắt nhưng không vuông góc','Chéo nhau']},
      ][variant%4];
      return {vi:`Đường thẳng có vectơ chỉ phương $\\vec u=${rows.u}$, mặt phẳng có vectơ pháp tuyến $\\vec n=${rows.n}$. Quan hệ phương hướng là`,en:`A line has direction vector $\\vec u=${rows.u}$ and a plane has normal vector $\\vec n=${rows.n}$. Their directional relation is`,answer:rows.ans,solutionVi:'Xét tích vô hướng $\\vec u\\cdot\\vec n$.',solutionEn:'Inspect $\\vec u\\cdot\\vec n$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
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
      return {vi:`Mặt cầu tâm $I=${rows.I}$, bán kính $R=${rows.r}$ có phương trình là`,en:`The sphere centered at $I=${rows.I}$ with radius $R=${rows.r}$ has equation`,answer:rows.ans,solutionVi:'Dùng $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.',solutionEn:'Use $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.',options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]]};
    }
''')

p.write_text(text,encoding='utf-8')
print('stage2 repaired')
