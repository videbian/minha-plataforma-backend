import { Module } from '@nestjs/common';
import { DocumentGenerationController } from './document-generation.controller';
import { DocumentGenerationService } from './document-generation.service';

@Module({
  controllers: [DocumentGenerationController],
  providers: [DocumentGenerationService],
  exports: [DocumentGenerationService],
})
export class DocumentGenerationModule {}
