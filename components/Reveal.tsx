'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Fade-up quando o bloco entra na viewport.
 *
 * O conteúdo é sempre visível por padrão; quem o esconde é a regra
 * `.js .reveal:not(.reveal-in)` em globals.css. Isso garante que, sem
 * JavaScript, nada some. E se o IntersectionObserver não disparar (aba em
 * segundo plano, navegador restritivo), um temporizador revela mesmo assim.
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

    // Rede de segurança: nada fica invisível para sempre.
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
