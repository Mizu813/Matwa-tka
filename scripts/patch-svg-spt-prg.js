import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Patch sistem-pertidaksamaan-linear
const sptPath = path.join(rootDir, 'docs', 'data', 'questions', 'sistem-pertidaksamaan-linear.json');
const spt = JSON.parse(fs.readFileSync(sptPath, 'utf-8'));

// Soal 2: Poligon (0,0), (4,0), (2,3), (0,3)
const svgSptQ2 = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 220" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Grid -->
  <line x1="60" y1="20" x2="60" y2="180" stroke="#1e293b" stroke-width="1"/>
  <line x1="120" y1="20" x2="120" y2="180" stroke="#1e293b" stroke-width="1"/>
  <line x1="180" y1="20" x2="180" y2="180" stroke="#1e293b" stroke-width="1"/>
  <line x1="240" y1="20" x2="240" y2="180" stroke="#1e293b" stroke-width="1"/>
  <line x1="300" y1="20" x2="300" y2="180" stroke="#1e293b" stroke-width="1"/>
  <!-- Axes -->
  <line x1="40" y1="180" x2="330" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="60" y1="200" x2="60" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="335" y="184" fill="#94a3b8" font-size="12" font-family="sans-serif">X</text>
  <text x="56" y="16" fill="#94a3b8" font-size="12" font-family="sans-serif">Y</text>
  <!-- Scale: Origin (60, 180), dx=50 per unit, dy=40 per unit -->
  <!-- (0,0)->(60,180), (4,0)->(260,180), (2,3)->(160,60), (0,3)->(60,60) -->
  <polygon points="60,180 260,180 160,60 60,60" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2"/>
  <!-- Boundary lines extension -->
  <line x1="40" y1="60" x2="220" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="225" y="64" fill="#f59e0b" font-size="11" font-family="sans-serif">y = 3</text>
  <line x1="130" y1="24" x2="280" y2="204" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="250" y="140" fill="#ec4899" font-size="11" font-family="sans-serif">3x + 2y = 12</text>
  <!-- Vertices -->
  <circle cx="60" cy="180" r="4" fill="#38bdf8"/>
  <text x="45" y="195" fill="#f8fafc" font-size="10" font-family="sans-serif">(0,0)</text>
  <circle cx="260" cy="180" r="4" fill="#38bdf8"/>
  <text x="255" y="198" fill="#f8fafc" font-size="10" font-family="sans-serif">(4,0)</text>
  <circle cx="160" cy="60" r="4" fill="#38bdf8"/>
  <text x="165" y="55" fill="#f8fafc" font-size="10" font-family="sans-serif">(2,3)</text>
  <circle cx="60" cy="60" r="4" fill="#38bdf8"/>
  <text x="32" y="64" fill="#f8fafc" font-size="10" font-family="sans-serif">(0,3)</text>
  <text x="110" y="125" fill="#38bdf8" font-size="13" font-family="sans-serif" font-weight="bold">DHP</text>
</svg></div>`;

spt[1].question_text = `Perhatikan grafik daerah himpunan penyelesaian (DHP) pada bidang koordinat Cartesius berikut:

${svgSptQ2}

Daerah penyelesaian dari suatu masalah program linear berada di Kuadran I dan dibatasi oleh titik-titik sudut $(0, 0)$, $(4, 0)$, $(2, 3)$, dan $(0, 3)$. Sistem pertidaksamaan linear yang merepresentasikan daerah tertutup tersebut adalah ...`;

// Soal 3: Luas daerah tertutup belah ketupat rotasi
const svgSptQ3 = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 220" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Axes: Center at (160, 120), scale: 22 px per unit -->
  <line x1="30" y1="120" x2="330" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="160" y1="205" x2="160" y2="15" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="335" y="124" fill="#94a3b8" font-size="12" font-family="sans-serif">X</text>
  <text x="156" y="12" fill="#94a3b8" font-size="12" font-family="sans-serif">Y</text>
  <!-- Region vertices: (2,0)->(204,120), (4,2)->(248,76), (2,4)->(204,32), (0,2)->(160,76) -->
  <polygon points="204,120 248,76 204,32 160,76" fill="#10b981" fill-opacity="0.3" stroke="#10b981" stroke-width="2"/>
  <!-- Coordinate ticks -->
  <circle cx="204" cy="120" r="3.5" fill="#10b981"/>
  <text x="200" y="135" fill="#f8fafc" font-size="10" font-family="sans-serif">(2,0)</text>
  <circle cx="248" cy="76" r="3.5" fill="#10b981"/>
  <text x="254" y="80" fill="#f8fafc" font-size="10" font-family="sans-serif">(4,2)</text>
  <circle cx="204" cy="32" r="3.5" fill="#10b981"/>
  <text x="200" y="24" fill="#f8fafc" font-size="10" font-family="sans-serif">(2,4)</text>
  <circle cx="160" cy="76" r="3.5" fill="#10b981"/>
  <text x="130" y="80" fill="#f8fafc" font-size="10" font-family="sans-serif">(0,2)</text>
  <!-- Boundary lines -->
  <line x1="130" y1="150" x2="270" y2="10" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3"/>
  <line x1="130" y1="106" x2="270" y2="-34" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3"/>
  <text x="195" y="80" fill="#10b981" font-size="12" font-family="sans-serif" font-weight="bold">DHP</text>
</svg></div>`;

spt[2].question_text = `Perhatikan sketsa grafik daerah tertutup pada bidang koordinat Cartesius berikut:

${svgSptQ3}

Luas daerah tertutup (dalam satuan luas) yang dibatasi oleh sistem pertidaksamaan linear berikut:
$$\\begin{cases} x + y \\ge 2 \\\\ x + y \\le 6 \\\\ x - y \\le 2 \\\\ y - x \\le 2 \\end{cases}$$
adalah ...`;

fs.writeFileSync(sptPath, JSON.stringify(spt, null, 2), 'utf-8');
console.log('Updated sistem-pertidaksamaan-linear.json with SVGs');

// 2. Patch program-linear
const prgPath = path.join(rootDir, 'docs', 'data', 'questions', 'program-linear.json');
const prg = JSON.parse(fs.readFileSync(prgPath, 'utf-8'));

// Soal 3: Segitiga A(1,4), B(5,2), C(2,1)
const svgPrgQ3 = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 220" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Axes: Origin (50, 190), dx=48 per unit, dy=36 per unit -->
  <line x1="30" y1="190" x2="330" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="50" y1="210" x2="50" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="335" y="194" fill="#94a3b8" font-size="12" font-family="sans-serif">X</text>
  <text x="46" y="16" fill="#94a3b8" font-size="12" font-family="sans-serif">Y</text>
  <!-- Points: A(1,4)->(98, 46), B(5,2)->(290, 118), C(2,1)->(146, 154) -->
  <polygon points="98,46 290,118 146,154" fill="#6366f1" fill-opacity="0.3" stroke="#6366f1" stroke-width="2"/>
  <!-- Vertices -->
  <circle cx="98" cy="46" r="4" fill="#a855f7"/>
  <text x="75" y="42" fill="#f8fafc" font-size="11" font-family="sans-serif" font-weight="bold">A(1, 4)</text>
  <circle cx="290" cy="118" r="4" fill="#a855f7"/>
  <text x="295" y="122" fill="#f8fafc" font-size="11" font-family="sans-serif" font-weight="bold">B(5, 2)</text>
  <circle cx="146" cy="154" r="4" fill="#a855f7"/>
  <text x="140" y="174" fill="#f8fafc" font-size="11" font-family="sans-serif" font-weight="bold">C(2, 1)</text>
  <text x="175" y="105" fill="#c084fc" font-size="13" font-family="sans-serif" font-weight="bold">Daerah Layak</text>
</svg></div>`;

prg[2].question_text = `Perhatikan daerah feasible penyelesaian berbentuk segitiga pada bidang Cartesius berikut:

${svgPrgQ3}

Diberikan daerah himpunan penyelesaian tertutup berbentuk segitiga yang dibatasi oleh tiga titik pojok $A(1, 4)$, $B(5, 2)$, dan $C(2, 1)$. Fungsi objektif yang akan dimaksimalkan pada daerah tersebut adalah:
$$Z = ax + 2y$$
dengan parameter $a > 0$.

Agar nilai maksimum fungsi objektif $Z$ tercapai di titik pojok $B(5, 2)$ secara tunggal, interval nilai parameter $a$ yang memenuhi adalah ...`;

// Soal 5: Daerah pembatas x+y <= 8, 2x+y <= 12, x>=0, y>=0
const svgPrgQ5 = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 220" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Axes: Origin (60, 190), dx=25 per unit, dy=14 per unit -->
  <line x1="40" y1="190" x2="330" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="60" y1="210" x2="60" y2="15" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="335" y="194" fill="#94a3b8" font-size="12" font-family="sans-serif">X</text>
  <text x="56" y="12" fill="#94a3b8" font-size="12" font-family="sans-serif">Y</text>
  <!-- Lines: x+y=8 -> (60, 78) to (260, 190) -->
  <!-- 2x+y=12 -> (60, 22) to (210, 190) -->
  <!-- Intersection: (4,4) -> (60 + 100, 190 - 56) = (160, 134) -->
  <polygon points="60,190 210,190 160,134 60,78" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2"/>
  <line x1="50" y1="71" x2="270" y2="197" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="265" y="180" fill="#f59e0b" font-size="10" font-family="sans-serif">x + y = 8</text>
  <line x1="55" y1="14" x2="220" y2="202" stroke="#ec4899" stroke-width="1.5"/>
  <text x="175" y="40" fill="#ec4899" font-size="10" font-family="sans-serif">2x + y = 12</text>
  <!-- Points -->
  <circle cx="60" cy="190" r="3.5" fill="#38bdf8"/>
  <text x="42" y="204" fill="#f8fafc" font-size="9" font-family="sans-serif">(0,0)</text>
  <circle cx="210" cy="190" r="3.5" fill="#38bdf8"/>
  <text x="205" y="205" fill="#f8fafc" font-size="9" font-family="sans-serif">(6,0)</text>
  <circle cx="160" cy="134" r="3.5" fill="#38bdf8"/>
  <text x="168" y="132" fill="#f8fafc" font-size="9" font-family="sans-serif">(4,4)</text>
  <circle cx="60" cy="78" r="3.5" fill="#38bdf8"/>
  <text x="35" y="82" fill="#f8fafc" font-size="9" font-family="sans-serif">(0,8)</text>
  <text x="100" y="150" fill="#38bdf8" font-size="12" font-family="sans-serif" font-weight="bold">Feasible</text>
</svg></div>`;

prg[4].question_text = `Perhatikan daerah penyelesaian layak (*feasible region*) sistem pertidaksamaan berikut:

${svgPrgQ5}

Diberikan sistem pertidaksamaan linear:
$$\\begin{cases} x + y \\le 8 \\\\ 2x + y \\le 12 \\\\ x \\ge 0, \\quad y \\ge 0 \\end{cases}$$
dengan fungsi tujuan $Z = 5x + 3y$.

Pilihlah **SEMUA** pernyataan di bawah ini yang bernilai **BENAR** mengenai hasil optimasi!`;

fs.writeFileSync(prgPath, JSON.stringify(prg, null, 2), 'utf-8');
console.log('Updated program-linear.json with SVGs');
