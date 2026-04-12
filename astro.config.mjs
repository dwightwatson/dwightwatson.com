import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.dwightwatson.com",
  trailingSlash: "never",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Atkinson Hyperlegible",
      cssVariable: "--font-sans",
      weights: [400, 700],
    },
    {
      provider: fontProviders.fontsource(),
      name: "League Spartan",
      cssVariable: "--font-serif",
      weights: [400],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
});
