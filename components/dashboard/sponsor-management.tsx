"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Plus, Pencil, Trash2, Link } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for sponsors
const mockSponsors = [
  {
    id: 1,
    name: "TechCorp",
    level: "platinum",
    logo: "/placeholder.svg?height=80&width=200",
    website: "https://techcorp.example",
    contactName: "John Smith",
    contactEmail: "john@techcorp.example",
    amount: 50000000,
    status: "active",
  },
  {
    id: 2,
    name: "MusicStream",
    level: "gold",
    logo: "/placeholder.svg?height=80&width=200",
    website: "https://musicstream.example",
    contactName: "Sarah Johnson",
    contactEmail: "sarah@musicstream.example",
    amount: 25000000,
    status: "active",
  },
  {
    id: 3,
    name: "SoundGear",
    level: "silver",
    logo: "/placeholder.svg?height=80&width=200",
    website: "https://soundgear.example",
    contactName: "Mike Wilson",
    contactEmail: "mike@soundgear.example",
    amount: 15000000,
    status: "active",
  },
  {
    id: 4,
    name: "BeverageCo",
    level: "gold",
    logo: "/placeholder.svg?height=80&width=200",
    website: "https://beverageco.example",
    contactName: "Lisa Brown",
    contactEmail: "lisa@beverageco.example",
    amount: 25000000,
    status: "active",
  },
  {
    id: 5,
    name: "LocalBank",
    level: "silver",
    logo: "/placeholder.svg?height=80&width=200",
    website: "https://localbank.example",
    contactName: "David Chen",
    contactEmail: "david@localbank.example",
    amount: 15000000,
    status: "pending",
  },
  {
    id: 6,
    name: "FashionBrand",
    level: "bronze",
    logo: "/placeholder.svg?height=80&width=200",
    website: "https://fashionbrand.example",
    contactName: "Emma Davis",
    contactEmail: "emma@fashionbrand.example",
    amount: 7500000,
    status: "active",
  },
]

// Sponsor levels with their benefits
const sponsorLevels = [
  {
    name: "platinum",
    displayName: "Platinum",
    price: 50000000,
    benefits: [
      "Main stage branding",
      "VIP area naming rights",
      "Logo on all promotional materials",
      "10 VIP tickets",
      "Dedicated social media posts",
      "Booth at prime location",
      "Speaking opportunity",
    ],
  },
  {
    name: "gold",
    displayName: "Gold",
    price: 25000000,
    benefits: [
      "Secondary stage branding",
      "Logo on promotional materials",
      "6 VIP tickets",
      "Social media mentions",
      "Booth at festival",
    ],
  },
  {
    name: "silver",
    displayName: "Silver",
    price: 15000000,
    benefits: ["Logo on website and program", "4 VIP tickets", "Social media mention", "Small booth at festival"],
  },
  {
    name: "bronze",
    displayName: "Bronze",
    price: 7500000,
    benefits: ["Logo on website", "2 VIP tickets", "Mentioned in program"],
  },
]

export default function SponsorManagement() {
  const [isAddSponsorDialogOpen, setIsAddSponsorDialogOpen] = useState(false)
  const [selectedSponsor, setSelectedSponsor] = useState<number | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  // Calculate total sponsorship amount
  const totalSponsorship = mockSponsors
    .filter((sponsor) => sponsor.status === "active")
    .reduce((sum, sponsor) => sum + sponsor.amount, 0)

  return (
    <div className="space-y-6">
      <Tabs defaultValue="sponsors">
        <TabsList>
          <TabsTrigger value="sponsors">Sponsors</TabsTrigger>
          <TabsTrigger value="packages">Sponsorship Packages</TabsTrigger>
        </TabsList>

        <TabsContent value="sponsors" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">All Sponsors</h2>
              <p className="text-muted-foreground">Total sponsorship: Rp {totalSponsorship.toLocaleString()}</p>
            </div>
            <Dialog open={isAddSponsorDialogOpen} onOpenChange={setIsAddSponsorDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Plus className="h-4 w-4 mr-1" /> Add Sponsor
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Add New Sponsor</DialogTitle>
                  <DialogDescription>Add a new sponsor to your festival.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="sponsor-name">Sponsor Name</Label>
                    <Input id="sponsor-name" placeholder="Enter sponsor name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="sponsor-level">Sponsorship Level</Label>
                    <Select onValueChange={setSelectedLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        {sponsorLevels.map((level) => (
                          <SelectItem key={level.name} value={level.name}>
                            {level.displayName} - Rp {level.price.toLocaleString()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="contact-name">Contact Person</Label>
                      <Input id="contact-name" placeholder="Enter contact name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="contact-email">Contact Email</Label>
                      <Input id="contact-email" type="email" placeholder="Enter contact email" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" placeholder="https://" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="logo">Logo URL</Label>
                    <Input id="logo" placeholder="Upload or enter logo URL" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="active" defaultChecked />
                    <Label htmlFor="active">Mark as active sponsor</Label>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" placeholder="Additional notes about this sponsor" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddSponsorDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Save Sponsor</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockSponsors.map((sponsor) => (
              <Card key={sponsor.id} className={sponsor.status === "pending" ? "opacity-70" : ""}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{sponsor.name}</CardTitle>
                      <CardDescription>
                        {sponsorLevels.find((l) => l.name === sponsor.level)?.displayName} Sponsor
                      </CardDescription>
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-xs font-medium
                      ${
                        sponsor.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                      }`}
                    >
                      {sponsor.status.charAt(0).toUpperCase() + sponsor.status.slice(1)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="h-20 flex items-center justify-center bg-muted rounded-md mb-4">
                    <img
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Link className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {sponsor.website.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Contact: </span>
                      {sponsor.contactName}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email: </span>
                      <a href={`mailto:${sponsor.contactEmail}`} className="hover:underline">
                        {sponsor.contactEmail}
                      </a>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Amount: </span>
                      Rp {sponsor.amount.toLocaleString()}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="flex justify-end gap-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSponsor(sponsor.id === selectedSponsor ? null : sponsor.id)}
                    >
                      <Pencil className="h-4 w-4 mr-1" /> Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-1" /> Remove
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {selectedSponsor && (
            <Card>
              <CardHeader>
                <CardTitle>Edit {mockSponsors.find((s) => s.id === selectedSponsor)?.name}</CardTitle>
                <CardDescription>Update sponsor information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-name">Sponsor Name</Label>
                    <Input id="edit-name" defaultValue={mockSponsors.find((s) => s.id === selectedSponsor)?.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-level">Sponsorship Level</Label>
                    <Select defaultValue={mockSponsors.find((s) => s.id === selectedSponsor)?.level}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {sponsorLevels.map((level) => (
                          <SelectItem key={level.name} value={level.name}>
                            {level.displayName} - Rp {level.price.toLocaleString()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-contact">Contact Person</Label>
                    <Input
                      id="edit-contact"
                      defaultValue={mockSponsors.find((s) => s.id === selectedSponsor)?.contactName}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-email">Contact Email</Label>
                    <Input
                      id="edit-email"
                      type="email"
                      defaultValue={mockSponsors.find((s) => s.id === selectedSponsor)?.contactEmail}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-website">Website</Label>
                    <Input
                      id="edit-website"
                      defaultValue={mockSponsors.find((s) => s.id === selectedSponsor)?.website}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-amount">Amount (Rp)</Label>
                    <Input
                      id="edit-amount"
                      type="number"
                      defaultValue={mockSponsors.find((s) => s.id === selectedSponsor)?.amount}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-logo">Logo URL</Label>
                  <Input id="edit-logo" defaultValue={mockSponsors.find((s) => s.id === selectedSponsor)?.logo} />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="edit-status"
                    checked={mockSponsors.find((s) => s.id === selectedSponsor)?.status === "active"}
                  />
                  <Label htmlFor="edit-status">Active sponsor</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setSelectedSponsor(null)}>
                  Cancel
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Save Changes</Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="packages" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Sponsorship Packages</h2>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Plus className="h-4 w-4 mr-1" /> Add Package
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sponsorLevels.map((level) => (
              <Card key={level.name}>
                <CardHeader>
                  <CardTitle>{level.displayName}</CardTitle>
                  <CardDescription>Rp {level.price.toLocaleString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Pencil className="h-4 w-4 mr-1" /> Edit
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
