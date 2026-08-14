import React, { useState } from 'react';
import { MathEnglishLevel } from '../../types';
import { Shield, Info, CheckCircle2, ChevronRight, X } from 'lucide-react';

interface LevelBadgeProps {
  level: MathEnglishLevel;
  showModalOnClick?: boolean;
}

export const LEVEL_DESCRIPTIONS = {
  1: {
    title: 'LEVEL 1 – MATH WORDS',
    ratio: '5–10% tiếng Anh',
    description: 'Học sinh làm quen với các từ vựng, thuật ngữ, ký hiệu toán học cơ bản và phát âm IPA.',
    example: 'Derivative (Đạo hàm), Increasing function (Hàm số đồng biến)',
    bgColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    badgeColor: 'bg-emerald-600',
  },
  2: {
    title: 'LEVEL 2 – MATH SENTENCES',
    ratio: '20–30% tiếng Anh',
    description: 'Học các câu lệnh toán học phổ biến và cấu trúc đề bài tiêu chuẩn.',
    example: 'Find the derivative... (Tính đạo hàm...), Calculate... (Tính...), Determine... (Xác định...)',
    bgColor: 'bg-teal-50 text-teal-800 border-teal-200',
    badgeColor: 'bg-teal-600',
  },
  3: {
    title: 'LEVEL 3 – BILINGUAL MATH PROBLEMS',
    ratio: '40–60% tiếng Anh',
    description: 'Đề bài song ngữ Anh-Việt có hỗ trợ tra từ khóa, công thức và gợi ý dịch thuật.',
    example: 'Đề toán song ngữ kèm từ điển nhanh & gợi ý công thức',
    bgColor: 'bg-sky-50 text-sky-800 border-sky-200',
    badgeColor: 'bg-sky-600',
  },
  4: {
    title: 'LEVEL 4 – ENGLISH MATHEMATICS',
    ratio: '70–90% tiếng Anh',
    description: 'Đọc và giải toán chủ yếu bằng tiếng Anh. Chỉ tra tiếng Việt khi gặp từ thực sự mới.',
    example: 'Đề bài và lời giải phần lớn bằng tiếng Anh',
    bgColor: 'bg-blue-50 text-blue-800 border-blue-200',
    badgeColor: 'bg-blue-600',
  },
  5: {
    title: 'LEVEL 5 – FULL ENGLISH MATH',
    ratio: '100% tiếng Anh',
    description: '100% tiếng Anh bao gồm đề, câu hỏi, hướng dẫn và lời giải mẫu hoàn chỉnh.',
    example: 'Chinh phục toàn bộ Toán học bằng tiếng Anh chuẩn quốc tế',
    bgColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    badgeColor: 'bg-indigo-600',
  },
};

export const LevelBadge: React.FC<LevelBadgeProps> = ({ level, showModalOnClick = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const info = LEVEL_DESCRIPTIONS[level] || LEVEL_DESCRIPTIONS[1];

  return (
    <>
      <button
        onClick={() => showModalOnClick && setIsModalOpen(true)}
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all hover:shadow-sm ${info.bgColor}`}
      >
        <Shield className="w-3.5 h-3.5" />
        <span>Level {level}</span>
        <span className="opacity-75">({info.ratio})</span>
        {showModalOnClick && <Info className="w-3 h-3 ml-0.5 opacity-60" />}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold ${info.badgeColor}`}>
                  {level}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Khung Năng Lực 5 Level</h3>
                  <p className="text-xs text-slate-500">Mô hình Scaffolding Hỗ Trợ Học Sinh THPT</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {([1, 2, 3, 4, 5] as MathEnglishLevel[]).map((lvl) => {
                const item = LEVEL_DESCRIPTIONS[lvl];
                const isCurrent = lvl === level;
                return (
                  <div
                    key={lvl}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isCurrent
                        ? 'bg-teal-50/80 border-teal-300 ring-2 ring-teal-500/20'
                        : 'bg-slate-50/60 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-800 text-white">
                          Level {lvl}
                        </span>
                        <h4 className="text-sm font-bold text-slate-800">{item.title.split('– ')[1]}</h4>
                      </div>
                      <span className="text-xs font-semibold text-teal-700 bg-teal-100/80 px-2 py-0.5 rounded-full">
                        {item.ratio}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.description}</p>
                    <div className="mt-2 text-[11px] text-slate-500 bg-white/80 p-2 rounded-lg border border-slate-100">
                      <span className="font-semibold text-slate-700">Ví dụ: </span>
                      {item.example}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold">💡 Triết lý Scaffolding: </span>
              Hệ thống sẽ tự động điều chỉnh mức độ tiếng Anh phù hợp với bạn. Khi năng lực tăng, tỷ lệ tiếng Anh sẽ tăng dần từ 5% lên 100%!
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full py-2.5 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}
    </>
  );
};
