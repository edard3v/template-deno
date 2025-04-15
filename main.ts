import { IS_PRODUCTION, PORT } from "@app/config.ts";
import { app } from "@app/app.ts";

Deno.serve(
  {
    port: PORT,
    onListen() {
      console.table({
        is_production: IS_PRODUCTION,
        server: Deno.env.get("API_BASE_URL"),
      });
    },
  },
  app.fetch
);
