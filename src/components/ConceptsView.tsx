import React, { useState, useMemo } from 'react';
import { conceptsData, ConceptItem } from '../data/conceptsData';
import { MathView } from './MathView';
import { ModuleCategory } from '../types/quiz';
import {
  BookOpen,
  Copy,
  Check,
  Lightbulb,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Search,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ConceptsViewProps {
  onSelectTopicToDrill: (moduleName: ModuleCategory) => void;
}

export const ConceptsView: React.FC<ConceptsViewProps> = ({ onSelectTopicToDrill }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedIntuitions, setExpandedIntuitions] = useState<Record<string, boolean>>({});

  // Filter concepts based on module tab and search text
  const filteredConcepts = useMemo(() => {
    let list: ConceptItem[] = [];
    conceptsData.forEach((group) => {
      if (selectedModuleId === 'all' || group.id === selectedModuleId) {
        list.push(...group.concepts);
      }
    });

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.intuition.toLowerCase().includes(q) ||
          c.trap.toLowerCase().includes(q) ||
          c.formulaLatex.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedModuleId, searchQuery]);

  const handleCopyLatex = (conceptId: string, latex: string) => {
    navigator.clipboard.writeText(latex);
    setCopiedId(conceptId);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const toggleIntuition = (id: string) => {
    setExpandedIntuitions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">
      {/* Header Info */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#111827] via-[#151D2F] to-[#1E1B4B] border border-[#1F2937] shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            Kartu Konsep &amp; Teorema Inti
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Bank Rumus, Intuisi &amp; Jebakan TKA
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Kuasai fondasi konseptual, pahami mengapa rumus berlaku secara matematis, dan hindari kesalahan umum (*TKA Traps*) pada asesmen penalaran kuantitatif.
          </p>
        </div>

        {/* Search input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari teorema, rumus, tag..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B0F19] border border-[#1F2937] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Module Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedModuleId('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            selectedModuleId === 'all'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-[#111827] text-slate-400 hover:text-white border border-[#1F2937]'
          }`}
        >
          Semua Modul ({conceptsData.reduce((acc, g) => acc + g.concepts.length, 0)})
        </button>
        {conceptsData.map((group) => (
          <button
            key={group.id}
            onClick={() => setSelectedModuleId(group.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedModuleId === group.id
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/30'
                : 'bg-[#111827] text-slate-400 hover:text-white border-[#1F2937]'
            }`}
          >
            {group.moduleName.split(' ')[0]} ({group.concepts.length})
          </button>
        ))}
      </div>

      {/* Concept Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredConcepts.map((item) => {
          const isCopied = copiedId === item.id;
          const isIntuitionOpen = expandedIntuitions[item.id] !== false; // default open

          return (
            <div
              key={item.id}
              className="rounded-3xl bg-[#111827] border border-[#1F2937] hover:border-slate-700 transition-all shadow-sm overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                {/* Header Tag & Module */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                    {item.module}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] bg-[#1F2937] text-slate-300 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-white">{item.title}</h3>

                {/* 1. Teorema / Rumus Utama Card */}
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[#151D2F] to-[#0D1321] border border-indigo-500/30 shadow-inner group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      Rumus / Teorema Kunci
                    </span>

                    {/* Copy LaTeX Button */}
                    <button
                      onClick={() => handleCopyLatex(item.id, item.formulaLatex)}
                      title="Salin notasi LaTeX"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#1F2937] hover:bg-[#374151] text-slate-300 hover:text-white text-[11px] transition-colors border border-slate-700"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Salin LaTeX</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Math Expression with KaTeX */}
                  <div className="py-2 text-center overflow-x-auto scrollbar-thin">
                    <MathView content={`$$${item.formulaLatex}$$`} />
                  </div>
                </div>

                {/* 2. Konsep Dasar / Intuisi (Collapsible) */}
                <div className="rounded-2xl border border-slate-800 bg-[#0B0F19]/60 overflow-hidden">
                  <button
                    onClick={() => toggleIntuition(item.id)}
                    className="w-full flex items-center justify-between p-3.5 text-left text-xs font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-indigo-500/20 text-indigo-400">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <span>Konsep Dasar &amp; Intuisi Mengapa Berlaku</span>
                    </div>
                    {isIntuitionOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {isIntuitionOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60">
                      <MathView content={item.intuition} />
                    </div>
                  )}
                </div>

                {/* 3. Jebakan Umum (TKA Trap) */}
                <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/40 text-amber-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Jebakan Umum Soal (TKA Trap)</span>
                  </div>
                  <div className="text-xs text-slate-300 pl-6 leading-relaxed">
                    <MathView content={item.trap} />
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 py-3.5 bg-[#0B0F19] border-t border-[#1F2937] flex items-center justify-end">
                <button
                  onClick={() => onSelectTopicToDrill(item.module as ModuleCategory)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Latihan Soal Topik Ini <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredConcepts.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-[#111827] border border-[#1F2937]">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">Tidak ada konsep yang cocok</h3>
          <p className="text-xs text-slate-400 mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
        </div>
      )}
    </div>
  );
};
