import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração CORS
  app.enableCors({
    origin: 'https://minha-plataforma-frontend.vercel.app', // ATUALIZADO PARA A URL MAIS RECENTE DO SEU FRONTEND
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  } );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
