import { Injectable, NotFoundException, ConflictException, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { RoleEntity } from 'src/core/entities/role/role.entity';
import { CreateRoleDto } from '../createRole/dtos/createRole.dto';

@Injectable()
export class UpdateRoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private readonly roleRepository: Repository<RoleEntity>,
        ) {}

        async execute(id: string, data: CreateRoleDto) {
            const role = await this.roleRepository.findOne({ where: { id: id } });

            if (!role) {
                throw new NotFoundException(`El role con el Id: ${id} no existe.`);
            }

            let roleWithSameName: any;
            if (data.name && data.name !== role.name) {
                roleWithSameName = await this.roleRepository.findOne({ where: { name: data.name } });
            }

            if(roleWithSameName) {
                throw new ConflictException(`Ya existe un role con el nombre: ${data.name}`);
            }

            Object.assign(role, data);

            return this.roleRepository.save(role);
        }
}