import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RolesGuard } from './auth/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug'],
  });

  app.useGlobalGuards(new JwtAuthGuard(), new RolesGuard(app.get(Reflector)));

  const config = new DocumentBuilder()
    .setTitle('Sistema de Transferência de Pacientes API')
    .setDescription('API for managing patient transfers between hospitals')
    .setVersion('1.0')
    .addTag('STP')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
