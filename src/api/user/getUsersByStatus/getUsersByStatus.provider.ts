import { CreateUserDto } from "../createUser/dtos/createUser.dto";

export interface GetUsersByStatusProvider {
    execute(status: boolean): Promise<CreateUserDto[]>;
}