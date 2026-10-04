import React, { useEffect, useMemo, useState } from "react";
import { BookOpen, ChevronDown, ChevronRight, GraduationCap, Languages } from "lucide-react";
import type { HighSchoolGrade } from "../types";
import {
  getStandardChaptersForGrade,
  getStandardLessonsForChapter,
  STANDARD_LESSONS,
} from "../data/standardQuestionBank";
import {
  countVocabularyForChapter,
  countVocabularyForLesson,
  getFirstLessonWithVocabulary,
  getLessonVocabularyTerms,
} from "../data/lessonVocabulary";

interface VocabularyLessonTreeSelectorProps {
  selectedGrade: HighSchoolGrade;
  onGradeChange: (grade: HighSchoolGrade) => void;
  selectedLessonId: string;
  onLessonChange: (lessonId: string) => void;
  masteredIds?: string[];
}

export const VocabularyLessonTreeSelector: React.FC<VocabularyLessonTreeSelectorProps> = ({
  selectedGrade,
  onGradeChange,
  selectedLessonId,
  onLessonChange,
  masteredIds = [],
}) => {
  const chapters = useMemo(() => getStandardChaptersForGrade(selectedGrade), [selectedGrade]);
  const selectedLesson = STANDARD_LESSONS.find((lesson) => lesson.id === selectedLessonId);
  const [expandedChapterId, setExpandedChapterId] = useState(selectedLesson?.chapterId || chapters[0]?.id || "");

  useEffect(() => {
    const current = STANDARD_LESSONS.find((lesson) => lesson.id === selectedLessonId);
    if (current?.grade === selectedGrade && countVocabularyForLesson(current.id) > 0) {
      setExpandedChapterId(current.chapterId);
      return;
    }
    const first = getFirstLessonWithVocabulary(selectedGrade);
    if (first) {
      setExpandedChapterId(first.chapterId);
      onLessonChange(first.id);
    }
  }, [selectedGrade, selectedLessonId, onLessonChange]);

  return (
    <div className="bg-white border border-amber-200 rounded-2xl shadow-xs overflow-hidden">
      <div className="p-4 border-b border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="flex items-center gap-2 mb-3">
          <GraduationCap className="w-4 h-4 text-amber-600" />
          <div>
            <div className="text-sm font-black text-slate-900">Chọn bài để học từ</div>
            <div className="text-[11px] text-slate-500">Khối → Chương → Bài, giống Level 2–3.</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {([10, 11, 12] as HighSchoolGrade[]).map((grade) => (
            <button
              key={grade}
              type="button"
              onClick={() => {
                const first = getFirstLessonWithVocabulary(grade);
                onGradeChange(grade);
                if (first) {
                  setExpandedChapterId(first.chapterId);
                  onLessonChange(first.id);
                }
              }}
              className={`rounded-xl px-3 py-2 text-xs font-black border transition-all ${
                grade === selectedGrade
                  ? "bg-amber-500 text-slate-950 border-amber-500 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-amber-50"
              }`}
            >
              Lớp {grade}
            </button>
          ))}
        </div>
      </div>

      <div className="max-h-[620px] overflow-y-auto p-2 space-y-1.5">
        {chapters.map((chapter) => {
          const lessons = getStandardLessonsForChapter(chapter.id);
          const isExpanded = expandedChapterId === chapter.id;
          const hasSelected = lessons.some((lesson) => lesson.id === selectedLessonId);
          return (
            <div key={chapter.id} className={`rounded-xl border ${hasSelected ? "border-amber-200" : "border-slate-100"}`}>
              <button
                type="button"
                onClick={() => setExpandedChapterId(isExpanded ? "" : chapter.id)}
                className="w-full flex items-start gap-2.5 p-3 text-left hover:bg-amber-50/40 rounded-xl transition-colors"
              >
                <span className="mt-0.5 text-amber-600">
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-black text-slate-800 leading-snug">{chapter.titleVi}</div>
                  <div className="mt-1 text-[10px] text-slate-400">{countVocabularyForChapter(chapter.id)} thuật ngữ trọng tâm</div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-2 pb-2 space-y-1">
                  {lessons.map((lesson) => {
                    const count = countVocabularyForLesson(lesson.id);
                    const selected = selectedLessonId === lesson.id;
                    const lessonKeys = new Set(getLessonVocabularyTerms(lesson.id).map((term) => `${term.gradeLevel}:${term.id}`));
                    const mastered = masteredIds.filter((id) => lessonKeys.has(id)).length;
                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        disabled={count === 0}
                        onClick={() => count > 0 && onLessonChange(lesson.id)}
                        className={`w-full text-left rounded-xl border p-2.5 transition-all ${
                          selected
                            ? "bg-amber-50 text-amber-900 border-amber-200"
                            : count > 0
                            ? "bg-white border-transparent hover:border-amber-100 hover:bg-amber-50/40"
                            : "bg-slate-50 border-transparent opacity-50 cursor-not-allowed"
                        }`}
                      >
                        <div className="flex gap-2">
                          <BookOpen className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${selected ? "text-amber-600" : "text-slate-400"}`} />
                          <div className="min-w-0 flex-1">
                            <div className="text-[11px] font-bold leading-snug text-slate-800">{lesson.titleVi}</div>
                            <div className="mt-1 flex items-center gap-1 text-[9px] text-slate-400">
                              <Languages className="w-3 h-3" /> {count} từ/cụm từ
                              {selected && mastered > 0 ? <span>• đã học {mastered}</span> : null}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
