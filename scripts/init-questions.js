import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const curriculumPath = path.join(rootDir, 'data', 'curriculum-matwa.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf-8'));

const subChapterIds = [];
curriculum.forEach((chap) => {
  chap.sub_chapters.forEach((sub) => {
    subChapterIds.push(sub.sub_chapter_id);
  });
});

console.log(`Found ${subChapterIds.length} sub-chapters in curriculum.`);

const targetDirs = [
  path.join(rootDir, 'data', 'questions'),
  path.join(rootDir, 'public', 'data', 'questions'),
  path.join(rootDir, 'docs', 'data', 'questions'),
];

targetDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Copy curriculum to public/data and docs/data as well
fs.copyFileSync(curriculumPath, path.join(rootDir, 'public', 'data', 'curriculum-matwa.json'));
fs.copyFileSync(curriculumPath, path.join(rootDir, 'docs', 'data', 'curriculum-matwa.json'));

const eksponenContent = fs.readFileSync(path.join(rootDir, 'data', 'questions', 'eksponen-dan-akar.json'), 'utf-8');

subChapterIds.forEach((id) => {
  const isEksponen = id === 'eksponen-dan-akar';
  const content = isEksponen ? eksponenContent : '[]\n';

  targetDirs.forEach((dir) => {
    const filePath = path.join(dir, `${id}.json`);
    fs.writeFileSync(filePath, content, 'utf-8');
  });
});

console.log(`Successfully generated and synced 24 question files in all target directories.`);
