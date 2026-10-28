import React from 'react';

// Common SVG container wrapper
interface VisualProps {
  className?: string;
}

/**
 * Soal 1: Data Center Rack Allocation (Venn diagram & Server racks)
 */
export const DataCenterRackSVG: React.FC<VisualProps> = ({ className = '' }) => (
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
    <text x="25" y="32" fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="600">
      ZONE ALPHA: RAK SERVER DATA CENTER (N = 30)
    </text>

    <circle cx="180" cy="135" r="75" fill="url(#liquidGrad)" stroke="#06b6d4" strokeWidth="2" />
    <circle cx="280" cy="135" r="75" fill="url(#fiberGrad)" stroke="#8b5cf6" strokeWidth="2" />

    <text x="145" y="130" fill="#e2e8f0" fontSize="16" fontWeight="700" textAnchor="middle">12</text>
    <text x="145" y="148" fill="#67e8f9" fontSize="10" textAnchor="middle">Pendingin Saja</text>

    <text x="230" y="130" fill="#ffffff" fontSize="18" fontWeight="800" textAnchor="middle">6</text>
    <text x="230" y="148" fill="#fde047" fontSize="10" fontWeight="600" textAnchor="middle">Keduanya</text>

    <text x="315" y="130" fill="#e2e8f0" fontSize="16" fontWeight="700" textAnchor="middle">4</text>
    <text x="315" y="148" fill="#c4b5fd" fontSize="10" textAnchor="middle">100 Gbps Saja</text>

    <rect x="340" y="25" width="90" height="34" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
    <text x="385" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Standar: 8 Unit</text>
    <text x="385" y="53" fill="#64748b" fontSize="8" textAnchor="middle">(Total = 30)</text>

    <circle cx="110" cy="230" r="5" fill="#06b6d4" />
    <text x="122" y="233" fill="#94a3b8" fontSize="10">Liquid Cooling (18)</text>
    <circle cx="270" cy="230" r="5" fill="#8b5cf6" />
    <text x="282" y="233" fill="#94a3b8" fontSize="10">100G Redundan (10)</text>
  </svg>
);

/**
 * Soal 2: IoT Sensor Array (10 Smart Industrial Nodes)
 */
export const IoTSensorArraySVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="200" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      BATCH SAMPLING QC: 10 SENSOR INDUSTRI CERDAS
    </text>

    {[
      { label: 'LiDAR-1', type: 'LiDAR', color: '#06b6d4' },
      { label: 'LiDAR-2', type: 'LiDAR', color: '#06b6d4' },
      { label: 'LiDAR-3', type: 'LiDAR', color: '#06b6d4' },
      { label: 'LiDAR-4', type: 'LiDAR', color: '#06b6d4' },
      { label: 'Piezo-1', type: 'Piezo', color: '#eab308' },
      { label: 'Piezo-2', type: 'Piezo', color: '#eab308' },
      { label: 'Piezo-3', type: 'Piezo', color: '#eab308' },
      { label: 'Ultra-1', type: 'Ultra', color: '#a855f7' },
      { label: 'Ultra-2', type: 'Ultra', color: '#a855f7' },
      { label: 'LoRa-1', type: 'LoRa', color: '#10b981' },
    ].map((item, idx) => {
      const col = idx % 5;
      const row = Math.floor(idx / 5);
      const x = 30 + col * 82;
      const y = 50 + row * 65;
      return (
        <g key={idx}>
          <rect x={x} y={y} width="72" height="52" rx="8" fill="#1e293b" stroke={item.color} strokeWidth="1.5" />
          <circle cx={x + 14} cy={y + 16} r="4" fill={item.color} />
          <text x={x + 24} y={y + 19} fill="#f8fafc" fontSize="9" fontWeight="700">{item.type}</text>
          <text x={x + 36} y={y + 38} fill="#94a3b8" fontSize="8" textAnchor="middle">ID #{idx + 1}</text>
        </g>
      );
    })}

    <rect x="25" y="175" width="410" height="24" rx="4" fill="#1e293b" />
    <text x="40" y="191" fill="#67e8f9" fontSize="9">4 LiDAR (40%)</text>
    <text x="145" y="191" fill="#fde047" fontSize="9">3 Piezoelektrik (30%)</text>
    <text x="280" y="191" fill="#d8b4fe" fontSize="9">2 Ultrasonik (20%)</text>
    <text x="380" y="191" fill="#6ee7b7" fontSize="9">1 LoRa (10%)</text>
  </svg>
);

/**
 * Soal 3: Hardware Component Cost (Micro Servo & Distance Sensor)
 */
export const ServoSensorCostSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="190" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      INVENTARIS LABORATORIUM ROBOTIK: SPLDV
    </text>

    <g transform="translate(30, 48)">
      <rect width="185" height="135" rx="8" fill="#1e293b" stroke="#0284c7" strokeWidth="1.5" />
      <text x="15" y="24" fill="#38bdf8" fontSize="12" fontWeight="700">Paket Pengadaan A</text>
      <text x="15" y="50" fill="#e2e8f0" fontSize="11">3 Micro-Controller ($x$)</text>
      <text x="15" y="72" fill="#e2e8f0" fontSize="11">2 Sensor Ultrasonik ($y$)</text>
      <line x1="15" y1="86" x2="170" y2="86" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <text x="15" y="106" fill="#94a3b8" fontSize="10">Total Tagihan:</text>
      <text x="15" y="124" fill="#facc15" fontSize="13" fontWeight="700">Rp18.000,00</text>
    </g>

    <g transform="translate(245, 48)">
      <rect width="185" height="135" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
      <text x="15" y="24" fill="#34d399" fontSize="12" fontWeight="700">Relasi Spesifikasi</text>
      <text x="15" y="52" fill="#f1f5f9" fontSize="10.5">Harga 1 Micro-Controller</text>
      <text x="15" y="70" fill="#a7f3d0" fontSize="10.5">Rp1.000 lebih mahal dari</text>
      <text x="15" y="88" fill="#a7f3d0" fontSize="10.5">1 Sensor Ultrasonik</text>
      <line x1="15" y1="98" x2="170" y2="98" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <text x="15" y="120" fill="#38bdf8" fontSize="11" fontWeight="600">Model: $x = y + 1.000$</text>
    </g>
  </svg>
);

/**
 * Soal 4: Cloud Cluster Throughput (Missing Bar Telemetry)
 */
export const DataTrafficBarSVG: React.FC<VisualProps> = ({ className = '' }) => {
  const bars = [
    { label: 'Cluster A', val: 4500, color: '#38bdf8' },
    { label: 'Cluster B', val: 3200, color: '#818cf8' },
    { label: 'Cluster C', val: 5000, color: '#34d399' },
    { label: 'Cluster D', val: 2800, color: '#f59e0b' },
    { label: 'Cluster E', val: 0, missing: true, color: '#ef4444' },
    { label: 'Cluster F', val: 4200, color: '#ec4899' },
    { label: 'Cluster G', val: 3800, color: '#a855f7' },
  ];

  const maxVal = 6000;
  const chartHeight = 150;
  const chartBottom = 190;

  return (
    <svg viewBox="0 0 520 250" className={`w-full max-w-[480px] mx-auto ${className}`}>
      <rect x="10" y="10" width="500" height="230" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
        TRAFIK DATA 7 CLUSTER PROVINSI DIGITAL (TOTAL = 25.000 NODE)
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
                y={chartBottom - (1500 / maxVal) * chartHeight}
                width="40"
                height={(1500 / maxVal) * chartHeight}
                rx="4"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <text x={x + 20} y={chartBottom - (1500 / maxVal) * chartHeight - 8} fill="#f87171" fontSize="11" fontWeight="800" textAnchor="middle">?</text>
              <text x={x + 20} y={chartBottom + 16} fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle">Node E</text>
            </g>
          );
        }
        const h = (bar.val / maxVal) * chartHeight;
        const y = chartBottom - h;
        return (
          <g key={i}>
            <rect x={x} y={y} width="40" height={h} rx="4" fill={bar.color} opacity="0.9" />
            <text x={x + 20} y={y - 5} fill="#cbd5e1" fontSize="9" fontWeight="600" textAnchor="middle">{bar.val}</text>
            <text x={x + 20} y={chartBottom + 16} fill="#94a3b8" fontSize="9" textAnchor="middle">{bar.label.replace('Cluster ', '')}</text>
          </g>
        );
      })}

      <text x="260" y={chartBottom + 35} fill="#94a3b8" fontSize="9" textAnchor="middle">
        *Data telemetri Node E mengalami kegagalan sensor transmisi (Hasil = 1.500)
      </text>
    </svg>
  );
};

/**
 * Soal 5: Cartesian Feasible Region (SPtLDV)
 */
export const CartesianLinearInequalitySVG: React.FC<VisualProps> = ({ className = '' }) => {
  const ox = 90;
  const oy = 210;
  const s = 34;

  const toPx = (x: number, y: number) => ({ x: ox + x * s, y: oy - y * s });

  const l1p1 = toPx(-0.5, 4.5);
  const l1p2 = toPx(5.5, -1.5);

  const l2p1 = toPx(-1, (6 - (-1)) / 3);
  const l2p2 = toPx(7.5, (6 - 7.5) / 3);

  const polyPt1 = toPx(0, 2);
  const polyPt2 = toPx(0, 4);
  const polyPt3 = toPx(3, 1);

  return (
    <svg viewBox="0 0 460 270" className={`w-full max-w-[420px] mx-auto ${className}`}>
      <rect x="10" y="10" width="440" height="250" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />

      {[1, 2, 3, 4, 5, 6, 7].map((val) => {
        const ptX = toPx(val, 0);
        return <line key={'vx' + val} x1={ptX.x} y1={25} x2={ptX.x} y2={235} stroke="#1e293b" strokeWidth="1" />;
      })}
      {[1, 2, 3, 4, 5].map((val) => {
        const ptY = toPx(0, val);
        return <line key={'hy' + val} x1={30} y1={ptY.y} x2={430} y2={ptY.y} stroke="#1e293b" strokeWidth="1" />;
      })}

      <polygon
        points={`${polyPt1.x},${polyPt1.y} ${polyPt2.x},${polyPt2.y} ${polyPt3.x},${polyPt3.y}`}
        fill="#06b6d4"
        fillOpacity="0.3"
        stroke="#22d3ee"
        strokeWidth="1.5"
      />

      <line x1="40" y1={oy} x2="420" y2={oy} stroke="#94a3b8" strokeWidth="2" />
      <polygon points="425,210 415,206 415,214" fill="#94a3b8" />
      <text x="430" y="214" fill="#94a3b8" fontSize="12" fontWeight="700">X</text>

      <line x1={ox} y1="240" x2={ox} y2="30" stroke="#94a3b8" strokeWidth="2" />
      <polygon points={`${ox},25 ${ox - 4},35 ${ox + 4},35`} fill="#94a3b8" />
      <text x={ox - 18} y="32" fill="#94a3b8" fontSize="12" fontWeight="700">Y</text>

      <text x={ox - 12} y={oy + 14} fill="#64748b" fontSize="10">O</text>

      <circle cx={toPx(4, 0).x} cy={oy} r="3" fill="#f59e0b" />
      <text x={toPx(4, 0).x} y={oy + 16} fill="#f59e0b" fontSize="10" textAnchor="middle">4</text>

      <circle cx={toPx(6, 0).x} cy={oy} r="3" fill="#ec4899" />
      <text x={toPx(6, 0).x} y={oy + 16} fill="#ec4899" fontSize="10" textAnchor="middle">6</text>

      <circle cx={ox} cy={toPx(0, 4).y} r="3" fill="#f59e0b" />
      <text x={ox - 14} y={toPx(0, 4).y + 4} fill="#f59e0b" fontSize="10" textAnchor="end">4</text>

      <circle cx={ox} cy={toPx(0, 2).y} r="3" fill="#ec4899" />
      <text x={ox - 14} y={toPx(0, 2).y + 4} fill="#ec4899" fontSize="10" textAnchor="end">2</text>

      <line x1={l1p1.x} y1={l1p1.y} x2={l1p2.x} y2={l1p2.y} stroke="#f59e0b" strokeWidth="2" />
      <text x={toPx(4.5, 0.4).x} y={toPx(4.5, 0.4).y} fill="#fbbf24" fontSize="10" fontWeight="600">x + y = 4</text>

      <line x1={l2p1.x} y1={l2p1.y} x2={l2p2.x} y2={l2p2.y} stroke="#ec4899" strokeWidth="2" />
      <text x={toPx(6.2, 0.8).x} y={toPx(6.2, 0.8).y} fill="#f472b6" fontSize="10" fontWeight="600">x + 3y = 6</text>

      <text x={toPx(0.8, 4.2).x} y={toPx(0.8, 4.2).y} fill="#94a3b8" fontSize="13" fontWeight="800">I</text>
      <text x={toPx(1.0, 2.5).x} y={toPx(1.0, 2.5).y} fill="#22d3ee" fontSize="15" fontWeight="900">II</text>
      <text x={toPx(3.5, 2.8).x} y={toPx(3.5, 2.8).y} fill="#94a3b8" fontSize="13" fontWeight="800">III</text>
      <text x={toPx(1.2, 0.6).x} y={toPx(1.2, 0.6).y} fill="#94a3b8" fontSize="13" fontWeight="800">IV</text>
      <text x={toPx(4.8, 0.8).x} y={toPx(4.8, 0.8).y} fill="#94a3b8" fontSize="13" fontWeight="800">V</text>
    </svg>
  );
};

/**
 * Soal 6: Bunga Majemuk 10%
 */
export const CompoundGrowthInvestmentSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="210" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      PROYEKSI INVESTASI LAB ROBOTIKA (BUNGA MAJEMUK 10%/TAHUN)
    </text>

    {[
      { yr: 'Awal (T=0)', val: 'Rp7.000.000', note: 'Modal Pokok', color: '#64748b' },
      { yr: 'Tahun 1', val: 'Rp7.700.000', note: '+10% (+Rp700k)', color: '#0284c7' },
      { yr: 'Tahun 2', val: 'Rp8.470.000', note: '+10% (+Rp770k)', color: '#0d9488' },
      { yr: 'Tahun 3', val: 'Rp9.261.000', note: 'Jatuh Tempo (Kunci D)', color: '#16a34a', highlight: true },
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

    <rect x="25" y="180" width="410" height="28" rx="6" fill="#1e293b" />
    <text x="230" y="198" fill="#cbd5e1" fontSize="10" textAnchor="middle">
      Rumus: M_n = M_0 \times (1 + i)^n = 7.000.000 \times (1,1)^3 = 9.261.000
    </text>
  </svg>
);

/**
 * Soal 8: DSP Pipeline
 */
export const CompositeFunctionMachineSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 170" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="150" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="30" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      PIPELINE KOMPOSISI FUNGSI: (f ∘ g)(x)
    </text>

    <circle cx="50" cy="85" r="22" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
    <text x="50" y="89" fill="#38bdf8" fontSize="12" fontWeight="700" textAnchor="middle">Input x</text>

    <line x1="72" y1="85" x2="110" y2="85" stroke="#64748b" strokeWidth="2" />
    <polygon points="112,85 104,81 104,89" fill="#64748b" />

    <rect x="114" y="60" width="90" height="50" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
    <text x="159" y="82" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle">g(x)</text>
    <text x="159" y="98" fill="#94a3b8" fontSize="9" textAnchor="middle">x - 1</text>

    <line x1="204" y1="85" x2="250" y2="85" stroke="#64748b" strokeWidth="2" />
    <polygon points="252,85 244,81 244,89" fill="#64748b" />
    <text x="227" y="78" fill="#a855f7" fontSize="9" textAnchor="middle">u = 2</text>

    <rect x="254" y="60" width="90" height="50" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
    <text x="299" y="82" fill="#34d399" fontSize="11" fontWeight="700" textAnchor="middle">f(u)</text>
    <text x="299" y="98" fill="#94a3b8" fontSize="9" textAnchor="middle">Proses F</text>

    <line x1="344" y1="85" x2="385" y2="85" stroke="#64748b" strokeWidth="2" />
    <polygon points="387,85 379,81 379,89" fill="#64748b" />

    <circle cx="410" cy="85" r="22" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
    <text x="410" y="83" fill="#4ade80" fontSize="10" fontWeight="700" textAnchor="middle">f(2)</text>
    <text x="410" y="95" fill="#4ade80" fontSize="9" textAnchor="middle">= 15</text>

    <text x="230" y="140" fill="#94a3b8" fontSize="9.5" textAnchor="middle">
      Diketahui g(x) = x - 1 dan (f ∘ g)(x) = x² - 4x + 18. Jika g(x)=2 maka x=3.
    </text>
  </svg>
);

/**
 * Soal 9: CubeSat Power System
 */
export const SatellitePowerBudgetSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="190" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      DISTRIBUSI DAYA TELEMETRI SATELIT CUBESAT
    </text>

    <g transform="translate(30, 50)">
      <rect width="185" height="120" rx="8" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="700">Parameter Input</text>
      <text x="15" y="48" fill="#e2e8f0" fontSize="10">V = 2⁴ × 5² Volt (400 V)</text>
      <text x="15" y="70" fill="#e2e8f0" fontSize="10">I = 2⁻¹ × 5⁻¹ Ampere (0.1 A)</text>
      <text x="15" y="92" fill="#e2e8f0" fontSize="10">t = 2³ × 5 detik (40 s)</text>
      <text x="15" y="110" fill="#94a3b8" fontSize="9">E = V × I × t = 2⁶ × 5² Joule</text>
    </g>

    <g transform="translate(245, 50)">
      <rect width="185" height="120" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
      <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="700">Rugi Konversi & E Bersih</text>
      <text x="15" y="48" fill="#f87171" fontSize="10">Rugi Transmisi = 2² × 5¹</text>
      <text x="15" y="70" fill="#a7f3d0" fontSize="10">E_bersih = E / (2² × 5¹)</text>
      <text x="15" y="92" fill="#4ade80" fontSize="12" fontWeight="800">E_bersih = 2⁴ × 5¹</text>
      <text x="15" y="110" fill="#fde047" fontSize="12" fontWeight="800">= 16 × 5 = 80 Joule</text>
    </g>
  </svg>
);

/**
 * Soal 10: Concentric Solar Collector Rings (Pola Deret Geometri)
 */
export const ConcentricSolarCellSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      SUSUNAN KONSENTRIS KOIL INDUKSI / PANEL SURYA
    </text>

    {/* Concentric Circles with Rings */}
    <g transform="translate(150, 125)">
      {/* Ring 3 (Outer) */}
      <circle cx="0" cy="0" r="75" fill="none" stroke="#0284c7" strokeWidth="14" strokeDasharray="18 4" opacity="0.8" />
      {/* Ring 2 (Middle) */}
      <circle cx="0" cy="0" r="50" fill="none" stroke="#10b981" strokeWidth="12" strokeDasharray="16 4" opacity="0.85" />
      {/* Ring 1 (Inner) */}
      <circle cx="0" cy="0" r="28" fill="none" stroke="#f59e0b" strokeWidth="10" strokeDasharray="14 3" opacity="0.9" />
      {/* Center Core */}
      <circle cx="0" cy="0" r="10" fill="#ec4899" />
    </g>

    {/* Legend & progression */}
    <g transform="translate(265, 55)">
      <rect width="170" height="150" rx="8" fill="#1e293b" stroke="#334155" />
      <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="700">Pola Segmen Lingkaran</text>
      <text x="15" y="48" fill="#facc15" fontSize="10">• Ring 1: 8 modul</text>
      <text x="15" y="68" fill="#34d399" fontSize="10">• Ring 2: 16 modul</text>
      <text x="15" y="88" fill="#38bdf8" fontSize="10">• Ring 3: 32 modul</text>
      <line x1="15" y1="100" x2="155" y2="100" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <text x="15" y="118" fill="#e2e8f0" fontSize="9.5">Kemungkinan berikutnya:</text>
      <text x="15" y="136" fill="#4ade80" fontSize="10.5" fontWeight="700">32 &amp; 64 Modul (Kunci: 3;4)</text>
    </g>
  </svg>
);

/**
 * Soal 11: Microwave Waveguide Impedance (Rasional Bentuk Akar)
 */
export const WaveguideImpedanceSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="190" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      KALKULASI IMPEDANSI GELOMBANG MIKRO: RASIONAL BENTUK AKAR
    </text>

    <g transform="translate(30, 48)">
      <rect width="185" height="135" rx="8" fill="#1e293b" stroke="#0284c7" strokeWidth="1.5" />
      <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="700">Rasio Impedansi Awal</text>
      <text x="15" y="60" fill="#f8fafc" fontSize="13" fontWeight="700">
        Z = (2 + √2) / (√6 - √2)
      </text>
      <text x="15" y="90" fill="#94a3b8" fontSize="10">Kalikan dengan sekawan:</text>
      <text x="15" y="112" fill="#facc15" fontSize="11" fontWeight="600">× (√6 + √2) / (√6 + √2)</text>
    </g>

    <g transform="translate(245, 48)">
      <rect width="185" height="135" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
      <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="700">Bentuk Rasional Akhir</text>
      <text x="15" y="55" fill="#a7f3d0" fontSize="10">Penyebut: (√6)² - (√2)² = 4</text>
      <text x="15" y="75" fill="#a7f3d0" fontSize="10">Pembilang: 2√6 + 2√2 + 2√3 + 2</text>
      <line x1="15" y1="88" x2="170" y2="88" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <text x="15" y="110" fill="#4ade80" fontSize="12" fontWeight="800">
        (√6 + √2 + √3 + 1) / 2
      </text>
      <text x="15" y="126" fill="#cbd5e1" fontSize="9">(Kunci B)</text>
    </g>
  </svg>
);

/**
 * Soal 12: Microservice Replication Timeline (Bakteri Membelah Diri & Mati Periodik)
 */
export const MicroserviceReplicationSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="200" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      REPLIKASI AGEN VIRTUAL (DOUBLING TIAP 12 JAM, -25% TIAP 48 JAM)
    </text>

    {/* Timeline points */}
    {[
      { t: 'Hari 0', count: '2', desc: 'Awal' },
      { t: 'Hari 1', count: '8', desc: '4x' },
      { t: 'Hari 2 (Pagi)', count: '32', desc: '16x' },
      { t: 'Hari 2 (Evict)', count: '24', desc: '-1/4 mati' },
      { t: 'Hari 3', count: '96', desc: 'Hasil Akhir', highlight: true },
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
          <text x={x + 37} y={75} fill="#94a3b8" fontSize="9" textAnchor="middle">{item.t}</text>
          <text x={x + 37} y={105} fill={item.highlight ? '#4ade80' : '#ffffff'} fontSize="18" fontWeight="800" textAnchor="middle">
            {item.count}
          </text>
          <text x={x + 37} y={130} fill={item.highlight ? '#a7f3d0' : '#64748b'} fontSize="8" textAnchor="middle">
            {item.desc}
          </text>
        </g>
      );
    })}

    <rect x="25" y="165" width="410" height="25" rx="5" fill="#1e293b" />
    <text x="230" y="181" fill="#facc15" fontSize="10.5" fontWeight="700" textAnchor="middle">
      Setelah 3 Hari: 24 × 2 (Hari 2.5) = 48 ➔ 48 × 2 (Hari 3) = 96 Agen (Kunci C)
    </text>
  </svg>
);

/**
 * Soal 13: Coolant Viscosity Curve V(t)
 */
export const CoolantViscosityCurveSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="200" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      KURVA VISKOSITAS PENDINGIN SERVER TERHADAP WAKTU KERJA
    </text>

    {/* Bands: High (>12), Medium (6 to 12), Low (<6) */}
    <g transform="translate(60, 50)">
      {/* High band */}
      <rect x="0" y="0" width="340" height="35" fill="#10b981" fillOpacity="0.15" />
      <text x="345" y="20" fill="#34d399" fontSize="9" fontWeight="700">Tinggi (&gt;12)</text>

      {/* Medium band */}
      <rect x="0" y="35" width="340" height="45" fill="#f59e0b" fillOpacity="0.18" />
      <text x="345" y="60" fill="#fbbf24" fontSize="9" fontWeight="700">Sedang (6 ≤ V ≤ 12)</text>

      {/* Low band */}
      <rect x="0" y="80" width="340" height="40" fill="#ef4444" fillOpacity="0.15" />
      <text x="345" y="102" fill="#f87171" fontSize="9" fontWeight="700">Rendah (&lt;6)</text>

      {/* Viscosity Curve */}
      <path d="M 10,5 Q 120,40 280,110" fill="none" stroke="#38bdf8" strokeWidth="2.5" />

      {/* Target Points at 2h, 3h, 4h */}
      <circle cx="80" cy="45" r="4" fill="#fbbf24" />
      <text x="80" y="38" fill="#fef08a" fontSize="8" textAnchor="middle">2 jam</text>

      <circle cx="150" cy="62" r="4" fill="#fbbf24" />
      <text x="150" y="55" fill="#fef08a" fontSize="8" textAnchor="middle">3 jam</text>

      <circle cx="220" cy="76" r="4" fill="#fbbf24" />
      <text x="220" y="70" fill="#fef08a" fontSize="8" textAnchor="middle">4 jam</text>
    </g>

    <rect x="25" y="178" width="410" height="24" rx="4" fill="#1e293b" />
    <text x="230" y="194" fill="#4ade80" fontSize="10" fontWeight="700" textAnchor="middle">
      Kategori Sedang Tercapai Pada: 2 jam, 3 jam, dan 4 jam
    </text>
  </svg>
);

/**
 * Soal 14: Unfolded Sheet Metal Chassis Optimization
 */
export const CompositeBoxOptimizationSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="210" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="30" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      DESAIN POLA LEMBARAN KOMPOSIT (30 cm × 30 cm)
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
      <text x="65" y="82" fill="#94a3b8" fontSize="8" textAnchor="middle">(30 - 2x)</text>

      <line x1="-10" y1="0" x2="-10" y2="130" stroke="#cbd5e1" strokeWidth="1" />
      <text x="-16" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle" transform="rotate(-90 -16 70)">30 cm</text>
    </g>

    <g transform="translate(245, 55)">
      <polygon points="40,20 120,20 150,55 70,55" fill="#0f766e" stroke="#2dd4bf" strokeWidth="1.5" />
      <polygon points="40,20 70,55 70,95 40,60" fill="#115e59" stroke="#2dd4bf" strokeWidth="1.5" />
      <polygon points="70,55 150,55 150,95 70,95" fill="#134e4a" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="110" y="80" fill="#a7f3d0" fontSize="10" textAnchor="middle">30 - 2x</text>
      <text x="162" y="75" fill="#fde047" fontSize="10">t = x</text>

      <rect x="0" y="115" width="170" height="28" rx="6" fill="#1e293b" stroke="#334155" />
      <text x="85" y="133" fill="#facc15" fontSize="10.5" fontWeight="700" textAnchor="middle">
        x = 5 cm ➔ V = 2.000 cm³
      </text>
    </g>
  </svg>
);

/**
 * Soal 15: Triangular Lattice Mast (Kesebangunan)
 */
export const AntennaTrussSimilaritySVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 260" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="240" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      STRUKTUR RANGKA TRUSS ANTENA PEMANCAR (KESEBANGUNAN)
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

    <rect x="25" y="195" width="70" height="42" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="60" y="212" fill="#94a3b8" fontSize="9" textAnchor="middle">Relasi Sisi:</text>
    <text x="60" y="228" fill="#38bdf8" fontSize="10" fontWeight="700" textAnchor="middle">AB/AC = AD/AE</text>
  </svg>
);

/**
 * Soal 16: Interlocking Solar Panels / Antenna Modules (Overlap)
 */
export const SolarPanelOverlapSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      PEMASANGAN SEGMEN MODUL DENGAN OVERLAP SAMBUNGAN
    </text>

    <g transform="translate(30, 48)">
      <text x="0" y="12" fill="#94a3b8" fontSize="9" fontWeight="600">1 Segmen: 400 cm</text>
      <rect x="0" y="18" width="130" height="18" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
      <text x="65" y="31" fill="#ffffff" fontSize="9" textAnchor="middle">400 cm</text>
    </g>

    <g transform="translate(30, 95)">
      <text x="0" y="12" fill="#94a3b8" fontSize="9" fontWeight="600">2 Segmen Tersambung: 795 cm</text>
      <rect x="0" y="18" width="130" height="18" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
      <rect x="125" y="18" width="5" height="18" fill="#f59e0b" />
      <rect x="125" y="18" width="130" height="18" rx="3" fill="#0284c7" fillOpacity="0.85" stroke="#38bdf8" strokeWidth="1" />
      <text x="130" y="31" fill="#ffffff" fontSize="9" textAnchor="middle">Total: 795 cm (Overlap: 5 cm)</text>
    </g>

    <g transform="translate(30, 145)">
      <text x="0" y="12" fill="#94a3b8" fontSize="9" fontWeight="600">3 Segmen Tersambung: 1190 cm</text>
      <rect x="0" y="18" width="120" height="18" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
      <rect x="115" y="18" width="120" height="18" rx="3" fill="#0284c7" fillOpacity="0.85" stroke="#38bdf8" strokeWidth="1" />
      <rect x="230" y="18" width="120" height="18" rx="3" fill="#0284c7" fillOpacity="0.7" stroke="#38bdf8" strokeWidth="1" />
      <text x="180" y="31" fill="#ffffff" fontSize="9" textAnchor="middle">1.190 cm (Pertambahan tetap: +395 cm)</text>
    </g>

    <rect x="25" y="195" width="410" height="25" rx="5" fill="#1e293b" />
    <text x="230" y="212" fill="#facc15" fontSize="10.5" fontWeight="700" textAnchor="middle">
      Untuk 8 Segmen: L(8) = 400 + 7 × 395 = 3.165 cm
    </text>
  </svg>
);

/**
 * Soal 17: Robotics Workshop Capital Depletion Timeline (PGK Kategori)
 */
export const RoboticsBudgetTimelineSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="210" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      PERENCANAAN DANA WORKSHOP ROBOTIK 12 BULAN (TARGET: 200 JUTA)
    </text>

    {/* Financial milestones */}
    <g transform="translate(30, 50)">
      <line x1="20" y1="90" x2="380" y2="90" stroke="#64748b" strokeWidth="1.5" />

      {/* Target line */}
      <line x1="20" y1="20" x2="380" y2="20" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" />
      <text x="385" y="24" fill="#fbbf24" fontSize="9" fontWeight="700">Target Rp200 Jt</text>

      {/* Months milestones */}
      <circle cx="40" cy="90" r="4" fill="#38bdf8" />
      <text x="40" y="110" fill="#94a3b8" fontSize="8" textAnchor="middle">Bulan 1</text>
      <text x="40" y="80" fill="#38bdf8" fontSize="8" textAnchor="middle">5 Jt</text>

      <circle cx="150" cy="90" r="4" fill="#ef4444" />
      <text x="150" y="110" fill="#f87171" fontSize="8" textAnchor="middle">Bln 5 (-5Jt)</text>

      <circle cx="210" cy="90" r="4" fill="#a855f7" />
      <text x="210" y="110" fill="#c084fc" fontSize="8" textAnchor="middle">Bln 7 (-20%)</text>

      <circle cx="270" cy="90" r="4" fill="#ef4444" />
      <text x="270" y="110" fill="#f87171" fontSize="8" textAnchor="middle">Bln 9 (-5Jt)</text>

      <circle cx="360" cy="90" r="4" fill="#22c55e" />
      <text x="360" y="110" fill="#4ade80" fontSize="8" textAnchor="middle">Bln 12</text>
    </g>

    <rect x="25" y="175" width="410" height="30" rx="5" fill="#1e293b" />
    <text x="230" y="194" fill="#cbd5e1" fontSize="9.5" textAnchor="middle">
      Kunci Jawaban: A. Salah | B. Salah | C. Benar (Perlu kenaikan Rp1,7 Jt/bulan)
    </text>
  </svg>
);

/**
 * Soal 18: Sensor Shield Packaging (Prisma Jaring-Jaring)
 */
export const SensorShieldPackagingSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="210" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      DESAIN KEMASAN PRISMA SEGITIGA &amp; LEMBARAN LAMINASI
    </text>

    {/* 3D Prism */}
    <g transform="translate(50, 50)">
      <polygon points="30,40 90,40 60,15" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
      <polygon points="30,40 60,15 60,95 30,120" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
      <polygon points="90,40 60,15 60,95 90,120" fill="#0ea5e9" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="60" y="135" fill="#e2e8f0" fontSize="9" textAnchor="middle">Alas 8 cm, t=3, T=12</text>
    </g>

    {/* Sheet comparison */}
    <g transform="translate(200, 50)">
      <rect width="215" height="120" rx="8" fill="#1e293b" stroke="#334155" />
      <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="700">Analisis Kertas Plano</text>
      <text x="15" y="48" fill="#cbd5e1" fontSize="9.5">• Plano: 61 × 86 cm (Rp15.000/lbr)</text>
      <text x="15" y="68" fill="#cbd5e1" fontSize="9.5">• Anggaran Maks: Rp1.200.000,00</text>
      <line x1="15" y1="80" x2="200" y2="80" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <text x="15" y="98" fill="#facc15" fontSize="10.5" fontWeight="700">
        Hasil Maksimum: 200 Kotak
      </text>
      <text x="15" y="112" fill="#a7f3d0" fontSize="8.5">(Kunci C)</text>
    </g>
  </svg>
);

/**
 * Soal 19: Trigonometry Quadrant II (Sudut Tumpul)
 */
export const TurbineBladeTrigQuadrantSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      ANALISIS FASE VEKTOR KUADRAN II (SUDUT TUMPUL)
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

      <text x="-40" y="-30" fill="#f59e0b" fontSize="10" fontWeight="600">r = a</text>
      <text x="-95" y="-20" fill="#38bdf8" fontSize="10">y = 1</text>
      <text x="-50" y="14" fill="#cbd5e1" fontSize="9.5">x = -√(a² - 1)</text>
    </g>

    <rect x="25" y="195" width="410" height="25" rx="5" fill="#1e293b" />
    <text x="230" y="212" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle">
      sin A = 1/a  ➔  cos A = -√(a² - 1) / a  (Kuadran II: Kosinus Negatif)
    </text>
  </svg>
);

/**
 * Soal 20: Monthly Microchip Production Bar Chart
 */
export const ChipFabricationBarChartSVG: React.FC<VisualProps> = ({ className = '' }) => {
  const months = [
    { m: 'Jan', val: 122 },
    { m: 'Feb', val: 136 },
    { m: 'Mar', val: 112 },
    { m: 'Apr', val: 151 },
    { m: 'Mei', val: 18 },
    { m: 'Jun', val: 81 },
    { m: 'Jul', val: 133 },
    { m: 'Agu', val: 150 },
    { m: 'Sep', val: 166 },
    { m: 'Okt', val: 87 },
    { m: 'Nov', val: 153, highlight: true },
    { m: 'Des', val: 131 },
  ];

  const maxVal = 180;
  const chartHeight = 130;
  const chartBottom = 175;

  return (
    <svg viewBox="0 0 520 250" className={`w-full max-w-[480px] mx-auto ${className}`}>
      <rect x="10" y="10" width="500" height="230" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
        VOLUME PRODUKSI MIKROSIP TAHUN 2026 (RIBUAN UNIT)
      </text>

      {[0, 50, 100, 150].map((tick) => {
        const y = chartBottom - (tick / maxVal) * chartHeight;
        return (
          <line key={tick} x1="45" y1={y} x2="490" y2={y} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
        );
      })}

      {months.map((item, i) => {
        const x = 50 + i * 36;
        const h = (item.val / maxVal) * chartHeight;
        const y = chartBottom - h;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width="24"
              height={h}
              rx="3"
              fill={item.highlight ? '#10b981' : item.val < 50 ? '#ef4444' : '#0284c7'}
              opacity="0.9"
            />
            <text x={x + 12} y={y - 4} fill={item.highlight ? '#4ade80' : '#cbd5e1'} fontSize="8" fontWeight="600" textAnchor="middle">
              {item.val}
            </text>
            <text x={x + 12} y={chartBottom + 14} fill="#94a3b8" fontSize="8" textAnchor="middle">{item.m}</text>
          </g>
        );
      })}

      <rect x="360" y="42" width="130" height="32" rx="6" fill="#1e293b" stroke="#10b981" />
      <text x="425" y="56" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle">Lonjakan Tertinggi: Nov</text>
      <text x="425" y="68" fill="#cbd5e1" fontSize="8" textAnchor="middle">153 - 87 = +66 unit</text>
    </svg>
  );
};

/**
 * Soal 21: Drone Wing Spar Stress Testing (Geometri Beban Bertingkat)
 */
export const DroneStressTestGeomSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      UJI KETAHANAN KOMPOSIT SAYAP DRONE (RASIO BEBAN r = 2)
    </text>

    <g transform="translate(30, 50)">
      <rect x="0" y="20" width="400" height="16" rx="4" fill="#334155" stroke="#64748b" strokeWidth="1.5" />

      {[
        { pt: 1, kg: '500 kg', x: 20 },
        { pt: 2, kg: '1.000 kg', x: 85 },
        { pt: 3, kg: '2.000 kg', x: 155 },
        { pt: 4, kg: '4.000 kg', x: 225 },
        { pt: 5, kg: '8.000 kg', x: 295 },
        { pt: 6, kg: '16.000 kg', x: 365 },
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

    <rect x="25" y="145" width="410" height="65" rx="8" fill="#1e293b" stroke="#334155" />
    <text x="35" y="165" fill="#38bdf8" fontSize="10" fontWeight="700">Analisis Deret Geometri:</text>
    <text x="35" y="182" fill="#cbd5e1" fontSize="9.5">• Titik 4, 5, 6 berturut-turut: 4.000 kg, 8.000 kg, 16.000 kg</text>
    <text x="35" y="199" fill="#a7f3d0" fontSize="9.5">• Ambang Kritis 128 Ton = 128.000 kg dicapai pada Titik ke-9 (Un = 500 × 2^(n-1))</text>
  </svg>
);

/**
 * Soal 22: SPLTV Procurement (Maya, Sella, Elang)
 */
export const MicroFabProcurementSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="190" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      PENGADAAN 3 KOMPONEN ROBOTIK SMK (SPLTV)
    </text>

    {[
      { name: 'Maya', detail: '2 Modul + 1 Sensor + 3 Kabel', price: 'Rp19.000' },
      { name: 'Sella', detail: '1 Modul + 2 Sensor + 2 Kabel', price: 'Rp17.000' },
      { name: 'Elang', detail: '2 Modul + 2 Sensor + 1 Kabel', price: 'Rp20.000' },
    ].map((team, idx) => {
      const x = 25 + idx * 138;
      return (
        <g key={idx}>
          <rect x={x} y={50} width="130" height="95" rx="8" fill="#1e293b" stroke="#334155" />
          <text x={x + 65} y={72} fill="#38bdf8" fontSize="11" fontWeight="700" textAnchor="middle">{team.name}</text>
          <text x={x + 65} y={92} fill="#cbd5e1" fontSize="8" textAnchor="middle">{team.detail}</text>
          <text x={x + 65} y={124} fill="#facc15" fontSize="11" fontWeight="800" textAnchor="middle">{team.price}</text>
        </g>
      );
    })}

    <rect x="25" y="155" width="410" height="30" rx="5" fill="#1e293b" />
    <text x="230" y="174" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle">
      1 Modul + 1 Sensor + 1 Kabel = Rp10.000,00 (Kunci B)
    </text>
  </svg>
);

/**
 * Soal 23: EMI Conductive Gasket Ring (Keliling Lingkaran)
 */
export const ConductiveGasketRingSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 210" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="190" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      SEGEL GASKET KONDUKTIF MELINGKAR (d = 35 cm)
    </text>

    <g transform="translate(100, 110)">
      <circle cx="0" cy="0" r="55" fill="none" stroke="#f59e0b" strokeWidth="6" />
      <circle cx="0" cy="0" r="45" fill="#1e293b" stroke="#334155" strokeWidth="1" />
      <line x1="-55" y1="0" x2="55" y2="0" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
      <text x="0" y="-8" fill="#38bdf8" fontSize="9" textAnchor="middle">d = 35 cm</text>
    </g>

    <g transform="translate(200, 50)">
      <rect width="215" height="120" rx="8" fill="#1e293b" stroke="#334155" />
      <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="700">Parameter Manufaktur</text>
      <text x="15" y="48" fill="#cbd5e1" fontSize="9.5">• Keliling K = π × d = 22/7 × 35 = 110 cm</text>
      <text x="15" y="68" fill="#cbd5e1" fontSize="9.5">• Kebutuhan 180 pcs = 180 × 1,1 m = 198 m</text>
      <line x1="15" y1="80" x2="200" y2="80" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <text x="15" y="102" fill="#4ade80" fontSize="11" fontWeight="800">Biaya = 198 × Rp5.000 = Rp990.000</text>
    </g>
  </svg>
);

/**
 * Soal 24 & 32: Server Latency Histogram (Modus Data Kelompok)
 */
export const ServerLatencyHistogramSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="210" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      HISTOGRAM DISTRIBUSI LATENSI SERVER JARINGAN (ms)
    </text>

    <g transform="translate(45, 170)">
      <line x1="0" y1="0" x2="380" y2="0" stroke="#64748b" strokeWidth="1.5" />

      {[
        { range: '58-60', f: 2, w: 55, color: '#38bdf8' },
        { range: '61-63', f: 6, w: 55, color: '#0ea5e9' },
        { range: '64-66', f: 9, w: 55, modal: true, color: '#10b981' },
        { range: '67-69', f: 6, w: 55, color: '#0ea5e9' },
        { range: '70-72', f: 4, w: 55, color: '#38bdf8' },
        { range: '73-75', f: 3, w: 55, color: '#64748b' },
      ].map((bar, i) => {
        const x = i * 60;
        const h = bar.f * 13;
        return (
          <g key={i}>
            <rect
              x={x}
              y={-h}
              width="58"
              height={h}
              fill={bar.modal ? '#10b981' : '#1e293b'}
              stroke={bar.modal ? '#34d399' : '#38bdf8'}
              strokeWidth="1.5"
            />
            <text x={x + 29} y={-h - 5} fill={bar.modal ? '#34d399' : '#cbd5e1'} fontSize="9" fontWeight="700" textAnchor="middle">
              f={bar.f}
            </text>
            <text x={x + 29} y="15" fill="#94a3b8" fontSize="8" textAnchor="middle">{bar.range}</text>
          </g>
        );
      })}
    </g>

    <rect x="25" y="195" width="410" height="20" rx="4" fill="#1e293b" />
    <text x="230" y="209" fill="#a7f3d0" fontSize="9" textAnchor="middle">
      Kelas Modus: 64-66 (Tb = 63,5; d1 = 3; d2 = 3; c = 3) ➔ Modus = 63,5 + 1,5 = 65,0 ms
    </text>
  </svg>
);

/**
 * Soal 26: 2D Drone Assembly Simplex Polygon (Program Linear)
 */
export const DroneAssemblyOptimizationSVG: React.FC<VisualProps> = ({ className = '' }) => {
  const ox = 70;
  const oy = 200;
  const sx = 16;
  const sy = 8;

  const p0 = { x: ox, y: oy };
  const p1 = { x: ox + 10 * sx, y: oy };
  const p2 = { x: ox + 6 * sx, y: oy - 8 * sy };
  const p3 = { x: ox, y: oy - 16 * sy };

  return (
    <svg viewBox="0 0 460 250" className={`w-full max-w-[420px] mx-auto ${className}`}>
      <rect x="10" y="10" width="440" height="230" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
        DAERAH PENYELESAIAN PRODUKSI DRONE (PROGRAM LINEAR)
      </text>

      <line x1={ox} y1={oy} x2="400" y2={oy} stroke="#64748b" strokeWidth="1.5" />
      <line x1={ox} y1="210" x2={ox} y2="40" stroke="#64748b" strokeWidth="1.5" />
      <text x="405" y={oy + 4} fill="#94a3b8" fontSize="10">x (Quad)</text>
      <text x={ox - 10} y="38" fill="#94a3b8" fontSize="10">y (Hexa)</text>

      <polygon
        points={`${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`}
        fill="#0ea5e9"
        fillOpacity="0.3"
        stroke="#38bdf8"
        strokeWidth="2"
      />

      <circle cx={p1.x} cy={p1.y} r="4" fill="#f59e0b" />
      <text x={p1.x} y={p1.y + 15} fill="#fbbf24" fontSize="9" textAnchor="middle">(10, 0)</text>

      <circle cx={p2.x} cy={p2.y} r="5" fill="#22c55e" />
      <text x={p2.x + 8} y={p2.y - 6} fill="#4ade80" fontSize="10" fontWeight="700">Optimum (6, 8)</text>

      <circle cx={p3.x} cy={p3.y} r="4" fill="#a855f7" />
      <text x={p3.x - 12} y={p3.y + 4} fill="#c084fc" fontSize="9" textAnchor="end">(0, 16)</text>

      <text x="260" y="85" fill="#f59e0b" fontSize="9.5">2x + y = 20 (Serat Karbon)</text>
      <text x="260" y="105" fill="#a855f7" fontSize="9.5">4x + 3y = 48 (Waktu Perakitan)</text>

      <rect x="25" y="195" width="410" height="35" rx="6" fill="#1e293b" />
      <text x="230" y="210" fill="#fde047" fontSize="10" fontWeight="700" textAnchor="middle">
        Keuntungan Maksimum di Titik (6, 8):
      </text>
      <text x="230" y="224" fill="#a7f3d0" fontSize="9.5" textAnchor="middle">
        Z = 6 × Rp500.000 + 8 × Rp300.000 = Rp5.400.000,00
      </text>
    </svg>
  );
};

/**
 * Soal 27: 3D Cube PQRS.TUVW Space Frame (Jarak V ke O)
 */
export const Cube3DSpaceFrameSVG: React.FC<VisualProps> = ({ className = '' }) => {
  const P = { x: 140, y: 190 };
  const Q = { x: 260, y: 190 };
  const R = { x: 320, y: 140 };
  const S = { x: 200, y: 140 };

  const T = { x: 140, y: 90 };
  const U = { x: 260, y: 90 };
  const V = { x: 320, y: 40 };
  const W = { x: 200, y: 40 };

  const O = { x: (P.x + R.x) / 2, y: (P.y + R.y) / 2 };

  return (
    <svg viewBox="0 0 460 270" className={`w-full max-w-[420px] mx-auto ${className}`}>
      <rect x="10" y="10" width="440" height="250" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
        KERANGKA OBSERVATORIUM KUBUS PQRS.TUVW (s = 12 cm)
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

      <text x={P.x - 14} y={P.y + 12} fill="#e2e8f0" fontSize="11" fontWeight="700">P</text>
      <text x={Q.x + 8} y={Q.y + 12} fill="#e2e8f0" fontSize="11" fontWeight="700">Q</text>
      <text x={R.x + 12} y={R.y + 4} fill="#e2e8f0" fontSize="11" fontWeight="700">R</text>
      <text x={S.x - 14} y={S.y - 4} fill="#94a3b8" fontSize="10">S</text>

      <text x={T.x - 14} y={T.y - 4} fill="#e2e8f0" fontSize="11" fontWeight="700">T</text>
      <text x={U.x + 8} y={U.y - 4} fill="#e2e8f0" fontSize="11" fontWeight="700">U</text>
      <text x={V.x + 12} y={V.y} fill="#f472b6" fontSize="12" fontWeight="800">V</text>
      <text x={W.x - 12} y={W.y - 6} fill="#e2e8f0" fontSize="11" fontWeight="700">W</text>

      <circle cx={O.x} cy={O.y} r="4" fill="#ec4899" />
      <text x={O.x - 8} y={O.y + 16} fill="#f472b6" fontSize="11" fontWeight="800">O</text>

      <text x="335" y="90" fill="#22d3ee" fontSize="9.5">VR = 12 cm</text>
      <text x="270" y="172" fill="#fbbf24" fontSize="9.5">RO = 6√2 cm</text>
      <text x="280" y="115" fill="#f472b6" fontSize="10.5" fontWeight="700">VO = 6√6 cm</text>
    </svg>
  );
};

/**
 * Soal 38: Cleanroom Airlock Composite Window
 */
export const CleanroomWindowCompositeSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 250" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="230" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      DESAIN MODUL PANEL KACA AIRLOCK CLEANROOM
    </text>

    <g transform="translate(0, 5)">
      <rect x="150" y="110" width="160" height="80" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
      <polygon points="150,110 230,50 310,110" fill="#06b6d4" fillOpacity="0.3" stroke="#22d3ee" strokeWidth="2" />

      <line x1="230" y1="50" x2="230" y2="190" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="150" y1="150" x2="310" y2="150" stroke="#0284c7" strokeWidth="1.5" />

      <line x1="150" y1="205" x2="310" y2="205" stroke="#cbd5e1" strokeWidth="1" />
      <text x="230" y="218" fill="#cbd5e1" fontSize="10" fontWeight="600" textAnchor="middle">4 meter</text>

      <line x1="325" y1="110" x2="325" y2="190" stroke="#cbd5e1" strokeWidth="1" />
      <text x="335" y="154" fill="#cbd5e1" fontSize="10">2 m</text>

      <line x1="325" y1="50" x2="325" y2="110" stroke="#cbd5e1" strokeWidth="1" />
      <text x="335" y="84" fill="#22d3ee" fontSize="10">1,5 m</text>
    </g>

    <rect x="25" y="200" width="105" height="30" rx="4" fill="#1e293b" />
    <text x="77" y="218" fill="#facc15" fontSize="9.5" fontWeight="700" textAnchor="middle">
      20 Unit = 220 m²
    </text>
  </svg>
);

/**
 * Soal 39: Drone Wing Stabilizer Trapezoid ABCD
 */
export const DroneWingTrapezoidAnglesSVG: React.FC<VisualProps> = ({ className = '' }) => {
  const A = { x: 80, y: 190 };
  const B = { x: 380, y: 190 };
  const C = { x: 310, y: 70 };
  const D = { x: 150, y: 70 };

  return (
    <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
      <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
        GEOMETRI STABILIZER SAYAP DRONE: TRAPESIUM SAMA KAKI
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
      <text x="110" y="172" fill="#4ade80" fontSize="10" fontWeight="700">70°</text>

      <path d="M 320,190 A 60 60 0 0 1 332,165" fill="none" stroke="#ec4899" strokeWidth="2" />
      <text x="310" y="180" fill="#f472b6" fontSize="10" fontWeight="700">30°</text>

      <text x={A.x - 14} y={A.y + 14} fill="#e2e8f0" fontSize="12" fontWeight="800">A</text>
      <text x={B.x + 8} y={B.y + 14} fill="#e2e8f0" fontSize="12" fontWeight="800">B</text>
      <text x={C.x + 8} y={C.y - 8} fill="#e2e8f0" fontSize="12" fontWeight="800">C</text>
      <text x={D.x - 14} y={D.y - 8} fill="#e2e8f0" fontSize="12" fontWeight="800">D</text>

      <text x="230" y="215" fill="#94a3b8" fontSize="9.5" textAnchor="middle">
        AD = BC (Sama Kaki), AB ∥ DC. Nilai ∠BCD = 110°, ∠CBD = 40°, ∠BDC = 30°.
      </text>
    </svg>
  );
};

/**
 * Soal 41: Robotic Sensor Arm at 60 deg Wall Incline
 */
export const ObservatoryLadderSensorSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 240" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      ELEVASI LENGAN SENSOR OBSERVATORIUM (TRIGONOMETRI 60°)
    </text>

    <g transform="translate(60, 45)">
      <line x1="80" y1="0" x2="80" y2="140" stroke="#64748b" strokeWidth="4" />
      <line x1="50" y1="140" x2="280" y2="140" stroke="#64748b" strokeWidth="4" />
      <rect x="80" y="125" width="15" height="15" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

      <line x1="170" y1="140" x2="80" y2="10" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />

      <path d="M 140,140 A 30 30 0 0 0 155,118" fill="none" stroke="#10b981" strokeWidth="2" />
      <text x="145" y="132" fill="#34d399" fontSize="11" fontWeight="700">60°</text>

      <text x="135" y="70" fill="#fbbf24" fontSize="11" fontWeight="700" transform="rotate(-55 135 70)">
        Panjang = 6 meter
      </text>

      <line x1="60" y1="10" x2="60" y2="140" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
      <text x="45" y="80" fill="#38bdf8" fontSize="11" fontWeight="800" textAnchor="end">
        Tinggi h = 3√3 m
      </text>
    </g>

    <rect x="25" y="195" width="410" height="24" rx="4" fill="#1e293b" />
    <text x="230" y="211" fill="#cbd5e1" fontSize="10" textAnchor="middle">
      sin 60° = h / 6  ➔  h = 6 × (1/2 √3) = 3√3 meter
    </text>
  </svg>
);

/**
 * Soal 43: Parabolic Damping Trajectory
 */
export const ParabolicDamperCurveSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 250" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="230" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      KURVA RESPON DEFLEKSI PEREDAM: f(x) = 4(x² - 8x + 12)
    </text>

    <g transform="translate(60, 130)">
      <line x1="0" y1="63" x2="350" y2="63" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="355" y="66" fill="#f87171" fontSize="9" fontWeight="700">y = -18 (Di luar jangkauan)</text>

      <line x1="0" y1="0" x2="330" y2="0" stroke="#64748b" strokeWidth="1.5" />
      <line x1="40" y1="-80" x2="40" y2="80" stroke="#64748b" strokeWidth="1.5" />
      <text x="335" y="4" fill="#94a3b8" fontSize="10">X</text>
      <text x="45" y="-75" fill="#94a3b8" fontSize="10">Y</text>

      <path d="M 68,-56 Q 152,140 236,-56" fill="none" stroke="#10b981" strokeWidth="2.5" />

      <circle cx="152" cy="56" r="4" fill="#f59e0b" />
      <text x="152" y="76" fill="#fbbf24" fontSize="9.5" fontWeight="700" textAnchor="middle">
        Puncak (4, -16)
      </text>

      <circle cx="96" cy="0" r="3" fill="#38bdf8" />
      <text x="96" y="-8" fill="#38bdf8" fontSize="9" textAnchor="middle">x = 2</text>

      <circle cx="208" cy="0" r="3" fill="#38bdf8" />
      <text x="208" y="-8" fill="#38bdf8" fontSize="9" textAnchor="middle">x = 6</text>
    </g>

    <rect x="25" y="195" width="410" height="24" rx="4" fill="#1e293b" />
    <text x="230" y="211" fill="#a7f3d0" fontSize="9.5" textAnchor="middle">
      ✓ Terbuka ke atas (a=4 &gt; 0)  |  ✗ Memotong y=-18 (Min=-16)  |  ✓ Tidak melalui Kuadran III
    </text>
  </svg>
);

/**
 * Soal 45: Cockpit HUD Optical Scaling Dilatation
 */
export const CockpitHUDProjectionSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 230" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="210" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      PROYEKSI OPTIK HUD: DILATASI BERBASIS JARAK
    </text>

    <polygon points="40,95 70,110 40,125" fill="#f59e0b" stroke="#fbbf24" strokeWidth="1.5" />
    <text x="50" y="145" fill="#fbbf24" fontSize="9" textAnchor="middle">Proyektor</text>

    <polygon points="70,110 320,50 320,170" fill="#38bdf8" fillOpacity="0.12" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />

    <rect x="320" y="45" width="10" height="130" rx="2" fill="#475569" stroke="#94a3b8" />
    <text x="345" y="90" fill="#cbd5e1" fontSize="9">Layar Rapat:</text>
    <text x="345" y="105" fill="#38bdf8" fontSize="9.5" fontWeight="700">2,4 m × 1,8 m</text>

    <rect x="325" y="65" width="6" height="90" fill="#22c55e" />
    <text x="345" y="130" fill="#4ade80" fontSize="9" fontWeight="600">Hasil Proyeksi:</text>
    <text x="345" y="145" fill="#4ade80" fontSize="9.5" fontWeight="700">1,08 m × 1,08 m</text>

    <line x1="70" y1="180" x2="320" y2="180" stroke="#cbd5e1" strokeWidth="1" />
    <text x="195" y="195" fill="#cbd5e1" fontSize="9.5" textAnchor="middle">Jarak d = 3 meter ➔ Skala = 0,6 × 3 = 1,8×</text>
  </svg>
);

/**
 * Soal 46: Cryptographic IoT Token Permutation Slots AXBYC
 */
export const IoTTokenPermutationSVG: React.FC<VisualProps> = ({ className = '' }) => (
  <svg viewBox="0 0 460 220" className={`w-full max-w-[420px] mx-auto ${className}`}>
    <rect x="10" y="10" width="440" height="200" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <text x="25" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
      ATURAN PENGISIAN TEMPAT: TOKEN ENKRIPSI AXBYC
    </text>

    {[
      { label: 'Slot 1: A', type: 'Huruf Ke-1', ways: '26', color: '#0284c7' },
      { label: 'Slot 2: X', type: 'Angka Ke-1', ways: '10', color: '#f59e0b' },
      { label: 'Slot 3: B', type: 'Huruf Ke-2', ways: '25', color: '#0284c7' },
      { label: 'Slot 4: Y', type: 'Angka Ke-2', ways: '9', color: '#f59e0b' },
      { label: 'Slot 5: C', type: 'Huruf Ke-3', ways: '24', color: '#0284c7' },
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

    <rect x="25" y="150" width="410" height="38" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="230" y="166" fill="#94a3b8" fontSize="9" textAnchor="middle">
      Kombinasi Total = 26 × 10 × 25 × 9 × 24 (Tanpa Pengulangan Huruf &amp; Angka)
    </text>
    <text x="230" y="181" fill="#4ade80" fontSize="11" fontWeight="800" textAnchor="middle">
      = 1.404.000 Variasi Kode Unik Berbeda
    </text>
  </svg>
);

/**
 * Dispatcher for question visual SVGs
 */
export const QuestionVisual: React.FC<{ svgId: string; className?: string }> = ({ svgId, className = '' }) => {
  switch (svgId) {
    case 'datacenter_rack':
      return <DataCenterRackSVG className={className} />;
    case 'iot_sensor_array':
      return <IoTSensorArraySVG className={className} />;
    case 'servo_sensor_cost':
      return <ServoSensorCostSVG className={className} />;
    case 'data_traffic_bar':
      return <DataTrafficBarSVG className={className} />;
    case 'cartesian_inequality':
      return <CartesianLinearInequalitySVG className={className} />;
    case 'compound_growth':
      return <CompoundGrowthInvestmentSVG className={className} />;
    case 'composite_machine':
      return <CompositeFunctionMachineSVG className={className} />;
    case 'satellite_power':
      return <SatellitePowerBudgetSVG className={className} />;
    case 'concentric_solar':
      return <ConcentricSolarCellSVG className={className} />;
    case 'waveguide_impedance':
      return <WaveguideImpedanceSVG className={className} />;
    case 'microservice_replication':
      return <MicroserviceReplicationSVG className={className} />;
    case 'coolant_viscosity':
      return <CoolantViscosityCurveSVG className={className} />;
    case 'box_optimization':
      return <CompositeBoxOptimizationSVG className={className} />;
    case 'antenna_similarity':
      return <AntennaTrussSimilaritySVG className={className} />;
    case 'solar_overlap':
      return <SolarPanelOverlapSVG className={className} />;
    case 'robotics_budget_timeline':
      return <RoboticsBudgetTimelineSVG className={className} />;
    case 'sensor_shield_packaging':
      return <SensorShieldPackagingSVG className={className} />;
    case 'trig_quadrant_2':
      return <TurbineBladeTrigQuadrantSVG className={className} />;
    case 'chip_barchart':
      return <ChipFabricationBarChartSVG className={className} />;
    case 'drone_stress_test':
      return <DroneStressTestGeomSVG className={className} />;
    case 'microfab_procurement':
      return <MicroFabProcurementSVG className={className} />;
    case 'conductive_gasket_ring':
      return <ConductiveGasketRingSVG className={className} />;
    case 'server_latency_hist':
      return <ServerLatencyHistogramSVG className={className} />;
    case 'drone_assembly_opt':
      return <DroneAssemblyOptimizationSVG className={className} />;
    case 'cube_3d_frame':
      return <Cube3DSpaceFrameSVG className={className} />;
    case 'cleanroom_window':
      return <CleanroomWindowCompositeSVG className={className} />;
    case 'drone_trapezoid':
      return <DroneWingTrapezoidAnglesSVG className={className} />;
    case 'sensor_ladder':
      return <ObservatoryLadderSensorSVG className={className} />;
    case 'parabolic_damper':
      return <ParabolicDamperCurveSVG className={className} />;
    case 'cockpit_hud':
      return <CockpitHUDProjectionSVG className={className} />;
    case 'iot_token':
      return <IoTTokenPermutationSVG className={className} />;
    default:
      return null;
  }
};
