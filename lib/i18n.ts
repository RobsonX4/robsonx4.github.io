import { LANGS, type Lang } from '@/content/site';

export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);

export const otherLang = (lang: Lang): Lang => (lang === 'pt' ? 'en' : 'pt');

/** Builds a language-prefixed href. `to('/projects', 'en')` → `/en/projects`. */
export const to = (path: string, lang: Lang) => {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean}`;
};

/** Swaps the language prefix of a pathname, keeping the rest of the route. */
export const swapLangInPath = (pathname: string, next: Lang) => {
  const parts = pathname.replace(/^\/+/, '').split('/');
  if (parts.length && isLang(parts[0])) {
    parts[0] = next;
    return `/${parts.join('/')}`;
  }
  return `/${next}`;
};
