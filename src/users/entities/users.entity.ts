import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty, IsDate, IsEmail, IsArray, IsEnum, IsJSON } from 'class-validator'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique:true})
    @IsNotEmpty()
    username:string;

    @Column({length: 200})
    staff_name: string

    @Column()
    @IsEmail()
    staff_email: string;

    @Column()
    staff_id: string

    @Column()
    gender: string

    @Column()
    department: string

    @Column('text')
    pass_word: string

    @Column('text')
    avatar: string;

    @Column()
    role: string

    @Column()
    @IsDate()
    last_loginAt?:Date;

    @CreateDateColumn()
    createAt:Date;

    @UpdateDateColumn()
    updateAt:Date;
}