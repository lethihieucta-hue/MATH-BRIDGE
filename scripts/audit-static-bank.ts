import { FULL_LESSONS } from '../src/lib/curriculumData';
import { auditStaticQuestionBank } from '../src/lib/staticQuestionBank';
import { auditLessonVocabulary } from '../src/lib/lessonVocabularyData';
import { getQuestionsForMathTypeStructured } from '../src/lib/questionBankData';

const staticAudit = auditStaticQuestionBank();
const vocabAudit = auditLessonVocabulary(FULL_LESSONS.map((lesson) => lesson.title_vi));
const routingIssues: string[] = [];

for (const lesson of FULL_LESSONS) {
  for (const mathType of lesson.types || []) {
    const routed = getQuestionsForMathTypeStructured(mathType.id, lesson.topic_id);
    const baseline = [
      ...routed.tn.slice(0, 4),
      ...routed.ds.slice(0, 2),
      ...routed.tln.slice(0, 2),
      ...routed.tl.slice(0, 1),
    ];
    if (routed.tn.length < 4 || routed.ds.length < 2 || routed.tln.length < 2 || routed.tl.length < 1) {
      routingIssues.push(`${mathType.id}: routed ${routed.tn.length}-${routed.ds.length}-${routed.tln.length}-${routed.tl.length}`);
    }
    if (baseline.length !== 9 || baseline.some((q) => !q.id.startsWith('q-static-'))) {
      routingIssues.push(`${mathType.id}: first 4-2-2-1 is not fully static`);
    }
  }
}

console.log(`Static bank: ${staticAudit.typeCount} types, ${staticAudit.questionCount}/${staticAudit.expectedQuestionCount} questions`);
console.log(`Vocabulary: ${vocabAudit.lessonCount} lessons, exactly 5 EN—VI terms per lesson`);
console.log(`Routing issues: ${routingIssues.length}`);

const issues = [...staticAudit.issues, ...vocabAudit.issues, ...routingIssues];
if (issues.length) {
  console.error(issues.join('\n'));
  process.exit(1);
}
console.log('✅ STATIC WORKSHEET BANK AUDIT PASSED: 289 × (4 TN + 2 DS + 2 TLN + 1 TL) = 2601 questions.');
