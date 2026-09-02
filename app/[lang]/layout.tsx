import type { Metadata } from 'next';
import { LANGS, profile, type Lang } from '@/content/site';
import { isLang } from '@/lib/i18n';
import { absolute, ogImage, SITE_URL } from '@/lib/config';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { themeScript } from '@/components/ThemeToggle';
import '../globals.css';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l: Lang = isLang(lang) ? lang : 'pt';
  const title = `${profile.name} — ${profile.role[l]}`;
  const description = profile.tagline[l];

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: `%s · ${profile.name}` },
    description,
    alternates: {
      canonical: absolute(`/${l}/`),
      languages: { 'pt-BR': absolute('/pt/'), en: absolute('/en/') },
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: absolute(`/${l}/`),
      siteName: profile.name,
      locale: l === 'pt' ? 'pt_BR' : 'en_US',
      images: [ogImage(l, title)],
    },
    twitter: { card: 'summary_large_image', title, description, images: [absolute(`/og-${l}.png`)] },
    icons: {
      icon: [
        { url: absolute('/favicon.svg'), type: 'image/svg+xml' },
        { url: absolute('/favicon-32.png'), sizes: '32x32', type: 'image/png' },
      ],
      apple: absolute('/apple-touch-icon.png'),
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const raw = await params;
  // generateStaticParams já restringe a pt/en; o fallback só evita render vazio.
  const lang: Lang = isLang(raw.lang) ? raw.lang : 'pt';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role[lang],
    worksFor: { '@type': 'Organization', name: 'Itaú Unibanco' },
    address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressCountry: 'BR' },
    knowsAbout: profile.skills.flatMap((g) => g.items),
    description: profile.tagline[lang],
    email: `mailto:${profile.email}`,
    url: absolute(`/${lang}/`),
    sameAs: [profile.links.github, profile.links.linkedin],
  };

  return (
    <html lang={lang === 'pt' ? 'pt-BR' : 'en'} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          {lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}
        </a>
        <Nav lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
