import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro'
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), AstroPWA({
    
  })],
  site: 'https://imkarimkarim.github.io',
  base: '/minorient',
});