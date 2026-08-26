import { Chapter, Lesson, MathType, Question } from '../types';
import { getLessonTheory } from './lessonTheoryData';
import { getLessonVocabulary } from './lessonVocabularyData';
// Canonical Kết nối tri thức curriculum: 24 chapters, 79 textbook lessons (10:27, 11:33, 12:19).
export type ExerciseFamily = 'logic' | 'algebra' | 'trig' | 'geometry' | 'vector' | 'stats' | 'probability' | 'calculus' | 'function' | 'combinatorics';
type RawType = { title_vi: string; family: ExerciseFamily };
type RawLesson = { grade: 10 | 11 | 12; chapter: number; book_no: number; title_vi: string; title_en: string; types: RawType[] };
const pad2 = (value: number) => String(value).padStart(2, '0');
const makeTypeId = (grade: number, bookNo: number, typeNo: number) => `type-kntt-${grade}-${pad2(bookNo)}-${pad2(typeNo)}`;

const RAW_CHAPTERS: Array<{ grade: 10 | 11 | 12; no: number; vi: string; en: string }> = [
  { grade: 10, no: 1, vi: 'Mệnh đề và tập hợp', en: 'Propositions and Sets' },
  { grade: 10, no: 2, vi: 'Bất phương trình và hệ bất phương trình bậc nhất hai ẩn', en: 'Linear Inequalities and Systems in Two Variables' },
  { grade: 10, no: 3, vi: 'Hệ thức lượng trong tam giác', en: 'Trigonometric Relations in Triangles' },
  { grade: 10, no: 4, vi: 'Vectơ', en: 'Vectors' },
  { grade: 10, no: 5, vi: 'Các số đặc trưng đo xu thế trung tâm và mức độ phân tán', en: 'Measures of Central Tendency and Dispersion' },
  { grade: 10, no: 6, vi: 'Hàm số, đồ thị và ứng dụng', en: 'Functions, Graphs and Applications' },
  { grade: 10, no: 7, vi: 'Phương pháp tọa độ trong mặt phẳng', en: 'Coordinate Methods in the Plane' },
  { grade: 10, no: 8, vi: 'Đại số tổ hợp', en: 'Combinatorics' },
  { grade: 10, no: 9, vi: 'Tính xác suất theo định nghĩa cổ điển', en: 'Classical Probability' },
  { grade: 11, no: 1, vi: 'Hàm số lượng giác và phương trình lượng giác', en: 'Trigonometric Functions and Equations' },
  { grade: 11, no: 2, vi: 'Dãy số. Cấp số cộng và cấp số nhân', en: 'Sequences, Arithmetic and Geometric Progressions' },
  { grade: 11, no: 3, vi: 'Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm', en: 'Measures of Central Tendency for Grouped Data' },
  { grade: 11, no: 4, vi: 'Quan hệ song song trong không gian', en: 'Parallel Relationships in Space' },
  { grade: 11, no: 5, vi: 'Giới hạn. Hàm số liên tục', en: 'Limits and Continuous Functions' },
  { grade: 11, no: 6, vi: 'Hàm số mũ và hàm số lôgarit', en: 'Exponential and Logarithmic Functions' },
  { grade: 11, no: 7, vi: 'Quan hệ vuông góc trong không gian', en: 'Perpendicular Relationships in Space' },
  { grade: 11, no: 8, vi: 'Các quy tắc tính xác suất', en: 'Probability Rules' },
  { grade: 11, no: 9, vi: 'Đạo hàm', en: 'Derivatives' },
  { grade: 12, no: 1, vi: 'Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số', en: 'Applications of Derivatives to Function Analysis and Graphing' },
  { grade: 12, no: 2, vi: 'Vectơ và hệ tọa độ trong không gian', en: 'Vectors and Coordinate Systems in Space' },
  { grade: 12, no: 3, vi: 'Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm', en: 'Measures of Dispersion for Grouped Data' },
  { grade: 12, no: 4, vi: 'Nguyên hàm và tích phân', en: 'Antiderivatives and Integrals' },
  { grade: 12, no: 5, vi: 'Phương pháp tọa độ trong không gian', en: 'Coordinate Methods in Space' },
  { grade: 12, no: 6, vi: 'Xác suất có điều kiện', en: 'Conditional Probability' },
];

const RAW_LESSONS: RawLesson[] = [
  { grade: 10, chapter: 1, book_no: 1, title_vi: 'Mệnh đề', title_en: 'Propositions', types: [
    { title_vi: 'Nhận biết mệnh đề, mệnh đề chứa biến và xét tính đúng sai', family: 'logic' },
    { title_vi: 'Mệnh đề phủ định, kéo theo, đảo và tương đương', family: 'logic' },
    { title_vi: 'Mệnh đề có lượng từ ∀, ∃ và phủ định mệnh đề có lượng từ', family: 'logic' },
  ] },
  { grade: 10, chapter: 1, book_no: 2, title_vi: 'Tập hợp và các phép toán trên tập hợp', title_en: 'Sets and Operations on Sets', types: [
    { title_vi: 'Biểu diễn tập hợp, tập con và hai tập hợp bằng nhau', family: 'logic' },
    { title_vi: 'Giao, hợp, hiệu và phần bù của hai tập hợp', family: 'logic' },
    { title_vi: 'Khoảng, đoạn, nửa khoảng và phép toán trên các tập con của R', family: 'logic' },
  ] },
  { grade: 10, chapter: 2, book_no: 3, title_vi: 'Bất phương trình bậc nhất hai ẩn', title_en: 'Linear Inequalities in Two Variables', types: [
    { title_vi: 'Nhận biết bất phương trình bậc nhất hai ẩn và kiểm tra một cặp số là nghiệm', family: 'algebra' },
    { title_vi: 'Biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn trên mặt phẳng tọa độ', family: 'function' },
    { title_vi: 'Mô hình hóa tình huống thực tế bằng bất phương trình bậc nhất hai ẩn', family: 'algebra' },
  ] },
  { grade: 10, chapter: 2, book_no: 4, title_vi: 'Hệ bất phương trình bậc nhất hai ẩn', title_en: 'Systems of Linear Inequalities in Two Variables', types: [
    { title_vi: 'Biểu diễn miền nghiệm của hệ bất phương trình bậc nhất hai ẩn', family: 'function' },
    { title_vi: 'Xác định các đỉnh và đặc điểm của miền nghiệm đa giác', family: 'geometry' },
    { title_vi: 'Giải bài toán quy hoạch tuyến tính đơn giản bằng miền nghiệm', family: 'algebra' },
  ] },
  { grade: 10, chapter: 3, book_no: 5, title_vi: 'Giá trị lượng giác của một góc từ 0° đến 180°', title_en: 'Trigonometric Values of Angles from 0° to 180°', types: [
    { title_vi: 'Tính giá trị lượng giác của các góc đặc biệt và xác định dấu', family: 'trig' },
    { title_vi: 'Vận dụng các hệ thức giữa sin, cos, tan, cot của một góc', family: 'trig' },
    { title_vi: 'Tính giá trị biểu thức lượng giác khi biết một giá trị lượng giác', family: 'trig' },
  ] },
  { grade: 10, chapter: 3, book_no: 6, title_vi: 'Hệ thức lượng trong tam giác', title_en: 'Trigonometric Relations in Triangles', types: [
    { title_vi: 'Áp dụng định lí côsin để tính cạnh hoặc góc của tam giác', family: 'geometry' },
    { title_vi: 'Áp dụng định lí sin để tính cạnh, góc và bán kính đường tròn ngoại tiếp', family: 'geometry' },
    { title_vi: 'Tính diện tích tam giác bằng các công thức lượng giác và Heron', family: 'geometry' },
    { title_vi: 'Giải tam giác và bài toán đo đạc thực tế', family: 'geometry' },
  ] },
  { grade: 10, chapter: 4, book_no: 7, title_vi: 'Các khái niệm mở đầu về vectơ', title_en: 'Introductory Vector Concepts', types: [
    { title_vi: 'Nhận biết vectơ, vectơ-không, hai vectơ cùng phương, cùng hướng và bằng nhau', family: 'vector' },
    { title_vi: 'Xác định vectơ đối và quan hệ phương hướng của các vectơ trên hình', family: 'vector' },
    { title_vi: 'Vận dụng khái niệm vectơ trong các bài toán hình học cơ bản', family: 'vector' },
  ] },
  { grade: 10, chapter: 4, book_no: 8, title_vi: 'Tổng và hiệu của hai vectơ', title_en: 'Sum and Difference of Vectors', types: [
    { title_vi: 'Tính tổng hai vectơ bằng quy tắc ba điểm và quy tắc hình bình hành', family: 'vector' },
    { title_vi: 'Tính hiệu hai vectơ và biến đổi đẳng thức vectơ', family: 'vector' },
    { title_vi: 'Vận dụng tổng, hiệu vectơ để chứng minh các quan hệ hình học', family: 'vector' },
  ] },
  { grade: 10, chapter: 4, book_no: 9, title_vi: 'Tích của một vectơ với một số', title_en: 'Scalar Multiplication of Vectors', types: [
    { title_vi: 'Tính tích của vectơ với một số và biến đổi biểu thức vectơ', family: 'vector' },
    { title_vi: 'Dùng tích vectơ với số để chứng minh thẳng hàng và cùng phương', family: 'vector' },
    { title_vi: 'Phân tích một vectơ theo hai vectơ không cùng phương', family: 'vector' },
  ] },
  { grade: 10, chapter: 4, book_no: 10, title_vi: 'Vectơ trong mặt phẳng tọa độ', title_en: 'Vectors in the Coordinate Plane', types: [
    { title_vi: 'Tìm tọa độ điểm và tọa độ vectơ trong mặt phẳng Oxy', family: 'vector' },
    { title_vi: 'Tính tọa độ trung điểm, trọng tâm và điểm chia đoạn', family: 'vector' },
    { title_vi: 'Thực hiện các phép toán vectơ bằng tọa độ', family: 'vector' },
    { title_vi: 'Xác định điểm thỏa mãn điều kiện hình học bằng phương pháp tọa độ', family: 'geometry' },
  ] },
  { grade: 10, chapter: 4, book_no: 11, title_vi: 'Tích vô hướng của hai vectơ', title_en: 'Dot Product of Two Vectors', types: [
    { title_vi: 'Tính tích vô hướng của hai vectơ', family: 'vector' },
    { title_vi: 'Tính góc giữa hai vectơ bằng tích vô hướng', family: 'vector' },
    { title_vi: 'Tính độ dài, khoảng cách và kiểm tra vuông góc bằng tọa độ', family: 'geometry' },
    { title_vi: 'Ứng dụng tích vô hướng trong công cơ học và bài toán thực tế', family: 'vector' },
  ] },
  { grade: 10, chapter: 5, book_no: 12, title_vi: 'Số gần đúng và sai số', title_en: 'Approximate Numbers and Errors', types: [
    { title_vi: 'Làm tròn số gần đúng theo độ chính xác cho trước', family: 'stats' },
    { title_vi: 'Tính sai số tuyệt đối và sai số tương đối', family: 'stats' },
    { title_vi: 'Xác định khoảng giá trị hợp lí từ kết quả đo và sai số', family: 'stats' },
  ] },
  { grade: 10, chapter: 5, book_no: 13, title_vi: 'Các số đặc trưng đo xu thế trung tâm', title_en: 'Measures of Central Tendency', types: [
    { title_vi: 'Tính số trung bình của mẫu số liệu', family: 'stats' },
    { title_vi: 'Tính trung vị và các tứ phân vị', family: 'stats' },
    { title_vi: 'Tìm mốt và lựa chọn số đặc trưng phù hợp để mô tả dữ liệu', family: 'stats' },
  ] },
  { grade: 10, chapter: 5, book_no: 14, title_vi: 'Các số đặc trưng đo độ phân tán', title_en: 'Measures of Dispersion', types: [
    { title_vi: 'Tính khoảng biến thiên và khoảng tứ phân vị', family: 'stats' },
    { title_vi: 'Tính phương sai và độ lệch chuẩn', family: 'stats' },
    { title_vi: 'So sánh mức độ phân tán của hai mẫu số liệu và phân tích ngoại lệ', family: 'stats' },
  ] },
  { grade: 10, chapter: 6, book_no: 15, title_vi: 'Hàm số', title_en: 'Functions', types: [
    { title_vi: 'Tìm tập xác định và tính giá trị của hàm số', family: 'function' },
    { title_vi: 'Đọc đồ thị để xác định khoảng tăng giảm, tập giá trị và nghiệm', family: 'function' },
    { title_vi: 'Nhận biết hàm số chẵn, hàm số lẻ và tính đối xứng của đồ thị', family: 'function' },
    { title_vi: 'Mô hình hóa quan hệ thực tế bằng hàm số', family: 'function' },
  ] },
  { grade: 10, chapter: 6, book_no: 16, title_vi: 'Hàm số bậc hai', title_en: 'Quadratic Functions', types: [
    { title_vi: 'Tìm đỉnh, trục đối xứng và chiều biến thiên của parabol', family: 'function' },
    { title_vi: 'Vẽ và đọc đồ thị hàm số bậc hai', family: 'function' },
    { title_vi: 'Xác định hàm số bậc hai từ các điều kiện về điểm, đỉnh hoặc nghiệm', family: 'function' },
    { title_vi: 'Giải bài toán cực trị thực tế bằng hàm số bậc hai', family: 'function' },
  ] },
  { grade: 10, chapter: 6, book_no: 17, title_vi: 'Dấu của tam thức bậc hai', title_en: 'Sign of a Quadratic Trinomial', types: [
    { title_vi: 'Xét dấu tam thức bậc hai theo biệt thức và nghiệm', family: 'algebra' },
    { title_vi: 'Giải bất phương trình bậc hai một ẩn', family: 'algebra' },
    { title_vi: 'Tìm tham số để tam thức luôn dương, luôn âm hoặc có dấu cho trước', family: 'algebra' },
    { title_vi: 'Vận dụng dấu tam thức trong bài toán thực tế', family: 'algebra' },
  ] },
  { grade: 10, chapter: 6, book_no: 18, title_vi: 'Phương trình quy về phương trình bậc hai', title_en: 'Equations Reducible to Quadratic Equations', types: [
    { title_vi: 'Giải phương trình chứa căn dạng hai vế là căn thức', family: 'algebra' },
    { title_vi: 'Giải phương trình chứa căn bằng cách cô lập căn và bình phương', family: 'algebra' },
    { title_vi: 'Kiểm tra điều kiện và loại nghiệm ngoại lai trong phương trình chứa căn', family: 'algebra' },
  ] },
  { grade: 10, chapter: 7, book_no: 19, title_vi: 'Phương trình đường thẳng', title_en: 'Equations of a Line', types: [
    { title_vi: 'Viết phương trình tham số và phương trình tổng quát của đường thẳng', family: 'geometry' },
    { title_vi: 'Viết phương trình đường thẳng qua điểm và có vectơ chỉ phương hoặc pháp tuyến cho trước', family: 'geometry' },
    { title_vi: 'Viết phương trình đường thẳng qua hai điểm hoặc thỏa điều kiện song song, vuông góc', family: 'geometry' },
    { title_vi: 'Bài toán tọa độ về điểm chuyển động trên đường thẳng', family: 'geometry' },
  ] },
  { grade: 10, chapter: 7, book_no: 20, title_vi: 'Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách', title_en: 'Relative Positions of Lines, Angles and Distances', types: [
    { title_vi: 'Xét vị trí tương đối của hai đường thẳng bằng hệ số hoặc vectơ', family: 'geometry' },
    { title_vi: 'Tính góc giữa hai đường thẳng', family: 'geometry' },
    { title_vi: 'Tính khoảng cách từ một điểm đến một đường thẳng', family: 'geometry' },
    { title_vi: 'Tìm tham số để hai đường thẳng có quan hệ hoặc khoảng cách cho trước', family: 'geometry' },
  ] },
  { grade: 10, chapter: 7, book_no: 21, title_vi: 'Đường tròn trong mặt phẳng tọa độ', title_en: 'Circles in the Coordinate Plane', types: [
    { title_vi: 'Nhận dạng tâm và bán kính từ phương trình đường tròn', family: 'geometry' },
    { title_vi: 'Lập phương trình đường tròn khi biết tâm và bán kính hoặc đường kính', family: 'geometry' },
    { title_vi: 'Lập phương trình đường tròn đi qua các điểm cho trước', family: 'geometry' },
    { title_vi: 'Viết phương trình tiếp tuyến của đường tròn', family: 'geometry' },
  ] },
  { grade: 10, chapter: 7, book_no: 22, title_vi: 'Ba đường conic', title_en: 'The Three Conic Sections', types: [
    { title_vi: 'Nhận dạng và khai thác phương trình chính tắc của elip', family: 'geometry' },
    { title_vi: 'Nhận dạng và khai thác phương trình chính tắc của hypebol', family: 'geometry' },
    { title_vi: 'Nhận dạng và khai thác phương trình chính tắc của parabol', family: 'geometry' },
    { title_vi: 'Vận dụng tiêu điểm, đường chuẩn và tính chất khoảng cách của các đường conic', family: 'geometry' },
    { title_vi: 'Mô hình hóa ứng dụng thực tế bằng elip, hypebol hoặc parabol', family: 'geometry' },
  ] },
  { grade: 10, chapter: 8, book_no: 23, title_vi: 'Quy tắc đếm', title_en: 'Counting Rules', types: [
    { title_vi: 'Vận dụng quy tắc cộng trong bài toán đếm', family: 'combinatorics' },
    { title_vi: 'Vận dụng quy tắc nhân trong bài toán đếm', family: 'combinatorics' },
    { title_vi: 'Kết hợp quy tắc cộng và quy tắc nhân trong bài toán nhiều giai đoạn', family: 'combinatorics' },
    { title_vi: 'Mô hình hóa bài toán thực tế bằng quy tắc đếm', family: 'combinatorics' },
  ] },
  { grade: 10, chapter: 8, book_no: 24, title_vi: 'Hoán vị, chỉnh hợp và tổ hợp', title_en: 'Permutations, Arrangements and Combinations', types: [
    { title_vi: 'Giải bài toán hoán vị', family: 'combinatorics' },
    { title_vi: 'Giải bài toán chỉnh hợp', family: 'combinatorics' },
    { title_vi: 'Giải bài toán tổ hợp', family: 'combinatorics' },
    { title_vi: 'Phân biệt và kết hợp hoán vị, chỉnh hợp, tổ hợp trong bài toán đếm', family: 'combinatorics' },
    { title_vi: 'Giải phương trình hoặc điều kiện có chứa số hoán vị, chỉnh hợp, tổ hợp', family: 'combinatorics' },
  ] },
  { grade: 10, chapter: 8, book_no: 25, title_vi: 'Nhị thức Newton', title_en: 'Newton Binomial', types: [
    { title_vi: 'Khai triển nhị thức Newton', family: 'combinatorics' },
    { title_vi: 'Tìm hệ số của một số hạng trong khai triển', family: 'combinatorics' },
    { title_vi: 'Tìm số hạng chứa lũy thừa cho trước hoặc số hạng không chứa biến', family: 'combinatorics' },
    { title_vi: 'Vận dụng hệ số nhị thức và các đẳng thức tổ hợp', family: 'combinatorics' },
  ] },
  { grade: 10, chapter: 9, book_no: 26, title_vi: 'Biến cố và định nghĩa cổ điển của xác suất', title_en: 'Events and the Classical Definition of Probability', types: [
    { title_vi: 'Xác định phép thử, không gian mẫu và biến cố', family: 'probability' },
    { title_vi: 'Mô tả biến cố bằng tập hợp và xác định biến cố đối', family: 'probability' },
    { title_vi: 'Tính xác suất theo định nghĩa cổ điển bằng đếm số kết quả đồng khả năng', family: 'probability' },
    { title_vi: 'Vận dụng nguyên lí xác suất bé để đánh giá khả năng xảy ra', family: 'probability' },
  ] },
  { grade: 10, chapter: 9, book_no: 27, title_vi: 'Thực hành tính xác suất theo định nghĩa cổ điển', title_en: 'Practice with Classical Probability', types: [
    { title_vi: 'Tính xác suất bằng quy tắc đếm', family: 'probability' },
    { title_vi: 'Tính xác suất bằng hoán vị, chỉnh hợp và tổ hợp', family: 'probability' },
    { title_vi: 'Bài toán xác suất với đồng xu, xúc xắc, thẻ và chọn ngẫu nhiên', family: 'probability' },
    { title_vi: 'Bài toán xác suất sắp xếp hoặc phân nhóm', family: 'probability' },
    { title_vi: 'Bài toán xác suất thực tế nhiều bước', family: 'probability' },
  ] },
  { grade: 11, chapter: 1, book_no: 1, title_vi: 'Giá trị lượng giác của góc lượng giác', title_en: 'Trigonometric Values of Oriented Angles', types: [
    { title_vi: 'Đổi đơn vị độ và radian, xác định góc lượng giác cùng điểm biểu diễn', family: 'trig' },
    { title_vi: 'Tính giá trị lượng giác của góc lượng giác và xác định dấu', family: 'trig' },
    { title_vi: 'Vận dụng các hệ thức lượng giác cơ bản để tính giá trị biểu thức', family: 'trig' },
  ] },
  { grade: 11, chapter: 1, book_no: 2, title_vi: 'Công thức lượng giác', title_en: 'Trigonometric Identities', types: [
    { title_vi: 'Vận dụng công thức cộng và công thức hiệu', family: 'trig' },
    { title_vi: 'Vận dụng công thức nhân đôi và hạ bậc', family: 'trig' },
    { title_vi: 'Biến đổi tổng thành tích, tích thành tổng và rút gọn biểu thức', family: 'trig' },
    { title_vi: 'Chứng minh đẳng thức lượng giác bằng các công thức biến đổi', family: 'trig' },
  ] },
  { grade: 11, chapter: 1, book_no: 3, title_vi: 'Hàm số lượng giác', title_en: 'Trigonometric Functions', types: [
    { title_vi: 'Tìm tập xác định, tập giá trị, tính chẵn lẻ và chu kì của hàm số lượng giác', family: 'function' },
    { title_vi: 'Đọc và vẽ đồ thị các hàm sin, cos, tan', family: 'function' },
    { title_vi: 'Xác định tham số và biến đổi đồ thị hàm số lượng giác', family: 'function' },
    { title_vi: 'Mô hình hóa hiện tượng tuần hoàn bằng hàm số lượng giác', family: 'function' },
  ] },
  { grade: 11, chapter: 1, book_no: 4, title_vi: 'Phương trình lượng giác cơ bản', title_en: 'Basic Trigonometric Equations', types: [
    { title_vi: 'Giải phương trình sin x = a', family: 'trig' },
    { title_vi: 'Giải phương trình cos x = a', family: 'trig' },
    { title_vi: 'Giải phương trình tan x = a và cot x = a', family: 'trig' },
    { title_vi: 'Giải phương trình đưa về phương trình lượng giác cơ bản và bài toán thực tế', family: 'trig' },
  ] },
  { grade: 11, chapter: 2, book_no: 5, title_vi: 'Dãy số', title_en: 'Sequences', types: [
    { title_vi: 'Nhận biết dãy số, tìm số hạng và công thức số hạng tổng quát', family: 'algebra' },
    { title_vi: 'Xét tính tăng, giảm của dãy số', family: 'algebra' },
    { title_vi: 'Xét tính bị chặn và xác định dãy bằng hệ thức truy hồi', family: 'algebra' },
  ] },
  { grade: 11, chapter: 2, book_no: 6, title_vi: 'Cấp số cộng', title_en: 'Arithmetic Progressions', types: [
    { title_vi: 'Xác định số hạng đầu, công sai và số hạng tổng quát của cấp số cộng', family: 'algebra' },
    { title_vi: 'Tính tổng n số hạng đầu của cấp số cộng', family: 'algebra' },
    { title_vi: 'Bài toán ngược xác định cấp số cộng từ các điều kiện', family: 'algebra' },
    { title_vi: 'Ứng dụng cấp số cộng trong bài toán thực tế', family: 'algebra' },
  ] },
  { grade: 11, chapter: 2, book_no: 7, title_vi: 'Cấp số nhân', title_en: 'Geometric Progressions', types: [
    { title_vi: 'Xác định số hạng đầu, công bội và số hạng tổng quát của cấp số nhân', family: 'algebra' },
    { title_vi: 'Tính tổng n số hạng đầu của cấp số nhân', family: 'algebra' },
    { title_vi: 'Bài toán ngược xác định cấp số nhân từ các điều kiện', family: 'algebra' },
    { title_vi: 'Ứng dụng cấp số nhân trong lãi kép, tăng trưởng và phân rã', family: 'algebra' },
  ] },
  { grade: 11, chapter: 3, book_no: 8, title_vi: 'Mẫu số liệu ghép nhóm', title_en: 'Grouped Data Samples', types: [
    { title_vi: 'Ghép nhóm mẫu số liệu và lập bảng tần số ghép nhóm', family: 'stats' },
    { title_vi: 'Xác định giá trị đại diện của nhóm và đọc bảng số liệu ghép nhóm', family: 'stats' },
    { title_vi: 'Phân tích, so sánh cách ghép nhóm và thông tin bị mất khi ghép nhóm', family: 'stats' },
  ] },
  { grade: 11, chapter: 3, book_no: 9, title_vi: 'Các số đặc trưng đo xu thế trung tâm', title_en: 'Measures of Central Tendency for Grouped Data', types: [
    { title_vi: 'Tính số trung bình của mẫu số liệu ghép nhóm', family: 'stats' },
    { title_vi: 'Ước lượng trung vị và tứ phân vị của mẫu số liệu ghép nhóm', family: 'stats' },
    { title_vi: 'Ước lượng mốt của mẫu số liệu ghép nhóm', family: 'stats' },
    { title_vi: 'So sánh và diễn giải các số đặc trưng xu thế trung tâm', family: 'stats' },
  ] },
  { grade: 11, chapter: 4, book_no: 10, title_vi: 'Đường thẳng và mặt phẳng trong không gian', title_en: 'Lines and Planes in Space', types: [
    { title_vi: 'Xác định đường thẳng, mặt phẳng và các quan hệ thuộc trong không gian', family: 'geometry' },
    { title_vi: 'Tìm giao tuyến của hai mặt phẳng và giao điểm của đường thẳng với mặt phẳng', family: 'geometry' },
    { title_vi: 'Xác định thiết diện của hình chóp hoặc hình lăng trụ bởi một mặt phẳng', family: 'geometry' },
  ] },
  { grade: 11, chapter: 4, book_no: 11, title_vi: 'Hai đường thẳng song song', title_en: 'Parallel Lines in Space', types: [
    { title_vi: 'Chứng minh hai đường thẳng song song trong không gian', family: 'geometry' },
    { title_vi: 'Xác định đường thẳng song song với đường thẳng cho trước qua một điểm', family: 'geometry' },
    { title_vi: 'Vận dụng định lí về ba mặt phẳng và các quan hệ song song', family: 'geometry' },
  ] },
  { grade: 11, chapter: 4, book_no: 12, title_vi: 'Đường thẳng và mặt phẳng song song', title_en: 'Parallelism of a Line and a Plane', types: [
    { title_vi: 'Chứng minh đường thẳng song song với mặt phẳng', family: 'geometry' },
    { title_vi: 'Xác định giao tuyến sử dụng quan hệ đường thẳng song song mặt phẳng', family: 'geometry' },
    { title_vi: 'Vận dụng quan hệ song song để tính tỉ số và giải bài toán hình học không gian', family: 'geometry' },
  ] },
  { grade: 11, chapter: 4, book_no: 13, title_vi: 'Hai mặt phẳng song song', title_en: 'Parallel Planes', types: [
    { title_vi: 'Chứng minh hai mặt phẳng song song', family: 'geometry' },
    { title_vi: 'Vận dụng định lí về giao tuyến của các mặt phẳng song song', family: 'geometry' },
    { title_vi: 'Bài toán hình lăng trụ, hình hộp và thiết diện liên quan hai mặt phẳng song song', family: 'geometry' },
  ] },
  { grade: 11, chapter: 4, book_no: 14, title_vi: 'Phép chiếu song song', title_en: 'Parallel Projection', types: [
    { title_vi: 'Xác định ảnh của điểm, đường thẳng và hình qua phép chiếu song song', family: 'geometry' },
    { title_vi: 'Nhận biết các tính chất được bảo toàn qua phép chiếu song song', family: 'geometry' },
    { title_vi: 'Vận dụng phép chiếu song song để biểu diễn hình không gian trên mặt phẳng', family: 'geometry' },
  ] },
  { grade: 11, chapter: 5, book_no: 15, title_vi: 'Giới hạn của dãy số', title_en: 'Limits of Sequences', types: [
    { title_vi: 'Tính giới hạn dãy số bằng các giới hạn cơ bản và phép toán', family: 'calculus' },
    { title_vi: 'Tính giới hạn dãy chứa lũy thừa, căn thức hoặc phân thức', family: 'calculus' },
    { title_vi: 'Vận dụng cấp số nhân lùi vô hạn và giới hạn trong bài toán thực tế', family: 'calculus' },
  ] },
  { grade: 11, chapter: 5, book_no: 16, title_vi: 'Giới hạn của hàm số', title_en: 'Limits of Functions', types: [
    { title_vi: 'Tính giới hạn hữu hạn của hàm số tại một điểm', family: 'calculus' },
    { title_vi: 'Khử dạng vô định khi tính giới hạn hàm số', family: 'calculus' },
    { title_vi: 'Tính giới hạn một phía và giới hạn ở vô cực', family: 'calculus' },
    { title_vi: 'Đọc giới hạn từ đồ thị hoặc hàm số cho theo từng khoảng', family: 'calculus' },
  ] },
  { grade: 11, chapter: 5, book_no: 17, title_vi: 'Hàm số liên tục', title_en: 'Continuous Functions', types: [
    { title_vi: 'Xét tính liên tục của hàm số tại một điểm', family: 'calculus' },
    { title_vi: 'Tìm tham số để hàm số liên tục', family: 'calculus' },
    { title_vi: 'Xét tính liên tục trên khoảng, đoạn và vận dụng định lí giá trị trung gian', family: 'calculus' },
  ] },
  { grade: 11, chapter: 6, book_no: 18, title_vi: 'Lũy thừa với số mũ thực', title_en: 'Real Exponents', types: [
    { title_vi: 'Vận dụng định nghĩa lũy thừa với số mũ hữu tỉ và số mũ thực', family: 'algebra' },
    { title_vi: 'Rút gọn biểu thức lũy thừa bằng các quy tắc', family: 'algebra' },
    { title_vi: 'So sánh và biến đổi biểu thức có lũy thừa', family: 'algebra' },
  ] },
  { grade: 11, chapter: 6, book_no: 19, title_vi: 'Lôgarit', title_en: 'Logarithms', types: [
    { title_vi: 'Tính lôgarit theo định nghĩa và các giá trị cơ bản', family: 'algebra' },
    { title_vi: 'Vận dụng các quy tắc tính lôgarit', family: 'algebra' },
    { title_vi: 'Đổi cơ số và rút gọn biểu thức lôgarit', family: 'algebra' },
  ] },
  { grade: 11, chapter: 6, book_no: 20, title_vi: 'Hàm số mũ và hàm số lôgarit', title_en: 'Exponential and Logarithmic Functions', types: [
    { title_vi: 'Xác định tập xác định, tập giá trị và tính đơn điệu của hàm số mũ', family: 'function' },
    { title_vi: 'Xác định tập xác định, tập giá trị và tính đơn điệu của hàm số lôgarit', family: 'function' },
    { title_vi: 'Đọc, vẽ và biến đổi đồ thị hàm số mũ, lôgarit', family: 'function' },
    { title_vi: 'Ứng dụng hàm mũ và lôgarit trong tăng trưởng, phân rã và thang đo', family: 'function' },
  ] },
  { grade: 11, chapter: 6, book_no: 21, title_vi: 'Phương trình, bất phương trình mũ và lôgarit', title_en: 'Exponential and Logarithmic Equations and Inequalities', types: [
    { title_vi: 'Giải phương trình mũ cơ bản và phương trình quy về cùng cơ số', family: 'algebra' },
    { title_vi: 'Giải phương trình lôgarit và kiểm tra điều kiện xác định', family: 'algebra' },
    { title_vi: 'Giải bất phương trình mũ', family: 'algebra' },
    { title_vi: 'Giải bất phương trình lôgarit', family: 'algebra' },
    { title_vi: 'Giải bài toán thực tế bằng phương trình mũ hoặc lôgarit', family: 'algebra' },
  ] },
  { grade: 11, chapter: 7, book_no: 22, title_vi: 'Hai đường thẳng vuông góc', title_en: 'Perpendicular Lines in Space', types: [
    { title_vi: 'Tính góc giữa hai đường thẳng trong không gian', family: 'geometry' },
    { title_vi: 'Chứng minh hai đường thẳng vuông góc', family: 'geometry' },
    { title_vi: 'Vận dụng vectơ hoặc định lí hình học để xác định quan hệ vuông góc', family: 'geometry' },
  ] },
  { grade: 11, chapter: 7, book_no: 23, title_vi: 'Đường thẳng vuông góc với mặt phẳng', title_en: 'A Line Perpendicular to a Plane', types: [
    { title_vi: 'Vận dụng dấu hiệu để chứng minh đường thẳng vuông góc với mặt phẳng', family: 'geometry' },
    { title_vi: 'Từ đường thẳng vuông góc mặt phẳng suy ra các quan hệ vuông góc khác', family: 'geometry' },
    { title_vi: 'Xác định hình chiếu vuông góc của điểm lên mặt phẳng', family: 'geometry' },
  ] },
  { grade: 11, chapter: 7, book_no: 24, title_vi: 'Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng', title_en: 'Orthogonal Projection and Angle Between a Line and a Plane', types: [
    { title_vi: 'Xác định hình chiếu vuông góc của đường thẳng trên mặt phẳng', family: 'geometry' },
    { title_vi: 'Tính góc giữa đường thẳng và mặt phẳng', family: 'geometry' },
    { title_vi: 'Bài toán thực tế về góc dốc, độ nghiêng và hình chiếu', family: 'geometry' },
  ] },
  { grade: 11, chapter: 7, book_no: 25, title_vi: 'Hai mặt phẳng vuông góc', title_en: 'Perpendicular Planes', types: [
    { title_vi: 'Vận dụng dấu hiệu để chứng minh hai mặt phẳng vuông góc', family: 'geometry' },
    { title_vi: 'Xác định và tính góc nhị diện trong trường hợp cơ bản', family: 'geometry' },
    { title_vi: 'Vận dụng quan hệ hai mặt phẳng vuông góc trong hình chóp, lăng trụ', family: 'geometry' },
  ] },
  { grade: 11, chapter: 7, book_no: 26, title_vi: 'Khoảng cách', title_en: 'Distances in Space', types: [
    { title_vi: 'Tính khoảng cách từ điểm đến mặt phẳng', family: 'geometry' },
    { title_vi: 'Tính khoảng cách giữa đường thẳng và mặt phẳng song song hoặc giữa hai mặt phẳng song song', family: 'geometry' },
    { title_vi: 'Tính khoảng cách giữa hai đường thẳng chéo nhau trong các cấu hình cơ bản', family: 'geometry' },
    { title_vi: 'Bài toán thực tế về khoảng cách trong không gian', family: 'geometry' },
  ] },
  { grade: 11, chapter: 7, book_no: 27, title_vi: 'Thể tích', title_en: 'Volumes', types: [
    { title_vi: 'Tính thể tích khối chóp', family: 'geometry' },
    { title_vi: 'Tính thể tích khối lăng trụ và khối hộp', family: 'geometry' },
    { title_vi: 'Vận dụng tỉ số thể tích trong hình không gian', family: 'geometry' },
    { title_vi: 'Bài toán thực tế về thể tích công trình, vật chứa', family: 'geometry' },
  ] },
  { grade: 11, chapter: 8, book_no: 28, title_vi: 'Biến cố hợp, biến cố giao, biến cố độc lập', title_en: 'Union, Intersection and Independence of Events', types: [
    { title_vi: 'Xác định biến cố hợp, biến cố giao và biến cố đối', family: 'probability' },
    { title_vi: 'Biểu diễn quan hệ biến cố bằng tập hợp hoặc sơ đồ', family: 'probability' },
    { title_vi: 'Kiểm tra hai biến cố độc lập từ dữ kiện xác suất', family: 'probability' },
  ] },
  { grade: 11, chapter: 8, book_no: 29, title_vi: 'Công thức cộng xác suất', title_en: 'Addition Rule of Probability', types: [
    { title_vi: 'Áp dụng công thức cộng cho hai biến cố xung khắc', family: 'probability' },
    { title_vi: 'Áp dụng công thức cộng tổng quát cho hai biến cố', family: 'probability' },
    { title_vi: 'Kết hợp biến cố đối và công thức cộng để tính xác suất', family: 'probability' },
    { title_vi: 'Giải bài toán thực tế bằng công thức cộng xác suất', family: 'probability' },
  ] },
  { grade: 11, chapter: 8, book_no: 30, title_vi: 'Công thức nhân xác suất cho hai biến cố độc lập', title_en: 'Multiplication Rule for Independent Events', types: [
    { title_vi: 'Áp dụng công thức nhân cho hai biến cố độc lập', family: 'probability' },
    { title_vi: 'Tính xác suất của chuỗi phép thử độc lập', family: 'probability' },
    { title_vi: 'Kết hợp công thức cộng và nhân trong bài toán nhiều bước', family: 'probability' },
    { title_vi: 'Giải bài toán thực tế với các biến cố độc lập', family: 'probability' },
  ] },
  { grade: 11, chapter: 9, book_no: 31, title_vi: 'Định nghĩa và ý nghĩa của đạo hàm', title_en: 'Definition and Meaning of the Derivative', types: [
    { title_vi: 'Tính đạo hàm tại một điểm bằng định nghĩa', family: 'calculus' },
    { title_vi: 'Xác định hệ số góc và viết tiếp tuyến bằng đạo hàm', family: 'calculus' },
    { title_vi: 'Giải thích ý nghĩa tốc độ biến thiên tức thời và vận tốc tức thời', family: 'calculus' },
  ] },
  { grade: 11, chapter: 9, book_no: 32, title_vi: 'Các quy tắc tính đạo hàm', title_en: 'Differentiation Rules', types: [
    { title_vi: 'Tính đạo hàm của đa thức, phân thức và căn thức', family: 'calculus' },
    { title_vi: 'Tính đạo hàm của hàm số lượng giác', family: 'calculus' },
    { title_vi: 'Tính đạo hàm của hàm hợp bằng quy tắc dây chuyền', family: 'calculus' },
    { title_vi: 'Viết phương trình tiếp tuyến và giải bài toán liên quan đạo hàm', family: 'calculus' },
  ] },
  { grade: 11, chapter: 9, book_no: 33, title_vi: 'Đạo hàm cấp hai', title_en: 'Second Derivatives', types: [
    { title_vi: 'Tính đạo hàm cấp hai của hàm số', family: 'calculus' },
    { title_vi: 'Tính gia tốc và giải thích ý nghĩa vật lí của đạo hàm cấp hai', family: 'calculus' },
    { title_vi: 'Vận dụng đạo hàm cấp hai trong bài toán biến thiên đơn giản', family: 'calculus' },
  ] },
  { grade: 12, chapter: 1, book_no: 1, title_vi: 'Tính đơn điệu và cực trị của hàm số', title_en: 'Monotonicity and Extrema of Functions', types: [
    { title_vi: 'Tìm khoảng đồng biến và nghịch biến từ công thức hàm số', family: 'calculus' },
    { title_vi: 'Tìm cực trị của hàm số bằng dấu đạo hàm', family: 'calculus' },
    { title_vi: 'Đọc tính đơn điệu và cực trị từ bảng biến thiên hoặc đồ thị đạo hàm', family: 'calculus' },
    { title_vi: 'Tìm tham số để hàm số đơn điệu hoặc có cực trị thỏa điều kiện', family: 'calculus' },
  ] },
  { grade: 12, chapter: 1, book_no: 2, title_vi: 'Giá trị lớn nhất và giá trị nhỏ nhất của hàm số', title_en: 'Maximum and Minimum Values of Functions', types: [
    { title_vi: 'Tìm giá trị lớn nhất, nhỏ nhất của hàm số trên đoạn', family: 'calculus' },
    { title_vi: 'Tìm giá trị lớn nhất, nhỏ nhất trên khoảng hoặc miền xác định', family: 'calculus' },
    { title_vi: 'Tìm tham số liên quan giá trị lớn nhất, nhỏ nhất', family: 'calculus' },
    { title_vi: 'Giải bài toán tối ưu thực tế bằng giá trị lớn nhất, nhỏ nhất', family: 'calculus' },
  ] },
  { grade: 12, chapter: 1, book_no: 3, title_vi: 'Đường tiệm cận của đồ thị hàm số', title_en: 'Asymptotes of Function Graphs', types: [
    { title_vi: 'Tìm tiệm cận đứng của đồ thị hàm số', family: 'calculus' },
    { title_vi: 'Tìm tiệm cận ngang của đồ thị hàm số', family: 'calculus' },
    { title_vi: 'Tìm tiệm cận xiên của đồ thị hàm số', family: 'calculus' },
    { title_vi: 'Tìm tham số để đồ thị có số hoặc vị trí tiệm cận cho trước', family: 'calculus' },
  ] },
  { grade: 12, chapter: 1, book_no: 4, title_vi: 'Khảo sát sự biến thiên và vẽ đồ thị của hàm số', title_en: 'Function Variation and Graphing', types: [
    { title_vi: 'Khảo sát và vẽ đồ thị hàm số bậc ba', family: 'calculus' },
    { title_vi: 'Khảo sát và vẽ đồ thị hàm phân thức bậc nhất trên bậc nhất', family: 'calculus' },
    { title_vi: 'Khảo sát và vẽ đồ thị hàm phân thức bậc hai trên bậc nhất', family: 'calculus' },
    { title_vi: 'Biện luận số nghiệm của phương trình bằng đồ thị', family: 'function' },
  ] },
  { grade: 12, chapter: 1, book_no: 5, title_vi: 'Ứng dụng đạo hàm để giải quyết vấn đề thực tiễn', title_en: 'Applications of Derivatives to Real Problems', types: [
    { title_vi: 'Tối ưu hình học bằng đạo hàm', family: 'calculus' },
    { title_vi: 'Tối ưu chi phí, doanh thu hoặc lợi nhuận bằng đạo hàm', family: 'calculus' },
    { title_vi: 'Tối ưu chuyển động, thời gian hoặc tốc độ bằng đạo hàm', family: 'calculus' },
    { title_vi: 'Mô hình hóa và kiểm tra điều kiện thực tế của bài toán tối ưu', family: 'calculus' },
  ] },
  { grade: 12, chapter: 2, book_no: 6, title_vi: 'Vectơ trong không gian', title_en: 'Vectors in Space', types: [
    { title_vi: 'Thực hiện các phép toán vectơ trong không gian', family: 'vector' },
    { title_vi: 'Chứng minh đẳng thức vectơ và quan hệ hình học trong không gian', family: 'vector' },
    { title_vi: 'Phân tích một vectơ theo ba vectơ không đồng phẳng', family: 'vector' },
    { title_vi: 'Ứng dụng vectơ trong bài toán lực và chuyển động không gian', family: 'vector' },
  ] },
  { grade: 12, chapter: 2, book_no: 7, title_vi: 'Hệ tọa độ trong không gian', title_en: 'Coordinate System in Space', types: [
    { title_vi: 'Tìm tọa độ điểm và vectơ trong không gian Oxyz', family: 'vector' },
    { title_vi: 'Tìm tọa độ trung điểm, trọng tâm và điểm thỏa điều kiện hình học', family: 'vector' },
    { title_vi: 'Tính khoảng cách giữa hai điểm và độ dài vectơ bằng tọa độ', family: 'geometry' },
    { title_vi: 'Mô hình hóa định vị 3D bằng hệ tọa độ Oxyz', family: 'geometry' },
  ] },
  { grade: 12, chapter: 2, book_no: 8, title_vi: 'Biểu thức tọa độ của các phép toán vectơ', title_en: 'Coordinate Expressions for Vector Operations', types: [
    { title_vi: 'Tính tích vô hướng và góc giữa hai vectơ trong Oxyz', family: 'vector' },
    { title_vi: 'Tính tích có hướng của hai vectơ', family: 'vector' },
    { title_vi: 'Tính diện tích tam giác và thể tích tứ diện bằng tích có hướng', family: 'geometry' },
    { title_vi: 'Vận dụng tọa độ vectơ trong bài toán thực tế không gian', family: 'vector' },
  ] },
  { grade: 12, chapter: 3, book_no: 9, title_vi: 'Khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu ghép nhóm', title_en: 'Range and Interquartile Range for Grouped Data', types: [
    { title_vi: 'Tính khoảng biến thiên của mẫu số liệu ghép nhóm', family: 'stats' },
    { title_vi: 'Ước lượng các tứ phân vị và tính khoảng tứ phân vị', family: 'stats' },
    { title_vi: 'So sánh độ phân tán của các mẫu bằng khoảng biến thiên và khoảng tứ phân vị', family: 'stats' },
  ] },
  { grade: 12, chapter: 3, book_no: 10, title_vi: 'Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm', title_en: 'Variance and Standard Deviation for Grouped Data', types: [
    { title_vi: 'Tính phương sai của mẫu số liệu ghép nhóm', family: 'stats' },
    { title_vi: 'Tính độ lệch chuẩn của mẫu số liệu ghép nhóm', family: 'stats' },
    { title_vi: 'So sánh và diễn giải mức độ phân tán, rủi ro bằng phương sai và độ lệch chuẩn', family: 'stats' },
  ] },
  { grade: 12, chapter: 4, book_no: 11, title_vi: 'Nguyên hàm', title_en: 'Antiderivatives', types: [
    { title_vi: 'Tìm nguyên hàm bằng bảng nguyên hàm cơ bản và biến đổi đại số', family: 'calculus' },
    { title_vi: 'Tìm nguyên hàm của hàm lượng giác, hàm mũ và phân thức đơn giản', family: 'calculus' },
    { title_vi: 'Tìm nguyên hàm bằng đổi biến số', family: 'calculus' },
    { title_vi: 'Tìm nguyên hàm bằng từng phần', family: 'calculus' },
    { title_vi: 'Xác định nguyên hàm thỏa điều kiện ban đầu', family: 'calculus' },
  ] },
  { grade: 12, chapter: 4, book_no: 12, title_vi: 'Tích phân', title_en: 'Definite Integrals', types: [
    { title_vi: 'Tính tích phân bằng định nghĩa và tính chất', family: 'calculus' },
    { title_vi: 'Tính tích phân bằng đổi biến số', family: 'calculus' },
    { title_vi: 'Tính tích phân bằng từng phần', family: 'calculus' },
    { title_vi: 'Khai thác tính đối xứng, tách khoảng và tham số trong tích phân', family: 'calculus' },
    { title_vi: 'Ứng dụng tích phân để tính đại lượng tích lũy trong thực tế', family: 'calculus' },
  ] },
  { grade: 12, chapter: 4, book_no: 13, title_vi: 'Ứng dụng hình học của tích phân', title_en: 'Geometric Applications of Integrals', types: [
    { title_vi: 'Tính diện tích hình phẳng giới hạn bởi đồ thị và trục tọa độ', family: 'calculus' },
    { title_vi: 'Tính diện tích hình phẳng giới hạn bởi hai đồ thị', family: 'calculus' },
    { title_vi: 'Tính thể tích khối tròn xoay quanh trục tọa độ', family: 'calculus' },
    { title_vi: 'Giải bài toán diện tích, thể tích thực tế bằng tích phân', family: 'calculus' },
  ] },
  { grade: 12, chapter: 5, book_no: 14, title_vi: 'Phương trình mặt phẳng', title_en: 'Equations of Planes', types: [
    { title_vi: 'Viết phương trình mặt phẳng từ điểm và vectơ pháp tuyến', family: 'geometry' },
    { title_vi: 'Viết phương trình mặt phẳng qua ba điểm hoặc thỏa điều kiện song song, vuông góc', family: 'geometry' },
    { title_vi: 'Xét vị trí tương đối và tính khoảng cách từ điểm đến mặt phẳng', family: 'geometry' },
    { title_vi: 'Tìm tham số trong bài toán mặt phẳng', family: 'geometry' },
  ] },
  { grade: 12, chapter: 5, book_no: 15, title_vi: 'Phương trình đường thẳng trong không gian', title_en: 'Equations of Lines in Space', types: [
    { title_vi: 'Viết phương trình tham số và chính tắc của đường thẳng', family: 'geometry' },
    { title_vi: 'Xét vị trí tương đối của hai đường thẳng trong không gian', family: 'geometry' },
    { title_vi: 'Xét vị trí tương đối của đường thẳng và mặt phẳng', family: 'geometry' },
    { title_vi: 'Tìm giao điểm, hình chiếu và khoảng cách liên quan đường thẳng', family: 'geometry' },
  ] },
  { grade: 12, chapter: 5, book_no: 16, title_vi: 'Công thức tính góc trong không gian', title_en: 'Formulas for Angles in Space', types: [
    { title_vi: 'Tính góc giữa hai đường thẳng bằng vectơ chỉ phương', family: 'geometry' },
    { title_vi: 'Tính góc giữa đường thẳng và mặt phẳng', family: 'geometry' },
    { title_vi: 'Tính góc giữa hai mặt phẳng', family: 'geometry' },
    { title_vi: 'Tìm tham số để góc trong không gian thỏa điều kiện cho trước', family: 'geometry' },
  ] },
  { grade: 12, chapter: 5, book_no: 17, title_vi: 'Phương trình mặt cầu', title_en: 'Equations of Spheres', types: [
    { title_vi: 'Nhận dạng tâm, bán kính từ phương trình mặt cầu', family: 'geometry' },
    { title_vi: 'Lập phương trình mặt cầu từ tâm, bán kính hoặc các điều kiện hình học', family: 'geometry' },
    { title_vi: 'Xét giao của mặt cầu với mặt phẳng và đường thẳng', family: 'geometry' },
    { title_vi: 'Tìm tham số và giải bài toán thực tế liên quan mặt cầu', family: 'geometry' },
  ] },
  { grade: 12, chapter: 6, book_no: 18, title_vi: 'Xác suất có điều kiện', title_en: 'Conditional Probability', types: [
    { title_vi: 'Tính xác suất có điều kiện từ định nghĩa', family: 'probability' },
    { title_vi: 'Tính xác suất có điều kiện từ bảng dữ liệu hai chiều', family: 'probability' },
    { title_vi: 'Áp dụng công thức nhân xác suất và sơ đồ cây', family: 'probability' },
    { title_vi: 'Giải bài toán thực tế bằng xác suất có điều kiện', family: 'probability' },
  ] },
  { grade: 12, chapter: 6, book_no: 19, title_vi: 'Công thức xác suất toàn phần và công thức Bayes', title_en: 'Total Probability and Bayes Formula', types: [
    { title_vi: 'Tính xác suất bằng công thức xác suất toàn phần', family: 'probability' },
    { title_vi: 'Tính xác suất hậu nghiệm bằng công thức Bayes', family: 'probability' },
    { title_vi: 'Giải bài toán Bayes bằng sơ đồ cây hoặc bảng dữ liệu', family: 'probability' },
    { title_vi: 'Ứng dụng Bayes trong kiểm định, y tế và phân loại', family: 'probability' },
  ] },
];

export const FULL_CHAPTERS: Chapter[] = RAW_CHAPTERS.map((c) => ({
  id: `chap-${c.grade}-${c.no}`, grade_id: c.grade, name_vi: `Chương ${['','I','II','III','IV','V','VI','VII','VIII','IX'][c.no]}. ${c.vi}`, name_en: `Chapter ${c.no}. ${c.en}`, description: c.vi, order_index: c.no,
}));

export const TYPE_FAMILY_BY_ID: Record<string, ExerciseFamily> = {};
export const TYPE_TOPIC_BY_ID: Record<string, string> = {};
export const TYPE_LESSON_BY_ID: Record<string, string> = {};
export const TYPE_TITLE_BY_ID: Record<string, string> = {};

const localCounter = new Map<string, number>();
export const FULL_LESSONS: Lesson[] = RAW_LESSONS.map((raw) => {
  const key = `${raw.grade}-${raw.chapter}`;
  const theory = getLessonTheory(raw.grade, raw.book_no);
  const local = (localCounter.get(key) || 0) + 1;
  localCounter.set(key, local);
  const lessonId = `les-${raw.grade}-${raw.chapter}-${local}`;
  const topicId = `top-${raw.grade}-${raw.chapter}-${local}`;
  const types: MathType[] = raw.types.map((t, idx) => {
    const id = makeTypeId(raw.grade, raw.book_no, idx + 1);
    TYPE_FAMILY_BY_ID[id] = t.family; TYPE_TOPIC_BY_ID[id] = topicId; TYPE_LESSON_BY_ID[id] = lessonId; TYPE_TITLE_BY_ID[id] = t.title_vi;
    return { id, lesson_id: lessonId, code: `Dạng ${idx + 1}`, title_vi: t.title_vi, title_en: `${raw.title_en} — exercise family ${idx + 1}`, order_index: idx + 1, sample_count_tn: 4, sample_count_ds: 2, sample_count_tln: 2, sample_count_tl: 1 };
  });
  return {
    id: lessonId, chapter_id: `chap-${raw.grade}-${raw.chapter}`, topic_id: topicId,
    title_vi: `Bài ${raw.book_no}. ${raw.title_vi}`, title_en: `Lesson ${raw.book_no}. ${raw.title_en}`, order_index: local,
    learning_objectives: raw.types.map((t) => `Nhận biết, hiểu và vận dụng: ${t.title_vi}.`),
    vocabulary_list: getLessonVocabulary(raw.title_vi), key_concepts_vi: theory.summary_vi,
    key_concepts_en: `Core theory and formulas for ${raw.title_en}.`, formulas: theory.formulas, types, worked_examples: [], status: 'PUBLISHED', language_level: 2, created_by: 'system', created_at: '2026-08-26T00:00:00.000Z',
  };
});

export const CURRICULUM_EXPECTED_COUNTS = { chapters: 24, lessons: 79, gradeLessons: { 10: 27, 11: 33, 12: 19 } } as const;
export const ALL_CURRENT_TYPE_IDS = new Set(FULL_LESSONS.flatMap((lesson) => (lesson.types || []).map((t) => t.id)));
export const LEGACY_TYPE_MIGRATION: Record<string, string> = {
  'type-10-1-1': 'type-kntt-10-01-01',
  'type-10-1-2': 'type-kntt-10-02-02',
  'type-10-1-3': 'type-kntt-10-02-02',
  'type-10-2-1': 'type-kntt-10-04-01',
  'type-10-2-2': 'type-kntt-10-04-03',
  'type-10-3-1': 'type-kntt-10-06-04',
  'type-10-3-2': 'type-kntt-10-06-04',
  'type-10-4-1': 'type-kntt-10-08-02',
  'type-10-4-2': 'type-kntt-10-11-04',
  'type-10-5-1': 'type-kntt-10-13-01',
  'type-10-5-2': 'type-kntt-10-14-03',
  'type-10-6-1': 'type-kntt-10-16-01',
  'type-10-6-2': 'type-kntt-10-17-02',
  'type-10-6-3': 'type-kntt-10-16-04',
  'type-10-7-1': 'type-kntt-10-20-03',
  'type-10-7-2': 'type-kntt-10-21-01',
  'type-10-7-3': 'type-kntt-10-22-05',
  'type-11-1-1': 'type-kntt-11-01-02',
  'type-11-1-2': 'type-kntt-11-03-04',
  'type-11-10-1': 'type-kntt-11-16-02',
  'type-11-10-2': 'type-kntt-11-31-03',
  'type-11-11-1': 'type-kntt-11-21-02',
  'type-11-11-2': 'type-kntt-11-20-04',
  'type-11-12-1': 'type-kntt-11-32-04',
  'type-11-12-2': 'type-kntt-11-31-03',
  'type-11-13-1': 'type-kntt-11-23-01',
  'type-11-13-2': 'type-kntt-11-24-03',
  'type-11-2-1': 'type-kntt-11-02-01',
  'type-11-3-1': 'type-kntt-11-03-01',
  'type-11-3-2': 'type-kntt-11-03-04',
  'type-11-4-1': 'type-kntt-11-04-04',
  'type-11-4-2': 'type-kntt-11-12-03',
  'type-11-5-1': 'type-kntt-11-05-02',
  'type-11-6-1': 'type-kntt-11-06-01',
  'type-11-6-2': 'type-kntt-11-06-04',
  'type-11-7-1': 'type-kntt-11-07-01',
  'type-11-7-2': 'type-kntt-11-07-04',
  'type-11-8-1': 'type-kntt-11-09-01',
  'type-11-8-2': 'type-kntt-11-09-04',
  'type-11-9-1': 'type-kntt-11-12-01',
  'type-12-1-1': 'type-kntt-12-01-01',
  'type-12-1-2': 'type-kntt-12-01-02',
  'type-12-1-3': 'type-kntt-12-01-04',
  'type-12-1-4': 'type-kntt-12-05-04',
  'type-12-10-1': 'type-kntt-12-10-02',
  'type-12-10-2': 'type-kntt-12-10-03',
  'type-12-11-1': 'type-kntt-12-11-01',
  'type-12-11-2': 'type-kntt-12-11-03',
  'type-12-11-3': 'type-kntt-12-11-04',
  'type-12-12-1': 'type-kntt-12-12-02',
  'type-12-12-2': 'type-kntt-12-12-05',
  'type-12-13-1': 'type-kntt-12-13-02',
  'type-12-13-2': 'type-kntt-12-13-03',
  'type-12-13-3': 'type-kntt-12-13-04',
  'type-12-14-1': 'type-kntt-12-14-02',
  'type-12-14-2': 'type-kntt-12-14-03',
  'type-12-14-3': 'type-kntt-12-14-04',
  'type-12-15-1': 'type-kntt-12-15-01',
  'type-12-15-2': 'type-kntt-12-15-02',
  'type-12-15-3': 'type-kntt-12-15-04',
  'type-12-16-1': 'type-kntt-12-17-01',
  'type-12-16-2': 'type-kntt-12-17-03',
  'type-12-16-3': 'type-kntt-12-17-04',
  'type-12-17-1': 'type-kntt-12-18-01',
  'type-12-17-2': 'type-kntt-12-18-03',
  'type-12-17-3': 'type-kntt-12-18-04',
  'type-12-18-1': 'type-kntt-12-19-01',
  'type-12-18-2': 'type-kntt-12-19-02',
  'type-12-18-3': 'type-kntt-12-19-04',
  'type-12-2-1': 'type-kntt-12-02-01',
  'type-12-2-2': 'type-kntt-12-02-02',
  'type-12-2-3': 'type-kntt-12-02-04',
  'type-12-3-1': 'type-kntt-12-03-01',
  'type-12-3-2': 'type-kntt-12-03-03',
  'type-12-3-3': 'type-kntt-12-03-04',
  'type-12-3-4': 'type-kntt-12-03-04',
  'type-12-4-1': 'type-kntt-12-04-01',
  'type-12-4-2': 'type-kntt-12-04-02',
  'type-12-4-3': 'type-kntt-12-04-03',
  'type-12-4-4': 'type-kntt-12-04-04',
  'type-12-5-1': 'type-kntt-12-05-01',
  'type-12-5-2': 'type-kntt-12-05-02',
  'type-12-5-3': 'type-kntt-12-05-03',
  'type-12-6-1': 'type-kntt-12-06-02',
  'type-12-6-2': 'type-kntt-12-06-03',
  'type-12-6-3': 'type-kntt-12-06-04',
  'type-12-7-1': 'type-kntt-12-07-01',
  'type-12-7-2': 'type-kntt-12-07-02',
  'type-12-7-3': 'type-kntt-12-07-04',
  'type-12-8-1': 'type-kntt-12-08-01',
  'type-12-8-2': 'type-kntt-12-08-02',
  'type-12-8-3': 'type-kntt-12-08-04',
  'type-12-9-1': 'type-kntt-12-09-02',
  'type-12-9-2': 'type-kntt-12-09-03',
};

export function migrateQuestionToCurrentCurriculum<T extends Partial<Question>>(question: T): T {
  const legacyType = question.type_id as string | undefined;
  const mapped = legacyType ? LEGACY_TYPE_MIGRATION[legacyType] : undefined;
  if (!mapped) return question;
  return { ...question, type_id: mapped, topic_id: TYPE_TOPIC_BY_ID[mapped] || question.topic_id } as T;
}
