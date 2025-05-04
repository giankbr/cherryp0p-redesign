import SponsorsManagement from '@/components/dashboard/sponsor-management';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors | Cherry Pop Admin',
  description: 'Manage sponsors for Cherry Pop Festival',
};

export default function SponsorsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Sponsors Management</h1>
        <p className="text-muted-foreground">Manage festival sponsors and partnership information</p>
      </div>
      <div className="bg-background rounded-lg p-6 border border-border">
        <SponsorsManagement />
      </div>
    </div>
  );
}
