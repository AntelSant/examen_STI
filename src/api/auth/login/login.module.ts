import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";
import { UserEntity } from "src/core/entities/user/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        JwtModule.register({
            secret: 'SECRET_EXAMEN',
            signOptions: { expiresIn: '30m' },
        }),
    ],
    controllers: [LoginController],
    providers: [LoginService],
})
export class LoginModule {}