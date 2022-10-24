import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { CreateUserDTO, UpdateProfileDTO, UserDTO } from './dto/user.dto';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';


/**
 * @class AuthService
 * @property signIn - Handles user authentication and authorization
 * @property signUp - Handles user creation
*/

const scrypt = promisify(_scrypt)


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}


    // payload = (user: UserDTO) => {

    //     const token = jwt.sign(
    //         { id: user.id, email: user.staff_email, dept: user.department },
    //         process.env.JWT_SECRET,
    //         {
    //           expiresIn: "30d",
    //           issuer: "SAHCO PLC",
    //         }
    //     );
        
    //     return { user, token: token };

    // }

    /**
     * 
     * @param user - user details to login
     * @return user
     */
    signIn = async (user: UpdateProfileDTO) => {
        const users = await this.usersService.findEmail(user.staff_email)

        if(!users) {
            throw new NotFoundException('User does not exist')
        }

        const [salt, storedHash] = users.pass_word.split('.')

        const hash = (await scrypt(user.pass_word, salt, 32)) as Buffer

        if(storedHash !== hash.toString('hex')) {
            throw new BadRequestException('Invalid Credentials')
        }

        return users;
    }

    /**
     * 
     * @param user - user details to create
     * @return user
    */

    signUp = async (user: CreateUserDTO) => {
        const users = await this.usersService.findEmail(user.staff_email)

        if(users) {

            throw new BadRequestException('An account already exists with this email')
        }

        const salt = randomBytes(8).toString('hex')

        const hash = (await scrypt(user.pass_word, salt, 32)) as Buffer

        const result = salt + '.' + hash.toString('hex')

        const newUser = {
            ...user,
            pass_word: result
        }

        const createdUser = await this.usersService.create(newUser)

        return createdUser;
    }
}