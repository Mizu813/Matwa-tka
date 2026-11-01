import { Question } from '../../types/quiz';

export const transformasiGeometriQuestions: Question[] = [
  // Soal 37 (Paket 1 - No. 14)
  {
    id: 'p1-soal-14',
    number: 37,
    package: 'Paket 1',
    packageQuestionNumber: 14,
    module: 'Transformasi Geometri',
    competency: 'Menentukan koordinat titik asal hasil komposisi transformasi rotasi dan translasi',
    subCompetency: 'Komposisi Rotasi & Translasi',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Penentuan Koordinat Awal Titik Komposisi Rotasi dan Translasi',
    scenario:
      'Titik $C$ dirotasikan sejauh $90^{\\circ}$ berlawanan arah jarum jam dengan pusat rotasi $(0,0)$, kemudian dilanjutkan dengan translasi oleh $T\\binom{-1}{4}$. Titik $C\'$ merupakan bayangan titik $C$ hasil komposisi transformasi tersebut. Jika bayangan akhir berada pada grafik koordinat Kartesius dengan posisi bayangan $C\'(-5, 7)$.',
    questionPrompt:
      'Koordinat titik $C$ mula-mula yang sesuai adalah ...',
    options: [
      { id: 'A', label: 'A', text: 'Titik $C(0, 1)$' },
      { id: 'B', label: 'B', text: 'Titik $C(3, 3)$' },
      { id: 'C', label: 'C', text: 'Titik $C(5, -2)$' },
      { id: 'D', label: 'D', text: 'Titik $C(3, 4)$' },
      { id: 'E', label: 'E', text: 'Titik $C(-5, 2)$' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Lakukan proses inversi dari translasi, kemudian lakukan inversi rotasi sejauh $90^{\\circ}$ berlawanan arah jarum jam (yaitu rotasi $90^{\\circ}$ searah jarum jam atau $-90^{\\circ}$).',
      steps: [
        {
          title: 'Invers Translasi',
          content:
            'Bayangan akhir $C\'(-5, 7)$ dihasilkan dari translasi $T\\binom{-1}{4}$:\n$$x\' = x_1 - 1 \\implies -5 = x_1 - 1 \\implies x_1 = -4$$\n$$y\' = y_1 + 4 \\implies 7 = y_1 + 4 \\implies y_1 = 3$$\nKoordinat setelah rotasi adalah $C_1(-4, 3)$.',
          formula: 'C_1 = (-4, 3)',
        },
        {
          title: 'Invers Rotasi $90^{\\circ}$ Berlawanan Arah Jarum Jam',
          content:
            'Rumus rotasi $90^{\\circ}$ berlawanan arah jarum jam terhadap $(0,0)$:\n$$\\binom{x_1}{y_1} = \\binom{-y}{x}$$\nMaka:\n$$-y = x_1 = -4 \\implies y = 4$$\n$$x = y_1 = 3 \\implies x = 3$$\nSehingga koordinat titik $C$ mula-mula adalah $(3, 4)$.',
          formula: 'C(x, y) = (3, 4)',
        },
      ],
      keyConcept: 'Komposisi Transformasi Geometri dan Matriks Invers Transformasi',
    },
    hint1: 'Kurangkan koordinat bayangan dengan vektor translasi $(-1, 4)$ untuk mendapatkan koordinat setelah rotasi.',
    hint2: 'Gunakan relasi rotasi $90^{\\circ}$: $(-y, x) = (-4, 3)$, sehingga $x = 3$ dan $y = 4$.',
    trap: 'Perhatikan arah putaran rotasi: berlawanan arah jarum jam bernilai positif $+90^{\\circ}$, menghasilkan $(-y, x)$.',
  },

  // Soal 38 (Paket 2 - No. 14)
  {
    id: 'p2-soal-14',
    number: 38,
    package: 'Paket 2',
    packageQuestionNumber: 14,
    module: 'Transformasi Geometri',
    competency: 'Mengidentifikasi komposisi refleksi dan translasi yang menghasilkan koordinat bayangan',
    subCompetency: 'Komposisi Refleksi & Translasi',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Identifikasi Rangkaian Transformasi Refleksi dan Translasi Titik',
    scenario:
      'Sebuah titik $R(4, 1)$ mengalami dua operasi transformasi geometri secara berturut-turut hingga koordinat akhirnya berubah menjadi $R\'\'(-3, 5)$.',
    questionPrompt:
      'Manakah dari rangkaian transformasi berikut yang secara akurat menjelaskan perubahan posisi tersebut?',
    options: [
      { id: 'A', label: 'A', text: 'Refleksi terhadap garis $y = x$ diikuti translasi $T\\binom{-4}{1}$' },
      { id: 'B', label: 'B', text: 'Refleksi terhadap garis $y = -x$ diikuti translasi $T\\binom{-2}{1}$' },
      { id: 'C', label: 'C', text: 'Refleksi terhadap garis $y = x$ diikuti translasi $T\\binom{-2}{1}$' },
      { id: 'D', label: 'D', text: 'Refleksi terhadap garis $y = -x$ diikuti translasi $T\\binom{2}{1}$' },
      { id: 'E', label: 'E', text: 'Refleksi terhadap titik $O(0,0)$ diikuti translasi $T\\binom{-2}{1}$' },
    ],
    correctAnswer: 'A',
    explanation: {
      summary:
        'Uji rangkaian transformasi pada pilihan A: refleksi terhadap garis $y = x$ menukar absis dan ordinat menjadi $(1, 4)$, kemudian translasi $(-4, 1)$ menghasilkan $(-3, 5)$.',
      steps: [
        {
          title: 'Operasi 1: Refleksi Terhadap Garis $y = x$',
          content:
            'Titik $R(4, 1)$ direfleksikan terhadap garis $y = x$:\n$$R(x, y) \\xrightarrow{y = x} R\'(y, x)$$\n$$R(4, 1) \\xrightarrow{y = x} R\'(1, 4)$$',
          formula: 'R\' = (1, 4)',
        },
        {
          title: 'Operasi 2: Translasi oleh $T\\binom{-4}{1}$',
          content:
            '$$R\'\' = \\binom{1}{4} + \\binom{-4}{1} = \\binom{1 - 4}{4 + 1} = \\binom{-3}{5}$$',
          formula: 'R\'\' = (-3, 5)',
        },
        {
          title: 'Kesimpulan',
          content:
            'Hasil akhir $(-3, 5)$ persis sesuai dengan koordinat $R\'\'$. Jadi pilihan yang benar adalah **A**.',
        },
      ],
      keyConcept: 'Refleksi Terhadap Garis $y = x$ dan Translasi Vektor',
    },
    hint1: 'Refleksi terhadap garis $y = x$ mengubah koordinat $(x, y)$ menjadi $(y, x)$.',
    hint2: 'Titik $(4, 1)$ menjadi $(1, 4)$. Tambahkan vektor $(-4, 1)$ menghasilkan $(-3, 5)$.',
    trap: 'Refleksi terhadap $y = -x$ menghasilkan $(-y, -x)$, yang akan menghasilkan $(-1, -4)$.',
  },
];
