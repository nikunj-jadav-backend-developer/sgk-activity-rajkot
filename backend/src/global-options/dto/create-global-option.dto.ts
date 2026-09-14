import { IsNotEmpty, IsString } from "class-validator"

export class CreateGlobalOptionDto {
    @IsNotEmpty()
    @IsNotEmpty()
    optionKey:string;

    @IsNotEmpty()
    @IsNotEmpty()
    optionValue:string;
}
/* DTO defines Rules */