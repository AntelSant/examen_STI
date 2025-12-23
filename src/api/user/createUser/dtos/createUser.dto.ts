import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Expose } from "class-transformer";
import { CreateUserInterface } from "./createUser.interface";

export class CreateUserDto implements CreateUserInterface {
    @Expose()
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @Expose()
    @IsEmail()
    email: string;
}