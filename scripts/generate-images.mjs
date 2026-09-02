/**
 * Gera favicon e imagens de Open Graph a partir do conteúdo do site.
 *   node scripts/generate-images.mjs
 * Saída em public/: favicon.svg, favicon-32.png, apple-touch-icon.png,
 * og-pt.png e og-en.png (1200×630).
 */
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { profile } from '../content/site.ts';

const INK = '#0f1218';
const INK_SOFT = '#b0b9c9';
const BRAND = '#3b82f6';
const FONT = "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif";

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ícone: quadrado arredondado ink com iniciais em azul */
const icon = (size) => {
  const r = Math.round(size * 0.22);
  const fs = Math.round(size * 0.46);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" fill="${INK}"/>
  <text x="50%" y="50%" dy="${Math.round(fs * 0.36)}" text-anchor="middle"
        font-family="${FONT}" font-weight="700" font-size="${fs}" letter-spacing="-${Math.round(fs * 0.04)}"
        fill="${BRAND}">${esc(profile.initials)}</text>
</svg>`;
};

/* Open Graph 1200×630 */
const og = (lang) => {
  const W = 1200, H = 630;
  const name = esc(profile.name);
  const role = esc(profile.role[lang]);
  const spec = esc(profile.specialties[lang]);
  const site = 'robsonx4.github.io';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f1218"/>
      <stop offset="1" stop-color="#151a24"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.15" r="0.6">
      <stop offset="0" stop-color="${BRAND}" stop-opacity="0.28"/>
      <stop offset="1" stop-color="${BRAND}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <rect x="96" y="96" width="112" height="112" rx="26" fill="#1a2030"/>
  <text x="152" y="152" dy="20" text-anchor="middle" font-family="${FONT}" font-weight="700" font-size="54"
        letter-spacing="-2" fill="${BRAND}">${esc(profile.initials)}</text>

  <text x="96" y="352" font-family="${FONT}" font-weight="700" font-size="76" letter-spacing="-2.5" fill="#ffffff">${name}</text>
  <text x="96" y="416" font-family="${FONT}" font-weight="500" font-size="36" fill="${BRAND}">${role}</text>
  <text x="96" y="470" font-family="${FONT}" font-weight="400" font-size="26" fill="${INK_SOFT}">${spec}</text>

  <line x1="96" y1="534" x2="${W - 96}" y2="534" stroke="#2a3140" stroke-width="2"/>
  <text x="96" y="574" font-family="${FONT}" font-weight="500" font-size="22" fill="${INK_SOFT}">${site}</text>
  <text x="${W - 96}" y="574" text-anchor="end" font-family="${FONT}" font-weight="500" font-size="22" fill="${INK_SOFT}">${lang === 'pt' ? 'Português · English' : 'English · Português'}</text>
</svg>`;
};

const png = (svg, w, h) =>
  sharp(Buffer.from(svg), { density: 300 }).resize(w, h).png({ compressionLevel: 9 }).toBuffer();

await writeFile('public/favicon.svg', icon(64));
await writeFile('public/favicon-32.png', await png(icon(64), 32, 32));
await writeFile('public/apple-touch-icon.png', await png(icon(180), 180, 180));
for (const lang of ['pt', 'en']) {
  await writeFile(`public/og-${lang}.png`, await png(og(lang), 1200, 630));
}
console.log('[images] favicon.svg, favicon-32.png, apple-touch-icon.png, og-pt.png, og-en.png escritos em public/');
