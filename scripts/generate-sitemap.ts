import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectSitemapEntries, renderSitemapXml } from '../src/lib/seo/sitemap';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const entries = collectSitemapEntries();
const xml = renderSitemapXml(entries);

for (const target of ['public/sitemap.xml', 'dist/sitemap.xml']) {
  const filePath = resolve(root, target);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, xml, 'utf-8');
  console.log(`Wrote ${target} (${entries.length} URLs)`);
}
