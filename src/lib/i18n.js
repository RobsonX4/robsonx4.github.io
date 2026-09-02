import { LANGS } from '../content/site.js';

export { LANGS };

export const isLang = (value) => LANGS.includes(value);

export const otherLang = (lang) => (lang === 'pt' ? 'en' : 'pt');

/** Builds a language-prefixed path. `to('/projects', 'en')` → `/en/projects/`. */
export const to = (path, lang) => {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean}${clean ? '/' : '/'}`;
};

/** Swaps the language prefix of a path, keeping the rest of the route. */
export const swapLang = (path, next) => {
  const parts = path.replace(/^\/+/, '').split('/').filter(Boolean);
  if (parts.length && isLang(parts[0])) {
    parts[0] = next;
    return `/${parts.join('/')}/`;
  }
  return `/${next}/`;
};

/** `html lang` attribute for a language. */
export const htmlLang = (lang) => (lang === 'pt' ? 'pt-BR' : 'en');
