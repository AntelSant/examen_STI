import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { RegisterController } from "./register.controller";
import { RegisterService } from "./register.service";
import { RegisterProvider } from "./register.provider";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [RegisterController],
    providers: [RegisterService],
    // providers: [
    //     {
    //         provide: RegisterProvider,
    //         useClass: RegisterService,
    //     },
    // ],
})
export class RegisterModule {}