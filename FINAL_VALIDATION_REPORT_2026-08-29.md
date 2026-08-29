# FINAL VALIDATION REPORT — ORIGINAL SOURCE ASSETS — 2026-08-29

## 1. Scope completed

This pass follows the original-source-first strategy instead of drawing new replacement diagrams.

Primary source used in this pass:
- Phan Nhật Linh teacher material, Grade 12, Chapter 1 — Applications of derivatives to function analysis and graphing.
- PDF teacher versions were used to preserve full question/formula/answer text.
- DOCX teacher versions were used to extract the exact embedded PNG table/graph/real-world diagram.

## 2. Original media integrated

- 17 new source questions with 17 exact original PNG assets.
- Every asset is stored under `public/question-assets/source/`.
- Every image asset stores its SHA-256 in the question metadata.
- Asset hash verification: PASS (0 missing files, 0 hash mismatches).

Active original-media distribution:
- `type-kntt-12-01-03`: 8 questions — derivative sign charts / graphs / extrema reading.
- `type-kntt-12-04-01`: 3 questions — cubic graph/variation recognition.
- `type-kntt-12-04-02`: 2 questions — linear-over-linear rational graphs/variation tables.
- `type-kntt-12-04-03`: 1 question — quadratic-over-linear rational graph recognition.
- `type-kntt-12-05-01`: 1 question — geometric optimization with original figure.
- `type-kntt-12-05-03`: 1 question — motion/time optimization with original route diagram.
- `type-kntt-12-05-04`: 1 question — real-world constrained modeling with original garage diagram.

## 3. Question-bank behavior changed safely

- Added `QuestionImageAsset` as a discriminated union alongside the existing conceptual SVG diagram asset.
- `QuestionAssetRenderer` now renders exact source images and still supports the old SVG diagrams.
- Original-media questions are loaded before supplement source, real source, static fallback, and legacy bank.
- The structural quality gate now allows a visual-dependent imported question only when an original image asset is actually attached; image-less visual imports remain fail-closed.

This means source questions with original media naturally replace corresponding static choices when the same `type_id` is requested, while the 4–2–2–1 static bank remains intact as fallback.

## 4. Duplicate audit and repair

Two pre-existing duplicate source stems were found and removed from the lower-value ungradable variants:
- one Grade 11 arithmetic-progression duplicate (kept the MCQ source version),
- one Grade 12 spam-filter probability duplicate (kept the MCQ source version).

Final active-bank duplicate audit:
- Active questions: **3,668**
- Duplicate IDs: **0**
- Exact duplicate stems inside the same `type_id`: **0**

## 5. Formula / red-render audit

Full active question bank was re-exported after all changes and audited again.

- Math-delimited occurrences scanned: **30,231**
- Unique math expressions: **4,786**
- Unbalanced `$` delimiters: **0**
- XeLaTeX compile result: **4,786 / 4,786 PASS**

This is a full-bank rerun after the asset integration and duplicate cleanup, not only a check of the 17 new questions.

## 6. Curriculum/static-bank audits

- KNTT curriculum audit: **PASS**
- 24 chapters / 79 lessons / 289 math types: **PASS**
- 1,734 type × structure blueprints: **PASS**
- Static bank: **2,601 = 289 × 9**
- Every type keeps exactly **4 TN + 2 Đ/S + 2 TLN + 1 TL**: **PASS**
- Worksheet audit: **PASS**
- Teacher/source priority over static fallback: **PASS**

## 7. TypeScript validation

Core data/question-bank modules compile with `tsc`: **PASS**.

The container does not have the project npm dependencies installed, so a full application `tsc -p tsconfig.json` reports only missing external packages/types (React, Vite, Express, etc.). After filtering dependency-resolution errors, non-dependency TypeScript errors: **0**.

## 8. Files added/changed

Added:
- `src/lib/originalSourceVisualQuestionBank.ts`
- `public/question-assets/source/pnl-12-ch1-b1d1/*`
- `public/question-assets/source/pnl-12-ch1-de04-b4/*`
- `public/question-assets/source/pnl-12-ch1-b5d2/*`
- `ORIGINAL_SOURCE_ASSET_MANIFEST_2026-08-29.json`
- `ORIGINAL_SOURCE_ASSET_AUDIT_2026-08-29.csv`
- this validation report

Updated:
- `src/types.ts`
- `src/components/math/QuestionAssetRenderer.tsx`
- `src/lib/questionBankData.ts`
- `src/lib/staticQuestionBank.ts` (typing only, no content distribution change)
- `src/lib/realSourceQuestionBank.ts` (duplicate cleanup)
- `src/lib/sourceSupplementQuestionBank.ts` (duplicate cleanup)

## 9. Recommended next pass

Continue the same extraction method on the remaining Phan Nhật Linh sources, especially Grade 11 spatial-geometry chapters where original diagrams add the most value. Do not draw replacements unless the original source truly has no usable media.
