import React, { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../../lib/store';
import { Chapter, Lesson, MathType, WorkedExample, Question, LanguageMode } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { speakEnglishWord } from '../../lib/audio';
import { apiFetch } from '../../lib/dataService';
import { generateCompleteLessonWorksheetAi, hasApiKey } from '../../lib/geminiService';
import {
  BookOpen,
  Search,
  CheckSquare,
  Square,
  ChevronDown,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Printer,
  Copy,
  Download,
  Volume2,
  Sparkles,
  Layers,
  FileText,
  CheckCircle2,
  X,
  Plus,
  Minus,
  Edit3,
  HelpCircle,
  Clock,
  PlayCircle,
  RotateCcw,
  Loader2,
  Bot,
  Wand2,
} from 'lucide-react';

export const BilingualLessonModule: React.FC = () => {
  const {
    selectedGrade,
    setSelectedGrade,
    languageMode,
    setLanguageMode,
    showNotification,
    selectedLessonId,
    setSelectedLessonId,
  } = useAppStore();

  // Data States
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAiGeneratingWorksheet, setIsAiGeneratingWorksheet] = useState(false);

  // Active Selection States
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [expandedChapterIds, setExpandedChapterIds] = useState<string[]>([]);
  const [selectedTypeIds, setSelectedTypeIds] = useState<string[]>([]);

  // Search in Program Tree
  const [searchQuery, setSearchQuery] = useState('');

  // Center Document View Controls
  const [viewTab, setViewTab] = useState<'preview' | 'guide' | 'online_practice'>('preview');
  const [zoomLevel, setZoomLevel] = useState<number>(100); // 77%, 100%, 125%

  // Right Sidebar: Export Configuration State
  const [exportPreset, setExportPreset] = useState<'EXERCISE' | 'THEMATIC' | 'WORKSHEET' | 'OUTLINE'>('EXERCISE');
  const [documentTitle, setDocumentTitle] = useState<string>('PHIẾU BÀI TẬP TOÁN 12');
  const [includeTheory, setIncludeTheory] = useState<boolean>(true);
  const [includeWorkedExamples, setIncludeWorkedExamples] = useState<boolean>(true);
  const [includeAnswerKey, setIncludeAnswerKey] = useState<boolean>(true);
  const [includeDetailedSolutions, setIncludeDetailedSolutions] = useState<boolean>(true);

  // Per-type question counts: { [typeId]: { tn: 2, ds: 1, tln: 1, tl: 1 } }
  const [typeQuestionCounts, setTypeQuestionCounts] = useState<Record<string, { tn: number; ds: number; tln: number; tl: number }>>({});

  // Online practice interactive state
  const [onlinePracticeAnswers, setOnlinePracticeAnswers] = useState<Record<string, string>>({});
  const [onlinePracticeSubmitted, setOnlinePracticeSubmitted] = useState(false);

  const printAreaRef = useRef<HTMLDivElement>(null);

  // Fetch chapters and lessons on grade change
  useEffect(() => {
    loadCurriculumData();
  }, [selectedGrade]);

  const loadCurriculumData = async () => {
    setLoading(true);
    try {
      const [chaptersData, lessonsData, questionsData] = await Promise.all([
        apiFetch<Chapter[]>('/api/chapters'),
        apiFetch<Lesson[]>('/api/lessons'),
        apiFetch<Question[]>('/api/questions'),
      ]);

      const gradeChapters = (chaptersData || []).filter((c) => c.grade_id === selectedGrade);
      setChapters(gradeChapters);
      setAllQuestions(questionsData || []);

      const gradeChapterIds = gradeChapters.map((c) => c.id);
      const gradeLessons = (lessonsData || []).filter(
        (l) => (l.chapter_id && gradeChapterIds.includes(l.chapter_id)) || l.id.includes(`-${selectedGrade}-`) || l.topic_id?.includes(`top-${selectedGrade}`)
      );
      setLessons(gradeLessons);

      // Expand all chapters by default
      if (gradeChapters.length > 0) {
        setExpandedChapterIds(gradeChapters.map((c) => c.id));
        setActiveChapterId(gradeChapters[0].id);
      }

      // Pick target active lesson
      let targetLesson = gradeLessons[0] || null;
      if (selectedLessonId) {
        const found = gradeLessons.find((l) => l.id === selectedLessonId);
        if (found) targetLesson = found;
      }

      setActiveLesson(targetLesson);
      if (targetLesson) {
        setSelectedLessonId(targetLesson.id);
        // Default select all types of this lesson
        const typeIds = targetLesson.types?.map((t) => t.id) || [];
        setSelectedTypeIds(typeIds);

        const initCounts: Record<string, { tn: number; ds: number; tln: number; tl: number }> = {};
        typeIds.forEach((tId) => {
          initCounts[tId] = { tn: 2, ds: 1, tln: 1, tl: 1 };
        });
        setTypeQuestionCounts(initCounts);
      } else {
        setSelectedTypeIds([]);
        setTypeQuestionCounts({});
      }

      setDocumentTitle(`PHIẾU BÀI TẬP TOÁN ${selectedGrade}`);
    } catch (e) {
      console.error('Error loading curriculum data:', e);
    } finally {
      setLoading(false);
    }
  };

  // AI Auto-Generate Worksheet for Active Lesson
  const handleAiGenerateWorksheet = async () => {
    if (!activeLesson) return;
    if (!hasApiKey()) {
      showNotification('⚠️ Vui lòng nhấn vào nút Settings trên Header để nhập API Key Google AI Studio trước khi sinh bài tập!');
      return;
    }

    const activeChap = chapters.find((c) => c.id === activeLesson.chapter_id);
    const chapterName = activeChap ? activeChap.name_vi : `Toán Lớp ${selectedGrade}`;

    setIsAiGeneratingWorksheet(true);
    showNotification(`🤖 AI Gemini đang soạn thảo toàn bộ phiếu học tập song ngữ cho "${activeLesson.title_vi}"...`);

    try {
      const result = await generateCompleteLessonWorksheetAi(
        activeLesson.title_vi,
        chapterName,
        selectedGrade
      );

      if (!result.success) {
        showNotification(`❌ Lỗi AI: ${result.rawError || result.error || 'Không thể sinh bài tập'}`);
        return;
      }

      const jsonMatch = result.content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        showNotification('❌ Mô hình không trả về định dạng JSON hợp lệ.');
        return;
      }

      const data = JSON.parse(jsonMatch[0]);

      // Update active lesson with AI data
      const updatedLesson: Lesson = {
        ...activeLesson,
        key_concepts_vi: data.key_concepts_vi || activeLesson.key_concepts_vi,
        key_concepts_en: data.key_concepts_en || activeLesson.key_concepts_en,
        formulas: data.formulas || activeLesson.formulas || [],
        vocabulary_list: data.vocabulary_terms
          ? data.vocabulary_terms.map((v: any) => `${v.word} (${v.meaning || ''})`)
          : activeLesson.vocabulary_list,
        types: data.types
          ? data.types.map((t: any, idx: number) => ({
              id: `type-ai-${activeLesson.id}-${idx + 1}`,
              lesson_id: activeLesson.id,
              code: t.code || `Dạng ${idx + 1}`,
              title_vi: t.title_vi || 'Dạng toán',
              title_en: t.title_en || 'Math Type',
              order_index: idx + 1,
            }))
          : activeLesson.types,
        worked_examples: data.worked_examples
          ? data.worked_examples.map((we: any, idx: number) => ({
              id: `we-ai-${activeLesson.id}-${idx + 1}`,
              type_id: `type-ai-${activeLesson.id}-1`,
              type_code: we.type_code || `Dạng ${idx + 1}`,
              title_vi: we.title_vi || `Ví dụ ${idx + 1}`,
              title_en: we.title_en || `Example ${idx + 1}`,
              problem_vi: we.problem_vi || '',
              problem_en: we.problem_en || '',
              solution_vi: we.solution_vi || '',
              solution_en: we.solution_en || '',
            }))
          : activeLesson.worked_examples,
      };

      // Save updated lesson to DB
      await apiFetch('/api/lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedLesson),
      });

      // Save questions to DB
      if (data.questions && Array.isArray(data.questions)) {
        for (let i = 0; i < data.questions.length; i++) {
          const q = data.questions[i];
          const newQ = {
            topic_id: activeLesson.topic_id || `top-${activeLesson.id}`,
            type_id: updatedLesson.types?.[0]?.id,
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
            math_skill: activeLesson.title_vi,
            english_skill: activeLesson.title_en,
            status: 'PUBLISHED',
            created_by: 'usr-teacher-1',
          };
          await apiFetch('/api/questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newQ),
          });
        }
      }

      await loadCurriculumData();
      setActiveLesson(updatedLesson);
      showNotification(`✨ AI Gemini đã biên soạn thành công toàn bộ phiếu học tập cho: ${activeLesson.title_vi}!`);
    } catch (err: any) {
      console.error('Error generating worksheet:', err);
      showNotification(`❌ Lỗi phân tích: ${err.message}`);
    } finally {
      setIsAiGeneratingWorksheet(false);
    }
  };

  // Toggle chapter expansion in tree
  const toggleChapterExpand = (chapterId: string) => {
    setExpandedChapterIds((prev) =>
      prev.includes(chapterId) ? prev.filter((id) => id !== chapterId) : [...prev, chapterId]
    );
  };

  // Tree Action: Open All Chapters
  const handleOpenAll = () => {
    setExpandedChapterIds(chapters.map((c) => c.id));
  };

  // Tree Action: Collapse All
  const handleCollapseAll = () => {
    setExpandedChapterIds([]);
  };

  // Tree Action: Select All Types of Current Lesson
  const handleSelectCurrentLessonAllTypes = () => {
    if (!activeLesson) return;
    const lessonTypeIds = activeLesson.types?.map((t) => t.id) || [];
    const newSelected = Array.from(new Set([...selectedTypeIds, ...lessonTypeIds]));
    setSelectedTypeIds(newSelected);

    const updatedCounts = { ...typeQuestionCounts };
    lessonTypeIds.forEach((tId) => {
      if (!updatedCounts[tId]) {
        updatedCounts[tId] = { tn: 2, ds: 1, tln: 1, tl: 1 };
      }
    });
    setTypeQuestionCounts(updatedCounts);
    showNotification(`Đã chọn toàn bộ các dạng của ${activeLesson.title_vi}`);
  };

  // Tree Action: Deselect All
  const handleDeselectAllTypes = () => {
    setSelectedTypeIds([]);
    setTypeQuestionCounts({});
    showNotification('Đã bỏ chọn tất cả các dạng toán');
  };

  // Toggle single type checkbox
  const toggleTypeSelection = (type: MathType, e: React.MouseEvent) => {
    e.stopPropagation();
    const isSelected = selectedTypeIds.includes(type.id);
    if (isSelected) {
      setSelectedTypeIds(selectedTypeIds.filter((id) => id !== type.id));
      const nextCounts = { ...typeQuestionCounts };
      delete nextCounts[type.id];
      setTypeQuestionCounts(nextCounts);
    } else {
      setSelectedTypeIds([...selectedTypeIds, type.id]);
      setTypeQuestionCounts({
        ...typeQuestionCounts,
        [type.id]: {
          tn: type.sample_count_tn || 2,
          ds: type.sample_count_ds || 1,
          tln: type.sample_count_tln || 1,
          tl: type.sample_count_tl || 1,
        },
      });
    }
  };

  // Switch Active Lesson
  const handleSelectLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setSelectedLessonId(lesson.id);
    // If no types selected from this lesson, select them
    const lessonTypeIds = lesson.types?.map((t) => t.id) || [];
    if (lessonTypeIds.length > 0 && !lessonTypeIds.some((id) => selectedTypeIds.includes(id))) {
      setSelectedTypeIds(lessonTypeIds);
      const nextCounts = { ...typeQuestionCounts };
      lessonTypeIds.forEach((tId) => {
        nextCounts[tId] = { tn: 2, ds: 1, tln: 1, tl: 1 };
      });
      setTypeQuestionCounts(nextCounts);
    }
  };

  // Export Action: Print PDF
  const handlePrint = () => {
    window.print();
  };

  // Filter questions for the active lesson
  const displayedQuestions = allQuestions.filter((q) => {
    if (!activeLesson) return false;
    if (q.topic_id && activeLesson.topic_id && q.topic_id === activeLesson.topic_id) return true;
    if (q.id && activeLesson.id && q.id.includes(activeLesson.id.replace('les-', 'q-'))) return true;
    if (q.type_id && selectedTypeIds.includes(q.type_id)) return true;
    if (activeLesson.types && activeLesson.types.some((t) => t.id === q.type_id)) return true;
    return false;
  });

  // Export Action: Copy Word Text
  const handleCopyWord = () => {
    let content = `=========================================================\n`;
    content += `SỞ GD&ĐT • TRƯỜNG THPT CHÂU THÀNH A\n`;
    content += `${documentTitle.toUpperCase()}\n`;
    if (activeLesson) {
      content += `${activeLesson.title_vi.toUpperCase()}\n`;
      content += `(${activeLesson.title_en})\n\n`;
    }
    content += `=========================================================\n\n`;

    if (includeTheory && activeLesson) {
      content += `A. TÓM TẮT LÝ THUYẾT:\n`;
      content += `${activeLesson.key_concepts_vi}\n\n`;
    }

    if (includeWorkedExamples && activeLesson?.worked_examples) {
      content += `B. BÀI TẬP MẪU CÓ LỜI GIẢI:\n`;
      activeLesson.worked_examples.forEach((we, i) => {
        content += `${we.type_code || `Dạng ${i + 1}`}: ${we.title_vi}\n`;
        content += `Đề bài: ${we.problem_vi}\n`;
        content += `Lời giải: ${we.solution_vi}\n\n`;
      });
    }

    content += `C. BÀI TẬP TỰ LUYỆN:\n`;
    displayedQuestions.forEach((q, i) => {
      content += `Câu ${i + 1}: ${q.question_vi}\n`;
      if (q.options) {
        q.options.forEach((opt) => {
          content += `  ${opt.option_key}. ${opt.content_vi}\n`;
        });
      }
      content += `\n`;
    });

    navigator.clipboard.writeText(content);
    showNotification('📋 Đã sao chép toàn bộ nội dung phiếu học tập sang Clipboard để dán vào Microsoft Word!');
  };

  // Download Word file (.doc)
  const handleDownloadDoc = () => {
    let docContent = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>${documentTitle}</title>
    <style>body { font-family: 'Times New Roman', serif; line-height: 1.5; margin: 30px; }</style>
    </head><body>`;

    docContent += `<h2 style='text-align:center;'>TRƯỜNG THPT CHÂU THÀNH A</h2>`;
    docContent += `<h2 style='text-align:center;'>${documentTitle}</h2>`;
    if (activeLesson) {
      docContent += `<h3 style='text-align:center;'>${activeLesson.title_vi}</h3>`;
      docContent += `<p style='text-align:center; font-style: italic;'>${activeLesson.title_en}</p>`;
    }

    if (includeTheory && activeLesson) {
      docContent += `<h3>A. TÓM TẮT LÝ THUYẾT</h3><p>${activeLesson.key_concepts_vi.replace(/\n/g, '<br/>')}</p>`;
    }

    if (includeWorkedExamples && activeLesson?.worked_examples) {
      docContent += `<h3>B. BÀI TẬP MẪU</h3>`;
      activeLesson.worked_examples.forEach((we) => {
        docContent += `<p><strong>${we.type_code || 'Ví dụ'}:</strong> ${we.problem_vi}</p>`;
        docContent += `<p><em>Lời giải:</em> ${we.solution_vi}</p>`;
      });
    }

    docContent += `<h3>C. BÀI TẬP TỰ LUYỆN</h3>`;
    displayedQuestions.forEach((q, idx) => {
      docContent += `<p><strong>Câu ${idx + 1}:</strong> ${q.question_vi}</p>`;
      if (q.options) {
        docContent += `<ul>`;
        q.options.forEach((opt) => {
          docContent += `<li><strong>${opt.option_key}.</strong> ${opt.content_vi}</li>`;
        });
        docContent += `</ul>`;
      }
    });

    docContent += `</body></html>`;

    const blob = new Blob(['\ufeff' + docContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${documentTitle.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('📥 Đã tải file Microsoft Word (.doc) về máy tính!');
  };



  // Filter worked examples to selected types
  const displayedExamples = (activeLesson?.worked_examples || []).filter((we) => {
    if (selectedTypeIds.length === 0) return true;
    if (!we.type_id) return true;
    return selectedTypeIds.includes(we.type_id);
  });

  // Calculate total counts for stats header
  const totalChaptersCount = chapters.length;
  const totalLessonsCount = lessons.length;
  const totalTypesCount = lessons.reduce((acc, l) => acc + (l.types?.length || 0), 0);

  // Selected types list for right sidebar
  const selectedTypesList = (activeLesson?.types || []).filter((t) => selectedTypeIds.includes(t.id));

  return (
    <div className="w-full bg-[#F3F4F8] min-h-screen text-slate-900 font-sans pb-20">
      {/* 3-COLUMN MAIN WORKSPACE */}
      <div className="max-w-[1850px] mx-auto px-2 sm:px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* ========================================================================= */}
          {/* 1. CỘT TRÁI: CÂY CHƯƠNG TRÌNH (Program Tree) - 3 cols */}
          {/* ========================================================================= */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-3">
            <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm space-y-3">
              {/* Header: Cây chương trình & Thống kê */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-violet-600 font-black text-sm">◆</span>
                  <h2 className="font-extrabold text-sm text-slate-900">Cây chương trình</h2>
                </div>
                <span className="text-[11px] font-bold text-slate-500 font-mono">
                  {totalChaptersCount} chương · {totalLessonsCount} bài · {totalTypesCount} dạng
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm chương, bài hoặc dạng toán..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium transition"
                />
              </div>

              {/* 4 Quick Tree Buttons */}
              <div className="grid grid-cols-2 gap-1.5 text-[11px] font-bold">
                <button
                  onClick={handleOpenAll}
                  className="px-2 py-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-700 rounded-lg transition cursor-pointer text-center"
                >
                  Mở tất cả
                </button>
                <button
                  onClick={handleCollapseAll}
                  className="px-2 py-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-700 rounded-lg transition cursor-pointer text-center"
                >
                  Thu gọn
                </button>
                <button
                  onClick={handleSelectCurrentLessonAllTypes}
                  className="px-2 py-1.5 bg-violet-50 hover:bg-violet-100 text-violet-800 border border-violet-200 rounded-lg transition cursor-pointer text-center"
                >
                  Chọn cả bài đang mở
                </button>
                <button
                  onClick={handleDeselectAllTypes}
                  className="px-2 py-1.5 bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-600 rounded-lg transition cursor-pointer text-center"
                >
                  Bỏ chọn hết
                </button>
              </div>

              {/* Program Tree List */}
              <div className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto pr-1 text-xs select-none scrollbar-thin">
                {chapters.map((chap, cIdx) => {
                  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
                  const isExpanded = expandedChapterIds.includes(chap.id);
                  const chapterLessons = lessons.filter((l) => l.chapter_id === chap.id);

                  return (
                    <div key={chap.id} className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/50">
                      {/* Chapter Header */}
                      <div
                        onClick={() => toggleChapterExpand(chap.id)}
                        className="p-2.5 bg-slate-100/70 hover:bg-slate-200/60 cursor-pointer flex items-center justify-between gap-2 font-bold text-slate-900 transition"
                      >
                        <div className="flex items-start gap-2">
                          <span className="font-mono font-black text-violet-700 min-w-[16px]">
                            {romanNumerals[cIdx] || `${cIdx + 1}`}
                          </span>
                          <span className="text-[12px] leading-tight font-bold text-slate-800">
                            {chap.name_vi}
                          </span>
                        </div>
                        <span className="text-slate-400 shrink-0">
                          {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                        </span>
                      </div>

                      {/* Lessons in Chapter */}
                      {isExpanded && (
                        <div className="p-1.5 space-y-1.5 bg-white">
                          {chapterLessons.length === 0 ? (
                            <p className="text-[11px] text-slate-400 italic py-1 pl-4">Chưa có bài học</p>
                          ) : (
                            chapterLessons.map((les) => {
                              const isLessonActive = activeLesson?.id === les.id;
                              const types = les.types || [];

                              return (
                                <div key={les.id} className="space-y-1 pl-1">
                                  {/* Lesson Title Bar */}
                                  <div
                                    onClick={() => handleSelectLesson(les)}
                                    className={`p-2 rounded-lg cursor-pointer flex items-center justify-between transition ${
                                      isLessonActive
                                        ? 'bg-violet-50 text-violet-950 font-black border border-violet-300'
                                        : 'hover:bg-slate-100 text-slate-800 font-semibold'
                                    }`}
                                  >
                                    <span className="text-[11.5px] leading-snug line-clamp-2">
                                      {les.title_vi}
                                    </span>
                                  </div>

                                  {/* Math Types (Dạng toán checkboxes) */}
                                  {types.length > 0 && (
                                    <div className="pl-3 space-y-1">
                                      {types.map((type) => {
                                        const isTypeChecked = selectedTypeIds.includes(type.id);
                                        return (
                                          <div
                                            key={type.id}
                                            onClick={(e) => toggleTypeSelection(type, e)}
                                            className={`p-1.5 rounded-lg flex items-center gap-2 cursor-pointer transition text-[11px] ${
                                              isTypeChecked
                                                ? 'bg-violet-100/90 text-violet-950 font-bold border border-violet-300 shadow-2xs'
                                                : 'hover:bg-slate-100 text-slate-600'
                                            }`}
                                          >
                                            <input
                                              type="checkbox"
                                              checked={isTypeChecked}
                                              onChange={() => {}}
                                              className="w-3.5 h-3.5 text-violet-600 rounded cursor-pointer accent-violet-600"
                                            />
                                            <span className="leading-tight line-clamp-1">
                                              {type.code}. {type.title_vi}
                                            </span>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              );
                            })
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. CỘT GIỮA: PHIẾU BÀI TẬP VÀ LÝ THUYẾT SONG NGỮ (Center Sheet) - 6 cols */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-3">
            {/* Center Controls Header */}
            <div className="bg-white rounded-2xl p-2.5 sm:p-3 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-2">
              {/* Left View Tabs */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold">
                <button
                  onClick={() => setViewTab('preview')}
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                    viewTab === 'preview' ? 'bg-white text-slate-900 shadow-xs font-extrabold' : 'text-slate-600'
                  }`}
                >
                  Xem trước
                </button>
                <button
                  onClick={() => setViewTab('guide')}
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                    viewTab === 'guide' ? 'bg-white text-slate-900 shadow-xs font-extrabold' : 'text-slate-600'
                  }`}
                >
                  Hướng dẫn
                </button>
                <button
                  onClick={() => setViewTab('online_practice')}
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                    viewTab === 'online_practice' ? 'bg-violet-600 text-white shadow-xs font-extrabold' : 'text-slate-600'
                  }`}
                >
                  Làm trực tuyến
                </button>
              </div>

              {/* AI Auto-Generate Button on Toolbar */}
              <button
                onClick={handleAiGenerateWorksheet}
                disabled={isAiGeneratingWorksheet}
                className="px-3 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs font-black rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                title="Dùng Gemini AI tự động sinh nội dung lý thuyết, bài tập mẫu và bài tập 4 dạng cho bài học này"
              >
                {isAiGeneratingWorksheet ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>AI đang soạn...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>✨ AI Soạn phiếu học tập</span>
                  </>
                )}
              </button>

              {/* Right: Zoom & Language Controls */}
              <div className="flex items-center gap-1.5">
                {/* Language Switch */}
                <div className="flex items-center bg-slate-100 p-0.5 rounded-xl text-[11px] font-bold">
                  <button
                    onClick={() => setLanguageMode('VIETNAMESE')}
                    className={`px-2 py-0.5 rounded-lg transition ${
                      languageMode === 'VIETNAMESE' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    VN
                  </button>
                  <button
                    onClick={() => setLanguageMode('BILINGUAL')}
                    className={`px-2 py-0.5 rounded-lg transition ${
                      languageMode === 'BILINGUAL' ? 'bg-violet-600 text-white font-bold shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Song ngữ
                  </button>
                  <button
                    onClick={() => setLanguageMode('ENGLISH')}
                    className={`px-2 py-0.5 rounded-lg transition ${
                      languageMode === 'ENGLISH' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center bg-slate-100 p-0.5 rounded-xl text-xs font-bold">
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(65, z - 10))}
                    className="p-1 text-slate-600 hover:text-slate-900 cursor-pointer"
                    title="Thu nhỏ"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-1.5 text-[11px] font-mono text-slate-700">{zoomLevel}%</span>
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(140, z + 10))}
                    className="p-1 text-slate-600 hover:text-slate-900 cursor-pointer"
                    title="Phóng to"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <button
                  onClick={() => setZoomLevel(100)}
                  className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold rounded-lg cursor-pointer"
                >
                  Vừa khung
                </button>
              </div>
            </div>

            {/* A4 DOCUMENT PREVIEW CONTAINER */}
            <div className="bg-slate-200/70 p-3 sm:p-5 rounded-2xl overflow-x-auto flex justify-center border border-slate-300/80 shadow-inner">
              <div
                ref={printAreaRef}
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                className="bg-white w-full max-w-[210mm] min-h-[297mm] p-8 sm:p-12 shadow-2xl border border-slate-300 text-slate-900 font-serif leading-relaxed transition-transform duration-150 print:shadow-none print:border-none print:m-0 print:p-6"
              >
                {/* School & Topic Header */}
                <div className="border-b-2 border-slate-900 pb-3 mb-6 font-sans">
                  <div className="flex justify-between items-start text-xs">
                    <div>
                      <p className="font-bold uppercase text-slate-700">SỞ GD&ĐT TỈNH / THPT CHÂU THÀNH A</p>
                      <p className="font-extrabold text-violet-900 uppercase">TỔ TOÁN - TIẾNG ANH</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-700">CHUYÊN ĐỀ GDPT 2018</p>
                      <p className="font-mono text-slate-500 text-[11px]">Mã phiếu: MB-TOAN{selectedGrade}</p>
                    </div>
                  </div>
                </div>

                {/* Document Main Title */}
                {(() => {
                  const activeChap = chapters.find((c) => c.id === activeLesson?.chapter_id) || chapters[0];
                  return (
                    <div className="text-center space-y-1 mb-6 font-sans">
                      <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                        {documentTitle}
                      </h1>
                      <h2 className="text-sm sm:text-base font-bold text-violet-900 uppercase">
                        {activeLesson?.title_vi || `CHUYÊN ĐỀ TOÁN ${selectedGrade}`}
                      </h2>
                      <p className="text-xs text-slate-500 italic">
                        {activeChap ? `${activeChap.name_vi} — Toán ${selectedGrade} KNTT` : `Toán ${selectedGrade} KNTT`}
                      </p>
                      {languageMode === 'BILINGUAL' && activeLesson?.title_en && (
                        <p className="text-xs font-bold text-teal-700 font-sans">
                          {activeLesson.title_en}
                        </p>
                      )}
                    </div>
                  );
                })()}

                {/* ========================================================= */}
                {/* SECTION A: TÓM TẮT LÝ THUYẾT */}
                {/* ========================================================= */}
                {includeTheory && activeLesson && (
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 border-b border-violet-200 pb-1">
                      <h3 className="font-sans font-black text-sm sm:text-base text-violet-950 uppercase">
                        A. TÓM TẮT LÝ THUYẾT
                      </h3>
                      {languageMode === 'BILINGUAL' && (
                        <span className="text-xs text-slate-500 font-sans italic">(Theory Summary)</span>
                      )}
                    </div>

                    <div className="text-xs sm:text-sm text-slate-800 space-y-2 pl-2">
                      {/* Key Concepts */}
                      {activeLesson.key_concepts_vi && (
                        <div className="space-y-1.5 leading-relaxed">
                          {activeLesson.key_concepts_vi.split('\n').map((line, idx) => (
                            <div key={idx} className="flex items-start gap-1">
                              <MathRenderer content={languageMode === 'ENGLISH' && activeLesson.key_concepts_en ? activeLesson.key_concepts_en.split('\n')[idx] || line : line} />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Formulas */}
                      {activeLesson.formulas && activeLesson.formulas.length > 0 && (
                        <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 mt-2 space-y-1">
                          <p className="font-bold text-violet-900 text-xs uppercase font-sans">Công thức trọng tâm:</p>
                          <div className="space-y-1 pl-2 font-mono text-xs">
                            {activeLesson.formulas.map((f, i) => (
                              <div key={i}>
                                <MathRenderer content={`$$${f}$$`} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Bilingual Vocabulary Pill Container */}
                      <div className="mt-3 p-3 bg-violet-50/80 rounded-xl border border-violet-200 text-xs font-sans space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-violet-900 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                            Thuật ngữ toán học tiếng Anh cốt lõi:
                          </span>
                          <button
                            onClick={() => speakEnglishWord(activeLesson.vocabulary_list?.join(', ') || activeLesson.title_en || 'Mathematics')}
                            className="p-1 text-violet-700 hover:text-violet-900 rounded cursor-pointer"
                            title="Nghe phát âm chuẩn"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          {activeLesson.vocabulary_list && activeLesson.vocabulary_list.length > 0 ? (
                            activeLesson.vocabulary_list.map((voc, vIdx) => (
                              <span key={vIdx} className="mr-3 inline-block">
                                • <strong>{voc}</strong>
                              </span>
                            ))
                          ) : (
                            <span>• <strong>{activeLesson.title_en}</strong></span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* SECTION B: BÀI TẬP MẪU CÓ LỜI GIẢI */}
                {/* ========================================================= */}
                {includeWorkedExamples && (
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-2 border-b border-violet-200 pb-1">
                      <h3 className="font-sans font-black text-sm sm:text-base text-violet-950 uppercase">
                        B. BÀI TẬP MẪU CÓ LỜI GIẢI
                      </h3>
                      {languageMode === 'BILINGUAL' && (
                        <span className="text-xs text-slate-500 font-sans italic">(Worked Examples)</span>
                      )}
                    </div>

                    <div className="space-y-5 text-xs sm:text-sm">
                      {displayedExamples.length === 0 ? (
                        <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-center text-slate-500">
                          <p className="text-xs">Chưa có bài tập mẫu được lưu cho dạng toán này.</p>
                          <button
                            onClick={handleAiGenerateWorksheet}
                            disabled={isAiGeneratingWorksheet}
                            className="mt-2 px-3 py-1 bg-violet-100 hover:bg-violet-200 text-violet-800 text-xs font-bold rounded-lg transition"
                          >
                            ✨ AI Tự sinh bài tập mẫu
                          </button>
                        </div>
                      ) : (
                        displayedExamples.map((ex, idx) => (
                          <div key={idx} className="space-y-2 border-b border-slate-100 pb-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-sans font-bold text-violet-900">
                                {ex.type_code || `Dạng ${idx + 1}`}
                              </h4>
                              {ex.problem_en && (
                                <button
                                  onClick={() => speakEnglishWord(ex.problem_en)}
                                  className="p-1 text-slate-400 hover:text-violet-700 cursor-pointer"
                                  title="Nghe phát âm tiếng Anh"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>

                            <div className="font-medium text-slate-900">
                              <strong>{ex.title_vi || `Ví dụ ${idx + 1}`}:</strong>{' '}
                              <MathRenderer content={ex.problem_vi} inline />
                            </div>

                            {languageMode === 'BILINGUAL' && ex.problem_en && (
                              <div className="text-xs text-teal-800 font-sans italic pl-3 border-l-2 border-teal-300">
                                <MathRenderer content={ex.problem_en} inline />
                              </div>
                            )}

                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1">
                              <p className="font-bold font-sans text-rose-800">Lời giải chi tiết:</p>
                              <div className="leading-relaxed">
                                <MathRenderer content={ex.solution_vi || ex.solution_en || ''} />
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* SECTION C: BÀI TẬP TỰ LUYỆN 4 DẠNG THỨC GDPT 2018 */}
                {/* ========================================================= */}
                {(() => {
                  const tnQuestions = displayedQuestions.filter((q) => q.format_type === 'TN' || q.question_type === 'MCQ');
                  const dsQuestions = displayedQuestions.filter((q) => q.format_type === 'DS' || q.question_type === 'TRUE_FALSE');
                  const tlnQuestions = displayedQuestions.filter((q) => q.format_type === 'TLN' || q.question_type === 'SHORT');
                  const tlQuestions = displayedQuestions.filter((q) => q.format_type === 'TL' || q.question_type === 'ESSAY');

                  return (
                    <div className="space-y-5 mb-8">
                      <div className="flex items-center justify-between border-b border-violet-200 pb-1">
                        <h3 className="font-sans font-black text-sm sm:text-base text-violet-950 uppercase">
                          C. BÀI TẬP TỰ LUYỆN SONG NGỮ (Theo 4 dạng thức GDPT 2018)
                        </h3>
                      </div>

                      {displayedQuestions.length === 0 ? (
                        <div className="p-6 bg-violet-50/60 rounded-2xl border border-dashed border-violet-300 text-center space-y-3 font-sans">
                          <p className="text-xs font-bold text-violet-950">
                            Chưa có câu hỏi tự luyện cho bài học này trong ngân hàng đề.
                          </p>
                          <p className="text-[11px] text-slate-600 max-w-md mx-auto">
                            Thầy/Cô có thể bấm nút bên dưới để Gemini AI tự động sinh đầy đủ 4 dạng câu hỏi (Trắc nghiệm, Đúng/Sai, Trả lời ngắn, Tự luận) chuẩn GDPT 2018 ngay lập tức!
                          </p>
                          <button
                            onClick={handleAiGenerateWorksheet}
                            disabled={isAiGeneratingWorksheet}
                            className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-xs font-extrabold rounded-xl shadow-xs transition inline-flex items-center gap-1.5"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                            {isAiGeneratingWorksheet ? 'AI đang soạn bài tập...' : '✨ AI Soạn câu hỏi theo bài này'}
                          </button>
                        </div>
                      ) : (
                        <>
                          {/* PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN (TN) */}
                          {tnQuestions.length > 0 && (
                            <div className="space-y-3">
                              <p className="font-sans font-bold text-xs sm:text-sm text-violet-900 uppercase">
                                PHẦN I. CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (TN)
                              </p>
                              <div className="space-y-4 text-xs sm:text-sm">
                                {tnQuestions.map((q, idx) => (
                                  <div key={q.id} className="space-y-1.5">
                                    <div>
                                      <span className="font-sans font-bold text-slate-900 mr-1.5">Câu {idx + 1}:</span>
                                      <MathRenderer content={languageMode === 'ENGLISH' ? q.question_en : q.question_vi} inline />
                                    </div>

                                    {languageMode === 'BILINGUAL' && q.question_en && (
                                      <p className="text-xs text-teal-800 italic pl-5 font-sans">
                                        (En: <MathRenderer content={q.question_en} inline />)
                                      </p>
                                    )}

                                    {q.options && (
                                      <div className="grid grid-cols-2 gap-2 pl-5 pt-1 font-sans">
                                        {q.options.map((opt) => (
                                          <div key={opt.option_key} className="flex items-center gap-1.5">
                                            <span className="font-bold">{opt.option_key}.</span>
                                            <MathRenderer content={opt.content_vi || opt.content_en} inline />
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (Đ/S) */}
                          {dsQuestions.length > 0 && (
                            <div className="space-y-3 pt-2">
                              <p className="font-sans font-bold text-xs sm:text-sm text-violet-900 uppercase">
                                PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG / SAI (Đ/S)
                              </p>
                              {dsQuestions.map((q, idx) => (
                                <div key={q.id} className="space-y-2 text-xs sm:text-sm">
                                  <div>
                                    <span className="font-sans font-bold text-slate-900 mr-1.5">Câu {idx + 1}:</span>
                                    <MathRenderer content={q.question_vi} inline />
                                  </div>
                                  {q.options && (
                                    <div className="grid grid-cols-1 gap-1.5 pl-5 font-sans text-xs">
                                      {q.options.map((opt) => (
                                        <div key={opt.option_key} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                                          <div>
                                            <span className="font-bold mr-1.5">{opt.option_key})</span>
                                            <MathRenderer content={opt.content_vi} inline />
                                          </div>
                                          <div className="flex gap-2 text-[11px] font-bold">
                                            <span className="px-2 py-0.5 border border-slate-300 rounded bg-white">Đ</span>
                                            <span className="px-2 py-0.5 border border-slate-300 rounded bg-white">S</span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* PHẦN III: TRẢ LỜI NGẮN (TLN) */}
                          {tlnQuestions.length > 0 && (
                            <div className="space-y-3 pt-2">
                              <p className="font-sans font-bold text-xs sm:text-sm text-violet-900 uppercase">
                                PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (TLN)
                              </p>
                              {tlnQuestions.map((q, idx) => (
                                <div key={q.id} className="space-y-1.5 text-xs sm:text-sm">
                                  <div>
                                    <span className="font-sans font-bold text-slate-900 mr-1.5">Câu {idx + 1}:</span>
                                    <MathRenderer content={q.question_vi} inline />
                                  </div>
                                  <div className="pl-5 font-sans text-xs text-slate-500">
                                    Đáp số: [ ____________________ ]
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* PHẦN IV: TỰ LUẬN (TL) */}
                          {tlQuestions.length > 0 && (
                            <div className="space-y-3 pt-2">
                              <p className="font-sans font-bold text-xs sm:text-sm text-violet-900 uppercase">
                                PHẦN IV. CÂU HỎI TỰ LUẬN (TL)
                              </p>
                              {tlQuestions.map((q, idx) => (
                                <div key={q.id} className="space-y-1.5 text-xs sm:text-sm">
                                  <div>
                                    <span className="font-sans font-bold text-slate-900 mr-1.5">Câu {idx + 1}:</span>
                                    <MathRenderer content={q.question_vi} inline />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })()}

                {/* ========================================================= */}
                {/* SECTION D: BẢNG ĐÁP SỐ CUỐI BÀI */}
                {/* ========================================================= */}
                {includeAnswerKey && displayedQuestions.length > 0 && (
                  <div className="mt-8 pt-4 border-t-2 border-dashed border-slate-300 font-sans text-xs">
                    <p className="font-bold text-center uppercase text-slate-700 mb-2">
                      BẢNG ĐÁP SỐ GỌN (ANSWER KEY)
                    </p>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 text-center border border-slate-300 p-2 rounded-xl bg-slate-50/50">
                      {displayedQuestions.map((q, qIdx) => (
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
                  --- HẾT ---
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 3. CỘT PHẢI: DẠNG ĐÃ CHỌN & LỆNH XUẤT (Right Controls) - 3 cols */}
          {/* ========================================================================= */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-4">
            
            {/* Section 1: Dạng đã chọn */}
            <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-violet-600 font-black text-sm">◆</span>
                  <h3 className="font-extrabold text-sm text-slate-900">Dạng đã chọn</h3>
                </div>
                <span className="text-xs font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full font-mono">
                  {selectedTypesList.length} dạng
                </span>
              </div>

              {/* List of Selected Types */}
              <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1">
                {selectedTypesList.length === 0 ? (
                  <p className="text-xs text-slate-400 italic text-center py-4">
                    Chưa chọn dạng nào. Hãy tick chọn các dạng toán ở Cây chương trình bên trái.
                  </p>
                ) : (
                  selectedTypesList.map((type) => {
                    const counts = typeQuestionCounts[type.id] || { tn: 2, ds: 1, tln: 1, tl: 1 };
                    return (
                      <div
                        key={type.id}
                        className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 text-xs space-y-2 relative group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-xs">
                              {type.code}. {type.title_vi}
                            </h4>
                            <p className="text-[10px] text-slate-400 mt-0.5">
                              Lớp {selectedGrade} - {activeLesson?.title_vi}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedTypeIds(selectedTypeIds.filter((id) => id !== type.id));
                              const nextCounts = { ...typeQuestionCounts };
                              delete nextCounts[type.id];
                              setTypeQuestionCounts(nextCounts);
                            }}
                            className="text-slate-400 hover:text-rose-600 p-0.5 rounded cursor-pointer"
                            title="Xóa dạng này"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* 4 Question Formats Inputs */}
                        <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-xs">
                          <div>
                            <span className="text-[10px] text-slate-400 font-sans block">TN</span>
                            <input
                              type="number"
                              min={0}
                              max={10}
                              value={counts.tn}
                              onChange={(e) =>
                                setTypeQuestionCounts({
                                  ...typeQuestionCounts,
                                  [type.id]: { ...counts, tn: parseInt(e.target.value, 10) || 0 },
                                })
                              }
                              className="w-full text-center bg-white border border-slate-200 rounded py-0.5 text-xs font-bold text-violet-900"
                            />
                          </div>

                          <div>
                            <span className="text-[10px] text-slate-400 font-sans block">Đ/S</span>
                            <input
                              type="number"
                              min={0}
                              max={10}
                              value={counts.ds}
                              onChange={(e) =>
                                setTypeQuestionCounts({
                                  ...typeQuestionCounts,
                                  [type.id]: { ...counts, ds: parseInt(e.target.value, 10) || 0 },
                                })
                              }
                              className="w-full text-center bg-white border border-slate-200 rounded py-0.5 text-xs font-bold text-violet-900"
                            />
                          </div>

                          <div>
                            <span className="text-[10px] text-slate-400 font-sans block">TLN</span>
                            <input
                              type="number"
                              min={0}
                              max={10}
                              value={counts.tln}
                              onChange={(e) =>
                                setTypeQuestionCounts({
                                  ...typeQuestionCounts,
                                  [type.id]: { ...counts, tln: parseInt(e.target.value, 10) || 0 },
                                })
                              }
                              className="w-full text-center bg-white border border-slate-200 rounded py-0.5 text-xs font-bold text-violet-900"
                            />
                          </div>

                          <div>
                            <span className="text-[10px] text-slate-400 font-sans block">TL</span>
                            <input
                              type="number"
                              min={0}
                              max={10}
                              value={counts.tl}
                              onChange={(e) =>
                                setTypeQuestionCounts({
                                  ...typeQuestionCounts,
                                  [type.id]: { ...counts, tl: parseInt(e.target.value, 10) || 0 },
                                })
                              }
                              className="w-full text-center bg-white border border-slate-200 rounded py-0.5 text-xs font-bold text-violet-900"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Section 2: Lệnh xuất */}
            <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-sm space-y-3.5">
              <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
                <span className="text-violet-600 font-black text-sm">◆</span>
                <h3 className="font-extrabold text-sm text-slate-900">Lệnh xuất</h3>
              </div>

              {/* 4 Preset Buttons */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => {
                    setExportPreset('EXERCISE');
                    setIncludeTheory(false);
                    setIncludeWorkedExamples(false);
                    setIncludeAnswerKey(true);
                  }}
                  className={`p-2.5 rounded-xl border text-left font-bold transition cursor-pointer leading-tight ${
                    exportPreset === 'EXERCISE'
                      ? 'bg-violet-50 text-violet-950 border-violet-500 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <p className="font-extrabold">Bài tập</p>
                  <p className="text-[10px] font-normal text-slate-500">Theo dạng đã chọn</p>
                </button>

                <button
                  onClick={() => {
                    setExportPreset('THEMATIC');
                    setIncludeTheory(true);
                    setIncludeWorkedExamples(true);
                    setIncludeAnswerKey(true);
                  }}
                  className={`p-2.5 rounded-xl border text-left font-bold transition cursor-pointer leading-tight ${
                    exportPreset === 'THEMATIC'
                      ? 'bg-violet-50 text-violet-950 border-violet-500 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <p className="font-extrabold">Chuyên đề học tập</p>
                  <p className="text-[10px] font-normal text-slate-500">Lý thuyết + ví dụ + bài tập</p>
                </button>

                <button
                  onClick={() => {
                    setExportPreset('WORKSHEET');
                    setIncludeTheory(true);
                    setIncludeWorkedExamples(false);
                    setIncludeAnswerKey(false);
                  }}
                  className={`p-2.5 rounded-xl border text-left font-bold transition cursor-pointer leading-tight ${
                    exportPreset === 'WORKSHEET'
                      ? 'bg-violet-50 text-violet-950 border-violet-500 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <p className="font-extrabold">Phiếu học tập</p>
                  <p className="text-[10px] font-normal text-slate-500">Có chỗ làm bài</p>
                </button>

                <button
                  onClick={() => {
                    setExportPreset('OUTLINE');
                    setIncludeTheory(true);
                    setIncludeWorkedExamples(true);
                    setIncludeAnswerKey(true);
                  }}
                  className={`p-2.5 rounded-xl border text-left font-bold transition cursor-pointer leading-tight ${
                    exportPreset === 'OUTLINE'
                      ? 'bg-violet-50 text-violet-950 border-violet-500 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <p className="font-extrabold">Đề cương ôn tập</p>
                  <p className="text-[10px] font-normal text-slate-500">Đủ 4 phần + chữ ký</p>
                </button>
              </div>

              {/* Document Title Input */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-600">Tiêu đề tài liệu:</label>
                <input
                  type="text"
                  value={documentTitle}
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500 font-bold"
                />
              </div>

              {/* 5 Export Checkboxes */}
              <div className="space-y-2 text-xs">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeTheory}
                    onChange={(e) => setIncludeTheory(e.target.checked)}
                    className="mt-0.5 w-3.5 h-3.5 accent-violet-600 rounded cursor-pointer"
                  />
                  <div>
                    <span className="font-bold text-slate-800">Kèm tóm tắt lý thuyết</span>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      Chèn phần lý thuyết trọng tâm của bài trước bài tập
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeWorkedExamples}
                    onChange={(e) => setIncludeWorkedExamples(e.target.checked)}
                    className="mt-0.5 w-3.5 h-3.5 accent-violet-600 rounded cursor-pointer"
                  />
                  <div>
                    <span className="font-bold text-slate-800">Kèm bài tập mẫu có lời giải</span>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      Mỗi dạng một ví dụ giải chi tiết
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeAnswerKey}
                    onChange={(e) => setIncludeAnswerKey(e.target.checked)}
                    className="mt-0.5 w-3.5 h-3.5 accent-violet-600 rounded cursor-pointer"
                  />
                  <div>
                    <span className="font-bold text-slate-800">Kèm đáp số cuối mỗi bài</span>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      Bảng đáp số gọn đặt ở cuối phần bài tập
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeDetailedSolutions}
                    onChange={(e) => setIncludeDetailedSolutions(e.target.checked)}
                    className="mt-0.5 w-3.5 h-3.5 accent-violet-600 rounded cursor-pointer"
                  />
                  <div>
                    <span className="font-bold text-slate-800">Kèm lời giải chi tiết</span>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      Lời giải bước từng bước song ngữ
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={languageMode === 'BILINGUAL'}
                    onChange={(e) => setLanguageMode(e.target.checked ? 'BILINGUAL' : 'VIETNAMESE')}
                    className="mt-0.5 w-3.5 h-3.5 accent-violet-600 rounded cursor-pointer"
                  />
                  <div>
                    <span className="font-bold text-slate-800">Chế độ song ngữ Anh - Việt</span>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      Đề bài và lý thuyết hiển thị song ngữ chuẩn quốc tế
                    </p>
                  </div>
                </label>
              </div>

              {/* 3 Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <button
                  onClick={handlePrint}
                  className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-violet-500/20 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Xuất PDF / In Phiếu Bài Tập</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleDownloadDoc}
                    className="py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-violet-700" />
                    <span>Tải File Word</span>
                  </button>

                  <button
                    onClick={handleCopyWord}
                    className="py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5 text-violet-700" />
                    <span>Copy Text</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
