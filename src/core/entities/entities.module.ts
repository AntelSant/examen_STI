import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';
import { RoleEntity } from './role/role.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity])],
    exports: [TypeOrmModule],
})
export class EntitiesModule {}