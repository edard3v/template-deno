import { z } from "zod";
import { Role } from "../../db/enums/role.ts";

export const role_zod = z.nativeEnum(Role);
