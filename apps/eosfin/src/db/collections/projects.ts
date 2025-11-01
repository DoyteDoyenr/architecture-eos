import { electricCollectionOptions } from '@tanstack/electric-db-collection'
import { type Collection, createCollection } from '@tanstack/react-db'
import { z } from 'zod'

export const projectSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  clientName: z.string(),
  value: z.number(),
  category: z.string(),
  userId: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Project = z.infer<typeof projectSchema>

export const projectsCollection: Collection<Project> = createCollection(
  electricCollectionOptions({
    id: 'projects-eosfin',
    shapeOptions: {
      url: 'http://localhost:3010/v1/shape',
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
