import React from 'react';
import { Question, UserAnswerRecord, ModuleCategory } from '../types/quiz';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Award,
  Zap,
  Target,
  BarChart3,
  X,
} from 'lucide-react';

interface EvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  userAnswers: Record<string, UserAnswerRecord>;
  timeSpentSeconds: number;
  onSelectQuestion: (index: number) => void;
  onResetExam: () => void;
}

export const EvaluationModal: React.FC<EvaluationModalProps> = ({
  isOpen,
  onClose,
  questions,
  userAnswers,
  timeSpentSeconds,
  onSelectQuestion,
  onResetExam,
}) => {
  if (!isOpen) return null;

  // Grade calculation
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  // Module breakdown tracking
  const moduleStats: Record<string, { total: number; correct: number }> = {};

  questions.forEach((q) => {
    if (!moduleStats[q.module]) {
      moduleStats[q.module] = { total: 0, correct: 0 };
    }
    moduleStats[q.module].total += 1;

    const answer = userAnswers[q.id];
    if (!answer || answer.status === 'unanswered') {
      unansweredCount++;
      return;
    }

    let isCorrect = false;

    if (q.type === 'pg_single') {
      isCorrect = answer.selectedOption === q.correctAnswer;
    } else if (q.type === 'pgk_mcma') {
      const correctArr = Array.isArray(q.correctAnswer) ? q.correctAnswer : [];
      const userArr = answer.selectedOptions || [];
      isCorrect =
        correctArr.length === userArr.length &&
        correctArr.every((item) => userArr.includes(item));
    } else if (q.type === 'pgk_kategori') {
      const correctObj = q.correctAnswer as Record<string, boolean>;
      const userObj = answer.categoryAnswers || {};
      const keys = Object.keys(correctObj);
      isCorrect =
        keys.length > 0 &&
        keys.every((key) => userObj[key] === correctObj[key]);
    }

    if (isCorrect) {
      correctCount++;
      moduleStats[q.module].correct += 1;
    } else {
      wrongCount++;
    }
  });

  const totalQuestions = questions.length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  // Minutes and seconds spent
  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;
  const timeFormatted = `${minutes}m ${seconds}s`;

  // Performance tier
  let tierLabel = 'Perlu Pendalaman Konsep';
  let tierColor = 'text-rose-600 dark:text-rose-400';
  let badgeBg = 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800';

  if (scorePercent >= 85) {
    tierLabel = 'Istimewa / Sangat Menguasai (HOTS Master)';
    tierColor = 'text-emerald-600 dark:text-emerald-400';
    badgeBg = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800';
  } else if (scorePercent >= 70) {
    tierLabel = 'Kompeten / Lulus Ambang Batas Nasional';
    tierColor = 'text-teal-600 dark:text-teal-400';
    badgeBg = 'bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800';
  } else if (scorePercent >= 50) {
    tierLabel = 'Cukup / Perlu Latihan Variasi Soal';
    tierColor = 'text-amber-600 dark:text-amber-400';
    badgeBg = 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800';
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-2xl w-full p-6 sm:p-8 my-8 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Celebration & Badge */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 text-white flex items-center justify-center shadow-lg shadow-teal-500/25">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Hasil Rekapitulasi Asesmen TKA
          </h2>
          <div className={`inline-block mt-2 px-3.5 py-1 rounded-full text-xs font-bold border ${badgeBg} ${tierColor}`}>
            {tierLabel}
          </div>
        </div>

        {/* Big Score Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-3.5 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-500/20 text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Skor Akhir
            </div>
            <div className="text-2xl sm:text-3xl font-black text-teal-700 dark:text-teal-300 mt-0.5">
              {scorePercent}
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Skala 0 - 100</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-500/20 text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Benar
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-700 dark:text-emerald-300 mt-0.5">
              {correctCount}
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">dari {totalQuestions} Soal</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-500/20 text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Salah / Lewat
            </div>
            <div className="text-2xl sm:text-3xl font-black text-rose-700 dark:text-rose-300 mt-0.5">
              {wrongCount + unansweredCount}
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">{unansweredCount} belum dijawab</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Waktu Ujian
            </div>
            <div className="text-lg sm:text-xl font-black text-slate-800 dark:text-slate-200 mt-1">
              {timeFormatted}
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Durasi simulasi</div>
          </div>
        </div>

        {/* Module Performance Breakdown */}
        <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-teal-500" />
            Distribusi Penguasaan per Modul Materi
          </h4>
          <div className="space-y-2.5">
            {Object.entries(moduleStats).map(([modName, stats]) => {
              const pct = Math.round((stats.correct / stats.total) * 100);
              return (
                <div key={modName} className="text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 truncate max-w-[280px]">
                      {modName}
                    </span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {stats.correct}/{stats.total} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        pct >= 75 ? 'bg-emerald-500' : pct >= 50 ? 'bg-teal-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Review Grid */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            Klik Nomor Soal untuk Membuka Pembahasan:
          </div>
          <div className="grid grid-cols-6 sm:grid-cols-9 gap-1.5 max-h-36 overflow-y-auto p-1">
            {questions.map((q, idx) => {
              const answer = userAnswers[q.id];
              let isCorrect = false;
              let isAnswered = answer && answer.status !== 'unanswered';

              if (isAnswered) {
                if (q.type === 'pg_single') isCorrect = answer.selectedOption === q.correctAnswer;
                else if (q.type === 'pgk_mcma') {
                  const cArr = Array.isArray(q.correctAnswer) ? q.correctAnswer : [];
                  const uArr = answer.selectedOptions || [];
                  isCorrect = cArr.length === uArr.length && cArr.every((x) => uArr.includes(x));
                } else if (q.type === 'pgk_kategori') {
                  const cObj = q.correctAnswer as Record<string, boolean>;
                  const uObj = answer.categoryAnswers || {};
                  isCorrect = Object.keys(cObj).every((k) => uObj[k] === cObj[k]);
                }
              }

              let bg = 'border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500';
              if (isAnswered && isCorrect) bg = 'border-emerald-500 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold';
              else if (isAnswered && !isCorrect) bg = 'border-rose-500 bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold';

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onSelectQuestion(idx);
                    onClose();
                  }}
                  className={`h-9 rounded-lg border text-xs flex items-center justify-center transition-transform hover:scale-110 active:scale-95 ${bg}`}
                  title={`Soal ${q.number}: ${isCorrect ? 'Benar' : isAnswered ? 'Salah' : 'Belum Dijawab'}`}
                >
                  {q.number}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => {
              onResetExam();
              onClose();
            }}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Jawaban &amp; Uji Ulang</span>
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <BookOpen className="w-4 h-4" />
            <span>Lanjut Review &amp; Pelajari Pembahasan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
