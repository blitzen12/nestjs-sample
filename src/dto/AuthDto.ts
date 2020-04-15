import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {

  @IsString()
  @ApiProperty({
    required: true,
  })
  public username: string;

  @IsString()
  @ApiProperty({
    required: true,
  })
  public password: string;
}