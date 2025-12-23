import { CreateUserDto } from "./dtos/createUser.dto";
import { UserEntity } from "src/core/entities/user/user.entity";

export interface CreateUserProvider {
    execute(dto: CreateUserDto): Promise<UserEntity>;
}