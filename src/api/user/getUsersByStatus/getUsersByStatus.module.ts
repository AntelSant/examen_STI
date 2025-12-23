import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/core/entities/user/user.entity';
import { GetUsersByStatusService } from './getUsersByStatus.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [GetUsersByStatusService],
    exports: [GetUsersByStatusService],
})
export class GetUsersByStatusModule {}