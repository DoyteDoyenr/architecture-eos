import { defineConfig } from 'drizzle-kit'
import { env } from '@repo/environment/eosfin'

export default defineConfig({
  schema: './src/eosfin/schema/index.ts',
  out: './drizzle/eosfin',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
