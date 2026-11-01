import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import katex from 'katex';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Ambil target file dari argumen CLI
const targetArg = process.argv[2];

if (!targetArg) {
  console.error('❌ Error: Path file JSON harus diberikan sebagai argumen!');
  console.error('Contoh: node scripts/validate-questions.js docs/data/questions/eksponen-dan-akar.json');
  process.exit(1);
}

const targetPath = path.isAbsolute(targetArg) ? targetArg : path.resolve(rootDir, targetArg);
const fileName = path.basename(targetPath);
const subChapterIdFromFilename = fileName.replace('.json', '');

if (!fs.existsSync(targetPath)) {
  console.error(`❌ Error: File target tidak ditemukan di: ${targetPath}`);
  process.exit(1);
}

// 2. Load Master Curriculum
const curriculumPath = path.join(rootDir, 'data', 'curriculum-matwa.json');
if (!fs.existsSync(curriculumPath)) {
  console.error(`❌ Error: File kurikulum tidak ditemukan di ${curriculumPath}`);
  process.exit(1);
}

const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf-8'));
const validChapters = new Map();
const validSubChapters = new Map();

curriculum.forEach((c) => {
  validChapters.set(c.chapter_id, c.title);
  c.sub_chapters.forEach((s) => {
    validSubChapters.set(s.sub_chapter_id, c.chapter_id);
  });
});

if (!validSubChapters.has(subChapterIdFromFilename)) {
  console.error(`❌ Error: Sub-bab '${subChapterIdFromFilename}' tidak terdaftar di curriculum-matwa.json!`);
  process.exit(1);
}

const expectedChapterId = validSubChapters.get(subChapterIdFromFilename);

// 3. Validasi JSON Parsing
let rawContent;
let questions;
try {
  rawContent = fs.readFileSync(targetPath, 'utf-8');
  questions = JSON.parse(rawContent);
} catch (err) {
  console.error(`❌ JSON Parse Error pada ${fileName}: ${err.message}`);
  process.exit(1);
}

if (!Array.isArray(questions)) {
  console.error(`❌ Error: File ${fileName} harus berisi Array JSON [...]`);
  process.exit(1);
}

const errors = [];

// 4. Validasi Jumlah Butir Soal (Minimal 10 soal)
if (questions.length < 10) {
  errors.push(`Jumlah soal baru ${questions.length}, minimal wajib 10 butir soal.`);
}

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
const VALID_OPTIONS_ID = ['A', 'B', 'C', 'D', 'E'];

// Helper untuk mengecek LaTeX
function validateLatex(text, context) {
  if (typeof text !== 'string') return;

  // 1. Cek keseimbangan $$
  const displayCount = (text.match(/\$\$/g) || []).length;
  if (displayCount % 2 !== 0) {
    errors.push(`${context}: Delimiter display math '$$' tidak seimbang (ganjil).`);
  }

  // 2. Cek keseimbangan $
  const textWithoutDisplay = text.replace(/\$\$[\s\S]*?\$\$/g, '');
  const inlineCount = (textWithoutDisplay.match(/\$/g) || []).length;
  if (inlineCount % 2 !== 0) {
    errors.push(`${context}: Delimiter inline math '$' tidak seimbang (ganjil).`);
  }

  // 3. KaTeX test render untuk memastikan formula valid
  const inlineMatches = text.match(/(?<!\$)\$([^\$\n]+?)\$(?!\$)/g) || [];
  inlineMatches.forEach((m) => {
    const expr = m.slice(1, -1).trim();
    try {
      katex.renderToString(expr, { displayMode: false, throwOnError: true });
    } catch (e) {
      errors.push(`${context}: KaTeX inline render error "${expr}" -> ${e.message}`);
    }
  });

  const displayMatches = text.match(/\$\$([\s\S]+?)\$\$/g) || [];
  displayMatches.forEach((m) => {
    const expr = m.slice(2, -2).trim();
    try {
      katex.renderToString(expr, { displayMode: true, throwOnError: true });
    } catch (e) {
      errors.push(`${context}: KaTeX display render error "${expr}" -> ${e.message}`);
    }
  });
}

// 5. Validasi Setiap Butir Soal
questions.forEach((q, idx) => {
  const qNum = idx + 1;
  const qContext = `[Soal #${qNum} id="${q.id || 'N/A'}"]`;

  // Check required fields
  REQUIRED_FIELDS.forEach((f) => {
    if (q[f] === undefined || q[f] === null || q[f] === '') {
      errors.push(`${qContext}: Field wajib '${f}' tidak boleh kosong.`);
    }
  });

  // Chapter & Sub-chapter IDs
  if (q.chapter_id !== expectedChapterId) {
    errors.push(`${qContext}: chapter_id '${q.chapter_id}' tidak cocok dengan kurikulum ('${expectedChapterId}').`);
  }
  if (q.sub_chapter_id !== subChapterIdFromFilename) {
    errors.push(`${qContext}: sub_chapter_id '${q.sub_chapter_id}' tidak cocok dengan nama file ('${subChapterIdFromFilename}').`);
  }

  // Question Type & Difficulty
  if (!VALID_TYPES.includes(q.question_type)) {
    errors.push(`${qContext}: question_type '${q.question_type}' tidak valid. Harus salah satu dari: ${VALID_TYPES.join(', ')}`);
  }
  if (!VALID_DIFFICULTIES.includes(q.difficulty)) {
    errors.push(`${qContext}: difficulty '${q.difficulty}' tidak valid. Harus salah satu dari: ${VALID_DIFFICULTIES.join(', ')}`);
  }

  // Options validation
  if (!Array.isArray(q.options)) {
    errors.push(`${qContext}: 'options' harus berupa Array.`);
  } else {
    if (q.question_type === 'KATEGORI') {
      if (q.options.length < 3) {
        errors.push(`${qContext}: 'options' untuk KATEGORI harus memiliki minimal 3 item (A, B, C).`);
      }
    } else {
      if (q.options.length < 4) {
        errors.push(`${qContext}: 'options' untuk ${q.question_type} harus memiliki minimal 4 item (umumnya 5 opsi: A-E).`);
      }
    }

    q.options.forEach((opt, oIdx) => {
      if (!opt.id || typeof opt.text !== 'string') {
        errors.push(`${qContext}: Option #${oIdx + 1} tidak memiliki 'id' atau 'text' yang valid.`);
      } else {
        validateLatex(opt.text, `${qContext} Option ${opt.id}`);
      }
    });
  }

  // Correct Answer validation
  if (q.question_type === 'PG' || q.question_type === 'KECUKUPAN_DATA') {
    if (typeof q.correct_answer !== 'string' || !VALID_OPTIONS_ID.includes(q.correct_answer)) {
      errors.push(`${qContext}: correct_answer untuk ${q.question_type} harus berupa String "A", "B", "C", "D", atau "E". Ditemukan: ${JSON.stringify(q.correct_answer)}`);
    }
  } else if (q.question_type === 'MCMA') {
    if (!Array.isArray(q.correct_answer) || q.correct_answer.length < 2) {
      errors.push(`${qContext}: correct_answer untuk MCMA harus berupa Array string dengan panjang >= 2 (contoh: ["A", "C"]). Ditemukan: ${JSON.stringify(q.correct_answer)}`);
    } else {
      q.correct_answer.forEach((ans) => {
        if (!VALID_OPTIONS_ID.includes(ans)) {
          errors.push(`${qContext}: correct_answer MCMA mengandung opsi tidak valid '${ans}'.`);
        }
      });
    }
  } else if (q.question_type === 'KATEGORI') {
    if (typeof q.correct_answer !== 'object' || Array.isArray(q.correct_answer) || q.correct_answer === null) {
      errors.push(`${qContext}: correct_answer untuk KATEGORI harus berupa Object (contoh: {"A": "Benar", "B": "Salah", "C": "Benar"}).`);
    } else {
      ['A', 'B', 'C'].forEach((k) => {
        if (!['Benar', 'Salah'].includes(q.correct_answer[k])) {
          errors.push(`${qContext}: correct_answer KATEGORI key '${k}' harus bernilai 'Benar' atau 'Salah'. Ditemukan: ${q.correct_answer[k]}`);
        }
      });
    }
  }

  // Question Text & Explanation & Hint LaTeX validation
  if (typeof q.question_text === 'string') {
    validateLatex(q.question_text, `${qContext} question_text`);
  }
  if (typeof q.explanation === 'string') {
    validateLatex(q.explanation, `${qContext} explanation`);
  }
  if (typeof q.hint === 'string') {
    validateLatex(q.hint, `${qContext} hint`);
  }
  if (typeof q.hint1 === 'string') {
    validateLatex(q.hint1, `${qContext} hint1`);
  }
  if (typeof q.hint2 === 'string') {
    validateLatex(q.hint2, `${qContext} hint2`);
  }
});

// 6. Evaluasi Hasil Validasi
if (errors.length > 0) {
  console.error(`\n❌ VALIDATION FAILED: Ditemukan ${errors.length} kesalahan pada ${fileName}:`);
  errors.forEach((err, i) => {
    console.error(`  ${i + 1}. ${err}`);
  });
  process.exit(1);
}

// 7. Auto-sync ke target direktori lain jika valid
const syncTargets = [
  path.join(rootDir, 'data', 'questions', fileName),
  path.join(rootDir, 'public', 'data', 'questions', fileName),
  path.join(rootDir, 'docs', 'data', 'questions', fileName),
];

syncTargets.forEach((destPath) => {
  if (destPath !== targetPath) {
    try {
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.copyFileSync(targetPath, destPath);
    } catch (e) {
      // ignore non-critical sync errors
    }
  }
});

console.log(`PASSED: ${fileName} (${questions.length} questions validated)`);
process.exit(0);
