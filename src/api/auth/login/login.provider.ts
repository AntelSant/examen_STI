import { LoginDto } from "./dtos/login.dto";

export abstract class LoginProvider {
    abstract execute(data: LoginDto): Promise<{ token: string }>;
}