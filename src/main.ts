import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './module/AppModule';
import { AuthGuard } from './api/middleware/AuthGuard';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();