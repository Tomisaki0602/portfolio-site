import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // ← /server は不要

export default defineConfig({
  output: 'server', // SSR/API Routes 有効化
  adapter: vercel(),
});
