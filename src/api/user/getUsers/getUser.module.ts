import { Get, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { GetUserController } from "./getUser.controller";
import { GetUserService } from "./getUser.service";
import { GetUsersByStatusModule } from "../getUsersByStatus/getUsersByStatus.module";
import { GetUserByRoleModule } from "../getUsersByRole/getUsersByRole.module";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]), GetUsersByStatusModule, GetUserByRoleModule],
    controllers: [GetUserController],
    providers: [GetUserService],
})
export class GetUserModule {}