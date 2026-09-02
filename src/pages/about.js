import { html } from '../lib/html.js';
import { asset } from '../lib/config.js';
import { certifications, education, experience, profile } from '../content/site.js';
import { ui } from '../content/ui.js';
import { highlights, profileSheet, reveal, section } from '../ui/parts.js';

export const about = (lang) => html`
  <!-- Bio + profile sheet -->
  ${section({
    eyebrow: profile.role[lang],
    title: ui.sections.about[lang],
    className: 'section--tight',
    children: html`
      <div class="split split--wide-aside">
        <div>${profile.bio[lang].map((p) => html`<p class="prose">${p}</p>`)}</div>
        <aside class="split-aside">
          ${reveal(profileSheet(lang), { delay: 100 })}
          ${reveal(highlights(lang, 'side'), { delay: 160 })}
        </aside>
      </div>
    `,
  })}

  <!-- Experience -->
  ${section({
    eyebrow: ui.sections.career[lang],
    title: ui.sections.experience[lang],
    subtitle: ui.sections.experienceSub[lang],
    children: html`
      <ol class="timeline">
        ${experience.map((job, i) =>
          reveal(
            html`
              <li class="timeline-item">
                <span class="timeline-dot" aria-hidden="true"></span>
                <div class="timeline-head">
                  <h3 class="timeline-role">${job.role[lang]}</h3>
                  <span class="sheet-dim">·</span>
                  <span class="timeline-company">${job.company}</span>
                </div>
                <p class="mono timeline-period">${job.period[lang]}</p>
                <p class="prose">${job.summary[lang]}</p>
                ${job.tech ? html`<ul class="tags">${job.tech.map((t) => html`<li class="chip">${t}</li>`)}</ul>` : ''}
              </li>
            `,
            { delay: i * 50 },
          ),
        )}
      </ol>
    `,
  })}

  <!-- Education and certification -->
  ${section({
    eyebrow: ui.sections.learning[lang],
    title: ui.sections.education[lang],
    children: html`
      <ul class="edu-grid">
        ${education.map((e, i) =>
          reveal(
            html`
              <li class="card edu-card">
                <div class="edu-logo">
                  <img src="${asset(e.logo)}" alt="${e.logoAlt}" loading="lazy" decoding="async" />
                </div>
                <p class="edu-course">${e.course[lang]}</p>
                <p class="mono edu-meta">${e.year}</p>
              </li>
            `,
            { delay: i * 80 },
          ),
        )}
        ${certifications.map((c, i) =>
          reveal(
            html`
              <li class="card edu-card">
                <div class="edu-logo">
                  <img class="badge" src="${asset(c.badge)}" alt="" width="340" height="340" loading="lazy" decoding="async" />
                </div>
                <p class="edu-course">${c.name}</p>
                <p class="mono edu-meta">${c.issuer}</p>
              </li>
            `,
            { delay: (education.length + i) * 80 },
          ),
        )}
      </ul>
    `,
  })}
`;
