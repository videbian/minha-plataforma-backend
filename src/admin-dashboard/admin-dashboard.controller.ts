import { Controller, Get } from '@nestjs/common';
import { AdminDashboardService } from './admin-dashboard.service';

@Controller('admin-dashboard')
export class AdminDashboardController {
  constructor(private readonly adminDashboardService: AdminDashboardService) {}

  @Get('metrics')
  getMetrics() {
    return this.adminDashboardService.getMetrics();
  }

  @Get('health')
  getHealth() {
    return this.adminDashboardService.getSystemHealth();
  }

  @Get('partner-activity')
  getPartnerActivity() {
    return this.adminDashboardService.getPartnerActivity();
  }
}
