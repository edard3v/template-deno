import { app } from "./src/app/app.ts";
import { IS_PRODUCTION, PORT } from "./src/app/config.ts";

Deno.serve(
  {
    port: PORT,
    onListen() {
      console.log("production: ", IS_PRODUCTION);
      console.log(`server: http://localhost:${PORT}/`);
    },
  },
  app.fetch
);
