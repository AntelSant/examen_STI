import { Role } from "src/core/entities/role/role.interfase";

export interface GetRolesProvider {
    getAll(): Promise<Role[]>;
    getById(id: string): Promise<Role>;
}