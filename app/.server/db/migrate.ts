import config from "$/drizzle.config";
import {migrate} from "drizzle-orm/postgres-js/migrator";
import {connection, db} from "./index";

import {env} from "$/env";

if (!env.DB_MIGRATION) {
  throw new Error("DB_MIGRATION is not set");
}

(async () => {
  if (!config.out) throw new Error("Migrations folder is not set");
  await migrate(db, {migrationsFolder: config.out});
  await connection.end();
})();
