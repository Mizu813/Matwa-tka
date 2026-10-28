import React, { useState } from 'react';
import { QuestionExplanation } from '../types/quiz';
import { MathView } from './MathView';
import { ChevronDown, ChevronUp, Lightbulb, BookOpen, CheckCircle } from 'lucide-react';

interface ExplanationAccordionProps {
  explanation: QuestionExplanation;
  defaultOpen?: boolean;
}

export const ExplanationAccordion: React.FC<ExplanationAccordionProps> = ({
  explanation,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mt-6 rounded-xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 overflow-hidden transition-all shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left font-semibold text-teal-800 dark:text-teal-300 hover:bg-teal-100/50 dark:hover:bg-teal-900/30 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-bold">Buka Pembahasan Lengkap &amp; Langkah Matematis</span>
            <p className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-0.5">
              Klik untuk melihat tahapan analisis kognitif &amp; perumusan ilmiah
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 font-medium">
            {isOpen ? 'Tutup' : 'Lihat Solusi'}
          </span>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {isOpen && (
        <div className="p-5 border-t border-teal-500/20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm space-y-4">
          {/* Key Concept Callout */}
          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30">
            <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Konsep Inti Blueprint
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                {explanation.keyConcept}
              </div>
            </div>
          </div>

          {/* Mathematical Summary */}
          <div className="p-3.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Ringkasan Solusi
            </div>
            <MathView content={explanation.summary} className="text-sm text-slate-700 dark:text-slate-300" />
          </div>

          {/* Step by Step Breakdown */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Tahapan Pengerjaan Sistematis
            </div>
            {explanation.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{step.title}</h4>
                </div>
                <MathView content={step.content} className="text-sm text-slate-700 dark:text-slate-300 mt-1 pl-7" />
                {step.formula && (
                  <div className="mt-2 pl-7">
                    <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950 border border-teal-500/20 text-center">
                      <MathView content={`$$${step.formula}$$`} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end text-xs text-emerald-600 dark:text-emerald-400 font-medium gap-1.5 pt-2">
            <CheckCircle className="w-4 h-4" /> Solusi terverifikasi akurat 100% sesuai standar kurikulum
          </div>
        </div>
      )}
    </div>
  );
};
