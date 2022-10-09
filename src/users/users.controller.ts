import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, UpdateProfileDTO } from './dto/user.dto';
import { SerializeInterceptor } from 'interceptors/serialize.interceptor';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/new')
  async createUser( @Body() body: CreateUserDTO ) {

    const found = await this.userService.findEmail(body.staff_email)

    if(found) {

      throw new Error('An account already existes with this email')

    }
    const user = await this.userService.create(body)

    return user;

  }

  @Get('/all')
  async getUsers() {
    const users = await this.userService.findAll()

    return users
  }

  @UseInterceptors(SerializeInterceptor)
  @Get('/:id')
  async getUser( @Param('id') id: string ) {

    const user = await this.userService.findOne(Number(id))

    if(!user) {
      throw new NotFoundException('User does not exists')
    }

    return user;
  }

  @Delete('/:id')
  async deleteUser( @Param('id') id: string) {

    const user = await this.userService.removeOne(Number(id))

    if(!user) {
      throw new NotFoundException('User does not exist')
    }

    return user;
  }

  @Patch('/update')
  async updateUser( @Param('id') id: string, @Body() body: UpdateProfileDTO ) {

    const user = await this.userService.updateOne(Number(id), body)

    if(!user) {
      throw new NotFoundException('User does not exist')
    }

    return user;
  }
}
