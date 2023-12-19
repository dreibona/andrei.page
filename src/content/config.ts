import { z, defineCollection } from 'astro:content'

const collection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      contentTitle: z.string(),
      author: z.string(),
      pubDate: z.date(),
      description: z.string(),
      cover: image().refine((img) => img.width >= 1, {
        message: 'Cover image must be at least 1 pixels wide!'
      }),
      coverAlt: z.string(),
      type: z.string(),
      robot: z.boolean(),
      draft: z.boolean(),
      tags: z.array(z.string()),
      keywords: z.string()
    })
})

export const collections = {
  blog: collection,
  work: collection
}
