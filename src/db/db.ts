import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { DATABASE_URL } from "../../drizzle.config.ts";
// import * as relations from "./relations.ts";

const sql = neon(DATABASE_URL);

export const db = drizzle({ client: sql });
