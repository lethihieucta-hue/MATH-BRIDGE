import { MathTerm, HighSchoolGrade } from "../types";

/**
 * Export vocabulary flashcard deck to a Microsoft PowerPoint Presentation (.ppt / .pptx compatible)
 */
export function exportVocabToPowerPoint(
  terms: MathTerm[],
  gradeLevel: HighSchoolGrade,
  chapterTitle: string
): void {
  if (!terms || terms.length === 0) return;

  const slidesHtml = terms
    .map((term, index) => {
      const phonetic = term.phoneticIpa || term.phonetic || "";
      const vietnamese = term.vietnameseMeaning || term.definitionVi || "";
      const englishDef = term.definitionEn || "";
      const example = term.exampleSentence || "";
      const formula = term.formulaLatex || "";
      const category = term.category || "Toán THPT";

      return `
        <!-- Slide ${index + 2}: Term Card -->
        <div style="page-break-after: always; width: 1000px; height: 562px; background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); color: #ffffff; padding: 40px; box-sizing: border-box; font-family: 'Segoe UI', Arial, sans-serif; position: relative; border: 4px solid #6366f1;">
          <!-- Header Bar -->
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(255,255,255,0.15); padding-bottom: 15px; margin-bottom: 30px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #4f46e5; color: white; font-weight: bold; font-size: 14px; padding: 4px 12px; border-radius: 20px;">
                CARD ${index + 1}/${terms.length}
              </span>
              <span style="color: #94a3b8; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                ${chapterTitle} • Lớp ${gradeLevel}
              </span>
            </div>
            <div style="color: #cbd5e1; font-size: 14px; font-weight: bold;">
              Math Bridge AI Student Flashcard
            </div>
          </div>

          <!-- Main Term Display -->
          <div style="display: flex; gap: 30px; height: 380px;">
            <!-- Left Column: English Term & IPA -->
            <div style="flex: 1.2; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; padding: 30px; display: flex; flex-direction: column; justify-content: center;">
              <span style="color: #818cf8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">
                Mathematical English Term
              </span>
              <h1 style="margin: 0; font-size: 38px; color: #ffffff; font-weight: 900; line-height: 1.1;">
                ${term.term}
              </h1>
              ${
                phonetic
                  ? `<p style="margin: 10px 0 0 0; color: #38bdf8; font-size: 20px; font-family: 'Consolas', monospace;">
                      ${phonetic}
                    </p>`
                  : ""
              }
              <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                <span style="color: #fbbf24; font-size: 12px; font-weight: bold; text-transform: uppercase;">
                  Nghĩa Tiếng Việt Chuẩn SGK:
                </span>
                <p style="margin: 5px 0 0 0; font-size: 24px; color: #f8fafc; font-weight: bold;">
                  ${vietnamese}
                </p>
              </div>
            </div>

            <!-- Right Column: Definition, Example & Formula -->
            <div style="flex: 1.4; display: flex; flex-direction: column; gap: 15px;">
              <!-- Definition Card -->
              <div style="background: rgba(255,255,255,0.04); border-left: 4px solid #38bdf8; border-radius: 12px; padding: 18px 20px;">
                <span style="color: #38bdf8; font-size: 12px; font-weight: bold; text-transform: uppercase;">
                  English Academic Definition:
                </span>
                <p style="margin: 6px 0 0 0; font-size: 16px; color: #e2e8f0; line-height: 1.4;">
                  ${englishDef || "Core mathematical concept used in problem formulations."}
                </p>
              </div>

              <!-- Example Sentence -->
              ${
                example
                  ? `<div style="background: rgba(255,255,255,0.04); border-left: 4px solid #34d399; border-radius: 12px; padding: 18px 20px;">
                      <span style="color: #34d399; font-size: 12px; font-weight: bold; text-transform: uppercase;">
                        Contextual Problem Example:
                      </span>
                      <p style="margin: 6px 0 0 0; font-size: 15px; color: #f1f5f9; font-style: italic; line-height: 1.4;">
                        "${example}"
                      </p>
                    </div>`
                  : ""
              }

              <!-- Formula (if any) -->
              ${
                formula
                  ? `<div style="background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 12px; padding: 14px 20px; text-align: center;">
                      <span style="color: #a5b4fc; font-size: 11px; font-weight: bold; text-transform: uppercase;">
                        Associated Formula / Symbol:
                      </span>
                      <p style="margin: 4px 0 0 0; font-size: 20px; font-weight: bold; color: #fde047; font-family: 'Cambria Math', serif;">
                        ${formula}
                      </p>
                    </div>`
                  : ""
              }
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  const presentationContent = `
    <html xmlns:v="urn:schemas-microsoft-com:vml"
          xmlns:o="urn:schemas-microsoft-com:office:office"
          xmlns:p="urn:schemas-microsoft-com:office:powerpoint"
          xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <title>Math Bridge AI Student - Slide Từ Vựng Toán Lớp ${gradeLevel}</title>
      <style>
        @page {
          size: 1000px 562px;
          margin: 0;
        }
        body {
          margin: 0;
          padding: 0;
          background-color: #0f172a;
        }
      </style>
    </head>
    <body>
      <!-- Title Slide -->
      <div style="page-break-after: always; width: 1000px; height: 562px; background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #0f172a 100%); color: #ffffff; padding: 60px; box-sizing: border-box; font-family: 'Segoe UI', Arial, sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <div style="background: rgba(99, 102, 241, 0.2); border: 1px solid #818cf8; padding: 6px 20px; border-radius: 30px; color: #a5b4fc; font-size: 14px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;">
          BÀI GIẢNG TỪ VỰNG TOÁN HỌC SONG NGỮ • THPT
        </div>
        <h1 style="font-size: 46px; margin: 0 0 15px 0; font-weight: 900; color: #ffffff; letter-spacing: -0.5px;">
          ${chapterTitle}
        </h1>
        <p style="font-size: 20px; color: #cbd5e1; max-width: 700px; margin: 0 0 40px 0; line-height: 1.5;">
          Bộ sưu tập ${terms.length} thuật ngữ then chốt Lớp ${gradeLevel} chuẩn SGK Kết nối tri thức & Khung Quốc tế SAT/AP
        </p>
        <div style="display: flex; gap: 20px; font-size: 14px; color: #94a3b8;">
          <span>🏫 Math Bridge AI Student</span>
          <span>•</span>
          <span>📅 Năm học 2025 - 2026</span>
          <span>•</span>
          <span>🎯 Dual-Coding Flashcard Deck</span>
        </div>
      </div>

      <!-- Flashcard Slides -->
      ${slidesHtml}
    </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", presentationContent], {
    type: "application/vnd.ms-powerpoint;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const fileName = `Slide_Tu_Vung_Toan_${gradeLevel}_${Date.now()}.ppt`;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
