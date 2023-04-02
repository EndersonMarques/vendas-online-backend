import { Injectable } from '@nestjs/common';
import { createUserDTO } from './dtos/user.dto';
import { UserEntity } from './interfaces/user.entity';
import * as bcrypt from "bcrypt"
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ){}

  async getAllUser(): Promise<UserEntity[]>{
    return this.userRepository.find()
  }

  async createUser(createUserDto: createUserDTO): Promise<UserEntity>{
    
    const saltOrRounds = 10
    const passwordHash = await bcrypt.hash(createUserDto.password, saltOrRounds)
    const user = {
      ...createUserDto,
      type_user:  1,
      password: passwordHash
    }

    return this.userRepository.save(user);

  }


}
