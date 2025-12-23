import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoleEntity } from "src/core/entities/role/role.entity";
import { DeleteRoleController } from "./deleteRole.controller";
import { DeleteRoleSevice } from "./deleteRole.service";

@Module({
    imports: [TypeOrmModule.forFeature([RoleEntity])],
    controllers: [DeleteRoleController],
    providers: [DeleteRoleSevice],
})
export class DeleteRoleModule {}