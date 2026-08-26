import { FULL_LESSONS, TYPE_FAMILY_BY_ID, ExerciseFamily } from './curriculumData';

export interface QuestionVariantBlueprint { id: string; instruction_vi: string; }
export interface MathTypeQuestionBlueprint { type_id: string; title_vi: string; variants: QuestionVariantBlueprint[]; }

const FAMILY_STRUCTURES: Record<ExerciseFamily, Array<{ key: string; instruction: string }>> = {
  logic: [
    { key: 'recognize', instruction: 'Nhận biết/kiểm tra trực tiếp khái niệm, điều kiện hoặc phát biểu.' },
    { key: 'transform', instruction: 'Biến đổi biểu diễn logic/tập hợp tương đương trước khi kết luận.' },
    { key: 'reverse', instruction: 'Suy luận ngược từ kết quả để xác định điều kiện hoặc đối tượng ban đầu.' },
    { key: 'counterexample', instruction: 'Đánh giá một nhận định, tìm phản ví dụ hoặc chỉ ra lỗi lập luận.' },
    { key: 'representation', instruction: 'Đọc biểu đồ Venn, trục số, bảng hoặc cách mô tả tập hợp.' },
    { key: 'context', instruction: 'Mô hình hóa một tình huống phân loại/điều kiện thực tế bằng logic hoặc tập hợp.' },
  ],
  algebra: [
    { key: 'direct', instruction: 'Giải/tính trực tiếp với dữ kiện chuẩn, số liệu gọn và có kiểm tra điều kiện.' },
    { key: 'transform', instruction: 'Biến đổi biểu thức hoặc bài toán qua ít nhất hai bước trước khi áp dụng công thức.' },
    { key: 'reverse', instruction: 'Cho kết quả hoặc một phần dữ kiện, yêu cầu suy ngược để tìm đại lượng chưa biết.' },
    { key: 'parameter', instruction: 'Đưa tham số/điều kiện vào bài toán và biện luận số trường hợp hợp lí.' },
    { key: 'error-analysis', instruction: 'Đánh giá một lời giải/nhận định, phát hiện bước sai hoặc nghiệm ngoại lai.' },
    { key: 'context', instruction: 'Mô hình hóa tình huống thực tế đúng với kiến thức của dạng toán, không lấn sang bài khác.' },
  ],
  trig: [
    { key: 'exact-values', instruction: 'Tính/biến đổi giá trị lượng giác chính xác với góc hoặc biểu thức phù hợp.' },
    { key: 'identity', instruction: 'Dùng hệ thức/công thức lượng giác để rút gọn hoặc chứng minh.' },
    { key: 'reverse-angle', instruction: 'Suy luận từ giá trị lượng giác, góc phần tư hoặc điều kiện để xác định góc/biểu thức.' },
    { key: 'equation', instruction: 'Đưa bài toán về phương trình lượng giác hoặc điều kiện lượng giác đúng phạm vi bài.' },
    { key: 'graph-periodic', instruction: 'Đọc biểu diễn đường tròn lượng giác, đồ thị hoặc tính tuần hoàn nếu phù hợp.' },
    { key: 'context', instruction: 'Mô hình hóa chuyển động quay, dao động hoặc đo góc thực tế khi phù hợp.' },
  ],
  function: [
    { key: 'formula', instruction: 'Khai thác công thức hàm số: miền xác định, giá trị, nghiệm hoặc đặc trưng chính.' },
    { key: 'graph-read', instruction: 'Đọc đồ thị/bảng để suy ra tính chất mà không chỉ thay số vào công thức.' },
    { key: 'construct', instruction: 'Xác định hàm số hoặc tham số từ các điều kiện/điểm/đặc trưng cho trước.' },
    { key: 'transform', instruction: 'Biến đổi đồ thị hoặc biểu thức và phân tích ảnh hưởng tới tính chất.' },
    { key: 'compare', instruction: 'So sánh hai hàm/đồ thị hoặc phân tích một nhận định đúng-sai.' },
    { key: 'context', instruction: 'Mô hình hóa hiện tượng thực tế bằng đúng loại hàm số của bài.' },
  ],
  vector: [
    { key: 'compute', instruction: 'Tính trực tiếp đại lượng vectơ bằng định nghĩa/quy tắc thích hợp.' },
    { key: 'identity', instruction: 'Biến đổi hoặc chứng minh đẳng thức vectơ qua nhiều bước.' },
    { key: 'geometry', instruction: 'Dùng vectơ để suy ra quan hệ hình học như thẳng hàng, vuông góc, đồng phẳng.' },
    { key: 'coordinates', instruction: 'Chuyển bài toán sang tọa độ vectơ rồi tính toán/kiểm tra điều kiện.' },
    { key: 'reverse', instruction: 'Suy ngược để tìm điểm, vectơ hoặc tham số thỏa quan hệ đã cho.' },
    { key: 'context', instruction: 'Mô hình hóa lực, vận tốc hoặc định vị bằng vectơ khi phù hợp.' },
  ],
  geometry: [
    { key: 'recognize', instruction: 'Nhận biết cấu hình và xác định đúng đối tượng/hệ thức hình học cần dùng.' },
    { key: 'prove', instruction: 'Chứng minh quan hệ hình học bằng chuỗi lập luận rõ ràng, không chỉ thay số.' },
    { key: 'compute', instruction: 'Tính độ dài, góc, diện tích, thể tích hoặc khoảng cách từ dữ kiện hình học.' },
    { key: 'reverse', instruction: 'Cho quan hệ/kết quả, suy ngược để tìm điểm, phương trình hoặc tham số.' },
    { key: 'diagram-coordinate', instruction: 'Khai thác hình vẽ, tọa độ hoặc biểu diễn để giải cùng nội dung bằng cách khác.' },
    { key: 'context', instruction: 'Mô hình hóa đo đạc, kiến trúc, định vị hoặc thiết kế bằng đúng kiến thức của dạng.' },
  ],
  stats: [
    { key: 'table-compute', instruction: 'Tính số đặc trưng trực tiếp từ bảng/dãy dữ liệu phù hợp.' },
    { key: 'missing-data', instruction: 'Suy ngược dữ liệu hoặc tần số còn thiếu từ số đặc trưng đã biết.' },
    { key: 'compare-samples', instruction: 'So sánh hai mẫu số liệu bằng số đặc trưng phù hợp và giải thích.' },
    { key: 'interpret', instruction: 'Diễn giải ý nghĩa của số liệu/số đặc trưng trong bối cảnh, không chỉ tính toán.' },
    { key: 'error-outlier', instruction: 'Phân tích ngoại lệ, sai số hoặc ảnh hưởng của thay đổi dữ liệu tới kết quả.' },
    { key: 'context', instruction: 'Dùng dữ liệu thực tế dạng điểm số, đo lường, kinh tế hoặc khoa học.' },
  ],
  probability: [
    { key: 'sample-space', instruction: 'Mô tả không gian mẫu/biến cố hoặc cấu trúc xác suất trước khi tính.' },
    { key: 'direct', instruction: 'Tính xác suất trực tiếp bằng đúng định nghĩa/công thức của bài.' },
    { key: 'complement-combine', instruction: 'Dùng biến cố đối, hợp/giao hoặc kết hợp nhiều bước khi phù hợp.' },
    { key: 'reverse', instruction: 'Suy ngược xác suất hoặc số trường hợp từ một xác suất đã biết.' },
    { key: 'tree-table', instruction: 'Tổ chức dữ kiện bằng bảng, sơ đồ cây hoặc phân hoạch rồi tính xác suất.' },
    { key: 'context', instruction: 'Giải bài toán xác suất thực tế nhưng giữ đúng mô hình và giả thiết độc lập/đồng khả năng.' },
  ],
  calculus: [
    { key: 'direct', instruction: 'Tính trực tiếp bằng định nghĩa/công thức chuẩn của nội dung đang học.' },
    { key: 'transform', instruction: 'Biến đổi biểu thức trước khi đạo hàm, lấy giới hạn, nguyên hàm hoặc tích phân.' },
    { key: 'reverse-parameter', instruction: 'Suy ngược hoặc tìm tham số từ điều kiện về đạo hàm, giới hạn, tích phân hay biến thiên.' },
    { key: 'graph-table', instruction: 'Đọc bảng biến thiên, đồ thị hoặc dữ kiện định tính để suy ra kết quả.' },
    { key: 'method-choice', instruction: 'Phân tích nhiều cách làm, chọn phương pháp phù hợp và nhận diện lỗi thường gặp.' },
    { key: 'context', instruction: 'Mô hình hóa tốc độ, tối ưu, tích lũy, diện tích hoặc thể tích thực tế đúng phạm vi bài.' },
  ],
  combinatorics: [
    { key: 'direct-count', instruction: 'Đếm trực tiếp bằng đúng quy tắc/công thức tổ hợp của dạng.' },
    { key: 'case-split', instruction: 'Chia trường hợp hợp lí rồi cộng số cách, tránh trùng lặp.' },
    { key: 'complement', instruction: 'Đếm gián tiếp bằng phần bù hoặc tổng trừ.' },
    { key: 'constraint', instruction: 'Xử lí điều kiện ràng buộc về vị trí, lựa chọn hoặc thứ tự.' },
    { key: 'reverse', instruction: 'Cho số cách/hệ số, suy ngược tham số hoặc kích thước tập hợp.' },
    { key: 'context', instruction: 'Mô hình hóa lựa chọn, sắp xếp, mã hóa hoặc phân công thực tế bằng tổ hợp.' },
  ],
};

const allTypes = FULL_LESSONS.flatMap((lesson) => lesson.types || []);
export const QUESTION_BLUEPRINTS: Record<string, MathTypeQuestionBlueprint> = Object.fromEntries(
  allTypes.map((mathType) => {
    const family = TYPE_FAMILY_BY_ID[mathType.id];
    const structures = FAMILY_STRUCTURES[family];
    const safePrefix = mathType.id.replace(/[^a-z0-9-]+/gi, '-').toLowerCase();
    return [mathType.id, {
      type_id: mathType.id, title_vi: mathType.title_vi,
      variants: structures.map((s) => ({
        id: `${safePrefix}-${s.key}`,
        instruction_vi: `${s.instruction} Trọng tâm bắt buộc: “${mathType.title_vi}”. Không được chuyển sang dạng toán khác dù cùng chương.`,
      })),
    }];
  })
);

export const getQuestionBlueprint = (typeId: string) => QUESTION_BLUEPRINTS[typeId];
export const getAllowedVariantTags = (typeId: string) => QUESTION_BLUEPRINTS[typeId]?.variants.map((v) => v.id) || [];
export const isAllowedVariantTag = (typeId: string, variantTag?: string) => !!variantTag && getAllowedVariantTags(typeId).includes(variantTag);
export function buildQuestionBlueprintPrompt(mathTypes: Array<{ id: string; code: string; title_vi: string; title_en: string }>): string {
  return mathTypes.map((mathType) => {
    const bp = QUESTION_BLUEPRINTS[mathType.id];
    if (!bp) return `- ${mathType.id} | ${mathType.code} | ${mathType.title_vi}\n  Chưa có blueprint: không được lấy dạng khác làm thay thế.`;
    return `- ${mathType.id} | ${mathType.code} | ${mathType.title_vi}\n${bp.variants.map((v, i) => `  ${i + 1}. variant_tag=\"${v.id}\": ${v.instruction_vi}`).join('\n')}`;
  }).join('\n\n');
}

export const auditQuestionBlueprintCoverage = () => {
  const issues: string[] = [];
  for (const mathType of allTypes) {
    const bp = QUESTION_BLUEPRINTS[mathType.id];
    if (!bp) { issues.push(`Missing blueprint: ${mathType.id}`); continue; }
    const unique = new Set(bp.variants.map((v) => v.id));
    if (unique.size < 5 || unique.size > 8) issues.push(`${mathType.id}: ${unique.size} variants (expected 5-8)`);
    if (unique.size !== bp.variants.length) issues.push(`${mathType.id}: duplicate variant_tag`);
  }
  return { typeCount: allTypes.length, blueprintCount: Object.keys(QUESTION_BLUEPRINTS).length, issues };
};
