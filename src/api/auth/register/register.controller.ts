import { RegisterService } from "./register.service";
import { Controller, Post, Body } from "@nestjs/common";
import { RegisterDto } from "./dtos/register.dto";

@Controller('auth')
export class RegisterController {
    constructor(
        private readonly registerService: RegisterService,
    ) {}

    @Post('register')
    async registrar(@Body() dto: RegisterDto) {
        return this.registerService.execute(dto);
    }
}