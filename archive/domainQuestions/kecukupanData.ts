import { Question } from '../../types/quiz';

export const kecukupanDataQuestions: Question[] = [
  // Soal 52 (Paket 1 - No. 17)
  {
    id: 'p1-soal-17',
    number: 52,
    package: 'Paket 1',
    packageQuestionNumber: 17,
    module: 'Kecukupan Data (Data Sufficiency)',
    competency: 'Mengevaluasi kecukupan data untuk menjawab pertanyaan keliling trapesium sama kaki',
    subCompetency: 'Data Sufficiency (Keliling Trapesium Sama Kaki)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Kecukupan Data Keliling Trapesium Sama Kaki Berdasarkan Luas',
    scenario:
      'Suatu trapesium sama kaki dengan tinggi $4\\text{ cm}$ dan luas $18\\text{ cm}^2$ memiliki panjang sisi-sisi sejajar (dalam cm) berupa bilangan asli $a$ dan $b$ dengan $a < b$.\n**Apakah keliling trapesium tersebut kurang dari $17\\text{ cm}$?**\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut!\n(1) $b = a + 1$\n(2) $b = a + 4$',
    questionPrompt: 'Pilihan kecukupan data yang tepat adalah ...',
    options: [
      {
        id: 'A',
        label: 'A',
        text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.',
      },
      {
        id: 'B',
        label: 'B',
        text: 'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.',
      },
      {
        id: 'C',
        label: 'C',
        text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.',
      },
      {
        id: 'D',
        label: 'D',
        text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.',
      },
      {
        id: 'E',
        label: 'E',
        text: 'Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan.',
      },
    ],
    correctAnswer: 'A',
    explanation: {
      summary:
        'Luas trapesium $L = \\frac{a + b}{2} \\times 4 = 18 \\implies a + b = 9$. Evaluasi masing-masing pernyataan untuk menentukan apakah keliling dapat dipastikan bernilai kurang dari 17 cm atau tidak.',
      steps: [
        {
          title: 'Analisis Rumus Luas dan Keliling',
          content:
            '$$L = \\frac{a + b}{2} \\times 4 = 18 \\implies 2(a + b) = 18 \\implies a + b = 9$$\nKarena $a$ dan $b$ adalah bilangan asli dengan $a < b$, pasangan $(a, b)$ yang mungkin adalah $(1, 8), (2, 7), (3, 6), (4, 5)$.\nSisi miring trapesium sama kaki:\n$$s = \\sqrt{4^2 + \\left(\\frac{b - a}{2}\\right)^2} = \\sqrt{16 + \\frac{(b - a)^2}{4}}$$\nKeliling $K = a + b + 2s = 9 + 2s$.',
        },
        {
          title: 'Evaluasi Pernyataan (1): $b = a + 1$',
          content:
            'Substitusikan $b = a + 1$ ke $a + b = 9$:\n$$a + (a + 1) = 9 \\implies 2a = 8 \\implies a = 4 \\implies b = 5$$\nKarena $a$ dan $b$ bilangan asli, pasangan $(4, 5)$ valid.\n$$\\frac{b - a}{2} = \\frac{5 - 4}{2} = 0{,}5$$\n$$s = \\sqrt{16 + 0{,}25} = \\sqrt{16{,}25} \\approx 4{,}031$$\n$$K = 9 + 2(4{,}031) = 17{,}062\\text{ cm}$$\nNilai $K > 17\\text{ cm}$. Pertanyaan "Apakah keliling kurang dari 17 cm?" dapat dijawab dengan tegas dan pasti: **TIDAK**. Jadi pernyataan (1) SAJA **CUKUP**.',
        },
        {
          title: 'Evaluasi Pernyataan (2): $b = a + 4$',
          content:
            'Substitusikan $b = a + 4$ ke $a + b = 9$:\n$$a + (a + 4) = 9 \\implies 2a = 5 \\implies a = 2{,}5$$\nKarena $a = 2{,}5$ bukan bilangan asli, kondisi ini bertentangan dengan premis bahwa $a, b$ adalah bilangan asli. Pernyataan (2) tidak menghasilkan solusi valid.',
        },
        {
          title: 'Kesimpulan',
          content:
            'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup (Pilihan **A**).',
          formula: '\\text{Kunci} = \\mathbf{A}',
        },
      ],
      keyConcept: 'Kecukupan Data (Data Sufficiency) Geometri Bidang Datar',
    },
    hint1: 'Luas trapesium menghasilkan nilai $a + b = 9$.',
    hint2: 'Pernyataan (1) memberikan solusi bilangan asli $a = 4, b = 5$ yang kelilingnya terbukti $> 17\\text{ cm}$ (jawaban tegas "TIDAK", yang berarti CUKUP).',
    trap: 'Jawaban "TIDAK" yang pasti tetap berarti data tersebut CUKUP untuk menjawab pertanyaan.',
  },

  // Soal 53 (Paket 2 - No. 16)
  {
    id: 'p2-soal-16',
    number: 53,
    package: 'Paket 2',
    packageQuestionNumber: 16,
    module: 'Kecukupan Data (Data Sufficiency)',
    competency: 'Mengevaluasi kecukupan data untuk menentukan keliling bangun datar layang-layang',
    subCompetency: 'Data Sufficiency (Keliling Layang-Layang)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Kecukupan Data Penentuan Keliling Bangun Layang-Layang',
    scenario:
      'Panjang salah satu diagonal suatu layang-layang adalah $20\\text{ cm}$.\n**Berapakah keliling layang-layang tersebut?**\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut!\n(1) Luas layang-layang adalah $160\\text{ cm}^2$.\n(2) Panjang salah satu sisi layang-layang adalah $10\\text{ cm}$.',
    questionPrompt: 'Pilihan kecukupan data yang tepat adalah ...',
    options: [
      {
        id: 'A',
        label: 'A',
        text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.',
      },
      {
        id: 'B',
        label: 'B',
        text: 'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.',
      },
      {
        id: 'C',
        label: 'C',
        text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.',
      },
      {
        id: 'D',
        label: 'D',
        text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.',
      },
      {
        id: 'E',
        label: 'E',
        text: 'Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan.',
      },
    ],
    correctAnswer: 'E',
    explanation: {
      summary:
        'Keliling layang-layang bergantung pada panjang kedua pasang sisinya ($2(s_1 + s_2)$). Meskipun panjang kedua diagonal diketahui, titik potong diagonal tidak terbagi simetris pada diagonal utama sehingga keliling tidak dapat ditentukan secara unik.',
      steps: [
        {
          title: 'Evaluasi Pernyataan (1) SAJA',
          content:
            'Diketahui $d_1 = 20\\text{ cm}$ dan Luas $= 160\\text{ cm}^2$:\n$$L = \\frac{1}{2} d_1 d_2 \\implies 160 = \\frac{1}{2} \\times 20 \\times d_2 \\implies d_2 = 16\\text{ cm}$$\nKita mengetahui panjang kedua diagonal ($20\\text{ cm}$ dan $16\\text{ cm}$). Namun pada layang-layang, diagonal utama terbagi menjadi dua segmen $x$ dan $20 - x$ yang panjangnya belum tentu sama (bukan belah ketupat). Tanpa mengetahui posisi titik potong diagonal, nilai $s_1$ dan $s_2$ dapat bervariasi tak hingga banyaknya. Jadi pernyataan (1) SAJA **TIDAK CUKUP**.',
        },
        {
          title: 'Evaluasi Pernyataan (2) SAJA',
          content:
            'Hanya mengetahui panjang salah satu sisi $= 10\\text{ cm}$ tanpa informasi panjang sisi lainnya jelas **TIDAK CUKUP**.',
        },
        {
          title: 'Evaluasi Bersama-Sama (1) dan (2)',
          content:
            'Jika kedua diagonal adalah $20\\text{ cm}$ dan $16\\text{ cm}$, serta salah satu sisi $10\\text{ cm}$:\nSetengah dari diagonal yang terbagi dua adalah $8\\text{ cm}$. Segmen diagonal utama ke sisi 10 cm adalah $\\sqrt{10^2 - 8^2} = 6\\text{ cm}$.\nNamun, kita tidak tahu apakah sisi 10 cm tersebut adalah sisi bagian atas atau sisi bagian bawah layang-layang (apakah segmen 6 cm berada pada bagian atas atau bawah dari total panjang 20 cm), sehingga panjang sisi lainnya bisa berbeda. Selain itu jika diagonal yang terbagi dua adalah yang 20 cm, konfigurasinya menjadi berbeda lagi.\nMaka kedua pernyataan bersama-sama tetap **TIDAK CUKUP** (Pilihan **E**).',
          formula: '\\text{Kunci} = \\mathbf{E}',
        },
      ],
      keyConcept: 'Karakteristik Bangun Datar Layang-Layang dan Ketidaktunggalan Nilai Parameter',
    },
    hint1: 'Layang-layang memiliki satu diagonal yang terbagi dua sama panjang, tetapi diagonal lainnya tidak terbagi sama panjang.',
    hint2: 'Mengetahui luas hanya memberikan panjang diagonal kedua, tetapi tidak memberi tahu letak titik perpotongannya.',
    trap: 'Jangan berasumsi layang-layang adalah belah ketupat yang kedua diagonalnya saling membagi dua sama panjang.',
  },

  // Soal 54 (Paket 3 - No. 4)
  {
    id: 'p3-soal-4',
    number: 54,
    package: 'Paket 3',
    packageQuestionNumber: 4,
    module: 'Kecukupan Data (Data Sufficiency)',
    competency: 'Mengevaluasi kecukupan data keliling trapesium siku-siku dengan pertidaksamaan',
    subCompetency: 'Data Sufficiency (Keliling Trapesium Siku-Siku)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Kecukupan Data Keliling Trapesium Siku-Siku',
    scenario:
      'Suatu trapesium siku-siku dengan tinggi $4\\text{ cm}$ dan luas $18\\text{ cm}^2$ memiliki panjang sisi sejajar (dalam cm) berupa bilangan asli $a$ dan $b$ dengan $a < b$.\n**Apakah keliling trapesium tersebut kurang dari $19\\text{ cm}$?**\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut!\n(1) $b > a + 1$\n(2) $b < 3a + 2$',
    questionPrompt: 'Pilihan kecukupan data yang tepat adalah ...',
    options: [
      {
        id: 'A',
        label: 'A',
        text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.',
      },
      {
        id: 'B',
        label: 'B',
        text: 'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.',
      },
      {
        id: 'C',
        label: 'C',
        text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.',
      },
      {
        id: 'D',
        label: 'D',
        text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.',
      },
      {
        id: 'E',
        label: 'E',
        text: 'Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan.',
      },
    ],
    correctAnswer: 'E',
    explanation: {
      summary:
        'Luas trapesium siku-siku $L = \\frac{a + b}{2} \\times 4 = 18 \\implies a + b = 9$. Sisi miringnya adalah $s = \\sqrt{4^2 + (b - a)^2}$. Keliling $K = a + b + 4 + s = 13 + \\sqrt{16 + (b - a)^2}$. Syarat $K < 19$ ekuivalen dengan $b - a \\le 4$.',
      steps: [
        {
          title: 'Analisis Hubungan Parameter',
          content:
            'Dari $a + b = 9$ dengan $a, b \\in \\mathbb{N}$ dan $a < b$, pasangan $(a, b)$ yang mungkin adalah:\n• $(1, 8) \\implies b - a = 7$\n• $(2, 7) \\implies b - a = 5$\n• $(3, 6) \\implies b - a = 3$\n• $(4, 5) \\implies b - a = 1$\n\nKeliling $K = 13 + \\sqrt{16 + (b - a)^2}$.\nAgar $K < 19$, maka $\\sqrt{16 + (b - a)^2} < 6 \\implies 16 + (b - a)^2 < 36 \\implies (b - a)^2 < 20 \\implies b - a \\le 4$.\n• Jika $b - a \\le 4$ (pasangan $(3, 6)$ atau $(4, 5)$), maka $K < 19$ (**YA**).\n• Jika $b - a > 4$ (pasangan $(1, 8)$ atau $(2, 7)$), maka $K \\ge 19$ (**TIDAK**).',
        },
        {
          title: 'Uji Pernyataan (1): $b > a + 1$',
          content:
            'Artinya $b - a \\ge 2$. Pasangan yang mungkin: $(1, 8), (2, 7), (3, 6)$.\n• Untuk $(3, 6)$: $b - a = 3 \\le 4 \\implies K < 19$ (Ya).\n• Untuk $(2, 7)$: $b - a = 5 > 4 \\implies K \\ge 19$ (Tidak).\nKarena jawabannya bisa "Ya" atau "Tidak", pernyataan (1) SAJA **TIDAK CUKUP**.',
        },
        {
          title: 'Uji Pernyataan (2): $b < 3a + 2$',
          content:
            'Karena $b = 9 - a$, maka $9 - a < 3a + 2 \\implies 4a > 7 \\implies a \\ge 2$.\nPasangan yang mungkin: $(2, 7), (3, 6), (4, 5)$.\n• Untuk $(4, 5)$ dan $(3, 6)$: $K < 19$ (Ya).\n• Untuk $(2, 7)$: $K \\ge 19$ (Tidak).\nKarena masih menghasilkan jawaban berbeda, pernyataan (2) SAJA **TIDAK CUKUP**.',
        },
        {
          title: 'Uji Bersama-Sama (1) dan (2)',
          content:
            'Irisan kondisi (1) dan (2): $a \\ge 2$ dan $b - a \\ge 2$.\nPasangan yang memenuhi adalah $(2, 7)$ dan $(3, 6)$.\nKarena $(2, 7)$ menghasilkan "Tidak" dan $(3, 6)$ menghasilkan "Ya", kedua pernyataan bersama-sama tetap **TIDAK CUKUP** (Pilihan **E**).',
          formula: '\\text{Kunci} = \\mathbf{E}',
        },
      ],
      keyConcept: 'Data Sufficiency dengan Syarat Bilangan Bulat dan Analisis Pertidaksamaan Nilai',
    },
    hint1: 'Keliling trapesium siku-siku kurang dari 19 cm jika dan hanya jika $b - a \\le 4$.',
    hint2: 'Cek pasangan yang memenuhi kedua pernyataan: masih ada $(2, 7)$ dan $(3, 6)$ yang memberikan hasil berbeda.',
    trap: 'Pastikan menguji kedua kemungkinan pasangan tersisa untuk membuktikan ketidaktercukupannya.',
  },
];
