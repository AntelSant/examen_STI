import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/core/entities/user/user.entity';
import { UpdateUserDto } from 'src/api/user/updateUser/dtos/updateUser.dto';
import { UpdateUserProvider } from './updateUser.provider';

@Injectable()
export class UpdateUserService implements UpdateUserProvider{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async patch(id: string, data: UpdateUserDto) {
        const user = await this.userRepository.findOne({ where: { id } });

        if (!user) {
            throw new NotFoundException("Usuario no encontrado");
        }

        Object.assign(user, data);
        return this.userRepository.save(user);
    }

    async put(id: string, data: UpdateUserDto) {
        const requiredFields: (keyof UpdateUserDto)[] = [
            'firstName',
            'lastName',
            'email',
            'isActive',
        ];

        for (const field of requiredFields) {
            if (data[field] === undefined) {
                throw new BadRequestException(`El campo ${field} es obligatorio.`);
            }
        }

        const user = await this.userRepository.findOne({ where: { id } });

        if (!user) {
            throw new NotFoundException("Usuario no encontrado");
        }

        Object.assign(user,data);
        return this.userRepository.save(user);
    }
}