import { CanActivate, ArgumentsHost, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const { path }: any = request;

    if (path !== '/api/auth/token') {
      const authorizationBearer: any = request.headers['authorization'];
      const accessToken: string = authorizationBearer ? authorizationBearer.replace('Bearer ', '') : '';
      const publicPem: any = fs.readFileSync(process.env.PUBLIC_PEM);
      const decodedData: string | object = jwt.verify(accessToken, publicPem, { algorithms: ['RS256'] });
      if (decodedData) {
        return true;
      }

      return false;
    }

    return true;
  }
}