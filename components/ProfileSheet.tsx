import { education, experience, profile, type Lang } from '@/content/site';
import { ui } from '@/content/ui';

/** Compact profile sheet: current role, location, education and focus. */
export function ProfileSheet({ lang }: { lang: Lang }) {
  return (
    <dl className="divide-y divide-ink-200/70 border-y border-ink-200/70 text-sm dark:divide-white/10 dark:border-white/10">
      <div className="py-4">
        <dt className="eyebrow">{ui.sheet.now[lang]}</dt>
        <dd className="mt-1.5 font-medium text-ink-900 dark:text-white">{experience[0].role[lang]}</dd>
        <dd className="text-ink-500 dark:text-ink-400">{experience[0].company}</dd>
      </div>
      <div className="py-4">
        <dt className="eyebrow">{ui.sheet.base[lang]}</dt>
        <dd className="mt-1.5 font-medium text-ink-900 dark:text-white">{profile.location[lang]}</dd>
      </div>
      <div className="py-4">
        <dt className="eyebrow">{ui.sheet.education[lang]}</dt>
        {education.map((e) => (
          <dd key={e.school} className="mt-1.5 text-ink-700 dark:text-ink-200">
            {e.course[lang]} <span className="text-ink-400 dark:text-ink-500">· {e.school}</span>
          </dd>
        ))}
      </div>
      <div className="py-4">
        <dt className="eyebrow">{ui.sheet.focus[lang]}</dt>
        <dd className="mt-1.5 text-ink-700 dark:text-ink-200">{profile.specialties[lang]}</dd>
      </div>
    </dl>
  );
}
