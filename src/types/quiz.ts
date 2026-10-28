export type QuestionType = 'pg_single' | 'pgk_mcma' | 'pgk_kategori';

export type CognitiveLevel = 'Pengetahuan & Pemahaman' | 'Aplikasi' | 'Penalaran (HOTS)';

export type ModuleCategory =
  | 'Aljabar & Sistem Persamaan/Pertidaksamaan'
  | 'Fungsi & Relasi'
  | 'Barisan & Deret'
  | 'Geometri & Pengukuran'
  | 'Trigonometri'
  | 'Statistika & Analisis Data'
  | 'Peluang & Kombinatorika';

export interface OptionItem {
  id: string; // 'A' | 'B' | 'C' | 'D' | 'E'
  label: string;
  text: string;
  isCorrect?: boolean;
}

export interface CategoryStatement {
  id: string; // 'A' | 'B' | 'C'
  label: string;
  statement: string;
  correctAnswer: boolean; // true = Benar, false = Salah
}

export interface ExplanationStep {
  title: string;
  content: string;
  formula?: string;
}

export interface QuestionExplanation {
  summary: string;
  steps: ExplanationStep[];
  keyConcept: string;
}

export interface Question {
  id: string;
  number: number;
  module: ModuleCategory;
  competency: string;
  subCompetency: string;
  cognitiveLevel: CognitiveLevel;
  type: QuestionType;
  title: string;
  scenario: string;
  questionPrompt: string;
  svgComponentId: string;
  options?: OptionItem[]; // For pg_single and pgk_mcma
  categoryStatements?: CategoryStatement[]; // For pgk_kategori
  correctAnswer: string | string[] | Record<string, boolean>; // e.g. 'C', ['p1', 'p4'], { A: false, B: false, C: true }
  explanation: QuestionExplanation;
  hint1?: string; // Petunjuk 1: Konsep Inti / Teorema
  hint2?: string; // Petunjuk 2: Langkah Awal / Persamaan
  trap?: string; // Jebakan Umum TKA (Common Trap)
  optionExplanations?: Record<string, string>; // Penjelasan spesifik per pilihan A/B/C/D/E
}

export type AppView = 'dashboard' | 'drill' | 'concepts' | 'bookmarks' | 'exam';
export type TimerMode = 'stopwatch' | 'pomodoro';

export type AnswerStatus = 'unanswered' | 'doubt' | 'answered';

export interface UserAnswerRecord {
  questionId: string;
  status: AnswerStatus;
  selectedOption?: string; // for pg_single
  selectedOptions?: string[]; // for pgk_mcma
  categoryAnswers?: Record<string, boolean>; // for pgk_kategori { A: true, B: false }
}

export interface ModuleSummary {
  name: ModuleCategory;
  totalQuestions: number;
  correctCount: number;
  answeredCount: number;
}

export interface ExamResult {
  totalScore: number; // 0 - 100
  totalCorrect: number;
  totalQuestions: number;
  totalAnswered: number;
  totalDoubt: number;
  timeSpentSeconds: number;
  moduleBreakdown: ModuleSummary[];
}
