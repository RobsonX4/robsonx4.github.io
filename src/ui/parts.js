import { html, raw } from '../lib/html.js';
import { asset } from '../lib/config.js';
import { to } from '../lib/i18n.js';
import { ui } from '../content/ui.js';
import { profile, certifications, education, experience } from '../content/site.js';

/* ── Reveal ────────────────────────────────────────────────────────────────
 * Entrance animation wrapper. Content is visible by default; the CSS only
 * hides it once app.js marks <html class="js">, so no JavaScript means no
 * hidden content.
 */
export const reveal = (content, { delay = 0, className = '' } = {}) =>
  html`<div class="reveal ${className}"${delay ? raw(` style="animation-delay:${delay}ms"`) : ''}>${content}</div>`;

/* ── Section ─────────────────────────────────────────────────────────────── */
export const section = ({ id, eyebrow, title, subtitle, className = '', children }) => html`
  <section${id ? raw(` id="${id}"`) : ''} class="section wrap ${className}">
    ${eyebrow || title
      ? html`
          <header class="section-head">
            ${eyebrow ? html`<p class="eyebrow">${eyebrow}</p>` : ''}
            ${title ? html`<h2 class="section-title">${title}</h2>` : ''}
            ${subtitle ? html`<p class="prose section-sub">${subtitle}</p>` : ''}
          </header>
        `
      : ''}
    ${children}
  </section>
`;

/* ── Icons ───────────────────────────────────────────────────────────────── */
export const arrowRight = () => html`
  <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
`;

const stackIcons = {
  server: html`<rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" />`,
  monitor: html`<rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" />`,
  cloud: html`<path d="M17.5 19a4.5 4.5 0 0 0 .4-9A6 6 0 0 0 6.3 8.5 4.5 4.5 0 0 0 6.5 19z" />`,
  activity: html`<path d="M3 12h4l3-8 4 16 3-8h4" />`,
  database: html`<ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />`,
  sparkles: html`<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />`,
  layers: html`<path d="M12 3 2 8l10 5 10-5z" /><path d="M2 12l10 5 10-5M2 16l10 5 10-5" />`,
};

const icon = (name) => html`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${stackIcons[name]}</svg>
`;

/* ── Key numbers ─────────────────────────────────────────────────────────── */
export const highlights = (lang, variant = 'two') => html`
  <dl class="stats stats--${variant}">
    ${profile.stats.map(
      (s) => html`
        <div class="stat">
          <dt class="stat-value">${s.value}</dt>
          <dd class="stat-label">${s.label[lang]}</dd>
        </div>
      `,
    )}
  </dl>
`;

/* ── Certification badge ─────────────────────────────────────────────────── */
export const certificationBadge = (lang) => {
  const cert = certifications[0];
  return html`
    <div class="certification">
      <div class="certification-glow" aria-hidden="true"></div>
      <img class="certification-badge" src="${asset(cert.badge)}" alt="" width="340" height="340" decoding="async" />
      <div class="certification-body">
        <p class="eyebrow">${ui.sections.certification[lang]}</p>
        <p class="certification-name">${cert.name}</p>
        <p class="certification-issuer">${cert.issuer}</p>
      </div>
    </div>
  `;
};

/* ── Profile sheet ───────────────────────────────────────────────────────── */
export const profileSheet = (lang) => html`
  <dl class="sheet">
    <div class="sheet-row">
      <dt class="eyebrow">${ui.sheet.now[lang]}</dt>
      <dd class="sheet-value">${experience[0].role[lang]}</dd>
      <dd class="sheet-muted">${experience[0].company}</dd>
    </div>
    <div class="sheet-row">
      <dt class="eyebrow">${ui.sheet.base[lang]}</dt>
      <dd class="sheet-value">${profile.location[lang]}</dd>
    </div>
    <div class="sheet-row">
      <dt class="eyebrow">${ui.sheet.education[lang]}</dt>
      ${education.map(
        (e) => html`<dd class="sheet-plain">${e.course[lang]} <span class="sheet-dim">· ${e.school}</span></dd>`,
      )}
    </div>
    <div class="sheet-row">
      <dt class="eyebrow">${ui.sheet.focus[lang]}</dt>
      <dd class="sheet-plain">${profile.specialties[lang]}</dd>
    </div>
  </dl>
`;

/* ── Stack ───────────────────────────────────────────────────────────────── */
const featuredGroup = (group, lang) => html`
  <div class="stack-featured">
    <div class="stack-featured-glow" aria-hidden="true"></div>
    <div class="stack-featured-inner">
      <div class="stack-featured-head">
        <span class="stack-featured-mark">${icon(group.icon)}</span>
        <div>
          <p class="stack-featured-label">${ui.sections.primaryStack[lang]}</p>
          <h3 class="stack-featured-name">${group.group[lang]}</h3>
        </div>
      </div>
      <ul class="stack-featured-items">
        ${group.items.map((it) => html`<li>${it}</li>`)}
      </ul>
    </div>
  </div>
`;

const stackCard = (group, lang) => html`
  <div class="card stack-card" data-tone="${group.tone}">
    <div class="stack-card-head">
      <span class="stack-icon">${icon(group.icon)}</span>
      <h3 class="stack-name">${group.group[lang]}</h3>
    </div>
    <ul class="tags stack-items">
      ${group.items.map((it) => html`<li class="chip" data-tone="${group.tone}">${it}</li>`)}
    </ul>
  </div>
`;

/** Stack as cards: the primary group takes the full first row, the rest form the grid. */
export const stackGrid = (lang) => {
  const primary = profile.skills.find((g) => g.primary);
  const others = profile.skills.filter((g) => !g.primary);
  return html`
    <div class="stack">
      ${primary ? reveal(featuredGroup(primary, lang)) : ''}
      <div class="stack-grid">
        ${others.map((g, i) => reveal(stackCard(g, lang), { delay: i * 60 }))}
      </div>
    </div>
  `;
};

/* ── Project card, used on the home ──────────────────────────────────────── */
const coverOf = (project) => {
  const wide = (project.screenshots || []).filter((s) => s.kind !== 'phone');
  return wide.find((s) => s.cover) || wide[0];
};

export const projectCard = (project, lang, index) => {
  const cover = coverOf(project);
  return html`
    <article class="card project-card group" data-tone="${project.tone}">
      ${cover
        ? html`
            <div class="project-cover">
              <img src="${asset(cover.src)}" alt="${cover.alt[lang]}" loading="lazy" decoding="async" />
            </div>
          `
        : ''}
      <div class="project-body">
        <div class="project-meta">
          <span class="eyebrow">${String(index + 1).padStart(2, '0')} · ${project.year}</span>
          <span class="chip">${project.status[lang]}</span>
        </div>
        <h3 class="project-name">
          <a class="stretch" href="${to(`/projects/${project.slug}`, lang)}">${project.name}</a>
        </h3>
        <p class="prose project-tagline">${project.tagline[lang]}</p>
        <ul class="tags">${project.tags.map((t) => html`<li class="chip">${t}</li>`)}</ul>
        <span class="project-more">${ui.project.readCase[lang]} ${arrowRight()}</span>
      </div>
    </article>
  `;
};

/* ── Project row, used on the listing ────────────────────────────────────── */
export const projectRow = (project, lang, index) => {
  const cover = coverOf(project);
  const results = project.results.filter((r) => r.value !== '?').slice(0, 2);
  const n = String(index + 1).padStart(2, '0');
  return html`
    <article class="card project-row group" data-tone="${project.tone}">
      <div class="project-row-inner">
        ${cover
          ? html`
              <div class="row-cover">
                <img src="${asset(cover.src)}" alt="${cover.alt[lang]}" loading="lazy" decoding="async" />
              </div>
            `
          : ''}
        <div class="row-body">
          <div class="row-meta">
            <span class="eyebrow">${n} · ${project.year}</span>
            <span class="chip">${project.status[lang]}</span>
          </div>
          <h2 class="row-name">
            <a class="stretch" href="${to(`/projects/${project.slug}`, lang)}">${project.name}</a>
          </h2>
          <p class="row-tagline">${project.tagline[lang]}</p>
          <ul class="tags">${project.tags.slice(0, 5).map((t) => html`<li class="chip">${t}</li>`)}</ul>
          <span class="project-more">${ui.project.readCase[lang]} ${arrowRight()}</span>
        </div>
        <dl class="row-results">
          ${results.map(
            (r) => html`
              <div>
                <dt class="row-result-value">${r.value}</dt>
                <dd class="row-result-label">${r.label[lang]}</dd>
              </div>
            `,
          )}
        </dl>
      </div>
    </article>
  `;
};

/* ── Product screens ─────────────────────────────────────────────────────── */
export const gallery = (shots, lang) => {
  const wide = shots.filter((s) => s.kind !== 'phone');
  const phone = shots.filter((s) => s.kind === 'phone');
  return html`
    <div class="gallery">
      ${wide.length
        ? html`
            <ul class="gallery-wide">
              ${wide.map(
                (s, i) => html`
                  <li class="${wide.length % 2 === 1 && i === 0 ? 'is-full' : ''}">
                    <img src="${asset(s.src)}" alt="${s.alt[lang]}" loading="lazy" decoding="async" />
                  </li>
                `,
              )}
            </ul>
          `
        : ''}
      ${phone.length
        ? html`
            <ul class="gallery-phones">
              ${phone.map(
                (s) => html`
                  <li><img src="${asset(s.src)}" alt="${s.alt[lang]}" loading="lazy" decoding="async" /></li>
                `,
              )}
            </ul>
          `
        : ''}
    </div>
  `;
};
