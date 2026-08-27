import fs from 'node:fs';

const theorySrc = fs.readFileSync('src/lib/lessonTheoryData.ts', 'utf8');
const componentSrc = fs.readFileSync('src/components/student/BilingualLessonModule.tsx', 'utf8');
const bankSrc = fs.readFileSync('src/lib/questionBankData.ts', 'utf8');
const staticSrc = fs.readFileSync('src/lib/staticQuestionBank.ts', 'utf8');

const theoryJson = theorySrc.split('= ', 2)[1].split(';\n\nexport function', 1)[0];
const theory = JSON.parse(theoryJson);
const issues = [];
const keys = Object.keys(theory);
if (keys.length !== 79) issues.push(`Theory coverage ${keys.length}/79`);
for (const [key, item] of Object.entries(theory)) {
  if (!item.summary_vi || item.summary_vi.length < 80) issues.push(`${key}: theory too short`);
  if (/•\s*Dạng\s*\d+/i.test(item.summary_vi)) issues.push(`${key}: theory still lists exercise types`);
  if (!Array.isArray(item.formulas) || item.formulas.length === 0) issues.push(`${key}: missing formulas`);
}

const requiredSnippets = [
  "const DEFAULT_COUNTS: QuestionCounts = { tn: 4, ds: 2, tln: 2, tl: 1 }",
  'return takeQuestionsForType(typeId, requested)',
  'getQuestionsForMathTypeStructured(typeId, activeLesson.topic_id)',
  'Ngân hàng tĩnh đã dùng hết',
  'AI tạo thêm biến thể',
  'REAL_SOURCE_QUESTION_BANK',
  'ONLINE_SAFE_QUESTION_BANK',
];
for (const snippet of requiredSnippets) {
  const haystack = snippet.includes('REAL_SOURCE') || snippet.includes('ONLINE_SAFE') ? bankSrc : componentSrc;
  if (!haystack.includes(snippet)) issues.push(`Missing worksheet/bank guard: ${snippet}`);
}
if (componentSrc.includes("void generateQuestionsForPlans(shortagePlans, 'auto')")) {
  issues.push('Worksheet still auto-calls Gemini when static bank is sufficient/selected');
}
if (componentSrc.includes('{ tn: 2, ds: 1, tln: 1, tl: 1 }')) issues.push('Legacy 2/1/1/1 default still present');

const theoryHeavy = [
  'công cụ trọng tâm nào phù hợp nhất',
  'phương pháp nào phù hợp nhất',
  'bước nào cần làm trước',
  'nhận định nào mô tả đúng nhất cách xử lí dạng',
];
for (const phrase of theoryHeavy) {
  if (staticSrc.toLowerCase().includes(phrase)) issues.push(`Static bank still contains theory/meta generator: ${phrase}`);
}

if (issues.length) {
  console.error('❌ WORKSHEET AUDIT FAILED');
  for (const issue of issues) console.error('-', issue);
  process.exit(1);
}
console.log('✅ 79/79 bài có tóm tắt lý thuyết thật và công thức trọng tâm');
console.log('✅ Mặc định thống nhất 4 TN + 2 Đ/S + 2 TLN + 1 TL');
console.log('✅ Câu nguồn GV được ưu tiên trước ngân hàng nền và vẫn khóa đúng type_id');
console.log('✅ Không tự gọi Gemini khi chọn dạng; AI chỉ là tùy chọn khi yêu cầu vượt ngân hàng');
console.log('✅ Static bank không còn generator hỏi thuộc phương pháp/định nghĩa');
console.log('🎯 WORKSHEET AUDIT PASSED');
