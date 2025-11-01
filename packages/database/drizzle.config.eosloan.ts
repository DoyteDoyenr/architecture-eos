import { defineConfig } from 'drizzle-kit'
import { env } from '@repo/environment/eosloan'

export default defineConfig({
  schema: './src/eosloan/schema/index.ts',
  out: './drizzle/eosloan',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
