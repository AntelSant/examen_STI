import { LoginInterface } from "./loginDto.interface";
import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDto implements LoginInterface {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}