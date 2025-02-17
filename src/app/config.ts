import { cors } from "hono/cors";

export const PORT = Number(Deno.env.get("PORT")) || 3001;
export const IS_PRODUCTION = Deno.env.get("DENO_ENV") === "production";
export const CORS = cors({
  origin: ["http://localhost:5173"],
  allowMethods: ["POST", "GET", "UPDATE", "PUT", "DELETE"],
  maxAge: 600,
  credentials: true,
});
