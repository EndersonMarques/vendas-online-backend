import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDTO } from './dtos/user.dto';

@Controller('user')
export class UserController {

  @Get('/')
  async getAllUser(){
    return JSON.stringify({
      test: 'abc'
    })
  }

  @Post()
  async createUser(@Body() createUser){
    return {
      ...createUser,
      password: undefined
    }
  }

}
