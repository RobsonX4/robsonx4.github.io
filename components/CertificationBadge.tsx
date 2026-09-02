import { certifications, type Lang } from '@/content/site';
import { ui } from '@/content/ui';
import { BASE_PATH } from '@/lib/config';

/** Badge oficial da certificação com brilho suave atrás. */
export function CertificationBadge({ lang }: { lang: Lang }) {
  const cert = certifications[0];
  return (
    <div className="relative flex items-center gap-6 lg:block lg:w-60">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-4 -top-4 h-32 w-32 rounded-full bg-brand/20 blur-2xl lg:-left-8 lg:-top-8 lg:h-56 lg:w-56 dark:bg-brand/25"
      />
      <img
        src={`${BASE_PATH}${cert.badge}`}
        alt=""
        width={340}
        height={340}
        className="relative h-24 w-24 shrink-0 drop-shadow-xl lg:h-40 lg:w-40"
        decoding="async"
      />
      <div className="relative lg:mt-5">
        <p className="eyebrow">{ui.sections.certification[lang]}</p>
        <p className="mt-2 font-semibold leading-snug text-ink-900 dark:text-white">{cert.name}</p>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{cert.issuer}</p>
      </div>
    </div>
  );
}
