import React from 'react';
import { Question, UserAnswerRecord, AnswerStatus } from '../types/quiz';
import { MathView } from './MathView';
import { QuestionVisual } from './svg/VisualSVGs';
import { AnswerOptions } from './AnswerOptions';
import { ProgressiveSolution } from './ProgressiveSolution';
import { QuestionPalette } from './QuestionPalette';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Flag,
  CheckCircle,
  Layers,
  Brain,
  Info,
  Maximize2,
  Minimize2,
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
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  isZenMode?: boolean;
  onToggleZenMode?: () => void;
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
  isBookmarked,
  onToggleBookmark,
  isZenMode = false,
  onToggleZenMode,
}) => {
  const currentAnswer = userAnswers[question.id];
  const currentStatus: AnswerStatus = currentAnswer?.status || 'unanswered';
  const isDoubt = currentStatus === 'doubt';
  const isLast = currentIndex === totalQuestions - 1;
  const isFirst = currentIndex === 0;

  // Cognitive badge colors
  let cognitiveBadge =
    'bg-indigo-950/40 text-indigo-300 border-indigo-500/30';
  if (question.cognitiveLevel === 'Penalaran (HOTS)') {
    cognitiveBadge =
      'bg-rose-950/40 text-rose-300 border-rose-500/40 font-extrabold';
  } else if (question.cognitiveLevel === 'Aplikasi') {
    cognitiveBadge =
      'bg-emerald-950/40 text-emerald-300 border-emerald-500/30 font-bold';
  }

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-28 lg:pb-12 transition-all ${
        isZenMode ? 'max-w-5xl' : ''
      }`}
    >
      {/* Top Module & Competency Info Strip */}
      <div className="mb-6 p-4 rounded-2xl bg-[#111827] border border-[#1F2937] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* Question Number Badge */}
          <span className="px-3 py-1 rounded-xl bg-indigo-600 text-white font-mono font-black text-sm shadow-sm shadow-indigo-600/30">
            Soal #{question.number}
          </span>

          {/* Module Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-[#151D2F] text-slate-200 border border-slate-700">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            {question.module}
          </span>

          {/* Cognitive Level Badge */}
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs border ${cognitiveBadge}`}>
            <Brain className="w-3.5 h-3.5" />
            {question.cognitiveLevel}
          </span>
        </div>

        {/* Action Buttons: Bookmark & Sub-competency */}
        <div className="flex items-center justify-between md:justify-end gap-3">
          <div className="text-xs text-slate-400 flex items-center gap-1.5 truncate max-w-xs sm:max-w-md">
            <Info className="w-4 h-4 text-slate-500 flex-shrink-0" />
            <span className="truncate" title={question.subCompetency}>
              {question.subCompetency}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={onToggleBookmark}
            title={isBookmarked ? 'Hapus Tanda Soal Sulit' : 'Tandai Sebagai Soal Sulit'}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              isBookmarked
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 shadow-sm'
                : 'bg-[#151D2F] text-slate-400 hover:text-white border-slate-700 hover:border-amber-500/50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400' : ''}`} />
            <span>{isBookmarked ? 'Ditandai' : 'Tandai Sulit'}</span>
          </button>
        </div>
      </div>

      {/* Main Split Layout: Desktop 2 Columns */}
      <div className={`grid grid-cols-1 ${isZenMode ? 'lg:grid-cols-12 gap-8' : 'lg:grid-cols-12 gap-6'} items-start`}>
        {/* =========================================
            LEFT COLUMN (Desktop 7 cols): Scenario, Technical SVG, KaTeX Formula
            ========================================= */}
        <div className={`${isZenMode ? 'lg:col-span-7' : 'lg:col-span-7'} space-y-6`}>
          {/* Question Narration Card */}
          <div className="p-6 rounded-3xl bg-[#111827] border border-[#1F2937] shadow-sm space-y-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              {question.title}
            </h2>

            {/* Scenario Narrative with KaTeX */}
            <div className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <MathView content={question.scenario} />
            </div>

            {/* Technical SVG Visualization */}
            <div className="py-2">
              <div className="p-3 rounded-2xl bg-[#0B0F19] border border-[#1F2937] flex items-center justify-center">
                <QuestionVisual svgId={question.svgComponentId} mode="question" />
              </div>
            </div>

            {/* Target Question Prompt */}
            <div className="p-4 rounded-2xl bg-[#151D2F] border-l-4 border-indigo-500 border border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                Pertanyaan Soal
              </span>
              <MathView
                content={question.questionPrompt}
                className="text-sm sm:text-base font-semibold text-white"
              />
            </div>
          </div>

          {/* Progressive Solution Accordion (Only in Drill Mode or Reviewed) */}
          <ProgressiveSolution
            explanation={question.explanation}
            hint1={question.hint1}
            hint2={question.hint2}
            trap={question.trap}
            isExamMode={isExamMode}
            svgComponentId={question.svgComponentId}
          />
        </div>

        {/* =========================================
            RIGHT COLUMN (Desktop 5 cols): Answer Options, Nav Controls, Palette
            ========================================= */}
        <div className={`${isZenMode ? 'lg:col-span-5' : 'lg:col-span-5'} space-y-6 lg:sticky lg:top-24`}>
          {/* Options Card */}
          <div className="p-6 rounded-3xl bg-[#111827] border border-[#1F2937] shadow-sm space-y-4">
            <AnswerOptions
              question={question}
              userAnswer={currentAnswer}
              onSelectOption={onSelectOption}
              onToggleMcmaOption={onToggleMcmaOption}
              onSelectCategoryAnswer={onSelectCategoryAnswer}
              instantFeedback={!isExamMode}
            />

            {/* Question Navigation Action Buttons */}
            <div className="pt-4 border-t border-[#1F2937] flex items-center justify-between gap-2">
              {/* Prev Button */}
              <button
                onClick={onPrev}
                disabled={isFirst}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                  isFirst
                    ? 'opacity-40 cursor-not-allowed border-slate-800 text-slate-600 bg-transparent'
                    : 'border-slate-700 bg-[#151D2F] text-slate-300 hover:text-white hover:bg-[#1F2937]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              {/* Ragu-Ragu Toggle Button */}
              <button
                onClick={onToggleDoubt}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                  isDoubt
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/50 shadow-sm'
                    : 'border-slate-700 bg-[#151D2F] text-slate-400 hover:text-amber-400 hover:border-amber-500/40'
                }`}
                title="Tandai jika masih ragu-ragu dengan jawaban Anda"
              >
                <Flag className="w-4 h-4" />
                <span>{isDoubt ? 'Ragu (Ditandai)' : 'Ragu-Ragu'}</span>
              </button>

              {/* Next / Finish Button */}
              {isLast ? (
                <button
                  onClick={onFinishExam}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Selesai</span>
                </button>
              ) : (
                <button
                  onClick={onNext}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all hover:scale-105"
                >
                  <span>Berikutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Question Palette (Hidden in Zen Mode) */}
          {!isZenMode && (
            <div className="hidden lg:block p-5 rounded-3xl bg-[#111827] border border-[#1F2937] shadow-sm">
              <QuestionPalette
                questions={questions}
                currentIndex={currentIndex}
                userAnswers={userAnswers}
                onSelectQuestion={onSelectQuestion}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
