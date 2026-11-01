import React from 'react';
import { Question, UserAnswerRecord } from '../types/quiz';
import { MathView } from './MathView';
import { Check, CheckSquare, Square, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface AnswerOptionsProps {
  question: Question;
  userAnswer?: UserAnswerRecord;
  onSelectOption: (optionId: string) => void;
  onToggleMcmaOption: (optionId: string) => void;
  onSelectCategoryAnswer: (statementId: string, value: boolean) => void;
  showSolutionPreview?: boolean;
  instantFeedback?: boolean;
}

export const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  question,
  userAnswer,
  onSelectOption,
  onToggleMcmaOption,
  onSelectCategoryAnswer,
  showSolutionPreview = false,
  instantFeedback = false,
}) => {
  // 1. Tipe Soal: Pilihan Ganda Tunggal (pg_single)
  if (question.type === 'pg_single' && question.options) {
    const selected = userAnswer?.selectedOption;
    const isAnswered = !!selected;
    const isSelectionCorrect = selected === question.correctAnswer;

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Pilihan Jawaban (Pilih Satu)
          </span>
          {instantFeedback && isAnswered && (
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                isSelectionCorrect
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
              }`}
            >
              {isSelectionCorrect ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" /> Jawaban Tepat
                </>
              ) : (
                <>
                  <XCircle className="w-3.5 h-3.5" /> Belum Tepat
                </>
              )}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {question.options.map((opt) => {
            const isSelected = selected === opt.id;
            const isCorrectOption = opt.id === question.correctAnswer;

            // In instant feedback mode (after selection) or solution preview
            const showFeedback = instantFeedback && isAnswered;
            const highlightCorrect = (showFeedback || showSolutionPreview) && isCorrectOption;
            const highlightWrongSelected = (showFeedback || showSolutionPreview) && isSelected && !isCorrectOption;

            let cardStyle =
              'border-[#1F2937] bg-[#111827] text-slate-200 hover:border-indigo-500/60 hover:bg-[#151D2F]';
            let badgeStyle =
              'border-slate-700 bg-[#1F2937] text-slate-300 group-hover:border-indigo-500/50';

            if (isSelected && !showFeedback && !showSolutionPreview) {
              cardStyle =
                'border-indigo-500 bg-indigo-950/30 text-white ring-2 ring-indigo-500/30 shadow-md shadow-indigo-600/10';
              badgeStyle = 'bg-indigo-600 text-white border-indigo-500 font-bold';
            }

            if (highlightCorrect) {
              cardStyle =
                'border-emerald-500/80 bg-emerald-950/30 text-white ring-2 ring-emerald-500/30 shadow-sm';
              badgeStyle = 'bg-emerald-600 text-white border-emerald-500 font-bold';
            } else if (highlightWrongSelected) {
              cardStyle =
                'border-rose-500/80 bg-rose-950/30 text-white ring-2 ring-rose-500/30 shadow-sm';
              badgeStyle = 'bg-rose-600 text-white border-rose-500 font-bold';
            }

            return (
              <button
                key={opt.id}
                onClick={() => onSelectOption(opt.id)}
                className={`w-full flex items-center text-left p-3.5 rounded-2xl border transition-all duration-150 group relative interactive-hover ${cardStyle}`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center border text-sm font-mono flex-shrink-0 transition-transform group-hover:scale-105 ${badgeStyle}`}
                >
                  {opt.label}
                </div>
                <div className="ml-3.5 flex-1 pr-2">
                  <MathView content={opt.text} className="text-sm font-medium" />
                </div>

                {/* State Badges */}
                {isSelected && !showFeedback && !showSolutionPreview && (
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}
                {highlightCorrect && (
                  <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Kunci Jawaban
                  </div>
                )}
                {highlightWrongSelected && (
                  <div className="text-[11px] font-bold text-rose-400 flex items-center gap-1 bg-rose-500/20 px-2 py-0.5 rounded-full border border-rose-500/30">
                    <XCircle className="w-3.5 h-3.5" /> Jawaban Anda
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Instant Feedback Explanation Bar */}
        {instantFeedback && isAnswered && (
          <div
            className={`p-3.5 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 mt-2 animate-fadeIn ${
              isSelectionCorrect
                ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                : 'bg-rose-950/20 border-rose-500/30 text-rose-200'
            }`}
          >
            {isSelectionCorrect ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <span className="font-bold">
                {isSelectionCorrect
                  ? 'Kombinasi penalaran tepat!'
                  : `Pilihan ${selected} belum sesuai dengan kunci penyelesaian (${question.correctAnswer}).`}
              </span>{' '}
              {question.optionExplanations?.[selected] ||
                (isSelectionCorrect
                  ? 'Perhitungan numerik dan pemodelan aljabar Anda konsisten dengan konsep kurikulum.'
                  : 'Buka petunjuk bertahap atau lihat pembahasan langkah di bawah untuk memeriksa letak kekeliruan perhitungan.')}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2. Tipe Soal: Pilihan Ganda Kompleks MCMA (Checkbox Multi-pilihan)
  if (question.type === 'pgk_mcma' && question.options) {
    const selectedList = userAnswer?.selectedOptions || [];
    const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [];
    const isAnswered = selectedList.length > 0;

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Pilihan Ganda Kompleks (Multi-Pilihan)
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
            Pilih semua pernyataan yang benar
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {question.options.map((opt) => {
            const isChecked = selectedList.includes(opt.id);
            const isShouldBeChecked = correctAnswers.includes(opt.id);

            let cardStyle =
              'border-[#1F2937] bg-[#111827] text-slate-200 hover:border-indigo-500/60 hover:bg-[#151D2F]';

            if (isChecked && !showSolutionPreview && !instantFeedback) {
              cardStyle =
                'border-indigo-500 bg-indigo-950/30 text-white ring-2 ring-indigo-500/30 shadow-md';
            }

            if (showSolutionPreview || (instantFeedback && isAnswered)) {
              if (isShouldBeChecked && isChecked) {
                cardStyle = 'border-emerald-500 bg-emerald-950/30 text-white ring-2 ring-emerald-500/30';
              } else if (isShouldBeChecked && !isChecked) {
                cardStyle = 'border-amber-500 bg-amber-950/30 text-amber-200 ring-2 ring-amber-500/30';
              } else if (!isShouldBeChecked && isChecked) {
                cardStyle = 'border-rose-500 bg-rose-950/30 text-rose-200 ring-2 ring-rose-500/30';
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => onToggleMcmaOption(opt.id)}
                className={`w-full flex items-start text-left p-3.5 rounded-2xl border transition-all duration-150 group interactive-hover ${cardStyle}`}
              >
                <div className="mt-0.5 mr-3 text-indigo-400 flex-shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 fill-indigo-600 text-white" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-500 group-hover:text-indigo-400" />
                  )}
                </div>
                <div className="flex-1 pr-2">
                  <div className="text-xs font-bold text-slate-400 mb-0.5 font-mono">
                    Pernyataan {opt.label}
                  </div>
                  <MathView content={opt.text} className="text-sm font-medium" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // 3. Tipe Soal: PGK Kategori (Tabel Benar / Salah)
  if (question.type === 'pgk_kategori' && question.categoryStatements) {
    const categoryAnswers = userAnswer?.categoryAnswers || {};

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Tabel Evaluasi Kebenaran Pernyataan
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
            Tentukan Benar / Salah per butir
          </span>
        </div>

        <div className="rounded-2xl border border-[#1F2937] overflow-hidden bg-[#111827]">
          <div className="grid grid-cols-12 bg-[#151D2F] px-4 py-3 border-b border-[#1F2937] text-xs font-bold uppercase tracking-wider text-slate-400">
            <div className="col-span-8">Pernyataan Ilmiah / Analisis</div>
            <div className="col-span-2 text-center text-emerald-400">Benar</div>
            <div className="col-span-2 text-center text-rose-400">Salah</div>
          </div>

          <div className="divide-y divide-[#1F2937]">
            {question.categoryStatements.map((stmt) => {
              const currentVal = categoryAnswers[stmt.id];

              return (
                <div
                  key={stmt.id}
                  className="grid grid-cols-12 items-center px-4 py-3 hover:bg-[#151D2F]/50 transition-colors"
                >
                  <div className="col-span-8 pr-3">
                    <div className="text-xs font-bold text-indigo-400 mb-0.5 font-mono">
                      Butir {stmt.label}
                    </div>
                    <MathView content={stmt.statement} className="text-xs sm:text-sm text-slate-200" />
                  </div>

                  {/* Radio Benar */}
                  <div className="col-span-2 flex justify-center">
                    <button
                      onClick={() => onSelectCategoryAnswer(stmt.id, true)}
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-xs transition-all ${
                        currentVal === true
                          ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/20'
                          : 'border-slate-700 bg-[#1F2937] text-slate-400 hover:text-white hover:border-emerald-500'
                      }`}
                    >
                      B
                    </button>
                  </div>

                  {/* Radio Salah */}
                  <div className="col-span-2 flex justify-center">
                    <button
                      onClick={() => onSelectCategoryAnswer(stmt.id, false)}
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-xs transition-all ${
                        currentVal === false
                          ? 'bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-600/20'
                          : 'border-slate-700 bg-[#1F2937] text-slate-400 hover:text-white hover:border-rose-500'
                      }`}
                    >
                      S
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
