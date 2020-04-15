import { Document } from 'mongoose';
import { ApiProperty } from "@nestjs/swagger";

// export interface AuthClient extends Document {
//   username: string;
//   password: string;
// }
export class AuthClient extends Document{
  @ApiProperty()
  username: string;

  password: string;
}