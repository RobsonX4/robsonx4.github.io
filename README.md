# robsonx4.github.io

Personal site of Robson Costa, Senior Software Engineer. Bilingual (Portuguese and English), built by a Node script into a folder of static files and served from GitHub Pages.

**Live:** https://robsonx4.github.io

No framework, at build time or at runtime. The browser downloads HTML, one hand-written stylesheet and 2 kB of JavaScript. One dependency in the whole project, and it only generates images.

| Page | Transferred (gzip) |
| --- | --- |
| Home | 12.7 kB total: 5.7 kB HTML, 6.1 kB CSS, 0.9 kB JS |
| Case study | 15 kB total |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000/pt
```

`npm run dev` builds the site, serves `dist/`, watches `src/` and `public/`, and reloads the open tab on every change.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server with rebuild and live reload |
| `npm run build` | Build the site into `dist/` |
| `npm run check` | Build, then validate the output. This is what CI runs |
| `npm run images` | Regenerate favicon and Open Graph images in `public/` |

## How it works

`build.mjs` imports the content, renders every page with template literals and writes the result. There is no router, no bundler and no hydration step. A page is a function that returns a string.

```
build.mjs                  the whole build
dev.mjs                    static server, file watcher, live reload
src/
  content/site.js          all copy and data, PT and EN
  content/ui.js            interface labels
  lib/html.js              tagged template that escapes by default
  lib/i18n.js              language helpers
  lib/config.js            site URL and base path
  ui/layout.js             document shell, header, footer
  ui/parts.js              section, stack grid, project card, gallery, ...
  pages/                   home, about, projects, case
  styles/app.css           the entire design system, hand written
  assets/app.js            everything the browser runs
scripts/
  generate-images.mjs      favicon and Open Graph images from the content
  check.mjs                validates the built site
public/                    images, logos, favicons
```

One dev dependency: `sharp`, used by `npm run images` to generate the favicon and Open Graph cards. Nothing else is installed, and nothing ships to the browser but the files in `dist/`.

### Styling

`src/styles/app.css` is written by hand and shipped as written. Colors are declared once as custom properties and swapped under `.dark`, so no rule in the file mentions a theme. Per-project and per-category accents come from a single `data-tone` attribute:

```css
[data-tone='emerald'] { --tone: #10b981; }
.stack-icon { background: color-mix(in srgb, var(--tone) 12%, transparent); }
```

### Escaping

`src/lib/html.js` exports a tagged template that escapes every interpolated value and lets nested templates through untouched. That is the one safety guarantee a framework normally provides, and it costs 25 lines.

```js
html`<p class="prose-body">${project.summary[lang]}</p>`
```

### The JavaScript the site runs

`src/assets/app.js` handles three things: the header shadow on scroll, the mobile menu and the theme toggle. Entrance animations are a fourth, with an `IntersectionObserver` and a timer as a safety net. The theme itself is applied by an inline script in `<head>`, before first paint, so there is no flash of the wrong background.

Without JavaScript the site is fully readable: nothing is hidden, every link works and the language switch is a plain link.

## Content model

All copy lives in two files. Templates never hardcode text.

- `src/content/site.js` holds the profile, bio, stack, experience, education, certifications and the full project case studies (context, challenges, approach, architecture, stack, results, learnings). Every user-facing string is an object with `pt` and `en` keys. The shapes are documented as JSDoc typedefs at the top of the file, so editors still autocomplete them.
- `src/content/ui.js` holds interface labels: navigation, section titles, buttons.

To add a project, append an object to the `projects` array. The listing, the home cards, the case page and the sitemap entries are derived from it.

### Provenance

Profile, experience and education were confirmed against LinkedIn on 2026-08-31, as were the Gerencert results. The Gerencert technical detail comes from the project's own documentation, read on 2026-09-02. The YellowJobs and Moosy cases use product facts published on yellowjobs.com.br and moosy.app plus the engineering narrative provided by the author. Product screens under `public/projects/` come from those sites.

### Generated images

`public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `og-pt.png` and `og-en.png` are produced from the name, initials, role and specialties in the content file. After changing any of those, or the `brand` color, run `npm run images` and commit the output.

Institution logos and the AWS certification badge live in `public/logos/`, referenced from the `logo` and `badge` fields in the content.

## Checks

`npm run check` builds the site and then asserts, against the generated files:

1. Every declared page, the language redirector and the 404 page exist.
2. Every page has a title, description, canonical link, both `hreflang` variants, an Open Graph image and structured data, and declares the right `lang`.
3. No `undefined`, `[object Object]` or unresolved `${` leaked into the HTML.
4. Every internal link and asset reference resolves to a real file.
5. Both languages produce the same number of pages.
6. No file exceeds the 512 kB budget.

That is the trade for dropping the type checker. TypeScript could not see inside template strings either; a broken link is the mistake actually worth catching here.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which installs, runs `npm run check` and publishes `dist/` to GitHub Pages. The repository is configured with **Source: GitHub Actions**.

The site URL defaults to `https://robsonx4.github.io` and the base path is empty. To move to a custom domain:

1. Add `public/CNAME` containing the domain.
2. Set the `SITE_URL` repository variable to the new origin.

`BASE_PATH` only needs a value if the site is ever served from a subdirectory.

## Design decisions

- **A script, not a framework.** The site is 12 pages of mostly static text. A build script that returns strings is smaller than the configuration a framework would need, and it is readable end to end in one sitting. The build takes about 15 ms.
- **Tokens, not utility classes.** One stylesheet with semantic class names and CSS custom properties. Dark mode is a token swap, not a variant on every rule.
- **Content as data.** Case studies are plain objects, so one source feeds the home, the listing, the case pages, the sitemap and the structured data.
- **Escaping by default.** The only footgun of string templating, removed in 25 lines.
- **Theme before first paint.** An inline script applies the stored theme, or the system preference, before render. The choice is kept in `localStorage`.
- **Progressive enhancement.** Entrance animations only exist once a `.js` class lands on `<html>`. Without JavaScript, or with `prefers-reduced-motion`, everything is visible immediately.
- **Hashed assets.** The stylesheet and script carry a content hash in the filename, so they can be cached forever and still update on deploy.
- **SEO baseline.** Per-language canonical and `hreflang`, Open Graph and Twitter cards with generated images, a `Person` JSON-LD block, sitemap and robots.

## License

All rights reserved. The code may be used as a reference; the content, images and personal information are not licensed for reuse.
