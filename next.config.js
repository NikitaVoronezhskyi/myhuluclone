/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.pinimg.com", "press.hulu.com", `image.tmdb.org`],
  },
  i18n: {
    locales: [`en-US`, `es-ES`],
    defaultLocale: `en-US`,
  }
};

module.exports = nextConfig;
