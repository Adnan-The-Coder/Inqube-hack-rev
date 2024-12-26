import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig = {};
async function setup() {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
}
setup();

export default nextConfig;