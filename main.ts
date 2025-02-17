import { PORT } from "@app/config.ts";
import { app } from "@app/app.ts";

Deno.serve(
  {
    port: PORT,
    onListen() {
      console.log(`Servidor escuchando en http://localhost:${PORT}/`);
    },
  },
  app.fetch
);
