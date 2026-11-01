import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const curriculumPath = path.join(rootDir, 'data', 'curriculum-matwa.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf-8'));

console.log('🚀 MEMULAI VALIDASI KOMPREHENSIF SELURUH 24 SUB-BAB MATEMATIKA WAJIB...\n');

let totalFiles = 0;
let passedFiles = 0;
let failedFiles = 0;
let totalQuestions = 0;
let totalSvgs = 0;

curriculum.forEach(chapter => {
  console.log(`📌 Bab: ${chapter.title} (${chapter.chapter_id})`);
  chapter.sub_chapters.forEach(sub => {
    totalFiles++;
    const filePath = path.join(rootDir, 'docs', 'data', 'questions', `${sub.sub_chapter_id}.json`);
    
    if (!fs.existsSync(filePath)) {
      console.error(`  ❌ FILE TIDAK DITEMUKAN: ${sub.sub_chapter_id}.json`);
      failedFiles++;
      return;
    }

    try {
      // Jalankan validator
      const output = execSync(`node scripts/validate-questions.js "docs/data/questions/${sub.sub_chapter_id}.json"`, {
        cwd: rootDir,
        encoding: 'utf-8'
      });

      // Hitung pertanyaan dan SVG
      const questions = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      totalQuestions += questions.length;
      let svgsInFile = 0;
      questions.forEach(q => {
        if ((q.question_text && q.question_text.includes('<svg')) || (q.explanation && q.explanation.includes('<svg'))) {
          svgsInFile++;
        }
      });
      totalSvgs += svgsInFile;

      console.log(`  ✅ ${sub.sub_chapter_id}: PASSED (${questions.length} soal, ${svgsInFile} diagram SVG)`);
      passedFiles++;
    } catch (err) {
      console.error(`  ❌ ${sub.sub_chapter_id}: FAILED!\n${err.stdout || err.message}`);
      failedFiles++;
    }
  });
});

console.log('\n============================================================');
console.log(`📊 REKAPITULASI HASIL VALIDASI:`);
console.log(`  - Total Sub-bab Diuji : ${totalFiles} / 24`);
console.log(`  - File Lulus (PASSED) : ${passedFiles}`);
console.log(`  - File Gagal (FAILED) : ${failedFiles}`);
console.log(`  - Total Butir Soal    : ${totalQuestions} butir`);
console.log(`  - Total Diagram SVG   : ${totalSvgs} diagram`);
console.log('============================================================\n');

if (failedFiles > 0) {
  process.exit(1);
} else {
  console.log('🎉 SELURUH SOAL & DIAGRAM TELAH 100% VALID, LENGKAP, DAN TERSTANDARISASI!\n');
  process.exit(0);
}
