import { config } from "./deps.ts";

await config({
  export: true,
  allowEmptyValues: true,
});

export const DATABASE_URL = Deno.env.get("DATABASE_URL");
export const PORT = Deno.env.get("PORT");
export const TOKEN_SECRET_KEY = Deno.env.get("TOKEN_SECRET_KEY");
