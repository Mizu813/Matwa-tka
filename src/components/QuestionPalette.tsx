import React, { useState } from 'react';
import { Question, UserAnswerRecord, AnswerStatus } from '../types/quiz';
import { Flag, Check, X } from 'lucide-react';

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
    <div className="bg-[#111827] rounded-3xl border border-[#1F2937] p-4 shadow-sm flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#1F2937]">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Palet Nomor Soal
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {answeredCount} dari {questions.length} terjawab
          </p>
        </div>
        {isMobileModal && onCloseMobileModal && (
          <button
            onClick={onCloseMobileModal}
            className="p-1.5 rounded-lg bg-[#1F2937] text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 my-3 p-1 rounded-xl bg-[#0B0F19] border border-[#1F2937] text-[11px]">
        <button
          onClick={() => setFilter('all')}
          className={`flex-1 py-1 px-1.5 rounded-lg font-bold transition-all ${
            filter === 'all'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Semua ({questions.length})
        </button>
        <button
          onClick={() => setFilter('answered')}
          className={`py-1 px-2 rounded-lg font-bold transition-all ${
            filter === 'answered'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-emerald-400'
          }`}
        >
          Dijawab ({answeredCount})
        </button>
        <button
          onClick={() => setFilter('doubt')}
          className={`py-1 px-2 rounded-lg font-bold transition-all ${
            filter === 'doubt'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-amber-400'
          }`}
        >
          Ragu ({doubtCount})
        </button>
      </div>

      {/* Grid of Question Numbers */}
      <div className="flex-1 overflow-y-auto max-h-[320px] pr-1 py-1">
        <div className="grid grid-cols-5 gap-2">
          {filteredQuestions.map((q) => {
            const originalIndex = questions.findIndex((item) => item.id === q.id);
            const isCurrent = originalIndex === currentIndex;
            const status: AnswerStatus = userAnswers[q.id]?.status || 'unanswered';

            let btnStyle =
              'border-[#1F2937] bg-[#151D2F] text-slate-300 hover:border-indigo-500 hover:text-white';
            let icon = null;

            if (status === 'answered') {
              btnStyle =
                'border-emerald-500/60 bg-emerald-950/40 text-emerald-300 font-bold';
              icon = <Check className="w-2.5 h-2.5 stroke-[3] text-emerald-400" />;
            } else if (status === 'doubt') {
              btnStyle =
                'border-amber-500/60 bg-amber-950/40 text-amber-300 font-bold';
              icon = <Flag className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />;
            }

            if (isCurrent) {
              btnStyle +=
                ' ring-2 ring-indigo-500 ring-offset-2 ring-offset-[#0B0F19] scale-105 shadow-md shadow-indigo-600/20';
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  onSelectQuestion(originalIndex);
                  if (onCloseMobileModal) onCloseMobileModal();
                }}
                className={`relative h-10 rounded-xl border text-xs font-mono font-bold flex flex-col items-center justify-center transition-all ${btnStyle}`}
              >
                <span>{q.number}</span>
                {icon && <div className="absolute top-1 right-1">{icon}</div>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Legend Footer */}
      <div className="pt-3 mt-3 border-t border-[#1F2937] text-[11px] text-slate-400 space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Sudah Dijawab</span>
          </div>
          <span className="font-mono font-bold text-emerald-400">{answeredCount}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>Ragu-Ragu</span>
          </div>
          <span className="font-mono font-bold text-amber-400">{doubtCount}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span>Belum Terjawab</span>
          </div>
          <span className="font-mono font-bold text-slate-400">{unansweredCount}</span>
        </div>
      </div>
    </div>
  );
};
