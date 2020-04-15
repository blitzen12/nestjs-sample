import { ApiProperty } from "@nestjs/swagger";

export class SuccessResponse {

  @ApiProperty()
  success: boolean;

  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  data?: any;

  constructor(statusCode = 200, data = {}) {
    this.success = true;
    this.statusCode = statusCode;
    this.data = data;
  }
}

export class FailedResponse {

  @ApiProperty()
  success: boolean;

  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  error?: any;

  constructor(statusCode = 400, error = {}) {
    this.success = false;
    this.statusCode = statusCode;
    this.error = error;
  }
}

export class TokenResponse {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  accessToken: string;

  constructor(token) {
    this.success = true;
    this.accessToken = token;
  }
}