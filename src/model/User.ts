import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class User extends Document {
  @ApiProperty()
  email: string;
  password: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  middleName: string;

  @ApiProperty()
  lastName: string;
}