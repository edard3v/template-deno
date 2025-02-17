import { HTTPException } from "hono/http-exception";

export class Dto_err extends HTTPException {
  constructor() {
    super(400, { message: "Error de DTO" });
    this.name = "Dto_err";
  }
}
