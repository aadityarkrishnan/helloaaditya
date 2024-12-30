// import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind";
// import mdx from "@astrojs/mdx";
// import sitemap from "@astrojs/sitemap";
// import icon from "astro-icon";

// // https://astro.build/config
// export default defineConfig({
//   site: "https://astroship.web3templates.com",
//   integrations: [tailwind(), mdx(), sitemap(), icon()],
//   devToolbar: {
//     enabled: false,
//   },
// });

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://aadityarkrishnan.github.io',
  base: '/helloaaditya',
  integrations: [tailwind(), mdx(), sitemap()],
  vite: {
    // Add base to vite config
    base: '/helloaaditya/'
  }
});