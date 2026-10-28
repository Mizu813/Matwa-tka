import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { questionsData } from './data/questionsData';
import {
  UserAnswerRecord,
  AnswerStatus,
  Question,
  ModuleCategory,
  PackageCategory,
} from './types/quiz';
import { PdfTopNavbar, ViewDisplayMode } from './components/PdfTopNavbar';
import { PdfDocumentSheet } from './components/PdfDocumentSheet';
import { EvaluationModal } from './components/EvaluationModal';
import { FormulaCheatsheetModal } from './components/FormulaCheatsheetModal';

export const App: React.FC = () => {
  // 1. Sub-Bab & Paket Filter State (Controlled by Sticky Top Navbar)
  const [selectedModule, setSelectedModule] = useState<ModuleCategory | 'Semua'>('Semua');
  const [selectedPackage, setSelectedPackage] = useState<PackageCategory>('Semua');

  // Filtered questions based on selected Sub-Bab and selected Paket
  const activeQuestions = useMemo(() => {
    return questionsData.filter((q) => {
      const matchModule = selectedModule === 'Semua' || q.module === selectedModule;
      const matchPackage = selectedPackage === 'Semua' || q.package === selectedPackage;
      return matchModule && matchPackage;
    });
  }, [selectedModule, selectedPackage]);

  // 2. Display Mode: 'continuous' (Full PDF Document) vs 'single' (Page-by-page)
  const [displayMode, setDisplayMode] = useState<ViewDisplayMode>('continuous');

  // Index for single-question view mode
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // 3. Zoom / Text Size scaling (90%, 100%, 110%, 120%)
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // 4. Global toggle for expanding all hints & solutions
  const [allExpanded, setAllExpanded] = useState<boolean>(false);

  // 5. User answers state with localStorage persistence
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswerRecord>>(() => {
    try {
      const saved = localStorage.getItem('matwa_tka_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // 6. Bookmarked questions state with localStorage persistence
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('matwa_tka_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 7. Time spent tracking
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('matwa_tka_time_spent');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  // 8. Theme state (Default: High-contrast Dark Paper or Clean White Paper)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('matwa_tka_theme');
    if (saved) return saved === 'dark';
    return true; // Default Dark Mode as configured
  });

  // Modal state
  const [isEvaluationModalOpen, setIsEvaluationModalOpen] = useState<boolean>(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState<boolean>(false);

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('matwa_tka_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('matwa_tka_theme', 'light');
    }
  }, [isDarkMode]);

  // Persist answers
  useEffect(() => {
    try {
      localStorage.setItem('matwa_tka_answers', JSON.stringify(userAnswers));
    } catch (e) {
      console.error(e);
    }
  }, [userAnswers]);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('matwa_tka_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  // Timer interval
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpentSeconds((prev) => {
        const next = prev + 1;
        try {
          localStorage.setItem('matwa_tka_time_spent', next.toString());
        } catch {}
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Safe boundary check for currentIndex
  useEffect(() => {
    if (currentIndex >= activeQuestions.length && activeQuestions.length > 0) {
      setCurrentIndex(0);
    }
  }, [activeQuestions, currentIndex]);

  // Handlers for user interactions
  const handleSelectOption = useCallback((questionId: string, optionId: string) => {
    setUserAnswers((prev) => {
      const existing = prev[questionId];
      const newStatus: AnswerStatus = existing?.status === 'doubt' ? 'doubt' : 'answered';
      return {
        ...prev,
        [questionId]: {
          questionId,
          selectedOption: optionId,
          status: newStatus,
        },
      };
    });
  }, []);

  const handleToggleMcmaOption = useCallback((questionId: string, optionId: string) => {
    setUserAnswers((prev) => {
      const existing = prev[questionId];
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
        [questionId]: {
          questionId,
          selectedOptions: updatedList,
          status: newStatus,
        },
      };
    });
  }, []);

  const handleSelectCategoryAnswer = useCallback(
    (questionId: string, statementId: string, value: boolean) => {
      setUserAnswers((prev) => {
        const existing = prev[questionId];
        const currentMap = { ...(existing?.categoryAnswers || {}) };
        currentMap[statementId] = value;

        return {
          ...prev,
          [questionId]: {
            questionId,
            categoryAnswers: currentMap,
            status: 'answered',
          },
        };
      });
    },
    []
  );

  const handleToggleBookmark = useCallback((questionId: string) => {
    setBookmarkedIds((prev) => {
      if (prev.includes(questionId)) {
        return prev.filter((id) => id !== questionId);
      } else {
        return [...prev, questionId];
      }
    });
  }, []);

  const handleSelectModule = useCallback((modName: ModuleCategory | 'Semua') => {
    setSelectedModule(modName);
    setCurrentIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectPackage = useCallback((pkg: PackageCategory) => {
    setSelectedPackage(pkg);
    setCurrentIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(120, prev + 10));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(90, prev - 10));
  };

  const totalAnswered = useMemo(() => {
    return Object.values(userAnswers).filter(
      (a) => a.status === 'answered' || a.status === 'doubt'
    ).length;
  }, [userAnswers]);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-100 dark:bg-[#070B12] text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors flex flex-col items-stretch">
      {/* 1. STICKY TOP NAVBAR (Document Controls & Sub-Bab Tabs) */}
      <PdfTopNavbar
        selectedModule={selectedModule}
        onSelectModule={handleSelectModule}
        selectedPackage={selectedPackage}
        onSelectPackage={handleSelectPackage}
        displayMode={displayMode}
        onToggleDisplayMode={() =>
          setDisplayMode((prev) => (prev === 'continuous' ? 'single' : 'continuous'))
        }
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        allExpanded={allExpanded}
        onToggleAllExpanded={() => setAllExpanded((prev) => !prev)}
        onOpenEvaluation={() => setIsEvaluationModalOpen(true)}
        totalAnswered={totalAnswered}
        totalQuestions={questionsData.length}
      />

      {/* 2. MAIN CENTERED PDF DOCUMENT SHEET */}
      <main className="w-full max-w-full pb-16 flex flex-col items-center">
        <PdfDocumentSheet
          questions={activeQuestions}
          selectedModule={selectedModule}
          selectedPackage={selectedPackage}
          userAnswers={userAnswers}
          onSelectOption={handleSelectOption}
          onToggleMcmaOption={handleToggleMcmaOption}
          onSelectCategoryAnswer={handleSelectCategoryAnswer}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
          displayMode={displayMode}
          currentIndex={currentIndex}
          onSelectIndex={(idx) => {
            setCurrentIndex(idx);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          globalExpandState={allExpanded}
          zoomLevel={zoomLevel}
        />
      </main>

      {/* 3. EVALUATION / SCORING MODAL */}
      <EvaluationModal
        isOpen={isEvaluationModalOpen}
        onClose={() => setIsEvaluationModalOpen(false)}
        questions={questionsData}
        userAnswers={userAnswers}
        timeSpentSeconds={timeSpentSeconds}
        onSelectQuestion={(idx) => {
          setSelectedModule('Semua');
          setCurrentIndex(idx);
          setIsEvaluationModalOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onResetExam={() => {
          setUserAnswers({});
          setCurrentIndex(0);
          setTimeSpentSeconds(0);
        }}
      />

      {/* 4. FORMULA CHEATSHEET MODAL */}
      <FormulaCheatsheetModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
      />
    </div>
  );
};

export default App;
