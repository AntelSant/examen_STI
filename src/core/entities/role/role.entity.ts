import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "src/core/entities/role/role.interfase";


@Entity('roles')
export class RoleEntity implements Role {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    name: string;

    @Column({nullable: true})
    description?: string;
}