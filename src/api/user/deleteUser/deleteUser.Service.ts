import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Not, Repository } from "typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { DeleteUserProvider } from "./deleteUser.provider";

@Injectable()
export class DeleteUserService implements DeleteUserProvider{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async execute(id:string) {
        const user = await this.userRepository.findOne({
            where: { id },
        })

        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }

        user.isActive = false;
        return this.userRepository.save(user);
    }
}