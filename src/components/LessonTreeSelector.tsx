import React, { useEffect, useMemo, useState } from "react";
import { BookOpen, ChevronDown, ChevronRight, GraduationCap, Layers3 } from "lucide-react";
import type { HighSchoolGrade } from "../types";
import {
  countQuestionsForChapter,
  countQuestionsForLesson,
  getFirstLessonWithQuestions,
  getStandardChaptersForGrade,
  getStandardLessonsForChapter,
  STANDARD_LESSONS,
  type StandardQuestionFormat,
} from "../data/standardQuestionBank";

interface LessonTreeSelectorProps {
  selectedGrade: HighSchoolGrade;
  onGradeChange: (grade: HighSchoolGrade) => void;
  selectedLessonId: string;
  onLessonChange: (lessonId: string) => void;
  formats: StandardQuestionFormat[];
  accent?: "blue" | "rose";
}

export const LessonTreeSelector: React.FC<LessonTreeSelectorProps> = ({
  selectedGrade,
  onGradeChange,
  selectedLessonId,
  onLessonChange,
  formats,
  accent = "blue",
}) => {
  const chapters = useMemo(() => getStandardChaptersForGrade(selectedGrade), [selectedGrade]);
  const selectedLesson = STANDARD_LESSONS.find((lesson) => lesson.id === selectedLessonId);
  const [expandedChapterId, setExpandedChapterId] = useState<string>(
    selectedLesson?.chapterId || chapters[0]?.id || ""
  );

  useEffect(() => {
    const lesson = STANDARD_LESSONS.find((item) => item.id === selectedLessonId);
    if (lesson?.grade === selectedGrade) {
      setExpandedChapterId(lesson.chapterId);
      return;
    }
    const first = getFirstLessonWithQuestions(selectedGrade, formats);
    if (first) {
      setExpandedChapterId(first.chapterId);
      onLessonChange(first.id);
    }
  }, [selectedGrade, selectedLessonId, formats, onLessonChange]);

  const palette = accent === "rose"
    ? {
        active: "bg-rose-600 text-white border-rose-600",
        soft: "bg-rose-50 text-rose-700 border-rose-200",
        ring: "focus:ring-rose-400",
        icon: "text-rose-600",
      }
    : {
        active: "bg-blue-600 text-white border-blue-600",
        soft: "bg-blue-50 text-blue-700 border-blue-200",
        ring: "focus:ring-blue-400",
        icon: "text-blue-600",
      };

  const formatLabel = (counts: { TN: number; TLN: number; TL: number }) =>
    formats
      .map((format) => `${format} ${counts[format]}`)
      .join(" • ");

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50/70">
        <div className="flex items-center gap-2 mb-3">
          <GraduationCap className={`w-4 h-4 ${palette.icon}`} />
          <div>
            <div className="text-sm font-black text-slate-900">Chọn nội dung học</div>
            <div className="text-[11px] text-slate-500">Khối → Chương → Bài. Không cần chọn dạng nhỏ.</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {([10, 11, 12] as HighSchoolGrade[]).map((grade) => (
            <button
              key={grade}
              type="button"
              onClick={() => {
                const first = getFirstLessonWithQuestions(grade, formats);
                onGradeChange(grade);
                if (first) {
                  setExpandedChapterId(first.chapterId);
                  onLessonChange(first.id);
                }
              }}
              className={`rounded-xl px-3 py-2 text-xs font-black border transition-all ${
                grade === selectedGrade ? palette.active : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              Lớp {grade}
            </button>
          ))}
        </div>
      </div>

      <div className="max-h-[560px] overflow-y-auto p-2 space-y-1.5">
        {chapters.map((chapter) => {
          const lessons = getStandardLessonsForChapter(chapter.id);
          const chapterCounts = countQuestionsForChapter(chapter.id);
          const isExpanded = expandedChapterId === chapter.id;
          const hasSelectedLesson = lessons.some((lesson) => lesson.id === selectedLessonId);

          return (
            <div key={chapter.id} className={`rounded-xl border ${hasSelectedLesson ? "border-slate-300" : "border-slate-100"}`}>
              <button
                type="button"
                onClick={() => setExpandedChapterId(isExpanded ? "" : chapter.id)}
                className="w-full flex items-start gap-2.5 p-3 text-left hover:bg-slate-50 rounded-xl transition-colors"
              >
                <span className={`mt-0.5 ${palette.icon}`}>
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-black text-slate-800 leading-snug">{chapter.titleVi}</div>
                  <div className="mt-1 text-[10px] text-slate-400">{formatLabel(chapterCounts)}</div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-2 pb-2 space-y-1">
                  {lessons.map((lesson) => {
                    const counts = countQuestionsForLesson(lesson.id);
                    const selected = selectedLessonId === lesson.id;
                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        onClick={() => onLessonChange(lesson.id)}
                        className={`w-full text-left rounded-xl border p-2.5 transition-all ${
                          selected ? palette.soft : "bg-white border-transparent hover:border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex gap-2">
                          <BookOpen className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${selected ? palette.icon : "text-slate-400"}`} />
                          <div className="min-w-0 flex-1">
                            <div className={`text-[11px] font-bold leading-snug ${selected ? "text-slate-900" : "text-slate-700"}`}>
                              {lesson.titleVi}
                            </div>
                            <div className="mt-1 flex items-center gap-1 text-[9px] text-slate-400">
                              <Layers3 className="w-3 h-3" />
                              {formatLabel(counts)}
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
