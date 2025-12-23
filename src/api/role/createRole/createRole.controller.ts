import { Controller, Post, Body } from '@nestjs/common';
import { CreateRoleService } from './createRole.service';
import { CreateRoleDto } from './dtos/createRole.dto';

@Controller('roles')
export class CreateRoleController {
    constructor(private readonly createRoleService: CreateRoleService) {}

    @Post()
    createRole(@Body() data: CreateRoleDto) {
        return this.createRoleService.execute(data);
    }
}