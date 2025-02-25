import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig = {
    images: {
        domains: ["img.icons8.com", "images.pexels.com", "images.unsplash.com", "lh3.googleusercontent.com", "assets.aceternity.com", "imgs.search.brave.com"],
    }
};
async function setup() {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
}
setup();

export default nextConfig;