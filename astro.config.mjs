import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // ← これだけでOK

export default defineConfig({
  output: 'server', // SSR 前提
  adapter: vercel(),
});
