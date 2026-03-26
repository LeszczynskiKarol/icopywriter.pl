import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.icopywriter.pl",
  integrations: [sitemap()],
  compressHTML: true,
  build: { format: "directory" },
  vite: {
    build: { cssMinify: true },
  },
});
