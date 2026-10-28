import React from 'react';
import { ModuleCategory, PackageCategory } from '../types/quiz';
import {
  FileText,
  Printer,
  Sun,
  Moon,
  ZoomIn,
  ZoomOut,
  Maximize2,
  CheckCircle,
  Eye,
  EyeOff,
  BookOpen,
  Layers,
} from 'lucide-react';

export type ViewDisplayMode = 'continuous' | 'single';

interface PdfTopNavbarProps {
  selectedModule: ModuleCategory | 'Semua';
  onSelectModule: (moduleName: ModuleCategory | 'Semua') => void;
  selectedPackage: PackageCategory;
  onSelectPackage: (pkg: PackageCategory) => void;
  displayMode: ViewDisplayMode;
  onToggleDisplayMode: () => void;
  zoomLevel: number; // e.g. 100, 110, 125
  onZoomIn: () => void;
  onZoomOut: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  allExpanded: boolean;
  onToggleAllExpanded: () => void;
  onOpenEvaluation: () => void;
  totalAnswered: number;
  totalQuestions: number;
}

export const SUB_BAB_MODULES: { id: ModuleCategory | 'Semua'; label: string; range: string }[] = [
  { id: 'Semua', label: 'Semua Materi', range: '54 Soal' },
  { id: 'Aljabar & Bilangan', label: '1. Aljabar & Bilangan', range: '6 Soal' },
  { id: 'Pemodelan Linear & Sistem Persamaan', label: '2. Pemodelan Linear & SPL', range: '8 Soal' },
  { id: 'Barisan & Pemodelan Eksponensial', label: '3. Barisan & Eksponensial', range: '4 Soal' },
  { id: 'Geometri Bidang & Terapan', label: '4. Geometri Bidang', range: '9 Soal' },
  { id: 'Geometri Ruang (Dimensi Tiga)', label: '5. Dimensi Tiga', range: '9 Soal' },
  { id: 'Transformasi Geometri', label: '6. Transformasi Geometri', range: '2 Soal' },
  { id: 'Trigonometri', label: '7. Trigonometri', range: '3 Soal' },
  { id: 'Statistika & Peluang', label: '8. Statistika & Peluang', range: '10 Soal' },
  { id: 'Kecukupan Data (Data Sufficiency)', label: '9. Kecukupan Data', range: '3 Soal' },
];

export const PAKET_MODULES: { id: PackageCategory; label: string; count: string }[] = [
  { id: 'Semua', label: 'Semua Paket', count: '54' },
  { id: 'Paket 1', label: 'Paket 1', count: '25' },
  { id: 'Paket 2', label: 'Paket 2', count: '25' },
  { id: 'Paket 3', label: 'Paket 3', count: '4' },
];

export const PdfTopNavbar: React.FC<PdfTopNavbarProps> = ({
  selectedModule,
  onSelectModule,
  selectedPackage,
  onSelectPackage,
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
  totalQuestions,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full max-w-full bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors print:hidden overflow-hidden">
      {/* Baris 1: Main Reader Header & Document Controls */}
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-2 sm:gap-4 border-b border-slate-100 dark:border-slate-800/60">
        {/* Left: Branding & PDF Document Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div className="min-w-0 truncate">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight truncate">
                Matwa-TKA
                <span className="hidden sm:inline text-indigo-600 dark:text-indigo-400 font-semibold text-xs sm:text-sm"> | Bank Soal 2025</span>
              </span>
              <span className="hidden md:inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono flex-shrink-0">
                54 BUTIR SOAL
              </span>
            </div>
          </div>
        </div>

        {/* Right: Reader Toolbar */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* Display Mode: Continuous Document vs Single Question */}
          <button
            onClick={onToggleDisplayMode}
            className="flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            title={
              displayMode === 'continuous'
                ? 'Beralih ke Mode Lembar Per Soal'
                : 'Beralih ke Mode Dokumen Bersambung (Full PDF)'
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
              {totalAnswered}/{totalQuestions}
            </span>
          </button>
        </div>
      </div>

      {/* Baris 2: SUB-BAB DOMAIN MATERI & FILTER PAKET */}
      <div className="bg-slate-50/90 dark:bg-[#0E1424]/90 border-b border-slate-200 dark:border-slate-800 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full flex flex-col gap-1.5 py-2">
          {/* Baris 2A: 9 Domain Materi Tabs */}
          <div className="flex items-center justify-between gap-2">
            <span className="hidden md:inline-flex text-[11px] font-mono font-bold text-slate-500 uppercase flex-shrink-0">
              Domain Materi:
            </span>
            <nav className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none w-full min-w-0">
              {SUB_BAB_MODULES.map((tab) => {
                const isSelected = selectedModule === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onSelectModule(tab.id)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] font-mono font-normal px-1.5 py-0.5 rounded ${
                        isSelected
                          ? 'bg-indigo-700/80 text-white'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {tab.range}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Baris 2B: Filter Paket Soal */}
          <div className="flex items-center gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-800/60">
            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase flex-shrink-0">
              Filter Paket:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {PAKET_MODULES.map((pkg) => {
                const isSelected = selectedPackage === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => onSelectPackage(pkg.id)}
                    className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold font-mono transition-all flex items-center gap-1 ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>{pkg.label}</span>
                    <span className="text-[10px] opacity-80">({pkg.count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

