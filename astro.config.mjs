import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  adapter: netlify({ imageCDN: false }),
  integrations: [tailwind()],
});