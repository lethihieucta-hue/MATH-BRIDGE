import React, { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../../lib/store';
import { Chapter, Lesson, MathType, WorkedExample, Question, LanguageMode } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { QuestionAssetRenderer } from '../math/QuestionAssetRenderer';
import { speakEnglishWord } from '../../lib/audio';
import { apiFetch } from '../../lib/dataService';
import { generateCompleteLessonWorksheetAi, generateWorksheetQuestionsByPlanAi, hasApiKey } from '../../lib/geminiService';
import {
  getQuestionsForMathTypeStructured,
  getWorkedExamplesForLesson,
  getQuestionDedupSignature,
  getQuestionStructureSignature,
  isQuestionCompatibleWithTopic,
} from '../../lib/questionBankData';
import { getAllowedVariantTags } from '../../lib/questionBlueprintData';
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

type QuestionCounts = { tn: number; ds: number; tln: number; tl: number };
const DEFAULT_COUNTS: QuestionCounts = { tn: 4, ds: 2, tln: 2, tl: 1 };
const getDefaultCountsForType = (type?: MathType): QuestionCounts => ({
  tn: type?.sample_count_tn ?? DEFAULT_COUNTS.tn,
  ds: type?.sample_count_ds ?? DEFAULT_COUNTS.ds,
  tln: type?.sample_count_tln ?? DEFAULT_COUNTS.tln,
  tl: type?.sample_count_tl ?? DEFAULT_COUNTS.tl,
});

const withTimeout = async <T,>(promise: Promise<T>, ms: number, label = 'AI'): Promise<T> => {
  let timer: number | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<T>((_, reject) => {
        timer = window.setTimeout(() => reject(new Error(`${label} quá thời gian chờ ${Math.round(ms / 1000)} giây.`)), ms);
      }),
    ]);
  } finally {
    if (timer) window.clearTimeout(timer);
  }
};

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

  // Per-type question counts. Curriculum defaults are 4 TN + 2 Đ/S + 2 TLN + 1 TL, but the teacher can override each cell.
  const [typeQuestionCounts, setTypeQuestionCounts] = useState<Record<string, QuestionCounts>>({});
  const [isAutoGeneratingQuestions, setIsAutoGeneratingQuestions] = useState(false);
  const [questionGenerationMessage, setQuestionGenerationMessage] = useState<string>('');

  // Online practice interactive state
  const [onlinePracticeAnswers, setOnlinePracticeAnswers] = useState<Record<string, string>>({});
  const [onlinePracticeSubmitted, setOnlinePracticeSubmitted] = useState(false);

  const printAreaRef = useRef<HTMLDivElement>(null);
  const autoGenerationRunRef = useRef<string>('');

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
      setSelectedTypeIds([]);
      if (targetLesson) {
        setSelectedLessonId(targetLesson.id);
        const typeIds = targetLesson.types?.map((t) => t.id) || [];
        const initCounts: Record<string, QuestionCounts> = {};
        typeIds.forEach((tId) => {
          initCounts[tId] = getDefaultCountsForType(targetLesson.types?.find((t) => t.id === tId));
        });
        setTypeQuestionCounts(initCounts);
      } else {
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

    const activeChap = chapters.find((c) => c.id === activeLesson.chapter_id);
    const chapterName = activeChap ? activeChap.name_vi : `Toán Lớp ${selectedGrade}`;
    const requestedTypesForAi = (activeLesson.types || []).filter((t) => selectedTypeIds.length === 0 || selectedTypeIds.includes(t.id));

    setIsAiGeneratingWorksheet(true);

    if (hasApiKey()) {
      showNotification(`🤖 AI Gemini đang soạn thảo phiếu học tập song ngữ cho "${activeLesson.title_vi}"...`);
      try {
        const result = await withTimeout(
          generateCompleteLessonWorksheetAi(
            activeLesson.title_vi,
            chapterName,
            selectedGrade,
            requestedTypesForAi.map((t) => ({
              id: t.id,
              code: t.code,
              title_vi: t.title_vi,
              title_en: t.title_en,
            })),
            {
              key_concepts_vi: activeLesson.key_concepts_vi,
              formulas: activeLesson.formulas || [],
            }
          ),
          45000,
          'AI soạn phiếu'
        );

        if (result && result.success && result.content) {
          const jsonMatch = result.content.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const data = JSON.parse(jsonMatch[0]);

            // Update active lesson with AI data
            const updatedLesson: Lesson = {
              ...activeLesson,
              // Lý thuyết/công thức chuẩn là dữ liệu curriculum đã biên soạn; AI không được ghi đè thành danh sách dạng toán.
              key_concepts_vi: activeLesson.key_concepts_vi,
              key_concepts_en: activeLesson.key_concepts_en,
              formulas: activeLesson.formulas || [],
              // 5 từ vựng EN—VI đã được biên soạn cố định theo bài; AI không ghi đè.
              vocabulary_list: activeLesson.vocabulary_list,
              // Preserve the curriculum's stable type IDs. AI is not allowed to rename or
              // replace math types because question routing depends on these IDs.
              types: activeLesson.types,
              worked_examples: data.worked_examples
                ? data.worked_examples
                    .filter(
                      (we: any) =>
                        (activeLesson.types || []).some((t) => t.id === we.type_id) &&
                        isQuestionCompatibleWithTopic(
                          activeLesson.topic_id,
                          `${we?.problem_vi || ''} ${we?.problem_en || ''} ${we?.solution_vi || ''}`
                        )
                    )
                    .map((we: any, idx: number) => ({
                      id: `we-ai-${activeLesson.id}-${idx + 1}`,
                      type_id: we.type_id,
                      type_code: we.type_code || activeLesson.types?.find((t) => t.id === we.type_id)?.code || `Dạng ${idx + 1}`,
                      title_vi: we.title_vi || `Ví dụ ${idx + 1}`,
                      title_en: we.title_en || `Example ${idx + 1}`,
                      problem_vi: we.problem_vi || '',
                      problem_en: we.problem_en || '',
                      solution_vi: we.solution_vi || '',
                      solution_en: we.solution_en || '',
                    }))
                : activeLesson.worked_examples,
            };

            await apiFetch('/api/lessons', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(updatedLesson),
            });

            let acceptedAiQuestions: Question[] = [];
            let rejectedAiQuestions = 0;
            if (data.questions && Array.isArray(data.questions)) {
              const typeMap = new Map<string, MathType>(requestedTypesForAi.map((t): [string, MathType] => [t.id, t]));
              const seenStructures = new Set<string>();
              const variantUseCount = new Map<string, number>();
              const now = new Date().toISOString();

              data.questions.forEach((q: any, i: number) => {
                const mathType = q?.type_id ? typeMap.get(q.type_id) : undefined;
                const questionText = `${q?.question_vi || ''} ${q?.question_en || ''}`.trim();
                const formatType = (q?.format_type || 'TN') as 'TN' | 'DS' | 'TLN' | 'TL';
                const options = Array.isArray(q?.options) ? q.options : [];

                const hasValidType = Boolean(mathType);
                const allowedVariantTags = q?.type_id ? getAllowedVariantTags(q.type_id) : [];
                const hasValidVariant = allowedVariantTags.length === 0 || allowedVariantTags.includes(q?.variant_tag);
                const variantKey = `${q?.type_id}|${q?.variant_tag || ''}`;
                const variantCount = variantUseCount.get(variantKey) || 0;
                const variantOverused = Boolean(q?.variant_tag) && variantCount >= 2;
                const hasContent = questionText.length >= 8;
                const inLessonScope = isQuestionCompatibleWithTopic(activeLesson.topic_id, `${questionText} ${q?.solution_vi || ''}`);
                const validMcq = formatType !== 'TN' || (options.length === 4 && options.filter((o: any) => o?.is_correct).length === 1);
                const validTrueFalse = formatType !== 'DS' || options.length === 4;
                const structureKey = `${q?.type_id}|${formatType}|${getQuestionStructureSignature(q?.question_vi || q?.question_en)}`;
                const isNumberOnlyClone = seenStructures.has(structureKey);

                if (!hasValidType || !hasValidVariant || variantOverused || !hasContent || !inLessonScope || !validMcq || !validTrueFalse || isNumberOnlyClone) {
                  rejectedAiQuestions += 1;
                  return;
                }
                seenStructures.add(structureKey);
                if (q?.variant_tag) variantUseCount.set(variantKey, variantCount + 1);

                const inferredCorrectAnswer = formatType === 'TN'
                  ? (options.find((o: any) => o?.is_correct)?.option_key || q.correct_answer || '')
                  : formatType === 'DS'
                    ? (q.correct_answer || options.map((o: any) => `${o.option_key}-${o.is_correct ? 'Đ' : 'S'}`).join(', '))
                    : (q.correct_answer || '');

                const normalizedQuestion: Question = {
                  id: `q-ai-${activeLesson.id}-${q.type_id}-${formatType}-${Date.now()}-${i}`,
                  topic_id: activeLesson.topic_id || `top-${activeLesson.id}`,
                  type_id: q.type_id,
                  variant_tag: q.variant_tag || 'mixed',
                  question_type: q.question_type || (formatType === 'DS' ? 'TRUE_FALSE' : formatType === 'TLN' ? 'SHORT' : formatType === 'TL' ? 'ESSAY' : 'MCQ'),
                  format_type: formatType,
                  difficulty: q.difficulty || 'MEDIUM',
                  language_level: 2,
                  question_vi: q.question_vi || '',
                  question_en: q.question_en || '',
                  options,
                  solution_vi: q.solution_vi || 'Lời giải chi tiết',
                  solution_en: q.solution_en || 'Detailed solution',
                  correct_answer: inferredCorrectAnswer,
                  math_skill: mathType?.title_vi || activeLesson.title_vi,
                  english_skill: mathType?.title_en || activeLesson.title_en,
                  status: 'PUBLISHED',
                  created_by: 'usr-teacher-1',
                  created_at: now,
                };
                acceptedAiQuestions.push(normalizedQuestion);
              });

              // Replace only previously AI/user-generated questions for these exact types.
              // Canonical built-in questions are preserved by the API migration layer.
              if (acceptedAiQuestions.length > 0) {
                await apiFetch('/api/questions/replace-types', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    type_ids: Array.from(typeMap.keys()),
                    questions: acceptedAiQuestions,
                  }),
                });
              }
            }

            const weakVariantTypes = requestedTypesForAi
              .map((t) => ({
                type: t,
                variantCount: new Set(
                  acceptedAiQuestions
                    .filter((q) => q.type_id === t.id && q.variant_tag)
                    .map((q) => q.variant_tag as string)
                ).size,
              }))
              .filter((item) => item.variantCount > 0 && item.variantCount < 5);

            const refreshedQuestions = await apiFetch<Question[]>('/api/questions');
            setAllQuestions(refreshedQuestions || []);
            setActiveLesson(updatedLesson);
            showNotification(
              `✨ Đã cập nhật ${acceptedAiQuestions.length} câu đúng type cho "${activeLesson.title_vi}"` +
              `${rejectedAiQuestions > 0 ? `; loại ${rejectedAiQuestions} câu trùng/sai phạm vi/sai blueprint` : ''}` +
              `${weakVariantTypes.length > 0 ? `; cảnh báo ${weakVariantTypes.length} dạng chưa phủ đủ 5 cấu trúc` : ''}.`
            );
            setIsAiGeneratingWorksheet(false);
            return;
          }
        }
      } catch (err) {
        console.warn('Gemini API call failed, loading built-in bank:', err);
      }
    }

    // Fallback: only use banks generated for the exact math types of this lesson.
    // Never pass lessonId as a typeId; that previously triggered the generic extrema fallback.
    const defaultWe = getWorkedExamplesForLesson(activeLesson.id);
    const defaultQs = (activeLesson.types || []).flatMap((t) =>
      getQuestionsForMathTypeStructured(t.id, activeLesson.topic_id).all
    );

    const fallbackLesson: Lesson = {
      ...activeLesson,
      worked_examples: (activeLesson.worked_examples && activeLesson.worked_examples.length > 0)
        ? activeLesson.worked_examples
        : defaultWe,
    };

    // Canonical static questions are already part of /api/questions; do not POST duplicates.
    const refreshedQuestions = await apiFetch<Question[]>('/api/questions');
    setAllQuestions(refreshedQuestions || []);
    setActiveLesson(fallbackLesson);
    showNotification(`✅ Đã dùng ngân hàng tĩnh đúng type_id cho "${activeLesson.title_vi}"; không cần chờ AI để có bài tập.`);
    setIsAiGeneratingWorksheet(false);
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
    autoGenerationRunRef.current = '';
    setQuestionGenerationMessage('');
    const lessonTypeIds = activeLesson.types?.map((t) => t.id) || [];
    const newSelected = Array.from(new Set([...selectedTypeIds, ...lessonTypeIds]));
    setSelectedTypeIds(newSelected);

    const updatedCounts = { ...typeQuestionCounts };
    lessonTypeIds.forEach((tId) => {
      if (!updatedCounts[tId]) {
        updatedCounts[tId] = getDefaultCountsForType(activeLesson.types?.find((t) => t.id === tId));
      }
    });
    setTypeQuestionCounts(updatedCounts);
    showNotification(`Đã chọn toàn bộ các dạng của ${activeLesson.title_vi}`);
  };

  // Tree Action: Deselect All
  const handleDeselectAllTypes = () => {
    autoGenerationRunRef.current = '';
    setQuestionGenerationMessage('');
    setSelectedTypeIds([]);
    setTypeQuestionCounts({});
    showNotification('Đã bỏ chọn tất cả các dạng toán');
  };

  // Toggle single type checkbox
  const toggleTypeSelection = (type: MathType, e: React.MouseEvent) => {
    e.stopPropagation();
    autoGenerationRunRef.current = '';
    setQuestionGenerationMessage('');
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
        [type.id]: getDefaultCountsForType(type),
      });
    }
  };

  // Switch Active Lesson
  const handleSelectLesson = (lesson: Lesson) => {
    autoGenerationRunRef.current = '';
    setQuestionGenerationMessage('');
    setActiveLesson(lesson);
    setSelectedLessonId(lesson.id);
    setSelectedTypeIds([]);
    const lessonTypeIds = lesson.types?.map((t) => t.id) || [];
    const nextCounts: Record<string, QuestionCounts> = {};
    lessonTypeIds.forEach((tId) => {
      nextCounts[tId] = getDefaultCountsForType(lesson.types?.find((t) => t.id === tId));
    });
    setTypeQuestionCounts(nextCounts);
  };

  const updateTypeQuestionCount = (typeId: string, kind: keyof QuestionCounts, rawValue: string) => {
    const value = Math.max(0, Math.min(10, Number.parseInt(rawValue, 10) || 0));
    autoGenerationRunRef.current = '';
    setQuestionGenerationMessage('');
    setTypeQuestionCounts((prev) => ({
      ...prev,
      [typeId]: { ...(prev[typeId] || DEFAULT_COUNTS), [kind]: value },
    }));
  };

  // Export Action: Print PDF
  const handlePrint = () => {
    window.print();
  };

  // Question routing helpers. Every question is isolated by exact type_id and then by format.
  // The 4 numbers in the right sidebar are the single source of truth for how many questions appear.
  const bucketQuestion = (q: Question): keyof QuestionCounts => {
    if (q.format_type === 'DS' || q.question_type === 'TRUE_FALSE') return 'ds';
    if (q.format_type === 'TLN' || q.question_type === 'SHORT' || q.question_type === 'NUMERIC') return 'tln';
    if (q.format_type === 'TL' || q.question_type === 'ESSAY') return 'tl';
    return 'tn';
  };

  const diversifyByVariant = (items: Question[]): Question[] => {
    const firstOfVariant: Question[] = [];
    const repeatedVariant: Question[] = [];
    const usedVariants = new Set<string>();
    items.forEach((q) => {
      const tag = q.variant_tag?.trim();
      if (!tag) repeatedVariant.push(q);
      else if (!usedVariants.has(tag)) {
        usedVariants.add(tag);
        firstOfVariant.push(q);
      } else repeatedVariant.push(q);
    });
    return [...firstOfVariant, ...repeatedVariant];
  };

  const getQuestionCandidatesForType = (typeId: string): Question[] => {
    if (!activeLesson) return [];
    const builtIn = getQuestionsForMathTypeStructured(typeId, activeLesson.topic_id).all;
    const builtInIds = new Set(builtIn.map((q) => q.id));
    const dbExact = allQuestions.filter(
      (q) => q.type_id === typeId && isQuestionCompatibleWithTopic(activeLesson.topic_id, `${q.question_vi} ${q.solution_vi || ''}`)
    );
    const customExact = dbExact.filter((q) => !builtInIds.has(q.id));

    // Prefer the canonical STATIC bank first so every selected type immediately has the guaranteed 4-2-2-1 baseline.
    // Teacher/AI extras are appended only after the static baseline. variant_tag preserves authored structural diversity.
    const seen = new Set<string>();
    return [...builtIn, ...customExact].filter((q) => {
      const key = getQuestionDedupSignature(q);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  const takeQuestionsForType = (typeId: string, requested: QuestionCounts): Question[] => {
    const candidates = getQuestionCandidatesForType(typeId);
    const selected: Question[] = [];
    (['tn', 'ds', 'tln', 'tl'] as const).forEach((kind) => {
      selected.push(...diversifyByVariant(candidates.filter((q) => bucketQuestion(q) === kind)).slice(0, requested[kind]));
    });
    return selected;
  };

  const countQuestionsByFormat = (items: Question[]): QuestionCounts => {
    const counts: QuestionCounts = { tn: 0, ds: 0, tln: 0, tl: 0 };
    items.forEach((q) => { counts[bucketQuestion(q)] += 1; });
    return counts;
  };

  const getDisplayedQuestions = (): Question[] => {
    if (!activeLesson || selectedTypeIds.length === 0) return [];
    return selectedTypeIds.flatMap((typeId) => {
      const mathType = activeLesson.types?.find((t) => t.id === typeId);
      if (!mathType) return [];
      const requested = typeQuestionCounts[typeId] || getDefaultCountsForType(mathType);
      return takeQuestionsForType(typeId, requested);
    });
  };

  const getShortagePlans = () => {
    if (!activeLesson) return [];
    return selectedTypeIds.flatMap((typeId) => {
      const mathType = activeLesson.types?.find((t) => t.id === typeId);
      if (!mathType) return [];
      const requested = typeQuestionCounts[typeId] || getDefaultCountsForType(mathType);
      const current = countQuestionsByFormat(takeQuestionsForType(typeId, requested));
      const missing = {
        tn: Math.max(0, requested.tn - current.tn),
        ds: Math.max(0, requested.ds - current.ds),
        tln: Math.max(0, requested.tln - current.tln),
        tl: Math.max(0, requested.tl - current.tl),
      };
      if (missing.tn + missing.ds + missing.tln + missing.tl === 0) return [];
      return [{ mathType, requested, current, missing }];
    });
  };

  const parseAiJsonObject = (content?: string): any | null => {
    if (!content) return null;
    const trimmed = content.trim();
    const candidates = [
      trimmed,
      trimmed.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim(),
    ];
    const firstBrace = trimmed.indexOf('{');
    const lastBrace = trimmed.lastIndexOf('}');
    if (firstBrace >= 0 && lastBrace > firstBrace) candidates.push(trimmed.slice(firstBrace, lastBrace + 1));
    const firstBracket = trimmed.indexOf('[');
    const lastBracket = trimmed.lastIndexOf(']');
    if (firstBracket >= 0 && lastBracket > firstBracket) candidates.push(`{"questions":${trimmed.slice(firstBracket, lastBracket + 1)}}`);

    for (const candidate of candidates) {
      try {
        const parsed = JSON.parse(candidate);
        if (Array.isArray(parsed)) return { questions: parsed };
        if (parsed && typeof parsed === 'object') return parsed;
      } catch {
        // Try the next representation. Gemini occasionally wraps JSON in markdown fences.
      }
    }
    return null;
  };

  const normalizeAiQuestionsForPlans = (
    rawQuestions: any[],
    plans: Array<{ mathType: MathType; requested: QuestionCounts }>
  ): { accepted: Question[]; rejected: number } => {
    if (!activeLesson) return { accepted: [], rejected: rawQuestions.length };
    const planMap = new Map(plans.map((p) => [p.mathType.id, p]));
    const singlePlan = plans.length === 1 ? plans[0] : undefined;
    const onlyRequestedKind = singlePlan
      ? (['tn', 'ds', 'tln', 'tl'] as const).filter((kind) => singlePlan.requested[kind] > 0)
      : [];
    const forcedKind = onlyRequestedKind.length === 1 ? onlyRequestedKind[0] : undefined;
    const forcedFormat: 'TN' | 'DS' | 'TLN' | 'TL' | undefined = forcedKind === 'ds'
      ? 'DS'
      : forcedKind === 'tln'
        ? 'TLN'
        : forcedKind === 'tl'
          ? 'TL'
          : forcedKind === 'tn'
            ? 'TN'
            : undefined;

    const acceptedCounts = new Map<string, QuestionCounts>();
    const seenStructures = new Set<string>();
    const variantUseCount = new Map<string, number>();

    plans.forEach((plan) => {
      getQuestionCandidatesForType(plan.mathType.id).forEach((existing) => {
        const kind = bucketQuestion(existing);
        seenStructures.add(`${plan.mathType.id}|${kind}|${getQuestionStructureSignature(existing.question_vi || existing.question_en)}`);
        if (existing.variant_tag) {
          const key = `${plan.mathType.id}|${existing.variant_tag}`;
          variantUseCount.set(key, (variantUseCount.get(key) || 0) + 1);
        }
      });
    });

    const accepted: Question[] = [];
    let rejected = 0;
    const now = new Date().toISOString();

    rawQuestions.forEach((q: any, index: number) => {
      // When Gemini is asked for exactly one math type, the UI is the authority. Do not throw
      // away an otherwise valid question merely because the model omitted/misspelled type_id.
      const plan = (q?.type_id ? planMap.get(String(q.type_id).trim()) : undefined) || singlePlan;
      if (!plan) { rejected += 1; return; }

      const rawFormat = String(q?.format_type || q?.question_type || '').trim().toUpperCase();
      let formatType: 'TN' | 'DS' | 'TLN' | 'TL' = forcedFormat || (
        rawFormat === 'DS' || rawFormat === 'TRUE_FALSE' || rawFormat === 'TRUE/FALSE' ? 'DS'
          : rawFormat === 'TLN' || rawFormat === 'SHORT' || rawFormat === 'NUMERIC' || rawFormat === 'SHORT_ANSWER' ? 'TLN'
            : rawFormat === 'TL' || rawFormat === 'ESSAY' || rawFormat === 'TỰ LUẬN' ? 'TL'
              : 'TN'
      );
      const kind: keyof QuestionCounts = formatType === 'DS' ? 'ds' : formatType === 'TLN' ? 'tln' : formatType === 'TL' ? 'tl' : 'tn';
      const quota = plan.requested[kind];
      const counts = acceptedCounts.get(plan.mathType.id) || { tn: 0, ds: 0, tln: 0, tl: 0 };
      if (quota <= counts[kind]) { rejected += 1; return; }

      const questionVi = String(q?.question_vi || q?.question || q?.prompt_vi || '').trim();
      const questionEn = String(q?.question_en || q?.prompt_en || '').trim();
      const questionText = `${questionVi} ${questionEn}`.trim();
      if (questionText.length < 8) { rejected += 1; return; }

      const allowedVariantTags = getAllowedVariantTags(plan.mathType.id);
      let variantTag = String(q?.variant_tag || '').trim();
      if (!variantTag || (allowedVariantTags.length > 0 && !allowedVariantTags.includes(variantTag))) {
        // variant_tag is metadata, not mathematical content. Repair it instead of discarding
        // a valid exercise. The prompt still contains the exact blueprint instructions.
        variantTag = allowedVariantTags.length > 0 ? allowedVariantTags[index % allowedVariantTags.length] : '';
      }
      const variantKey = `${plan.mathType.id}|${variantTag}`;
      const variantCount = variantUseCount.get(variantKey) || 0;
      const totalRequestedForType = plan.requested.tn + plan.requested.ds + plan.requested.tln + plan.requested.tl;
      const maxVariantUse = Math.max(2, Math.ceil(totalRequestedForType / Math.max(1, allowedVariantTags.length)));

      const rawOptions = Array.isArray(q?.options)
        ? q.options
        : Array.isArray(q?.statements)
          ? q.statements
          : [];
      const declaredCorrect = String(q?.correct_answer ?? q?.answer ?? '').trim();
      const declaredUpper = declaredCorrect.toUpperCase();
      const optionKeys = ['A', 'B', 'C', 'D'];
      const options = rawOptions.slice(0, 4).map((o: any, optionIndex: number) => {
        const optionKey = String(o?.option_key || o?.key || o?.label || optionKeys[optionIndex] || '').trim().toUpperCase();
        const rawCorrect = o?.is_correct ?? o?.correct ?? o?.isCorrect;
        let isCorrect = typeof rawCorrect === 'boolean' ? rawCorrect : false;
        if (kind === 'tn' && typeof rawCorrect !== 'boolean' && declaredUpper) isCorrect = optionKey === declaredUpper;
        if (kind === 'ds' && typeof rawCorrect !== 'boolean') {
          const marker = String(rawCorrect ?? o?.answer ?? '').trim().toLowerCase();
          if (['đ', 'd', 'true', 't', 'đúng', 'dung'].includes(marker)) isCorrect = true;
          if (['s', 'false', 'f', 'sai'].includes(marker)) isCorrect = false;
        }
        return {
          option_key: optionKey || optionKeys[optionIndex],
          content_vi: String(o?.content_vi || o?.content || o?.text_vi || o?.text || '').trim(),
          content_en: String(o?.content_en || o?.text_en || '').trim(),
          is_correct: isCorrect,
        };
      });

      if (kind === 'tn' && options.length === 4) {
        const correctCount = options.filter((o) => o.is_correct).length;
        if (correctCount !== 1 && optionKeys.includes(declaredUpper)) {
          options.forEach((o) => { o.is_correct = o.option_key === declaredUpper; });
        }
      }

      const validMcq = kind !== 'tn' || (options.length === 4 && options.filter((o) => o.is_correct).length === 1 && options.every((o) => o.content_vi || o.content_en));
      const validTrueFalse = kind !== 'ds' || (options.length === 4 && options.every((o) => o.content_vi || o.content_en));
      const inLessonScope = isQuestionCompatibleWithTopic(activeLesson.topic_id, `${questionText} ${q?.solution_vi || q?.solution || ''}`);
      const structureKey = `${plan.mathType.id}|${kind}|${getQuestionStructureSignature(questionVi || questionEn)}`;

      if (!validMcq || !validTrueFalse || !inLessonScope || seenStructures.has(structureKey) || variantCount >= maxVariantUse) {
        rejected += 1;
        return;
      }

      seenStructures.add(structureKey);
      if (variantTag) variantUseCount.set(variantKey, variantCount + 1);
      counts[kind] += 1;
      acceptedCounts.set(plan.mathType.id, counts);

      const correctAnswer = kind === 'tn'
        ? (options.find((o) => o.is_correct)?.option_key || declaredCorrect)
        : kind === 'ds'
          ? (declaredCorrect || options.map((o) => `${o.option_key}-${o.is_correct ? 'Đ' : 'S'}`).join(', '))
          : declaredCorrect;

      accepted.push({
        id: `q-ai-auto-${activeLesson.id}-${plan.mathType.id}-${formatType}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 6)}`,
        topic_id: activeLesson.topic_id,
        type_id: plan.mathType.id,
        variant_tag: variantTag || undefined,
        question_type: kind === 'ds' ? 'TRUE_FALSE' : kind === 'tln' ? 'SHORT' : kind === 'tl' ? 'ESSAY' : 'MCQ',
        format_type: formatType,
        difficulty: q?.difficulty || 'MEDIUM',
        language_level: 2,
        question_vi: questionVi || questionEn,
        question_en: questionEn,
        options: kind === 'tn' || kind === 'ds' ? options : undefined,
        solution_vi: String(q?.solution_vi || q?.solution || 'Lời giải chi tiết').trim(),
        solution_en: String(q?.solution_en || 'Detailed solution').trim(),
        correct_answer: correctAnswer,
        math_skill: plan.mathType.title_vi,
        english_skill: plan.mathType.title_en,
        status: 'PUBLISHED',
        created_by: 'usr-teacher-1',
        created_at: now,
      });
    });

    return { accepted, rejected };
  };

  const generateQuestionsForPlans = async (
    plansWithShortage: Array<{ mathType: MathType; requested: QuestionCounts; current: QuestionCounts; missing: QuestionCounts }>,
    source: 'auto' | 'manual' = 'auto'
  ) => {
    if (!activeLesson || plansWithShortage.length === 0) return;
    if (!hasApiKey()) {
      const msg = '⚠️ Chưa có Gemini API key. Hãy cấu hình API key rồi thử lại.';
      setQuestionGenerationMessage(msg);
      if (source === 'manual') showNotification(msg);
      return;
    }

    const activeChap = chapters.find((c) => c.id === activeLesson.chapter_id);
    const chapterName = activeChap?.name_vi || `Toán ${selectedGrade}`;
    setIsAutoGeneratingQuestions(true);
    setQuestionGenerationMessage('🤖 Đang gọi Gemini và sinh từng dạng thức TN / Đ-S / TLN / TL...');
    if (source === 'manual') showNotification('🤖 AI đang sinh từng nhóm câu còn thiếu...');

    try {
      const questionsToSave: Question[] = [];
      const typeIdsToReplace: string[] = [];
      let generatedAcceptedTotal = 0;
      let totalRejected = 0;
      let totalRaw = 0;
      let lastAiError = '';

      // Generate each type AND each assessment format separately. This dramatically reduces
      // truncated JSON and gives the model one unambiguous output contract at a time.
      for (const shortage of plansWithShortage) {
        const generatedForType: Question[] = [];
        const formatJobs: Array<{ kind: keyof QuestionCounts; label: string }> = [
          { kind: 'tn', label: 'TN' },
          { kind: 'ds', label: 'Đ/S' },
          { kind: 'tln', label: 'TLN' },
          { kind: 'tl', label: 'TL' },
        ];

        for (const job of formatJobs) {
          const required = shortage.missing[job.kind];
          if (required <= 0) continue;

          const fullQuota: QuestionCounts = { tn: 0, ds: 0, tln: 0, tl: 0 };
          fullQuota[job.kind] = required;
          const rawPool: any[] = [];
          let acceptedForKind: Question[] = [];

          for (let attempt = 0; attempt < 1 && acceptedForKind.length < required; attempt += 1) {
            const remaining = required - acceptedForKind.length;
            const requestNow: QuestionCounts = { tn: 0, ds: 0, tln: 0, tl: 0 };
            requestNow[job.kind] = remaining;

            const aiResult = await withTimeout(
              generateWorksheetQuestionsByPlanAi(
                activeLesson.title_vi,
                chapterName,
                selectedGrade,
                [{
                  id: shortage.mathType.id,
                  code: shortage.mathType.code,
                  title_vi: shortage.mathType.title_vi,
                  title_en: shortage.mathType.title_en,
                  ...requestNow,
                }],
                { key_concepts_vi: activeLesson.key_concepts_vi, formulas: activeLesson.formulas || [] }
              ),
              12000,
              'Gemini'
            );

            if (!aiResult.success || !aiResult.content) {
              lastAiError = aiResult.rawError || aiResult.error || 'Gemini không trả dữ liệu.';
              continue;
            }

            const parsed = parseAiJsonObject(aiResult.content);
            if (!parsed || !Array.isArray(parsed.questions)) {
              lastAiError = `Gemini trả dữ liệu ${job.label} nhưng JSON không đọc được.`;
              continue;
            }

            totalRaw += parsed.questions.length;
            rawPool.push(...parsed.questions);
            const normalized = normalizeAiQuestionsForPlans(rawPool, [{ mathType: shortage.mathType, requested: fullQuota }]);
            totalRejected += normalized.rejected;
            acceptedForKind = normalized.accepted.filter((q) => bucketQuestion(q) === job.kind).slice(0, required);
          }

          generatedForType.push(...acceptedForKind);
        }

        if (generatedForType.length > 0) {
          const canonicalIds = new Set(getQuestionsForMathTypeStructured(shortage.mathType.id, activeLesson.topic_id).all.map((q) => q.id));
          const previousCustom = allQuestions.filter(
            (q) => q.type_id === shortage.mathType.id && !canonicalIds.has(q.id) &&
              isQuestionCompatibleWithTopic(activeLesson.topic_id, `${q.question_vi} ${q.solution_vi || ''}`)
          );
          questionsToSave.push(...previousCustom, ...generatedForType);
          typeIdsToReplace.push(shortage.mathType.id);
          generatedAcceptedTotal += generatedForType.length;
        }
      }

      if (questionsToSave.length > 0) {
        const saveResult = await apiFetch<{ success?: boolean; count?: number; questions?: Question[] }>('/api/questions/replace-types', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type_ids: Array.from(new Set(typeIdsToReplace)), questions: questionsToSave }),
        });

        // Refresh from the actual persistence layer. If a deployment returns an unexpected
        // payload, immediately merge the saved response so the worksheet still updates now.
        const refreshed = await apiFetch<Question[]>('/api/questions');
        if (Array.isArray(refreshed)) {
          setAllQuestions(refreshed);
        } else if (Array.isArray(saveResult?.questions)) {
          const replaceIds = new Set(typeIdsToReplace);
          setAllQuestions((prev) => [
            ...prev.filter((q) => !q.type_id || !replaceIds.has(q.type_id)),
            ...(saveResult.questions || []),
          ]);
        }

        const requestedTotal = plansWithShortage.reduce((sum, p) => sum + p.missing.tn + p.missing.ds + p.missing.tln + p.missing.tl, 0);
        const msg = generatedAcceptedTotal >= requestedTotal
          ? `✅ Đã sinh đủ ${requestedTotal}/${requestedTotal} câu còn thiếu và đưa vào phiếu.`
          : `🟡 Gemini trả ${totalRaw} câu, hệ thống nhận ${generatedAcceptedTotal}/${requestedTotal} câu hợp lệ. Bấm “Sinh đủ câu” lần nữa để bù phần còn thiếu.`;
        setQuestionGenerationMessage(msg);
        showNotification(msg);
      } else {
        const detail = lastAiError ? ` Chi tiết: ${lastAiError}` : '';
        const msg = `⚠️ Gemini chưa tạo được câu hợp lệ.${detail}`;
        setQuestionGenerationMessage(msg);
        if (source === 'manual') showNotification(msg);
      }
    } catch (error: any) {
      console.error('Auto question generation failed:', error);
      const msg = `⚠️ Sinh câu thất bại: ${error?.message || 'Lỗi không xác định'}`;
      setQuestionGenerationMessage(msg);
      if (source === 'manual') showNotification(msg);
    } finally {
      setIsAutoGeneratingQuestions(false);
    }
  };

  const displayedQuestions = getDisplayedQuestions();
  const shortagePlans = getShortagePlans();

  // IMPORTANT: selecting a type never calls Gemini automatically anymore.
  // The canonical static bank already guarantees 4 TN + 2 Đ/S + 2 TLN + 1 TL for every type_id.
  // AI is only an optional manual extension when the teacher requests MORE than the static baseline.
  useEffect(() => {
    if (!activeLesson || selectedTypeIds.length === 0) return;
    if (shortagePlans.length === 0) {
      setQuestionGenerationMessage('');
      return;
    }
    const missing = shortagePlans.reduce((sum, p) => sum + p.missing.tn + p.missing.ds + p.missing.tln + p.missing.tl, 0);
    setQuestionGenerationMessage(`Ngân hàng tĩnh đã dùng hết. Nếu cần thêm ${missing} câu vượt mức 4–2–2–1, Thầy/Cô có thể bấm AI tạo thêm biến thể.`);
  }, [activeLesson?.id, selectedTypeIds, typeQuestionCounts, allQuestions]);

  // Export Action: Copy Word Text
  const handleCopyWord = () => {
    let content = `=========================================================\n`;
    content += `TRƯỜNG THPT CHÂU THÀNH A\n`;
    content += `TỔ TOÁN\n`;
    content += `${documentTitle.toUpperCase()}\n`;
    if (activeLesson) {
      content += `${activeLesson.title_vi.toUpperCase()}\n`;
      content += `(${activeLesson.title_en})\n\n`;
    }
    content += `=========================================================\n\n`;

    if (includeTheory && activeLesson) {
      content += `A. TÓM TẮT LÝ THUYẾT:\n`;
      content += `${activeLesson.key_concepts_vi}\n`;
      if (activeLesson.formulas?.length) {
        content += `Công thức trọng tâm:\n${activeLesson.formulas.map((f) => `• ${f}`).join('\n')}\n`;
      }
      content += `\n`;
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
      if (activeLesson.formulas?.length) {
        docContent += `<p><strong>Công thức trọng tâm:</strong><br/>${activeLesson.formulas.map((f) => `• ${f}`).join('<br/>')}</p>`;
      }
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
  const rawExamples = (activeLesson?.worked_examples && activeLesson.worked_examples.length > 0)
    ? activeLesson.worked_examples
    : (activeLesson ? getWorkedExamplesForLesson(activeLesson.id) : []);

  const displayedExamples = rawExamples.filter((we) => {
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
                      <p className="font-extrabold uppercase text-slate-800 tracking-wide text-xs">THPT CHÂU THÀNH A</p>
                      <p className="font-black text-violet-900 uppercase text-xs mt-0.5">TỔ TOÁN</p>
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
                          {(languageMode === 'ENGLISH' && activeLesson.key_concepts_en
                            ? activeLesson.key_concepts_en.split('\n')
                            : activeLesson.key_concepts_vi.split('\n')).map((line, idx) => (
                            <div key={idx} className="flex items-start gap-1">
                              <MathRenderer content={line} />
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
                            5 từ vựng Toán tiếng Anh của bài:
                          </span>
                          <button
                            onClick={() => speakEnglishWord(activeLesson.vocabulary_list?.map((v) => v.split('—')[0].trim()).join(', ') || activeLesson.title_en || 'Mathematics')}
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
                        <div className="p-6 bg-white rounded-2xl border border-slate-200 text-center space-y-3 font-sans shadow-xs my-4">
                          <div className="w-10 h-10 mx-auto bg-violet-100 text-violet-700 rounded-full flex items-center justify-center font-bold text-base">
                            {isAutoGeneratingQuestions ? <Loader2 className="w-5 h-5 animate-spin" /> : '💡'}
                          </div>
                          <p className="text-sm font-bold text-slate-800">
                            {selectedTypeIds.length === 0
                              ? 'Chưa chọn Dạng toán nào để hiển thị bài tập.'
                              : isAutoGeneratingQuestions
                                ? 'AI đang tạo thêm biến thể theo yêu cầu...'
                                : 'Không nạp được câu từ ngân hàng tĩnh của dạng đã chọn.'}
                          </p>
                          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
                            {selectedTypeIds.length === 0
                              ? 'Thầy/Cô tích chọn ít nhất một Dạng toán ở cây chương trình. Bộ tĩnh 4 TN / 2 Đ-S / 2 TLN / 1 TL sẽ hiện ngay, không gọi AI.'
                              : 'Nếu đang dùng mức mặc định 4–2–2–1 mà vẫn trắng, hãy kiểm tra lại bản deploy vì ngân hàng tĩnh phải luôn đủ. AI chỉ dùng khi chủ động yêu cầu thêm.'}
                          </p>
                          {questionGenerationMessage && selectedTypeIds.length > 0 && (
                            <p className="text-[11px] text-violet-700 max-w-xl mx-auto leading-relaxed font-semibold">
                              {questionGenerationMessage}
                            </p>
                          )}
                          {selectedTypeIds.length > 0 && (
                            <div className="pt-2">
                              <button
                                onClick={() => void generateQuestionsForPlans(shortagePlans, 'manual')}
                                disabled={isAutoGeneratingQuestions || shortagePlans.length === 0}
                                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white text-xs font-extrabold rounded-xl shadow-xs transition inline-flex items-center gap-1.5"
                              >
                                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                                {isAutoGeneratingQuestions ? 'AI đang tạo thêm...' : '✨ AI tạo thêm biến thể'}
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <>
                          {shortagePlans.length > 0 && (
                            <div className="flex items-center justify-between gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50 font-sans text-xs">
                              <div>
                                <p className="font-bold text-amber-900">
                                  {isAutoGeneratingQuestions ? 'AI đang tạo thêm biến thể...' : 'Số lượng yêu cầu đang vượt ngân hàng tĩnh 4–2–2–1.'}
                                </p>
                                <p className="text-amber-800 mt-0.5">
                                  Cần thêm {shortagePlans.reduce((sum, p) => sum + p.missing.tn + p.missing.ds + p.missing.tln + p.missing.tl, 0)} câu ngoài bộ tĩnh; hệ thống không dùng câu của dạng khác để bù.
                                </p>
                                {questionGenerationMessage && (
                                  <p className="text-violet-700 mt-1 font-semibold">{questionGenerationMessage}</p>
                                )}
                              </div>
                              <button
                                onClick={() => void generateQuestionsForPlans(shortagePlans, 'manual')}
                                disabled={isAutoGeneratingQuestions}
                                className="shrink-0 px-3 py-1.5 bg-violet-600 text-white font-bold rounded-lg disabled:opacity-50"
                              >
                                {isAutoGeneratingQuestions ? 'Đang tạo...' : 'AI tạo thêm'}
                              </button>
                            </div>
                          )}
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
                                      <QuestionAssetRenderer assets={q.assets} language={languageMode} compact />
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
                                    <MathRenderer content={languageMode === 'ENGLISH' && q.question_en ? q.question_en : q.question_vi} inline />
                                    <QuestionAssetRenderer assets={q.assets} language={languageMode} compact />
                                  </div>

                                  {languageMode === 'BILINGUAL' && q.question_en && (
                                    <p className="text-xs text-teal-800 italic pl-5 font-sans">
                                      (En: <MathRenderer content={q.question_en} inline />)
                                    </p>
                                  )}

                                  {q.options && (
                                    <div className="grid grid-cols-1 gap-1.5 pl-5 font-sans text-xs">
                                      {q.options.map((opt) => (
                                        <div key={opt.option_key} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                                          <div className="space-y-0.5">
                                            <div>
                                              <span className="font-bold mr-1.5">{opt.option_key})</span>
                                              <MathRenderer content={languageMode === 'ENGLISH' && opt.content_en ? opt.content_en : opt.content_vi} inline />
                                            </div>
                                            {languageMode === 'BILINGUAL' && opt.content_en && (
                                              <div className="text-[11px] text-teal-800 italic pl-4">
                                                (En: <MathRenderer content={opt.content_en} inline />)
                                              </div>
                                            )}
                                          </div>
                                          <div className="flex gap-2 text-[11px] font-bold shrink-0 ml-2">
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
                                    <MathRenderer content={languageMode === 'ENGLISH' && q.question_en ? q.question_en : q.question_vi} inline />
                                    <QuestionAssetRenderer assets={q.assets} language={languageMode} compact />
                                  </div>

                                  {languageMode === 'BILINGUAL' && q.question_en && (
                                    <p className="text-xs text-teal-800 italic pl-5 font-sans">
                                      (En: <MathRenderer content={q.question_en} inline />)
                                    </p>
                                  )}

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
                                    <MathRenderer content={languageMode === 'ENGLISH' && q.question_en ? q.question_en : q.question_vi} inline />
                                    <QuestionAssetRenderer assets={q.assets} language={languageMode} compact />
                                  </div>

                                  {languageMode === 'BILINGUAL' && q.question_en && (
                                    <p className="text-xs text-teal-800 italic pl-5 font-sans">
                                      (En: <MathRenderer content={q.question_en} inline />)
                                    </p>
                                  )}
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
                    const counts = typeQuestionCounts[type.id] || getDefaultCountsForType(type);
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
                              autoGenerationRunRef.current = '';
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
                              onChange={(e) => updateTypeQuestionCount(type.id, 'tn', e.target.value)}
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
                              onChange={(e) => updateTypeQuestionCount(type.id, 'ds', e.target.value)}
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
                              onChange={(e) => updateTypeQuestionCount(type.id, 'tln', e.target.value)}
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
                              onChange={(e) => updateTypeQuestionCount(type.id, 'tl', e.target.value)}
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
