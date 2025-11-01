import { pgTable, text, timestamp, uuid, doublePrecision } from "drizzle-orm/pg-core";

export const products = pgTable("Product", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  price: doublePrecision("price").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow().$onUpdate(() => new Date()),
});
