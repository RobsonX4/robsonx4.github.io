import Link from 'next/link';
import type { Lang, Project } from '@/content/site';
import { ui } from '@/content/ui';
import { to } from '@/lib/i18n';

export function ProjectCard({ project, lang, index }: { project: Project; lang: Lang; index: number }) {
  const href = to(`/projetos/${project.slug}`, lang);

  return (
    <article className={`card group relative flex h-full flex-col overflow-hidden p-6 hover:border-ink-300 sm:p-8 dark:hover:border-white/20 ${project.theme.ring}`}>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b ${project.theme.from} ${project.theme.to} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-baseline justify-between gap-3">
          <span className="eyebrow whitespace-nowrap">
            {String(index + 1).padStart(2, '0')} · {project.year}
          </span>
          <span className="chip shrink-0 whitespace-nowrap">{project.status[lang]}</span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink-900 sm:text-[28px] dark:text-white">
          <Link href={href} className="after:absolute after:inset-0">
            {project.name}
          </Link>
        </h3>

        <p className="prose-body mt-3 max-w-prose">{project.tagline[lang]}</p>

        <ul className="mt-6 flex flex-wrap gap-2 pb-2">
          {project.tags.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex pt-6 items-center gap-1.5 text-sm font-medium text-ink-900 dark:text-white">
          {ui.project.readCase[lang]}
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </article>
  );
}
