import { HTTPException } from "hono/http-exception";

export class Email_err extends HTTPException {
  constructor() {
    super(400, { message: "Email no disponible." });
    this.name = "Email_err";
  }
}
