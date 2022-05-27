import pg from "pg";

import { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } from "./config";

const pool = new pg.Pool({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: Number(PGPORT),
});

export { pool };
