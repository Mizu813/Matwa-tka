import React, { useState, useEffect, useRef } from 'react';
import {
  CurriculumChapter,
  Question,
  UserAnswerRecord,
  ViewDisplayMode,
} from '../types/quiz';
import {
  FileText,
  Printer,
  Sun,
  Moon,
  ZoomIn,
  ZoomOut,
  CheckCircle,
  Eye,
  EyeOff,
  Layers,
  Sparkles,
} from 'lucide-react';

interface PdfTopNavbarProps {
  curriculum: CurriculumChapter[];
  activeChapterId: string;
  activeSubChapterId: string;
  activeDifficultyTab: 'STANDAR' | 'HOTS';
  onSelectDifficultyTab: (tab: 'STANDAR' | 'HOTS') => void;
  standarCount: number;
  hotsCount: number;
  currentQuestionNumber: number;
  subChapterQuestions: Question[];
  onSelectChapter: (chapterId: string) => void;
  onSelectSubChapter: (subChapterId: string) => void;
  onSelectQuestionNumber: (questionNum: number) => void;
  userAnswers: Record<string, UserAnswerRecord>;
  displayMode: ViewDisplayMode;
  onToggleDisplayMode: () => void;
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  allExpanded: boolean;
  onToggleAllExpanded: () => void;
  onOpenEvaluation: () => void;
  totalAnswered: number;
}

export const PdfTopNavbar: React.FC<PdfTopNavbarProps> = ({
  curriculum,
  activeChapterId,
  activeSubChapterId,
  activeDifficultyTab,
  onSelectDifficultyTab,
  standarCount,
  hotsCount,
  currentQuestionNumber,
  subChapterQuestions,
  onSelectChapter,
  onSelectSubChapter,
  onSelectQuestionNumber,
  userAnswers,
  displayMode,
  onToggleDisplayMode,
  zoomLevel,
  onZoomIn,
  onZoomOut,
  isDarkMode,
  onToggleDarkMode,
  allExpanded,
  onToggleAllExpanded,
  onOpenEvaluation,
  totalAnswered,
}) => {
  // Sticky state for curriculum bar (Bab, Sub-Bab, Soal)
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [navHeight, setNavHeight] = useState<number>(0);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const handleScroll = () => {
      const toolbarHeight = toolbarRef.current?.offsetHeight || 56;
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      setIsSticky(currentScrollY >= toolbarHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Find current active chapter & sub-chapter
  const activeChapter =
    curriculum.find((c) => c.chapter_id === activeChapterId) || curriculum[0];
  const activeSubChapters = activeChapter ? activeChapter.sub_chapters : [];

  return (
    <div className="w-full max-w-full print:hidden">
      {/* 1. Main Reader Header Toolbar (Non-statis: mengalir alami dan tergulung saat di-scroll) */}
      <div
        ref={toolbarRef}
        className="w-full bg-white dark:bg-[#0B0F19] border-b border-slate-200 dark:border-slate-800 transition-colors"
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Branding & Tagline */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0 truncate">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight truncate">
                  Matwa-TKA
                  <span className="hidden sm:inline text-indigo-600 dark:text-indigo-400 font-semibold text-xs sm:text-sm">
                    {' '}| 8 Bab &amp; 24 Sub-Bab
                  </span>
                </span>
                <span className="hidden md:inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono flex-shrink-0">
                  KURIKULUM RESMI
                </span>
              </div>
            </div>
          </div>

          {/* Right: Reader Toolbar Controls */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Display Mode Toggle */}
            <button
              onClick={onToggleDisplayMode}
              className="flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              title={
                displayMode === 'continuous'
                  ? 'Beralih ke Mode Lembar Per Soal'
                  : 'Beralih ke Mode Dokumen Utuh Bersambung'
              }
            >
              {displayMode === 'continuous' ? (
                <>
                  <Layers className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-indigo-500" />
                  <span className="hidden md:inline">Mode Dokumen Utuh</span>
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-indigo-500" />
                  <span className="hidden md:inline">Mode Per Soal</span>
                </>
              )}
            </button>

            {/* Toggle All Hints & Solutions */}
            <button
              onClick={onToggleAllExpanded}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              title={allExpanded ? 'Tutup Seluruh Pembahasan' : 'Buka Seluruh Pembahasan'}
            >
              {allExpanded ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span className="hidden lg:inline">{allExpanded ? 'Tutup Solusi' : 'Buka Solusi'}</span>
            </button>

            {/* Font Scaling / Zoom */}
            <div className="hidden md:flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800 text-xs">
              <button
                onClick={onZoomOut}
                className="p-1.5 px-2 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                title="Perkecil Ukuran Teks (A-)"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 py-1 font-mono text-[11px] font-bold text-slate-600 dark:text-slate-300 select-none">
                {zoomLevel}%
              </span>
              <button
                onClick={onZoomIn}
                className="p-1.5 px-2 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                title="Perbesar Ukuran Teks (A+)"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Print / Save to PDF */}
            <button
              onClick={() => window.print()}
              className="hidden sm:flex p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Cetak atau Simpan sebagai PDF"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 sm:p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={isDarkMode ? 'Kertas Terang (White Paper)' : 'Kertas Gelap (Night Reading)'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Evaluation / Scoring Trigger */}
            <button
              onClick={onOpenEvaluation}
              className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-sm transition-all"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Rekap Nilai</span>
              <span className="font-mono text-[11px] bg-indigo-700 px-1.5 py-0.2 rounded ml-0.5">
                {totalAnswered}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Spacer saat isSticky aktif agar lembar soal di bawah tidak meloncat */}
      {isSticky && <div style={{ height: `${navHeight}px` }} className="w-full pointer-events-none" />}

      {/* 2. BILAH BAB, SUB-BAB, DAN SOAL (STATIS DI PALING ATAS SAAT SCROLL) */}
      <header
        ref={navRef}
        className={`w-full max-w-full bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-md transition-shadow ${
          isSticky
            ? 'fixed top-0 left-0 right-0 z-50 shadow-lg'
            : 'relative z-30'
        }`}
      >
        {/* 2.1 BARIS ATAS (BAB BESAR): Horizontal Scrollable Pills/Tabs */}
      <div className="bg-slate-50/90 dark:bg-[#0E1424]/90 border-b border-slate-200 dark:border-slate-800 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full flex items-center gap-2 py-1.5">
          <span className="hidden lg:inline-flex text-[11px] font-mono font-bold text-slate-500 uppercase flex-shrink-0">
            Bab:
          </span>
          <nav className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none w-full min-w-0">
            {curriculum.map((chap) => {
              const isSelected = chap.chapter_id === activeChapterId;
              return (
                <button
                  key={chap.chapter_id}
                  onClick={() => onSelectChapter(chap.chapter_id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 flex-shrink-0 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{chap.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 3. BARIS KEDUA (SUB-BAB): Chips / Buttons Sub-bab yang sedang Aktif */}
      <div className="bg-white/80 dark:bg-[#090D17]/80 border-b border-slate-200/80 dark:border-slate-800/80 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full flex items-center gap-2 py-1.5">
          <span className="hidden lg:inline-flex text-[11px] font-mono font-bold text-slate-500 uppercase flex-shrink-0">
            Sub-Bab:
          </span>
          <nav className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none w-full min-w-0">
            {activeSubChapters.map((sub) => {
              const isSelected = sub.sub_chapter_id === activeSubChapterId;
              return (
                <button
                  key={sub.sub_chapter_id}
                  onClick={() => onSelectSubChapter(sub.sub_chapter_id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-all flex items-center gap-1 border flex-shrink-0 ${
                    isSelected
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700 font-bold shadow-2xs'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{sub.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 4. BARIS KETIGA (NOMOR SOAL & BADGES) */}
      <div className="bg-slate-50/60 dark:bg-[#0C111E]/60 border-b border-slate-200/60 dark:border-slate-800/60 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-2 py-1.5">
          {/* Left: Question Number Indicators */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none min-w-0 flex-1">
            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase flex-shrink-0 mr-1">
              Soal:
            </span>
            {subChapterQuestions.length === 0 ? (
              <span className="text-xs text-slate-400 italic font-mono">
                Belum ada butir soal
              </span>
            ) : (
              subChapterQuestions.map((q, idx) => {
                const questionNum = idx + 1;
                const isSelected = questionNum === currentQuestionNumber;
                const answer = userAnswers[q.id];
                const isAnswered =
                  answer?.status === 'answered' ||
                  answer?.status === 'doubt' ||
                  !!answer?.selectedOption ||
                  (answer?.selectedOptions && answer.selectedOptions.length > 0) ||
                  (answer?.categoryAnswers && Object.keys(answer.categoryAnswers).length > 0);

                return (
                  <button
                    key={q.id}
                    onClick={() => onSelectQuestionNumber(questionNum)}
                    className={`min-w-6 h-6 px-1.5 rounded text-xs font-mono font-bold flex items-center justify-center transition-all relative flex-shrink-0 ${
                      isSelected
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm ring-2 ring-indigo-500'
                        : isAnswered
                        ? 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-slate-400'
                    }`}
                  >
                    {questionNum}
                    {isAnswered && !isSelected && (
                      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Right: Switch Button (Standar / HOTS) replacing previous static badges */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <div className="inline-flex p-0.5 rounded-lg bg-slate-200/90 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-2xs">
              <button
                type="button"
                onClick={() => onSelectDifficultyTab('STANDAR')}
                className={`px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeDifficultyTab === 'STANDAR'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-700/50'
                }`}
                title="Beralih ke Halaman Soal Standar"
              >
                <span>Standar</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold leading-tight ${
                    activeDifficultyTab === 'STANDAR'
                      ? 'bg-emerald-800/90 text-white'
                      : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {standarCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectDifficultyTab('HOTS')}
                className={`px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeDifficultyTab === 'HOTS'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-700/50'
                }`}
                title="Beralih ke Halaman Soal HOTS (Tingkat Tinggi)"
              >
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>HOTS</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold leading-tight ${
                    activeDifficultyTab === 'HOTS'
                      ? 'bg-rose-800/90 text-white'
                      : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {hotsCount}
                </span>
              </button>
            </div>

            {/* Quick Sticky Controls when top toolbar is scrolled out */}
            {isSticky && (
              <div className="flex items-center gap-1 pl-1 ml-1 border-l border-slate-200 dark:border-slate-700">
                <button
                  onClick={onToggleDarkMode}
                  className="p-1 rounded text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                  title={isDarkMode ? 'Mode Terang' : 'Mode Gelap'}
                >
                  {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
                </button>
                <button
                  onClick={onOpenEvaluation}
                  className="flex items-center gap-1 px-2 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold shadow-xs transition-all"
                  title="Buka Rekap Nilai"
                >
                  <CheckCircle className="w-3 h-3" />
                  <span className="hidden sm:inline">Nilai</span>
                  <span className="font-mono text-[10px] bg-indigo-700 px-1 rounded">
                    {totalAnswered}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  </div>
);
};
