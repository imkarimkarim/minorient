import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";
import tailwind from "@astrojs/tailwind";
import { manifestObj } from "./manifest";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    AstroPWA({
      manifest: {
        ...manifestObj,
      },
    }),
  ],
  site: "https://imkarimkarim.github.io",
  base: "/minorient",
});
