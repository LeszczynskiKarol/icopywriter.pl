import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.icopywriter.pl',
  compressHTML: true,
  build: { format: 'directory' },
  vite: {
    build: { cssMinify: true }
  }
});
