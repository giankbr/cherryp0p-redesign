'use client';

import type React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Filter, Search } from 'lucide-react';
import { useState } from 'react';

// Mock data for contact submissions
const mockSubmissions = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    subject: 'Ticket Inquiry',
    message: "I'm interested in purchasing VIP tickets for the festival. Do they include backstage access?",
    date: new Date(2023, 5, 20),
    status: 'unread',
    category: 'tickets',
    starred: false,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    subject: 'Vendor Application',
    message: "I'd like to apply as a food vendor for the upcoming festival. Could you please send me the application form and requirements?",
    date: new Date(2023, 5, 18),
    status: 'read',
    category: 'vendors',
    starred: true,
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike.wilson@example.com',
    subject: 'Accessibility Information',
    message: "I'm planning to attend with my friend who uses a wheelchair. Could you provide information about accessibility at the venue?",
    date: new Date(2023, 5, 15),
    status: 'replied',
    category: 'general',
    starred: false,
  },
  {
    id: 4,
    name: 'Emma Davis',
    email: 'emma.d@example.com',
    subject: 'Press Pass Request',
    message: "I'm a journalist from Music Monthly magazine and would like to request a press pass for the festival to cover the event.",
    date: new Date(2023, 5, 12),
    status: 'read',
    category: 'press',
    starred: true,
  },
  {
    id: 5,
    name: 'Alex Thompson',
    email: 'alex.t@example.com',
    subject: 'Lineup Question',
    message: "I saw that Band X was initially announced but they're not on the current lineup. Have they canceled their appearance?",
    date: new Date(2023, 5, 10),
    status: 'replied',
    category: 'lineup',
    starred: false,
  },
  {
    id: 6,
    name: 'Lisa Brown',
    email: 'lisa.brown@example.com',
    subject: 'Sponsorship Opportunity',
    message: 'Our company is interested in sponsoring the festival. Could someone from your sponsorship team contact me to discuss options?',
    date: new Date(2023, 5, 8),
    status: 'archived',
    category: 'sponsorship',
    starred: false,
  },
  {
    id: 7,
    name: 'David Chen',
    email: 'david.c@example.com',
    subject: 'Refund Request',
    message: 'I purchased tickets but can no longer attend due to a medical emergency. Is it possible to get a refund or transfer my tickets?',
    date: new Date(2023, 5, 5),
    status: 'unread',
    category: 'tickets',
    starred: false,
  },
];

export default function ContactSubmissions() {
  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(null);
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);

  // Filter submissions based on tab and search query
  const filteredSubmissions = mockSubmissions.filter((submission) => {
    const matchesTab =
      selectedTab === 'all' ||
      (selectedTab === 'starred' && submission.starred) ||
      (selectedTab === 'unread' && submission.status === 'unread') ||
      selectedTab === submission.status ||
      selectedTab === submission.category;

    const matchesSearch =
      submission.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.message.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const toggleItemSelection = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === filteredSubmissions.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredSubmissions.map((item) => item.id));
    }
  };

  const toggleStar = (id: number, event: React.MouseEvent) => {
    event.stopPropagation();
    // In a real app, this would update the starred status in the database
    console.log(`Toggle star for submission ${id}`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'unread':
        return <Badge variant="secondary">Unread</Badge>;
      case 'read':
        return <Badge variant="outline">Read</Badge>;
      case 'replied':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900">Replied</Badge>;
      case 'archived':
        return (
          <Badge variant="outline" className="text-muted-foreground">
            Archived
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-8" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="unread">Unread First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 space-y-4">
          <Tabs defaultValue="all" orientation="vertical" onValueChange={setSelectedTab}>
            <TabsList className="flex flex-col h-auto w-full bg-transparent space-y-1">
              <TabsTrigger value="all" className="justify-start">
                All Messages
                <span className="ml-auto bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">{mockSubmissions.length}</span>
              </TabsTrigger>
              <TabsTrigger value="unread" className="justify-start">
                Unread
                <span className="ml-auto bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">{mockSubmissions.filter((s) => s.status === 'unread').length}</span>
              </TabsTrigger>
              <TabsTrigger value="starred" className="justify-start">
                Starred
                <span className="ml-auto bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">{mockSubmissions.filter((s) => s.starred).length}</span>
              </TabsTrigger>
              <TabsTrigger value="replied" className="justify-start">
                Replied
                <span className="ml-auto bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">{mockSubmissions.filter((s) => s.status === 'replied').length}</span>
              </TabsTrigger>
              <TabsTrigger value="archived" className="justify-start">
                Archived
                <span className="ml-auto bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">{mockSubmissions.filter((s) => s.status === 'archived').length}</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="pt-4 border-t">
            <h3 className="mb-2 text-sm font-medium">Categories</h3>
            <Tabs defaultValue="all" orientation="vertical" onValueChange={setSelectedTab}>
              <TabsList className="flex flex-col h-auto w-full bg-transparent space-y-1">
                <TabsTrigger value="tickets" className="justify-start">
                  Tickets
                  <span className="ml-auto bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">{mockSubmissions.filter((s) => s.category === 'tickets').length}</span>
                </TabsTrigger>
                <TabsTrigger value="lineup" className="justify-start">
                  Lineup
                  <span className="ml-auto bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">{mockSubmissions.filter((s) => s.category === 'lineup').length}</span>
                </TabsTrigger>
                <TabsTrigger value="vendors" className="justify-start">
                  Vendors
                  <span className="ml-auto bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">{mockSubmissions.filter((s) => s.category === 'vendors').length}</span>
                </TabsTrigger>
                <TabsTrigger value="press" className="justify-start">
                  Press
                  <span className="ml-auto bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">{mockSubmissions.filter((s) => s.category === 'press').length}</span>
                </TabsTrigger>
                <TabsTrigger value="sponsorship" className="justify-start">
                  Sponsorship
                  <span className="ml-auto bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">{mockSubmissions.filter((s) => s.category === 'sponsorship').length}</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" checked={selectedItems.length === filteredSubmissions.length && filteredSubmissions.length > 0} onChange={toggleSelectAll} className="rounded" />
              <span className="text-sm text-muted-foreground">
                {selectedItems.length} of {filteredSubmissions.length} selected
              </span>
            </div>
            {selectedItems.length > 0 && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Mark as Read
                </Button>
                <Button variant="outline" size="sm">
                  Archive
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </div>
            )}
          </div>

          <div className="space-y-2">
            {filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${selectedSubmission === submission.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'} ${
                  submission.status === 'unread' ? 'bg-blue-50 dark:bg-blue-950/20' : ''
                }`}
                onClick={() => setSelectedSubmission(submission.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(submission.id)}
                      onChange={() => toggleItemSelection(submission.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-1 rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium truncate">{submission.name}</h3>
                        {getStatusBadge(submission.status)}
                        {submission.starred && <span className="text-yellow-500">★</span>}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{submission.email}</p>
                      <p className="font-medium text-sm mb-2">{submission.subject}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">{submission.message}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span>{submission.date.toLocaleDateString()}</span>
                        <span className="capitalize">{submission.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="ghost" size="sm" onClick={(e) => toggleStar(submission.id, e)} className="text-muted-foreground hover:text-yellow-500">
                      {submission.starred ? '★' : '☆'}
                    </Button>
                    <Button variant="outline" size="sm">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSubmissions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No messages found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
