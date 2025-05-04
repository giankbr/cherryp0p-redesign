import AnalyticsDashboard from '@/components/dashboard/analytics-dashboard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics | Cherry Pop Admin',
  description: 'View visitor statistics for Cherry Pop Festival',
};

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Track visitor statistics and engagement metrics</p>
      </div>
      <div className="bg-background rounded-lg p-6 border border-border">
        <AnalyticsDashboard />
      </div>
    </div>
  );
}
