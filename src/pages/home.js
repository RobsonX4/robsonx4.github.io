import { html } from '../lib/html.js';
import { to } from '../lib/i18n.js';
import { profile, projects } from '../content/site.js';
import { ui } from '../content/ui.js';
import {
  arrowRight,
  certificationBadge,
  highlights,
  profileSheet,
  projectCard,
  reveal,
  section,
  stackGrid,
} from '../ui/parts.js';

export const home = (lang) => html`
  <!-- Hero -->
  <section class="hero">
    <div class="grid-bg" aria-hidden="true"></div>
    <div class="hero-grid wrap">
      <div>
        ${reveal(
          html`<h1 class="hero-title">${profile.name}<span class="hero-role">${profile.role[lang]}</span></h1>`,
          { delay: 60 },
        )}
        ${reveal(html`<p class="hero-specialties">${profile.specialties[lang]}</p>`, { delay: 100 })}
        ${reveal(html`<p class="hero-lead">${profile.tagline[lang]}</p>`, { delay: 140 })}
        ${reveal(
          html`
            <div class="hero-actions">
              <a class="button group" href="${to('/projects', lang)}">${ui.hero.cta[lang]} ${arrowRight()}</a>
              <span class="hero-location">${profile.location[lang]}</span>
            </div>
          `,
          { delay: 180 },
        )}
        ${reveal(highlights(lang, 'two'), { delay: 240 })}
      </div>

      ${reveal(certificationBadge(lang), { delay: 300 })}
    </div>
  </section>

  <!-- About -->
  ${section({
    id: 'about',
    eyebrow: ui.nav.about[lang],
    title: ui.sections.about[lang],
    children: html`
      <div class="split">
        <div>
          ${profile.bio[lang].slice(0, 2).map((p) => html`<p class="prose">${p}</p>`)}
          <p class="prose"><a class="underline-link" href="${to('/about', lang)}">${ui.nav.about[lang]} →</a></p>
        </div>
        ${reveal(profileSheet(lang), { delay: 120 })}
      </div>
    `,
  })}

  <!-- Stack -->
  ${section({
    id: 'stack',
    eyebrow: ui.sections.technologies[lang],
    title: ui.sections.skills[lang],
    subtitle: ui.sections.skillsSub[lang],
    children: stackGrid(lang),
  })}

  <!-- Selected work -->
  ${section({
    id: 'projects',
    eyebrow: ui.sections.portfolio[lang],
    title: ui.sections.selectedWork[lang],
    subtitle: ui.sections.selectedWorkSub[lang],
    children: html`
      <div class="cards">
        ${projects.map((p, i) => reveal(projectCard(p, lang, i), { delay: i * 80 }))}
      </div>
    `,
  })}
`;
