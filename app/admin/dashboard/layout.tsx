'use client';

import type React from 'react';

import {
  BarChart3,
  Calendar,
  ChevronDown,
  FileText,
  Handshake,
  ImageIcon,
  Laptop,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Moon,
  Settings,
  Share2,
  ShoppingBag,
  Sun,
  Ticket,
  Users,
  X,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [newsSubmenuOpen, setNewsSubmenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const pathname = usePathname();
  const { setTheme, theme } = useTheme() as { setTheme: (theme: string) => void; theme: string };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if the current path is in the news section to auto-expand the submenu
  useEffect(() => {
    if (pathname?.startsWith('/admin/dashboard/news')) {
      setNewsSubmenuOpen(true);
    }
  }, [pathname]);

  // Fixed isActive function to properly handle dashboard path
  const isActive = (path: string) => {
    // Exact match for dashboard root
    if (path === '/admin/dashboard') {
      return pathname === '/admin/dashboard';
    }
    // Regular check for other paths
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  // Determine the theme icon to show
  const renderThemeIcon = () => {
    if (!mounted) return null;
    if (theme === 'dark') return <Moon className="h-5 w-5" />;
    else if (theme === 'light') return <Sun className="h-5 w-5" />;
    else return <Laptop className="h-5 w-5" />;
  };

  const navItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: 'Analytics',
      href: '/admin/dashboard/analytics',
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      name: 'Lineup',
      href: '/admin/dashboard/lineup',
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      name: 'Events',
      href: '/admin/dashboard/events',
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      name: 'News',
      href: '/admin/dashboard/news',
      icon: <FileText className="h-5 w-5" />,
      submenu: [
        { name: 'All Articles', href: '/admin/dashboard/news' },
        { name: 'Add New', href: '/admin/dashboard/news/add' },
        { name: 'Categories', href: '/admin/dashboard/news/categories' },
      ],
    },
    {
      name: 'Media Library',
      href: '/admin/dashboard/media',
      icon: <ImageIcon className="h-5 w-5" />,
    },
    {
      name: 'Merchandise',
      href: '/admin/dashboard/merchandise',
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      name: 'Tickets',
      href: '/admin/dashboard/tickets',
      icon: <Ticket className="h-5 w-5" />,
    },
    {
      name: 'Sponsors',
      href: '/admin/dashboard/sponsors',
      icon: <Handshake className="h-5 w-5" />,
    },
    {
      name: 'Contact Messages',
      href: '/admin/dashboard/messages',
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      name: 'Social Media',
      href: '/admin/dashboard/social',
      icon: <Share2 className="h-5 w-5" />,
    },
    {
      name: 'Users',
      href: '/admin/dashboard/users',
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: 'Settings',
      href: '/admin/dashboard/settings',
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 bg-accent/10 rounded-md">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-background border-r border-border transform transition-all duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0 w-64' : 'lg:translate-x-0 -translate-x-full'
        } ${sidebarOpen ? 'lg:w-64' : 'lg:w-20'}`}
      >
        <div className="h-full flex flex-col">
          {/* Logo with Collapsible Toggle */}
          <div className="p-6 border-b border-border flex items-center justify-between">
            {sidebarOpen ? (
              <>
                <Link href="/admin/dashboard" className="text-2xl font-bold truncate">
                  CHERRYPOP
                </Link>
                <button onClick={toggleSidebar} className="lg:flex p-1.5 hover:bg-accent/10 rounded-md">
                  <Menu className="h-4 w-4" />
                </button>
              </>
            ) : (
              <button onClick={toggleSidebar} className="p-1.5 hover:bg-accent/10 rounded-md mx-auto" title="Expand sidebar">
                <Menu className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setNewsSubmenuOpen(!newsSubmenuOpen)}
                      className={`flex items-center justify-between w-full p-3 rounded-md ${isActive(item.href) ? 'bg-primary text-primary-foreground' : 'hover:bg-accent/10'}`}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        {sidebarOpen && <span className="ml-3">{item.name}</span>}
                      </div>
                      {sidebarOpen && <ChevronDown className={`h-4 w-4 transition-transform ${newsSubmenuOpen ? 'rotate-180' : ''}`} />}
                    </button>
                    {newsSubmenuOpen && sidebarOpen && (
                      <div className="pl-10 mt-1 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link key={subitem.name} href={subitem.href} className={`block p-2 rounded-md ${pathname === subitem.href ? 'bg-primary/20 text-primary' : 'hover:bg-accent/5'}`}>
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center p-3 rounded-md ${isActive(item.href) ? 'bg-primary text-primary-foreground' : 'hover:bg-accent/10'} ${!sidebarOpen ? 'justify-center' : ''}`}
                    title={!sidebarOpen ? item.name : ''}
                  >
                    {item.icon}
                    {sidebarOpen && <span className="ml-3">{item.name}</span>}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* User & Logout */}
          <div className="p-4 border-t border-border">
            {sidebarOpen ? (
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-medium">Admin User</p>
                  <p className="text-sm text-muted-foreground">admin@cherrypop.id</p>
                </div>
                <div className="relative">
                  <button onClick={() => setThemeMenuOpen(!themeMenuOpen)} className="p-2 hover:bg-accent/10 rounded-md">
                    {renderThemeIcon()}
                  </button>
                  {themeMenuOpen && (
                    <div className="absolute bottom-full right-0 mb-2 w-36 bg-background border border-border rounded-md shadow-lg overflow-hidden">
                      <button
                        onClick={() => {
                          setTheme('light');
                          setThemeMenuOpen(false);
                        }}
                        className="flex items-center w-full p-2 hover:bg-accent/10"
                      >
                        <Sun className="h-4 w-4 mr-2" />
                        <span>Light</span>
                      </button>
                      <button
                        onClick={() => {
                          setTheme('dark');
                          setThemeMenuOpen(false);
                        }}
                        className="flex items-center w-full p-2 hover:bg-accent/10"
                      >
                        <Moon className="h-4 w-4 mr-2" />
                        <span>Dark</span>
                      </button>
                      <button
                        onClick={() => {
                          setTheme('system');
                          setThemeMenuOpen(false);
                        }}
                        className="flex items-center w-full p-2 hover:bg-accent/10"
                      >
                        <Laptop className="h-4 w-4 mr-2" />
                        <span>System</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <button onClick={() => setThemeMenuOpen(!themeMenuOpen)} className="p-2 hover:bg-accent/10 rounded-md">
                    {renderThemeIcon()}
                  </button>
                  {themeMenuOpen && (
                    <div className="absolute bottom-full right-0 mb-2 w-36 bg-background border border-border rounded-md shadow-lg overflow-hidden">
                      <button
                        onClick={() => {
                          setTheme('light');
                          setThemeMenuOpen(false);
                        }}
                        className="flex items-center w-full p-2 hover:bg-accent/10"
                      >
                        <Sun className="h-4 w-4 mr-2" />
                        <span>Light</span>
                      </button>
                      <button
                        onClick={() => {
                          setTheme('dark');
                          setThemeMenuOpen(false);
                        }}
                        className="flex items-center w-full p-2 hover:bg-accent/10"
                      >
                        <Moon className="h-4 w-4 mr-2" />
                        <span>Dark</span>
                      </button>
                      <button
                        onClick={() => {
                          setTheme('system');
                          setThemeMenuOpen(false);
                        }}
                        className="flex items-center w-full p-2 hover:bg-accent/10"
                      >
                        <Laptop className="h-4 w-4 mr-2" />
                        <span>System</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            <Link href="/admin/login" className={`flex items-center p-3 rounded-md hover:bg-accent/10 w-full ${!sidebarOpen ? 'justify-center' : ''}`} title={!sidebarOpen ? 'Logout' : ''}>
              <LogOut className="h-5 w-5" />
              {sidebarOpen && <span className="ml-3">Logout</span>}
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:pl-64' : 'lg:pl-20'}`}>
        <main className="min-h-screen">{children}</main>
      </div>
    </div>
  );
}
