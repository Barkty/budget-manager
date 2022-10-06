import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/user.dto';

@Controller('api/user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/new')
  createUser( @Body() body: CreateUserDTO) {
    this.userService.create(body)
  }

  @Get('/all')
  getUsers(): string {
    return 
  }
}
