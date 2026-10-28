import React, { useState } from 'react';
import { MathView } from './MathView';
import { BookMarked, X, Search, Sparkles, Copy, Check } from 'lucide-react';

interface FormulaCheatsheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CheatsheetSection {
  title: string;
  category: string;
  formulas: Array<{ name: string; latex: string; note: string }>;
}

const cheatsheetData: CheatsheetSection[] = [
  {
    title: 'Aljabar & Program Linear',
    category: 'Aljabar',
    formulas: [
      {
        name: 'Invers Fungsi Rasional',
        latex: 'f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}, \\quad x \\neq \\frac{a}{c}',
        note: 'Tukar posisi diagonal a dan d disertai pembalikan tanda negatif.',
      },
      {
        name: 'Metode Titik Pojok Program Linear',
        latex: 'Z_{\\max} = \\max\\{f(x_i, y_i)\\} \\quad \\forall (x_i, y_i) \\in \\text{Titik Pojok Daerah Feasible}',
        note: 'Nilai optimum selalu terjadi pada salah satu titik sudut daerah penyelesaian.',
      },
      {
        name: 'Sistem Persamaan Linear Dua Variabel',
        latex: '\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases} \\implies x = \\frac{c_1 b_2 - c_2 b_1}{a_1 b_2 - a_2 b_1}',
        note: 'Gunakan metode eliminasi-substitusi terarah untuk menentukan titik potong.',
      },
    ],
  },
  {
    title: 'Barisan, Deret & Finansial',
    category: 'Barisan & Deret',
    formulas: [
      {
        name: 'Pertumbuhan & Bunga Majemuk',
        latex: 'M_n = M_0 (1 + i)^n \\quad \\text{atau} \\quad P_t = P_0 (1 - r)^t \\; (\\text{Peluruhan})',
        note: 'Bunga ditambahkan ke pokok pada setiap akhir periode bertahap.',
      },
      {
        name: 'Deret Aritmetika Bertahap dengan Overlap',
        latex: 'L_n = n \\cdot L_1 - (n - 1) \\cdot \\text{overlap}',
        note: 'Setiap segmen tambahan bertambah sebesar panjang modul dikurangi tumpang tindih.',
      },
      {
        name: 'Jumlah n Suku Pertama Deret Geometri',
        latex: 'S_n = \\frac{a(1 - r^n)}{1 - r} \\quad (r \\neq 1), \\qquad S_\\infty = \\frac{a}{1 - r} \\quad (|r| < 1)',
        note: 'Digunakan untuk akumulasi beban kumulatif bertingkat pada tumpuan.',
      },
    ],
  },
  {
    title: 'Geometri Dimensi Tiga & Bangun Datar',
    category: 'Geometri',
    formulas: [
      {
        name: 'Jarak Titik ke Garis pada Kubus Rusuk s',
        latex: 'd(P, g) = \\frac{2 \\times \\text{Luas}(\\Delta)}{\\text{Alas}}, \\quad \\text{Diag. Sisi} = s\\sqrt{2}, \\quad \\text{Diag. Ruang} = s\\sqrt{3}',
        note: 'Gunakan segitiga penolong yang memuat titik dan garis, lalu bandingkan luasnya.',
      },
      {
        name: 'Kesebangunan Segitiga Proposional',
        latex: '\\Delta ABC \\sim \\Delta ADE \\implies \\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}',
        note: 'Sisi-sisi yang bersesuaian memiliki rasio perbandingan yang konstan.',
      },
      {
        name: 'Dilatasi Faktor Skala Pusat Asal',
        latex: 'P(x, y) \\xrightarrow{[O, k]} P\'(kx, ky)',
        note: 'Seluruh koordinat titik dikalikan dengan faktor skala k.',
      },
    ],
  },
  {
    title: 'Trigonometri',
    category: 'Trigonometri',
    formulas: [
      {
        name: 'Rasio Sudut Tumpul Kuadran II',
        latex: '\\sin(180^\\circ - \\alpha) = +\\sin \\alpha, \\quad \\cos(180^\\circ - \\alpha) = -\\cos \\alpha, \\quad \\tan(180^\\circ - \\alpha) = -\\tan \\alpha',
        note: 'Hanya nilai sinus dan cosecan yang bernilai positif di Kuadran II.',
      },
      {
        name: 'Pemodelan Klinometer Elevasi',
        latex: 'h_{\\text{total}} = h_{\\text{mata}} + d \\cdot \\tan \\theta',
        note: 'Tinggi total adalah tinggi pandangan pengamat ditambah proyeksi vertikal tangen.',
      },
    ],
  },
  {
    title: 'Statistika & Analisis Data',
    category: 'Statistika',
    formulas: [
      {
        name: 'Rata-Rata Data Gabungan',
        latex: '\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2 + \\dots + n_k \\bar{x}_k}{n_1 + n_2 + \\dots + n_k}',
        note: 'Rata-rata tertimbang berdasarkan jumlah frekuensi masing-masing kelompok data.',
      },
      {
        name: 'Modus Data Kelompok',
        latex: 'M_o = T_b + \\left( \\frac{d_1}{d_1 + d_2} \\right) p',
        note: 'Tb = tepi bawah kelas modus, d1 = selisih frekuensi sebelum, d2 = selisih setelah.',
      },
    ],
  },
  {
    title: 'Peluang & Kombinatorika',
    category: 'Peluang',
    formulas: [
      {
        name: 'Aturan Perkalian Pengisian Tempat (Multi-Slot)',
        latex: 'N = n_1 \\times n_2 \\times n_3 \\times \\dots \\times n_k',
        note: 'Untuk variasi kode unik atau permutasi bertahap tanpa pengulangan elemen.',
      },
      {
        name: 'Peluang Komplemen & Bersyarat',
        latex: 'P(A^c) = 1 - P(A), \\qquad P(A \\cap B) = P(A) \\times P(B|A)',
        note: 'Gunakan komplemen ketika menghitung syarat minimal 1 agar lebih ringkas.',
      },
    ],
  },
];

export const FormulaCheatsheetModal: React.FC<FormulaCheatsheetModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (latex: string) => {
    navigator.clipboard.writeText(latex);
    setCopiedFormula(latex);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  const filteredSections = cheatsheetData
    .map((section) => ({
      ...section,
      formulas: section.formulas.filter(
        (f) =>
          f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.note.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.latex.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.category.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.formulas.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#111827] rounded-3xl border border-[#1F2937] shadow-2xl w-full max-w-4xl max-h-[88vh] flex flex-col overflow-hidden">
        {/* Header Modal */}
        <div className="p-5 border-b border-[#1F2937] flex items-center justify-between gap-3 bg-[#151D2F]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                Lembar Rumus &amp; Teorema Kunci TKA
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  Resmi
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Kompilasi rumus terpenting untuk menyelesaikan persoalan HOTS secara cepat
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

        {/* Search Bar */}
        <div className="p-4 border-b border-[#1F2937] bg-[#0B0F19]">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari rumus (misal: rasional, segitiga, bunga majemuk, modus)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#111827] border border-[#1F2937] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Content Formula Grid */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1">
          {filteredSections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  {section.title}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {section.formulas.map((item, fIdx) => {
                  const isCopied = copiedFormula === item.latex;
                  return (
                    <div
                      key={fIdx}
                      className="p-4 rounded-2xl border border-[#1F2937] bg-[#151D2F] hover:border-slate-700 transition-all space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="text-xs font-bold text-white">{item.name}</h5>
                          <button
                            onClick={() => handleCopy(item.latex)}
                            title="Salin LaTeX"
                            className="p-1 rounded text-slate-400 hover:text-white hover:bg-[#1F2937] transition-colors"
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#0B0F19] border border-slate-800 text-center overflow-x-auto my-1">
                          <MathView content={`$$${item.latex}$$`} />
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed italic">
                        💡 {item.note}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#1F2937] bg-[#151D2F] flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Tips: Pahami penalaran matematis di balik rumus, bukan sekadar menghafal.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
