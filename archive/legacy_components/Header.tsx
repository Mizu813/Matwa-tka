import React, { useState, useEffect } from 'react';
import { TimerMode } from '../types/quiz';
import {
  Menu,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Search,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  CheckCircle,
  BookOpen,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  isExamMode: boolean;
  onToggleMode: () => void;
  timerSeconds: number; // For exam mode (90 mins countdown)
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenFormulaModal: () => void;
  onFinishExam: () => void;
  totalAnswered: number;
  totalQuestions: number;
  isZenMode: boolean;
  onToggleZenMode: () => void;
  onOpenMobileSidebar: () => void;
  onOpenSearch: () => void;
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
  isZenMode,
  onToggleZenMode,
  onOpenMobileSidebar,
  onOpenSearch,
}) => {
  // Local Stopwatch / Pomodoro timer for Drilling mode
  const [drillTimerSecs, setDrillTimerSecs] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [timerMode, setTimerMode] = useState<TimerMode>('stopwatch'); // 'stopwatch' | 'pomodoro'
  const [pomodoroLeft, setPomodoroLeft] = useState<number>(25 * 60);

  // Interval for drill timer
  useEffect(() => {
    if (isExamMode || !isTimerRunning) return;

    const interval = setInterval(() => {
      if (timerMode === 'stopwatch') {
        setDrillTimerSecs((prev) => prev + 1);
      } else {
        setPomodoroLeft((prev) => (prev > 0 ? prev - 1 : 25 * 60));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamMode, isTimerRunning, timerMode]);

  const handleResetTimer = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (timerMode === 'stopwatch') {
      setDrillTimerSecs(0);
    } else {
      setPomodoroLeft(25 * 60);
    }
  };

  // Format MM:SS
  const formatTime = (totalSecs: number) => {
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const isExamTimeLow = timerSeconds < 300;

  return (
    <header className="sticky top-0 z-30 bg-[#0B0F19]/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#1F2937] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left: Mobile Sidebar Menu & App Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#151D2F] transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-indigo-600/30">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
                  Matwa-<span className="text-indigo-400">TKA</span>
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                  HOTS &amp; SVG
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Search button & Timer Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search trigger */}
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border border-[#1F2937] bg-[#111827] text-slate-400 hover:text-white hover:border-indigo-500 transition-all"
          >
            <Search className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden md:inline">Cari Soal</span>
            <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-[#1F2937] text-slate-400 border border-slate-700">
              Ctrl+K
            </kbd>
          </button>

          {/* Interactive Timer (Exam Mode vs Drill Timer) */}
          {isExamMode ? (
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-bold border transition-all ${
                isExamTimeLow
                  ? 'bg-rose-950/60 text-rose-400 border-rose-500/50 animate-pulse'
                  : 'bg-[#111827] text-white border-slate-700'
              }`}
            >
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>{formatTime(timerSeconds)}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#1F2937] bg-[#111827] text-xs font-mono font-bold text-slate-200">
              <button
                onClick={() =>
                  setTimerMode((prev) => (prev === 'stopwatch' ? 'pomodoro' : 'stopwatch'))
                }
                title="Beralih Stopwatch / Pomodoro 25 Menit"
                className="text-[10px] px-1.5 py-0.5 rounded bg-[#1F2937] text-indigo-400 font-sans hover:bg-slate-700 transition-colors uppercase"
              >
                {timerMode === 'stopwatch' ? 'SW' : 'POMO'}
              </button>

              <span className="text-white min-w-[42px] text-center">
                {timerMode === 'stopwatch' ? formatTime(drillTimerSecs) : formatTime(pomodoroLeft)}
              </span>

              <button
                onClick={() => setIsTimerRunning((prev) => !prev)}
                title={isTimerRunning ? 'Jeda Timer' : 'Mulai Timer'}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              </button>

              <button
                onClick={handleResetTimer}
                title="Reset Waktu"
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Distraction-Free "Zen / Focus Mode" Toggle */}
          <button
            onClick={onToggleZenMode}
            title={isZenMode ? 'Keluar Mode Fokus' : 'Masuk Mode Fokus (Zen Mode)'}
            className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${
              isZenMode
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                : 'border-[#1F2937] bg-[#111827] text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {isZenMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span className="hidden lg:inline">{isZenMode ? 'Keluar Zen' : 'Mode Fokus'}</span>
          </button>

          {/* Formula Cheatsheet Modal trigger */}
          <button
            onClick={onOpenFormulaModal}
            title="Buka Lembar Rumus Cepat"
            className="hidden md:flex p-2 rounded-xl border border-[#1F2937] bg-[#111827] text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
          </button>

          {/* Dual Theme Toggle */}
          <button
            onClick={onToggleDarkMode}
            title={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
            className="p-2 rounded-xl border border-[#1F2937] bg-[#111827] text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>

          {/* Finish & Evaluate Button */}
          <button
            onClick={onFinishExam}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95"
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
