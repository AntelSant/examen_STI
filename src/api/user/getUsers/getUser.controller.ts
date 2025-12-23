import { Controller, Get, Query, BadRequestException } from "@nestjs/common";
import { GetUserService } from "../getUsers/getUser.service";
import { GetUsersByStatusService } from "../getUsersByStatus/getUsersByStatus.service";
import { GetUserByRoleService } from "../getUsersByRole/getUsersByRole.service";

@Controller('users')
export class GetUserController {
    constructor(private readonly getUsersService: GetUserService,
                private readonly getUsersByStatusService: GetUsersByStatusService,
                private readonly getUsersByRoleService: GetUserByRoleService,
    ) {}

    @Get()
    async getUsers(@Query('status') status?: string, @Query('role') role?: string) {

        if (role !== undefined) {
            return this.getUsersByRoleService.execute(role);
        }

        if (status === undefined) {
            return this.getUsersService.execute();
        }

        if (status !== 'true' && status !== 'false') {
            throw new BadRequestException('El parámetro status debe ser true o false.');
        } else {
            return this.getUsersByStatusService.execute(status === 'true');
        }


    }
}
