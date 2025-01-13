import { drizzle } from "drizzle-orm/libsql";
import * as schemas from "./schemas.ts";
import { DB_CREDENTIAL } from "../../drizzle.config.ts";
// import * as relations from "./relations";

export const db = drizzle({
  connection: DB_CREDENTIAL,
  schema: { ...schemas },
});
