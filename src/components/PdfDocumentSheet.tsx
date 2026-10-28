import React from 'react';
import { Question, UserAnswerRecord, ModuleCategory } from '../types/quiz';
import { PdfQuestionCard } from './PdfQuestionCard';
import { ViewDisplayMode } from './PdfTopNavbar';
import {
  ChevronLeft,
  ChevronRight,
  Printer,
  Info,
  Award,
  Sparkles,
} from 'lucide-react';

interface PdfDocumentSheetProps {
  questions: Question[];
  selectedModule: ModuleCategory | 'Semua';
  userAnswers: Record<string, UserAnswerRecord>;
  onSelectOption: (questionId: string, optionId: string) => void;
  onToggleMcmaOption: (questionId: string, optionId: string) => void;
  onSelectCategoryAnswer: (questionId: string, statementId: string, value: boolean) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (questionId: string) => void;
  displayMode: ViewDisplayMode;
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  globalExpandState: boolean;
  zoomLevel: number;
}

export const PdfDocumentSheet: React.FC<PdfDocumentSheetProps> = ({
  questions,
  selectedModule,
  userAnswers,
  onSelectOption,
  onToggleMcmaOption,
  onSelectCategoryAnswer,
  bookmarkedIds,
  onToggleBookmark,
  displayMode,
  currentIndex,
  onSelectIndex,
  globalExpandState,
  zoomLevel,
}) => {
  const currentQuestion = questions[currentIndex] || questions[0];
  const totalQuestions = questions.length;

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-8 space-y-6">
      {/* Lembar Sampul / Kop Dokumen Ujian Cetak Resmi */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm transition-all text-center space-y-3 relative overflow-hidden print:border-none print:shadow-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700">
          <Award className="w-3.5 h-3.5 text-indigo-500" />
          Naskah Soal Latihan &amp; Asesmen Mandiri
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
          TKA MATEMATIKA WAJIB (HOTS &amp; TEKNIKAL)
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Dokumen asesmen terstandarisasi dengan visualisasi diagram teknis SVG presisi, rendering rumus KaTeX terintegrasi, serta tab bantuan konsep dan pembahasan langkah demi langkah.
        </p>

        {/* Double Border Line khas dokumen resmi */}
        <div className="pt-3 border-t-2 border-b border-slate-900 dark:border-slate-100 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400 py-1.5 px-2">
          <span>SUB-BAB: <strong className="text-slate-900 dark:text-white">{selectedModule.toUpperCase()}</strong></span>
          <span>TOTAL: <strong className="text-slate-900 dark:text-white">{totalQuestions} BUTIR SOAL</strong></span>
          <span className="hidden sm:inline">FORMAT: <strong className="text-slate-900 dark:text-white">A4 / PDF READY</strong></span>
        </div>
      </div>

      {/* Render Questions List */}
      {displayMode === 'continuous' ? (
        /* Mode Dokumen Bersambung (Full PDF View) */
        <div className="space-y-6">
          {questions.map((q) => (
            <PdfQuestionCard
              key={q.id}
              question={q}
              userAnswer={userAnswers[q.id]}
              onSelectOption={onSelectOption}
              onToggleMcmaOption={onToggleMcmaOption}
              onSelectCategoryAnswer={onSelectCategoryAnswer}
              isBookmarked={bookmarkedIds.includes(q.id)}
              onToggleBookmark={onToggleBookmark}
              globalExpandState={globalExpandState}
              zoomLevel={zoomLevel}
            />
          ))}
        </div>
      ) : (
        /* Mode Lembar Tunggal Per-Soal (Single-Question View) */
        <div className="space-y-6">
          {currentQuestion && (
            <PdfQuestionCard
              question={currentQuestion}
              userAnswer={userAnswers[currentQuestion.id]}
              onSelectOption={onSelectOption}
              onToggleMcmaOption={onToggleMcmaOption}
              onSelectCategoryAnswer={onSelectCategoryAnswer}
              isBookmarked={bookmarkedIds.includes(currentQuestion.id)}
              onToggleBookmark={onToggleBookmark}
              globalExpandState={globalExpandState}
              zoomLevel={zoomLevel}
            />
          )}

          {/* Pagination Navigation Bar ala PDF Reader */}
          <div className="p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3 print:hidden">
            <button
              onClick={() => onSelectIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400'
                  : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {/* Quick Page Indicator */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                Halaman {currentIndex + 1} dari {totalQuestions}
              </span>
            </div>

            <button
              onClick={() => onSelectIndex(Math.min(totalQuestions - 1, currentIndex + 1))}
              disabled={currentIndex === totalQuestions - 1}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                currentIndex === totalQuestions - 1
                  ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400'
                  : 'border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm'
              }`}
            >
              <span>Berikutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Dokumen Footer Catatan Akademik */}
      <footer className="text-center py-6 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/60 print:block">
        <p className="font-mono">
          © SIM-TKA Matematika Wajib | Asesmen HOTS &amp; SVG Teknis
        </p>
        <p className="text-[11px] mt-1 text-slate-400">
          Dokumen ini disusun untuk melatih pemahaman konseptual dan penalaran aljabar tingkat lanjut.
        </p>
      </footer>
    </div>
  );
};
