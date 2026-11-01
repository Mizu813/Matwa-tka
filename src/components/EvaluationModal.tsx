import React from 'react';
import {
  Question,
  UserAnswerRecord,
  CurriculumChapter,
} from '../types/quiz';
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
  Clock,
} from 'lucide-react';

interface EvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  userAnswers: Record<string, UserAnswerRecord>;
  timeSpentSeconds: number;
  onSelectQuestion: (question: Question, index: number) => void;
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

  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  // Chapter breakdown stats
  const chapterStats: Record<string, { total: number; correct: number; answered: number }> = {};

  questions.forEach((q) => {
    const chapKey = q.chapter_id || 'Umum';
    if (!chapterStats[chapKey]) {
      chapterStats[chapKey] = { total: 0, correct: 0, answered: 0 };
    }
    chapterStats[chapKey].total += 1;

    const answer = userAnswers[q.id];
    const isAnswered =
      answer &&
      (answer.status === 'answered' ||
        answer.status === 'doubt' ||
        !!answer.selectedOption ||
        (answer.selectedOptions && answer.selectedOptions.length > 0) ||
        (answer.categoryAnswers && Object.keys(answer.categoryAnswers).length > 0));

    if (!isAnswered) {
      unansweredCount++;
      return;
    }

    chapterStats[chapKey].answered += 1;

    const qType = q.question_type || q.type || 'PG';
    let isCorrect = false;

    if (qType === 'PG' || qType === 'KECUKUPAN_DATA' || qType === 'pg_single') {
      isCorrect = answer.selectedOption === q.correct_answer;
    } else if (qType === 'MCMA' || qType === 'pgk_mcma') {
      const correctArr = Array.isArray(q.correct_answer)
        ? q.correct_answer
        : [q.correct_answer as string];
      const userArr = answer.selectedOptions || [];
      isCorrect =
        correctArr.length === userArr.length &&
        correctArr.every((item) => userArr.includes(item)) &&
        userArr.every((item) => correctArr.includes(item));
    } else if (qType === 'KATEGORI' || qType === 'pgk_kategori') {
      const correctObj = (q.correct_answer || {}) as Record<string, any>;
      const userObj = answer.categoryAnswers || {};
      const keys = Object.keys(correctObj);
      isCorrect =
        keys.length > 0 &&
        keys.every((key) => {
          const u = String(userObj[key] ?? '').toLowerCase();
          const c = String(correctObj[key] ?? '').toLowerCase();
          const norm = (v: string) =>
            v === 'true' || v === 'benar' ? 'b' : v === 'false' || v === 'salah' ? 's' : v;
          return norm(u) === norm(c);
        });
    }

    if (isCorrect) {
      correctCount++;
      chapterStats[chapKey].correct += 1;
    } else {
      wrongCount++;
    }
  });

  const totalQuestions = questions.length;
  const scorePercent =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                Rekap Hasil Asesmen Mandiri
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Statistik akurasi jawaban dan waktu pengerjaan soal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Big Score Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                Skor Akhir Siswa
              </span>
              <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                  {scorePercent}
                </span>
                <span className="text-lg font-bold text-slate-400">/ 100</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {scorePercent >= 80
                  ? '🌟 Luar biasa! Penguasaan materi HOTS sangat matang.'
                  : scorePercent >= 60
                  ? '👍 Bagus! Perdalam kembali analisis jebakan soal.'
                  : '💡 Tetap semangat! Tinjau kembali tahapan langkah pada kunci solusi.'}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-2 w-full sm:w-auto font-mono text-xs">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <div>
                  <div className="font-black text-sm">{correctCount}</div>
                  <div className="text-[10px]">Benar</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-500" />
                <div>
                  <div className="font-black text-sm">{wrongCount}</div>
                  <div className="text-[10px]">Salah</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                <div>
                  <div className="font-black text-sm">{unansweredCount}</div>
                  <div className="text-[10px]">Belum Diisi</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-500" />
                <div>
                  <div className="font-black text-sm">{formatTime(timeSpentSeconds)}</div>
                  <div className="text-[10px]">Waktu Ujian</div>
                </div>
              </div>
            </div>
          </div>

          {/* Question Review Grid */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
              Daftar Status Soal Sub-Bab Ini (Klik untuk Melompat ke Soal):
            </h4>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {questions.map((q, idx) => {
                const answer = userAnswers[q.id];
                const isAnswered =
                  answer &&
                  (answer.status === 'answered' ||
                    answer.status === 'doubt' ||
                    !!answer.selectedOption ||
                    (answer.selectedOptions && answer.selectedOptions.length > 0) ||
                    (answer.categoryAnswers && Object.keys(answer.categoryAnswers).length > 0));

                let badgeColor =
                  'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';

                if (isAnswered) {
                  badgeColor =
                    'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => onSelectQuestion(q, idx)}
                    className={`p-2.5 rounded-xl border text-xs font-mono flex flex-col items-center justify-center transition-all hover:scale-105 ${badgeColor}`}
                  >
                    <div className="flex items-center gap-1">
                      <span>#{idx + 1}</span>
                      <span className={`text-[9px] px-1 py-0.2 rounded font-bold ${
                        (q.difficulty || 'STANDAR') === 'HOTS'
                          ? 'bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300'
                          : 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300'
                      }`}>
                        {q.difficulty || 'STANDAR'}
                      </span>
                    </div>
                    <span className="text-[10px] mt-0.5 opacity-80">
                      {isAnswered ? 'Terisi' : 'Kosong'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-[#0E1424] flex items-center justify-between">
          <button
            onClick={onResetExam}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Jawaban Ujian</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-sm transition-all"
          >
            Tutup &amp; Lanjutkan Latihan
          </button>
        </div>
      </div>
    </div>
  );
};
