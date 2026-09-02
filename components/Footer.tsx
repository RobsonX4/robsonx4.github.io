import Link from 'next/link';
import type { Lang } from '@/content/site';
import { profile } from '@/content/site';
import { ui } from '@/content/ui';
import { to } from '@/lib/i18n';

const iconClass = 'h-5 w-5';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}

const socialClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition hover:border-ink-400 hover:text-ink-900 dark:border-white/15 dark:text-ink-300 dark:hover:border-white/35 dark:hover:text-white';

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="mt-12 border-t border-ink-200/70 py-12 dark:border-white/10">
      <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-ink-900 dark:text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{profile.role[lang]}</p>
          <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{profile.location[lang]}</p>

          <ul className="mt-5 flex items-center gap-3">
            <li>
              <a href={`mailto:${profile.email}`} className={socialClass} aria-label={`${ui.footer.email[lang]}: ${profile.email}`} title={profile.email}>
                <MailIcon />
              </a>
            </li>
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer noopener" className={socialClass} aria-label="LinkedIn" title="LinkedIn">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noreferrer noopener" className={socialClass} aria-label="GitHub" title="GitHub">
                <GitHubIcon />
              </a>
            </li>
          </ul>
          <a href={`mailto:${profile.email}`} className="link-underline mt-3 inline-block text-sm text-ink-700 dark:text-ink-200">
            {profile.email}
          </a>
        </div>

        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href={to('/projetos', lang)} className="link-underline text-ink-600 dark:text-ink-300">
              {ui.nav.projects[lang]}
            </Link>
            <Link href={to('/sobre', lang)} className="link-underline text-ink-600 dark:text-ink-300">
              {ui.nav.about[lang]}
            </Link>
          </div>
          <p className="text-xs text-ink-400 dark:text-ink-500">
            © {new Date().getFullYear()} {profile.name}. {ui.footer.rights[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
}
