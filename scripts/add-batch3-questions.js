import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import katex from 'katex';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Helper to test KaTeX in text
function checkLatex(text, context) {
  if (!text) return;
  const inlineMatches = text.match(/(?<!\$)\$([^\$\n]+?)\$(?!\$)/g) || [];
  inlineMatches.forEach((m) => {
    const expr = m.slice(1, -1).trim();
    try {
      katex.renderToString(expr, { displayMode: false, throwOnError: true });
    } catch (e) {
      throw new Error(`${context}: KaTeX inline error "${expr}" -> ${e.message}`);
    }
  });

  const displayMatches = text.match(/\$\$([\s\S]+?)\$\$/g) || [];
  displayMatches.forEach((m) => {
    const expr = m.slice(2, -2).trim();
    try {
      katex.renderToString(expr, { displayMode: true, throwOnError: true });
    } catch (e) {
      throw new Error(`${context}: KaTeX display error "${expr}" -> ${e.message}`);
    }
  });
}

// BATCH 3 QUESTIONS DATA (Bab 5: Geometri & Pengukuran)
const batch3Data = {
  'sudut-dan-kesebangunan': [
    {
      id: 'matwa-sudut-dan-kesebangunan-11',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'sudut-dan-kesebangunan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Besar suatu sudut sama dengan $\\frac{2}{3}$ dari besar sudut pelurusnya. Besar sudut penyiku dari sudut tersebut adalah ...',
      options: [
        { id: 'A', text: '$18^\\circ$' },
        { id: 'B', text: '$24^\\circ$' },
        { id: 'C', text: '$36^\\circ$' },
        { id: 'D', text: '$45^\\circ$' },
        { id: 'E', text: '$72^\\circ$' }
      ],
      correct_answer: 'A',
      hint: 'Dua sudut saling berpelurus berjumlah 180 derajat. Selesaikan x = 2/3 (180 - x), lalu cari sudut penyiku (90 - x).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Misalkan besar sudut tersebut adalah $x$. Sudut pelurusnya adalah $(180^\\circ - x)$.\n\n2. Hubungan sudut pada soal:\n   $$x = \\frac{2}{3}(180^\\circ - x)$$\n   $$3x = 2(180^\\circ - x)$$\n   $$3x = 360^\\circ - 2x$$\n   $$5x = 360^\\circ \\implies x = 72^\\circ$$\n\n3. Hitung besar sudut penyiku dari $x$ ($90^\\circ - x$):\n   $$\\text{Penyiku} = 90^\\circ - 72^\\circ = 18^\\circ$$\n\nJadi, besar sudut penyiku tersebut adalah **A** ($18^\\circ$).'
    },
    {
      id: 'matwa-sudut-dan-kesebangunan-12',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'sudut-dan-kesebangunan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dua garis sejajar dipotong oleh sebuah garis transversal sehingga membentuk pasangan sudut dalam sepihak sebesar $(3x + 15)^\\circ$ dan $(2x + 25)^\\circ$. Nilai $x$ adalah ...',
      options: [
        { id: 'A', text: '$24$' },
        { id: 'B', text: '$28$' },
        { id: 'C', text: '$32$' },
        { id: 'D', text: '$36$' },
        { id: 'E', text: '$40$' }
      ],
      correct_answer: 'B',
      hint: 'Jumlah dua sudut dalam sepihak pada dua garis sejajar yang dipotong garis transversal adalah 180 derajat.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Sifat sudut dalam sepihak berjumlah $180^\\circ$:\n   $$(3x + 15)^\\circ + (2x + 25)^\\circ = 180^\\circ$$\n\n2. Jumlahkan suku-suku sejenis:\n   $$5x + 40 = 180$$\n   $$5x = 180 - 40$$\n   $$5x = 140 \\implies x = \\frac{140}{5} = 28$$\n\nJadi, nilai $x$ adalah **B** ($28$).'
    },
    {
      id: 'matwa-sudut-dan-kesebangunan-13',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'sudut-dan-kesebangunan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah tiang bendera setinggi $6\\text{ meter}$ menghasilkan bayangan sepanjang $4\\text{ meter}$ di atas permukaan tanah datar. Pada saat yang sama, sebuah pohon rindang di samping tiang bendera menghasilkan bayangan sepanjang $10\\text{ meter}$. Tinggi pohon rindang tersebut adalah ...',
      options: [
        { id: 'A', text: '$12\\text{ meter}$' },
        { id: 'B', text: '$14\\text{ meter}$' },
        { id: 'C', text: '$15\\text{ meter}$' },
        { id: 'D', text: '$16\\text{ meter}$' },
        { id: 'E', text: '$18\\text{ meter}$' }
      ],
      correct_answer: 'C',
      hint: 'Gunakan konsep kesebangunan dua segitiga siku-siku bayangan sinar matahari: t_pohon / t_tiang = s_pohon / s_tiang.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Sudut elevasi sinar matahari sama, sehingga segitiga tiang dan segitiga pohon sebangun:\n   $$\\frac{t_{\\text{pohon}}}{t_{\\text{tiang}}} = \\frac{\\text{bayangan}_{\\text{pohon}}}{\\text{bayangan}_{\\text{tiang}}}$$\n\n2. Masukkan nilai yang diketahui:\n   $$\\frac{t_{\\text{pohon}}}{6\\text{ m}} = \\frac{10\\text{ m}}{4\\text{ m}}$$\n   $$t_{\\text{pohon}} = 6 \\times \\frac{10}{4} = 6 \\times 2{,}5 = 15\\text{ meter}$$\n\nJadi, tinggi pohon tersebut adalah **C** ($15\\text{ meter}$).'
    },
    {
      id: 'matwa-sudut-dan-kesebangunan-14',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'sudut-dan-kesebangunan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Pada segitiga $ABC$, titik $D$ terletak pada sisi $AB$ dan titik $E$ pada sisi $AC$ sedemikian rupa sehingga ruas garis $DE$ sejajar dengan sisi $BC$. Jika panjang $AD = 6\\text{ cm}$, $DB = 4\\text{ cm}$, dan panjang $DE = 9\\text{ cm}$, maka panjang sisi $BC$ adalah ...',
      options: [
        { id: 'A', text: '$12\\text{ cm}$' },
        { id: 'B', text: '$13{,}5\\text{ cm}$' },
        { id: 'C', text: '$15\\text{ cm}$' },
        { id: 'D', text: '$16\\text{ cm}$' },
        { id: 'E', text: '$18\\text{ cm}$' }
      ],
      correct_answer: 'C',
      hint: 'Segitiga ADE sebangun dengan segitiga ABC. Rasio perbandingan sisi bersesuaian: DE / BC = AD / AB.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung panjang sisi total $AB$:\n   $$AB = AD + DB = 6\\text{ cm} + 4\\text{ cm} = 10\\text{ cm}$$\n\n2. Karena $DE \\parallel BC$, maka $\\triangle ADE \\sim \\triangle ABC$:\n   $$\\frac{DE}{BC} = \\frac{AD}{AB}$$\n\n3. Substitusikan nilai-nilai panjang sisi:\n   $$\\frac{9}{BC} = \\frac{6}{10}$$\n   $$\\frac{9}{BC} = \\frac{3}{5}$$\n   $$3 \\cdot BC = 45 \\implies BC = \\frac{45}{3} = 15\\text{ cm}$$\n\nJadi, panjang sisi $BC$ adalah **C** ($15\\text{ cm}$).'
    },
    {
      id: 'matwa-sudut-dan-kesebangunan-15',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'sudut-dan-kesebangunan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan trapesium $ABCD$ dengan sisi sejajar $AB \\parallel CD$. Ruas garis $EF$ dibuat sejajar dengan sisi $AB$ di mana titik $E$ terletak pada sisi $AD$ dan $F$ pada $BC$. Jika panjang $AB = 20\\text{ cm}$, $CD = 8\\text{ cm}$, $AE = 6\\text{ cm}$, dan $ED = 3\\text{ cm}$, maka panjang ruas garis $EF$ adalah ...',
      options: [
        { id: 'A', text: '$10\\text{ cm}$' },
        { id: 'B', text: '$12\\text{ cm}$' },
        { id: 'C', text: '$14\\text{ cm}$' },
        { id: 'D', text: '$15\\text{ cm}$' },
        { id: 'E', text: '$16\\text{ cm}$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan rumus perbandingan segmen garis trapesium bertingkat: EF = (AE * CD + ED * AB) / (AE + ED).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Gunakan formula garis pembagi sejajar pada trapesium:\n   $$EF = \\frac{AE \\cdot CD + ED \\cdot AB}{AE + ED}$$\n\n2. Masukkan ukuran-ukuran sisi:\n   $$EF = \\frac{6(8) + 3(20)}{6 + 3}$$\n   $$EF = \\frac{48 + 60}{9} = \\frac{108}{9} = 12\\text{ cm}$$\n\nJadi, panjang ruas garis $EF$ adalah **B** ($12\\text{ cm}$).'
    },
    {
      id: 'matwa-sudut-dan-kesebangunan-16',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'sudut-dan-kesebangunan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Segitiga $ABC$ siku-siku di titik $A$, dan ruas garis $AD$ merupakan garis tinggi yang ditarik tegak lurus ke sisi hipotenusa $BC$. Jika panjang segmen $BD = 4\\text{ cm}$ dan $CD = 9\\text{ cm}$, maka panjang garis tinggi $AD$ adalah ...',
      options: [
        { id: 'A', text: '$5\\text{ cm}$' },
        { id: 'B', text: '$6\\text{ cm}$' },
        { id: 'C', text: '$6{,}5\\text{ cm}$' },
        { id: 'D', text: '$7\\text{ cm}$' },
        { id: 'E', text: '$7{,}2\\text{ cm}$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan teorema garis tinggi segitiga siku-siku (teorema air mancur): AD^2 = BD * CD.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Berdasarkan kesebangunan pada segitiga siku-siku yang ditarik garis tinggi ke hipotenusa ($\\triangle ABD \\sim \\triangle CAD$):\n   $$\\frac{AD}{CD} = \\frac{BD}{AD} \\implies AD^2 = BD \\cdot CD$$\n\n2. Masukkan panjang segmen:\n   $$AD^2 = 4 \\times 9 = 36$$\n   $$AD = \\sqrt{36} = 6\\text{ cm}$$\n\nJadi, panjang garis tinggi $AD$ adalah **B** ($6\\text{ cm}$).'
    },
    {
      id: 'matwa-sudut-dan-kesebangunan-17',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'sudut-dan-kesebangunan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Titik $A$, $B$, dan $C$ terletak pada busur keliling lingkaran yang berpusat di titik $O$. Jika besar sudut pusat $\\angle AOB = 110^\\circ$, maka besar sudut keliling $\\angle ACB$ yang menghadap busur minor yang sama adalah ...',
      options: [
        { id: 'A', text: '$45^\\circ$' },
        { id: 'B', text: '$50^\\circ$' },
        { id: 'C', text: '$55^\\circ$' },
        { id: 'D', text: '$60^\\circ$' },
        { id: 'E', text: '$70^\\circ$' }
      ],
      correct_answer: 'C',
      hint: 'Besar sudut keliling sama dengan setengah dari besar sudut pusat yang menghadap busur yang sama.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Gunakan teorema sudut lingkaran:\n   $$\\text{Sudut Keliling} = \\frac{1}{2} \\times \\text{Sudut Pusat}$$\n\n2. Karena $\\angle ACB$ dan $\\angle AOB$ menghadap busur minor $AB$ yang sama:\n   $$\\angle ACB = \\frac{1}{2} \\times \\angle AOB = \\frac{1}{2} \\times 110^\\circ = 55^\\circ$$\n\nJadi, besar sudut keliling $\\angle ACB$ adalah **C** ($55^\\circ$).'
    }
  ],

  'pengukuran-bangun-datar': [
    {
      id: 'matwa-pengukuran-bangun-datar-11',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-datar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Perbandingan antara panjang dan lebar sebuah lapangan futsal berstandar adalah $5 : 3$. Jika keliling sekeliling lapangan tersebut terukur $96\\text{ meter}$, luas permukaan lapangan futsal tersebut adalah ...',
      options: [
        { id: 'A', text: '$480\\text{ m}^2$' },
        { id: 'B', text: '$520\\text{ m}^2$' },
        { id: 'C', text: '$540\\text{ m}^2$' },
        { id: 'D', text: '$560\\text{ m}^2$' },
        { id: 'E', text: '$600\\text{ m}^2$' }
      ],
      correct_answer: 'C',
      hint: 'Keliling K = 2(5x + 3x) = 96. Cari nilai x, lalu hitung panjang = 5x, lebar = 3x, dan Luas = p * l.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Misalkan panjang $p = 5x$ dan lebar $l = 3x$.\n\n2. Gunakan rumus keliling persegi panjang:\n   $$K = 2(p + l) = 96$$\n   $$2(5x + 3x) = 96$$\n   $$16x = 96 \\implies x = \\frac{96}{16} = 6\\text{ meter}$$\n\n3. Tentukan ukuran dimensi:\n   - Panjang $p = 5(6) = 30\\text{ meter}$\n   - Lebar $l = 3(6) = 18\\text{ meter}$\n\n4. Hitung luas lapangan:\n   $$L = p \\times l = 30\\text{ m} \\times 18\\text{ m} = 540\\text{ m}^2$$\n\nJadi, luas lapangan tersebut adalah **C** ($540\\text{ m}^2$).'
    },
    {
      id: 'matwa-pengukuran-bangun-datar-12',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-datar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah bidang tanah berbentuk trapesium sama kaki memiliki panjang sisi-sisi sejajar $14\\text{ meter}$ dan $30\\text{ meter}$, serta panjang kedua sisi miringnya masing-masing $17\\text{ meter}$. Luas bidang tanah tersebut adalah ...',
      options: [
        { id: 'A', text: '$308\\text{ m}^2$' },
        { id: 'B', text: '$330\\text{ m}^2$' },
        { id: 'C', text: '$352\\text{ m}^2$' },
        { id: 'D', text: '$374\\text{ m}^2$' },
        { id: 'E', text: '$396\\text{ m}^2$' }
      ],
      correct_answer: 'B',
      hint: 'Cari proyeksi sisi miring pada alas: x = (30 - 14)/2 = 8 m. Gunakan teorema Pythagoras untuk mencari tinggi: t = sqrt(17^2 - 8^2).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung panjang segmen proyeksi sisi miring pada sisi alas yang lebih panjang:\n   $$x = \\frac{30 - 14}{2} = \\frac{16}{2} = 8\\text{ meter}$$\n\n2. Hitung tinggi trapesium ($t$) menggunakan teorema Pythagoras:\n   $$t = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15\\text{ meter}$$\n\n3. Hitung luas trapesium:\n   $$L = \\frac{a + b}{2} \\times t = \\frac{14 + 30}{2} \\times 15 = 22 \\times 15 = 330\\text{ m}^2$$\n\nJadi, luas bidang tanah tersebut adalah **B** ($330\\text{ m}^2$).'
    },
    {
      id: 'matwa-pengukuran-bangun-datar-13',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-datar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah juring lingkaran dengan sudut pusat $60^\\circ$ memiliki panjang jari-jari $21\\text{ cm}$. Dengan menggunakan pendekatan $\\pi = \\frac{22}{7}$, panjang busur lengkung yang membatasi juring tersebut adalah ...',
      options: [
        { id: 'A', text: '$11\\text{ cm}$' },
        { id: 'B', text: '$22\\text{ cm}$' },
        { id: 'C', text: '$33\\text{ cm}$' },
        { id: 'D', text: '$44\\text{ cm}$' },
        { id: 'E', text: '$66\\text{ cm}$' }
      ],
      correct_answer: 'B',
      hint: 'Panjang busur = (sudut pusat / 360) * 2 * pi * r.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Formula panjang busur lingkaran:\n   $$\\text{Panjang Busur} = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$$\n\n2. Masukkan parameter $\\theta = 60^\\circ$ dan $r = 21\\text{ cm}$:\n   $$\\text{Panjang Busur} = \\frac{60^\\circ}{360^\\circ} \\times 2 \\times \\frac{22}{7} \\times 21$$\n   $$\\text{Panjang Busur} = \\frac{1}{6} \\times 2 \\times 22 \\times 3 = \\frac{1}{6} \\times 132 = 22\\text{ cm}$$\n\nJadi, panjang busur lengkungnya adalah **B** ($22\\text{ cm}$).'
    },
    {
      id: 'matwa-pengukuran-bangun-datar-14',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-datar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah taman rekreasi berbentuk persegi memiliki panjang sisi $14\\text{ meter}$. Tepat di bagian tengah taman dibangun kolam hias berbentuk lingkaran yang garis tepinya menyinggung keempat sisi persegi ($d = 14\\text{ m}$). Luas area taman di luar kolam (daerah sudut yang ditanami rumput) adalah ... (Gunakan $\\pi = \\frac{22}{7}$)',
      options: [
        { id: 'A', text: '$36\\text{ m}^2$' },
        { id: 'B', text: '$42\\text{ m}^2$' },
        { id: 'C', text: '$48\\text{ m}^2$' },
        { id: 'D', text: '$54\\text{ m}^2$' },
        { id: 'E', text: '$60\\text{ m}^2$' }
      ],
      correct_answer: 'B',
      hint: 'Luas area rumput = Luas persegi - Luas lingkaran dengan s = 14 m dan r = 7 m.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung luas taman berbentuk persegi:\n   $$L_{\\text{persegi}} = s^2 = 14 \\times 14 = 196\\text{ m}^2$$\n\n2. Hitung luas kolam lingkaran dengan jari-jari $r = \\frac{14}{2} = 7\\text{ meter}$:\n   $$L_{\\text{lingkaran}} = \\pi r^2 = \\frac{22}{7} \\times 7^2 = 22 \\times 7 = 154\\text{ m}^2$$\n\n3. Hitung selisih luas area di luar kolam:\n   $$L_{\\text{rumput}} = 196 - 154 = 42\\text{ m}^2$$\n\nJadi, luas area rumput adalah **B** ($42\\text{ m}^2$).'
    },
    {
      id: 'matwa-pengukuran-bangun-datar-15',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-datar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebidang tanah berbentuk segitiga sembarang memiliki panjang ketiga sisinya berturut-turut $13\\text{ meter}$, $14\\text{ meter}$, dan $15\\text{ meter}$. Luas bidang tanah tersebut adalah ...',
      options: [
        { id: 'A', text: '$78\\text{ m}^2$' },
        { id: 'B', text: '$84\\text{ m}^2$' },
        { id: 'C', text: '$90\\text{ m}^2$' },
        { id: 'D', text: '$96\\text{ m}^2$' },
        { id: 'E', text: '$105\\text{ m}^2$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan rumus Heron: Luas = sqrt(s(s-a)(s-b)(s-c)) dengan s = (a + b + c)/2.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung semi-perimeter ($s$):\n   $$s = \\frac{a + b + c}{2} = \\frac{13 + 14 + 15}{2} = \\frac{42}{2} = 21\\text{ meter}$$\n\n2. Gunakan rumus Heron untuk luas segitiga sembarang:\n   $$L = \\sqrt{s(s - a)(s - b)(s - c)}$$\n   $$L = \\sqrt{21(21 - 13)(21 - 14)(21 - 15)}$$\n   $$L = \\sqrt{21 \\times 8 \\times 7 \\times 6}$$\n\n3. Faktorkan bilangan di bawah akar:\n   $$L = \\sqrt{(3 \\times 7) \\times (2^3) \\times 7 \\times (2 \\times 3)} = \\sqrt{7^2 \\times 3^2 \\times 2^4}$$\n   $$L = 7 \\times 3 \\times 4 = 84\\text{ m}^2$$\n\nJadi, luas tanah tersebut adalah **B** ($84\\text{ m}^2$).'
    },
    {
      id: 'matwa-pengukuran-bangun-datar-16',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-datar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah kerangka layang-layang hias bambu memiliki dua diagonal yang berpotongan tegak lurus dengan panjang masing-masing $16\\text{ cm}$ dan $21\\text{ cm}$. Luas kertas pembungkus yang dibutuhkan untuk menutup layang-layang tersebut adalah ...',
      options: [
        { id: 'A', text: '$156\\text{ cm}^2$' },
        { id: 'B', text: '$168\\text{ cm}^2$' },
        { id: 'C', text: '$182\\text{ cm}^2$' },
        { id: 'D', text: '$336\\text{ cm}^2$' },
        { id: 'E', text: '$364\\text{ cm}^2$' }
      ],
      correct_answer: 'B',
      hint: 'Luas layang-layang = 1/2 * d_1 * d_2.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Gunakan formula luas layang-layang:\n   $$L = \\frac{1}{2} \\times d_1 \\times d_2$$\n\n2. Masukkan panjang kedua diagonal:\n   $$L = \\frac{1}{2} \\times 16\\text{ cm} \\times 21\\text{ cm} = 8 \\times 21 = 168\\text{ cm}^2$$\n\nJadi, luas kertas yang dibutuhkan adalah **B** ($168\\text{ cm}^2$).'
    },
    {
      id: 'matwa-pengukuran-bangun-datar-17',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-datar',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Lantai sebuah ruang pertemuan berukuran $12\\text{ meter} \\times 8\\text{ meter}$ akan dipasangi ubin keramik persegi berukuran $40\\text{ cm} \\times 40\\text{ cm}$. Keramik dijual dalam kemasan kardus dengan isi $10\\text{ buah per kardus}$. Jumlah kardus keramik minimum yang harus dibeli untuk menutup seluruh lantai adalah ...',
      options: [
        { id: 'A', text: '$48\\text{ kardus}$' },
        { id: 'B', text: '$54\\text{ kardus}$' },
        { id: 'C', text: '$60\\text{ kardus}$' },
        { id: 'D', text: '$64\\text{ kardus}$' },
        { id: 'E', text: '$72\\text{ kardus}$' }
      ],
      correct_answer: 'C',
      hint: 'Hitung luas total lantai dalam cm^2, bagi dengan luas 1 keping keramik, lalu bagi dengan isi per kardus.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung luas lantai aula dalam satuan $\\text{cm}^2$:\n   $$L_{\\text{lantai}} = 1200\\text{ cm} \\times 800\\text{ cm} = 960.000\\text{ cm}^2$$\n\n2. Hitung luas satu buah ubin keramik:\n   $$L_{\\text{ubin}} = 40\\text{ cm} \\times 40\\text{ cm} = 1.600\\text{ cm}^2$$\n\n3. Hitung jumlah ubin keramik yang dibutuhkan:\n   $$N = \\frac{960.000}{1.600} = 600\\text{ buah}$$\n\n4. Hitung jumlah kardus yang harus dibeli ($1\\text{ kardus} = 10\\text{ buah}$):\n   $$\\text{Kardus} = \\frac{600}{10} = 60\\text{ kardus}$$\n\nJadi, jumlah kardus keramik yang dibutuhkan adalah **C** ($60\\text{ kardus}$).'
    }
  ],

  'pengukuran-bangun-ruang': [
    {
      id: 'matwa-pengukuran-bangun-ruang-11',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-ruang',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah tandon penampungan air berbentuk balok memiliki perbandingan dimensi ukuran panjang : lebar : tinggi $= 4 : 3 : 2$. Jika volume tandon tersebut terisi penuh sebesar $192\\text{ liter}$ ($192\\text{ dm}^3$), luas seluruh permukaan dinding tandon tersebut adalah ...',
      options: [
        { id: 'A', text: '$184\\text{ dm}^2$' },
        { id: 'B', text: '$196\\text{ dm}^2$' },
        { id: 'C', text: '$208\\text{ dm}^2$' },
        { id: 'D', text: '$216\\text{ dm}^2$' },
        { id: 'E', text: '$224\\text{ dm}^2$' }
      ],
      correct_answer: 'C',
      hint: 'Volume balok V = 4x * 3x * 2x = 24x^3 = 192. Cari x, lalu hitung p, l, t dan Luas permukaan L = 2(pl + pt + lt).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Misalkan panjang $p = 4x$, lebar $l = 3x$, dan tinggi $t = 2x$ (dalam $\\text{dm}$):\n   $$V = p \\times l \\times t = (4x)(3x)(2x) = 24x^3$$\n\n2. Samakan dengan volume yang diketahui:\n   $$24x^3 = 192 \\implies x^3 = \\frac{192}{24} = 8 \\implies x = 2\\text{ dm}$$\n\n3. Tentukan ukuran dimensi balok:\n   - $p = 4(2) = 8\\text{ dm}$\n   - $l = 3(2) = 6\\text{ dm}$\n   - $t = 2(2) = 4\\text{ dm}$\n\n4. Hitung luas permukaan balok:\n   $$L = 2(pl + pt + lt) = 2(8 \\cdot 6 + 8 \\cdot 4 + 6 \\cdot 4)$$\n   $$L = 2(48 + 32 + 24) = 2(104) = 208\\text{ dm}^2$$\n\nJadi, luas permukaan tandon adalah **C** ($208\\text{ dm}^2$).'
    },
    {
      id: 'matwa-pengukuran-bangun-ruang-12',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-ruang',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah drum penampungan minyak berbentuk silinder tabung memiliki diameter alas $140\\text{ cm}$ dan tinggi $1\\text{ meter}$. Drum tersebut diisi minyak tanah dari sebuah selang dengan debit aliran tetap $22\\text{ liter/menit}$. Waktu yang dibutuhkan untuk mengisi drum kosong tersebut hingga penuh adalah ... (Gunakan $\\pi = \\frac{22}{7}$)',
      options: [
        { id: 'A', text: '$60\\text{ menit}$' },
        { id: 'B', text: '$65\\text{ menit}$' },
        { id: 'C', text: '$70\\text{ menit}$' },
        { id: 'D', text: '$75\\text{ menit}$' },
        { id: 'E', text: '$80\\text{ menit}$' }
      ],
      correct_answer: 'C',
      hint: 'Konversikan dimensi ke satuan desimeter: r = 7 dm, t = 10 dm. Volume V = pi * r^2 * t (dalam liter). Waktu = Volume / Debit.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Konversikan satuan ukuran ke desimeter ($\\text{dm}$):\n   - Jari-jari $r = \\frac{140}{2}\\text{ cm} = 70\\text{ cm} = 7\\text{ dm}$\n   - Tinggi $t = 1\\text{ meter} = 10\\text{ dm}$\n\n2. Hitung volume drum dalam liter ($1\\text{ dm}^3 = 1\\text{ liter}$):\n   $$V = \\pi r^2 t = \\frac{22}{7} \\times 7^2 \\times 10 = 22 \\times 7 \\times 10 = 1.540\\text{ liter}$$\n\n3. Hitung waktu pengisian:\n   $$\\text{Waktu} = \\frac{\\text{Volume}}{\\text{Debit}} = \\frac{1.540\\text{ liter}}{22\\text{ liter/menit}} = 70\\text{ menit}$$\n\nJadi, waktu yang dibutuhkan adalah **C** ($70\\text{ menit}$).'
    },
    {
      id: 'matwa-pengukuran-bangun-ruang-13',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-ruang',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah kemasan cone es krim berbentuk kerucut memiliki jari-jari lingkaran alas $6\\text{ cm}$ dan tinggi kerucut $8\\text{ cm}$. Luas seluruh permukaan kerucut tersebut adalah ... (Gunakan $\\pi = 3{,}14$)',
      options: [
        { id: 'A', text: '$282{,}60\\text{ cm}^2$' },
        { id: 'B', text: '$301{,}44\\text{ cm}^2$' },
        { id: 'C', text: '$314{,}00\\text{ cm}^2$' },
        { id: 'D', text: '$326{,}56\\text{ cm}^2$' },
        { id: 'E', text: '$339{,}12\\text{ cm}^2$' }
      ],
      correct_answer: 'B',
      hint: 'Cari panjang garis pelukis s = sqrt(r^2 + t^2) = 10 cm. Luas permukaan kerucut = pi * r * (r + s).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Cari panjang garis pelukis kerucut ($s$):\n   $$s = \\sqrt{r^2 + t^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}$$\n\n2. Gunakan rumus luas permukaan kerucut lengkap:\n   $$L = \\pi r (r + s)$$\n   $$L = 3{,}14 \\times 6 \\times (6 + 10)$$\n   $$L = 3{,}14 \\times 6 \\times 16 = 3{,}14 \\times 96 = 301{,}44\\text{ cm}^2$$\n\nJadi, luas permukaan kerucut adalah **B** ($301{,}44\\text{ cm}^2$).'
    },
    {
      id: 'matwa-pengukuran-bangun-ruang-14',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-ruang',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah monumen bersejarah berbentuk limas beraturan dengan alas persegi berukuran $12\\text{ meter} \\times 12\\text{ meter}$ dan tinggi puncak limas $15\\text{ meter}$. Volume ruang monumen tersebut adalah ...',
      options: [
        { id: 'A', text: '$640\\text{ m}^3$' },
        { id: 'B', text: '$680\\text{ m}^3$' },
        { id: 'C', text: '$720\\text{ m}^3$' },
        { id: 'D', text: '$750\\text{ m}^3$' },
        { id: 'E', text: '$800\\text{ m}^3$' }
      ],
      correct_answer: 'C',
      hint: 'Volume limas = 1/3 * Luas alas * tinggi.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung luas alas limas yang berbentuk persegi:\n   $$L_{\\text{alas}} = s^2 = 12 \\times 12 = 144\\text{ m}^2$$\n\n2. Hitung volume limas:\n   $$V = \\frac{1}{3} \\times L_{\\text{alas}} \\times t$$\n   $$V = \\frac{1}{3} \\times 144 \\times 15 = 144 \\times 5 = 720\\text{ m}^3$$\n\nJadi, volume monumen tersebut adalah **C** ($720\\text{ m}^3$).'
    },
    {
      id: 'matwa-pengukuran-bangun-ruang-15',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-ruang',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah bandul mekanik terbuat dari logam berbentuk setengah bola pejal (padat) dengan diameter $14\\text{ cm}$. Luas seluruh permukaan bandul logam tersebut adalah ... (Gunakan $\\pi = \\frac{22}{7}$)',
      options: [
        { id: 'A', text: '$308\\text{ cm}^2$' },
        { id: 'B', text: '$462\\text{ cm}^2$' },
        { id: 'C', text: '$616\\text{ cm}^2$' },
        { id: 'D', text: '$770\\text{ cm}^2$' },
        { id: 'E', text: '$924\\text{ cm}^2$' }
      ],
      correct_answer: 'B',
      hint: 'Setengah bola pejal memiliki dua permukaan: selimut setengah bola (2 * pi * r^2) dan penampang lingkaran alas (pi * r^2), sehingga total luas = 3 * pi * r^2.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Tentukan jari-jari bola:\n   $$r = \\frac{d}{2} = \\frac{14}{2} = 7\\text{ cm}$$\n\n2. Luas permukaan setengah bola padat terdiri dari selimut lengkung dan bidang alas datar:\n   $$L = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2$$\n\n3. Masukkan nilai yang diketahui:\n   $$L = 3 \\times \\frac{22}{7} \\times 7^2 = 3 \\times 22 \\times 7 = 3 \\times 154 = 462\\text{ cm}^2$$\n\nJadi, luas seluruh permukaannya adalah **B** ($462\\text{ cm}^2$).'
    },
    {
      id: 'matwa-pengukuran-bangun-ruang-16',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-ruang',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dua buah wadah kaleng berbentuk silinder tabung memiliki tinggi yang sama. Jari-jari alas kaleng $A$ adalah $1{,}5\\text{ kali}$ dari jari-jari alas kaleng $B$. Perbandingan volume kaleng $A$ terhadap volume kaleng $B$ adalah ...',
      options: [
        { id: 'A', text: '$3 : 2$' },
        { id: 'B', text: '$9 : 4$' },
        { id: 'C', text: '$4 : 9$' },
        { id: 'D', text: '$5 : 2$' },
        { id: 'E', text: '$27 : 8$' }
      ],
      correct_answer: 'B',
      hint: 'Jika tinggi tabung sama, perbandingan volume berbanding lurus dengan kuadrat jari-jarinya: V_A / V_B = (r_A / r_B)^2.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Rumus volume tabung $V = \\pi r^2 t$. Karena tinggi $t$ kedua kaleng sama:\n   $$\\frac{V_A}{V_B} = \\frac{\\pi r_A^2 t}{\\pi r_B^2 t} = \\left(\\frac{r_A}{r_B}\\right)^2$$\n\n2. Diketahui $r_A = 1{,}5 r_B = \\frac{3}{2} r_B$, maka $\\frac{r_A}{r_B} = \\frac{3}{2}$:\n   $$\\frac{V_A}{V_B} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$$\n\nJadi, perbandingannya adalah **B** ($9 : 4$).'
    },
    {
      id: 'matwa-pengukuran-bangun-ruang-17',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'pengukuran-bangun-ruang',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah tenda perkemahan memiliki bentuk prisma tegak segitiga. Penampang depan tenda berbentuk segitiga siku-siku dengan panjang sisi siku-siku $3\\text{ meter}$ dan $4\\text{ meter}$. Jika panjang tenda ke belakang (tinggi prisma) adalah $6\\text{ meter}$, volume udara di dalam tenda tersebut adalah ...',
      options: [
        { id: 'A', text: '$32\\text{ m}^3$' },
        { id: 'B', text: '$36\\text{ m}^3$' },
        { id: 'C', text: '$40\\text{ m}^3$' },
        { id: 'D', text: '$48\\text{ m}^3$' },
        { id: 'E', text: '$72\\text{ m}^3$' }
      ],
      correct_answer: 'B',
      hint: 'Volume prisma = Luas alas segitiga * tinggi prisma.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hitung luas alas penampang segitiga siku-siku:\n   $$L_{\\text{alas}} = \\frac{1}{2} \\times a \\times t_{\\text{segitiga}} = \\frac{1}{2} \\times 3\\text{ m} \\times 4\\text{ m} = 6\\text{ m}^2$$\n\n2. Hitung volume prisma:\n   $$V = L_{\\text{alas}} \\times t_{\\text{prisma}} = 6\\text{ m}^2 \\times 6\\text{ m} = 36\\text{ m}^3$$\n\nJadi, volume udara di dalam tenda adalah **B** ($36\\text{ m}^3$).'
    }
  ],

  'jarak-dimensi-tiga': [
    {
      id: 'matwa-jarak-dimensi-tiga-11',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'jarak-dimensi-tiga',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan kubus $ABCD.EFGH$ dengan panjang rusuk $8\\text{ cm}$. Titik $M$ terletak di tengah rusuk $BC$. Jarak antara titik $H$ dan titik $M$ adalah ...',
      options: [
        { id: 'A', text: '$10\\text{ cm}$' },
        { id: 'B', text: '$12\\text{ cm}$' },
        { id: 'C', text: '$4\\sqrt{5}\\text{ cm}$' },
        { id: 'D', text: '$8\\sqrt{2}\\text{ cm}$' },
        { id: 'E', text: '$14\\text{ cm}$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan segitiga siku-siku HDM di mana D adalah proyeksi H pada alas. DM = sqrt(DC^2 + CM^2), lalu HM = sqrt(HD^2 + DM^2).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Titik $M$ berada di tengah rusuk $BC$, sehingga $CM = \\frac{1}{2}(8) = 4\\text{ cm}$.\n\n2. Hitung jarak $D$ ke $M$ pada bidang alas $ABCD$ (segitiga $DCM$ siku-siku di $C$):\n   $$DM = \\sqrt{DC^2 + CM^2} = \\sqrt{8^2 + 4^2} = \\sqrt{64 + 16} = \\sqrt{80}\\text{ cm}$$\n\n3. Garis $HD$ tegak lurus bidang alas $ABCD$, sehingga segitiga $HDM$ siku-siku di $D$:\n   $$HM = \\sqrt{HD^2 + DM^2} = \\sqrt{8^2 + (\\sqrt{80})^2} = \\sqrt{64 + 80} = \\sqrt{144} = 12\\text{ cm}$$\n\nJadi, jarak titik $H$ ke titik $M$ adalah **B** ($12\\text{ cm}$).'
    },
    {
      id: 'matwa-jarak-dimensi-tiga-12',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'jarak-dimensi-tiga',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui kubus $ABCD.EFGH$ dengan panjang rusuk $6\\text{ cm}$. Jarak titik $B$ ke garis diagonal bidang $EG$ adalah ...',
      options: [
        { id: 'A', text: '$3\\sqrt{3}\\text{ cm}$' },
        { id: 'B', text: '$3\\sqrt{6}\\text{ cm}$' },
        { id: 'C', text: '$6\\sqrt{2}\\text{ cm}$' },
        { id: 'D', text: '$4\\sqrt{3}\\text{ cm}$' },
        { id: 'E', text: '$6\\sqrt{3}\\text{ cm}$' }
      ],
      correct_answer: 'B',
      hint: 'Titik proyeksi B pada diagonal EG jatuh tepat di titik pusat O dari bidang atas EFGH. Jarak BO = sqrt(BF^2 + FO^2).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Segitiga $BEG$ adalah segitiga sama sisi karena $BE = EG = BG = 6\\sqrt{2}\\text{ cm}$ (ketiganya diagonal bidang kubus).\n\n2. Garis tinggi dari $B$ ke $EG$ jatuh tepat di titik tengah $EG$, sebut titik $O$. Titik $O$ adalah pusat bidang atas $EFGH$.\n\n3. Jarak $F$ ke $O$ adalah setengah diagonal bidang $FH$:\n   $$FO = \\frac{1}{2}(6\\sqrt{2}) = 3\\sqrt{2}\\text{ cm}$$\n\n4. Karena $BF \\perp$ bidang atas $EFGH$, maka $\\triangle BFO$ siku-siku di $F$:\n   $$BO = \\sqrt{BF^2 + FO^2} = \\sqrt{6^2 + (3\\sqrt{2})^2} = \\sqrt{36 + 18} = \\sqrt{54} = 3\\sqrt{6}\\text{ cm}$$\n\nJadi, jarak titik $B$ ke garis $EG$ adalah **B** ($3\\sqrt{6}\\text{ cm}$).'
    },
    {
      id: 'matwa-jarak-dimensi-tiga-13',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'jarak-dimensi-tiga',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan kubus $ABCD.EFGH$ dengan panjang rusuk $12\\text{ cm}$. Jarak titik sudut $C$ ke bidang diagonal $BDG$ adalah ...',
      options: [
        { id: 'A', text: '$4\\sqrt{2}\\text{ cm}$' },
        { id: 'B', text: '$4\\sqrt{3}\\text{ cm}$' },
        { id: 'C', text: '$6\\sqrt{3}\\text{ cm}$' },
        { id: 'D', text: '$8\\sqrt{3}\\text{ cm}$' },
        { id: 'E', text: '$6\\sqrt{2}\\text{ cm}$' }
      ],
      correct_answer: 'B',
      hint: 'Jarak titik sudut ke bidang diagonal segitiga kubus yang memotong ketiga rusuk yang bertemu di titik sudut tersebut adalah 1/3 kali panjang diagonal ruang.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Diagonal ruang kubus dari titik $C$ menuju titik $E$ berpotongan tegak lurus dengan bidang $BDG$.\n\n2. Bidang $BDG$ membagi diagonal ruang $CE$ menjadi dua bagian dengan rasio $1 : 2$. Jarak titik $C$ ke bidang $BDG$ adalah $\\frac{1}{3}$ dari panjang diagonal ruang $CE$:\n   $$d_{\\text{ruang}} = s\\sqrt{3} = 12\\sqrt{3}\\text{ cm}$$\n\n3. Hitung jarak titik $C$ ke bidang $BDG$:\n   $$\\text{Jarak} = \\frac{1}{3} \\times 12\\sqrt{3} = 4\\sqrt{3}\\text{ cm}$$\n\nJadi, jarak titik $C$ ke bidang $BDG$ adalah **B** ($4\\sqrt{3}\\text{ cm}$).'
    },
    {
      id: 'matwa-jarak-dimensi-tiga-14',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'jarak-dimensi-tiga',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Limas tegak beraturan $T.ABCD$ memiliki alas berbentuk persegi dengan panjang sisi alas $AB = 8\\text{ cm}$ dan panjang rusuk tegak $TA = 4\\sqrt{6}\\text{ cm}$. Jarak titik puncak $T$ ke bidang alas $ABCD$ (tinggi limas) adalah ...',
      options: [
        { id: 'A', text: '$6\\text{ cm}$' },
        { id: 'B', text: '$8\\text{ cm}$' },
        { id: 'C', text: '$4\\sqrt{3}\\text{ cm}$' },
        { id: 'D', text: '$10\\text{ cm}$' },
        { id: 'E', text: '$6\\sqrt{2}\\text{ cm}$' }
      ],
      correct_answer: 'B',
      hint: 'Tinggi limas jatuh pada titik pusat alas O. AO = 1/2 diagonal alas AC. Tinggi TO = sqrt(TA^2 - AO^2).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Tentukan panjang diagonal sisi alas $AC$ pada persegi berukuran $8\\text{ cm}$:\n   $$AC = 8\\sqrt{2}\\text{ cm}$$\n\n2. Jarak dari titik sudut $A$ ke pusat alas $O$:\n   $$AO = \\frac{1}{2} AC = \\frac{1}{2}(8\\sqrt{2}) = 4\\sqrt{2}\\text{ cm}$$\n\n3. Gunakan teorema Pythagoras pada segitiga tegak $TOA$ siku-siku di $O$:\n   $$TO = \\sqrt{TA^2 - AO^2} = \\sqrt{(4\\sqrt{6})^2 - (4\\sqrt{2})^2}$$\n   $$TO = \\sqrt{16(6) - 16(2)} = \\sqrt{96 - 32} = \\sqrt{64} = 8\\text{ cm}$$\n\nJadi, jarak titik $T$ ke bidang alas adalah **B** ($8\\text{ cm}$).'
    },
    {
      id: 'matwa-jarak-dimensi-tiga-15',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'jarak-dimensi-tiga',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Pada kubus $ABCD.EFGH$ dengan panjang rusuk $10\\text{ cm}$, jarak antara garis rusuk tegak $AE$ dan garis diagonal bidang alas $BD$ adalah ...',
      options: [
        { id: 'A', text: '$5\\text{ cm}$' },
        { id: 'B', text: '$5\\sqrt{2}\\text{ cm}$' },
        { id: 'C', text: '$5\\sqrt{3}\\text{ cm}$' },
        { id: 'D', text: '$10\\text{ cm}$' },
        { id: 'E', text: '$10\\sqrt{2}\\text{ cm}$' }
      ],
      correct_answer: 'B',
      hint: 'Garis AE tegak lurus bidang alas ABCD di titik A. Jarak garis AE ke garis BD pada bidang alas sama dengan jarak titik A ke garis BD.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Rusuk $AE$ tegak lurus bidang alas $ABCD$ di titik $A$.\n\n2. Jarak antara garis $AE$ dan garis $BD$ yang terletak pada bidang alas sama dengan panjang ruas garis dari titik $A$ yang ditarik tegak lurus ke garis $BD$.\n\n3. Pada persegi $ABCD$, diagonal $AC$ dan $BD$ berpotongan saling tegak lurus di titik pusat $O$. Maka jarak $A$ ke garis $BD$ adalah setengah dari diagonal bidang $AC$:\n   $$AC = 10\\sqrt{2}\\text{ cm}$$\n   $$AO = \\frac{1}{2} AC = \\frac{1}{2}(10\\sqrt{2}) = 5\\sqrt{2}\\text{ cm}$$\n\nJadi, jarak antara garis $AE$ dan garis $BD$ adalah **B** ($5\\sqrt{2}\\text{ cm}$).'
    },
    {
      id: 'matwa-jarak-dimensi-tiga-16',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'jarak-dimensi-tiga',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan kubus $ABCD.EFGH$. Jika $\\theta$ adalah sudut yang dibentuk oleh garis diagonal ruang $AG$ dengan bidang alas $ABCD$, maka nilai dari $\\sin \\theta$ adalah ...',
      options: [
        { id: 'A', text: '$\\frac{1}{2}$' },
        { id: 'B', text: '$\\frac{1}{3}\\sqrt{3}$' },
        { id: 'C', text: '$\\frac{1}{2}\\sqrt{2}$' },
        { id: 'D', text: '$\\frac{1}{3}\\sqrt{6}$' },
        { id: 'E', text: '$\\frac{1}{2}\\sqrt{3}$' }
      ],
      correct_answer: 'B',
      hint: 'Proyeksikan garis AG pada alas ABCD yaitu ruas garis AC. Sudut theta terletak pada segitiga ACG di sudut CAG.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Proyeksi garis $AG$ pada bidang alas $ABCD$ adalah diagonal sisi $AC$.\n\n2. Sudut antara garis $AG$ dan bidang alas adalah $\\angle CAG = \\theta$.\n\n3. Segitiga $ACG$ adalah segitiga siku-siku di titik $C$ dengan:\n   - Panjang rusuk tegak: $CG = s$\n   - Panjang diagonal bidang alas: $AC = s\\sqrt{2}$\n   - Panjang diagonal ruang: $AG = s\\sqrt{3}$\n\n4. Nilai $\\sin \\theta$ adalah perbandingan sisi depan terhadap sisi miring:\n   $$\\sin \\theta = \\frac{CG}{AG} = \\frac{s}{s\\sqrt{3}} = \\frac{1}{\\sqrt{3}} = \\frac{1}{3}\\sqrt{3}$$\n\nJadi, nilai $\\sin \\theta$ adalah **B** ($\\frac{1}{3}\\sqrt{3}$).'
    },
    {
      id: 'matwa-jarak-dimensi-tiga-17',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'jarak-dimensi-tiga',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Balok $ABCD.EFGH$ memiliki ukuran panjang rusuk $AB = 8\\text{ cm}$, $BC = 6\\text{ cm}$, dan $CG = 5\\text{ cm}$. Titik $K$ adalah titik perpotongan kedua diagonal bidang atas $EG$ dan $FH$. Jarak titik $K$ ke bidang alas $ABCD$ adalah ...',
      options: [
        { id: 'A', text: '$4\\text{ cm}$' },
        { id: 'B', text: '$5\\text{ cm}$' },
        { id: 'C', text: '$6\\text{ cm}$' },
        { id: 'D', text: '$8\\text{ cm}$' },
        { id: 'E', text: '$10\\text{ cm}$' }
      ],
      correct_answer: 'B',
      hint: 'Bidang atas EFGH sejajar dengan bidang alas ABCD. Jarak setiap titik pada bidang atas ke bidang alas sama dengan tinggi balok.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Titik $K$ terletak pada bidang atas $EFGH$.\n\n2. Pada balok tegak, bidang atas $EFGH$ sejajar sempurna dengan bidang alas $ABCD$.\n\n3. Jarak tegak lurus dari sembarang titik pada bidang atas ke bidang alas selalu konstan dan sama dengan tinggi balok ($t = CG = 5\\text{ cm}$).\n\nJadi, jarak titik $K$ ke bidang alas adalah **B** ($5\\text{ cm}$).'
    }
  ],

  'transformasi-geometri': [
    {
      id: 'matwa-transformasi-geometri-11',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'transformasi-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Titik $A(3, -5)$ ditranslasikan berturut-turut oleh translasi $T_1 = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$ dan dilanjutkan oleh $T_2 = \\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix}$. Koordinat posisi akhir bayangan titik $A$ adalah ...',
      options: [
        { id: 'A', text: '$(4, -2)$' },
        { id: 'B', text: '$(6, -2)$' },
        { id: 'C', text: '$(6, 0)$' },
        { id: 'D', text: '$(5, -1)$' },
        { id: 'E', text: '$(8, -2)$' }
      ],
      correct_answer: 'B',
      hint: 'Komposisi translasi cukup dengan menjumlahkan komponen vektor pergeseran: x\' = x + a_1 + a_2 dan y\' = y + b_1 + b_2.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Jumlahkan vektor translasi gabungan $T = T_1 + T_2$:\n   $$T = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix} + \\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} -2 + 5 \\\\ 4 + (-1) \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix}$$\n\n2. Tentukan koordinat bayangan titik $A(3, -5)$:\n   $$A\' = (x + 3, y + 3) = (3 + 3, -5 + 3) = (6, -2)$$\n\nJadi, koordinat bayangan akhirnya adalah **B** ($(6, -2)$).'
    },
    {
      id: 'matwa-transformasi-geometri-12',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'transformasi-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Titik koordinat $P(-4, 7)$ direfleksikan terhadap garis $y = -x$. Koordinat bayangan titik $P$ adalah ...',
      options: [
        { id: 'A', text: '$(-7, 4)$' },
        { id: 'B', text: '$(7, -4)$' },
        { id: 'C', text: '$(-4, -7)$' },
        { id: 'D', text: '$(4, -7)$' },
        { id: 'E', text: '$(7, 4)$' }
      ],
      correct_answer: 'A',
      hint: 'Rumus refleksi terhadap garis y = -x: (x, y) ditransformasikan menjadi (-y, -x).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Aturan refleksi terhadap garis $y = -x$:\n   $$(x, y) \\xrightarrow{M_{y = -x}} (-y, -x)$$\n\n2. Terapkan pada titik $P(-4, 7)$:\n   - $x = -4 \\implies -x = -(-4) = 4$\n   - $y = 7 \\implies -y = -7$\n   $$P\' = (-7, 4)$$\n\nJadi, bayangan titik $P$ adalah **A** ($(-7, 4)$).'
    },
    {
      id: 'matwa-transformasi-geometri-13',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'transformasi-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Titik $B(5, -2)$ dirotasikan terhadap titik pusat asal $O(0, 0)$ sejauh $90^\\circ$ berlawanan arah putaran jarum jam ($+90^\\circ$). Koordinat bayangan titik $B$ adalah ...',
      options: [
        { id: 'A', text: '$(2, 5)$' },
        { id: 'B', text: '$(-2, -5)$' },
        { id: 'C', text: '$(2, -5)$' },
        { id: 'D', text: '$(-5, 2)$' },
        { id: 'E', text: '$(5, 2)$' }
      ],
      correct_answer: 'A',
      hint: 'Rumus rotasi [O, +90 derajat]: (x, y) menjadi (-y, x).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Aturan matriks rotasi sebesar $+90^\\circ$ berpusat di $O(0, 0)$:\n   $$(x, y) \\xrightarrow{R_{[O, 90^\\circ]}} (-y, x)$$\n\n2. Masukkan koordinat $x = 5$ dan $y = -2$:\n   $$x\' = -y = -(-2) = 2$$\n   $$y\' = x = 5$$\n   $$B\' = (2, 5)$$\n\nJadi, koordinat bayangan titik $B$ adalah **A** ($(2, 5)$).'
    },
    {
      id: 'matwa-transformasi-geometri-14',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'transformasi-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Titik $C(4, 2)$ didilatasikan dengan faktor skala $k = 3$ terhadap titik pusat dilatasi $P(1, -2)$. Koordinat bayangan titik $C$ adalah ...',
      options: [
        { id: 'A', text: '$(10, 8)$' },
        { id: 'B', text: '$(10, 10)$' },
        { id: 'C', text: '$(12, 10)$' },
        { id: 'D', text: '$(11, 10)$' },
        { id: 'E', text: '$(9, 10)$' }
      ],
      correct_answer: 'B',
      hint: 'Rumus dilatasi dengan pusat (a, b) dan faktor k: x\' = a + k(x - a) dan y\' = b + k(y - b).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Formula dilatasi terhadap titik pusat $(a, b) = (1, -2)$ dengan faktor skala $k = 3$:\n   $$x\' = a + k(x - a)$$\n   $$y\' = b + k(y - b)$$\n\n2. Hitung $x\'$ untuk $x = 4$:\n   $$x\' = 1 + 3(4 - 1) = 1 + 3(3) = 1 + 9 = 10$$\n\n3. Hitung $y\'$ untuk $y = 2$:\n   $$y\' = -2 + 3(2 - (-2)) = -2 + 3(4) = -2 + 12 = 10$$\n\n4. Koordinat bayangan: $(10, 10)$.\n\nJadi, bayangan titik $C$ adalah **B** ($(10, 10)$).'
    },
    {
      id: 'matwa-transformasi-geometri-15',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'transformasi-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Garis dengan persamaan $2x - 3y + 6 = 0$ ditranslasikan oleh vektor pergeseran $T = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$. Persamaan garis bayangan hasil translasi tersebut adalah ...',
      options: [
        { id: 'A', text: '$2x - 3y - 6 = 0$' },
        { id: 'B', text: '$2x - 3y + 6 = 0$' },
        { id: 'C', text: '$2x - 3y - 12 = 0$' },
        { id: 'D', text: '$2x - 3y + 18 = 0$' },
        { id: 'E', text: '$3x - 2y - 6 = 0$' }
      ],
      correct_answer: 'A',
      hint: 'Substitusikan x = x\' - 3 dan y = y\' + 2 ke persamaan garis semula.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Hubungan koordinat awal dan bayangan pada translasi $T = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$:\n   - $x\' = x + 3 \\implies x = x\' - 3$\n   - $y\' = y - 2 \\implies y = y\' + 2$\n\n2. Substitusikan ke persamaan garis $2x - 3y + 6 = 0$:\n   $$2(x\' - 3) - 3(y\' + 2) + 6 = 0$$\n   $$2x\' - 6 - 3y\' - 6 + 6 = 0$$\n   $$2x\' - 3y\' - 6 = 0$$\n\nJadi, persamaan garis bayangannya adalah **A** ($2x - 3y - 6 = 0$).'
    },
    {
      id: 'matwa-transformasi-geometri-16',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'transformasi-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Persamaan garis bayangan dari garis lurus $y = 3x - 5$ oleh refleksi terhadap garis vertikal $x = 2$ adalah ...',
      options: [
        { id: 'A', text: '$y = -3x + 7$' },
        { id: 'B', text: '$y = -3x + 1$' },
        { id: 'C', text: '$y = 3x + 7$' },
        { id: 'D', text: '$y = -3x - 7$' },
        { id: 'E', text: '$y = 3x - 1$' }
      ],
      correct_answer: 'A',
      hint: 'Refleksi terhadap garis x = h menghasilkan x\' = 2h - x sehingga x = 2h - x\' = 4 - x\', sedangkan y\' = y.',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Aturan refleksi terhadap garis vertikal $x = 2$ ($h = 2$):\n   - $x\' = 2(2) - x = 4 - x \\implies x = 4 - x\'$\n   - $y\' = y \\implies y = y\'$\n\n2. Substitusikan $x = 4 - x\'$ dan $y = y\'$ ke persamaan $y = 3x - 5$:\n   $$y\' = 3(4 - x\') - 5$$\n   $$y\' = 12 - 3x\' - 5$$\n   $$y\' = -3x\' + 7$$\n\nJadi, persamaan garis bayangannya adalah **A** ($y = -3x + 7$).'
    },
    {
      id: 'matwa-transformasi-geometri-17',
      chapter_id: 'geometri-dan-pengukuran',
      sub_chapter_id: 'transformasi-geometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Titik $D(2, 3)$ dicerminkan terhadap sumbu-$X$, kemudian bayangannya dirotasikan sejauh $180^\\circ$ terhadap titik pusat asal $O(0, 0)$. Koordinat bayangan akhir dari titik $D$ adalah ...',
      options: [
        { id: 'A', text: '$(-2, 3)$' },
        { id: 'B', text: '$(-2, -3)$' },
        { id: 'C', text: '$(2, -3)$' },
        { id: 'D', text: '$(3, -2)$' },
        { id: 'E', text: '$(-3, 2)$' }
      ],
      correct_answer: 'A',
      hint: 'Tahap 1: refleksi sumbu-X mengubah (x, y) menjadi (x, -y). Tahap 2: rotasi 180 derajat mengubah (x, y) menjadi (-x, -y).',
      explanation: 'Langkah-langkah penyelesaian:\n\n1. Transformasi tahap 1 (Refleksi terhadap sumbu-$X$):\n   $$(x, y) \\xrightarrow{M_x} (x, -y)$$\n   $$D(2, 3) \\to D\'(2, -3)$$\n\n2. Transformasi tahap 2 (Rotasi $[O, 180^\\circ]$):\n   $$(x\', y\') \\xrightarrow{R_{[O, 180^\\circ]}} (-x\', -y\')$$\n   $$D\'(2, -3) \\to D\'\'(-2, -(-3)) = (-2, 3)$$\n\nJadi, koordinat bayangan akhirnya adalah **A** ($(-2, 3)$).'
    }
  ]
};

// VALIDATE & WRITE
console.log('🔍 MEMVALIDASI SEMUA RUMUS KATEX DAN SCHEMA PERTANYAAN BATCH 3...');

for (const [subChapter, newQuestions] of Object.entries(batch3Data)) {
  console.log(`\n➡️ Memproses sub-bab: ${subChapter} (${newQuestions.length} butir baru)`);

  // Validate each question
  newQuestions.forEach((q, i) => {
    checkLatex(q.question_text, `${subChapter} Q#${i + 1} text`);
    q.options.forEach((opt) => checkLatex(opt.text, `${subChapter} Q#${i + 1} opt ${opt.id}`));
    checkLatex(q.explanation, `${subChapter} Q#${i + 1} explanation`);
  });

  // Read existing
  const targetDataFile = path.join(rootDir, 'data', 'questions', `${subChapter}.json`);
  const targetPublicFile = path.join(rootDir, 'public', 'data', 'questions', `${subChapter}.json`);

  const existingQuestions = JSON.parse(fs.readFileSync(targetDataFile, 'utf-8'));

  // Separate existing standar and existing hots
  const existingStandar = existingQuestions.filter(
    (q) => (q.difficulty || 'STANDAR') === 'STANDAR'
  );
  const existingHots = existingQuestions.filter(
    (q) => (q.difficulty || 'STANDAR') === 'HOTS'
  );

  // Combine: existing standar + new standar questions, then hots
  const combinedStandar = [...existingStandar, ...newQuestions];
  const finalQuestions = [...combinedStandar, ...existingHots];

  console.log(
    `  📊 Sebelum: ${existingStandar.length} Standar, ${existingHots.length} HOTS (Total: ${existingQuestions.length})`
  );
  console.log(
    `  📈 Sesudah: ${combinedStandar.length} Standar, ${existingHots.length} HOTS (Total: ${finalQuestions.length})`
  );

  // Write to both data/questions and public/data/questions
  fs.writeFileSync(targetDataFile, JSON.stringify(finalQuestions, null, 2), 'utf-8');
  fs.writeFileSync(targetPublicFile, JSON.stringify(finalQuestions, null, 2), 'utf-8');
  console.log(`  💾 Berhasil disimpan ke data/questions dan public/data/questions!`);
}

console.log('\n✨ SELURUH PERTANYAAN BATCH 3 SELESAI DITULISKAN DENGAN SUKSES!');
