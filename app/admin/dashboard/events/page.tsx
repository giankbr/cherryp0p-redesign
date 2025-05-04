import EventsManagement from '@/components/dashboard/event-management';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | Cherry Pop Admin',
  description: 'Manage events for Cherry Pop Festival',
};

export default function EventsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Events Management</h1>
        <p className="text-muted-foreground">Create and manage festival events and schedules</p>
      </div>
      <div className="bg-background rounded-lg p-6 border border-border">
        <EventsManagement />
      </div>
    </div>
  );
}
