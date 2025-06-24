import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração CORS
  app.enableCors({
    origin: 'https://minha-plataforma-frontend-7uzqm586l-vinicius-debians-projects.vercel.app', // ATUALIZEI PARA A NOVA URL DO SEU FRONTEND
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  } );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
