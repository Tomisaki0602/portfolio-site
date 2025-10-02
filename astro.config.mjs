import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/server'; // SSR 用

export default defineConfig({
  output: 'server',      // API Routes を有効化
  adapter: vercel(),
});
