import { z, defineCollection } from 'astro:content'

const collection = defineCollection({
  schema: z.object({
    title: z.string(),
    contentTitle: z.string(),
    author: z.string(),
    pubDate: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    type: z.string(),
    robot: z.boolean(),
    draft: z.boolean(),
    tags: z.array(z.string()),
    keywords: z.array(z.string())
  })
})

export const collections = {
  blog: collection,
  work: collection
}
