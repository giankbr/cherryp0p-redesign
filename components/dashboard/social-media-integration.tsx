"use client"

import { useState } from "react"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  TwitterIcon as TikTok,
  LinkIcon,
  Edit,
  Trash2,
  Plus,
  X,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for social media accounts
const initialSocialAccounts = [
  {
    id: 1,
    platform: "instagram",
    username: "cherrypopfestival",
    url: "https://instagram.com/cherrypopfestival",
    active: true,
    followers: 12500,
    posts: 342,
  },
  {
    id: 2,
    platform: "twitter",
    username: "cherrypopfest",
    url: "https://twitter.com/cherrypopfest",
    active: true,
    followers: 8200,
    posts: 1240,
  },
  {
    id: 3,
    platform: "facebook",
    username: "Cherry Pop Festival",
    url: "https://facebook.com/cherrypopfestival",
    active: true,
    followers: 15300,
    posts: 520,
  },
  {
    id: 4,
    platform: "youtube",
    username: "Cherry Pop Festival",
    url: "https://youtube.com/c/cherrypopfestival",
    active: true,
    followers: 5600,
    posts: 78,
  },
  {
    id: 5,
    platform: "tiktok",
    username: "cherrypopfest",
    url: "https://tiktok.com/@cherrypopfest",
    active: true,
    followers: 22400,
    posts: 156,
  },
]

// Mock data for scheduled posts
const initialScheduledPosts = [
  {
    id: 1,
    content:
      "Get ready for an unforgettable weekend! Cherry Pop Festival lineup announcement coming tomorrow! 🍒🎵 #CherryPop2023",
    platforms: ["instagram", "twitter", "facebook"],
    scheduledFor: "2023-06-15T10:00:00",
    status: "scheduled",
    media: ["/placeholder.svg?height=300&width=300"],
  },
  {
    id: 2,
    content:
      "Tickets for Cherry Pop Festival are now on sale! Early bird tickets available for a limited time. Get yours now! 🎟️ #CherryPopTickets",
    platforms: ["instagram", "twitter", "facebook", "tiktok"],
    scheduledFor: "2023-06-18T12:00:00",
    status: "scheduled",
    media: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
  },
  {
    id: 3,
    content: "Check out our new merch collection! Available online and at the festival. 👕 #CherryPopMerch",
    platforms: ["instagram", "facebook"],
    scheduledFor: "2023-06-20T15:00:00",
    status: "draft",
    media: ["/placeholder.svg?height=300&width=300"],
  },
]

// Mock analytics data
const analyticsData = {
  engagement: {
    likes: 45280,
    comments: 12450,
    shares: 8320,
    growth: 12.5,
  },
  topPosts: [
    { id: 1, platform: "instagram", likes: 3240, comments: 542, shares: 126, content: "Lineup announcement post" },
    { id: 2, platform: "tiktok", likes: 12500, comments: 1840, shares: 3200, content: "Behind the scenes video" },
    { id: 3, platform: "twitter", likes: 1250, comments: 320, shares: 540, content: "Early bird tickets announcement" },
  ],
}

const getPlatformIcon = (platform: string, className = "h-5 w-5") => {
  switch (platform) {
    case "instagram":
      return <Instagram className={className} />
    case "twitter":
      return <Twitter className={className} />
    case "facebook":
      return <Facebook className={className} />
    case "youtube":
      return <Youtube className={className} />
    case "tiktok":
      return <TikTok className={className} />
    default:
      return <LinkIcon className={className} />
  }
}

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case "instagram":
      return "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
    case "twitter":
      return "bg-blue-500 text-white"
    case "facebook":
      return "bg-blue-700 text-white"
    case "youtube":
      return "bg-red-600 text-white"
    case "tiktok":
      return "bg-black text-white"
    default:
      return "bg-gray-500 text-white"
  }
}

export function SocialMediaIntegration() {
  const [socialAccounts, setSocialAccounts] = useState(initialSocialAccounts)
  const [scheduledPosts, setScheduledPosts] = useState(initialScheduledPosts)
  const [isAddingAccount, setIsAddingAccount] = useState(false)
  const [newAccount, setNewAccount] = useState({ platform: "", username: "", url: "" })
  const [isAddingPost, setIsAddingPost] = useState(false)
  const [newPost, setNewPost] = useState({
    content: "",
    platforms: [] as string[],
    scheduledFor: "",
    status: "draft",
    media: [] as string[],
  })
  const [editingPostId, setEditingPostId] = useState<number | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  const handleAddAccount = () => {
    if (newAccount.platform && newAccount.username && newAccount.url) {
      setSocialAccounts([
        ...socialAccounts,
        {
          id: socialAccounts.length + 1,
          ...newAccount,
          active: true,
          followers: 0,
          posts: 0,
        },
      ])
      setNewAccount({ platform: "", username: "", url: "" })
      setIsAddingAccount(false)
    }
  }

  const handleDeleteAccount = (id: number) => {
    setSocialAccounts(socialAccounts.filter((account) => account.id !== id))
  }

  const handleToggleAccountStatus = (id: number) => {
    setSocialAccounts(
      socialAccounts.map((account) => (account.id === id ? { ...account, active: !account.active } : account)),
    )
  }

  const handleAddPost = () => {
    if (newPost.content && newPost.platforms.length > 0 && newPost.scheduledFor) {
      setScheduledPosts([
        ...scheduledPosts,
        {
          id: scheduledPosts.length + 1,
          ...newPost,
        },
      ])
      setNewPost({
        content: "",
        platforms: [],
        scheduledFor: "",
        status: "draft",
        media: [],
      })
      setIsAddingPost(false)
    }
  }

  const handleUpdatePost = () => {
    if (editingPostId && newPost.content && newPost.platforms.length > 0 && newPost.scheduledFor) {
      setScheduledPosts(scheduledPosts.map((post) => (post.id === editingPostId ? { ...post, ...newPost } : post)))
      setNewPost({
        content: "",
        platforms: [],
        scheduledFor: "",
        status: "draft",
        media: [],
      })
      setEditingPostId(null)
    }
  }

  const handleEditPost = (post: any) => {
    setNewPost({
      content: post.content,
      platforms: post.platforms,
      scheduledFor: post.scheduledFor,
      status: post.status,
      media: post.media,
    })
    setEditingPostId(post.id)
    setIsAddingPost(true)
  }

  const handleDeletePost = (id: number) => {
    setScheduledPosts(scheduledPosts.filter((post) => post.id !== id))
  }

  const handleTogglePlatform = (platform: string) => {
    if (newPost.platforms.includes(platform)) {
      setNewPost({
        ...newPost,
        platforms: newPost.platforms.filter((p) => p !== platform),
      })
    } else {
      setNewPost({
        ...newPost,
        platforms: [...newPost.platforms, platform],
      })
    }
  }

  const handleRefreshAnalytics = () => {
    setRefreshing(true)
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Social Media Management</h1>
        <Button onClick={handleRefreshAnalytics} disabled={refreshing}>
          {refreshing ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <RefreshCw className="h-4 w-4 mr-2" />}
          Refresh Data
        </Button>
      </div>

      <Tabs defaultValue="accounts" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="accounts">Connected Accounts</TabsTrigger>
          <TabsTrigger value="posts">Scheduled Posts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Connected Accounts Tab */}
        <TabsContent value="accounts" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Connected Social Media Accounts</h2>
            <Button onClick={() => setIsAddingAccount(true)} variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Account
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialAccounts.map((account) => (
              <Card key={account.id} className="overflow-hidden">
                <CardHeader className={`${getPlatformColor(account.platform)} flex flex-row items-center gap-2`}>
                  {getPlatformIcon(account.platform, "h-6 w-6")}
                  <div>
                    <CardTitle className="text-lg">
                      {account.platform.charAt(0).toUpperCase() + account.platform.slice(1)}
                    </CardTitle>
                    <CardDescription className="text-white/80">@{account.username}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Switch
                        id={`account-status-${account.id}`}
                        checked={account.active}
                        onCheckedChange={() => handleToggleAccountStatus(account.id)}
                      />
                      <Label htmlFor={`account-status-${account.id}`}>{account.active ? "Active" : "Inactive"}</Label>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => handleDeleteAccount(account.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Followers</p>
                      <p className="font-medium">{account.followers.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Posts</p>
                      <p className="font-medium">{account.posts.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 py-2">
                  <a
                    href={account.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:underline flex items-center gap-1 w-full"
                  >
                    <LinkIcon className="h-3 w-3" />
                    View Profile
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Add Account Dialog */}
          <Dialog open={isAddingAccount} onOpenChange={setIsAddingAccount}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Social Media Account</DialogTitle>
                <DialogDescription>Connect a new social media account to manage from the dashboard.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="platform">Platform</Label>
                  <Select
                    value={newAccount.platform}
                    onValueChange={(value) => setNewAccount({ ...newAccount, platform: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="twitter">Twitter</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={newAccount.username}
                    onChange={(e) => setNewAccount({ ...newAccount, username: e.target.value })}
                    placeholder="Enter username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="url">Profile URL</Label>
                  <Input
                    id="url"
                    value={newAccount.url}
                    onChange={(e) => setNewAccount({ ...newAccount, url: e.target.value })}
                    placeholder="https://"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddingAccount(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddAccount}>Add Account</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>

        {/* Scheduled Posts Tab */}
        <TabsContent value="posts" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Scheduled Posts</h2>
            <Button
              onClick={() => {
                setIsAddingPost(true)
                setEditingPostId(null)
                setNewPost({
                  content: "",
                  platforms: [],
                  scheduledFor: "",
                  status: "draft",
                  media: [],
                })
              }}
              variant="outline"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </div>

          <div className="space-y-4">
            {scheduledPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        Post #{post.id}
                        <Badge variant={post.status === "scheduled" ? "default" : "outline"} className="ml-2">
                          {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                        </Badge>
                      </CardTitle>
                      <CardDescription>Scheduled for: {new Date(post.scheduledFor).toLocaleString()}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEditPost(post)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDeletePost(post.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{post.content}</p>

                  {post.media.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {post.media.map((media, index) => (
                        <div key={index} className="aspect-square bg-muted rounded-md overflow-hidden">
                          <img
                            src={media || "/placeholder.svg"}
                            alt={`Media ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {post.platforms.map((platform) => (
                      <Badge key={platform} variant="outline" className="flex items-center gap-1">
                        {getPlatformIcon(platform, "h-3 w-3")}
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Create/Edit Post Dialog */}
          <Dialog open={isAddingPost} onOpenChange={setIsAddingPost}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingPostId ? "Edit Post" : "Create New Post"}</DialogTitle>
                <DialogDescription>
                  {editingPostId
                    ? "Edit your social media post and update scheduling."
                    : "Create a new post to schedule across your social media platforms."}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="content">Post Content</Label>
                  <Textarea
                    id="content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder="Write your post content here..."
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground text-right">{newPost.content.length}/280 characters</p>
                </div>

                <div className="space-y-2">
                  <Label>Platforms</Label>
                  <div className="flex flex-wrap gap-2">
                    {socialAccounts
                      .filter((account) => account.active)
                      .map((account) => (
                        <Button
                          key={account.platform}
                          type="button"
                          variant={newPost.platforms.includes(account.platform) ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleTogglePlatform(account.platform)}
                          className="flex items-center gap-1"
                        >
                          {getPlatformIcon(account.platform, "h-4 w-4")}
                          {account.platform.charAt(0).toUpperCase() + account.platform.slice(1)}
                        </Button>
                      ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scheduledFor">Schedule Date & Time</Label>
                  <Input
                    id="scheduledFor"
                    type="datetime-local"
                    value={newPost.scheduledFor}
                    onChange={(e) => setNewPost({ ...newPost, scheduledFor: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Post Status</Label>
                  <Select value={newPost.status} onValueChange={(value) => setNewPost({ ...newPost, status: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Media (Mock)</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {newPost.media.map((media, index) => (
                      <div key={index} className="relative aspect-square bg-muted rounded-md overflow-hidden">
                        <img
                          src={media || "/placeholder.svg"}
                          alt={`Media ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-1 right-1 h-6 w-6"
                          onClick={() =>
                            setNewPost({
                              ...newPost,
                              media: newPost.media.filter((_, i) => i !== index),
                            })
                          }
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      className="aspect-square flex flex-col items-center justify-center"
                      onClick={() =>
                        setNewPost({
                          ...newPost,
                          media: [...newPost.media, "/placeholder.svg?height=300&width=300"],
                        })
                      }
                    >
                      <Plus className="h-6 w-6" />
                      <span className="text-xs mt-1">Add Media</span>
                    </Button>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddingPost(false)}>
                  Cancel
                </Button>
                <Button onClick={editingPostId ? handleUpdatePost : handleAddPost}>
                  {editingPostId ? "Update Post" : "Schedule Post"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {analyticsData.engagement.likes + analyticsData.engagement.comments + analyticsData.engagement.shares}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className={analyticsData.engagement.growth > 0 ? "text-green-500" : "text-red-500"}>
                    {analyticsData.engagement.growth > 0 ? "+" : ""}
                    {analyticsData.engagement.growth}%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Likes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{analyticsData.engagement.likes.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Across all platforms</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{analyticsData.engagement.comments.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Across all platforms</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Platform Performance</CardTitle>
              <CardDescription>Engagement metrics across different social media platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
                <p className="text-muted-foreground">Platform performance chart would be displayed here</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Posts</CardTitle>
              <CardDescription>Posts with the highest engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topPosts.map((post) => (
                  <div key={post.id} className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className={`p-2 rounded-full ${getPlatformColor(post.platform)}`}>
                      {getPlatformIcon(post.platform)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-1">{post.content}</p>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{post.likes.toLocaleString()} likes</span>
                        <span>{post.comments.toLocaleString()} comments</span>
                        <span>{post.shares.toLocaleString()} shares</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Alert>
            <AlertTitle>Connect Google Analytics</AlertTitle>
            <AlertDescription>
              For more detailed analytics, connect your Google Analytics account to track website traffic from social
              media campaigns.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  )
}
