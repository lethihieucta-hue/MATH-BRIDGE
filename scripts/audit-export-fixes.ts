import fs from 'node:fs';
import { ONLINE_SAFE_QUESTION_BANK } from '../src/lib/questionBankData';
import { getEnglishQualityIssues, isQuestionEnglishReady } from '../src/lib/englishQuality';

const fail = (message: string): never => { throw new Error(message); };

// Reproduce the topic and 50% bilingual mode shown in the reported screenshot.
const optimizationPool = ONLINE_SAFE_QUESTION_BANK
  .filter((question) => question.topic_id === 'top-12-1-2')
  .filter((question) => isQuestionEnglishReady(question));
const counts = optimizationPool.reduce<Record<string, number>>((result, question) => {
  const kind = question.format_type || question.question_type;
  result[kind] = (result[kind] || 0) + 1;
  return result;
}, {});
if ((counts.TN || 0) < 6 || (counts.DS || 0) < 2 || (counts.TLN || 0) < 2) {
  fail(`The verified English optimization pool is too small: ${JSON.stringify(counts)}`);
}
optimizationPool.forEach((question) => {
  const issues = getEnglishQualityIssues(question);
  if (issues.length) fail(`${question.id}: ${issues.join(', ')}`);
});

const officeExport = fs.readFileSync(new URL('../src/lib/officeExport.ts', import.meta.url), 'utf8');
const worksheet = fs.readFileSync(new URL('../src/components/student/BilingualLessonModule.tsx', import.meta.url), 'utf8');
if (!officeExport.includes('<m:oMath>') || !worksheet.includes('<m:oMath>')) {
  fail('Native Office Equation (OMML) output is missing.');
}
if (!officeExport.includes('@page{size:A4 portrait;margin:10mm 0}')) {
  fail('PDF print frame does not reserve the required 10 mm top/bottom margin.');
}
const bottomMargins = [...`${officeExport}\n${worksheet}`.matchAll(/w:bottom="(\d+)"/g)].map((match) => Number(match[1]));
if (bottomMargins.length < 2 || bottomMargins.some((value) => value < 567)) {
  fail(`Word bottom margin is below 10 mm: ${bottomMargins.join(', ')}`);
}

console.log(JSON.stringify({
  status: 'PASS',
  checked: {
    cleanEnglishOptimizationPool: optimizationPool.length,
    formats: counts,
    nativeOfficeEquation: true,
    pdfBottomMarginMm: 10,
    wordBottomMarginsTwips: bottomMargins,
  },
}, null, 2));
