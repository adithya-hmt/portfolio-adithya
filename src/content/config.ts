import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    tech: z.array(z.string()),
    status: z.string(),
    difficulty: z.string(),
    role: z.string().optional(),
    order: z.number().optional(),
    problem: z.string(),
    solution: z.string(),
    context: z.string().optional(),
  }),
});

const build = defineCollection({
  type: "content",
  schema: z.object({
    date: z.date(),
    title: z.string(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
  }),
});

const lab = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.string(),
    stack: z.array(z.string()),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    summary: z.string(),
  }),
});

export const collections = { projects, build, lab, notes };
