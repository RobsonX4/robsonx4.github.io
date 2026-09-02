/** URL pública final do site (usada em metadata, canonical, sitemap e JSON-LD). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://robsonx4.github.io').replace(/\/$/, '');

/** Prefixo de caminho quando publicado em subdiretório (GitHub Pages de projeto). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const absolute = (path: string) => `${SITE_URL}${BASE_PATH}${path}`;

/** Imagem de Open Graph por idioma (gerada por scripts/generate-images.mjs). */
export const ogImage = (lang: 'pt' | 'en', alt: string) => ({
  url: absolute(`/og-${lang}.png`),
  width: 1200,
  height: 630,
  alt,
});
