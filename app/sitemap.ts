import type { MetadataRoute } from 'next';
import { LANGS, projects } from '@/content/site';
import { absolute } from '@/lib/config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ['', '/projetos', '/sobre', ...projects.map((p) => `/projetos/${p.slug}`)];

  return LANGS.flatMap((lang) =>
    routes.map((r) => ({
      url: absolute(`/${lang}${r}/`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: r === '' ? 1 : 0.7,
    })),
  );
}
