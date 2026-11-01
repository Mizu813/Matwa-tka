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

// BATCH 4A QUESTIONS DATA (Bab 6: Trigonometri & Bab 7: Statistika)
const batch4aData = {
  'perbandingan-trigonometri': [
    {
      id: 'matwa-perbandingan-trigonometri-11',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'perbandingan-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan segitiga siku-siku $ABC$ yang siku-siku di titik $B$. Jika panjang sisi $AB = 8\\text{ cm}$ dan sisi tegak $BC = 15\\text{ cm}$, maka nilai dari $\\cos A$ dan $\\tan C$ berturut-turut adalah ...',
      options: [
        { id: 'A', text: '$\\frac{8}{17}$ dan $\\frac{8}{15}$' },
        { id: 'B', text: '$\\frac{15}{17}$ dan $\\frac{8}{15}$' },
        { id: 'C', text: '$\\frac{8}{17}$ dan $\\frac{15}{8}$' },
        { id: 'D', text: '$\\frac{15}{17}$ dan $\\frac{15}{8}$' },
        { id: 'E', text: '$\\frac{8}{15}$ dan $\\frac{8}{17}$' }
      ],
      correct_answer: 'A',
      hint: 'Hitung panjang sisi miring (hipotenusa) $AC$ dengan teorema Pythagoras, kemudian gunakan definisi perbandingan sisi pada sudut $A$ dan sudut $C$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung panjang hipotenusa $AC$:\n   $$AC = \\sqrt{AB^2 + BC^2} = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17\\text{ cm}$$\n2. Menentukan nilai $\\cos A$:\n   - Sisi di samping sudut $A$ adalah $AB = 8$.\n   - Hipotenusa adalah $AC = 17$.\n   $$\\cos A = \\frac{\\text{sisi samping}}{\\text{hipotenusa}} = \\frac{AB}{AC} = \\frac{8}{17}$$\n3. Menentukan nilai $\\tan C$:\n   - Sisi di depan sudut $C$ adalah $AB = 8$.\n   - Sisi di samping sudut $C$ adalah $BC = 15$.\n   $$\\tan C = \\frac{\\text{sisi depan}}{\\text{sisi samping}} = \\frac{AB}{BC} = \\frac{8}{15}$$\n\nJadi, nilai $\\cos A$ dan $\\tan C$ berturut-turut adalah $\\frac{8}{17}$ dan $\\frac{8}{15}$.'
    },
    {
      id: 'matwa-perbandingan-trigonometri-12',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'perbandingan-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui nilai $\\tan \\theta = \\frac{7}{24}$ dengan sudut $\\theta$ berada di Kuadran III ($180^\\circ < \\theta < 270^\\circ$). Nilai dari $\\sin \\theta - \\cos \\theta$ adalah ...',
      options: [
        { id: 'A', text: '$-\\frac{31}{25}$' },
        { id: 'B', text: '$-\\frac{17}{25}$' },
        { id: 'C', text: '$\\frac{17}{25}$' },
        { id: 'D', text: '$\\frac{31}{25}$' },
        { id: 'E', text: '$\\frac{1}{25}$' }
      ],
      correct_answer: 'C',
      hint: 'Perhatikan tanda nilai trigonometri di Kuadran III: sinus bernilai negatif dan cosinus juga bernilai negatif.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menentukan panjang sisi segitiga acuan:\n   - $\\tan \\theta = \\frac{\\text{depan}}{\\text{samping}} = \\frac{7}{24}$.\n   - Sisi miring (hipotenusa) $r = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$.\n2. Menentukan nilai $\\sin \\theta$ dan $\\cos \\theta$ di Kuadran III:\n   - Pada Kuadran III, $\\sin \\theta < 0$ dan $\\cos \\theta < 0$.\n   $$\\sin \\theta = -\\frac{7}{25}$$\n   $$\\cos \\theta = -\\frac{24}{25}$$\n3. Menghitung $\\sin \\theta - \\cos \\theta$:\n   $$\\sin \\theta - \\cos \\theta = -\\frac{7}{25} - \\left(-\\frac{24}{25}\\right) = -\\frac{7}{25} + \\frac{24}{25} = \\frac{17}{25}$$\n\nJadi, nilai dari $\\sin \\theta - \\cos \\theta$ adalah $\\frac{17}{25}$.'
    },
    {
      id: 'matwa-perbandingan-trigonometri-13',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'perbandingan-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Nilai dari ekspresi trigonometri sudut-sudut istimewa:\n$$\\frac{\\sin 60^\\circ \\cdot \\cos 30^\\circ + \\cos 60^\\circ \\cdot \\sin 30^\\circ}{\\tan 45^\\circ + \\cos 0^\\circ}$$\nadalah ...',
      options: [
        { id: 'A', text: '$\\frac{1}{4}$' },
        { id: 'B', text: '$\\frac{1}{2}$' },
        { id: 'C', text: '$\\frac{\\sqrt{3}}{2}$' },
        { id: 'D', text: '$1$' },
        { id: 'E', text: '$2$' }
      ],
      correct_answer: 'B',
      hint: 'Substitusikan nilai eksak sudut istimewa: $\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$, $\\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$, $\\cos 60^\\circ = \\sin 30^\\circ = \\frac{1}{2}$, $\\tan 45^\\circ = 1$, dan $\\cos 0^\\circ = 1$.',
      explanation: 'Langkah-langkah evaluasi:\n1. Hitung nilai pembilang:\n   $$\\text{Pembilang} = \\left(\\frac{1}{2}\\sqrt{3}\\right)\\left(\\frac{1}{2}\\sqrt{3}\\right) + \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\right) = \\frac{3}{4} + \\frac{1}{4} = 1$$\n   (Bisa juga menggunakan identitas jumlah sudut $\\sin(60^\\circ + 30^\\circ) = \\sin 90^\\circ = 1$).\n2. Hitung nilai penyebut:\n   $$\\text{Penyebut} = \\tan 45^\\circ + \\cos 0^\\circ = 1 + 1 = 2$$\n3. Menghitung hasil bagi:\n   $$\\text{Nilai} = \\frac{1}{2}$$\n\nJadi, nilai dari ekspresi tersebut adalah $\\frac{1}{2}$.'
    },
    {
      id: 'matwa-perbandingan-trigonometri-14',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'perbandingan-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Nilai dari $\\sin 300^\\circ + \\cos 210^\\circ - \\tan 135^\\circ$ adalah ...',
      options: [
        { id: 'A', text: '$1 - \\sqrt{3}$' },
        { id: 'B', text: '$1 + \\sqrt{3}$' },
        { id: 'C', text: '$-1 - \\sqrt{3}$' },
        { id: 'D', text: '$\\sqrt{3} - 1$' },
        { id: 'E', text: '$-\\sqrt{3}$' }
      ],
      correct_answer: 'A',
      hint: 'Gunakan relasi sudut di kuadran II, III, dan IV terhadap sumbu horizontal ($180^\\circ$ dan $360^\\circ$).',
      explanation: 'Langkah-langkah penyelesaian:\n1. Relasi Kuadran IV:\n   $$\\sin 300^\\circ = \\sin(360^\\circ - 60^\\circ) = -\\sin 60^\\circ = -\\frac{1}{2}\\sqrt{3}$$\n2. Relasi Kuadran III:\n   $$\\cos 210^\\circ = \\cos(180^\\circ + 30^\\circ) = -\\cos 30^\\circ = -\\frac{1}{2}\\sqrt{3}$$\n3. Relasi Kuadran II:\n   $$\\tan 135^\\circ = \\tan(180^\\circ - 45^\\circ) = -\\tan 45^\\circ = -1$$\n4. Jumlahkan seluruh suku:\n   $$\\left(-\\frac{1}{2}\\sqrt{3}\\right) + \\left(-\\frac{1}{2}\\sqrt{3}\\right) - (-1) = -\\sqrt{3} + 1 = 1 - \\sqrt{3}$$\n\nJadi, nilainya adalah $1 - \\sqrt{3}$.'
    },
    {
      id: 'matwa-perbandingan-trigonometri-15',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'perbandingan-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diketahui titik koordinat $P(-4, 3)$. Jika $\\alpha$ adalah sudut yang dibentuk oleh ruas garis $OP$ ($O$ adalah titik pangkal $(0,0)$) dengan sumbu $X$ positif, maka nilai dari $\\csc \\alpha + \\cot \\alpha$ adalah ...',
      options: [
        { id: 'A', text: '$-3$' },
        { id: 'B', text: '$-\\frac{1}{3}$' },
        { id: 'C', text: '$\\frac{1}{3}$' },
        { id: 'D', text: '$1$' },
        { id: 'E', text: '$3$' }
      ],
      correct_answer: 'C',
      hint: 'Panjang jarak $r = \\sqrt{x^2 + y^2}$. Nilai $\\csc \\alpha = \\frac{r}{y}$ dan $\\cot \\alpha = \\frac{x}{y}$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung jarak $r$ dari titik asal ke $P(-4, 3)$:\n   $$r = \\sqrt{(-4)^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$$\n2. Menentukan nilai fungsi trigonometri:\n   $$\\csc \\alpha = \\frac{r}{y} = \\frac{5}{3}$$\n   $$\\cot \\alpha = \\frac{x}{y} = \\frac{-4}{3} = -\\frac{4}{3}$$\n3. Menjumlahkan kedua nilai:\n   $$\\csc \\alpha + \\cot \\alpha = \\frac{5}{3} + \\left(-\\frac{4}{3}\\right) = \\frac{1}{3}$$\n\nJadi, nilai dari $\\csc \\alpha + \\cot \\alpha$ adalah $\\frac{1}{3}$.'
    },
    {
      id: 'matwa-perbandingan-trigonometri-16',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'perbandingan-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Bentuk sederhana dari identitas aljabar trigonometri:\n$$\\frac{\\cos x}{1 - \\sin x} - \\frac{\\cos x}{1 + \\sin x}$$\nadalah ...',
      options: [
        { id: 'A', text: '$2\\sin x$' },
        { id: 'B', text: '$2\\cos x$' },
        { id: 'C', text: '$2\\tan x$' },
        { id: 'D', text: '$2\\cot x$' },
        { id: 'E', text: '$2\\sec x$' }
      ],
      correct_answer: 'C',
      hint: 'Samakan penyebut kedua pecahan dengan mengalikannya secara silang, kemudian gunakan identitas Pythagoras $1 - \\sin^2 x = \\cos^2 x$.',
      explanation: 'Langkah-langkah penyederhanaan:\n1. Menyamakan penyebut:\n   $$\\frac{\\cos x(1 + \\sin x) - \\cos x(1 - \\sin x)}{(1 - \\sin x)(1 + \\sin x)}$$\n2. Menjabarkan pembilang dan penyebut:\n   $$\\text{Pembilang} = \\cos x + \\cos x \\sin x - \\cos x + \\cos x \\sin x = 2\\cos x \\sin x$$\n   $$\\text{Penyebut} = 1 - \\sin^2 x = \\cos^2 x$$\n3. Menyederhanakan pecahan:\n   $$\\frac{2\\cos x \\sin x}{\\cos^2 x} = \\frac{2\\sin x}{\\cos x} = 2\\tan x$$\n\nJadi, bentuk sederhananya adalah $2\\tan x$.'
    },
    {
      id: 'matwa-perbandingan-trigonometri-17',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'perbandingan-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Jika diketahui $\\cos 35^\\circ = a$, maka nilai dari $\\sin 55^\\circ + \\cos 145^\\circ$ jika dinyatakan dalam variabel $a$ adalah ...',
      options: [
        { id: 'A', text: '$-2a$' },
        { id: 'B', text: '$-a$' },
        { id: 'C', text: '$0$' },
        { id: 'D', text: '$a$' },
        { id: 'E', text: '$2a$' }
      ],
      correct_answer: 'C',
      hint: 'Gunakan sudut berelasi komplemen $\\sin(90^\\circ - x) = \\cos x$ dan suplemen $\\cos(180^\\circ - x) = -\\cos x$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Mengubah $\\sin 55^\\circ$ ke relasi sudut $35^\\circ$:\n   $$\\sin 55^\\circ = \\sin(90^\\circ - 35^\\circ) = \\cos 35^\\circ = a$$\n2. Mengubah $\\cos 145^\\circ$ ke relasi sudut $35^\\circ$:\n   $$\\cos 145^\\circ = \\cos(180^\\circ - 35^\\circ) = -\\cos 35^\\circ = -a$$\n3. Menjumlahkan kedua suku:\n   $$\\sin 55^\\circ + \\cos 145^\\circ = a + (-a) = 0$$\n\nJadi, nilainya adalah $0$.'
    }
  ],
  'aplikasi-trigonometri': [
    {
      id: 'matwa-aplikasi-trigonometri-11',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'aplikasi-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Pada segitiga $ABC$, diketahui panjang sisi $a = 12\\text{ cm}$, besar sudut $\\angle A = 30^\\circ$, dan besar sudut $\\angle B = 45^\\circ$. Panjang sisi $b$ adalah ...',
      options: [
        { id: 'A', text: '$6\\sqrt{2}\\text{ cm}$' },
        { id: 'B', text: '$12\\sqrt{2}\\text{ cm}$' },
        { id: 'C', text: '$12\\sqrt{3}\\text{ cm}$' },
        { id: 'D', text: '$24\\sqrt{2}\\text{ cm}$' },
        { id: 'E', text: '$24\\sqrt{3}\\text{ cm}$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan Aturan Sinus: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menerapkan Aturan Sinus:\n   $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$$\n2. Substitusi nilai yang diketahui:\n   $$\\frac{12}{\\sin 30^\\circ} = \\frac{b}{\\sin 45^\\circ}$$\n   $$\\frac{12}{\\frac{1}{2}} = \\frac{b}{\\frac{1}{2}\\sqrt{2}}$$\n3. Menyelesaikan nilai $b$:\n   $$24 = \\frac{b}{\\frac{1}{2}\\sqrt{2}}$$\n   $$b = 24 \\times \\frac{1}{2}\\sqrt{2} = 12\\sqrt{2}\\text{ cm}$$\n\nJadi, panjang sisi $b$ adalah $12\\sqrt{2}\\text{ cm}$.'
    },
    {
      id: 'matwa-aplikasi-trigonometri-12',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'aplikasi-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Pada segitiga $PQR$, diketahui panjang sisi $p = 6\\sqrt{2}\\text{ cm}$, sisi $q = 12\\text{ cm}$, dan sudut $\\angle P = 30^\\circ$. Jika $\\angle Q$ merupakan sudut lancip, maka besar sudut $\\angle Q$ adalah ...',
      options: [
        { id: 'A', text: '$30^\\circ$' },
        { id: 'B', text: '$45^\\circ$' },
        { id: 'C', text: '$60^\\circ$' },
        { id: 'D', text: '$75^\\circ$' },
        { id: 'E', text: '$90^\\circ$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan Aturan Sinus: $\\frac{p}{\\sin P} = \\frac{q}{\\sin Q}$ untuk mencari nilai $\\sin Q$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menerapkan Aturan Sinus:\n   $$\\frac{p}{\\sin P} = \\frac{q}{\\sin Q}$$\n   $$\\frac{6\\sqrt{2}}{\\sin 30^\\circ} = \\frac{12}{\\sin Q}$$\n2. Substitusi nilai $\\sin 30^\\circ = \\frac{1}{2}$:\n   $$\\frac{6\\sqrt{2}}{\\frac{1}{2}} = \\frac{12}{\\sin Q}$$\n   $$12\\sqrt{2} = \\frac{12}{\\sin Q}$$\n3. Menentukan $\\sin Q$ dan besar sudut $\\angle Q$:\n   $$\\sin Q = \\frac{12}{12\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{1}{2}\\sqrt{2}$$\n   Karena $\\angle Q$ adalah sudut lancip, maka $\\angle Q = 45^\\circ$.\n\nJadi, besar sudut $\\angle Q$ adalah $45^\\circ$.'
    },
    {
      id: 'matwa-aplikasi-trigonometri-13',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'aplikasi-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Pada segitiga $ABC$, diketahui panjang sisi $b = 8\\text{ cm}$, sisi $c = 5\\text{ cm}$, dan sudut apit $\\angle A = 60^\\circ$. Panjang sisi $a$ adalah ...',
      options: [
        { id: 'A', text: '$6\\text{ cm}$' },
        { id: 'B', text: '$7\\text{ cm}$' },
        { id: 'C', text: '$\\sqrt{59}\\text{ cm}$' },
        { id: 'D', text: '$8\\text{ cm}$' },
        { id: 'E', text: '$\\sqrt{89}\\text{ cm}$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan Aturan Cosinus: $a^2 = b^2 + c^2 - 2bc\\cos A$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menerapkan Aturan Cosinus:\n   $$a^2 = b^2 + c^2 - 2bc\\cos A$$\n2. Substitusi nilai yang diketahui:\n   $$a^2 = 8^2 + 5^2 - 2(8)(5)\\cos 60^\\circ$$\n   $$a^2 = 64 + 25 - 80\\left(\\frac{1}{2}\\right)$$\n   $$a^2 = 89 - 40 = 49$$\n3. Menghitung panjang $a$:\n   $$a = \\sqrt{49} = 7\\text{ cm}$$\n\nJadi, panjang sisi $a$ adalah $7\\text{ cm}$.'
    },
    {
      id: 'matwa-aplikasi-trigonometri-14',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'aplikasi-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Suatu segitiga $KLM$ memiliki panjang sisi $k = 4\\text{ cm}$, $l = 5\\text{ cm}$, dan $m = 6\\text{ cm}$. Nilai $\\cos K$ adalah ...',
      options: [
        { id: 'A', text: '$\\frac{1}{4}$' },
        { id: 'B', text: '$\\frac{3}{8}$' },
        { id: 'C', text: '$\\frac{1}{2}$' },
        { id: 'D', text: '$\\frac{3}{4}$' },
        { id: 'E', text: '$\\frac{5}{6}$' }
      ],
      correct_answer: 'D',
      hint: 'Gunakan Aturan Cosinus yang diisolasi untuk mencari cosinus sudut: $\\cos K = \\frac{l^2 + m^2 - k^2}{2lm}$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Rumus Aturan Cosinus untuk sudut $K$:\n   $$k^2 = l^2 + m^2 - 2lm\\cos K$$\n   $$\\cos K = \\frac{l^2 + m^2 - k^2}{2lm}$$\n2. Substitusi nilai sisi ke rumus:\n   $$\\cos K = \\frac{5^2 + 6^2 - 4^2}{2(5)(6)}$$\n   $$\\cos K = \\frac{25 + 36 - 16}{60} = \\frac{45}{60}$$\n3. Menyederhanakan pecahan:\n   $$\\cos K = \\frac{3}{4}$$\n\nJadi, nilai $\\cos K$ adalah $\\frac{3}{4}$.'
    },
    {
      id: 'matwa-aplikasi-trigonometri-15',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'aplikasi-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Luas segitiga $ABC$ yang memiliki panjang sisi $a = 10\\text{ cm}$, sisi $b = 14\\text{ cm}$, dan besar sudut apit $\\angle C = 30^\\circ$ adalah ...',
      options: [
        { id: 'A', text: '$17{,}5\\text{ cm}^2$' },
        { id: 'B', text: '$35\\text{ cm}^2$' },
        { id: 'C', text: '$35\\sqrt{2}\\text{ cm}^2$' },
        { id: 'D', text: '$35\\sqrt{3}\\text{ cm}^2$' },
        { id: 'E', text: '$70\\text{ cm}^2$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan rumus luas segitiga dengan sinus sudut apit: $L = \\frac{1}{2} a b \\sin C$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Rumus luas segitiga:\n   $$L = \\frac{1}{2} a b \\sin C$$\n2. Substitusi nilai:\n   $$L = \\frac{1}{2} \\times 10 \\times 14 \\times \\sin 30^\\circ$$\n   $$L = 70 \\times \\frac{1}{2} = 35\\text{ cm}^2$$\n\nJadi, luas segitiga $ABC$ adalah $35\\text{ cm}^2$.'
    },
    {
      id: 'matwa-aplikasi-trigonometri-16',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'aplikasi-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dua buah kapal motor $P$ dan $Q$ berangkat bersamaan dari dermaga pelabuhan $O$. Kapal $P$ berlayar dengan arah jurusan tiga angka $030^\\circ$ berkecepatan $30\\text{ knot}$, sedangkan kapal $Q$ berlayar dengan arah jurusan tiga angka $090^\\circ$ berkecepatan $40\\text{ knot}$. Setelah kedua kapal berlayar selama $2\\text{ jam}$, jarak lurus antara kapal $P$ dan kapal $Q$ adalah ...',
      options: [
        { id: 'A', text: '$10\\sqrt{13}\\text{ mil}$' },
        { id: 'B', text: '$20\\sqrt{13}\\text{ mil}$' },
        { id: 'C', text: '$20\\sqrt{37}\\text{ mil}$' },
        { id: 'D', text: '$70\\text{ mil}$' },
        { id: 'E', text: '$100\\text{ mil}$' }
      ],
      correct_answer: 'B',
      hint: 'Hitung sudut apit antar kedua lintasan ($090^\\circ - 030^\\circ = 60^\\circ$) dan jarak tempuh masing-masing kapal selama 2 jam, lalu gunakan Aturan Cosinus.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung jarak tempuh masing-masing kapal:\n   - Kapal $P$: $d_P = 30\\text{ knot} \\times 2\\text{ jam} = 60\\text{ mil}$.\n   - Kapal $Q$: $d_Q = 40\\text{ knot} \\times 2\\text{ jam} = 80\\text{ mil}$.\n2. Menentukan sudut apit $\\theta$ di dermaga $O$:\n   $$\\theta = 090^\\circ - 030^\\circ = 60^\\circ$$\n3. Menghitung jarak $PQ$ dengan Aturan Cosinus:\n   $$PQ^2 = OP^2 + OQ^2 - 2(OP)(OQ)\\cos 60^\\circ$$\n   $$PQ^2 = 60^2 + 80^2 - 2(60)(80)\\left(\\frac{1}{2}\\right)$$\n   $$PQ^2 = 3600 + 6400 - 4800 = 10000 - 4800 = 5200$$\n   $$PQ = \\sqrt{5200} = \\sqrt{400 \\times 13} = 20\\sqrt{13}\\text{ mil}$$\n\nJadi, jarak antara kapal $P$ dan kapal $Q$ adalah $20\\sqrt{13}\\text{ mil}$.'
    },
    {
      id: 'matwa-aplikasi-trigonometri-17',
      chapter_id: 'trigonometri',
      sub_chapter_id: 'aplikasi-trigonometri',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Seorang pengamat dengan tinggi mata $1{,}6\\text{ meter}$ dari permukaan tanah mengamati puncak sebuah tiang bendera dengan sudut elevasi $45^\\circ$. Jika pengamat tersebut berdiri pada jarak horizontal $18{,}4\\text{ meter}$ dari tiang bendera, maka tinggi tiang bendera dari permukaan tanah adalah ...',
      options: [
        { id: 'A', text: '$16{,}8\\text{ meter}$' },
        { id: 'B', text: '$18{,}4\\text{ meter}$' },
        { id: 'C', text: '$20{,}0\\text{ meter}$' },
        { id: 'D', text: '$21{,}6\\text{ meter}$' },
        { id: 'E', text: '$23{,}4\\text{ meter}$' }
      ],
      correct_answer: 'C',
      hint: 'Tinggi objek dihitung dari $h = h_{\\text{mata}} + x \\cdot \\tan \\alpha$, dengan $\\alpha$ adalah sudut elevasi.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung ketinggian tiang di atas tinggi mata pengamat ($y$):\n   $$\\tan 45^\\circ = \\frac{y}{x} = \\frac{y}{18{,}4}$$\n   Karena $\\tan 45^\\circ = 1$, maka:\n   $$y = 18{,}4 \\times 1 = 18{,}4\\text{ meter}$$\n2. Menghitung tinggi total tiang bendera dari permukaan tanah:\n   $$H = y + h_{\\text{mata}} = 18{,}4 + 1{,}6 = 20{,}0\\text{ meter}$$\n\nJadi, tinggi tiang bendera tersebut adalah $20{,}0\\text{ meter}$.'
    }
  ],
  'penyajian-data': [
    {
      id: 'matwa-penyajian-data-11',
      chapter_id: 'statistika',
      sub_chapter_id: 'penyajian-data',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diagram lingkaran menyajikan data pemilihan kegiatan ekstrakurikuler dari $360\\text{ siswa}$ di suatu SMA: Futsal sebesar $100^\\circ$, Basket sebesar $80^\\circ$, Pramuka sebesar $90^\\circ$, Robotik sebesar $50^\\circ$, dan sisanya memilih Seni. Banyak siswa yang memilih ekstrakurikuler Seni adalah ...',
      options: [
        { id: 'A', text: '$30\\text{ siswa}$' },
        { id: 'B', text: '$36\\text{ siswa}$' },
        { id: 'C', text: '$40\\text{ siswa}$' },
        { id: 'D', text: '$45\\text{ siswa}$' },
        { id: 'E', text: '$50\\text{ siswa}$' }
      ],
      correct_answer: 'C',
      hint: 'Total sudut satu lingkaran penuh adalah $360^\\circ$. Cari sudut sektor Seni terlebih dahulu, lalu hitung jumlah siswanya.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung besar sudut sektor Seni:\n   $$\\theta_{\\text{Seni}} = 360^\\circ - (100^\\circ + 80^\\circ + 90^\\circ + 50^\\circ) = 360^\\circ - 320^\\circ = 40^\\circ$$\n2. Menghitung banyak siswa yang memilih Seni:\n   $$\\text{Banyak siswa} = \\frac{\\theta_{\\text{Seni}}}{360^\\circ} \\times 360 = \\frac{40^\\circ}{360^\\circ} \\times 360 = 40\\text{ siswa}$$\n\nJadi, banyak siswa yang memilih ekstrakurikuler Seni adalah $40\\text{ siswa}$.'
    },
    {
      id: 'matwa-penyajian-data-12',
      chapter_id: 'statistika',
      sub_chapter_id: 'penyajian-data',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Suatu tabel distribusi frekuensi memiliki kelas-kelas interval: $21 - 25$, $26 - 30$, $31 - 35$, $36 - 40$, dan $41 - 45$. Tepi bawah kelas ketiga dan panjang kelas interval tersebut berturut-turut adalah ...',
      options: [
        { id: 'A', text: '$30{,}5$ dan $4$' },
        { id: 'B', text: '$30{,}5$ dan $5$' },
        { id: 'C', text: '$31{,}0$ dan $5$' },
        { id: 'D', text: '$31{,}5$ dan $4$' },
        { id: 'E', text: '$31{,}5$ dan $5$' }
      ],
      correct_answer: 'B',
      hint: 'Tepi bawah adalah batas bawah dikurangi $0{,}5$. Panjang kelas dihitung dari selisih tepi atas dan tepi bawah kelas yang bersangkutan.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Kelas interval ketiga adalah $31 - 35$:\n   - Batas bawah ($B_b$) $= 31$.\n   - Batas atas ($B_a$) $= 35$.\n2. Menghitung tepi bawah kelas ketiga:\n   $$T_b = B_b - 0{,}5 = 31 - 0{,}5 = 30{,}5$$\n3. Menghitung panjang kelas ($c$):\n   $$c = T_a - T_b = 35{,}5 - 30{,}5 = 5$$\n   (Atau $c = 35 - 31 + 1 = 5$).\n\nJadi, tepi bawah dan panjang kelasnya berturut-turut adalah $30{,}5$ dan $5$.'
    },
    {
      id: 'matwa-penyajian-data-13',
      chapter_id: 'statistika',
      sub_chapter_id: 'penyajian-data',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Perhatikan data distribusi frekuensi kumulatif "kurang dari" nilai tes berikut:\n- Nilai $\\le 49{,}5$: frekuensi kumulatif $= 4$\n- Nilai $\\le 59{,}5$: frekuensi kumulatif $= 11$\n- Nilai $\\le 69{,}5$: frekuensi kumulatif $= 25$\n- Nilai $\\le 79{,}5$: frekuensi kumulatif $= 42$\n- Nilai $\\le 89{,}5$: frekuensi kumulatif $= 50$\nBanyak siswa yang memperoleh nilai pada interval kelas $70 - 79$ adalah ...',
      options: [
        { id: 'A', text: '$8\\text{ siswa}$' },
        { id: 'B', text: '$14\\text{ siswa}$' },
        { id: 'C', text: '$17\\text{ siswa}$' },
        { id: 'D', text: '$25\\text{ siswa}$' },
        { id: 'E', text: '$42\\text{ siswa}$' }
      ],
      correct_answer: 'C',
      hint: 'Frekuensi kelas suatu interval sama dengan selisih frekuensi kumulatif tepi atasnya dengan frekuensi kumulatif tepi bawahnya.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Interval kelas $70 - 79$ memiliki:\n   - Tepi bawah $= 69{,}5$\n   - Tepi atas $= 79{,}5$\n2. Menghitung frekuensi kelas interval tersebut:\n   $$f = F_k(\\le 79{,}5) - F_k(\\le 69{,}5)$$\n   $$f = 42 - 25 = 17\\text{ siswa}$$\n\nJadi, banyak siswa yang memperoleh nilai pada interval $70 - 79$ adalah $17\\text{ siswa}$.'
    },
    {
      id: 'matwa-penyajian-data-14',
      chapter_id: 'statistika',
      sub_chapter_id: 'penyajian-data',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Jika suatu kelas interval data memiliki batas bawah $50$ dan batas atas $59$, maka titik tengah ($x_i$) dan tepi atas ($T_a$) kelas interval tersebut berturut-turut adalah ...',
      options: [
        { id: 'A', text: '$54{,}0$ dan $59{,}0$' },
        { id: 'B', text: '$54{,}5$ dan $59{,}0$' },
        { id: 'C', text: '$54{,}5$ dan $59{,}5$' },
        { id: 'D', text: '$55{,}0$ dan $59{,}5$' },
        { id: 'E', text: '$55{,}0$ dan $60{,}0$' }
      ],
      correct_answer: 'C',
      hint: 'Titik tengah adalah rata-rata dari batas bawah dan batas atas: $x_i = \\frac{B_b + B_a}{2}$. Tepi atas adalah batas atas ditambah $0{,}5$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung titik tengah ($x_i$):\n   $$x_i = \\frac{B_b + B_a}{2} = \\frac{50 + 59}{2} = \\frac{109}{2} = 54{,}5$$\n2. Menghitung tepi atas ($T_a$):\n   $$T_a = B_a + 0{,}5 = 59 + 0{,}5 = 59{,}5$$\n\nJadi, titik tengah dan tepi atas berturut-turut adalah $54{,}5$ dan $59{,}5$.'
    },
    {
      id: 'matwa-penyajian-data-15',
      chapter_id: 'statistika',
      sub_chapter_id: 'penyajian-data',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam suatu survei kepuasan pelanggan terhadap $200\\text{ responden}$, diperoleh data: kategori Sangat Puas sebesar $35\\%$, Puas sebesar $45\\%$, Cukup sebesar $12\\%$, dan sisanya menyatakan Kurang Puas. Banyak responden yang menyatakan Kurang Puas adalah ...',
      options: [
        { id: 'A', text: '$8\\text{ orang}$' },
        { id: 'B', text: '$12\\text{ orang}$' },
        { id: 'C', text: '$16\\text{ orang}$' },
        { id: 'D', text: '$20\\text{ orang}$' },
        { id: 'E', text: '$24\\text{ orang}$' }
      ],
      correct_answer: 'C',
      hint: 'Total persentase adalah $100\\%$. Tentukan persentase kategori Kurang Puas, lalu kalikan dengan total $200\\text{ responden}$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung persentase kategori Kurang Puas:\n   $$\\% = 100\\% - (35\\% + 45\\% + 12\\%) = 100\\% - 92\\% = 8\\%$$\n2. Menghitung jumlah orang:\n   $$\\text{Banyak responden} = \\frac{8}{100} \\times 200 = 16\\text{ orang}$$\n\nJadi, banyak responden yang menyatakan Kurang Puas adalah $16\\text{ orang}$.'
    },
    {
      id: 'matwa-penyajian-data-16',
      chapter_id: 'statistika',
      sub_chapter_id: 'penyajian-data',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Pada sebuah histogram pengukuran berat badan sekelompok balita, batang frekuensi untuk kelas interval $11 - 15\\text{ kg}$ memiliki tinggi $12$. Jika total seluruh balita yang diukur adalah $60\\text{ balita}$, maka persentase balita yang berada pada kelompok berat badan tersebut adalah ...',
      options: [
        { id: 'A', text: '$12\\%$' },
        { id: 'B', text: '$15\\%$' },
        { id: 'C', text: '$20\\%$' },
        { id: 'D', text: '$24\\%$' },
        { id: 'E', text: '$25\\%$' }
      ],
      correct_answer: 'C',
      hint: 'Persentase dihitung dengan membagi frekuensi kelas dengan frekuensi total dikalikan $100\\%$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Diketahui frekuensi kelas $11 - 15\\text{ kg}$ adalah $f = 12$.\n2. Total frekuensi data $N = 60$.\n3. Menghitung persentase:\n   $$\\text{Persentase} = \\frac{12}{60} \\times 100\\% = \\frac{1}{5} \\times 100\\% = 20\\%$$\n\nJadi, persentasenya adalah $20\\%$.'
    },
    {
      id: 'matwa-penyajian-data-17',
      chapter_id: 'statistika',
      sub_chapter_id: 'penyajian-data',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Data produksi gabah kering (dalam satuan ton) dari $5\\text{ desa}$ adalah sebagai berikut: Desa A $= 120\\text{ ton}$, Desa B $= 150\\text{ ton}$, Desa C $= 180\\text{ ton}$, Desa D $= 90\\text{ ton}$, dan Desa E $= 210\\text{ ton}$. Jika data tersebut disajikan ke dalam diagram lingkaran, besar sudut sektor untuk Desa C adalah ...',
      options: [
        { id: 'A', text: '$72{,}0^\\circ$' },
        { id: 'B', text: '$86{,}4^\\circ$' },
        { id: 'C', text: '$90{,}0^\\circ$' },
        { id: 'D', text: '$100{,}8^\\circ$' },
        { id: 'E', text: '$108{,}0^\\circ$' }
      ],
      correct_answer: 'B',
      hint: 'Hitung total ton produksi seluruh desa, kemudian gunakan rumus sudut sektor: $\\theta = \\frac{\\text{produksi desa}}{\\text{total produksi}} \\times 360^\\circ$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung total produksi seluruh desa:\n   $$\\text{Total} = 120 + 150 + 180 + 90 + 210 = 750\\text{ ton}$$\n2. Menghitung besar sudut sektor Desa C:\n   $$\\theta_C = \\frac{180}{750} \\times 360^\\circ = \\frac{6}{25} \\times 360^\\circ = \\frac{2160^\\circ}{25} = 86{,}4^\\circ$$\n\nJadi, besar sudut sektor untuk Desa C adalah $86{,}4^\\circ$.'
    }
  ],
  'statistika-data-tunggal': [
    {
      id: 'matwa-statistika-data-tunggal-11',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Nilai rata-rata dari delapan data bilangan: $7, 8, 5, 6, x, 9, 7, 10$ adalah $7{,}5$. Nilai dari bilangan $x$ tersebut adalah ...',
      options: [
        { id: 'A', text: '$6$' },
        { id: 'B', text: '$7$' },
        { id: 'C', text: '$8$' },
        { id: 'D', text: '$9$' },
        { id: 'E', text: '$10$' }
      ],
      correct_answer: 'C',
      hint: 'Gunakan hubungan: $\\sum x_i = n \\cdot \\bar{x}$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung jumlah seluruh nilai data:\n   $$\\sum x_i = n \\times \\bar{x} = 8 \\times 7{,}5 = 60$$\n2. Menjumlahkan data yang telah diketahui:\n   $$7 + 8 + 5 + 6 + 9 + 7 + 10 = 52$$\n3. Menentukan nilai $x$:\n   $$52 + x = 60$$\n   $$x = 60 - 52 = 8$$\n\nJadi, nilai bilangan $x$ adalah $8$.'
    },
    {
      id: 'matwa-statistika-data-tunggal-12',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Median dari kumpulan data nilai berikut:\n$$14, 18, 12, 15, 20, 16, 19, 13, 17$$\nadalah ...',
      options: [
        { id: 'A', text: '$15$' },
        { id: 'B', text: '$15{,}5$' },
        { id: 'C', text: '$16$' },
        { id: 'D', text: '$16{,}5$' },
        { id: 'E', text: '$17$' }
      ],
      correct_answer: 'C',
      hint: 'Urutkan data dari nilai terkecil ke terbesar terlebih dahulu, kemudian ambil data yang berada tepat di posisi tengah.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Mengurutkan data (banyak data $n = 9$):\n   $$12, 13, 14, 15, 16, 17, 18, 19, 20$$\n2. Menentukan letak median data ganjil:\n   $$\\text{Letak} = \\frac{n + 1}{2} = \\frac{9 + 1}{2} = 5$$\n3. Mengambil nilai data ke-5:\n   $$x_5 = 16$$\n\nJadi, median dari data tersebut adalah $16$.'
    },
    {
      id: 'matwa-statistika-data-tunggal-13',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan kumpulan data nilai ulangan:\n$$6, 3, 8, 5, 9, 4, 7, 10, 6, 8, 7, 8$$\nModus dan jangkauan (range) dari kumpulan data tersebut berturut-turut adalah ...',
      options: [
        { id: 'A', text: '$7$ dan $6$' },
        { id: 'B', text: '$7$ dan $7$' },
        { id: 'C', text: '$8$ dan $6$' },
        { id: 'D', text: '$8$ dan $7$' },
        { id: 'E', text: '$8$ dan $8$' }
      ],
      correct_answer: 'D',
      hint: 'Modus adalah nilai dengan frekuensi kemunculan terbanyak. Jangkauan adalah selisih antara nilai maksimum dan nilai minimum.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung frekuensi setiap datum:\n   - $3$: muncul 1 kali\n   - $4$: muncul 1 kali\n   - $5$: muncul 1 kali\n   - $6$: muncul 2 kali\n   - $7$: muncul 2 kali\n   - $8$: muncul 3 kali (terbanyak)\n   - $9$: muncul 1 kali\n   - $10$: muncul 1 kali\n   Maka modus $= 8$.\n2. Menghitung jangkauan ($R$):\n   $$R = x_{\\max} - x_{\\min} = 10 - 3 = 7$$\n\nJadi, modus dan jangkauannya berturut-turut adalah $8$ dan $7$.'
    },
    {
      id: 'matwa-statistika-data-tunggal-14',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Diberikan data terurut sebagai berikut:\n$$4, 5, 5, 7, 7, 8, 8, 9, 11, 12, 14$$\nNilai jangkauan antarkuartil ($Q_3 - Q_1$) dari data tersebut adalah ...',
      options: [
        { id: 'A', text: '$4$' },
        { id: 'B', text: '$5$' },
        { id: 'C', text: '$6$' },
        { id: 'D', text: '$7$' },
        { id: 'E', text: '$8$' }
      ],
      correct_answer: 'C',
      hint: 'Tentukan kuartil tengah ($Q_2$), lalu tentukan kuartil bawah ($Q_1$) dari paruh bawah dan kuartil atas ($Q_3$) dari paruh atas.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Banyak data $n = 11$.\n   - Median ($Q_2$) berada pada data ke-6, yaitu $8$.\n2. Paruh bawah data (di sebelah kiri median):\n   $$4, 5, 5, 7, 7$$\n   Nilai tengahnya adalah data ke-3 dari paruh bawah: $Q_1 = 5$.\n3. Paruh atas data (di sebelah kanan median):\n   $$8, 9, 11, 12, 14$$\n   Nilai tengahnya adalah data ke-3 dari paruh atas: $Q_3 = 11$.\n4. Menghitung jangkauan antarkuartil:\n   $$QR = Q_3 - Q_1 = 11 - 5 = 6$$\n\nJadi, jangkauan antarkuartilnya adalah $6$.'
    },
    {
      id: 'matwa-statistika-data-tunggal-15',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Simpangan rata-rata (mean deviation) dari lima data pengamatan:\n$$4, 6, 8, 5, 7$$\nadalah ...',
      options: [
        { id: 'A', text: '$1{,}0$' },
        { id: 'B', text: '$1{,}2$' },
        { id: 'C', text: '$1{,}4$' },
        { id: 'D', text: '$1{,}5$' },
        { id: 'E', text: '$2{,}0$' }
      ],
      correct_answer: 'B',
      hint: 'Hitung rata-rata $\\bar{x}$, lalu cari rata-rata dari nilai mutlak selisih setiap data dengan $\\bar{x}$: $SR = \\frac{\\sum |x_i - \\bar{x}|}{n}$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung rata-rata (mean):\n   $$\\bar{x} = \\frac{4 + 6 + 8 + 5 + 7}{5} = \\frac{30}{5} = 6$$\n2. Menghitung selisih mutlak setiap data terhadap rata-rata $|x_i - \\bar{x}|$:\n   - $|4 - 6| = 2$\n   - $|6 - 6| = 0$\n   - $|8 - 6| = 2$\n   - $|5 - 6| = 1$\n   - $|7 - 6| = 1$\n3. Menjumlahkan dan membagi dengan banyak data:\n   $$\\sum |x_i - \\bar{x}| = 2 + 0 + 2 + 1 + 1 = 6$$\n   $$SR = \\frac{6}{5} = 1{,}2$$\n\nJadi, simpangan rata-ratanya adalah $1{,}2$.'
    },
    {
      id: 'matwa-statistika-data-tunggal-16',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Ragam (varians) dari kumpulan data bilangan: $3, 4, 5, 6, 7$ adalah ...',
      options: [
        { id: 'A', text: '$1$' },
        { id: 'B', text: '$\\sqrt{2}$' },
        { id: 'C', text: '$2$' },
        { id: 'D', text: '$2{,}5$' },
        { id: 'E', text: '$4$' }
      ],
      correct_answer: 'C',
      hint: 'Ragam dihitung dengan rumus $S^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n}$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung rata-rata:\n   $$\\bar{x} = \\frac{3 + 4 + 5 + 6 + 7}{5} = \\frac{25}{5} = 5$$\n2. Menghitung kuadrat deviasi $(x_i - \\bar{x})^2$:\n   - $(3 - 5)^2 = (-2)^2 = 4$\n   - $(4 - 5)^2 = (-1)^2 = 1$\n   - $(5 - 5)^2 = 0^2 = 0$\n   - $(6 - 5)^2 = 1^2 = 1$\n   - $(7 - 5)^2 = 2^2 = 4$\n3. Menghitung ragam (varians):\n   $$S^2 = \\frac{4 + 1 + 0 + 1 + 4}{5} = \\frac{10}{5} = 2$$\n\nJadi, ragam dari kumpulan data tersebut adalah $2$.'
    },
    {
      id: 'matwa-statistika-data-tunggal-17',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Nilai rata-rata ulangan matematika dari $18\\text{ siswa putra}$ adalah $74$, sedangkan nilai rata-rata dari $12\\text{ siswa putri}$ adalah $79$. Nilai rata-rata seluruh siswa di kelas tersebut adalah ...',
      options: [
        { id: 'A', text: '$75{,}0$' },
        { id: 'B', text: '$75{,}5$' },
        { id: 'C', text: '$76{,}0$' },
        { id: 'D', text: '$76{,}5$' },
        { id: 'E', text: '$77{,}0$' }
      ],
      correct_answer: 'C',
      hint: 'Gunakan rumus rata-rata gabungan: $\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung jumlah nilai siswa putra:\n   $$\\sum x_1 = 18 \\times 74 = 1332$$\n2. Menghitung jumlah nilai siswa putri:\n   $$\\sum x_2 = 12 \\times 79 = 948$$\n3. Menghitung rata-rata gabungan:\n   $$\\bar{x}_{\\text{gab}} = \\frac{1332 + 948}{18 + 12} = \\frac{2280}{30} = 76{,}0$$\n\nJadi, nilai rata-rata seluruh siswa di kelas tersebut adalah $76{,}0$.'
    }
  ],
  'statistika-data-kelompok': [
    {
      id: 'matwa-statistika-data-kelompok-11',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-kelompok',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Tabel berikut menyajikan data distribusi berat badan (dalam $\\text{kg}$) dari $40\\text{ siswa}$:\n\n$$\\begin{array}{|c|c|}\n\\hline\n\\textbf{Berat Badan (kg)} & \\textbf{Frekuensi} \\\\\n\\hline\n41 - 45 & 6 \\\\\n46 - 50 & 10 \\\\\n51 - 55 & 14 \\\\\n56 - 60 & 7 \\\\\n61 - 65 & 3 \\\\\n\\hline\n\\end{array}$$\n\nNilai rata-rata (mean) dari data berat badan tersebut adalah ...',
      options: [
        { id: 'A', text: '$50{,}875\\text{ kg}$' },
        { id: 'B', text: '$51{,}250\\text{ kg}$' },
        { id: 'C', text: '$51{,}875\\text{ kg}$' },
        { id: 'D', text: '$52{,}125\\text{ kg}$' },
        { id: 'E', text: '$52{,}500\\text{ kg}$' }
      ],
      correct_answer: 'C',
      hint: 'Tentukan titik tengah ($x_i$) untuk setiap kelas interval, lalu gunakan rumus $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menentukan titik tengah ($x_i$) dan perkalian $f_i x_i$:\n   - Kelas $41 - 45$: $x_1 = 43$, $f_1 x_1 = 6 \\times 43 = 258$\n   - Kelas $46 - 50$: $x_2 = 48$, $f_2 x_2 = 10 \\times 48 = 480$\n   - Kelas $51 - 55$: $x_3 = 53$, $f_3 x_3 = 14 \\times 53 = 742$\n   - Kelas $56 - 60$: $x_4 = 58$, $f_4 x_4 = 7 \\times 58 = 406$\n   - Kelas $61 - 65$: $x_5 = 63$, $f_5 x_5 = 3 \\times 63 = 189$\n2. Menjumlahkan $\\sum f_i x_i$:\n   $$\\sum f_i x_i = 258 + 480 + 742 + 406 + 189 = 2075$$\n3. Menghitung mean:\n   $$\\bar{x} = \\frac{2075}{40} = 51{,}875\\text{ kg}$$\n\nJadi, rata-rata berat badan siswa adalah $51{,}875\\text{ kg}$.'
    },
    {
      id: 'matwa-statistika-data-kelompok-12',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-kelompok',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Tabel berikut menunjukkan hasil tes seleksi masuk suatu lembaga:\n\n$$\\begin{array}{|c|c|}\n\\hline\n\\textbf{Skor Ujian} & \\textbf{Frekuensi} \\\\\n\\hline\n50 - 59 & 5 \\\\\n60 - 69 & 12 \\\\\n70 - 79 & 18 \\\\\n80 - 89 & 10 \\\\\n90 - 99 & 5 \\\\\n\\hline\n\\end{array}$$\n\nMedian dari data skor ujian tersebut adalah ...',
      options: [
        { id: 'A', text: '$72{,}44$' },
        { id: 'B', text: '$73{,}50$' },
        { id: 'C', text: '$73{,}94$' },
        { id: 'D', text: '$74{,}50$' },
        { id: 'E', text: '$75{,}22$' }
      ],
      correct_answer: 'C',
      hint: 'Letak median berada pada $\\frac{1}{2}n = 25$. Gunakan rumus $Me = T_b + \\left(\\frac{\\frac{1}{2}n - F_k}{f_m}\\right) \\cdot c$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Total frekuensi $n = 5 + 12 + 18 + 10 + 5 = 50$.\n   - Letak median $= \\frac{1}{2} \\times 50 = 25$.\n2. Menentukan frekuensi kumulatif ($F_k$):\n   - $\\le 59$: $5$\n   - $\\le 69$: $17$\n   - $\\le 79$: $35$ (kelas median adalah $70 - 79$)\n3. Komponen rumus median:\n   - Tepi bawah kelas median $T_b = 70 - 0{,}5 = 69{,}5$\n   - Frekuensi kumulatif sebelum kelas median $F_k = 17$\n   - Frekuensi kelas median $f_m = 18$\n   - Panjang kelas $c = 10$\n4. Menghitung nilai median:\n   $$Me = 69{,}5 + \\left(\\frac{25 - 17}{18}\\right) \\times 10 = 69{,}5 + \\frac{8}{18} \\times 10 = 69{,}5 + \\frac{80}{18} = 69{,}5 + 4{,}44 = 73{,}94$$\n\nJadi, median dari skor ujian tersebut adalah $73{,}94$.'
    },
    {
      id: 'matwa-statistika-data-kelompok-13',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-kelompok',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Tabel berikut menyajikan waktu tempuh (dalam menit) sejumlah kendaraan:\n\n$$\\begin{array}{|c|c|}\n\\hline\n\\textbf{Waktu (menit)} & \\textbf{Frekuensi} \\\\\n\\hline\n20 - 24 & 4 \\\\\n25 - 29 & 8 \\\\\n30 - 34 & 14 \\\\\n35 - 39 & 10 \\\\\n40 - 44 & 4 \\\\\n\\hline\n\\end{array}$$\n\nModus dari waktu tempuh kendaraan tersebut adalah ...',
      options: [
        { id: 'A', text: '$31{,}5\\text{ menit}$' },
        { id: 'B', text: '$32{,}0\\text{ menit}$' },
        { id: 'C', text: '$32{,}5\\text{ menit}$' },
        { id: 'D', text: '$33{,}0\\text{ menit}$' },
        { id: 'E', text: '$33{,}5\\text{ menit}$' }
      ],
      correct_answer: 'C',
      hint: 'Kelas modus adalah kelas dengan frekuensi terbanyak ($30 - 34$). Gunakan rumus $Mo = T_b + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot c$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menentukan kelas modus:\n   - Frekuensi tertinggi adalah $14$, yaitu pada interval $30 - 34$.\n2. Menentukan komponen-komponen:\n   - Tepi bawah $T_b = 30 - 0{,}5 = 29{,}5$.\n   - Selisih dengan frekuensi kelas sebelumnya $d_1 = 14 - 8 = 6$.\n   - Selisih dengan frekuensi kelas sesudahnya $d_2 = 14 - 10 = 4$.\n   - Panjang kelas $c = 34 - 30 + 1 = 5$.\n3. Menghitung nilai modus:\n   $$Mo = T_b + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot c$$\n   $$Mo = 29{,}5 + \\left(\\frac{6}{6 + 4}\\right) \\times 5 = 29{,}5 + \\left(\\frac{6}{10}\\right) \\times 5 = 29{,}5 + 3 = 32{,}5\\text{ menit}$$\n\nJadi, modus waktu tempuh kendaraan adalah $32{,}5\\text{ menit}$.'
    },
    {
      id: 'matwa-statistika-data-kelompok-14',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-kelompok',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Perhatikan tabel distribusi frekuensi berikut:\n\n$$\\begin{array}{|c|c|}\n\\hline\n\\textbf{Skor} & \\textbf{Frekuensi} \\\\\n\\hline\n10 - 19 & 6 \\\\\n20 - 29 & 10 \\\\\n30 - 39 & 16 \\\\\n40 - 49 & 8 \\\\\n\\hline\n\\end{array}$$\n\nKuartil bawah ($Q_1$) dari data skor tersebut adalah ...',
      options: [
        { id: 'A', text: '$21{,}5$' },
        { id: 'B', text: '$22{,}0$' },
        { id: 'C', text: '$23{,}0$' },
        { id: 'D', text: '$23{,}5$' },
        { id: 'E', text: '$24{,}5$' }
      ],
      correct_answer: 'D',
      hint: 'Letak kuartil bawah berada pada datum ke-$\\frac{1}{4}n$. Gunakan rumus $Q_1 = T_b + \\left(\\frac{\\frac{1}{4}n - F_k}{f_{Q1}}\\right) \\cdot c$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Total data $n = 6 + 10 + 16 + 8 = 40$.\n   - Letak $Q_1 = \\frac{1}{4} \\times 40 = 10$.\n2. Menentukan frekuensi kumulatif:\n   - Kelas $10 - 19$: $F_k = 6$\n   - Kelas $20 - 29$: $F_k = 16$ (memuat datum ke-10, sehingga kelas $Q_1$ adalah $20 - 29$)\n3. Menentukan parameter rumus:\n   - $T_b = 20 - 0{,}5 = 19{,}5$\n   - $F_k = 6$ (frekuensi kumulatif sebelum kelas $Q_1$)\n   - $f_{Q1} = 10$ (frekuensi kelas $Q_1$)\n   - $c = 10$\n4. Menghitung $Q_1$:\n   $$Q_1 = 19{,}5 + \\left(\\frac{10 - 6}{10}\\right) \\times 10 = 19{,}5 + 4 = 23{,}5$$\n\nJadi, nilai kuartil bawah ($Q_1$) adalah $23{,}5$.'
    },
    {
      id: 'matwa-statistika-data-kelompok-15',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-kelompok',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Berdasarkan data pada tabel soal sebelumnya:\n\n$$\\begin{array}{|c|c|}\n\\hline\n\\textbf{Skor} & \\textbf{Frekuensi} \\\\\n\\hline\n10 - 19 & 6 \\\\\n20 - 29 & 10 \\\\\n30 - 39 & 16 \\\\\n40 - 49 & 8 \\\\\n\\hline\n\\end{array}$$\n\nNilai kuartil atas ($Q_3$) dari data skor tersebut adalah ...',
      options: [
        { id: 'A', text: '$36{,}50$' },
        { id: 'B', text: '$37{,}25$' },
        { id: 'C', text: '$38{,}25$' },
        { id: 'D', text: '$38{,}75$' },
        { id: 'E', text: '$39{,}50$' }
      ],
      correct_answer: 'C',
      hint: 'Letak kuartil atas adalah pada datum ke-$\\frac{3}{4}n = 30$. Gunakan rumus $Q_3 = T_b + \\left(\\frac{\\frac{3}{4}n - F_k}{f_{Q3}}\\right) \\cdot c$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Total data $n = 40$.\n   - Letak $Q_3 = \\frac{3}{4} \\times 40 = 30$.\n2. Menentukan frekuensi kumulatif:\n   - Kelas $10 - 19$: $F_k = 6$\n   - Kelas $20 - 29$: $F_k = 16$\n   - Kelas $30 - 39$: $F_k = 32$ (memuat datum ke-30, sehingga kelas $Q_3$ adalah $30 - 39$)\n3. Menentukan parameter rumus:\n   - $T_b = 30 - 0{,}5 = 29{,}5$\n   - $F_k = 16$\n   - $f_{Q3} = 16$\n   - $c = 10$\n4. Menghitung $Q_3$:\n   $$Q_3 = 29{,}5 + \\left(\\frac{30 - 16}{16}\\right) \\times 10 = 29{,}5 + \\frac{14}{16} \\times 10 = 29{,}5 + 8{,}75 = 38{,}25$$\n\nJadi, nilai kuartil atas ($Q_3$) adalah $38{,}25$.'
    },
    {
      id: 'matwa-statistika-data-kelompok-16',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-kelompok',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam menghitung mean data kelompok menggunakan rata-rata sementara, seorang siswa menetapkan rata-rata sementara $x_0 = 55$ pada data dengan panjang kelas $c = 10$ dan total frekuensi $\\sum f_i = 50$. Jika diperoleh hasil perkalian frekuensi dengan kode penyimpangan $\\sum f_i u_i = 15$, maka nilai rata-rata sebenarnya (mean) adalah ...',
      options: [
        { id: 'A', text: '$56$' },
        { id: 'B', text: '$57$' },
        { id: 'C', text: '$58$' },
        { id: 'D', text: '$59$' },
        { id: 'E', text: '$60$' }
      ],
      correct_answer: 'C',
      hint: 'Gunakan metode coding: $\\bar{x} = x_0 + \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) \\cdot c$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Rumus mean dengan metode coding (pengkodean):\n   $$\\bar{x} = x_0 + \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) \\cdot c$$\n2. Substitusi nilai-nilai yang diketahui:\n   $$\\bar{x} = 55 + \\left(\\frac{15}{50}\\right) \\times 10$$\n   $$\\bar{x} = 55 + \\frac{150}{50} = 55 + 3 = 58$$\n\nJadi, nilai rata-rata sebenarnya adalah $58$.'
    },
    {
      id: 'matwa-statistika-data-kelompok-17',
      chapter_id: 'statistika',
      sub_chapter_id: 'statistika-data-kelompok',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Tabel berikut menunjukkan distribusi nilai ujian dari $50\\text{ siswa}$:\n\n$$\\begin{array}{|c|c|}\n\\hline\n\\textbf{Nilai} & \\textbf{Frekuensi} \\\\\n\\hline\n31 - 40 & 7 \\\\\n41 - 50 & 13 \\\\\n51 - 60 & 15 \\\\\n61 - 70 & 10 \\\\\n71 - 80 & 5 \\\\\n\\hline\n\\end{array}$$\n\nNilai desil ke-6 ($D_6$) dari data distribusi frekuensi tersebut adalah ...',
      options: [
        { id: 'A', text: '$55{,}50$' },
        { id: 'B', text: '$56{,}17$' },
        { id: 'C', text: '$57{,}17$' },
        { id: 'D', text: '$58{,}50$' },
        { id: 'E', text: '$59{,}17$' }
      ],
      correct_answer: 'C',
      hint: 'Letak desil ke-6 adalah pada datum ke-$\\frac{6}{10}n$. Gunakan rumus $D_6 = T_b + \\left(\\frac{\\frac{6}{10}n - F_k}{f}\\right) \\cdot c$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Total data $n = 50$.\n   - Letak $D_6 = \\frac{6}{10} \\times 50 = 30$.\n2. Menentukan frekuensi kumulatif ($F_k$):\n   - $\\le 40$: $7$\n   - $\\le 50$: $20$\n   - $\\le 60$: $35$ (memuat datum ke-30, sehingga kelas $D_6$ adalah $51 - 60$)\n3. Menentukan parameter:\n   - $T_b = 51 - 0{,}5 = 50{,}5$\n   - $F_k = 20$\n   - $f = 15$\n   - $c = 10$\n4. Menghitung $D_6$:\n   $$D_6 = 50{,}5 + \\left(\\frac{30 - 20}{15}\\right) \\times 10 = 50{,}5 + \\frac{10}{15} \\times 10 = 50{,}5 + 6{,}67 = 57{,}17$$\n\nJadi, nilai desil ke-6 ($D_6$) adalah $57{,}17$.'
    }
  ]
};

console.log('🔍 MEMVALIDASI SEMUA RUMUS KATEX DAN SCHEMA PERTANYAAN BATCH 4A...\n');

for (const [subChapter, newQuestions] of Object.entries(batch4aData)) {
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

console.log('\n✨ SELURUH PERTANYAAN BATCH 4A SELESAI DITULISKAN DENGAN SUKSES!');
