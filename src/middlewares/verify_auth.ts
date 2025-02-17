import type { MiddlewareHandler } from "hono";
import type { JwtPayload } from "jsonwebtoken";
import { Bearer_err } from "@errors/bearer_err.ts";
import { Unauthorized } from "@errors/unauthorized.ts";
import { JWT } from "@services/tokens/jwt.ts";

export const verify_auth: MiddlewareHandler<T> = async (context, next) => {
  const Authorization = context.req.header("Authorization");
  if (!Authorization) throw new Unauthorized();

  const [prefix, token] = Authorization.split(" ");
  if (prefix !== "Bearer") throw new Bearer_err();
  if (!token) throw new Unauthorized();

  const tokenPayload = JWT.verify(token) as JwtPayload;

  context.set("tokenPayload", tokenPayload);

  await next();
};

type T = {
  Variables: { tokenPayload: JwtPayload };
};
