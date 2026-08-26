# Static worksheet bank upgrade

## Why this version no longer waits for Gemini

The worksheet now has a deterministic canonical bank for every KNTT exercise `type_id`.
Selecting a math type never triggers Gemini automatically.

- 289 math types.
- 4 multiple-choice (TN) questions per type.
- 2 true/false (Đ/S) questions per type.
- 2 short-answer (TLN) questions per type.
- 1 essay (TL) question per type.
- Total canonical baseline: **2,601 questions**.
- 79/79 lessons contain exactly **5 English math terms with Vietnamese meanings**.

The worksheet always prefers this static baseline before any teacher/AI extras. Gemini is optional and is only used when a teacher deliberately requests more questions than the 4-2-2-1 baseline. AI calls have a timeout, so the UI cannot remain in the automatic “generating” state indefinitely.

Run after installing dependencies:

```bash
npm run audit:static-bank
```
