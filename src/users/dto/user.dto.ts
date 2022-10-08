import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";

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
    avatar: string

    @IsDate()
    updated_time: Date

}