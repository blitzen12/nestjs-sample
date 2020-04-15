import { Module } from '@nestjs/common';
import { AuthService } from 'src/provider/AuthService';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from '../api/controller/AuthController';
import { AuthClientSchema } from '../schema/AuthClientSchema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'AuthClient',
        schema: AuthClientSchema,
      }
    ]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
  ],
  exports: [
    AuthService,
  ]
})
export class AuthModule { }