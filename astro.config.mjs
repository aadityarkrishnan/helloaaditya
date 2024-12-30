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
  build: {
    assets: '_astro'
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    icon()
  ],
  vite: {
    base: '/helloaaditya/',  // Add this line with trailing slash
    build: {
      assetsInlineLimit: 0,  // Add this to prevent inlining of assets
      cssCodeSplit: false,   // Add this to bundle all CSS into one file
      assetsPrefix: '/helloaaditya'
    }
  }
});