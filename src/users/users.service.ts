import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create = async ({...body}) => {
    const user = this.repo.create({...body})

    return await this.repo.save(user)
  }

  findOne = async (id: number) => {
    const user = this.repo.findOneBy({id: id})

    return user;
  }

  findEmail = async (staff_email: string) => {
    const user = this.repo.findOneBy({staff_email: staff_email})

    return user;
  }

  findAll = async () => {
    const user = this.repo.find()

    return user;
  }

  removeOne = async (id: number) => {
    const user = await this.findOne(id)

    return await this.repo.remove(user)
    
  }

  updateOne = async (id: number, updates: Partial<User>) => {

    try {
        
      // const user = await this.repo.update(id, {avatar: updates.avatar, department: updates.department, gender: updates.gender, username: updates.username})
      const user = await this.findOne(id)

      Object.assign(user, updates)

      return await this.repo.save(user)

    } catch (error) {

        throw error
    }
  }


}
