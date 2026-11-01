import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const patches = {
  'sistem-persamaan-linear': [
    {
      idx: 4,
      optE: 'Kedua garis pembatas pada Sistem II memiliki nilai gradien yang sama persis ($m_1 = m_2 = -\\frac{2}{3}$).',
      expE: '\n- **Pernyataan E (BENAR):** Dua garis sejajar pada Sistem II memiliki gradien yang sama persis, yaitu $m = -\\frac{a}{b} = -\\frac{2}{3}$.'
    },
    {
      idx: 5,
      optE: 'Selisih antara jumlah kaos polo dan jaket yang diproduksi adalah 15 potong.',
      expE: '\n- **Pernyataan E (BENAR):** Selisih produksi kaos polo (30 potong) dan jaket (15 potong) adalah $30 - 15 = 15$ potong.'
    },
    {
      idx: 6,
      optE: 'Nilai kuadrat dari penjumlahan variabel $(x + y)^2 = 9$',
      expE: '\n- **Pernyataan E (BENAR):** Karena $x = 1$ dan $y = 2$, maka $(x + y)^2 = (1 + 2)^2 = 3^2 = 9$.'
    }
  ],
  'sistem-pertidaksamaan-linear': [
    {
      idx: 4,
      optE: 'Titik koordinat $(2, 2)$ terletak di dalam daerah himpunan penyelesaian.',
      expE: '\n- **Pernyataan E (BENAR):** Substitusi $(2, 2)$: $3(2) + 4(2) = 14 \\le 24$, $2 - 2(2) = -2 \\ge -2$, $2 \\ge 0$, $2 \\ge 0$, seluruh pertidaksamaan terpenuhi.'
    },
    {
      idx: 5,
      optE: 'Nilai maksimum dari fungsi tujuan $f(x, y) = 3x + 2y$ pada daerah tersebut adalah 14.',
      expE: '\n- **Pernyataan E (BENAR):** Nilai fungsi tujuan di titik pojok $(2, 4)$ adalah $f(2, 4) = 3(2) + 2(4) = 14$, yang merupakan nilai maksimum daerah.'
    },
    {
      idx: 6,
      optE: 'Metode garis selidik $ax + by = k$ dapat digunakan untuk mengidentifikasi titik optimum penyelesaian.',
      expE: '\n- **Pernyataan E (BENAR):** Garis selidik $ax + by = k$ yang digeser sejajar melintasi daerah layak dapat menentukan titik sudut yang memaksimumkan atau meminimumkan nilai objektif.'
    }
  ],
  'program-linear': [
    {
      idx: 4,
      optE: 'Titik potong antara garis $x + y = 8$ dan $2x + y = 12$ adalah $(4, 4)$.',
      expE: '\n- **Pernyataan E (BENAR):** Eliminasi kedua persamaan: $(2x + y) - (x + y) = 12 - 8 \\implies x = 4$, lalu $y = 8 - 4 = 4$, sehingga titik potongnya adalah $(4, 4)$.'
    },
    {
      idx: 5,
      optE: 'Fungsi kendala ketersediaan bahan baku membatasi daerah feasible di kuadran pertama.',
      expE: '\n- **Pernyataan E (BENAR):** Karena jumlah produksi fisik tidak boleh negatif ($x \\ge 0, y \\ge 0$), seluruh daerah penyelesaian layak berada di Kuadran I.'
    },
    {
      idx: 6,
      optE: 'Titik optimum dari fungsi objektif linear selalu terletak pada batas atau titik pojok daerah penyelesaian.',
      expE: '\n- **Pernyataan E (BENAR):** Berdasarkan Teorema Dasar Program Linear, nilai ekstrem fungsi tujuan selalu dicapai pada salah satu titik sudut (ekstrem) poligon daerah layak.'
    }
  ],
  'domain-range-grafik-fungsi': [
    {
      idx: 4,
      optE: 'Titik potong grafik fungsi dengan sumbu Y berada pada koordinat $(0, -3)$.',
      expE: '\n- **Pernyataan E (BENAR):** Titik potong sumbu Y diperoleh saat $x = 0$: $f(0) = \\frac{3(0) - 6}{0 + 2} = \\frac{-6}{2} = -3$, sehingga koordinatnya adalah $(0, -3)$.'
    },
    {
      idx: 5,
      optE: 'Garis sumbu simetri dari kurva parabola tersebut adalah $x = 2$.',
      expE: '\n- **Pernyataan E (BENAR):** Sumbu simetri parabola $f(x) = ax^2 + bx + c$ dihitung melalui rumus $x = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$.'
    },
    {
      idx: 6,
      optE: 'Titik balik minimum grafik fungsi nilai mutlak terjadi di koordinat $(3, -4)$.',
      expE: '\n- **Pernyataan E (BENAR):** Nilai minimum $|2x - 6|$ adalah 0 saat $x = 3$, sehingga nilai minimum $f(3) = 0 - 4 = -4$, membentuk titik balik $(3, -4)$.'
    }
  ],
  'fungsi-komposisi': [
    {
      idx: 4,
      optE: 'Nilai dari fungsi komposisi $(f \\circ g)(1) = 1$.',
      expE: '\n- **Pernyataan E (BENAR):** Karena $g(1) = 1^2 + 1 = 2$, maka $(f \\circ g)(1) = f(g(1)) = f(2) = 2(2) - 3 = 1$.'
    },
    {
      idx: 5,
      optE: 'Total output dari proses manufaktur dua tahap dapat dimodelkan langsung melalui komposisi fungsi.',
      expE: '\n- **Pernyataan E (BENAR):** Hubungan keluaran berurutan dari mesin I ke mesin II secara matematis diwakili oleh komposisi $(g \\circ f)(x)$.'
    },
    {
      idx: 6,
      optE: 'Daerah asal alami dari fungsi komposisi $(f \\circ g)(x)$ mengecualikan nilai $x = 1$.',
      expE: '\n- **Pernyataan E (BENAR):** Pada komposisi $(f \\circ g)(x) = \\frac{2x + 1}{2x - 2}$, penyebut bernilai nol jika $2x - 2 = 0 \\implies x = 1$, sehingga $x = 1$ wajib dikeluarkan dari domain.'
    }
  ],
  'fungsi-invers': [
    {
      idx: 4,
      optE: 'Grafik fungsi $f(x)$ dan inversnya $f^{-1}(x)$ saling simetris terhadap garis cermin $y = x$.',
      expE: '\n- **Pernyataan E (BENAR):** Berdasarkan sifat geometris fungsi invers, kurva $f(x)$ dan $f^{-1}(x)$ adalah hasil pencerminan terhadap garis lurus $y = x$.'
    },
    {
      idx: 5,
      optE: 'Fungsi invers memungkinkan penentuan pemakaian daya energi (kWh) jika total biaya tagihan diketahui.',
      expE: '\n- **Pernyataan E (BENAR):** Karena fungsi invers membalik relasi dari variabel terikat (biaya) kembali ke variabel bebas (pemakaian energi).'
    },
    {
      idx: 6,
      optE: 'Berlaku identitas invers fungsi komposisi $(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)$.',
      expE: '\n- **Pernyataan E (BENAR):** Sifat aljabar fundamental invers fungsi menyatakan bahwa $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$.'
    }
  ],
  'barisan-deret-aritmetika': [
    {
      idx: 4,
      optE: 'Suku ke-10 dari barisan aritmetika tersebut adalah 41.',
      expE: '\n- **Pernyataan E (BENAR):** Rumus suku ke-$n$: $U_{10} = a + (10 - 1)b = 5 + 9(4) = 5 + 36 = 41$.'
    },
    {
      idx: 5,
      optE: 'Pertambahan produksi tetap per periode merupakan representasi dari beda ($b$) barisan aritmetika.',
      expE: '\n- **Pernyataan E (BENAR):** Nilai kenaikan konstan pada setiap interval waktu berurutan secara definisi adalah nilai beda ($b$).'
    },
    {
      idx: 6,
      optE: 'Hubungan ketiga bilangan aritmetika memenuhi identitas $2q = p + r$.',
      expE: '\n- **Pernyataan E (BENAR):** Karena $q - p = r - q = b$, maka $2q = p + r$.'
    }
  ],
  'barisan-deret-geometri': [
    {
      idx: 4,
      optE: 'Rasio persekutuan dari deret geometri tersebut bernilai konstan $r = 2$.',
      expE: '\n- **Pernyataan E (BENAR):** Rasio suku berurutan adalah $r = \\frac{U_2}{U_1} = \\frac{6}{3} = 2$.'
    },
    {
      idx: 5,
      optE: 'Banyaknya bakteri pada setiap periode pembelahan bertumbuh secara eksponensial geometris.',
      expE: '\n- **Pernyataan E (BENAR):** Pertumbuhan dengan pelipatgandaan rasio tetap merupakan karakteristik model pertumbuhan geometri eksponensial.'
    },
    {
      idx: 6,
      optE: 'Deret geometri tak hingga bersifat konvergen jika dan hanya jika nilai mutlak rasionya memenuhi $|r| < 1$.',
      expE: '\n- **Pernyataan E (BENAR):** Syarat konvergensi deret geometri tak hingga adalah $-1 < r < 1$ atau $|r| < 1$.'
    }
  ],
  'bunga-tunggal-majemuk': [
    {
      idx: 4,
      optE: 'Pada periode waktu yang sama dengan bunga positif, bunga majemuk menghasilkan nilai akhir lebih besar atau sama dibandingkan bunga tunggal.',
      expE: '\n- **Pernyataan E (BENAR):** Karena efek bunga berbunga (*compounding*), nilai akhir bunga majemuk selalu melampaui bunga tunggal untuk $t > 1$.'
    },
    {
      idx: 5,
      optE: 'Total akumulasi dana investasi berbunga majemuk bertumbuh secara eksponensial terhadap waktu.',
      expE: '\n- **Pernyataan E (BENAR):** Formula $M_t = M_0 (1 + i)^t$ menunjukkan hubungan fungsi eksponensial terhadap waktu $t$.'
    },
    {
      idx: 6,
      optE: 'Perhitungan tabungan setoran berkala (anuitas) memanfaatkan prinsip deret geometri.',
      expE: '\n- **Pernyataan E (BENAR):** Jumlah seluruh akumulasi setoran berkala merupakan penjumlahan suku-suku deret geometri dengan faktor pengali $(1 + i)$.'
    }
  ],
  'sudut-dan-kesebangunan': [
    {
      idx: 4,
      optE: 'Dua bangun datar yang kongruen sudah pasti sebangun dengan faktor perbesaran skala $k = 1$.',
      expE: '\n- **Pernyataan E (BENAR):** Kekongruenan adalah kasus khusus dari kesebangunan dengan rasio panjang sisi senilai $1 : 1$.'
    },
    {
      idx: 5,
      optE: 'Kedua diagonal pada trapesium sama kaki memiliki panjang yang sama ($AC = BD$).',
      expE: '\n- **Pernyataan E (BENAR):** Berdasarkan sifat simetri trapesium sama kaki, kedua diagonalnya kongruen ($AC = BD$).'
    },
    {
      idx: 6,
      optE: 'Perbandingan sisi-sisi bersesuaian pada segitiga yang dibentuk oleh perpotongan diagonal adalah senilai.',
      expE: '\n- **Pernyataan E (BENAR):** Sudut-sudut berseberangan dalam sama besar sehingga segitiga atas dan segitiga bawah sebangun.'
    }
  ],
  'pengukuran-bangun-datar': [
    {
      idx: 4,
      optE: 'Keliling belah ketupat adalah empat kali panjang sisinya ($K = 4s$).',
      expE: '\n- **Pernyataan E (BENAR):** Karena keempat sisi belah ketupat sama panjang, maka $K = s + s + s + s = 4s$.'
    },
    {
      idx: 5,
      optE: 'Untuk panjang keliling kawat yang tetap, luas maksimum persegi panjang tercapai saat sisinya sama panjang (bujur sangkar).',
      expE: '\n- **Pernyataan E (BENAR):** Prinsip optimasi geometri membuktikan luas maksimum tercapai saat panjang = lebar ($x = y = 30\\text{ m}$).'
    },
    {
      idx: 6,
      optE: 'Kedua garis diagonal pada layang-layang saling berpotongan tegak lurus ($d_1 \\perp d_2$).',
      expE: '\n- **Pernyataan E (BENAR):** Salah satu sifat utama bangun layang-layang adalah perpotongan tegak lurus antara kedua diagonalnya.'
    }
  ],
  'pengukuran-bangun-ruang': [
    {
      idx: 4,
      optE: 'Panjang garis pelukis kerucut $s$ memenuhi teorema Pythagoras $s = \\sqrt{r^2 + t^2}$.',
      expE: '\n- **Pernyataan E (BENAR):** Segitiga yang dibentuk jari-jari, tinggi, dan garis pelukis kerucut siku-siku sehingga $s^2 = r^2 + t^2$.'
    },
    {
      idx: 5,
      optE: 'Volume total bangun ruang gabungan sama dengan jumlah volume masing-masing komponen pembentuknya.',
      expE: '\n- **Pernyataan E (BENAR):** Sifat aditif volume menyatakan volume gabungan tanpa irisan sama dengan penjumlahan volume bagian-bagiannya.'
    },
    {
      idx: 6,
      optE: 'Hubungan jari-jari dan tinggi silinder tabung di dalam kerucut diperoleh melalui prinsip kesebangunan penampang tegak.',
      expE: '\n- **Pernyataan E (BENAR):** Penampang vertikal melalui sumbu kerucut menghasilkan segitiga-segitiga sebangun yang menghubungkan $r$ dan $t$.'
    }
  ]
};

let totalUpdated = 0;

for (const [subName, items] of Object.entries(patches)) {
  const filePath = path.join(rootDir, 'docs', 'data', 'questions', `${subName}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${filePath}`);
    continue;
  }
  const questions = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  items.forEach(item => {
    const q = questions[item.idx];
    if (!q) return;

    // Pastikan belum ada opsi E
    const hasE = q.options.some(o => o.id === 'E');
    if (!hasE) {
      q.options.push({
        id: 'E',
        text: item.optE
      });
      if (!q.correct_answer.includes('E')) {
        q.correct_answer.push('E');
      }
      q.explanation += item.expE;
      totalUpdated++;
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf-8');
  console.log(`Updated MCMA options in ${subName}.json`);
}

console.log(`\nSuccessfully added Option E to ${totalUpdated} MCMA questions!`);
