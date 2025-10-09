import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'; // MDX使いたい場合（なくてもOK）

export default defineConfig({
  integrations: [mdx()],
});
