import React from 'react';
import { ChevronLeft, ChevronRight, Flag, Grid, CheckCircle } from 'lucide-react';
import { AnswerStatus } from '../types/quiz';

interface BottomMobileBarProps {
  currentIndex: number;
  totalQuestions: number;
  currentStatus: AnswerStatus;
  onPrev: () => void;
  onNext: () => void;
  onToggleDoubt: () => void;
  onOpenPalette: () => void;
  onFinish: () => void;
}

export const BottomMobileBar: React.FC<BottomMobileBarProps> = ({
  currentIndex,
  totalQuestions,
  currentStatus,
  onPrev,
  onNext,
  onToggleDoubt,
  onOpenPalette,
  onFinish,
}) => {
  const isLast = currentIndex === totalQuestions - 1;
  const isFirst = currentIndex === 0;
  const isDoubt = currentStatus === 'doubt';

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 px-4 shadow-lg safe-area-bottom">
      <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
        {/* Tombol Sebelumnya */}
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`flex-1 flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
            isFirst
              ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400'
              : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 active:scale-95'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        {/* Tombol Ragu-Ragu */}
        <button
          onClick={onToggleDoubt}
          className={`flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
            isDoubt
              ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
              : 'border-amber-300 dark:border-amber-700/60 text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20 active:scale-95'
          }`}
          title="Tandai ragu-ragu"
        >
          <Flag className={`w-3.5 h-3.5 ${isDoubt ? 'fill-white' : 'fill-amber-500'}`} />
          <span className="hidden xs:inline">Ragu</span>
        </button>

        {/* Tombol Daftar Nomor Soal */}
        <button
          onClick={onOpenPalette}
          className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 active:scale-95"
          title="Buka daftar nomor soal"
        >
          <Grid className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>{currentIndex + 1}/{totalQuestions}</span>
        </button>

        {/* Tombol Berikutnya / Selesai */}
        {isLast ? (
          <button
            onClick={onFinish}
            className="flex-1 flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20 active:scale-95"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Selesai</span>
          </button>
        ) : (
          <button
            onClick={onNext}
            className="flex-1 flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-500/20 active:scale-95"
          >
            <span>Berikutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
