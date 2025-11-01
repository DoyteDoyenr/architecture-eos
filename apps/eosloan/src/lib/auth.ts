import { db, schema } from '@repo/database/eosloan'
import { env } from '@repo/environment/eosloan'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      ...schema,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  secret: env.JWT_SECRET,
})
