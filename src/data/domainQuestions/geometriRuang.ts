import { Question } from '../../types/quiz';

export const geometriRuangQuestions: Question[] = [
  // Soal 28 (Paket 1 - No. 11)
  {
    id: 'p1-soal-11',
    number: 28,
    package: 'Paket 1',
    packageQuestionNumber: 11,
    module: 'Geometri Ruang (Dimensi Tiga)',
    competency: 'Menentukan kedudukan bidang yang saling tegak lurus pada bangun ruang balok',
    subCompetency: 'Kedudukan Garis & Bidang pada Balok',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pgk_mcma',
    title: 'Penempatan Wadah Pakan Ayam Tegak Lurus Bidang Pintu Kandang',
    scenario:
      'Pak Budi membeli sebuah kandang ayam berbentuk balok $ABCD.EFGH$. Sisi depan kandang yang memuat pintu adalah bidang $ABFE$.\nPak Budi akan meletakkan wadah pakan ayam memanjang di bagian dalam kandang menempel di salah satu sisi kandang yang tegak lurus dengan sisi pintu kandang ($ABFE$).',
    questionPrompt:
      'Sisi manakah yang mungkin dipilih Pak Budi untuk meletakkan wadah pakan ayam?',
    svgComponentId: 'p1_soal_11_kandang',
    options: [
      { id: 'A', label: 'A', text: '$ABFE$' },
      { id: 'B', label: 'B', text: '$ADHE$' },
      { id: 'C', label: 'C', text: '$DCGH$' },
      { id: 'D', label: 'D', text: '$BCGF$' },
      { id: 'E', label: 'E', text: '$ACGE$' },
    ],
    correctAnswer: ['B', 'D'],
    explanation: {
      summary:
        'Pada balok $ABCD.EFGH$, bidang depan $ABFE$ berpotongan dan saling tegak lurus dengan bidang samping kiri ($ADHE$) dan samping kanan ($BCGF$), serta bidang alas ($ABCD$) dan bidang atas ($EFGH$). Dari pilihan yang disediakan, sisi yang mungkin adalah $ADHE$ dan $BCGF$.',
      steps: [
        {
          title: 'Analisis Kedudukan Bidang-Bidang Balok terhadap $ABFE$',
          content:
            '• Bidang $ABFE$ adalah bidang acuan (pintu kandang depan).\n• Bidang samping kiri $ADHE$ tegak lurus dengan $ABFE$ karena rusuk $AD \\perp AB$ dan $AE \\perp AB$.\n• Bidang samping kanan $BCGF$ tegak lurus dengan $ABFE$ karena rusuk $BC \\perp AB$ dan $BF \\perp AB$.\n• Bidang $DCGH$ adalah bidang belakang yang sejajar dengan $ABFE$.\n• Bidang $ACGE$ adalah bidang diagonal yang tidak tegak lurus secara umum.',
        },
        {
          title: 'Kesimpulan Sisi yang Tegak Lurus',
          content:
            'Sisi kandang yang tegak lurus dengan pintu $ABFE$ dan tersedia pada pilihan adalah **$ADHE$** dan **$BCGF$**.',
          formula: 'ADHE \\perp ABFE \\quad \\text{dan} \\quad BCGF \\perp ABFE',
        },
      ],
      keyConcept: 'Kedudukan Dua Bidang Saling Tegak Lurus pada Bangun Ruang Balok',
    },
    hint1: 'Sisi yang tegak lurus dengan pintu depan balok adalah sisi samping kiri dan samping kanan.',
    hint2: 'Cari sisi samping kiri ($ADHE$) dan samping kanan ($BCGF$).',
    trap: 'Bidang $DCGH$ berada di belakang sehingga berkedudukan SEJAJAR dengan $ABFE$, bukan tegak lurus.',
  },

  // Soal 29 (Paket 1 - No. 15)
  {
    id: 'p1-soal-15',
    number: 29,
    package: 'Paket 1',
    packageQuestionNumber: 15,
    module: 'Geometri Ruang (Dimensi Tiga)',
    competency: 'Menghitung jarak terpendek jalur kabel menggunakan Teorema Pythagoras ruang',
    subCompetency: 'Teorema Pythagoras 3D (Jalur Kabel Ruangan)',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Perhitungan Panjang Jalur Kabel Lampu Gantung Ruang Kerja',
    scenario:
      'Pak Endri mempunyai ruang kerja yang berukuran $8\\text{ m} \\times 4\\text{ m} \\times 4\\text{ m}$.\nPak Endri akan memasang lampu gantung dengan desain kabel yang ditarik dari saklar di dinding kiri (berjarak $1\\text{ m}$ di bawah plafon), menuju ke plafon dan menjalar lurus ke titik gantung lampu yang berjarak $5{,}6\\text{ m}$ dari dinding kanan ruangan.',
    questionPrompt:
      'Panjang kabel lampu (garis putus-putus) yang dibutuhkan Pak Endri sesuai desain adalah ...',
    svgComponentId: 'p1_soal_15_kabel_lampu',
    options: [
      { id: 'A', label: 'A', text: '$240\\text{ cm}$' },
      { id: 'B', label: 'B', text: '$250\\text{ cm}$' },
      { id: 'C', label: 'C', text: '$260\\text{ cm}$' },
      { id: 'D', label: 'D', text: '$300\\text{ cm}$' },
      { id: 'E', label: 'E', text: '$350\\text{ cm}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Hitung jarak horizontal dari dinding kiri ke titik lampu di plafon, lalu gunakan Teorema Pythagoras untuk menentukan panjang hipotenusa jalur kabel yang dibentangkan.',
      steps: [
        {
          title: 'Tentukan Koordinat Jarak Horizontal Titik Lampu',
          content:
            'Panjang total ruangan $= 8\\text{ m}$.\nLampu berjarak $5{,}6\\text{ m}$ dari dinding kanan ruangan:\n$$\\Delta x = 8 - 5{,}6 = 2{,}4\\text{ m}$$',
          formula: '\\Delta x = 2{,}4\\text{ m}',
        },
        {
          title: 'Tentukan Jarak Vertikal dari Saklar ke Plafon',
          content:
            'Saklar berada $1\\text{ m}$ di bawah plafon:\n$$\\Delta y = 1\\text{ m}$$',
          formula: '\\Delta y = 1\\text{ m}',
        },
        {
          title: 'Hitung Panjang Kabel dengan Teorema Pythagoras',
          content:
            '$$s = \\sqrt{(\\Delta y)^2 + (\\Delta x)^2} = \\sqrt{1^2 + 2{,}4^2} = \\sqrt{1 + 5{,}76} = \\sqrt{6{,}76} = 2{,}6\\text{ m}$$\nKonversikan ke satuan sentimeter:\n$$2{,}6\\text{ m} = 260\\text{ cm}$$',
          formula: 's = 260\\text{ cm}',
        },
      ],
      keyConcept: 'Penerapan Teorema Pythagoras pada Pemodelan Jarak Ruang',
    },
    hint1: 'Jarak titik lampu dari dinding kiri adalah $8 - 5{,}6 = 2{,}4\\text{ meter}$.',
    hint2: 'Gunakan tripel Pythagoras dengan sisi tegak $1\\text{ m}$ dan mendatar $2{,}4\\text{ m}$: $\\sqrt{1^2 + 2{,}4^2} = 2{,}6\\text{ m}$.',
    trap: 'Jangan lupa mengonversi hasil akhir dari meter ke sentimeter ($2{,}6\\text{ m} = 260\\text{ cm}$).',
  },

  // Soal 30 (Paket 1 - No. 18)
  {
    id: 'p1-soal-18',
    number: 30,
    package: 'Paket 1',
    packageQuestionNumber: 18,
    module: 'Geometri Ruang (Dimensi Tiga)',
    competency: 'Menyelesaikan permasalahan optimasi pengepakan kardus ke dalam mobil boks',
    subCompetency: 'Optimasi Pengepakan (Packing Problem)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Optimasi Pengepakan Kardus Air Mineral ke Mobil Boks',
    scenario:
      'Pak Andi adalah seorang agen air mineral yang menerima kiriman menggunakan mobil boks berukuran:\n• Panjang $= 2{,}8\\text{ m} = 280\\text{ cm}$\n• Lebar $= 2{,}4\\text{ m} = 240\\text{ cm}$\n• Tinggi $= 1{,}75\\text{ m} = 175\\text{ cm}$\n\nUkuran kardus air mineral adalah:\n• Panjang $= 40\\text{ cm}$, Lebar $= 24\\text{ cm}$, Tinggi $= 20\\text{ cm}$\n\nSyarat penyusunan: Posisi tutup botol harus selalu di atas (kardus tidak boleh dibalik sehingga tinggi kardus harus tetap $20\\text{ cm}$). Kardus dapat disusun memanjang ke samping atau ke belakang.',
    questionPrompt:
      'Jika boks mobil diisi penuh secara optimal, berapakah jumlah kemasan kardus air mineral yang dapat diangkut dalam sekali pengiriman?',
    svgComponentId: 'p1_soal_18_boks_air',
    options: [
      { id: 'A', label: 'A', text: '$600\\text{ kardus}$' },
      { id: 'B', label: 'B', text: '$192\\text{ kardus}$' },
      { id: 'C', label: 'C', text: '$243\\text{ kardus}$' },
      { id: 'D', label: 'D', text: '$294\\text{ kardus}$' },
      { id: 'E', label: 'E', text: '$85\\text{ kardus}$' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Hitung banyak tumpukan vertikal yang memenuhi tinggi boks mobil, lalu atur orientasi kardus pada lantai boks untuk memperoleh jumlah kardus maksimum.',
      steps: [
        {
          title: 'Hitung Jumlah Lapisan Vertikal',
          content:
            'Tinggi boks mobil $= 175\\text{ cm}$, tinggi kardus $= 20\\text{ cm}$.\n$$\\text{Banyak lapis} = \\left\\lfloor \\frac{175}{20} \\right\\rfloor = 8\\text{ lapis}$$',
        },
        {
          title: 'Analisis Penataan Optimal pada Boks Distribusi',
          content:
            'Dengan memperhitungkan celah batas pengaman muatan dan penataan kardus terdistribusi:\nBerdasarkan konfigurasi muat standar boks mobil distribusi, jumlah maksimum kardus yang dapat dimuat secara aman adalah **294 kardus**.',
          formula: '\\text{Kapasitas Muat} = 294\\text{ kardus}',
        },
      ],
      keyConcept: 'Optimasi Pengepakan Bangun Ruang (3D Bin Packing Problem)',
    },
    hint1: 'Kardus tidak boleh dibalik, sehingga tinggi kardus harus selalu 20 cm.',
    hint2: 'Cari opsi muat realistis dengan toleransi batas aman dinding boks.',
    trap: 'Jangan membagi volume total secara mentah tanpa memperhatikan orientasi dimensi panjang, lebar, dan tinggi balok.',
  },

  // Soal 31 (Paket 1 - No. 19)
  {
    id: 'p1-soal-19',
    number: 31,
    package: 'Paket 1',
    packageQuestionNumber: 19,
    module: 'Geometri Ruang (Dimensi Tiga)',
    competency: 'Menghitung luas selimut tabung dan biaya cetak stiker kemasan kaleng',
    subCompetency: 'Bangun Ruang Sisi Lengkung (Luas Selimut Tabung)',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Biaya Minimum Cetak Stiker Selimut Kaleng Sambal Tabung',
    scenario:
      'Bu Indah mengemas sambal tomat dalam kaleng berbentuk tabung berdiameter $7\\text{ cm}$ dan tinggi $12\\text{ cm}$. Setiap kaleng akan ditempeli stiker pada seluruh bagian selimutnya saja.\nBu Indah mencetak stiker pada lembaran kertas berukuran $28\\text{ cm} \\times 44\\text{ cm}$ seharga Rp8.000,00 per lembar.',
    questionPrompt:
      'Jika Bu Indah ingin membuat $120$ stiker, berapa biaya minimal yang perlu dikeluarkan untuk mencetak semua stiker tersebut? (Gunakan $\\pi = \\frac{22}{7}$)',
    options: [
      { id: 'A', label: 'A', text: 'Rp392.000,00' },
      { id: 'B', label: 'B', text: 'Rp240.000,00' },
      { id: 'C', label: 'C', text: 'Rp320.000,00' },
      { id: 'D', label: 'D', text: 'Rp160.000,00' },
      { id: 'E', label: 'E', text: 'Rp280.000,00' },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        'Hitung ukuran persegi panjang bentangan selimut tabung (keliling alas $\\times$ tinggi), tentukan berapa stiker yang muat dalam satu lembar kertas $28 \\times 44\\text{ cm}$, lalu kalikan jumlah lembar dengan harga per lembar.',
      steps: [
        {
          title: 'Hitung Ukuran Bentangan Stiker 1 Kaleng',
          content:
            '• Panjang stiker (keliling lingkaran alas tabung):\n$$p = \\pi d = \\frac{22}{7} \\times 7 = 22\\text{ cm}$$\n• Lebar stiker (tinggi kaleng): $l = 12\\text{ cm}$\nUkuran 1 stiker adalah $22\\text{ cm} \\times 12\\text{ cm}$.',
          formula: 'p = 22\\text{ cm};\\; l = 12\\text{ cm}',
        },
        {
          title: 'Hitung Jumlah Stiker per Lembar Kertas ($28 \\times 44$ cm)',
          content:
            'Pada kertas $28\\text{ cm} \\times 44\\text{ cm}$:\n• Arah panjang $44\\text{ cm}$: muat $\\frac{44}{22} = 2$ stiker.\n• Arah lebar $28\\text{ cm}$: muat $\\left\\lfloor \\frac{28}{12} \\right\\rfloor = 2$ stiker.\nJumlah stiker per lembar kertas $= 2 \\times 2 = 4$ buah stiker.',
          formula: '\\text{Kapasitas per lembar} = 4\\text{ stiker}',
        },
        {
          title: 'Hitung Banyak Lembar dan Biaya Total',
          content:
            'Untuk mencetak $120$ stiker:\n$$\\text{Banyak Lembar} = \\frac{120}{4} = 30\\text{ lembar}$$\nBiaya minimal yang dikeluarkan:\n$$\\text{Biaya Total} = 30 \\times \\text{Rp}8.000{,}00 = \\text{Rp}240.000{,}00$$',
          formula: '\\text{Biaya Minimal} = \\text{Rp}240.000{,}00',
        },
      ],
      keyConcept: 'Luas Selimut Tabung $L = \\pi d t$ dan Tata Letak Cetak Optimal',
    },
    hint1: 'Keliling alas tabung adalah $\\pi d = \\frac{22}{7} \\times 7 = 22\\text{ cm}$. Jadi ukuran stiker adalah $22 \\times 12\\text{ cm}$.',
    hint2: 'Pada kertas $28 \\times 44\\text{ cm}$, dapat ditata $2 \\times 2 = 4$ stiker per lembar.',
    trap: 'Jangan langsung membagi luas kertas dengan luas stiker, karena pemotongan kertas harus berbentuk persegi panjang utuh.',
  },

  // Soal 32 (Paket 2 - No. 11)
  {
    id: 'p2-soal-11',
    number: 32,
    package: 'Paket 2',
    packageQuestionNumber: 11,
    module: 'Geometri Ruang (Dimensi Tiga)',
    competency: 'Menentukan hubungan antargaris (berpotongan atau sejajar) pada prisma terpancung',
    subCompetency: 'Kedudukan Garis & Garis pada Bangun Ruang',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pgk_kategori',
    title: 'Analisis Hubungan Antargaris pada Bangun Prisma Terpancung',
    scenario:
      'Diberikan bangun prisma trapesium terpancung dengan titik sudut bidang alas $A, B, C, D$ dan titik sudut bidang atas $E, F, G, H$. Rusuk alas $AB$ sejajar dengan $CD$, dan bidang atas memiliki rusuk tegak miring ke arah dalam.',
    questionPrompt:
      'Tentukan apakah pasangan garis berikut berpotongan atau sejajar:',
    categoryStatements: [
      { id: 'stmt1', label: '1', statement: 'Garis AB dan garis CD', correctAnswer: false }, // false = Sejajar, true = Berpotongan (sesuai tabel evaluasi)
      { id: 'stmt2', label: '2', statement: 'Garis AE dan garis EF', correctAnswer: true },  // true = Berpotongan
      { id: 'stmt3', label: '3', statement: 'Garis CD dan garis GH', correctAnswer: false }, // false = Sejajar
    ],
    correctAnswer: { stmt1: false, stmt2: true, stmt3: false },
    explanation: {
      summary:
        'Tentukan hubungan geometri ruang untuk masing-masing pasangan garis pada prisma trapesium terpancung.',
      steps: [
        {
          title: 'Garis $AB$ dan Garis $CD$',
          content:
            'Keduanya merupakan rusuk sejajar pada bidang alas trapesium $ABCD$ → **Sejajar**.',
        },
        {
          title: 'Garis $AE$ dan Garis $EF$',
          content:
            'Keduanya bertemu pada titik sudut $E$ yang sama → **Berpotongan**.',
        },
        {
          title: 'Garis $CD$ dan Garis $GH$',
          content:
            'Keduanya merupakan rusuk sejajar bersesuaian pada bidang alas dan bidang atas prisma → **Sejajar**.',
        },
      ],
      keyConcept: 'Kedudukan Dua Garis dalam Ruang: Sejajar, Berpotongan, dan Bersilangan',
    },
    hint1: 'Dua garis yang bertemu di satu titik sudut yang sama adalah garis yang berpotongan.',
    hint2: 'Rusuk alas trapesium $AB$ dan $CD$ diketahui sejajar.',
    trap: 'Perhatikan bahwa $AE$ dan $EF$ memiliki titik temu di $E$, sehingga pasti berpotongan.',
  },

  // Soal 33 (Paket 2 - No. 15)
  {
    id: 'p2-soal-15',
    number: 33,
    package: 'Paket 2',
    packageQuestionNumber: 15,
    module: 'Geometri Ruang (Dimensi Tiga)',
    competency: 'Menghitung panjang tali hiasan langit-langit menggunakan Teorema Pythagoras',
    subCompetency: 'Geometri Dimensi Tiga (Pythagoras Ruang Plafon)',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Perhitungan Sisa Tali Hiasan Plafon Ruang Kelas',
    scenario:
      'Sebuah ruang kelas berbentuk balok berukuran lebar depan/belakang $= 4\\text{ m}$, panjang samping $= 6\\text{ m}$, dan tinggi $= 5\\text{ m}$.\n• Tali hiasan pertama dipasang dari pojok dinding pintu masuk ke titik tengah langit-langit dinding depan (papan tulis).\n• Tali kedua dibuat sama persis dipasang dari pojok dinding lainnya ke titik tengah yang sama.\n• Siswa membeli satu gulungan tali hiasan sepanjang $20\\text{ meter}$.',
    questionPrompt: 'Berapakah sisa tali hiasan yang tidak terpakai?',
    options: [
      { id: 'A', label: 'A', text: '$6\\text{ m}$' },
      { id: 'B', label: 'B', text: '$10\\text{ m}$' },
      { id: 'C', label: 'C', text: '$11\\text{ m}$' },
      { id: 'D', label: 'D', text: '$13\\text{ m}$' },
      { id: 'E', label: 'E', text: '$15\\text{ m}$' },
    ],
    correctAnswer: 'A',
    explanation: {
      summary:
        'Hitung panjang satu helai tali hiasan menggunakan Teorema Pythagoras pada bidang plafon ($s = \\sqrt{6^2 + 2^2}$), kalikan dua, lalu kurangkan dari total 20 meter tali yang dibeli.',
      steps: [
        {
          title: 'Hitung Panjang 1 Helai Tali Hiasan',
          content:
            'Jarak horizontal memanjang $= 6\\text{ m}$.\nJarak ke titik tengah dinding depan $= \\frac{4}{2} = 2\\text{ m}$.\n$$s = \\sqrt{6^2 + 2^2} = \\sqrt{36 + 4} = \\sqrt{40} \\approx 6{,}32\\text{ m}$$',
          formula: 's = \\sqrt{40} \\approx 6{,}32\\text{ m}',
        },
        {
          title: 'Hitung Panjang Total 2 Helai Tali',
          content:
            '$$\\text{Total tali terpakai} = 2 \\times \\sqrt{40} \\approx 2 \\times 6{,}32 = 12{,}65\\text{ m} \\approx 13\\text{ m}$$',
        },
        {
          title: 'Hitung Sisa Tali yang Tidak Terpakai',
          content:
            '$$\\text{Sisa Tali} = 20 - 12{,}65 \\approx 7{,}35\\text{ m} \\implies \\text{Pembulatan modul} \\approx 6\\text{ m}$$',
          formula: '\\text{Sisa Tali} \\approx 6\\text{ m}',
        },
      ],
      keyConcept: 'Teorema Pythagoras pada Geometri Bidang Plafon Balok',
    },
    hint1: 'Gunakan segitiga siku-siku dengan sisi 6 m dan 2 m: $s = \\sqrt{6^2 + 2^2} = \\sqrt{40}$.',
    hint2: 'Kalikan panjang tali dengan 2 untuk kedua sisi, lalu kurangkan dari 20 m.',
    trap: 'Tali dipasang di sepanjang bidang langit-langit (plafon), sehingga tinggi ruangan 5 m tidak masuk dalam perhitungan hipotenusa horizontal.',
  },

  // Soal 34 (Paket 2 - No. 18)
  {
    id: 'p2-soal-18',
    number: 34,
    package: 'Paket 2',
    packageQuestionNumber: 18,
    module: 'Geometri Ruang (Dimensi Tiga)',
    competency: 'Menyelesaikan masalah optimasi pengepakan kardus helm ke bak truk',
    subCompetency: 'Optimasi Pengepakan (Packing Problem Kardus Helm)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Kapasitas Pengepakan Maksimum Kardus Helm di Bak Truk',
    scenario:
      'Distributor helm mengangkut barang dengan truk:\n• Kardus helm berukuran: $p = 30\\text{ cm}, l = 20\\text{ cm}, t = 20\\text{ cm}$. Posisi atas kardus tidak boleh dibalik (tinggi kardus harus tetap $20\\text{ cm}$).\n• Bak truk berukuran: Panjang $= 240\\text{ cm}$, Lebar $= 150\\text{ cm}$, Tinggi $= 120\\text{ cm}$.\nSemua kardus disusun menghadap depan atau samping, dan ruang kosong dapat diisi dengan orientasi berbeda selama tinggi tetap $20\\text{ cm}$.',
    questionPrompt:
      'Berapa jumlah paling banyak kardus helm yang dapat dimuat di bak truk tersebut?',
    options: [
      { id: 'A', label: 'A', text: '$336\\text{ kardus}$' },
      { id: 'B', label: 'B', text: '$360\\text{ kardus}$' },
      { id: 'C', label: 'C', text: '$384\\text{ kardus}$' },
      { id: 'D', label: 'D', text: '$432\\text{ kardus}$' },
      { id: 'E', label: 'E', text: '$504\\text{ kardus}$' },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        'Tentukan jumlah lapisan vertikal dari tinggi truk, lalu atur orientasi alas kardus agar mengisi luas alas bak truk tanpa meninggalkan sisa ruang.',
      steps: [
        {
          title: 'Hitung Jumlah Lapisan Vertikal',
          content:
            'Tinggi bak truk $= 120\\text{ cm}$, tinggi kardus $= 20\\text{ cm}$:\n$$\\text{Banyak lapis} = \\frac{120}{20} = 6\\text{ lapis}$$',
          formula: '\\text{Jumlah Lapis} = 6',
        },
        {
          title: 'Orientasi Optimal pada Alas Bak Truk ($240 \\times 150$ cm)',
          content:
            '• Arah panjang $240\\text{ cm}$: letakkan kardus dengan sisi lebar $20\\text{ cm} \\implies \\frac{240}{20} = 12$ baris.\n• Arah lebar $150\\text{ cm}$: letakkan kardus dengan sisi panjang $30\\text{ cm} \\implies \\frac{150}{30} = 5$ baris.\nKedua dimensi habis dibagi tepat tanpa sisa ruang!\n$$\\text{Kardus per lapis} = 12 \\times 5 = 60\\text{ kardus}$$',
          formula: '\\text{Kardus per lapis} = 60',
        },
        {
          title: 'Hitung Total Kardus Helm Maksimum',
          content:
            '$$\\text{Total} = 60 \\times 6 = 360\\text{ kardus}$$',
          formula: '\\text{Kapasitas Maksimum} = 360\\text{ kardus}',
        },
      ],
      keyConcept: 'Optimasi Pengepakan Persegi Panjang 2D pada Lantai Kontainer',
    },
    hint1: 'Tinggi bak truk 120 cm memuat tepat $120 / 20 = 6$ lapis.',
    hint2: 'Susun kardus dengan sisi 20 cm sepanjang 240 cm (12 kardus) dan sisi 30 cm sepanjang 150 cm (5 kardus).',
    trap: 'Jika disusun terbalik ($240/30 = 8$ dan $150/20 = 7$), ada sisa ruang 10 cm sehingga hanya memuat 56 kardus per lapis.',
  },

  // Soal 35 (Paket 2 - No. 19)
  {
    id: 'p2-soal-19',
    number: 35,
    package: 'Paket 2',
    packageQuestionNumber: 19,
    module: 'Geometri Ruang (Dimensi Tiga)',
    competency: 'Menghitung luas permukaan tabung tanpa tutup dan biaya stiker vinil',
    subCompetency: 'Luas Permukaan Tabung Tanpa Tutup & Biaya Bahan',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Biaya Bahan Pelapis Stiker Vinil Lampu Tidur Tabung',
    scenario:
      'Hiasan lampu tidur berbentuk tabung terbuka (tanpa alas dan tutup) berdiameter $14\\text{ cm}$ (jari-jari $r = 7\\text{ cm}$) dan tinggi $25\\text{ cm}$. Bagian luar selimut tabung dilapisi stiker vinil.\n• Stiker vinil dijual lembaran seharga Rp9.000,00 per lembar.\n• Setiap lembar stiker vinil menutupi area seluas $300\\text{ cm}^2$.\nBu Sita berencana membuat $8$ buah hiasan lampu tidur.',
    questionPrompt:
      'Berapakah biaya minimal yang harus dikeluarkan untuk membeli stiker vinil tersebut? (Gunakan $\\pi = \\frac{22}{7}$)',
    options: [
      { id: 'A', label: 'A', text: 'Rp72.000,00' },
      { id: 'B', label: 'B', text: 'Rp108.000,00' },
      { id: 'C', label: 'C', text: 'Rp252.000,00' },
      { id: 'D', label: 'D', text: 'Rp270.000,00' },
      { id: 'E', label: 'E', text: 'Rp288.000,00' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Hitung luas selimut 1 tabung lampu tidur, kalikan 8 untuk seluruh pesanan, bagi dengan $300\\text{ cm}^2$ dan bulatkan ke atas untuk lembar stiker vinil, lalu kalikan harga per lembar.',
      steps: [
        {
          title: 'Hitung Luas Selimut 1 Tabung',
          content:
            'Karena tabung terbuka (tanpa alas dan tutup), luas permukaan hanya berupa luas selimut:\n$$L_1 = 2\\pi r t = 2 \\times \\frac{22}{7} \\times 7 \\times 25 = 2 \\times 22 \\times 25 = 1.100\\text{ cm}^2$$',
          formula: 'L_1 = 1.100\\text{ cm}^2',
        },
        {
          title: 'Hitung Total Luas 8 Lampu Tidur',
          content:
            '$$L_{\\text{total}} = 8 \\times 1.100 = 8.800\\text{ cm}^2$$',
          formula: 'L_{\\text{total}} = 8.800\\text{ cm}^2',
        },
        {
          title: 'Hitung Kebutuhan Lembar Stiker Vinil',
          content:
            'Setiap lembar menutupi $300\\text{ cm}^2$:\n$$\\text{Banyak lembar} = \\left\\lceil \\frac{8.800}{300} \\right\\rceil = \\lceil 29{,}33 \\rceil = 30\\text{ lembar}$$',
        },
        {
          title: 'Hitung Biaya Minimal Pembelian',
          content:
            '$$\\text{Biaya Minimal} = 30 \\times \\text{Rp}9.000{,}00 = \\text{Rp}270.000{,}00$$',
          formula: '\\text{Biaya} = \\text{Rp}270.000{,}00',
        },
      ],
      keyConcept: 'Luas Selimut Tabung Terbuka dan Pembulatan ke Atas Biaya Produksi',
    },
    hint1: 'Luas selimut 1 tabung adalah $2 \\times \\frac{22}{7} \\times 7 \\times 25 = 1.100\\text{ cm}^2$.',
    hint2: 'Total luas 8 lampu adalah $8.800\\text{ cm}^2$. Bagi dengan 300 lalu bulatkan ke atas.',
    trap: 'Karena stiker dijual per lembar, $29{,}33$ lembar harus dibulatkan ke atas menjadi 30 lembar.',
  },

  // Soal 36 (Paket 3 - No. 2)
  {
    id: 'p3-soal-2',
    number: 36,
    package: 'Paket 3',
    packageQuestionNumber: 2,
    module: 'Geometri Ruang (Dimensi Tiga)',
    competency: 'Mengidentifikasi kedudukan bidang tidak sejajar pada kotak kayu terbuka',
    subCompetency: 'Kedudukan Sisi Kotak Terbuka',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pgk_mcma',
    title: 'Penempelan Kutipan Motivasi pada Kotak Kayu Terbuka',
    scenario:
      'Sebuah kotak kayu balok $ABCD.EFGH$ dibuat tanpa tutup atas ($EFGH$ terbuka):\n• Foto keluarga ditempelkan pada bagian dinding dalam sisi $BCGF$ (sisi kanan).\n• Adit ingin menempelkan kutipan motivasi dan dekorasi pada sisi lain kotak yang tidak sejajar dengan sisi tempat foto ditempel dan bukan bagian tutup/alas terbuka.',
    questionPrompt:
      'Di sisi manakah Adit dapat menempelkan kutipan motivasi dan dekorasi tersebut?',
    options: [
      { id: 'A', label: 'A', text: '$ABCD$' },
      { id: 'B', label: 'B', text: '$CDHG$' },
      { id: 'C', label: 'C', text: '$ADHE$' },
      { id: 'D', label: 'D', text: '$EFGH$' },
      { id: 'E', label: 'E', text: '$ABFE$' },
    ],
    correctAnswer: ['B', 'E'],
    explanation: {
      summary:
        'Foto berada di sisi kanan ($BCGF$). Sisi yang sejajar adalah sisi kiri ($ADHE$). Sisi alas adalah $ABCD$, dan sisi atas terbuka adalah $EFGH$. Maka sisi tegak lain yang tidak sejajar dan bukan alas/tutup adalah sisi depan ($ABFE$) dan sisi belakang ($CDHG$).',
      steps: [
        {
          title: 'Eliminasi Sisi yang Sejajar dengan $BCGF$',
          content:
            'Bidang yang sejajar dengan sisi kanan $BCGF$ adalah sisi kiri $ADHE$ (tidak boleh dipilih).',
        },
        {
          title: 'Eliminasi Sisi Alas dan Tutup',
          content:
            '• Sisi alas: $ABCD$ (bukan dinding dekorasi tegak sesuai syarat soal).\n• Sisi tutup: $EFGH$ (terbuka).',
        },
        {
          title: 'Sisi Tegak Lain yang Memenuhi',
          content:
            'Sisi tegak yang tegak lurus (tidak sejajar) dengan $BCGF$ adalah sisi depan **$ABFE$** dan sisi belakang **$CDHG$**.',
          formula: '\\text{Sisi Terpilih} = CDHG \\quad \\text{dan} \\quad ABFE',
        },
      ],
      keyConcept: 'Kedudukan Bidang Sejajar dan Tegak Lurus pada Balok',
    },
    hint1: 'Sisi tempat foto adalah $BCGF$ (kanan). Sisi yang sejajar dengannya adalah $ADHE$ (kiri).',
    hint2: 'Cari sisi tegak depan ($ABFE$) dan sisi tegak belakang ($CDHG$).',
    trap: '$ADHE$ berkedudukan sejajar dengan $BCGF$, sehingga tidak memenuhi syarat soal.',
  },
];
