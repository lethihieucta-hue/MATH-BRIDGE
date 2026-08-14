import React from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  inline?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  content,
  inline = false,
  className = '',
}) => {
  if (!content) return null;

  // Function to render single latex string with katex
  const renderLatex = (latex: string, isInline: boolean) => {
    try {
      return katex.renderToString(latex, {
        displayMode: !isInline,
        throwOnError: false,
      });
    } catch (e) {
      console.warn('KaTeX render error:', e);
      return latex;
    }
  };

  // Process text with mixed LaTeX delimiters $...$ or $$...$$
  const processMixedText = (text: string) => {
    // Split by block math $$...$$ first, then inline $...$
    const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const latex = part.slice(2, -2).trim();
        const html = renderLatex(latex, false);
        return (
          <div
            key={index}
            className="my-2 overflow-x-auto text-center"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const latex = part.slice(1, -1).trim();
        const html = renderLatex(latex, true);
        return (
          <span
            key={index}
            className="inline-block px-0.5"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  // If content contains $ symbol or latex commands like \frac, \sqrt, \int
  if (content.includes('$') || content.includes('\\')) {
    return (
      <div className={`math-render ${className} ${inline ? 'inline' : 'block'}`}>
        {processMixedText(content)}
      </div>
    );
  }

  // Pure single latex formula if explicitly passed without $ signs
  if (inline) {
    const html = renderLatex(content, true);
    return (
      <span
        className={`math-render inline-block px-0.5 ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <div
      className={`math-render ${className}`}
      dangerouslySetInnerHTML={{ __html: renderLatex(content, false) }}
    />
  );
};
