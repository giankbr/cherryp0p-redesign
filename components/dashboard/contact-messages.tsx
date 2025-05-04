'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Archive, ChevronLeft, ChevronRight, FilterX, Mail, Search, Star, Trash2 } from 'lucide-react';
import { useState } from 'react';

// Mock data for messages
const messages = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    subject: 'Ticket Inquiry',
    message: 'Hi, I wanted to ask about the VIP ticket package. Does it include early entry to the festival grounds?',
    date: '2023-06-15',
    read: true,
    category: 'tickets',
    starred: false,
    archived: false,
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'mchen@example.com',
    subject: 'Vendor Application',
    message: "Hello, I'm interested in being a food vendor at your festival. Could you please send me information about the application process?",
    date: '2023-06-14',
    read: false,
    category: 'vendors',
    starred: true,
    archived: false,
  },
  {
    id: 3,
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    subject: 'Accommodation Options',
    message: "Hi there, I'm traveling from abroad for the festival. Are there any recommended accommodations near the venue?",
    date: '2023-06-12',
    read: true,
    category: 'general',
    starred: false,
    archived: false,
  },
  {
    id: 4,
    name: 'David Kim',
    email: 'dkim@example.com',
    subject: 'Press Pass Request',
    message: "I'm a journalist for Music Monthly magazine and would like to request a press pass for the upcoming festival to cover the event.",
    date: '2023-06-10',
    read: false,
    category: 'press',
    starred: false,
    archived: false,
  },
  {
    id: 5,
    name: 'Olivia Martinez',
    email: 'omartinez@example.com',
    subject: 'Volunteer Opportunities',
    message: "I'd love to volunteer at the festival this year. Can you tell me how to apply and what positions are available?",
    date: '2023-06-09',
    read: true,
    category: 'volunteers',
    starred: true,
    archived: false,
  },
  {
    id: 6,
    name: 'James Taylor',
    email: 'jtaylor@example.com',
    subject: 'Accessibility Information',
    message: 'Could you provide information about accessibility options at the festival? I have mobility requirements and want to ensure I can enjoy the event.',
    date: '2023-06-08',
    read: true,
    category: 'general',
    starred: false,
    archived: true,
  },
  {
    id: 7,
    name: 'Sophia Lee',
    email: 's.lee@example.com',
    subject: 'Sponsorship Proposal',
    message: 'Our company is interested in sponsoring Cherry Pop Festival. Please let me know who I can contact to discuss sponsorship packages.',
    date: '2023-06-07',
    read: false,
    category: 'sponsors',
    starred: false,
    archived: false,
  },
];

export default function ContactMessages() {
  const [selectedTab, setSelectedTab] = useState('inbox');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<null | (typeof messages)[0]>(null);
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);
  const [replyText, setReplyText] = useState('');

  // Filter messages based on selected tab and search query
  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.message.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedTab === 'inbox') {
      return matchesSearch && !message.archived;
    } else if (selectedTab === 'archived') {
      return matchesSearch && message.archived;
    } else if (selectedTab === 'starred') {
      return matchesSearch && message.starred;
    }
    return matchesSearch;
  });

  const handleReply = () => {
    // In a real app, this would send the reply to an API
    alert(`Reply sent to: ${selectedMessage?.email}`);
    setReplyDialogOpen(false);
    setReplyText('');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-8" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <FilterX className="h-4 w-4" />
            Clear Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="inbox" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="inbox" className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            Inbox
            <Badge variant="secondary" className="ml-1">
              {messages.filter((m) => !m.archived).length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="starred" className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            Starred
          </TabsTrigger>
          <TabsTrigger value="archived" className="flex items-center gap-1">
            <Archive className="h-4 w-4" />
            Archived
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab}>
          <Card>
            <CardHeader className="px-6 py-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{selectedTab === 'inbox' ? 'Inbox' : selectedTab === 'starred' ? 'Starred Messages' : 'Archived Messages'}</CardTitle>
                <div className="text-sm text-muted-foreground">{filteredMessages.length} messages</div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {filteredMessages.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">From</TableHead>
                      <TableHead className="w-[300px]">Subject</TableHead>
                      <TableHead>Preview</TableHead>
                      <TableHead className="w-[150px]">Date</TableHead>
                      <TableHead className="w-[100px] text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMessages.map((message) => (
                      <TableRow key={message.id} className={`cursor-pointer ${!message.read ? 'font-medium' : ''}`} onClick={() => setSelectedMessage(message)}>
                        <TableCell className="font-medium">
                          {message.name}
                          <div className="text-xs text-muted-foreground">{message.email}</div>
                        </TableCell>
                        <TableCell>
                          {message.subject}
                          {message.starred && <Star className="h-4 w-4 inline ml-2 text-amber-500" />}
                        </TableCell>
                        <TableCell className="truncate max-w-[200px]">{message.message.substring(0, 60)}...</TableCell>
                        <TableCell>{message.date}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Toggle archive status
                            }}
                          >
                            {message.archived ? <Mail className="h-4 w-4" /> : <Archive className="h-4 w-4" />}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Delete message
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <Mail className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No messages found</h3>
                  <p className="text-muted-foreground">
                    {searchQuery
                      ? 'Try adjusting your search query'
                      : selectedTab === 'inbox'
                      ? 'Your inbox is empty'
                      : selectedTab === 'starred'
                      ? 'You have no starred messages'
                      : 'No archived messages'}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between p-4 border-t">
              <div className="text-sm text-muted-foreground">
                Showing {filteredMessages.length} of {messages.length} messages
              </div>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" disabled>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Message Details Dialog */}
      <Dialog open={selectedMessage !== null} onOpenChange={(open) => !open && setSelectedMessage(null)}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedMessage?.subject}</DialogTitle>
            <DialogDescription>
              From: {selectedMessage?.name} ({selectedMessage?.email})
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="border rounded-md p-4 bg-muted/30 whitespace-pre-wrap">{selectedMessage?.message}</div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedMessage(null)}>
              Close
            </Button>
            <Button onClick={() => setReplyDialogOpen(true)}>Reply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reply Dialog */}
      <Dialog open={replyDialogOpen} onOpenChange={setReplyDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Reply to: {selectedMessage?.subject}</DialogTitle>
            <DialogDescription>
              To: {selectedMessage?.name} ({selectedMessage?.email})
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea placeholder="Write your reply here..." className="min-h-[200px]" value={replyText} onChange={(e) => setReplyText(e.target.value)} />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setReplyDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleReply} disabled={replyText.trim() === ''}>
              Send Reply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
