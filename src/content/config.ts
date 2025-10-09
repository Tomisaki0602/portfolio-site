import { defineCollection, z } from 'astro:content';

// News Collection の定義
const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    status: z.enum(['draft','published']),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
};