import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import katex from 'katex';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Helper to test KaTeX in text
function checkLatex(text, context) {
  if (!text) return;
  const inlineMatches = text.match(/(?<!\$)\$([^\$\n]+?)\$(?!\$)/g) || [];
  inlineMatches.forEach((m) => {
    const expr = m.slice(1, -1).trim();
    try {
      katex.renderToString(expr, { displayMode: false, throwOnError: true });
    } catch (e) {
      throw new Error(`${context}: KaTeX inline error "${expr}" -> ${e.message}`);
    }
  });

  const displayMatches = text.match(/\$\$([\s\S]+?)\$\$/g) || [];
  displayMatches.forEach((m) => {
    const expr = m.slice(2, -2).trim();
    try {
      katex.renderToString(expr, { displayMode: true, throwOnError: true });
    } catch (e) {
      throw new Error(`${context}: KaTeX display error "${expr}" -> ${e.message}`);
    }
  });
}

// BATCH 1 QUESTIONS DATA
const batch1Data = {
  'eksponen-dan-akar': [
    {
      id: 'matwa-eksponen-dan-akar-11',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'eksponen-dan-akar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam pemodelan redaman sinyal gelombang elektromagnetik pada saluran transmisi telekomunikasi, relasi daya sinyal dinyatakan oleh persamaan eksponen:\n$$4^{2x - 1} = \\left(\\frac{1}{8}\\right)^{x - 3}$$\nNilai $x$ real yang memenuhi persamaan tersebut adalah ...',
      options: [
        { id: 'A', text: '$\\frac{7}{11}$' },
        { id: 'B', text: '$\\frac{11}{7}$' },
        { id: 'C', text: '$\\frac{9}{7}$' },
        { id: 'D', text: '$\\frac{7}{9}$' },
        { id: 'E', text: '$\\frac{11}{5}$' }
      ],
      correct_answer: 'B',
      hint: 'Ubah kedua ruas ke basis bilangan prima 2, lalu samakan pangkatnya: 4 = 2^2 dan 1/8 = 2^(-3).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Nyatakan kedua ruas ke basis yang sama, yaitu bilangan prima $2$:\n   $$4 = 2^2 \\implies 4^{2x - 1} = (2^2)^{2x - 1} = 2^{2(2x - 1)} = 2^{4x - 2}$$\n   $$\\frac{1}{8} = 2^{-3} \\implies \\left(\\frac{1}{8}\\right)^{x - 3} = (2^{-3})^{x - 3} = 2^{-3(x - 3)} = 2^{-3x + 9}$$\n\n2. Karena basis kedua ruas sudah sama ($2 > 0$ dan $2 \\neq 1$), samakan eksponennya:\n   $$4x - 2 = -3x + 9$$\n\n3. Selesaikan persamaan linear satu variabel:\n   $$4x + 3x = 9 + 2$$\n   $$7x = 11 \\implies x = \\frac{11}{7}$$\n\nJadi, nilai $x$ yang memenuhi adalah **B** ($\\frac{11}{7}$).'
    },
    {
      id: 'matwa-eksponen-dan-akar-12',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'eksponen-dan-akar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam perhitungan modulus elastisitas batang penguat struktur jembatan baja komposit, didapatkan besaran teknis yang memuat bentuk akar bertingkat $\\sqrt{11 - 2\\sqrt{30}}$. Bentuk sederhana dari ekspresi akar tersebut adalah ...',
      options: [
        { id: 'A', text: '$\\sqrt{6} - \\sqrt{5}$' },
        { id: 'B', text: '$\\sqrt{6} + \\sqrt{5}$' },
        { id: 'C', text: '$\\sqrt{10} - \\sqrt{3}$' },
        { id: 'D', text: '$\\sqrt{15} - \\sqrt{2}$' },
        { id: 'E', text: '$2\\sqrt{3} - \\sqrt{5}$' }
      ],
      correct_answer: 'A',
      hint: 'Gunakan identitas bentuk akar bertingkat \\sqrt{(a+b) - 2\\sqrt{ab}} = \\sqrt{a} - \\sqrt{b} dengan syarat a > b > 0.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Gunakan rumus penyederhanaan bentuk akar khusus:\n   $$\\sqrt{(a + b) \\pm 2\\sqrt{ab}} = \\sqrt{a} \\pm \\sqrt{b} \\quad (a > b)$$\n\n2. Cari dua bilangan $a$ dan $b$ sehingga:\n   - $a + b = 11$\n   - $a \\cdot b = 30$\n\n3. Bilangan yang memenuhi kedua syarat tersebut adalah $a = 6$ dan $b = 5$ ($6 > 5$):\n   - $6 + 5 = 11$\n   - $6 \\times 5 = 30$\n\n4. Substitusikan ke rumus:\n   $$\\sqrt{11 - 2\\sqrt{30}} = \\sqrt{(6 + 5) - 2\\sqrt{6 \\times 5}} = \\sqrt{6} - \\sqrt{5}$$\n\nJadi, bentuk sederhananya adalah **A** ($\\sqrt{6} - \\sqrt{5}$).'
    },
    {
      id: 'matwa-eksponen-dan-akar-13',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'eksponen-dan-akar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam kalibrasi dimensi presisi spindel mesin bubut CNC, nilai toleransi aksial dinyatakan oleh operasi aljabar bentuk akar campuran:\n$$\\frac{\\sqrt{54} - \\sqrt{24} + \\sqrt{96}}{\\sqrt{6}}$$\nHasil perhitungan paling sederhana dari ekspresi tersebut adalah ...',
      options: [
        { id: 'A', text: '$3$' },
        { id: 'B', text: '$4$' },
        { id: 'C', text: '$5$' },
        { id: 'D', text: '$6$' },
        { id: 'E', text: '$5\\sqrt{6}$' }
      ],
      correct_answer: 'C',
      hint: 'Faktorkan setiap bilangan di dalam tanda akar menjadi perkalian kuadrat sempurna dengan 6: 54 = 9*6, 24 = 4*6, 96 = 16*6.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Sederhanakan masing-masing bentuk akar pada pembilang:\n   - $\\sqrt{54} = \\sqrt{9 \\times 6} = 3\\sqrt{6}$\n   - $\\sqrt{24} = \\sqrt{4 \\times 6} = 2\\sqrt{6}$\n   - $\\sqrt{96} = \\sqrt{16 \\times 6} = 4\\sqrt{6}$\n\n2. Gabungkan suku-suku sejenis pada pembilang:\n   $$\\sqrt{54} - \\sqrt{24} + \\sqrt{96} = 3\\sqrt{6} - 2\\sqrt{6} + 4\\sqrt{6} = (3 - 2 + 4)\\sqrt{6} = 5\\sqrt{6}$$\n\n3. Bagi pembilang dengan penyebut:\n   $$\\frac{5\\sqrt{6}}{\\sqrt{6}} = 5$$\n\nJadi, hasil perhitungannya adalah **C** ($5$).'
    },
    {
      id: 'matwa-eksponen-dan-akar-14',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'eksponen-dan-akar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Massa satu atom karbon-12 terukur sebesar $1{,}9926 \\times 10^{-26}\\text{ kg}$. Dalam sebuah mikrosampel paduan grafit semikonduktor terdapat $6{,}0 \\times 10^{21}$ atom karbon. Massa total karbon dalam sampel tersebut jika dinyatakan dalam satuan miligram ($\\text{mg}$) adalah ...',
      options: [
        { id: 'A', text: '$1{,}19556\\text{ mg}$' },
        { id: 'B', text: '$11{,}9556\\text{ mg}$' },
        { id: 'C', text: '$119{,}556\\text{ mg}$' },
        { id: 'D', text: '$1195{,}56\\text{ mg}$' },
        { id: 'E', text: '$0{,}119556\\text{ mg}$' }
      ],
      correct_answer: 'C',
      hint: 'Kalikan massa satu atom dengan jumlah atom, lalu ubah dari kg ke mg dengan mengalikan 10^6.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung massa total dalam satuan kilogram ($\\text{kg}$):\n   $$m_{\\text{total}} = (1{,}9926 \\times 10^{-26}\\text{ kg}) \\times (6{,}0 \\times 10^{21})$$\n   $$m_{\\text{total}} = (1{,}9926 \\times 6{,}0) \\times 10^{-26 + 21} = 11{,}9556 \\times 10^{-5}\\text{ kg}$$\n\n2. Konversikan dari satuan $\\text{kg}$ ke $\\text{mg}$ ($1\\text{ kg} = 10^6\\text{ mg}$):\n   $$m_{\\text{total}} = (11{,}9556 \\times 10^{-5}) \\times 10^6\\text{ mg}$$\n   $$m_{\\text{total}} = 11{,}9556 \\times 10^1\\text{ mg} = 119{,}556\\text{ mg}$$\n\nJadi, massa total karbon dalam sampel adalah **C** ($119{,}556\\text{ mg}$).'
    },
    {
      id: 'matwa-eksponen-dan-akar-15',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'eksponen-dan-akar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui nilai $x = 27$ dan $y = 16$. Nilai numerik dari ekspresi aljabar eksponen rasional:\n$$\\frac{x^{\\frac{2}{3}} \\cdot y^{-\\frac{1}{4}}}{x^{-\\frac{1}{3}} + y^{\\frac{1}{2}}}$$\nadalah ...',
      options: [
        { id: 'A', text: '$\\frac{27}{26}$' },
        { id: 'B', text: '$\\frac{9}{13}$' },
        { id: 'C', text: '$\\frac{27}{13}$' },
        { id: 'D', text: '$\\frac{9}{26}$' },
        { id: 'E', text: '$\\frac{18}{13}$' }
      ],
      correct_answer: 'A',
      hint: 'Substitusikan x = 3^3 dan y = 2^4 untuk menyederhanakan tiap suku berpangkat pecahan terlebih dahulu.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Nyatakan $x = 27 = 3^3$ dan $y = 16 = 2^4$:\n   - $x^{2/3} = (3^3)^{2/3} = 3^{3 \\cdot \\frac{2}{3}} = 3^2 = 9$\n   - $y^{-1/4} = (2^4)^{-1/4} = 2^{4 \\cdot (-\\frac{1}{4})} = 2^{-1} = \\frac{1}{2}$\n   - $x^{-1/3} = (3^3)^{-1/3} = 3^{3 \\cdot (-\\frac{1}{3})} = 3^{-1} = \\frac{1}{3}$\n   - $y^{1/2} = (2^4)^{1/2} = 2^{4 \\cdot \\frac{1}{2}} = 2^2 = 4$\n\n2. Hitung pembilang:\n   $$\\text{Pembilang} = x^{2/3} \\cdot y^{-1/4} = 9 \\times \\frac{1}{2} = \\frac{9}{2}$$\n\n3. Hitung penyebut:\n   $$\\text{Penyebut} = x^{-1/3} + y^{1/2} = \\frac{1}{3} + 4 = \\frac{1}{3} + \\frac{12}{3} = \\frac{13}{3}$$\n\n4. Bagikan pembilang dengan penyebut:\n   $$\\frac{\\frac{9}{2}}{\\frac{13}{3}} = \\frac{9}{2} \\times \\frac{3}{13} = \\frac{27}{26}$$\n\nJadi, nilai numerik yang diperoleh adalah **A** ($\\frac{27}{26}$).'
    },
    {
      id: 'matwa-eksponen-dan-akar-16',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'eksponen-dan-akar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam analisis transfer impedansi rangkaian listrik bolak-balik (AC), rasio transfer tegangan dinyatakan dalam pecahan irasional:\n$$\\frac{6\\sqrt{2}}{\\sqrt{5} + \\sqrt{2}}$$\nBentuk rasional yang ekuivalen dengan pecahan tersebut adalah ...',
      options: [
        { id: 'A', text: '$2\\sqrt{10} - 4$' },
        { id: 'B', text: '$2\\sqrt{10} + 4$' },
        { id: 'C', text: '$6\\sqrt{10} - 12$' },
        { id: 'D', text: '$\\frac{2\\sqrt{10} - 4}{3}$' },
        { id: 'E', text: '$4\\sqrt{5} - 2$' }
      ],
      correct_answer: 'A',
      hint: 'Kalikan pembilang dan penyebut dengan bentuk sekawan penyebut yaitu (\\sqrt{5} - \\sqrt{2}).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Kalikan pembilang dan penyebut dengan sekawan $(\\sqrt{5} - \\sqrt{2})$:\n   $$\\frac{6\\sqrt{2}}{\\sqrt{5} + \\sqrt{2}} \\times \\frac{\\sqrt{5} - \\sqrt{2}}{\\sqrt{5} - \\sqrt{2}}$$\n\n2. Hitung penyebut dengan sifat $(a + b)(a - b) = a^2 - b^2$:\n   $$(\\sqrt{5})^2 - (\\sqrt{2})^2 = 5 - 2 = 3$$\n\n3. Hitung pembilang secara distributif:\n   $$6\\sqrt{2}(\\sqrt{5} - \\sqrt{2}) = 6\\sqrt{2 \\times 5} - 6(\\sqrt{2})^2 = 6\\sqrt{10} - 6(2) = 6\\sqrt{10} - 12$$\n\n4. Sederhanakan pecahan:\n   $$\\frac{6\\sqrt{10} - 12}{3} = \\frac{6\\sqrt{10}}{3} - \\frac{12}{3} = 2\\sqrt{10} - 4$$\n\nJadi, bentuk rasionalnya adalah **A** ($2\\sqrt{10} - 4$).'
    },
    {
      id: 'matwa-eksponen-dan-akar-17',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'eksponen-dan-akar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dua kultur mikroorganisme memiliki laju pertumbuhan populasi yang memenuhi persamaan eksponen:\n$$5^{x^2 - 3x - 10} = 7^{x^2 - 3x - 10}$$\nJumlah semua nilai $x$ real yang memenuhi persamaan tersebut adalah ...',
      options: [
        { id: 'A', text: '$-3$' },
        { id: 'B', text: '$2$' },
        { id: 'C', text: '$3$' },
        { id: 'D', text: '$5$' },
        { id: 'E', text: '$-2$' }
      ],
      correct_answer: 'C',
      hint: 'Jika a^f(x) = b^f(x) dengan a != b dan a, b > 0, maka eksponen f(x) harus bernilai 0.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Cermati sifat dasar persamaan eksponen:\n   Jika $a^{f(x)} = b^{f(x)}$ dengan basis berbeda ($a \\neq b$, $a, b > 0$), maka satu-satunya kemungkinan kedua ruas bernilai sama adalah ketika eksponennya bernilai nol ($a^0 = b^0 = 1$):\n   $$f(x) = 0$$\n\n2. Terapkan pada persamaan yang diberikan:\n   $$x^2 - 3x - 10 = 0$$\n\n3. Berdasarkan teorema Vieta untuk persamaan kuadrat $Ax^2 + Bx + C = 0$, jumlah akar-akar $x_1 + x_2$ adalah:\n   $$x_1 + x_2 = -\\frac{B}{A} = -\\frac{-3}{1} = 3$$\n\n   (Secara faktorisasi: $(x - 5)(x + 2) = 0 \\implies x_1 = 5$ atau $x_2 = -2$, sehingga $5 + (-2) = 3$).\n\nJadi, jumlah semua nilai $x$ yang memenuhi adalah **C** ($3$).'
    }
  ],

  'operasi-bilangan-real': [
    {
      id: 'matwa-operasi-bilangan-real-11',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'operasi-bilangan-real',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam pengujian deviasi ketebalan pelat baja tahan karat, toleransi ketebalan $x$ (dalam milimeter) terhadap standar ditentukan oleh persamaan nilai mutlak:\n$$|2x - 7| = 9$$\nHasil kali semua nilai $x$ real yang memenuhi persamaan tersebut adalah ...',
      options: [
        { id: 'A', text: '$-8$' },
        { id: 'B', text: '$-16$' },
        { id: 'C', text: '$8$' },
        { id: 'D', text: '$-4$' },
        { id: 'E', text: '$12$' }
      ],
      correct_answer: 'A',
      hint: 'Definisi nilai mutlak |f(x)| = c menghasilkan dua kasus: f(x) = c atau f(x) = -c.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Sesuai sifat nilai mutlak $|u| = c$ ($c \\ge 0$):\n   - Kasus 1: $2x - 7 = 9 \\implies 2x = 16 \\implies x_1 = 8$\n   - Kasus 2: $2x - 7 = -9 \\implies 2x = -2 \\implies x_2 = -1$\n\n2. Hitung hasil kali kedua nilai penyelesaian:\n   $$x_1 \\cdot x_2 = 8 \\cdot (-1) = -8$$\n\nJadi, hasil kali semua nilai $x$ yang memenuhi adalah **A** ($-8$).'
    },
    {
      id: 'matwa-operasi-bilangan-real-12',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'operasi-bilangan-real',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah toko perlengkapan laboratorium memberikan promo diskon bertingkat sebesar $20\\%$ kemudian diberikan potongan tambahan member sebesar $10\\%$ dari harga setelah diskon pertama. Jika seorang pembeli membayar sebesar $\\text{Rp}576.000$ untuk sebuah alat ukur, harga awal alat ukur tersebut sebelum diskon adalah ...',
      options: [
        { id: 'A', text: '$\\text{Rp}720.000$' },
        { id: 'B', text: '$\\text{Rp}750.000$' },
        { id: 'C', text: '$\\text{Rp}800.000$' },
        { id: 'D', text: '$\\text{Rp}820.000$' },
        { id: 'E', text: '$\\text{Rp}850.000$' }
      ],
      correct_answer: 'C',
      hint: 'Harga akhir = Harga awal * (1 - 0,20) * (1 - 0,10). Cari harga awal dengan membagi harga akhir dengan 0,72.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Misalkan harga awal alat adalah $P$.\n\n2. Hitung faktor pengali diskon bertingkat:\n   - Diskon pertama $20\\%$: sisa pembayaran $= 100\\% - 20\\% = 80\\% = 0{,}80$\n   - Diskon kedua $10\\%$: sisa pembayaran $= 100\\% - 10\\% = 90\\% = 0{,}90$\n\n3. Hubungan harga akhir dan harga awal:\n   $$\\text{Harga Akhir} = P \\times 0{,}80 \\times 0{,}90$$\n   $$576.000 = P \\times 0{,}72$$\n\n4. Hitung harga awal $P$:\n   $$P = \\frac{576.000}{0{,}72} = \\frac{57.600.000}{72} = \\text{Rp}800.000$$\n\nJadi, harga awal alat ukur tersebut adalah **C** ($\\text{Rp}800.000$).'
    },
    {
      id: 'matwa-operasi-bilangan-real-13',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'operasi-bilangan-real',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dua kendaraan patroli $A$ dan $B$ bergerak saling mendekat pada lintasan jalan raya lurus dengan jarak mula-mula $240\\text{ km}$. Kecepatan rata-rata kendaraan $A$ adalah $70\\text{ km/jam}$ dan kecepatan rata-rata kendaraan $B$ adalah $50\\text{ km/jam}$. Jika kedua kendaraan berangkat bersamaan pada pukul $08.15$, kedua kendaraan akan berpapasan pada pukul ...',
      options: [
        { id: 'A', text: '$09.45$' },
        { id: 'B', text: '$10.00$' },
        { id: 'C', text: '$10.15$' },
        { id: 'D', text: '$10.30$' },
        { id: 'E', text: '$10.45$' }
      ],
      correct_answer: 'C',
      hint: 'Waktu berpapasan saling mendekat t = Jarak / (v_A + v_B). Tambahkan waktu t ke jam keberangkatan.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Karena kedua kendaraan bergerak saling mendekat, kecepatan relatifnya adalah penjumlahan kedua kecepatan:\n   $$v_{\\text{relatif}} = v_A + v_B = 70\\text{ km/jam} + 50\\text{ km/jam} = 120\\text{ km/jam}$$\n\n2. Hitung waktu yang dibutuhkan hingga berpapasan:\n   $$t = \\frac{s}{v_{\\text{relatif}}} = \\frac{240\\text{ km}}{120\\text{ km/jam}} = 2\\text{ jam}$$\n\n3. Tentukan waktu berpapasan:\n   $$\\text{Pukul } 08.15 + 2\\text{ jam} = \\text{Pukul } 10.15$$\n\nJadi, kedua kendaraan berpapasan pada pukul **C** ($10.15$).'
    },
    {
      id: 'matwa-operasi-bilangan-real-14',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'operasi-bilangan-real',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam pemrosesan data numerik floating-point, hasil penjumlahan desimal berulang tak hingga dan desimal berhingga dihitung melalui ekspresi pecahan:\n$$0{,}363636\\dots + 0{,}25$$\nBentuk pecahan biasa paling sederhana dari hasil operasi tersebut adalah ...',
      options: [
        { id: 'A', text: '$\\frac{27}{44}$' },
        { id: 'B', text: '$\\frac{31}{44}$' },
        { id: 'C', text: '$\\frac{61}{100}$' },
        { id: 'D', text: '$\\frac{25}{44}$' },
        { id: 'E', text: '$\\frac{13}{22}$' }
      ],
      correct_answer: 'A',
      hint: 'Ubah desimal periodik 0,3636... menjadi pecahan 36/99 = 4/11, dan 0,25 menjadi 1/4.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Konversikan desimal berulang $x = 0{,}363636\\dots$ ke bentuk pecahan:\n   - $100x = 36{,}3636\\dots$\n   - $x = 0{,}3636\\dots$\n   - $99x = 36 \\implies x = \\frac{36}{99} = \\frac{4}{11}$\n\n2. Konversikan $0{,}25$ ke pecahan biasa:\n   $$0{,}25 = \\frac{25}{100} = \\frac{1}{4}$$\n\n3. Jumlahkan kedua pecahan dengan menyamakan penyebut (KPK dari 11 dan 4 adalah 44):\n   $$\\frac{4}{11} + \\frac{1}{4} = \\frac{4 \\times 4 + 1 \\times 11}{44} = \\frac{16 + 11}{44} = \\frac{27}{44}$$\n\nJadi, bentuk pecahan paling sederhananya adalah **A** ($\\frac{27}{44}$).'
    },
    {
      id: 'matwa-operasi-bilangan-real-15',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'operasi-bilangan-real',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah tangki penampungan instalasi pengolahan air limbah dilengkapi dua pompa penguras. Pompa $A$ mampu mengosongkan tangki penuh dalam waktu $6\\text{ jam}$, sedangkan pompa $B$ mampu mengosongkannya dalam waktu $4\\text{ jam}$. Jika kedua pompa dioperasikan secara bersama-sama sejak awal, waktu yang dibutuhkan hingga tangki kosong seluruhnya adalah ...',
      options: [
        { id: 'A', text: '$2\\text{ jam } 15\\text{ menit}$' },
        { id: 'B', text: '$2\\text{ jam } 24\\text{ menit}$' },
        { id: 'C', text: '$2\\text{ jam } 30\\text{ menit}$' },
        { id: 'D', text: '$2\\text{ jam } 40\\text{ menit}$' },
        { id: 'E', text: '$3\\text{ jam } 00\\text{ menit}$' }
      ],
      correct_answer: 'B',
      hint: 'Laju bersama = 1/t_A + 1/t_B = 1/6 + 1/4. Waktu bersama t = 1 / Laju bersama.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Tentukan laju kerja masing-masing pompa per jam:\n   - Laju pompa $A$: $r_A = \\frac{1}{6}\\text{ tangki/jam}$\n   - Laju pompa $B$: $r_B = \\frac{1}{4}\\text{ tangki/jam}$\n\n2. Tentukan laju gabungan saat kedua pompa bekerja serempak:\n   $$r_{\\text{gabungan}} = \\frac{1}{6} + \\frac{1}{4} = \\frac{2 + 3}{12} = \\frac{5}{12}\\text{ tangki/jam}$$\n\n3. Waktu yang diperlukan untuk mengosongkan $1$ tangki penuh:\n   $$t = \\frac{1}{r_{\\text{gabungan}}} = \\frac{12}{5}\\text{ jam} = 2{,}4\\text{ jam}$$\n\n4. Ubah desimal jam ke menit:\n   $$2{,}4\\text{ jam} = 2\\text{ jam} + (0{,}4 \\times 60)\\text{ menit} = 2\\text{ jam } 24\\text{ menit}$$\n\nJadi, waktu yang dibutuhkan adalah **B** ($2\\text{ jam } 24\\text{ menit}$).'
    },
    {
      id: 'matwa-operasi-bilangan-real-16',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'operasi-bilangan-real',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Seorang karyawan menyisihkan sebagian pendapatannya ke dalam rekening tabungan rencana setiap bulan. Pada bulan pertama ia menyetor $\\text{Rp}300.000$, dan setiap bulan berikutnya setoran bertambah secara konstan sebesar $\\text{Rp}50.000$ dari bulan sebelumnya. Total akumulasi uang yang berhasil disetorkan selama $1\\text{ tahun}$ pertama ($12\\text{ bulan}$) adalah ...',
      options: [
        { id: 'A', text: '$\\text{Rp}6.600.000$' },
        { id: 'B', text: '$\\text{Rp}6.900.000$' },
        { id: 'C', text: '$\\text{Rp}7.200.000$' },
        { id: 'D', text: '$\\text{Rp}7.500.000$' },
        { id: 'E', text: '$\\text{Rp}6.750.000$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan rumus deret aritmetika S_n = n/2 * (2a + (n - 1)b) dengan a = 300.000, b = 50.000, dan n = 12.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Pola tabungan membentuk deret aritmetika dengan:\n   - Suku pertama ($a$) $= 300.000$\n   - Beda ($b$) $= 50.000$\n   - Jumlah bulan ($n$) $= 12$\n\n2. Gunakan rumus jumlah $n$ suku pertama deret aritmetika:\n   $$S_n = \\frac{n}{2} [2a + (n - 1)b]$$\n   $$S_{12} = \\frac{12}{2} [2(300.000) + (12 - 1)(50.000)]$$\n   $$S_{12} = 6 [600.000 + 11(50.000)]$$\n   $$S_{12} = 6 [600.000 + 550.000] = 6 [1.150.000] = 6.900.000$$\n\nJadi, total tabungan karyawan tersebut adalah **B** ($\\text{Rp}6.900.000$).'
    },
    {
      id: 'matwa-operasi-bilangan-real-17',
      chapter_id: 'bilangan-real',
      sub_chapter_id: 'operasi-bilangan-real',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam kalibrasi sensor suhu ruangan server, batas toleransi fluktuasi suhu $x$ (dalam derajad Celcius) memenuhi pertidaksamaan nilai mutlak:\n$$|3x - 2| \\le 7$$\nHimpunan semua nilai $x$ real yang memenuhi pertidaksamaan tersebut adalah ...',
      options: [
        { id: 'A', text: '$-\\frac{5}{3} \\le x \\le 3$' },
        { id: 'B', text: '$-3 \\le x \\le \\frac{5}{3}$' },
        { id: 'C', text: '$x \\le -\\frac{5}{3}$ atau $x \\ge 3$' },
        { id: 'D', text: '$-\\frac{7}{3} \\le x \\le 3$' },
        { id: 'E', text: '$-2 \\le x \\le 3$' }
      ],
      correct_answer: 'A',
      hint: 'Sifat pertidaksamaan nilai mutlak |u| <= c (dengan c > 0) ekuivalen dengan -c <= u <= c.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Terapkan sifat pertidaksamaan nilai mutlak $|u| \\le c \\iff -c \\le u \\le c$:\n   $$-7 \\le 3x - 2 \\le 7$$\n\n2. Tambahkan $2$ pada ketiga ruas:\n   $$-7 + 2 \\le 3x \\le 7 + 2$$\n   $$-5 \\le 3x \\le 9$$\n\n3. Bagi ketiga ruas dengan $3$ ($3 > 0$, tanda pertidaksamaan tetap):\n   $$-\\frac{5}{3} \\le x \\le 3$$\n\nJadi, himpunan penyelesaiannya adalah **A** ($-\\frac{5}{3} \\le x \\le 3$).'
    }
  ],

  'sistem-persamaan-linear': [
    {
      id: 'matwa-sistem-persamaan-linear-11',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-persamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam pemodelan laju reaksi kimia dua reaktan tak nol $x > 0$ dan $y > 0$, konsentrasi zat memenuhi sistem persamaan pecahan aljabar:\n$$\\begin{cases} \\frac{2}{x} + \\frac{3}{y} = 8 \\\\[2pt] \\frac{5}{x} - \\frac{2}{y} = 1 \\end{cases}$$\nNilai dari $x + y$ adalah ...',
      options: [
        { id: 'A', text: '$1$' },
        { id: 'B', text: '$\\frac{3}{2}$' },
        { id: 'C', text: '$2$' },
        { id: 'D', text: '$\\frac{5}{2}$' },
        { id: 'E', text: '$\\frac{4}{3}$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan pemisalan variabel baru u = 1/x dan v = 1/y untuk mengubahnya menjadi SPLDV linear biasa.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Lakukan substitusi variabel $u = \\frac{1}{x}$ dan $v = \\frac{1}{y}$:\n   $$\\begin{cases} 2u + 3v = 8 \\quad \\text{...(1)} \\\\ 5u - 2v = 1 \\quad \\text{...(2)} \\end{cases}$$\n\n2. Samakan koefisien $v$ dengan eliminasi:\n   - Kalikan pers (1) dengan $2$: $4u + 6v = 16$\n   - Kalikan pers (2) dengan $3$: $15u - 6v = 3$\n   - Jumlahkan kedua persamaan:\n     $$19u = 19 \\implies u = 1$$\n\n3. Cari nilai $v$ dengan substitusi $u = 1$ ke pers (1):\n   $$2(1) + 3v = 8 \\implies 3v = 6 \\implies v = 2$$\n\n4. Kembalikan ke variabel semula $x$ dan $y$:\n   $$u = \\frac{1}{x} = 1 \\implies x = 1$$\n   $$v = \\frac{1}{y} = 2 \\implies y = \\frac{1}{2}$$\n\n5. Hitung nilai $x + y$:\n   $$x + y = 1 + \\frac{1}{2} = \\frac{3}{2}$$\n\nJadi, nilai $x + y$ adalah **B** ($\\frac{3}{2}$).'
    },
    {
      id: 'matwa-sistem-persamaan-linear-12',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-persamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Empat tahun yang lalu, umur seorang ayah adalah empat kali umur anaknya. Enam tahun yang akan datang, umur ayah menjadi dua kali umur anaknya ditambah $6\\text{ tahun}$. Umur ayah sekarang adalah ...',
      options: [
        { id: 'A', text: '$32\\text{ tahun}$' },
        { id: 'B', text: '$36\\text{ tahun}$' },
        { id: 'C', text: '$40\\text{ tahun}$' },
        { id: 'D', text: '$44\\text{ tahun}$' },
        { id: 'E', text: '$48\\text{ tahun}$' }
      ],
      correct_answer: 'B',
      hint: 'Buat model matematika umur ayah A dan anak B sekarang: (A - 4) = 4(B - 4) dan (A + 6) = 2(B + 6) + 6.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Misalkan umur ayah sekarang $= A$ dan umur anak sekarang $= B$.\n\n2. Susun model matematika dari kalimat soal:\n   - Empat tahun lalu: $A - 4 = 4(B - 4) \\implies A - 4 = 4B - 16 \\implies A - 4B = -12$ ...(1)\n   - Enam tahun mendatang: $A + 6 = 2(B + 6) + 6 \\implies A + 6 = 2B + 12 + 6 \\implies A - 2B = 12$ ...(2)\n\n3. Kurangkan pers (2) dengan pers (1):\n   $$(A - 2B) - (A - 4B) = 12 - (-12)$$\n   $$2B = 24 \\implies B = 12\\text{ tahun}$$\n\n4. Substitusikan $B = 12$ ke pers (2) untuk mendapatkan $A$:\n   $$A - 2(12) = 12 \\implies A - 24 = 12 \\implies A = 36\\text{ tahun}$$\n\nJadi, umur ayah sekarang adalah **B** ($36\\text{ tahun}$).'
    },
    {
      id: 'matwa-sistem-persamaan-linear-13',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-persamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah lahan penjemuran hasil pertanian berbentuk persegi panjang memiliki keliling $76\\text{ meter}$. Jika ukuran panjang lahan tersebut $6\\text{ meter}$ lebih panjang daripada lebarnya, luas lahan penjemuran tersebut adalah ...',
      options: [
        { id: 'A', text: '$336\\text{ m}^2$' },
        { id: 'B', text: '$348\\text{ m}^2$' },
        { id: 'C', text: '$352\\text{ m}^2$' },
        { id: 'D', text: '$360\\text{ m}^2$' },
        { id: 'E', text: '$364\\text{ m}^2$' }
      ],
      correct_answer: 'C',
      hint: 'Keliling persegi panjang K = 2(p + l) = 76 sehingga p + l = 38. Diketahui p - l = 6.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Misalkan panjang lahan $= p$ dan lebar $= l$.\n\n2. Susun sistem persamaan:\n   - Keliling: $2(p + l) = 76 \\implies p + l = 38$ ...(1)\n   - Selisih: $p - l = 6$ ...(2)\n\n3. Jumlahkan kedua persamaan untuk mencari $p$:\n   $$2p = 44 \\implies p = 22\\text{ m}$$\n\n4. Substitusi $p = 22$ ke pers (1) untuk mencari $l$:\n   $$22 + l = 38 \\implies l = 16\\text{ m}$$\n\n5. Hitung luas lahan ($L = p \\times l$):\n   $$L = 22\\text{ m} \\times 16\\text{ m} = 352\\text{ m}^2$$\n\nJadi, luas lahan tersebut adalah **C** ($352\\text{ m}^2$).'
    },
    {
      id: 'matwa-sistem-persamaan-linear-14',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-persamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah gedung pertunjukan teater seni menjual tiga kategori tiket masuk: Reguler ($x$), Deluxe ($y$), dan VIP ($z$).\n- Pembelian $2$ tiket Reguler, $1$ tiket Deluxe, dan $1$ tiket VIP seharga $\\text{Rp}140.000$.\n- Pembelian $1$ tiket Reguler, $2$ tiket Deluxe, dan $1$ tiket VIP seharga $\\text{Rp}160.000$.\n- Pembelian $1$ tiket Reguler, $1$ tiket Deluxe, dan $2$ tiket VIP seharga $\\text{Rp}180.000$.\nHarga satuan untuk satu tiket kategori VIP ($z$) adalah ...',
      options: [
        { id: 'A', text: '$\\text{Rp}40.000$' },
        { id: 'B', text: '$\\text{Rp}50.000$' },
        { id: 'C', text: '$\\text{Rp}60.000$' },
        { id: 'D', text: '$\\text{Rp}70.000$' },
        { id: 'E', text: '$\\text{Rp}80.000$' }
      ],
      correct_answer: 'C',
      hint: 'Jumlahkan ketiga persamaan untuk memperoleh nilai x + y + z, lalu kurangkan persamaan ketiga dengan (x + y + z).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Susun sistem persamaan tiga variabel:\n   $$\\begin{cases} 2x + y + z = 140.000 \\quad \\text{...(1)} \\\\ x + 2y + z = 160.000 \\quad \\text{...(2)} \\\\ x + y + 2z = 180.000 \\quad \\text{...(3)} \\end{cases}$$\n\n2. Jumlahkan ketiga persamaan tersebut:\n   $$(2x + y + z) + (x + 2y + z) + (x + y + 2z) = 140.000 + 160.000 + 180.000$$\n   $$4x + 4y + 4z = 480.000$$\n   Bagi dengan $4$:\n   $$x + y + z = 120.000 \\quad \\text{...(4)}$$\n\n3. Kurangkan pers (3) dengan pers (4):\n   $$(x + y + 2z) - (x + y + z) = 180.000 - 120.000$$\n   $$z = 60.000$$\n\nJadi, harga tiket VIP adalah **C** ($\\text{Rp}60.000$).'
    },
    {
      id: 'matwa-sistem-persamaan-linear-15',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-persamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan sistem persamaan linear dua variabel sebagai berikut:\n$$\\begin{cases} 3x - 2y = 7 \\\\ kx + 4y = 5 \\end{cases}$$\nSistem persamaan linear tersebut tidak memiliki penyelesaian (kedua garis saling sejajar dan tidak berimpit) apabila nilai konstanta $k$ bernilai ...',
      options: [
        { id: 'A', text: '$-6$' },
        { id: 'B', text: '$6$' },
        { id: 'C', text: '$-4$' },
        { id: 'D', text: '$4$' },
        { id: 'E', text: '$-3$' }
      ],
      correct_answer: 'A',
      hint: 'Syarat SPLDV tidak memiliki penyelesaian adalah a1/a2 = b1/b2 != c1/c2.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Untuk SPLDV $a_1 x + b_1 y = c_1$ dan $a_2 x + b_2 y = c_2$, syarat kedua garis sejajar (tidak ada penyelesaian) adalah:\n   $$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$$\n\n2. Identifikasi koefisien:\n   - $a_1 = 3, b_1 = -2, c_1 = 7$\n   - $a_2 = k, b_2 = 4, c_2 = 5$\n\n3. Samakan rasio koefisien variabel:\n   $$\\frac{3}{k} = \\frac{-2}{4}$$\n   $$\\frac{3}{k} = -\\frac{1}{2} \\implies k = 3 \\times (-2) = -6$$\n\n4. Verifikasi syarat konstanta:\n   $$\\frac{c_1}{c_2} = \\frac{7}{5} \\neq -\\frac{1}{2} \\quad (\\text{terpenuhi})$$\n\nJadi, nilai $k$ adalah **A** ($-6$).'
    },
    {
      id: 'matwa-sistem-persamaan-linear-16',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-persamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui sistem persamaan linear tiga variabel:\n$$\\begin{cases} x + 2y - z = 5 \\\\ 2x - y + 3z = 8 \\\\ 3x + y + 2z = a \\end{cases}$$\nJika persamaan ketiga merupakan kombinasi linier hasil penjumlahan langsung dari persamaan pertama dan kedua, maka nilai konstanta $a$ adalah ...',
      options: [
        { id: 'A', text: '$11$' },
        { id: 'B', text: '$12$' },
        { id: 'C', text: '$13$' },
        { id: 'D', text: '$14$' },
        { id: 'E', text: '$15$' }
      ],
      correct_answer: 'C',
      hint: 'Perhatikan ruas kiri persamaan ketiga: (x + 2x) + (2y - y) + (-z + 3z) = 3x + y + 2z.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Cermati ruas kiri persamaan ketiga:\n   $$(x + 2y - z) + (2x - y + 3z) = (1+2)x + (2-1)y + (-1+3)z = 3x + y + 2z$$\n\n2. Karena ruas kiri pers (3) persis merupakan penjumlahan dari ruas kiri pers (1) dan pers (2), maka ruas kanan persamaan ketiga ($a$) harus sama dengan penjumlahan ruas kanan pers (1) dan pers (2):\n   $$a = 5 + 8 = 13$$\n\nJadi, nilai konstanta $a$ adalah **C** ($13$).'
    },
    {
      id: 'matwa-sistem-persamaan-linear-17',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-persamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Seorang teknisi laboratorium farmasi harus meracik $100\\text{ liter}$ larutan antiseptik dengan konsentrasi alkohol $40\\%$. Bahan yang tersedia di laboratorium adalah larutan alkohol dengan konsentrasi $30\\%$ dan $70\\%$. Volume larutan alkohol $70\\%$ yang harus diambil untuk campuran tersebut adalah ...',
      options: [
        { id: 'A', text: '$20\\text{ liter}$' },
        { id: 'B', text: '$25\\text{ liter}$' },
        { id: 'C', text: '$30\\text{ liter}$' },
        { id: 'D', text: '$35\\text{ liter}$' },
        { id: 'E', text: '$40\\text{ liter}$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan persamaan total volume x + y = 100 dan persamaan zat murni 0,30x + 0,70y = 0,40(100).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Misalkan volume larutan $30\\% = x\\text{ liter}$ dan volume larutan $70\\% = y\\text{ liter}$.\n\n2. Susun sistem persamaan:\n   - Total volume: $x + y = 100 \\implies x = 100 - y$ ...(1)\n   - Total zat alkohol murni: $0{,}30x + 0{,}70y = 0{,}40(100) = 40$ ...(2)\n\n3. Substitusikan pers (1) ke pers (2):\n   $$0{,}30(100 - y) + 0{,}70y = 40$$\n   $$30 - 0{,}30y + 0{,}70y = 40$$\n   $$30 + 0{,}40y = 40$$\n   $$0{,}40y = 10 \\implies y = \\frac{10}{0{,}40} = 25\\text{ liter}$$\n\nJadi, volume larutan alkohol $70\\%$ yang diperlukan adalah **B** ($25\\text{ liter}$).'
    }
  ],

  'sistem-pertidaksamaan-linear': [
    {
      id: 'matwa-sistem-pertidaksamaan-linear-11',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-pertidaksamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Garis $g_1$ memotong sumbu-$Y$ di titik $(0, 4)$ dan sumbu-$X$ di titik $(6, 0)$. Garis $g_2$ memotong sumbu-$Y$ di titik $(0, 6)$ dan sumbu-$X$ di titik $(3, 0)$. Jika daerah himpunan penyelesaian memuat titik $(1, 1)$ dan berada di kuadran I, sistem pertidaksamaan yang memenuhi adalah ...',
      options: [
        { id: 'A', text: '$2x + 3y \\le 12,\\; 2x + y \\le 6,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'B', text: '$2x + 3y \\ge 12,\\; 2x + y \\le 6,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'C', text: '$3x + 2y \\le 12,\\; x + 2y \\le 6,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'D', text: '$2x + 3y \\le 12,\\; 2x + y \\ge 6,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'E', text: '$3x + 2y \\ge 12,\\; 2x + y \\le 6,\\; x \\ge 0,\\; y \\ge 0$' }
      ],
      correct_answer: 'A',
      hint: 'Gunakan persamaan garis ax + by = ab untuk garis yang memotong (0, a) dan (b, 0), lalu uji titik (1, 1).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Tentukan persamaan garis $g_1$ yang melalui $(0, 4)$ dan $(6, 0)$:\n   $$4x + 6y = 4 \\times 6 = 24 \\implies 2x + 3y = 12$$\n\n2. Tentukan persamaan garis $g_2$ yang melalui $(0, 6)$ dan $(3, 0)$:\n   $$6x + 3y = 6 \\times 3 = 18 \\implies 2x + y = 6$$\n\n3. Uji titik penyelesaian $(1, 1)$ pada kedua garis:\n   - Untuk $g_1$: $2(1) + 3(1) = 5 \\le 12 \\implies 2x + 3y \\le 12$\n   - Untuk $g_2$: $2(1) + 1 = 3 \\le 6 \\implies 2x + y \\le 6$\n\n4. Batasan kuadran I: $x \\ge 0$ dan $y \\ge 0$.\n\nJadi, sistem pertidaksamaannya adalah **A** ($2x + 3y \\le 12,\\; 2x + y \\le 6,\\; x \\ge 0,\\; y \\ge 0$).'
    },
    {
      id: 'matwa-sistem-pertidaksamaan-linear-12',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-pertidaksamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan sistem pertidaksamaan linear dua variabel:\n$$\\begin{cases} 3x + 2y \\le 18 \\\\ x + 4y \\ge 12 \\\\ x \\ge 0,\\; y \\ge 0 \\end{cases}$$\nTitik koordinat berikut yang terletak di DALAM daerah himpunan penyelesaian sistem pertidaksamaan tersebut adalah ...',
      options: [
        { id: 'A', text: '$(2, 1)$' },
        { id: 'B', text: '$(4, 3)$' },
        { id: 'C', text: '$(6, 2)$' },
        { id: 'D', text: '$(1, 2)$' },
        { id: 'E', text: '$(0, 10)$' }
      ],
      correct_answer: 'B',
      hint: 'Uji tiap titik koordinat pada opsi ke dalam kedua pertidaksamaan sekaligus.',
      explanation: 'Langkah-langkah penyelesaian:\n\nMari uji opsi titik ke dalam $3x + 2y \\le 18$ dan $x + 4y \\ge 12$:\n- Titik A $(2, 1)$: $3(2)+2(1) = 8 \\le 18$ (Benar), tetapi $2 + 4(1) = 6 < 12$ (Salah).\n- Titik B $(4, 3)$:\n  - $3(4) + 2(3) = 12 + 6 = 18 \\le 18$ (Memenuhi)\n  - $4 + 4(3) = 4 + 12 = 16 \\ge 12$ (Memenuhi)\n  - $4 \\ge 0$ dan $3 \\ge 0$ (Memenuhi)\n- Titik C $(6, 2)$: $3(6)+2(2) = 22 > 18$ (Salah).\n- Titik D $(1, 2)$: $1 + 4(2) = 9 < 12$ (Salah).\n- Titik E $(0, 10)$: $3(0)+2(10) = 20 > 18$ (Salah).\n\nJadi, titik yang berada di dalam daerah penyelesaian adalah **B** ($(4, 3)$).'
    },
    {
      id: 'matwa-sistem-pertidaksamaan-linear-13',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-pertidaksamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah lift kargo pabrik memiliki daya angkut aman maksimum sebesar $650\\text{ kg}$. Dua orang teknisi pemeliharaan dengan bobot masing-masing $70\\text{ kg}$ dan $80\\text{ kg}$ akan membawa sejumlah boks suku cadang berbobot seragam $25\\text{ kg}$ per boks. Banyak boks maksimum yang dapat diangkut lift dalam sekali jalan adalah ...',
      options: [
        { id: 'A', text: '$18\\text{ boks}$' },
        { id: 'B', text: '$19\\text{ boks}$' },
        { id: 'C', text: '$20\\text{ boks}$' },
        { id: 'D', text: '$21\\text{ boks}$' },
        { id: 'E', text: '$22\\text{ boks}$' }
      ],
      correct_answer: 'C',
      hint: 'Buat pertidaksamaan beban total: 70 + 80 + 25n <= 650, lalu selesaikan untuk n bilangan bulat.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Misalkan banyaknya boks yang diangkut adalah $n$ (dengan $n$ bilangan cacah).\n\n2. Susun pertidaksamaan kapasitas lift:\n   $$70 + 80 + 25n \\le 650$$\n   $$150 + 25n \\le 650$$\n\n3. Selesaikan pertidaksamaan:\n   $$25n \\le 650 - 150$$\n   $$25n \\le 500$$\n   $$n \\le \\frac{500}{25} = 20$$\n\nJadi, banyak boks maksimum yang dapat diangkut adalah **C** ($20\\text{ boks}$).'
    },
    {
      id: 'matwa-sistem-pertidaksamaan-linear-14',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-pertidaksamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Daerah himpunan penyelesaian dari sistem pertidaksamaan linear:\n$$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ y \\le 4 \\end{cases}$$\nmembentuk bangun datar trapesium siku-siku pada bidang Cartesius. Luas daerah penyelesaian tersebut adalah ...',
      options: [
        { id: 'A', text: '$14\\text{ satuan luas}$' },
        { id: 'B', text: '$16\\text{ satuan luas}$' },
        { id: 'C', text: '$18\\text{ satuan luas}$' },
        { id: 'D', text: '$20\\text{ satuan luas}$' },
        { id: 'E', text: '$24\\text{ satuan luas}$' }
      ],
      correct_answer: 'B',
      hint: 'Identifikasi titik pojok trapesium: (0,0), (6,0), (2,4), dan (0,4). Alas bawah = 6, alas atas = 2, tinggi = 4.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Tentukan titik-titik sudut daerah penyelesaian:\n   - Titik $O(0, 0)$ pada perpotongan sumbu-$X$ dan sumbu-$Y$.\n   - Titik $A(6, 0)$ pada perpotongan $x + y = 6$ dengan sumbu-$X$ ($y = 0$).\n   - Titik $B(2, 4)$ pada perpotongan $x + y = 6$ dengan $y = 4$ ($x = 6 - 4 = 2$).\n   - Titik $C(0, 4)$ pada perpotongan $y = 4$ dengan sumbu-$Y$ ($x = 0$).\n\n2. Bangun $OABC$ merupakan trapesium siku-siku dengan tinggi sepanjang sumbu-$Y$ ($t = 4$):\n   - Panjang sisi sejajar bawah ($OA$): $a = 6 - 0 = 6$\n   - Panjang sisi sejajar atas ($CB$): $b = 2 - 0 = 2$\n   - Tinggi trapesium ($OC$): $t = 4$\n\n3. Hitung luas trapesium:\n   $$\\text{Luas} = \\frac{a + b}{2} \\times t = \\frac{6 + 2}{2} \\times 4 = 4 \\times 4 = 16\\text{ satuan luas}$$\n\nJadi, luas daerah penyelesaian adalah **B** ($16\\text{ satuan luas}$).'
    },
    {
      id: 'matwa-sistem-pertidaksamaan-linear-15',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-pertidaksamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan sistem pertidaksamaan yang dibatasi oleh dua garis sejajar:\n$$\\begin{cases} -2 \\le x - y \\le 4 \\\\ 0 \\le x \\le 5 \\\\ y \\ge 0 \\end{cases}$$\nNilai ordinat $y$ maksimum yang mungkin dicapai pada daerah penyelesaian tersebut untuk absis $x = 5$ adalah ...',
      options: [
        { id: 'A', text: '$1$' },
        { id: 'B', text: '$3$' },
        { id: 'C', text: '$5$' },
        { id: 'D', text: '$7$' },
        { id: 'E', text: '$9$' }
      ],
      correct_answer: 'D',
      hint: 'Substitusikan x = 5 ke dalam pertidaksamaan -2 <= x - y <= 4, lalu selesaikan batas untuk y.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Substitusikan $x = 5$ ke pertidaksamaan rangkap $-2 \\le x - y \\le 4$:\n   $$-2 \\le 5 - y \\le 4$$\n\n2. Kurangkan $5$ pada ketiga ruas:\n   $$-2 - 5 \\le -y \\le 4 - 5$$\n   $$-7 \\le -y \\le -1$$\n\n3. Kalikan dengan $-1$ (balik tanda pertidaksamaan):\n   $$1 \\le y \\le 7$$\n\n4. Karena $y \\ge 0$, maka rentang nilai $y$ yang memenuhi adalah $[1, 7]$. Nilai $y$ maksimum adalah $7$.\n\nJadi, nilai $y$ maksimum adalah **D** ($7$).'
    },
    {
      id: 'matwa-sistem-pertidaksamaan-linear-16',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-pertidaksamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah truk boks logistik memiliki daya angkut berat maksimum $12\\text{ ton}$ ($12.000\\text{ kg}$) dan volume muatan maksimum $30\\text{ m}^3$. Barang tipe $A$ berbobot $300\\text{ kg}$ per boks dengan volume $0{,}5\\text{ m}^3$, sedangkan barang tipe $B$ berbobot $400\\text{ kg}$ per boks dengan volume $1\\text{ m}^3$. Jika truk mengangkut $x$ boks barang $A$ dan $y$ boks barang $B$, model sistem pertidaksamaan yang sesuai adalah ...',
      options: [
        { id: 'A', text: '$3x + 4y \\le 120,\\; x + 2y \\le 60,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'B', text: '$4x + 3y \\le 120,\\; 2x + y \\le 60,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'C', text: '$3x + 4y \\le 120,\\; 2x + y \\le 60,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'D', text: '$3x + 4y \\ge 120,\\; x + 2y \\ge 60,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'E', text: '$4x + 3y \\le 120,\\; x + 2y \\le 60,\\; x \\ge 0,\\; y \\ge 0$' }
      ],
      correct_answer: 'A',
      hint: 'Buat kendala berat: 300x + 400y <= 12000 (bagi 100), dan kendala volume: 0,5x + y <= 30 (kali 2).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Kendala daya angkut berat:\n   $$300x + 400y \\le 12.000$$\n   Bagi kedua ruas dengan $100$:\n   $$3x + 4y \\le 120$$\n\n2. Kendala volume ruang muatan:\n   $$0{,}5x + 1y \\le 30$$\n   Kalikan kedua ruas dengan $2$:\n   $$x + 2y \\le 60$$\n\n3. Kendala non-negatif jumlah boks:\n   $$x \\ge 0,\\; y \\ge 0$$\n\nJadi, model matematikanya adalah **A** ($3x + 4y \\le 120,\\; x + 2y \\le 60,\\; x \\ge 0,\\; y \\ge 0$).'
    },
    {
      id: 'matwa-sistem-pertidaksamaan-linear-17',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'sistem-pertidaksamaan-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Daerah himpunan penyelesaian dibatasi oleh dua garis perbatasan $3x + 4y = 24$ dan $x - 2y = -2$. Koordinat titik potong persekutuan dari kedua garis batas tersebut adalah ...',
      options: [
        { id: 'A', text: '$(2, 2)$' },
        { id: 'B', text: '$(4, 3)$' },
        { id: 'C', text: '$(3, 4)$' },
        { id: 'D', text: '$(4, 4)$' },
        { id: 'E', text: '$(6, 1)$' }
      ],
      correct_answer: 'B',
      hint: 'Eliminasi variabel x atau y dari kedua persamaan garis pembatas.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Diberikan dua persamaan garis:\n   - $3x + 4y = 24$ ...(1)\n   - $x - 2y = -2 \\implies x = 2y - 2$ ...(2)\n\n2. Substitusikan pers (2) ke pers (1):\n   $$3(2y - 2) + 4y = 24$$\n   $$6y - 6 + 4y = 24$$\n   $$10y = 30 \\implies y = 3$$\n\n3. Substitusi $y = 3$ ke pers (2):\n   $$x = 2(3) - 2 = 6 - 2 = 4$$\n\n4. Koordinat titik potong adalah $(4, 3)$.\n\nJadi, titik potong persekutuannya adalah **B** ($(4, 3)$).'
    }
  ],

  'program-linear': [
    {
      id: 'matwa-program-linear-11',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'program-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Titik-titik pojok suatu daerah himpunan penyelesaian sistem pertidaksamaan linear adalah $O(0, 0)$, $A(5, 0)$, $B(4, 3)$, $C(1, 5)$, dan $D(0, 4)$. Nilai maksimum dari fungsi tujuan $f(x, y) = 400x + 300y$ pada daerah tersebut adalah ...',
      options: [
        { id: 'A', text: '$2.000$' },
        { id: 'B', text: '$2.200$' },
        { id: 'C', text: '$2.500$' },
        { id: 'D', text: '$2.700$' },
        { id: 'E', text: '$1.900$' }
      ],
      correct_answer: 'C',
      hint: 'Uji nilai fungsi f(x, y) = 400x + 300y pada setiap titik pojok, lalu bandingkan hasilnya.',
      explanation: 'Langkah-langkah penyelesaian:\n\nEvaluasi fungsi tujuan $f(x, y) = 400x + 300y$ pada seluruh titik pojok:\n- Titik $O(0, 0)$: $f(0, 0) = 400(0) + 300(0) = 0$\n- Titik $A(5, 0)$: $f(5, 0) = 400(5) + 300(0) = 2.000$\n- Titik $B(4, 3)$: $f(4, 3) = 400(4) + 300(3) = 1.600 + 900 = 2.500$ (Maksimum)\n- Titik $C(1, 5)$: $f(1, 5) = 400(1) + 300(5) = 400 + 1.500 = 1.900$\n- Titik $D(0, 4)$: $f(0, 4) = 400(0) + 300(4) = 1.200$\n\nNilai tertinggi yang diperoleh adalah $2.500$ pada titik $B(4, 3)$.\n\nJadi, nilai maksimumnya adalah **C** ($2.500$).'
    },
    {
      id: 'matwa-program-linear-12',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'program-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Nilai minimum fungsi objektif $Z = 5x + 2y$ yang memenuhi sistem pertidaksamaan:\n$$\\begin{cases} 2x + y \\ge 8 \\\\ x + 2y \\ge 10 \\\\ x \\ge 0,\\; y \\ge 0 \\end{cases}$$\nadalah ...',
      options: [
        { id: 'A', text: '$14$' },
        { id: 'B', text: '$16$' },
        { id: 'C', text: '$18$' },
        { id: 'D', text: '$20$' },
        { id: 'E', text: '$24$' }
      ],
      correct_answer: 'B',
      hint: 'Tentukan titik pojok daerah penyelesaian terbuka: titik potong sumbu-Y (0, 8), titik potong kedua garis (2, 4), dan titik potong sumbu-X (10, 0).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Cari titik potong kedua garis perbatasan:\n   $$\\begin{cases} 2x + y = 8 \\implies y = 8 - 2x \\\\ x + 2y = 10 \\end{cases}$$\n   Substitusi: $x + 2(8 - 2x) = 10 \\implies x + 16 - 4x = 10 \\implies -3x = -6 \\implies x = 2$\n   Nilai $y = 8 - 2(2) = 4$. Titik potong adalah $(2, 4)$.\n\n2. Titik pojok daerah penyelesaian terbuka ke arah kanan atas:\n   - Titik $A(0, 8)$ (pada sumbu-$Y$ dari $2x + y = 8$)\n   - Titik $B(2, 4)$ (titik potong kedua garis)\n   - Titik $C(10, 0)$ (pada sumbu-$X$ dari $x + 2y = 10$)\n\n3. Evaluasi fungsi $Z = 5x + 2y$:\n   - $Z(A) = 5(0) + 2(8) = 16$ (Minimum)\n   - $Z(B) = 5(2) + 2(4) = 10 + 8 = 18$\n   - $Z(C) = 5(10) + 2(0) = 50$\n\nNilai terkecil adalah $16$ di titik $(0, 8)$.\n\nJadi, nilai minimumnya adalah **B** ($16$).'
    },
    {
      id: 'matwa-program-linear-13',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'program-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam penyelesaian masalah program linear menggunakan metode grafis garis selidik, fungsi objektif yang hendak dimaksimumkan adalah $Z = 3x + 4y$. Gradien (kemiringan) dari berkas garis selidik tersebut adalah ...',
      options: [
        { id: 'A', text: '$-\\frac{3}{4}$' },
        { id: 'B', text: '$-\\frac{4}{3}$' },
        { id: 'C', text: '$\\frac{3}{4}$' },
        { id: 'D', text: '$\\frac{4}{3}$' },
        { id: 'E', text: '$-\\frac{1}{2}$' }
      ],
      correct_answer: 'A',
      hint: 'Bentuk persamaan garis selidik ax + by = k, ubah ke bentuk eksplisit y = mx + c untuk melihat gradien m = -a/b.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Persamaan berkas garis selidik dinyatakan dengan menyamakan fungsi objektif dengan suatu konstanta $k$:\n   $$3x + 4y = k$$\n\n2. Ubah ke bentuk persamaan garis linear $y = mx + c$:\n   $$4y = -3x + k$$\n   $$y = -\\frac{3}{4}x + \\frac{k}{4}$$\n\n3. Koefisien di depan variabel $x$ merupakan gradien garis selidik:\n   $$m = -\\frac{3}{4}$$\n\nJadi, gradien garis selidik adalah **A** ($-\\frac{3}{4}$).'
    },
    {
      id: 'matwa-program-linear-14',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'program-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah pelataran parkir seluas $400\\text{ m}^2$ hanya mampu menampung tidak lebih dari $30\\text{ kendaraan}$ (mobil sedan dan bus). Luas parkir yang diperlukan untuk satu mobil sedan adalah $10\\text{ m}^2$ dan untuk satu bus adalah $20\\text{ m}^2$. Tarif retribusi parkir ditetapkan $\\text{Rp}5.000$ untuk mobil sedan dan $\\text{Rp}10.000$ untuk bus. Pendapatan retribusi maksimum yang dapat diperoleh pengelola parkir tersebut adalah ...',
      options: [
        { id: 'A', text: '$\\text{Rp}150.000$' },
        { id: 'B', text: '$\\text{Rp}180.000$' },
        { id: 'C', text: '$\\text{Rp}200.000$' },
        { id: 'D', text: '$\\text{Rp}220.000$' },
        { id: 'E', text: '$\\text{Rp}250.000$' }
      ],
      correct_answer: 'C',
      hint: 'Perhatikan fungsi tujuan f(x, y) = 5.000x + 10.000y = 5.000(x + 2y). Gunakan kendala luas 10x + 20y <= 400.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Misalkan banyak mobil sedan $= x$ dan bus $= y$.\n\n2. Susun sistem kendala:\n   - Kapasitas kendaraan: $x + y \\le 30$\n   - Kapasitas luas lahan: $10x + 20y \\le 400 \\implies x + 2y \\le 40$\n   - $x \\ge 0,\\; y \\ge 0$\n\n3. Tentukan fungsi penerimaan:\n   $$f(x, y) = 5.000x + 10.000y = 5.000(x + 2y)$$\n\n4. Dari kendala luas lahan, nilai maksimum dari ekspresi $(x + 2y)$ adalah $40$. Karena jika $x = 0$ dan $y = 20$, syarat $x + y = 20 \\le 30$ tetap terpenuhi.\n\n5. Hitung penerimaan maksimum:\n   $$f_{\\text{maks}} = 5.000 \\times 40 = \\text{Rp}200.000$$\n\nJadi, pendapatan maksimum pengelola parkir adalah **C** ($\\text{Rp}200.000$).'
    },
    {
      id: 'matwa-program-linear-15',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'program-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah workshop kriya memproduksi meja ($x$) dan kursi ($y$). Keterbatasan persediaan kayu dan alokasi jam kerja menghasilkan daerah feasible dengan titik-titik sudut optimum $(0, 20)$, $(12, 16)$, dan $(18, 0)$. Keuntungan dari penjualan satu unit meja adalah $\\text{Rp}150.000$ dan satu unit kursi adalah $\\text{Rp}100.000$. Agar diperoleh keuntungan total maksimum, banyak meja ($x$) yang harus diproduksi adalah ...',
      options: [
        { id: 'A', text: '$0\\text{ unit}$' },
        { id: 'B', text: '$12\\text{ unit}$' },
        { id: 'C', text: '$16\\text{ unit}$' },
        { id: 'D', text: '$18\\text{ unit}$' },
        { id: 'E', text: '$20\\text{ unit}$' }
      ],
      correct_answer: 'B',
      hint: 'Hitung keuntungan di setiap titik sudut f(x, y) = 150.000x + 100.000y, lalu cari nilai x di titik yang menghasilkan keuntungan maksimum.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Fungsi keuntungan penjualan:\n   $$f(x, y) = 150.000x + 100.000y$$\n\n2. Uji nilai keuntungan di setiap titik sudut:\n   - Titik $(0, 20)$: $f(0, 20) = 150.000(0) + 100.000(20) = \\text{Rp}2.000.000$\n   - Titik $(12, 16)$: $f(12, 16) = 150.000(12) + 100.000(16) = 1.800.000 + 1.600.000 = \\text{Rp}3.400.000$ (Maksimum)\n   - Titik $(18, 0)$: $f(18, 0) = 150.000(18) + 100.000(0) = \\text{Rp}2.700.000$\n\n3. Keuntungan maksimum $\\text{Rp}3.400.000$ dicapai saat memproduksi $x = 12\\text{ meja}$ dan $y = 16\\text{ kursi}$.\n\nJadi, banyak meja yang harus diproduksi adalah **B** ($12\\text{ unit}$).'
    },
    {
      id: 'matwa-program-linear-16',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'program-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan daerah himpunan penyelesaian yang dibatasi oleh $2x + 5y \\le 20$, $x + y \\le 6$, $x \\ge 0$, dan $y \\ge 0$. Fungsi tujuan $f(x, y) = ax + by$ dengan $a, b > 0$ akan mencapai nilai maksimum di sepanjang seluruh segmen garis pembatas $2x + 5y = 20$ apabila nilai perbandingan $a : b$ sama dengan ...',
      options: [
        { id: 'A', text: '$1 : 1$' },
        { id: 'B', text: '$2 : 5$' },
        { id: 'C', text: '$5 : 2$' },
        { id: 'D', text: '$3 : 5$' },
        { id: 'E', text: '$1 : 2$' }
      ],
      correct_answer: 'B',
      hint: 'Solusi optimal terjadi di sepanjang segmen garis pembatas jika garis selidik sejajar dengan garis pembatas tersebut (gradiennya sama).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Agar nilai maksimum terjadi di sepanjang segmen garis $2x + 5y = 20$, maka garis selidik fungsi tujuan $ax + by = k$ harus berhimpit atau sejajar dengan garis pembatas tersebut.\n\n2. Tentukan gradien garis pembatas $2x + 5y = 20$:\n   $$5y = -2x + 20 \\implies y = -\\frac{2}{5}x + 4 \\implies m_1 = -\\frac{2}{5}$$\n\n3. Tentukan gradien garis selidik $ax + by = k$:\n   $$by = -ax + k \\implies y = -\\frac{a}{b}x + \\frac{k}{b} \\implies m_2 = -\\frac{a}{b}$$\n\n4. Samakan kedua gradien:\n   $$-\\frac{a}{b} = -\\frac{2}{5} \\implies \\frac{a}{b} = \\frac{2}{5} \\implies a : b = 2 : 5$$\n\nJadi, perbandingan $a : b$ bernilai **B** ($2 : 5$).'
    },
    {
      id: 'matwa-program-linear-17',
      chapter_id: 'aljabar-linear',
      sub_chapter_id: 'program-linear',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Seorang peternak harus menyusun ransum pakan harian dari dua jenis konsentrat $P$ ($x\\text{ kg}$) dan $Q$ ($y\\text{ kg}$). Tiap kilogram konsentrat $P$ mengandung $3\\text{ unit}$ protein dan $1\\text{ unit}$ kalsium, sedangkan konsentrat $Q$ mengandung $1\\text{ unit}$ protein dan $2\\text{ unit}$ kalsium. Kebutuhan nutrisi harian ternak paling sedikit adalah $15\\text{ unit}$ protein dan $10\\text{ unit}$ kalsium. Jika harga konsentrat $P$ adalah $\\text{Rp}8.000/\\text{kg}$ dan konsentrat $Q$ adalah $\\text{Rp}6.000/\\text{kg}$, model matematika yang tepat untuk meminimumkan biaya pakan adalah ...',
      options: [
        { id: 'A', text: 'Meminimumkan $C = 8.000x + 6.000y$ dengan kendala $3x + y \\ge 15,\\; x + 2y \\ge 10,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'B', text: 'Meminimumkan $C = 8.000x + 6.000y$ dengan kendala $3x + y \\le 15,\\; x + 2y \\le 10,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'C', text: 'Meminimumkan $C = 6.000x + 8.000y$ dengan kendala $x + 3y \\ge 15,\\; 2x + y \\ge 10,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'D', text: 'Meminimumkan $C = 8.000x + 6.000y$ dengan kendala $3x + 2y \\ge 15,\\; x + y \\ge 10,\\; x \\ge 0,\\; y \\ge 0$' },
        { id: 'E', text: 'Meminimumkan $C = 8.000x + 6.000y$ dengan kendala $x + y \\ge 25,\\; 3x + 2y \\ge 10,\\; x \\ge 0,\\; y \\ge 0$' }
      ],
      correct_answer: 'A',
      hint: 'Kata "paling sedikit" menunjukkan pertidaksamaan bertanda lebih dari atau sama dengan (>=).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Tentukan fungsi tujuan (biaya minimum):\n   $$C(x, y) = 8.000x + 6.000y$$\n\n2. Tentukan kendala kandungan nutrisi:\n   - Kandungan protein (paling sedikit $15\\text{ unit}$): $3x + 1y \\ge 15$\n   - Kandungan kalsium (paling sedikit $10\\text{ unit}$): $1x + 2y \\ge 10$\n   - Non-negatif: $x \\ge 0,\\; y \\ge 0$\n\nJadi, model matematikanya adalah **A** (Meminimumkan $C = 8.000x + 6.000y$ dengan kendala $3x + y \\ge 15,\\; x + 2y \\ge 10,\\; x \\ge 0,\\; y \\ge 0$).'
    }
  ]
};

// VALIDATE & WRITE
console.log('🔍 MEMVALIDASI SEMUA RUMUS KATEX DAN SCHEMA PERTANYAAN BARU...');

for (const [subChapter, newQuestions] of Object.entries(batch1Data)) {
  console.log(`\n➡️ Memproses sub-bab: ${subChapter} (${newQuestions.length} butir baru)`);

  // Validate each question
  newQuestions.forEach((q, i) => {
    checkLatex(q.question_text, `${subChapter} Q#${i + 1} text`);
    q.options.forEach((opt) => checkLatex(opt.text, `${subChapter} Q#${i + 1} opt ${opt.id}`));
    checkLatex(q.explanation, `${subChapter} Q#${i + 1} explanation`);
  });

  // Read existing
  const targetDataFile = path.join(rootDir, 'data', 'questions', `${subChapter}.json`);
  const targetPublicFile = path.join(rootDir, 'public', 'data', 'questions', `${subChapter}.json`);

  const existingQuestions = JSON.parse(fs.readFileSync(targetDataFile, 'utf-8'));

  // Separate existing standar and existing hots
  const existingStandar = existingQuestions.filter(
    (q) => (q.difficulty || 'STANDAR') === 'STANDAR'
  );
  const existingHots = existingQuestions.filter(
    (q) => (q.difficulty || 'STANDAR') === 'HOTS'
  );

  // Combine: existing standar + new standar questions, then hots
  const combinedStandar = [...existingStandar, ...newQuestions];
  const finalQuestions = [...combinedStandar, ...existingHots];

  console.log(
    `  📊 Sebelum: ${existingStandar.length} Standar, ${existingHots.length} HOTS (Total: ${existingQuestions.length})`
  );
  console.log(
    `  📈 Sesudah: ${combinedStandar.length} Standar, ${existingHots.length} HOTS (Total: ${finalQuestions.length})`
  );

  // Write to both data/questions and public/data/questions
  fs.writeFileSync(targetDataFile, JSON.stringify(finalQuestions, null, 2), 'utf-8');
  fs.writeFileSync(targetPublicFile, JSON.stringify(finalQuestions, null, 2), 'utf-8');
  console.log(`  💾 Berhasil disimpan ke data/questions dan public/data/questions!`);
}

console.log('\n✨ SELURUH PERTANYAAN BATCH 1 SELESAI DITULISKAN DENGAN SUKSES!');
