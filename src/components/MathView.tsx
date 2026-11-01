import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  content: string;
  className?: string;
  inline?: boolean;
}

/**
 * Enhanced MathView:
 * 1. KaTeX Math rendering ($...$ inline and $$...$$ display)
 * 2. Markdown Tables (| header | ... |\n|---|...|)
 * 3. Inline SVG preservation (<svg>...</svg>)
 * 4. Markdown formatting (bold, italic, lists, linebreaks)
 */
export const MathView: React.FC<MathViewProps> = ({ content, className = '', inline = false }) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    const placeholders: { id: string; html: string }[] = [];
    let pCounter = 0;

    const createPlaceholder = (html: string) => {
      const id = `___MATH_VIEW_TOKEN_${pCounter++}___`;
      placeholders.push({ id, html });
      return id;
    };

    let text = content;

    // 1. Preserve and protect raw <svg>...</svg>
    text = text.replace(/<svg[\s\S]*?<\/svg>/gi, (match) => {
      return createPlaceholder(match);
    });

    // 2. Protect and render KaTeX display math: $$...$$ or \[...\]
    text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
      try {
        const rendered = katex.renderToString(math.trim(), {
          displayMode: true,
          throwOnError: false,
        });
        const html = `<div class="my-3 overflow-x-auto overflow-y-hidden py-1 px-1 scrollbar-thin flex justify-center text-slate-900 dark:text-slate-100">${rendered}</div>`;
        return createPlaceholder(html);
      } catch (e) {
        return createPlaceholder(`<div class="text-rose-500 font-mono text-xs my-1">[Math Display Error]</div>`);
      }
    });

    // 3. Protect and render KaTeX inline math: $...$
    text = text.replace(/(?<!\$)\$([^\$\n]+?)\$(?!\$)/g, (_, math) => {
      try {
        const rendered = katex.renderToString(math.trim(), {
          displayMode: false,
          throwOnError: false,
        });
        return createPlaceholder(`<span class="inline-math">${rendered}</span>`);
      } catch (e) {
        return createPlaceholder(`<span class="text-rose-500 font-mono text-xs">[Math Error]</span>`);
      }
    });

    // 4. Parse Markdown Tables
    // Pattern: lines beginning and ending with pipe, with at least a separator row
    const lines = text.split('\n');
    const processedLines: string[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();
      const nextLine = i + 1 < lines.length ? lines[i + 1].trim() : '';

      // Check for table header and separator row (e.g. |---| or |:---:|)
      if (
        line.startsWith('|') &&
        line.endsWith('|') &&
        nextLine.startsWith('|') &&
        nextLine.endsWith('|') &&
        /^\|(?:\s*:?-+:?\s*\|)+$/.test(nextLine)
      ) {
        // Collect entire table
        const headerCols = line
          .slice(1, -1)
          .split('|')
          .map((c) => c.trim());
        const alignCols = nextLine
          .slice(1, -1)
          .split('|')
          .map((c) => {
            const trimmed = c.trim();
            if (trimmed.startsWith(':') && trimmed.endsWith(':')) return 'center';
            if (trimmed.endsWith(':')) return 'right';
            return 'left';
          });

        i += 2; // skip header & separator
        const bodyRows: string[][] = [];

        while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
          const rowCols = lines[i]
            .trim()
            .slice(1, -1)
            .split('|')
            .map((c) => c.trim());
          bodyRows.push(rowCols);
          i++;
        }

        // Build HTML Table
        let tableHtml = `<div class="overflow-x-auto my-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs"><table class="w-full text-xs sm:text-sm border-collapse bg-white dark:bg-[#111827]">`;
        tableHtml += `<thead class="bg-slate-100 dark:bg-slate-800/80 font-bold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700"><tr>`;
        headerCols.forEach((col, idx) => {
          const align = alignCols[idx] || 'left';
          tableHtml += `<th class="py-2.5 px-3 border-r last:border-r-0 border-slate-200 dark:border-slate-700 text-${align}">${col}</th>`;
        });
        tableHtml += `</tr></thead><tbody class="divide-y divide-slate-200 dark:divide-slate-800">`;

        bodyRows.forEach((row) => {
          tableHtml += `<tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">`;
          row.forEach((cell, idx) => {
            const align = alignCols[idx] || 'left';
            tableHtml += `<td class="py-2 px-3 border-r last:border-r-0 border-slate-200 dark:border-slate-800 text-${align}">${cell}</td>`;
          });
          tableHtml += `</tr>`;
        });

        tableHtml += `</tbody></table></div>`;
        processedLines.push(createPlaceholder(tableHtml));
      } else {
        processedLines.push(lines[i]);
        i++;
      }
    }

    text = processedLines.join('\n');

    // 5. Basic markdown formatting (bold, italic, list items)
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
    text = text.replace(/(?<!\*)\*([^\*\n]+?)\*(?!\*)/g, '<em class="italic">$1</em>');

    // Paragraph breaks and line breaks
    text = text.replace(/\n\n+/g, '<div class="h-2.5"></div>');
    text = text.replace(/\n/g, '<br/>');

    // 6. Restore all protected placeholders
    placeholders.forEach(({ id, html }) => {
      text = text.split(id).join(html);
    });

    return text;
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
      className={`math-content leading-relaxed text-slate-800 dark:text-slate-200 break-words [overflow-wrap:anywhere] max-w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
