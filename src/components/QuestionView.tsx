import React from 'react';
import { Question, UserAnswerRecord, AnswerStatus } from '../types/quiz';
import { MathView } from './MathView';
import { QuestionVisual } from './svg/VisualSVGs';
import { AnswerOptions } from './AnswerOptions';
import { ExplanationAccordion } from './ExplanationAccordion';
import { QuestionPalette } from './QuestionPalette';
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  CheckCircle,
  Sparkles,
  Layers,
  Brain,
  Info,
} from 'lucide-react';

interface QuestionViewProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  userAnswers: Record<string, UserAnswerRecord>;
  onSelectOption: (optionId: string) => void;
  onToggleMcmaOption: (optionId: string) => void;
  onSelectCategoryAnswer: (statementId: string, value: boolean) => void;
  onPrev: () => void;
  onNext: () => void;
  onToggleDoubt: () => void;
  onFinishExam: () => void;
  isExamMode: boolean;
  onSelectQuestion: (index: number) => void;
  questions: Question[];
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  currentIndex,
  totalQuestions,
  userAnswers,
  onSelectOption,
  onToggleMcmaOption,
  onSelectCategoryAnswer,
  onPrev,
  onNext,
  onToggleDoubt,
  onFinishExam,
  isExamMode,
  onSelectQuestion,
  questions,
}) => {
  const currentAnswer = userAnswers[question.id];
  const currentStatus: AnswerStatus = currentAnswer?.status || 'unanswered';
  const isDoubt = currentStatus === 'doubt';
  const isLast = currentIndex === totalQuestions - 1;
  const isFirst = currentIndex === 0;

  // Badge cognitive level color
  let cognitiveBadge = 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-800';
  if (question.cognitiveLevel === 'Penalaran (HOTS)') {
    cognitiveBadge = 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800 font-extrabold';
  } else if (question.cognitiveLevel === 'Aplikasi') {
    cognitiveBadge = 'bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-800 font-bold';
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-28 lg:pb-12">
      {/* Top Module & Competency Info Strip */}
      <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* Question Number Badge */}
          <span className="px-3 py-1 rounded-xl bg-teal-600 text-white font-black text-sm shadow-sm">
            Soal #{question.number}
          </span>

          {/* Module Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
            <Layers className="w-3.5 h-3.5 text-teal-500" />
            {question.module}
          </span>

          {/* Cognitive Level Badge */}
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs border ${cognitiveBadge}`}>
            <Brain className="w-3.5 h-3.5" />
            {question.cognitiveLevel}
          </span>
        </div>

        {/* Sub-competency summary */}
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span className="truncate max-w-md" title={question.subCompetency}>
            {question.subCompetency}
          </span>
        </div>
      </div>

      {/* Main Split Layout: Desktop 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* =========================================
            LEFT COLUMN (Desktop 7 cols): Scenario, SVG, Prompt, Explanation
           ========================================= */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card: Scenario & Question Prompt */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm space-y-5">
            {/* Title */}
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {question.title}
            </h2>

            {/* Scenario Text */}
            <div className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 space-y-2">
              <MathView content={question.scenario} />
            </div>

            {/* Technical SVG Visualization */}
            {question.svgComponentId && (
              <div className="my-5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center">
                <QuestionVisual svgId={question.svgComponentId} />
              </div>
            )}

            {/* Question Prompt (The actual query) */}
            <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border-l-4 border-teal-500 text-slate-900 dark:text-slate-100 font-semibold text-sm sm:text-base">
              <MathView content={question.questionPrompt} />
            </div>
          </div>

          {/* Explanation Accordion (Visible in Practice Mode or after finish) */}
          {!isExamMode && (
            <ExplanationAccordion explanation={question.explanation} defaultOpen={false} />
          )}
        </div>

        {/* =========================================
            RIGHT COLUMN (Desktop 5 cols): Answer Options, Action Nav, Question Palette
           ========================================= */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          {/* Interactive Answer Input Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <AnswerOptions
              question={question}
              userAnswer={currentAnswer}
              onSelectOption={onSelectOption}
              onToggleMcmaOption={onToggleMcmaOption}
              onSelectCategoryAnswer={onSelectCategoryAnswer}
              showSolutionPreview={!isExamMode && currentStatus === 'answered'}
            />

            {/* Desktop Navigation Control Strip */}
            <div className="hidden lg:flex items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              {/* Tombol Sebelumnya */}
              <button
                onClick={onPrev}
                disabled={isFirst}
                className={`flex items-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                  isFirst
                    ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400'
                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              {/* Tombol Tandai Ragu */}
              <button
                onClick={onToggleDoubt}
                className={`flex items-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs font-bold border transition-all ${
                  isDoubt
                    ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                    : 'border-amber-300 dark:border-amber-700/60 text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20 hover:bg-amber-100 dark:hover:bg-amber-900/40'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${isDoubt ? 'fill-white' : 'fill-amber-500'}`} />
                <span>{isDoubt ? 'Ragu-Ragu Aktif' : 'Tandai Ragu'}</span>
              </button>

              {/* Tombol Berikutnya / Selesai */}
              {isLast ? (
                <button
                  onClick={onFinishExam}
                  className="flex items-center gap-1.5 py-2.5 px-5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Selesai Ujian</span>
                </button>
              ) : (
                <button
                  onClick={onNext}
                  className="flex items-center gap-1.5 py-2.5 px-5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Berikutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop Question Palette */}
          <div className="hidden lg:block">
            <QuestionPalette
              questions={questions}
              currentIndex={currentIndex}
              userAnswers={userAnswers}
              onSelectQuestion={onSelectQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
