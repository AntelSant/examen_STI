import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AssignRoleService } from "./assignRole.service";
import { AssignRoleController } from "./assignRole.controller";
import { UserEntity } from "src/core/entities/user/user.entity";
import { RoleEntity } from "src/core/entities/role/role.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity])],
    providers: [AssignRoleService],
    controllers: [AssignRoleController]
})
export class AssignRoleModule {}