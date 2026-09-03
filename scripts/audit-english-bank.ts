import { FULL_QUESTION_BANK, ONLINE_SAFE_QUESTION_BANK } from '../src/lib/questionBankData';
import { containsVietnameseProse, isQuestionEnglishReady } from '../src/lib/englishQuality';
import { ALL_CURRENT_TYPE_IDS } from '../src/lib/curriculumData';
import { Question } from '../src/types';

const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;
const BAD_DOUBLE_OPERATOR = /(?:x|y|z|t|m)--\d|\+\-|\-\+/;
const BAD_COEFFICIENT = /(?:^|[^\d])[-+]1x\b/;
const BAD_PUNCTUATION = /\?\.|!\.|\.{2,}/;
const REPEATED_WORD = /\b(are|is|the|and|or|to|of|with)\s+\1\b/i;
const SWALLOWED_LATEX = /\b(?:A|B|C|P)(?:cap|cup|mid)(?:A|B|C)\b|\b\d+(?:le|ge|neq|infty|sqrt|sin|cos|tan|dfrac|frac|vec|prime)\b/i;
const AWKWARD_PHRASES = [
  /\bA possible result is\b/i,
  /\bUsing the data in the following problem\b/i,
  /\bFind the final answer:\b/i,
  /\bThe result is The\b/i,
  /\bApply the relevant definition or formula\b/i,
  /\bConclude explicitly according to\b/i,
  /\bsame-direction\b/i,
];

const englishFields = (q: Question): Array<[string, string]> => [
  ['question_en', q.question_en || ''],
  ['solution_en', q.solution_en || ''],
  ...((q.options || []).map((option, index) => [`options[${index}].content_en`, option.content_en || ''] as [string, string])),
];

const getDefaultCoverageShortages = (bank: Question[]) => {
  const wanted = { TN: 4, DS: 2, TLN: 2, TL: 1 } as const;
  const shortages: Array<{ type_id: string; kind: keyof typeof wanted; have: number; need: number }> = [];
  for (const typeId of ALL_CURRENT_TYPE_IDS) {
    for (const kind of Object.keys(wanted) as Array<keyof typeof wanted>) {
      const have = bank.filter((q) => q.type_id === typeId && q.format_type === kind && isQuestionEnglishReady(q, { includeSolution: true })).length;
      if (have < wanted[kind]) shortages.push({ type_id: typeId, kind, have, need: wanted[kind] });
    }
  }
  return shortages;
};

const auditReadyBank = (bank: Question[]) => {
  const ready = bank.filter((q) => isQuestionEnglishReady(q, { includeSolution: true }));
  const issues: Array<{ id?: string; field: string; reason: string; value: string }> = [];
  let mathSlashCount = 0;
  const mathSlashSamples: Array<{ id?: string; field: string; math: string }> = [];
  let oddDollarCount = 0;

  ready.forEach((q) => {
    englishFields(q).forEach(([field, value]) => {
      if (containsVietnameseProse(value)) issues.push({ id: q.id, field, reason: 'Vietnamese leakage', value });
      if (CONTROL_CHARS.test(value)) issues.push({ id: q.id, field, reason: 'control character', value });
      if (BAD_DOUBLE_OPERATOR.test(value)) issues.push({ id: q.id, field, reason: 'double sign/operator', value });
      if (BAD_COEFFICIENT.test(value)) issues.push({ id: q.id, field, reason: 'coefficient ±1x', value });
      if (BAD_PUNCTUATION.test(value)) issues.push({ id: q.id, field, reason: 'bad punctuation', value });
      if (REPEATED_WORD.test(value)) issues.push({ id: q.id, field, reason: 'repeated function word', value });
      if (SWALLOWED_LATEX.test(value)) issues.push({ id: q.id, field, reason: 'possible swallowed LaTeX command', value });
      for (const rx of AWKWARD_PHRASES) if (rx.test(value)) issues.push({ id: q.id, field, reason: `awkward phrase ${rx}`, value });
      if ((value.match(/\$/g) || []).length % 2 !== 0) oddDollarCount += 1;
      for (const match of value.matchAll(/\$([^$]+)\$/g)) {
        if (match[1].includes('/')) {
          mathSlashCount += 1;
          if (mathSlashSamples.length < 20) mathSlashSamples.push({ id: q.id, field, math: match[1] });
        }
      }
    });
  });

  return { ready, issues, mathSlashCount, mathSlashSamples, oddDollarCount };
};

const fullAudit = auditReadyBank(FULL_QUESTION_BANK);
const onlineAudit = auditReadyBank(ONLINE_SAFE_QUESTION_BANK);
const ids = FULL_QUESTION_BANK.map((q) => q?.id).filter(Boolean) as string[];
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
const fullExcluded = FULL_QUESTION_BANK.filter((q) => !isQuestionEnglishReady(q, { includeSolution: true }));
const excludedMissingSolution = fullExcluded.filter((q) => !(q.solution_en || '').trim()).length;
const nonDsColonStems = fullAudit.ready.filter((q) => q.format_type !== 'DS' && /:\s*$/.test((q.question_en || '').trim()));
const shortages = getDefaultCoverageShortages(FULL_QUESTION_BANK);

const result = {
  fullQuestions: FULL_QUESTION_BANK.length,
  onlineSafeQuestions: ONLINE_SAFE_QUESTION_BANK.length,
  typeCount: new Set(FULL_QUESTION_BANK.map((q) => q.type_id)).size,
  englishReadyWithSolution: fullAudit.ready.length,
  excludedFromEnglishMode: fullExcluded.length,
  excludedMissingEnglishSolution: excludedMissingSolution,
  englishReadyIssues: fullAudit.issues.length,
  onlineEnglishReadyIssues: onlineAudit.issues.length,
  duplicateIdCount: duplicateIds.length,
  holeCount: FULL_QUESTION_BANK.filter((q) => !q).length,
  defaultCoverageShortageCount: shortages.length,
  nonDsColonStemCount: nonDsColonStems.length,
  oddDollarCount: fullAudit.oddDollarCount,
  mathSlashCount: fullAudit.mathSlashCount,
  mathSlashSamples: fullAudit.mathSlashSamples,
};

console.log(JSON.stringify(result, null, 2));
if (fullAudit.issues.length) console.log(JSON.stringify({ englishReadyIssueSamples: fullAudit.issues.slice(0, 50) }, null, 2));
if (shortages.length) console.log(JSON.stringify({ shortageSamples: shortages.slice(0, 50) }, null, 2));
if (nonDsColonStems.length) console.log(JSON.stringify({ nonDsColonStems: nonDsColonStems.slice(0, 30).map((q) => ({ id: q.id, text: q.question_en })) }, null, 2));
