import { Controller, Post, Body } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';

@Controller('onboarding')
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  @Post('process-step')
  processStep(@Body() stepData: any) {
    return this.onboardingService.processStep(stepData);
  }

  @Post('start')
  startOnboarding(@Body() initialData: any) {
    return this.onboardingService.startOnboarding(initialData);
  }
}
