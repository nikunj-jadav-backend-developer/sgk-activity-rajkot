import { IsNotEmpty , IsString } from "class-validator";

export class UpdateGlobalOptionsDto {
    @IsString()
    @IsNotEmpty()
    optionValue:string;
}

/* DTO defines Rules */