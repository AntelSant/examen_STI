import { Controller, Get, Param } from '@nestjs/common';
import { GetRolesService } from './getRoles.service';

@Controller('roles')
export class GetRolesController {
    constructor(private readonly getRolesService: GetRolesService) {}

    @Get()
    getAllRoles() {
        return this.getRolesService.getAll()
    }

    @Get(':id')
    getRoleById(@Param('id') id: string) {
        return this.getRolesService.getById(id);
    }
}