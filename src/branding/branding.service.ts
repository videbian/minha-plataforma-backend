import { Injectable } from '@nestjs/common';

@Injectable()
export class BrandingService {
  private brandingConfigs = new Map([
    [1, {
      partnerId: 1,
      logoUrl: 'https://via.placeholder.com/200x80/0066cc/ffffff?text=Tech+Solutions',
      primaryColor: '#0066cc',
      secondaryColor: '#004499',
      welcomeMessage: 'Bem-vindo à Tech Solutions',
      companyName: 'Tech Solutions',
      contactEmail: 'contato@techsolutions.com',
      theme: 'light'
    }],
    [2, {
      partnerId: 2,
      logoUrl: 'https://via.placeholder.com/200x80/cc6600/ffffff?text=Digital+Marketing',
      primaryColor: '#cc6600',
      secondaryColor: '#994400',
      welcomeMessage: 'Bem-vindo à Digital Marketing Pro',
      companyName: 'Digital Marketing Pro',
      contactEmail: 'contato@digitalmarketing.com',
      theme: 'light'
    }]
  ] );

  getBrandingConfig(partnerId: number) {
    const config = this.brandingConfigs.get(partnerId);
    if (!config) {
      // Return default config for new partners
      return {
        partnerId,
        logoUrl: 'https://via.placeholder.com/200x80/666666/ffffff?text=Logo',
        primaryColor: '#007bff',
        secondaryColor: '#0056b3',
        welcomeMessage: 'Bem-vindo à nossa plataforma',
        companyName: 'Sua Empresa',
        contactEmail: 'contato@suaempresa.com',
        theme: 'light'
      };
    }
    return config;
  }

  updateBrandingConfig(partnerId: number, updateData: any ) {
    const currentConfig = this.getBrandingConfig(partnerId);
    const updatedConfig = { ...currentConfig, ...updateData, partnerId };
    this.brandingConfigs.set(partnerId, updatedConfig);
    return updatedConfig;
  }

  generateQRCode(partnerId: number, qrData: any) {
    // Simular geração de QR Code
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData.data )}`;
    
    return {
      partnerId,
      qrCodeData: qrData.data,
      documentUrl: qrCodeUrl,
      generatedAt: new Date().toISOString()
    };
  }

  generateShareableLink(partnerId: number, linkData: any) {
    // Simular geração de link compartilhável
    const baseUrl = 'https://minha-plataforma-frontend-bc67swyd8-vinicius-debians-projects.vercel.app';
    const shareableLink = `${baseUrl}/${linkData.type}?partnerId=${partnerId}&ref=shared`;
    
    return shareableLink;
  }
}
