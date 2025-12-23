import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { GetUserByIdController } from "./getUserById.controller";
import { GetUserByIdService } from "./getUserById.Service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [GetUserByIdController],
    providers: [GetUserByIdService],
})
export class GetUserByIdModule {}