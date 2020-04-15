import { IsString, MinLength, Equals, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class RegisterDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
  })
  public username: string;

  @IsString()
  @MinLength(8, {
    message: 'Password must be at least 8 characters.'
  })
  @ApiProperty({
    required: true,
    minLength: 8,
  })
  public password: string;

  @IsString()
  @MinLength(8, {
    message: 'Confirm Password must be at least 8 characters.',
  })
  @ApiProperty({
    required: true,
    minLength: 8,
  })
  public confirmPassword: string;
}