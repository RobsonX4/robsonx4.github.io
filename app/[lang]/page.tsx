import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LANGS, profile, projects } from '@/content/site';
import { ui } from '@/content/ui';
import { isLang, to } from '@/lib/i18n';
import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { Highlights } from '@/components/Highlights';
import { StackGrid } from '@/components/StackGrid';
import { CertificationBadge } from '@/components/CertificationBadge';
import { ProfileSheet } from '@/components/ProfileSheet';
import { ProjectCard } from '@/components/ProjectCard';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
        <div className="container-page relative pb-10 pt-14 sm:pb-16 sm:pt-24 lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-center lg:gap-16">
          <div>
          <Reveal delay={60}>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl dark:text-white">
              {profile.name}
              <span className="block text-ink-400 dark:text-ink-500">{profile.role[lang]}</span>
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-500 sm:text-sm dark:text-ink-400">
              {profile.specialties[lang]}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-600 sm:text-xl dark:text-ink-300">
              {profile.tagline[lang]}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href={to('/projects', lang)}
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
              >
                {ui.hero.cta[lang]}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <span className="ml-1 text-sm text-ink-400 dark:text-ink-500">{profile.location[lang]}</span>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <Highlights lang={lang} className="mt-14 max-w-md sm:grid-cols-2" />
          </Reveal>
          </div>

          <Reveal delay={300} className="mt-14 lg:mt-0">
            <CertificationBadge lang={lang} />
          </Reveal>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <Section id="about" eyebrow={ui.nav.about[lang]} title={ui.sections.about[lang]}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
          <div className="max-w-prose space-y-5">
            {profile.bio[lang].slice(0, 2).map((p, i) => (
              <p key={i} className="prose-body">
                {p}
              </p>
            ))}
            <Link href={to('/about', lang)} className="link-underline inline-block text-sm font-medium text-ink-900 dark:text-white">
              {ui.nav.about[lang]} →
            </Link>
          </div>

          <Reveal delay={120}>
            <ProfileSheet lang={lang} />
          </Reveal>
        </div>
      </Section>

      {/* ── Stack ────────────────────────────────────────────────────────── */}
      <Section
        id="stack"
        eyebrow={ui.sections.technologies[lang]}
        title={ui.sections.skills[lang]}
        subtitle={ui.sections.skillsSub[lang]}
      >
        <StackGrid lang={lang} />
      </Section>

      {/* ── Selected work ────────────────────────────────────────────────── */}
      <Section
        id="projects"
        eyebrow={ui.sections.portfolio[lang]}
        title={ui.sections.selectedWork[lang]}
        subtitle={ui.sections.selectedWorkSub[lang]}
      >
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="h-full">
              <ProjectCard project={p} lang={lang} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
