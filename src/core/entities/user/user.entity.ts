import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { RoleEntity } from "../role/role.entity";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'firstName' })
    firstName: string;

    @Column({ name: 'lastName' })
    lastName: string;

    @Column({unique: true})
    email: string;

    @Column({default: true})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => RoleEntity)
    @JoinTable()
    roles: RoleEntity[];
}