import { Controller, Delete, Param, Query } from "@nestjs/common";
import { DeleteRoleSevice } from "./deleteRole.service";

@Controller('roles')
export class DeleteRoleController {
    constructor(private readonly deleteRoleService: DeleteRoleSevice) {}

    @Delete(':id')
    delete(
        @Param('id') id: string,
        @Query('force') force?: string,
    ) {
        return this.deleteRoleService.execute(id, force === 'true');
    }
}