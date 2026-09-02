import { profile, type Lang, type SkillGroup, type SkillIcon } from '@/content/site';
import { ui } from '@/content/ui';
import { Reveal } from '@/components/Reveal';

const paths: Record<SkillIcon, React.ReactNode> = {
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  cloud: <path d="M17.5 19a4.5 4.5 0 0 0 .4-9A6 6 0 0 0 6.3 8.5 4.5 4.5 0 0 0 6.5 19z" />,
  activity: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 2 8l10 5 10-5z" />
      <path d="M2 12l10 5 10-5M2 16l10 5 10-5" />
    </>
  ),
};

function Icon({ name, className = 'h-5 w-5' }: { name: SkillIcon; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[name]}
    </svg>
  );
}

function Featured({ group, lang }: { group: SkillGroup; lang: Lang }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand/30 bg-white/60 p-6 backdrop-blur sm:p-8 dark:border-brand/30 dark:bg-white/[0.03]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/15 blur-3xl dark:bg-brand/20"
      />
      <div className="relative grid gap-6 lg:grid-cols-[16rem_1fr] lg:items-center lg:gap-10">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30">
            <Icon name={group.icon} className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep dark:text-brand-soft">
              {ui.sections.primaryStack[lang]}
            </p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">{group.group[lang]}</h3>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2.5">
          {group.items.map((it) => (
            <li
              key={it}
              className="rounded-full border border-brand/30 bg-white px-3.5 py-1.5 text-sm font-medium text-ink-800 dark:border-brand/30 dark:bg-brand/10 dark:text-white"
            >
              {it}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Card({ group, lang }: { group: SkillGroup; lang: Lang }) {
  return (
    <div className="card flex h-full flex-col p-6 hover:border-ink-300 dark:hover:border-white/20">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-100 text-ink-700 dark:bg-white/[0.06] dark:text-ink-200">
          <Icon name={group.icon} />
        </span>
        <h3 className="font-semibold tracking-tight text-ink-900 dark:text-white">{group.group[lang]}</h3>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.items.map((it) => (
          <li key={it} className="chip">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Stack as cards: the primary group takes the full first row, the rest form the grid. */
export function StackGrid({ lang }: { lang: Lang }) {
  const primary = profile.skills.find((g) => g.primary);
  const others = profile.skills.filter((g) => !g.primary);
  return (
    <div className="space-y-4">
      {primary && (
        <Reveal>
          <Featured group={primary} lang={lang} />
        </Reveal>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((g, i) => (
          <Reveal key={g.group.pt} delay={i * 60} className="h-full">
            <Card group={g} lang={lang} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
