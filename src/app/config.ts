export const PORT = Number(Deno.env.get("PORT")) || 3001;
export const IS_PRODUCTION = Deno.env.get("DENO_ENV") === "production";
