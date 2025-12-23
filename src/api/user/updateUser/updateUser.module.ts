import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { UpdateUserController } from "./updateUser.controller";
import { UpdateUserService } from "./updateUser.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UpdateUserController],
    providers: [UpdateUserService]
})
export class UpdateUserModule {}