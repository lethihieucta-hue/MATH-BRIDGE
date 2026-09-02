// Gemini AI Multi-Model Service with Auto-Fallback and Granular Step Retry
// Compliant with AI_INSTRUCTIONS.md

import { buildQuestionBlueprintPrompt } from './questionBlueprintData';

export type GeminiModelId = 
  | 'gemini-3-flash-preview'
  | 'gemini-3-pro-preview'
  | 'gemini-2.5-flash';

export interface ModelInfo {
  id: GeminiModelId;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  isDefault?: boolean;
}

export const SUPPORTED_MODELS: ModelInfo[] = [
  {
    id: 'gemini-3-flash-preview',
    name: 'Gemini 3 Flash Preview',
    badge: 'Mặc định (Siêu tốc)',
    tagline: 'Phản hồi cực nhanh & tối ưu cho học tập',
    description: 'Thích hợp cho phân tích từ vựng, dịch thuật toán học và tạo gợi ý nhanh.',
    isDefault: true,
  },
  {
    id: 'gemini-3-pro-preview',
    name: 'Gemini 3 Pro Preview',
    badge: 'Chuyên sâu (Reasoning)',
    tagline: 'Lập luận toán học & tư duy logic phức tạp',
    description: 'Xử lý các bài toán hình học không gian, giải tích lớp 12 và lời giải đa bước.',
  },
  {
    id: 'gemini-2.5-flash',
    name: 'Gemini 2.5 Flash',
    badge: 'Dự phòng (Ổn định)',
    tagline: 'Độ ổn định cao và hạn ngạch dồi dào',
    description: 'Model dự phòng đáng tin cậy khi các phiên bản preview quá tải hoặc hết quota.',
  },
];

export const FALLBACK_CHAIN: GeminiModelId[] = [
  'gemini-3-flash-preview',
  'gemini-3-pro-preview',
  'gemini-2.5-flash',
];

const STORAGE_KEY_API_KEY = 'math_bridge_gemini_api_key';
const STORAGE_KEY_SELECTED_MODEL = 'math_bridge_selected_model';

// Retrieve stored API key
export function getStoredApiKey(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(STORAGE_KEY_API_KEY)?.trim() || '';
}

// Store API key
export function setStoredApiKey(key: string): void {
  if (typeof window === 'undefined') return;
  if (!key) {
    localStorage.removeItem(STORAGE_KEY_API_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY_API_KEY, key.trim());
  }
}

// Retrieve selected model
export function getStoredSelectedModel(): GeminiModelId {
  if (typeof window === 'undefined') return 'gemini-3-flash-preview';
  const saved = localStorage.getItem(STORAGE_KEY_SELECTED_MODEL) as GeminiModelId;
  if (saved && FALLBACK_CHAIN.includes(saved)) {
    return saved;
  }
  return 'gemini-3-flash-preview';
}

// Store selected model
export function setStoredSelectedModel(model: GeminiModelId): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_SELECTED_MODEL, model);
}

// Check if user has configured an API key
export function hasApiKey(): boolean {
  const key = getStoredApiKey();
  return Boolean(key && key.length > 5);
}

export interface StepExecutionResult {
  success: boolean;
  content: string;
  usedModel?: GeminiModelId;
  fallbackCount: number;
  error?: string;
  rawError?: string;
}

// Helper to call Gemini REST API
async function callGeminiApi(
  model: GeminiModelId,
  apiKey: string,
  prompt: string,
  systemInstruction?: string,
  generationOptions?: { maxOutputTokens?: number; temperature?: number; responseMimeType?: string }
): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const contents: any[] = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  const body: any = {
    contents,
    generationConfig: {
      temperature: generationOptions?.temperature ?? 0.3,
      topP: 0.95,
      maxOutputTokens: generationOptions?.maxOutputTokens ?? 8192,
      ...(generationOptions?.responseMimeType ? { responseMimeType: generationOptions.responseMimeType } : {}),
    },
  };

  if (systemInstruction) {
    body.systemInstruction = {
      parts: [{ text: systemInstruction }],
    };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    let errorDetail = '';
    try {
      const errorJson = await response.json();
      const err = errorJson.error;
      if (err) {
        errorDetail = `${response.status} ${err.status || ''}: ${err.message || JSON.stringify(err)}`;
      }
    } catch {
      errorDetail = `${response.status} ${response.statusText}`;
    }

    if (!errorDetail) {
      errorDetail = `${response.status} ${response.statusText || 'API_CALL_FAILED'}`;
    }

    throw new Error(errorDetail);
  }

  const data = await response.json();
  const candidate = data.candidates?.[0];
  const text = candidate?.content?.parts?.map((p: any) => p.text).join('') || '';

  if (!text) {
    throw new Error('500 EMPTY_RESPONSE: Model returned an empty response.');
  }

  return text;
}

// Test API Key connection
export async function testGeminiApiKey(apiKey: string): Promise<{ success: boolean; message: string }> {
  if (!apiKey || apiKey.trim().length < 10) {
    return { success: false, message: 'API Key không hợp lệ hoặc quá ngắn.' };
  }
  try {
    const res = await callGeminiApi(
      'gemini-3-flash-preview',
      apiKey.trim(),
      'Reply strictly with the single word: OK'
    );
    if (res.includes('OK') || res.length > 0) {
      return { success: true, message: 'Kết nối API Key thành công với Google AI Studio!' };
    }
    return { success: true, message: 'Kết nối thành công!' };
  } catch (err: any) {
    // If gemini-3-flash-preview fails, try gemini-2.5-flash to verify if key itself is valid
    try {
      await callGeminiApi('gemini-2.5-flash', apiKey.trim(), 'Say OK');
      return { success: true, message: 'Kết nối API Key thành công qua Gemini 2.5 Flash!' };
    } catch (err2: any) {
      return { success: false, message: err.message || err2.message || 'Không thể kết nối đến Gemini API' };
    }
  }
}

/**
 * Execute a single prompt or step with automatic fallback across the model chain.
 * If active model fails, it tries the next model in FALLBACK_CHAIN.
 * If all models fail, returns verbatim API error.
 */
export async function executeWithFallback(
  prompt: string,
  options?: {
    systemInstruction?: string;
    preferredModel?: GeminiModelId;
    onModelAttempt?: (model: GeminiModelId, attemptIndex: number) => void;
    maxOutputTokens?: number;
    temperature?: number;
    responseMimeType?: string;
  }
): Promise<StepExecutionResult> {
  const apiKey = getStoredApiKey();
  if (!apiKey) {
    return {
      success: false,
      content: '',
      fallbackCount: 0,
      error: 'Chưa cấu hình API Key. Vui lòng nhấn vào nút Settings trên Header để nhập key.',
      rawError: '401 UNAUTHENTICATED: Missing API Key',
    };
  }

  const startModel = options?.preferredModel || getStoredSelectedModel() || 'gemini-3-flash-preview';

  // Build model priority list starting from chosen model, then remaining models
  const orderedModels: GeminiModelId[] = [
    startModel,
    ...FALLBACK_CHAIN.filter((m) => m !== startModel),
  ];

  let lastRawError = '';
  let fallbackCount = 0;

  for (let i = 0; i < orderedModels.length; i++) {
    const currentModel = orderedModels[i];
    options?.onModelAttempt?.(currentModel, i);

    try {
      const result = await callGeminiApi(
        currentModel,
        apiKey,
        prompt,
        options?.systemInstruction,
        {
          maxOutputTokens: options?.maxOutputTokens,
          temperature: options?.temperature,
          responseMimeType: options?.responseMimeType,
        }
      );

      return {
        success: true,
        content: result,
        usedModel: currentModel,
        fallbackCount: i,
      };
    } catch (err: any) {
      fallbackCount = i + 1;
      lastRawError = err.message || String(err);
      console.warn(`[Math-Bridge AI] Model ${currentModel} failed with error:`, lastRawError);
      // Loop continues to next model in fallback chain
    }
  }

  // All models failed -> Return verbatim error
  return {
    success: false,
    content: '',
    fallbackCount,
    error: `Tất cả ${orderedModels.length} mô hình AI trong chuỗi Fallback đều thất bại.`,
    rawError: lastRawError || '429 RESOURCE_EXHAUSTED: All fallback models exhausted',
  };
}

// ---------------- Specialized Prompts for MATH-BRIDGE ----------------

const MATH_SYSTEM_INSTRUCTION = `Bạn là Trợ lý AI Chuyên gia Giảng dạy Toán THPT bằng Tiếng Anh (Math in English) cho học sinh Việt Nam thuộc dự án MATH-BRIDGE.
Nhiệm vụ của bạn là hỗ trợ học sinh và giáo viên hiểu rõ ngôn ngữ toán tiếng Anh, thuật ngữ, cấu trúc câu và phương pháp giải toán theo chuẩn chương trình GDPT 2018.
Yêu cầu:
- Trình bày công thức toán học dưới dạng LaTeX KaTeX chuẩn (ví dụ: $f(x) = x^2 - 4x + 3$, $\\Delta = b^2 - 4ac$, $I\\left(-\\dfrac{b}{2a}, -\\dfrac{\\Delta}{4a}\\right)$).
- Mọi phân số phải viết dạng chồng tử trên - mẫu dưới bằng \\dfrac{tử}{mẫu}; tuyệt đối không viết phân số bằng dấu / như 1/2, 3/5, x/(x+1). Chỉ giữ dấu / trong đơn vị như km/h, m/s, mg/L.
- Luôn cung cấp phần giải thích song ngữ (Anh - Việt) rõ ràng, chuẩn xác ngữ nghĩa toán học.
- Giữ phong cách sư phạm thân thiện, khuyến khích tư duy logic.`;

/**
 * Step 1: Phân tích Cấu trúc & Thuật ngữ Đề Toán (Language & Structure Breakdown)
 */
export async function explainMathStep1_LanguageAndStructure(
  problemText: string,
  preferredModel?: GeminiModelId,
  onAttempt?: (m: GeminiModelId, idx: number) => void
): Promise<StepExecutionResult> {
  const prompt = `Phân tích BƯỚC 1 cho đề bài toán sau:
Đề bài: "${problemText}"

Hãy thực hiện BƯỚC 1: Phân tích ngôn ngữ và cấu trúc đề bài (Language & Structure Breakdown):
1. **Key Math Terms (Thuật ngữ cốt lõi)**: Liệt kê các từ vựng tiếng Anh quan trọng trong đề bài, phiên âm IPA, dịch nghĩa tiếng Việt và ý nghĩa toán học.
2. **Given (Giả thiết đề bài cho)**: Tóm tắt chính xác các điều kiện, hàm số hoặc số liệu đã cho bằng cả tiếng Anh và tiếng Việt.
3. **Required (Yêu cầu cần tìm)**: Chỉ rõ đề bài yêu cầu tìm gì (Domain, Vertex, Max/Min, Derivative, Roots...) bằng cả tiếng Anh và tiếng Việt.
4. **Sentence Pattern (Mẫu câu thường gặp)**: Nêu mẫu câu tiếng Anh được sử dụng trong bài và cách dịch chuẩn.

Trình bày ngắn gọn, khoa học, dùng định dạng Markdown và LaTeX rõ ràng.`;

  return executeWithFallback(prompt, {
    systemInstruction: MATH_SYSTEM_INSTRUCTION,
    preferredModel,
    onModelAttempt: onAttempt,
  });
}

/**
 * Step 2: Định hướng Chiến lược & Công thức Toán học (Math Strategy & Formulas)
 */
export async function explainMathStep2_StrategyAndFormulas(
  problemText: string,
  step1Context: string,
  preferredModel?: GeminiModelId,
  onAttempt?: (m: GeminiModelId, idx: number) => void
): Promise<StepExecutionResult> {
  const prompt = `Dựa trên đề bài: "${problemText}"
Và kết quả phân tích Bước 1:
${step1Context}

Hãy thực hiện BƯỚC 2: Định hướng Chiến lược & Công thức Toán học (Math Strategy & Formulas):
1. **Mathematical Approach (Phương pháp giải)**: Nêu hướng tư duy và các bước toán học cần làm (2-3 bước chính).
2. **Core Formulas & Theorems (Công thức & Định lý cốt lõi)**: Viết các công thức LaTeX cần sử dụng và giải thích từng đại lượng.
3. **Common Pitfalls (Lỗi sai thường gặp)**: Cảnh báo học sinh lỗi ngữ pháp toán học hoặc lỗi tính toán hay mắc phải.

Trình bày súc tích, làm nổi bật công thức LaTeX.`;

  return executeWithFallback(prompt, {
    systemInstruction: MATH_SYSTEM_INSTRUCTION,
    preferredModel,
    onModelAttempt: onAttempt,
  });
}

/**
 * Step 3: Lời giải Chi tiết Song ngữ & Bài tập Tương tự (Bilingual Solution & Practice)
 */
export async function explainMathStep3_SolutionAndPractice(
  problemText: string,
  step1Context: string,
  step2Context: string,
  preferredModel?: GeminiModelId,
  onAttempt?: (m: GeminiModelId, idx: number) => void
): Promise<StepExecutionResult> {
  const prompt = `Dựa trên đề bài: "${problemText}"
Phân tích Bước 1:
${step1Context}
Chiến lược Bước 2:
${step2Context}

Hãy thực hiện BƯỚC 3: Lời giải Chi tiết Song ngữ & Bài tập tương tự (Detailed Bilingual Solution & Practice):
1. **Detailed Step-by-Step Solution (Lời giải chi tiết từng dòng)**:
   - Trình bày từng bước tính toán song ngữ (Tiếng Anh trước, dịch/chú thích Tiếng Việt ngay bên cạnh hoặc phía dưới).
   - Sử dụng LaTeX chuẩn cho mọi biến số và phép tính.
2. **Final Answer (Đáp số cuối cùng)**: Đóng khung hoặc in đậm đáp án rõ ràng.
3. **Similar Practice Question (1 Bài tập tương tự bằng Tiếng Anh)**: Đưa ra 1 bài tập có cấu trúc tương đương kèm đáp án ngắn để học sinh tự luyện.`;

  return executeWithFallback(prompt, {
    systemInstruction: MATH_SYSTEM_INSTRUCTION,
    preferredModel,
    onModelAttempt: onAttempt,
  });
}

/**
 * Teacher AI Generator: Sinh câu hỏi trắc nghiệm Toán tiếng Anh
 */
export async function generateBilingualQuestionAi(
  topicName: string,
  grade: number,
  difficulty: 'EASY' | 'MEDIUM' | 'HARD',
  englishRatio: number
): Promise<StepExecutionResult> {
  const prompt = `Hãy tạo 1 câu hỏi trắc nghiệm Toán THPT song ngữ Anh-Việt theo yêu cầu sau:
- Khối lớp: Lớp ${grade} (Chương trình Toán THPT Việt Nam)
- Chủ đề: ${topicName}
- Độ khó: ${difficulty}
- Tỷ lệ tiếng Anh mong muốn: ${englishRatio}%

Yêu cầu trả về đúng định dạng JSON (không kèm chữ nào khác ngoài JSON):
\`\`\`json
{
  "question_en": "Nội dung câu hỏi bằng tiếng Anh (chứa công thức LaTeX $...$)",
  "question_vi": "Bản dịch/gợi ý tiếng Việt của câu hỏi",
  "options": [
    { "option_key": "A", "content_en": "Option A in English", "content_vi": "Lựa chọn A tiếng Việt", "is_correct": true },
    { "option_key": "B", "content_en": "Option B in English", "content_vi": "Lựa chọn B tiếng Việt", "is_correct": false },
    { "option_key": "C", "content_en": "Option C in English", "content_vi": "Lựa chọn C tiếng Việt", "is_correct": false },
    { "option_key": "D", "content_en": "Option D in English", "content_vi": "Lựa chọn D tiếng Việt", "is_correct": false }
  ],
  "correct_answer": "A",
  "solution_en": "Detailed solution in English with LaTeX",
  "solution_vi": "Lời giải chi tiết bằng tiếng Việt",
  "vocabulary_support": [
    { "word": "term", "meaning": "nghĩa tiếng Việt" }
  ]
}
\`\`\``;

  return executeWithFallback(prompt, {
    systemInstruction: MATH_SYSTEM_INSTRUCTION,
  });
}

/**
 * Teacher AI Generator: Sinh từ vựng & bài học song ngữ
 */
export async function generateBilingualVocabLessonAi(
  topicName: string,
  grade: number
): Promise<StepExecutionResult> {
  const prompt = `Hãy soạn học liệu song ngữ cho chủ đề Toán: "${topicName}" (Toán Lớp ${grade}).
Yêu cầu trả về đúng định dạng JSON:
\`\`\`json
{
  "vocabulary": [
    {
      "word": "từ tiếng Anh",
      "ipa": "/phiên âm IPA/",
      "meaning_vi": "nghĩa tiếng Việt",
      "definition_en": "Math definition in English",
      "example_en": "Example sentence in English",
      "example_vi": "Bản dịch ví dụ tiếng Việt",
      "formula": "Công thức LaTeX nếu có"
    }
  ],
  "lesson": {
    "title_vi": "Tên bài học tiếng Việt",
    "title_en": "Lesson Title in English",
    "key_concepts_vi": "Khái niệm cốt lõi bằng tiếng Việt",
    "key_concepts_en": "Core concepts in English",
    "formula_list": ["f(x) = ...", "..."]
  }
}
\`\`\``;

  return executeWithFallback(prompt, {
    systemInstruction: MATH_SYSTEM_INSTRUCTION,
  });
}

/**
 * Student Diagnostic Error Analyzer
 */
export async function diagnoseMathErrorAi(
  questionText: string,
  studentAnswer: string,
  correctAnswer: string,
  solution: string
): Promise<StepExecutionResult> {
  const prompt = `Phân tích nguyên nhân học sinh làm sai câu hỏi Toán tiếng Anh:
- Đề bài: "${questionText}"
- Câu trả lời của học sinh: "${studentAnswer}"
- Đáp án đúng: "${correctAnswer}"
- Lời giải mẫu: "${solution}"

Hãy đưa ra nhận xét ngắn gọn gồm:
1. **Error Classification (Phân loại lỗi)**: Lỗi do Ngôn ngữ tiếng Anh (hiểu nhầm từ vựng/câu lệnh) hay do Kiến thức Toán (tính sai/áp dụng sai công thức).
2. **Diagnostic Feedback (Lời khuyên khắc phục)**: Chỉ ra đúng điểm sai và cách ghi nhớ từ vựng/công thức.`;

  return executeWithFallback(prompt, {
    systemInstruction: MATH_SYSTEM_INSTRUCTION,
  });
}

export interface WorksheetTypeQuestionPlan {
  id: string;
  code: string;
  title_vi: string;
  title_en: string;
  tn: number;
  ds: number;
  tln: number;
  tl: number;
}

/**
 * Sinh riêng ngân hàng câu hỏi cho các type_id đang được giáo viên chọn.
 * Hàm này tôn trọng CHÍNH XÁC số lượng 4 dạng thức của từng type_id và không sửa lý thuyết/bài mẫu.
 */
export async function generateWorksheetQuestionsByPlanAi(
  lessonTitle: string,
  chapterName: string,
  grade: number,
  plans: WorksheetTypeQuestionPlan[],
  lessonContext?: { key_concepts_vi?: string; formulas?: string[] }
): Promise<StepExecutionResult> {
  const cleanPlans = plans
    .map((p) => ({
      ...p,
      tn: Math.max(0, Math.min(10, Math.trunc(p.tn || 0))),
      ds: Math.max(0, Math.min(10, Math.trunc(p.ds || 0))),
      tln: Math.max(0, Math.min(10, Math.trunc(p.tln || 0))),
      tl: Math.max(0, Math.min(10, Math.trunc(p.tl || 0))),
    }))
    .filter((p) => p.tn + p.ds + p.tln + p.tl > 0);

  if (cleanPlans.length === 0) {
    return { success: true, content: '{"questions":[]}', fallbackCount: 0 };
  }

  const allowedTypes = cleanPlans
    .map((p) => `- ${p.id} | ${p.code} | ${p.title_vi} | ${p.title_en}`)
    .join('\n');
  const exactCounts = cleanPlans
    .map((p) => `- ${p.id}: TN=${p.tn}, DS=${p.ds}, TLN=${p.tln}, TL=${p.tl}; TỔNG=${p.tn + p.ds + p.tln + p.tl}`)
    .join('\n');
  const blueprintContext = buildQuestionBlueprintPrompt(cleanPlans);
  const curriculumContext = [
    lessonContext?.key_concepts_vi ? `Lý thuyết chuẩn của bài:\n${lessonContext.key_concepts_vi}` : '',
    lessonContext?.formulas?.length ? `Công thức chuẩn được phép dùng:\n${lessonContext.formulas.map((f) => `- ${f}`).join('\n')}` : '',
  ].filter(Boolean).join('\n\n');
  const grandTotal = cleanPlans.reduce((sum, p) => sum + p.tn + p.ds + p.tln + p.tl, 0);

  const prompt = `Bạn là giáo viên Toán THPT Việt Nam chuyên biên soạn câu hỏi theo GDPT 2018 - bộ Kết Nối Tri Thức.

NHIỆM VỤ: Chỉ sinh câu hỏi tự luyện cho đúng các dạng toán được liệt kê. Không sinh lý thuyết, không sinh dạng khác.
- Khối: Lớp ${grade}
- Chương: ${chapterName}
- Bài: ${lessonTitle}

TYPE_ID ĐƯỢC PHÉP:
${allowedTypes}

SỐ LƯỢNG BẮT BUỘC - PHẢI KHỚP CHÍNH XÁC:
${exactCounts}
Tổng toàn bộ mảng questions phải đúng ${grandTotal} câu.

BLUEPRINT RIÊNG THEO TYPE_ID:
${blueprintContext}

${curriculumContext ? `LÝ THUYẾT/CÔNG THỨC CHUẨN CỦA BÀI:\n${curriculumContext}\n` : ''}
RÀNG BUỘC BẮT BUỘC:
1. Mỗi câu phải có type_id đúng y hệt một ID cho phép và nội dung phải đúng chính xác tên dạng đó. Không được mượn bài từ type_id khác, kể cả cùng bài/chương.
2. format_type chỉ nhận TN, DS, TLN, TL và số câu của TỪNG format trong TỪNG type_id phải đúng bảng số lượng ở trên.
3. TN: đúng 4 lựa chọn A,B,C,D và đúng 1 đáp án. DS: đúng 4 mệnh đề a,b,c,d có is_correct. TLN: đáp án ngắn xác định. TL: có lời giải lập luận rõ.
4. Mỗi câu phải có variant_tag hợp lệ thuộc blueprint của chính type_id. Ưu tiên các variant_tag khác nhau; không tạo các câu chỉ đổi số/hệ số nhưng cùng cấu trúc.
5. Câu hỏi phải tự giải được, dữ kiện đủ, đáp án và lời giải phải nhất quán. Công thức LaTeX đặt trong $...$.
6. Không sinh kiến thức ngoài bài. Ví dụ Nguyên hàm/Tích phân không được chèn cực trị; mẫu số liệu ghép nhóm không được chèn đạo hàm; xác suất không được chèn hình học nếu đề không yêu cầu.
7. Chỉ trả về JSON thuần, không markdown fence, không lời dẫn.

SCHEMA:
{
  "questions": [
    {
      "type_id": "type-id-bắt-buộc",
      "variant_tag": "variant-tag-hợp-lệ",
      "format_type": "TN",
      "question_type": "MCQ",
      "difficulty": "MEDIUM",
      "question_vi": "...",
      "question_en": "...",
      "options": [
        {"option_key":"A","content_vi":"...","content_en":"...","is_correct":false},
        {"option_key":"B","content_vi":"...","content_en":"...","is_correct":true},
        {"option_key":"C","content_vi":"...","content_en":"...","is_correct":false},
        {"option_key":"D","content_vi":"...","content_en":"...","is_correct":false}
      ],
      "correct_answer": "B",
      "solution_vi": "...",
      "solution_en": "..."
    }
  ]
}`;

  return executeWithFallback(prompt, {
    systemInstruction: MATH_SYSTEM_INSTRUCTION,
    maxOutputTokens: Math.min(32768, Math.max(8192, grandTotal * 900)),
    temperature: 0.35,
    responseMimeType: 'application/json',
  });
}

/**
 * Tự động soạn toàn bộ phiếu học tập song ngữ (Lý thuyết, Thuật ngữ, Bài tập mẫu, 4 Dạng câu hỏi GDPT 2018) bằng Gemini AI
 */
export async function generateCompleteLessonWorksheetAi(
  lessonTitle: string,
  chapterName: string,
  grade: number,
  mathTypes: Array<{ id: string; code: string; title_vi: string; title_en: string }> = [],
  lessonContext?: { key_concepts_vi?: string; formulas?: string[] }
): Promise<StepExecutionResult> {
  const allowedTypes = mathTypes.length > 0
    ? mathTypes.map((t) => `- ${t.id} | ${t.code} | ${t.title_vi} | ${t.title_en}`).join('\n')
    : '- Không có danh sách dạng cố định; chỉ sinh đúng nội dung của bài học.';
  const curriculumContext = [
    lessonContext?.key_concepts_vi ? `Lý thuyết chuẩn của bài:\n${lessonContext.key_concepts_vi}` : '',
    lessonContext?.formulas?.length ? `Công thức chuẩn được phép dùng:\n${lessonContext.formulas.map((f) => `- ${f}`).join('\n')}` : '',
  ].filter(Boolean).join('\n\n');
  const blueprintContext = buildQuestionBlueprintPrompt(mathTypes);

  const prompt = `Bạn là Chuyên gia biên soạn tài liệu Giảng dạy Toán THPT bằng Tiếng Anh (Math in English) theo chuẩn chương trình GDPT 2018 (Bộ sách Kết Nối Tri Thức).
Hãy soạn thảo đầy đủ nội dung phiếu học tập song ngữ cho bài học sau:
- Khối lớp: Lớp ${grade}
- Chương: ${chapterName}
- Bài học: ${lessonTitle}

DANH SÁCH DẠNG TOÁN ĐƯỢC PHÉP SỬ DỤNG (ID PHẢI GIỮ NGUYÊN):
${allowedTypes}

NGÂN HÀNG CẤU TRÚC BÀI TẬP RIÊNG CHO TỪNG type_id (variant_tag PHẢI LẤY ĐÚNG TỪ ĐÂY):
${blueprintContext}

${curriculumContext ? `NGỮ CẢNH CHƯƠNG TRÌNH CHUẨN (BÁM SÁT, KHÔNG MỞ RỘNG SANG BÀI KHÁC):\n${curriculumContext}\n` : ''}
RÀNG BUỘC SƯ PHẠM BẮT BUỘC:
1. TUYỆT ĐỐI không sinh kiến thức thuộc bài/chương khác. Ví dụ: bài Nguyên hàm không được xuất hiện câu cực trị, đồng biến/nghịch biến; bài số liệu ghép nhóm không được xuất hiện đạo hàm/khảo sát hàm số; bài hình học không được chèn xác suất hay thống kê.
2. Mỗi câu hỏi và mỗi ví dụ phải có trường type_id; type_id CHỈ được lấy từ danh sách dạng toán ở trên và nội dung câu phải đúng chính xác mô tả của type_id đó.
3. CẤM kiểu tạo một mẫu rồi chỉ thay số. Hai câu mà sau khi bỏ các con số/hệ số vẫn gần như cùng một câu được xem là TRÙNG DẠNG và không hợp lệ.
4. Trong MỖI type_id, phải phân bố các cấu trúc tư duy khác nhau: (a) nhận biết/hiểu bản chất, (b) áp dụng trực tiếp, (c) biến đổi hoặc suy luận ngược, (d) đọc bảng/đồ thị/dữ kiện hoặc tham số nếu phù hợp, (e) ngữ cảnh thực tế nếu phù hợp với đúng bài. Không ép bài thực tế vào dạng không phù hợp.
5. Mỗi câu phải có variant_tag và GIÁ TRỊ PHẢI KHỚP CHÍNH XÁC một variant_tag được liệt kê trong NGÂN HÀNG CẤU TRÚC của chính type_id đó. Trong cùng type_id, phải dùng ít nhất 5 variant_tag khác nhau trước khi lặp lại một variant_tag.
6. Câu hỏi phải đúng kiến thức của khối ${grade}, đúng thuật ngữ Toán tiếng Việt và tiếng Anh, số liệu phải cho đáp án xác định; lời giải phải tự kiểm tra lại kết quả.
7. Nếu danh sách dạng đã được cung cấp thì KHÔNG tự ý đổi tên dạng, thêm dạng, gộp dạng hoặc chuyển câu sang dạng khác.
8. Với MỖI type_id tạo: 4 câu TN, 2 câu Đúng/Sai, 2 câu trả lời ngắn và 1 câu tự luận. Chín câu phải phủ tối thiểu 5 variant_tag khác nhau của type_id; không được dùng một variant_tag cho quá 2 câu và tuyệt đối không tạo bản sao chỉ thay hệ số.
9. TN phải có đúng 4 phương án và đúng 1 phương án đúng. Đúng/Sai phải có 4 mệnh đề a,b,c,d và lời giải từng ý. TLN phải có đáp án ngắn xác định. TL phải có lời giải có lập luận.
10. Sắp xếp mảng questions theo từng type_id để dễ kiểm tra, nhưng tuyệt đối giữ type_id gốc.

Yêu cầu trả về đúng định dạng JSON CHÍNH XÁC (không kèm giải thích hay văn bản ngoài JSON):
\`\`\`json
{
  "key_concepts_vi": "Tóm tắt lý thuyết cốt lõi bằng tiếng Việt (dùng định dạng Markdown, công thức toán trong $...$). Có các gạch đầu dòng rõ ràng.",
  "key_concepts_en": "Core theoretical summary in English with LaTeX $...$.",
  "formulas": [
    "Công thức LaTeX quan trọng 1",
    "Công thức LaTeX quan trọng 2"
  ],
  "vocabulary_terms": [
    {
      "word": "Term in English",
      "meaning": "Nghĩa tiếng Việt",
      "ipa": "/.../",
      "example": "Example sentence using the term in math context"
    },
    {
      "word": "Second Term",
      "meaning": "Nghĩa tiếng Việt 2",
      "ipa": "/.../",
      "example": "Example sentence 2"
    },
    {
      "word": "Third Term",
      "meaning": "Nghĩa tiếng Việt 3",
      "ipa": "/.../",
      "example": "Example sentence 3"
    }
  ],
  "types": [
    {
      "code": "Dạng 1",
      "title_vi": "Tên dạng toán 1",
      "title_en": "Math Type 1 in English"
    },
    {
      "code": "Dạng 2",
      "title_vi": "Tên dạng toán 2",
      "title_en": "Math Type 2 in English"
    }
  ],
  "worked_examples": [
    {
      "type_id": "ID dạng toán tương ứng trong danh sách được phép",
      "type_code": "Dạng 1. Tên dạng toán 1",
      "title_vi": "Ví dụ 1: Tên ví dụ",
      "title_en": "Example 1: Title in English",
      "problem_vi": "Đề bài ví dụ bằng tiếng Việt (chứa công thức LaTeX $...$)",
      "problem_en": "Problem statement in English (with LaTeX $...$)",
      "solution_vi": "Lời giải chi tiết từng bước bằng tiếng Việt",
      "solution_en": "Detailed step-by-step solution in English"
    },
    {
      "type_id": "ID dạng toán tương ứng trong danh sách được phép",
      "type_code": "Dạng 2. Tên dạng toán 2",
      "title_vi": "Ví dụ 2: Tên ví dụ 2",
      "title_en": "Example 2: Title in English",
      "problem_vi": "Đề bài ví dụ 2 bằng tiếng Việt",
      "problem_en": "Problem statement 2 in English",
      "solution_vi": "Lời giải chi tiết ví dụ 2 bằng tiếng Việt",
      "solution_en": "Detailed solution 2 in English"
    }
  ],
  "questions": [
    {
      "type_id": "ID dạng toán tương ứng trong danh sách được phép",
      "variant_tag": "một ID variant_tag hợp lệ đúng theo blueprint của type_id",
      "format_type": "TN",
      "question_type": "MCQ",
      "question_vi": "Nội dung câu hỏi trắc nghiệm nhiều lựa chọn 1 tiếng Việt (dùng $...$)",
      "question_en": "Multiple choice question 1 in English",
      "options": [
        { "option_key": "A", "content_vi": "Phương án A", "content_en": "Option A", "is_correct": true },
        { "option_key": "B", "content_vi": "Phương án B", "content_en": "Option B", "is_correct": false },
        { "option_key": "C", "content_vi": "Phương án C", "content_en": "Option C", "is_correct": false },
        { "option_key": "D", "content_vi": "Phương án D", "content_en": "Option D", "is_correct": false }
      ],
      "correct_answer": "A",
      "solution_vi": "Lời giải chi tiết câu TN 1",
      "solution_en": "Detailed solution 1"
    },
    {
      "type_id": "ID dạng toán tương ứng trong danh sách được phép",
      "variant_tag": "một ID variant_tag hợp lệ đúng theo blueprint của type_id",
      "format_type": "TN",
      "question_type": "MCQ",
      "question_vi": "Nội dung câu hỏi trắc nghiệm nhiều lựa chọn 2 tiếng Việt",
      "question_en": "Multiple choice question 2 in English",
      "options": [
        { "option_key": "A", "content_vi": "Phương án A", "content_en": "Option A", "is_correct": false },
        { "option_key": "B", "content_vi": "Phương án B", "content_en": "Option B", "is_correct": true },
        { "option_key": "C", "content_vi": "Phương án C", "content_en": "Option C", "is_correct": false },
        { "option_key": "D", "content_vi": "Phương án D", "content_en": "Option D", "is_correct": false }
      ],
      "correct_answer": "B",
      "solution_vi": "Lời giải chi tiết câu TN 2",
      "solution_en": "Detailed solution 2"
    },
    {
      "type_id": "ID dạng toán tương ứng trong danh sách được phép",
      "variant_tag": "một ID variant_tag hợp lệ đúng theo blueprint của type_id",
      "format_type": "DS",
      "question_type": "TRUE_FALSE",
      "question_vi": "Cho giả thiết... Xét tính đúng/sai của các mệnh đề sau:",
      "question_en": "Given ... Determine whether each of the following statements is True (Đ) or False (S):",
      "options": [
        { "option_key": "a", "content_vi": "Mệnh đề a", "content_en": "Statement a", "is_correct": true },
        { "option_key": "b", "content_vi": "Mệnh đề b", "content_en": "Statement b", "is_correct": true },
        { "option_key": "c", "content_vi": "Mệnh đề c", "content_en": "Statement c", "is_correct": false },
        { "option_key": "d", "content_vi": "Mệnh đề d", "content_en": "Statement d", "is_correct": true }
      ],
      "correct_answer": "a-Đ, b-Đ, c-S, d-Đ",
      "solution_vi": "Lời giải chi tiết cho 4 ý a, b, c, d",
      "solution_en": "Detailed explanation"
    },
    {
      "type_id": "ID dạng toán tương ứng trong danh sách được phép",
      "variant_tag": "một ID variant_tag hợp lệ đúng theo blueprint của type_id",
      "format_type": "TLN",
      "question_type": "SHORT",
      "question_vi": "Nội dung câu hỏi trắc nghiệm trả lời ngắn (kết quả là một số):",
      "question_en": "Short answer question (resulting in a number):",
      "correct_answer": "5",
      "solution_vi": "Lời giải chi tiết ra đáp số 5",
      "solution_en": "Detailed solution"
    },
    {
      "type_id": "ID dạng toán tương ứng trong danh sách được phép",
      "variant_tag": "một ID variant_tag hợp lệ đúng theo blueprint của type_id",
      "format_type": "TL",
      "question_type": "ESSAY",
      "question_vi": "Nội dung câu hỏi tự luận toán học:",
      "question_en": "Essay question:",
      "correct_answer": "Lời giải chi tiết",
      "solution_vi": "Các bước giải tự luận chi tiết",
      "solution_en": "Step-by-step essay solution"
    }
  ]
}
\`\`\``;

  return executeWithFallback(prompt, {
    systemInstruction: MATH_SYSTEM_INSTRUCTION,
    maxOutputTokens: 16384,
    temperature: 0.5,
  });
}

export async function generateExamTestFromDescriptionAi(
  description: string,
  grade: number = 11
): Promise<StepExecutionResult> {
  const prompt = `Bạn là chuyên gia khảo thí & giáo viên chuyên Toán THPT Việt Nam và giáo viên Toán tiếng Anh Cambridge/IB.
Hãy biên soạn một đề kiểm tra / bài test đánh giá năng lực Toán song ngữ chuẩn cấu trúc GDPT 2018 dựa theo yêu cầu của giáo viên:

YÊU CẦU MÔ TẢ CỦA GIÁO VIÊN:
"${description}"
(Khối lớp: Lớp ${grade})

QUAN TRỌNG VỀ SỐ LƯỢNG CÂU HỎI:
- Hãy phân tích số lượng câu hỏi mà giáo viên yêu cầu (Ví dụ: "10 câu", "15 câu", "5 câu").
- Mảng "questions" trong JSON PHẢI CÓ ĐỦ CHÍNH XÁC số lượng câu hỏi đó (Ví dụ giáo viên yêu cầu 10 câu thì phải tạo đúng 10 câu hỏi độc lập, không được rút gọn hay cắt xén).

HÃY TỰ ĐỘNG PHÂN TÍCH YÊU CẦU VÀ SINH RA KẾT QUẢ DƯỚI DẠNG ĐỊNH DẠNG JSON DUY NHẤT THEO SCHEMA SAU:
{
  "test_title": "Tên bài kiểm tra (Ví dụ: ĐỀ KIỂM TRA 15 PHÚT: GIÁ TRỊ LỚN NHẤT VÀ NHỎ NHẤT CỦA HÀM SỐ)",
  "test_title_en": "15-Minute Test: Maximum and Minimum Values of Functions",
  "duration_minutes": 15,
  "english_ratio": 50,
  "instructions_vi": "Thời gian làm bài: 15 phút. Học sinh làm bài trực tiếp vào đề.",
  "instructions_en": "Time allowed: 15 minutes. Write your answers directly on this paper.",
  "questions": [
    {
      "format_type": "TN",
      "question_type": "MCQ",
      "question_vi": "Đề câu hỏi tiếng Việt (công thức LaTeX $...$)",
      "question_en": "Question in English",
      "options": [
        { "option_key": "A", "content_vi": "Phương án A", "content_en": "Option A", "is_correct": true },
        { "option_key": "B", "content_vi": "Phương án B", "content_en": "Option B", "is_correct": false },
        { "option_key": "C", "content_vi": "Phương án C", "content_en": "Option C", "is_correct": false },
        { "option_key": "D", "content_vi": "Phương án D", "content_en": "Option D", "is_correct": false }
      ],
      "correct_answer": "A",
      "solution_vi": "Lời giải chi tiết tiếng Việt",
      "solution_en": "Detailed solution in English"
    },
    {
      "format_type": "DS",
      "question_type": "TRUE_FALSE",
      "question_vi": "Cho... Các mệnh đề sau đúng hay sai:",
      "question_en": "Given... Are the following statements True or False:",
      "options": [
        { "option_key": "a", "content_vi": "Mệnh đề a", "content_en": "Statement a", "is_correct": true },
        { "option_key": "b", "content_vi": "Mệnh đề b", "content_en": "Statement b", "is_correct": true },
        { "option_key": "c", "content_vi": "Mệnh đề c", "content_en": "Statement c", "is_correct": false },
        { "option_key": "d", "content_vi": "Mệnh đề d", "content_en": "Statement d", "is_correct": true }
      ],
      "correct_answer": "a-Đ, b-Đ, c-S, d-Đ",
      "solution_vi": "Giải thích chi tiết",
      "solution_en": "Detailed explanation"
    },
    {
      "format_type": "TLN",
      "question_type": "SHORT",
      "question_vi": "Câu hỏi trả lời ngắn (kết quả là số):",
      "question_en": "Short-answer question:",
      "correct_answer": "10",
      "solution_vi": "Lời giải chi tiết",
      "solution_en": "Detailed solution"
    },
    {
      "format_type": "TL",
      "question_type": "ESSAY",
      "question_vi": "Câu hỏi tự luận:",
      "question_en": "Essay question:",
      "correct_answer": "Xem lời giải",
      "solution_vi": "Các bước giải tự luận chi tiết",
      "solution_en": "Detailed essay solution"
    }
  ]
}`;

  return executeWithFallback(prompt, {
    systemInstruction: MATH_SYSTEM_INSTRUCTION,
  });
}


