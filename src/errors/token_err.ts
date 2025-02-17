import { HTTPException } from "hono/http-exception";

export class Token_err extends HTTPException {
  constructor() {
    super(401, { message: "Token invalido." });
    this.name = "Token_err";
  }
}
