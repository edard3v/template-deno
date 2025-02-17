import { ErrorHandler } from "hono/types";
import { HTTPException } from "hono/http-exception";

export const err_handler: ErrorHandler = (err, context) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }

  console.log(err);
  context.status(500);
  return context.json({ name: err.name, msg: "Error interno del servidor" });
};
