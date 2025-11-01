import { headers } from 'next/headers'

import { auth } from '@/lib/auth'
import { appRouter } from '@/server/router'

import { createCallerFactory } from './trpc'

const createCaller = createCallerFactory(appRouter)

async function getServerContext() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session?.session.userId) {
    return {}
  }

  return {
    userId: session.session.userId,
    user: session.user,
  }
}

export const serverClient = function (ctx?: {
  userId?: string
  user?: unknown
}) {
  return createCaller(ctx || {})
}

export const serverClientWithAuth = async function () {
  const context = await getServerContext()
  return createCaller(context)
}

export type ServerClient = ReturnType<typeof serverClient>
