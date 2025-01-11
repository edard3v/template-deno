import { MiddlewareHandler } from "hono/types";
import { WelcomeDTO } from "./welcome.dto.ts";

export type WelcomeController = MiddlewareHandler<
  {
    Variables: WelcomeVariables;
  },
  string,
  {
    out: {
      json: WelcomeDTO;
    };
  }
>;

export type WelcomeVariables = { author: string; body: WelcomeDTO };
