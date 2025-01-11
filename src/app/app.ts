import { Hono } from "hono";
import { errHandler } from "./err.handler.ts";
import { notFoundHandler } from "./notFound.handler.ts";
import { welcomeModule } from "../modules/welcome/welcome.module.ts";

export const app = new Hono();

app.route("/", welcomeModule);

app.notFound(notFoundHandler);
app.onError(errHandler);
