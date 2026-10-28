import React from 'react';
import { Question, UserAnswerRecord } from '../types/quiz';
import { MathView } from './MathView';
import { Check, CheckSquare, Square, CheckCircle2, XCircle } from 'lucide-react';

interface AnswerOptionsProps {
  question: Question;
  userAnswer?: UserAnswerRecord;
  onSelectOption: (optionId: string) => void;
  onToggleMcmaOption: (optionId: string) => void;
  onSelectCategoryAnswer: (statementId: string, value: boolean) => void;
  showSolutionPreview?: boolean;
}

export const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  question,
  userAnswer,
  onSelectOption,
  onToggleMcmaOption,
  onSelectCategoryAnswer,
  showSolutionPreview = false,
}) => {
  // 1. Tipe Soal: Pilihan Ganda Tunggal (pg_single)
  if (question.type === 'pg_single' && question.options) {
    const selected = userAnswer?.selectedOption;

    return (
      <div className="space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          Pilihan Jawaban (Pilih Satu)
        </div>
        <div className="grid grid-cols-1 gap-2.5">
          {question.options.map((opt) => {
            const isSelected = selected === opt.id;
            const isCorrect = showSolutionPreview && opt.id === question.correctAnswer;
            const isWrongSelected = showSolutionPreview && isSelected && !isCorrect;

            let cardStyle =
              'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-sm';
            let badgeStyle =
              'border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';

            if (isSelected) {
              cardStyle =
                'border-teal-500 bg-teal-50/70 dark:bg-teal-950/40 ring-2 ring-teal-500/30 shadow-sm';
              badgeStyle = 'bg-teal-600 text-white border-teal-600 font-bold';
            }

            if (isCorrect) {
              cardStyle =
                'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 ring-2 ring-emerald-500/40';
              badgeStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
            } else if (isWrongSelected) {
              cardStyle =
                'border-rose-500 bg-rose-50 dark:bg-rose-950/40 ring-2 ring-rose-500/40';
              badgeStyle = 'bg-rose-600 text-white border-rose-600 font-bold';
            }

            return (
              <button
                key={opt.id}
                onClick={() => onSelectOption(opt.id)}
                className={`w-full flex items-center text-left p-3.5 rounded-xl border transition-all duration-200 group relative ${cardStyle}`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center border text-sm flex-shrink-0 transition-transform group-hover:scale-105 ${badgeStyle}`}
                >
                  {opt.label}
                </div>
                <div className="ml-3.5 flex-1 pr-2">
                  <MathView content={opt.text} className="text-sm font-medium" />
                </div>
                {isSelected && !showSolutionPreview && (
                  <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}
                {isCorrect && (
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Kunci
                  </div>
                )}
                {isWrongSelected && (
                  <div className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1 bg-rose-100 dark:bg-rose-900/40 px-2 py-0.5 rounded-full">
                    <XCircle className="w-3.5 h-3.5" /> Jawaban Anda
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // 2. Tipe Soal: Pilihan Ganda Kompleks MCMA (Checkbox Multi-pilihan)
  if (question.type === 'pgk_mcma' && question.options) {
    const selectedList = userAnswer?.selectedOptions || [];
    const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [];

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Pilihan Ganda Kompleks (Multi-Pilihan)
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
            Pilih semua yang benar
          </span>
        </div>
        <div className="grid grid-cols-1 gap-2.5">
          {question.options.map((opt) => {
            const isChecked = selectedList.includes(opt.id);
            const isShouldBeChecked = showSolutionPreview && correctAnswers.includes(opt.id);

            let cardStyle =
              'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-sm';

            if (isChecked) {
              cardStyle =
                'border-teal-500 bg-teal-50/70 dark:bg-teal-950/40 ring-2 ring-teal-500/30';
            }

            if (showSolutionPreview) {
              if (isShouldBeChecked && isChecked) {
                cardStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40';
              } else if (isShouldBeChecked && !isChecked) {
                cardStyle = 'border-amber-500 bg-amber-50 dark:bg-amber-950/40';
              } else if (!isShouldBeChecked && isChecked) {
                cardStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40';
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => onToggleMcmaOption(opt.id)}
                className={`w-full flex items-start text-left p-3.5 rounded-xl border transition-all duration-200 group ${cardStyle}`}
              >
                <div className="mt-0.5 mr-3 text-teal-600 dark:text-teal-400 flex-shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 fill-teal-600 text-white" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400 dark:text-slate-600 group-hover:text-teal-500" />
                  )}
                </div>
                <div className="flex-1 pr-2">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-0.5">
                    Pernyataan {opt.label}
                  </div>
                  <MathView content={opt.text} className="text-sm font-medium" />
                </div>
                {showSolutionPreview && isShouldBeChecked && (
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 font-bold">
                    Kunci Benar
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // 3. Tipe Soal: PGK Kategori (Tabel Interaktif Benar / Salah per Pernyataan)
  if (question.type === 'pgk_kategori' && question.categoryStatements) {
    const answers = userAnswer?.categoryAnswers || {};
    const correctMap =
      typeof question.correctAnswer === 'object' && !Array.isArray(question.correctAnswer)
        ? (question.correctAnswer as Record<string, boolean>)
        : {};

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Tabel Evaluasi Pernyataan
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400">
            Tentukan Benar / Salah
          </span>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 p-3 bg-slate-100/80 dark:bg-slate-800/80 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
            <div className="col-span-8 sm:col-span-8">Pernyataan Analisis</div>
            <div className="col-span-2 text-center">Benar</div>
            <div className="col-span-2 text-center">Salah</div>
          </div>

          {/* Statement Rows */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {question.categoryStatements.map((stmt) => {
              const currentChoice = answers[stmt.id];
              const isAnswered = currentChoice !== undefined;
              const isCorrectRow =
                showSolutionPreview && currentChoice === correctMap[stmt.id];

              return (
                <div
                  key={stmt.id}
                  className={`grid grid-cols-12 gap-2 p-3.5 items-center transition-colors ${
                    isAnswered ? 'bg-slate-50/50 dark:bg-slate-850' : ''
                  }`}
                >
                  <div className="col-span-8 sm:col-span-8 pr-2">
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {stmt.label}
                      </span>
                      <MathView content={stmt.statement} className="text-sm font-medium flex-1" />
                    </div>
                  </div>

                  {/* Tombol BENAR */}
                  <div className="col-span-2 flex justify-center">
                    <button
                      onClick={() => onSelectCategoryAnswer(stmt.id, true)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                        currentChoice === true
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm scale-105'
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
                      }`}
                    >
                      Benar
                    </button>
                  </div>

                  {/* Tombol SALAH */}
                  <div className="col-span-2 flex justify-center">
                    <button
                      onClick={() => onSelectCategoryAnswer(stmt.id, false)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                        currentChoice === false
                          ? 'bg-rose-600 text-white border-rose-600 shadow-sm scale-105'
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30'
                      }`}
                    >
                      Salah
                    </button>
                  </div>

                  {showSolutionPreview && (
                    <div className="col-span-12 text-xs pt-1.5 text-slate-500 dark:text-slate-400 flex items-center justify-between border-t border-dashed border-slate-200 dark:border-slate-800 mt-2">
                      <span>
                        Kunci Jawaban:{' '}
                        <strong
                          className={
                            correctMap[stmt.id] ? 'text-emerald-600' : 'text-rose-600'
                          }
                        >
                          {correctMap[stmt.id] ? 'BENAR' : 'SALAH'}
                        </strong>
                      </span>
                      {isCorrectRow ? (
                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Jawaban Tepat
                        </span>
                      ) : (
                        <span className="text-rose-600 font-semibold flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Belum Tepat
                        </span>
                      )}
                    </div>
                  )}
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
