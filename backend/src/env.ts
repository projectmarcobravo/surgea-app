import z from "zod";

const envVariables = z.object({
  NODE_PORT: z.string(),
});

export const ENV = envVariables.parse(process.env);
