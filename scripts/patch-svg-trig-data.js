import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. aplikasi-trigonometri
const trigPath = path.join(rootDir, 'docs', 'data', 'questions', 'aplikasi-trigonometri.json');
const trig = JSON.parse(fs.readFileSync(trigPath, 'utf-8'));

// Q1: Tangga bersandar di dinding, panjang 6m, sudut 60 deg
const svgTangga = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 340 220" class="w-full max-w-sm h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="340" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Ground: y = 180 -->
  <line x1="30" y1="180" x2="310" y2="180" stroke="#94a3b8" stroke-width="2"/>
  <!-- Wall: x = 240, from y=40 to y=180 -->
  <line x1="240" y1="30" x2="240" y2="180" stroke="#f59e0b" stroke-width="3"/>
  <rect x="225" y="165" width="15" height="15" fill="none" stroke="#94a3b8" stroke-width="1"/>
  <!-- Ladder: from foot (90, 180) to wall (240, 50) -->
  <!-- dx = 150, dy = 130, angle ~ 60 deg -->
  <line x1="90" y1="180" x2="240" y2="50" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Rungs on the ladder -->
  <line x1="115" y1="158" x2="125" y2="162" stroke="#bae6fd" stroke-width="2"/>
  <line x1="140" y1="136" x2="150" y2="140" stroke="#bae6fd" stroke-width="2"/>
  <line x1="165" y1="114" x2="175" y2="118" stroke="#bae6fd" stroke-width="2"/>
  <line x1="190" y1="92" x2="200" y2="96" stroke="#bae6fd" stroke-width="2"/>
  <line x1="215" y1="70" x2="225" y2="74" stroke="#bae6fd" stroke-width="2"/>
  <!-- Angle arc 60 deg at foot (90, 180) -->
  <path d="M 125,180 A 35 35 0 0 0 115,158" fill="none" stroke="#ec4899" stroke-width="2"/>
  <text x="132" y="172" fill="#ec4899" font-size="11" font-family="sans-serif" font-weight="bold">60°</text>
  <!-- Labels -->
  <text x="140" y="105" fill="#38bdf8" font-size="12" font-family="sans-serif" font-weight="bold">Tangga 6 m</text>
  <text x="250" y="110" fill="#f59e0b" font-size="12" font-family="sans-serif" font-weight="bold">Tinggi h = ?</text>
  <text x="240" y="45" fill="#f8fafc" font-size="10" font-family="sans-serif">Jendela Lt. 2</text>
  <text x="170" y="202" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Permukaan Tanah Mendatar</text>
</svg></div>`;

trig[0].question_text = `Perhatikan sketsa posisi tangga yang bersandar pada dinding berikut:

${svgTangga}

Sebuah tangga dengan panjang $6\\text{ meter}$ disandarkan pada dinding vertikal sebuah rumah. Kaki tangga diletakkan di atas tanah mendatar sehingga badan tangga membentuk sudut $60^\\circ$ terhadap permukaan tanah. Ujung atas tangga tepat mencapai bibir bawah jendela di lantai dua. Tinggi bibir bawah jendela tersebut dari permukaan tanah adalah ...`;

// Q2: Mercusuar 45m, sudut depresi 30 deg
const svgMercusuar = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 210" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="210" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Sea level: y = 170 -->
  <line x1="30" y1="170" x2="330" y2="170" stroke="#38bdf8" stroke-width="2"/>
  <!-- Lighthouse: x = 70, height from 170 to 50 (h = 45m) -->
  <rect x="62" y="50" width="16" height="120" fill="#64748b" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="70" cy="45" r="7" fill="#f59e0b"/>
  <!-- Horizontal eye-line from top (70, 50) to (200, 50) -->
  <line x1="70" y1="50" x2="220" y2="50" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3"/>
  <!-- Line of sight to boat at (278, 170) -> dx = 208, dy = 120 -> tan(30) ~ 0.577 -->
  <line x1="70" y1="50" x2="278" y2="170" stroke="#ec4899" stroke-width="2"/>
  <!-- Depression angle arc at (70, 50) -->
  <path d="M 110,50 A 40 40 0 0 1 105,70" fill="none" stroke="#ec4899" stroke-width="2"/>
  <text x="115" y="66" fill="#ec4899" font-size="11" font-family="sans-serif" font-weight="bold">30°</text>
  <!-- Boat at (278, 170) -->
  <polygon points="265,170 295,170 290,180 270,180" fill="#f59e0b"/>
  <line x1="280" y1="170" x2="280" y2="160" stroke="#f59e0b" stroke-width="1.5"/>
  <polygon points="280,160 288,165 280,168" fill="#f8fafc"/>
  <!-- Labels -->
  <text x="40" y="110" fill="#f8fafc" font-size="11" font-family="sans-serif" text-anchor="middle">45 m</text>
  <text x="174" y="190" fill="#38bdf8" font-size="11" font-family="sans-serif" text-anchor="middle" font-weight="bold">Jarak Horizontal d = ?</text>
  <text x="280" y="198" fill="#f59e0b" font-size="10" font-family="sans-serif" text-anchor="middle">Perahu</text>
</svg></div>`;

trig[1].question_text = `Perhatikan sketsa pengamatan sudut depresi dari puncak mercusuar berikut:

${svgMercusuar}

Seorang petugas pengawas berada di puncak mercusuar yang tingginya $45\\text{ meter}$ di atas permukaan air laut. Dari puncak tersebut, petugas melihat sebuah perahu nelayan dengan sudut depresi sebesar $30^\\circ$. Jarak mendatar (horizontal) dari perahu nelayan tersebut ke dasar mercusuar adalah ...`;

// Q3: Dua sudut elevasi 45 deg dan 30 deg
const svgDuaElevasi = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 210" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="210" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Ground: y = 175 -->
  <line x1="20" y1="175" x2="340" y2="175" stroke="#94a3b8" stroke-width="2"/>
  <!-- Eye-level line: y = 155 (1.6m) -->
  <line x1="20" y1="155" x2="340" y2="155" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
  <text x="25" y="168" fill="#64748b" font-size="9" font-family="sans-serif">1,6 m</text>
  <!-- Flagpole at x = 300, from y=30 to y=175 -->
  <line x1="300" y1="30" x2="300" y2="175" stroke="#f59e0b" stroke-width="3"/>
  <polygon points="300,30 320,38 300,46" fill="#f43f5e"/>
  <!-- Point A (first pos): x = 180, Point B (second pos): x = 60 (distance AB = 12m) -->
  <!-- Line of sight from A(180, 155) to apex (300, 30): dx = 120, dy = 125 -> 45 deg approx -->
  <line x1="180" y1="155" x2="300" y2="30" stroke="#38bdf8" stroke-width="2"/>
  <!-- Line of sight from B(60, 155) to apex (300, 30): dx = 240, dy = 125 -> 30 deg approx -->
  <line x1="60" y1="155" x2="300" y2="30" stroke="#10b981" stroke-width="2"/>
  <!-- Observers -->
  <circle cx="180" cy="155" r="4" fill="#38bdf8"/>
  <text x="180" y="190" fill="#38bdf8" font-size="11" font-family="sans-serif" text-anchor="middle" font-weight="bold">Titik A (45°)</text>
  <circle cx="60" cy="155" r="4" fill="#10b981"/>
  <text x="60" y="190" fill="#10b981" font-size="11" font-family="sans-serif" text-anchor="middle" font-weight="bold">Titik B (30°)</text>
  <line x1="60" y1="168" x2="180" y2="168" stroke="#ec4899" stroke-width="1.5"/>
  <text x="120" y="165" fill="#ec4899" font-size="10" font-family="sans-serif" text-anchor="middle">12 m</text>
  <text x="310" y="90" fill="#f59e0b" font-size="11" font-family="sans-serif">Tinggi Tiang T = ?</text>
</svg></div>`;

trig[2].question_text = `Perhatikan ilustrasi pengukuran tinggi tiang bendera dari dua titik pengamatan berikut:

${svgDuaElevasi}

Seorang siswa bernama Andi yang memiliki tinggi mata $1,6\\text{ meter}$ dari permukaan tanah mengukur tinggi tiang bendera di lapangan sekolah menggunakan klinometer. Mula-mula, dari titik $A$, Andi melihat puncak tiang bendera dengan sudut elevasi $45^\\circ$. Kemudian, Andi berjalan lurus menjauhi tiang bendera sejauh $12\\text{ meter}$ ke titik $B$ yang segaris dengan tiang bendera dan titik $A$. Dari titik $B$, sudut elevasi ke puncak tiang bendera menjadi $30^\\circ$. Jika nilai pendekatan $\\sqrt{3} \\approx 1,73$, maka tinggi tiang bendera tersebut dari permukaan tanah adalah ...`;

fs.writeFileSync(trigPath, JSON.stringify(trig, null, 2), 'utf-8');
console.log('Updated aplikasi-trigonometri.json with SVGs');

// 2. penyajian-data
const dataPath = path.join(rootDir, 'docs', 'data', 'questions', 'penyajian-data.json');
const dataQs = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Q1: Bar Chart Populasi 5 Kota (A: 280, B: 310, C: ?, D: 240, E: 170 in thousands)
const svgBarPopulasi = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 210" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="210" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Axes: origin at (50, 170) -->
  <line x1="50" y1="170" x2="330" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="50" y1="170" x2="50" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="35" y="24" fill="#94a3b8" font-size="9" font-family="sans-serif">Ribu</text>
  <!-- Gridlines Y: 100k -> 130, 200k -> 90, 300k -> 50 -->
  <line x1="50" y1="130" x2="330" y2="130" stroke="#1e293b" stroke-width="1"/>
  <text x="25" y="133" fill="#64748b" font-size="9" font-family="sans-serif">100</text>
  <line x1="50" y1="90" x2="330" y2="90" stroke="#1e293b" stroke-width="1"/>
  <text x="25" y="93" fill="#64748b" font-size="9" font-family="sans-serif">200</text>
  <line x1="50" y1="50" x2="330" y2="50" stroke="#1e293b" stroke-width="1"/>
  <text x="25" y="53" fill="#64748b" font-size="9" font-family="sans-serif">300</text>
  <!-- Bars: width = 36, gap = 16 -->
  <!-- Kota A: 280 -> height = 112 -> y = 58 -->
  <rect x="70" y="58" width="36" height="112" rx="4" fill="#38bdf8"/>
  <text x="88" y="52" fill="#38bdf8" font-size="9" font-family="sans-serif" text-anchor="middle" font-weight="bold">280</text>
  <text x="88" y="186" fill="#f8fafc" font-size="10" font-family="sans-serif" text-anchor="middle">Kota A</text>
  <!-- Kota B: 310 -> height = 124 -> y = 46 -->
  <rect x="122" y="46" width="36" height="124" rx="4" fill="#6366f1"/>
  <text x="140" y="40" fill="#6366f1" font-size="9" font-family="sans-serif" text-anchor="middle" font-weight="bold">310</text>
  <text x="140" y="186" fill="#f8fafc" font-size="10" font-family="sans-serif" text-anchor="middle">Kota B</text>
  <!-- Kota C: x (terhapus) -> striped pattern or question mark, estimated 250 -> height = 100 -> y = 70 -->
  <rect x="174" y="70" width="36" height="100" rx="4" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3"/>
  <text x="192" y="120" fill="#f59e0b" font-size="16" font-family="sans-serif" text-anchor="middle" font-weight="bold">?</text>
  <text x="192" y="186" fill="#f59e0b" font-size="10" font-family="sans-serif" text-anchor="middle" font-weight="bold">Kota C</text>
  <!-- Kota D: 240 -> height = 96 -> y = 74 -->
  <rect x="226" y="74" width="36" height="96" rx="4" fill="#10b981"/>
  <text x="244" y="68" fill="#10b981" font-size="9" font-family="sans-serif" text-anchor="middle" font-weight="bold">240</text>
  <text x="244" y="186" fill="#f8fafc" font-size="10" font-family="sans-serif" text-anchor="middle">Kota D</text>
  <!-- Kota E: 170 -> height = 68 -> y = 102 -->
  <rect x="278" y="102" width="36" height="68" rx="4" fill="#ec4899"/>
  <text x="296" y="96" fill="#ec4899" font-size="9" font-family="sans-serif" text-anchor="middle" font-weight="bold">170</text>
  <text x="296" y="186" fill="#f8fafc" font-size="10" font-family="sans-serif" text-anchor="middle">Kota E</text>
</svg></div>`;

dataQs[0].question_text = `Perhatikan diagram batang data kependudukan lima kota penyangga berikut:

${svgBarPopulasi}

Tabel berikut menyajikan data jumlah penduduk di lima kota penyangga kawasan metropolitan (Kota A, Kota B, Kota C, Kota D, dan Kota E) berdasarkan hasil sensus kependudukan. Namun, data populasi untuk Kota C terhapus akibat kendala teknis sistem pengarsipan.

| Kota | Jumlah Penduduk (Jiwa) |
| :--- | :--- |
| Kota A | $280.000$ |
| Kota B | $310.000$ |
| Kota C | $x$ (terhapus) |
| Kota D | $240.000$ |
| Kota E | $170.000$ |

Jika total populasi kelima kota tersebut adalah $1.250.000\\text{ jiwa}$, maka jumlah penduduk Kota C dan persentasenya terhadap total populasi kelima kota berturut-turut adalah ...`;

// Q2: Line Chart Penjualan Gabah (Jan: 120, Feb: 150, Mar: 135, Apr: 180, Mei: 144, Jun: 216)
const svgLineGabah = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 210" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="210" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Axes: Origin (50, 170) -->
  <line x1="50" y1="170" x2="330" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="50" y1="170" x2="50" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="35" y="24" fill="#94a3b8" font-size="9" font-family="sans-serif">Ton</text>
  <!-- Gridlines Y: 100->130, 150->97, 200->64 -->
  <line x1="50" y1="130" x2="330" y2="130" stroke="#1e293b" stroke-width="1"/>
  <text x="25" y="133" fill="#64748b" font-size="9" font-family="sans-serif">100</text>
  <line x1="50" y1="97" x2="330" y2="97" stroke="#1e293b" stroke-width="1"/>
  <text x="25" y="100" fill="#64748b" font-size="9" font-family="sans-serif">150</text>
  <line x1="50" y1="64" x2="330" y2="64" stroke="#1e293b" stroke-width="1"/>
  <text x="25" y="67" fill="#64748b" font-size="9" font-family="sans-serif">200</text>
  <!-- Line points:
       Jan (80, 117) - 120
       Feb (125, 97) - 150
       Mar (170, 107) - 135
       Apr (215, 77) - 180
       Mei (260, 101) - 144
       Jun (305, 53) - 216
  -->
  <polyline points="80,117 125,97 170,107 215,77 260,101 305,53" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <!-- Data dots and text -->
  <circle cx="80" cy="117" r="4" fill="#38bdf8"/>
  <text x="80" y="110" fill="#38bdf8" font-size="9" font-family="sans-serif" text-anchor="middle">120</text>
  <text x="80" y="186" fill="#f8fafc" font-size="9" font-family="sans-serif" text-anchor="middle">Jan</text>
  <circle cx="125" cy="97" r="4" fill="#38bdf8"/>
  <text x="125" y="90" fill="#38bdf8" font-size="9" font-family="sans-serif" text-anchor="middle">150</text>
  <text x="125" y="186" fill="#f8fafc" font-size="9" font-family="sans-serif" text-anchor="middle">Feb</text>
  <circle cx="170" cy="107" r="4" fill="#38bdf8"/>
  <text x="170" y="122" fill="#38bdf8" font-size="9" font-family="sans-serif" text-anchor="middle">135</text>
  <text x="170" y="186" fill="#f8fafc" font-size="9" font-family="sans-serif" text-anchor="middle">Mar</text>
  <circle cx="215" cy="77" r="4" fill="#38bdf8"/>
  <text x="215" y="70" fill="#38bdf8" font-size="9" font-family="sans-serif" text-anchor="middle">180</text>
  <text x="215" y="186" fill="#f8fafc" font-size="9" font-family="sans-serif" text-anchor="middle">Apr</text>
  <circle cx="260" cy="101" r="4" fill="#38bdf8"/>
  <text x="260" y="116" fill="#38bdf8" font-size="9" font-family="sans-serif" text-anchor="middle">144</text>
  <text x="260" y="186" fill="#f8fafc" font-size="9" font-family="sans-serif" text-anchor="middle">Mei</text>
  <circle cx="305" cy="53" r="4" fill="#f59e0b"/>
  <text x="305" y="45" fill="#f59e0b" font-size="10" font-family="sans-serif" text-anchor="middle" font-weight="bold">216</text>
  <text x="305" y="186" fill="#f8fafc" font-size="9" font-family="sans-serif" text-anchor="middle">Jun</text>
</svg></div>`;

dataQs[1].question_text = `Perhatikan grafik garis tren volume penjualan gabah kering panen berikut:

${svgLineGabah}

Sebuah koperasi tani mencatat volume penjualan gabah kering panen (dalam satuan ton) selama semester pertama tahun 2025 seperti disajikan pada tabel berikut:

| Bulan | Volume Penjualan (Ton) |
| :--- | :--- |
| Januari | $120$ |
| Februari | $150$ |
| Maret | $135$ |
| April | $180$ |
| Mei | $144$ |
| Juni | $216$ |

Peningkatan persentase penjualan terbesar terhadap bulan sebelumnya terjadi pada periode bulan ...`;

// Q3: Pie Chart Alokasi Dana Riset Rp18 Miliar (Biotek 100°, Energi 80°, Material 60°, Robotika 40°, AI 80°)
const svgPieRiset = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 210" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="210" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Center (120, 105), Radius = 75 -->
  <!-- Slices:
       1. Bioteknologi (100°: from -90° to 10°): start (120, 30), end (120+75*cos(10°), 105+75*sin(10°)) = (193.8, 118)
       2. Energi (80°: from 10° to 90°): end (120, 180)
       3. Material (60°: from 90° to 150°): end (120+75*cos(150°), 105+75*sin(150°)) = (55, 142.5)
       4. Robotika (40°: from 150° to 190°): end (120+75*cos(190°), 105+75*sin(190°)) = (46, 92)
       5. AI (80°: from 190° to 270°/-90°): back to (120, 30)
  -->
  <path d="M 120,105 L 120,30 A 75 75 0 0 1 193.8,118 Z" fill="#38bdf8"/>
  <path d="M 120,105 L 193.8,118 A 75 75 0 0 1 120,180 Z" fill="#10b981"/>
  <path d="M 120,105 L 120,180 A 75 75 0 0 1 55,142.5 Z" fill="#f59e0b"/>
  <path d="M 120,105 L 55,142.5 A 75 75 0 0 1 46,92 Z" fill="#ec4899"/>
  <path d="M 120,105 L 46,92 A 75 75 0 0 1 120,30 Z" fill="#8b5cf6"/>
  <!-- Center circle hole for donut style -->
  <circle cx="120" cy="105" r="28" fill="#0f172a"/>
  <text x="120" y="109" fill="#f8fafc" font-size="9" font-family="sans-serif" text-anchor="middle" font-weight="bold">18 M</text>
  <!-- Legend right side -->
  <rect x="220" y="32" width="12" height="12" rx="2" fill="#38bdf8"/>
  <text x="238" y="42" fill="#f8fafc" font-size="10" font-family="sans-serif">Bioteknologi (100°)</text>
  <rect x="220" y="58" width="12" height="12" rx="2" fill="#10b981"/>
  <text x="238" y="68" fill="#f8fafc" font-size="10" font-family="sans-serif">Energi (80°)</text>
  <rect x="220" y="84" width="12" height="12" rx="2" fill="#f59e0b"/>
  <text x="238" y="94" fill="#f8fafc" font-size="10" font-family="sans-serif">Material (60°)</text>
  <rect x="220" y="110" width="12" height="12" rx="2" fill="#ec4899"/>
  <text x="238" y="120" fill="#f8fafc" font-size="10" font-family="sans-serif">Robotika (40°)</text>
  <rect x="220" y="136" width="12" height="12" rx="2" fill="#8b5cf6"/>
  <text x="238" y="146" fill="#f8fafc" font-size="10" font-family="sans-serif" font-weight="bold">AI / x° (sisanya)</text>
</svg></div>`;

dataQs[2].question_text = `Perhatikan diagram lingkaran alokasi dana riset lima bidang berikut:

${svgPieRiset}

Sebuah lembaga penelitian mengalokasikan total dana riset sebesar $\\text{Rp}18.000.000.000,00$ untuk lima bidang fokus. Distribusi alokasi disajikan dalam diagram lingkaran dengan sudut pusat masing-masing bidang sebagai berikut:
- Bioteknologi: $100^\\circ$
- Energi Terbarukan: $80^\\circ$
- Material Maju: $60^\\circ$
- Robotika Otomasi: $40^\\circ$
- Kecerdasan Buatan (AI): sisanya ($x^\\circ$)

Jika pada pertengahan tahun diputuskan dana riset untuk bidang Kecerdasan Buatan (AI) ditambah sebesar $20\\%$ yang diambil dari realokasi efisiensi pos lain, maka besar alokasi anggaran baru untuk bidang Kecerdasan Buatan adalah ...`;

fs.writeFileSync(dataPath, JSON.stringify(dataQs, null, 2), 'utf-8');
console.log('Updated penyajian-data.json with SVGs');
