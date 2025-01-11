import { Hono } from "hono";
import { welcomeController } from "./welcome.controller.ts";
import { zValidator } from "@hono/zod-validator";
import { welcomeDTO } from "./welcome.dto.ts";
import { WelcomeVariables } from "./welcome.types.ts";

export const welcomeModule = new Hono<{ Variables: WelcomeVariables }>();

welcomeModule.post(
  "/:id",

  async (context, next) => {
    context.set("author", "edar");
    await next();
  },

  zValidator("json", welcomeDTO),

  welcomeController
);
