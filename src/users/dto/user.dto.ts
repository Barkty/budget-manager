import { IsDate, IsEmail, IsNumber, IsString, IsOptional } from "class-validator";
import { Expose } from "class-transformer";

export class CreateUserDTO {

    @IsString()
    pass_word: string

    @IsString()
    staff_name: string

    @IsEmail()
    staff_email: string;

    @IsString()
    staff_id: string

    @IsString()
    gender: string

    @IsString()
    username: string

    @IsString()
    department: string

    @IsString()
    role: string
}

export class UpdateProfileDTO {

    @IsString()
    @IsOptional()
    staff_name: string

    @IsEmail()
    @IsOptional()
    staff_email: string;

    @IsString()
    @IsOptional()
    staff_id: string

    @IsString()
    @IsOptional()
    gender: string

    @IsString()
    @IsOptional()
    username: string

    @IsString()
    @IsOptional()
    department: string

    @IsString()
    @IsOptional()
    pass_word: string

    @IsString()
    @IsOptional()
    avatar: string

    @IsDate()
    @IsOptional()
    updated_time: Date

}

export class UserDTO {
    
    @Expose()
    id: number

    @Expose()
    uuid: string

    @Expose()
    username:string;

    @Expose()
    staff_name: string

    @Expose()
    staff_email: string;

    @Expose()
    staff_id: string

    @Expose()
    gender: string

    @Expose()
    department: string

    @Expose()
    avatar: string;

    @Expose()
    role: string

    @Expose()
    last_loginAt?: Date;

    @Expose()
    create_time: Date;

    @Expose()
    updated_time: Date;
}