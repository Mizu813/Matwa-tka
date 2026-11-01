# SIM-TKA Matematika Interaktif
> Platform Asesmen Mandiri & Simulasi Ujian Tes Kemampuan Akademik (TKA) Matematika SMA/SMK Berbasis Kurikulum 8 Bab & 22 Sub-Bab, HOTS Reasoning, Rendering KaTeX, dan Two-Tier Clean Navigation.

---

## 🌟 Ikhtisar Aplikasi

**SIM-TKA Matematika Interaktif** dirancang dan dibangun dengan standar **Senior Frontend Architect** dan **Educational Technology Specialist**. Aplikasi ini mengimplementasikan struktur kurikulum modular 8 Bab Besar dan 22 Sub-bab ke dalam bentuk web interaktif modern dengan pendekatan **mobile-first & desktop-optimized**, rendering notasi ilmiah presisi tinggi via **KaTeX**, Markdown Table, serta **Inline SVG Vector**.

### 🎯 Fitur & Arsitektur Utama

1. **Two-Tier Navigation (Sistem Navigasi 2 Tingkat)**:
   - **Baris 1 (Bab Besar)**: Horizontal scrollable pills menampilkan 8 Bab Besar.
   - **Baris 2 (Sub-bab)**: Chips sub-navigasi dinamis menampilkan sub-bab dari bab yang sedang aktif.
   - **Baris 3 (Nomor Soal)**: Indikator nomor soal aktif beserta lencana (badge) tingkat kesulitan (`STANDAR` / `HOTS`) dan tipe soal.

2. **Hierarchical Hash Routing**:
   - Skema routing URL: `#/<chapter_id>/<sub_chapter_id>/<nomor_soal>` (contoh: `#/bilangan-real/eksponen-dan-akar/1`).
   - Fallback otomatis ke bab pertama dan soal nomor 1 (`#/bilangan-real/eksponen-dan-akar/1`) jika URL hash kosong atau mengakses URL lama `#/soal/1`.

3. **4 Tipe Soal Terstandarisasi TKA**:
   - `PG`: Pilihan ganda standar (Radio button A–E, 1 jawaban benar).
   - `MCMA`: Pilihan ganda kompleks (Checkbox A–E, multi-pilihan, evaluasi tepat jika pilihan siswa sama persis dengan `correct_answer`).
   - `KATEGORI`: Tabel interaktif 3 kolom (`Pernyataan`, `Benar`, `Salah`) dengan radio Benar/Salah pada tiap baris.
   - `KECUKUPAN_DATA`: Soal tipe Data Sufficiency (Radio A–E). Jika `options` kosong, otomatis merender 5 opsi standar pernyataan kecukupan data.

4. **Multi-Format Question Renderer**:
   - **KaTeX / LaTeX**: Rendering inline `$ ... $` dan block display `$$ ... $$` dengan overflow container.
   - **Markdown Table**: Parser tabel markdown (`| Col 1 | Col 2 |`) ke dalam komponen tabel HTML modern Tailwind.
   - **Inline SVG**: Menampilkan ilustrasi diagram teknis dan grafik matematika langsung di dalam teks soal.

5. **Data Architecture Modular & Validasi**:
   - `data/curriculum-matwa.json`: Menyimpan hierarki master 8 Bab dan 22 Sub-bab.
   - `data/questions/<sub_chapter_id>.json`: 22+ file JSON terpisah untuk masing-masing sub-bab.
   - `scripts/validate-questions.js`: Linter dan validator JSON, field wajib, LaTeX escaping, dan konsistensi kurikulum.

---

## 📚 Kurikulum 8 Bab Besar & 22 Sub-Bab

1. **Bilangan Real**
   - 1.1 Eksponen & Bentuk Akar
   - 1.2 Operasi Hitung & Aplikasi
2. **Aljabar Linear**
   - 2.1 SPLDV & SPLTV
   - 2.2 Sistem Pertidaksamaan Linear
   - 2.3 Program Linear & Optimasi
3. **Fungsi**
   - 3.1 Domain, Range & Grafik
   - 3.2 Fungsi Komposisi
   - 3.3 Fungsi Invers
4. **Barisan & Deret**
   - 4.1 Aritmetika
   - 4.2 Geometri, Pertumbuhan & Peluruhan
   - 4.3 Bunga Tunggal & Majemuk
5. **Geometri & Pengukuran**
   - 5.1 Sudut, Garis & Kesebangunan
   - 5.2 Keliling & Luas Bangun Datar
   - 5.3 Volume & Luas Bangun Ruang
   - 5.4 Proyeksi & Jarak Dimensi Tiga
   - 5.5 Transformasi Geometri
6. **Trigonometri**
   - 6.1 Perbandingan & Sudut Berelasi
   - 6.2 Aplikasi Elevasi & Depresi
7. **Statistika**
   - 7.1 Penyajian Data Visual
   - 7.2 Data Tunggal
   - 7.3 Data Kelompok & Histogram
8. **Pencacahan & Peluang**
   - 8.1 Aturan Pencacahan, Permutasi & Kombinasi
   - 8.2 Peluang Kejadian Tunggal
   - 8.3 Peluang Kejadian Majemuk

---

## 🛠️ Tech Stack

* **Framework**: React 18 + TypeScript + Vite 5
* **Styling**: Tailwind CSS 3 (responsif adaptif, dark mode class-based)
* **Mathematical Typography**: KaTeX 0.16 (inline `$..$` dan display block `$$..$$` dengan kontainer anti-overflow `overflow-x-auto`)
* **Icons**: `lucide-react`
* **Bundle Optimization**: Code-splitting vendor & katex chunks via Rollup manual chunks

---

## 🚀 Cara Menjalankan Aplikasi

Pastikan Node.js (v18+) telah terpasang di komputer Anda.

### 1. Menjalankan Server Pengembangan (Dev Mode)
```bash
npm run dev
```
Buka browser pada alamat [http://localhost:3000](http://localhost:3000).

### 2. Validasi Dataset Soal
```bash
npm run validate
```

### 3. Membangun Berkas Produksi (Production Build & Sync to Docs)
```bash
npm run build
```

### 4. Menguji Versi Produksi (Preview)
```bash
npm run preview
```
