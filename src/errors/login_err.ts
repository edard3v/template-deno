import { HTTPException } from "hono/http-exception";

export class Login_err extends HTTPException {
  constructor() {
    super(401, { message: "Inicio de sesión invalido" });
    this.name = "Login_err";
  }
}
