import fs from 'fs';
import path from 'path';

const src = path.join('dist', 'index.html');
const dest = path.join('dist', '404.html');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Created dist/404.html for GitHub Pages single-page-app fallback');
}
