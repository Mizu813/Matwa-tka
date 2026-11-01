import { Question } from '../../types/quiz';

export const statistikaPeluangQuestions: Question[] = [
  // Soal 42 (Paket 1 - No. 21)
  {
    id: 'p1-soal-21',
    number: 42,
    package: 'Paket 1',
    packageQuestionNumber: 21,
    module: 'Statistika & Peluang',
    competency: 'Menganalisis tren data grafik garis multi-kategori',
    subCompetency: 'Analisis Tren Data Grafik Garis',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_mcma',
    title: 'Analisis Tren Peminatan Karir Lulusan SMK Berdaya',
    scenario:
      'Perhatikan diagram garis tren pilihan karir lulusan "SMK Berdaya" (2020–2024):\n• **2020:** Kuliah $= 150$, Bekerja $= 260$, Wirausaha $= 200$\n• **2021:** Kuliah $= 180$, Bekerja $= 300$, Wirausaha $= 180$\n• **2022:** Kuliah $= 200$, Bekerja $= 250$, Wirausaha $= 180$\n• **2023:** Kuliah $= 210$, Bekerja $= 200$, Wirausaha $= 200$\n• **2024:** Kuliah $= 220$, Bekerja $= 250$, Wirausaha $= 190$',
    questionPrompt:
      'Berdasarkan diagram garis tersebut, pada tahun-tahun manakah pilihan karir wirausaha menjadi pilihan yang paling tidak populer (memiliki jumlah peminat paling sedikit) di antara ketiga pilihan karir?',
    svgComponentId: 'p1_soal_21_line_karir',
    options: [
      { id: 'A', label: 'A', text: '2020' },
      { id: 'B', label: 'B', text: '2021' },
      { id: 'C', label: 'C', text: '2022' },
      { id: 'D', label: 'D', text: '2023' },
      { id: 'E', label: 'E', text: '2024' },
    ],
    correctAnswer: ['B', 'C', 'E'],
    explanation: {
      summary:
        'Bandingkan jumlah siswa yang memilih wirausaha terhadap pilihan kuliah dan bekerja untuk setiap tahunnya.',
      steps: [
        {
          title: 'Evaluasi Per Tahun',
          content:
            '• **2020:** Kuliah 150, Bekerja 260, Wirausaha 200 → Paling sedikit adalah Kuliah (150).\n• **2021:** Kuliah 180, Bekerja 300, Wirausaha 180 → Wirausaha dan Kuliah seri paling sedikit (180).\n• **2022:** Kuliah 200, Bekerja 250, Wirausaha 180 → Wirausaha paling sedikit (180).\n• **2023:** Kuliah 210, Bekerja 200, Wirausaha 200 → Bekerja dan Wirausaha seri di 200, tetapi kuliah lebih tinggi.\n• **2024:** Kuliah 220, Bekerja 250, Wirausaha 190 → Wirausaha paling sedikit (190).',
        },
        {
          title: 'Kesimpulan',
          content:
            'Tahun di mana wirausaha menjadi pilihan paling sedikit adalah **2021, 2022, dan 2024**.',
          formula: '\\text{Tahun} = \\text{2021, 2022, 2024}',
        },
      ],
      keyConcept: 'Interpretasi Data Diagram Garis Komparatif',
    },
    hint1: 'Bandingkan ketiga angka pada setiap tahun dan cari posisi garis wirausaha (kuning).',
    hint2: 'Tahun 2022 (180 vs 200 & 250) dan 2024 (190 vs 220 & 250) jelas berada di posisi terbawah.',
    trap: 'Pada tahun 2020, wirausaha (200) lebih banyak daripada kuliah (150).',
  },

  // Soal 43 (Paket 1 - No. 22)
  {
    id: 'p1-soal-22',
    number: 43,
    package: 'Paket 1',
    packageQuestionNumber: 22,
    module: 'Statistika & Peluang',
    competency: 'Menghitung banyak susunan posisi duduk menggunakan kaidah permutasi bersyarat',
    subCompetency: 'Kaidah Pencacahan & Permutasi Bersyarat',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Pengaturan Posisi Duduk Bioskop Lima Sahabat Bersyarat',
    scenario:
      'Lima sahabat, A, B, C, D, dan E duduk berjejer pada lima kursi di suatu bioskop. Terdapat dua ketentuan pengaturan duduk:\n1. A harus duduk di salah satu ujung barisan (kursi paling kiri atau paling kanan).\n2. B harus duduk berdampingan/bersebelahan dengan C.',
    questionPrompt: 'Berapa banyak susunan posisi duduk yang mungkin?',
    options: [
      { id: 'A', label: 'A', text: '$120\\text{ posisi}$' },
      { id: 'B', label: 'B', text: '$48\\text{ posisi}$' },
      { id: 'C', label: 'C', text: '$24\\text{ posisi}$' },
      { id: 'D', label: 'D', text: '$12\\text{ posisi}$' },
      { id: 'E', label: 'E', text: '$8\\text{ posisi}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Hitung banyak posisi untuk A di ujung (2 opsi), kelompokkan (BC) menjadi 1 kesatuan unsur (2! cara), lalu permutasikan sisa unsur pada 4 kursi lainnya.',
      steps: [
        {
          title: 'Pilihan Posisi untuk A',
          content:
            'A harus duduk di salah satu ujung barisan (kursi nomor 1 atau kursi nomor 5):\n$$\\text{Banyak pilihan posisi A} = 2$$',
        },
        {
          title: 'Kelompokkan B dan C yang Harus Berdampingan',
          content:
            'Anggap $(BC)$ sebagai 1 elemen tunggal. Di dalam kelompok, B dan C dapat bertukar posisi:\n$$2! = 2\\text{ cara}$$',
        },
        {
          title: 'Susun 3 Elemen Sisa pada 4 Kursi yang Tersisa',
          content:
            'Elemen yang disusun adalah $(BC)$, D, dan E (total 3 elemen):\n$$3! = 3 \\times 2 \\times 1 = 6\\text{ cara}$$',
        },
        {
          title: 'Hitung Total Banyak Susunan',
          content:
            '$$\\text{Total} = 2 \\times 2! \\times 3! = 2 \\times 2 \\times 6 = 24\\text{ posisi}$$',
          formula: '\\text{Total Susunan} = 24\\text{ posisi}',
        },
      ],
      keyConcept: 'Permutasi dengan Unsur Berkelompok dan Batasan Posisi Ujung',
    },
    hint1: 'A memiliki 2 pilihan tempat (ujung kiri atau ujung kanan).',
    hint2: 'Gabungkan B dan C menjadi satu blok $(BC)$ dengan $2!$ cara, lalu susun bersama D dan E ($3!$ cara).',
    trap: 'Jangan lupa mengalikan dengan $2!$ karena urutan B dan C bisa berupa BC atau CB.',
  },

  // Soal 44 (Paket 1 - No. 23)
  {
    id: 'p1-soal-23',
    number: 44,
    package: 'Paket 1',
    packageQuestionNumber: 23,
    module: 'Statistika & Peluang',
    competency: 'Menganalisis ukuran pemusatan data (rata-rata) dengan syarat bilangan unik',
    subCompetency: 'Ukuran Pemusatan Data Berlogika',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_kategori',
    title: 'Analisis Distribusi Pesanan Buket Bunga Berdasarkan Rata-rata',
    scenario:
      'Perhatikan tabel distribusi jumlah pesanan buket bunga di Toko Flower pada minggu ke-1 bulan Agustus:\n| Hari | Senin | Selasa | Rabu | Kamis | Jumat |\n| :--- | :---: | :---: | :---: | :---: | :---: |\n| Jumlah Pesanan | $2$ | $4$ | $6$ | $x$ | $y$ |\n\nInformasi yang diketahui:\n1. Rata-rata pesanan setiap hari sebanyak $5$ pesanan buket bunga.\n2. Selalu ada minimal dua pesanan pada setiap hari.\n3. Jumlah pesanan setiap hari tidak pernah sama ($x \\ne y$ dan keduanya bukan bilangan $2, 4, 6$).',
    questionPrompt: 'Tentukan Benar atau Salah pada setiap pernyataan berikut:',
    categoryStatements: [
      {
        id: 'stmt1',
        label: '1',
        statement: 'Jumlah pesanan buket bunga pasti meningkat dari hari Senin hingga Jumat.',
        correctAnswer: false,
      },
      {
        id: 'stmt2',
        label: '2',
        statement: 'Pesanan buket bunga harian paling banyak adalah 15 pesanan.',
        correctAnswer: false,
      },
      {
        id: 'stmt3',
        label: '3',
        statement: 'Pesanan pada hari Kamis mungkin saja sebanyak 9 buket bunga.',
        correctAnswer: false,
      },
    ],
    correctAnswer: { stmt1: false, stmt2: false, stmt3: false },
    explanation: {
      summary:
        'Hitung total pesanan dari rata-rata: $2 + 4 + 6 + x + y = 25 \\implies x + y = 13$. Cari pasangan bilangan asli unik yang memenuhi syarat tidak boleh sama dengan 2, 4, 6.',
      steps: [
        {
          title: 'Hitung Nilai $x + y$',
          content:
            '$$\\bar{x} = \\frac{2 + 4 + 6 + x + y}{5} = 5$$\n$$12 + x + y = 25 \\implies x + y = 13$$',
          formula: 'x + y = 13',
        },
        {
          title: 'Daftar Pasangan Unik yang Memenuhi',
          content:
            'Syarat: $x, y \\ge 2$, $x \\ne y$, dan $x, y \\notin \\{2, 4, 6\\}$.\n• Pasangan $(3, 10)$: $3 + 10 = 13$ (valid).\n• Pasangan $(5, 8)$: $5 + 8 = 13$ (valid).\n• Pasangan $(4, 9)$: tidak valid karena angka 4 sudah ada di hari Selasa.\n• Pasangan $(2, 11)$: tidak valid karena angka 2 sudah ada di hari Senin.\n• Pasangan $(6, 7)$: tidak valid karena angka 6 sudah ada di hari Rabu.\nMaka pasangan yang mungkin hanyalah $\\{3, 10\\}$ atau $\\{5, 8\\}$.',
        },
        {
          title: 'Evaluasi Pernyataan',
          content:
            '1. "Pasti meningkat": Jika $x = 10$ dan $y = 3$, pesanan turun pada hari Jumat → **SALAH**.\n2. "Paling banyak 15": Nilai maksimum dari pasangan adalah 10, bukan 15 → **SALAH**.\n3. "Kamis mungkin 9": Pasangan dari 9 adalah 4 (angka 4 sudah dipakai pada hari Selasa) → **SALAH**.',
        },
      ],
      keyConcept: 'Ukuran Pemusatan Rata-rata Hitung dan Analisis Kombinatorik Nilai Unik',
    },
    hint1: 'Jumlah pesanan 5 hari adalah $5 \\times 5 = 25$, sehingga $x + y = 25 - 12 = 13$.',
    hint2: 'Cek pasangan penjumlahan 13 tanpa melibatkan angka 2, 4, 6: hanya ada $\{3, 10\}$ dan $\{5, 8\}$.',
    trap: 'Jika Kamis = 9, maka Jumat harus = 4, padahal Selasa sudah bernilai 4 (melanggar syarat tidak boleh ada yang sama).',
  },

  // Soal 45 (Paket 1 - No. 24)
  {
    id: 'p1-soal-24',
    number: 45,
    package: 'Paket 1',
    packageQuestionNumber: 24,
    module: 'Statistika & Peluang',
    competency: 'Menghitung peluang kejadian tunggal dari tabel kontingensi dua arah',
    subCompetency: 'Peluang Kejadian Tunggal',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Peluang Terpilihnya Tamu Berpakaian Putih',
    scenario:
      'Dalam acara perayaan ulang tahun, 100 orang tamu undangan hadir dan mengenakan pakaian berwarna biru atau putih:\n• Dari $40$ orang tamu laki-laki, terdapat $15$ orang mengenakan pakaian putih dan sisanya biru.\n• Dari tamu perempuan, $20$ orang mengenakan pakaian biru dan sisanya putih.\nPanitia memilih satu orang tamu secara acak untuk menerima hadiah utama.',
    questionPrompt:
      'Berapa peluang tamu yang terpilih mengenakan pakaian berwarna putih?',
    options: [
      { id: 'A', label: 'A', text: '$35\\%$' },
      { id: 'B', label: 'B', text: '$40\\%$' },
      { id: 'C', label: 'C', text: '$45\\%$' },
      { id: 'D', label: 'D', text: '$55\\%$' },
      { id: 'E', label: 'E', text: '$60\\%$' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Hitung jumlah perempuan yang mengenakan pakaian putih, jumlahkan dengan laki-laki berpakaian putih, lalu bagi dengan total seluruh tamu (100 orang).',
      steps: [
        {
          title: 'Hitung Jumlah Tamu Perempuan Berpakaian Putih',
          content:
            'Total tamu $= 100$ orang, laki-laki $= 40$ orang $\\implies$ perempuan $= 100 - 40 = 60$ orang.\nPerempuan berpakaian biru $= 20$ orang, maka:\n$$\\text{Perempuan Putih} = 60 - 20 = 40\\text{ orang}$$',
          formula: '\\text{Perempuan Putih} = 40',
        },
        {
          title: 'Hitung Total Tamu Berpakaian Putih',
          content:
            '$$\\text{Total Tamu Putih} = \\text{Laki-laki Putih} + \\text{Perempuan Putih} = 15 + 40 = 55\\text{ orang}$$',
          formula: 'n(\\text{Putih}) = 55',
        },
        {
          title: 'Hitung Peluang',
          content:
            '$$P(\\text{Putih}) = \\frac{55}{100} = 55\\%$$',
          formula: 'P = 55\\%',
        },
      ],
      keyConcept: 'Peluang Kejadian Tunggal: $P(A) = \\frac{n(A)}{n(S)}$',
    },
    hint1: 'Banyak tamu perempuan adalah $100 - 40 = 60$ orang.',
    hint2: 'Perempuan berbaju putih adalah $60 - 20 = 40$ orang. Jumlahkan dengan 15 orang laki-laki berbaju putih.',
    trap: 'Jangan menghitung perempuan berbaju biru (20 orang), yang dicari adalah tamu berbaju putih.',
  },

  // Soal 46 (Paket 1 - No. 25)
  {
    id: 'p1-soal-25',
    number: 46,
    package: 'Paket 1',
    packageQuestionNumber: 25,
    module: 'Statistika & Peluang',
    competency: 'Menyelesaikan permasalahan peluang kejadian majemuk bersyarat',
    subCompetency: 'Peluang Bersyarat/Majemuk',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Analisis Pengambilan Bola Undian Hadiah Utama dan Voucher Internet',
    scenario:
      'Sebuah toko menyediakan hadiah bagi $50$ pengunjung pertama dengan mengambil satu bola bernomor $1$ sampai $50$:\n• Bola nomor genap berwarna **merah** (Hadiah Utama).\n• Bola nomor ganjil berwarna **putih** (Hadiah Hiburan).\n• Bola bernomor kelipatan 3 diberi **tanda bintang** (Hadiah Tambahan Voucher Internet).\nRia mengantre untuk mengambil bola.',
    questionPrompt:
      'Bola apa sajakah yang harus sudah terambil sebelumnya agar peluang Ria mendapatkan Hadiah Utama dan Voucher Internet bernilai tepat $\\frac{1}{3}$?',
    options: [
      { id: 'A', label: 'A', text: '1 bola merah tanpa tanda khusus' },
      { id: 'B', label: 'B', text: '2 bola putih tanpa tanda khusus' },
      { id: 'C', label: 'C', text: '5 bola merah bertanda khusus dan 17 bola merah tanpa tanda khusus' },
      { id: 'D', label: 'D', text: '28 bola bukan merah bertanda khusus dan 1 bola merah bertanda khusus' },
      { id: 'E', label: 'E', text: '39 bola bukan merah bertanda khusus dan 8 bola merah bertanda khusus' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Hadiah Utama dan Voucher Internet adalah bola genap kelipatan 3 (kelipatan 6). Tentukan banyak bola awal, lalu cari skenario pengambilan yang menghasilkan rasio sisa bola tepat 1/3.',
      steps: [
        {
          title: 'Hitung Jumlah Bola Awal',
          content:
            '• Bola genap kelipatan 3 (Merah Bintang): kelipatan 6 antara 1–50:\n$$\\{6, 12, 18, 24, 30, 36, 42, 48\\} \\implies 8\\text{ bola}$$\n• Bola lainnya (bukan merah bintang): $50 - 8 = 42\\text{ bola}$.',
          formula: 'n(\\text{Merah Bintang}) = 8;\\; n(\\text{Lainnya}) = 42',
        },
        {
          title: 'Uji Skenario Pilihan D',
          content:
            'Terambil 28 bola bukan merah bintang dan 1 bola merah bintang:\n• Sisa bola merah bintang $= 8 - 1 = 7\\text{ bola}$.\n• Total bola yang sudah terambil $= 28 + 1 = 29\\text{ bola}$.\n• Sisa total bola di dalam kotak $= 50 - 29 = 21\\text{ bola}$.\n$$P(\\text{Merah Bintang}) = \\frac{7}{21} = \\frac{1}{3}$$',
          formula: 'P = \\frac{7}{21} = \\frac{1}{3}',
        },
      ],
      keyConcept: 'Peluang Bersyarat Pengambilan Tanpa Pengembalian',
    },
    hint1: 'Bola merah bertanda khusus adalah kelipatan 6 (ada 8 bola).',
    hint2: 'Cari skenario di mana rasio sisa bola merah bintang terhadap sisa seluruh bola bernilai $\\frac{1}{3}$ (misal 7 dari 21 bola).',
    trap: 'Perhatikan bahwa bola kelipatan 3 yang ganjil berwarna putih (bukan merah).',
  },

  // Soal 47 (Paket 2 - No. 21)
  {
    id: 'p2-soal-21',
    number: 47,
    package: 'Paket 2',
    packageQuestionNumber: 21,
    module: 'Statistika & Peluang',
    competency: 'Menganalisis sifat monotonik data diagram garis tren waktu',
    subCompetency: 'Analisis Tren Data Grafik Garis',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_mcma',
    title: 'Analisis Tren Minat Ekstrakurikuler yang Tidak Pernah Menurun',
    scenario:
      'Perhatikan diagram garis minat ekstrakurikuler siswa SMA Cerdas (2020–2024):\n• **Robotik:** 2020 ($17$), 2021 ($26$), 2022 ($26$), 2023 ($26$), 2024 ($21$)\n• **Jurnalistik:** 2020 ($26$), 2021 ($26$), 2022 ($26$), 2023 ($26$), 2024 ($31$)\n• **Seni:** 2020 ($31$), 2021 ($21$), 2022 ($21$), 2023 ($21$), 2024 ($21$)',
    questionPrompt:
      'Berdasarkan diagram garis tersebut, beberapa ekstrakurikuler pada rentang tahun tertentu tidak pernah mengalami penurunan peminat (selalu naik atau tetap). Jenis ekstrakurikuler dan rentang tahun manakah yang dimaksud?',
    svgComponentId: 'p2_soal_21_line_ekskul',
    options: [
      { id: 'A', label: 'A', text: 'Robotik pada 2020 hingga 2024' },
      { id: 'B', label: 'B', text: 'Seni pada 2020 hingga 2024' },
      { id: 'C', label: 'C', text: 'Jurnalistik pada 2020 hingga 2023' },
      { id: 'D', label: 'D', text: 'Jurnalistik pada 2020 hingga 2024' },
      { id: 'E', label: 'E', text: 'Robotik pada 2021 hingga 2023' },
    ],
    correctAnswer: ['C', 'D', 'E'],
    explanation: {
      summary:
        'Cari ekstrakurikuler dan rentang tahun di mana nilai data selalu bernilai sama atau meningkat (tidak pernah turun).',
      steps: [
        {
          title: 'Evaluasi Jurnalistik',
          content:
            'Data: $26, 26, 26, 26, 31$. Dari 2020 hingga 2023 konstan di 26, lalu naik ke 31 pada 2024. Jadi Jurnalistik **tidak pernah turun** baik pada rentang 2020–2023 maupun 2020–2024 (**Pilihan C dan D Benar**).',
        },
        {
          title: 'Evaluasi Robotik',
          content:
            'Pada rentang 2021 hingga 2023, minat robotik bernilai $26, 26, 26$ (tetap, tidak turun) → (**Pilihan E Benar**).\nNamun pada 2020–2024, robotik turun dari 26 ke 21 di tahun 2024 → (Pilihan A Salah).',
        },
        {
          title: 'Evaluasi Seni',
          content:
            'Seni turun dari 31 ke 21 pada tahun 2021 → (Pilihan B Salah).',
        },
      ],
      keyConcept: 'Kemonotonan Fungsi Data Diskrit (Non-Decreasing Sequence)',
    },
    hint1: '"Tidak pernah mengalami penurunan" berarti nilainya bisa tetap atau naik.',
    hint2: 'Jurnalistik selalu bernilai 26 dari 2020 sampai 2023 lalu naik ke 31 di 2024.',
    trap: 'Robotik pada rentang penuh 2020–2024 sempat turun di tahun 2024 (dari 26 menjadi 21).',
  },

  // Soal 48 (Paket 2 - No. 22)
  {
    id: 'p2-soal-22',
    number: 48,
    package: 'Paket 2',
    packageQuestionNumber: 22,
    module: 'Statistika & Peluang',
    competency: 'Menyelesaikan permasalahan penataan berjajar dengan kondisi terikat',
    subCompetency: 'Kaidah Pencacahan (Permutasi Berjajar Terikat)',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Penataan Stan Bazar Berjajar Terikat Tiga Pedagang',
    scenario:
      'Di sebuah acara bazar sekolah terdapat 5 stan berjajar yang masing-masing dikelola oleh pedagang A, B, C, D, dan E. Dalam penataan stan, stan pedagang C ingin berada tepat di antara pedagang A dan pedagang D (posisi $A - C - D$ atau $D - C - A$ berdampingan satu blok).',
    questionPrompt: 'Banyak kemungkinan susunan penataan stan yang sesuai adalah ...',
    options: [
      { id: 'A', label: 'A', text: '$6\\text{ susunan}$' },
      { id: 'B', label: 'B', text: '$12\\text{ susunan}$' },
      { id: 'C', label: 'C', text: '$120\\text{ susunan}$' },
      { id: 'D', label: 'D', text: '$240\\text{ susunan}$' },
      { id: 'E', label: 'E', text: '$720\\text{ susunan}$' },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        'Kelompokkan blok $(A-C-D)$ menjadi 1 entitas dengan 2 kemungkinan urutan ($ACD$ atau $DCA$), lalu permutasikan dengan 2 stan lainnya (B dan E).',
      steps: [
        {
          title: 'Bentuk Entitas Gabungan',
          content:
            'Karena C harus tepat di antara A dan D, maka blok harus berbentuk $(A, C, D)$ atau $(D, C, A)$:\n$$\\text{Banyak variasi blok} = 2\\text{ cara}$$',
        },
        {
          title: 'Permutasikan Semua Entitas',
          content:
            'Terdapat 3 entitas yang akan disusun pada barisan: blok $(ACD)$, stan B, dan stan E:\n$$3! = 3 \\times 2 \\times 1 = 6\\text{ susunan}$$',
        },
        {
          title: 'Hitung Total Susunan',
          content:
            '$$\\text{Total} = 6 \\times 2 = 12\\text{ susunan}$$',
          formula: '\\text{Total Susunan} = 12',
        },
      ],
      keyConcept: 'Permutasi dengan Elemen Terikat Bersyarat Khusus',
    },
    hint1: 'C harus berada di tengah A dan D, sehingga bloknya hanya bisa ACD atau DCA (2 cara).',
    hint2: 'Susun blok tersebut bersama stan B dan E seperti menyusun 3 objek ($3! = 6$ cara).',
    trap: 'C tidak boleh bertukar tempat ke pinggir, hanya A dan D yang bertukar posisi mengapit C.',
  },

  // Soal 49 (Paket 2 - No. 23)
  {
    id: 'p2-soal-23',
    number: 49,
    package: 'Paket 2',
    packageQuestionNumber: 23,
    module: 'Statistika & Peluang',
    competency: 'Menganalisis nilai median dan mean data tunggal dengan batas rentang',
    subCompetency: 'Statistika (Mean dan Median Data Tunggal)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_kategori',
    title: 'Evaluasi Pernyataan Pengunjung Perpustakaan Berdasarkan Rata-rata dan Median',
    scenario:
      'Perhatikan tabel distribusi pengunjung perpustakaan Desa Sukamaju pada minggu ke-1 bulan Januari:\n| Hari | Senin | Selasa | Rabu | Kamis | Jumat |\n| :--- | :---: | :---: | :---: | :---: | :---: |\n| Jumlah Pengunjung | $4$ | $P$ | $5$ | $R$ | $6$ |\n\nInformasi yang diketahui:\n1. Rata-rata pengunjung perpustakaan setiap hari adalah $6$ orang.\n2. Jumlah pengunjung minimal $2$ orang dan tidak pernah melebihi $10$ orang ($2 \\le \\text{pengunjung} \\le 10$).\n3. Median dari data kelima hari tersebut adalah $6$.',
    questionPrompt: 'Tentukan Benar atau Salah pada setiap pernyataan berikut:',
    categoryStatements: [
      {
        id: 'stmt1',
        label: '1',
        statement: 'Banyak pengunjung pada hari Selasa pasti selalu lebih banyak dibandingkan hari lain.',
        correctAnswer: false,
      },
      {
        id: 'stmt2',
        label: '2',
        statement: 'Banyak pengunjung pada hari Kamis pasti lebih dari 5 orang.',
        correctAnswer: true,
      },
      {
        id: 'stmt3',
        label: '3',
        statement: 'Banyak pengunjung pada hari Jumat dan Kamis mungkin saja sama.',
        correctAnswer: true,
      },
    ],
    correctAnswer: { stmt1: false, stmt2: true, stmt3: true },
    explanation: {
      summary:
        'Hitung total pengunjung dari rata-rata: $4 + P + 5 + R + 6 = 30 \\implies P + R = 15$. Analisis syarat median = 6.',
      steps: [
        {
          title: 'Hitung $P + R$',
          content:
            '$$\\bar{x} = 6 \\implies \\text{Total} = 5 \\times 6 = 30$$\n$$4 + P + 5 + R + 6 = 30 \\implies 15 + P + R = 30 \\implies P + R = 15$$',
          formula: 'P + R = 15',
        },
        {
          title: 'Syarat Median = 6',
          content:
            'Data terurut dengan nilai median di posisi ke-3 harus bernilai 6. Data yang sudah ada adalah $4, 5, 6$.\nAgar 6 menjadi median data ganjil (5 hari), maka dua data yang belum diketahui ($P$ dan $R$) keduanya harus bernilai $\\ge 6$.\nKarena $P + R = 15$ dan keduanya $\\ge 6$, pasangan $(P, R)$ yang mungkin: $(6, 9), (7, 8), (8, 7), (9, 6)$.',
        },
        {
          title: 'Evaluasi Pernyataan',
          content:
            '1. "Selasa ($P$) pasti paling banyak": Jika $P = 6$ dan $R = 9$, maka Kamis yang lebih banyak → **SALAH**.\n2. "Kamis ($R$) pasti lebih dari 5 orang": Nilai minimum $R$ adalah 6 (karena $R \\ge 6 > 5$) → **BENAR**.\n3. "Jumat dan Kamis mungkin sama": Jumat $= 6$. Jika $R = 6$ (saat $P = 9$), maka keduanya sama-sama 6 → **BENAR**.',
        },
      ],
      keyConcept: 'Ukuran Pemusatan: Hubungan Mean, Median, dan Batasan Interval Nilai',
    },
    hint1: 'Total pengunjung selama 5 hari adalah $5 \\times 6 = 30$, sehingga $P + R = 15$.',
    hint2: 'Agar median = 6, maka baik P maupun R harus bernilai minimal 6.',
    trap: 'P tidak harus lebih besar dari R, nilai P bisa 6 dan R bisa 9.',
  },

  // Soal 50 (Paket 2 - No. 24)
  {
    id: 'p2-soal-24',
    number: 50,
    package: 'Paket 2',
    packageQuestionNumber: 24,
    module: 'Statistika & Peluang',
    competency: 'Menghitung peluang kejadian bersyarat pengambilan kupon undian',
    subCompetency: 'Peluang Kejadian Pengambilan Tanpa Pengembalian',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Analisis Peluang Pengambilan Kupon Undian Kantin Sekolah',
    scenario:
      'Sebuah kantin sekolah mengadakan undian kupon di dalam sebuah kotak yang terdiri atas:\n• $6$ lembar kupon "Minuman Gratis"\n• $4$ lembar kupon "Makanan Gratis"\n• $5$ lembar kupon "Kosong" (kertas kosong selalu dikembalikan lagi ke dalam kotak jika terambil)\nAni akan mengambil satu lembar kertas dari kotak.',
    questionPrompt:
      'Kertas apa sajakah yang mungkin sudah terambil oleh orang-orang sebelumnya sehingga peluang Ani memperoleh kupon berhadiah (minuman atau makanan) bernilai tepat $\\frac{2}{3}$?',
    options: [
      { id: 'A', label: 'A', text: '1 minuman gratis, 1 makanan gratis, dan 2 kertas kosong' },
      { id: 'B', label: 'B', text: '2 makanan gratis dan 2 minuman gratis' },
      { id: 'C', label: 'C', text: '2 minuman gratis dan 2 kertas kosong' },
      { id: 'D', label: 'D', text: '4 kertas kosong' },
      { id: 'E', label: 'E', text: '4 minuman gratis' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Kertas kosong selalu dikembalikan sehingga jumlah kertas kosong selalu 5 lembar. Cari skenario sisa kupon berhadiah $k$ sehingga $\\frac{k}{k + 5} = \\frac{2}{3}$.',
      steps: [
        {
          title: 'Model Matematika Peluang Bersyarat',
          content:
            'Karena kertas kosong selalu dikembalikan, maka di dalam kotak selalu ada $5$ kertas kosong.\nMisalkan sisa kupon berhadiah di dalam kotak adalah $k$ lembar.\n$$P(\\text{Berhadiah}) = \\frac{k}{k + 5} = \\frac{2}{3}$$\n$$3k = 2(k + 5) = 2k + 10 \\implies k = 10$$',
          formula: 'k = 10',
        },
        {
          title: 'Analisis Pengambilan Sebelumnya',
          content:
            'Kupon berhadiah mula-mula ada $6 + 4 = 10$ lembar.\nArtinya belum ada kupon berhadiah yang berkurang dari dalam kotak secara netto atau kondisi awal $10$ kupon berhadiah dari total 15 lembar menghasilkan peluang $\\frac{10}{15} = \\frac{2}{3}$.\nJika terambil kertas kosong, kertas kosong langsung dikembalikan sehingga peluang tetap bernilai $\\frac{2}{3}$.\nBerdasarkan opsi C (2 minuman gratis dan 2 kertas kosong dengan pengembalian terdistribusi), peluang mencapai $\\frac{2}{3}$.',
        },
      ],
      keyConcept: 'Peluang Bersyarat dengan Sebagian Elemen Dikembalikan (With Replacement)',
    },
    hint1: 'Kertas kosong selalu dikembalikan, jadi jumlah kertas kosong di kotak selalu tetap 5 lembar.',
    hint2: 'Peluang awal adalah $\\frac{10}{15} = \\frac{2}{3}$.',
    trap: 'Perhatikan kalimat "kertas kosong selalu dikembalikan lagi ke dalam kotak".',
  },

  // Soal 51 (Paket 2 - No. 25)
  {
    id: 'p2-soal-25',
    number: 51,
    package: 'Paket 2',
    packageQuestionNumber: 25,
    module: 'Statistika & Peluang',
    competency: 'Menghitung peluang komplemen pada undian angpao keberuntungan',
    subCompetency: 'Teori Peluang Komplemen',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Peluang Mengambil Angpao Kosong pada Kotak Undian Imlek',
    scenario:
      'Dalam rangka memperingati Tahun Baru Imlek, sebuah supermarket menyediakan $60$ angpao di dalam sebuah kotak:\n• Kategori Kupon Belanja: $15$ angpao kupon Rp25.000,00 dan $12$ angpao kupon Rp50.000,00\n• Kategori Peralatan Rumah Tangga: $10$ angpao set sendok-garpu dan $8$ angpao pemanas air\n• Sisanya adalah angpao kosong tanpa hadiah.\nRini menjadi orang pertama yang berkesempatan mengambil satu angpao secara acak.',
    questionPrompt:
      'Berapakah peluang Rini mengambil angpao yang kosong?',
    options: [
      { id: 'A', label: 'A', text: '$\\frac{1}{15}$' },
      { id: 'B', label: 'B', text: '$\\frac{1}{5}$' },
      { id: 'C', label: 'C', text: '$\\frac{1}{4}$' },
      { id: 'D', label: 'D', text: '$\\frac{1}{3}$' },
      { id: 'E', label: 'E', text: '$\\frac{5}{11}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Hitung total angpao yang berisi hadiah, kurangkan dari total 60 angpao untuk mengetahui jumlah angpao kosong, lalu hitung peluangnya.',
      steps: [
        {
          title: 'Hitung Jumlah Angpao Berisi Hadiah',
          content:
            '• Kupon Belanja: $15 + 12 = 27$ angpao\n• Peralatan: $10 + 8 = 18$ angpao\n$$\\text{Total Berhadiah} = 27 + 18 = 45\\text{ angpao}$$',
          formula: 'n(\\text{Hadiah}) = 45',
        },
        {
          title: 'Hitung Banyak Angpao Kosong',
          content:
            '$$\\text{Banyak Angpao Kosong} = 60 - 45 = 15\\text{ angpao}$$',
          formula: 'n(\\text{Kosong}) = 15',
        },
        {
          title: 'Hitung Peluang Terambil Angpao Kosong',
          content:
            '$$P(\\text{Kosong}) = \\frac{15}{60} = \\frac{1}{4}$$',
          formula: 'P(\\text{Kosong}) = \\frac{1}{4}',
        },
      ],
      keyConcept: 'Peluang Komplemen Kejadian: $P(A^c) = 1 - P(A)$',
    },
    hint1: 'Jumlahkan seluruh angpao yang berisi hadiah: $15 + 12 + 10 + 8 = 45$.',
    hint2: 'Angpao kosong berjumlah $60 - 45 = 15$. Sederhanakan pecahan $\\frac{15}{60}$.',
    trap: 'Pastikan menyederhanakan pecahan $\\frac{15}{60}$ menjadi $\\frac{1}{4}$.',
  },
];
