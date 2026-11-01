import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. sudut-dan-kesebangunan
const sudutPath = path.join(rootDir, 'docs', 'data', 'questions', 'sudut-dan-kesebangunan.json');
const sudut = JSON.parse(fs.readFileSync(sudutPath, 'utf-8'));

// Q1: Segitiga sama kaki ABC
const svgSegitigaSamaKaki = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 340 210" class="w-full max-w-sm h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="340" height="210" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Triangle A(170, 30), B(50, 170), C(290, 170) -->
  <polygon points="170,30 50,170 290,170" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Height line AD: D(170, 170) -->
  <line x1="170" y1="30" x2="170" y2="170" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4"/>
  <!-- Right-angle mark at D -->
  <rect x="170" y="155" width="15" height="15" fill="none" stroke="#f59e0b" stroke-width="1.2"/>
  <!-- Vertices labels -->
  <text x="170" y="22" fill="#f8fafc" font-size="12" font-family="sans-serif" text-anchor="middle" font-weight="bold">A</text>
  <text x="35" y="180" fill="#f8fafc" font-size="12" font-family="sans-serif" font-weight="bold">B</text>
  <text x="300" y="180" fill="#f8fafc" font-size="12" font-family="sans-serif" font-weight="bold">C</text>
  <text x="170" y="190" fill="#f59e0b" font-size="11" font-family="sans-serif" text-anchor="middle">D</text>
  <!-- Side length labels -->
  <text x="95" y="95" fill="#38bdf8" font-size="11" font-family="sans-serif" text-anchor="middle">50 cm</text>
  <text x="245" y="95" fill="#38bdf8" font-size="11" font-family="sans-serif" text-anchor="middle">50 cm</text>
  <text x="170" y="105" fill="#f59e0b" font-size="11" font-family="sans-serif" text-anchor="end">t = 40 cm</text>
  <text x="170" y="202" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Alas BC = 60 cm (BD = DC = 30 cm)</text>
</svg></div>`;

sudut[0].question_text = `Perhatikan sketsa rancangan rangka rak buku segitiga sama kaki berikut:

${svgSegitigaSamaKaki}

Sebuah rak buku dinding dekoratif dibuat berbentuk segitiga sama kaki $ABC$ dengan panjang $AB = AC = 50\\text{ cm}$ dan panjang alas $BC = 60\\text{ cm}$. Untuk memperkuat struktur rak, sebuah papan sekat horizontal dipasang sejajar dengan alas $BC$ pada jarak $16\\text{ cm}$ dari titik sudut puncak $A$. Panjang papan sekat horizontal tersebut adalah ...`;

// Q3: Garis sejajar dipotong transversal
const svgTransversal = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 200" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="200" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Two parallel lines -->
  <line x1="30" y1="65" x2="330" y2="65" stroke="#38bdf8" stroke-width="2"/>
  <text x="338" y="69" fill="#38bdf8" font-size="12" font-family="sans-serif">m</text>
  <line x1="30" y1="135" x2="330" y2="135" stroke="#38bdf8" stroke-width="2"/>
  <text x="338" y="139" fill="#38bdf8" font-size="12" font-family="sans-serif">n</text>
  <!-- Transversal line: angle ~ 60 deg, passes (120, 20) to (240, 180) -->
  <line x1="100" y1="15" x2="260" y2="185" stroke="#f59e0b" stroke-width="2"/>
  <text x="268" y="185" fill="#f59e0b" font-size="12" font-family="sans-serif">k</text>
  <!-- Alternate exterior angles arcs -->
  <!-- Top angle: (3x + 15)° exterior top-left -->
  <path d="M 125,40 A 25 25 0 0 1 142,65" fill="none" stroke="#ec4899" stroke-width="2"/>
  <text x="65" y="45" fill="#ec4899" font-size="11" font-family="sans-serif" font-weight="bold">(3x + 15)°</text>
  <!-- Bottom angle: (5x - 25)° exterior bottom-right -->
  <path d="M 235,160 A 25 25 0 0 1 218,135" fill="none" stroke="#ec4899" stroke-width="2"/>
  <text x="245" y="160" fill="#ec4899" font-size="11" font-family="sans-serif" font-weight="bold">(5x - 25)°</text>
  <text x="180" y="192" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Garis m || n dipotong garis transversal k</text>
</svg></div>`;

sudut[2].question_text = `Perhatikan konfigurasi dua garis sejajar yang dipotong garis transversal berikut:

${svgTransversal}

Dua garis sejajar dipotong oleh sebuah garis transversal. Sepasang sudut luar berseberangan dinyatakan oleh $(3x + 15)^\\circ$ dan $(5x - 25)^\\circ$. Nilai dari sudut dalam sepihak yang bersesuaian dengan sudut tersebut adalah ...`;

// Q4: Segitiga siku-siku ABC dengan garis tinggi AD
const svgSegitigaSiku = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 340 210" class="w-full max-w-sm h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="340" height="210" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Triangle: B(40, 160), C(300, 160), A(120, 50) -->
  <polygon points="40,160 300,160 120,50" fill="#6366f1" fill-opacity="0.15" stroke="#6366f1" stroke-width="2.5"/>
  <!-- Height line AD: D(120, 160) -->
  <line x1="120" y1="50" x2="120" y2="160" stroke="#f59e0b" stroke-width="2"/>
  <!-- Right angles -->
  <rect x="120" y="145" width="15" height="15" fill="none" stroke="#f59e0b" stroke-width="1.2"/>
  <!-- Vertex labels -->
  <text x="120" y="40" fill="#f8fafc" font-size="12" font-family="sans-serif" text-anchor="middle" font-weight="bold">A</text>
  <text x="25" y="170" fill="#f8fafc" font-size="12" font-family="sans-serif" font-weight="bold">B</text>
  <text x="310" y="170" fill="#f8fafc" font-size="12" font-family="sans-serif" font-weight="bold">C</text>
  <text x="120" y="180" fill="#f59e0b" font-size="11" font-family="sans-serif" text-anchor="middle">D</text>
  <!-- Segment length labels -->
  <text x="75" y="180" fill="#38bdf8" font-size="11" font-family="sans-serif">BD = 9 cm</text>
  <text x="200" y="180" fill="#38bdf8" font-size="11" font-family="sans-serif">CD = 16 cm</text>
  <text x="130" y="110" fill="#f59e0b" font-size="11" font-family="sans-serif">AD</text>
</svg></div>`;

sudut[3].question_text = `Perhatikan gambar segitiga siku-siku $ABC$ dengan garis tinggi $AD$ berikut:

${svgSegitigaSiku}

Diberikan segitiga siku-siku $ABC$ yang siku-siku di titik $A$. Dari titik sudut $A$ ditarik garis tinggi $AD$ yang tegak lurus hipotenusa $BC$. Jika panjang segmen garis $BD = 9\\text{ cm}$ dan $CD = 16\\text{ cm}$, maka panjang garis tinggi $AD$ dan keliling $\\triangle ABC$ berturut-turut adalah ...`;

fs.writeFileSync(sudutPath, JSON.stringify(sudut, null, 2), 'utf-8');
console.log('Updated sudut-dan-kesebangunan.json with SVGs');

// 2. pengukuran-bangun-datar Q4 (Tembereng Daun Persegi 14x14)
const datarPath = path.join(rootDir, 'docs', 'data', 'questions', 'pengukuran-bangun-datar.json');
const datar = JSON.parse(fs.readFileSync(datarPath, 'utf-8'));

const svgDaun = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 320 230" class="w-full max-w-xs h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="230" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Square ABCD: Top-Left (80, 30), Side=160 px -->
  <rect x="80" y="30" width="160" height="160" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <!-- Leaf area: intersection of two quadrant circles -->
  <!-- Center B(80, 190) arc from (80, 30) to (240, 190) AND Center D(240, 30) arc from (240, 190) to (80, 30) -->
  <path d="M 80,30 A 160 160 0 0 1 240,190 A 160 160 0 0 1 80,30 Z" fill="#10b981" fill-opacity="0.4" stroke="#10b981" stroke-width="2"/>
  <!-- Vertices labels -->
  <text x="70" y="26" fill="#f8fafc" font-size="12" font-family="sans-serif" font-weight="bold">D</text>
  <text x="250" y="26" fill="#f8fafc" font-size="12" font-family="sans-serif" font-weight="bold">C</text>
  <text x="70" y="202" fill="#f8fafc" font-size="12" font-family="sans-serif" font-weight="bold">A</text>
  <text x="250" y="202" fill="#f8fafc" font-size="12" font-family="sans-serif" font-weight="bold">B</text>
  <!-- Side dimension -->
  <text x="160" y="210" fill="#38bdf8" font-size="11" font-family="sans-serif" text-anchor="middle">s = 14 cm</text>
  <text x="160" y="115" fill="#f8fafc" font-size="11" font-family="sans-serif" text-anchor="middle" font-weight="bold">Daerah Diarsir</text>
</svg></div>`;

datar[3].question_text = `Perhatikan gambar bidang persegi dengan daerah arsir berbentuk daun (lensa) berikut:

${svgDaun}

Di dalam sebuah persegi $ABCD$ dengan panjang sisi $s = 14$ cm, dibuat dua busur lingkaran seperempat lingkaran dengan pusat di dua titik sudut yang berhadapan. Luas daerah irisan (daerah arsiran daun) di dalam persegi tersebut adalah ... (gunakan $\\pi = \\frac{22}{7}$)`;

fs.writeFileSync(datarPath, JSON.stringify(datar, null, 2), 'utf-8');
console.log('Updated pengukuran-bangun-datar.json with SVGs');

// 3. pengukuran-bangun-ruang Q2 (Bola dalam kubus) dan Q5 (Kerucut tegak)
const ruangPath = path.join(rootDir, 'docs', 'data', 'questions', 'pengukuran-bangun-ruang.json');
const ruang = JSON.parse(fs.readFileSync(ruangPath, 'utf-8'));

const svgBolaKubus = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 320 220" class="w-full max-w-xs h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Isometric Cube Wireframe -->
  <!-- Front face: (80, 80) to (180, 80) to (180, 180) to (80, 180) -->
  <rect x="80" y="80" width="110" height="110" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Top and Right faces -->
  <polygon points="80,80 130,40 240,40 190,80" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="190,80 240,40 240,150 190,190" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Sphere tangent to faces -->
  <circle cx="145" cy="120" r="50" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2"/>
  <ellipse cx="145" cy="120" rx="50" ry="16" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3"/>
  <line x1="145" y1="120" x2="195" y2="120" stroke="#f59e0b" stroke-width="1.5"/>
  <circle cx="145" cy="120" r="3" fill="#f59e0b"/>
  <text x="165" y="115" fill="#f59e0b" font-size="10" font-family="sans-serif">R = s/2</text>
  <text x="145" y="208" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Bola pejal menyinggung keenam sisi kubus</text>
</svg></div>`;

ruang[1].question_text = `Perhatikan visualisasi bola pejal yang tepat berada di dalam kubus berongga berikut:

${svgBolaKubus}

Sebuah bola pejal tepat menyinggung keenam bidang sisi bagian dalam dari sebuah kotak kubus berongga. Perbandingan volume ruang kosong di dalam kubus di luar bola terhadap volume bola tersebut adalah ...`;

const svgKerucut = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 320 220" class="w-full max-w-xs h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Cone apex: (160, 30), base ellipse: center (160, 170), rx=70, ry=20 -->
  <polygon points="160,30 90,170 230,170" fill="#ec4899" fill-opacity="0.15"/>
  <line x1="160" y1="30" x2="90" y2="170" stroke="#ec4899" stroke-width="2"/>
  <line x1="160" y1="30" x2="230" y2="170" stroke="#ec4899" stroke-width="2"/>
  <ellipse cx="160" cy="170" rx="70" ry="20" fill="none" stroke="#ec4899" stroke-width="2"/>
  <!-- Height & Radius -->
  <line x1="160" y1="30" x2="160" y2="170" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3"/>
  <line x1="160" y1="170" x2="230" y2="170" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="160" cy="170" r="3" fill="#f59e0b"/>
  <!-- Labels -->
  <text x="145" y="105" fill="#f59e0b" font-size="11" font-family="sans-serif">t = 24 cm</text>
  <text x="190" y="165" fill="#38bdf8" font-size="11" font-family="sans-serif">r = 7 cm</text>
  <text x="215" y="95" fill="#ec4899" font-size="11" font-family="sans-serif">s = 25 cm</text>
  <text x="160" y="205" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Diameter d = 14 cm (r = 7 cm), s = 25 cm</text>
</svg></div>`;

ruang[4].question_text = `Perhatikan gambar corong minyak berbentuk kerucut lingkaran tegak berikut:

${svgKerucut}

Sebuah corong minyak berbentuk kerucut lingkaran tegak memiliki diameter lingkaran alas $d = 14\\text{ cm}$ dan panjang garis pelukis $s = 25\\text{ cm}$. Pilihlah **SEMUA** pernyataan di bawah ini yang bernilai **BENAR**! (Gunakan $\\pi = \\frac{22}{7}$)`;

fs.writeFileSync(ruangPath, JSON.stringify(ruang, null, 2), 'utf-8');
console.log('Updated pengukuran-bangun-ruang.json with SVGs');
