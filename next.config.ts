import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import { Images } from "lucide-react";

const nextConfig = {
    images: {
        domains: ["img.icons8.com", "images.pexels.com"],
    }
};
async function setup() {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
}
setup();

export default nextConfig;