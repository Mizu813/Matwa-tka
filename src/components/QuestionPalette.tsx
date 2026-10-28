import React, { useState } from 'react';
import { Question, UserAnswerRecord, AnswerStatus } from '../types/quiz';
import { Flag, Check, Circle, Filter, X } from 'lucide-react';

interface QuestionPaletteProps {
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<string, UserAnswerRecord>;
  onSelectQuestion: (index: number) => void;
  isMobileModal?: boolean;
  onCloseMobileModal?: () => void;
  showCorrectKeys?: boolean;
}

type PaletteFilter = 'all' | 'unanswered' | 'doubt' | 'answered';

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  currentIndex,
  userAnswers,
  onSelectQuestion,
  isMobileModal = false,
  onCloseMobileModal,
  showCorrectKeys = false,
}) => {
  const [filter, setFilter] = useState<PaletteFilter>('all');

  // Calculate statistics
  let answeredCount = 0;
  let doubtCount = 0;
  let unansweredCount = 0;

  questions.forEach((q) => {
    const status = userAnswers[q.id]?.status || 'unanswered';
    if (status === 'answered') answeredCount++;
    else if (status === 'doubt') doubtCount++;
    else unansweredCount++;
  });

  const filteredQuestions = questions.filter((q) => {
    const status = userAnswers[q.id]?.status || 'unanswered';
    if (filter === 'all') return true;
    if (filter === 'answered') return status === 'answered';
    if (filter === 'doubt') return status === 'doubt';
    if (filter === 'unanswered') return status === 'unanswered';
    return true;
  });

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            Navigasi Nomor Soal
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Total {questions.length} Butir Soal Terstandar
          </p>
        </div>
        {isMobileModal && onCloseMobileModal && (
          <button
            onClick={onCloseMobileModal}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 my-3 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs">
        <button
          onClick={() => setFilter('all')}
          className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-all ${
            filter === 'all'
              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-semibold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          Semua ({questions.length})
        </button>
        <button
          onClick={() => setFilter('answered')}
          className={`py-1.5 px-2 rounded-lg font-medium transition-all ${
            filter === 'answered'
              ? 'bg-teal-600 text-white shadow-sm font-semibold'
              : 'text-slate-500 dark:text-slate-400 hover:text-teal-600'
          }`}
        >
          Terjawab ({answeredCount})
        </button>
        <button
          onClick={() => setFilter('doubt')}
          className={`py-1.5 px-2 rounded-lg font-medium transition-all ${
            filter === 'doubt'
              ? 'bg-amber-500 text-white shadow-sm font-semibold'
              : 'text-slate-500 dark:text-slate-400 hover:text-amber-500'
          }`}
        >
          Ragu ({doubtCount})
        </button>
        <button
          onClick={() => setFilter('unanswered')}
          className={`py-1.5 px-2 rounded-lg font-medium transition-all ${
            filter === 'unanswered'
              ? 'bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm font-semibold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          Belum ({unansweredCount})
        </button>
      </div>

      {/* Grid of Question Numbers */}
      <div className="flex-1 overflow-y-auto max-h-[340px] pr-1 py-1">
        <div className="grid grid-cols-5 sm:grid-cols-5 gap-2">
          {filteredQuestions.map((q) => {
            const originalIndex = questions.findIndex((item) => item.id === q.id);
            const isCurrent = originalIndex === currentIndex;
            const status: AnswerStatus = userAnswers[q.id]?.status || 'unanswered';

            let btnStyle =
              'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:border-teal-400';
            let icon = null;

            if (status === 'answered') {
              btnStyle =
                'border-teal-500 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-bold';
              icon = <Check className="w-2.5 h-2.5 stroke-[3]" />;
            } else if (status === 'doubt') {
              btnStyle =
                'border-amber-500 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold';
              icon = <Flag className="w-2.5 h-2.5 fill-amber-500" />;
            }

            if (isCurrent) {
              btnStyle +=
                ' ring-2 ring-teal-500 ring-offset-2 dark:ring-offset-slate-900 scale-105 shadow-sm';
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  onSelectQuestion(originalIndex);
                  if (onCloseMobileModal) onCloseMobileModal();
                }}
                className={`relative h-11 rounded-xl border text-sm flex flex-col items-center justify-center transition-all ${btnStyle}`}
              >
                <span>{q.number}</span>
                {icon && <div className="absolute top-1 right-1">{icon}</div>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Legend Footer */}
      <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-teal-50 border border-teal-500 flex items-center justify-center text-teal-700">
              <Check className="w-2 h-2" />
            </div>
            <span>Sudah Terjawab</span>
          </div>
          <span className="font-semibold text-teal-600">{answeredCount}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-amber-50 border border-amber-500 flex items-center justify-center text-amber-700">
              <Flag className="w-2 h-2 fill-amber-500" />
            </div>
            <span>Ragu-Ragu</span>
          </div>
          <span className="font-semibold text-amber-600">{doubtCount}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></div>
            <span>Belum Terjawab</span>
          </div>
          <span className="font-semibold text-slate-600">{unansweredCount}</span>
        </div>
      </div>
    </div>
  );
};
