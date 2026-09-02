/** Public site URL, used in canonical links, the sitemap and JSON-LD. */
export const SITE_URL = (process.env.SITE_URL || 'https://robsonx4.github.io').replace(/\/$/, '');

/** Path prefix when served from a subdirectory. Empty for a root domain. */
export const BASE_PATH = process.env.BASE_PATH || '';

/** Absolute URL for a site path. */
export const absolute = (path) => `${SITE_URL}${BASE_PATH}${path}`;

/** Path to a static asset, honouring the base path. */
export const asset = (path) => `${BASE_PATH}${path}`;
