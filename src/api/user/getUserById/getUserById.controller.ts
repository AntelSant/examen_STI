import { Controller, Get, Param } from '@nestjs/common';
import { GetUserByIdService  } from './getUserById.Service';

@Controller('users')
export class GetUserByIdController {
  constructor(
    private readonly getUserByIdService: GetUserByIdService,
) {}

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.getUserByIdService.execute(id);
  }
}