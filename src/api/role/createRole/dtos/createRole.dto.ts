import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { createRoleDtoInterface } from "./createRole.dto.interface";

export class CreateRoleDto implements createRoleDtoInterface{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;
}