import { HTTPException } from "hono/http-exception";

export class Record404Err extends HTTPException {
  constructor() {
    super(404, { message: "Recurso no encontrado." });
    this.name = "Record404Err";
  }
}
