import { Question } from '../../types/quiz';

export const barisanEksponensialQuestions: Question[] = [
  // Soal 15 (Paket 1 - No. 6)
  {
    id: 'p1-soal-6',
    number: 15,
    package: 'Paket 1',
    packageQuestionNumber: 6,
    module: 'Barisan & Pemodelan Eksponensial',
    competency: 'Menyelesaikan permasalahan barisan aritmatika dalam konteks biologi/pertumbuhan',
    subCompetency: 'Barisan Aritmatika',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Model Pertumbuhan Tinggi Tanaman Mingguan Berpola Aritmatika',
    scenario:
      'Seorang siswa melakukan pengamatan tinggi tanaman setiap minggunya. Hasil pengamatan menunjukkan bahwa pada minggu ke-1 tinggi tanaman adalah $23\\text{ cm}$, minggu ke-2 menjadi $26\\text{ cm}$, minggu ke-3 menjadi $29\\text{ cm}$, dan selalu menunjukkan pertambahan tinggi dengan pola yang sama untuk sekitar 8 minggu berikutnya.',
    questionPrompt:
      'Berapakah tinggi tanaman pada minggu ke-7 dalam pengamatan tersebut?',
    options: [
      { id: 'A', label: 'A', text: '$35\\text{ cm}$' },
      { id: 'B', label: 'B', text: '$38\\text{ cm}$' },
      { id: 'C', label: 'C', text: '$41\\text{ cm}$' },
      { id: 'D', label: 'D', text: '$44\\text{ cm}$' },
      { id: 'E', label: 'E', text: '$47\\text{ cm}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Pertumbuhan tinggi tanaman membentuk barisan aritmatika dengan suku pertama $a = 23$ dan beda $b = 3$. Hitung suku ke-7 ($U_7$).',
      steps: [
        {
          title: 'Identifikasi Parameter Barisan Aritmatika',
          content:
            '• Suku pertama ($a = U_1$): $23\\text{ cm}$\n• Beda pertambahan ($b$): $U_2 - U_1 = 26 - 23 = 3\\text{ cm}$',
          formula: 'a = 23;\\; b = 3',
        },
        {
          title: 'Gunakan Rumus Suku ke-n Barisan Aritmatika',
          content:
            '$$U_n = a + (n - 1)b$$\nUntuk minggu ke-7 ($n = 7$):\n$$U_7 = 23 + (7 - 1) \\times 3 = 23 + 6 \\times 3 = 23 + 18 = 41\\text{ cm}$$',
          formula: 'U_7 = 41\\text{ cm}',
        },
      ],
      keyConcept: 'Rumus Suku ke-n Barisan Aritmatika: $U_n = a + (n-1)b$',
    },
    hint1: 'Perhatikan bahwa tinggi bertambah tetap $3\\text{ cm}$ setiap minggu.',
    hint2: 'Kalikan beda 3 dengan 6, lalu tambahkan dengan tinggi awal 23 cm.',
    trap: 'Untuk minggu ke-7, pertambahan terjadi sebanyak 6 kali, bukan 7 kali.',
  },

  // Soal 16 (Paket 1 - No. 7)
  {
    id: 'p1-soal-7',
    number: 16,
    package: 'Paket 1',
    packageQuestionNumber: 7,
    module: 'Barisan & Pemodelan Eksponensial',
    competency: 'Menganalisis pertumbuhan eksponensial kultur sel bersyarat ganda',
    subCompetency: 'Pertumbuhan Eksponensial Terapan',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_mcma',
    title: 'Analisis Waktu Populasi Stabil Kultur Mikroorganisme',
    scenario:
      'Sebuah kultur mikroorganisme memiliki $500$ sel pada pukul 06.00. Jumlah sel bertambah $30\\%$ setiap 2 jam karena proses reproduksi pembelahan sel.\nDiketahui kriteria laboratorium berikut:\n• Populasi mikroorganisme dianggap **stabil** jika jumlah sel lebih dari $1.200$.\n• Populasi dianggap **terlalu padat** jika jumlah sel melebihi $2.000$ sehingga kultur perlu segera dipindahkan ke media baru.',
    questionPrompt:
      'Pada pukul berapa sajakah populasi berada dalam kondisi stabil, tetapi belum perlu dipindahkan ke media baru?',
    options: [
      { id: 'A', label: 'A', text: '10.00' },
      { id: 'B', label: 'B', text: '12.00' },
      { id: 'C', label: 'C', text: '14.00' },
      { id: 'D', label: 'D', text: '16.00' },
      { id: 'E', label: 'E', text: '18.00' },
    ],
    correctAnswer: ['C', 'D'],
    explanation: {
      summary:
        'Hitung pertumbuhan sel setiap interval 2 jam dengan faktor pengali $1{,}30$. Cari jam di mana jumlah sel berada pada rentang $1.200 < \\text{sel} \\le 2.000$.',
      steps: [
        {
          title: 'Hitung Pertumbuhan Populasi Setiap 2 Jam',
          content:
            '• Pukul 06.00 ($t = 0$): $500$ sel\n• Pukul 08.00 ($t = 1$): $500 \\times 1{,}3 = 650$ sel\n• Pukul 10.00 ($t = 2$): $650 \\times 1{,}3 = 845$ sel\n• Pukul 12.00 ($t = 3$): $845 \\times 1{,}3 = 1.098{,}5 \\approx 1.099$ sel ($< 1.200$, belum stabil)\n• Pukul 14.00 ($t = 4$): $1.098{,}5 \\times 1{,}3 = 1.428$ sel (**Stabil: > 1.200 dan ≤ 2.000**)\n• Pukul 16.00 ($t = 5$): $1.428 \\times 1{,}3 = 1.856$ sel (**Stabil: > 1.200 dan ≤ 2.000**)\n• Pukul 18.00 ($t = 6$): $1.856 \\times 1{,}3 = 2.413$ sel ($> 2.000$, terlalu padat dan harus dipindahkan)',
        },
        {
          title: 'Kesimpulan Waktu yang Memenuhi',
          content:
            'Kondisi stabil ($> 1.200$) tetapi belum perlu dipindahkan ($\\le 2.000$) terpenuhi pada pukul **14.00** dan **16.00**.',
          formula: '\\text{Jam yang memenuhi} = \\text{14.00 dan 16.00}',
        },
      ],
      keyConcept: 'Pertumbuhan Eksponensial Diskrit: $N_t = N_0(1 + r)^t$',
    },
    hint1: 'Faktor pengali setiap 2 jam adalah $1 + 0{,}30 = 1{,}3$.',
    hint2: 'Cari jam saat populasi berada di antara 1.200 dan 2.000 sel.',
    trap: 'Pada pukul 12.00 populasi baru sekitar 1.099 sel sehingga belum mencapai batas stabil (> 1.200 sel).',
  },

  // Soal 17 (Paket 2 - No. 6)
  {
    id: 'p2-soal-6',
    number: 17,
    package: 'Paket 2',
    packageQuestionNumber: 6,
    module: 'Barisan & Pemodelan Eksponensial',
    competency: 'Menghitung suku tertentu pada barisan aritmatika kontekstual',
    subCompetency: 'Barisan Aritmatika',
    cognitiveLevel: 'Aplikasi',
    type: 'pg_single',
    title: 'Koreografi Kertas Suporter Tribun Stadion Berpola Aritmatika',
    scenario:
      'Kelompok suporter timnas duduk di tribun stadion membentuk koreografi kertas warna. Total lembar kertas di baris paling bawah (baris 1) adalah $400$ lembar, di baris ke-2 sebanyak $550$ lembar, dan bertambah dengan beda konstan hingga baris ke-7.',
    questionPrompt:
      'Berapa banyak penonton yang memegang kertas koreo di baris ke-5?',
    options: [
      { id: 'A', label: 'A', text: '$700\\text{ orang}$' },
      { id: 'B', label: 'B', text: '$850\\text{ orang}$' },
      { id: 'C', label: 'C', text: '$1.000\\text{ orang}$' },
      { id: 'D', label: 'D', text: '$1.150\\text{ orang}$' },
      { id: 'E', label: 'E', text: '$1.300\\text{ orang}$' },
    ],
    correctAnswer: 'C',
    explanation: {
      summary:
        'Barisan banyak kertas koreografi adalah barisan aritmatika dengan $a = 400$ dan $b = 150$. Hitung $U_5$.',
      steps: [
        {
          title: 'Tentukan Suku Pertama dan Beda',
          content:
            '• Suku pertama ($a = U_1$): $400$\n• Beda ($b$): $U_2 - U_1 = 550 - 400 = 150$',
          formula: 'a = 400;\\; b = 150',
        },
        {
          title: 'Hitung Suku ke-5 ($U_5$)',
          content:
            '$$U_5 = a + 4b = 400 + 4(150) = 400 + 600 = 1.000\\text{ orang}$$',
          formula: 'U_5 = 1.000\\text{ orang}',
        },
      ],
      keyConcept: 'Barisan Aritmatika Kontekstual',
    },
    hint1: 'Beda barisan adalah $550 - 400 = 150$.',
    hint2: 'Untuk baris ke-5, tambahkan 4 kali beda ke suku pertama.',
    trap: 'Pastikan tidak menghitung jumlah deret total ($S_5$), pertanyaan menanyakan jumlah di baris ke-5 saja ($U_5$).',
  },

  // Soal 18 (Paket 2 - No. 7)
  {
    id: 'p2-soal-7',
    number: 18,
    package: 'Paket 2',
    packageQuestionNumber: 7,
    module: 'Barisan & Pemodelan Eksponensial',
    competency: 'Menganalisis peluruhan eksponensial kadar obat/kondisi medis harian',
    subCompetency: 'Peluruhan Eksponensial Terapan',
    cognitiveLevel: 'Penalaran (HOTS)',
    type: 'pgk_mcma',
    title: 'Pemantauan Peluruhan Kadar Asam Urat Terapi Obat',
    scenario:
      'Kadar asam urat seorang pasien pada hari ke-1 tercatat $13\\text{ mg/dL}$. Obat penurun asam urat bekerja secara konsisten menurunkan kadar sebesar $20\\%$ setiap harinya (tersisa $80\\%$ dari hari sebelumnya).\n• Pasien mulai merasa nyaman saat kadar asam urat di bawah $7\\text{ mg/dL}$.\n• Pasien dianggap sembuh secara klinis jika kadar asam urat mencapai kurang dari $5\\text{ mg/dL}$.',
    questionPrompt:
      'Pada hari keberapa sajakah pasien merasa nyaman tetapi belum dianggap sembuh secara klinis?',
    options: [
      { id: 'A', label: 'A', text: 'Hari ke-2' },
      { id: 'B', label: 'B', text: 'Hari ke-3' },
      { id: 'C', label: 'C', text: 'Hari ke-4' },
      { id: 'D', label: 'D', text: 'Hari ke-5' },
      { id: 'E', label: 'E', text: 'Hari ke-6' },
    ],
    correctAnswer: ['C', 'D'],
    explanation: {
      summary:
        'Hitung peluruhan kadar asam urat dengan faktor pengali $0{,}80$ setiap hari. Cari hari saat kadar asam urat berada pada rentang $5 \\le \\text{kadar} < 7\\text{ mg/dL}$.',
      steps: [
        {
          title: 'Hitung Kadar Asam Urat Setiap Hari',
          content:
            '• Hari ke-1: $13\\text{ mg/dL}$\n• Hari ke-2: $13 \\times 0{,}8 = 10{,}4\\text{ mg/dL}$\n• Hari ke-3: $10{,}4 \\times 0{,}8 = 8{,}32\\text{ mg/dL}$\n• Hari ke-4: $8{,}32 \\times 0{,}8 = 6{,}656\\text{ mg/dL}$ (**< 7 dan ≥ 5, Nyaman & Belum Sembuh Klinis**)\n• Hari ke-5: $6{,}656 \\times 0{,}8 = 5{,}325\\text{ mg/dL}$ (**< 7 dan ≥ 5, Nyaman & Belum Sembuh Klinis**)\n• Hari ke-6: $5{,}325 \\times 0{,}8 = 4{,}26\\text{ mg/dL}$ ($< 5$, sudah sembuh klinis)',
        },
        {
          title: 'Kesimpulan Hari yang Memenuhi Kriteria',
          content:
            'Pasien merasa nyaman ($< 7$) tetapi belum sembuh klinis ($\\ge 5$) pada **Hari ke-4** dan **Hari ke-5**.',
          formula: '\\text{Hari yang memenuhi} = \\text{Hari ke-4 dan Hari ke-5}',
        },
      ],
      keyConcept: 'Peluruhan Eksponensial: $N_t = N_0(1 - r)^t$',
    },
    hint1: 'Kadar obat berkurang $20\\%$, yang artinya setiap hari tersisa $80\\%$ ($0{,}8$).',
    hint2: 'Cari hari saat nilai kadar berada di antara $5$ dan $7\\text{ mg/dL}$.',
    trap: 'Pada hari ke-6 kadar telah mencapai $4{,}26\\text{ mg/dL}$ yang berarti sudah sembuh klinis (< 5 mg/dL).',
  },
];
