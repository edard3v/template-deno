import { Hono } from "hono";
import { err_handler } from "./err_handler.ts";
import { not_found_handler } from "./not_found_handler.ts";
import { welcome_module } from "../modules/welcome/welcome_module.ts";

export const app = new Hono();

app.route("/", welcome_module);

app.notFound(not_found_handler);
app.onError(err_handler);
