import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

export default defineConfig({
  site: 'https://aadityarkrishnan.github.io/helloaaditya',
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
    icon()
  ]
});