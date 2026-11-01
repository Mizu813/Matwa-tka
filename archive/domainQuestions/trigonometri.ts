import { Question } from '../../types/quiz';

export const trigonometriQuestions: Question[] = [
  // Soal 39 (Paket 1 - No. 20)
  {
    id: 'p1-soal-20',
    number: 39,
    package: 'Paket 1',
    packageQuestionNumber: 20,
    module: 'Trigonometri',
    competency: 'Menentukan nilai perbandingan trigonometri sudut pada dua segitiga siku-siku bertingkat',
    subCompetency: 'Perbandingan Trigonometri Segitiga Siku-Siku Bertingkat',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_kategori',
    title: 'Evaluasi Nilai Perbandingan Trigonometri Segitiga Bertingkat CO tegak lurus AB',
    scenario:
      'Perhatikan gambar: Segitiga $ABC$ memiliki garis tinggi $CO$ yang tegak lurus alas $AB$ di titik $O$:\n• Pada $\\triangle AOC$ siku-siku di $O$: panjang sisi miring $AC = 20\\text{ cm}$, sudut di titik $A$ adalah $\\alpha$, dan diketahui $\\sin \\alpha = \\frac{3}{4}$.\n• Pada $\\triangle BOC$ siku-siku di $O$: panjang alas $OB = 8\\text{ cm}$, dan sudut di puncak $\\angle BCO$ adalah $\\beta$.',
    questionPrompt:
      'Diketahui $\\sin \\alpha = \\frac{3}{4}$. Tentukan Benar atau Salah untuk setiap pernyataan perbandingan trigonometri sudut $\\beta$ berikut!',
    svgComponentId: 'p1_soal_20_segitiga_trig',
    categoryStatements: [
      { id: 'stmt1', label: '1', statement: '$\\sin \\beta = \\frac{8}{17}$', correctAnswer: true },
      { id: 'stmt2', label: '2', statement: '$\\cos \\beta = \\frac{15}{20}$', correctAnswer: false },
      { id: 'stmt3', label: '3', statement: '$\\tan \\beta = \\frac{8}{15}$', correctAnswer: true },
    ],
    correctAnswer: { stmt1: true, stmt2: false, stmt3: true },
    explanation: {
      summary:
        'Hitung tinggi $CO$ dari $\\sin \\alpha = \\frac{CO}{AC}$, lalu hitung sisi miring $BC$ pada $\\triangle BOC$ dengan Teorema Pythagoras, dan tentukan perbandingan sudut $\\beta = \\angle BCO$.',
      steps: [
        {
          title: 'Hitung Panjang Sisi Tinggi $CO$',
          content:
            'Pada $\\triangle AOC$ siku-siku di $O$:\n$$\\sin \\alpha = \\frac{CO}{AC} \\implies \\frac{3}{4} = \\frac{CO}{20} \\implies CO = \\frac{3}{4} \\times 20 = 15\\text{ cm}$$',
          formula: 'CO = 15\\text{ cm}',
        },
        {
          title: 'Hitung Sisi Miring $BC$ pada $\\triangle BOC$',
          content:
            'Pada $\\triangle BOC$ siku-siku di $O$:\n$$OB = 8\\text{ cm}, \\quad CO = 15\\text{ cm}$$\n$$BC = \\sqrt{OB^2 + CO^2} = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17\\text{ cm}$$',
          formula: 'BC = 17\\text{ cm}',
        },
        {
          title: 'Tentukan Perbandingan Trigonometri Sudut $\\beta = \\angle BCO$',
          content:
            'Pada sudut $\\beta$:\n• Sisi depan $= OB = 8\\text{ cm}$\n• Sisi samping $= CO = 15\\text{ cm}$\n• Sisi miring $= BC = 17\\text{ cm}$\nMaka:\n1. $\\sin \\beta = \\frac{\\text{depan}}{\\text{miring}} = \\frac{8}{17}$ → **BENAR**.\n2. $\\cos \\beta = \\frac{\\text{samping}}{\\text{miring}} = \\frac{15}{17} \\ne \\frac{15}{20}$ → **SALAH**.\n3. $\\tan \\beta = \\frac{\\text{depan}}{\\text{samping}} = \\frac{8}{15}$ → **BENAR**.',
          formula: '\\sin \\beta = \\frac{8}{17};\\; \\cos \\beta = \\frac{15}{17};\\; \\tan \\beta = \\frac{8}{15}',
        },
      ],
      keyConcept: 'Definisi Dasar Perbandingan Trigonometri Segitiga Siku-Siku: Sin, Cos, Tan',
    },
    hint1: 'Cari tinggi $CO$ dari $\\sin \\alpha = \\frac{CO}{20} = \\frac{3}{4} \\implies CO = 15$.',
    hint2: 'Gunakan tripel Pythagoras 8-15-17 untuk menemukan panjang $BC = 17\\text{ cm}$.',
    trap: 'Perhatikan bahwa sisi samping untuk sudut $\\beta = \\angle BCO$ adalah $CO = 15$, bukan $OB$.',
  },

  // Soal 40 (Paket 2 - No. 20)
  {
    id: 'p2-soal-20',
    number: 40,
    package: 'Paket 2',
    packageQuestionNumber: 20,
    module: 'Trigonometri',
    competency: 'Menghitung nilai perbandingan trigonometri dari relasi dua segitiga siku-siku bersisian',
    subCompetency: 'Relasi Perbandingan Sudut Segitiga Siku-Siku',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_kategori',
    title: 'Analisis Kebenaran Nilai Perbandingan Sudut Segitiga Siku-Siku AD tegak lurus BC',
    scenario:
      'Perhatikan gambar: Segitiga $ABC$ memiliki garis tinggi $AD \\perp BC$:\n• Pada $\\triangle ABD$ siku-siku di $D$: sisi miring $AB = 4\\text{ cm}$ dan sudut $\\angle ABD = \\beta$.\n• Pada $\\triangle ACD$ siku-siku di $D$: sudut $\\angle CAD = \\alpha$ dengan diketahui $\\cos \\alpha = \\frac{3}{5}$. Panjang sisi $AD$ dan $DC$ saling bersesuaian dengan perbandingan tersebut.',
    questionPrompt:
      'Jika diketahui $\\cos \\alpha = \\frac{3}{5}$, tentukan Benar atau Salah terkait nilai perbandingan trigonometri sudut $\\beta$ berikut!',
    svgComponentId: 'p2_soal_20_segitiga_trig2',
    categoryStatements: [
      { id: 'stmt1', label: '1', statement: '$\\sin \\beta = \\frac{\\sqrt{7}}{4}$', correctAnswer: false },
      { id: 'stmt2', label: '2', statement: '$\\cos \\beta = \\frac{\\sqrt{7}}{5}$', correctAnswer: false },
      { id: 'stmt3', label: '3', statement: '$\\tan \\beta = \\frac{3\\sqrt{7}}{7}$', correctAnswer: true },
    ],
    correctAnswer: { stmt1: false, stmt2: false, stmt3: true },
    explanation: {
      summary:
        'Tentukan panjang sisi tinggi $AD$ dari perbandingan $\\cos \\alpha = \\frac{AD}{AC} = \\frac{3}{5}$, cari sisi alas $BD$ pada $\\triangle ABD$ menggunakan Teorema Pythagoras, lalu evaluasi rasio trigonometri sudut $\\beta$.',
      steps: [
        {
          title: 'Tentukan Sisi $AD$ dari Perbandingan Sudut $\\alpha$',
          content:
            'Pada $\\triangle ACD$ siku-siku di $D$:\n$$\\cos \\alpha = \\frac{\\text{samping}}{\\text{miring}} = \\frac{AD}{AC} = \\frac{3}{5}$$\nSehingga dapat dimodelkan $AD = 3\\text{ cm}$.',
          formula: 'AD = 3\\text{ cm}',
        },
        {
          title: 'Hitung Sisi $BD$ pada $\\triangle ABD$',
          content:
            'Pada $\\triangle ABD$ siku-siku di $D$ dengan sisi miring $AB = 4\\text{ cm}$ dan $AD = 3\\text{ cm}$:\n$$BD = \\sqrt{AB^2 - AD^2} = \\sqrt{4^2 - 3^2} = \\sqrt{16 - 9} = \\sqrt{7}\\text{ cm}$$',
          formula: 'BD = \\sqrt{7}\\text{ cm}',
        },
        {
          title: 'Evaluasi Perbandingan Trigonometri Sudut $\\beta = \\angle ABD$',
          content:
            '• Sisi depan $= AD = 3\\text{ cm}$\n• Sisi samping $= BD = \\sqrt{7}\\text{ cm}$\n• Sisi miring $= AB = 4\\text{ cm}$\nMaka:\n1. $\\sin \\beta = \\frac{AD}{AB} = \\frac{3}{4} \\ne \\frac{\\sqrt{7}}{4}$ → **SALAH** (nilai $\\frac{\\sqrt{7}}{4}$ adalah $\\cos \\beta$).\n2. $\\cos \\beta = \\frac{BD}{AB} = \\frac{\\sqrt{7}}{4} \\ne \\frac{\\sqrt{7}}{5}$ → **SALAH**.\n3. $\\tan \\beta = \\frac{AD}{BD} = \\frac{3}{\\sqrt{7}} = \\frac{3\\sqrt{7}}{7}$ → **BENAR**.',
          formula: '\\tan \\beta = \\frac{3\\sqrt{7}}{7}',
        },
      ],
      keyConcept: 'Perbandingan Trigonometri dan Rasio Sisi Segitiga Siku-Siku',
    },
    hint1: 'Dari $\\cos \\alpha = \\frac{3}{5}$, diperoleh tinggi $AD = 3$.',
    hint2: 'Cari $BD = \\sqrt{4^2 - 3^2} = \\sqrt{7}$. Lalu hitung $\\tan \\beta = \\frac{3}{\\sqrt{7}} = \\frac{3\\sqrt{7}}{7}$.',
    trap: 'Rasionalkan bentuk akar pada $\\tan \\beta$: $\\frac{3}{\\sqrt{7}} \\times \\frac{\\sqrt{7}}{\\sqrt{7}} = \\frac{3\\sqrt{7}}{7}$.',
  },

  // Soal 41 (Paket 3 - No. 1)
  {
    id: 'p3-soal-1',
    number: 41,
    package: 'Paket 3',
    packageQuestionNumber: 1,
    module: 'Trigonometri',
    competency: 'Mengevaluasi kebenaran nilai perbandingan sudut pada segitiga bertingkat',
    subCompetency: 'Trigonometri (Segitiga Bertingkat)',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_kategori',
    title: 'Evaluasi Nilai Perbandingan Sudut Segitiga Bertingkat AB=8 dan AD=4',
    scenario:
      'Perhatikan gambar: Segitiga $ABC$ memiliki garis tinggi $AD \\perp BC$:\n• Sisi $AB = 8\\text{ cm}$ dan tinggi segitiga $AD = 4\\text{ cm}$.\n• Sudut $\\angle BAD = \\beta$ dan sudut di titik $A$ pada segitiga kanan adalah $\\alpha$.\n• Diketahui nilai $\\sin \\alpha = \\frac{8}{10}$.',
    questionPrompt:
      'Diketahui $\\sin \\alpha = \\frac{8}{10}$. Tentukan Benar atau Salah pada setiap pernyataan berikut terkait perbandingan sudut segitiga tersebut!',
    svgComponentId: 'p3_soal_1_segitiga_trig3',
    categoryStatements: [
      { id: 'stmt1', label: '1', statement: '$\\sin \\beta = \\frac{5}{4}$', correctAnswer: false },
      { id: 'stmt2', label: '2', statement: '$\\cos \\beta = \\frac{\\sqrt{7}}{4}$', correctAnswer: false },
      { id: 'stmt3', label: '3', statement: '$\\tan \\beta = \\frac{3\\sqrt{7}}{7}$', correctAnswer: false },
    ],
    correctAnswer: { stmt1: false, stmt2: false, stmt3: false },
    explanation: {
      summary:
        'Hitung sudut dan sisi segitiga siku-siku $\\triangle ABD$: $\\sin \\angle ABD = \\frac{4}{8} = \\frac{1}{2} \\implies \\angle ABD = 30^{\\circ}$, sehingga $\\beta = 60^{\\circ}$ atau sebaliknya. Nilai sinus tidak pernah melebihi 1.',
      steps: [
        {
          title: 'Analisis Sudut dan Nilai Sinus',
          content:
            'Nilai fungsi sinus untuk sudut lancip segitiga selalu berada pada interval $0 < \\sin x \\le 1$.\nPernyataan 1 menyatakan $\\sin \\beta = \\frac{5}{4} = 1{,}25 > 1$ yang secara matematis mustahil → **SALAH**.',
        },
        {
          title: 'Hitung Nilai Trigonometri Sebenarnya',
          content:
            'Pada $\\triangle ABD$ siku-siku di $D$ dengan $AB = 8$ dan $AD = 4$:\n$$BD = \\sqrt{8^2 - 4^2} = \\sqrt{64 - 16} = \\sqrt{48} = 4\\sqrt{3}\\text{ cm}$$\nNilai $\\cos \\beta$ dan $\\tan \\beta$ yang sebenarnya memuat unsur $\\sqrt{3}$, bukan $\\sqrt{7}$:\nPernyataan 2 ($\\cos \\beta = \\frac{\\sqrt{7}}{4}$) → **SALAH**.\nPernyataan 3 ($\\tan \\beta = \\frac{3\\sqrt{7}}{7}$) → **SALAH**.',
        },
        {
          title: 'Kesimpulan',
          content:
            'Seluruh pernyataan pada tabel bernilai **SALAH**.',
        },
      ],
      keyConcept: 'Batas Nilai Fungsi Trigonometri dan Perbandingan Segitiga Siku-Siku Istimewa',
    },
    hint1: 'Nilai sinus sudut nyata tidak pernah lebih besar dari 1 ($5/4 > 1$).',
    hint2: 'Sisi $BD = \\sqrt{8^2 - 4^2} = \\sqrt{48} = 4\\sqrt{3}$, sehingga tidak memuat $\\sqrt{7}$.',
    trap: 'Perhatikan bahwa ketiga pernyataan pada tabel modul adalah pernyataan pengecoh yang semuanya bernilai salah.',
  },
];
