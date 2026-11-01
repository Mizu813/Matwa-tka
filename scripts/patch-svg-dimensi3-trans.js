import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. jarak-dimensi-tiga
const jarakPath = path.join(rootDir, 'docs', 'data', 'questions', 'jarak-dimensi-tiga.json');
const jarak = JSON.parse(fs.readFileSync(jarakPath, 'utf-8'));

// Q1: Kubus ABCD.EFGH dengan titik M tengah EH dan ruas garis BM
const svgKubusBM = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 340 220" class="w-full max-w-sm h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="340" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Front face: A(70,165), B(190,165), F(190,75), E(70,75) -->
  <polygon points="70,165 190,165 190,75 70,75" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Back edges (dashed): D(130,125), C(250,125), H(130,35) -->
  <line x1="70" y1="165" x2="130" y2="125" stroke="#475569" stroke-width="1.2" stroke-dasharray="3"/>
  <line x1="130" y1="125" x2="250" y2="125" stroke="#475569" stroke-width="1.2" stroke-dasharray="3"/>
  <line x1="130" y1="125" x2="130" y2="35" stroke="#475569" stroke-width="1.2" stroke-dasharray="3"/>
  <!-- Top and right edges -->
  <line x1="70" y1="75" x2="130" y2="35" stroke="#64748b" stroke-width="1.5"/>
  <line x1="130" y1="35" x2="250" y2="35" stroke="#64748b" stroke-width="1.5"/>
  <line x1="190" y1="75" x2="250" y2="35" stroke="#64748b" stroke-width="1.5"/>
  <line x1="190" y1="165" x2="250" y2="125" stroke="#64748b" stroke-width="1.5"/>
  <line x1="250" y1="125" x2="250" y2="35" stroke="#64748b" stroke-width="1.5"/>
  <!-- Point M: midpoint of EH, between (70,75) and (130,35) -> (100, 55) -->
  <circle cx="100" cy="55" r="4.5" fill="#f59e0b"/>
  <text x="92" y="45" fill="#f59e0b" font-size="11" font-family="sans-serif" font-weight="bold">M</text>
  <!-- Line BM: from B(190,165) to M(100,55) -->
  <line x1="190" y1="165" x2="100" y2="55" stroke="#f43f5e" stroke-width="2.5"/>
  <circle cx="190" cy="165" r="4" fill="#38bdf8"/>
  <!-- Labels -->
  <text x="55" y="175" fill="#94a3b8" font-size="11" font-family="sans-serif">A</text>
  <text x="195" y="180" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold">B</text>
  <text x="255" y="130" fill="#94a3b8" font-size="11" font-family="sans-serif">C</text>
  <text x="120" y="135" fill="#94a3b8" font-size="11" font-family="sans-serif">D</text>
  <text x="55" y="75" fill="#94a3b8" font-size="11" font-family="sans-serif">E</text>
  <text x="195" y="70" fill="#94a3b8" font-size="11" font-family="sans-serif">F</text>
  <text x="255" y="30" fill="#94a3b8" font-size="11" font-family="sans-serif">G</text>
  <text x="135" y="30" fill="#94a3b8" font-size="11" font-family="sans-serif">H</text>
  <text x="170" y="210" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Kubus rusuk s = 8 cm, M titik tengah EH</text>
</svg></div>`;

jarak[0].question_text = `Perhatikan gambar kubus $ABCD.EFGH$ dengan ruas garis $BM$ berikut:

${svgKubusBM}

Diberikan kubus $ABCD.EFGH$ dengan panjang rusuk $8\\text{ cm}$. Titik $M$ merupakan titik tengah rusuk $EH$. Jarak dari titik sudut $B$ ke titik $M$ adalah ...`;

// Q2: Kubus dengan diagonal ruang AG dan proyeksi titik C
const svgKubusAG = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 340 220" class="w-full max-w-sm h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="340" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Front face: A(70,165), B(190,165), F(190,75), E(70,75) -->
  <polygon points="70,165 190,165 190,75 70,75" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <line x1="70" y1="165" x2="130" y2="125" stroke="#475569" stroke-width="1.2" stroke-dasharray="3"/>
  <line x1="130" y1="125" x2="250" y2="125" stroke="#475569" stroke-width="1.2" stroke-dasharray="3"/>
  <line x1="130" y1="125" x2="130" y2="35" stroke="#475569" stroke-width="1.2" stroke-dasharray="3"/>
  <line x1="70" y1="75" x2="130" y2="35" stroke="#64748b" stroke-width="1.5"/>
  <line x1="130" y1="35" x2="250" y2="35" stroke="#64748b" stroke-width="1.5"/>
  <line x1="190" y1="75" x2="250" y2="35" stroke="#64748b" stroke-width="1.5"/>
  <line x1="190" y1="165" x2="250" y2="125" stroke="#64748b" stroke-width="1.5"/>
  <line x1="250" y1="125" x2="250" y2="35" stroke="#64748b" stroke-width="1.5"/>
  <!-- Space Diagonal AG: from A(70,165) to G(250,35) -->
  <line x1="70" y1="165" x2="250" y2="35" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4"/>
  <!-- Point C(250, 125) and projection perpendicular to AG -->
  <!-- Midpoint approx along AG near C: (190, 78) -->
  <line x1="250" y1="125" x2="190" y2="78" stroke="#f43f5e" stroke-width="2.2"/>
  <circle cx="250" cy="125" r="4.5" fill="#f43f5e"/>
  <circle cx="190" cy="78" r="3.5" fill="#f59e0b"/>
  <!-- Labels -->
  <text x="55" y="175" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold">A</text>
  <text x="255" y="130" fill="#f43f5e" font-size="11" font-family="sans-serif" font-weight="bold">C</text>
  <text x="255" y="30" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold">G</text>
  <text x="180" y="70" fill="#f59e0b" font-size="10" font-family="sans-serif">C'</text>
  <text x="170" y="210" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Jarak titik C ke diagonal ruang AG pada kubus s = 6 cm</text>
</svg></div>`;

jarak[1].question_text = `Perhatikan ilustrasi diagonal ruang $AG$ dan proyeksi titik sudut $C$ pada kubus berikut:

${svgKubusAG}

Diberikan kubus $ABCD.EFGH$ dengan panjang rusuk $6\\text{ cm}$. Jarak dari titik sudut $C$ ke diagonal ruang $AG$ adalah ...`;

// Q3: Limas beraturan T.ABCD
const svgLimas = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 340 220" class="w-full max-w-sm h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="340" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Apex T(170, 25) -->
  <!-- Base vertices: A(70, 160), B(190, 175), C(270, 140), D(150, 125) -->
  <!-- Back edges (dashed) -->
  <line x1="150" y1="125" x2="70" y2="160" stroke="#475569" stroke-width="1.2" stroke-dasharray="3"/>
  <line x1="150" y1="125" x2="270" y2="140" stroke="#475569" stroke-width="1.2" stroke-dasharray="3"/>
  <line x1="170" y1="25" x2="150" y2="125" stroke="#475569" stroke-width="1.2" stroke-dasharray="3"/>
  <!-- Front base edges -->
  <line x1="70" y1="160" x2="190" y2="175" stroke="#64748b" stroke-width="1.5"/>
  <line x1="190" y1="175" x2="270" y2="140" stroke="#64748b" stroke-width="1.5"/>
  <!-- Lateral edges -->
  <line x1="170" y1="25" x2="70" y2="160" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="25" x2="190" y2="175" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="25" x2="270" y2="140" stroke="#64748b" stroke-width="1.5"/>
  <!-- Center O(170, 150), Height TO -->
  <line x1="170" y1="25" x2="170" y2="150" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3"/>
  <!-- Midpoint E of AB: A(70,160) and B(190,175) -> E(130, 167.5) -->
  <line x1="170" y1="25" x2="130" y2="168" stroke="#f43f5e" stroke-width="2.2"/>
  <line x1="170" y1="150" x2="130" y2="168" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3"/>
  <circle cx="130" cy="168" r="3.5" fill="#f59e0b"/>
  <!-- Labels -->
  <text x="170" y="18" fill="#f8fafc" font-size="12" font-family="sans-serif" text-anchor="middle" font-weight="bold">T</text>
  <text x="55" y="165" fill="#94a3b8" font-size="11" font-family="sans-serif">A</text>
  <text x="195" y="190" fill="#94a3b8" font-size="11" font-family="sans-serif">B</text>
  <text x="278" y="145" fill="#94a3b8" font-size="11" font-family="sans-serif">C</text>
  <text x="140" y="122" fill="#94a3b8" font-size="11" font-family="sans-serif">D</text>
  <text x="125" y="182" fill="#f59e0b" font-size="10" font-family="sans-serif">E</text>
  <text x="175" y="95" fill="#38bdf8" font-size="10" font-family="sans-serif">t = 8</text>
  <text x="135" y="90" fill="#f43f5e" font-size="11" font-family="sans-serif" font-weight="bold">Apotema TE</text>
  <text x="170" y="212" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Limas beraturan T.ABCD, rusuk alas 12 cm, tinggi TO = 8 cm</text>
</svg></div>`;

jarak[2].question_text = `Perhatikan visualisasi limas segiempat beraturan $T.ABCD$ dengan garis apotema $TE$ berikut:

${svgLimas}

Diberikan limas beraturan $T.ABCD$ dengan alas berbentuk persegi. Panjang rusuk alas $AB = 12\\text{ cm}$ dan tinggi limas $TO = 8\\text{ cm}$. Jarak dari titik puncak $T$ ke rusuk alas $AB$ (panjang apotema) adalah ...`;

fs.writeFileSync(jarakPath, JSON.stringify(jarak, null, 2), 'utf-8');
console.log('Updated jarak-dimensi-tiga.json with SVGs');

// 2. transformasi-geometri
const transPath = path.join(rootDir, 'docs', 'data', 'questions', 'transformasi-geometri.json');
const trans = JSON.parse(fs.readFileSync(transPath, 'utf-8'));

// Q2: Garis 2x - 3y + 6 = 0 dan hasil translasi T=(3, -2)
const svgTranslasiGaris = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 210" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="210" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Axes: Origin (150, 130), dx=24 per unit, dy=20 per unit -->
  <line x1="20" y1="130" x2="340" y2="130" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="150" y1="195" x2="150" y2="15" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="345" y="134" fill="#94a3b8" font-size="12" font-family="sans-serif">X</text>
  <text x="146" y="12" fill="#94a3b8" font-size="12" font-family="sans-serif">Y</text>
  <!-- Line g: 2x - 3y + 6 = 0 -> y = 2/3 x + 2.
       Points: (-3, 0) -> (78, 130), (0, 2) -> (150, 90), (3, 4) -> (222, 50)
  -->
  <line x1="50" y1="148" x2="260" y2="28" stroke="#38bdf8" stroke-width="2.2"/>
  <text x="80" y="115" fill="#38bdf8" font-size="11" font-family="sans-serif">g: 2x - 3y + 6 = 0</text>
  <!-- Line g': 2x - 3y - 6 = 0 -> y = 2/3 x - 2.
       Points: (0, -2) -> (150, 170), (3, 0) -> (222, 130), (6, 2) -> (294, 90)
  -->
  <line x1="100" y1="203" x2="310" y2="83" stroke="#f59e0b" stroke-width="2.2"/>
  <text x="235" y="170" fill="#f59e0b" font-size="11" font-family="sans-serif">g': 2x - 3y - 6 = 0</text>
  <!-- Translation vector arrow from (0,2) to (3,0) -> (150,90) to (222,130) -->
  <line x1="150" y1="90" x2="222" y2="130" stroke="#ec4899" stroke-width="2" stroke-dasharray="3"/>
  <circle cx="150" cy="90" r="3.5" fill="#38bdf8"/>
  <circle cx="222" cy="130" r="3.5" fill="#f59e0b"/>
  <text x="180" y="105" fill="#ec4899" font-size="11" font-family="sans-serif" font-weight="bold">T(3, -2)</text>
</svg></div>`;

trans[1].question_text = `Perhatikan ilustrasi pergeseran garis lurus pada bidang Cartesius berikut:

${svgTranslasiGaris}

Garis $g$ dengan persamaan $2x - 3y + 6 = 0$ ditranslasikan oleh matriks translasi $T = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$. Persamaan bayangan garis $g'$ setelah translasi tersebut adalah ...`;

// Q5: Refleksi Segitiga ABC thd sumbu Y
const svgRefleksiSegitiga = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 210" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="210" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Axes: Center Origin (180, 170), dx=25 per unit, dy=22 per unit -->
  <line x1="20" y1="170" x2="340" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="180" y1="200" x2="180" y2="15" stroke="#f59e0b" stroke-width="2"/>
  <text x="345" y="174" fill="#94a3b8" font-size="12" font-family="sans-serif">X</text>
  <text x="185" y="18" fill="#f59e0b" font-size="11" font-family="sans-serif" font-weight="bold">Cermin: Sumbu Y</text>
  <!-- Original Triangle ABC: A(1,2)->(205,126), B(4,2)->(280,126), C(1,6)->(205,38) -->
  <polygon points="205,126 280,126 205,38" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="205" cy="126" r="3.5" fill="#38bdf8"/>
  <text x="210" y="138" fill="#f8fafc" font-size="10" font-family="sans-serif">A(1,2)</text>
  <circle cx="280" cy="126" r="3.5" fill="#38bdf8"/>
  <text x="282" y="138" fill="#f8fafc" font-size="10" font-family="sans-serif">B(4,2)</text>
  <circle cx="205" cy="38" r="3.5" fill="#38bdf8"/>
  <text x="210" y="35" fill="#f8fafc" font-size="10" font-family="sans-serif">C(1,6)</text>
  <!-- Reflected Triangle A'B'C': A'(-1,2)->(155,126), B'(-4,2)->(80,126), C'(-1,6)->(155,38) -->
  <polygon points="155,126 80,126 155,38" fill="#10b981" fill-opacity="0.25" stroke="#10b981" stroke-width="2"/>
  <circle cx="155" cy="126" r="3.5" fill="#10b981"/>
  <text x="115" y="138" fill="#f8fafc" font-size="10" font-family="sans-serif">A'(-1,2)</text>
  <circle cx="80" cy="126" r="3.5" fill="#10b981"/>
  <text x="45" y="138" fill="#f8fafc" font-size="10" font-family="sans-serif">B'(-4,2)</text>
  <circle cx="155" cy="38" r="3.5" fill="#10b981"/>
  <text x="110" y="35" fill="#f8fafc" font-size="10" font-family="sans-serif">C'(-1,6)</text>
</svg></div>`;

trans[4].question_text = `Perhatikan gambar refleksi bangun segitiga terhadap sumbu Y pada koordinat Cartesius berikut:

${svgRefleksiSegitiga}

Segitiga $ABC$ memiliki titik-titik sudut $A(1, 2)$, $B(4, 2)$, dan $C(1, 6)$. Segitiga tersebut dicerminkan terhadap sumbu Y menghasilkan bayangan $\\triangle A'B'C'$, kemudian bayangan tersebut ditranslasikan oleh $T = \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$ menghasilkan $\\triangle A''B''C''$. Pilihlah **SEMUA** pernyataan di bawah ini yang bernilai **BENAR**!`;

fs.writeFileSync(transPath, JSON.stringify(trans, null, 2), 'utf-8');
console.log('Updated transformasi-geometri.json with SVGs');
