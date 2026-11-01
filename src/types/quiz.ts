export type QuestionType =
  | 'PG'
  | 'MCMA'
  | 'KATEGORI'
  | 'KECUKUPAN_DATA'
  | 'pg_single'
  | 'pgk_mcma'
  | 'pgk_kategori';

export type QuestionDifficulty = 'STANDAR' | 'HOTS';

export interface CurriculumSubChapter {
  sub_chapter_id: string;
  title: string;
}

export interface CurriculumChapter {
  chapter_id: string;
  title: string;
  sub_chapters: CurriculumSubChapter[];
}

export interface QuestionOptionItem {
  id: string; // 'A' | 'B' | 'C' | 'D' | 'E'
  label?: string;
  text: string;
  isCorrect?: boolean;
}

export interface CategoryStatement {
  id: string; // 'A' | 'B' | 'C'
  label?: string;
  statement?: string;
  text?: string;
  correctAnswer?: boolean | string;
}

export interface ExplanationStep {
  title: string;
  content: string;
  formula?: string;
}

export interface QuestionExplanation {
  summary?: string;
  steps?: ExplanationStep[];
  keyConcept?: string;
}

export interface Question {
  id: string;
  chapter_id: string;
  sub_chapter_id: string;
  question_type: QuestionType;
  difficulty: QuestionDifficulty;
  question_text: string;
  options: QuestionOptionItem[];
  correct_answer: string | string[] | Record<string, string | boolean>;
  explanation: string | QuestionExplanation;
  title?: string;
  number?: number;
  svgComponentId?: string;
  hint1?: string;
  hint2?: string;
  trap?: string;

  // Backwards compatibility helpers
  type?: QuestionType;
  scenario?: string;
  questionPrompt?: string;
  cognitiveLevel?: string;
  module?: string;
  package?: string;
  packageQuestionNumber?: number;
  categoryStatements?: CategoryStatement[];
}

export type ViewDisplayMode = 'continuous' | 'single';
export type AnswerStatus = 'unanswered' | 'doubt' | 'answered';

export interface UserAnswerRecord {
  questionId: string;
  status: AnswerStatus;
  selectedOption?: string; // for PG & KECUKUPAN_DATA
  selectedOptions?: string[]; // for MCMA
  categoryAnswers?: Record<string, string | boolean>; // for KATEGORI
}

export interface SubChapterSummary {
  subChapterId: string;
  subChapterTitle: string;
  chapterId: string;
  chapterTitle: string;
  totalQuestions: number;
  correctCount: number;
  answeredCount: number;
}
