import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { PartnerModule } from './partner/partner.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { BrandingModule } from './branding/branding.module';
import { DocumentGenerationModule } from './document-generation/document-generation.module';

@Module({
  imports: [
    AdminDashboardModule,
    PartnerModule,
    OnboardingModule,
    BrandingModule,
    DocumentGenerationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
