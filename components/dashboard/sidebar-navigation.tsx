"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Calendar,
  Newspaper,
  ShoppingBag,
  Users,
  Settings,
  ImageIcon,
  BarChart3,
  Ticket,
  Handshake,
  MessageSquare,
  Share2,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/admin/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Events",
    href: "/admin/dashboard/events",
    icon: Calendar,
  },
  {
    title: "Lineup",
    href: "/admin/dashboard/lineup",
    icon: Calendar,
  },
  {
    title: "News",
    href: "/admin/dashboard/news",
    icon: Newspaper,
    submenu: [
      {
        title: "All Articles",
        href: "/admin/dashboard/news",
      },
      {
        title: "Add New",
        href: "/admin/dashboard/news/add",
      },
      {
        title: "Categories",
        href: "/admin/dashboard/news/categories",
      },
    ],
  },
  {
    title: "Merchandise",
    href: "/admin/dashboard/merchandise",
    icon: ShoppingBag,
  },
  {
    title: "Tickets",
    href: "/admin/dashboard/tickets",
    icon: Ticket,
  },
  {
    title: "Sponsors",
    href: "/admin/dashboard/sponsors",
    icon: Handshake,
  },
  {
    title: "Media Library",
    href: "/admin/dashboard/media",
    icon: ImageIcon,
  },
  {
    title: "Users",
    href: "/admin/dashboard/users",
    icon: Users,
  },
  {
    title: "Contact Submissions",
    href: "/admin/dashboard/contacts",
    icon: MessageSquare,
  },
  {
    title: "Social Media",
    href: "/admin/dashboard/social",
    icon: Share2,
  },
  {
    title: "Settings",
    href: "/admin/dashboard/settings",
    icon: Settings,
  },
]

export function SidebarNavigation() {
  const pathname = usePathname()
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({})
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { state } = useSidebar()

  useEffect(() => {
    // Close mobile menu when path changes
    setIsMobileMenuOpen(false)
  }, [pathname])

  const toggleSubmenu = (title: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon" className="border-r border-border">
        <SidebarHeader className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold mr-2">
              CP
            </div>
            <span className="font-bold text-lg">Cherry Pop</span>
          </div>
          <SidebarTrigger />
        </SidebarHeader>

        <SidebarContent>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.submenu ? (
                    <>
                      <SidebarMenuButton
                        onClick={() => toggleSubmenu(item.title)}
                        className={cn(
                          "flex justify-between",
                          isActive(item.href) && "bg-accent text-accent-foreground",
                        )}
                      >
                        <div className="flex items-center">
                          <item.icon className="h-4 w-4 mr-2" />
                          <span>{item.title}</span>
                        </div>
                        <ChevronRight
                          className={cn("h-4 w-4 transition-transform", openSubmenus[item.title] && "rotate-90")}
                        />
                      </SidebarMenuButton>
                      {openSubmenus[item.title] && (
                        <div className="ml-6 mt-1 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className={cn(
                                "flex items-center h-8 text-sm px-2 py-1 rounded-md hover:bg-accent hover:text-accent-foreground",
                                isActive(subItem.href) && "bg-accent text-accent-foreground font-medium",
                              )}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <SidebarMenuButton asChild isActive={isActive(item.href)} tooltip={item.title}>
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4 mr-2" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </ScrollArea>
        </SidebarContent>

        <SidebarFooter className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-muted overflow-hidden">
                <ImageIcon className="h-full w-full object-cover" />
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@cherrypop.id</p>
              </div>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      {/* Mobile Menu Button */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background/95 z-40 md:hidden">
          <div className="container py-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold mr-2">
                  CP
                </div>
                <span className="font-bold text-lg">Cherry Pop</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <ScrollArea className="h-[calc(100vh-10rem)]">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <div key={item.title} className="mb-2">
                    {item.submenu ? (
                      <>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-between",
                            isActive(item.href) && "bg-accent text-accent-foreground",
                          )}
                          onClick={() => toggleSubmenu(item.title)}
                        >
                          <div className="flex items-center">
                            <item.icon className="h-5 w-5 mr-3" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronRight
                            className={cn("h-4 w-4 transition-transform", openSubmenus[item.title] && "rotate-90")}
                          />
                        </Button>
                        {openSubmenus[item.title] && (
                          <div className="ml-9 mt-1 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className={cn(
                                  "flex items-center h-10 text-sm px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground",
                                  isActive(subItem.href) && "bg-accent text-accent-foreground font-medium",
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center h-12 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground",
                          isActive(item.href) && "bg-accent text-accent-foreground font-medium",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5 mr-3" />
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </SidebarProvider>
  )
}
