import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminDashboardService {
  getMetrics() {
    return {
      totalPartners: 15,
      activePartners: 12,
      pendingOnboardings: 3,
      manualReviewCases: 1,
      documentsGeneratedLast24h: 8,
      lastUpdated: new Date().toISOString(),
      alerts: [
        {
          type: 'warning',
          message: 'Sistema funcionando normalmente. Dados simulados para demonstração.'
        }
      ]
    };
  }

  getSystemHealth() {
    return {
      status: 'healthy',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString(),
    };
  }

  getPartnerActivity() {
    return {
      recentSignups: [
        {
          id: 1,
          name: 'João Silva',
          company: 'Tech Solutions',
          status: 'active',
          createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        },
        {
          id: 2,
          name: 'Maria Santos',
          company: 'Digital Marketing Pro',
          status: 'pending',
          createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        }
      ],
      activeToday: 8,
      conversionRate: '85%'
    };
  }
}
