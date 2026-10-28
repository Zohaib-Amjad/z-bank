import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = resolve(projectRoot, 'dist');

if (outputDir !== resolve(projectRoot, 'dist')) {
  throw new Error('Build output must stay in the project dist/ folder.');
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js', 'links.js', 'names.js']) {
  await cp(join(projectRoot, file), join(outputDir, file));
}

try {
  const assetsDir = join(projectRoot, 'assets');
  if ((await stat(assetsDir)).isDirectory()) {
    await cp(assetsDir, join(outputDir, 'assets'), { recursive: true });
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

console.log('Build complete: static app files copied to dist/.');
