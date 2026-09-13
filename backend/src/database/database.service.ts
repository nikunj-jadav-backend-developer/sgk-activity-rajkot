import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { Pool } from "pg";

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(
    @Inject("PG_POOL")
    private readonly pool: Pool,
  ) {}

  async onModuleInit() {
    await this.pool.query("SELECT 1");

    console.log("PostgreSQL connected successfully");
  }

  getPool(): Pool {
    return this.pool;
  }
}