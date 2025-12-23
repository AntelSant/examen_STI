import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreateRoleService } from "./createRole.service";
import { CreateRoleController } from "./createRole.controller";
import { RoleEntity } from "src/core/entities/role/role.entity";

@Module({
    imports: [TypeOrmModule.forFeature([RoleEntity])],
    providers: [CreateRoleService],
    controllers: [CreateRoleController],
})
export class CreateRoleModule {}