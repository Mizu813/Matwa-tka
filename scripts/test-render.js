import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import katex from 'katex';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('--- TESTING RENDERER AND ASSETS ---');

// 1. Test Curriculum
const curPath = path.join(rootDir, 'data', 'curriculum-matwa.json');
const cur = JSON.parse(fs.readFileSync(curPath, 'utf-8'));
console.log(`✓ Curriculum loaded: ${cur.length} chapters.`);
let totalSubs = 0;
cur.forEach((c) => {
  totalSubs += c.sub_chapters.length;
});
console.log(`✓ Total sub-chapters: ${totalSubs}.`);

// 2. Test Questions in eksponen-dan-akar.json
const expPath = path.join(rootDir, 'data', 'questions', 'eksponen-dan-akar.json');
const expQuestions = JSON.parse(fs.readFileSync(expPath, 'utf-8'));
console.log(`✓ Questions loaded: ${expQuestions.length} sample questions in eksponen-dan-akar.`);

const types = expQuestions.map((q) => q.question_type);
console.log(`✓ Question types present: ${types.join(', ')}`);

const expectedTypes = ['PG', 'MCMA', 'KATEGORI', 'KECUKUPAN_DATA'];
expectedTypes.forEach((t) => {
  if (!types.includes(t)) {
    throw new Error(`Missing expected question type: ${t}`);
  }
});

// 3. Test KaTeX rendering on all mathematical strings in questions
expQuestions.forEach((q, idx) => {
  console.log(`  Checking Q${idx + 1} (${q.question_type} - ${q.difficulty}): "${q.title}"`);
  
  // Test math in question_text
  const inlineMathMatches = q.question_text.match(/(?<!\$)\$([^\$\n]+?)\$(?!\$)/g) || [];
  const displayMathMatches = q.question_text.match(/\$\$([\s\S]+?)\$\$/g) || [];

  inlineMathMatches.forEach((m) => {
    const expr = m.slice(1, -1).trim();
    try {
      katex.renderToString(expr, { displayMode: false, throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX inline math error in Q${idx + 1}: ${e.message} in "${expr}"`);
    }
  });

  displayMathMatches.forEach((m) => {
    const expr = m.slice(2, -2).trim();
    try {
      katex.renderToString(expr, { displayMode: true, throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX display math error in Q${idx + 1}: ${e.message} in "${expr}"`);
    }
  });

  // Test math in options
  q.options.forEach((opt) => {
    const optMatches = opt.text.match(/(?<!\$)\$([^\$\n]+?)\$(?!\$)/g) || [];
    optMatches.forEach((m) => {
      const expr = m.slice(1, -1).trim();
      try {
        katex.renderToString(expr, { displayMode: false, throwOnError: true });
      } catch (e) {
        throw new Error(`KaTeX option math error in Q${idx + 1} opt ${opt.id}: ${e.message}`);
      }
    });
  });

  console.log(`    ✓ KaTeX formulas verified (${inlineMathMatches.length} inline, ${displayMathMatches.length} display)`);
});

console.log('✅ ALL TESTS PASSED SUCCESSFULLY! Ready for deployment.');
