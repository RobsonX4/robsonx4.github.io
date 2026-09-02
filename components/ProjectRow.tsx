import Link from 'next/link';
import type { Lang, Project } from '@/content/site';
import { ui } from '@/content/ui';
import { to } from '@/lib/i18n';

/** Linha editorial da listagem: texto à esquerda, painel de resultados à direita. */
export function ProjectRow({ project, lang, index }: { project: Project; lang: Lang; index: number }) {
  const href = to(`/projetos/${project.slug}`, lang);
  const results = project.results.filter((r) => r.value !== '?').slice(0, 3);
  const n = String(index + 1).padStart(2, '0');

  return (
    <article className={`card group relative overflow-hidden transition-shadow hover:ring-1 ${project.theme.ring}`}>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="relative p-7 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">
              {n} · {project.year}
            </span>
            <span className="chip">{project.status[lang]}</span>
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
            <Link href={href} className="after:absolute after:inset-0">
              {project.name}
            </Link>
          </h2>
          <p className="prose-body mt-4 max-w-prose">{project.tagline[lang]}</p>

          <p className="mt-5 text-sm text-ink-500 dark:text-ink-400">
            <span className="font-medium text-ink-700 dark:text-ink-200">{ui.project.role[lang]}:</span> {project.role[lang]}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 dark:text-white">
            {ui.project.readCase[lang]}
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <aside
          className={`relative overflow-hidden border-t border-ink-200/70 bg-gradient-to-br p-7 sm:p-10 lg:border-l lg:border-t-0 dark:border-white/10 ${project.theme.from} ${project.theme.to}`}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -right-2 select-none text-[9rem] font-bold leading-none tracking-tighter text-ink-900/[0.06] dark:text-white/[0.06]"
          >
            {n}
          </span>
          <p className="eyebrow relative">{ui.project.results[lang]}</p>
          <dl className="relative mt-6 space-y-6">
            {results.map((r) => (
              <div key={r.label.pt}>
                <dt className="text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">{r.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-ink-600 dark:text-ink-300">{r.label[lang]}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </article>
  );
}
