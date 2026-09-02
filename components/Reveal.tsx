'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Fades the block up when it enters the viewport.
 *
 * Content is visible by default; the `.js .reveal:not(.reveal-in)` rule in
 * globals.css is what hides it. Without JavaScript nothing disappears, and if
 * the IntersectionObserver never fires (background tab, restrictive browser)
 * a timer reveals the block anyway.
 */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );
    io.observe(el);

    // Safety net: nothing stays invisible forever.
    const fallback = window.setTimeout(() => {
      setShown(true);
      io.disconnect();
    }, 1200);

    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={shown && delay ? { animationDelay: `${delay}ms` } : undefined}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
