export const PORT = Number(Deno.env.get("PORT")) || 3000;
export const IS_PRODUCTION = Deno.env.get("DENO_ENV") === "production";
