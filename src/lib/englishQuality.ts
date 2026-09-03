import { Question } from '../types';

// Detect Vietnamese prose only outside LaTeX spans. Mathematical commands such as
// \mathrm or variable names must never be mistaken for untranslated text.
const VIETNAMESE_MARKS = /[ăâđêôơưĂÂĐÊÔƠƯàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểễệìíỉĩịòóỏõọồốổỗộờớởỡợùúủũụừứửữựỳýỷỹỵ]/i;
const VIETNAMESE_WORDS = /\b(?:cho|xét|hãy|tính|tìm|giải|một|các|hàm|số|phương|trình|bất|diện|tích|lợi|nhuận|lớn|nhỏ|nhất|đúng|sai|mặt|phẳng|đường|thẳng|hình|tam|giác|khoảng|cách|kết|quả|bài|toán|cần|dùng|không|với|trong|từ|của|tại|bằng|là|và|qua|song|vuông|mọi)\b/i;
const MATH_SPAN = /\$\$[\s\S]*?\$\$|\$[^$]*\$|\\\[[\s\S]*?\\\]|\\\([^)]*?\\\)/g;

export const containsVietnameseProse = (value?: string): boolean => {
  const normalized = (value || '').normalize('NFC');
  // Accented Vietnamese is never a mathematical command, so scan the complete field.
  // This catches labels hidden inside LaTeX such as \text{Tần số}.
  if (VIETNAMESE_MARKS.test(normalized)) return true;

  // For unaccented Vietnamese, inspect normal prose plus human-readable LaTeX labels,
  // while ignoring commands/variables such as \sin, \mathrm, x, y, etc.
  const latexLabels = Array.from(normalized.matchAll(/\\(?:text|operatorname)\s*\{([^{}]*)\}/g))
    .map((match) => match[1])
    .join(' ');
  const prose = normalized.replace(MATH_SPAN, ' ');
  return VIETNAMESE_WORDS.test(`${prose} ${latexLabels}`);
};

export const isCleanEnglishText = (value?: string): boolean =>
  Boolean(value?.trim()) && !containsVietnameseProse(value);

export const isQuestionEnglishReady = (
  question: Question,
  options: { includeSolution?: boolean } = {},
): boolean => {
  if (!isCleanEnglishText(question.question_en)) return false;
  if ((question.options || []).some((option) => !isCleanEnglishText(option.content_en))) return false;
  if (options.includeSolution && !isCleanEnglishText(question.solution_en)) return false;
  return true;
};

export const getEnglishQualityIssues = (question: Question, includeSolution = false): string[] => {
  const issues: string[] = [];
  if (!isCleanEnglishText(question.question_en)) issues.push('question_en');
  (question.options || []).forEach((option, index) => {
    if (!isCleanEnglishText(option.content_en)) issues.push(`options[${index}].content_en`);
  });
  if (includeSolution && !isCleanEnglishText(question.solution_en)) issues.push('solution_en');
  return issues;
};
