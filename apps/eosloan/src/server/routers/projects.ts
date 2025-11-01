import { db, schema } from '@repo/database/eosloan'
import { z } from 'zod'

import { publicProcedure, router } from '../trpc'

export const projectsRouter = router({
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1, 'Title is required'),
        description: z.string().min(1, 'Description is required'),
        clientName: z.string().min(1, 'Client name is required'),
        value: z.number().positive('Value must be positive'),
      })
    )
    .mutation(async function ({ input }) {
      const project = await db.insert(schema.projects).values(input).returning()
      return project[0]
    }),
})
