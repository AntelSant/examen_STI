import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { RoleEntity } from "../role/role.entity";
import { UserInterface } from "./user.interface";
import { Exclude } from "class-transformer";

@Entity('users')
export class UserEntity implements UserInterface{
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

    @Column({ nullable: false })
    @Exclude()
    password: string;
}