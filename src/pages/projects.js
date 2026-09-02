import { html } from '../lib/html.js';
import { projects } from '../content/site.js';
import { ui } from '../content/ui.js';
import { projectRow, reveal, section } from '../ui/parts.js';

export const projectsList = (lang) =>
  section({
    eyebrow: ui.sections.portfolio[lang],
    title: ui.project.all[lang],
    subtitle: ui.project.allSub[lang],
    className: 'section--tight',
    children: html`
      <div class="rows">
        ${projects.map((p, i) => reveal(projectRow(p, lang, i), { delay: i * 80 }))}
      </div>
    `,
  });
