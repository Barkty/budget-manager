import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDTO, UpdateProfileDTO, UserDTO } from './dto/user.dto.js';
import { Serialize } from '../interceptors/serialize.interceptor.js';
import { AuthService } from './auth.service.js';

@Controller('/api/users')
@Serialize(UserDTO)
export class UsersController {
  constructor(private readonly userService: UsersService, private readonly authService: AuthService) {}

  @Post('/new')
  async createUser( @Body() body: CreateUserDTO ) {

    const user = await this.authService.signUp(body)

    return user;

  }

  @Post('/login')
  async login( @Body() body: UpdateProfileDTO) {
    const user = await this.authService.signIn(body)

    return user
  }

  @Get('/all')
  async getUsers() {
    const users = await this.userService.findAll()
    
    return users
  }

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
