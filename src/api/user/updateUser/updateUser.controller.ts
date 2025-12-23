import { Controller, Patch, Put, Param, Body } from '@nestjs/common';
import { UpdateUserService } from './updateUser.service';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Controller('users')
export class UpdateUserController {
    constructor (private readonly updateUserService: UpdateUserService) {}

    @Patch(':id')
    patch(
        @Param('id') id: string,
        @Body() data: UpdateUserDto,
    ) {
        return this.updateUserService.patch(id, data);
    }

    @Put(':id')
    put(
        @Param('id') id: string,
        @Body() data: UpdateUserDto,
    ) {
        return this.updateUserService.put(id, data);
    }
}