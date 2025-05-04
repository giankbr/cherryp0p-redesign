import MediaLibrary from '@/components/dashboard/media-library';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media Library | Cherry Pop Admin',
  description: 'Manage your media assets for Cherry Pop Festival',
};

export default function MediaPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
        <p className="text-muted-foreground">Manage images and other assets for your festival website</p>
      </div>
      <div className="bg-background rounded-lg p-6 border border-border">
        <MediaLibrary />
      </div>
    </div>
  );
}
