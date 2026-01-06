import { Role } from "src/core/entities/role/role.interfase";
import { CreateRoleDto } from "./dtos/createRole.dto";

export interface CreateRoleProvider {
    execute(data: CreateRoleDto): Promise<Role>;
}