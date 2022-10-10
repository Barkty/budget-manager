import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IsDate, IsEmail, IsEnum, IsNumber } from 'class-validator'
import { UserGender, UserRole } from "./users.enum";

/**
 * @class User Entity defines a user model
 */
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
    @IsNumber()
    otp: number

    @Column({nullable: true})
    @IsDate()
    otpExpiresIn: Date

    @Column({nullable: true})
    @IsDate()
    last_loginAt?: Date;

    @CreateDateColumn()
    create_time: Date;

    @UpdateDateColumn()
    updated_time: Date;

    @AfterInsert()
    logInsert() {
        console.log(`Inserted user with id: ${this.id}`)
    }

    @AfterRemove()
    logRemove() {
        console.log(`Removed user with id: ${this.id}`)
    }
    @AfterUpdate()
    logUpdate() {
        console.log(`Updated user with id: ${this.id}`)
    }
}