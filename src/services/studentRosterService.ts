import type { HighSchoolGrade } from "../types";
import { BUILT_IN_ROSTER_K10_K11_K12 } from "../data/builtInRoster";
const normalizeStudentId = (value: string) => value.trim().toUpperCase().replace(/\s+/g, "-");

const ROSTER_KEY = "ai_math_bridge_v360_student_roster_k10_k11_k12_1210";

export interface StudentRosterEntry {
  studentId: string;
  fullName: string;
  className: string;
  grade: HighSchoolGrade;
  birthDate?: string; // legacy/import compatibility only; not used for account authentication
}

function safeStorage(): Storage | null {
  try {
    if (typeof window === "undefined" || !window.localStorage) return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

function normalizeHeader(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "");
}

function normalizeBirthDate(value: string): string | undefined {
  const raw = value.trim();
  if (!raw) return undefined;
  const iso = raw.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);
  if (iso) return `${iso[1]}-${iso[2].padStart(2, "0")}-${iso[3].padStart(2, "0")}`;
  const dmy = raw.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
  if (dmy) return `${dmy[3]}-${dmy[2].padStart(2, "0")}-${dmy[1].padStart(2, "0")}`;
  return undefined;
}

function inferGrade(className: string, explicit?: string): HighSchoolGrade | null {
  const n = Number((explicit || "").match(/\d+/)?.[0]);
  if (n === 10 || n === 11 || n === 12) return n;
  const fromClass = Number(className.trim().match(/^(10|11|12)/)?.[1]);
  return fromClass === 10 || fromClass === 11 || fromClass === 12 ? fromClass : null;
}

function parseCsvLine(line: string, delimiter: string): string[] {
  const cells: string[] = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (quoted && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (ch === delimiter && !quoted) {
      cells.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  cells.push(current.trim());
  return cells;
}

function detectDelimiter(header: string) {
  const candidates = [",", ";", "\t"];
  return candidates.sort((a, b) => header.split(b).length - header.split(a).length)[0];
}

export function parseRosterCsv(csvText: string): StudentRosterEntry[] {
  const text = csvText.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const lines = text.split("\n").filter((line) => line.trim());
  if (lines.length < 2) throw new Error("File CSV cần có hàng tiêu đề và ít nhất một học sinh.");
  const delimiter = detectDelimiter(lines[0]);
  const headers = parseCsvLine(lines[0], delimiter).map(normalizeHeader);
  const aliases = {
    studentId: ["mahs", "mahocsinh", "studentid", "studentcode", "id"],
    fullName: ["hoten", "hovaten", "tenhocsinh", "fullname", "name"],
    className: ["lop", "lophoc", "classname", "class"],
    grade: ["khoi", "khoihoc", "grade"],
    birthDate: ["ngaysinh", "ngaythangnamsinh", "dateofbirth", "dob", "birthdate"],
  } as const;
  const indexOf = (keys: readonly string[]) => headers.findIndex((h) => keys.includes(h));
  const idxId = indexOf(aliases.studentId);
  const idxName = indexOf(aliases.fullName);
  const idxClass = indexOf(aliases.className);
  const idxGrade = indexOf(aliases.grade);
  const idxDob = indexOf(aliases.birthDate);
  if (idxId < 0 || idxName < 0 || idxClass < 0) {
    throw new Error("CSV cần có tối thiểu các cột: Mã HS, Họ tên, Lớp.");
  }

  const result: StudentRosterEntry[] = [];
  const seen = new Set<string>();
  for (let rowIndex = 1; rowIndex < lines.length; rowIndex += 1) {
    const cells = parseCsvLine(lines[rowIndex], delimiter);
    const studentId = normalizeStudentId(cells[idxId] || "");
    const fullName = (cells[idxName] || "").trim();
    const className = (cells[idxClass] || "").trim().toUpperCase();
    if (!studentId && !fullName && !className) continue;
    if (!studentId || !fullName || !className) throw new Error(`Dòng ${rowIndex + 1}: thiếu Mã HS, Họ tên hoặc Lớp.`);
    if (seen.has(studentId)) throw new Error(`Mã HS bị trùng trong CSV: ${studentId}.`);
    const grade = inferGrade(className, idxGrade >= 0 ? cells[idxGrade] : undefined);
    if (!grade) throw new Error(`Dòng ${rowIndex + 1}: không xác định được khối 10/11/12 từ Lớp/Khối.`);
    const birthDate = idxDob >= 0 ? normalizeBirthDate(cells[idxDob] || "") : undefined;
    result.push({ studentId, fullName, className, grade, birthDate });
    seen.add(studentId);
  }
  return result;
}

export function saveRoster(entries: StudentRosterEntry[]): void {
  const storage = safeStorage();
  if (!storage) throw new Error("Trình duyệt đang chặn bộ nhớ cục bộ.");
  const normalized = [...entries].sort((a, b) => a.className.localeCompare(b.className, "vi") || a.fullName.localeCompare(b.fullName, "vi"));
  storage.setItem(ROSTER_KEY, JSON.stringify(normalized));
}

export function loadRoster(): StudentRosterEntry[] {
  const storage = safeStorage();
  // Roster built-in vẫn phải hoạt động khi trình duyệt chặn localStorage.
  if (!storage) return BUILT_IN_ROSTER_K10_K11_K12;
  try {
    const raw = storage.getItem(ROSTER_KEY);
    if (!raw) return BUILT_IN_ROSTER_K10_K11_K12;
    const rows = JSON.parse(raw) as StudentRosterEntry[];
    return Array.isArray(rows) ? rows : [];
  } catch {
    return BUILT_IN_ROSTER_K10_K11_K12;
  }
}

export function getRosterEntry(studentId: string): StudentRosterEntry | null {
  const id = normalizeStudentId(studentId);
  if (!id) return null;
  return loadRoster().find((row) => row.studentId === id) ?? null;
}

export function verifyRosterIdentity(studentId: string): StudentRosterEntry {
  const row = getRosterEntry(studentId);
  if (!row) throw new Error("Mã học sinh chưa có trong danh sách nhà trường.");
  return row;
}

export function getRosterStats() {
  const rows = loadRoster();
  return {
    total: rows.length,
    grade10: rows.filter((r) => r.grade === 10).length,
    grade11: rows.filter((r) => r.grade === 11).length,
    grade12: rows.filter((r) => r.grade === 12).length,
    withBirthDate: rows.filter((r) => !!r.birthDate).length,
  };
}

export function clearRoster() {
  safeStorage()?.removeItem(ROSTER_KEY);
}

export function makeRosterTemplateCsv() {
  return [
    "Ma HS,Ho ten,Lop,Khoi",
    "10A6-001,Bui Hoai An,10A6,10",
    "11A1-001,Le Nguyen Tuan Anh,11A1,11",
    "12A1-001,Nguyen Huynh Kha Ai,12A1,12",
  ].join("\n");
}
