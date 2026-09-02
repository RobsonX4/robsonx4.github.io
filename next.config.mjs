/** @type {import('next').NextConfig} */

// O site é publicado na raiz de robsonx4.github.io, então NEXT_PUBLIC_BASE_PATH
// fica vazio. Só preencha se um dia for servido em subdiretório.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
