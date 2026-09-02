import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LANGS, projects } from '@/content/site';
import { ui } from '@/content/ui';
import { isLang } from '@/lib/i18n';
import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { ProjectRow } from '@/components/ProjectRow';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = isLang(lang) ? lang : 'pt';
  return { title: ui.project.all[l], description: ui.project.allSub[l] };
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <Section eyebrow={ui.sections.portfolio[lang]} title={ui.project.all[lang]} subtitle={ui.project.allSub[lang]} className="pt-8">
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <ProjectRow project={p} lang={lang} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
