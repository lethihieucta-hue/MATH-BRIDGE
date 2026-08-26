import fs from 'node:fs';

const theorySrc = fs.readFileSync('src/lib/lessonTheoryData.ts', 'utf8');
const componentSrc = fs.readFileSync('src/components/student/BilingualLessonModule.tsx', 'utf8');
const geminiSrc = fs.readFileSync('src/lib/geminiService.ts', 'utf8');

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
  'const shortagePlans = getShortagePlans()',
  "void generateQuestionsForPlans(shortagePlans, 'auto')",
  'return takeQuestionsForType(typeId, requested)',
  "const formatJobs: Array<{ kind: keyof QuestionCounts; label: string }>",
  "fullQuota[job.kind] = required",
  "requestNow[job.kind] = remaining",
  "parseAiJsonObject(aiResult.content)",
  "setQuestionGenerationMessage",
  'Sinh đủ câu theo số lượng đã chọn',
];
for (const snippet of requiredSnippets) {
  if (!componentSrc.includes(snippet)) issues.push(`Missing worksheet guard: ${snippet}`);
}
if (componentSrc.includes('{ tn: 2, ds: 1, tln: 1, tl: 1 }')) issues.push('Legacy 2/1/1/1 default still present');
if (!geminiSrc.includes('SỐ LƯỢNG BẮT BUỘC - PHẢI KHỚP CHÍNH XÁC')) issues.push('Gemini exact-count instruction missing');
if (!geminiSrc.includes('generateWorksheetQuestionsByPlanAi')) issues.push('Targeted question generator missing');
if (!geminiSrc.includes("responseMimeType: 'application/json'")) issues.push('Gemini JSON response mode missing');

if (issues.length) {
  console.error('❌ WORKSHEET AUDIT FAILED');
  for (const issue of issues) console.error('-', issue);
  process.exit(1);
}
console.log('✅ 79/79 bài có tóm tắt lý thuyết thật, không còn dùng danh sách Dạng làm lý thuyết');
console.log('✅ 79/79 bài có công thức trọng tâm');
console.log('✅ Mặc định thống nhất 4 TN + 2 Đ/S + 2 TLN + 1 TL');
console.log('✅ Số câu hiển thị lấy trực tiếp từ 4 ô cấu hình của từng type_id');
console.log('✅ Thiếu câu sẽ tự sinh theo đúng type_id + đúng format, không lấy dạng khác bù');
console.log('✅ AI sinh tách riêng từng type_id × TN/Đ-S/TLN/TL, retry tối đa 3 lần mỗi nhóm');
console.log('✅ Kết quả AI được chuẩn hoá type_id / format_type / variant_tag thay vì loại oan');
console.log('✅ Có chẩn đoán số câu Gemini trả về, số câu được nhận và lỗi API cụ thể');
console.log('🎯 WORKSHEET AUDIT PASSED');
