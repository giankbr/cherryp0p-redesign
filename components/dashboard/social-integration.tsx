'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Check, Facebook, Instagram, Twitter, X, Youtube } from 'lucide-react';
import { useState } from 'react';

type SocialPlatform = {
  name: string;
  icon: React.ReactNode;
  connected: boolean;
  username: string;
};

export default function SocialIntegration() {
  const [socialAccounts, setSocialAccounts] = useState<SocialPlatform[]>([
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      connected: true,
      username: '@cherrypopfest',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      connected: true,
      username: 'CherryPop Festival',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      connected: false,
      username: '',
    },
    {
      name: 'YouTube',
      icon: <Youtube className="h-5 w-5" />,
      connected: true,
      username: 'CherryPop Official',
    },
  ]);

  const [autoPost, setAutoPost] = useState(true);

  const toggleConnection = (index: number) => {
    const updatedAccounts = [...socialAccounts];
    updatedAccounts[index].connected = !updatedAccounts[index].connected;
    setSocialAccounts(updatedAccounts);
  };

  const updateUsername = (index: number, value: string) => {
    const updatedAccounts = [...socialAccounts];
    updatedAccounts[index].username = value;
    setSocialAccounts(updatedAccounts);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Social Media Integration</CardTitle>
          <CardDescription>Connect your social media accounts to share content across platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {socialAccounts.map((account, index) => (
              <div key={account.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${account.connected ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>{account.icon}</div>
                  <div>
                    <p className="font-medium">{account.name}</p>
                    {account.connected && <p className="text-sm text-muted-foreground">{account.username}</p>}
                  </div>
                </div>
                {account.connected ? (
                  <Button variant="outline" size="sm" onClick={() => toggleConnection(index)}>
                    <X className="h-4 w-4 mr-1" />
                    Disconnect
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Input placeholder="Username" value={account.username} onChange={(e) => updateUsername(index, e.target.value)} className="w-40" />
                    <Button variant="outline" size="sm" onClick={() => toggleConnection(index)}>
                      <Check className="h-4 w-4 mr-1" />
                      Connect
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Auto-posting Settings</CardTitle>
          <CardDescription>Configure how content is shared to your social media accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-post">Auto-post new content</Label>
                <p className="text-sm text-muted-foreground">Automatically share new articles and events to connected platforms</p>
              </div>
              <Switch id="auto-post" checked={autoPost} onCheckedChange={setAutoPost} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
