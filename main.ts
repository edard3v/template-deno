import { app } from "./src/app/app.ts";
import { IS_PRODUCTION, PORT } from "./src/app/config.ts";

Deno.serve(
  {
    port: PORT,
    onListen() {
      console.log("¿Es producción?: ", IS_PRODUCTION);
      console.log(`Servidor escuchando en http://localhost:${PORT}/`);
    },
  },
  app.fetch
);
