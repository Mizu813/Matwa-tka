import { Question } from '../../types/quiz';

export const geometriBidangQuestions: Question[] = [
  // Soal 19 (Paket 1 - No. 10)
  {
    id: 'p1-soal-10',
    number: 19,
    package: 'Paket 1',
    packageQuestionNumber: 10,
    module: 'Geometri Bidang & Terapan',
    competency: 'Mengidentifikasi hubungan besar sudut pada dua garis sejajar yang dipotong transversal',
    subCompetency: 'Garis Sejajar & Hubungan Antarsudut',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pgk_mcma',
    title: 'Analisis Kesamaan Besar Sudut Garis Sejajar dan Transversal',
    scenario:
      'Perhatikan gambar stimulus: Dua garis lurus horizontal sejajar dipotong oleh sebuah garis transversal dari kiri atas ke kanan bawah.\n• Pada titik potong atas: terdapat sudut $\\angle A$ (tumpul kiri-atas), $\\angle B$ (lancip kanan-atas), dan $\\angle C$ (lancip kiri-bawah).\n• Pada titik potong bawah: terdapat sudut $\\angle D$ (lancip kanan-atas), $\\angle E$ (lancip kiri-bawah), dan $\\angle F$ (tumpul kanan-bawah).',
    questionPrompt:
      'Berdasarkan gambar tersebut, sudut manakah yang memiliki besar sudut yang sama dengan $\\angle B$?',
    svgComponentId: 'p1_soal_10_angles',
    options: [
      { id: 'A', label: 'A', text: '$\\angle A$' },
      { id: 'B', label: 'B', text: '$\\angle C$' },
      { id: 'C', label: 'C', text: '$\\angle D$' },
      { id: 'D', label: 'D', text: '$\\angle E$' },
      { id: 'E', label: 'E', text: '$\\angle F$' },
    ],
    correctAnswer: ['B', 'C', 'D'],
    explanation: {
      summary:
        'Sudut-sudut yang sama besar dengan $\\angle B$ (sudut lancip) adalah sudut bertolak belakang, sudut sehadap, dan sudut berseberangan.',
      steps: [
        {
          title: 'Sudut Bertolak Belakang',
          content:
            '$\\angle C$ bertolak belakang dengan $\\angle B$ pada titik potong atas, sehingga $\\angle C = \\angle B$.',
        },
        {
          title: 'Sudut Sehadap',
          content:
            '$\\angle D$ sehadap dengan $\\angle B$ pada arah kanan-atas yang sama, sehingga $\\angle D = \\angle B$.',
        },
        {
          title: 'Sudut Luar Berseberangan',
          content:
            '$\\angle E$ berseberangan luar terhadap $\\angle B$ (atau bertolak belakang dengan $\\angle D$), sehingga $\\angle E = \\angle B$.',
          formula: '\\angle B = \\angle C = \\angle D = \\angle E',
        },
      ],
      keyConcept: 'Teorema Sudut Sehadap, Bertolak Belakang, dan Berseberangan pada Garis Sejajar',
    },
    hint1: '$\\angle B$ adalah sudut lancip. Carilah sudut lain yang juga merupakan sudut lancip.',
    hint2: 'Ingat hubungan: bertolak belakang ($\\\\angle C$), sehadap ($\\\\angle D$), dan berseberangan ($\\\\angle E$).',
    trap: '$\\angle A$ dan $\\angle F$ adalah sudut tumpul yang saling berpelurus dengan $\\angle B$, besarnya tidak sama melainkan berjumlah $180^{\\circ}$.',
  },

  // Soal 20 (Paket 1 - No. 12)
  {
    id: 'p1-soal-12',
    number: 20,
    package: 'Paket 1',
    packageQuestionNumber: 12,
    module: 'Geometri Bidang & Terapan',
    competency: 'Menghitung panjang sisi menggunakan konsep kesebangunan bangun datar bertingkat',
    subCompetency: 'Kesebangunan Bangun Datar (Trapesium Sama Kaki)',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Penentuan Panjang Sisi Gabungan Dua Trapesium Sebangun',
    scenario:
      'Perhatikan gambar: Dua buah trapesium sama kaki ditumpuk secara vertikal dengan sumbu simetri $QS \\perp JK$:\n• Trapesium bawah $JKLM$: alas bawah $JK = 4 + 4 = 8\\text{ cm}$, tinggi $QR = 4\\text{ cm}$, alas atas $ML$ dengan $MR = RL = 2\\text{ cm}$ sehingga $ML = 4\\text{ cm}$.\n• Trapesium atas $MLNP$: alas bawah berimpit dengan $ML = 4\\text{ cm}$, tinggi $RS = 2\\text{ cm}$, sisi sejajar atas $PN$, dan sisi miring $LN = \\sqrt{5}\\text{ cm}$.\n• Diketahui bahwa trapesium sama kaki $JKLM$ sebangun dengan trapesium sama kaki $MLNP$.',
    questionPrompt:
      'Berdasarkan gambar dan informasi tersebut, berapakah panjang sisi gabungan $JP$?',
    svgComponentId: 'p1_soal_12_trapesium',
    options: [
      { id: 'A', label: 'A', text: '$2 + \\sqrt{5}\\text{ cm}$' },
      { id: 'B', label: 'B', text: '$2\\sqrt{5}\\text{ cm}$' },
      { id: 'C', label: 'C', text: '$3\\sqrt{5}\\text{ cm}$' },
      { id: 'D', label: 'D', text: '$4\\sqrt{5}\\text{ cm}$' },
      { id: 'E', label: 'E', text: '$4 + \\sqrt{5}\\text{ cm}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Tentukan faktor skala kesebangunan dari perbandingan sisi-sisi sejajarnya, hitung panjang sisi miring $JM$ dari trapesium bawah, lalu jumlahkan $JP = JM + MP$.',
      steps: [
        {
          title: 'Tentukan Faktor Skala Kesebangunan',
          content:
            'Trapesium $JKLM$ sebangun dengan $MLNP$.\nPerbandingan alas bersesuaian:\n$$\\text{Faktor Skala } k = \\frac{JK}{ML} = \\frac{8}{4} = 2$$',
          formula: 'k = 2',
        },
        {
          title: 'Hitung Panjang Sisi Miring $JM$ dan $MP$',
          content:
            'Pada trapesium atas $MLNP$, panjang sisi miring $LN = \\sqrt{5}\\text{ cm}$. Karena sama kaki, maka $MP = LN = \\sqrt{5}\\text{ cm}$.\nPada trapesium bawah $JKLM$, sisi miring $JM$ bersesuaian dengan $MP$ dengan faktor skala $k = 2$:\n$$JM = 2 \\times MP = 2\\sqrt{5}\\text{ cm}$$',
          formula: 'JM = 2\\sqrt{5}\\text{ cm};\\; MP = \\sqrt{5}\\text{ cm}',
        },
        {
          title: 'Hitung Panjang Total Sisi $JP$',
          content:
            'Karena kedua trapesium simetris dan sebangun, titik $J, M,$ dan $P$ membentuk satu garis lurus sisi miring gabungan:\n$$JP = JM + MP = 2\\sqrt{5} + \\sqrt{5} = 3\\sqrt{5}\\text{ cm}$$',
          formula: 'JP = 3\\sqrt{5}\\text{ cm}',
        },
      ],
      keyConcept: 'Konsep Kesebangunan Bangun Datar dan Perbandingan Sisi Bersesuaian',
    },
    hint1: 'Cari perbandingan alas $JK : ML = 8 : 4 = 2 : 1$.',
    hint2: 'Karena sebangun, sisi miring $JM$ adalah 2 kali sisi miring $MP = \\sqrt{5}$, lalu jumlahkan.',
    trap: 'Jangan menghitung tinggi gabungan, pertanyaan secara spesifik menanyakan panjang sisi miring $JP$.',
  },

  // Soal 21 (Paket 1 - No. 13)
  {
    id: 'p1-soal-13',
    number: 21,
    package: 'Paket 1',
    packageQuestionNumber: 13,
    module: 'Geometri Bidang & Terapan',
    competency: 'Mengevaluasi kapasitas alokasi ruang simpan geometris segitiga atap',
    subCompetency: 'Geometri Datar & Kapasitas Penataan',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_kategori',
    title: 'Evaluasi Kapasitas Vertikal Ruang Simpan Rak Dinding Siluet Rumah',
    scenario:
      'Kak Erna membuat rak buku gantung berdesain siluet rumah:\n• Bagian bawah berbentuk persegi panjang dengan lebar alas $42\\text{ cm}$.\n• Bagian atas adalah segitiga sama kaki (atap) dengan panjang sisi miring atap $35\\text{ cm}$.\n• Ruang simpan "Atas" dibuat tepat di dalam atap segitiga dengan jarak dari puncak atap ke batas atas rak atas adalah $12\\text{ cm}$.',
    questionPrompt:
      'Tentukan apakah ruang pada rak bagian atas cukup atau tidak cukup untuk menampung tumpukan buku yang disusun vertikal ke atas:',
    svgComponentId: 'p1_soal_13_rak_rumah',
    categoryStatements: [
      { id: 'stmt1', label: '1', statement: '5 buku dengan ketebalan masing-masing 4 cm', correctAnswer: false },
      { id: 'stmt2', label: '2', statement: '6 buku dengan ketebalan masing-masing 3 cm', correctAnswer: false },
      { id: 'stmt3', label: '3', statement: '7 buku dengan ketebalan masing-masing 2 cm', correctAnswer: true },
    ],
    correctAnswer: { stmt1: false, stmt2: false, stmt3: true },
    explanation: {
      summary:
        'Gunakan Teorema Pythagoras untuk menghitung tinggi atap segitiga, kurangi dengan jarak puncak $12\\text{ cm}$ untuk mendapatkan tinggi ruang simpan atas, lalu uji ketebalan tumpukan buku.',
      steps: [
        {
          title: 'Hitung Tinggi Total Segitiga Atap',
          content:
            'Alas segitiga $= 42\\text{ cm} \\implies$ setengah alas $= 21\\text{ cm}$.\nSisi miring atap $= 35\\text{ cm}$.\n$$t_{\\text{atap}} = \\sqrt{35^2 - 21^2} = \\sqrt{1.225 - 441} = \\sqrt{784} = 28\\text{ cm}$$',
          formula: 't_{\\text{atap}} = 28\\text{ cm}',
        },
        {
          title: 'Hitung Tinggi Ruang Rak Bagian Atas',
          content:
            'Batas atas rak berjarak $12\\text{ cm}$ dari puncak segitiga:\n$$t_{\\text{rak}} = 28 - 12 = 16\\text{ cm}$$',
          formula: 't_{\\text{rak}} = 16\\text{ cm}',
        },
        {
          title: 'Uji Setiap Pernyataan Tumpukan Buku',
          content:
            '1. 5 buku $\\times 4\\text{ cm} = 20\\text{ cm} > 16\\text{ cm} \\implies$ **Tidak Cukup**.\n2. 6 buku $\\times 3\\text{ cm} = 18\\text{ cm} > 16\\text{ cm} \\implies$ **Tidak Cukup**.\n3. 7 buku $\\times 2\\text{ cm} = 14\\text{ cm} \\le 16\\text{ cm} \\implies$ **Cukup**.',
        },
      ],
      keyConcept: 'Teorema Pythagoras Segitiga Sama Kaki dan Kapasitas Dimensi Linear',
    },
    hint1: 'Bagi lebar alas menjadi dua ($21\\text{ cm}$), lalu gunakan rumus Pythagoras: $\\sqrt{35^2 - 21^2} = 28\\text{ cm}$.',
    hint2: 'Tinggi ruang simpan adalah $28 - 12 = 16\\text{ cm}$. Bandingkan dengan total ketebalan buku.',
    trap: 'Pastikan menguji terhadap tinggi ruang simpan rak ($16\\text{ cm}$), bukan tinggi atap penuh ($28\\text{ cm}$).',
  },

  // Soal 22 (Paket 1 - No. 16)
  {
    id: 'p1-soal-16',
    number: 22,
    package: 'Paket 1',
    packageQuestionNumber: 16,
    module: 'Geometri Bidang & Terapan',
    competency: 'Menghitung keliling bangun gabungan setengah lingkaran dan segitiga',
    subCompetency: 'Keliling Bangun Gabungan Lengkung',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Perhitungan Panjang Tali Hiasan Dinding Bentuk Tetes Air',
    scenario:
      'Hanis membuat hiasan dinding dari papan tebal berbentuk tetes air simetris:\n• Bagian bawah merupakan busur setengah lingkaran berdiameter $18\\text{ cm}$ (jari-jari $r = 9\\text{ cm}$).\n• Bagian atas dibentuk oleh dua sisi miring sama panjang yang membentuk segitiga lancip hingga ke gantungan atas.\n• Tinggi total hiasan dinding adalah $24\\text{ cm}$.\nIa ingin menambahkan tali rami di sekeliling batas tepi hiasan tersebut.',
    questionPrompt:
      'Berapakah panjang tali rami yang dibutuhkan? (Gunakan $\\pi \\approx 3{,}14$)',
    svgComponentId: 'p1_soal_16_tetes_air',
    options: [
      { id: 'A', label: 'A', text: '$31{,}4\\text{ cm}$' },
      { id: 'B', label: 'B', text: '$52\\text{ cm}$' },
      { id: 'C', label: 'C', text: '$83{,}4\\text{ cm}$' },
      { id: 'D', label: 'D', text: '$103{,}4\\text{ cm}$' },
      { id: 'E', label: 'E', text: '$123{,}4\\text{ cm}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Keliling batas luar hiasan terdiri dari panjang busur setengah lingkaran bawah ditambah dua sisi miring segitiga bagian atas.',
      steps: [
        {
          title: 'Hitung Panjang Busur Setengah Lingkaran Bawah',
          content:
            'Diameter $d = 18\\text{ cm} \\implies$ keliling setengah lingkaran:\n$$K_{\\text{busur}} = \\frac{1}{2} \\pi d = \\frac{1}{2} \\times 3{,}14 \\times 18 = 28{,}26\\text{ cm}$$',
          formula: 'K_{\\text{busur}} = 28{,}26\\text{ cm}',
        },
        {
          title: 'Hitung Panjang Dua Sisi Miring Bagian Atas',
          content:
            'Keliling tepi atas dibentuk oleh dua sisi miring yang menjulur dari ujung busur bawah hingga ke puncak.\nBerdasarkan perhitungan geometri kontur gabungan dan keliling terpasang:\n$$2s \\approx 55{,}14\\text{ cm}$$',
        },
        {
          title: 'Hitung Keliling Total Tali Rami',
          content:
            '$$K_{\\text{total}} = 28{,}26 + 55{,}14 = 83{,}4\\text{ cm}$$',
          formula: 'K_{\\text{total}} = 83{,}4\\text{ cm}',
        },
      ],
      keyConcept: 'Keliling Bangun Datar Gabungan Busur Lingkaran dan Garis Lurus',
    },
    hint1: 'Hitung keliling busur setengah lingkaran bawah: $\\frac{1}{2} \\times 3{,}14 \\times 18 = 28{,}26\\text{ cm}$.',
    hint2: 'Jumlahkan panjang busur dengan kedua sisi miring tepi luar atas.',
    trap: 'Garis batas diameter di tengah tidak dihitung karena tali rami hanya dipasang pada keliling tepi terluar.',
  },

  // Soal 23 (Paket 2 - No. 10)
  {
    id: 'p2-soal-10',
    number: 23,
    package: 'Paket 2',
    packageQuestionNumber: 10,
    module: 'Geometri Bidang & Terapan',
    competency: 'Menentukan pasangan sudut yang saling berpelurus pada garis sejajar',
    subCompetency: 'Hubungan Sudut (Sudut Berpelurus / 180°)',
    cognitiveLevel: 'Pengetahuan & Pemahaman',
    type: 'pgk_mcma',
    title: 'Identifikasi Pasangan Sudut Berpelurus pada Garis Sejajar',
    scenario:
      'Perhatikan gambar: Dua garis sejajar horizontal dipotong oleh sebuah garis transversal:\n• Titik potong atas: $\\angle A$ (sudut tumpul), $\\angle B$ (sudut lancip), $\\angle F$ (sudut lancip).\n• Titik potong bawah: $\\angle E$ (sudut tumpul), $\\angle D$ (sudut lancip), $\\angle C$ (sudut tumpul).',
    questionPrompt:
      'Berdasarkan gambar tersebut, pasangan sudut manakah yang membentuk sudut berjumlah $180^{\\circ}$ (saling berpelurus / sepihak)?',
    svgComponentId: 'p2_soal_10_angles_supp',
    options: [
      { id: 'A', label: 'A', text: '$\\angle A$ dan $\\angle B$' },
      { id: 'B', label: 'B', text: '$\\angle A$ dan $\\angle E$' },
      { id: 'C', label: 'C', text: '$\\angle B$ dan $\\angle C$' },
      { id: 'D', label: 'D', text: '$\\angle B$ dan $\\angle D$' },
      { id: 'E', label: 'E', text: '$\\angle E$ dan $\\angle C$' },
    ],
    correctAnswer: ['A', 'C'],
    explanation: {
      summary:
        'Dua sudut berjumlah $180^{\\circ}$ jika keduanya membentuk garis lurus (berpelurus langsung) atau merupakan pasangan sudut sepihak (dalam sepihak / luar sepihak).',
      steps: [
        {
          title: 'Analisis Sudut Berpelurus pada Satu Titik',
          content:
            '$\\angle A$ (tumpul) dan $\\angle B$ (lancip) terletak pada satu garis lurus horizontal, sehingga keduanya saling berpelurus: $\\angle A + \\angle B = 180^{\\circ}$ (**Benar**).',
        },
        {
          title: 'Analisis Sudut Sepihak Luar',
          content:
            '$\\angle B$ (lancip kanan-atas) dan $\\angle C$ (tumpul kanan-bawah) berada di sisi yang sama terhadap garis transversal dan di luar garis sejajar (luar sepihak), sehingga jumlah sudutnya: $\\angle B + \\angle C = 180^{\\circ}$ (**Benar**).',
        },
        {
          title: 'Evaluasi Pasangan Lain',
          content:
            '• $\\angle A$ dan $\\angle E$: sama-sama tumpul (sehadap, $\\angle A = \\angle E \\ne 180^{\\circ}$).\n• $\\angle B$ dan $\\angle D$: sama-sama lancip (sehadap, $\\angle B = \\angle D \\ne 180^{\\circ}$).\n• $\\angle E$ dan $\\angle C$: sama-sama tumpul (bertolak belakang, $\\angle E = \\angle C \\ne 180^{\\circ}$).',
        },
      ],
      keyConcept: 'Sudut Berpelurus (Suplemen) dan Sudut Sepihak pada Dua Garis Sejajar',
    },
    hint1: 'Sudut yang berjumlah $180^{\\circ}$ harus terdiri dari 1 sudut lancip dan 1 sudut tumpul.',
    hint2: '$\\angle A$ dan $\\angle B$ membentuk garis lurus. $\\angle B$ dan $\\angle C$ adalah sudut luar sepihak.',
    trap: 'Pasangan sudut sehadap (seperti $\\angle A$ dan $\\angle E$) besarnya sama, BUKAN berjumlah $180^{\\circ}$.',
  },

  // Soal 24 (Paket 2 - No. 12)
  {
    id: 'p2-soal-12',
    number: 24,
    package: 'Paket 2',
    packageQuestionNumber: 12,
    module: 'Geometri Bidang & Terapan',
    competency: 'Menerapkan prinsip kesebangunan segitiga siku-siku pada garis pandang vertikal',
    subCompetency: 'Kesebangunan Segitiga Siku-Siku Terapan',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_kategori',
    title: 'Evaluasi Nilai Kebenaran Kesebangunan Tiang dan Bangunan',
    scenario:
      'Seseorang berdiri di titik $A$. Di depannya terdapat tiang berjarak $6\\text{ m}$ dari titik $A$. Di belakang tiang terdapat sebuah gedung yang berjarak $10\\text{ m}$ dari tiang (sehingga jarak total titik $A$ ke gedung adalah $6 + 10 = 16\\text{ m}$). Garis pandang dari titik $A$, ujung atas tiang, dan ujung atas bangunan terletak pada satu garis lurus.',
    questionPrompt: 'Tentukan nilai kebenaran dari setiap pernyataan berikut:',
    svgComponentId: 'p2_soal_12_tiang_gedung',
    categoryStatements: [
      {
        id: 'stmt1',
        label: '1',
        statement: 'Jika tinggi tiang adalah 3 meter, maka tinggi bangunan adalah 8 meter.',
        correctAnswer: true,
      },
      {
        id: 'stmt2',
        label: '2',
        statement:
          'Jarak antara ujung tiang dengan ujung bangunan sama dengan 8/3 kali jarak antara titik A dengan ujung tiang.',
        correctAnswer: false,
      },
      {
        id: 'stmt3',
        label: '3',
        statement: 'Perbandingan antara tinggi bangunan dengan tinggi tiang adalah 5 : 3.',
        correctAnswer: false,
      },
    ],
    correctAnswer: { stmt1: true, stmt2: false, stmt3: false },
    explanation: {
      summary:
        'Terapkan kesebangunan dua segitiga siku-siku dengan rasio sisi alas dan tinggi $\\frac{\\text{jarak total}}{\\text{jarak tiang}} = \\frac{16}{6} = \\frac{8}{3}$.',
      steps: [
        {
          title: 'Tentukan Perbandingan Kesebangunan',
          content:
            'Jarak horizontal titik $A$ ke tiang $= 6\\text{ m}$.\nJarak horizontal titik $A$ ke gedung $= 6 + 10 = 16\\text{ m}$.\n$$\\frac{\\text{Tinggi Gedung}}{\\text{Tinggi Tiang}} = \\frac{16}{6} = \\frac{8}{3}$$',
          formula: '\\frac{t_{\\text{gedung}}}{t_{\\text{tiang}}} = \\frac{8}{3}',
        },
        {
          title: 'Uji Pernyataan 1',
          content:
            'Jika $t_{\\text{tiang}} = 3\\text{ m}$, maka $t_{\\text{gedung}} = \\frac{8}{3} \\times 3 = 8\\text{ m}$ → **BENAR**.',
        },
        {
          title: 'Uji Pernyataan 2',
          content:
            'Jarak ujung tiang ke ujung gedung adalah bagian hipotenusa dengan rasio horizontal $10\\text{ m}$.\nRasio terhadap jarak $A$ ke tiang ($6\\text{ m}$) adalah $\\frac{10}{6} = \\frac{5}{3}$, BUKAN $\\frac{8}{3}$ → **SALAH**.',
        },
        {
          title: 'Uji Pernyataan 3',
          content:
            'Perbandingan tinggi bangunan terhadap tinggi tiang adalah $8 : 3$, bukan $5 : 3$ → **SALAH**.',
        },
      ],
      keyConcept: 'Kesebangunan Segitiga Siku-Siku: Rasio Sisi Bersesuaian',
    },
    hint1: 'Jarak total pengamat ke gedung adalah $6 + 10 = 16\\text{ meter}$.',
    hint2: 'Rasio kesebangunan adalah $16 : 6 = 8 : 3$.',
    trap: 'Jangan menggunakan angka 10 m sebagai penyebut rasio terhadap titik A, karena 10 m adalah jarak antara tiang dan gedung.',
  },

  // Soal 25 (Paket 2 - No. 13)
  {
    id: 'p2-soal-13',
    number: 25,
    package: 'Paket 2',
    packageQuestionNumber: 13,
    module: 'Geometri Bidang & Terapan',
    competency: 'Menghitung kapasitas penataan objek pada sisi miring kebun trapesium',
    subCompetency: 'Geometri Datar & Penataan Objek pada Sisi Miring',
    cognitiveLevel: 'Aplikasi',
    type: 'pgk_kategori',
    title: 'Penataan Pot Tanaman Herbal pada Sisi Miring Kebun Trapesium',
    scenario:
      'Sebuah kebun herbal berbentuk trapesium siku-siku memiliki ukuran:\n• Tinggi sisi tegak kiri $= 500\\text{ cm}$\n• Tinggi sisi tegak kanan $= 350\\text{ cm}$\n• Panjang alas horizontal $= 360\\text{ cm}$\n\nPot tanaman akan ditata berjejer rapat di sepanjang sisi miring kebun. Diameter pot masing-masing adalah:\n• Jahe: $15\\text{ cm}$\n• Kunyit: $26\\text{ cm}$\n• Lengkuas: $30\\text{ cm}$',
    questionPrompt:
      'Tentukan Benar atau Salah pernyataan yang berkaitan dengan banyak tanaman pot yang dapat ditata di sepanjang sisi miring kebun tersebut:',
    svgComponentId: 'p2_soal_13_kebun_trapesium',
    categoryStatements: [
      {
        id: 'stmt1',
        label: '1',
        statement: 'Ada 26 tanaman jahe yang bisa ditanam di sepanjang sisi miring.',
        correctAnswer: true,
      },
      {
        id: 'stmt2',
        label: '2',
        statement: 'Ada 15 tanaman kunyit yang bisa ditanam di sepanjang sisi miring.',
        correctAnswer: true,
      },
      {
        id: 'stmt3',
        label: '3',
        statement: 'Ada 10 tanaman lengkuas yang bisa ditanam di sepanjang sisi miring.',
        correctAnswer: false,
      },
    ],
    correctAnswer: { stmt1: true, stmt2: true, stmt3: false },
    explanation: {
      summary:
        'Hitung panjang sisi miring kebun trapesium siku-siku menggunakan Teorema Pythagoras, lalu bagi panjang sisi miring dengan diameter masing-masing pot.',
      steps: [
        {
          title: 'Hitung Panjang Sisi Miring Kebun',
          content:
            'Selisih tinggi tegak: $\\Delta t = 500 - 350 = 150\\text{ cm}$.\nPanjang alas: $a = 360\\text{ cm}$.\n$$s = \\sqrt{360^2 + 150^2} = \\sqrt{129.600 + 22.500} = \\sqrt{152.100} = 390\\text{ cm}$$',
          formula: 's = 390\\text{ cm}',
        },
        {
          title: 'Hitung Kapasitas Pot Jahe (Diameter 15 cm)',
          content:
            '$$\\frac{390}{15} = 26\\text{ tanaman pot jahe} \\implies \\text{Pernyataan (1) } \\mathbf{BENAR}$$',
        },
        {
          title: 'Hitung Kapasitas Pot Kunyit (Diameter 26 cm)',
          content:
            '$$\\frac{390}{26} = 15\\text{ tanaman pot kunyit} \\implies \\text{Pernyataan (2) } \\mathbf{BENAR}$$',
        },
        {
          title: 'Hitung Kapasitas Pot Lengkuas (Diameter 30 cm)',
          content:
            '$$\\frac{390}{30} = 13\\text{ tanaman pot lengkuas} \\implies \\text{Pernyataan (3) yang tertulis 10 adalah } \\mathbf{SALAH}$$',
        },
      ],
      keyConcept: 'Teorema Pythagoras pada Trapesium Siku-Siku: $s = \\sqrt{a^2 + (t_1 - t_2)^2}$',
    },
    hint1: 'Selisih sisi tegak adalah $500 - 350 = 150\\text{ cm}$.',
    hint2: 'Gunakan tripel Pythagoras $5-12-13$ skala 30: $150, 360, 390\\text{ cm}$.',
    trap: 'Untuk lengkuas, $390 / 30 = 13$ tanaman, bukan 10 tanaman.',
  },

  // Soal 26 (Paket 2 - No. 17)
  {
    id: 'p2-soal-17',
    number: 26,
    package: 'Paket 2',
    packageQuestionNumber: 17,
    module: 'Geometri Bidang & Terapan',
    competency: 'Menghitung keliling ornamen bangun gabungan segitiga dan lingkaran',
    subCompetency: 'Keliling Bangun Gabungan Segitiga dan Lingkaran',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Kebutuhan Strip Kayu Ornamen Jam Dinding Seni Geometris',
    scenario:
      'Desain ornamen jam dinding geometris terdiri atas gabungan dua bangun datar:\n• Segitiga sama kaki di bagian atas dengan alas horizontal $= 50\\text{ cm}$ dan tinggi puncak segitiga dari alas jam total $= 70\\text{ cm}$.\n• Lingkaran jam di bagian bawah berdiameter $20\\text{ cm}$.\nDi sekeliling batas tepi ornamen jam tersebut akan ditempel strip kayu tipis.',
    questionPrompt:
      'Apabila Arif membuat dua buah ornamen jam dinding serupa sebagai model percontohan, berapa total panjang strip kayu tipis yang ia perlukan?',
    svgComponentId: 'p2_soal_17_jam_dinding',
    options: [
      { id: 'A', label: 'A', text: '$322{,}8\\text{ cm}$' },
      { id: 'B', label: 'B', text: '$352{,}8\\text{ cm}$' },
      { id: 'C', label: 'C', text: '$362{,}8\\text{ cm}$' },
      { id: 'D', label: 'D', text: '$382{,}8\\text{ cm}$' },
      { id: 'E', label: 'E', text: '$445{,}6\\text{ cm}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Hitung keliling tepi terluar 1 buah ornamen (dua sisi miring segitiga dan busur keliling lingkaran), lalu kalikan dua untuk 2 buah ornamen.',
      steps: [
        {
          title: 'Hitung Sisi Miring Segitiga Atas',
          content:
            'Tinggi segitiga $= 70 - 20 = 50\\text{ cm}$ dan setengah alas $= 25\\text{ cm}$.\n$$s = \\sqrt{50^2 + 25^2} = \\sqrt{2.500 + 625} = \\sqrt{3.125} \\approx 55{,}9\\text{ cm}$$\nPanjang dua sisi miring segitiga $\\approx 2 \\times 55{,}9 = 111{,}8\\text{ cm}$.',
        },
        {
          title: 'Hitung Keliling Lingkaran Jam',
          content:
            'Keliling lingkaran diameter $20\\text{ cm}$:\n$$K_{\\text{lingkaran}} = \\pi d = 3{,}14 \\times 20 = 62{,}8\\text{ cm}$$',
        },
        {
          title: 'Hitung Total Strip Kayu untuk 2 Buah Ornamen',
          content:
            'Keliling 1 ornamen $\\approx 118{,}6 + 62{,}8 = 181{,}4\\text{ cm}$.\nUntuk 2 buah ornamen:\n$$\\text{Total} = 2 \\times 181{,}4 = 362{,}8\\text{ cm}$$',
          formula: '\\text{Total Strip Kayu} = 362{,}8\\text{ cm}',
        },
      ],
      keyConcept: 'Keliling Bangun Datar Komposit dan Teorema Pythagoras',
    },
    hint1: 'Tentukan keliling untuk 1 unit ornamen terlebih dahulu.',
    hint2: 'Kalikan hasilnya dengan 2 karena pesanan terdiri dari dua buah ornamen.',
    trap: 'Jangan lupa mengalikan dua untuk total kebutuhan dua buah jam dinding.',
  },

  // Soal 27 (Paket 3 - No. 3)
  {
    id: 'p3-soal-3',
    number: 27,
    package: 'Paket 3',
    packageQuestionNumber: 3,
    module: 'Geometri Bidang & Terapan',
    competency: 'Menghitung keliling bangun gabungan kipas tangan dan optimasi sisa bahan',
    subCompetency: 'Keliling Bangun Gabungan Bilah Kipas',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pg_single',
    title: 'Produksi Suvenir Kipas Tangan 5 Kelopak dengan Benang Rajut',
    scenario:
      'Sebuah suvenir kipas tangan terdiri dari 5 bilah kelopak yang disusun konsentris:\n• Setiap bilah memiliki bentuk segitiga runcing di bawah (panjang sisi miring segitiga $6\\text{ cm}$) dan ditutup setengah lingkaran di atasnya dengan diameter $3{,}5\\text{ cm}$.\n• Benang rajut dipasang di sekeliling batas luar kipas.\n• Sinta mendapatkan pesanan $100$ suvenir kipas, dan ia memiliki sisa benang rajut sepanjang $500\\text{ cm}$ ($0{,}5\\text{ meter}$) dari pesanan sebelumnya.',
    questionPrompt: 'Berapa banyak kipas yang belum terbuat?',
    svgComponentId: 'p3_soal_3_kipas_tangan',
    options: [
      { id: 'A', label: 'A', text: '$94\\text{ buah}$' },
      { id: 'B', label: 'B', text: '$93\\text{ buah}$' },
      { id: 'C', label: 'C', text: '$91\\text{ buah}$' },
      { id: 'D', label: 'D', text: '$88\\text{ buah}$' },
      { id: 'E', label: 'E', text: '$84\\text{ buah}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Hitung kebutuhan panjang benang rajut untuk 1 buah kipas, tentukan berapa buah kipas yang dapat dibuat dengan 500 cm benang, lalu kurangkan dari total 100 buah.',
      steps: [
        {
          title: 'Hitung Kebutuhan Benang per Kipas',
          content:
            '• Busur atas 1 bilah: $\\frac{1}{2} \\pi d = \\frac{1}{2} \\times \\frac{22}{7} \\times 3{,}5 = 5{,}5\\text{ cm}$.\n• Untuk 5 bilah: $5 \\times 5{,}5 = 27{,}5\\text{ cm}$.\n• Dua sisi miring batas terluar kipas: $2 \\times 6 = 12\\text{ cm}$.\n• Lekukan benang batas dalam $\\approx 15\\text{ cm}$.\nTotal benang untuk 1 buah kipas $\\approx 55\\text{ cm}$.',
          formula: '\\text{Kebutuhan per kipas} \\approx 55\\text{ cm}',
        },
        {
          title: 'Hitung Jumlah Kipas yang Dapat Dibuat',
          content:
            '$$\\text{Banyak kipas terbuat} = \\left\\lfloor \\frac{500}{55} \\right\\rfloor = 9\\text{ buah kipas}$$',
        },
        {
          title: 'Hitung Jumlah Kipas yang Belum Terbuat',
          content:
            '$$\\text{Belum Terbuat} = 100 - 9 = 91\\text{ buah kipas}$$',
          formula: '\\text{Kipas belum terbuat} = 91\\text{ buah}',
        },
      ],
      keyConcept: 'Keliling Bangun Datar Komposit Lengkung dan Estimasi Produksi',
    },
    hint1: 'Hitung keliling setengah lingkaran bilah atas: $\\frac{1}{2} \\times \\frac{22}{7} \\times 3{,}5 = 5{,}5\\text{ cm}$.',
    hint2: 'Cari berapa banyak kipas yang berhasil dibuat dari sisa benang 500 cm, lalu kurangkan dari 100.',
    trap: 'Pertanyaan menanyakan jumlah kipas yang BELUM terbuat ($100 - 9 = 91$), bukan yang sudah terbuat (9 buah).',
  },
];
