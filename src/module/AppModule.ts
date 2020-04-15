import { Module } from '@nestjs/common';
import { UserModule } from './UserModule';
import { DatabaseModule } from './DatabaseModule';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/api/middleware/filter/HttpExceptionFilter';
import { AuthModule } from './AuthModule';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }
  ],
})
export class AppModule { }