# robsonx4.github.io

Personal site of Robson Costa, Senior Software Engineer. Bilingual (Portuguese and English), statically exported with Next.js and deployed to GitHub Pages.

**Live:** https://robsonx4.github.io

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router, `output: 'export'`) |
| UI | React 19, Tailwind CSS 3 |
| Language | TypeScript, strict mode |
| Images | `sharp` for build-time favicon and Open Graph generation |
| Hosting | GitHub Pages via GitHub Actions |

No runtime server, no client-side data fetching, no analytics. The output is a folder of static HTML, CSS and JS.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000/pt or /en
```

The root `/` only exists in the production build, where a small redirector picks the language from the browser. In development, open `/pt` or `/en` directly.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Static export to `out/`, then the post-build step |
| `npm start` | Serve `out/` locally |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run images` | Regenerate favicon and Open Graph images in `public/` |

## Project structure

```
app/
  [lang]/
    layout.tsx              root layout: <html lang>, nav, footer, metadata, JSON-LD
    page.tsx                home
    about/page.tsx          bio, experience, education and certification
    projects/page.tsx       projects listing
    projects/[slug]/page.tsx
    not-found.tsx
  sitemap.ts  robots.ts  globals.css
components/                 Nav, Footer, Section, Reveal, StackGrid, ProjectRow, ...
content/
  site.ts                   all copy and data, PT and EN
  ui.ts                     interface labels
lib/
  config.ts                 site URL, base path, absolute URL helpers
  i18n.ts                   language helpers
scripts/
  generate-images.mjs       favicon + OG images from content
  postbuild.mjs             out/index.html redirector, out/404.html, .nojekyll
public/                     static assets, logos, generated images
```

Routes are generated for both languages: `/pt/...` and `/en/...`.

## Content model

All copy lives in two files. Components never hardcode text.

- `content/site.ts` holds the profile, bio, stack, experience, education, certifications and the full project case studies (context, challenges, approach, architecture, stack, results, learnings). Every user-facing string is an object with `pt` and `en` keys.
- `content/ui.ts` holds interface labels: navigation, section titles, buttons.

To add a project, append an object to the `projects` array. The listing, the home cards, the case page and the sitemap entries are derived from it.

### Provenance

Profile, experience, education and the Gerencert case were confirmed against LinkedIn on 2026-08-31. The YellowJobs and Moosy cases are drafts and are marked with `TODO:` in `content/site.ts`; their result figures are placeholders (`?`) and are hidden from the UI until filled in.

### Generated images

`public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `og-pt.png` and `og-en.png` are produced from the name, initials, role and specialties in `content/site.ts`. After changing any of those, or the `brand` color, run `npm run images` and commit the output.

Institution logos and the AWS certification badge live in `public/logos/` and are referenced from the `logo` and `badge` fields in the content file.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which installs dependencies, builds the static export and publishes `out/` to GitHub Pages. The repository is configured with **Source: GitHub Actions**.

The site URL defaults to `https://robsonx4.github.io` and the base path is empty. To move to a custom domain:

1. Add `public/CNAME` containing the domain.
2. Set the `SITE_URL` repository variable to the new origin.

`BASE_PATH` only needs a value if the site is ever served from a subdirectory.

## Design decisions

- **Static export.** No server, no middleware, no cost. The language redirect on `/` is a few lines of inline JavaScript with a `<noscript>` fallback.
- **Content as data.** Case studies are typed objects, so the same source feeds the home, the listing, the case pages, the sitemap and structured data.
- **Theme before first paint.** An inline script applies the stored theme (or the system preference) before render, so there is no flash. Preference is stored in `localStorage`.
- **Progressive reveal.** Entrance animations are opt-in through a `.js` class on `<html>`. Without JavaScript, or with `prefers-reduced-motion`, everything is visible immediately.
- **SEO baseline.** Per-language canonical and `hreflang`, Open Graph and Twitter cards with generated images, a `Person` JSON-LD block, sitemap and robots.

## License

All rights reserved. The code may be used as a reference; the content, images and personal information are not licensed for reuse.
