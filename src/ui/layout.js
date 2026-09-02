import { html, raw, jsonScript } from '../lib/html.js';
import { absolute, asset } from '../lib/config.js';
import { htmlLang, otherLang, swapLang, to } from '../lib/i18n.js';
import { profile } from '../content/site.js';
import { ui } from '../content/ui.js';

/* Runs before first paint: applies the saved theme so there is no flash, and
 * marks <html class="js">, which is what allows the CSS to hide reveal blocks.
 * Without JavaScript nothing is hidden. */
const themeScript = `!function(){var e=document.documentElement;e.classList.add("js");try{var t=localStorage.getItem("theme"),a=t?"dark"===t:matchMedia("(prefers-color-scheme: dark)").matches;e.classList.toggle("dark",a)}catch(n){}}()`;

const navLinks = (lang) => [
  { href: to('/', lang), label: ui.nav.home[lang] },
  { href: to('/projects', lang), label: ui.nav.projects[lang] },
  { href: to('/about', lang), label: ui.nav.about[lang] },
];

const isActive = (href, path, lang) => (href === to('/', lang) ? path === href : path.startsWith(href));

const nav = (lang, path) => {
  const links = navLinks(lang);
  const other = otherLang(lang);
  return html`
    <header class="site-header" data-header>
      <nav class="nav wrap" aria-label="${ui.nav.home[lang]}">
        <a class="brand" href="${to('/', lang)}">
          <span class="brand-mark">${profile.initials}</span>
          <span>${profile.name}</span>
        </a>

        <div class="nav-links">
          ${links.map(
            (l) => html`<a class="nav-link" href="${l.href}"${isActive(l.href, path, lang) ? raw(' aria-current="page"') : ''}>${l.label}</a>`,
          )}
        </div>

        <div class="nav-actions">
          <a class="lang-switch" href="${swapLang(path, other)}" hreflang="${other}" title="${ui.lang.switch[lang]}">${other}</a>

          <button class="icon-button" type="button" data-theme-toggle aria-label="${ui.theme.toggle[lang]}" title="${ui.theme.toggle[lang]}">
            <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
              <path d="M20 14.2A8.2 8.2 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.2Z" stroke-linejoin="round" />
            </svg>
            <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" />
              <g stroke-linecap="round"><path d="M12 2.6v2M12 19.4v2M2.6 12h2M19.4 12h2M5.3 5.3l1.5 1.5M17.2 17.2l1.5 1.5M18.7 5.3l-1.5 1.5M6.8 17.2l-1.5 1.5" /></g>
            </svg>
          </button>

          <button class="icon-button menu-button" type="button" data-menu-toggle aria-expanded="false" aria-controls="menu" aria-label="${ui.nav.home[lang]}">
            <svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
      </nav>

      <div class="menu-panel" id="menu" data-menu hidden>
        <div class="wrap">
          ${links.map((l) => html`<a class="menu-link" href="${l.href}">${l.label}</a>`)}
          <a class="menu-link" href="mailto:${profile.email}">${ui.nav.contact[lang]}</a>
        </div>
      </div>
    </header>
  `;
};

const footer = (lang) => html`
  <footer class="site-footer">
    <div class="footer-inner wrap">
      <div>
        <p class="footer-name">${profile.name}</p>
        <p class="footer-line">${profile.role[lang]}</p>
        <p class="footer-line">${profile.location[lang]}</p>

        <ul class="footer-social">
          <li>
            <a class="social-link" href="mailto:${profile.email}" aria-label="${ui.footer.email[lang]}: ${profile.email}" title="${profile.email}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
              </svg>
            </a>
          </li>
          <li>
            <a class="social-link" href="${profile.links.linkedin}" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
            </a>
          </li>
          <li>
            <a class="social-link" href="${profile.links.github}" target="_blank" rel="noreferrer noopener" aria-label="GitHub" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg>
            </a>
          </li>
        </ul>
        <a class="underline-link footer-email" href="mailto:${profile.email}">${profile.email}</a>
      </div>

      <div class="footer-side">
        <div class="footer-links">
          <a class="underline-link" href="${to('/projects', lang)}">${ui.nav.projects[lang]}</a>
          <a class="underline-link" href="${to('/about', lang)}">${ui.nav.about[lang]}</a>
        </div>
        <p class="footer-legal">© ${new Date().getFullYear()} ${profile.name}. ${ui.footer.rights[lang]}</p>
      </div>
    </div>
  </footer>
`;

const personJsonLd = (lang) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role[lang],
  worksFor: { '@type': 'Organization', name: 'Itaú Unibanco' },
  address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressCountry: 'BR' },
  knowsAbout: profile.skills.flatMap((g) => g.items),
  description: profile.tagline[lang],
  email: `mailto:${profile.email}`,
  url: absolute(`/${lang}/`),
  sameAs: [profile.links.github, profile.links.linkedin],
});

/**
 * Full page document.
 * @param {{ lang: string, path: string, title: string, description: string,
 *           ogType?: string, ogTitle?: string, assets: { css: string, js: string },
 *           liveReload?: boolean, children: unknown }} page
 */
export const layout = ({ lang, path, title, description, ogType = 'website', ogTitle, assets, liveReload = false, children }) => {
  const canonical = absolute(path);
  const ogImage = absolute(`/og-${lang}.png`);
  return raw(`<!doctype html>
${html`<html lang="${htmlLang(lang)}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="pt-BR" href="${absolute(swapLang(path, 'pt'))}" />
    <link rel="alternate" hreflang="en" href="${absolute(swapLang(path, 'en'))}" />
    <link rel="alternate" hreflang="x-default" href="${absolute(swapLang(path, 'en'))}" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="${ogType}" />
    <meta property="og:title" content="${ogTitle || title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="${profile.name}" />
    <meta property="og:locale" content="${lang === 'pt' ? 'pt_BR' : 'en_US'}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${ogTitle || title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />

    <link rel="icon" href="${asset('/favicon.svg')}" type="image/svg+xml" />
    <link rel="icon" href="${asset('/favicon-32.png')}" sizes="32x32" type="image/png" />
    <link rel="apple-touch-icon" href="${asset('/apple-touch-icon.png')}" />
    <link rel="stylesheet" href="${asset(assets.css)}" />

    <script>${raw(themeScript)}</script>
    <script type="application/ld+json">${jsonScript(personJsonLd(lang))}</script>
  </head>
  <body>
    <a class="sr-only skip-link" href="#main">${lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}</a>
    ${nav(lang, path)}
    <main id="main">${children}</main>
    ${footer(lang)}
    <script src="${asset(assets.js)}" defer></script>
    ${liveReload ? raw('<script>new EventSource("/__reload").onmessage=()=>location.reload()</script>') : ''}
  </body>
</html>`}
`);
};
