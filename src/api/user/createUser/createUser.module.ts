import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { CreateUserController } from "./createUser.controller";
import { CreateUserService } from "./createUser.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [CreateUserController],
    providers: [CreateUserService],
})
export class CreateUserModule {}