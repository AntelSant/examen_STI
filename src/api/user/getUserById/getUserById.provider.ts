import { CreateUserDto } from "../createUser/dtos/createUser.dto"

export interface GetUserByIdProvider {
    execute(id: string): Promise<CreateUserDto>;
}