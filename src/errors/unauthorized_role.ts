import { HTTPException } from "hono/http-exception";

export class Unauthorized_role extends HTTPException {
  constructor() {
    super(403, { message: "Rol no autorizado." });
    this.name = "Unauthorized_role";
  }
}
