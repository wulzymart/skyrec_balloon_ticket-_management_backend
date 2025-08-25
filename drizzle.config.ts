import {defineConfig} from 'drizzle-kit'

export default defineConfig({
  out: './src/db/migrations',
  schema: ['./src/db/schema/auth-schema.ts', './src/db/schema/business-schema.ts'],
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  casing: 'snake_case',
});