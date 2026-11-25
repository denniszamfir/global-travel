// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages as a project site: https://denniszamfir.github.io/global-travel/
  site: 'https://denniszamfir.github.io',
  base: '/global-travel',
  vite: {
    plugins: [tailwindcss()]
  }
});
