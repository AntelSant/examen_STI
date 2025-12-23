import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoleEntity } from "src/core/entities/role/role.entity";
import { GetRolesService } from "./getRoles.service";
import { GetRolesController } from "./getRoles.controller";

@Module({
    imports: [TypeOrmModule.forFeature([RoleEntity])],
    providers: [GetRolesService],
    controllers: [GetRolesController],
})
export class GetRolesModule {}