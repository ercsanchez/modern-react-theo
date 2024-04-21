import { drizzle } from "drizzle-orm/mysql2";
import { createPool, type Pool } from "mysql2/promise";

import { env } from "~/env";
import * as schema from "./schema";

// import mysql from "mysql2/promise";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: Pool | undefined;
};

const conn = globalForDb.conn ?? createPool({ uri: env.DATABASE_URL });
if (env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema, mode: "default" });

// alternative connection per drizzle docs

// const connection = await mysql.createConnection({
//   host: "host",
//   user: "user",
//   database: "database",
//   password: "password",
//   port: "port",
// });

// export const db = drizzle(connection);
