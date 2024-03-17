import { defineCollection, z } from "astro:content";

const clipsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    sortOrder: z.number(),
    date: z.date(),
    description: z.string(),
    agency: z.string().optional(),
    videoUrl: z.string().url(),
    img: z.string(),
    highlightOnHomescreen: z.boolean().optional()
  }),
});

export const collections = {
  clips: clipsCollection,
};
