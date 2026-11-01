import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const curriculumPath = path.join(rootDir, 'data', 'curriculum-matwa.json');
if (!fs.existsSync(curriculumPath)) {
  console.error(`Error: File kurikulum tidak ditemukan di ${curriculumPath}`);
  process.exit(1);
}

const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf-8'));
const validChapters = new Set(curriculum.map((c) => c.chapter_id));
const validSubChapters = new Set();
curriculum.forEach((c) => {
  c.sub_chapters.forEach((s) => validSubChapters.add(s.sub_chapter_id));
});

const questionsDir = path.join(rootDir, 'data', 'questions');
if (!fs.existsSync(questionsDir)) {
  console.error(`Error: Folder questions tidak ditemukan di ${questionsDir}`);
  process.exit(1);
}

const files = fs.readdirSync(questionsDir).filter((f) => f.endsWith('.json'));

let totalFiles = files.length;
let totalQuestions = 0;
let errors = [];

const REQUIRED_FIELDS = [
  'id',
  'chapter_id',
  'sub_chapter_id',
  'question_type',
  'difficulty',
  'question_text',
  'options',
  'correct_answer',
  'explanation',
];

const VALID_TYPES = ['PG', 'MCMA', 'KATEGORI', 'KECUKUPAN_DATA'];
const VALID_DIFFICULTIES = ['STANDAR', 'HOTS'];

console.log(`\n======================================================`);
console.log(`🔍 MEMULAI VALIDASI FILE BANK SOAL TKA MATEMATIKA`);
console.log(`Direktori: ${questionsDir}`);
console.log(`Jumlah file sub-bab ditemukan: ${totalFiles}`);
console.log(`======================================================\n`);

files.forEach((file) => {
  const filePath = path.join(questionsDir, file);
  const subChapterIdFromFile = file.replace('.json', '');

  // 1. Validasi keberadaan sub-bab di kurikulum
  if (!validSubChapters.has(subChapterIdFromFile)) {
    errors.push(`[${file}] Sub-bab '${subChapterIdFromFile}' tidak terdaftar di curriculum-matwa.json!`);
    return;
  }

  // 2. Validasi format JSON dan escaping
  let rawContent;
  let data;
  try {
    rawContent = fs.readFileSync(filePath, 'utf-8');
    data = JSON.parse(rawContent);
  } catch (err) {
    errors.push(`[${file}] JSON Parse Error / Unescaped character: ${err.message}`);
    return;
  }

  if (!Array.isArray(data)) {
    errors.push(`[${file}] Format JSON harus berupa array []`);
    return;
  }

  totalQuestions += data.length;

  data.forEach((q, idx) => {
    const qIndex = `[${file} #soal-${idx + 1} (${q.id || 'tanpa-id'})]`;

    // 3. Validasi kelengkapan field wajib
    REQUIRED_FIELDS.forEach((field) => {
      if (q[field] === undefined || q[field] === null) {
        errors.push(`${qIndex} Missing required field: '${field}'`);
      }
    });

    // 4. Validasi chapter_id & sub_chapter_id
    if (q.chapter_id && !validChapters.has(q.chapter_id)) {
      errors.push(`${qIndex} Invalid chapter_id: '${q.chapter_id}'`);
    }

    if (q.sub_chapter_id && q.sub_chapter_id !== subChapterIdFromFile) {
      errors.push(`${qIndex} sub_chapter_id '${q.sub_chapter_id}' tidak cocok dengan nama file '${file}'`);
    }

    // 5. Validasi tipe soal
    if (q.question_type && !VALID_TYPES.includes(q.question_type)) {
      errors.push(`${qIndex} Invalid question_type '${q.question_type}'. Pilihan: ${VALID_TYPES.join(', ')}`);
    }

    // 6. Validasi tingkat kesulitan
    if (q.difficulty && !VALID_DIFFICULTIES.includes(q.difficulty)) {
      errors.push(`${qIndex} Invalid difficulty '${q.difficulty}'. Pilihan: ${VALID_DIFFICULTIES.join(', ')}`);
    }

    // 7. Validasi options
    if (!Array.isArray(q.options)) {
      errors.push(`${qIndex} 'options' harus berupa Array`);
    }

    // 8. Validasi correct_answer sesuai question_type
    if (q.question_type === 'PG' || q.question_type === 'KECUKUPAN_DATA') {
      if (typeof q.correct_answer !== 'string') {
        errors.push(`${qIndex} correct_answer untuk ${q.question_type} harus berupa string (misal: 'A')`);
      }
    } else if (q.question_type === 'MCMA') {
      if (!Array.isArray(q.correct_answer) || q.correct_answer.length === 0) {
        errors.push(`${qIndex} correct_answer untuk MCMA harus berupa array string opsi (misal: ['A', 'C'])`);
      }
    } else if (q.question_type === 'KATEGORI') {
      if (typeof q.correct_answer !== 'object' || Array.isArray(q.correct_answer) || q.correct_answer === null) {
        errors.push(`${qIndex} correct_answer untuk KATEGORI harus berupa object pemetaan (misal: {"A": "Benar", "B": "Salah"})`);
      }
    }

    // 9. Validasi LaTeX delimiter balance pada question_text
    if (typeof q.question_text === 'string') {
      const text = q.question_text;
      // Hitung jumlah $ display $$
      const displayCount = (text.match(/\$\$/g) || []).length;
      if (displayCount % 2 !== 0) {
        errors.push(`${qIndex} Unbalanced display math '$$' pada question_text`);
      }

      // Hapus $$ sebelum mengecek inline $
      const textWithoutDisplay = text.replace(/\$\$[\s\S]*?\$\$/g, '');
      const inlineCount = (textWithoutDisplay.match(/\$/g) || []).length;
      if (inlineCount % 2 !== 0) {
        errors.push(`${qIndex} Unbalanced inline math '$' pada question_text`);
      }
    }
  });
});

console.log(`Hasil Audit:`);
console.log(`- File tervalidasi: ${totalFiles} file`);
console.log(`- Total butir soal: ${totalQuestions} butir`);

if (errors.length > 0) {
  console.error(`\n❌ DITEMUKAN ${errors.length} KESALAHAN VALIDASI:`);
  errors.forEach((err, i) => console.error(`  ${i + 1}. ${err}`));
  process.exit(1);
} else {
  console.log(`\n✅ SELURUH FILE SOAL DAN MASTER KURIKULUM 100% VALID!`);
  console.log(`   Struktur JSON lengkap, LaTeX ter-escape dengan benar, dan tipe soal terstandarisasi.\n`);
  process.exit(0);
}
