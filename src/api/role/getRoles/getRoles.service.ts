import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RoleEntity } from "src/core/entities/role/role.entity";

@Injectable()
export class GetRolesService {
    constructor(
        @InjectRepository(RoleEntity)
        private readonly roleRepository: Repository<RoleEntity>,
        ) {}
    
    async getAll() {
        return this.roleRepository.find();
    }

    async getById(id: string) {
        const role = await this.roleRepository.findOne({ where: { id } });

        if ( !role ) {
            throw new NotFoundException(`El role con el id ${id} no existe`);
        }

        return role;
    }
}