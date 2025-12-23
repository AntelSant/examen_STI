import { Inject, Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRoleDto } from "./dtos/createRole.dto";
import { RoleEntity } from "src/core/entities/role/role.entity";

@Injectable()
export class CreateRoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private readonly createRoleRepository: Repository<RoleEntity>,
    ) {}

    async execute(data: CreateRoleDto) {
        const exists = await this.createRoleRepository.findOne({
            where: { name: data.name },
        });

        if (exists) {
            throw new BadRequestException(`El rol con el nombre ${data.name} ya existe`);
        }

        return this.createRoleRepository.save(
            this.createRoleRepository.create(data),
        );
    }
}