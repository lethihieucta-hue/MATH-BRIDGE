import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const curriculum = fs.readFileSync(path.join(root, 'src/lib/curriculumData.ts'), 'utf8');
const blueprint = fs.readFileSync(path.join(root, 'src/lib/questionBlueprintData.ts'), 'utf8');
const bank = fs.readFileSync(path.join(root, 'src/lib/questionBankData.ts'), 'utf8');
const testBuilder = fs.readFileSync(path.join(root, 'src/components/teacher/TestBuilder.tsx'), 'utf8');
const dataService = fs.readFileSync(path.join(root, 'src/lib/dataService.ts'), 'utf8');
const server = fs.readFileSync(path.join(root, 'server.ts'), 'utf8');

let failed = false;
const fail = (m) => { failed = true; console.error(`❌ ${m}`); };
const ok = (m) => console.log(`✅ ${m}`);
const pad2 = (n) => String(n).padStart(2, '0');

const chapterSection = curriculum.slice(curriculum.indexOf('const RAW_CHAPTERS'), curriculum.indexOf('const RAW_LESSONS'));
const chapterRows = [...chapterSection.matchAll(/\{ grade: (10|11|12), no: (\d+), vi: '([^']+)'/g)].map((m) => ({ grade: +m[1], no: +m[2], title: m[3] }));
const byGradeChapters = Object.fromEntries([10,11,12].map((g) => [g, chapterRows.filter((c) => c.grade === g)]));
if (chapterRows.length !== 24) fail(`Kỳ vọng 24 chương, hiện có ${chapterRows.length}`); else ok('Đủ 24 chương KNTT');
for (const [g, expected] of [[10,9],[11,9],[12,6]]) {
  const rows = byGradeChapters[g];
  if (rows.length !== expected || rows.some((r, i) => r.no !== i + 1)) fail(`Lớp ${g}: cấu trúc chương không liên tục/không đủ (${rows.length}/${expected})`);
  else ok(`Lớp ${g}: ${expected} chương`);
}

const lessonSection = curriculum.slice(curriculum.indexOf('const RAW_LESSONS'), curriculum.indexOf('export const FULL_CHAPTERS'));
const lessonRe = /\{ grade: (10|11|12), chapter: (\d+), book_no: (\d+), title_vi: '([^']+)', title_en: '[^']*', types: \[([\s\S]*?)\n  \] \},/g;
const lessons = [];
for (const m of lessonSection.matchAll(lessonRe)) {
  const typeRows = [...m[5].matchAll(/\{ title_vi: '([^']+)', family: '([^']+)' \}/g)].map((x) => ({ title: x[1], family: x[2] }));
  lessons.push({ grade: +m[1], chapter: +m[2], bookNo: +m[3], title: m[4], types: typeRows });
}
const expectedLessons = {10:27,11:33,12:19};
for (const g of [10,11,12]) {
  const rows = lessons.filter((l) => l.grade === g).sort((a,b) => a.bookNo-b.bookNo);
  if (rows.length !== expectedLessons[g]) fail(`Lớp ${g}: ${rows.length}/${expectedLessons[g]} bài`);
  else if (rows.some((r,i) => r.bookNo !== i+1)) fail(`Lớp ${g}: số bài SGK không liên tục`);
  else ok(`Lớp ${g}: đủ ${expectedLessons[g]} bài SGK`);
}
if (lessons.length !== 79) fail(`Kỳ vọng 79 bài, hiện có ${lessons.length}`); else ok('Đủ 79 bài SGK KNTT');

const anchors = [
  [10,23,'Quy tắc đếm'], [10,24,'Hoán vị, chỉnh hợp và tổ hợp'], [10,25,'Nhị thức Newton'], [10,26,'Biến cố và định nghĩa cổ điển của xác suất'], [10,27,'Thực hành tính xác suất theo định nghĩa cổ điển'],
  [11,28,'Biến cố hợp, biến cố giao, biến cố độc lập'], [11,29,'Công thức cộng xác suất'], [11,30,'Công thức nhân xác suất cho hai biến cố độc lập'], [11,31,'Định nghĩa và ý nghĩa của đạo hàm'], [11,32,'Các quy tắc tính đạo hàm'], [11,33,'Đạo hàm cấp hai'],
  [12,16,'Công thức tính góc trong không gian'], [12,17,'Phương trình mặt cầu'], [12,18,'Xác suất có điều kiện'], [12,19,'Công thức xác suất toàn phần và công thức Bayes'],
];
for (const [g,n,title] of anchors) {
  const row = lessons.find((l) => l.grade === g && l.bookNo === n);
  if (!row || row.title !== title) fail(`Sai/missing anchor L${g} Bài ${n}: ${title}`);
}
if (!failed) ok('Các mốc chương/bài dễ lệch số đã khớp đúng');

const typeIds = [];
const families = new Set();
for (const lesson of lessons) {
  lesson.types.forEach((t, i) => {
    const id = `type-kntt-${lesson.grade}-${pad2(lesson.bookNo)}-${pad2(i+1)}`;
    typeIds.push(id); families.add(t.family);
  });
}
const uniqTypes = new Set(typeIds);
if (uniqTypes.size !== typeIds.length) fail('Trùng type_id mới');
else ok(`Không trùng type_id (${typeIds.length} dạng toán)`);
if (typeIds.length !== 289) fail(`Kỳ vọng 289 dạng toán, hiện có ${typeIds.length}`);

const familySection = blueprint.slice(blueprint.indexOf('const FAMILY_STRUCTURES'), blueprint.indexOf('const allTypes'));
for (const family of families) {
  const re = new RegExp(`${family}: \\[([\\s\\S]*?)\\n  \\],`);
  const block = familySection.match(re)?.[1] || '';
  const count = [...block.matchAll(/\{ key: '[^']+', instruction:/g)].length;
  if (count < 5 || count > 8) fail(`Family ${family}: ${count} cấu trúc, yêu cầu 5-8`);
}
if (!failed) ok(`${typeIds.length} dạng × 6 cấu trúc = ${typeIds.length*6} blueprint sinh bài`);

if (!blueprint.includes('Object.fromEntries') || !blueprint.includes('TYPE_FAMILY_BY_ID') || !blueprint.includes('Không được chuyển sang dạng toán khác')) {
  fail('Blueprint bank chưa được sinh chặt theo type_id/family');
} else ok('Blueprint được khóa theo type_id + họ kiến thức');

const migrationSection = curriculum.slice(curriculum.indexOf('export const LEGACY_TYPE_MIGRATION'), curriculum.indexOf('export function migrateQuestionToCurrentCurriculum'));
const migrations = [...migrationSection.matchAll(/'([^']+)': '([^']+)'/g)].map((m) => [m[1],m[2]]);
const targetsMissing = migrations.filter(([,target]) => !uniqTypes.has(target));
if (migrations.length !== 94) fail(`Migration legacy chỉ có ${migrations.length}/94 type`);
else ok('Có migration cho đủ 94 type_id cũ');
if (targetsMissing.length) fail(`Migration trỏ tới type không tồn tại: ${targetsMissing.slice(0,5).map((x)=>x.join('→')).join(', ')}`);
else ok('Toàn bộ migration trỏ tới type_id mới hợp lệ');

const oldBankTypeIds = new Set([...bank.matchAll(/type_id:\s*'(type-(?:10|11|12)-[^']+)'/g)].map((m)=>m[1]));
const migrationKeys = new Set(migrations.map(([old])=>old));
const unmigratedBank = [...oldBankTypeIds].filter((id)=>!migrationKeys.has(id));
if (unmigratedBank.length) fail(`Question bank cũ còn type chưa migration: ${unmigratedBank.join(', ')}`);
else ok(`Toàn bộ ${oldBankTypeIds.size} type legacy đang dùng trong bank đều được migration`);

if (/fallback câu hỏi chuẩn hóa lớp 12|Mặc định fallback câu hỏi/i.test(bank)) fail('Vẫn còn fallback cực trị generic'); else ok('Không còn fallback cực trị generic');
if (/Array\.from\(\{\s*length:\s*(?:10|4)\s*\}\)\.map/.test(bank)) fail('Vẫn còn generator một mẫu chỉ thay số'); else ok('Không còn generator kiểu một mẫu chỉ thay số');


if (/matches\.length\s*>\s*0\s*\?\s*matches\s*:\s*FULL_QUESTION_BANK/.test(testBuilder) || /remaining\s*=\s*FULL_QUESTION_BANK/.test(testBuilder)) {
  fail('TestBuilder còn fallback lấy toàn ngân hàng khi thiếu câu đúng chuyên đề');
} else ok('TestBuilder fail-closed: không lấy câu khác bài để bù số lượng');

if (!testBuilder.includes('allowedTypeIds.has(q.type_id)') || !testBuilder.includes('FULL_LESSONS')) {
  fail('TestBuilder chưa route prompt theo lesson/type canonical');
} else ok('TestBuilder route prompt theo lesson/type canonical');

if (!dataService.includes('canReuseStoredLessonContent') || !server.includes('canReuseStoredLessonContent')) {
  fail('Thiếu guard chống dữ liệu lesson cũ ghi đè lesson mới cùng ID');
} else ok('Có guard chống lesson cũ cùng ID làm nhiễm curriculum mới');

if (!dataService.includes('migrateStoredWorkedExamples') || !server.includes('migrateStoredWorkedExamples')) {
  fail('Worked example lưu cũ chưa được migrate/filter theo type mới');
} else ok('Worked example cũ được migrate/filter theo type mới');

if (failed) process.exitCode = 1;
else console.log(`\n🎯 FULL KNTT AUDIT PASSED — 24 chương, 79 bài, ${typeIds.length} dạng, ${typeIds.length*6} blueprint.`);
