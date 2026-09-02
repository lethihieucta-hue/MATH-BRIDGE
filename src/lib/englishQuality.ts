import { Question } from '../types';

// Detect Vietnamese prose only outside LaTeX spans. Mathematical commands such as
// \mathrm or variable names must never be mistaken for untranslated text.
const VIETNAMESE_MARKS = /[ăâđêôơưĂÂĐÊÔƠƯàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểễệìíỉĩịòóỏõọồốổỗộờớởỡợùúủũụừứửữựỳýỷỹỵ]/i;
const VIETNAMESE_WORDS = /\b(?:cho|xét|hãy|tính|tìm|giải|một|các|hàm|số|phương|trình|bất|diện|tích|lợi|nhuận|lớn|nhỏ|nhất|đúng|sai|mặt|phẳng|đường|thẳng|hình|tam|giác|khoảng|cách|kết|quả|bài|toán|cần|dùng|không|với|trong|từ|của|tại|bằng|là|và|qua|song|vuông|mọi)\b/i;
const MATH_SPAN = /\$\$[\s\S]*?\$\$|\$[^$]*\$|\\\[[\s\S]*?\\\]|\\\([^)]*?\\\)/g;

export const containsVietnameseProse = (value?: string): boolean => {
  const prose = (value || '').normalize('NFC').replace(MATH_SPAN, ' ');
  return VIETNAMESE_MARKS.test(prose) || VIETNAMESE_WORDS.test(prose);
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
