import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { db, schema } from '@repo/database/eosfin'

export const projectsRouter = router({
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1, 'Título é obrigatório'),
        description: z.string().min(1, 'Descrição é obrigatória'),
        clientName: z.string().min(1, 'Nome do cliente é obrigatório'),
        value: z.number().positive('Valor deve ser positivo'),
        category: z.string().min(1, 'Categoria é obrigatória'),
      })
    )
    .mutation(async function ({ input }) {
      const project = await db.insert(schema.projects).values(input).returning()
      return project[0]
    }),
})
