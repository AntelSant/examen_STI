import { CreateUserDto } from "../createUser/dtos/createUser.dto";

export interface AssignRoleProvider {
    execute(userId: string, roleId: string): Promise<CreateUserDto>;
}