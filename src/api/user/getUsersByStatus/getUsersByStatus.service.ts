import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/core/entities/user/user.entity';
import { GetUsersByStatusProvider } from './getUsersByStatus.provider';

@Injectable()
export class GetUsersByStatusService implements GetUsersByStatusProvider{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async execute(status: boolean) {
        const users = await this.userRepository.find({
            where: { isActive: status }
        });

        if (users.length === 0) {
            throw new NotFoundException(`No se encontraron usuarios con el estado ${status}.`);
        }

        return users;
    }
}