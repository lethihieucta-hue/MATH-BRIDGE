import React, { useState, useRef } from 'react';
import { useAppStore } from '../../lib/store';
import { Question } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { hasApiKey, generateExamTestFromDescriptionAi } from '../../lib/geminiService';
import { FULL_QUESTION_BANK } from '../../lib/questionBankData';
import { FULL_LESSONS } from '../../lib/curriculumData';
import { OnlineExamRoom, OnlineExamData } from '../online_exam/OnlineExamRoom';
import {
  Sparkles,
  Printer,
  FileDown,
  Copy,
  CheckCircle2,
  Loader2,
  FileText,
  Share2,
  Globe,
  ExternalLink,
  Check,
  X,
  PlayCircle,
  Clock,
  Send,
  Eye,
} from 'lucide-react';

interface GeneratedTestState {
  title: string;
  title_en: string;
  duration: number;
  englishRatio: number;
  instructions_vi: string;
  instructions_en: string;
  questions: Question[];
}

export const TestBuilder: React.FC = () => {
  const { showNotification, selectedGrade } = useAppStore();
  const printAreaRef = useRef<HTMLDivElement>(null);

  // Single description prompt state
  const [promptDescription, setPromptDescription] = useState(
    `Tạo đề kiểm tra 15 phút về Giá trị lớn nhất, giá trị nhỏ nhất của hàm số và bài toán tối ưu hoá thực tế lớp 12, gồm 10 câu, tỷ lệ tiếng Anh 50%.`
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [includeAnswerKey, setIncludeAnswerKey] = useState(true);
  const [includeCandidateBox, setIncludeCandidateBox] = useState(true);

  // Online Exam Modal & Live taking state
  const [showOnlineExamModal, setShowOnlineExamModal] = useState(false);
  const [onlineExamLink, setOnlineExamLink] = useState('');
  const [onlineExamCode, setOnlineExamCode] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [googleSheetUrl, setGoogleSheetUrl] = useState('https://docs.google.com/spreadsheets/d/1_AI_Math_Bridge_Scores/edit');
  const [googleSheetWebhook, setGoogleSheetWebhook] = useState('');
  const [isLiveExamStudentView, setIsLiveExamStudentView] = useState(false);

  // Quick Preset Chips
  const PRESET_CHIPS = [
    {
      label: `Đề 15p: GTLN, GTNN & Tối ưu (10 câu - 50% TA)`,
      text: `Tạo đề kiểm tra 15 phút về Giá trị lớn nhất, giá trị nhỏ nhất của hàm số và bài toán tối ưu hoá thực tế lớp 12, gồm 10 câu, tỷ lệ tiếng Anh 50%.`,
    },
    {
      label: `Đề 1 tiết: Lũy thừa, Mũ & Logarit (100% TA)`,
      text: `Tạo bài kiểm tra 1 tiết 45 phút về Hàm số Lũy thừa, Mũ và Logarit lớp ${selectedGrade}, gồm 15 câu chuẩn cấu trúc quốc tế hoàn toàn 100% bằng Tiếng Anh.`,
    },
    {
      label: `Đề 15p: Dãy số & Cấp số cộng (50% TA)`,
      text: `Tạo đề kiểm tra 15 phút về Dãy số và Cấp số cộng lớp 11, gồm 10 câu (6 câu trắc nghiệm TN, 2 câu đúng sai Đ/S, 2 câu trả lời ngắn TLN), tỷ lệ tiếng Anh 50%.`,
    },
    {
      label: `Đề 45p: Khảo sát hàm số & Tiệm cận (60% TA)`,
      text: `Tạo đề kiểm tra 1 tiết 45 phút về Tính đơn điệu, Cực trị và Đường tiệm cận của đồ thị hàm số lớp 12, gồm 10 câu (6 TN, 2 Đ/S, 2 TLN), tỷ lệ tiếng Anh 60%.`,
    },
    {
      label: `Đề 45p: Vectơ & Hệ toạ độ Oxyz (40% TA)`,
      text: `Tạo đề kiểm tra 45 phút về Vectơ trong không gian và Hệ toạ độ Oxyz lớp 12, gồm 10 câu, tỷ lệ tiếng Anh 40%.`,
    },
  ];

  // Match the teacher prompt to the canonical KNTT lesson/type IDs.
  // IMPORTANT: a specific topic is "fail-closed": when that topic has no authored static
  // questions yet, return an empty list instead of borrowing questions from another lesson.
  const normalizeSearchText = (value: string) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const expandPromptAliases = (value: string) => {
    let normalized = normalizeSearchText(value);
    const aliases: Array<[RegExp, string]> = [
      [/\bgtln\b/g, ' gia tri lon nhat '],
      [/\bgtnn\b/g, ' gia tri nho nhat '],
      [/\bbbt\b/g, ' bang bien thien '],
      [/\boxyz\b/g, ' he toa do trong khong gian '],
      [/\bcs cong\b/g, ' cap so cong '],
      [/\bcs nhan\b/g, ' cap so nhan '],
    ];
    aliases.forEach(([pattern, replacement]) => {
      normalized = normalized.replace(pattern, replacement);
    });
    return normalized.replace(/\s+/g, ' ').trim();
  };

  const SEARCH_STOP_WORDS = new Set([
    'bai', 'lop', 'khoi', 'tao', 'de', 'kiem', 'tra', 'phut', 'cau', 'toan', 've',
    'va', 'cua', 'cho', 'gom', 'ti', 'le', 'tieng', 'anh', 'mot', 'cac', 'dang',
    'theo', 'phan', 'chuong', 'trong', 'bang', 'duoc', 'hoc', 'sinh',
  ]);

  const filterQuestionsFromPrompt = (prompt: string, grade: number): Question[] => {
    const normalizedPrompt = expandPromptAliases(prompt);
    const promptTokens = new Set(
      normalizedPrompt.split(' ').filter((token) => token.length >= 3 && !SEARCH_STOP_WORDS.has(token))
    );

    const contentTokens = (value: string) =>
      value.split(' ').filter((token) => token.length >= 3 && !SEARCH_STOP_WORDS.has(token));

    const scoreAgainst = (candidate: string): number => {
      const candidateTokens = Array.from(new Set(contentTokens(candidate)));
      const overlap = candidateTokens.filter((token) => promptTokens.has(token));
      // A single shared word such as "chính" or "hợp" must never be enough to route a lesson.
      if (overlap.length < 2) return 0;
      return overlap.reduce((sum, token) => sum + (token.length >= 7 ? 3 : 2), 0);
    };

    const gradeLessons = FULL_LESSONS.filter((lesson) => lesson.chapter_id?.startsWith(`chap-${grade}-`));
    const scored = gradeLessons.map((lesson) => {
      const lessonTitle = normalizeSearchText(lesson.title_vi.replace(/^Bài\s+\d+\.\s*/i, ''));
      const typeTitles = (lesson.types || []).map((type) => normalizeSearchText(type.title_vi));
      const lessonCoreTokens = contentTokens(lessonTitle);
      const lessonCore = lessonCoreTokens.join(' ');
      const promptCore = contentTokens(normalizedPrompt).join(' ');

      let score = scoreAgainst(lessonTitle);
      if (lessonCoreTokens.length >= 2 && lessonTitle.length >= 5 && normalizedPrompt.includes(lessonTitle)) score = Math.max(score, 12);
      if (lessonCoreTokens.length >= 2 && (promptCore.includes(lessonCore) || lessonCore.includes(promptCore))) score = Math.max(score, 11);
      for (const typeTitle of typeTitles) {
        score = Math.max(score, scoreAgainst(typeTitle));
        if (typeTitle.length >= 8 && normalizedPrompt.includes(typeTitle)) score = Math.max(score, 10);
      }
      return { lesson, score };
    });

    const bestScore = Math.max(0, ...scored.map((item) => item.score));
    const hasSpecificTopic = bestScore >= 4;

    if (hasSpecificTopic) {
      // Keep all lessons that are genuinely close to the best match. This supports prompts such
      // as "Nguyên hàm và tích phân" without opening the door to unrelated chapters.
      const threshold = Math.max(4, bestScore - 2);
      const allowedTypeIds = new Set(
        scored
          .filter((item) => item.score >= threshold)
          .flatMap((item) => (item.lesson.types || []).map((type) => type.id))
      );
      return FULL_QUESTION_BANK.filter((q) => !!q.type_id && allowedTypeIds.has(q.type_id));
    }

    // A truly generic request such as "đề Toán lớp 11" may use any question from that grade.
    // It is the only case where grade-wide fallback is allowed.
    return FULL_QUESTION_BANK.filter((q) => q.topic_id?.startsWith(`top-${grade}-`));
  };

  // Initial generated test default state (10 questions on GTLN & GTNN)
  const [currentTest, setCurrentTest] = useState<GeneratedTestState>(() => {
    const initialList = FULL_QUESTION_BANK.filter((q) => q.topic_id === 'top-12-1-2');
    return {
      title: `ĐỀ KIỂM TRA 15 PHÚT: GIÁ TRỊ LỚN NHẤT VÀ NHỎ NHẤT CỦA HÀM SỐ`,
      title_en: `15-MINUTE TEST: MAXIMUM AND MINIMUM VALUES OF FUNCTIONS`,
      duration: 15,
      englishRatio: 50,
      instructions_vi: `Thời gian làm bài: 15 phút. Học sinh làm bài trực tiếp vào đề thi. Không sử dụng tài liệu.`,
      instructions_en: `Time allowed: 15 minutes. Write your answers directly on this paper.`,
      questions: initialList.slice(0, 10),
    };
  });

  // Generate Test via AI or Question Bank Fallback
  const handleGenerateTest = async () => {
    if (!promptDescription.trim()) {
      showNotification('⚠️ Vui lòng nhập mô tả yêu cầu tạo bài test');
      return;
    }

    setIsGenerating(true);

    // Parse parameters from prompt text
    const lowerPrompt = promptDescription.toLowerCase();
    let detectedGrade = selectedGrade;
    if (lowerPrompt.includes('lớp 12') || lowerPrompt.includes('khối 12') || lowerPrompt.includes('grade 12')) detectedGrade = 12;
    else if (lowerPrompt.includes('lớp 11') || lowerPrompt.includes('khối 11') || lowerPrompt.includes('grade 11')) detectedGrade = 11;
    else if (lowerPrompt.includes('lớp 10') || lowerPrompt.includes('khối 10') || lowerPrompt.includes('grade 10')) detectedGrade = 10;

    let targetCount = 10;
    const matchCount = lowerPrompt.match(/(\d+)\s*(câu|bài|questions)/i);
    if (matchCount && matchCount[1]) {
      targetCount = Math.min(30, Math.max(4, parseInt(matchCount[1], 10)));
    }

    let detectedDuration = 15;
    const matchDuration = lowerPrompt.match(/(\d+)\s*(phút|mins|m|p)/i);
    if (matchDuration && matchDuration[1]) {
      detectedDuration = parseInt(matchDuration[1], 10);
    } else if (lowerPrompt.includes('1 tiết') || lowerPrompt.includes('45')) {
      detectedDuration = 45;
    }

    let detectedRatio = 50;
    const matchRatio = lowerPrompt.match(/(\d+)\s*%/);
    if (matchRatio && matchRatio[1]) {
      detectedRatio = parseInt(matchRatio[1], 10);
    } else if (lowerPrompt.includes('100%') || lowerPrompt.includes('hoàn toàn bằng tiếng anh') || lowerPrompt.includes('thuần tiếng anh') || lowerPrompt.includes('pure english')) {
      detectedRatio = 100;
    }

    // Try Gemini API if key is set
    if (hasApiKey()) {
      showNotification('🤖 Gemini AI đang phân tích yêu cầu và soạn bài test chuẩn GDPT 2018...');
      try {
        const result = await generateExamTestFromDescriptionAi(promptDescription, detectedGrade);
        if (result && result.success && result.content) {
          const jsonMatch = result.content.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const data = JSON.parse(jsonMatch[0]);
            if (data.questions && data.questions.length > 0) {
              const formattedQuestions: Question[] = data.questions.map((q: any, idx: number) => ({
                id: `ai-test-q-${Date.now()}-${idx + 1}`,
                topic_id: `top-custom-${detectedGrade}`,
                question_type: q.question_type || 'MCQ',
                format_type: q.format_type || 'TN',
                difficulty: 'MEDIUM',
                language_level: 2,
                question_vi: q.question_vi || '',
                question_en: q.question_en || '',
                options: q.options || [],
                solution_vi: q.solution_vi || 'Lời giải chi tiết',
                solution_en: q.solution_en || 'Detailed solution',
                correct_answer: q.correct_answer || 'A',
                math_skill: data.test_title || 'Toán học',
                english_skill: data.test_title_en || 'Mathematics',
                status: 'PUBLISHED',
                created_by: 'usr-teacher-1',
              }));

              setCurrentTest({
                title: data.test_title || `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: TOÁN LỚP ${detectedGrade}`,
                title_en: data.test_title_en || `${detectedDuration}-MINUTE TEST: MATHEMATICS GRADE ${detectedGrade}`,
                duration: data.duration_minutes || detectedDuration,
                englishRatio: data.english_ratio || detectedRatio,
                instructions_vi: data.instructions_vi || `Thời gian làm bài: ${detectedDuration} phút. Học sinh làm bài trực tiếp vào đề.`,
                instructions_en: data.instructions_en || `Time allowed: ${detectedDuration} minutes. Write your answers directly on this paper.`,
                questions: formattedQuestions,
              });

              showNotification(`✨ AI Gemini đã tạo thành công đề thi "${data.test_title || 'Mới'}" gồm ${formattedQuestions.length} câu!`);
              setIsGenerating(false);
              return;
            }
          }
        }
      } catch (err) {
        console.warn('Gemini API failed in TestBuilder, falling back to Question Bank:', err);
      }
    }

    // Fallback: Pick accurately filtered questions by topic from Question Bank
    const candidateQuestions = filterQuestionsFromPrompt(promptDescription, detectedGrade);
    
    // Never fill a specific topic with questions from another lesson/grade just to hit a count.
    // If the static bank is short, returning fewer correct questions is safer than a full but wrong test.
    const selected: Question[] = candidateQuestions.slice(0, targetCount);

    // Extract title from prompt
    let titleVi = `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: TOÁN LỚP ${detectedGrade}`;
    let titleEn = `${detectedDuration}-MINUTE TEST: MATHEMATICS GRADE ${detectedGrade}`;
    if (lowerPrompt.includes('gtln') || lowerPrompt.includes('gtnn') || lowerPrompt.includes('lớn nhất') || lowerPrompt.includes('tối ưu')) {
      titleVi = `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: GIÁ TRỊ LỚN NHẤT VÀ NHỎ NHẤT CỦA HÀM SỐ`;
      titleEn = `${detectedDuration}-MINUTE TEST: MAXIMUM AND MINIMUM VALUES OF FUNCTIONS`;
    } else if (lowerPrompt.includes('logarit') || lowerPrompt.includes('mũ') || lowerPrompt.includes('lũy thừa')) {
      titleVi = `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: HÀM SỐ LŨY THỪA, MŨ VÀ LOGARIT`;
      titleEn = `${detectedDuration}-MINUTE TEST: EXPONENTIAL AND LOGARITHMIC FUNCTIONS`;
    } else if (lowerPrompt.includes('tiệm cận')) {
      titleVi = `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ`;
      titleEn = `${detectedDuration}-MINUTE TEST: ASYMPTOTES OF FUNCTION GRAPHS`;
    } else if (lowerPrompt.includes('đơn điệu') || lowerPrompt.includes('cực trị') || lowerPrompt.includes('khảo sát')) {
      titleVi = `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ CỦA HÀM SỐ`;
      titleEn = `${detectedDuration}-MINUTE TEST: MONOTONICITY AND EXTREMA OF FUNCTIONS`;
    } else if (lowerPrompt.includes('vectơ') || lowerPrompt.includes('oxyz')) {
      titleVi = `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: VECTƠ VÀ HỆ TOẠ ĐỘ TRONG KHÔNG GIAN`;
      titleEn = `${detectedDuration}-MINUTE TEST: VECTORS AND 3D COORDINATE SYSTEMS`;
    } else if (lowerPrompt.includes('dãy số') || lowerPrompt.includes('cấp số cộng')) {
      titleVi = `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: DÃY SỐ VÀ CẤP SỐ CỘNG`;
      titleEn = `${detectedDuration}-MINUTE TEST: SEQUENCES AND ARITHMETIC PROGRESSIONS`;
    }

    setCurrentTest({
      title: titleVi,
      title_en: titleEn,
      duration: detectedDuration,
      englishRatio: detectedRatio,
      instructions_vi: `Thời gian làm bài: ${detectedDuration} phút. Học sinh làm bài trực tiếp vào đề thi. Không sử dụng tài liệu.`,
      instructions_en: `Time allowed: ${detectedDuration} minutes. Write your answers directly on this test paper.`,
      questions: selected,
    });

    showNotification(selected.length < targetCount
      ? `⚠️ Ngân hàng tĩnh hiện có ${selected.length}/${targetCount} câu đúng chuyên đề. Hệ thống không chèn câu sai bài để bù số lượng.`
      : `✨ Đã biên soạn bài test đúng chuyên đề (${selected.length} câu, ${detectedRatio}% Tiếng Anh)!`);
    setIsGenerating(false);
  };

  // Export: Print PDF
  const handlePrint = () => {
    window.print();
  };

  // Export: Online Exam Share Link
  const handleExportOnlineExam = () => {
    const examId = `exam-${Date.now()}`;
    const examCode = `MB-${Math.floor(1000 + Math.random() * 9000)}`;

    const examPayload: OnlineExamData = {
      id: examId,
      title: currentTest.title,
      title_en: currentTest.title_en,
      duration: currentTest.duration,
      englishRatio: currentTest.englishRatio,
      instructions_vi: currentTest.instructions_vi,
      instructions_en: currentTest.instructions_en,
      questions: currentTest.questions,
      created_at: new Date().toISOString(),
      googleSheetUrl: googleSheetUrl || 'https://docs.google.com/spreadsheets/d/1_AI_Math_Bridge_Scores/edit',
      googleSheetWebhook: googleSheetWebhook || '',
    };

    // Save to localStorage so link can be opened immediately on this machine/browser
    try {
      localStorage.setItem(`mb_online_exam_${examId}`, JSON.stringify(examPayload));
    } catch (e) {
      console.warn('Failed to save online exam to localStorage:', e);
    }

    const fullUrl = `${window.location.origin}${window.location.pathname}?onlineExamId=${examId}`;
    setOnlineExamLink(fullUrl);
    setOnlineExamCode(examCode);
    setShowOnlineExamModal(true);

    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
      showNotification('🚀 Đã tạo phòng thi online & sao chép liên kết!');
    }
  };

  // Export: Copy to Word Clipboard
  const handleCopyWord = () => {
    const isPureEnglish = currentTest.englishRatio >= 80;
    let content = `=========================================================\n`;
    content += `TRƯỜNG THPT CHÂU THÀNH A\n`;
    content += `TỔ TOÁN\n`;
    content += `${isPureEnglish ? currentTest.title_en.toUpperCase() : currentTest.title.toUpperCase()}\n`;
    content += `Thời gian / Time: ${currentTest.duration} phút | Tỷ lệ tiếng Anh: ${currentTest.englishRatio}%\n`;
    content += `=========================================================\n\n`;

    if (includeCandidateBox) {
      if (isPureEnglish) {
        content += `Student Full Name: ..................................................... Class: .......... Candidate ID: ............\n`;
        content += `Score: [      ] | Teacher's Feedback: ........................................................\n\n`;
      } else {
        content += `Họ và tên học sinh: ..................................................... Lớp: .......... SBD: ............\n`;
        content += `Điểm số: [      ] | Lời phê của giáo viên: ........................................................\n\n`;
      }
    }

    currentTest.questions.forEach((q, idx) => {
      if (isPureEnglish) {
        content += `Question ${idx + 1} (${q.format_type || 'MCQ'}): ${q.question_en || q.question_vi}\n`;
        if (q.options && q.options.length > 0) {
          q.options.forEach((opt) => {
            content += `   ${opt.option_key}. ${opt.content_en || opt.content_vi}\n`;
          });
        }
      } else {
        content += `Câu ${idx + 1} (${q.format_type || 'TN'}): ${q.question_vi}\n`;
        if (q.question_en && currentTest.englishRatio >= 40) {
          content += `   (En: ${q.question_en})\n`;
        }
        if (q.options && q.options.length > 0) {
          q.options.forEach((opt) => {
            content += `   ${opt.option_key}. ${opt.content_vi}\n`;
          });
        }
      }
      content += `\n`;
    });

    if (includeAnswerKey) {
      content += `=========================================================\n`;
      content += `BẢNG ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM (ANSWER KEY)\n`;
      content += `=========================================================\n`;
      currentTest.questions.forEach((q, idx) => {
        content += `Câu ${idx + 1}: ${q.correct_answer || 'Xem lời giải'}\n`;
      });
    }

    navigator.clipboard.writeText(content);
    showNotification('📋 Đã sao chép nội dung bài test vào bộ nhớ tạm (Clipboard)!');
  };

  // Export: Download Word File (.doc)
  const handleDownloadDoc = () => {
    const isPureEnglish = currentTest.englishRatio >= 80;
    let docContent = `<html><head><meta charset='utf-8'><title>${currentTest.title}</title>
    <style>
      body { font-family: 'Times New Roman', serif; line-height: 1.5; padding: 20px; font-size: 14pt; }
      .header-table { width: 100%; margin-bottom: 20px; }
      .candidate-box { border: 1px solid #000; padding: 10px; margin-bottom: 20px; }
      .question-item { margin-bottom: 15px; }
      .key-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
      .key-table th, .key-table td { border: 1px solid #000; padding: 6px; text-align: center; }
    </style>
    </head><body>`;

    docContent += `<table class='header-table'>
      <tr>
        <td style='text-align:left; font-weight:bold;'>TRƯỜNG THPT CHÂU THÀNH A<br/>TỔ TOÁN</td>
        <td style='text-align:right; font-weight:bold;'>ĐỀ KIỂM TRA ĐÁNH GIÁ GDPT 2018<br/>Thời gian: ${currentTest.duration} phút</td>
      </tr>
    </table>`;

    docContent += `<h2 style='text-align:center; text-transform:uppercase;'>${isPureEnglish ? currentTest.title_en : currentTest.title}</h2>`;
    docContent += `<p style='text-align:center; font-style:italic;'>${isPureEnglish ? currentTest.instructions_en : currentTest.instructions_vi}</p>`;

    if (includeCandidateBox) {
      if (isPureEnglish) {
        docContent += `<div class='candidate-box'>
          <p>Student Name: ............................................................................ Class: ................. Candidate ID: .................</p>
          <p>Score: ................................... Teacher's Feedback: ................................................................</p>
        </div>`;
      } else {
        docContent += `<div class='candidate-box'>
          <p>Họ và tên: ............................................................................ Lớp: ................. SBD: .................</p>
          <p>Điểm số: ................................... Lời phê của Thầy/Cô: ................................................................</p>
        </div>`;
      }
    }

    currentTest.questions.forEach((q, idx) => {
      docContent += `<div class='question-item'>`;
      if (isPureEnglish) {
        docContent += `<p><strong>Question ${idx + 1} (${q.format_type || 'MCQ'}):</strong> ${q.question_en || q.question_vi}</p>`;
      } else {
        docContent += `<p><strong>Câu ${idx + 1} (${q.format_type || 'TN'}):</strong> ${q.question_vi}</p>`;
        if (q.question_en && currentTest.englishRatio >= 40) {
          docContent += `<p style='color: #0d9488; font-style: italic; margin-left: 20px;'>En: ${q.question_en}</p>`;
        }
      }
      if (q.options && q.options.length > 0) {
        docContent += `<ul>`;
        q.options.forEach((opt) => {
          docContent += `<li><strong>${opt.option_key}.</strong> ${isPureEnglish ? (opt.content_en || opt.content_vi) : (opt.content_vi || opt.content_en)}</li>`;
        });
        docContent += `</ul>`;
      }
      docContent += `</div>`;
    });

    if (includeAnswerKey) {
      docContent += `<h3 style='margin-top:30px; text-align:center;'>BẢNG ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM</h3>`;
      docContent += `<table class='key-table'><tr><th>Câu</th><th>Dạng</th><th>Đáp án đúng</th></tr>`;
      currentTest.questions.forEach((q, idx) => {
        docContent += `<tr><td>${idx + 1}</td><td>${q.format_type || 'TN'}</td><td><strong>${q.correct_answer || 'Xem giải'}</strong></td></tr>`;
      });
      docContent += `</table>`;
    }

    docContent += `</body></html>`;

    const blob = new Blob(['\ufeff' + docContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentTest.title.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('📥 Đã tải file Microsoft Word (.doc) về máy!');
  };

  // If teacher clicked "Xem thử phòng thi học sinh"
  if (isLiveExamStudentView) {
    return (
      <OnlineExamRoom
        examData={{
          id: 'preview-exam',
          title: currentTest.title,
          title_en: currentTest.title_en,
          duration: currentTest.duration,
          englishRatio: currentTest.englishRatio,
          instructions_vi: currentTest.instructions_vi,
          instructions_en: currentTest.instructions_en,
          questions: currentTest.questions,
        }}
        onExit={() => setIsLiveExamStudentView(false)}
      />
    );
  }

  // Separate questions by 4 GDPT 2018 formats
  const tnList = currentTest.questions.filter((q) => q.format_type === 'TN' || q.question_type === 'MCQ');
  const dsList = currentTest.questions.filter((q) => q.format_type === 'DS' || q.question_type === 'TRUE_FALSE');
  const tlnList = currentTest.questions.filter((q) => q.format_type === 'TLN' || q.question_type === 'SHORT');
  const tlList = currentTest.questions.filter((q) => q.format_type === 'TL' || q.question_type === 'ESSAY');

  const isPureEnglish = currentTest.englishRatio >= 80;

  return (
    <div className="w-full bg-[#F3F4F8] min-h-screen text-slate-900 font-sans pb-24">
      {/* Container */}
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 py-6 space-y-6">
        
        {/* ========================================================================= */}
        {/* KHUNG MÔ TẢ ĐỀ DUY NHẤT VỚI AI (Single Prompt Generator Box) */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Tạo Bài Test Tự Động Bằng AI
                </h1>
                <p className="text-xs text-slate-500 font-medium">
                  Chỉ cần 1 khung mô tả đề bài: Nội dung kiến thức, Số lượng câu, Thời gian làm bài & Tỷ lệ % Tiếng Anh
                </p>
              </div>
            </div>

            <span className="text-xs font-bold text-violet-700 bg-violet-50 px-3 py-1 rounded-full border border-violet-200 self-start sm:self-auto font-mono">
              Chuẩn GDPT 2018 · Lớp {selectedGrade}
            </span>
          </div>

          {/* Quick Preset Suggestion Chips */}
          <div className="space-y-1.5">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Gợi ý mẫu đề nhanh (Nhấn để chọn):
            </p>
            <div className="flex flex-wrap gap-2">
              {PRESET_CHIPS.map((chip, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPromptDescription(chip.text)}
                  className="px-3 py-1.5 bg-slate-50 hover:bg-violet-50 hover:text-violet-700 text-slate-700 rounded-xl text-xs font-medium border border-slate-200 transition text-left cursor-pointer"
                >
                  ⚡ {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Textarea */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider">
              Mô tả yêu cầu bài test của giáo viên:
            </label>
            <textarea
              rows={3}
              value={promptDescription}
              onChange={(e) => setPromptDescription(e.target.value)}
              placeholder="Ví dụ: Tạo đề kiểm tra 15 phút về Giá trị lớn nhất, giá trị nhỏ nhất của hàm số và bài toán tối ưu hoá thực tế lớp 12, gồm 10 câu, tỷ lệ tiếng Anh 50%."
              className="w-full p-4 bg-slate-50 border border-slate-300 rounded-2xl text-sm font-medium text-slate-900 focus:bg-white focus:border-violet-600 focus:ring-2 focus:ring-violet-200 outline-none transition resize-y shadow-inner"
            />
          </div>

          {/* Action Button */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1 text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" /> Tự động phân bổ 4 dạng thức
              </span>
              <span className="flex items-center gap-1 text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" /> Công thức Toán LaTeX chuẩn
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleGenerateTest}
                disabled={isGenerating}
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-sm font-black rounded-2xl shadow-lg shadow-violet-500/25 transition flex items-center gap-2 transform active:scale-98 disabled:opacity-50 cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                    <span>AI Đang Soạn Đề...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>AI Tạo Bài Test Ngay</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PREVIEW KHỔ GIẤY A4 CHUẨN IN ẤN & EXPORT SIDEBAR */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left A4 Document Preview - 9 cols */}
          <div className="lg:col-span-9 space-y-3">
            <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-violet-600" />
                Xem trước đề thi A4
                <span className="font-normal text-slate-400">
                  ({currentTest.questions.length} câu hỏi · {currentTest.duration} phút · {currentTest.englishRatio}% Tiếng Anh)
                </span>
              </span>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeCandidateBox}
                    onChange={(e) => setIncludeCandidateBox(e.target.checked)}
                    className="w-4 h-4 text-violet-600 rounded"
                  />
                  <span>Khung tên học sinh</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeAnswerKey}
                    onChange={(e) => setIncludeAnswerKey(e.target.checked)}
                    className="w-4 h-4 text-violet-600 rounded"
                  />
                  <span>Bảng đáp án</span>
                </label>
              </div>
            </div>

            {/* A4 Sheet Container */}
            <div
              ref={printAreaRef}
              className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-lg font-serif text-slate-900 leading-relaxed text-sm min-h-[900px] select-text"
              id="printable-test-area"
            >
              {/* Paper Header */}
              <div className="border-b-2 border-slate-900 pb-4 mb-6">
                <div className="flex justify-between items-start text-xs font-sans font-bold uppercase tracking-wider">
                  <div>
                    <div>TRƯỜNG THPT CHÂU THÀNH A</div>
                    <div className="text-violet-700">TỔ TOÁN</div>
                  </div>
                  <div className="text-right">
                    <div>ĐỀ KIỂM TRA ĐÁNH GIÁ GDPT 2018</div>
                    <div className="text-slate-500 font-normal">
                      Thời gian: {currentTest.duration} phút / mins
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mt-5 mb-2">
                  <h2 className="text-xl sm:text-2xl font-black font-sans uppercase text-slate-900 tracking-tight">
                    {isPureEnglish ? currentTest.title_en : currentTest.title}
                  </h2>
                  {!isPureEnglish && currentTest.title_en && currentTest.englishRatio >= 30 && (
                    <p className="text-xs font-sans italic text-slate-500 uppercase mt-0.5">
                      {currentTest.title_en}
                    </p>
                  )}
                  <p className="text-xs italic text-slate-600 mt-2 font-sans">
                    {isPureEnglish ? currentTest.instructions_en : currentTest.instructions_vi}
                  </p>
                </div>
              </div>

              {/* Student Candidate Information Box */}
              {includeCandidateBox && (
                <div className="border border-slate-400 rounded-2xl p-3 sm:p-4 mb-6 font-sans text-xs space-y-2 bg-slate-50/50">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <div className="sm:col-span-7">
                      Họ và tên học sinh: ............................................................................
                    </div>
                    <div className="sm:col-span-2">
                      Lớp: .....................
                    </div>
                    <div className="sm:col-span-3">
                      Số báo danh (SBD): ....................
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-1">
                    <div className="border border-slate-400 rounded-lg px-4 py-1.5 font-bold">
                      Điểm số: [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]
                    </div>
                    <div className="flex-1">
                      Lời phê của Thầy/Cô: ................................................................................................................................
                    </div>
                  </div>
                </div>
              )}

              {/* Document Body: 4 GDPT 2018 Formats */}
              <div className="space-y-6">
                
                {/* PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN */}
                {tnList.length > 0 && (
                  <div className="space-y-4">
                    <div className="font-sans font-bold text-xs sm:text-sm text-violet-950 uppercase border-b border-slate-200 pb-1">
                      {isPureEnglish
                        ? `SECTION I. MULTIPLE CHOICE QUESTIONS (${tnList.length} QUESTIONS)`
                        : `PHẦN I. CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (${tnList.length} CÂU)`}
                    </div>
                    {tnList.map((q, idx) => (
                      <div key={q.id || idx} className="space-y-2">
                        <div>
                          <span className="font-sans font-bold text-slate-900 mr-1.5">
                            {isPureEnglish ? `Question ${idx + 1}:` : `Câu ${idx + 1}:`}
                          </span>
                          <MathRenderer content={isPureEnglish ? (q.question_en || q.question_vi) : q.question_vi} inline />
                        </div>
                        {!isPureEnglish && q.question_en && currentTest.englishRatio >= 40 && (
                          <div className="text-xs text-teal-800 italic pl-5 font-sans">
                            (En: <MathRenderer content={q.question_en} inline />)
                          </div>
                        )}
                        {q.options && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pl-5 font-sans text-xs">
                            {q.options.map((opt) => (
                              <div key={opt.option_key} className="flex items-start gap-1.5">
                                <span className="font-bold">{opt.option_key}.</span>
                                <div>
                                  <MathRenderer content={isPureEnglish ? (opt.content_en || opt.content_vi) : (opt.content_vi || opt.content_en)} inline />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* PHẦN II: ĐÚNG / SAI */}
                {dsList.length > 0 && (
                  <div className="space-y-4 pt-2">
                    <div className="font-sans font-bold text-xs sm:text-sm text-violet-950 uppercase border-b border-slate-200 pb-1">
                      {isPureEnglish
                        ? `SECTION II. TRUE / FALSE QUESTIONS (${dsList.length} QUESTIONS)`
                        : `PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG / SAI (${dsList.length} CÂU)`}
                    </div>
                    {dsList.map((q, idx) => (
                      <div key={q.id || idx} className="space-y-2">
                        <div>
                          <span className="font-sans font-bold text-slate-900 mr-1.5">
                            {isPureEnglish ? `Question ${idx + 1}:` : `Câu ${idx + 1}:`}
                          </span>
                          <MathRenderer content={isPureEnglish ? (q.question_en || q.question_vi) : q.question_vi} inline />
                        </div>
                        {q.options && (
                          <div className="grid grid-cols-1 gap-1.5 pl-5 font-sans text-xs">
                            {q.options.map((opt) => (
                              <div key={opt.option_key} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                                <div>
                                  <span className="font-bold mr-1.5">{opt.option_key})</span>
                                  <MathRenderer content={isPureEnglish ? (opt.content_en || opt.content_vi) : (opt.content_vi || opt.content_en)} inline />
                                </div>
                                <div className="flex gap-2 text-[11px] font-bold">
                                  <span className="px-2 py-0.5 border border-slate-300 rounded bg-white">
                                    {isPureEnglish ? 'T' : 'Đ'}
                                  </span>
                                  <span className="px-2 py-0.5 border border-slate-300 rounded bg-white">
                                    {isPureEnglish ? 'F' : 'S'}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* PHẦN III: TRẢ LỜI NGẮN */}
                {tlnList.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="font-sans font-bold text-xs sm:text-sm text-violet-950 uppercase border-b border-slate-200 pb-1">
                      {isPureEnglish
                        ? `SECTION III. SHORT ANSWER QUESTIONS (${tlnList.length} QUESTIONS)`
                        : `PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (${tlnList.length} CÂU)`}
                    </div>
                    {tlnList.map((q, idx) => (
                      <div key={q.id || idx} className="space-y-1.5">
                        <div>
                          <span className="font-sans font-bold text-slate-900 mr-1.5">
                            {isPureEnglish ? `Question ${idx + 1}:` : `Câu ${idx + 1}:`}
                          </span>
                          <MathRenderer content={isPureEnglish ? (q.question_en || q.question_vi) : q.question_vi} inline />
                        </div>
                        <div className="pl-5 font-sans text-xs text-slate-500">
                          {isPureEnglish ? 'Answer: [ ____________________ ]' : 'Đáp số: [ ____________________ ]'}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* PHẦN IV: TỰ LUẬN */}
                {tlList.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="font-sans font-bold text-xs sm:text-sm text-violet-950 uppercase border-b border-slate-200 pb-1">
                      {isPureEnglish
                        ? `SECTION IV. ESSAY / EXTENDED RESPONSE (${tlList.length} QUESTIONS)`
                        : `PHẦN IV. CÂU HỎI TỰ LUẬN (${tlList.length} CÂU)`}
                    </div>
                    {tlList.map((q, idx) => (
                      <div key={q.id || idx} className="space-y-1.5">
                        <div>
                          <span className="font-sans font-bold text-slate-900 mr-1.5">
                            {isPureEnglish ? `Question ${idx + 1}:` : `Câu ${idx + 1}:`}
                          </span>
                          <MathRenderer content={isPureEnglish ? (q.question_en || q.question_vi) : q.question_vi} inline />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* BẢNG ĐÁP ÁN (ANSWER KEY) */}
              {includeAnswerKey && currentTest.questions.length > 0 && (
                <div className="mt-8 pt-4 border-t-2 border-dashed border-slate-300 font-sans text-xs">
                  <p className="font-bold text-center uppercase text-slate-700 mb-2">
                    BẢNG ĐÁP ÁN GỌN (ANSWER KEY)
                  </p>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 text-center border border-slate-300 p-2 rounded-xl bg-slate-50/50">
                    {currentTest.questions.map((q, qIdx) => (
                      <div key={q.id || qIdx} className="p-1 border border-slate-200 bg-white rounded">
                        <div className="font-bold text-slate-400 text-[10px]">
                          {qIdx + 1} ({q.format_type || 'TN'})
                        </div>
                        <div className="font-bold text-violet-800 text-xs truncate" title={q.correct_answer}>
                          {q.correct_answer || 'Xem giải'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Signoff */}
              <div className="text-center pt-8 text-xs italic font-sans text-slate-400">
                --- {isPureEnglish ? 'END OF TEST' : 'HẾT'} ---
              </div>
            </div>
          </div>

          {/* Right Export Actions Sidebar - 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* ONLINE EXAM EXPORT CARD (NEW FEATURE) */}
            <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-5 border border-teal-500/30 shadow-xl space-y-3.5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-teal-300 text-xs font-black uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Thi Trực Tuyến (Online Exam)</span>
              </div>

              <h3 className="font-black text-base text-white leading-snug">
                Xuất Link Thi Cho Học Sinh
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tạo phòng thi trực tuyến có đồng hồ bấm giờ, học sinh làm bài trực tiếp và nhận điểm số kèm lời giải chi tiết.
              </p>

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleExportOnlineExam}
                  className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-teal-500/20 transition flex items-center justify-center gap-2 cursor-pointer transform active:scale-98"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Lấy Link Thi Online</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsLiveExamStudentView(true)}
                  className="w-full py-2 bg-white/10 hover:bg-white/20 text-teal-200 border border-white/15 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Vào thi thử (Student View)</span>
                </button>
              </div>
            </div>

            {/* PRINT & WORD DOWNLOAD CARD */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-3.5">
              <h3 className="font-extrabold text-sm text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                <Printer className="w-4 h-4 text-violet-600" />
                Lệnh xuất & Tải đề thi
              </h3>

              <div className="space-y-2">
                <button
                  onClick={handlePrint}
                  className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>In Đề / Lưu PDF (A4)</span>
                </button>

                <button
                  onClick={handleDownloadDoc}
                  className="w-full py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-indigo-700" />
                  <span>Tải File Word (.doc)</span>
                </button>

                <button
                  onClick={handleCopyWord}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Copy className="w-4 h-4 text-slate-600" />
                  <span>Sao Chép Vào Word</span>
                </button>
              </div>

              {/* Test Summary Stats */}
              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Tổng số câu:</span>
                  <strong className="text-slate-900">{currentTest.questions.length} câu</strong>
                </div>
                <div className="flex justify-between">
                  <span>Trắc nghiệm (TN):</span>
                  <strong className="text-violet-700">{tnList.length} câu</strong>
                </div>
                <div className="flex justify-between">
                  <span>Đúng / Sai (Đ/S):</span>
                  <strong className="text-violet-700">{dsList.length} câu</strong>
                </div>
                <div className="flex justify-between">
                  <span>Trả lời ngắn (TLN):</span>
                  <strong className="text-violet-700">{tlnList.length} câu</strong>
                </div>
                <div className="flex justify-between">
                  <span>Tự luận (TL):</span>
                  <strong className="text-violet-700">{tlList.length} câu</strong>
                </div>
                <div className="flex justify-between">
                  <span>Tỷ lệ tiếng Anh:</span>
                  <strong className="text-teal-700">{currentTest.englishRatio}%</strong>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL: XUẤT LINK THI ONLINE (SHARE LINK MODAL) */}
      {/* ========================================================================= */}
      {showOnlineExamModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 border border-slate-200 animate-fade-in relative">
            <button
              onClick={() => setShowOnlineExamModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Phòng Thi Trực Tuyến Đã Sẵn Sàng!</h3>
                <p className="text-xs text-slate-500">Gửi link này cho học sinh để làm bài trực tuyến</p>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 space-y-2">
              <div className="text-xs font-bold text-teal-900 flex justify-between">
                <span>{currentTest.title}</span>
                <span className="font-mono bg-teal-200 px-2 py-0.5 rounded text-[11px]">{onlineExamCode}</span>
              </div>
              <div className="text-xs text-slate-600">
                Thời gian: <strong>{currentTest.duration} phút</strong> • Số câu: <strong>{currentTest.questions.length} câu</strong>
              </div>
            </div>

            {/* Copy Link Input Box */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase text-slate-700">
                Liên kết thi trực tuyến (Shareable Link):
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={onlineExamLink}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono text-slate-800 outline-none select-all"
                />
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(onlineExamLink);
                    setCopiedLink(true);
                    setTimeout(() => setCopiedLink(false), 3000);
                  }}
                  className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shrink-0 flex items-center gap-1.5 shadow-md"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLink ? 'Đã sao chép!' : 'Sao chép'}</span>
                </button>
              </div>
            </div>

            {/* Google Sheets Score Recording Section */}
            <div className="bg-emerald-50/90 border border-emerald-300/80 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-950 flex items-center gap-1.5 uppercase">
                  📊 Tích hợp Google Sheets (Ghi nhận điểm thi)
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const scriptCode = `function doPost(e) {\n  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();\n  var data = JSON.parse(e.postData.contents);\n  sheet.appendRow([\n    new Date(),\n    data.studentName,\n    data.studentClass,\n    data.studentSbd || 'KDB',\n    data.testTitle,\n    data.score10,\n    data.correctCount + "/" + data.totalGradable,\n    data.timeSpentFormatted,\n    data.submittedAt\n  ]);\n  return ContentService.createTextOutput(JSON.stringify({"result":"success"})).setMimeType(ContentService.MimeType.JSON);\n}`;
                    navigator.clipboard.writeText(scriptCode);
                    setCopiedScript(true);
                    setTimeout(() => setCopiedScript(false), 3000);
                    showNotification('📋 Đã sao chép mã Google Apps Script 1-Click mẫu!');
                  }}
                  className="px-2.5 py-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[11px] rounded-lg transition shadow-xs flex items-center gap-1 cursor-pointer"
                >
                  {copiedScript ? <Check className="w-3 h-3 text-emerald-200" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedScript ? 'Đã sao chép Script!' : 'Copy Apps Script Mẫu'}</span>
                </button>
              </div>

              <p className="text-[11px] text-emerald-800 font-medium leading-relaxed">
                Tự động đẩy họ tên, lớp, SBD, điểm số và thời gian làm bài của học sinh về Google Sheet của Thầy/Cô khi nộp bài.
              </p>

              <div className="space-y-2 pt-1">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Link Google Sheet nhận điểm (View/Edit Link):
                  </label>
                  <input
                    type="text"
                    value={googleSheetUrl}
                    onChange={(e) => setGoogleSheetUrl(e.target.value)}
                    placeholder="https://docs.google.com/spreadsheets/d/..."
                    className="w-full px-3 py-2 bg-white border border-emerald-300 rounded-xl text-xs text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500/30"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Link Google Webhook / Web App Exec (Tùy chọn):
                  </label>
                  <input
                    type="text"
                    value={googleSheetWebhook}
                    onChange={(e) => setGoogleSheetWebhook(e.target.value)}
                    placeholder="https://script.google.com/macros/s/.../exec"
                    className="w-full px-3 py-2 bg-white border border-emerald-300 rounded-xl text-xs font-mono text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500/30"
                  />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowOnlineExamModal(false);
                  setIsLiveExamStudentView(true);
                }}
                className="py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-black text-xs rounded-xl flex items-center justify-center gap-1.5 border border-indigo-200"
              >
                <Eye className="w-4 h-4 text-indigo-700" />
                <span>Vào thử phòng thi</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  window.open(onlineExamLink, '_blank');
                }}
                className="py-3 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md"
              >
                <ExternalLink className="w-4 h-4 text-teal-400" />
                <span>Mở tab mới</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-400 text-center">
              💡 Thầy/Cô có thể gửi liên kết này vào nhóm Zalo lớp, Google Classroom hoặc tin nhắn cho học sinh.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
