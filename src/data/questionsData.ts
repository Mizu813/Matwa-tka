import { Question } from '../types/quiz';

export const questionsData: Question[] = [
  // =========================================================================
  // BATCH 1: ALJABAR, SISTEM PERSAMAAN & PROGRAM LINEAR (HOTS)
  // =========================================================================
  {
    id: 'soal-1',
    number: 1,
    module: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
    competency: 'Menyelesaikan permasalahan terkait sistem persamaan linear multivariabel',
    subCompetency: 'SPLDV Terapan Agrikultur Modern',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Pengadaan Nutrisi Tanaman di Rumah Kaca Cerdas (Smart Greenhouse)',
    scenario:
      'Pengelola fasilitas agrikultur presisi memesan paket konsentrat nutrisi hidroponik. Faktur pembelian mencatat bahwa pengadaan 4 botol konsentrat makro ($x$) dan 3 botol kit mikronutrien kelat ($y$) berbiaya total Rp220.000,00. Berdasarkan daftar katalog resmi distributor, harga 1 botol konsentrat makro adalah Rp20.000,00 lebih mahal daripada harga 1 botol kit mikronutrien.',
    questionPrompt:
      'Berapakah total biaya yang harus dibayar fasilitas jika memesan 2 botol konsentrat makro dan 6 botol kit mikronutrien?',
    svgComponentId: 'servo_sensor_cost',
    options: [
      { id: 'A', label: 'A', text: 'Rp180.000,00' },
      { id: 'B', label: 'B', text: 'Rp190.000,00' },
      { id: 'C', label: 'C', text: 'Rp200.000,00' },
      { id: 'D', label: 'D', text: 'Rp210.000,00' },
      { id: 'E', label: 'E', text: 'Rp220.000,00' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Sistem persamaan linear dua variabel (SPLDV) dimodelkan secara aljabar, lalu diselesaikan menggunakan metode substitusi untuk memperoleh harga satuan setiap jenis konsentrat nutrisi.',
      steps: [
        {
          title: 'Pemodelan Matematika',
          content:
            'Misalkan harga 1 botol konsentrat makro = $x$ rupiah dan 1 botol mikronutrien = $y$ rupiah.\n$$\\begin{cases} 4x + 3y = 220.000 \\quad (1) \\\\ x = y + 20.000 \\quad (2) \\end{cases}$$',
          formula: '\\begin{cases} 4x + 3y = 220.000 \\\\ x = y + 20.000 \\end{cases}',
        },
        {
          title: 'Substitusi Persamaan (2) ke Persamaan (1)',
          content:
            '$$4(y + 20.000) + 3y = 220.000$$\n$$4y + 80.000 + 3y = 220.000$$\n$$7y = 220.000 - 80.000 = 140.000$$\n$$y = 20.000\\text{ rupiah (harga 1 botol mikronutrien)}$$',
        },
        {
          title: 'Hitung Nilai x dan Biaya Pesanan Baru',
          content:
            '$$x = y + 20.000 = 20.000 + 20.000 = 40.000\\text{ rupiah}$$\nTotal biaya untuk 2 botol makro dan 6 botol mikro adalah:\n$$2x + 6y = 2(40.000) + 6(20.000) = 80.000 + 120.000 = 200.000\\text{ rupiah}$$',
          formula: '2x + 6y = \\text{Rp}200.000{,}00',
        },
      ],
      keyConcept: 'Metode Substitusi Sistem Persamaan Linear Dua Variabel (SPLDV)',
    },
    hint1: 'Nyatakan variabel $x$ dalam bentuk $(y + 20.000)$ sesuai selisih harga katalog.',
    hint2: 'Substitusikan bentuk $x$ tersebut ke persamaan $4x + 3y = 220.000$ untuk mencari nilai $y$.',
    trap: 'Hati-hati, pertanyaan menanyakan nilai $2x + 6y$, bukan nilai $x + y$ atau nilai $x$ saja.',
  },

  {
    id: 'soal-2',
    number: 2,
    module: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
    competency: 'Menyelesaikan permasalahan terkait daerah himpunan penyelesaian SPtLDV',
    subCompetency: 'Daerah Penyelesaian Pertidaksamaan Linear Dua Variabel',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Daerah Batasan Debit Pompa Instalasi Desalinasi Pesisir',
    scenario:
      'Dalam perancangan distribusi debit air pada instalasi desalinasi pesisir dengan dua subsistem pompa $x$ dan $y$ (dalam ribuan meter kubik per hari), insinyur proses menetapkan sistem pertidaksamaan linear dua variabel berikut:\n$$x + y \\le 5$$\n$$x + 2y \\ge 6$$\n$$x \\ge 0,\\; y \\ge 0$$\n\nPerhatikan grafik bidang Kartesius yang membagi Kuadran I menjadi lima wilayah yang ditandai dengan angka Romawi I, II, III, IV, dan V.',
    questionPrompt:
      'Daerah yang memenuhi sistem pertidaksamaan linear debit pompa tersebut adalah daerah nomor ....',
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
        'Daerah himpunan penyelesaian diperoleh dari irisan daerah semi-bidang yang memenuhi kedua pertidaksamaan linear pada kuadran pertama.',
      steps: [
        {
          title: 'Uji Pertidaksamaan Pertama: $x + y \\le 5$',
          content:
            'Garis batas $x + y = 5$ memotong sumbu koordinat di $(5, 0)$ dan $(0, 5)$. Lakukan uji titik asal $(0, 0)$:\n$$0 + 0 \\le 5 \\implies 0 \\le 5\\text{ (Benar)}$$\nDaerah yang memenuhi berada di sisi bawah garis atau mengarah ke titik origin $(0, 0)$.',
        },
        {
          title: 'Uji Pertidaksamaan Kedua: $x + 2y \\ge 6$',
          content:
            'Garis batas $x + 2y = 6$ memotong sumbu koordinat di $(6, 0)$ dan $(0, 3)$. Lakukan uji titik asal $(0, 0)$:\n$$0 + 2(0) \\ge 6 \\implies 0 \\ge 6\\text{ (Salah)}$$\nDaerah yang memenuhi berada di sisi atas garis atau menjauhi titik origin $(0, 0)$.',
        },
        {
          title: 'Tentukan Daerah Irisan (Feasible Region)',
          content:
            'Batasan non-negatif $x \\ge 0$ dan $y \\ge 0$ membatasi pencarian di Kuadran I.\nDaerah yang berada di bawah garis $x + y = 5$ sekaligus di atas garis $x + 2y = 6$ adalah segitiga bernomor **II** yang dibatasi titik pojok $(0, 3)$, $(0, 5)$, dan titik potong kedua garis di $(4, 1)$.',
          formula: '\\text{Daerah Terarsir} = \\text{Daerah II}',
        },
      ],
      keyConcept: 'Uji Titik Sembarang untuk Penentuan Semi-Bidang SPtLDV',
    },
    hint1: 'Garis $x + y = 5$ mengarah ke bawah $(0,0)$, sedangkan garis $x + 2y = 6$ mengarah ke atas menjauhi $(0,0)$.',
    hint2: 'Cari wilayah di Kuadran I yang berada di antara kedua garis tersebut di dekat sumbu Y.',
    trap: 'Jangan terbalik menentukan arah arsiran untuk tanda $\\ge$ dan $\\le$ saat menguji titik $(0,0)$.',
  },

  {
    id: 'soal-3',
    number: 3,
    module: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
    competency: 'Menyelesaikan permasalahan sistem persamaan linear tiga variabel (SPLTV)',
    subCompetency: 'SPLTV Pengadaan Logistik Energi Terbarukan',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Pengadaan Paket Energi Surya Komunitas (PLTS Mandiri)',
    scenario:
      'Koperasi energi desa membeli modul panel surya silikon monokristalin ($x$), kontroler pengisian MPPT ($y$), dan unit sel baterai LiFePO4 ($z$) untuk tiga dusun. Faktur logistik mencatat pengadaan berikut:\n• Tim Dusun Aliran: membeli 2 modul surya, 1 kontroler MPPT, dan 3 unit baterai dengan total biaya Rp26.000.000,00.\n• Tim Dusun Surya: membeli 1 modul surya, 2 kontroler MPPT, dan 2 unit baterai dengan total biaya Rp22.000.000,00.\n• Tim Dusun Angin: membeli 2 modul surya, 2 kontroler MPPT, dan 1 unit baterai dengan total biaya Rp25.000.000,00.',
    questionPrompt:
      'Apabila Tim Dusun Sejahtera ingin membeli masing-masing tepat 1 unit dari ketiga komponen tersebut ($x + y + z$), berapakah total biaya yang harus dibayarkan?',
    svgComponentId: 'microfab_procurement',
    options: [
      { id: 'A', label: 'A', text: 'Rp12.000.000,00' },
      { id: 'B', label: 'B', text: 'Rp13.000.000,00' },
      { id: 'C', label: 'C', text: 'Rp14.000.000,00' },
      { id: 'D', label: 'D', text: 'Rp15.000.000,00' },
      { id: 'E', label: 'E', text: 'Rp16.000.000,00' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Sistem persamaan linear tiga variabel (SPLTV) dimodelkan secara aljabar, lalu diselesaikan menggunakan kombinasi eliminasi dan substitusi bertahap.',
      steps: [
        {
          title: 'Susun SPLTV dalam Satuan Juta Rupiah',
          content:
            '$$\\begin{cases} 2x + y + 3z = 26 \\quad (1) \\\\ x + 2y + 2z = 22 \\quad (2) \\\\ 2x + 2y + z = 25 \\quad (3) \\end{cases}$$',
        },
        {
          title: 'Eliminasi Variabel untuk Menemukan Relasi',
          content:
            'Kurangkan Persamaan (3) dengan Persamaan (2):\n$$(2x + 2y + z) - (x + 2y + 2z) = 25 - 22$$\n$$x - z = 3 \\implies x = z + 3$$\nKurangkan Persamaan (3) dengan Persamaan (1):\n$$(2x + 2y + z) - (2x + y + 3z) = 25 - 26$$\n$$y - 2z = -1 \\implies y = 2z - 1$$',
        },
        {
          title: 'Substitusi ke Persamaan (2) dan Hitung Nilai Total',
          content:
            'Masukkan bentuk $x$ dan $y$ ke Persamaan (2):\n$$(z + 3) + 2(2z - 1) + 2z = 22$$\n$$z + 3 + 4z - 2 + 2z = 22 \\implies 7z + 1 = 22 \\implies 7z = 21 \\implies z = 3$$\nDiperoleh:\n$$x = 3 + 3 = 6\\text{ juta}$$\n$$y = 2(3) - 1 = 5\\text{ juta}$$\n$$z = 3\\text{ juta}$$\nMaka biaya 1 unit untuk tiap komponen adalah:\n$$x + y + z = 6 + 5 + 3 = 14\\text{ juta rupiah}$$',
          formula: 'x + y + z = \\text{Rp}14.000.000{,}00',
        },
      ],
      keyConcept: 'Metode Eliminasi Terarah pada Sistem Persamaan Linear Tiga Variabel (SPLTV)',
    },
    hint1: 'Kurangkan persamaan (3) dengan (2) untuk mengeliminasi variabel $y$ secara langsung.',
    hint2: 'Kurangkan persamaan (3) dengan (1) untuk mengeliminasi variabel $x$, lalu nyatakan $x$ dan $y$ dalam peubah $z$.',
    trap: 'Periksa kembali tanda negatif saat mengurangkan koefisien agar tidak terjadi kesalahan tanda pada relasi aljabar.',
  },

  {
    id: 'soal-4',
    number: 4,
    module: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
    competency: 'Menyelesaikan permasalahan optimasi program linear dengan fungsi objektif',
    subCompetency: 'Optimasi Program Linear Metode Titik Pojok (PGK MCMA)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_mcma',
    title: 'Optimasi Manufaktur Robot Otonom Rover Kurir & Kargo',
    scenario:
      'Pabrik robotika memproduksi dua varian kendaraan pengantar otonom: Rover Kurir ($x$) dan Rover Kargo ($y$). Kebutuhan modul baterai solid-state dan alokasi waktu stasiun kalibrasi sensor per unit adalah sebagai berikut:\n• Rover Kurir: memerlukan $3\\text{ unit}$ baterai dan $1\\text{ jam}$ kalibrasi sensor.\n• Rover Kargo: memerlukan $2\\text{ unit}$ baterai dan $2\\text{ jam}$ kalibrasi sensor.\n\nPersediaan harian dibatasi maksimal $36\\text{ unit}$ baterai solid-state per hari, dan total waktu kerja stasiun kalibrasi adalah maksimal $24\\text{ jam}$ per hari. Keuntungan bersih dari penjualan 1 unit Rover Kurir adalah Rp600.000,00 dan dari 1 unit Rover Kargo adalah Rp500.000,00.',
    questionPrompt:
      'Berdasarkan pemodelan sistem linear tersebut, manakah pernyataan yang BENAR mengenai kapasitas produksi harian dan laba yang dapat diperoleh? (Pilihan jawaban benar lebih dari satu)',
    svgComponentId: 'drone_assembly_opt',
    options: [
      { id: 'opt1', label: '1', text: 'Jika pabrik hanya memproduksi Rover Kargo saja, jumlah maksimum yang dapat dihasilkan per hari adalah 12 unit.' },
      { id: 'opt2', label: '2', text: 'Pabrik dapat memproduksi 8 unit Rover Kurir dan 7 unit Rover Kargo secara bersamaan tanpa melanggar kendala bahan.' },
      { id: 'opt3', label: '3', text: 'Memproduksi 12 unit Rover Kurir saja menghasilkan keuntungan yang sama besarnya dengan keuntungan maksimum pabrik.' },
      { id: 'opt4', label: '4', text: 'Keuntungan maksimum yang dapat diperoleh perusahaan per hari adalah sebesar Rp8.100.000,00.' },
    ],
    correctAnswer: ['opt1', 'opt4'],
    explanation: {
      summary:
        'Sistem kendala program linear diselesaikan dengan metode uji titik pojok daerah penyelesaian (*corner points*) untuk fungsi objektif laba $Z = 600.000x + 500.000y$.',
      steps: [
        {
          title: 'Pemodelan Fungsi Kendala',
          content:
            '• Kendala Baterai: $3x + 2y \\le 36$\n• Kendala Kalibrasi: $x + 2y \\le 24$\n• Kendala Non-negatif: $x \\ge 0,\\; y \\ge 0$',
        },
        {
          title: 'Tentukan Titik Pojok Feasible Region',
          content:
            '1. Titik potong sumbu $Y$ ($x=0$): $2y \\le 36 \\implies y \\le 18$; $2y \\le 24 \\implies y \\le 12$. Titik uji: $(0, 12)$ **(Pernyataan 1 BENAR)**.\n2. Titik potong sumbu $X$ ($y=0$): $3x \\le 36 \\implies x \\le 12$; $x \\le 24$. Titik uji: $(12, 0)$.\n3. Titik potong kedua garis batas:\n$$(3x + 2y) - (x + 2y) = 36 - 24 \\implies 2x = 12 \\implies x = 6$$\n$$6 + 2y = 24 \\implies 2y = 18 \\implies y = 9$$\nTitik temu: $(6, 9)$.',
        },
        {
          title: 'Uji Nilai Keuntungan Maksimum',
          content:
            '• Titik $(0, 12)$: $Z = 0 + 12(500k) = \\text{Rp}6.000.000$\n• Titik $(12, 0)$: $Z = 12(600k) + 0 = \\text{Rp}7.200.000$\n• Titik $(6, 9)$: $Z = 6(600k) + 9(500k) = 3.600.000 + 4.500.000 = \\text{Rp}8.100.000$ **(Pernyataan 4 BENAR)**.\n\nUntuk Pernyataan 2: $3(8) + 2(7) = 24 + 14 = 38 > 36$ (Melanggar kendala baterai, SALAH).',
        },
      ],
      keyConcept: 'Metode Uji Titik Pojok (Corner Points) Program Linear 2 Dimensi',
    },
    hint1: 'Cari titik potong kedua garis kendala $3x + 2y = 36$ dan $x + 2y = 24$.',
    hint2: 'Bandingkan nilai laba di ketiga titik pojok: $(12, 0)$, $(0, 12)$, dan $(6, 9)$.',
    trap: 'Kombinasi $(8, 7)$ memenuhi batas kalibrasi ($8 + 14 = 22 \\le 24$) tetapi melanggar batas baterai ($24 + 14 = 38 > 36$).',
  },

  // =========================================================================
  // BATCH 2: FUNGSI, RELASI, BARISAN & DERET TERAPAN
  // =========================================================================
  {
    id: 'soal-5',
    number: 5,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan terkait aplikasi barisan dan deret geometri / bunga majemuk',
    subCompetency: 'Bunga Majemuk Dana Pemeliharaan Infrastruktur',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Akumulasi Dana Cadangan Perawatan Turbin Angin Lepas Pantai',
    scenario:
      'Konsorsium pembangkit listrik energi terbarukan mengalokasikan dana cadangan peremajaan bilah turbin angin lepas pantai sebesar Rp10.000.000,00 ke dalam instrumen sukuk hijau. Instrumen tersebut memberikan imbal hasil majemuk sebesar $10\\%$ per tahun yang dibungakan dan ditambahkan langsung ke saldo setiap akhir tahun.\n\nKonsorsium berencana mencairkan seluruh dana tersebut tepat setelah jangka waktu 3 tahun.',
    questionPrompt:
      'Berapakah total akumulasi dana cadangan yang terkumpul setelah jatuh tempo 3 tahun?',
    svgComponentId: 'compound_growth',
    options: [
      { id: 'A', label: 'A', text: 'Rp12.100.000,00' },
      { id: 'B', label: 'B', text: 'Rp13.000.000,00' },
      { id: 'C', label: 'C', text: 'Rp13.200.000,00' },
      { id: 'D', label: 'D', text: 'Rp13.310.000,00' },
      { id: 'E', label: 'E', text: 'Rp13.500.000,00' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Perhitungan bunga majemuk tahunan menggunakan model pertumbuhan deret geometri: $M_n = M_0 \\cdot (1 + i)^n$.',
      steps: [
        {
          title: 'Identifikasi Parameter Finansial',
          content:
            '• Modal Pokok ($M_0$) = Rp10.000.000,00\n• Suku Bunga Majemuk ($i$) = $10\\% = 0{,}10$ per tahun\n• Periode Penyimpanan ($n$) = 3 tahun',
          formula: 'M_n = M_0(1 + i)^n',
        },
        {
          title: 'Hitung Faktor Pemultiplikasi Geometri',
          content:
            'Faktor pemultiplikasi setelah 3 tahun:\n$$(1 + 0{,}10)^3 = (1{,}1)^3 = 1{,}1 \\times 1{,}1 \\times 1{,}1 = 1{,}331$$',
        },
        {
          title: 'Kalkulasi Saldo Akhir',
          content:
            '$$M_3 = 10.000.000 \\times 1{,}331$$\n$$M_3 = 13.310.000\\text{ rupiah}$$',
          formula: 'M_3 = \\text{Rp}13.310.000{,}00',
        },
      ],
      keyConcept: 'Formulasi Bunga Majemuk sebagai Barisan Geometri Terapan',
    },
    hint1: 'Gunakan rumus modal akhir bunga majemuk: $M_n = M_0(1 + i)^n$.',
    hint2: 'Nilai $(1,1)^3 = 1,331$. Kalikan dengan modal awal Rp10.000.000,00.',
    trap: 'Jangan menghitung dengan bunga tunggal $10.000.000 + 3 \\times 1.000.000 = 13.000.000$, karena bunga majemuk membungakan laba tahun sebelumnya.',
  },

  {
    id: 'soal-6',
    number: 6,
    module: 'Fungsi & Relasi',
    competency: 'Menyelesaikan permasalahan terkait invers fungsi dan representasinya',
    subCompetency: 'Invers Fungsi Rasional Kompresi Telemetri',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pg_single',
    title: 'Karakteristik Invers Fungsi Kompresi Citra Satelit',
    scenario:
      'Waktu pemrosesan kompresi data citra satelit penginderaan jauh $f(x)$ (dalam milidetik) terhadap ukuran blok data $x$ (dalam kilobyte) dirumuskan oleh fungsi rasional:\n$$f(x) = \\frac{3x - 5}{x + 2},\\quad x \\ne -2$$\n\nJika $f^{-1}(x)$ menyatakan fungsi invers yang memetakan kembali waktu kompresi ke ukuran blok awal,',
    questionPrompt:
      'Nilai dari $f^{-1}(2)$ adalah ....',
    svgComponentId: 'composite_machine',
    options: [
      { id: 'A', label: 'A', text: '$5$' },
      { id: 'B', label: 'B', text: '$7$' },
      { id: 'C', label: 'C', text: '$9$' },
      { id: 'D', label: 'D', text: '$11$' },
      { id: 'E', label: 'E', text: '$13$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Berdasarkan relasi ekuivalensi dasar fungsi invers: nilai $f^{-1}(y) = x$ setara dengan mencari nilai $x$ sedemikian rupa sehingga $f(x) = y$.',
      steps: [
        {
          title: 'Terapkan Definisi Fungsi Invers',
          content:
            'Misalkan $f^{-1}(2) = k$. Sesuai definisi fungsi invers, berlaku:\n$$f(k) = 2$$',
          formula: 'f(k) = \\frac{3k - 5}{k + 2} = 2',
        },
        {
          title: 'Selesaikan Persamaan Aljabar',
          content:
            'Kalikan kedua ruas dengan $(k + 2)$ (dengan syarat $k \\ne -2$):\n$$3k - 5 = 2(k + 2)$$\n$$3k - 5 = 2k + 4$$\n$$3k - 2k = 4 + 5$$\n$$k = 9$$',
          formula: 'k = 9',
        },
      ],
      keyConcept: 'Definisi Relasi Ekuivalen Fungsi Invers: f⁻¹(y) = x ⇔ f(x) = y',
    },
    hint1: 'Tidak perlu mencari rumus umum $f^{-1}(x)$. Cukup samakan $f(x) = 2$ lalu selesaikan untuk mencari $x$.',
    hint2: 'Kalikan silang persamaan $\\frac{3x - 5}{x + 2} = 2$ menjadi $3x - 5 = 2x + 4$.',
    trap: 'Jangan menyubstitusikan $x = 2$ ke dalam rumus $f(x)$, karena yang ditanyakan adalah $f^{-1}(2)$, bukan $f(2)$.',
  },

  {
    id: 'soal-7',
    number: 7,
    module: 'Fungsi & Relasi',
    competency: 'Menyelesaikan permasalahan terkait fungsi komposisi dan representasinya',
    subCompetency: 'Komposisi Fungsi Dua Tahap Pemrosesan Sinyal',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Transformasi Filter Akustik Aktif (ANC Pipeline)',
    scenario:
      'Dua modul penyaring sinyal audio peredam kebisingan aktif (ANC) dimodelkan dengan fungsi kontinu $f: \\mathbb{R} \\to \\mathbb{R}$ dan $g: \\mathbb{R} \\to \\mathbb{R}$. Tahap pra-filter memproses amplitudo input dengan fungsi $g(x) = x + 2$. Hasil akhir keseluruhan pemrosesan sinyal memenuhi persamaan fungsi komposisi:\n$$(f \\circ g)(x) = x^2 + 6x + 14$$',
    questionPrompt:
      'Berdasarkan alur pemrosesan sistem bertingkat tersebut, nilai dari $f(5)$ adalah ....',
    svgComponentId: 'composite_machine',
    options: [
      { id: 'A', label: 'A', text: '$33$' },
      { id: 'B', label: 'B', text: '$37$' },
      { id: 'C', label: 'C', text: '$39$' },
      { id: 'D', label: 'D', text: '$41$' },
      { id: 'E', label: 'E', text: '$45$' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Untuk menghitung nilai $f(k)$ dari persamaan $(f \\circ g)(x)$, cari terlebih dahulu nilai masukan $x$ yang memenuhi $g(x) = k$.',
      steps: [
        {
          title: 'Tentukan Nilai Input x yang Memenuhi g(x) = 5',
          content:
            'Karena $(f \\circ g)(x) = f(g(x))$, untuk mencari nilai $f(5)$ kita memerlukan argumen dalam bernilai 5:\n$$g(x) = 5$$\n$$x + 2 = 5 \\implies x = 3$$',
          formula: 'x = 3',
        },
        {
          title: 'Substitusi x = 3 ke dalam Fungsi Komposisi',
          content:
            'Masukkan $x = 3$ ke dalam rumus $(f \\circ g)(x)$:\n$$(f \\circ g)(3) = f(g(3)) = f(5)$$\n$$f(5) = (3)^2 + 6(3) + 14$$\n$$f(5) = 9 + 18 + 14 = 41$$',
          formula: 'f(5) = 41',
        },
      ],
      keyConcept: 'Evaluasi Nilai Komposisi Fungsi Melalui Substitusi Argumen Dalam',
    },
    hint1: 'Cari nilai $x$ agar $g(x) = 5$, yaitu selesaikan $x + 2 = 5$.',
    hint2: 'Setelah diperoleh $x = 3$, masukkan nilai $x = 3$ ke rumus $(f \\circ g)(x) = x^2 + 6x + 14$.',
    trap: 'Jangan memasukkan $x = 5$ langsung ke $(f \\circ g)(x)$, karena yang dicari adalah $f(5)$, bukan $(f \\circ g)(5)$.',
  },

  {
    id: 'soal-8',
    number: 8,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan terkait operasi hitung sifat bilangan berpangkat (eksponen)',
    subCompetency: 'Sifat Operasi Eksponen & Fotometri Foton',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Manajemen Energi Fotometri Detektor Teleskop Antariksa',
    scenario:
      'Insinyur instrumen antariksa menghitung akumulasi energi foton inframerah yang diserap oleh susunan sensor teleskop observatorium. Diketahui parameter fisis deteksi foton adalah:\n• Fluks foton masuk: $\\Phi = 2^5 \\times 3^3\\text{ satuan}$\n• Durasi integrasi eksposur: $\\tau = 2^{-2} \\times 3^{-1}\\text{ detik}$\n• Efisiensi kuantum detektor: $\\eta = 2^2 \\times 3^1\\text{ koefisien}$\n\nEnergi kotor total yang diserap memenuhi relasi $E = \\Phi \\times \\tau \\times \\eta$ (nano-Joule).\nNamun, akibat dispersi optik dan pembagi saluran berkas, terjadi pelemahan energi dengan faktor pembagi sehingga energi bersih efektif yang tercatat adalah:\n$$E_{\\text{efektif}} = \\frac{E}{2^3 \\times 3^1}$$',
    questionPrompt:
      'Berapakah nilai energi bersih ($E_{\\text{efektif}}$) dalam satuan nano-Joule yang tercatat pada detektor?',
    svgComponentId: 'satellite_power',
    options: [
      { id: 'A', label: 'A', text: '$18\\text{ nJ}$' },
      { id: 'B', label: 'B', text: '$24\\text{ nJ}$' },
      { id: 'C', label: 'C', text: '$36\\text{ nJ}$' },
      { id: 'D', label: 'D', text: '$48\\text{ nJ}$' },
      { id: 'E', label: 'E', text: '$54\\text{ nJ}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Sifat perkalian dan pembagian bilangan berpangkat dengan basis yang sama: $a^m \\times a^n = a^{m+n}$ dan $\\frac{a^m}{a^n} = a^{m-n}$.',
      steps: [
        {
          title: 'Hitung Energi Total Kotor (E)',
          content:
            '$$E = \\Phi \\times \\tau \\times \\eta$$\n$$E = (2^5 \\times 3^3) \\times (2^{-2} \\times 3^{-1}) \\times (2^2 \\times 3^1)$$\nGabungkan eksponen dengan basis 2 dan basis 3:\n$$E = 2^{5 + (-2) + 2} \\times 3^{3 + (-1) + 1} = 2^5 \\times 3^3\\text{ nano-Joule}$$',
          formula: 'E = 2^5 \\times 3^3',
        },
        {
          title: 'Hitung Energi Bersih Efektif',
          content:
            '$$E_{\\text{efektif}} = \\frac{2^5 \\times 3^3}{2^3 \\times 3^1} = 2^{5 - 3} \\times 3^{3 - 1} = 2^2 \\times 3^2$$\n$$E_{\\text{efektif}} = 4 \\times 9 = 36\\text{ nano-Joule}$$',
          formula: 'E_{\\text{efektif}} = 36\\text{ nano-Joule}',
        },
      ],
      keyConcept: 'Sifat Operasi Perkalian dan Pembagian Eksponen Basis Sama',
    },
    hint1: 'Jumlahkan semua pangkat untuk basis 2, lalu jumlahkan semua pangkat untuk basis 3.',
    hint2: 'Kurangkan hasil pangkat tersebut dengan pangkat pembagi pada penyebut ($2^3 \\times 3^1$).',
    trap: 'Perhatikan tanda negatif pada pangkat $2^{-2}$ dan $3^{-1}$ agar tidak keliru dijumlahkan sebagai bilangan positif.',
  },

  {
    id: 'soal-9',
    number: 9,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan terkait pola susunan konsentris barisan geometri',
    subCompetency: 'Pola Barisan Geometri Heliostat Konsentris (PGK MCMA)',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_mcma',
    title: 'Penataan Cermin Heliostat Pembangkit Surya Termal (CSP)',
    scenario:
      'Sebuah menara penerima energi surya termal (Concentrated Solar Power) dikelilingi oleh barisan cermin pemantul datar (heliostat) yang ditata dalam susunan cincin konsentris melingkar dari dalam ke luar:\n• Cincin pertama (terdalam dekat menara) memuat 12 unit cermin.\n• Cincin kedua memuat 24 unit cermin.\n• Penataan modul konsentris tersebut terus dilanjutkan ke cincin-cincin berikutnya mengikuti pola barisan geometri dengan rasio tetap.',
    questionPrompt:
      'Tentukan manakah banyak unit cermin yang MUNGKIN pada salah satu susunan cincin berikutnya? (Pilih semua jawaban yang benar, jawaban benar lebih dari satu)',
    svgComponentId: 'concentric_solar',
    options: [
      { id: 'opt1', label: '1', text: '36 unit cermin' },
      { id: 'opt2', label: '2', text: '48 unit cermin' },
      { id: 'opt3', label: '3', text: '72 unit cermin' },
      { id: 'opt4', label: '4', text: '96 unit cermin' },
    ],
    correctAnswer: ['opt2', 'opt4'],
    explanation: {
      summary:
        'Pola cincin konsentris membentuk barisan geometri dengan suku awal $U_1 = 12$ dan rasio $r = 2$. Suku-suku berikutnya adalah $U_3 = 48$, $U_4 = 96$, dst.',
      steps: [
        {
          title: 'Tentukan Rasio Barisan Geometri',
          content:
            '• Suku pertama: $U_1 = 12$\n• Suku kedua: $U_2 = 24$\n$$r = \\frac{U_2}{U_1} = \\frac{24}{12} = 2$$',
          formula: 'r = 2',
        },
        {
          title: 'Hitung Suku-Suku Selanjutnya',
          content:
            '• Cincin ke-3 ($U_3$): $U_2 \\times 2 = 24 \\times 2 = 48\\text{ unit}$ **(Opsi 2 BENAR)**\n• Cincin ke-4 ($U_4$): $U_3 \\times 2 = 48 \\times 2 = 96\\text{ unit}$ **(Opsi 4 BENAR)**\nNilai 36 dan 72 bukan anggota barisan geometri berasio 2 dari suku awal 12.',
        },
      ],
      keyConcept: 'Penentuan Suku Barisan Geometri Un = a · r^(n-1)',
    },
    hint1: 'Cari rasio geometri dengan membagi suku kedua dengan suku pertama: $r = 24 / 12 = 2$.',
    hint2: 'Kalikan 24 dengan 2 untuk suku ke-3, lalu kalikan lagi dengan 2 untuk suku ke-4.',
    trap: 'Angka 36 adalah jebakan deret aritmetika ($12 + 12 + 12 = 36$), padahal pola soal adalah barisan geometri berlipat ganda.',
  },

  {
    id: 'soal-10',
    number: 10,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan terkait menyederhanakan dan merasionalkan bentuk akar',
    subCompetency: 'Merasionalkan Penyebut Bentuk Akar Campuran',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pg_single',
    title: 'Kalkulasi Koefisien Redaman Hidrolik Jembatan Gantung',
    scenario:
      'Dalam analisis respon dinamika peredam getaran seismik pada tiang jembatan gantung kabel penahan beban angin, rasio koefisien redaman hidrolik dinyatakan dalam pecahan bentuk akar:\n$$\\frac{3 + \\sqrt{3}}{\\sqrt{6} - \\sqrt{2}}$$',
    questionPrompt:
      'Bentuk rasional yang paling sederhana dari nilai rasio koefisien redaman tersebut adalah ....',
    svgComponentId: 'waveguide_impedance',
    options: [
      { id: 'A', label: 'A', text: '$\\frac{2\\sqrt{6} - 3\\sqrt{2}}{2}$' },
      { id: 'B', label: 'B', text: '$\\frac{2\\sqrt{6} + 3\\sqrt{2}}{2}$' },
      { id: 'C', label: 'C', text: '$\\frac{3\\sqrt{6} + 2\\sqrt{2}}{2}$' },
      { id: 'D', label: 'D', text: '$\\frac{2\\sqrt{6} + 3\\sqrt{2}}{4}$' },
      { id: 'E', label: 'E', text: '$\\sqrt{6} + \\sqrt{2}$' },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        'Merasionalkan penyebut dilakukan dengan mengalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{6} + \\sqrt{2})$.',
      steps: [
        {
          title: 'Kalikan dengan Bentuk Sekawan Penyebut',
          content:
            '$$\\frac{3 + \\sqrt{3}}{\\sqrt{6} - \\sqrt{2}} \\times \\frac{\\sqrt{6} + \\sqrt{2}}{\\sqrt{6} + \\sqrt{2}}$$',
        },
        {
          title: 'Jabarkan Pembilang dan Penyebut',
          content:
            'Penyebut:\n$$(\\sqrt{6})^2 - (\\sqrt{2})^2 = 6 - 2 = 4$$\nPembilang:\n$$(3 + \\sqrt{3})(\\sqrt{6} + \\sqrt{2}) = 3\\sqrt{6} + 3\\sqrt{2} + \\sqrt{18} + \\sqrt{6}$$\nKarena $\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$:\n$$\\text{Pembilang} = (3\\sqrt{6} + \\sqrt{6}) + (3\\sqrt{2} + 3\\sqrt{2}) = 4\\sqrt{6} + 6\\sqrt{2}$$',
        },
        {
          title: 'Sederhanakan dengan Membagi Penyebut 4',
          content:
            '$$\\frac{4\\sqrt{6} + 6\\sqrt{2}}{4} = \\frac{2(2\\sqrt{6} + 3\\sqrt{2})}{4} = \\frac{2\\sqrt{6} + 3\\sqrt{2}}{2}$$',
          formula: '\\frac{2\\sqrt{6} + 3\\sqrt{2}}{2}',
        },
      ],
      keyConcept: 'Merasionalkan Penyebut Bentuk Sekawan (a - b)(a + b) = a² - b²',
    },
    hint1: 'Sekawan dari penyebut $(\\sqrt{6} - \\sqrt{2})$ adalah $(\\sqrt{6} + \\sqrt{2})$.',
    hint2: 'Ingat bahwa $\\sqrt{18} = 3\\sqrt{2}$, lalu kumpulkan suku-suku sejenis $\\sqrt{6}$ dan $\\sqrt{2}$.',
    trap: 'Jangan lupa membagi seluruh koefisien pembilang (4 dan 6) dengan faktor persekutuan 2 saat menyederhanakan pecahan.',
  },

  {
    id: 'soal-11',
    number: 11,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan pertumbuhan dan peluruhan geometri bertingkat',
    subCompetency: 'Pertumbuhan & Pemanenan Periodik Diskrit',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Kultur Mikroalga Bio-Avtur dengan Pemanenan Berkala',
    scenario:
      'Di laboratorium bioteknologi terbarukan, kultur mikroalga dibudidayakan di dalam fotobioreaktor. Setiap 12 jam (setengah hari), populasi sel mikroalga membelah diri menjadi 2 kali lipat. Pada awal inokulasi (Hari 0), terdapat 3 juta sel aktif.\n\nNamun, untuk mempertahankan nutrisi media cair, sistem penyaringan otomatis melakukan pemanenan berkala: setiap tepat 2 hari sekali, sebesar $\\frac{1}{4}$ dari total sel yang ada dipanen (dikeluarkan dari fotobioreaktor).',
    questionPrompt:
      'Berapakah banyak sel mikroalga aktif yang tersisa di dalam fotobioreaktor setelah tepat 3 hari?',
    svgComponentId: 'microservice_replication',
    options: [
      { id: 'A', label: 'A', text: '$72\\text{ juta sel}$' },
      { id: 'B', label: 'B', text: '$96\\text{ juta sel}$' },
      { id: 'C', label: 'C', text: '$108\\text{ juta sel}$' },
      { id: 'D', label: 'D', text: '$144\\text{ juta sel}$' },
      { id: 'E', label: 'E', text: '$192\\text{ juta sel}$' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Hitung pertumbuhan eksponensial populasi hingga hari ke-2, kurangkan seperempat bagian yang dipanen, lalu lanjutkan pertumbuhan eksponensial hingga hari ke-3.',
      steps: [
        {
          title: 'Pertumbuhan Hingga Tepat Hari ke-2',
          content:
            'Setiap 0,5 hari populasi berlipat dua ($r=2$):\n• Hari 0: 3 juta\n• Hari 0,5: $3 \\times 2 = 6\\text{ juta}$\n• Hari 1,0: $6 \\times 2 = 12\\text{ juta}$\n• Hari 1,5: $12 \\times 2 = 24\\text{ juta}$\n• Hari 2,0: $24 \\times 2 = 48\\text{ juta sel}$',
        },
        {
          title: 'Terapkan Pemanenan Rutin pada Hari ke-2',
          content:
            'Dipanen sebesar $\\frac{1}{4}$ dari 48 juta sel:\n$$\\text{Dipanen} = \\frac{1}{4} \\times 48 = 12\\text{ juta sel}$$\n$$\\text{Tersisa} = 48 - 12 = 36\\text{ juta sel}$$',
          formula: 'N(2) = 36\\text{ juta}',
        },
        {
          title: 'Lanjutkan Pertumbuhan Hingga Hari ke-3',
          content:
            'Dari hari ke-2 ke hari ke-3 terdapat 2 siklus pembelahan (tiap 12 jam):\n• Hari 2,5: $36 \\times 2 = 72\\text{ juta sel}$\n• Hari 3,0: $72 \\times 2 = 144\\text{ juta sel}$',
          formula: 'N(3) = 144\\text{ juta}',
        },
      ],
      keyConcept: 'Pertumbuhan Geometri Bertingkat dengan Pengurangan Diskrit Periodik',
    },
    hint1: 'Dalam 2 hari pertama terjadi 4 kali pembelahan (tiap 12 jam). Hitung $3 \\times 2^4$.',
    hint2: 'Kurangkan 1/4 bagian dari hasil hari ke-2, lalu kalikan 2 sebanyak dua kali lagi hingga hari ke-3.',
    trap: 'Jangan menghitung pengurangan 1/4 di hari ke-3, karena pemanenan hanya berlangsung tepat setiap 2 hari sekali (hari ke-2).',
  },

  {
    id: 'soal-12',
    number: 12,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan deret aritmetika dengan tumpang tindih sambungan',
    subCompetency: 'Deret Aritmetika Modul Sambungan Overlap',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Pemasangan Pipa Transmisi Panas Bumi dengan Overlap Soket',
    scenario:
      'Insinyur pembangkit listrik panas bumi (geothermal) memasang jalur pipa bawah tanah tahan tekanan tinggi dengan menyambung beberapa segmen pipa baja lurus berukuran sama. Setiap sambungan menggunakan soket ekspansi di mana ujung pipa masuk sebagian (*overlap*) ke dalam pipa sebelumnya, sehingga panjang total jalur pipa mengalami pertambahan tetap.\n\nData telemetri instalasi menunjukkan:\n• 1 segmen pipa mandiri = $500\\text{ cm}$\n• 2 segmen pipa tersambung = $988\\text{ cm}$\n• 3 segmen pipa tersambung = $1.476\\text{ cm}$',
    questionPrompt:
      'Berapa panjang total jalur pipa transmisi yang terbentuk jika dipasang 10 segmen pipa secara bersambungan?',
    svgComponentId: 'solar_overlap',
    options: [
      { id: 'A', label: 'A', text: '$4.760\\text{ cm}$' },
      { id: 'B', label: 'B', text: '$4.800\\text{ cm}$' },
      { id: 'C', label: 'C', text: '$4.892\\text{ cm}$' },
      { id: 'D', label: 'D', text: '$4.940\\text{ cm}$' },
      { id: 'E', label: 'E', text: '$5.000\\text{ cm}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Panjang sambungan membentuk pola barisan aritmetika dengan suku pertama $a = 500\\text{ cm}$ dan beda pertambahan tetap $b = 488\\text{ cm}$.',
      steps: [
        {
          title: 'Tentukan Nilai Pertambahan Tetap (Beda Deret)',
          content:
            '• Panjang 1 segmen: $L_1 = 500\\text{ cm}$\n• Panjang 2 segmen: $L_2 = 988\\text{ cm} \\implies$ Pertambahan $b = 988 - 500 = 488\\text{ cm}$\n• Panjang 3 segmen: $L_3 = 1.476\\text{ cm} \\implies$ Pertambahan $b = 1.476 - 988 = 488\\text{ cm}$\n(Bagian soket yang saling tumpang tindih (*overlap*) adalah $500 - 488 = 12\\text{ cm}$ pada setiap sambungan).',
          formula: 'b = 488\\text{ cm}',
        },
        {
          title: 'Hitung Panjang untuk 10 Segmen Pipa',
          content:
            'Rumus suku ke-10 barisan aritmetika:\n$$L_n = a + (n - 1)b$$\n$$L_{10} = 500 + (10 - 1) \\times 488$$\n$$L_{10} = 500 + 9 \\times 488 = 500 + 4.392 = 4.892\\text{ cm}$$',
          formula: 'L_{10} = 4.892\\text{ cm}',
        },
      ],
      keyConcept: 'Pola Barisan Aritmetika Terapan dengan Efek Pengurangan Overlap',
    },
    hint1: 'Hitung selisih antara panjang 2 pipa ($988\\text{ cm}$) dan 1 pipa ($500\\text{ cm}$) untuk menemukan beda $b$.',
    hint2: 'Gunakan rumus barisan aritmetika $U_{10} = a + 9b$ dengan $a = 500$ dan $b = 488$.',
    trap: 'Jangan menghitung $10 \\times 500 = 5.000\\text{ cm}$ tanpa memperhitungkan bagian sambungan soket yang saling tumpang tindih.',
  },

  {
    id: 'soal-13',
    number: 13,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan deret aritmetika bertahap dengan beban pengurang',
    subCompetency: 'Deret Aritmetika Bertahap dengan Hambatan Diskrit (PGK Kategori)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_kategori',
    title: 'Perencanaan Modal Startup Satelit Maritim dengan Hambatan Biaya',
    scenario:
      'Ibu Ratna merintis startup satelit nano pelacak kapal nelayan dengan target modal operasional Rp300.000.000,00 dalam 12 bulan. Modal awal yang telah disetor investor ventura adalah Rp60.000.000,00.\n\nUntuk menutup sisa kebutuhan modal, Ibu Ratna menyisihkan laba usaha mulai bulan Januari (bulan ke-1) sebesar Rp8.000.000,00. Karena bisnis bertumbuh, tabungan bulanan direncanakan selalu bertambah tetap sebesar Rp2.000.000,00 setiap bulannya.\n\nNamun terdapat beberapa dinamika finansial:\n1. Pada bulan ke-4 dan bulan ke-8, perusahaan harus membayar biaya sertifikasi izin frekuensi satelit masing-masing sebesar Rp10.000.000,00 yang dipotong langsung dari tabungan.\n2. Mulai bulan ke-7, akibat kenaikan biaya impor komponen, kenaikan tabungan per bulan berkurang 25% dari kenaikan awal (menjadi selalu bertambah Rp1.500.000,00 per bulan).\n3. Syarat peluncuran adalah akumulasi total dana (modal awal ditambah seluruh saldo tabungan bersih) mencapai minimal Rp300.000.000,00 pada akhir bulan ke-12.',
    questionPrompt:
      'Tentukan Benar atau Salah pada setiap pernyataan berikut terkait perencanaan modal Ibu Ratna!',
    svgComponentId: 'robotics_budget_timeline',
    categoryStatements: [
      {
        id: 'A',
        label: 'A',
        statement: 'Dengan kendala yang ada saat ini, Ibu Ratna dapat mencapai target modal Rp300.000.000,00 tepat pada akhir bulan ke-12.',
        correctAnswer: false,
      },
      {
        id: 'B',
        label: 'B',
        statement: 'Jika sama sekali tidak ada penurunan kenaikan tabungan (kenaikan tetap bertambah Rp2.000.000,00 per bulan), target modal Rp300.000.000,00 dapat tercapai.',
        correctAnswer: false,
      },
      {
        id: 'C',
        label: 'C',
        statement: 'Dengan meningkatkan pertambahan tabungan tetap menjadi selalu bertambah Rp2.600.000,00 per bulan tanpa penurunan kenaikan, target modal dapat tercapai.',
        correctAnswer: true,
      },
    ],
    correctAnswer: { A: false, B: false, C: true },
    explanation: {
      summary:
        'Hitung akumulasi tabungan bulanan dengan deret aritmetika bertahap, lalu perhitungkan potongan sertifikasi dan modal awal.',
      steps: [
        {
          title: 'Evaluasi Pernyataan A (Kondisi Riil dengan Penurunan)',
          content:
            '• 6 bulan pertama ($b_1 = 2\\text{ jt}$): Tabungan murni = $6(8) + \\frac{5 \\times 6}{2}(2) = 48 + 30 = 78\\text{ juta}$.\n• 6 bulan kedua ($b_2 = 1{,}5\\text{ jt}$): Tabungan murni = $19{,}5 + 21 + 22{,}5 + 24 + 25{,}5 + 27 = 139{,}5\\text{ juta}$.\n• Total tabungan kotor = $78 + 139{,}5 = 217{,}5\\text{ juta}$.\n• Total saldo akhir = $60 + 217{,}5 - 20 = 257{,}5\\text{ juta} < 300\\text{ juta}$ **(Pernyataan A SALAH)**.',
        },
        {
          title: 'Evaluasi Pernyataan B (Tanpa Penurunan Kenaikan Tabungan)',
          content:
            '• Jika kenaikan tetap $b = 2\\text{ jt}$ selama 12 bulan:\n$$S_{12} = 12(8) + \\frac{11 \\times 12}{2}(2) = 96 + 132 = 228\\text{ juta}$$\n• Saldo akhir = $60 + 228 - 20 = 268\\text{ juta} < 300\\text{ juta}$ **(Pernyataan B SALAH)**.',
        },
        {
          title: 'Evaluasi Pernyataan C (Kenaikan Diperbesar Menjadi Rp2,6 Juta)',
          content:
            '• Jika $b = 2{,}6\\text{ jt}$ per bulan:\n$$S_{12} = 96 + 66(2{,}6) = 96 + 171{,}6 = 267{,}6\\text{ juta}$$\n• Saldo akhir = $60 + 267{,}6 - 20 = 307{,}6\\text{ juta} \\ge 300\\text{ juta}$ **(Pernyataan C BENAR)**.',
        },
      ],
      keyConcept: 'Akumulasi Deret Aritmetika Bertahap dengan Penyesuaian Beda dan Pengurang',
    },
    hint1: 'Gunakan rumus jumlah suku deret aritmetika $S_n = n \\cdot a + \\frac{n(n-1)}{2}b$.',
    hint2: 'Kurangkan biaya sertifikasi total 20 juta (10 juta di bulan 4 dan 10 juta di bulan 8) dari saldo.',
    trap: 'Jangan lupa menambahkan modal awal Rp60.000.000,00 ke dalam akumulasi modal akhir.',
  },

  {
    id: 'soal-14',
    number: 14,
    module: 'Barisan & Deret',
    competency: 'Menyelesaikan permasalahan terkait pola barisan dan deret geometri bertingkat',
    subCompetency: 'Pola Barisan Geometri Pengujian Beban Dinamis',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Uji Ketahanan Tarik Kabel Sling Derek Pelabuhan Otonom',
    scenario:
      'Dalam sertifikasi kekuatan material tali baja sling komposit derek peti kemas pelabuhan otonom, tim insinyur material melakukan uji beban tarik berulang secara bertahap menggunakan load-cell digital.\n\nBeban tarik diaplikasikan berurutan pada setiap tahap pengujian. Pada tiga tahap pengujian pertama, besar beban uji yang diberikan berturut-turut adalah $300\\text{ kg}$, $600\\text{ kg}$, dan $1.200\\text{ kg}$. Tim mencatat bahwa pembebanan direncanakan konsisten berlipat ganda mengikuti pola barisan geometri hingga batas kritis.',
    questionPrompt:
      'Berdasarkan pola pembebanan tersebut, besar beban uji pada tahap ke-4, ke-5, dan ke-6 berturut-turut adalah ....',
    svgComponentId: 'drone_stress_test',
    options: [
      { id: 'A', label: 'A', text: '$1.800\\text{ kg},\\; 2.400\\text{ kg},\\; 3.000\\text{ kg}$' },
      { id: 'B', label: 'B', text: '$2.400\\text{ kg},\\; 3.600\\text{ kg},\\; 4.800\\text{ kg}$' },
      { id: 'C', label: 'C', text: '$2.400\\text{ kg},\\; 4.800\\text{ kg},\\; 7.200\\text{ kg}$' },
      { id: 'D', label: 'D', text: '$2.400\\text{ kg},\\; 4.800\\text{ kg},\\; 9.600\\text{ kg}$' },
      { id: 'E', label: 'E', text: '$2.400\\text{ kg},\\; 4.800\\text{ kg},\\; 19.200\\text{ kg}$' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Pola pembebanan membentuk barisan geometri dengan suku awal $a = 300\\text{ kg}$ dan rasio $r = 2$.',
      steps: [
        {
          title: 'Tentukan Rasio Barisan Geometri',
          content:
            '$$r = \\frac{U_2}{U_1} = \\frac{600}{300} = 2$$\n$$r = \\frac{U_3}{U_2} = \\frac{1.200}{600} = 2$$',
          formula: 'r = 2',
        },
        {
          title: 'Hitung Beban Tahap ke-4, ke-5, dan ke-6',
          content:
            '• Tahap ke-4 ($U_4$): $U_3 \\times 2 = 1.200 \\times 2 = 2.400\\text{ kg}$\n• Tahap ke-5 ($U_5$): $U_4 \\times 2 = 2.400 \\times 2 = 4.800\\text{ kg}$\n• Tahap ke-6 ($U_6$): $U_5 \\times 2 = 4.800 \\times 2 = 9.600\\text{ kg}$',
          formula: 'U_4 = 2.400,\\; U_5 = 4.800,\\; U_6 = 9.600',
        },
      ],
      keyConcept: 'Penentuan Suku Barisan Geometri Un = a · r^(n-1)',
    },
    hint1: 'Rasio barisan adalah $600 / 300 = 2$.',
    hint2: 'Kalikan setiap suku dengan 2 secara berturut-turut untuk mencari suku-suku berikutnya.',
    trap: 'Opsi C mengecoh dengan pola pertambahan kelipatan ($2.400 \\to 4.800 \\to 7.200$), padahal suku ke-6 adalah $4.800 \\times 2 = 9.600$.',
  },

  {
    id: 'soal-15',
    number: 15,
    module: 'Fungsi & Relasi',
    competency: 'Menyelesaikan permasalahan terkait karakteristik dan representasi grafik fungsi kuadrat',
    subCompetency: 'Analisis Titik Puncak, Arah Terbuka, & Kuadran Parabola (PGK Kategori)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_kategori',
    title: 'Karakteristik Kurva Tekanan Termal Kapsul Masuk Atmosfer',
    scenario:
      'Tekanan termal dinamis pada pelindung panas modul kapsul antariksa saat tahap masuk kembali ke atmosfer (re-entry) dimodelkan oleh fungsi kuadrat:\n$$f(x) = 3(x^2 - 6x + 5)$$\natau dalam bentuk standar $f(x) = 3x^2 - 18x + 15$, dengan $x$ menyatakan waktu lintasan (detik) dan $f(x)$ dalam kilo-Pascal (kPa).',
    questionPrompt:
      'Tentukan Benar atau Salah pada setiap pernyataan berikut yang terkait dengan karakteristik grafik fungsi kuadrat $f(x)$!',
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
        statement: 'Grafik fungsi $f$ memotong garis horizontal $y = -15$.',
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
        'Sifat kurva parabola dianalisis dari tanda koefisien kuadrat $a$, ordinat titik puncak minimum $y_p$, serta nilai fungsi untuk domain absis negatif.',
      steps: [
        {
          title: 'Analisis Arah Parabola (Koefisien a)',
          content:
            'Fungsi $f(x) = 3x^2 - 18x + 15$ memiliki koefisien kuadrat $a = 3 > 0$.\nKarena $a > 0$, kurva parabola terbuka ke atas (cekung ke atas) **(Pernyataan A BENAR)**.',
        },
        {
          title: 'Hitung Koordinat Titik Puncak (Nilai Minimum)',
          content:
            '$$x_p = -\\frac{b}{2a} = -\\frac{-18}{2(3)} = \\frac{18}{6} = 3$$\n$$y_p = f(3) = 3(3^2 - 6(3) + 5) = 3(9 - 18 + 5) = 3(-4) = -12$$\nNilai minimum mutlak kurva adalah $-12$. Karena garis horizontal $y = -15$ berada di bawah nilai $-12$, kurva tidak pernah menyentuh maupun memotong garis $y = -15$ **(Pernyataan B SALAH)**.',
          formula: 'y_{\\min} = -12',
        },
        {
          title: 'Analisis Lintasan Kuadran III',
          content:
            'Kuadran III didefinisikan sebagai daerah dengan $x < 0$ dan $y < 0$.\nPerhatikan untuk $x \\le 0$:\n$$f(x) = 3(x - 1)(x - 5)$$\nJika $x < 0$, maka faktor $(x - 1) < 0$ dan $(x - 5) < 0$. Hasil kali dua bilangan negatif adalah positif, sehingga $f(x) > 0$.\nKarena untuk semua $x < 0$ nilai $y = f(x)$ selalu bernilai positif, tidak ada titik grafik di Kuadran III **(Pernyataan C BENAR)**.',
        },
      ],
      keyConcept: 'Karakteristik Kurva Parabola: Arah Cekung, Titik Puncak, dan Domain Kuadran',
    },
    hint1: 'Parabola dengan $a > 0$ selalu terbuka ke atas dan memiliki nilai ekstrem minimum di puncak.',
    hint2: 'Hitung nilai minimum $y_p = f(-b/2a) = f(3)$. Bandingkan dengan garis $y = -15$.',
    trap: 'Periksa tanda perkalian faktor $(x-1)(x-5)$ ketika $x < 0$ untuk membuktikan bahwa kurva selalu berada di atas sumbu X saat $x$ negatif.',
  },

  // =========================================================================
  // BATCH 3: GEOMETRI DIMENSI TIGA, BANGUN DATAR & TRIGONOMETRI
  // =========================================================================
  {
    id: 'soal-16',
    number: 16,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan optimasi terkait volume dan luas permukaan bangun ruang',
    subCompetency: 'Optimasi Jaring-Jaring Lembaran Terbuka via Turunan',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Fabrikasi Wadah Pendingin Baterai EV dari Lembaran Aluminium',
    scenario:
      'Insinyur manufaktur kendaraan listrik merancang bak wadah penampung cairan pendingin baterai tanpa tutup dari selembar pelat aluminium berbentuk persegi berukuran $60\\text{ cm} \\times 60\\text{ cm}$.\n\nBak dibuat dengan cara memotong empat bujur sangkar identik bersisi $x\\text{ cm}$ di setiap sudut lembaran pelat, lalu melipat keempat sisi tegaknya ke atas.',
    questionPrompt:
      'Volume bak penampung terbesar (maksimum) yang dapat dihasilkan dari lembaran aluminium tersebut adalah ....',
    svgComponentId: 'box_optimization',
    options: [
      { id: 'A', label: 'A', text: '$12.000\\text{ cm}^3$' },
      { id: 'B', label: 'B', text: '$14.400\\text{ cm}^3$' },
      { id: 'C', label: 'C', text: '$16.000\\text{ cm}^3$' },
      { id: 'D', label: 'D', text: '$18.000\\text{ cm}^3$' },
      { id: 'E', label: 'E', text: '$24.000\\text{ cm}^3$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Volume bak dimodelkan sebagai fungsi aljabar terhadap tinggi lipatan $x$. Nilai volume maksimum diperoleh ketika turunan pertama fungsi $V\'(x) = 0$.',
      steps: [
        {
          title: 'Pemodelan Fungsi Volume Bak',
          content:
            'Setelah keempat sudut dipotong sepanjang $x$:\n• Panjang alas bak = $60 - 2x$\n• Lebar alas bak = $60 - 2x$\n• Tinggi bak = $x$\nFungsi volume bak:\n$$V(x) = x(60 - 2x)^2 = x(3.600 - 240x + 4x^2) = 4x^3 - 240x^2 + 3.600x$$',
          formula: 'V(x) = 4x^3 - 240x^2 + 3.600x',
        },
        {
          title: 'Syarat Nilai Ekstrem (Turunan Pertama Sama dengan Nol)',
          content:
            '$$V\'(x) = 12x^2 - 480x + 3.600 = 0$$\nBagi kedua ruas dengan 12:\n$$x^2 - 40x + 300 = 0$$\n$$(x - 10)(x - 30) = 0$$\nDiperoleh $x = 10$ atau $x = 30$. Karena domain fisik menghendaki $x < 30$ (jika $x = 30$, panjang alas menjadi 0), maka tinggi potongan optimal adalah $x = 10\\text{ cm}$.',
          formula: 'x = 10\\text{ cm}',
        },
        {
          title: 'Hitung Volume Maksimum',
          content:
            'Substitusikan $x = 10$ ke dalam fungsi volume:\n$$V(10) = 10 \\times (60 - 2(10))^2 = 10 \\times (40)^2 = 10 \\times 1.600 = 16.000\\text{ cm}^3$$',
          formula: 'V_{\\max} = 16.000\\text{ cm}^3',
        },
      ],
      keyConcept: 'Aplikasi Turunan Pertama untuk Menentukan Nilai Ekstrem Maksimum',
    },
    hint1: 'Dimensi kotak adalah panjang $(60 - 2x)$, lebar $(60 - 2x)$, dan tinggi $x$.',
    hint2: 'Turunkan fungsi volume $V(x) = 4x^3 - 240x^2 + 3600x$ lalu buat sama dengan nol.',
    trap: 'Akar $x = 30$ adalah pembuat volume minimum (nol), nilai yang menghasilkan volume maksimum adalah $x = 10$.',
  },

  {
    id: 'soal-17',
    number: 17,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait kesebangunan atau kekongruenan bangun datar',
    subCompetency: 'Kesebangunan Segitiga Rangka Truss Garis Sejajar',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Rangka Penopang Busur Baja Jembatan Kereta Cepat',
    scenario:
      'Perhatikan struktur rangka baja penopang jembatan kereta cepat berbentuk segitiga bertingkat dengan puncak simpul $A$. Balok penopang horizontal $BC, DE, FG,$ dan $HI$ dipasang saling sejajar ($BC \\parallel DE \\parallel FG \\parallel HI$). Sisi miring kiri memuat segmen berturut-turut $A-B-D-F-H$ dan sisi miring kanan memuat segmen $A-C-E-G-I$.',
    questionPrompt:
      'Berdasarkan teorema kesebangunan geometri, manakah pasangan perbandingan segmen garis yang memiliki nilai rasio yang sama dengan rasio $\\frac{AB}{AC}$?',
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
        'Segitiga $\\triangle ABC$ sebangun dengan segitiga $\\triangle ADE$ karena ketiga sudut yang bersesuaian sama besar akibat garis sejajar ($AA$ Similarity). Oleh karena itu, perbandingan sisi seletak yang bersesuaian bernilai konstan.',
      steps: [
        {
          title: 'Kesebangunan Segitiga Bertingkat',
          content:
            'Karena $BC \\parallel DE$, maka:\n• $\\angle ABC = \\angle ADE$ (Sudut sehadap)\n• $\\angle ACB = \\angle AED$ (Sudut sehadap)\n• $\\angle A$ sudut bersama\nMaka segitiga $\\triangle ABC \\sim \\triangle ADE$.',
        },
        {
          title: 'Hubungan Rasio Sisi Bersesuaian',
          content:
            'Berdasarkan kesebangunan $\\triangle ABC \\sim \\triangle ADE$, berlaku perbandingan sisi seletak:\n$$\\frac{AB}{AD} = \\frac{AC}{AE} = \\frac{BC}{DE}$$\nDengan menukar letak suku tengah (*alternendo*):\n$$\\frac{AB}{AC} = \\frac{AD}{AE}$$',
          formula: '\\frac{AB}{AC} = \\frac{AD}{AE}',
        },
      ],
      keyConcept: 'Teorema Kesebangunan Sisi Seletak pada Garis Sejajar Segitiga',
    },
    hint1: 'Segitiga kecil $\\triangle ABC$ sebangun dengan segitiga yang lebih besar $\\triangle ADE$.',
    hint2: 'Tuliskan persamaan perbandingan sisi seletak $\\frac{AB}{AD} = \\frac{AC}{AE}$, lalu tukar letak silang ruas.',
    trap: 'Rasio $\\frac{BC}{DE}$ sama dengan $\\frac{AB}{AD}$, bukan sama dengan $\\frac{AB}{AC}$.',
  },

  {
    id: 'soal-18',
    number: 18,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait luas permukaan prisma dan jaring-jaring bahan',
    subCompetency: 'Efisiensi Pola Jaring-Jaring Lembaran Karton Laminasi',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Fabrikasi Kotak Kemasan Pelindung Modul Baterai Drone',
    scenario:
      'Pabrik perlengkapan drone mencetak kotak pelindung berbentuk prisma segitiga (alas segitiga sama kaki alas $a = 6\\text{ cm}$, tinggi segitiga $t = 4\\text{ cm}$, panjang sisi miring segitiga $s = 5\\text{ cm}$, dan tinggi prisma $T = 15\\text{ cm}$). Pola jaring-jaring utuh dicetak pada lembaran karton laminasi tahan lembap.\n\nPilihan lembaran karton yang tersedia:\n• Tipe Reguler: ukuran $40\\text{ cm} \\times 60\\text{ cm}$ (harga Rp5.000,00/lembar, memuat 2 pola jaring-jaring utuh)\n• Tipe Jumbo: ukuran $80\\text{ cm} \\times 120\\text{ cm}$ (harga Rp16.000,00/lembar, memuat 8 pola jaring-jaring utuh)',
    questionPrompt:
      'Dengan total anggaran penyediaan lembaran karton maksimal Rp1.600.000,00, berapakah paling banyak kotak kemasan pelindung yang dapat diproduksi?',
    svgComponentId: 'sensor_shield_packaging',
    options: [
      { id: 'A', label: 'A', text: '600 kotak kemasan' },
      { id: 'B', label: 'B', text: '640 kotak kemasan' },
      { id: 'C', label: 'C', text: '720 kotak kemasan' },
      { id: 'D', label: 'D', text: '800 kotak kemasan' },
      { id: 'E', label: 'E', text: '960 kotak kemasan' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Hitung efisiensi biaya per unit kemasan untuk kedua opsi lembaran karton berdasarkan anggaran yang tersedia.',
      steps: [
        {
          title: 'Kalkulasi Opsi Lembaran Tipe Reguler',
          content:
            '• Banyak lembar yang terbeli: $\\frac{1.600.000}{5.000} = 320\\text{ lembar}$\n• Total kemasan yang dihasilkan: $320 \\times 2 = 640\\text{ kotak}$\n• Biaya bahan per unit = $\\frac{5.000}{2} = \\text{Rp}2.500\\text{/kotak}$',
        },
        {
          title: 'Kalkulasi Opsi Lembaran Tipe Jumbo',
          content:
            '• Banyak lembar yang terbeli: $\\frac{1.600.000}{16.000} = 100\\text{ lembar}$\n• Total kemasan yang dihasilkan: $100 \\times 8 = 800\\text{ kotak}$\n• Biaya bahan per unit = $\\frac{16.000}{8} = \\text{Rp}2.000\\text{/kotak}$',
        },
        {
          title: 'Bandingkan dan Pilih Nilai Maksimum',
          content:
            'Karena karton Tipe Jumbo memiliki efisiensi biaya yang lebih hemat (Rp2.000 vs Rp2.500 per kotak), jumlah kemasan maksimum yang dapat dibuat adalah **800 kotak kemasan**.',
          formula: 'N_{\\max} = 800\\text{ kotak}',
        },
      ],
      keyConcept: 'Optimasi Efisiensi Biaya Satuan pada Layout Pola Jaring-Jaring',
    },
    hint1: 'Bandingkan kapasitas cetak dari anggaran Rp1.600.000,00 untuk kedua jenis ukuran lembaran karton.',
    hint2: 'Untuk lembaran Jumbo: $\\frac{1.600.000}{16.000} = 100$ lembar. Kalikan dengan 8 pola per lembar.',
    trap: 'Opsi B (640 kotak) adalah hasil dari lembaran Reguler yang memiliki efisiensi lebih rendah dibanding lembaran Jumbo.',
  },

  {
    id: 'soal-19',
    number: 19,
    module: 'Trigonometri',
    competency: 'Menyelesaikan permasalahan terkait perbandingan trigonometri di berbagai kuadran',
    subCompetency: 'Rasio Trigonometri Sudut Tumpul (Kuadran II) Berparameter',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pg_single',
    title: 'Orientasi Sudut Simpangan Sensor Seismograf Gempa',
    scenario:
      'Dalam kalibrasi sensor pendulum seismometer digital frekuensi rendah, arah defleksi ayunan membentuk sudut fase $A$ pada Kuadran II ($90^\\circ < A < 180^\\circ$). Sinyal optik membaca nilai perbandingan sinus dari sudut simpangan tersebut adalah $\\sin A = \\frac{1}{k}$, dengan $k > 1$.',
    questionPrompt:
      'Nilai perbandingan kosinus dari sudut simpangan tersebut ($\\cos A$) dinyatakan dalam peubah $k$ adalah ....',
    svgComponentId: 'trig_quadrant_2',
    options: [
      { id: 'A', label: 'A', text: '$\\frac{k}{\\sqrt{k^2 + 1}}$' },
      { id: 'B', label: 'B', text: '$\\frac{\\sqrt{k^2 - 1}}{k}$' },
      { id: 'C', label: 'C', text: '$-\\frac{\\sqrt{k^2 - 1}}{k}$' },
      { id: 'D', label: 'D', text: '$-\\frac{1}{\\sqrt{k^2 - 1}}$' },
      { id: 'E', label: 'E', text: '$-\\frac{\\sqrt{k^2 + 1}}{k}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Pada Kuadran II ($90^\\circ < A < 180^\\circ$), nilai sinus bertanda positif, sedangkan nilai kosinus selalu bertanda negatif.',
      steps: [
        {
          title: 'Gunakan Identitas Dasar Pythagoras Trigonometri',
          content:
            '$$\\cos^2 A = 1 - \\sin^2 A = 1 - \\left(\\frac{1}{k}\\right)^2 = \\frac{k^2 - 1}{k^2}$$',
        },
        {
          title: 'Tentukan Tanda Berdasarkan Kuadran II',
          content:
            'Karena sudut $A$ berada di Kuadran II, maka $\\cos A < 0$:\n$$\\cos A = -\\sqrt{\\frac{k^2 - 1}{k^2}} = -\\frac{\\sqrt{k^2 - 1}}{k}$$',
          formula: '\\cos A = -\\frac{\\sqrt{k^2 - 1}}{k}',
        },
      ],
      keyConcept: 'Aturan Tanda Kuadran Trigonometri: ASTC (All, Sin, Tan, Cos)',
    },
    hint1: 'Identitas Pythagoras trigonometri menyatakan bahwa $\\cos^2 A = 1 - \\sin^2 A$.',
    hint2: 'Ingat bahwa pada Kuadran II ($90^\\circ < A < 180^\\circ$), nilai kosinus bertanda negatif.',
    trap: 'Opsi B mengecoh siswa yang lupa menyematkan tanda negatif untuk perbandingan kosinus di Kuadran II.',
  },

  {
    id: 'soal-20',
    number: 20,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait jarak antar objek geometri pada bangun ruang',
    subCompetency: 'Jarak Titik Sudut ke Titik Pusat Bidang Kubus',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Jarak Antena Pemancar ke Titik Kalibrasi Kamar Uji EMC Kubus',
    scenario:
      'Ruang uji interferensi gelombang frekuensi radio dirancang berbentuk kubus sempurna $ABCD.EFGH$ dengan panjang rusuk ruang $10\\text{ meter}$. Modul antena pemancar dipasang di titik sudut atap $G$. Sementara itu, titik sensor penerima referensi $O$ diletakkan tepat di titik perpotongan diagonal lantai dasar $AC$ dan $BD$.',
    questionPrompt:
      'Berapakah jarak lurus dari titik antena pemancar $G$ ke titik sensor referensi $O$?',
    svgComponentId: 'cube_3d_frame',
    options: [
      { id: 'A', label: 'A', text: '$5\\sqrt{2}\\text{ meter}$' },
      { id: 'B', label: 'B', text: '$5\\sqrt{3}\\text{ meter}$' },
      { id: 'C', label: 'C', text: '$5\\sqrt{6}\\text{ meter}$' },
      { id: 'D', label: 'D', text: '$10\\sqrt{2}\\text{ meter}$' },
      { id: 'E', label: 'E', text: '$10\\sqrt{3}\\text{ meter}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Jarak dari titik sudut atap $G$ ke titik pusat lantai $O$ dihitung menggunakan teorema Pythagoras pada segitiga siku-siku $\\triangle GCO$.',
      steps: [
        {
          title: 'Identifikasi Sisi-Sisi Segitiga Siku-Siku $\\triangle GCO$',
          content:
            '• Rusuk tegak $GC = 10\\text{ meter}$\n• Setengah diagonal bidang alas $CO = \\frac{1}{2} \\times AC = \\frac{1}{2} \\times 10\\sqrt{2} = 5\\sqrt{2}\\text{ meter}$',
        },
        {
          title: 'Kalkulasi Panjang Sisi Miring GO Menggunakan Pythagoras',
          content:
            '$$GO = \\sqrt{GC^2 + CO^2} = \\sqrt{10^2 + (5\\sqrt{2})^2}$$\n$$GO = \\sqrt{100 + 25 \\times 2} = \\sqrt{100 + 50} = \\sqrt{150}$$\n$$GO = \\sqrt{25 \\times 6} = 5\\sqrt{6}\\text{ meter}$$',
          formula: 'GO = 5\\sqrt{6}\\text{ meter}',
        },
      ],
      keyConcept: 'Aplikasi Teorema Pythagoras Ruang pada Dimensi Tiga',
    },
    hint1: 'Tarik garis tegak dari titik $G$ ke titik $C$ pada lantai dasar sehingga membentuk segitiga siku-siku $\\triangle GCO$.',
    hint2: 'Diagonal bidang alas adalah $10\\sqrt{2}$, sehingga panjang $CO$ adalah setengahnya ($5\\sqrt{2}$).',
    trap: 'Jangan menyamakan jarak ini dengan diagonal ruang kubus ($10\\sqrt{3}$), karena titik $O$ berada di tengah lantai, bukan di titik sudut seberang.',
  },

  {
    id: 'soal-21',
    number: 21,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait keliling dan luas gabungan bangun datar',
    subCompetency: 'Luas Bangun Datar Komposit Fasad Panel',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Kebutuhan Panel Komposit Fasad Gedung Riset Nol Emisi',
    scenario:
      'Dinding luar gedung riset ramah lingkungan dipasangi 30 unit panel fasad komposit penahan radiasi termal matahari. Setiap unit panel memiliki bentuk gabungan poligon: bagian bawah berupa persegi panjang berukuran lebar $3\\text{ meter}$ dan tinggi $2\\text{ meter}$, sedangkan bagian atas berupa segitiga sama kaki setinggi $1{,}2\\text{ meter}$ dengan sisi alas berimpit dengan lebar persegi panjang ($3\\text{ meter}$).',
    questionPrompt:
      'Berdasarkan rancangan teknis tersebut, berapa total luas bahan komposit yang diperlukan untuk menutupi seluruh 30 unit panel fasad?',
    svgComponentId: 'cleanroom_window',
    options: [
      { id: 'A', label: 'A', text: '$180\\text{ m}^2$' },
      { id: 'B', label: 'B', text: '$216\\text{ m}^2$' },
      { id: 'C', label: 'C', text: '$234\\text{ m}^2$' },
      { id: 'D', label: 'D', text: '$248\\text{ m}^2$' },
      { id: 'E', label: 'E', text: '$270\\text{ m}^2$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Luas 1 unit panel dihitung dengan menjumlahkan luas persegi panjang dan luas segitiga atap, kemudian dikalikan dengan 30 unit panel.',
      steps: [
        {
          title: 'Hitung Luas 1 Unit Panel Komposit',
          content:
            '• Luas persegi panjang: $L_1 = p \\times l = 3 \\times 2 = 6\\text{ m}^2$\n• Luas segitiga atas: $L_2 = \\frac{1}{2} \\times a \\times t = \\frac{1}{2} \\times 3 \\times 1{,}2 = 1{,}8\\text{ m}^2$\n• Luas 1 panel: $L_{\\text{unit}} = 6 + 1{,}8 = 7{,}8\\text{ m}^2$',
          formula: 'L_{\\text{unit}} = 7{,}8\\text{ m}^2',
        },
        {
          title: 'Hitung Total Luas 30 Unit Panel',
          content:
            '$$L_{\\text{total}} = 30 \\times 7{,}8 = 234\\text{ m}^2$$',
          formula: 'L_{\\text{total}} = 234\\text{ m}^2',
        },
      ],
      keyConcept: 'Dekomposisi dan Agregasi Luas Bangun Datar Komposit',
    },
    hint1: 'Hitung terpisah luas persegi panjang ($3 \\times 2 = 6$) dan luas segitiga ($\\frac{1}{2} \\times 3 \\times 1,2 = 1,8$).',
    hint2: 'Jumlahkan kedua luas tersebut ($7,8\\text{ m}^2$) lalu kalikan dengan 30 unit.',
    trap: 'Jangan lupa mengalikan dengan faktor $\\frac{1}{2}$ pada rumus luas segitiga.',
  },

  {
    id: 'soal-22',
    number: 22,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait hubungan sudut pada bangun datar trapesium',
    subCompetency: 'Sudut Trapesium Sama Kaki & Garis Sejajar (PGK Kategori)',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_kategori',
    title: 'Analisis Sudut Rangka Pelindung Bawah Kapal Selam Riset',
    scenario:
      'Rangka pelindung bawah lambung kapal selam riset terumbu karang dibuat berbentuk trapesium sama kaki $ABCD$ dengan spesifikasi geometris:\n• Sisi kaki sama panjang: $AD = BC$\n• Sisi alas sejajar atap: $AB \\parallel DC$, dengan $AB > DC$\n• Besar sudut alas kiri: $\\angle BAD = 65^\\circ$\n• Besar sudut diagonal rangka: $\\angle ABD = 25^\\circ$',
    questionPrompt:
      'Tentukan Benar atau Salah pada setiap pernyataan berikut terkait dengan besar sudut pada rangka trapesium $ABCD$!',
    svgComponentId: 'drone_trapezoid',
    categoryStatements: [
      {
        id: 'A',
        label: 'A',
        statement: 'Besar sudut $\\angle BCD = 115^\\circ$.',
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
        statement: 'Besar sudut $\\angle BDC = 35^\\circ$.',
        correctAnswer: false,
      },
    ],
    correctAnswer: { A: true, B: true, C: false },
    explanation: {
      summary:
        'Sifat simetri trapesium sama kaki menghasilkan besar sudut alas sama besar $\\angle ABC = \\angle BAD = 65^\\circ$. Pasangan sudut dalam sepihak berjumlah $180^\\circ$, dan sudut berseberangan dalam pada garis sejajar sama besar.',
      steps: [
        {
          title: 'Evaluasi Pernyataan A: $\\angle BCD$',
          content:
            'Karena $AB \\parallel DC$, sudut $\\angle ABC$ dan $\\angle BCD$ merupakan sudut dalam sepihak:\n$$\\angle BCD = 180^\\circ - \\angle ABC = 180^\\circ - 65^\\circ = 115^\\circ\\text{ [BENAR]}$$',
        },
        {
          title: 'Evaluasi Pernyataan B: $\\angle CBD$',
          content:
            'Sudut $\\angle ABC = 65^\\circ$ terbagi oleh diagonal $BD$ menjadi $\\angle ABD$ dan $\\angle CBD$:\n$$\\angle CBD = \\angle ABC - \\angle ABD = 65^\\circ - 25^\\circ = 40^\\circ\\text{ [BENAR]}$$',
        },
        {
          title: 'Evaluasi Pernyataan C: $\\angle BDC$',
          content:
            'Garis $AB \\parallel DC$ dipotong oleh garis transversal $BD$. Sudut $\\angle BDC$ dan sudut $\\angle ABD$ merupakan pasangan sudut berseberangan dalam:\n$$\\angle BDC = \\angle ABD = 25^\\circ$$\nPernyataan menyatakan $\\angle BDC = 35^\\circ$, sehingga bernilai **[SALAH]**.',
        },
      ],
      keyConcept: 'Relasi Sudut Garis Sejajar dan Karakteristik Simetri Trapesium Sama Kaki',
    },
    hint1: 'Pada trapesium sama kaki, sudut pada alas yang sama besarnya sama: $\\angle ABC = \\angle BAD = 65^\\circ$.',
    hint2: 'Sudut berseberangan dalam antara garis sejajar $AB$ dan $DC$ besarnya sama: $\\angle BDC = \\angle ABD$.',
    trap: 'Sudut $\\angle BDC$ sama dengan $\\angle ABD = 25^\\circ$, bukan sama dengan $\\angle CBD = 40^\\circ$ atau $35^\\circ$.',
  },

  {
    id: 'soal-23',
    number: 23,
    module: 'Trigonometri',
    competency: 'Menyelesaikan permasalahan terkait perbandingan trigonometri sudut istimewa terapan',
    subCompetency: 'Perbandingan Sinus Sudut Istimewa 60° Terapan',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pg_single',
    title: 'Elevasi Lengan Robotik Artikulasi Bedah Mikro Presisi Tinggi',
    scenario:
      'Sebuah lengan artikulasi robot bedah mikro presisi tinggi yang memiliki panjang batang teleskopik 8 meter disandarkan pada dudukan vertikal ruang operasi steril. Sudut elevasi yang dibentuk antara lengan teleskopik dengan bidang lantai horizontal adalah tepat $60^\\circ$.',
    questionPrompt:
      'Tinggi vertikal ujung atas lengan robotik dari permukaan lantai horizontal adalah ....',
    svgComponentId: 'sensor_ladder',
    options: [
      { id: 'A', label: 'A', text: '$4\\text{ meter}$' },
      { id: 'B', label: 'B', text: '$4\\sqrt{2}\\text{ meter}$' },
      { id: 'C', label: 'C', text: '$4\\sqrt{3}\\text{ meter}$' },
      { id: 'D', label: 'D', text: '$6\\text{ meter}$' },
      { id: 'E', label: 'E', text: '$6\\sqrt{3}\\text{ meter}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Ketinggian vertikal merupakan sisi depan dari sudut elevasi $60^\\circ$ pada segitiga siku-siku, dihitung menggunakan rasio sinus: $\\sin \\theta = \\frac{\\text{sisi depan}}{\\text{sisi miring}}$.',
      steps: [
        {
          title: 'Gunakan Perbandingan Sinus Sudut Istimewa',
          content:
            '$$\\sin 60^\\circ = \\frac{h}{L}$$\n$$h = L \\times \\sin 60^\\circ = 8 \\times \\frac{\\sqrt{3}}{2} = 4\\sqrt{3}\\text{ meter}$$',
          formula: 'h = 4\\sqrt{3}\\text{ meter}',
        },
      ],
      keyConcept: 'Penerapan Nilai Rasio Sinus Sudut Istimewa 60°',
    },
    hint1: 'Tinggi $h$ berada di depan sudut $60^\\circ$ dan panjang lengan 8 meter adalah hipotenusa.',
    hint2: 'Nilai perbandingan trigonometri istimewa $\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$.',
    trap: 'Jangan menggunakan nilai $\\cos 60^\\circ = \\frac{1}{2}$ yang menghasilkan jarak mendatar alas ($4\\text{ meter}$), karena yang ditanyakan adalah tinggi vertikal.',
  },

  {
    id: 'soal-24',
    number: 24,
    module: 'Geometri & Pengukuran',
    competency: 'Menyelesaikan permasalahan terkait transformasi geometri dilatasi optik',
    subCompetency: 'Faktor Skala Dilatasi & Batas Layar Proyeksi (PGK Kategori)',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_kategori',
    title: 'Transformasi Dilatasi Proyeksi Citra Sonar Batimetri Bawah Laut',
    scenario:
      'Konsol navigasi kapal eksplorasi memproyeksikan citra grid batimetri berukuran $50\\text{ cm} \\times 50\\text{ cm}$ menggunakan sistem lensa optik ke layar pameran navigasi berukuran $2{,}5\\text{ meter} \\times 1{,}5\\text{ meter}$ ($250\\text{ cm} \\times 150\\text{ cm}$) yang terpasang horizontal.\n\nSistem proyektor menghasilkan perbesaran dilatasi proporsional yang bergantung pada jarak dari layar sesuai formula: $\\text{Faktor Skala } k = 0{,}5 \\times \\text{jarak (meter)}$. Proyektor ditempatkan pada jarak tepat 4 meter dari layar.',
    questionPrompt:
      'Bagaimanakah tampilan citra sonar pada layar navigasi? Tentukan Benar atau Salah pada setiap pernyataan berikut!',
    svgComponentId: 'cockpit_hud',
    categoryStatements: [
      {
        id: 'A',
        label: 'A',
        statement: 'Perbandingan rasio panjang terhadap lebar tampilan citra di layar adalah tetap 1 : 1.',
        correctAnswer: true,
      },
      {
        id: 'B',
        label: 'B',
        statement: 'Luas tampilan citra sonar pada layar adalah empat kali lipat dari luas citra aslinya.',
        correctAnswer: true,
      },
      {
        id: 'C',
        label: 'C',
        statement: 'Terdapat bagian gambar citra sonar yang terpotong di luar batas layar pameran navigasi.',
        correctAnswer: false,
      },
    ],
    correctAnswer: { A: true, B: true, C: false },
    explanation: {
      summary:
        'Hitung faktor skala pembesaran $k = 0{,}5 \\times 4 = 2{,}0$. Ukuran citra baru menjadi $50 \\times 2 = 100\\text{ cm} = 1\\text{ meter}$. Citra berukuran $100 \\times 100\\text{ cm}$ muat leluasa di layar $250 \\times 150\\text{ cm}$.',
      steps: [
        {
          title: 'Evaluasi Pernyataan A: Rasio Bentuk Dilatasi',
          content:
            'Dilatasi dengan faktor skala seragam mempertahankan perbandingan ukuran panjang terhadap lebar: $100 : 100 = 1 : 1$ **[BENAR]**.',
        },
        {
          title: 'Evaluasi Pernyataan B: Perubahan Luas Akibat Dilatasi',
          content:
            'Faktor skala panjang adalah $k = 0{,}5 \\times 4 = 2$. Pertambahan luas akibat transformasi dilatasi dua dimensi adalah $k^2 = 2^2 = 4$ kali luas awal **[BENAR]**.',
        },
        {
          title: 'Evaluasi Pernyataan C: Batas Layar Navigasi',
          content:
            'Ukuran tampilan citra di layar adalah $100\\text{ cm} \\times 100\\text{ cm}$. Karena panjang $100\\text{ cm} \\le 250\\text{ cm}$ dan lebar $100\\text{ cm} \\le 150\\text{ cm}$, seluruh citra muat sempurna dan tidak ada yang terpotong **[SALAH]**.',
        },
      ],
      keyConcept: 'Karakteristik Dilatasi Terhadap Dimensi Panjang dan Luas Bangun Datar',
    },
    hint1: 'Hitung faktor skala dilatasi: $k = 0{,}5 \\times 4 = 2{,}0$.',
    hint2: 'Kalikan dimensi asli $50\\text{ cm}$ dengan skala $k=2$ untuk mendapatkan dimensi bayangan di layar ($100\\text{ cm}$).',
    trap: 'Rasio luas berubah sebanding dengan kuadrat faktor skala ($k^2 = 4$), bukan sebanding dengan $k$.',
  },

  // =========================================================================
  // BATCH 4: STATISTIKA, ANALISIS DATA, PELUANG & KOMBINATORIKA
  // =========================================================================
  {
    id: 'soal-25',
    number: 25,
    module: 'Peluang & Kombinatorika',
    competency: 'Menyelesaikan permasalahan terkait peluang suatu kejadian majemuk',
    subCompetency: 'Peluang Kejadian Majemuk Tidak Saling Lepas',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Alokasi Armada Bus Listrik Cerdas Koridor Metropolitan',
    scenario:
      'Dinas Perhubungan mengelola 40 unit bus listrik ramah lingkungan di Depo Pusat. Dari total armada tersebut:\n• 24 unit dilengkapi sistem pengisian daya ultra-cepat (*pantograph fast charging*).\n• 16 unit dilengkapi suspensi udara adaptif ramah disabilitas (*kneeling air suspension*).\n• 8 unit di antaranya memiliki sistem pengisian daya ultra-cepat sekaligus suspensi udara adaptif.\n• Sisanya adalah unit bus listrik model standar.\n\nJika sistem otomatis mengalokasikan 1 unit bus secara acak untuk melayani rute prioritas bandara,',
    questionPrompt:
      'Berapakah peluang bus yang terpilih memiliki fitur pengisian daya ultra-cepat ATAU suspensi udara adaptif?',
    svgComponentId: 'datacenter_rack',
    options: [
      { id: 'A', label: 'A', text: '$\\frac{1}{5}$' },
      { id: 'B', label: 'B', text: '$\\frac{2}{5}$' },
      { id: 'C', label: 'C', text: '$\\frac{3}{5}$' },
      { id: 'D', label: 'D', text: '$\\frac{4}{5}$' },
      { id: 'E', label: 'E', text: '$\\frac{9}{10}$' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Peluang gabungan dua kejadian yang tidak saling lepas diselesaikan menggunakan prinsip inklusi-eksklusi peluang: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.',
      steps: [
        {
          title: 'Hitung Banyak Anggota Himpunan Gabungan',
          content:
            '• Semesta: $n(S) = 40$\n• Fast charging ($A$): $n(A) = 24$\n• Suspensi udara ($B$): $n(B) = 16$\n• Irisan keduanya ($A \\cap B$): $n(A \\cap B) = 8$\n$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$\n$$n(A \\cup B) = 24 + 16 - 8 = 32\\text{ unit}$$',
        },
        {
          title: 'Hitung Nilai Peluang Gabungan',
          content:
            '$$P(A \\cup B) = \\frac{n(A \\cup B)}{n(S)} = \\frac{32}{40} = \\frac{4}{5}$$',
          formula: 'P(A \\cup B) = \\frac{4}{5}',
        },
      ],
      keyConcept: 'Aturan Penjumlahan Peluang Kejadian Majemuk Inklusi-Eksklusi',
    },
    hint1: 'Gunakan rumus peluang gabungan: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.',
    hint2: 'Banyak armada yang memiliki minimal satu fitur adalah $24 + 16 - 8 = 32$. Bagi dengan total 40 unit.',
    trap: 'Jangan hanya menjumlahkan $24 + 16 = 40$, karena 8 unit yang memiliki kedua fitur akan terhitung dua kali ganda.',
  },

  {
    id: 'soal-26',
    number: 26,
    module: 'Peluang & Kombinatorika',
    competency: 'Menyelesaikan permasalahan terkait peluang suatu kejadian tunggal dan komplemen',
    subCompetency: 'Peluang Sederhana & Kejadian Komplemen (PGK MCMA)',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_mcma',
    title: 'Pengujian Mutu Sel Fotovoltaik Panel Surya Generasi Baru',
    scenario:
      'Dalam pengujian kualitas di laboratorium material surya, satu batch sampel berisi 20 unit sel fotovoltaik eksperimental memiliki komposisi sebagai berikut:\n• 8 unit sel silikon monokristalin efisiensi tinggi;\n• 6 unit sel film-tipis perovskit fleksibel;\n• 4 unit sel polikristalin bifasial; dan\n• Sisanya adalah unit sel tandem silikon-kalsium.\n\nSeorang peneliti mengambil 1 unit sel secara acak dari batch tersebut untuk diuji ketahanan termalnya.',
    questionPrompt:
      'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR terkait peluang terpilihnya jenis sel tersebut? (Pilihan jawaban benar lebih dari satu)',
    svgComponentId: 'iot_sensor_array',
    options: [
      { id: 'opt1', label: '1', text: 'Peluang terpilihnya sel monokristalin adalah $40\\%$.' },
      { id: 'opt2', label: '2', text: 'Peluang terpilihnya sel bukan sel perovskit adalah $0{,}3$.' },
      { id: 'opt3', label: '3', text: 'Peluang terpilihnya sel polikristalin bifasial adalah $\\frac{1}{4}$.' },
      { id: 'opt4', label: '4', text: 'Peluang terpilihnya sel bukan sel tandem adalah $90\\%$.' },
    ],
    correctAnswer: ['opt1', 'opt4'],
    explanation: {
      summary:
        'Peluang kejadian tunggal adalah $P(A) = \\frac{n(A)}{n(S)}$, dan peluang komplemen (bukan A) adalah $P(A\') = 1 - P(A)$.',
      steps: [
        {
          title: 'Identifikasi Frekuensi Setiap Jenis Sel',
          content:
            '• Total semesta: $n(S) = 20$\n• Monokristalin: $8$\n• Perovskit: $6$\n• Polikristalin: $4$\n• Tandem: $20 - (8 + 6 + 4) = 20 - 18 = 2\\text{ unit}$',
        },
        {
          title: 'Verifikasi Setiap Pernyataan',
          content:
            '• **Pernyataan 1**: $P(\\text{Monokristalin}) = \\frac{8}{20} = \\frac{40}{100} = 40\\%$ **[BENAR]**.\n• **Pernyataan 2**: $P(\\text{Bukan Perovskit}) = 1 - \\frac{6}{20} = \\frac{14}{20} = 0{,}7$ (bukan $0{,}3$) **[SALAH]**.\n• **Pernyataan 3**: $P(\\text{Polikristalin}) = \\frac{4}{20} = \\frac{1}{5}$ (bukan $\\frac{1}{4}$) **[SALAH]**.\n• **Pernyataan 4**: $P(\\text{Bukan Tandem}) = 1 - \\frac{2}{20} = \\frac{18}{20} = 90\\%$ **[BENAR]**.',
        },
      ],
      keyConcept: 'Definisi Peluang Klasik dan Teorema Peluang Komplemen P(A\') = 1 - P(A)',
    },
    hint1: 'Hitung banyak sel tandem terlebih dahulu: $20 - (8 + 6 + 4) = 2$ unit.',
    hint2: 'Peluang kejadian komplemen "bukan X" dihitung dengan $1 - P(X)$.',
    trap: 'Nilai 0,3 pada Pernyataan 2 adalah peluang terpilihnya sel perovskit, bukan komplemennya.',
  },

  {
    id: 'soal-27',
    number: 27,
    module: 'Statistika & Analisis Data',
    competency: 'Mengolah dan menyajikan data numerik serta menyimpulkan nilai data hilang',
    subCompetency: 'Analisis Diagram Batang & Rekonstruksi Nilai Hilang',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Kapasitas Pembangkitan Energi Bersih Mikrohidro 7 DAS',
    scenario:
      'Dinas Energi dan Sumber Daya Mineral memantau total daya listrik yang dibangkitkan oleh instalasi mikrohidro di 7 Daerah Aliran Sungai (DAS A hingga DAS G). Data kapasitas daya tercatat pada diagram batang.\n\nNamun, data daya yang dibangkitkan oleh DAS E terputus sementara akibat gangguan transmisi kabel sensor telemetri. Sistem pusat memastikan bahwa total daya listrik yang dihasilkan oleh seluruh 7 DAS tersebut adalah tepat 30.000 kilo-Watt (kW).\n\nData 6 DAS yang terbaca:\n• DAS A = 5.500 kW\n• DAS B = 4.200 kW\n• DAS C = 6.000 kW\n• DAS D = 3.800 kW\n• DAS F = 4.700 kW\n• DAS G = 3.300 kW',
    questionPrompt:
      'Berdasarkan konsolidasi data tersebut, berapakah daya listrik yang dibangkitkan oleh instalasi mikrohidro pada DAS E?',
    svgComponentId: 'data_traffic_bar',
    options: [
      { id: 'A', label: 'A', text: '1.500 kW' },
      { id: 'B', label: 'B', text: '2.000 kW' },
      { id: 'C', label: 'C', text: '2.500 kW' },
      { id: 'D', label: 'D', text: '3.000 kW' },
      { id: 'E', label: 'E', text: '3.500 kW' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Nilai data yang hilang diperoleh dari pengurangan total daya keseluruhan dengan jumlah daya dari keenam DAS yang telah diketahui.',
      steps: [
        {
          title: 'Jumlahkan Nilai Daya dari 6 DAS yang Diketahui',
          content:
            '$$\\Sigma_{\\text{diketahui}} = 5.500 + 4.200 + 6.000 + 3.800 + 4.700 + 3.300 = 27.500\\text{ kW}$$',
        },
        {
          title: 'Hitung Nilai Daya DAS E',
          content:
            '$$\\text{DAS E} = \\text{Total} - \\Sigma_{\\text{diketahui}}$$\n$$\\text{DAS E} = 30.000 - 27.500 = 2.500\\text{ kW}$$',
          formula: '\\text{DAS E} = 2.500\\text{ kW}',
        },
      ],
      keyConcept: 'Rekonstruksi Frekuensi/Nilai Data Hilang dari Total Agregat',
    },
    hint1: 'Jumlahkan seluruh data numerik yang tercatat pada 6 DAS lainnya.',
    hint2: 'Kurangkan hasil penjumlahan tersebut dari total kapasitas keseluruhan 30.000 kW.',
    trap: 'Periksa ketelitian penjumlahan angka ribuan dan ratusan agar tidak terjadi selisih 500 atau 1.000 kW.',
  },

  {
    id: 'soal-28',
    number: 28,
    module: 'Peluang & Kombinatorika',
    competency: 'Menyelesaikan permasalahan terkait kaidah pencacahan aturan perkalian',
    subCompetency: 'Aturan Pengisian Tempat (Filling Slots) Alfanumerik',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Pembuatan Kode Pelacak RFID Peti Kemas Maritim Internasional',
    scenario:
      'Otoritas pelabuhan logistik internasional merancang sistem penandaan elektronik untuk peti kemas berpendingin (*cold-chain containers*). Setiap peti kemas dipasangi tag RFID dengan kode alfanumerik unik 5 karakter dengan struktur format:\n\n$$\\mathbf{H_1 - A_1 - H_2 - A_2 - H_3}$$\n\nAturan pembuatan kode:\n• $H_1, H_2,$ dan $H_3$ harus berupa huruf kapital alfabet (dari 26 pilihan: A sampai Z).\n• $A_1$ dan $A_2$ harus berupa angka desimal (dari 10 pilihan: 0 sampai 9).\n• Tidak boleh ada huruf yang diulang, dan tidak boleh ada angka yang diulang pada satu kode yang sama.',
    questionPrompt:
      'Berapakah banyak variasi kode identifikasi berbeda yang dapat dibuat untuk menandai peti kemas tersebut?',
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
        'Kaidah pengisian tempat (*rule of product*) tanpa pengulangan diaplikasikan pada 3 slot huruf kapital dan 2 slot angka desimal.',
      steps: [
        {
          title: 'Kalkulasi Banyak Pilihan Tiap Slot',
          content:
            '• Slot 1 ($H_1$, Huruf ke-1): 26 pilihan\n• Slot 2 ($A_1$, Angka ke-1): 10 pilihan\n• Slot 3 ($H_2$, Huruf ke-2): 25 pilihan (berkurang 1 huruf)\n• Slot 4 ($A_2$, Angka ke-2): 9 pilihan (berkurang 1 angka)\n• Slot 5 ($H_3$, Huruf ke-3): 24 pilihan (berkurang 2 huruf)',
        },
        {
          title: 'Kalkulasi Total Permutasi Kode',
          content:
            '$$N = (26 \\times 25 \\times 24) \\times (10 \\times 9)$$\n$$N = 15.600 \\times 90 = 1.404.000\\text{ variasi kode}$$',
          formula: 'N_{\\text{total}} = 1.404.000',
        },
      ],
      keyConcept: 'Aturan Perkalian Pengisian Tempat (Multiplication Rule of Counting)',
    },
    hint1: 'Ada 3 slot huruf yang tidak boleh berulang ($26 \\times 25 \\times 24$).',
    hint2: 'Ada 2 slot angka yang tidak boleh berulang ($10 \\times 9$). Kalikan kedua hasil tersebut.',
    trap: 'Jika huruf dan angka boleh diulang, hasilnya $26^3 \\times 10^2 = 1.757.600$ (Opsi E). Pastikan mematuhi syarat tanpa pengulangan.',
  },
];
