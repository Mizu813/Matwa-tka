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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0F19]/95 backdrop-blur-md border-t border-[#1F2937] p-2.5 px-4 shadow-2xl safe-area-bottom">
      <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
        {/* Tombol Sebelumnya */}
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`flex-1 flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
            isFirst
              ? 'opacity-40 cursor-not-allowed border-[#1F2937] text-slate-600 bg-transparent'
              : 'border-slate-700 bg-[#151D2F] text-slate-300 hover:text-white active:scale-95'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Sebelum</span>
        </button>

        {/* Tombol Ragu-Ragu */}
        <button
          onClick={onToggleDoubt}
          className={`flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
            isDoubt
              ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
              : 'border-amber-500/40 text-amber-400 bg-amber-950/20 active:scale-95'
          }`}
          title="Tandai ragu-ragu"
        >
          <Flag className={`w-3.5 h-3.5 ${isDoubt ? 'fill-white' : 'fill-amber-400'}`} />
          <span className="hidden xs:inline">Ragu</span>
        </button>

        {/* Tombol Daftar Nomor Soal */}
        <button
          onClick={onOpenPalette}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold border border-slate-700 bg-[#151D2F] text-slate-300 active:scale-95"
          title="Buka daftar nomor soal"
        >
          <Grid className="w-4 h-4 text-indigo-400" />
          <span className="font-mono">{currentIndex + 1}/{totalQuestions}</span>
        </button>

        {/* Tombol Berikutnya / Selesai */}
        {isLast ? (
          <button
            onClick={onFinish}
            className="flex-1 flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-md shadow-emerald-600/30 active:scale-95"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Selesai</span>
          </button>
        ) : (
          <button
            onClick={onNext}
            className="flex-1 flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 active:scale-95"
          >
            <span>Lanjut</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
