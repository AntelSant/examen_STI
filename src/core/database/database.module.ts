import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'santiago',
            password: 'santiago',
            database: 'examen_nest_2',
            autoLoadEntities: true,
            synchronize: true,
        })
    ],
})
export class DatabaseModule {}