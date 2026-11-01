import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const fungsiPath = path.join(rootDir, 'docs', 'data', 'questions', 'domain-range-grafik-fungsi.json');
const fungsi = JSON.parse(fs.readFileSync(fungsiPath, 'utf-8'));

// Soal 2: Parabola f(x) = -2x^2 + 8x - 6, Puncak (2, 2), Titik potong (1,0) dan (3,0)
const svgParabola = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 220" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Axes: Origin (100, 150), dx=40 per unit, dy=35 per unit -->
  <line x1="20" y1="150" x2="330" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="100" y1="210" x2="100" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="335" y="154" fill="#94a3b8" font-size="12" font-family="sans-serif">X</text>
  <text x="96" y="16" fill="#94a3b8" font-size="12" font-family="sans-serif">Y</text>
  <!-- Parabola path:
       x=0 -> y=-6 (100, 360) out of view
       x=0.5 -> y=-2.5 -> (120, 237.5)
       x=1 -> y=0 -> (140, 150)
       x=2 -> y=2 -> (180, 80)
       x=3 -> y=0 -> (220, 150)
       x=3.5 -> y=-2.5 -> (240, 237.5)
  -->
  <path d="M 115,220 Q 180, -60 245,220" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Axis of symmetry: x=2 -> x=180 -->
  <line x1="180" y1="40" x2="180" y2="200" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="185" y="55" fill="#f59e0b" font-size="10" font-family="sans-serif">x = 2</text>
  <!-- Peak Point (2, 2) -> (180, 80) -->
  <circle cx="180" cy="80" r="4.5" fill="#f43f5e"/>
  <text x="188" y="82" fill="#f8fafc" font-size="11" font-family="sans-serif" font-weight="bold">Puncak (2, 2)</text>
  <!-- Intercepts (1,0) and (3,0) -->
  <circle cx="140" cy="150" r="4" fill="#10b981"/>
  <text x="130" y="168" fill="#f8fafc" font-size="10" font-family="sans-serif">(1,0)</text>
  <circle cx="220" cy="150" r="4" fill="#10b981"/>
  <text x="220" y="168" fill="#f8fafc" font-size="10" font-family="sans-serif">(3,0)</text>
  <!-- Function label -->
  <text x="240" y="70" fill="#38bdf8" font-size="11" font-family="sans-serif">f(x) = -2x² + 8x - 6</text>
</svg></div>`;

fungsi[1].question_text = `Perhatikan grafik kurva parabola fungsi kuadrat pada bidang Cartesius berikut:

${svgParabola}

Diberikan fungsi kuadrat:
$$f(x) = -2x^2 + 8x - 6$$
Pernyataan yang **BENAR** mengenai karakteristik kurva parabola fungsi tersebut adalah ...`;

// Soal 5: Hiperbola Rasional f(x) = (3x - 6)/(x + 2), Asimtot x=-2, y=3
const svgRasional = `<div class="flex justify-center my-4 overflow-x-auto"><svg viewBox="0 0 360 220" class="w-full max-w-md h-auto drop-shadow-md rounded-lg" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="220" fill="#0f172a" rx="8" stroke="#334155" stroke-width="1.5"/>
  <!-- Axes: Origin (180, 130), dx=25 per unit, dy=20 per unit -->
  <line x1="20" y1="130" x2="340" y2="130" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="180" y1="210" x2="180" y2="15" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="345" y="134" fill="#94a3b8" font-size="12" font-family="sans-serif">X</text>
  <text x="176" y="12" fill="#94a3b8" font-size="12" font-family="sans-serif">Y</text>
  <!-- Asymptotes:
       x = -2 -> 180 - 50 = 130
       y = 3 -> 130 - 60 = 70
  -->
  <line x1="130" y1="15" x2="130" y2="210" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="75" y="30" fill="#f59e0b" font-size="10" font-family="sans-serif">Asimtot x = -2</text>
  <line x1="20" y1="70" x2="340" y2="70" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="250" y="62" fill="#f59e0b" font-size="10" font-family="sans-serif">Asimtot y = 3</text>
  <!-- Curve branch 1 (x > -2): passes (0, -3) -> (180, 190), (2, 0) -> (230, 130), (6, 1.5) -> (330, 100) -->
  <path d="M 145,210 Q 155,145 230,130 T 340,78" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Curve branch 2 (x < -2): passes (-4, 9) -> (80, -50), (-3, 15), (-6, 6) -> (30, 10) -->
  <path d="M 20,62 Q 95,60 115,15" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Key points -->
  <circle cx="230" cy="130" r="3.5" fill="#10b981"/>
  <text x="228" y="146" fill="#f8fafc" font-size="9" font-family="sans-serif">(2, 0)</text>
  <circle cx="180" cy="190" r="3.5" fill="#10b981"/>
  <text x="190" y="195" fill="#f8fafc" font-size="9" font-family="sans-serif">(0, -3)</text>
  <text x="210" y="105" fill="#38bdf8" font-size="11" font-family="sans-serif">f(x) = (3x - 6)/(x + 2)</text>
</svg></div>`;

fungsi[4].question_text = `Perhatikan grafik kurva fungsi rasional beserta garis-garis asimtotnya berikut:

${svgRasional}

Diberikan fungsi rasional:
$$f(x) = \\frac{3x - 6}{x + 2}$$
Pilihlah **SEMUA** pernyataan di bawah ini yang bernilai **BENAR** mengenai asimtot, daerah asal, dan daerah hasil fungsi tersebut!`;

fs.writeFileSync(fungsiPath, JSON.stringify(fungsi, null, 2), 'utf-8');
console.log('Updated domain-range-grafik-fungsi.json with SVGs');
