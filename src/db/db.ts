import pg from "pg";
import { drizzle } from "drizzle-orm/neon-http";
import { drizzle as drizzle_local } from "drizzle-orm/node-postgres";
import { neon } from "@neondatabase/serverless";
import { DATABASE_URL } from "../../drizzle.config.ts";
import { IS_PRODUCTION } from "../app/config.ts";
import * as schema from "./schema.ts";
// import * as relations from "./relations.ts";

const { Pool } = pg;

const sql = !IS_PRODUCTION ? new Pool({ connectionString: DATABASE_URL }) : neon(DATABASE_URL);

export const db = !IS_PRODUCTION ? drizzle_local(sql, { schema }) : drizzle(sql, { schema });
