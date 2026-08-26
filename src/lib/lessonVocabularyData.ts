export type LessonVocabPair = { en: string; vi: string };

type Rule = { re: RegExp; terms: LessonVocabPair[] };

const p = (en: string, vi: string): LessonVocabPair => ({ en, vi });

const RULES: Rule[] = [
  { re: /mệnh đề/i, terms: [p('proposition','mệnh đề'),p('truth value','giá trị chân lí'),p('negation','phủ định'),p('implication','mệnh đề kéo theo'),p('quantifier','lượng từ')] },
  { re: /tập hợp/i, terms: [p('set','tập hợp'),p('subset','tập con'),p('intersection','giao'),p('union','hợp'),p('complement','phần bù')] },
  { re: /hệ bất phương trình bậc nhất hai ẩn/i, terms: [p('system of inequalities','hệ bất phương trình'),p('solution region','miền nghiệm'),p('boundary line','đường biên'),p('feasible region','miền khả thi'),p('linear programming','quy hoạch tuyến tính')] },
  { re: /bất phương trình bậc nhất hai ẩn/i, terms: [p('linear inequality','bất phương trình bậc nhất'),p('two variables','hai ẩn'),p('solution pair','cặp nghiệm'),p('boundary line','đường biên'),p('half-plane','nửa mặt phẳng')] },
  { re: /giá trị lượng giác/i, terms: [p('sine','sin'),p('cosine','cos'),p('tangent','tan'),p('cotangent','cot'),p('reference angle','góc tham chiếu')] },
  { re: /hệ thức lượng trong tam giác/i, terms: [p('sine rule','định lí sin'),p('cosine rule','định lí côsin'),p('triangle area','diện tích tam giác'),p('circumradius','bán kính ngoại tiếp'),p('Heron formula','công thức Heron')] },
  { re: /các khái niệm mở đầu về vectơ/i, terms: [p('vector','vectơ'),p('zero vector','vectơ-không'),p('magnitude','độ dài vectơ'),p('same direction','cùng hướng'),p('opposite vector','vectơ đối')] },
  { re: /tổng và hiệu của hai vectơ/i, terms: [p('vector addition','phép cộng vectơ'),p('vector subtraction','phép trừ vectơ'),p('triangle rule','quy tắc ba điểm'),p('parallelogram rule','quy tắc hình bình hành'),p('resultant vector','vectơ tổng')] },
  { re: /tích của một vectơ với một số/i, terms: [p('scalar multiplication','nhân vectơ với số'),p('scalar','số vô hướng'),p('collinear vectors','vectơ cùng phương'),p('linear combination','tổ hợp tuyến tính'),p('direction','phương hướng')] },
  { re: /vectơ trong mặt phẳng tọa độ/i, terms: [p('coordinate vector','vectơ tọa độ'),p('midpoint','trung điểm'),p('centroid','trọng tâm'),p('position vector','vectơ vị trí'),p('coordinate plane','mặt phẳng tọa độ')] },
  { re: /tích vô hướng/i, terms: [p('dot product','tích vô hướng'),p('magnitude','độ dài'),p('angle between vectors','góc giữa hai vectơ'),p('perpendicular vectors','hai vectơ vuông góc'),p('work','công cơ học')] },
  { re: /số gần đúng và sai số/i, terms: [p('approximation','số gần đúng'),p('absolute error','sai số tuyệt đối'),p('relative error','sai số tương đối'),p('accuracy','độ chính xác'),p('rounding','làm tròn')] },
  { re: /xu thế trung tâm/i, terms: [p('mean','số trung bình'),p('median','trung vị'),p('mode','mốt'),p('quartile','tứ phân vị'),p('central tendency','xu thế trung tâm')] },
  { re: /mức độ phân tán|độ phân tán/i, terms: [p('range','khoảng biến thiên'),p('interquartile range','khoảng tứ phân vị'),p('variance','phương sai'),p('standard deviation','độ lệch chuẩn'),p('dispersion','độ phân tán')] },
  { re: /^hàm số$/i, terms: [p('function','hàm số'),p('domain','tập xác định'),p('range','tập giá trị'),p('increasing function','hàm đồng biến'),p('decreasing function','hàm nghịch biến')] },
  { re: /hàm số bậc hai/i, terms: [p('quadratic function','hàm số bậc hai'),p('parabola','parabol'),p('vertex','đỉnh'),p('axis of symmetry','trục đối xứng'),p('discriminant','biệt thức')] },
  { re: /tam thức bậc hai/i, terms: [p('quadratic trinomial','tam thức bậc hai'),p('discriminant','biệt thức'),p('root','nghiệm'),p('sign chart','bảng xét dấu'),p('quadratic inequality','bất phương trình bậc hai')] },
  { re: /quy về phương trình bậc hai/i, terms: [p('radical equation','phương trình chứa căn'),p('domain condition','điều kiện xác định'),p('squaring','bình phương hai vế'),p('extraneous root','nghiệm ngoại lai'),p('quadratic equation','phương trình bậc hai')] },
  { re: /phương trình đường thẳng/i, terms: [p('line equation','phương trình đường thẳng'),p('direction vector','vectơ chỉ phương'),p('normal vector','vectơ pháp tuyến'),p('parametric equation','phương trình tham số'),p('general equation','phương trình tổng quát')] },
  { re: /vị trí tương đối giữa hai đường thẳng/i, terms: [p('parallel lines','hai đường thẳng song song'),p('intersecting lines','hai đường thẳng cắt nhau'),p('angle between lines','góc giữa hai đường thẳng'),p('distance from a point to a line','khoảng cách từ điểm đến đường thẳng'),p('relative position','vị trí tương đối')] },
  { re: /đường tròn/i, terms: [p('circle','đường tròn'),p('center','tâm'),p('radius','bán kính'),p('tangent line','tiếp tuyến'),p('circle equation','phương trình đường tròn')] },
  { re: /ba đường conic/i, terms: [p('ellipse','elip'),p('hyperbola','hypebol'),p('parabola','parabol'),p('focus','tiêu điểm'),p('directrix','đường chuẩn')] },
  { re: /quy tắc đếm/i, terms: [p('addition rule','quy tắc cộng'),p('multiplication rule','quy tắc nhân'),p('counting principle','nguyên lí đếm'),p('case','trường hợp'),p('number of ways','số cách')] },
  { re: /hoán vị, chỉnh hợp và tổ hợp/i, terms: [p('permutation','hoán vị'),p('arrangement','chỉnh hợp'),p('combination','tổ hợp'),p('factorial','giai thừa'),p('order matters','có xét thứ tự')] },
  { re: /nhị thức newton/i, terms: [p('binomial expansion','khai triển nhị thức'),p('binomial coefficient','hệ số nhị thức'),p('general term','số hạng tổng quát'),p('combination','tổ hợp'),p('coefficient','hệ số')] },
  { re: /biến cố và định nghĩa cổ điển/i, terms: [p('random experiment','phép thử ngẫu nhiên'),p('sample space','không gian mẫu'),p('event','biến cố'),p('favorable outcome','kết quả thuận lợi'),p('classical probability','xác suất cổ điển')] },
  { re: /thực hành tính xác suất/i, terms: [p('probability','xác suất'),p('equally likely outcomes','kết quả đồng khả năng'),p('sample space','không gian mẫu'),p('counting method','phương pháp đếm'),p('complementary event','biến cố đối')] },
  { re: /góc lượng giác/i, terms: [p('oriented angle','góc lượng giác'),p('radian','radian'),p('unit circle','đường tròn lượng giác'),p('terminal side','tia cuối'),p('coterminal angles','các góc cùng điểm biểu diễn')] },
  { re: /công thức lượng giác/i, terms: [p('addition formula','công thức cộng'),p('double-angle formula','công thức nhân đôi'),p('half-angle formula','công thức hạ bậc'),p('product-to-sum formula','công thức tích thành tổng'),p('identity','đẳng thức lượng giác')] },
  { re: /hàm số lượng giác/i, terms: [p('trigonometric function','hàm số lượng giác'),p('period','chu kì'),p('amplitude','biên độ'),p('domain','tập xác định'),p('graph','đồ thị')] },
  { re: /phương trình lượng giác/i, terms: [p('trigonometric equation','phương trình lượng giác'),p('general solution','nghiệm tổng quát'),p('sine equation','phương trình sin'),p('cosine equation','phương trình cos'),p('tangent equation','phương trình tan')] },
  { re: /^dãy số$/i, terms: [p('sequence','dãy số'),p('term','số hạng'),p('general term','số hạng tổng quát'),p('recursive formula','công thức truy hồi'),p('bounded sequence','dãy bị chặn')] },
  { re: /cấp số cộng/i, terms: [p('arithmetic progression','cấp số cộng'),p('common difference','công sai'),p('first term','số hạng đầu'),p('nth term','số hạng thứ n'),p('partial sum','tổng n số hạng đầu')] },
  { re: /cấp số nhân/i, terms: [p('geometric progression','cấp số nhân'),p('common ratio','công bội'),p('first term','số hạng đầu'),p('nth term','số hạng thứ n'),p('compound growth','tăng trưởng kép')] },
  { re: /mẫu số liệu ghép nhóm/i, terms: [p('grouped data','số liệu ghép nhóm'),p('class interval','khoảng lớp'),p('frequency','tần số'),p('class midpoint','giá trị đại diện'),p('frequency table','bảng tần số')] },
  { re: /đường thẳng và mặt phẳng trong không gian/i, terms: [p('line in space','đường thẳng trong không gian'),p('plane','mặt phẳng'),p('intersection line','giao tuyến'),p('incidence','quan hệ thuộc'),p('cross-section','thiết diện')] },
  { re: /hai đường thẳng song song/i, terms: [p('parallel lines','hai đường thẳng song song'),p('coplanar','đồng phẳng'),p('skew lines','hai đường thẳng chéo nhau'),p('direction','phương'),p('parallelism','quan hệ song song')] },
  { re: /đường thẳng và mặt phẳng song song/i, terms: [p('line-plane parallelism','đường thẳng song song mặt phẳng'),p('intersection','giao điểm'),p('parallel line','đường thẳng song song'),p('plane','mặt phẳng'),p('ratio','tỉ số')] },
  { re: /hai mặt phẳng song song/i, terms: [p('parallel planes','hai mặt phẳng song song'),p('intersection line','giao tuyến'),p('prism','lăng trụ'),p('parallelepiped','hình hộp'),p('cross-section','thiết diện')] },
  { re: /phép chiếu song song/i, terms: [p('parallel projection','phép chiếu song song'),p('projection direction','phương chiếu'),p('image','ảnh'),p('collinearity','tính thẳng hàng'),p('parallelism','tính song song')] },
  { re: /giới hạn của dãy số/i, terms: [p('sequence limit','giới hạn dãy số'),p('convergent sequence','dãy hội tụ'),p('infinite limit','giới hạn vô cực'),p('geometric series','cấp số nhân lùi vô hạn'),p('limit rule','quy tắc giới hạn')] },
  { re: /giới hạn của hàm số/i, terms: [p('function limit','giới hạn hàm số'),p('one-sided limit','giới hạn một phía'),p('indeterminate form','dạng vô định'),p('infinity','vô cực'),p('limit law','quy tắc giới hạn')] },
  { re: /hàm số liên tục/i, terms: [p('continuity','tính liên tục'),p('continuous function','hàm số liên tục'),p('left-hand limit','giới hạn trái'),p('right-hand limit','giới hạn phải'),p('intermediate value theorem','định lí giá trị trung gian')] },
  { re: /lũy thừa với số mũ thực/i, terms: [p('real exponent','số mũ thực'),p('power','lũy thừa'),p('base','cơ số'),p('exponent law','quy tắc lũy thừa'),p('rational exponent','số mũ hữu tỉ')] },
  { re: /^lôgarit$/i, terms: [p('logarithm','lôgarit'),p('base','cơ số'),p('logarithm rule','quy tắc lôgarit'),p('change of base','đổi cơ số'),p('natural logarithm','lôgarit tự nhiên')] },
  { re: /hàm số mũ và hàm số lôgarit/i, terms: [p('exponential function','hàm số mũ'),p('logarithmic function','hàm số lôgarit'),p('exponential growth','tăng trưởng mũ'),p('decay','phân rã'),p('inverse functions','hai hàm ngược nhau')] },
  { re: /phương trình, bất phương trình mũ/i, terms: [p('exponential equation','phương trình mũ'),p('logarithmic equation','phương trình lôgarit'),p('exponential inequality','bất phương trình mũ'),p('logarithmic inequality','bất phương trình lôgarit'),p('domain condition','điều kiện xác định')] },
  { re: /hai đường thẳng vuông góc/i, terms: [p('perpendicular lines','hai đường thẳng vuông góc'),p('angle between lines','góc giữa hai đường thẳng'),p('direction vector','vectơ chỉ phương'),p('dot product','tích vô hướng'),p('right angle','góc vuông')] },
  { re: /đường thẳng vuông góc với mặt phẳng/i, terms: [p('line perpendicular to a plane','đường thẳng vuông góc mặt phẳng'),p('normal line','đường pháp tuyến'),p('perpendicularity criterion','dấu hiệu vuông góc'),p('orthogonal projection','hình chiếu vuông góc'),p('right angle','góc vuông')] },
  { re: /phép chiếu vuông góc/i, terms: [p('orthogonal projection','phép chiếu vuông góc'),p('foot of perpendicular','chân đường vuông góc'),p('projected line','đường chiếu'),p('angle with a plane','góc với mặt phẳng'),p('inclination','độ nghiêng')] },
  { re: /hai mặt phẳng vuông góc/i, terms: [p('perpendicular planes','hai mặt phẳng vuông góc'),p('dihedral angle','góc nhị diện'),p('normal vector','vectơ pháp tuyến'),p('right dihedral angle','góc nhị diện vuông'),p('perpendicularity','quan hệ vuông góc')] },
  { re: /khoảng cách trong không gian/i, terms: [p('distance in space','khoảng cách trong không gian'),p('point-to-plane distance','khoảng cách điểm-mặt phẳng'),p('skew lines','hai đường chéo nhau'),p('common perpendicular','đường vuông góc chung'),p('shortest distance','khoảng cách ngắn nhất')] },
  { re: /thể tích/i, terms: [p('volume','thể tích'),p('pyramid','khối chóp'),p('prism','khối lăng trụ'),p('base area','diện tích đáy'),p('height','chiều cao')] },
  { re: /biến cố hợp, biến cố giao/i, terms: [p('union of events','biến cố hợp'),p('intersection of events','biến cố giao'),p('complementary event','biến cố đối'),p('mutually exclusive events','hai biến cố xung khắc'),p('event algebra','đại số biến cố')] },
  { re: /công thức cộng xác suất/i, terms: [p('addition rule','công thức cộng'),p('union probability','xác suất biến cố hợp'),p('intersection probability','xác suất biến cố giao'),p('mutually exclusive','xung khắc'),p('complement rule','quy tắc biến cố đối')] },
  { re: /công thức nhân xác suất/i, terms: [p('multiplication rule','công thức nhân'),p('independent events','biến cố độc lập'),p('joint probability','xác suất đồng thời'),p('trial','phép thử'),p('probability tree','sơ đồ cây')] },
  { re: /định nghĩa và ý nghĩa của đạo hàm/i, terms: [p('derivative','đạo hàm'),p('difference quotient','thương sai phân'),p('instantaneous rate of change','tốc độ biến thiên tức thời'),p('tangent slope','hệ số góc tiếp tuyến'),p('instantaneous velocity','vận tốc tức thời')] },
  { re: /các quy tắc tính đạo hàm/i, terms: [p('derivative rule','quy tắc đạo hàm'),p('product rule','quy tắc tích'),p('quotient rule','quy tắc thương'),p('chain rule','quy tắc dây chuyền'),p('tangent line','tiếp tuyến')] },
  { re: /đạo hàm cấp hai/i, terms: [p('second derivative','đạo hàm cấp hai'),p('acceleration','gia tốc'),p('rate of change','tốc độ biến thiên'),p('concavity','độ cong'),p('second-order derivative','đạo hàm bậc hai')] },
  { re: /tính đơn điệu và cực trị/i, terms: [p('increasing interval','khoảng đồng biến'),p('decreasing interval','khoảng nghịch biến'),p('derivative','đạo hàm'),p('local maximum','cực đại'),p('local minimum','cực tiểu')] },
  { re: /giá trị lớn nhất và giá trị nhỏ nhất/i, terms: [p('absolute maximum','giá trị lớn nhất'),p('absolute minimum','giá trị nhỏ nhất'),p('critical point','điểm tới hạn'),p('endpoint','điểm biên'),p('optimization','tối ưu hóa')] },
  { re: /đường tiệm cận/i, terms: [p('vertical asymptote','tiệm cận đứng'),p('horizontal asymptote','tiệm cận ngang'),p('oblique asymptote','tiệm cận xiên'),p('limit','giới hạn'),p('rational function','hàm phân thức')] },
  { re: /khảo sát sự biến thiên/i, terms: [p('variation table','bảng biến thiên'),p('derivative','đạo hàm'),p('critical point','điểm tới hạn'),p('asymptote','đường tiệm cận'),p('function graph','đồ thị hàm số')] },
  { re: /ứng dụng đạo hàm/i, terms: [p('optimization','tối ưu hóa'),p('objective function','hàm mục tiêu'),p('constraint','ràng buộc'),p('maximum','giá trị lớn nhất'),p('minimum','giá trị nhỏ nhất')] },
  { re: /vectơ trong không gian/i, terms: [p('space vector','vectơ trong không gian'),p('coplanar vectors','vectơ đồng phẳng'),p('vector decomposition','phân tích vectơ'),p('resultant force','hợp lực'),p('spatial direction','phương trong không gian')] },
  { re: /hệ tọa độ trong không gian/i, terms: [p('3D coordinate system','hệ tọa độ Oxyz'),p('coordinate vector','vectơ tọa độ'),p('midpoint','trung điểm'),p('dot product','tích vô hướng'),p('cross product','tích có hướng')] },
  { re: /nguyên hàm$/i, terms: [p('antiderivative','nguyên hàm'),p('indefinite integral','tích phân bất định'),p('constant of integration','hằng số tích phân'),p('substitution','đổi biến'),p('integration by parts','tích phân từng phần')] },
  { re: /^tích phân$/i, terms: [p('definite integral','tích phân xác định'),p('integrand','hàm dưới dấu tích phân'),p('lower limit','cận dưới'),p('upper limit','cận trên'),p('integration by parts','tích phân từng phần')] },
  { re: /ứng dụng hình học của tích phân/i, terms: [p('area under a curve','diện tích dưới đồ thị'),p('bounded region','miền giới hạn'),p('volume of revolution','thể tích khối tròn xoay'),p('axis of rotation','trục quay'),p('definite integral','tích phân xác định')] },
  { re: /phương trình mặt phẳng/i, terms: [p('plane equation','phương trình mặt phẳng'),p('normal vector','vectơ pháp tuyến'),p('point-to-plane distance','khoảng cách điểm-mặt phẳng'),p('parallel planes','hai mặt phẳng song song'),p('perpendicular planes','hai mặt phẳng vuông góc')] },
  { re: /phương trình đường thẳng trong không gian/i, terms: [p('line in space','đường thẳng trong không gian'),p('direction vector','vectơ chỉ phương'),p('parametric equation','phương trình tham số'),p('symmetric equation','phương trình chính tắc'),p('intersection point','giao điểm')] },
  { re: /công thức tính góc trong không gian/i, terms: [p('angle in space','góc trong không gian'),p('direction vector','vectơ chỉ phương'),p('normal vector','vectơ pháp tuyến'),p('line-plane angle','góc đường thẳng-mặt phẳng'),p('dihedral angle','góc giữa hai mặt phẳng')] },
  { re: /phương trình mặt cầu/i, terms: [p('sphere','mặt cầu'),p('sphere equation','phương trình mặt cầu'),p('center','tâm'),p('radius','bán kính'),p('sphere-plane intersection','giao mặt cầu-mặt phẳng')] },
  { re: /xác suất có điều kiện/i, terms: [p('conditional probability','xác suất có điều kiện'),p('given that','với điều kiện'),p('intersection','giao biến cố'),p('probability tree','sơ đồ cây'),p('contingency table','bảng hai chiều')] },
  { re: /xác suất toàn phần|bayes/i, terms: [p('total probability','xác suất toàn phần'),p('Bayes formula','công thức Bayes'),p('prior probability','xác suất tiên nghiệm'),p('posterior probability','xác suất hậu nghiệm'),p('likelihood','khả năng xảy ra theo điều kiện')] },
];

const FALLBACK: LessonVocabPair[] = [
  p('mathematical model','mô hình toán học'),
  p('condition','điều kiện'),
  p('formula','công thức'),
  p('solution','lời giải'),
  p('verification','kiểm tra kết quả'),
];

export function getLessonVocabulary(titleVi: string): string[] {
  const raw = titleVi.replace(/^Bài\s+\d+\.\s*/i, '').trim();
  const match = RULES.find((r) => r.re.test(raw));
  const terms = (match?.terms || FALLBACK).slice(0, 5);
  return terms.map((item) => `${item.en} — ${item.vi}`);
}

export function auditLessonVocabulary(titles: string[]) {
  const issues: string[] = [];
  titles.forEach((title) => {
    const vocab = getLessonVocabulary(title);
    if (vocab.length !== 5) issues.push(`${title}: ${vocab.length} terms`);
    if (vocab.some((x) => !x.includes('—'))) issues.push(`${title}: missing EN—VI separator`);
  });
  return { lessonCount: titles.length, issues };
}
