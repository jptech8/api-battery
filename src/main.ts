import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {morganLogger} from './utility/logger/morgan.logger'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(morganLogger);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  const port = configService.get<number>('APP_PORT');
  
  await app.listen(port);
}
bootstrap();
