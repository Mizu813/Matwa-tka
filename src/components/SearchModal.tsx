import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Question } from '../types/quiz';
import { Search, X, Layers, ArrowRight, CornerDownLeft } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  onSelectQuestion: (questionNumber: number) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  questions,
  onSelectQuestion,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Filter questions
  const results = useMemo(() => {
    if (!query.trim()) {
      return questions.slice(0, 6); // show first few as recommendations
    }
    const q = query.toLowerCase();
    return questions.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.module.toLowerCase().includes(q) ||
        item.subCompetency.toLowerCase().includes(q) ||
        item.scenario.toLowerCase().includes(q) ||
        item.questionPrompt.toLowerCase().includes(q) ||
        item.number.toString() === q
    );
  }, [query, questions]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, results.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          onSelectQuestion(results[selectedIndex].number);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onSelectQuestion, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-3xl bg-[#111827] border border-[#1F2937] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#1F2937] flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Cari nomor soal (1-28), topik materi, atau kata kunci..."
            className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-500 hover:text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1F2937] text-xs font-semibold"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-[#1F2937]/50">
          {results.length > 0 ? (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectQuestion(item.number);
                    onClose();
                  }}
                  className={`p-3 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    isSelected ? 'bg-indigo-600/20 border border-indigo-500/50' : 'hover:bg-[#151D2F]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-300 flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 border border-indigo-500/30">
                      #{item.number}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                        <span className="truncate">{item.module}</span>
                        <span>•</span>
                        <span className="text-indigo-400 truncate">{item.subCompetency}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1F2937] text-slate-400 border border-slate-700">
                      {item.cognitiveLevel}
                    </span>
                    {isSelected && <CornerDownLeft className="w-4 h-4 text-indigo-400" />}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-400">
              <Layers className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="text-sm">Tidak ditemukan soal yang cocok dengan "{query}"</p>
            </div>
          )}
        </div>

        {/* Bottom helper info */}
        <div className="p-3 bg-[#0B0F19] border-t border-[#1F2937] flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#1F2937] text-slate-400 border border-slate-700">↑</kbd>{' '}
              <kbd className="px-1.5 py-0.5 rounded bg-[#1F2937] text-slate-400 border border-slate-700">↓</kbd> Navigasi
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#1F2937] text-slate-400 border border-slate-700">↵</kbd> Buka
            </span>
          </div>
          <span>Total {results.length} hasil</span>
        </div>
      </div>
    </div>
  );
};
