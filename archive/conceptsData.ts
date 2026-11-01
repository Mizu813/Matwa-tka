export interface ConceptItem {
  id: string;
  module: string;
  title: string;
  formulaLatex: string;
  intuition: string;
  trap: string;
  tags: string[];
}

export interface ModuleConceptGroup {
  id: string;
  moduleName: string;
  iconName: string;
  summary: string;
  concepts: ConceptItem[];
}

export const conceptsData: ModuleConceptGroup[] = [
  {
    id: 'mod-aljabar',
    moduleName: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
    iconName: 'Cpu',
    summary: 'Sistem persamaan linear (SPLDV/SPLTV), daerah himpunan penyelesaian SPtLDV, dan optimasi fungsi objektif pada Program Linear.',
    concepts: [
      {
        id: 'c-spldv',
        module: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
        title: 'Sistem Persamaan Linear Dua Variabel (SPLDV)',
        formulaLatex: '\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases} \\implies x = \\frac{c_1 b_2 - c_2 b_1}{a_1 b_2 - a_2 b_1}',
        intuition: 'SPLDV memodelkan perpotongan dua garis lurus pada bidang Kartesius. Solusi tunggal $(x, y)$ adalah titik potong unik di mana kedua persamaan terpenuhi serentak.',
        trap: 'Jangan berasumsi selalu ada solusi unik. Jika $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ kedua garis sejajar (tidak ada solusi), dan jika semua perbandingannya sama maka kedua garis berimpit (solusi tak hingga).',
        tags: ['SPLDV', 'Eliminasi', 'Substitusi', 'Aturan Cramer']
      },
      {
        id: 'c-program-linear',
        module: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
        title: 'Optimasi Program Linear & Titik Pojok (Corner Points)',
        formulaLatex: 'Z_{\\text{maks/min}} = f(x, y) = ax + by \\quad \\text{pada daerah feasible } \\mathcal{D}',
        intuition: 'Fungsi objektif linear bersifat monoton. Oleh karena itu, nilai ekstrem maksimum atau minimum selalu dicapai pada salah satu titik sudut (titik pojok) poligon daerah himpunan penyelesaian yang dibatasi garis kendala.',
        trap: 'Jangan lupa memeriksa syarat non-negatif $x \\ge 0$ dan $y \\ge 0$. Ketika garis selidik $ax + by = k$ sejajar dengan salah satu garis batas kendala, nilai optimum terjadi di sepanjang segmen garis tersebut (solusi optimum ganda).',
        tags: ['Program Linear', 'Uji Titik Pojok', 'Garis Selidik', 'Fungsi Objektif']
      },
      {
        id: 'c-pertidaksamaan',
        module: 'Aljabar & Sistem Persamaan/Pertidaksamaan',
        title: 'Pertidaksamaan Linear & Penentuan Daerah Bersih',
        formulaLatex: 'ax + by \\le c \\iff y \\le -\\frac{a}{b}x + \\frac{c}{b} \\quad (b > 0)',
        intuition: 'Garis batas membagi bidang menjadi dua semi-bidang. Uji satu titik sembarang (paling mudah titik asal $(0, 0)$ jika garis tidak melewatinya) untuk memastikan daerah mana yang memenuhi syarat.',
        trap: 'Tanda pertidaksamaan WAJIB berbalik arah jika kedua ruas dikalikan atau dibagi dengan bilangan negatif. Contoh: $-2y \\le 6 \\implies y \\ge -3$.',
        tags: ['SPtLDV', 'Uji Titik', 'Daerah Feasible']
      }
    ]
  },
  {
    id: 'mod-fungsi',
    moduleName: 'Fungsi & Relasi',
    iconName: 'Workflow',
    summary: 'Komposisi fungsi bersarang, invers fungsi rasional pecahan, dan karakteristik titik puncak serta sumbu simetri fungsi kuadrat.',
    concepts: [
      {
        id: 'c-invers-rasional',
        module: 'Fungsi & Relasi',
        title: 'Invers Fungsi Rasional Pecahan Linear',
        formulaLatex: 'f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}, \\quad x \\neq \\frac{a}{c}',
        intuition: 'Invers fungsi menukar posisi input dan output (pencerminan terhadap garis $y = x$). Trik cepat menukar diagonal utama $a$ dan $d$ lalu mengubah tandanya menjadi negatif.',
        trap: 'Wajib menyertakan syarat daerah asal (domain): penyebut tidak boleh nol ($cx - a \\neq 0 \\implies x \\neq \\frac{a}{c}$). Mengabaikan batas domain sering menjadi jebakan pilihan ganda.',
        tags: ['Fungsi Invers', 'Fungsi Rasional', 'Domain & Range']
      },
      {
        id: 'c-komposisi-fungsi',
        module: 'Fungsi & Relasi',
        title: 'Komposisi Fungsi Aljabar Bersarang',
        formulaLatex: '(f \\circ g)(x) = f(g(x)), \\quad (g \\circ f)(x) = g(f(x))',
        intuition: 'Komposisi fungsi adalah pemrosesan bertingkat: output dari mesin fungsi dalam $g(x)$ dijadikan input bahan mentah bagi mesin fungsi luar $f$.',
        trap: 'Operasi komposisi fungsi TIDAK komutatif: $f(g(x)) \\neq g(f(x))$ secara umum. Selain itu $(f \\circ g)^{-1}(x) = g^{-1}(f^{-1}(x))$ urutannya terbalik.',
        tags: ['Komposisi', 'Aljabar Fungsi', 'Sifat Anti-Komutatif']
      },
      {
        id: 'c-fungsi-kuadrat',
        module: 'Fungsi & Relasi',
        title: 'Karakteristik Titik Ekstrem Parabola Kuadrat',
        formulaLatex: 'y = ax^2 + bx + c \\implies x_p = -\\frac{b}{2a}, \\quad y_p = -\\frac{D}{4a} = -\\frac{b^2 - 4ac}{4a}',
        intuition: 'Parabola bersifat simetris sempurna terhadap garis vertikal $x = x_p$. Titik puncak $(x_p, y_p)$ merupakan nilai maksimum jika kurva terbuka ke bawah ($a < 0$) atau minimum jika terbuka ke atas ($a > 0$).',
        trap: 'Hati-hati tanda minus pada rumus sumbu simetri $x_p = -\\frac{b}{2a}$. Jika $b$ bernilai negatif, maka $-(-|b|) = +|b|$.',
        tags: ['Fungsi Kuadrat', 'Titik Puncak', 'Sumbu Simetri', 'Diskriminan']
      }
    ]
  },
  {
    id: 'mod-barisan',
    moduleName: 'Barisan & Deret',
    iconName: 'TrendingUp',
    summary: 'Pertumbuhan dan peluruhan eksponensial, kalkulasi anuitas/bunga majemuk, serta deret geometri berhingga dan tak hingga.',
    concepts: [
      {
        id: 'c-deret-geometri',
        module: 'Barisan & Deret',
        title: 'Jumlah Kumulatif Deret Geometri Berhingga & Tak Hingga',
        formulaLatex: 'S_n = \\frac{a(1 - r^n)}{1 - r} \\quad (r \\neq 1), \\qquad S_\\infty = \\frac{a}{1 - r} \\quad (|r| < 1)',
        intuition: 'Setiap suku diperoleh dengan mengalikan suku sebelumnya dengan rasio tetap $r$. Jika $|r| < 1$, suku-suku berikutnya mendekati nol sehingga jumlah total konvergen ke nilai terhingga $S_\\infty$.',
        trap: 'Deret geometri tak hingga HANYA konvergen jika $-1 < r < 1$. Jika $|r| \\ge 1$, deret divergen dan $S_\\infty$ tidak terdefinisi.',
        tags: ['Deret Geometri', 'Konvergensi', 'Rasio Deret']
      },
      {
        id: 'c-bunga-majemuk',
        module: 'Barisan & Deret',
        title: 'Pertumbuhan Eksponensial & Bunga Majemuk',
        formulaLatex: 'M_n = M_0 (1 + i)^n \\quad \\text{atau} \\quad P_t = P_0 (1 - r)^t \\; (\\text{Peluruhan})',
        intuition: 'Pada bunga majemuk, bunga yang diperoleh pada setiap periode diinvestasikan kembali sehingga ikut menghasilkan bunga pada periode berikutnya (pertumbuhan bunga berbunga).',
        trap: 'Satuan suku bunga $i$ dan periode $n$ harus sinkron! Jika bunga dinyatakan tahunan tetapi digandakan bulanan, bagi $i$ dengan 12 dan kalikan $n$ dengan 12.',
        tags: ['Bunga Majemuk', 'Eksponensial', 'Pertumbuhan & Peluruhan']
      }
    ]
  },
  {
    id: 'mod-geometri',
    moduleName: 'Geometri & Pengukuran',
    iconName: 'Box',
    summary: 'Jarak titik ke garis/bidang pada bangun ruang Dimensi Tiga, kesebangunan segitiga bertingkat, dan transformasi geometri dilatasi.',
    concepts: [
      {
        id: 'c-dimensi-tiga',
        module: 'Geometri & Pengukuran',
        title: 'Jarak Titik ke Garis pada Kubus Rusuk s',
        formulaLatex: 'd(P, g) = \\frac{2 \\times \\text{Luas}(\\Delta)}{\\text{Alas}}, \\quad \\text{Diagonal Sisi} = s\\sqrt{2}, \\quad \\text{Diagonal Ruang} = s\\sqrt{3}',
        intuition: 'Jarak terpendek dari titik ke garis adalah panjang segmen garis yang ditarik dari titik tersebut dan jatuh TEGAK LURUS pada garis sasaran. Gunakan perbandingan luas segitiga bantuan.',
        trap: 'Garis proyeksi tidak selalu jatuh tepat di tengah segmen garis sasaran kecuali segitiga bantuannya sama kaki atau sama sisi. Selalu uji dengan teorema Pythagoras.',
        tags: ['Dimensi Tiga', 'Kubus', 'Jarak Titik ke Garis', 'Proyeksi Tegak Lurus']
      },
      {
        id: 'c-kesebangunan',
        module: 'Geometri & Pengukuran',
        title: 'Kesebangunan Segitiga & Dalil Intersep Proposional',
        formulaLatex: '\\Delta ABC \\sim \\Delta ADE \\implies \\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}',
        intuition: 'Dua bangun sebangun memiliki bentuk sudut yang identik dengan rasio perbandingan panjang sisi-sisi bersesuaian yang konstan (faktor skala $k$).',
        trap: 'Perbandingan luas dua bangun sebangun berbanding lurus dengan KUADRAT perbandingan sisinya: $\\frac{L_1}{L_2} = k^2$, bukan $k$.',
        tags: ['Kesebangunan', 'Segitiga', 'Trapesium', 'Rasio Geometri']
      }
    ]
  },
  {
    id: 'mod-trigonometri',
    moduleName: 'Trigonometri',
    iconName: 'Compass',
    summary: 'Perbandingan trigonometri sudut berelasi kuadran II, aturan sinus & cosinus, serta pemodelan sudut elevasi/depresi.',
    concepts: [
      {
        id: 'c-trig-kuadran2',
        module: 'Trigonometri',
        title: 'Rasio Trigonometri Sudut Tumpul (Kuadran II)',
        formulaLatex: '\\sin(180^\\circ - \\alpha) = +\\sin \\alpha, \\quad \\cos(180^\\circ - \\alpha) = -\\cos \\alpha, \\quad \\tan(180^\\circ - \\alpha) = -\\tan \\alpha',
        intuition: 'Pada Kuadran II ($90^\\circ < \\theta < 180^\\circ$), koordinat $x$ bernilai negatif sedangkan $y$ positif. Oleh karena itu hanya nilai sinus dan cosecan yang bertanda positif.',
        trap: 'Sangat sering siswa lupa memberi tanda negatif pada $\\cos \\theta$ dan $\\tan \\theta$ untuk sudut tumpul. Jika diketahui $\\sin \\theta = \\frac{3}{5}$ di kuadran II, maka $\\cos \\theta = -\\frac{4}{5}$.',
        tags: ['Kuadran II', 'Sudut Tumpul', 'Relasi Sudut', 'Aturan Tanda']
      },
      {
        id: 'c-trig-elevasi',
        module: 'Trigonometri',
        title: 'Pemodelan Klinometer & Sudut Elevasi Vertikal',
        formulaLatex: 'h_{\\text{total}} = h_{\\text{mata}} + d \\cdot \\tan \\theta',
        intuition: 'Segitiga siku-siku dibentuk dari garis pandang horizontal, garis vertikal objek, dan sinar pandang elevasi. Tinggi total adalah tinggi segitiga ditambah tinggi pandangan mata pengamat.',
        trap: 'Jangan lupa menjumlahkan tinggi instrumen/mata pengamat ($h_{\\text{mata}}$) ke hasil perhitungan $d \\cdot \\tan \\theta$!',
        tags: ['Klinometer', 'Sudut Elevasi', 'Tangen', 'Pemodelan Terapan']
      }
    ]
  },
  {
    id: 'mod-statistika',
    moduleName: 'Statistika & Analisis Data',
    iconName: 'BarChart3',
    summary: 'Rata-rata gabungan data susulan, rekonstruksi frekuensi pada modus data kelompok, serta ukuran penyebaran.',
    concepts: [
      {
        id: 'c-mean-gabungan',
        module: 'Statistika & Analisis Data',
        title: 'Rata-Rata Hitung Data Gabungan (Weighted Mean)',
        formulaLatex: '\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2 + \\dots + n_k \\bar{x}_k}{n_1 + n_2 + \\dots + n_k}',
        intuition: 'Rata-rata gabungan adalah jumlah seluruh nilai data dibagi total seluruh frekuensi observasi. Kelompok dengan jumlah data lebih banyak memberikan bobot pengaruh lebih besar terhadap rata-rata akhir.',
        trap: 'Rata-rata gabungan BUKAN sekadar rata-rata dari kedua mean $\\frac{\\bar{x}_1 + \\bar{x}_2}{2}$ kecuali jumlah frekuensi kedua kelompok sama persis ($n_1 = n_2$).',
        tags: ['Mean Gabungan', 'Bobot Frekuensi', 'Data Susulan']
      },
      {
        id: 'c-modus-kelompok',
        module: 'Statistika & Analisis Data',
        title: 'Rekonstruksi Modus Data Berkelompok (Grouped Data Mode)',
        formulaLatex: 'M_o = T_b + \\left( \\frac{d_1}{d_1 + d_2} \\right) p',
        intuition: 'Titik modus berada di dalam kelas yang memiliki frekuensi tertinggi, digeser sebanding dengan selisih frekuensi terhadap kelas sebelum ($d_1$) dan sesudahnya ($d_2$).',
        trap: '$T_b$ adalah tepi bawah kelas modus ($T_b = \\text{Batas Bawah} - 0{,}5$), bukan batas bawahnya! Dan $d_1 = f_{\\text{mo}} - f_{\\text{sebelumnya}}$, $d_2 = f_{\\text{mo}} - f_{\\text{sesudahnya}}$.',
        tags: ['Modus', 'Data Kelompok', 'Tepi Bawah', 'Panjang Kelas']
      }
    ]
  },
  {
    id: 'mod-peluang',
    moduleName: 'Peluang & Kombinatorika',
    iconName: 'Dice5',
    summary: 'Aturan pengisian tempat perkalian (multi-slot tanpa perulangan), kombinasi, peluang bersyarat, dan komplemen kejadian.',
    concepts: [
      {
        id: 'c-filling-slots',
        module: 'Peluang & Kombinatorika',
        title: 'Aturan Perkalian Pengisian Tempat (Multi-Slot Filling)',
        formulaLatex: 'N = n_1 \\times n_2 \\times n_3 \\times \\dots \\times n_k',
        intuition: 'Jika suatu prosedur terdiri atas tahapan berurutan independen, total variasi cara yang dapat terbentuk adalah hasil kali dari banyaknya kemungkinan cara pada tiap tahap.',
        trap: 'Perhatikan kondisi pembatas khusus (misal: "angka ganjil" mensyaratkan digit terakhir harus ganjil lebih dulu, atau "tanpa pengulangan" yang mengurangi pilihan tersedia di slot berikutnya). Utamakan mengisi slot dengan syarat paling ketat terlebih dahulu.',
        tags: ['Aturan Perkalian', 'Kombinatorika', 'Slot Terurut', 'Permutasi']
      },
      {
        id: 'c-peluang-komplemen',
        module: 'Peluang & Kombinatorika',
        title: 'Hukum Peluang Komplemen & Bersyarat Tanpa Pengembalian',
        formulaLatex: 'P(A^c) = 1 - P(A), \\qquad P(A \\cap B) = P(A) \\times P(B|A)',
        intuition: 'Jika menghitung langsung peluang suatu kejadian terlalu panjang karena banyak cabang kemungkinan ("minimal 1"), lebih efisien menghitung peluang komplemennya ("tidak ada sama sekali") lalu dikurangkan dari 1.',
        trap: 'Pada pengambilan bertahap tanpa pengembalian (*without replacement*), total semesta sampel pada penyebut berkurang 1 pada pengambilan kedua: $\\frac{n_A}{N} \\times \\frac{n_B}{N - 1}$.',
        tags: ['Peluang Komplemen', 'Peluang Bersyarat', 'Tanpa Pengembalian']
      }
    ]
  }
];
