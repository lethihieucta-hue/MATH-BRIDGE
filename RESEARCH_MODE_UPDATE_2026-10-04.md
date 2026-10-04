# AI Math Bridge Teacher — Research Mode Update

Updated for the Grade 10 research project:
**“Thiết kế và đánh giá mô hình AI Math Bridge hỗ trợ học sinh lớp 10 vượt qua rào cản ngôn ngữ khi học Toán bằng tiếng Anh.”**

## Added / changed

1. Restored Teacher navigation routes that existed in source but were not reachable:
   - Class management
   - Class analytics
   - Research center
   - Content Studio / Question Bank routes

2. Added **Research Mode & Barrier Analysis** screen:
   - Barrier categories: L (Language), C (Comprehension), M (Mathematical reasoning)
   - First Attempt Accuracy
   - No-hint Accuracy
   - High-support (Hint Level 3) rate
   - Average retry
   - Research Mode toggle

3. Added **Teacher Intervention log**:
   - vocabulary reinforcement
   - language structure
   - reading strategy
   - math concept review
   - similar practice
   - small group
   - individual support
   - other
   - target: individual / group / class

4. Added **question versioning**:
   - `question_version`
   - archived question copies in `question_versions` when edited while Research Mode is ON
   - bulk replace-types also archives prior custom questions under Research Mode

5. Extended research data schema for practice attempts:
   - `class_id`, `group`
   - `question_version`
   - `attempt_number`
   - `first_attempt_correct`
   - `final_correct`
   - `retry_count`
   - `barrier_type`
   - `hint_level`
   - `independent_mode`
   - `support_requested_by_student`
   - `support_triggered_by_system`

6. Extended hint logs:
   - `barrier_type` L/C/M
   - `hint_level` 1/2/3
   - `question_version`
   - `requested_by` STUDENT/SYSTEM

7. Added research endpoints:
   - `POST /api/teacher/research-mode`
   - `GET/POST /api/teacher/interventions`
   - `GET /api/teacher/research-snapshot`
   - `GET /api/teacher/research-export.csv`
   - `GET /api/teacher/research-export.json`
   - compatibility endpoint: `GET /api/teacher/classes/:id/analytics`

8. Rewrote Teacher Analytics to remove fabricated/demo research percentages.
   - When no research data exists, the UI explicitly says **“Chưa có dữ liệu”**.
   - MEI/XP/streak are not treated as primary research outcomes.

9. Export supports a research-ready dataset for Excel/SPSS/R.

## Important dependency on Student app

The Teacher app is now ready to receive the research fields above. The Student app must next be updated to actually send:
- barrier type L/C/M
- hint level 1/2/3
- first attempt / retry events
- independent/no-hint mode
- student-requested vs system-triggered support

Until the Student app sends these fields, Barrier Analysis correctly remains empty rather than inventing data.

## Validation performed

- Targeted TypeScript syntax checking was run on all modified files with unresolved external modules filtered out; no syntax/type-structure errors were found in the modified code.
- Full Vite build could not be run in the working environment because project dependencies were not installed and package installation timed out.
