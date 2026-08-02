import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pango0.github.io',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});
