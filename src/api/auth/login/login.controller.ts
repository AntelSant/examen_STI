import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { LoginService } from './login.service';

@Controller('auth')
export class LoginController {
    constructor(
        private readonly loginService: LoginService,
    ) {}

    @Post('login')
    async login(@Body() dto: LoginDto) {
        return this.loginService.execute(dto);
    }
}
