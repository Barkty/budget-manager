import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  /**
   * Create User Method
   * @param body 
   * @returns User user
   */

  create = async (body: CreateUserDTO) => {

    const found = await this.findEmail(body.staff_email)
        
    if(found) {

      throw new BadRequestException('An account already exists with this email')
        
    }
    const user = this.repo.create({...body})

    return await this.repo.save(user)
  }

  /**
   * 
   * @param id 
   * @returns User
  */

  findOne = async (id: number) => {
    const user = this.repo.findOneBy({id: id})

    if(!user) {

      throw new BadRequestException('User does not exist')
    }

    return user;
  }

  /**
   * 
   * @param staff_email - User email
   * @returns User
   */
  findEmail = async (staff_email: string) => {
    const user = this.repo.findOneBy({staff_email: staff_email})

    return user;
  }

  findAll = async () => {
    const user = this.repo.find()

    return user;
  }

  filterAll = async (staff_name: string) => {
    try {
        
      const users = await this.repo.findBy({ staff_name: Like(`%${staff_name}%`) })

      return users;

    } catch (error) {

        throw error
    }
}

  /**
   * 
   * @param id - User id
   * @returns 
  */

  removeOne = async (id: number) => {
    const user = await this.findOne(id)

    return await this.repo.remove(user)
    
  }

  /**
   * 
   * @param id - User Id
   * @param updates User Information
   * @returns 
   */
  
  updateOne = async (id: number, updates: Partial<User>) => {

    try {
        
      const user = await this.findOne(id)

      Object.assign(user, updates)

      return await this.repo.save(user)

    } catch (error) {

      throw error

    }
  }
}
