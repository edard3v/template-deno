import { HTTPException } from "hono/http-exception";

export class Record_404 extends HTTPException {
  constructor() {
    super(404, { message: "Recurso no encontrado." });
    this.name = "Record_404";
  }
}
