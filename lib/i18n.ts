import { LANGS, type Lang } from '@/content/site';

export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);

export const otherLang = (lang: Lang): Lang => (lang === 'pt' ? 'en' : 'pt');

/** Monta um href já prefixado com o idioma. `to('/projetos', 'en')` → `/en/projetos`. */
export const to = (path: string, lang: Lang) => {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean}`;
};

/** Troca o prefixo de idioma de um pathname atual, preservando o resto da rota. */
export const swapLangInPath = (pathname: string, next: Lang) => {
  const parts = pathname.replace(/^\/+/, '').split('/');
  if (parts.length && isLang(parts[0])) {
    parts[0] = next;
    return `/${parts.join('/')}`;
  }
  return `/${next}`;
};
