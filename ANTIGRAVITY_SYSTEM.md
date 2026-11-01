# ANTIGRAVITY TASK CONTROL SYSTEM
## BANK SOAL TKA MATEMATIKA WAJIB (24 SUB-BAB)

Dokumen ini mendefinisikan protokol eksekusi otonom, standar mutu matematika, dan skema data JSON baku untuk memproduksi seluruh bank soal TKA Matematika Wajib secara deterministik, presisi tinggi, dan tahan terhadap context reset.

---

### PROTOKOL EKSEKUSI MANDIRI (STATEFUL WORKFLOW)
Setiap kali pengguna memberikan perintah "Lanjutkan", "Kerjakan task berikutnya", atau membuka sesi chat baru:
1. Baca `TASKS.md` dan temukan **SATU** task pertama yang masih berstatus `- [ ]` (belum selesai).
2. DILARANG mengerjakan lebih dari 1 task dalam satu giliran respons agar kualitas penalaran matematika HOTS dan perhitungan kunci jawaban 100% akurat.
3. Buat tepat **10 soal** untuk `sub_chapter_id` tersebut dengan komposisi:
   - **Tipe Soal:** 4 `PG`, 3 `MCMA`, 2 `KATEGORI`, 1 `KECUKUPAN_DATA`.
   - **Tingkat Kesulitan:** 3 `STANDAR`, 7 `HOTS`.
4. Simpan output ke file JSON target yang tertera pada spesifikasi task (misalnya `docs/data/questions/<sub_chapter_id>.json` serta sinkronkan ke `data/questions/<sub_chapter_id>.json` dan `public/data/questions/<sub_chapter_id>.json`).
5. Jalankan terminal command: `node scripts/validate-questions.js <path_file_json>`.
   - Jika terdapat error validasi JSON, tipe data, atau LaTeX, perbaiki file JSON tersebut hingga validator menghasilkan status `PASSED`.
6. Setelah `PASSED`, perbarui `TASKS.md`: ubah status task tersebut dari `- [ ]` menjadi `- [x]`.
7. Hentikan eksekusi dan laporkan ringkasan singkat: nama file yang selesai, hasil validasi, dan sebutkan task berikutnya yang siap dikerjakan saat pengguna mengetik "Lanjutkan".

---

### ATURAN KUALITAS MATEMATIKA & SKEMA JSON
1. **Backward-Design Verification:** Tentukan angka kunci jawaban dan koefisien yang bulat/bersih terlebih dahulu sebelum menulis narasi soal. Hitung ulang setiap opsi sebelum menetapkan `correct_answer`.
2. **Standar KaTeX / LaTeX:** Semua rumus, variabel, pecahan, akar, dan derajat wajib dibungkus `$ ... $` atau `$$ ... $$`. Gunakan double-backslash di dalam JSON string (`\\frac{a}{b}`, `\\sqrt{x}`, `\\le`, `\\ge`, `^{\\circ}`). DILARANG menggunakan `\\begin{cases}` di dalam inline math `$ ... $` (gunakan display math `$$ ... $$` terpisah baris atau tulis persamaan linier dipisah koma agar layout visual tidak rusak).
3. **Visual Mandiri:** Gunakan Markdown Table di dalam `question_text` untuk data tabel, dan gunakan inline `<svg>` yang presisi atau deskripsi koordinat lengkap untuk soal bergambar/grafik.
4. **Petunjuk Pengerjaan (Hint):** Setiap butir soal wajib menyertakan properti `"hint"` (dan opsional `"hint2"`) yang berisi konsep inti dan strategi awal pengerjaan untuk memfasilitasi belajar mandiri siswa sebelum membuka solusi lengkap.
5. **Skema Objek Soal JSON:**
```json
[
  {
    "id": "matwa-<sub_chapter_id>-01",
    "chapter_id": "<chapter_id>",
    "sub_chapter_id": "<sub_chapter_id>",
    "question_type": "PG | MCMA | KATEGORI | KECUKUPAN_DATA",
    "difficulty": "STANDAR | HOTS",
    "question_text": "Narasi soal lengkap...",
    "options": [
      { "id": "A", "text": "Opsi A / Pernyataan A" },
      { "id": "B", "text": "Opsi B / Pernyataan B" },
      { "id": "C", "text": "Opsi C / Pernyataan C" },
      { "id": "D", "text": "Opsi D (Kosongkan D & E khusus tipe KATEGORI 3 pernyataan)" },
      { "id": "E", "text": "Opsi E" }
    ],
    "correct_answer": "A (untuk PG/KECUKUPAN_DATA) | [\"A\", \"C\"] (untuk MCMA) | {\"A\": \"Benar\", \"B\": \"Salah\", \"C\": \"Benar\"} (untuk KATEGORI)",
    "hint": "Petunjuk pengerjaan / konsep kunci yang membimbing siswa.",
    "explanation": "Pembahasan matematis langkah demi langkah yang membuktikan kunci jawaban."
  }
]
```
5. **Opsi Standar `KECUKUPAN_DATA`:**
   - A: Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi Pernyataan (2) SAJA tidak cukup.
   - B: Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi Pernyataan (1) SAJA tidak cukup.
   - C: DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.
   - D: Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan Pernyataan (2) SAJA cukup.
   - E: Pernyataan (1) dan Pernyataan (2) tidak cukup untuk menjawab pertanyaan.
