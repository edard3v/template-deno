import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { Role } from "../enums/Role.ts";

export const accounts = sqliteTable("accounts", {
  id: text("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  role: text("role", { enum: [Role.admin, Role.client, Role.seller] }).default(Role.client),
  email: text("email").unique().notNull(),
  name: text("name"),
  tel: integer("tel"),
  country: integer("country"), // recuerda validar con el enum Country
  img: text("img"),
  password: text("password").notNull(),
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),

  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
  updateAt: text("updated_at").$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});

export type InsertAccounts = typeof accounts.$inferInsert;
export type SelectAccounts = typeof accounts.$inferSelect;
