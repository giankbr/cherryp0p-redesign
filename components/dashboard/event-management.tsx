"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Plus, Pencil, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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

// Mock data for events
const mockEvents = [
  {
    id: 1,
    name: "Cherry Pop Festival 2023",
    startDate: new Date(2023, 6, 15),
    endDate: new Date(2023, 6, 17),
    location: "Jakarta International Stadium",
    status: "upcoming",
    capacity: 25000,
    ticketsSold: 18750,
  },
  {
    id: 2,
    name: "Cherry Pop Showcase",
    startDate: new Date(2023, 3, 8),
    endDate: new Date(2023, 3, 8),
    location: "Senayan City Hall",
    status: "completed",
    capacity: 5000,
    ticketsSold: 4800,
  },
  {
    id: 3,
    name: "Cherry Pop Winter Edition",
    startDate: new Date(2023, 11, 10),
    endDate: new Date(2023, 11, 12),
    location: "Bali International Convention Center",
    status: "planning",
    capacity: 15000,
    ticketsSold: 0,
  },
]

// Mock data for stages
const mockStages = [
  { id: 1, name: "Main Stage", capacity: 15000, eventId: 1 },
  { id: 2, name: "Electronic Stage", capacity: 8000, eventId: 1 },
  { id: 3, name: "Acoustic Stage", capacity: 2000, eventId: 1 },
  { id: 4, name: "Main Stage", capacity: 5000, eventId: 2 },
  { id: 5, name: "Main Stage", capacity: 10000, eventId: 3 },
  { id: 6, name: "Alternative Stage", capacity: 5000, eventId: 3 },
]

export default function EventManagement() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [isAddEventDialogOpen, setIsAddEventDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      <Tabs defaultValue="events">
        <TabsList>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="stages">Stages</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">All Events</h2>
            <Dialog open={isAddEventDialogOpen} onOpenChange={setIsAddEventDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Plus className="h-4 w-4 mr-1" /> Add Event
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Add New Event</DialogTitle>
                  <DialogDescription>Create a new event for your festival.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="event-name">Event Name</Label>
                    <Input id="event-name" placeholder="Enter event name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Start Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="grid gap-2">
                      <Label>End Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Enter event location" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="capacity">Capacity</Label>
                      <Input id="capacity" type="number" placeholder="0" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="status">Status</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="planning">Planning</SelectItem>
                          <SelectItem value="upcoming">Upcoming</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Enter event description" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddEventDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Save Event</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Tickets Sold</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium">{event.name}</TableCell>
                    <TableCell>
                      {format(event.startDate, "MMM d, yyyy")}
                      {!isSameDay(event.startDate, event.endDate) && ` - ${format(event.endDate, "MMM d, yyyy")}`}
                    </TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${
                          event.status === "upcoming"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            : event.status === "completed"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                        }`}
                      >
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </div>
                    </TableCell>
                    <TableCell>{event.capacity.toLocaleString()}</TableCell>
                    <TableCell>
                      {event.ticketsSold.toLocaleString()}
                      {event.capacity > 0 && (
                        <span className="text-muted-foreground text-xs">
                          {" "}
                          ({Math.round((event.ticketsSold / event.capacity) * 100)}%)
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedEvent(event.id === selectedEvent ? null : event.id)}
                        >
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {selectedEvent && (
            <Card>
              <CardHeader>
                <CardTitle>{mockEvents.find((e) => e.id === selectedEvent)?.name}</CardTitle>
                <CardDescription>Edit event details and information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-name">Event Name</Label>
                    <Input id="edit-name" defaultValue={mockEvents.find((e) => e.id === selectedEvent)?.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-location">Location</Label>
                    <Input id="edit-location" defaultValue={mockEvents.find((e) => e.id === selectedEvent)?.location} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {format(mockEvents.find((e) => e.id === selectedEvent)?.startDate || new Date(), "PPP")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={mockEvents.find((e) => e.id === selectedEvent)?.startDate}
                          onSelect={() => {}}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {format(mockEvents.find((e) => e.id === selectedEvent)?.endDate || new Date(), "PPP")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={mockEvents.find((e) => e.id === selectedEvent)?.endDate}
                          onSelect={() => {}}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select defaultValue={mockEvents.find((e) => e.id === selectedEvent)?.status}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="planning">Planning</SelectItem>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-capacity">Capacity</Label>
                    <Input
                      id="edit-capacity"
                      type="number"
                      defaultValue={mockEvents.find((e) => e.id === selectedEvent)?.capacity}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-tickets">Tickets Sold</Label>
                    <Input
                      id="edit-tickets"
                      type="number"
                      defaultValue={mockEvents.find((e) => e.id === selectedEvent)?.ticketsSold}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setSelectedEvent(null)}>
                  Cancel
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Save Changes</Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="stages" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Stages</h2>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Plus className="h-4 w-4 mr-1" /> Add Stage
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Stage Name</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockStages.map((stage) => (
                  <TableRow key={stage.id}>
                    <TableCell className="font-medium">{stage.name}</TableCell>
                    <TableCell>{mockEvents.find((e) => e.id === stage.eventId)?.name}</TableCell>
                    <TableCell>{stage.capacity.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Event Schedule</h2>
            <div className="flex gap-2">
              <Select defaultValue="1">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select event" />
                </SelectTrigger>
                <SelectContent>
                  {mockEvents.map((event) => (
                    <SelectItem key={event.id} value={event.id.toString()}>
                      {event.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Plus className="h-4 w-4 mr-1" /> Add Performance
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cherry Pop Festival 2023 Schedule</CardTitle>
              <CardDescription>July 15-17, 2023 • Jakarta International Stadium</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="day1">
                <TabsList className="mb-4">
                  <TabsTrigger value="day1">Day 1 (July 15)</TabsTrigger>
                  <TabsTrigger value="day2">Day 2 (July 16)</TabsTrigger>
                  <TabsTrigger value="day3">Day 3 (July 17)</TabsTrigger>
                </TabsList>
                <TabsContent value="day1" className="space-y-4">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Artist</TableHead>
                          <TableHead>Stage</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>18:00 - 19:00</TableCell>
                          <TableCell className="font-medium">Opening Act</TableCell>
                          <TableCell>Main Stage</TableCell>
                          <TableCell>60 min</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>19:30 - 20:30</TableCell>
                          <TableCell className="font-medium">The Weekenders</TableCell>
                          <TableCell>Main Stage</TableCell>
                          <TableCell>60 min</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>21:00 - 22:30</TableCell>
                          <TableCell className="font-medium">Headliner</TableCell>
                          <TableCell>Main Stage</TableCell>
                          <TableCell>90 min</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                <TabsContent value="day2" className="space-y-4">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Artist</TableHead>
                          <TableHead>Stage</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>18:00 - 19:00</TableCell>
                          <TableCell className="font-medium">Sunset Collective</TableCell>
                          <TableCell>Main Stage</TableCell>
                          <TableCell>60 min</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>19:30 - 20:30</TableCell>
                          <TableCell className="font-medium">Midnight Runners</TableCell>
                          <TableCell>Main Stage</TableCell>
                          <TableCell>60 min</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>21:00 - 22:30</TableCell>
                          <TableCell className="font-medium">Day 2 Headliner</TableCell>
                          <TableCell>Main Stage</TableCell>
                          <TableCell>90 min</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                <TabsContent value="day3" className="space-y-4">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Artist</TableHead>
                          <TableHead>Stage</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>18:00 - 19:00</TableCell>
                          <TableCell className="font-medium">Final Day Opener</TableCell>
                          <TableCell>Main Stage</TableCell>
                          <TableCell>60 min</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>19:30 - 20:30</TableCell>
                          <TableCell className="font-medium">The Closers</TableCell>
                          <TableCell>Main Stage</TableCell>
                          <TableCell>60 min</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>21:00 - 23:00</TableCell>
                          <TableCell className="font-medium">Festival Finale</TableCell>
                          <TableCell>Main Stage</TableCell>
                          <TableCell>120 min</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Helper function to check if two dates are the same day
function isSameDay(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}
