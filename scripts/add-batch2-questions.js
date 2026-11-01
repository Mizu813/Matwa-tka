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

// BATCH 2 QUESTIONS DATA (Bab 3 & Bab 4)
const batch2Data = {
  'domain-range-grafik-fungsi': [
    {
      id: 'matwa-domain-range-grafik-fungsi-11',
      chapter_id: 'fungsi',
      sub_chapter_id: 'domain-range-grafik-fungsi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Daerah asal alami (*domain*) dari fungsi pecahan irasional:\n$$f(x) = \\sqrt{\\frac{2x - 6}{x + 4}}$$\nuntuk variabel real $x \\in \\mathbb{R}$ adalah ...',
      options: [
        { id: 'A', text: '$\\{x \\mid x < -4 \\text{ atau } x \\ge 3,\\; x \\in \\mathbb{R}\\}$' },
        { id: 'B', text: '$\\{x \\mid -4 < x \\le 3,\\; x \\in \\mathbb{R}\\}$' },
        { id: 'C', text: '$\\{x \\mid x \\le -4 \\text{ atau } x \\ge 3,\\; x \\in \\mathbb{R}\\}$' },
        { id: 'D', text: '$\\{x \\mid x \\ge 3,\\; x \\in \\mathbb{R}\\}$' },
        { id: 'E', text: '$\\{x \\mid x \\neq -4,\\; x \\in \\mathbb{R}\\}$' }
      ],
      correct_answer: 'A',
      hint: 'Syarat di dalam tanda akar kuadrat harus non-negatif (>= 0) dan penyebut tidak boleh sama dengan nol.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Syarat di dalam tanda akar harus tak negatif:\n   $$\\frac{2x - 6}{x + 4} \\ge 0$$\n\n2. Syarat penyebut pecahan tidak boleh nol:\n   $$x + 4 \\neq 0 \\implies x \\neq -4$$\n\n3. Tentukan pembuat nol pembilang dan penyebut:\n   - Pembilang: $2x - 6 = 0 \\implies x = 3$\n   - Penyebut: $x + 4 = 0 \\implies x = -4$\n\n4. Uji tanda pada garis bilangan bertitik $-4$ (bulatan kosong) dan $3$ (bulatan penuh):\n   - Untuk $x > 3$ (misal $x = 4$): $\\frac{2(4)-6}{4+4} = \\frac{2}{8} > 0$ $(+)$\n   - Untuk $-4 < x < 3$ (misal $x = 0$): $\\frac{-6}{4} < 0$ $(-)$\n   - Untuk $x < -4$ (misal $x = -5$): $\\frac{2(-5)-6}{-5+4} = \\frac{-16}{-1} = 16 > 0$ $(+)$\n\n5. Ambil daerah bertanda positif ($+$) dan nol:\n   $$x < -4 \\quad \\text{atau} \\quad x \\ge 3$$\n\nJadi, daerah asal alaminya adalah **A** ($\\{x \\mid x < -4 \\text{ atau } x \\ge 3,\\; x \\in \\mathbb{R}\\}$).'
    },
    {
      id: 'matwa-domain-range-grafik-fungsi-12',
      chapter_id: 'fungsi',
      sub_chapter_id: 'domain-range-grafik-fungsi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Tinggi lintasan sebuah roket air (dalam meter) setelah $t$ detik diluncurkan vertikal ke atas dimodelkan oleh fungsi kuadrat $h(t) = 40t - 5t^2$. Tinggi maksimum yang dapat dicapai roket air tersebut adalah ...',
      options: [
        { id: 'A', text: '$60\\text{ meter}$' },
        { id: 'B', text: '$75\\text{ meter}$' },
        { id: 'C', text: '$80\\text{ meter}$' },
        { id: 'D', text: '$90\\text{ meter}$' },
        { id: 'E', text: '$100\\text{ meter}$' }
      ],
      correct_answer: 'C',
      hint: 'Tinggi maksimum tercapai saat t = -b / (2a). Substitusikan nilai t tersebut ke fungsi h(t).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Identifikasi koefisien fungsi kuadrat $h(t) = -5t^2 + 40t$:\n   $$a = -5, \\quad b = 40, \\quad c = 0$$\n\n2. Tentukan waktu saat mencapai ketinggian maksimum (absis titik puncak):\n   $$t_p = -\\frac{b}{2a} = -\\frac{40}{2(-5)} = \\frac{40}{10} = 4\\text{ detik}$$\n\n3. Substitusikan $t = 4$ ke fungsi $h(t)$ untuk mendapatkan tinggi puncak:\n   $$h_{\\text{maks}} = 40(4) - 5(4)^2 = 160 - 5(16) = 160 - 80 = 80\\text{ meter}$$\n\nJadi, tinggi maksimum roket adalah **C** ($80\\text{ meter}$).'
    },
    {
      id: 'matwa-domain-range-grafik-fungsi-13',
      chapter_id: 'fungsi',
      sub_chapter_id: 'domain-range-grafik-fungsi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Daerah hasil (*range*) dari fungsi kuadrat $f(x) = x^2 - 4x + 7$ yang didefinisikan pada interval domain tertutup $-1 \\le x \\le 5$ adalah ...',
      options: [
        { id: 'A', text: '$\\{y \\mid 3 \\le y \\le 12,\\; y \\in \\mathbb{R}\\}$' },
        { id: 'B', text: '$\\{y \\mid 7 \\le y \\le 12,\\; y \\in \\mathbb{R}\\}$' },
        { id: 'C', text: '$\\{y \\mid 3 \\le y \\le 7,\\; y \\in \\mathbb{R}\\}$' },
        { id: 'D', text: '$\\{y \\mid -1 \\le y \\le 5,\\; y \\in \\mathbb{R}\\}$' },
        { id: 'E', text: '$\\{y \\mid 0 \\le y \\le 12,\\; y \\in \\mathbb{R}\\}$' }
      ],
      correct_answer: 'A',
      hint: 'Cari nilai titik puncak x_p = -b / (2a). Jika x_p berada di dalam interval, hitung f(x_p) serta nilai di kedua batas ujung f(-1) dan f(5).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Tentukan sumbu simetri / absis puncak parabola:\n   $$x_p = -\\frac{-4}{2(1)} = 2$$\n   Karena $x = 2$ berada di dalam interval $[-1, 5]$, maka nilai minimum kurva berada di titik puncak.\n\n2. Hitung nilai minimum pada puncak:\n   $$y_{\\text{min}} = f(2) = (2)^2 - 4(2) + 7 = 4 - 8 + 7 = 3$$\n\n3. Hitung nilai fungsi pada batas interval:\n   - Ujung kiri: $f(-1) = (-1)^2 - 4(-1) + 7 = 1 + 4 + 7 = 12$\n   - Ujung kanan: $f(5) = (5)^2 - 4(5) + 7 = 25 - 20 + 7 = 12$\n\n4. Nilai terbesar adalah $12$ dan nilai terkecil adalah $3$:\n   $$R_f = \\{y \\mid 3 \\le y \\le 12,\\; y \\in \\mathbb{R}\\}$$\n\nJadi, daerah hasilnya adalah **A** ($\\{y \\mid 3 \\le y \\le 12,\\; y \\in \\mathbb{R}\\}$).'
    },
    {
      id: 'matwa-domain-range-grafik-fungsi-14',
      chapter_id: 'fungsi',
      sub_chapter_id: 'domain-range-grafik-fungsi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Domain alami (*daerah asal*) dari fungsi gabungan aljabar:\n$$f(x) = \\sqrt{9 - x^2} + \\frac{1}{x - 1}$$\nuntuk $x \\in \\mathbb{R}$ adalah ...',
      options: [
        { id: 'A', text: '$\\{x \\mid -3 \\le x \\le 3,\\; x \\neq 1,\\; x \\in \\mathbb{R}\\}$' },
        { id: 'B', text: '$\\{x \\mid -3 < x < 3,\\; x \\in \\mathbb{R}\\}$' },
        { id: 'C', text: '$\\{x \\mid x \\le -3 \\text{ atau } x \\ge 3,\\; x \\in \\mathbb{R}\\}$' },
        { id: 'D', text: '$\\{x \\mid x \\neq 1,\\; x \\in \\mathbb{R}\\}$' },
        { id: 'E', text: '$\\{x \\mid -3 \\le x < 1,\\; x \\in \\mathbb{R}\\}$' }
      ],
      correct_answer: 'A',
      hint: 'Iriskan dua syarat domain: syarat tanda akar (9 - x^2 >= 0) dan syarat penyebut pecahan (x - 1 != 0).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Syarat bentuk akar real:\n   $$9 - x^2 \\ge 0 \\implies x^2 \\le 9 \\implies -3 \\le x \\le 3$$\n\n2. Syarat penyebut pecahan tak nol:\n   $$x - 1 \\neq 0 \\implies x \\neq 1$$\n\n3. Lakukan irisan (interseksi) dari kedua syarat tersebut:\n   $$D_f = \\{x \\mid -3 \\le x \\le 3,\\; x \\neq 1,\\; x \\in \\mathbb{R}\\}$$\n\nJadi, domain alami fungsi tersebut adalah **A** ($\\{x \\mid -3 \\le x \\le 3,\\; x \\neq 1,\\; x \\in \\mathbb{R}\\}$).'
    },
    {
      id: 'matwa-domain-range-grafik-fungsi-15',
      chapter_id: 'fungsi',
      sub_chapter_id: 'domain-range-grafik-fungsi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Grafik kurva parabola $y = x^2$ mengalami translasi geometri dengan digeser sejauh $3\\text{ satuan}$ ke arah kanan dan $5\\text{ satuan}$ ke arah bawah. Persamaan fungsi kuadrat hasil pergeseran tersebut adalah ...',
      options: [
        { id: 'A', text: '$y = x^2 - 6x + 4$' },
        { id: 'B', text: '$y = x^2 + 6x + 4$' },
        { id: 'C', text: '$y = x^2 - 6x - 4$' },
        { id: 'D', text: '$y = x^2 - 3x - 5$' },
        { id: 'E', text: '$y = x^2 + 6x + 14$' }
      ],
      correct_answer: 'A',
      hint: 'Pergeseran h satuan ke kanan menggantikan x dengan (x - h), dan k satuan ke bawah menambahkan -k pada fungsi.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Aturan pergeseran grafik fungsi $y = f(x)$:\n   - Digeser ke kanan $h$ satuan: $y = f(x - h)$\n   - Digeser ke bawah $k$ satuan: $y = f(x - h) - k$\n\n2. Terapkan untuk $h = 3$ dan $k = 5$ pada $f(x) = x^2$:\n   $$y = (x - 3)^2 - 5$$\n\n3. Jabarkan bentuk kuadrat binomial:\n   $$y = (x^2 - 6x + 9) - 5$$\n   $$y = x^2 - 6x + 4$$\n\nJadi, persamaan fungsi hasil pergeseran adalah **A** ($y = x^2 - 6x + 4$).'
    },
    {
      id: 'matwa-domain-range-grafik-fungsi-16',
      chapter_id: 'fungsi',
      sub_chapter_id: 'domain-range-grafik-fungsi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah kurva parabola fungsi kuadrat memiliki titik balik puncak di $(2, -1)$ serta memotong sumbu-$Y$ di titik $(0, 7)$. Persamaan grafik fungsi kuadrat tersebut adalah ...',
      options: [
        { id: 'A', text: '$y = 2x^2 - 8x + 7$' },
        { id: 'B', text: '$y = 2x^2 + 8x + 7$' },
        { id: 'C', text: '$y = x^2 - 4x + 7$' },
        { id: 'D', text: '$y = 2x^2 - 8x - 7$' },
        { id: 'E', text: '$y = 3x^2 - 12x + 7$' }
      ],
      correct_answer: 'A',
      hint: 'Gunakan bentuk rumus puncak y = a(x - x_p)^2 + y_p dengan x_p = 2 dan y_p = -1, lalu tentukan nilai a melalui titik (0, 7).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Gunakan formula kurva kuadrat dengan titik puncak $(x_p, y_p) = (2, -1)$:\n   $$y = a(x - 2)^2 - 1$$\n\n2. Substitusikan titik potong sumbu-$Y$ $(0, 7)$ untuk mencari koefisien $a$:\n   $$7 = a(0 - 2)^2 - 1$$\n   $$7 = 4a - 1$$\n   $$4a = 8 \\implies a = 2$$\n\n3. Tuliskan persamaan lengkap dan jabarkan:\n   $$y = 2(x - 2)^2 - 1$$\n   $$y = 2(x^2 - 4x + 4) - 1$$\n   $$y = 2x^2 - 8x + 8 - 1 = 2x^2 - 8x + 7$$\n\nJadi, persamaan fungsinya adalah **A** ($y = 2x^2 - 8x + 7$).'
    },
    {
      id: 'matwa-domain-range-grafik-fungsi-17',
      chapter_id: 'fungsi',
      sub_chapter_id: 'domain-range-grafik-fungsi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan fungsi pecahan rasional:\n$$f(x) = \\frac{4x - 3}{2x + 6}, \\quad x \\neq -3$$\nPersamaan asimtot datar dan asimtot tegak kurva fungsi tersebut berturut-turut adalah ...',
      options: [
        { id: 'A', text: '$y = 2$ dan $x = -3$' },
        { id: 'B', text: '$y = -3$ dan $x = 2$' },
        { id: 'C', text: '$y = 4$ dan $x = -6$' },
        { id: 'D', text: '$y = 2$ dan $x = 3$' },
        { id: 'E', text: '$y = -2$ dan $x = -3$' }
      ],
      correct_answer: 'A',
      hint: 'Asimtot datar y = koefisien x pembilang / koefisien x penyebut. Asimtot tegak adalah nilai pembuat nol penyebut.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Asimtot datar untuk fungsi rasional berbentuk $f(x) = \\frac{ax + b}{cx + d}$:\n   $$y = \\frac{a}{c} = \\frac{4}{2} = 2$$\n\n2. Asimtot tegak dicari dari pembuat nol penyebut ($2x + 6 = 0$):\n   $$2x = -6 \\implies x = -3$$\n\nJadi, persamaan asimtot datar dan asimtot tegak berturut-turut adalah **A** ($y = 2$ dan $x = -3$).'
    }
  ],

  'fungsi-komposisi': [
    {
      id: 'matwa-fungsi-komposisi-11',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-komposisi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui tiga fungsi aljabar: $f(x) = 2x + 1$, $g(x) = x^2 - 2$, dan $h(x) = 3x$. Nilai dari komposisi tiga fungsi $(f \\circ g \\circ h)(1)$ adalah ...',
      options: [
        { id: 'A', text: '$11$' },
        { id: 'B', text: '$13$' },
        { id: 'C', text: '$15$' },
        { id: 'D', text: '$17$' },
        { id: 'E', text: '$19$' }
      ],
      correct_answer: 'C',
      hint: 'Hitung bertahap dari dalam ke luar: cari nilai h(1), lalu masukkan ke g(x), dan terakhir masukkan ke f(x).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Evaluasi fungsi terdalam $h(1)$:\n   $$h(1) = 3(1) = 3$$\n\n2. Evaluasi fungsi kedua $g(h(1)) = g(3)$:\n   $$g(3) = 3^2 - 2 = 9 - 2 = 7$$\n\n3. Evaluasi fungsi terluar $f(g(h(1))) = f(7)$:\n   $$f(7) = 2(7) + 1 = 14 + 1 = 15$$\n\nJadi, nilai $(f \\circ g \\circ h)(1)$ adalah **C** ($15$).'
    },
    {
      id: 'matwa-fungsi-komposisi-12',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-komposisi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui fungsi $g(x) = x - 4$ dan rumus fungsi komposisi $(f \\circ g)(x) = x^2 - 5x + 2$. Rumus fungsi $f(x)$ adalah ...',
      options: [
        { id: 'A', text: '$f(x) = x^2 + 3x - 2$' },
        { id: 'B', text: '$f(x) = x^2 - 3x - 2$' },
        { id: 'C', text: '$f(x) = x^2 + 3x + 2$' },
        { id: 'D', text: '$f(x) = x^2 - 13x + 38$' },
        { id: 'E', text: '$f(x) = x^2 + 5x - 2$' }
      ],
      correct_answer: 'A',
      hint: 'Misalkan u = g(x) = x - 4 sehingga x = u + 4. Substitusikan x ke rumus fungsi komposisi.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Definisikan pemisalan variabel:\n   $$u = x - 4 \\implies x = u + 4$$\n\n2. Substitusikan $x = u + 4$ ke persamaan komposisi $(f \\circ g)(x) = f(g(x)) = f(u)$:\n   $$f(u) = (u + 4)^2 - 5(u + 4) + 2$$\n\n3. Ekspansikan suku-suku aljabar:\n   $$f(u) = (u^2 + 8u + 16) - (5u + 20) + 2$$\n   $$f(u) = u^2 + (8 - 5)u + (16 - 20 + 2)$$\n   $$f(u) = u^2 + 3u - 2$$\n\n4. Kembalikan variabel $u$ menjadi $x$:\n   $$f(x) = x^2 + 3x - 2$$\n\nJadi, rumus fungsi $f(x)$ adalah **A** ($f(x) = x^2 + 3x - 2$).'
    },
    {
      id: 'matwa-fungsi-komposisi-13',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-komposisi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui fungsi linear $f(x) = 3x - 2$ dan fungsi komposisi $(f \\circ g)(x) = 6x^2 + 9x - 8$. Rumus fungsi $g(x)$ adalah ...',
      options: [
        { id: 'A', text: '$g(x) = 2x^2 + 3x - 2$' },
        { id: 'B', text: '$g(x) = 2x^2 + 3x - 4$' },
        { id: 'C', text: '$g(x) = 2x^2 + 3x + 2$' },
        { id: 'D', text: '$g(x) = 3x^2 + 2x - 2$' },
        { id: 'E', text: '$g(x) = 2x^2 - 3x - 2$' }
      ],
      correct_answer: 'A',
      hint: 'Tuliskan f(g(x)) = 3g(x) - 2. Samakan dengan 6x^2 + 9x - 8, lalu selesaikan untuk g(x).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Terapkan definisi komposisi pada fungsi luar $f(x)$:\n   $$(f \\circ g)(x) = f(g(x)) = 3g(x) - 2$$\n\n2. Samakan dengan bentuk yang diketahui pada soal:\n   $$3g(x) - 2 = 6x^2 + 9x - 8$$\n\n3. Pindahkan $-2$ ke ruas kanan:\n   $$3g(x) = 6x^2 + 9x - 8 + 2$$\n   $$3g(x) = 6x^2 + 9x - 6$$\n\n4. Bagi kedua ruas dengan $3$:\n   $$g(x) = \\frac{6x^2 + 9x - 6}{3} = 2x^2 + 3x - 2$$\n\nJadi, rumus fungsi $g(x)$ adalah **A** ($g(x) = 2x^2 + 3x - 2$).'
    },
    {
      id: 'matwa-fungsi-komposisi-14',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-komposisi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan fungsi pecahan aljabar $f(x) = \\frac{x + 1}{x - 2}$ dengan $x \\neq 2$. Nilai dari komposisi diri $(f \\circ f)(3)$ adalah ...',
      options: [
        { id: 'A', text: '$\\frac{5}{2}$' },
        { id: 'B', text: '$4$' },
        { id: 'C', text: '$\\frac{7}{2}$' },
        { id: 'D', text: '$2$' },
        { id: 'E', text: '$\\frac{3}{2}$' }
      ],
      correct_answer: 'A',
      hint: 'Hitung f(3) terlebih dahulu, lalu hasil tersebut dimasukkan kembali sebagai masukan ke fungsi f(x).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung nilai $f(3)$:\n   $$f(3) = \\frac{3 + 1}{3 - 2} = \\frac{4}{1} = 4$$\n\n2. Hitung $(f \\circ f)(3) = f(f(3)) = f(4)$:\n   $$f(4) = \\frac{4 + 1}{4 - 2} = \\frac{5}{2}$$\n\nJadi, nilai $(f \\circ f)(3)$ adalah **A** ($\\frac{5}{2}$).'
    },
    {
      id: 'matwa-fungsi-komposisi-15',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-komposisi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah pabrik pulp dan kertas mengolah kayu gelondongan ($x\\text{ ton}$) menjadi lembaran kertas jadi ($y\\text{ ton}$) melalui dua tahap mesin konversi. Tahap I mengolah kayu menjadi bubur kertas ($m$) melalui formula $m = f(x) = 2x - 3$. Tahap II memproses bubur kertas menjadi lembaran kertas dengan formula $y = g(m) = m^2 - 4m + 5$. Jika bahan baku kayu yang tersedia adalah $5\\text{ ton}$, banyak lembaran kertas jadi yang dihasilkan adalah ...',
      options: [
        { id: 'A', text: '$24\\text{ ton}$' },
        { id: 'B', text: '$26\\text{ ton}$' },
        { id: 'C', text: '$28\\text{ ton}$' },
        { id: 'D', text: '$30\\text{ ton}$' },
        { id: 'E', text: '$32\\text{ ton}$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan komposisi (g o f)(5). Hitung output tahap I: m = f(5), lalu masukkan m ke tahap II: g(m).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung hasil olahan tahap I ($m$) untuk $x = 5\\text{ ton}$:\n   $$m = f(5) = 2(5) - 3 = 10 - 3 = 7\\text{ ton}$$\n\n2. Hitung hasil olahan tahap II ($y$) untuk masukan $m = 7\\text{ ton}$:\n   $$y = g(7) = (7)^2 - 4(7) + 5 = 49 - 28 + 5 = 26\\text{ ton}$$\n\nJadi, kertas jadi yang dihasilkan adalah **B** ($26\\text{ ton}$).'
    },
    {
      id: 'matwa-fungsi-komposisi-16',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-komposisi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui fungsi $f(x) = 2x - 5$ dan $g(x) = x^2 + 1$. Jika nilai komposisi $(f \\circ g)(a) = 29$, maka nilai konstanta $a$ positif yang memenuhi adalah ...',
      options: [
        { id: 'A', text: '$2$' },
        { id: 'B', text: '$3$' },
        { id: 'C', text: '$4$' },
        { id: 'D', text: '$5$' },
        { id: 'E', text: '$6$' }
      ],
      correct_answer: 'C',
      hint: 'Susun persamaan f(g(a)) = 2(a^2 + 1) - 5 = 29, lalu cari nilai a positif.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Susun bentuk $(f \\circ g)(a)$:\n   $$(f \\circ g)(a) = f(g(a)) = f(a^2 + 1) = 2(a^2 + 1) - 5 = 2a^2 + 2 - 5 = 2a^2 - 3$$\n\n2. Samakan dengan nilai yang diketahui ($29$):\n   $$2a^2 - 3 = 29$$\n   $$2a^2 = 32$$\n   $$a^2 = 16$$\n\n3. Ambil akar kuadrat positif karena diminta nilai $a$ positif:\n   $$a = \\sqrt{16} = 4$$\n\nJadi, nilai $a$ yang memenuhi adalah **C** ($4$).'
    },
    {
      id: 'matwa-fungsi-komposisi-17',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-komposisi',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan dua fungsi linear $f(x) = 3x + 2$ dan $g(x) = 2x - 1$. Nilai dari ekspresi selisih komposisi fungsi:\n$$(f \\circ g)(x) - (g \\circ f)(x)$$\nadalah ...',
      options: [
        { id: 'A', text: '$-4$' },
        { id: 'B', text: '$-2$' },
        { id: 'C', text: '$0$' },
        { id: 'D', text: '$2$' },
        { id: 'E', text: '$4$' }
      ],
      correct_answer: 'A',
      hint: 'Tentukan masing-masing (f o g)(x) dan (g o f)(x), lalu kurangkan keduanya.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Tentukan $(f \\circ g)(x)$:\n   $$(f \\circ g)(x) = f(2x - 1) = 3(2x - 1) + 2 = 6x - 3 + 2 = 6x - 1$$\n\n2. Tentukan $(g \\circ f)(x)$:\n   $$(g \\circ f)(x) = g(3x + 2) = 2(3x + 2) - 1 = 6x + 4 - 1 = 6x + 3$$\n\n3. Hitung selisihnya:\n   $$(f \\circ g)(x) - (g \\circ f)(x) = (6x - 1) - (6x + 3) = 6x - 1 - 6x - 3 = -4$$\n\nJadi, selisihnya bernilai konstanta **A** ($-4$).'
    }
  ],

  'fungsi-invers': [
    {
      id: 'matwa-fungsi-invers-11',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-invers',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan fungsi pecahan linear:\n$$f(x) = \\frac{4x - 1}{3x + 5}, \\quad x \\neq -\\frac{5}{3}$$\nRumus fungsi invers $f^{-1}(x)$ adalah ...',
      options: [
        { id: 'A', text: '$f^{-1}(x) = \\frac{-5x - 1}{3x - 4}, \\quad x \\neq \\frac{4}{3}$' },
        { id: 'B', text: '$f^{-1}(x) = \\frac{5x + 1}{3x - 4}, \\quad x \\neq \\frac{4}{3}$' },
        { id: 'C', text: '$f^{-1}(x) = \\frac{3x + 5}{4x - 1}, \\quad x \\neq \\frac{1}{4}$' },
        { id: 'D', text: '$f^{-1}(x) = \\frac{-5x + 1}{3x - 4}, \\quad x \\neq \\frac{4}{3}$' },
        { id: 'E', text: '$f^{-1}(x) = \\frac{4x + 1}{3x - 5}, \\quad x \\neq \\frac{5}{3}$' }
      ],
      correct_answer: 'A',
      hint: 'Rumus cepat invers f(x) = (ax + b)/(cx + d) adalah f^(-1)(x) = (-dx + b)/(cx - a).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Menggunakan formula invers pecahan $f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}$:\n   - $a = 4, \\quad b = -1, \\quad c = 3, \\quad d = 5$\n\n2. Terapkan rumus:\n   $$f^{-1}(x) = \\frac{-5x + (-1)}{3x - 4} = \\frac{-5x - 1}{3x - 4}, \\quad x \\neq \\frac{4}{3}$$\n\nJadi, rumus inversnya adalah **A** ($f^{-1}(x) = \\frac{-5x - 1}{3x - 4}, \\quad x \\neq \\frac{4}{3}$).'
    },
    {
      id: 'matwa-fungsi-invers-12',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-invers',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui fungsi pecahan rasional $f(x) = \\frac{5x + 3}{2x - 1}$ dengan $x \\neq \\frac{1}{2}$. Nilai dari $f^{-1}(4)$ adalah ...',
      options: [
        { id: 'A', text: '$\\frac{7}{3}$' },
        { id: 'B', text: '$\\frac{5}{3}$' },
        { id: 'C', text: '$3$' },
        { id: 'D', text: '$\\frac{1}{3}$' },
        { id: 'E', text: '$2$' }
      ],
      correct_answer: 'A',
      hint: 'Gunakan sifat dasar fungsi invers: f^(-1)(k) = x ekuivalen dengan f(x) = k.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Berdasarkan sifat invers, $f^{-1}(4) = x \\iff f(x) = 4$:\n   $$\\frac{5x + 3}{2x - 1} = 4$$\n\n2. Kalikan silang:\n   $$5x + 3 = 4(2x - 1)$$\n   $$5x + 3 = 8x - 4$$\n\n3. Kumpulkan variabel $x$ pada satu ruas:\n   $$3 + 4 = 8x - 5x$$\n   $$7 = 3x \\implies x = \\frac{7}{3}$$\n\nJadi, nilai $f^{-1}(4)$ adalah **A** ($\\frac{7}{3}$).'
    },
    {
      id: 'matwa-fungsi-invers-13',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-invers',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan fungsi kuadrat dengan domain terbatas $f(x) = x^2 - 6x + 4$ untuk $x \\ge 3$. Rumus fungsi invers $f^{-1}(x)$ adalah ...',
      options: [
        { id: 'A', text: '$f^{-1}(x) = 3 + \\sqrt{x + 5}, \\quad x \\ge -5$' },
        { id: 'B', text: '$f^{-1}(x) = 3 - \\sqrt{x + 5}, \\quad x \\ge -5$' },
        { id: 'C', text: '$f^{-1}(x) = -3 + \\sqrt{x + 5}, \\quad x \\ge -5$' },
        { id: 'D', text: '$f^{-1}(x) = 3 + \\sqrt{x - 5}, \\quad x \\ge 5$' },
        { id: 'E', text: '$f^{-1}(x) = \\sqrt{x + 9} - 3, \\quad x \\ge -9$' }
      ],
      correct_answer: 'A',
      hint: 'Ubah fungsi ke bentuk kuadrat sempurna y = (x - 3)^2 - 5, lalu nyatakan x dalam y.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Tuliskan $y = f(x)$ dan lengkapi kuadrat sempurna:\n   $$y = x^2 - 6x + 4$$\n   $$y = (x - 3)^2 - 9 + 4$$\n   $$y = (x - 3)^2 - 5$$\n\n2. Pindahkan konstanta dan tarik akar kuadrat:\n   $$(x - 3)^2 = y + 5$$\n   $$x - 3 = \\pm \\sqrt{y + 5}$$\n\n3. Karena domain awal $x \\ge 3$, maka $x - 3 \\ge 0$, sehingga pilih tanda positif ($+$):\n   $$x - 3 = \\sqrt{y + 5} \\implies x = 3 + \\sqrt{y + 5}$$\n\n4. Ganti variabel $y$ menjadi $x$:\n   $$f^{-1}(x) = 3 + \\sqrt{x + 5}, \\quad x \\ge -5$$\n\nJadi, fungsi inversnya adalah **A** ($f^{-1}(x) = 3 + \\sqrt{x + 5}, \\quad x \\ge -5$).'
    },
    {
      id: 'matwa-fungsi-invers-14',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-invers',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui fungsi $f(x) = 2x - 7$ dan $g(x) = 3x + 1$. Rumus fungsi dari invers komposisi $(f \\circ g)^{-1}(x)$ adalah ...',
      options: [
        { id: 'A', text: '$(f \\circ g)^{-1}(x) = \\frac{x + 5}{6}$' },
        { id: 'B', text: '$(f \\circ g)^{-1}(x) = \\frac{x - 5}{6}$' },
        { id: 'C', text: '$(f \\circ g)^{-1}(x) = \\frac{x + 6}{5}$' },
        { id: 'D', text: '$(f \\circ g)^{-1}(x) = 6x - 5$' },
        { id: 'E', text: '$(f \\circ g)^{-1}(x) = \\frac{x + 7}{6}$' }
      ],
      correct_answer: 'A',
      hint: 'Cari terlebih dahulu fungsi komposisi (f o g)(x), kemudian cari invers dari fungsi hasil komposisi tersebut.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Tentukan $(f \\circ g)(x)$:\n   $$(f \\circ g)(x) = f(3x + 1) = 2(3x + 1) - 7 = 6x + 2 - 7 = 6x - 5$$\n\n2. Cari invers dari $y = 6x - 5$:\n   $$y + 5 = 6x \\implies x = \\frac{y + 5}{6}$$\n\n3. Nyatakan dalam variabel $x$:\n   $$(f \\circ g)^{-1}(x) = \\frac{x + 5}{6}$$\n\nJadi, rumus fungsi invers komposisinya adalah **A** ($(f \\circ g)^{-1}(x) = \\frac{x + 5}{6}$).'
    },
    {
      id: 'matwa-fungsi-invers-15',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-invers',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Formula konversi temperatur dari skala derajat Celsius ($C$) ke skala derajat Fahrenheit ($F$) dirumuskan oleh fungsi $F = f(C) = \\frac{9}{5}C + 32$. Rumus fungsi invers $C = f^{-1}(F)$ serta nilai suhu dalam Celsius untuk pembacaan $86^\\circ\\text{F}$ berturut-turut adalah ...',
      options: [
        { id: 'A', text: '$C = \\frac{5}{9}(F - 32)$ dan $30^\\circ\\text{C}$' },
        { id: 'B', text: '$C = \\frac{5}{9}(F + 32)$ dan $35^\\circ\\text{C}$' },
        { id: 'C', text: '$C = \\frac{9}{5}(F - 32)$ dan $30^\\circ\\text{C}$' },
        { id: 'D', text: '$C = \\frac{5}{9}(F - 32)$ dan $28^\\circ\\text{C}$' },
        { id: 'E', text: '$C = \\frac{5}{9}F - 32$ dan $32^\\circ\\text{C}$' }
      ],
      correct_answer: 'A',
      hint: 'Nyatakan C sebagai fungsi dari F: F - 32 = 9/5 C sehingga C = 5/9 (F - 32). Lalu substitusikan F = 86.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Cari rumus invers $C = f^{-1}(F)$:\n   $$F = \\frac{9}{5}C + 32$$\n   $$F - 32 = \\frac{9}{5}C$$\n   $$C = \\frac{5}{9}(F - 32)$$\n\n2. Hitung nilai Celsius untuk $F = 86^\\circ\\text{F}$:\n   $$C = \\frac{5}{9}(86 - 32) = \\frac{5}{9}(54) = 5 \\times 6 = 30^\\circ\\text{C}$$\n\nJadi, rumus invers dan nilai suhunya berturut-turut adalah **A** ($C = \\frac{5}{9}(F - 32)$ dan $30^\\circ\\text{C}$).'
    },
    {
      id: 'matwa-fungsi-invers-16',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-invers',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan fungsi eksponensial satu-satu $f(x) = 2^{3x - 1}$. Rumus fungsi invers $f^{-1}(x)$ untuk daerah asal $x > 0$ adalah ...',
      options: [
        { id: 'A', text: '$f^{-1}(x) = \\frac{{}^2\\log x + 1}{3}$' },
        { id: 'B', text: '$f^{-1}(x) = \\frac{{}^2\\log x - 1}{3}$' },
        { id: 'C', text: '$f^{-1}(x) = 3 \\cdot {}^2\\log x + 1$' },
        { id: 'D', text: '$f^{-1}(x) = \\frac{{}^3\\log x + 1}{2}$' },
        { id: 'E', text: '$f^{-1}(x) = 2^{1 - 3x}$' }
      ],
      correct_answer: 'A',
      hint: 'Ubah bentuk eksponen y = 2^(3x - 1) ke bentuk logaritma: 3x - 1 = ^2log(y).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Nyatakan $y = 2^{3x - 1}$ ke bentuk logaritma:\n   $$3x - 1 = {}^2\\log y$$\n\n2. Selesaikan untuk $x$:\n   $$3x = {}^2\\log y + 1$$\n   $$x = \\frac{{}^2\\log y + 1}{3}$$\n\n3. Ganti variabel $y$ menjadi $x$:\n   $$f^{-1}(x) = \\frac{{}^2\\log x + 1}{3}$$\n\nJadi, rumus inversnya adalah **A** ($f^{-1}(x) = \\frac{{}^2\\log x + 1}{3}$).'
    },
    {
      id: 'matwa-fungsi-invers-17',
      chapter_id: 'fungsi',
      sub_chapter_id: 'fungsi-invers',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui fungsi $f(x) = 3x - 4$ dan $g(x) = x^2 + 2x$. Nilai dari $(g \\circ f^{-1})(5)$ adalah ...',
      options: [
        { id: 'A', text: '$15$' },
        { id: 'B', text: '$12$' },
        { id: 'C', text: '$18$' },
        { id: 'D', text: '$20$' },
        { id: 'E', text: '$24$' }
      ],
      correct_answer: 'A',
      hint: 'Tentukan terlebih dahulu nilai f^(-1)(5) dengan menyelesaikan 3x - 4 = 5. Masukkan hasilnya ke g(x).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Cari nilai $f^{-1}(5) = k$ dengan syarat $f(k) = 5$:\n   $$3k - 4 = 5$$\n   $$3k = 9 \\implies k = 3$$\n   Jadi, $f^{-1}(5) = 3$.\n\n2. Evaluasi fungsi $g$ pada nilai input $3$:\n   $$(g \\circ f^{-1})(5) = g(f^{-1}(5)) = g(3)$$\n   $$g(3) = (3)^2 + 2(3) = 9 + 6 = 15$$\n\nJadi, nilai $(g \\circ f^{-1})(5)$ adalah **A** ($15$).'
    }
  ],

  'barisan-deret-aritmetika': [
    {
      id: 'matwa-barisan-deret-aritmetika-11',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-aritmetika',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui suku ke-$5$ suatu barisan aritmetika adalah $19$ dan suku ke-$9$ adalah $35$. Suku ke-$20$ dari barisan aritmetika tersebut adalah ...',
      options: [
        { id: 'A', text: '$75$' },
        { id: 'B', text: '$79$' },
        { id: 'C', text: '$81$' },
        { id: 'D', text: '$83$' },
        { id: 'E', text: '$85$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan selisih suku U_9 - U_5 = 4b untuk mencari beda b, lalu cari suku pertama a.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Rumus suku ke-$n$ barisan aritmetika: $U_n = a + (n - 1)b$:\n   - $U_5 = a + 4b = 19$\n   - $U_9 = a + 8b = 35$\n\n2. Kurangkan kedua persamaan:\n   $$(a + 8b) - (a + 4b) = 35 - 19$$\n   $$4b = 16 \\implies b = 4$$\n\n3. Cari suku pertama $a$:\n   $$a + 4(4) = 19 \\implies a + 16 = 19 \\implies a = 3$$\n\n4. Hitung suku ke-$20$ ($U_{20}$):\n   $$U_{20} = a + 19b = 3 + 19(4) = 3 + 76 = 79$$\n\nJadi, suku ke-$20$ adalah **B** ($79$).'
    },
    {
      id: 'matwa-barisan-deret-aritmetika-12',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-aritmetika',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam sebuah gedung pertunjukan seni, barisan kursi diatur sedemikian rupa sehingga baris paling depan memuat $20\\text{ kursi}$ dan setiap baris di belakangnya selalu memuat $4\\text{ kursi}$ lebih banyak daripada baris di depannya. Jika terdapat $15\\text{ baris kursi}$ di dalam gedung tersebut, total kapasitas seluruh tempat duduk adalah ...',
      options: [
        { id: 'A', text: '$680\\text{ kursi}$' },
        { id: 'B', text: '$700\\text{ kursi}$' },
        { id: 'C', text: '$720\\text{ kursi}$' },
        { id: 'D', text: '$740\\text{ kursi}$' },
        { id: 'E', text: '$760\\text{ kursi}$' }
      ],
      correct_answer: 'C',
      hint: 'Gunakan rumus jumlah deret aritmetika S_n = n/2 * (2a + (n - 1)b) dengan a = 20, b = 4, dan n = 15.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Identifikasi parameter deret aritmetika:\n   - Suku pertama ($a$) $= 20$\n   - Beda ($b$) $= 4$\n   - Banyak baris ($n$) $= 15$\n\n2. Gunakan rumus jumlah deret aritmetika $S_n$:\n   $$S_{15} = \\frac{15}{2} [2(20) + (15 - 1)4]$$\n   $$S_{15} = \\frac{15}{2} [40 + 14(4)]$$\n   $$S_{15} = \\frac{15}{2} [40 + 56] = \\frac{15}{2} [96] = 15 \\times 48 = 720\\text{ kursi}$$\n\nJadi, total kapasitas tempat duduk adalah **C** ($720\\text{ kursi}$).'
    },
    {
      id: 'matwa-barisan-deret-aritmetika-13',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-aritmetika',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Jumlah $n$ suku pertama suatu deret aritmetika ditentukan oleh rumus $S_n = 3n^2 - 2n$. Rumus suku ke-$n$ ($U_n$) dari deret tersebut adalah ...',
      options: [
        { id: 'A', text: '$U_n = 6n - 5$' },
        { id: 'B', text: '$U_n = 6n + 1$' },
        { id: 'C', text: '$U_n = 6n - 2$' },
        { id: 'D', text: '$U_n = 3n - 5$' },
        { id: 'E', text: '$U_n = 6n - 1$' }
      ],
      correct_answer: 'A',
      hint: 'Gunakan hubungan suku ke-n dan jumlah suku: U_n = S_n - S_(n-1).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Gunakan formula $U_n = S_n - S_{n-1}$:\n   - $S_n = 3n^2 - 2n$\n   - $S_{n-1} = 3(n - 1)^2 - 2(n - 1) = 3(n^2 - 2n + 1) - 2n + 2 = 3n^2 - 6n + 3 - 2n + 2 = 3n^2 - 8n + 5$\n\n2. Kurangkan $S_n$ dengan $S_{n-1}$:\n   $$U_n = (3n^2 - 2n) - (3n^2 - 8n + 5)$$\n   $$U_n = 3n^2 - 2n - 3n^2 + 8n - 5$$\n   $$U_n = 6n - 5$$\n\nJadi, rumus suku ke-$n$ adalah **A** ($U_n = 6n - 5$).'
    },
    {
      id: 'matwa-barisan-deret-aritmetika-14',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-aritmetika',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan barisan bilangan aritmetika berhingga:\n$$7,\\; 12,\\; 17,\\; 22,\\; \\dots,\\; 197$$\nBanyaknya suku bilangan pada barisan tersebut adalah ...',
      options: [
        { id: 'A', text: '$37$' },
        { id: 'B', text: '$38$' },
        { id: 'C', text: '$39$' },
        { id: 'D', text: '$40$' },
        { id: 'E', text: '$41$' }
      ],
      correct_answer: 'C',
      hint: 'Identifikasi a = 7, b = 5, dan U_n = 197. Selesaikan persamaan U_n = a + (n - 1)b untuk mencari n.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Identifikasi suku pertama, beda, dan suku terakhir:\n   - $a = 7$\n   - $b = 12 - 7 = 5$\n   - $U_n = 197$\n\n2. Substitusikan ke rumus $U_n = a + (n - 1)b$:\n   $$197 = 7 + (n - 1)5$$\n   $$197 - 7 = 5(n - 1)$$\n   $$190 = 5(n - 1)$$\n   $$n - 1 = \\frac{190}{5} = 38$$\n   $$n = 38 + 1 = 39$$\n\nJadi, banyaknya suku adalah **C** ($39$).'
    },
    {
      id: 'matwa-barisan-deret-aritmetika-15',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-aritmetika',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Antara bilangan $4$ dan $28$ disisipkan sebanyak $5\\text{ bilangan}$ sehingga bersama kedua bilangan semula terbentuk barisan aritmetika baru. Beda ($b$) dari barisan aritmetika baru tersebut adalah ...',
      options: [
        { id: 'A', text: '$3$' },
        { id: 'B', text: '$4$' },
        { id: 'C', text: '$5$' },
        { id: 'D', text: '$6$' },
        { id: 'E', text: '$7$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan rumus sisipan beda baru b\' = (y - x) / (k + 1) dengan x = 4, y = 28, dan k = 5.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Formula beda baru hasil sisipan $k$ bilangan di antara $x$ dan $y$:\n   $$b\' = \\frac{y - x}{k + 1}$$\n\n2. Masukkan nilai yang diketahui:\n   - $x = 4$\n   - $y = 28$\n   - $k = 5$\n   $$b\' = \\frac{28 - 4}{5 + 1} = \\frac{24}{6} = 4$$\n\nJadi, beda barisan yang baru adalah **B** ($4$).'
    },
    {
      id: 'matwa-barisan-deret-aritmetika-16',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-aritmetika',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Suatu barisan aritmetika memiliki suku pertama $a = 5$, suku terakhir $U_n = 85$, dan beda $b = 4$. Suku tengah ($U_t$) dari barisan tersebut terletak pada nomor suku ke-...',
      options: [
        { id: 'A', text: '$9$' },
        { id: 'B', text: '$10$' },
        { id: 'C', text: '$11$' },
        { id: 'D', text: '$12$' },
        { id: 'E', text: '$13$' }
      ],
      correct_answer: 'C',
      hint: 'Hitung nilai suku tengah U_t = (a + U_n) / 2 = 45, lalu cari t dari rumus U_t = a + (t - 1)b.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung nilai suku tengah $U_t$:\n   $$U_t = \\frac{a + U_n}{2} = \\frac{5 + 85}{2} = \\frac{90}{2} = 45$$\n\n2. Tentukan letak indeks $t$ menggunakan rumus suku ke-$t$:\n   $$U_t = a + (t - 1)b$$\n   $$45 = 5 + (t - 1)4$$\n   $$40 = 4(t - 1)$$\n   $$t - 1 = 10 \\implies t = 11$$\n\nJadi, suku tengah terletak pada suku ke-**C** ($11$).'
    },
    {
      id: 'matwa-barisan-deret-aritmetika-17',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-aritmetika',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Tiga bilangan bulat $(k - 1)$, $(2k + 1)$, dan $(4k - 1)$ membentuk barisan aritmetika berurutan. Nilai konstanta $k$ yang memenuhi adalah ...',
      options: [
        { id: 'A', text: '$2$' },
        { id: 'B', text: '$3$' },
        { id: 'C', text: '$4$' },
        { id: 'D', text: '$5$' },
        { id: 'E', text: '$6$' }
      ],
      correct_answer: 'C',
      hint: 'Sifat tiga suku berurutan barisan aritmetika: 2 * U_2 = U_1 + U_3.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Sifat suku tengah barisan aritmetika:\n   $$2U_2 = U_1 + U_3$$\n\n2. Masukkan bentuk aljabar masing-masing suku:\n   $$2(2k + 1) = (k - 1) + (4k - 1)$$\n   $$4k + 2 = 5k - 2$$\n\n3. Selesaikan untuk $k$:\n   $$2 + 2 = 5k - 4k$$\n   $$k = 4$$\n\nJadi, nilai $k$ yang memenuhi adalah **C** ($4$).'
    }
  ],

  'barisan-deret-geometri': [
    {
      id: 'matwa-barisan-deret-geometri-11',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Suku ke-$3$ suatu barisan geometri adalah $18$ dan suku ke-$6$ adalah $486$. Suku ke-$8$ dari barisan geometri tersebut adalah ...',
      options: [
        { id: 'A', text: '$1.458$' },
        { id: 'B', text: '$2.916$' },
        { id: 'C', text: '$4.374$' },
        { id: 'D', text: '$5.832$' },
        { id: 'E', text: '$6.561$' }
      ],
      correct_answer: 'C',
      hint: 'Rasio r^3 = U_6 / U_3 = 486 / 18 = 27. Suku U_8 = U_6 * r^2.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Rumus suku ke-$n$ barisan geometri $U_n = a \\cdot r^{n-1}$:\n   - $U_3 = a \\cdot r^2 = 18$\n   - $U_6 = a \\cdot r^5 = 486$\n\n2. Tentukan rasio $r$:\n   $$\\frac{U_6}{U_3} = \\frac{a r^5}{a r^2} = r^3 = \\frac{486}{18} = 27 \\implies r = \\sqrt[3]{27} = 3$$\n\n3. Hitung suku ke-$8$ ($U_8$):\n   $$U_8 = U_6 \\cdot r^2 = 486 \\cdot 3^2 = 486 \\cdot 9 = 4.374$$\n\nJadi, suku ke-$8$ adalah **C** ($4.374$).'
    },
    {
      id: 'matwa-barisan-deret-geometri-12',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Jumlah $6\\text{ suku}$ pertama dari deret geometri: $2 + 6 + 18 + 54 + \\dots$ adalah ...',
      options: [
        { id: 'A', text: '$486$' },
        { id: 'B', text: '$728$' },
        { id: 'C', text: '$730$' },
        { id: 'D', text: '$1.456$' },
        { id: 'E', text: '$2.186$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan rumus jumlah deret geometri S_n = a(r^n - 1) / (r - 1) dengan a = 2 dan r = 3.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Identifikasi suku pertama dan rasio:\n   - $a = 2$\n   - $r = \\frac{6}{2} = 3$\n\n2. Gunakan rumus jumlah $n$ suku deret geometri ($r > 1$):\n   $$S_n = \\frac{a(r^n - 1)}{r - 1}$$\n   $$S_6 = \\frac{2(3^6 - 1)}{3 - 1} = \\frac{2(729 - 1)}{2} = 728$$\n\nJadi, jumlah $6$ suku pertama adalah **B** ($728$).'
    },
    {
      id: 'matwa-barisan-deret-geometri-13',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah bola tenis dijatuhkan dari ketinggian $12\\text{ meter}$ di atas lantai beton. Setiap kali memantul, bola mencapai ketinggian $\\frac{2}{3}$ dari tinggi pantulan sebelumnya. Panjang total lintasan yang ditempuh bola tersebut sampai berhenti adalah ...',
      options: [
        { id: 'A', text: '$48\\text{ meter}$' },
        { id: 'B', text: '$54\\text{ meter}$' },
        { id: 'C', text: '$60\\text{ meter}$' },
        { id: 'D', text: '$72\\text{ meter}$' },
        { id: 'E', text: '$84\\text{ meter}$' }
      ],
      correct_answer: 'C',
      hint: 'Rumus praktis panjang lintasan pantulan bola: S = h * (b + a) / (b - a) untuk rasio pantulan a/b.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Gunakan formula panjang lintasan bola jatuh dan memantul:\n   $$S = h \\times \\frac{b + a}{b - a}$$\n\n2. Diketahui tinggi awal $h = 12\\text{ meter}$ dan rasio pantulan $\\frac{a}{b} = \\frac{2}{3}$:\n   $$S = 12 \\times \\frac{3 + 2}{3 - 2} = 12 \\times \\frac{5}{1} = 60\\text{ meter}$$\n\nJadi, panjang total lintasan bola adalah **C** ($60\\text{ meter}$).'
    },
    {
      id: 'matwa-barisan-deret-geometri-14',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam sebuah bioreaktor kultur mikroorganisme, suatu koloni bakteri membelah diri menjadi dua setiap $15\\text{ menit}$. Jika populasi awal bakteri terhitung sebanyak $30\\text{ sel}$, banyak bakteri setelah masa inkubasi selama $2\\text{ jam}$ adalah ...',
      options: [
        { id: 'A', text: '$3.840\\text{ sel}$' },
        { id: 'B', text: '$7.680\\text{ sel}$' },
        { id: 'C', text: '$15.360\\text{ sel}$' },
        { id: 'D', text: '$30.720\\text{ sel}$' },
        { id: 'E', text: '$61.440\\text{ sel}$' }
      ],
      correct_answer: 'B',
      hint: 'Lama waktu = 120 menit sehingga terjadi n = 120/15 = 8 kali pembelahan. Hitung P_n = P_0 * 2^n.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung banyaknya siklus pembelahan dalam $2\\text{ jam}$ ($120\\text{ menit}$):\n   $$n = \\frac{120\\text{ menit}}{15\\text{ menit}} = 8\\text{ siklus}$$\n\n2. Gunakan rumus pertumbuhan eksponensial pembelahan:\n   $$P_n = P_0 \\cdot 2^n$$\n   $$P_8 = 30 \\cdot 2^8 = 30 \\cdot 256 = 7.680\\text{ sel}$$\n\nJadi, banyak bakteri setelah $2$ jam adalah **B** ($7.680\\text{ sel}$).'
    },
    {
      id: 'matwa-barisan-deret-geometri-15',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Suatu isotop radioaktif memiliki waktu paruh $10\\text{ hari}$. Jika massa awal zat radioaktif tersebut adalah $80\\text{ gram}$, sisa massa zat radioaktif yang belum meluruh setelah disimpan selama $40\\text{ hari}$ adalah ...',
      options: [
        { id: 'A', text: '$2{,}5\\text{ gram}$' },
        { id: 'B', text: '$5\\text{ gram}$' },
        { id: 'C', text: '$10\\text{ gram}$' },
        { id: 'D', text: '$15\\text{ gram}$' },
        { id: 'E', text: '$20\\text{ gram}$' }
      ],
      correct_answer: 'B',
      hint: 'Banyak periode paruh n = 40 / 10 = 4. Sisa massa M = M_0 * (1/2)^n.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Tentukan jumlah periode peluruhan:\n   $$n = \\frac{t}{T_{1/2}} = \\frac{40\\text{ hari}}{10\\text{ hari}} = 4$$\n\n2. Gunakan rumus peluruhan radioaktif:\n   $$M = M_0 \\left(\\frac{1}{2}\\right)^n$$\n   $$M = 80 \\times \\left(\\frac{1}{2}\\right)^4 = 80 \\times \\frac{1}{16} = 5\\text{ gram}$$\n\nJadi, sisa zat radioaktif adalah **B** ($5\\text{ gram}$).'
    },
    {
      id: 'matwa-barisan-deret-geometri-16',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah deret geometri tak hingga konvergen memiliki suku pertama $a = 16$ dan jumlah tak hingga $S_\\infty = 24$. Nilai rasio ($r$) dari deret geometri tersebut adalah ...',
      options: [
        { id: 'A', text: '$\\frac{1}{4}$' },
        { id: 'B', text: '$\\frac{1}{3}$' },
        { id: 'C', text: '$\\frac{1}{2}$' },
        { id: 'D', text: '$\\frac{2}{3}$' },
        { id: 'E', text: '$\\frac{3}{4}$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan rumus jumlah deret geometri tak hingga S_\\infty = a / (1 - r).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Formula deret geometri tak hingga konvergen:\n   $$S_\\infty = \\frac{a}{1 - r}$$\n\n2. Masukkan nilai $S_\\infty = 24$ dan $a = 16$:\n   $$24 = \\frac{16}{1 - r}$$\n   $$1 - r = \\frac{16}{24} = \\frac{2}{3}$$\n\n3. Selesaikan untuk $r$:\n   $$r = 1 - \\frac{2}{3} = \\frac{1}{3}$$\n\nJadi, rasio deret tersebut adalah **B** ($\\frac{1}{3}$).'
    },
    {
      id: 'matwa-barisan-deret-geometri-17',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'barisan-deret-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Tiga bilangan positif $k$, $k + 6$, dan $4k$ membentuk tiga suku berurutan barisan geometri. Rasio ($r$) dari barisan geometri tersebut adalah ...',
      options: [
        { id: 'A', text: '$\\frac{3}{2}$' },
        { id: 'B', text: '$2$' },
        { id: 'C', text: '$\\frac{5}{2}$' },
        { id: 'D', text: '$3$' },
        { id: 'E', text: '$4$' }
      ],
      correct_answer: 'B',
      hint: 'Sifat tiga suku berurutan barisan geometri: (U_2)^2 = U_1 * U_3. Cari nilai k positif, lalu tentukan rasio r = U_2 / U_1.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Gunakan sifat geometri $(U_2)^2 = U_1 \\cdot U_3$:\n   $$(k + 6)^2 = k \\cdot 4k$$\n   $$k^2 + 12k + 36 = 4k^2$$\n\n2. Bentuk persamaan kuadrat standar:\n   $$3k^2 - 12k - 36 = 0$$\n   Bagi dengan $3$:\n   $$k^2 - 4k - 12 = 0$$\n   $$(k - 6)(k + 2) = 0$$\n\n3. Karena barisan terdiri dari bilangan positif, pilih $k = 6$.\n\n4. Tentukan ketiga suku barisan:\n   - $U_1 = 6$\n   - $U_2 = 6 + 6 = 12$\n   - $U_3 = 4(6) = 24$\n\n5. Rasio barisan:\n   $$r = \\frac{U_2}{U_1} = \\frac{12}{6} = 2$$\n\nJadi, rasio barisan tersebut adalah **B** ($2$).'
    }
  ],

  'bunga-tunggal-majemuk': [
    {
      id: 'matwa-bunga-tunggal-majemuk-11',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'bunga-tunggal-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Ibu Rina menyimpan uang di bank sebesar $\\text{Rp}8.000.000,00$ dengan sistem bunga tunggal sebesar $9\\%$ per tahun. Besar bunga yang diperoleh Ibu Rina setelah menabung selama $8\\text{ bulan}$ adalah ...',
      options: [
        { id: 'A', text: '$\\text{Rp}420.000,00$' },
        { id: 'B', text: '$\\text{Rp}450.000,00$' },
        { id: 'C', text: '$\\text{Rp}480.000,00$' },
        { id: 'D', text: '$\\text{Rp}520.000,00$' },
        { id: 'E', text: '$\\text{Rp}540.000,00$' }
      ],
      correct_answer: 'C',
      hint: 'Rumus bunga tunggal B = M_0 * i * (t / 12) dengan t = 8 bulan dan i = 0,09 per tahun.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Formula bunga tunggal untuk waktu dalam satuan bulan:\n   $$B = M_0 \\times i \\times \\frac{t}{12}$$\n\n2. Masukkan nilai yang diketahui:\n   - Modal awal $M_0 = 8.000.000$\n   - Bunga tahunan $i = 9\\% = 0{,}09$\n   - Waktu $t = 8\\text{ bulan}$\n\n3. Hitung besaran bunga:\n   $$B = 8.000.000 \\times 0{,}09 \\times \\frac{8}{12}$$\n   $$B = 8.000.000 \\times 0{,}09 \\times \\frac{2}{3} = 8.000.000 \\times 0{,}06 = \\text{Rp}480.000,00$$\n\nJadi, besar bunga yang diperoleh adalah **C** ($\\text{Rp}480.000,00$).'
    },
    {
      id: 'matwa-bunga-tunggal-majemuk-12',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'bunga-tunggal-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Modal investasi sebesar $\\text{Rp}5.000.000,00$ dibungakan dengan sistem bunga tunggal $8\\%$ per tahun. Jika pada akhir periode modal tersebut berkembang menjadi $\\text{Rp}5.600.000,00$, lama waktu modal tersebut dibungakan adalah ...',
      options: [
        { id: 'A', text: '$12\\text{ bulan}$' },
        { id: 'B', text: '$15\\text{ bulan}$' },
        { id: 'C', text: '$18\\text{ bulan}$' },
        { id: 'D', text: '$21\\text{ bulan}$' },
        { id: 'E', text: '$24\\text{ bulan}$' }
      ],
      correct_answer: 'C',
      hint: 'Hitung total bunga B = 5.600.000 - 5.000.000 = 600.000. Selesaikan t dari B = M_0 * i * t.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung total bunga yang diperoleh:\n   $$B = M_t - M_0 = 5.600.000 - 5.000.000 = \\text{Rp}600.000,00$$\n\n2. Gunakan rumus bunga tunggal tahunan $B = M_0 \\times i \\times t$:\n   $$600.000 = 5.000.000 \\times 0{,}08 \\times t$$\n   $$600.000 = 400.000 \\times t$$\n   $$t = \\frac{600.000}{400.000} = 1{,}5\\text{ tahun}$$\n\n3. Konversikan tahun ke bulan:\n   $$t = 1{,}5 \\times 12 = 18\\text{ bulan}$$\n\nJadi, lama waktu modal dibungakan adalah **C** ($18\\text{ bulan}$).'
    },
    {
      id: 'matwa-bunga-tunggal-majemuk-13',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'bunga-tunggal-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Pak Danu mendepositokan modal sebesar $\\text{Rp}10.000.000,00$ di sebuah lembaga keuangan dengan suku bunga majemuk $5\\%$ per tahun yang dikapitalisasi setiap akhir tahun. Nilai akhir modal Pak Danu pada akhir tahun ke-$3$ adalah ...',
      options: [
        { id: 'A', text: '$\\text{Rp}11.500.000,00$' },
        { id: 'B', text: '$\\text{Rp}11.576.250,00$' },
        { id: 'C', text: '$\\text{Rp}11.600.000,00$' },
        { id: 'D', text: '$\\text{Rp}11.625.500,00$' },
        { id: 'E', text: '$\\text{Rp}12.000.000,00$' }
      ],
      correct_answer: 'B',
      hint: 'Rumus bunga majemuk M_n = M_0 * (1 + i)^n. Hitung (1,05)^3 = 1,157625.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Formula bunga majemuk:\n   $$M_n = M_0(1 + i)^n$$\n\n2. Masukkan parameter:\n   - $M_0 = 10.000.000$\n   - $i = 5\\% = 0{,}05$\n   - $n = 3\\text{ tahun}$\n\n3. Hitung akumulasi modal:\n   $$M_3 = 10.000.000 \\times (1 + 0{,}05)^3$$\n   $$M_3 = 10.000.000 \\times (1{,}05)^3 = 10.000.000 \\times 1{,}157625 = \\text{Rp}11.576.250,00$$\n\nJadi, nilai akhir modal Pak Danu adalah **B** ($\\text{Rp}11.576.250,00$).'
    },
    {
      id: 'matwa-bunga-tunggal-majemuk-14',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'bunga-tunggal-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Modal usaha sebesar $\\text{Rp}12.000.000,00$ diinvestasikan dengan suku bunga majemuk $12\\%$ per tahun dengan periode penggabungan bunga setiap $6\\text{ bulan}$ (semesteran). Jumlah total modal akhir setelah $1\\text{ tahun}$ adalah ...',
      options: [
        { id: 'A', text: '$\\text{Rp}13.440.000,00$' },
        { id: 'B', text: '$\\text{Rp}13.483.200,00$' },
        { id: 'C', text: '$\\text{Rp}13.520.000,00$' },
        { id: 'D', text: '$\\text{Rp}13.600.000,00$' },
        { id: 'E', text: '$\\text{Rp}13.728.000,00$' }
      ],
      correct_answer: 'B',
      hint: 'Suku bunga per semester = 12% / 2 = 6% = 0,06. Jumlah periode dalam 1 tahun = 2 semester. M_2 = M_0 * (1,06)^2.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung suku bunga per periode semester:\n   $$i_{\\text{semester}} = \\frac{12\\%}{2} = 6\\% = 0{,}06$$\n\n2. Hitung jumlah periode majemuk dalam $1\\text{ tahun}$:\n   $$n = 1 \\times 2 = 2\\text{ periode}$$\n\n3. Hitung modal akhir:\n   $$M_2 = 12.000.000 \\times (1 + 0{,}06)^2$$\n   $$M_2 = 12.000.000 \\times (1{,}06)^2 = 12.000.000 \\times 1{,}1236 = \\text{Rp}13.483.200,00$$\n\nJadi, modal akhir setelah $1$ tahun adalah **B** ($\\text{Rp}13.483.200,00$).'
    },
    {
      id: 'matwa-bunga-tunggal-majemuk-15',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'bunga-tunggal-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah pinjaman modal koperasi sebesar $\\text{Rp}10.000.000,00$ akan dilunasi dengan sistem anuitas bulanan sebesar $\\text{Rp}850.000,00$ dengan suku bunga $2\\%$ per bulan. Besar angsuran pokok pertama ($a_1$) untuk pengembalian pinjaman tersebut adalah ...',
      options: [
        { id: 'A', text: '$\\text{Rp}600.000,00$' },
        { id: 'B', text: '$\\text{Rp}650.000,00$' },
        { id: 'C', text: '$\\text{Rp}700.000,00$' },
        { id: 'D', text: '$\\text{Rp}720.000,00$' },
        { id: 'E', text: '$\\text{Rp}750.000,00$' }
      ],
      correct_answer: 'B',
      hint: 'Anuitas A = a_1 + b_1. Bunga pertama b_1 = Pinjaman awal * suku bunga.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung porsi bunga pada pembayaran bulan pertama ($b_1$):\n   $$b_1 = M_0 \\times i = 10.000.000 \\times 2\\% = 10.000.000 \\times 0{,}02 = \\text{Rp}200.000,00$$\n\n2. Gunakan hubungan anuitas ($A = a_1 + b_1$):\n   $$a_1 = A - b_1$$\n   $$a_1 = 850.000 - 200.000 = \\text{Rp}650.000,00$$\n\nJadi, besar angsuran pokok pertama adalah **B** ($\\text{Rp}650.000,00$).'
    },
    {
      id: 'matwa-bunga-tunggal-majemuk-16',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'bunga-tunggal-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Ali dan Budi masing-masing mendepositokan modal sebesar $\\text{Rp}10.000.000,00$ selama $2\\text{ tahun}$ dengan suku bunga $10\\%$ per tahun. Ali memilih produk simpanan dengan bunga tunggal, sedangkan Budi memilih simpanan dengan bunga majemuk tahunan. Selisih total bunga yang diperoleh Budi dan Ali pada akhir tahun ke-$2$ adalah ...',
      options: [
        { id: 'A', text: '$\\text{Rp}50.000,00$' },
        { id: 'B', text: '$\\text{Rp}100.000,00$' },
        { id: 'C', text: '$\\text{Rp}150.000,00$' },
        { id: 'D', text: '$\\text{Rp}200.000,00$' },
        { id: 'E', text: '$\\text{Rp}250.000,00$' }
      ],
      correct_answer: 'B',
      hint: 'Hitung bunga tunggal Ali = M * i * t, dan bunga majemuk Budi = M * ((1 + i)^2 - 1). Cari selisihnya.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Bunga tunggal Ali selama $2\\text{ tahun}$:\n   $$B_{\\text{Ali}} = 10.000.000 \\times 0{,}10 \\times 2 = \\text{Rp}2.000.000,00$$\n\n2. Bunga majemuk Budi selama $2\\text{ tahun}$:\n   $$M_{\\text{Budi}} = 10.000.000 \\times (1 + 0{,}10)^2 = 10.000.000 \\times 1{,}21 = \\text{Rp}12.100.000,00$$\n   $$B_{\\text{Budi}} = 12.100.000 - 10.000.000 = \\text{Rp}2.100.000,00$$\n\n3. Hitung selisih bunga:\n   $$\\Delta B = B_{\\text{Budi}} - B_{\\text{Ali}} = 2.100.000 - 2.000.000 = \\text{Rp}100.000,00$$\n\nJadi, selisih bunga yang diperoleh adalah **B** ($\\text{Rp}100.000,00$).'
    },
    {
      id: 'matwa-bunga-tunggal-majemuk-17',
      chapter_id: 'barisan-dan-deret',
      sub_chapter_id: 'bunga-tunggal-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Seorang pedagang mengajukan pinjaman dengan sistem diskonto $10\\%$ per tahun yang dipotong langsung saat penerimaan uang. Jika uang bersih yang diterima pedagang adalah $\\text{Rp}18.000.000,00$ untuk jangka waktu pelunasan $1\\text{ tahun}$, besar nilai nominal pinjaman yang harus dikembalikan pada saat jatuh tempo adalah ...',
      options: [
        { id: 'A', text: '$\\text{Rp}19.800.000,00$' },
        { id: 'B', text: '$\\text{Rp}20.000.000,00$' },
        { id: 'C', text: '$\\text{Rp}20.500.000,00$' },
        { id: 'D', text: '$\\text{Rp}21.000.000,00$' },
        { id: 'E', text: '$\\text{Rp}22.000.000,00$' }
      ],
      correct_answer: 'B',
      hint: 'Uang bersih diterima = Nominal pinjaman * (1 - d * t). Cari nominal pinjaman dengan membagi 18.000.000 dengan (1 - 0,10).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Formula diskonto tunggal:\n   $$\\text{Uang Diterima} = M(1 - d \\cdot t)$$\n\n2. Masukkan nilai yang diketahui:\n   - Uang diterima $= 18.000.000$\n   - Laju diskonto $d = 10\\% = 0{,}10$\n   - Waktu $t = 1\\text{ tahun}$\n\n3. Selesaikan untuk nilai nominal pinjaman $M$:\n   $$18.000.000 = M(1 - 0{,}10 \\times 1)$$\n   $$18.000.000 = 0{,}90 M$$\n   $$M = \\frac{18.000.000}{0{,}90} = \\text{Rp}20.000.000,00$$\n\nJadi, nilai nominal pinjaman yang harus dikembalikan adalah **B** ($\\text{Rp}20.000.000,00$).'
    }
  ]
};

// VALIDATE & WRITE
console.log('🔍 MEMVALIDASI SEMUA RUMUS KATEX DAN SCHEMA PERTANYAAN BATCH 2...');

for (const [subChapter, newQuestions] of Object.entries(batch2Data)) {
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

console.log('\n✨ SELURUH PERTANYAAN BATCH 2 SELESAI DITULISKAN DENGAN SUKSES!');
