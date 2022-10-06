import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty, IsDate, IsEmail, IsEnum } from 'class-validator'
import { UserGender, UserRole } from "./users.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column({nullable: true})
    username:string;

    @Column({length: 200})
    staff_name: string

    @Column({unique:true})
    @IsEmail()
    staff_email: string;

    @Column({unique:true})
    staff_id: string

    @Column()
    @IsEnum(UserGender)
    gender: string

    @Column()
    department: string

    @Column('text')
    pass_word: string

    @Column({type: 'text', nullable: true})
    avatar: string;

    @Column()
    @IsEnum(UserRole)
    role: string

    @Column({nullable: true})
    @IsDate()
    last_loginAt?: Date;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}