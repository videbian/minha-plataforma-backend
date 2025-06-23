import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DocumentGenerationService } from './document-generation.service';

@Controller('document-generation')
export class DocumentGenerationController {
  constructor(private readonly documentGenerationService: DocumentGenerationService) {}

  @Post('contract')
  generateContract(@Body() contractData: any) {
    return this.documentGenerationService.generateContract(contractData);
  }

  @Post('policy')
  generatePolicy(@Body() policyData: any) {
    return this.documentGenerationService.generatePolicy(policyData);
  }

  @Post('terms')
  generateTerms(@Body() termsData: any) {
    return this.documentGenerationService.generateTerms(termsData);
  }

  @Get('templates')
  getAvailableTemplates() {
    return this.documentGenerationService.getAvailableTemplates();
  }

  @Get('document/:id')
  getDocument(@Param('id') id: string) {
    return this.documentGenerationService.getDocument(id);
  }
}
