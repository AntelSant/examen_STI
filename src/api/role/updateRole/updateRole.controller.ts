import { Controller, Patch, Param, Body } from '@nestjs/common';
import { UpdateRoleService } from "./updateRole.service";
import { CreateRoleDto } from '../createRole/dtos/createRole.dto';

@Controller('roles')
export class UpdateRoleController {
    constructor(private readonly updateRoleService: UpdateRoleService) {}

    @Patch(':id')
    async updateRole(
        @Param('id') id: string,
        @Body() data: CreateRoleDto,
    ) {
        return this.updateRoleService.execute(id, data);
    }
}