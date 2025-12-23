import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { DeleteUserController } from "./deleteUser.controller";
import { DeleteUserService } from "./deleteUser.Service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [DeleteUserController],
    providers: [DeleteUserService],
})
export class DeleteUserModule {}