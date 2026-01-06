import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { RoleEntity } from "src/core/entities/role/role.entity";
import { GetUsersByRoleProvider } from "./getUsersByRole.provider";

@Injectable()
export class GetUserByRoleService implements GetUsersByRoleProvider{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,

        @InjectRepository(RoleEntity)
        private readonly roleRepository: Repository<RoleEntity>,
    ) {}

    async execute(roleName: string) {
        const role = await this.roleRepository.findOne({ where: {name: roleName} });

        if (!role) {
            throw new NotFoundException(`Rol con nombre ${roleName} no encontrado`);
        }

        const users = await this.userRepository.find({ relations: ['roles'] });

        const usersWithRoles = users.filter(user => user.roles.some(role => role.name === roleName))

        if (!usersWithRoles.length) {
            throw new NotFoundException(`No se encontraron usuarios con el rol ${roleName}`);
        }

        return usersWithRoles;
    }
}
