import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LANGS, certifications, education, experience, profile } from '@/content/site';
import { BASE_PATH } from '@/lib/config';
import { ui } from '@/content/ui';
import { isLang } from '@/lib/i18n';
import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { Highlights } from '@/components/Highlights';
import { ProfileSheet } from '@/components/ProfileSheet';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = isLang(lang) ? lang : 'pt';
  return { title: ui.nav.about[l], description: profile.tagline[l] };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <>
      {/* ── Bio + profile sheet ──────────────────────────────────────────── */}
      <Section eyebrow={profile.role[lang]} title={ui.sections.about[lang]} className="pt-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
          <div className="max-w-prose space-y-5">
            {profile.bio[lang].map((p, i) => (
              <p key={i} className="prose-body">
                {p}
              </p>
            ))}

          </div>

          <aside className="space-y-8 lg:pt-2">
            <Reveal delay={100}>
              <ProfileSheet lang={lang} />
            </Reveal>
            <Reveal delay={160}>
              <Highlights lang={lang} className="sm:grid-cols-2" />
            </Reveal>
          </aside>
        </div>
      </Section>

      {/* ── Experience ───────────────────────────────────────────────────── */}
      <Section
        eyebrow={ui.sections.career[lang]}
        title={ui.sections.experience[lang]}
        subtitle={ui.sections.experienceSub[lang]}
      >
        <ol className="border-l border-ink-200 dark:border-white/10">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 50}>
              <li className="relative pb-10 pl-6 sm:pl-8">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-ink-300 ring-4 ring-white dark:bg-ink-600 dark:ring-ink-950" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight text-ink-900 dark:text-white">{job.role[lang]}</h3>
                  <span className="text-ink-400 dark:text-ink-500">·</span>
                  <span className="text-sm font-medium text-ink-700 dark:text-ink-200">{job.company}</span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-400 dark:text-ink-500">
                  {job.period[lang]}
                </p>
                <p className="prose-body mt-3 max-w-prose">{job.summary[lang]}</p>
                {job.tech && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── Education and certification ─────────────────────────────────── */}
      <Section eyebrow={ui.sections.learning[lang]} title={ui.sections.education[lang]}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 80} className="h-full">
              <li className="card flex h-full flex-col p-6">
                <div className="flex h-20 items-center rounded-xl bg-white px-5 ring-1 ring-ink-200/70 dark:ring-white/10">
                  <img
                    src={`${BASE_PATH}${e.logo}`}
                    alt={e.logoAlt}
                    className="max-h-12 w-auto max-w-[11rem] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="mt-5 font-medium leading-snug text-ink-900 dark:text-white">{e.course[lang]}</p>
                <p className="mt-auto pt-2 font-mono text-xs uppercase tracking-wider text-ink-400 dark:text-ink-500">{e.year}</p>
              </li>
            </Reveal>
          ))}
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={(education.length + i) * 80} className="h-full">
              <li className="card flex h-full flex-col p-6">
                <div className="flex h-20 items-center rounded-xl bg-white px-5 ring-1 ring-ink-200/70 dark:ring-white/10">
                  <img
                    src={`${BASE_PATH}${c.badge}`}
                    alt=""
                    width={340}
                    height={340}
                    className="h-16 w-16"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="mt-5 font-medium leading-snug text-ink-900 dark:text-white">{c.name}</p>
                <p className="mt-auto pt-2 font-mono text-xs uppercase tracking-wider text-ink-400 dark:text-ink-500">{c.issuer}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
