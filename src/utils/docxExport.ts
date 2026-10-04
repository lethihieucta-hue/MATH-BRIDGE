import { AIExamData, ExamQuestion } from "../types";

/**
 * Clean latex expressions for Word export
 */
function cleanLatexForDoc(text: string): string {
  if (!text) return "";
  return text
    .replace(/\\ge/g, "≥")
    .replace(/\\le/g, "≤")
    .replace(/\\ne/g, "≠")
    .replace(/\\pm/g, "±")
    .replace(/\\times/g, "×")
    .replace(/\\div/g, "÷")
    .replace(/\\in/g, "∈")
    .replace(/\\notin/g, "∉")
    .replace(/\\subset/g, "⊂")
    .replace(/\\cup/g, "∪")
    .replace(/\\cap/g, "∩")
    .replace(/\\infty/g, "∞")
    .replace(/\\alpha/g, "α")
    .replace(/\\beta/g, "β")
    .replace(/\\theta/g, "θ")
    .replace(/\\Delta/g, "Δ")
    .replace(/\\delta/g, "δ")
    .replace(/\\pi/g, "π")
    .replace(/\\sqrt\{([^}]+)\}/g, "√($1)")
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "($1)/($2)")
    .replace(/\\text\{([^}]+)\}/g, "$1")
    .replace(/\$([^\$]+)\$/g, "<i>$1</i>");
}

/**
 * Export an AI Exam to a formatted Microsoft Word document (.doc / .docx compatible)
 */
export function exportExamToWord(exam: AIExamData): void {
  const currentDate = new Date().toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const questionsHtml = exam.questions
    .map((q: ExamQuestion, idx: number) => {
      const promptClean = cleanLatexForDoc(q.prompt);
      const promptEnClean = q.promptEnglish ? cleanLatexForDoc(q.promptEnglish) : "";
      const promptViClean = q.promptVietnamese ? cleanLatexForDoc(q.promptVietnamese) : "";

      const optionsHtml = q.options
        .map(
          (opt) =>
            `<td style="width: 50%; padding: 6px 12px; border: 1px solid #e2e8f0; font-size: 11pt; vertical-align: top;">
              <b style="color: #4338ca;">${opt.label}.</b> ${cleanLatexForDoc(opt.text)}
            </td>`
        )
        .reduce((acc: string[], curr, i) => {
          if (i % 2 === 0) {
            acc.push(`<tr>${curr}`);
          } else {
            acc[acc.length - 1] += `${curr}</tr>`;
          }
          return acc;
        }, [])
        .join("");

      return `
        <div style="margin-bottom: 22px; page-break-inside: avoid;">
          <p style="font-size: 11.5pt; font-weight: bold; margin-bottom: 6px; color: #0f172a;">
            Câu ${idx + 1} (${cleanLatexForDoc(q.chapterTitleVi)} - Độ khó: ${q.difficulty}):
          </p>
          <div style="background-color: #f8fafc; border-left: 4px solid #4f46e5; padding: 10px 14px; margin-bottom: 10px; font-size: 11pt; line-height: 1.5;">
            <p style="margin: 0; color: #1e293b;">${promptClean}</p>
            ${
              promptEnClean && promptEnClean !== promptClean
                ? `<p style="margin: 6px 0 0 0; color: #334155; font-style: italic;"><b>[English]:</b> ${promptEnClean}</p>`
                : ""
            }
            ${
              promptViClean && promptViClean !== promptClean
                ? `<p style="margin: 4px 0 0 0; color: #475569;"><b>[Dịch nghĩa]:</b> ${promptViClean}</p>`
                : ""
            }
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
            ${optionsHtml}
          </table>
        </div>
      `;
    })
    .join("");

  const answersTableRows = exam.questions
    .map(
      (q, idx) => `
      <tr style="text-align: center; font-size: 10.5pt;">
        <td style="border: 1px solid #94a3b8; padding: 6px; font-weight: bold; background-color: #f1f5f9;">Câu ${idx + 1}</td>
        <td style="border: 1px solid #94a3b8; padding: 6px; font-weight: bold; color: #16a34a; font-size: 12pt;">${q.correctAnswer}</td>
        <td style="border: 1px solid #94a3b8; padding: 6px; text-align: left;">
          ${
            q.keyTerms && q.keyTerms.length > 0
              ? q.keyTerms.map((t) => `<b>${t.term}</b> (${t.vietnamese})`).join("; ")
              : "Thuật ngữ SGK"
          }
        </td>
      </tr>
    `
    )
    .join("");

  const detailedSolutionsHtml = exam.questions
    .map(
      (q, idx) => `
      <div style="margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px dashed #cbd5e1; page-break-inside: avoid;">
        <p style="font-weight: bold; font-size: 11pt; color: #1e293b; margin-bottom: 4px;">
          <span style="background-color: #4f46e5; color: white; padding: 2px 8px; border-radius: 4px;">Câu ${idx + 1}</span>
          Đáp án đúng: <span style="color: #16a34a; font-size: 12pt;">${q.correctAnswer}</span>
        </p>
        <p style="margin: 6px 0; font-size: 10.5pt; color: #334155; line-height: 1.5;">
          <b>Hướng dẫn giải:</b> ${cleanLatexForDoc(q.detailedExplanationVi)}
        </p>
        ${
          q.detailedExplanationEn
            ? `<p style="margin: 4px 0; font-size: 10pt; color: #64748b; font-style: italic;">
                <b>English Steps:</b> ${cleanLatexForDoc(q.detailedExplanationEn)}
              </p>`
            : ""
        }
      </div>
    `
    )
    .join("");

  const documentContent = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office"
          xmlns:w="urn:schemas-microsoft-com:office:word"
          xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <title>${exam.title}</title>
      <style>
        @page {
          size: 21.0cm 29.7cm;
          margin: 2.0cm 2.0cm 2.0cm 2.0cm;
          mso-page-orientation: portrait;
        }
        body {
          font-family: 'Times New Roman', Times, serif;
          font-size: 11pt;
          line-height: 1.35;
          color: #000000;
        }
        table {
          border-collapse: collapse;
        }
      </style>
    </head>
    <body>
      <!-- Header School Info -->
      <table style="width: 100%; margin-bottom: 15px; border-bottom: 2px solid #000;">
        <tr>
          <td style="width: 50%; vertical-align: top; text-align: center; font-size: 10pt;">
            <b>BỘ GIÁO DỤC VÀ ĐÀO TẠO</b><br/>
            <b>DỰ ÁN MATH BRIDGE AI STUDENT - THPT</b><br/>
            <i>Chương trình KNTT & Quốc tế</i>
          </td>
          <td style="width: 50%; vertical-align: top; text-align: center; font-size: 10pt;">
            <b>KỲ THI ĐÁNH GIÁ NĂNG LỰC TOÁN SONG NGỮ</b><br/>
            <b>NĂM HỌC 2025 - 2026</b><br/>
            <i>Thời gian làm bài: ${exam.durationMinutes} phút</i>
          </td>
        </tr>
      </table>

      <!-- Exam Title -->
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="margin: 0; font-size: 15pt; text-transform: uppercase; color: #1e3a8a;">
          ${exam.title}
        </h2>
        <p style="margin: 4px 0 0 0; font-size: 10.5pt; font-style: italic;">
          (Khối lớp: ${exam.gradeLevel} | Chuyên đề: ${exam.chapterTitleVi} | Tỉ lệ ngôn ngữ: ${exam.languageRatio})
        </p>
      </div>

      <!-- Student info box -->
      <table style="width: 100%; border: 1px solid #000; margin-bottom: 20px; font-size: 10.5pt;">
        <tr>
          <td style="padding: 6px 12px; width: 60%;">Họ và tên thí sinh: ................................................................</td>
          <td style="padding: 6px 12px; width: 40%;">Lớp: ........................ Mã HS: .............</td>
        </tr>
        <tr>
          <td style="padding: 6px 12px;">Phòng thi số: ..........................................................................</td>
          <td style="padding: 6px 12px;">Ngày làm bài: ${currentDate}</td>
        </tr>
      </table>

      <!-- Part I: Exam Questions -->
      <div style="margin-bottom: 25px;">
        <h3 style="font-size: 12.5pt; color: #1e3a8a; border-bottom: 1px solid #1e3a8a; padding-bottom: 4px; margin-bottom: 14px;">
          PHẦN I. CÂU HỎI TRẮC NGHIỆM SONG NGỮ (${exam.totalQuestions} CÂU)
        </h3>
        ${questionsHtml}
      </div>

      <!-- Page break for solutions -->
      <br clear="all" style="page-break-before:always" />

      <!-- Part II: Answer Key & Solutions -->
      <div>
        <h3 style="font-size: 12.5pt; color: #1e3a8a; border-bottom: 1px solid #1e3a8a; padding-bottom: 4px; margin-bottom: 14px;">
          PHẦN II. BẢNG ĐÁP ÁN & LỜI GIẢI CHI TIẾT
        </h3>

        <h4 style="font-size: 11pt; margin-bottom: 8px;">1. Bảng Đáp Án & Thuật Ngữ Cốt Lõi:</h4>
        <table style="width: 100%; border: 1px solid #94a3b8; margin-bottom: 20px;">
          <tr style="background-color: #e2e8f0; text-align: center; font-weight: bold; font-size: 10.5pt;">
            <td style="border: 1px solid #94a3b8; padding: 6px; width: 20%;">Câu số</td>
            <td style="border: 1px solid #94a3b8; padding: 6px; width: 20%;">Đáp án đúng</td>
            <td style="border: 1px solid #94a3b8; padding: 6px; width: 60%;">Từ vựng toán học then chốt</td>
          </tr>
          ${answersTableRows}
        </table>

        <h4 style="font-size: 11pt; margin-bottom: 8px;">2. Hướng Dẫn Giải Chi Tiết Từng Câu:</h4>
        ${detailedSolutionsHtml}
      </div>

      <!-- Footer Note -->
      <div style="text-align: center; margin-top: 30px; font-size: 9.5pt; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 10px;">
        Đề thi được biên soạn và xuất bản tự động bởi Hệ thống Math Bridge AI Student - Phù hợp chuẩn SGK KNTT & SAT Math.
      </div>
    </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", documentContent], {
    type: "application/msword;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const fileName = `De_Thi_Toan_${exam.gradeLevel}_${exam.chapterId}_${Date.now()}.doc`;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
