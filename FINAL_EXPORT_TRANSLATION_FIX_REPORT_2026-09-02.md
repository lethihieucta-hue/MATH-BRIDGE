# AI Math Bridge Teacher — Export & English Quality Fix

## Fixed

- Test Builder now uses only questions whose English stem and every English option pass the Vietnamese-prose detector whenever the requested English ratio is 40% or higher.
- Worksheet bilingual/full-English modes apply the same fail-closed English quality gate.
- English export no longer silently substitutes Vietnamese when an English solution or lesson section is missing or contaminated.
- PDF export is isolated to A4 and reserves 10 mm at both the top and bottom of every printed page.
- Both Word exporters emit native Office Math (OMML) equations. Word can edit these equations directly and MathType can convert/edit them.
- Word A4 documents retain 850-twip top and bottom margins (approximately 15 mm, safely above the requested 10 mm).

## Verification

- `npm run lint`: PASS
- `npm run build`: PASS
- `npm run audit:export`: PASS
- `npm run audit:worksheet`: PASS
- `npm run audit:curriculum`: PASS
- Reported Grade 12 extrema/optimization pool: 14 fully English-ready auto-gradable questions (8 TN, 3 DS, 3 TLN), enough for the reported 10-question test structure without using mixed Vietnamese/English records.

## Safety behavior

If a requested exact type does not yet have enough fully translated records, the app reports a shortage (and the worksheet may use the existing Gemini generation action when configured). It does not insert a mixed-language question into an English PDF or Word file merely to reach the requested count.
