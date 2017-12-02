import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);

  const options = new DocumentBuilder()
    .setTitle('NestJs seed')
    .setDescription('The seed API description')
    .setVersion('1.0')
    .addTag('seed')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);

  return app;
}

export const appBootstrap: Promise<INestApplication> = bootstrap();
