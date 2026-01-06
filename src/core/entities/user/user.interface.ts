import { RoleEntity } from "../role/role.entity"

export interface UserInterface {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date
    roles: RoleEntity[]
}

// Prueba