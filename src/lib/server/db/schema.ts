import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { user } from './auth.schema';
import { type InferSelectModel } from 'drizzle-orm';

export const task = sqliteTable('task', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    title: text('title').notNull(),
    priority: integer('priority').notNull().default(1)
});

export const flips = sqliteTable('flips', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    headsOrTails: integer("heads_or_tails", { mode: "boolean" })
        .default(false)
        .notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
        .$defaultFn(() => new Date()).notNull(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
})

export type Flip = InferSelectModel<typeof flips>;
export type NewFlip = typeof flips.$inferInsert;

export * from './auth.schema';
