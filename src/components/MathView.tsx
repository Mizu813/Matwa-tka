import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  content: string;
  className?: string;
  inline?: boolean;
}

/**
 * MathView renders mixed text containing LaTeX equations:
 * - Inline math: $...$ or \(...\)
 * - Display/Block math: $$...$$ or \[...\]
 */
export const MathView: React.FC<MathViewProps> = ({ content, className = '', inline = false }) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    // First replace block math $$...$$ or \[...\]
    let processed = content;

    // Pattern for display math: $$...$$
    processed = processed.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
      try {
        const rendered = katex.renderToString(math.trim(), {
          displayMode: true,
          throwOnError: false,
        });
        return `<div class="my-2.5 overflow-x-auto py-1.5 scrollbar-thin flex justify-center text-slate-800 dark:text-slate-100">${rendered}</div>`;
      } catch (e) {
        return `<div class="text-rose-500 font-mono text-xs my-1">[Math Error: ${math}]</div>`;
      }
    });

    // Pattern for inline math: $...$ (avoiding double $)
    processed = processed.replace(/(?<!\$)\$([^\$\n]+?)\$(?!\$)/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: false,
          throwOnError: false,
        });
      } catch (e) {
        return `<span class="text-rose-500 font-mono text-xs">[Math: ${math}]</span>`;
      }
    });

    // Replace line breaks with <br/> if not wrapped in tags
    processed = processed.replace(/\n\n/g, '<div class="h-3"></div>');
    processed = processed.replace(/\n/g, '<br/>');

    return processed;
  }, [content]);

  if (inline) {
    return (
      <span
        className={`inline-math-container ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }

  return (
    <div
      className={`math-content leading-relaxed text-slate-700 dark:text-slate-200 ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
