import type { Lang, Screenshot } from '@/content/site';
import { BASE_PATH } from '@/lib/config';

/** Product screens: wide shots in a two-column grid, phone shots in a row of frames. */
export function Gallery({ shots, lang }: { shots: Screenshot[]; lang: Lang }) {
  const wide = shots.filter((s) => s.kind !== 'phone');
  const phone = shots.filter((s) => s.kind === 'phone');
  return (
    <div className="space-y-6">
      {wide.length > 0 && (
        <ul className="grid gap-4 sm:grid-cols-2">
          {wide.map((s, i) => (
            <li
              key={s.src}
              className={`overflow-hidden rounded-2xl border border-ink-200/80 bg-ink-100 dark:border-white/10 dark:bg-white/[0.04] ${
                wide.length % 2 === 1 && i === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <img src={`${BASE_PATH}${s.src}`} alt={s.alt[lang]} loading="lazy" decoding="async" className="block h-auto w-full" />
            </li>
          ))}
        </ul>
      )}
      {phone.length > 0 && (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {phone.map((s) => (
            <li key={s.src} className="overflow-hidden rounded-[1.75rem] border border-ink-200/80 bg-ink-100 p-1.5 dark:border-white/10 dark:bg-white/[0.04]">
              <img src={`${BASE_PATH}${s.src}`} alt={s.alt[lang]} loading="lazy" decoding="async" className="block h-auto w-full rounded-[1.4rem]" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
