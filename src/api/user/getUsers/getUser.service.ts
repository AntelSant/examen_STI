import { Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "src/core/entities/user/user.entity";
import { GetUsersProvider } from "./getUser.provider";

@Injectable()
export class GetUserService implements GetUsersProvider{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ){}

    async execute(){
        return this.userRepository.find();
    }
}