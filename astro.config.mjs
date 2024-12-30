import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: 'https://aadityarkrishnan.github.io',
  base: '/helloaaditya',
  devToolbar: {
    enabled: false
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    icon()
  ],
  vite: {
    build: {
      assetsPrefix: '/helloaaditya'
    }
  }
});