/** @type {import('next').NextConfig} */

// The site is served from the root of robsonx4.github.io, so NEXT_PUBLIC_BASE_PATH
// stays empty. Set it only if the site is ever served from a subdirectory.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
