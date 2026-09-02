import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LANGS, getProject, projects } from '@/content/site';
import { ui } from '@/content/ui';
import { ogImage } from '@/lib/config';
import { isLang, to } from '@/lib/i18n';
import { Reveal } from '@/components/Reveal';
import { Gallery } from '@/components/Gallery';

export function generateStaticParams() {
  return LANGS.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const l = isLang(lang) ? lang : 'pt';
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.tagline[l].slice(0, 60)}`,
    description: project.summary[l],
    openGraph: { title: project.name, description: project.summary[l], type: 'article', images: [ogImage(l, project.name)] },
  };
}

/** Titled block inside a case study. */
function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-ink-200/70 py-12 first:border-t-0 sm:py-16 dark:border-white/10">
      <div className="grid gap-8 lg:grid-cols-[13rem_1fr]">
        <h2 className="eyebrow lg:pt-1.5">{label}</h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      {/* ── Case header ──────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-ink-200/70 dark:border-white/10">
        <div aria-hidden className={`pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b ${project.theme.from} ${project.theme.to}`} />
        <div className="container-page relative py-14 sm:py-20">
          <Link href={to('/projects', lang)} className="link-underline text-sm text-ink-500 dark:text-ink-400">
            ← {ui.project.back[lang]}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="chip">{project.status[lang]}</span>
            <span className="chip">{project.year}</span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl dark:text-white">
            {project.name}
          </h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-600 sm:text-xl dark:text-ink-300">
            {project.tagline[lang]}
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="eyebrow">{ui.project.role[lang]}</dt>
              <dd className="mt-2 text-sm text-ink-700 dark:text-ink-200">{project.role[lang]}</dd>
            </div>
            <div>
              <dt className="eyebrow">{ui.project.year[lang]}</dt>
              <dd className="mt-2 text-sm text-ink-700 dark:text-ink-200">{project.year}</dd>
            </div>
            <div>
              <dt className="eyebrow">{ui.project.stack[lang]}</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          {(project.url || project.repo) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900"
                >
                  {ui.project.visit[lang]}
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-medium text-ink-800 transition hover:border-ink-400 dark:border-white/15 dark:text-ink-100"
                >
                  {ui.project.code[lang]}
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="container-page">
        {/* ── Context ────────────────────────────────────────────────────── */}
        <Block label={ui.project.context[lang]}>
          <p className="max-w-prose text-lg leading-relaxed text-ink-700 dark:text-ink-200">{project.summary[lang]}</p>
          <p className="prose-body mt-5 max-w-prose">{project.context[lang]}</p>
        </Block>

        {/* ── Product screens ────────────────────────────────────────────── */}
        {project.screenshots && project.screenshots.length > 0 && (
          <Block label={ui.project.screens[lang]}>
            <Gallery shots={project.screenshots} lang={lang} />
          </Block>
        )}

        {/* ── Challenges ─────────────────────────────────────────────────── */}
        <Block label={ui.project.challenges[lang]}>
          <ul className="max-w-prose space-y-4">
            {project.challenges[lang].map((c, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-0.5 select-none font-mono text-xs text-ink-400 dark:text-ink-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="prose-body">{c}</span>
              </li>
            ))}
          </ul>
        </Block>

        {/* ── Approach ───────────────────────────────────────────────────── */}
        <Block label={ui.project.approach[lang]}>
          <ol className="space-y-8">
            {project.approach.map((step, i) => (
              <Reveal key={i} delay={i * 60}>
                <li className="relative border-l border-ink-200 pl-6 dark:border-white/10">
                  <span className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-ink-300 ring-4 ring-white dark:bg-ink-600 dark:ring-ink-950`} />
                  <h3 className="text-lg font-semibold tracking-tight text-ink-900 dark:text-white">{step.title[lang]}</h3>
                  <p className="prose-body mt-2 max-w-prose">{step.body[lang]}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Block>

        {/* ── Architecture ───────────────────────────────────────────────── */}
        <Block label={ui.project.architecture[lang]}>
          <div className="overflow-hidden rounded-2xl border border-ink-200/80 dark:border-white/10">
            {project.architecture.map((row, i) => (
              <div
                key={i}
                className="grid gap-1 border-b border-ink-200/70 p-5 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6 dark:border-white/10"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">{row.layer[lang]}</p>
                <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-200">{row.detail[lang]}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* ── Stack ──────────────────────────────────────────────────────── */}
        <Block label={ui.project.stack[lang]}>
          <div className="grid gap-6 sm:grid-cols-3">
            {project.stack.map((g) => (
              <div key={g.group.pt}>
                <p className="text-sm font-medium text-ink-900 dark:text-white">{g.group[lang]}</p>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-ink-600 dark:text-ink-300">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Block>

        {/* ── Results ────────────────────────────────────────────────────── */}
        <Block label={ui.project.results[lang]}>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-ink-200/80 bg-ink-200/70 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10">
            {project.results.map((r, i) => (
              <div key={i} className="bg-white px-5 py-7 dark:bg-ink-950">
                <dt className="text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">{r.value}</dt>
                <dd className="mt-1.5 text-sm leading-snug text-ink-500 dark:text-ink-400">{r.label[lang]}</dd>
              </div>
            ))}
          </dl>
        </Block>

        {/* ── Learnings ──────────────────────────────────────────────────── */}
        <Block label={ui.project.learnings[lang]}>
          <ul className="max-w-prose space-y-5">
            {project.learnings[lang].map((l, i) => (
              <li key={i} className="border-l-2 border-accent/70 pl-5 text-[17px] leading-relaxed text-ink-700 dark:text-ink-200">
                {l}
              </li>
            ))}
          </ul>
        </Block>
      </div>

      {/* ── Next project ─────────────────────────────────────────────────── */}
      <nav className="container-page pb-4">
        <Link
          href={to(`/projects/${next.slug}`, lang)}
          className="card group flex items-center justify-between gap-6 p-8 hover:border-ink-300 dark:hover:border-white/20"
        >
          <span>
            <span className="eyebrow">{ui.project.next[lang]}</span>
            <span className="mt-2 block text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">{next.name}</span>
          </span>
          <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-ink-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </nav>
    </article>
  );
}
