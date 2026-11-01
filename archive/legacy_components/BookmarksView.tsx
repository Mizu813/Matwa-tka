import React from 'react';
import { Question, UserAnswerRecord } from '../types/quiz';
import { Bookmark, ArrowRight, Trash2, CheckCircle2, AlertCircle, Layers } from 'lucide-react';

interface BookmarksViewProps {
  bookmarkedQuestions: Question[];
  userAnswers: Record<string, UserAnswerRecord>;
  onNavigateToQuestion: (questionNumber: number) => void;
  onToggleBookmark: (questionId: string) => void;
  onClearAllBookmarks: () => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  bookmarkedQuestions,
  userAnswers,
  onNavigateToQuestion,
  onToggleBookmark,
  onClearAllBookmarks,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#111827] via-[#151D2F] to-[#291B16] border border-amber-500/30 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold mb-2">
            <Bookmark className="w-3.5 h-3.5" />
            Bank Soal Sulit &amp; Review Mandiri
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Daftar Soal Ditandai ({bookmarkedQuestions.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Tinjau ulang soal-soal berkategori HOTS atau yang membutuhkan perhitungan bertahap sebelum menghadapi ujian sesungguhnya.
          </p>
        </div>

        {bookmarkedQuestions.length > 0 && (
          <button
            onClick={onClearAllBookmarks}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Hapus Semua Tanda
          </button>
        )}
      </div>

      {/* Bookmarked Questions List */}
      {bookmarkedQuestions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookmarkedQuestions.map((q) => {
            const ans = userAnswers[q.id];
            const isAnswered = ans?.status === 'answered' || ans?.status === 'doubt';

            return (
              <div
                key={q.id}
                className="p-5 rounded-3xl bg-[#111827] border border-[#1F2937] hover:border-amber-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
                      Soal #{q.number}
                    </span>
                    <button
                      onClick={() => onToggleBookmark(q.id)}
                      title="Hapus dari daftar ditandai"
                      className="p-1.5 rounded-lg text-amber-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                    >
                      <Bookmark className="w-4 h-4 fill-amber-400" />
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {q.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {q.scenario}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="px-2.5 py-0.5 rounded-lg bg-[#151D2F] text-[11px] text-slate-300 border border-slate-700">
                      {q.module}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-[#151D2F] text-[11px] text-indigo-400 border border-slate-700">
                      {q.cognitiveLevel}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1F2937] flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    {isAnswered ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Pernah Dijawab</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                        <span>Belum Dijawab</span>
                      </>
                    )}
                  </span>

                  <button
                    onClick={() => onNavigateToQuestion(q.number)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
                  >
                    Latih Soal <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-16 text-center rounded-3xl bg-[#111827] border border-[#1F2937]">
          <Bookmark className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">Belum Ada Soal yang Ditandai</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            Gunakan tombol bendera / bintang "Tandai Soal Sulit" saat berlatih untuk mengumpulkan soal-soal yang perlu direview kembali di sini.
          </p>
        </div>
      )}
    </div>
  );
};
