import { CreateRoleDto } from "../createRole/dtos/createRole.dto"

export interface UpdateRoleProvider {
    execute(id: string, data: CreateRoleDto): Promise<CreateRoleDto>;
}