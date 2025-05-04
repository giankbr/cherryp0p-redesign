"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { format } from "date-fns"
import { Plus, Pencil, Trash2, BarChart3, Download, Filter } from "lucide-react"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for ticket types
const mockTicketTypes = [
  {
    id: 1,
    name: "Early Bird",
    price: 150000,
    quantity: 1000,
    sold: 1000,
    eventId: 1,
    status: "sold-out",
    startDate: new Date(2023, 3, 1),
    endDate: new Date(2023, 4, 15),
  },
  {
    id: 2,
    name: "Regular",
    price: 250000,
    quantity: 3000,
    sold: 2100,
    eventId: 1,
    status: "on-sale",
    startDate: new Date(2023, 4, 16),
    endDate: new Date(2023, 6, 14),
  },
  {
    id: 3,
    name: "VIP",
    price: 500000,
    quantity: 500,
    sold: 320,
    eventId: 1,
    status: "on-sale",
    startDate: new Date(2023, 3, 1),
    endDate: new Date(2023, 6, 14),
  },
  {
    id: 4,
    name: "VVIP",
    price: 1000000,
    quantity: 100,
    sold: 45,
    eventId: 1,
    status: "on-sale",
    startDate: new Date(2023, 3, 1),
    endDate: new Date(2023, 6, 14),
  },
]

// Mock data for ticket sales
const mockTicketSales = [
  {
    id: "T-12345",
    customerName: "John Doe",
    email: "john.doe@example.com",
    ticketType: "VIP",
    quantity: 2,
    totalPrice: 1000000,
    purchaseDate: new Date(2023, 5, 10),
    status: "confirmed",
  },
  {
    id: "T-12346",
    customerName: "Jane Smith",
    email: "jane.smith@example.com",
    ticketType: "Regular",
    quantity: 4,
    totalPrice: 1000000,
    purchaseDate: new Date(2023, 5, 12),
    status: "confirmed",
  },
  {
    id: "T-12347",
    customerName: "Bob Johnson",
    email: "bob.johnson@example.com",
    ticketType: "Early Bird",
    quantity: 2,
    totalPrice: 300000,
    purchaseDate: new Date(2023, 4, 5),
    status: "confirmed",
  },
  {
    id: "T-12348",
    customerName: "Alice Brown",
    email: "alice.brown@example.com",
    ticketType: "VVIP",
    quantity: 1,
    totalPrice: 1000000,
    purchaseDate: new Date(2023, 5, 15),
    status: "confirmed",
  },
  {
    id: "T-12349",
    customerName: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    ticketType: "Regular",
    quantity: 6,
    totalPrice: 1500000,
    purchaseDate: new Date(2023, 5, 18),
    status: "pending",
  },
]

export default function TicketManagement() {
  const [isAddTicketTypeDialogOpen, setIsAddTicketTypeDialogOpen] = useState(false)
  const [selectedTicketType, setSelectedTicketType] = useState<number | null>(null)

  // Calculate total sales and revenue
  const totalTicketsSold = mockTicketTypes.reduce((sum, ticket) => sum + ticket.sold, 0)
  const totalRevenue = mockTicketTypes.reduce((sum, ticket) => sum + ticket.price * ticket.sold, 0)
  const totalCapacity = mockTicketTypes.reduce((sum, ticket) => sum + ticket.quantity, 0)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Tickets Sold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTicketsSold.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round((totalTicketsSold / totalCapacity) * 100)}% of capacity
            </p>
            <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-red-600 rounded-full"
                style={{ width: `${(totalTicketsSold / totalCapacity) * 100}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp {totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">From {totalTicketsSold} tickets</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Available Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(totalCapacity - totalTicketsSold).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round(((totalCapacity - totalTicketsSold) / totalCapacity) * 100)}% remaining
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="ticket-types">
        <TabsList>
          <TabsTrigger value="ticket-types">Ticket Types</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="promotions">Promotions</TabsTrigger>
        </TabsList>

        <TabsContent value="ticket-types" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Ticket Types</h2>
            <Dialog open={isAddTicketTypeDialogOpen} onOpenChange={setIsAddTicketTypeDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Plus className="h-4 w-4 mr-1" /> Add Ticket Type
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Add New Ticket Type</DialogTitle>
                  <DialogDescription>Create a new ticket type for your event.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="ticket-name">Ticket Name</Label>
                    <Input id="ticket-name" placeholder="Enter ticket name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="price">Price (Rp)</Label>
                      <Input id="price" type="number" placeholder="0" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input id="quantity" type="number" placeholder="0" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Start Date</Label>
                      <Input type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label>End Date</Label>
                      <Input type="date" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="event">Event</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Cherry Pop Festival 2023</SelectItem>
                        <SelectItem value="2">Cherry Pop Showcase</SelectItem>
                        <SelectItem value="3">Cherry Pop Winter Edition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="active" />
                    <Label htmlFor="active">Active and available for purchase</Label>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Enter ticket description and benefits" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddTicketTypeDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Save Ticket Type</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Sold</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Sale Period</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTicketTypes.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">{ticket.name}</TableCell>
                    <TableCell>Rp {ticket.price.toLocaleString()}</TableCell>
                    <TableCell>{ticket.quantity.toLocaleString()}</TableCell>
                    <TableCell>
                      {ticket.sold.toLocaleString()}
                      <span className="text-muted-foreground text-xs">
                        {" "}
                        ({Math.round((ticket.sold / ticket.quantity) * 100)}%)
                      </span>
                    </TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${
                          ticket.status === "on-sale"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : ticket.status === "sold-out"
                              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                              : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                        }`}
                      >
                        {ticket.status === "on-sale"
                          ? "On Sale"
                          : ticket.status === "sold-out"
                            ? "Sold Out"
                            : "Coming Soon"}
                      </div>
                    </TableCell>
                    <TableCell>
                      {format(ticket.startDate, "MMM d")} - {format(ticket.endDate, "MMM d, yyyy")}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedTicketType(ticket.id === selectedTicketType ? null : ticket.id)}
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

          {selectedTicketType && (
            <Card>
              <CardHeader>
                <CardTitle>{mockTicketTypes.find((t) => t.id === selectedTicketType)?.name}</CardTitle>
                <CardDescription>Edit ticket type details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-name">Ticket Name</Label>
                    <Input
                      id="edit-name"
                      defaultValue={mockTicketTypes.find((t) => t.id === selectedTicketType)?.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-price">Price (Rp)</Label>
                    <Input
                      id="edit-price"
                      type="number"
                      defaultValue={mockTicketTypes.find((t) => t.id === selectedTicketType)?.price}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-quantity">Quantity</Label>
                    <Input
                      id="edit-quantity"
                      type="number"
                      defaultValue={mockTicketTypes.find((t) => t.id === selectedTicketType)?.quantity}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-sold">Sold</Label>
                    <Input
                      id="edit-sold"
                      type="number"
                      defaultValue={mockTicketTypes.find((t) => t.id === selectedTicketType)?.sold}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input
                      type="date"
                      defaultValue={
                        mockTicketTypes
                          .find((t) => t.id === selectedTicketType)
                          ?.startDate.toISOString()
                          .split("T")[0]
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      type="date"
                      defaultValue={
                        mockTicketTypes
                          .find((t) => t.id === selectedTicketType)
                          ?.endDate.toISOString()
                          .split("T")[0]
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select defaultValue={mockTicketTypes.find((t) => t.id === selectedTicketType)?.status}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="on-sale">On Sale</SelectItem>
                      <SelectItem value="sold-out">Sold Out</SelectItem>
                      <SelectItem value="coming-soon">Coming Soon</SelectItem>
                      <SelectItem value="ended">Sale Ended</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setSelectedTicketType(null)}>
                  Cancel
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Save Changes</Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="sales" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl font-semibold">Ticket Sales</h2>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <BarChart3 className="h-4 w-4" />
                Reports
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Ticket Type</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Purchase Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTicketSales.map((sale) => (
                  <TableRow key={sale.id}>
                    <TableCell className="font-medium">{sale.id}</TableCell>
                    <TableCell>
                      <div>
                        <div>{sale.customerName}</div>
                        <div className="text-xs text-muted-foreground">{sale.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{sale.ticketType}</TableCell>
                    <TableCell>{sale.quantity}</TableCell>
                    <TableCell>Rp {sale.totalPrice.toLocaleString()}</TableCell>
                    <TableCell>{format(sale.purchaseDate, "MMM d, yyyy")}</TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${
                          sale.status === "confirmed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                        }`}
                      >
                        {sale.status.charAt(0).toUpperCase() + sale.status.slice(1)}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Actions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Manage Order</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Send Tickets</DropdownMenuItem>
                          <DropdownMenuItem>Refund</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Cancel Order</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="promotions" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Promotions & Discounts</h2>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Plus className="h-4 w-4 mr-1" /> Add Promotion
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Early Bird 15% OFF</CardTitle>
                <CardDescription>Valid until June 15, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Discount:</span>
                    <span>15% off all ticket types</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Code:</span>
                    <span className="font-mono">EARLYBIRD15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Redemptions:</span>
                    <span>243 / 500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Active
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-600">
                  Disable
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group Discount</CardTitle>
                <CardDescription>Buy 4 or more tickets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Discount:</span>
                    <span>10% off when buying 4+ tickets</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Code:</span>
                    <span className="font-mono">GROUP10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Redemptions:</span>
                    <span>87 / Unlimited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Active
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-600">
                  Disable
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
