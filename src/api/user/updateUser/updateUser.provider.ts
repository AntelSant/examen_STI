import { UpdateUserDto } from "./dtos/updateUser.dto";

export interface UpdateUserProvider {
    patch(id: string, data: UpdateUserDto): Promise<UpdateUserDto>;
    put(id: string, data: UpdateUserDto): Promise<UpdateUserDto>;
}