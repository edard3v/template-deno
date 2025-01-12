import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schemas from "./schemas.ts";
// import * as relations from "./relations";

const isProduction = Deno.env.get("DENO_ENV") === "production";

export const CONFIG_DB = {
  url: !isProduction
    ? "file:./src/db/template.db"
    : Deno.env.get("TURSO_DATABASE_URL")!,

  authToken: Deno.env.get("TURSO_AUTH_TOKEN"),
};

const client = createClient(CONFIG_DB);

export const db = drizzle(client, {
  schema: { ...schemas },
});
