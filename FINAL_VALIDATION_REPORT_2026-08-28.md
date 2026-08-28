# AI Math Bridge — Final Validation Report

Date: 2026-08-28  
Status: **FINAL DATA/CODE VALIDATION PASSED; FULL VITE BUILD ENVIRONMENT-BLOCKED**

This report supersedes earlier validation/checkpoint reports in the project.

## 1. Final question-bank composition

- Active question bank: **3,653** questions
- Clean teacher/source questions: **1,010**
- Static curriculum fallback: **2,601**
- Legacy/migrated questions: **42**
- Current curriculum math types: **289/289**
- KNTT curriculum: **24 chapters / 79 lessons / 289 math types**
- Static guarantee per type: **4 TN + 2 Đ/S + 2 TLN + 1 TL**

## 2. Vietnamese/English math synchronization

The Vietnamese source stems were repaired by directly replacing broken OCR math with the mathematically reliable English expression when the English source uniquely supported the repair. Broken math was not merely appended as a note.

Priority repairs include:
- Grade 11 sequences and arithmetic progressions
- Limits and powers
- Grade 11 trigonometry
- Vectors and Oxyz notation
- Sphere equations and exponents
- Integral geometry applications
- Grouped-data questions/tables
- Grade 11/12 spatial geometry routing

`solution_vi` was normalized conservatively: glyphs, math delimiters, sequence indices, standard operators and renderer-breaking OCR were repaired when safe; missing source mathematics was not invented when it could not be uniquely reconstructed.

Runtime text audit across all active display fields:
- Odd/unbalanced `$` delimiters: **0**
- Raw LaTeX commands outside math regions: **0**
- Control characters: **0**
- Private-use/Symbol-font glyphs: **0**

## 3. Formula / renderer validation

All unique math expressions extracted from the final active bank were compiled with XeLaTeX after the last repair pass.

- Unique expressions compiled: **4,702**
- XeLaTeX result: **4,702 / 4,702 PASS**
- XeLaTeX return code: **0**

This includes stems, English/Vietnamese options, solutions, answers, grouped-data `array` tables and formula-support expressions.

## 4. Routing, duplication and grading validation

Final runtime audit:
- Duplicate question IDs: **0**
- Duplicate 4-TN stem sets within a type: **0**
- Duplicate 4-TN stem sets across types in the same lesson: **0**
- Online-safe MCQs with inconsistent answer keys: **0**
- Types missing static 4-2-2-1 coverage: **0**
- Source-first / static-fallback curriculum routing: **PASS**

Regression checks requested during visual review:
- Oxyz questions leaking into Grade 11 spatial geometry: **0**
- 6–8 right-triangle hypotenuse fallback leaking into 3D geometry: **0**
- 2-coordinate vector fallback in Grade 12 vector-operations lesson: **0**
- Target grouped-data TN questions missing table representation: **0**

## 5. Visual assets

Synthetic placeholder/AI-style diagrams have been **disabled** in this revision because the user requested only source-authentic figures.

- Synthetic SVG placeholder diagrams shown in earlier builds: **removed**
- Source-authentic figures automatically available in the current imported bank: **not embedded as image payloads yet**

Grouped-data tables are rendered as mathematical/table structures in the question stem. Any future figure migration should come from the original source material, not generated placeholders.

## 6. Curriculum and worksheet audits

`node scripts/audit-curriculum.mjs`: **PASS**
- 24 chapters
- 79 lessons
- 289 math types
- 1,734 blueprint structures
- Legacy migration checks pass

`node scripts/audit-worksheet.mjs`: **PASS**
- 79/79 lessons contain theory/formula support
- 4 TN + 2 Đ/S + 2 TLN + 1 TL default is preserved
- Exact type routing / fail-closed behavior passes

Static/vocabulary runtime audit:
- Static bank: **289 types, 2,601 / 2,601 questions, 0 issues**
- Vocabulary: **79 lessons, 0 issues**

## 7. TypeScript validation

Core TypeScript library compile (`src/types.ts` + `src/lib/*.ts`): **PASS, RC=0**.

All TypeScript/TSX source/config/script files were syntax-transpiled with the global TypeScript compiler:
- Files checked: **47**
- Syntax/transpile errors: **0**

A full `tsc -p tsconfig.json --noEmit` was also attempted. The only diagnostics were dependency/environment diagnostics because `node_modules` could not be installed:
- TS2307 (missing installed modules/types): 70
- TS2875 (missing `react/jsx-runtime`): 31
- TS2580 (missing Node type definitions / `process`): 6
- Other TypeScript diagnostic codes: **0**

## 8. Full Vite build attempt

`npm install --ignore-scripts --no-audit --no-fund` was attempted but the sandbox could not resolve the npm registry. The npm log records `EAI_AGAIN` while fetching from `https://registry.npmjs.org/`.

`npm run build` was then attempted and returned:

`sh: 1: vite: not found`

Therefore the full Vite/esbuild production build is marked **ENVIRONMENT-BLOCKED**, not PASS. This is caused by unavailable npm dependencies in the sandbox, not by a detected project-source error. On a machine with npm registry access, run:

```bash
npm install
npm run lint
npm run build
```

## 9. Final packaging policy

Temporary `.bak` files, temporary LaTeX audit artifacts, `node_modules` and `dist` are excluded from the final package. The final ZIP is CRC/unzip-tested after creation, and its SHA-256 is reported with the delivered artifact.
