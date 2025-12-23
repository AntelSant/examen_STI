import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { RoleEntity } from "src/core/entities/role/role.entity";

@Injectable()
export class AssignRoleService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,

        @InjectRepository(RoleEntity)
        private readonly roleRepository: Repository<RoleEntity>,
    ) {}

    async execute(userId: string, roleId: string) {
        const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['roles'] })

        if (!user) {
            throw new NotFoundException(`Usuario con ID ${userId} no encontrado`)
        }

        const role = await this.roleRepository.findOne({ where: { id: roleId } });

        if (!role) {
            throw new NotFoundException(`Rol con ID ${roleId} no encontrado`);      
        }

        const yaAsignados = user.roles.some((r) => r.id === role.id,);

        if (yaAsignados) {
            throw new BadRequestException(`El rol con ID ${roleId} ya está asignado al usuario con ID ${userId}`);
        }

        user.roles.push(role);
        return this.userRepository.save(user);
    }
}