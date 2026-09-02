import Link from 'next/link';
import { ui } from '@/content/ui';

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-sm text-ink-400 dark:text-ink-500">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl dark:text-white">
        {ui.notFound.title.pt} · {ui.notFound.title.en}
      </h1>
      <p className="prose-body mt-4 max-w-prose">
        {ui.notFound.body.pt} — {ui.notFound.body.en}
      </p>
      <Link
        href="/pt/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900"
      >
        {ui.notFound.cta.pt}
      </Link>
    </div>
  );
}
