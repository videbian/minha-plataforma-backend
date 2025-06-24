import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurar CORS para permitir acesso do Frontend
  app.enableCors({
    origin: ['https://minha-plataforma-frontend-git-main-vinicius-debians-projects.vercel.app', 'http://localhost:3000'],
    credentials: true,
  } );
  
  // Usar a porta fornecida pelo Railway ou 3000 como fallback
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  
  console.log(`Application is running on port ${port}`);
}
bootstrap();
