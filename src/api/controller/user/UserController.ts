import { Controller, Post, Res, Body } from '@nestjs/common';
import { RegisterDto } from '../../../dto/user/RegisterDto';
import { UserService } from '../../../provider/UserService';
import { Response } from 'express';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Post('register')
  public register(@Body() registerDto: RegisterDto, @Res() res: Response): void {
    this.userService.create(registerDto)
      .then((data: any): void => {
        res.json({
          success: true,
          statusCode: 200,
          user: data,
        });
      })
      .catch((error: any): void => {
        if (error.name === 'MongoError' && error.code === 11000) {
          res.json({
            success: false,
            statusCode: 202,
            message: 'User already exists!',
          });
        }
      });
  }
}
