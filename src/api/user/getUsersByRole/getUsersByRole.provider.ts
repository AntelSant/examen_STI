import { CreateUserDto } from "../createUser/dtos/createUser.dto";

export interface GetUsersByRoleProvider {
    execute(roleName: string): Promise<CreateUserDto[]>;
}