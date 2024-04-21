import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    uri: env.DATABASE_URL,

    // alternative connection per drizzle docs

    // host: env.DATABASE_HOST,
    // user: env.DATABASE_USER,
    // password: env.DATABASE_PASSWORD,
    // port: parseInt(env.DATABASE_PORT),
    // database: env.DATABASE_DATABASE,
  },
  tablesFilter: ["modern_react_*"],
} satisfies Config;
