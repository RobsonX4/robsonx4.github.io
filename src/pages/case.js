import { html } from '../lib/html.js';
import { to } from '../lib/i18n.js';
import { projects } from '../content/site.js';
import { ui } from '../content/ui.js';
import { arrowRight, gallery, reveal } from '../ui/parts.js';

/** Titled block inside a case study. */
const block = (label, children) => html`
  <section class="block">
    <div class="block-inner">
      <h2 class="eyebrow block-label">${label}</h2>
      <div class="block-body">${children}</div>
    </div>
  </section>
`;

export const caseStudy = (project, lang) => {
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return html`
    <article data-tone="${project.tone}">
      <!-- Case header -->
      <header class="case-header">
        <div class="case-glow" aria-hidden="true"></div>
        <div class="case-header-inner wrap">
          <a class="underline-link case-back" href="${to('/projects', lang)}">← ${ui.project.back[lang]}</a>

          <div class="case-meta">
            <span class="chip">${project.status[lang]}</span>
            <span class="chip">${project.year}</span>
          </div>

          <h1 class="case-title">${project.name}</h1>
          <p class="case-lead">${project.tagline[lang]}</p>

          <dl class="case-facts">
            <div>
              <dt class="eyebrow">${ui.project.role[lang]}</dt>
              <dd class="case-fact">${project.role[lang]}</dd>
            </div>
            <div>
              <dt class="eyebrow">${ui.project.year[lang]}</dt>
              <dd class="case-fact">${project.year}</dd>
            </div>
            <div>
              <dt class="eyebrow">${ui.project.stack[lang]}</dt>
              <dd class="tags case-fact">${project.tags.map((t) => html`<span class="chip">${t}</span>`)}</dd>
            </div>
          </dl>

          ${project.url || project.repo
            ? html`
                <div class="case-actions">
                  ${project.url
                    ? html`<a class="button button--small" href="${project.url}" target="_blank" rel="noreferrer noopener">${ui.project.visit[lang]}</a>`
                    : ''}
                  ${project.repo
                    ? html`<a class="button button--ghost button--small" href="${project.repo}" target="_blank" rel="noreferrer noopener">${ui.project.code[lang]}</a>`
                    : ''}
                </div>
              `
            : ''}
        </div>
      </header>

      <div class="wrap">
        ${block(
          ui.project.context[lang],
          html`
            <p class="case-summary">${project.summary[lang]}</p>
            <p class="prose">${project.context[lang]}</p>
          `,
        )}

        ${project.screenshots && project.screenshots.length
          ? block(ui.project.screens[lang], gallery(project.screenshots, lang))
          : ''}

        ${block(
          ui.project.challenges[lang],
          html`
            <ul class="numbered">
              ${project.challenges[lang].map(
                (c, i) => html`
                  <li>
                    <span class="numbered-index">${String(i + 1).padStart(2, '0')}</span>
                    <span class="prose">${c}</span>
                  </li>
                `,
              )}
            </ul>
          `,
        )}

        ${block(
          ui.project.approach[lang],
          html`
            <ol class="steps">
              ${project.approach.map((step, i) =>
                reveal(
                  html`
                    <li class="step">
                      <span class="step-dot" aria-hidden="true"></span>
                      <h3 class="step-title">${step.title[lang]}</h3>
                      <p class="prose">${step.body[lang]}</p>
                    </li>
                  `,
                  { delay: i * 60 },
                ),
              )}
            </ol>
          `,
        )}

        ${block(
          ui.project.architecture[lang],
          html`
            <div class="arch">
              ${project.architecture.map(
                (row) => html`
                  <div class="arch-row">
                    <p class="mono">${row.layer[lang]}</p>
                    <p class="arch-detail">${row.detail[lang]}</p>
                  </div>
                `,
              )}
            </div>
          `,
        )}

        ${block(
          ui.project.stack[lang],
          html`
            <div class="stack-columns">
              ${project.stack.map(
                (g) => html`
                  <div>
                    <p class="stack-column-title">${g.group[lang]}</p>
                    <ul class="stack-column-items">${g.items.map((it) => html`<li>${it}</li>`)}</ul>
                  </div>
                `,
              )}
            </div>
          `,
        )}

        ${block(
          ui.project.results[lang],
          html`
            <dl class="results">
              ${project.results.map(
                (r) => html`
                  <div class="result">
                    <dt class="result-value">${r.value}</dt>
                    <dd class="result-label">${r.label[lang]}</dd>
                  </div>
                `,
              )}
            </dl>
          `,
        )}

        ${block(
          ui.project.learnings[lang],
          html`<ul class="learnings">${project.learnings[lang].map((l) => html`<li>${l}</li>`)}</ul>`,
        )}
      </div>

      <!-- Next project -->
      <nav class="wrap case-footer-nav">
        <a class="card next-project group" href="${to(`/projects/${next.slug}`, lang)}">
          <span>
            <span class="eyebrow">${ui.project.next[lang]}</span>
            <span class="next-project-name">${next.name}</span>
          </span>
          ${arrowRight()}
        </a>
      </nav>
    </article>
  `;
};
