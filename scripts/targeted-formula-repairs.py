#!/usr/bin/env python3
import json
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
LIB=ROOT/'src'/'lib'
BANKS=[('realSourceQuestionBank.ts','REAL_SOURCE_QUESTION_BANK'),('sourceSupplementQuestionBank.ts','SOURCE_SUPPLEMENT_QUESTION_BANK')]

REPAIRS={
'src-pnl-291a8da85c06f8': r'''Cho cấp số nhân $(u_n)$ có $u_1=2$, công bội dương và biểu thức $u_4+\frac{1024}{u_7}$ đạt giá trị nhỏ nhất. Tính $S=u_{11}+u_{12}+\cdots+u_{20}$.''',
'src-pnl-a1676d40736431': r'''Cho cấp số nhân có các số hạng lần lượt là $\frac14,\frac12,1,\ldots,2048$. Tính tổng $S$ của tất cả các số hạng của cấp số nhân đã cho.''',
'src-pnl-4737392c9682a5': r'''Bạn A thả quả bóng cao su từ độ cao 10 m theo phương thẳng đứng. Mỗi khi chạm đất, bóng nảy lên đến độ cao bằng $\frac34$ độ cao trước đó. Tính tổng quãng đường bóng đi được đến khi bóng dừng hẳn.''',
'src-pnl-1731fab1511f7e': r'''Ông Nam cần xây dựng một bể nước mưa dạng hình hộp chữ nhật không nắp có thể tích $V=8\,\text{m}^3$, chiều dài bằng $\frac43$ chiều rộng. Đáy và nắp đổ bê tông cốt thép, xung quanh xây bằng gạch và xi măng. Chi phí trung bình là 980.000 đồng/m$^2$ và trên nắp để hở một khoảng hình vuông có diện tích bằng $\frac29$ diện tích nắp bể. Tính chi phí thấp nhất ông Nam phải chi trả, làm tròn đến hàng nghìn đồng.''',
'src-sup-essay-47459de0d039': r'''Trong không gian $Oxyz$, một viên đạn được bắn ra từ điểm $A(1,3,4)$ và trong 3 giây đầu chuyển động với vận tốc không đổi $\vec v=(2,1,6)$ (đơn vị tọa độ/giây). Hỏi viên đạn có bắn trúng mục tiêu trong mỗi tình huống sau hay không? a) Mục tiêu tại $M\left(7,\frac72,21\right)$. b) Mục tiêu tại $N(-3,1,-8)$.''',
'src-sup-prob-48efb5cc2d39': r'''Cho tứ diện đều $ABCD$ cạnh $a$. Điểm $M\in AC$ thỏa $MA=2MC$, $N$ là trung điểm của $AD$, và $E$ nằm trong tam giác $BCD$ sao cho mặt phẳng $(MNE)$ song song với $AB$. Gọi $S$ là diện tích thiết diện của tứ diện cắt bởi mặt phẳng $(MNE)$. Tính $\frac{5a^2\sqrt{51}}{S}$.''',
'src-sup-prob-fc498fa12d83': r'''Cho tứ diện $ABCD$. Gọi $M,N$ lần lượt là trung điểm của $AB,CD$; điểm $P\in AC$ thỏa $AP=2PC$. Gọi $S_{MNP}$ là diện tích tam giác $MNP$ và $S_{cs}$ là diện tích thiết diện của tứ diện cắt bởi mặt phẳng $(MNP)$. Tính $\frac{S_{MNP}}{S_{cs}}$.''',
'src-sup-prob-db900c102f2a': r'''Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng 2. Gọi $M,N$ lần lượt là trung điểm của $BC,CD$. Diện tích thiết diện của hình lập phương khi cắt bởi mặt phẳng $(A'MN)$ bằng $\frac{a\sqrt b}{c}$, với $a,b,c$ là các số nguyên dương và phân thức ở dạng tối giản. Tính $T=a+b+c$.''',
'src-sup-prob-4184bef619e6': r'''Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Các điểm $M,N,P$ lần lượt thuộc $AA',BB',CC'$ và thỏa $AM=\frac12AA'$, $BN=\frac13BB'$, $CP=\frac14CC'$. Mặt phẳng $(MNP)$ cắt $DD'$ tại $Q$. Tính $\frac{D'Q}{DD'}$, làm tròn đến hai chữ số thập phân.''',
'src-sup-prob-8002dd6c1586': r'''Trong không gian $Oxyz$ (đơn vị km), một máy bay ở $A(3,-2,1)$ và sẽ hạ cánh tại $B(2,-5,0)$. Một đám mây được mô hình bởi mặt phẳng $(P)$ tiếp xúc với mặt cầu $(S):(x-2)^2+(y+1)^2+(z+1)^2=16$ tại $M\left(\frac{10}{9},-\frac{25}{9},\frac79\right)$. Giả sử mặt đất là mặt phẳng $(Oxy)$. Tính độ cao của máy bay khi đi xuyên qua đám mây để hạ cánh.''',
'src-sup-prob-33b0c647ef71': r'''Một xét nghiệm Covid-19 cho kết quả dương tính với 90% người thực sự nhiễm virus và cho kết quả âm tính với 80% người thực sự không nhiễm virus. Tỉ lệ người nhiễm trong cộng đồng là 1%. Một người có kết quả xét nghiệm dương tính. Xác suất để người đó thực sự nhiễm virus được viết dưới dạng phân số tối giản $\frac ab$. Tính $a+b$.''',
'src-pnl-1879ff686a3b07': r'''Người ta muốn xây một bể nước dạng hình hộp chữ nhật không nắp có thể tích $\dfrac{500}{3}\,\text{m}^3$. Đáy bể là hình chữ nhật có chiều dài gấp đôi chiều rộng và giá thuê thợ xây là 700.000 đồng/m$^2$. Tìm kích thước bể để chi phí thuê nhân công nhỏ nhất và xác định chi phí nhỏ nhất.''',
'src-pnl-d3b55cc4a29a00': r'''Tìm tất cả các giá trị thực của tham số $m$ để đường thẳng $d:y=x-2m$ cắt đồ thị $(C):y=\dfrac{x-3}{x+1}$ tại hai điểm phân biệt có hoành độ dương. Tập các giá trị của $m$ là khoảng $(a,b)$. Tính $a+b$.''',
'src-pnl-06b912684a40ee': r'''Tìm tất cả các giá trị thực của tham số $m$ để đường thẳng $d:y=x-2m$ cắt đồ thị $(C):y=\dfrac{x-3}{x+1}$ tại hai điểm phân biệt có hoành độ dương. Tập các giá trị của $m$ là khoảng $(a,b)$. Tính $T=a+b$.''',
'src-sup-essay-b9271dde73a2': r'''Trong không gian $Oxyz$, viết phương trình mặt phẳng $(P)$ chứa điểm $M(1,3,-2)$ và cắt các tia $Ox,Oy,Oz$ lần lượt tại $A,B,C$ sao cho $\dfrac{OA}{1}=\dfrac{OB}{2}=\dfrac{OC}{4}$.''',
'src-sup-prob-396a583b1c36': r'''Trong không gian $Oxyz$, đường thẳng $\Delta$ là giao tuyến của hai mặt phẳng $(P):z-1=0$ và $(Q):x+y+z-3=0$. Gọi $d$ là đường thẳng nằm trong $(P)$, cắt đường thẳng $\dfrac{x-1}{1}=\dfrac{y-2}{-1}=\dfrac{z-3}{-1}$ và vuông góc với $\Delta$. Chọn phương trình đúng của đường thẳng $d$.''',
'src-sup-prob-57cfbb6fa7c7': r'''Trong không gian $Oxyz$, cho điểm $A(1,0,2)$ và đường thẳng $d:\dfrac{x-1}{1}=\dfrac y1=\dfrac{z+1}{2}$. Viết phương trình đường thẳng $\Delta$ đi qua $A$, vuông góc với và cắt $d$.''',
'src-sup-prob-c6df8eef1caf': r'''Trong không gian $Oxyz$, mặt phẳng $(\alpha)$ chứa đường thẳng $\Delta:\dfrac{x-2}{1}=\dfrac{y-1}{1}=\dfrac z2$ và vuông góc với mặt phẳng $(\beta):x+y-2z-1=0$. Giao tuyến của $(\alpha)$ và $(\beta)$ đi qua điểm nào trong các điểm đã cho?''',
'src-sup-prob-1121db8f32b1': r'''Trong không gian $Oxyz$, cho điểm $A(1,0,2)$ và đường thẳng $d:\dfrac{x-1}{1}=\dfrac y1=\dfrac{z+1}{2}$. Xét tính đúng sai của các khẳng định sau.''',
'src-sup-prob-78eb3303225d': r'''Trong không gian $Oxyz$, vectơ nào là một vectơ chỉ phương của đường thẳng $\dfrac{x-1}{3}=\dfrac{3y}{2}=3-z$?''',
'src-sup-prob-53d46a4d1631': r'''Trong không gian $Oxyz$, cho hai mặt phẳng $(P):3x-2y+2z-5=0$ và $(Q):4x+5y-z+1=0$. Hai điểm $A,B$ phân biệt cùng thuộc giao tuyến của $(P)$ và $(Q)$. Vectơ $\vec{AB}$ cùng phương với vectơ nào sau đây?''',
'src-sup-prob-b45691922d8f': r'''Trong không gian $Oxyz$, cho $\vec{OA}=2\vec i+3\vec j-5\vec k$ và $\vec{OB}=-2\vec j-4\vec k$. Một vectơ chỉ phương của đường thẳng $AB$ là''',
'src-sup-prob-8a071cef8209': r'''Trong không gian $Oxyz$, cho $A(3,-1,2)$, $B(2,3,-3)$, $C(-2,1,-2)$ và mặt phẳng $(Oyz)$. Gọi $M(a,b,c)\in(Oyz)$ sao cho $\vec{MA}\cdot\vec{MB}+\vec{MB}\cdot\vec{MC}+\vec{MC}\cdot\vec{MA}$ đạt giá trị nhỏ nhất. Tính $a-2b+c$.''',
'src-pnl-86390114960871': r'''Tìm $m$ để đồ thị hàm số $y=x^4-2mx^2+m-1$ có ba điểm cực trị tạo thành một tam giác có diện tích $4\sqrt2$.''',
'src-sup-prob-ec087beb9669': r'''Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành, mặt bên $SAB$ là tam giác vuông tại $A$, $SA=a\sqrt3$, $SB=2a$. Điểm $M\in AD$ thỏa $AM=2MD$. Mặt phẳng $(P)$ đi qua $M$ và song song với $(SAB)$. Tính diện tích thiết diện của hình chóp cắt bởi mặt phẳng $(P)$.''',
'src-sup-prob-c6fbfbfd079d': r'''Cho hình chóp $S.ABC$. Điểm $M$ di động trên cạnh $SA$ sao cho $\dfrac{SM}{SA}=k$, với $0<k<1$. Mặt phẳng $(P)$ đi qua $M$ và song song với $(ABC)$. Khi $k=\dfrac{\sqrt m}{n}$, với $m,n$ nguyên dương, thiết diện tạo bởi $(P)$ có diện tích bằng một nửa diện tích tam giác $ABC$. Tính $m+n$.''',
'src-sup-prob-aa2c99acfacf': r'''Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, tam giác $SAB$ đều và $SC=SD=a\sqrt3$. Gọi $H,K$ lần lượt là trung điểm của $SA,SB$. Điểm $M\in AD$, mặt phẳng $(HKM)$ cắt $BC$ tại $N$. Đặt $AM=x$, $0\le x\le a$. Tìm $x$ để diện tích thiết diện $HKMN$ nhỏ nhất.''',
'src-sup-prob-7301799f2f6c': r'''Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $AB=4$. Trên các cạnh $AA',B'C',CD$ lần lượt lấy $M,N,P$ sao cho $MA=NB'=PC=x$, $2\le x<4$. Khi thiết diện tạo bởi mặt phẳng $(MNP)$ có diện tích $11\sqrt3$, tìm $x$.''',
'src-sup-prob-c514484d062c': r'''Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$, tam giác $SBD$ đều cạnh $a$. Các điểm $M,P$ lần lượt di động trên $SA,SC$ và thỏa $\dfrac{SA}{SM}+\dfrac{SC}{SP}=3$. Mặt phẳng $(\alpha)$ chứa $M,P$ cắt $SB,SD$ lần lượt tại $N,Q$. Diện tích tam giác $SNQ$ đạt giá trị nhỏ nhất bằng $\dfrac{a^2\sqrt m}{n}$, với $m,n$ nguyên dương. Tính $4m+n$.''',
'src-sup-prob-0d0d885ee5b2': r'''Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy $ABCD$ là hình vuông cạnh $a\sqrt2$, $SA=2a$. Gọi $M$ là trung điểm của $SC$. Mặt phẳng $(\alpha)$ đi qua $A,M$ và song song với $BD$. Diện tích thiết diện của hình chóp cắt bởi $(\alpha)$ bằng $\dfrac{a^2\sqrt m}{n}$, với $m,n$ nguyên dương. Tính $m+2n$.''',
'src-sup-prob-31f3e27f7447': r'''Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với $AB\parallel CD$, $AB=3a$, $AD=CD=a$. Tam giác $SAB$ cân tại $S$, $SA=2a$. Mặt phẳng $(P)$ song song với $SA,AB$ cắt $AD,BC,SC,SD$ lần lượt tại $M,N,P,Q$. Đặt $AM=x$, $0<x<a$. Chọn $x$ để tứ giác $MNPQ$ ngoại tiếp được một đường tròn. Tính bán kính đường tròn đó khi $a=6\sqrt7$.''',
'src-sup-prob-76d262b0c660': r'''Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông có độ dài đường chéo $a\sqrt2$ và $SA\perp(ABCD)$. Gọi $\alpha$ là góc giữa $(SBD)$ và $(ABCD)$. Nếu $\tan\alpha=2$, tính góc giữa hai mặt phẳng $(SAC)$ và $(SBC)$.''',
'src-sup-essay-2d558b9a6017': r'''Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $AB=a$, $BC=a\sqrt3$, $SA=a$ và $SA\perp(ABCD)$. Tính $\sin\alpha$, với $\alpha$ là góc giữa đường thẳng $BD$ và mặt phẳng $(SBC)$.''',
'src-sup-prob-2ca9539ffbb2': r'''Trong không gian $Oxyz$, gọi $\alpha$ là góc giữa hai mặt phẳng $(P):x+2y-z+2=0$ và $(Q):2x-y-z+4=0$. Tính $\cos\alpha$.''',
'src-sup-essay-0a24a3672705': r'''Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh bằng nhau. Gọi $E,M$ lần lượt là trung điểm của $BC,SA$ và $\alpha$ là góc giữa đường thẳng $EM$ và mặt phẳng $(SBD)$. Tính $\tan\alpha$.''',
'src-sup-prob-45ff90644c75': r'''Cho hình chóp tứ giác đều $S.ABCD$ cạnh đáy $a$ và mặt bên tạo với đáy góc $\alpha$. Chọn hệ trục $Oxyz$ có $O$ là tâm đáy $ABCD$, tia $Ox$ chứa $A$, tia $Oy$ chứa $B$, tia $Oz$ chứa $S$. Xét tính đúng sai của các khẳng định sau.''',
}

# Additional direct repairs found by raw-LaTeX / currency audit
EXTRA={
'src-pnl-5128e4836aa788': r'''Vào năm con gái được 4 tuổi, một người chuẩn bị gửi tiết kiệm vào đầu mỗi năm một số tiền $x$ (triệu đồng) để đến năm 18 tuổi có 200 triệu đồng cho con đi học đại học. Lãi suất tiền gửi hằng năm là 4,8% và được giữ ổn định. Xét tính đúng sai của các khẳng định sau.''',
'src-pnl-f62b649539cac7': r'''Cho ba số tăng $a,b,c$ theo thứ tự lập thành một cấp số nhân; đồng thời $a,b+8,c$ theo thứ tự lập thành một cấp số cộng và $a,b+8,c+64$ theo thứ tự lập thành một cấp số nhân. Tính $P=a-b+2c$.''',
'src-pnl-d33d62d1de0a8e': r'''Trong không gian $Oxyz$, cho tứ diện $ABCD$ có $A(2,-1,1)$, $B(3,0,-1)$, $C(2,-1,3)$ và $D\in Oy$. Thể tích tứ diện $ABCD$ bằng 5. Tính tổng tung độ của các điểm $D$ thỏa mãn yêu cầu bài toán.''',
'src-pnl-09043f544086ec': r'''Biết đồ thị của hàm số $y=x^3+ax^2+bx+c$, với $a,b,c\in\mathbb R$, có một điểm cực trị là $A(-1,29)$ và đi qua $B(2,2)$. Tính $a+b+c$.''',
}
REPAIRS.update(EXTRA)

# one question also had currency $ signs in solution/options
CURRENCY_ID='src-pnl-5f75dcb0fd2780'
CURRENCY_STEM=r'''Giả sử hàm cầu của một sản phẩm độc quyền được cho bởi $P=400-2Q$ và hàm chi phí trung bình $C=0.2Q+4+\dfrac{400}{Q}$, trong đó $Q$ là số đơn vị sản phẩm ($P$ và $C$ được tính bằng USD trên mỗi đơn vị sản phẩm).'''
REPAIRS[CURRENCY_ID]=CURRENCY_STEM


def load_bank(path,var):
    t=path.read_text(encoding='utf-8'); marker=f'export const {var}: Question[] = '; s=t.index(marker)+len(marker); e=t.rfind('];')+1
    return t[:s],json.loads(t[s:e]),t[e:]

def save_bank(path,prefix,arr,suffix):
    path.write_text(prefix+json.dumps(arr,ensure_ascii=False,indent=2)+suffix,encoding='utf-8')

changed=[]
for fn,var in BANKS:
    path=LIB/fn; prefix,arr,suffix=load_bank(path,var)
    for q in arr:
        qid=q.get('id')
        if qid in REPAIRS and q.get('question_vi')!=REPAIRS[qid]:
            q['question_vi']=REPAIRS[qid]; changed.append(qid)
        if qid==CURRENCY_ID:
            q['solution_vi']=(q.get('solution_vi') or '').replace('22$/','22 USD/').replace('230$','230 USD').replace('10$','10 USD')
            for o in q.get('options') or []:
                o['content_vi']=(o.get('content_vi') or '').replace('400$','400 USD').replace('17420$','17.420 USD').replace('22 $/','22 USD/').replace('390$','390 USD')
    save_bank(path,prefix,arr,suffix)
print('targeted repaired',len(changed))
print('\n'.join(changed))
