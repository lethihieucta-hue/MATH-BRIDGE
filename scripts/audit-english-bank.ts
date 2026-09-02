import { FULL_QUESTION_BANK, ONLINE_SAFE_QUESTION_BANK } from '../src/lib/questionBankData';

const VIETNAMESE_MARKS = /[ăâđêôơưĂÂĐÊÔƠƯàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểễệìíỉĩịòóỏõọồốổỗộờớởỡợùúủũụừứửữựỳýỷỹỵ]/i;
const VIETNAMESE_WORDS = /\b(?:cho|xét|hãy|tính|tìm|giải|một|các|hàm|số|phương|trình|bất|diện|tích|lợi|nhuận|lớn|nhỏ|nhất|đúng|sai|mặt|phẳng|đường|thẳng|hình|tam|giác|khoảng|cách|kết|quả|bài|toán|cần|dùng|không|với|trong|từ|của|tại|bằng|là)\b/i;

const containsVietnamese = (value?: string) => {
  const prose = (value || '').replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, ' ');
  return VIETNAMESE_MARKS.test(prose) || VIETNAMESE_WORDS.test(prose);
};

for (const [name, bank] of [['full', FULL_QUESTION_BANK], ['online', ONLINE_SAFE_QUESTION_BANK]] as const) {
  const failures: Array<{ id?: string; field: string; value: string }> = [];
  bank.forEach((q) => {
    const values: Array<[string, string | undefined]> = [
      ['question_en', q.question_en],
      ['solution_en', q.solution_en],
      ...((q.options || []).map((option, index) => [`options[${index}].content_en`, option.content_en] as [string, string | undefined])),
    ];
    values.forEach(([field, value]) => {
      if (containsVietnamese(value)) failures.push({ id: q.id, field, value: value || '' });
    });
  });
  const byField = failures.reduce<Record<string, number>>((counts, failure) => {
    const key = failure.field.startsWith('options[') ? 'option_en' : failure.field;
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
  const questionTypes = Array.from(new Set(failures
    .filter((failure) => failure.field === 'question_en')
    .map((failure) => failure.id?.replace(/-(?:tn|ds|tln|tl)-\d+$/, '') || 'unknown')));
  const uniqueByField = failures.reduce<Record<string, Set<string>>>((groups, failure) => {
    const key = failure.field.startsWith('options[') ? 'option_en' : failure.field;
    (groups[key] ||= new Set()).add(failure.value);
    return groups;
  }, {});
  console.log(JSON.stringify({ bank: name, questions: bank.length, failures: failures.length, byField,
    uniqueByField: Object.fromEntries(Object.entries(uniqueByField).map(([key, values]) => [key, values.size])) }));
  console.log(JSON.stringify({ bank: name, questionTypes }));
  const byType = new Map<string, { total: number; testReady: number; worksheetReady: number }>();
  bank.forEach((q) => {
    const typeId = q.type_id || 'unknown';
    const stat = byType.get(typeId) || { total: 0, testReady: 0, worksheetReady: 0 };
    const testReady = !containsVietnamese(q.question_en)
      && (q.options || []).every((option) => !containsVietnamese(option.content_en));
    const worksheetReady = testReady && !containsVietnamese(q.solution_en);
    stat.total += 1;
    if (testReady) stat.testReady += 1;
    if (worksheetReady) stat.worksheetReady += 1;
    byType.set(typeId, stat);
  });
  console.log(JSON.stringify({ bank: name,
    zeroTestReady: [...byType].filter(([, stat]) => stat.testReady === 0),
    zeroWorksheetReadyCount: [...byType].filter(([, stat]) => stat.worksheetReady === 0).length,
    typeCount: byType.size }));
  if (name === 'online') {
    const optionFrequency = failures.filter((failure) => failure.field.startsWith('options['))
      .reduce<Record<string, number>>((counts, failure) => {
        counts[failure.value] = (counts[failure.value] || 0) + 1;
        return counts;
      }, {});
    console.log(JSON.stringify({ mostFrequentBadOptions: Object.entries(optionFrequency).sort((a, b) => b[1] - a[1]).slice(0, 160) }));
  }
}
