import React, { useState, useRef } from 'react';
import { useAppStore } from '../../lib/store';
import { Question } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { hasApiKey, generateExamTestFromDescriptionAi } from '../../lib/geminiService';
import { FULL_QUESTION_BANK } from '../../lib/questionBankData';
import {
  Sparkles,
  Printer,
  FileDown,
  Copy,
  CheckCircle2,
  Loader2,
  FileText,
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
    `Tạo bài kiểm tra 1 tiết 45 phút về Hàm số Lũy thừa, Mũ và Logarit lớp 12, gồm 15 câu chuẩn cấu trúc quốc tế hoàn toàn 100% bằng Tiếng Anh.`
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [includeAnswerKey, setIncludeAnswerKey] = useState(true);
  const [includeCandidateBox, setIncludeCandidateBox] = useState(true);

  // Quick Preset Chips
  const PRESET_CHIPS = [
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
      text: `Tạo đề kiểm tra 1 tiết 45 phút về Tính đơn điệu, Cực trị và Đường tiệm cận của đồ thị hàm số lớp 12, gồm 20 câu (12 TN, 4 Đ/S, 4 TLN), tỷ lệ tiếng Anh 60%.`,
    },
    {
      label: `Đề 15p: GTLN & GTNN và Bài toán thực tế (50% TA)`,
      text: `Tạo đề kiểm tra 15 phút về Giá trị lớn nhất, giá trị nhỏ nhất của hàm số và bài toán tối ưu hoá thực tế lớp 12, gồm 10 câu, tỷ lệ tiếng Anh 50%.`,
    },
    {
      label: `Đề 45p: Vectơ & Hệ toạ độ Oxyz (70% TA)`,
      text: `Tạo bài kiểm tra 45 phút về Vectơ trong không gian và Hệ toạ độ Oxyz lớp 12, gồm 15 câu, tỷ lệ tiếng Anh 70%.`,
    },
    {
      label: `Đề 15p: Mệnh đề & Tập hợp (50% TA)`,
      text: `Tạo đề kiểm tra 15 phút về Mệnh đề toán học và Tập hợp số lớp 10, gồm 10 câu (6 câu TN, 2 câu Đ/S, 2 câu TLN), tỷ lệ tiếng Anh 50%.`,
    },
  ];

  // Helper to filter questions from FULL_QUESTION_BANK based on prompt keywords
  const filterQuestionsFromPrompt = (prompt: string, grade: number): Question[] => {
    const lower = prompt.toLowerCase();
    let matches: Question[] = [];

    if (lower.includes('logarit') || lower.includes('lôgarit') || lower.includes('mũ') || lower.includes('lũy thừa') || lower.includes('exponential') || lower.includes('logarithm')) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('11-6') || q.id.includes('11-6'));
    } else if (lower.includes('tiệm cận') || lower.includes('asymptote')) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('12-1-3') || q.id.includes('12-3'));
    } else if (lower.includes('gtln') || lower.includes('gtnn') || lower.includes('giá trị lớn nhất') || lower.includes('giá trị nhỏ nhất') || lower.includes('tối ưu')) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('12-1-2') || q.id.includes('12-2'));
    } else if (lower.includes('đơn điệu') || lower.includes('cực trị') || lower.includes('đồng biến') || lower.includes('nghịch biến') || lower.includes('đạo hàm')) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('12-1') || q.topic_id?.includes('11-7'));
    } else if (lower.includes('vectơ') || lower.includes('tọa độ') || lower.includes('toạ độ') || lower.includes('oxyz') || lower.includes('không gian')) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('12-2') || q.topic_id?.includes('10-4'));
    } else if (lower.includes('dãy số') || lower.includes('sequence')) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('11-2-1') || q.id.includes('11-2-1'));
    } else if (lower.includes('cộng') || lower.includes('arithmetic')) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('11-2-2') || q.id.includes('11-2-2'));
    } else if (lower.includes('nhân') || lower.includes('geometric')) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('11-2-3') || q.id.includes('11-2-3'));
    } else if (lower.includes('lượng giác') || lower.includes('trigonometric') || lower.includes('sin') || lower.includes('cos')) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('11-1') || q.topic_id?.includes('10-3'));
    } else if (lower.includes('mệnh đề') || lower.includes('tập hợp') || lower.includes('proposition') || lower.includes('set')) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('10-1'));
    } else if (lower.includes('parabol') || lower.includes('bậc hai')) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('10-6'));
    }

    if (matches.length > 0) return matches;

    // Fallback by grade
    if (lower.includes('12') || grade === 12) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('-12-'));
    } else if (lower.includes('11') || grade === 11) {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('-11-'));
    } else {
      matches = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('-10-'));
    }

    return matches.length > 0 ? matches : FULL_QUESTION_BANK;
  };

  // Initial generated test default state
  const [currentTest, setCurrentTest] = useState<GeneratedTestState>(() => {
    const logQuestions = FULL_QUESTION_BANK.filter((q) => q.topic_id?.includes('11-6') || q.id.includes('11-6'));
    const initialList = logQuestions.length > 0 ? logQuestions : FULL_QUESTION_BANK.slice(0, 10);
    return {
      title: `ĐỀ KIỂM TRA 45 PHÚT: HÀM SỐ LŨY THỪA, MŨ VÀ LOGARIT`,
      title_en: `45-MINUTE TEST: EXPONENTIAL AND LOGARITHMIC FUNCTIONS`,
      duration: 45,
      englishRatio: 100,
      instructions_vi: `Thời gian làm bài: 45 phút (Không kể phát đề). Học sinh làm bài trực tiếp vào đề thi.`,
      instructions_en: `Time allowed: 45 minutes. Write your answers directly on this paper. No calculator or notes permitted.`,
      questions: initialList,
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
      targetCount = Math.min(25, Math.max(4, parseInt(matchCount[1], 10)));
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
    
    // Pick questions according to targetCount
    let selected: Question[] = [];
    if (candidateQuestions.length <= targetCount) {
      selected = candidateQuestions;
    } else {
      const shuffled = [...candidateQuestions].sort(() => 0.5 - Math.random());
      selected = shuffled.slice(0, targetCount);
    }

    // Extract title from prompt
    let titleVi = `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: TOÁN LỚP ${detectedGrade}`;
    let titleEn = `${detectedDuration}-MINUTE TEST: MATHEMATICS GRADE ${detectedGrade}`;
    if (lowerPrompt.includes('logarit') || lowerPrompt.includes('mũ') || lowerPrompt.includes('lũy thừa')) {
      titleVi = `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: HÀM SỐ LŨY THỪA, MŨ VÀ LOGARIT`;
      titleEn = `${detectedDuration}-MINUTE TEST: EXPONENTIAL AND LOGARITHMIC FUNCTIONS`;
    } else if (lowerPrompt.includes('tiệm cận')) {
      titleVi = `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ`;
      titleEn = `${detectedDuration}-MINUTE TEST: ASYMPTOTES OF FUNCTION GRAPHS`;
    } else if (lowerPrompt.includes('gtln') || lowerPrompt.includes('gtnn') || lowerPrompt.includes('lớn nhất')) {
      titleVi = `ĐỀ KIỂM TRA ${detectedDuration} PHÚT: GIÁ TRỊ LỚN NHẤT VÀ NHỎ NHẤT CỦA HÀM SỐ`;
      titleEn = `${detectedDuration}-MINUTE TEST: MAXIMUM AND MINIMUM VALUES OF FUNCTIONS`;
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

    showNotification(`✨ Đã biên soạn bài test đúng chuyên đề (${selected.length} câu, ${detectedRatio}% Tiếng Anh)!`);
    setIsGenerating(false);
  };

  // Export: Print PDF
  const handlePrint = () => {
    window.print();
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
            content += `   ${opt.option_key}. ${opt.content_vi || opt.content_en}\n`;
          });
        }
      }
      content += `\n`;
    });

    if (includeAnswerKey) {
      content += `\n--- BẢNG ĐÁP SỐ (ANSWER KEY) ---\n`;
      currentTest.questions.forEach((q, idx) => {
        content += `Câu ${idx + 1}: ${q.correct_answer || 'Xem giải chi tiết'}\n`;
      });
    }

    navigator.clipboard.writeText(content);
    showNotification('📋 Đã sao chép nội dung bài test sang Clipboard để dán vào Microsoft Word!');
  };

  // Export: Download .doc Word file
  const handleDownloadDoc = () => {
    const isPureEnglish = currentTest.englishRatio >= 80;
    let docContent = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>${currentTest.title}</title>
    <style>
      body { font-family: 'Times New Roman', serif; line-height: 1.5; margin: 30px; font-size: 13pt; }
      .header-table { width: 100%; border: none; margin-bottom: 20px; }
      .header-table td { border: none; font-size: 12pt; }
      .candidate-box { width: 100%; border: 1px solid #000; padding: 10px; margin-bottom: 20px; }
      .question-item { margin-bottom: 14px; }
      .key-table { width: 100%; border-collapse: collapse; margin-top: 25px; }
      .key-table th, .key-table td { border: 1px solid #000; padding: 5px; text-align: center; font-size: 11pt; }
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
                  onClick={() => setPromptDescription(chip.text)}
                  className="px-3 py-1.5 bg-slate-50 hover:bg-violet-50 hover:text-violet-900 hover:border-violet-300 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 transition text-left cursor-pointer"
                >
                  ✨ {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* Single Prompt Description Input Area */}
          <div className="space-y-2">
            <label className="block text-xs font-extrabold text-slate-800 uppercase">
              Mô tả yêu cầu bài test của giáo viên:
            </label>
            <div className="relative">
              <textarea
                value={promptDescription}
                onChange={(e) => setPromptDescription(e.target.value)}
                rows={3}
                placeholder="Nhập mô tả đề bài (Ví dụ: Tạo bài kiểm tra 1 tiết 45 phút về Hàm số Lũy thừa, Mũ và Logarit lớp 12, gồm 15 câu 100% bằng Tiếng Anh...)"
                className="w-full p-3.5 sm:p-4 text-xs sm:text-sm bg-slate-50/70 focus:bg-white border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium text-slate-800 transition leading-relaxed shadow-inner"
              />
            </div>
          </div>

          {/* Submit Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Tự động phân bổ 4 dạng thức
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Công thức Toán LaTeX chuẩn
              </span>
            </div>

            <button
              onClick={handleGenerateTest}
              disabled={isGenerating || !promptDescription.trim()}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-700 hover:to-indigo-800 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>AI đang biên soạn đề...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>✨ AI Tạo Bài Test Ngay</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LIVE A4 TEST PREVIEW & EXPORT ACTIONS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main A4 Document Preview - 9 cols */}
          <div className="lg:col-span-9 space-y-3">
            {/* Toolbar for Paper */}
            <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs text-slate-800 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-violet-600" />
                  Xem trước đề thi A4
                </span>
                <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">
                  {currentTest.questions.length} câu hỏi · {currentTest.duration} phút · {currentTest.englishRatio}% Tiếng Anh
                </span>
              </div>

              {/* Toggles & Options */}
              <div className="flex items-center gap-3 text-xs">
                <label className="flex items-center gap-1.5 cursor-pointer select-none font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={includeCandidateBox}
                    onChange={(e) => setIncludeCandidateBox(e.target.checked)}
                    className="w-3.5 h-3.5 accent-violet-600 rounded"
                  />
                  <span>Khung tên học sinh</span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer select-none font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={includeAnswerKey}
                    onChange={(e) => setIncludeAnswerKey(e.target.checked)}
                    className="w-3.5 h-3.5 accent-violet-600 rounded"
                  />
                  <span>Bảng đáp án</span>
                </label>
              </div>
            </div>

            {/* A4 Paper Canvas */}
            <div className="bg-slate-200/80 p-3 sm:p-6 rounded-3xl overflow-x-auto flex justify-center border border-slate-300 shadow-inner">
              <div
                ref={printAreaRef}
                className="bg-white w-full max-w-[210mm] min-h-[297mm] p-8 sm:p-12 shadow-2xl border border-slate-300 text-slate-900 font-serif leading-relaxed transition-transform duration-150 print:shadow-none print:border-none print:m-0 print:p-6"
              >
                {/* Header: Strictly THPT CHÂU THÀNH A / TỔ TOÁN */}
                <div className="border-b-2 border-slate-900 pb-3 mb-6 font-sans">
                  <div className="flex justify-between items-start text-xs">
                    <div>
                      <p className="font-extrabold uppercase text-slate-800 tracking-wide text-xs">THPT CHÂU THÀNH A</p>
                      <p className="font-black text-violet-900 uppercase text-xs mt-0.5">TỔ TOÁN</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-700 uppercase">
                        {isPureEnglish ? 'MATHEMATICS ASSESSMENT TEST' : 'ĐỀ KIỂM TRA ĐÁNH GIÁ GDPT 2018'}
                      </p>
                      <p className="font-mono text-slate-500 text-[11px]">
                        {isPureEnglish ? 'Time allowed: ' : 'Thời gian: '}
                        <strong>{currentTest.duration} phút / mins</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Exam Title */}
                <div className="text-center space-y-1 mb-6 font-sans">
                  <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight uppercase">
                    {isPureEnglish ? currentTest.title_en : currentTest.title}
                  </h1>
                  {!isPureEnglish && currentTest.title_en && (
                    <p className="text-xs font-bold text-teal-800 italic">
                      {currentTest.title_en}
                    </p>
                  )}
                  <p className="text-[11px] text-slate-500 italic">
                    {isPureEnglish ? currentTest.instructions_en : currentTest.instructions_vi}
                  </p>
                </div>

                {/* Candidate Info Box */}
                {includeCandidateBox && (
                  <div className="mb-6 p-3 rounded-xl border border-slate-400 bg-slate-50/50 font-sans text-xs space-y-2">
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <div>
                        {isPureEnglish ? 'Student Name: ' : 'Họ và tên học sinh: '}
                        <strong className="border-b border-dotted border-slate-500 inline-block min-w-[180px]">&nbsp;</strong>
                      </div>
                      <div>
                        {isPureEnglish ? 'Class: ' : 'Lớp: '}
                        <strong className="border-b border-dotted border-slate-500 inline-block min-w-[60px]">&nbsp;</strong>
                      </div>
                      <div>
                        {isPureEnglish ? 'Candidate ID: ' : 'Số báo danh (SBD): '}
                        <strong className="border-b border-dotted border-slate-500 inline-block min-w-[70px]">&nbsp;</strong>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-1 border-t border-slate-200">
                      <div>
                        {isPureEnglish ? 'Score: ' : 'Điểm số: '}
                        <span className="inline-block w-12 h-6 border border-slate-400 text-center align-middle font-bold"></span>
                      </div>
                      <div className="flex-1 pl-4">
                        {isPureEnglish ? "Teacher's Feedback: " : 'Lời phê của Thầy/Cô: '}
                        <span className="border-b border-dotted border-slate-400 inline-block w-[75%]">&nbsp;</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* 4 PHẦN CÂU HỎI GDPT 2018 */}
                {/* ========================================================================= */}
                <div className="space-y-6 text-xs sm:text-sm">
                  
                  {/* PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN */}
                  {tnList.length > 0 && (
                    <div className="space-y-3">
                      <div className="font-sans font-bold text-xs sm:text-sm text-violet-950 uppercase border-b border-slate-200 pb-1">
                        {isPureEnglish
                          ? `SECTION I. MULTIPLE CHOICE QUESTIONS (${tnList.length} QUESTIONS)`
                          : `PHẦN I. CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (${tnList.length} CÂU)`}
                      </div>
                      <div className="space-y-4">
                        {tnList.map((q, idx) => (
                          <div key={q.id || idx} className="space-y-1.5">
                            <div>
                              <span className="font-sans font-bold text-slate-900 mr-1.5">
                                {isPureEnglish ? `Question ${idx + 1}:` : `Câu ${idx + 1}:`}
                              </span>
                              <MathRenderer content={isPureEnglish ? (q.question_en || q.question_vi) : q.question_vi} inline />
                            </div>

                            {!isPureEnglish && q.question_en && currentTest.englishRatio >= 40 && (
                              <p className="text-xs text-teal-800 italic pl-5 font-sans">
                                (En: <MathRenderer content={q.question_en} inline />)
                              </p>
                            )}

                            {q.options && (
                              <div className="grid grid-cols-2 gap-2 pl-5 pt-1 font-sans">
                                {q.options.map((opt) => (
                                  <div key={opt.option_key} className="flex items-center gap-1.5">
                                    <span className="font-bold">{opt.option_key}.</span>
                                    <MathRenderer content={isPureEnglish ? (opt.content_en || opt.content_vi) : (opt.content_vi || opt.content_en)} inline />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI */}
                  {dsList.length > 0 && (
                    <div className="space-y-3 pt-2">
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

                {/* ========================================================= */}
                {/* BẢNG ĐÁP ÁN (ANSWER KEY) */}
                {/* ========================================================= */}
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
          </div>

          {/* Right Export Actions Sidebar - 3 cols */}
          <div className="lg:col-span-3 space-y-4">
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
    </div>
  );
};
