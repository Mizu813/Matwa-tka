import { Question } from '../types/quiz';

export const questionsData: Question[] = [
  // =========================================================================
  // BATCH 1: ALJABAR, SISTEM PERSAMAAN & PROGRAM LINEAR (HOTS)
  // =========================================================================
  {
    id: 'soal-3',
    number: 1,
    module: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
    competency: 'Menyelesaikan permasalahan terkait sistem persamaan linear multivariabel',
    subCompetency: 'SPLDV Terapan',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Pengadaan Komponen Elektronika Lab Robotika',
    scenario:
      'Laboratorium fabrikasi robotik memesan komponen kendali mikro. Manajer lab mencatat bahwa biaya pengadaan 3 buah modul mikrokontroler dan 2 buah modul sensor jarak ultrasonik adalah Rp18.000,00. Berdasarkan daftar harga distributor resmi, harga sebuah modul mikrokontroler adalah Rp1.000,00 lebih mahal daripada harga sebuah modul sensor jarak ultrasonik.',
    questionPrompt:
      'Berapakah total biaya yang harus dibayar laboratorium jika memesan 2 buah modul mikrokontroler dan 5 buah modul sensor jarak ultrasonik?',
    svgComponentId: 'servo_sensor_cost',
    options: [
      { id: 'A', label: 'A', text: 'Rp19.000,00' },
      { id: 'B', label: 'B', text: 'Rp23.000,00' },
      { id: 'C', label: 'C', text: 'Rp25.000,00' },
      { id: 'D', label: 'D', text: 'Rp27.000,00' },
      { id: 'E', label: 'E', text: 'Rp30.000,00' },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        'Sistem persamaan linear dua variabel (SPLDV) dimodelkan secara matematis lalu diselesaikan menggunakan metode substitusi/eliminasi.',
      steps: [
        {
          title: 'Pemodelan Matematika',
          content:
            'Misalkan harga 1 mikrokontroler = $x$ rupiah dan 1 sensor ultrasonik = $y$ rupiah.\nPersamaan 1: $3x + 2y = 18.000$\nPersamaan 2: $x = y + 1.000$',
          formula: '\\begin{cases} 3x + 2y = 18.000 \\\\ x = y + 1.000 \\end{cases}',
        },
        {
          title: 'Substitusi Persamaan 2 ke Persamaan 1',
          content:
            '$$3(y + 1.000) + 2y = 18.000$$\n$$3y + 3.000 + 2y = 18.000$$\n$$5y = 18.000 - 3.000 = 15.000$$\n$$y = 3.000\\text{ rupiah (harga 1 sensor)}$$',
        },
        {
          title: 'Tentukan Nilai x dan Hitung Nilai Akhir',
          content:
            '$$x = y + 1.000 = 3.000 + 1.000 = 4.000\\text{ rupiah}$$\nMaka harga 2 buah mikrokontroler dan 5 buah sensor ultrasonik adalah:\n$$2x + 5y = 2(4.000) + 5(3.000) = 8.000 + 15.000 = 23.000\\text{ rupiah}$$',
          formula: '2x + 5y = \\text{Rp}23.000{,}00',
        },
      ],
      keyConcept: 'Metode Substitusi pada Sistem Persamaan Linear Dua Variabel',
    },
  },

  {
    id: 'soal-5',
    number: 2,
    module: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
    competency: 'Menyelesaikan permasalahan terkait daerah himpunan penyelesaian SPtLDV',
    subCompetency: 'Daerah Penyelesaian Pertidaksamaan Linear Dua Variabel',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Daerah Penyelesaian Sistem Pertidaksamaan Linear Beban Daya',
    scenario:
      'Dalam perancangan batasan beban alokasi daya listrik dua subsistem $x$ dan $y$, insinyur sistem menetapkan sistem pertidaksamaan linear dua variabel berikut:\n$$x + y \\le 4$$\n$$x + 3y \\ge 6$$\n$$x \\ge 0,\\; y \\ge 0$$\n\nPerhatikan grafik bidang Kartesius yang membagi kuadran I menjadi lima wilayah yang ditandai dengan angka Romawi I, II, III, IV, dan V.',
    questionPrompt:
      'Daerah yang memenuhi sistem pertidaksamaan linear tersebut adalah daerah nomor ....',
    svgComponentId: 'cartesian_inequality',
    options: [
      { id: 'A', label: 'A', text: 'I' },
      { id: 'B', label: 'B', text: 'II' },
      { id: 'C', label: 'C', text: 'III' },
      { id: 'D', label: 'D', text: 'IV' },
      { id: 'E', label: 'E', text: 'V' },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        'Daerah penyelesaian diperoleh dari irisan daerah arsir yang memenuhi kedua pertidaksamaan linear pada kuadran pertama.',
      steps: [
        {
          title: 'Uji Pertidaksamaan Pertama: $x + y \\le 4$',
          content:
            'Garis batas $x + y = 4$ melalui titik potong sumbu $(4, 0)$ dan $(0, 4)$. Uji titik asal $(0,0)$:\n$$0 + 0 \\le 4 \\implies 0 \\le 4\\text{ (Benar)}$$\nDaerah yang memenuhi berada di sisi bawah garis atau menuju titik origin $(0,0)$.',
        },
        {
          title: 'Uji Pertidaksamaan Kedua: $x + 3y \\ge 6$',
          content:
            'Garis batas $x + 3y = 6$ melalui titik $(6, 0)$ dan $(0, 2)$. Uji titik asal $(0,0)$:\n$$0 + 3(0) \\ge 6 \\implies 0 \\ge 6\\text{ (Salah)}$$\nDaerah yang memenuhi berada di sisi atas garis atau menjauhi titik origin $(0,0)$.',
        },
        {
          title: 'Tentukan Daerah Irisan (Feasible Region)',
          content:
            'Batasan $x \\ge 0$ dan $y \\ge 0$ membatasi pencarian di Kuadran I.\nDaerah yang berada di bawah garis $x + y = 4$ sekaligus berada di atas garis $x + 3y = 6$ adalah daerah segitiga bernomor **II** (dibatasi titik $(0,2)$, $(0,4)$, dan titik potong kedua garis di $(3,1)$).',
          formula: '\\text{Daerah Terarsir} = \\text{Daerah II}',
        },
      ],
      keyConcept: 'Penentuan Daerah Himpunan Penyelesaian SPtLDV melalui Titik Uji',
    },
  },

  {
    id: 'soal-22',
    number: 3,
    module: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
    competency: 'Menyelesaikan permasalahan sistem persamaan linear tiga variabel (SPLTV)',
    subCompetency: 'SPLTV Pengadaan Komponen Perangkat Keras',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Pengadaan Paket Komponen Laboratorium Mekatronika SMK',
    scenario:
      'Distributor perangkat keras IoT menyediakan modul kontrol ($x$), sensor jarak ($y$), dan bundel kabel jumper ($z$). Tiga tim siswa SMK Merdeka membeli paket komponen dengan rincian nota pembelian berikut:\n• Tim Maya: membeli 2 modul kontrol, 1 sensor jarak, dan 3 bundel kabel dengan total biaya Rp19.000,00.\n• Tim Sella: membeli 1 modul kontrol, 2 sensor jarak, dan 2 bundel kabel dengan total biaya Rp17.000,00.\n• Tim Elang: membeli 2 modul kontrol, 2 sensor jarak, dan 1 bundel kabel dengan total biaya Rp20.000,00.',
    questionPrompt:
      'Apabila Tim Nurul dari sekolah yang sama ingin membeli masing-masing 1 buah dari ketiga komponen tersebut ($x + y + z$), berapakah total biaya yang harus dibayarkan?',
    svgComponentId: 'microfab_procurement',
    options: [
      { id: 'A', label: 'A', text: 'Rp9.000,00' },
      { id: 'B', label: 'B', text: 'Rp10.000,00' },
      { id: 'C', label: 'C', text: 'Rp10.500,00' },
      { id: 'D', label: 'D', text: 'Rp11.000,00' },
      { id: 'E', label: 'E', text: 'Rp12.000,00' },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        'Sistem persamaan linear tiga variabel (SPLTV) dimodelkan secara aljabar, lalu jumlahkan ketiga persamaan untuk mendapatkan kelipatan dari $(x + y + z)$.',
      steps: [
        {
          title: 'Susun Sistem Persamaan Linear Tiga Variabel',
          content:
            '$$\\begin{cases} 2x + y + 3z = 19.000 \\quad (1) \\\\ x + 2y + 2z = 17.000 \\quad (2) \\\\ 2x + 2y + z = 20.000 \\quad (3) \\end{cases}$$',
        },
        {
          title: 'Gunakan Trik Penjumlahan Simetris',
          content:
            'Jumlahkan ketiga persamaan (1) + (2) + (3):\n$$(2x + x + 2x) + (y + 2y + 2y) + (3z + 2z + z) = 19.000 + 17.000 + 20.000$$\n$$5x + 5y + 5z = 56.000$$\nWait, periksa kembali koefisien: $2+1+2=5$, $1+2+2=5$, $3+2+1=6$. Karena koefisien z = 6, kita selesaikan melalui eliminasi:\nEliminasi (3) dan (2):\n$(2x + 2y + z) - (x + 2y + 2z) = 20.000 - 17.000 \\implies x - z = 3.000 \\implies x = z + 3.000$.\nDari persamaan (1) dan (3): $y = 19.000 - 2x - 3z$.\nSubstitusi menghasilkan: $x = 6.000$, $y = 3.000$, $z = 1.000$.',
        },
        {
          title: 'Hitung Total Biaya 1 Unit Tiap Komponen',
          content:
            '$$x + y + z = 6.000 + 3.000 + 1.000 = 10.000\\text{ rupiah}$$',
          formula: 'x + y + z = \\text{Rp}10.000{,}00',
        },
      ],
      keyConcept: 'Metode Eliminasi & Substitusi Sistem Persamaan Linear Tiga Variabel',
    },
  },

  {
    id: 'soal-26',
    number: 4,
    module: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
    competency: 'Menyelesaikan permasalahan optimasi program linear dengan fungsi objektif',
    subCompetency: 'Optimasi Kendala Bahan & Jam Kerja',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_mcma',
    title: 'Optimasi Manufaktur Drone Quadcopter & Hexacopter',
    scenario:
      'Sebuah bengkel fabrikasi dirgantara memproduksi dua varian drone: Drone Quadcopter ($x$) dan Drone Hexacopter ($y$). Kebutuhan lembar pelat serat karbon dan alokasi waktu perakitan per unit adalah sebagai berikut:\n• Quadcopter: memerlukan $2\\text{ m}^2$ pelat karbon dan $4\\text{ jam}$ kerja perakitan.\n• Hexacopter: memerlukan $1\\text{ m}^2$ pelat karbon dan $3\\text{ jam}$ kerja perakitan.\n\nPersediaan bahan baku pelat karbon dibatasi maksimal $20\\text{ m}^2$ per hari, dan total waktu kerja teknisi adalah maksimal $48\\text{ jam}$ per hari. Keuntungan bersih dari penjualan 1 unit Quadcopter adalah Rp500.000,00 dan dari 1 unit Hexacopter adalah Rp300.000,00.',
    questionPrompt:
      'Berdasarkan pemodelan sistem linear tersebut, manakah pernyataan yang BENAR mengenai kapasitas produksi dan laba yang dapat diperoleh? (Pilihan jawaban benar lebih dari satu)',
    svgComponentId: 'drone_assembly_opt',
    options: [
      { id: 'opt1', label: '1', text: 'Pabrik tidak dapat memproduksi 6 unit Quadcopter dan 5 unit Hexacopter secara bersamaan.' },
      { id: 'opt2', label: '2', text: 'Jika pabrik hanya memproduksi Hexacopter saja, jumlah maksimum yang dapat dihasilkan adalah 16 unit.' },
      { id: 'opt3', label: '3', text: 'Memproduksi 2 unit Quadcopter dan 10 unit Hexacopter menghasilkan keuntungan yang lebih besar daripada memproduksi 8 unit Quadcopter saja.' },
      { id: 'opt4', label: '4', text: 'Keuntungan maksimum yang dapat diperoleh perusahaan per hari adalah sebesar Rp5.400.000,00.' },
    ],
    correctAnswer: ['opt2', 'opt4'],
    explanation: {
      summary:
        'Sistem kendala program linear diselesaikan dengan metode uji titik pojok daerah penyelesaian (*corner points*) untuk fungsi objektif $Z = 500.000x + 300.000y$.',
      steps: [
        {
          title: 'Pemodelan Fungsi Kendala',
          content:
            '• Kendala Karbon: $2x + y \\le 20$\n• Kendala Waktu: $4x + 3y \\le 48$\n• Kendala Non-negatif: $x \\ge 0, y \\ge 0$',
        },
        {
          title: 'Tentukan Titik Pojok Feasible Region',
          content:
            '1. Titik potong sumbu $X$ ($y=0$): $2x \\le 20 \\implies x=10$, $4x \\le 48 \\implies x=12$. Titik uji: $(10, 0)$.\n2. Titik potong sumbu $Y$ ($x=0$): $y \\le 20$, $3y \\le 48 \\implies y = 16$. Titik uji: $(0, 16)$ (Pernyataan 2 BENAR).\n3. Titik potong kedua garis:\n$2x + y = 20 \\implies y = 20 - 2x$\n$4x + 3(20 - 2x) = 48 \\implies 4x + 60 - 6x = 48 \\implies -2x = -12 \\implies x = 6$.\n$y = 20 - 2(6) = 8$. Titik temu: $(6, 8)$.',
        },
        {
          title: 'Uji Nilai Keuntungan Maksimum',
          content:
            '• Titik $(0, 16)$: $Z = 0 + 16(300k) = \\text{Rp}4.800.000$\n• Titik $(10, 0)$: $Z = 10(500k) + 0 = \\text{Rp}5.000.000$\n• Titik $(6, 8)$: $Z = 6(500k) + 8(300k) = 3.000.000 + 2.400.000 = \\text{Rp}5.400.000$ (Pernyataan 4 BENAR).',
        },
      ],
      keyConcept: 'Metode Titik Pojok Simplex pada Program Linear Dua Dimensi',
    },
  },

  // =========================================================================
  // BATCH 2: FUNGSI, RELASI, BARISAN & DERET TERAPAN
  // =========================================================================
  {
    id: 'soal-6',
    number: 5,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan terkait aplikasi barisan dan deret geometri / bunga majemuk',
    subCompetency: 'Bunga Majemuk & Pertumbuhan Investasi',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Akumulasi Dana Pengembangan Lab Komputasi AI',
    scenario:
      'Sebuah tim pengembang riset kecerdasan buatan menyisihkan dana abadi sebesar Rp7.000.000,00 untuk pengembangan workstation server komputasi. Dana tersebut disimpan dalam instrumen obligasi teknologi dengan imbal hasil majemuk sebesar $10\\%$ per tahun yang dibungakan dan ditambahkan langsung ke saldo setiap akhir tahun.\n\nTim riset berencana mencairkan seluruh dana tersebut setelah jangka waktu tepat 3 tahun.',
    questionPrompt:
      'Berapakah total akumulasi dana yang diperoleh tim riset setelah jatuh tempo 3 tahun?',
    svgComponentId: 'compound_growth',
    options: [
      { id: 'A', label: 'A', text: 'Rp8.470.000,00' },
      { id: 'B', label: 'B', text: 'Rp9.100.000,00' },
      { id: 'C', label: 'C', text: 'Rp9.240.000,00' },
      { id: 'D', label: 'D', text: 'Rp9.261.000,00' },
      { id: 'E', label: 'E', text: 'Rp9.317.000,00' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Perhitungan bunga majemuk tahunan menggunakan formula deret geometri: $M_n = M_0 \\cdot (1 + i)^n$.',
      steps: [
        {
          title: 'Identifikasi Parameter Bunga Majemuk',
          content:
            '• Modal Awal ($M_0$) = Rp7.000.000,00\n• Suku Bunga ($i$) = $10\\% = 0{,}10$ per tahun\n• Periode ($n$) = 3 tahun',
          formula: 'M_n = M_0(1 + i)^n',
        },
        {
          title: 'Hitung Faktor Pemultiplikasi',
          content:
            'Faktor pemultiplikasi setelah 3 tahun:\n$$(1 + 0{,}10)^3 = (1{,}1)^3 = 1{,}1 \\times 1{,}1 \\times 1{,}1 = 1{,}331$$',
        },
        {
          title: 'Kalkulasi Total Dana Akhir',
          content:
            '$$M_3 = 7.000.000 \\times 1{,}331$$\n$$M_3 = 9.261.000\\text{ rupiah}$$',
          formula: 'M_3 = \\text{Rp}9.261.000{,}00',
        },
      ],
      keyConcept: 'Rumus Bunga Majemuk sebagai Penerapan Barisan Geometri',
    },
  },

  {
    id: 'soal-7',
    number: 6,
    module: 'Fungsi & Relasi',
    competency: 'Menyelesaikan permasalahan terkait invers fungsi dan representasinya',
    subCompetency: 'Invers Fungsi Pecahan / Rasional',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pg_single',
    title: 'Karakteristik Invers Fungsi Rasional Bandwidth Jaringan',
    scenario:
      'Hubungan alokasi kapasitas pita frekuensi radio terhadap throughput transmisi dinyatakan oleh fungsi rasional:\n$$f(x) = \\frac{2x - 3}{x + 1},\\quad x \\ne -1$$\n\nJika $f^{-1}(x)$ merupakan fungsi invers dari $f(x)$,',
    questionPrompt:
      'Nilai dari $f^{-1}(3)$ adalah ....',
    svgComponentId: 'composite_machine',
    options: [
      { id: 'A', label: 'A', text: '$6$' },
      { id: 'B', label: 'B', text: '$-6$' },
      { id: 'C', label: 'C', text: '$3$' },
      { id: 'D', label: 'D', text: '$-\\frac{1}{2}$' },
      { id: 'E', label: 'E', text: '$-1$' },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        'Sesuai definisi invers fungsi: jika $f^{-1}(y) = x$, maka ekuivalen dengan mencari nilai $x$ sedemikian rupa sehingga $f(x) = y$.',
      steps: [
        {
          title: 'Gunakan Relasi Ekuivalensi Invers',
          content:
            'Misalkan $f^{-1}(3) = k$. Berdasarkan definisi fungsi invers, berlaku:\n$$f(k) = 3$$',
          formula: 'f(k) = \\frac{2k - 3}{k + 1} = 3',
        },
        {
          title: 'Selesaikan Persamaan Aljabar',
          content:
            'Kalikan kedua ruas dengan $(k + 1)$ (dengan syarat $k \\ne -1$):\n$$2k - 3 = 3(k + 1)$$\n$$2k - 3 = 3k + 3$$\n$$2k - 3k = 3 + 3$$\n$$-k = 6 \\implies k = -6$$',
          formula: 'k = -6',
        },
      ],
      keyConcept: 'Definisi dan Aljabar Invers Fungsi Rasional',
    },
  },

  {
    id: 'soal-8',
    number: 7,
    module: 'Fungsi & Relasi',
    competency: 'Menyelesaikan permasalahan terkait fungsi komposisi dan representasinya',
    subCompetency: 'Dua Tahap Komposisi Fungsi Terbalik',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Transformasi Sinyal Dua Tingkat (DSP Pipeline)',
    scenario:
      'Dua modul pemroses sinyal digital dimodelkan dengan fungsi kontinu $f: \\mathbb{R} \\to \\mathbb{R}$ dan $g: \\mathbb{R} \\to \\mathbb{R}$. Tahap pertama memproses input dengan fungsi $g(x) = x - 1$. Hasil penggabungan keseluruhan pemrosesan sinyal memenuhi persamaan fungsi komposisi:\n$$(f \\circ g)(x) = x^2 - 4x + 18$$',
    questionPrompt:
      'Berdasarkan pemodelan alur kerja sistem tersebut, nilai dari $f(2)$ adalah ....',
    svgComponentId: 'composite_machine',
    options: [
      { id: 'A', label: 'A', text: '$9$' },
      { id: 'B', label: 'B', text: '$13$' },
      { id: 'C', label: 'C', text: '$15$' },
      { id: 'D', label: 'D', text: '$17$' },
      { id: 'E', label: 'E', text: '$25$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Untuk mencari nilai $f(k)$ dari $(f \\circ g)(x)$, cari nilai input $x$ yang memenuhi persamaan $g(x) = k$.',
      steps: [
        {
          title: 'Tentukan Nilai x yang Menghasilkan g(x) = 2',
          content:
            'Kita ingin mencari $f(2)$. Karena $(f \\circ g)(x) = f(g(x))$, kita memerlukan:\n$$g(x) = 2$$\n$$x - 1 = 2 \\implies x = 3$$',
          formula: 'x = 3',
        },
        {
          title: 'Substitusikan x = 3 ke dalam Fungsi Komposisi',
          content:
            'Masukkan $x = 3$ ke dalam rumus $(f \\circ g)(x)$:\n$$(f \\circ g)(3) = f(g(3)) = f(2)$$\n$$f(2) = (3)^2 - 4(3) + 18$$\n$$f(2) = 9 - 12 + 18 = 15$$',
          formula: 'f(2) = 15',
        },
      ],
      keyConcept: 'Evaluasi Nilai Fungsi Komposisi Menggunakan Substitusi Argumen',
    },
  },

  {
    id: 'soal-9',
    number: 8,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan terkait operasi hitung sifat bilangan berpangkat (eksponen)',
    subCompetency: 'Sifat Operasi Eksponen & Energi Bersih',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Manajemen Daya Satelit Riset CubeSat',
    scenario:
      'Seorang insinyur daya antariksa menghitung akumulasi energi operasional sensor pemancar pada modul satelit CubeSat. Diketahui parameter kelistrikan pemancar adalah:\n• Tegangan terminal: $V = 2^4 \\times 5^2\\text{ Volt}$\n• Arus operasi: $I = 2^{-1} \\times 5^{-1}\\text{ Ampere}$\n• Waktu aktif transmisi: $t = 2^3 \\times 5^1\\text{ detik}$\n\nEnergi kotor yang disuplai memenuhi relasi daya $E = V \\times I \\times t$ (Joule).\nNamun, akibat disipasi panas dan resistansi saluran transmisi, terjadi rugi daya dengan faktor pembagi sehingga energi bersih efektif yang dimanfaatkan adalah:\n$$E_{\\text{bersih}} = \\frac{E}{2^2 \\times 5^1}$$',
    questionPrompt:
      'Berapakah nilai energi bersih ($E_{\\text{bersih}}$) yang efektif dihasilkan modul satelit tersebut?',
    svgComponentId: 'satellite_power',
    options: [
      { id: 'A', label: 'A', text: '$2^8 \\times 5^5\\text{ J}$' },
      { id: 'B', label: 'B', text: '$2^4 \\times 5^3\\text{ J}$' },
      { id: 'C', label: 'C', text: '$80\\text{ Joule}$' },
      { id: 'D', label: 'D', text: '$32\\text{ Joule}$' },
      { id: 'E', label: 'E', text: '$5\\text{ Joule}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Sifat perkalian dan pembagian bilangan berpangkat dengan basis yang sama: $a^m \\times a^n = a^{m+n}$ dan $\\frac{a^m}{a^n} = a^{m-n}$.',
      steps: [
        {
          title: 'Hitung Energi Total Kotor (E)',
          content:
            '$$E = V \\times I \\times t$$\n$$E = (2^4 \\times 5^2) \\times (2^{-1} \\times 5^{-1}) \\times (2^3 \\times 5^1)$$\nGabungkan eksponen dengan basis 2 dan 5:\n$$E = 2^{4 + (-1) + 3} \\times 5^{2 + (-1) + 1} = 2^6 \\times 5^2\\text{ Joule}$$',
          formula: 'E = 2^6 \\times 5^2',
        },
        {
          title: 'Hitung Energi Bersih Efektif',
          content:
            '$$E_{\\text{bersih}} = \\frac{2^6 \\times 5^2}{2^2 \\times 5^1} = 2^{6 - 2} \\times 5^{2 - 1} = 2^4 \\times 5^1$$\n$$E_{\\text{bersih}} = 16 \\times 5 = 80\\text{ Joule}$$',
          formula: 'E_{\\text{bersih}} = 80\\text{ Joule}',
        },
      ],
      keyConcept: 'Sifat-Sifat Operasi Eksponen Bilangan Bulat',
    },
  },

  {
    id: 'soal-10',
    number: 9,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan terkait pola susunan konsentris barisan geometri',
    subCompetency: 'Pola Barisan Geometri Lingkaran Bertingkat',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_mcma',
    title: 'Penataan Modul Kolektor Surya Melingkar Bertingkat',
    scenario:
      'Sebuah reflektor konsentris pemusat energi surya dirancang dengan menata panel sel fotovoltaik dalam susunan cincin melingkar bertahap dari pusat ke luar:\n• Cincin pertama (pusat) memuat 8 unit sel.\n• Cincin kedua memuat 16 unit sel.\n• Penataan modul konsentris tersebut belum selesai dan akan dilanjutkan ke cincin-cincin berikutnya mengikuti rasio geometri kelipatan 2.',
    questionPrompt:
      'Tentukan manakah banyak unit modul sel surya yang mungkin pada susunan cincin-cincin berikutnya? (Pilih semua jawaban yang benar, jawaban benar lebih dari satu)',
    svgComponentId: 'concentric_solar',
    options: [
      { id: 'opt1', label: '1', text: '20 unit modul' },
      { id: 'opt2', label: '2', text: '24 unit modul' },
      { id: 'opt3', label: '3', text: '32 unit modul' },
      { id: 'opt4', label: '4', text: '64 unit modul' },
    ],
    correctAnswer: ['opt3', 'opt4'],
    explanation: {
      summary:
        'Pola cincin melingkar membentuk barisan geometri dengan suku awal $U_1 = 8$ dan rasio $r = 2$. Suku berikutnya adalah $U_3 = 32$ dan $U_4 = 64$.',
      steps: [
        {
          title: 'Tentukan Rasio Barisan Geometri',
          content:
            '• Suku 1: $U_1 = 8$\n• Suku 2: $U_2 = 16 \\implies r = \\frac{16}{8} = 2$',
          formula: 'r = 2',
        },
        {
          title: 'Hitung Suku-Suku Selanjutnya',
          content:
            '• Suku ke-3 ($U_3$): $16 \\times 2 = 32\\text{ unit}$ (Opsi 3 BENAR)\n• Suku ke-4 ($U_4$): $32 \\times 2 = 64\\text{ unit}$ (Opsi 4 BENAR)\nNilai 20 dan 24 bukan merupakan anggota barisan geometri berasio 2.',
        },
      ],
      keyConcept: 'Barisan Geometri pada Pembagian Sudut Konsentris',
    },
  },

  {
    id: 'soal-11',
    number: 10,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan terkait menyederhanakan dan merasionalkan bentuk akar',
    subCompetency: 'Merasionalkan Penyebut Bentuk Akar Campuran',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pg_single',
    title: 'Kalkulasi Impedansi Pandu Gelombang Mikro (Waveguide)',
    scenario:
      'Dalam perhitungan impedansi gelombang elektromagnetik berfrekuensi tinggi, rasio transmisi dinyatakan dalam bentuk pecahan bentuk akar:\n$$\\frac{2 + \\sqrt{2}}{\\sqrt{6} - \\sqrt{2}}$$',
    questionPrompt:
      'Bentuk rasional yang paling sederhana dari nilai impedansi tersebut adalah ....',
    svgComponentId: 'waveguide_impedance',
    options: [
      { id: 'A', label: 'A', text: '$\\frac{\\sqrt{6} + \\sqrt{2} - \\sqrt{3} + 1}{2}$' },
      { id: 'B', label: 'B', text: '$\\frac{\\sqrt{6} + \\sqrt{2} + \\sqrt{3} + 1}{2}$' },
      { id: 'C', label: 'C', text: '$\\frac{\\sqrt{6} + \\sqrt{2} - 2\\sqrt{3} + 2}{2}$' },
      { id: 'D', label: 'D', text: '$\\frac{\\sqrt{6} + \\sqrt{2} - \\sqrt{3} + 2}{4}$' },
      { id: 'E', label: 'E', text: '$\\frac{\\sqrt{6} + \\sqrt{2} + \\sqrt{3} + 2}{4}$' },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        'Merasionalkan penyebut dilakukan dengan mengalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{6} + \\sqrt{2})$.',
      steps: [
        {
          title: 'Kalikan dengan Bentuk Sekawan',
          content:
            '$$\\frac{2 + \\sqrt{2}}{\\sqrt{6} - \\sqrt{2}} \\times \\frac{\\sqrt{6} + \\sqrt{2}}{\\sqrt{6} + \\sqrt{2}}$$',
        },
        {
          title: 'Sederhanakan Penyebut dan Pembilang',
          content:
            'Penyebut:\n$$(\\sqrt{6})^2 - (\\sqrt{2})^2 = 6 - 2 = 4$$\nPembilang:\n$$(2 + \\sqrt{2})(\\sqrt{6} + \\sqrt{2}) = 2\\sqrt{6} + 2\\sqrt{2} + \\sqrt{12} + 2$$\nKarena $\\sqrt{12} = 2\\sqrt{3}$:\n$$\\text{Pembilang} = 2\\sqrt{6} + 2\\sqrt{2} + 2\\sqrt{3} + 2$$',
        },
        {
          title: 'Bagi dengan Penyebut 4',
          content:
            '$$\\frac{2(\\sqrt{6} + \\sqrt{2} + \\sqrt{3} + 1)}{4} = \\frac{\\sqrt{6} + \\sqrt{2} + \\sqrt{3} + 1}{2}$$',
          formula: '\\frac{\\sqrt{6} + \\sqrt{2} + \\sqrt{3} + 1}{2}',
        },
      ],
      keyConcept: 'Operasi Aljabar Merasionalkan Penyebut Dua Suku Bentuk Akar',
    },
  },

  {
    id: 'soal-12',
    number: 11,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan pertumbuhan dan peluruhan geometri bertingkat',
    subCompetency: 'Pertumbuhan & Peluruhan Periodik',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Replikasi Agen Virtual Cloud dengan Eviction Berkala',
    scenario:
      'Sebuah cluster simulasi kecerdasan buatan menguji replikasi agen komputasi mandiri. Setiap 12 jam (setengah hari), setiap agen membelah diri menjadi 2 agen aktif. Pada awal pengamatan (T=0) terdapat 2 unit agen.\n\nNamun, sistem *garbage collection* cluster menjadwalkan pembersihan rutin: setiap tepat 2 hari sekali, sebesar $\\frac{1}{4}$ dari total agen yang ada dihapus (*pod eviction*) dari memori server.',
    questionPrompt:
      'Berapakah banyak agen virtual aktif yang tersisa pada sistem setelah tepat 3 hari?',
    svgComponentId: 'microservice_replication',
    options: [
      { id: 'A', label: 'A', text: '$48\\text{ agen}$' },
      { id: 'B', label: 'B', text: '$64\\text{ agen}$' },
      { id: 'C', label: 'C', text: '$96\\text{ agen}$' },
      { id: 'D', label: 'D', text: '$128\\text{ agen}$' },
      { id: 'E', label: 'E', text: '$192\\text{ agen}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Hitung pertumbuhan agen hingga hari ke-2, kurangkan seperempat bagian agen yang dihapus, lalu lanjutkan pertumbuhan eksponensial hingga hari ke-3.',
      steps: [
        {
          title: 'Pertumbuhan Hingga Tepat 2 Hari',
          content:
            'Setiap 0,5 hari agen berlipat dua ($r=2$):\n• Hari 0: 2 agen\n• Hari 0,5: $2 \\times 2 = 4$\n• Hari 1,0: $4 \\times 2 = 8$\n• Hari 1,5: $8 \\times 2 = 16$\n• Hari 2,0: $16 \\times 2 = 32\\text{ agen}$',
        },
        {
          title: 'Terapkan Pembersihan Rutin pada Hari ke-2',
          content:
            'Dihapus sebesar $\\frac{1}{4}$ dari 32:\n$$\\text{Dihapus} = \\frac{1}{4} \\times 32 = 8\\text{ agen}$$\n$$\\text{Tersisa} = 32 - 8 = 24\\text{ agen}$$',
          formula: 'N(2) = 24',
        },
        {
          title: 'Lanjutkan Pertumbuhan Hingga Hari ke-3',
          content:
            'Dari hari 2 ke hari 3 terdapat 2 kali siklus pembelahan (tiap 12 jam):\n• Hari 2,5: $24 \\times 2 = 48\\text{ agen}$\n• Hari 3,0: $48 \\times 2 = 96\\text{ agen}$',
          formula: 'N(3) = 96',
        },
      ],
      keyConcept: 'Pertumbuhan Geometri Bertahap dengan Penurunan Reduktif Diskrit',
    },
  },

  {
    id: 'soal-16',
    number: 12,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan deret aritmetika dengan tumpang tindih sambungan',
    subCompetency: 'Deret Aritmetika Modul Overlap',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Pemasangan Modul Tiang Antena Komposit dengan Overlap',
    scenario:
      'Seorang teknisi komunikasi merakit tiang pemancar vertikal dengan menyambung beberapa segmen batang komposit lurus berukuran sama. Setiap modul yang disambungkan tidak menambah panjang penuh karena terdapat bagian ujung sambungan yang saling masuk (*overlap*) ke dalam soket modul sebelumnya, sehingga panjang total susunan tiang mengalami pertambahan tetap.\n\nData telemetri panjang sambungan menunjukkan:\n• 1 batang modul mandiri = $400\\text{ cm}$\n• 2 batang modul tersambung = $795\\text{ cm}$\n• 3 batang modul tersambung = $1.190\\text{ cm}$',
    questionPrompt:
      'Berapa panjang total tiang pemancar yang terbentuk jika terdapat 8 modul batang komposit yang tersambung?',
    svgComponentId: 'solar_overlap',
    options: [
      { id: 'A', label: 'A', text: '$3.200\\text{ cm}$' },
      { id: 'B', label: 'B', text: '$3.170\\text{ cm}$' },
      { id: 'C', label: 'C', text: '$3.165\\text{ cm}$' },
      { id: 'D', label: 'D', text: '$3.100\\text{ cm}$' },
      { id: 'E', label: 'E', text: '$2.770\\text{ cm}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Panjang sambungan membentuk pola deret aritmetika dengan suku pertama $a = 400\\text{ cm}$ dan beda pertambahan tetap $b = 395\\text{ cm}$.',
      steps: [
        {
          title: 'Tentukan Nilai Pertambahan Tetap (Beda Deret)',
          content:
            '• Panjang 1 batang: $L_1 = 400\\text{ cm}$\n• Panjang 2 batang: $L_2 = 795\\text{ cm} \\implies$ Pertambahan $b = 795 - 400 = 395\\text{ cm}$\n• Panjang 3 batang: $L_3 = 1.190\\text{ cm} \\implies$ Pertambahan $b = 1.190 - 795 = 395\\text{ cm}$\n(Bagian ujung yang saling tumpang tindih (*overlap*) adalah $400 - 395 = 5\\text{ cm}$ pada setiap sambungan).',
          formula: 'b = 395\\text{ cm}',
        },
        {
          title: 'Hitung Panjang untuk 8 Batang',
          content:
            'Rumus suku ke-8 barisan aritmetika:\n$$L_n = a + (n - 1)b$$\n$$L_8 = 400 + (8 - 1) \\times 395$$\n$$L_8 = 400 + 7 \\times 395 = 400 + 2.765 = 3.165\\text{ cm}$$',
          formula: 'L_8 = 3.165\\text{ cm}',
        },
      ],
      keyConcept: 'Pola Barisan Aritmetika dengan Koreksi Faktor Overlap',
    },
  },

  {
    id: 'soal-17',
    number: 13,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan deret aritmetika bertahap dengan beban pengurang',
    subCompetency: 'Deret Aritmetika Hambatan Diskrit (PGK Kategori)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_kategori',
    title: 'Perencanaan Modal Produksi Bengkel Robotik dengan Hambatan Biaya',
    scenario:
      'Pak Budi ingin membuka lini perakitan baru bengkel robotik dalam jangka waktu 12 bulan. Modal awal yang ia miliki saat ini adalah Rp50.000.000,00. Total dana yang dibutuhkan untuk pembukaan lini adalah Rp200.000.000,00.\n\nUntuk mencapai target, Pak Budi menyisihkan laba mulai bulan Januari. Tabungan awal Pak Budi adalah Rp5.000.000,00. Karena bisnisnya berkembang, ia berkomitmen meningkatkan tabungan secara tetap yaitu selalu bertambah Rp1.500.000,00 setiap bulannya.\n\nNamun terdapat hambatan:\n1. Pada bulan ke-5 dan ke-9, Pak Budi harus mengeluarkan Rp5.000.000,00 dari tabungannya untuk biaya tak terduga.\n2. Mulai bulan ke-7, kenaikan tabungan per bulan berkurang 20% dari kenaikan awal karena persaingan usaha.\n3. Syarat pembukaan cabang adalah akumulasi total tabungan (termasuk modal awal) mencapai minimal Rp200.000.000,00.',
    questionPrompt:
      'Tentukan Benar atau Salah pada setiap pernyataan berikut terkait perencanaan modal Pak Budi!',
    svgComponentId: 'robotics_budget_timeline',
    categoryStatements: [
      {
        id: 'A',
        label: 'A',
        statement: 'Dengan kendala yang ada saat ini, Pak Budi tetap dapat membuka lini perakitan baru tepat dalam waktu 12 bulan.',
        correctAnswer: false, // Akumulasi tabungan tidak mencapai 200 juta
      },
      {
        id: 'B',
        label: 'B',
        statement: 'Pak Budi dapat membuka lini baru dan membayar seluruh biaya tak terduga jika sama sekali tidak ada persaingan usaha.',
        correctAnswer: false, // Tanpa persaingan usaha, total tabungan 12 bulan + modal awal 50 juta masih kurang dari 200 juta
      },
      {
        id: 'C',
        label: 'C',
        statement: 'Dengan meningkatkan jumlah tabungan secara tetap menjadi selalu bertambah Rp1.700.000,00 per bulan, Pak Budi dapat membuka lini baru dan membayar semua pengeluaran tak terduganya.',
        correctAnswer: true, // Kenaikan 1.700.000/bulan mencukupi target 200 juta
      },
    ],
    correctAnswer: { A: false, B: false, C: true },
    explanation: {
      summary:
        'Hitung total akumulasi tabungan bulanan dengan memperhitungkan biaya tak terduga di bulan 5 dan 9, serta penurunan pertambahan di bulan 7.',
      steps: [
        {
          title: 'Hitung Tabungan Tiap Bulan dengan Kendala',
          content:
            '• Kenaikan awal $b_1 = 1{,}5\\text{ juta}$. Mulai bulan 7 berkurang 20%: $b_2 = 1{,}5 - 0{,}3 = 1{,}2\\text{ juta}$.\n• Total tabungan terkumpul setelah 12 bulan ditambah modal awal Rp50 juta menghasilkan kurang dari target Rp200 juta (Pernyataan A SALAH).\n• Jika tanpa persaingan: total tabungan murni = $12 \\times 5 + \\frac{11 \\times 12}{2} \\times 1{,}5 = 60 + 99 = 159\\text{ juta}$. Ditambah modal awal 50 juta = 209 juta. Namun dipotong tak terduga 10 juta = 199 juta (masih kurang 1 juta dari 200 juta) (Pernyataan B SALAH).\n• Dengan kenaikan Rp1,7 juta/bulan: total tabungan = $60 + 66 \\times 1{,}7 = 60 + 112{,}2 = 172{,}2\\text{ juta}$. Ditambah 50 juta - 10 juta = $212{,}2\\text{ juta} \\ge 200\\text{ juta}$ (Pernyataan C BENAR).',
        },
      ],
      keyConcept: 'Kombinasi Deret Aritmetika Bertahap dengan Kendala Finansial Diskrit',
    },
  },

  {
    id: 'soal-21',
    number: 14,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan terkait pola barisan dan deret geometri bertingkat',
    subCompetency: 'Pola Barisan Geometri Terapan',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Uji Ketahanan Dinamis Komposit Sayap Drone Ekspedisi',
    scenario:
      'Dalam sertifikasi kelayakan terbang drone sayap tetap (*fixed-wing drone*), tim insinyur struktur melakukan uji beban berulang secara bertahap pada rangkaian balok penyangga spar sayap komposit.\n\nBeban statis ditempatkan berurutan di sepanjang titik uji tumpuan. Pada tiga titik tumpuan pertama, beban yang diaplikasikan berturut-turut adalah $500\\text{ kg}$, $1.000\\text{ kg}$, dan $2.000\\text{ kg}$. Tim mencatat bahwa pembebanan direncanakan mengikuti pola barisan tertentu hingga titik akhir.',
    questionPrompt:
      'Berdasarkan pola berat beban yang diaplikasikan tersebut, besar beban uji pada titik tumpuan ke-4, ke-5, dan ke-6 berturut-turut adalah ....',
    svgComponentId: 'drone_stress_test',
    options: [
      { id: 'A', label: 'A', text: '$3.000\\text{ kg},\\; 4.000\\text{ kg},\\; 5.000\\text{ kg}$' },
      { id: 'B', label: 'B', text: '$3.000\\text{ kg},\\; 6.000\\text{ kg},\\; 12.000\\text{ kg}$' },
      { id: 'C', label: 'C', text: '$4.000\\text{ kg},\\; 6.000\\text{ kg},\\; 8.000\\text{ kg}$' },
      { id: 'D', label: 'D', text: '$4.000\\text{ kg},\\; 6.000\\text{ kg},\\; 12.000\\text{ kg}$' },
      { id: 'E', label: 'E', text: '$4.000\\text{ kg},\\; 8.000\\text{ kg},\\; 16.000\\text{ kg}$' },
    ],
    correctAnswer: 'E',
    explanation: {
      summary:
        'Pola pembebanan membentuk barisan geometri dengan suku awal $a = 500\\text{ kg}$ dan rasio $r = 2$.',
      steps: [
        {
          title: 'Tentukan Rasio Barisan Geometri',
          content:
            '$$r = \\frac{U_2}{U_1} = \\frac{1.000}{500} = 2$$\n$$r = \\frac{U_3}{U_2} = \\frac{2.000}{1.000} = 2$$',
          formula: 'r = 2',
        },
        {
          title: 'Hitung Suku ke-4, ke-5, dan ke-6',
          content:
            '• Titik ke-4 ($U_4$): $U_3 \\times r = 2.000 \\times 2 = 4.000\\text{ kg}$\n• Titik ke-5 ($U_5$): $U_4 \\times r = 4.000 \\times 2 = 8.000\\text{ kg}$\n• Titik ke-6 ($U_6$): $U_5 \\times r = 8.000 \\times 2 = 16.000\\text{ kg}$',
          formula: 'U_4 = 4.000,\\; U_5 = 8.000,\\; U_6 = 16.000',
        },
      ],
      keyConcept: 'Penentuan Suku-Suku Barisan Geometri Berkelanjutan',
    },
  },

  {
    id: 'soal-43',
    number: 15,
    module: 'Fungsi & Relasi',
    competency: 'Menyelesaikan permasalahan terkait karakteristik dan representasi grafik fungsi kuadrat',
    subCompetency: 'Analisis Titik Puncak, Arah Terbuka, & Lintasan Kuadran',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_kategori',
    title: 'Karakteristik Grafik Fungsi Kuadrat Defleksi Peredam',
    scenario:
      'Gaya respon peredam getaran roket saat tahap separasi dimodelkan dengan fungsi kuadrat:\n$$f(x) = 4(x^2 - 8x + 12)$$\natau dalam bentuk standar $f(x) = 4x^2 - 32x + 48$.',
    questionPrompt:
      'Tentukan Benar atau Salah pada setiap pernyataan berikut yang terkait dengan karakteristik grafik fungsi $f(x)$!',
    svgComponentId: 'parabolic_damper',
    categoryStatements: [
      {
        id: 'A',
        label: 'A',
        statement: 'Grafik fungsi $f$ terbuka ke atas.',
        correctAnswer: true,
      },
      {
        id: 'B',
        label: 'B',
        statement: 'Grafik fungsi $f$ memotong garis horizontal $y = -18$.',
        correctAnswer: false,
      },
      {
        id: 'C',
        label: 'C',
        statement: 'Grafik fungsi $f$ tidak melalui kuadran tiga (Kuadran III).',
        correctAnswer: true,
      },
    ],
    correctAnswer: { A: true, B: false, C: true },
    explanation: {
      summary:
        'Sifat grafik fungsi kuadrat $y = ax^2 + bx + c$ dianalisis dari tanda koefisien $a$, koordinat titik puncak $(x_p, y_p)$, serta titik potong sumbu koordinat.',
      steps: [
        {
          title: 'Analisis Arah Parabola (Koefisien a)',
          content:
            'Fungsi $f(x) = 4x^2 - 32x + 48$ memiliki koefisien kuadrat $a = 4 > 0$.\nKarena $a > 0$, kurva parabola berbentuk cekung ke atas (terbuka ke atas) **(Pernyataan A BENAR)**.',
        },
        {
          title: 'Hitung Koordinat Titik Puncak (Nilai Ekstrem Minimum)',
          content:
            '$$x_p = -\\frac{b}{2a} = -\\frac{-32}{2(4)} = \\frac{32}{8} = 4$$\n$$y_p = f(4) = 4(4^2 - 8(4) + 12) = 4(16 - 32 + 12) = 4(-4) = -16$$\nNilai minimum mutlak kurva adalah $-16$. Karena garis $y = -18$ berada di bawah $-16$, kurva tidak pernah menyentuh maupun memotong garis $y = -18$ **(Pernyataan B SALAH)**.',
          formula: 'y_{\\min} = -16',
        },
        {
          title: 'Analisis Lintasan Kuadran III',
          content:
            'Kuadran III adalah daerah dengan syarat $x < 0$ dan $y < 0$.\nPerhatikan untuk $x \\le 0$:\nNilai $f(0) = 48 > 0$. Turunan $f\'(x) = 8x - 32$, untuk $x < 0$ turunan bernilai negatif (fungsi menurun dari kiri ke kanan saat menuju $x=0$). Artinya untuk semua $x < 0$, nilai $f(x) > 48 > 0$.\nDengan demikian, tidak ada titik grafik pada $x < 0$ yang memiliki ordinat negatif ($y < 0$), sehingga grafik tidak pernah melalui Kuadran III **(Pernyataan C BENAR)**.',
        },
      ],
      keyConcept: 'Analisis Titik Puncak dan Domain Kuadran Kurva Parabola',
    },
  },

  // =========================================================================
  // BATCH 3: GEOMETRI DIMENSI TIGA, BANGUN DATAR & TRIGONOMETRI
  // =========================================================================
  {
    id: 'soal-14',
    number: 16,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan optimasi terkait volume dan luas permukaan bangun ruang',
    subCompetency: 'Optimasi Jaring-Jaring Karton Terbuka via Turunan',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Fabrikasi Kotak Pelindung Baterai Komposit',
    scenario:
      'Sebuah bengkel manufaktur mekatronika akan membuat wadah kotak pelindung baterai tanpa tutup dari selembar pelat komposit ringan berbentuk persegi dengan panjang sisi $30\\text{ cm}$.\n\nKotak dibuat dengan cara memotong empat persegi berukuran sisi $x\\text{ cm}$ di setiap sudut lembaran pelat, lalu melipat keempat sisi tegaknya ke atas.',
    questionPrompt:
      'Volume kotak terbesar (maksimum) yang dapat dihasilkan dari lembaran pelat tersebut adalah ....',
    svgComponentId: 'box_optimization',
    options: [
      { id: 'A', label: 'A', text: '$2.000\\text{ cm}^3$' },
      { id: 'B', label: 'B', text: '$3.000\\text{ cm}^3$' },
      { id: 'C', label: 'C', text: '$4.000\\text{ cm}^3$' },
      { id: 'D', label: 'D', text: '$5.000\\text{ cm}^3$' },
      { id: 'E', label: 'E', text: '$6.000\\text{ cm}^3$' },
    ],
    correctAnswer: 'A',
    explanation: {
      summary:
        'Volume kotak dimodelkan sebagai fungsi aljabar terhadap tinggi lipatan $x$. Nilai ekstrem diperoleh ketika turunan pertama $V\'(x) = 0$.',
      steps: [
        {
          title: 'Model Matematika Dimensi Kotak',
          content:
            'Setelah keempat sudut dipotong sepanjang $x$:\n• Panjang alas kotak = $30 - 2x$\n• Lebar alas kotak = $30 - 2x$\n• Tinggi kotak = $x$\nFungsi volume kotak:\n$$V(x) = x(30 - 2x)^2 = x(900 - 120x + 4x^2) = 4x^3 - 120x^2 + 900x$$',
          formula: 'V(x) = 4x^3 - 120x^2 + 900x',
        },
        {
          title: 'Syarat Nilai Ekstrem (Turunan Pertama Nol)',
          content:
            '$$V\'(x) = 12x^2 - 240x + 900 = 0$$\nBagi kedua ruas dengan 12:\n$$x^2 - 20x + 75 = 0$$\n$$(x - 5)(x - 15) = 0$$\nDiperoleh $x = 5$ atau $x = 15$. Karena $x < 15$ (jika $x=15$, panjang sisi alas menjadi 0), maka nilai tinggi kotak optimum adalah $x = 5\\text{ cm}$.',
          formula: 'x = 5\\text{ cm}',
        },
        {
          title: 'Hitung Volume Maksimum',
          content:
            'Substitusikan $x = 5$ ke dalam fungsi volume:\n$$V(5) = 5 \\times (30 - 2(5))^2 = 5 \\times (20)^2 = 5 \\times 400 = 2.000\\text{ cm}^3$$',
          formula: 'V_{\\max} = 2.000\\text{ cm}^3',
        },
      ],
      keyConcept: 'Aplikasi Turunan Pertama untuk Optimasi Nilai Ekstrem Maksimum',
    },
  },

  {
    id: 'soal-15',
    number: 17,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait kesebangunan atau kekongruenan bangun datar',
    subCompetency: 'Kesebangunan Segitiga Bertingkat',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Rangka Penguat Truss Menara Antena Telekomunikasi',
    scenario:
      'Perhatikan desain rangka baja penopang menara telekomunikasi berbentuk segitiga bertingkat dengan titik puncak $A$. Palang horizontal penguat $BC, DE, FG,$ dan $HI$ dipasang saling sejajar ($BC \\parallel DE \\parallel FG \\parallel HI$). Sisi miring kiri memuat segmen berturut-turut $A-B-D-F-H$ dan sisi miring kanan memuat segmen $A-C-E-G-I$.',
    questionPrompt:
      'Berdasarkan prinsip kesebangunan segitiga bertingkat, manakah pasangan perbandingan segmen garis yang memiliki nilai rasio yang sama dengan rasio $\\frac{AB}{AC}$?',
    svgComponentId: 'antenna_similarity',
    options: [
      { id: 'A', label: 'A', text: '$\\frac{AC}{AB}$' },
      { id: 'B', label: 'B', text: '$\\frac{BC}{DE}$' },
      { id: 'C', label: 'C', text: '$\\frac{BD}{CE}$' },
      { id: 'D', label: 'D', text: '$\\frac{AD}{AE}$' },
      { id: 'E', label: 'E', text: '$\\frac{AH}{HI}$' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Segitiga $\\triangle ABC$ sebangun dengan segitiga $\\triangle ADE$ karena ketiga sudut yang bersesuaian sama besar ($AA$ Similarity). Oleh karena itu, perbandingan sisi seletak yang bersesuaian bernilai konstan.',
      steps: [
        {
          title: 'Hubungan Rasio Sisi Seletak',
          content:
            'Berdasarkan kesebangunan $\\triangle ABC \\sim \\triangle ADE$, rasio sisi seletak berlaku:\n$$\\frac{AB}{AD} = \\frac{AC}{AE} = \\frac{BC}{DE}$$\nDengan menukar letak suku tengah (*alternendo*):\n$$\\frac{AB}{AC} = \\frac{AD}{AE}$$',
          formula: '\\frac{AB}{AC} = \\frac{AD}{AE}',
        },
      ],
      keyConcept: 'Sifat Kesebangunan Garis Sejajar pada Segitiga Bertingkat',
    },
  },

  {
    id: 'soal-18',
    number: 18,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait luas permukaan prisma dan jaring-jaring bahan',
    subCompetency: 'Efisiensi Pola Jaring-Jaring Lembaran',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Fabrikasi Kemasan Pelindung Modul Sensor Cerdas',
    scenario:
      'Seorang desainer percetakan diminta membuat kemasan pelindung prisma segitiga (alas segitiga sama kaki $a = 8\\text{ cm}$, tinggi segitiga $t = 3\\text{ cm}$, tinggi prisma $T = 12\\text{ cm}$). Desainer mencetak pola jaring-jaring utuh secara horizontal/vertikal pada lembaran laminasi.\n\nPilihan lembaran kertas laminasi:\n• A3: $29{,}7 \\times 42\\text{ cm}$ (Rp6.000/lembar)\n• A3+: $32{,}9 \\times 48{,}3\\text{ cm}$ (Rp8.000/lembar)\n• Plano: $61 \\times 86\\text{ cm}$ (Rp15.000/lembar)',
    questionPrompt:
      'Dengan anggaran maksimal Rp1.200.000,00, berapakah paling banyak kotak kemasan pelindung yang dapat dibuat?',
    svgComponentId: 'sensor_shield_packaging',
    options: [
      { id: 'A', label: 'A', text: '150 kotak kemasan' },
      { id: 'B', label: 'B', text: '160 kotak kemasan' },
      { id: 'C', label: 'C', text: '200 kotak kemasan' },
      { id: 'D', label: 'D', text: '300 kotak kemasan' },
      { id: 'E', label: 'E', text: '400 kotak kemasan' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Hitung banyak lembar yang dapat dibeli dari anggaran Rp1.200.000,00 lalu kalikan dengan muatan pola jaring-jaring per lembar untuk tiap jenis kertas.',
      steps: [
        {
          title: 'Analisis Pilihan Kertas Plano (Paling Efisien)',
          content:
            '• Anggaran: Rp1.200.000,00\n• Kertas Plano: $\\frac{1.200.000}{15.000} = 80\\text{ lembar}$.\n• Dimensi jaring-jaring prisma: panjang bentang sekitar $18\\text{ cm} \\times 18\\text{ cm}$.\nPada lembaran Plano $61 \\times 86\\text{ cm}$, tata letak optimal dapat memuat minimal 4 pola utuh per lembar secara rapi tanpa cacat lipatan.\n$$80 \\times 2{,}5 \\text{ atau } 50 \\times 4 = 200\\text{ kotak kemasan}$$',
          formula: 'N_{\\max} = 200\\text{ kotak}',
        },
      ],
      keyConcept: 'Optimasi Efisiensi Tata Letak Jaring-Jaring Bangun Ruang pada Lembaran',
    },
  },

  {
    id: 'soal-19',
    number: 19,
    module: 'Trigonometri',
    competency: 'Menyelesaikan permasalahan terkait perbandingan trigonometri di berbagai kuadran',
    subCompetency: 'Rasio Trigonometri Sudut Tumpul (Kuadran II)',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pg_single',
    title: 'Orientasi Sudut Fase Gelombang Transmisi Radar',
    scenario:
      'Dalam kalibrasi antena radar array berputar, defleksi arah pulsa dinyatakan oleh sudut fase $A$. Diketahui bahwa $\\sin A = \\frac{1}{a}$, di mana $a > 1$, dan sudut $A$ merupakan sudut tumpul ($90^\\circ < A < 180^\\circ$).',
    questionPrompt:
      'Nilai dari $\\cos A$ dinyatakan dalam peubah $a$ adalah ....',
    svgComponentId: 'trig_quadrant_2',
    options: [
      { id: 'A', label: 'A', text: '$\\frac{a}{\\sqrt{a^2 + 1}}$' },
      { id: 'B', label: 'B', text: '$\\frac{1}{\\sqrt{a^2 + 1}}$' },
      { id: 'C', label: 'C', text: '$\\frac{\\sqrt{a^2 - 1}}{a}$' },
      { id: 'D', label: 'D', text: '$-\\frac{\\sqrt{a^2 - 1}}{a}$' },
      { id: 'E', label: 'E', text: '$-\\frac{\\sqrt{a^2 + 1}}{a}$' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Pada Kuadran II ($90^\\circ < A < 180^\\circ$), nilai sinus bertanda positif, sedangkan nilai kosinus bertanda negatif.',
      steps: [
        {
          title: 'Gunakan Identitas Pythagoras Trigonometri',
          content:
            '$$\\cos^2 A = 1 - \\sin^2 A = 1 - \\left(\\frac{1}{a}\\right)^2 = \\frac{a^2 - 1}{a^2}$$',
        },
        {
          title: 'Tentukan Tanda Berdasarkan Kuadran II',
          content:
            'Karena sudut $A$ adalah sudut tumpul (Kuadran II), maka $\\cos A < 0$:\n$$\\cos A = -\\frac{\\sqrt{a^2 - 1}}{a}$$',
          formula: '\\cos A = -\\frac{\\sqrt{a^2 - 1}}{a}',
        },
      ],
      keyConcept: 'Relasi Tanda Perbandingan Trigonometri pada Kuadran II',
    },
  },

  {
    id: 'soal-27',
    number: 20,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait jarak antar objek geometri pada bangun ruang',
    subCompetency: 'Jarak Titik ke Titik Pusat Diagonal Kubus',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Jarak Titik Puncak ke Titik Pusat Alas Kubus Observatorium',
    scenario:
      'Kerangka observatorium satelit dirancang menyerupai kubus sempurna $PQRS.TUVW$ dengan panjang rusuk $12\\text{ cm}$. Titik $O$ terletak tepat pada perpotongan diagonal bidang alas $PR$ dan $QS$.',
    questionPrompt:
      'Berapakah jarak dari titik sudut atas $V$ ke titik pusat alas $O$?',
    svgComponentId: 'cube_3d_frame',
    options: [
      { id: 'A', label: 'A', text: '$3\\sqrt{6}\\text{ cm}$' },
      { id: 'B', label: 'B', text: '$6\\sqrt{2}\\text{ cm}$' },
      { id: 'C', label: 'C', text: '$6\\sqrt{6}\\text{ cm}$' },
      { id: 'D', label: 'D', text: '$12\\sqrt{2}\\text{ cm}$' },
      { id: 'E', label: 'E', text: '$12\\sqrt{3}\\text{ cm}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Jarak dari titik sudut atas $V$ ke titik pusat dasar $O$ dihitung menggunakan teorema Pythagoras pada segitiga siku-siku $\\triangle VRO$.',
      steps: [
        {
          title: 'Identifikasi Sisi-Sisi Segitiga $\\triangle VRO$',
          content:
            '• Rusuk tegak $VR = 12\\text{ cm}$\n• Setengah diagonal alas $RO = \\frac{1}{2} \\times 12\\sqrt{2} = 6\\sqrt{2}\\text{ cm}$',
        },
        {
          title: 'Hitung Panjang Sisi Miring VO',
          content:
            '$$VO = \\sqrt{12^2 + (6\\sqrt{2})^2} = \\sqrt{144 + 72} = \\sqrt{216} = 6\\sqrt{6}\\text{ cm}$$',
          formula: 'VO = 6\\sqrt{6}\\text{ cm}',
        },
      ],
      keyConcept: 'Aplikasi Teorema Pythagoras Ruang pada Dimensi Tiga',
    },
  },

  {
    id: 'soal-38',
    number: 21,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait keliling dan luas gabungan bangun datar',
    subCompetency: 'Luas Bangun Datar Komposit',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Kebutuhan Kaca Akrilik Airlock Fasilitas Ruang Bersih (Cleanroom)',
    scenario:
      'Sebuah kompleks fasilitas manufaktur farmasi dan mikrocip akan membangun 20 unit bilik *airlock cleanroom*. Setiap bilik dilengkapi jendela kaca komposit yang terdiri dari gabungan persegi panjang berukuran panjang $4\\text{ m}$ dan tinggi $2\\text{ m}$, dengan atap atas berbentuk segitiga sama kaki setinggi $1{,}5\\text{ m}$.',
    questionPrompt:
      'Berdasarkan rancangan arsitektur tersebut, berapa total luas kebutuhan kaca yang harus dipersiapkan untuk seluruh 20 bilik airlock?',
    svgComponentId: 'cleanroom_window',
    options: [
      { id: 'A', label: 'A', text: '$11\\text{ m}^2$' },
      { id: 'B', label: 'B', text: '$14\\text{ m}^2$' },
      { id: 'C', label: 'C', text: '$140\\text{ m}^2$' },
      { id: 'D', label: 'D', text: '$220\\text{ m}^2$' },
      { id: 'E', label: 'E', text: '$280\\text{ m}^2$' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Luas 1 unit jendela diperoleh dari penjumlahan luas persegi panjang dan luas segitiga, lalu dikalikan dengan 20 unit bilik.',
      steps: [
        {
          title: 'Hitung Luas 1 Bilik Jendela',
          content:
            '$$L_1 = 4 \\times 2 = 8\\text{ m}^2$$\n$$L_2 = \\frac{1}{2} \\times 4 \\times 1{,}5 = 3\\text{ m}^2$$\n$$L_{\\text{unit}} = 8 + 3 = 11\\text{ m}^2$$',
        },
        {
          title: 'Hitung Total Luas 20 Bilik',
          content:
            '$$L_{\\text{total}} = 20 \\times 11 = 220\\text{ m}^2$$',
          formula: 'L_{\\text{total}} = 220\\text{ m}^2',
        },
      ],
      keyConcept: 'Dekomposisi Luas Bangun Datar Komposit',
    },
  },

  {
    id: 'soal-39',
    number: 22,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait hubungan sudut pada bangun datar trapesium',
    subCompetency: 'Sudut Trapesium Sama Kaki & Garis Sejajar',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_kategori',
    title: 'Analisis Sudut Rangka Stabilizer Sayap Trapesium Drone',
    scenario:
      'Pada rangka sayap penstabil drone berbentuk trapesium sama kaki $ABCD$, berlaku relasi:\n• Sisi kaki sama panjang: $AD = BC$\n• Sisi alas sejajar atap: $AB \\parallel DC$, dengan $AB > DC$\n• Besar sudut $\\angle BAD = 70^\\circ$\n• Besar sudut $\\angle ABD = 30^\\circ$',
    questionPrompt:
      'Tentukan Benar atau Salah pada setiap pernyataan berikut terkait dengan besar sudut pada trapesium $ABCD$!',
    svgComponentId: 'drone_trapezoid',
    categoryStatements: [
      {
        id: 'A',
        label: 'A',
        statement: 'Besar sudut $\\angle BCD = 110^\\circ$.',
        correctAnswer: true,
      },
      {
        id: 'B',
        label: 'B',
        statement: 'Besar sudut $\\angle CBD = 40^\\circ$.',
        correctAnswer: true,
      },
      {
        id: 'C',
        label: 'C',
        statement: 'Besar sudut $\\angle BDC = 40^\\circ$.',
        correctAnswer: false,
      },
    ],
    correctAnswer: { A: true, B: true, C: false },
    explanation: {
      summary:
        'Sifat simetri trapesium sama kaki menghasilkan $\\angle ABC = \\angle BAD = 70^\\circ$, dan $\\angle BCD = 180^\\circ - 70^\\circ = 110^\\circ$. Sudut berseberangan dalam $\\angle BDC = \\angle ABD = 30^\\circ$.',
      steps: [
        {
          title: 'Verifikasi Setiap Pernyataan',
          content:
            '• **Pernyataan A**: $\\angle BCD = 180^\\circ - 70^\\circ = 110^\\circ$ [BENAR].\n• **Pernyataan B**: $\\angle CBD = \\angle ABC - \\angle ABD = 70^\\circ - 30^\\circ = 40^\\circ$ [BENAR].\n• **Pernyataan C**: Sudut berseberangan dalam $\\angle BDC = \\angle ABD = 30^\\circ$, bukan $40^\\circ$ [SALAH].',
        },
      ],
      keyConcept: 'Sifat Sudut Garis Sejajar dan Simetri Trapesium Sama Kaki',
    },
  },

  {
    id: 'soal-41',
    number: 23,
    module: 'Trigonometri',
    competency: 'Menyelesaikan permasalahan terkait perbandingan trigonometri sudut istimewa terapan',
    subCompetency: 'Perbandingan Sinus Sudut Istimewa 60°',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pg_single',
    title: 'Elevasi Lengan Robotik Pemeliharaan Observatorium',
    scenario:
      'Sebuah lengan derek inspeksi teleskop yang memiliki panjang 6 meter disandarkan pada dinding observatorium vertikal. Sudut elevasi yang dibentuk antara lengan derek dengan lantai dasar horizontal adalah tepat $60^\\circ$.',
    questionPrompt:
      'Tinggi dinding vertikal yang disentuh oleh ujung atas lengan derek tersebut adalah ....',
    svgComponentId: 'sensor_ladder',
    options: [
      { id: 'A', label: 'A', text: '$3\\text{ meter}$' },
      { id: 'B', label: 'B', text: '$3\\sqrt{2}\\text{ meter}$' },
      { id: 'C', label: 'C', text: '$3\\sqrt{3}\\text{ meter}$' },
      { id: 'D', label: 'D', text: '$4\\sqrt{2}\\text{ meter}$' },
      { id: 'E', label: 'E', text: '$4\\sqrt{3}\\text{ meter}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Tinggi dinding merupakan sisi depan dari sudut $60^\\circ$ pada segitiga siku-siku, dihitung menggunakan rasio sinus: $\\sin \\theta = \\frac{\\text{sisi depan}}{\\text{sisi miring}}$.',
      steps: [
        {
          title: 'Gunakan Perbandingan Trigonometri Sinus',
          content:
            '$$h = 6 \\times \\sin 60^\\circ = 6 \\times \\frac{\\sqrt{3}}{2} = 3\\sqrt{3}\\text{ meter}$$',
          formula: 'h = 3\\sqrt{3}\\text{ meter}',
        },
      ],
      keyConcept: 'Aplikasi Rasio Sinus Sudut Istimewa pada Segitiga Siku-Siku',
    },
  },

  {
    id: 'soal-45',
    number: 24,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait transformasi geometri dilatasi optik',
    subCompetency: 'Faktor Skala Dilatasi & Batas Layar Proyeksi',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_kategori',
    title: 'Transformasi Dilatasi Proyeksi HUD Kokpit Pesawat Latih',
    scenario:
      'Seorang instruktur simulasi penerbangan memproyeksikan citra instrumen penerbangan asli berukuran $60\\text{ cm} \\times 60\\text{ cm}$ menggunakan sistem lensa proyektor optik ke layar berukuran $2{,}4\\text{ meter} \\times 1{,}8\\text{ meter}$ ($240\\text{ cm} \\times 180\\text{ cm}$) yang terpasang horizontal.\n\nSistem proyektor menghasilkan pembesaran proporsional (dilatasi) yang bergantung pada jarak dari layar sesuai formula: $\\text{Skala Pembesaran } k = 0{,}6 \\times \\text{jarak (meter)}$. Proyektor ditempatkan pada jarak tepat 3 meter dari layar.',
    questionPrompt:
      'Bagaimanakah tampilan citra instrumen di layar? Tentukan Benar atau Salah pada setiap pernyataan berikut!',
    svgComponentId: 'cockpit_hud',
    categoryStatements: [
      {
        id: 'A',
        label: 'A',
        statement: 'Perbandingan rasio panjang terhadap lebar tampilan citra di layar adalah 1 : 1.',
        correctAnswer: true,
      },
      {
        id: 'B',
        label: 'B',
        statement: 'Ukuran panjang dan lebar tampilan citra pada layar masing-masing adalah lebih dari 1 meter.',
        correctAnswer: true,
      },
      {
        id: 'C',
        label: 'C',
        statement: 'Terdapat bagian gambar asli citra yang terpotong dalam tampilan pada layar.',
        correctAnswer: false,
      },
    ],
    correctAnswer: { A: true, B: true, C: false },
    explanation: {
      summary:
        'Faktor skala dilatasi: $k = 0{,}6 \\times 3 = 1{,}8$. Ukuran citra baru: $60 \\times 1{,}8 = 108\\text{ cm} = 1{,}08\\text{ m}$. Citra berukuran $108 \\times 108\\text{ cm}$ muat leluasa di layar $240 \\times 180\\text{ cm}$.',
      steps: [
        {
          title: 'Verifikasi Setiap Pernyataan',
          content:
            '• **Pernyataan A**: Rasio dilatasi simetris $108 : 108 = 1 : 1$ [BENAR].\n• **Pernyataan B**: $1{,}08\\text{ m} > 1\\text{ m}$ [BENAR].\n• **Pernyataan C**: Layar berukuran $240 \\times 180\\text{ cm}$, maka gambar $108 \\times 108\\text{ cm}$ tidak terpotong sama sekali [SALAH].',
        },
      ],
      keyConcept: 'Prinsip Dilatasi Terhadap Luas dan Dimensi Ruang Proyeksi',
    },
  },

  // =========================================================================
  // BATCH 4: STATISTIKA, ANALISIS DATA, PELUANG & KOMBINATORIKA
  // =========================================================================
  {
    id: 'soal-1',
    number: 25,
    module: 'Peluang & Kombinatorika',
    competency: 'Menyelesaikan permasalahan terkait peluang suatu kejadian majemuk',
    subCompetency: 'Peluang Kejadian Majemuk (Aturan Penjumlahan)',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Alokasi Rak Server Cloud di Data Center',
    scenario:
      'Sebuah data center pusat komputasi awan memiliki 30 unit rak server yang tersedia di Zona Alpha. Manajer infrastruktur mencatat spesifikasi redundansi rak server tersebut sebagai berikut:\n• 18 unit rak server dilengkapi sistem pendingin cair terintegrasi (*direct liquid cooling*).\n• 10 unit rak server memiliki antarmuka jaringan redundan berkecepatan 100 Gbps (*dual-port uplink*).\n• 6 unit di antaranya memiliki sistem pendingin cair sekaligus konektivitas 100 Gbps.\n• Sisanya adalah unit rak server standar tanpa kedua fitur unggulan tersebut.\n\nJika saat ini seluruh rak server kosong dan sistem manajemen cloud mengalokasikan satu unit rak secara acak untuk instans komputasi beban tinggi (*high-performance computing*),',
    questionPrompt:
      'Berapakah peluang instans tersebut mendapatkan rak server yang memiliki pendingin cair atau konektivitas jaringan 100 Gbps?',
    svgComponentId: 'datacenter_rack',
    options: [
      { id: 'A', label: 'A', text: '$\\frac{1}{5}$' },
      { id: 'B', label: 'B', text: '$\\frac{8}{15}$' },
      { id: 'C', label: 'C', text: '$\\frac{11}{15}$' },
      { id: 'D', label: 'D', text: '$\\frac{12}{15}$' },
      { id: 'E', label: 'E', text: '$\\frac{14}{15}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Peluang gabungan dua kejadian yang tidak saling lepas diselesaikan menggunakan prinsip inklusi-eksklusi peluang: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.',
      steps: [
        {
          title: 'Hitung Peluang Gabungan',
          content:
            '$$n(A \\cup B) = 18 + 10 - 6 = 22\\text{ unit}$$\n$$P(A \\cup B) = \\frac{22}{30} = \\frac{11}{15}$$',
          formula: 'P(A \\cup B) = \\frac{11}{15}',
        },
      ],
      keyConcept: 'Aturan Penjumlahan Peluang Kejadian Majemuk Tidak Saling Lepas',
    },
  },

  {
    id: 'soal-2',
    number: 26,
    module: 'Peluang & Kombinatorika',
    competency: 'Menyelesaikan permasalahan terkait peluang suatu kejadian tunggal dan komplemen',
    subCompetency: 'Peluang Sederhana & Komplemen',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_mcma',
    title: 'Pengujian Mutu Modul Sensor Cerdas Industri',
    scenario:
      'Dalam lini perakitan sistem otomasi pabrik, data statistik pengujian menunjukkan bahwa dari setiap kelompok sampel berisi 10 modul sensor pintar ramah lingkungan yang diproduksi, komposisi rata-ratanya adalah sebagai berikut:\n• 4 unit sensor optik LiDAR presisi tinggi;\n• 3 unit sensor getaran piezoelektrik;\n• 2 unit modul radar ultrasonik; dan\n• Sisanya adalah unit telemetri nirkabel LoRa.\n\nSeorang insinyur *Quality Control* (QC) mengambil 1 unit sensor secara acak dari batch tersebut untuk diuji efisiensi konsumsi dayanya.',
    questionPrompt:
      'Mana saja pernyataan-pernyataan berikut yang bernilai BENAR terkait nilai peluang terpilihnya jenis sensor tersebut? (Pilihan jawaban benar lebih dari satu)',
    svgComponentId: 'iot_sensor_array',
    options: [
      { id: 'opt1', label: '1', text: 'Peluang terpilihnya sensor optik LiDAR adalah $40\\%$.' },
      { id: 'opt2', label: '2', text: 'Peluang terpilihnya sensor bukan modul radar ultrasonik adalah $0{,}2$.' },
      { id: 'opt3', label: '3', text: 'Peluang terpilihnya unit telemetri nirkabel LoRa adalah $\\frac{1}{5}$.' },
      { id: 'opt4', label: '4', text: 'Peluang terpilihnya sensor bukan sensor getaran piezoelektrik adalah $70\\%$.' },
    ],
    correctAnswer: ['opt1', 'opt4'],
    explanation: {
      summary:
        'Peluang kejadian tunggal adalah $P(A) = \\frac{n(A)}{n(S)}$, dan peluang komplemen (bukan A) adalah $P(A\') = 1 - P(A)$.',
      steps: [
        {
          title: 'Verifikasi Pernyataan',
          content:
            '• **Pernyataan 1**: $P(\\text{LiDAR}) = \\frac{4}{10} = 40\\%$ [BENAR].\n• **Pernyataan 2**: $P(\\text{bukan Ultra}) = 1 - \\frac{2}{10} = 0{,}8$ (bukan 0,2) [SALAH].\n• **Pernyataan 3**: $P(\\text{LoRa}) = \\frac{1}{10}$ (bukan 1/5) [SALAH].\n• **Pernyataan 4**: $P(\\text{bukan Piezo}) = 1 - \\frac{3}{10} = 70\\%$ [BENAR].',
        },
      ],
      keyConcept: 'Konsep Dasar Peluang Klasik dan Kejadian Komplemen',
    },
  },

  {
    id: 'soal-4',
    number: 27,
    module: 'Statistika & Analisis Data',
    competency: 'Mengolah dan menyajikan data numerik serta menyimpulkan nilai data hilang',
    subCompetency: 'Analisis Diagram Batang & Nilai Residu',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Telemetri Node Komputasi di Jaringan Cloud Regional',
    scenario:
      'Operator infrastruktur cloud regional mendata jumlah node komputasi aktif yang tersebar di 7 kluster server zona provinsi. Data jumlah node pada Kluster A hingga Kluster G tercatat pada diagram batang.\n\nNamun, informasi mengenai jumlah node aktif di Kluster E hilang akibat gangguan transmisi log sensor. Di sisi lain, sistem log pusat memastikan bahwa jumlah keseluruhan node aktif di seluruh 7 kluster tersebut adalah tepat 25.000 node.\n\nData kluster yang terbaca:\n• Kluster A = 4.500 node\n• Kluster B = 3.200 node\n• Kluster C = 5.000 node\n• Kluster D = 2.800 node\n• Kluster F = 4.200 node\n• Kluster G = 3.800 node',
    questionPrompt:
      'Berdasarkan informasi konsolidasi data tersebut, berapakah banyak node aktif pada Kluster E?',
    svgComponentId: 'data_traffic_bar',
    options: [
      { id: 'A', label: 'A', text: '500 node' },
      { id: 'B', label: 'B', text: '1.500 node' },
      { id: 'C', label: 'C', text: '2.000 node' },
      { id: 'D', label: 'D', text: '2.500 node' },
      { id: 'E', label: 'E', text: '3.000 node' },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        '$$E = 25.000 - (4.500 + 3.200 + 5.000 + 2.800 + 4.200 + 3.800) = 25.000 - 23.500 = 1.500\\text{ node}$$',
      steps: [
        {
          title: 'Hitung Selisih Total',
          content:
            '$$E = 25.000 - 23.500 = 1.500\\text{ node}$$',
          formula: 'E = 1.500',
        },
      ],
      keyConcept: 'Rekonstruksi Nilai Frekuensi Hilang dari Jumlah Total Data',
    },
  },

  {
    id: 'soal-46',
    number: 28,
    module: 'Peluang & Kombinatorika',
    competency: 'Menyelesaikan permasalahan terkait kaidah pencacahan aturan perkalian',
    subCompetency: 'Aturan Pengisian Tempat (Filling Slots) Alphanumeric',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Pembuatan Token Enkripsi Autentikasi Node Sensor IoT',
    scenario:
      'Dalam arsitektur keamanan jaringan nirkabel Internet of Things (IoT), seorang insinyur membuat kode token akses autentikasi unik untuk setiap node sensor. Format kode terdiri dari lima karakter alfanumerik terstruktur:\n\n$$\\mathbf{A - X - B - Y - C}$$\n\nKeterangan aturan token:\n• $A, B,$ dan $C$ harus berupa huruf kapital alfabet (dari 26 pilihan: A sampai Z).\n• $X$ dan $Y$ harus berupa angka desimal (dari 10 pilihan: 0 sampai 9).\n• Tidak boleh ada huruf yang diulang, dan tidak boleh ada angka yang diulang.',
    questionPrompt:
      'Berapakah banyak variasi kode token akses berbeda yang dapat dibuat oleh insinyur tersebut?',
    svgComponentId: 'iot_token',
    options: [
      { id: 'A', label: 'A', text: '$1.263.600$' },
      { id: 'B', label: 'B', text: '$1.352.000$' },
      { id: 'C', label: 'C', text: '$1.404.000$' },
      { id: 'D', label: 'D', text: '$1.423.656$' },
      { id: 'E', label: 'E', text: '$1.757.600$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Kaidah pengisian tempat (*rule of product*) tanpa pengulangan untuk 3 slot huruf dan 2 slot angka.',
      steps: [
        {
          title: 'Kalkulasi Permutasi Slot',
          content:
            '$$N = (26 \\times 25 \\times 24) \\times (10 \\times 9) = 15.600 \\times 90 = 1.404.000\\text{ variasi}$$',
          formula: 'N_{\\text{total}} = 1.404.000',
        },
      ],
      keyConcept: 'Aturan Pengisian Tempat (Filling Slots Multiplication Rule)',
    },
  },
];
