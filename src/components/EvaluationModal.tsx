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
  Flame,
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
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Format time
  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;
  const formattedTime = `${minutes} menit ${seconds} detik`;

  // Determine Predicate
  let predicate = 'Perlu Belajar Lebih Giat';
  let badgeColor = 'text-amber-400 bg-amber-950/40 border-amber-500/30';
  if (score >= 85) {
    predicate = 'Sangat Memuaskan (Level Mahir)';
    badgeColor = 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30';
  } else if (score >= 70) {
    predicate = 'Kompeten (Level Cakap)';
    badgeColor = 'text-indigo-400 bg-indigo-950/40 border-indigo-500/30';
  } else if (score >= 50) {
    predicate = 'Cukup (Level Dasar)';
    badgeColor = 'text-sky-400 bg-sky-950/40 border-sky-500/30';
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#111827] rounded-3xl border border-[#1F2937] shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header Modal */}
        <div className="p-6 border-b border-[#1F2937] bg-gradient-to-r from-[#151D2F] via-[#1E1B4B] to-[#151D2F] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-400 flex items-center justify-center shadow-lg">
              <Trophy className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white">
                Hasil Evaluasi Asesmen TKA Matematika
              </h3>
              <p className="text-xs text-slate-300">
                Laporan Kognitif Blueprint Berdasarkan Standar Ujian
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#1F2937] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Top Score Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#151D2F] to-[#0D1321] border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-indigo-600 text-white flex flex-col items-center justify-center shadow-xl shadow-indigo-600/30">
                <span className="text-3xl font-mono font-black">{score}</span>
                <span className="text-[10px] uppercase font-bold text-indigo-200">Skor / 100</span>
              </div>
              <div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border mb-1.5 ${badgeColor}`}>
                  <Award className="w-3.5 h-3.5" />
                  {predicate}
                </div>
                <div className="text-xs text-slate-400">
                  Total waktu pengerjaan: <span className="font-semibold text-slate-200">{formattedTime}</span>
                </div>
              </div>
            </div>

            {/* Quick stats mini cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-2xl bg-[#0B0F19] border border-slate-800 text-center">
                <div className="text-xs text-emerald-400 font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {correctCount}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Benar</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#0B0F19] border border-slate-800 text-center">
                <div className="text-xs text-rose-400 font-bold flex items-center justify-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> {wrongCount}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Salah</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#0B0F19] border border-slate-800 text-center">
                <div className="text-xs text-amber-400 font-bold flex items-center justify-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" /> {unansweredCount}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Kosong</div>
              </div>
            </div>
          </div>

          {/* Module Breakdown Section */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              Rincian Penguasaan Per Silabus Materi
            </h4>

            <div className="space-y-2.5">
              {Object.entries(moduleStats).map(([modName, stat]) => {
                const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                return (
                  <div
                    key={modName}
                    className="p-3.5 rounded-2xl border border-[#1F2937] bg-[#151D2F] flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white truncate max-w-md">{modName}</span>
                      <span className="font-mono font-bold text-indigo-400">
                        {stat.correct}/{stat.total} ({pct}%)
                      </span>
                    </div>
                    <div className="w-full bg-[#0B0F19] rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          pct >= 75 ? 'bg-emerald-500' : pct >= 50 ? 'bg-indigo-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#1F2937] bg-[#151D2F] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onResetExam();
              onClose();
            }}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-rose-500/30 text-rose-300 hover:bg-rose-500/10 text-xs font-bold transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Ulangi Ujian dari Awal
          </button>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 transition-all hover:scale-105"
          >
            <BookOpen className="w-4 h-4" />
            Tutup &amp; Pelajari Pembahasan Soal
          </button>
        </div>
      </div>
    </div>
  );
};
