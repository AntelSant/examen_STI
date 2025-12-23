import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoleEntity } from "src/core/entities/role/role.entity";
import { UpdateRoleController } from "./updateRole.controller";
import { UpdateRoleService } from "./updateRole.service";

@Module({
    imports: [TypeOrmModule.forFeature([RoleEntity])],
    controllers: [UpdateRoleController],
    providers: [UpdateRoleService],
})
export class UpdateRoleModule {}