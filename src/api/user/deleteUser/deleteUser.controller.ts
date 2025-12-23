import {Controller, Delete, Param} from '@nestjs/common';
import { DeleteUserService } from './deleteUser.Service';

@Controller('users')
export class DeleteUserController {
    constructor(
        private readonly deleteUserService: DeleteUserService,
    ) {}

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return this.deleteUserService.execute(id);
    }
}