import React from 'react';
import {
  P1Soal10AnglesSVG,
  P1Soal11KandangAyamSVG,
  P1Soal12TrapesiumSebangunSVG,
  P1Soal13RakBukuRumahSVG,
  P1Soal15KabelLampuSVG,
  P1Soal16TetesAirSVG,
  P1Soal18BoksAirMineralSVG,
  P1Soal20SegitigaTrigSVG,
  P1Soal21LineKarirSVG,
  P2Soal9SptldvCartesianSVG,
  P2Soal10AnglesSuppSVG,
  P2Soal12TiangGedungSVG,
  P2Soal13KebunTrapesiumSVG,
  P2Soal17JamDindingSVG,
  P2Soal20SegitigaTrig2SVG,
  P2Soal21LineEkskulSVG,
  P3Soal3KipasTanganSVG,
} from './NewBankSVGs';

// Common SVG container wrapper props
export interface VisualProps {
  className?: string;
  mode?: 'question' | 'solution';
}

/**
 * Soal 1 (No. 1): Smart Greenhouse Agritech (Nutrisi Makro & Kit Mikro - SPLDV)
 */
export const ServoSensorCostSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="190" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      INVENTARIS AGRI-TEK: PENGADAAN KONSENTRAT NUTRISI (SPLDV)
    </text>

    <g transform="translate(30, 48)">
      <rect width="185" height="135" rx="8" fill="#1e293b" stroke="#0284c7" strokeWidth="1.5" />
      <text x="15" y="24" fill="#38bdf8" fontSize="12" fontWeight="700">Paket Pesanan A</text>
      <text x="15" y="50" fill="#e2e8f0" fontSize="11">4 Botol Konsentrat Makro ($x$)</text>
      <text x="15" y="72" fill="#e2e8f0" fontSize="11">3 Botol Kit Mikronutrien ($y$)</text>
      <line x1="15" y1="86" x2="170" y2="86" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <text x="15" y="106" fill="#94a3b8" fontSize="10">Total Tagihan:</text>
      <text x="15" y="124" fill="#facc15" fontSize="13" fontWeight="700">Rp220.000,00</text>
    </g>

    <g transform="translate(245, 48)">
      <rect width="185" height="135" rx="8" fill="#1e293b" stroke={mode === 'solution' ? '#10b981' : '#64748b'} strokeWidth="1.5" />
      <text x="15" y="24" fill={mode === 'solution' ? '#34d399' : '#94a3b8'} fontSize="12" fontWeight="700">
        {mode === 'solution' ? 'Solusi Aljabar' : 'Relasi Harga Katalog'}
      </text>
      {mode === 'question' ? (
        <>
          <text x="15" y="52" fill="#f1f5f9" fontSize="10.5">1 Botol Konsentrat Makro</text>
          <text x="15" y="70" fill="#94a3b8" fontSize="10.5">Rp20.000 lebih mahal dari</text>
          <text x="15" y="88" fill="#94a3b8" fontSize="10.5">1 Botol Mikronutrien</text>
          <line x1="15" y1="98" x2="170" y2="98" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
          <text x="15" y="120" fill="#38bdf8" fontSize="11" fontWeight="600">Model: x = y + 20.000</text>
        </>
      ) : (
        <>
          <text x="15" y="50" fill="#a7f3d0" fontSize="10">Substitusi ke Persamaan 1:</text>
          <text x="15" y="70" fill="#facc15" fontSize="11" fontWeight="700">y = Rp20.000 (Mikro)</text>
          <text x="15" y="90" fill="#38bdf8" fontSize="11" fontWeight="700">x = Rp40.000 (Makro)</text>
          <line x1="15" y1="102" x2="170" y2="102" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
          <text x="15" y="122" fill="#4ade80" fontSize="11" fontWeight="800">2x + 6y = Rp200.000</text>
        </>
      )}
    </g>
  </svg>
);

/**
 * Soal 2 (No. 2): Cartesian Feasible Region Pompa Desalinasi (SPtLDV)
 * x + y <= 5, x + 2y >= 6, x >= 0, y >= 0
 */
export const CartesianLinearInequalitySVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => {
  const ox = 90;
  const oy = 210;
  const s = 34;

  const toPx = (x: number, y: number) => ({ x: ox + x * s, y: oy - y * s });

  const l1p1 = toPx(-0.5, 5.5);
  const l1p2 = toPx(6.2, -1.2);

  const l2p1 = toPx(-0.8, (6 - (-0.8)) / 2);
  const l2p2 = toPx(7.5, (6 - 7.5) / 2);

  // Polygon region II: (0, 3) to (0, 5) to (4, 1)
  const polyPt1 = toPx(0, 3);
  const polyPt2 = toPx(0, 5);
  const polyPt3 = toPx(4, 1);

  return (
    <svg viewBox="0 0 460 270" className={`w-full max-w-[420px] mx-auto ${className}`}>
      <rect x="10" y="10" width="440" height="250" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="25" y="30" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
        DAERAH KENDALA OPERASIONAL POMPA DESALINASI (SPtLDV)
      </text>

      {/* Grid Lines */}
      {[1, 2, 3, 4, 5, 6, 7].map((val) => {
        const ptX = toPx(val, 0);
        return <line key={'vx' + val} x1={ptX.x} y1={25} x2={ptX.x} y2={235} stroke="#1e293b" strokeWidth="1" />;
      })}
      {[1, 2, 3, 4, 5].map((val) => {
        const ptY = toPx(0, val);
        return <line key={'hy' + val} x1={30} y1={ptY.y} x2={430} y2={ptY.y} stroke="#1e293b" strokeWidth="1" />;
      })}

      {/* Solution Shading - ONLY in Solution Mode */}
      {mode === 'solution' && (
        <polygon
          points={`${polyPt1.x},${polyPt1.y} ${polyPt2.x},${polyPt2.y} ${polyPt3.x},${polyPt3.y}`}
          fill="#06b6d4"
          fillOpacity="0.4"
          stroke="#22d3ee"
          strokeWidth="2"
        />
      )}

      {/* Axis X */}
      <line x1="40" y1={oy} x2="420" y2={oy} stroke="#94a3b8" strokeWidth="2" />
      <polygon points="425,210 415,206 415,214" fill="#94a3b8" />
      <text x="430" y="214" fill="#94a3b8" fontSize="12" fontWeight="700">X</text>

      {/* Axis Y */}
      <line x1={ox} y1="240" x2={ox} y2="30" stroke="#94a3b8" strokeWidth="2" />
      <polygon points={`${ox},25 ${ox - 4},35 ${ox + 4},35`} fill="#94a3b8" />
      <text x={ox - 18} y="32" fill="#94a3b8" fontSize="12" fontWeight="700">Y</text>

      <text x={ox - 12} y={oy + 14} fill="#64748b" fontSize="10">O</text>

      {/* Intercepts Line 1: (5,0) and (0,5) */}
      <circle cx={toPx(5, 0).x} cy={oy} r="3" fill="#f59e0b" />
      <text x={toPx(5, 0).x} y={oy + 16} fill="#f59e0b" fontSize="10" textAnchor="middle">5</text>

      <circle cx={ox} cy={toPx(0, 5).y} r="3" fill="#f59e0b" />
      <text x={ox - 14} y={toPx(0, 5).y + 4} fill="#f59e0b" fontSize="10" textAnchor="end">5</text>

      {/* Intercepts Line 2: (6,0) and (0,3) */}
      <circle cx={toPx(6, 0).x} cy={oy} r="3" fill="#ec4899" />
      <text x={toPx(6, 0).x} y={oy + 16} fill="#ec4899" fontSize="10" textAnchor="middle">6</text>

      <circle cx={ox} cy={toPx(0, 3).y} r="3" fill="#ec4899" />
      <text x={ox - 14} y={toPx(0, 3).y + 4} fill="#ec4899" fontSize="10" textAnchor="end">3</text>

      {/* Boundary Lines */}
      <line x1={l1p1.x} y1={l1p1.y} x2={l1p2.x} y2={l1p2.y} stroke="#f59e0b" strokeWidth="2" />
      <text x={toPx(4.5, 0.8).x} y={toPx(4.5, 0.8).y} fill="#fbbf24" fontSize="10" fontWeight="600">x + y = 5</text>

      <line x1={l2p1.x} y1={l2p1.y} x2={l2p2.x} y2={l2p2.y} stroke="#ec4899" strokeWidth="2" />
      <text x={toPx(6.2, 0.4).x} y={toPx(6.2, 0.4).y} fill="#f472b6" fontSize="10" fontWeight="600">x + 2y = 6</text>

      {/* Region Roman Numerals - Neutral in Question Mode */}
      <text x={toPx(0.8, 4.8).x} y={toPx(0.8, 4.8).y} fill="#94a3b8" fontSize="13" fontWeight="800">I</text>
      <text
        x={toPx(1.0, 3.5).x}
        y={toPx(1.0, 3.5).y}
        fill={mode === 'solution' ? '#22d3ee' : '#94a3b8'}
        fontSize={mode === 'solution' ? '16' : '13'}
        fontWeight={mode === 'solution' ? '900' : '800'}
      >
        II
      </text>
      <text x={toPx(3.8, 3.2).x} y={toPx(3.8, 3.2).y} fill="#94a3b8" fontSize="13" fontWeight="800">III</text>
      <text x={toPx(1.2, 1.0).x} y={toPx(1.2, 1.0).y} fill="#94a3b8" fontSize="13" fontWeight="800">IV</text>
      <text x={toPx(5.0, 1.2).x} y={toPx(5.0, 1.2).y} fill="#94a3b8" fontSize="13" fontWeight="800">V</text>

      {mode === 'solution' && (
        <g transform="translate(180, 240)">
          <text x="50" y="0" fill="#38bdf8" fontSize="10" fontWeight="700">
            Irisan Feasible: Daerah II (Di bawah garis x+y=5 &amp; di atas x+2y=6)
          </text>
        </g>
      )}
    </svg>
  );
};

/**
 * Soal 3 (No. 3): SPLTV Pengadaan Modul PLTS Mikrohidro
 */
export const MicroFabProcurementSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="190" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      LOGISTIK ENERGI KOMUNITAS: PENGADAAN PLTS (SPLTV)
    </text>

    {[
      { name: 'Tim Aliran', detail: '2 Surya + 1 MPPT + 3 Baterai', price: 'Rp26.000.000' },
      { name: 'Tim Surya', detail: '1 Surya + 2 MPPT + 2 Baterai', price: 'Rp22.000.000' },
      { name: 'Tim Angin', detail: '2 Surya + 2 MPPT + 1 Baterai', price: 'Rp25.000.000' },
    ].map((team, idx) => {
      const x = 25 + idx * 138;
      return (
        <g key={idx}>
          <rect x={x} y={50} width="130" height="95" rx="8" fill="#1e293b" stroke="#334155" />
          <text x={x + 65} y={72} fill="#38bdf8" fontSize="11" fontWeight="700" textAnchor="middle">{team.name}</text>
          <text x={x + 65} y={92} fill="#cbd5e1" fontSize="8" textAnchor="middle">{team.detail}</text>
          <text x={x + 65} y={124} fill="#facc15" fontSize="10.5" fontWeight="800" textAnchor="middle">{team.price}</text>
        </g>
      );
    })}

    {mode === 'solution' && (
      <g>
        <rect x="25" y="155" width="410" height="30" rx="5" fill="#1e293b" stroke="#10b981" />
        <text x="230" y="174" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle">
          x = Rp6 Jt, y = Rp5 Jt, z = Rp3 Jt ➔ Total (x + y + z) = Rp14.000.000,00 (Kunci C)
        </text>
      </g>
    )}
  </svg>
);

/**
 * Soal 4 (No. 4): Manufaktur Robot Otonom Rover Kurir & Kargo (Program Linear)
 */
export const DroneAssemblyOptimizationSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => {
  const ox = 70;
  const oy = 200;
  const sx = 20;
  const sy = 10;

  const p0 = { x: ox, y: oy };
  const p1 = { x: ox + 12 * sx, y: oy }; // (12, 0)
  const p2 = { x: ox + 6 * sx, y: oy - 9 * sy }; // (6, 9)
  const p3 = { x: ox, y: oy - 12 * sy }; // (0, 12)

  return (
    <svg viewBox="0 0 460 250" className={`w-full max-w-[420px] mx-auto ${className}`}>
      <rect x="10" y="10" width="440" height="230" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
        DAERAH FEASIBLE PRODUKSI ROVER LOGISTIK (PROGRAM LINEAR)
      </text>

      <line x1={ox} y1={oy} x2="400" y2={oy} stroke="#64748b" strokeWidth="1.5" />
      <line x1={ox} y1="210" x2={ox} y2="40" stroke="#64748b" strokeWidth="1.5" />
      <text x="405" y={oy + 4} fill="#94a3b8" fontSize="10">x (Kurir)</text>
      <text x={ox - 10} y="38" fill="#94a3b8" fontSize="10">y (Kargo)</text>

      {/* Polygon Region */}
      <polygon
        points={`${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`}
        fill="#0ea5e9"
        fillOpacity={mode === 'solution' ? '0.35' : '0.2'}
        stroke="#38bdf8"
        strokeWidth="2"
      />

      <circle cx={p1.x} cy={p1.y} r="4" fill="#f59e0b" />
      <text x={p1.x} y={p1.y + 15} fill="#fbbf24" fontSize="9" textAnchor="middle">(12, 0)</text>

      <circle cx={p2.x} cy={p2.y} r={mode === 'solution' ? 6 : 4} fill={mode === 'solution' ? '#22c55e' : '#38bdf8'} />
      <text x={p2.x + 8} y={p2.y - 6} fill={mode === 'solution' ? '#4ade80' : '#cbd5e1'} fontSize={mode === 'solution' ? 10 : 9} fontWeight={mode === 'solution' ? 700 : 400}>
        {mode === 'solution' ? 'Optimum (6, 9)' : '(6, 9)'}
      </text>

      <circle cx={p3.x} cy={p3.y} r="4" fill="#a855f7" />
      <text x={p3.x - 12} y={p3.y + 4} fill="#c084fc" fontSize="9" textAnchor="end">(0, 12)</text>

      <text x="260" y="85" fill="#f59e0b" fontSize="9.5">3x + 2y = 36 (Baterai)</text>
      <text x="260" y="105" fill="#a855f7" fontSize="9.5">x + 2y = 24 (Kalibrasi)</text>

      {mode === 'solution' && (
        <g>
          <rect x="25" y="195" width="410" height="35" rx="6" fill="#1e293b" stroke="#10b981" />
          <text x="230" y="210" fill="#fde047" fontSize="10" fontWeight="700" textAnchor="middle">
            Keuntungan Maksimum di Titik Pojok (6, 9):
          </text>
          <text x="230" y="224" fill="#a7f3d0" fontSize="9.5" textAnchor="middle">
            Z = 6 × Rp600.000 + 9 × Rp500.000 = Rp8.100.000,00 (Pernyataan 1 &amp; 4 Benar)
          </text>
        </g>
      )}
    </svg>
  );
};

/**
 * Soal 5 (No. 5): Bunga Majemuk Turbin Angin Lepas Pantai (10%/thn)
 */
export const CompoundGrowthInvestmentSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="210" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      DANA CADANGAN TURBIN ANGIN LEPAS PANTAI (BUNGA MAJEMUK 10%/THN)
    </text>

    {[
      { yr: 'Awal (T=0)', val: 'Rp10.000.000', note: 'Modal Pokok', color: '#64748b' },
      { yr: 'Tahun 1', val: 'Rp11.000.000', note: '+10% (+Rp1 Jt)', color: '#0284c7' },
      { yr: 'Tahun 2', val: 'Rp12.100.000', note: '+10% (+Rp1,1 Jt)', color: '#0d9488' },
      {
        yr: 'Tahun 3',
        val: mode === 'solution' ? 'Rp13.310.000' : '?',
        note: mode === 'solution' ? 'Jatuh Tempo (Kunci D)' : 'Target Jatuh Tempo',
        color: '#16a34a',
        highlight: mode === 'solution',
      },
    ].map((item, i) => {
      const x = 25 + i * 104;
      return (
        <g key={i}>
          <rect
            x={x}
            y={52}
            width="98"
            height="115"
            rx="8"
            fill="#1e293b"
            stroke={item.highlight ? '#22c55e' : '#334155'}
            strokeWidth={item.highlight ? '2' : '1'}
          />
          <rect x={x + 8} y={60} width="82" height="22" rx="4" fill={item.color} />
          <text x={x + 49} y={75} fill="#ffffff" fontSize="9.5" fontWeight="700" textAnchor="middle">{item.yr}</text>
          <text x={x + 49} y={110} fill={item.highlight ? '#4ade80' : '#f8fafc'} fontSize="10.5" fontWeight="800" textAnchor="middle">
            {item.val}
          </text>
          <text x={x + 49} y={135} fill="#94a3b8" fontSize="8" textAnchor="middle">{item.note}</text>
        </g>
      );
    })}

    {mode === 'solution' && (
      <g>
        <rect x="25" y="180" width="410" height="28" rx="6" fill="#1e293b" stroke="#10b981" />
        <text x="230" y="198" fill="#4ade80" fontSize="10" textAnchor="middle" fontWeight="700">
          Rumus: M₃ = M₀ × (1 + i)³ = 10.000.000 × (1,1)³ = Rp13.310.000,00
        </text>
      </g>
    )}
  </svg>
);

/**
 * Soal 6 & 7: Composite & Inverse Function Machine
 */
export const CompositeFunctionMachineSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 170" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="150" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="30" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      PIPELINE FILTER AKUSTIK ANC DUA TAHAP: (f ∘ g)(x)
    </text>

    <circle cx="50" cy="85" r="22" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
    <text x="50" y="89" fill="#38bdf8" fontSize="11" fontWeight="700" textAnchor="middle">
      {mode === 'solution' ? 'x = 3' : 'Input x'}
    </text>

    <line x1="72" y1="85" x2="110" y2="85" stroke="#64748b" strokeWidth="2" />
    <polygon points="112,85 104,81 104,89" fill="#64748b" />

    <rect x="114" y="60" width="90" height="50" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
    <text x="159" y="82" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle">g(x)</text>
    <text x="159" y="98" fill="#94a3b8" fontSize="9" textAnchor="middle">x + 2</text>

    <line x1="204" y1="85" x2="250" y2="85" stroke="#64748b" strokeWidth="2" />
    <polygon points="252,85 244,81 244,89" fill="#64748b" />
    <text x="227" y="78" fill="#a855f7" fontSize="9" textAnchor="middle">u = 5</text>

    <rect x="254" y="60" width="90" height="50" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
    <text x="299" y="82" fill="#34d399" fontSize="11" fontWeight="700" textAnchor="middle">f(u)</text>
    <text x="299" y="98" fill="#94a3b8" fontSize="9" textAnchor="middle">Filter Utama</text>

    <line x1="344" y1="85" x2="385" y2="85" stroke="#64748b" strokeWidth="2" />
    <polygon points="387,85 379,81 379,89" fill="#64748b" />

    <circle cx="410" cy="85" r="22" fill="#1e293b" stroke={mode === 'solution' ? '#22c55e' : '#64748b'} strokeWidth="1.5" />
    <text x="410" y="83" fill={mode === 'solution' ? '#4ade80' : '#cbd5e1'} fontSize="10" fontWeight="700" textAnchor="middle">f(5)</text>
    <text x="410" y="95" fill={mode === 'solution' ? '#4ade80' : '#cbd5e1'} fontSize="9" textAnchor="middle">
      {mode === 'solution' ? '= 41' : '=?'}
    </text>

    <text x="230" y="140" fill="#94a3b8" fontSize="9.5" textAnchor="middle">
      {mode === 'solution'
        ? 'g(x) = 5 ➔ x = 3. Maka f(5) = (3)² + 6(3) + 14 = 9 + 18 + 14 = 41 (Kunci D)'
        : 'Diketahui g(x) = x + 2 dan (f ∘ g)(x) = x² + 6x + 14. Target evaluasi: f(5).'}
    </text>
  </svg>
);

/**
 * Soal 8 (No. 8): Detektor Fotometri Teleskop Antariksa (Sifat Eksponen)
 */
export const SatellitePowerBudgetSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="190" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      DETEKSI ENERGI FOTON TELESKOP OBSERVATORIUM (EKSPONEN)
    </text>

    <g transform="translate(30, 50)">
      <rect width="185" height="120" rx="8" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="700">Fluks Masuk Teleskop</text>
      <text x="15" y="48" fill="#e2e8f0" fontSize="10">Fluks Φ = 2⁵ × 3³</text>
      <text x="15" y="70" fill="#e2e8f0" fontSize="10">Eksposur τ = 2⁻² × 3⁻¹</text>
      <text x="15" y="92" fill="#e2e8f0" fontSize="10">Kuantum η = 2² × 3¹</text>
      <text x="15" y="110" fill="#94a3b8" fontSize="9">E = Φ × τ × η</text>
    </g>

    <g transform="translate(245, 50)">
      <rect width="185" height="120" rx="8" fill="#1e293b" stroke={mode === 'solution' ? '#10b981' : '#64748b'} strokeWidth="1.5" />
      <text x="15" y="24" fill={mode === 'solution' ? '#34d399' : '#cbd5e1'} fontSize="11" fontWeight="700">
        Dispersi &amp; Energi Efektif
      </text>
      <text x="15" y="48" fill="#f87171" fontSize="10">Dispersi Pembagi = 2³ × 3¹</text>
      <text x="15" y="70" fill="#a7f3d0" fontSize="10">E_efektif = E / (2³ × 3¹)</text>
      {mode === 'solution' ? (
        <>
          <text x="15" y="92" fill="#4ade80" fontSize="11" fontWeight="800">E_efektif = 2² × 3²</text>
          <text x="15" y="110" fill="#fde047" fontSize="12" fontWeight="800">= 4 × 9 = 36 nJ (Kunci C)</text>
        </>
      ) : (
        <text x="15" y="100" fill="#94a3b8" fontSize="10">Hitung nilai E_efektif (nJ)</text>
      )}
    </g>
  </svg>
);

/**
 * Soal 9 (No. 9): Cermin Heliostat Melingkar Konsentris (Deret Geometri)
 */
export const ConcentricSolarCellSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      FORMASI KONSENTRIS CERMIN HELIOSTAT SURYA TERMAL (CSP)
    </text>

    <g transform="translate(140, 125)">
      {/* Ring 3 (Outer) */}
      <circle cx="0" cy="0" r="75" fill="none" stroke="#0284c7" strokeWidth="14" strokeDasharray="18 4" opacity="0.8" />
      {/* Ring 2 (Middle) */}
      <circle cx="0" cy="0" r="50" fill="none" stroke="#10b981" strokeWidth="12" strokeDasharray="16 4" opacity="0.85" />
      {/* Ring 1 (Inner) */}
      <circle cx="0" cy="0" r="28" fill="none" stroke="#f59e0b" strokeWidth="10" strokeDasharray="14 3" opacity="0.9" />
      {/* Center Tower Core */}
      <circle cx="0" cy="0" r="10" fill="#ec4899" />
    </g>

    <g transform="translate(265, 55)">
      <rect width="170" height="150" rx="8" fill="#1e293b" stroke="#334155" />
      <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="700">Pola Cermin Konsentris</text>
      <text x="15" y="48" fill="#facc15" fontSize="10">• Cincin 1: 12 unit</text>
      <text x="15" y="68" fill="#34d399" fontSize="10">• Cincin 2: 24 unit</text>
      <text x="15" y="88" fill="#38bdf8" fontSize="10">• Cincin 3: ? unit</text>
      <line x1="15" y1="100" x2="155" y2="100" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      {mode === 'solution' ? (
        <>
          <text x="15" y="118" fill="#e2e8f0" fontSize="9.5">Rasio r = 24/12 = 2:</text>
          <text x="15" y="136" fill="#4ade80" fontSize="10.5" fontWeight="700">U₃=48, U₄=96 (Kunci: 2;4)</text>
        </>
      ) : (
        <text x="15" y="126" fill="#94a3b8" fontSize="9.5">Rasio kelipatan tetap</text>
      )}
    </g>
  </svg>
);

/**
 * Soal 10 (No. 10): Koefisien Redaman Jembatan Gantung (Merasionalkan Bentuk Akar)
 */
export const WaveguideImpedanceSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="190" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      REDAMAN HIDROLIK JEMBATAN SEISMIK: RASIONALISASI AKAR
    </text>

    <g transform="translate(30, 48)">
      <rect width="185" height="135" rx="8" fill="#1e293b" stroke="#0284c7" strokeWidth="1.5" />
      <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="700">Rasio Koefisien Redaman</text>
      <text x="15" y="60" fill="#f8fafc" fontSize="13" fontWeight="700">
        R = (3 + √3) / (√6 - √2)
      </text>
      <text x="15" y="90" fill="#94a3b8" fontSize="10">Kalikan sekawan penyebut:</text>
      <text x="15" y="112" fill="#facc15" fontSize="11" fontWeight="600">× (√6 + √2) / (√6 + √2)</text>
    </g>

    <g transform="translate(245, 48)">
      <rect width="185" height="135" rx="8" fill="#1e293b" stroke={mode === 'solution' ? '#10b981' : '#64748b'} strokeWidth="1.5" />
      <text x="15" y="24" fill={mode === 'solution' ? '#34d399' : '#94a3b8'} fontSize="11" fontWeight="700">
        {mode === 'solution' ? 'Bentuk Rasional Akhir' : 'Langkah Penyederhanaan'}
      </text>
      {mode === 'solution' ? (
        <>
          <text x="15" y="55" fill="#a7f3d0" fontSize="10">Penyebut: (√6)² - (√2)² = 4</text>
          <text x="15" y="75" fill="#a7f3d0" fontSize="10">Pembilang: 4√6 + 6√2</text>
          <line x1="15" y1="88" x2="170" y2="88" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
          <text x="15" y="110" fill="#4ade80" fontSize="12" fontWeight="800">
            (2√6 + 3√2) / 2
          </text>
          <text x="15" y="126" fill="#cbd5e1" fontSize="9">(Kunci B)</text>
        </>
      ) : (
        <>
          <text x="15" y="60" fill="#cbd5e1" fontSize="10">Sederhanakan hasil kali suku:</text>
          <text x="15" y="80" fill="#94a3b8" fontSize="10">Keluarkan faktor persekutuan</text>
          <text x="15" y="105" fill="#94a3b8" fontSize="10">Bagi dengan penyebut</text>
        </>
      )}
    </g>
  </svg>
);

/**
 * Soal 11 (No. 11): Kultur Mikroalga Bio-Avtur (Pertumbuhan & Panen Diskrit)
 */
export const MicroserviceReplicationSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="200" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      KULTUR MIKROALGA BIO-AVTUR (DOUBLING 12 JAM, PANEN 1/4 HARI KE-2)
    </text>

    {[
      { t: 'Hari 0', count: '3 Jt', desc: 'Inokulasi Awal' },
      { t: 'Hari 1', count: '12 Jt', desc: '4x Lipat' },
      { t: 'Hari 2 (Pagi)', count: '48 Jt', desc: '16x Lipat' },
      { t: 'Hari 2 (Panen)', count: '36 Jt', desc: '-1/4 Panen' },
      {
        t: 'Hari 3',
        count: mode === 'solution' ? '144 Jt' : '?',
        desc: mode === 'solution' ? 'Hasil Akhir' : 'Target Evaluasi',
        highlight: mode === 'solution',
      },
    ].map((item, i) => {
      const x = 30 + i * 82;
      return (
        <g key={i}>
          <rect
            x={x}
            y={55}
            width="75"
            height="95"
            rx="8"
            fill="#1e293b"
            stroke={item.highlight ? '#10b981' : '#334155'}
            strokeWidth={item.highlight ? '2' : '1'}
          />
          <text x={x + 37} y={75} fill="#94a3b8" fontSize="8.5" textAnchor="middle">{item.t}</text>
          <text x={x + 37} y={105} fill={item.highlight ? '#4ade80' : '#ffffff'} fontSize="15" fontWeight="800" textAnchor="middle">
            {item.count}
          </text>
          <text x={x + 37} y={130} fill={item.highlight ? '#a7f3d0' : '#64748b'} fontSize="8" textAnchor="middle">
            {item.desc}
          </text>
        </g>
      );
    })}

    {mode === 'solution' && (
      <g>
        <rect x="25" y="165" width="410" height="25" rx="5" fill="#1e293b" stroke="#10b981" />
        <text x="230" y="181" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle">
          Setelah 3 Hari: 36 × 2 (Hari 2.5) = 72 ➔ 72 × 2 (Hari 3) = 144 Juta Sel (Kunci D)
        </text>
      </g>
    )}
  </svg>
);

/**
 * Soal 12 (No. 12): Pipa Transmisi Panas Bumi dengan Overlap Soket
 */
export const SolarPanelOverlapSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      JALUR PIPA GEOTHERMAL: SAMBUNGAN OVERLAP SOKET EKSPANSI
    </text>

    <g transform="translate(30, 48)">
      <text x="0" y="12" fill="#94a3b8" fontSize="9" fontWeight="600">1 Segmen: 500 cm</text>
      <rect x="0" y="18" width="130" height="18" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
      <text x="65" y="31" fill="#ffffff" fontSize="9" textAnchor="middle">500 cm</text>
    </g>

    <g transform="translate(30, 95)">
      <text x="0" y="12" fill="#94a3b8" fontSize="9" fontWeight="600">2 Segmen Tersambung: 988 cm</text>
      <rect x="0" y="18" width="130" height="18" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
      <rect x="125" y="18" width="8" height="18" fill="#f59e0b" />
      <rect x="125" y="18" width="130" height="18" rx="3" fill="#0284c7" fillOpacity="0.85" stroke="#38bdf8" strokeWidth="1" />
      <text x="130" y="31" fill="#ffffff" fontSize="9" textAnchor="middle">988 cm (Pertambahan tetap: +488 cm)</text>
    </g>

    <g transform="translate(30, 145)">
      <text x="0" y="12" fill="#94a3b8" fontSize="9" fontWeight="600">3 Segmen Tersambung: 1.476 cm</text>
      <rect x="0" y="18" width="110" height="18" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
      <rect x="105" y="18" width="110" height="18" rx="3" fill="#0284c7" fillOpacity="0.85" stroke="#38bdf8" strokeWidth="1" />
      <rect x="210" y="18" width="110" height="18" rx="3" fill="#0284c7" fillOpacity="0.7" stroke="#38bdf8" strokeWidth="1" />
      <text x="160" y="31" fill="#ffffff" fontSize="9" textAnchor="middle">1.476 cm</text>
    </g>

    {mode === 'solution' && (
      <g>
        <rect x="25" y="195" width="410" height="25" rx="5" fill="#1e293b" stroke="#10b981" />
        <text x="230" y="212" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle">
          Untuk 10 Segmen: L(10) = 500 + 9 × 488 = 4.892 cm (Kunci C)
        </text>
      </g>
    )}
  </svg>
);

/**
 * Soal 13 (No. 13): Rencana Modal Startup Satelit Maritim (Deret Aritmetika Bertahap)
 */
export const RoboticsBudgetTimelineSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="210" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      MODAL STARTUP SATELIT MARITIM 12 BULAN (TARGET: 300 JUTA)
    </text>

    <g transform="translate(30, 50)">
      <line x1="20" y1="90" x2="380" y2="90" stroke="#64748b" strokeWidth="1.5" />

      {/* Target line */}
      <line x1="20" y1="20" x2="380" y2="20" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" />
      <text x="385" y="24" fill="#fbbf24" fontSize="9" fontWeight="700">Target Rp300 Jt</text>

      {/* Months milestones */}
      <circle cx="40" cy="90" r="4" fill="#38bdf8" />
      <text x="40" y="110" fill="#94a3b8" fontSize="8" textAnchor="middle">Bulan 1</text>
      <text x="40" y="80" fill="#38bdf8" fontSize="8" textAnchor="middle">8 Jt</text>

      <circle cx="130" cy="90" r="4" fill="#ef4444" />
      <text x="130" y="110" fill="#f87171" fontSize="8" textAnchor="middle">Bln 4 (-10Jt)</text>

      <circle cx="210" cy="90" r="4" fill="#a855f7" />
      <text x="210" y="110" fill="#c084fc" fontSize="8" textAnchor="middle">Bln 7 (-25%)</text>

      <circle cx="280" cy="90" r="4" fill="#ef4444" />
      <text x="280" y="110" fill="#f87171" fontSize="8" textAnchor="middle">Bln 8 (-10Jt)</text>

      <circle cx="360" cy="90" r="4" fill="#22c55e" />
      <text x="360" y="110" fill="#4ade80" fontSize="8" textAnchor="middle">Bln 12</text>
    </g>

    {mode === 'solution' && (
      <g>
        <rect x="25" y="175" width="410" height="30" rx="5" fill="#1e293b" stroke="#10b981" />
        <text x="230" y="194" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontWeight="700">
          Kunci Jawaban: A. Salah | B. Salah | C. Benar
        </text>
      </g>
    )}
  </svg>
);

/**
 * Soal 14 (No. 14): Uji Tarik Sling Derek Peti Kemas (Geometri Beban Bertingkat)
 */
export const DroneStressTestGeomSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      UJI KETAHANAN SLING KOMPOSIT DEREK KONTAINER (r = 2)
    </text>

    <g transform="translate(30, 50)">
      <rect x="0" y="20" width="400" height="16" rx="4" fill="#334155" stroke="#64748b" strokeWidth="1.5" />

      {[
        { pt: 1, kg: '300 kg', x: 20 },
        { pt: 2, kg: '600 kg', x: 85 },
        { pt: 3, kg: '1.200 kg', x: 155 },
        { pt: 4, kg: mode === 'solution' ? '2.400 kg' : '?', x: 225 },
        { pt: 5, kg: mode === 'solution' ? '4.800 kg' : '?', x: 295 },
        { pt: 6, kg: mode === 'solution' ? '9.600 kg' : '?', x: 365 },
      ].map((load, i) => (
        <g key={i}>
          <line x1={load.x + 12} y1="0" x2={load.x + 12} y2="20" stroke="#f59e0b" strokeWidth="2" />
          <polygon points={`${load.x + 12},20 ${load.x + 8},12 ${load.x + 16},12`} fill="#f59e0b" />
          <circle cx={load.x + 12} cy="28" r="4" fill="#38bdf8" />
          <text x={load.x + 12} y="52" fill="#cbd5e1" fontSize="8" fontWeight="600" textAnchor="middle">P_{load.pt}</text>
          <text x={load.x + 12} y="66" fill="#facc15" fontSize="8.5" fontWeight="700" textAnchor="middle">{load.kg}</text>
        </g>
      ))}
    </g>

    {mode === 'solution' && (
      <g>
        <rect x="25" y="145" width="410" height="65" rx="8" fill="#1e293b" stroke="#10b981" />
        <text x="35" y="168" fill="#38bdf8" fontSize="10" fontWeight="700">Analisis Deret Geometri (Rasio r = 2):</text>
        <text x="35" y="188" fill="#cbd5e1" fontSize="9.5">• Titik 4, 5, 6 berturut-turut: 2.400 kg, 4.800 kg, 9.600 kg (Kunci D)</text>
      </g>
    )}
  </svg>
);

/**
 * Soal 15 (No. 15): Tekanan Termal Kapsul Re-Entry (Karakteristik Fungsi Kuadrat)
 */
export const ParabolicDamperCurveSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 250" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="230" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      PROFIL TEKANAN TERMAL KAPSUL RE-ENTRY: f(x) = 3(x² - 6x + 5)
    </text>

    <g transform="translate(60, 130)">
      <line x1="0" y1="63" x2="350" y2="63" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="355" y="66" fill="#f87171" fontSize="9" fontWeight="700">y = -15</text>

      <line x1="0" y1="0" x2="330" y2="0" stroke="#64748b" strokeWidth="1.5" />
      <line x1="40" y1="-80" x2="40" y2="80" stroke="#64748b" strokeWidth="1.5" />
      <text x="335" y="4" fill="#94a3b8" fontSize="10">X</text>
      <text x="45" y="-75" fill="#94a3b8" fontSize="10">Y</text>

      <path d="M 68,-56 Q 152,140 236,-56" fill="none" stroke="#10b981" strokeWidth="2.5" />

      <circle cx="152" cy="50" r="4" fill="#f59e0b" />
      <text x="152" y="70" fill="#fbbf24" fontSize="9.5" fontWeight="700" textAnchor="middle">
        {mode === 'solution' ? 'Puncak (3, -12)' : 'Titik Balik'}
      </text>

      <circle cx="96" cy="0" r="3" fill="#38bdf8" />
      <text x="96" y="-8" fill="#38bdf8" fontSize="9" textAnchor="middle">x = 1</text>

      <circle cx="208" cy="0" r="3" fill="#38bdf8" />
      <text x="208" y="-8" fill="#38bdf8" fontSize="9" textAnchor="middle">x = 5</text>
    </g>

    {mode === 'solution' && (
      <g>
        <rect x="25" y="195" width="410" height="24" rx="4" fill="#1e293b" stroke="#10b981" />
        <text x="230" y="211" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontWeight="700">
          ✓ Terbuka ke atas (a=3 &gt; 0) | ✗ Memotong y=-15 (Min=-12) | ✓ Tidak melalui Kuadran III
        </text>
      </g>
    )}
  </svg>
);

/**
 * Soal 16 (No. 16): Wadah Pendingin Baterai EV 60x60 (Optimasi Turunan)
 */
export const CompositeBoxOptimizationSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="210" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="30" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      POLA LEMBARAN WADAH BATERAI EV (60 cm × 60 cm)
    </text>

    <g transform="translate(45, 45)">
      <rect x="0" y="0" width="130" height="130" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />

      <rect x="0" y="0" width="30" height="30" fill="#ef4444" fillOpacity="0.4" stroke="#f87171" strokeWidth="1" />
      <rect x="100" y="0" width="30" height="30" fill="#ef4444" fillOpacity="0.4" stroke="#f87171" strokeWidth="1" />
      <rect x="0" y="100" width="30" height="30" fill="#ef4444" fillOpacity="0.4" stroke="#f87171" strokeWidth="1" />
      <rect x="100" y="100" width="30" height="30" fill="#ef4444" fillOpacity="0.4" stroke="#f87171" strokeWidth="1" />

      <line x1="30" y1="30" x2="100" y2="30" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="30" y1="100" x2="100" y2="100" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="30" y1="30" x2="30" y2="100" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="100" y1="30" x2="100" y2="100" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />

      <text x="15" y="18" fill="#fca5a5" fontSize="10" textAnchor="middle">x</text>
      <text x="65" y="68" fill="#38bdf8" fontSize="10" fontWeight="600" textAnchor="middle">Alas Kotak</text>
      <text x="65" y="82" fill="#94a3b8" fontSize="8" textAnchor="middle">(60 - 2x)</text>

      <line x1="-10" y1="0" x2="-10" y2="130" stroke="#cbd5e1" strokeWidth="1" />
      <text x="-16" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle" transform="rotate(-90 -16 70)">60 cm</text>
    </g>

    <g transform="translate(245, 55)">
      <polygon points="40,20 120,20 150,55 70,55" fill="#0f766e" stroke="#2dd4bf" strokeWidth="1.5" />
      <polygon points="40,20 70,55 70,95 40,60" fill="#115e59" stroke="#2dd4bf" strokeWidth="1.5" />
      <polygon points="70,55 150,55 150,95 70,95" fill="#134e4a" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="110" y="80" fill="#a7f3d0" fontSize="10" textAnchor="middle">60 - 2x</text>
      <text x="162" y="75" fill="#fde047" fontSize="10">t = x</text>

      {mode === 'solution' && (
        <g>
          <rect x="0" y="115" width="170" height="28" rx="6" fill="#1e293b" stroke="#10b981" />
          <text x="85" y="133" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle">
            x = 10 cm ➔ V = 16.000 cm³ (Kunci C)
          </text>
        </g>
      )}
    </g>
  </svg>
);

/**
 * Soal 17 (No. 17): Rangka Truss Jembatan Kereta Cepat (Kesebangunan)
 */
export const AntennaTrussSimilaritySVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 260" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="240" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      STRUKTUR RANGKA TRUSS JEMBATAN KERETA CEPAT (KESEBANGUNAN)
    </text>

    <g stroke="#38bdf8" strokeWidth="2" strokeLinecap="round">
      <line x1="230" y1="50" x2="110" y2="215" />
      <line x1="230" y1="50" x2="350" y2="215" />

      <line x1="200" y1="90" x2="260" y2="90" stroke="#f59e0b" strokeWidth="2" />
      <line x1="170" y1="130" x2="290" y2="130" stroke="#10b981" strokeWidth="2" />
      <line x1="140" y1="170" x2="320" y2="170" stroke="#a855f7" strokeWidth="2" />
      <line x1="110" y1="215" x2="350" y2="215" stroke="#ec4899" strokeWidth="2" />
    </g>

    <circle cx="230" cy="50" r="4" fill="#ffffff" />
    <text x="230" y="42" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">A</text>

    <circle cx="200" cy="90" r="3.5" fill="#f59e0b" />
    <text x="190" y="94" fill="#fbbf24" fontSize="11" fontWeight="700" textAnchor="end">B</text>
    <circle cx="260" cy="90" r="3.5" fill="#f59e0b" />
    <text x="270" y="94" fill="#fbbf24" fontSize="11" fontWeight="700">C</text>

    <circle cx="170" cy="130" r="3.5" fill="#10b981" />
    <text x="160" y="134" fill="#34d399" fontSize="11" fontWeight="700" textAnchor="end">D</text>
    <circle cx="290" cy="130" r="3.5" fill="#10b981" />
    <text x="300" y="134" fill="#34d399" fontSize="11" fontWeight="700">E</text>

    <circle cx="140" cy="170" r="3.5" fill="#a855f7" />
    <text x="130" y="174" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="end">F</text>
    <circle cx="320" cy="170" r="3.5" fill="#a855f7" />
    <text x="330" y="174" fill="#c084fc" fontSize="11" fontWeight="700">G</text>

    <circle cx="110" cy="215" r="3.5" fill="#ec4899" />
    <text x="100" y="219" fill="#f472b6" fontSize="11" fontWeight="700" textAnchor="end">H</text>
    <circle cx="350" cy="215" r="3.5" fill="#ec4899" />
    <text x="360" y="219" fill="#f472b6" fontSize="11" fontWeight="700">I</text>

    {mode === 'solution' && (
      <g>
        <rect x="25" y="195" width="70" height="42" rx="6" fill="#1e293b" stroke="#10b981" />
        <text x="60" y="212" fill="#94a3b8" fontSize="9" textAnchor="middle">Relasi Sisi:</text>
        <text x="60" y="228" fill="#4ade80" fontSize="10" fontWeight="700" textAnchor="middle">AB/AC = AD/AE</text>
      </g>
    )}
  </svg>
);

/**
 * Soal 18 (No. 18): Kemasan Pelindung Modul Baterai Drone Prisma Segitiga
 */
export const SensorShieldPackagingSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="210" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      KEMASAN PRISMA SEGITIGA BATERAI DRONE &amp; KARTON LAMINASI
    </text>

    {/* 3D Prism */}
    <g transform="translate(50, 50)">
      <polygon points="30,40 90,40 60,15" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
      <polygon points="30,40 60,15 60,95 30,120" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
      <polygon points="90,40 60,15 60,95 90,120" fill="#0ea5e9" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="60" y="135" fill="#e2e8f0" fontSize="9" textAnchor="middle">Alas a=6, t=4, T=15 cm</text>
    </g>

    {/* Sheet comparison */}
    <g transform="translate(200, 50)">
      <rect width="215" height="120" rx="8" fill="#1e293b" stroke="#334155" />
      <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="700">Pilihan Karton Laminasi</text>
      <text x="15" y="48" fill="#cbd5e1" fontSize="9.5">• Reguler: 40×60 cm (Rp5.000, 2 pola)</text>
      <text x="15" y="68" fill="#cbd5e1" fontSize="9.5">• Jumbo: 80×120 cm (Rp16.000, 8 pola)</text>
      <line x1="15" y1="80" x2="200" y2="80" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      {mode === 'solution' ? (
        <text x="15" y="102" fill="#4ade80" fontSize="10.5" fontWeight="700">
          Maksimum Karton Jumbo: 800 Kotak (Kunci D)
        </text>
      ) : (
        <text x="15" y="102" fill="#facc15" fontSize="10" fontWeight="600">
          Anggaran Maks: Rp1.600.000,00
        </text>
      )}
    </g>
  </svg>
);

/**
 * Soal 19 (No. 19): Seismograf Simpangan Kuadran II (Sudut Tumpul)
 */
export const TurbineBladeTrigQuadrantSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      FASE SUDUT DEFLEKSI SEISMOGRAF KUADRAN II (SUDUT TUMPUL)
    </text>

    <g transform="translate(230, 145)">
      <circle cx="0" cy="0" r="90" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

      <line x1="-120" y1="0" x2="120" y2="0" stroke="#64748b" strokeWidth="1.5" />
      <line x1="0" y1="-115" x2="0" y2="40" stroke="#64748b" strokeWidth="1.5" />
      <text x="125" y="4" fill="#94a3b8" fontSize="10">X</text>
      <text x="5" y="-115" fill="#94a3b8" fontSize="10">Y</text>

      <line x1="0" y1="0" x2="-78" y2="-45" stroke="#f59e0b" strokeWidth="2.5" />
      <circle cx="-78" cy="-45" r="4" fill="#f59e0b" />

      <line x1="-78" y1="-45" x2="-78" y2="0" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
      <rect x="-78" y="-10" width="10" height="10" fill="none" stroke="#64748b" strokeWidth="1" />

      <path d="M 30,0 A 30 30 0 0 0 -26,-15" fill="none" stroke="#ec4899" strokeWidth="2" />
      <text x="-12" y="-22" fill="#f472b6" fontSize="11" fontWeight="700">Sudut A</text>

      <text x="-40" y="-30" fill="#f59e0b" fontSize="10" fontWeight="600">r = k</text>
      <text x="-95" y="-20" fill="#38bdf8" fontSize="10">y = 1</text>
      {mode === 'solution' && (
        <text x="-50" y="14" fill="#4ade80" fontSize="9.5">x = -√(k² - 1)</text>
      )}
    </g>

    {mode === 'solution' && (
      <g>
        <rect x="25" y="195" width="410" height="25" rx="5" fill="#1e293b" stroke="#10b981" />
        <text x="230" y="212" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle">
          sin A = 1/k ➔ cos A = -√(k² - 1) / k (Kuadran II: Kosinus Negatif) (Kunci C)
        </text>
      </g>
    )}
  </svg>
);

/**
 * Soal 20 (No. 20): Kamar Uji Anechoic EMC Kubus (s = 10 m, Jarak G ke O)
 */
export const Cube3DSpaceFrameSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => {
  const P = { x: 140, y: 190 }; // A
  const Q = { x: 260, y: 190 }; // B
  const R = { x: 320, y: 140 }; // C
  const S = { x: 200, y: 140 }; // D

  const T = { x: 140, y: 90 }; // E
  const U = { x: 260, y: 90 }; // F
  const V = { x: 320, y: 40 }; // G
  const W = { x: 200, y: 40 }; // H

  const O = { x: (P.x + R.x) / 2, y: (P.y + R.y) / 2 };

  return (
    <svg viewBox="0 0 460 270" className={`w-full max-w-[420px] mx-auto ${className}`}>
      <rect x="10" y="10" width="440" height="250" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
        RUANG KUBUS EMC ABCD.EFGH (RUSUK s = 10 m)
      </text>

      <g stroke="#64748b" strokeWidth="1.8" strokeDasharray="4 4">
        <line x1={P.x} y1={P.y} x2={S.x} y2={S.y} />
        <line x1={S.x} y1={S.y} x2={R.x} y2={R.y} />
        <line x1={S.x} y1={S.y} x2={W.x} y2={W.y} />
        <line x1={Q.x} y1={Q.y} x2={S.x} y2={S.y} stroke="#475569" strokeWidth="1.2" />
        <line x1={R.x} y1={R.y} x2={O.x} y2={O.y} stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
      </g>

      <line x1={P.x} y1={P.y} x2={R.x} y2={R.y} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1={V.x} y1={V.y} x2={O.x} y2={O.y} stroke="#ec4899" strokeWidth="2.5" />
      <rect x={R.x - 12} y={R.y - 12} width="10" height="10" fill="none" stroke="#22d3ee" strokeWidth="1.2" />

      <g stroke="#38bdf8" strokeWidth="2" strokeLinecap="round">
        <line x1={P.x} y1={P.y} x2={Q.x} y2={Q.y} />
        <line x1={Q.x} y1={Q.y} x2={R.x} y2={R.y} />
        <line x1={P.x} y1={P.y} x2={T.x} y2={T.y} />
        <line x1={Q.x} y1={Q.y} x2={U.x} y2={U.y} />
        <line x1={R.x} y1={R.y} x2={V.x} y2={V.y} stroke="#22d3ee" strokeWidth="2.5" />
        <line x1={T.x} y1={T.y} x2={U.x} y2={U.y} />
        <line x1={U.x} y1={U.y} x2={V.x} y2={V.y} />
        <line x1={V.x} y1={V.y} x2={W.x} y2={W.y} />
        <line x1={W.x} y1={W.y} x2={T.x} y2={T.y} />
      </g>

      <text x={P.x - 14} y={P.y + 12} fill="#e2e8f0" fontSize="11" fontWeight="700">A</text>
      <text x={Q.x + 8} y={Q.y + 12} fill="#e2e8f0" fontSize="11" fontWeight="700">B</text>
      <text x={R.x + 12} y={R.y + 4} fill="#e2e8f0" fontSize="11" fontWeight="700">C</text>
      <text x={S.x - 14} y={S.y - 4} fill="#94a3b8" fontSize="10">D</text>

      <text x={T.x - 14} y={T.y - 4} fill="#e2e8f0" fontSize="11" fontWeight="700">E</text>
      <text x={U.x + 8} y={U.y - 4} fill="#e2e8f0" fontSize="11" fontWeight="700">F</text>
      <text x={V.x + 12} y={V.y} fill="#f472b6" fontSize="12" fontWeight="800">G</text>
      <text x={W.x - 12} y={W.y - 6} fill="#e2e8f0" fontSize="11" fontWeight="700">H</text>

      <circle cx={O.x} cy={O.y} r="4" fill="#ec4899" />
      <text x={O.x - 8} y={O.y + 16} fill="#f472b6" fontSize="11" fontWeight="800">O</text>

      <text x="335" y="90" fill="#22d3ee" fontSize="9.5">GC = 10 m</text>
      {mode === 'solution' && (
        <>
          <text x="270" y="172" fill="#fbbf24" fontSize="9.5">CO = 5√2 m</text>
          <text x="280" y="115" fill="#4ade80" fontSize="10.5" fontWeight="700">GO = 5√6 m (Kunci C)</text>
        </>
      )}
    </svg>
  );
};

/**
 * Soal 21 (No. 21): Panel Fasad Gedung Riset Hijau (Komposit Persegi Panjang + Segitiga)
 */
export const CleanroomWindowCompositeSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 250" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="230" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      DESAIN PANEL FASAD KOMPOSIT GEDUNG RISET HIJAU
    </text>

    <g transform="translate(0, 5)">
      <rect x="150" y="110" width="160" height="80" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
      <polygon points="150,110 230,50 310,110" fill="#06b6d4" fillOpacity="0.3" stroke="#22d3ee" strokeWidth="2" />

      <line x1="230" y1="50" x2="230" y2="190" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="150" y1="150" x2="310" y2="150" stroke="#0284c7" strokeWidth="1.5" />

      <line x1="150" y1="205" x2="310" y2="205" stroke="#cbd5e1" strokeWidth="1" />
      <text x="230" y="218" fill="#cbd5e1" fontSize="10" fontWeight="600" textAnchor="middle">3 meter</text>

      <line x1="325" y1="110" x2="325" y2="190" stroke="#cbd5e1" strokeWidth="1" />
      <text x="335" y="154" fill="#cbd5e1" fontSize="10">2 m</text>

      <line x1="325" y1="50" x2="325" y2="110" stroke="#cbd5e1" strokeWidth="1" />
      <text x="335" y="84" fill="#22d3ee" fontSize="10">1,2 m</text>
    </g>

    {mode === 'solution' && (
      <g>
        <rect x="25" y="200" width="130" height="30" rx="4" fill="#1e293b" stroke="#10b981" />
        <text x="90" y="218" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle">
          30 Unit = 234 m² (Kunci C)
        </text>
      </g>
    )}
  </svg>
);

/**
 * Soal 22 (No. 22): Rangka Pelindung Bawah Kapal Selam (Trapesium Sama Kaki)
 */
export const DroneWingTrapezoidAnglesSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => {
  const A = { x: 80, y: 190 };
  const B = { x: 380, y: 190 };
  const C = { x: 310, y: 70 };
  const D = { x: 150, y: 70 };

  return (
    <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
      <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
        GEOMETRI PELINDUNG KAPAL SELAM: TRAPESIUM SAMA KAKI
      </text>

      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`}
        fill="#0284c7"
        fillOpacity="0.2"
        stroke="#38bdf8"
        strokeWidth="2.5"
      />

      <line x1={B.x} y1={B.y} x2={D.x} y2={D.y} stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />

      <polygon points="230,186 238,190 230,194" fill="#38bdf8" />
      <polygon points="230,66 238,70 230,74" fill="#38bdf8" />

      <line x1="112" y1="126" x2="118" y2="134" stroke="#a855f7" strokeWidth="2" />
      <line x1="342" y1="126" x2="348" y2="134" stroke="#a855f7" strokeWidth="2" />

      <path d="M 120,190 A 40 40 0 0 0 94,152" fill="none" stroke="#22c55e" strokeWidth="2" />
      <text x="110" y="172" fill="#4ade80" fontSize="10" fontWeight="700">65°</text>

      <path d="M 320,190 A 60 60 0 0 1 332,165" fill="none" stroke="#ec4899" strokeWidth="2" />
      <text x="310" y="180" fill="#f472b6" fontSize="10" fontWeight="700">25°</text>

      <text x={A.x - 14} y={A.y + 14} fill="#e2e8f0" fontSize="12" fontWeight="800">A</text>
      <text x={B.x + 8} y={B.y + 14} fill="#e2e8f0" fontSize="12" fontWeight="800">B</text>
      <text x={C.x + 8} y={C.y - 8} fill="#e2e8f0" fontSize="12" fontWeight="800">C</text>
      <text x={D.x - 14} y={D.y - 8} fill="#e2e8f0" fontSize="12" fontWeight="800">D</text>

      <text x="230" y="215" fill="#94a3b8" fontSize="9.5" textAnchor="middle">
        {mode === 'solution'
          ? 'AD = BC, AB ∥ DC ➔ ∠BCD = 115°, ∠CBD = 40°, ∠BDC = 25° (Kunci: A=B, B=B, C=S)'
          : 'AD = BC (Sama Kaki), AB ∥ DC. Diberikan ∠BAD = 65° dan ∠ABD = 25°.'}
      </text>
    </svg>
  );
};

/**
 * Soal 23 (No. 23): Lengan Robotik Bedah Mikro 60 deg (Trigonometri Sudut Istimewa)
 */
export const ObservatoryLadderSensorSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      ELEVASI LENGAN ROBOT BEDAH MIKRO (TRIGONOMETRI 60°)
    </text>

    <g transform="translate(60, 45)">
      <line x1="80" y1="0" x2="80" y2="140" stroke="#64748b" strokeWidth="4" />
      <line x1="50" y1="140" x2="280" y2="140" stroke="#64748b" strokeWidth="4" />
      <rect x="80" y="125" width="15" height="15" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

      <line x1="170" y1="140" x2="80" y2="10" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />

      <path d="M 140,140 A 30 30 0 0 0 155,118" fill="none" stroke="#10b981" strokeWidth="2" />
      <text x="145" y="132" fill="#34d399" fontSize="11" fontWeight="700">60°</text>

      <text x="135" y="70" fill="#fbbf24" fontSize="11" fontWeight="700" transform="rotate(-55 135 70)">
        Panjang = 8 meter
      </text>

      <line x1="60" y1="10" x2="60" y2="140" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
      <text x="45" y="80" fill={mode === 'solution' ? '#4ade80' : '#38bdf8'} fontSize="11" fontWeight="800" textAnchor="end">
        {mode === 'solution' ? 'h = 4√3 m' : 'Tinggi h = ?'}
      </text>
    </g>

    {mode === 'solution' && (
      <g>
        <rect x="25" y="195" width="410" height="24" rx="4" fill="#1e293b" stroke="#10b981" />
        <text x="230" y="211" fill="#4ade80" fontSize="10" textAnchor="middle" fontWeight="700">
          sin 60° = h / 8 ➔ h = 8 × (1/2 √3) = 4√3 meter (Kunci C)
        </text>
      </g>
    )}
  </svg>
);

/**
 * Soal 24 (No. 24): Proyeksi Sonar Batimetri Bawah Laut (Dilatasi Skala Optik)
 */
export const CockpitHUDProjectionSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="210" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      PROYEKSI CITRA SONAR BATIMETRI: DILATASI BERBASIS JARAK
    </text>

    <polygon points="40,95 70,110 40,125" fill="#f59e0b" stroke="#fbbf24" strokeWidth="1.5" />
    <text x="50" y="145" fill="#fbbf24" fontSize="9" textAnchor="middle">Proyektor</text>

    <polygon points="70,110 320,50 320,170" fill="#38bdf8" fillOpacity="0.12" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />

    <rect x="320" y="45" width="10" height="130" rx="2" fill="#475569" stroke="#94a3b8" />
    <text x="345" y="90" fill="#cbd5e1" fontSize="9">Layar Navigasi:</text>
    <text x="345" y="105" fill="#38bdf8" fontSize="9.5" fontWeight="700">2,5 m × 1,5 m</text>

    <rect x="325" y="65" width="6" height="90" fill={mode === 'solution' ? '#22c55e' : '#64748b'} />
    <text x="345" y="130" fill={mode === 'solution' ? '#4ade80' : '#cbd5e1'} fontSize="9" fontWeight="600">
      {mode === 'solution' ? 'Hasil Proyeksi:' : 'Citra Proyeksi'}
    </text>
    <text x="345" y="145" fill={mode === 'solution' ? '#4ade80' : '#cbd5e1'} fontSize="9.5" fontWeight="700">
      {mode === 'solution' ? '1,0 m × 1,0 m' : 'Skala k = 0,5 × d'}
    </text>

    <line x1="70" y1="180" x2="320" y2="180" stroke="#cbd5e1" strokeWidth="1" />
    <text x="195" y="195" fill="#cbd5e1" fontSize="9.5" textAnchor="middle">
      {mode === 'solution'
        ? 'Jarak d = 4 m ➔ k = 2,0×. Dimensi 1,0m × 1,0m muat penuh di layar (Kunci: A=B, B=B, C=S)'
        : 'Jarak penempatan proyektor d = 4 meter dari layar'}
    </text>
  </svg>
);

/**
 * Soal 25 (No. 25): Alokasi Armada Bus Listrik Cerdas (Peluang Majemuk Inklusi-Eksklusi)
 */
export const DataCenterRackSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 260" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <defs>
      <linearGradient id="dcBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="fiberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="440" height="240" rx="12" fill="url(#dcBg)" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      ARMADA BUS LISTRIK DEPO PUSAT: PELUANG GABUNGAN (N = 40)
    </text>

    <circle cx="180" cy="135" r="75" fill="url(#liquidGrad)" stroke="#06b6d4" strokeWidth="2" />
    <circle cx="280" cy="135" r="75" fill="url(#fiberGrad)" stroke="#8b5cf6" strokeWidth="2" />

    {mode === 'solution' ? (
      <>
        <text x="145" y="130" fill="#e2e8f0" fontSize="16" fontWeight="700" textAnchor="middle">16</text>
        <text x="145" y="148" fill="#67e8f9" fontSize="10" textAnchor="middle">Fast Charging Saja</text>

        <text x="230" y="130" fill="#ffffff" fontSize="18" fontWeight="800" textAnchor="middle">8</text>
        <text x="230" y="148" fill="#fde047" fontSize="10" fontWeight="600" textAnchor="middle">Keduanya</text>

        <text x="315" y="130" fill="#e2e8f0" fontSize="16" fontWeight="700" textAnchor="middle">8</text>
        <text x="315" y="148" fill="#c4b5fd" fontSize="10" textAnchor="middle">Suspensi Saja</text>
      </>
    ) : (
      <>
        <text x="145" y="135" fill="#67e8f9" fontSize="11" fontWeight="700" textAnchor="middle">Fast Charging</text>
        <text x="230" y="135" fill="#fde047" fontSize="10" fontWeight="600" textAnchor="middle">Irisan</text>
        <text x="315" y="135" fill="#c4b5fd" fontSize="11" fontWeight="700" textAnchor="middle">Suspensi Udara</text>
      </>
    )}

    <rect x="330" y="25" width="105" height="34" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
    <text x="382" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Total: 40 Unit</text>
    <text x="382" y="53" fill="#64748b" fontSize="8" textAnchor="middle">Depo Utama</text>

    <circle cx="110" cy="230" r="5" fill="#06b6d4" />
    <text x="122" y="233" fill="#94a3b8" fontSize="10">Fast Charging (24 unit)</text>
    <circle cx="270" cy="230" r="5" fill="#8b5cf6" />
    <text x="282" y="233" fill="#94a3b8" fontSize="10">Suspensi Udara (16 unit)</text>
  </svg>
);

/**
 * Soal 26 (No. 26): Pengujian Sel Surya Baru (Peluang Sederhana & Komplemen)
 */
export const IoTSensorArraySVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => {
  const cells = [
    { label: 'Mono', color: '#06b6d4' },
    { label: 'Mono', color: '#06b6d4' },
    { label: 'Mono', color: '#06b6d4' },
    { label: 'Mono', color: '#06b6d4' },
    { label: 'Mono', color: '#06b6d4' },
    { label: 'Mono', color: '#06b6d4' },
    { label: 'Mono', color: '#06b6d4' },
    { label: 'Mono', color: '#06b6d4' },
    { label: 'Perov', color: '#eab308' },
    { label: 'Perov', color: '#eab308' },
    { label: 'Perov', color: '#eab308' },
    { label: 'Perov', color: '#eab308' },
    { label: 'Perov', color: '#eab308' },
    { label: 'Perov', color: '#eab308' },
    { label: 'Poli', color: '#a855f7' },
    { label: 'Poli', color: '#a855f7' },
    { label: 'Poli', color: '#a855f7' },
    { label: 'Poli', color: '#a855f7' },
    { label: 'Tandem', color: '#10b981' },
    { label: 'Tandem', color: '#10b981' },
  ];

  return (
    <svg viewBox="0 0 460 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
      <rect x="10" y="10" width="440" height="200" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
        BATCH SAMPEL QC: 20 SEL SURYA FOTOVOLTAIK
      </text>

      {cells.map((item, idx) => {
        const col = idx % 10;
        const row = Math.floor(idx / 10);
        const x = 25 + col * 41;
        const y = 48 + row * 55;
        return (
          <g key={idx}>
            <rect x={x} y={y} width="36" height="46" rx="6" fill="#1e293b" stroke={item.color} strokeWidth="1.2" />
            <circle cx={x + 18} cy={y + 14} r="3" fill={item.color} />
            <text x={x + 18} y={y + 32} fill="#f8fafc" fontSize="7.5" fontWeight="700" textAnchor="middle">{item.label}</text>
          </g>
        );
      })}

      {mode === 'solution' ? (
        <g>
          <rect x="25" y="165" width="410" height="30" rx="4" fill="#1e293b" stroke="#10b981" />
          <text x="40" y="184" fill="#67e8f9" fontSize="9">8 Mono (40%)</text>
          <text x="145" y="184" fill="#fde047" fontSize="9">6 Perovskit (30%)</text>
          <text x="270" y="184" fill="#d8b4fe" fontSize="9">4 Poli (20%)</text>
          <text x="365" y="184" fill="#6ee7b7" fontSize="9">2 Tandem (10%)</text>
        </g>
      ) : (
        <g>
          <rect x="25" y="168" width="410" height="24" rx="4" fill="#1e293b" />
          <text x="230" y="184" fill="#94a3b8" fontSize="9" textAnchor="middle">
            Total Populasi Sampel = 20 Unit (Monokristalin, Perovskit, Polikristalin, Tandem)
          </text>
        </g>
      )}
    </svg>
  );
};

/**
 * Soal 27 (No. 27): Pembangkit Mikrohidro 7 DAS (Rekonstruksi Nilai Hilang)
 */
export const DataTrafficBarSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => {
  const bars = [
    { label: 'DAS A', val: 5500, color: '#38bdf8' },
    { label: 'DAS B', val: 4200, color: '#818cf8' },
    { label: 'DAS C', val: 6000, color: '#34d399' },
    { label: 'DAS D', val: 3800, color: '#f59e0b' },
    { label: 'DAS E', val: mode === 'solution' ? 2500 : 0, missing: mode !== 'solution', color: '#10b981' },
    { label: 'DAS F', val: 4700, color: '#ec4899' },
    { label: 'DAS G', val: 3300, color: '#a855f7' },
  ];

  const maxVal = 7000;
  const chartHeight = 135;
  const chartBottom = 185;

  return (
    <svg viewBox="0 0 520 250" className={`w-full max-w-[480px] mx-auto ${className}`}>
      <rect x="10" y="10" width="500" height="230" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
        DAYA LISTRIK MIKROHIDRO 7 DAS (TOTAL KAPASITAS = 30.000 kW)
      </text>

      {[0, 2000, 4000, 6000].map((tick) => {
        const y = chartBottom - (tick / maxVal) * chartHeight;
        return (
          <g key={tick}>
            <line x1="60" y1={y} x2="480" y2={y} stroke="#334155" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="52" y={y + 4} fill="#64748b" fontSize="9" textAnchor="end">{tick}</text>
          </g>
        );
      })}

      {bars.map((bar, i) => {
        const x = 75 + i * 58;
        if (bar.missing) {
          return (
            <g key={i}>
              <rect
                x={x}
                y={chartBottom - (2500 / maxVal) * chartHeight}
                width="40"
                height={(2500 / maxVal) * chartHeight}
                rx="4"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <text x={x + 20} y={chartBottom - (2500 / maxVal) * chartHeight - 8} fill="#f87171" fontSize="11" fontWeight="800" textAnchor="middle">?</text>
              <text x={x + 20} y={chartBottom + 16} fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle">DAS E</text>
            </g>
          );
        }
        const h = (bar.val / maxVal) * chartHeight;
        const y = chartBottom - h;
        return (
          <g key={i}>
            <rect x={x} y={y} width="40" height={h} rx="4" fill={bar.color} opacity="0.9" />
            <text x={x + 20} y={y - 5} fill="#cbd5e1" fontSize="9" fontWeight="600" textAnchor="middle">{bar.val}</text>
            <text x={x + 20} y={chartBottom + 16} fill="#94a3b8" fontSize="9" textAnchor="middle">{bar.label.replace('DAS ', '')}</text>
          </g>
        );
      })}

      <text x="260" y={chartBottom + 35} fill="#94a3b8" fontSize="9" textAnchor="middle">
        {mode === 'solution'
          ? 'DAS E = 30.000 - (5.500 + 4.200 + 6.000 + 3.800 + 4.700 + 3.300) = 2.500 kW (Kunci C)'
          : '*Data telemetri sensor DAS E terputus sementara. Total daya 7 DAS = 30.000 kW.'}
      </text>
    </svg>
  );
};

/**
 * Soal 28 (No. 28): Token RFID Peti Kemas Maritim (Aturan Pengisian Tempat Tanpa Pengulangan)
 */
export const IoTTokenPermutationSVG: React.FC<VisualProps> = ({ className = '', mode = 'question' }) => (
  <svg viewBox="0 0 460 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="200" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      KODE RFID PETI KEMAS: FORMAT H₁-A₁-H₂-A₂-H₃
    </text>

    {[
      { label: 'Slot 1: H₁', type: 'Huruf Ke-1', ways: mode === 'solution' ? '26' : '?', color: '#0284c7' },
      { label: 'Slot 2: A₁', type: 'Angka Ke-1', ways: mode === 'solution' ? '10' : '?', color: '#f59e0b' },
      { label: 'Slot 3: H₂', type: 'Huruf Ke-2', ways: mode === 'solution' ? '25' : '?', color: '#0284c7' },
      { label: 'Slot 4: A₂', type: 'Angka Ke-2', ways: mode === 'solution' ? '9' : '?', color: '#f59e0b' },
      { label: 'Slot 5: H₃', type: 'Huruf Ke-3', ways: mode === 'solution' ? '24' : '?', color: '#0284c7' },
    ].map((slot, i) => {
      const x = 32 + i * 80;
      return (
        <g key={i}>
          <rect x={x} y={55} width="72" height="75" rx="8" fill="#1e293b" stroke={slot.color} strokeWidth="2" />
          <text x={x + 36} y={75} fill="#94a3b8" fontSize="8.5" textAnchor="middle">{slot.label}</text>
          <text x={x + 36} y={104} fill="#ffffff" fontSize="22" fontWeight="900" textAnchor="middle">
            {slot.ways}
          </text>
          <text x={x + 36} y={122} fill={slot.color} fontSize="8" textAnchor="middle">{slot.type}</text>
        </g>
      );
    })}

    {mode === 'solution' ? (
      <g>
        <rect x="25" y="145" width="410" height="42" rx="6" fill="#1e293b" stroke="#10b981" />
        <text x="230" y="162" fill="#94a3b8" fontSize="9" textAnchor="middle">
          Kombinasi Total = 26 × 10 × 25 × 9 × 24 (Tanpa Pengulangan Huruf &amp; Angka)
        </text>
        <text x="230" y="178" fill="#4ade80" fontSize="11" fontWeight="800" textAnchor="middle">
          = 1.404.000 Variasi Kode Pelacak Berbeda (Kunci C)
        </text>
      </g>
    ) : (
      <g>
        <rect x="25" y="150" width="410" height="34" rx="6" fill="#1e293b" stroke="#334155" />
        <text x="230" y="172" fill="#cbd5e1" fontSize="9.5" textAnchor="middle">
          Aturan: 26 Huruf (A-Z) dan 10 Angka (0-9) tanpa pengulangan huruf maupun angka
        </text>
      </g>
    )}
  </svg>
);

/**
 * Dispatcher for question visual SVGs
 */
export const QuestionVisual: React.FC<{ svgId?: string; className?: string; mode?: 'question' | 'solution' }> = ({
  svgId,
  className = '',
  mode = 'question',
}) => {
  if (!svgId) return null;
  switch (svgId) {
    case 'datacenter_rack':
      return <DataCenterRackSVG className={className} mode={mode} />;
    case 'iot_sensor_array':
      return <IoTSensorArraySVG className={className} mode={mode} />;
    case 'servo_sensor_cost':
      return <ServoSensorCostSVG className={className} mode={mode} />;
    case 'data_traffic_bar':
      return <DataTrafficBarSVG className={className} mode={mode} />;
    case 'cartesian_inequality':
      return <CartesianLinearInequalitySVG className={className} mode={mode} />;
    case 'compound_growth':
      return <CompoundGrowthInvestmentSVG className={className} mode={mode} />;
    case 'composite_machine':
      return <CompositeFunctionMachineSVG className={className} mode={mode} />;
    case 'satellite_power':
      return <SatellitePowerBudgetSVG className={className} mode={mode} />;
    case 'concentric_solar':
      return <ConcentricSolarCellSVG className={className} mode={mode} />;
    case 'waveguide_impedance':
      return <WaveguideImpedanceSVG className={className} mode={mode} />;
    case 'microservice_replication':
      return <MicroserviceReplicationSVG className={className} mode={mode} />;
    case 'box_optimization':
      return <CompositeBoxOptimizationSVG className={className} mode={mode} />;
    case 'antenna_similarity':
      return <AntennaTrussSimilaritySVG className={className} mode={mode} />;
    case 'solar_overlap':
      return <SolarPanelOverlapSVG className={className} mode={mode} />;
    case 'robotics_budget_timeline':
      return <RoboticsBudgetTimelineSVG className={className} mode={mode} />;
    case 'sensor_shield_packaging':
      return <SensorShieldPackagingSVG className={className} mode={mode} />;
    case 'trig_quadrant_2':
      return <TurbineBladeTrigQuadrantSVG className={className} mode={mode} />;
    case 'drone_stress_test':
      return <DroneStressTestGeomSVG className={className} mode={mode} />;
    case 'microfab_procurement':
      return <MicroFabProcurementSVG className={className} mode={mode} />;
    case 'drone_assembly_opt':
      return <DroneAssemblyOptimizationSVG className={className} mode={mode} />;
    case 'cube_3d_frame':
      return <Cube3DSpaceFrameSVG className={className} mode={mode} />;
    case 'cleanroom_window':
      return <CleanroomWindowCompositeSVG className={className} mode={mode} />;
    case 'drone_trapezoid':
      return <DroneWingTrapezoidAnglesSVG className={className} mode={mode} />;
    case 'sensor_ladder':
      return <ObservatoryLadderSensorSVG className={className} mode={mode} />;
    case 'parabolic_damper':
      return <ParabolicDamperCurveSVG className={className} mode={mode} />;
    case 'cockpit_hud':
      return <CockpitHUDProjectionSVG className={className} mode={mode} />;
    case 'iot_token':
      return <IoTTokenPermutationSVG className={className} mode={mode} />;
    // New Bank 2025 Cases
    case 'p1_soal_10_angles':
      return <P1Soal10AnglesSVG className={className} mode={mode} />;
    case 'p1_soal_11_kandang':
      return <P1Soal11KandangAyamSVG className={className} mode={mode} />;
    case 'p1_soal_12_trapesium':
      return <P1Soal12TrapesiumSebangunSVG className={className} mode={mode} />;
    case 'p1_soal_13_rak_rumah':
      return <P1Soal13RakBukuRumahSVG className={className} mode={mode} />;
    case 'p1_soal_15_kabel_lampu':
      return <P1Soal15KabelLampuSVG className={className} mode={mode} />;
    case 'p1_soal_16_tetes_air':
      return <P1Soal16TetesAirSVG className={className} mode={mode} />;
    case 'p1_soal_18_boks_air':
      return <P1Soal18BoksAirMineralSVG className={className} mode={mode} />;
    case 'p1_soal_20_segitiga_trig':
      return <P1Soal20SegitigaTrigSVG className={className} mode={mode} />;
    case 'p1_soal_21_line_karir':
      return <P1Soal21LineKarirSVG className={className} mode={mode} />;
    case 'p2_soal_9_sptldv':
      return <P2Soal9SptldvCartesianSVG className={className} mode={mode} />;
    case 'p2_soal_10_angles_supp':
      return <P2Soal10AnglesSuppSVG className={className} mode={mode} />;
    case 'p2_soal_12_tiang_gedung':
      return <P2Soal12TiangGedungSVG className={className} mode={mode} />;
    case 'p2_soal_13_kebun_trapesium':
      return <P2Soal13KebunTrapesiumSVG className={className} mode={mode} />;
    case 'p2_soal_17_jam_dinding':
      return <P2Soal17JamDindingSVG className={className} mode={mode} />;
    case 'p2_soal_20_segitiga_trig2':
      return <P2Soal20SegitigaTrig2SVG className={className} mode={mode} />;
    case 'p2_soal_21_line_ekskul':
      return <P2Soal21LineEkskulSVG className={className} mode={mode} />;
    case 'p3_soal_1_segitiga_trig3':
      return <P2Soal20SegitigaTrig2SVG className={className} mode={mode} />;
    case 'p3_soal_2_kotak_terbuka':
      return <P1Soal11KandangAyamSVG className={className} mode={mode} />;
    case 'p3_soal_3_kipas_tangan':
      return <P3Soal3KipasTanganSVG className={className} mode={mode} />;
    default:
      return null;
  }
};
