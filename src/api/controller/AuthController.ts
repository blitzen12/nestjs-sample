/* eslint-disable @typescript-eslint/camelcase */
import { Controller, Body, Res, Post } from '@nestjs/common';
import { Response } from 'express';
import { AuthDto } from '../../dto/AuthDto';
import { AuthService } from '../../provider/AuthService';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('token')
  public createToken(@Body() authDto: AuthDto, @Res() res: Response): void {
    if (authDto.username && authDto.password) {
      this.authService.findByUsername(authDto)
        .then((data) => {
          res.json({
            success: true,
            access_token: data,
          });
        }).catch((error: any): void => {
          res.json({
            success: false,
            error: {
              message: error,
            },
          });
        });
    }
  }
}