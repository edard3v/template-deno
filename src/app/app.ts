import { Hono } from "hono";
import { welcome_module } from "../modules/welcome/welcome_module.ts";
import { not_found_handler } from "./not_found_handler.ts";
import { err_handler } from "./err_handler.ts";
import { start_register_module } from "../modules/auth/start_register/start_register_module.ts";
import { end_register_module } from "../modules/auth/end_register/end_register_module.ts";
import { CORS } from "./config.ts";

export const app = new Hono();

app.use("/*", CORS);

app.route("/", welcome_module);
app.route("/start_register", start_register_module);
app.route("/end_register", end_register_module);

app.notFound(not_found_handler);
app.onError(err_handler);
