import { RegisterDtoInterface } from "./registerDto.interface";
import { IsEmail, IsNotEmpty, isString, IsString, MinLength } from "class-validator";

export class RegisterDto implements RegisterDtoInterface {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}