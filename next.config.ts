import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {};

async function configure() {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }

  return nextConfig;
}

export default configure();
