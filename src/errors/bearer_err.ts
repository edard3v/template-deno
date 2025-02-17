import { HTTPException } from "hono/http-exception";

export class Bearer_err extends HTTPException {
  constructor() {
    super(400, {
      message: "El encabezado de autorización debe incluir un token Bearer válido",
    });
    this.name = "Bearer_err";
  }
}
