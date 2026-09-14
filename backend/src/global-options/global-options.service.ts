import { Inject, Injectable , ConflictException , NotFoundException } from "@nestjs/common";
import { Pool } from "pg";
import { CreateGlobalOptionDto } from "./dto/create-global-option.dto";
import { UpdateGlobalOptionsDto } from "./dto/update-global-option.dto";

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

  async create(createGlobalOptionDto:CreateGlobalOptionDto){

    const {optionKey , optionValue } = createGlobalOptionDto;

    try{

      const result = await this.pool.query(
        `
        INSERT INTO global_options ( option_key, option_value ) VALUES ($1, $2) RETURNING id, option_key, option_value, created_at, updated_at
        `,[optionKey, optionValue],
      );
      console.log(result);
      return result.rows[0];

    }catch(error:any){
        if (error.code === "23505") {
          throw new ConflictException(
            "Global option already exists",
          );
        }
        throw error;
    }
  }

  async update(optionKey: string,updateGlobalOptionDto: UpdateGlobalOptionsDto){
    const { optionValue } = updateGlobalOptionDto;
    const result = await this.pool.query(
      `
      UPDATE global_options SET option_value = $1, updated_at = NOW() WHERE option_key = $2 RETURNING option_key, option_value, updated_at
      `,[optionValue, optionKey]
    );
    if(result.rowCount == 0){
      throw new NotFoundException(
        `Global option '${optionKey}' not found`,
      );
    }
    return result.rows[0];
  }
}