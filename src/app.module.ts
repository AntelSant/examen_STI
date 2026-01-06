import { Get, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './core/database/database.module';
import { EntitiesModule } from './core/entities/entities.module';
import { CreateUserModule } from './api/user/createUser/createUser.module';
import { GetUserModule } from './api/user/getUsers/getUser.module';
import { GetUserByIdModule } from './api/user/getUserById/getUserById.module';
import { UpdateUserModule } from './api/user/updateUser/updateUser.module';
import { DeleteUserModule } from './api/user/deleteUser/deleteUser.Module';
import { CreateRoleModule } from './api/role/createRole/createRole.module';
import { GetRolesModule } from './api/role/getRoles/getRoles.module';
import { AssignRoleModule } from './api/user/assignRole/assignRole.module';
import { DeleteRoleModule } from './api/role/deleteRole/deleteRole.module';
import { GetUserByRoleModule } from './api/user/getUsersByRole/getUsersByRole.module';
import { UpdateRoleModule } from './api/role/updateRole/updateRole.module';
import { RegisterModule } from './api/auth/register/register.module';
import { LoginModule } from './api/auth/login/login.module';

@Module({
  imports: [DatabaseModule, 
    EntitiesModule, 
    CreateUserModule, 
    GetUserModule, 
    GetUserByIdModule, 
    UpdateUserModule, 
    DeleteUserModule, 
    CreateRoleModule, 
    GetRolesModule, 
    AssignRoleModule,
    DeleteRoleModule,
    GetUserByRoleModule,
    UpdateRoleModule,
    RegisterModule,
    LoginModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
