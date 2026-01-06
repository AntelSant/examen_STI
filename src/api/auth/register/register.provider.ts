import { RegisterDtoInterface } from "./dtos/registerDto.interface";

export abstract class RegisterProvider {
    abstract execute(data: RegisterDtoInterface): Promise<any>;
}