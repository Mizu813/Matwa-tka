import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  CurriculumChapter,
  Question,
  UserAnswerRecord,
  AnswerStatus,
  ViewDisplayMode,
} from './types/quiz';
import { PdfTopNavbar } from './components/PdfTopNavbar';
import { PdfDocumentSheet } from './components/PdfDocumentSheet';
import { EvaluationModal } from './components/EvaluationModal';
import { FormulaCheatsheetModal } from './components/FormulaCheatsheetModal';

// Helper to safely resolve relative asset URLs in Vite dev, preview, and GitHub Pages
const resolveAssetPath = (relativePath: string): string => {
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return `${cleanBase}${cleanPath}`;
};

export const App: React.FC = () => {
  // 1. Curriculum hierarchy state
  const [curriculum, setCurriculum] = useState<CurriculumChapter[]>([]);
  const [isCurriculumLoading, setIsCurriculumLoading] = useState<boolean>(true);

  // 2. Navigation Routing State (Chapter, SubChapter, DifficultyTab, QuestionNumber)
  const [activeChapterId, setActiveChapterId] = useState<string>('bilangan-real');
  const [activeSubChapterId, setActiveSubChapterId] = useState<string>('eksponen-dan-akar');
  const [activeDifficultyTab, setActiveDifficultyTab] = useState<'STANDAR' | 'HOTS'>('STANDAR');
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);

  // 3. Question Data Cache: sub_chapter_id -> Question[]
  const [questionsCache, setQuestionsCache] = useState<Record<string, Question[]>>({});
  const [isQuestionsLoading, setIsQuestionsLoading] = useState<boolean>(false);

  // 4. Display Mode: 'continuous' vs 'single'
  const [displayMode, setDisplayMode] = useState<ViewDisplayMode>('continuous');

  // 5. Zoom level (90%, 100%, 110%, 120%)
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // 6. Global expand hints/solutions
  const [allExpanded, setAllExpanded] = useState<boolean>(false);

  // 7. Modals
  const [isEvaluationModalOpen, setIsEvaluationModalOpen] = useState<boolean>(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState<boolean>(false);

  // 8. User answers state with localStorage persistence
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswerRecord>>(() => {
    try {
      const saved = localStorage.getItem('matwa_tka_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // 9. Bookmarks state with localStorage persistence
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('matwa_tka_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 10. Time spent tracking
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('matwa_tka_time_spent');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  // 11. Theme state (Dark Mode by default)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('matwa_tka_theme');
    if (saved) return saved === 'dark';
    return true;
  });

  // Ref to avoid infinite hashchange loops
  const isUpdatingHashInternally = useRef(false);

  // -------------------------------------------------------------
  // Load Master Curriculum on mount
  // -------------------------------------------------------------
  useEffect(() => {
    const loadCurriculum = async () => {
      setIsCurriculumLoading(true);
      const pathsToTry = [
        resolveAssetPath('data/curriculum-matwa.json'),
        './data/curriculum-matwa.json',
        '/data/curriculum-matwa.json',
      ];

      for (const p of pathsToTry) {
        try {
          const res = await fetch(p);
          if (res.ok) {
            const data: CurriculumChapter[] = await res.json();
            if (Array.isArray(data) && data.length > 0) {
              setCurriculum(data);
              setIsCurriculumLoading(false);
              return;
            }
          }
        } catch {
          // continue to next path
        }
      }
      setIsCurriculumLoading(false);
    };

    loadCurriculum();
  }, []);

  // -------------------------------------------------------------
  // Hash Routing Logic & Fallback Parser
  // #/<chapter_id>/<sub_chapter_id>/<difficulty>/<nomor_soal>
  // or legacy #/<chapter_id>/<sub_chapter_id>/<nomor_soal>
  // -------------------------------------------------------------
  const parseHash = useCallback(
    (hashStr: string, cur: CurriculumChapter[]) => {
      if (!cur || cur.length === 0) return null;

      const fallbackChapter = cur[0];
      const fallbackSub = fallbackChapter.sub_chapters[0];
      const fallback = {
        chapterId: fallbackChapter.chapter_id,
        subChapterId: fallbackSub.sub_chapter_id,
        difficultyTab: 'STANDAR' as 'STANDAR' | 'HOTS',
        questionNumber: 1,
      };

      if (!hashStr || hashStr === '#' || hashStr === '#/' || hashStr.startsWith('#/soal/')) {
        return fallback;
      }

      // Format: #/chapterId/subChapterId/difficulty/questionNumber OR #/chapterId/subChapterId/questionNumber
      const cleaned = hashStr.replace(/^#\/?/, '');
      const parts = cleaned.split('/').filter(Boolean);

      if (parts.length < 2) {
        return fallback;
      }

      const chapterId = parts[0];
      const subChapterId = parts[1];

      let difficultyTab: 'STANDAR' | 'HOTS' = 'STANDAR';
      let questionNum = 1;

      if (parts.length >= 4) {
        difficultyTab = parts[2].toLowerCase() === 'hots' ? 'HOTS' : 'STANDAR';
        questionNum = parseInt(parts[3], 10);
      } else if (parts.length === 3) {
        if (parts[2].toLowerCase() === 'hots' || parts[2].toLowerCase() === 'standar') {
          difficultyTab = parts[2].toLowerCase() === 'hots' ? 'HOTS' : 'STANDAR';
          questionNum = 1;
        } else {
          // Legacy format: #/chapter/subchapter/questionNum
          questionNum = parseInt(parts[2], 10);
        }
      }

      const foundChapter = cur.find((c) => c.chapter_id === chapterId);
      if (!foundChapter) return fallback;

      const foundSub = foundChapter.sub_chapters.find((s) => s.sub_chapter_id === subChapterId);
      if (!foundSub) {
        return {
          chapterId: foundChapter.chapter_id,
          subChapterId: foundChapter.sub_chapters[0]?.sub_chapter_id || fallback.subChapterId,
          difficultyTab,
          questionNumber: 1,
        };
      }

      return {
        chapterId,
        subChapterId,
        difficultyTab,
        questionNumber: isNaN(questionNum) || questionNum < 1 ? 1 : questionNum,
      };
    },
    []
  );

  // Sync state when Hash changes or on initial curriculum load
  useEffect(() => {
    if (curriculum.length === 0) return;

    const handleHashSync = () => {
      if (isUpdatingHashInternally.current) {
        isUpdatingHashInternally.current = false;
        return;
      }

      const parsed = parseHash(window.location.hash, curriculum);
      if (parsed) {
        setActiveChapterId(parsed.chapterId);
        setActiveSubChapterId(parsed.subChapterId);
        setActiveDifficultyTab(parsed.difficultyTab);
        setCurrentQuestionNumber(parsed.questionNumber);

        // Ensure hash matches standard structure
        const targetHash = `#/${parsed.chapterId}/${parsed.subChapterId}/${parsed.difficultyTab.toLowerCase()}/${parsed.questionNumber}`;
        if (window.location.hash !== targetHash) {
          isUpdatingHashInternally.current = true;
          window.location.replace(targetHash);
        }
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, [curriculum, parseHash]);

  // Update hash when user interacts with navigation
  const navigateTo = useCallback(
    (
      chapterId: string,
      subChapterId: string,
      difficultyTab: 'STANDAR' | 'HOTS',
      questionNum: number
    ) => {
      setActiveChapterId(chapterId);
      setActiveSubChapterId(subChapterId);
      setActiveDifficultyTab(difficultyTab);
      setCurrentQuestionNumber(questionNum);

      const newHash = `#/${chapterId}/${subChapterId}/${difficultyTab.toLowerCase()}/${questionNum}`;
      if (window.location.hash !== newHash) {
        isUpdatingHashInternally.current = true;
        window.location.hash = newHash;
      }
    },
    []
  );

  // -------------------------------------------------------------
  // Fetch questions for active sub-chapter
  // -------------------------------------------------------------
  useEffect(() => {
    if (!activeSubChapterId) return;

    // Check if already in cache
    if (questionsCache[activeSubChapterId]) {
      return;
    }

    const loadQuestions = async () => {
      setIsQuestionsLoading(true);
      const pathsToTry = [
        resolveAssetPath(`data/questions/${activeSubChapterId}.json`),
        `./data/questions/${activeSubChapterId}.json`,
        `/data/questions/${activeSubChapterId}.json`,
      ];

      for (const p of pathsToTry) {
        try {
          const res = await fetch(p);
          if (res.ok) {
            const data: Question[] = await res.json();
            if (Array.isArray(data)) {
              setQuestionsCache((prev) => ({
                ...prev,
                [activeSubChapterId]: data,
              }));
              setIsQuestionsLoading(false);
              return;
            }
          }
        } catch {
          // continue
        }
      }

      // If empty or 404, fallback to empty array
      setQuestionsCache((prev) => ({
        ...prev,
        [activeSubChapterId]: [],
      }));
      setIsQuestionsLoading(false);
    };

    loadQuestions();
  }, [activeSubChapterId, questionsCache]);

  // Current active questions list
  const activeQuestions = useMemo(() => {
    return questionsCache[activeSubChapterId] || [];
  }, [questionsCache, activeSubChapterId]);

  // Split Standar and HOTS
  const standarQuestions = useMemo(() => {
    return activeQuestions.filter((q) => {
      const diff = q.difficulty || (q.cognitiveLevel === 'Penalaran (HOTS)' ? 'HOTS' : 'STANDAR');
      return diff === 'STANDAR';
    });
  }, [activeQuestions]);

  const hotsQuestions = useMemo(() => {
    return activeQuestions.filter((q) => {
      const diff = q.difficulty || (q.cognitiveLevel === 'Penalaran (HOTS)' ? 'HOTS' : 'STANDAR');
      return diff === 'HOTS';
    });
  }, [activeQuestions]);

  const displayedQuestions = useMemo(() => {
    return activeDifficultyTab === 'HOTS' ? hotsQuestions : standarQuestions;
  }, [activeDifficultyTab, hotsQuestions, standarQuestions]);

  // Active titles for Kop Document
  const activeChapterObj = useMemo(() => {
    return curriculum.find((c) => c.chapter_id === activeChapterId) || curriculum[0];
  }, [curriculum, activeChapterId]);

  const activeSubChapterObj = useMemo(() => {
    return (
      activeChapterObj?.sub_chapters.find((s) => s.sub_chapter_id === activeSubChapterId) ||
      activeChapterObj?.sub_chapters[0]
    );
  }, [activeChapterObj, activeSubChapterId]);

  // Theme effect
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

  // -------------------------------------------------------------
  // User interaction handlers
  // -------------------------------------------------------------
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
    (questionId: string, statementId: string, value: string | boolean) => {
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

  // Navigation handlers
  const handleSelectDifficultyTab = useCallback(
    (tab: 'STANDAR' | 'HOTS') => {
      navigateTo(activeChapterId, activeSubChapterId, tab, 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [activeChapterId, activeSubChapterId, navigateTo]
  );

  const handleSelectChapter = useCallback(
    (chapterId: string) => {
      const targetChap = curriculum.find((c) => c.chapter_id === chapterId);
      const targetSub = targetChap?.sub_chapters[0]?.sub_chapter_id || '';
      navigateTo(chapterId, targetSub, activeDifficultyTab, 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [curriculum, activeDifficultyTab, navigateTo]
  );

  const handleSelectSubChapter = useCallback(
    (subChapterId: string) => {
      navigateTo(activeChapterId, subChapterId, activeDifficultyTab, 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [activeChapterId, activeDifficultyTab, navigateTo]
  );

  const handleSelectQuestionNumber = useCallback(
    (questionNum: number) => {
      navigateTo(activeChapterId, activeSubChapterId, activeDifficultyTab, questionNum);
      if (displayMode === 'continuous') {
        const el = document.getElementById(`soal-${questionNum}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [activeChapterId, activeSubChapterId, activeDifficultyTab, displayMode, navigateTo]
  );

  const totalAnswered = useMemo(() => {
    return Object.values(userAnswers).filter(
      (a) =>
        a.status === 'answered' ||
        a.status === 'doubt' ||
        !!a.selectedOption ||
        (a.selectedOptions && a.selectedOptions.length > 0) ||
        (a.categoryAnswers && Object.keys(a.categoryAnswers).length > 0)
    ).length;
  }, [userAnswers]);

  if (isCurriculumLoading) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-100 dark:bg-[#070B12] text-slate-800 dark:text-slate-200">
        <div className="w-12 h-12 rounded-2xl border-4 border-indigo-600 border-t-transparent animate-spin mb-4" />
        <h2 className="text-base font-bold font-mono">Memuat Master Kurikulum TKA...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-slate-100 dark:bg-[#070B12] text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors flex flex-col items-stretch">
      {/* 1. TWO-TIER STICKY TOP NAVBAR (8 Bab & 24 Sub-Bab + STANDAR/HOTS SWITCH) */}
      <PdfTopNavbar
        curriculum={curriculum}
        activeChapterId={activeChapterId}
        activeSubChapterId={activeSubChapterId}
        activeDifficultyTab={activeDifficultyTab}
        onSelectDifficultyTab={handleSelectDifficultyTab}
        standarCount={standarQuestions.length}
        hotsCount={hotsQuestions.length}
        currentQuestionNumber={currentQuestionNumber}
        subChapterQuestions={displayedQuestions}
        onSelectChapter={handleSelectChapter}
        onSelectSubChapter={handleSelectSubChapter}
        onSelectQuestionNumber={handleSelectQuestionNumber}
        userAnswers={userAnswers}
        displayMode={displayMode}
        onToggleDisplayMode={() =>
          setDisplayMode((prev) => (prev === 'continuous' ? 'single' : 'continuous'))
        }
        zoomLevel={zoomLevel}
        onZoomIn={() => setZoomLevel((prev) => Math.min(120, prev + 10))}
        onZoomOut={() => setZoomLevel((prev) => Math.max(90, prev - 10))}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        allExpanded={allExpanded}
        onToggleAllExpanded={() => setAllExpanded((prev) => !prev)}
        onOpenEvaluation={() => setIsEvaluationModalOpen(true)}
        totalAnswered={totalAnswered}
      />

      {/* 2. MAIN CENTERED PDF DOCUMENT SHEET */}
      <main className="w-full max-w-full pb-16 flex flex-col items-center">
        {isQuestionsLoading ? (
          <div className="w-full max-w-4xl mx-auto px-4 py-16 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-xl border-4 border-indigo-500 border-t-transparent animate-spin mb-3" />
            <p className="text-xs font-mono font-semibold text-slate-500">
              Memuat butir soal sub-bab...
            </p>
          </div>
        ) : (
          <PdfDocumentSheet
            questions={displayedQuestions}
            activeChapterTitle={activeChapterObj?.title || '1. Bilangan Real'}
            activeSubChapterTitle={activeSubChapterObj?.title || '1.1 Eksponen & Bentuk Akar'}
            activeDifficultyTab={activeDifficultyTab}
            userAnswers={userAnswers}
            onSelectOption={handleSelectOption}
            onToggleMcmaOption={handleToggleMcmaOption}
            onSelectCategoryAnswer={handleSelectCategoryAnswer}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            displayMode={displayMode}
            currentIndex={Math.min(
              displayedQuestions.length > 0 ? displayedQuestions.length - 1 : 0,
              Math.max(0, currentQuestionNumber - 1)
            )}
            onSelectIndex={(idx) => handleSelectQuestionNumber(idx + 1)}
            globalExpandState={allExpanded}
            zoomLevel={zoomLevel}
          />
        )}
      </main>

      {/* 3. EVALUATION / SCORING MODAL */}
      <EvaluationModal
        isOpen={isEvaluationModalOpen}
        onClose={() => setIsEvaluationModalOpen(false)}
        questions={activeQuestions}
        userAnswers={userAnswers}
        timeSpentSeconds={timeSpentSeconds}
        onSelectQuestion={(targetQ) => {
          const targetDiff =
            targetQ.difficulty ||
            (targetQ.cognitiveLevel === 'Penalaran (HOTS)' ? 'HOTS' : 'STANDAR');
          const targetList = targetDiff === 'HOTS' ? hotsQuestions : standarQuestions;
          const idx = targetList.findIndex((q) => q.id === targetQ.id);
          const qNum = idx >= 0 ? idx + 1 : 1;
          navigateTo(activeChapterId, activeSubChapterId, targetDiff, qNum);
          setIsEvaluationModalOpen(false);
        }}
        onResetExam={() => {
          setUserAnswers({});
          setCurrentQuestionNumber(1);
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
