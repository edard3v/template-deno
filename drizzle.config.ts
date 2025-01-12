import { defineConfig } from "drizzle-kit";
import { CONFIG_DB } from "./src/db/db.ts";

export default defineConfig({
  schema: "./src/db/schemas.ts",
  out: "./src/db/migrations",
  dialect: "turso",
  dbCredentials: CONFIG_DB,
});
