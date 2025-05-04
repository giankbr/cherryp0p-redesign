'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileAudioIcon as AudioIcon, DownloadIcon, FileIcon, FilterIcon, FolderIcon, ImageIcon, PlusIcon, SearchIcon, TrashIcon, VideoIcon } from 'lucide-react';
import { useState } from 'react';

// Mock data for media items
const mockMediaItems = [
  {
    id: 1,
    name: 'hero-banner.jpg',
    type: 'image',
    size: '1.2 MB',
    date: '2023-05-15',
    url: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 2,
    name: 'artist-profile.jpg',
    type: 'image',
    size: '0.8 MB',
    date: '2023-05-14',
    url: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 3,
    name: 'lineup-poster.jpg',
    type: 'image',
    size: '2.1 MB',
    date: '2023-05-13',
    url: '/placeholder.svg?height=200&width=300',
  },
  { id: 4, name: 'festival-map.pdf', type: 'file', size: '0.5 MB', date: '2023-05-12', url: '' },
  { id: 5, name: 'promo-video.mp4', type: 'video', size: '15.7 MB', date: '2023-05-11', url: '' },
  { id: 6, name: 'artist-interview.mp3', type: 'audio', size: '5.3 MB', date: '2023-05-10', url: '' },
  {
    id: 7,
    name: 'stage-photo.jpg',
    type: 'image',
    size: '1.5 MB',
    date: '2023-05-09',
    url: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 8,
    name: 'crowd-shot.jpg',
    type: 'image',
    size: '1.8 MB',
    date: '2023-05-08',
    url: '/placeholder.svg?height=200&width=300',
  },
  { id: 9, name: 'sponsor-logos.zip', type: 'file', size: '4.2 MB', date: '2023-05-07', url: '' },
  { id: 10, name: 'event-schedule.pdf', type: 'file', size: '0.3 MB', date: '2023-05-06', url: '' },
  { id: 11, name: 'backstage-footage.mp4', type: 'video', size: '22.5 MB', date: '2023-05-05', url: '' },
  { id: 12, name: 'dj-set.mp3', type: 'audio', size: '8.1 MB', date: '2023-05-04', url: '' },
];

// Mock folders
const mockFolders = [
  { id: 1, name: 'Images', count: 42 },
  { id: 2, name: 'Videos', count: 15 },
  { id: 3, name: 'Documents', count: 23 },
  { id: 4, name: 'Audio', count: 8 },
];

// Media Item Type
type MediaItem = {
  id: number;
  name: string;
  type: string;
  size: string;
  date: string;
  url: string;
};

// Folder Type
type Folder = {
  id: number;
  name: string;
  count: number;
};

// File Icon Component
const FileTypeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'image':
      return <ImageIcon className="h-6 w-6 text-blue-500" />;
    case 'video':
      return <VideoIcon className="h-6 w-6 text-purple-500" />;
    case 'audio':
      return <AudioIcon className="h-6 w-6 text-green-500" />;
    default:
      return <FileIcon className="h-6 w-6 text-gray-500" />;
  }
};

// Media Card Component
const MediaCard = ({ item, isSelected, onSelect }: { item: MediaItem; isSelected: boolean; onSelect: (id: number) => void }) => {
  return (
    <Card key={item.id} className={`overflow-hidden cursor-pointer transition-all ${isSelected ? 'ring-2 ring-red-500' : ''}`} onClick={() => onSelect(item.id)}>
      {item.type === 'image' ? (
        <div className="relative h-36 bg-muted">
          <img src={item.url || '/placeholder.svg'} alt={item.name} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="h-36 flex items-center justify-center bg-muted">
          <FileTypeIcon type={item.type} />
        </div>
      )}
      <CardContent className="p-3">
        <div className="flex justify-between items-start">
          <div className="truncate max-w-[80%]">
            <p className="font-medium truncate text-sm">{item.name}</p>
            <p className="text-xs text-muted-foreground">
              {item.size} • {item.date}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                <span className="sr-only">Open menu</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                  <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <DownloadIcon className="h-4 w-4 mr-2" /> Download
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                <TrashIcon className="h-4 w-4 mr-2" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

// Folder Card Component
const FolderCard = ({ folder }: { folder: Folder }) => {
  return (
    <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
      <CardContent className="p-4 flex items-center gap-3">
        <FolderIcon className="h-10 w-10 text-amber-500" />
        <div>
          <h3 className="font-medium">{folder.name}</h3>
          <p className="text-sm text-muted-foreground">{folder.count} items</p>
        </div>
      </CardContent>
    </Card>
  );
};

// Upload Dialog Component
const UploadDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Upload Media</DialogTitle>
        <DialogDescription>Upload images, videos, audio, or documents to your media library.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="border-2 border-dashed rounded-lg p-10 text-center">
          <div className="flex flex-col items-center gap-2">
            <PlusIcon className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Drag and drop files here or click to browse</p>
            <Input id="file-upload" type="file" className="hidden" multiple />
            <Label htmlFor="file-upload" className="bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2 text-sm cursor-pointer">
              Select Files
            </Label>
          </div>
        </div>
      </div>
      <DialogFooter className="sm:justify-end">
        <Button variant="outline" onClick={() => onOpenChange(false)}>
          Cancel
        </Button>
        <Button className="bg-red-600 hover:bg-red-700 text-white">Upload</Button>
      </DialogFooter>
    </DialogContent>
  );
};

// Empty State Component
const EmptyState = ({ searchQuery }: { searchQuery: string }) => {
  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-4">
        <ImageIcon className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium">No files found</h3>
      <p className="text-muted-foreground">{searchQuery ? 'Try a different search term' : 'Upload some files to get started'}</p>
    </div>
  );
};

export default function MediaLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('all');
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // Filter media items based on search query and selected tab
  const filteredItems = mockMediaItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = selectedTab === 'all' || item.type === selectedTab;
    return matchesSearch && matchesTab;
  });

  const toggleItemSelection = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleDeleteSelected = () => {
    // In a real app, this would call an API to delete the selected items
    alert(`Deleting ${selectedItems.length} items`);
    setSelectedItems([]);
  };

  return (
    <div className="space-y-6">
      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="relative w-full md:w-96">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search media files..." className="pl-8" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <FilterIcon className="h-4 w-4" />
            Filter
          </Button>
          <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <PlusIcon className="h-4 w-4 mr-1" /> Upload
              </Button>
            </DialogTrigger>
            <UploadDialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen} />
          </Dialog>
        </div>
      </div>

      {/* Selection Actions */}
      {selectedItems.length > 0 && (
        <div className="flex items-center justify-between p-3 bg-muted rounded-md">
          <span className="text-sm font-medium">{selectedItems.length} items selected</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-1" /> Download
            </Button>
            <Button variant="destructive" size="sm" onClick={handleDeleteSelected}>
              <TrashIcon className="h-4 w-4 mr-1" /> Delete
            </Button>
          </div>
        </div>
      )}

      {/* Content Tabs */}
      <Tabs defaultValue="all" onValueChange={setSelectedTab} className="w-full">
        <TabsList className="mb-4 w-full justify-start">
          <TabsTrigger value="all">All Files</TabsTrigger>
          <TabsTrigger value="image">Images</TabsTrigger>
          <TabsTrigger value="video">Videos</TabsTrigger>
          <TabsTrigger value="audio">Audio</TabsTrigger>
          <TabsTrigger value="file">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="space-y-6">
          {/* Folders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockFolders.map((folder) => (
              <FolderCard key={folder.id} folder={folder} />
            ))}
          </div>

          {/* Media Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredItems.map((item) => (
              <MediaCard key={item.id} item={item} isSelected={selectedItems.includes(item.id)} onSelect={toggleItemSelection} />
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && <EmptyState searchQuery={searchQuery} />}
        </TabsContent>
      </Tabs>
    </div>
  );
}
