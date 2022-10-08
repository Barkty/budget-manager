import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { UpdateProfileDTO } from './dto/user.dto';

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
    const user = await this.repo.delete({id: id})

    return user
  }

  updateOne = async (id: number, updates: UpdateProfileDTO) => {

    try {
        
        const user = await this.repo.update(id, {avatar: updates.avatar, department: updates.department, gender: updates.gender, username: updates.username})

        return user
    } catch (error) {

        throw error
    }
  }


}
