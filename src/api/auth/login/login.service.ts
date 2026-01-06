import { LoginProvider } from "./login.provider";
import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException, NotFoundException, BadRequestException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "src/core/entities/user/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Not, Repository } from "typeorm";
import { LoginDto } from "./dtos/login.dto";

@Injectable()
export class LoginService implements LoginProvider {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly jwtService: JwtService,
    ) {}

    async execute(data: LoginDto): Promise<{ token: string; }> {
        try {
            const user = await this.userRepository.findOne({ where: { email: data.email }, relations: [ 'roles' ] });

            if ( !user ) throw new NotFoundException('Usuario no encontrado');

            if ( !user.isActive ) throw new NotFoundException('El usuario se encuentra inactivo');

            const isValid = await bcrypt.compare(data.password, user.password);
            if ( !isValid ) throw new UnauthorizedException('Contraseña incorrecta');

            const roles = user.roles?.map(role => role.name) ?? [];

            const payload = {
                sub: user.id,
                id: user.id,
                email: user.email,
                roles,
            };

            return {
                token: this.jwtService.sign(payload),
            };
        } catch (error) {
            if (error.status) throw error;
            throw new BadRequestException(error.message);
        }
    }
}