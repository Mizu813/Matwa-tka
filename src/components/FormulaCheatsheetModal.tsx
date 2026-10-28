import React, { useState } from 'react';
import { MathView } from './MathView';
import { BookMarked, X, Search, Sparkles } from 'lucide-react';

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
        latex: 'f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}',
        note: 'Tukar posisi a dan d dengan mengubah tanda negatifnya.',
      },
      {
        name: 'Metode Titik Pojok Program Linear',
        latex: 'Z_{\\max} = \\max\\{f(x_i, y_i)\\} \\quad \\forall (x_i, y_i) \\in \\text{Titik Sudut Feasible}',
        note: 'Nilai optimum selalu terjadi pada salah satu titik sudut daerah himpunan penyelesaian.',
      },
      {
        name: 'Komposisi Fungsi Balik',
        latex: '(f \\circ g)(x) = f(g(x)), \\quad g(x) = k \\implies f(k) = (f \\circ g)(x)',
        note: 'Cari nilai x yang menghasilkan input yang diinginkan.',
      },
    ],
  },
  {
    title: 'Barisan, Deret & Eksponen',
    category: 'Barisan & Deret',
    formulas: [
      {
        name: 'Bunga Majemuk Tahunan',
        latex: 'M_n = M_0 (1 + i)^n',
        note: 'Bunga ditambahkan ke pokok pada setiap akhir periode bertahap.',
      },
      {
        name: 'Suku ke-n Deret Aritmetika dengan Overlap',
        latex: 'L_n = L_1 + (n - 1)(L_1 - \\text{overlap})',
        note: 'Setiap segmen tambahan bertambah sebesar panjang modul dikurangi tumpang tindih.',
      },
      {
        name: 'Jumlah n Suku Pertama Deret Geometri',
        latex: 'S_n = \\frac{a(r^n - 1)}{r - 1} \\quad (r > 1)',
        note: 'Digunakan untuk akumulasi beban kumulatif bertingkat pada titik tumpuan.',
      },
      {
        name: 'Sifat Operasi Bilangan Berpangkat',
        latex: 'a^m \\times a^n = a^{m+n}, \\quad \\frac{a^m}{a^n} = a^{m-n}, \\quad (a^m)^n = a^{m \\cdot n}',
        note: 'Gunakan pengelompokan basis prima yang sama.',
      },
    ],
  },
  {
    title: 'Geometri Dimensi Tiga & Bangun Datar',
    category: 'Geometri',
    formulas: [
      {
        name: 'Diagonal Kubus dengan Rusuk s',
        latex: 'd_{\\text{bidang}} = s\\sqrt{2}, \\quad d_{\\text{ruang}} = s\\sqrt{3}',
        note: 'Panjang setengah diagonal bidang = \\frac{s}{2}\\sqrt{2}.',
      },
      {
        name: 'Jarak Titik Sudut ke Pusat Alas Kubus',
        latex: 'VO = \\sqrt{s^2 + \\left(\\frac{s\\sqrt{2}}{2}\\right)^2} = \\frac{s}{2}\\sqrt{6}',
        note: 'Segitiga siku-siku antara rusuk tegak dan setengah diagonal alas.',
      },
      {
        name: 'Optimasi Wadah Kotak Terbuka (Turunan)',
        latex: 'V(x) = x(s - 2x)^2 \\implies x_{\\text{opt}} = \\frac{s}{6}',
        note: 'Menghasilkan volume terbesar saat potongan sudut sebesar seperenam panjang sisi.',
      },
      {
        name: 'Transformasi Dilatasi Skala',
        latex: '(x\', y\') = (k \\cdot x, k \\cdot y), \\quad \\text{Luas}\' = k^2 \\cdot \\text{Luas}',
        note: 'Faktor skala k memperbesar dimensi linier sebesar k kali.',
      },
    ],
  },
  {
    title: 'Trigonometri',
    category: 'Trigonometri',
    formulas: [
      {
        name: 'Relasi Sudut Kuadran II (Sudut Tumpul)',
        latex: '\\sin(180^\\circ - \\theta) = \\sin \\theta, \\quad \\cos(180^\\circ - \\theta) = -\\cos \\theta',
        note: 'Sinus positif (+), Kosinus bertanda negatif (-).',
      },
      {
        name: 'Identitas Pythagoras Dasar',
        latex: '\\sin^2 A + \\cos^2 A = 1 \\implies \\cos A = -\\frac{\\sqrt{a^2 - 1}}{a} \\text{ jika } \\sin A = \\frac{1}{a}',
        note: 'Berlaku tanda negatif karena sudut tumpul berada pada kuadran kedua.',
      },
      {
        name: 'Rasio Sudut Istimewa Elevasi 60°',
        latex: '\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}, \\quad \\cos 60^\\circ = \\frac{1}{2}, \\quad \\tan 60^\\circ = \\sqrt{3}',
        note: 'Tinggi tangga/tiang h = L \\cdot \\sin 60^\\circ.',
      },
    ],
  },
  {
    title: 'Statistika & Peluang',
    category: 'Statistika & Peluang',
    formulas: [
      {
        name: 'Modus Data Kelompok (Histogram)',
        latex: 'M_o = T_b + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot c',
        note: 'Tb = tepi bawah kelas modus, d1 = selisih frekuensi sebelum, d2 = sesudah, c = panjang kelas.',
      },
      {
        name: 'Peluang Majemuk Inklusi-Eksklusi',
        latex: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
        note: 'Peluang kejadian saling bebas atau tidak saling lepas.',
      },
      {
        name: 'Aturan Pengisian Tempat (Kaidah Perkalian)',
        latex: 'N = n_1 \\times n_2 \\times n_3 \\times \\dots \\times n_k',
        note: 'Pengurangan 1 pilihan pada setiap slot jika syarat tanpa pengulangan (tanpa repetisi).',
      },
      {
        name: 'Rata-Rata Gabungan Sub-Kelompok',
        latex: '\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}',
        note: 'Digunakan untuk menghitung nilai akumulatif data tes susulan.',
      },
    ],
  },
];

export const FormulaCheatsheetModal: React.FC<FormulaCheatsheetModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  if (!isOpen) return null;

  const categories = ['Semua', 'Aljabar', 'Barisan & Deret', 'Geometri', 'Trigonometri', 'Statistika & Peluang'];

  const filteredSections = cheatsheetData
    .filter((sec) => selectedCategory === 'Semua' || sec.category === selectedCategory)
    .map((sec) => ({
      ...sec,
      formulas: sec.formulas.filter(
        (f) =>
          f.name.toLowerCase().includes(search.toLowerCase()) ||
          f.note.toLowerCase().includes(search.toLowerCase()) ||
          f.latex.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((sec) => sec.formulas.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full p-6 sm:p-7 my-8 relative overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Buku Rumus Cepat &amp; Teorema TKA
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Formula matematika esensial terstruktur sesuai kisi-kisi asesmen
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Pills */}
        <div className="py-3 space-y-2.5">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari rumus (contoh: modus, invers, trigonometri, kubus)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white font-bold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Formulas Content Area */}
        <div className="flex-1 overflow-y-auto space-y-5 pr-2 py-2">
          {filteredSections.map((sec, i) => (
            <div key={i} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{sec.title}</h4>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {sec.formulas.map((f, fi) => (
                  <div
                    key={fi}
                    className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-teal-500/40 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold text-teal-700 dark:text-teal-300">{f.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400">
                        {sec.category}
                      </span>
                    </div>
                    <div className="my-1.5 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80">
                      <MathView content={`$$${f.latex}$$`} />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">
                      💡 {f.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredSections.length === 0 && (
            <div className="text-center py-10 text-slate-400 text-xs">
              Tidak ada rumus yang cocok dengan kata kunci pencarian.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-xs font-bold transition-colors"
          >
            Tutup Lembar Rumus
          </button>
        </div>
      </div>
    </div>
  );
};
