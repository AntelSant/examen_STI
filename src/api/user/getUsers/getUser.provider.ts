import { CreateUserDto } from "../createUser/dtos/createUser.dto";

export interface GetUsersProvider {
    execute(): Promise<CreateUserDto[]>;
}