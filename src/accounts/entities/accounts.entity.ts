import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty, IsDate, IsEmail, IsArray, IsEnum, IsJSON } from 'class-validator'

@Entity()
export class Accounts {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    account_category: string

    @Column()
    account_type: string

    @Column()
    @IsDate()
    start_date: Date

    @Column()
    @IsDate()
    end_date: Date

    @CreateDateColumn()
    createAt:Date;

    @UpdateDateColumn()
    updateAt:Date;
}