import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../lib/store';
import { apiFetch } from '../../lib/dataService';
import {
  Compass,
  Users,
  BookOpen,
  FileQuestion,
  GraduationCap,
  Plus,
  BarChart3,
  Copy,
  CheckCircle2,
} from 'lucide-react';

interface TeacherDashboardProps {
  setActiveTab: (tab: string) => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ setActiveTab }) => {
  const { showNotification } = useAppStore();
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isNewClassModalOpen, setIsNewClassModalOpen] = useState(false);
  const [classNameInput, setClassNameInput] = useState('');
  const [gradeInput, setGradeInput] = useState(10);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const data = await apiFetch<any[]>('/api/teacher/classes');
      setClasses(data || []);
    } catch (err) {
      console.error('Error fetching teacher classes:', err);
    } finally {
      setLoading(false);
    }
  };

  const createClass = async () => {
    if (!classNameInput) return;
    try {
      const data = await apiFetch<any>('/api/teacher/classes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: classNameInput,
          grade_id: gradeInput,
          school_id: 'sch-1',
          teacher_id: 'usr-teacher-1',
          school_year: '2025-2026',
        }),
      });
      if (data?.class) {
        showNotification(`Đã tạo lớp thành công! Mã lớp: ${data.class.class_code}`);
        setClassNameInput('');
        setIsNewClassModalOpen(false);
        fetchClasses();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const copyClassCode = (code: string) => {
    navigator.clipboard.writeText(code);
    showNotification(`Đã sao chép mã lớp: ${code}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-24 md:pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="bg-teal-500/20 text-teal-200 text-xs px-3 py-1 rounded-full font-bold border border-teal-400/30">
              Teacher Control Studio
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white">Quản Lý Lớp Học & Bài Giảng Song Ngữ</h1>
            <p className="text-xs sm:text-sm text-teal-100/90 max-w-xl leading-relaxed">
              Tạo câu hỏi, biên soạn bài học song ngữ, thiết lập bài kiểm tra theo tỷ lệ % tiếng Anh và phân tích chẩn đoán lỗi học sinh.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('content-studio')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-extrabold text-xs rounded-xl shadow-md transition"
            >
              <Plus className="w-4 h-4" /> Tạo Từ Vựng / Bài Học
            </button>
            <button
              onClick={() => setActiveTab('test-builder')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md transition"
            >
              <GraduationCap className="w-4 h-4" /> Tạo Đề Kiểm Tra %
            </button>
          </div>
        </div>
      </div>

      {/* Class List & Actions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600" /> Danh Sách Lớp Học Quản Lý ({classes.length})
          </h2>

          <button
            onClick={() => setIsNewClassModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shadow-2xs"
          >
            <Plus className="w-4 h-4" /> Tạo Lớp Mới
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {classes.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-4 hover:border-teal-300 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                    Khối {c.grade_id}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-2">{c.name}</h3>
                  <p className="text-xs text-slate-500">Năm học: {c.school_year}</p>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-black text-teal-700">{c.student_count || 0}</span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Học sinh</p>
                </div>
              </div>

              {/* Class Code Box */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Mã tham gia Lớp (Class Code):</p>
                  <p className="font-mono text-sm font-extrabold text-slate-900">{c.class_code}</p>
                </div>

                <button
                  onClick={() => copyClassCode(c.class_code)}
                  className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-teal-50 hover:text-teal-700 transition"
                  title="Sao chép mã lớp"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => setActiveTab('teacher-analytics')}
                className="w-full py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs rounded-xl border border-teal-200 transition flex items-center justify-center gap-2"
              >
                <BarChart3 className="w-4 h-4" /> Xem Phân Tích Lớp Học
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal create class */}
      {isNewClassModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">Tạo Lớp Học Mới</h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700">Tên Lớp (ví dụ: Lớp 10A2):</label>
                <input
                  type="text"
                  value={classNameInput}
                  onChange={(e) => setClassNameInput(e.target.value)}
                  placeholder="Nhập tên lớp..."
                  className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700">Khối Lớp:</label>
                <select
                  value={gradeInput}
                  onChange={(e) => setGradeInput(parseInt(e.target.value, 10))}
                  className="w-full mt-1 p-3 rounded-xl border border-slate-300 bg-white font-bold"
                >
                  <option value={10}>Lớp 10</option>
                  <option value={11}>Lớp 11</option>
                  <option value={12}>Lớp 12</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => setIsNewClassModalOpen(false)}
                className="flex-1 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl"
              >
                Hủy
              </button>
              <button
                onClick={createClass}
                className="flex-1 py-2.5 bg-teal-600 text-white font-bold text-xs rounded-xl hover:bg-teal-700"
              >
                Tạo Lớp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
