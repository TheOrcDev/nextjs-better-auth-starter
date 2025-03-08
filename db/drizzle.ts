import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

config({ path: ".env" }); // or .env.local

export const db = drizzle({
  client: postgres(process.env.POSTGRES_URL!),
});
