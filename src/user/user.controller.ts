import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDTO } from './dtos/user.dto';
import { UserEntity } from './interfaces/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService
  ){}

  @Get('/')
  async getAllUser(): Promise<UserEntity[]>{
    return this.userService.getAllUser();
  }

  @Post('/')
  async createUser(@Body() createUser): Promise<UserEntity>{
    return this.userService.createUser(createUser);
  }

}
