import z from "zod";

export const welcomeDTO = z.object({
  oe: z.coerce.number(),
});

export type WelcomeDTO = z.infer<typeof welcomeDTO>;
