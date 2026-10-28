import React from 'react';
import {
  GraduationCap,
  Clock,
  BookOpen,
  Sun,
  Moon,
  CheckCircle,
  HelpCircle,
  Flame,
} from 'lucide-react';

interface HeaderProps {
  isExamMode: boolean;
  onToggleMode: () => void;
  timerSeconds: number;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenFormulaModal: () => void;
  onFinishExam: () => void;
  totalAnswered: number;
  totalQuestions: number;
}

export const Header: React.FC<HeaderProps> = ({
  isExamMode,
  onToggleMode,
  timerSeconds,
  isDarkMode,
  onToggleDarkMode,
  onOpenFormulaModal,
  onFinishExam,
  totalAnswered,
  totalQuestions,
}) => {
  // Format seconds to MM:SS
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isTimeRunningLow = timerSeconds < 300; // less than 5 mins

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-teal-500/20 flex-shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white">
                SIM-TKA <span className="text-teal-600 dark:text-teal-400">Matematika</span>
              </h1>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                Pusmendik TKA
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden xs:block">
              Asesmen Berbasis Blueprint HOTS &amp; SVG Teknis
            </p>
          </div>
        </div>

        {/* Mode & Timer Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mode Switcher Toggle */}
          <button
            onClick={onToggleMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              isExamMode
                ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                : 'bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-800'
            }`}
            title="Beralih antara Mode Latihan dan Simulasi Ujian"
          >
            {isExamMode ? (
              <>
                <Flame className="w-4 h-4 text-amber-500" />
                <span className="hidden sm:inline">Simulasi Ujian</span>
                <span className="sm:hidden">Ujian</span>
              </>
            ) : (
              <>
                <BookOpen className="w-4 h-4 text-teal-500" />
                <span className="hidden sm:inline">Mode Latihan</span>
                <span className="sm:hidden">Latihan</span>
              </>
            )}
          </button>

          {/* Timer Display in Exam Mode */}
          {isExamMode && (
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-bold border transition-all ${
                isTimeRunningLow
                  ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-800 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{formattedTime}</span>
            </div>
          )}

          {/* Formula Cheatsheet Button */}
          <button
            onClick={onOpenFormulaModal}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Buka Referensi Rumus Cepat"
          >
            <HelpCircle className="w-4 h-4 text-teal-500" />
            <span className="hidden md:inline">Rumus Cepat</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={isDarkMode ? 'Beralih ke Terang' : 'Beralih ke Gelap'}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Finish Exam Button */}
          <button
            onClick={onFinishExam}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm shadow-teal-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <CheckCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Selesai &amp; Rekap</span>
            <span className="sm:hidden">Selesai</span>
          </button>
        </div>
      </div>
    </header>
  );
};
