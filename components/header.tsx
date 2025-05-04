'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface HeaderProps {
  logoSrc?: string;
}

export function Header({ logoSrc = '/logo-cherrypop-official.png' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'LINEUP', href: '/lineup' },
    { label: 'MERCHANDISE', href: '/merchandise' },
    { label: 'NEWS', href: '/#news' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={logoSrc} alt="Cherrypop Festival" width={240} height={80} className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm font-medium hover:text-primary transition-colors nav-link">
                {item.label}
              </Link>
            ))}
            <div className="ml-4">
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center">
            <ModeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="ml-4 text-foreground focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 top-[76px] z-50 bg-background/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="block py-3 text-lg font-medium hover:text-primary border-b border-border/50" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
