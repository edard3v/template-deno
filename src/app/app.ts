import { Hono } from "hono";
import { welcome_module } from "@modules/welcome/welcome_module.ts";
import { not_found_handler } from "@app/not_found_handler.ts";
import { err_handler } from "@app/err_handler.ts";

export const app = new Hono();

app.route("/", welcome_module);

app.notFound(not_found_handler);
app.onError(err_handler);
