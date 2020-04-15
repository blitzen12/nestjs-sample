import {
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(HttpException)
export class HttpExceptionFilter extends BaseExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response: Response = ctx.getResponse();
    const errors: any[] = [];
    console.log('<<<<<<<<<<<<>>>>>>>>>>>>', exception)
    switch (true) {
      case exception instanceof HttpException: {
        const errorMessage: any = exception.message;
          response.json({
            statusCode: errorMessage.statusCode,
            error: errors,
          });
        break;
      }
    }
  }
}
