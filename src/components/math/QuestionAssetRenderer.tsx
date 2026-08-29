import React from 'react';
import { QuestionAsset } from '../../types';

interface Props {
  assets?: QuestionAsset[];
  language?: 'VIETNAMESE' | 'ENGLISH' | 'BILINGUAL';
  compact?: boolean;
}

const HIDDEN_CAPTION_PATTERNS = [
  /hình\/bảng gốc từ (?:bản gv|tài liệu) phan nhật linh/i,
  /original figure\/table from phan nhat linh/i,
  /hình minh họa dạng bài/i,
  /concept diagram/i,
];

const SvgFrame: React.FC<{ children: React.ReactNode; compact?: boolean }> = ({ children, compact }) => (
  <svg viewBox="0 0 320 180" role="img" aria-label="Math diagram" className={`${compact ? 'max-w-[260px]' : 'max-w-[360px]'} w-full h-auto mx-auto text-slate-700`}>
    {children}
  </svg>
);

const Diagram: React.FC<{ kind: import('../../types').QuestionDiagramKind; compact?: boolean }> = ({ kind, compact }) => {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2 } as const;
  switch (kind) {
    case 'triangle':
      return <SvgFrame compact={compact}><path d="M55 145 L160 35 L270 145 Z" {...common}/><text x="46" y="162">A</text><text x="156" y="28">B</text><text x="274" y="162">C</text><path d="M66 145 L66 134 L77 134" {...common}/></SvgFrame>;
    case 'line-2d':
      return <SvgFrame compact={compact}><path d="M35 145 H292 M55 165 V20" {...common}/><path d="M70 135 L270 55" {...common}/><path d="M75 55 L265 135" {...common}/><text x="295" y="150">x</text><text x="46" y="24">y</text></SvgFrame>;
    case 'circle':
      return <SvgFrame compact={compact}><circle cx="160" cy="90" r="62" {...common}/><circle cx="160" cy="90" r="3" fill="currentColor"/><path d="M160 90 L216 64" {...common}/><text x="150" y="108">I</text><text x="220" y="60">M</text></SvgFrame>;
    case 'conic':
      return <SvgFrame compact={compact}><path d="M40 140 H290 M160 165 V20" {...common}/><path d="M75 140 Q160 30 245 140" {...common}/><text x="292" y="145">x</text><text x="150" y="23">y</text></SvgFrame>;
    case 'trig-graph':
      return <SvgFrame compact={compact}><path d="M25 90 H300 M45 160 V20" {...common}/><path d="M45 90 C75 25 105 25 135 90 S195 155 225 90 S275 25 300 70" {...common}/><text x="302" y="95">x</text><text x="37" y="20">y</text></SvgFrame>;
    case 'vector-3d':
      return <SvgFrame compact={compact}><path d="M75 135 L280 135 M75 135 L75 28 M75 135 L25 165" {...common}/><path d="M75 135 L225 55" {...common}/><path d="M225 55 l-14 2 m14-2 l-7 12" {...common}/><text x="284" y="140">x</text><text x="65" y="24">z</text><text x="18" y="174">y</text><text x="230" y="50">v</text></SvgFrame>;
    case 'plane-3d':
      return <SvgFrame compact={compact}><path d="M55 125 L125 45 L270 55 L205 140 Z" {...common}/><path d="M95 160 L225 28" {...common}/><circle cx="160" cy="95" r="3" fill="currentColor"/><text x="240" y="52">(P)</text><text x="228" y="28">d</text></SvgFrame>;
    case 'sphere-3d':
      return <SvgFrame compact={compact}><circle cx="160" cy="90" r="66" {...common}/><ellipse cx="160" cy="90" rx="66" ry="22" {...common}/><path d="M160 90 L208 48" {...common}/><circle cx="160" cy="90" r="3" fill="currentColor"/><text x="148" y="108">I</text><text x="211" y="46">M</text></SvgFrame>;
    case 'solid-3d':
      return <SvgFrame compact={compact}><path d="M70 135 L225 135 L275 105 L120 105 Z" {...common}/><path d="M170 28 L70 135 M170 28 L225 135 M170 28 L275 105 M170 28 L120 105" {...common}/><text x="166" y="23">S</text><text x="58" y="150">A</text><text x="225" y="150">B</text><text x="280" y="105">C</text><text x="110" y="101">D</text></SvgFrame>;
    case 'area-graph':
      return <SvgFrame compact={compact}><path d="M35 145 H295 M55 165 V20" {...common}/><path d="M65 135 Q150 35 265 120" {...common}/><path d="M92 145 L92 108 M238 145 L238 101" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 4"/><path d="M92 145 Q150 55 238 101" fill="currentColor" opacity="0.08" stroke="none"/></SvgFrame>;
    default:
      return null;
  }
};

function cleanCaption(caption?: string): string {
  if (!caption) return '';
  return HIDDEN_CAPTION_PATTERNS.some((re) => re.test(caption)) ? '' : caption;
}

export const QuestionAssetRenderer: React.FC<Props> = ({ assets, language = 'VIETNAMESE', compact = false }) => {
  if (!assets?.length) return null;
  return (
    <div className="space-y-2 my-2 print:break-inside-avoid">
      {assets.map((asset, index) => {
        // All SVG concept diagrams are placeholder illustrations only; suppress them entirely.
        if (asset.kind === 'diagram') return null;

        const rawCaption = language === 'ENGLISH' ? (asset.title_en || asset.title_vi) : (asset.title_vi || asset.title_en);
        const caption = cleanCaption(rawCaption);
        if (asset.kind === 'image') {
          const alt = language === 'ENGLISH'
            ? (asset.alt_en || asset.alt_vi || caption || 'Source math figure')
            : (asset.alt_vi || asset.alt_en || caption || 'Hình toán học từ tài liệu gốc');
          return (
            <figure key={`${asset.src}-${index}`} className="rounded-lg border border-slate-200 bg-white p-2 max-w-2xl print:max-w-xl">
              <img src={asset.src} alt={alt} loading="lazy" className={`${compact ? 'max-h-[250px]' : 'max-h-[420px]'} w-full h-auto object-contain mx-auto`} />
              {caption ? <figcaption className="text-[10px] sm:text-xs text-slate-500 text-center font-sans mt-1">{caption}</figcaption> : null}
            </figure>
          );
        }
        return null;
      })}
    </div>
  );
};
