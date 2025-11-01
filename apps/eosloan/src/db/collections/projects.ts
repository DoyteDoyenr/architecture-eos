import { electricCollectionOptions } from '@tanstack/electric-db-collection'
import { type Collection, createCollection } from '@tanstack/react-db'
import { z } from 'zod'

export const projectSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  clientName: z.string(),
  value: z.number(),
  userId: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Project = z.infer<typeof projectSchema>

export const projectsCollection: Collection<Project> = createCollection(
  electricCollectionOptions({
    id: 'projects-eosloan',
    shapeOptions: {
      url: 'http://localhost:3011/v1/shape',
      params: {
        table: 'project',
      },
    },
    getKey: function (item) {
      return item.id
    },
    schema: projectSchema,
  })
)
