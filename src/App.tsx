import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { questionsData } from './data/questionsData';
import { UserAnswerRecord, AnswerStatus, Question } from './types/quiz';
import { Header } from './components/Header';
import { QuestionView } from './components/QuestionView';
import { BottomMobileBar } from './components/BottomMobileBar';
import { QuestionPalette } from './components/QuestionPalette';
import { EvaluationModal } from './components/EvaluationModal';
import { FormulaCheatsheetModal } from './components/FormulaCheatsheetModal';
import { Filter, Sparkles, BookOpen, Layers } from 'lucide-react';

export const App: React.FC = () => {
  // Module / Batch filter state
  const [selectedBatch, setSelectedBatch] = useState<string>('Semua');

  // Filtered questions based on selected batch
  const activeQuestions = useMemo(() => {
    if (selectedBatch === 'Semua') return questionsData;
    if (selectedBatch === 'Batch 1: Aljabar') {
      return questionsData.filter((q) => q.module === 'Aljabar & Sistem Persamaan/Pertidaksamaan');
    }
    if (selectedBatch === 'Batch 2: Fungsi & Deret') {
      return questionsData.filter(
        (q) => q.module === 'Fungsi & Relasi' || q.module === 'Barisan & Deret'
      );
    }
    if (selectedBatch === 'Batch 3: Geometri & Trig') {
      return questionsData.filter(
        (q) => q.module === 'Geometri & Pengukuran' || q.module === 'Trigonometri'
      );
    }
    if (selectedBatch === 'Batch 4: Statistika & Peluang') {
      return questionsData.filter(
        (q) => q.module === 'Statistika & Analisis Data' || q.module === 'Peluang & Kombinatorika'
      );
    }
    return questionsData;
  }, [selectedBatch]);

  // Index inside the active questions array
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswerRecord>>({});
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(90 * 60);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return (
      localStorage.getItem('sim_tka_theme') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  });

  // Modals state
  const [isEvaluationModalOpen, setIsEvaluationModalOpen] = useState<boolean>(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState<boolean>(false);
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState<boolean>(false);

  // Sync dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('sim_tka_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sim_tka_theme', 'light');
    }
  }, [isDarkMode]);

  // Safe boundary check for currentIndex when activeQuestions change
  useEffect(() => {
    if (currentIndex >= activeQuestions.length) {
      setCurrentIndex(0);
    }
  }, [activeQuestions, currentIndex]);

  // Sync URL hash when question changes
  useEffect(() => {
    const q = activeQuestions[currentIndex];
    if (q) {
      window.history.replaceState(null, '', `#/soal/${q.number}`);
    }
  }, [currentIndex, activeQuestions]);

  // Timer countdown in exam mode
  useEffect(() => {
    if (!isExamMode || isEvaluationModalOpen) return;

    const interval = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsEvaluationModalOpen(true);
          return 0;
        }
        return prev - 1;
      });
      setTimeSpentSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamMode, isEvaluationModalOpen]);

  // Current active question
  const currentQuestion = activeQuestions[currentIndex] || activeQuestions[0] || questionsData[0];

  // Helper to count answered
  const totalAnswered = useMemo(() => {
    return Object.values(userAnswers).filter(
      (a) => a.status === 'answered' || a.status === 'doubt'
    ).length;
  }, [userAnswers]);

  // Handlers for single selection (Radio)
  const handleSelectOption = useCallback(
    (optionId: string) => {
      const qId = currentQuestion.id;
      setUserAnswers((prev) => {
        const existing = prev[qId];
        const newStatus: AnswerStatus = existing?.status === 'doubt' ? 'doubt' : 'answered';
        return {
          ...prev,
          [qId]: {
            questionId: qId,
            selectedOption: optionId,
            status: newStatus,
          },
        };
      });
    },
    [currentQuestion.id]
  );

  // Handlers for MCMA multi selection (Checkbox)
  const handleToggleMcmaOption = useCallback(
    (optionId: string) => {
      const qId = currentQuestion.id;
      setUserAnswers((prev) => {
        const existing = prev[qId];
        const currentList = existing?.selectedOptions || [];
        const isAlreadyChecked = currentList.includes(optionId);
        const updatedList = isAlreadyChecked
          ? currentList.filter((id) => id !== optionId)
          : [...currentList, optionId];

        const hasAnySelected = updatedList.length > 0;
        let newStatus: AnswerStatus = 'unanswered';
        if (hasAnySelected) {
          newStatus = existing?.status === 'doubt' ? 'doubt' : 'answered';
        }

        return {
          ...prev,
          [qId]: {
            questionId: qId,
            selectedOptions: updatedList,
            status: newStatus,
          },
        };
      });
    },
    [currentQuestion.id]
  );

  // Handlers for PGK Kategori (Benar / Salah table)
  const handleSelectCategoryAnswer = useCallback(
    (statementId: string, value: boolean) => {
      const qId = currentQuestion.id;
      setUserAnswers((prev) => {
        const existing = prev[qId];
        const currentMap = { ...(existing?.categoryAnswers || {}) };
        currentMap[statementId] = value;

        const totalStatements = currentQuestion.categoryStatements?.length || 0;
        const answeredCount = Object.keys(currentMap).length;
        const allAnswered = answeredCount === totalStatements;

        let newStatus: AnswerStatus = existing?.status === 'doubt' ? 'doubt' : 'unanswered';
        if (allAnswered && existing?.status !== 'doubt') {
          newStatus = 'answered';
        }

        return {
          ...prev,
          [qId]: {
            questionId: qId,
            categoryAnswers: currentMap,
            status: newStatus,
          },
        };
      });
    },
    [currentQuestion.id, currentQuestion.categoryStatements]
  );

  // Toggle Doubt status
  const handleToggleDoubt = useCallback(() => {
    const qId = currentQuestion.id;
    setUserAnswers((prev) => {
      const existing = prev[qId] || { questionId: qId, status: 'unanswered' };
      const newStatus: AnswerStatus = existing.status === 'doubt' ? 'answered' : 'doubt';
      return {
        ...prev,
        [qId]: {
          ...existing,
          status: newStatus,
        },
      };
    });
  }, [currentQuestion.id]);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeQuestions.length]);

  const handleSelectQuestion = useCallback((index: number) => {
    setCurrentIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Mode Toggle
  const handleToggleMode = useCallback(() => {
    setIsExamMode((prev) => !prev);
  }, []);

  // Reset exam
  const handleResetExam = useCallback(() => {
    setUserAnswers({});
    setCurrentIndex(0);
    setTimerSeconds(90 * 60);
    setTimeSpentSeconds(0);
  }, []);

  const batches = [
    { id: 'Semua', label: 'Semua Soal (28 Butir)' },
    { id: 'Batch 1: Aljabar', label: 'Bagian 1: Aljabar & Prog. Linear' },
    { id: 'Batch 2: Fungsi & Deret', label: 'Bagian 2: Fungsi, Relasi & Deret' },
    { id: 'Batch 3: Geometri & Trig', label: 'Bagian 3: Geometri & Trigonometri' },
    { id: 'Batch 4: Statistika & Peluang', label: 'Bagian 4: Statistika & Peluang' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      {/* Top Header */}
      <Header
        isExamMode={isExamMode}
        onToggleMode={handleToggleMode}
        timerSeconds={timerSeconds}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        onOpenFormulaModal={() => setIsFormulaModalOpen(true)}
        onFinishExam={() => setIsEvaluationModalOpen(true)}
        totalAnswered={totalAnswered}
        totalQuestions={activeQuestions.length}
      />

      {/* Module / Batch Selector Bar */}
      <section className="bg-slate-100/90 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 whitespace-nowrap">
            <Layers className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="hidden sm:inline">Paket Modul Latihan:</span>
          </div>
          <div className="flex items-center gap-1.5 flex-nowrap">
            {batches.map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedBatch(b.id);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedBatch === b.id
                    ? 'bg-teal-600 text-white shadow-sm shadow-teal-500/20 scale-[1.02]'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-teal-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Single Question View */}
      <main className="flex-1">
        <QuestionView
          question={currentQuestion}
          currentIndex={currentIndex}
          totalQuestions={activeQuestions.length}
          userAnswers={userAnswers}
          onSelectOption={handleSelectOption}
          onToggleMcmaOption={handleToggleMcmaOption}
          onSelectCategoryAnswer={handleSelectCategoryAnswer}
          onPrev={handlePrev}
          onNext={handleNext}
          onToggleDoubt={handleToggleDoubt}
          onFinishExam={() => setIsEvaluationModalOpen(true)}
          isExamMode={isExamMode}
          onSelectQuestion={handleSelectQuestion}
          questions={activeQuestions}
        />
      </main>

      {/* Floating Bottom Bar on Mobile */}
      <BottomMobileBar
        currentIndex={currentIndex}
        totalQuestions={activeQuestions.length}
        currentStatus={userAnswers[currentQuestion.id]?.status || 'unanswered'}
        onPrev={handlePrev}
        onNext={handleNext}
        onToggleDoubt={handleToggleDoubt}
        onOpenPalette={() => setIsMobilePaletteOpen(true)}
        onFinish={() => setIsEvaluationModalOpen(true)}
      />

      {/* Mobile Drawer / Modal for Question Palette */}
      {isMobilePaletteOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="w-full sm:max-w-md bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 p-4 max-h-[85vh] flex flex-col">
            <QuestionPalette
              questions={activeQuestions}
              currentIndex={currentIndex}
              userAnswers={userAnswers}
              onSelectQuestion={handleSelectQuestion}
              isMobileModal={true}
              onCloseMobileModal={() => setIsMobilePaletteOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Evaluation and Score Modal */}
      <EvaluationModal
        isOpen={isEvaluationModalOpen}
        onClose={() => setIsEvaluationModalOpen(false)}
        questions={activeQuestions}
        userAnswers={userAnswers}
        timeSpentSeconds={timeSpentSeconds}
        onSelectQuestion={handleSelectQuestion}
        onResetExam={handleResetExam}
      />

      {/* Formula Cheatsheet Modal */}
      <FormulaCheatsheetModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
      />
    </div>
  );
};

export default App;
