import Link from 'next/link';
import type { Lang, Project } from '@/content/site';
import { ui } from '@/content/ui';
import { to } from '@/lib/i18n';
import { BASE_PATH } from '@/lib/config';

/** Compact row for the projects listing: thumbnail, copy and key results side by side. */
export function ProjectRow({ project, lang, index }: { project: Project; lang: Lang; index: number }) {
  const href = to(`/projects/${project.slug}`, lang);
  const results = project.results.filter((r) => r.value !== '?').slice(0, 2);
  const n = String(index + 1).padStart(2, '0');
  const wide = project.screenshots?.filter((s) => s.kind !== 'phone') ?? [];
  const cover = wide.find((s) => s.cover) ?? wide[0];

  return (
    <article className={`card group relative overflow-hidden transition hover:ring-1 ${project.theme.ring}`}>
      <div className="grid items-stretch sm:grid-cols-[13rem_minmax(0,1fr)] lg:grid-cols-[15rem_minmax(0,1fr)_14rem]">
        {cover && (
          <div
            className={`relative overflow-hidden border-b bg-gradient-to-br border-ink-200/70 sm:border-b-0 sm:border-r dark:border-white/10 ${project.theme.from} ${project.theme.to}`}
          >
            <img
              src={`${BASE_PATH}${cover.src}`}
              alt={cover.alt[lang]}
              loading="lazy"
              decoding="async"
              className="h-36 w-full object-contain p-4 sm:h-full"
            />
          </div>
        )}

        <div className="relative min-w-0 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="eyebrow">
              {n} · {project.year}
            </span>
            <span className="chip">{project.status[lang]}</span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
            <Link href={href} className="after:absolute after:inset-0">
              {project.name}
            </Link>
          </h2>
          <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">
            {project.tagline[lang]}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 5).map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 dark:text-white">
            {ui.project.readCase[lang]}
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <dl className="flex flex-col justify-center gap-5 border-t border-ink-200/70 p-5 sm:col-span-2 sm:flex-row sm:gap-10 lg:col-span-1 lg:flex-col lg:gap-5 lg:border-l lg:border-t-0 lg:p-6 dark:border-white/10">
          {results.map((r) => (
            <div key={r.label.pt} className="min-w-0">
              <dt className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">{r.value}</dt>
              <dd className="mt-0.5 text-xs leading-snug text-ink-500 dark:text-ink-400">{r.label[lang]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
