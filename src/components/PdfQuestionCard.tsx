import React, { useState, useEffect, useMemo } from 'react';
import { Question, UserAnswerRecord, QuestionOptionItem } from '../types/quiz';
import { MathView } from './MathView';
import { QuestionVisual } from './svg/VisualSVGs';
import {
  Lightbulb,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Bookmark,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Check,
  CheckSquare,
  Square,
  Sparkles,
} from 'lucide-react';

interface PdfQuestionCardProps {
  question: Question;
  questionNumber: number;
  userAnswer?: UserAnswerRecord;
  onSelectOption: (questionId: string, optionId: string) => void;
  onToggleMcmaOption: (questionId: string, optionId: string) => void;
  onSelectCategoryAnswer: (questionId: string, statementId: string, value: string | boolean) => void;
  isBookmarked: boolean;
  onToggleBookmark: (questionId: string) => void;
  globalExpandState?: boolean;
  zoomLevel?: number;
}

export const STANDARD_DATA_SUFFICIENCY_OPTIONS: QuestionOptionItem[] = [
  {
    id: 'A',
    label: 'A',
    text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi Pernyataan (2) SAJA tidak cukup.',
  },
  {
    id: 'B',
    label: 'B',
    text: 'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi Pernyataan (1) SAJA tidak cukup.',
  },
  {
    id: 'C',
    label: 'C',
    text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.',
  },
  {
    id: 'D',
    label: 'D',
    text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan Pernyataan (2) SAJA cukup.',
  },
  {
    id: 'E',
    label: 'E',
    text: 'Pernyataan (1) dan Pernyataan (2) tidak cukup untuk menjawab pertanyaan.',
  },
];

export const PdfQuestionCard: React.FC<PdfQuestionCardProps> = ({
  question,
  questionNumber,
  userAnswer,
  onSelectOption,
  onToggleMcmaOption,
  onSelectCategoryAnswer,
  isBookmarked,
  onToggleBookmark,
  globalExpandState = false,
  zoomLevel = 100,
}) => {
  const [isHintOpen, setIsHintOpen] = useState<boolean>(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsSolutionOpen(globalExpandState);
  }, [globalExpandState]);

  // Normalize question type
  const qType = question.question_type || question.type || 'PG';
  const isPG = qType === 'PG' || qType === 'pg_single';
  const isMCMA = qType === 'MCMA' || qType === 'pgk_mcma';
  const isKategori = qType === 'KATEGORI' || qType === 'pgk_kategori';
  const isKecukupanData = qType === 'KECUKUPAN_DATA';

  // Options for PG / Kecukupan Data / MCMA
  const activeOptions = useMemo(() => {
    if (isKecukupanData) {
      if (!question.options || question.options.length === 0) {
        return STANDARD_DATA_SUFFICIENCY_OPTIONS;
      }
      return question.options;
    }
    return question.options || [];
  }, [isKecukupanData, question.options]);

  // Statements for KATEGORI
  const categoryStatements = useMemo(() => {
    if (question.categoryStatements && question.categoryStatements.length > 0) {
      return question.categoryStatements.map((s) => ({
        id: s.id,
        label: s.label || s.id,
        text: s.statement || s.text || '',
      }));
    }
    if (question.options && question.options.length > 0) {
      return question.options.map((o) => ({
        id: o.id,
        label: o.label || o.id,
        text: o.text,
      }));
    }
    return [];
  }, [question.categoryStatements, question.options]);

  // Answer status calculation
  const isAnswered = useMemo(() => {
    if (!userAnswer) return false;
    if (userAnswer.status === 'answered' || userAnswer.status === 'doubt') return true;
    if (userAnswer.selectedOption) return true;
    if (userAnswer.selectedOptions && userAnswer.selectedOptions.length > 0) return true;
    if (userAnswer.categoryAnswers && Object.keys(userAnswer.categoryAnswers).length > 0) return true;
    return false;
  }, [userAnswer]);

  // Correctness evaluation
  const isUserCorrect = useMemo(() => {
    if (!userAnswer) return false;
    if (isPG || isKecukupanData) {
      return userAnswer.selectedOption === question.correct_answer;
    }
    if (isMCMA) {
      const correctArr = Array.isArray(question.correct_answer)
        ? question.correct_answer
        : [question.correct_answer as string];
      const userArr = userAnswer.selectedOptions || [];
      return (
        correctArr.length === userArr.length &&
        correctArr.every((item) => userArr.includes(item)) &&
        userArr.every((item) => correctArr.includes(item))
      );
    }
    if (isKategori) {
      const correctObj = (question.correct_answer || {}) as Record<string, string | boolean>;
      const userObj = userAnswer.categoryAnswers || {};
      const keys = Object.keys(correctObj);
      if (keys.length === 0) return false;
      return keys.every((k) => {
        const uVal = String(userObj[k] ?? '').toLowerCase();
        const cVal = String(correctObj[k] ?? '').toLowerCase();
        // Normalize true/false or benar/salah
        const normalize = (v: string) => (v === 'true' || v === 'benar' ? 'b' : v === 'false' || v === 'salah' ? 's' : v);
        return normalize(uVal) === normalize(cVal);
      });
    }
    return false;
  }, [userAnswer, isPG, isKecukupanData, isMCMA, isKategori, question.correct_answer]);

  // Zoom class
  const zoomClass =
    zoomLevel === 90
      ? 'text-xs'
      : zoomLevel === 110
      ? 'text-base'
      : zoomLevel === 120
      ? 'text-lg'
      : 'text-sm sm:text-base';

  const difficulty = question.difficulty || (question.cognitiveLevel === 'Penalaran (HOTS)' ? 'HOTS' : 'STANDAR');
  const typeLabel =
    qType === 'PG'
      ? 'Pilihan Ganda (PG)'
      : qType === 'MCMA'
      ? 'Pilihan Ganda Kompleks (MCMA)'
      : qType === 'KATEGORI'
      ? 'Benar / Salah (Kategori)'
      : 'Kecukupan Data (DS)';

  return (
    <article
      id={`soal-${questionNumber}`}
      className="w-full p-4 sm:p-7 md:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm transition-all relative overflow-hidden"
    >
      {/* 1. Header Nomor Soal & Metadata Akademik */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          {/* Nomor Soal Cetak */}
          <span className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-mono font-black text-sm flex items-center justify-center shadow-sm">
            {questionNumber < 10 ? `0${questionNumber}` : questionNumber}
          </span>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                {question.title || `Soal Nomor ${questionNumber}`}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {/* Type Badge */}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 font-mono bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">
                {typeLabel}
              </span>
              <span>•</span>
              {/* Difficulty Badge */}
              <span
                className={`font-bold px-2 py-0.5 rounded text-[11px] font-mono border ${
                  difficulty === 'HOTS'
                    ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800'
                    : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                }`}
              >
                {difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Action: Bookmark & Status */}
        <div className="flex items-center gap-2">
          {isAnswered && (
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-bold border flex items-center gap-1 ${
                isSolutionOpen
                  ? isUserCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                    : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800'
                  : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
              }`}
            >
              <Check className="w-3 h-3" />
              {isSolutionOpen ? (isUserCorrect ? 'Jawaban Benar' : 'Jawaban Salah') : 'Terjawab'}
            </span>
          )}

          <button
            onClick={() => onToggleBookmark(question.id)}
            title={isBookmarked ? 'Hapus dari Soal Ditandai' : 'Tandai Soal Ini'}
            className={`p-1.5 rounded-lg border transition-colors ${
              isBookmarked
                ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-amber-500'
                : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* 2. Narasi Soal & MathView (LaTeX, Markdown Table, Inline SVG) */}
      <div className={`text-slate-800 dark:text-slate-200 leading-relaxed font-sans ${zoomClass}`}>
        <MathView content={question.question_text || question.scenario || ''} />
      </div>

      {/* Legacy/Optional Question Prompt */}
      {question.questionPrompt && (
        <div className="my-4 p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/20 border-l-4 border-indigo-500 text-slate-900 dark:text-slate-100">
          <MathView content={question.questionPrompt} className={`font-semibold ${zoomClass}`} />
        </div>
      )}

      {/* Legacy SVG if present */}
      {question.svgComponentId && (
        <div className="my-5 p-3 rounded-xl bg-slate-50 dark:bg-[#080C14] border border-slate-200 dark:border-slate-800/80 flex flex-col items-center justify-center">
          <QuestionVisual svgId={question.svgComponentId} mode="question" />
          <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 mt-2 text-center">
            Gambar {questionNumber}: Representasi Teknis Pemodelan Matematis
          </span>
        </div>
      )}

      {/* 3. INTERAKSI OPSI JAWABAN */}

      {/* 3A. Pilihan Ganda (PG) & Kecukupan Data (Radio A-E) */}
      {(isPG || isKecukupanData) && activeOptions.length > 0 && (
        <div className="my-5 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-mono">
            {isKecukupanData ? 'Pilihan Kecukupan Data (Pilih Satu):' : 'Pilihan Jawaban (Pilih Satu):'}
          </span>
          <div className="grid grid-cols-1 gap-2">
            {activeOptions.map((opt) => {
              const optId = opt.id || opt.label || 'A';
              const isSelected = userAnswer?.selectedOption === optId;
              const isSolutionVisible = isSolutionOpen;
              const isKey = optId === question.correct_answer;

              let itemStyle =
                'border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800';
              let badgeStyle =
                'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300';

              if (isSelected) {
                itemStyle =
                  'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-100 ring-1 ring-indigo-500';
                badgeStyle = 'bg-indigo-600 text-white border-indigo-600 font-bold';
              }

              if (isSolutionVisible) {
                if (isKey) {
                  itemStyle =
                    'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 ring-1 ring-emerald-500';
                  badgeStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                } else if (isSelected && !isKey) {
                  itemStyle =
                    'border-rose-400 bg-rose-50/80 dark:bg-rose-950/30 text-rose-900 dark:text-rose-100';
                  badgeStyle = 'bg-rose-600 text-white border-rose-600 font-bold';
                }
              }

              return (
                <button
                  key={optId}
                  onClick={() => onSelectOption(question.id, optId)}
                  className={`w-full flex items-center text-left p-3 rounded-xl border transition-all ${itemStyle}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center border text-xs font-mono font-bold flex-shrink-0 ${badgeStyle}`}
                  >
                    {opt.label || optId}
                  </div>
                  <div className="ml-3 flex-1">
                    <MathView content={opt.text} className={zoomClass} />
                  </div>
                  {isSolutionVisible && isKey && (
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 rounded-full flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Kunci
                    </span>
                  )}
                  {isSolutionVisible && isSelected && !isKey && (
                    <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1 bg-rose-100 dark:bg-rose-900/40 px-2 py-0.5 rounded-full flex-shrink-0">
                      <XCircle className="w-3.5 h-3.5" /> Pilihan Anda
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3B. Pilihan Ganda Kompleks MCMA (Checkbox Multi-pilihan) */}
      {isMCMA && activeOptions.length > 0 && (
        <div className="my-5 space-y-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
              Pilihan Ganda Kompleks (Centang Semua Opsi yang Benar):
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {activeOptions.map((opt) => {
              const optId = opt.id || opt.label || 'A';
              const selectedList = userAnswer?.selectedOptions || [];
              const isChecked = selectedList.includes(optId);

              const correctList = Array.isArray(question.correct_answer)
                ? question.correct_answer
                : [question.correct_answer as string];
              const isKey = correctList.includes(optId);

              let itemStyle =
                'border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800';

              if (isChecked) {
                itemStyle = 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/30';
              }

              if (isSolutionOpen) {
                if (isKey) {
                  itemStyle =
                    'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 ring-1 ring-emerald-500';
                } else if (isChecked && !isKey) {
                  itemStyle =
                    'border-rose-400 bg-rose-50/80 dark:bg-rose-950/30 text-rose-900 dark:text-rose-100';
                }
              }

              return (
                <button
                  key={optId}
                  onClick={() => onToggleMcmaOption(question.id, optId)}
                  className={`w-full flex items-start text-left p-3 rounded-xl border transition-all ${itemStyle}`}
                >
                  <div className="mt-0.5 mr-3 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 fill-indigo-600 text-white" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400 dark:text-slate-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 block mb-0.5">
                      Pilihan {opt.label || optId}
                    </span>
                    <MathView content={opt.text} className={zoomClass} />
                  </div>
                  {isSolutionOpen && isKey && (
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Kunci
                    </span>
                  )}
                  {isSolutionOpen && isChecked && !isKey && (
                    <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1 bg-rose-100 dark:bg-rose-900/40 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">
                      <XCircle className="w-3.5 h-3.5" /> Salah
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3C. Tabel Kategori 3 Kolom (Pernyataan, Benar, Salah) */}
      {isKategori && categoryStatements.length > 0 && (
        <div className="my-5 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-mono">
            Tabel Evaluasi Kebenaran Pernyataan (Pilih Benar / Salah):
          </span>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/50">
            <div className="grid grid-cols-12 bg-slate-100 dark:bg-slate-800 px-3.5 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-mono">
              <div className="col-span-8">Pernyataan</div>
              <div className="col-span-2 text-center text-emerald-600 dark:text-emerald-400">Benar</div>
              <div className="col-span-2 text-center text-rose-600 dark:text-rose-400">Salah</div>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {categoryStatements.map((stmt) => {
                const currentVal = userAnswer?.categoryAnswers?.[stmt.id];
                const isSelectedBenar = currentVal === 'Benar' || currentVal === true;
                const isSelectedSalah = currentVal === 'Salah' || currentVal === false;

                const correctMap = (question.correct_answer || {}) as Record<string, any>;
                const correctVal = correctMap[stmt.id];
                const isKeyBenar = correctVal === 'Benar' || correctVal === true;
                const isKeySalah = correctVal === 'Salah' || correctVal === false;

                return (
                  <div
                    key={stmt.id}
                    className="grid grid-cols-12 items-center px-3.5 py-3 hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="col-span-8 pr-3">
                      <span className="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400 mr-1.5">
                        [{stmt.label || stmt.id}]
                      </span>
                      <MathView content={stmt.text} className={zoomClass} />
                    </div>
                    <div className="col-span-2 flex flex-col items-center justify-center">
                      <button
                        onClick={() => onSelectCategoryAnswer(question.id, stmt.id, 'Benar')}
                        className={`px-3 py-1.5 rounded-lg border font-mono font-bold text-xs flex items-center justify-center transition-all ${
                          isSelectedBenar
                            ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                            : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
                        } ${isSolutionOpen && isKeyBenar ? 'ring-2 ring-emerald-500 ring-offset-1' : ''}`}
                      >
                        Benar
                      </button>
                      {isSolutionOpen && isKeyBenar && (
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                          ✓ Kunci
                        </span>
                      )}
                    </div>
                    <div className="col-span-2 flex flex-col items-center justify-center">
                      <button
                        onClick={() => onSelectCategoryAnswer(question.id, stmt.id, 'Salah')}
                        className={`px-3 py-1.5 rounded-lg border font-mono font-bold text-xs flex items-center justify-center transition-all ${
                          isSelectedSalah
                            ? 'bg-rose-600 text-white border-rose-500 shadow-sm'
                            : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-rose-50 dark:hover:bg-rose-950/30'
                        } ${isSolutionOpen && isKeySalah ? 'ring-2 ring-emerald-500 ring-offset-1' : ''}`}
                      >
                        Salah
                      </button>
                      {isSolutionOpen && isKeySalah && (
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                          ✓ Kunci
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 4. TAB HINT & PEMBAHASAN MANDIRI (COLLAPSIBLE TABS) */}
      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
        {/* Tombol Pembuka Tab */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Tombol Tab Petunjuk / Hint */}
          {(question.hint1 || question.hint2) && (
            <button
              onClick={() => setIsHintOpen((prev) => !prev)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                isHintOpen
                  ? 'bg-amber-500/15 border-amber-500/50 text-amber-700 dark:text-amber-300 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400'
              }`}
            >
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Petunjuk Pengerjaan (Hint)</span>
              {isHintOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          )}

          {/* Tombol Tab Pembahasan Lengkap */}
          <button
            onClick={() => setIsSolutionOpen((prev) => !prev)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
              isSolutionOpen
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
          >
            <BookOpen className="w-4 h-4 text-indigo-500 group-hover:text-white" />
            <span>Pembahasan &amp; Kunci Jawaban</span>
            {isSolutionOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* 4A. Konten Accordion Hint */}
        {isHintOpen && (
          <div className="p-4 sm:p-5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 space-y-2.5 animate-fadeIn">
            {question.hint1 && (
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 font-mono">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  Konsep Inti:
                </div>
                <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed pl-6">
                  <MathView content={question.hint1} />
                </div>
              </div>
            )}

            {question.hint2 && (
              <div className="space-y-1 pt-2 border-t border-amber-200/60 dark:border-amber-800/40">
                <span className="font-bold text-amber-700 dark:text-amber-400 font-mono text-[11px] block pl-6">
                  Langkah Awal:
                </span>
                <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed pl-6">
                  <MathView content={question.hint2} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4B. Konten Accordion Pembahasan Lengkap */}
        {isSolutionOpen && (
          <div className="p-4 sm:p-6 rounded-xl bg-slate-50 dark:bg-[#0E1424] border border-slate-200 dark:border-slate-800 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
                <BookOpen className="w-4 h-4" />
                Uraian Pembahasan Sistematis &amp; KaTeX
              </div>
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                Kunci:{' '}
                {typeof question.correct_answer === 'string'
                  ? question.correct_answer
                  : Array.isArray(question.correct_answer)
                  ? question.correct_answer.join(', ')
                  : 'Lihat Analisis'}
              </div>
            </div>

            {/* Explanation Content */}
            {typeof question.explanation === 'string' ? (
              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <MathView content={question.explanation} />
              </div>
            ) : (
              <div className="space-y-3">
                {question.explanation.summary && (
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <MathView content={question.explanation.summary} />
                  </div>
                )}
                {question.explanation.steps && (
                  <div className="space-y-2.5">
                    {question.explanation.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            {step.title}
                          </h5>
                        </div>
                        <div className="pl-7 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <MathView content={step.content} />
                        </div>
                        {step.formula && (
                          <div className="mt-2 ml-7 p-2.5 rounded bg-slate-50 dark:bg-[#080C14] border border-slate-200 dark:border-slate-800 text-center overflow-x-auto">
                            <MathView content={`$$${step.formula}$$`} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Optional SVG Solution Preview */}
            {question.svgComponentId && (
              <div className="my-3 p-3 rounded-xl bg-slate-100 dark:bg-[#080C14] border border-emerald-500/30 flex flex-col items-center justify-center">
                <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5 self-start">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                  Grafik Analisis Solusi &amp; Penjelasan Visual:
                </span>
                <QuestionVisual svgId={question.svgComponentId} mode="solution" />
              </div>
            )}

            {/* Common Trap Alert if provided */}
            {question.trap && (
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Jebakan Soal (TKA Trap): </span>
                  <MathView content={question.trap} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
