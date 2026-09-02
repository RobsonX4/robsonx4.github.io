'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Lang } from '@/content/site';
import { profile } from '@/content/site';
import { ui } from '@/content/ui';
import { otherLang, swapLangInPath, to } from '@/lib/i18n';
import { ThemeToggle } from './ThemeToggle';

export function Nav({ lang }: { lang: Lang }) {
  const pathname = usePathname() || `/${lang}`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: to('/', lang), label: ui.nav.home[lang] },
    { href: to('/projects', lang), label: ui.nav.projects[lang] },
    { href: to('/about', lang), label: ui.nav.about[lang] },
  ];

  const isActive = (href: string) =>
    href === to('/', lang) ? pathname === href || pathname === `${href}/` : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? 'border-b border-ink-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-ink-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label={ui.nav.home[lang]}>
        <Link href={to('/', lang)} className="group flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink-900 text-sm font-bold text-brand transition group-hover:bg-brand group-hover:text-white dark:bg-brand dark:text-white">
            {profile.initials}
          </span>
          <span className="text-ink-900 dark:text-white">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                isActive(l.href)
                  ? 'bg-ink-100 font-medium text-ink-900 dark:bg-white/10 dark:text-white'
                  : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={swapLangInPath(pathname, otherLang(lang))}
            hrefLang={otherLang(lang)}
            className="rounded-full border border-ink-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-600 transition hover:border-ink-300 hover:text-ink-900 dark:border-white/10 dark:text-ink-300 dark:hover:border-white/25 dark:hover:text-white"
            title={ui.lang.switch[lang]}
          >
            {otherLang(lang)}
          </Link>
          <ThemeToggle label={ui.theme.toggle[lang]} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={ui.nav.home[lang]}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-600 md:hidden dark:border-white/10 dark:text-ink-300"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-200/70 bg-white md:hidden dark:border-white/10 dark:bg-ink-950">
          <div className="container-page flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-3 text-sm text-ink-700 hover:bg-ink-50 dark:text-ink-200 dark:hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg px-2 py-3 text-sm text-ink-700 hover:bg-ink-50 dark:text-ink-200 dark:hover:bg-white/5"
            >
              {ui.nav.contact[lang]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
