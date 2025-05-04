import ContactMessages from '@/components/dashboard/contact-messages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Messages | Cherry Pop Admin',
  description: 'Manage contact and inquiry messages for Cherry Pop Festival',
};

export default function MessagesPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Contact Messages</h1>
        <p className="text-muted-foreground">Manage and respond to visitor inquiries and messages</p>
      </div>
      <div className="bg-background rounded-lg p-6 border border-border">
        <ContactMessages />
      </div>
    </div>
  );
}
