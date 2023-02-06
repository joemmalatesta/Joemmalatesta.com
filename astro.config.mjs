import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://joemmalatesta.com',
  integrations: [mdx(), sitemap(), tailwind(), svelte(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      }
    })
  ]
});