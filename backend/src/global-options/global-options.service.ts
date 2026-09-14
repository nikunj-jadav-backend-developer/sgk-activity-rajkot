import { Inject, Injectable } from "@nestjs/common";
import { Pool } from "pg";

@Injectable()
export class GlobalOptionsService {
  constructor(
    @Inject("PG_POOL")
    private readonly pool: Pool,
  ) {}

  async findAll() {
    const result = await this.pool.query(`
      SELECT option_key, option_value
      FROM global_options
      ORDER BY option_key ASC
    `);

    return result.rows.reduce(
      (options, row) => {
        options[row.option_key] = row.option_value;
        return options;
      },
      {} as Record<string, string | null>,
    );
  }
}