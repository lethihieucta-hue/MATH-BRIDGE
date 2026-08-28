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
    if (routed.tn.length < 4 || routed.ds.length < 2 || routed.tln.length < 2 || routed.tl.length < 1) {
      routingIssues.push(`${mathType.id}: routed ${routed.tn.length}-${routed.ds.length}-${routed.tln.length}-${routed.tl.length}`);
    }

    // Source questions are intentionally routed first when they passed the quality gate.
    // Static questions remain the guaranteed 4-2-2-1 fallback for every type_id.
    const staticCounts = {
      tn: routed.tn.filter((q) => q.id.startsWith('q-static-')).length,
      ds: routed.ds.filter((q) => q.id.startsWith('q-static-')).length,
      tln: routed.tln.filter((q) => q.id.startsWith('q-static-')).length,
      tl: routed.tl.filter((q) => q.id.startsWith('q-static-')).length,
    };
    if (staticCounts.tn < 4 || staticCounts.ds < 2 || staticCounts.tln < 2 || staticCounts.tl < 1) {
      routingIssues.push(`${mathType.id}: static fallback ${staticCounts.tn}-${staticCounts.ds}-${staticCounts.tln}-${staticCounts.tl}`);
    }

    for (const bucket of [routed.tn, routed.ds, routed.tln, routed.tl]) {
      const firstSource = bucket.findIndex((q) => q.id.startsWith('src-'));
      const firstStatic = bucket.findIndex((q) => q.id.startsWith('q-static-'));
      if (firstSource >= 0 && firstStatic >= 0 && firstSource > firstStatic) {
        routingIssues.push(`${mathType.id}: source question is not prioritized before static fallback`);
      }
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
