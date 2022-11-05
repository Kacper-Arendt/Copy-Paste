import "https://deno.land/x/dotenv@v3.2.0/load.ts";

export const databaseUrl = Deno.env.get('DATABASE_URL');