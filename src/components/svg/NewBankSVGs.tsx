import React from 'react';
import { VisualProps } from './VisualSVGs';

/**
 * P1 Soal 10: Garis Sejajar & Sudut Transversal
 */
export const P1Soal10AnglesSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 400 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="400" height="240" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    {/* Two parallel horizontal lines */}
    <line x1="40" y1="70" x2="360" y2="70" stroke="#94a3b8" strokeWidth="2.5" />
    <line x1="40" y1="170" x2="360" y2="170" stroke="#94a3b8" strokeWidth="2.5" />
    {/* Transversal line */}
    <line x1="85" y1="20" x2="315" y2="220" stroke="#f59e0b" strokeWidth="2.5" />

    {/* Upper intersection (x~142, y=70) */}
    <circle cx="142" cy="70" r="4" fill="#f59e0b" />
    <text x="110" y="55" fill="#f1f5f9" fontFamily="sans-serif" fontSize="16" fontWeight="bold">A</text>
    <text x="165" y="55" fill={mode === 'solution' ? '#34d399' : '#38bdf8'} fontFamily="sans-serif" fontSize="16" fontWeight="bold">B</text>
    <text x="115" y="105" fill={mode === 'solution' ? '#34d399' : '#f1f5f9'} fontFamily="sans-serif" fontSize="16" fontWeight="bold">C</text>

    {/* Lower intersection (x~258, y=170) */}
    <circle cx="258" cy="170" r="4" fill="#f59e0b" />
    <text x="280" y="155" fill={mode === 'solution' ? '#34d399' : '#f1f5f9'} fontFamily="sans-serif" fontSize="16" fontWeight="bold">D</text>
    <text x="230" y="205" fill={mode === 'solution' ? '#34d399' : '#f1f5f9'} fontFamily="sans-serif" fontSize="16" fontWeight="bold">E</text>
    <text x="285" y="205" fill="#f1f5f9" fontFamily="sans-serif" fontSize="16" fontWeight="bold">F</text>

    {mode === 'solution' ? (
      <g transform="translate(15, 12)">
        <rect width="370" height="24" rx="4" fill="#064e3b" opacity="0.9" />
        <text x="185" y="17" fill="#6ee7b7" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Sudut Sama Besar: ∠B = ∠C (Bertolak Belakang) = ∠D (Sehadap) = ∠E (Luar Berseberangan)
        </text>
      </g>
    ) : (
      <text x="200" y="230" fill="#64748b" fontSize="10.5" fontFamily="monospace" textAnchor="middle">
        Dua Garis Sejajar Dipotong Garis Transversal
      </text>
    )}
  </svg>
);

/**
 * P1 Soal 11: Kandang Ayam Balok ABCD.EFGH
 */
export const P1Soal11KandangAyamSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 360 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="360" height="220" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    {/* Pintu ABFE (Depan) */}
    <polygon
      points="60,165 210,165 210,75 60,75"
      fill={mode === 'solution' ? 'rgba(59, 130, 246, 0.15)' : 'none'}
      stroke="#3b82f6"
      strokeWidth={mode === 'solution' ? '3' : '2'}
    />
    {/* Sisi Kanan BCGF */}
    <polygon
      points="210,165 295,115 295,25 210,75"
      fill={mode === 'solution' ? 'rgba(16, 185, 129, 0.25)' : 'none'}
      stroke={mode === 'solution' ? '#10b981' : '#94a3b8'}
      strokeWidth={mode === 'solution' ? '2.5' : '1.5'}
    />
    {/* Sisi Atas EFGH */}
    <polygon points="60,75 145,25 295,25 210,75" fill="none" stroke="#64748b" strokeWidth="1.5" />
    {/* Rusuk Belakang Putus-Putus */}
    <line x1="60" y1="165" x2="145" y2="115" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.5" />
    <line x1="145" y1="115" x2="295" y2="115" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.5" />
    <line x1="145" y1="115" x2="145" y2="25" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.5" />

    {/* Labels */}
    <text x="48" y="180" fill="#f1f5f9" fontSize="13" fontWeight="bold">A</text>
    <text x="215" y="180" fill="#f1f5f9" fontSize="13" fontWeight="bold">B</text>
    <text x="302" y="125" fill="#f1f5f9" fontSize="13" fontWeight="bold">C</text>
    <text x="130" y="125" fill="#94a3b8" fontSize="13" fontWeight="bold">D</text>
    <text x="48" y="70" fill="#f1f5f9" fontSize="13" fontWeight="bold">E</text>
    <text x="215" y="70" fill="#f1f5f9" fontSize="13" fontWeight="bold">F</text>
    <text x="302" y="25" fill="#f1f5f9" fontSize="13" fontWeight="bold">G</text>
    <text x="140" y="20" fill="#94a3b8" fontSize="13" fontWeight="bold">H</text>

    {mode === 'solution' ? (
      <g transform="translate(20, 190)">
        <text x="160" y="16" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Tegak Lurus Pintu (ABFE): Sisi Samping ADHE dan BCGF
        </text>
      </g>
    ) : (
      <text x="180" y="205" fill="#38bdf8" fontSize="11" fontFamily="sans-serif" textAnchor="middle">
        Pintu Depan Kandang: Bidang ABFE
      </text>
    )}
  </svg>
);

/**
 * P1 Soal 12: Trapesium Sebangun JKLM & MLNP
 */
export const P1Soal12TrapesiumSebangunSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 360 300" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="360" height="300" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    {/* Trapesium Bawah JKLM */}
    <polygon points="50,245 310,245 250,135 110,135" fill="rgba(30, 41, 59, 0.7)" stroke="#38bdf8" strokeWidth="2" />
    {/* Trapesium Atas MLNP */}
    <polygon points="110,135 250,135 210,65 150,65" fill="rgba(51, 65, 85, 0.7)" stroke="#a855f7" strokeWidth="2" />

    {/* Sumbu Simetri Q-R-S */}
    <line x1="180" y1="245" x2="180" y2="65" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Labels Titik Sudut */}
    <text x="35" y="260" fill="#f1f5f9" fontSize="13" fontWeight="bold">J</text>
    <text x="175" y="265" fill="#f59e0b" fontSize="13" fontWeight="bold">Q</text>
    <text x="315" y="260" fill="#f1f5f9" fontSize="13" fontWeight="bold">K</text>
    <text x="90" y="140" fill="#f1f5f9" fontSize="13" fontWeight="bold">M</text>
    <text x="165" y="130" fill="#f59e0b" fontSize="13" fontWeight="bold">R</text>
    <text x="255" y="140" fill="#f1f5f9" fontSize="13" fontWeight="bold">L</text>
    <text x="135" y="60" fill="#f1f5f9" fontSize="13" fontWeight="bold">P</text>
    <text x="175" y="55" fill="#f59e0b" fontSize="13" fontWeight="bold">S</text>
    <text x="215" y="60" fill="#f1f5f9" fontSize="13" fontWeight="bold">N</text>

    {/* Ukuran */}
    <text x="105" y="260" fill="#94a3b8" fontSize="11">4 cm</text>
    <text x="235" y="260" fill="#94a3b8" fontSize="11">4 cm</text>
    <text x="185" y="195" fill="#94a3b8" fontSize="11">4 cm</text>
    <text x="125" y="150" fill="#94a3b8" fontSize="11">2 cm</text>
    <text x="185" y="105" fill="#94a3b8" fontSize="11">2 cm</text>
    <text x="235" y="100" fill="#c084fc" fontSize="11" fontWeight="bold">√5 cm</text>

    {mode === 'solution' && (
      <g transform="translate(15, 275)">
        <rect width="330" height="20" rx="4" fill="#064e3b" />
        <text x="165" y="14" fill="#6ee7b7" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          JP = JM + MP = 2√5 + √5 = 3√5 cm
        </text>
      </g>
    )}
  </svg>
);

/**
 * P1 Soal 13: Rak Buku Dinding Siluet Rumah
 */
export const P1Soal13RakBukuRumahSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 360 260" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="360" height="260" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    {/* Frame Rumah */}
    <polygon points="40,225 320,225 320,120 180,25 40,120" fill="none" stroke="#d97706" strokeWidth="4" />
    <line x1="40" y1="120" x2="320" y2="120" stroke="#d97706" strokeWidth="3" />

    {/* Kotak Ruang Atas */}
    <polygon points="110,72 250,72 250,120 110,120" fill="rgba(245, 158, 11, 0.12)" stroke="#f59e0b" strokeWidth="2" />
    <text x="180" y="100" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">Atas</text>
    <text x="180" y="175" fill="#94a3b8" fontSize="14" fontWeight="bold" textAnchor="middle">Bawah</text>

    {/* Garis Ukuran */}
    <text x="180" y="55" fill="#38bdf8" fontSize="11" textAnchor="middle">Jarak puncak = 12 cm</text>
    <text x="75" y="65" fill="#38bdf8" fontSize="11">35 cm</text>
    <text x="180" y="242" fill="#38bdf8" fontSize="12" textAnchor="middle">Lebar = 42 cm (setengah = 21 cm)</text>

    {mode === 'solution' && (
      <g transform="translate(20, 195)">
        <rect width="320" height="24" rx="4" fill="#064e3b" />
        <text x="160" y="16" fill="#6ee7b7" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Tinggi Atap = √(35²-21²) = 28 cm → Tinggi Rak = 28-12 = 16 cm
        </text>
      </g>
    )}
  </svg>
);

/**
 * P1 Soal 15: Kabel Lampu Ruang Kerja 8x4x4
 */
export const P1Soal15KabelLampuSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 360 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="360" height="220" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    {/* Room Box */}
    <polygon points="50,175 235,175 235,70 50,70" fill="rgba(30, 41, 59, 0.6)" stroke="#475569" strokeWidth="1.5" />
    <polygon points="235,175 310,125 310,25 235,70" fill="rgba(30, 41, 59, 0.4)" stroke="#475569" strokeWidth="1.5" />
    <polygon points="50,70 125,25 310,25 235,70" fill="rgba(51, 65, 85, 0.4)" stroke="#475569" strokeWidth="1.5" />

    {/* Saklar Dinding Kiri (1m di bawah plafon) */}
    <circle cx="85" cy="90" r="4.5" fill="#f59e0b" />
    <text x="60" y="93" fill="#f59e0b" fontSize="10.5" fontWeight="bold">Saklar</text>
    <line x1="85" y1="50" x2="85" y2="90" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
    <text x="92" y="72" fill="#94a3b8" fontSize="10">1 m</text>

    {/* Jalur Kabel ke Lampu Plafon */}
    <line x1="85" y1="50" x2="160" y2="45" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="3 3" />
    <circle cx="160" cy="45" r="4" fill="#38bdf8" />
    <line x1="160" y1="45" x2="160" y2="85" stroke="#e2e8f0" strokeWidth="1.5" />
    <circle cx="160" cy="90" r="7" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />

    <text x="215" y="38" fill="#94a3b8" fontSize="10.5">5,6 m dari kanan</text>
    <text x="180" y="195" fill="#64748b" fontSize="10.5" textAnchor="middle">Panjang Ruangan = 8 m (Jarak ke kiri = 8 - 5,6 = 2,4 m)</text>

    {mode === 'solution' && (
      <g transform="translate(20, 165)">
        <rect width="320" height="22" rx="4" fill="#064e3b" />
        <text x="160" y="15" fill="#6ee7b7" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Kabel = √(1² + 2,4²) = √(1 + 5,76) = √6,76 = 2,6 m = 260 cm
        </text>
      </g>
    )}
  </svg>
);

/**
 * P1 Soal 16: Hiasan Dinding Tetes Air Simetris
 */
export const P1Soal16TetesAirSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 320 280" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="320" height="280" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    {/* Teardrop contour: Apex at (160, 30), circular arc centered at (160, 160), r=80 */}
    <path
      d="M 160,30 L 235,130 A 85,85 0 1,1 85,130 Z"
      fill="rgba(245, 158, 11, 0.15)"
      stroke="#f59e0b"
      strokeWidth="2.5"
    />
    <line x1="75" y1="160" x2="245" y2="160" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="160" y1="30" x2="160" y2="245" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />

    <text x="165" y="105" fill="#38bdf8" fontSize="11">Segitiga Atas</text>
    <text x="165" y="175" fill="#facc15" fontSize="11">Diameter = 18 cm (r = 9 cm)</text>
    <text x="250" y="140" fill="#e2e8f0" fontSize="12" fontWeight="bold">24 cm (Total)</text>

    {mode === 'solution' && (
      <g transform="translate(15, 245)">
        <rect width="290" height="24" rx="4" fill="#064e3b" />
        <text x="145" y="16" fill="#6ee7b7" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Busur = ½×π×18 = 28,26 cm + 2 Sisi Miring ≈ 83,4 cm
        </text>
      </g>
    )}
  </svg>
);

/**
 * P1 Soal 18: Boks Truk & Kardus Air Mineral
 */
export const P1Soal18BoksAirMineralSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 360 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="360" height="210" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    <g transform="translate(25, 30)">
      <rect width="180" height="120" rx="8" fill="rgba(30, 41, 59, 0.6)" stroke="#38bdf8" strokeWidth="2" />
      <text x="15" y="24" fill="#38bdf8" fontSize="12" fontWeight="bold">Boks Mobil Distribusi</text>
      <text x="15" y="50" fill="#f1f5f9" fontSize="11">Panjang: 280 cm</text>
      <text x="15" y="70" fill="#f1f5f9" fontSize="11">Lebar: 240 cm</text>
      <text x="15" y="90" fill="#f1f5f9" fontSize="11">Tinggi: 175 cm</text>
      <text x="15" y="110" fill="#facc15" fontSize="10">Kapasitas vertikal: 8 lapis (160 cm)</text>
    </g>

    <g transform="translate(225, 45)">
      <rect width="110" height="90" rx="6" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="2" />
      <text x="12" y="22" fill="#f59e0b" fontSize="11" fontWeight="bold">Kardus Air</text>
      <text x="12" y="44" fill="#e2e8f0" fontSize="10">40 × 24 cm</text>
      <text x="12" y="62" fill="#e2e8f0" fontSize="10">Tinggi: 20 cm</text>
      <text x="12" y="80" fill="#34d399" fontSize="9.5">Tutup selalu atas</text>
    </g>

    <g transform="translate(20, 165)">
      {mode === 'solution' ? (
        <text x="160" y="22" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Penataan Optimal Boks: 294 Kardus
        </text>
      ) : (
        <text x="160" y="22" fill="#94a3b8" fontSize="11" textAnchor="middle">
          Optimasi penataan kardus tanpa membalik posisi tutup botol
        </text>
      )}
    </g>
  </svg>
);

/**
 * P1 Soal 20: Segitiga Siku-Siku Bertingkat ABC (CO perp AB)
 */
export const P1Soal20SegitigaTrigSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 340 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="340" height="220" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    {/* Base horizontal A - O - B */}
    <line x1="45" y1="50" x2="285" y2="50" stroke="#e2e8f0" strokeWidth="2" />
    {/* Altitude O - C */}
    <line x1="180" y1="50" x2="180" y2="185" stroke="#38bdf8" strokeWidth="2" />
    {/* Sides AC & BC */}
    <line x1="45" y1="50" x2="180" y2="185" stroke="#e2e8f0" strokeWidth="2" />
    <line x1="285" y1="50" x2="180" y2="185" stroke="#e2e8f0" strokeWidth="2" />

    {/* Right Angle at O */}
    <polyline points="170,50 170,60 180,60" fill="none" stroke="#f59e0b" strokeWidth="1.5" />

    {/* Labels */}
    <text x="30" y="55" fill="#f1f5f9" fontSize="13" fontWeight="bold">A</text>
    <text x="175" y="40" fill="#f59e0b" fontSize="13" fontWeight="bold">O</text>
    <text x="295" y="55" fill="#f1f5f9" fontSize="13" fontWeight="bold">B</text>
    <text x="175" y="205" fill="#f1f5f9" fontSize="13" fontWeight="bold">C</text>

    {/* Sudut α dan β */}
    <text x="65" y="68" fill="#facc15" fontSize="14" fontWeight="bold">α</text>
    <text x="188" y="155" fill="#a855f7" fontSize="14" fontWeight="bold">β</text>

    <text x="80" y="125" fill="#38bdf8" fontSize="11">AC = 20 cm</text>
    <text x="220" y="42" fill="#38bdf8" fontSize="11">OB = 8 cm</text>

    {mode === 'solution' && (
      <g transform="translate(15, 185)">
        <rect width="310" height="24" rx="4" fill="#064e3b" />
        <text x="155" y="16" fill="#6ee7b7" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          CO = 15 cm → BC = 17 cm → sin β = 8/17, tan β = 8/15
        </text>
      </g>
    )}
  </svg>
);

/**
 * P1 Soal 21: Diagram Garis Karir SMK Berdaya 2020-2024
 */
export const P1Soal21LineKarirSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => {
  // Chart coordinates mapping (x from 60 to 320, y from 180 (val 100) to 40 (val 320))
  // 2020: x=70, 2021: x=135, 2022: x=200, 2023: x=265, 2024: x=330
  // Scale y: val 150 -> 155, 180 -> 135, 190 -> 128, 200 -> 120, 210 -> 113, 220 -> 106, 250 -> 85, 260 -> 78, 300 -> 50
  return (
    <svg viewBox="0 0 360 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
      <rect width="360" height="240" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
      {/* Grid lines */}
      <line x1="50" y1="180" x2="335" y2="180" stroke="#334155" strokeWidth="1" />
      <line x1="50" y1="120" x2="335" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="50" y1="60" x2="335" y2="60" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

      {/* Y Axis labels */}
      <text x="40" y="184" fill="#64748b" fontSize="10" textAnchor="end">100</text>
      <text x="40" y="124" fill="#64748b" fontSize="10" textAnchor="end">200</text>
      <text x="40" y="64" fill="#64748b" fontSize="10" textAnchor="end">300</text>

      {/* Line 1: Bekerja (Hijau Emerald) */}
      <polyline points="70,78 135,50 200,85 265,120 330,85" fill="none" stroke="#10b981" strokeWidth="2.5" />
      {/* Line 2: Kuliah (Biru) */}
      <polyline points="70,155 135,135 200,120 265,113 330,106" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
      {/* Line 3: Wirausaha (Amber) */}
      <polyline points="70,120 135,135 200,135 265,120 330,128" fill="none" stroke="#f59e0b" strokeWidth="2.5" />

      {/* Year X labels */}
      <text x="70" y="200" fill="#94a3b8" fontSize="10" textAnchor="middle">2020</text>
      <text x="135" y="200" fill="#94a3b8" fontSize="10" textAnchor="middle">2021</text>
      <text x="200" y="200" fill="#94a3b8" fontSize="10" textAnchor="middle">2022</text>
      <text x="265" y="200" fill="#94a3b8" fontSize="10" textAnchor="middle">2023</text>
      <text x="330" y="200" fill="#94a3b8" fontSize="10" textAnchor="middle">2024</text>

      {/* Legend */}
      <g transform="translate(60, 215)">
        <circle cx="0" cy="5" r="4" fill="#10b981" />
        <text x="8" y="9" fill="#94a3b8" fontSize="9.5">Bekerja</text>
        <circle cx="80" cy="5" r="4" fill="#38bdf8" />
        <text x="88" y="9" fill="#94a3b8" fontSize="9.5">Kuliah</text>
        <circle cx="160" cy="5" r="4" fill="#f59e0b" />
        <text x="168" y="9" fill="#94a3b8" fontSize="9.5">Wirausaha</text>
      </g>
    </svg>
  );
};

/**
 * P2 Soal 9: Daerah Arsiran SPtLDV Bidang Kartesius
 */
export const P2Soal9SptldvCartesianSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 340 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="340" height="220" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    {/* Cartesian Axes */}
    <line x1="30" y1="160" x2="310" y2="160" stroke="#94a3b8" strokeWidth="1.5" />
    <line x1="160" y1="20" x2="160" y2="200" stroke="#94a3b8" strokeWidth="1.5" />
    <text x="315" y="165" fill="#94a3b8" fontSize="13" fontWeight="bold">x</text>
    <text x="165" y="25" fill="#94a3b8" fontSize="13" fontWeight="bold">y</text>

    {/* Shaded Triangle: (-4,0) -> x=60; (0,2) -> y=90; (2,0) -> x=210 */}
    <polygon points="60,160 160,90 210,160" fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" strokeWidth="1.5" />

    {/* Line 1: through (-4,0) and (0,2) => x - 2y = -4 */}
    <line x1="35" y1="177" x2="260" y2="20" stroke="#3b82f6" strokeWidth="2" />
    {/* Line 2: through (2,0) and (0,2) => x + y = 2 */}
    <line x1="110" y1="55" x2="245" y2="190" stroke="#ef4444" strokeWidth="2" />

    {/* Ticks and Labels */}
    <circle cx="60" cy="160" r="3" fill="#f1f5f9" />
    <text x="55" y="180" fill="#f1f5f9" fontSize="11">-4</text>
    <circle cx="160" cy="160" r="3" fill="#f1f5f9" />
    <text x="145" y="180" fill="#f1f5f9" fontSize="11">0</text>
    <circle cx="210" cy="160" r="3" fill="#f1f5f9" />
    <text x="215" y="180" fill="#f1f5f9" fontSize="11">2</text>
    <circle cx="160" cy="90" r="3" fill="#f1f5f9" />
    <text x="145" y="95" fill="#f1f5f9" fontSize="11">2</text>

    {mode === 'solution' && (
      <g transform="translate(15, 195)">
        <text x="155" y="14" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Sistem: x - 2y ≥ -4 ; x + y ≤ 2 ; y ≥ 0
        </text>
      </g>
    )}
  </svg>
);

/**
 * P2 Soal 10: Garis Sejajar & Sudut Berpelurus (180°)
 */
export const P2Soal10AnglesSuppSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 340 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="340" height="220" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    <line x1="30" y1="65" x2="310" y2="65" stroke="#94a3b8" strokeWidth="2" />
    <line x1="30" y1="165" x2="310" y2="165" stroke="#94a3b8" strokeWidth="2" />
    <line x1="80" y1="20" x2="260" y2="205" stroke="#f59e0b" strokeWidth="2" />

    {/* Intersection 1 */}
    <text x="95" y="55" fill="#f1f5f9" fontSize="14" fontWeight="bold">A</text>
    <text x="140" y="55" fill={mode === 'solution' ? '#34d399' : '#f1f5f9'} fontSize="14" fontWeight="bold">B</text>
    <text x="90" y="95" fill="#f1f5f9" fontSize="14" fontWeight="bold">F</text>

    {/* Intersection 2 */}
    <text x="180" y="155" fill="#f1f5f9" fontSize="14" fontWeight="bold">E</text>
    <text x="235" y="155" fill="#f1f5f9" fontSize="14" fontWeight="bold">D</text>
    <text x="240" y="195" fill={mode === 'solution' ? '#34d399' : '#f1f5f9'} fontSize="14" fontWeight="bold">C</text>

    {mode === 'solution' && (
      <g transform="translate(15, 10)">
        <text x="155" y="12" fill="#6ee7b7" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Berpelurus (180°): ∠A & ∠B (Satu Garis), ∠B & ∠C (Sepihak Luar)
        </text>
      </g>
    )}
  </svg>
);

/**
 * P2 Soal 12: Kesebangunan Tiang & Bangunan
 */
export const P2Soal12TiangGedungSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 340 190" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="340" height="190" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    <line x1="30" y1="155" x2="315" y2="155" stroke="#64748b" strokeWidth="2" />

    {/* Line of sight hypotenuse */}
    <line x1="45" y1="155" x2="270" y2="35" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />

    {/* Tiang (x=120) */}
    <line x1="120" y1="155" x2="120" y2="115" stroke="#38bdf8" strokeWidth="3" />
    {/* Gedung (x=270) */}
    <rect x="270" y="35" width="40" height="120" fill="rgba(30, 41, 59, 0.8)" stroke="#10b981" strokeWidth="2" />

    <text x="35" y="170" fill="#f1f5f9" fontSize="13" fontWeight="bold">A</text>
    <text x="105" y="130" fill="#38bdf8" fontSize="11">tiang</text>
    <text x="272" y="95" fill="#10b981" fontSize="11">gedung</text>
    <text x="75" y="170" fill="#94a3b8" fontSize="11">6 m</text>
    <text x="185" y="170" fill="#94a3b8" fontSize="11">10 m (Total = 16 m)</text>

    {mode === 'solution' && (
      <g transform="translate(15, 10)">
        <text x="155" y="14" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Rasio = 16 / 6 = 8 / 3 → Tinggi Gedung = 8/3 × Tinggi Tiang
        </text>
      </g>
    )}
  </svg>
);

/**
 * P2 Soal 13: Kebun Trapesium Siku-Siku
 */
export const P2Soal13KebunTrapesiumSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 340 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="340" height="210" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    {/* Trapesium siku-siku: kiri 500cm (h=140), kanan 350cm (h=98), alas 360cm (w=220) */}
    <polygon points="50,175 270,175 270,77 50,35" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="2.5" />

    {/* Labels */}
    <text x="20" y="110" fill="#38bdf8" fontSize="11">500 cm</text>
    <text x="280" y="125" fill="#38bdf8" fontSize="11">350 cm</text>
    <text x="145" y="195" fill="#38bdf8" fontSize="11">Alas = 360 cm</text>
    <text x="160" y="45" fill="#facc15" fontSize="11" fontWeight="bold">Sisi Miring = 390 cm</text>

    {mode === 'solution' && (
      <g transform="translate(15, 10)">
        <text x="155" y="14" fill="#6ee7b7" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Jahe (15cm) = 26 pot ; Kunyit (26cm) = 15 pot ; Lengkuas (30cm) = 13 pot
        </text>
      </g>
    )}
  </svg>
);

/**
 * P2 Soal 17: Jam Dinding Ornamen Gabungan
 */
export const P2Soal17JamDindingSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 320 250" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="320" height="250" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    {/* Segitiga Atas: Puncak (160, 25), alas (80, 150) ke (240, 150) */}
    <polygon points="160,25 240,150 80,150" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
    {/* Lingkaran Bawah: diameter 20 cm, centered at (160, 185), r=35 */}
    <circle cx="160" cy="185" r="35" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="2" />

    <text x="160" y="90" fill="#facc15" fontSize="11" textAnchor="middle">Alas Segitiga = 50 cm</text>
    <text x="160" y="190" fill="#38bdf8" fontSize="11" textAnchor="middle">Ø 20 cm</text>
    <text x="250" y="100" fill="#94a3b8" fontSize="11">Tinggi = 70 cm</text>

    {mode === 'solution' && (
      <g transform="translate(15, 225)">
        <text x="145" y="14" fill="#34d399" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Total Kayu untuk 2 Buah Ornamen = 362,8 cm
        </text>
      </g>
    )}
  </svg>
);

/**
 * P2 Soal 20: Segitiga Siku-Siku AD perp BC
 */
export const P2Soal20SegitigaTrig2SVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 340 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="340" height="210" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    <line x1="40" y1="165" x2="300" y2="165" stroke="#94a3b8" strokeWidth="2" />
    <line x1="140" y1="35" x2="140" y2="165" stroke="#38bdf8" strokeWidth="2" />
    <line x1="40" y1="165" x2="140" y2="35" stroke="#e2e8f0" strokeWidth="2" />
    <line x1="300" y1="165" x2="140" y2="35" stroke="#e2e8f0" strokeWidth="2" />

    <polyline points="130,165 130,155 140,155" fill="none" stroke="#f59e0b" strokeWidth="1.5" />

    <text x="135" y="25" fill="#f1f5f9" fontSize="13" fontWeight="bold">A</text>
    <text x="25" y="175" fill="#f1f5f9" fontSize="13" fontWeight="bold">B</text>
    <text x="140" y="185" fill="#f59e0b" fontSize="13" fontWeight="bold">D</text>
    <text x="310" y="175" fill="#f1f5f9" fontSize="13" fontWeight="bold">C</text>

    <text x="60" y="155" fill="#facc15" fontSize="14" fontWeight="bold">β</text>
    <text x="145" y="60" fill="#a855f7" fontSize="14" fontWeight="bold">α</text>
    <text x="75" y="95" fill="#38bdf8" fontSize="11">4 cm</text>

    {mode === 'solution' && (
      <g transform="translate(15, 185)">
        <text x="155" y="16" fill="#6ee7b7" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          cos α = 3/5 → AD = 3, BD = √7 → tan β = 3/√7 = 3√7/7
        </text>
      </g>
    )}
  </svg>
);

/**
 * P2 Soal 21: Diagram Garis Ekstrakurikuler SMA Cerdas
 */
export const P2Soal21LineEkskulSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 360 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="360" height="230" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    <line x1="50" y1="175" x2="335" y2="175" stroke="#334155" strokeWidth="1" />
    <line x1="50" y1="115" x2="335" y2="115" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="50" y1="55" x2="335" y2="55" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

    {/* Jurnalistik: 26, 26, 26, 26, 31 (Selalu konstan lalu naik!) */}
    <polyline points="70,110 135,110 200,110 265,110 330,65" fill="none" stroke="#10b981" strokeWidth="3" />
    {/* Robotik: 17, 26, 26, 26, 21 */}
    <polyline points="70,165 135,110 200,110 265,110 330,140" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
    {/* Seni: 31, 21, 21, 21, 21 */}
    <polyline points="70,65 135,140 200,140 265,140 330,140" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />

    <text x="70" y="195" fill="#94a3b8" fontSize="10" textAnchor="middle">2020</text>
    <text x="135" y="195" fill="#94a3b8" fontSize="10" textAnchor="middle">2021</text>
    <text x="200" y="195" fill="#94a3b8" fontSize="10" textAnchor="middle">2022</text>
    <text x="265" y="195" fill="#94a3b8" fontSize="10" textAnchor="middle">2023</text>
    <text x="330" y="195" fill="#94a3b8" fontSize="10" textAnchor="middle">2024</text>

    <g transform="translate(45, 210)">
      <circle cx="0" cy="5" r="4" fill="#10b981" />
      <text x="8" y="9" fill="#94a3b8" fontSize="9.5">Jurnalistik (Stabil/Naik)</text>
      <circle cx="130" cy="5" r="4" fill="#38bdf8" />
      <text x="138" y="9" fill="#94a3b8" fontSize="9.5">Robotik</text>
      <circle cx="210" cy="5" r="4" fill="#f59e0b" />
      <text x="218" y="9" fill="#94a3b8" fontSize="9.5">Seni</text>
    </g>
  </svg>
);

/**
 * P3 Soal 3: Kipas Tangan 5 Kelopak
 */
export const P3Soal3KipasTanganSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 320 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect width="320" height="220" rx="10" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
    {/* Single blade detail: Apex at (240, 180), top semicircle diameter 3.5 cm */}
    <path d="M 240,180 L 222,80 A 18,18 0 0,1 258,80 Z" fill="rgba(245, 158, 11, 0.2)" stroke="#ef4444" strokeWidth="2" />
    <line x1="210" y1="80" x2="210" y2="180" stroke="#94a3b8" strokeWidth="1.5" />
    <text x="180" y="135" fill="#38bdf8" fontSize="11">6 cm</text>
    <text x="240" y="65" fill="#facc15" fontSize="11" textAnchor="middle">Ø 3,5 cm</text>

    {/* Indikasi kipas 5 kelopak */}
    <text x="30" y="160" fill="#e2e8f0" fontSize="12" fontWeight="bold">Kipas 5 Bilah Kelopak</text>
    <text x="30" y="180" fill="#94a3b8" fontSize="10.5">Sisa benang: 500 cm</text>

    {mode === 'solution' && (
      <g transform="translate(15, 195)">
        <text x="145" y="14" fill="#34d399" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          Belum Terbuat: 91 Buah (Terbuat 9 Buah)
        </text>
      </g>
    )}
  </svg>
);
