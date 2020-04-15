/* eslint-disable @typescript-eslint/camelcase */
import { Module } from '@nestjs/common';
import { UserController } from '../api/controller/user/UserController';
import { UserService } from 'src/provider/UserService';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schema/UserSchema';
import * as bcrypt from 'bcrypt';
import { NextFunction } from 'express';
import { Schema } from 'mongoose';
import * as uuidv1 from 'uuid/v1';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'User',
        useFactory: (): Schema => {
          const schema: any = UserSchema;

          schema.pre('save', function (next: NextFunction): any {
            if (!this.isModified('password')) return next();

            bcrypt.hash(this.password, 12).then((hash: any): any => {
              this.password = hash;
              this.refresh_id = uuidv1();
              next();
            });
          });

          return schema;
        }
      }
    ]),
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      }
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }