import TicketsManagement from '@/components/dashboard/ticket-management';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tickets | Cherry Pop Admin',
  description: 'Manage ticket sales for Cherry Pop Festival',
};

export default function TicketsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Tickets Management</h1>
        <p className="text-muted-foreground">Manage ticket types, pricing, and sales for the festival</p>
      </div>
      <div className="bg-background rounded-lg p-6 border border-border">
        <TicketsManagement />
      </div>
    </div>
  );
}
