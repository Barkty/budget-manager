import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, UpdateProfileDTO } from './dto/user.dto';
import { Response } from 'express';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/new')
  async createUser( @Body() body: CreateUserDTO, res: Response) {

    const found = await this.userService.findEmail(body.staff_email)

    if(found) {

      // res.status(200).json({
      //   message: 'An account already existes with this email',
      //   success: 0
      // })
      throw new Error('An account already existes with this email')

    }
    const user = await this.userService.create(body)

    // res.status(200).json({
    //   message: 'User created successfully',
    //   data: user,
    //   success: 1
    // })

  }

  @Get('/all')
  async getUsers() {
    const users = await this.userService.findAll()
    console.log(users)

    return users
  }

  @Get('/:id')
  getUser( @Param('id') id: string ) {
    this.userService.findOne(Number(id))
  }

  @Delete('/:id')
  deleteUser( @Param('id') id: string) {
    this.userService.removeOne(Number(id))
  }

  @Patch('/update')
  updateUser( @Param('id') id: string, @Body() body: UpdateProfileDTO ) {
    this.userService.updateOne(Number(id), body)
  }
}
