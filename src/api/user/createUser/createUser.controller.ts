import {Body, Controller, Post} from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";
import { CreateUserService } from "./createUser.service";

@Controller('users')
export class CreateUserController {
    constructor(private readonly service: CreateUserService) {}

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.service.execute(dto);
    }
}