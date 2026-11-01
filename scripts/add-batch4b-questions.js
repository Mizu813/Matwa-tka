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

// BATCH 4B QUESTIONS DATA (Bab 8: Pencacahan & Peluang)
const batch4bData = {
  'aturan-pencacahan': [
    {
      id: 'matwa-aturan-pencacahan-11',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'aturan-pencacahan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dari angka-angka $1, 2, 3, 5, 6, 7, 8$ akan disusun bilangan ganjil yang terdiri atas $3\\text{ digit}$ berbeda. Banyak bilangan ganjil yang dapat dibentuk adalah ...',
      options: [
        { id: 'A', text: '$80$' },
        { id: 'B', text: '$100$' },
        { id: 'C', text: '$120$' },
        { id: 'D', text: '$140$' },
        { id: 'E', text: '$210$' }
      ],
      correct_answer: 'C',
      hint: 'Bilangan ganjil ditentukan oleh digit satuannya (harus memilih dari angka ganjil: $1, 3, 5, 7$). Gunakan aturan pengisian tempat (filling slots).',
      explanation: 'Langkah-langkah penyelesaian:\n1. Mengidentifikasi angka-angka yang tersedia:\n   - Kumpulan angka: $\\{1, 2, 3, 5, 6, 7, 8\\}$ (total ada $7$ angka).\n   - Angka ganjil: $\\{1, 3, 5, 7\\}$ (ada $4$ pilihan untuk digit satuan).\n2. Menerapkan aturan pengisian tempat $3$ kotak $[\\text{Ratusan}][\\text{Puluhan}][\\text{Satuan}]$:\n   - Kotak Satuan: dapat diisi oleh salah satu dari $4$ angka ganjil ($4$ cara).\n   - Kotak Ratusan: dari $7$ angka, $1$ sudah dipakai untuk satuan, tersisa $6$ angka ($6$ cara).\n   - Kotak Puluhan: dari $6$ angka sisa, $1$ sudah dipakai untuk ratusan, tersisa $5$ angka ($5$ cara).\n3. Menghitung total variasi bilangan:\n   $$\\text{Banyak bilangan} = 6 \\times 5 \\times 4 = 120$$\n\nJadi, banyak bilangan ganjil yang dapat dibentuk adalah $120$.'
    },
    {
      id: 'matwa-aturan-pencacahan-12',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'aturan-pencacahan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Nilai bilangan asli $n$ yang memenuhi persamaan faktorial:\n$$\\frac{(n + 1)!}{(n - 1)!} = 56$$\nadalah ...',
      options: [
        { id: 'A', text: '$5$' },
        { id: 'B', text: '$6$' },
        { id: 'C', text: '$7$' },
        { id: 'D', text: '$8$' },
        { id: 'E', text: '$9$' }
      ],
      correct_answer: 'C',
      hint: 'Uraikan $(n+1)!$ menjadi $(n+1) \\cdot n \\cdot (n-1)!$ lalu bagi dengan $(n-1)!$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menguraikan bentuk faktorial:\n   $$\\frac{(n + 1)!}{(n - 1)!} = \\frac{(n + 1) \\cdot n \\cdot (n - 1)!}{(n - 1)!} = (n + 1)n$$\n2. Menyusun persamaan kuadrat:\n   $$(n + 1)n = 56$$\n   $$n^2 + n - 56 = 0$$\n3. Memfaktorkan persamaan:\n   $$(n + 8)(n - 7) = 0$$\n   Diperoleh akar $n = -8$ atau $n = 7$.\n4. Karena $n$ adalah bilangan asli, maka nilai yang memenuhi adalah $n = 7$.\n\nJadi, nilai $n$ adalah $7$.'
    },
    {
      id: 'matwa-aturan-pencacahan-13',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'aturan-pencacahan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dari $7\\text{ orang}$ calon pengurus organisasi intra sekolah, akan dipilih $3\\text{ orang}$ untuk menduduki jabatan sebagai Ketua, Wakil Ketua, dan Sekretaris. Banyak susunan pengurus berbeda yang mungkin terpilih adalah ...',
      options: [
        { id: 'A', text: '$35$' },
        { id: 'B', text: '$70$' },
        { id: 'C', text: '$105$' },
        { id: 'D', text: '$210$' },
        { id: 'E', text: '$420$' }
      ],
      correct_answer: 'D',
      hint: 'Karena ada jabatan/posisi struktural yang spesifik, urutan pemilihan diperhatikan (gunakan rumus permutasi $P(n, r)$).',
      explanation: 'Langkah-langkah penyelesaian:\n1. Mengidentifikasi parameter permutasi:\n   - Banyak kandidat calon $n = 7$.\n   - Banyak posisi jabatan $r = 3$ (Ketua, Wakil, Sekretaris).\n2. Menggunakan rumus permutasi $P(n, r)$:\n   $$P(7, 3) = \\frac{7!}{(7 - 3)!} = \\frac{7!}{4!} = 7 \\times 6 \\times 5 = 210$$\n\nJadi, banyak susunan pengurus yang mungkin terpilih adalah $210$ susunan.'
    },
    {
      id: 'matwa-aturan-pencacahan-14',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'aturan-pencacahan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Banyak susunan kata berbeda yang dapat dibentuk dari seluruh huruf penyusun kata \\textbf{"INDONESIA"} adalah ...',
      options: [
        { id: 'A', text: '$45.360$' },
        { id: 'B', text: '$90.720$' },
        { id: 'C', text: '$181.440$' },
        { id: 'D', text: '$362.880$' },
        { id: 'E', text: '$725.760$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan rumus permutasi dengan beberapa unsur yang sama: $P = \\frac{n!}{k_1! \\cdot k_2! \\dots}$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung total huruf dan frekuensi huruf yang berulang pada kata "INDONESIA":\n   - Total huruf $n = 9$.\n   - Huruf I muncul sebanyak $2$ kali.\n   - Huruf N muncul sebanyak $2$ kali.\n   - Huruf D, O, E, S, A masing-masing muncul $1$ kali.\n2. Menggunakan rumus permutasi unsur berulang:\n   $$P = \\frac{9!}{2! \\times 2!} = \\frac{362.880}{2 \\times 2} = \\frac{362.880}{4} = 90.720$$\n\nJadi, banyak susunan kata berbeda yang dapat dibentuk adalah $90.720$.'
    },
    {
      id: 'matwa-aturan-pencacahan-15',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'aturan-pencacahan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebanyak $6\\text{ orang}$ anggota delegasi duduk mengelilingi meja rapat bundar. Jika Ketua dan Sekretaris delegasi harus selalu duduk berdampingan, maka banyak susunan posisi duduk melingkar yang dapat terjadi adalah ...',
      options: [
        { id: 'A', text: '$24$' },
        { id: 'B', text: '$48$' },
        { id: 'C', text: '$96$' },
        { id: 'D', text: '$120$' },
        { id: 'E', text: '$240$' }
      ],
      correct_answer: 'B',
      hint: 'Kelompokkan Ketua dan Sekretaris menjadi 1 kesatuan elemen tunggal. Ingat bahwa permutasi siklis dari $N$ elemen adalah $(N - 1)!$, dan elemen di dalam kesatuan dapat bertukar tempat.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Memperlakukan Ketua dan Sekretaris sebagai $1$ kelompok unsur:\n   - Sisa anggota lain ada $4$ orang.\n   - Total unsur yang disusun melingkar adalah $4 + 1 = 5$ unsur.\n2. Menghitung permutasi siklis dari $5$ unsur:\n   $$P_{\\text{siklis}} = (5 - 1)! = 4! = 24$$\n3. Menghitung permutasi internal (posisi duduk Ketua dan Sekretaris):\n   $$2! = 2\\text{ cara}$$\n4. Menghitung banyak susunan keseluruhan:\n   $$\\text{Total cara} = 24 \\times 2 = 48$$\n\nJadi, banyak susunan posisi duduk yang mungkin adalah $48$.'
    },
    {
      id: 'matwa-aturan-pencacahan-16',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'aturan-pencacahan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dari $10\\text{ orang}$ siswa berprestasi di suatu sekolah, akan dipilih $4\\text{ orang}$ untuk mewakili sekolah mengikuti seminar sains nasional. Banyak cara pemilihan delegasi seminar tersebut adalah ...',
      options: [
        { id: 'A', text: '$120$' },
        { id: 'B', text: '$180$' },
        { id: 'C', text: '$210$' },
        { id: 'D', text: '$240$' },
        { id: 'E', text: '$5.040$' }
      ],
      correct_answer: 'C',
      hint: 'Karena tidak ada pembagian jabatan/posisi (urutan tidak diperhitungkan), gunakan kombinasi $C(n, r)$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Mengidentifikasi kombinasi pemilihan:\n   - Banyak total siswa $n = 10$.\n   - Banyak siswa yang dipilih $r = 4$.\n2. Menggunakan rumus kombinasi:\n   $$C(10, 4) = \\frac{10!}{4!(10 - 4)!} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1}$$\n3. Menyederhanakan perkalian:\n   $$C(10, 4) = \\frac{5040}{24} = 210$$\n\nJadi, banyak cara pemilihan delegasi tersebut adalah $210$ cara.'
    },
    {
      id: 'matwa-aturan-pencacahan-17',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'aturan-pencacahan',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Suatu regu kerja bakti memiliki $6\\text{ orang pria}$ dan $4\\text{ orang wanita}$. Akan dibentuk satu tim piket yang beranggotakan $4\\text{ orang}$, dengan syarat tim tersebut harus terdiri atas $3\\text{ orang pria}$ dan $1\\text{ orang wanita}$. Banyak cara pembentukan tim piket tersebut adalah ...',
      options: [
        { id: 'A', text: '$24$' },
        { id: 'B', text: '$40$' },
        { id: 'C', text: '$60$' },
        { id: 'D', text: '$80$' },
        { id: 'E', text: '$120$' }
      ],
      correct_answer: 'D',
      hint: 'Gunakan aturan perkalian kombinasi: $C(n_{\\text{pria}}, r_{\\text{pria}}) \\times C(n_{\\text{wanita}}, r_{\\text{wanita}})$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Memilih $3$ pria dari $6$ pria:\n   $$C(6, 3) = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20\\text{ cara}$$\n2. Memilih $1$ wanita dari $4$ wanita:\n   $$C(4, 1) = \\frac{4}{1} = 4\\text{ cara}$$\n3. Menghitung banyak cara gabungan pembentukan tim:\n   $$\\text{Total cara} = C(6, 3) \\times C(4, 1) = 20 \\times 4 = 80$$\n\nJadi, banyak cara pembentukan tim piket adalah $80$ cara.'
    }
  ],
  'peluang-kejadian-tunggal': [
    {
      id: 'matwa-peluang-kejadian-tunggal-11',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah dadu standar enam sisi bermata $1, 2, 3, 4, 5, 6$ dilempar undi satu kali. Peluang munculnya mata dadu bilangan prima ganjil adalah ...',
      options: [
        { id: 'A', text: '$\\frac{1}{6}$' },
        { id: 'B', text: '$\\frac{1}{3}$' },
        { id: 'C', text: '$\\frac{1}{2}$' },
        { id: 'D', text: '$\\frac{2}{3}$' },
        { id: 'E', text: '$\\frac{5}{6}$' }
      ],
      correct_answer: 'B',
      hint: 'Identifikasi ruang sampel dadu dan tentukan anggota kejadian bilangan prima yang bernilai ganjil.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Ruang sampel pelemparan sebuah dadu:\n   $$S = \\{1, 2, 3, 4, 5, 6\\} \\implies n(S) = 6$$\n2. Menentukan kejadian $A$ yaitu muncul bilangan prima ganjil:\n   - Bilangan prima pada dadu adalah $\\{2, 3, 5\\}$.\n   - Bilangan prima yang ganjil adalah $\\{3, 5\\}$.\n   - Maka $n(A) = 2$.\n3. Menghitung peluang kejadian $A$:\n   $$P(A) = \\frac{n(A)}{n(S)} = \\frac{2}{6} = \\frac{1}{3}$$\n\nJadi, peluang muncul mata dadu prima ganjil adalah $\\frac{1}{3}$.'
    },
    {
      id: 'matwa-peluang-kejadian-tunggal-12',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Tiga keping uang logam standar (memiliki sisi Angka dan Gambar) dilempar undi bersama-sama satu kali. Peluang munculnya sekurang-kurangnya $2\\text{ sisi Angka}$ adalah ...',
      options: [
        { id: 'A', text: '$\\frac{1}{8}$' },
        { id: 'B', text: '$\\frac{1}{4}$' },
        { id: 'C', text: '$\\frac{3}{8}$' },
        { id: 'D', text: '$\\frac{1}{2}$' },
        { id: 'E', text: '$\\frac{5}{8}$' }
      ],
      correct_answer: 'D',
      hint: 'Sekurang-kurangnya 2 Angka berarti tepat 2 Angka atau 3 Angka. Hitung jumlah titik sampel dari total 8 titik sampel.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Ruang sampel pelemparan $3$ keping uang logam:\n   $$n(S) = 2^3 = 8$$\n   Anggota $S = \\{AAA, AAG, AGA, GAA, AGG, GAG, GGA, GGG\\}$.\n2. Titik sampel kejadian $A$ (muncul minimal $2$ Angka):\n   - Tepat $2$ Angka: $\\{AAG, AGA, GAA\\}$ ($3$ kejadian)\n   - Tepat $3$ Angka: $\\{AAA\\}$ ($1$ kejadian)\n   - Total titik sampel $n(A) = 3 + 1 = 4$.\n3. Menghitung peluang:\n   $$P(A) = \\frac{n(A)}{n(S)} = \\frac{4}{8} = \\frac{1}{2}$$\n\nJadi, peluang munculnya sekurang-kurangnya $2$ sisi Angka adalah $\\frac{1}{2}$.'
    },
    {
      id: 'matwa-peluang-kejadian-tunggal-13',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dari sekumpulan kartu bernomor $1$ sampai dengan $25$, diambil sebuah kartu secara acak. Peluang terambilnya kartu dengan nomor kelipatan $4$ adalah ...',
      options: [
        { id: 'A', text: '$\\frac{4}{25}$' },
        { id: 'B', text: '$\\frac{1}{5}$' },
        { id: 'C', text: '$\\frac{6}{25}$' },
        { id: 'D', text: '$\\frac{7}{25}$' },
        { id: 'E', text: '$\\frac{8}{25}$' }
      ],
      correct_answer: 'C',
      hint: 'Daftar semua bilangan kelipatan 4 dari 1 sampai 25, lalu bandingkan dengan total 25 kartu.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Ruang sampel $S = \\{1, 2, 3, \\dots, 25\\} \\implies n(S) = 25$.\n2. Kejadian $K$ terambil kartu kelipatan $4$:\n   $$K = \\{4, 8, 12, 16, 20, 24\\} \\implies n(K) = 6$$\n3. Menghitung nilai peluang:\n   $$P(K) = \\frac{n(K)}{n(S)} = \\frac{6}{25}$$\n\nJadi, peluang terambilnya kartu bernomor kelipatan $4$ adalah $\\frac{6}{25}$.'
    },
    {
      id: 'matwa-peluang-kejadian-tunggal-14',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Peluang seorang peserta lulus dalam tes seleksi beasiswa luar negeri adalah $0{,}82$. Peluang bahwa peserta tersebut dinyatakan gagal atau tidak lulus dalam seleksi beasiswa tersebut adalah ...',
      options: [
        { id: 'A', text: '$0{,}08$' },
        { id: 'B', text: '$0{,}12$' },
        { id: 'C', text: '$0{,}18$' },
        { id: 'D', text: '$0{,}28$' },
        { id: 'E', text: '$0{,}82$' }
      ],
      correct_answer: 'C',
      hint: 'Gunakan sifat peluang komplemen: $P(A\') = 1 - P(A)$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Diketahui peluang lulus $P(A) = 0{,}82$.\n2. Kejadian gagal merupakan komplemen dari kejadian lulus ($A\'$):\n   $$P(A\') = 1 - P(A)$$\n   $$P(A\') = 1 - 0{,}82 = 0{,}18$$\n\nJadi, peluang peserta tersebut tidak lulus adalah $0{,}18$.'
    },
    {
      id: 'matwa-peluang-kejadian-tunggal-15',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dua buah dadu bersisi enam dilempar undi bersama-sama sebanyak $144\\text{ kali}$. Frekuensi harapan munculnya mata dadu berjumlah $8$ adalah ...',
      options: [
        { id: 'A', text: '$15\\text{ kali}$' },
        { id: 'B', text: '$18\\text{ kali}$' },
        { id: 'C', text: '$20\\text{ kali}$' },
        { id: 'D', text: '$24\\text{ kali}$' },
        { id: 'E', text: '$28\\text{ kali}$' }
      ],
      correct_answer: 'C',
      hint: 'Tentukan jumlah pasangan mata dadu yang berjumlah 8 dari total 36 pasangan, lalu kalikan peluangnya dengan banyaknya percobaan: $F_h = n \\times P(A)$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Ruang sampel dua buah dadu: $n(S) = 6 \\times 6 = 36$.\n2. Pasangan mata dadu berjumlah $8$ ($A$):\n   $$A = \\{(2,6), (3,5), (4,4), (5,3), (6,2)\\} \\implies n(A) = 5$$\n3. Peluang kejadian $A$:\n   $$P(A) = \\frac{5}{36}$$\n4. Menghitung frekuensi harapan untuk $N = 144$ lemparan:\n   $$F_h = N \\times P(A) = 144 \\times \\frac{5}{36} = 4 \\times 5 = 20\\text{ kali}$$\n\nJadi, frekuensi harapan muncul mata dadu berjumlah $8$ adalah $20\\text{ kali}$.'
    },
    {
      id: 'matwa-peluang-kejadian-tunggal-16',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Di dalam sebuah kantong tersimpan $5\\text{ kelereng merah}$ dan $3\\text{ kelereng biru}$. Jika diambil $2\\text{ kelereng}$ sekaligus secara acak, maka peluang terambil kedua kelereng berwarna merah adalah ...',
      options: [
        { id: 'A', text: '$\\frac{5}{28}$' },
        { id: 'B', text: '$\\frac{5}{14}$' },
        { id: 'C', text: '$\\frac{15}{56}$' },
        { id: 'D', text: '$\\frac{15}{28}$' },
        { id: 'E', text: '$\\frac{5}{8}$' }
      ],
      correct_answer: 'B',
      hint: 'Gunakan kombinasi untuk menghitung banyak cara memilih 2 kelereng merah dari 5 kelereng merah, dibagi banyak cara memilih 2 kelereng dari seluruh 8 kelereng.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung banyak titik sampel ruang sampel $n(S)$:\n   $$n(S) = C(8, 2) = \\frac{8 \\times 7}{2 \\times 1} = 28$$\n2. Menghitung banyak kejadian terpilih $2$ merah dari $5$ merah:\n   $$n(A) = C(5, 2) = \\frac{5 \\times 4}{2 \\times 1} = 10$$\n3. Menghitung nilai peluang:\n   $$P(A) = \\frac{n(A)}{n(S)} = \\frac{10}{28} = \\frac{5}{14}$$\n\nJadi, peluang terambilnya kedua kelereng berwarna merah adalah $\\frac{5}{14}$.'
    },
    {
      id: 'matwa-peluang-kejadian-tunggal-17',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-tunggal',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dari $100\\text{ pengendara motor}$ yang disurvei oleh dinas perhubungan, tercatat $45\\text{ orang}$ menggunakan helm berstandar SNI model half-face, $35\\text{ orang}$ menggunakan model full-face, dan sisanya menggunakan jenis penutup kepala lain. Jika seorang pengendara dipilih secara acak, peluang terpilihnya pengendara yang menggunakan helm model full-face adalah ...',
      options: [
        { id: 'A', text: '$\\frac{1}{5}$' },
        { id: 'B', text: '$\\frac{7}{20}$' },
        { id: 'C', text: '$\\frac{9}{20}$' },
        { id: 'D', text: '$\\frac{4}{5}$' },
        { id: 'E', text: '$\\frac{17}{20}$' }
      ],
      correct_answer: 'B',
      hint: 'Peluang empiris dihitung dengan rasio frekuensi kejadian terhadap total sampel uji.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Total sampel pengendara $n(S) = 100$.\n2. Banyak pengendara dengan helm full-face $n(F) = 35$.\n3. Menghitung peluang empiris:\n   $$P(F) = \\frac{35}{100} = \\frac{7}{20}$$\n\nJadi, peluang terpilihnya pengendara helm model full-face adalah $\\frac{7}{20}$.'
    }
  ],
  'peluang-kejadian-majemuk': [
    {
      id: 'matwa-peluang-kejadian-majemuk-11',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dari satu set lengkap kartu bridge ($52\\text{ kartu}$), diambil sebuah kartu secara acak. Peluang terambilnya kartu bernomor As atau kartu bergambar (Jack, Queen, King) adalah ...',
      options: [
        { id: 'A', text: '$\\frac{1}{13}$' },
        { id: 'B', text: '$\\frac{3}{13}$' },
        { id: 'C', text: '$\\frac{4}{13}$' },
        { id: 'D', text: '$\\frac{5}{13}$' },
        { id: 'E', text: '$\\frac{16}{52}$' }
      ],
      correct_answer: 'C',
      hint: 'Kejadian As dan kejadian kartu Bergambar merupakan kejadian saling lepas (tidak ada kartu As yang bergambar wajah). Gunakan $P(A \\cup B) = P(A) + P(B)$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Total kartu bridge: $n(S) = 52$.\n2. Menentukan banyak kartu masing-masing kategori:\n   - Banyak kartu As: $n(A) = 4$.\n   - Banyak kartu bergambar (Jack, Queen, King): $n(B) = 4 \\times 3 = 12$.\n3. Karena tidak ada irisan antara kartu As dan Bergambar ($A \\cap B = \\emptyset$):\n   $$n(A \\cup B) = n(A) + n(B) = 4 + 12 = 16$$\n4. Menghitung peluang gabungan kejadian saling lepas:\n   $$P(A \\cup B) = \\frac{16}{52} = \\frac{4}{13}$$\n\nJadi, peluangnya adalah $\\frac{4}{13}$.'
    },
    {
      id: 'matwa-peluang-kejadian-majemuk-12',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah kartu diambil secara acak dari tumpukan $20\\text{ kartu}$ bernomor $1$ sampai dengan $20$. Peluang terambilnya kartu bernomor genap atau kartu bernomor kelipatan $5$ adalah ...',
      options: [
        { id: 'A', text: '$\\frac{1}{2}$' },
        { id: 'B', text: '$\\frac{3}{5}$' },
        { id: 'C', text: '$\\frac{7}{10}$' },
        { id: 'D', text: '$\\frac{13}{20}$' },
        { id: 'E', text: '$\\frac{4}{5}$' }
      ],
      correct_answer: 'B',
      hint: 'Ini adalah kejadian tidak saling lepas karena terdapat bilangan yang sekaligus genap dan kelipatan 5 (yaitu kelipatan 10). Gunakan $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Total kartu $n(S) = 20$.\n2. Kejadian kartu genap ($A$):\n   $$A = \\{2, 4, 6, 8, 10, 12, 14, 16, 18, 20\\} \\implies n(A) = 10$$\n3. Kejadian kartu kelipatan $5$ ($B$):\n   $$B = \\{5, 10, 15, 20\\} \\implies n(B) = 4$$\n4. Irisan kartu genap dan kelipatan $5$ ($A \\cap B$):\n   $$A \\cap B = \\{10, 20\\} \\implies n(A \\cap B) = 2$$\n5. Menerapkan rumus peluang tidak saling lepas:\n   $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n   $$P(A \\cup B) = \\frac{10}{20} + \\frac{4}{20} - \\frac{2}{20} = \\frac{12}{20} = \\frac{3}{5}$$\n\nJadi, peluang terambilnya kartu bernomor genap atau kelipatan $5$ adalah $\\frac{3}{5}$.'
    },
    {
      id: 'matwa-peluang-kejadian-majemuk-13',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah dadu bersisi enam dan sebuah keping uang logam dilempar undi bersama-sama satu kali. Peluang munculnya mata dadu lebih dari $4$ dan sisi Gambar pada uang logam adalah ...',
      options: [
        { id: 'A', text: '$\\frac{1}{12}$' },
        { id: 'B', text: '$\\frac{1}{6}$' },
        { id: 'C', text: '$\\frac{1}{4}$' },
        { id: 'D', text: '$\\frac{1}{3}$' },
        { id: 'E', text: '$\\frac{1}{2}$' }
      ],
      correct_answer: 'B',
      hint: 'Pelemparan dadu dan koin merupakan dua kejadian saling bebas. Gunakan rumus $P(A \\cap B) = P(A) \\times P(B)$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Peluang mata dadu lebih dari $4$ ($A = \\{5, 6\\}$):\n   $$P(A) = \\frac{2}{6} = \\frac{1}{3}$$\n2. Peluang sisi Gambar pada koin ($B = \\{G\\}$):\n   $$P(B) = \\frac{1}{2}$$\n3. Karena kedua kejadian saling bebas:\n   $$P(A \\cap B) = P(A) \\times P(B) = \\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}$$\n\nJadi, peluang kejadian tersebut adalah $\\frac{1}{6}$.'
    },
    {
      id: 'matwa-peluang-kejadian-majemuk-14',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Sebuah kotak berisi $4\\text{ bola hijau}$ dan $6\\text{ bola kuning}$. Dilakukan pengambilan dua kali berturut-turut satu per satu dengan pengembalian (setelah bola pertama dicatat warnanya, bola dikembalikan lagi ke dalam kotak sebelum pengambilan kedua). Peluang terambil bola pertama hijau dan bola kedua kuning adalah ...',
      options: [
        { id: 'A', text: '$\\frac{2}{15}$' },
        { id: 'B', text: '$\\frac{6}{25}$' },
        { id: 'C', text: '$\\frac{4}{15}$' },
        { id: 'D', text: '$\\frac{12}{25}$' },
        { id: 'E', text: '$\\frac{3}{5}$' }
      ],
      correct_answer: 'B',
      hint: 'Karena ada pengembalian, kondisi ruang sampel pada pengambilan kedua tetap sama (kejadian saling bebas).',
      explanation: 'Langkah-langkah penyelesaian:\n1. Total bola dalam kotak: $4 + 6 = 10\\text{ bola}$.\n2. Pengambilan pertama menghasilkan bola hijau:\n   $$P(H) = \\frac{4}{10} = \\frac{2}{5}$$\n3. Bola dikembalikan, sehingga total bola tetap $10$.\n4. Pengambilan kedua menghasilkan bola kuning:\n   $$P(K) = \\frac{6}{10} = \\frac{3}{5}$$\n5. Peluang kedua peristiwa terjadi bersamaan:\n   $$P(H \\cap K) = \\frac{2}{5} \\times \\frac{3}{5} = \\frac{6}{25}$$\n\nJadi, peluangnya adalah $\\frac{6}{25}$.'
    },
    {
      id: 'matwa-peluang-kejadian-majemuk-15',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam sebuah kotak terdapat $7\\text{ spidol hitam}$ dan $3\\text{ spidol biru}$. Diambil $2\\text{ spidol}$ satu per satu secara acak tanpa pengembalian. Peluang terambilnya spidol pertama hitam dan spidol kedua juga hitam adalah ...',
      options: [
        { id: 'A', text: '$\\frac{7}{15}$' },
        { id: 'B', text: '$\\frac{21}{50}$' },
        { id: 'C', text: '$\\frac{7}{10}$' },
        { id: 'D', text: '$\\frac{14}{45}$' },
        { id: 'E', text: '$\\frac{21}{100}$' }
      ],
      correct_answer: 'A',
      hint: 'Karena tanpa pengembalian, pada pengambilan kedua banyak spidol hitam dan spidol total berkurang 1 (peluang bersyarat).',
      explanation: 'Langkah-langkah penyelesaian:\n1. Kondisi awal:\n   - Spidol hitam $= 7$\n   - Total spidol $= 7 + 3 = 10$\n   Peluang spidol pertama hitam: $P(H_1) = \\frac{7}{10}$.\n2. Kondisi setelah 1 spidol hitam diambil (tanpa pengembalian):\n   - Sisa spidol hitam $= 6$\n   - Sisa total spidol $= 9$\n   Peluang spidol kedua hitam bersyarat: $P(H_2 | H_1) = \\frac{6}{9} = \\frac{2}{3}$.\n3. Menghitung peluang kedua spidol hitam:\n   $$P(H_1 \\cap H_2) = P(H_1) \\times P(H_2 | H_1) = \\frac{7}{10} \\times \\frac{2}{3} = \\frac{14}{30} = \\frac{7}{15}$$\n\nJadi, peluangnya adalah $\\frac{7}{15}$.'
    },
    {
      id: 'matwa-peluang-kejadian-majemuk-16',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dalam suatu survei konsumen, peluang seorang pelanggan menyukai kopi adalah $0{,}60$ dan peluang seorang pelanggan menyukai teh sekaligus kopi adalah $0{,}24$. Jika seorang pelanggan yang dipilih acak ternyata menyukai kopi, maka peluang bersyarat pelanggan tersebut juga menyukai teh adalah ...',
      options: [
        { id: 'A', text: '$0{,}144$' },
        { id: 'B', text: '$0{,}240$' },
        { id: 'C', text: '$0{,}360$' },
        { id: 'D', text: '$0{,}400$' },
        { id: 'E', text: '$0{,}840$' }
      ],
      correct_answer: 'D',
      hint: 'Gunakan definisi rumus peluang bersyarat: $P(T | K) = \\frac{P(T \\cap K)}{P(K)}$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Mengidentifikasi nilai peluang:\n   - $P(K) = 0{,}60$\n   - $P(T \\cap K) = 0{,}24$\n2. Menghitung peluang bersyarat menyukai teh jika diketahui menyukai kopi:\n   $$P(T | K) = \\frac{P(T \\cap K)}{P(K)} = \\frac{0{,}24}{0{,}60} = \\frac{24}{60} = 0{,}40$$\n\nJadi, peluang bersyaratnya adalah $0{,}40$ (atau $0{,}400$).'
    },
    {
      id: 'matwa-peluang-kejadian-majemuk-17',
      chapter_id: 'peluang-dan-kombinatorika',
      sub_chapter_id: 'peluang-kejadian-majemuk',
      question_type: 'PG',
      difficulty: 'STANDAR',
      question_text: 'Dua orang penembak jitu, $A$ dan $B$, menembak sebuah papan target secara independen. Peluang tembakan $A$ mengenai target adalah $\\frac{3}{4}$, sedangkan peluang tembakan $B$ mengenai target adalah $\\frac{2}{3}$. Peluang bahwa papan target tersebut terkena setidaknya satu tembakan adalah ...',
      options: [
        { id: 'A', text: '$\\frac{1}{12}$' },
        { id: 'B', text: '$\\frac{1}{2}$' },
        { id: 'C', text: '$\\frac{7}{12}$' },
        { id: 'D', text: '$\\frac{5}{6}$' },
        { id: 'E', text: '$\\frac{11}{12}$' }
      ],
      correct_answer: 'E',
      hint: 'Gunakan metode komplemen: peluang setidaknya satu tembakan masuk $= 1 - P(\\text{keduanya meleset})$.',
      explanation: 'Langkah-langkah penyelesaian:\n1. Menghitung peluang masing-masing penembak meleset (komplemen):\n   - Peluang $A$ meleset: $P(A\') = 1 - \\frac{3}{4} = \\frac{1}{4}$.\n   - Peluang $B$ meleset: $P(B\') = 1 - \\frac{2}{3} = \\frac{1}{3}$.\n2. Karena tembakan keduanya independen, peluang keduanya meleset:\n   $$P(A\' \\cap B\') = P(A\') \\times P(B\') = \\frac{1}{4} \\times \\frac{1}{3} = \\frac{1}{12}$$\n3. Menghitung peluang target terkena setidaknya satu tembakan:\n   $$P(\\text{minimal satu kena}) = 1 - P(A\' \\cap B\') = 1 - \\frac{1}{12} = \\frac{11}{12}$$\n\nJadi, peluangnya adalah $\\frac{11}{12}$.'
    }
  ]
};

console.log('🔍 MEMVALIDASI SEMUA RUMUS KATEX DAN SCHEMA PERTANYAAN BATCH 4B...\n');

for (const [subChapter, newQuestions] of Object.entries(batch4bData)) {
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

console.log('\n✨ SELURUH PERTANYAAN BATCH 4B SELESAI DITULISKAN DENGAN SUKSES!');
