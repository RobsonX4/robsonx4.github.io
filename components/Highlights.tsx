import { profile, type Lang } from '@/content/site';

/** Faixa de big numbers. */
export function Highlights({ lang, className = '' }: { lang: Lang; className?: string }) {
  return (
    <dl
      className={`grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-200/80 bg-ink-200/70 dark:border-white/10 dark:bg-white/10 ${className}`}
    >
      {profile.stats.map((s) => (
        <div key={s.label.pt} className="bg-white px-5 py-6 dark:bg-ink-950">
          <dt className="text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">{s.value}</dt>
          <dd className="mt-1 text-sm text-ink-500 dark:text-ink-400">{s.label[lang]}</dd>
        </div>
      ))}
    </dl>
  );
}
