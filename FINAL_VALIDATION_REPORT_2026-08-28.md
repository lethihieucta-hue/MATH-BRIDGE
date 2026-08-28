# AI Math Bridge - Final Validation Report

Date: 2026-08-28

## Final source-bank result

- English fallback decisions restored and verified: **1,185 / 1,185 IDs**.
- Final accepted source questions: **1,010**.
- Rejected/fail-closed source questions: **175**.
- Accepted source formats: **505 TN + 66 DS + 247 TLN + 192 TL**.
- Accepted source questions cover **71 canonical type_id** values; the static bank guarantees all remaining types.
- Runtime full bank: **3,653 questions = 1,010 source + 2,601 static + 42 legacy**.
- Online auto-gradable runtime bank after the final grading-safety correction: **2,551 questions**.

## Curriculum and routing gates - PASS

- KNTT curriculum: **24 chapters / 79 lessons / 289 math types**.
- Blueprint coverage: **1,734 blueprints = 289 types x 6 structures**.
- Worksheet routing is fail-closed by canonical lesson/type.
- Accepted teacher/source questions are routed before static fallback when available.
- Static fallback remains guaranteed for every type: **4 TN + 2 DS + 2 TLN + 1 TL**.
- Static bank: **289 types / 2,601 questions / 0 routing issues**.
- Vocabulary bank: **79 lessons, exactly 5 EN-VI terms per lesson**.

## English, media and glyph gates - PASS

Final audit over all **1,010 accepted source questions**:

- Missing English stems/options: **0**.
- Vietnamese leakage into English fields: **0**.
- Double-escaped LaTeX issues: **0**.
- Questions requiring a missing external figure/table/media asset: **0**.
- Private-use/Symbol-font glyphs in the two final source banks: **0**.
- Invalid control characters in the two final source banks: **0**.
- Local project asset references requiring missing files: **0**. The only `assets/` reference is an external README image URL.

The legacy imported source was normalized from Symbol/MathType-style glyphs to ordinary Unicode/math notation before this final audit.

## LaTeX gate - PASS

- English math expressions compiled: **2,451**.
- XeLaTeX fatal errors: **0**.
- Undefined control sequences: **0**.
- Audit PDF rendered successfully to **44 pages** and was visually sampled after rendering.
- Currency text was checked separately so USD dollar signs are not accidentally treated as LaTeX delimiters; the Vista Cable item now uses `USD 40` / `USD 0.25`.

## Answer-key/grading-safety gate - PASS

- Source questions currently marked auto-grading-safe: **199**.
- TN option/key mismatches: **0**.
- Invalid DS boolean-key structures: **0**.
- Safe TLN multi-answer structures: **0**.
- Final answer-key/stem audit corrected 11 source records, including:
  - Vista Cable: final fee **32.5 USD**, not the intermediate reduction count 30.
  - Organ geometric progression: **1.059** to the requested thousandth.
  - Vector norm: **sqrt(30) approx 5.477**, with explicit rounding for TLN grading.
  - Two parameter/count keys corrected to match their derivations.
  - Fabric optimization answer normalized to **41000 VND**.
  - E. coli two-output item marked **not auto-gradable** by a single TLN input.
  - Four second-derivative items whose stems said `f` while their solutions/options used `f''` were corrected to `f''`.

## TypeScript/source-code gates

- TS/TSX files parsed/transpiled with the globally available TypeScript compiler: **46 / 46 PASS**.
- Syntax errors: **0**.
- Three internal TypeScript issues discovered during final review were fixed before packaging: the MEI JSX math string, vocabulary service result handling/signature, and Vite ESM path handling.
- A full `tsc --noEmit` cannot be certified in this sandbox because project dependencies are not installed. The raw command reports **105 dependency/type-resolution errors**, and **0 remaining diagnostics after filtering dependency-resolution cascades**.

## Full Vite build - ENVIRONMENT-BLOCKED (not reported as PASS)

The sandbox cannot resolve/reach `registry.npmjs.org`:

- DNS lookup for `registry.npmjs.org`: failed in the sandbox.
- `npm ping`: timed out.
- `npm install --ignore-scripts --no-audit --no-fund`: timed out before dependencies could be installed.
- Therefore `npm run build` could not be executed with the real React/Vite/esbuild dependency tree in this environment.

This is an environment limitation, not a claimed build PASS. After extracting the ZIP in an environment with npm access, run:

```bash
npm install
npm run lint
npm run build
npm run audit:curriculum
npm run audit:worksheet
npm run audit:static-bank
```

## Integrity hashes of key final source files

- `src/lib/realSourceQuestionBank.ts`: `53bdfb7c3b39fec3ec46f0e476d34eee8573c44b3efde41db63cb06e0e27af64`
- `src/lib/sourceSupplementQuestionBank.ts`: `5e2d6e5240e81b78be968ec48fe41f1d95f491e29bdfa72fe0663d70ed57a978`
- `src/lib/questionBankData.ts`: `c10f1e849f4b564354efab0df0b78e0050d1f92211354a013725218ed15bb0fc`
- `vite.config.ts`: `10052235463e219da0b377527235bda161da4288f150840bb78d6babcf31c686`

## Packaging policy

The final package excludes temporary translation maps, restore scripts, LaTeX audit intermediates, npm timeout logs, and `.bak` source files. Only the cleaned project tree and this final validation report are included.
