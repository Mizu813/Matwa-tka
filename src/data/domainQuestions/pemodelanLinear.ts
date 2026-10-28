import { Question } from '../../types/quiz';

export const pemodelanLinearQuestions: Question[] = [
  // Soal 7 (Paket 1 - No. 4)
  {
    id: 'p1-soal-4',
    number: 7,
    package: 'Paket 1',
    packageQuestionNumber: 4,
    module: 'Pemodelan Linear & Sistem Persamaan',
    competency: 'Menyelesaikan masalah kontekstual menggunakan pemodelan fungsi linear',
    subCompetency: 'Fungsi Linear Kontekstual',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Model Linear Tinggi dan Berat Badan Ideal Wanita',
    scenario:
      'Tinggi dan berat badan ideal seorang wanita memiliki hubungan secara linear yang dapat dimodelkan sebagai berikut:\n$$y = 1{,}2x + 96$$\ndengan $x$ mewakili berat badan ideal (dalam kg) dan $y$ mewakili tinggi badan (dalam cm).',
    questionPrompt:
      'Berapakah berat badan ideal seorang wanita yang memiliki tinggi badan $156\\text{ cm}$?',
    options: [
      { id: 'A', label: 'A', text: '$42\\text{ kg}$' },
      { id: 'B', label: 'B', text: '$47\\text{ kg}$' },
      { id: 'C', label: 'C', text: '$48\\text{ kg}$' },
      { id: 'D', label: 'D', text: '$50\\text{ kg}$' },
      { id: 'E', label: 'E', text: '$55\\text{ kg}$' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Substitusikan nilai tinggi badan $y = 156$ ke dalam fungsi linear, lalu selesaikan persamaan aljabar linear untuk mencari variabel $x$.',
      steps: [
        {
          title: 'Substitusi Nilai Tinggi Badan',
          content:
            '$$y = 1{,}2x + 96$$\n$$156 = 1{,}2x + 96$$',
          formula: '156 = 1{,}2x + 96',
        },
        {
          title: 'Isolasi Variabel $x$',
          content:
            '$$1{,}2x = 156 - 96$$\n$$1{,}2x = 60$$',
        },
        {
          title: 'Hitung Nilai $x$',
          content:
            '$$x = \\frac{60}{1{,}2} = \\frac{600}{12} = 50\\text{ kg}$$',
          formula: 'x = 50\\text{ kg}',
        },
      ],
      keyConcept: 'Penyelesaian Persamaan Linear Satu Variabel $y = mx + c$',
    },
    hint1: 'Masukkan nilai tinggi badan $y = 156\\text{ cm}$ ke dalam rumus persamaan.',
    hint2: 'Kurangkan 156 dengan 96, kemudian bagi hasilnya dengan 1,2.',
    trap: 'Pastikan tidak tertukar antara variabel $x$ (berat badan) dan $y$ (tinggi badan).',
  },

  // Soal 8 (Paket 1 - No. 5)
  {
    id: 'p1-soal-5',
    number: 8,
    package: 'Paket 1',
    packageQuestionNumber: 5,
    module: 'Pemodelan Linear & Sistem Persamaan',
    competency: 'Menyelesaikan permasalahan fungsi sepotong (piecewise) kontekstual',
    subCompetency: 'Fungsi Sepotong (Piecewise) & Konversi Ukuran',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Analisis Ukuran Sepatu Impor dan Ketersediaan Toko',
    scenario:
      'Ukuran sepatu EU untuk panjang telapak kaki ($x$ dalam cm) dirumuskan dengan:\n$$f(x) = x + 13{,}5$$\nKonversi dari ukuran EU ($y$) ke UK dan US dirumuskan sebagai fungsi sepotong (*piecewise*):\n$$g(y) = \\begin{cases} y - 33, & \\text{untuk ukuran US} \\\\ y - 30{,}5, & \\text{untuk ukuran UK} \\end{cases}$$\n\nDi beberapa toko, ukuran sepatu terkecil yang tersedia disesuaikan dengan panjang telapak kaki:\n• **Toko A:** Panjang telapak kaki terkecil $21\\text{ cm}$\n• **Toko B:** Panjang telapak kaki terkecil $21{,}5\\text{ cm}$\n• **Toko C:** Panjang telapak kaki terkecil $23\\text{ cm}$\n• **Toko D:** Panjang telapak kaki terkecil $24\\text{ cm}$\n\nAldi akan membeli sneakers dan ukuran miliknya adalah $4{,}5$. Namun, ia lupa apakah ukuran tersebut dalam satuan US atau UK.',
    questionPrompt:
      'Di toko manakah Aldi pasti dapat membeli sepatu sneakers tersebut?',
    options: [
      { id: 'A', label: 'A', text: 'B saja' },
      { id: 'B', label: 'B', text: 'D saja' },
      { id: 'C', label: 'C', text: 'A dan B' },
      { id: 'D', label: 'D', text: 'B dan D' },
      { id: 'E', label: 'E', text: 'C dan D' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Hitung panjang kaki Aldi untuk kedua kemungkinan (jika ukuran US atau UK). Toko yang "pasti" dapat melayani adalah toko yang memiliki ukuran terkecil $\\le$ panjang kaki minimum Aldi.',
      steps: [
        {
          title: 'Kemungkinan 1: Ukuran Aldi adalah US = 4,5',
          content:
            '$$g(y) = y - 33 = 4{,}5 \\implies y = 37{,}5\\text{ (Ukuran EU)}$$\n$$f(x) = x + 13{,}5 = 37{,}5 \\implies x = 37{,}5 - 13{,}5 = 24\\text{ cm}$$',
        },
        {
          title: 'Kemungkinan 2: Ukuran Aldi adalah UK = 4,5',
          content:
            '$$g(y) = y - 30{,}5 = 4{,}5 \\implies y = 35\\text{ (Ukuran EU)}$$\n$$f(x) = x + 13{,}5 = 35 \\implies x = 35 - 13{,}5 = 21{,}5\\text{ cm}$$',
        },
        {
          title: 'Analisis Ketersediaan Toko yang "Pasti"',
          content:
            'Karena Aldi lupa satuannya, panjang kakinya bisa $21{,}5\\text{ cm}$ atau $24\\text{ cm}$.\nAgar Aldi PASTI dapat membeli di toko tersebut, toko harus menyediakan sepatu untuk kaki ukuran sekecil $21{,}5\\text{ cm}$:\n• **Toko A:** ukuran terkecil $21\\text{ cm} \\le 21{,}5\\text{ cm}$ → **Pasti Bisa**.\n• **Toko B:** ukuran terkecil $21{,}5\\text{ cm} \\le 21{,}5\\text{ cm}$ → **Pasti Bisa**.\n• Toko C & D: ukuran terkecil $23\\text{ cm}$ dan $24\\text{ cm}$. Jika ukuran Aldi adalah UK ($21{,}5\\text{ cm}$), ia tidak bisa beli di toko C dan D.\nMaka toko yang pasti dapat melayani Aldi adalah **A dan B**.',
          formula: '\\text{Toko Terpilih} = \\text{A dan B}',
        },
      ],
      keyConcept: 'Invers Fungsi Komposisi dan Analisis Kasus Fungsi Sepotong',
    },
    hint1: 'Cari panjang kaki Aldi jika ukurannya US 4,5 dan jika ukurannya UK 4,5.',
    hint2: 'Toko yang pasti bisa adalah toko yang ukuran terkecilnya $\\le 21{,}5\\text{ cm}$.',
    trap: 'Perhatikan kata "pasti". Jika Aldi ternyata berukuran UK ($21{,}5\\text{ cm}$), ia tidak bisa membeli di toko C dan D.',
  },

  // Soal 9 (Paket 1 - No. 8)
  {
    id: 'p1-soal-8',
    number: 9,
    package: 'Paket 1',
    packageQuestionNumber: 8,
    module: 'Pemodelan Linear & Sistem Persamaan',
    competency: 'Menyusun model matematika sistem pertidaksamaan linear dua variabel',
    subCompetency: 'Program Linear (Pertidaksamaan Linear Dua Variabel)',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Pemodelan Matematika Alokasi Kain Produksi Konveksi',
    scenario:
      'Perusahaan konveksi membuat dua model kemeja menggunakan dua bahan kain polos (warna hitam dan putih). Persediaan yang dimiliki adalah $30\\text{ meter}$ kain hitam dan $40\\text{ meter}$ kain putih.\n• **Model A ($x$):** membutuhkan $1{,}5\\text{ meter}$ kain hitam dan $1{,}5\\text{ meter}$ kain putih.\n• **Model B ($y$):** membutuhkan $1\\text{ meter}$ kain hitam dan $2\\text{ meter}$ kain putih.',
    questionPrompt:
      'Jika $x$ adalah banyaknya kemeja model A dan $y$ adalah banyaknya kemeja model B, model matematika yang sesuai adalah ...',
    options: [
      {
        id: 'A',
        label: 'A',
        text: '$\\begin{cases} 3x + 2y \\le 60 \\\\ 3x + 4y \\le 80 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$',
      },
      {
        id: 'B',
        label: 'B',
        text: '$\\begin{cases} 3x + 2y \\le 80 \\\\ 3x + 4y \\le 60 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$',
      },
      {
        id: 'C',
        label: 'C',
        text: '$\\begin{cases} 3x + 3y \\le 60 \\\\ x + 2y \\le 80 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$',
      },
      {
        id: 'D',
        label: 'D',
        text: '$\\begin{cases} 3x + 2y \\le 80 \\\\ 3x + 4y \\le 60 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$',
      },
      {
        id: 'E',
        label: 'E',
        text: '$\\begin{cases} 3x + 3y \\le 60 \\\\ x + 2y \\le 80 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$',
      },
    ],
    correctAnswer: 'A',
    explanation: {
      summary:
        'Kelompokkan kendala bahan kain hitam dan putih, susun pertidaksamaannya, lalu kalikan dengan 2 untuk menghilangkan desimal.',
      steps: [
        {
          title: 'Kendala Bahan Kain Hitam',
          content:
            'Kebutuhan kain hitam: $1{,}5x + 1y \\le 30\\text{ meter}$.\nKalikan kedua ruas dengan 2:\n$$3x + 2y \\le 60$$',
          formula: '3x + 2y \\le 60',
        },
        {
          title: 'Kendala Bahan Kain Putih',
          content:
            'Kebutuhan kain putih: $1{,}5x + 2y \\le 40\\text{ meter}$.\nKalikan kedua ruas dengan 2:\n$$3x + 4y \\le 80$$',
          formula: '3x + 4y \\le 80',
        },
        {
          title: 'Syarat Non-Negatif',
          content:
            'Jumlah kemeja tidak mungkin bernilai negatif:\n$$x \\ge 0,\\; y \\ge 0$$',
          formula: '\\begin{cases} 3x + 2y \\le 60 \\\\ 3x + 4y \\le 80 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}',
        },
      ],
      keyConcept: 'Pemodelan Kendala Linear Sistem Pertidaksamaan Dua Variabel (SPtLDV)',
    },
    hint1: 'Kelompokkan berdasarkan warna kain: hitam $\\le 30$ dan putih $\\le 40$.',
    hint2: 'Kalikan dengan 2 pada pertidaksamaan $1{,}5x + y \\le 30$ dan $1{,}5x + 2y \\le 40$.',
    trap: 'Jangan sampai tertukar antara batas persediaan kain hitam (30 m) dan kain putih (40 m).',
  },

  // Soal 10 (Paket 1 - No. 9)
  {
    id: 'p1-soal-9',
    number: 10,
    package: 'Paket 1',
    packageQuestionNumber: 9,
    module: 'Pemodelan Linear & Sistem Persamaan',
    competency: 'Menyelesaikan permasalahan terapan SPLTV',
    subCompetency: 'Sistem Persamaan Linear Tiga Variabel (SPLTV Terapan)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Perhitungan Harga Satuan Paket Cupcake Berbagai Rasa',
    scenario:
      'Sebuah toko roti menawarkan tiga jenis paket cupcake yang terdiri dari rasa cokelat ($C$), vanilla ($V$), dan strawberry ($S$):\n• **Paket A (Rp88.000,00):** $2C + 2V + S = 88.000$\n• **Paket B (Rp76.000,00):** $C + 2V + 2S = 76.000$\n• **Paket C (Rp49.000,00):** $C + V + S = 49.000$',
    questionPrompt:
      'Berapakah total harga yang harus dibayar seorang pembeli jika ia ingin membeli Paket A, tetapi ingin menambah 1 cupcake vanilla dan 2 cupcake strawberry dengan harga satuan?',
    options: [
      { id: 'A', label: 'A', text: 'Rp106.000,00' },
      { id: 'B', label: 'B', text: 'Rp114.000,00' },
      { id: 'C', label: 'C', text: 'Rp116.000,00' },
      { id: 'D', label: 'D', text: 'Rp118.000,00' },
      { id: 'E', label: 'E', text: 'Rp125.000,00' },
    ],
    correctAnswer: 'E',
    explanation: {
      summary:
        'Selesaikan SPLTV untuk mencari harga satuan masing-masing cupcake ($C, V, S$), kemudian hitung $\\text{Paket A} + V + 2S$.',
      steps: [
        {
          title: 'Eliminasi Persamaan (1) dan (3)',
          content:
            'Kurangkan Persamaan (1) dengan Persamaan (3):\n$$(2C + 2V + S) - (C + V + S) = 88.000 - 49.000$$\n$$C + V = 39.000$$\nKarena $C + V + S = 49.000$, maka:\n$$S = 49.000 - 39.000 = 10.000\\text{ (Harga 1 Cupcake Strawberry)}$$',
          formula: 'S = \\text{Rp}10.000{,}00',
        },
        {
          title: 'Substitusi $S = 10.000$ ke Persamaan (2)',
          content:
            '$$C + 2V + 2(10.000) = 76.000$$\n$$C + 2V + 20.000 = 76.000 \\implies C + 2V = 56.000$$\nKurangkan dengan $C + V = 39.000$:\n$$V = 56.000 - 39.000 = 17.000\\text{ (Harga 1 Cupcake Vanilla)}$$',
          formula: 'V = \\text{Rp}17.000{,}00',
        },
        {
          title: 'Hitung Harga Cupcake Cokelat $C$',
          content:
            '$$C = 39.000 - V = 39.000 - 17.000 = 22.000\\text{ (Harga 1 Cupcake Cokelat)}$$',
          formula: 'C = \\text{Rp}22.000{,}00',
        },
        {
          title: 'Hitung Total Pesanan Tambahan',
          content:
            'Pembeli membeli Paket A + 1 $V$ + 2 $S$:\n$$\\text{Total} = 88.000 + 17.000 + 2(10.000) = 88.000 + 17.000 + 20.000 = 125.000\\text{ rupiah}$$',
          formula: '\\text{Total Biaya} = \\text{Rp}125.000{,}00',
        },
      ],
      keyConcept: 'Metode Campuran Eliminasi-Substitusi Sistem Persamaan Linear Tiga Variabel',
    },
    hint1: 'Kurangkan persamaan Paket A dengan Paket C untuk langsung menemukan nilai $C + V$.',
    hint2: 'Cari harga satuan $V$ dan $S$, lalu tambahkan ke harga Paket A (Rp88.000).',
    trap: 'Pertanyaan menanyakan total harga Paket A ditambah 1 vanilla dan 2 strawberry, bukan hanya harga tambahannya.',
  },

  // Soal 11 (Paket 2 - No. 4)
  {
    id: 'p2-soal-4',
    number: 11,
    package: 'Paket 2',
    packageQuestionNumber: 4,
    module: 'Pemodelan Linear & Sistem Persamaan',
    competency: 'Menyelesaikan masalah prediksi waktu berbasis fungsi linear kontekstual',
    subCompetency: 'Fungsi Linear',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Model Linear Prediksi Peningkatan Suhu Global',
    scenario:
      'Seorang peneliti memodelkan peningkatan suhu akibat pemanasan global dengan fungsi linear:\n$$y = 0{,}02x - 39{,}9$$\ndengan $x$ mewakili tahun dan $y$ mewakili peningkatan suhu dalam derajat Celcius ($^{\\circ}\\text{C}$).',
    questionPrompt:
      'Pada tahun berapakah peningkatan suhu diperkirakan mencapai $7{,}7^{\\circ}\\text{C}$?',
    options: [
      { id: 'A', label: 'A', text: 'Tahun 2000' },
      { id: 'B', label: 'B', text: 'Tahun 2003' },
      { id: 'C', label: 'C', text: 'Tahun 2025' },
      { id: 'D', label: 'D', text: 'Tahun 2030' },
      { id: 'E', label: 'E', text: 'Tahun 2380' },
    ],
    correctAnswer: 'E',
    explanation: {
      summary:
        'Substitusikan nilai target peningkatan suhu $y = 7{,}7$ ke dalam persamaan linear, lalu cari nilai tahun $x$.',
      steps: [
        {
          title: 'Substitusi Nilai $y = 7{,}7$',
          content:
            '$$7{,}7 = 0{,}02x - 39{,}9$$',
          formula: '7{,}7 = 0{,}02x - 39{,}9',
        },
        {
          title: 'Pindahkan Konstanta ke Ruas Kiri',
          content:
            '$$0{,}02x = 7{,}7 + 39{,}9$$\n$$0{,}02x = 47{,}6$$',
        },
        {
          title: 'Hitung Nilai $x$',
          content:
            '$$x = \\frac{47{,}6}{0{,}02} = \\frac{4760}{2} = 2380$$',
          formula: 'x = 2380',
        },
      ],
      keyConcept: 'Penyelesaian Persamaan Linear Satu Variabel',
    },
    hint1: 'Tambahkan $7{,}7$ dengan $39{,}9$.',
    hint2: 'Bagi hasil penjumlahan dengan $0{,}02$ (setara dengan mengalikan 50).',
    trap: 'Hati-hati saat membagi desimal $47{,}6$ dengan $0{,}02$, pastikan jumlah digit nol tepat.',
  },

  // Soal 12 (Paket 2 - No. 5)
  {
    id: 'p2-soal-5',
    number: 12,
    package: 'Paket 2',
    packageQuestionNumber: 5,
    module: 'Pemodelan Linear & Sistem Persamaan',
    competency: 'Menyelesaikan permasalahan fungsi komposisi dan analisis biaya bertingkat',
    subCompetency: 'Fungsi Komposisi & Diskon Bertingkat',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Analisis Biaya Kursus Berdasarkan Diskon Prestasi Rapor',
    scenario:
      'Tempat les memberikan potongan biaya kepada 50 pendaftar pertama:\n$$y = 0{,}9x$$\ndengan $x$ adalah biaya mula-mula dan $y$ adalah biaya setelah potongan pendaftar pertama.\nSelain itu, siswa berprestasi berhak mendapat diskon tambahan:\n$$g(y) = \\begin{cases} 0{,}7y, & \\text{jika nilai rapor} > 90 \\\\ 0{,}8y, & \\text{jika nilai rapor } 85 - 90 \\end{cases}$$\n\nFira, pendaftar ke-50, membayar Rp180.000,00 (hanya mendapat diskon 50 pendaftar pertama). Setelah itu datang 4 siswa baru yang membayar harga normal (tanpa diskon 50 pendaftar pertama) namun berhak mendapat diskon prestasi:\n• **Andi:** Nilai rapor 90, uang yang dimiliki Rp285.000,00\n• **Budi:** Nilai rapor 92, uang yang dimiliki Rp286.000,00\n• **Cici:** Nilai rapor 89, uang yang dimiliki Rp280.000,00\n• **Dini:** Nilai rapor 95, uang yang dimiliki Rp287.000,00',
    questionPrompt: 'Siapakah siswa yang pasti dapat mengikuti kursus tersebut?',
    options: [
      { id: 'A', label: 'A', text: 'Dini' },
      { id: 'B', label: 'B', text: 'Dini dan Budi' },
      { id: 'C', label: 'C', text: 'Dini, Budi, dan Andi' },
      { id: 'D', label: 'D', text: 'Dini, Cici, Budi, dan Andi' },
      { id: 'E', label: 'E', text: 'Cici dan Andi' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Tentukan biaya kursus mula-mula $x$ dari pembayaran Fira, lalu hitung biaya bersih yang harus dibayar masing-masing siswa setelah diskon prestasi.',
      steps: [
        {
          title: 'Hitung Biaya Normal Mula-Mula $x$',
          content:
            'Fira membayar Rp180.000 dengan diskon $0{,}9x$:\n$$0{,}9x = 180.000 \\implies x = \\frac{180.000}{0{,}9} = 200.000\\text{ rupiah}$$',
          formula: 'x = \\text{Rp}200.000{,}00',
        },
        {
          title: 'Hitung Biaya untuk Siswa Baru (Harga Normal Rp200.000)',
          content:
            '• **Andi (nilai 90):** masuk rentang 85–90, diskon 20% → bayar $0{,}8 \\times 200.000 = 160.000$. Uang Andi Rp285.000 $\\ge 160.000$ (Cukup).\n• **Budi (nilai 92):** nilai $> 90$, diskon 30% → bayar $0{,}7 \\times 200.000 = 140.000$. Uang Budi Rp286.000 $\\ge 140.000$ (Cukup).\n• **Cici (nilai 89):** rentang 85–90, diskon 20% → bayar $0{,}8 \\times 200.000 = 160.000$. Uang Cici Rp280.000 $\\ge 160.000$ (Cukup).\n• **Dini (nilai 95):** nilai $> 90$, diskon 30% → bayar $0{,}7 \\times 200.000 = 140.000$. Uang Dini Rp287.000 $\\ge 140.000$ (Cukup).',
        },
        {
          title: 'Kesimpulan',
          content:
            'Semua siswa (Andi, Budi, Cici, dan Dini) memiliki uang yang lebih besar dari biaya yang harus dibayar, sehingga seluruhnya dapat mengikuti kursus.',
          formula: '\\text{Siswa yang dapat ikut} = \\text{Dini, Cici, Budi, dan Andi}',
        },
      ],
      keyConcept: 'Penerapan Fungsi Komposisi dan Diskon Aritmatika Sosial',
    },
    hint1: 'Cari harga normal awal dari informasi Fira: $180.000 / 0{,}9 = 200.000$.',
    hint2: 'Kalikan harga normal Rp200.000 dengan faktor diskon prestasi masing-masing siswa (0,7 atau 0,8).',
    trap: 'Siswa baru TIDAK mendapatkan diskon pendaftar pertama karena mereka mendaftar setelah 50 orang pertama.',
  },

  // Soal 13 (Paket 2 - No. 8)
  {
    id: 'p2-soal-8',
    number: 13,
    package: 'Paket 2',
    packageQuestionNumber: 8,
    module: 'Pemodelan Linear & Sistem Persamaan',
    competency: 'Menyelesaikan sistem persamaan linear tiga variabel terkait aritmatika sosial',
    subCompetency: 'SPLTV Aritmatika Sosial',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Penentuan Harga Satuan Komponen Buket Bunga',
    scenario:
      'Toko bunga menawarkan tiga kombinasi buket yang terdiri dari bunga Mawar ($M$), Lili ($L$), dan Anyelir ($A$):\n• **Buket Tipe A (Rp85.000,00):** $2M + 3L + 1A = 85.000$\n• **Buket Tipe B (Rp70.000,00):** $1M + 2L + 2A = 70.000$\n• **Buket Tipe C (Rp75.000,00):** $3M + 1L + 1A = 75.000$',
    questionPrompt:
      'Bila seorang pembeli ingin membeli Buket Tipe C, tetapi menambah 2 tangkai Lili dan 1 tangkai Anyelir dengan harga satuan, berapa total harga yang harus dibayar?',
    options: [
      { id: 'A', label: 'A', text: 'Rp75.000,00' },
      { id: 'B', label: 'B', text: 'Rp102.000,00' },
      { id: 'C', label: 'C', text: 'Rp110.000,00' },
      { id: 'D', label: 'D', text: 'Rp115.000,00' },
      { id: 'E', label: 'E', text: 'Rp116.000,00' },
    ],
    correctAnswer: 'D',
    explanation: {
      summary:
        'Selesaikan sistem persamaan linear tiga variabel untuk memperoleh harga satuan bunga Mawar ($M$), Lili ($L$), dan Anyelir ($A$).',
      steps: [
        {
          title: 'Eliminasi Variabel $A$ dari Persamaan (1) dan (3)',
          content:
            'Kurangkan Persamaan (1) dengan Persamaan (3):\n$$(2M + 3L + A) - (3M + L + A) = 85.000 - 75.000$$\n$$-M + 2L = 10.000 \\implies M = 2L - 10.000\\quad (4)$$',
        },
        {
          title: 'Eliminasi Variabel $A$ dari Persamaan (1) dan (2)',
          content:
            'Kalikan Persamaan (1) dengan 2 lalu kurangkan Persamaan (2):\n$$2(2M + 3L + A) - (M + 2L + 2A) = 170.000 - 70.000$$\n$$4M + 6L + 2A - M - 2L - 2A = 100.000$$\n$$3M + 4L = 100.000\\quad (5)$$',
        },
        {
          title: 'Substitusi Persamaan (4) ke Persamaan (5)',
          content:
            '$$3(2L - 10.000) + 4L = 100.000$$\n$$6L - 30.000 + 4L = 100.000 \\implies 10L = 130.000$$\n$$L = 13.000\\text{ (Harga 1 Tangkai Lili)}$$',
          formula: 'L = \\text{Rp}13.000{,}00',
        },
        {
          title: 'Hitung Nilai $M$ dan $A$',
          content:
            '• $M = 2(13.000) - 10.000 = 26.000 - 10.000 = 16.000\\text{ (Mawar)}$\n• Dari (3): $3(16.000) + 13.000 + A = 75.000 \\implies 61.000 + A = 75.000 \\implies A = 14.000\\text{ (Anyelir)}$',
          formula: 'M = \\text{Rp}16.000{,}00;\\; A = \\text{Rp}14.000{,}00',
        },
        {
          title: 'Hitung Total Biaya Pesanan',
          content:
            '$$\\text{Total} = \\text{Buket C} + 2L + 1A = 75.000 + 2(13.000) + 14.000 = 75.000 + 26.000 + 14.000 = 115.000\\text{ rupiah}$$',
          formula: '\\text{Total Biaya} = \\text{Rp}115.000{,}00',
        },
      ],
      keyConcept: 'Penyelesaian SPLTV Melalui Metode Eliminasi dan Substitusi',
    },
    hint1: 'Eliminasi variabel $A$ dari pasangan persamaan untuk mendapatkan relasi $M$ dan $L$.',
    hint2: 'Hitung harga satuan bunga Lili ($L = 13.000$) dan Anyelir ($A = 14.000$).',
    trap: 'Jangan lupa menambahkan harga Buket C sebesar Rp75.000,00 ke dalam total akhir.',
  },

  // Soal 14 (Paket 2 - No. 9)
  {
    id: 'p2-soal-9',
    number: 14,
    package: 'Paket 2',
    packageQuestionNumber: 9,
    module: 'Pemodelan Linear & Sistem Persamaan',
    competency: 'Menentukan sistem pertidaksamaan linear dari daerah arsiran bidang Kartesius',
    subCompetency: 'Daerah Himpunan Penyelesaian Sistem Pertidaksamaan Linear',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Penentuan Sistem Pertidaksamaan Linear Daerah Arsiran Segitiga',
    scenario:
      'Perhatikan gambar bidang koordinat Kartesius yang memuat daerah arsiran berbentuk segitiga dengan titik-titik batas $(-4, 0)$, $(0, 2)$, dan $(2, 0)$.',
    questionPrompt:
      'Daerah yang diarsir pada gambar merupakan himpunan penyelesaian dari sistem pertidaksamaan ...',
    svgComponentId: 'p2_soal_9_sptldv',
    options: [
      {
        id: 'A',
        label: 'A',
        text: '$\\begin{cases} x - 2y \\ge -4 \\\\ x + y \\le 2 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$',
      },
      {
        id: 'B',
        label: 'B',
        text: '$\\begin{cases} x - 2y \\ge -4 \\\\ x + y \\le 2 \\\\ y \\ge 0 \\end{cases}$',
      },
      {
        id: 'C',
        label: 'C',
        text: '$\\begin{cases} x - 2y \\le -4 \\\\ x + y \\le 2 \\\\ y \\ge 0 \\end{cases}$',
      },
      {
        id: 'D',
        label: 'D',
        text: '$\\begin{cases} x - 2y \\le -4 \\\\ x + y \\ge 2 \\\\ x \\ge 0 \\end{cases}$',
      },
      {
        id: 'E',
        label: 'E',
        text: '$\\begin{cases} x - 2y \\ge -4 \\\\ x + y \\ge 2 \\\\ y \\ge 0 \\end{cases}$',
      },
    ],
    correctAnswer: 'B',
    explanation: {
      summary:
        'Tentukan persamaan masing-masing garis pembatas, kemudian uji titik asal $(0, 0)$ yang berada di dalam daerah arsiran untuk menentukan tanda pertidaksamaan.',
      steps: [
        {
          title: 'Garis Pembatas Pertama (Melalui $(-4, 0)$ dan $(0, 2)$)',
          content:
            'Persamaan garis melalui $(x_1, y_1)$ dan $(x_2, y_2)$:\n$$\\frac{y - 0}{2 - 0} = \\frac{x - (-4)}{0 - (-4)} \\implies \\frac{y}{2} = \\frac{x + 4}{4} \\implies 2y = x + 4 \\implies x - 2y = -4$$\nUji titik $(0,0)$ di dalam daerah arsiran: $0 - 2(0) = 0 \\ge -4$ (Benar).\nMaka pertidaksamaannya adalah $x - 2y \\ge -4$.',
          formula: 'x - 2y \\ge -4',
        },
        {
          title: 'Garis Pembatas Kedua (Melalui $(2, 0)$ dan $(0, 2)$)',
          content:
            'Garis dengan perpotongan sumbu di $(2, 0)$ dan $(0, 2)$ memiliki persamaan:\n$$2x + 2y = 4 \\implies x + y = 2$$\nUji titik $(0,0)$ di dalam daerah arsiran: $0 + 0 = 0 \\le 2$ (Benar).\nMaka pertidaksamaannya adalah $x + y \\le 2$.',
          formula: 'x + y \\le 2',
        },
        {
          title: 'Pembatas Sumbu Koordinat',
          content:
            'Daerah terarsir berada sepenuhnya di atas sumbu-$x$, sehingga $y \\ge 0$.\nPerhatikan bahwa daerah terarsir memanjang ke arah sumbu-$x$ negatif (hingga $x = -4$), sehingga tidak ada pembatas $x \\ge 0$.\nSistem pertidaksamaannya adalah:\n$$\\begin{cases} x - 2y \\ge -4 \\\\ x + y \\le 2 \\\\ y \\ge 0 \\end{cases}$$',
          formula: '\\begin{cases} x - 2y \\ge -4 \\\\ x + y \\le 2 \\\\ y \\ge 0 \\end{cases}',
        },
      ],
      keyConcept: 'Penentuan Sistem Pertidaksamaan Linear Dua Variabel dari Gambar Grafik Kartesius',
    },
    hint1: 'Cari gradien dan persamaan garis yang melalui $(-4,0)$ dan $(0,2)$ serta garis melalui $(2,0)$ dan $(0,2)$.',
    hint2: 'Gunakan titik uji $(0,0)$ untuk menentukan arah arsiran.',
    trap: 'Jangan menyertakan syarat $x \\ge 0$, karena daerah segitiga berada di sebelah kiri sumbu-$y$ hingga absis $x = -4$.',
  },
];
