import React, { useRef } from 'react';
import { Question, Test } from '../../types';
import { MathRenderer } from '../math/MathRenderer';
import { QuestionAssetRenderer } from '../math/QuestionAssetRenderer';
import { Printer, Copy, Download, X, CheckCircle2, FileText } from 'lucide-react';
import { useAppStore } from '../../lib/store';

interface PrintableWorksheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  testTitle: string;
  questions: Question[];
  englishRatio: number;
}

export const PrintableWorksheetModal: React.FC<PrintableWorksheetModalProps> = ({
  isOpen,
  onClose,
  testTitle,
  questions,
  englishRatio,
}) => {
  const { showNotification } = useAppStore();
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    let content = `TRƯỜNG THPT CHÂU THÀNH A\nTỔ TOÁN\n${testTitle.toUpperCase()}\n\n`;
    questions.forEach((q, idx) => {
      content += `Câu ${idx + 1}: ${q.question_en}\n`;
      if (q.question_vi) content += `(Gợi ý dịch: ${q.question_vi})\n`;
      if (q.options) {
        q.options.forEach((opt) => {
          content += `  ${opt.option_key}. ${opt.content_en || opt.content_vi}\n`;
        });
      }
      content += `\n`;
    });

    navigator.clipboard.writeText(content);
    showNotification('Đã sao chép nội dung đề thi vào Clipboard để dán vào Microsoft Word!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="bg-slate-900 text-white p-4 px-6 flex items-center justify-between border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-400" />
            <h3 className="font-extrabold text-sm text-white">
              Xem Trước & Xuất Phiếu Bài Tập Khổ A4 (Printable Worksheet)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition flex items-center gap-1"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy cho Word</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs rounded-xl shadow-xs transition flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In Đề Thi / Lưu PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Preview (Standard High School Exam Style) */}
        <div className="p-8 overflow-y-auto bg-slate-100 flex justify-center">
          <div
            ref={printRef}
            className="bg-white w-full max-w-[210mm] min-h-[297mm] p-8 sm:p-12 shadow-lg border border-slate-300 text-slate-900 space-y-6 font-serif leading-normal print:shadow-none print:border-none print:m-0 print:p-4"
          >
            {/* Header School Information */}
            <div className="grid grid-cols-2 gap-4 border-b-2 border-slate-900 pb-4 text-xs font-sans">
              <div>
                <p className="font-extrabold uppercase text-slate-800 tracking-wide text-xs">TRƯỜNG THPT CHÂU THÀNH A</p>
                <p className="font-black text-violet-900 uppercase text-xs mt-0.5">TỔ TOÁN</p>
              </div>
              <div className="text-right">
                <p className="font-bold uppercase">ĐỀ KIỂM TRA ĐÁNH GIÁ ĐỊNH KỲ</p>
                <p className="font-extrabold text-teal-900 uppercase">MÔN: TOÁN BẰNG TIẾNG ANH</p>
                <p className="text-[11px] text-slate-600">Thời gian làm bài: 15 phút (Tỷ lệ {englishRatio}% Tiếng Anh)</p>
              </div>
            </div>

            {/* Title */}
            <div className="text-center space-y-1">
              <h2 className="text-lg font-black uppercase tracking-tight text-slate-900 font-sans">
                {testTitle}
              </h2>
              <p className="text-xs italic text-slate-500 font-sans">
                (Đề thi gồm {questions.length} câu trắc nghiệm khách quan)
              </p>
            </div>

            {/* Student Info Box */}
            <div className="border border-slate-400 rounded-lg p-3 text-xs grid grid-cols-3 gap-2 font-sans bg-slate-50/50">
              <div className="col-span-2">
                Họ và tên thí sinh: ........................................................................
              </div>
              <div>
                Lớp: ............................
              </div>
              <div className="col-span-2">
                Số báo danh: ..............................................................................
              </div>
              <div>
                Mã đề: <strong className="font-mono">MB-101</strong>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6 text-xs sm:text-sm">
              {questions.map((q, idx) => (
                <div key={q.id} className="space-y-2">
                  <div className="font-bold text-slate-900">
                    <span className="font-sans font-black text-teal-900 mr-1.5">Câu {idx + 1}:</span>
                    <MathRenderer content={q.question_en} inline />
                    <QuestionAssetRenderer assets={q.assets} language="ENGLISH" compact />
                  </div>

                  {q.question_vi && (
                    <p className="text-xs text-slate-500 italic pl-6 font-sans">
                      (Dịch nghĩa: {q.question_vi})
                    </p>
                  )}

                  {q.options && (
                    <div className="grid grid-cols-2 gap-2 pl-6 pt-1">
                      {q.options.map((opt) => (
                        <div key={opt.option_key} className="flex items-baseline gap-1.5">
                          <span className="font-bold font-sans">{opt.option_key}.</span>
                          <span>
                            <MathRenderer content={opt.content_en || opt.content_vi} inline />
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Answer Grid Box */}
            <div className="pt-6 border-t-2 border-dashed border-slate-300">
              <p className="font-sans font-bold text-xs uppercase text-slate-700 mb-2 text-center">
                BẢNG ĐIỀN ĐÁP ÁN TRẮC NGHIỆM
              </p>
              <div className="grid grid-cols-10 gap-1 border border-slate-400 p-2 text-center text-xs font-sans">
                {questions.map((_, i) => (
                  <div key={i} className="border border-slate-200 p-1">
                    <div className="font-bold text-slate-500 text-[10px]">Câu {i + 1}</div>
                    <div className="h-6 flex items-center justify-center font-bold text-teal-800">___</div>
                  </div>
                ))}
              </div>
            </div>

            {/* End of Exam */}
            <div className="text-center pt-4 text-xs italic font-sans text-slate-400 border-t border-slate-200">
              --- HẾT (Cán bộ coi thi không giải thích gì thêm) ---
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
