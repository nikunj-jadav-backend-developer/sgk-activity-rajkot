import { Global, Module } from "@nestjs/common";
import { Pool } from "pg";
import { DatabaseService } from "./database.service";

@Global()
@Module({
  providers: [
    {
      provide: "PG_POOL",
      useFactory: () => {
        return new Pool({
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT),
          database: process.env.DB_NAME,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
        });
      },
    },
    DatabaseService,
  ],
  exports: ["PG_POOL", DatabaseService],
})
export class DatabaseModule {}