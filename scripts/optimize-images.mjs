import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';

const dir = 'public/lovable-uploads';
const files = await readdir(dir);
const imageFiles = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of imageFiles) {
  const filePath = path.join(dir, file);
  const info = await stat(filePath);
  const sizeBefore = info.size;
  totalBefore += sizeBefore;

  // Skip small files (under 100KB)
  if (sizeBefore < 100 * 1024) {
    totalAfter += sizeBefore;
    continue;
  }

  const ext = path.extname(file).toLowerCase();
  const nameNoExt = file.slice(0, -ext.length);
  const webpPath = path.join(dir, nameNoExt + '.webp');

  try {
    await sharp(filePath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath);

    const webpInfo = await stat(webpPath);
    totalAfter += webpInfo.size;
    const savings = ((1 - webpInfo.size / sizeBefore) * 100).toFixed(1);
    console.log(`✅ ${file} → ${nameNoExt}.webp (${(sizeBefore/1024).toFixed(0)}KB → ${(webpInfo.size/1024).toFixed(0)}KB, -${savings}%)`);
  } catch (e) {
    console.log(`❌ ${file}: ${e.message}`);
    totalAfter += sizeBefore;
  }
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB`);
