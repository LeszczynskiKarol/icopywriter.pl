import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(""),
    date: z.string().optional().default("2024-01-01"),
    updated: z.string().optional(),
    author: z.string().optional().default("Karol Leszczyński"),
    category: z.string().optional().default("Copywriting"),
    tags: z.array(z.string()).optional().default([]),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
