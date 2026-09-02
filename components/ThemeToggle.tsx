'use client';

import { useEffect, useState } from 'react';

type Mode = 'light' | 'dark';

export function ThemeToggle({ label }: { label: string }) {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    setMode(root.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next: Mode = root.classList.contains('dark') ? 'light' : 'dark';
    root.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode or blocked storage: the choice simply is not persisted */
    }
    setMode(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-600 transition hover:border-ink-300 hover:text-ink-900 dark:border-white/10 dark:text-ink-300 dark:hover:border-white/25 dark:hover:text-white"
    >
      {/* no state on first paint, so server and client markup match */}
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        {mode === 'dark' ? (
          <circle cx="12" cy="12" r="4.2">
            <animate attributeName="r" from="3.4" to="4.2" dur=".25s" fill="freeze" />
          </circle>
        ) : (
          <path d="M20 14.2A8.2 8.2 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.2Z" strokeLinejoin="round" />
        )}
        {mode === 'dark' && (
          <g strokeLinecap="round">
            <path d="M12 2.6v2M12 19.4v2M2.6 12h2M19.4 12h2M5.3 5.3l1.5 1.5M17.2 17.2l1.5 1.5M18.7 5.3l-1.5 1.5M6.8 17.2l-1.5 1.5" />
          </g>
        )}
      </svg>
    </button>
  );
}

/**
 * Runs before first paint:
 *  - applies the saved theme, avoiding a flash of light background;
 *  - marks <html class="js">, which is what allows the CSS to hide the
 *    reveal blocks. Without JavaScript nothing is hidden.
 */
export const themeScript = `
(function(){
  var e = document.documentElement;
  e.classList.add('js');
  try{
    var s = localStorage.getItem('theme');
    var d = s ? s === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    e.classList.toggle('dark', d);
  }catch(err){}
})();
`;
