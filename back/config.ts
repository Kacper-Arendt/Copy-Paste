import { config } from "./deps.ts";

await config({
  export: true,
  allowEmptyValues: true,
});

export const DATABASE_URL = Deno.env.get("DATABASE_URL");
export const PORT = Deno.env.get("PORT");
