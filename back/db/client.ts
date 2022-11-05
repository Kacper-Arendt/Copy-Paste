import * as postgres from "https://deno.land/x/postgres@v0.14.2/mod.ts";
import { DATABASE_URL } from "../config.ts";

const pool = new postgres.Pool(DATABASE_URL, 4, true);
const client = await pool.connect();

export default client;

