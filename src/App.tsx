import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { questionsData } from './data/questionsData';
import {
  UserAnswerRecord,
  AnswerStatus,
  Question,
  ModuleCategory,
  AppView,
} from './types/quiz';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { QuestionView } from './components/QuestionView';
import { ConceptsView } from './components/ConceptsView';
import { BookmarksView } from './components/BookmarksView';
import { SearchModal } from './components/SearchModal';
import { BottomMobileBar } from './components/BottomMobileBar';
import { QuestionPalette } from './components/QuestionPalette';
import { EvaluationModal } from './components/EvaluationModal';
import { FormulaCheatsheetModal } from './components/FormulaCheatsheetModal';
import { X, Maximize2, Minimize2 } from 'lucide-react';

export const App: React.FC = () => {
  // Navigation View: 'dashboard' | 'drill' | 'concepts' | 'bookmarks' | 'exam'
  const [currentView, setCurrentView] = useState<AppView>(() => {
    if (window.location.hash.startsWith('#/soal/')) return 'drill';
    if (window.location.hash === '#/teorema') return 'concepts';
    if (window.location.hash === '#/bookmark') return 'bookmarks';
    if (window.location.hash === '#/ujian') return 'exam';
    return 'dashboard';
  });

  // Selected module filter for drilling
  const [selectedModule, setSelectedModule] = useState<ModuleCategory | 'Semua'>('Semua');

  // Filtered questions based on selected module
  const activeQuestions = useMemo(() => {
    if (selectedModule === 'Semua') return questionsData;
    return questionsData.filter((q) => q.module === selectedModule);
  }, [selectedModule]);

  // Current question index within activeQuestions
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // User answers state with localStorage persistence
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswerRecord>>(() => {
    try {
      const saved = localStorage.getItem('matwa_tka_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Bookmarked questions state with localStorage persistence
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('matwa_tka_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Last visited question number
  const [lastQuestionNumber, setLastQuestionNumber] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('matwa_tka_last_q');
      return saved ? parseInt(saved, 10) : 1;
    } catch {
      return 1;
    }
  });

  // Timer & Exam states
  const [isExamMode, setIsExamMode] = useState<boolean>(() => currentView === 'exam');
  const [timerSeconds, setTimerSeconds] = useState<number>(90 * 60);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('matwa_tka_time_spent');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  // Theme state (Default: High-contrast Dark Mode)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('matwa_tka_theme');
    if (saved) return saved === 'dark';
    return true; // Default Dark Mode as requested
  });

  // Layout & UI states
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isZenMode, setIsZenMode] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isEvaluationModalOpen, setIsEvaluationModalOpen] = useState<boolean>(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState<boolean>(false);
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState<boolean>(false);

  // Sync dark mode class
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

  // Persist time spent
  useEffect(() => {
    try {
      localStorage.setItem('matwa_tka_time_spent', timeSpentSeconds.toString());
    } catch (e) {
      console.error(e);
    }
  }, [timeSpentSeconds]);

  // Safe boundary check for currentIndex
  useEffect(() => {
    if (currentIndex >= activeQuestions.length && activeQuestions.length > 0) {
      setCurrentIndex(0);
    }
  }, [activeQuestions, currentIndex]);

  // Sync current question number & URL hash
  useEffect(() => {
    if (currentView === 'drill' || currentView === 'exam') {
      const q = activeQuestions[currentIndex];
      if (q) {
        setLastQuestionNumber(q.number);
        localStorage.setItem('matwa_tka_last_q', q.number.toString());
        window.history.replaceState(null, '', `#/soal/${q.number}`);
      }
    } else if (currentView === 'dashboard') {
      window.history.replaceState(null, '', `#/dashboard`);
    } else if (currentView === 'concepts') {
      window.history.replaceState(null, '', `#/teorema`);
    } else if (currentView === 'bookmarks') {
      window.history.replaceState(null, '', `#/bookmark`);
    }
  }, [currentIndex, activeQuestions, currentView]);

  // Global Keyboard shortcuts: Ctrl+K, Esc, Z
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Ctrl + K or Meta + K -> Search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
      // Esc -> exit Zen mode or close modal
      if (e.key === 'Escape' && isZenMode) {
        setIsZenMode(false);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isZenMode]);

  // Exam timer interval
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
  const currentQuestion =
    activeQuestions[currentIndex] || activeQuestions[0] || questionsData[0];

  // Bookmarked questions list
  const bookmarkedQuestions = useMemo(() => {
    return questionsData.filter((q) => bookmarkedIds.includes(q.id));
  }, [bookmarkedIds]);

  // Handlers for selection
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

  // Toggle Bookmark status
  const handleToggleBookmark = useCallback((qId?: string) => {
    const targetId = qId || currentQuestion.id;
    setBookmarkedIds((prev) => {
      if (prev.includes(targetId)) {
        return prev.filter((id) => id !== targetId);
      } else {
        return [...prev, targetId];
      }
    });
  }, [currentQuestion.id]);

  const handleClearAllBookmarks = useCallback(() => {
    setBookmarkedIds([]);
  }, []);

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

  const handleNavigateToQuestionNumber = useCallback(
    (questionNumber: number) => {
      // Set filter to 'Semua' so all questions are reachable
      setSelectedModule('Semua');
      const targetIdx = questionsData.findIndex((q) => q.number === questionNumber);
      if (targetIdx !== -1) {
        setCurrentIndex(targetIdx);
        setCurrentView('drill');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    []
  );

  const handleSelectTopicToDrill = useCallback((moduleName: ModuleCategory) => {
    setSelectedModule(moduleName);
    setCurrentIndex(0);
    setCurrentView('drill');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleToggleExamMode = useCallback(() => {
    setIsExamMode((prev) => {
      const next = !prev;
      if (next) {
        setCurrentView('exam');
        setSelectedModule('Semua');
      } else {
        setCurrentView('drill');
      }
      return next;
    });
  }, []);

  const handleResetExam = useCallback(() => {
    setUserAnswers({});
    setCurrentIndex(0);
    setTimerSeconds(90 * 60);
    setTimeSpentSeconds(0);
  }, []);

  const totalAnswered = useMemo(() => {
    return Object.values(userAnswers).filter(
      (a) => a.status === 'answered' || a.status === 'doubt'
    ).length;
  }, [userAnswers]);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex font-sans selection:bg-indigo-500 selection:text-white transition-colors">
      {/* 1. Collapsible Sidebar Navigation (Hidden in Zen Mode) */}
      {!isZenMode && (
        <Sidebar
          currentView={currentView}
          onSelectView={(v) => {
            setCurrentView(v);
            if (v === 'exam') setIsExamMode(true);
            else setIsExamMode(false);
          }}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
          onOpenSearch={() => setIsSearchModalOpen(true)}
          questions={questionsData}
          userAnswers={userAnswers}
          bookmarkedIds={bookmarkedIds}
          onSelectTopic={handleSelectTopicToDrill}
          selectedModule={selectedModule}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* 2. Top Header (Minimalist in Zen Mode) */}
        {!isZenMode ? (
          <Header
            isExamMode={isExamMode}
            onToggleMode={handleToggleExamMode}
            timerSeconds={timerSeconds}
            isDarkMode={isDarkMode}
            onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
            onOpenFormulaModal={() => setIsFormulaModalOpen(true)}
            onFinishExam={() => setIsEvaluationModalOpen(true)}
            totalAnswered={totalAnswered}
            totalQuestions={questionsData.length}
            isZenMode={isZenMode}
            onToggleZenMode={() => setIsZenMode(true)}
            onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />
        ) : (
          /* Floating Zen Mode Top Control */
          <div className="sticky top-0 z-40 p-3 flex justify-between items-center max-w-5xl mx-auto w-full backdrop-blur-md bg-[#0B0F19]/80 border-b border-[#1F2937]/50 px-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-slate-300">
                Mode Fokus (Zen Mode) Aktif
              </span>
            </div>
            <button
              onClick={() => setIsZenMode(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#151D2F] hover:bg-[#1F2937] text-white text-xs font-semibold border border-slate-700 transition-colors shadow-sm"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              Keluar Zen (Esc)
            </button>
          </div>
        )}

        {/* 3. Dynamic App View Rendering */}
        <main className="flex-1">
          {currentView === 'dashboard' && (
            <DashboardView
              questions={questionsData}
              userAnswers={userAnswers}
              bookmarkedIds={bookmarkedIds}
              lastQuestionNumber={lastQuestionNumber}
              timeSpentSeconds={timeSpentSeconds}
              onNavigateToQuestion={handleNavigateToQuestionNumber}
              onSelectView={setCurrentView}
              onSelectTopic={handleSelectTopicToDrill}
            />
          )}

          {(currentView === 'drill' || currentView === 'exam') && (
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
              isBookmarked={bookmarkedIds.includes(currentQuestion.id)}
              onToggleBookmark={() => handleToggleBookmark(currentQuestion.id)}
              isZenMode={isZenMode}
              onToggleZenMode={() => setIsZenMode((prev) => !prev)}
            />
          )}

          {currentView === 'concepts' && (
            <ConceptsView onSelectTopicToDrill={handleSelectTopicToDrill} />
          )}

          {currentView === 'bookmarks' && (
            <BookmarksView
              bookmarkedQuestions={bookmarkedQuestions}
              userAnswers={userAnswers}
              onNavigateToQuestion={handleNavigateToQuestionNumber}
              onToggleBookmark={handleToggleBookmark}
              onClearAllBookmarks={handleClearAllBookmarks}
            />
          )}
        </main>

        {/* 4. Bottom Mobile Bar (Only in Question Drilling & Zen Mode off) */}
        {!isZenMode && (currentView === 'drill' || currentView === 'exam') && (
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
        )}
      </div>

      {/* 5. Modals */}
      {/* Mobile Question Palette Modal Drawer */}
      {isMobilePaletteOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm lg:hidden animate-fadeIn">
          <div className="w-full max-w-lg bg-[#111827] rounded-t-3xl border-t border-[#1F2937] p-4 max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-white">Daftar Nomor Soal</h3>
              <button
                onClick={() => setIsMobilePaletteOpen(false)}
                className="p-1.5 rounded-lg bg-[#1F2937] text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <QuestionPalette
                questions={activeQuestions}
                currentIndex={currentIndex}
                userAnswers={userAnswers}
                onSelectQuestion={(idx) => {
                  handleSelectQuestion(idx);
                  setIsMobilePaletteOpen(false);
                }}
                isMobileModal={true}
                onCloseMobileModal={() => setIsMobilePaletteOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Evaluation / Scoring Modal */}
      <EvaluationModal
        isOpen={isEvaluationModalOpen}
        onClose={() => setIsEvaluationModalOpen(false)}
        questions={questionsData}
        userAnswers={userAnswers}
        timeSpentSeconds={timeSpentSeconds}
        onSelectQuestion={(idx) => {
          handleSelectQuestion(idx);
          setIsEvaluationModalOpen(false);
          setCurrentView('drill');
        }}
        onResetExam={handleResetExam}
      />

      {/* Formula Cheatsheet Modal */}
      <FormulaCheatsheetModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        questions={questionsData}
        onSelectQuestion={(qNum) => handleNavigateToQuestionNumber(qNum)}
      />
    </div>
  );
};

export default App;
