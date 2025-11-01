import {
  pgTable,
  text,
  timestamp,
  uuid,
  doublePrecision,
} from 'drizzle-orm/pg-core'
import { user } from './auth'

export const projects = pgTable('project', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  clientName: text('client_name').notNull(),
  value: doublePrecision('value').notNull(),
  category: text('category').notNull(),
  userId: text('user_id').references(() => user.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})
