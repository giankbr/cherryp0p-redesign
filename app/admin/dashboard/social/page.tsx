import SocialIntegration from '@/components/dashboard/social-integration';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media | Cherry Pop Admin',
  description: 'Manage social media accounts for Cherry Pop Festival',
};

export default function SocialPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Social Media Management</h1>
        <p className="text-muted-foreground">Connect and manage your festival's social media accounts</p>
      </div>
      <div className="bg-background rounded-lg p-6 border border-border">
        <SocialIntegration />
      </div>
    </div>
  );
}
