import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { CreateUserDto } from "./dtos/createUser.dto";
import { CreateUserProvider } from "./createUser.provider";

@Injectable()
export class CreateUserService implements CreateUserProvider{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>,
    ){}

    async execute(dto: CreateUserDto): Promise<UserEntity> {
        const exists = await this.userRepo.findOne({ where: { email: dto.email } });
        if (exists) {
            throw new ConflictException('User with this email already exists');
        }
        const user = this.userRepo.create(dto);
        return this.userRepo.save(user);
    }
}