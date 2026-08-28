from pathlib import Path

p=Path('src/lib/staticQuestionBank.ts')
text=p.read_text(encoding='utf-8')

# Lightweight TS-aware brace matcher: ignores quotes, templates and comments.
def matching_brace(s, open_idx):
    assert s[open_idx]=='{'
    depth=0; i=open_idx; state='code'; quote=''
    while i<len(s):
        c=s[i]
        if state=='code':
            if c in "'\"`": state='str'; quote=c
            elif c=='/' and i+1<len(s) and s[i+1]=='/': state='line'; i+=1
            elif c=='/' and i+1<len(s) and s[i+1]=='*': state='block'; i+=1
            elif c=='{': depth+=1
            elif c=='}':
                depth-=1
                if depth==0: return i
        elif state=='str':
            if c=='\\': i+=1
            elif c==quote: state='code'
        elif state=='line':
            if c=='\n': state='code'
        elif state=='block':
            if c=='*' and i+1<len(s) and s[i+1]=='/': state='code'; i+=1
        i+=1
    raise RuntimeError(f'unmatched brace at {open_idx}')

def replace_if_block(marker,new):
    global text
    start=text.find(marker)
    if start<0: raise RuntimeError('marker not found '+marker)
    op=text.find('{', start+len(marker)-1)
    ed=matching_brace(text,op)+1
    text=text[:start]+new+text[ed:]

def replace_return_object(marker,new):
    global text
    start=text.find(marker)
    if start<0: raise RuntimeError('return marker not found '+marker)
    op=text.find('{', start)
    ed=matching_brace(text,op)+1
    # include semicolon following object
    while ed<len(text) and text[ed].isspace() and text[ed]!='\n': ed+=1
    if ed<len(text) and text[ed]==';': ed+=1
    text=text[:start]+new+text[ed:]

def replace_return_by_anchor(anchor,new):
    global text
    idx=text.find(anchor)
    if idx<0: raise RuntimeError('anchor not found '+anchor)
    start=text.rfind('    return {',0,idx)
    if start<0: raise RuntimeError('return before anchor not found '+anchor)
    op=text.find('{',start)
    ed=matching_brace(text,op)+1
    if ed<len(text) and text[ed]==';': ed+=1
    text=text[:start]+new+text[ed:]

# 1. Limits: four true variants.
replace_if_block("    if (hasAny(t,['giới hạn'])) {", r'''    if (hasAny(t,['giới hạn'])) {
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
    }''')

# 2. Geometric integral areas: four variants.
replace_return_object("      if (hasAny(t,['diện tích'])) return {", r'''      if (hasAny(t,['diện tích'])) {
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
      }''')

# 3. Grouped data range and midpoint: force visible LaTeX table.
replace_return_object("    if (hasAny(t,['khoảng biến thiên'])) return {", r'''    if (hasAny(t,['khoảng biến thiên'])) {
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
    }''')
replace_if_block("    if (hasAny(t,['ghép nhóm','giá trị đại diện'])) {", r'''    if (hasAny(t,['ghép nhóm','giá trị đại diện'])) {
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
    }''')

# 4. Trig default variants.
replace_return_by_anchor("vi: '$\\\\sin^2 30^\\\\circ+\\\\cos^2 30^\\\\circ$ bằng'", r'''    const rows = [
      { vi: '$\\sin^2 30^\\circ+\\cos^2 30^\\circ$ bằng', en: '$\\sin^2 30^\\circ+\\cos^2 30^\\circ$ equals', ans: '1', sol: 'Dùng $\\sin^2\\alpha+\\cos^2\\alpha=1$.', wrong: ['0','$1/2$','2'] },
      { vi: '$\\sin(30^\\circ+60^\\circ)$ bằng', en: '$\\sin(30^\\circ+60^\\circ)$ equals', ans: '1', sol: '$\\sin90^\\circ=1$.', wrong: ['0','$1/2$','$\\sqrt3/2$'] },
      { vi: '$\\cos60^\\circ$ bằng', en: '$\\cos60^\\circ$ equals', ans: '$1/2$', sol: '$\\cos60^\\circ=\\dfrac12$.', wrong: ['1','0','$\\sqrt3/2$'] },
      { vi: '$\\tan45^\\circ$ bằng', en: '$\\tan45^\\circ$ equals', ans: '1', sol: '$\\tan45^\\circ=1$.', wrong: ['0','$\\sqrt3$','$1/\\sqrt3$'] },
    ][variant % 4];
    return {
      vi: rows.vi, en: rows.en, answer: rows.ans,
      solutionVi: rows.sol, solutionEn: rows.sol,
      options: [[rows.ans,rows.ans,true],[rows.wrong[0],rows.wrong[0],false],[rows.wrong[1],rows.wrong[1],false],[rows.wrong[2],rows.wrong[2],false]],
    };''')

# 5. Vector coordinate branch -> 3D Oxyz.
replace_return_object("    if (hasAny(t,['tọa độ','toạ độ'])) return {", r'''    if (hasAny(t,['tọa độ','toạ độ'])) {
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
    }''')

# 6. Sequence/AP/powers variants.
replace_return_object("    if (hasAny(t,['cấp số cộng'])) return {", r'''    if (hasAny(t,['cấp số cộng'])) {
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
    }''')
replace_return_object("    if (hasAny(t,['dãy số'])) return {", r'''    if (hasAny(t,['dãy số'])) {
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
    }''')
replace_return_object("    if (hasAny(t,['lũy thừa'])) return {", r'''    if (hasAny(t,['lũy thừa'])) {
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
    }''')

# 7. Geometry 3D-specific branches before 2D geometry rules.
geo="  if (family === 'geometry') {\n"
pos=text.find(geo)
if pos<0: raise RuntimeError('geometry family not found')
pos+=len(geo)
insert=r'''    // 3D-specific templates. These must come before generic plane-geometry fallbacks.
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
        vi:`Hai đường thẳng trong $Oxyz$ có vectơ chỉ phương $\\vec u=${rows.u}$ và $\\vec v=${rows.v}$. Góc giữa hai đường thẳng bằng`,
        en:`Two lines in $Oxyz$ have direction vectors $\\vec u=${rows.u}$ and $\\vec v=${rows.v}$. Their angle is`,
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
        vi:`Đường thẳng có vectơ chỉ phương $\\vec u=${rows.u}$, mặt phẳng có vectơ pháp tuyến $\\vec n=${rows.n}$. Góc giữa đường thẳng và mặt phẳng bằng`,
        en:`A line has direction vector $\\vec u=${rows.u}$ and a plane has normal vector $\\vec n=${rows.n}$. Their angle is`,
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
        vi:`Hai mặt phẳng có vectơ pháp tuyến $\\vec n_1=${rows.n1}$ và $\\vec n_2=${rows.n2}$. Góc giữa hai mặt phẳng bằng`,
        en:`Two planes have normal vectors $\\vec n_1=${rows.n1}$ and $\\vec n_2=${rows.n2}$. Their angle is`,
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
'''
text=text[:pos]+insert+text[pos:]

# 8. Keep Pythagorean only for plane geometry; 3D generic fallback is vector length.
replace_return_by_anchor("vi: 'Tam giác vuông có hai cạnh góc vuông dài $6$ và $8$", r'''    if (hasAny(t,['không gian','mặt phẳng','đường thẳng','mặt cầu','oxyz','tọa độ','toạ độ','vectơ'])) {
      const rows=[
        {a:'$(1,2,2)$',ans:'3',w:['2','4','6']},
        {a:'$(2,-1,2)$',ans:'3',w:['1','5','7']},
        {a:'$(1,2,3)$',ans:'$\\sqrt{14}$',w:['$\\sqrt6$','$\\sqrt{12}$','14']},
        {a:'$(2,3,6)$',ans:'7',w:['6','9','$\\sqrt{13}$']},
      ][variant%4];
      return {
        vi:`Trong không gian $Oxyz$, cho vectơ $\\vec a=${rows.a}$. Độ dài $|\\vec a|$ bằng`,
        en:`In $Oxyz$, let $\\vec a=${rows.a}$. Its length $|\\vec a|$ is`,
        answer:rows.ans,
        solutionVi:'Dùng $|\\vec a|=\\sqrt{x^2+y^2+z^2}$.',
        solutionEn:'Use $|\\vec a|=\\sqrt{x^2+y^2+z^2}$.',
        options:[[rows.ans,rows.ans,true],[rows.w[0],rows.w[0],false],[rows.w[1],rows.w[1],false],[rows.w[2],rows.w[2],false]],
      };
    }
    return {
      vi: 'Tam giác vuông có hai cạnh góc vuông dài $6$ và $8$. Độ dài cạnh huyền bằng', en: 'A right triangle has legs 6 and 8. Find the hypotenuse.', answer: '10',
      solutionVi: '$c=\\sqrt{6^2+8^2}=10$.', solutionEn: 'By Pythagoras, $c=10$.', options: [['10','10',true],['14','14',false],['7','7',false],['$2\\sqrt7$','$2\\sqrt7$',false]],
    };''')

p.write_text(text,encoding='utf-8')
print('static generator repaired safely')
