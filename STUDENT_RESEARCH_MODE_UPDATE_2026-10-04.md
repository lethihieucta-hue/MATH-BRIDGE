# AI Math Bridge Student — Research Mode Update

Updated for the Grade 10 research project:
**“Thiết kế và đánh giá mô hình AI Math Bridge hỗ trợ học sinh lớp 10 vượt qua rào cản ngôn ngữ khi học Toán bằng tiếng Anh.”**

## Main changes

1. Added a unified research attempt schema to `UserProgress`:
   - `questionId`, `questionVersion`
   - `attemptNumber`
   - `firstAttemptCorrect`, `finalCorrect`
   - `barrierType`: `L` Language / `C` Comprehension / `M` Mathematical reasoning
   - `hintLevel`: 0–3
   - `hintCount`, `retryCount`
   - `responseTimeSeconds`
   - `independentMode`
   - student/system support flags
   - translation use and optional self-diagnosis
   - protocol version `AMB-RP-1.0`

2. Level 2 Reading Studio upgraded for research fidelity:
   - first attempt is recorded separately
   - a wrong first attempt no longer reveals the final answer immediately
   - students retry after support
   - controlled L/C/M support with Hint Level 1 → 2 → 3
   - optional self-diagnosis after an incorrect first attempt
   - Independent Mode disables hints/translation support
   - full Vietnamese support is not available before the first attempt

3. Level 3 upgraded:
   - research logging for short-answer and essay tasks
   - Independent Mode
   - hint use and barrier type are stored
   - response time and translation use are recorded

4. AI Tutor upgraded:
   - Tutor intent is mapped to research barrier categories
   - LANGUAGE → L
   - SOCRATIC/CHECK_STEP → C
   - CONCEPT/STRATEGY/FIRST_STEP → M
   - Hint stage is normalized to Level 0–3 and stored as research evidence

5. Student Dashboard upgraded:
   - First Attempt Accuracy
   - Hint Level 3 rate
   - Independent Accuracy
   - Explicit note that XP/streak are engagement metrics, not research outcomes

6. Google Sheets compatibility:
   - research records are stored inside `ProgressJSON` through the existing progress synchronization pathway
   - no personally identifying fields are added to the research record beyond the existing student account linkage

## Important research safeguards

- “First attempt” must not be overwritten by later retries.
- Hint reduction alone is not interpreted as improvement; it must be read together with accuracy.
- Independent Mode is intended for transfer practice and should not expose translation or hints.
- Math Speaking remains an extension feature and is not a primary outcome in the current study.
- Gamification remains an engagement layer only.

## Build check

Static TypeScript checking of the modified source produced no project-specific TypeScript errors after filtering missing-module errors. A full Vite build could not be completed in this environment because dependencies could not be installed within the execution window.
