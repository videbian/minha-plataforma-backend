import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { BrandingService } from './branding.service';

@Controller('branding')
export class BrandingController {
  constructor(private readonly brandingService: BrandingService) {}

  @Get(':partnerId')
  getBrandingConfig(@Param('partnerId') partnerId: string) {
    return this.brandingService.getBrandingConfig(+partnerId);
  }

  @Patch(':partnerId')
  updateBrandingConfig(@Param('partnerId') partnerId: string, @Body() updateData: any) {
    return this.brandingService.updateBrandingConfig(+partnerId, updateData);
  }

  @Post(':partnerId/qr-code')
  generateQRCode(@Param('partnerId') partnerId: string, @Body() qrData: any) {
    return this.brandingService.generateQRCode(+partnerId, qrData);
  }

  @Post(':partnerId/shareable-link')
  generateShareableLink(@Param('partnerId') partnerId: string, @Body() linkData: any) {
    return this.brandingService.generateShareableLink(+partnerId, linkData);
  }
}
