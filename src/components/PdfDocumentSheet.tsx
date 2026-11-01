import React from 'react';
import { Question, UserAnswerRecord, ViewDisplayMode } from '../types/quiz';
import { PdfQuestionCard } from './PdfQuestionCard';
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface PdfDocumentSheetProps {
  questions: Question[];
  activeChapterTitle: string;
  activeSubChapterTitle: string;
  userAnswers: Record<string, UserAnswerRecord>;
  onSelectOption: (questionId: string, optionId: string) => void;
  onToggleMcmaOption: (questionId: string, optionId: string) => void;
  onSelectCategoryAnswer: (questionId: string, statementId: string, value: string | boolean) => void;
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
  activeChapterTitle,
  activeSubChapterTitle,
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
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex] || questions[0];

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-6 flex flex-col items-center">
      {/* Lembar Sampul / Kop Dokumen Ujian Cetak Resmi */}
      <div className="w-full p-5 sm:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm transition-all text-center space-y-3 relative overflow-hidden print:border-none print:shadow-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700">
          <Award className="w-3.5 h-3.5 text-indigo-500" />
          Kurikulum Standar TKA Matematika SMA
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
          TKA MATEMATIKA WAJIB (HOTS &amp; TEKNIKAL)
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Platform asesmen mandiri interaktif 8 Bab Besar &amp; 22 Sub-bab resmi, dilengkapi visualisasi diagram teknis, rendering rumus KaTeX presisi, dan pembahasan langkah demi langkah.
        </p>

        {/* Double Border Line khas dokumen resmi */}
        <div className="pt-3 border-t-2 border-b border-slate-900 dark:border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-400 py-1.5 px-2">
          <span>BAB: <strong className="text-slate-900 dark:text-white">{activeChapterTitle.toUpperCase()}</strong></span>
          <span>SUB-BAB: <strong className="text-indigo-600 dark:text-indigo-400">{activeSubChapterTitle.toUpperCase()}</strong></span>
          <span>JUMLAH: <strong className="text-slate-900 dark:text-white">{totalQuestions} BUTIR SOAL</strong></span>
        </div>
      </div>

      {/* Jika Belum Ada Soal di Sub-Bab Ini */}
      {totalQuestions === 0 ? (
        <div className="w-full p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#111827] border border-dashed border-slate-300 dark:border-slate-800 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Belum Ada Soal pada Sub-Bab Ini
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Bank soal untuk sub-bab <span className="font-semibold text-indigo-600 dark:text-indigo-400">"{activeSubChapterTitle}"</span> sedang dalam tahap penyusunan. Silakan pilih sub-bab lainnya melalui bilah navigasi di atas.
          </p>
        </div>
      ) : displayMode === 'continuous' ? (
        /* Mode Dokumen Bersambung (Full Continuous View) */
        <div className="w-full space-y-6 flex flex-col items-center">
          {questions.map((q, idx) => (
            <PdfQuestionCard
              key={q.id}
              question={q}
              questionNumber={idx + 1}
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
        <div className="w-full space-y-6 flex flex-col items-center">
          {currentQuestion && (
            <PdfQuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              questionNumber={currentIndex + 1}
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
          <div className="w-full p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3 print:hidden">
            <button
              onClick={() => onSelectIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400'
                  : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-400">
              Soal {currentIndex + 1} dari {totalQuestions}
            </span>

            <button
              onClick={() => onSelectIndex(Math.min(totalQuestions - 1, currentIndex + 1))}
              disabled={currentIndex === totalQuestions - 1}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                currentIndex === totalQuestions - 1
                  ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400'
                  : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <span>Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
