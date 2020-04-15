import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from '../dto/user/RegisterDto';
import { User } from '../model/User';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {

  }

  async create(registerDto: RegisterDto): Promise<User> {
    console.log('it went here');
    throw new HttpException('Unable to create', 500);
  }
}