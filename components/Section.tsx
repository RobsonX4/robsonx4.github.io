import type { ReactNode } from 'react';

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`container-page scroll-mt-24 py-12 sm:py-16 ${className}`}>
      {(eyebrow || title) && (
        <header className="mb-8 max-w-prose sm:mb-10">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">{title}</h2>
          )}
          {subtitle && <p className="prose-body mt-4">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
