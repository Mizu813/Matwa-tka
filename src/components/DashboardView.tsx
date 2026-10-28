import React from 'react';
import { Question, UserAnswerRecord, ModuleCategory, AppView } from '../types/quiz';
import {
  TrendingUp,
  Award,
  Clock,
  Bookmark,
  ArrowRight,
  Flame,
  AlertTriangle,
  PlayCircle,
  BookOpen,
  Cpu,
  Workflow,
  Box,
  Compass,
  BarChart3,
  Dice5,
  Layers,
  Sparkles,
} from 'lucide-react';

interface DashboardViewProps {
  questions: Question[];
  userAnswers: Record<string, UserAnswerRecord>;
  bookmarkedIds: string[];
  lastQuestionNumber: number;
  timeSpentSeconds: number;
  onNavigateToQuestion: (questionNumber: number) => void;
  onSelectView: (view: AppView) => void;
  onSelectTopic: (moduleName: ModuleCategory) => void;
}

const moduleIconMap: Record<string, React.ReactNode> = {
  'Aljabar & Sistem Persamaan/Pertidaksamaan': <Cpu className="w-5 h-5 text-indigo-400" />,
  'Fungsi & Relasi': <Workflow className="w-5 h-5 text-purple-400" />,
  'Barisan & Deret': <TrendingUp className="w-5 h-5 text-emerald-400" />,
  'Geometri & Pengukuran': <Box className="w-5 h-5 text-cyan-400" />,
  'Trigonometri': <Compass className="w-5 h-5 text-amber-400" />,
  'Statistika & Analisis Data': <BarChart3 className="w-5 h-5 text-rose-400" />,
  'Peluang & Kombinatorika': <Dice5 className="w-5 h-5 text-teal-400" />,
};

export const DashboardView: React.FC<DashboardViewProps> = ({
  questions,
  userAnswers,
  bookmarkedIds,
  lastQuestionNumber,
  timeSpentSeconds,
  onNavigateToQuestion,
  onSelectView,
  onSelectTopic,
}) => {
  const totalQuestions = questions.length;

  // Calculation for answered & accuracy
  let totalAnswered = 0;
  let totalCorrect = 0;
  let totalDoubt = 0;

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (!ans) return;

    if (ans.status === 'doubt') totalDoubt++;
    if (ans.status === 'answered' || ans.status === 'doubt') {
      totalAnswered++;

      // Check correctness
      if (q.type === 'pg_single' && ans.selectedOption === q.correctAnswer) {
        totalCorrect++;
      } else if (q.type === 'pgk_mcma' && Array.isArray(q.correctAnswer)) {
        const sel = ans.selectedOptions || [];
        const isMatch =
          sel.length === q.correctAnswer.length &&
          sel.every((item) => (q.correctAnswer as string[]).includes(item));
        if (isMatch) totalCorrect++;
      } else if (q.type === 'pgk_kategori' && typeof q.correctAnswer === 'object') {
        const catAns = ans.categoryAnswers || {};
        const isMatch = Object.entries(q.correctAnswer).every(
          ([key, val]) => catAns[key] === val
        );
        if (isMatch) totalCorrect++;
      }
    }
  });

  const accuracyRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const progressPercentage = Math.round((totalAnswered / totalQuestions) * 100);

  // Group stats by module
  const modulesList: ModuleCategory[] = [
    'Aljabar & Sistem Persamaan/Pertidaksamaan',
    'Fungsi & Relasi',
    'Barisan & Deret',
    'Geometri & Pengukuran',
    'Trigonometri',
    'Statistika & Analisis Data',
    'Peluang & Kombinatorika',
  ];

  const moduleStats = modulesList.map((modName) => {
    const modQuestions = questions.filter((q) => q.module === modName);
    const count = modQuestions.length;
    let modAnswered = 0;
    let modCorrect = 0;

    modQuestions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (ans && (ans.status === 'answered' || ans.status === 'doubt')) {
        modAnswered++;
        if (q.type === 'pg_single' && ans.selectedOption === q.correctAnswer) {
          modCorrect++;
        }
      }
    });

    const modAccuracy = modAnswered > 0 ? Math.round((modCorrect / modAnswered) * 100) : 0;
    return {
      moduleName: modName,
      total: count,
      answered: modAnswered,
      correct: modCorrect,
      accuracy: modAccuracy,
      completionRate: Math.round((modAnswered / count) * 100),
    };
  });

  // Identify weakest topic (lowest accuracy among attempted, or lowest completion)
  const weakestTopic = [...moduleStats].sort((a, b) => {
    if (a.answered > 0 && b.answered > 0) return a.accuracy - b.accuracy;
    return a.completionRate - b.completionRate;
  })[0];

  // Target resume question
  const resumeQuestion =
    questions.find((q) => q.number === lastQuestionNumber) || questions[0];

  // Format timer seconds into HH:MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Welcome Banner & Overview */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-[#111827] via-[#151D2F] to-[#1E1B4B] border border-[#1F2937] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Persiapan TKA Matematika Wajib
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Dashboard Pemantauan &amp; Analisis Belajar
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            Lacak progres pengerjaan bank soal HOTS, evaluasi kelemahan konsep aljabar hingga statistika, dan latih kesiapan ujian dengan simulasi berwaktu.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigateToQuestion(resumeQuestion.number)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <PlayCircle className="w-4 h-4" />
            Lanjutkan Soal #{resumeQuestion.number}
          </button>
          <button
            onClick={() => onSelectView('concepts')}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#1F2937] hover:bg-[#374151] text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            Bank Teorema
          </button>
        </div>

        {/* Ambient glow decoration */}
        <div className="absolute right-0 top-0 -mt-10 -mr-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Bento-Grid Section: High Level Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Penguasaan Soal */}
        <div className="p-5 rounded-2xl bg-[#111827] dark:bg-[#111827] border border-[#1F2937] dark:border-[#1F2937] shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Progres Soal Selesai
            </span>
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-white font-mono">
              {totalAnswered} <span className="text-base text-slate-500 font-normal">/ {totalQuestions}</span>
            </div>
            <div className="w-full bg-[#1F2937] rounded-full h-2 mt-3 overflow-hidden">
              <div
                className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 mt-1.5">
              <span>{progressPercentage}% selesai</span>
              <span>{totalQuestions - totalAnswered} soal tersisa</span>
            </div>
          </div>
        </div>

        {/* Card 2: Akurasi Jawaban */}
        <div className="p-5 rounded-2xl bg-[#111827] dark:bg-[#111827] border border-[#1F2937] dark:border-[#1F2937] shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Tingkat Akurasi
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-emerald-400 font-mono">
              {accuracyRate}%
            </div>
            <p className="text-xs text-slate-400 mt-2">
              {totalCorrect} dari {totalAnswered} jawaban terverifikasi benar secara matematis.
            </p>
          </div>
        </div>

        {/* Card 3: Soal Sulit Ditandai */}
        <div className="p-5 rounded-2xl bg-[#111827] dark:bg-[#111827] border border-[#1F2937] dark:border-[#1F2937] shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Soal Ditandai (Review)
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Bookmark className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-amber-400 font-mono">
              {bookmarkedIds.length} <span className="text-base text-slate-500 font-normal">soal</span>
            </div>
            <button
              onClick={() => onSelectView('bookmarks')}
              className="mt-3 text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 transition-colors"
            >
              Tinjau Soal Ditandai <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 4: Total Waktu Belajar */}
        <div className="p-5 rounded-2xl bg-[#111827] dark:bg-[#111827] border border-[#1F2937] dark:border-[#1F2937] shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Waktu Latihan
            </span>
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-purple-400 font-mono">
              {formatTime(timeSpentSeconds)}
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Gunakan stopwatch / timer Pomodoro untuk melatih efisiensi waktu 2 menit/soal.
            </p>
          </div>
        </div>
      </div>

      {/* Bento-Grid Row 2: "Continue Studying" & "Weakest Topic Recommendation" */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Quick Resume Card (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-[#111827] border border-[#1F2937] flex flex-col justify-between relative overflow-hidden group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Terakhir Diakses
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-950/60 text-indigo-300 border border-indigo-500/30">
                Soal #{resumeQuestion.number}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
              {resumeQuestion.title}
            </h3>
            <p className="text-xs text-slate-400 line-clamp-2">
              {resumeQuestion.scenario}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-[#151D2F] border border-slate-700 text-[11px] text-slate-300 font-medium">
                {resumeQuestion.module}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#151D2F] border border-slate-700 text-[11px] text-slate-300 font-medium">
                {resumeQuestion.cognitiveLevel}
              </span>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-[#1F2937] flex items-center justify-between">
            <div className="text-xs text-slate-400">
              Status:{' '}
              <span className="font-semibold text-slate-200">
                {userAnswers[resumeQuestion.id]?.status === 'answered'
                  ? '✅ Sudah Terjawab'
                  : userAnswers[resumeQuestion.id]?.status === 'doubt'
                  ? '⚠️ Ditandai Ragu'
                  : '⏳ Belum Dijawab'}
              </span>
            </div>
            <button
              onClick={() => onNavigateToQuestion(resumeQuestion.number)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors shadow-md shadow-indigo-600/20"
            >
              Lanjutkan Pengerjaan <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Weakest Topic Alert Card (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-br from-[#111827] to-[#1C1628] border border-amber-500/30 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Rekomendasi Penguatan Topik
                </span>
                <h4 className="text-base font-extrabold text-white mt-0.5">
                  {weakestTopic.moduleName}
                </h4>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Berdasarkan analisis pengerjaan, modul ini memiliki tingkat penyelesaian{' '}
              <span className="font-bold text-amber-400">{weakestTopic.completionRate}%</span> dengan akurasi{' '}
              <span className="font-bold text-amber-400">{weakestTopic.accuracy}%</span>. Disarankan mereview konsep teorema dan latihan soal pada topik ini.
            </p>

            <div className="p-3 rounded-xl bg-[#0B0F19]/80 border border-slate-800 text-[11px] text-slate-400">
              💡 <span className="font-semibold text-slate-200">Tips TKA:</span> Jangan lewatkan trik eliminasi cepat dan uji titik pojok pada pertidaksamaan sebelum menghitung.
            </div>
          </div>

          <div className="pt-4 mt-2">
            <button
              onClick={() => {
                onSelectTopic(weakestTopic.moduleName);
                onSelectView('drill');
              }}
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
            >
              Latih Modul Ini Sekarang <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bento-Grid Row 3: Syllabus Modules Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-extrabold text-white">Silabus Materi TKA Matematika Wajib</h3>
            <p className="text-xs text-slate-400">
              Pilih modul materi untuk memulai drilling soal terarah
            </p>
          </div>
          <button
            onClick={() => onSelectView('concepts')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
          >
            Lihat Semua Teorema <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {moduleStats.map((item, idx) => (
            <div
              key={item.moduleName}
              onClick={() => {
                onSelectTopic(item.moduleName);
                onSelectView('drill');
              }}
              className="p-5 rounded-2xl bg-[#111827] hover:bg-[#151D2F] border border-[#1F2937] hover:border-indigo-500/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-[#1F2937] group-hover:bg-indigo-600/20 transition-colors">
                    {moduleIconMap[item.moduleName]}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1F2937] text-slate-300 font-bold">
                    Bagian #{idx + 1}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                  {item.moduleName}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  {item.total} butir soal terstandarisasi HOTS
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1F2937]">
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>Progres</span>
                  <span className="font-mono font-bold text-slate-200">
                    {item.answered}/{item.total}
                  </span>
                </div>
                <div className="w-full bg-[#1F2937] rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-indigo-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${item.completionRate}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
