import { Controller, Param, Post } from "@nestjs/common";
import { AssignRoleService } from "./assignRole.service";

@Controller('users')
export class AssignRoleController {
    constructor(private readonly assignRoleService: AssignRoleService) {}

    @Post(':id/roles/:roleId')
    assignRoleToUser(
        @Param('id') userId: string,
        @Param('roleId') roleId: string,
    ) {
        return this.assignRoleService.execute(userId, roleId);
    }
}