import { Question } from '../../types/quiz';

export const aljabarBilanganQuestions: Question[] = [
  // Soal 1 (Paket 1 - No. 1)
  {
    id: 'p1-soal-1',
    number: 1,
    package: 'Paket 1',
    packageQuestionNumber: 1,
    module: 'Aljabar & Bilangan',
    competency: 'Menyelesaikan operasi himpunan bilangan dan irisan/gabungan',
    subCompetency: 'Operasi Himpunan (Irisan dan Gabungan)',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Operasi Irisan dan Gabungan Tiga Himpunan Bilangan',
    scenario:
      'Diketahui tiga notasi himpunan bilangan sebagai berikut:\n$$P = \\{x \\mid 2 \\le x < 8, x \\in \\text{bilangan prima}\\}$$\n$$Q = \\{x \\mid 3 < x < 11, x \\in \\text{bilangan ganjil}\\}$$\n$$R = \\{x \\mid x \\in \\text{faktor dari } 10\\}$$',
    questionPrompt: 'Anggota himpunan dari $P \\cap (Q \\cup R)$ adalah ...',
    options: [
      { id: 'A', label: 'A', text: '$\\{5\\}$' },
      { id: 'B', label: 'B', text: '$\\{2, 5, 7\\}$' },
      { id: 'C', label: 'C', text: '$\\{3, 5, 7\\}$' },
      { id: 'D', label: 'D', text: '$\\{2, 3, 5, 7\\}$' },
      { id: 'E', label: 'E', text: '$\\{1, 3, 5, 7, 10\\}$' },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        'Tentukan terlebih dahulu elemen masing-masing himpunan dengan mendaftar anggotanya, lakukan operasi gabungan $(Q \\cup R)$, kemudian cari irisan dengan himpunan $P$.',
      steps: [
        {
          title: 'Daftar Anggota Masing-Masing Himpunan',
          content:
            '• $P = \\{2, 3, 5, 7\\}$ (bilangan prima antara 2 hingga kurang dari 8).\n• $Q = \\{5, 7, 9\\}$ (bilangan ganjil lebih dari 3 dan kurang dari 11).\n• $R = \\{1, 2, 5, 10\\}$ (bilangan asli faktor positif dari 10).',
        },
        {
          title: 'Hitung Operasi Gabungan $(Q \\cup R)$',
          content:
            'Gabungan dari himpunan $Q$ dan $R$ memuat seluruh elemen yang ada di $Q$ atau $R$:\n$$Q \\cup R = \\{1, 2, 5, 7, 9, 10\\}$$',
          formula: 'Q \\cup R = \\{1, 2, 5, 7, 9, 10\\}',
        },
        {
          title: 'Hitung Irisan $P \\cap (Q \\cup R)$',
          content:
            'Irisan adalah elemen yang berada di $P$ sekaligus di $(Q \\cup R)$:\n$$P \\cap (Q \\cup R) = \\{2, 3, 5, 7\\} \\cap \\{1, 2, 5, 7, 9, 10\\} = \\{2, 5, 7\\}$$',
          formula: 'P \\cap (Q \\cup R) = \\{2, 5, 7\\}',
        },
      ],
      keyConcept: 'Operasi Himpunan: $A \\cap (B \\cup C)$',
    },
    hint1: 'Daftar semua anggota bilangan prima $P$, bilangan ganjil $Q$, dan faktor 10 pada $R$.',
    hint2: 'Lakukan operasi kurung terlebih dahulu: gabungkan $Q$ dan $R$, lalu cari elemen yang sama dengan $P$.',
    trap: 'Angka 3 tidak termasuk dalam $Q \\cup R$ karena $3 < x < 11$ pada himpunan $Q$ tidak memuat angka 3 (tanda pertidaksamaan tegas).',
  },

  // Soal 2 (Paket 1 - No. 2)
  {
    id: 'p1-soal-2',
    number: 2,
    package: 'Paket 1',
    packageQuestionNumber: 2,
    module: 'Aljabar & Bilangan',
    competency: 'Menyederhanakan bentuk pecahan aljabar berpangkat eksponen rasional',
    subCompetency: 'Eksponen dan Aljabar',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Penyederhanaan Bentuk Pecahan Eksponen Rasional',
    scenario:
      'Diberikan bentuk ekspresi aljabar berpangkat eksponen:\n$$\\left(\\frac{8^{\\frac{5}{3}} \\times a^{3} \\times b^{4}}{2^{8} \\times a \\times b^{5}}\\right)$$',
    questionPrompt: 'Bentuk paling sederhana dari ekspresi tersebut adalah ...',
    options: [
      { id: 'A', label: 'A', text: '$\\frac{a^{2}}{2^{3}b}$' },
      { id: 'B', label: 'B', text: '$\\frac{a^{4}}{2^{6}b^{2}}$' },
      { id: 'C', label: 'C', text: '$2^{2}a^{3}b^{3}$' },
      { id: 'D', label: 'D', text: '$\\frac{2^3 a^2}{b}$' },
      { id: 'E', label: 'E', text: '$\\frac{a^2}{2^5 b}$' },
    ],
    correctAnswer: 'A',
    explanation: {
      summary:
        'Ubah basis bilangan 8 ke dalam basis 2, lalu terapkan sifat-sifat eksponen $\\frac{x^m}{x^n} = x^{m-n}$.',
      steps: [
        {
          title: 'Ubah Basis Eksponen Bilangan',
          content:
            '$$8^{\\frac{5}{3}} = (2^3)^{\\frac{5}{3}} = 2^{3 \\times \\frac{5}{3}} = 2^5 = 32$$',
          formula: '8^{\\frac{5}{3}} = 2^5',
        },
        {
          title: 'Sederhanakan Variabel dan Koefisien Secara Terpisah',
          content:
            '• Koefisien basis 2: $\\frac{2^5}{2^8} = 2^{5-8} = 2^{-3} = \\frac{1}{2^3}$\n• Variabel $a$: $\\frac{a^3}{a} = a^{3-1} = a^2$\n• Variabel $b$: $\\frac{b^4}{b^5} = b^{4-5} = b^{-1} = \\frac{1}{b}$',
        },
        {
          title: 'Gabungkan Bentuk Sederhana',
          content:
            '$$\\frac{a^2}{2^3 \\times b} = \\frac{a^2}{2^3 b}$$',
          formula: '\\text{Bentuk sederhana} = \\frac{a^2}{2^3 b}',
        },
      ],
      keyConcept: 'Sifat-Sifat Operasi Eksponen: $(a^m)^n = a^{mn}$ dan $\\frac{a^m}{a^n} = a^{m-n}$',
    },
    hint1: 'Konversikan $8$ menjadi $2^3$ sehingga eksponen pecahannya tereliminasi menjadi $2^5$.',
    hint2: 'Kurangkan masing-masing pangkat pada pembilang dan penyebut.',
    trap: 'Jangan terburu-buru mengalikan $8$ dengan $a$, pastikan basis disamakan ke 2 terlebih dahulu.',
  },

  // Soal 3 (Paket 1 - No. 3)
  {
    id: 'p1-soal-3',
    number: 3,
    package: 'Paket 1',
    packageQuestionNumber: 3,
    module: 'Aljabar & Bilangan',
    competency: 'Menganalisis keteraturan angka satuan (satuan siklis / aritmatika modular)',
    subCompetency: 'Teori Bilangan (Angka Satuan / Modulo Aritmatika)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Penentuan Angka Satuan Perkalian Eksponen Berpangkat Besar',
    scenario:
      'Perhatikan operasi perkalian dua bilangan berpangkat sangat besar berikut:\n$$2^{2345} \\times 3^{6543}$$',
    questionPrompt: 'Angka satuan dari hasil perkalian tersebut adalah ...',
    options: [
      { id: 'A', label: 'A', text: '$0$' },
      { id: 'B', label: 'B', text: '$2$' },
      { id: 'C', label: 'C', text: '$4$' },
      { id: 'D', label: 'D', text: '$6$' },
      { id: 'E', label: 'E', text: '$8$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Angka satuan dari suatu perpangkatan berulang secara siklis dengan periode tertentu modulo 10.',
      steps: [
        {
          title: 'Analisis Siklus Angka Satuan Basis 2',
          content:
            '• $2^1 = 2$\n• $2^2 = 4$\n• $2^3 = 8$\n• $2^4 = 16 \\equiv 6$\n• $2^5 = 32 \\equiv 2$ (berulang setiap 4 siklus: 2, 4, 8, 6).\nBagi eksponen 2345 dengan 4:\n$$2345 = 4 \\times 586 + 1 \\implies \\text{Sisa } 1$$\nSehingga angka satuan dari $2^{2345}$ sama dengan $2^1 = 2$.',
          formula: '2^{2345} \\equiv 2^1 \\equiv 2 \\pmod{10}',
        },
        {
          title: 'Analisis Siklus Angka Satuan Basis 3',
          content:
            '• $3^1 = 3$\n• $3^2 = 9$\n• $3^3 = 27 \\equiv 7$\n• $3^4 = 81 \\equiv 1$\n• $3^5 = 243 \\equiv 3$ (berulang setiap 4 siklus: 3, 9, 7, 1).\nBagi eksponen 6543 dengan 4:\n$$6543 = 4 \\times 1635 + 3 \\implies \\text{Sisa } 3$$\nSehingga angka satuan dari $3^{6543}$ sama dengan $3^3 = 27 \\equiv 7$.',
          formula: '3^{6543} \\equiv 3^3 \\equiv 7 \\pmod{10}',
        },
        {
          title: 'Hitung Angka Satuan Hasil Kali',
          content:
            'Angka satuan perkalian adalah angka satuan dari $2 \\times 7 = 14$, yaitu **4**.',
          formula: '2 \\times 7 = 14 \\implies \\text{Angka Satuan} = 4',
        },
      ],
      keyConcept: 'Aritmatika Modular dan Siklus Angka Satuan Modulo 10',
    },
    hint1: 'Cari pola angka satuan dari $2^n$ dan $3^n$ yang berulang setiap 4 pangkat berturut-turut.',
    hint2: 'Hitung sisa pembagian eksponen terhadap 4, lalu kalikan angka satuannya.',
    trap: 'Jangan menjumlahkan pangkat, ini adalah perkalian dengan basis berbeda ($2$ dan $3$).',
  },

  // Soal 4 (Paket 2 - No. 1)
  {
    id: 'p2-soal-1',
    number: 4,
    package: 'Paket 2',
    packageQuestionNumber: 1,
    module: 'Aljabar & Bilangan',
    competency: 'Menyederhanakan ekspresi aljabar berpangkat negatif dan pecahan',
    subCompetency: 'Aljabar & Eksponen',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Penyederhanaan Bentuk Pecahan Eksponen dengan Pangkat Negatif',
    scenario:
      'Diketahui bentuk pecahan aljabar sebagai berikut:\n$$\\left(\\frac{6^{2} \\times p^{2} \\times q^{2}}{27 \\times (2q)^{-1}}\\right)$$',
    questionPrompt: 'Bentuk sederhana dari ekspresi tersebut adalah ...',
    options: [
      { id: 'A', label: 'A', text: '$\\frac{2^{3} \\times p^{2} \\times q^{3}}{3}$' },
      { id: 'B', label: 'B', text: '$\\frac{2^{3} \\times p^{9} \\times q^{9}}{3^{3}}$' },
      { id: 'C', label: 'C', text: '$\\frac{2^{9} \\times p^{3} \\times q^{3}}{3^{3}}$' },
      { id: 'D', label: 'D', text: '$\\frac{2^{9} \\times p^{3} \\times q^{3}}{3}$' },
      { id: 'E', label: 'E', text: '$\\frac{2^{9} \\times p^{9} \\times q^{9}}{3^{3}}$' },
    ],
    correctAnswer: 'A',
    explanation: {
      summary:
        'Sederhanakan penyebut yang memiliki pangkat negatif $(2q)^{-1} = \\frac{1}{2q}$, lalu naikkan ke pembilang.',
      steps: [
        {
          title: 'Urai Bentuk Eksponen pada Pembilang dan Penyebut',
          content:
            '• Pembilang: $6^2 \\times p^2 \\times q^2 = 36 p^2 q^2$\n• Penyebut: $27 \\times (2q)^{-1} = 27 \\times \\frac{1}{2q} = \\frac{27}{2q}$',
        },
        {
          title: 'Lakukan Operasi Pembagian Pecahan',
          content:
            '$$\\frac{36 p^2 q^2}{\\frac{27}{2q}} = 36 p^2 q^2 \\times \\frac{2q}{27} = \\frac{72 p^2 q^3}{27}$$',
          formula: '\\frac{72 p^2 q^3}{27}',
        },
        {
          title: 'Bagi Pembilang dan Penyebut dengan FPB = 9',
          content:
            '$$\\frac{72 \\div 9}{27 \\div 9} p^2 q^3 = \\frac{8 p^2 q^3}{3} = \\frac{2^3 \\times p^2 \\times q^3}{3}$$',
          formula: '\\frac{2^3 \\times p^2 \\times q^3}{3}',
        },
      ],
      keyConcept: 'Sifat Pangkat Negatif: $x^{-1} = \\frac{1}{x}$ dan Pembagian Pecahan $\\frac{A}{B/C} = \\frac{A \\cdot C}{B}$',
    },
    hint1: '$(2q)^{-1}$ di penyebut sama artinya dengan mengalikan pembilang dengan $2q$.',
    hint2: '$6^2 = 36$, kalikan dengan $2$ menjadi $72$, lalu sederhanakan terhadap $27$.',
    trap: 'Hati-hati, tanda pangkat negatif $-1$ berlaku untuk seluruh $(2q)$, bukan hanya $q$.',
  },

  // Soal 5 (Paket 2 - No. 2)
  {
    id: 'p2-soal-2',
    number: 5,
    package: 'Paket 2',
    packageQuestionNumber: 2,
    module: 'Aljabar & Bilangan',
    competency: 'Menganalisis kebenaran pernyataan terkait operasi biner terdefinisi',
    subCompetency: 'Operasi Biner Terdefinisi',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_kategori',
    title: 'Evaluasi Pernyataan Kebenaran Operasi Biner Khusus',
    scenario:
      'Operasi biner $\\odot$ didefinisikan sebagai:\n$$a \\odot b = \\frac{(a - b)^{2} + 2ab}{a + b}$$\nuntuk setiap bilangan real non-negatif $a$ dan $b$.\nDiketahui bahwa nilai $a \\odot 2 = 5$.',
    questionPrompt: 'Tentukan Benar atau Salah pada setiap pernyataan berikut!',
    categoryStatements: [
      { id: 'stmt1', label: '1', statement: '$a$ merupakan bilangan kelipatan dari 3.', correctAnswer: true },
      { id: 'stmt2', label: '2', statement: '$a$ merupakan bilangan prima.', correctAnswer: false },
      { id: 'stmt3', label: '3', statement: 'Nilai dari $a \\odot 0 = 6$.', correctAnswer: true },
    ],
    correctAnswer: { stmt1: true, stmt2: false, stmt3: true },
    explanation: {
      summary:
        'Sederhanakan pembilang $(a - b)^2 + 2ab = a^2 + b^2$, substitusikan nilai $b = 2$ dan selesaikan persamaan kuadrat yang terbentuk untuk mencari nilai $a$.',
      steps: [
        {
          title: 'Sederhanakan Bentuk Definisi Operasi Biner',
          content:
            '$$(a - b)^2 + 2ab = a^2 - 2ab + b^2 + 2ab = a^2 + b^2$$\nMaka rumus operasi dapat disederhanakan menjadi:\n$$a \\odot b = \\frac{a^2 + b^2}{a + b}$$',
          formula: 'a \\odot b = \\frac{a^2 + b^2}{a + b}',
        },
        {
          title: 'Substitusi $b = 2$ dan $a \\odot 2 = 5$',
          content:
            '$$\\frac{a^2 + 2^2}{a + 2} = 5 \\implies a^2 + 4 = 5(a + 2) = 5a + 10$$\n$$a^2 - 5a - 6 = 0 \\implies (a - 6)(a + 1) = 0$$\nKarena $a$ adalah bilangan real non-negatif, maka $a = 6$.',
          formula: 'a = 6',
        },
        {
          title: 'Evaluasi Setiap Pernyataan',
          content:
            '1. $a = 6$ kelipatan 3 ($6 = 3 \\times 2$) → **BENAR**.\n2. $a = 6$ bukan bilangan prima (faktornya 1, 2, 3, 6) → **SALAH**.\n3. $a \\odot 0 = \\frac{6^2 + 0^2}{6 + 0} = \\frac{36}{6} = 6$ → **BENAR**.',
        },
      ],
      keyConcept: 'Penyederhanaan Bentuk Kuadratik dan Penyelesaian Akar Persamaan Kuadrat',
    },
    hint1: 'Bongkar kurung kuadrat: $(a - b)^2 + 2ab = a^2 + b^2$.',
    hint2: 'Bentuk persamaan kuadrat dalam $a$, lalu pilih akar positif non-negatif.',
    trap: 'Jangan lupa bahwa $a$ non-negatif, sehingga $a = -1$ diabaikan.',
  },

  // Soal 6 (Paket 2 - No. 3)
  {
    id: 'p2-soal-3',
    number: 6,
    package: 'Paket 2',
    packageQuestionNumber: 3,
    module: 'Aljabar & Bilangan',
    competency: 'Menentukan operasi gabungan dan irisan dari himpunan bilangan',
    subCompetency: 'Himpunan Bilangan',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Operasi Kombinasi Irisan dan Gabungan Tiga Himpunan',
    scenario:
      'Diberikan tiga himpunan bilangan sebagai berikut:\n$$A = \\{x \\mid x < 6, x \\in \\text{Bilangan Asli}\\}$$\n$$B = \\{x \\mid x \\text{ bilangan genap}, x \\in \\text{Bilangan Cacah}\\}$$\n$$C = \\{x \\mid x \\le 10, x \\in \\text{Bilangan Prima}\\}$$',
    questionPrompt: 'Berdasarkan ketiga himpunan tersebut, hasil dari $(A \\cap B) \\cup C$ adalah ...',
    options: [
      { id: 'A', label: 'A', text: '$\\{2, 3, 5, 7\\}$' },
      { id: 'B', label: 'B', text: '$\\{0, 2, 3, 5, 7\\}$' },
      { id: 'C', label: 'C', text: '$\\{2, 3, 4, 5, 7\\}$' },
      { id: 'D', label: 'D', text: '$\\{0, 2, 3, 4, 5, 7\\}$' },
      { id: 'E', label: 'E', text: '$\\{2, 3, 4, 5, 7, 10\\}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Daftar anggota masing-masing himpunan bilangan sesuai semestanya, hitung irisan $(A \\cap B)$, kemudian gabungkan dengan himpunan $C$.',
      steps: [
        {
          title: 'Daftar Anggota Himpunan',
          content:
            '• $A = \\{1, 2, 3, 4, 5\\}$ (bilangan asli kurang dari 6).\n• $B = \\{0, 2, 4, 6, 8, 10, \\dots\\}$ (bilangan cacah genap).\n• $C = \\{2, 3, 5, 7\\}$ (bilangan prima kurang dari atau sama dengan 10).',
        },
        {
          title: 'Hitung Irisan $(A \\cap B)$',
          content:
            'Elemen yang terdapat pada $A$ sekaligus $B$ adalah bilangan genap pada $A$:\n$$A \\cap B = \\{2, 4\\}$$',
          formula: 'A \\cap B = \\{2, 4\\}',
        },
        {
          title: 'Hitung Gabungan $(A \\cap B) \\cup C$',
          content:
            '$$(A \\cap B) \\cup C = \\{2, 4\\} \\cup \\{2, 3, 5, 7\\} = \\{2, 3, 4, 5, 7\\}$$',
          formula: '(A \\cap B) \\cup C = \\{2, 3, 4, 5, 7\\}',
        },
      ],
      keyConcept: 'Definisi Himpunan Asli, Cacah, Prima, serta Operasi $\\cap$ dan $\\cup$',
    },
    hint1: 'Bilangan asli dimulai dari 1, sedangkan bilangan cacah dimulai dari 0.',
    hint2: 'Cari irisan $A$ dan $B$ dulu (angka 2 dan 4), lalu tambahkan anggota prima $C$.',
    trap: '0 adalah bilangan cacah genap, namun 0 bukan bilangan asli sehingga 0 tidak ada di himpunan $A$.',
  },
];
