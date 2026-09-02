/**
 * Everything this site needs at runtime. Three behaviours, no dependencies.
 * The theme itself is applied by an inline script in <head>, before first
 * paint, so there is no flash. This file only handles interaction.
 */
(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const themeButton = document.querySelector('[data-theme-toggle]');

  /* ── Header shadow on scroll ─────────────────────────────────────────── */
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Mobile menu ─────────────────────────────────────────────────────── */
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menu.hidden = open;
    });
  }

  /* ── Theme toggle ────────────────────────────────────────────────────── */
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const dark = document.documentElement.classList.toggle('dark');
      try {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
      } catch {
        /* private mode or blocked storage: the choice simply is not persisted */
      }
    });
  }

  /* ── Reveal on scroll ────────────────────────────────────────────────── */
  const blocks = document.querySelectorAll('.reveal');
  if (!blocks.length) return;

  const showAll = () => blocks.forEach((el) => el.classList.add('reveal-in'));

  if (!('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('reveal-in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  );
  blocks.forEach((el) => observer.observe(el));

  // Safety net: nothing stays invisible forever.
  setTimeout(showAll, 1500);
})();
