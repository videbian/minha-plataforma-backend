import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminDashboardService {
  getMetrics() {
    return {
      totalPartners: 15,
      activePartners: 12,
      pendingPartners: 3,
      totalRevenue: 125000,
      monthlyGrowth: 8.5
    };
  }

  getRecentActivities() {
    return [
      {
        id: 1,
        type: 'partner_registered',
        description: 'Novo parceiro Tech Solutions se registrou',
        timestamp: new Date().toISOString()
      },
      {
        id: 2,
        type: 'document_generated',
        description: 'Contrato gerado para Digital Marketing Pro',
        timestamp: new Date(Date.now() - 3600000).toISOString()
      }
    ];
  }

  getSystemStatus() {
    return {
      status: 'healthy',
      uptime: '99.9%',
      lastUpdate: new Date().toISOString(),
      services: {
        database: 'online',
        api: 'online',
        storage: 'online'
      }
    };
  }
}
