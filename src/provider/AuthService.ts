import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt';
import { AuthDto } from "../dto/AuthDto";
import { AuthClient } from '../model/AuthClient';

@Injectable()
export class AuthService {
  constructor(@InjectModel('AuthClient') private readonly authClient: Model<AuthClient>) {

  }

  async create(data: any) {
    const authClient: any = await this.authClient.create(data);

    return authClient;
  }

  async findByUsername(authDto: AuthDto): Promise<AuthClient> {
    return new Promise((resolve: any, reject: any): any => {
      throw new HttpException('Opps something went wrong', 500);
    });
  }
}