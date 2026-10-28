import React from 'react';
import { AppView, ModuleCategory, Question, UserAnswerRecord } from '../types/quiz';
import {
  LayoutDashboard,
  Target,
  BookOpen,
  Bookmark,
  Timer,
  ChevronLeft,
  ChevronRight,
  Search,
  CheckCircle2,
  Cpu,
  Workflow,
  TrendingUp,
  Box,
  Compass,
  BarChart3,
  Dice5,
  X,
  Sparkles,
} from 'lucide-react';

interface SidebarProps {
  currentView: AppView;
  onSelectView: (view: AppView) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  onOpenSearch: () => void;
  questions: Question[];
  userAnswers: Record<string, UserAnswerRecord>;
  bookmarkedIds: string[];
  onSelectTopic: (moduleName: ModuleCategory) => void;
  selectedModule?: ModuleCategory | 'Semua';
}

const moduleIconMap: Record<string, React.ReactNode> = {
  'Aljabar & Sistem Persamaan/Pertidaksamaan': <Cpu className="w-4 h-4" />,
  'Fungsi & Relasi': <Workflow className="w-4 h-4" />,
  'Barisan & Deret': <TrendingUp className="w-4 h-4" />,
  'Geometri & Pengukuran': <Box className="w-4 h-4" />,
  'Trigonometri': <Compass className="w-4 h-4" />,
  'Statistika & Analisis Data': <BarChart3 className="w-4 h-4" />,
  'Peluang & Kombinatorika': <Dice5 className="w-4 h-4" />,
};

const shortModuleNames: Record<string, string> = {
  'Aljabar & Sistem Persamaan/Pertidaksamaan': 'Aljabar & SPtLDV',
  'Fungsi & Relasi': 'Fungsi & Relasi',
  'Barisan & Deret': 'Barisan & Deret',
  'Geometri & Pengukuran': 'Geometri & Dimensi 3',
  'Trigonometri': 'Trigonometri',
  'Statistika & Analisis Data': 'Statistika & Data',
  'Peluang & Kombinatorika': 'Peluang & Kombinasi',
};

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onSelectView,
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile,
  onOpenSearch,
  questions,
  userAnswers,
  bookmarkedIds,
  onSelectTopic,
  selectedModule,
}) => {
  // Modules list from unique questions
  const modules: ModuleCategory[] = [
    'Aljabar & Sistem Persamaan/Pertidaksamaan',
    'Fungsi & Relasi',
    'Barisan & Deret',
    'Geometri & Pengukuran',
    'Trigonometri',
    'Statistika & Analisis Data',
    'Peluang & Kombinatorika',
  ];

  // Calculate per-module completion
  const moduleStats = modules.map((m) => {
    const qInMod = questions.filter((q) => q.module === m);
    const total = qInMod.length;
    const answered = qInMod.filter(
      (q) => userAnswers[q.id]?.status === 'answered' || userAnswers[q.id]?.status === 'doubt'
    ).length;
    const percentage = total > 0 ? Math.round((answered / total) * 100) : 0;
    return { module: m, total, answered, percentage };
  });

  const totalAnswered = Object.values(userAnswers).filter(
    (a) => a.status === 'answered' || a.status === 'doubt'
  ).length;

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen transition-all duration-200 ease-out border-r flex flex-col justify-between
          bg-[#0B0F19] text-slate-100 border-[#1F2937]
          dark:bg-[#0B0F19] dark:border-[#1F2937]
          light:bg-[#F8FAFC] light:text-slate-900 light:border-[#E2E8F0]
          ${isCollapsed ? 'w-20' : 'w-72'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Top Header / Branding */}
        <div>
          <div className="h-16 flex items-center justify-between px-4 border-b border-[#1F2937] dark:border-[#1F2937]">
            <div
              onClick={() => {
                onSelectView('dashboard');
                onCloseMobile();
              }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                M
              </div>
              {!isCollapsed && (
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-base tracking-tight text-white">Matwa-TKA</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30">
                      v2.0
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">Platform Latihan Mandiri</p>
                </div>
              )}
            </div>

            {/* Mobile close button */}
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Desktop collapse toggle */}
            <button
              onClick={onToggleCollapse}
              title={isCollapsed ? 'Perluas Sidebar' : 'Ciutkan Sidebar'}
              className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#151D2F] transition-colors"
            >
              {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
          </div>

          {/* Quick Search trigger button */}
          <div className="p-3">
            <button
              onClick={onOpenSearch}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium border border-[#1F2937] bg-[#111827] text-slate-300 hover:border-indigo-500 hover:text-white transition-all group ${
                isCollapsed ? 'justify-center' : 'justify-between'
              }`}
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                {!isCollapsed && <span>Cari soal / rumus...</span>}
              </div>
              {!isCollapsed && (
                <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-[#1F2937] text-slate-400 border border-slate-700">
                  Ctrl+K
                </kbd>
              )}
            </button>
          </div>

          {/* Main Navigation Views */}
          <div className="px-3 space-y-1">
            <button
              onClick={() => {
                onSelectView('dashboard');
                onCloseMobile();
              }}
              title="Dashboard Utama"
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                currentView === 'dashboard'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-[#151D2F]'
              } ${isCollapsed ? 'justify-center' : ''}`}
            >
              <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
              {!isCollapsed && <span>Dashboard &amp; Statistik</span>}
            </button>

            <button
              onClick={() => {
                onSelectView('drill');
                onCloseMobile();
              }}
              title="Latihan Mandiri (Drill Soal)"
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                currentView === 'drill'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-[#151D2F]'
              } ${isCollapsed ? 'justify-center' : ''}`}
            >
              <Target className="w-4 h-4 flex-shrink-0" />
              {!isCollapsed && (
                <div className="flex-1 flex items-center justify-between">
                  <span>Latihan Mandiri</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300">
                    {totalAnswered}/{questions.length}
                  </span>
                </div>
              )}
            </button>

            <button
              onClick={() => {
                onSelectView('concepts');
                onCloseMobile();
              }}
              title="Modul Teorema & Rumus"
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                currentView === 'concepts'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-[#151D2F]'
              } ${isCollapsed ? 'justify-center' : ''}`}
            >
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              {!isCollapsed && <span>Teorema &amp; Rumus Inti</span>}
            </button>

            <button
              onClick={() => {
                onSelectView('bookmarks');
                onCloseMobile();
              }}
              title="Soal Ditandai"
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                currentView === 'bookmarks'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-[#151D2F]'
              } ${isCollapsed ? 'justify-center' : ''}`}
            >
              <Bookmark className="w-4 h-4 flex-shrink-0" />
              {!isCollapsed && (
                <div className="flex-1 flex items-center justify-between">
                  <span>Soal Ditandai</span>
                  {bookmarkedIds.length > 0 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold">
                      {bookmarkedIds.length}
                    </span>
                  )}
                </div>
              )}
            </button>

            <button
              onClick={() => {
                onSelectView('exam');
                onCloseMobile();
              }}
              title="Simulasi Ujian Waktu Nyata"
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                currentView === 'exam'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-[#151D2F]'
              } ${isCollapsed ? 'justify-center' : ''}`}
            >
              <Timer className="w-4 h-4 flex-shrink-0" />
              {!isCollapsed && <span>Simulasi Ujian (90m)</span>}
            </button>
          </div>

          {/* Topic Syllabus Breakdown */}
          {!isCollapsed && (
            <div className="mt-5 px-3">
              <div className="flex items-center justify-between px-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Silabus Materi
                </span>
                <span className="text-[10px] text-slate-400">
                  {Math.round((totalAnswered / questions.length) * 100)}% Selesai
                </span>
              </div>

              <div className="space-y-1 max-h-[calc(100vh-420px)] overflow-y-auto pr-1">
                {moduleStats.map((item) => {
                  const isSelected = selectedModule === item.module && currentView === 'drill';
                  const isDone = item.answered === item.total && item.total > 0;

                  return (
                    <button
                      key={item.module}
                      onClick={() => {
                        onSelectTopic(item.module);
                        onSelectView('drill');
                        onCloseMobile();
                      }}
                      className={`w-full text-left p-2 rounded-xl transition-all border ${
                        isSelected
                          ? 'border-indigo-500/50 bg-indigo-950/30 text-white'
                          : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#111827]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1.5 text-xs font-medium">
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className={
                              isDone ? 'text-emerald-400' : isSelected ? 'text-indigo-400' : 'text-slate-500'
                            }
                          >
                            {moduleIconMap[item.module]}
                          </span>
                          <span className="truncate">{shortModuleNames[item.module] || item.module}</span>
                        </div>
                        {isDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        ) : (
                          <span className="text-[10px] font-mono text-slate-400 flex-shrink-0">
                            {item.answered}/{item.total}
                          </span>
                        )}
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-[#1F2937] rounded-full h-1 mt-1.5 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            isDone ? 'bg-emerald-500' : 'bg-indigo-500'
                          }`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Bottom User Progress Banner */}
        <div className="p-3 border-t border-[#1F2937]">
          {!isCollapsed ? (
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#111827] to-[#151D2F] border border-[#1F2937]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Target Penguasaan
                </span>
                <span className="text-xs font-mono font-bold text-indigo-400">
                  {totalAnswered}/{questions.length}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {totalAnswered === questions.length
                  ? '🎉 Selamat! Seluruh 28 soal telah dijawab.'
                  : `Kurang ${questions.length - totalAnswered} soal lagi untuk menyelesaikan bank soal.`}
              </p>
            </div>
          ) : (
            <div className="flex justify-center text-xs font-mono font-bold text-indigo-400">
              {totalAnswered}/{questions.length}
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
