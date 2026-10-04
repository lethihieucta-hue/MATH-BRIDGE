# Student Cloud Account — Audit

- Scope: AI Math Bridge Student only.
- Built-in roster preserved: 1,210 students (K10: 442, K11: 346, K12: 422).
- Fixed roster fallback when localStorage is unavailable.
- Added cloud register/login/session-resume APIs.
- Added server-side password salt/hash + Script Properties pepper.
- Added signed 30-day session token.
- Protected progress sync and snapshot reads with student auth token.
- Server rebinds FullName/Class/Grade to ROSTER on sync.
- Cloud login restores ProgressJSON for cross-device continuation.
- Removed per-device Apps Script URL entry from Student login and sync panels.
- Added Vercel build-time config: VITE_GOOGLE_SHEETS_API_URL.
- TypeScript service files pass semantic type-check with global TypeScript compiler.
- Changed TS/TSX files pass TypeScript transpile syntax diagnostics.
- Apps Script Code.gs passes JavaScript syntax check with Node after .js copy.
- Full npm build could not be executed in this environment because npm registry access returned EAI_AGAIN; no node_modules were present in the uploaded package.


## Current endpoint prewired — 2026-09-03

- Current Apps Script URL embedded in `index.html`: `https://script.google.com/macros/s/AKfycbzHbdvBeFKrOci2Ap1Wa9nevpQb6W0HtSg6HvdNLbbGAL697vEhXa2JggJXfZS4qmWy7A/exec`
- Vercel environment variable remains an optional override.
- Students do not need to paste or store this URL on each device.


## Password reset update — 2026-09-03

- Removed birth-date requirement from first activation; Student now uses StudentID + email + password.
- Added `resetStudentPassword` cloud API and Student UI **Quên mật khẩu**.
- Reset requires active StudentID + exact registered email, then writes a new salt/hash; old password is never recoverable.
- Added 5-attempt / 15-minute reset throttling per StudentID.
- Session tokens now include the password-version timestamp; changing password invalidates old sessions.
- Roster CSV template no longer contains a date-of-birth column.
