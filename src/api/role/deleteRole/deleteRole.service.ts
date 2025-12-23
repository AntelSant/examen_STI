import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RoleEntity } from "src/core/entities/role/role.entity";

@Injectable()
export class DeleteRoleSevice {
    constructor(
        @InjectRepository(RoleEntity)
        private readonly roleRepository: Repository<RoleEntity>,
    ) {}

    async execute(id: string, force?: boolean) {
        if (!force) {
            throw new BadRequestException('Se necesita el parametro force {true} para eliminar un rol');
        }

        const role = await this.roleRepository.findOne({ where: { id } });

        if (!role) {
            throw new NotFoundException(`Rol ${id} no encontrado`);
        }

        await this.roleRepository.delete(id);
    }
}