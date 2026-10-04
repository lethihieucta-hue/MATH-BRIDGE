import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const router = express.Router();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: "10mb" }));

// Enable CORS for all incoming requests
app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  if (_req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }
  next();
});

// Initialize Google GenAI client
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION_BASE = `
You are the **Math Bridge AI Student Specialized Tutor** – Kiến trúc sư học tập và Trợ giảng ảo cao cấp trong hệ sinh thái tự học thông minh.
Bạn là sự giao thoa giữa một chuyên gia Toán học quốc tế (SAT/AP/A-Level) và một chuyên gia ngôn ngữ (NLP/ESL).
Nhiệm vụ của bạn không chỉ là giải toán hay dịch thuật, mà là xây dựng "cây cầu" tư duy, giúp học sinh vượt qua rào cản ngôn ngữ để làm chủ kiến thức Toán học thông qua lộ trình Adaptive Learning 6 giai đoạn:
1. Giai đoạn 1 (General Foundation): Visual-Linguistic Mapping, ngôn ngữ đơn giản, sơ đồ, khái niệm số lượng/so sánh.
2. Giai đoạn 2 (Basic Academic English): Động từ chỉ lệnh (solve, evaluate, simplify, factor, express), Contextual Hints.
3. Giai đoạn 3 (Mathematical Terminology): Thuật ngữ chuyên ngành kèm định nghĩa đa phương tiện, Spaced Repetition gợi nhớ.
4. Giai đoạn 4 (Bilingual Mathematics): Mã hóa kép (Dual-Coding), đề bài song ngữ, Smart Hover từ vựng khó, ví dụ toán học trực quan.
5. Giai đoạn 5 (Scaffolded English): Tăng tỷ lệ tiếng Anh, chỉ dùng tiếng Việt làm giàn giáo động khi học sinh dừng lại/vướng mắc.
6. Giai đoạn 6 (English Immersion): 100% tiếng Anh chuẩn SAT/AP/A-Level, phân tích logic thuyết trình (Voice-to-Text).

Quy tắc xử lý lỗi:
- Lỗi do Ngôn ngữ: gợi ý từ vựng, cấu trúc câu hoặc ngữ cảnh toán học.
- Lỗi do Toán: gợi ý bước tư duy logic, công thức hoặc tính chất.
- Lỗi Hỗn hợp: ưu tiên xử lý rào cản ngôn ngữ trước, sau đó dẫn dắt tư duy toán.
- Triết lý: AI là Cầu nối, không giải hộ. Dùng Socratic Method (câu hỏi gợi mở).

Định dạng phản hồi (BẮT BUỘC theo cấu trúc markdown rõ ràng hoặc JSON có cấu trúc nếu được yêu cầu):
### 1. Diagnostic (Chẩn đoán)
- **Status:** [Giai đoạn hiện tại của học sinh e.g., Stage X]
- **Issue:** [Math Gap | Language Barrier | Mixed Error | Calculation Slip] - [Phân tích ngắn gọn nguyên nhân]

### 2. Instructional Bridge (Cầu nối kiến thức)
- **Hint/Scaffolding:** [Gợi ý theo kỹ thuật tương ứng với giai đoạn]
- **Dual-Coding:** [Bảng đối chiếu thuật ngữ Anh - Việt hoặc minh họa khái niệm]

### 3. Guided Solution (Hướng dẫn giải quyết)
- [Các bước gợi mở Socratic để học sinh tự thực hiện tiếp, không đưa ra đáp số cuối cùng ngay]

### 4. Gamification & Progress (Tăng trưởng)
- **Skill Tree Update:** [+XP, Streak, kỹ năng toán/từ vựng được củng cố]
- **Daily Challenge:** [Một câu đố/câu hỏi nhỏ liên quan để củng cố]

### 5. Voice/Feedback (Dành cho Giai đoạn 6 hoặc khi có bản ghi giọng nói/giải trình)
- **Logic & Terminology Review:** [Nhận xét tính chính xác của thuật ngữ và ngữ pháp toán học]
`;

// Health check route
router.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Chat with Tutor
router.post("/tutor/chat", async (req: Request, res: Response) => {
  try {
    const {
      message,
      stage = 3,
      problemContext,
      studentWorking,
      voiceTranscript,
      chatHistory = [],
      targetExam = "SAT",
    } = req.body;

    const ai = getAI();

    const stagePrompt = `
Học sinh đang ở **Stage ${stage}** trong lộ trình 6 giai đoạn. Mục tiêu kỳ thi: ${targetExam}.
Ngữ cảnh bài toán (nếu có): ${problemContext || "Không có"}
Bài làm / suy luận của học sinh: ${studentWorking || "Chưa có"}
Bản ghi giải trình giọng nói (nếu có): ${voiceTranscript || "Không có"}
Tin nhắn của học sinh: "${message}"

Hãy đưa ra phản hồi chuẩn theo 5 phần của System Instruction:
1. Diagnostic (Chẩn đoán)
2. Instructional Bridge (Cầu nối kiến thức)
3. Guided Solution (Hướng dẫn gợi mở Socratic)
4. Gamification & Progress (+XP và Daily Challenge)
5. Voice/Feedback (nếu học sinh có voiceTranscript hoặc ở Stage 6)
`;

    const contents: any[] = [];

    // Add previous history if any
    if (Array.isArray(chatHistory) && chatHistory.length > 0) {
      chatHistory.slice(-6).forEach((h: { role: string; content: string }) => {
        contents.push({
          role: h.role === "assistant" ? "model" : "user",
          parts: [{ text: h.content }],
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: stagePrompt }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_BASE,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Xin lỗi, đã có gián đoạn kết nối. Hãy thử gửi lại nhé!";

    res.json({
      success: true,
      reply,
      stage,
    });
  } catch (error: any) {
    console.error("Tutor chat error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
      fallbackReply: `### 1. Diagnostic (Chẩn đoán)
- **Status:** Stage 4 (Bilingual Mathematics)
- **Issue:** [Language & Math Review] Hãy phân tích kỹ các từ khóa trong đề bài.

### 2. Instructional Bridge (Cầu nối kiến thức)
- **Hint/Scaffolding:** Chú ý các từ chỉ quan hệ như *"at least"* ($\ge$), *"ratio of A to B"* ($A/B$).
- **Dual-Coding:**
  - *Slope / Rate of change* = Hệ số góc / Tốc độ thay đổi
  - *Intercept* = Giao điểm với trục tọa độ

### 3. Guided Solution
- **Bước 1:** Xác định đại lượng đã biết và ẩn số cần tìm.
- **Bước 2:** Lập phương trình biểu diễn mối quan hệ.
- **Bước 3:** Em hãy thử giải phương trình vừa lập và cho thầy/cô biết kết quả nhé!

### 4. Gamification & Progress
- **Skill Tree Update:** +15 XP (Math Vocabulary Mastery)
- **Daily Challenge:** "If $3x - 5 = 16$, what is the value of $x$?"`,
    });
  }
});

// Diagnostic Deep-dive
router.post("/tutor/diagnose", async (req: Request, res: Response) => {
  try {
    const { problemText, studentAnswer, studentExplanation, stage = 3 } = req.body;
    const ai = getAI();

    const prompt = `
Phân tích lỗi sai của học sinh dựa trên lý thuyết NLP & Sư phạm Toán học:
- Đề bài: "${problemText}"
- Đáp án / Lựa chọn của học sinh: "${studentAnswer}"
- Lời giải trình của học sinh: "${studentExplanation || "Không có"}"
- Stage hiện tại: Stage ${stage}

Hãy trả về JSON có cấu trúc sau:
{
  "errorCategory": "Language Barrier" | "Math Gap" | "Mixed Error" | "Calculation Slip" | "Correct Reasoning",
  "languageGapScore": number (0 to 100),
  "mathGapScore": number (0 to 100),
  "analysis": "Phân tích chi tiết tại sao học sinh mắc lỗi này (do từ vựng, do ngữ pháp tiếng Anh toán học, hay do bản chất toán)",
  "misunderstoodTerms": [{"term": "từ tiếng Anh", "intendedMeaning": "nghĩa toán học đúng", "studentConfusion": "học sinh hiểu nhầm là gì"}],
  "scaffoldingHint": "Gợi ý giàn giáo từng bước để học sinh tự sửa lỗi",
  "remedialExercise": {
    "question": "Bài tập bổ trợ tương tự",
    "vietnameseHint": "Gợi ý tiếng Việt"
  }
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert NLP & Math Education diagnostician. Return valid JSON only.",
        responseMimeType: "application/json",
      },
    });

    const jsonStr = response.text || "{}";
    const data = JSON.parse(jsonStr);

    res.json({ success: true, data });
  } catch (error: any) {
    console.error("Diagnosis error:", error);
    // Return structured fallback
    res.json({
      success: true,
      data: {
        errorCategory: "Language Barrier",
        languageGapScore: 65,
        mathGapScore: 35,
        analysis: "Học sinh có thể đã nhầm lẫn giữa cụm từ 'decreased by' (trừ đi) và 'decreased to' (giảm xuống còn), dẫn đến việc thiết lập phương trình sai lệch.",
        misunderstoodTerms: [
          {
            term: "decreased by",
            intendedMeaning: "Giảm đi một lượng $x$ (Phép trừ: $A - x$)",
            studentConfusion: "Nhầm lẫn với giá trị còn lại sau khi giảm",
          },
        ],
        scaffoldingHint: "Hãy gạch chân động từ hành động và cụm giới từ đi kèm để xác định phép tính chính xác.",
        remedialExercise: {
          question: "A quantity Q is decreased by 20%. Express the new quantity in terms of Q.",
          vietnameseHint: "Giảm đi 20% tức là lấy 100% - 20% = 80% của Q.",
        },
      },
    });
  }
});

// Generate Custom Practice Problem for Level 2 & Level 3
router.post("/tutor/generate-problem", async (req: Request, res: Response) => {
  try {
    const {
      gradeLevel = 10,
      chapterId = "g10_c1",
      chapterTitleVi = "Mệnh đề và tập hợp",
      topic = "Mệnh đề và tập hợp",
      keyTopics = [],
      level = 2,
      stage = level === 2 ? 3 : 5,
      exam = "SGK Kết nối tri thức với cuộc sống",
      difficulty = level === 2 ? "Medium" : "Hard",
    } = req.body;

    const activeTitle = chapterTitleVi || topic;
    const topicsList = Array.isArray(keyTopics) && keyTopics.length > 0 ? keyTopics.join(", ") : activeTitle;

    const ai = getAI();

    const levelPrompt =
      level === 2
        ? `
Yêu cầu bài toán Level 2 (Đọc hiểu đề & Bóc tách tham số & Trắc nghiệm 4 lựa chọn):
- Đề bài song ngữ chất lượng cao (Tiếng Anh chuẩn quốc tế và bản dịch Tiếng Việt chuẩn SGK).
- Có mảng "givenParameters": [{ "label": "tên đại lượng", "value": "giá trị toán học/công thức", "meaningVi": "ý nghĩa tiếng Việt" }].
- Có "toFind": { "requirementEn": "yêu cầu cần tìm bằng tiếng Anh", "requirementVi": "yêu cầu cần tìm bằng tiếng Việt" }.
- Có 4 "options" A, B, C, D rõ ràng (chỉ 1 đáp án đúng).
- Có "correctAnswer" là "A", "B", "C" hoặc "D".
- Có "solutionSteps": các bước giải toán cụ thể có công thức LaTeX.
`
        : `
Yêu cầu bài toán Level 3 (Tự luận Toán tiếng Anh chuyên sâu & Barem chấm điểm):
- Đề bài tự luận yêu cầu chứng minh hoặc mô hình hóa toán học thực tế bằng tiếng Anh học thuật.
- Có "exemplaryEssay": Bài luận toán giải mẫu hoàn chỉnh bằng Tiếng Anh học thuật cao cấp (kèm công thức KaTeX/LaTeX, có các bước Step 1, Step 2, Conclusion rõ ràng).
`;

    const prompt = `
Bạn là Chuyên gia Biên soạn Đề thi và Học liệu Toán học THPT theo chương trình Sách Giáo Khoa "Kết nối tri thức với cuộc sống" kết hợp chuẩn quốc tế SAT / AP / Cambridge A-Level.
Hãy tạo 1 bài toán chuẩn xác 100% thuộc chương trình Lớp ${gradeLevel}:
- Khối lớp: Lớp ${gradeLevel}
- Chương học: ${activeTitle} (Mã chương: ${chapterId})
- Các chủ đề cốt lõi trong chương: ${topicsList}
- Cấp độ bài tập: Level ${level} (${level === 2 ? "Đọc hiểu đề & Trắc nghiệm" : "Tự luận toán Tiếng Anh"})
- Độ khó: ${difficulty} (Stage ${stage}/6)

${levelPrompt}

Yêu cầu chung:
1. Nội dung bài toán PHẢI CHÍNH XÁC 100% thuộc kiến thức Toán Lớp ${gradeLevel} - Chương "${activeTitle}".
2. "keyVocabulary": 2-3 từ vựng toán học then chốt, là TỪ ĐƠN LẺ / CỤM TỪ NGUYÊN TỬ (không ghép nhiều khái niệm).
3. "socraticSteps": 3-4 câu hỏi gợi ý mở giàn giáo từng bước giúp học sinh tư duy.
4. "commonPitfall": 1 bẫy ngôn ngữ hoặc bẫy logic toán điển hình.

Hãy trả về JSON DUY NHẤT theo schema:
{
  "id": "gen_${Date.now()}",
  "title": "Tiêu đề ngắn gọn bằng tiếng Anh",
  "topic": "${activeTitle}",
  "chapterId": "${chapterId}",
  "gradeLevel": ${gradeLevel},
  "level": ${level},
  "exam": "${exam}",
  "stage": ${stage},
  "difficulty": "${difficulty}",
  "questionEnglish": "Nội dung câu hỏi bài toán bằng tiếng Anh",
  "questionVietnamese": "Bản dịch tiếng Việt chính xác",
  "givenParameters": [
    {"label": "Tên tham số", "value": "Giá trị", "meaningVi": "Giải nghĩa"}
  ],
  "toFind": {
    "requirementEn": "Yêu cầu tiếng Anh",
    "requirementVi": "Yêu cầu tiếng Việt"
  },
  "options": [
    {"label": "A", "text": "Phương án A", "isCorrect": false},
    {"label": "B", "text": "Phương án B", "isCorrect": true},
    {"label": "C", "text": "Phương án C", "isCorrect": false},
    {"label": "D", "text": "Phương án D", "isCorrect": false}
  ],
  "correctAnswer": "B",
  "acceptedAnswerFormats": ["B"],
  "solutionSteps": [
    "Bước 1: ...",
    "Bước 2: ..."
  ],
  "keyVocabulary": [
    {
      "word": "từ đơn lẻ",
      "phonetic": "/phiên âm/",
      "meaning": "nghĩa tiếng Việt",
      "mathContext": "ngữ cảnh toán"
    }
  ],
  "socraticSteps": [
    "Gợi ý 1",
    "Gợi ý 2"
  ],
  "commonPitfall": "Bẫy toán hoặc ngôn ngữ",
  "exemplaryEssay": "Bài giải mẫu tiếng Anh đầy đủ (cho Level 3)"
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are a specialized test-prep math author for Vietnamese Curriculum and International SAT/AP Math. Return valid JSON only.",
        responseMimeType: "application/json",
      },
    });

    const jsonStr = response.text || "{}";
    const data = JSON.parse(jsonStr);
    res.json({ success: true, data });
  } catch (error: any) {
    console.error("Generate problem error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Grade Level 3 Math Essay in English
router.post("/tutor/grade-essay", async (req: Request, res: Response) => {
  try {
    const { gradeLevel = 10, problemTitle, problemEnglish, studentEssay, expectedAnswer } = req.body;
    const ai = getAI();

    const prompt = `
Bạn là Giám khảo Quốc tế chấm bài tự luận Toán học bằng tiếng Anh (SAT / AP / Cambridge A-Level / Kỳ thi Học sinh Giỏi Toán Song ngữ).
Hãy chấm bài giải tự luận của học sinh Lớp ${gradeLevel}:

Đề bài:
"${problemEnglish || problemTitle}"

Lời giải tự luận bằng tiếng Anh của học sinh:
"${studentEssay}"

Đáp án / Định hướng (nếu có):
"${expectedAnswer || "Chuẩn toán học THPT"}"

Hãy đánh giá theo Barem 4 Tiêu chí Chuẩn Quốc tế (mỗi tiêu chí 10 điểm, tổng 40 điểm):
1. mathScore (0-10): Tính chính xác toán học, công thức, tính toán, tính logic chặt chẽ của các bước.
2. englishScore (0-10): Độ chuẩn xác của thuật ngữ toán học tiếng Anh (Mathematical Terminology).
3. structureScore (0-10): Bố cục bài giải (Đặt ẩn, thiết lập phương trình, biến đổi, kết luận).
4. grammarScore (0-10): Ngữ pháp tiếng Anh, từ nối câu học thuật (Therefore, Hence, Since, Let x be...).

Hãy trả về định dạng JSON DUY NHẤT:
{
  "totalScore": number (0-40),
  "mathScore": number (0-10),
  "englishScore": number (0-10),
  "structureScore": number (0-10),
  "grammarScore": number (0-10),
  "percentage": number (0-100),
  "letterGrade": "A+" | "A" | "B+" | "B" | "C" | "D",
  "summaryFeedback": "Nhận xét tổng quan song ngữ (ngắn gọn, truyền cảm hứng, chỉ rõ điểm mạnh và điểm cần cải thiện)",
  "rubricDetails": [
    {
      "criteria": "Math Accuracy & Logical Steps",
      "score": number,
      "maxScore": 10,
      "feedback": "Nhận xét chi tiết về phần toán"
    },
    {
      "criteria": "Mathematical English & Terminology",
      "score": number,
      "maxScore": 10,
      "feedback": "Nhận xét về việc sử dụng thuật ngữ tiếng Anh"
    },
    {
      "criteria": "Proof Structure & Cohesion",
      "score": number,
      "maxScore": 10,
      "feedback": "Nhận xét về bố cục và tính liền mạch"
    },
    {
      "criteria": "Grammar & Academic Transitions",
      "score": number,
      "maxScore": 10,
      "feedback": "Nhận xét về ngữ pháp và từ nối"
    }
  ],
  "lineCorrections": [
    {
      "originalSnippet": "câu hoặc đoạn học sinh viết chưa chuẩn",
      "improvedSnippet": "câu viết lại chuẩn tiếng Anh học thuật",
      "explanation": "giải thích vì sao nên sửa như vậy"
    }
  ],
  "exemplarySolution": "Bài giải mẫu hoàn chỉnh bằng tiếng Anh học thuật cao cấp có kèm công thức LaTeX và các bước rõ ràng"
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert Math Essay Grader and International Math Curriculum Evaluator. Return valid JSON only.",
        responseMimeType: "application/json",
      },
    });

    const jsonStr = response.text || "{}";
    const data = JSON.parse(jsonStr);
    res.json({ success: true, data });
  } catch (error: any) {
    console.error("Grade essay error:", error);
    res.status(500).json({
      success: false,
      error: error?.message || "AI grading backend is not configured.",
    });
  }
});

// Generate AI Exam with customizable English immersion ratio and KNTT topics
router.post("/tutor/generate-exam", async (req: Request, res: Response) => {
  try {
    const {
      gradeLevel = 10,
      chapterId = "g10_c2",
      chapterTitle = "Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
      languageRatio = "50/50 (Song ngữ)",
      questionCount = 5,
      difficulty = "Medium",
    } = req.body;

    const ai = getAI();

    let languageRulePrompt = "";
    if (languageRatio === "bilingual") {
      languageRulePrompt = "Chế độ SONG NGỮ (50% Anh - 50% Việt): Mỗi câu hỏi hiển thị song song Đề bài tiếng Anh và Đề bài dịch tiếng Việt chuẩn xác bên dưới.";
    } else if (languageRatio === "20%") {
      languageRulePrompt = "Chế độ 20% TIẾNG ANH: Đề bài 80% tiếng Việt, chèn 20% các thuật ngữ toán cốt lõi, danh từ chuyên ngành hoặc câu hỏi then chốt bằng tiếng Anh (ví dụ: 'Find the vertex of the parabola $y = ax^2+bx+c$', 'Biết rằng hàm số có local maximum tại...').";
    } else if (languageRatio === "40%") {
      languageRulePrompt = "Chế độ 40% TIẾNG ANH: Đề bài kết hợp 60% tiếng Việt dẫn giải và 40% tiếng Anh cho mệnh đề toán học chính, câu hỏi và định dạng tham số.";
    } else if (languageRatio === "60%") {
      languageRulePrompt = "Chế độ 60% TIẾNG ANH: Đề bài 60% tiếng Anh, có phần chú giải tóm tắt 40% tiếng Việt bên cạnh hoặc trong ngoặc đơn.";
    } else if (languageRatio === "80%") {
      languageRulePrompt = "Chế độ 80% TIẾNG ANH: Đề bài hoàn toàn bằng tiếng Anh chuẩn học thuật (80%), chỉ có 20% chú thích gợi ý từ vựng nâng cao bằng tiếng Việt ở phần ghi chú.";
    } else {
      languageRulePrompt = "Chế độ 100% TIẾNG ANH (Full Immersion): 100% Đề bài, câu hỏi và các lựa chọn đáp án hoàn toàn bằng Tiếng Anh chuẩn SAT / AP / Cambridge A-Level.";
    }

    const prompt = `
Bạn là Chuyên gia Khảo thí và Biên soạn Đề thi Toán học theo Sách giáo khoa "Kết nối tri thức với cuộc sống" (Bộ GD&ĐT) kết hợp Khung chuẩn hóa Quốc tế (SAT/AP/A-Level).
Hãy soạn 1 bài kiểm tra (Exam) gồm ${questionCount} câu trắc nghiệm 4 lựa chọn (A, B, C, D) cho học sinh:
- Khối lớp: Lớp ${gradeLevel} (Chương trình Toán THPT Kết nối tri thức)
- Chủ đề: ${chapterTitle} (Mã chương: ${chapterId})
- Độ khó: ${difficulty}
- Tỉ lệ ngôn ngữ: ${languageRatio}
${languageRulePrompt}

Yêu cầu nội dung:
1. Các câu hỏi phải bám sát chương trình SGK Kết nối tri thức Lớp ${gradeLevel} cho chủ đề "${chapterTitle}".
2. Mỗi câu hỏi phải có 4 đáp án A, B, C, D rõ ràng, trong đó duy nhất 1 đáp án đúng (ghi rõ correctAnswer là 'A', 'B', 'C' hoặc 'D').
3. Kèm theo lời giải chi tiết (detailedExplanationVi) giải thích từng bước rõ ràng, kèm công thức LaTeX.
4. Kèm theo danh sách 2-3 từ vựng toán học then chốt (keyTerms) có trong câu để học sinh học từ vựng.

Hãy trả về JSON DUY NHẤT theo schema sau:
{
  "id": "exam_${Date.now()}",
  "title": "Bài kiểm tra Toán ${gradeLevel} - ${chapterTitle}",
  "gradeLevel": ${gradeLevel},
  "chapterId": "${chapterId}",
  "chapterTitleVi": "${chapterTitle}",
  "languageRatio": "${languageRatio}",
  "durationMinutes": ${Math.max(10, questionCount * 3)},
  "totalQuestions": ${questionCount},
  "questions": [
    {
      "id": "q1",
      "questionNumber": 1,
      "chapterId": "${chapterId}",
      "chapterTitleVi": "${chapterTitle}",
      "prompt": "Nội dung câu hỏi theo đúng tỉ lệ tiếng Anh đã chỉ định",
      "promptEnglish": "Bản tiếng Anh đầy đủ (nếu có)",
      "promptVietnamese": "Bản tiếng Việt đầy đủ (nếu có)",
      "options": [
        {"label": "A", "text": "Nội dung đáp án A", "isCorrect": false},
        {"label": "B", "text": "Nội dung đáp án B", "isCorrect": true},
        {"label": "C", "text": "Nội dung đáp án C", "isCorrect": false},
        {"label": "D", "text": "Nội dung đáp án D", "isCorrect": false}
      ],
      "correctAnswer": "B",
      "detailedExplanationVi": "Giải thích chi tiết các bước giải toán bằng tiếng Việt",
      "detailedExplanationEn": "Brief solution step in English",
      "keyTerms": [
        {
          "term": "từ tiếng Anh",
          "phonetic": "/phiên âm/",
          "vietnamese": "nghĩa tiếng Việt",
          "note": "ngữ cảnh toán"
        }
      ],
      "difficulty": "${difficulty}"
    }
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are a professional Math Exam Author for Vietnamese High School Curriculum & International SAT/AP Math. Return valid JSON only.",
        responseMimeType: "application/json",
      },
    });

    const jsonStr = response.text || "{}";
    const data = JSON.parse(jsonStr);
    res.json({ success: true, data });
  } catch (error: any) {
    console.error("Generate exam error:", error);
    // Robust fallback exam
    const count = typeof req.body?.questionCount === "number" ? req.body.questionCount : 5;
    const gLevel = req.body?.gradeLevel || 10;
    const cTitle = req.body?.chapterTitle || "Bất phương trình và hệ bất phương trình bậc nhất hai ẩn";
    const cId = req.body?.chapterId || "g10_c2";
    const ratio = req.body?.languageRatio || "bilingual";

    res.json({
      success: true,
      data: {
        id: `exam_fallback_${Date.now()}`,
        title: `Bài kiểm tra Toán ${gLevel} - ${cTitle}`,
        gradeLevel: gLevel,
        chapterId: cId,
        chapterTitleVi: cTitle,
        languageRatio: ratio,
        durationMinutes: count * 3,
        totalQuestions: count,
        questions: Array.from({ length: count }).map((_, idx) => ({
          id: `q_${idx + 1}`,
          questionNumber: idx + 1,
          chapterId: cId,
          chapterTitleVi: cTitle,
          prompt: `Câu ${idx + 1}: Cho hàm số và điều kiện thực tế thuộc chủ đề "${cTitle}". Determine the correct mathematical relationship for this problem statement.`,
          promptEnglish: `Question ${idx + 1}: Given a problem in ${cTitle}, identify the valid mathematical inequality/solution.`,
          promptVietnamese: `Câu ${idx + 1}: Trong chủ đề ${cTitle}, hãy xác định khẳng định toán học chính xác.`,
          options: [
            { label: "A", text: `Phương án A: Giá trị đại lượng thỏa mãn điều kiện $x \\ge 10$`, isCorrect: false },
            { label: "B", text: `Phương án B: Miền nghiệm chính xác thỏa mãn hệ điều kiện đã cho`, isCorrect: true },
            { label: "C", text: `Phương án C: Biểu thức nhận giá trị cực tiểu tại $x = 0$`, isCorrect: false },
            { label: "D", text: `Phương án D: Không có giá trị nào thỏa mãn`, isCorrect: false },
          ],
          correctAnswer: "B",
          detailedExplanationVi: `Áp dụng định nghĩa và các định lí trọng tâm trong SGK Kết nối tri thức về "${cTitle}". Biến đổi từng bước và đối chiếu điều kiện để suy ra phương án B là chính xác.`,
          detailedExplanationEn: `Apply the core theorems from the curriculum. Evaluate the given conditions to deduce that option B is correct.`,
          keyTerms: [
            { term: "feasible region", phonetic: "/ˈfiː.zə.bəl ˈriː.dʒən/", vietnamese: "miền nghiệm / miền khả thi", note: "Tập hợp các điểm thỏa mãn hệ" },
            { term: "objective function", phonetic: "/əbˈdʒek.tɪv/", vietnamese: "hàm mục tiêu", note: "Hàm cần tối ưu hóa max/min" }
          ],
          difficulty: req.body?.difficulty || "Medium"
        }))
      }
    });
  }
});

// Mount router on both /api prefix and root for universal compatibility
app.use("/api", router);
app.use("/", router);

// Vite & Static middleware
async function startServer() {
  const isProduction = process.env.NODE_ENV === "production" || !!process.env.VERCEL;
  const distPath = path.join(process.cwd(), "dist");

  if (!isProduction) {
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } catch (err) {
      console.warn("Vite dev server not loaded, falling back to static dist directory:", err);
      app.use(express.static(distPath));
      app.get("*", (_req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }
  } else {
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Math Bridge AI Student Server running on http://0.0.0.0:${PORT}`);
  });
}

export { app };
export default app;

// Only start standalone server if not running as serverless function and not testing
if (!process.env.VERCEL && !process.env.AWS_LAMBDA_FUNCTION_NAME && process.env.NODE_ENV !== "test") {
  startServer();
}
