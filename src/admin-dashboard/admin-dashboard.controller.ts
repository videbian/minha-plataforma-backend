import { Controller, Get } from '@nestjs/common';
import { AdminDashboardService } from './admin-dashboard.service';

@Controller('admin-dashboard')
export class AdminDashboardController {
  constructor(private readonly adminDashboardService: AdminDashboardService) {}

  @Get('metrics')
  getMetrics() {
    return this.adminDashboardService.getMetrics();
  }

  @Get('recent-activities')
  getRecentActivities() {
    return this.adminDashboardService.getRecentActivities();
  }

  @Get('system-status')
  getSystemStatus() {
    return this.adminDashboardService.getSystemStatus();
  }
}
