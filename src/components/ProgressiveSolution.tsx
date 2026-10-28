import React, { useState } from 'react';
import { QuestionExplanation } from '../types/quiz';
import { MathView } from './MathView';
import { QuestionVisual } from './svg/VisualSVGs';
import {
  Lightbulb,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface ProgressiveSolutionProps {
  explanation: QuestionExplanation;
  hint1?: string;
  hint2?: string;
  trap?: string;
  isExamMode?: boolean;
  svgComponentId?: string;
}

export const ProgressiveSolution: React.FC<ProgressiveSolutionProps> = ({
  explanation,
  hint1,
  hint2,
  trap,
  isExamMode = false,
  svgComponentId,
}) => {
  // Stages: 0 = none, 1 = hint1, 2 = hint2, 3 = full solution
  const [disclosureStage, setDisclosureStage] = useState<number>(0);

  // If in exam mode, hints are disabled
  if (isExamMode) {
    return (
      <div className="mt-6 p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-center">
        <p className="text-xs text-amber-300 font-semibold flex items-center justify-center gap-1.5">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          Mode Simulasi Ujian Aktif: Petunjuk dan pembahasan baru dapat dibuka setelah evaluasi akhir disubmit.
        </p>
      </div>
    );
  }

  // Fallbacks if not provided
  const activeHint1 = hint1 || explanation.keyConcept;
  const activeHint2 =
    hint2 ||
    (explanation.steps && explanation.steps.length > 0
      ? `${explanation.steps[0].title}: ${explanation.steps[0].content}`
      : 'Mulailah dengan memodelkan variabel dan menentukan persamaan utama.');

  return (
    <div className="mt-6 rounded-2xl border border-[#1F2937] bg-[#111827] overflow-hidden shadow-sm transition-all">
      {/* 3-Stage Progressive Action Bar */}
      <div className="p-4 border-b border-[#1F2937] bg-[#151D2F] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Bantuan Bertahap (Progressive Disclosure)
            </h4>
            <p className="text-[11px] text-slate-400">
              Gunakan petunjuk tanpa langsung membuka jawaban akhir untuk melatih daya nalar
            </p>
          </div>
        </div>

        {/* Action Stage Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Button Stage 1 */}
          <button
            onClick={() => setDisclosureStage((prev) => (prev >= 1 ? 0 : 1))}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
              disclosureStage >= 1
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                : 'bg-[#111827] text-slate-300 hover:text-white border-[#1F2937] hover:border-indigo-500'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>Petunjuk 1 (Konsep)</span>
          </button>

          {/* Button Stage 2 */}
          <button
            onClick={() => setDisclosureStage((prev) => (prev >= 2 ? 1 : 2))}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
              disclosureStage >= 2
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                : 'bg-[#111827] text-slate-300 hover:text-white border-[#1F2937] hover:border-indigo-500'
            }`}
          >
            <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
            <span>Petunjuk 2 (Langkah Awal)</span>
          </button>

          {/* Button Stage 3 */}
          <button
            onClick={() => setDisclosureStage((prev) => (prev === 3 ? 0 : 3))}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
              disclosureStage === 3
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/20'
                : 'bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/60 border-emerald-500/40'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>{disclosureStage === 3 ? 'Tutup Solusi' : 'Lihat Solusi Lengkap'}</span>
          </button>
        </div>
      </div>

      {/* Progressive Content Area */}
      {disclosureStage > 0 && (
        <div className="p-5 space-y-4 animate-fadeIn">
          {/* STAGE 1: Konsep Inti / Teorema */}
          {disclosureStage >= 1 && (
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 flex-shrink-0 mt-0.5">
                <Lightbulb className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  Petunjuk 1: Konsep &amp; Teorema Inti
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  <MathView content={activeHint1} />
                </div>
              </div>
            </div>
          )}

          {/* STAGE 2: Langkah Awal / Persamaan */}
          {disclosureStage >= 2 && (
            <div className="p-4 rounded-xl bg-[#151D2F] border border-slate-700 flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0 mt-0.5">
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  Petunjuk 2: Pemodelan &amp; Langkah Awal
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1">
                  <MathView content={activeHint2} />
                </div>
              </div>
            </div>
          )}

          {/* STAGE 3: Full Solution & Step-by-Step Breakdown */}
          {disclosureStage === 3 && (
            <div className="space-y-4 pt-2 border-t border-[#1F2937]">
              {/* Solution Summary */}
              <div className="p-4 rounded-xl bg-[#0B0F19] border border-slate-800">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Ringkasan Penyelesaian Matematis
                </div>
                <MathView content={explanation.summary} className="text-xs sm:text-sm text-slate-300" />
              </div>

              {/* Solution Graphic Analysis */}
              {svgComponentId && (
                <div className="p-4 rounded-xl bg-[#0B0F19] border border-emerald-500/30 flex flex-col items-center justify-center">
                  <div className="text-[11px] font-bold text-emerald-400 mb-2 uppercase tracking-wider flex items-center gap-1.5 self-start">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Grafik Analisis Solusi &amp; Penjelasan Visual
                  </div>
                  <QuestionVisual svgId={svgComponentId} mode="solution" />
                </div>
              )}

              {/* Numbered Step Cards */}
              <div className="space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Tahapan Pengerjaan Rinci
                </div>

                {explanation.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-800 bg-[#0B0F19] hover:border-slate-700 transition-colors space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                        {idx + 1}
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">{step.title}</h5>
                    </div>

                    <div className="pl-8 text-xs sm:text-sm text-slate-300">
                      <MathView content={step.content} />
                    </div>

                    {step.formula && (
                      <div className="mt-2 ml-8 p-3 rounded-lg bg-[#111827] border border-indigo-500/20 text-center overflow-x-auto">
                        <MathView content={`$$${step.formula}$$`} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Common Trap Callout if available */}
              {(trap || explanation.keyConcept) && (
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/40 text-amber-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Catatan Kritis &amp; Jebakan Soal (TKA Trap)</span>
                  </div>
                  <div className="text-xs text-slate-300 pl-6">
                    <MathView
                      content={
                        trap ||
                        `Periksa kembali batas domain nilai variabel dan aturan tanda pada pengerjaan ${explanation.keyConcept}.`
                      }
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-end text-[11px] text-emerald-400 font-medium gap-1.5 pt-1">
                <CheckCircle2 className="w-4 h-4" /> Solusi terverifikasi akurat 100% sesuai standar kurikulum TKA
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
