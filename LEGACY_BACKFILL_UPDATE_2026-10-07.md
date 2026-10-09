# AI Math Bridge Teacher – Legacy Research Backfill Update

Date: 2026-10-07

## What changed
- Teacher Research Hub now supports two evidence streams: `research_native` and `legacy_inferred`.
- Legacy event-level data are reconstructed from `ACTIVITY_LOG` rather than discarded.
- Historical L/C/M is inferred only from available evidence: translation use, hint use, correctness, Math–English score gap, difficulty, and matching legacy error labels.
- Every reconstructed row is tagged with `data_source`, `data_quality`, `barrier_confidence`, and `barrier_evidence`.
- Missing legacy fields such as true first-attempt status, retry count, response time, and Hint Level 1–3 remain null instead of being fabricated.
- Native and historical records are de-duplicated by student + timestamp so new research attempts are not counted twice.

## Metric rules
- L/C/M barrier counts: native + legacy inferred.
- First Attempt Accuracy: native research only.
- High Support Rate (Hint Level 3): native research only.
- Independent / No-support Accuracy: native Independent Mode plus legacy rows with no hint and no translation, clearly marked as inferred.

## Deployment
1. Replace the Student Apps Script code with `AI_Math_Bridge_Student_GoogleAppsScript_RESEARCH_TEACHER_v3.8.2_LEGACY_BACKFILL.gs`.
2. Deploy a new Web App version using the same deployment settings.
3. Update the Teacher app with this package.
4. In Teacher > Research Mode, reconnect/refresh the Student Google Sheets source.
