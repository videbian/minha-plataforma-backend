{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Injectable, NotFoundException \} from '@nestjs/common';\
import \{ PartnerService \} from '../partner/partner.service';\
\
@Injectable()\
export class BrandingService \{\
  constructor(private partnerService: PartnerService) \{\}\
\
  async getBrandingConfig(partnerId: number) \{\
    const partner = await this.partnerService.findOne(partnerId);\
    return partner.brandingConfig || this.getDefaultBrandingConfig();\
  \}\
\
  async updateBrandingConfig(partnerId: number, brandingConfig: any) \{\
    const partner = await this.partnerService.findOne(partnerId);\
    \
    // Validate branding config\
    const validatedConfig = this.validateBrandingConfig(brandingConfig);\
    \
    await this.partnerService.update(partnerId, \{\
      brandingConfig: validatedConfig,\
    \});\
\
    return validatedConfig;\
  \}\
\
  async generateQRCode(partnerId: number, data: string): Promise<string> \{\
    // In a real implementation, this would generate an actual QR code\
    // For now, we'll return a mock URL\
    const partner = await this.partnerService.findOne(partnerId);\
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=$\{encodeURIComponent(data )\}`;\
    return qrCodeUrl;\
  \}\
\
  async generateShareableLink(partnerId: number, type: string = 'onboarding'): Promise<string> \{\
    const partner = await this.partnerService.findOne(partnerId);\
    const baseUrl = process.env.FRONTEND_URL || 'http://localhost:5173';\
    \
    // Generate a unique link for the partner\
    const shareableLink = `$\{baseUrl\}/$\{type\}?partner=$\{partnerId\}&ref=$\{this.generateReferenceCode(partnerId )\}`;\
    return shareableLink;\
  \}\
\
  private getDefaultBrandingConfig() \{\
    return \{\
      logoUrl: '',\
      primaryColor: '#007bff',\
      secondaryColor: '#6c757d',\
      welcomeMessage: 'Bem-vindo ao nosso servi\'e7o!',\
      companyName: 'Sua Empresa',\
      contactEmail: 'contato@suaempresa.com',\
      theme: 'light',\
    \};\
  \}\
\
  private validateBrandingConfig(config: any) \{\
    const defaultConfig = this.getDefaultBrandingConfig();\
    \
    return \{\
      logoUrl: config.logoUrl || defaultConfig.logoUrl,\
      primaryColor: this.isValidColor(config.primaryColor) ? config.primaryColor : defaultConfig.primaryColor,\
      secondaryColor: this.isValidColor(config.secondaryColor) ? config.secondaryColor : defaultConfig.secondaryColor,\
      welcomeMessage: config.welcomeMessage || defaultConfig.welcomeMessage,\
      companyName: config.companyName || defaultConfig.companyName,\
      contactEmail: this.isValidEmail(config.contactEmail) ? config.contactEmail : defaultConfig.contactEmail,\
      theme: ['light', 'dark'].includes(config.theme) ? config.theme : defaultConfig.theme,\
    \};\
  \}\
\
  private isValidColor(color: string): boolean \{\
    // Simple hex color validation\
    return /^#([A-Fa-f0-9]\{6\}|[A-Fa-f0-9]\{3\})$/.test(color);\
  \}\
\
  private isValidEmail(email: string): boolean \{\
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\
    return emailRegex.test(email);\
  \}\
\
  private generateReferenceCode(partnerId: number): string \{\
    // Generate a simple reference code\
    const timestamp = Date.now().toString(36);\
    const random = Math.random().toString(36).substr(2, 5);\
    return `$\{partnerId\}-$\{timestamp\}-$\{random\}`;\
  \}\
\}\
}