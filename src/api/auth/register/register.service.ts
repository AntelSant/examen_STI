import * as bcrypt from 'bcrypt';
import { Injectable, BadRequestException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { RegisterProvider } from "./register.provider";
import { UserEntity } from 'src/core/entities/user/user.entity';
import { RegisterDtoInterface } from './dtos/registerDto.interface';

@Injectable()
export class RegisterService implements RegisterProvider {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async execute(data: RegisterDtoInterface) {
        const exists = await this.userRepository.findOne({ where: { email: data.email } });
        if ( exists ) {
            throw new BadRequestException("El email ya existe");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        return this.userRepository.save(this.userRepository.create({
                ...data,
                password: hashedPassword,
            })
        );
    }
}