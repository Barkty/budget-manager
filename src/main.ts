import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import helmet from 'helmet';

const cookieSession = require('cookie-session')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet())
  app.enableCors();
  app.use(cookieSession({
    keys: [process.env.DEV_COOKIE_KEY]
  }))
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    }),
  ),
  await app.listen(3009);
}
bootstrap();
