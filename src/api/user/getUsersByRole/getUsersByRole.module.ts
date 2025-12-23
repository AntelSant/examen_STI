import { Get, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { RoleEntity } from "src/core/entities/role/role.entity";
import { GetUserByRoleService } from "src/api/user/getUsersByRole/getUsersByRole.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity])],
    providers: [GetUserByRoleService],
    exports: [GetUserByRoleService],
})
export class GetUserByRoleModule {}