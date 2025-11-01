import { TRPCError } from '@trpc/server'
import { headers } from 'next/headers'

import { auth } from '@/lib/auth'

import { t } from './trpc'

export const isAuthed = t.middleware(async function ({ ctx, next }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session?.session.userId) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Usuário não autenticado',
    })
  }

  return next({
    ctx: {
      ...ctx,
      userId: session.session.userId,
      user: session.user,
    },
  })
})

export const protectedProcedure = t.procedure.use(isAuthed)
