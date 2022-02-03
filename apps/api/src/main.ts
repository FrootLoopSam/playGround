/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';

import { Config, SSM } from 'aws-sdk';
import * as dotenv from 'dotenv';

import { AppModule } from './app/app.module';
import {} from '../endpoints.config';

export const env = process.env['FOO'];

async function bootstrap() {
  dotenv.config();

  // get database connection credentials
  const ssmProvider = new SSM({ region: 'us-east-1' });
  const dbURL = ssmProvider.getParameter(
    {
      // TODO: check if production is true and swap SSM Param accordingly
      Name: '/lupe-time/prod/db/url',
    },
    (err, res) => {
      if (err) {
        throw console.error('Ruh roh, ', err);
      } else {
        console.log(res.Parameter.Value);
      }
    }
  );
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Lupe Time')
    .setDescription('Lupe Project Api')
    .setVersion('1.0')
    .addTag('lupe')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(`Test: ${process.env.FOO}`);
  Logger.log(`Node: ${process.env.NODE_ENV}`);
  Logger.log(`again: ${process.env.FOO}`);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
